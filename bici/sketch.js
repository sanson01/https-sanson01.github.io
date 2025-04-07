let images = [];
let currentIndex = 0;
let baseDuration = 100; // 0.1 segundo en milisegundos
let maxDuration = 1300000; // 1300 segundos en milisegundos
let lastSwitchTime = 0;
let loopCount = 0;
let displayDuration = baseDuration;

function preload() {
  // Cargar las imágenes en un array
  for (let i = 1; i <= 37; i++) {
    let imageName = `madrid/bici${i}.jpeg`;
    images.push(loadImage(imageName));
  }
}

function setup() {
  createCanvas(1280, 870); // Tamaño del canvas según las dimensiones de las imágenes
  textAlign(LEFT, TOP);
  textSize(13);
  textFont('Consolas, monospace'); // Usa Consolas, y si no está, una fuente monoespaciada genérica.
  fill(255); // Color del texto
}

let coordinates = [
  "40.379641821972996, -3.6902945424503018",
  "40.36924117346147, -3.678772565846828",
  "40.368501865893705, -3.660821649547764",
  "40.37923101893092, -3.648739537057581",
  "40.38906609583962, -3.6335573255667044",
  "40.40051229598978, -3.627752853262203",
  "40.41183355560396, -3.6180943938906815",
  "40.41947517358132, -3.6068620428805067",
  "40.43042110849141, -3.60029880629461",
  "40.44198388979172, -3.602633124432513",
  "40.45251282270538, -3.606428695814285",
  "40.460768986399565, -3.6227096175630775",
  "40.47307071832784, -3.632585602175394",
  "40.480995959417456, -3.6502153374025825",
  "40.4938293107891, -3.6488579732153705",
  "40.50360713782787, -3.659546921061118",
  "40.515364197469026, -3.670940806843093",
  "40.506496389003814, -3.683833617751961",
  "40.514084954228764, -3.689826960287595",
  "40.50658462198259, -3.7083862413394235",
  "40.49634254288615, -3.719265101135293",
  "40.48860807324571, -3.7314182618324216",
  "40.47641390387421, -3.7413351825246117",
  "40.46330529068081, -3.74759490937978",
  "40.4518234982896, -3.747137166113732",
  "40.4518234982896, -3.747137166113732",
  "40.423654706541186, -3.7342340252574737",
  "40.41638985078597, -3.745205418938325",
  "40.40850667382556, -3.7611994656817758",
  "40.39974054692772, -3.762898902601702",
  "40.39044239769681, -3.758765574397932",
  "40.3787598407096, -3.7583790873099625",
  "40.37325607151976, -3.74184592459761",
  "40.37472720040439, -3.7239575676748857",
  "40.37472720040439, -3.7239575676748857",
  "40.373696790570264, -3.699232511649046",
  "40.37678583309541, -3.6911956055759987"
];

let locationInfo = [
  "Madrid, Spain",
  "Madrid, Spain",
  "Madrid, Spain",
  "Madrid, Spain",
  "Madrid, Spain",
  "Madrid, Spain",
  "Madrid, Spain",
  "Madrid, Spain",
  "Madrid, Spain",
  "Madrid, Spain",
  "Madrid, Spain",
  "Madrid, Spain",
  "Madrid, Spain",
  "Madrid, Spain",
  "Madrid, Spain",
  "Madrid, Spain",
  "Madrid, Spain",
  "Madrid, Spain",
  "Madrid, Spain",
  "Madrid, Spain",
  "Madrid, Spain",
  "Madrid, Spain",
  "Madrid, Spain",
  "Madrid, Spain",
  "Madrid, Spain",
  "Madrid, Spain",
  "Madrid, Spain",
  "Madrid, Spain",
  "Madrid, Spain",
  "Madrid, Spain",
  "Madrid, Spain",
  "Madrid, Spain",
  "Madrid, Spain",
  "Madrid, Spain",
  "Madrid, Spain",
  "Madrid, Spain",
  "Madrid, Spain"
];

let timestamps = [
  "27-04-24 19:07 hs",
  "27-04-24 19:14 hs",
  "27-04-24 19:21 hs",
  "27-04-24 19:28 hs",
  "27-04-24 19:35 hs",
  "27-04-24 19:42 hs",
  "27-04-24 19:49 hs",
  "27-04-24 19:55 hs",
  "27-04-24 20:02 hs",
  "27-04-24 20:09 hs",
  "27-04-24 20:16 hs",
  "27-04-24 20:23 hs",
  "27-04-24 20:30 hs",
  "27-04-24 20:37 hs",
  "27-04-24 20:44 hs",
  "27-04-24 20:51 hs",
  "27-04-24 20:58 hs",
  "27-04-24 21:05 hs",
  "27-04-24 21:12 hs",
  "27-04-24 21:19 hs",
  "27-04-24 21:26 hs",
  "27-04-24 21:33 hs",
  "27-04-24 21:40 hs",
  "27-04-24 21:47 hs",
  "27-04-24 21:54 hs",
  "27-04-24 22:01 hs",
  "27-04-24 22:08 hs",
  "27-04-24 22:15 hs",
  "27-04-24 22:22 hs",
  "27-04-24 22:29 hs",
  "27-04-24 22:36 hs",
  "27-04-24 22:43 hs",
  "27-04-24 22:50 hs",
  "27-04-24 22:57 hs",
  "27-04-24 23:04 hs",
  "27-04-24 23:11 hs",
  "27-04-24 23:18 hs"
];

function draw() {
  background(0); // Fondo negro

  // Mostrar la imagen actual
  image(images[currentIndex], 0, 0, width, height);

  // Mostrar las coordenadas en la parte inferior izquierda con margen adicional
  textAlign(LEFT, TOP);
  text(coordinates[currentIndex], 30, height - 50);
  text(locationInfo[currentIndex], 30, height - 30);
  textAlign(RIGHT, TOP);
  text(timestamps[currentIndex], width - 30, height - 30);

  // Mostrar el texto con el número de imagen y el contador centrado abajo
  let elapsedTime = (millis() - lastSwitchTime) / 1000; // Tiempo transcurrido en segundos
  let displayText = `${currentIndex + 1}/36; ${elapsedTime.toFixed(1)} secs`;
  textAlign(CENTER, CENTER);
  text(displayText, width / 2, height - 50);

  // Verificar si es hora de cambiar la imagen
  if (millis() - lastSwitchTime > displayDuration) {
    currentIndex = (currentIndex + 1) % images.length; // Pasar a la siguiente imagen en loop
    lastSwitchTime = millis();

    // Si hemos completado un ciclo de 36 imágenes, duplicar la duración hasta el límite
    if (currentIndex === 0) {
      displayDuration = min(displayDuration * 2, maxDuration);
      loopCount++;
    }
  }
}