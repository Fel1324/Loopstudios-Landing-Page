const headerContent = document.querySelector('div#header__content');
const mainContent = document.querySelector('div#main__content');
const footerContent = document.querySelector('div#footer__content');

const logo = 'assets/img/logo.svg';
const menu = 'assets/img/icon-hamburger.svg';

const introductionImg = 'assets/img/mobile/image-interactive.jpg';

function createImg(className, img, alt){
    return `<img class="${className}" src="${img}" alt="${alt}">`;
}

function createSubTitle(className, content){
    return `<h3 class="${className}">${content}</h3>`;
}

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

function createMainContent(){
    return createSectionIntroduction(introductionImg);
}

headerContent.innerHTML = createHeaderContent(logo, menu);
mainContent.innerHTML = createMainContent();
