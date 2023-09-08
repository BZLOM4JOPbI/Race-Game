class BackgroundRoad {

    constructor (canvasContext: CanvasRenderingContext2D, canvasWidth: number, canvasHeight: number) {
        if (!canvasContext) throw new Error('Canvas context dont passed')
        if (!canvasHeight || !canvasWidth) throw new Error('Canvas size dont passed')

        this.#ctx = canvasContext;
        this.#backgroundWidth = canvasWidth;
        this.#backgroundHeight = canvasHeight;
    }

    #ctx: CanvasRenderingContext2D;

    #backgroundColor = "rgb(53 54 58)";
    #backgroundWidth: number;
    #backgroundHeight: number;

    drawBackground() {
        this.#ctx.fillStyle = this.#backgroundColor;
        this.#ctx.fillRect(0, 0, this.#backgroundWidth, this.#backgroundHeight);
    }

    // removeBackgroundRect() {
    //     this.#ctx.clearRect(0, 0, this.#backgroundWidth, this.#backgroundHeight);
    // }
}

export default BackgroundRoad