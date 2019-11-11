import getTimeLabel from './../../src/console/getTimeLabel';
import { expandedLog, stringify } from './../../src/console/expandedLog';

export default class App {
  constructor() {
    console.log('pixi-text');
    this.initialize();
  }

  initialize() {
    this.test();
  }

  test() {
    const style = new PIXI.TextStyle({
      fontFamily: 'Arial',
      fontSize: 36,
      fontStyle: 'italic',
      fontWeight: 'bold',
      fill: ['#ffffff', '#00ff99'], // gradient
      stroke: '#4a1850',
      strokeThickness: 5,
      dropShadow: true,
      dropShadowColor: '#000000',
      dropShadowBlur: 4,
      dropShadowAngle: Math.PI / 6,
      dropShadowDistance: 6,
      wordWrap: true,
      wordWrapWidth: 440,
    });

    const xShadowOffset = Math.cos(style.dropShadowAngle) * style.dropShadowDistance;
    const yShadowOffset = Math.sin(style.dropShadowAngle) * style.dropShadowDistance;

    // 적은 성능으로 폰트의 넓이와 높이 구하는 방법 확인
    // https://pixijs.io/pixi-text-style/#%7B%22style%22%3A%7B%22fill%22%3A%22%232db400%22%2C%22fontFamily%22%3A%22Helvetica%22%2C%22fontSize%22%3A25%2C%22fontStyle%22%3A%22italic%22%2C%22fontVariant%22%3A%22small-caps%22%2C%22fontWeight%22%3A%22bold%22%2C%22letterSpacing%22%3A30%2C%22lineJoin%22%3A%22round%22%2C%22stroke%22%3A%22%231eb7d9%22%2C%22strokeThickness%22%3A2%7D%2C%22background%22%3A%22%23128e15%22%7D
    // const text = new PIXI.Text('Hello World', style);
    var div = document.createElement('div');
    div.style.width = '1000px';
    div.style.border = '2px dotted #FFFFFF';
    div.style.backgroundColor = '#1099bb';
    var canvas = document.createElement('canvas');
    canvas.width = 1000;
    canvas.height = 60;
    div.appendChild(canvas);
    document.body.appendChild(div);

    var textArray = ['|MÉq', 'Rich text with a lot of options and across multiple lines'];
    var text = textArray[1];
    var context = canvas.getContext('2d');
    var gradient = context.createLinearGradient(0, 0, 0, 36);
    gradient.addColorStop(0, style.fill[0]);
    gradient.addColorStop(1, style.fill[1]);

    var font = 'italic normal bold 36px Arial';
    context.font = font;
    context.fillStyle = gradient;
    context.strokeStyle = style.stroke;
    context.lineWidth = style.strokeThickness;
    context.shadowColor = style.dropShadowColor;
    context.shadowOffsetX = xShadowOffset;
    context.shadowOffsetY = yShadowOffset;
    context.strokeText(text, 0, 36);
    context.fillText(text, 0, 36);

    const app = new PIXI.Application({ width: 800, height: 300, backgroundColor: 0x1099bb });
    document.body.appendChild(app.view);

    const basicText = new PIXI.Text('Basic text in pixi');
    basicText.x = 0;
    basicText.y = 50;

    app.stage.addChild(basicText);

    const richText = new PIXI.Text('Rich text with a lot of options and across multiple lines', style);
    window['richText'] = richText;
    richText.x = 0;
    richText.y = 100;

    app.stage.addChild(richText);

    console.log('style', richText._style);
    // italic normal bold 36px "Arial"
    console.log('style.toFontString()', richText._style.toFontString());

    // 픽시에서 fontProperties.fontSize 를 높이로 사용
    const fontProperties = PIXI.TextMetrics.measureFont(richText._style.toFontString());
    console.log('fontProperties', fontProperties);

    // 폰트 넓이 / 높이 테스트
    var div2 = document.createElement('div');

    console.time(getTimeLabel('캔버스 생성'));
    var canvas2 = document.createElement('canvas');
    div2.appendChild(canvas2);
    document.body.appendChild(div2);
    var context2 = canvas2.getContext('2d');
    console.timeEnd(getTimeLabel('캔버스 생성'));

    console.time(getTimeLabel('width / height 측정'));
    context2.font = font;
    const width = Math.ceil(context.measureText('|MÉq').width);
    let baseline = Math.ceil(context.measureText('M').width);
    const height = 2 * baseline;
    baseline = baseline * 1.4 | 0;
    canvas2.width = width;
    canvas2.height = height;

    div2.style.width = canvas2.width +'px';
    div2.style.height = canvas2.height +'px';
    div2.style.backgroundColor = '#1099bb';

    context2.fillStyle = '#f00';
    context2.fillRect(0, 0, width, height);

    context2.font = font;

    context2.textBaseline = 'alphabetic';
    context2.fillStyle = '#000';
    context2.fillText('|MÉq', 0, baseline);

    // TextMetrics.measureFont code
    const imagedata = context2.getImageData(0, 0, width, height);
    const data = imagedata.data;
    const pixels = data.length;
    const line = width * 4;

    let i;
    let idx = 0;
    let stop = false;
    const properties = {};

    console.log('baseline', baseline);
    // ascent. scan from top to bottom until we find a non red pixel
    for (i = 0; i < baseline; ++i)
    {
      for (let j = 0; j < line; j += 4)
      {
        if (data[idx + j] !== 255)
        {
          this.setWhite(data, idx + j);
          stop = true;
          break;
        }
      }
      if (!stop)
      {
        this.setBlue(data, idx);
        idx += line;
      }
      else
      {
        break;
      }
    }

    properties.ascent = baseline - i;

    idx = pixels - line;
    stop = false;

    // descent. scan from bottom to top until we find a non red pixel
    for (i = height; i > baseline; --i)
    {
      for (let j = 0; j < line; j += 4)
      {
        if (data[idx + j] !== 255)
        {
          this.setWhite(data, idx + j);
          stop = true;
          break;
        }
      }

      if (!stop)
      {
        this.setBlue(data, idx);
        idx -= line;
      }
      else
      {
        break;
      }
    }

    properties.descent = i - baseline;
    properties.fontSize = properties.ascent + properties.descent;
    console.timeEnd(getTimeLabel('width / height 측정'));
    console.log('ascent', properties.ascent);
    console.log('descent', properties.descent);
    console.log('fontSize', properties.fontSize);
    context2.putImageData(imagedata, 0, 0);
  }

  setBlue(data, index) {
    data[index] = 0; // red
    data[index + 1] = 0; // green
    data[index + 2] = 255; // blue
  }

  setWhite(data, index) {
    for (let i = index; i < index + 20; i += 4) {
      data[i] = 255;
      data[i + 1] = 255;
      data[i + 2] = 255;
    }
  }
}
