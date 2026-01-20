document.addEventListener('DOMContentLoaded', () => {

    /* =========================
       AOS INIT (SAFE)
    ========================= */
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100
        });
    }

    /* =========================
       MOBILE NAV TOGGLE
    ========================= */
    const mobileToggle = document.getElementById('mobile-toggle');
    const navLinks = document.getElementById('nav-links');

    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileToggle.innerHTML = navLinks.classList.contains('active')
                ? '<i class="fas fa-times"></i>'
                : '<i class="fas fa-bars"></i>';
        });

        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                mobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });
    }

    /* =========================
       FOOTER YEAR
    ========================= */
    const yearEl = document.getElementById('currentYear');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    /* =========================
       NEWSLETTER FORM
    ========================= */
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', e => {
            e.preventDefault();
            const email = newsletterForm.querySelector('input[type="email"]')?.value;
            if (email) {
                alert(`Thank you for subscribing with ${email}!`);
                newsletterForm.reset();
            }
        });
    }

    /* =========================
       HEADER SCROLL EFFECT
    ========================= */
    const header = document.querySelector('header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.12)';
                header.style.background = 'rgba(255,255,255,0.98)';
            } else {
                header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.05)';
                header.style.background = 'rgba(255,255,255,0.95)';
            }
        });
    }

    /* =========================
       SMOOTH SCROLL
    ========================= */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', e => {
            const targetId = anchor.getAttribute('href');
            if (targetId && targetId !== '#') {
                const target = document.querySelector(targetId);
                if (target) {
                    e.preventDefault();
                    window.scrollTo({
                        top: target.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    /* =========================
       FADE-IN ON SCROLL
    ========================= */
    const fadeElements = document.querySelectorAll('.fade-in');
    const checkFadeIn = () => {
        fadeElements.forEach(el => {
            if (el.getBoundingClientRect().top < window.innerHeight - 150) {
                el.classList.add('visible');
            }
        });
    };
    window.addEventListener('scroll', checkFadeIn);
    checkFadeIn();

    /* =========================
       HERO TYPING EFFECT (SAFE)
    ========================= */
    const heroTitle = document.querySelector('.hero h1');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        let i = 0;

        const typeWriter = () => {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 45);
            }
        };

        setTimeout(typeWriter, 600);
    }

    /* =========================
       HERO STATS COUNTER (MERGED & FIXED)
    ========================= */
    const statNumbers = document.querySelectorAll('.stat-number');

    if (statNumbers.length) {
        const statsObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    const target = parseInt(el.dataset.count, 10);
                    let count = 0;
                    const increment = Math.max(1, Math.floor(target / 40));

                    const update = () => {
                        count += increment;
                        if (count < target) {
                            el.textContent = count;
                            requestAnimationFrame(update);
                        } else {
                            el.textContent = target + '+';
                        }
                    };

                    update();
                    statsObserver.unobserve(el);
                }
            });
        }, { threshold: 0.5 });

        statNumbers.forEach(stat => {
            stat.textContent = '0';
            statsObserver.observe(stat);
        });
    }

    /* =========================
       COUNTDOWN TIMER (SAFE)
    ========================= */
    const countdownEl = document.querySelector('.countdown');
    if (countdownEl) {
        const updateCountdown = () => {
            const electionDate = new Date('August 9, 2027 00:00:00').getTime();
            const now = Date.now();
            const diff = electionDate - now;

            if (diff < 0) {
                countdownEl.innerHTML = '<h3>The 2027 Elections Have Arrived</h3>';
                return;
            }

            const d = Math.floor(diff / (1000 * 60 * 60 * 24));
            const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
            const m = Math.floor((diff / (1000 * 60)) % 60);
            const s = Math.floor((diff / 1000) % 60);

            document.getElementById('days').textContent = String(d).padStart(3, '0');
            document.getElementById('hours').textContent = String(h).padStart(2, '0');
            document.getElementById('minutes').textContent = String(m).padStart(2, '0');
            document.getElementById('seconds').textContent = String(s).padStart(2, '0');
        };

        updateCountdown();
        setInterval(updateCountdown, 1000);
    }

    /* =========================
       HERO BACKGROUND SLIDER (SAFE)
    ========================= */
   const heroBg = document.querySelector('.hero-bg');

if (heroBg) {
    const heroImages = [
        'image - 2026-01-18T170428.100.webp',
        'image - 2026-01-18T170239.246.webp',
        'image - 2026-01-18T170605.787.webp'
    ];

    let currentIndex = 0;

    function changeHeroBackground() {
        heroBg.style.backgroundImage = `
            linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.65)),
            url('${heroImages[currentIndex]}')
        `;
        currentIndex = (currentIndex + 1) % heroImages.length;
    }

    changeHeroBackground();
    setInterval(changeHeroBackground, 8000);
}

});
