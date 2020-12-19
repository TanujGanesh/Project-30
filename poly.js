class Poly{
    constructor(x,y,r){
        this.r=r;
        this.image=loadImage("polygon.png");
        this.body=Bodies.circle(x,y,r);
        World.add(world,this.body);
    }
    show(){
        var pos=this.body.position;
        var ang=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(ang);
        imageMode(CENTER);
        image(this.image,0,0,50,50);
        pop();
    }
}