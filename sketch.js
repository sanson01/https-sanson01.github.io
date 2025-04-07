var img;
var cantPixels = 32;
//var numeros = [];
var cont;
var tam = 6;
var myArray = [];

/*------------------*/
function preload() {
	img = loadImage('32.png');
	pixelDensity(1);
}

/*------------------*/
function setup() {
	img.loadPixels();
	createCanvas(cantPixels * tam, cantPixels * tam);
	fill (255);
	frameRate(1);
}

/*------------------*/
function draw() {
	background(0);
	image(img, 0, 0);
	img.loadPixels();
	loadPixels();
	for (var y = 0; y < cantPixels; y++) {
		for (var x = 0; x < cantPixels; x++) {
			var index = (x + (y * cantPixels)) * 4;
			var r = img.pixels[index + 0];
			var g = img.pixels[index + 1];
			var b = img.pixels[index + 2];
			pixels[index + 0] = r;
			pixels[index + 1] = g;
			pixels[index + 2] = b;
			pixels[index + 3] = 255
		}
	}

	var nuevos_pixeles = [];

	for (var i = 0; i < cantPixels * cantPixels * 4; i += 4) {
		var pixel = [
			pixels[i + 0], pixels[i + 1], pixels[i + 2], pixels[i + 3]
		]
		nuevos_pixeles.push(pixel)
	}

	shuffles(nuevos_pixeles);

	for (var y = 0; y < cantPixels; y++) {
		for (var x = 0; x < cantPixels; x++) {
			var i = y * cantPixels + x;
			//console.log(i);

			var r = pixels[(i * 4) + 0] = nuevos_pixeles[i][0];
			var g = pixels[(i * 4) + 1] = nuevos_pixeles[i][1];
			var b = pixels[(i * 4) + 2] = nuevos_pixeles[i][2];
			var a = pixels[(i * 4) + 3] = nuevos_pixeles[i][3];

			fill(r, g, b);
			noStroke();
			rect(x * tam, y * tam, tam, tam);
		}
	}

}

/*------------------*/
function shuffles(a) {
	var j, x, i;
	for (i = a.length - 1; i > 0; i--) {
		j = Math.floor(Math.random() * (i + 1));
		x = a[i];
		a[i] = a[j];
		a[j] = x;
	}
	return a;
}