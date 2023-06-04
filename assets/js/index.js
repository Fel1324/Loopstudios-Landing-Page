const headerContent = document.querySelector('div#header__content');
const mainContent = document.querySelector('div#main__content');
const footerContent = document.querySelector('div#footer__content');

const menu = document.querySelector('aside.menu');
const menuContent = document.querySelector('div#menu__content');

const buttonClose = 'assets/img/icon-close.svg';
const logo = 'assets/img/logo.svg';
const buttonOpen = 'assets/img/icon-hamburger.svg';
const introductionImg = 'assets/img/mobile/image-interactive.jpg';

// GENERIC FUNCTIONS
function createImg(className, img, alt){
    return `<img class="${className}" src="${img}" alt="${alt}">`;
}
// -----------------------

// HEADER
function createHeaderContent(logo, menu){
    return `
        <div>
            ${createImg('logo', logo, 'logo da loopstudios')}

            <button onclick="openMenu()" class="header__button button-open">
                ${createImg('', menu, 'Botão que abre o menu lateral')}
            </button>    
        </div>

        <div>
            <h1 class="header__title">Immersive experiences that deliver</h1>
        </div>
    `;
}
// -----------------------

// MAIN
// PRIMARY SECTION
function createSectionIntroduction(source){
    return `
        <section class="main__introduction">
            ${createImg('introduction__img', source, '')}

            <h2 class="introduction__title title">The leader in interactive VR</h2>

            <p class="introduction__paragraph">
                Founded in 2011, Loopstudios has been producing world-class virtual reality 
                projects for some of the best companies around the globe. Our award-winning 
                creations have transformed businesses through digital experiences that bind 
                to their brand.
            </p>
        </section>
    `;
}

// SECONDARY SECTION
// CREATE ITEMS
const itemsCreations = [
    {
        imgSrc: 'assets/img/mobile/image-deep-earth.jpg',
        title: 'Deep <br> earth'
    },

    {
        imgSrc: 'assets/img/mobile/image-night-arcade.jpg',
        title: 'Night <br> arcade'
    },

    {
        imgSrc: 'assets/img/mobile/image-soccer-team.jpg',
        title: 'Soccer <br> team vr'
    },

    {
        imgSrc: 'assets/img/mobile/image-grid.jpg',
        title: 'The <br> grid'
    },

    {
        imgSrc: 'assets/img/mobile/image-from-above.jpg',
        title: 'From up <br> above vr'
    },

    {
        imgSrc: 'assets/img/mobile/image-pocket-borealis.jpg',
        title: 'Pocket <br> borealis'
    },

    {
        imgSrc: 'assets/img/mobile/image-curiosity.jpg',
        title: 'The <br> curiosity'
    },

    {
        imgSrc: 'assets/img/mobile/image-fisheye.jpg',
        title: 'Make it <br> fisheye'
    }
];

function createItemsCreations(objs){
    let objValue = '';

    objs.forEach(obj => {
        objValue += `
            <li class="creations__item">
                <a href="#!" class="creations__link">
                    <h3 class="creations__item-title">${obj.title}</h3>
                    <img class="creations__item-img" src="${obj.imgSrc}" alt="${obj.title}">
                </a>
            </li>
        `
    }); 

    const htmlObjValue = 0;
    return htmlObjValue.innerHTML = objValue;
}

// CREATE SECONDARY SECTION
function createSectionCreations(){
    return `
        <section class="main__creations">
            <h2 class="creations__title title">Our creations</h2>

            <ul class="creations__list">
                ${createItemsCreations(itemsCreations)}
            </ul>

            <button class="creations__button" aria-label="Ver todos os items">See all</button>
        </section>
    `;
}

// CREATE MAIN CONTENT
function createMainContent(){
    return createSectionIntroduction(introductionImg) + createSectionCreations();
}
// -----------------------

// FOOTER
// CREATE LINKS
const linksFooter = [
    'About',
    'Careers',
    'Events',
    'Products',
    'Support'
];

function createLinksFooter(links){
    let linkValue = '';

    links.forEach(link => {
        linkValue += `
            <li class="footer__item">
                <a href="#!" class="footer__link">${link}</a>
            </li>
        `;
    });

    const htmlLinkValue = 0;
    return htmlLinkValue.innerHTML = linkValue;
}

const socialLinksFooter = [
    {
        src: 'assets/img/icon-facebook.svg',
        alt: 'Abrir Facebook'
    },

    {
        src: 'assets/img/icon-twitter.svg',
        alt: 'Abrir Twitter'
    },

    {
        src: 'assets/img/icon-pinterest.svg',
        alt: 'Abrir Pinterest'
    },
    
    {
        src: 'assets/img/icon-instagram.svg',
        alt: 'Abrir Instagram'
    }
];

function createSocialLinksFooter(socialLinks){
    let socialLinkValue = '';

    socialLinks.forEach(socialLink => {
        socialLinkValue += `
            <li class="social-links__item">
                <a href="#!" class="social-links__link">
                    <img class="social-links__img" src="${socialLink.src}" alt="${socialLink.alt}">
                </a>
            </li>
        `;
    });

    const htmlSocialLinkValue = 0;
    return htmlSocialLinkValue.innerHTML = socialLinkValue;
}

// CREATE FOOTER CONTENT
function createFooterContent(logo){
    return `
        <div class="footer__col-a">
            ${createImg('logo', logo, 'logo da loopstudios')}

            <ul class="footer__list">
                ${createLinksFooter(linksFooter)}
            </ul>
        </div>

        <div class="footer__col-b">
            <ul class="footer__social-links">
                ${createSocialLinksFooter(socialLinksFooter)}
            </ul>

            <p class="footer__copy">© 2021 Loopstudios. All rights reserved.</p>
        </div>
    `
}
// -----------------------

headerContent.innerHTML = createHeaderContent(logo, buttonOpen);
mainContent.innerHTML = createMainContent();
footerContent.innerHTML = createFooterContent(logo);

// MENU LATERAL
function createMenuContent(logo, menu){
    return `
        <div class="menu__header">
            ${createImg('logo', logo, 'logo da loopstudios')}

            <button onclick="closeMenu()" class="menu__button button-close">
                ${createImg('', menu, 'Botão que fecha o menu lateral')}
            </button>
        </div>

        <ul class="menu__list">
            
        </ul>
    `
}

function openMenu(){
    menu.classList.add('menu-open');

    document.body.style.overflow = 'hidden';
    document.querySelector('.main').style.display = 'none';
    document.querySelector('.footer').style.display = 'none';
}

function closeMenu(){
    menu.classList.remove('menu-open');

    document.body.style.overflow = 'auto';
    document.querySelector('.main').style.display = 'block';
    document.querySelector('.footer').style.display = 'block';
}

menuContent.innerHTML = createMenuContent(logo, buttonClose);
