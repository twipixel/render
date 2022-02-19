import loadTextures from '../../src/utils/loadTextures';

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
    // UV 좌표 전달
    '  fragTexCoord = vertTexCoord;',
    '  gl_Position = mProj * mView * mWorld * vec4(vertPosition, 1.0);',
    '}'
  ].join('\n');

var fragmentShaderText =
  [
    'precision mediump float;',
    '',
    'varying vec2 fragTexCoord;',
    // 'uniform sampler2D sampler;',
    'uniform sampler2D crate;',
    'uniform sampler2D awesomeface;',
    '',
    'void main()',
    '{',
    // 샘플러가 판단하기에 프래그먼트의 위치에 가장 잘 맞아 떨어진다고 여겨지는
    // 텍셀(texel, 텍스쳐 내부에 있는 픽셀)값에 따라서 프래그먼트의 색상값을 계산
    // '  gl_FragColor = texture2D(crate, fragTexCoord);',
    // '  gl_FragColor = texture2D(awesomeface, fragTexCoord);',

    '  vec4 color0 = texture2D(crate, fragTexCoord);',
    '  vec4 color1 = texture2D(awesomeface, fragTexCoord);',
    '  gl_FragColor = color0 * color1;',
    // '  gl_FragColor = vec4(color0.rgb, 0.5) * vec4(color1.rgb, 0.5);',
    '}'
  ].join('\n');


export default class App {
  /**
   * WebGL Tutorial 03
   * https://www.youtube.com/user/IntroTutorials1/videos
   * https://github.com/sessamekesh/IndigoCS-webgl-tutorials
   *
   * 텍스쳐 설명
   * https://inhibitor1217.github.io/2019/04/27/webgl-texture.html
   */
  constructor() {
    console.log('WebGL Textured Cube');

    loadTextures([
      '../../test/assets/image/crate.png',
      '../../test/assets/image/awesomeface.png'
    ]).then(textures => {
      this.textures = textures;
      this.init();
      this.initGUI();
    });
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
      [ // X, Y, Z, U, V
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

    // 버텍스 쉐이더에서 사용할 수 있도록 활성화
    gl.enableVertexAttribArray(positionAttribLocation);
    gl.enableVertexAttribArray(texCoordAttribLocation);

    //
    // Create texture
    //
    var crateTexture = gl.createTexture();
    /**
     * 텍스쳐 로딩
     * void gl.bindTexutre(target, texture);
     * https://developer.mozilla.org/ko/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL
     *
     * target
     * gl.TEXTURE_2D: 2차원 텍스쳐
     * gl.TEXTURE_CUBE_MAP: 큐브맵 텍스쳐
     *
     */
    gl.bindTexture(gl.TEXTURE_2D, crateTexture);
    // s좌표계 (텍셀좌표계) 감싸기(반복) 방지
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    // t좌표계 (텍셀좌표계) 감싸기(반복) 방지
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    // 축소할 때 LINEAR 필터 적용 (minifying, 선형필터, 즉 주변 픽셀과 혼합하여 텍셀을 보여줌)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    // 확대할 때 LINEAR 필터 적용 (magnifying)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    /**
     * void gl.texImage2D(target, level, internalformat, format, type, ImageData? pixels)
     * https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/texImage2D
     * https://ozlael.tistory.com/45
     *
     * target
     * GLenum
     * gl.TEXTURE_2D,
     * gl.TEXTURE_CUBE_MAP_POSITIVE_X ... 시리즈
     *
     * level
     * GLint 세부 사항의 레벨을 지정, 레벨으 0은 기본 이미지 레벨, 레벨 n은 n 번째 밉맵 감소 레벨
     *
     * internalformat
     * 텍스처의 색상 구성 요소를 지정
     *
     * format
     * 텍셀 데이터의 포맷을 지정. WebGL 1에서 internalformat 과 동일해야함
     *
     * type
     * 텍셀 데이터의 데이터 유형을 지정.
     * gl.UNSIGNED_BYTE: 채널당 8비트 gl.RGBA
     *
     * pixels
     * 다음 개체 중 하나의 텍스처 픽셀 소스로 사용 가능
     * ArrayBufferView, ImageData, HTMLImageElement, HTMLCanvasElement, HTMLVideoElement, ImageBitmap
     */
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, this.textures[0]);
    gl.bindTexture(gl.TEXTURE_2D, null);

    var aweasomefaceTexture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, aweasomefaceTexture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, this.textures[1]);
    gl.bindTexture(gl.TEXTURE_2D, null);

    var crateTextureLocation = gl.getUniformLocation(program, 'crate');
    var awesomefaceTextureLocation = gl.getUniformLocation(program, 'awesomeface');

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

    /**
     * uniformMatrix4fv(location, transpose, value)\
     * https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/uniformMatrix
     *
     * locaiton
     * getUniformLocaiton() 으로 가져온 location 값 (WebGLUniformLocaiton)
     *
     * transpose
     * Matrix transpose 할지 여부 지정. 반드시 FALSE 여야 합니다.
     *
     * value
     * Float32Array 또는 스퀀시 GLfloat 값
     */
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
      gl.uniformMatrix4fv(matViewUniformLocation, gl.FLASE, viewMatrix);
      gl.uniformMatrix4fv(matProjUniformLocation, gl.FLASE, projMatrix);

      gl.clearColor(0.75, 0.85, 0.8, 1.0);
      gl.clear(gl.DEPTH_BUFFER_BIT | gl.COLOR_BUFFER_BIT);


      gl.uniform1i(crateTextureLocation, 0);
      gl.uniform1i(awesomefaceTextureLocation, 1);

      // GL은 32개의 텍스쳐 레지스터를 제공. 그 중 첫번째 레지스터는 gl.TEXTURE0 입니다.
      // 텍스쳐를 사용하기 위해 전에 읽어온 텍스쳐를 gl.TEXTURE0에 바인딩합니다.
      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, crateTexture);
      gl.activeTexture(gl.TEXTURE1);
      gl.bindTexture(gl.TEXTURE_2D, aweasomefaceTexture);

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

