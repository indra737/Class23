class Log{
    constructor(x, y,height,angle) {
        var options = {
            'restitution':0.9,
            'friction':0.3,
            'density': 0.5
            
        }
        this.body = Bodies.rectangle(x, y, 20, height, options);
        this.width =20;
        this.height =height;
        Matter.Body.setAngle(this.body,angle);
        World.add(world, this.body);
      }
      show(){
        push()
        var pos =this.body.position;
        //pos.x=  mouseX
        //pos.y= mouseY
        var angle= this.body.angle;
        rectMode(CENTER);
        fill(255,255,0);
        translate(pos.x,pos.y)
        rotate(angle)
        rect(0, 0, this.width, this.height);
        pop()
      }
}