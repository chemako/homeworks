p1 = new Point(x1, y1);
p2 = new Point(x2, y2);
p3 = new Point(x3, y3);

d = p1.getDistance(p2);

t = new Triangle(p1, p2, p3);

p = t.getPerimeter();
a = t.getArea();

function Point(x, y) {
	this.x=x;
	this.y=y;
	this.getDistance = function (p) {
		return Math.sqrt(Math.pow((p.x-this.x),2)+Math.pow((p.y-this.y),2));
	}
}

function Triangle(p1, p2, p3) {
	this.a=p1.getDistance(p2);
	this.b=p2.getDistance(p3);
	this.c=p3.getDistance(p1);
	this.getPerimeter = function () {
		return (this.a+this.b+this.c);
	}
	this.getArea = function () {
		return (Math.sqrt((this.a+this.b+this.c)*(this.b+this.c-this.a)*(this.a+this.c-this.b)*(this.a+this.b-this.c))/4);
	}
}