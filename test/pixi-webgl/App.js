import Ticker from "./src/core/ticker/Ticker";


export default class App
{
    constructor()
    {
        this.initialize();
    }

    initialize()
    {
        const ticker = this.ticker = new Ticker();
        ticker.add(() => {
            this.render();
        });
        ticker.start();
    }

    render()
    {

    }
}
