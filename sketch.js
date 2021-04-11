const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var hour;
var bg ;
var display,min;
var time;

function preload() {
    // create getBackgroundImg( ) here
    getTime();
}

function setup(){
    var canvas = createCanvas(833,625);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    if(backgroundImg)
    background(backgroundImg);
    noStroke();
    textSize(20);
    fill ("black");
    //text("time :"+hour +time , width - 300,50);
    text("time ="+display +min +time , width - 200,50);
    // add condition to check if any background image is there to add

   
    if(display>=12){
        display = display-12
    }
    Engine.update(engine);

    // write code to display time in correct format here
    

}

async function getTime(){
    var response =  await fetch ("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responsetipe = await response.json();
    var datetime = responsetipe.datetime
     hour = datetime.slice(11,13);
     display = datetime.slice(11,13);
     min = datetime.slice(13,16);
    console.log(hour);
    if (hour>=23-00 && hour<=04-00){
        bg = "sunset12.png"
        

    }
    else if  (hour>=21 && hour<=23){
        bg = "sunset11.png"
    
    }
    else if  (hour>=04 && hour<=06){
        bg = "sunrise1.png"
    
    }
    else if  (hour>=06 && hour<=08){
        bg = "sunrise2.png"
    
    }
    else if  (hour>=08 && hour<=10){
        bg = "sunrise3.png"
    
    }
    else if  (hour>=10 && hour<=12){
        bg = "sunrise4.png"
    
    }
    else if  (hour>=12 && hour<=14){
        bg = "sunrise5.png"
    
    }
    else if  (hour>=14 && hour<=16){
        bg = "sunrise6.png"
    
    }
    else if  (hour>=16 && hour<=18 ){
        bg = "sunset7.png"
    
    }
    else if  (hour>=18 && hour<=19){
        bg = "sunset8.png"
    
    }
    else if  (hour>=19 && hour<=20){
        bg = "sunset9.png"
    
    }
    else{
        bg = "sunset10.png"
    }

    if(hour>=12 && hour<0){
        time = "am"

    }
    else{
        time = "pm"
    }
    backgroundImg = loadImage(bg);
}
