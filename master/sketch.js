let images = [];
let currentIndex = 0;
let baseDuration = 100;
let maxDuration = 1300000;
let lastSwitchTime = 0;
let loopCount = 0;
let displayDuration = baseDuration;

function preload() {
  for (let i = 1; i <= 35; i++) {
    let imageName = `master/madrid${i}.jpeg`;
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
  "40.418288130081066, -3.6963309012387092",
  "40.417633111537604, -3.6961381439641054",
  "40.417024757732456, -3.6955808431121313",
  "40.4160076026848, -3.696016245629316",
  "40.41500283664928, -3.695855078557182",
  "40.41500283664928, -3.695855078557182",
  "40.413168883947534, -3.695651602777031",
  "40.412514042593116, -3.695651613538004",
  "40.41139559506756, -3.695670911818859",
  "40.41053470279653, -3.695719241814255",
  "40.410313953258424, -3.6950524573784107",
  "40.409960206669126, -3.6955772583223405",
  "40.409181915213274, -3.6956765188064216",
  "40.40828266385805, -3.6961230389369732",
  "40.407383434895735, -3.6961230588692726",
  "40.40615171096535, -3.695874993333311",
  "40.40541865081138, -3.695517658655417",
  "40.40469318900774, -3.695716160634273",
  "40.40405084876701, -3.695666559341003",
  "40.40339339574715, -3.6957261203189433",
  "40.40256968946768, -3.6958650731199616",
  "40.4037183671702, -3.6957954502221257",
  "40.4017761256442, -3.6959344609008205",
  "40.401058178153846, -3.696003953092954",
  "40.40034778868601, -3.6961230622868033",
  "40.399433348574874, -3.6962124027671446",
  "40.39882116014401, -3.696291727212601",
  "40.398224104887326, -3.6964207562841795",
  "40.39723405044344, -3.6966192589924862",
  "40.396531176590294, -3.696172706128818",
  "40.39580563474476, -3.696142955383987",
  "40.39525386991926, -3.6965497630248847",
  "40.394807944165905, -3.696440606720584",
  "40.39420329892615, -3.696321530781684",
  "40.393560858395944, -3.6959146678349333"
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
  "Madrid, Spain"
];

let timestamps = [
  "07-02-24 14:38hs",
  "07-02-24 14:41hs",
  "07-02-24 14:43hs",
  "07-02-24 14:45hs",
  "07-02-24 14:47hs",
  "07-02-24 14:50hs",
  "07-02-24 14:52hs",
  "07-02-24 14:54hs",
  "07-02-24 14:56hs",
  "07-02-24 14:58hs",
  "07-02-24 14:59hs",
  "07-02-24 15:01hs",
  "07-02-24 15:02hs",
  "07-02-24 15:04hs",
  "07-02-24 15:06hs",
  "07-02-24 15:08hs",
  "07-02-24 15:09hs",
  "07-02-24 15:11hs",
  "07-02-24 15:13hs",
  "07-02-24 15:15hs",
  "07-02-24 15:17hs",
  "07-02-24 15:18hs",
  "07-02-24 15:20hs",
  "07-02-24 15:22hs",
  "07-02-24 15:24hs",
  "07-02-24 15:26hs",
  "07-02-24 15:27hs",
  "07-02-24 15:29hs",
  "07-02-24 15:31hs",
  "07-02-24 15:33hs",
  "07-02-24 15:35hs",
  "07-02-24 15:36hs",
  "07-02-24 15:38hs",
  "07-02-24 15:41hs",
  "07-02-24 15:44hs"
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