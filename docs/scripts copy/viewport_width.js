function calculateViewportWidth() {
    let viewportWidth = document.documentElement.clientWidth;
    document.documentElement.style.setProperty('--viewport-width', (viewportWidth) + "px");
  }
  // recalculate on resize
  window.addEventListener('resize', calculateViewportWidth, false);
  // recalculate on dom load
  document.addEventListener('DOMContentLoaded', calculateViewportWidth, false); 
  // recalculate on load (assets loaded as well)
  window.addEventListener('load', calculateViewportWidth);