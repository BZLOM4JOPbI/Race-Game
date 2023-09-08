import BackgroundRoad from "./objects/BackgroundRoad";
import BackgroundLine from "./objects/BackgroundLine";



// TODO put line quantity and viewport sizes into media query
(function() {
    const canvas = document.querySelector('#canvas') as HTMLCanvasElement;
    try {
        canvas.getContext;
    } catch (err) {
        console.log(err);
        return
    }

    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight; 

    canvas.width = viewportWidth;
    canvas.height = viewportHeight;

    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

    const backgroundRoad = new BackgroundRoad(ctx, viewportWidth, viewportHeight);

    backgroundRoad.drawBackground();

    const backgroundLine = new BackgroundLine(ctx, 20, 170);

    const lineIntervalPx = 220;

    const lineQuantity = Math.ceil(viewportHeight / (lineIntervalPx + backgroundLine.getLineHeight()));
    console.log(lineQuantity);

    let initialLinePosY = viewportHeight;
    const lineWidth = backgroundLine.getLineWidth();

    const backgroundCenter = viewportWidth / 2 - lineWidth / 2;


    const backgroundLineDrowing = setInterval(() => {
        if (initialLinePosY < 0) {
            // + backgroundLine.getLineHeight()
            clearInterval(backgroundLineDrowing)
        }
        backgroundRoad.drawBackground();

        // backgroundLine.drawLine(viewportWidth / 2 - lineWidth / 2, initialLinePosY)
        for (let line = 0; line < lineQuantity; line++) {
            backgroundLine.drawLine(backgroundCenter, initialLinePosY - ((backgroundLine.getLineHeight() + lineIntervalPx) * line))
        }

        initialLinePosY -= 10;
    }, 40)

})()