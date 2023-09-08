class BackgroundLine {

    constructor (canvasContext: CanvasRenderingContext2D, lineWidth: number, lineHeight: number) {
        if (!canvasContext) throw new Error('Canvas context dont passed')
        if (!lineWidth || !lineHeight) throw new Error('Line size dont passed')

        this.#ctx = canvasContext;
        this.#lineWidth = lineWidth;
        this.#lineHeight = lineHeight;
    }

    #ctx: CanvasRenderingContext2D;

    #lineColor = "rgb(245 185 66)";
    #lineWidth: number;
    #lineHeight: number;

    getLineHeight() {
        return this.#lineHeight
    }

    getLineWidth() {
        return this.#lineWidth
    }

    drawLine(posX: number, posY: number) {
        if (!posX || !posY) throw new Error('Line coords dont passed')

        this.#ctx.fillStyle = this.#lineColor;
        this.#ctx.fillRect(posX, posY, this.#lineWidth, this.#lineHeight);
    }


}

export default BackgroundLine