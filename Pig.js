class Pig {
    constructor(x,y){
       var option={
           restitution:0.8,
           friction:0.3,
           density:1
       } 
        this.body=Bodies.rectangle(x,y,50,50,option);
        this.width=50;
        this.height=50;
       
        World.add(world,this.body);

    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        
        rectMode(CENTER);
        fill("red");
        rect(0,0,this.width,this.height);
        pop();
    }
}
