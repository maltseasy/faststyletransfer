let style;
let video;
let isTransferring = false;
let resultImg;

function setup() {
  createCanvas(320, 240).parent('canvasContainer');

  video = createCapture(VIDEO);
  video.hide();

  // The results image from the style transfer
  resultImg = createImg('');
  resultImg.hide();

  // The button to start and stop the transfer process
  select('#startStop').mousePressed(startStop);

  // Create a new Style Transfer method with a defined style.
  // We give the video as the second argument
  style = ml5.styleTransfer('models/mathura', video, modelLoaded);
}

function draw(){
  // Switch between showing the raw camera or the style
  if (isTransferring) {
    image(resultImg, 0, 0, 320, 240);
  } else {
    image(video, 0, 0, 320, 240);
  }
}

// A function to call when the model has been loaded.
function modelLoaded() {

  select('#status').html('Model Loaded');
}
function selectmathura(){
  console.log("mathura")
  select('#startStop').html('Stop');
  isTransferring = false;
  style = ml5.styleTransfer('models/mathura', video, modelLoaded);
      select('#startStop').html('Start');

  
}
function selectrainprincess(){
  console.log("rainprincess")
  select('#startStop').html('Stop');
  isTransferring = false;
  style = ml5.styleTransfer('models/rain_princess', video, modelLoaded);
    select('#startStop').html('Start');
}
function selectscream(){
    console.log("scream")

  select('#startStop').html('Stop');
  isTransferring = false;
  style = ml5.styleTransfer('models/scream', video, modelLoaded);
    select('#startStop').html('Start');
}
function selectudnie(){
    console.log("udnie")

  select('#startStop').html('Stop');
  isTransferring = false;
  style = ml5.styleTransfer('models/udnie', video, modelLoaded);
    select('#startStop').html('Start');
}
function selectwave(){
    console.log("wave")

  select('#startStop').html('Stop');
  isTransferring = false;
  style = ml5.styleTransfer('models/wave', video, modelLoaded);
    select('#startStop').html('Start');
}
function selectwreck(){
    console.log("wreck")

  select('#startStop').html('Stop');
  isTransferring = false;
  style = ml5.styleTransfer('models/wreck', video, modelLoaded);
    select('#startStop').html('Start');
}
function selectzhang(){
    console.log("zhang")

  select('#startStop').html('Stop');
  isTransferring = false;
  style = ml5.styleTransfer('models/zhangdaqian', video, modelLoaded);
    select('#startStop').html('Start');
}

// Start and stop the transfer process
function startStop() {
  if (isTransferring) {
    select('#startStop').html('Start');
  } else {
    select('#startStop').html('Stop');
    // Make a transfer using the video
    style.transfer(gotResult); 
  }
  isTransferring = !isTransferring;
}

// When we get the results, update the result image src
function gotResult(err, img) {
  resultImg.attribute('src', img.src);
  if (isTransferring) {
    style.transfer(gotResult); 
  }
}