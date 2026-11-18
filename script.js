/* ================================================
   RODRIGO FAZENDA PORTFOLIO SCRIPTS
   ================================================ */

document.addEventListener('DOMContentLoaded', () => {

    // ===== Typewriter Effect =====
    const typewriterEl = document.getElementById('typewriter');
    const phrases = [
        'Desenvolvedor FullStack',
        'Laravel • PHP • Node.js',
        'Apaixonado por tecnologia',
        'JavaScript • MySQL • Bootstrap',
        'Sempre a aprender!'
    ];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 80;

    function typewrite() {
        const currentPhrase = phrases[phraseIndex];

        if (isDeleting) {
            typewriterEl.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 40;
        } else {
            typewriterEl.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 80;
        }

        if (!isDeleting && charIndex === currentPhrase.length) {
            isDeleting = true;
            typeSpeed = 2000; // pause at the end
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typeSpeed = 400; // pause before typing next
        }

        setTimeout(typewrite, typeSpeed);
    }

    typewrite();

    // ===== Navbar Scroll Effect =====
    const navbar = document.getElementById('mainNav');
    const backToTop = document.getElementById('backToTop');

    function handleScroll() {
        const scrollY = window.scrollY;

        // Navbar background
        if (scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Back to top button
        if (scrollY > 400) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }

        // Active nav link
        updateActiveNav();
    }

    window.addEventListener('scroll', handleScroll);

    // Back to top click
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // ===== Active Nav Link =====
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    function updateActiveNav() {
        const scrollY = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    // ===== Close mobile nav on click =====
    const navbarCollapse = document.getElementById('navbarNav');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navbarCollapse.classList.contains('show')) {
                const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
                if (bsCollapse) bsCollapse.hide();
            }
        });
    });

    // ===== Scroll Animations (Intersection Observer) =====
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -60px 0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Stagger animation delay
                setTimeout(() => {
                    entry.target.classList.add('animated');
                }, index * 100);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animatedElements.forEach(el => observer.observe(el));




    // ===== Project Filters =====
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');

            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');

                if (filter === 'all' || category === filter) {
                    card.classList.remove('hidden');
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';

                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 50);
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });

    // ===== Video Modal Logic =====
    const videoModal = document.getElementById('videoModal');
    const closeVideoModal = document.getElementById('closeVideoModal');
    const modalVideo = document.getElementById('modalVideo');
    const playVideoBtns = document.querySelectorAll('.play-video-btn');

    // Controls
    const playPauseBtn = document.getElementById('playPauseBtn');
    const muteBtn = document.getElementById('muteBtn');
    const volumeBar = document.getElementById('volumeBar');
    const progressContainer = document.getElementById('progressContainer');
    const progressBar = document.getElementById('progressBar');
    const currentTimeEl = document.getElementById('currentTime');
    const durationTimeEl = document.getElementById('durationTime');
    const fullscreenBtn = document.getElementById('fullscreenBtn');
    const videoPlayerContainer = document.getElementById('videoPlayerContainer');

    function formatTime(seconds) {
        if (isNaN(seconds)) return "0:00";
        const m = Math.floor(seconds / 60);
        const s = Math.floor(seconds % 60);
        return `${m}:${s < 10 ? '0' : ''}${s}`;
    }

    // Open Modal
    playVideoBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const videoSrc = btn.getAttribute('data-video-src');
            if (videoSrc) {
                // If there's a preloaded hidden video with this source, grab it or just set the source directly
                // (Setting the src to a URL already cached by the browser via the preload tags will be instantaneous)
                modalVideo.src = videoSrc;
                videoModal.classList.add('active');
                
                // Forces load from the preloaded cache
                modalVideo.load();
                
                modalVideo.play().catch(e => console.log("Autoplay blocked:", e));
                updatePlayPauseIcon();
            }
        });
    });

    // Close Modal
    function closeModal() {
        videoModal.classList.remove('active');
        modalVideo.pause();
        modalVideo.src = ''; // Stop buffering
    }

    closeVideoModal.addEventListener('click', closeModal);
    videoModal.addEventListener('click', (e) => {
        if (e.target.classList.contains('video-modal-backdrop')) {
            closeModal();
        }
    });

    // Play / Pause
    function togglePlay() {
        if (modalVideo.paused) {
            modalVideo.play();
        } else {
            modalVideo.pause();
        }
    }

    function updatePlayPauseIcon() {
        const icon = playPauseBtn.querySelector('i');
        if (modalVideo.paused) {
            icon.className = 'bi bi-play-fill';
            videoPlayerContainer.classList.add('paused');
        } else {
            icon.className = 'bi bi-pause-fill';
            videoPlayerContainer.classList.remove('paused');
        }
    }

    playPauseBtn.addEventListener('click', togglePlay);
    modalVideo.addEventListener('click', togglePlay);
    modalVideo.addEventListener('play', updatePlayPauseIcon);
    modalVideo.addEventListener('pause', updatePlayPauseIcon);

    // Progress Bar & Time
    modalVideo.addEventListener('timeupdate', () => {
        const percent = (modalVideo.currentTime / modalVideo.duration) * 100;
        progressBar.style.width = `${percent}%`;
        currentTimeEl.textContent = formatTime(modalVideo.currentTime);
    });

    modalVideo.addEventListener('loadedmetadata', () => {
        durationTimeEl.textContent = formatTime(modalVideo.duration);
    });

    progressContainer.addEventListener('click', (e) => {
        const rect = progressContainer.getBoundingClientRect();
        const pos = (e.clientX - rect.left) / rect.width;
        modalVideo.currentTime = pos * modalVideo.duration;
    });

    // Handle dragging on progress bar
    let isDraggingProgress = false;
    progressContainer.addEventListener('mousedown', () => isDraggingProgress = true);
    document.addEventListener('mouseup', () => isDraggingProgress = false);
    document.addEventListener('mousemove', (e) => {
        if (isDraggingProgress) {
            const rect = progressContainer.getBoundingClientRect();
            let pos = (e.clientX - rect.left) / rect.width;
            pos = Math.max(0, Math.min(1, pos));
            modalVideo.currentTime = pos * modalVideo.duration;
            videoPlayerContainer.classList.add('seeking');
        } else {
            videoPlayerContainer.classList.remove('seeking');
        }
    });

    // Volume
    muteBtn.addEventListener('click', () => {
        modalVideo.muted = !modalVideo.muted;
        volumeBar.value = modalVideo.muted ? 0 : modalVideo.volume;
        updateVolumeIcon();
    });

    volumeBar.addEventListener('input', (e) => {
        modalVideo.volume = e.target.value;
        modalVideo.muted = e.target.value === '0';
        updateVolumeIcon();
    });

    function updateVolumeIcon() {
        const icon = muteBtn.querySelector('i');
        if (modalVideo.muted || modalVideo.volume === 0) {
            icon.className = 'bi bi-volume-mute-fill';
        } else if (modalVideo.volume < 0.5) {
            icon.className = 'bi bi-volume-down-fill';
        } else {
            icon.className = 'bi bi-volume-up-fill';
        }
    }

    // Fullscreen
    fullscreenBtn.addEventListener('click', () => {
        if (!document.fullscreenElement) {
            videoPlayerContainer.requestFullscreen().catch(err => {
                console.log(`Error attempting to enable fullscreen: ${err.message}`);
            });
        } else {
            document.exitFullscreen();
        }
    });

    document.addEventListener('fullscreenchange', () => {
        const icon = fullscreenBtn.querySelector('i');
        if (document.fullscreenElement) {
            icon.className = 'bi bi-fullscreen-exit';
        } else {
            icon.className = 'bi bi-fullscreen';
        }
    });

    // ===== Floating Particles =====
    const particlesContainer = document.getElementById('particles');
    const particleCount = 30;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = (Math.random() * 100 + 100) + '%';
        particle.style.width = (Math.random() * 3 + 1) + 'px';
        particle.style.height = particle.style.width;
        particle.style.animationDuration = (Math.random() * 15 + 10) + 's';
        particle.style.animationDelay = (Math.random() * 10) + 's';

        // Single accent colour — amber
        particle.style.background = '#e8b04a';

        particlesContainer.appendChild(particle);
    }

    // ===== Contact Form =====
    const contactForm = document.getElementById('contactForm');
    const formAlert = document.getElementById('formAlert');
    const submitBtn = document.getElementById('submitBtn');

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const btnText = submitBtn.querySelector('.btn-text');
        const btnLoading = submitBtn.querySelector('.btn-loading');

        // Show loading
        btnText.classList.add('d-none');
        btnLoading.classList.remove('d-none');
        submitBtn.disabled = true;

        const data = new FormData(contactForm);

        try {
            const response = await fetch(contactForm.action, {
                method: contactForm.method,
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                // Show success message
                formAlert.className = 'mt-3 alert alert-success';
                formAlert.innerHTML = '<i class="bi bi-check-circle-fill me-2"></i>Mensagem enviada com sucesso! Responderei em breve.';
                formAlert.classList.remove('d-none');
                contactForm.reset();
            } else {
                let responseData = await response.json();
                if (Object.hasOwn(responseData, 'errors')) {
                    formAlert.innerHTML = responseData["errors"].map(error => error["message"]).join(", ");
                } else {
                    formAlert.innerHTML = '<i class="bi bi-exclamation-triangle-fill me-2"></i>Ocorreu um erro ao enviar a mensagem.';
                }
                formAlert.className = 'mt-3 alert alert-danger';
                formAlert.classList.remove('d-none');
            }
        } catch (error) {
            formAlert.className = 'mt-3 alert alert-danger';
            formAlert.innerHTML = '<i class="bi bi-exclamation-triangle-fill me-2"></i>Ocorreu um erro na rede ao enviar a mensagem.';
            formAlert.classList.remove('d-none');
        } finally {
            // Re-enable button
            btnText.classList.remove('d-none');
            btnLoading.classList.add('d-none');
            submitBtn.disabled = false;

            // Hide alert after 5 seconds
            setTimeout(() => {
                formAlert.classList.add('d-none');
            }, 6000);
        }
    });

    // ===== Smooth Scroll for anchor links =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // ===== Theme Toggle =====
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    
    // Check saved theme or default to dark
    const currentTheme = localStorage.getItem('theme') || 'dark';
    
    if (currentTheme === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
        if (themeIcon) themeIcon.textContent = '🌙';
    } else {
        if (themeIcon) themeIcon.textContent = '☀️';
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            let theme = document.documentElement.getAttribute('data-theme');
            
            if (theme === 'light') {
                document.documentElement.removeAttribute('data-theme');
                localStorage.setItem('theme', 'dark');
                if (themeIcon) themeIcon.textContent = '☀️';
            } else {
                document.documentElement.setAttribute('data-theme', 'light');
                localStorage.setItem('theme', 'light');
                if (themeIcon) themeIcon.textContent = '🌙';
            }
        });
    }

});
