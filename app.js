// Dark Mode
const changeMode = () => {

    const corpo = document.querySelector('body');
    const button = document.querySelector('.nav__button');
    const navbar = document.querySelector('.navbar');

    let darkMode = false

    button.addEventListener('click', () => {
        
        // Mudança das cores de variaveis para as do "Dark Mode"
        
        darkMode = (!darkMode)
        navbar.classList.toggle('dark')

        if(darkMode){
            corpo.classList.add('dark');
            button.classList.remove('uil-moon')
            button.classList.add('uil-sun')
        } else {
            corpo.classList.remove('dark')
            button.classList.add('uil-moon')
            button.classList.remove('uil-sun')
        }

    })

}

// Mudanças na Barra de Navegação
const shadowNavbar = () => {

    const header = document.querySelector('.navbar');
    const topButton = document.querySelector('.nav__item1');
    const aboutButton = document.querySelector('.nav__item2');
    const skillsButton = document.querySelector('.nav__item3');
    const projectsButton = document.querySelector('.nav__item4');
    const contactButton = document.querySelector('.nav__item5');
    
    // Aparição de uma sombra na parte inferior da NavBar
    window.addEventListener('scroll', () => {
        header.classList.toggle('sticky', window.scrollY > 0)
    })

    // Scrollando pra id's
    topButton.addEventListener('click', () => {
        window.scrollTo(0,0)
    })

    aboutButton.addEventListener('click', () => {
        document.getElementById('about').scrollIntoView();
    })

    skillsButton.addEventListener('click', () => {
        document.getElementById('skills').scrollIntoView();
    })

    // skillsButton2.addEventListener('click', () => {
    //     document.getElementById('skills').scrollIntoView();
    // })

    projectsButton.addEventListener('click', () => {
        document.getElementById('projects').scrollIntoView();
    })

    // projectsButton2.addEventListener('click', () => {
    //     document.getElementById('projects').scrollIntoView();
    // })
    
    contactButton.addEventListener('click', () => {
        document.getElementById('contact').scrollIntoView();
    })

}


// Mobile Menu
const navSlider = () => {

    const menu = document.querySelector('.nav__menu')
    const hamburger = document.querySelector('.hamburger')
    const navLogo = document.querySelector('.nav__logo')

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle("active")
        menu.classList.toggle("active")
    })

    const hideMenu = () => {

        const menuAtivo = document.querySelector('.active')
        if(menuAtivo){

            hamburger.classList.toggle("active")
            menu.classList.remove("active")   

        }
       
    }

    menu.addEventListener('click', hideMenu);
    navLogo.addEventListener('click', hideMenu);

}

// Juntando as funções
const funcoes = () => {
    changeMode();
    shadowNavbar();
    navSlider();
}


// Chamando as funçoes
funcoes()