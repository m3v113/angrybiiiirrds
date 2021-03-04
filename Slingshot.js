class Slingshot {
    constructor(bodyA, pointB) {
     var options = {
         bodyA: bodyA,
         pointB: pointB,
         length: 10,
         stiffness: 0.04
     }
     this.sling = Constraint.create(options);
     this.pointB = pointB;
     World.add(world, this.sling);
              
 }   

     fly() {
        this.sling.bodyA = null;
    }

    display() {

        if (this.sling.bodyA !== null) {
            //this point is referring to bodyA
            var pointA = this.sling.bodyA.position;
            //this point is referring to point property
            var pointB = this.pointB;
            push();
            strokeWeight(6);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            //line(x1,y1,x2,y2);
            pop();
        }
        
        
    }

}
