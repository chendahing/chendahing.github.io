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
  //what happens when I click?
  if (sound.isPlaying()) {
    sound.stop();
  }
  else {
    sound.play();
    }
  }

function setup() {
  createCanvas(1920, 1080);
//things to establish the "sandbox" go here
}
