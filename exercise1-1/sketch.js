let img
let w = 512;let h = 410;

function preload() {
  img = loadImage('assets/pallas_cat.jpg');
}
function setup() {
  createCanvas(w, h);
  imageMode(CENTER);
}

function draw() {
    
image(img, width / 2, height / 2, w, h);
if(h<img.height){
    w++
    h++
}

}
