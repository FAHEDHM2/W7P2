let img1;   
let img2;   
let fadeAmount = 255; 

function preload() {
  img2 = loadImage("assets/night-sky.jpg");   
  img1 = loadImage("assets/blue-sky.jpg");   
}

function setup() {
  createCanvas(img1.width, img1.height);
}

function draw() {
 
  image(img2, 0, 0);

  
  if (fadeAmount > 0) {
    fadeAmount -= 2;  
  }

  
  img1.loadPixels();

  for (let i = 0; i < img1.pixels.length; i += 4) {
    

    img1.pixels[i + 3] = fadeAmount;
  }

  img1.updatePixels();

  
  image(img1, 0, 0);
}
