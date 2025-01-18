let images = [];
let currentIndex = 0;
let seconds_number = 0.1;
let displayDuration = 10000; // Duración de cada imagen en milisegundos (0.1 segundos por defecto)
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
  frameRate(60);
}

function draw() {
  background(0); // Fondo negro

  // Mostrar la imagen actual
  image(images[currentIndex], 0, 0, width, height);

  // Verificar si es hora de cambiar la imagen
  if (millis() - lastSwitchTime > displayDuration) {
    currentIndex = (currentIndex + 1) % images.length; // Pasar a la siguiente imagen en loop
    lastSwitchTime = millis();
  }
}

/*function keyPressed() {
  // Cambiar la duración con las teclas de flecha hacia arriba y abajo
  if (keyCode === UP_ARROW) {
    displayDuration += 50; // Incrementa la duración en 50ms
  } else if (keyCode === DOWN_ARROW) {
    displayDuration = max(50, displayDuration - 50); // Disminuye la duración, mínimo 50ms
  }
}*/
