let flecha = [];
let numFrames = 179; // Número total de imágenes
let currentFrame = 0; // Frame actual
let texts = [];
let texts2 = [];

let frameDuration = 33.333; // Duración de cada frame en milisegundos (1 segundo)
let lastFrameTime = 0; // Variable para almacenar el tiempo del último frame
let aumento = 1;
//let progresion = 1.007;

function preload() {
  // Cargar las imágenes
  for (let i = 0; i < numFrames; i++) {
    let filename = "frames/flecha_de_zenon_corto_3" + nf(i, 3) + ".jpg"; // nf(i, 3) asegura que el número tenga 3 dígitos, por ejemplo, 001 en lugar de 1
    flecha[i] = loadImage(filename);
  }
}

function setup() {
  createCanvas(720, 1280); // Ajusta el tamaño del lienzo según tus necesidades
  frameRate(30); // Fija la tasa de frames a 1 por segundo
}

function draw() {
  //background(255);
   
  // Cambiar al siguiente frame después de frameDuration milisegundos
  if (millis() - lastFrameTime >= frameDuration) {
    currentFrame = (currentFrame + 1) % numFrames; // Avanzar al siguiente frame
    //aumento = aumento * progresion;
    if (currentFrame<=10)
      aumento = aumento * 1;
    else if (currentFrame<=20 && currentFrame>11)
      aumento = aumento * 1.002;
    else if (currentFrame<=30 && currentFrame>21)
      aumento = aumento * 1.004;
    else if (currentFrame<=40 && currentFrame>31)
      aumento = aumento * 1.006;
    //else if (currentFrame<=45 && currentFrame>41)
      //aumento = aumento * 1.01;
    else if (currentFrame>41)
      aumento = aumento * 1.01;
    
    lastFrameTime = millis(); // Actualizar el tiempo del último frame
    frameDuration = frameDuration * aumento;
    console.log("Número de fotograma = " + currentFrame);
    console.log("Duración de cada fotograma en segundos = " + frameDuration /1000);
    
    image(flecha[currentFrame], 0, 0); // Mostrar la imagen actual en (0, 0)
  
    for (let i = 0; i < texts.length; i++) {
      text(texts[i], 30, height - 20 - (texts.length - 1 - i) * 30);
    }
    texts.push("Frame = " + String(currentFrame));
    
    for (let i = 0; i < texts2.length; i++) {
      text(texts2[i], 30, (height - 20 - (texts2.length - 1 - i) * 30)-15);
    }
    texts2.push("Length = " + nf(frameDuration/1000, 0, 4) + " segs");
  }
}