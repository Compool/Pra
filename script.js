// 1. Navbar Glassmorphism Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// 2. Scroll Reveal Animation for Sections
const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const elementVisible = 150;
    
    revealElements.forEach((el) => {
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - elementVisible) {
            el.classList.add('active');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // Trigger immediately on page load

// 3. Interactive Chat Mockup (Re-trigger animation on click)
const chatContainer = document.querySelector('.chat-ui');

chatContainer.addEventListener('click', () => {
    const messages = chatContainer.querySelectorAll('.chat-message');
    
    // Reset animation
    messages.forEach(msg => {
        msg.style.animation = 'none';
        msg.style.opacity = '0';
    });
    
    // Force reflow
    void chatContainer.offsetWidth;
    
    // Re-apply animation with original delays
    messages.forEach((msg, index) => {
        msg.style.animation = 'slideUp 0.5s forwards';
        
        if (index === 1) msg.style.animationDelay = '0.8s';
        if (index === 2) msg.style.animationDelay = '1.6s';
        if (index === 3) msg.style.animationDelay = '2.6s';
    });
});

// 4. Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
