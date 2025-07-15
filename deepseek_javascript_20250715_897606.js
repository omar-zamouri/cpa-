document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();

    // Mobile menu functionality
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.createElement('div');
    mobileMenu.className = 'mobile-menu';
    mobileMenu.innerHTML = `
        <div class="mobile-menu-header">
            <div class="logo"><i class="fas fa-cube"></i> App<span>Hub</span></div>
            <div class="close-menu"><i class="fas fa-times"></i></div>
        </div>
        <div class="mobile-nav-links">
            <a href="#apps"><i class="fas fa-mobile-alt"></i> Apps</a>
            <a href="#categories"><i class="fas fa-th-large"></i> Categories</a>
            <a href="#premium"><i class="fas fa-crown"></i> Premium</a>
            <a href="#contact"><i class="fas fa-envelope"></i> Contact</a>
        </div>
    `;
    document.body.appendChild(mobileMenu);

    mobileMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.add('active');
    });

    document.querySelector('.close-menu').addEventListener('click', function() {
        mobileMenu.classList.remove('active');
    });

    // Close mobile menu when clicking on a link
    const mobileLinks = document.querySelectorAll('.mobile-nav-links a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
        });
    });

    // App data
    const apps = [
        {
            id: 1,
            name: "Spotify Premium",
            icon: "fab fa-spotify",
            description: "Unlocked premium features including ad-free music, unlimited skips and high quality audio.",
            features: [
                { icon: "fas fa-ad", text: "Ad-Free" },
                { icon: "fas fa-unlock", text: "Unlocked" },
                { icon: "fas fa-music", text: "High Quality" }
            ],
            rating: 4.8,
            downloads: "10K+",
            size: "45 MB",
            badge: "MOD",
            bgColor: "#1DB954"
        },
        {
            id: 2,
            name: "YouTube Vanced",
            icon: "fab fa-youtube",
            description: "Ad-free YouTube with background play, PIP and premium features unlocked.",
            features: [
                { icon: "fas fa-ad", text: "Ad-Free" },
                { icon: "fas fa-background", text: "Background" },
                { icon: "fas fa-unlock", text: "Premium" }
            ],
            rating: 4.9,
            downloads: "25K+",
            size: "38 MB",
            badge: "VIP",
            bgColor: "#FF0000"
        },
        {
            id: 3,
            name: "Netflix Mod",
            icon: "fab fa-netflix",
            description: "Watch all Netflix content without subscription including 4K quality.",
            features: [
                { icon: "fas fa-unlock", text: "Unlocked" },
                { icon: "fas fa-film", text: "4K Quality" },
                { icon: "fas fa-globe", text: "Region Free" }
            ],
            rating: 4.7,
            downloads: "8K+",
            size: "52 MB",
            badge: "PRO",
            bgColor: "#E50914"
        },
        {
            id: 4,
            name: "TikTok Mod",
            icon: "fab fa-tiktok",
            description: "No ads, unlimited downloads, region unlocked and premium effects.",
            features: [
                { icon: "fas fa-ad", text: "Ad-Free" },
                { icon: "fas fa-download", text: "Downloads" },
                { icon: "fas fa-globe", text: "Region Free" }
            ],
            rating: 4.8,
            downloads: "15K+",
            size: "65 MB",
            badge: "MOD",
            bgColor: "#000000"
        },
        {
            id: 5,
            name: "PhotoShop Express",
            icon: "fas fa-camera-retro",
            description: "All premium filters and tools unlocked. No watermark on exports.",
            features: [
                { icon: "fas fa-unlock", text: "Premium" },
                { icon: "fas fa-slash", text: "No Watermark" },
                { icon: "fas fa-tools", text: "All Tools" }
            ],
            rating: 4.6,
            downloads: "7K+",
            size: "85 MB",
            badge: "PRO",
            bgColor: "#31A8FF"
        },
        {
            id: 6,
            name: "VPN Pro",
            icon: "fas fa-shield-alt",
            description: "Unlimited bandwidth, all locations unlocked with premium speed.",
            features: [
                { icon: "fas fa-bolt", text: "Fast" },
                { icon: "fas fa-globe-americas", text: "Locations" },
                { icon: "fas fa-infinity", text: "Unlimited" }
            ],
            rating: 4.9,
            downloads: "12K+",
            size: "28 MB",
            badge: "VIP",
            bgColor: "#76C047"
        }
    ];

    // Render apps
    const appGrid = document.getElementById('appGrid');
    
    apps.forEach(app => {
        const featuresHTML = app.features.map(feature => 
            `<span class="feature-tag"><i class="${feature.icon}"></i> ${feature.text}</span>`
        ).join('');
        
        const appCard = document.createElement('div');
        appCard.className = 'app-card';
        appCard.innerHTML = `
            <div class="app-badge">${app.badge}</div>
            <div class="app-image" style="background-color: ${app.bgColor};">
                <i class="${app.icon}"></i>
            </div>
            <div class="app-content">
                <h3><i class="${app.icon}"></i> ${app.name}</h3>
                <p>${app.description}</p>
                <div class="app-features">
                    ${featuresHTML}
                </div>
                <div class="app-meta">
                    <span class="app-rating"><i class="fas fa-star"></i> ${app.rating} (${app.downloads})</span>
                    <span class="app-size"><i class="fas fa-database"></i> ${app.size}</span>
                </div>
                <a href="#" class="download-btn" data-app-id="${app.id}"><i class="fas fa-download"></i> Download APK</a>
            </div>
        `;
        appGrid.appendChild(appCard);
    });

    // Download button click handler
    document.querySelectorAll('.download-btn').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const appId = this.getAttribute('data-app-id');
            const app = apps.find(a => a.id == appId);
            // Here you would typically redirect to download or show a modal
            alert(`Downloading ${app.name}...`);
            // In a real implementation, you would track this download for CPA
        });
    });

    // Category card click handler
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', function() {
            const category = this.querySelector('h3').textContent;
            alert(`Showing apps in category: ${category}`);
            // In a real implementation, you would filter the apps by category
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});