function setup()
{
canvas = createCanvas(500,500);
canvas.center();
video = createCapture(VIDEO);
video.size(480,540);
video.hide();
poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}


function preload()
{
clown_nose = loadImage('lips.png');


}

function modelLoaded()
{
console.log('poseNet is working!');


}


function draw()
{
image(video,0,0,500,500);
image(clown_nose,noseX-20,noseY-15,60,60);
}


function snapshot()
{
save('lips.png');
}

function gotPoses(results)
{
if(results.length >0)
{
console.log(results);
noseX = results[0].pose.nose.x;
noseY = results[0].pose.nose.y;
console.log("nose x = "+ results[0].pose.nose.x);
console.log("nose y = "+ results[0].pose.nose.y);
}
}

noseX = 0;
noseY = 0;