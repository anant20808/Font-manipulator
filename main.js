
rightwristX=0;
rightwristY=0;
function preload(){

}
function setup(){
canvas=createCanvas(550,550);
video=createCapture(VIDEO);
video.size(550,550);
canvas.position(560,160);


posenet= ml5.poseNet(video,modelloaded);
posenet.on('pose',gotresult);
}

function modelloaded(){
console.log("model is loaded");
}
function draw(){
background("#AAD7EF")
fill("#ff0000")
stroke("#000000")
textSize(difference);
text("Peter",50,400)

}
difference = 0;
function gotresult(result){
    if(result.length>0){
console.log(result)
rightwristX = result[0].pose.rightWrist.x;
leftwristX = result[0].pose.leftWrist.x;
difference = floor(leftwristX - rightwristX);

console.log("Rightwrist x = "+rightwristX);
console.log("leftwrist x = "+leftwristX);
document.getElementById("widthofshape").innerHTML=difference+" pixel";
document.getElementById("Heading").value="left axis+ right axis"

    }
}
