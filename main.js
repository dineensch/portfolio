let isScrolling = false;
 
    window.addEventListener("scroll", throttleScroll, false);
 
    function throttleScroll(e) {
      if (isScrolling == false) {
        window.requestAnimationFrame(function() {
          scrolling(e);
          isScrolling = false;
        });
      }
      isScrolling = true;
    }
 
    document.addEventListener("DOMContentLoaded", scrolling, false);
 
    let firstBox = document.querySelector("#firstBox");
    let secondBox = document.querySelector("#secondBox");
 
    function scrolling(e) {
 
      if (isPartiallyVisible(firstBox)) {
        firstBox.classList.add("active");
      }
 
      if (isFullyVisible(secondBox)) {
        secondBox.classList.add("active");
      }
    }
 
    function isPartiallyVisible(el) {
      let elementBoundary = el.getBoundingClientRect();
 
      let top = elementBoundary.top;
      let bottom = elementBoundary.bottom;
      let height = elementBoundary.height;
 
      return ((top + height >= 0) && (height + window.innerHeight >= bottom));
    }
 
    function isFullyVisible(el) {
      let elementBoundary = el.getBoundingClientRect();
 
      let top = elementBoundary.top;
      let bottom = elementBoundary.bottom;
 
      return ((top >= 0) && (bottom <= window.innerHeight));
    }