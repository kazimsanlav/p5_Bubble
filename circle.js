let Circles = [];
var gravity = 0.2;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    // console.log(radius);
}

function draw() {

    background(0, 30);
    for (i = Circles.length - 1; i >= 0; i--) {
        Circles[i].show();
        Circles[i].update();
        if(Circles[i].alp == 0){
            Circles.splice(0,1);
        }
    }

}

function mouseDragged() {
    Circles.push(new Circle(mouseX, mouseY,
        random(50,100), 2, 2, 0, 2, random(256), random(256), random(256)));
    print('Added new circle!')
}

class Circle {
    constructor(x, y, radius, vx, vy, count, incrmnt, r, g, b, alp) {
        this.x = x; //windowWidth/2;
        this.y = y; //windowHeight/2;
        this.radius = radius; //50;
        //this.vx = vx; //2,
        //this.vy = vy; //2;
        this.count = count; //0;
        this.incrmnt = incrmnt; // 1;
        this.r = r;
        this.g = g;
        this.b = b;
        this.alp = 256;
        this.vx = random(-1, 1);
        this.vy = random(-1, 1);

    }

    update() {
 
        if (this.x <= this.radius / 2 || this.x >= (width - this.radius / 2)) {
            this.vx = -this.vx;
        }
        if (this.y <= this.radius / 2 || this.y >= (height - this.radius / 2)) {
            this.vy = -this.vy;
        }

        this.alp--;

        if (this.count == 256)
            this.incrmnt = -1;
        else if (this.count == 0)
            this.incrmnt = 1;

        this.count = this.count + this.incrmnt;

        this.x += this.vx;
        this.y += this.vy;
        // console.log(count);
        // this.radius = this.count;

    }

    show() {
        noStroke();
        fill(this.r, this.g, this.b, this.alp);
        ellipse(this.x, this.y, this.radius, this.radius);
    }

}
