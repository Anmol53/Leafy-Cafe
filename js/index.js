// document.addEventListener('DOMContentLoaded', init);

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

const slideText = () => {
    const quotes = document.querySelectorAll('.quote');
    quotes[0].classList.add('active-quote');
    let i = 0;
    setInterval(() => {
        quotes[i].classList.remove('active-quote');
        i++;
        if (i >= quotes.length) {
            i = 0;
        }
        quotes[i].classList.add('active-quote');
    }, 5 * 1000);
}


const heroBG = (numberOfBGs) => {
    const bg = document.querySelector('.home-background');
    console.log(bg);
    let i = 0;
    bg.classList.add(`background${i}`);
    setInterval(() => {
        bg.classList.remove(`background${i}`);
        i++;
        if (i >= numberOfBGs) {
            i = 0;
        }
        bg.classList.add(`background${i}`);
    }, 8 * 1000);

    // adding background video on load
    const isLandscape = window.matchMedia("(orientation: landscape)").matches;
    if (isLandscape) {
        const video = document.createElement('video');
        video.classList.add('header_background_video');
        video.autoplay = true;
        video.muted = true;
        video.loop = true;
        const source = document.createElement('source');
        source.src = `./assets/videos/video_360_c.mp4`;
        source.type = 'video/mp4';
        video.appendChild(source);
        video.load();
        video.oncanplaythrough = function() {
            bg.appendChild(video);
        };
    }
}


navSlide();
slideText();
heroBG(4);

// (init() => {
// })();