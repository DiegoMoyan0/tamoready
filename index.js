document.addEventListener("DOMContentLoaded", function() {
  var titleAbout = document.getElementById("title-about");
  var lineaVerde = document.querySelector(".linea-verde");

  // Función para comprobar si el elemento está en la vista del usuario
  function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Función para manejar el evento de scroll
  function handleScroll() {
    if (isInViewport(titleAbout)) {
      titleAbout.classList.add("visible");

      // Agregar la clase "visible" y "loading" a la barra
      lineaVerde.classList.add("visible");
      lineaVerde.classList.add("loading");

      // Eliminar la clase "loading" cuando la barra esté completa
      setTimeout(function() {
        lineaVerde.classList.remove("loading");
      }, 2000); // 2 segundos para que coincida con la duración de la animación de la barra

      // Eliminar el listener después de la animación para que no se repita
      window.removeEventListener("scroll", handleScroll);
    }
  }

  // Agregar un listener de scroll
  window.addEventListener("scroll", handleScroll);
});
