document.addEventListener("DOMContentLoaded", () => {
    
    // ==========================================
    // PAGE 1: BASIC INTEL (index.html)
    // ==========================================
    if (document.getElementById("public-ip")) {
        
        // 1. Fetch IP Address
        fetch('https://api.ipify.org?format=json')
            .then(response => response.json())
            .then(data => {
                const ipElement = document.getElementById("public-ip");
                ipElement.innerText = data.ip;
                ipElement.classList.remove("loading");
            })
            .catch(() => {
                document.getElementById("public-ip").innerText = "Blocked/Failed";
            });

        // 2. Hardware & Device Intel
        document.getElementById("os-info").innerText = navigator.platform || "Unknown";
        document.getElementById("cpu-cores").innerText = navigator.hardwareConcurrency || "Hidden";
        document.getElementById("resolution").innerText = `${window.screen.width} x ${window.screen.height}`;
        document.getElementById("language").innerText = navigator.language || "Unknown";

        // 3. Network Connection (if supported)
        const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
        document.getElementById("connection-type").innerText = connection ? connection.effectiveType : "Unknown";

        // 4. Privacy Posture
        const dnt = navigator.doNotTrack === "1" ? "Enabled" : "Disabled";
        document.getElementById("dnt-status").innerText = dnt;
        document.getElementById("cookie-status").innerText = navigator.cookieEnabled ? "Enabled" : "Disabled";
    }

    // ==========================================
    // PAGE 2: DEEP SCAN (advanced.html)
    // ==========================================
    if (document.getElementById("canvas-hash")) {
        
        // 1. Canvas Fingerprinting Generation
        setTimeout(() => {
            const canvas = document.getElementById("fingerprint-canvas");
            const ctx = canvas.getContext("2d");

            // Draw a complex shape with text to force GPU rendering differences
            ctx.textBaseline = "top";
            ctx.font = "14px 'Arial'";
            ctx.textBaseline = "alphabetic";
            ctx.fillStyle = "#f60";
            ctx.fillRect(125,1,62,20);
            ctx.fillStyle = "#069";
            ctx.fillText("NetScan, OSINT!", 2, 15);
            ctx.fillStyle = "rgba(102, 204, 0, 0.7)";
            ctx.fillText("NetScan, OSINT!", 4, 17);

            // Convert canvas drawing to Base64 Data URL
            const dataURL = canvas.toDataURL();
            
            // Create a simple hash from the dataURL
            let hash = 0;
            for (let i = 0; i < dataURL.length; i++) {
                const char = dataURL.charCodeAt(i);
                hash = ((hash << 5) - hash) + char;
                hash = hash & hash; // Convert to 32bit integer
            }
            
            const hashElement = document.getElementById("canvas-hash");
            hashElement.innerText = Math.abs(hash).toString(16).toUpperCase(); 
            hashElement.classList.remove("loading");
            hashElement.style.color = "#d13030"; 
        }, 800);

        // 2. Automation/Bot Detection
        const isBot = navigator.webdriver ? "Detected (Bot/Crawler)" : "Clean (Human)";
        document.getElementById("webdriver-status").innerText = isBot;

        // 3. Simple AdBlocker Check
        const adTest = document.createElement('div');
        adTest.className = 'adsbox ad-placement';
        adTest.style.display = 'none';
        document.body.appendChild(adTest);
        
        setTimeout(() => {
            const isBlocked = adTest.offsetHeight === 0;
            document.getElementById("adblock-status").innerText = isBlocked ? "Active" : "Not Detected";
            document.body.removeChild(adTest);
        }, 100);
    }
});