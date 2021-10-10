function setup(){
    video = createCapture(VIDEO);
    video.size(450,400);
    canvas=createCanvas(450,450);
    canvas.position(560,120);
    poseNet= ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw(){
}
function modelLoaded(){
console.log('PoseNet is Initialized!');
}
function gotPoses(results){
    if(results.length>0){

    }
}