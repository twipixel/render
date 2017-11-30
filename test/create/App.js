

// 랜더러 사전 등록을 위해 import
import CanvasGraphicsRenderer from './../../src/core/graphics/canvas/CanvasGraphicsRenderer';


import Size from './../../src/utils/Size';
import Application from './../../src/Application';
import Graphics from './../../src/core/graphics/Graphics';



export default class App
{
    constructor()
    {
        this.app = new Application(Size.windowWidth, Size.windowHeight, {forceCanvas: true, backgroundColor: 0xFFFFFF, antialias: true});
        document.body.appendChild(this.app.view);

        this.stage = this.app.stage;

        const g = new Graphics();
        g.beginFill(0xff3300);
        g.drawRect(0, 0, 100, 100);
        g.endFill();
        this.stage.addChild(g);
    }


    initialize()
    {

    }


    resize()
    {

    }
}

