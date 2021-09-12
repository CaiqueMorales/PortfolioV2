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
    
    // Aparição de uma sombra na parte inferior da NavBar
    window.addEventListener('scroll', () => {
        header.classList.toggle('sticky', window.scrollY > 0)
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