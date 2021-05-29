class Block{
    constructor(x, y, width, height) {
        var options = {
           
            restitution :0.4,
            friction :1.0,
        
           
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.Visibility = 255;
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        this.Visibility = this.Visibility - 5;
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop();
        
      }
      score(){
        if(this.Visibility<0 && this.Visibility>-105){
          score++;
        }
      }
}