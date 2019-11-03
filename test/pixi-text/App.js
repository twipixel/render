export default class App {
  constructor() {
    console.log('pixi-text');
    this.initialize();
  }

  initialize() {
    this.test();
  }

  test() {
    console.log('PIXI', PIXI);
    const app = new PIXI.Application({ backgroundColor: 0x1099bb });
    document.body.appendChild(app.view);

    const basicText = new PIXI.Text('Basic text in pixi');
    basicText.x = 50;
    basicText.y = 100;

    app.stage.addChild(basicText);

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

    const richText = new PIXI.Text('Rich text with a lot of options and across multiple lines', style);
    window['richText'] = richText;
    richText.x = 50;
    richText.y = 250;

    app.stage.addChild(richText);

    console.log('style', richText._style);
    // italic normal bold 36px "Arial"
    console.log('style.toFontString()', richText._style.toFontString());

    // 픽시에서 fontProperties.fontSize 를 높이로 사용
    const fontProperties = PIXI.TextMetrics.measureFont(richText._style.toFontString());
    console.log('fontProperties', fontProperties);

    // 폰트의 넓이와 높이 구하는 방법 확인
    // https://pixijs.io/pixi-text-style/#%7B%22style%22%3A%7B%22fill%22%3A%22%232db400%22%2C%22fontFamily%22%3A%22Helvetica%22%2C%22fontSize%22%3A25%2C%22fontStyle%22%3A%22italic%22%2C%22fontVariant%22%3A%22small-caps%22%2C%22fontWeight%22%3A%22bold%22%2C%22letterSpacing%22%3A30%2C%22lineJoin%22%3A%22round%22%2C%22stroke%22%3A%22%231eb7d9%22%2C%22strokeThickness%22%3A2%7D%2C%22background%22%3A%22%23128e15%22%7D
    // const text = new PIXI.Text('Hello World', style);
    var div = document.getElementById('root');
    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');
    document.body.appendChild(canvas);

    console.log('div', div);
    console.log('context', context);
    var style2 = {
      fill: '#2db400',
      fontFamily: 'Helvetica',
      fontSize: 25,
      fontStyle: 'italic',
      fontVariant: 'small-caps',
      fontWeight: 'bold',
      lineJoin: 'round',
      storke: '#1eb7d9',
      strokeThickness: 2,
      letterSpacing: 30,
      background: '#128e15'
    };

    canvas.width = 500;
    canvas.height = 50;

    context.font = '36px Helvetica';
    // context.strokeStyle = style2.stroke;
    context.strokeStyle = '#ff3300';
    context.lineWidth = style2.strokeThickness;
    context.textBaseline = 'alphabetic';
    context.fillStyle = style2.background;
    // context.strokeText('AAAAAAAAAAA', 0, 50);
    context.fillText('AAAAAAAAAAA', 0, 50);
  }
}
