export class GradientAnimation {
    cnv: any;
    ctx: any;
    circlesNum: number = 12;
    minRadius: number = 50;
    maxRadius: number = 200;
    speed: number = .005;

    w: number = 0;
    h: number = 0;
    circles: any[] = [];

    constructor(element?: any, circlesNum: number = 12, minRadius: number = 400, maxRadius: number = 400, speed: number = .003) {
        if(element){
            this.circlesNum = circlesNum;
            this.minRadius = minRadius;
            this.maxRadius = maxRadius;
            this.speed = speed;

            this.cnv = element;
            this.ctx = this.cnv.getContext(`2d`);
            (window.onresize = () => {
                this.setCanvasSize();
                this.createCircles();
            })();
            this.drawAnimation();
        }
    }

    setCanvasSize() {
        this.w = this.cnv.width = innerWidth * devicePixelRatio;
        this.h = this.cnv.height = innerHeight * devicePixelRatio;
        this.ctx.scale(devicePixelRatio, devicePixelRatio)
    }

    createCircles() {
        this.circles = [];
        for (let i = 0; i < this.circlesNum; ++i) {
            this.circles.push(new Circle(this.w, this.h, this.minRadius, this.maxRadius));
        }
    }

    drawCircles() {
        this.circles.forEach(circle => circle.draw(this.ctx, this.speed));
    }

    clearCanvas() {
        this.ctx.clearRect(0, 0, this.w, this.h);
    }

    drawAnimation() {
        this.clearCanvas();
        this.drawCircles();
        window.requestAnimationFrame(() => this.drawAnimation());
    }
}

class Circle {
    x: number;
    y: number;
    angle: number;
    radius: number;
    firstColor: any;
    secondColor: any;

    constructor(w: number, h: number, minR: number, maxR: number) {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.angle = Math.random() * Math.PI * 2;
        this.radius = Math.random() * (maxR - minR) + minR;
        this.firstColor = `hsla(${Math.random() * 360}, 0%, 50%, 1)`;
        this.secondColor = `hsla(${Math.random() * 360}, 0%, 50%, 0)`;
    }

    draw(ctx: any, speed: number) {
        this.angle += speed;
        const x = this.x + Math.cos(this.angle) * 200;
        const y = this.y + Math.sin(this.angle) * 200;
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, this.radius);
        gradient.addColorStop(0, this.firstColor);
        gradient.addColorStop(1, this.secondColor);

        ctx.globalCompositeOperation = `overlay`;
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, this.radius, 0, Math.PI * 2);
        ctx.fill();
    }
}
