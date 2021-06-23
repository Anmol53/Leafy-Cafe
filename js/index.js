const scriptPath = document.currentScript.src.replace('index.js', '');

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
        source.src = `${scriptPath}../assets/videos/video_360_c.mp4`;
        source.type = 'video/mp4';
        video.appendChild(source);
        video.load();
        video.oncanplaythrough = function() {
            bg.appendChild(video);
        };
    }
}

const loadMenu = () => {
    fetch(`${scriptPath}../data/menu.json`)
        .then(response => response.json())
        .then(menu => {
            menu.forEach(category => {
                const {
                    title,
                    abbreviation: abbr,
                    emoji,
                    items
                } = category;
                const menuContent = document.querySelector(`.${abbr}-section > .menu-container > .menu-content`);
                const contentHeading = document.createElement('h1');
                contentHeading.innerHTML = `${title} <span>${emoji}</span>`;
                menuContent.appendChild(contentHeading);
                const list = document.createElement('ul');
                items.forEach(item => {
                    const listItem = document.createElement('li');
                    const itemTitle = document.createElement('h2');
                    itemTitle.innerText = item.title;
                    const itemDescription = document.createElement('p');
                    itemDescription.innerText = item.description;
                    listItem.appendChild(itemTitle);
                    listItem.appendChild(itemDescription);
                    list.appendChild(listItem);
                });
                menuContent.appendChild(list);
            });
        })
        .catch(err => console.log(err));
}

const executeHomeFunctions = () => {
    navSlide();
    slideText();
    heroBG(4);
}

const executeMenuFunctions = () => {
    navSlide();
    loadMenu();
}


const home = document.querySelector('body.home');
if (home) {
    home.onload = executeHomeFunctions;
}

const menu = document.querySelector('body.menu');
if (menu) {
    menu.onload = executeMenuFunctions;
}