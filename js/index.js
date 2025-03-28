

const needsSwiper = new Swiper('.needs .swiper', {
  slidesPerView: 1,
  spaceBetween: 12,
  breakpoints: {
    320: {
      slidesPerView: 1.2,
      spaceBetween: 12,
      centeredSlides: true,
    },
    768: {
      slidesPerView: 1.4,
    },
    1024: {
      slidesPerView: 1,
      centeredSlides: false,
      spaceBetween: 0,
    },
  },
});

const wellnessSwiper = new Swiper('.wellness .swiper', {
  slidesPerView: 1,
  spaceBetween: 12,
  breakpoints: {
    320: {
      slidesPerView: 1.2,
      spaceBetween: 12,
      centeredSlides: true,
    },
    768: {
      slidesPerView: 1.4,
    },
    1024: {
      slidesPerView: 1,
      spaceBetween: 0,
      centeredSlides: false,
    },
  },
});

const supplementsSwiper = new Swiper('.supplements .swiper', {
  slidesPerView: 1,
  spaceBetween: 12,
  breakpoints: {
    320: {
      slidesPerView: 1.2,
      spaceBetween: 12,
      centeredSlides: true,
    },
    768: {
      slidesPerView: 1.4,
    },
    1024: {
      slidesPerView: 3,
      centeredSlides: false,
    },
  },
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
    }
  });
});

const hwStep2Image = document.querySelector(
  '.how-works__step_second .how-works__step-figure-image'
);

if (hwStep2Image) {
  observer.observe(hwStep2Image);
}
