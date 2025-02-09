let images = [];
let currentIndex = 0;
let displayDuration = 5000; // Duración en milisegundos (5 segundos por defecto)
let lastSwitchTime = 0;
let textEntries = [];
let textOffset = 20; // Espaciado entre líneas

function preload() {
  // Cargar las imágenes en un array
  for (let i = 1; i <= 36; i++) {
    let imageName = `netherlands/netherlands_${i}.jpg`;
    images.push(loadImage(imageName));
  }
}

function setup() {
  createCanvas(1280, 870); // Tamaño del canvas según las dimensiones de las imágenes
  textAlign(LEFT, TOP);
  textSize(11);
  textFont('Consolas, monospace'); // Usa Consolas, y si no está, una fuente monoespaciada genérica.
  fill(255); // Color del texto
}

let coordinates = [
  "1- 52.22286241092744, 6.909704066225264",
  "2- 52.230576427113135, 6.849138686628654",
  "3- 52.2584802652078, 6.7995498818042845",
  "4- 52.265086757585046, 6.7399197153386154",
  "5- 52.27342149212114, 6.688543307025243",
  "6- 52.30805698618666, 6.655156337645599",
  "7- 52.2981035358106, 6.599728954013409",
  "8- 52.300493600104595, 6.541037622962405",
  "9- 52.30196095870097, 6.486104093462621",
  "10- 52.28543936967922, 6.426636049882679",
  "11- 52.27569773435255, 6.360883688994305",
  "12- 52.2615100051808, 6.29606552447072",
  "13- 52.249784615331485, 6.227201990501381",
  "14- 52.25270697611765, 6.164750463668178",
  "15- 52.241807643032395, 6.10559333166867",
  "16- 52.23135667110381, 6.041967017938727",
  "17- 52.22802526889281, 5.984625806657504",
  "18- 52.22796967130795, 5.92156633152252",
  "19- 52.230071982705155, 5.854404371510559",
  "20- 52.221831421988824, 5.78800624757981",
  "21- 52.24310082650844, 5.743170370097159",
  "22- 52.23655493961503, 5.6823248223250875",
  "23- 52.252970679716725, 5.622210945344359",
  "24- 52.26131144589651, 5.565904988735405",
  "25- 52.264479205520765, 5.5021432115387485",
  "26- 52.26086147611923, 5.455286617314808",
  "27- 52.26086147611923, 5.455286617314808",
  "28- 52.26086147611923, 5.455286617314808",
  "29- 52.315733698748154, 5.28891429619626",
  "30- 52.33190556775292, 5.2265348645274825",
  "31- 52.330627342167745, 5.1606442764644225",
  "32- 52.323029808495136, 5.089136402750849",
  "33- 52.33186258626764, 5.053724530456665",
  "34- 52.34425943354688, 5.002511820941376",
  "35- 52.36584647931501, 4.947180662385479",
  "36- 52.368999780511224, 4.8847377156703615"
];

function draw() {
  background(0); // Fondo negro

  // Mostrar la imagen actual
  image(images[currentIndex], 0, 0, width, height);

  // Mostrar la lista de textos en movimiento
  for (let i = 0; i < textEntries.length; i++) {
    text(textEntries[i].text, 10, textEntries[i].y);
    textEntries[i].y -= textOffset / displayDuration * 5000; // Desplazamiento progresivo hacia arriba
  }

  // Verificar si es hora de cambiar la imagen
  if (millis() - lastSwitchTime > displayDuration) {
    textEntries.push({ text: coordinates[currentIndex], y: height - 50 });
    if (textEntries.length > 36) {
      textEntries.shift(); // Eliminar textos que salen de la pantalla
    }
    currentIndex = (currentIndex + 1) % images.length; // Pasar a la siguiente imagen en loop
    lastSwitchTime = millis();
  }
}