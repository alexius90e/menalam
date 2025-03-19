const headerBurgerButton = document.querySelector('.header__burger-button');
const headerNav = document.querySelector('.header__nav');

if (headerBurgerButton && headerNav) {
  headerBurgerButton.addEventListener('click', (event) => {
    const isActive = event.target.classList.contains('active');

    if (isActive) {
      headerNav.classList.remove('active');
      headerBurgerButton.classList.remove('active');
    } else {
      headerNav.classList.add('active');
      headerBurgerButton.classList.add('active');
    }
  });

  headerNav.addEventListener('click', (event) => {
    if (event.target === event.currentTarget) {
      headerNav.classList.remove('active');
      headerBurgerButton.classList.remove('active');
    }
  });
}
