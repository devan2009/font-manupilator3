
difference = 10;
rightWrist = 0;
leftWrist = 0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(500, 500);

    canvas = createCanvas(800, 500);
    canvas.position(560, 80);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded()
{
    console.log('Posenet is Initialized!');
}
function draw()
{
    background('#0F97FF');
    textSize(difference);
    fill('red');
    text("devaduthan", 50, 255);

}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);

        leftWrist = results[0].pose.leftWrist.x;
        rightWrist = results[0].pose.rightWrist.x;
        difference = floor (leftWrist - rightWrist);

        console.log("leftWrist = " + leftWrist + " rightWrist = " +rightWrist+ " difference = " + difference);
    }
}
