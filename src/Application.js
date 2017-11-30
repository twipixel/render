import { autoDetectRenderer } from './../src/core/autoDetectRenderer';
import Container from './../src/core/display/Container';
import { shared, Ticker } from './../src/core/ticker';
import settings from './../src/core/settings';
import { UPDATE_PRIORITY } from './const';


export default class Application
{
    // new PIXI.Application(Size.windowWidth, Size.windowHeight, {forceCanvas: true, backgroundColor: 0xFFFFFF, antialias: true})

    constructor(options, arg2, arg3, arg4, arg5)
    {
        console.log(`Application(${options}, ${arg2}, ${arg3}, ${arg4}, ${arg5})`);

        // Support for constructor(width, height, options, noWebGL, useSharedTicker)
        if (typeof options === 'number')
        {
            options = Object.assign({
                width: options,
                height: arg2 || settings.RENDER_OPTIONS.height,
                forceCanvas: !!arg4,
                sharedTicker: !!arg5,
            }, arg3);
        }

        /**
         * The default options, so we mixin functionality later.
         * @member {object}
         * @protected
         */
        this._options = options = Object.assign({
            autoStart: true,
            sharedTicker: false,
            forceCanvas: false,
            sharedLoader: false,
        }, options);

        /**
         * WebGL renderer if available, otherwise CanvasRenderer
         * @member {PIXI.WebGLRenderer|PIXI.CanvasRenderer}
         */
        this.renderer = autoDetectRenderer(options);

        /**
         * The root display container that's rendered.
         * @member {PIXI.Container}
         */
        this.stage = new Container();

        /**
         * Internal reference to the ticker
         * @member {PIXI.ticker.Ticker}
         * @private
         */
        this._ticker = null;

        /**
         * Ticker for doing render updates.
         * @member {PIXI.ticker.Ticker}
         * @default PIXI.ticker.shared
         */
        this.ticker = options.sharedTicker ? shared : new Ticker();

        // Start the rendering
        if (options.autoStart)
        {
            this.start();
        }
    }

    set ticker(ticker) // eslint-disable-line require-jsdoc
    {
        if (this._ticker)
        {
            this._ticker.remove(this.render, this);
        }
        this._ticker = ticker;
        if (ticker)
        {
            ticker.add(this.render, this, UPDATE_PRIORITY.LOW);
        }
    }
    get ticker() // eslint-disable-line require-jsdoc
    {
        return this._ticker;
    }

    /**
     * Render the current stage.
     */
    render()
    {
        this.renderer.render(this.stage);
    }

    /**
     * Convenience method for stopping the render.
     */
    stop()
    {
        this._ticker.stop();
    }

    /**
     * Convenience method for starting the render.
     */
    start()
    {
        this._ticker.start();
    }

    /**
     * Reference to the renderer's canvas element.
     * @member {HTMLCanvasElement}
     * @readonly
     */
    get view()
    {
        return this.renderer.view;
    }

    /**
     * Reference to the renderer's screen rectangle. Its safe to use as filterArea or hitArea for whole screen
     * @member {PIXI.Rectangle}
     * @readonly
     */
    get screen()
    {
        return this.renderer.screen;
    }

    /**
     * Destroy and don't use after this.
     * @param {Boolean} [removeView=false] Automatically remove canvas from DOM.
     */
    destroy(removeView)
    {
        const oldTicker = this._ticker;

        this.ticker = null;

        oldTicker.destroy();

        this.stage.destroy();
        this.stage = null;

        this.renderer.destroy(removeView);
        this.renderer = null;

        this._options = null;
    }
}
