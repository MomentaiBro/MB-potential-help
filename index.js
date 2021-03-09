let section = document.querySelector('section');
let innerText = document.querySelector('.innerText')

window.addEventListener('scroll', function() {
    let value = window.scrollY;
    section.style.clipPath = `circle(${value}px at center center)`;
    innerText.style.left = 100 - `${value}`/5 + '%';
})