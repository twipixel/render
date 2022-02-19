const EventEmitter = require('eventemitter3');

export default class App
{
    constructor()
    {
        console.log('pixi-event');
        this.initialize();
    }

    initialize()
    {
        this.test();
    }

    test()
    {
        const event = new EventEmitter();

        const handler0 = this.handler0.bind(this);
        const handler1 = this.handler1.bind(this);
        const handler2 = this.handler2.bind(this);

        event.on('test', handler0);
        event.on('test', handler1);
        event.on('test', handler2);

        // event.off('test', handler2);
        // event.off('test', handler0);
        // event.off('test', handler1);

        // event.removeAllListeners('test');

        event.emit('test');
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
