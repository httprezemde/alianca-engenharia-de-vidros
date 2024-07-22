    // script.js

function revealProducts() {
    const reveals = document.querySelectorAll('.reveal');
    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('visible');
        } else {
            reveals[i].classList.remove('visible');
        }
    }
}

function toggleResposta(element) {
    const resposta = element.querySelector('.resposta');
    resposta.style.display = resposta.style.display === 'block' ? 'none' : 'block';
}

window.addEventListener('scroll', revealProducts);
window.addEventListener('load', revealProducts);
