const owl1 = $("#professionalsCarousel");
owl1.owlCarousel({
  loop: false,
  margin: 30,
  nav: true,
  dots: false,
  autoplay: false,
  slideTransition: "linear",
  autoplayTimeout: 1000,
  // autoPlaySpeed: 5000,
  smartSpeed: 700,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});
