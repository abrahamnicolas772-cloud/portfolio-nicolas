// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Menu mobile
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
    // Fermer le menu en cliquant sur un lien
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Animation des barres de compétences
    const skillBars = document.querySelectorAll('.skill-progress');
    
    function animateSkillBars() {
        skillBars.forEach(bar => {
            const width = bar.getAttribute('data-width');
            bar.style.width = width + '%';
        });
    }
    
    // Observer pour déclencher l'animation des compétences
    const skillsSection = document.querySelector('.competences');
    const observerOptions = {
        root: null,
        threshold: 0.3
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkillBars();
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    if (skillsSection) {
        observer.observe(skillsSection);
    }
    
    // Formulaire de contact
    const contactForm = document.getElementById('form-contact');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Récupération des valeurs du formulaire
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Validation basique
            if (name && email && message) {
                // Simulation d'envoi
                alert('Merci pour votre message, ' + name + '! Je vous répondrai bientôt.');
                contactForm.reset();
            } else {
                alert('Veuillez remplir tous les champs du formulaire.');
            }
        });
    }
    
    // Téléchargement du CV
    const downloadCv = document.getElementById('download-cv');
    
    if (downloadCv) {
        downloadCv.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Téléchargement du CV simulé. Dans un cas réel, le fichier serait téléchargé.');
            // Ici, vous pourriez ajouter le code pour télécharger un vrai fichier PDF
        });
    }
    
    // Changement de couleur de la navbar au scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
        } else {
            navbar.style.backgroundColor = 'var(--white)';
            navbar.style.backdropFilter = 'none';
        }
    });
    
    // Animation d'apparition des éléments au défilement
    const fadeElements = document.querySelectorAll('.projet-card, .skills-category, .contact-info, .contact-form');
    
    const fadeObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    fadeElements.forEach(element => {
        element.style.opacity = 0;
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        fadeObserver.observe(element);
    });
});