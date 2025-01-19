let images = [];
let currentIndex = 0;
let seconds_number = 2; // Duración en segundos
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
  lastSwitchTime = millis(); // Asegurarse de inicializar el tiempo al inicio
}

function draw() {
  background(0); // Fondo negro

  // Mostrar la imagen actual
  image(images[currentIndex], 0, 0, width, height);

  // Verificar si es hora de cambiar la imagen
  if (millis() - lastSwitchTime >= seconds_number * 1000) {
    currentIndex = (currentIndex + 1) % images.length; // Pasar a la siguiente imagen en loop
    lastSwitchTime = millis(); // Reiniciar el temporizador
  }
}

/*function keyPressed() {
  // Cambiar la duración con las teclas de flecha hacia arriba y abajo
  if (keyCode === UP_ARROW) {
    seconds_number += 0.1; // Incrementa la duración en 0.1 segundos
  } else if (keyCode === DOWN_ARROW) {
    seconds_number = max(0.1, seconds_number - 0.1); // Disminuye la duración, mínimo 0.1 segundos
  }
  console.log(`Duración actual: ${seconds_number.toFixed(1)} segundos`);
}*/