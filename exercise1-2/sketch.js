let img1 
let img2 
let w = 0;
function preload() {
  img1 = loadImage('assets/blue-sky.jpg');
  img2 = loadImage('assets/plane.png');
}
function setup() {
  createCanvas(img1.width, img1.height);
  
}
function draw() {
    imageMode(CENTER);
image(img1,width/2,height/2,img1.width,img1.height);
  

  image(img2,w,200,400,300);
  if(w<img1.width){
    w++
  }
 
}