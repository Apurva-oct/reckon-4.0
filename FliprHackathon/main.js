let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
      menu.classList.toggle('bx-x');
      navbar.classList.toggle('active');

}
import ScrollReveal from 'scrollreveal';
const sr = ScrollReveal ({
      distance: '100px',
      duration: 2500,
      delay: 400,
      reset: true
})

sr.reveal('.text',{delay: 200, origin: 'top'})
sr.reveal('.form-container form',{delay: 800, origin: 'left'})
sr.reveal('.heading',{delay: 800, origin: 'top'})
sr.reveal('.book-container',{delay: 600, origin: 'top'})
sr.reveal('.services-container',{delay: 600, origin: 'top'})
sr.reveal('.about-container',{delay: 600, origin: 'top'})
sr.reveal('.review-container',{delay: 600, origin: 'top'})
