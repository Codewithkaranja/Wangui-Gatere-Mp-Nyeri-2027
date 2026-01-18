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
        document.getElementById('mainNewsletterForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            alert(`Thank you for subscribing with ${email}! You will receive campaign news and updates.`);
            this.reset();
        });
        
        document.getElementById('footerNewsletterForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            alert(`Thank you for subscribing with ${email}! You will receive campaign news and updates.`);
            this.reset();
        });
        
        // News Gallery Filtering
        const filterButtons = document.querySelectorAll('.filter-btn');
        const newsCards = document.querySelectorAll('.news-card');
        
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // Add active class to clicked button
                button.classList.add('active');
                
                const filterValue = button.getAttribute('data-filter');
                
                // Show/hide cards based on filter
                newsCards.forEach(card => {
                    if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                        card.style.display = 'flex';
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
        
        // News Article Data
        const articles = {
            1: {
                title: "Campaign Strategy Meeting with Grassroots Leaders",
                date: "May 10, 2024",
                category: "Campaign Updates",
                image: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                content: `
                    <p>Wangui Gatere-Brenda held a comprehensive strategy meeting with grassroots leaders from all six sub-counties of Nyeri to refine her campaign approach for the 2027 Women Representative election. The meeting focused on developing targeted strategies for addressing the unique challenges faced by women and marginalized communities in mountain regions.</p>
                    
                    <p>During the day-long session, community leaders shared insights on the most pressing issues in their areas, including access to healthcare, education opportunities for girls, economic empowerment for women, and environmental conservation in mountain ecosystems.</p>
                    
                    <p>"This campaign will be built from the ground up," Wangui stated. "The people who live in these communities know best what they need. My role is to listen, learn, and then advocate effectively for solutions that work for them."</p>
                    
                    <p>Key outcomes from the meeting include:</p>
                    
                    <ul>
                        <li>Development of a mountain region-specific policy framework</li>
                        <li>Creation of a community advisory council with representatives from each sub-county</li>
                        <li>Planning for mobile consultation units to reach remote areas</li>
                        <li>Strategy for youth engagement in climate action initiatives</li>
                    </ul>
                    
                    <p>The grassroots leaders expressed optimism about the campaign's approach. "For the first time, we feel like someone is truly listening to our specific challenges as mountain communities," said one leader from Kieni West.</p>
                `
            },
            2: {
                title: "Expanded School Visits Program in Remote Mountain Schools",
                date: "May 8, 2024",
                category: "Community",
                image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                content: `
                    <p>Wangui Gatere-Brenda's campaign has expanded its school mentorship program to include 15 additional schools in remote mountain regions of Nyeri County. This expansion comes after the successful pilot program that reached over 2,500 students in its first phase.</p>
                    
                    <p>The program focuses on three main areas: girls' education advocacy, digital literacy skills, and career guidance for students in marginalized communities. Special attention is given to schools in areas with limited access to educational resources and mentorship opportunities.</p>
                    
                    <p>"Education is the great equalizer," Wangui said during a visit to Karima Girls High School in Othaya. "But equal access to quality education requires addressing the specific barriers that students in mountain regions face, from transportation challenges to limited digital infrastructure."</p>
                    
                    <p>The expanded program includes:</p>
                    
                    <ul>
                        <li>Digital literacy workshops using mobile computer labs</li>
                        <li>Mentorship partnerships with professionals in various fields</li>
                        <li>Scholarship identification and application support</li>
                        <li>Mental health and wellness sessions for students</li>
                        <li>Environmental education focusing on mountain ecosystem conservation</li>
                    </ul>
                    
                    <p>School principals from the newly included institutions welcomed the initiative. "Our students rarely get exposure to role models from outside their immediate community," said the principal of a school in Tetu. "This program opens their eyes to possibilities they didn't know existed."</p>
                    
                    <p>The campaign plans to reach an additional 3,000 students through this expanded program by the end of the year, with a special focus on encouraging girls to pursue STEM (Science, Technology, Engineering, and Mathematics) fields.</p>
                `
            },
            3: {
                title: "Women's Economic Forum Draws Over 300 Participants",
                date: "May 5, 2024",
                category: "Women",
                image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                content: `
                    <p>The Women's Economic Empowerment Forum organized by Wangui Gatere-Brenda's campaign attracted over 300 women entrepreneurs from across Nyeri County, with particularly strong representation from mountain region communities. The forum focused on creating market linkages, accessing finance, and building sustainable businesses in challenging geographic contexts.</p>
                    
                    <p>Held at the Mukurweini Technical Training Institute, the day-long event featured workshops, networking sessions, and one-on-one consultations with business experts. Participants represented various sectors including agriculture, handicrafts, retail, and services.</p>
                    
                    <p>"Women in mountain regions face unique business challenges," Wangui noted in her opening address. "From transportation costs that eat into profits to limited access to markets and financial services. This forum is about finding practical solutions to these very real problems."</p>
                    
                    <p>Key sessions at the forum included:</p>
                    
                    <ul>
                        <li>Accessing microfinance and women-focused loan products</li>
                        <li>Digital marketing strategies for remote businesses</li>
                        <li>Value addition for agricultural products from mountain regions</li>
                        <li>Forming cooperatives to increase bargaining power</li>
                        <li>Navigating county business licensing and regulations</li>
                    </ul>
                    
                    <p>The forum also featured a marketplace where women could showcase their products, attracting buyers from Nyeri Town and beyond. Several participants secured orders and distribution agreements during the event.</p>
                    
                    <p>One notable outcome was the formation of the "Mountain Women Entrepreneurs Network," which will continue to provide peer support and collective advocacy beyond the forum. The network plans to establish a digital platform to connect women entrepreneurs across Nyeri's mountain regions.</p>
                    
                    <p>"For the first time, I feel like my small honey business can grow beyond my village," said a participant from Mathira East. "The connections and knowledge I gained today are invaluable."</p>
                    
                    <p>The campaign plans to make the Women's Economic Forum a quarterly event, rotating through different sub-counties to ensure broad participation.</p>
                `
            },
            featured: {
                title: "Launch of 'Mountain Women Initiative' to Empower Women in Remote Areas",
                date: "May 15, 2024",
                category: "Women Empowerment",
                image: "https://images.unsplash.com/photo-1551836026-d5c2c5af78e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                content: `
                    <p>Wangui Gatere-Brenda today launched the groundbreaking "Mountain Women Initiative," a comprehensive program specifically designed to address the unique challenges facing women in Nyeri's remote mountain regions. The initiative represents a significant commitment to targeted, geographic-specific empowerment strategies.</p>
                    
                    <p>The launch event, held at the foothills of the Aberdare Range, brought together community leaders, women's groups, development partners, and county government representatives. The initiative is built on four pillars: economic empowerment, healthcare access, education and skills development, and leadership training.</p>
                    
                    <p>"Women in mountain regions carry a disproportionate burden of poverty, limited healthcare access, and geographic isolation," Wangui stated. "The Mountain Women Initiative recognizes that a one-size-fits-all approach doesn't work. We need solutions tailored to the specific realities of these communities."</p>
                    
                    <h3>Key Components of the Initiative:</h3>
                    
                    <p><strong>1. Mobile Economic Hubs:</strong> Specially equipped vehicles will travel to remote communities, providing access to banking services, business training, and market linkages for women's products.</p>
                    
                    <p><strong>2. Maternal Health Access Program:</strong> Partnership with healthcare providers to establish telemedicine services and mobile clinics focusing on prenatal and postnatal care in areas with limited health facilities.</p>
                    
                    <p><strong>3. Digital Literacy for Women:</strong> Training programs specifically designed for women with limited formal education, focusing on practical digital skills for business and communication.</p>
                    
                    <p><strong>4. Leadership Academy:</strong> A year-long program to develop women leaders from mountain communities, providing them with skills to participate effectively in local governance and community development.</p>
                    
                    <p>The initiative has already secured partnerships with three local NGOs and commitments from two international development organizations. Initial funding will support the program in five pilot locations across different mountain regions of Nyeri County.</p>
                    
                    <p>"What makes this initiative different is its holistic approach," explained Wangui. "We're not just addressing economic needs or health needs in isolation. We're looking at the whole woman and all the interconnected challenges she faces in a mountain community context."</p>
                    
                    <p>The Mountain Women Initiative will be rolled out in phases over the next 18 months, with the goal of reaching at least 5,000 women directly and creating a model that can be replicated in other mountain regions across Kenya.</p>
                    
                    <p>Community response to the launch has been overwhelmingly positive. "Finally, someone recognizes that our challenges as mountain women are unique," said a women's group leader from Kieni. "We don't need the same programs as women in urban areas. We need solutions that work where we live."</p>
                `
            }
        };
        
        // Modal functionality
        const modal = document.getElementById('newsModal');
        const modalClose = document.getElementById('modalClose');
        const modalImage = document.getElementById('modalImage');
        const modalTitle = document.getElementById('modalTitle');
        const modalDate = document.getElementById('modalDate');
        const modalCategory = document.getElementById('modalCategory');
        const modalContent = document.getElementById('modalContent');
        
        // Function to open modal with article content
        function openModal(articleId) {
            const article = articles[articleId];
            
            if (article) {
                modalImage.src = article.image;
                modalImage.alt = article.title;
                modalTitle.textContent = article.title;
                modalDate.textContent = article.date;
                modalCategory.textContent = article.category;
                modalContent.innerHTML = article.content;
                
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        }
        
        // Close modal when clicking X
        modalClose.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
        
        // Close modal when clicking outside content
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
        
        // Attach event listeners to "Read More" links
        document.querySelectorAll('.read-article').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const articleId = link.getAttribute('data-article');
                openModal(articleId);
            });
        });
        
        // Featured article read button
        document.getElementById('readFeatured').addEventListener('click', (e) => {
            e.preventDefault();
            openModal('featured');
        });
        
        // Press release download buttons
        document.querySelectorAll('.press-download').forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                alert('Press release download would start. In a real implementation, this would link to a PDF file.');
            });
        });
        
        // Pagination functionality
        document.querySelectorAll('.pagination a').forEach(pageLink => {
            pageLink.addEventListener('click', (e) => {
                e.preventDefault();
                if (!pageLink.classList.contains('active')) {
                    document.querySelectorAll('.pagination a').forEach(link => {
                        link.classList.remove('active');
                    });
                    pageLink.classList.add('active');
                    alert('In a real implementation with a backend, this would load the next page of news articles.');
                }
            });
        });