const maxWidth = 730; 
let accordionState = false;
const accordion = document.querySelector(".info-section__menu");



function checkAccordion(){    
    if(window.innerWidth <= maxWidth && accordionState === false){
        accordionState = true;               
        toggleAccordion(accordion);
        getAccordions("accordion");
    }
    else if(window.innerWidth >= maxWidth && accordionState === true){
        accordionState = false;
        removeAccordions(accordionList);
        toggleAccordion(accordion);
    }
}

function toggleAccordion(){    
    let bar = accordion.firstElementChild;
    let content = bar.nextElementSibling;
    
    accordion.classList.toggle("accordion");
    bar.classList.toggle("accordion__bar");
    content.classList.toggle("accordion__content");
}

  // recalculate on resize
  window.addEventListener('resize', checkAccordion, false);
  // recalculate on dom load
  document.addEventListener('DOMContentLoaded', checkAccordion, false); 
  // recalculate on load (assets loaded as well)
  window.addEventListener('load', checkAccordion);