export default class App {
  constructor() {
    console.log('Equation');
    this.run();
  }

  run() {

    /**
     * https://mathbang.net/569
     * 역행렬을 이용하여 아래 연립방정식의 해를 구하라.
     * 5x - y = 8
     * 4x + 3y = 14
     *
     * |x| = |5, 1| -1 |8|
     * |y| = |4, 3|    |14|
     */

    var a = mat2.create();
    a[0] = 5;
    a[1] = 4;
    a[2] = -1;
    a[3] = 3;
    var aInvert = mat2.create();
    mat2.invert(aInvert, a);

    var b = vec2.create();
    b[0] = 8;
    b[1] = 14;

    var result1 = vec2.create();
    mat2.multiply(result1, aInvert, b);
    console.log('result1', result1);


    /**
     * https://m.blog.naver.com/PostView.nhn?blogId=alwaysneoi&logNo=100194836897&proxyReferer=https%3A%2F%2Fwww.google.com%2F
     * x + y + z = 5
     * 2x + 3y + 5z = 8
     * 4x + 5z = 2
     *
     * |x| = |1, 1, 1| -1 |5|
     * |y| = |2, 3, 5|    |8|
     * |z| = |4, 0, 5|    |4|
     */

    var c = mat3.create();
    c[0] = 1;
    c[1] = 2;
    c[2] = 4;
    c[3] = 1;
    c[4] = 3;
    c[5] = 0;
    c[6] = 1;
    c[7] = 5;
    c[8] = 5;
    var cInvert = mat3.create();
    mat3.invert(cInvert, c);

    var d = vec3.create();
    d[0] = 5;
    d[1] = 8;
    d[2] = 2;

    var result2 = vec3.create();
    mat3.multiply(result2, cInvert, d);
    console.log('result2', result2);

    /**
     * https://m.blog.naver.com/PostView.nhn?blogId=sbssbi69&logNo=90192503655&proxyReferer=https%3A%2F%2Fwww.google.com%2F
     * | 1 3 -4 5   | |a| = |1|
     * | -2 1 -1 3  | |b| = |4|
     * | 3 -2 2 -1  | |c| = |5|
     * | 4 -1 -3 -1 | |d| = |2|
     *
     * |a| = | 1 3 -4 5   | -1 |1|
     * |b| = | -2 1 -1 3  |    |4|
     * |c| = | 3 -2 2 -1  |    |5|
     * |d| = | 4 -1 -3 -1 |    |2|
     */

    var e = mat4.create();
    e[0] = 1;
    e[1] = -2;
    e[2] = 3;
    e[3] = 4;
    e[4] = 3;
    e[5] = 1;
    e[6] = -2;
    e[7] = -1;
    e[8] = -4;
    e[9] = -1;
    e[10] = 2;
    e[11] = -3;
    e[12] = 5;
    e[13] = 3;
    e[14] = -1;
    e[15] = -1;
    var eInvert = mat4.create();
    mat4.invert(eInvert, e);

    var f = vec4.create();
    f[0] = 1;
    f[1] = 4;
    f[2] = 5;
    f[3] = 2;

    var result3 = vec4.create();
    mat4.multiply(result3, eInvert, f);
    console.log('result3', result3);
  }
}
