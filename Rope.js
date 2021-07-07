class Rope {
        
    constructor(body1,body2,pointA,pointB){
      
        this.pointA=pointA;
        this.pointB=pointB;

        var offset = -(roof.position.x - pointB.x);
 
        var options={
            bodyA:body1,
            bodyB:body2,
            pointA:{x:offset,y:0},
            stiffness:1,
            length:200
        }

        this.rope = Constraint.create(options);
        World.add(world,this.rope);
    }
    display() {
        var aPos = this.rope.bodyA.position;
        var bPos = this.rope.bodyB.position;
        var offset = -(aPos.x - bPos.x);

        push ();
        strokeWeight(4);
        stroke("black");
        line (aPos.x+offset,aPos.y,bPos.x,bPos.y);
        pop ();
    
    }
}