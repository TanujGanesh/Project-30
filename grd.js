class Grd {
    constructor(x,y,w,h,r,g,b){
        this.w=w;
        this.h=h;
        this.r=r;
        this.g=g;
        this.b=b;
        var opt={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,this.w,this.h,opt);
        World.add(world,this.body);
    }
    show(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        fill(this.r,this.g,this.b);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.w,this.h);
        pop();
    }
   
}
