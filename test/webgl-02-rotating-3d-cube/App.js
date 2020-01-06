
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

    var worldMatrix = new Float32Array(16);
    var viewMatrix = new Float32Array(16);
    var projMatrix = new Float32Array(16);
    mat4.identity(worldMatrix);

    /**
     * lookAt(out, eye, center, up)
     * http://glmatrix.net/docs/module-mat4.html
     * eye: 카메라는 월드 좌표에서 (0, 0, -8) 에 있다.
     * center: 카메라는 원점을 본다.
     * up: 머리가 위쪽
     */
    mat4.lookAt(viewMatrix, [0, 0, -8], [0, 0, 0], [0, 1, 0]);

    /**
     * http://www.opengl-tutorial.org/kr/beginners-tutorials/tutorial-3-matrices/
     * perspective(out, fov, aspect, near, far)
     * http://glmatrix.net/docs/module-mat4.html
     * fov: 수직방향 시야각
     * aspect: 화면 비 (w / h)
     * near: Near clipping plane (근거리 잘라내기 평면)
     * far: Far clipping plane (원거리 잘라내기 평면)
     */
    mat4.perspective(projMatrix, glMatrix.toRadian(45), canvas.width / canvas.height, 0.1, 1000.0);

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
      angle = performance.now() / 1000 / 6 * 2 * Math.PI;
      mat4.rotate(yRotationMatrix, identityMatrix, angle, [0, 1, 0]);
      mat4.rotate(xRotationMatrix, identityMatrix, angle / 4, [1, 0, 0]);
      mat4.mul(worldMatrix, yRotationMatrix, xRotationMatrix);
      gl.uniformMatrix4fv(matWorldUniformLocaiton, gl.FLASE, worldMatrix);

      gl.clearColor(0.75, 0.85, 0.8, 1.0);
      // clear() method accepts multiple values
      // https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/clear
      gl.clear(gl.DEPTH_BUFFER_BIT | gl.COLOR_BUFFER_BIT);
      gl.drawElements(gl.TRIANGLES, boxIndices.length, gl.UNSIGNED_SHORT, 0);

      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
  }

  initGUI() {

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

