 // Mobile Navigation Toggle
        const mobileToggle = document.getElementById('mobile-toggle');
        const navLinks = document.getElementById('nav-links');
        
        mobileToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileToggle.innerHTML = navLinks.classList.contains('active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });
        
        // Close mobile menu when clicking a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                mobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });
        
        // Set current year in footer (Dynamic Year)
        document.getElementById('currentYear').textContent = new Date().getFullYear();
        
        // Newsletter form submission
        document.getElementById('newsletterForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            alert(`Thank you for subscribing with ${email}! You will receive updates on our community engagements.`);
            this.reset();
        });
        
        // Engagement Gallery Filtering
        const filterButtons = document.querySelectorAll('.filter-btn');
        const engagementCards = document.querySelectorAll('.engagement-card');
        
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // Add active class to clicked button
                button.classList.add('active');
                
                const filterValue = button.getAttribute('data-filter');
                
                // Show/hide cards based on filter
                engagementCards.forEach(card => {
                    if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
        
        // Header scroll effect
        window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            if(window.scrollY > 100) {
                header.style.padding = '0';
                document.querySelector('.header-container').style.padding = '0.5rem 1.5rem';
            } else {
                header.style.padding = '';
                document.querySelector('.header-container').style.padding = '1rem 1.5rem';
            }
        });
        
        // Active navigation link
        const currentPage = window.location.pathname.split('/').pop();
        document.querySelectorAll('.nav-links a').forEach(link => {
            const linkPage = link.getAttribute('href');
            if (linkPage === currentPage) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
        
        // Animate impact numbers on scroll
        function animateValue(element, start, end, duration) {
            let startTimestamp = null;
            const step = (timestamp) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                const value = Math.floor(progress * (end - start) + start);
                element.textContent = value + (element.textContent.includes('+') ? '+' : '');
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                }
            };
            window.requestAnimationFrame(step);
        }
        
        // Initialize animation when impact section comes into view
        const observerOptions = {
            threshold: 0.5
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const impactNumbers = document.querySelectorAll('.impact-number');
                    impactNumbers.forEach(numberElement => {
                        const currentValue = parseInt(numberElement.textContent);
                        if (currentValue > 0) {
                            animateValue(numberElement, 0, currentValue, 2000);
                        }
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        const impactSection = document.querySelector('.impact-section');
        if (impactSection) {
            observer.observe(impactSection);
        }