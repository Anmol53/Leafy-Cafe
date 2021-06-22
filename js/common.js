const navSlide = () => {
    const ham = document.querySelector('.ham');
    const nav = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li');

    ham.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        links.forEach((link, idx) => {
            link.style.animation = link.style.animation ? '' : `fade 0.5s ease-in forwards ${idx / 6 + 0.5}s`;
        });
        ham.classList.toggle('trigger');
    });
}


navSlide();