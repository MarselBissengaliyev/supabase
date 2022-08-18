document.addEventListener('DOMContentLoaded', () => {
    const headerBurger = document.querySelector('.header__burger'),
          headerBtns = document.querySelector('.header__btns'),
          headerNav = document.querySelector('.header__nav'),
          headerInner = document.querySelector('.header__inner'),
          page = document.querySelector('.page'),
          header = document.querySelector('.header');

    headerBurger.addEventListener('click', (e) => {
        e.preventDefault();

        headerBtns.classList.toggle('fullscreen');
        headerNav.classList.toggle('fullscreen');
        headerInner.classList.toggle('fullscreen');
        page.classList.toggle('overflow');
        header.classList.toggle('fullscreen'),
        headerBurger.classList.toggle('fullscreen');
    });

});