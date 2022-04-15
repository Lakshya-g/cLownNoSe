noseX = 0; noseY = 0;

function preload() {
    clown_nose = loadImage(
      "https://i.postimg.cc/T2VDY1Th/kisspng-butterfly-drawing-art-clip-art-colorful-butterfly-elements-5a911f6b012ac3-938541321519460203.png"
    );
}


function setup() {
    canvas = createCanvas(300, 300);
    canvas.center()
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelloaded);
    poseNet.on('pose', gotposes);
}
    
function modelloaded() {
    console.log("Posenet Is Intialized");
}

function draw() {
    image(video, 0, 0, 300, 300)
    image(clown_nose, noseX -20, noseY -20, 50,50);
}


function take_snapshot() {
    save("ARMYBLINK~.png");
}

function gotposes(results) {
    if (results.length>0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
         noseY = results[0].pose.nose.y;
        console.log("nose x = " + results[0].pose.nose.x)
        console.log("nose y = " + results[0].pose.nose.y);
    }
}
