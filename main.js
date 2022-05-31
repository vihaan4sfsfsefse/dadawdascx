function setup() {
canvas=createCanvas(640,420);
canvas.center()

objectDetector=ml5.objectDetector('cocossd' ,modelLoaded);
document.getElementById("status").innerHTML="Status : Detecting Objects ";
} 
img="";
Status="";
object=[];
function preload() {
img=loadImage("dog_cat.jpg");
}

function draw() {
    image(img,0,0,640,420);
   
    if(Status !="" )
    {
       for (i = 0; i < object.length; i++) {
           document.getElementById("status").innerHTML = "Status = Object Detected";

           fill("#ff0000");
           percent = floor(object[i].confidence * 100);
           text(object[i].label + "  " + percent + "%" , object[i].x + 15  , object[i].y + 15);
           noFill();
           stroke("#ff0000");
           rect(object[i].x , object[i].y , object[i].width , object[i].height );
       }
    }
}

function modelLoaded() {
    console.log("Model is loaded");
    Status=true;
    objectDetector.detect(img,gotResult);
}

function gotResult(error,result) {
    if (error) {
        console.log(error);
    }
console.log(result);
object = result;    
}