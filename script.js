const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d'); //context object
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Symbol {
    constructor(x, y, fontSize, canvasHeight) {
        this.characters = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        this.x = x;
        this.y = y;
        this.fontSize = fontSize;
        this.text = '';
        this.canvasHeight = canvasHeight
    }
    draw(context) {
        this.text = this.characters[Math.floor(this.characters.length * Math.random())];
        context.fillStyle = '#0a0ff0a';
        context.fillText(this.text, this.x * this.fontSize, this.y * this.fontSize);
        if (this.y * this.fontSize > this.canvasHeight) {
            this.y = 0;
        } else {
            this.y++;
        }
    }
}

class Effect {
    constructor(canvasWidth, canvasHeight) {
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.fontSize = 25;
        this.columns = this.canvasWidth / this.fontSize;
        this.symbols = [];
    }

    #initialize() { //private method

        for (let i = 0; i < this.columns; i++) {
            this.symbols.push(new Symbbol());
        }
    }
}

function animate() {

}