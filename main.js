function preload(){
}

function setup(){
    canvas = createCanvas(660,520);
    canvas.position(110,250);
    video=createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,110,120,400,300);

    stroke(168,10,10);
    fill(168,10,10);

    circle(60, 60, 90);
    circle(580, 60, 90);
    circle(60, 460, 90);
    circle(580, 460, 90);


    stroke(50,168,82);
    fill(50,168,82);

    rect(105, 45, 429, 30);
    rect(105, 445, 429, 30);
    rect(40, 100, 30, 320);
    rect(570, 100, 30, 320);


}

function take_snapshot(){
    save('photo_frame.png')
}