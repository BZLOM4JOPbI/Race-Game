class BackgroundLine {

    constructor (canvasContext: CanvasRenderingContext2D, lineWidth: number, lineHeight: number) {
        if (!canvasContext) throw new Error('Canvas context dont passed')
        if (!lineWidth || !lineHeight) throw new Error('Line size dont passed')

        this.#ctx = canvasContext;
        this.#lineWidth = lineWidth;
        this.#lineHeight = lineHeight;
    }

    #ctx: CanvasRenderingContext2D;

    #backgroundColor = "rgb(245 185 66)";
    #lineWidth: number;
    #lineHeight: number;

    drawLine() {
        this.#ctx.fillStyle = this.#backgroundColor;
        this.#ctx.fillRect(0, 0, this.#lineWidth, this.#lineHeight);
    }


}

export default BackgroundLine