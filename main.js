noseX = 0;
noseY = 0;
difference = 0;
leftWristX = 0;
rightWristX = 0;
textToDisplay = ""

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(540, 100);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    background('#008080')
    document.getElementById("text_size").innerHTML = "Font Size will be = " + difference + "px";
    textSize(difference);
    fill('greenyellow');
    stroke('greenyellow');
    text(textToDisplay, noseX, noseY);
}

function modelLoaded() {
    console.log('PoseNet is Initialized')
}

function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results)
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("Nose X = " + noseX + "| Nose Y = " + noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("Left Wrist X = " + leftWristX + "| Right Wrist X = " + rightWristX + "| Difference = " + difference);
    }
}

function changeText() {
    texts = document.getElementById("text_box").value;
    texts = texts
    punc = document.getElementById("text_punc").value;
    punc = punc 
    textToDisplay = texts + punc;
}

