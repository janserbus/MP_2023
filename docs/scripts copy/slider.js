var slider = tns({
    container: '.slider',
    items: 1,
    slideBy: '1',
    speed: 700,
    gutter: 20,
    autoplay: true,
    autoplayTimeout: 4000,
    rewind: true,
    controls: ".slider__controls",
    prevButton: ".controls__prev",
    nextButton: ".controls__next",
    navPosition: "bottom",
    autoplayButtonOutput: false,
    responsive:{
      800:{
        items: 3
      }
    }
  });