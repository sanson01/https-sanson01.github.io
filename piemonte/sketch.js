let images = [];
let currentIndex = 0;
let baseDuration = 100;
let maxDuration = 1300000;
let lastSwitchTime = 0;
let loopCount = 0;
let displayDuration = baseDuration;

function preload() {
  for (let i = 1; i <= 32; i++) {
    let imageName = `piemonte/piemonte${i}.jpeg`;
    images.push(loadImage(imageName));
  }
}

function setup() {
  createCanvas(1280, 870);
  textAlign(LEFT, TOP);
  textSize(13);
  textFont('Consolas, monospace');
  fill(255);
}

let coordinates = [
  "44.68412292129959, 7.895956531793888",
"44.684860637648015, 7.895453195078993",
"44.685413909336674, 7.895922694490556",
"44.68608316707763, 7.89594194034719",
"44.68670822239052, 7.895941934756635",
"44.6873900975444, 7.895407069851274",
"44.68813970355891, 7.894816860130078",
"44.68902479987622, 7.8940729542060915",
"44.689770018156025, 7.893430489774814",
"44.690504298627836, 7.8928402848791",
"44.69116864455551, 7.892265448311173",
"44.69180722341542, 7.891735716133741",
"44.69260415439098, 7.891075504029797",
"44.69339477660634, 7.890379849026748",
"44.694119241216086, 7.889768380959686",
"44.69488149346232, 7.889090447353701",
"44.695668933855266, 7.888487840181239",
"44.69642591684522, 7.887788171024349",
"44.69733759971486, 7.887135238350741",
"44.69820368813573, 7.886896210068847",
"44.6992728166412, 7.886231617359972",
"44.700134734985625, 7.885759401813634",
"44.700839172138785, 7.886190815301693",
"44.70134470206553, 7.886995346887621",
"44.70186265376192, 7.888044754079195",
"44.70223548953079, 7.889178466426469",
"44.702649864133306, 7.890909921287605",
"44.702861187440995, 7.891580357616959",
"44.702836309077014, 7.89281046153929",
"44.702836309077014, 7.89281046153929",
"44.70363184813715, 7.894681923521788",
"44.70363184813715, 7.894681923521788",
];

let locationInfo = [
  "Pollenzo, Italy",
  "Pollenzo, Italy",
  "Pollenzo, Italy",
  "Pollenzo, Italy",
  "Pollenzo, Italy",
  "Pollenzo, Italy",
  "Pollenzo, Italy",
  "Pollenzo, Italy",
  "Pollenzo, Italy",
  "Pollenzo, Italy",
  "Pollenzo, Italy",
  "Pollenzo, Italy",
  "Pollenzo, Italy",
  "Pollenzo, Italy",
  "Pollenzo, Italy",
  "Borgo Novo, Italy",
  "Borgo Novo, Italy",
  "Borgo Novo, Italy",
  "Borgo Novo, Italy",
  "Borgo Novo, Italy",
  "Borgo Novo, Italy",
  "Borgo Novo, Italy",
  "Borgo Novo, Italy",
  "Borgo Novo, Italy",
  "Borgo San Martino, Italy",
  "Borgo San Martino, Italy",
  "Borgo San Martino, Italy",
  "Macellai, Italy",
  "Macellai, Italy",
  "Macellai, Italy",
  "Macellai, Italy",
  "Macellai, Italy",
];

let timestamps = [
  "18-07-2023 19:05hs",
  "18-07-2023 19:07hs",
  "18-07-2023 19:10hs",
  "18-07-2023 19:12hs",
  "18-07-2023 19:15hs",
  "18-07-2023 19:18hs",
  "18-07-2023 19:21hs",
  "18-07-2023 19:23hs",
  "18-07-2023 19:25hs",
  "18-07-2023 19:28hs",
  "18-07-2023 19:30hs",
  "18-07-2023 19:32hs",
  "18-07-2023 19:34hs",
  "18-07-2023 19:37hs",
  "18-07-2023 19:40hs",
  "18-07-2023 19:42hs",
  "18-07-2023 19:45hs",
  "18-07-2023 19:47hs",
  "18-07-2023 19:49hs",
  "18-07-2023 19:52hs",
  "18-07-2023 19:55hs",
  "18-07-2023 19:57hs",
  "18-07-2023 19:59hs",
  "18-07-2023 20:02hs",
  "18-07-2023 20:05hs",
  "18-07-2023 20:07hs",
  "18-07-2023 20:09hs",
  "18-07-2023 20:11hs",
  "18-07-2023 20:13hs",
  "18-07-2023 20:16hs",
  "18-07-2023 20:18hs",
  "18-07-2023 20:21hs",
  "18-07-2023 20:24hs",
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