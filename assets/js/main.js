const headerContent = document.querySelector('div#header__content');
const mainContent = document.querySelector('div#main__content');
const footerContent = document.querySelector('div#footer__content');

const logo = 'assets/img/logo.svg';
const menu = 'assets/img/icon-hamburger.svg';
const introductionImg = 'assets/img/mobile/image-interactive.jpg';

const objs = [
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
]

// GENERIC FUNCTIONS
function createImg(className, img, alt){
    return `<img class="${className}" src="${img}" alt="${alt}">`;
}

function createSubTitle(className, content){
    return `<h3 class="${className}">${content}</h3>`;
}
// -----------------------

// HEADER
function createHeaderContent(logo, menu){
    return `
        <div>
            ${createImg('header__logo', logo, 'logo da loopstudios')}

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
    `
}

// SECONDARY SECTION
// CREATE CARDS
function createCardsCreations(objs){
    let objValue = '';

    objs.forEach(obj => {
        objValue += `
            <div class="creations__cards">
                <img class="creations__img" src="${obj.imgSrc}" alt="${obj.title}">
                <h3 class="creations__subtitle">${obj.title}</h3>
            </div>
        `
    }); 

    const htmlObjValue = 0;
    return htmlObjValue.innerHTML = `${objValue}`;
}

// CREATE SECONDARY SECTION
function createSectionCreations(){
    return `
        <section class="main__creations">
            <h2 class="creations__title title">Our creations</h2>

            <div id="creationsC" class="creations__container">
                ${createCardsCreations(objs)}
            </div>

            <button class="creations__button" aria-label="Ver todos os items">See all</button>
        </section>
    `
}

function createMainContent(){
    return createSectionIntroduction(introductionImg) + createSectionCreations();
}
// -----------------------

headerContent.innerHTML = createHeaderContent(logo, menu);
mainContent.innerHTML = createMainContent();
