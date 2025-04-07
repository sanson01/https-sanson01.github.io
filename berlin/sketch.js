let images = [];
let currentIndex = 0;
let baseDuration = 100;
let maxDuration = 1300000;
let lastSwitchTime = 0;
let loopCount = 0;
let displayDuration = baseDuration;

function preload() {
  for (let i = 1; i <= 33; i++) {
    let imageName = `berlin/berlin${i}.jpg`;
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
  "40.49161044742588, -3.5621842505878636",
  "52.52261369596503, 13.413146419461537",
  "52.497626352401575, 13.360930448694877",
  "52.497768524212226, 13.360247110641248",
  "52.49782818950082, 13.360290668787224",
  "52.49780830108052, 13.360334227018424",
  "52.51625779139245, 13.377472842905636",
  "52.5201514985554, 13.397675729195042",
  "52.511168530002095, 13.394388091409901",
  "52.497577237740394, 13.360169315029243",
  "52.497509791688664, 13.360538594076901",
  "52.49730745663075, 13.36061244714966",
  "52.5201574525532, 13.407039173166902",
  "52.51677654977644, 13.38779076637927",
  "52.50208117612513, 13.364667312910326",
  "52.49777801580423, 13.359956789557533",
  "52.49757968095656, 13.362958030963547",
  "52.51826357613968, 13.362284480637669",
  "52.50239815787588, 13.364855682862581",
  "52.497244848374514, 13.35984423173734",
  "52.497368530205215, 13.35991194418277",
  "52.50325560112422, 13.37491618092512",
  "52.52128391193, 13.385537350800341",
  "52.51905897995333, 13.380334811861186",
  "52.5162187010924, 13.381870860455106",
  "52.52218340247616, 13.384763310011445",
  "52.51639242616186, 13.381703955791503",
  "52.51617133302375, 13.381953737524876",
  "52.51950812821369, 13.379716610212148",
  "52.51928671065184, 13.386355080995179",
  "52.52199819463733, 13.384869969795531",
  "52.52199819463733, 13.384869969795531",
  "52.508933446811305, 13.425563015484256"
  
];

let locationInfo = [
  "Madrid, Spain",
  "Berlin, Germany",
  "Berlin, Germany",
  "Berlin, Germany",
  "Berlin, Germany",
  "Berlin, Germany",
  "Berlin, Germany",
  "Berlin, Germany",
  "Berlin, Germany",
  "Berlin, Germany",
  "Berlin, Germany",
  "Berlin, Germany",
  "Berlin, Germany",
  "Berlin, Germany",
  "Berlin, Germany",
  "Berlin, Germany",
  "Berlin, Germany",
  "Berlin, Germany",
  "Berlin, Germany",
  "Berlin, Germany",
  "Berlin, Germany",
  "Berlin, Germany",
  "Berlin, Germany",
  "Berlin, Germany",
  "Berlin, Germany",
  "Berlin, Germany",
  "Berlin, Germany",
  "Berlin, Germany",
  "Berlin, Germany",
  "Berlin, Germany",
  "Berlin, Germany",
  "Berlin, Germany",
  "Berlin, Germany"
];

let timestamps = [
  "21-03-24 08:00 hs",
  "21-03-24 12:20 hs",
  "21-03-24 16:40 hs",
  "21-03-24 21:00 hs",
  "22-03-24 01:00 hs",
  "22-03-24 5:20 hs",
  "22-03-24 9:40 hs",
  "22-03-24 14:00 hs",
  "22-03-24 18:20 hs",
  "22-03-24 22:40 hs",
  "23-03-24 03:00 hs",
  "23-03-24 07:20 hs",
  "23-03-24 11:40 hs",
  "23-03-24 16:00 hs",
  "23-03-24 20:20 hs",
  "24-03-24 00:40 hs",
  "24-03-24 05:00 hs",
  "24-03-24 09:20 hs",
  "24-03-24 13:40 hs",
  "24-03-24 18:00 hs",
  "24-03-24 22:20 hs",
  "25-03-24 02:40 hs",
  "25-03-24 07:00 hs",
  "25-03-24 11:20 hs",
  "25-03-24 15:40 hs",
  "25-03-24 20:00 hs",
  "26-03-24 00:20 hs",
  "26-03-24 04:40 hs",
  "26-03-24 09:00 hs",
  "26-03-24 13:20 hs",
  "26-03-24 22:40 hs",
  "27-03-24 03:40 hs",
  "27-03-24 08:00 hs"
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