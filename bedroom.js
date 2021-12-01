img ="";
status ="";
function preload()
{ 
    img = loadImage("bed.jpg");
}

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd',modelLoded);
    document.getElementById("status").innerHTML = "status_detecting_objects"
}
function modelLoded()
{
    console.log("modelLoaded");
    status = true;
    objectDetector.detect(img, gotResult);
}
function draw()
{
    image(img, 0, 0, 640, 420);
    fill("#660000");
    text("bed", 45, 75);
    noFill();
    stroke("#660000");
    rect(30, 60, 450, 350);
}
function gotResult(error, results)
{
    if(error)
    {
        console.log(error);
    } 
    console.log(results);
}
