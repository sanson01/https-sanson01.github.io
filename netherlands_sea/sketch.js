let images = [];
let currentIndex = 0;
let baseDuration = 100;
let maxDuration = 1300000;
let lastSwitchTime = 0;
let loopCount = 0;
let displayDuration = baseDuration;

function preload() {
  for (let i = 1; i <= 36; i++) {
    let imageName = `netherlands_sea/netherlands_sea_${i}.jpg`;
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
  "52.2226588154747, 6.90912105399219",
  "52.252282023309185, 6.915024205227303",
  "52.28414310207628, 6.9293953665414065",
  "52.344909631742226, 6.931948860469674",
  "52.372224735869786, 6.906707424083635",
  "52.403678025263346, 6.901041386128673",
  "52.43285482906974, 6.923461780134245",
  "52.460470622326355, 6.953409984798837",
  "52.49305637165957, 6.963115322208172",
  "52.5197524963488, 6.94605852277862",
  "52.549223235537745, 6.926319844964059",
  "52.57731013169923, 6.889872587417817",
  "52.60422211503493, 6.856790285766357",
  "52.63735160057715, 6.861935037980141",
  "52.66803819091247, 6.874475909880371",
  "52.70216582623522, 6.864555581580885",
  "52.7266059231794, 6.878964872680522",
  "52.76142395599638, 6.875135157715621",
  "52.78676976839868, 6.891506318090366",
  "52.80907279669705, 6.928280577744004",
  "52.83032547672242, 6.912100368134873",
  "52.85625221176364, 6.911594315647027",
  "52.87707816798961, 6.956776826086959",
  "52.89336763113373, 6.988267517918385",
  "52.930302063546065, 7.0227913541995965",
  "52.96343011207574, 7.0407405480634075",
  "52.994796542844476, 7.047274013898213",
  "53.02953565953471, 7.049775422379963",
  "53.0580532653709, 7.054233080425608",
  "53.089733711687906, 7.071239539304462",
  "53.1481208414931, 7.046149223518715",
  "53.160922531735494, 7.083827908512696",
  "53.180657890523385, 7.125627614948363",
  "53.18902706180438, 7.162823334725439",
  "53.20873953534378, 7.187640058712538",
  "53.229635798752646, 7.2078093301866275"
];

let locationInfo = [
  "Enschede, Netherlands",
  "Lonneker, Netherlands",
  "Hanzepoort, Netherlands",
  "Rossum, Netherlands",
  "Rossum, Netherlands",
  "Ootmarsum, Netherlands",
  "Ootmarsum, Netherlands",
  "Lage, Germany",
  "Neuenhaus, Germany",
  "Gölenkamp, Germany",
  "Gölenkamp, Germany",
  "Hoogstede, Germany",
  "Emlichheim, Germany",
  "Emlichheim, Germany",
  "Schoonebeek, Netherlands",
  "Zandpol, Netherlands",
  "Nieuw-Amsterdam, Netherlands",
  "Bargermeer, Netherlands",
  "Emmen, Netherlands",
  "Emmen, Netherlands",
  "Weerdinge, Netherlands",
  "Valthe, Netherlands",
  "Valthermond, Netherlands",
  "Valthermond, Netherlands",
  "Musselkanaal, Netherlands",
  "Mussel, Netherlands",
  "Vosseberg, Netherlands",
  "Onstwedde, Netherlands",
  "Holte, Netherlands",
  "Wedderveer, Netherlands",
  "Wonschoten, Netherlands",
  "Beerta, Netherlands",
  "Beerta, Netherlands",
  "Nieuw Beerta, Netherlands",
  "Drieborg, Netherlands",
  "Nieuw Statenzijl, Netherlands"
];

let timestamps = [
  "22-02-25 05:50hs",
  "22-02-25 06:04hs",
  "22-02-25 06:17hs",
  "22-02-25 06:31hs",
  "22-02-25 06:45hs",
  "22-02-25 6:58hs",
  "22-02-25 7:09hs",
  "22-02-25 7:27hs",
  "22-02-25 7:37hs",
  "22-02-25 7:51hs",
  "22-02-25 8:04hs",
  "22-02-25 8:15hs",
  "22-02-25 8:25hs",
  "22-02-25 8:37hs",
  "22-02-25 9:14hs",
  "22-02-25 9:27hs",
  "22-02-25 9:39hs",
  "22-02-25 9:52hs",
  "22-02-25 10:02hs",
  "22-02-25 10:17hs",
  "22-02-25 10:31hs",
  "22-02-25 11:27hs",
  "22-02-25 11:36hs",
  "22-02-25 11:47hs",
  "22-02-25 11:56hs",
  "22-02-25 12:10hs",
  "22-02-25 12:25hs",
  "22-02-25 12:34hs",
  "22-02-25 12:45hs",
  "22-02-25 13:18hs",
  "22-02-25 13:28hs",
  "22-02-25 14:57hs",
  "22-02-25 15:10hs",
  "22-02-25 15:18hs",
  "22-02-25 16:01hs",
  "22-02-25 16:21hs"
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