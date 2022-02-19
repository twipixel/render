import Ticker from "./vendor/pixi/src/core/ticker/Ticker";

export default class App
{
    constructor()
    {
        console.log('pixi-ticker');
        this.initialize();
    }

    initialize()
    {
        this.test();
    }

    test()
    {
        var ticker = new Ticker();
        ticker.start();
        console.log('ticker', ticker);

        const handler0 = this.handler0.bind(this);
        const handler1 = this.handler1.bind(this);
        const handler2 = this.handler2.bind(this);

        ticker.add(handler0);
        ticker.add(handler1);
        ticker.add(handler2);

    }

    handler0()
    {
        console.log('handler0');
    }

    handler1()
    {
        console.log('handler1');
    }

    handler2()
    {
        console.log('handler2');
    }

}
