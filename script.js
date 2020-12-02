var can=document.getElementById("canv"),
    con=can.getContext("2d"),
    clear=function(){con.clearRect(0,0,can.width,can.height);},
    xp=120,yp=300,
    x=10,y=300,
    xb=150,yb=150;
    
    draw();
    function draw(){
      clear();
      
  con.fillRect(xp,yp,80,10);
  con.fillRect(x,y,100,10);
      
      con.beginPath();
      con.strokeStyle="blue";
      con.arc(xb,yb,10,0,Math.PI*2);
      con.lineWidth =7;
      con.stroke();
      con.closePath();
      
      yb+=3;
      if(yb+10>=yp && yb<=yp+10
      && xb+10>=xp && xb<=xp+100)yb-=3;
      
      requestAnimationFrame(draw);
    }
