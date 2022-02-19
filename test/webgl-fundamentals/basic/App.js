let gl, canvas;

export default class App {

  /**
   * https://webglfundamentals.org/webgl/lessons/ko/webgl-fundamentals.html
   */
  constructor() {
    this.initWebGL();
  }

  initWebGL() {
    canvas = document.getElementById('canvas');
    gl = webglUtils.getGL(canvas);

  }

  initGUI() {
  }
}
