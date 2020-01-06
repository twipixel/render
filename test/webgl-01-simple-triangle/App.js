
var vertextShaderText =
  [
    'precision mediump float;',
    '',
    'attribute vec2 vertPosition;',
    'attribute vec3 vertColor;',
    'varying vec3 fragColor;',
    '',
    'void main()',
    '{',
    ' fragColor = vertColor;',
    ' gl_Position = vec4(vertPosition, 0.0, 1.0);',
    '}'
  ].join('\n');

var fragmentShaderText =
  [
    'precision mediump float;',
    '',
    'varying vec3 fragColor;',
    'void main()',
    '{',
    ' gl_FragColor = vec4(fragColor, 1.0);',
    '}'
  ].join('\n');

export default class App {
  /**
   * WebGL Tutorial 01 - Setup and Triangle
   * https://www.youtube.com/user/IntroTutorials1/videos
   * https://github.com/sessamekesh/IndigoCS-webgl-tutorials
   */
  constructor() {
    console.log('WebGL Simple Triangle');
    this.init();
    this.initGUI();
  }

  init() {
    this.canvas = document.getElementById('canvas');
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

    var gl = this.gl = this.canvas.getContext('webgl');
    gl.viewport(0, 0, window.innerWidth, window.innerHeight);

    if (!gl) {
      gl = this.gl = this.canvas.getContext('experimental-webgl');
    }

    if (!gl) {
      alert('Your browser dose not support WebGL');
      return;
    }

    gl.clearColor(0.75, 0.85, 0.8, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    var vertextShader = gl.createShader(gl.VERTEX_SHADER);
    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);

    gl.shaderSource(vertextShader, vertextShaderText);
    gl.shaderSource(fragmentShader, fragmentShaderText);

    gl.compileShader(vertextShader);
    if (!gl.getShaderParameter(vertextShader, gl.COMPILE_STATUS)) {
      console.error('ERROR compiling vertext shader!', gl.getShaderInfoLog(vertextShader));
      return;
    }

    gl.compileShader(fragmentShader);
    if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {
      console.error('ERROR compiling fragment shader!', gl.getShaderInfoLog(fragmentShader));
      return;
    }

    var program = gl.createProgram();
    gl.attachShader(program, vertextShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error('ERROR linking program!', gl.getProgramInfoLog(program));
      return;
    }
    gl.validateProgram(program);
    if (!gl.getProgramParameter(program, gl.VALIDATE_STATUS)) {
      console.error('ERROR validating program', gl.getProgramInfoLog(program));
      return;
    }

    //
    // Create buffer
    //

    var triangleVertices = this.triangleVertices =
      [ // x, y,    R, G, B
        0.0, 0.5,   1.0, 1.0, 0.0,
        -0.5, -0.5, 0.7, 0.0, 1.0,
        0.5, -0.5,  0.1, 1.0, 0.6
      ];

    gl.useProgram(program);
    var triangleVertexBufferObject = gl.createBuffer();

    var loop = function() {
      gl.clearColor(0.75, 0.85, 0.8, 1.0);
      gl.clear(gl.DEPTH_BUFFER_BIT | gl.COLOR_BUFFER_BIT);

      // Buffer
      // GPU에 올리는 2진 데이터 배열
      // 일반적으로 Buffer는 위치, 법선, Texture 좌표, Vertex 색상 등을 포함하지만 아무것이나 자유롭게 넣어도 된다.

      gl.bindBuffer(gl.ARRAY_BUFFER, triangleVertexBufferObject);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.triangleVertices), gl.DYNAMIC_DRAW);

      var positionAttributionLocation = gl.getAttribLocation(program, 'vertPosition');
      gl.enableVertexAttribArray(positionAttributionLocation);
      gl.vertexAttribPointer(
        positionAttributionLocation, // Attribute location
        2, // Number of elements per attribute
        gl.FLOAT, // Type of elements
        gl.FALSE,
        5 * Float32Array.BYTES_PER_ELEMENT, // Size of an individual vertex
        0 // Offst from the beginning of a single vertex to this attribute
      );

      var colorAttributionLocation = gl.getAttribLocation(program, 'vertColor');
      gl.enableVertexAttribArray(colorAttributionLocation);
      gl.vertexAttribPointer(
        colorAttributionLocation, // Attribute location
        3, // Number of elements per attribute
        gl.FLOAT, // Type of elements
        gl.FALSE,
        5 * Float32Array.BYTES_PER_ELEMENT, // Size of an individual vertex
        2 * Float32Array.BYTES_PER_ELEMENT // Offst from the beginning of a single vertex to this attribute
      );

      gl.drawArrays(gl.TRIANGLES, 0, 3);
      requestAnimationFrame(loop.bind(this));
    };

    requestAnimationFrame(loop.bind(this));
  }

  initGUI() {
    var verts = this.triangleVertices;

    this.gui = new dat.GUI();
    this.config = {
      topX: verts[0],
      topY: verts[1],
      topR: verts[2],
      topG: verts[3],
      topB: verts[4],
      leftX: verts[5],
      leftY: verts[6],
      leftR: verts[7],
      leftG: verts[8],
      leftB: verts[9],
      rightX: verts[10],
      rightY: verts[11],
      rightR: verts[12],
      rightG: verts[13],
      rightB: verts[14],
    };

    var w = this.canvas.width * 2;
    var h = this.canvas.height * 2;
    var wstep = 1 / w;
    var hstep = 1 / h;
    var cstep = 1 / 256;

    this.gui.add(this.config, 'topX').min(-1).max(1).step(wstep).onChange((value) => {
      this.triangleVertices[0] = value;
    });
    this.gui.add(this.config, 'topY').min(-1).max(1).step(hstep).onChange((value) => {
      this.triangleVertices[1] = value;
    });
    this.gui.add(this.config, 'topR').min(0).max(1).step(cstep).onChange((value) => {
      this.triangleVertices[2] = value;
    });
    this.gui.add(this.config, 'topG').min(0).max(1).step(cstep).onChange((value) => {
      this.triangleVertices[3] = value;
    });
    this.gui.add(this.config, 'topB').min(0).max(1).step(cstep).onChange((value) => {
      this.triangleVertices[4] = value;
    });
    this.gui.add(this.config, 'leftX').min(-1).max(1).step(wstep).onChange((value) => {
      this.triangleVertices[5] = value;
    });
    this.gui.add(this.config, 'leftY').min(-1).max(1).step(hstep).onChange((value) => {
      this.triangleVertices[6] = value;
    });
    this.gui.add(this.config, 'leftR').min(0).max(1).step(cstep).onChange((value) => {
      this.triangleVertices[7] = value;
    });
    this.gui.add(this.config, 'leftG').min(0).max(1).step(cstep).onChange((value) => {
      this.triangleVertices[8] = value;
    });
    this.gui.add(this.config, 'leftB').min(0).max(1).step(cstep).onChange((value) => {
      this.triangleVertices[9] = value;
    });
    this.gui.add(this.config, 'rightX').min(-1).max(1).step(wstep).onChange((value) => {
      this.triangleVertices[10] = value;
    });
    this.gui.add(this.config, 'rightY').min(-1).max(1).step(hstep).onChange((value) => {
      this.triangleVertices[11] = value;
    });
    this.gui.add(this.config, 'rightR').min(0).max(1).step(cstep).onChange((value) => {
      this.triangleVertices[12] = value;
    });
    this.gui.add(this.config, 'rightG').min(0).max(1).step(cstep).onChange((value) => {
      this.triangleVertices[13] = value;
    });
    this.gui.add(this.config, 'rightB').min(0).max(1).step(cstep).onChange((value) => {
      this.triangleVertices[14] = value;
    });
  }
}
