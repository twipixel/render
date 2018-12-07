# 랜더링 흐름

### 예제

```js
var app = new PIXI.Application(800, 600, {backgroundColor : 0x1099bb});
document.body.appendChild(app.view);

// create a new Sprite from an image path
var bunny = PIXI.Sprite.fromImage('required/assets/basics/bunny.png')

// center the sprite's anchor point
bunny.anchor.set(0.5);

// move the sprite to the center of the screen
bunny.x = app.screen.width / 2;
bunny.y = app.screen.height / 2;

app.stage.addChild(bunny);

// Listen for animate update
app.ticker.add(function(delta) {
    // just for fun, let's rotate mr rabbit a little
    // delta is 1 if running at 100% performance
    // creates frame-independent transformation
    bunny.rotation += 0.1 * delta;
});

```



### 요약

> Application.render -> Renderer.render -> DisplayObject.renderCanvas -> 	DisplayObject._renderCanvas



### 1. Application

> render()

```js
const stage = new Container();
this.renderer.render(this.stage);
```



### 2. CanvasRenderer

> render(displayObject, renderTexture, clear, transform, skipUdateTranform)
>

```js
this.emit('prerender');

const cacheParent = displayObject.parent;
displayObject.parent = this._tempDisplayObjectParent;
displayObject.updateTransform();
displayObject.parent = cacheParent;

context.save();
context.setTransform(1, 0, 0, 1, 0, 0);
context.globalAlpha = 1;
this._activeBlendMode = BLEND_MODES.NORMAL;
context.globalCompositeOperation = this.blendModes[BLEND_MODES.NORMAL];

context.clearRect(0, 0, this.width, this.height);

const tempContext = this.context;

this.context = context;
displayObject.renderCanvas(this);
this.context = tempContext;

context.restore();

this.emit('postrender');
```



### 2. WebGLRenderer

> render(displayObject, renderTexture, clear, transform, skipUpdateTransform)

```js
this.emit('prerender');

// update the scene graph
const cacheParent = displayObject.parent;
displayObject.parent = this._tempDisplayObjectParent;
displayObject.updateTransform();
displayObject.parent = cacheParent;

this.bindRenderTexture(renderTexture, transform);

this.currentRenderer.start();

this._activeRenderTarget.clear();

displayObject.renderWebGL(this);

// apply transform..
this.currentRenderer.flush();

this.textureGC.update();

this.emit('postrender');
```



### 3. Container

> renderCanvas(renderer)

```js
// if not visible or the alpha is 0 then no need to render this
if (!this.visible || this.worldAlpha <= 0 || !this.renderable)
{
	return;
}

if (this._mask)
{
	renderer.maskManager.pushMask(this._mask);
}

// Graphics, Text, Sprite 등 실제 Display Class 에 구현되어 있습니다.
this._renderCanvas(renderer);
for (let i = 0, j = this.children.length; i < j; ++i)
{
	this.children[i].renderCanvas(renderer);
}

if (this._mask)
{
	renderer.maskManager.popMask(renderer);
}
```

> renderWebGL(renderer)

```js
// if the object is not visible or the alpha is 0 then no need to render this element
if (!this.visible || this.worldAlpha <= 0 || !this.renderable)
{
	return;
}

// do a quick check to see if this element has a mask or a filter.
if (this._mask || this._filters)
{
	this.renderAdvancedWebGL(renderer);
}
else
{
	this._renderWebGL(renderer);

	// simple render children!
	for (let i = 0, j = this.children.length; i < j; ++i)
	{
		this.children[i].renderWebGL(renderer);
	}
}
```



## 랜더와 랜더러 등록

### Graphics

Graphics 에서 랜더 호출은 plugin 에 등록된 랜더러의 랜더 함수를 호출합니다.

> _renderCanvas(renderer)

```js
if (this.isMask === true)
{
	return;
}

renderer.plugins.graphics.render(this);
```



### Plugin 등록

pluginTarget 에 객체별 랜더러를 등록하여 랜더하는 방식



### CanvasRenderer

CanvasRenderer 에 plugin 기능 설정

> pluginTarget.mixin(CanvasRenderer)



### pluginTarget

```js
function pluginTarget(obj) {
    obj.__plugins = {};
    obj.registerPlugin = function registerPlugin(pluginName, ctor) {
        obj.__plugins[pluginName] = ctor;
    };

    obj.prototype.initPlugins = function initPlugins() {
        this.plugins = this.plugins || {};

        for (const o in obj.__plugins) {
            this.plugins[o] = new (obj.__plugins[o])(this);
        }
    };

    obj.prototype.destroyPlugins = function destroyPlugins() {
        for (const o in this.plugins) {
            this.plugins[o].destroy();
            this.plugins[o] = null;
        }

        this.plugins = null;
    };
}

export default {
    mixin: function mixin(obj) {
        pluginTarget(obj);
    },
};
```



### GraphicsRenderer

> WebGL 에서 Graphics 를 랜더링합니다.

###### WebGLRenderer 에 plugin 등록

```js
WebGLRenderer.registerPlugin('graphics', WebGLRenderer);
```



### CanvasGraphicsRenderer

> Canvas 에서 Grahics 를 랜더링합니다. 

###### CanvasRenderer 에 plugin 등록

```js
CanvasRenderer.registerPlugin('graphics', CanvasGraphicsRenderer);
```



### CanvasGraphicsRenderer 랜더링

> render(graphics)

```js
const renderer = this.renderer;
const context = renderer.context;
const worldAlpha = graphics.worldAlpha;
const transform = graphics.transform.worldTransform;
const resolution = renderer.resolution;

// if the tint has changed, set the graphics object to dirty.
if (this._prevTint !== this.tint) {
    this.dirty = true;
}

context.setTransform(
    transform.a * resolution,
    transform.b * resolution,
    transform.c * resolution,
    transform.d * resolution,
    transform.tx * resolution,
    transform.ty * resolution
);

if (graphics.dirty) {
    this.updateGraphicsTint(graphics);
    graphics.dirty = false;
}

renderer.setBlendMode(graphics.blendMode);

for (let i = 0; i < graphics.graphicsData.length; i++) {
    const data = graphics.graphicsData[i];
    const shape = data.shape;

    const fillColor = data._fillTint;
    const lineColor = data._lineTint;

    context.lineWidth = data.lineWidth;

    if (data.type === SHAPES.POLY) {
        context.beginPath();

        this.renderPolygon(shape.points, shape.closed, context);

        for (let j = 0; j < data.holes.length; j++) {
            this.renderPolygon(data.holes[j].points, true, context);
        }

        if (data.fill) {
            context.globalAlpha = data.fillAlpha * worldAlpha;
            context.fillStyle = `#${(`00000${(fillColor | 0).toString(16)}`).substr(-6)}`;
            context.fill();
        }
        if (data.lineWidth) {
            context.globalAlpha = data.lineAlpha * worldAlpha;
            context.strokeStyle = `#${(`00000${(lineColor | 0).toString(16)}`).substr(-6)}`;
            context.stroke();
        }
    }
    else if (data.type === SHAPES.RECT) {
        if (data.fillColor || data.fillColor === 0) {
            context.globalAlpha = data.fillAlpha * worldAlpha;
            context.fillStyle = `#${(`00000${(fillColor | 0).toString(16)}`).substr(-6)}`;
            context.fillRect(shape.x, shape.y, shape.width, shape.height);
        }
        if (data.lineWidth) {
            context.globalAlpha = data.lineAlpha * worldAlpha;
            context.strokeStyle = `#${(`00000${(lineColor | 0).toString(16)}`).substr(-6)}`;
            context.strokeRect(shape.x, shape.y, shape.width, shape.height);
        }
    }
    else if (data.type === SHAPES.CIRC) {
        // TODO - need to be Undefined!
        context.beginPath();
        context.arc(shape.x, shape.y, shape.radius, 0, 2 * Math.PI);
        context.closePath();

        if (data.fill) {
            context.globalAlpha = data.fillAlpha * worldAlpha;
            context.fillStyle = `#${(`00000${(fillColor | 0).toString(16)}`).substr(-6)}`;
            context.fill();
        }
        if (data.lineWidth) {
            context.globalAlpha = data.lineAlpha * worldAlpha;
            context.strokeStyle = `#${(`00000${(lineColor | 0).toString(16)}`).substr(-6)}`;
            context.stroke();
        }
    }
    else if (data.type === SHAPES.ELIP) {
        // ellipse code taken from: http://stackoverflow.com/questions/2172798/how-to-draw-an-oval-in-html5-canvas

        const w = shape.width * 2;
        const h = shape.height * 2;

        const x = shape.x - (w / 2);
        const y = shape.y - (h / 2);

        context.beginPath();

        const kappa = 0.5522848;
        const ox = (w / 2) * kappa; // control point offset horizontal
        const oy = (h / 2) * kappa; // control point offset vertical
        const xe = x + w;           // x-end
        const ye = y + h;           // y-end
        const xm = x + (w / 2);       // x-middle
        const ym = y + (h / 2);       // y-middle

        context.moveTo(x, ym);
        context.bezierCurveTo(x, ym - oy, xm - ox, y, xm, y);
        context.bezierCurveTo(xm + ox, y, xe, ym - oy, xe, ym);
        context.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
        context.bezierCurveTo(xm - ox, ye, x, ym + oy, x, ym);

        context.closePath();

        if (data.fill) {
            context.globalAlpha = data.fillAlpha * worldAlpha;
            context.fillStyle = `#${(`00000${(fillColor | 0).toString(16)}`).substr(-6)}`;
            context.fill();
        }
        if (data.lineWidth) {
            context.globalAlpha = data.lineAlpha * worldAlpha;
            context.strokeStyle = `#${(`00000${(lineColor | 0).toString(16)}`).substr(-6)}`;
            context.stroke();
        }
    }
    else if (data.type === SHAPES.RREC) {
        const rx = shape.x;
        const ry = shape.y;
        const width = shape.width;
        const height = shape.height;
        let radius = shape.radius;

        const maxRadius = Math.min(width, height) / 2 | 0;

        radius = radius > maxRadius ? maxRadius : radius;

        context.beginPath();
        context.moveTo(rx, ry + radius);
        context.lineTo(rx, ry + height - radius);
        context.quadraticCurveTo(rx, ry + height, rx + radius, ry + height);
        context.lineTo(rx + width - radius, ry + height);
        context.quadraticCurveTo(rx + width, ry + height, rx + width, ry + height - radius);
        context.lineTo(rx + width, ry + radius);
        context.quadraticCurveTo(rx + width, ry, rx + width - radius, ry);
        context.lineTo(rx + radius, ry);
        context.quadraticCurveTo(rx, ry, rx, ry + radius);
        context.closePath();

        if (data.fillColor || data.fillColor === 0) {
            context.globalAlpha = data.fillAlpha * worldAlpha;
            context.fillStyle = `#${(`00000${(fillColor | 0).toString(16)}`).substr(-6)}`;
            context.fill();
        }

        if (data.lineWidth) {
            context.globalAlpha = data.lineAlpha * worldAlpha;
            context.strokeStyle = `#${(`00000${(lineColor | 0).toString(16)}`).substr(-6)}`;
            context.stroke();
        }
    }
}
```



### GraphicsRenderer 랜더링 (WebGL)

> render(graphics)

```js
render(graphics)
{
    const renderer = this.renderer;
    const gl = renderer.gl;

    let webGLData;
    let webGL = graphics._webGL[this.CONTEXT_UID];

    if (!webGL || graphics.dirty !== webGL.dirty) {
        this.updateGraphics(graphics);

        webGL = graphics._webGL[this.CONTEXT_UID];
    }

    // This  could be speeded up for sure!
    const shader = this.primitiveShader;

    renderer.bindShader(shader);
    renderer.state.setBlendMode(graphics.blendMode);

    for (let i = 0, n = webGL.data.length; i < n; i++) {
        webGLData = webGL.data[i];
        const shaderTemp = webGLData.shader;

        renderer.bindShader(shaderTemp);
        shaderTemp.uniforms.translationMatrix = graphics.transform.worldTransform.toArray(true);
        shaderTemp.uniforms.tint = hex2rgb(graphics.tint);
        shaderTemp.uniforms.alpha = graphics.worldAlpha;

        renderer.bindVao(webGLData.vao);

        if (webGLData.nativeLines) {
            gl.drawArrays(gl.LINES, 0, webGLData.points.length / 6);
        }
        else {
            webGLData.vao.draw(gl.TRIANGLE_STRIP, webGLData.indices.length);
        }
    }
}
```

