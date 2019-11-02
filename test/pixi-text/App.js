export default class App {
  constructor() {
    console.log('pixi-text');
    this.initialize();
  }

  initialize() {
    this.test();
  }

  test() {
    // https://pixijs.io/pixi-text-style/#%7B%22style%22%3A%7B%22fill%22%3A%22%232db400%22%2C%22fontFamily%22%3A%22Helvetica%22%2C%22fontSize%22%3A25%2C%22fontStyle%22%3A%22italic%22%2C%22fontVariant%22%3A%22small-caps%22%2C%22fontWeight%22%3A%22bold%22%2C%22letterSpacing%22%3A30%2C%22lineJoin%22%3A%22round%22%2C%22stroke%22%3A%22%231eb7d9%22%2C%22strokeThickness%22%3A2%7D%2C%22background%22%3A%22%23128e15%22%7D
    // const text = new PIXI.Text('Hello World', style);
    var div = document.getElementById('root');
    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');

    console.log('div', div);
    console.log('context', context);
    var style = {
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

    // fillText(text, x, y, [, maxWidth])
    // strokeText(text, x, y [, maxWidth])
  }
}
