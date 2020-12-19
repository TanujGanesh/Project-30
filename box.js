class Box {
    constructor(x,y,w,h,r,g,b){
        this.w=w;
        this.h=h;
        this.r=r;
        this.g=g;
        this.b=b;
        var opt={
            isStatic:false,
        }
        this.body=Bodies.rectangle(x,y,this.w,this.h,opt);
        this.Visibility=255;
        World.add(world,this.body);
    }
    show(){
        
        if(this.body.speed<3){
            var pos=this.body.position;
            var angle=this.body.angle;
            push();
            translate(pos.x,pos.y);
            fill(this.r,this.g,this.b);
            rotate(angle);
            rectMode(CENTER);
            rect(0,0,this.w,this.h);
            pop();
        }else {
            World.remove(world,this.body);
            push();
            this.Visibility-=1;
            tint(255,this.Visibility);
            pop();
        }
    }
}