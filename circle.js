let Circles = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    circle1 = new Circle(windowWidth / 2, windowHeight / 2,
        50, 2, 2, 0, 1);
    circle2 = new Circle(windowWidth / 2, windowHeight / 2,
        50, -2, -2, 0, 1);
    // console.log(radius);
}

function draw() {

    background(0);
    for (i = 0; i < Circles.length; i++) {
        Circles[i].move();
    }
    
}

function mouseClicked() {
    Circles.push(new Circle(mouseX, mouseY,
        50, 2, 2, 0, 1));
    print('Added new circle!')
}

class Circle {
    constructor(xloc, yloc, radius, xdirec, ydirec, count, incrmnt) {
        this.xloc = xloc; //windowWidth/2;
        this.yloc = yloc; //windowHeight/2;
        this.radius = radius; //50;
        this.xdirec = xdirec; //2,
        this.ydirec = ydirec; //2;
        this.count = count; //0;
        this.incrmnt = incrmnt; // 1;
    }

    move() {
        if (this.count == 256)
            this.incrmnt = -1;
        else if (this.count == 0)
            this.incrmnt = 1;

        this.count = this.count + this.incrmnt;

        // console.log(count);
        // this.radius = this.count;

        if (this.xloc <= this.radius / 2 || this.xloc >= (width - this.radius / 2)) {
            this.xdirec = -this.xdirec;
        }
        if (this.yloc <= this.radius / 2 || this.yloc >= (height - this.radius / 2)) {
            this.ydirec = -this.ydirec;
        }
        this.xloc = this.xloc + this.xdirec;
        this.yloc = this.yloc + this.ydirec;

        noStroke();
        fill(this.count, this.count, this.count, 50);
        ellipse(this.xloc, this.yloc, this.radius, this.radius);
    }

}