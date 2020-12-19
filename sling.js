class Sling{
    constructor(bodyA,x,y){
        var props={
            
            pointB:{
                x:x,
                y:y
            },
            bodyA:bodyA,
            stiffness: 0.05,
            length: 10
        }
    
        this.sling=Constraint.create(props);
        World.add(world,this.sling);

    }
    attach(body){
        this.sling.bodyA=body;
    }
    
    fly(){
        this.sling.bodyA=null;
    }
    

    display(){
        
        if(this.sling.bodyA){
            var pA=this.sling.bodyA.position;
            var pB=this.sling.pointB;
            push();
            stroke(255);
            strokeWeight(2);
            line(pA.x,pA.y,pB.x,pB.y);
            pop();
        }
    }
}