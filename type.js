// Toggle mobile menu
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


// Toggle menu open/close when icon clicked
menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
};


// Close menu when clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuIcon.classList.remove('fa-xmark');
        navbar.classList.remove('active');
    });
});


// Scroll behavior
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document
                    .querySelector('header nav a[href*=' + id + ']')
                    .classList.add('active');
            });
        }
    });


    // Sticky header
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
};


// Scroll reveal js
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});


ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal(
    '.home-img, .services-container, .portfolio-box, .contact form',
    { origin: 'bottom' }
);
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });



// Typed js
const typed = new Typed('.multiple-text', {
    strings: ['Competitive Programmer', 'Youtuber', 'Web Designer', 'Activist'],
    typeSpeed: 60,
    backSpeed: 50,
    backDelay: 1000,
    loop: true,
});



// message 
function showMessage() {
    const confirmation = document.getElementById('confirmation');
    confirmation.innerText = 'Your message has been sent!';
    setTimeout(() => {
        confirmation.innerText = '';
    }, 3000);
}
