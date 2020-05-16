
    begintimer();

var score=0;
document.getElementById("score").innerHTML=score;

var timepassed=0;
function begintimer()
{
  document.getElementById("timer").innerHTML=timepassed;
  timepassed++;
}
var timeri= setInterval(begintimer,1000);

    var canvas= document.getElementById("canvas");
    var ctx=canvas.getContext('2d');    
    
    var ballcolor;
    var ballradius=10;
    var x = canvas.width/2;
    var y = 500;
    var dx=0;
    var dy= 10;
    var arr=[];
    arr=["blue","red","yellow","green"];
     
        var centreX = 250; var centreY = 400;  
        var wheelradius = 20;  
        var rotateAngle = 90 * Math.PI / 180;  
        var startAngle = 15 * Math.PI / 180;  
        var endAngle = 105 * Math.PI / 180;  
        var colours = [ "red", "green","blue","yellow"]; 
 
         var rotateAnglewheel = 90 * Math.PI / 180;  
        var startAnglewheel =0 * Math.PI / 180;  
        var endAnglewheel = 90 * Math.PI / 180;  


        var centreYo=250;
        var obsradius=60; 


         var cpointer=0;
            

   
        var bottomcolor;  
        var topcolor;

createcoords1();

function balli()
{

 ctx.clearRect(0,0,1000,1000); 

    ctx.beginPath();
    ctx.fillStyle="red";
    ctx.arc(x,y,ballradius,0,Math.PI*2,true);
    ctx.fillStyle=ballcolor;
    ctx.fill();


    if(y+ballradius >=0  && y+ballradius < canvas.height)
    {
    y+=dy;

} 



drawwheel();
drawWheelobs();
drawcircleobstacle();

drawpowerup();
}



function jump1()
{
    if(y >= canvas.height/2)
    {
    y=y-30;
    var sound = new Audio("ping.mp3");

sound.play(); 
}
}


function checkcollision()
{
    
    
    for (var i = 0; i <wheels.length; i++) {
    

     
    if(y-ballradius - 10 <  wheels[i].y+ wheels[i].r && y-ballradius > wheels[i].y- wheels[i].r - 10)
    {
         console.log(" touched wheel");
     
     if(ballcolor=="white")
     {
         ballcolor=="white";
     }

     else
     {
     var r = Math.floor(Math.random() * 4 ) ;
        ballcolor=arr[r];
    }
       //wheels.splice(0,1);

    }
    }
   
}

var powerupvelocity=30;
function drawpowerup()
{
     powerups.forEach(powerup => {
    if(canvas.getContext){
ctx.beginPath();
ctx.arc(centreX,powerup.y,powerup.r,0,Math.PI*2,true);
ctx.fillStyle = "#FFCC00";
ctx.fill();


 powerup.y=powerup.y+powerupvelocity;
}
});

    

     checkcollisionpowerup();
}


function checkcollisionpowerup()
{
    for (var i = 0; i < powerups.length; i++) {
          if(y-ballradius  <  powerups[i].y+powerups[i].r+10  && y-ballradius > powerups[i].y -powerups[i].r- 10)
    {
         console.log(" touched powerup");
     
        ballcolor=" white";

    }
       
    }
}



function checkcollisionobs()
{

  for (var i = 0; i < obstacles.length; i++) 
  {
   
   // if(y-ballradius< obstacles[i].y+obstacles[i].r && y-ballradius>obstacles[i].y)
    
    if(y-ballradius < obstacles[i].y+obstacles[i].r + 20 && y-ballradius > obstacles[i].y+obstacles[i].r - 20)
    {
        
        if(ballcolor==bottomcolor|| ballcolor=="white")
        {
            console.log("crct 1");
        
            }
    else
    {
        console.log("wrong 1");
    }
}

   
    //if(y-ballradius> obstacles[i].y-obstacles[i].r && y-ballradius < obstacles[i].y)
    if(y-ballradius > obstacles[i].y-obstacles[i].r-20 && y-ballradius < obstacles[i].y-obstacles[i].r +20)
    {
        if(ballcolor==topcolor)
        {
            console.log("crct 2");
              score++;
              document.getElementById("score").innerHTML=score;
                   }

           else if(ballcolor=="white")
            {
              score++;
              document.getElementById("score").innerHTML=score;
            }
                 

        else{
            console.log("wrong 2");
        }
    }
    
  }



}

function checkcollisionobs2()
{

    for (var i = 0; i < obstacles2.length; i++) {

       // if(y-ballradius> obstacles2[i].y+obstacles2[i].r1+20 && y-ballradius <  obstacles2[i].y+obstacles2[i].r1-20)
        if(y-ballradius< obstacles2[i].y+obstacles2[i].r1&& y-ballradius >  obstacles2[i].y-obstacles2[i].r1)
        {
             console.log("called");
            if(ballcolor==obstacle2color)
            {
                console.log("crct");
                score++;
                document.getElementById("score").innerHTML=score;
            }

            else if(ballcolor=="white")
            {
              score++;
              document.getElementById("score").innerHTML=score;
            }
            else
            {
                console.log("wrong");
            }
        }

    }
}








function randomIntFromRange(min,max)
{

  return Math.floor(Math.random()*(max -min +1)+ min);
}




function createcoords()
{

coords=[];


for(var i=0;i<5;i++)
{

   
      var genY= -1*(randomIntFromRange(500,1000));
    
      radiuswheel=30;

if(coords.length!=0)
{

  for (var j= 0 ; j< coords.length ; j++ ) 
  {
    
  //if(finddist(xnew,circles[j].x,ynew,circles[j].y) < radi+circles[j].radius)
    if(Math.abs(genY - coords[j].y) > 2000)
  { 

     var genY= -1*(randomIntFromRange(500,1000));
    
    j=-1;

     }
    }
}

    coords.push({y:genY});

}
createobj();
}


function createcoords1()
{
    coords=[];
for (var i = 0; i <20; i++) 
{

   coords.push(-200*i);


  }
createobj();



}

function createobj()
{
wheels=[];
obstacles=[];
obstacles2=[];
powerups=[];
for (var i = 0; i < coords.length; i++) 
{   

    

     
      var k =Math.floor(Math.random() * 4 ) ;

      if(k==0)
      {
wheels.push({y:coords[i],r:15});

      }
      else if(k==1)
      {
obstacles.push({y:coords[i],r:60});
      }
      else if( k==2)
      {
        obstacles2.push({y:coords[i],r1:20,r2:40});
      }
      else if(k==3)
      {
        powerups.push({y:coords[i],r:15});
      }
      
      

}





}




var wheelvelocity=30;
function drawwheel()
{
   
    wheels.forEach(wheel => {
          if(canvas.getContext)
        {
                for (i = 0; i < 4; i++) {  

                    ctx.fillStyle = colours[i];  
                    ctx.translate(centreX, wheel.y);  
                    ctx.rotate(rotateAnglewheel);  
                    ctx.translate(-centreX, -wheel.y);  
                    ctx.beginPath();  
                    ctx.moveTo(centreX, wheel.y);  
                    ctx.lineTo(centreX + wheelradius, wheel.y);  
                    ctx.arc(centreX,wheel.y, wheel.r, startAnglewheel, endAnglewheel, false);  
                    ctx.closePath();  
                    ctx.fill();  

                } 
            
             wheel.y=wheel.y+wheelvelocity;
        }



});

  checkcollision();
}

function rep()
{
    if(flagobstacle==-1 && flagwheel==-1)
    {
       
        flagwheel=0;
        flagobstacle=0;

        createobstacles(-150);
        createwheels(-30);

    }
}


var obstaclevelocity=30;
function drawWheelobs() {
          
  obstacles.forEach(obstacle => {
            if (canvas.getContext) { 
                 
                for (i = 0; i < 4; i++) {  
                    
                    ctx.strokeStyle= colours[cpointer+i];
                    ctx.translate(centreX, obstacle.y);  
                    ctx.rotate(rotateAngle);  
                    ctx.translate(-centreX, -obstacle.y); 
                    ctx.beginPath();  
                    ctx.lineWidth=3;
                    ctx.arc(centreX, obstacle.y, obstacle.r, startAngle, endAngle, false);  
                    ctx.stroke(); 

                }

               if(colours.length<8)
                {
                
                colours.push(colours[cpointer]);
                
                }

if(cpointer<3)
{
                cpointer++;
            } 
            else
            {
                cpointer=0;
            }

       obstacle.y=obstacle.y+obstaclevelocity;
        } 

        bottomcolor=colours[cpointer+2];
        topcolor=colours[cpointer];


});
  checkcollisionobs();
    
    }


var colours1 = [ "red", "green","blue","yellow"];  

        var colours2=[ "blue","yellow","red","green"];
   
   

   var cpointer1=0;

   var cpointer2=0;
    var centreX1=220;
    var centreX2=300;
     var radiusi=30;
     var obstacle2velocity=30;


     var rotateAngle2 = -1*90* Math.PI / 180;  
        var startAngle2 = 0 * Math.PI / 180;  
        var endAngle2 = -1*90 * Math.PI / 180; 


var obstacle2color;
 function drawcircleobstacle() {  



  obstacles2.forEach(obstacle2 => {
            var canvas = document.getElementById("canvas");  
            if (canvas.getContext) {  


                var ctx = canvas.getContext("2d");               
                for (var i = 0; i <4; i++)
                 {

                     ctx.strokeStyle= colours2[cpointer2+i];
                    ctx.translate(centreX1, obstacle2.y);  
                    ctx.rotate(rotateAngle2);  
                    ctx.translate(-centreX1, -obstacle2.y);  
                    ctx.beginPath();  
                    ctx.lineWidth=3;
                    ctx.arc(centreX1, obstacle2.y,obstacle2.r1, startAngle2, endAngle2, true);  
                    ctx.stroke();
                    ctx.closePath();

                             }
                 for (i = 0; i < 4; i++) {    
                    
                    ctx.strokeStyle= colours1[cpointer1+i];
                    ctx.translate(centreX2, obstacle2.y);  
                    ctx.rotate(rotateAngle);  
                    ctx.translate(-centreX2, -obstacle2.y);  
                    ctx.beginPath();  
                    ctx.lineWidth=3;
                    ctx.arc(centreX2, obstacle2.y, obstacle2.r2, startAngle, endAngle, false);  
                    ctx.stroke();
                    ctx.closePath();
                }

            
                obstacle2color=colours2[cpointer1+2];


                if(colours1.length<8)
                {
                
                colours1.push(colours1[cpointer1]);
                
                }
               
if(cpointer1<3)
{
                cpointer1++;
            } 
            else
            {
                cpointer1=0;
            }

              if(colours2.length<8)
                {
                
                colours2.push(colours2[cpointer2]);
                
                }
                
if(cpointer2<3)
{
                cpointer2++;
            } 
            else
            {
                cpointer2=0;
            }



            //dy=dy+500;
            obstacle2.y=obstacle2.y+obstacle2velocity;
            
        }  
        });

  checkcollisionobs2();
       // drawcircle2();
    }



   var ballinterval= setInterval(balli,400);

  function stop() {
  clearInterval(ballinterval);

  clearInterval(timeri);
}



 function start() {


  ballinterval=setInterval(balli,400);

  timeri=setInterval(begintimer,1000);
} 


localStorage.setItem('score', score);

const arrscore = {
    arrscore: score,
   
  };



  const highScores = JSON.parse(localStorage.getItem("highScores")) || [];//creating an empty array
  highScores.push(arrscore);//pushing the objects in the array
  highScores.sort((a,b)=> a.arrscore - b.arrscore);
  highScores.splice(5);
  localStorage.setItem("highScores", JSON.stringify(highScores));

 
   
   