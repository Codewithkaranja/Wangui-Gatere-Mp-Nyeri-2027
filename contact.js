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
            alert(`Thank you for subscribing with ${email}! You will receive campaign updates and news.`);
            this.reset();
        });
        
        // Contact form submission
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const firstName = document.getElementById('firstName').value;
            const email = document.getElementById('email').value;
            
            // Show success message
            alert(`Thank you ${firstName}! Your message has been received. We will contact you at ${email} within 24-48 hours.`);
            
            // Reset form
            this.reset();
        });
        
        // FAQ Toggle functionality
        const faqQuestions = document.querySelectorAll('.faq-question');
        
        faqQuestions.forEach(question => {
            question.addEventListener('click', () => {
                const faqItem = question.parentElement;
                faqItem.classList.toggle('active');
                
                // Close other open FAQ items
                faqQuestions.forEach(otherQuestion => {
                    if (otherQuestion !== question) {
                        otherQuestion.parentElement.classList.remove('active');
                    }
                });
            });
        });
        
        // Initialize map
        document.addEventListener('DOMContentLoaded', function() {
            // Set initial view to Nyeri County
            const map = L.map('map').setView([-0.4201, 36.9476], 10);
            
            // Add OpenStreetMap tiles
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);
            
            // Add markers for key locations in Nyeri County
            const locations = [
                {name: "Nyeri Town", coords: [-0.4201, 36.9476]},
                {name: "Mukurweini", coords: [-0.5667, 37.0333]},
                {name: "Othaya", coords: [-0.5667, 36.9500]},
                {name: "Tetu", coords: [-0.3833, 36.9500]},
                {name: "Mathira", coords: [-0.3333, 36.9167]},
                {name: "Kieni", coords: [-0.5000, 36.8833]}
            ];
            
            // Add markers for each location
            locations.forEach(location => {
                L.marker(location.coords).addTo(map)
                    .bindPopup(`<b>${location.name}</b><br>Focus area for community engagement`);
            });
            
            // Add a polygon to highlight Nyeri County area
            const countyBounds = [
                [-0.3, 36.8],
                [-0.3, 37.1],
                [-0.6, 37.1],
                [-0.6, 36.8]
            ];
            
            L.polygon(countyBounds, {
                color: '#059669',
                fillColor: '#059669',
                fillOpacity: 0.1,
                weight: 2
            }).addTo(map).bindPopup("<b>Nyeri County</b><br>Total area: 3,337 km²");
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
        
        // Scroll to contact form when "Join Our Team" button is clicked
        document.querySelector('a[href="#contactForm"]').addEventListener('click', function(e) {
            e.preventDefault();
            const contactForm = document.getElementById('contactForm');
            if (contactForm) {
                contactForm.scrollIntoView({ behavior: 'smooth' });
                // Add a slight highlight to the form
                contactForm.parentElement.style.boxShadow = '0 0 0 3px rgba(5, 150, 105, 0.3)';
                setTimeout(() => {
                    contactForm.parentElement.style.boxShadow = '';
                }, 2000);
            }
        });