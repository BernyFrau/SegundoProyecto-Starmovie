// Función para detectar si el dispositivo es móvil
function isMobile() {
  return /Mobi|Android/i.test(navigator.userAgent);
}

// Función para cambiar el diseño de los videos según el tipo de dispositivo
function adjustLayout() {
  var container = document.getElementById('videoContainer');
  if (isMobile()) {
      container.classList.remove('container');
  } else {
      container.classList.add('container');
  }
}

// para ajustar diseño cuando se carga la página y cuando cambia el tamaño de la ventana
window.onload = adjustLayout;
window.onresize = adjustLayout;