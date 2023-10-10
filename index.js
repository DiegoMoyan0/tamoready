document.addEventListener("DOMContentLoaded", function() {
  var titleAbout = document.getElementById("title-about");
  var lineaVerde = document.querySelector(".linea-verde");

  function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function handleScroll() {
    if (isInViewport(titleAbout)) {
      titleAbout.classList.add("visible");

      lineaVerde.classList.add("visible");
      lineaVerde.classList.add("loading");

      setTimeout(function() {
        lineaVerde.classList.remove("loading");
      }, 2000); 

      window.removeEventListener("scroll", handleScroll);
    }
  }
  window.addEventListener("scroll", handleScroll);
});
