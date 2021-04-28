let img1;
let img2;
let img3;
let img4
let img5;
let img6;
let sound;

function preload(){
  img1 = loadImage('assets/car.jpg');
  img2 = loadImage('assets/freeway.jpg');
  img3 = loadImage('assets/park.jpg');
  img4 = loadImage('assets/walk.jpg');
  img5 = loadImage('assets/police.jpg');
  img6 = loadImage('assets/sidewalk.jpg');
  sound = loadSound('assets/walk.mp3');

}function mousePressed() {
  if (sound.isPlaying(assets/walk.mp3)) {
    sound.stop(assets/walk.mp3);
  }
  else {
    sound.play(assets/walk.mp3);
    }
  }

function setup() {
  createCanvas(1920, 1080);
}

function draw() {
  background(255, 204, 0);
  image(img1, 0, 0);
  image(img2, 450, 300);
  image(img3, 1500, 100);
  image(img4, 0, 300);
  image(img5, 450, 0);
  image(img6, 1500, 1500);
}
