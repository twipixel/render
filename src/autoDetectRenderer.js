// import * as utils from './utils';
import CanvasRenderer from './../src/core/renderers/canvas/CanvasRenderer';
// import WebGLRenderer from './renderers/webgl/WebGLRenderer';


export function autoDetectRenderer(options, arg1, arg2, arg3)
{
    /*let forceCanvas = options && options.forceCanvas;

    if (arg3 !== undefined)
    {
        forceCanvas = arg3;
    }

    if (!forceCanvas && utils.isWebGLSupported())
    {
        return new WebGLRenderer(options, arg1, arg2);
    }*/

    return new CanvasRenderer(options, arg1, arg2);
}
