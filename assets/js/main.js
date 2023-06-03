const headerContent = document.querySelector('div#header__content');
const mainContent = document.querySelector('div#main__content');
const footerContent = document.querySelector('div#footer__content');

const logo = 'assets/img/logo.svg';
const menu = 'assets/img/icon-hamburger.svg';
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

            <button class="header__button button-open">
                ${createImg('', menu, 'Botão que abri o menu lateral')}
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
        `
    });

    const htmlLinkValue = 0;
    return htmlLinkValue.innerHTML = linkValue;
}

function createFooterContent(logo){
    return `
        <div class="footer__col-a">
            ${createImg('logo', logo, 'logo da loopstudios')}

            <ul class="footer__list">
                ${createLinksFooter(linksFooter)}
            </ul>
        </div>

        <div class="footer__col-b">
            <p class="footer__copy">© 2021 Loopstudios. All rights reserved.</p>
        </div>
    `
}

headerContent.innerHTML = createHeaderContent(logo, menu);
mainContent.innerHTML = createMainContent();
footerContent.innerHTML = createFooterContent(logo);
