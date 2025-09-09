// Initialize Testimonials Swiper
const testimonialsSwiper = new Swiper(".testimonials-swiper", {
  spaceBetween: 20,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      centeredSlides: false,
    },
    1200: {
      slidesPerView: 2.5,
      centeredSlides: true,
    },
  },
  on: {
    slideChange: function () {
      // Add slight animation effect when slide changes
      const activeSlide = this.slides[this.activeIndex];
      if (activeSlide) {
        activeSlide.style.transform = "scale(1.02)";
        setTimeout(() => {
          activeSlide.style.transform = "scale(1)";
        }, 300);
      }
    },
  },
});
