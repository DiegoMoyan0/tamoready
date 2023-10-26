// window.addEventListener('scroll', function() {
//   var element = document.getElementById('title-about');
//   var position = element.getBoundingClientRect();

//   // Aparece el texto cuando el elemento está a la vista
//   if (position.top < window.innerHeight) {
//       element.style.visibility = 'visible';
//       element.style.opacity = '1';
//   }
// });

window.addEventListener('scroll', function() {
  var element = document.getElementById('title-about');
  var position = element.getBoundingClientRect();

  if (position.top < window.innerHeight) {
      element.classList.remove('hidden');
      element.classList.add('slide-in');
  }
});

window.addEventListener('scroll', function() {
  var element = document.getElementById('title-services');
  var position = element.getBoundingClientRect();

  if (position.top < window.innerHeight) {
      element.classList.remove('hidden');
      element.classList.add('slide-in');
  }
});

window.addEventListener('scroll', function() {
  var element = document.getElementById('title-dife');
  var position = element.getBoundingClientRect();

  if (position.top < window.innerHeight) {
      element.classList.remove('hidden');
      element.classList.add('slide-in');
  }
});
window.addEventListener('scroll', function() {
  var element = document.getElementById('title-contact');
  var position = element.getBoundingClientRect();

  if (position.top < window.innerHeight) {
      element.classList.remove('hidden');
      element.classList.add('slide-in');
  }
});
window.addEventListener('scroll', function() {
  var element = document.getElementById('p-contact');
  var position = element.getBoundingClientRect();

  if (position.top < window.innerHeight) {
      element.classList.remove('hidden');
      element.classList.add('slide-in');
  }
});
