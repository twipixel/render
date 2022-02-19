var vertextShaderText =
  [
    'precision mediump float;',
    '',
    'attribute vec3 vertPosition;',
    'attribute vec3 vertColor;',
    'varying vec3 fragColor;',
    'uniform mat4 mWorld;',
    'uniform mat4 mView;',
    'uniform mat4 mProj;',
    '',
    'void main()',
    '{',
    ' fragColor = vertColor;',
    ' gl_Position = mProj * mView * mWorld * vec4(vertPosition, 1.0);',
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
   * WebGL Tutorial 02
   * https://www.youtube.com/user/IntroTutorials1/videos
   * https://github.com/sessamekesh/IndigoCS-webgl-tutorials
   */
  constructor() {
    console.log('WebGL Rotating 3D Cube');
    this.init();
    this.initGUI();
  }

  init() {
    var canvas = this.canvas = document.getElementById('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    var gl = this.gl = canvas.getContext('webgl');
    gl.viewport(0, 0, window.innerWidth, window.innerHeight);

    if (!gl) {
      gl = this.gl = canvas.getContext('experimental-webgl');
    }

    if (!gl) {
      alert('Your browser dose not support WebGL');
      return;
    }

    gl.clearColor(0.75, 0.85, 0.8, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    gl.enable(gl.DEPTH_TEST);
    gl.enable(gl.CULL_FACE);
    gl.frontFace(gl.CCW);
    gl.cullFace(gl.BACK);

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
    var boxVertices =
      [ // X, Y, Z           R, G, B
        // Top
        -1.0, 1.0, -1.0,   0.5, 0.5, 0.5,
        -1.0, 1.0, 1.0,    0.5, 0.5, 0.5,
        1.0, 1.0, 1.0,     0.5, 0.5, 0.5,
        1.0, 1.0, -1.0,    0.5, 0.5, 0.5,

        // Left
        -1.0, 1.0, 1.0,    0.75, 0.25, 0.5,
        -1.0, -1.0, 1.0,   0.75, 0.25, 0.5,
        -1.0, -1.0, -1.0,  0.75, 0.25, 0.5,
        -1.0, 1.0, -1.0,   0.75, 0.25, 0.5,

        // Right
        1.0, 1.0, 1.0,    0.25, 0.25, 0.75,
        1.0, -1.0, 1.0,   0.25, 0.25, 0.75,
        1.0, -1.0, -1.0,  0.25, 0.25, 0.75,
        1.0, 1.0, -1.0,   0.25, 0.25, 0.75,

        // Front
        1.0, 1.0, 1.0,    1.0, 0.0, 0.15,
        1.0, -1.0, 1.0,    1.0, 0.0, 0.15,
        -1.0, -1.0, 1.0,    1.0, 0.0, 0.15,
        -1.0, 1.0, 1.0,    1.0, 0.0, 0.15,

        // Back
        1.0, 1.0, -1.0,    0.0, 1.0, 0.15,
        1.0, -1.0, -1.0,    0.0, 1.0, 0.15,
        -1.0, -1.0, -1.0,    0.0, 1.0, 0.15,
        -1.0, 1.0, -1.0,    0.0, 1.0, 0.15,

        // Bottom
        -1.0, -1.0, -1.0,   0.5, 0.5, 1.0,
        -1.0, -1.0, 1.0,    0.5, 0.5, 1.0,
        1.0, -1.0, 1.0,     0.5, 0.5, 1.0,
        1.0, -1.0, -1.0,    0.5, 0.5, 1.0,
      ];

    var boxIndices =
      [
        // Top
        0, 1, 2,
        0, 2, 3,

        // Left
        5, 4, 6,
        6, 4, 7,

        // Right
        8, 9, 10,
        8, 10, 11,

        // Front
        13, 12, 14,
        15, 14, 12,

        // Back
        16, 17, 18,
        16, 18, 19,

        // Bottom
        21, 20, 22,
        22, 20, 23
      ];

    // Buffer
    // GPU에 올리는 2진 데이터 배열
    // 일반적으로 Buffer는 위치, 법선, Texture 좌표, Vertex 색상 등을 포함하지만 아무것이나 자유롭게 넣어도 된다.
    var boxVertexBufferObject = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, boxVertexBufferObject);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(boxVertices), gl.STATIC_DRAW);

    var boxIndexBufferObject = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, boxIndexBufferObject);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(boxIndices), gl.STATIC_DRAW);

    var positionAttributionLocation = gl.getAttribLocation(program, 'vertPosition');
    var colorAttributionLocation = gl.getAttribLocation(program, 'vertColor');
    gl.vertexAttribPointer(
      positionAttributionLocation, // Attribute location
      3, // Number of elements per attribute
      gl.FLOAT, // Type of elements
      gl.FALSE,
      6 * Float32Array.BYTES_PER_ELEMENT, // Size of an individual vertex
      0 // Offst from the beginning of a single vertex to this attribute
    );
    gl.vertexAttribPointer(
      colorAttributionLocation, // Attribute location
      3, // Number of elements per attribute
      gl.FLOAT, // Type of elements
      gl.FALSE,
      6 * Float32Array.BYTES_PER_ELEMENT, // Size of an individual vertex
      3 * Float32Array.BYTES_PER_ELEMENT // Offst from the beginning of a single vertex to this attribute
    );

    gl.enableVertexAttribArray(positionAttributionLocation);
    gl.enableVertexAttribArray(colorAttributionLocation);

    // Tell OpenGL state machine which program show
    gl.useProgram(program);

    var matWorldUniformLocaiton = gl.getUniformLocation(program, 'mWorld');
    var matViewUniformLocaiton = gl.getUniformLocation(program, 'mView');
    var matProjUniformLocaiton = gl.getUniformLocation(program, 'mProj');

    var worldMatrix = this.worldMatrix = mat4.create();
    var viewMatrix = this.viewMatrix = mat4.create();
    var projMatrix = this.projMatrix = mat4.create();

    var view = this.view = [0, 0, -8];
    mat4.lookAt(viewMatrix, view, [0, 0, 0], [0, 1, 0]);

    this.perspective();

    gl.uniformMatrix4fv(matWorldUniformLocaiton, gl.FLASE, worldMatrix);
    gl.uniformMatrix4fv(matViewUniformLocaiton, gl.FLASE, viewMatrix);
    gl.uniformMatrix4fv(matProjUniformLocaiton, gl.FLASE, projMatrix);

    var xRotationMatrix = new Float32Array(16);
    var yRotationMatrix = new Float32Array(16);

    //
    // Main render loop
    //
    var identityMatrix = new Float32Array(16);
    mat4.identity(identityMatrix);
    var angle = 0;

    var loop = function () {
      var config = this.config;

      if (!config) {
        return;
      }

      /**
       * lookAt(out, eye, center, up)
       * http://glmatrix.net/docs/module-mat4.html
       * eye: 카메라는 월드 좌표에서 (0, 0, -8) 에 있다.
       * center: 카메라는 원점을 본다.
       * up: 머리가 위쪽
       */

      mat4.lookAt(viewMatrix, [config.viewX, config.viewY, config.viewZ], [0, 0, 0], [0, 1, 0]);

      var translate = mat4.create();
      mat4.translate(translate, translate, vec4.fromValues(config.x, config.y, config.z, 0));

      angle = performance.now() / 1000 / 6 * 2 * Math.PI;

      /**
       * rotate(out, a, rad, axis) -> {mat4}
       * http://glmatrix.net/docs/module-mat4.html
       * out{mat4}: the receiving matrix
       * a{mat4}: the matrix to rotate (회전할 매트릭스)
       * rad{number}: the angle to rotate the matrix by (매트릭스를 회전시킬 각도)
       * axis{vec3}: the axis to rotate around (회전축)
       */
      mat4.rotate(yRotationMatrix, identityMatrix, angle, [0, 1, 0]);
      mat4.rotate(xRotationMatrix, identityMatrix, angle / 4, [1, 0, 0]);
      mat4.mul(worldMatrix, translate, yRotationMatrix, xRotationMatrix);
      gl.uniformMatrix4fv(matWorldUniformLocaiton, gl.FLASE, worldMatrix);
      gl.uniformMatrix4fv(matViewUniformLocaiton, gl.FLASE, viewMatrix);
      gl.uniformMatrix4fv(matProjUniformLocaiton, gl.FLASE, projMatrix);

      gl.clearColor(0.75, 0.85, 0.8, 1.0);
      // clear() method accepts multiple values
      // https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/clear
      gl.clear(gl.DEPTH_BUFFER_BIT | gl.COLOR_BUFFER_BIT);
      gl.drawElements(gl.TRIANGLES, boxIndices.length, gl.UNSIGNED_SHORT, 0);

      requestAnimationFrame(loop.bind(this));
    };
    requestAnimationFrame(loop.bind(this));
  }

  perspective() {
    /**
     * http://www.opengl-tutorial.org/kr/beginners-tutorials/tutorial-3-matrices/
     * perspective(out, fov, aspect, near, far)
     * http://glmatrix.net/docs/module-mat4.html
     * fov{number}: 수직방향 시야각
     * aspect{number}: 화면 비 (w / h)
     * near{number}: Near clipping plane (근거리 잘라내기 평면)
     * far{number}: Far clipping plane (원거리 잘라내기 평면)
     */
    mat4.perspective(this.projMatrix, glMatrix.toRadian(45), canvas.width / canvas.height, 0.1, 1000.0);
  }

  initGUI() {
    var gui = this.gui = new dat.GUI();
    var view = this.view;

    var config = this.config = {
      x: 0,
      y: 0,
      z: 0,
      viewX: view[0],
      viewY: view[1],
      viewZ: view[2],
    };

    var worldFolder = gui.addFolder('World');
    worldFolder.add(config, 'x', -50, 50);
    worldFolder.add(config, 'y', -50, 50);
    worldFolder.add(config, 'z', -50, 50);
    worldFolder.open();

    var viewFolder = gui.addFolder('View');
    viewFolder.add(config, 'viewX', -50, 50);
    viewFolder.add(config, 'viewY', -50, 50);
    viewFolder.add(config, 'viewZ', -50, 50);
    viewFolder.open();
  }
}

