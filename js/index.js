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

const needsSwiper = new Swiper('.needs .swiper', {
  slidesPerView: 1,
  spaceBetween: 24,
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesOffsetBefore: 106,
      slidesOffsetAfter: 106,
      spaceBetween: 24,
      initialSlide: 1,
    },
    576: {
      slidesPerView: 1.2,
      slidesOffsetBefore: 0,
      initialSlide: 0,
    },
    768: {
      slidesPerView: 1.4,
    },
    1024: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
  },
});

const wellnessSwiper = new Swiper('.wellness .swiper', {
  slidesPerView: 1,
  spaceBetween: 24,
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesOffsetBefore: 210,
      slidesOffsetAfter: 210,
      spaceBetween: 24,
      initialSlide: 1,
    },
    576: {
      slidesPerView: 1.2,
      slidesOffsetBefore: 0,
      initialSlide: 0,
    },
    768: {
      slidesPerView: 1.4,
    },
    1024: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
  },
});

const supplementsSwiper = new Swiper('.supplements .swiper', {
  slidesPerView: 1,
  spaceBetween: 24,
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesOffsetBefore: -50,
      slidesOffsetAfter: -50,
      spaceBetween: 24,
      initialSlide: 1,
    },
    576: {
      slidesPerView: 1.2,
      slidesOffsetBefore: 0,
      initialSlide: 0,
    },
    768: {
      slidesPerView: 1.4,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
