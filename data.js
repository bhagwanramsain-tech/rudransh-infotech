// ============================================
// ADMIN PANEL / CONFIGURATION FILE
// ============================================
// Edit this file to change website content.
// No coding knowledge required, just change the text inside quotes "".

const siteConfig = {
    // Contact Information
    contact: {
        whatsappNumber: "919667862830", // Enter your real number here (Country Code + Number)
        email: "Ruranshinfotechservices@gmail.com",
        serviceArea: "Currently serving Rajasthan, India (Online Services Global)"
    },

    // Payment Information
    payment: {
        upiId: "YourUPI@okbank", // Optional: Displayed if needed
        qrImage: "payment_qr_placeholder.png" // Name of your QR code image file
    },

    // Service Categories and Items
    categories: [
        {
            id: "data-systems",
            title: "Data & Critical Systems",
            icon: "fas fa-database",
            services: [
                { name: "Data Recovery", icon: "fas fa-hdd", desc: "PC, HDD, SSD, NVMe, Pen Drives, Mobiles." },
                { name: "Full Data Restoration", icon: "fas fa-history", desc: "Recover lost data from scratch." },
                { name: "System Crash Recovery", icon: "fas fa-dumpster-fire", desc: "Fix BSOD, boot errors, and lost partitions." },
                { name: "Sanjeevani Pen Drive", icon: "fas fa-briefcase-medical", desc: "Emergency access to C: drive data." },
                { name: "Windows Cloning", icon: "fas fa-copy", desc: "Clone your system with all software intact." },
                { name: "Unlock Windows", icon: "fas fa-lock-open", desc: "Forgot password? Unlock without data loss." },
                { name: "PC/Laptop Clone", icon: "fas fa-clone", desc: "Duplicate your entire PC setup." },
                { name: "Portable PC Clone", icon: "fas fa-suitcase", desc: "Make your system plug-and-play." }
            ]
        },
        {
            id: "os-solutions",
            title: "Windows & OS Solutions",
            icon: "fab fa-windows",
            services: [
                { name: "Portable Windows", icon: "fas fa-save", desc: "Plug-and-play OS for any device." },
                { name: "OS Installation", icon: "fab fa-microsoft", desc: "Win 7, 8, 8.1, 10, 11 customized installation." },
                { name: "Multi-Boot", icon: "fas fa-layer-group", desc: "Run 2+ Operating Systems on one laptop." },
                { name: "Windows Lite", icon: "fas fa-feather-alt", desc: "Lightweight versions for speed." },
                { name: "Custom Windows", icon: "fas fa-tools", desc: "Your OS pre-loaded with required software." },
                { name: "Licensed Windows", icon: "fas fa-key", desc: "Genuine keys for any Windows version." },
                { name: "Pen-Drive PC", icon: "fas fa-usb", desc: "Full PC in your pocket (No Laptop needed)." },
                { name: "Low-End PC OS", icon: "fas fa-microchip", desc: "Optimized OS for 2GB/4GB RAM devices." }
            ]
        },
        {
            id: "software-opt",
            title: "Software & Optimization",
            icon: "fas fa-rocket",
            services: [
                { name: "Portable Apps", icon: "fas fa-box-open", desc: "Run heavy apps (e.g., Photoshop) without install." },
                { name: "Super Scripts", icon: "fas fa-tachometer-alt", desc: "One-click speedup, cleanup, and RAM boost." },
                { name: "Any Software", icon: "fas fa-cloud-download-alt", desc: "You name it, we provide it (Full/Registered)." },
                { name: "Android on PC", icon: "fab fa-android", desc: "Play mobile games (e.g., PUBG, Free Fire) lag-free." },
                { name: "Affordable Software", icon: "fas fa-tags", desc: "Premium software at affordable prices." },
                { name: "Adobe Suite", icon: "fas fa-pencil-ruler", desc: "All Adobe tools at the lowest price." },
                { name: "Editing Tools", icon: "fas fa-photo-video", desc: "Photoshop CS-2024, Anurag, Julie." }
            ]
        },
        {
            id: "creative-ai",
            title: "Creative & AI Studio",
            icon: "fas fa-palette",
            services: [
                { name: "AI Imaging", icon: "fas fa-magic", desc: "Turn your imagination into images." },
                { name: "Graphic Design", icon: "fas fa-paint-brush", desc: "Posters, Banners, Logos (3D/4K/8K)." },
                { name: "Custom Art", icon: "fas fa-star", desc: "Cards & designs for all occasions." },
                { name: "Ad Animation", icon: "fas fa-video", desc: "Video ads for business promotion." },
                { name: "Album Maker", icon: "fas fa-images", desc: "Automated album creation tools." },
                { name: "ChatGPT AI", icon: "fas fa-robot", desc: "Unlimited Q&A software (Free)." }
            ]
        },
        {
            id: "edu-hardware",
            title: "Education & Hardware",
            icon: "fas fa-user-graduate",
            services: [
                { name: "Result Software", icon: "fas fa-poll", desc: "For Schools & Coaching Institutes." },
                { name: "NCERT Content", icon: "fas fa-book", desc: "Class 1-12 Notes, Videos, Solutions." },
                { name: "Office Learning", icon: "fas fa-file-excel", desc: "Excel formulas for jobs and business." },
                { name: "Free OTT Access", icon: "fas fa-film", desc: "Watch Movies/TV Shows without monthly fees." },
                { name: "Cybersecurity", icon: "fas fa-user-secret", desc: "Safe browsing and security education." },
                { name: "Hardware Sales", icon: "fas fa-shopping-cart", desc: "Refurbished & New Laptops/PCs." }
            ]
        }
    ]
};
