    
    
var menuOn = document.querySelector('.open');
var menuOff = document.querySelector('.close');
var menu = document.querySelector('.main-nav__list');

menuOn.addEventListener('click', function() {
  if (menu.classList.contains('menu__close')) {
    menu.classList.remove('menu__close');
    menu.classList.add('menu__open');

    menuOn.classList.add('btn-off');

    menuOff.classList.remove('btn-off');
    menuOff.classList.add('btn-on');
  };
});

menuOff.addEventListener('click', function() {
  if (menu.classList.contains('menu__open')) {
    menu.classList.remove('menu__open');
    menu.classList.add('menu__close');

    menuOn.classList.remove('btn-off');
    menuOn.classList.add('btn-on');

    menuOff.classList.remove('btn-on');
    menuOff.classList.add('btn-off');
  };
});