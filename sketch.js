const Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;
    var engine,world;
    
  var rains=[];
  var a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,
a11,a12,a13,a14,a15,a16,a17,a18,a19,a20,
a21,a22,a23,a24,a25,a26,a27,a28,a29,a30,
a31,a32;
    function setup(){
      createCanvas(400,400);
      // create an engine
      engine = Engine.create();
      world=engine.world;
      a1 = new Raindrop("blue");
    a2= new Raindrop("green");
    a3 = new Raindrop("black");
    a4= new Raindrop("blue");
    a5 = new Raindrop("blue");
    a6= new Raindrop("blue");
    a7 = new Raindrop"blue"();
    a8= new Raindrop("green");
    a9 = new Raindrop("green");
    a10= new Raindrop("green");
    a11 = new Raindrop("green");
    a12= new Raindrop("yellow");
    a13 = new Raindrop("yellow");
    a14= new Raindrop("orange");
    a15 = new Raindrop("orange");
    a16= new Raindrop("orange");
    a17 = new Raindrop("orange");
    a18= new Raindrop("orange");
    a19 = new Raindrop("orange");
    a20= new Raindrop("blue");
    a21= new Raindrop("blue");
    a22= new Raindrop("blue");
    a23 = new Raindrop("blue");
    a24= new Raindrop("blue");
    a25 = new Raindrop("blue");
    a26= new Raindrop("orange");
    a27 = new Raindrop("orange");
    a28= new Raindrop("orange");
    a29= new Raindrop("orange");
    a30= new Raindrop("blue");
    a31 = new Raindrop("green");
    a32= new Raindrop("green");
    
      
      console.log(random(100,400))
     
      
     
    }
    /* function mouseDragged(){
      rains.push(new Rain(mouseX,mouseY,"blue"));
    } */
    function draw(){
      background("red")
      Engine.update(engine);
      

  a1.display();
  a2.display();
  a3.display();
  a4.display();
  a5.display();
  a6.display();
  a7.display();
  a8.display();
  a9.display();
  a10.display();
  a11.display();
  a12.display();
  a13.display();
  a14.display();
  a15.display();
  a16.display();
  a17.display();
  a18.display();
  a19.display();
  a20.display();
  a21.display();
  a22.display();
  a23.display();
  a24.display();
  a25.display();
  a26.display();
  a27.display();
  a28.display();
  a29.display();
  a30.display();
  a31.display();
  a32.display();

      

    }
    
