var vertexShaderText =
  [
    'precision mediump float;',
    '',
    'attribute vec3 vertPosition;',
    'attribute vec2 vertTexCoord;',
    'varying vec2 fragTexCoord;',
    'uniform mat4 mWorld;',
    'uniform mat4 mView;',
    'uniform mat4 mProj;',
    '',
    'void main()',
    '{',
    '  fragTexCoord = vertTexCoord;',
    '  gl_Position = mProj * mView * mWorld * vec4(vertPosition, 1.0);',
    '}'
  ].join('\n');

var fragmentShaderText =
  [
    'precision mediump float;',
    '',
    'varying vec2 fragTexCoord;',
    'uniform sampler2D sampler;',
    '',
    'void main()',
    '{',
    '  gl_FragColor = texture2D(sampler, fragTexCoord);',
    '}'
  ].join('\n');


export default class App {
  /**
   * WebGL Tutorial 03
   * https://www.youtube.com/user/IntroTutorials1/videos
   * https://github.com/sessamekesh/IndigoCS-webgl-tutorials
   */
  constructor() {
    console.log('WebGL Textured Cube');

    var img = this.img = document.createElement('img');

    var onload = function() {
      this.init();
      this.initGUI();
    };

    img.onload = onload.bind(this);
    img.src = '../../test/assets/image/crate.png';
  }



  init() {
    var canvas = this.canvas = document.getElementById('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    var gl = this.gl = canvas.getContext('webgl');
    gl.viewport(0, 0, window.innerWidth, window.innerHeight);

    if (!gl) {
      console.log('WebGL not supported, falling back on experimental-webgl');
      gl = canvas.getContext('experimental-webgl');
    }

    if (!gl) {
      alert('Your browser does not support WebGL');
    }

    gl.clearColor(0.75, 0.85, 0.8, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    gl.enable(gl.DEPTH_TEST);
    gl.enable(gl.CULL_FACE);
    gl.frontFace(gl.CCW);
    gl.cullFace(gl.BACK);

    //
    // Create shaders
    //
    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);

    gl.shaderSource(vertexShader, vertexShaderText);
    gl.shaderSource(fragmentShader, fragmentShaderText);

    gl.compileShader(vertexShader);
    if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)) {
      console.error('ERROR compiling vertex shader!', gl.getShaderInfoLog(vertexShader));
      return;
    }

    gl.compileShader(fragmentShader);
    if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {
      console.error('ERROR compiling fragment shader!', gl.getShaderInfoLog(fragmentShader));
      return;
    }

    var program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error('ERROR linking program!', gl.getProgramInfoLog(program));
      return;
    }
    gl.validateProgram(program);
    if (!gl.getProgramParameter(program, gl.VALIDATE_STATUS)) {
      console.error('ERROR validating program!', gl.getProgramInfoLog(program));
      return;
    }

    //
    // Create buffer
    //
    var boxVertices =
      [ // X, Y, Z           U, V
        // Top
        -1.0, 1.0, -1.0, 0, 0,
        -1.0, 1.0, 1.0, 0, 1,
        1.0, 1.0, 1.0, 1, 1,
        1.0, 1.0, -1.0, 1, 0,

        // Left
        -1.0, 1.0, 1.0, 0, 0,
        -1.0, -1.0, 1.0, 1, 0,
        -1.0, -1.0, -1.0, 1, 1,
        -1.0, 1.0, -1.0, 0, 1,

        // Right
        1.0, 1.0, 1.0, 1, 1,
        1.0, -1.0, 1.0, 0, 1,
        1.0, -1.0, -1.0, 0, 0,
        1.0, 1.0, -1.0, 1, 0,

        // Front
        1.0, 1.0, 1.0, 1, 1,
        1.0, -1.0, 1.0, 1, 0,
        -1.0, -1.0, 1.0, 0, 0,
        -1.0, 1.0, 1.0, 0, 1,

        // Back
        1.0, 1.0, -1.0, 0, 0,
        1.0, -1.0, -1.0, 0, 1,
        -1.0, -1.0, -1.0, 1, 1,
        -1.0, 1.0, -1.0, 1, 0,

        // Bottom
        -1.0, -1.0, -1.0, 1, 1,
        -1.0, -1.0, 1.0, 1, 0,
        1.0, -1.0, 1.0, 0, 0,
        1.0, -1.0, -1.0, 0, 1,
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

    var boxVertexBufferObject = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, boxVertexBufferObject);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(boxVertices), gl.STATIC_DRAW);

    var boxIndexBufferObject = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, boxIndexBufferObject);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(boxIndices), gl.STATIC_DRAW);

    var positionAttribLocation = gl.getAttribLocation(program, 'vertPosition');
    var texCoordAttribLocation = gl.getAttribLocation(program, 'vertTexCoord');
    gl.vertexAttribPointer(
      positionAttribLocation, // Attribute location
      3, // Number of elements per attribute
      gl.FLOAT, // Type of elements
      gl.FALSE,
      5 * Float32Array.BYTES_PER_ELEMENT, // Size of an individual vertex
      0 // Offset from the beginning of a single vertex to this attribute
    );
    gl.vertexAttribPointer(
      texCoordAttribLocation, // Attribute location
      2, // Number of elements per attribute
      gl.FLOAT, // Type of elements
      gl.FALSE,
      5 * Float32Array.BYTES_PER_ELEMENT, // Size of an individual vertex
      3 * Float32Array.BYTES_PER_ELEMENT // Offset from the beginning of a single vertex to this attribute
    );

    gl.enableVertexAttribArray(positionAttribLocation);
    gl.enableVertexAttribArray(texCoordAttribLocation);

    //
    // Create texture
    //
    var boxTexture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, boxTexture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texImage2D(
      gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA,
      gl.UNSIGNED_BYTE,
      this.img
    );

    gl.bindTexture(gl.TEXTURE_2D, null);

    // Tell OpenGL state machine which program should be active.
    gl.useProgram(program);

    var matWorldUniformLocation = gl.getUniformLocation(program, 'mWorld');
    var matViewUniformLocation = gl.getUniformLocation(program, 'mView');
    var matProjUniformLocation = gl.getUniformLocation(program, 'mProj');

    var worldMatrix = this.worldMatrix = mat4.create();
    var viewMatrix = this.viewMatrix = mat4.create();
    var projMatrix = this.projMatrix = mat4.create();

    var view = this.view = [0, 0, -8];
    mat4.lookAt(viewMatrix, view, [0, 0, 0], [0, 1, 0]);

    /**
     * http://www.opengl-tutorial.org/kr/beginners-tutorials/tutorial-3-matrices/
     * perspective(out, fov, aspect, near, far)
     * http://glmatrix.net/docs/module-mat4.html
     * fov{number}: 수직방향 시야각
     * aspect{number}: 화면 비 (w / h)
     * near{number}: Near clipping plane (근거리 잘라내기 평면)
     * far{number}: Far clipping plane (원거리 잘라내기 평면)
     */
    mat4.perspective(projMatrix, glMatrix.toRadian(45), canvas.clientWidth / canvas.clientHeight, 0.1, 1000.0);

    gl.uniformMatrix4fv(matWorldUniformLocation, gl.FALSE, worldMatrix);
    gl.uniformMatrix4fv(matViewUniformLocation, gl.FALSE, viewMatrix);
    gl.uniformMatrix4fv(matProjUniformLocation, gl.FALSE, projMatrix);

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
      gl.uniformMatrix4fv(matWorldUniformLocation, gl.FALSE, worldMatrix);
      gl.uniformMatrix4fv(matViewUniformLocaiton, gl.FLASE, viewMatrix);
      gl.uniformMatrix4fv(matProjUniformLocaiton, gl.FLASE, projMatrix);

      gl.clearColor(0.75, 0.85, 0.8, 1.0);
      gl.clear(gl.DEPTH_BUFFER_BIT | gl.COLOR_BUFFER_BIT);

      gl.bindTexture(gl.TEXTURE_2D, boxTexture);
      gl.activeTexture(gl.TEXTURE0);

      gl.drawElements(gl.TRIANGLES, boxIndices.length, gl.UNSIGNED_SHORT, 0);

      requestAnimationFrame(loop.bind(this));
    };
    requestAnimationFrame(loop.bind(this));
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

