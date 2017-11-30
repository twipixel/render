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
        this.stage.addChild(g);


        g.beginFill(0xff3300);
        g.drawRect(0, 0, 100, 100);
        g.endFill();


        /*this.app = new PIXI.Application(Size.windowWidth, Size.windowHeight, {forceCanvas: true, backgroundColor: 0xFFFFFF, antialias: true});
        document.body.appendChild(this.app.view);

        this.canvas = this.app.renderer.view;
        this.renderer = this.app.renderer;
        this.stage = this.app.stage;

        Mouse.renderer = this.renderer;
        Mouse.mouse = (Config.desktop) ? Mouse.DESKTOP_MOUSE : Mouse.MOBILE_MOUSE;

        // 미니온 보여지는 레이어
        this.minionLayer = new PIXI.Container();
        // 잔상이 보여지는 레이어
        this.afterimageLayer = new PIXI.Container();

        this.stage.addChild(this.afterimageLayer);
        this.stage.addChild(this.minionLayer);

        this.initialize();
        this.initializeGUI();
        this.render();*/
    }


    initialize()
    {
        // this.render = this.render.bind(this);
    }


    resize()
    {

    }
}

