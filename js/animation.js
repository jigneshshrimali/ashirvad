/**
 * Ashirwad Front-End Motion System Architecture Logic
 * Premium Global UX Execution Engine using GSAP Core, ScrollTrigger & Lenis
 */

document.addEventListener("DOMContentLoaded", () => {
    
    // Safety verification check for third-party scripts injection
    if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
        console.error("Critical Motion Framework dependencies are unavailable inside target DOM compilation.");
        return;
    }

    gsap.registerPlugin(ScrollTrigger);

    // =========================================================================
    // 1. LENIS SMOOTH RUNTIME SCROLL PLATFORM ENGINE
    // =========================================================================
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // =========================================================================
    // 2. HARD PRELOADER & COUNTER INITIALIZATION SEQUENCE
    // =========================================================================
    let loadingPercentage = 0;
    const percentageElement = document.getElementById("loader-percentage");
    
    gsap.to("#kolam-path", {
        strokeDashoffset: 0,
        duration: 2.5,
        ease: "power2.inOut"
    });

    const loadingInterval = setInterval(() => {
        loadingPercentage += Math.floor(Math.random() * 8) + 4;
        if (loadingPercentage >= 100) {
            loadingPercentage = 100;
            clearInterval(loadingInterval);
            
            // Graceful preloader exit configuration path transition
            gsap.to("#loader", {
                yPercent: -100,
                duration: 1,
                ease: "power4.inOut",
                onComplete: () => {
                    document.getElementById("loader").style.display = "none";
                    triggerHeroAnimations();
                }
            });
        }
        percentageElement.innerText = `${loadingPercentage}%`;
    }, 70);

    // =========================================================================
    // 3. FLUID CUSTOM MOUSE TRAILING VECTOR ENVELOPE
    // =========================================================================
    const cursor = document.getElementById("custom-cursor");
    const follower = document.getElementById("custom-cursor-follower");
    let mouseX = 0, mouseY = 0;

    window.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        gsap.to(cursor, { x: mouseX, y: mouseY, duration: 0.05 });
        gsap.to(follower, { x: mouseX, y: mouseY, duration: 0.2 });
    });

    // Premium Interaction Hover Listeners Matrix (5 Interactions + 5 Premium Hover effects)
    document.querySelectorAll('.interactive-target').forEach(target => {
        target.addEventListener('mouseenter', () => {
            gsap.to(cursor, { scale: 2.5, backgroundColor: '#E5A93C' });
            gsap.to(follower, { scale: 1.3, borderColor: '#E5A93C', backgroundColor: 'rgba(229,169,60,0.05)' });
        });
        target.addEventListener('mouseleave', () => {
            gsap.to(cursor, { scale: 1, backgroundColor: '#C85C3A' });
            gsap.to(follower, { scale: 1, borderColor: '#C85C3A', backgroundColor: 'transparent' });
        });
    });

    // =========================================================================
    // 4. FULLSCREEN CINEMATIC NAVIGATION MENU CONTROLLER SYSTEM
    // =========================================================================
    const menuTrigger = document.getElementById("menu-trigger");
    const menuOverlay = document.getElementById("menu-overlay");
    let isMenuOpen = false;

    menuTrigger.addEventListener("click", () => {
        if(!isMenuOpen) {
            menuOverlay.style.display = "flex";
            gsap.to(menuOverlay, { opacity: 1, duration: 0.5, ease: "power2.out" });
            gsap.fromTo(".menu-link", 
                { y: 50, opacity: 0 }, 
                { y: 0, opacity: 1, stagger: 0.08, duration: 0.6, ease: "power3.out" }
            );
            menuTrigger.querySelector('span').innerText = "CLOSE ARCHITECTURE";
        } else {
            gsap.to(menuOverlay, { opacity: 0, duration: 0.4, ease: "power2.in", onComplete: () => {
                menuOverlay.style.display = "none";
            }});
            menuTrigger.querySelector('span').innerText = "MENU ARCHITECTURE";
        }
        isMenuOpen = !isMenuOpen;
    });

    // Menu preview image backdrop swap engine
    document.querySelectorAll(".menu-link").forEach(link => {
        link.addEventListener("mouseenter", (e) => {
            const targetImg = e.target.getAttribute("data-img");
            gsap.to("#menu-preview-bg", { opacity: 0, duration: 0.15, onComplete: () => {
                document.getElementById("menu-preview-bg").style.backgroundImage = `url('${targetImg}')`;
                gsap.to("#menu-preview-bg", { opacity: 1, duration: 0.3 });
            }});
        });
        link.addEventListener("click", () => { if (isMenuOpen) menuTrigger.click(); });
    });

    // =========================================================================
    // 5. IMMERSIVE HERO ASYMMETRICAL ENTRANCE CHRONOLOGY
    // =========================================================================
    function triggerHeroAnimations() {
        gsap.fromTo("#hero-title", { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2, ease: "power4.out" });
        gsap.fromTo("#hero-tag", { tracking: "0.1em", opacity: 0 }, { tracking: "0.3em", opacity: 1, duration: 1 });
        gsap.to("#hero-img-wrap", { scale: 1, opacity: 1, duration: 1.4, ease: "elastic.out(1, 0.75)", delay: 0.2 });
        gsap.to("#hero-floating-badge", { x: 0, opacity: 1, duration: 0.8, delay: 0.8 });
    }

    // Secondary ambient floating loop micro interaction
    gsap.to(".float-element", {
        y: -15,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

    // =========================================================================
    // 6. SCROLL STORYTELLING SYSTEM ENGINE (Sticky Node Controllers)
    // =========================================================================
    document.querySelectorAll(".heritage-node").forEach(node => {
        gsap.to(node, {
            scrollTrigger: {
                trigger: node,
                start: "top 75%",
                end: "bottom 45%",
                toggleActions: "play reverse play reverse",
            },
            opacity: 1,
            scale: 1.02,
            duration: 0.5
        });
    });

    // Dynamic generation system for Background SVG matrices inside Heritage Panel
    const patternContainer = document.getElementById("pattern-grid-target");
    const templateNode = document.getElementById("pattern-tile");
    if(patternContainer && templateNode) {
        for (let i = 0; i < 12; i++) {
            patternContainer.appendChild(templateNode.content.cloneNode(true));
        }
    }

    // Custom SVG Micro-animations runtime loops
    gsap.to(".steam-line", { strokeDashoffset: 20, repeat: -1, duration: 1.5, ease: "none", strokeDasharray: "5,5" });
    gsap.fromTo(".coffee-stream", { scaleY: 0, transformOrigin: "top" }, { scaleY: 1, repeat: -1, duration: 1, yoyo: true, ease: "power1.inOut" });

    // =========================================================================
    // 7. REAL-TIME INTERACTIVE THALI PLATTER CONFIGURATOR MATRIX
    // =========================================================================
    const thaliButtons = document.querySelectorAll(".thali-btn");
    thaliButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            const siblingButtons = e.target.parentNode.querySelectorAll(".thali-btn");
            siblingButtons.forEach(b => b.classList.remove("bg-white", "text-[var(--color-charcoal)]"));
            
            e.target.classList.add("bg-white", "text-[var(--color-charcoal)]");

            const targetLabel = e.target.getAttribute("data-item");
            const targetDesc = e.target.getAttribute("data-desc");
            
            if(e.target.parentNode.previousElementSibling.innerText.includes("CARBS")) {
                document.getElementById("carb-label").innerText = targetLabel;
                gsap.fromTo("#thali-visual-carb", { scale: 0.7, opacity: 0.5 }, { scale: 1, opacity: 1, duration: 0.4 });
            } else {
                document.getElementById("stew-label").innerText = targetLabel;
                gsap.fromTo("#thali-visual-stew", { scale: 0.7, opacity: 0.5 }, { scale: 1, opacity: 1, duration: 0.4 });
            }

            document.getElementById("active-thali-title").innerText = targetLabel;
            document.getElementById("active-thali-desc").innerText = targetDesc;
        });
    });

    // Trigger explicit defaults on system deployment execution path initialization
    const initialCarb = document.querySelector("[data-item='Malabar Parotta']");
    const initialStew = document.querySelector("[data-item='Traditional Sambar']");
    if (initialCarb) initialCarb.click();
    if (initialStew) initialStew.click();

    // Log Form Validation Intercept Pipeline cleanly
    const reservationForm = document.getElementById("reservation-form");
    if(reservationForm) {
        reservationForm.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Priority secure table tracking ticket successfully logged inside local node matrix instances.");
        });
    }
});