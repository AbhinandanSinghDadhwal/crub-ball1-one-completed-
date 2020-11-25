class Box {
  constructor(x, y, width, height) {
    var options = {
        isStatic:true
    }
    this.bottombody = Bodies.rectangle(x, y, width, 20, options);
    this.leftbody = Bodies.rectangle(x-width/2,y-height/2,20,height,options);
    this.rightbody = Bodies.rectangle(x+width/2,y-height/2,20,height,options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.bottombody);
    World.add(world, this.leftbody);
    World.add(world, this.rightbody);
  }
  display(){
    rectMode(CENTER);
    fill(0);
    strokeWeight(7);
    stroke("red");

    rect(this.bottombody.position.x,this.bottombody.position.y, this.width,20);
    rect(this.leftbody.position.x,this.leftbody.position.y, 20,this.height);
    rect(this.rightbody.position.x,this.rightbody.position.y, 20,this.height);
  }
};
