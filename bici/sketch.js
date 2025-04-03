let images = [];
let currentIndex = 0;
let baseDuration = 100; // 0.1 segundo en milisegundos
let maxDuration = 1300000; // 1300 segundos en milisegundos
let lastSwitchTime = 0;
let loopCount = 0;
let displayDuration = baseDuration;

function preload() {
  // Cargar las imágenes en un array
  for (let i = 1; i <= 36; i++) {
    let imageName = `netherlands/netherlands_${i}.jpeg`;
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
  "52.22286241092744, 6.909704066225264",
  "52.230576427113135, 6.849138686628654",
  "52.2584802652078, 6.7995498818042845",
  "52.265086757585046, 6.7399197153386154",
  "52.27342149212114, 6.688543307025243",
  "52.30805698618666, 6.655156337645599",
  "52.2981035358106, 6.599728954013409",
  "52.300493600104595, 6.541037622962405",
  "52.30196095870097, 6.486104093462621",
  "52.28543936967922, 6.426636049882679",
  "52.27569773435255, 6.360883688994305",
  "52.2615100051808, 6.29606552447072",
  "52.249784615331485, 6.227201990501381",
  "52.25270697611765, 6.164750463668178",
  "52.241807643032395, 6.10559333166867",
  "52.23135667110381, 6.041967017938727",
  "52.22802526889281, 5.984625806657504",
  "52.22796967130795, 5.92156633152252",
  "52.230071982705155, 5.854404371510559",
  "52.221831421988824, 5.78800624757981",
  "52.24310082650844, 5.743170370097159",
  "52.23655493961503, 5.6823248223250875",
  "52.252970679716725, 5.622210945344359",
  "52.26131144589651, 5.565904988735405",
  "52.264479205520765, 5.5021432115387485",
  "52.26086147611923, 5.455286617314808",
  "52.27518036965909, 5.367452183203269",
  "52.26086147611923, 5.455286617314808",
  "52.315733698748154, 5.28891429619626",
  "52.33190556775292, 5.2265348645274825",
  "52.330627342167745, 5.1606442764644225",
  "52.323029808495136, 5.089136402750849",
  "52.33186258626764, 5.053724530456665",
  "52.34425943354688, 5.002511820941376",
  "52.36584647931501, 4.947180662385479",
  "52.368999780511224, 4.8847377156703615"
];

let locationInfo = [
  "Enschede, Netherlands",
  "Enschede, Netherlands",
  "Hengelo, Netherlands",
  "Delden, Netherlands",
  "Delden, Netherlands",
  "Bornerbroek, Netherlands",
  "Enter, Netherlands",
  "Rijssen, Netherlands",
  "Rijssen, Netherlands",
  "Holten, Netherlands",
  "Dijkerhoek, Netherlands",
  "Apenhuizen, Netherlands",
  "Colmschate, Netherlands",
  "Deventer, Netherlands",
  "Twello, Netherlands",
  "Teuge, Netherlands",
  "Apeldoorn, Netherlands",
  "Apeldoorn, Netherlands",
  "Hoog Soeren, Netherlands",
  "Ouwendorp, Netherlands",
  "Garderen, Netherlands",
  "Garderen, Netherlands",
  "Putten, Netherlands",
  "Bijsteren, Netherlands",
  "Nijkerk, Netherlands",
  "Zeewolde, Netherlands",
  "Zeewolde, Netherlands",
  "Almere, Netherlands",
  "Almere Haven, Netherlands",
  "Almere, Netherlands",
  "Muiden, Netherlands",
  "Muiden, Netherlands",
  "Reiteland-Oost, Netherlands",
  "Zeeburg, Netherlands",
  "Amsterdam, Netherlands",
  "Amsterdam, Netherlands"
];

let timestamps = [
  "21-01-25 06:20 hs",
  "21-01-25 06:38 hs",
  "21-01-25 06:56 hs",
  "21-01-25 07:15 hs",
  "21-01-25 07:32 hs",
  "21-01-25 07:49 hs",
  "21-01-25 08:06 hs",
  "21-01-25 08:24 hs",
  "21-01-25 08:47 hs",
  "21-01-25 09:17 hs",
  "21-01-25 09:36 hs",
  "21-01-25 09:53 hs",
  "21-01-25 10:12 hs",
  "21-01-25 10:32 hs",
  "21-01-25 10:59 hs",
  "21-01-25 11:19 hs",
  "21-01-25 11:40 hs",
  "21-01-25 12:00 hs",
  "21-01-25 12:27 hs",
  "21-01-25 13:03 hs",
  "21-01-25 13:22 hs",
  "21-01-25 13:38 hs",
  "21-01-25 13:55 hs",
  "21-01-25 14:14 hs",
  "21-01-25 15:05 hs",
  "21-01-25 15:17 hs",
  "21-01-25 15:23 hs",
  "21-01-25 16:09 hs",
  "21-01-25 16:27 hs",
  "21-01-25 16:40 hs",
  "21-01-25 16:55 hs",
  "21-01-25 17:01 hs",
  "21-01-25 17:31 hs",
  "21-01-25 17:45 hs",
  "21-01-25 18:46 hs",
  "21-01-25 19:15 hs"
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