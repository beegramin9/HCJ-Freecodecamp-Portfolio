const navToggle = document.querySelector('.nav-toggle')
const navListOfLink = document.querySelectorAll('.nav__link')



function handleClickHamburger() {
    document.body.classList.toggle('nav-open')
}

function handleClickLink() {
    document.body.classList.remove('nav-open')
}


function init() {
    navToggle.addEventListener('click', handleClickHamburger)   
    navListOfLink.forEach( link => {
        link.addEventListener('click', handleClickLink)
    })
}

init();