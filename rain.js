class Raindrop{
    constructor(color){

         var options={
            restitution:1.0
         
        } 
        this.body=Bodies.rectangle(random(0,400),random(0,400),3,10);
        this.w = 3;
        this.h = 10;
       
        this.color=color;
        Matter.Body.setVelocity(this.body,{x:0 ,y:10});
        //Matter.Body.setAngularVelocity( this.body, Math.PI/2)
        World.add(world,this.body);
        

    }

    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        if(pos.y>400){
            console.log(pos.y)
            pos.y=400-pos.y;
            Matter.Body.setVelocity(this.body,{x: 0, y:10});
        }       
        rectMode(CENTER);
        fill(this.color);
        rect(pos.x,pos.y,this.w,this.h);
        
    }

}
