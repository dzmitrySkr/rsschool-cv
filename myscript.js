let openCloseBtn = document.querySelector('.open-close');
let openCloseMenu = document.querySelector('nav ul');
openCloseBtn.addEventListener('click', openMenu)
let li = document.querySelectorAll('nav ul li')
li.forEach(el => {el.addEventListener('click', openMenu)})
let nav = document.querySelector('nav');

function openMenu() {
    openCloseBtn.classList.toggle('active')
    openCloseMenu.classList.toggle('close-menu')
    nav.classList.toggle('overflow')
}

