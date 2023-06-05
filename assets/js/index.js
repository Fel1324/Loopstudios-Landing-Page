const headerContent = document.querySelector('div#header__content');
const mainContent = document.querySelector('div#main__content');
const footerContent = document.querySelector('div#footer__content');

const menu = document.querySelector('aside.menu');
const menuContent = document.querySelector('div#menu__content');

// CREATE LINKS
const linksSite = [
    'About',
    'Careers',
    'Events',
    'Products',
    'Support'
];

defineClassNameLinkSite = function(classLink){
    return classLink;
}

defineClassNameItemSite = function(classItem){
    return classItem;
}

function createLinksSite(links, classNameItem, classNameLink){
    let linkValue = '';

    links.forEach(link => {
        linkValue += `
            <li class="${defineClassNameItemSite(classNameItem)}">
                <a href="#!" class="${defineClassNameLinkSite(classNameLink)}">${link}</a>
            </li>
        `;
    });

    const htmlLinkValue = 0;
    return htmlLinkValue.innerHTML = linkValue;
}
// -----------------------

// HEADER
function createHeaderContent(){
    return `
        <div>
            <img class="logo" src="assets/img/logo.svg" alt="logo da LoopStudios">

            <button onclick="openMenu()" class="header__button button-open">
                <img src="assets/img/icon-hamburger.svg" alt="Botão que abre o menu lateral">
            </button>    
        </div>

        <div>
            <h1 class="header__title">Immersive experiences that deliver</h1>
        </div>
    `;
}

headerContent.innerHTML = createHeaderContent();
// -----------------------

// MENU LATERAL
function createMenuContent(){
    return `
        <div class="menu__header">
            <img class="logo" src="assets/img/logo.svg" alt="logo da LoopStudios">

            <button onclick="closeMenu()" class="menu__button button-close">
                <img src="assets/img/icon-close.svg" alt="Botão que fecha o menu lateral">
            </button>
        </div>

        <ul class="menu__list">
            ${createLinksSite(linksSite, 'menu__item', 'menu__link')}
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

menuContent.innerHTML = createMenuContent();
// -----------------------

// MAIN
// PRIMARY SECTION
function createSectionIntroduction(){
    return `
        <section class="main__introduction">
            <img class="introduction__img" src="assets/img/mobile/image-interactive.jpg" alt="">

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
                <a href="#!" class="creations__item-link">
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
    return createSectionIntroduction() + createSectionCreations();
}

mainContent.innerHTML = createMainContent();
// -----------------------

// FOOTER
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
function createFooterContent(){
    return `
        <div class="footer__col-a">
            <img class="logo" src="assets/img/logo.svg" alt="logo da LoopStudios">

            <ul class="footer__list">
                ${createLinksSite(linksSite, 'footer__item', 'footer__link')}
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

footerContent.innerHTML = createFooterContent();
// -----------------------
