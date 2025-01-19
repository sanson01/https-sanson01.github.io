let images = [];
let currentIndex = 0;
let displayDuration = 100; // Duración en milisegundos (0.1 segundos por defecto)
let lastSwitchTime = 0;

function preload() {
  // Cargar las imágenes en un array
  for (let i = 1; i <= 37; i++) {
    let imageName = `madrid/madrid_${i}.jpeg`;
    images.push(loadImage(imageName));
  }
}

function setup() {
  createCanvas(1280, 870); // Tamaño del canvas según las dimensiones de las imágenes
  textAlign(CENTER, CENTER);
  textSize(24);
  fill(255); // Color del texto
}

function draw() {
  background(0); // Fondo negro

  // Mostrar la imagen actual
  image(images[currentIndex], 0, 0, width, height);

  // Mostrar el texto con el número de imagen y el contador
  let elapsedTime = (millis() - lastSwitchTime) / 1000; // Tiempo transcurrido en segundos
  let displayText = `image ${currentIndex + 1}/37; ${elapsedTime.toFixed(2)} secs`;
  text(displayText, width / 2, height - 30); // Texto centrado en la parte inferior

  // Verificar si es hora de cambiar la imagen
  if (millis() - lastSwitchTime > displayDuration) {
    currentIndex = (currentIndex + 1) % images.length; // Pasar a la siguiente imagen en loop
    lastSwitchTime = millis();
  }
}