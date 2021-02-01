class Pig{
    constructor(x, y) {
        var options = {
            'restitution':0.9,
            'friction':0.3,
            'density': 0.5
            
        }
        this.body = Bodies.rectangle(x, y, 50, 50, options);
        this.width =50;
        this.height =50;
        
        World.add(world, this.body);
      }
      show(){
        push()
        var pos =this.body.position;
        
        var angle= this.body.angle;
        rectMode(CENTER);
        fill(0,255,0);
        translate(pos.x,pos.y)
        rotate(angle)
        rect(0, 0, this.width, this.height);
        pop()
      }
}