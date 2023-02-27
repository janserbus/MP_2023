var slider = tns({
    container: '.slider',
    items: 1,
    slideBy: 1,
    speed: 900,
    gutter: 20,
    autoplay: true,
    autoplayButtonOutput: false,
    autoplayTimeout: 4000,
    mouseDreag: true,
    rewind: true,
    controls: ".slider__controls",
    prevButton: ".controls__prev",
    nextButton: ".controls__next",
    navPosition: "bottom",
    responsive:{
      640:{
        items: 2
      },
      860:{
        items: 3
      }
    }
  });