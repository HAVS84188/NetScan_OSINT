# NetScan_OSINT
A client-side OSINT dashboard and digital footprint analyzer demonstrating how websites extract network identity, hardware profiles, and canvas fingerprints.
NetScan_OSINT is a client-side cybersecurity tool and educational dashboard designed with a Shodan-inspired terminal aesthetic. The project visualizes how modern websites passively extract personal data, profile physical hardware, and build persistent tracking signatures without explicit user consent.

Built entirely with standard web technologies, the application operates across two dedicated views: a baseline identity audit and a deep hardware fingerprinting analysis.

Core Capabilities
Network Identity Audit: Asynchronously queries public lookup APIs to resolve the visitor's public-facing IP address and evaluates active connection types.

Hardware & Environment Profiling: Queries the browser runtime environment using the native navigator and window objects to extract operating system platform details, logical CPU core concurrency, display resolution, and system language settings.

Canvas GPU Fingerprinting: Silently draws geometric paths, alpha layers, and typographic elements to a hidden HTML5 <canvas> element. Subtle anti-aliasing and pixel rendering discrepancies across different GPU architectures, drivers, and operating systems are processed into a unique Base64-derived hash identifier.

Tracking Posture & Evasion Auditing: Reads browser privacy signals (navigator.doNotTrack), checks cookie readiness, detects automated browser instances (navigator.webdriver), and assesses the presence of client-side ad blockers using DOM-based element baiting.

Educational Threat Breakdowns: Includes in-depth technical explanations at the base of each module, highlighting how data brokers correlate these individual signals to track users across incognito sessions and private networks.

Tech Stack
HTML5: Semantic architecture, multi-page routing, hidden canvas manipulation.

CSS3: Responsive CSS Grid layouts, Shodan-inspired dark/red theme, dynamic animations.

Vanilla JavaScript (ES6+): Asynchronous API handling (fetch), DOM operations, bitwise hashing algorithms, hardware attribute extraction.

Project Structure
Plaintext
├── index.html        # Target Overview: Network, hardware, and privacy posture
├── advanced.html     # Deep Scan: Canvas fingerprinting and evasion detection
├── style.css         # Responsive styling and terminal UI
└── main.js           # Inspection routines, API handling, and hashing logic
Developed by AVS Agencies (Mr. Atharva Veer Singh).
