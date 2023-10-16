const menu = document.querySelector('#menu-icon');
const navList = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navList.classList.toggle('open');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navList.classList.remove('open');
}