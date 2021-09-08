function preload(){

}
function setup(){
    canvas=createCanvas(500,450)
    canvas.center();
    video=createCapture(VIDEO);
    video.size(500,450);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log('Model loaded!!');
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        console.log("Nose X = "+ results[0].pose.nose.x);
        console.log("Nose Y = "+ results[0].pose.nose.y);

    }

}
function draw(){
 image(video,0,0,500,450);
}
function take_snapshot(){
    save('ImageWithfilter.png');
}