class Rubber{
	constructor(x,y,r)
	{
	var rubb = {
		'density':2,
		'friction': 0.6,
		'restitution':0.9
	}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, rubb)
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
            ellipse(x, y, w, h, r);
			pop()
	}

}