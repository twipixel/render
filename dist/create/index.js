webpackJsonp([0,1],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	__webpack_require__(1);
	
	var _App = __webpack_require__(326);
	
	var _App2 = _interopRequireDefault(_App);
	
	var _KeyCode = __webpack_require__(385);
	
	var _KeyCode2 = _interopRequireDefault(_KeyCode);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	(function () {
	    window.onload = function () {
	        var main = new Main();
	    };
	})();
	
	var Main = function () {
	    function Main() {
	        _classCallCheck(this, Main);
	
	        this.init();
	        this.addEvent();
	        this.onResize();
	    }
	
	    _createClass(Main, [{
	        key: 'init',
	        value: function init() {
	            this.app = new _App2.default();
	        }
	    }, {
	        key: 'addEvent',
	        value: function addEvent() {
	            window.onresize = this.onResize.bind(this);
	            window.addEventListener('keyup', this.onKeyUp.bind(this));
	        }
	    }, {
	        key: 'onResize',
	        value: function onResize() {
	            this.app.resize();
	        }
	    }, {
	        key: 'onKeyUp',
	        value: function onKeyUp(e) {
	            switch (e.keyCode) {
	                case _KeyCode2.default.BACKQUOTE:
	                    break;
	
	                case _KeyCode2.default.ESCAPE:
	                    break;
	
	                case _KeyCode2.default.SPACE:
	                    break;
	
	                case _KeyCode2.default.DOWN:
	                    break;
	
	                case _KeyCode2.default.UP:
	                    break;
	
	                case _KeyCode2.default.LEFT:
	                    break;
	
	                case _KeyCode2.default.RIGHT:
	                    break;
	
	                case _KeyCode2.default.BACKSPACE:
	                    break;
	            }
	        }
	    }]);

	    return Main;
	}();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";
	
	__webpack_require__(2);
	
	__webpack_require__(322);
	
	__webpack_require__(323);
	
	if (global._babelPolyfill) {
	  throw new Error("only one instance of babel-polyfill is allowed");
	}
	global._babelPolyfill = true;
	
	var DEFINE_PROPERTY = "defineProperty";
	function define(O, key, value) {
	  O[key] || Object[DEFINE_PROPERTY](O, key, {
	    writable: true,
	    configurable: true,
	    value: value
	  });
	}
	
	define(String.prototype, "padLeft", "".padStart);
	define(String.prototype, "padRight", "".padEnd);
	
	"pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function (key) {
	  [][key] && define(Array, key, Function.call.bind([][key]));
	});
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(3);
	__webpack_require__(51);
	__webpack_require__(52);
	__webpack_require__(53);
	__webpack_require__(54);
	__webpack_require__(56);
	__webpack_require__(59);
	__webpack_require__(60);
	__webpack_require__(61);
	__webpack_require__(62);
	__webpack_require__(63);
	__webpack_require__(64);
	__webpack_require__(65);
	__webpack_require__(66);
	__webpack_require__(67);
	__webpack_require__(69);
	__webpack_require__(71);
	__webpack_require__(73);
	__webpack_require__(75);
	__webpack_require__(78);
	__webpack_require__(79);
	__webpack_require__(80);
	__webpack_require__(84);
	__webpack_require__(86);
	__webpack_require__(88);
	__webpack_require__(91);
	__webpack_require__(92);
	__webpack_require__(93);
	__webpack_require__(94);
	__webpack_require__(96);
	__webpack_require__(97);
	__webpack_require__(98);
	__webpack_require__(99);
	__webpack_require__(100);
	__webpack_require__(101);
	__webpack_require__(102);
	__webpack_require__(104);
	__webpack_require__(105);
	__webpack_require__(106);
	__webpack_require__(108);
	__webpack_require__(109);
	__webpack_require__(110);
	__webpack_require__(112);
	__webpack_require__(114);
	__webpack_require__(115);
	__webpack_require__(116);
	__webpack_require__(117);
	__webpack_require__(118);
	__webpack_require__(119);
	__webpack_require__(120);
	__webpack_require__(121);
	__webpack_require__(122);
	__webpack_require__(123);
	__webpack_require__(124);
	__webpack_require__(125);
	__webpack_require__(126);
	__webpack_require__(131);
	__webpack_require__(132);
	__webpack_require__(136);
	__webpack_require__(137);
	__webpack_require__(138);
	__webpack_require__(139);
	__webpack_require__(141);
	__webpack_require__(142);
	__webpack_require__(143);
	__webpack_require__(144);
	__webpack_require__(145);
	__webpack_require__(146);
	__webpack_require__(147);
	__webpack_require__(148);
	__webpack_require__(149);
	__webpack_require__(150);
	__webpack_require__(151);
	__webpack_require__(152);
	__webpack_require__(153);
	__webpack_require__(154);
	__webpack_require__(155);
	__webpack_require__(157);
	__webpack_require__(158);
	__webpack_require__(160);
	__webpack_require__(161);
	__webpack_require__(167);
	__webpack_require__(168);
	__webpack_require__(170);
	__webpack_require__(171);
	__webpack_require__(172);
	__webpack_require__(176);
	__webpack_require__(177);
	__webpack_require__(178);
	__webpack_require__(179);
	__webpack_require__(180);
	__webpack_require__(182);
	__webpack_require__(183);
	__webpack_require__(184);
	__webpack_require__(185);
	__webpack_require__(188);
	__webpack_require__(190);
	__webpack_require__(191);
	__webpack_require__(192);
	__webpack_require__(194);
	__webpack_require__(196);
	__webpack_require__(198);
	__webpack_require__(199);
	__webpack_require__(200);
	__webpack_require__(202);
	__webpack_require__(203);
	__webpack_require__(204);
	__webpack_require__(205);
	__webpack_require__(215);
	__webpack_require__(219);
	__webpack_require__(220);
	__webpack_require__(222);
	__webpack_require__(223);
	__webpack_require__(227);
	__webpack_require__(228);
	__webpack_require__(230);
	__webpack_require__(231);
	__webpack_require__(232);
	__webpack_require__(233);
	__webpack_require__(234);
	__webpack_require__(235);
	__webpack_require__(236);
	__webpack_require__(237);
	__webpack_require__(238);
	__webpack_require__(239);
	__webpack_require__(240);
	__webpack_require__(241);
	__webpack_require__(242);
	__webpack_require__(243);
	__webpack_require__(244);
	__webpack_require__(245);
	__webpack_require__(246);
	__webpack_require__(247);
	__webpack_require__(248);
	__webpack_require__(250);
	__webpack_require__(251);
	__webpack_require__(252);
	__webpack_require__(253);
	__webpack_require__(254);
	__webpack_require__(256);
	__webpack_require__(257);
	__webpack_require__(258);
	__webpack_require__(260);
	__webpack_require__(261);
	__webpack_require__(262);
	__webpack_require__(263);
	__webpack_require__(264);
	__webpack_require__(265);
	__webpack_require__(266);
	__webpack_require__(267);
	__webpack_require__(269);
	__webpack_require__(270);
	__webpack_require__(272);
	__webpack_require__(273);
	__webpack_require__(274);
	__webpack_require__(275);
	__webpack_require__(278);
	__webpack_require__(279);
	__webpack_require__(281);
	__webpack_require__(282);
	__webpack_require__(283);
	__webpack_require__(284);
	__webpack_require__(286);
	__webpack_require__(287);
	__webpack_require__(288);
	__webpack_require__(289);
	__webpack_require__(290);
	__webpack_require__(291);
	__webpack_require__(292);
	__webpack_require__(293);
	__webpack_require__(294);
	__webpack_require__(295);
	__webpack_require__(297);
	__webpack_require__(298);
	__webpack_require__(299);
	__webpack_require__(300);
	__webpack_require__(301);
	__webpack_require__(302);
	__webpack_require__(303);
	__webpack_require__(304);
	__webpack_require__(305);
	__webpack_require__(306);
	__webpack_require__(307);
	__webpack_require__(309);
	__webpack_require__(310);
	__webpack_require__(311);
	__webpack_require__(312);
	__webpack_require__(313);
	__webpack_require__(314);
	__webpack_require__(315);
	__webpack_require__(316);
	__webpack_require__(317);
	__webpack_require__(318);
	__webpack_require__(319);
	__webpack_require__(320);
	__webpack_require__(321);
	module.exports = __webpack_require__(9);


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global = __webpack_require__(4);
	var has = __webpack_require__(5);
	var DESCRIPTORS = __webpack_require__(6);
	var $export = __webpack_require__(8);
	var redefine = __webpack_require__(18);
	var META = __webpack_require__(22).KEY;
	var $fails = __webpack_require__(7);
	var shared = __webpack_require__(23);
	var setToStringTag = __webpack_require__(24);
	var uid = __webpack_require__(19);
	var wks = __webpack_require__(25);
	var wksExt = __webpack_require__(26);
	var wksDefine = __webpack_require__(27);
	var enumKeys = __webpack_require__(29);
	var isArray = __webpack_require__(44);
	var anObject = __webpack_require__(12);
	var toIObject = __webpack_require__(32);
	var toPrimitive = __webpack_require__(16);
	var createDesc = __webpack_require__(17);
	var _create = __webpack_require__(45);
	var gOPNExt = __webpack_require__(48);
	var $GOPD = __webpack_require__(50);
	var $DP = __webpack_require__(11);
	var $keys = __webpack_require__(30);
	var gOPD = $GOPD.f;
	var dP = $DP.f;
	var gOPN = gOPNExt.f;
	var $Symbol = global.Symbol;
	var $JSON = global.JSON;
	var _stringify = $JSON && $JSON.stringify;
	var PROTOTYPE = 'prototype';
	var HIDDEN = wks('_hidden');
	var TO_PRIMITIVE = wks('toPrimitive');
	var isEnum = {}.propertyIsEnumerable;
	var SymbolRegistry = shared('symbol-registry');
	var AllSymbols = shared('symbols');
	var OPSymbols = shared('op-symbols');
	var ObjectProto = Object[PROTOTYPE];
	var USE_NATIVE = typeof $Symbol == 'function';
	var QObject = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;
	
	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function () {
	  return _create(dP({}, 'a', {
	    get: function () { return dP(this, 'a', { value: 7 }).a; }
	  })).a != 7;
	}) ? function (it, key, D) {
	  var protoDesc = gOPD(ObjectProto, key);
	  if (protoDesc) delete ObjectProto[key];
	  dP(it, key, D);
	  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
	} : dP;
	
	var wrap = function (tag) {
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};
	
	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
	  return typeof it == 'symbol';
	} : function (it) {
	  return it instanceof $Symbol;
	};
	
	var $defineProperty = function defineProperty(it, key, D) {
	  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if (has(AllSymbols, key)) {
	    if (!D.enumerable) {
	      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
	      D = _create(D, { enumerable: createDesc(0, false) });
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P) {
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P));
	  var i = 0;
	  var l = keys.length;
	  var key;
	  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P) {
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key) {
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
	  it = toIObject(it);
	  key = toPrimitive(key, true);
	  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
	  var D = gOPD(it, key);
	  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it) {
	  var names = gOPN(toIObject(it));
	  var result = [];
	  var i = 0;
	  var key;
	  while (names.length > i) {
	    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
	  var IS_OP = it === ObjectProto;
	  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
	  var result = [];
	  var i = 0;
	  var key;
	  while (names.length > i) {
	    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
	  } return result;
	};
	
	// 19.4.1.1 Symbol([description])
	if (!USE_NATIVE) {
	  $Symbol = function Symbol() {
	    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function (value) {
	      if (this === ObjectProto) $set.call(OPSymbols, value);
	      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
	    return this._k;
	  });
	
	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f = $defineProperty;
	  __webpack_require__(49).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(43).f = $propertyIsEnumerable;
	  __webpack_require__(42).f = $getOwnPropertySymbols;
	
	  if (DESCRIPTORS && !__webpack_require__(28)) {
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	
	  wksExt.f = function (name) {
	    return wrap(wks(name));
	  };
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });
	
	for (var es6Symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);
	
	for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);
	
	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function (key) {
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(sym) {
	    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
	    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
	  },
	  useSetter: function () { setter = true; },
	  useSimple: function () { setter = false; }
	});
	
	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});
	
	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it) {
	    if (it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
	    var args = [it];
	    var i = 1;
	    var replacer, $replacer;
	    while (arguments.length > i) args.push(arguments[i++]);
	    replacer = args[1];
	    if (typeof replacer == 'function') $replacer = replacer;
	    if ($replacer || !isArray(replacer)) replacer = function (key, value) {
	      if ($replacer) value = $replacer.call(this, key, value);
	      if (!isSymbol(value)) return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});
	
	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(10)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 4 */
/***/ (function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self
	  // eslint-disable-next-line no-new-func
	  : Function('return this')();
	if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 5 */
/***/ (function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function (it, key) {
	  return hasOwnProperty.call(it, key);
	};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(7)(function () {
	  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
	});


/***/ }),
/* 7 */
/***/ (function(module, exports) {

	module.exports = function (exec) {
	  try {
	    return !!exec();
	  } catch (e) {
	    return true;
	  }
	};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(4);
	var core = __webpack_require__(9);
	var hide = __webpack_require__(10);
	var redefine = __webpack_require__(18);
	var ctx = __webpack_require__(20);
	var PROTOTYPE = 'prototype';
	
	var $export = function (type, name, source) {
	  var IS_FORCED = type & $export.F;
	  var IS_GLOBAL = type & $export.G;
	  var IS_STATIC = type & $export.S;
	  var IS_PROTO = type & $export.P;
	  var IS_BIND = type & $export.B;
	  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
	  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
	  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
	  var key, own, out, exp;
	  if (IS_GLOBAL) source = name;
	  for (key in source) {
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    // export native or passed
	    out = (own ? target : source)[key];
	    // bind timers to global for call from export context
	    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // extend global
	    if (target) redefine(target, key, out, type & $export.U);
	    // export
	    if (exports[key] != out) hide(exports, key, exp);
	    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
	  }
	};
	global.core = core;
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library`
	module.exports = $export;


/***/ }),
/* 9 */
/***/ (function(module, exports) {

	var core = module.exports = { version: '2.5.1' };
	if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	var dP = __webpack_require__(11);
	var createDesc = __webpack_require__(17);
	module.exports = __webpack_require__(6) ? function (object, key, value) {
	  return dP.f(object, key, createDesc(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(12);
	var IE8_DOM_DEFINE = __webpack_require__(14);
	var toPrimitive = __webpack_require__(16);
	var dP = Object.defineProperty;
	
	exports.f = __webpack_require__(6) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if (IE8_DOM_DEFINE) try {
	    return dP(O, P, Attributes);
	  } catch (e) { /* empty */ }
	  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
	};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(13);
	module.exports = function (it) {
	  if (!isObject(it)) throw TypeError(it + ' is not an object!');
	  return it;
	};


/***/ }),
/* 13 */
/***/ (function(module, exports) {

	module.exports = function (it) {
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(6) && !__webpack_require__(7)(function () {
	  return Object.defineProperty(__webpack_require__(15)('div'), 'a', { get: function () { return 7; } }).a != 7;
	});


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(13);
	var document = __webpack_require__(4).document;
	// typeof document.createElement is 'object' in old IE
	var is = isObject(document) && isObject(document.createElement);
	module.exports = function (it) {
	  return is ? document.createElement(it) : {};
	};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(13);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function (it, S) {
	  if (!isObject(it)) return it;
	  var fn, val;
	  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
	  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
	  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
	  throw TypeError("Can't convert object to primitive value");
	};


/***/ }),
/* 17 */
/***/ (function(module, exports) {

	module.exports = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(4);
	var hide = __webpack_require__(10);
	var has = __webpack_require__(5);
	var SRC = __webpack_require__(19)('src');
	var TO_STRING = 'toString';
	var $toString = Function[TO_STRING];
	var TPL = ('' + $toString).split(TO_STRING);
	
	__webpack_require__(9).inspectSource = function (it) {
	  return $toString.call(it);
	};
	
	(module.exports = function (O, key, val, safe) {
	  var isFunction = typeof val == 'function';
	  if (isFunction) has(val, 'name') || hide(val, 'name', key);
	  if (O[key] === val) return;
	  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
	  if (O === global) {
	    O[key] = val;
	  } else if (!safe) {
	    delete O[key];
	    hide(O, key, val);
	  } else if (O[key]) {
	    O[key] = val;
	  } else {
	    hide(O, key, val);
	  }
	// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
	})(Function.prototype, TO_STRING, function toString() {
	  return typeof this == 'function' && this[SRC] || $toString.call(this);
	});


/***/ }),
/* 19 */
/***/ (function(module, exports) {

	var id = 0;
	var px = Math.random();
	module.exports = function (key) {
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(21);
	module.exports = function (fn, that, length) {
	  aFunction(fn);
	  if (that === undefined) return fn;
	  switch (length) {
	    case 1: return function (a) {
	      return fn.call(that, a);
	    };
	    case 2: return function (a, b) {
	      return fn.call(that, a, b);
	    };
	    case 3: return function (a, b, c) {
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function (/* ...args */) {
	    return fn.apply(that, arguments);
	  };
	};


/***/ }),
/* 21 */
/***/ (function(module, exports) {

	module.exports = function (it) {
	  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
	  return it;
	};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	var META = __webpack_require__(19)('meta');
	var isObject = __webpack_require__(13);
	var has = __webpack_require__(5);
	var setDesc = __webpack_require__(11).f;
	var id = 0;
	var isExtensible = Object.isExtensible || function () {
	  return true;
	};
	var FREEZE = !__webpack_require__(7)(function () {
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function (it) {
	  setDesc(it, META, { value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  } });
	};
	var fastKey = function (it, create) {
	  // return primitive with prefix
	  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if (!has(it, META)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible(it)) return 'F';
	    // not necessary to add metadata
	    if (!create) return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function (it, create) {
	  if (!has(it, META)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible(it)) return true;
	    // not necessary to add metadata
	    if (!create) return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function (it) {
	  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY: META,
	  NEED: false,
	  fastKey: fastKey,
	  getWeak: getWeak,
	  onFreeze: onFreeze
	};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(4);
	var SHARED = '__core-js_shared__';
	var store = global[SHARED] || (global[SHARED] = {});
	module.exports = function (key) {
	  return store[key] || (store[key] = {});
	};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	var def = __webpack_require__(11).f;
	var has = __webpack_require__(5);
	var TAG = __webpack_require__(25)('toStringTag');
	
	module.exports = function (it, tag, stat) {
	  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
	};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	var store = __webpack_require__(23)('wks');
	var uid = __webpack_require__(19);
	var Symbol = __webpack_require__(4).Symbol;
	var USE_SYMBOL = typeof Symbol == 'function';
	
	var $exports = module.exports = function (name) {
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};
	
	$exports.store = store;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(25);


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(4);
	var core = __webpack_require__(9);
	var LIBRARY = __webpack_require__(28);
	var wksExt = __webpack_require__(26);
	var defineProperty = __webpack_require__(11).f;
	module.exports = function (name) {
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
	};


/***/ }),
/* 28 */
/***/ (function(module, exports) {

	module.exports = false;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(30);
	var gOPS = __webpack_require__(42);
	var pIE = __webpack_require__(43);
	module.exports = function (it) {
	  var result = getKeys(it);
	  var getSymbols = gOPS.f;
	  if (getSymbols) {
	    var symbols = getSymbols(it);
	    var isEnum = pIE.f;
	    var i = 0;
	    var key;
	    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
	  } return result;
	};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys = __webpack_require__(31);
	var enumBugKeys = __webpack_require__(41);
	
	module.exports = Object.keys || function keys(O) {
	  return $keys(O, enumBugKeys);
	};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	var has = __webpack_require__(5);
	var toIObject = __webpack_require__(32);
	var arrayIndexOf = __webpack_require__(36)(false);
	var IE_PROTO = __webpack_require__(40)('IE_PROTO');
	
	module.exports = function (object, names) {
	  var O = toIObject(object);
	  var i = 0;
	  var result = [];
	  var key;
	  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while (names.length > i) if (has(O, key = names[i++])) {
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(33);
	var defined = __webpack_require__(35);
	module.exports = function (it) {
	  return IObject(defined(it));
	};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(34);
	// eslint-disable-next-line no-prototype-builtins
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};


/***/ }),
/* 34 */
/***/ (function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function (it) {
	  return toString.call(it).slice(8, -1);
	};


/***/ }),
/* 35 */
/***/ (function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function (it) {
	  if (it == undefined) throw TypeError("Can't call method on  " + it);
	  return it;
	};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(32);
	var toLength = __webpack_require__(37);
	var toAbsoluteIndex = __webpack_require__(39);
	module.exports = function (IS_INCLUDES) {
	  return function ($this, el, fromIndex) {
	    var O = toIObject($this);
	    var length = toLength(O.length);
	    var index = toAbsoluteIndex(fromIndex, length);
	    var value;
	    // Array#includes uses SameValueZero equality algorithm
	    // eslint-disable-next-line no-self-compare
	    if (IS_INCLUDES && el != el) while (length > index) {
	      value = O[index++];
	      // eslint-disable-next-line no-self-compare
	      if (value != value) return true;
	    // Array#indexOf ignores holes, Array#includes - not
	    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
	      if (O[index] === el) return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(38);
	var min = Math.min;
	module.exports = function (it) {
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};


/***/ }),
/* 38 */
/***/ (function(module, exports) {

	// 7.1.4 ToInteger
	var ceil = Math.ceil;
	var floor = Math.floor;
	module.exports = function (it) {
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(38);
	var max = Math.max;
	var min = Math.min;
	module.exports = function (index, length) {
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(23)('keys');
	var uid = __webpack_require__(19);
	module.exports = function (key) {
	  return shared[key] || (shared[key] = uid(key));
	};


/***/ }),
/* 41 */
/***/ (function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');


/***/ }),
/* 42 */
/***/ (function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 43 */
/***/ (function(module, exports) {

	exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(34);
	module.exports = Array.isArray || function isArray(arg) {
	  return cof(arg) == 'Array';
	};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject = __webpack_require__(12);
	var dPs = __webpack_require__(46);
	var enumBugKeys = __webpack_require__(41);
	var IE_PROTO = __webpack_require__(40)('IE_PROTO');
	var Empty = function () { /* empty */ };
	var PROTOTYPE = 'prototype';
	
	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function () {
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(15)('iframe');
	  var i = enumBugKeys.length;
	  var lt = '<';
	  var gt = '>';
	  var iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(47).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};
	
	module.exports = Object.create || function create(O, Properties) {
	  var result;
	  if (O !== null) {
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty();
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

	var dP = __webpack_require__(11);
	var anObject = __webpack_require__(12);
	var getKeys = __webpack_require__(30);
	
	module.exports = __webpack_require__(6) ? Object.defineProperties : function defineProperties(O, Properties) {
	  anObject(O);
	  var keys = getKeys(Properties);
	  var length = keys.length;
	  var i = 0;
	  var P;
	  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	var document = __webpack_require__(4).document;
	module.exports = document && document.documentElement;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(32);
	var gOPN = __webpack_require__(49).f;
	var toString = {}.toString;
	
	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];
	
	var getWindowNames = function (it) {
	  try {
	    return gOPN(it);
	  } catch (e) {
	    return windowNames.slice();
	  }
	};
	
	module.exports.f = function getOwnPropertyNames(it) {
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys = __webpack_require__(31);
	var hiddenKeys = __webpack_require__(41).concat('length', 'prototype');
	
	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
	  return $keys(O, hiddenKeys);
	};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

	var pIE = __webpack_require__(43);
	var createDesc = __webpack_require__(17);
	var toIObject = __webpack_require__(32);
	var toPrimitive = __webpack_require__(16);
	var has = __webpack_require__(5);
	var IE8_DOM_DEFINE = __webpack_require__(14);
	var gOPD = Object.getOwnPropertyDescriptor;
	
	exports.f = __webpack_require__(6) ? gOPD : function getOwnPropertyDescriptor(O, P) {
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if (IE8_DOM_DEFINE) try {
	    return gOPD(O, P);
	  } catch (e) { /* empty */ }
	  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
	};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', { create: __webpack_require__(45) });


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(6), 'Object', { defineProperty: __webpack_require__(11).f });


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);
	// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
	$export($export.S + $export.F * !__webpack_require__(6), 'Object', { defineProperties: __webpack_require__(46) });


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	var toIObject = __webpack_require__(32);
	var $getOwnPropertyDescriptor = __webpack_require__(50).f;
	
	__webpack_require__(55)('getOwnPropertyDescriptor', function () {
	  return function getOwnPropertyDescriptor(it, key) {
	    return $getOwnPropertyDescriptor(toIObject(it), key);
	  };
	});


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(8);
	var core = __webpack_require__(9);
	var fails = __webpack_require__(7);
	module.exports = function (KEY, exec) {
	  var fn = (core.Object || {})[KEY] || Object[KEY];
	  var exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
	};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject = __webpack_require__(57);
	var $getPrototypeOf = __webpack_require__(58);
	
	__webpack_require__(55)('getPrototypeOf', function () {
	  return function getPrototypeOf(it) {
	    return $getPrototypeOf(toObject(it));
	  };
	});


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(35);
	module.exports = function (it) {
	  return Object(defined(it));
	};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has = __webpack_require__(5);
	var toObject = __webpack_require__(57);
	var IE_PROTO = __webpack_require__(40)('IE_PROTO');
	var ObjectProto = Object.prototype;
	
	module.exports = Object.getPrototypeOf || function (O) {
	  O = toObject(O);
	  if (has(O, IE_PROTO)) return O[IE_PROTO];
	  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(57);
	var $keys = __webpack_require__(30);
	
	__webpack_require__(55)('keys', function () {
	  return function keys(it) {
	    return $keys(toObject(it));
	  };
	});


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.7 Object.getOwnPropertyNames(O)
	__webpack_require__(55)('getOwnPropertyNames', function () {
	  return __webpack_require__(48).f;
	});


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.5 Object.freeze(O)
	var isObject = __webpack_require__(13);
	var meta = __webpack_require__(22).onFreeze;
	
	__webpack_require__(55)('freeze', function ($freeze) {
	  return function freeze(it) {
	    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
	  };
	});


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.17 Object.seal(O)
	var isObject = __webpack_require__(13);
	var meta = __webpack_require__(22).onFreeze;
	
	__webpack_require__(55)('seal', function ($seal) {
	  return function seal(it) {
	    return $seal && isObject(it) ? $seal(meta(it)) : it;
	  };
	});


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.15 Object.preventExtensions(O)
	var isObject = __webpack_require__(13);
	var meta = __webpack_require__(22).onFreeze;
	
	__webpack_require__(55)('preventExtensions', function ($preventExtensions) {
	  return function preventExtensions(it) {
	    return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
	  };
	});


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.12 Object.isFrozen(O)
	var isObject = __webpack_require__(13);
	
	__webpack_require__(55)('isFrozen', function ($isFrozen) {
	  return function isFrozen(it) {
	    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
	  };
	});


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.13 Object.isSealed(O)
	var isObject = __webpack_require__(13);
	
	__webpack_require__(55)('isSealed', function ($isSealed) {
	  return function isSealed(it) {
	    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
	  };
	});


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.11 Object.isExtensible(O)
	var isObject = __webpack_require__(13);
	
	__webpack_require__(55)('isExtensible', function ($isExtensible) {
	  return function isExtensible(it) {
	    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
	  };
	});


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(8);
	
	$export($export.S + $export.F, 'Object', { assign: __webpack_require__(68) });


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys = __webpack_require__(30);
	var gOPS = __webpack_require__(42);
	var pIE = __webpack_require__(43);
	var toObject = __webpack_require__(57);
	var IObject = __webpack_require__(33);
	var $assign = Object.assign;
	
	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(7)(function () {
	  var A = {};
	  var B = {};
	  // eslint-disable-next-line no-undef
	  var S = Symbol();
	  var K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function (k) { B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
	  var T = toObject(target);
	  var aLen = arguments.length;
	  var index = 1;
	  var getSymbols = gOPS.f;
	  var isEnum = pIE.f;
	  while (aLen > index) {
	    var S = IObject(arguments[index++]);
	    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
	    var length = keys.length;
	    var j = 0;
	    var key;
	    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
	  } return T;
	} : $assign;


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.3.10 Object.is(value1, value2)
	var $export = __webpack_require__(8);
	$export($export.S, 'Object', { is: __webpack_require__(70) });


/***/ }),
/* 70 */
/***/ (function(module, exports) {

	// 7.2.9 SameValue(x, y)
	module.exports = Object.is || function is(x, y) {
	  // eslint-disable-next-line no-self-compare
	  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
	};


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(8);
	$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(72).set });


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(13);
	var anObject = __webpack_require__(12);
	var check = function (O, proto) {
	  anObject(O);
	  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function (test, buggy, set) {
	      try {
	        set = __webpack_require__(20)(Function.call, __webpack_require__(50).f(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch (e) { buggy = true; }
	      return function setPrototypeOf(O, proto) {
	        check(O, proto);
	        if (buggy) O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.3.6 Object.prototype.toString()
	var classof = __webpack_require__(74);
	var test = {};
	test[__webpack_require__(25)('toStringTag')] = 'z';
	if (test + '' != '[object z]') {
	  __webpack_require__(18)(Object.prototype, 'toString', function toString() {
	    return '[object ' + classof(this) + ']';
	  }, true);
	}


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(34);
	var TAG = __webpack_require__(25)('toStringTag');
	// ES3 wrong here
	var ARG = cof(function () { return arguments; }()) == 'Arguments';
	
	// fallback for IE11 Script Access Denied error
	var tryGet = function (it, key) {
	  try {
	    return it[key];
	  } catch (e) { /* empty */ }
	};
	
	module.exports = function (it) {
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
	var $export = __webpack_require__(8);
	
	$export($export.P, 'Function', { bind: __webpack_require__(76) });


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var aFunction = __webpack_require__(21);
	var isObject = __webpack_require__(13);
	var invoke = __webpack_require__(77);
	var arraySlice = [].slice;
	var factories = {};
	
	var construct = function (F, len, args) {
	  if (!(len in factories)) {
	    for (var n = [], i = 0; i < len; i++) n[i] = 'a[' + i + ']';
	    // eslint-disable-next-line no-new-func
	    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
	  } return factories[len](F, args);
	};
	
	module.exports = Function.bind || function bind(that /* , ...args */) {
	  var fn = aFunction(this);
	  var partArgs = arraySlice.call(arguments, 1);
	  var bound = function (/* args... */) {
	    var args = partArgs.concat(arraySlice.call(arguments));
	    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
	  };
	  if (isObject(fn.prototype)) bound.prototype = fn.prototype;
	  return bound;
	};


/***/ }),
/* 77 */
/***/ (function(module, exports) {

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function (fn, args, that) {
	  var un = that === undefined;
	  switch (args.length) {
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	  } return fn.apply(that, args);
	};


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

	var dP = __webpack_require__(11).f;
	var FProto = Function.prototype;
	var nameRE = /^\s*function ([^ (]*)/;
	var NAME = 'name';
	
	// 19.2.4.2 name
	NAME in FProto || __webpack_require__(6) && dP(FProto, NAME, {
	  configurable: true,
	  get: function () {
	    try {
	      return ('' + this).match(nameRE)[1];
	    } catch (e) {
	      return '';
	    }
	  }
	});


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var isObject = __webpack_require__(13);
	var getPrototypeOf = __webpack_require__(58);
	var HAS_INSTANCE = __webpack_require__(25)('hasInstance');
	var FunctionProto = Function.prototype;
	// 19.2.3.6 Function.prototype[@@hasInstance](V)
	if (!(HAS_INSTANCE in FunctionProto)) __webpack_require__(11).f(FunctionProto, HAS_INSTANCE, { value: function (O) {
	  if (typeof this != 'function' || !isObject(O)) return false;
	  if (!isObject(this.prototype)) return O instanceof this;
	  // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
	  while (O = getPrototypeOf(O)) if (this.prototype === O) return true;
	  return false;
	} });


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);
	var $parseInt = __webpack_require__(81);
	// 18.2.5 parseInt(string, radix)
	$export($export.G + $export.F * (parseInt != $parseInt), { parseInt: $parseInt });


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

	var $parseInt = __webpack_require__(4).parseInt;
	var $trim = __webpack_require__(82).trim;
	var ws = __webpack_require__(83);
	var hex = /^[-+]?0[xX]/;
	
	module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix) {
	  var string = $trim(String(str), 3);
	  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
	} : $parseInt;


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);
	var defined = __webpack_require__(35);
	var fails = __webpack_require__(7);
	var spaces = __webpack_require__(83);
	var space = '[' + spaces + ']';
	var non = '\u200b\u0085';
	var ltrim = RegExp('^' + space + space + '*');
	var rtrim = RegExp(space + space + '*$');
	
	var exporter = function (KEY, exec, ALIAS) {
	  var exp = {};
	  var FORCE = fails(function () {
	    return !!spaces[KEY]() || non[KEY]() != non;
	  });
	  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
	  if (ALIAS) exp[ALIAS] = fn;
	  $export($export.P + $export.F * FORCE, 'String', exp);
	};
	
	// 1 -> String#trimLeft
	// 2 -> String#trimRight
	// 3 -> String#trim
	var trim = exporter.trim = function (string, TYPE) {
	  string = String(defined(string));
	  if (TYPE & 1) string = string.replace(ltrim, '');
	  if (TYPE & 2) string = string.replace(rtrim, '');
	  return string;
	};
	
	module.exports = exporter;


/***/ }),
/* 83 */
/***/ (function(module, exports) {

	module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
	  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);
	var $parseFloat = __webpack_require__(85);
	// 18.2.4 parseFloat(string)
	$export($export.G + $export.F * (parseFloat != $parseFloat), { parseFloat: $parseFloat });


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

	var $parseFloat = __webpack_require__(4).parseFloat;
	var $trim = __webpack_require__(82).trim;
	
	module.exports = 1 / $parseFloat(__webpack_require__(83) + '-0') !== -Infinity ? function parseFloat(str) {
	  var string = $trim(String(str), 3);
	  var result = $parseFloat(string);
	  return result === 0 && string.charAt(0) == '-' ? -0 : result;
	} : $parseFloat;


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var global = __webpack_require__(4);
	var has = __webpack_require__(5);
	var cof = __webpack_require__(34);
	var inheritIfRequired = __webpack_require__(87);
	var toPrimitive = __webpack_require__(16);
	var fails = __webpack_require__(7);
	var gOPN = __webpack_require__(49).f;
	var gOPD = __webpack_require__(50).f;
	var dP = __webpack_require__(11).f;
	var $trim = __webpack_require__(82).trim;
	var NUMBER = 'Number';
	var $Number = global[NUMBER];
	var Base = $Number;
	var proto = $Number.prototype;
	// Opera ~12 has broken Object#toString
	var BROKEN_COF = cof(__webpack_require__(45)(proto)) == NUMBER;
	var TRIM = 'trim' in String.prototype;
	
	// 7.1.3 ToNumber(argument)
	var toNumber = function (argument) {
	  var it = toPrimitive(argument, false);
	  if (typeof it == 'string' && it.length > 2) {
	    it = TRIM ? it.trim() : $trim(it, 3);
	    var first = it.charCodeAt(0);
	    var third, radix, maxCode;
	    if (first === 43 || first === 45) {
	      third = it.charCodeAt(2);
	      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
	    } else if (first === 48) {
	      switch (it.charCodeAt(1)) {
	        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
	        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
	        default: return +it;
	      }
	      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
	        code = digits.charCodeAt(i);
	        // parseInt parses a string to a first unavailable symbol
	        // but ToNumber should return NaN if a string contains unavailable symbols
	        if (code < 48 || code > maxCode) return NaN;
	      } return parseInt(digits, radix);
	    }
	  } return +it;
	};
	
	if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
	  $Number = function Number(value) {
	    var it = arguments.length < 1 ? 0 : value;
	    var that = this;
	    return that instanceof $Number
	      // check on 1..constructor(foo) case
	      && (BROKEN_COF ? fails(function () { proto.valueOf.call(that); }) : cof(that) != NUMBER)
	        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
	  };
	  for (var keys = __webpack_require__(6) ? gOPN(Base) : (
	    // ES3:
	    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
	    // ES6 (in case, if modules with ES6 Number statics required before):
	    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
	    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
	  ).split(','), j = 0, key; keys.length > j; j++) {
	    if (has(Base, key = keys[j]) && !has($Number, key)) {
	      dP($Number, key, gOPD(Base, key));
	    }
	  }
	  $Number.prototype = proto;
	  proto.constructor = $Number;
	  __webpack_require__(18)(global, NUMBER, $Number);
	}


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(13);
	var setPrototypeOf = __webpack_require__(72).set;
	module.exports = function (that, target, C) {
	  var S = target.constructor;
	  var P;
	  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
	    setPrototypeOf(that, P);
	  } return that;
	};


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8);
	var toInteger = __webpack_require__(38);
	var aNumberValue = __webpack_require__(89);
	var repeat = __webpack_require__(90);
	var $toFixed = 1.0.toFixed;
	var floor = Math.floor;
	var data = [0, 0, 0, 0, 0, 0];
	var ERROR = 'Number.toFixed: incorrect invocation!';
	var ZERO = '0';
	
	var multiply = function (n, c) {
	  var i = -1;
	  var c2 = c;
	  while (++i < 6) {
	    c2 += n * data[i];
	    data[i] = c2 % 1e7;
	    c2 = floor(c2 / 1e7);
	  }
	};
	var divide = function (n) {
	  var i = 6;
	  var c = 0;
	  while (--i >= 0) {
	    c += data[i];
	    data[i] = floor(c / n);
	    c = (c % n) * 1e7;
	  }
	};
	var numToString = function () {
	  var i = 6;
	  var s = '';
	  while (--i >= 0) {
	    if (s !== '' || i === 0 || data[i] !== 0) {
	      var t = String(data[i]);
	      s = s === '' ? t : s + repeat.call(ZERO, 7 - t.length) + t;
	    }
	  } return s;
	};
	var pow = function (x, n, acc) {
	  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
	};
	var log = function (x) {
	  var n = 0;
	  var x2 = x;
	  while (x2 >= 4096) {
	    n += 12;
	    x2 /= 4096;
	  }
	  while (x2 >= 2) {
	    n += 1;
	    x2 /= 2;
	  } return n;
	};
	
	$export($export.P + $export.F * (!!$toFixed && (
	  0.00008.toFixed(3) !== '0.000' ||
	  0.9.toFixed(0) !== '1' ||
	  1.255.toFixed(2) !== '1.25' ||
	  1000000000000000128.0.toFixed(0) !== '1000000000000000128'
	) || !__webpack_require__(7)(function () {
	  // V8 ~ Android 4.3-
	  $toFixed.call({});
	})), 'Number', {
	  toFixed: function toFixed(fractionDigits) {
	    var x = aNumberValue(this, ERROR);
	    var f = toInteger(fractionDigits);
	    var s = '';
	    var m = ZERO;
	    var e, z, j, k;
	    if (f < 0 || f > 20) throw RangeError(ERROR);
	    // eslint-disable-next-line no-self-compare
	    if (x != x) return 'NaN';
	    if (x <= -1e21 || x >= 1e21) return String(x);
	    if (x < 0) {
	      s = '-';
	      x = -x;
	    }
	    if (x > 1e-21) {
	      e = log(x * pow(2, 69, 1)) - 69;
	      z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
	      z *= 0x10000000000000;
	      e = 52 - e;
	      if (e > 0) {
	        multiply(0, z);
	        j = f;
	        while (j >= 7) {
	          multiply(1e7, 0);
	          j -= 7;
	        }
	        multiply(pow(10, j, 1), 0);
	        j = e - 1;
	        while (j >= 23) {
	          divide(1 << 23);
	          j -= 23;
	        }
	        divide(1 << j);
	        multiply(1, 1);
	        divide(2);
	        m = numToString();
	      } else {
	        multiply(0, z);
	        multiply(1 << -e, 0);
	        m = numToString() + repeat.call(ZERO, f);
	      }
	    }
	    if (f > 0) {
	      k = m.length;
	      m = s + (k <= f ? '0.' + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));
	    } else {
	      m = s + m;
	    } return m;
	  }
	});


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

	var cof = __webpack_require__(34);
	module.exports = function (it, msg) {
	  if (typeof it != 'number' && cof(it) != 'Number') throw TypeError(msg);
	  return +it;
	};


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var toInteger = __webpack_require__(38);
	var defined = __webpack_require__(35);
	
	module.exports = function repeat(count) {
	  var str = String(defined(this));
	  var res = '';
	  var n = toInteger(count);
	  if (n < 0 || n == Infinity) throw RangeError("Count can't be negative");
	  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) res += str;
	  return res;
	};


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8);
	var $fails = __webpack_require__(7);
	var aNumberValue = __webpack_require__(89);
	var $toPrecision = 1.0.toPrecision;
	
	$export($export.P + $export.F * ($fails(function () {
	  // IE7-
	  return $toPrecision.call(1, undefined) !== '1';
	}) || !$fails(function () {
	  // V8 ~ Android 4.3-
	  $toPrecision.call({});
	})), 'Number', {
	  toPrecision: function toPrecision(precision) {
	    var that = aNumberValue(this, 'Number#toPrecision: incorrect invocation!');
	    return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision);
	  }
	});


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.1.2.1 Number.EPSILON
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Number', { EPSILON: Math.pow(2, -52) });


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.1.2.2 Number.isFinite(number)
	var $export = __webpack_require__(8);
	var _isFinite = __webpack_require__(4).isFinite;
	
	$export($export.S, 'Number', {
	  isFinite: function isFinite(it) {
	    return typeof it == 'number' && _isFinite(it);
	  }
	});


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Number', { isInteger: __webpack_require__(95) });


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var isObject = __webpack_require__(13);
	var floor = Math.floor;
	module.exports = function isInteger(it) {
	  return !isObject(it) && isFinite(it) && floor(it) === it;
	};


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.1.2.4 Number.isNaN(number)
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Number', {
	  isNaN: function isNaN(number) {
	    // eslint-disable-next-line no-self-compare
	    return number != number;
	  }
	});


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.1.2.5 Number.isSafeInteger(number)
	var $export = __webpack_require__(8);
	var isInteger = __webpack_require__(95);
	var abs = Math.abs;
	
	$export($export.S, 'Number', {
	  isSafeInteger: function isSafeInteger(number) {
	    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
	  }
	});


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.1.2.6 Number.MAX_SAFE_INTEGER
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Number', { MAX_SAFE_INTEGER: 0x1fffffffffffff });


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.1.2.10 Number.MIN_SAFE_INTEGER
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Number', { MIN_SAFE_INTEGER: -0x1fffffffffffff });


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);
	var $parseFloat = __webpack_require__(85);
	// 20.1.2.12 Number.parseFloat(string)
	$export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', { parseFloat: $parseFloat });


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);
	var $parseInt = __webpack_require__(81);
	// 20.1.2.13 Number.parseInt(string, radix)
	$export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', { parseInt: $parseInt });


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.3 Math.acosh(x)
	var $export = __webpack_require__(8);
	var log1p = __webpack_require__(103);
	var sqrt = Math.sqrt;
	var $acosh = Math.acosh;
	
	$export($export.S + $export.F * !($acosh
	  // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
	  && Math.floor($acosh(Number.MAX_VALUE)) == 710
	  // Tor Browser bug: Math.acosh(Infinity) -> NaN
	  && $acosh(Infinity) == Infinity
	), 'Math', {
	  acosh: function acosh(x) {
	    return (x = +x) < 1 ? NaN : x > 94906265.62425156
	      ? Math.log(x) + Math.LN2
	      : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
	  }
	});


/***/ }),
/* 103 */
/***/ (function(module, exports) {

	// 20.2.2.20 Math.log1p(x)
	module.exports = Math.log1p || function log1p(x) {
	  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
	};


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.5 Math.asinh(x)
	var $export = __webpack_require__(8);
	var $asinh = Math.asinh;
	
	function asinh(x) {
	  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
	}
	
	// Tor Browser bug: Math.asinh(0) -> -0
	$export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', { asinh: asinh });


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.7 Math.atanh(x)
	var $export = __webpack_require__(8);
	var $atanh = Math.atanh;
	
	// Tor Browser bug: Math.atanh(-0) -> 0
	$export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
	  atanh: function atanh(x) {
	    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
	  }
	});


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.9 Math.cbrt(x)
	var $export = __webpack_require__(8);
	var sign = __webpack_require__(107);
	
	$export($export.S, 'Math', {
	  cbrt: function cbrt(x) {
	    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
	  }
	});


/***/ }),
/* 107 */
/***/ (function(module, exports) {

	// 20.2.2.28 Math.sign(x)
	module.exports = Math.sign || function sign(x) {
	  // eslint-disable-next-line no-self-compare
	  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
	};


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.11 Math.clz32(x)
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Math', {
	  clz32: function clz32(x) {
	    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
	  }
	});


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.12 Math.cosh(x)
	var $export = __webpack_require__(8);
	var exp = Math.exp;
	
	$export($export.S, 'Math', {
	  cosh: function cosh(x) {
	    return (exp(x = +x) + exp(-x)) / 2;
	  }
	});


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.14 Math.expm1(x)
	var $export = __webpack_require__(8);
	var $expm1 = __webpack_require__(111);
	
	$export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', { expm1: $expm1 });


/***/ }),
/* 111 */
/***/ (function(module, exports) {

	// 20.2.2.14 Math.expm1(x)
	var $expm1 = Math.expm1;
	module.exports = (!$expm1
	  // Old FF bug
	  || $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168
	  // Tor Browser bug
	  || $expm1(-2e-17) != -2e-17
	) ? function expm1(x) {
	  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
	} : $expm1;


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.16 Math.fround(x)
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Math', { fround: __webpack_require__(113) });


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.16 Math.fround(x)
	var sign = __webpack_require__(107);
	var pow = Math.pow;
	var EPSILON = pow(2, -52);
	var EPSILON32 = pow(2, -23);
	var MAX32 = pow(2, 127) * (2 - EPSILON32);
	var MIN32 = pow(2, -126);
	
	var roundTiesToEven = function (n) {
	  return n + 1 / EPSILON - 1 / EPSILON;
	};
	
	module.exports = Math.fround || function fround(x) {
	  var $abs = Math.abs(x);
	  var $sign = sign(x);
	  var a, result;
	  if ($abs < MIN32) return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
	  a = (1 + EPSILON32 / EPSILON) * $abs;
	  result = a - (a - $abs);
	  // eslint-disable-next-line no-self-compare
	  if (result > MAX32 || result != result) return $sign * Infinity;
	  return $sign * result;
	};


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
	var $export = __webpack_require__(8);
	var abs = Math.abs;
	
	$export($export.S, 'Math', {
	  hypot: function hypot(value1, value2) { // eslint-disable-line no-unused-vars
	    var sum = 0;
	    var i = 0;
	    var aLen = arguments.length;
	    var larg = 0;
	    var arg, div;
	    while (i < aLen) {
	      arg = abs(arguments[i++]);
	      if (larg < arg) {
	        div = larg / arg;
	        sum = sum * div * div + 1;
	        larg = arg;
	      } else if (arg > 0) {
	        div = arg / larg;
	        sum += div * div;
	      } else sum += arg;
	    }
	    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
	  }
	});


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.18 Math.imul(x, y)
	var $export = __webpack_require__(8);
	var $imul = Math.imul;
	
	// some WebKit versions fails with big numbers, some has wrong arity
	$export($export.S + $export.F * __webpack_require__(7)(function () {
	  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
	}), 'Math', {
	  imul: function imul(x, y) {
	    var UINT16 = 0xffff;
	    var xn = +x;
	    var yn = +y;
	    var xl = UINT16 & xn;
	    var yl = UINT16 & yn;
	    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
	  }
	});


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.21 Math.log10(x)
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Math', {
	  log10: function log10(x) {
	    return Math.log(x) * Math.LOG10E;
	  }
	});


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.20 Math.log1p(x)
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Math', { log1p: __webpack_require__(103) });


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.22 Math.log2(x)
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Math', {
	  log2: function log2(x) {
	    return Math.log(x) / Math.LN2;
	  }
	});


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.28 Math.sign(x)
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Math', { sign: __webpack_require__(107) });


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.30 Math.sinh(x)
	var $export = __webpack_require__(8);
	var expm1 = __webpack_require__(111);
	var exp = Math.exp;
	
	// V8 near Chromium 38 has a problem with very small numbers
	$export($export.S + $export.F * __webpack_require__(7)(function () {
	  return !Math.sinh(-2e-17) != -2e-17;
	}), 'Math', {
	  sinh: function sinh(x) {
	    return Math.abs(x = +x) < 1
	      ? (expm1(x) - expm1(-x)) / 2
	      : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
	  }
	});


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.33 Math.tanh(x)
	var $export = __webpack_require__(8);
	var expm1 = __webpack_require__(111);
	var exp = Math.exp;
	
	$export($export.S, 'Math', {
	  tanh: function tanh(x) {
	    var a = expm1(x = +x);
	    var b = expm1(-x);
	    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
	  }
	});


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.34 Math.trunc(x)
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Math', {
	  trunc: function trunc(it) {
	    return (it > 0 ? Math.floor : Math.ceil)(it);
	  }
	});


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);
	var toAbsoluteIndex = __webpack_require__(39);
	var fromCharCode = String.fromCharCode;
	var $fromCodePoint = String.fromCodePoint;
	
	// length should be 1, old FF problem
	$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
	  // 21.1.2.2 String.fromCodePoint(...codePoints)
	  fromCodePoint: function fromCodePoint(x) { // eslint-disable-line no-unused-vars
	    var res = [];
	    var aLen = arguments.length;
	    var i = 0;
	    var code;
	    while (aLen > i) {
	      code = +arguments[i++];
	      if (toAbsoluteIndex(code, 0x10ffff) !== code) throw RangeError(code + ' is not a valid code point');
	      res.push(code < 0x10000
	        ? fromCharCode(code)
	        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
	      );
	    } return res.join('');
	  }
	});


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);
	var toIObject = __webpack_require__(32);
	var toLength = __webpack_require__(37);
	
	$export($export.S, 'String', {
	  // 21.1.2.4 String.raw(callSite, ...substitutions)
	  raw: function raw(callSite) {
	    var tpl = toIObject(callSite.raw);
	    var len = toLength(tpl.length);
	    var aLen = arguments.length;
	    var res = [];
	    var i = 0;
	    while (len > i) {
	      res.push(String(tpl[i++]));
	      if (i < aLen) res.push(String(arguments[i]));
	    } return res.join('');
	  }
	});


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 21.1.3.25 String.prototype.trim()
	__webpack_require__(82)('trim', function ($trim) {
	  return function trim() {
	    return $trim(this, 3);
	  };
	});


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $at = __webpack_require__(127)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(128)(String, 'String', function (iterated) {
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function () {
	  var O = this._t;
	  var index = this._i;
	  var point;
	  if (index >= O.length) return { value: undefined, done: true };
	  point = $at(O, index);
	  this._i += point.length;
	  return { value: point, done: false };
	});


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(38);
	var defined = __webpack_require__(35);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function (TO_STRING) {
	  return function (that, pos) {
	    var s = String(defined(that));
	    var i = toInteger(pos);
	    var l = s.length;
	    var a, b;
	    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY = __webpack_require__(28);
	var $export = __webpack_require__(8);
	var redefine = __webpack_require__(18);
	var hide = __webpack_require__(10);
	var has = __webpack_require__(5);
	var Iterators = __webpack_require__(129);
	var $iterCreate = __webpack_require__(130);
	var setToStringTag = __webpack_require__(24);
	var getPrototypeOf = __webpack_require__(58);
	var ITERATOR = __webpack_require__(25)('iterator');
	var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
	var FF_ITERATOR = '@@iterator';
	var KEYS = 'keys';
	var VALUES = 'values';
	
	var returnThis = function () { return this; };
	
	module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function (kind) {
	    if (!BUGGY && kind in proto) return proto[kind];
	    switch (kind) {
	      case KEYS: return function keys() { return new Constructor(this, kind); };
	      case VALUES: return function values() { return new Constructor(this, kind); };
	    } return function entries() { return new Constructor(this, kind); };
	  };
	  var TAG = NAME + ' Iterator';
	  var DEF_VALUES = DEFAULT == VALUES;
	  var VALUES_BUG = false;
	  var proto = Base.prototype;
	  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
	  var $default = $native || getMethod(DEFAULT);
	  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
	  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
	  var methods, key, IteratorPrototype;
	  // Fix native
	  if ($anyNative) {
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
	    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if (DEF_VALUES && $native && $native.name !== VALUES) {
	    VALUES_BUG = true;
	    $default = function values() { return $native.call(this); };
	  }
	  // Define iterator
	  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG] = returnThis;
	  if (DEFAULT) {
	    methods = {
	      values: DEF_VALUES ? $default : getMethod(VALUES),
	      keys: IS_SET ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if (FORCED) for (key in methods) {
	      if (!(key in proto)) redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};


/***/ }),
/* 129 */
/***/ (function(module, exports) {

	module.exports = {};


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var create = __webpack_require__(45);
	var descriptor = __webpack_require__(17);
	var setToStringTag = __webpack_require__(24);
	var IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(10)(IteratorPrototype, __webpack_require__(25)('iterator'), function () { return this; });
	
	module.exports = function (Constructor, NAME, next) {
	  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
	  setToStringTag(Constructor, NAME + ' Iterator');
	};


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8);
	var $at = __webpack_require__(127)(false);
	$export($export.P, 'String', {
	  // 21.1.3.3 String.prototype.codePointAt(pos)
	  codePointAt: function codePointAt(pos) {
	    return $at(this, pos);
	  }
	});


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

	// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])
	'use strict';
	var $export = __webpack_require__(8);
	var toLength = __webpack_require__(37);
	var context = __webpack_require__(133);
	var ENDS_WITH = 'endsWith';
	var $endsWith = ''[ENDS_WITH];
	
	$export($export.P + $export.F * __webpack_require__(135)(ENDS_WITH), 'String', {
	  endsWith: function endsWith(searchString /* , endPosition = @length */) {
	    var that = context(this, searchString, ENDS_WITH);
	    var endPosition = arguments.length > 1 ? arguments[1] : undefined;
	    var len = toLength(that.length);
	    var end = endPosition === undefined ? len : Math.min(toLength(endPosition), len);
	    var search = String(searchString);
	    return $endsWith
	      ? $endsWith.call(that, search, end)
	      : that.slice(end - search.length, end) === search;
	  }
	});


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

	// helper for String#{startsWith, endsWith, includes}
	var isRegExp = __webpack_require__(134);
	var defined = __webpack_require__(35);
	
	module.exports = function (that, searchString, NAME) {
	  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
	  return String(defined(that));
	};


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.2.8 IsRegExp(argument)
	var isObject = __webpack_require__(13);
	var cof = __webpack_require__(34);
	var MATCH = __webpack_require__(25)('match');
	module.exports = function (it) {
	  var isRegExp;
	  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
	};


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

	var MATCH = __webpack_require__(25)('match');
	module.exports = function (KEY) {
	  var re = /./;
	  try {
	    '/./'[KEY](re);
	  } catch (e) {
	    try {
	      re[MATCH] = false;
	      return !'/./'[KEY](re);
	    } catch (f) { /* empty */ }
	  } return true;
	};


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

	// 21.1.3.7 String.prototype.includes(searchString, position = 0)
	'use strict';
	var $export = __webpack_require__(8);
	var context = __webpack_require__(133);
	var INCLUDES = 'includes';
	
	$export($export.P + $export.F * __webpack_require__(135)(INCLUDES), 'String', {
	  includes: function includes(searchString /* , position = 0 */) {
	    return !!~context(this, searchString, INCLUDES)
	      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);
	
	$export($export.P, 'String', {
	  // 21.1.3.13 String.prototype.repeat(count)
	  repeat: __webpack_require__(90)
	});


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

	// 21.1.3.18 String.prototype.startsWith(searchString [, position ])
	'use strict';
	var $export = __webpack_require__(8);
	var toLength = __webpack_require__(37);
	var context = __webpack_require__(133);
	var STARTS_WITH = 'startsWith';
	var $startsWith = ''[STARTS_WITH];
	
	$export($export.P + $export.F * __webpack_require__(135)(STARTS_WITH), 'String', {
	  startsWith: function startsWith(searchString /* , position = 0 */) {
	    var that = context(this, searchString, STARTS_WITH);
	    var index = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length));
	    var search = String(searchString);
	    return $startsWith
	      ? $startsWith.call(that, search, index)
	      : that.slice(index, index + search.length) === search;
	  }
	});


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.2 String.prototype.anchor(name)
	__webpack_require__(140)('anchor', function (createHTML) {
	  return function anchor(name) {
	    return createHTML(this, 'a', 'name', name);
	  };
	});


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);
	var fails = __webpack_require__(7);
	var defined = __webpack_require__(35);
	var quot = /"/g;
	// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
	var createHTML = function (string, tag, attribute, value) {
	  var S = String(defined(string));
	  var p1 = '<' + tag;
	  if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
	  return p1 + '>' + S + '</' + tag + '>';
	};
	module.exports = function (NAME, exec) {
	  var O = {};
	  O[NAME] = exec(createHTML);
	  $export($export.P + $export.F * fails(function () {
	    var test = ''[NAME]('"');
	    return test !== test.toLowerCase() || test.split('"').length > 3;
	  }), 'String', O);
	};


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.3 String.prototype.big()
	__webpack_require__(140)('big', function (createHTML) {
	  return function big() {
	    return createHTML(this, 'big', '', '');
	  };
	});


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.4 String.prototype.blink()
	__webpack_require__(140)('blink', function (createHTML) {
	  return function blink() {
	    return createHTML(this, 'blink', '', '');
	  };
	});


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.5 String.prototype.bold()
	__webpack_require__(140)('bold', function (createHTML) {
	  return function bold() {
	    return createHTML(this, 'b', '', '');
	  };
	});


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.6 String.prototype.fixed()
	__webpack_require__(140)('fixed', function (createHTML) {
	  return function fixed() {
	    return createHTML(this, 'tt', '', '');
	  };
	});


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.7 String.prototype.fontcolor(color)
	__webpack_require__(140)('fontcolor', function (createHTML) {
	  return function fontcolor(color) {
	    return createHTML(this, 'font', 'color', color);
	  };
	});


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.8 String.prototype.fontsize(size)
	__webpack_require__(140)('fontsize', function (createHTML) {
	  return function fontsize(size) {
	    return createHTML(this, 'font', 'size', size);
	  };
	});


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.9 String.prototype.italics()
	__webpack_require__(140)('italics', function (createHTML) {
	  return function italics() {
	    return createHTML(this, 'i', '', '');
	  };
	});


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.10 String.prototype.link(url)
	__webpack_require__(140)('link', function (createHTML) {
	  return function link(url) {
	    return createHTML(this, 'a', 'href', url);
	  };
	});


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.11 String.prototype.small()
	__webpack_require__(140)('small', function (createHTML) {
	  return function small() {
	    return createHTML(this, 'small', '', '');
	  };
	});


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.12 String.prototype.strike()
	__webpack_require__(140)('strike', function (createHTML) {
	  return function strike() {
	    return createHTML(this, 'strike', '', '');
	  };
	});


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.13 String.prototype.sub()
	__webpack_require__(140)('sub', function (createHTML) {
	  return function sub() {
	    return createHTML(this, 'sub', '', '');
	  };
	});


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.14 String.prototype.sup()
	__webpack_require__(140)('sup', function (createHTML) {
	  return function sup() {
	    return createHTML(this, 'sup', '', '');
	  };
	});


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.3.3.1 / 15.9.4.4 Date.now()
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Date', { now: function () { return new Date().getTime(); } });


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8);
	var toObject = __webpack_require__(57);
	var toPrimitive = __webpack_require__(16);
	
	$export($export.P + $export.F * __webpack_require__(7)(function () {
	  return new Date(NaN).toJSON() !== null
	    || Date.prototype.toJSON.call({ toISOString: function () { return 1; } }) !== 1;
	}), 'Date', {
	  // eslint-disable-next-line no-unused-vars
	  toJSON: function toJSON(key) {
	    var O = toObject(this);
	    var pv = toPrimitive(O);
	    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
	  }
	});


/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
	var $export = __webpack_require__(8);
	var toISOString = __webpack_require__(156);
	
	// PhantomJS / old WebKit has a broken implementations
	$export($export.P + $export.F * (Date.prototype.toISOString !== toISOString), 'Date', {
	  toISOString: toISOString
	});


/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
	var fails = __webpack_require__(7);
	var getTime = Date.prototype.getTime;
	var $toISOString = Date.prototype.toISOString;
	
	var lz = function (num) {
	  return num > 9 ? num : '0' + num;
	};
	
	// PhantomJS / old WebKit has a broken implementations
	module.exports = (fails(function () {
	  return $toISOString.call(new Date(-5e13 - 1)) != '0385-07-25T07:06:39.999Z';
	}) || !fails(function () {
	  $toISOString.call(new Date(NaN));
	})) ? function toISOString() {
	  if (!isFinite(getTime.call(this))) throw RangeError('Invalid time value');
	  var d = this;
	  var y = d.getUTCFullYear();
	  var m = d.getUTCMilliseconds();
	  var s = y < 0 ? '-' : y > 9999 ? '+' : '';
	  return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) +
	    '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) +
	    'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) +
	    ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
	} : $toISOString;


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

	var DateProto = Date.prototype;
	var INVALID_DATE = 'Invalid Date';
	var TO_STRING = 'toString';
	var $toString = DateProto[TO_STRING];
	var getTime = DateProto.getTime;
	if (new Date(NaN) + '' != INVALID_DATE) {
	  __webpack_require__(18)(DateProto, TO_STRING, function toString() {
	    var value = getTime.call(this);
	    // eslint-disable-next-line no-self-compare
	    return value === value ? $toString.call(this) : INVALID_DATE;
	  });
	}


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

	var TO_PRIMITIVE = __webpack_require__(25)('toPrimitive');
	var proto = Date.prototype;
	
	if (!(TO_PRIMITIVE in proto)) __webpack_require__(10)(proto, TO_PRIMITIVE, __webpack_require__(159));


/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var anObject = __webpack_require__(12);
	var toPrimitive = __webpack_require__(16);
	var NUMBER = 'number';
	
	module.exports = function (hint) {
	  if (hint !== 'string' && hint !== NUMBER && hint !== 'default') throw TypeError('Incorrect hint');
	  return toPrimitive(anObject(this), hint != NUMBER);
	};


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

	// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Array', { isArray: __webpack_require__(44) });


/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var ctx = __webpack_require__(20);
	var $export = __webpack_require__(8);
	var toObject = __webpack_require__(57);
	var call = __webpack_require__(162);
	var isArrayIter = __webpack_require__(163);
	var toLength = __webpack_require__(37);
	var createProperty = __webpack_require__(164);
	var getIterFn = __webpack_require__(165);
	
	$export($export.S + $export.F * !__webpack_require__(166)(function (iter) { Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
	    var O = toObject(arrayLike);
	    var C = typeof this == 'function' ? this : Array;
	    var aLen = arguments.length;
	    var mapfn = aLen > 1 ? arguments[1] : undefined;
	    var mapping = mapfn !== undefined;
	    var index = 0;
	    var iterFn = getIterFn(O);
	    var length, result, step, iterator;
	    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
	      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
	        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
	      }
	    } else {
	      length = toLength(O.length);
	      for (result = new C(length); length > index; index++) {
	        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(12);
	module.exports = function (iterator, fn, value, entries) {
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch (e) {
	    var ret = iterator['return'];
	    if (ret !== undefined) anObject(ret.call(iterator));
	    throw e;
	  }
	};


/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators = __webpack_require__(129);
	var ITERATOR = __webpack_require__(25)('iterator');
	var ArrayProto = Array.prototype;
	
	module.exports = function (it) {
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};


/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $defineProperty = __webpack_require__(11);
	var createDesc = __webpack_require__(17);
	
	module.exports = function (object, index, value) {
	  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
	  else object[index] = value;
	};


/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

	var classof = __webpack_require__(74);
	var ITERATOR = __webpack_require__(25)('iterator');
	var Iterators = __webpack_require__(129);
	module.exports = __webpack_require__(9).getIteratorMethod = function (it) {
	  if (it != undefined) return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};


/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

	var ITERATOR = __webpack_require__(25)('iterator');
	var SAFE_CLOSING = false;
	
	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function () { SAFE_CLOSING = true; };
	  // eslint-disable-next-line no-throw-literal
	  Array.from(riter, function () { throw 2; });
	} catch (e) { /* empty */ }
	
	module.exports = function (exec, skipClosing) {
	  if (!skipClosing && !SAFE_CLOSING) return false;
	  var safe = false;
	  try {
	    var arr = [7];
	    var iter = arr[ITERATOR]();
	    iter.next = function () { return { done: safe = true }; };
	    arr[ITERATOR] = function () { return iter; };
	    exec(arr);
	  } catch (e) { /* empty */ }
	  return safe;
	};


/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8);
	var createProperty = __webpack_require__(164);
	
	// WebKit Array.of isn't generic
	$export($export.S + $export.F * __webpack_require__(7)(function () {
	  function F() { /* empty */ }
	  return !(Array.of.call(F) instanceof F);
	}), 'Array', {
	  // 22.1.2.3 Array.of( ...items)
	  of: function of(/* ...args */) {
	    var index = 0;
	    var aLen = arguments.length;
	    var result = new (typeof this == 'function' ? this : Array)(aLen);
	    while (aLen > index) createProperty(result, index, arguments[index++]);
	    result.length = aLen;
	    return result;
	  }
	});


/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.13 Array.prototype.join(separator)
	var $export = __webpack_require__(8);
	var toIObject = __webpack_require__(32);
	var arrayJoin = [].join;
	
	// fallback for not array-like strings
	$export($export.P + $export.F * (__webpack_require__(33) != Object || !__webpack_require__(169)(arrayJoin)), 'Array', {
	  join: function join(separator) {
	    return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);
	  }
	});


/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var fails = __webpack_require__(7);
	
	module.exports = function (method, arg) {
	  return !!method && fails(function () {
	    // eslint-disable-next-line no-useless-call
	    arg ? method.call(null, function () { /* empty */ }, 1) : method.call(null);
	  });
	};


/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8);
	var html = __webpack_require__(47);
	var cof = __webpack_require__(34);
	var toAbsoluteIndex = __webpack_require__(39);
	var toLength = __webpack_require__(37);
	var arraySlice = [].slice;
	
	// fallback for not array-like ES3 strings and DOM objects
	$export($export.P + $export.F * __webpack_require__(7)(function () {
	  if (html) arraySlice.call(html);
	}), 'Array', {
	  slice: function slice(begin, end) {
	    var len = toLength(this.length);
	    var klass = cof(this);
	    end = end === undefined ? len : end;
	    if (klass == 'Array') return arraySlice.call(this, begin, end);
	    var start = toAbsoluteIndex(begin, len);
	    var upTo = toAbsoluteIndex(end, len);
	    var size = toLength(upTo - start);
	    var cloned = Array(size);
	    var i = 0;
	    for (; i < size; i++) cloned[i] = klass == 'String'
	      ? this.charAt(start + i)
	      : this[start + i];
	    return cloned;
	  }
	});


/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8);
	var aFunction = __webpack_require__(21);
	var toObject = __webpack_require__(57);
	var fails = __webpack_require__(7);
	var $sort = [].sort;
	var test = [1, 2, 3];
	
	$export($export.P + $export.F * (fails(function () {
	  // IE8-
	  test.sort(undefined);
	}) || !fails(function () {
	  // V8 bug
	  test.sort(null);
	  // Old WebKit
	}) || !__webpack_require__(169)($sort)), 'Array', {
	  // 22.1.3.25 Array.prototype.sort(comparefn)
	  sort: function sort(comparefn) {
	    return comparefn === undefined
	      ? $sort.call(toObject(this))
	      : $sort.call(toObject(this), aFunction(comparefn));
	  }
	});


/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8);
	var $forEach = __webpack_require__(173)(0);
	var STRICT = __webpack_require__(169)([].forEach, true);
	
	$export($export.P + $export.F * !STRICT, 'Array', {
	  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
	  forEach: function forEach(callbackfn /* , thisArg */) {
	    return $forEach(this, callbackfn, arguments[1]);
	  }
	});


/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

	// 0 -> Array#forEach
	// 1 -> Array#map
	// 2 -> Array#filter
	// 3 -> Array#some
	// 4 -> Array#every
	// 5 -> Array#find
	// 6 -> Array#findIndex
	var ctx = __webpack_require__(20);
	var IObject = __webpack_require__(33);
	var toObject = __webpack_require__(57);
	var toLength = __webpack_require__(37);
	var asc = __webpack_require__(174);
	module.exports = function (TYPE, $create) {
	  var IS_MAP = TYPE == 1;
	  var IS_FILTER = TYPE == 2;
	  var IS_SOME = TYPE == 3;
	  var IS_EVERY = TYPE == 4;
	  var IS_FIND_INDEX = TYPE == 6;
	  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
	  var create = $create || asc;
	  return function ($this, callbackfn, that) {
	    var O = toObject($this);
	    var self = IObject(O);
	    var f = ctx(callbackfn, that, 3);
	    var length = toLength(self.length);
	    var index = 0;
	    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
	    var val, res;
	    for (;length > index; index++) if (NO_HOLES || index in self) {
	      val = self[index];
	      res = f(val, index, O);
	      if (TYPE) {
	        if (IS_MAP) result[index] = res;   // map
	        else if (res) switch (TYPE) {
	          case 3: return true;             // some
	          case 5: return val;              // find
	          case 6: return index;            // findIndex
	          case 2: result.push(val);        // filter
	        } else if (IS_EVERY) return false; // every
	      }
	    }
	    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
	  };
	};


/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

	// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
	var speciesConstructor = __webpack_require__(175);
	
	module.exports = function (original, length) {
	  return new (speciesConstructor(original))(length);
	};


/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(13);
	var isArray = __webpack_require__(44);
	var SPECIES = __webpack_require__(25)('species');
	
	module.exports = function (original) {
	  var C;
	  if (isArray(original)) {
	    C = original.constructor;
	    // cross-realm fallback
	    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
	    if (isObject(C)) {
	      C = C[SPECIES];
	      if (C === null) C = undefined;
	    }
	  } return C === undefined ? Array : C;
	};


/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8);
	var $map = __webpack_require__(173)(1);
	
	$export($export.P + $export.F * !__webpack_require__(169)([].map, true), 'Array', {
	  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
	  map: function map(callbackfn /* , thisArg */) {
	    return $map(this, callbackfn, arguments[1]);
	  }
	});


/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8);
	var $filter = __webpack_require__(173)(2);
	
	$export($export.P + $export.F * !__webpack_require__(169)([].filter, true), 'Array', {
	  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
	  filter: function filter(callbackfn /* , thisArg */) {
	    return $filter(this, callbackfn, arguments[1]);
	  }
	});


/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8);
	var $some = __webpack_require__(173)(3);
	
	$export($export.P + $export.F * !__webpack_require__(169)([].some, true), 'Array', {
	  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
	  some: function some(callbackfn /* , thisArg */) {
	    return $some(this, callbackfn, arguments[1]);
	  }
	});


/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8);
	var $every = __webpack_require__(173)(4);
	
	$export($export.P + $export.F * !__webpack_require__(169)([].every, true), 'Array', {
	  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
	  every: function every(callbackfn /* , thisArg */) {
	    return $every(this, callbackfn, arguments[1]);
	  }
	});


/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8);
	var $reduce = __webpack_require__(181);
	
	$export($export.P + $export.F * !__webpack_require__(169)([].reduce, true), 'Array', {
	  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
	  reduce: function reduce(callbackfn /* , initialValue */) {
	    return $reduce(this, callbackfn, arguments.length, arguments[1], false);
	  }
	});


/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

	var aFunction = __webpack_require__(21);
	var toObject = __webpack_require__(57);
	var IObject = __webpack_require__(33);
	var toLength = __webpack_require__(37);
	
	module.exports = function (that, callbackfn, aLen, memo, isRight) {
	  aFunction(callbackfn);
	  var O = toObject(that);
	  var self = IObject(O);
	  var length = toLength(O.length);
	  var index = isRight ? length - 1 : 0;
	  var i = isRight ? -1 : 1;
	  if (aLen < 2) for (;;) {
	    if (index in self) {
	      memo = self[index];
	      index += i;
	      break;
	    }
	    index += i;
	    if (isRight ? index < 0 : length <= index) {
	      throw TypeError('Reduce of empty array with no initial value');
	    }
	  }
	  for (;isRight ? index >= 0 : length > index; index += i) if (index in self) {
	    memo = callbackfn(memo, self[index], index, O);
	  }
	  return memo;
	};


/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8);
	var $reduce = __webpack_require__(181);
	
	$export($export.P + $export.F * !__webpack_require__(169)([].reduceRight, true), 'Array', {
	  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
	  reduceRight: function reduceRight(callbackfn /* , initialValue */) {
	    return $reduce(this, callbackfn, arguments.length, arguments[1], true);
	  }
	});


/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8);
	var $indexOf = __webpack_require__(36)(false);
	var $native = [].indexOf;
	var NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;
	
	$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(169)($native)), 'Array', {
	  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
	  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
	    return NEGATIVE_ZERO
	      // convert -0 to +0
	      ? $native.apply(this, arguments) || 0
	      : $indexOf(this, searchElement, arguments[1]);
	  }
	});


/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8);
	var toIObject = __webpack_require__(32);
	var toInteger = __webpack_require__(38);
	var toLength = __webpack_require__(37);
	var $native = [].lastIndexOf;
	var NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;
	
	$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(169)($native)), 'Array', {
	  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
	  lastIndexOf: function lastIndexOf(searchElement /* , fromIndex = @[*-1] */) {
	    // convert -0 to +0
	    if (NEGATIVE_ZERO) return $native.apply(this, arguments) || 0;
	    var O = toIObject(this);
	    var length = toLength(O.length);
	    var index = length - 1;
	    if (arguments.length > 1) index = Math.min(index, toInteger(arguments[1]));
	    if (index < 0) index = length + index;
	    for (;index >= 0; index--) if (index in O) if (O[index] === searchElement) return index || 0;
	    return -1;
	  }
	});


/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	var $export = __webpack_require__(8);
	
	$export($export.P, 'Array', { copyWithin: __webpack_require__(186) });
	
	__webpack_require__(187)('copyWithin');


/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	'use strict';
	var toObject = __webpack_require__(57);
	var toAbsoluteIndex = __webpack_require__(39);
	var toLength = __webpack_require__(37);
	
	module.exports = [].copyWithin || function copyWithin(target /* = 0 */, start /* = 0, end = @length */) {
	  var O = toObject(this);
	  var len = toLength(O.length);
	  var to = toAbsoluteIndex(target, len);
	  var from = toAbsoluteIndex(start, len);
	  var end = arguments.length > 2 ? arguments[2] : undefined;
	  var count = Math.min((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to);
	  var inc = 1;
	  if (from < to && to < from + count) {
	    inc = -1;
	    from += count - 1;
	    to += count - 1;
	  }
	  while (count-- > 0) {
	    if (from in O) O[to] = O[from];
	    else delete O[to];
	    to += inc;
	    from += inc;
	  } return O;
	};


/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

	// 22.1.3.31 Array.prototype[@@unscopables]
	var UNSCOPABLES = __webpack_require__(25)('unscopables');
	var ArrayProto = Array.prototype;
	if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(10)(ArrayProto, UNSCOPABLES, {});
	module.exports = function (key) {
	  ArrayProto[UNSCOPABLES][key] = true;
	};


/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	var $export = __webpack_require__(8);
	
	$export($export.P, 'Array', { fill: __webpack_require__(189) });
	
	__webpack_require__(187)('fill');


/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	'use strict';
	var toObject = __webpack_require__(57);
	var toAbsoluteIndex = __webpack_require__(39);
	var toLength = __webpack_require__(37);
	module.exports = function fill(value /* , start = 0, end = @length */) {
	  var O = toObject(this);
	  var length = toLength(O.length);
	  var aLen = arguments.length;
	  var index = toAbsoluteIndex(aLen > 1 ? arguments[1] : undefined, length);
	  var end = aLen > 2 ? arguments[2] : undefined;
	  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
	  while (endPos > index) O[index++] = value;
	  return O;
	};


/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
	var $export = __webpack_require__(8);
	var $find = __webpack_require__(173)(5);
	var KEY = 'find';
	var forced = true;
	// Shouldn't skip holes
	if (KEY in []) Array(1)[KEY](function () { forced = false; });
	$export($export.P + $export.F * forced, 'Array', {
	  find: function find(callbackfn /* , that = undefined */) {
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	__webpack_require__(187)(KEY);


/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
	var $export = __webpack_require__(8);
	var $find = __webpack_require__(173)(6);
	var KEY = 'findIndex';
	var forced = true;
	// Shouldn't skip holes
	if (KEY in []) Array(1)[KEY](function () { forced = false; });
	$export($export.P + $export.F * forced, 'Array', {
	  findIndex: function findIndex(callbackfn /* , that = undefined */) {
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	__webpack_require__(187)(KEY);


/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(193)('Array');


/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var global = __webpack_require__(4);
	var dP = __webpack_require__(11);
	var DESCRIPTORS = __webpack_require__(6);
	var SPECIES = __webpack_require__(25)('species');
	
	module.exports = function (KEY) {
	  var C = global[KEY];
	  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
	    configurable: true,
	    get: function () { return this; }
	  });
	};


/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(187);
	var step = __webpack_require__(195);
	var Iterators = __webpack_require__(129);
	var toIObject = __webpack_require__(32);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(128)(Array, 'Array', function (iterated, kind) {
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function () {
	  var O = this._t;
	  var kind = this._k;
	  var index = this._i++;
	  if (!O || index >= O.length) {
	    this._t = undefined;
	    return step(1);
	  }
	  if (kind == 'keys') return step(0, index);
	  if (kind == 'values') return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');
	
	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;
	
	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');


/***/ }),
/* 195 */
/***/ (function(module, exports) {

	module.exports = function (done, value) {
	  return { value: value, done: !!done };
	};


/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(4);
	var inheritIfRequired = __webpack_require__(87);
	var dP = __webpack_require__(11).f;
	var gOPN = __webpack_require__(49).f;
	var isRegExp = __webpack_require__(134);
	var $flags = __webpack_require__(197);
	var $RegExp = global.RegExp;
	var Base = $RegExp;
	var proto = $RegExp.prototype;
	var re1 = /a/g;
	var re2 = /a/g;
	// "new" creates a new object, old webkit buggy here
	var CORRECT_NEW = new $RegExp(re1) !== re1;
	
	if (__webpack_require__(6) && (!CORRECT_NEW || __webpack_require__(7)(function () {
	  re2[__webpack_require__(25)('match')] = false;
	  // RegExp constructor can alter flags and IsRegExp works correct with @@match
	  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
	}))) {
	  $RegExp = function RegExp(p, f) {
	    var tiRE = this instanceof $RegExp;
	    var piRE = isRegExp(p);
	    var fiU = f === undefined;
	    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p
	      : inheritIfRequired(CORRECT_NEW
	        ? new Base(piRE && !fiU ? p.source : p, f)
	        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f)
	      , tiRE ? this : proto, $RegExp);
	  };
	  var proxy = function (key) {
	    key in $RegExp || dP($RegExp, key, {
	      configurable: true,
	      get: function () { return Base[key]; },
	      set: function (it) { Base[key] = it; }
	    });
	  };
	  for (var keys = gOPN(Base), i = 0; keys.length > i;) proxy(keys[i++]);
	  proto.constructor = $RegExp;
	  $RegExp.prototype = proto;
	  __webpack_require__(18)(global, 'RegExp', $RegExp);
	}
	
	__webpack_require__(193)('RegExp');


/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 21.2.5.3 get RegExp.prototype.flags
	var anObject = __webpack_require__(12);
	module.exports = function () {
	  var that = anObject(this);
	  var result = '';
	  if (that.global) result += 'g';
	  if (that.ignoreCase) result += 'i';
	  if (that.multiline) result += 'm';
	  if (that.unicode) result += 'u';
	  if (that.sticky) result += 'y';
	  return result;
	};


/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	__webpack_require__(199);
	var anObject = __webpack_require__(12);
	var $flags = __webpack_require__(197);
	var DESCRIPTORS = __webpack_require__(6);
	var TO_STRING = 'toString';
	var $toString = /./[TO_STRING];
	
	var define = function (fn) {
	  __webpack_require__(18)(RegExp.prototype, TO_STRING, fn, true);
	};
	
	// 21.2.5.14 RegExp.prototype.toString()
	if (__webpack_require__(7)(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
	  define(function toString() {
	    var R = anObject(this);
	    return '/'.concat(R.source, '/',
	      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
	  });
	// FF44- RegExp#toString has a wrong name
	} else if ($toString.name != TO_STRING) {
	  define(function toString() {
	    return $toString.call(this);
	  });
	}


/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

	// 21.2.5.3 get RegExp.prototype.flags()
	if (__webpack_require__(6) && /./g.flags != 'g') __webpack_require__(11).f(RegExp.prototype, 'flags', {
	  configurable: true,
	  get: __webpack_require__(197)
	});


/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

	// @@match logic
	__webpack_require__(201)('match', 1, function (defined, MATCH, $match) {
	  // 21.1.3.11 String.prototype.match(regexp)
	  return [function match(regexp) {
	    'use strict';
	    var O = defined(this);
	    var fn = regexp == undefined ? undefined : regexp[MATCH];
	    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
	  }, $match];
	});


/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var hide = __webpack_require__(10);
	var redefine = __webpack_require__(18);
	var fails = __webpack_require__(7);
	var defined = __webpack_require__(35);
	var wks = __webpack_require__(25);
	
	module.exports = function (KEY, length, exec) {
	  var SYMBOL = wks(KEY);
	  var fns = exec(defined, SYMBOL, ''[KEY]);
	  var strfn = fns[0];
	  var rxfn = fns[1];
	  if (fails(function () {
	    var O = {};
	    O[SYMBOL] = function () { return 7; };
	    return ''[KEY](O) != 7;
	  })) {
	    redefine(String.prototype, KEY, strfn);
	    hide(RegExp.prototype, SYMBOL, length == 2
	      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
	      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
	      ? function (string, arg) { return rxfn.call(string, this, arg); }
	      // 21.2.5.6 RegExp.prototype[@@match](string)
	      // 21.2.5.9 RegExp.prototype[@@search](string)
	      : function (string) { return rxfn.call(string, this); }
	    );
	  }
	};


/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

	// @@replace logic
	__webpack_require__(201)('replace', 2, function (defined, REPLACE, $replace) {
	  // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
	  return [function replace(searchValue, replaceValue) {
	    'use strict';
	    var O = defined(this);
	    var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
	    return fn !== undefined
	      ? fn.call(searchValue, O, replaceValue)
	      : $replace.call(String(O), searchValue, replaceValue);
	  }, $replace];
	});


/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

	// @@search logic
	__webpack_require__(201)('search', 1, function (defined, SEARCH, $search) {
	  // 21.1.3.15 String.prototype.search(regexp)
	  return [function search(regexp) {
	    'use strict';
	    var O = defined(this);
	    var fn = regexp == undefined ? undefined : regexp[SEARCH];
	    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
	  }, $search];
	});


/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

	// @@split logic
	__webpack_require__(201)('split', 2, function (defined, SPLIT, $split) {
	  'use strict';
	  var isRegExp = __webpack_require__(134);
	  var _split = $split;
	  var $push = [].push;
	  var $SPLIT = 'split';
	  var LENGTH = 'length';
	  var LAST_INDEX = 'lastIndex';
	  if (
	    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
	    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
	    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
	    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
	    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
	    ''[$SPLIT](/.?/)[LENGTH]
	  ) {
	    var NPCG = /()??/.exec('')[1] === undefined; // nonparticipating capturing group
	    // based on es5-shim implementation, need to rework it
	    $split = function (separator, limit) {
	      var string = String(this);
	      if (separator === undefined && limit === 0) return [];
	      // If `separator` is not a regex, use native split
	      if (!isRegExp(separator)) return _split.call(string, separator, limit);
	      var output = [];
	      var flags = (separator.ignoreCase ? 'i' : '') +
	                  (separator.multiline ? 'm' : '') +
	                  (separator.unicode ? 'u' : '') +
	                  (separator.sticky ? 'y' : '');
	      var lastLastIndex = 0;
	      var splitLimit = limit === undefined ? 4294967295 : limit >>> 0;
	      // Make `global` and avoid `lastIndex` issues by working with a copy
	      var separatorCopy = new RegExp(separator.source, flags + 'g');
	      var separator2, match, lastIndex, lastLength, i;
	      // Doesn't need flags gy, but they don't hurt
	      if (!NPCG) separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags);
	      while (match = separatorCopy.exec(string)) {
	        // `separatorCopy.lastIndex` is not reliable cross-browser
	        lastIndex = match.index + match[0][LENGTH];
	        if (lastIndex > lastLastIndex) {
	          output.push(string.slice(lastLastIndex, match.index));
	          // Fix browsers whose `exec` methods don't consistently return `undefined` for NPCG
	          // eslint-disable-next-line no-loop-func
	          if (!NPCG && match[LENGTH] > 1) match[0].replace(separator2, function () {
	            for (i = 1; i < arguments[LENGTH] - 2; i++) if (arguments[i] === undefined) match[i] = undefined;
	          });
	          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
	          lastLength = match[0][LENGTH];
	          lastLastIndex = lastIndex;
	          if (output[LENGTH] >= splitLimit) break;
	        }
	        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
	      }
	      if (lastLastIndex === string[LENGTH]) {
	        if (lastLength || !separatorCopy.test('')) output.push('');
	      } else output.push(string.slice(lastLastIndex));
	      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
	    };
	  // Chakra, V8
	  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
	    $split = function (separator, limit) {
	      return separator === undefined && limit === 0 ? [] : _split.call(this, separator, limit);
	    };
	  }
	  // 21.1.3.17 String.prototype.split(separator, limit)
	  return [function split(separator, limit) {
	    var O = defined(this);
	    var fn = separator == undefined ? undefined : separator[SPLIT];
	    return fn !== undefined ? fn.call(separator, O, limit) : $split.call(String(O), separator, limit);
	  }, $split];
	});


/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY = __webpack_require__(28);
	var global = __webpack_require__(4);
	var ctx = __webpack_require__(20);
	var classof = __webpack_require__(74);
	var $export = __webpack_require__(8);
	var isObject = __webpack_require__(13);
	var aFunction = __webpack_require__(21);
	var anInstance = __webpack_require__(206);
	var forOf = __webpack_require__(207);
	var speciesConstructor = __webpack_require__(208);
	var task = __webpack_require__(209).set;
	var microtask = __webpack_require__(210)();
	var newPromiseCapabilityModule = __webpack_require__(211);
	var perform = __webpack_require__(212);
	var promiseResolve = __webpack_require__(213);
	var PROMISE = 'Promise';
	var TypeError = global.TypeError;
	var process = global.process;
	var $Promise = global[PROMISE];
	var isNode = classof(process) == 'process';
	var empty = function () { /* empty */ };
	var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
	var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;
	
	var USE_NATIVE = !!function () {
	  try {
	    // correct subclassing with @@species support
	    var promise = $Promise.resolve(1);
	    var FakePromise = (promise.constructor = {})[__webpack_require__(25)('species')] = function (exec) {
	      exec(empty, empty);
	    };
	    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
	    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
	  } catch (e) { /* empty */ }
	}();
	
	// helpers
	var isThenable = function (it) {
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var notify = function (promise, isReject) {
	  if (promise._n) return;
	  promise._n = true;
	  var chain = promise._c;
	  microtask(function () {
	    var value = promise._v;
	    var ok = promise._s == 1;
	    var i = 0;
	    var run = function (reaction) {
	      var handler = ok ? reaction.ok : reaction.fail;
	      var resolve = reaction.resolve;
	      var reject = reaction.reject;
	      var domain = reaction.domain;
	      var result, then;
	      try {
	        if (handler) {
	          if (!ok) {
	            if (promise._h == 2) onHandleUnhandled(promise);
	            promise._h = 1;
	          }
	          if (handler === true) result = value;
	          else {
	            if (domain) domain.enter();
	            result = handler(value);
	            if (domain) domain.exit();
	          }
	          if (result === reaction.promise) {
	            reject(TypeError('Promise-chain cycle'));
	          } else if (then = isThenable(result)) {
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch (e) {
	        reject(e);
	      }
	    };
	    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
	    promise._c = [];
	    promise._n = false;
	    if (isReject && !promise._h) onUnhandled(promise);
	  });
	};
	var onUnhandled = function (promise) {
	  task.call(global, function () {
	    var value = promise._v;
	    var unhandled = isUnhandled(promise);
	    var result, handler, console;
	    if (unhandled) {
	      result = perform(function () {
	        if (isNode) {
	          process.emit('unhandledRejection', value, promise);
	        } else if (handler = global.onunhandledrejection) {
	          handler({ promise: promise, reason: value });
	        } else if ((console = global.console) && console.error) {
	          console.error('Unhandled promise rejection', value);
	        }
	      });
	      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
	      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
	    } promise._a = undefined;
	    if (unhandled && result.e) throw result.v;
	  });
	};
	var isUnhandled = function (promise) {
	  if (promise._h == 1) return false;
	  var chain = promise._a || promise._c;
	  var i = 0;
	  var reaction;
	  while (chain.length > i) {
	    reaction = chain[i++];
	    if (reaction.fail || !isUnhandled(reaction.promise)) return false;
	  } return true;
	};
	var onHandleUnhandled = function (promise) {
	  task.call(global, function () {
	    var handler;
	    if (isNode) {
	      process.emit('rejectionHandled', promise);
	    } else if (handler = global.onrejectionhandled) {
	      handler({ promise: promise, reason: promise._v });
	    }
	  });
	};
	var $reject = function (value) {
	  var promise = this;
	  if (promise._d) return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  promise._v = value;
	  promise._s = 2;
	  if (!promise._a) promise._a = promise._c.slice();
	  notify(promise, true);
	};
	var $resolve = function (value) {
	  var promise = this;
	  var then;
	  if (promise._d) return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  try {
	    if (promise === value) throw TypeError("Promise can't be resolved itself");
	    if (then = isThenable(value)) {
	      microtask(function () {
	        var wrapper = { _w: promise, _d: false }; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch (e) {
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      promise._v = value;
	      promise._s = 1;
	      notify(promise, false);
	    }
	  } catch (e) {
	    $reject.call({ _w: promise, _d: false }, e); // wrap
	  }
	};
	
	// constructor polyfill
	if (!USE_NATIVE) {
	  // 25.4.3.1 Promise(executor)
	  $Promise = function Promise(executor) {
	    anInstance(this, $Promise, PROMISE, '_h');
	    aFunction(executor);
	    Internal.call(this);
	    try {
	      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
	    } catch (err) {
	      $reject.call(this, err);
	    }
	  };
	  // eslint-disable-next-line no-unused-vars
	  Internal = function Promise(executor) {
	    this._c = [];             // <- awaiting reactions
	    this._a = undefined;      // <- checked in isUnhandled reactions
	    this._s = 0;              // <- state
	    this._d = false;          // <- done
	    this._v = undefined;      // <- value
	    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
	    this._n = false;          // <- notify
	  };
	  Internal.prototype = __webpack_require__(214)($Promise.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected) {
	      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
	      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail = typeof onRejected == 'function' && onRejected;
	      reaction.domain = isNode ? process.domain : undefined;
	      this._c.push(reaction);
	      if (this._a) this._a.push(reaction);
	      if (this._s) notify(this, false);
	      return reaction.promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function (onRejected) {
	      return this.then(undefined, onRejected);
	    }
	  });
	  OwnPromiseCapability = function () {
	    var promise = new Internal();
	    this.promise = promise;
	    this.resolve = ctx($resolve, promise, 1);
	    this.reject = ctx($reject, promise, 1);
	  };
	  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
	    return C === $Promise || C === Wrapper
	      ? new OwnPromiseCapability(C)
	      : newGenericPromiseCapability(C);
	  };
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
	__webpack_require__(24)($Promise, PROMISE);
	__webpack_require__(193)(PROMISE);
	Wrapper = __webpack_require__(9)[PROMISE];
	
	// statics
	$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r) {
	    var capability = newPromiseCapability(this);
	    var $$reject = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x) {
	    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
	  }
	});
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(166)(function (iter) {
	  $Promise.all(iter)['catch'](empty);
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable) {
	    var C = this;
	    var capability = newPromiseCapability(C);
	    var resolve = capability.resolve;
	    var reject = capability.reject;
	    var result = perform(function () {
	      var values = [];
	      var index = 0;
	      var remaining = 1;
	      forOf(iterable, false, function (promise) {
	        var $index = index++;
	        var alreadyCalled = false;
	        values.push(undefined);
	        remaining++;
	        C.resolve(promise).then(function (value) {
	          if (alreadyCalled) return;
	          alreadyCalled = true;
	          values[$index] = value;
	          --remaining || resolve(values);
	        }, reject);
	      });
	      --remaining || resolve(values);
	    });
	    if (result.e) reject(result.v);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable) {
	    var C = this;
	    var capability = newPromiseCapability(C);
	    var reject = capability.reject;
	    var result = perform(function () {
	      forOf(iterable, false, function (promise) {
	        C.resolve(promise).then(capability.resolve, reject);
	      });
	    });
	    if (result.e) reject(result.v);
	    return capability.promise;
	  }
	});


/***/ }),
/* 206 */
/***/ (function(module, exports) {

	module.exports = function (it, Constructor, name, forbiddenField) {
	  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
	    throw TypeError(name + ': incorrect invocation!');
	  } return it;
	};


/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

	var ctx = __webpack_require__(20);
	var call = __webpack_require__(162);
	var isArrayIter = __webpack_require__(163);
	var anObject = __webpack_require__(12);
	var toLength = __webpack_require__(37);
	var getIterFn = __webpack_require__(165);
	var BREAK = {};
	var RETURN = {};
	var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
	  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
	  var f = ctx(fn, that, entries ? 2 : 1);
	  var index = 0;
	  var length, step, iterator, result;
	  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
	    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	    if (result === BREAK || result === RETURN) return result;
	  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
	    result = call(iterator, f, step.value, entries);
	    if (result === BREAK || result === RETURN) return result;
	  }
	};
	exports.BREAK = BREAK;
	exports.RETURN = RETURN;


/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject = __webpack_require__(12);
	var aFunction = __webpack_require__(21);
	var SPECIES = __webpack_require__(25)('species');
	module.exports = function (O, D) {
	  var C = anObject(O).constructor;
	  var S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};


/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

	var ctx = __webpack_require__(20);
	var invoke = __webpack_require__(77);
	var html = __webpack_require__(47);
	var cel = __webpack_require__(15);
	var global = __webpack_require__(4);
	var process = global.process;
	var setTask = global.setImmediate;
	var clearTask = global.clearImmediate;
	var MessageChannel = global.MessageChannel;
	var Dispatch = global.Dispatch;
	var counter = 0;
	var queue = {};
	var ONREADYSTATECHANGE = 'onreadystatechange';
	var defer, channel, port;
	var run = function () {
	  var id = +this;
	  // eslint-disable-next-line no-prototype-builtins
	  if (queue.hasOwnProperty(id)) {
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listener = function (event) {
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if (!setTask || !clearTask) {
	  setTask = function setImmediate(fn) {
	    var args = [];
	    var i = 1;
	    while (arguments.length > i) args.push(arguments[i++]);
	    queue[++counter] = function () {
	      // eslint-disable-next-line no-new-func
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id) {
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if (__webpack_require__(34)(process) == 'process') {
	    defer = function (id) {
	      process.nextTick(ctx(run, id, 1));
	    };
	  // Sphere (JS game engine) Dispatch API
	  } else if (Dispatch && Dispatch.now) {
	    defer = function (id) {
	      Dispatch.now(ctx(run, id, 1));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  } else if (MessageChannel) {
	    channel = new MessageChannel();
	    port = channel.port2;
	    channel.port1.onmessage = listener;
	    defer = ctx(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
	    defer = function (id) {
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listener, false);
	  // IE8-
	  } else if (ONREADYSTATECHANGE in cel('script')) {
	    defer = function (id) {
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function (id) {
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set: setTask,
	  clear: clearTask
	};


/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(4);
	var macrotask = __webpack_require__(209).set;
	var Observer = global.MutationObserver || global.WebKitMutationObserver;
	var process = global.process;
	var Promise = global.Promise;
	var isNode = __webpack_require__(34)(process) == 'process';
	
	module.exports = function () {
	  var head, last, notify;
	
	  var flush = function () {
	    var parent, fn;
	    if (isNode && (parent = process.domain)) parent.exit();
	    while (head) {
	      fn = head.fn;
	      head = head.next;
	      try {
	        fn();
	      } catch (e) {
	        if (head) notify();
	        else last = undefined;
	        throw e;
	      }
	    } last = undefined;
	    if (parent) parent.enter();
	  };
	
	  // Node.js
	  if (isNode) {
	    notify = function () {
	      process.nextTick(flush);
	    };
	  // browsers with MutationObserver
	  } else if (Observer) {
	    var toggle = true;
	    var node = document.createTextNode('');
	    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
	    notify = function () {
	      node.data = toggle = !toggle;
	    };
	  // environments with maybe non-completely correct, but existent Promise
	  } else if (Promise && Promise.resolve) {
	    var promise = Promise.resolve();
	    notify = function () {
	      promise.then(flush);
	    };
	  // for other environments - macrotask based on:
	  // - setImmediate
	  // - MessageChannel
	  // - window.postMessag
	  // - onreadystatechange
	  // - setTimeout
	  } else {
	    notify = function () {
	      // strange IE + webpack dev server bug - use .call(global)
	      macrotask.call(global, flush);
	    };
	  }
	
	  return function (fn) {
	    var task = { fn: fn, next: undefined };
	    if (last) last.next = task;
	    if (!head) {
	      head = task;
	      notify();
	    } last = task;
	  };
	};


/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 25.4.1.5 NewPromiseCapability(C)
	var aFunction = __webpack_require__(21);
	
	function PromiseCapability(C) {
	  var resolve, reject;
	  this.promise = new C(function ($$resolve, $$reject) {
	    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject = $$reject;
	  });
	  this.resolve = aFunction(resolve);
	  this.reject = aFunction(reject);
	}
	
	module.exports.f = function (C) {
	  return new PromiseCapability(C);
	};


/***/ }),
/* 212 */
/***/ (function(module, exports) {

	module.exports = function (exec) {
	  try {
	    return { e: false, v: exec() };
	  } catch (e) {
	    return { e: true, v: e };
	  }
	};


/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(12);
	var isObject = __webpack_require__(13);
	var newPromiseCapability = __webpack_require__(211);
	
	module.exports = function (C, x) {
	  anObject(C);
	  if (isObject(x) && x.constructor === C) return x;
	  var promiseCapability = newPromiseCapability.f(C);
	  var resolve = promiseCapability.resolve;
	  resolve(x);
	  return promiseCapability.promise;
	};


/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

	var redefine = __webpack_require__(18);
	module.exports = function (target, src, safe) {
	  for (var key in src) redefine(target, key, src[key], safe);
	  return target;
	};


/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(216);
	var validate = __webpack_require__(217);
	var MAP = 'Map';
	
	// 23.1 Map Objects
	module.exports = __webpack_require__(218)(MAP, function (get) {
	  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.1.3.6 Map.prototype.get(key)
	  get: function get(key) {
	    var entry = strong.getEntry(validate(this, MAP), key);
	    return entry && entry.v;
	  },
	  // 23.1.3.9 Map.prototype.set(key, value)
	  set: function set(key, value) {
	    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
	  }
	}, strong, true);


/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var dP = __webpack_require__(11).f;
	var create = __webpack_require__(45);
	var redefineAll = __webpack_require__(214);
	var ctx = __webpack_require__(20);
	var anInstance = __webpack_require__(206);
	var forOf = __webpack_require__(207);
	var $iterDefine = __webpack_require__(128);
	var step = __webpack_require__(195);
	var setSpecies = __webpack_require__(193);
	var DESCRIPTORS = __webpack_require__(6);
	var fastKey = __webpack_require__(22).fastKey;
	var validate = __webpack_require__(217);
	var SIZE = DESCRIPTORS ? '_s' : 'size';
	
	var getEntry = function (that, key) {
	  // fast case
	  var index = fastKey(key);
	  var entry;
	  if (index !== 'F') return that._i[index];
	  // frozen object case
	  for (entry = that._f; entry; entry = entry.n) {
	    if (entry.k == key) return entry;
	  }
	};
	
	module.exports = {
	  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
	    var C = wrapper(function (that, iterable) {
	      anInstance(that, C, NAME, '_i');
	      that._t = NAME;         // collection type
	      that._i = create(null); // index
	      that._f = undefined;    // first entry
	      that._l = undefined;    // last entry
	      that[SIZE] = 0;         // size
	      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.1.3.1 Map.prototype.clear()
	      // 23.2.3.2 Set.prototype.clear()
	      clear: function clear() {
	        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
	          entry.r = true;
	          if (entry.p) entry.p = entry.p.n = undefined;
	          delete data[entry.i];
	        }
	        that._f = that._l = undefined;
	        that[SIZE] = 0;
	      },
	      // 23.1.3.3 Map.prototype.delete(key)
	      // 23.2.3.4 Set.prototype.delete(value)
	      'delete': function (key) {
	        var that = validate(this, NAME);
	        var entry = getEntry(that, key);
	        if (entry) {
	          var next = entry.n;
	          var prev = entry.p;
	          delete that._i[entry.i];
	          entry.r = true;
	          if (prev) prev.n = next;
	          if (next) next.p = prev;
	          if (that._f == entry) that._f = next;
	          if (that._l == entry) that._l = prev;
	          that[SIZE]--;
	        } return !!entry;
	      },
	      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
	      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
	      forEach: function forEach(callbackfn /* , that = undefined */) {
	        validate(this, NAME);
	        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
	        var entry;
	        while (entry = entry ? entry.n : this._f) {
	          f(entry.v, entry.k, this);
	          // revert to the last existing entry
	          while (entry && entry.r) entry = entry.p;
	        }
	      },
	      // 23.1.3.7 Map.prototype.has(key)
	      // 23.2.3.7 Set.prototype.has(value)
	      has: function has(key) {
	        return !!getEntry(validate(this, NAME), key);
	      }
	    });
	    if (DESCRIPTORS) dP(C.prototype, 'size', {
	      get: function () {
	        return validate(this, NAME)[SIZE];
	      }
	    });
	    return C;
	  },
	  def: function (that, key, value) {
	    var entry = getEntry(that, key);
	    var prev, index;
	    // change existing entry
	    if (entry) {
	      entry.v = value;
	    // create new entry
	    } else {
	      that._l = entry = {
	        i: index = fastKey(key, true), // <- index
	        k: key,                        // <- key
	        v: value,                      // <- value
	        p: prev = that._l,             // <- previous entry
	        n: undefined,                  // <- next entry
	        r: false                       // <- removed
	      };
	      if (!that._f) that._f = entry;
	      if (prev) prev.n = entry;
	      that[SIZE]++;
	      // add to index
	      if (index !== 'F') that._i[index] = entry;
	    } return that;
	  },
	  getEntry: getEntry,
	  setStrong: function (C, NAME, IS_MAP) {
	    // add .keys, .values, .entries, [@@iterator]
	    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
	    $iterDefine(C, NAME, function (iterated, kind) {
	      this._t = validate(iterated, NAME); // target
	      this._k = kind;                     // kind
	      this._l = undefined;                // previous
	    }, function () {
	      var that = this;
	      var kind = that._k;
	      var entry = that._l;
	      // revert to the last existing entry
	      while (entry && entry.r) entry = entry.p;
	      // get next entry
	      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
	        // or finish the iteration
	        that._t = undefined;
	        return step(1);
	      }
	      // return step by kind
	      if (kind == 'keys') return step(0, entry.k);
	      if (kind == 'values') return step(0, entry.v);
	      return step(0, [entry.k, entry.v]);
	    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);
	
	    // add [@@species], 23.1.2.2, 23.2.2.2
	    setSpecies(NAME);
	  }
	};


/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(13);
	module.exports = function (it, TYPE) {
	  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
	  return it;
	};


/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var global = __webpack_require__(4);
	var $export = __webpack_require__(8);
	var redefine = __webpack_require__(18);
	var redefineAll = __webpack_require__(214);
	var meta = __webpack_require__(22);
	var forOf = __webpack_require__(207);
	var anInstance = __webpack_require__(206);
	var isObject = __webpack_require__(13);
	var fails = __webpack_require__(7);
	var $iterDetect = __webpack_require__(166);
	var setToStringTag = __webpack_require__(24);
	var inheritIfRequired = __webpack_require__(87);
	
	module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
	  var Base = global[NAME];
	  var C = Base;
	  var ADDER = IS_MAP ? 'set' : 'add';
	  var proto = C && C.prototype;
	  var O = {};
	  var fixMethod = function (KEY) {
	    var fn = proto[KEY];
	    redefine(proto, KEY,
	      KEY == 'delete' ? function (a) {
	        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'has' ? function has(a) {
	        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'get' ? function get(a) {
	        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'add' ? function add(a) { fn.call(this, a === 0 ? 0 : a); return this; }
	        : function set(a, b) { fn.call(this, a === 0 ? 0 : a, b); return this; }
	    );
	  };
	  if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
	    new C().entries().next();
	  }))) {
	    // create collection constructor
	    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
	    redefineAll(C.prototype, methods);
	    meta.NEED = true;
	  } else {
	    var instance = new C();
	    // early implementations not supports chaining
	    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
	    // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
	    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
	    // most early implementations doesn't supports iterables, most modern - not close it correctly
	    var ACCEPT_ITERABLES = $iterDetect(function (iter) { new C(iter); }); // eslint-disable-line no-new
	    // for early implementations -0 and +0 not the same
	    var BUGGY_ZERO = !IS_WEAK && fails(function () {
	      // V8 ~ Chromium 42- fails only with 5+ elements
	      var $instance = new C();
	      var index = 5;
	      while (index--) $instance[ADDER](index, index);
	      return !$instance.has(-0);
	    });
	    if (!ACCEPT_ITERABLES) {
	      C = wrapper(function (target, iterable) {
	        anInstance(target, C, NAME);
	        var that = inheritIfRequired(new Base(), target, C);
	        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
	        return that;
	      });
	      C.prototype = proto;
	      proto.constructor = C;
	    }
	    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
	      fixMethod('delete');
	      fixMethod('has');
	      IS_MAP && fixMethod('get');
	    }
	    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
	    // weak collections should not contains .clear method
	    if (IS_WEAK && proto.clear) delete proto.clear;
	  }
	
	  setToStringTag(C, NAME);
	
	  O[NAME] = C;
	  $export($export.G + $export.W + $export.F * (C != Base), O);
	
	  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);
	
	  return C;
	};


/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(216);
	var validate = __webpack_require__(217);
	var SET = 'Set';
	
	// 23.2 Set Objects
	module.exports = __webpack_require__(218)(SET, function (get) {
	  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.2.3.1 Set.prototype.add(value)
	  add: function add(value) {
	    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
	  }
	}, strong);


/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var each = __webpack_require__(173)(0);
	var redefine = __webpack_require__(18);
	var meta = __webpack_require__(22);
	var assign = __webpack_require__(68);
	var weak = __webpack_require__(221);
	var isObject = __webpack_require__(13);
	var fails = __webpack_require__(7);
	var validate = __webpack_require__(217);
	var WEAK_MAP = 'WeakMap';
	var getWeak = meta.getWeak;
	var isExtensible = Object.isExtensible;
	var uncaughtFrozenStore = weak.ufstore;
	var tmp = {};
	var InternalMap;
	
	var wrapper = function (get) {
	  return function WeakMap() {
	    return get(this, arguments.length > 0 ? arguments[0] : undefined);
	  };
	};
	
	var methods = {
	  // 23.3.3.3 WeakMap.prototype.get(key)
	  get: function get(key) {
	    if (isObject(key)) {
	      var data = getWeak(key);
	      if (data === true) return uncaughtFrozenStore(validate(this, WEAK_MAP)).get(key);
	      return data ? data[this._i] : undefined;
	    }
	  },
	  // 23.3.3.5 WeakMap.prototype.set(key, value)
	  set: function set(key, value) {
	    return weak.def(validate(this, WEAK_MAP), key, value);
	  }
	};
	
	// 23.3 WeakMap Objects
	var $WeakMap = module.exports = __webpack_require__(218)(WEAK_MAP, wrapper, methods, weak, true, true);
	
	// IE11 WeakMap frozen keys fix
	if (fails(function () { return new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7; })) {
	  InternalMap = weak.getConstructor(wrapper, WEAK_MAP);
	  assign(InternalMap.prototype, methods);
	  meta.NEED = true;
	  each(['delete', 'has', 'get', 'set'], function (key) {
	    var proto = $WeakMap.prototype;
	    var method = proto[key];
	    redefine(proto, key, function (a, b) {
	      // store frozen objects on internal weakmap shim
	      if (isObject(a) && !isExtensible(a)) {
	        if (!this._f) this._f = new InternalMap();
	        var result = this._f[key](a, b);
	        return key == 'set' ? this : result;
	      // store all the rest on native weakmap
	      } return method.call(this, a, b);
	    });
	  });
	}


/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var redefineAll = __webpack_require__(214);
	var getWeak = __webpack_require__(22).getWeak;
	var anObject = __webpack_require__(12);
	var isObject = __webpack_require__(13);
	var anInstance = __webpack_require__(206);
	var forOf = __webpack_require__(207);
	var createArrayMethod = __webpack_require__(173);
	var $has = __webpack_require__(5);
	var validate = __webpack_require__(217);
	var arrayFind = createArrayMethod(5);
	var arrayFindIndex = createArrayMethod(6);
	var id = 0;
	
	// fallback for uncaught frozen keys
	var uncaughtFrozenStore = function (that) {
	  return that._l || (that._l = new UncaughtFrozenStore());
	};
	var UncaughtFrozenStore = function () {
	  this.a = [];
	};
	var findUncaughtFrozen = function (store, key) {
	  return arrayFind(store.a, function (it) {
	    return it[0] === key;
	  });
	};
	UncaughtFrozenStore.prototype = {
	  get: function (key) {
	    var entry = findUncaughtFrozen(this, key);
	    if (entry) return entry[1];
	  },
	  has: function (key) {
	    return !!findUncaughtFrozen(this, key);
	  },
	  set: function (key, value) {
	    var entry = findUncaughtFrozen(this, key);
	    if (entry) entry[1] = value;
	    else this.a.push([key, value]);
	  },
	  'delete': function (key) {
	    var index = arrayFindIndex(this.a, function (it) {
	      return it[0] === key;
	    });
	    if (~index) this.a.splice(index, 1);
	    return !!~index;
	  }
	};
	
	module.exports = {
	  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
	    var C = wrapper(function (that, iterable) {
	      anInstance(that, C, NAME, '_i');
	      that._t = NAME;      // collection type
	      that._i = id++;      // collection id
	      that._l = undefined; // leak store for uncaught frozen objects
	      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.3.3.2 WeakMap.prototype.delete(key)
	      // 23.4.3.3 WeakSet.prototype.delete(value)
	      'delete': function (key) {
	        if (!isObject(key)) return false;
	        var data = getWeak(key);
	        if (data === true) return uncaughtFrozenStore(validate(this, NAME))['delete'](key);
	        return data && $has(data, this._i) && delete data[this._i];
	      },
	      // 23.3.3.4 WeakMap.prototype.has(key)
	      // 23.4.3.4 WeakSet.prototype.has(value)
	      has: function has(key) {
	        if (!isObject(key)) return false;
	        var data = getWeak(key);
	        if (data === true) return uncaughtFrozenStore(validate(this, NAME)).has(key);
	        return data && $has(data, this._i);
	      }
	    });
	    return C;
	  },
	  def: function (that, key, value) {
	    var data = getWeak(anObject(key), true);
	    if (data === true) uncaughtFrozenStore(that).set(key, value);
	    else data[that._i] = value;
	    return that;
	  },
	  ufstore: uncaughtFrozenStore
	};


/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var weak = __webpack_require__(221);
	var validate = __webpack_require__(217);
	var WEAK_SET = 'WeakSet';
	
	// 23.4 WeakSet Objects
	__webpack_require__(218)(WEAK_SET, function (get) {
	  return function WeakSet() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.4.3.1 WeakSet.prototype.add(value)
	  add: function add(value) {
	    return weak.def(validate(this, WEAK_SET), value, true);
	  }
	}, weak, false, true);


/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8);
	var $typed = __webpack_require__(224);
	var buffer = __webpack_require__(225);
	var anObject = __webpack_require__(12);
	var toAbsoluteIndex = __webpack_require__(39);
	var toLength = __webpack_require__(37);
	var isObject = __webpack_require__(13);
	var ArrayBuffer = __webpack_require__(4).ArrayBuffer;
	var speciesConstructor = __webpack_require__(208);
	var $ArrayBuffer = buffer.ArrayBuffer;
	var $DataView = buffer.DataView;
	var $isView = $typed.ABV && ArrayBuffer.isView;
	var $slice = $ArrayBuffer.prototype.slice;
	var VIEW = $typed.VIEW;
	var ARRAY_BUFFER = 'ArrayBuffer';
	
	$export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), { ArrayBuffer: $ArrayBuffer });
	
	$export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {
	  // 24.1.3.1 ArrayBuffer.isView(arg)
	  isView: function isView(it) {
	    return $isView && $isView(it) || isObject(it) && VIEW in it;
	  }
	});
	
	$export($export.P + $export.U + $export.F * __webpack_require__(7)(function () {
	  return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
	}), ARRAY_BUFFER, {
	  // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
	  slice: function slice(start, end) {
	    if ($slice !== undefined && end === undefined) return $slice.call(anObject(this), start); // FF fix
	    var len = anObject(this).byteLength;
	    var first = toAbsoluteIndex(start, len);
	    var final = toAbsoluteIndex(end === undefined ? len : end, len);
	    var result = new (speciesConstructor(this, $ArrayBuffer))(toLength(final - first));
	    var viewS = new $DataView(this);
	    var viewT = new $DataView(result);
	    var index = 0;
	    while (first < final) {
	      viewT.setUint8(index++, viewS.getUint8(first++));
	    } return result;
	  }
	});
	
	__webpack_require__(193)(ARRAY_BUFFER);


/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(4);
	var hide = __webpack_require__(10);
	var uid = __webpack_require__(19);
	var TYPED = uid('typed_array');
	var VIEW = uid('view');
	var ABV = !!(global.ArrayBuffer && global.DataView);
	var CONSTR = ABV;
	var i = 0;
	var l = 9;
	var Typed;
	
	var TypedArrayConstructors = (
	  'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'
	).split(',');
	
	while (i < l) {
	  if (Typed = global[TypedArrayConstructors[i++]]) {
	    hide(Typed.prototype, TYPED, true);
	    hide(Typed.prototype, VIEW, true);
	  } else CONSTR = false;
	}
	
	module.exports = {
	  ABV: ABV,
	  CONSTR: CONSTR,
	  TYPED: TYPED,
	  VIEW: VIEW
	};


/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var global = __webpack_require__(4);
	var DESCRIPTORS = __webpack_require__(6);
	var LIBRARY = __webpack_require__(28);
	var $typed = __webpack_require__(224);
	var hide = __webpack_require__(10);
	var redefineAll = __webpack_require__(214);
	var fails = __webpack_require__(7);
	var anInstance = __webpack_require__(206);
	var toInteger = __webpack_require__(38);
	var toLength = __webpack_require__(37);
	var toIndex = __webpack_require__(226);
	var gOPN = __webpack_require__(49).f;
	var dP = __webpack_require__(11).f;
	var arrayFill = __webpack_require__(189);
	var setToStringTag = __webpack_require__(24);
	var ARRAY_BUFFER = 'ArrayBuffer';
	var DATA_VIEW = 'DataView';
	var PROTOTYPE = 'prototype';
	var WRONG_LENGTH = 'Wrong length!';
	var WRONG_INDEX = 'Wrong index!';
	var $ArrayBuffer = global[ARRAY_BUFFER];
	var $DataView = global[DATA_VIEW];
	var Math = global.Math;
	var RangeError = global.RangeError;
	// eslint-disable-next-line no-shadow-restricted-names
	var Infinity = global.Infinity;
	var BaseBuffer = $ArrayBuffer;
	var abs = Math.abs;
	var pow = Math.pow;
	var floor = Math.floor;
	var log = Math.log;
	var LN2 = Math.LN2;
	var BUFFER = 'buffer';
	var BYTE_LENGTH = 'byteLength';
	var BYTE_OFFSET = 'byteOffset';
	var $BUFFER = DESCRIPTORS ? '_b' : BUFFER;
	var $LENGTH = DESCRIPTORS ? '_l' : BYTE_LENGTH;
	var $OFFSET = DESCRIPTORS ? '_o' : BYTE_OFFSET;
	
	// IEEE754 conversions based on https://github.com/feross/ieee754
	function packIEEE754(value, mLen, nBytes) {
	  var buffer = Array(nBytes);
	  var eLen = nBytes * 8 - mLen - 1;
	  var eMax = (1 << eLen) - 1;
	  var eBias = eMax >> 1;
	  var rt = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0;
	  var i = 0;
	  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
	  var e, m, c;
	  value = abs(value);
	  // eslint-disable-next-line no-self-compare
	  if (value != value || value === Infinity) {
	    // eslint-disable-next-line no-self-compare
	    m = value != value ? 1 : 0;
	    e = eMax;
	  } else {
	    e = floor(log(value) / LN2);
	    if (value * (c = pow(2, -e)) < 1) {
	      e--;
	      c *= 2;
	    }
	    if (e + eBias >= 1) {
	      value += rt / c;
	    } else {
	      value += rt * pow(2, 1 - eBias);
	    }
	    if (value * c >= 2) {
	      e++;
	      c /= 2;
	    }
	    if (e + eBias >= eMax) {
	      m = 0;
	      e = eMax;
	    } else if (e + eBias >= 1) {
	      m = (value * c - 1) * pow(2, mLen);
	      e = e + eBias;
	    } else {
	      m = value * pow(2, eBias - 1) * pow(2, mLen);
	      e = 0;
	    }
	  }
	  for (; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);
	  e = e << mLen | m;
	  eLen += mLen;
	  for (; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);
	  buffer[--i] |= s * 128;
	  return buffer;
	}
	function unpackIEEE754(buffer, mLen, nBytes) {
	  var eLen = nBytes * 8 - mLen - 1;
	  var eMax = (1 << eLen) - 1;
	  var eBias = eMax >> 1;
	  var nBits = eLen - 7;
	  var i = nBytes - 1;
	  var s = buffer[i--];
	  var e = s & 127;
	  var m;
	  s >>= 7;
	  for (; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);
	  m = e & (1 << -nBits) - 1;
	  e >>= -nBits;
	  nBits += mLen;
	  for (; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);
	  if (e === 0) {
	    e = 1 - eBias;
	  } else if (e === eMax) {
	    return m ? NaN : s ? -Infinity : Infinity;
	  } else {
	    m = m + pow(2, mLen);
	    e = e - eBias;
	  } return (s ? -1 : 1) * m * pow(2, e - mLen);
	}
	
	function unpackI32(bytes) {
	  return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
	}
	function packI8(it) {
	  return [it & 0xff];
	}
	function packI16(it) {
	  return [it & 0xff, it >> 8 & 0xff];
	}
	function packI32(it) {
	  return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
	}
	function packF64(it) {
	  return packIEEE754(it, 52, 8);
	}
	function packF32(it) {
	  return packIEEE754(it, 23, 4);
	}
	
	function addGetter(C, key, internal) {
	  dP(C[PROTOTYPE], key, { get: function () { return this[internal]; } });
	}
	
	function get(view, bytes, index, isLittleEndian) {
	  var numIndex = +index;
	  var intIndex = toIndex(numIndex);
	  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
	  var store = view[$BUFFER]._b;
	  var start = intIndex + view[$OFFSET];
	  var pack = store.slice(start, start + bytes);
	  return isLittleEndian ? pack : pack.reverse();
	}
	function set(view, bytes, index, conversion, value, isLittleEndian) {
	  var numIndex = +index;
	  var intIndex = toIndex(numIndex);
	  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
	  var store = view[$BUFFER]._b;
	  var start = intIndex + view[$OFFSET];
	  var pack = conversion(+value);
	  for (var i = 0; i < bytes; i++) store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
	}
	
	if (!$typed.ABV) {
	  $ArrayBuffer = function ArrayBuffer(length) {
	    anInstance(this, $ArrayBuffer, ARRAY_BUFFER);
	    var byteLength = toIndex(length);
	    this._b = arrayFill.call(Array(byteLength), 0);
	    this[$LENGTH] = byteLength;
	  };
	
	  $DataView = function DataView(buffer, byteOffset, byteLength) {
	    anInstance(this, $DataView, DATA_VIEW);
	    anInstance(buffer, $ArrayBuffer, DATA_VIEW);
	    var bufferLength = buffer[$LENGTH];
	    var offset = toInteger(byteOffset);
	    if (offset < 0 || offset > bufferLength) throw RangeError('Wrong offset!');
	    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
	    if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH);
	    this[$BUFFER] = buffer;
	    this[$OFFSET] = offset;
	    this[$LENGTH] = byteLength;
	  };
	
	  if (DESCRIPTORS) {
	    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
	    addGetter($DataView, BUFFER, '_b');
	    addGetter($DataView, BYTE_LENGTH, '_l');
	    addGetter($DataView, BYTE_OFFSET, '_o');
	  }
	
	  redefineAll($DataView[PROTOTYPE], {
	    getInt8: function getInt8(byteOffset) {
	      return get(this, 1, byteOffset)[0] << 24 >> 24;
	    },
	    getUint8: function getUint8(byteOffset) {
	      return get(this, 1, byteOffset)[0];
	    },
	    getInt16: function getInt16(byteOffset /* , littleEndian */) {
	      var bytes = get(this, 2, byteOffset, arguments[1]);
	      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
	    },
	    getUint16: function getUint16(byteOffset /* , littleEndian */) {
	      var bytes = get(this, 2, byteOffset, arguments[1]);
	      return bytes[1] << 8 | bytes[0];
	    },
	    getInt32: function getInt32(byteOffset /* , littleEndian */) {
	      return unpackI32(get(this, 4, byteOffset, arguments[1]));
	    },
	    getUint32: function getUint32(byteOffset /* , littleEndian */) {
	      return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
	    },
	    getFloat32: function getFloat32(byteOffset /* , littleEndian */) {
	      return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
	    },
	    getFloat64: function getFloat64(byteOffset /* , littleEndian */) {
	      return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
	    },
	    setInt8: function setInt8(byteOffset, value) {
	      set(this, 1, byteOffset, packI8, value);
	    },
	    setUint8: function setUint8(byteOffset, value) {
	      set(this, 1, byteOffset, packI8, value);
	    },
	    setInt16: function setInt16(byteOffset, value /* , littleEndian */) {
	      set(this, 2, byteOffset, packI16, value, arguments[2]);
	    },
	    setUint16: function setUint16(byteOffset, value /* , littleEndian */) {
	      set(this, 2, byteOffset, packI16, value, arguments[2]);
	    },
	    setInt32: function setInt32(byteOffset, value /* , littleEndian */) {
	      set(this, 4, byteOffset, packI32, value, arguments[2]);
	    },
	    setUint32: function setUint32(byteOffset, value /* , littleEndian */) {
	      set(this, 4, byteOffset, packI32, value, arguments[2]);
	    },
	    setFloat32: function setFloat32(byteOffset, value /* , littleEndian */) {
	      set(this, 4, byteOffset, packF32, value, arguments[2]);
	    },
	    setFloat64: function setFloat64(byteOffset, value /* , littleEndian */) {
	      set(this, 8, byteOffset, packF64, value, arguments[2]);
	    }
	  });
	} else {
	  if (!fails(function () {
	    $ArrayBuffer(1);
	  }) || !fails(function () {
	    new $ArrayBuffer(-1); // eslint-disable-line no-new
	  }) || fails(function () {
	    new $ArrayBuffer(); // eslint-disable-line no-new
	    new $ArrayBuffer(1.5); // eslint-disable-line no-new
	    new $ArrayBuffer(NaN); // eslint-disable-line no-new
	    return $ArrayBuffer.name != ARRAY_BUFFER;
	  })) {
	    $ArrayBuffer = function ArrayBuffer(length) {
	      anInstance(this, $ArrayBuffer);
	      return new BaseBuffer(toIndex(length));
	    };
	    var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
	    for (var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j;) {
	      if (!((key = keys[j++]) in $ArrayBuffer)) hide($ArrayBuffer, key, BaseBuffer[key]);
	    }
	    if (!LIBRARY) ArrayBufferProto.constructor = $ArrayBuffer;
	  }
	  // iOS Safari 7.x bug
	  var view = new $DataView(new $ArrayBuffer(2));
	  var $setInt8 = $DataView[PROTOTYPE].setInt8;
	  view.setInt8(0, 2147483648);
	  view.setInt8(1, 2147483649);
	  if (view.getInt8(0) || !view.getInt8(1)) redefineAll($DataView[PROTOTYPE], {
	    setInt8: function setInt8(byteOffset, value) {
	      $setInt8.call(this, byteOffset, value << 24 >> 24);
	    },
	    setUint8: function setUint8(byteOffset, value) {
	      $setInt8.call(this, byteOffset, value << 24 >> 24);
	    }
	  }, true);
	}
	setToStringTag($ArrayBuffer, ARRAY_BUFFER);
	setToStringTag($DataView, DATA_VIEW);
	hide($DataView[PROTOTYPE], $typed.VIEW, true);
	exports[ARRAY_BUFFER] = $ArrayBuffer;
	exports[DATA_VIEW] = $DataView;


/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

	// https://tc39.github.io/ecma262/#sec-toindex
	var toInteger = __webpack_require__(38);
	var toLength = __webpack_require__(37);
	module.exports = function (it) {
	  if (it === undefined) return 0;
	  var number = toInteger(it);
	  var length = toLength(number);
	  if (number !== length) throw RangeError('Wrong length!');
	  return length;
	};


/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);
	$export($export.G + $export.W + $export.F * !__webpack_require__(224).ABV, {
	  DataView: __webpack_require__(225).DataView
	});


/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(229)('Int8', 1, function (init) {
	  return function Int8Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	});


/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	if (__webpack_require__(6)) {
	  var LIBRARY = __webpack_require__(28);
	  var global = __webpack_require__(4);
	  var fails = __webpack_require__(7);
	  var $export = __webpack_require__(8);
	  var $typed = __webpack_require__(224);
	  var $buffer = __webpack_require__(225);
	  var ctx = __webpack_require__(20);
	  var anInstance = __webpack_require__(206);
	  var propertyDesc = __webpack_require__(17);
	  var hide = __webpack_require__(10);
	  var redefineAll = __webpack_require__(214);
	  var toInteger = __webpack_require__(38);
	  var toLength = __webpack_require__(37);
	  var toIndex = __webpack_require__(226);
	  var toAbsoluteIndex = __webpack_require__(39);
	  var toPrimitive = __webpack_require__(16);
	  var has = __webpack_require__(5);
	  var classof = __webpack_require__(74);
	  var isObject = __webpack_require__(13);
	  var toObject = __webpack_require__(57);
	  var isArrayIter = __webpack_require__(163);
	  var create = __webpack_require__(45);
	  var getPrototypeOf = __webpack_require__(58);
	  var gOPN = __webpack_require__(49).f;
	  var getIterFn = __webpack_require__(165);
	  var uid = __webpack_require__(19);
	  var wks = __webpack_require__(25);
	  var createArrayMethod = __webpack_require__(173);
	  var createArrayIncludes = __webpack_require__(36);
	  var speciesConstructor = __webpack_require__(208);
	  var ArrayIterators = __webpack_require__(194);
	  var Iterators = __webpack_require__(129);
	  var $iterDetect = __webpack_require__(166);
	  var setSpecies = __webpack_require__(193);
	  var arrayFill = __webpack_require__(189);
	  var arrayCopyWithin = __webpack_require__(186);
	  var $DP = __webpack_require__(11);
	  var $GOPD = __webpack_require__(50);
	  var dP = $DP.f;
	  var gOPD = $GOPD.f;
	  var RangeError = global.RangeError;
	  var TypeError = global.TypeError;
	  var Uint8Array = global.Uint8Array;
	  var ARRAY_BUFFER = 'ArrayBuffer';
	  var SHARED_BUFFER = 'Shared' + ARRAY_BUFFER;
	  var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
	  var PROTOTYPE = 'prototype';
	  var ArrayProto = Array[PROTOTYPE];
	  var $ArrayBuffer = $buffer.ArrayBuffer;
	  var $DataView = $buffer.DataView;
	  var arrayForEach = createArrayMethod(0);
	  var arrayFilter = createArrayMethod(2);
	  var arraySome = createArrayMethod(3);
	  var arrayEvery = createArrayMethod(4);
	  var arrayFind = createArrayMethod(5);
	  var arrayFindIndex = createArrayMethod(6);
	  var arrayIncludes = createArrayIncludes(true);
	  var arrayIndexOf = createArrayIncludes(false);
	  var arrayValues = ArrayIterators.values;
	  var arrayKeys = ArrayIterators.keys;
	  var arrayEntries = ArrayIterators.entries;
	  var arrayLastIndexOf = ArrayProto.lastIndexOf;
	  var arrayReduce = ArrayProto.reduce;
	  var arrayReduceRight = ArrayProto.reduceRight;
	  var arrayJoin = ArrayProto.join;
	  var arraySort = ArrayProto.sort;
	  var arraySlice = ArrayProto.slice;
	  var arrayToString = ArrayProto.toString;
	  var arrayToLocaleString = ArrayProto.toLocaleString;
	  var ITERATOR = wks('iterator');
	  var TAG = wks('toStringTag');
	  var TYPED_CONSTRUCTOR = uid('typed_constructor');
	  var DEF_CONSTRUCTOR = uid('def_constructor');
	  var ALL_CONSTRUCTORS = $typed.CONSTR;
	  var TYPED_ARRAY = $typed.TYPED;
	  var VIEW = $typed.VIEW;
	  var WRONG_LENGTH = 'Wrong length!';
	
	  var $map = createArrayMethod(1, function (O, length) {
	    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
	  });
	
	  var LITTLE_ENDIAN = fails(function () {
	    // eslint-disable-next-line no-undef
	    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
	  });
	
	  var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function () {
	    new Uint8Array(1).set({});
	  });
	
	  var toOffset = function (it, BYTES) {
	    var offset = toInteger(it);
	    if (offset < 0 || offset % BYTES) throw RangeError('Wrong offset!');
	    return offset;
	  };
	
	  var validate = function (it) {
	    if (isObject(it) && TYPED_ARRAY in it) return it;
	    throw TypeError(it + ' is not a typed array!');
	  };
	
	  var allocate = function (C, length) {
	    if (!(isObject(C) && TYPED_CONSTRUCTOR in C)) {
	      throw TypeError('It is not a typed array constructor!');
	    } return new C(length);
	  };
	
	  var speciesFromList = function (O, list) {
	    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
	  };
	
	  var fromList = function (C, list) {
	    var index = 0;
	    var length = list.length;
	    var result = allocate(C, length);
	    while (length > index) result[index] = list[index++];
	    return result;
	  };
	
	  var addGetter = function (it, key, internal) {
	    dP(it, key, { get: function () { return this._d[internal]; } });
	  };
	
	  var $from = function from(source /* , mapfn, thisArg */) {
	    var O = toObject(source);
	    var aLen = arguments.length;
	    var mapfn = aLen > 1 ? arguments[1] : undefined;
	    var mapping = mapfn !== undefined;
	    var iterFn = getIterFn(O);
	    var i, length, values, result, step, iterator;
	    if (iterFn != undefined && !isArrayIter(iterFn)) {
	      for (iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++) {
	        values.push(step.value);
	      } O = values;
	    }
	    if (mapping && aLen > 2) mapfn = ctx(mapfn, arguments[2], 2);
	    for (i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++) {
	      result[i] = mapping ? mapfn(O[i], i) : O[i];
	    }
	    return result;
	  };
	
	  var $of = function of(/* ...items */) {
	    var index = 0;
	    var length = arguments.length;
	    var result = allocate(this, length);
	    while (length > index) result[index] = arguments[index++];
	    return result;
	  };
	
	  // iOS Safari 6.x fails here
	  var TO_LOCALE_BUG = !!Uint8Array && fails(function () { arrayToLocaleString.call(new Uint8Array(1)); });
	
	  var $toLocaleString = function toLocaleString() {
	    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
	  };
	
	  var proto = {
	    copyWithin: function copyWithin(target, start /* , end */) {
	      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
	    },
	    every: function every(callbackfn /* , thisArg */) {
	      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    fill: function fill(value /* , start, end */) { // eslint-disable-line no-unused-vars
	      return arrayFill.apply(validate(this), arguments);
	    },
	    filter: function filter(callbackfn /* , thisArg */) {
	      return speciesFromList(this, arrayFilter(validate(this), callbackfn,
	        arguments.length > 1 ? arguments[1] : undefined));
	    },
	    find: function find(predicate /* , thisArg */) {
	      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    findIndex: function findIndex(predicate /* , thisArg */) {
	      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    forEach: function forEach(callbackfn /* , thisArg */) {
	      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    indexOf: function indexOf(searchElement /* , fromIndex */) {
	      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    includes: function includes(searchElement /* , fromIndex */) {
	      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    join: function join(separator) { // eslint-disable-line no-unused-vars
	      return arrayJoin.apply(validate(this), arguments);
	    },
	    lastIndexOf: function lastIndexOf(searchElement /* , fromIndex */) { // eslint-disable-line no-unused-vars
	      return arrayLastIndexOf.apply(validate(this), arguments);
	    },
	    map: function map(mapfn /* , thisArg */) {
	      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    reduce: function reduce(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars
	      return arrayReduce.apply(validate(this), arguments);
	    },
	    reduceRight: function reduceRight(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars
	      return arrayReduceRight.apply(validate(this), arguments);
	    },
	    reverse: function reverse() {
	      var that = this;
	      var length = validate(that).length;
	      var middle = Math.floor(length / 2);
	      var index = 0;
	      var value;
	      while (index < middle) {
	        value = that[index];
	        that[index++] = that[--length];
	        that[length] = value;
	      } return that;
	    },
	    some: function some(callbackfn /* , thisArg */) {
	      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    sort: function sort(comparefn) {
	      return arraySort.call(validate(this), comparefn);
	    },
	    subarray: function subarray(begin, end) {
	      var O = validate(this);
	      var length = O.length;
	      var $begin = toAbsoluteIndex(begin, length);
	      return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(
	        O.buffer,
	        O.byteOffset + $begin * O.BYTES_PER_ELEMENT,
	        toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - $begin)
	      );
	    }
	  };
	
	  var $slice = function slice(start, end) {
	    return speciesFromList(this, arraySlice.call(validate(this), start, end));
	  };
	
	  var $set = function set(arrayLike /* , offset */) {
	    validate(this);
	    var offset = toOffset(arguments[1], 1);
	    var length = this.length;
	    var src = toObject(arrayLike);
	    var len = toLength(src.length);
	    var index = 0;
	    if (len + offset > length) throw RangeError(WRONG_LENGTH);
	    while (index < len) this[offset + index] = src[index++];
	  };
	
	  var $iterators = {
	    entries: function entries() {
	      return arrayEntries.call(validate(this));
	    },
	    keys: function keys() {
	      return arrayKeys.call(validate(this));
	    },
	    values: function values() {
	      return arrayValues.call(validate(this));
	    }
	  };
	
	  var isTAIndex = function (target, key) {
	    return isObject(target)
	      && target[TYPED_ARRAY]
	      && typeof key != 'symbol'
	      && key in target
	      && String(+key) == String(key);
	  };
	  var $getDesc = function getOwnPropertyDescriptor(target, key) {
	    return isTAIndex(target, key = toPrimitive(key, true))
	      ? propertyDesc(2, target[key])
	      : gOPD(target, key);
	  };
	  var $setDesc = function defineProperty(target, key, desc) {
	    if (isTAIndex(target, key = toPrimitive(key, true))
	      && isObject(desc)
	      && has(desc, 'value')
	      && !has(desc, 'get')
	      && !has(desc, 'set')
	      // TODO: add validation descriptor w/o calling accessors
	      && !desc.configurable
	      && (!has(desc, 'writable') || desc.writable)
	      && (!has(desc, 'enumerable') || desc.enumerable)
	    ) {
	      target[key] = desc.value;
	      return target;
	    } return dP(target, key, desc);
	  };
	
	  if (!ALL_CONSTRUCTORS) {
	    $GOPD.f = $getDesc;
	    $DP.f = $setDesc;
	  }
	
	  $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
	    getOwnPropertyDescriptor: $getDesc,
	    defineProperty: $setDesc
	  });
	
	  if (fails(function () { arrayToString.call({}); })) {
	    arrayToString = arrayToLocaleString = function toString() {
	      return arrayJoin.call(this);
	    };
	  }
	
	  var $TypedArrayPrototype$ = redefineAll({}, proto);
	  redefineAll($TypedArrayPrototype$, $iterators);
	  hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
	  redefineAll($TypedArrayPrototype$, {
	    slice: $slice,
	    set: $set,
	    constructor: function () { /* noop */ },
	    toString: arrayToString,
	    toLocaleString: $toLocaleString
	  });
	  addGetter($TypedArrayPrototype$, 'buffer', 'b');
	  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
	  addGetter($TypedArrayPrototype$, 'byteLength', 'l');
	  addGetter($TypedArrayPrototype$, 'length', 'e');
	  dP($TypedArrayPrototype$, TAG, {
	    get: function () { return this[TYPED_ARRAY]; }
	  });
	
	  // eslint-disable-next-line max-statements
	  module.exports = function (KEY, BYTES, wrapper, CLAMPED) {
	    CLAMPED = !!CLAMPED;
	    var NAME = KEY + (CLAMPED ? 'Clamped' : '') + 'Array';
	    var GETTER = 'get' + KEY;
	    var SETTER = 'set' + KEY;
	    var TypedArray = global[NAME];
	    var Base = TypedArray || {};
	    var TAC = TypedArray && getPrototypeOf(TypedArray);
	    var FORCED = !TypedArray || !$typed.ABV;
	    var O = {};
	    var TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
	    var getter = function (that, index) {
	      var data = that._d;
	      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
	    };
	    var setter = function (that, index, value) {
	      var data = that._d;
	      if (CLAMPED) value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
	      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
	    };
	    var addElement = function (that, index) {
	      dP(that, index, {
	        get: function () {
	          return getter(this, index);
	        },
	        set: function (value) {
	          return setter(this, index, value);
	        },
	        enumerable: true
	      });
	    };
	    if (FORCED) {
	      TypedArray = wrapper(function (that, data, $offset, $length) {
	        anInstance(that, TypedArray, NAME, '_d');
	        var index = 0;
	        var offset = 0;
	        var buffer, byteLength, length, klass;
	        if (!isObject(data)) {
	          length = toIndex(data);
	          byteLength = length * BYTES;
	          buffer = new $ArrayBuffer(byteLength);
	        } else if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
	          buffer = data;
	          offset = toOffset($offset, BYTES);
	          var $len = data.byteLength;
	          if ($length === undefined) {
	            if ($len % BYTES) throw RangeError(WRONG_LENGTH);
	            byteLength = $len - offset;
	            if (byteLength < 0) throw RangeError(WRONG_LENGTH);
	          } else {
	            byteLength = toLength($length) * BYTES;
	            if (byteLength + offset > $len) throw RangeError(WRONG_LENGTH);
	          }
	          length = byteLength / BYTES;
	        } else if (TYPED_ARRAY in data) {
	          return fromList(TypedArray, data);
	        } else {
	          return $from.call(TypedArray, data);
	        }
	        hide(that, '_d', {
	          b: buffer,
	          o: offset,
	          l: byteLength,
	          e: length,
	          v: new $DataView(buffer)
	        });
	        while (index < length) addElement(that, index++);
	      });
	      TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
	      hide(TypedArrayPrototype, 'constructor', TypedArray);
	    } else if (!fails(function () {
	      TypedArray(1);
	    }) || !fails(function () {
	      new TypedArray(-1); // eslint-disable-line no-new
	    }) || !$iterDetect(function (iter) {
	      new TypedArray(); // eslint-disable-line no-new
	      new TypedArray(null); // eslint-disable-line no-new
	      new TypedArray(1.5); // eslint-disable-line no-new
	      new TypedArray(iter); // eslint-disable-line no-new
	    }, true)) {
	      TypedArray = wrapper(function (that, data, $offset, $length) {
	        anInstance(that, TypedArray, NAME);
	        var klass;
	        // `ws` module bug, temporarily remove validation length for Uint8Array
	        // https://github.com/websockets/ws/pull/645
	        if (!isObject(data)) return new Base(toIndex(data));
	        if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
	          return $length !== undefined
	            ? new Base(data, toOffset($offset, BYTES), $length)
	            : $offset !== undefined
	              ? new Base(data, toOffset($offset, BYTES))
	              : new Base(data);
	        }
	        if (TYPED_ARRAY in data) return fromList(TypedArray, data);
	        return $from.call(TypedArray, data);
	      });
	      arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function (key) {
	        if (!(key in TypedArray)) hide(TypedArray, key, Base[key]);
	      });
	      TypedArray[PROTOTYPE] = TypedArrayPrototype;
	      if (!LIBRARY) TypedArrayPrototype.constructor = TypedArray;
	    }
	    var $nativeIterator = TypedArrayPrototype[ITERATOR];
	    var CORRECT_ITER_NAME = !!$nativeIterator
	      && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined);
	    var $iterator = $iterators.values;
	    hide(TypedArray, TYPED_CONSTRUCTOR, true);
	    hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
	    hide(TypedArrayPrototype, VIEW, true);
	    hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);
	
	    if (CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)) {
	      dP(TypedArrayPrototype, TAG, {
	        get: function () { return NAME; }
	      });
	    }
	
	    O[NAME] = TypedArray;
	
	    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);
	
	    $export($export.S, NAME, {
	      BYTES_PER_ELEMENT: BYTES
	    });
	
	    $export($export.S + $export.F * fails(function () { Base.of.call(TypedArray, 1); }), NAME, {
	      from: $from,
	      of: $of
	    });
	
	    if (!(BYTES_PER_ELEMENT in TypedArrayPrototype)) hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);
	
	    $export($export.P, NAME, proto);
	
	    setSpecies(NAME);
	
	    $export($export.P + $export.F * FORCED_SET, NAME, { set: $set });
	
	    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);
	
	    if (!LIBRARY && TypedArrayPrototype.toString != arrayToString) TypedArrayPrototype.toString = arrayToString;
	
	    $export($export.P + $export.F * fails(function () {
	      new TypedArray(1).slice();
	    }), NAME, { slice: $slice });
	
	    $export($export.P + $export.F * (fails(function () {
	      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString();
	    }) || !fails(function () {
	      TypedArrayPrototype.toLocaleString.call([1, 2]);
	    })), NAME, { toLocaleString: $toLocaleString });
	
	    Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
	    if (!LIBRARY && !CORRECT_ITER_NAME) hide(TypedArrayPrototype, ITERATOR, $iterator);
	  };
	} else module.exports = function () { /* empty */ };


/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(229)('Uint8', 1, function (init) {
	  return function Uint8Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	});


/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(229)('Uint8', 1, function (init) {
	  return function Uint8ClampedArray(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	}, true);


/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(229)('Int16', 2, function (init) {
	  return function Int16Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	});


/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(229)('Uint16', 2, function (init) {
	  return function Uint16Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	});


/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(229)('Int32', 4, function (init) {
	  return function Int32Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	});


/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(229)('Uint32', 4, function (init) {
	  return function Uint32Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	});


/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(229)('Float32', 4, function (init) {
	  return function Float32Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	});


/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(229)('Float64', 8, function (init) {
	  return function Float64Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	});


/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

	// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
	var $export = __webpack_require__(8);
	var aFunction = __webpack_require__(21);
	var anObject = __webpack_require__(12);
	var rApply = (__webpack_require__(4).Reflect || {}).apply;
	var fApply = Function.apply;
	// MS Edge argumentsList argument is optional
	$export($export.S + $export.F * !__webpack_require__(7)(function () {
	  rApply(function () { /* empty */ });
	}), 'Reflect', {
	  apply: function apply(target, thisArgument, argumentsList) {
	    var T = aFunction(target);
	    var L = anObject(argumentsList);
	    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
	  }
	});


/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

	// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
	var $export = __webpack_require__(8);
	var create = __webpack_require__(45);
	var aFunction = __webpack_require__(21);
	var anObject = __webpack_require__(12);
	var isObject = __webpack_require__(13);
	var fails = __webpack_require__(7);
	var bind = __webpack_require__(76);
	var rConstruct = (__webpack_require__(4).Reflect || {}).construct;
	
	// MS Edge supports only 2 arguments and argumentsList argument is optional
	// FF Nightly sets third argument as `new.target`, but does not create `this` from it
	var NEW_TARGET_BUG = fails(function () {
	  function F() { /* empty */ }
	  return !(rConstruct(function () { /* empty */ }, [], F) instanceof F);
	});
	var ARGS_BUG = !fails(function () {
	  rConstruct(function () { /* empty */ });
	});
	
	$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
	  construct: function construct(Target, args /* , newTarget */) {
	    aFunction(Target);
	    anObject(args);
	    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
	    if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);
	    if (Target == newTarget) {
	      // w/o altered newTarget, optimization for 0-4 arguments
	      switch (args.length) {
	        case 0: return new Target();
	        case 1: return new Target(args[0]);
	        case 2: return new Target(args[0], args[1]);
	        case 3: return new Target(args[0], args[1], args[2]);
	        case 4: return new Target(args[0], args[1], args[2], args[3]);
	      }
	      // w/o altered newTarget, lot of arguments case
	      var $args = [null];
	      $args.push.apply($args, args);
	      return new (bind.apply(Target, $args))();
	    }
	    // with altered newTarget, not support built-in constructors
	    var proto = newTarget.prototype;
	    var instance = create(isObject(proto) ? proto : Object.prototype);
	    var result = Function.apply.call(Target, instance, args);
	    return isObject(result) ? result : instance;
	  }
	});


/***/ }),
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

	// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
	var dP = __webpack_require__(11);
	var $export = __webpack_require__(8);
	var anObject = __webpack_require__(12);
	var toPrimitive = __webpack_require__(16);
	
	// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
	$export($export.S + $export.F * __webpack_require__(7)(function () {
	  // eslint-disable-next-line no-undef
	  Reflect.defineProperty(dP.f({}, 1, { value: 1 }), 1, { value: 2 });
	}), 'Reflect', {
	  defineProperty: function defineProperty(target, propertyKey, attributes) {
	    anObject(target);
	    propertyKey = toPrimitive(propertyKey, true);
	    anObject(attributes);
	    try {
	      dP.f(target, propertyKey, attributes);
	      return true;
	    } catch (e) {
	      return false;
	    }
	  }
	});


/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

	// 26.1.4 Reflect.deleteProperty(target, propertyKey)
	var $export = __webpack_require__(8);
	var gOPD = __webpack_require__(50).f;
	var anObject = __webpack_require__(12);
	
	$export($export.S, 'Reflect', {
	  deleteProperty: function deleteProperty(target, propertyKey) {
	    var desc = gOPD(anObject(target), propertyKey);
	    return desc && !desc.configurable ? false : delete target[propertyKey];
	  }
	});


/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 26.1.5 Reflect.enumerate(target)
	var $export = __webpack_require__(8);
	var anObject = __webpack_require__(12);
	var Enumerate = function (iterated) {
	  this._t = anObject(iterated); // target
	  this._i = 0;                  // next index
	  var keys = this._k = [];      // keys
	  var key;
	  for (key in iterated) keys.push(key);
	};
	__webpack_require__(130)(Enumerate, 'Object', function () {
	  var that = this;
	  var keys = that._k;
	  var key;
	  do {
	    if (that._i >= keys.length) return { value: undefined, done: true };
	  } while (!((key = keys[that._i++]) in that._t));
	  return { value: key, done: false };
	});
	
	$export($export.S, 'Reflect', {
	  enumerate: function enumerate(target) {
	    return new Enumerate(target);
	  }
	});


/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

	// 26.1.6 Reflect.get(target, propertyKey [, receiver])
	var gOPD = __webpack_require__(50);
	var getPrototypeOf = __webpack_require__(58);
	var has = __webpack_require__(5);
	var $export = __webpack_require__(8);
	var isObject = __webpack_require__(13);
	var anObject = __webpack_require__(12);
	
	function get(target, propertyKey /* , receiver */) {
	  var receiver = arguments.length < 3 ? target : arguments[2];
	  var desc, proto;
	  if (anObject(target) === receiver) return target[propertyKey];
	  if (desc = gOPD.f(target, propertyKey)) return has(desc, 'value')
	    ? desc.value
	    : desc.get !== undefined
	      ? desc.get.call(receiver)
	      : undefined;
	  if (isObject(proto = getPrototypeOf(target))) return get(proto, propertyKey, receiver);
	}
	
	$export($export.S, 'Reflect', { get: get });


/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

	// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
	var gOPD = __webpack_require__(50);
	var $export = __webpack_require__(8);
	var anObject = __webpack_require__(12);
	
	$export($export.S, 'Reflect', {
	  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
	    return gOPD.f(anObject(target), propertyKey);
	  }
	});


/***/ }),
/* 245 */
/***/ (function(module, exports, __webpack_require__) {

	// 26.1.8 Reflect.getPrototypeOf(target)
	var $export = __webpack_require__(8);
	var getProto = __webpack_require__(58);
	var anObject = __webpack_require__(12);
	
	$export($export.S, 'Reflect', {
	  getPrototypeOf: function getPrototypeOf(target) {
	    return getProto(anObject(target));
	  }
	});


/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

	// 26.1.9 Reflect.has(target, propertyKey)
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Reflect', {
	  has: function has(target, propertyKey) {
	    return propertyKey in target;
	  }
	});


/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

	// 26.1.10 Reflect.isExtensible(target)
	var $export = __webpack_require__(8);
	var anObject = __webpack_require__(12);
	var $isExtensible = Object.isExtensible;
	
	$export($export.S, 'Reflect', {
	  isExtensible: function isExtensible(target) {
	    anObject(target);
	    return $isExtensible ? $isExtensible(target) : true;
	  }
	});


/***/ }),
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

	// 26.1.11 Reflect.ownKeys(target)
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Reflect', { ownKeys: __webpack_require__(249) });


/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

	// all object keys, includes non-enumerable and symbols
	var gOPN = __webpack_require__(49);
	var gOPS = __webpack_require__(42);
	var anObject = __webpack_require__(12);
	var Reflect = __webpack_require__(4).Reflect;
	module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
	  var keys = gOPN.f(anObject(it));
	  var getSymbols = gOPS.f;
	  return getSymbols ? keys.concat(getSymbols(it)) : keys;
	};


/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

	// 26.1.12 Reflect.preventExtensions(target)
	var $export = __webpack_require__(8);
	var anObject = __webpack_require__(12);
	var $preventExtensions = Object.preventExtensions;
	
	$export($export.S, 'Reflect', {
	  preventExtensions: function preventExtensions(target) {
	    anObject(target);
	    try {
	      if ($preventExtensions) $preventExtensions(target);
	      return true;
	    } catch (e) {
	      return false;
	    }
	  }
	});


/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

	// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
	var dP = __webpack_require__(11);
	var gOPD = __webpack_require__(50);
	var getPrototypeOf = __webpack_require__(58);
	var has = __webpack_require__(5);
	var $export = __webpack_require__(8);
	var createDesc = __webpack_require__(17);
	var anObject = __webpack_require__(12);
	var isObject = __webpack_require__(13);
	
	function set(target, propertyKey, V /* , receiver */) {
	  var receiver = arguments.length < 4 ? target : arguments[3];
	  var ownDesc = gOPD.f(anObject(target), propertyKey);
	  var existingDescriptor, proto;
	  if (!ownDesc) {
	    if (isObject(proto = getPrototypeOf(target))) {
	      return set(proto, propertyKey, V, receiver);
	    }
	    ownDesc = createDesc(0);
	  }
	  if (has(ownDesc, 'value')) {
	    if (ownDesc.writable === false || !isObject(receiver)) return false;
	    existingDescriptor = gOPD.f(receiver, propertyKey) || createDesc(0);
	    existingDescriptor.value = V;
	    dP.f(receiver, propertyKey, existingDescriptor);
	    return true;
	  }
	  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
	}
	
	$export($export.S, 'Reflect', { set: set });


/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

	// 26.1.14 Reflect.setPrototypeOf(target, proto)
	var $export = __webpack_require__(8);
	var setProto = __webpack_require__(72);
	
	if (setProto) $export($export.S, 'Reflect', {
	  setPrototypeOf: function setPrototypeOf(target, proto) {
	    setProto.check(target, proto);
	    try {
	      setProto.set(target, proto);
	      return true;
	    } catch (e) {
	      return false;
	    }
	  }
	});


/***/ }),
/* 253 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/Array.prototype.includes
	var $export = __webpack_require__(8);
	var $includes = __webpack_require__(36)(true);
	
	$export($export.P, 'Array', {
	  includes: function includes(el /* , fromIndex = 0 */) {
	    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	
	__webpack_require__(187)('includes');


/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatMap
	var $export = __webpack_require__(8);
	var flattenIntoArray = __webpack_require__(255);
	var toObject = __webpack_require__(57);
	var toLength = __webpack_require__(37);
	var aFunction = __webpack_require__(21);
	var arraySpeciesCreate = __webpack_require__(174);
	
	$export($export.P, 'Array', {
	  flatMap: function flatMap(callbackfn /* , thisArg */) {
	    var O = toObject(this);
	    var sourceLen, A;
	    aFunction(callbackfn);
	    sourceLen = toLength(O.length);
	    A = arraySpeciesCreate(O, 0);
	    flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments[1]);
	    return A;
	  }
	});
	
	__webpack_require__(187)('flatMap');


/***/ }),
/* 255 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray
	var isArray = __webpack_require__(44);
	var isObject = __webpack_require__(13);
	var toLength = __webpack_require__(37);
	var ctx = __webpack_require__(20);
	var IS_CONCAT_SPREADABLE = __webpack_require__(25)('isConcatSpreadable');
	
	function flattenIntoArray(target, original, source, sourceLen, start, depth, mapper, thisArg) {
	  var targetIndex = start;
	  var sourceIndex = 0;
	  var mapFn = mapper ? ctx(mapper, thisArg, 3) : false;
	  var element, spreadable;
	
	  while (sourceIndex < sourceLen) {
	    if (sourceIndex in source) {
	      element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];
	
	      spreadable = false;
	      if (isObject(element)) {
	        spreadable = element[IS_CONCAT_SPREADABLE];
	        spreadable = spreadable !== undefined ? !!spreadable : isArray(element);
	      }
	
	      if (spreadable && depth > 0) {
	        targetIndex = flattenIntoArray(target, original, element, toLength(element.length), targetIndex, depth - 1) - 1;
	      } else {
	        if (targetIndex >= 0x1fffffffffffff) throw TypeError();
	        target[targetIndex] = element;
	      }
	
	      targetIndex++;
	    }
	    sourceIndex++;
	  }
	  return targetIndex;
	}
	
	module.exports = flattenIntoArray;


/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatten
	var $export = __webpack_require__(8);
	var flattenIntoArray = __webpack_require__(255);
	var toObject = __webpack_require__(57);
	var toLength = __webpack_require__(37);
	var toInteger = __webpack_require__(38);
	var arraySpeciesCreate = __webpack_require__(174);
	
	$export($export.P, 'Array', {
	  flatten: function flatten(/* depthArg = 1 */) {
	    var depthArg = arguments[0];
	    var O = toObject(this);
	    var sourceLen = toLength(O.length);
	    var A = arraySpeciesCreate(O, 0);
	    flattenIntoArray(A, O, O, sourceLen, 0, depthArg === undefined ? 1 : toInteger(depthArg));
	    return A;
	  }
	});
	
	__webpack_require__(187)('flatten');


/***/ }),
/* 257 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/mathiasbynens/String.prototype.at
	var $export = __webpack_require__(8);
	var $at = __webpack_require__(127)(true);
	
	$export($export.P, 'String', {
	  at: function at(pos) {
	    return $at(this, pos);
	  }
	});


/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/proposal-string-pad-start-end
	var $export = __webpack_require__(8);
	var $pad = __webpack_require__(259);
	
	$export($export.P, 'String', {
	  padStart: function padStart(maxLength /* , fillString = ' ' */) {
	    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
	  }
	});


/***/ }),
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-string-pad-start-end
	var toLength = __webpack_require__(37);
	var repeat = __webpack_require__(90);
	var defined = __webpack_require__(35);
	
	module.exports = function (that, maxLength, fillString, left) {
	  var S = String(defined(that));
	  var stringLength = S.length;
	  var fillStr = fillString === undefined ? ' ' : String(fillString);
	  var intMaxLength = toLength(maxLength);
	  if (intMaxLength <= stringLength || fillStr == '') return S;
	  var fillLen = intMaxLength - stringLength;
	  var stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
	  if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);
	  return left ? stringFiller + S : S + stringFiller;
	};


/***/ }),
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/proposal-string-pad-start-end
	var $export = __webpack_require__(8);
	var $pad = __webpack_require__(259);
	
	$export($export.P, 'String', {
	  padEnd: function padEnd(maxLength /* , fillString = ' ' */) {
	    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
	  }
	});


/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
	__webpack_require__(82)('trimLeft', function ($trim) {
	  return function trimLeft() {
	    return $trim(this, 1);
	  };
	}, 'trimStart');


/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
	__webpack_require__(82)('trimRight', function ($trim) {
	  return function trimRight() {
	    return $trim(this, 2);
	  };
	}, 'trimEnd');


/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// https://tc39.github.io/String.prototype.matchAll/
	var $export = __webpack_require__(8);
	var defined = __webpack_require__(35);
	var toLength = __webpack_require__(37);
	var isRegExp = __webpack_require__(134);
	var getFlags = __webpack_require__(197);
	var RegExpProto = RegExp.prototype;
	
	var $RegExpStringIterator = function (regexp, string) {
	  this._r = regexp;
	  this._s = string;
	};
	
	__webpack_require__(130)($RegExpStringIterator, 'RegExp String', function next() {
	  var match = this._r.exec(this._s);
	  return { value: match, done: match === null };
	});
	
	$export($export.P, 'String', {
	  matchAll: function matchAll(regexp) {
	    defined(this);
	    if (!isRegExp(regexp)) throw TypeError(regexp + ' is not a regexp!');
	    var S = String(this);
	    var flags = 'flags' in RegExpProto ? String(regexp.flags) : getFlags.call(regexp);
	    var rx = new RegExp(regexp.source, ~flags.indexOf('g') ? flags : 'g' + flags);
	    rx.lastIndex = toLength(regexp.lastIndex);
	    return new $RegExpStringIterator(rx, S);
	  }
	});


/***/ }),
/* 264 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(27)('asyncIterator');


/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(27)('observable');


/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-getownpropertydescriptors
	var $export = __webpack_require__(8);
	var ownKeys = __webpack_require__(249);
	var toIObject = __webpack_require__(32);
	var gOPD = __webpack_require__(50);
	var createProperty = __webpack_require__(164);
	
	$export($export.S, 'Object', {
	  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
	    var O = toIObject(object);
	    var getDesc = gOPD.f;
	    var keys = ownKeys(O);
	    var result = {};
	    var i = 0;
	    var key, desc;
	    while (keys.length > i) {
	      desc = getDesc(O, key = keys[i++]);
	      if (desc !== undefined) createProperty(result, key, desc);
	    }
	    return result;
	  }
	});


/***/ }),
/* 267 */
/***/ (function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-values-entries
	var $export = __webpack_require__(8);
	var $values = __webpack_require__(268)(false);
	
	$export($export.S, 'Object', {
	  values: function values(it) {
	    return $values(it);
	  }
	});


/***/ }),
/* 268 */
/***/ (function(module, exports, __webpack_require__) {

	var getKeys = __webpack_require__(30);
	var toIObject = __webpack_require__(32);
	var isEnum = __webpack_require__(43).f;
	module.exports = function (isEntries) {
	  return function (it) {
	    var O = toIObject(it);
	    var keys = getKeys(O);
	    var length = keys.length;
	    var i = 0;
	    var result = [];
	    var key;
	    while (length > i) if (isEnum.call(O, key = keys[i++])) {
	      result.push(isEntries ? [key, O[key]] : O[key]);
	    } return result;
	  };
	};


/***/ }),
/* 269 */
/***/ (function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-values-entries
	var $export = __webpack_require__(8);
	var $entries = __webpack_require__(268)(true);
	
	$export($export.S, 'Object', {
	  entries: function entries(it) {
	    return $entries(it);
	  }
	});


/***/ }),
/* 270 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8);
	var toObject = __webpack_require__(57);
	var aFunction = __webpack_require__(21);
	var $defineProperty = __webpack_require__(11);
	
	// B.2.2.2 Object.prototype.__defineGetter__(P, getter)
	__webpack_require__(6) && $export($export.P + __webpack_require__(271), 'Object', {
	  __defineGetter__: function __defineGetter__(P, getter) {
	    $defineProperty.f(toObject(this), P, { get: aFunction(getter), enumerable: true, configurable: true });
	  }
	});


/***/ }),
/* 271 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// Forced replacement prototype accessors methods
	module.exports = __webpack_require__(28) || !__webpack_require__(7)(function () {
	  var K = Math.random();
	  // In FF throws only define methods
	  // eslint-disable-next-line no-undef, no-useless-call
	  __defineSetter__.call(null, K, function () { /* empty */ });
	  delete __webpack_require__(4)[K];
	});


/***/ }),
/* 272 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8);
	var toObject = __webpack_require__(57);
	var aFunction = __webpack_require__(21);
	var $defineProperty = __webpack_require__(11);
	
	// B.2.2.3 Object.prototype.__defineSetter__(P, setter)
	__webpack_require__(6) && $export($export.P + __webpack_require__(271), 'Object', {
	  __defineSetter__: function __defineSetter__(P, setter) {
	    $defineProperty.f(toObject(this), P, { set: aFunction(setter), enumerable: true, configurable: true });
	  }
	});


/***/ }),
/* 273 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8);
	var toObject = __webpack_require__(57);
	var toPrimitive = __webpack_require__(16);
	var getPrototypeOf = __webpack_require__(58);
	var getOwnPropertyDescriptor = __webpack_require__(50).f;
	
	// B.2.2.4 Object.prototype.__lookupGetter__(P)
	__webpack_require__(6) && $export($export.P + __webpack_require__(271), 'Object', {
	  __lookupGetter__: function __lookupGetter__(P) {
	    var O = toObject(this);
	    var K = toPrimitive(P, true);
	    var D;
	    do {
	      if (D = getOwnPropertyDescriptor(O, K)) return D.get;
	    } while (O = getPrototypeOf(O));
	  }
	});


/***/ }),
/* 274 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8);
	var toObject = __webpack_require__(57);
	var toPrimitive = __webpack_require__(16);
	var getPrototypeOf = __webpack_require__(58);
	var getOwnPropertyDescriptor = __webpack_require__(50).f;
	
	// B.2.2.5 Object.prototype.__lookupSetter__(P)
	__webpack_require__(6) && $export($export.P + __webpack_require__(271), 'Object', {
	  __lookupSetter__: function __lookupSetter__(P) {
	    var O = toObject(this);
	    var K = toPrimitive(P, true);
	    var D;
	    do {
	      if (D = getOwnPropertyDescriptor(O, K)) return D.set;
	    } while (O = getPrototypeOf(O));
	  }
	});


/***/ }),
/* 275 */
/***/ (function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export = __webpack_require__(8);
	
	$export($export.P + $export.R, 'Map', { toJSON: __webpack_require__(276)('Map') });


/***/ }),
/* 276 */
/***/ (function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var classof = __webpack_require__(74);
	var from = __webpack_require__(277);
	module.exports = function (NAME) {
	  return function toJSON() {
	    if (classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
	    return from(this);
	  };
	};


/***/ }),
/* 277 */
/***/ (function(module, exports, __webpack_require__) {

	var forOf = __webpack_require__(207);
	
	module.exports = function (iter, ITERATOR) {
	  var result = [];
	  forOf(iter, false, result.push, result, ITERATOR);
	  return result;
	};


/***/ }),
/* 278 */
/***/ (function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export = __webpack_require__(8);
	
	$export($export.P + $export.R, 'Set', { toJSON: __webpack_require__(276)('Set') });


/***/ }),
/* 279 */
/***/ (function(module, exports, __webpack_require__) {

	// https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
	__webpack_require__(280)('Map');


/***/ }),
/* 280 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// https://tc39.github.io/proposal-setmap-offrom/
	var $export = __webpack_require__(8);
	
	module.exports = function (COLLECTION) {
	  $export($export.S, COLLECTION, { of: function of() {
	    var length = arguments.length;
	    var A = Array(length);
	    while (length--) A[length] = arguments[length];
	    return new this(A);
	  } });
	};


/***/ }),
/* 281 */
/***/ (function(module, exports, __webpack_require__) {

	// https://tc39.github.io/proposal-setmap-offrom/#sec-set.of
	__webpack_require__(280)('Set');


/***/ }),
/* 282 */
/***/ (function(module, exports, __webpack_require__) {

	// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.of
	__webpack_require__(280)('WeakMap');


/***/ }),
/* 283 */
/***/ (function(module, exports, __webpack_require__) {

	// https://tc39.github.io/proposal-setmap-offrom/#sec-weakset.of
	__webpack_require__(280)('WeakSet');


/***/ }),
/* 284 */
/***/ (function(module, exports, __webpack_require__) {

	// https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
	__webpack_require__(285)('Map');


/***/ }),
/* 285 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// https://tc39.github.io/proposal-setmap-offrom/
	var $export = __webpack_require__(8);
	var aFunction = __webpack_require__(21);
	var ctx = __webpack_require__(20);
	var forOf = __webpack_require__(207);
	
	module.exports = function (COLLECTION) {
	  $export($export.S, COLLECTION, { from: function from(source /* , mapFn, thisArg */) {
	    var mapFn = arguments[1];
	    var mapping, A, n, cb;
	    aFunction(this);
	    mapping = mapFn !== undefined;
	    if (mapping) aFunction(mapFn);
	    if (source == undefined) return new this();
	    A = [];
	    if (mapping) {
	      n = 0;
	      cb = ctx(mapFn, arguments[2], 2);
	      forOf(source, false, function (nextItem) {
	        A.push(cb(nextItem, n++));
	      });
	    } else {
	      forOf(source, false, A.push, A);
	    }
	    return new this(A);
	  } });
	};


/***/ }),
/* 286 */
/***/ (function(module, exports, __webpack_require__) {

	// https://tc39.github.io/proposal-setmap-offrom/#sec-set.from
	__webpack_require__(285)('Set');


/***/ }),
/* 287 */
/***/ (function(module, exports, __webpack_require__) {

	// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.from
	__webpack_require__(285)('WeakMap');


/***/ }),
/* 288 */
/***/ (function(module, exports, __webpack_require__) {

	// https://tc39.github.io/proposal-setmap-offrom/#sec-weakset.from
	__webpack_require__(285)('WeakSet');


/***/ }),
/* 289 */
/***/ (function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-global
	var $export = __webpack_require__(8);
	
	$export($export.G, { global: __webpack_require__(4) });


/***/ }),
/* 290 */
/***/ (function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-global
	var $export = __webpack_require__(8);
	
	$export($export.S, 'System', { global: __webpack_require__(4) });


/***/ }),
/* 291 */
/***/ (function(module, exports, __webpack_require__) {

	// https://github.com/ljharb/proposal-is-error
	var $export = __webpack_require__(8);
	var cof = __webpack_require__(34);
	
	$export($export.S, 'Error', {
	  isError: function isError(it) {
	    return cof(it) === 'Error';
	  }
	});


/***/ }),
/* 292 */
/***/ (function(module, exports, __webpack_require__) {

	// https://rwaldron.github.io/proposal-math-extensions/
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Math', {
	  clamp: function clamp(x, lower, upper) {
	    return Math.min(upper, Math.max(lower, x));
	  }
	});


/***/ }),
/* 293 */
/***/ (function(module, exports, __webpack_require__) {

	// https://rwaldron.github.io/proposal-math-extensions/
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Math', { DEG_PER_RAD: Math.PI / 180 });


/***/ }),
/* 294 */
/***/ (function(module, exports, __webpack_require__) {

	// https://rwaldron.github.io/proposal-math-extensions/
	var $export = __webpack_require__(8);
	var RAD_PER_DEG = 180 / Math.PI;
	
	$export($export.S, 'Math', {
	  degrees: function degrees(radians) {
	    return radians * RAD_PER_DEG;
	  }
	});


/***/ }),
/* 295 */
/***/ (function(module, exports, __webpack_require__) {

	// https://rwaldron.github.io/proposal-math-extensions/
	var $export = __webpack_require__(8);
	var scale = __webpack_require__(296);
	var fround = __webpack_require__(113);
	
	$export($export.S, 'Math', {
	  fscale: function fscale(x, inLow, inHigh, outLow, outHigh) {
	    return fround(scale(x, inLow, inHigh, outLow, outHigh));
	  }
	});


/***/ }),
/* 296 */
/***/ (function(module, exports) {

	// https://rwaldron.github.io/proposal-math-extensions/
	module.exports = Math.scale || function scale(x, inLow, inHigh, outLow, outHigh) {
	  if (
	    arguments.length === 0
	      // eslint-disable-next-line no-self-compare
	      || x != x
	      // eslint-disable-next-line no-self-compare
	      || inLow != inLow
	      // eslint-disable-next-line no-self-compare
	      || inHigh != inHigh
	      // eslint-disable-next-line no-self-compare
	      || outLow != outLow
	      // eslint-disable-next-line no-self-compare
	      || outHigh != outHigh
	  ) return NaN;
	  if (x === Infinity || x === -Infinity) return x;
	  return (x - inLow) * (outHigh - outLow) / (inHigh - inLow) + outLow;
	};


/***/ }),
/* 297 */
/***/ (function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Math', {
	  iaddh: function iaddh(x0, x1, y0, y1) {
	    var $x0 = x0 >>> 0;
	    var $x1 = x1 >>> 0;
	    var $y0 = y0 >>> 0;
	    return $x1 + (y1 >>> 0) + (($x0 & $y0 | ($x0 | $y0) & ~($x0 + $y0 >>> 0)) >>> 31) | 0;
	  }
	});


/***/ }),
/* 298 */
/***/ (function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Math', {
	  isubh: function isubh(x0, x1, y0, y1) {
	    var $x0 = x0 >>> 0;
	    var $x1 = x1 >>> 0;
	    var $y0 = y0 >>> 0;
	    return $x1 - (y1 >>> 0) - ((~$x0 & $y0 | ~($x0 ^ $y0) & $x0 - $y0 >>> 0) >>> 31) | 0;
	  }
	});


/***/ }),
/* 299 */
/***/ (function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Math', {
	  imulh: function imulh(u, v) {
	    var UINT16 = 0xffff;
	    var $u = +u;
	    var $v = +v;
	    var u0 = $u & UINT16;
	    var v0 = $v & UINT16;
	    var u1 = $u >> 16;
	    var v1 = $v >> 16;
	    var t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
	    return u1 * v1 + (t >> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >> 16);
	  }
	});


/***/ }),
/* 300 */
/***/ (function(module, exports, __webpack_require__) {

	// https://rwaldron.github.io/proposal-math-extensions/
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Math', { RAD_PER_DEG: 180 / Math.PI });


/***/ }),
/* 301 */
/***/ (function(module, exports, __webpack_require__) {

	// https://rwaldron.github.io/proposal-math-extensions/
	var $export = __webpack_require__(8);
	var DEG_PER_RAD = Math.PI / 180;
	
	$export($export.S, 'Math', {
	  radians: function radians(degrees) {
	    return degrees * DEG_PER_RAD;
	  }
	});


/***/ }),
/* 302 */
/***/ (function(module, exports, __webpack_require__) {

	// https://rwaldron.github.io/proposal-math-extensions/
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Math', { scale: __webpack_require__(296) });


/***/ }),
/* 303 */
/***/ (function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Math', {
	  umulh: function umulh(u, v) {
	    var UINT16 = 0xffff;
	    var $u = +u;
	    var $v = +v;
	    var u0 = $u & UINT16;
	    var v0 = $v & UINT16;
	    var u1 = $u >>> 16;
	    var v1 = $v >>> 16;
	    var t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
	    return u1 * v1 + (t >>> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >>> 16);
	  }
	});


/***/ }),
/* 304 */
/***/ (function(module, exports, __webpack_require__) {

	// http://jfbastien.github.io/papers/Math.signbit.html
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Math', { signbit: function signbit(x) {
	  // eslint-disable-next-line no-self-compare
	  return (x = +x) != x ? x : x == 0 ? 1 / x == Infinity : x > 0;
	} });


/***/ }),
/* 305 */
/***/ (function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-promise-finally
	'use strict';
	var $export = __webpack_require__(8);
	var core = __webpack_require__(9);
	var global = __webpack_require__(4);
	var speciesConstructor = __webpack_require__(208);
	var promiseResolve = __webpack_require__(213);
	
	$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
	  var C = speciesConstructor(this, core.Promise || global.Promise);
	  var isFunction = typeof onFinally == 'function';
	  return this.then(
	    isFunction ? function (x) {
	      return promiseResolve(C, onFinally()).then(function () { return x; });
	    } : onFinally,
	    isFunction ? function (e) {
	      return promiseResolve(C, onFinally()).then(function () { throw e; });
	    } : onFinally
	  );
	} });


/***/ }),
/* 306 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/proposal-promise-try
	var $export = __webpack_require__(8);
	var newPromiseCapability = __webpack_require__(211);
	var perform = __webpack_require__(212);
	
	$export($export.S, 'Promise', { 'try': function (callbackfn) {
	  var promiseCapability = newPromiseCapability.f(this);
	  var result = perform(callbackfn);
	  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
	  return promiseCapability.promise;
	} });


/***/ }),
/* 307 */
/***/ (function(module, exports, __webpack_require__) {

	var metadata = __webpack_require__(308);
	var anObject = __webpack_require__(12);
	var toMetaKey = metadata.key;
	var ordinaryDefineOwnMetadata = metadata.set;
	
	metadata.exp({ defineMetadata: function defineMetadata(metadataKey, metadataValue, target, targetKey) {
	  ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), toMetaKey(targetKey));
	} });


/***/ }),
/* 308 */
/***/ (function(module, exports, __webpack_require__) {

	var Map = __webpack_require__(215);
	var $export = __webpack_require__(8);
	var shared = __webpack_require__(23)('metadata');
	var store = shared.store || (shared.store = new (__webpack_require__(220))());
	
	var getOrCreateMetadataMap = function (target, targetKey, create) {
	  var targetMetadata = store.get(target);
	  if (!targetMetadata) {
	    if (!create) return undefined;
	    store.set(target, targetMetadata = new Map());
	  }
	  var keyMetadata = targetMetadata.get(targetKey);
	  if (!keyMetadata) {
	    if (!create) return undefined;
	    targetMetadata.set(targetKey, keyMetadata = new Map());
	  } return keyMetadata;
	};
	var ordinaryHasOwnMetadata = function (MetadataKey, O, P) {
	  var metadataMap = getOrCreateMetadataMap(O, P, false);
	  return metadataMap === undefined ? false : metadataMap.has(MetadataKey);
	};
	var ordinaryGetOwnMetadata = function (MetadataKey, O, P) {
	  var metadataMap = getOrCreateMetadataMap(O, P, false);
	  return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);
	};
	var ordinaryDefineOwnMetadata = function (MetadataKey, MetadataValue, O, P) {
	  getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);
	};
	var ordinaryOwnMetadataKeys = function (target, targetKey) {
	  var metadataMap = getOrCreateMetadataMap(target, targetKey, false);
	  var keys = [];
	  if (metadataMap) metadataMap.forEach(function (_, key) { keys.push(key); });
	  return keys;
	};
	var toMetaKey = function (it) {
	  return it === undefined || typeof it == 'symbol' ? it : String(it);
	};
	var exp = function (O) {
	  $export($export.S, 'Reflect', O);
	};
	
	module.exports = {
	  store: store,
	  map: getOrCreateMetadataMap,
	  has: ordinaryHasOwnMetadata,
	  get: ordinaryGetOwnMetadata,
	  set: ordinaryDefineOwnMetadata,
	  keys: ordinaryOwnMetadataKeys,
	  key: toMetaKey,
	  exp: exp
	};


/***/ }),
/* 309 */
/***/ (function(module, exports, __webpack_require__) {

	var metadata = __webpack_require__(308);
	var anObject = __webpack_require__(12);
	var toMetaKey = metadata.key;
	var getOrCreateMetadataMap = metadata.map;
	var store = metadata.store;
	
	metadata.exp({ deleteMetadata: function deleteMetadata(metadataKey, target /* , targetKey */) {
	  var targetKey = arguments.length < 3 ? undefined : toMetaKey(arguments[2]);
	  var metadataMap = getOrCreateMetadataMap(anObject(target), targetKey, false);
	  if (metadataMap === undefined || !metadataMap['delete'](metadataKey)) return false;
	  if (metadataMap.size) return true;
	  var targetMetadata = store.get(target);
	  targetMetadata['delete'](targetKey);
	  return !!targetMetadata.size || store['delete'](target);
	} });


/***/ }),
/* 310 */
/***/ (function(module, exports, __webpack_require__) {

	var metadata = __webpack_require__(308);
	var anObject = __webpack_require__(12);
	var getPrototypeOf = __webpack_require__(58);
	var ordinaryHasOwnMetadata = metadata.has;
	var ordinaryGetOwnMetadata = metadata.get;
	var toMetaKey = metadata.key;
	
	var ordinaryGetMetadata = function (MetadataKey, O, P) {
	  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
	  if (hasOwn) return ordinaryGetOwnMetadata(MetadataKey, O, P);
	  var parent = getPrototypeOf(O);
	  return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;
	};
	
	metadata.exp({ getMetadata: function getMetadata(metadataKey, target /* , targetKey */) {
	  return ordinaryGetMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	} });


/***/ }),
/* 311 */
/***/ (function(module, exports, __webpack_require__) {

	var Set = __webpack_require__(219);
	var from = __webpack_require__(277);
	var metadata = __webpack_require__(308);
	var anObject = __webpack_require__(12);
	var getPrototypeOf = __webpack_require__(58);
	var ordinaryOwnMetadataKeys = metadata.keys;
	var toMetaKey = metadata.key;
	
	var ordinaryMetadataKeys = function (O, P) {
	  var oKeys = ordinaryOwnMetadataKeys(O, P);
	  var parent = getPrototypeOf(O);
	  if (parent === null) return oKeys;
	  var pKeys = ordinaryMetadataKeys(parent, P);
	  return pKeys.length ? oKeys.length ? from(new Set(oKeys.concat(pKeys))) : pKeys : oKeys;
	};
	
	metadata.exp({ getMetadataKeys: function getMetadataKeys(target /* , targetKey */) {
	  return ordinaryMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
	} });


/***/ }),
/* 312 */
/***/ (function(module, exports, __webpack_require__) {

	var metadata = __webpack_require__(308);
	var anObject = __webpack_require__(12);
	var ordinaryGetOwnMetadata = metadata.get;
	var toMetaKey = metadata.key;
	
	metadata.exp({ getOwnMetadata: function getOwnMetadata(metadataKey, target /* , targetKey */) {
	  return ordinaryGetOwnMetadata(metadataKey, anObject(target)
	    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	} });


/***/ }),
/* 313 */
/***/ (function(module, exports, __webpack_require__) {

	var metadata = __webpack_require__(308);
	var anObject = __webpack_require__(12);
	var ordinaryOwnMetadataKeys = metadata.keys;
	var toMetaKey = metadata.key;
	
	metadata.exp({ getOwnMetadataKeys: function getOwnMetadataKeys(target /* , targetKey */) {
	  return ordinaryOwnMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
	} });


/***/ }),
/* 314 */
/***/ (function(module, exports, __webpack_require__) {

	var metadata = __webpack_require__(308);
	var anObject = __webpack_require__(12);
	var getPrototypeOf = __webpack_require__(58);
	var ordinaryHasOwnMetadata = metadata.has;
	var toMetaKey = metadata.key;
	
	var ordinaryHasMetadata = function (MetadataKey, O, P) {
	  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
	  if (hasOwn) return true;
	  var parent = getPrototypeOf(O);
	  return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;
	};
	
	metadata.exp({ hasMetadata: function hasMetadata(metadataKey, target /* , targetKey */) {
	  return ordinaryHasMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	} });


/***/ }),
/* 315 */
/***/ (function(module, exports, __webpack_require__) {

	var metadata = __webpack_require__(308);
	var anObject = __webpack_require__(12);
	var ordinaryHasOwnMetadata = metadata.has;
	var toMetaKey = metadata.key;
	
	metadata.exp({ hasOwnMetadata: function hasOwnMetadata(metadataKey, target /* , targetKey */) {
	  return ordinaryHasOwnMetadata(metadataKey, anObject(target)
	    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	} });


/***/ }),
/* 316 */
/***/ (function(module, exports, __webpack_require__) {

	var $metadata = __webpack_require__(308);
	var anObject = __webpack_require__(12);
	var aFunction = __webpack_require__(21);
	var toMetaKey = $metadata.key;
	var ordinaryDefineOwnMetadata = $metadata.set;
	
	$metadata.exp({ metadata: function metadata(metadataKey, metadataValue) {
	  return function decorator(target, targetKey) {
	    ordinaryDefineOwnMetadata(
	      metadataKey, metadataValue,
	      (targetKey !== undefined ? anObject : aFunction)(target),
	      toMetaKey(targetKey)
	    );
	  };
	} });


/***/ }),
/* 317 */
/***/ (function(module, exports, __webpack_require__) {

	// https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-09/sept-25.md#510-globalasap-for-enqueuing-a-microtask
	var $export = __webpack_require__(8);
	var microtask = __webpack_require__(210)();
	var process = __webpack_require__(4).process;
	var isNode = __webpack_require__(34)(process) == 'process';
	
	$export($export.G, {
	  asap: function asap(fn) {
	    var domain = isNode && process.domain;
	    microtask(domain ? domain.bind(fn) : fn);
	  }
	});


/***/ }),
/* 318 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/zenparsing/es-observable
	var $export = __webpack_require__(8);
	var global = __webpack_require__(4);
	var core = __webpack_require__(9);
	var microtask = __webpack_require__(210)();
	var OBSERVABLE = __webpack_require__(25)('observable');
	var aFunction = __webpack_require__(21);
	var anObject = __webpack_require__(12);
	var anInstance = __webpack_require__(206);
	var redefineAll = __webpack_require__(214);
	var hide = __webpack_require__(10);
	var forOf = __webpack_require__(207);
	var RETURN = forOf.RETURN;
	
	var getMethod = function (fn) {
	  return fn == null ? undefined : aFunction(fn);
	};
	
	var cleanupSubscription = function (subscription) {
	  var cleanup = subscription._c;
	  if (cleanup) {
	    subscription._c = undefined;
	    cleanup();
	  }
	};
	
	var subscriptionClosed = function (subscription) {
	  return subscription._o === undefined;
	};
	
	var closeSubscription = function (subscription) {
	  if (!subscriptionClosed(subscription)) {
	    subscription._o = undefined;
	    cleanupSubscription(subscription);
	  }
	};
	
	var Subscription = function (observer, subscriber) {
	  anObject(observer);
	  this._c = undefined;
	  this._o = observer;
	  observer = new SubscriptionObserver(this);
	  try {
	    var cleanup = subscriber(observer);
	    var subscription = cleanup;
	    if (cleanup != null) {
	      if (typeof cleanup.unsubscribe === 'function') cleanup = function () { subscription.unsubscribe(); };
	      else aFunction(cleanup);
	      this._c = cleanup;
	    }
	  } catch (e) {
	    observer.error(e);
	    return;
	  } if (subscriptionClosed(this)) cleanupSubscription(this);
	};
	
	Subscription.prototype = redefineAll({}, {
	  unsubscribe: function unsubscribe() { closeSubscription(this); }
	});
	
	var SubscriptionObserver = function (subscription) {
	  this._s = subscription;
	};
	
	SubscriptionObserver.prototype = redefineAll({}, {
	  next: function next(value) {
	    var subscription = this._s;
	    if (!subscriptionClosed(subscription)) {
	      var observer = subscription._o;
	      try {
	        var m = getMethod(observer.next);
	        if (m) return m.call(observer, value);
	      } catch (e) {
	        try {
	          closeSubscription(subscription);
	        } finally {
	          throw e;
	        }
	      }
	    }
	  },
	  error: function error(value) {
	    var subscription = this._s;
	    if (subscriptionClosed(subscription)) throw value;
	    var observer = subscription._o;
	    subscription._o = undefined;
	    try {
	      var m = getMethod(observer.error);
	      if (!m) throw value;
	      value = m.call(observer, value);
	    } catch (e) {
	      try {
	        cleanupSubscription(subscription);
	      } finally {
	        throw e;
	      }
	    } cleanupSubscription(subscription);
	    return value;
	  },
	  complete: function complete(value) {
	    var subscription = this._s;
	    if (!subscriptionClosed(subscription)) {
	      var observer = subscription._o;
	      subscription._o = undefined;
	      try {
	        var m = getMethod(observer.complete);
	        value = m ? m.call(observer, value) : undefined;
	      } catch (e) {
	        try {
	          cleanupSubscription(subscription);
	        } finally {
	          throw e;
	        }
	      } cleanupSubscription(subscription);
	      return value;
	    }
	  }
	});
	
	var $Observable = function Observable(subscriber) {
	  anInstance(this, $Observable, 'Observable', '_f')._f = aFunction(subscriber);
	};
	
	redefineAll($Observable.prototype, {
	  subscribe: function subscribe(observer) {
	    return new Subscription(observer, this._f);
	  },
	  forEach: function forEach(fn) {
	    var that = this;
	    return new (core.Promise || global.Promise)(function (resolve, reject) {
	      aFunction(fn);
	      var subscription = that.subscribe({
	        next: function (value) {
	          try {
	            return fn(value);
	          } catch (e) {
	            reject(e);
	            subscription.unsubscribe();
	          }
	        },
	        error: reject,
	        complete: resolve
	      });
	    });
	  }
	});
	
	redefineAll($Observable, {
	  from: function from(x) {
	    var C = typeof this === 'function' ? this : $Observable;
	    var method = getMethod(anObject(x)[OBSERVABLE]);
	    if (method) {
	      var observable = anObject(method.call(x));
	      return observable.constructor === C ? observable : new C(function (observer) {
	        return observable.subscribe(observer);
	      });
	    }
	    return new C(function (observer) {
	      var done = false;
	      microtask(function () {
	        if (!done) {
	          try {
	            if (forOf(x, false, function (it) {
	              observer.next(it);
	              if (done) return RETURN;
	            }) === RETURN) return;
	          } catch (e) {
	            if (done) throw e;
	            observer.error(e);
	            return;
	          } observer.complete();
	        }
	      });
	      return function () { done = true; };
	    });
	  },
	  of: function of() {
	    for (var i = 0, l = arguments.length, items = Array(l); i < l;) items[i] = arguments[i++];
	    return new (typeof this === 'function' ? this : $Observable)(function (observer) {
	      var done = false;
	      microtask(function () {
	        if (!done) {
	          for (var j = 0; j < items.length; ++j) {
	            observer.next(items[j]);
	            if (done) return;
	          } observer.complete();
	        }
	      });
	      return function () { done = true; };
	    });
	  }
	});
	
	hide($Observable.prototype, OBSERVABLE, function () { return this; });
	
	$export($export.G, { Observable: $Observable });
	
	__webpack_require__(193)('Observable');


/***/ }),
/* 319 */
/***/ (function(module, exports, __webpack_require__) {

	// ie9- setTimeout & setInterval additional parameters fix
	var global = __webpack_require__(4);
	var $export = __webpack_require__(8);
	var navigator = global.navigator;
	var slice = [].slice;
	var MSIE = !!navigator && /MSIE .\./.test(navigator.userAgent); // <- dirty ie9- check
	var wrap = function (set) {
	  return function (fn, time /* , ...args */) {
	    var boundArgs = arguments.length > 2;
	    var args = boundArgs ? slice.call(arguments, 2) : false;
	    return set(boundArgs ? function () {
	      // eslint-disable-next-line no-new-func
	      (typeof fn == 'function' ? fn : Function(fn)).apply(this, args);
	    } : fn, time);
	  };
	};
	$export($export.G + $export.B + $export.F * MSIE, {
	  setTimeout: wrap(global.setTimeout),
	  setInterval: wrap(global.setInterval)
	});


/***/ }),
/* 320 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);
	var $task = __webpack_require__(209);
	$export($export.G + $export.B, {
	  setImmediate: $task.set,
	  clearImmediate: $task.clear
	});


/***/ }),
/* 321 */
/***/ (function(module, exports, __webpack_require__) {

	var $iterators = __webpack_require__(194);
	var getKeys = __webpack_require__(30);
	var redefine = __webpack_require__(18);
	var global = __webpack_require__(4);
	var hide = __webpack_require__(10);
	var Iterators = __webpack_require__(129);
	var wks = __webpack_require__(25);
	var ITERATOR = wks('iterator');
	var TO_STRING_TAG = wks('toStringTag');
	var ArrayValues = Iterators.Array;
	
	var DOMIterables = {
	  CSSRuleList: true, // TODO: Not spec compliant, should be false.
	  CSSStyleDeclaration: false,
	  CSSValueList: false,
	  ClientRectList: false,
	  DOMRectList: false,
	  DOMStringList: false,
	  DOMTokenList: true,
	  DataTransferItemList: false,
	  FileList: false,
	  HTMLAllCollection: false,
	  HTMLCollection: false,
	  HTMLFormElement: false,
	  HTMLSelectElement: false,
	  MediaList: true, // TODO: Not spec compliant, should be false.
	  MimeTypeArray: false,
	  NamedNodeMap: false,
	  NodeList: true,
	  PaintRequestList: false,
	  Plugin: false,
	  PluginArray: false,
	  SVGLengthList: false,
	  SVGNumberList: false,
	  SVGPathSegList: false,
	  SVGPointList: false,
	  SVGStringList: false,
	  SVGTransformList: false,
	  SourceBufferList: false,
	  StyleSheetList: true, // TODO: Not spec compliant, should be false.
	  TextTrackCueList: false,
	  TextTrackList: false,
	  TouchList: false
	};
	
	for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
	  var NAME = collections[i];
	  var explicit = DOMIterables[NAME];
	  var Collection = global[NAME];
	  var proto = Collection && Collection.prototype;
	  var key;
	  if (proto) {
	    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
	    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
	    Iterators[NAME] = ArrayValues;
	    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
	  }
	}


/***/ }),
/* 322 */
/***/ (function(module, exports) {

	/**
	 * Copyright (c) 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
	 * additional grant of patent rights can be found in the PATENTS file in
	 * the same directory.
	 */
	
	!(function(global) {
	  "use strict";
	
	  var Op = Object.prototype;
	  var hasOwn = Op.hasOwnProperty;
	  var undefined; // More compressible than void 0.
	  var $Symbol = typeof Symbol === "function" ? Symbol : {};
	  var iteratorSymbol = $Symbol.iterator || "@@iterator";
	  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
	  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
	
	  var inModule = typeof module === "object";
	  var runtime = global.regeneratorRuntime;
	  if (runtime) {
	    if (inModule) {
	      // If regeneratorRuntime is defined globally and we're in a module,
	      // make the exports object identical to regeneratorRuntime.
	      module.exports = runtime;
	    }
	    // Don't bother evaluating the rest of this file if the runtime was
	    // already defined globally.
	    return;
	  }
	
	  // Define the runtime globally (as expected by generated code) as either
	  // module.exports (if we're in a module) or a new, empty object.
	  runtime = global.regeneratorRuntime = inModule ? module.exports : {};
	
	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
	    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
	    var generator = Object.create(protoGenerator.prototype);
	    var context = new Context(tryLocsList || []);
	
	    // The ._invoke method unifies the implementations of the .next,
	    // .throw, and .return methods.
	    generator._invoke = makeInvokeMethod(innerFn, self, context);
	
	    return generator;
	  }
	  runtime.wrap = wrap;
	
	  // Try/catch helper to minimize deoptimizations. Returns a completion
	  // record like context.tryEntries[i].completion. This interface could
	  // have been (and was previously) designed to take a closure to be
	  // invoked without arguments, but in all the cases we care about we
	  // already have an existing method we want to call, so there's no need
	  // to create a new function object. We can even get away with assuming
	  // the method takes exactly one argument, since that happens to be true
	  // in every case, so we don't have to touch the arguments object. The
	  // only additional allocation required is the completion record, which
	  // has a stable shape and so hopefully should be cheap to allocate.
	  function tryCatch(fn, obj, arg) {
	    try {
	      return { type: "normal", arg: fn.call(obj, arg) };
	    } catch (err) {
	      return { type: "throw", arg: err };
	    }
	  }
	
	  var GenStateSuspendedStart = "suspendedStart";
	  var GenStateSuspendedYield = "suspendedYield";
	  var GenStateExecuting = "executing";
	  var GenStateCompleted = "completed";
	
	  // Returning this object from the innerFn has the same effect as
	  // breaking out of the dispatch switch statement.
	  var ContinueSentinel = {};
	
	  // Dummy constructor functions that we use as the .constructor and
	  // .constructor.prototype properties for functions that return Generator
	  // objects. For full spec compliance, you may wish to configure your
	  // minifier not to mangle the names of these two functions.
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}
	
	  // This is a polyfill for %IteratorPrototype% for environments that
	  // don't natively support it.
	  var IteratorPrototype = {};
	  IteratorPrototype[iteratorSymbol] = function () {
	    return this;
	  };
	
	  var getProto = Object.getPrototypeOf;
	  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
	  if (NativeIteratorPrototype &&
	      NativeIteratorPrototype !== Op &&
	      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
	    // This environment has a native %IteratorPrototype%; use it instead
	    // of the polyfill.
	    IteratorPrototype = NativeIteratorPrototype;
	  }
	
	  var Gp = GeneratorFunctionPrototype.prototype =
	    Generator.prototype = Object.create(IteratorPrototype);
	  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
	  GeneratorFunctionPrototype.constructor = GeneratorFunction;
	  GeneratorFunctionPrototype[toStringTagSymbol] =
	    GeneratorFunction.displayName = "GeneratorFunction";
	
	  // Helper for defining the .next, .throw, and .return methods of the
	  // Iterator interface in terms of a single ._invoke method.
	  function defineIteratorMethods(prototype) {
	    ["next", "throw", "return"].forEach(function(method) {
	      prototype[method] = function(arg) {
	        return this._invoke(method, arg);
	      };
	    });
	  }
	
	  runtime.isGeneratorFunction = function(genFun) {
	    var ctor = typeof genFun === "function" && genFun.constructor;
	    return ctor
	      ? ctor === GeneratorFunction ||
	        // For the native GeneratorFunction constructor, the best we can
	        // do is to check its .name property.
	        (ctor.displayName || ctor.name) === "GeneratorFunction"
	      : false;
	  };
	
	  runtime.mark = function(genFun) {
	    if (Object.setPrototypeOf) {
	      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
	    } else {
	      genFun.__proto__ = GeneratorFunctionPrototype;
	      if (!(toStringTagSymbol in genFun)) {
	        genFun[toStringTagSymbol] = "GeneratorFunction";
	      }
	    }
	    genFun.prototype = Object.create(Gp);
	    return genFun;
	  };
	
	  // Within the body of any async function, `await x` is transformed to
	  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
	  // `hasOwn.call(value, "__await")` to determine if the yielded value is
	  // meant to be awaited.
	  runtime.awrap = function(arg) {
	    return { __await: arg };
	  };
	
	  function AsyncIterator(generator) {
	    function invoke(method, arg, resolve, reject) {
	      var record = tryCatch(generator[method], generator, arg);
	      if (record.type === "throw") {
	        reject(record.arg);
	      } else {
	        var result = record.arg;
	        var value = result.value;
	        if (value &&
	            typeof value === "object" &&
	            hasOwn.call(value, "__await")) {
	          return Promise.resolve(value.__await).then(function(value) {
	            invoke("next", value, resolve, reject);
	          }, function(err) {
	            invoke("throw", err, resolve, reject);
	          });
	        }
	
	        return Promise.resolve(value).then(function(unwrapped) {
	          // When a yielded Promise is resolved, its final value becomes
	          // the .value of the Promise<{value,done}> result for the
	          // current iteration. If the Promise is rejected, however, the
	          // result for this iteration will be rejected with the same
	          // reason. Note that rejections of yielded Promises are not
	          // thrown back into the generator function, as is the case
	          // when an awaited Promise is rejected. This difference in
	          // behavior between yield and await is important, because it
	          // allows the consumer to decide what to do with the yielded
	          // rejection (swallow it and continue, manually .throw it back
	          // into the generator, abandon iteration, whatever). With
	          // await, by contrast, there is no opportunity to examine the
	          // rejection reason outside the generator function, so the
	          // only option is to throw it from the await expression, and
	          // let the generator function handle the exception.
	          result.value = unwrapped;
	          resolve(result);
	        }, reject);
	      }
	    }
	
	    var previousPromise;
	
	    function enqueue(method, arg) {
	      function callInvokeWithMethodAndArg() {
	        return new Promise(function(resolve, reject) {
	          invoke(method, arg, resolve, reject);
	        });
	      }
	
	      return previousPromise =
	        // If enqueue has been called before, then we want to wait until
	        // all previous Promises have been resolved before calling invoke,
	        // so that results are always delivered in the correct order. If
	        // enqueue has not been called before, then it is important to
	        // call invoke immediately, without waiting on a callback to fire,
	        // so that the async generator function has the opportunity to do
	        // any necessary setup in a predictable way. This predictability
	        // is why the Promise constructor synchronously invokes its
	        // executor callback, and why async functions synchronously
	        // execute code before the first await. Since we implement simple
	        // async functions in terms of async generators, it is especially
	        // important to get this right, even though it requires care.
	        previousPromise ? previousPromise.then(
	          callInvokeWithMethodAndArg,
	          // Avoid propagating failures to Promises returned by later
	          // invocations of the iterator.
	          callInvokeWithMethodAndArg
	        ) : callInvokeWithMethodAndArg();
	    }
	
	    // Define the unified helper method that is used to implement .next,
	    // .throw, and .return (see defineIteratorMethods).
	    this._invoke = enqueue;
	  }
	
	  defineIteratorMethods(AsyncIterator.prototype);
	  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
	    return this;
	  };
	  runtime.AsyncIterator = AsyncIterator;
	
	  // Note that simple async functions are implemented on top of
	  // AsyncIterator objects; they just return a Promise for the value of
	  // the final result produced by the iterator.
	  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
	    var iter = new AsyncIterator(
	      wrap(innerFn, outerFn, self, tryLocsList)
	    );
	
	    return runtime.isGeneratorFunction(outerFn)
	      ? iter // If outerFn is a generator, return the full iterator.
	      : iter.next().then(function(result) {
	          return result.done ? result.value : iter.next();
	        });
	  };
	
	  function makeInvokeMethod(innerFn, self, context) {
	    var state = GenStateSuspendedStart;
	
	    return function invoke(method, arg) {
	      if (state === GenStateExecuting) {
	        throw new Error("Generator is already running");
	      }
	
	      if (state === GenStateCompleted) {
	        if (method === "throw") {
	          throw arg;
	        }
	
	        // Be forgiving, per 25.3.3.3.3 of the spec:
	        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
	        return doneResult();
	      }
	
	      context.method = method;
	      context.arg = arg;
	
	      while (true) {
	        var delegate = context.delegate;
	        if (delegate) {
	          var delegateResult = maybeInvokeDelegate(delegate, context);
	          if (delegateResult) {
	            if (delegateResult === ContinueSentinel) continue;
	            return delegateResult;
	          }
	        }
	
	        if (context.method === "next") {
	          // Setting context._sent for legacy support of Babel's
	          // function.sent implementation.
	          context.sent = context._sent = context.arg;
	
	        } else if (context.method === "throw") {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw context.arg;
	          }
	
	          context.dispatchException(context.arg);
	
	        } else if (context.method === "return") {
	          context.abrupt("return", context.arg);
	        }
	
	        state = GenStateExecuting;
	
	        var record = tryCatch(innerFn, self, context);
	        if (record.type === "normal") {
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done
	            ? GenStateCompleted
	            : GenStateSuspendedYield;
	
	          if (record.arg === ContinueSentinel) {
	            continue;
	          }
	
	          return {
	            value: record.arg,
	            done: context.done
	          };
	
	        } else if (record.type === "throw") {
	          state = GenStateCompleted;
	          // Dispatch the exception by looping back around to the
	          // context.dispatchException(context.arg) call above.
	          context.method = "throw";
	          context.arg = record.arg;
	        }
	      }
	    };
	  }
	
	  // Call delegate.iterator[context.method](context.arg) and handle the
	  // result, either by returning a { value, done } result from the
	  // delegate iterator, or by modifying context.method and context.arg,
	  // setting context.delegate to null, and returning the ContinueSentinel.
	  function maybeInvokeDelegate(delegate, context) {
	    var method = delegate.iterator[context.method];
	    if (method === undefined) {
	      // A .throw or .return when the delegate iterator has no .throw
	      // method always terminates the yield* loop.
	      context.delegate = null;
	
	      if (context.method === "throw") {
	        if (delegate.iterator.return) {
	          // If the delegate iterator has a return method, give it a
	          // chance to clean up.
	          context.method = "return";
	          context.arg = undefined;
	          maybeInvokeDelegate(delegate, context);
	
	          if (context.method === "throw") {
	            // If maybeInvokeDelegate(context) changed context.method from
	            // "return" to "throw", let that override the TypeError below.
	            return ContinueSentinel;
	          }
	        }
	
	        context.method = "throw";
	        context.arg = new TypeError(
	          "The iterator does not provide a 'throw' method");
	      }
	
	      return ContinueSentinel;
	    }
	
	    var record = tryCatch(method, delegate.iterator, context.arg);
	
	    if (record.type === "throw") {
	      context.method = "throw";
	      context.arg = record.arg;
	      context.delegate = null;
	      return ContinueSentinel;
	    }
	
	    var info = record.arg;
	
	    if (! info) {
	      context.method = "throw";
	      context.arg = new TypeError("iterator result is not an object");
	      context.delegate = null;
	      return ContinueSentinel;
	    }
	
	    if (info.done) {
	      // Assign the result of the finished delegate to the temporary
	      // variable specified by delegate.resultName (see delegateYield).
	      context[delegate.resultName] = info.value;
	
	      // Resume execution at the desired location (see delegateYield).
	      context.next = delegate.nextLoc;
	
	      // If context.method was "throw" but the delegate handled the
	      // exception, let the outer generator proceed normally. If
	      // context.method was "next", forget context.arg since it has been
	      // "consumed" by the delegate iterator. If context.method was
	      // "return", allow the original .return call to continue in the
	      // outer generator.
	      if (context.method !== "return") {
	        context.method = "next";
	        context.arg = undefined;
	      }
	
	    } else {
	      // Re-yield the result returned by the delegate method.
	      return info;
	    }
	
	    // The delegate iterator is finished, so forget it and continue with
	    // the outer generator.
	    context.delegate = null;
	    return ContinueSentinel;
	  }
	
	  // Define Generator.prototype.{next,throw,return} in terms of the
	  // unified ._invoke helper method.
	  defineIteratorMethods(Gp);
	
	  Gp[toStringTagSymbol] = "Generator";
	
	  // A Generator should always return itself as the iterator object when the
	  // @@iterator function is called on it. Some browsers' implementations of the
	  // iterator prototype chain incorrectly implement this, causing the Generator
	  // object to not be returned from this call. This ensures that doesn't happen.
	  // See https://github.com/facebook/regenerator/issues/274 for more details.
	  Gp[iteratorSymbol] = function() {
	    return this;
	  };
	
	  Gp.toString = function() {
	    return "[object Generator]";
	  };
	
	  function pushTryEntry(locs) {
	    var entry = { tryLoc: locs[0] };
	
	    if (1 in locs) {
	      entry.catchLoc = locs[1];
	    }
	
	    if (2 in locs) {
	      entry.finallyLoc = locs[2];
	      entry.afterLoc = locs[3];
	    }
	
	    this.tryEntries.push(entry);
	  }
	
	  function resetTryEntry(entry) {
	    var record = entry.completion || {};
	    record.type = "normal";
	    delete record.arg;
	    entry.completion = record;
	  }
	
	  function Context(tryLocsList) {
	    // The root entry object (effectively a try statement without a catch
	    // or a finally block) gives us a place to store values thrown from
	    // locations where there is no enclosing try statement.
	    this.tryEntries = [{ tryLoc: "root" }];
	    tryLocsList.forEach(pushTryEntry, this);
	    this.reset(true);
	  }
	
	  runtime.keys = function(object) {
	    var keys = [];
	    for (var key in object) {
	      keys.push(key);
	    }
	    keys.reverse();
	
	    // Rather than returning an object with a next method, we keep
	    // things simple and return the next function itself.
	    return function next() {
	      while (keys.length) {
	        var key = keys.pop();
	        if (key in object) {
	          next.value = key;
	          next.done = false;
	          return next;
	        }
	      }
	
	      // To avoid creating an additional object, we just hang the .value
	      // and .done properties off the next function object itself. This
	      // also ensures that the minifier will not anonymize the function.
	      next.done = true;
	      return next;
	    };
	  };
	
	  function values(iterable) {
	    if (iterable) {
	      var iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) {
	        return iteratorMethod.call(iterable);
	      }
	
	      if (typeof iterable.next === "function") {
	        return iterable;
	      }
	
	      if (!isNaN(iterable.length)) {
	        var i = -1, next = function next() {
	          while (++i < iterable.length) {
	            if (hasOwn.call(iterable, i)) {
	              next.value = iterable[i];
	              next.done = false;
	              return next;
	            }
	          }
	
	          next.value = undefined;
	          next.done = true;
	
	          return next;
	        };
	
	        return next.next = next;
	      }
	    }
	
	    // Return an iterator with no values.
	    return { next: doneResult };
	  }
	  runtime.values = values;
	
	  function doneResult() {
	    return { value: undefined, done: true };
	  }
	
	  Context.prototype = {
	    constructor: Context,
	
	    reset: function(skipTempReset) {
	      this.prev = 0;
	      this.next = 0;
	      // Resetting context._sent for legacy support of Babel's
	      // function.sent implementation.
	      this.sent = this._sent = undefined;
	      this.done = false;
	      this.delegate = null;
	
	      this.method = "next";
	      this.arg = undefined;
	
	      this.tryEntries.forEach(resetTryEntry);
	
	      if (!skipTempReset) {
	        for (var name in this) {
	          // Not sure about the optimal order of these conditions:
	          if (name.charAt(0) === "t" &&
	              hasOwn.call(this, name) &&
	              !isNaN(+name.slice(1))) {
	            this[name] = undefined;
	          }
	        }
	      }
	    },
	
	    stop: function() {
	      this.done = true;
	
	      var rootEntry = this.tryEntries[0];
	      var rootRecord = rootEntry.completion;
	      if (rootRecord.type === "throw") {
	        throw rootRecord.arg;
	      }
	
	      return this.rval;
	    },
	
	    dispatchException: function(exception) {
	      if (this.done) {
	        throw exception;
	      }
	
	      var context = this;
	      function handle(loc, caught) {
	        record.type = "throw";
	        record.arg = exception;
	        context.next = loc;
	
	        if (caught) {
	          // If the dispatched exception was caught by a catch block,
	          // then let that catch block handle the exception normally.
	          context.method = "next";
	          context.arg = undefined;
	        }
	
	        return !! caught;
	      }
	
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        var record = entry.completion;
	
	        if (entry.tryLoc === "root") {
	          // Exception thrown outside of any try block that could handle
	          // it, so set the completion value of the entire function to
	          // throw the exception.
	          return handle("end");
	        }
	
	        if (entry.tryLoc <= this.prev) {
	          var hasCatch = hasOwn.call(entry, "catchLoc");
	          var hasFinally = hasOwn.call(entry, "finallyLoc");
	
	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            } else if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	
	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            }
	
	          } else if (hasFinally) {
	            if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	
	          } else {
	            throw new Error("try statement without catch or finally");
	          }
	        }
	      }
	    },
	
	    abrupt: function(type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev &&
	            hasOwn.call(entry, "finallyLoc") &&
	            this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }
	
	      if (finallyEntry &&
	          (type === "break" ||
	           type === "continue") &&
	          finallyEntry.tryLoc <= arg &&
	          arg <= finallyEntry.finallyLoc) {
	        // Ignore the finally entry if control is not jumping to a
	        // location outside the try/catch block.
	        finallyEntry = null;
	      }
	
	      var record = finallyEntry ? finallyEntry.completion : {};
	      record.type = type;
	      record.arg = arg;
	
	      if (finallyEntry) {
	        this.method = "next";
	        this.next = finallyEntry.finallyLoc;
	        return ContinueSentinel;
	      }
	
	      return this.complete(record);
	    },
	
	    complete: function(record, afterLoc) {
	      if (record.type === "throw") {
	        throw record.arg;
	      }
	
	      if (record.type === "break" ||
	          record.type === "continue") {
	        this.next = record.arg;
	      } else if (record.type === "return") {
	        this.rval = this.arg = record.arg;
	        this.method = "return";
	        this.next = "end";
	      } else if (record.type === "normal" && afterLoc) {
	        this.next = afterLoc;
	      }
	
	      return ContinueSentinel;
	    },
	
	    finish: function(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) {
	          this.complete(entry.completion, entry.afterLoc);
	          resetTryEntry(entry);
	          return ContinueSentinel;
	        }
	      }
	    },
	
	    "catch": function(tryLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc === tryLoc) {
	          var record = entry.completion;
	          if (record.type === "throw") {
	            var thrown = record.arg;
	            resetTryEntry(entry);
	          }
	          return thrown;
	        }
	      }
	
	      // The context.catch method must only be called with a location
	      // argument that corresponds to a known catch block.
	      throw new Error("illegal catch attempt");
	    },
	
	    delegateYield: function(iterable, resultName, nextLoc) {
	      this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      };
	
	      if (this.method === "next") {
	        // Deliberately forget the last sent value so that we don't
	        // accidentally pass it on to the delegate.
	        this.arg = undefined;
	      }
	
	      return ContinueSentinel;
	    }
	  };
	})(
	  // In sloppy mode, unbound `this` refers to the global object, fallback to
	  // Function constructor if we're in global strict mode. That is sadly a form
	  // of indirect eval which violates Content Security Policy.
	  (function() { return this })() || Function("return this")()
	);


/***/ }),
/* 323 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(324);
	module.exports = __webpack_require__(9).RegExp.escape;


/***/ }),
/* 324 */
/***/ (function(module, exports, __webpack_require__) {

	// https://github.com/benjamingr/RexExp.escape
	var $export = __webpack_require__(8);
	var $re = __webpack_require__(325)(/[\\^$*+?.()|[\]{}]/g, '\\$&');
	
	$export($export.S, 'RegExp', { escape: function escape(it) { return $re(it); } });


/***/ }),
/* 325 */
/***/ (function(module, exports) {

	module.exports = function (regExp, replace) {
	  var replacer = replace === Object(replace) ? function (part) {
	    return replace[part];
	  } : replace;
	  return function (it) {
	    return String(it).replace(regExp, replacer);
	  };
	};


/***/ }),
/* 326 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	// 랜더러 사전 등록을 위해 import
	
	
	var _CanvasGraphicsRenderer = __webpack_require__(431);
	
	var _CanvasGraphicsRenderer2 = _interopRequireDefault(_CanvasGraphicsRenderer);
	
	var _Size = __webpack_require__(327);
	
	var _Size2 = _interopRequireDefault(_Size);
	
	var _Application = __webpack_require__(329);
	
	var _Application2 = _interopRequireDefault(_Application);
	
	var _Graphics = __webpack_require__(330);
	
	var _Graphics2 = _interopRequireDefault(_Graphics);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var App = function () {
	    function App() {
	        _classCallCheck(this, App);
	
	        this.app = new _Application2.default(_Size2.default.windowWidth, _Size2.default.windowHeight, { forceCanvas: true, backgroundColor: 0xFFFFFF, antialias: true });
	        document.body.appendChild(this.app.view);
	
	        this.stage = this.app.stage;
	
	        var g = new _Graphics2.default();
	        g.beginFill(0xff3300);
	        g.drawRect(0, 0, 100, 100);
	        g.endFill();
	        this.stage.addChild(g);
	    }
	
	    _createClass(App, [{
	        key: 'initialize',
	        value: function initialize() {}
	    }, {
	        key: 'resize',
	        value: function resize() {}
	    }]);
	
	    return App;
	}();
	
	exports.default = App;

/***/ }),
/* 327 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _OS = __webpack_require__(328);
	
	var _OS2 = _interopRequireDefault(_OS);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Size = function () {
	    function Size() {
	        _classCallCheck(this, Size);
	    }
	
	    _createClass(Size, null, [{
	        key: 'windowWidth',
	
	        ///////////////////////////////////////////////////////////////////////////////
	        //
	        // Static
	        //
	        /////////////////////////////////////////////////////////////////////////////////
	
	
	        get: function get() {
	            if (_OS2.default.macOS) {
	                return window.innerWidth;
	            } else {
	                return window.innerWidth * window.devicePixelRatio;
	            }
	        }
	    }, {
	        key: 'windowHeight',
	        get: function get() {
	            if (_OS2.default.macOS) {
	                return window.innerHeight;
	            } else {
	                return window.innerHeight * window.devicePixelRatio;
	            }
	        }
	    }, {
	        key: 'windowSize',
	        get: function get() {
	            return new PIXI.Rectangle(0, 0, Size.windowWidth, Size.windowHeight);
	        }
	    }, {
	        key: 'windowCenterX',
	        get: function get() {
	            return this.windowWidth / 2;
	        }
	    }, {
	        key: 'windowCenterY',
	        get: function get() {
	            return this.windowHeight / 2;
	        }
	
	        /**
	         * Chrome
	         * Maximum height/width: 32,767 pixels
	         * Maximum area: 268,435,456 pixels (e.g., 16,384 x 16,384)
	         *
	         * Firefox
	         * Maximum height/width: 32,767 pixels
	         * Maximum area: 472,907,776 pixels (e.g., 22,528 x 20,992)
	         *
	         * IE
	         * Maximum height/width: 8,192 pixels
	         * Maximum area: N/A
	         *
	         * IE Mobile
	         * Maximum height/width: 4,096 pixels
	         * Maximum area: N/A
	         */
	
	    }, {
	        key: 'canvasLimitWidth',
	        get: function get() {
	            return 4096;
	        }
	    }, {
	        key: 'canvasLimitHeight',
	        get: function get() {
	            return 4096;
	        }
	    }]);
	
	    return Size;
	}();
	
	exports.default = Size;

/***/ }),
/* 328 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var OS = function () {
	    function OS() {
	        _classCallCheck(this, OS);
	    }
	
	    _createClass(OS, null, [{
	        key: "checkOS",
	
	        //--------------------------------------------------------------------------
	        //
	        //    OS 체크
	        //
	        //--------------------------------------------------------------------------
	
	        /**
	         * Phaser.Device 코드
	         * http://phaser.io/docs/2.4.2/Phaser.Device.html
	         */
	        value: function checkOS() {
	            if (!this.isChecked) {
	                this._desktop = false;
	
	                var ua = navigator.userAgent;
	
	                if (/Playstation Vita/.test(ua)) {
	                    this._vita = true;
	                } else if (/Kindle/.test(ua) || /\bKF[A-Z][A-Z]+/.test(ua) || /Silk.*Mobile Safari/.test(ua)) {
	                    this._kindle = true;
	                    // This will NOT detect early generations of Kindle Fire, I think there is no reliable way...
	                    // E.g. "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_3; en-us; Silk/1.1.0-80) AppleWebKit/533.16 (KHTML, like Gecko) Version/5.0 Safari/533.16 Silk-Accelerated=true"
	                } else if (/Android/.test(ua)) {
	                    this._android = true;
	                } else if (/CrOS/.test(ua)) {
	                    this._chromeOS = true;
	                } else if (/iP[ao]d|iPhone/i.test(ua)) {
	                    this._iOS = true;
	                    navigator.appVersion.match(/OS (\d+)/);
	                    this._iOSVersion = parseInt(RegExp.$1, 10);
	                } else if (/Linux/.test(ua)) {
	                    this._linux = true;
	                } else if (/Mac OS/.test(ua)) {
	                    this._macOS = true;
	                } else if (/Windows/.test(ua)) {
	                    this._windows = true;
	                }
	
	                if (/Windows Phone/i.test(ua) || /IEMobile/i.test(ua)) {
	                    this._android = false;
	                    this._iOS = false;
	                    this._macOS = false;
	                    this._windows = true;
	                    this._windowsPhone = true;
	                }
	
	                var silk = /Silk/.test(ua); // detected in browsers
	
	                if (this._windows || this._macOS || this._linux && !silk || this._chromeOS) {
	                    this._desktop = true;
	                }
	
	                //  Windows Phone / Table reset
	                if (this._windowsPhone || /Windows NT/i.test(ua) && /Touch/i.test(ua)) {
	                    this._desktop = false;
	                }
	
	                this.isChecked = true;
	            }
	        }
	    }, {
	        key: "desktop",
	        get: function get() {
	            this.checkOS();
	            return this._desktop;
	        }
	    }, {
	        key: "android",
	        get: function get() {
	            this.checkOS();
	            return this._android;
	        }
	    }, {
	        key: "chromeOS",
	        get: function get() {
	            this.checkOS();
	            return this._chromeOS;
	        }
	    }, {
	        key: "iOS",
	        get: function get() {
	            this.checkOS();
	            return this._iOS;
	        }
	    }, {
	        key: "linux",
	        get: function get() {
	            this.checkOS();
	            return this._linux;
	        }
	    }, {
	        key: "macOS",
	        get: function get() {
	            this.checkOS();
	            return this._macOS;
	        }
	    }, {
	        key: "windows",
	        get: function get() {
	            this.checkOS();
	            return this._windows;
	        }
	    }, {
	        key: "windowsPhone",
	        get: function get() {
	            this.checkOS();
	            return this._windowsPhone;
	        }
	    }, {
	        key: "vita",
	        get: function get() {
	            this.checkOS();
	            return this._vita;
	        }
	    }, {
	        key: "kindle",
	        get: function get() {
	            this.checkOS();
	            return this._kindle;
	        }
	    }]);
	
	    return OS;
	}();
	
	exports.default = OS;

/***/ }),
/* 329 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _autoDetectRenderer = __webpack_require__(387);
	
	var _Container = __webpack_require__(331);
	
	var _Container2 = _interopRequireDefault(_Container);
	
	var _ticker = __webpack_require__(372);
	
	var _settings = __webpack_require__(334);
	
	var _settings2 = _interopRequireDefault(_settings);
	
	var _const = __webpack_require__(333);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Convenience class to create a new PIXI application.
	 * This class automatically creates the renderer, ticker
	 * and root container.
	 *
	 * @example
	 * // Create the application
	 * const app = new PIXI.Application();
	 *
	 * // Add the view to the DOM
	 * document.body.appendChild(app.view);
	 *
	 * // ex, add display objects
	 * app.stage.addChild(PIXI.Sprite.fromImage('something.png'));
	 *
	 * @class
	 * @memberof PIXI
	 */
	var Application = function () {
	    // eslint-disable-next-line valid-jsdoc
	    /**
	     * @param {object} [options] - The optional renderer parameters
	     * @param {boolean} [options.autoStart=true] - automatically starts the rendering after the construction.
	     *     Note that setting this parameter to false does NOT stop the shared ticker even if you set
	     *     options.sharedTicker to true in case that it is already started. Stop it by your own.
	     * @param {number} [options.width=800] - the width of the renderers view
	     * @param {number} [options.height=600] - the height of the renderers view
	     * @param {HTMLCanvasElement} [options.view] - the canvas to use as a view, optional
	     * @param {boolean} [options.transparent=false] - If the render view is transparent, default false
	     * @param {boolean} [options.antialias=false] - sets antialias (only applicable in chrome at the moment)
	     * @param {boolean} [options.preserveDrawingBuffer=false] - enables drawing buffer preservation, enable this if you
	     *  need to call toDataUrl on the webgl context
	     * @param {number} [options.resolution=1] - The resolution / device pixel ratio of the renderer, retina would be 2
	     * @param {boolean} [options.forceCanvas=false] - prevents selection of WebGL renderer, even if such is present
	     * @param {number} [options.backgroundColor=0x000000] - The background color of the rendered area
	     *  (shown if not transparent).
	     * @param {boolean} [options.clearBeforeRender=true] - This sets if the renderer will clear the canvas or
	     *   not before the new render pass.
	     * @param {boolean} [options.roundPixels=false] - If true PixiJS will Math.floor() x/y values when rendering,
	     *  stopping pixel interpolation.
	     * @param {boolean} [options.forceFXAA=false] - forces FXAA antialiasing to be used over native.
	     *  FXAA is faster, but may not always look as great **webgl only**
	     * @param {boolean} [options.legacy=false] - `true` to ensure compatibility with older / less advanced devices.
	     *  If you experience unexplained flickering try setting this to true. **webgl only**
	     * @param {string} [options.powerPreference] - Parameter passed to webgl context, set to "high-performance"
	     *  for devices with dual graphics card **webgl only**
	     * @param {boolean} [options.sharedTicker=false] - `true` to use PIXI.ticker.shared, `false` to create new ticker.
	     * @param {boolean} [options.sharedLoader=false] - `true` to use PIXI.loaders.shared, `false` to create new Loader.
	     */
	    function Application(options, arg2, arg3, arg4, arg5) {
	        _classCallCheck(this, Application);
	
	        // Support for constructor(width, height, options, noWebGL, useSharedTicker)
	        if (typeof options === 'number') {
	            options = Object.assign({
	                width: options,
	                height: arg2 || _settings2.default.RENDER_OPTIONS.height,
	                forceCanvas: !!arg4,
	                sharedTicker: !!arg5
	            }, arg3);
	        }
	
	        /**
	         * The default options, so we mixin functionality later.
	         * @member {object}
	         * @protected
	         */
	        this._options = options = Object.assign({
	            autoStart: true,
	            sharedTicker: false,
	            forceCanvas: false,
	            sharedLoader: false
	        }, options);
	
	        /**
	         * WebGL renderer if available, otherwise CanvasRenderer
	         * @member {PIXI.WebGLRenderer|PIXI.CanvasRenderer}
	         */
	        this.renderer = (0, _autoDetectRenderer.autoDetectRenderer)(options);
	
	        /**
	         * The root display container that's rendered.
	         * @member {PIXI.Container}
	         */
	        this.stage = new _Container2.default();
	
	        /**
	         * Internal reference to the ticker
	         * @member {PIXI.ticker.Ticker}
	         * @private
	         */
	        this._ticker = null;
	
	        /**
	         * Ticker for doing render updates.
	         * @member {PIXI.ticker.Ticker}
	         * @default PIXI.ticker.shared
	         */
	        this.ticker = options.sharedTicker ? _ticker.shared : new _ticker.Ticker();
	
	        // Start the rendering
	        if (options.autoStart) {
	            this.start();
	        }
	    }
	
	    _createClass(Application, [{
	        key: 'render',
	
	
	        /**
	         * Render the current stage.
	         */
	        value: function render() {
	            this.renderer.render(this.stage);
	        }
	
	        /**
	         * Convenience method for stopping the render.
	         */
	
	    }, {
	        key: 'stop',
	        value: function stop() {
	            this._ticker.stop();
	        }
	
	        /**
	         * Convenience method for starting the render.
	         */
	
	    }, {
	        key: 'start',
	        value: function start() {
	            this._ticker.start();
	        }
	
	        /**
	         * Reference to the renderer's canvas element.
	         * @member {HTMLCanvasElement}
	         * @readonly
	         */
	
	    }, {
	        key: 'destroy',
	
	
	        /**
	         * Destroy and don't use after this.
	         * @param {Boolean} [removeView=false] Automatically remove canvas from DOM.
	         */
	        value: function destroy(removeView) {
	            var oldTicker = this._ticker;
	
	            this.ticker = null;
	
	            oldTicker.destroy();
	
	            this.stage.destroy();
	            this.stage = null;
	
	            this.renderer.destroy(removeView);
	            this.renderer = null;
	
	            this._options = null;
	        }
	    }, {
	        key: 'ticker',
	        set: function set(ticker) // eslint-disable-line require-jsdoc
	        {
	            if (this._ticker) {
	                this._ticker.remove(this.render, this);
	            }
	            this._ticker = ticker;
	            if (ticker) {
	                ticker.add(this.render, this, _const.UPDATE_PRIORITY.LOW);
	            }
	        },
	        get: function get() // eslint-disable-line require-jsdoc
	        {
	            return this._ticker;
	        }
	    }, {
	        key: 'view',
	        get: function get() {
	            return this.renderer.view;
	        }
	
	        /**
	         * Reference to the renderer's screen rectangle. Its safe to use as filterArea or hitArea for whole screen
	         * @member {PIXI.Rectangle}
	         * @readonly
	         */
	
	    }, {
	        key: 'screen',
	        get: function get() {
	            return this.renderer.screen;
	        }
	    }]);
	
	    return Application;
	}();
	
	exports.default = Application;

/***/ }),
/* 330 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _Container2 = __webpack_require__(331);
	
	var _Container3 = _interopRequireDefault(_Container2);
	
	var _RenderTexture = __webpack_require__(358);
	
	var _RenderTexture2 = _interopRequireDefault(_RenderTexture);
	
	var _Texture = __webpack_require__(370);
	
	var _Texture2 = _interopRequireDefault(_Texture);
	
	var _GraphicsData = __webpack_require__(376);
	
	var _GraphicsData2 = _interopRequireDefault(_GraphicsData);
	
	var _Sprite = __webpack_require__(377);
	
	var _Sprite2 = _interopRequireDefault(_Sprite);
	
	var _math = __webpack_require__(345);
	
	var _utils = __webpack_require__(332);
	
	var _const = __webpack_require__(333);
	
	var _Bounds = __webpack_require__(357);
	
	var _Bounds2 = _interopRequireDefault(_Bounds);
	
	var _bezierCurveTo2 = __webpack_require__(378);
	
	var _bezierCurveTo3 = _interopRequireDefault(_bezierCurveTo2);
	
	var _CanvasRenderer = __webpack_require__(379);
	
	var _CanvasRenderer2 = _interopRequireDefault(_CanvasRenderer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var canvasRenderer = void 0;
	var tempMatrix = new _math.Matrix();
	var tempPoint = new _math.Point();
	var tempColor1 = new Float32Array(4);
	var tempColor2 = new Float32Array(4);
	
	/**
	 * The Graphics class contains methods used to draw primitive shapes such as lines, circles and
	 * rectangles to the display, and to color and fill them.
	 *
	 * @class
	 * @extends PIXI.Container
	 * @memberof PIXI
	 */
	
	var Graphics = function (_Container) {
	    _inherits(Graphics, _Container);
	
	    /**
	     *
	     * @param {boolean} [nativeLines=false] - If true the lines will be draw using LINES instead of TRIANGLE_STRIP
	     */
	    function Graphics() {
	        var nativeLines = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
	
	        _classCallCheck(this, Graphics);
	
	        /**
	         * The alpha value used when filling the Graphics object.
	         *
	         * @member {number}
	         * @default 1
	         */
	        var _this = _possibleConstructorReturn(this, (Graphics.__proto__ || Object.getPrototypeOf(Graphics)).call(this));
	
	        _this.fillAlpha = 1;
	
	        /**
	         * The width (thickness) of any lines drawn.
	         *
	         * @member {number}
	         * @default 0
	         */
	        _this.lineWidth = 0;
	
	        /**
	         * If true the lines will be draw using LINES instead of TRIANGLE_STRIP
	         *
	         * @member {boolean}
	         */
	        _this.nativeLines = nativeLines;
	
	        /**
	         * The color of any lines drawn.
	         *
	         * @member {string}
	         * @default 0
	         */
	        _this.lineColor = 0;
	
	        /**
	         * Graphics data
	         *
	         * @member {PIXI.GraphicsData[]}
	         * @private
	         */
	        _this.graphicsData = [];
	
	        /**
	         * The tint applied to the graphic shape. This is a hex value. Apply a value of 0xFFFFFF to
	         * reset the tint.
	         *
	         * @member {number}
	         * @default 0xFFFFFF
	         */
	        _this.tint = 0xFFFFFF;
	
	        /**
	         * The previous tint applied to the graphic shape. Used to compare to the current tint and
	         * check if theres change.
	         *
	         * @member {number}
	         * @private
	         * @default 0xFFFFFF
	         */
	        _this._prevTint = 0xFFFFFF;
	
	        /**
	         * The blend mode to be applied to the graphic shape. Apply a value of
	         * `PIXI.BLEND_MODES.NORMAL` to reset the blend mode.
	         *
	         * @member {number}
	         * @default PIXI.BLEND_MODES.NORMAL;
	         * @see PIXI.BLEND_MODES
	         */
	        _this.blendMode = _const.BLEND_MODES.NORMAL;
	
	        /**
	         * Current path
	         *
	         * @member {PIXI.GraphicsData}
	         * @private
	         */
	        _this.currentPath = null;
	
	        /**
	         * Array containing some WebGL-related properties used by the WebGL renderer.
	         *
	         * @member {object<number, object>}
	         * @private
	         */
	        // TODO - _webgl should use a prototype object, not a random undocumented object...
	        _this._webGL = {};
	
	        /**
	         * Whether this shape is being used as a mask.
	         *
	         * @member {boolean}
	         */
	        _this.isMask = false;
	
	        /**
	         * The bounds' padding used for bounds calculation.
	         *
	         * @member {number}
	         */
	        _this.boundsPadding = 0;
	
	        /**
	         * A cache of the local bounds to prevent recalculation.
	         *
	         * @member {PIXI.Rectangle}
	         * @private
	         */
	        _this._localBounds = new _Bounds2.default();
	
	        /**
	         * Used to detect if the graphics object has changed. If this is set to true then the graphics
	         * object will be recalculated.
	         *
	         * @member {boolean}
	         * @private
	         */
	        _this.dirty = 0;
	
	        /**
	         * Used to detect if we need to do a fast rect check using the id compare method
	         * @type {Number}
	         */
	        _this.fastRectDirty = -1;
	
	        /**
	         * Used to detect if we clear the graphics webGL data
	         * @type {Number}
	         */
	        _this.clearDirty = 0;
	
	        /**
	         * Used to detect if we we need to recalculate local bounds
	         * @type {Number}
	         */
	        _this.boundsDirty = -1;
	
	        /**
	         * Used to detect if the cached sprite object needs to be updated.
	         *
	         * @member {boolean}
	         * @private
	         */
	        _this.cachedSpriteDirty = false;
	
	        _this._spriteRect = null;
	        _this._fastRect = false;
	
	        /**
	         * When cacheAsBitmap is set to true the graphics object will be rendered as if it was a sprite.
	         * This is useful if your graphics element does not change often, as it will speed up the rendering
	         * of the object in exchange for taking up texture memory. It is also useful if you need the graphics
	         * object to be anti-aliased, because it will be rendered using canvas. This is not recommended if
	         * you are constantly redrawing the graphics element.
	         *
	         * @name cacheAsBitmap
	         * @member {boolean}
	         * @memberof PIXI.Graphics#
	         * @default false
	         */
	        return _this;
	    }
	
	    /**
	     * Creates a new Graphics object with the same values as this one.
	     * Note that the only the properties of the object are cloned, not its transform (position,scale,etc)
	     *
	     * @return {PIXI.Graphics} A clone of the graphics object
	     */
	
	
	    _createClass(Graphics, [{
	        key: 'clone',
	        value: function clone() {
	            var clone = new Graphics();
	
	            clone.renderable = this.renderable;
	            clone.fillAlpha = this.fillAlpha;
	            clone.lineWidth = this.lineWidth;
	            clone.lineColor = this.lineColor;
	            clone.tint = this.tint;
	            clone.blendMode = this.blendMode;
	            clone.isMask = this.isMask;
	            clone.boundsPadding = this.boundsPadding;
	            clone.dirty = 0;
	            clone.cachedSpriteDirty = this.cachedSpriteDirty;
	
	            // copy graphics data
	            for (var i = 0; i < this.graphicsData.length; ++i) {
	                clone.graphicsData.push(this.graphicsData[i].clone());
	            }
	
	            clone.currentPath = clone.graphicsData[clone.graphicsData.length - 1];
	
	            clone.updateLocalBounds();
	
	            return clone;
	        }
	
	        /**
	         * Specifies the line style used for subsequent calls to Graphics methods such as the lineTo()
	         * method or the drawCircle() method.
	         *
	         * @param {number} [lineWidth=0] - width of the line to draw, will update the objects stored style
	         * @param {number} [color=0] - color of the line to draw, will update the objects stored style
	         * @param {number} [alpha=1] - alpha of the line to draw, will update the objects stored style
	         * @return {PIXI.Graphics} This Graphics object. Good for chaining method calls
	         */
	
	    }, {
	        key: 'lineStyle',
	        value: function lineStyle() {
	            var lineWidth = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	            var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	            var alpha = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
	
	            this.lineWidth = lineWidth;
	            this.lineColor = color;
	            this.lineAlpha = alpha;
	
	            if (this.currentPath) {
	                if (this.currentPath.shape.points.length) {
	                    // halfway through a line? start a new one!
	                    var shape = new _math.Polygon(this.currentPath.shape.points.slice(-2));
	
	                    shape.closed = false;
	
	                    this.drawShape(shape);
	                } else {
	                    // otherwise its empty so lets just set the line properties
	                    this.currentPath.lineWidth = this.lineWidth;
	                    this.currentPath.lineColor = this.lineColor;
	                    this.currentPath.lineAlpha = this.lineAlpha;
	                }
	            }
	
	            return this;
	        }
	
	        /**
	         * Moves the current drawing position to x, y.
	         *
	         * @param {number} x - the X coordinate to move to
	         * @param {number} y - the Y coordinate to move to
	         * @return {PIXI.Graphics} This Graphics object. Good for chaining method calls
	         */
	
	    }, {
	        key: 'moveTo',
	        value: function moveTo(x, y) {
	            var shape = new _math.Polygon([x, y]);
	
	            shape.closed = false;
	            this.drawShape(shape);
	
	            return this;
	        }
	
	        /**
	         * Draws a line using the current line style from the current drawing position to (x, y);
	         * The current drawing position is then set to (x, y).
	         *
	         * @param {number} x - the X coordinate to draw to
	         * @param {number} y - the Y coordinate to draw to
	         * @return {PIXI.Graphics} This Graphics object. Good for chaining method calls
	         */
	
	    }, {
	        key: 'lineTo',
	        value: function lineTo(x, y) {
	            this.currentPath.shape.points.push(x, y);
	            this.dirty++;
	
	            return this;
	        }
	
	        /**
	         * Calculate the points for a quadratic bezier curve and then draws it.
	         * Based on: https://stackoverflow.com/questions/785097/how-do-i-implement-a-bezier-curve-in-c
	         *
	         * @param {number} cpX - Control point x
	         * @param {number} cpY - Control point y
	         * @param {number} toX - Destination point x
	         * @param {number} toY - Destination point y
	         * @return {PIXI.Graphics} This Graphics object. Good for chaining method calls
	         */
	
	    }, {
	        key: 'quadraticCurveTo',
	        value: function quadraticCurveTo(cpX, cpY, toX, toY) {
	            if (this.currentPath) {
	                if (this.currentPath.shape.points.length === 0) {
	                    this.currentPath.shape.points = [0, 0];
	                }
	            } else {
	                this.moveTo(0, 0);
	            }
	
	            var n = 20;
	            var points = this.currentPath.shape.points;
	            var xa = 0;
	            var ya = 0;
	
	            if (points.length === 0) {
	                this.moveTo(0, 0);
	            }
	
	            var fromX = points[points.length - 2];
	            var fromY = points[points.length - 1];
	
	            for (var i = 1; i <= n; ++i) {
	                var j = i / n;
	
	                xa = fromX + (cpX - fromX) * j;
	                ya = fromY + (cpY - fromY) * j;
	
	                points.push(xa + (cpX + (toX - cpX) * j - xa) * j, ya + (cpY + (toY - cpY) * j - ya) * j);
	            }
	
	            this.dirty++;
	
	            return this;
	        }
	
	        /**
	         * Calculate the points for a bezier curve and then draws it.
	         *
	         * @param {number} cpX - Control point x
	         * @param {number} cpY - Control point y
	         * @param {number} cpX2 - Second Control point x
	         * @param {number} cpY2 - Second Control point y
	         * @param {number} toX - Destination point x
	         * @param {number} toY - Destination point y
	         * @return {PIXI.Graphics} This Graphics object. Good for chaining method calls
	         */
	
	    }, {
	        key: 'bezierCurveTo',
	        value: function bezierCurveTo(cpX, cpY, cpX2, cpY2, toX, toY) {
	            if (this.currentPath) {
	                if (this.currentPath.shape.points.length === 0) {
	                    this.currentPath.shape.points = [0, 0];
	                }
	            } else {
	                this.moveTo(0, 0);
	            }
	
	            var points = this.currentPath.shape.points;
	
	            var fromX = points[points.length - 2];
	            var fromY = points[points.length - 1];
	
	            points.length -= 2;
	
	            (0, _bezierCurveTo3.default)(fromX, fromY, cpX, cpY, cpX2, cpY2, toX, toY, points);
	
	            this.dirty++;
	
	            return this;
	        }
	
	        /**
	         * The arcTo() method creates an arc/curve between two tangents on the canvas.
	         *
	         * "borrowed" from https://code.google.com/p/fxcanvas/ - thanks google!
	         *
	         * @param {number} x1 - The x-coordinate of the beginning of the arc
	         * @param {number} y1 - The y-coordinate of the beginning of the arc
	         * @param {number} x2 - The x-coordinate of the end of the arc
	         * @param {number} y2 - The y-coordinate of the end of the arc
	         * @param {number} radius - The radius of the arc
	         * @return {PIXI.Graphics} This Graphics object. Good for chaining method calls
	         */
	
	    }, {
	        key: 'arcTo',
	        value: function arcTo(x1, y1, x2, y2, radius) {
	            if (this.currentPath) {
	                if (this.currentPath.shape.points.length === 0) {
	                    this.currentPath.shape.points.push(x1, y1);
	                }
	            } else {
	                this.moveTo(x1, y1);
	            }
	
	            var points = this.currentPath.shape.points;
	            var fromX = points[points.length - 2];
	            var fromY = points[points.length - 1];
	            var a1 = fromY - y1;
	            var b1 = fromX - x1;
	            var a2 = y2 - y1;
	            var b2 = x2 - x1;
	            var mm = Math.abs(a1 * b2 - b1 * a2);
	
	            if (mm < 1.0e-8 || radius === 0) {
	                if (points[points.length - 2] !== x1 || points[points.length - 1] !== y1) {
	                    points.push(x1, y1);
	                }
	            } else {
	                var dd = a1 * a1 + b1 * b1;
	                var cc = a2 * a2 + b2 * b2;
	                var tt = a1 * a2 + b1 * b2;
	                var k1 = radius * Math.sqrt(dd) / mm;
	                var k2 = radius * Math.sqrt(cc) / mm;
	                var j1 = k1 * tt / dd;
	                var j2 = k2 * tt / cc;
	                var cx = k1 * b2 + k2 * b1;
	                var cy = k1 * a2 + k2 * a1;
	                var px = b1 * (k2 + j1);
	                var py = a1 * (k2 + j1);
	                var qx = b2 * (k1 + j2);
	                var qy = a2 * (k1 + j2);
	                var startAngle = Math.atan2(py - cy, px - cx);
	                var endAngle = Math.atan2(qy - cy, qx - cx);
	
	                this.arc(cx + x1, cy + y1, radius, startAngle, endAngle, b1 * a2 > b2 * a1);
	            }
	
	            this.dirty++;
	
	            return this;
	        }
	
	        /**
	         * The arc method creates an arc/curve (used to create circles, or parts of circles).
	         *
	         * @param {number} cx - The x-coordinate of the center of the circle
	         * @param {number} cy - The y-coordinate of the center of the circle
	         * @param {number} radius - The radius of the circle
	         * @param {number} startAngle - The starting angle, in radians (0 is at the 3 o'clock position
	         *  of the arc's circle)
	         * @param {number} endAngle - The ending angle, in radians
	         * @param {boolean} [anticlockwise=false] - Specifies whether the drawing should be
	         *  counter-clockwise or clockwise. False is default, and indicates clockwise, while true
	         *  indicates counter-clockwise.
	         * @return {PIXI.Graphics} This Graphics object. Good for chaining method calls
	         */
	
	    }, {
	        key: 'arc',
	        value: function arc(cx, cy, radius, startAngle, endAngle) {
	            var anticlockwise = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
	
	            if (startAngle === endAngle) {
	                return this;
	            }
	
	            if (!anticlockwise && endAngle <= startAngle) {
	                endAngle += Math.PI * 2;
	            } else if (anticlockwise && startAngle <= endAngle) {
	                startAngle += Math.PI * 2;
	            }
	
	            var sweep = endAngle - startAngle;
	            var segs = Math.ceil(Math.abs(sweep) / (Math.PI * 2)) * 40;
	
	            if (sweep === 0) {
	                return this;
	            }
	
	            var startX = cx + Math.cos(startAngle) * radius;
	            var startY = cy + Math.sin(startAngle) * radius;
	
	            // If the currentPath exists, take its points. Otherwise call `moveTo` to start a path.
	            var points = this.currentPath ? this.currentPath.shape.points : null;
	
	            if (points) {
	                if (points[points.length - 2] !== startX || points[points.length - 1] !== startY) {
	                    points.push(startX, startY);
	                }
	            } else {
	                this.moveTo(startX, startY);
	                points = this.currentPath.shape.points;
	            }
	
	            var theta = sweep / (segs * 2);
	            var theta2 = theta * 2;
	
	            var cTheta = Math.cos(theta);
	            var sTheta = Math.sin(theta);
	
	            var segMinus = segs - 1;
	
	            var remainder = segMinus % 1 / segMinus;
	
	            for (var i = 0; i <= segMinus; ++i) {
	                var real = i + remainder * i;
	
	                var angle = theta + startAngle + theta2 * real;
	
	                var c = Math.cos(angle);
	                var s = -Math.sin(angle);
	
	                points.push((cTheta * c + sTheta * s) * radius + cx, (cTheta * -s + sTheta * c) * radius + cy);
	            }
	
	            this.dirty++;
	
	            return this;
	        }
	
	        /**
	         * Specifies a simple one-color fill that subsequent calls to other Graphics methods
	         * (such as lineTo() or drawCircle()) use when drawing.
	         *
	         * @param {number} [color=0] - the color of the fill
	         * @param {number} [alpha=1] - the alpha of the fill
	         * @return {PIXI.Graphics} This Graphics object. Good for chaining method calls
	         */
	
	    }, {
	        key: 'beginFill',
	        value: function beginFill() {
	            var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	            var alpha = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
	
	            this.filling = true;
	            this.fillColor = color;
	            this.fillAlpha = alpha;
	
	            if (this.currentPath) {
	                if (this.currentPath.shape.points.length <= 2) {
	                    this.currentPath.fill = this.filling;
	                    this.currentPath.fillColor = this.fillColor;
	                    this.currentPath.fillAlpha = this.fillAlpha;
	                }
	            }
	
	            return this;
	        }
	
	        /**
	         * Applies a fill to the lines and shapes that were added since the last call to the beginFill() method.
	         *
	         * @return {PIXI.Graphics} This Graphics object. Good for chaining method calls
	         */
	
	    }, {
	        key: 'endFill',
	        value: function endFill() {
	            this.filling = false;
	            this.fillColor = null;
	            this.fillAlpha = 1;
	
	            return this;
	        }
	
	        /**
	         *
	         * @param {number} x - The X coord of the top-left of the rectangle
	         * @param {number} y - The Y coord of the top-left of the rectangle
	         * @param {number} width - The width of the rectangle
	         * @param {number} height - The height of the rectangle
	         * @return {PIXI.Graphics} This Graphics object. Good for chaining method calls
	         */
	
	    }, {
	        key: 'drawRect',
	        value: function drawRect(x, y, width, height) {
	            this.drawShape(new _math.Rectangle(x, y, width, height));
	
	            return this;
	        }
	
	        /**
	         *
	         * @param {number} x - The X coord of the top-left of the rectangle
	         * @param {number} y - The Y coord of the top-left of the rectangle
	         * @param {number} width - The width of the rectangle
	         * @param {number} height - The height of the rectangle
	         * @param {number} radius - Radius of the rectangle corners
	         * @return {PIXI.Graphics} This Graphics object. Good for chaining method calls
	         */
	
	    }, {
	        key: 'drawRoundedRect',
	        value: function drawRoundedRect(x, y, width, height, radius) {
	            this.drawShape(new _math.RoundedRectangle(x, y, width, height, radius));
	
	            return this;
	        }
	
	        /**
	         * Draws a circle.
	         *
	         * @param {number} x - The X coordinate of the center of the circle
	         * @param {number} y - The Y coordinate of the center of the circle
	         * @param {number} radius - The radius of the circle
	         * @return {PIXI.Graphics} This Graphics object. Good for chaining method calls
	         */
	
	    }, {
	        key: 'drawCircle',
	        value: function drawCircle(x, y, radius) {
	            this.drawShape(new _math.Circle(x, y, radius));
	
	            return this;
	        }
	
	        /**
	         * Draws an ellipse.
	         *
	         * @param {number} x - The X coordinate of the center of the ellipse
	         * @param {number} y - The Y coordinate of the center of the ellipse
	         * @param {number} width - The half width of the ellipse
	         * @param {number} height - The half height of the ellipse
	         * @return {PIXI.Graphics} This Graphics object. Good for chaining method calls
	         */
	
	    }, {
	        key: 'drawEllipse',
	        value: function drawEllipse(x, y, width, height) {
	            this.drawShape(new _math.Ellipse(x, y, width, height));
	
	            return this;
	        }
	
	        /**
	         * Draws a polygon using the given path.
	         *
	         * @param {number[]|PIXI.Point[]|PIXI.Polygon} path - The path data used to construct the polygon.
	         * @return {PIXI.Graphics} This Graphics object. Good for chaining method calls
	         */
	
	    }, {
	        key: 'drawPolygon',
	        value: function drawPolygon(path) {
	            // prevents an argument assignment deopt
	            // see section 3.1: https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#3-managing-arguments
	            var points = path;
	
	            var closed = true;
	
	            if (points instanceof _math.Polygon) {
	                closed = points.closed;
	                points = points.points;
	            }
	
	            if (!Array.isArray(points)) {
	                // prevents an argument leak deopt
	                // see section 3.2: https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#3-managing-arguments
	                points = new Array(arguments.length);
	
	                for (var i = 0; i < points.length; ++i) {
	                    points[i] = arguments[i]; // eslint-disable-line prefer-rest-params
	                }
	            }
	
	            var shape = new _math.Polygon(points);
	
	            shape.closed = closed;
	
	            this.drawShape(shape);
	
	            return this;
	        }
	
	        /**
	         * Clears the graphics that were drawn to this Graphics object, and resets fill and line style settings.
	         *
	         * @return {PIXI.Graphics} This Graphics object. Good for chaining method calls
	         */
	
	    }, {
	        key: 'clear',
	        value: function clear() {
	            if (this.lineWidth || this.filling || this.graphicsData.length > 0) {
	                this.lineWidth = 0;
	                this.filling = false;
	
	                this.boundsDirty = -1;
	                this.dirty++;
	                this.clearDirty++;
	                this.graphicsData.length = 0;
	            }
	
	            this.currentPath = null;
	            this._spriteRect = null;
	
	            return this;
	        }
	
	        /**
	         * True if graphics consists of one rectangle, and thus, can be drawn like a Sprite and
	         * masked with gl.scissor.
	         *
	         * @returns {boolean} True if only 1 rect.
	         */
	
	    }, {
	        key: 'isFastRect',
	        value: function isFastRect() {
	            return this.graphicsData.length === 1 && this.graphicsData[0].shape.type === _const.SHAPES.RECT && !this.graphicsData[0].lineWidth;
	        }
	
	        /**
	         * Renders the object using the WebGL renderer
	         *
	         * @private
	         * @param {PIXI.WebGLRenderer} renderer - The renderer
	         */
	
	    }, {
	        key: '_renderWebGL',
	        value: function _renderWebGL(renderer) {
	            // if the sprite is not visible or the alpha is 0 then no need to render this element
	            if (this.dirty !== this.fastRectDirty) {
	                this.fastRectDirty = this.dirty;
	                this._fastRect = this.isFastRect();
	            }
	
	            // TODO this check can be moved to dirty?
	            if (this._fastRect) {
	                this._renderSpriteRect(renderer);
	            } else {
	                renderer.setObjectRenderer(renderer.plugins.graphics);
	                renderer.plugins.graphics.render(this);
	            }
	        }
	
	        /**
	         * Renders a sprite rectangle.
	         *
	         * @private
	         * @param {PIXI.WebGLRenderer} renderer - The renderer
	         */
	
	    }, {
	        key: '_renderSpriteRect',
	        value: function _renderSpriteRect(renderer) {
	            var rect = this.graphicsData[0].shape;
	
	            if (!this._spriteRect) {
	                this._spriteRect = new _Sprite2.default(new _Texture2.default(_Texture2.default.WHITE));
	            }
	
	            var sprite = this._spriteRect;
	
	            if (this.tint === 0xffffff) {
	                sprite.tint = this.graphicsData[0].fillColor;
	            } else {
	                var t1 = tempColor1;
	                var t2 = tempColor2;
	
	                (0, _utils.hex2rgb)(this.graphicsData[0].fillColor, t1);
	                (0, _utils.hex2rgb)(this.tint, t2);
	
	                t1[0] *= t2[0];
	                t1[1] *= t2[1];
	                t1[2] *= t2[2];
	
	                sprite.tint = (0, _utils.rgb2hex)(t1);
	            }
	            sprite.alpha = this.graphicsData[0].fillAlpha;
	            sprite.worldAlpha = this.worldAlpha * sprite.alpha;
	            sprite.blendMode = this.blendMode;
	
	            sprite._texture._frame.width = rect.width;
	            sprite._texture._frame.height = rect.height;
	
	            sprite.transform.worldTransform = this.transform.worldTransform;
	
	            sprite.anchor.set(-rect.x / rect.width, -rect.y / rect.height);
	            sprite._onAnchorUpdate();
	
	            sprite._renderWebGL(renderer);
	        }
	
	        /**
	         * Renders the object using the Canvas renderer
	         *
	         * @private
	         * @param {PIXI.CanvasRenderer} renderer - The renderer
	         */
	
	    }, {
	        key: '_renderCanvas',
	        value: function _renderCanvas(renderer) {
	            if (this.isMask === true) {
	                return;
	            }
	
	            renderer.plugins.graphics.render(this);
	        }
	
	        /**
	         * Retrieves the bounds of the graphic shape as a rectangle object
	         *
	         * @private
	         */
	
	    }, {
	        key: '_calculateBounds',
	        value: function _calculateBounds() {
	            if (this.boundsDirty !== this.dirty) {
	                this.boundsDirty = this.dirty;
	                this.updateLocalBounds();
	
	                this.cachedSpriteDirty = true;
	            }
	
	            var lb = this._localBounds;
	
	            this._bounds.addFrame(this.transform, lb.minX, lb.minY, lb.maxX, lb.maxY);
	        }
	
	        /**
	         * Tests if a point is inside this graphics object
	         *
	         * @param {PIXI.Point} point - the point to test
	         * @return {boolean} the result of the test
	         */
	
	    }, {
	        key: 'containsPoint',
	        value: function containsPoint(point) {
	            this.worldTransform.applyInverse(point, tempPoint);
	
	            var graphicsData = this.graphicsData;
	
	            for (var i = 0; i < graphicsData.length; ++i) {
	                var data = graphicsData[i];
	
	                if (!data.fill) {
	                    continue;
	                }
	
	                // only deal with fills..
	                if (data.shape) {
	                    if (data.shape.contains(tempPoint.x, tempPoint.y)) {
	                        if (data.holes) {
	                            for (var _i = 0; _i < data.holes.length; _i++) {
	                                var hole = data.holes[_i];
	
	                                if (hole.contains(tempPoint.x, tempPoint.y)) {
	                                    return false;
	                                }
	                            }
	                        }
	
	                        return true;
	                    }
	                }
	            }
	
	            return false;
	        }
	
	        /**
	         * Update the bounds of the object
	         *
	         */
	
	    }, {
	        key: 'updateLocalBounds',
	        value: function updateLocalBounds() {
	            var minX = Infinity;
	            var maxX = -Infinity;
	
	            var minY = Infinity;
	            var maxY = -Infinity;
	
	            if (this.graphicsData.length) {
	                var shape = 0;
	                var x = 0;
	                var y = 0;
	                var w = 0;
	                var h = 0;
	
	                for (var i = 0; i < this.graphicsData.length; i++) {
	                    var data = this.graphicsData[i];
	                    var type = data.type;
	                    var lineWidth = data.lineWidth;
	
	                    shape = data.shape;
	
	                    if (type === _const.SHAPES.RECT || type === _const.SHAPES.RREC) {
	                        x = shape.x - lineWidth / 2;
	                        y = shape.y - lineWidth / 2;
	                        w = shape.width + lineWidth;
	                        h = shape.height + lineWidth;
	
	                        minX = x < minX ? x : minX;
	                        maxX = x + w > maxX ? x + w : maxX;
	
	                        minY = y < minY ? y : minY;
	                        maxY = y + h > maxY ? y + h : maxY;
	                    } else if (type === _const.SHAPES.CIRC) {
	                        x = shape.x;
	                        y = shape.y;
	                        w = shape.radius + lineWidth / 2;
	                        h = shape.radius + lineWidth / 2;
	
	                        minX = x - w < minX ? x - w : minX;
	                        maxX = x + w > maxX ? x + w : maxX;
	
	                        minY = y - h < minY ? y - h : minY;
	                        maxY = y + h > maxY ? y + h : maxY;
	                    } else if (type === _const.SHAPES.ELIP) {
	                        x = shape.x;
	                        y = shape.y;
	                        w = shape.width + lineWidth / 2;
	                        h = shape.height + lineWidth / 2;
	
	                        minX = x - w < minX ? x - w : minX;
	                        maxX = x + w > maxX ? x + w : maxX;
	
	                        minY = y - h < minY ? y - h : minY;
	                        maxY = y + h > maxY ? y + h : maxY;
	                    } else {
	                        // POLY
	                        var points = shape.points;
	                        var x2 = 0;
	                        var y2 = 0;
	                        var dx = 0;
	                        var dy = 0;
	                        var rw = 0;
	                        var rh = 0;
	                        var cx = 0;
	                        var cy = 0;
	
	                        for (var j = 0; j + 2 < points.length; j += 2) {
	                            x = points[j];
	                            y = points[j + 1];
	                            x2 = points[j + 2];
	                            y2 = points[j + 3];
	                            dx = Math.abs(x2 - x);
	                            dy = Math.abs(y2 - y);
	                            h = lineWidth;
	                            w = Math.sqrt(dx * dx + dy * dy);
	
	                            if (w < 1e-9) {
	                                continue;
	                            }
	
	                            rw = (h / w * dy + dx) / 2;
	                            rh = (h / w * dx + dy) / 2;
	                            cx = (x2 + x) / 2;
	                            cy = (y2 + y) / 2;
	
	                            minX = cx - rw < minX ? cx - rw : minX;
	                            maxX = cx + rw > maxX ? cx + rw : maxX;
	
	                            minY = cy - rh < minY ? cy - rh : minY;
	                            maxY = cy + rh > maxY ? cy + rh : maxY;
	                        }
	                    }
	                }
	            } else {
	                minX = 0;
	                maxX = 0;
	                minY = 0;
	                maxY = 0;
	            }
	
	            var padding = this.boundsPadding;
	
	            this._localBounds.minX = minX - padding;
	            this._localBounds.maxX = maxX + padding;
	
	            this._localBounds.minY = minY - padding;
	            this._localBounds.maxY = maxY + padding;
	        }
	
	        /**
	         * Draws the given shape to this Graphics object. Can be any of Circle, Rectangle, Ellipse, Line or Polygon.
	         *
	         * @param {PIXI.Circle|PIXI.Ellipse|PIXI.Polygon|PIXI.Rectangle|PIXI.RoundedRectangle} shape - The shape object to draw.
	         * @return {PIXI.GraphicsData} The generated GraphicsData object.
	         */
	
	    }, {
	        key: 'drawShape',
	        value: function drawShape(shape) {
	            if (this.currentPath) {
	                // check current path!
	                if (this.currentPath.shape.points.length <= 2) {
	                    this.graphicsData.pop();
	                }
	            }
	
	            this.currentPath = null;
	
	            var data = new _GraphicsData2.default(this.lineWidth, this.lineColor, this.lineAlpha, this.fillColor, this.fillAlpha, this.filling, this.nativeLines, shape);
	
	            this.graphicsData.push(data);
	
	            if (data.type === _const.SHAPES.POLY) {
	                data.shape.closed = data.shape.closed || this.filling;
	                this.currentPath = data;
	            }
	
	            this.dirty++;
	
	            return data;
	        }
	
	        /**
	         * Generates a canvas texture.
	         *
	         * @param {number} scaleMode - The scale mode of the texture.
	         * @param {number} resolution - The resolution of the texture.
	         * @return {PIXI.Texture} The new texture.
	         */
	
	    }, {
	        key: 'generateCanvasTexture',
	        value: function generateCanvasTexture(scaleMode) {
	            var resolution = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
	
	            var bounds = this.getLocalBounds();
	
	            var canvasBuffer = _RenderTexture2.default.create(bounds.width, bounds.height, scaleMode, resolution);
	
	            if (!canvasRenderer) {
	                canvasRenderer = new _CanvasRenderer2.default();
	            }
	
	            this.transform.updateLocalTransform();
	            this.transform.localTransform.copy(tempMatrix);
	
	            tempMatrix.invert();
	
	            tempMatrix.tx -= bounds.x;
	            tempMatrix.ty -= bounds.y;
	
	            canvasRenderer.render(this, canvasBuffer, true, tempMatrix);
	
	            var texture = _Texture2.default.fromCanvas(canvasBuffer.baseTexture._canvasRenderTarget.canvas, scaleMode, 'graphics');
	
	            texture.baseTexture.resolution = resolution;
	            texture.baseTexture.update();
	
	            return texture;
	        }
	
	        /**
	         * Closes the current path.
	         *
	         * @return {PIXI.Graphics} Returns itself.
	         */
	
	    }, {
	        key: 'closePath',
	        value: function closePath() {
	            // ok so close path assumes next one is a hole!
	            var currentPath = this.currentPath;
	
	            if (currentPath && currentPath.shape) {
	                currentPath.shape.close();
	            }
	
	            return this;
	        }
	
	        /**
	         * Adds a hole in the current path.
	         *
	         * @return {PIXI.Graphics} Returns itself.
	         */
	
	    }, {
	        key: 'addHole',
	        value: function addHole() {
	            // this is a hole!
	            var hole = this.graphicsData.pop();
	
	            this.currentPath = this.graphicsData[this.graphicsData.length - 1];
	
	            this.currentPath.addHole(hole.shape);
	            this.currentPath = null;
	
	            return this;
	        }
	
	        /**
	         * Destroys the Graphics object.
	         *
	         * @param {object|boolean} [options] - Options parameter. A boolean will act as if all
	         *  options have been set to that value
	         * @param {boolean} [options.children=false] - if set to true, all the children will have
	         *  their destroy method called as well. 'options' will be passed on to those calls.
	         * @param {boolean} [options.texture=false] - Only used for child Sprites if options.children is set to true
	         *  Should it destroy the texture of the child sprite
	         * @param {boolean} [options.baseTexture=false] - Only used for child Sprites if options.children is set to true
	         *  Should it destroy the base texture of the child sprite
	         */
	
	    }, {
	        key: 'destroy',
	        value: function destroy(options) {
	            _get(Graphics.prototype.__proto__ || Object.getPrototypeOf(Graphics.prototype), 'destroy', this).call(this, options);
	
	            // destroy each of the GraphicsData objects
	            for (var i = 0; i < this.graphicsData.length; ++i) {
	                this.graphicsData[i].destroy();
	            }
	
	            // for each webgl data entry, destroy the WebGLGraphicsData
	            for (var id in this._webgl) {
	                for (var j = 0; j < this._webgl[id].data.length; ++j) {
	                    this._webgl[id].data[j].destroy();
	                }
	            }
	
	            if (this._spriteRect) {
	                this._spriteRect.destroy();
	            }
	
	            this.graphicsData = null;
	
	            this.currentPath = null;
	            this._webgl = null;
	            this._localBounds = null;
	        }
	    }]);
	
	    return Graphics;
	}(_Container3.default);
	
	exports.default = Graphics;
	
	
	Graphics._SPRITE_TEXTURE = null;

/***/ }),
/* 331 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _utils = __webpack_require__(332);
	
	var _DisplayObject2 = __webpack_require__(343);
	
	var _DisplayObject3 = _interopRequireDefault(_DisplayObject2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * A Container represents a collection of display objects.
	 * It is the base class of all display objects that act as a container for other objects.
	 *
	 *```js
	 * let container = new PIXI.Container();
	 * container.addChild(sprite);
	 * ```
	 *
	 * @class
	 * @extends PIXI.DisplayObject
	 * @memberof PIXI
	 */
	var Container = function (_DisplayObject) {
	    _inherits(Container, _DisplayObject);
	
	    /**
	     *
	     */
	    function Container() {
	        _classCallCheck(this, Container);
	
	        /**
	         * The array of children of this container.
	         *
	         * @member {PIXI.DisplayObject[]}
	         * @readonly
	         */
	        var _this = _possibleConstructorReturn(this, (Container.__proto__ || Object.getPrototypeOf(Container)).call(this));
	
	        _this.children = [];
	        return _this;
	    }
	
	    /**
	     * Overridable method that can be used by Container subclasses whenever the children array is modified
	     *
	     * @private
	     */
	
	
	    _createClass(Container, [{
	        key: 'onChildrenChange',
	        value: function onChildrenChange() {}
	        /* empty */
	
	
	        /**
	         * Adds one or more children to the container.
	         *
	         * Multiple items can be added like so: `myContainer.addChild(thingOne, thingTwo, thingThree)`
	         *
	         * @param {...PIXI.DisplayObject} child - The DisplayObject(s) to add to the container
	         * @return {PIXI.DisplayObject} The first child that was added.
	         */
	
	    }, {
	        key: 'addChild',
	        value: function addChild(child) {
	            var argumentsLength = arguments.length;
	
	            // if there is only one argument we can bypass looping through the them
	            if (argumentsLength > 1) {
	                // loop through the arguments property and add all children
	                // use it the right way (.length and [i]) so that this function can still be optimised by JS runtimes
	                for (var i = 0; i < argumentsLength; i++) {
	                    this.addChild(arguments[i]);
	                }
	            } else {
	                // if the child has a parent then lets remove it as PixiJS objects can only exist in one place
	                if (child.parent) {
	                    child.parent.removeChild(child);
	                }
	
	                child.parent = this;
	                // ensure child transform will be recalculated
	                child.transform._parentID = -1;
	
	                this.children.push(child);
	
	                // ensure bounds will be recalculated
	                this._boundsID++;
	
	                // TODO - lets either do all callbacks or all events.. not both!
	                this.onChildrenChange(this.children.length - 1);
	                child.emit('added', this);
	            }
	
	            return child;
	        }
	
	        /**
	         * Adds a child to the container at a specified index. If the index is out of bounds an error will be thrown
	         *
	         * @param {PIXI.DisplayObject} child - The child to add
	         * @param {number} index - The index to place the child in
	         * @return {PIXI.DisplayObject} The child that was added.
	         */
	
	    }, {
	        key: 'addChildAt',
	        value: function addChildAt(child, index) {
	            if (index < 0 || index > this.children.length) {
	                throw new Error(child + 'addChildAt: The index ' + index + ' supplied is out of bounds ' + this.children.length);
	            }
	
	            if (child.parent) {
	                child.parent.removeChild(child);
	            }
	
	            child.parent = this;
	            // ensure child transform will be recalculated
	            child.transform._parentID = -1;
	
	            this.children.splice(index, 0, child);
	
	            // ensure bounds will be recalculated
	            this._boundsID++;
	
	            // TODO - lets either do all callbacks or all events.. not both!
	            this.onChildrenChange(index);
	            child.emit('added', this);
	
	            return child;
	        }
	
	        /**
	         * Swaps the position of 2 Display Objects within this container.
	         *
	         * @param {PIXI.DisplayObject} child - First display object to swap
	         * @param {PIXI.DisplayObject} child2 - Second display object to swap
	         */
	
	    }, {
	        key: 'swapChildren',
	        value: function swapChildren(child, child2) {
	            if (child === child2) {
	                return;
	            }
	
	            var index1 = this.getChildIndex(child);
	            var index2 = this.getChildIndex(child2);
	
	            this.children[index1] = child2;
	            this.children[index2] = child;
	            this.onChildrenChange(index1 < index2 ? index1 : index2);
	        }
	
	        /**
	         * Returns the index position of a child DisplayObject instance
	         *
	         * @param {PIXI.DisplayObject} child - The DisplayObject instance to identify
	         * @return {number} The index position of the child display object to identify
	         */
	
	    }, {
	        key: 'getChildIndex',
	        value: function getChildIndex(child) {
	            var index = this.children.indexOf(child);
	
	            if (index === -1) {
	                throw new Error('The supplied DisplayObject must be a child of the caller');
	            }
	
	            return index;
	        }
	
	        /**
	         * Changes the position of an existing child in the display object container
	         *
	         * @param {PIXI.DisplayObject} child - The child DisplayObject instance for which you want to change the index number
	         * @param {number} index - The resulting index number for the child display object
	         */
	
	    }, {
	        key: 'setChildIndex',
	        value: function setChildIndex(child, index) {
	            if (index < 0 || index >= this.children.length) {
	                throw new Error('The supplied index is out of bounds');
	            }
	
	            var currentIndex = this.getChildIndex(child);
	
	            (0, _utils.removeItems)(this.children, currentIndex, 1); // remove from old position
	            this.children.splice(index, 0, child); // add at new position
	
	            this.onChildrenChange(index);
	        }
	
	        /**
	         * Returns the child at the specified index
	         *
	         * @param {number} index - The index to get the child at
	         * @return {PIXI.DisplayObject} The child at the given index, if any.
	         */
	
	    }, {
	        key: 'getChildAt',
	        value: function getChildAt(index) {
	            if (index < 0 || index >= this.children.length) {
	                throw new Error('getChildAt: Index (' + index + ') does not exist.');
	            }
	
	            return this.children[index];
	        }
	
	        /**
	         * Removes one or more children from the container.
	         *
	         * @param {...PIXI.DisplayObject} child - The DisplayObject(s) to remove
	         * @return {PIXI.DisplayObject} The first child that was removed.
	         */
	
	    }, {
	        key: 'removeChild',
	        value: function removeChild(child) {
	            var argumentsLength = arguments.length;
	
	            // if there is only one argument we can bypass looping through the them
	            if (argumentsLength > 1) {
	                // loop through the arguments property and add all children
	                // use it the right way (.length and [i]) so that this function can still be optimised by JS runtimes
	                for (var i = 0; i < argumentsLength; i++) {
	                    this.removeChild(arguments[i]);
	                }
	            } else {
	                var index = this.children.indexOf(child);
	
	                if (index === -1) return null;
	
	                child.parent = null;
	                // ensure child transform will be recalculated
	                child.transform._parentID = -1;
	                (0, _utils.removeItems)(this.children, index, 1);
	
	                // ensure bounds will be recalculated
	                this._boundsID++;
	
	                // TODO - lets either do all callbacks or all events.. not both!
	                this.onChildrenChange(index);
	                child.emit('removed', this);
	            }
	
	            return child;
	        }
	
	        /**
	         * Removes a child from the specified index position.
	         *
	         * @param {number} index - The index to get the child from
	         * @return {PIXI.DisplayObject} The child that was removed.
	         */
	
	    }, {
	        key: 'removeChildAt',
	        value: function removeChildAt(index) {
	            var child = this.getChildAt(index);
	
	            // ensure child transform will be recalculated..
	            child.parent = null;
	            child.transform._parentID = -1;
	            (0, _utils.removeItems)(this.children, index, 1);
	
	            // ensure bounds will be recalculated
	            this._boundsID++;
	
	            // TODO - lets either do all callbacks or all events.. not both!
	            this.onChildrenChange(index);
	            child.emit('removed', this);
	
	            return child;
	        }
	
	        /**
	         * Removes all children from this container that are within the begin and end indexes.
	         *
	         * @param {number} [beginIndex=0] - The beginning position.
	         * @param {number} [endIndex=this.children.length] - The ending position. Default value is size of the container.
	         * @returns {DisplayObject[]} List of removed children
	         */
	
	    }, {
	        key: 'removeChildren',
	        value: function removeChildren() {
	            var beginIndex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	            var endIndex = arguments[1];
	
	            var begin = beginIndex;
	            var end = typeof endIndex === 'number' ? endIndex : this.children.length;
	            var range = end - begin;
	            var removed = void 0;
	
	            if (range > 0 && range <= end) {
	                removed = this.children.splice(begin, range);
	
	                for (var i = 0; i < removed.length; ++i) {
	                    removed[i].parent = null;
	                    if (removed[i].transform) {
	                        removed[i].transform._parentID = -1;
	                    }
	                }
	
	                this._boundsID++;
	
	                this.onChildrenChange(beginIndex);
	
	                for (var _i = 0; _i < removed.length; ++_i) {
	                    removed[_i].emit('removed', this);
	                }
	
	                return removed;
	            } else if (range === 0 && this.children.length === 0) {
	                return [];
	            }
	
	            throw new RangeError('removeChildren: numeric values are outside the acceptable range.');
	        }
	
	        /**
	         * Updates the transform on all children of this container for rendering
	         */
	
	    }, {
	        key: 'updateTransform',
	        value: function updateTransform() {
	            this._boundsID++;
	
	            this.transform.updateTransform(this.parent.transform);
	
	            // TODO: check render flags, how to process stuff here
	            this.worldAlpha = this.alpha * this.parent.worldAlpha;
	
	            for (var i = 0, j = this.children.length; i < j; ++i) {
	                var child = this.children[i];
	
	                if (child.visible) {
	                    child.updateTransform();
	                }
	            }
	        }
	
	        /**
	         * Recalculates the bounds of the container.
	         *
	         */
	
	    }, {
	        key: 'calculateBounds',
	        value: function calculateBounds() {
	            this._bounds.clear();
	
	            this._calculateBounds();
	
	            for (var i = 0; i < this.children.length; i++) {
	                var child = this.children[i];
	
	                if (!child.visible || !child.renderable) {
	                    continue;
	                }
	
	                child.calculateBounds();
	
	                // TODO: filter+mask, need to mask both somehow
	                if (child._mask) {
	                    child._mask.calculateBounds();
	                    this._bounds.addBoundsMask(child._bounds, child._mask._bounds);
	                } else if (child.filterArea) {
	                    this._bounds.addBoundsArea(child._bounds, child.filterArea);
	                } else {
	                    this._bounds.addBounds(child._bounds);
	                }
	            }
	
	            this._lastBoundsID = this._boundsID;
	        }
	
	        /**
	         * Recalculates the bounds of the object. Override this to
	         * calculate the bounds of the specific object (not including children).
	         *
	         */
	
	    }, {
	        key: '_calculateBounds',
	        value: function _calculateBounds() {}
	        // FILL IN//
	
	
	        /**
	         * Renders the object using the WebGL renderer
	         *
	         * @param {PIXI.WebGLRenderer} renderer - The renderer
	         */
	
	    }, {
	        key: 'renderWebGL',
	        value: function renderWebGL(renderer) {
	            // if the object is not visible or the alpha is 0 then no need to render this element
	            if (!this.visible || this.worldAlpha <= 0 || !this.renderable) {
	                return;
	            }
	
	            // do a quick check to see if this element has a mask or a filter.
	            if (this._mask || this._filters) {
	                this.renderAdvancedWebGL(renderer);
	            } else {
	                this._renderWebGL(renderer);
	
	                // simple render children!
	                for (var i = 0, j = this.children.length; i < j; ++i) {
	                    this.children[i].renderWebGL(renderer);
	                }
	            }
	        }
	
	        /**
	         * Render the object using the WebGL renderer and advanced features.
	         *
	         * @private
	         * @param {PIXI.WebGLRenderer} renderer - The renderer
	         */
	
	    }, {
	        key: 'renderAdvancedWebGL',
	        value: function renderAdvancedWebGL(renderer) {
	            renderer.flush();
	
	            var filters = this._filters;
	            var mask = this._mask;
	
	            // push filter first as we need to ensure the stencil buffer is correct for any masking
	            if (filters) {
	                if (!this._enabledFilters) {
	                    this._enabledFilters = [];
	                }
	
	                this._enabledFilters.length = 0;
	
	                for (var i = 0; i < filters.length; i++) {
	                    if (filters[i].enabled) {
	                        this._enabledFilters.push(filters[i]);
	                    }
	                }
	
	                if (this._enabledFilters.length) {
	                    renderer.filterManager.pushFilter(this, this._enabledFilters);
	                }
	            }
	
	            if (mask) {
	                renderer.maskManager.pushMask(this, this._mask);
	            }
	
	            // add this object to the batch, only rendered if it has a texture.
	            this._renderWebGL(renderer);
	
	            // now loop through the children and make sure they get rendered
	            for (var _i2 = 0, j = this.children.length; _i2 < j; _i2++) {
	                this.children[_i2].renderWebGL(renderer);
	            }
	
	            renderer.flush();
	
	            if (mask) {
	                renderer.maskManager.popMask(this, this._mask);
	            }
	
	            if (filters && this._enabledFilters && this._enabledFilters.length) {
	                renderer.filterManager.popFilter();
	            }
	        }
	
	        /**
	         * To be overridden by the subclasses.
	         *
	         * @private
	         * @param {PIXI.WebGLRenderer} renderer - The renderer
	         */
	
	    }, {
	        key: '_renderWebGL',
	        value: function _renderWebGL(renderer) // eslint-disable-line no-unused-vars
	        {}
	        // this is where content itself gets rendered...
	
	
	        /**
	         * To be overridden by the subclass
	         *
	         * @private
	         * @param {PIXI.CanvasRenderer} renderer - The renderer
	         */
	
	    }, {
	        key: '_renderCanvas',
	        value: function _renderCanvas(renderer) // eslint-disable-line no-unused-vars
	        {}
	        // this is where content itself gets rendered...
	
	
	        /**
	         * Renders the object using the Canvas renderer
	         *
	         * @param {PIXI.CanvasRenderer} renderer - The renderer
	         */
	
	    }, {
	        key: 'renderCanvas',
	        value: function renderCanvas(renderer) {
	            // if not visible or the alpha is 0 then no need to render this
	            if (!this.visible || this.worldAlpha <= 0 || !this.renderable) {
	                return;
	            }
	
	            if (this._mask) {
	                renderer.maskManager.pushMask(this._mask);
	            }
	
	            this._renderCanvas(renderer);
	            for (var i = 0, j = this.children.length; i < j; ++i) {
	                this.children[i].renderCanvas(renderer);
	            }
	
	            if (this._mask) {
	                renderer.maskManager.popMask(renderer);
	            }
	        }
	
	        /**
	         * Removes all internal references and listeners as well as removes children from the display list.
	         * Do not use a Container after calling `destroy`.
	         *
	         * @param {object|boolean} [options] - Options parameter. A boolean will act as if all options
	         *  have been set to that value
	         * @param {boolean} [options.children=false] - if set to true, all the children will have their destroy
	         *  method called as well. 'options' will be passed on to those calls.
	         * @param {boolean} [options.texture=false] - Only used for child Sprites if options.children is set to true
	         *  Should it destroy the texture of the child sprite
	         * @param {boolean} [options.baseTexture=false] - Only used for child Sprites if options.children is set to true
	         *  Should it destroy the base texture of the child sprite
	         */
	
	    }, {
	        key: 'destroy',
	        value: function destroy(options) {
	            _get(Container.prototype.__proto__ || Object.getPrototypeOf(Container.prototype), 'destroy', this).call(this);
	
	            var destroyChildren = typeof options === 'boolean' ? options : options && options.children;
	
	            var oldChildren = this.removeChildren(0, this.children.length);
	
	            if (destroyChildren) {
	                for (var i = 0; i < oldChildren.length; ++i) {
	                    oldChildren[i].destroy(options);
	                }
	            }
	        }
	
	        /**
	         * The width of the Container, setting this will actually modify the scale to achieve the value set
	         *
	         * @member {number}
	         */
	
	    }, {
	        key: 'width',
	        get: function get() {
	            return this.scale.x * this.getLocalBounds().width;
	        },
	        set: function set(value) // eslint-disable-line require-jsdoc
	        {
	            var width = this.getLocalBounds().width;
	
	            if (width !== 0) {
	                this.scale.x = value / width;
	            } else {
	                this.scale.x = 1;
	            }
	
	            this._width = value;
	        }
	
	        /**
	         * The height of the Container, setting this will actually modify the scale to achieve the value set
	         *
	         * @member {number}
	         */
	
	    }, {
	        key: 'height',
	        get: function get() {
	            return this.scale.y * this.getLocalBounds().height;
	        },
	        set: function set(value) // eslint-disable-line require-jsdoc
	        {
	            var height = this.getLocalBounds().height;
	
	            if (height !== 0) {
	                this.scale.y = value / height;
	            } else {
	                this.scale.y = 1;
	            }
	
	            this._height = value;
	        }
	    }]);
	
	    return Container;
	}(_DisplayObject3.default);
	
	// performance increase to avoid using call.. (10x faster)
	
	
	exports.default = Container;
	Container.prototype.containerUpdateTransform = Container.prototype.updateTransform;

/***/ }),
/* 332 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.premultiplyBlendMode = exports.BaseTextureCache = exports.TextureCache = exports.mixins = exports.pluginTarget = exports.EventEmitter = exports.removeItems = exports.isMobile = undefined;
	exports.uid = uid;
	exports.hex2rgb = hex2rgb;
	exports.hex2string = hex2string;
	exports.rgb2hex = rgb2hex;
	exports.getResolutionOfUrl = getResolutionOfUrl;
	exports.decomposeDataUri = decomposeDataUri;
	exports.getUrlFileExtension = getUrlFileExtension;
	exports.getSvgSize = getSvgSize;
	exports.skipHello = skipHello;
	exports.sayHello = sayHello;
	exports.isWebGLSupported = isWebGLSupported;
	exports.sign = sign;
	exports.destroyTextureCache = destroyTextureCache;
	exports.clearTextureCache = clearTextureCache;
	exports.correctBlendMode = correctBlendMode;
	exports.premultiplyTint = premultiplyTint;
	exports.premultiplyRgba = premultiplyRgba;
	exports.premultiplyTintToRgba = premultiplyTintToRgba;
	
	var _const = __webpack_require__(333);
	
	var _settings = __webpack_require__(334);
	
	var _settings2 = _interopRequireDefault(_settings);
	
	var _eventemitter = __webpack_require__(338);
	
	var _eventemitter2 = _interopRequireDefault(_eventemitter);
	
	var _pluginTarget = __webpack_require__(339);
	
	var _pluginTarget2 = _interopRequireDefault(_pluginTarget);
	
	var _mixin = __webpack_require__(340);
	
	var mixins = _interopRequireWildcard(_mixin);
	
	var _ismobilejs = __webpack_require__(336);
	
	var isMobile = _interopRequireWildcard(_ismobilejs);
	
	var _removeArrayItems = __webpack_require__(341);
	
	var _removeArrayItems2 = _interopRequireDefault(_removeArrayItems);
	
	var _mapPremultipliedBlendModes = __webpack_require__(342);
	
	var _mapPremultipliedBlendModes2 = _interopRequireDefault(_mapPremultipliedBlendModes);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var nextUid = 0;
	var saidHello = false;
	
	/**
	 * Generalized convenience utilities for PIXI.
	 * @example
	 * // Extend PIXI's internal Event Emitter.
	 * class MyEmitter extends PIXI.utils.EventEmitter {
	 *   constructor() {
	 *      super();
	 *      console.log("Emitter created!");
	 *   }
	 * }
	 *
	 * // Get info on current device
	 * console.log(PIXI.utils.isMobile);
	 *
	 * // Convert hex color to string
	 * console.log(PIXI.utils.hex2string(0xff00ff)); // returns: "#ff00ff"
	 * @namespace PIXI.utils
	 */
	exports.isMobile = isMobile;
	exports.removeItems = _removeArrayItems2.default;
	exports.EventEmitter = _eventemitter2.default;
	exports.pluginTarget = _pluginTarget2.default;
	exports.mixins = mixins;
	
	/**
	 * Gets the next unique identifier
	 *
	 * @memberof PIXI.utils
	 * @function uid
	 * @return {number} The next unique identifier to use.
	 */
	
	function uid() {
	    return ++nextUid;
	}
	
	/**
	 * Converts a hex color number to an [R, G, B] array
	 *
	 * @memberof PIXI.utils
	 * @function hex2rgb
	 * @param {number} hex - The number to convert
	 * @param  {number[]} [out=[]] If supplied, this array will be used rather than returning a new one
	 * @return {number[]} An array representing the [R, G, B] of the color.
	 */
	function hex2rgb(hex, out) {
	    out = out || [];
	
	    out[0] = (hex >> 16 & 0xFF) / 255;
	    out[1] = (hex >> 8 & 0xFF) / 255;
	    out[2] = (hex & 0xFF) / 255;
	
	    return out;
	}
	
	/**
	 * Converts a hex color number to a string.
	 *
	 * @memberof PIXI.utils
	 * @function hex2string
	 * @param {number} hex - Number in hex
	 * @return {string} The string color.
	 */
	function hex2string(hex) {
	    hex = hex.toString(16);
	    hex = '000000'.substr(0, 6 - hex.length) + hex;
	
	    return '#' + hex;
	}
	
	/**
	 * Converts a color as an [R, G, B] array to a hex number
	 *
	 * @memberof PIXI.utils
	 * @function rgb2hex
	 * @param {number[]} rgb - rgb array
	 * @return {number} The color number
	 */
	function rgb2hex(rgb) {
	    return (rgb[0] * 255 << 16) + (rgb[1] * 255 << 8) + (rgb[2] * 255 | 0);
	}
	
	/**
	 * get the resolution / device pixel ratio of an asset by looking for the prefix
	 * used by spritesheets and image urls
	 *
	 * @memberof PIXI.utils
	 * @function getResolutionOfUrl
	 * @param {string} url - the image path
	 * @param {number} [defaultValue=1] - the defaultValue if no filename prefix is set.
	 * @return {number} resolution / device pixel ratio of an asset
	 */
	function getResolutionOfUrl(url, defaultValue) {
	    var resolution = _settings2.default.RETINA_PREFIX.exec(url);
	
	    if (resolution) {
	        return parseFloat(resolution[1]);
	    }
	
	    return defaultValue !== undefined ? defaultValue : 1;
	}
	
	/**
	 * Typedef for decomposeDataUri return object.
	 *
	 * @typedef {object} DecomposedDataUri
	 * @property {mediaType} Media type, eg. `image`
	 * @property {subType} Sub type, eg. `png`
	 * @property {encoding} Data encoding, eg. `base64`
	 * @property {data} The actual data
	 */
	
	/**
	 * Split a data URI into components. Returns undefined if
	 * parameter `dataUri` is not a valid data URI.
	 *
	 * @memberof PIXI.utils
	 * @function decomposeDataUri
	 * @param {string} dataUri - the data URI to check
	 * @return {DecomposedDataUri|undefined} The decomposed data uri or undefined
	 */
	function decomposeDataUri(dataUri) {
	    var dataUriMatch = _const.DATA_URI.exec(dataUri);
	
	    if (dataUriMatch) {
	        return {
	            mediaType: dataUriMatch[1] ? dataUriMatch[1].toLowerCase() : undefined,
	            subType: dataUriMatch[2] ? dataUriMatch[2].toLowerCase() : undefined,
	            encoding: dataUriMatch[3] ? dataUriMatch[3].toLowerCase() : undefined,
	            data: dataUriMatch[4]
	        };
	    }
	
	    return undefined;
	}
	
	/**
	 * Get type of the image by regexp for extension. Returns undefined for unknown extensions.
	 *
	 * @memberof PIXI.utils
	 * @function getUrlFileExtension
	 * @param {string} url - the image path
	 * @return {string|undefined} image extension
	 */
	function getUrlFileExtension(url) {
	    var extension = _const.URL_FILE_EXTENSION.exec(url);
	
	    if (extension) {
	        return extension[1].toLowerCase();
	    }
	
	    return undefined;
	}
	
	/**
	 * Typedef for Size object.
	 *
	 * @typedef {object} Size
	 * @property {width} Width component
	 * @property {height} Height component
	 */
	
	/**
	 * Get size from an svg string using regexp.
	 *
	 * @memberof PIXI.utils
	 * @function getSvgSize
	 * @param {string} svgString - a serialized svg element
	 * @return {Size|undefined} image extension
	 */
	function getSvgSize(svgString) {
	    var sizeMatch = _const.SVG_SIZE.exec(svgString);
	    var size = {};
	
	    if (sizeMatch) {
	        size[sizeMatch[1]] = Math.round(parseFloat(sizeMatch[3]));
	        size[sizeMatch[5]] = Math.round(parseFloat(sizeMatch[7]));
	    }
	
	    return size;
	}
	
	/**
	 * Skips the hello message of renderers that are created after this is run.
	 *
	 * @function skipHello
	 * @memberof PIXI.utils
	 */
	function skipHello() {
	    saidHello = true;
	}
	
	/**
	 * Logs out the version and renderer information for this running instance of PIXI.
	 * If you don't want to see this message you can run `PIXI.utils.skipHello()` before
	 * creating your renderer. Keep in mind that doing that will forever makes you a jerk face.
	 *
	 * @static
	 * @function sayHello
	 * @memberof PIXI.utils
	 * @param {string} type - The string renderer type to log.
	 */
	function sayHello(type) {
	    if (saidHello) {
	        return;
	    }
	
	    if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {
	        var args = ['\n %c %c %c PixiJS ' + _const.VERSION + ' - \u2730 ' + type + ' \u2730  %c  %c  http://www.pixijs.com/  %c %c \u2665%c\u2665%c\u2665 \n\n', 'background: #ff66a5; padding:5px 0;', 'background: #ff66a5; padding:5px 0;', 'color: #ff66a5; background: #030307; padding:5px 0;', 'background: #ff66a5; padding:5px 0;', 'background: #ffc3dc; padding:5px 0;', 'background: #ff66a5; padding:5px 0;', 'color: #ff2424; background: #fff; padding:5px 0;', 'color: #ff2424; background: #fff; padding:5px 0;', 'color: #ff2424; background: #fff; padding:5px 0;'];
	
	        window.console.log.apply(console, args);
	    } else if (window.console) {
	        window.console.log('PixiJS ' + _const.VERSION + ' - ' + type + ' - http://www.pixijs.com/');
	    }
	
	    saidHello = true;
	}
	
	/**
	 * Helper for checking for webgl support
	 *
	 * @memberof PIXI.utils
	 * @function isWebGLSupported
	 * @return {boolean} is webgl supported
	 */
	function isWebGLSupported() {
	    var contextOptions = { stencil: true, failIfMajorPerformanceCaveat: true };
	
	    try {
	        if (!window.WebGLRenderingContext) {
	            return false;
	        }
	
	        var canvas = document.createElement('canvas');
	        var gl = canvas.getContext('webgl', contextOptions) || canvas.getContext('experimental-webgl', contextOptions);
	
	        var success = !!(gl && gl.getContextAttributes().stencil);
	
	        if (gl) {
	            var loseContext = gl.getExtension('WEBGL_lose_context');
	
	            if (loseContext) {
	                loseContext.loseContext();
	            }
	        }
	
	        gl = null;
	
	        return success;
	    } catch (e) {
	        return false;
	    }
	}
	
	/**
	 * Returns sign of number
	 *
	 * @memberof PIXI.utils
	 * @function sign
	 * @param {number} n - the number to check the sign of
	 * @returns {number} 0 if `n` is 0, -1 if `n` is negative, 1 if `n` is positive
	 */
	function sign(n) {
	    if (n === 0) return 0;
	
	    return n < 0 ? -1 : 1;
	}
	
	/**
	 * @todo Describe property usage
	 *
	 * @memberof PIXI.utils
	 * @private
	 */
	var TextureCache = exports.TextureCache = Object.create(null);
	
	/**
	 * @todo Describe property usage
	 *
	 * @memberof PIXI.utils
	 * @private
	 */
	var BaseTextureCache = exports.BaseTextureCache = Object.create(null);
	
	/**
	 * Destroys all texture in the cache
	 *
	 * @memberof PIXI.utils
	 * @function destroyTextureCache
	 */
	function destroyTextureCache() {
	    var key = void 0;
	
	    for (key in TextureCache) {
	        TextureCache[key].destroy();
	    }
	    for (key in BaseTextureCache) {
	        BaseTextureCache[key].destroy();
	    }
	}
	
	/**
	 * Removes all textures from cache, but does not destroy them
	 *
	 * @memberof PIXI.utils
	 * @function clearTextureCache
	 */
	function clearTextureCache() {
	    var key = void 0;
	
	    for (key in TextureCache) {
	        delete TextureCache[key];
	    }
	    for (key in BaseTextureCache) {
	        delete BaseTextureCache[key];
	    }
	}
	
	/**
	 * maps premultiply flag and blendMode to adjusted blendMode
	 * @memberof PIXI.utils
	 * @const premultiplyBlendMode
	 * @type {Array<number[]>}
	 */
	var premultiplyBlendMode = exports.premultiplyBlendMode = (0, _mapPremultipliedBlendModes2.default)();
	
	/**
	 * changes blendMode according to texture format
	 *
	 * @memberof PIXI.utils
	 * @function correctBlendMode
	 * @param {number} blendMode supposed blend mode
	 * @param {boolean} premultiplied  whether source is premultiplied
	 * @returns {number} true blend mode for this texture
	 */
	function correctBlendMode(blendMode, premultiplied) {
	    return premultiplyBlendMode[premultiplied ? 1 : 0][blendMode];
	}
	
	/**
	 * premultiplies tint
	 *
	 * @param {number} tint integet RGB
	 * @param {number} alpha floating point alpha (0.0-1.0)
	 * @returns {number} tint multiplied by alpha
	 */
	function premultiplyTint(tint, alpha) {
	    if (alpha === 1.0) {
	        return (alpha * 255 << 24) + tint;
	    }
	    if (alpha === 0.0) {
	        return 0;
	    }
	    var R = tint >> 16 & 0xFF;
	    var G = tint >> 8 & 0xFF;
	    var B = tint & 0xFF;
	
	    R = R * alpha + 0.5 | 0;
	    G = G * alpha + 0.5 | 0;
	    B = B * alpha + 0.5 | 0;
	
	    return (alpha * 255 << 24) + (R << 16) + (G << 8) + B;
	}
	
	/**
	 * combines rgb and alpha to out array
	 *
	 * @param {Float32Array|number[]} rgb input rgb
	 * @param {number} alpha alpha param
	 * @param {Float32Array} [out] output
	 * @param {boolean} [premultiply=true] do premultiply it
	 * @returns {Float32Array} vec4 rgba
	 */
	function premultiplyRgba(rgb, alpha, out, premultiply) {
	    out = out || new Float32Array(4);
	    if (premultiply || premultiply === undefined) {
	        out[0] = rgb[0] * alpha;
	        out[1] = rgb[1] * alpha;
	        out[2] = rgb[2] * alpha;
	    } else {
	        out[0] = rgb[0];
	        out[1] = rgb[1];
	        out[2] = rgb[2];
	    }
	    out[3] = alpha;
	
	    return out;
	}
	
	/**
	 * converts integer tint and float alpha to vec4 form, premultiplies by default
	 *
	 * @param {number} tint input tint
	 * @param {number} alpha alpha param
	 * @param {Float32Array} [out] output
	 * @param {boolean} [premultiply=true] do premultiply it
	 * @returns {Float32Array} vec4 rgba
	 */
	function premultiplyTintToRgba(tint, alpha, out, premultiply) {
	    out = out || new Float32Array(4);
	    out[0] = (tint >> 16 & 0xFF) / 255.0;
	    out[1] = (tint >> 8 & 0xFF) / 255.0;
	    out[2] = (tint & 0xFF) / 255.0;
	    if (premultiply || premultiply === undefined) {
	        out[0] *= alpha;
	        out[1] *= alpha;
	        out[2] *= alpha;
	    }
	    out[3] = alpha;
	
	    return out;
	}

/***/ }),
/* 333 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * String of the current PIXI version.
	 *
	 * @static
	 * @constant
	 * @memberof PIXI
	 * @name VERSION
	 * @type {string}
	 */
	var VERSION = exports.VERSION = 'DEBUG';
	
	/**
	 * Two Pi.
	 *
	 * @static
	 * @constant
	 * @memberof PIXI
	 * @type {number}
	 */
	var PI_2 = exports.PI_2 = Math.PI * 2;
	
	/**
	 * Conversion factor for converting radians to degrees.
	 *
	 * @static
	 * @constant
	 * @memberof PIXI
	 * @type {number}
	 */
	var RAD_TO_DEG = exports.RAD_TO_DEG = 180 / Math.PI;
	
	/**
	 * Conversion factor for converting degrees to radians.
	 *
	 * @static
	 * @constant
	 * @memberof PIXI
	 * @type {number}
	 */
	var DEG_TO_RAD = exports.DEG_TO_RAD = Math.PI / 180;
	
	/**
	 * Constant to identify the Renderer Type.
	 *
	 * @static
	 * @constant
	 * @memberof PIXI
	 * @name RENDERER_TYPE
	 * @type {object}
	 * @property {number} UNKNOWN - Unknown render type.
	 * @property {number} WEBGL - WebGL render type.
	 * @property {number} CANVAS - Canvas render type.
	 */
	var RENDERER_TYPE = exports.RENDERER_TYPE = {
	  UNKNOWN: 0,
	  WEBGL: 1,
	  CANVAS: 2
	};
	
	/**
	 * Various blend modes supported by PIXI.
	 *
	 * IMPORTANT - The WebGL renderer only supports the NORMAL, ADD, MULTIPLY and SCREEN blend modes.
	 * Anything else will silently act like NORMAL.
	 *
	 * @static
	 * @constant
	 * @memberof PIXI
	 * @name BLEND_MODES
	 * @type {object}
	 * @property {number} NORMAL
	 * @property {number} ADD
	 * @property {number} MULTIPLY
	 * @property {number} SCREEN
	 * @property {number} OVERLAY
	 * @property {number} DARKEN
	 * @property {number} LIGHTEN
	 * @property {number} COLOR_DODGE
	 * @property {number} COLOR_BURN
	 * @property {number} HARD_LIGHT
	 * @property {number} SOFT_LIGHT
	 * @property {number} DIFFERENCE
	 * @property {number} EXCLUSION
	 * @property {number} HUE
	 * @property {number} SATURATION
	 * @property {number} COLOR
	 * @property {number} LUMINOSITY
	 */
	var BLEND_MODES = exports.BLEND_MODES = {
	  NORMAL: 0,
	  ADD: 1,
	  MULTIPLY: 2,
	  SCREEN: 3,
	  OVERLAY: 4,
	  DARKEN: 5,
	  LIGHTEN: 6,
	  COLOR_DODGE: 7,
	  COLOR_BURN: 8,
	  HARD_LIGHT: 9,
	  SOFT_LIGHT: 10,
	  DIFFERENCE: 11,
	  EXCLUSION: 12,
	  HUE: 13,
	  SATURATION: 14,
	  COLOR: 15,
	  LUMINOSITY: 16,
	  NORMAL_NPM: 17,
	  ADD_NPM: 18,
	  SCREEN_NPM: 19
	};
	
	/**
	 * Various webgl draw modes. These can be used to specify which GL drawMode to use
	 * under certain situations and renderers.
	 *
	 * @static
	 * @constant
	 * @memberof PIXI
	 * @name DRAW_MODES
	 * @type {object}
	 * @property {number} POINTS
	 * @property {number} LINES
	 * @property {number} LINE_LOOP
	 * @property {number} LINE_STRIP
	 * @property {number} TRIANGLES
	 * @property {number} TRIANGLE_STRIP
	 * @property {number} TRIANGLE_FAN
	 */
	var DRAW_MODES = exports.DRAW_MODES = {
	  POINTS: 0,
	  LINES: 1,
	  LINE_LOOP: 2,
	  LINE_STRIP: 3,
	  TRIANGLES: 4,
	  TRIANGLE_STRIP: 5,
	  TRIANGLE_FAN: 6
	};
	
	/**
	 * The scale modes that are supported by pixi.
	 *
	 * The {@link PIXI.settings.SCALE_MODE} scale mode affects the default scaling mode of future operations.
	 * It can be re-assigned to either LINEAR or NEAREST, depending upon suitability.
	 *
	 * @static
	 * @constant
	 * @memberof PIXI
	 * @name SCALE_MODES
	 * @type {object}
	 * @property {number} LINEAR Smooth scaling
	 * @property {number} NEAREST Pixelating scaling
	 */
	var SCALE_MODES = exports.SCALE_MODES = {
	  LINEAR: 0,
	  NEAREST: 1
	};
	
	/**
	 * The wrap modes that are supported by pixi.
	 *
	 * The {@link PIXI.settings.WRAP_MODE} wrap mode affects the default wraping mode of future operations.
	 * It can be re-assigned to either CLAMP or REPEAT, depending upon suitability.
	 * If the texture is non power of two then clamp will be used regardless as webGL can
	 * only use REPEAT if the texture is po2.
	 *
	 * This property only affects WebGL.
	 *
	 * @static
	 * @constant
	 * @name WRAP_MODES
	 * @memberof PIXI
	 * @type {object}
	 * @property {number} CLAMP - The textures uvs are clamped
	 * @property {number} REPEAT - The texture uvs tile and repeat
	 * @property {number} MIRRORED_REPEAT - The texture uvs tile and repeat with mirroring
	 */
	var WRAP_MODES = exports.WRAP_MODES = {
	  CLAMP: 0,
	  REPEAT: 1,
	  MIRRORED_REPEAT: 2
	};
	
	/**
	 * The gc modes that are supported by pixi.
	 *
	 * The {@link PIXI.settings.GC_MODE} Garbage Collection mode for PixiJS textures is AUTO
	 * If set to GC_MODE, the renderer will occasionally check textures usage. If they are not
	 * used for a specified period of time they will be removed from the GPU. They will of course
	 * be uploaded again when they are required. This is a silent behind the scenes process that
	 * should ensure that the GPU does not  get filled up.
	 *
	 * Handy for mobile devices!
	 * This property only affects WebGL.
	 *
	 * @static
	 * @constant
	 * @name GC_MODES
	 * @memberof PIXI
	 * @type {object}
	 * @property {number} AUTO - Garbage collection will happen periodically automatically
	 * @property {number} MANUAL - Garbage collection will need to be called manually
	 */
	var GC_MODES = exports.GC_MODES = {
	  AUTO: 0,
	  MANUAL: 1
	};
	
	/**
	 * Regexp for image type by extension.
	 *
	 * @static
	 * @constant
	 * @memberof PIXI
	 * @type {RegExp|string}
	 * @example `image.png`
	 */
	var URL_FILE_EXTENSION = exports.URL_FILE_EXTENSION = /\.(\w{3,4})(?:$|\?|#)/i;
	
	/**
	 * Regexp for data URI.
	 * Based on: {@link https://github.com/ragingwind/data-uri-regex}
	 *
	 * @static
	 * @constant
	 * @name DATA_URI
	 * @memberof PIXI
	 * @type {RegExp|string}
	 * @example data:image/png;base64
	 */
	var DATA_URI = exports.DATA_URI = /^\s*data:(?:([\w-]+)\/([\w+.-]+))?(?:;(charset=[\w-]+|base64))?,(.*)/i;
	
	/**
	 * Regexp for SVG size.
	 *
	 * @static
	 * @constant
	 * @name SVG_SIZE
	 * @memberof PIXI
	 * @type {RegExp|string}
	 * @example &lt;svg width="100" height="100"&gt;&lt;/svg&gt;
	 */
	var SVG_SIZE = exports.SVG_SIZE = /<svg[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*>/i; // eslint-disable-line max-len
	
	/**
	 * Constants that identify shapes, mainly to prevent `instanceof` calls.
	 *
	 * @static
	 * @constant
	 * @name SHAPES
	 * @memberof PIXI
	 * @type {object}
	 * @property {number} POLY Polygon
	 * @property {number} RECT Rectangle
	 * @property {number} CIRC Circle
	 * @property {number} ELIP Ellipse
	 * @property {number} RREC Rounded Rectangle
	 */
	var SHAPES = exports.SHAPES = {
	  POLY: 0,
	  RECT: 1,
	  CIRC: 2,
	  ELIP: 3,
	  RREC: 4
	};
	
	/**
	 * Constants that specify float precision in shaders.
	 *
	 * @static
	 * @constant
	 * @name PRECISION
	 * @memberof PIXI
	 * @type {object}
	 * @property {string} LOW='lowp'
	 * @property {string} MEDIUM='mediump'
	 * @property {string} HIGH='highp'
	 */
	var PRECISION = exports.PRECISION = {
	  LOW: 'lowp',
	  MEDIUM: 'mediump',
	  HIGH: 'highp'
	};
	
	/**
	 * Constants that specify the transform type.
	 *
	 * @static
	 * @constant
	 * @name TRANSFORM_MODE
	 * @memberof PIXI
	 * @type {object}
	 * @property {number} STATIC
	 * @property {number} DYNAMIC
	 */
	var TRANSFORM_MODE = exports.TRANSFORM_MODE = {
	  STATIC: 0,
	  DYNAMIC: 1
	};
	
	/**
	 * Constants that define the type of gradient on text.
	 *
	 * @static
	 * @constant
	 * @name TEXT_GRADIENT
	 * @memberof PIXI
	 * @type {object}
	 * @property {number} LINEAR_VERTICAL Vertical gradient
	 * @property {number} LINEAR_HORIZONTAL Linear gradient
	 */
	var TEXT_GRADIENT = exports.TEXT_GRADIENT = {
	  LINEAR_VERTICAL: 0,
	  LINEAR_HORIZONTAL: 1
	};
	
	/**
	 * Represents the update priorities used by internal PIXI classes when registered with
	 * the {@link PIXI.ticker.Ticker} object. Higher priority items are updated first and lower
	 * priority items, such as render, should go later.
	 *
	 * @static
	 * @constant
	 * @name UPDATE_PRIORITY
	 * @memberof PIXI
	 * @type {object}
	 * @property {number} INTERACTION=50 Highest priority, used for {@link PIXI.interaction.InteractionManager}
	 * @property {number} HIGH=25 High priority updating, {@link PIXI.VideoBaseTexture} and {@link PIXI.extras.AnimatedSprite}
	 * @property {number} NORMAL=0 Default priority for ticker events, see {@link PIXI.ticker.Ticker#add}.
	 * @property {number} LOW=-25 Low priority used for {@link PIXI.Application} rendering.
	 * @property {number} UTILITY=-50 Lowest priority used for {@link PIXI.prepare.BasePrepare} utility.
	 */
	var UPDATE_PRIORITY = exports.UPDATE_PRIORITY = {
	  INTERACTION: 50,
	  HIGH: 25,
	  NORMAL: 0,
	  LOW: -25,
	  UTILITY: -50
	};

/***/ }),
/* 334 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _maxRecommendedTextures = __webpack_require__(335);
	
	var _maxRecommendedTextures2 = _interopRequireDefault(_maxRecommendedTextures);
	
	var _canUploadSameBuffer = __webpack_require__(337);
	
	var _canUploadSameBuffer2 = _interopRequireDefault(_canUploadSameBuffer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * User's customizable globals for overriding the default PIXI settings, such
	 * as a renderer's default resolution, framerate, float percision, etc.
	 * @example
	 * // Use the native window resolution as the default resolution
	 * // will support high-density displays when rendering
	 * PIXI.settings.RESOLUTION = window.devicePixelRatio.
	 *
	 * // Disable interpolation when scaling, will make texture be pixelated
	 * PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;
	 * @namespace PIXI.settings
	 */
	exports.default = {
	
	  /**
	   * Target frames per millisecond.
	   *
	   * @static
	   * @memberof PIXI.settings
	   * @type {number}
	   * @default 0.06
	   */
	  TARGET_FPMS: 0.06,
	
	  /**
	   * If set to true WebGL will attempt make textures mimpaped by default.
	   * Mipmapping will only succeed if the base texture uploaded has power of two dimensions.
	   *
	   * @static
	   * @memberof PIXI.settings
	   * @type {boolean}
	   * @default true
	   */
	  MIPMAP_TEXTURES: true,
	
	  /**
	   * Default resolution / device pixel ratio of the renderer.
	   *
	   * @static
	   * @memberof PIXI.settings
	   * @type {number}
	   * @default 1
	   */
	  RESOLUTION: 1,
	
	  /**
	   * Default filter resolution.
	   *
	   * @static
	   * @memberof PIXI.settings
	   * @type {number}
	   * @default 1
	   */
	  FILTER_RESOLUTION: 1,
	
	  /**
	   * The maximum textures that this device supports.
	   *
	   * @static
	   * @memberof PIXI.settings
	   * @type {number}
	   * @default 32
	   */
	  SPRITE_MAX_TEXTURES: (0, _maxRecommendedTextures2.default)(32),
	
	  // TODO: maybe change to SPRITE.BATCH_SIZE: 2000
	  // TODO: maybe add PARTICLE.BATCH_SIZE: 15000
	
	  /**
	   * The default sprite batch size.
	   *
	   * The default aims to balance desktop and mobile devices.
	   *
	   * @static
	   * @memberof PIXI.settings
	   * @type {number}
	   * @default 4096
	   */
	  SPRITE_BATCH_SIZE: 4096,
	
	  /**
	   * The prefix that denotes a URL is for a retina asset.
	   *
	   * @static
	   * @memberof PIXI.settings
	   * @type {RegExp}
	   * @example `@2x`
	   * @default /@([0-9\.]+)x/
	   */
	  RETINA_PREFIX: /@([0-9\.]+)x/,
	
	  /**
	   * The default render options if none are supplied to {@link PIXI.WebGLRenderer}
	   * or {@link PIXI.CanvasRenderer}.
	   *
	   * @static
	   * @constant
	   * @memberof PIXI.settings
	   * @type {object}
	   * @property {HTMLCanvasElement} view=null
	   * @property {number} resolution=1
	   * @property {boolean} antialias=false
	   * @property {boolean} forceFXAA=false
	   * @property {boolean} autoResize=false
	   * @property {boolean} transparent=false
	   * @property {number} backgroundColor=0x000000
	   * @property {boolean} clearBeforeRender=true
	   * @property {boolean} preserveDrawingBuffer=false
	   * @property {boolean} roundPixels=false
	   * @property {number} width=800
	   * @property {number} height=600
	   * @property {boolean} legacy=false
	   */
	  RENDER_OPTIONS: {
	    view: null,
	    antialias: false,
	    forceFXAA: false,
	    autoResize: false,
	    transparent: false,
	    backgroundColor: 0x000000,
	    clearBeforeRender: true,
	    preserveDrawingBuffer: false,
	    roundPixels: false,
	    width: 800,
	    height: 600,
	    legacy: false
	  },
	
	  /**
	   * Default transform type.
	   *
	   * @static
	   * @memberof PIXI.settings
	   * @type {PIXI.TRANSFORM_MODE}
	   * @default PIXI.TRANSFORM_MODE.STATIC
	   */
	  TRANSFORM_MODE: 0,
	
	  /**
	   * Default Garbage Collection mode.
	   *
	   * @static
	   * @memberof PIXI.settings
	   * @type {PIXI.GC_MODES}
	   * @default PIXI.GC_MODES.AUTO
	   */
	  GC_MODE: 0,
	
	  /**
	   * Default Garbage Collection max idle.
	   *
	   * @static
	   * @memberof PIXI.settings
	   * @type {number}
	   * @default 3600
	   */
	  GC_MAX_IDLE: 60 * 60,
	
	  /**
	   * Default Garbage Collection maximum check count.
	   *
	   * @static
	   * @memberof PIXI.settings
	   * @type {number}
	   * @default 600
	   */
	  GC_MAX_CHECK_COUNT: 60 * 10,
	
	  /**
	   * Default wrap modes that are supported by pixi.
	   *
	   * @static
	   * @memberof PIXI.settings
	   * @type {PIXI.WRAP_MODES}
	   * @default PIXI.WRAP_MODES.CLAMP
	   */
	  WRAP_MODE: 0,
	
	  /**
	   * The scale modes that are supported by pixi.
	   *
	   * @static
	   * @memberof PIXI.settings
	   * @type {PIXI.SCALE_MODES}
	   * @default PIXI.SCALE_MODES.LINEAR
	   */
	  SCALE_MODE: 0,
	
	  /**
	   * Default specify float precision in vertex shader.
	   *
	   * @static
	   * @memberof PIXI.settings
	   * @type {PIXI.PRECISION}
	   * @default PIXI.PRECISION.HIGH
	   */
	  PRECISION_VERTEX: 'highp',
	
	  /**
	   * Default specify float precision in fragment shader.
	   *
	   * @static
	   * @memberof PIXI.settings
	   * @type {PIXI.PRECISION}
	   * @default PIXI.PRECISION.MEDIUM
	   */
	  PRECISION_FRAGMENT: 'mediump',
	
	  /**
	   * Can we upload the same buffer in a single frame?
	   *
	   * @static
	   * @constant
	   * @memberof PIXI
	   * @type {boolean}
	   */
	  CAN_UPLOAD_SAME_BUFFER: (0, _canUploadSameBuffer2.default)()
	
	};

/***/ }),
/* 335 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = maxRecommendedTextures;
	
	var _ismobilejs = __webpack_require__(336);
	
	var _ismobilejs2 = _interopRequireDefault(_ismobilejs);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function maxRecommendedTextures(max) {
	    if (_ismobilejs2.default.tablet || _ismobilejs2.default.phone) {
	        // check if the res is iphone 6 or higher..
	        return 4;
	    }
	
	    // desktop should be ok
	    return max;
	}

/***/ }),
/* 336 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * isMobile.js v0.4.1
	 *
	 * A simple library to detect Apple phones and tablets,
	 * Android phones and tablets, other mobile devices (like blackberry, mini-opera and windows phone),
	 * and any kind of seven inch device, via user agent sniffing.
	 *
	 * @author: Kai Mallea (kmallea@gmail.com)
	 *
	 * @license: http://creativecommons.org/publicdomain/zero/1.0/
	 */
	(function (global) {
	
	    var apple_phone         = /iPhone/i,
	        apple_ipod          = /iPod/i,
	        apple_tablet        = /iPad/i,
	        android_phone       = /(?=.*\bAndroid\b)(?=.*\bMobile\b)/i, // Match 'Android' AND 'Mobile'
	        android_tablet      = /Android/i,
	        amazon_phone        = /(?=.*\bAndroid\b)(?=.*\bSD4930UR\b)/i,
	        amazon_tablet       = /(?=.*\bAndroid\b)(?=.*\b(?:KFOT|KFTT|KFJWI|KFJWA|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|KFARWI|KFASWI|KFSAWI|KFSAWA)\b)/i,
	        windows_phone       = /Windows Phone/i,
	        windows_tablet      = /(?=.*\bWindows\b)(?=.*\bARM\b)/i, // Match 'Windows' AND 'ARM'
	        other_blackberry    = /BlackBerry/i,
	        other_blackberry_10 = /BB10/i,
	        other_opera         = /Opera Mini/i,
	        other_chrome        = /(CriOS|Chrome)(?=.*\bMobile\b)/i,
	        other_firefox       = /(?=.*\bFirefox\b)(?=.*\bMobile\b)/i, // Match 'Firefox' AND 'Mobile'
	        seven_inch = new RegExp(
	            '(?:' +         // Non-capturing group
	
	            'Nexus 7' +     // Nexus 7
	
	            '|' +           // OR
	
	            'BNTV250' +     // B&N Nook Tablet 7 inch
	
	            '|' +           // OR
	
	            'Kindle Fire' + // Kindle Fire
	
	            '|' +           // OR
	
	            'Silk' +        // Kindle Fire, Silk Accelerated
	
	            '|' +           // OR
	
	            'GT-P1000' +    // Galaxy Tab 7 inch
	
	            ')',            // End non-capturing group
	
	            'i');           // Case-insensitive matching
	
	    var match = function(regex, userAgent) {
	        return regex.test(userAgent);
	    };
	
	    var IsMobileClass = function(userAgent) {
	        var ua = userAgent || navigator.userAgent;
	
	        // Facebook mobile app's integrated browser adds a bunch of strings that
	        // match everything. Strip it out if it exists.
	        var tmp = ua.split('[FBAN');
	        if (typeof tmp[1] !== 'undefined') {
	            ua = tmp[0];
	        }
	
	        // Twitter mobile app's integrated browser on iPad adds a "Twitter for
	        // iPhone" string. Same probable happens on other tablet platforms.
	        // This will confuse detection so strip it out if it exists.
	        tmp = ua.split('Twitter');
	        if (typeof tmp[1] !== 'undefined') {
	            ua = tmp[0];
	        }
	
	        this.apple = {
	            phone:  match(apple_phone, ua),
	            ipod:   match(apple_ipod, ua),
	            tablet: !match(apple_phone, ua) && match(apple_tablet, ua),
	            device: match(apple_phone, ua) || match(apple_ipod, ua) || match(apple_tablet, ua)
	        };
	        this.amazon = {
	            phone:  match(amazon_phone, ua),
	            tablet: !match(amazon_phone, ua) && match(amazon_tablet, ua),
	            device: match(amazon_phone, ua) || match(amazon_tablet, ua)
	        };
	        this.android = {
	            phone:  match(amazon_phone, ua) || match(android_phone, ua),
	            tablet: !match(amazon_phone, ua) && !match(android_phone, ua) && (match(amazon_tablet, ua) || match(android_tablet, ua)),
	            device: match(amazon_phone, ua) || match(amazon_tablet, ua) || match(android_phone, ua) || match(android_tablet, ua)
	        };
	        this.windows = {
	            phone:  match(windows_phone, ua),
	            tablet: match(windows_tablet, ua),
	            device: match(windows_phone, ua) || match(windows_tablet, ua)
	        };
	        this.other = {
	            blackberry:   match(other_blackberry, ua),
	            blackberry10: match(other_blackberry_10, ua),
	            opera:        match(other_opera, ua),
	            firefox:      match(other_firefox, ua),
	            chrome:       match(other_chrome, ua),
	            device:       match(other_blackberry, ua) || match(other_blackberry_10, ua) || match(other_opera, ua) || match(other_firefox, ua) || match(other_chrome, ua)
	        };
	        this.seven_inch = match(seven_inch, ua);
	        this.any = this.apple.device || this.android.device || this.windows.device || this.other.device || this.seven_inch;
	
	        // excludes 'other' devices and ipods, targeting touchscreen phones
	        this.phone = this.apple.phone || this.android.phone || this.windows.phone;
	
	        // excludes 7 inch devices, classifying as phone or tablet is left to the user
	        this.tablet = this.apple.tablet || this.android.tablet || this.windows.tablet;
	
	        if (typeof window === 'undefined') {
	            return this;
	        }
	    };
	
	    var instantiate = function() {
	        var IM = new IsMobileClass();
	        IM.Class = IsMobileClass;
	        return IM;
	    };
	
	    if (typeof module !== 'undefined' && module.exports && typeof window === 'undefined') {
	        //node
	        module.exports = IsMobileClass;
	    } else if (typeof module !== 'undefined' && module.exports && typeof window !== 'undefined') {
	        //browserify
	        module.exports = instantiate();
	    } else if (true) {
	        //AMD
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (global.isMobile = instantiate()), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else {
	        global.isMobile = instantiate();
	    }
	
	})(this);


/***/ }),
/* 337 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = canUploadSameBuffer;
	function canUploadSameBuffer() {
		// Uploading the same buffer multiple times in a single frame can cause perf issues.
		// Apparent on IOS so only check for that at the moment
		// this check may become more complex if this issue pops up elsewhere.
		var ios = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
	
		return !ios;
	}

/***/ }),
/* 338 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var has = Object.prototype.hasOwnProperty
	  , prefix = '~';
	
	/**
	 * Constructor to create a storage for our `EE` objects.
	 * An `Events` instance is a plain object whose properties are event names.
	 *
	 * @constructor
	 * @api private
	 */
	function Events() {}
	
	//
	// We try to not inherit from `Object.prototype`. In some engines creating an
	// instance in this way is faster than calling `Object.create(null)` directly.
	// If `Object.create(null)` is not supported we prefix the event names with a
	// character to make sure that the built-in object properties are not
	// overridden or used as an attack vector.
	//
	if (Object.create) {
	  Events.prototype = Object.create(null);
	
	  //
	  // This hack is needed because the `__proto__` property is still inherited in
	  // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
	  //
	  if (!new Events().__proto__) prefix = false;
	}
	
	/**
	 * Representation of a single event listener.
	 *
	 * @param {Function} fn The listener function.
	 * @param {Mixed} context The context to invoke the listener with.
	 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
	 * @constructor
	 * @api private
	 */
	function EE(fn, context, once) {
	  this.fn = fn;
	  this.context = context;
	  this.once = once || false;
	}
	
	/**
	 * Minimal `EventEmitter` interface that is molded against the Node.js
	 * `EventEmitter` interface.
	 *
	 * @constructor
	 * @api public
	 */
	function EventEmitter() {
	  this._events = new Events();
	  this._eventsCount = 0;
	}
	
	/**
	 * Return an array listing the events for which the emitter has registered
	 * listeners.
	 *
	 * @returns {Array}
	 * @api public
	 */
	EventEmitter.prototype.eventNames = function eventNames() {
	  var names = []
	    , events
	    , name;
	
	  if (this._eventsCount === 0) return names;
	
	  for (name in (events = this._events)) {
	    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
	  }
	
	  if (Object.getOwnPropertySymbols) {
	    return names.concat(Object.getOwnPropertySymbols(events));
	  }
	
	  return names;
	};
	
	/**
	 * Return the listeners registered for a given event.
	 *
	 * @param {String|Symbol} event The event name.
	 * @param {Boolean} exists Only check if there are listeners.
	 * @returns {Array|Boolean}
	 * @api public
	 */
	EventEmitter.prototype.listeners = function listeners(event, exists) {
	  var evt = prefix ? prefix + event : event
	    , available = this._events[evt];
	
	  if (exists) return !!available;
	  if (!available) return [];
	  if (available.fn) return [available.fn];
	
	  for (var i = 0, l = available.length, ee = new Array(l); i < l; i++) {
	    ee[i] = available[i].fn;
	  }
	
	  return ee;
	};
	
	/**
	 * Calls each of the listeners registered for a given event.
	 *
	 * @param {String|Symbol} event The event name.
	 * @returns {Boolean} `true` if the event had listeners, else `false`.
	 * @api public
	 */
	EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
	  var evt = prefix ? prefix + event : event;
	
	  if (!this._events[evt]) return false;
	
	  var listeners = this._events[evt]
	    , len = arguments.length
	    , args
	    , i;
	
	  if (listeners.fn) {
	    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);
	
	    switch (len) {
	      case 1: return listeners.fn.call(listeners.context), true;
	      case 2: return listeners.fn.call(listeners.context, a1), true;
	      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
	      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
	      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
	      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
	    }
	
	    for (i = 1, args = new Array(len -1); i < len; i++) {
	      args[i - 1] = arguments[i];
	    }
	
	    listeners.fn.apply(listeners.context, args);
	  } else {
	    var length = listeners.length
	      , j;
	
	    for (i = 0; i < length; i++) {
	      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);
	
	      switch (len) {
	        case 1: listeners[i].fn.call(listeners[i].context); break;
	        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
	        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
	        case 4: listeners[i].fn.call(listeners[i].context, a1, a2, a3); break;
	        default:
	          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
	            args[j - 1] = arguments[j];
	          }
	
	          listeners[i].fn.apply(listeners[i].context, args);
	      }
	    }
	  }
	
	  return true;
	};
	
	/**
	 * Add a listener for a given event.
	 *
	 * @param {String|Symbol} event The event name.
	 * @param {Function} fn The listener function.
	 * @param {Mixed} [context=this] The context to invoke the listener with.
	 * @returns {EventEmitter} `this`.
	 * @api public
	 */
	EventEmitter.prototype.on = function on(event, fn, context) {
	  var listener = new EE(fn, context || this)
	    , evt = prefix ? prefix + event : event;
	
	  if (!this._events[evt]) this._events[evt] = listener, this._eventsCount++;
	  else if (!this._events[evt].fn) this._events[evt].push(listener);
	  else this._events[evt] = [this._events[evt], listener];
	
	  return this;
	};
	
	/**
	 * Add a one-time listener for a given event.
	 *
	 * @param {String|Symbol} event The event name.
	 * @param {Function} fn The listener function.
	 * @param {Mixed} [context=this] The context to invoke the listener with.
	 * @returns {EventEmitter} `this`.
	 * @api public
	 */
	EventEmitter.prototype.once = function once(event, fn, context) {
	  var listener = new EE(fn, context || this, true)
	    , evt = prefix ? prefix + event : event;
	
	  if (!this._events[evt]) this._events[evt] = listener, this._eventsCount++;
	  else if (!this._events[evt].fn) this._events[evt].push(listener);
	  else this._events[evt] = [this._events[evt], listener];
	
	  return this;
	};
	
	/**
	 * Remove the listeners of a given event.
	 *
	 * @param {String|Symbol} event The event name.
	 * @param {Function} fn Only remove the listeners that match this function.
	 * @param {Mixed} context Only remove the listeners that have this context.
	 * @param {Boolean} once Only remove one-time listeners.
	 * @returns {EventEmitter} `this`.
	 * @api public
	 */
	EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
	  var evt = prefix ? prefix + event : event;
	
	  if (!this._events[evt]) return this;
	  if (!fn) {
	    if (--this._eventsCount === 0) this._events = new Events();
	    else delete this._events[evt];
	    return this;
	  }
	
	  var listeners = this._events[evt];
	
	  if (listeners.fn) {
	    if (
	         listeners.fn === fn
	      && (!once || listeners.once)
	      && (!context || listeners.context === context)
	    ) {
	      if (--this._eventsCount === 0) this._events = new Events();
	      else delete this._events[evt];
	    }
	  } else {
	    for (var i = 0, events = [], length = listeners.length; i < length; i++) {
	      if (
	           listeners[i].fn !== fn
	        || (once && !listeners[i].once)
	        || (context && listeners[i].context !== context)
	      ) {
	        events.push(listeners[i]);
	      }
	    }
	
	    //
	    // Reset the array, or remove it completely if we have no more listeners.
	    //
	    if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
	    else if (--this._eventsCount === 0) this._events = new Events();
	    else delete this._events[evt];
	  }
	
	  return this;
	};
	
	/**
	 * Remove all listeners, or those of the specified event.
	 *
	 * @param {String|Symbol} [event] The event name.
	 * @returns {EventEmitter} `this`.
	 * @api public
	 */
	EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
	  var evt;
	
	  if (event) {
	    evt = prefix ? prefix + event : event;
	    if (this._events[evt]) {
	      if (--this._eventsCount === 0) this._events = new Events();
	      else delete this._events[evt];
	    }
	  } else {
	    this._events = new Events();
	    this._eventsCount = 0;
	  }
	
	  return this;
	};
	
	//
	// Alias methods names because people roll like that.
	//
	EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
	EventEmitter.prototype.addListener = EventEmitter.prototype.on;
	
	//
	// This function doesn't apply anymore.
	//
	EventEmitter.prototype.setMaxListeners = function setMaxListeners() {
	  return this;
	};
	
	//
	// Expose the prefix.
	//
	EventEmitter.prefixed = prefix;
	
	//
	// Allow `EventEmitter` to be imported as module namespace.
	//
	EventEmitter.EventEmitter = EventEmitter;
	
	//
	// Expose the module.
	//
	if (true) {
	  module.exports = EventEmitter;
	}


/***/ }),
/* 339 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * Mixins functionality to make an object have "plugins".
	 *
	 * @example
	 *      function MyObject() {}
	 *
	 *      pluginTarget.mixin(MyObject);
	 *
	 * @mixin
	 * @memberof PIXI.utils
	 * @param {object} obj - The object to mix into.
	 */
	function pluginTarget(obj) {
	    obj.__plugins = {};
	
	    /**
	     * Adds a plugin to an object
	     *
	     * @param {string} pluginName - The events that should be listed.
	     * @param {Function} ctor - The constructor function for the plugin.
	     */
	    obj.registerPlugin = function registerPlugin(pluginName, ctor) {
	        obj.__plugins[pluginName] = ctor;
	    };
	
	    /**
	     * Instantiates all the plugins of this object
	     *
	     */
	    obj.prototype.initPlugins = function initPlugins() {
	        this.plugins = this.plugins || {};
	
	        for (var o in obj.__plugins) {
	            this.plugins[o] = new obj.__plugins[o](this);
	        }
	    };
	
	    /**
	     * Removes all the plugins of this object
	     *
	     */
	    obj.prototype.destroyPlugins = function destroyPlugins() {
	        for (var o in this.plugins) {
	            this.plugins[o].destroy();
	            this.plugins[o] = null;
	        }
	
	        this.plugins = null;
	    };
	}
	
	exports.default = {
	    /**
	     * Mixes in the properties of the pluginTarget into another object
	     *
	     * @param {object} obj - The obj to mix into
	     */
	    mixin: function mixin(obj) {
	        pluginTarget(obj);
	    }
	};

/***/ }),
/* 340 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.mixin = mixin;
	exports.delayMixin = delayMixin;
	exports.performMixins = performMixins;
	/**
	 * Mixes all enumerable properties and methods from a source object to a target object.
	 *
	 * @memberof PIXI.utils.mixins
	 * @function mixin
	 * @param {object} target The prototype or instance that properties and methods should be added to.
	 * @param {object} source The source of properties and methods to mix in.
	 */
	function mixin(target, source) {
	    if (!target || !source) return;
	    // in ES8/ES2017, this would be really easy:
	    // Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
	
	    // get all the enumerable property keys
	    var keys = Object.keys(source);
	
	    // loop through properties
	    for (var i = 0; i < keys.length; ++i) {
	        var propertyName = keys[i];
	
	        // Set the property using the property descriptor - this works for accessors and normal value properties
	        Object.defineProperty(target, propertyName, Object.getOwnPropertyDescriptor(source, propertyName));
	    }
	}
	
	var mixins = [];
	
	/**
	 * Queues a mixin to be handled towards the end of the initialization of PIXI, so that deprecation
	 * can take effect.
	 *
	 * @memberof PIXI.utils.mixins
	 * @function delayMixin
	 * @private
	 * @param {object} target The prototype or instance that properties and methods should be added to.
	 * @param {object} source The source of properties and methods to mix in.
	 */
	function delayMixin(target, source) {
	    mixins.push(target, source);
	}
	
	/**
	 * Handles all mixins queued via delayMixin().
	 *
	 * @memberof PIXI.utils.mixins
	 * @function performMixins
	 * @private
	 */
	function performMixins() {
	    for (var i = 0; i < mixins.length; i += 2) {
	        mixin(mixins[i], mixins[i + 1]);
	    }
	    mixins.length = 0;
	}

/***/ }),
/* 341 */
/***/ (function(module, exports) {

	'use strict'
	
	/**
	 * Remove a range of items from an array
	 *
	 * @function removeItems
	 * @param {Array<*>} arr The target array
	 * @param {number} startIdx The index to begin removing from (inclusive)
	 * @param {number} removeCount How many items to remove
	 */
	module.exports = function removeItems(arr, startIdx, removeCount)
	{
	  var i, length = arr.length
	
	  if (startIdx >= length || removeCount === 0) {
	    return
	  }
	
	  removeCount = (startIdx + removeCount > length ? length - startIdx : removeCount)
	
	  var len = length - removeCount
	
	  for (i = startIdx; i < len; ++i) {
	    arr[i] = arr[i + removeCount]
	  }
	
	  arr.length = len
	}


/***/ }),
/* 342 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = mapPremultipliedBlendModes;
	
	var _const = __webpack_require__(333);
	
	/**
	 * Corrects PixiJS blend, takes premultiplied alpha into account
	 *
	 * @memberof PIXI
	 * @function mapPremultipliedBlendModes
	 * @private
	 * @param {Array<number[]>} [array] - The array to output into.
	 * @return {Array<number[]>} Mapped modes.
	 */
	
	function mapPremultipliedBlendModes() {
	    var pm = [];
	    var npm = [];
	
	    for (var i = 0; i < 32; i++) {
	        pm[i] = i;
	        npm[i] = i;
	    }
	
	    pm[_const.BLEND_MODES.NORMAL_NPM] = _const.BLEND_MODES.NORMAL;
	    pm[_const.BLEND_MODES.ADD_NPM] = _const.BLEND_MODES.ADD;
	    pm[_const.BLEND_MODES.SCREEN_NPM] = _const.BLEND_MODES.SCREEN;
	
	    npm[_const.BLEND_MODES.NORMAL] = _const.BLEND_MODES.NORMAL_NPM;
	    npm[_const.BLEND_MODES.ADD] = _const.BLEND_MODES.ADD_NPM;
	    npm[_const.BLEND_MODES.SCREEN] = _const.BLEND_MODES.SCREEN_NPM;
	
	    var array = [];
	
	    array.push(npm);
	    array.push(pm);
	
	    return array;
	}

/***/ }),
/* 343 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _eventemitter = __webpack_require__(338);
	
	var _eventemitter2 = _interopRequireDefault(_eventemitter);
	
	var _const = __webpack_require__(333);
	
	var _settings = __webpack_require__(334);
	
	var _settings2 = _interopRequireDefault(_settings);
	
	var _TransformStatic = __webpack_require__(344);
	
	var _TransformStatic2 = _interopRequireDefault(_TransformStatic);
	
	var _Transform = __webpack_require__(356);
	
	var _Transform2 = _interopRequireDefault(_Transform);
	
	var _Bounds = __webpack_require__(357);
	
	var _Bounds2 = _interopRequireDefault(_Bounds);
	
	var _math = __webpack_require__(345);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// _tempDisplayObjectParent = new DisplayObject();
	
	/**
	 * The base class for all objects that are rendered on the screen.
	 * This is an abstract class and should not be used on its own rather it should be extended.
	 *
	 * @class
	 * @extends EventEmitter
	 * @memberof PIXI
	 */
	var DisplayObject = function (_EventEmitter) {
	    _inherits(DisplayObject, _EventEmitter);
	
	    /**
	     *
	     */
	    function DisplayObject() {
	        _classCallCheck(this, DisplayObject);
	
	        var _this = _possibleConstructorReturn(this, (DisplayObject.__proto__ || Object.getPrototypeOf(DisplayObject)).call(this));
	
	        var TransformClass = _settings2.default.TRANSFORM_MODE === _const.TRANSFORM_MODE.STATIC ? _TransformStatic2.default : _Transform2.default;
	
	        _this.tempDisplayObjectParent = null;
	
	        // TODO: need to create Transform from factory
	        /**
	         * World transform and local transform of this object.
	         * This will become read-only later, please do not assign anything there unless you know what are you doing
	         *
	         * @member {PIXI.TransformBase}
	         */
	        _this.transform = new TransformClass();
	
	        /**
	         * The opacity of the object.
	         *
	         * @member {number}
	         */
	        _this.alpha = 1;
	
	        /**
	         * The visibility of the object. If false the object will not be drawn, and
	         * the updateTransform function will not be called.
	         *
	         * Only affects recursive calls from parent. You can ask for bounds or call updateTransform manually
	         *
	         * @member {boolean}
	         */
	        _this.visible = true;
	
	        /**
	         * Can this object be rendered, if false the object will not be drawn but the updateTransform
	         * methods will still be called.
	         *
	         * Only affects recursive calls from parent. You can ask for bounds manually
	         *
	         * @member {boolean}
	         */
	        _this.renderable = true;
	
	        /**
	         * The display object container that contains this display object.
	         *
	         * @member {PIXI.Container}
	         * @readonly
	         */
	        _this.parent = null;
	
	        /**
	         * The multiplied alpha of the displayObject
	         *
	         * @member {number}
	         * @readonly
	         */
	        _this.worldAlpha = 1;
	
	        /**
	         * The area the filter is applied to. This is used as more of an optimisation
	         * rather than figuring out the dimensions of the displayObject each frame you can set this rectangle
	         *
	         * Also works as an interaction mask
	         *
	         * @member {PIXI.Rectangle}
	         */
	        _this.filterArea = null;
	
	        _this._filters = null;
	        _this._enabledFilters = null;
	
	        /**
	         * The bounds object, this is used to calculate and store the bounds of the displayObject
	         *
	         * @member {PIXI.Rectangle}
	         * @private
	         */
	        _this._bounds = new _Bounds2.default();
	        _this._boundsID = 0;
	        _this._lastBoundsID = -1;
	        _this._boundsRect = null;
	        _this._localBoundsRect = null;
	
	        /**
	         * The original, cached mask of the object
	         *
	         * @member {PIXI.Graphics|PIXI.Sprite}
	         * @private
	         */
	        _this._mask = null;
	
	        /**
	         * If the object has been destroyed via destroy(). If true, it should not be used.
	         *
	         * @member {boolean}
	         * @private
	         * @readonly
	         */
	        _this._destroyed = false;
	
	        /**
	         * Fired when this DisplayObject is added to a Container.
	         *
	         * @event PIXI.DisplayObject#added
	         * @param {PIXI.Container} container - The container added to.
	         */
	
	        /**
	         * Fired when this DisplayObject is removed from a Container.
	         *
	         * @event PIXI.DisplayObject#removed
	         * @param {PIXI.Container} container - The container removed from.
	         */
	        return _this;
	    }
	
	    /**
	     * @private
	     * @member {PIXI.DisplayObject}
	     */
	
	
	    _createClass(DisplayObject, [{
	        key: 'updateTransform',
	
	
	        /**
	         * Updates the object transform for rendering
	         *
	         * TODO - Optimization pass!
	         */
	        value: function updateTransform() {
	            this.transform.updateTransform(this.parent.transform);
	            // multiply the alphas..
	            this.worldAlpha = this.alpha * this.parent.worldAlpha;
	
	            this._bounds.updateID++;
	        }
	
	        /**
	         * recursively updates transform of all objects from the root to this one
	         * internal function for toLocal()
	         */
	
	    }, {
	        key: '_recursivePostUpdateTransform',
	        value: function _recursivePostUpdateTransform() {
	            if (this.parent) {
	                this.parent._recursivePostUpdateTransform();
	                this.transform.updateTransform(this.parent.transform);
	            } else {
	                this.transform.updateTransform(this._tempDisplayObjectParent.transform);
	            }
	        }
	
	        /**
	         * Retrieves the bounds of the displayObject as a rectangle object.
	         *
	         * @param {boolean} skipUpdate - setting to true will stop the transforms of the scene graph from
	         *  being updated. This means the calculation returned MAY be out of date BUT will give you a
	         *  nice performance boost
	         * @param {PIXI.Rectangle} rect - Optional rectangle to store the result of the bounds calculation
	         * @return {PIXI.Rectangle} the rectangular bounding area
	         */
	
	    }, {
	        key: 'getBounds',
	        value: function getBounds(skipUpdate, rect) {
	            if (!skipUpdate) {
	                if (!this.parent) {
	                    this.parent = this._tempDisplayObjectParent;
	                    this.updateTransform();
	                    this.parent = null;
	                } else {
	                    this._recursivePostUpdateTransform();
	                    this.updateTransform();
	                }
	            }
	
	            if (this._boundsID !== this._lastBoundsID) {
	                this.calculateBounds();
	            }
	
	            if (!rect) {
	                if (!this._boundsRect) {
	                    this._boundsRect = new _math.Rectangle();
	                }
	
	                rect = this._boundsRect;
	            }
	
	            return this._bounds.getRectangle(rect);
	        }
	
	        /**
	         * Retrieves the local bounds of the displayObject as a rectangle object
	         *
	         * @param {PIXI.Rectangle} [rect] - Optional rectangle to store the result of the bounds calculation
	         * @return {PIXI.Rectangle} the rectangular bounding area
	         */
	
	    }, {
	        key: 'getLocalBounds',
	        value: function getLocalBounds(rect) {
	            var transformRef = this.transform;
	            var parentRef = this.parent;
	
	            this.parent = null;
	            this.transform = this._tempDisplayObjectParent.transform;
	
	            if (!rect) {
	                if (!this._localBoundsRect) {
	                    this._localBoundsRect = new _math.Rectangle();
	                }
	
	                rect = this._localBoundsRect;
	            }
	
	            var bounds = this.getBounds(false, rect);
	
	            this.parent = parentRef;
	            this.transform = transformRef;
	
	            return bounds;
	        }
	
	        /**
	         * Calculates the global position of the display object
	         *
	         * @param {PIXI.Point} position - The world origin to calculate from
	         * @param {PIXI.Point} [point] - A Point object in which to store the value, optional
	         *  (otherwise will create a new Point)
	         * @param {boolean} [skipUpdate=false] - Should we skip the update transform.
	         * @return {PIXI.Point} A point object representing the position of this object
	         */
	
	    }, {
	        key: 'toGlobal',
	        value: function toGlobal(position, point) {
	            var skipUpdate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
	
	            if (!skipUpdate) {
	                this._recursivePostUpdateTransform();
	
	                // this parent check is for just in case the item is a root object.
	                // If it is we need to give it a temporary parent so that displayObjectUpdateTransform works correctly
	                // this is mainly to avoid a parent check in the main loop. Every little helps for performance :)
	                if (!this.parent) {
	                    this.parent = this._tempDisplayObjectParent;
	                    this.displayObjectUpdateTransform();
	                    this.parent = null;
	                } else {
	                    this.displayObjectUpdateTransform();
	                }
	            }
	
	            // don't need to update the lot
	            return this.worldTransform.apply(position, point);
	        }
	
	        /**
	         * Calculates the local position of the display object relative to another point
	         *
	         * @param {PIXI.Point} position - The world origin to calculate from
	         * @param {PIXI.DisplayObject} [from] - The DisplayObject to calculate the global position from
	         * @param {PIXI.Point} [point] - A Point object in which to store the value, optional
	         *  (otherwise will create a new Point)
	         * @param {boolean} [skipUpdate=false] - Should we skip the update transform
	         * @return {PIXI.Point} A point object representing the position of this object
	         */
	
	    }, {
	        key: 'toLocal',
	        value: function toLocal(position, from, point, skipUpdate) {
	            if (from) {
	                position = from.toGlobal(position, point, skipUpdate);
	            }
	
	            if (!skipUpdate) {
	                this._recursivePostUpdateTransform();
	
	                // this parent check is for just in case the item is a root object.
	                // If it is we need to give it a temporary parent so that displayObjectUpdateTransform works correctly
	                // this is mainly to avoid a parent check in the main loop. Every little helps for performance :)
	                if (!this.parent) {
	                    this.parent = this._tempDisplayObjectParent;
	                    this.displayObjectUpdateTransform();
	                    this.parent = null;
	                } else {
	                    this.displayObjectUpdateTransform();
	                }
	            }
	
	            // simply apply the matrix..
	            return this.worldTransform.applyInverse(position, point);
	        }
	
	        /**
	         * Renders the object using the WebGL renderer
	         *
	         * @param {PIXI.WebGLRenderer} renderer - The renderer
	         */
	
	    }, {
	        key: 'renderWebGL',
	        value: function renderWebGL(renderer) // eslint-disable-line no-unused-vars
	        {}
	        // OVERWRITE;
	
	
	        /**
	         * Renders the object using the Canvas renderer
	         *
	         * @param {PIXI.CanvasRenderer} renderer - The renderer
	         */
	
	    }, {
	        key: 'renderCanvas',
	        value: function renderCanvas(renderer) // eslint-disable-line no-unused-vars
	        {}
	        // OVERWRITE;
	
	
	        /**
	         * Set the parent Container of this DisplayObject
	         *
	         * @param {PIXI.Container} container - The Container to add this DisplayObject to
	         * @return {PIXI.Container} The Container that this DisplayObject was added to
	         */
	
	    }, {
	        key: 'setParent',
	        value: function setParent(container) {
	            if (!container || !container.addChild) {
	                throw new Error('setParent: Argument must be a Container');
	            }
	
	            container.addChild(this);
	
	            return container;
	        }
	
	        /**
	         * Convenience function to set the position, scale, skew and pivot at once.
	         *
	         * @param {number} [x=0] - The X position
	         * @param {number} [y=0] - The Y position
	         * @param {number} [scaleX=1] - The X scale value
	         * @param {number} [scaleY=1] - The Y scale value
	         * @param {number} [rotation=0] - The rotation
	         * @param {number} [skewX=0] - The X skew value
	         * @param {number} [skewY=0] - The Y skew value
	         * @param {number} [pivotX=0] - The X pivot value
	         * @param {number} [pivotY=0] - The Y pivot value
	         * @return {PIXI.DisplayObject} The DisplayObject instance
	         */
	
	    }, {
	        key: 'setTransform',
	        value: function setTransform() {
	            var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	            var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	            var scaleX = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
	            var scaleY = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
	            var rotation = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
	            var skewX = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
	            var skewY = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
	            var pivotX = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 0;
	            var pivotY = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : 0;
	
	            this.position.x = x;
	            this.position.y = y;
	            this.scale.x = !scaleX ? 1 : scaleX;
	            this.scale.y = !scaleY ? 1 : scaleY;
	            this.rotation = rotation;
	            this.skew.x = skewX;
	            this.skew.y = skewY;
	            this.pivot.x = pivotX;
	            this.pivot.y = pivotY;
	
	            return this;
	        }
	
	        /**
	         * Base destroy method for generic display objects. This will automatically
	         * remove the display object from its parent Container as well as remove
	         * all current event listeners and internal references. Do not use a DisplayObject
	         * after calling `destroy`.
	         *
	         */
	
	    }, {
	        key: 'destroy',
	        value: function destroy() {
	            this.removeAllListeners();
	            if (this.parent) {
	                this.parent.removeChild(this);
	            }
	            this.transform = null;
	
	            this.parent = null;
	
	            this._bounds = null;
	            this._currentBounds = null;
	            this._mask = null;
	
	            this.filterArea = null;
	
	            this.interactive = false;
	            this.interactiveChildren = false;
	
	            this._destroyed = true;
	        }
	
	        /**
	         * The position of the displayObject on the x axis relative to the local coordinates of the parent.
	         * An alias to position.x
	         *
	         * @member {number}
	         */
	
	    }, {
	        key: '_tempDisplayObjectParent',
	        get: function get() {
	            if (this.tempDisplayObjectParent === null) {
	                this.tempDisplayObjectParent = new DisplayObject();
	            }
	
	            return this.tempDisplayObjectParent;
	        }
	    }, {
	        key: 'x',
	        get: function get() {
	            return this.position.x;
	        },
	        set: function set(value) // eslint-disable-line require-jsdoc
	        {
	            this.transform.position.x = value;
	        }
	
	        /**
	         * The position of the displayObject on the y axis relative to the local coordinates of the parent.
	         * An alias to position.y
	         *
	         * @member {number}
	         */
	
	    }, {
	        key: 'y',
	        get: function get() {
	            return this.position.y;
	        },
	        set: function set(value) // eslint-disable-line require-jsdoc
	        {
	            this.transform.position.y = value;
	        }
	
	        /**
	         * Current transform of the object based on world (parent) factors
	         *
	         * @member {PIXI.Matrix}
	         * @readonly
	         */
	
	    }, {
	        key: 'worldTransform',
	        get: function get() {
	            return this.transform.worldTransform;
	        }
	
	        /**
	         * Current transform of the object based on local factors: position, scale, other stuff
	         *
	         * @member {PIXI.Matrix}
	         * @readonly
	         */
	
	    }, {
	        key: 'localTransform',
	        get: function get() {
	            return this.transform.localTransform;
	        }
	
	        /**
	         * The coordinate of the object relative to the local coordinates of the parent.
	         * Assignment by value since pixi-v4.
	         *
	         * @member {PIXI.Point|PIXI.ObservablePoint}
	         */
	
	    }, {
	        key: 'position',
	        get: function get() {
	            return this.transform.position;
	        },
	        set: function set(value) // eslint-disable-line require-jsdoc
	        {
	            this.transform.position.copy(value);
	        }
	
	        /**
	         * The scale factor of the object.
	         * Assignment by value since pixi-v4.
	         *
	         * @member {PIXI.Point|PIXI.ObservablePoint}
	         */
	
	    }, {
	        key: 'scale',
	        get: function get() {
	            return this.transform.scale;
	        },
	        set: function set(value) // eslint-disable-line require-jsdoc
	        {
	            this.transform.scale.copy(value);
	        }
	
	        /**
	         * The pivot point of the displayObject that it rotates around
	         * Assignment by value since pixi-v4.
	         *
	         * @member {PIXI.Point|PIXI.ObservablePoint}
	         */
	
	    }, {
	        key: 'pivot',
	        get: function get() {
	            return this.transform.pivot;
	        },
	        set: function set(value) // eslint-disable-line require-jsdoc
	        {
	            this.transform.pivot.copy(value);
	        }
	
	        /**
	         * The skew factor for the object in radians.
	         * Assignment by value since pixi-v4.
	         *
	         * @member {PIXI.ObservablePoint}
	         */
	
	    }, {
	        key: 'skew',
	        get: function get() {
	            return this.transform.skew;
	        },
	        set: function set(value) // eslint-disable-line require-jsdoc
	        {
	            this.transform.skew.copy(value);
	        }
	
	        /**
	         * The rotation of the object in radians.
	         *
	         * @member {number}
	         */
	
	    }, {
	        key: 'rotation',
	        get: function get() {
	            return this.transform.rotation;
	        },
	        set: function set(value) // eslint-disable-line require-jsdoc
	        {
	            this.transform.rotation = value;
	        }
	
	        /**
	         * Indicates if the object is globally visible.
	         *
	         * @member {boolean}
	         * @readonly
	         */
	
	    }, {
	        key: 'worldVisible',
	        get: function get() {
	            var item = this;
	
	            do {
	                if (!item.visible) {
	                    return false;
	                }
	
	                item = item.parent;
	            } while (item);
	
	            return true;
	        }
	
	        /**
	         * Sets a mask for the displayObject. A mask is an object that limits the visibility of an
	         * object to the shape of the mask applied to it. In PIXI a regular mask must be a
	         * PIXI.Graphics or a PIXI.Sprite object. This allows for much faster masking in canvas as it
	         * utilises shape clipping. To remove a mask, set this property to null.
	         *
	         * @todo For the moment, PIXI.CanvasRenderer doesn't support PIXI.Sprite as mask.
	         *
	         * @member {PIXI.Graphics|PIXI.Sprite}
	         */
	
	    }, {
	        key: 'mask',
	        get: function get() {
	            return this._mask;
	        },
	        set: function set(value) // eslint-disable-line require-jsdoc
	        {
	            if (this._mask) {
	                this._mask.renderable = true;
	            }
	
	            this._mask = value;
	
	            if (this._mask) {
	                this._mask.renderable = false;
	            }
	        }
	
	        /**
	         * Sets the filters for the displayObject.
	         * * IMPORTANT: This is a webGL only feature and will be ignored by the canvas renderer.
	         * To remove filters simply set this property to 'null'
	         *
	         * @member {PIXI.Filter[]}
	         */
	
	    }, {
	        key: 'filters',
	        get: function get() {
	            return this._filters && this._filters.slice();
	        },
	        set: function set(value) // eslint-disable-line require-jsdoc
	        {
	            this._filters = value && value.slice();
	        }
	    }]);
	
	    return DisplayObject;
	}(_eventemitter2.default);
	
	// performance increase to avoid using call.. (10x faster)
	
	
	exports.default = DisplayObject;
	DisplayObject.prototype.displayObjectUpdateTransform = DisplayObject.prototype.updateTransform;

/***/ }),
/* 344 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _math = __webpack_require__(345);
	
	var _TransformBase2 = __webpack_require__(355);
	
	var _TransformBase3 = _interopRequireDefault(_TransformBase2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * Transform that takes care about its versions
	 *
	 * @class
	 * @extends PIXI.TransformBase
	 * @memberof PIXI
	 */
	var TransformStatic = function (_TransformBase) {
	    _inherits(TransformStatic, _TransformBase);
	
	    /**
	     *
	     */
	    function TransformStatic() {
	        _classCallCheck(this, TransformStatic);
	
	        /**
	        * The coordinate of the object relative to the local coordinates of the parent.
	        *
	        * @member {PIXI.ObservablePoint}
	        */
	        var _this = _possibleConstructorReturn(this, (TransformStatic.__proto__ || Object.getPrototypeOf(TransformStatic)).call(this));
	
	        _this.position = new _math.ObservablePoint(_this.onChange, _this, 0, 0);
	
	        /**
	         * The scale factor of the object.
	         *
	         * @member {PIXI.ObservablePoint}
	         */
	        _this.scale = new _math.ObservablePoint(_this.onChange, _this, 1, 1);
	
	        /**
	         * The pivot point of the displayObject that it rotates around
	         *
	         * @member {PIXI.ObservablePoint}
	         */
	        _this.pivot = new _math.ObservablePoint(_this.onChange, _this, 0, 0);
	
	        /**
	         * The skew amount, on the x and y axis.
	         *
	         * @member {PIXI.ObservablePoint}
	         */
	        _this.skew = new _math.ObservablePoint(_this.updateSkew, _this, 0, 0);
	
	        _this._rotation = 0;
	
	        _this._cx = 1; // cos rotation + skewY;
	        _this._sx = 0; // sin rotation + skewY;
	        _this._cy = 0; // cos rotation + Math.PI/2 - skewX;
	        _this._sy = 1; // sin rotation + Math.PI/2 - skewX;
	
	        _this._localID = 0;
	        _this._currentLocalID = 0;
	        return _this;
	    }
	
	    /**
	     * Called when a value changes.
	     *
	     * @private
	     */
	
	
	    _createClass(TransformStatic, [{
	        key: 'onChange',
	        value: function onChange() {
	            this._localID++;
	        }
	
	        /**
	         * Called when skew or rotation changes
	         *
	         * @private
	         */
	
	    }, {
	        key: 'updateSkew',
	        value: function updateSkew() {
	            this._cx = Math.cos(this._rotation + this.skew._y);
	            this._sx = Math.sin(this._rotation + this.skew._y);
	            this._cy = -Math.sin(this._rotation - this.skew._x); // cos, added PI/2
	            this._sy = Math.cos(this._rotation - this.skew._x); // sin, added PI/2
	
	            this._localID++;
	        }
	
	        /**
	         * Updates only local matrix
	         */
	
	    }, {
	        key: 'updateLocalTransform',
	        value: function updateLocalTransform() {
	            var lt = this.localTransform;
	
	            if (this._localID !== this._currentLocalID) {
	                // get the matrix values of the displayobject based on its transform properties..
	                lt.a = this._cx * this.scale._x;
	                lt.b = this._sx * this.scale._x;
	                lt.c = this._cy * this.scale._y;
	                lt.d = this._sy * this.scale._y;
	
	                lt.tx = this.position._x - (this.pivot._x * lt.a + this.pivot._y * lt.c);
	                lt.ty = this.position._y - (this.pivot._x * lt.b + this.pivot._y * lt.d);
	                this._currentLocalID = this._localID;
	
	                // force an update..
	                this._parentID = -1;
	            }
	        }
	
	        /**
	         * Updates the values of the object and applies the parent's transform.
	         *
	         * @param {PIXI.Transform} parentTransform - The transform of the parent of this object
	         */
	
	    }, {
	        key: 'updateTransform',
	        value: function updateTransform(parentTransform) {
	            var lt = this.localTransform;
	
	            if (this._localID !== this._currentLocalID) {
	                // get the matrix values of the displayobject based on its transform properties..
	                lt.a = this._cx * this.scale._x;
	                lt.b = this._sx * this.scale._x;
	                lt.c = this._cy * this.scale._y;
	                lt.d = this._sy * this.scale._y;
	
	                lt.tx = this.position._x - (this.pivot._x * lt.a + this.pivot._y * lt.c);
	                lt.ty = this.position._y - (this.pivot._x * lt.b + this.pivot._y * lt.d);
	                this._currentLocalID = this._localID;
	
	                // force an update..
	                this._parentID = -1;
	            }
	
	            if (this._parentID !== parentTransform._worldID) {
	                // concat the parent matrix with the objects transform.
	                var pt = parentTransform.worldTransform;
	                var wt = this.worldTransform;
	
	                wt.a = lt.a * pt.a + lt.b * pt.c;
	                wt.b = lt.a * pt.b + lt.b * pt.d;
	                wt.c = lt.c * pt.a + lt.d * pt.c;
	                wt.d = lt.c * pt.b + lt.d * pt.d;
	                wt.tx = lt.tx * pt.a + lt.ty * pt.c + pt.tx;
	                wt.ty = lt.tx * pt.b + lt.ty * pt.d + pt.ty;
	
	                this._parentID = parentTransform._worldID;
	
	                // update the id of the transform..
	                this._worldID++;
	            }
	        }
	
	        /**
	         * Decomposes a matrix and sets the transforms properties based on it.
	         *
	         * @param {PIXI.Matrix} matrix - The matrix to decompose
	         */
	
	    }, {
	        key: 'setFromMatrix',
	        value: function setFromMatrix(matrix) {
	            matrix.decompose(this);
	            this._localID++;
	        }
	
	        /**
	         * The rotation of the object in radians.
	         *
	         * @member {number}
	         */
	
	    }, {
	        key: 'rotation',
	        get: function get() {
	            return this._rotation;
	        },
	        set: function set(value) // eslint-disable-line require-jsdoc
	        {
	            this._rotation = value;
	            this.updateSkew();
	        }
	    }]);
	
	    return TransformStatic;
	}(_TransformBase3.default);
	
	exports.default = TransformStatic;

/***/ }),
/* 345 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Point = __webpack_require__(346);
	
	Object.defineProperty(exports, 'Point', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Point).default;
	  }
	});
	
	var _ObservablePoint = __webpack_require__(347);
	
	Object.defineProperty(exports, 'ObservablePoint', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_ObservablePoint).default;
	  }
	});
	
	var _Matrix = __webpack_require__(348);
	
	Object.defineProperty(exports, 'Matrix', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Matrix).default;
	  }
	});
	
	var _GroupD = __webpack_require__(349);
	
	Object.defineProperty(exports, 'GroupD8', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_GroupD).default;
	  }
	});
	
	var _Circle = __webpack_require__(350);
	
	Object.defineProperty(exports, 'Circle', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Circle).default;
	  }
	});
	
	var _Ellipse = __webpack_require__(352);
	
	Object.defineProperty(exports, 'Ellipse', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Ellipse).default;
	  }
	});
	
	var _Polygon = __webpack_require__(353);
	
	Object.defineProperty(exports, 'Polygon', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Polygon).default;
	  }
	});
	
	var _Rectangle = __webpack_require__(351);
	
	Object.defineProperty(exports, 'Rectangle', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Rectangle).default;
	  }
	});
	
	var _RoundedRectangle = __webpack_require__(354);
	
	Object.defineProperty(exports, 'RoundedRectangle', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_RoundedRectangle).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 346 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * The Point object represents a location in a two-dimensional coordinate system, where x represents
	 * the horizontal axis and y represents the vertical axis.
	 *
	 * @class
	 * @memberof PIXI
	 */
	var Point = function () {
	  /**
	   * @param {number} [x=0] - position of the point on the x axis
	   * @param {number} [y=0] - position of the point on the y axis
	   */
	  function Point() {
	    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	
	    _classCallCheck(this, Point);
	
	    /**
	     * @member {number}
	     * @default 0
	     */
	    this.x = x;
	
	    /**
	     * @member {number}
	     * @default 0
	     */
	    this.y = y;
	  }
	
	  /**
	   * Creates a clone of this point
	   *
	   * @return {PIXI.Point} a copy of the point
	   */
	
	
	  _createClass(Point, [{
	    key: "clone",
	    value: function clone() {
	      return new Point(this.x, this.y);
	    }
	
	    /**
	     * Copies x and y from the given point
	     *
	     * @param {PIXI.Point} p - The point to copy.
	     */
	
	  }, {
	    key: "copy",
	    value: function copy(p) {
	      this.set(p.x, p.y);
	    }
	
	    /**
	     * Returns true if the given point is equal to this point
	     *
	     * @param {PIXI.Point} p - The point to check
	     * @returns {boolean} Whether the given point equal to this point
	     */
	
	  }, {
	    key: "equals",
	    value: function equals(p) {
	      return p.x === this.x && p.y === this.y;
	    }
	
	    /**
	     * Sets the point to a new x and y position.
	     * If y is omitted, both x and y will be set to x.
	     *
	     * @param {number} [x=0] - position of the point on the x axis
	     * @param {number} [y=0] - position of the point on the y axis
	     */
	
	  }, {
	    key: "set",
	    value: function set(x, y) {
	      this.x = x || 0;
	      this.y = y || (y !== 0 ? this.x : 0);
	    }
	  }]);
	
	  return Point;
	}();
	
	exports.default = Point;

/***/ }),
/* 347 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * The Point object represents a location in a two-dimensional coordinate system, where x represents
	 * the horizontal axis and y represents the vertical axis.
	 * An observable point is a point that triggers a callback when the point's position is changed.
	 *
	 * @class
	 * @memberof PIXI
	 */
	var ObservablePoint = function () {
	    /**
	     * @param {Function} cb - callback when changed
	     * @param {object} scope - owner of callback
	     * @param {number} [x=0] - position of the point on the x axis
	     * @param {number} [y=0] - position of the point on the y axis
	     */
	    function ObservablePoint(cb, scope) {
	        var x = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
	        var y = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
	
	        _classCallCheck(this, ObservablePoint);
	
	        this._x = x;
	        this._y = y;
	
	        this.cb = cb;
	        this.scope = scope;
	    }
	
	    /**
	     * Sets the point to a new x and y position.
	     * If y is omitted, both x and y will be set to x.
	     *
	     * @param {number} [x=0] - position of the point on the x axis
	     * @param {number} [y=0] - position of the point on the y axis
	     */
	
	
	    _createClass(ObservablePoint, [{
	        key: "set",
	        value: function set(x, y) {
	            var _x = x || 0;
	            var _y = y || (y !== 0 ? _x : 0);
	
	            if (this._x !== _x || this._y !== _y) {
	                this._x = _x;
	                this._y = _y;
	                this.cb.call(this.scope);
	            }
	        }
	
	        /**
	         * Copies the data from another point
	         *
	         * @param {PIXI.Point|PIXI.ObservablePoint} point - point to copy from
	         */
	
	    }, {
	        key: "copy",
	        value: function copy(point) {
	            if (this._x !== point.x || this._y !== point.y) {
	                this._x = point.x;
	                this._y = point.y;
	                this.cb.call(this.scope);
	            }
	        }
	
	        /**
	         * The position of the displayObject on the x axis relative to the local coordinates of the parent.
	         *
	         * @member {number}
	         */
	
	    }, {
	        key: "x",
	        get: function get() {
	            return this._x;
	        },
	        set: function set(value) // eslint-disable-line require-jsdoc
	        {
	            if (this._x !== value) {
	                this._x = value;
	                this.cb.call(this.scope);
	            }
	        }
	
	        /**
	         * The position of the displayObject on the x axis relative to the local coordinates of the parent.
	         *
	         * @member {number}
	         */
	
	    }, {
	        key: "y",
	        get: function get() {
	            return this._y;
	        },
	        set: function set(value) // eslint-disable-line require-jsdoc
	        {
	            if (this._y !== value) {
	                this._y = value;
	                this.cb.call(this.scope);
	            }
	        }
	    }]);
	
	    return ObservablePoint;
	}();
	
	exports.default = ObservablePoint;

/***/ }),
/* 348 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Point = __webpack_require__(346);
	
	var _Point2 = _interopRequireDefault(_Point);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * The PixiJS Matrix class as an object, which makes it a lot faster,
	 * here is a representation of it :
	 * | a | b | tx|
	 * | c | d | ty|
	 * | 0 | 0 | 1 |
	 *
	 * @class
	 * @memberof PIXI
	 */
	var Matrix = function () {
	    /**
	     * @param {number} [a=1] - x scale
	     * @param {number} [b=0] - y skew
	     * @param {number} [c=0] - x skew
	     * @param {number} [d=1] - y scale
	     * @param {number} [tx=0] - x translation
	     * @param {number} [ty=0] - y translation
	     */
	    function Matrix() {
	        var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
	        var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	        var c = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
	        var d = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
	        var tx = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
	        var ty = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
	
	        _classCallCheck(this, Matrix);
	
	        /**
	         * @member {number}
	         * @default 1
	         */
	        this.a = a;
	
	        /**
	         * @member {number}
	         * @default 0
	         */
	        this.b = b;
	
	        /**
	         * @member {number}
	         * @default 0
	         */
	        this.c = c;
	
	        /**
	         * @member {number}
	         * @default 1
	         */
	        this.d = d;
	
	        /**
	         * @member {number}
	         * @default 0
	         */
	        this.tx = tx;
	
	        /**
	         * @member {number}
	         * @default 0
	         */
	        this.ty = ty;
	
	        this.array = null;
	    }
	
	    /**
	     * Creates a Matrix object based on the given array. The Element to Matrix mapping order is as follows:
	     *
	     * a = array[0]
	     * b = array[1]
	     * c = array[3]
	     * d = array[4]
	     * tx = array[2]
	     * ty = array[5]
	     *
	     * @param {number[]} array - The array that the matrix will be populated from.
	     */
	
	
	    _createClass(Matrix, [{
	        key: 'fromArray',
	        value: function fromArray(array) {
	            this.a = array[0];
	            this.b = array[1];
	            this.c = array[3];
	            this.d = array[4];
	            this.tx = array[2];
	            this.ty = array[5];
	        }
	
	        /**
	         * sets the matrix properties
	         *
	         * @param {number} a - Matrix component
	         * @param {number} b - Matrix component
	         * @param {number} c - Matrix component
	         * @param {number} d - Matrix component
	         * @param {number} tx - Matrix component
	         * @param {number} ty - Matrix component
	         *
	         * @return {PIXI.Matrix} This matrix. Good for chaining method calls.
	         */
	
	    }, {
	        key: 'set',
	        value: function set(a, b, c, d, tx, ty) {
	            this.a = a;
	            this.b = b;
	            this.c = c;
	            this.d = d;
	            this.tx = tx;
	            this.ty = ty;
	
	            return this;
	        }
	
	        /**
	         * Creates an array from the current Matrix object.
	         *
	         * @param {boolean} transpose - Whether we need to transpose the matrix or not
	         * @param {Float32Array} [out=new Float32Array(9)] - If provided the array will be assigned to out
	         * @return {number[]} the newly created array which contains the matrix
	         */
	
	    }, {
	        key: 'toArray',
	        value: function toArray(transpose, out) {
	            if (!this.array) {
	                this.array = new Float32Array(9);
	            }
	
	            var array = out || this.array;
	
	            if (transpose) {
	                array[0] = this.a;
	                array[1] = this.b;
	                array[2] = 0;
	                array[3] = this.c;
	                array[4] = this.d;
	                array[5] = 0;
	                array[6] = this.tx;
	                array[7] = this.ty;
	                array[8] = 1;
	            } else {
	                array[0] = this.a;
	                array[1] = this.c;
	                array[2] = this.tx;
	                array[3] = this.b;
	                array[4] = this.d;
	                array[5] = this.ty;
	                array[6] = 0;
	                array[7] = 0;
	                array[8] = 1;
	            }
	
	            return array;
	        }
	
	        /**
	         * Get a new position with the current transformation applied.
	         * Can be used to go from a child's coordinate space to the world coordinate space. (e.g. rendering)
	         *
	         * @param {PIXI.Point} pos - The origin
	         * @param {PIXI.Point} [newPos] - The point that the new position is assigned to (allowed to be same as input)
	         * @return {PIXI.Point} The new point, transformed through this matrix
	         */
	
	    }, {
	        key: 'apply',
	        value: function apply(pos, newPos) {
	            newPos = newPos || new _Point2.default();
	
	            var x = pos.x;
	            var y = pos.y;
	
	            newPos.x = this.a * x + this.c * y + this.tx;
	            newPos.y = this.b * x + this.d * y + this.ty;
	
	            return newPos;
	        }
	
	        /**
	         * Get a new position with the inverse of the current transformation applied.
	         * Can be used to go from the world coordinate space to a child's coordinate space. (e.g. input)
	         *
	         * @param {PIXI.Point} pos - The origin
	         * @param {PIXI.Point} [newPos] - The point that the new position is assigned to (allowed to be same as input)
	         * @return {PIXI.Point} The new point, inverse-transformed through this matrix
	         */
	
	    }, {
	        key: 'applyInverse',
	        value: function applyInverse(pos, newPos) {
	            newPos = newPos || new _Point2.default();
	
	            var id = 1 / (this.a * this.d + this.c * -this.b);
	
	            var x = pos.x;
	            var y = pos.y;
	
	            newPos.x = this.d * id * x + -this.c * id * y + (this.ty * this.c - this.tx * this.d) * id;
	            newPos.y = this.a * id * y + -this.b * id * x + (-this.ty * this.a + this.tx * this.b) * id;
	
	            return newPos;
	        }
	
	        /**
	         * Translates the matrix on the x and y.
	         *
	         * @param {number} x How much to translate x by
	         * @param {number} y How much to translate y by
	         * @return {PIXI.Matrix} This matrix. Good for chaining method calls.
	         */
	
	    }, {
	        key: 'translate',
	        value: function translate(x, y) {
	            this.tx += x;
	            this.ty += y;
	
	            return this;
	        }
	
	        /**
	         * Applies a scale transformation to the matrix.
	         *
	         * @param {number} x The amount to scale horizontally
	         * @param {number} y The amount to scale vertically
	         * @return {PIXI.Matrix} This matrix. Good for chaining method calls.
	         */
	
	    }, {
	        key: 'scale',
	        value: function scale(x, y) {
	            this.a *= x;
	            this.d *= y;
	            this.c *= x;
	            this.b *= y;
	            this.tx *= x;
	            this.ty *= y;
	
	            return this;
	        }
	
	        /**
	         * Applies a rotation transformation to the matrix.
	         *
	         * @param {number} angle - The angle in radians.
	         * @return {PIXI.Matrix} This matrix. Good for chaining method calls.
	         */
	
	    }, {
	        key: 'rotate',
	        value: function rotate(angle) {
	            var cos = Math.cos(angle);
	            var sin = Math.sin(angle);
	
	            var a1 = this.a;
	            var c1 = this.c;
	            var tx1 = this.tx;
	
	            this.a = a1 * cos - this.b * sin;
	            this.b = a1 * sin + this.b * cos;
	            this.c = c1 * cos - this.d * sin;
	            this.d = c1 * sin + this.d * cos;
	            this.tx = tx1 * cos - this.ty * sin;
	            this.ty = tx1 * sin + this.ty * cos;
	
	            return this;
	        }
	
	        /**
	         * Appends the given Matrix to this Matrix.
	         *
	         * @param {PIXI.Matrix} matrix - The matrix to append.
	         * @return {PIXI.Matrix} This matrix. Good for chaining method calls.
	         */
	
	    }, {
	        key: 'append',
	        value: function append(matrix) {
	            var a1 = this.a;
	            var b1 = this.b;
	            var c1 = this.c;
	            var d1 = this.d;
	
	            this.a = matrix.a * a1 + matrix.b * c1;
	            this.b = matrix.a * b1 + matrix.b * d1;
	            this.c = matrix.c * a1 + matrix.d * c1;
	            this.d = matrix.c * b1 + matrix.d * d1;
	
	            this.tx = matrix.tx * a1 + matrix.ty * c1 + this.tx;
	            this.ty = matrix.tx * b1 + matrix.ty * d1 + this.ty;
	
	            return this;
	        }
	
	        /**
	         * Sets the matrix based on all the available properties
	         *
	         * @param {number} x - Position on the x axis
	         * @param {number} y - Position on the y axis
	         * @param {number} pivotX - Pivot on the x axis
	         * @param {number} pivotY - Pivot on the y axis
	         * @param {number} scaleX - Scale on the x axis
	         * @param {number} scaleY - Scale on the y axis
	         * @param {number} rotation - Rotation in radians
	         * @param {number} skewX - Skew on the x axis
	         * @param {number} skewY - Skew on the y axis
	         * @return {PIXI.Matrix} This matrix. Good for chaining method calls.
	         */
	
	    }, {
	        key: 'setTransform',
	        value: function setTransform(x, y, pivotX, pivotY, scaleX, scaleY, rotation, skewX, skewY) {
	            var sr = Math.sin(rotation);
	            var cr = Math.cos(rotation);
	            var cy = Math.cos(skewY);
	            var sy = Math.sin(skewY);
	            var nsx = -Math.sin(skewX);
	            var cx = Math.cos(skewX);
	
	            var a = cr * scaleX;
	            var b = sr * scaleX;
	            var c = -sr * scaleY;
	            var d = cr * scaleY;
	
	            this.a = cy * a + sy * c;
	            this.b = cy * b + sy * d;
	            this.c = nsx * a + cx * c;
	            this.d = nsx * b + cx * d;
	
	            this.tx = x + (pivotX * a + pivotY * c);
	            this.ty = y + (pivotX * b + pivotY * d);
	
	            return this;
	        }
	
	        /**
	         * Prepends the given Matrix to this Matrix.
	         *
	         * @param {PIXI.Matrix} matrix - The matrix to prepend
	         * @return {PIXI.Matrix} This matrix. Good for chaining method calls.
	         */
	
	    }, {
	        key: 'prepend',
	        value: function prepend(matrix) {
	            var tx1 = this.tx;
	
	            if (matrix.a !== 1 || matrix.b !== 0 || matrix.c !== 0 || matrix.d !== 1) {
	                var a1 = this.a;
	                var c1 = this.c;
	
	                this.a = a1 * matrix.a + this.b * matrix.c;
	                this.b = a1 * matrix.b + this.b * matrix.d;
	                this.c = c1 * matrix.a + this.d * matrix.c;
	                this.d = c1 * matrix.b + this.d * matrix.d;
	            }
	
	            this.tx = tx1 * matrix.a + this.ty * matrix.c + matrix.tx;
	            this.ty = tx1 * matrix.b + this.ty * matrix.d + matrix.ty;
	
	            return this;
	        }
	
	        /**
	         * Decomposes the matrix (x, y, scaleX, scaleY, and rotation) and sets the properties on to a transform.
	         *
	         * @param {PIXI.Transform|PIXI.TransformStatic} transform - The transform to apply the properties to.
	         * @return {PIXI.Transform|PIXI.TransformStatic} The transform with the newly applied properties
	         */
	
	    }, {
	        key: 'decompose',
	        value: function decompose(transform) {
	            // sort out rotation / skew..
	            var a = this.a;
	            var b = this.b;
	            var c = this.c;
	            var d = this.d;
	
	            var skewX = -Math.atan2(-c, d);
	            var skewY = Math.atan2(b, a);
	
	            var delta = Math.abs(skewX + skewY);
	
	            if (delta < 0.00001) {
	                transform.rotation = skewY;
	
	                if (a < 0 && d >= 0) {
	                    transform.rotation += transform.rotation <= 0 ? Math.PI : -Math.PI;
	                }
	
	                transform.skew.x = transform.skew.y = 0;
	            } else {
	                transform.skew.x = skewX;
	                transform.skew.y = skewY;
	            }
	
	            // next set scale
	            transform.scale.x = Math.sqrt(a * a + b * b);
	            transform.scale.y = Math.sqrt(c * c + d * d);
	
	            // next set position
	            transform.position.x = this.tx;
	            transform.position.y = this.ty;
	
	            return transform;
	        }
	
	        /**
	         * Inverts this matrix
	         *
	         * @return {PIXI.Matrix} This matrix. Good for chaining method calls.
	         */
	
	    }, {
	        key: 'invert',
	        value: function invert() {
	            var a1 = this.a;
	            var b1 = this.b;
	            var c1 = this.c;
	            var d1 = this.d;
	            var tx1 = this.tx;
	            var n = a1 * d1 - b1 * c1;
	
	            this.a = d1 / n;
	            this.b = -b1 / n;
	            this.c = -c1 / n;
	            this.d = a1 / n;
	            this.tx = (c1 * this.ty - d1 * tx1) / n;
	            this.ty = -(a1 * this.ty - b1 * tx1) / n;
	
	            return this;
	        }
	
	        /**
	         * Resets this Matix to an identity (default) matrix.
	         *
	         * @return {PIXI.Matrix} This matrix. Good for chaining method calls.
	         */
	
	    }, {
	        key: 'identity',
	        value: function identity() {
	            this.a = 1;
	            this.b = 0;
	            this.c = 0;
	            this.d = 1;
	            this.tx = 0;
	            this.ty = 0;
	
	            return this;
	        }
	
	        /**
	         * Creates a new Matrix object with the same values as this one.
	         *
	         * @return {PIXI.Matrix} A copy of this matrix. Good for chaining method calls.
	         */
	
	    }, {
	        key: 'clone',
	        value: function clone() {
	            var matrix = new Matrix();
	
	            matrix.a = this.a;
	            matrix.b = this.b;
	            matrix.c = this.c;
	            matrix.d = this.d;
	            matrix.tx = this.tx;
	            matrix.ty = this.ty;
	
	            return matrix;
	        }
	
	        /**
	         * Changes the values of the given matrix to be the same as the ones in this matrix
	         *
	         * @param {PIXI.Matrix} matrix - The matrix to copy from.
	         * @return {PIXI.Matrix} The matrix given in parameter with its values updated.
	         */
	
	    }, {
	        key: 'copy',
	        value: function copy(matrix) {
	            matrix.a = this.a;
	            matrix.b = this.b;
	            matrix.c = this.c;
	            matrix.d = this.d;
	            matrix.tx = this.tx;
	            matrix.ty = this.ty;
	
	            return matrix;
	        }
	
	        /**
	         * A default (identity) matrix
	         *
	         * @static
	         * @const
	         */
	
	    }], [{
	        key: 'IDENTITY',
	        get: function get() {
	            return new Matrix();
	        }
	
	        /**
	         * A temp matrix
	         *
	         * @static
	         * @const
	         */
	
	    }, {
	        key: 'TEMP_MATRIX',
	        get: function get() {
	            return new Matrix();
	        }
	    }]);
	
	    return Matrix;
	}();
	
	exports.default = Matrix;

/***/ }),
/* 349 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _Matrix = __webpack_require__(348);
	
	var _Matrix2 = _interopRequireDefault(_Matrix);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ux = [1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1, 0, 1]; // Your friendly neighbour https://en.wikipedia.org/wiki/Dihedral_group of order 16
	
	var uy = [0, 1, 1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1];
	var vx = [0, -1, -1, -1, 0, 1, 1, 1, 0, 1, 1, 1, 0, -1, -1, -1];
	var vy = [1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, 1, 1, 1, 0, -1];
	var tempMatrices = [];
	
	var mul = [];
	
	function signum(x) {
	    if (x < 0) {
	        return -1;
	    }
	    if (x > 0) {
	        return 1;
	    }
	
	    return 0;
	}
	
	function init() {
	    for (var i = 0; i < 16; i++) {
	        var row = [];
	
	        mul.push(row);
	
	        for (var j = 0; j < 16; j++) {
	            var _ux = signum(ux[i] * ux[j] + vx[i] * uy[j]);
	            var _uy = signum(uy[i] * ux[j] + vy[i] * uy[j]);
	            var _vx = signum(ux[i] * vx[j] + vx[i] * vy[j]);
	            var _vy = signum(uy[i] * vx[j] + vy[i] * vy[j]);
	
	            for (var k = 0; k < 16; k++) {
	                if (ux[k] === _ux && uy[k] === _uy && vx[k] === _vx && vy[k] === _vy) {
	                    row.push(k);
	                    break;
	                }
	            }
	        }
	    }
	
	    for (var _i = 0; _i < 16; _i++) {
	        var mat = new _Matrix2.default();
	
	        mat.set(ux[_i], uy[_i], vx[_i], vy[_i], 0, 0);
	        tempMatrices.push(mat);
	    }
	}
	
	init();
	
	/**
	 * Implements Dihedral Group D_8, see [group D4]{@link http://mathworld.wolfram.com/DihedralGroupD4.html},
	 * D8 is the same but with diagonals. Used for texture rotations.
	 *
	 * Vector xX(i), xY(i) is U-axis of sprite with rotation i
	 * Vector yY(i), yY(i) is V-axis of sprite with rotation i
	 * Rotations: 0 grad (0), 90 grad (2), 180 grad (4), 270 grad (6)
	 * Mirrors: vertical (8), main diagonal (10), horizontal (12), reverse diagonal (14)
	 * This is the small part of gameofbombs.com portal system. It works.
	 *
	 * @author Ivan @ivanpopelyshev
	 * @class
	 * @memberof PIXI
	 */
	var GroupD8 = {
	    E: 0,
	    SE: 1,
	    S: 2,
	    SW: 3,
	    W: 4,
	    NW: 5,
	    N: 6,
	    NE: 7,
	    MIRROR_VERTICAL: 8,
	    MIRROR_HORIZONTAL: 12,
	    uX: function uX(ind) {
	        return ux[ind];
	    },
	    uY: function uY(ind) {
	        return uy[ind];
	    },
	    vX: function vX(ind) {
	        return vx[ind];
	    },
	    vY: function vY(ind) {
	        return vy[ind];
	    },
	    inv: function inv(rotation) {
	        if (rotation & 8) {
	            return rotation & 15;
	        }
	
	        return -rotation & 7;
	    },
	    add: function add(rotationSecond, rotationFirst) {
	        return mul[rotationSecond][rotationFirst];
	    },
	    sub: function sub(rotationSecond, rotationFirst) {
	        return mul[rotationSecond][GroupD8.inv(rotationFirst)];
	    },
	
	    /**
	     * Adds 180 degrees to rotation. Commutative operation.
	     *
	     * @memberof PIXI.GroupD8
	     * @param {number} rotation - The number to rotate.
	     * @returns {number} rotated number
	     */
	    rotate180: function rotate180(rotation) {
	        return rotation ^ 4;
	    },
	
	    /**
	     * Direction of main vector can be horizontal, vertical or diagonal.
	     * Some objects work with vertical directions different.
	     *
	     * @memberof PIXI.GroupD8
	     * @param {number} rotation - The number to check.
	     * @returns {boolean} Whether or not the direction is vertical
	     */
	    isVertical: function isVertical(rotation) {
	        return (rotation & 3) === 2;
	    },
	
	    /**
	     * @memberof PIXI.GroupD8
	     * @param {number} dx - TODO
	     * @param {number} dy - TODO
	     *
	     * @return {number} TODO
	     */
	    byDirection: function byDirection(dx, dy) {
	        if (Math.abs(dx) * 2 <= Math.abs(dy)) {
	            if (dy >= 0) {
	                return GroupD8.S;
	            }
	
	            return GroupD8.N;
	        } else if (Math.abs(dy) * 2 <= Math.abs(dx)) {
	            if (dx > 0) {
	                return GroupD8.E;
	            }
	
	            return GroupD8.W;
	        } else if (dy > 0) {
	            if (dx > 0) {
	                return GroupD8.SE;
	            }
	
	            return GroupD8.SW;
	        } else if (dx > 0) {
	            return GroupD8.NE;
	        }
	
	        return GroupD8.NW;
	    },
	
	    /**
	     * Helps sprite to compensate texture packer rotation.
	     *
	     * @memberof PIXI.GroupD8
	     * @param {PIXI.Matrix} matrix - sprite world matrix
	     * @param {number} rotation - The rotation factor to use.
	     * @param {number} tx - sprite anchoring
	     * @param {number} ty - sprite anchoring
	     */
	    matrixAppendRotationInv: function matrixAppendRotationInv(matrix, rotation) {
	        var tx = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
	        var ty = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
	
	        // Packer used "rotation", we use "inv(rotation)"
	        var mat = tempMatrices[GroupD8.inv(rotation)];
	
	        mat.tx = tx;
	        mat.ty = ty;
	        matrix.append(mat);
	    }
	};
	
	exports.default = GroupD8;

/***/ }),
/* 350 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Rectangle = __webpack_require__(351);
	
	var _Rectangle2 = _interopRequireDefault(_Rectangle);
	
	var _const = __webpack_require__(333);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * The Circle object can be used to specify a hit area for displayObjects
	 *
	 * @class
	 * @memberof PIXI
	 */
	var Circle = function () {
	  /**
	   * @param {number} [x=0] - The X coordinate of the center of this circle
	   * @param {number} [y=0] - The Y coordinate of the center of this circle
	   * @param {number} [radius=0] - The radius of the circle
	   */
	  function Circle() {
	    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	    var radius = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
	
	    _classCallCheck(this, Circle);
	
	    /**
	     * @member {number}
	     * @default 0
	     */
	    this.x = x;
	
	    /**
	     * @member {number}
	     * @default 0
	     */
	    this.y = y;
	
	    /**
	     * @member {number}
	     * @default 0
	     */
	    this.radius = radius;
	
	    /**
	     * The type of the object, mainly used to avoid `instanceof` checks
	     *
	     * @member {number}
	     * @readOnly
	     * @default PIXI.SHAPES.CIRC
	     * @see PIXI.SHAPES
	     */
	    this.type = _const.SHAPES.CIRC;
	  }
	
	  /**
	   * Creates a clone of this Circle instance
	   *
	   * @return {PIXI.Circle} a copy of the Circle
	   */
	
	
	  _createClass(Circle, [{
	    key: 'clone',
	    value: function clone() {
	      return new Circle(this.x, this.y, this.radius);
	    }
	
	    /**
	     * Checks whether the x and y coordinates given are contained within this circle
	     *
	     * @param {number} x - The X coordinate of the point to test
	     * @param {number} y - The Y coordinate of the point to test
	     * @return {boolean} Whether the x/y coordinates are within this Circle
	     */
	
	  }, {
	    key: 'contains',
	    value: function contains(x, y) {
	      if (this.radius <= 0) {
	        return false;
	      }
	
	      var r2 = this.radius * this.radius;
	      var dx = this.x - x;
	      var dy = this.y - y;
	
	      dx *= dx;
	      dy *= dy;
	
	      return dx + dy <= r2;
	    }
	
	    /**
	    * Returns the framing rectangle of the circle as a Rectangle object
	    *
	    * @return {PIXI.Rectangle} the framing rectangle
	    */
	
	  }, {
	    key: 'getBounds',
	    value: function getBounds() {
	      return new _Rectangle2.default(this.x - this.radius, this.y - this.radius, this.radius * 2, this.radius * 2);
	    }
	  }]);
	
	  return Circle;
	}();
	
	exports.default = Circle;

/***/ }),
/* 351 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _const = __webpack_require__(333);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Rectangle object is an area defined by its position, as indicated by its top-left corner
	 * point (x, y) and by its width and its height.
	 *
	 * @class
	 * @memberof PIXI
	 */
	var Rectangle = function () {
	    /**
	     * @param {number} [x=0] - The X coordinate of the upper-left corner of the rectangle
	     * @param {number} [y=0] - The Y coordinate of the upper-left corner of the rectangle
	     * @param {number} [width=0] - The overall width of this rectangle
	     * @param {number} [height=0] - The overall height of this rectangle
	     */
	    function Rectangle() {
	        var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	        var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	        var width = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
	        var height = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
	
	        _classCallCheck(this, Rectangle);
	
	        /**
	         * @member {number}
	         * @default 0
	         */
	        this.x = Number(x);
	
	        /**
	         * @member {number}
	         * @default 0
	         */
	        this.y = Number(y);
	
	        /**
	         * @member {number}
	         * @default 0
	         */
	        this.width = Number(width);
	
	        /**
	         * @member {number}
	         * @default 0
	         */
	        this.height = Number(height);
	
	        /**
	         * The type of the object, mainly used to avoid `instanceof` checks
	         *
	         * @member {number}
	         * @readOnly
	         * @default PIXI.SHAPES.RECT
	         * @see PIXI.SHAPES
	         */
	        this.type = _const.SHAPES.RECT;
	    }
	
	    /**
	     * returns the left edge of the rectangle
	     *
	     * @member {number}
	     */
	
	
	    _createClass(Rectangle, [{
	        key: 'clone',
	
	
	        /**
	         * Creates a clone of this Rectangle
	         *
	         * @return {PIXI.Rectangle} a copy of the rectangle
	         */
	        value: function clone() {
	            return new Rectangle(this.x, this.y, this.width, this.height);
	        }
	
	        /**
	         * Copies another rectangle to this one.
	         *
	         * @param {PIXI.Rectangle} rectangle - The rectangle to copy.
	         * @return {PIXI.Rectangle} Returns itself.
	         */
	
	    }, {
	        key: 'copy',
	        value: function copy(rectangle) {
	            this.x = rectangle.x;
	            this.y = rectangle.y;
	            this.width = rectangle.width;
	            this.height = rectangle.height;
	
	            return this;
	        }
	
	        /**
	         * Checks whether the x and y coordinates given are contained within this Rectangle
	         *
	         * @param {number} x - The X coordinate of the point to test
	         * @param {number} y - The Y coordinate of the point to test
	         * @return {boolean} Whether the x/y coordinates are within this Rectangle
	         */
	
	    }, {
	        key: 'contains',
	        value: function contains(x, y) {
	            if (this.width <= 0 || this.height <= 0) {
	                return false;
	            }
	
	            if (x >= this.x && x < this.x + this.width) {
	                if (y >= this.y && y < this.y + this.height) {
	                    return true;
	                }
	            }
	
	            return false;
	        }
	
	        /**
	         * Pads the rectangle making it grow in all directions.
	         *
	         * @param {number} paddingX - The horizontal padding amount.
	         * @param {number} paddingY - The vertical padding amount.
	         */
	
	    }, {
	        key: 'pad',
	        value: function pad(paddingX, paddingY) {
	            paddingX = paddingX || 0;
	            paddingY = paddingY || (paddingY !== 0 ? paddingX : 0);
	
	            this.x -= paddingX;
	            this.y -= paddingY;
	
	            this.width += paddingX * 2;
	            this.height += paddingY * 2;
	        }
	
	        /**
	         * Fits this rectangle around the passed one.
	         *
	         * @param {PIXI.Rectangle} rectangle - The rectangle to fit.
	         */
	
	    }, {
	        key: 'fit',
	        value: function fit(rectangle) {
	            if (this.x < rectangle.x) {
	                this.width += this.x;
	                if (this.width < 0) {
	                    this.width = 0;
	                }
	
	                this.x = rectangle.x;
	            }
	
	            if (this.y < rectangle.y) {
	                this.height += this.y;
	                if (this.height < 0) {
	                    this.height = 0;
	                }
	                this.y = rectangle.y;
	            }
	
	            if (this.x + this.width > rectangle.x + rectangle.width) {
	                this.width = rectangle.width - this.x;
	                if (this.width < 0) {
	                    this.width = 0;
	                }
	            }
	
	            if (this.y + this.height > rectangle.y + rectangle.height) {
	                this.height = rectangle.height - this.y;
	                if (this.height < 0) {
	                    this.height = 0;
	                }
	            }
	        }
	
	        /**
	         * Enlarges this rectangle to include the passed rectangle.
	         *
	         * @param {PIXI.Rectangle} rectangle - The rectangle to include.
	         */
	
	    }, {
	        key: 'enlarge',
	        value: function enlarge(rectangle) {
	            var x1 = Math.min(this.x, rectangle.x);
	            var x2 = Math.max(this.x + this.width, rectangle.x + rectangle.width);
	            var y1 = Math.min(this.y, rectangle.y);
	            var y2 = Math.max(this.y + this.height, rectangle.y + rectangle.height);
	
	            this.x = x1;
	            this.width = x2 - x1;
	            this.y = y1;
	            this.height = y2 - y1;
	        }
	    }, {
	        key: 'left',
	        get: function get() {
	            return this.x;
	        }
	
	        /**
	         * returns the right edge of the rectangle
	         *
	         * @member {number}
	         */
	
	    }, {
	        key: 'right',
	        get: function get() {
	            return this.x + this.width;
	        }
	
	        /**
	         * returns the top edge of the rectangle
	         *
	         * @member {number}
	         */
	
	    }, {
	        key: 'top',
	        get: function get() {
	            return this.y;
	        }
	
	        /**
	         * returns the bottom edge of the rectangle
	         *
	         * @member {number}
	         */
	
	    }, {
	        key: 'bottom',
	        get: function get() {
	            return this.y + this.height;
	        }
	
	        /**
	         * A constant empty rectangle.
	         *
	         * @static
	         * @constant
	         */
	
	    }], [{
	        key: 'EMPTY',
	        get: function get() {
	            return new Rectangle(0, 0, 0, 0);
	        }
	    }]);
	
	    return Rectangle;
	}();
	
	exports.default = Rectangle;

/***/ }),
/* 352 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Rectangle = __webpack_require__(351);
	
	var _Rectangle2 = _interopRequireDefault(_Rectangle);
	
	var _const = __webpack_require__(333);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * The Ellipse object can be used to specify a hit area for displayObjects
	 *
	 * @class
	 * @memberof PIXI
	 */
	var Ellipse = function () {
	  /**
	   * @param {number} [x=0] - The X coordinate of the center of this circle
	   * @param {number} [y=0] - The Y coordinate of the center of this circle
	   * @param {number} [width=0] - The half width of this ellipse
	   * @param {number} [height=0] - The half height of this ellipse
	   */
	  function Ellipse() {
	    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	    var width = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
	    var height = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
	
	    _classCallCheck(this, Ellipse);
	
	    /**
	     * @member {number}
	     * @default 0
	     */
	    this.x = x;
	
	    /**
	     * @member {number}
	     * @default 0
	     */
	    this.y = y;
	
	    /**
	     * @member {number}
	     * @default 0
	     */
	    this.width = width;
	
	    /**
	     * @member {number}
	     * @default 0
	     */
	    this.height = height;
	
	    /**
	     * The type of the object, mainly used to avoid `instanceof` checks
	     *
	     * @member {number}
	     * @readOnly
	     * @default PIXI.SHAPES.ELIP
	     * @see PIXI.SHAPES
	     */
	    this.type = _const.SHAPES.ELIP;
	  }
	
	  /**
	   * Creates a clone of this Ellipse instance
	   *
	   * @return {PIXI.Ellipse} a copy of the ellipse
	   */
	
	
	  _createClass(Ellipse, [{
	    key: 'clone',
	    value: function clone() {
	      return new Ellipse(this.x, this.y, this.width, this.height);
	    }
	
	    /**
	     * Checks whether the x and y coordinates given are contained within this ellipse
	     *
	     * @param {number} x - The X coordinate of the point to test
	     * @param {number} y - The Y coordinate of the point to test
	     * @return {boolean} Whether the x/y coords are within this ellipse
	     */
	
	  }, {
	    key: 'contains',
	    value: function contains(x, y) {
	      if (this.width <= 0 || this.height <= 0) {
	        return false;
	      }
	
	      // normalize the coords to an ellipse with center 0,0
	      var normx = (x - this.x) / this.width;
	      var normy = (y - this.y) / this.height;
	
	      normx *= normx;
	      normy *= normy;
	
	      return normx + normy <= 1;
	    }
	
	    /**
	     * Returns the framing rectangle of the ellipse as a Rectangle object
	     *
	     * @return {PIXI.Rectangle} the framing rectangle
	     */
	
	  }, {
	    key: 'getBounds',
	    value: function getBounds() {
	      return new _Rectangle2.default(this.x - this.width, this.y - this.height, this.width, this.height);
	    }
	  }]);
	
	  return Ellipse;
	}();
	
	exports.default = Ellipse;

/***/ }),
/* 353 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Point = __webpack_require__(346);
	
	var _Point2 = _interopRequireDefault(_Point);
	
	var _const = __webpack_require__(333);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * @class
	 * @memberof PIXI
	 */
	var Polygon = function () {
	    /**
	     * @param {PIXI.Point[]|number[]} points - This can be an array of Points
	     *  that form the polygon, a flat array of numbers that will be interpreted as [x,y, x,y, ...], or
	     *  the arguments passed can be all the points of the polygon e.g.
	     *  `new PIXI.Polygon(new PIXI.Point(), new PIXI.Point(), ...)`, or the arguments passed can be flat
	     *  x,y values e.g. `new Polygon(x,y, x,y, x,y, ...)` where `x` and `y` are Numbers.
	     */
	    function Polygon() {
	        for (var _len = arguments.length, points = Array(_len), _key = 0; _key < _len; _key++) {
	            points[_key] = arguments[_key];
	        }
	
	        _classCallCheck(this, Polygon);
	
	        if (Array.isArray(points[0])) {
	            points = points[0];
	        }
	
	        // if this is an array of points, convert it to a flat array of numbers
	        if (points[0] instanceof _Point2.default) {
	            var p = [];
	
	            for (var i = 0, il = points.length; i < il; i++) {
	                p.push(points[i].x, points[i].y);
	            }
	
	            points = p;
	        }
	
	        this.closed = true;
	
	        /**
	         * An array of the points of this polygon
	         *
	         * @member {number[]}
	         */
	        this.points = points;
	
	        /**
	         * The type of the object, mainly used to avoid `instanceof` checks
	         *
	         * @member {number}
	         * @readOnly
	         * @default PIXI.SHAPES.POLY
	         * @see PIXI.SHAPES
	         */
	        this.type = _const.SHAPES.POLY;
	    }
	
	    /**
	     * Creates a clone of this polygon
	     *
	     * @return {PIXI.Polygon} a copy of the polygon
	     */
	
	
	    _createClass(Polygon, [{
	        key: 'clone',
	        value: function clone() {
	            return new Polygon(this.points.slice());
	        }
	
	        /**
	         * Closes the polygon, adding points if necessary.
	         *
	         */
	
	    }, {
	        key: 'close',
	        value: function close() {
	            var points = this.points;
	
	            // close the poly if the value is true!
	            if (points[0] !== points[points.length - 2] || points[1] !== points[points.length - 1]) {
	                points.push(points[0], points[1]);
	            }
	        }
	
	        /**
	         * Checks whether the x and y coordinates passed to this function are contained within this polygon
	         *
	         * @param {number} x - The X coordinate of the point to test
	         * @param {number} y - The Y coordinate of the point to test
	         * @return {boolean} Whether the x/y coordinates are within this polygon
	         */
	
	    }, {
	        key: 'contains',
	        value: function contains(x, y) {
	            var inside = false;
	
	            // use some raycasting to test hits
	            // https://github.com/substack/point-in-polygon/blob/master/index.js
	            var length = this.points.length / 2;
	
	            for (var i = 0, j = length - 1; i < length; j = i++) {
	                var xi = this.points[i * 2];
	                var yi = this.points[i * 2 + 1];
	                var xj = this.points[j * 2];
	                var yj = this.points[j * 2 + 1];
	                var intersect = yi > y !== yj > y && x < (xj - xi) * ((y - yi) / (yj - yi)) + xi;
	
	                if (intersect) {
	                    inside = !inside;
	                }
	            }
	
	            return inside;
	        }
	    }]);
	
	    return Polygon;
	}();
	
	exports.default = Polygon;

/***/ }),
/* 354 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _const = __webpack_require__(333);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * The Rounded Rectangle object is an area that has nice rounded corners, as indicated by its
	 * top-left corner point (x, y) and by its width and its height and its radius.
	 *
	 * @class
	 * @memberof PIXI
	 */
	var RoundedRectangle = function () {
	    /**
	     * @param {number} [x=0] - The X coordinate of the upper-left corner of the rounded rectangle
	     * @param {number} [y=0] - The Y coordinate of the upper-left corner of the rounded rectangle
	     * @param {number} [width=0] - The overall width of this rounded rectangle
	     * @param {number} [height=0] - The overall height of this rounded rectangle
	     * @param {number} [radius=20] - Controls the radius of the rounded corners
	     */
	    function RoundedRectangle() {
	        var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	        var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	        var width = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
	        var height = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
	        var radius = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 20;
	
	        _classCallCheck(this, RoundedRectangle);
	
	        /**
	         * @member {number}
	         * @default 0
	         */
	        this.x = x;
	
	        /**
	         * @member {number}
	         * @default 0
	         */
	        this.y = y;
	
	        /**
	         * @member {number}
	         * @default 0
	         */
	        this.width = width;
	
	        /**
	         * @member {number}
	         * @default 0
	         */
	        this.height = height;
	
	        /**
	         * @member {number}
	         * @default 20
	         */
	        this.radius = radius;
	
	        /**
	         * The type of the object, mainly used to avoid `instanceof` checks
	         *
	         * @member {number}
	         * @readonly
	         * @default PIXI.SHAPES.RREC
	         * @see PIXI.SHAPES
	         */
	        this.type = _const.SHAPES.RREC;
	    }
	
	    /**
	     * Creates a clone of this Rounded Rectangle
	     *
	     * @return {PIXI.RoundedRectangle} a copy of the rounded rectangle
	     */
	
	
	    _createClass(RoundedRectangle, [{
	        key: 'clone',
	        value: function clone() {
	            return new RoundedRectangle(this.x, this.y, this.width, this.height, this.radius);
	        }
	
	        /**
	         * Checks whether the x and y coordinates given are contained within this Rounded Rectangle
	         *
	         * @param {number} x - The X coordinate of the point to test
	         * @param {number} y - The Y coordinate of the point to test
	         * @return {boolean} Whether the x/y coordinates are within this Rounded Rectangle
	         */
	
	    }, {
	        key: 'contains',
	        value: function contains(x, y) {
	            if (this.width <= 0 || this.height <= 0) {
	                return false;
	            }
	            if (x >= this.x && x <= this.x + this.width) {
	                if (y >= this.y && y <= this.y + this.height) {
	                    if (y >= this.y + this.radius && y <= this.y + this.height - this.radius || x >= this.x + this.radius && x <= this.x + this.width - this.radius) {
	                        return true;
	                    }
	                    var dx = x - (this.x + this.radius);
	                    var dy = y - (this.y + this.radius);
	                    var radius2 = this.radius * this.radius;
	
	                    if (dx * dx + dy * dy <= radius2) {
	                        return true;
	                    }
	                    dx = x - (this.x + this.width - this.radius);
	                    if (dx * dx + dy * dy <= radius2) {
	                        return true;
	                    }
	                    dy = y - (this.y + this.height - this.radius);
	                    if (dx * dx + dy * dy <= radius2) {
	                        return true;
	                    }
	                    dx = x - (this.x + this.radius);
	                    if (dx * dx + dy * dy <= radius2) {
	                        return true;
	                    }
	                }
	            }
	
	            return false;
	        }
	    }]);
	
	    return RoundedRectangle;
	}();
	
	exports.default = RoundedRectangle;

/***/ }),
/* 355 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _math = __webpack_require__(345);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Generic class to deal with traditional 2D matrix transforms
	 *
	 * @class
	 * @memberof PIXI
	 */
	var TransformBase = function () {
	  /**
	   *
	   */
	  function TransformBase() {
	    _classCallCheck(this, TransformBase);
	
	    /**
	     * The global matrix transform. It can be swapped temporarily by some functions like getLocalBounds()
	     *
	     * @member {PIXI.Matrix}
	     */
	    this.worldTransform = new _math.Matrix();
	
	    /**
	     * The local matrix transform
	     *
	     * @member {PIXI.Matrix}
	     */
	    this.localTransform = new _math.Matrix();
	
	    this._worldID = 0;
	    this._parentID = 0;
	  }
	
	  /**
	   * TransformBase does not have decomposition, so this function wont do anything
	   */
	
	
	  _createClass(TransformBase, [{
	    key: 'updateLocalTransform',
	    value: function updateLocalTransform() {}
	    // empty
	
	
	    /**
	     * Updates the values of the object and applies the parent's transform.
	     *
	     * @param {PIXI.TransformBase} parentTransform - The transform of the parent of this object
	     */
	
	  }, {
	    key: 'updateTransform',
	    value: function updateTransform(parentTransform) {
	      var pt = parentTransform.worldTransform;
	      var wt = this.worldTransform;
	      var lt = this.localTransform;
	
	      // concat the parent matrix with the objects transform.
	      wt.a = lt.a * pt.a + lt.b * pt.c;
	      wt.b = lt.a * pt.b + lt.b * pt.d;
	      wt.c = lt.c * pt.a + lt.d * pt.c;
	      wt.d = lt.c * pt.b + lt.d * pt.d;
	      wt.tx = lt.tx * pt.a + lt.ty * pt.c + pt.tx;
	      wt.ty = lt.tx * pt.b + lt.ty * pt.d + pt.ty;
	
	      this._worldID++;
	    }
	  }]);
	
	  return TransformBase;
	}();
	
	/**
	 * Updates the values of the object and applies the parent's transform.
	 * @param  parentTransform {PIXI.Transform} The transform of the parent of this object
	 *
	 */
	
	
	exports.default = TransformBase;
	TransformBase.prototype.updateWorldTransform = TransformBase.prototype.updateTransform;
	
	TransformBase.IDENTITY = new TransformBase();

/***/ }),
/* 356 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _math = __webpack_require__(345);
	
	var _TransformBase2 = __webpack_require__(355);
	
	var _TransformBase3 = _interopRequireDefault(_TransformBase2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * Generic class to deal with traditional 2D matrix transforms
	 * local transformation is calculated from position,scale,skew and rotation
	 *
	 * @class
	 * @extends PIXI.TransformBase
	 * @memberof PIXI
	 */
	var Transform = function (_TransformBase) {
	  _inherits(Transform, _TransformBase);
	
	  /**
	   *
	   */
	  function Transform() {
	    _classCallCheck(this, Transform);
	
	    /**
	    * The coordinate of the object relative to the local coordinates of the parent.
	    *
	    * @member {PIXI.Point}
	    */
	    var _this = _possibleConstructorReturn(this, (Transform.__proto__ || Object.getPrototypeOf(Transform)).call(this));
	
	    _this.position = new _math.Point(0, 0);
	
	    /**
	     * The scale factor of the object.
	     *
	     * @member {PIXI.Point}
	     */
	    _this.scale = new _math.Point(1, 1);
	
	    /**
	     * The skew amount, on the x and y axis.
	     *
	     * @member {PIXI.ObservablePoint}
	     */
	    _this.skew = new _math.ObservablePoint(_this.updateSkew, _this, 0, 0);
	
	    /**
	     * The pivot point of the displayObject that it rotates around
	     *
	     * @member {PIXI.Point}
	     */
	    _this.pivot = new _math.Point(0, 0);
	
	    /**
	     * The rotation value of the object, in radians
	     *
	     * @member {Number}
	     * @private
	     */
	    _this._rotation = 0;
	
	    _this._cx = 1; // cos rotation + skewY;
	    _this._sx = 0; // sin rotation + skewY;
	    _this._cy = 0; // cos rotation + Math.PI/2 - skewX;
	    _this._sy = 1; // sin rotation + Math.PI/2 - skewX;
	    return _this;
	  }
	
	  /**
	   * Updates the skew values when the skew or rotation changes.
	   *
	   * @private
	   */
	
	
	  _createClass(Transform, [{
	    key: 'updateSkew',
	    value: function updateSkew() {
	      this._cx = Math.cos(this._rotation + this.skew._y);
	      this._sx = Math.sin(this._rotation + this.skew._y);
	      this._cy = -Math.sin(this._rotation - this.skew._x); // cos, added PI/2
	      this._sy = Math.cos(this._rotation - this.skew._x); // sin, added PI/2
	    }
	
	    /**
	     * Updates only local matrix
	     */
	
	  }, {
	    key: 'updateLocalTransform',
	    value: function updateLocalTransform() {
	      var lt = this.localTransform;
	
	      lt.a = this._cx * this.scale.x;
	      lt.b = this._sx * this.scale.x;
	      lt.c = this._cy * this.scale.y;
	      lt.d = this._sy * this.scale.y;
	
	      lt.tx = this.position.x - (this.pivot.x * lt.a + this.pivot.y * lt.c);
	      lt.ty = this.position.y - (this.pivot.x * lt.b + this.pivot.y * lt.d);
	    }
	
	    /**
	     * Updates the values of the object and applies the parent's transform.
	     *
	     * @param {PIXI.Transform} parentTransform - The transform of the parent of this object
	     */
	
	  }, {
	    key: 'updateTransform',
	    value: function updateTransform(parentTransform) {
	      var lt = this.localTransform;
	
	      lt.a = this._cx * this.scale.x;
	      lt.b = this._sx * this.scale.x;
	      lt.c = this._cy * this.scale.y;
	      lt.d = this._sy * this.scale.y;
	
	      lt.tx = this.position.x - (this.pivot.x * lt.a + this.pivot.y * lt.c);
	      lt.ty = this.position.y - (this.pivot.x * lt.b + this.pivot.y * lt.d);
	
	      // concat the parent matrix with the objects transform.
	      var pt = parentTransform.worldTransform;
	      var wt = this.worldTransform;
	
	      wt.a = lt.a * pt.a + lt.b * pt.c;
	      wt.b = lt.a * pt.b + lt.b * pt.d;
	      wt.c = lt.c * pt.a + lt.d * pt.c;
	      wt.d = lt.c * pt.b + lt.d * pt.d;
	      wt.tx = lt.tx * pt.a + lt.ty * pt.c + pt.tx;
	      wt.ty = lt.tx * pt.b + lt.ty * pt.d + pt.ty;
	
	      this._worldID++;
	    }
	
	    /**
	     * Decomposes a matrix and sets the transforms properties based on it.
	     *
	     * @param {PIXI.Matrix} matrix - The matrix to decompose
	     */
	
	  }, {
	    key: 'setFromMatrix',
	    value: function setFromMatrix(matrix) {
	      matrix.decompose(this);
	    }
	
	    /**
	     * The rotation of the object in radians.
	     *
	     * @member {number}
	     */
	
	  }, {
	    key: 'rotation',
	    get: function get() {
	      return this._rotation;
	    },
	    set: function set(value) // eslint-disable-line require-jsdoc
	    {
	      this._rotation = value;
	      this.updateSkew();
	    }
	  }]);
	
	  return Transform;
	}(_TransformBase3.default);
	
	exports.default = Transform;

/***/ }),
/* 357 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _math = __webpack_require__(345);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * 'Builder' pattern for bounds rectangles
	 * Axis-Aligned Bounding Box
	 * It is not a shape! Its mutable thing, no 'EMPTY' or that kind of problems
	 *
	 * @class
	 * @memberof PIXI
	 */
	var Bounds = function () {
	    /**
	     *
	     */
	    function Bounds() {
	        _classCallCheck(this, Bounds);
	
	        /**
	         * @member {number}
	         * @default 0
	         */
	        this.minX = Infinity;
	
	        /**
	         * @member {number}
	         * @default 0
	         */
	        this.minY = Infinity;
	
	        /**
	         * @member {number}
	         * @default 0
	         */
	        this.maxX = -Infinity;
	
	        /**
	         * @member {number}
	         * @default 0
	         */
	        this.maxY = -Infinity;
	
	        this.rect = null;
	    }
	
	    /**
	     * Checks if bounds are empty.
	     *
	     * @return {boolean} True if empty.
	     */
	
	
	    _createClass(Bounds, [{
	        key: 'isEmpty',
	        value: function isEmpty() {
	            return this.minX > this.maxX || this.minY > this.maxY;
	        }
	
	        /**
	         * Clears the bounds and resets.
	         *
	         */
	
	    }, {
	        key: 'clear',
	        value: function clear() {
	            this.updateID++;
	
	            this.minX = Infinity;
	            this.minY = Infinity;
	            this.maxX = -Infinity;
	            this.maxY = -Infinity;
	        }
	
	        /**
	         * Can return Rectangle.EMPTY constant, either construct new rectangle, either use your rectangle
	         * It is not guaranteed that it will return tempRect
	         *
	         * @param {PIXI.Rectangle} rect - temporary object will be used if AABB is not empty
	         * @returns {PIXI.Rectangle} A rectangle of the bounds
	         */
	
	    }, {
	        key: 'getRectangle',
	        value: function getRectangle(rect) {
	            if (this.minX > this.maxX || this.minY > this.maxY) {
	                return _math.Rectangle.EMPTY;
	            }
	
	            rect = rect || new _math.Rectangle(0, 0, 1, 1);
	
	            rect.x = this.minX;
	            rect.y = this.minY;
	            rect.width = this.maxX - this.minX;
	            rect.height = this.maxY - this.minY;
	
	            return rect;
	        }
	
	        /**
	         * This function should be inlined when its possible.
	         *
	         * @param {PIXI.Point} point - The point to add.
	         */
	
	    }, {
	        key: 'addPoint',
	        value: function addPoint(point) {
	            this.minX = Math.min(this.minX, point.x);
	            this.maxX = Math.max(this.maxX, point.x);
	            this.minY = Math.min(this.minY, point.y);
	            this.maxY = Math.max(this.maxY, point.y);
	        }
	
	        /**
	         * Adds a quad, not transformed
	         *
	         * @param {Float32Array} vertices - The verts to add.
	         */
	
	    }, {
	        key: 'addQuad',
	        value: function addQuad(vertices) {
	            var minX = this.minX;
	            var minY = this.minY;
	            var maxX = this.maxX;
	            var maxY = this.maxY;
	
	            var x = vertices[0];
	            var y = vertices[1];
	
	            minX = x < minX ? x : minX;
	            minY = y < minY ? y : minY;
	            maxX = x > maxX ? x : maxX;
	            maxY = y > maxY ? y : maxY;
	
	            x = vertices[2];
	            y = vertices[3];
	            minX = x < minX ? x : minX;
	            minY = y < minY ? y : minY;
	            maxX = x > maxX ? x : maxX;
	            maxY = y > maxY ? y : maxY;
	
	            x = vertices[4];
	            y = vertices[5];
	            minX = x < minX ? x : minX;
	            minY = y < minY ? y : minY;
	            maxX = x > maxX ? x : maxX;
	            maxY = y > maxY ? y : maxY;
	
	            x = vertices[6];
	            y = vertices[7];
	            minX = x < minX ? x : minX;
	            minY = y < minY ? y : minY;
	            maxX = x > maxX ? x : maxX;
	            maxY = y > maxY ? y : maxY;
	
	            this.minX = minX;
	            this.minY = minY;
	            this.maxX = maxX;
	            this.maxY = maxY;
	        }
	
	        /**
	         * Adds sprite frame, transformed.
	         *
	         * @param {PIXI.TransformBase} transform - TODO
	         * @param {number} x0 - TODO
	         * @param {number} y0 - TODO
	         * @param {number} x1 - TODO
	         * @param {number} y1 - TODO
	         */
	
	    }, {
	        key: 'addFrame',
	        value: function addFrame(transform, x0, y0, x1, y1) {
	            var matrix = transform.worldTransform;
	            var a = matrix.a;
	            var b = matrix.b;
	            var c = matrix.c;
	            var d = matrix.d;
	            var tx = matrix.tx;
	            var ty = matrix.ty;
	
	            var minX = this.minX;
	            var minY = this.minY;
	            var maxX = this.maxX;
	            var maxY = this.maxY;
	
	            var x = a * x0 + c * y0 + tx;
	            var y = b * x0 + d * y0 + ty;
	
	            minX = x < minX ? x : minX;
	            minY = y < minY ? y : minY;
	            maxX = x > maxX ? x : maxX;
	            maxY = y > maxY ? y : maxY;
	
	            x = a * x1 + c * y0 + tx;
	            y = b * x1 + d * y0 + ty;
	            minX = x < minX ? x : minX;
	            minY = y < minY ? y : minY;
	            maxX = x > maxX ? x : maxX;
	            maxY = y > maxY ? y : maxY;
	
	            x = a * x0 + c * y1 + tx;
	            y = b * x0 + d * y1 + ty;
	            minX = x < minX ? x : minX;
	            minY = y < minY ? y : minY;
	            maxX = x > maxX ? x : maxX;
	            maxY = y > maxY ? y : maxY;
	
	            x = a * x1 + c * y1 + tx;
	            y = b * x1 + d * y1 + ty;
	            minX = x < minX ? x : minX;
	            minY = y < minY ? y : minY;
	            maxX = x > maxX ? x : maxX;
	            maxY = y > maxY ? y : maxY;
	
	            this.minX = minX;
	            this.minY = minY;
	            this.maxX = maxX;
	            this.maxY = maxY;
	        }
	
	        /**
	         * Add an array of vertices
	         *
	         * @param {PIXI.TransformBase} transform - TODO
	         * @param {Float32Array} vertices - TODO
	         * @param {number} beginOffset - TODO
	         * @param {number} endOffset - TODO
	         */
	
	    }, {
	        key: 'addVertices',
	        value: function addVertices(transform, vertices, beginOffset, endOffset) {
	            var matrix = transform.worldTransform;
	            var a = matrix.a;
	            var b = matrix.b;
	            var c = matrix.c;
	            var d = matrix.d;
	            var tx = matrix.tx;
	            var ty = matrix.ty;
	
	            var minX = this.minX;
	            var minY = this.minY;
	            var maxX = this.maxX;
	            var maxY = this.maxY;
	
	            for (var i = beginOffset; i < endOffset; i += 2) {
	                var rawX = vertices[i];
	                var rawY = vertices[i + 1];
	                var x = a * rawX + c * rawY + tx;
	                var y = d * rawY + b * rawX + ty;
	
	                minX = x < minX ? x : minX;
	                minY = y < minY ? y : minY;
	                maxX = x > maxX ? x : maxX;
	                maxY = y > maxY ? y : maxY;
	            }
	
	            this.minX = minX;
	            this.minY = minY;
	            this.maxX = maxX;
	            this.maxY = maxY;
	        }
	
	        /**
	         * Adds other Bounds
	         *
	         * @param {PIXI.Bounds} bounds - TODO
	         */
	
	    }, {
	        key: 'addBounds',
	        value: function addBounds(bounds) {
	            var minX = this.minX;
	            var minY = this.minY;
	            var maxX = this.maxX;
	            var maxY = this.maxY;
	
	            this.minX = bounds.minX < minX ? bounds.minX : minX;
	            this.minY = bounds.minY < minY ? bounds.minY : minY;
	            this.maxX = bounds.maxX > maxX ? bounds.maxX : maxX;
	            this.maxY = bounds.maxY > maxY ? bounds.maxY : maxY;
	        }
	
	        /**
	         * Adds other Bounds, masked with Bounds
	         *
	         * @param {PIXI.Bounds} bounds - TODO
	         * @param {PIXI.Bounds} mask - TODO
	         */
	
	    }, {
	        key: 'addBoundsMask',
	        value: function addBoundsMask(bounds, mask) {
	            var _minX = bounds.minX > mask.minX ? bounds.minX : mask.minX;
	            var _minY = bounds.minY > mask.minY ? bounds.minY : mask.minY;
	            var _maxX = bounds.maxX < mask.maxX ? bounds.maxX : mask.maxX;
	            var _maxY = bounds.maxY < mask.maxY ? bounds.maxY : mask.maxY;
	
	            if (_minX <= _maxX && _minY <= _maxY) {
	                var minX = this.minX;
	                var minY = this.minY;
	                var maxX = this.maxX;
	                var maxY = this.maxY;
	
	                this.minX = _minX < minX ? _minX : minX;
	                this.minY = _minY < minY ? _minY : minY;
	                this.maxX = _maxX > maxX ? _maxX : maxX;
	                this.maxY = _maxY > maxY ? _maxY : maxY;
	            }
	        }
	
	        /**
	         * Adds other Bounds, masked with Rectangle
	         *
	         * @param {PIXI.Bounds} bounds - TODO
	         * @param {PIXI.Rectangle} area - TODO
	         */
	
	    }, {
	        key: 'addBoundsArea',
	        value: function addBoundsArea(bounds, area) {
	            var _minX = bounds.minX > area.x ? bounds.minX : area.x;
	            var _minY = bounds.minY > area.y ? bounds.minY : area.y;
	            var _maxX = bounds.maxX < area.x + area.width ? bounds.maxX : area.x + area.width;
	            var _maxY = bounds.maxY < area.y + area.height ? bounds.maxY : area.y + area.height;
	
	            if (_minX <= _maxX && _minY <= _maxY) {
	                var minX = this.minX;
	                var minY = this.minY;
	                var maxX = this.maxX;
	                var maxY = this.maxY;
	
	                this.minX = _minX < minX ? _minX : minX;
	                this.minY = _minY < minY ? _minY : minY;
	                this.maxX = _maxX > maxX ? _maxX : maxX;
	                this.maxY = _maxY > maxY ? _maxY : maxY;
	            }
	        }
	    }]);
	
	    return Bounds;
	}();
	
	exports.default = Bounds;

/***/ }),
/* 358 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _BaseRenderTexture = __webpack_require__(359);
	
	var _BaseRenderTexture2 = _interopRequireDefault(_BaseRenderTexture);
	
	var _Texture2 = __webpack_require__(370);
	
	var _Texture3 = _interopRequireDefault(_Texture2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * A RenderTexture is a special texture that allows any PixiJS display object to be rendered to it.
	 *
	 * __Hint__: All DisplayObjects (i.e. Sprites) that render to a RenderTexture should be preloaded
	 * otherwise black rectangles will be drawn instead.
	 *
	 * A RenderTexture takes a snapshot of any Display Object given to its render method. For example:
	 *
	 * ```js
	 * let renderer = PIXI.autoDetectRenderer(1024, 1024, { view: canvas, ratio: 1 });
	 * let renderTexture = PIXI.RenderTexture.create(800, 600);
	 * let sprite = PIXI.Sprite.fromImage("spinObj_01.png");
	 *
	 * sprite.position.x = 800/2;
	 * sprite.position.y = 600/2;
	 * sprite.anchor.x = 0.5;
	 * sprite.anchor.y = 0.5;
	 *
	 * renderer.render(sprite, renderTexture);
	 * ```
	 *
	 * The Sprite in this case will be rendered using its local transform. To render this sprite at 0,0
	 * you can clear the transform
	 *
	 * ```js
	 *
	 * sprite.setTransform()
	 *
	 * let renderTexture = new PIXI.RenderTexture.create(100, 100);
	 *
	 * renderer.render(sprite, renderTexture);  // Renders to center of RenderTexture
	 * ```
	 *
	 * @class
	 * @extends PIXI.Texture
	 * @memberof PIXI
	 */
	var RenderTexture = function (_Texture) {
	    _inherits(RenderTexture, _Texture);
	
	    /**
	     * @param {PIXI.BaseRenderTexture} baseRenderTexture - The renderer used for this RenderTexture
	     * @param {PIXI.Rectangle} [frame] - The rectangle frame of the texture to show
	     */
	    function RenderTexture(baseRenderTexture, frame) {
	        _classCallCheck(this, RenderTexture);
	
	        // support for legacy..
	        var _legacyRenderer = null;
	
	        if (!(baseRenderTexture instanceof _BaseRenderTexture2.default)) {
	            /* eslint-disable prefer-rest-params, no-console */
	            var width = arguments[1];
	            var height = arguments[2];
	            var scaleMode = arguments[3];
	            var resolution = arguments[4];
	
	            // we have an old render texture..
	            console.warn('Please use RenderTexture.create(' + width + ', ' + height + ') instead of the ctor directly.');
	            _legacyRenderer = arguments[0];
	            /* eslint-enable prefer-rest-params, no-console */
	
	            frame = null;
	            baseRenderTexture = new _BaseRenderTexture2.default(width, height, scaleMode, resolution);
	        }
	
	        /**
	         * The base texture object that this texture uses
	         *
	         * @member {BaseTexture}
	         */
	
	        var _this = _possibleConstructorReturn(this, (RenderTexture.__proto__ || Object.getPrototypeOf(RenderTexture)).call(this, baseRenderTexture, frame));
	
	        _this.legacyRenderer = _legacyRenderer;
	
	        /**
	         * This will let the renderer know if the texture is valid. If it's not then it cannot be rendered.
	         *
	         * @member {boolean}
	         */
	        _this.valid = true;
	
	        _this._updateUvs();
	        return _this;
	    }
	
	    /**
	     * Resizes the RenderTexture.
	     *
	     * @param {number} width - The width to resize to.
	     * @param {number} height - The height to resize to.
	     * @param {boolean} doNotResizeBaseTexture - Should the baseTexture.width and height values be resized as well?
	     */
	
	
	    _createClass(RenderTexture, [{
	        key: 'resize',
	        value: function resize(width, height, doNotResizeBaseTexture) {
	            width = Math.ceil(width);
	            height = Math.ceil(height);
	
	            // TODO - could be not required..
	            this.valid = width > 0 && height > 0;
	
	            this._frame.width = this.orig.width = width;
	            this._frame.height = this.orig.height = height;
	
	            if (!doNotResizeBaseTexture) {
	                this.baseTexture.resize(width, height);
	            }
	
	            this._updateUvs();
	        }
	
	        /**
	         * A short hand way of creating a render texture.
	         *
	         * @param {number} [width=100] - The width of the render texture
	         * @param {number} [height=100] - The height of the render texture
	         * @param {number} [scaleMode=PIXI.settings.SCALE_MODE] - See {@link PIXI.SCALE_MODES} for possible values
	         * @param {number} [resolution=1] - The resolution / device pixel ratio of the texture being generated
	         * @return {PIXI.RenderTexture} The new render texture
	         */
	
	    }], [{
	        key: 'create',
	        value: function create(width, height, scaleMode, resolution) {
	            return new RenderTexture(new _BaseRenderTexture2.default(width, height, scaleMode, resolution));
	        }
	    }]);
	
	    return RenderTexture;
	}(_Texture3.default);
	
	exports.default = RenderTexture;

/***/ }),
/* 359 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _BaseTexture2 = __webpack_require__(360);
	
	var _BaseTexture3 = _interopRequireDefault(_BaseTexture2);
	
	var _settings = __webpack_require__(334);
	
	var _settings2 = _interopRequireDefault(_settings);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * A BaseRenderTexture is a special texture that allows any PixiJS display object to be rendered to it.
	 *
	 * __Hint__: All DisplayObjects (i.e. Sprites) that render to a BaseRenderTexture should be preloaded
	 * otherwise black rectangles will be drawn instead.
	 *
	 * A BaseRenderTexture takes a snapshot of any Display Object given to its render method. The position
	 * and rotation of the given Display Objects is ignored. For example:
	 *
	 * ```js
	 * let renderer = PIXI.autoDetectRenderer(1024, 1024, { view: canvas, ratio: 1 });
	 * let baseRenderTexture = new PIXI.BaseRenderTexture(renderer, 800, 600);
	 * let sprite = PIXI.Sprite.fromImage("spinObj_01.png");
	 *
	 * sprite.position.x = 800/2;
	 * sprite.position.y = 600/2;
	 * sprite.anchor.x = 0.5;
	 * sprite.anchor.y = 0.5;
	 *
	 * baseRenderTexture.render(sprite);
	 * ```
	 *
	 * The Sprite in this case will be rendered using its local transform. To render this sprite at 0,0
	 * you can clear the transform
	 *
	 * ```js
	 *
	 * sprite.setTransform()
	 *
	 * let baseRenderTexture = new PIXI.BaseRenderTexture(100, 100);
	 * let renderTexture = new PIXI.RenderTexture(baseRenderTexture);
	 *
	 * renderer.render(sprite, renderTexture);  // Renders to center of RenderTexture
	 * ```
	 *
	 * @class
	 * @extends PIXI.BaseTexture
	 * @memberof PIXI
	 */
	var BaseRenderTexture = function (_BaseTexture) {
	  _inherits(BaseRenderTexture, _BaseTexture);
	
	  /**
	   * @param {number} [width=100] - The width of the base render texture
	   * @param {number} [height=100] - The height of the base render texture
	   * @param {number} [scaleMode=PIXI.settings.SCALE_MODE] - See {@link PIXI.SCALE_MODES} for possible values
	   * @param {number} [resolution=1] - The resolution / device pixel ratio of the texture being generated
	   */
	  function BaseRenderTexture() {
	    var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;
	    var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
	    var scaleMode = arguments[2];
	    var resolution = arguments[3];
	
	    _classCallCheck(this, BaseRenderTexture);
	
	    var _this = _possibleConstructorReturn(this, (BaseRenderTexture.__proto__ || Object.getPrototypeOf(BaseRenderTexture)).call(this, null, scaleMode));
	
	    _this.resolution = resolution || _settings2.default.RESOLUTION;
	
	    _this.width = Math.ceil(width);
	    _this.height = Math.ceil(height);
	
	    _this.realWidth = _this.width * _this.resolution;
	    _this.realHeight = _this.height * _this.resolution;
	
	    _this.scaleMode = scaleMode !== undefined ? scaleMode : _settings2.default.SCALE_MODE;
	    _this.hasLoaded = true;
	
	    /**
	     * A map of renderer IDs to webgl renderTargets
	     *
	     * @private
	     * @member {object<number, WebGLTexture>}
	     */
	    _this._glRenderTargets = {};
	
	    /**
	     * A reference to the canvas render target (we only need one as this can be shared across renderers)
	     *
	     * @private
	     * @member {object<number, WebGLTexture>}
	     */
	    _this._canvasRenderTarget = null;
	
	    /**
	     * This will let the renderer know if the texture is valid. If it's not then it cannot be rendered.
	     *
	     * @member {boolean}
	     */
	    _this.valid = false;
	    return _this;
	  }
	
	  /**
	   * Resizes the BaseRenderTexture.
	   *
	   * @param {number} width - The width to resize to.
	   * @param {number} height - The height to resize to.
	   */
	
	
	  _createClass(BaseRenderTexture, [{
	    key: 'resize',
	    value: function resize(width, height) {
	      width = Math.ceil(width);
	      height = Math.ceil(height);
	
	      if (width === this.width && height === this.height) {
	        return;
	      }
	
	      this.valid = width > 0 && height > 0;
	
	      this.width = width;
	      this.height = height;
	
	      this.realWidth = this.width * this.resolution;
	      this.realHeight = this.height * this.resolution;
	
	      if (!this.valid) {
	        return;
	      }
	
	      this.emit('update', this);
	    }
	
	    /**
	     * Destroys this texture
	     *
	     */
	
	  }, {
	    key: 'destroy',
	    value: function destroy() {
	      _get(BaseRenderTexture.prototype.__proto__ || Object.getPrototypeOf(BaseRenderTexture.prototype), 'destroy', this).call(this, true);
	      this.renderer = null;
	    }
	  }]);
	
	  return BaseRenderTexture;
	}(_BaseTexture3.default);
	
	exports.default = BaseRenderTexture;

/***/ }),
/* 360 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _utils = __webpack_require__(332);
	
	var _settings = __webpack_require__(334);
	
	var _settings2 = _interopRequireDefault(_settings);
	
	var _eventemitter = __webpack_require__(338);
	
	var _eventemitter2 = _interopRequireDefault(_eventemitter);
	
	var _determineCrossOrigin = __webpack_require__(361);
	
	var _determineCrossOrigin2 = _interopRequireDefault(_determineCrossOrigin);
	
	var _bitTwiddle = __webpack_require__(369);
	
	var _bitTwiddle2 = _interopRequireDefault(_bitTwiddle);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * A texture stores the information that represents an image. All textures have a base texture.
	 *
	 * @class
	 * @extends EventEmitter
	 * @memberof PIXI
	 */
	var BaseTexture = function (_EventEmitter) {
	    _inherits(BaseTexture, _EventEmitter);
	
	    /**
	     * @param {HTMLImageElement|HTMLCanvasElement} [source] - the source object of the texture.
	     * @param {number} [scaleMode=PIXI.settings.SCALE_MODE] - See {@link PIXI.SCALE_MODES} for possible values
	     * @param {number} [resolution=1] - The resolution / device pixel ratio of the texture
	     */
	    function BaseTexture(source, scaleMode, resolution) {
	        _classCallCheck(this, BaseTexture);
	
	        var _this = _possibleConstructorReturn(this, (BaseTexture.__proto__ || Object.getPrototypeOf(BaseTexture)).call(this));
	
	        _this.uid = (0, _utils.uid)();
	
	        _this.touched = 0;
	
	        /**
	         * The resolution / device pixel ratio of the texture
	         *
	         * @member {number}
	         * @default 1
	         */
	        _this.resolution = resolution || _settings2.default.RESOLUTION;
	
	        /**
	         * The width of the base texture set when the image has loaded
	         *
	         * @readonly
	         * @member {number}
	         */
	        _this.width = 100;
	
	        /**
	         * The height of the base texture set when the image has loaded
	         *
	         * @readonly
	         * @member {number}
	         */
	        _this.height = 100;
	
	        // TODO docs
	        // used to store the actual dimensions of the source
	        /**
	         * Used to store the actual width of the source of this texture
	         *
	         * @readonly
	         * @member {number}
	         */
	        _this.realWidth = 100;
	        /**
	         * Used to store the actual height of the source of this texture
	         *
	         * @readonly
	         * @member {number}
	         */
	        _this.realHeight = 100;
	
	        /**
	         * The scale mode to apply when scaling this texture
	         *
	         * @member {number}
	         * @default PIXI.settings.SCALE_MODE
	         * @see PIXI.SCALE_MODES
	         */
	        _this.scaleMode = scaleMode !== undefined ? scaleMode : _settings2.default.SCALE_MODE;
	
	        /**
	         * Set to true once the base texture has successfully loaded.
	         *
	         * This is never true if the underlying source fails to load or has no texture data.
	         *
	         * @readonly
	         * @member {boolean}
	         */
	        _this.hasLoaded = false;
	
	        /**
	         * Set to true if the source is currently loading.
	         *
	         * If an Image source is loading the 'loaded' or 'error' event will be
	         * dispatched when the operation ends. An underyling source that is
	         * immediately-available bypasses loading entirely.
	         *
	         * @readonly
	         * @member {boolean}
	         */
	        _this.isLoading = false;
	
	        /**
	         * The image source that is used to create the texture.
	         *
	         * TODO: Make this a setter that calls loadSource();
	         *
	         * @readonly
	         * @member {HTMLImageElement|HTMLCanvasElement}
	         */
	        _this.source = null; // set in loadSource, if at all
	
	        /**
	         * The image source that is used to create the texture. This is used to
	         * store the original Svg source when it is replaced with a canvas element.
	         *
	         * TODO: Currently not in use but could be used when re-scaling svg.
	         *
	         * @readonly
	         * @member {Image}
	         */
	        _this.origSource = null; // set in loadSvg, if at all
	
	        /**
	         * Type of image defined in source, eg. `png` or `svg`
	         *
	         * @readonly
	         * @member {string}
	         */
	        _this.imageType = null; // set in updateImageType
	
	        /**
	         * Scale for source image. Used with Svg images to scale them before rasterization.
	         *
	         * @readonly
	         * @member {number}
	         */
	        _this.sourceScale = 1.0;
	
	        /**
	         * Controls if RGB channels should be pre-multiplied by Alpha  (WebGL only)
	         * All blend modes, and shaders written for default value. Change it on your own risk.
	         *
	         * @member {boolean}
	         * @default true
	         */
	        _this.premultipliedAlpha = true;
	
	        /**
	         * The image url of the texture
	         *
	         * @member {string}
	         */
	        _this.imageUrl = null;
	
	        /**
	         * Whether or not the texture is a power of two, try to use power of two textures as much
	         * as you can
	         *
	         * @private
	         * @member {boolean}
	         */
	        _this.isPowerOfTwo = false;
	
	        // used for webGL
	
	        /**
	         *
	         * Set this to true if a mipmap of this texture needs to be generated. This value needs
	         * to be set before the texture is used
	         * Also the texture must be a power of two size to work
	         *
	         * @member {boolean}
	         * @see PIXI.MIPMAP_TEXTURES
	         */
	        _this.mipmap = _settings2.default.MIPMAP_TEXTURES;
	
	        /**
	         *
	         * WebGL Texture wrap mode
	         *
	         * @member {number}
	         * @see PIXI.WRAP_MODES
	         */
	        _this.wrapMode = _settings2.default.WRAP_MODE;
	
	        /**
	         * A map of renderer IDs to webgl textures
	         *
	         * @private
	         * @member {object<number, WebGLTexture>}
	         */
	        _this._glTextures = {};
	
	        _this._enabled = 0;
	        _this._virtalBoundId = -1;
	
	        /**
	         * If the object has been destroyed via destroy(). If true, it should not be used.
	         *
	         * @member {boolean}
	         * @private
	         * @readonly
	         */
	        _this._destroyed = false;
	
	        /**
	         * The ids under which this BaseTexture has been added to the base texture cache. This is
	         * automatically set as long as BaseTexture.addToCache is used, but may not be set if a
	         * BaseTexture is added directly to the BaseTextureCache array.
	         *
	         * @member {string[]}
	         */
	        _this.textureCacheIds = [];
	
	        // if no source passed don't try to load
	        if (source) {
	            _this.loadSource(source);
	        }
	
	        /**
	         * Fired when a not-immediately-available source finishes loading.
	         *
	         * @protected
	         * @event PIXI.BaseTexture#loaded
	         * @param {PIXI.BaseTexture} baseTexture - Resource loaded.
	         */
	
	        /**
	         * Fired when a not-immediately-available source fails to load.
	         *
	         * @protected
	         * @event PIXI.BaseTexture#error
	         * @param {PIXI.BaseTexture} baseTexture - Resource errored.
	         */
	
	        /**
	         * Fired when BaseTexture is updated.
	         *
	         * @protected
	         * @event PIXI.BaseTexture#update
	         * @param {PIXI.BaseTexture} baseTexture - Instance of texture being updated.
	         */
	
	        /**
	         * Fired when BaseTexture is destroyed.
	         *
	         * @protected
	         * @event PIXI.BaseTexture#dispose
	         * @param {PIXI.BaseTexture} baseTexture - Instance of texture being destroyed.
	         */
	        return _this;
	    }
	
	    /**
	     * Updates the texture on all the webgl renderers, this also assumes the src has changed.
	     *
	     * @fires PIXI.BaseTexture#update
	     */
	
	
	    _createClass(BaseTexture, [{
	        key: 'update',
	        value: function update() {
	            // Svg size is handled during load
	            if (this.imageType !== 'svg') {
	                this.realWidth = this.source.naturalWidth || this.source.videoWidth || this.source.width;
	                this.realHeight = this.source.naturalHeight || this.source.videoHeight || this.source.height;
	
	                this._updateDimensions();
	            }
	
	            this.emit('update', this);
	        }
	
	        /**
	         * Update dimensions from real values
	         */
	
	    }, {
	        key: '_updateDimensions',
	        value: function _updateDimensions() {
	            this.width = this.realWidth / this.resolution;
	            this.height = this.realHeight / this.resolution;
	
	            this.isPowerOfTwo = _bitTwiddle2.default.isPow2(this.realWidth) && _bitTwiddle2.default.isPow2(this.realHeight);
	        }
	
	        /**
	         * Load a source.
	         *
	         * If the source is not-immediately-available, such as an image that needs to be
	         * downloaded, then the 'loaded' or 'error' event will be dispatched in the future
	         * and `hasLoaded` will remain false after this call.
	         *
	         * The logic state after calling `loadSource` directly or indirectly (eg. `fromImage`, `new BaseTexture`) is:
	         *
	         *     if (texture.hasLoaded) {
	         *        // texture ready for use
	         *     } else if (texture.isLoading) {
	         *        // listen to 'loaded' and/or 'error' events on texture
	         *     } else {
	         *        // not loading, not going to load UNLESS the source is reloaded
	         *        // (it may still make sense to listen to the events)
	         *     }
	         *
	         * @protected
	         * @param {HTMLImageElement|HTMLCanvasElement} source - the source object of the texture.
	         */
	
	    }, {
	        key: 'loadSource',
	        value: function loadSource(source) {
	            var wasLoading = this.isLoading;
	
	            this.hasLoaded = false;
	            this.isLoading = false;
	
	            if (wasLoading && this.source) {
	                this.source.onload = null;
	                this.source.onerror = null;
	            }
	
	            var firstSourceLoaded = !this.source;
	
	            this.source = source;
	
	            // Apply source if loaded. Otherwise setup appropriate loading monitors.
	            if ((source.src && source.complete || source.getContext) && source.width && source.height) {
	                this._updateImageType();
	
	                if (this.imageType === 'svg') {
	                    this._loadSvgSource();
	                } else {
	                    this._sourceLoaded();
	                }
	
	                if (firstSourceLoaded) {
	                    // send loaded event if previous source was null and we have been passed a pre-loaded IMG element
	                    this.emit('loaded', this);
	                }
	            } else if (!source.getContext) {
	                // Image fail / not ready
	                this.isLoading = true;
	
	                var scope = this;
	
	                source.onload = function () {
	                    scope._updateImageType();
	                    source.onload = null;
	                    source.onerror = null;
	
	                    if (!scope.isLoading) {
	                        return;
	                    }
	
	                    scope.isLoading = false;
	                    scope._sourceLoaded();
	
	                    if (scope.imageType === 'svg') {
	                        scope._loadSvgSource();
	
	                        return;
	                    }
	
	                    scope.emit('loaded', scope);
	                };
	
	                source.onerror = function () {
	                    source.onload = null;
	                    source.onerror = null;
	
	                    if (!scope.isLoading) {
	                        return;
	                    }
	
	                    scope.isLoading = false;
	                    scope.emit('error', scope);
	                };
	
	                // Per http://www.w3.org/TR/html5/embedded-content-0.html#the-img-element
	                //   "The value of `complete` can thus change while a script is executing."
	                // So complete needs to be re-checked after the callbacks have been added..
	                // NOTE: complete will be true if the image has no src so best to check if the src is set.
	                if (source.complete && source.src) {
	                    // ..and if we're complete now, no need for callbacks
	                    source.onload = null;
	                    source.onerror = null;
	
	                    if (scope.imageType === 'svg') {
	                        scope._loadSvgSource();
	
	                        return;
	                    }
	
	                    this.isLoading = false;
	
	                    if (source.width && source.height) {
	                        this._sourceLoaded();
	
	                        // If any previous subscribers possible
	                        if (wasLoading) {
	                            this.emit('loaded', this);
	                        }
	                    }
	                    // If any previous subscribers possible
	                    else if (wasLoading) {
	                            this.emit('error', this);
	                        }
	                }
	            }
	        }
	
	        /**
	         * Updates type of the source image.
	         */
	
	    }, {
	        key: '_updateImageType',
	        value: function _updateImageType() {
	            if (!this.imageUrl) {
	                return;
	            }
	
	            var dataUri = (0, _utils.decomposeDataUri)(this.imageUrl);
	            var imageType = void 0;
	
	            if (dataUri && dataUri.mediaType === 'image') {
	                // Check for subType validity
	                var firstSubType = dataUri.subType.split('+')[0];
	
	                imageType = (0, _utils.getUrlFileExtension)('.' + firstSubType);
	
	                if (!imageType) {
	                    throw new Error('Invalid image type in data URI.');
	                }
	            } else {
	                imageType = (0, _utils.getUrlFileExtension)(this.imageUrl);
	
	                if (!imageType) {
	                    imageType = 'png';
	                }
	            }
	
	            this.imageType = imageType;
	        }
	
	        /**
	         * Checks if `source` is an SVG image and whether it's loaded via a URL or a data URI. Then calls
	         * `_loadSvgSourceUsingDataUri` or `_loadSvgSourceUsingXhr`.
	         */
	
	    }, {
	        key: '_loadSvgSource',
	        value: function _loadSvgSource() {
	            if (this.imageType !== 'svg') {
	                // Do nothing if source is not svg
	                return;
	            }
	
	            var dataUri = (0, _utils.decomposeDataUri)(this.imageUrl);
	
	            if (dataUri) {
	                this._loadSvgSourceUsingDataUri(dataUri);
	            } else {
	                // We got an URL, so we need to do an XHR to check the svg size
	                this._loadSvgSourceUsingXhr();
	            }
	        }
	
	        /**
	         * Reads an SVG string from data URI and then calls `_loadSvgSourceUsingString`.
	         *
	         * @param {string} dataUri - The data uri to load from.
	         */
	
	    }, {
	        key: '_loadSvgSourceUsingDataUri',
	        value: function _loadSvgSourceUsingDataUri(dataUri) {
	            var svgString = void 0;
	
	            if (dataUri.encoding === 'base64') {
	                if (!atob) {
	                    throw new Error('Your browser doesn\'t support base64 conversions.');
	                }
	                svgString = atob(dataUri.data);
	            } else {
	                svgString = dataUri.data;
	            }
	
	            this._loadSvgSourceUsingString(svgString);
	        }
	
	        /**
	         * Loads an SVG string from `imageUrl` using XHR and then calls `_loadSvgSourceUsingString`.
	         */
	
	    }, {
	        key: '_loadSvgSourceUsingXhr',
	        value: function _loadSvgSourceUsingXhr() {
	            var _this2 = this;
	
	            var svgXhr = new XMLHttpRequest();
	
	            // This throws error on IE, so SVG Document can't be used
	            // svgXhr.responseType = 'document';
	
	            // This is not needed since we load the svg as string (breaks IE too)
	            // but overrideMimeType() can be used to force the response to be parsed as XML
	            // svgXhr.overrideMimeType('image/svg+xml');
	
	            svgXhr.onload = function () {
	                if (svgXhr.readyState !== svgXhr.DONE || svgXhr.status !== 200) {
	                    throw new Error('Failed to load SVG using XHR.');
	                }
	
	                _this2._loadSvgSourceUsingString(svgXhr.response);
	            };
	
	            svgXhr.onerror = function () {
	                return _this2.emit('error', _this2);
	            };
	
	            svgXhr.open('GET', this.imageUrl, true);
	            svgXhr.send();
	        }
	
	        /**
	         * Loads texture using an SVG string. The original SVG Image is stored as `origSource` and the
	         * created canvas is the new `source`. The SVG is scaled using `sourceScale`. Called by
	         * `_loadSvgSourceUsingXhr` or `_loadSvgSourceUsingDataUri`.
	         *
	         * @param  {string} svgString SVG source as string
	         *
	         * @fires PIXI.BaseTexture#loaded
	         */
	
	    }, {
	        key: '_loadSvgSourceUsingString',
	        value: function _loadSvgSourceUsingString(svgString) {
	            var svgSize = (0, _utils.getSvgSize)(svgString);
	
	            var svgWidth = svgSize.width;
	            var svgHeight = svgSize.height;
	
	            if (!svgWidth || !svgHeight) {
	                throw new Error('The SVG image must have width and height defined (in pixels), canvas API needs them.');
	            }
	
	            // Scale realWidth and realHeight
	            this.realWidth = Math.round(svgWidth * this.sourceScale);
	            this.realHeight = Math.round(svgHeight * this.sourceScale);
	
	            this._updateDimensions();
	
	            // Create a canvas element
	            var canvas = document.createElement('canvas');
	
	            canvas.width = this.realWidth;
	            canvas.height = this.realHeight;
	            canvas._pixiId = 'canvas_' + (0, _utils.uid)();
	
	            // Draw the Svg to the canvas
	            canvas.getContext('2d').drawImage(this.source, 0, 0, svgWidth, svgHeight, 0, 0, this.realWidth, this.realHeight);
	
	            // Replace the original source image with the canvas
	            this.origSource = this.source;
	            this.source = canvas;
	
	            // Add also the canvas in cache (destroy clears by `imageUrl` and `source._pixiId`)
	            BaseTexture.addToCache(this, canvas._pixiId);
	
	            this.isLoading = false;
	            this._sourceLoaded();
	            this.emit('loaded', this);
	        }
	
	        /**
	         * Used internally to update the width, height, and some other tracking vars once
	         * a source has successfully loaded.
	         *
	         * @private
	         */
	
	    }, {
	        key: '_sourceLoaded',
	        value: function _sourceLoaded() {
	            this.hasLoaded = true;
	            this.update();
	        }
	
	        /**
	         * Destroys this base texture
	         *
	         */
	
	    }, {
	        key: 'destroy',
	        value: function destroy() {
	            if (this.imageUrl) {
	                delete _utils.TextureCache[this.imageUrl];
	
	                this.imageUrl = null;
	
	                if (!navigator.isCocoonJS) {
	                    this.source.src = '';
	                }
	            }
	
	            this.source = null;
	
	            this.dispose();
	
	            BaseTexture.removeFromCache(this);
	            this.textureCacheIds = null;
	
	            this._destroyed = true;
	        }
	
	        /**
	         * Frees the texture from WebGL memory without destroying this texture object.
	         * This means you can still use the texture later which will upload it to GPU
	         * memory again.
	         *
	         * @fires PIXI.BaseTexture#dispose
	         */
	
	    }, {
	        key: 'dispose',
	        value: function dispose() {
	            this.emit('dispose', this);
	        }
	
	        /**
	         * Changes the source image of the texture.
	         * The original source must be an Image element.
	         *
	         * @param {string} newSrc - the path of the image
	         */
	
	    }, {
	        key: 'updateSourceImage',
	        value: function updateSourceImage(newSrc) {
	            this.source.src = newSrc;
	
	            this.loadSource(this.source);
	        }
	
	        /**
	         * Helper function that creates a base texture from the given image url.
	         * If the image is not in the base texture cache it will be created and loaded.
	         *
	         * @static
	         * @param {string} imageUrl - The image url of the texture
	         * @param {boolean} [crossorigin=(auto)] - Should use anonymous CORS? Defaults to true if the URL is not a data-URI.
	         * @param {number} [scaleMode=PIXI.settings.SCALE_MODE] - See {@link PIXI.SCALE_MODES} for possible values
	         * @param {number} [sourceScale=(auto)] - Scale for the original image, used with Svg images.
	         * @return {PIXI.BaseTexture} The new base texture.
	         */
	
	    }], [{
	        key: 'fromImage',
	        value: function fromImage(imageUrl, crossorigin, scaleMode, sourceScale) {
	            var baseTexture = _utils.BaseTextureCache[imageUrl];
	
	            if (!baseTexture) {
	                // new Image() breaks tex loading in some versions of Chrome.
	                // See https://code.google.com/p/chromium/issues/detail?id=238071
	                var image = new Image(); // document.createElement('img');
	
	                if (crossorigin === undefined && imageUrl.indexOf('data:') !== 0) {
	                    image.crossOrigin = (0, _determineCrossOrigin2.default)(imageUrl);
	                } else if (crossorigin) {
	                    image.crossOrigin = typeof crossorigin === 'string' ? crossorigin : 'anonymous';
	                }
	
	                baseTexture = new BaseTexture(image, scaleMode);
	                baseTexture.imageUrl = imageUrl;
	
	                if (sourceScale) {
	                    baseTexture.sourceScale = sourceScale;
	                }
	
	                // if there is an @2x at the end of the url we are going to assume its a highres image
	                baseTexture.resolution = (0, _utils.getResolutionOfUrl)(imageUrl);
	
	                image.src = imageUrl; // Setting this triggers load
	
	                BaseTexture.addToCache(baseTexture, imageUrl);
	            }
	
	            return baseTexture;
	        }
	
	        /**
	         * Helper function that creates a base texture from the given canvas element.
	         *
	         * @static
	         * @param {HTMLCanvasElement} canvas - The canvas element source of the texture
	         * @param {number} scaleMode - See {@link PIXI.SCALE_MODES} for possible values
	         * @param {string} [origin='canvas'] - A string origin of who created the base texture
	         * @return {PIXI.BaseTexture} The new base texture.
	         */
	
	    }, {
	        key: 'fromCanvas',
	        value: function fromCanvas(canvas, scaleMode) {
	            var origin = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'canvas';
	
	            if (!canvas._pixiId) {
	                canvas._pixiId = origin + '_' + (0, _utils.uid)();
	            }
	
	            var baseTexture = _utils.BaseTextureCache[canvas._pixiId];
	
	            if (!baseTexture) {
	                baseTexture = new BaseTexture(canvas, scaleMode);
	                BaseTexture.addToCache(baseTexture, canvas._pixiId);
	            }
	
	            return baseTexture;
	        }
	
	        /**
	         * Helper function that creates a base texture based on the source you provide.
	         * The source can be - image url, image element, canvas element. If the
	         * source is an image url or an image element and not in the base texture
	         * cache, it will be created and loaded.
	         *
	         * @static
	         * @param {string|HTMLImageElement|HTMLCanvasElement} source - The source to create base texture from.
	         * @param {number} [scaleMode=PIXI.settings.SCALE_MODE] - See {@link PIXI.SCALE_MODES} for possible values
	         * @param {number} [sourceScale=(auto)] - Scale for the original image, used with Svg images.
	         * @return {PIXI.BaseTexture} The new base texture.
	         */
	
	    }, {
	        key: 'from',
	        value: function from(source, scaleMode, sourceScale) {
	            if (typeof source === 'string') {
	                return BaseTexture.fromImage(source, undefined, scaleMode, sourceScale);
	            } else if (source instanceof HTMLImageElement) {
	                var imageUrl = source.src;
	                var baseTexture = _utils.BaseTextureCache[imageUrl];
	
	                if (!baseTexture) {
	                    baseTexture = new BaseTexture(source, scaleMode);
	                    baseTexture.imageUrl = imageUrl;
	
	                    if (sourceScale) {
	                        baseTexture.sourceScale = sourceScale;
	                    }
	
	                    // if there is an @2x at the end of the url we are going to assume its a highres image
	                    baseTexture.resolution = (0, _utils.getResolutionOfUrl)(imageUrl);
	
	                    BaseTexture.addToCache(baseTexture, imageUrl);
	                }
	
	                return baseTexture;
	            } else if (source instanceof HTMLCanvasElement) {
	                return BaseTexture.fromCanvas(source, scaleMode);
	            }
	
	            // lets assume its a base texture!
	            return source;
	        }
	
	        /**
	         * Adds a BaseTexture to the global BaseTextureCache. This cache is shared across the whole PIXI object.
	         *
	         * @static
	         * @param {PIXI.BaseTexture} baseTexture - The BaseTexture to add to the cache.
	         * @param {string} id - The id that the BaseTexture will be stored against.
	         */
	
	    }, {
	        key: 'addToCache',
	        value: function addToCache(baseTexture, id) {
	            if (id) {
	                if (baseTexture.textureCacheIds.indexOf(id) === -1) {
	                    baseTexture.textureCacheIds.push(id);
	                }
	
	                // @if DEBUG
	                /* eslint-disable no-console */
	                if (_utils.BaseTextureCache[id]) {
	                    console.warn('BaseTexture added to the cache with an id [' + id + '] that already had an entry');
	                }
	                /* eslint-enable no-console */
	                // @endif
	
	                _utils.BaseTextureCache[id] = baseTexture;
	            }
	        }
	
	        /**
	         * Remove a BaseTexture from the global BaseTextureCache.
	         *
	         * @static
	         * @param {string|PIXI.BaseTexture} baseTexture - id of a BaseTexture to be removed, or a BaseTexture instance itself.
	         * @return {PIXI.BaseTexture|null} The BaseTexture that was removed.
	         */
	
	    }, {
	        key: 'removeFromCache',
	        value: function removeFromCache(baseTexture) {
	            if (typeof baseTexture === 'string') {
	                var baseTextureFromCache = _utils.BaseTextureCache[baseTexture];
	
	                if (baseTextureFromCache) {
	                    var index = baseTextureFromCache.textureCacheIds.indexOf(baseTexture);
	
	                    if (index > -1) {
	                        baseTextureFromCache.textureCacheIds.splice(index, 1);
	                    }
	
	                    delete _utils.BaseTextureCache[baseTexture];
	
	                    return baseTextureFromCache;
	                }
	            } else if (baseTexture && baseTexture.textureCacheIds) {
	                for (var i = 0; i < baseTexture.textureCacheIds.length; ++i) {
	                    delete _utils.BaseTextureCache[baseTexture.textureCacheIds[i]];
	                }
	
	                baseTexture.textureCacheIds.length = 0;
	
	                return baseTexture;
	            }
	
	            return null;
	        }
	    }]);
	
	    return BaseTexture;
	}(_eventemitter2.default);
	
	exports.default = BaseTexture;

/***/ }),
/* 361 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = determineCrossOrigin;
	
	var _url2 = __webpack_require__(362);
	
	var _url3 = _interopRequireDefault(_url2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var tempAnchor = void 0;
	
	/**
	 * Sets the `crossOrigin` property for this resource based on if the url
	 * for this resource is cross-origin. If crossOrigin was manually set, this
	 * function does nothing.
	 * Nipped from the resource loader!
	 *
	 * @ignore
	 * @param {string} url - The url to test.
	 * @param {object} [loc=window.location] - The location object to test against.
	 * @return {string} The crossOrigin value to use (or empty string for none).
	 */
	function determineCrossOrigin(url) {
	    var loc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window.location;
	
	    // data: and javascript: urls are considered same-origin
	    if (url.indexOf('data:') === 0) {
	        return '';
	    }
	
	    // default is window.location
	    loc = loc || window.location;
	
	    if (!tempAnchor) {
	        tempAnchor = document.createElement('a');
	    }
	
	    // let the browser determine the full href for the url of this resource and then
	    // parse with the node url lib, we can't use the properties of the anchor element
	    // because they don't work in IE9 :(
	    tempAnchor.href = url;
	    url = _url3.default.parse(tempAnchor.href);
	
	    var samePort = !url.port && loc.port === '' || url.port === loc.port;
	
	    // if cross origin
	    if (url.hostname !== loc.hostname || !samePort || url.protocol !== loc.protocol) {
	        return 'anonymous';
	    }
	
	    return '';
	}

/***/ }),
/* 362 */
/***/ (function(module, exports, __webpack_require__) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	'use strict';
	
	var punycode = __webpack_require__(363);
	var util = __webpack_require__(365);
	
	exports.parse = urlParse;
	exports.resolve = urlResolve;
	exports.resolveObject = urlResolveObject;
	exports.format = urlFormat;
	
	exports.Url = Url;
	
	function Url() {
	  this.protocol = null;
	  this.slashes = null;
	  this.auth = null;
	  this.host = null;
	  this.port = null;
	  this.hostname = null;
	  this.hash = null;
	  this.search = null;
	  this.query = null;
	  this.pathname = null;
	  this.path = null;
	  this.href = null;
	}
	
	// Reference: RFC 3986, RFC 1808, RFC 2396
	
	// define these here so at least they only have to be
	// compiled once on the first module load.
	var protocolPattern = /^([a-z0-9.+-]+:)/i,
	    portPattern = /:[0-9]*$/,
	
	    // Special case for a simple path URL
	    simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
	
	    // RFC 2396: characters reserved for delimiting URLs.
	    // We actually just auto-escape these.
	    delims = ['<', '>', '"', '`', ' ', '\r', '\n', '\t'],
	
	    // RFC 2396: characters not allowed for various reasons.
	    unwise = ['{', '}', '|', '\\', '^', '`'].concat(delims),
	
	    // Allowed by RFCs, but cause of XSS attacks.  Always escape these.
	    autoEscape = ['\''].concat(unwise),
	    // Characters that are never ever allowed in a hostname.
	    // Note that any invalid chars are also handled, but these
	    // are the ones that are *expected* to be seen, so we fast-path
	    // them.
	    nonHostChars = ['%', '/', '?', ';', '#'].concat(autoEscape),
	    hostEndingChars = ['/', '?', '#'],
	    hostnameMaxLen = 255,
	    hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/,
	    hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
	    // protocols that can allow "unsafe" and "unwise" chars.
	    unsafeProtocol = {
	      'javascript': true,
	      'javascript:': true
	    },
	    // protocols that never have a hostname.
	    hostlessProtocol = {
	      'javascript': true,
	      'javascript:': true
	    },
	    // protocols that always contain a // bit.
	    slashedProtocol = {
	      'http': true,
	      'https': true,
	      'ftp': true,
	      'gopher': true,
	      'file': true,
	      'http:': true,
	      'https:': true,
	      'ftp:': true,
	      'gopher:': true,
	      'file:': true
	    },
	    querystring = __webpack_require__(366);
	
	function urlParse(url, parseQueryString, slashesDenoteHost) {
	  if (url && util.isObject(url) && url instanceof Url) return url;
	
	  var u = new Url;
	  u.parse(url, parseQueryString, slashesDenoteHost);
	  return u;
	}
	
	Url.prototype.parse = function(url, parseQueryString, slashesDenoteHost) {
	  if (!util.isString(url)) {
	    throw new TypeError("Parameter 'url' must be a string, not " + typeof url);
	  }
	
	  // Copy chrome, IE, opera backslash-handling behavior.
	  // Back slashes before the query string get converted to forward slashes
	  // See: https://code.google.com/p/chromium/issues/detail?id=25916
	  var queryIndex = url.indexOf('?'),
	      splitter =
	          (queryIndex !== -1 && queryIndex < url.indexOf('#')) ? '?' : '#',
	      uSplit = url.split(splitter),
	      slashRegex = /\\/g;
	  uSplit[0] = uSplit[0].replace(slashRegex, '/');
	  url = uSplit.join(splitter);
	
	  var rest = url;
	
	  // trim before proceeding.
	  // This is to support parse stuff like "  http://foo.com  \n"
	  rest = rest.trim();
	
	  if (!slashesDenoteHost && url.split('#').length === 1) {
	    // Try fast path regexp
	    var simplePath = simplePathPattern.exec(rest);
	    if (simplePath) {
	      this.path = rest;
	      this.href = rest;
	      this.pathname = simplePath[1];
	      if (simplePath[2]) {
	        this.search = simplePath[2];
	        if (parseQueryString) {
	          this.query = querystring.parse(this.search.substr(1));
	        } else {
	          this.query = this.search.substr(1);
	        }
	      } else if (parseQueryString) {
	        this.search = '';
	        this.query = {};
	      }
	      return this;
	    }
	  }
	
	  var proto = protocolPattern.exec(rest);
	  if (proto) {
	    proto = proto[0];
	    var lowerProto = proto.toLowerCase();
	    this.protocol = lowerProto;
	    rest = rest.substr(proto.length);
	  }
	
	  // figure out if it's got a host
	  // user@server is *always* interpreted as a hostname, and url
	  // resolution will treat //foo/bar as host=foo,path=bar because that's
	  // how the browser resolves relative URLs.
	  if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
	    var slashes = rest.substr(0, 2) === '//';
	    if (slashes && !(proto && hostlessProtocol[proto])) {
	      rest = rest.substr(2);
	      this.slashes = true;
	    }
	  }
	
	  if (!hostlessProtocol[proto] &&
	      (slashes || (proto && !slashedProtocol[proto]))) {
	
	    // there's a hostname.
	    // the first instance of /, ?, ;, or # ends the host.
	    //
	    // If there is an @ in the hostname, then non-host chars *are* allowed
	    // to the left of the last @ sign, unless some host-ending character
	    // comes *before* the @-sign.
	    // URLs are obnoxious.
	    //
	    // ex:
	    // http://a@b@c/ => user:a@b host:c
	    // http://a@b?@c => user:a host:c path:/?@c
	
	    // v0.12 TODO(isaacs): This is not quite how Chrome does things.
	    // Review our test case against browsers more comprehensively.
	
	    // find the first instance of any hostEndingChars
	    var hostEnd = -1;
	    for (var i = 0; i < hostEndingChars.length; i++) {
	      var hec = rest.indexOf(hostEndingChars[i]);
	      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
	        hostEnd = hec;
	    }
	
	    // at this point, either we have an explicit point where the
	    // auth portion cannot go past, or the last @ char is the decider.
	    var auth, atSign;
	    if (hostEnd === -1) {
	      // atSign can be anywhere.
	      atSign = rest.lastIndexOf('@');
	    } else {
	      // atSign must be in auth portion.
	      // http://a@b/c@d => host:b auth:a path:/c@d
	      atSign = rest.lastIndexOf('@', hostEnd);
	    }
	
	    // Now we have a portion which is definitely the auth.
	    // Pull that off.
	    if (atSign !== -1) {
	      auth = rest.slice(0, atSign);
	      rest = rest.slice(atSign + 1);
	      this.auth = decodeURIComponent(auth);
	    }
	
	    // the host is the remaining to the left of the first non-host char
	    hostEnd = -1;
	    for (var i = 0; i < nonHostChars.length; i++) {
	      var hec = rest.indexOf(nonHostChars[i]);
	      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
	        hostEnd = hec;
	    }
	    // if we still have not hit it, then the entire thing is a host.
	    if (hostEnd === -1)
	      hostEnd = rest.length;
	
	    this.host = rest.slice(0, hostEnd);
	    rest = rest.slice(hostEnd);
	
	    // pull out port.
	    this.parseHost();
	
	    // we've indicated that there is a hostname,
	    // so even if it's empty, it has to be present.
	    this.hostname = this.hostname || '';
	
	    // if hostname begins with [ and ends with ]
	    // assume that it's an IPv6 address.
	    var ipv6Hostname = this.hostname[0] === '[' &&
	        this.hostname[this.hostname.length - 1] === ']';
	
	    // validate a little.
	    if (!ipv6Hostname) {
	      var hostparts = this.hostname.split(/\./);
	      for (var i = 0, l = hostparts.length; i < l; i++) {
	        var part = hostparts[i];
	        if (!part) continue;
	        if (!part.match(hostnamePartPattern)) {
	          var newpart = '';
	          for (var j = 0, k = part.length; j < k; j++) {
	            if (part.charCodeAt(j) > 127) {
	              // we replace non-ASCII char with a temporary placeholder
	              // we need this to make sure size of hostname is not
	              // broken by replacing non-ASCII by nothing
	              newpart += 'x';
	            } else {
	              newpart += part[j];
	            }
	          }
	          // we test again with ASCII char only
	          if (!newpart.match(hostnamePartPattern)) {
	            var validParts = hostparts.slice(0, i);
	            var notHost = hostparts.slice(i + 1);
	            var bit = part.match(hostnamePartStart);
	            if (bit) {
	              validParts.push(bit[1]);
	              notHost.unshift(bit[2]);
	            }
	            if (notHost.length) {
	              rest = '/' + notHost.join('.') + rest;
	            }
	            this.hostname = validParts.join('.');
	            break;
	          }
	        }
	      }
	    }
	
	    if (this.hostname.length > hostnameMaxLen) {
	      this.hostname = '';
	    } else {
	      // hostnames are always lower case.
	      this.hostname = this.hostname.toLowerCase();
	    }
	
	    if (!ipv6Hostname) {
	      // IDNA Support: Returns a punycoded representation of "domain".
	      // It only converts parts of the domain name that
	      // have non-ASCII characters, i.e. it doesn't matter if
	      // you call it with a domain that already is ASCII-only.
	      this.hostname = punycode.toASCII(this.hostname);
	    }
	
	    var p = this.port ? ':' + this.port : '';
	    var h = this.hostname || '';
	    this.host = h + p;
	    this.href += this.host;
	
	    // strip [ and ] from the hostname
	    // the host field still retains them, though
	    if (ipv6Hostname) {
	      this.hostname = this.hostname.substr(1, this.hostname.length - 2);
	      if (rest[0] !== '/') {
	        rest = '/' + rest;
	      }
	    }
	  }
	
	  // now rest is set to the post-host stuff.
	  // chop off any delim chars.
	  if (!unsafeProtocol[lowerProto]) {
	
	    // First, make 100% sure that any "autoEscape" chars get
	    // escaped, even if encodeURIComponent doesn't think they
	    // need to be.
	    for (var i = 0, l = autoEscape.length; i < l; i++) {
	      var ae = autoEscape[i];
	      if (rest.indexOf(ae) === -1)
	        continue;
	      var esc = encodeURIComponent(ae);
	      if (esc === ae) {
	        esc = escape(ae);
	      }
	      rest = rest.split(ae).join(esc);
	    }
	  }
	
	
	  // chop off from the tail first.
	  var hash = rest.indexOf('#');
	  if (hash !== -1) {
	    // got a fragment string.
	    this.hash = rest.substr(hash);
	    rest = rest.slice(0, hash);
	  }
	  var qm = rest.indexOf('?');
	  if (qm !== -1) {
	    this.search = rest.substr(qm);
	    this.query = rest.substr(qm + 1);
	    if (parseQueryString) {
	      this.query = querystring.parse(this.query);
	    }
	    rest = rest.slice(0, qm);
	  } else if (parseQueryString) {
	    // no query string, but parseQueryString still requested
	    this.search = '';
	    this.query = {};
	  }
	  if (rest) this.pathname = rest;
	  if (slashedProtocol[lowerProto] &&
	      this.hostname && !this.pathname) {
	    this.pathname = '/';
	  }
	
	  //to support http.request
	  if (this.pathname || this.search) {
	    var p = this.pathname || '';
	    var s = this.search || '';
	    this.path = p + s;
	  }
	
	  // finally, reconstruct the href based on what has been validated.
	  this.href = this.format();
	  return this;
	};
	
	// format a parsed object into a url string
	function urlFormat(obj) {
	  // ensure it's an object, and not a string url.
	  // If it's an obj, this is a no-op.
	  // this way, you can call url_format() on strings
	  // to clean up potentially wonky urls.
	  if (util.isString(obj)) obj = urlParse(obj);
	  if (!(obj instanceof Url)) return Url.prototype.format.call(obj);
	  return obj.format();
	}
	
	Url.prototype.format = function() {
	  var auth = this.auth || '';
	  if (auth) {
	    auth = encodeURIComponent(auth);
	    auth = auth.replace(/%3A/i, ':');
	    auth += '@';
	  }
	
	  var protocol = this.protocol || '',
	      pathname = this.pathname || '',
	      hash = this.hash || '',
	      host = false,
	      query = '';
	
	  if (this.host) {
	    host = auth + this.host;
	  } else if (this.hostname) {
	    host = auth + (this.hostname.indexOf(':') === -1 ?
	        this.hostname :
	        '[' + this.hostname + ']');
	    if (this.port) {
	      host += ':' + this.port;
	    }
	  }
	
	  if (this.query &&
	      util.isObject(this.query) &&
	      Object.keys(this.query).length) {
	    query = querystring.stringify(this.query);
	  }
	
	  var search = this.search || (query && ('?' + query)) || '';
	
	  if (protocol && protocol.substr(-1) !== ':') protocol += ':';
	
	  // only the slashedProtocols get the //.  Not mailto:, xmpp:, etc.
	  // unless they had them to begin with.
	  if (this.slashes ||
	      (!protocol || slashedProtocol[protocol]) && host !== false) {
	    host = '//' + (host || '');
	    if (pathname && pathname.charAt(0) !== '/') pathname = '/' + pathname;
	  } else if (!host) {
	    host = '';
	  }
	
	  if (hash && hash.charAt(0) !== '#') hash = '#' + hash;
	  if (search && search.charAt(0) !== '?') search = '?' + search;
	
	  pathname = pathname.replace(/[?#]/g, function(match) {
	    return encodeURIComponent(match);
	  });
	  search = search.replace('#', '%23');
	
	  return protocol + host + pathname + search + hash;
	};
	
	function urlResolve(source, relative) {
	  return urlParse(source, false, true).resolve(relative);
	}
	
	Url.prototype.resolve = function(relative) {
	  return this.resolveObject(urlParse(relative, false, true)).format();
	};
	
	function urlResolveObject(source, relative) {
	  if (!source) return relative;
	  return urlParse(source, false, true).resolveObject(relative);
	}
	
	Url.prototype.resolveObject = function(relative) {
	  if (util.isString(relative)) {
	    var rel = new Url();
	    rel.parse(relative, false, true);
	    relative = rel;
	  }
	
	  var result = new Url();
	  var tkeys = Object.keys(this);
	  for (var tk = 0; tk < tkeys.length; tk++) {
	    var tkey = tkeys[tk];
	    result[tkey] = this[tkey];
	  }
	
	  // hash is always overridden, no matter what.
	  // even href="" will remove it.
	  result.hash = relative.hash;
	
	  // if the relative url is empty, then there's nothing left to do here.
	  if (relative.href === '') {
	    result.href = result.format();
	    return result;
	  }
	
	  // hrefs like //foo/bar always cut to the protocol.
	  if (relative.slashes && !relative.protocol) {
	    // take everything except the protocol from relative
	    var rkeys = Object.keys(relative);
	    for (var rk = 0; rk < rkeys.length; rk++) {
	      var rkey = rkeys[rk];
	      if (rkey !== 'protocol')
	        result[rkey] = relative[rkey];
	    }
	
	    //urlParse appends trailing / to urls like http://www.example.com
	    if (slashedProtocol[result.protocol] &&
	        result.hostname && !result.pathname) {
	      result.path = result.pathname = '/';
	    }
	
	    result.href = result.format();
	    return result;
	  }
	
	  if (relative.protocol && relative.protocol !== result.protocol) {
	    // if it's a known url protocol, then changing
	    // the protocol does weird things
	    // first, if it's not file:, then we MUST have a host,
	    // and if there was a path
	    // to begin with, then we MUST have a path.
	    // if it is file:, then the host is dropped,
	    // because that's known to be hostless.
	    // anything else is assumed to be absolute.
	    if (!slashedProtocol[relative.protocol]) {
	      var keys = Object.keys(relative);
	      for (var v = 0; v < keys.length; v++) {
	        var k = keys[v];
	        result[k] = relative[k];
	      }
	      result.href = result.format();
	      return result;
	    }
	
	    result.protocol = relative.protocol;
	    if (!relative.host && !hostlessProtocol[relative.protocol]) {
	      var relPath = (relative.pathname || '').split('/');
	      while (relPath.length && !(relative.host = relPath.shift()));
	      if (!relative.host) relative.host = '';
	      if (!relative.hostname) relative.hostname = '';
	      if (relPath[0] !== '') relPath.unshift('');
	      if (relPath.length < 2) relPath.unshift('');
	      result.pathname = relPath.join('/');
	    } else {
	      result.pathname = relative.pathname;
	    }
	    result.search = relative.search;
	    result.query = relative.query;
	    result.host = relative.host || '';
	    result.auth = relative.auth;
	    result.hostname = relative.hostname || relative.host;
	    result.port = relative.port;
	    // to support http.request
	    if (result.pathname || result.search) {
	      var p = result.pathname || '';
	      var s = result.search || '';
	      result.path = p + s;
	    }
	    result.slashes = result.slashes || relative.slashes;
	    result.href = result.format();
	    return result;
	  }
	
	  var isSourceAbs = (result.pathname && result.pathname.charAt(0) === '/'),
	      isRelAbs = (
	          relative.host ||
	          relative.pathname && relative.pathname.charAt(0) === '/'
	      ),
	      mustEndAbs = (isRelAbs || isSourceAbs ||
	                    (result.host && relative.pathname)),
	      removeAllDots = mustEndAbs,
	      srcPath = result.pathname && result.pathname.split('/') || [],
	      relPath = relative.pathname && relative.pathname.split('/') || [],
	      psychotic = result.protocol && !slashedProtocol[result.protocol];
	
	  // if the url is a non-slashed url, then relative
	  // links like ../.. should be able
	  // to crawl up to the hostname, as well.  This is strange.
	  // result.protocol has already been set by now.
	  // Later on, put the first path part into the host field.
	  if (psychotic) {
	    result.hostname = '';
	    result.port = null;
	    if (result.host) {
	      if (srcPath[0] === '') srcPath[0] = result.host;
	      else srcPath.unshift(result.host);
	    }
	    result.host = '';
	    if (relative.protocol) {
	      relative.hostname = null;
	      relative.port = null;
	      if (relative.host) {
	        if (relPath[0] === '') relPath[0] = relative.host;
	        else relPath.unshift(relative.host);
	      }
	      relative.host = null;
	    }
	    mustEndAbs = mustEndAbs && (relPath[0] === '' || srcPath[0] === '');
	  }
	
	  if (isRelAbs) {
	    // it's absolute.
	    result.host = (relative.host || relative.host === '') ?
	                  relative.host : result.host;
	    result.hostname = (relative.hostname || relative.hostname === '') ?
	                      relative.hostname : result.hostname;
	    result.search = relative.search;
	    result.query = relative.query;
	    srcPath = relPath;
	    // fall through to the dot-handling below.
	  } else if (relPath.length) {
	    // it's relative
	    // throw away the existing file, and take the new path instead.
	    if (!srcPath) srcPath = [];
	    srcPath.pop();
	    srcPath = srcPath.concat(relPath);
	    result.search = relative.search;
	    result.query = relative.query;
	  } else if (!util.isNullOrUndefined(relative.search)) {
	    // just pull out the search.
	    // like href='?foo'.
	    // Put this after the other two cases because it simplifies the booleans
	    if (psychotic) {
	      result.hostname = result.host = srcPath.shift();
	      //occationaly the auth can get stuck only in host
	      //this especially happens in cases like
	      //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
	      var authInHost = result.host && result.host.indexOf('@') > 0 ?
	                       result.host.split('@') : false;
	      if (authInHost) {
	        result.auth = authInHost.shift();
	        result.host = result.hostname = authInHost.shift();
	      }
	    }
	    result.search = relative.search;
	    result.query = relative.query;
	    //to support http.request
	    if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
	      result.path = (result.pathname ? result.pathname : '') +
	                    (result.search ? result.search : '');
	    }
	    result.href = result.format();
	    return result;
	  }
	
	  if (!srcPath.length) {
	    // no path at all.  easy.
	    // we've already handled the other stuff above.
	    result.pathname = null;
	    //to support http.request
	    if (result.search) {
	      result.path = '/' + result.search;
	    } else {
	      result.path = null;
	    }
	    result.href = result.format();
	    return result;
	  }
	
	  // if a url ENDs in . or .., then it must get a trailing slash.
	  // however, if it ends in anything else non-slashy,
	  // then it must NOT get a trailing slash.
	  var last = srcPath.slice(-1)[0];
	  var hasTrailingSlash = (
	      (result.host || relative.host || srcPath.length > 1) &&
	      (last === '.' || last === '..') || last === '');
	
	  // strip single dots, resolve double dots to parent dir
	  // if the path tries to go above the root, `up` ends up > 0
	  var up = 0;
	  for (var i = srcPath.length; i >= 0; i--) {
	    last = srcPath[i];
	    if (last === '.') {
	      srcPath.splice(i, 1);
	    } else if (last === '..') {
	      srcPath.splice(i, 1);
	      up++;
	    } else if (up) {
	      srcPath.splice(i, 1);
	      up--;
	    }
	  }
	
	  // if the path is allowed to go above the root, restore leading ..s
	  if (!mustEndAbs && !removeAllDots) {
	    for (; up--; up) {
	      srcPath.unshift('..');
	    }
	  }
	
	  if (mustEndAbs && srcPath[0] !== '' &&
	      (!srcPath[0] || srcPath[0].charAt(0) !== '/')) {
	    srcPath.unshift('');
	  }
	
	  if (hasTrailingSlash && (srcPath.join('/').substr(-1) !== '/')) {
	    srcPath.push('');
	  }
	
	  var isAbsolute = srcPath[0] === '' ||
	      (srcPath[0] && srcPath[0].charAt(0) === '/');
	
	  // put the host back
	  if (psychotic) {
	    result.hostname = result.host = isAbsolute ? '' :
	                                    srcPath.length ? srcPath.shift() : '';
	    //occationaly the auth can get stuck only in host
	    //this especially happens in cases like
	    //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
	    var authInHost = result.host && result.host.indexOf('@') > 0 ?
	                     result.host.split('@') : false;
	    if (authInHost) {
	      result.auth = authInHost.shift();
	      result.host = result.hostname = authInHost.shift();
	    }
	  }
	
	  mustEndAbs = mustEndAbs || (result.host && srcPath.length);
	
	  if (mustEndAbs && !isAbsolute) {
	    srcPath.unshift('');
	  }
	
	  if (!srcPath.length) {
	    result.pathname = null;
	    result.path = null;
	  } else {
	    result.pathname = srcPath.join('/');
	  }
	
	  //to support request.http
	  if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
	    result.path = (result.pathname ? result.pathname : '') +
	                  (result.search ? result.search : '');
	  }
	  result.auth = relative.auth || result.auth;
	  result.slashes = result.slashes || relative.slashes;
	  result.href = result.format();
	  return result;
	};
	
	Url.prototype.parseHost = function() {
	  var host = this.host;
	  var port = portPattern.exec(host);
	  if (port) {
	    port = port[0];
	    if (port !== ':') {
	      this.port = port.substr(1);
	    }
	    host = host.substr(0, host.length - port.length);
	  }
	  if (host) this.hostname = host;
	};


/***/ }),
/* 363 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module, global) {/*! https://mths.be/punycode v1.4.1 by @mathias */
	;(function(root) {
	
		/** Detect free variables */
		var freeExports = typeof exports == 'object' && exports &&
			!exports.nodeType && exports;
		var freeModule = typeof module == 'object' && module &&
			!module.nodeType && module;
		var freeGlobal = typeof global == 'object' && global;
		if (
			freeGlobal.global === freeGlobal ||
			freeGlobal.window === freeGlobal ||
			freeGlobal.self === freeGlobal
		) {
			root = freeGlobal;
		}
	
		/**
		 * The `punycode` object.
		 * @name punycode
		 * @type Object
		 */
		var punycode,
	
		/** Highest positive signed 32-bit float value */
		maxInt = 2147483647, // aka. 0x7FFFFFFF or 2^31-1
	
		/** Bootstring parameters */
		base = 36,
		tMin = 1,
		tMax = 26,
		skew = 38,
		damp = 700,
		initialBias = 72,
		initialN = 128, // 0x80
		delimiter = '-', // '\x2D'
	
		/** Regular expressions */
		regexPunycode = /^xn--/,
		regexNonASCII = /[^\x20-\x7E]/, // unprintable ASCII chars + non-ASCII chars
		regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, // RFC 3490 separators
	
		/** Error messages */
		errors = {
			'overflow': 'Overflow: input needs wider integers to process',
			'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
			'invalid-input': 'Invalid input'
		},
	
		/** Convenience shortcuts */
		baseMinusTMin = base - tMin,
		floor = Math.floor,
		stringFromCharCode = String.fromCharCode,
	
		/** Temporary variable */
		key;
	
		/*--------------------------------------------------------------------------*/
	
		/**
		 * A generic error utility function.
		 * @private
		 * @param {String} type The error type.
		 * @returns {Error} Throws a `RangeError` with the applicable error message.
		 */
		function error(type) {
			throw new RangeError(errors[type]);
		}
	
		/**
		 * A generic `Array#map` utility function.
		 * @private
		 * @param {Array} array The array to iterate over.
		 * @param {Function} callback The function that gets called for every array
		 * item.
		 * @returns {Array} A new array of values returned by the callback function.
		 */
		function map(array, fn) {
			var length = array.length;
			var result = [];
			while (length--) {
				result[length] = fn(array[length]);
			}
			return result;
		}
	
		/**
		 * A simple `Array#map`-like wrapper to work with domain name strings or email
		 * addresses.
		 * @private
		 * @param {String} domain The domain name or email address.
		 * @param {Function} callback The function that gets called for every
		 * character.
		 * @returns {Array} A new string of characters returned by the callback
		 * function.
		 */
		function mapDomain(string, fn) {
			var parts = string.split('@');
			var result = '';
			if (parts.length > 1) {
				// In email addresses, only the domain name should be punycoded. Leave
				// the local part (i.e. everything up to `@`) intact.
				result = parts[0] + '@';
				string = parts[1];
			}
			// Avoid `split(regex)` for IE8 compatibility. See #17.
			string = string.replace(regexSeparators, '\x2E');
			var labels = string.split('.');
			var encoded = map(labels, fn).join('.');
			return result + encoded;
		}
	
		/**
		 * Creates an array containing the numeric code points of each Unicode
		 * character in the string. While JavaScript uses UCS-2 internally,
		 * this function will convert a pair of surrogate halves (each of which
		 * UCS-2 exposes as separate characters) into a single code point,
		 * matching UTF-16.
		 * @see `punycode.ucs2.encode`
		 * @see <https://mathiasbynens.be/notes/javascript-encoding>
		 * @memberOf punycode.ucs2
		 * @name decode
		 * @param {String} string The Unicode input string (UCS-2).
		 * @returns {Array} The new array of code points.
		 */
		function ucs2decode(string) {
			var output = [],
			    counter = 0,
			    length = string.length,
			    value,
			    extra;
			while (counter < length) {
				value = string.charCodeAt(counter++);
				if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
					// high surrogate, and there is a next character
					extra = string.charCodeAt(counter++);
					if ((extra & 0xFC00) == 0xDC00) { // low surrogate
						output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
					} else {
						// unmatched surrogate; only append this code unit, in case the next
						// code unit is the high surrogate of a surrogate pair
						output.push(value);
						counter--;
					}
				} else {
					output.push(value);
				}
			}
			return output;
		}
	
		/**
		 * Creates a string based on an array of numeric code points.
		 * @see `punycode.ucs2.decode`
		 * @memberOf punycode.ucs2
		 * @name encode
		 * @param {Array} codePoints The array of numeric code points.
		 * @returns {String} The new Unicode string (UCS-2).
		 */
		function ucs2encode(array) {
			return map(array, function(value) {
				var output = '';
				if (value > 0xFFFF) {
					value -= 0x10000;
					output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
					value = 0xDC00 | value & 0x3FF;
				}
				output += stringFromCharCode(value);
				return output;
			}).join('');
		}
	
		/**
		 * Converts a basic code point into a digit/integer.
		 * @see `digitToBasic()`
		 * @private
		 * @param {Number} codePoint The basic numeric code point value.
		 * @returns {Number} The numeric value of a basic code point (for use in
		 * representing integers) in the range `0` to `base - 1`, or `base` if
		 * the code point does not represent a value.
		 */
		function basicToDigit(codePoint) {
			if (codePoint - 48 < 10) {
				return codePoint - 22;
			}
			if (codePoint - 65 < 26) {
				return codePoint - 65;
			}
			if (codePoint - 97 < 26) {
				return codePoint - 97;
			}
			return base;
		}
	
		/**
		 * Converts a digit/integer into a basic code point.
		 * @see `basicToDigit()`
		 * @private
		 * @param {Number} digit The numeric value of a basic code point.
		 * @returns {Number} The basic code point whose value (when used for
		 * representing integers) is `digit`, which needs to be in the range
		 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
		 * used; else, the lowercase form is used. The behavior is undefined
		 * if `flag` is non-zero and `digit` has no uppercase form.
		 */
		function digitToBasic(digit, flag) {
			//  0..25 map to ASCII a..z or A..Z
			// 26..35 map to ASCII 0..9
			return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
		}
	
		/**
		 * Bias adaptation function as per section 3.4 of RFC 3492.
		 * https://tools.ietf.org/html/rfc3492#section-3.4
		 * @private
		 */
		function adapt(delta, numPoints, firstTime) {
			var k = 0;
			delta = firstTime ? floor(delta / damp) : delta >> 1;
			delta += floor(delta / numPoints);
			for (/* no initialization */; delta > baseMinusTMin * tMax >> 1; k += base) {
				delta = floor(delta / baseMinusTMin);
			}
			return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
		}
	
		/**
		 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
		 * symbols.
		 * @memberOf punycode
		 * @param {String} input The Punycode string of ASCII-only symbols.
		 * @returns {String} The resulting string of Unicode symbols.
		 */
		function decode(input) {
			// Don't use UCS-2
			var output = [],
			    inputLength = input.length,
			    out,
			    i = 0,
			    n = initialN,
			    bias = initialBias,
			    basic,
			    j,
			    index,
			    oldi,
			    w,
			    k,
			    digit,
			    t,
			    /** Cached calculation results */
			    baseMinusT;
	
			// Handle the basic code points: let `basic` be the number of input code
			// points before the last delimiter, or `0` if there is none, then copy
			// the first basic code points to the output.
	
			basic = input.lastIndexOf(delimiter);
			if (basic < 0) {
				basic = 0;
			}
	
			for (j = 0; j < basic; ++j) {
				// if it's not a basic code point
				if (input.charCodeAt(j) >= 0x80) {
					error('not-basic');
				}
				output.push(input.charCodeAt(j));
			}
	
			// Main decoding loop: start just after the last delimiter if any basic code
			// points were copied; start at the beginning otherwise.
	
			for (index = basic > 0 ? basic + 1 : 0; index < inputLength; /* no final expression */) {
	
				// `index` is the index of the next character to be consumed.
				// Decode a generalized variable-length integer into `delta`,
				// which gets added to `i`. The overflow checking is easier
				// if we increase `i` as we go, then subtract off its starting
				// value at the end to obtain `delta`.
				for (oldi = i, w = 1, k = base; /* no condition */; k += base) {
	
					if (index >= inputLength) {
						error('invalid-input');
					}
	
					digit = basicToDigit(input.charCodeAt(index++));
	
					if (digit >= base || digit > floor((maxInt - i) / w)) {
						error('overflow');
					}
	
					i += digit * w;
					t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
	
					if (digit < t) {
						break;
					}
	
					baseMinusT = base - t;
					if (w > floor(maxInt / baseMinusT)) {
						error('overflow');
					}
	
					w *= baseMinusT;
	
				}
	
				out = output.length + 1;
				bias = adapt(i - oldi, out, oldi == 0);
	
				// `i` was supposed to wrap around from `out` to `0`,
				// incrementing `n` each time, so we'll fix that now:
				if (floor(i / out) > maxInt - n) {
					error('overflow');
				}
	
				n += floor(i / out);
				i %= out;
	
				// Insert `n` at position `i` of the output
				output.splice(i++, 0, n);
	
			}
	
			return ucs2encode(output);
		}
	
		/**
		 * Converts a string of Unicode symbols (e.g. a domain name label) to a
		 * Punycode string of ASCII-only symbols.
		 * @memberOf punycode
		 * @param {String} input The string of Unicode symbols.
		 * @returns {String} The resulting Punycode string of ASCII-only symbols.
		 */
		function encode(input) {
			var n,
			    delta,
			    handledCPCount,
			    basicLength,
			    bias,
			    j,
			    m,
			    q,
			    k,
			    t,
			    currentValue,
			    output = [],
			    /** `inputLength` will hold the number of code points in `input`. */
			    inputLength,
			    /** Cached calculation results */
			    handledCPCountPlusOne,
			    baseMinusT,
			    qMinusT;
	
			// Convert the input in UCS-2 to Unicode
			input = ucs2decode(input);
	
			// Cache the length
			inputLength = input.length;
	
			// Initialize the state
			n = initialN;
			delta = 0;
			bias = initialBias;
	
			// Handle the basic code points
			for (j = 0; j < inputLength; ++j) {
				currentValue = input[j];
				if (currentValue < 0x80) {
					output.push(stringFromCharCode(currentValue));
				}
			}
	
			handledCPCount = basicLength = output.length;
	
			// `handledCPCount` is the number of code points that have been handled;
			// `basicLength` is the number of basic code points.
	
			// Finish the basic string - if it is not empty - with a delimiter
			if (basicLength) {
				output.push(delimiter);
			}
	
			// Main encoding loop:
			while (handledCPCount < inputLength) {
	
				// All non-basic code points < n have been handled already. Find the next
				// larger one:
				for (m = maxInt, j = 0; j < inputLength; ++j) {
					currentValue = input[j];
					if (currentValue >= n && currentValue < m) {
						m = currentValue;
					}
				}
	
				// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
				// but guard against overflow
				handledCPCountPlusOne = handledCPCount + 1;
				if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
					error('overflow');
				}
	
				delta += (m - n) * handledCPCountPlusOne;
				n = m;
	
				for (j = 0; j < inputLength; ++j) {
					currentValue = input[j];
	
					if (currentValue < n && ++delta > maxInt) {
						error('overflow');
					}
	
					if (currentValue == n) {
						// Represent delta as a generalized variable-length integer
						for (q = delta, k = base; /* no condition */; k += base) {
							t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
							if (q < t) {
								break;
							}
							qMinusT = q - t;
							baseMinusT = base - t;
							output.push(
								stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
							);
							q = floor(qMinusT / baseMinusT);
						}
	
						output.push(stringFromCharCode(digitToBasic(q, 0)));
						bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
						delta = 0;
						++handledCPCount;
					}
				}
	
				++delta;
				++n;
	
			}
			return output.join('');
		}
	
		/**
		 * Converts a Punycode string representing a domain name or an email address
		 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
		 * it doesn't matter if you call it on a string that has already been
		 * converted to Unicode.
		 * @memberOf punycode
		 * @param {String} input The Punycoded domain name or email address to
		 * convert to Unicode.
		 * @returns {String} The Unicode representation of the given Punycode
		 * string.
		 */
		function toUnicode(input) {
			return mapDomain(input, function(string) {
				return regexPunycode.test(string)
					? decode(string.slice(4).toLowerCase())
					: string;
			});
		}
	
		/**
		 * Converts a Unicode string representing a domain name or an email address to
		 * Punycode. Only the non-ASCII parts of the domain name will be converted,
		 * i.e. it doesn't matter if you call it with a domain that's already in
		 * ASCII.
		 * @memberOf punycode
		 * @param {String} input The domain name or email address to convert, as a
		 * Unicode string.
		 * @returns {String} The Punycode representation of the given domain name or
		 * email address.
		 */
		function toASCII(input) {
			return mapDomain(input, function(string) {
				return regexNonASCII.test(string)
					? 'xn--' + encode(string)
					: string;
			});
		}
	
		/*--------------------------------------------------------------------------*/
	
		/** Define the public API */
		punycode = {
			/**
			 * A string representing the current Punycode.js version number.
			 * @memberOf punycode
			 * @type String
			 */
			'version': '1.4.1',
			/**
			 * An object of methods to convert from JavaScript's internal character
			 * representation (UCS-2) to Unicode code points, and back.
			 * @see <https://mathiasbynens.be/notes/javascript-encoding>
			 * @memberOf punycode
			 * @type Object
			 */
			'ucs2': {
				'decode': ucs2decode,
				'encode': ucs2encode
			},
			'decode': decode,
			'encode': encode,
			'toASCII': toASCII,
			'toUnicode': toUnicode
		};
	
		/** Expose `punycode` */
		// Some AMD build optimizers, like r.js, check for specific condition patterns
		// like the following:
		if (
			true
		) {
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
				return punycode;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (freeExports && freeModule) {
			if (module.exports == freeExports) {
				// in Node.js, io.js, or RingoJS v0.8.0+
				freeModule.exports = punycode;
			} else {
				// in Narwhal or RingoJS v0.7.0-
				for (key in punycode) {
					punycode.hasOwnProperty(key) && (freeExports[key] = punycode[key]);
				}
			}
		} else {
			// in Rhino or a web browser
			root.punycode = punycode;
		}
	
	}(this));
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(364)(module), (function() { return this; }())))

/***/ }),
/* 364 */
/***/ (function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ }),
/* 365 */
/***/ (function(module, exports) {

	'use strict';
	
	module.exports = {
	  isString: function(arg) {
	    return typeof(arg) === 'string';
	  },
	  isObject: function(arg) {
	    return typeof(arg) === 'object' && arg !== null;
	  },
	  isNull: function(arg) {
	    return arg === null;
	  },
	  isNullOrUndefined: function(arg) {
	    return arg == null;
	  }
	};


/***/ }),
/* 366 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.decode = exports.parse = __webpack_require__(367);
	exports.encode = exports.stringify = __webpack_require__(368);


/***/ }),
/* 367 */
/***/ (function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	'use strict';
	
	// If obj.hasOwnProperty has been overridden, then calling
	// obj.hasOwnProperty(prop) will break.
	// See: https://github.com/joyent/node/issues/1707
	function hasOwnProperty(obj, prop) {
	  return Object.prototype.hasOwnProperty.call(obj, prop);
	}
	
	module.exports = function(qs, sep, eq, options) {
	  sep = sep || '&';
	  eq = eq || '=';
	  var obj = {};
	
	  if (typeof qs !== 'string' || qs.length === 0) {
	    return obj;
	  }
	
	  var regexp = /\+/g;
	  qs = qs.split(sep);
	
	  var maxKeys = 1000;
	  if (options && typeof options.maxKeys === 'number') {
	    maxKeys = options.maxKeys;
	  }
	
	  var len = qs.length;
	  // maxKeys <= 0 means that we should not limit keys count
	  if (maxKeys > 0 && len > maxKeys) {
	    len = maxKeys;
	  }
	
	  for (var i = 0; i < len; ++i) {
	    var x = qs[i].replace(regexp, '%20'),
	        idx = x.indexOf(eq),
	        kstr, vstr, k, v;
	
	    if (idx >= 0) {
	      kstr = x.substr(0, idx);
	      vstr = x.substr(idx + 1);
	    } else {
	      kstr = x;
	      vstr = '';
	    }
	
	    k = decodeURIComponent(kstr);
	    v = decodeURIComponent(vstr);
	
	    if (!hasOwnProperty(obj, k)) {
	      obj[k] = v;
	    } else if (Array.isArray(obj[k])) {
	      obj[k].push(v);
	    } else {
	      obj[k] = [obj[k], v];
	    }
	  }
	
	  return obj;
	};


/***/ }),
/* 368 */
/***/ (function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	'use strict';
	
	var stringifyPrimitive = function(v) {
	  switch (typeof v) {
	    case 'string':
	      return v;
	
	    case 'boolean':
	      return v ? 'true' : 'false';
	
	    case 'number':
	      return isFinite(v) ? v : '';
	
	    default:
	      return '';
	  }
	};
	
	module.exports = function(obj, sep, eq, name) {
	  sep = sep || '&';
	  eq = eq || '=';
	  if (obj === null) {
	    obj = undefined;
	  }
	
	  if (typeof obj === 'object') {
	    return Object.keys(obj).map(function(k) {
	      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
	      if (Array.isArray(obj[k])) {
	        return obj[k].map(function(v) {
	          return ks + encodeURIComponent(stringifyPrimitive(v));
	        }).join(sep);
	      } else {
	        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
	      }
	    }).join(sep);
	
	  }
	
	  if (!name) return '';
	  return encodeURIComponent(stringifyPrimitive(name)) + eq +
	         encodeURIComponent(stringifyPrimitive(obj));
	};


/***/ }),
/* 369 */
/***/ (function(module, exports) {

	/**
	 * Bit twiddling hacks for JavaScript.
	 *
	 * Author: Mikola Lysenko
	 *
	 * Ported from Stanford bit twiddling hack library:
	 *    http://graphics.stanford.edu/~seander/bithacks.html
	 */
	
	"use strict"; "use restrict";
	
	//Number of bits in an integer
	var INT_BITS = 32;
	
	//Constants
	exports.INT_BITS  = INT_BITS;
	exports.INT_MAX   =  0x7fffffff;
	exports.INT_MIN   = -1<<(INT_BITS-1);
	
	//Returns -1, 0, +1 depending on sign of x
	exports.sign = function(v) {
	  return (v > 0) - (v < 0);
	}
	
	//Computes absolute value of integer
	exports.abs = function(v) {
	  var mask = v >> (INT_BITS-1);
	  return (v ^ mask) - mask;
	}
	
	//Computes minimum of integers x and y
	exports.min = function(x, y) {
	  return y ^ ((x ^ y) & -(x < y));
	}
	
	//Computes maximum of integers x and y
	exports.max = function(x, y) {
	  return x ^ ((x ^ y) & -(x < y));
	}
	
	//Checks if a number is a power of two
	exports.isPow2 = function(v) {
	  return !(v & (v-1)) && (!!v);
	}
	
	//Computes log base 2 of v
	exports.log2 = function(v) {
	  var r, shift;
	  r =     (v > 0xFFFF) << 4; v >>>= r;
	  shift = (v > 0xFF  ) << 3; v >>>= shift; r |= shift;
	  shift = (v > 0xF   ) << 2; v >>>= shift; r |= shift;
	  shift = (v > 0x3   ) << 1; v >>>= shift; r |= shift;
	  return r | (v >> 1);
	}
	
	//Computes log base 10 of v
	exports.log10 = function(v) {
	  return  (v >= 1000000000) ? 9 : (v >= 100000000) ? 8 : (v >= 10000000) ? 7 :
	          (v >= 1000000) ? 6 : (v >= 100000) ? 5 : (v >= 10000) ? 4 :
	          (v >= 1000) ? 3 : (v >= 100) ? 2 : (v >= 10) ? 1 : 0;
	}
	
	//Counts number of bits
	exports.popCount = function(v) {
	  v = v - ((v >>> 1) & 0x55555555);
	  v = (v & 0x33333333) + ((v >>> 2) & 0x33333333);
	  return ((v + (v >>> 4) & 0xF0F0F0F) * 0x1010101) >>> 24;
	}
	
	//Counts number of trailing zeros
	function countTrailingZeros(v) {
	  var c = 32;
	  v &= -v;
	  if (v) c--;
	  if (v & 0x0000FFFF) c -= 16;
	  if (v & 0x00FF00FF) c -= 8;
	  if (v & 0x0F0F0F0F) c -= 4;
	  if (v & 0x33333333) c -= 2;
	  if (v & 0x55555555) c -= 1;
	  return c;
	}
	exports.countTrailingZeros = countTrailingZeros;
	
	//Rounds to next power of 2
	exports.nextPow2 = function(v) {
	  v += v === 0;
	  --v;
	  v |= v >>> 1;
	  v |= v >>> 2;
	  v |= v >>> 4;
	  v |= v >>> 8;
	  v |= v >>> 16;
	  return v + 1;
	}
	
	//Rounds down to previous power of 2
	exports.prevPow2 = function(v) {
	  v |= v >>> 1;
	  v |= v >>> 2;
	  v |= v >>> 4;
	  v |= v >>> 8;
	  v |= v >>> 16;
	  return v - (v>>>1);
	}
	
	//Computes parity of word
	exports.parity = function(v) {
	  v ^= v >>> 16;
	  v ^= v >>> 8;
	  v ^= v >>> 4;
	  v &= 0xf;
	  return (0x6996 >>> v) & 1;
	}
	
	var REVERSE_TABLE = new Array(256);
	
	(function(tab) {
	  for(var i=0; i<256; ++i) {
	    var v = i, r = i, s = 7;
	    for (v >>>= 1; v; v >>>= 1) {
	      r <<= 1;
	      r |= v & 1;
	      --s;
	    }
	    tab[i] = (r << s) & 0xff;
	  }
	})(REVERSE_TABLE);
	
	//Reverse bits in a 32 bit word
	exports.reverse = function(v) {
	  return  (REVERSE_TABLE[ v         & 0xff] << 24) |
	          (REVERSE_TABLE[(v >>> 8)  & 0xff] << 16) |
	          (REVERSE_TABLE[(v >>> 16) & 0xff] << 8)  |
	           REVERSE_TABLE[(v >>> 24) & 0xff];
	}
	
	//Interleave bits of 2 coordinates with 16 bits.  Useful for fast quadtree codes
	exports.interleave2 = function(x, y) {
	  x &= 0xFFFF;
	  x = (x | (x << 8)) & 0x00FF00FF;
	  x = (x | (x << 4)) & 0x0F0F0F0F;
	  x = (x | (x << 2)) & 0x33333333;
	  x = (x | (x << 1)) & 0x55555555;
	
	  y &= 0xFFFF;
	  y = (y | (y << 8)) & 0x00FF00FF;
	  y = (y | (y << 4)) & 0x0F0F0F0F;
	  y = (y | (y << 2)) & 0x33333333;
	  y = (y | (y << 1)) & 0x55555555;
	
	  return x | (y << 1);
	}
	
	//Extracts the nth interleaved component
	exports.deinterleave2 = function(v, n) {
	  v = (v >>> n) & 0x55555555;
	  v = (v | (v >>> 1))  & 0x33333333;
	  v = (v | (v >>> 2))  & 0x0F0F0F0F;
	  v = (v | (v >>> 4))  & 0x00FF00FF;
	  v = (v | (v >>> 16)) & 0x000FFFF;
	  return (v << 16) >> 16;
	}
	
	
	//Interleave bits of 3 coordinates, each with 10 bits.  Useful for fast octree codes
	exports.interleave3 = function(x, y, z) {
	  x &= 0x3FF;
	  x  = (x | (x<<16)) & 4278190335;
	  x  = (x | (x<<8))  & 251719695;
	  x  = (x | (x<<4))  & 3272356035;
	  x  = (x | (x<<2))  & 1227133513;
	
	  y &= 0x3FF;
	  y  = (y | (y<<16)) & 4278190335;
	  y  = (y | (y<<8))  & 251719695;
	  y  = (y | (y<<4))  & 3272356035;
	  y  = (y | (y<<2))  & 1227133513;
	  x |= (y << 1);
	  
	  z &= 0x3FF;
	  z  = (z | (z<<16)) & 4278190335;
	  z  = (z | (z<<8))  & 251719695;
	  z  = (z | (z<<4))  & 3272356035;
	  z  = (z | (z<<2))  & 1227133513;
	  
	  return x | (z << 2);
	}
	
	//Extracts nth interleaved component of a 3-tuple
	exports.deinterleave3 = function(v, n) {
	  v = (v >>> n)       & 1227133513;
	  v = (v | (v>>>2))   & 3272356035;
	  v = (v | (v>>>4))   & 251719695;
	  v = (v | (v>>>8))   & 4278190335;
	  v = (v | (v>>>16))  & 0x3FF;
	  return (v<<22)>>22;
	}
	
	//Computes next combination in colexicographic order (this is mistakenly called nextPermutation on the bit twiddling hacks page)
	exports.nextCombination = function(v) {
	  var t = v | (v - 1);
	  return (t + 1) | (((~t & -~t) - 1) >>> (countTrailingZeros(v) + 1));
	}
	


/***/ }),
/* 370 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _BaseTexture = __webpack_require__(360);
	
	var _BaseTexture2 = _interopRequireDefault(_BaseTexture);
	
	var _VideoBaseTexture = __webpack_require__(371);
	
	var _VideoBaseTexture2 = _interopRequireDefault(_VideoBaseTexture);
	
	var _TextureUvs = __webpack_require__(375);
	
	var _TextureUvs2 = _interopRequireDefault(_TextureUvs);
	
	var _eventemitter = __webpack_require__(338);
	
	var _eventemitter2 = _interopRequireDefault(_eventemitter);
	
	var _math = __webpack_require__(345);
	
	var _utils = __webpack_require__(332);
	
	var _settings = __webpack_require__(334);
	
	var _settings2 = _interopRequireDefault(_settings);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * A texture stores the information that represents an image or part of an image. It cannot be added
	 * to the display list directly. Instead use it as the texture for a Sprite. If no frame is provided
	 * then the whole image is used.
	 *
	 * You can directly create a texture from an image and then reuse it multiple times like this :
	 *
	 * ```js
	 * let texture = PIXI.Texture.fromImage('assets/image.png');
	 * let sprite1 = new PIXI.Sprite(texture);
	 * let sprite2 = new PIXI.Sprite(texture);
	 * ```
	 *
	 * Textures made from SVGs, loaded or not, cannot be used before the file finishes processing.
	 * You can check for this by checking the sprite's _textureID property.
	 * ```js
	 * var texture = PIXI.Texture.fromImage('assets/image.svg');
	 * var sprite1 = new PIXI.Sprite(texture);
	 * //sprite1._textureID should not be undefined if the texture has finished processing the SVG file
	 * ```
	 * You can use a ticker or rAF to ensure your sprites load the finished textures after processing. See issue #3068.
	 *
	 * @class
	 * @extends EventEmitter
	 * @memberof PIXI
	 */
	var Texture = function (_EventEmitter) {
	    _inherits(Texture, _EventEmitter);
	
	    /**
	     * @param {PIXI.BaseTexture} baseTexture - The base texture source to create the texture from
	     * @param {PIXI.Rectangle} [frame] - The rectangle frame of the texture to show
	     * @param {PIXI.Rectangle} [orig] - The area of original texture
	     * @param {PIXI.Rectangle} [trim] - Trimmed rectangle of original texture
	     * @param {number} [rotate] - indicates how the texture was rotated by texture packer. See {@link PIXI.GroupD8}
	     */
	    function Texture(baseTexture, frame, orig, trim, rotate) {
	        _classCallCheck(this, Texture);
	
	        /**
	         * Does this Texture have any frame data assigned to it?
	         *
	         * @member {boolean}
	         */
	        var _this = _possibleConstructorReturn(this, (Texture.__proto__ || Object.getPrototypeOf(Texture)).call(this));
	
	        _this.noFrame = false;
	
	        if (!frame) {
	            _this.noFrame = true;
	            frame = new _math.Rectangle(0, 0, 1, 1);
	        }
	
	        if (baseTexture instanceof Texture) {
	            baseTexture = baseTexture.baseTexture;
	        }
	
	        /**
	         * The base texture that this texture uses.
	         *
	         * @member {PIXI.BaseTexture}
	         */
	        _this.baseTexture = baseTexture;
	
	        /**
	         * This is the area of the BaseTexture image to actually copy to the Canvas / WebGL when rendering,
	         * irrespective of the actual frame size or placement (which can be influenced by trimmed texture atlases)
	         *
	         * @member {PIXI.Rectangle}
	         */
	        _this._frame = frame;
	
	        /**
	         * This is the trimmed area of original texture, before it was put in atlas
	         * Please call `_updateUvs()` after you change coordinates of `trim` manually.
	         *
	         * @member {PIXI.Rectangle}
	         */
	        _this.trim = trim;
	
	        /**
	         * This will let the renderer know if the texture is valid. If it's not then it cannot be rendered.
	         *
	         * @member {boolean}
	         */
	        _this.valid = false;
	
	        /**
	         * This will let a renderer know that a texture has been updated (used mainly for webGL uv updates)
	         *
	         * @member {boolean}
	         */
	        _this.requiresUpdate = false;
	
	        /**
	         * The WebGL UV data cache.
	         *
	         * @member {PIXI.TextureUvs}
	         * @private
	         */
	        _this._uvs = null;
	
	        /**
	         * This is the area of original texture, before it was put in atlas
	         *
	         * @member {PIXI.Rectangle}
	         */
	        _this.orig = orig || frame; // new Rectangle(0, 0, 1, 1);
	
	        _this._rotate = Number(rotate || 0);
	
	        if (rotate === true) {
	            // this is old texturepacker legacy, some games/libraries are passing "true" for rotated textures
	            _this._rotate = 2;
	        } else if (_this._rotate % 2 !== 0) {
	            throw new Error('attempt to use diamond-shaped UVs. If you are sure, set rotation manually');
	        }
	
	        if (baseTexture.hasLoaded) {
	            if (_this.noFrame) {
	                frame = new _math.Rectangle(0, 0, baseTexture.width, baseTexture.height);
	
	                // if there is no frame we should monitor for any base texture changes..
	                baseTexture.on('update', _this.onBaseTextureUpdated, _this);
	            }
	            _this.frame = frame;
	        } else {
	            baseTexture.once('loaded', _this.onBaseTextureLoaded, _this);
	        }
	
	        /**
	         * Fired when the texture is updated. This happens if the frame or the baseTexture is updated.
	         *
	         * @event PIXI.Texture#update
	         * @protected
	         * @param {PIXI.Texture} texture - Instance of texture being updated.
	         */
	
	        _this._updateID = 0;
	
	        /**
	         * Contains data for uvs. May contain clamp settings and some matrices.
	         * Its a bit heavy, so by default that object is not created.
	         * @type {PIXI.TextureMatrix}
	         * @default null
	         */
	        _this.transform = null;
	
	        /**
	         * The ids under which this Texture has been added to the texture cache. This is
	         * automatically set as long as Texture.addToCache is used, but may not be set if a
	         * Texture is added directly to the TextureCache array.
	         *
	         * @member {string[]}
	         */
	        _this.textureCacheIds = [];
	        return _this;
	    }
	
	    /**
	     * Updates this texture on the gpu.
	     *
	     */
	
	
	    _createClass(Texture, [{
	        key: 'update',
	        value: function update() {
	            this.baseTexture.update();
	        }
	
	        /**
	         * Called when the base texture is loaded
	         *
	         * @private
	         * @param {PIXI.BaseTexture} baseTexture - The base texture.
	         */
	
	    }, {
	        key: 'onBaseTextureLoaded',
	        value: function onBaseTextureLoaded(baseTexture) {
	            this._updateID++;
	
	            // TODO this code looks confusing.. boo to abusing getters and setters!
	            if (this.noFrame) {
	                this.frame = new _math.Rectangle(0, 0, baseTexture.width, baseTexture.height);
	            } else {
	                this.frame = this._frame;
	            }
	
	            this.baseTexture.on('update', this.onBaseTextureUpdated, this);
	            this.emit('update', this);
	        }
	
	        /**
	         * Called when the base texture is updated
	         *
	         * @private
	         * @param {PIXI.BaseTexture} baseTexture - The base texture.
	         */
	
	    }, {
	        key: 'onBaseTextureUpdated',
	        value: function onBaseTextureUpdated(baseTexture) {
	            this._updateID++;
	
	            this._frame.width = baseTexture.width;
	            this._frame.height = baseTexture.height;
	
	            this.emit('update', this);
	        }
	
	        /**
	         * Destroys this texture
	         *
	         * @param {boolean} [destroyBase=false] Whether to destroy the base texture as well
	         */
	
	    }, {
	        key: 'destroy',
	        value: function destroy(destroyBase) {
	            if (this.baseTexture) {
	                if (destroyBase) {
	                    // delete the texture if it exists in the texture cache..
	                    // this only needs to be removed if the base texture is actually destroyed too..
	                    if (_utils.TextureCache[this.baseTexture.imageUrl]) {
	                        Texture.removeFromCache(this.baseTexture.imageUrl);
	                    }
	
	                    this.baseTexture.destroy();
	                }
	
	                this.baseTexture.off('update', this.onBaseTextureUpdated, this);
	                this.baseTexture.off('loaded', this.onBaseTextureLoaded, this);
	
	                this.baseTexture = null;
	            }
	
	            this._frame = null;
	            this._uvs = null;
	            this.trim = null;
	            this.orig = null;
	
	            this.valid = false;
	
	            Texture.removeFromCache(this);
	            this.textureCacheIds = null;
	        }
	
	        /**
	         * Creates a new texture object that acts the same as this one.
	         *
	         * @return {PIXI.Texture} The new texture
	         */
	
	    }, {
	        key: 'clone',
	        value: function clone() {
	            return new Texture(this.baseTexture, this.frame, this.orig, this.trim, this.rotate);
	        }
	
	        /**
	         * Updates the internal WebGL UV cache. Use it after you change `frame` or `trim` of the texture.
	         */
	
	    }, {
	        key: '_updateUvs',
	        value: function _updateUvs() {
	            if (!this._uvs) {
	                this._uvs = new _TextureUvs2.default();
	            }
	
	            this._uvs.set(this._frame, this.baseTexture, this.rotate);
	
	            this._updateID++;
	        }
	
	        /**
	         * Helper function that creates a Texture object from the given image url.
	         * If the image is not in the texture cache it will be  created and loaded.
	         *
	         * @static
	         * @param {string} imageUrl - The image url of the texture
	         * @param {boolean} [crossorigin] - Whether requests should be treated as crossorigin
	         * @param {number} [scaleMode=PIXI.settings.SCALE_MODE] - See {@link PIXI.SCALE_MODES} for possible values
	         * @param {number} [sourceScale=(auto)] - Scale for the original image, used with SVG images.
	         * @return {PIXI.Texture} The newly created texture
	         */
	
	    }, {
	        key: 'frame',
	
	
	        /**
	         * The frame specifies the region of the base texture that this texture uses.
	         * Please call `_updateUvs()` after you change coordinates of `frame` manually.
	         *
	         * @member {PIXI.Rectangle}
	         */
	        get: function get() {
	            return this._frame;
	        },
	        set: function set(frame) // eslint-disable-line require-jsdoc
	        {
	            this._frame = frame;
	
	            this.noFrame = false;
	
	            var x = frame.x,
	                y = frame.y,
	                width = frame.width,
	                height = frame.height;
	
	            var xNotFit = x + width > this.baseTexture.width;
	            var yNotFit = y + height > this.baseTexture.height;
	
	            if (xNotFit || yNotFit) {
	                var relationship = xNotFit && yNotFit ? 'and' : 'or';
	                var errorX = 'X: ' + x + ' + ' + width + ' = ' + (x + width) + ' > ' + this.baseTexture.width;
	                var errorY = 'Y: ' + y + ' + ' + height + ' = ' + (y + height) + ' > ' + this.baseTexture.height;
	
	                throw new Error('Texture Error: frame does not fit inside the base Texture dimensions: ' + (errorX + ' ' + relationship + ' ' + errorY));
	            }
	
	            // this.valid = width && height && this.baseTexture.source && this.baseTexture.hasLoaded;
	            this.valid = width && height && this.baseTexture.hasLoaded;
	
	            if (!this.trim && !this.rotate) {
	                this.orig = frame;
	            }
	
	            if (this.valid) {
	                this._updateUvs();
	            }
	        }
	
	        /**
	         * Indicates whether the texture is rotated inside the atlas
	         * set to 2 to compensate for texture packer rotation
	         * set to 6 to compensate for spine packer rotation
	         * can be used to rotate or mirror sprites
	         * See {@link PIXI.GroupD8} for explanation
	         *
	         * @member {number}
	         */
	
	    }, {
	        key: 'rotate',
	        get: function get() {
	            return this._rotate;
	        },
	        set: function set(rotate) // eslint-disable-line require-jsdoc
	        {
	            this._rotate = rotate;
	            if (this.valid) {
	                this._updateUvs();
	            }
	        }
	
	        /**
	         * The width of the Texture in pixels.
	         *
	         * @member {number}
	         */
	
	    }, {
	        key: 'width',
	        get: function get() {
	            return this.orig.width;
	        }
	
	        /**
	         * The height of the Texture in pixels.
	         *
	         * @member {number}
	         */
	
	    }, {
	        key: 'height',
	        get: function get() {
	            return this.orig.height;
	        }
	    }], [{
	        key: 'fromImage',
	        value: function fromImage(imageUrl, crossorigin, scaleMode, sourceScale) {
	            var texture = _utils.TextureCache[imageUrl];
	
	            if (!texture) {
	                texture = new Texture(_BaseTexture2.default.fromImage(imageUrl, crossorigin, scaleMode, sourceScale));
	                Texture.addToCache(texture, imageUrl);
	            }
	
	            return texture;
	        }
	
	        /**
	         * Helper function that creates a sprite that will contain a texture from the TextureCache based on the frameId
	         * The frame ids are created when a Texture packer file has been loaded
	         *
	         * @static
	         * @param {string} frameId - The frame Id of the texture in the cache
	         * @return {PIXI.Texture} The newly created texture
	         */
	
	    }, {
	        key: 'fromFrame',
	        value: function fromFrame(frameId) {
	            var texture = _utils.TextureCache[frameId];
	
	            if (!texture) {
	                throw new Error('The frameId "' + frameId + '" does not exist in the texture cache');
	            }
	
	            return texture;
	        }
	
	        /**
	         * Helper function that creates a new Texture based on the given canvas element.
	         *
	         * @static
	         * @param {HTMLCanvasElement} canvas - The canvas element source of the texture
	         * @param {number} [scaleMode=PIXI.settings.SCALE_MODE] - See {@link PIXI.SCALE_MODES} for possible values
	         * @param {string} [origin='canvas'] - A string origin of who created the base texture
	         * @return {PIXI.Texture} The newly created texture
	         */
	
	    }, {
	        key: 'fromCanvas',
	        value: function fromCanvas(canvas, scaleMode) {
	            var origin = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'canvas';
	
	            return new Texture(_BaseTexture2.default.fromCanvas(canvas, scaleMode, origin));
	        }
	
	        /**
	         * Helper function that creates a new Texture based on the given video element.
	         *
	         * @static
	         * @param {HTMLVideoElement|string} video - The URL or actual element of the video
	         * @param {number} [scaleMode=PIXI.settings.SCALE_MODE] - See {@link PIXI.SCALE_MODES} for possible values
	         * @return {PIXI.Texture} The newly created texture
	         */
	
	    }, {
	        key: 'fromVideo',
	        value: function fromVideo(video, scaleMode) {
	            if (typeof video === 'string') {
	                return Texture.fromVideoUrl(video, scaleMode);
	            }
	
	            return new Texture(_VideoBaseTexture2.default.fromVideo(video, scaleMode));
	        }
	
	        /**
	         * Helper function that creates a new Texture based on the video url.
	         *
	         * @static
	         * @param {string} videoUrl - URL of the video
	         * @param {number} [scaleMode=PIXI.settings.SCALE_MODE] - See {@link PIXI.SCALE_MODES} for possible values
	         * @return {PIXI.Texture} The newly created texture
	         */
	
	    }, {
	        key: 'fromVideoUrl',
	        value: function fromVideoUrl(videoUrl, scaleMode) {
	            return new Texture(_VideoBaseTexture2.default.fromUrl(videoUrl, scaleMode));
	        }
	
	        /**
	         * Helper function that creates a new Texture based on the source you provide.
	         * The source can be - frame id, image url, video url, canvas element, video element, base texture
	         *
	         * @static
	         * @param {number|string|HTMLImageElement|HTMLCanvasElement|HTMLVideoElement|PIXI.BaseTexture}
	         *        source - Source to create texture from
	         * @return {PIXI.Texture} The newly created texture
	         */
	
	    }, {
	        key: 'from',
	        value: function from(source) {
	            // TODO auto detect cross origin..
	            // TODO pass in scale mode?
	            if (typeof source === 'string') {
	                var texture = _utils.TextureCache[source];
	
	                if (!texture) {
	                    // check if its a video..
	                    var isVideo = source.match(/\.(mp4|webm|ogg|h264|avi|mov)$/) !== null;
	
	                    if (isVideo) {
	                        return Texture.fromVideoUrl(source);
	                    }
	
	                    return Texture.fromImage(source);
	                }
	
	                return texture;
	            } else if (source instanceof HTMLImageElement) {
	                return new Texture(_BaseTexture2.default.from(source));
	            } else if (source instanceof HTMLCanvasElement) {
	                return Texture.fromCanvas(source, _settings2.default.SCALE_MODE, 'HTMLCanvasElement');
	            } else if (source instanceof HTMLVideoElement) {
	                return Texture.fromVideo(source);
	            } else if (source instanceof _BaseTexture2.default) {
	                return new Texture(source);
	            }
	
	            // lets assume its a texture!
	            return source;
	        }
	
	        /**
	         * Create a texture from a source and add to the cache.
	         *
	         * @static
	         * @param {HTMLImageElement|HTMLCanvasElement} source - The input source.
	         * @param {String} imageUrl - File name of texture, for cache and resolving resolution.
	         * @param {String} [name] - Human readible name for the texture cache. If no name is
	         *        specified, only `imageUrl` will be used as the cache ID.
	         * @return {PIXI.Texture} Output texture
	         */
	
	    }, {
	        key: 'fromLoader',
	        value: function fromLoader(source, imageUrl, name) {
	            var baseTexture = new _BaseTexture2.default(source, undefined, (0, _utils.getResolutionOfUrl)(imageUrl));
	            var texture = new Texture(baseTexture);
	
	            baseTexture.imageUrl = imageUrl;
	
	            // No name, use imageUrl instead
	            if (!name) {
	                name = imageUrl;
	            }
	
	            // lets also add the frame to pixi's global cache for fromFrame and fromImage fucntions
	            _BaseTexture2.default.addToCache(texture.baseTexture, name);
	            Texture.addToCache(texture, name);
	
	            // also add references by url if they are different.
	            if (name !== imageUrl) {
	                _BaseTexture2.default.addToCache(texture.baseTexture, imageUrl);
	                Texture.addToCache(texture, imageUrl);
	            }
	
	            return texture;
	        }
	
	        /**
	         * Adds a Texture to the global TextureCache. This cache is shared across the whole PIXI object.
	         *
	         * @static
	         * @param {PIXI.Texture} texture - The Texture to add to the cache.
	         * @param {string} id - The id that the Texture will be stored against.
	         */
	
	    }, {
	        key: 'addToCache',
	        value: function addToCache(texture, id) {
	            if (id) {
	                if (texture.textureCacheIds.indexOf(id) === -1) {
	                    texture.textureCacheIds.push(id);
	                }
	
	                // @if DEBUG
	                /* eslint-disable no-console */
	                if (_utils.TextureCache[id]) {
	                    console.warn('Texture added to the cache with an id [' + id + '] that already had an entry');
	                }
	                /* eslint-enable no-console */
	                // @endif
	
	                _utils.TextureCache[id] = texture;
	            }
	        }
	
	        /**
	         * Remove a Texture from the global TextureCache.
	         *
	         * @static
	         * @param {string|PIXI.Texture} texture - id of a Texture to be removed, or a Texture instance itself
	         * @return {PIXI.Texture|null} The Texture that was removed
	         */
	
	    }, {
	        key: 'removeFromCache',
	        value: function removeFromCache(texture) {
	            if (typeof texture === 'string') {
	                var textureFromCache = _utils.TextureCache[texture];
	
	                if (textureFromCache) {
	                    var index = textureFromCache.textureCacheIds.indexOf(texture);
	
	                    if (index > -1) {
	                        textureFromCache.textureCacheIds.splice(index, 1);
	                    }
	
	                    delete _utils.TextureCache[texture];
	
	                    return textureFromCache;
	                }
	            } else if (texture && texture.textureCacheIds) {
	                for (var i = 0; i < texture.textureCacheIds.length; ++i) {
	                    // Check that texture matches the one being passed in before deleting it from the cache.
	                    if (_utils.TextureCache[texture.textureCacheIds[i]] === texture) {
	                        delete _utils.TextureCache[texture.textureCacheIds[i]];
	                    }
	                }
	
	                texture.textureCacheIds.length = 0;
	
	                return texture;
	            }
	
	            return null;
	        }
	    }]);
	
	    return Texture;
	}(_eventemitter2.default);
	
	exports.default = Texture;
	
	
	function createWhiteTexture() {
	    var canvas = document.createElement('canvas');
	
	    canvas.width = 10;
	    canvas.height = 10;
	
	    var context = canvas.getContext('2d');
	
	    context.fillStyle = 'white';
	    context.fillRect(0, 0, 10, 10);
	
	    return new Texture(new _BaseTexture2.default(canvas));
	}
	
	function removeAllHandlers(tex) {
	    tex.destroy = function _emptyDestroy() {/* empty */};
	    tex.on = function _emptyOn() {/* empty */};
	    tex.once = function _emptyOnce() {/* empty */};
	    tex.emit = function _emptyEmit() {/* empty */};
	}
	
	/**
	 * An empty texture, used often to not have to create multiple empty textures.
	 * Can not be destroyed.
	 *
	 * @static
	 * @constant
	 */
	Texture.EMPTY = new Texture(new _BaseTexture2.default());
	removeAllHandlers(Texture.EMPTY);
	removeAllHandlers(Texture.EMPTY.baseTexture);
	
	/**
	 * A white texture of 10x10 size, used for graphics and other things
	 * Can not be destroyed.
	 *
	 * @static
	 * @constant
	 */
	Texture.WHITE = createWhiteTexture();
	removeAllHandlers(Texture.WHITE);
	removeAllHandlers(Texture.WHITE.baseTexture);

/***/ }),
/* 371 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _BaseTexture2 = __webpack_require__(360);
	
	var _BaseTexture3 = _interopRequireDefault(_BaseTexture2);
	
	var _utils = __webpack_require__(332);
	
	var _ticker = __webpack_require__(372);
	
	var _const = __webpack_require__(333);
	
	var _determineCrossOrigin = __webpack_require__(361);
	
	var _determineCrossOrigin2 = _interopRequireDefault(_determineCrossOrigin);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * A texture of a [playing] Video.
	 *
	 * Video base textures mimic PixiJS BaseTexture.from.... method in their creation process.
	 *
	 * This can be used in several ways, such as:
	 *
	 * ```js
	 * let texture = PIXI.VideoBaseTexture.fromUrl('http://mydomain.com/video.mp4');
	 *
	 * let texture = PIXI.VideoBaseTexture.fromUrl({ src: 'http://mydomain.com/video.mp4', mime: 'video/mp4' });
	 *
	 * let texture = PIXI.VideoBaseTexture.fromUrls(['/video.webm', '/video.mp4']);
	 *
	 * let texture = PIXI.VideoBaseTexture.fromUrls([
	 *     { src: '/video.webm', mime: 'video/webm' },
	 *     { src: '/video.mp4', mime: 'video/mp4' }
	 * ]);
	 * ```
	 *
	 * See the ["deus" demo](http://www.goodboydigital.com/pixijs/examples/deus/).
	 *
	 * @class
	 * @extends PIXI.BaseTexture
	 * @memberof PIXI
	 */
	var VideoBaseTexture = function (_BaseTexture) {
	    _inherits(VideoBaseTexture, _BaseTexture);
	
	    /**
	     * @param {HTMLVideoElement} source - Video source
	     * @param {number} [scaleMode=PIXI.settings.SCALE_MODE] - See {@link PIXI.SCALE_MODES} for possible values
	     */
	    function VideoBaseTexture(source, scaleMode) {
	        _classCallCheck(this, VideoBaseTexture);
	
	        if (!source) {
	            throw new Error('No video source element specified.');
	        }
	
	        // hook in here to check if video is already available.
	        // BaseTexture looks for a source.complete boolean, plus width & height.
	
	        if ((source.readyState === source.HAVE_ENOUGH_DATA || source.readyState === source.HAVE_FUTURE_DATA) && source.width && source.height) {
	            source.complete = true;
	        }
	
	        var _this = _possibleConstructorReturn(this, (VideoBaseTexture.__proto__ || Object.getPrototypeOf(VideoBaseTexture)).call(this, source, scaleMode));
	
	        _this.width = source.videoWidth;
	        _this.height = source.videoHeight;
	
	        _this._autoUpdate = true;
	        _this._isAutoUpdating = false;
	
	        /**
	         * When set to true will automatically play videos used by this texture once
	         * they are loaded. If false, it will not modify the playing state.
	         *
	         * @member {boolean}
	         * @default true
	         */
	        _this.autoPlay = true;
	
	        _this.update = _this.update.bind(_this);
	        _this._onCanPlay = _this._onCanPlay.bind(_this);
	
	        source.addEventListener('play', _this._onPlayStart.bind(_this));
	        source.addEventListener('pause', _this._onPlayStop.bind(_this));
	        _this.hasLoaded = false;
	        _this.__loaded = false;
	
	        if (!_this._isSourceReady()) {
	            source.addEventListener('canplay', _this._onCanPlay);
	            source.addEventListener('canplaythrough', _this._onCanPlay);
	        } else {
	            _this._onCanPlay();
	        }
	        return _this;
	    }
	
	    /**
	     * Returns true if the underlying source is playing.
	     *
	     * @private
	     * @return {boolean} True if playing.
	     */
	
	
	    _createClass(VideoBaseTexture, [{
	        key: '_isSourcePlaying',
	        value: function _isSourcePlaying() {
	            var source = this.source;
	
	            return source.currentTime > 0 && source.paused === false && source.ended === false && source.readyState > 2;
	        }
	
	        /**
	         * Returns true if the underlying source is ready for playing.
	         *
	         * @private
	         * @return {boolean} True if ready.
	         */
	
	    }, {
	        key: '_isSourceReady',
	        value: function _isSourceReady() {
	            return this.source.readyState === 3 || this.source.readyState === 4;
	        }
	
	        /**
	         * Runs the update loop when the video is ready to play
	         *
	         * @private
	         */
	
	    }, {
	        key: '_onPlayStart',
	        value: function _onPlayStart() {
	            // Just in case the video has not received its can play even yet..
	            if (!this.hasLoaded) {
	                this._onCanPlay();
	            }
	
	            if (!this._isAutoUpdating && this.autoUpdate) {
	                _ticker.shared.add(this.update, this, _const.UPDATE_PRIORITY.HIGH);
	                this._isAutoUpdating = true;
	            }
	        }
	
	        /**
	         * Fired when a pause event is triggered, stops the update loop
	         *
	         * @private
	         */
	
	    }, {
	        key: '_onPlayStop',
	        value: function _onPlayStop() {
	            if (this._isAutoUpdating) {
	                _ticker.shared.remove(this.update, this);
	                this._isAutoUpdating = false;
	            }
	        }
	
	        /**
	         * Fired when the video is loaded and ready to play
	         *
	         * @private
	         */
	
	    }, {
	        key: '_onCanPlay',
	        value: function _onCanPlay() {
	            this.hasLoaded = true;
	
	            if (this.source) {
	                this.source.removeEventListener('canplay', this._onCanPlay);
	                this.source.removeEventListener('canplaythrough', this._onCanPlay);
	
	                this.width = this.source.videoWidth;
	                this.height = this.source.videoHeight;
	
	                // prevent multiple loaded dispatches..
	                if (!this.__loaded) {
	                    this.__loaded = true;
	                    this.emit('loaded', this);
	                }
	
	                if (this._isSourcePlaying()) {
	                    this._onPlayStart();
	                } else if (this.autoPlay) {
	                    this.source.play();
	                }
	            }
	        }
	
	        /**
	         * Destroys this texture
	         *
	         */
	
	    }, {
	        key: 'destroy',
	        value: function destroy() {
	            if (this._isAutoUpdating) {
	                _ticker.shared.remove(this.update, this);
	            }
	
	            if (this.source && this.source._pixiId) {
	                _BaseTexture3.default.removeFromCache(this.source._pixiId);
	                delete this.source._pixiId;
	
	                this.source.pause();
	                this.source.src = '';
	                this.source.load();
	            }
	
	            _get(VideoBaseTexture.prototype.__proto__ || Object.getPrototypeOf(VideoBaseTexture.prototype), 'destroy', this).call(this);
	        }
	
	        /**
	         * Mimic PixiJS BaseTexture.from.... method.
	         *
	         * @static
	         * @param {HTMLVideoElement} video - Video to create texture from
	         * @param {number} [scaleMode=PIXI.settings.SCALE_MODE] - See {@link PIXI.SCALE_MODES} for possible values
	         * @return {PIXI.VideoBaseTexture} Newly created VideoBaseTexture
	         */
	
	    }, {
	        key: 'autoUpdate',
	
	
	        /**
	         * Should the base texture automatically update itself, set to true by default
	         *
	         * @member {boolean}
	         */
	        get: function get() {
	            return this._autoUpdate;
	        },
	        set: function set(value) // eslint-disable-line require-jsdoc
	        {
	            if (value !== this._autoUpdate) {
	                this._autoUpdate = value;
	
	                if (!this._autoUpdate && this._isAutoUpdating) {
	                    _ticker.shared.remove(this.update, this);
	                    this._isAutoUpdating = false;
	                } else if (this._autoUpdate && !this._isAutoUpdating) {
	                    _ticker.shared.add(this.update, this, _const.UPDATE_PRIORITY.HIGH);
	                    this._isAutoUpdating = true;
	                }
	            }
	        }
	    }], [{
	        key: 'fromVideo',
	        value: function fromVideo(video, scaleMode) {
	            if (!video._pixiId) {
	                video._pixiId = 'video_' + (0, _utils.uid)();
	            }
	
	            var baseTexture = _utils.BaseTextureCache[video._pixiId];
	
	            if (!baseTexture) {
	                baseTexture = new VideoBaseTexture(video, scaleMode);
	                _BaseTexture3.default.addToCache(baseTexture, video._pixiId);
	            }
	
	            return baseTexture;
	        }
	
	        /**
	         * Helper function that creates a new BaseTexture based on the given video element.
	         * This BaseTexture can then be used to create a texture
	         *
	         * @static
	         * @param {string|object|string[]|object[]} videoSrc - The URL(s) for the video.
	         * @param {string} [videoSrc.src] - One of the source urls for the video
	         * @param {string} [videoSrc.mime] - The mimetype of the video (e.g. 'video/mp4'). If not specified
	         *  the url's extension will be used as the second part of the mime type.
	         * @param {number} scaleMode - See {@link PIXI.SCALE_MODES} for possible values
	         * @param {boolean} [crossorigin=(auto)] - Should use anonymous CORS? Defaults to true if the URL is not a data-URI.
	         * @return {PIXI.VideoBaseTexture} Newly created VideoBaseTexture
	         */
	
	    }, {
	        key: 'fromUrl',
	        value: function fromUrl(videoSrc, scaleMode, crossorigin) {
	            var video = document.createElement('video');
	
	            video.setAttribute('webkit-playsinline', '');
	            video.setAttribute('playsinline', '');
	
	            var url = Array.isArray(videoSrc) ? videoSrc[0].src || videoSrc[0] : videoSrc.src || videoSrc;
	
	            if (crossorigin === undefined && url.indexOf('data:') !== 0) {
	                video.crossOrigin = (0, _determineCrossOrigin2.default)(url);
	            } else if (crossorigin) {
	                video.crossOrigin = typeof crossorigin === 'string' ? crossorigin : 'anonymous';
	            }
	
	            // array of objects or strings
	            if (Array.isArray(videoSrc)) {
	                for (var i = 0; i < videoSrc.length; ++i) {
	                    video.appendChild(createSource(videoSrc[i].src || videoSrc[i], videoSrc[i].mime));
	                }
	            }
	            // single object or string
	            else {
	                    video.appendChild(createSource(url, videoSrc.mime));
	                }
	
	            video.load();
	
	            return VideoBaseTexture.fromVideo(video, scaleMode);
	        }
	    }]);
	
	    return VideoBaseTexture;
	}(_BaseTexture3.default);
	
	exports.default = VideoBaseTexture;
	
	
	VideoBaseTexture.fromUrls = VideoBaseTexture.fromUrl;
	
	function createSource(path, type) {
	    if (!type) {
	        type = 'video/' + path.substr(path.lastIndexOf('.') + 1);
	    }
	
	    var source = document.createElement('source');
	
	    source.src = path;
	    source.type = type;
	
	    return source;
	}

/***/ }),
/* 372 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Ticker = exports.shared = undefined;
	
	var _Ticker = __webpack_require__(373);
	
	var _Ticker2 = _interopRequireDefault(_Ticker);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * The shared ticker instance used by {@link PIXI.extras.AnimatedSprite}.
	 * and by {@link PIXI.interaction.InteractionManager}.
	 * The property {@link PIXI.ticker.Ticker#autoStart} is set to `true`
	 * for this instance. Please follow the examples for usage, including
	 * how to opt-out of auto-starting the shared ticker.
	 *
	 * @example
	 * let ticker = PIXI.ticker.shared;
	 * // Set this to prevent starting this ticker when listeners are added.
	 * // By default this is true only for the PIXI.ticker.shared instance.
	 * ticker.autoStart = false;
	 * // FYI, call this to ensure the ticker is stopped. It should be stopped
	 * // if you have not attempted to render anything yet.
	 * ticker.stop();
	 * // Call this when you are ready for a running shared ticker.
	 * ticker.start();
	 *
	 * @example
	 * // You may use the shared ticker to render...
	 * let renderer = PIXI.autoDetectRenderer(800, 600);
	 * let stage = new PIXI.Container();
	 * let interactionManager = PIXI.interaction.InteractionManager(renderer);
	 * document.body.appendChild(renderer.view);
	 * ticker.add(function (time) {
	 *     renderer.render(stage);
	 * });
	 *
	 * @example
	 * // Or you can just update it manually.
	 * ticker.autoStart = false;
	 * ticker.stop();
	 * function animate(time) {
	 *     ticker.update(time);
	 *     renderer.render(stage);
	 *     requestAnimationFrame(animate);
	 * }
	 * animate(performance.now());
	 *
	 * @type {PIXI.ticker.Ticker}
	 * @memberof PIXI.ticker
	 */
	var shared = new _Ticker2.default();
	
	shared.autoStart = true;
	shared.destroy = function () {
	  // protect destroying shared ticker
	  // this is used by other internal systems
	  // like AnimatedSprite and InteractionManager
	};
	
	/**
	 * This namespace contains an API for interacting with PIXI's internal global update loop.
	 *
	 * This ticker is used for rendering, {@link PIXI.extras.AnimatedSprite AnimatedSprite},
	 * {@link PIXI.interaction.InteractionManager InteractionManager} and many other time-based PIXI systems.
	 * @example
	 * const ticker = new PIXI.ticker.Ticker();
	 * ticker.stop();
	 * ticker.add((deltaTime) => {
	 *   // do something every frame
	 * });
	 * ticker.start();
	 * @namespace PIXI.ticker
	 */
	exports.shared = shared;
	exports.Ticker = _Ticker2.default;

/***/ }),
/* 373 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _settings = __webpack_require__(334);
	
	var _settings2 = _interopRequireDefault(_settings);
	
	var _const = __webpack_require__(333);
	
	var _TickerListener = __webpack_require__(374);
	
	var _TickerListener2 = _interopRequireDefault(_TickerListener);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * A Ticker class that runs an update loop that other objects listen to.
	 * This class is composed around listeners
	 * meant for execution on the next requested animation frame.
	 * Animation frames are requested only when necessary,
	 * e.g. When the ticker is started and the emitter has listeners.
	 *
	 * @class
	 * @memberof PIXI.ticker
	 */
	var Ticker = function () {
	    /**
	     *
	     */
	    function Ticker() {
	        var _this = this;
	
	        _classCallCheck(this, Ticker);
	
	        /**
	         * The first listener. All new listeners added are chained on this.
	         * @private
	         * @type {TickerListener}
	         */
	        this._head = new _TickerListener2.default(null, null, Infinity);
	
	        /**
	         * Internal current frame request ID
	         * @private
	         */
	        this._requestId = null;
	
	        /**
	         * Internal value managed by minFPS property setter and getter.
	         * This is the maximum allowed milliseconds between updates.
	         * @private
	         */
	        this._maxElapsedMS = 100;
	
	        /**
	         * Whether or not this ticker should invoke the method
	         * {@link PIXI.ticker.Ticker#start} automatically
	         * when a listener is added.
	         *
	         * @member {boolean}
	         * @default false
	         */
	        this.autoStart = false;
	
	        /**
	         * Scalar time value from last frame to this frame.
	         * This value is capped by setting {@link PIXI.ticker.Ticker#minFPS}
	         * and is scaled with {@link PIXI.ticker.Ticker#speed}.
	         * **Note:** The cap may be exceeded by scaling.
	         *
	         * @member {number}
	         * @default 1
	         */
	        this.deltaTime = 1;
	
	        /**
	         * Time elapsed in milliseconds from last frame to this frame.
	         * Opposed to what the scalar {@link PIXI.ticker.Ticker#deltaTime}
	         * is based, this value is neither capped nor scaled.
	         * If the platform supports DOMHighResTimeStamp,
	         * this value will have a precision of 1 µs.
	         * Defaults to target frame time
	         *
	         * @member {number}
	         * @default 16.66
	         */
	        this.elapsedMS = 1 / _settings2.default.TARGET_FPMS;
	
	        /**
	         * The last time {@link PIXI.ticker.Ticker#update} was invoked.
	         * This value is also reset internally outside of invoking
	         * update, but only when a new animation frame is requested.
	         * If the platform supports DOMHighResTimeStamp,
	         * this value will have a precision of 1 µs.
	         *
	         * @member {number}
	         * @default -1
	         */
	        this.lastTime = -1;
	
	        /**
	         * Factor of current {@link PIXI.ticker.Ticker#deltaTime}.
	         * @example
	         * // Scales ticker.deltaTime to what would be
	         * // the equivalent of approximately 120 FPS
	         * ticker.speed = 2;
	         *
	         * @member {number}
	         * @default 1
	         */
	        this.speed = 1;
	
	        /**
	         * Whether or not this ticker has been started.
	         * `true` if {@link PIXI.ticker.Ticker#start} has been called.
	         * `false` if {@link PIXI.ticker.Ticker#stop} has been called.
	         * While `false`, this value may change to `true` in the
	         * event of {@link PIXI.ticker.Ticker#autoStart} being `true`
	         * and a listener is added.
	         *
	         * @member {boolean}
	         * @default false
	         */
	        this.started = false;
	
	        /**
	         * Internal tick method bound to ticker instance.
	         * This is because in early 2015, Function.bind
	         * is still 60% slower in high performance scenarios.
	         * Also separating frame requests from update method
	         * so listeners may be called at any time and with
	         * any animation API, just invoke ticker.update(time).
	         *
	         * @private
	         * @param {number} time - Time since last tick.
	         */
	        this._tick = function (time) {
	            _this._requestId = null;
	
	            if (_this.started) {
	                // Invoke listeners now
	                _this.update(time);
	                // Listener side effects may have modified ticker state.
	                if (_this.started && _this._requestId === null && _this._head.next) {
	                    _this._requestId = requestAnimationFrame(_this._tick);
	                }
	            }
	        };
	    }
	
	    /**
	     * Conditionally requests a new animation frame.
	     * If a frame has not already been requested, and if the internal
	     * emitter has listeners, a new frame is requested.
	     *
	     * @private
	     */
	
	
	    _createClass(Ticker, [{
	        key: '_requestIfNeeded',
	        value: function _requestIfNeeded() {
	            if (this._requestId === null && this._head.next) {
	                // ensure callbacks get correct delta
	                this.lastTime = performance.now();
	                this._requestId = requestAnimationFrame(this._tick);
	            }
	        }
	
	        /**
	         * Conditionally cancels a pending animation frame.
	         *
	         * @private
	         */
	
	    }, {
	        key: '_cancelIfNeeded',
	        value: function _cancelIfNeeded() {
	            if (this._requestId !== null) {
	                cancelAnimationFrame(this._requestId);
	                this._requestId = null;
	            }
	        }
	
	        /**
	         * Conditionally requests a new animation frame.
	         * If the ticker has been started it checks if a frame has not already
	         * been requested, and if the internal emitter has listeners. If these
	         * conditions are met, a new frame is requested. If the ticker has not
	         * been started, but autoStart is `true`, then the ticker starts now,
	         * and continues with the previous conditions to request a new frame.
	         *
	         * @private
	         */
	
	    }, {
	        key: '_startIfPossible',
	        value: function _startIfPossible() {
	            if (this.started) {
	                this._requestIfNeeded();
	            } else if (this.autoStart) {
	                this.start();
	            }
	        }
	
	        /**
	         * Register a handler for tick events. Calls continuously unless
	         * it is removed or the ticker is stopped.
	         *
	         * @param {Function} fn - The listener function to be added for updates
	         * @param {Function} [context] - The listener context
	         * @param {number} [priority=PIXI.UPDATE_PRIORITY.NORMAL] - The priority for emitting
	         * @returns {PIXI.ticker.Ticker} This instance of a ticker
	         */
	
	    }, {
	        key: 'add',
	        value: function add(fn, context) {
	            var priority = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _const.UPDATE_PRIORITY.NORMAL;
	
	            return this._addListener(new _TickerListener2.default(fn, context, priority));
	        }
	
	        /**
	         * Add a handler for the tick event which is only execute once.
	         *
	         * @param {Function} fn - The listener function to be added for one update
	         * @param {Function} [context] - The listener context
	         * @param {number} [priority=PIXI.UPDATE_PRIORITY.NORMAL] - The priority for emitting
	         * @returns {PIXI.ticker.Ticker} This instance of a ticker
	         */
	
	    }, {
	        key: 'addOnce',
	        value: function addOnce(fn, context) {
	            var priority = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _const.UPDATE_PRIORITY.NORMAL;
	
	            return this._addListener(new _TickerListener2.default(fn, context, priority, true));
	        }
	
	        /**
	         * Internally adds the event handler so that it can be sorted by priority.
	         * Priority allows certain handler (user, AnimatedSprite, Interaction) to be run
	         * before the rendering.
	         *
	         * @private
	         * @param {TickerListener} listener - Current listener being added.
	         * @returns {PIXI.ticker.Ticker} This instance of a ticker
	         */
	
	    }, {
	        key: '_addListener',
	        value: function _addListener(listener) {
	            // For attaching to head
	            var current = this._head.next;
	            var previous = this._head;
	
	            // Add the first item
	            if (!current) {
	                listener.connect(previous);
	            } else {
	                // Go from highest to lowest priority
	                while (current) {
	                    if (listener.priority > current.priority) {
	                        listener.connect(previous);
	                        break;
	                    }
	                    previous = current;
	                    current = current.next;
	                }
	
	                // Not yet connected
	                if (!listener.previous) {
	                    listener.connect(previous);
	                }
	            }
	
	            this._startIfPossible();
	
	            return this;
	        }
	
	        /**
	         * Removes any handlers matching the function and context parameters.
	         * If no handlers are left after removing, then it cancels the animation frame.
	         *
	         * @param {Function} fn - The listener function to be removed
	         * @param {Function} [context] - The listener context to be removed
	         * @returns {PIXI.ticker.Ticker} This instance of a ticker
	         */
	
	    }, {
	        key: 'remove',
	        value: function remove(fn, context) {
	            var listener = this._head.next;
	
	            while (listener) {
	                // We found a match, lets remove it
	                // no break to delete all possible matches
	                // incase a listener was added 2+ times
	                if (listener.match(fn, context)) {
	                    listener = listener.destroy();
	                } else {
	                    listener = listener.next;
	                }
	            }
	
	            if (!this._head.next) {
	                this._cancelIfNeeded();
	            }
	
	            return this;
	        }
	
	        /**
	         * Starts the ticker. If the ticker has listeners
	         * a new animation frame is requested at this point.
	         */
	
	    }, {
	        key: 'start',
	        value: function start() {
	            if (!this.started) {
	                this.started = true;
	                this._requestIfNeeded();
	            }
	        }
	
	        /**
	         * Stops the ticker. If the ticker has requested
	         * an animation frame it is canceled at this point.
	         */
	
	    }, {
	        key: 'stop',
	        value: function stop() {
	            if (this.started) {
	                this.started = false;
	                this._cancelIfNeeded();
	            }
	        }
	
	        /**
	         * Destroy the ticker and don't use after this. Calling
	         * this method removes all references to internal events.
	         */
	
	    }, {
	        key: 'destroy',
	        value: function destroy() {
	            this.stop();
	
	            var listener = this._head.next;
	
	            while (listener) {
	                listener = listener.destroy(true);
	            }
	
	            this._head.destroy();
	            this._head = null;
	        }
	
	        /**
	         * Triggers an update. An update entails setting the
	         * current {@link PIXI.ticker.Ticker#elapsedMS},
	         * the current {@link PIXI.ticker.Ticker#deltaTime},
	         * invoking all listeners with current deltaTime,
	         * and then finally setting {@link PIXI.ticker.Ticker#lastTime}
	         * with the value of currentTime that was provided.
	         * This method will be called automatically by animation
	         * frame callbacks if the ticker instance has been started
	         * and listeners are added.
	         *
	         * @param {number} [currentTime=performance.now()] - the current time of execution
	         */
	
	    }, {
	        key: 'update',
	        value: function update() {
	            var currentTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : performance.now();
	
	            var elapsedMS = void 0;
	
	            // If the difference in time is zero or negative, we ignore most of the work done here.
	            // If there is no valid difference, then should be no reason to let anyone know about it.
	            // A zero delta, is exactly that, nothing should update.
	            //
	            // The difference in time can be negative, and no this does not mean time traveling.
	            // This can be the result of a race condition between when an animation frame is requested
	            // on the current JavaScript engine event loop, and when the ticker's start method is invoked
	            // (which invokes the internal _requestIfNeeded method). If a frame is requested before
	            // _requestIfNeeded is invoked, then the callback for the animation frame the ticker requests,
	            // can receive a time argument that can be less than the lastTime value that was set within
	            // _requestIfNeeded. This difference is in microseconds, but this is enough to cause problems.
	            //
	            // This check covers this browser engine timing issue, as well as if consumers pass an invalid
	            // currentTime value. This may happen if consumers opt-out of the autoStart, and update themselves.
	
	            if (currentTime > this.lastTime) {
	                // Save uncapped elapsedMS for measurement
	                elapsedMS = this.elapsedMS = currentTime - this.lastTime;
	
	                // cap the milliseconds elapsed used for deltaTime
	                if (elapsedMS > this._maxElapsedMS) {
	                    elapsedMS = this._maxElapsedMS;
	                }
	
	                this.deltaTime = elapsedMS * _settings2.default.TARGET_FPMS * this.speed;
	
	                // Cache a local reference, in-case ticker is destroyed
	                // during the emit, we can still check for head.next
	                var head = this._head;
	
	                // Invoke listeners added to internal emitter
	                var listener = head.next;
	
	                while (listener) {
	                    listener = listener.emit(this.deltaTime);
	                }
	
	                if (!head.next) {
	                    this._cancelIfNeeded();
	                }
	            } else {
	                this.deltaTime = this.elapsedMS = 0;
	            }
	
	            this.lastTime = currentTime;
	        }
	
	        /**
	         * The frames per second at which this ticker is running.
	         * The default is approximately 60 in most modern browsers.
	         * **Note:** This does not factor in the value of
	         * {@link PIXI.ticker.Ticker#speed}, which is specific
	         * to scaling {@link PIXI.ticker.Ticker#deltaTime}.
	         *
	         * @member {number}
	         * @readonly
	         */
	
	    }, {
	        key: 'FPS',
	        get: function get() {
	            return 1000 / this.elapsedMS;
	        }
	
	        /**
	         * Manages the maximum amount of milliseconds allowed to
	         * elapse between invoking {@link PIXI.ticker.Ticker#update}.
	         * This value is used to cap {@link PIXI.ticker.Ticker#deltaTime},
	         * but does not effect the measured value of {@link PIXI.ticker.Ticker#FPS}.
	         * When setting this property it is clamped to a value between
	         * `0` and `PIXI.settings.TARGET_FPMS * 1000`.
	         *
	         * @member {number}
	         * @default 10
	         */
	
	    }, {
	        key: 'minFPS',
	        get: function get() {
	            return 1000 / this._maxElapsedMS;
	        },
	        set: function set(fps) // eslint-disable-line require-jsdoc
	        {
	            // Clamp: 0 to TARGET_FPMS
	            var minFPMS = Math.min(Math.max(0, fps) / 1000, _settings2.default.TARGET_FPMS);
	
	            this._maxElapsedMS = 1 / minFPMS;
	        }
	    }]);
	
	    return Ticker;
	}();
	
	exports.default = Ticker;

/***/ }),
/* 374 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Internal class for handling the priority sorting of ticker handlers.
	 *
	 * @private
	 * @class
	 * @memberof PIXI.ticker
	 */
	var TickerListener = function () {
	    /**
	     * Constructor
	     *
	     * @param {Function} fn - The listener function to be added for one update
	     * @param {Function} [context=null] - The listener context
	     * @param {number} [priority=0] - The priority for emitting
	     * @param {boolean} [once=false] - If the handler should fire once
	     */
	    function TickerListener(fn) {
	        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	        var priority = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
	        var once = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
	
	        _classCallCheck(this, TickerListener);
	
	        /**
	         * The handler function to execute.
	         * @member {Function}
	         */
	        this.fn = fn;
	
	        /**
	         * The calling to execute.
	         * @member {Function}
	         */
	        this.context = context;
	
	        /**
	         * The current priority.
	         * @member {number}
	         */
	        this.priority = priority;
	
	        /**
	         * If this should only execute once.
	         * @member {boolean}
	         */
	        this.once = once;
	
	        /**
	         * The next item in chain.
	         * @member {TickerListener}
	         */
	        this.next = null;
	
	        /**
	         * The previous item in chain.
	         * @member {TickerListener}
	         */
	        this.previous = null;
	
	        /**
	         * `true` if this listener has been destroyed already.
	         * @member {boolean}
	         * @private
	         */
	        this._destroyed = false;
	    }
	
	    /**
	     * Simple compare function to figure out if a function and context match.
	     *
	     * @param {Function} fn - The listener function to be added for one update
	     * @param {Function} context - The listener context
	     * @return {boolean} `true` if the listener match the arguments
	     */
	
	
	    _createClass(TickerListener, [{
	        key: "match",
	        value: function match(fn, context) {
	            context = context || null;
	
	            return this.fn === fn && this.context === context;
	        }
	
	        /**
	         * Emit by calling the current function.
	         * @param {number} deltaTime - time since the last emit.
	         * @return {TickerListener} Next ticker
	         */
	
	    }, {
	        key: "emit",
	        value: function emit(deltaTime) {
	            if (this.fn) {
	                if (this.context) {
	                    this.fn.call(this.context, deltaTime);
	                } else {
	                    this.fn(deltaTime);
	                }
	            }
	
	            var redirect = this.next;
	
	            if (this.once) {
	                this.destroy(true);
	            }
	
	            // Soft-destroying should remove
	            // the next reference
	            if (this._destroyed) {
	                this.next = null;
	            }
	
	            return redirect;
	        }
	
	        /**
	         * Connect to the list.
	         * @param {TickerListener} previous - Input node, previous listener
	         */
	
	    }, {
	        key: "connect",
	        value: function connect(previous) {
	            this.previous = previous;
	            if (previous.next) {
	                previous.next.previous = this;
	            }
	            this.next = previous.next;
	            previous.next = this;
	        }
	
	        /**
	         * Destroy and don't use after this.
	         * @param {boolean} [hard = false] `true` to remove the `next` reference, this
	         *        is considered a hard destroy. Soft destroy maintains the next reference.
	         * @return {TickerListener} The listener to redirect while emitting or removing.
	         */
	
	    }, {
	        key: "destroy",
	        value: function destroy() {
	            var hard = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
	
	            this._destroyed = true;
	            this.fn = null;
	            this.context = null;
	
	            // Disconnect, hook up next and previous
	            if (this.previous) {
	                this.previous.next = this.next;
	            }
	
	            if (this.next) {
	                this.next.previous = this.previous;
	            }
	
	            // Redirect to the next item
	            var redirect = this.previous;
	
	            // Remove references
	            this.next = hard ? null : redirect;
	            this.previous = null;
	
	            return redirect;
	        }
	    }]);
	
	    return TickerListener;
	}();
	
	exports.default = TickerListener;

/***/ }),
/* 375 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _GroupD = __webpack_require__(349);
	
	var _GroupD2 = _interopRequireDefault(_GroupD);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * A standard object to store the Uvs of a texture
	 *
	 * @class
	 * @private
	 * @memberof PIXI
	 */
	var TextureUvs = function () {
	    /**
	     *
	     */
	    function TextureUvs() {
	        _classCallCheck(this, TextureUvs);
	
	        this.x0 = 0;
	        this.y0 = 0;
	
	        this.x1 = 1;
	        this.y1 = 0;
	
	        this.x2 = 1;
	        this.y2 = 1;
	
	        this.x3 = 0;
	        this.y3 = 1;
	
	        this.uvsUint32 = new Uint32Array(4);
	    }
	
	    /**
	     * Sets the texture Uvs based on the given frame information.
	     *
	     * @private
	     * @param {PIXI.Rectangle} frame - The frame of the texture
	     * @param {PIXI.Rectangle} baseFrame - The base frame of the texture
	     * @param {number} rotate - Rotation of frame, see {@link PIXI.GroupD8}
	     */
	
	
	    _createClass(TextureUvs, [{
	        key: 'set',
	        value: function set(frame, baseFrame, rotate) {
	            var tw = baseFrame.width;
	            var th = baseFrame.height;
	
	            if (rotate) {
	                // width and height div 2 div baseFrame size
	                var w2 = frame.width / 2 / tw;
	                var h2 = frame.height / 2 / th;
	
	                // coordinates of center
	                var cX = frame.x / tw + w2;
	                var cY = frame.y / th + h2;
	
	                rotate = _GroupD2.default.add(rotate, _GroupD2.default.NW); // NW is top-left corner
	                this.x0 = cX + w2 * _GroupD2.default.uX(rotate);
	                this.y0 = cY + h2 * _GroupD2.default.uY(rotate);
	
	                rotate = _GroupD2.default.add(rotate, 2); // rotate 90 degrees clockwise
	                this.x1 = cX + w2 * _GroupD2.default.uX(rotate);
	                this.y1 = cY + h2 * _GroupD2.default.uY(rotate);
	
	                rotate = _GroupD2.default.add(rotate, 2);
	                this.x2 = cX + w2 * _GroupD2.default.uX(rotate);
	                this.y2 = cY + h2 * _GroupD2.default.uY(rotate);
	
	                rotate = _GroupD2.default.add(rotate, 2);
	                this.x3 = cX + w2 * _GroupD2.default.uX(rotate);
	                this.y3 = cY + h2 * _GroupD2.default.uY(rotate);
	            } else {
	                this.x0 = frame.x / tw;
	                this.y0 = frame.y / th;
	
	                this.x1 = (frame.x + frame.width) / tw;
	                this.y1 = frame.y / th;
	
	                this.x2 = (frame.x + frame.width) / tw;
	                this.y2 = (frame.y + frame.height) / th;
	
	                this.x3 = frame.x / tw;
	                this.y3 = (frame.y + frame.height) / th;
	            }
	
	            this.uvsUint32[0] = (this.y0 * 65535 & 0xFFFF) << 16 | this.x0 * 65535 & 0xFFFF;
	            this.uvsUint32[1] = (this.y1 * 65535 & 0xFFFF) << 16 | this.x1 * 65535 & 0xFFFF;
	            this.uvsUint32[2] = (this.y2 * 65535 & 0xFFFF) << 16 | this.x2 * 65535 & 0xFFFF;
	            this.uvsUint32[3] = (this.y3 * 65535 & 0xFFFF) << 16 | this.x3 * 65535 & 0xFFFF;
	        }
	    }]);
	
	    return TextureUvs;
	}();
	
	exports.default = TextureUvs;

/***/ }),
/* 376 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * A GraphicsData object.
	 *
	 * @class
	 * @memberof PIXI
	 */
	var GraphicsData = function () {
	  /**
	   *
	   * @param {number} lineWidth - the width of the line to draw
	   * @param {number} lineColor - the color of the line to draw
	   * @param {number} lineAlpha - the alpha of the line to draw
	   * @param {number} fillColor - the color of the fill
	   * @param {number} fillAlpha - the alpha of the fill
	   * @param {boolean} fill - whether or not the shape is filled with a colour
	   * @param {boolean} nativeLines - the method for drawing lines
	   * @param {PIXI.Circle|PIXI.Rectangle|PIXI.Ellipse|PIXI.Polygon} shape - The shape object to draw.
	   */
	  function GraphicsData(lineWidth, lineColor, lineAlpha, fillColor, fillAlpha, fill, nativeLines, shape) {
	    _classCallCheck(this, GraphicsData);
	
	    /**
	     * @member {number} the width of the line to draw
	     */
	    this.lineWidth = lineWidth;
	    /**
	     * @member {boolean} if true the liens will be draw using LINES instead of TRIANGLE_STRIP
	     */
	    this.nativeLines = nativeLines;
	
	    /**
	     * @member {number} the color of the line to draw
	     */
	    this.lineColor = lineColor;
	
	    /**
	     * @member {number} the alpha of the line to draw
	     */
	    this.lineAlpha = lineAlpha;
	
	    /**
	     * @member {number} cached tint of the line to draw
	     */
	    this._lineTint = lineColor;
	
	    /**
	     * @member {number} the color of the fill
	     */
	    this.fillColor = fillColor;
	
	    /**
	     * @member {number} the alpha of the fill
	     */
	    this.fillAlpha = fillAlpha;
	
	    /**
	     * @member {number} cached tint of the fill
	     */
	    this._fillTint = fillColor;
	
	    /**
	     * @member {boolean} whether or not the shape is filled with a colour
	     */
	    this.fill = fill;
	
	    this.holes = [];
	
	    /**
	     * @member {PIXI.Circle|PIXI.Ellipse|PIXI.Polygon|PIXI.Rectangle|PIXI.RoundedRectangle} The shape object to draw.
	     */
	    this.shape = shape;
	
	    /**
	     * @member {number} The type of the shape, see the Const.Shapes file for all the existing types,
	     */
	    this.type = shape.type;
	  }
	
	  /**
	   * Creates a new GraphicsData object with the same values as this one.
	   *
	   * @return {PIXI.GraphicsData} Cloned GraphicsData object
	   */
	
	
	  _createClass(GraphicsData, [{
	    key: "clone",
	    value: function clone() {
	      return new GraphicsData(this.lineWidth, this.lineColor, this.lineAlpha, this.fillColor, this.fillAlpha, this.fill, this.nativeLines, this.shape);
	    }
	
	    /**
	     * Adds a hole to the shape.
	     *
	     * @param {PIXI.Rectangle|PIXI.Circle} shape - The shape of the hole.
	     */
	
	  }, {
	    key: "addHole",
	    value: function addHole(shape) {
	      this.holes.push(shape);
	    }
	
	    /**
	     * Destroys the Graphics data.
	     */
	
	  }, {
	    key: "destroy",
	    value: function destroy() {
	      this.shape = null;
	      this.holes = null;
	    }
	  }]);
	
	  return GraphicsData;
	}();
	
	exports.default = GraphicsData;

/***/ }),
/* 377 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _math = __webpack_require__(345);
	
	var _utils = __webpack_require__(332);
	
	var _const = __webpack_require__(333);
	
	var _Texture = __webpack_require__(370);
	
	var _Texture2 = _interopRequireDefault(_Texture);
	
	var _Container2 = __webpack_require__(331);
	
	var _Container3 = _interopRequireDefault(_Container2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var tempPoint = new _math.Point();
	
	/**
	 * The Sprite object is the base for all textured objects that are rendered to the screen
	 *
	 * A sprite can be created directly from an image like this:
	 *
	 * ```js
	 * let sprite = new PIXI.Sprite.fromImage('assets/image.png');
	 * ```
	 *
	 * @class
	 * @extends PIXI.Container
	 * @memberof PIXI
	 */
	
	var Sprite = function (_Container) {
	    _inherits(Sprite, _Container);
	
	    /**
	     * @param {PIXI.Texture} texture - The texture for this sprite
	     */
	    function Sprite(texture) {
	        _classCallCheck(this, Sprite);
	
	        /**
	         * The anchor sets the origin point of the texture.
	         * The default is 0,0 this means the texture's origin is the top left
	         * Setting the anchor to 0.5,0.5 means the texture's origin is centered
	         * Setting the anchor to 1,1 would mean the texture's origin point will be the bottom right corner
	         *
	         * @member {PIXI.ObservablePoint}
	         * @private
	         */
	        var _this = _possibleConstructorReturn(this, (Sprite.__proto__ || Object.getPrototypeOf(Sprite)).call(this));
	
	        _this._anchor = new _math.ObservablePoint(_this._onAnchorUpdate, _this);
	
	        /**
	         * The texture that the sprite is using
	         *
	         * @private
	         * @member {PIXI.Texture}
	         */
	        _this._texture = null;
	
	        /**
	         * The width of the sprite (this is initially set by the texture)
	         *
	         * @private
	         * @member {number}
	         */
	        _this._width = 0;
	
	        /**
	         * The height of the sprite (this is initially set by the texture)
	         *
	         * @private
	         * @member {number}
	         */
	        _this._height = 0;
	
	        /**
	         * The tint applied to the sprite. This is a hex value. A value of 0xFFFFFF will remove any tint effect.
	         *
	         * @private
	         * @member {number}
	         * @default 0xFFFFFF
	         */
	        _this._tint = null;
	        _this._tintRGB = null;
	        _this.tint = 0xFFFFFF;
	
	        /**
	         * The blend mode to be applied to the sprite. Apply a value of `PIXI.BLEND_MODES.NORMAL` to reset the blend mode.
	         *
	         * @member {number}
	         * @default PIXI.BLEND_MODES.NORMAL
	         * @see PIXI.BLEND_MODES
	         */
	        _this.blendMode = _const.BLEND_MODES.NORMAL;
	
	        /**
	         * The shader that will be used to render the sprite. Set to null to remove a current shader.
	         *
	         * @member {PIXI.Filter|PIXI.Shader}
	         */
	        _this.shader = null;
	
	        /**
	         * An internal cached value of the tint.
	         *
	         * @private
	         * @member {number}
	         * @default 0xFFFFFF
	         */
	        _this.cachedTint = 0xFFFFFF;
	
	        // call texture setter
	        _this.texture = texture || _Texture2.default.EMPTY;
	
	        /**
	         * this is used to store the vertex data of the sprite (basically a quad)
	         *
	         * @private
	         * @member {Float32Array}
	         */
	        _this.vertexData = new Float32Array(8);
	
	        /**
	         * This is used to calculate the bounds of the object IF it is a trimmed sprite
	         *
	         * @private
	         * @member {Float32Array}
	         */
	        _this.vertexTrimmedData = null;
	
	        _this._transformID = -1;
	        _this._textureID = -1;
	
	        _this._transformTrimmedID = -1;
	        _this._textureTrimmedID = -1;
	
	        /**
	         * Plugin that is responsible for rendering this element.
	         * Allows to customize the rendering process without overriding '_renderWebGL' & '_renderCanvas' methods.
	         *
	         * @member {string}
	         * @default 'sprite'
	         */
	        _this.pluginName = 'sprite';
	        return _this;
	    }
	
	    /**
	     * When the texture is updated, this event will fire to update the scale and frame
	     *
	     * @private
	     */
	
	
	    _createClass(Sprite, [{
	        key: '_onTextureUpdate',
	        value: function _onTextureUpdate() {
	            this._textureID = -1;
	            this._textureTrimmedID = -1;
	            this.cachedTint = 0xFFFFFF;
	
	            // so if _width is 0 then width was not set..
	            if (this._width) {
	                this.scale.x = (0, _utils.sign)(this.scale.x) * this._width / this._texture.orig.width;
	            }
	
	            if (this._height) {
	                this.scale.y = (0, _utils.sign)(this.scale.y) * this._height / this._texture.orig.height;
	            }
	        }
	
	        /**
	         * Called when the anchor position updates.
	         *
	         * @private
	         */
	
	    }, {
	        key: '_onAnchorUpdate',
	        value: function _onAnchorUpdate() {
	            this._transformID = -1;
	            this._transformTrimmedID = -1;
	        }
	
	        /**
	         * calculates worldTransform * vertices, store it in vertexData
	         */
	
	    }, {
	        key: 'calculateVertices',
	        value: function calculateVertices() {
	            if (this._transformID === this.transform._worldID && this._textureID === this._texture._updateID) {
	                return;
	            }
	
	            this._transformID = this.transform._worldID;
	            this._textureID = this._texture._updateID;
	
	            // set the vertex data
	
	            var texture = this._texture;
	            var wt = this.transform.worldTransform;
	            var a = wt.a;
	            var b = wt.b;
	            var c = wt.c;
	            var d = wt.d;
	            var tx = wt.tx;
	            var ty = wt.ty;
	            var vertexData = this.vertexData;
	            var trim = texture.trim;
	            var orig = texture.orig;
	            var anchor = this._anchor;
	
	            var w0 = 0;
	            var w1 = 0;
	            var h0 = 0;
	            var h1 = 0;
	
	            if (trim) {
	                // if the sprite is trimmed and is not a tilingsprite then we need to add the extra
	                // space before transforming the sprite coords.
	                w1 = trim.x - anchor._x * orig.width;
	                w0 = w1 + trim.width;
	
	                h1 = trim.y - anchor._y * orig.height;
	                h0 = h1 + trim.height;
	            } else {
	                w1 = -anchor._x * orig.width;
	                w0 = w1 + orig.width;
	
	                h1 = -anchor._y * orig.height;
	                h0 = h1 + orig.height;
	            }
	
	            // xy
	            vertexData[0] = a * w1 + c * h1 + tx;
	            vertexData[1] = d * h1 + b * w1 + ty;
	
	            // xy
	            vertexData[2] = a * w0 + c * h1 + tx;
	            vertexData[3] = d * h1 + b * w0 + ty;
	
	            // xy
	            vertexData[4] = a * w0 + c * h0 + tx;
	            vertexData[5] = d * h0 + b * w0 + ty;
	
	            // xy
	            vertexData[6] = a * w1 + c * h0 + tx;
	            vertexData[7] = d * h0 + b * w1 + ty;
	        }
	
	        /**
	         * calculates worldTransform * vertices for a non texture with a trim. store it in vertexTrimmedData
	         * This is used to ensure that the true width and height of a trimmed texture is respected
	         */
	
	    }, {
	        key: 'calculateTrimmedVertices',
	        value: function calculateTrimmedVertices() {
	            if (!this.vertexTrimmedData) {
	                this.vertexTrimmedData = new Float32Array(8);
	            } else if (this._transformTrimmedID === this.transform._worldID && this._textureTrimmedID === this._texture._updateID) {
	                return;
	            }
	
	            this._transformTrimmedID = this.transform._worldID;
	            this._textureTrimmedID = this._texture._updateID;
	
	            // lets do some special trim code!
	            var texture = this._texture;
	            var vertexData = this.vertexTrimmedData;
	            var orig = texture.orig;
	            var anchor = this._anchor;
	
	            // lets calculate the new untrimmed bounds..
	            var wt = this.transform.worldTransform;
	            var a = wt.a;
	            var b = wt.b;
	            var c = wt.c;
	            var d = wt.d;
	            var tx = wt.tx;
	            var ty = wt.ty;
	
	            var w1 = -anchor._x * orig.width;
	            var w0 = w1 + orig.width;
	
	            var h1 = -anchor._y * orig.height;
	            var h0 = h1 + orig.height;
	
	            // xy
	            vertexData[0] = a * w1 + c * h1 + tx;
	            vertexData[1] = d * h1 + b * w1 + ty;
	
	            // xy
	            vertexData[2] = a * w0 + c * h1 + tx;
	            vertexData[3] = d * h1 + b * w0 + ty;
	
	            // xy
	            vertexData[4] = a * w0 + c * h0 + tx;
	            vertexData[5] = d * h0 + b * w0 + ty;
	
	            // xy
	            vertexData[6] = a * w1 + c * h0 + tx;
	            vertexData[7] = d * h0 + b * w1 + ty;
	        }
	
	        /**
	        *
	        * Renders the object using the WebGL renderer
	        *
	        * @private
	        * @param {PIXI.WebGLRenderer} renderer - The webgl renderer to use.
	        */
	
	    }, {
	        key: '_renderWebGL',
	        value: function _renderWebGL(renderer) {
	            this.calculateVertices();
	
	            renderer.setObjectRenderer(renderer.plugins[this.pluginName]);
	            renderer.plugins[this.pluginName].render(this);
	        }
	
	        /**
	        * Renders the object using the Canvas renderer
	        *
	        * @private
	        * @param {PIXI.CanvasRenderer} renderer - The renderer
	        */
	
	    }, {
	        key: '_renderCanvas',
	        value: function _renderCanvas(renderer) {
	            renderer.plugins[this.pluginName].render(this);
	        }
	
	        /**
	         * Updates the bounds of the sprite.
	         *
	         * @private
	         */
	
	    }, {
	        key: '_calculateBounds',
	        value: function _calculateBounds() {
	            var trim = this._texture.trim;
	            var orig = this._texture.orig;
	
	            // First lets check to see if the current texture has a trim..
	            if (!trim || trim.width === orig.width && trim.height === orig.height) {
	                // no trim! lets use the usual calculations..
	                this.calculateVertices();
	                this._bounds.addQuad(this.vertexData);
	            } else {
	                // lets calculate a special trimmed bounds...
	                this.calculateTrimmedVertices();
	                this._bounds.addQuad(this.vertexTrimmedData);
	            }
	        }
	
	        /**
	         * Gets the local bounds of the sprite object.
	         *
	         * @param {PIXI.Rectangle} rect - The output rectangle.
	         * @return {PIXI.Rectangle} The bounds.
	         */
	
	    }, {
	        key: 'getLocalBounds',
	        value: function getLocalBounds(rect) {
	            // we can do a fast local bounds if the sprite has no children!
	            if (this.children.length === 0) {
	                this._bounds.minX = this._texture.orig.width * -this._anchor._x;
	                this._bounds.minY = this._texture.orig.height * -this._anchor._y;
	                this._bounds.maxX = this._texture.orig.width * (1 - this._anchor._x);
	                this._bounds.maxY = this._texture.orig.height * (1 - this._anchor._y);
	
	                if (!rect) {
	                    if (!this._localBoundsRect) {
	                        this._localBoundsRect = new _math.Rectangle();
	                    }
	
	                    rect = this._localBoundsRect;
	                }
	
	                return this._bounds.getRectangle(rect);
	            }
	
	            return _get(Sprite.prototype.__proto__ || Object.getPrototypeOf(Sprite.prototype), 'getLocalBounds', this).call(this, rect);
	        }
	
	        /**
	         * Tests if a point is inside this sprite
	         *
	         * @param {PIXI.Point} point - the point to test
	         * @return {boolean} the result of the test
	         */
	
	    }, {
	        key: 'containsPoint',
	        value: function containsPoint(point) {
	            this.worldTransform.applyInverse(point, tempPoint);
	
	            var width = this._texture.orig.width;
	            var height = this._texture.orig.height;
	            var x1 = -width * this.anchor.x;
	            var y1 = 0;
	
	            if (tempPoint.x >= x1 && tempPoint.x < x1 + width) {
	                y1 = -height * this.anchor.y;
	
	                if (tempPoint.y >= y1 && tempPoint.y < y1 + height) {
	                    return true;
	                }
	            }
	
	            return false;
	        }
	
	        /**
	         * Destroys this sprite and optionally its texture and children
	         *
	         * @param {object|boolean} [options] - Options parameter. A boolean will act as if all options
	         *  have been set to that value
	         * @param {boolean} [options.children=false] - if set to true, all the children will have their destroy
	         *      method called as well. 'options' will be passed on to those calls.
	         * @param {boolean} [options.texture=false] - Should it destroy the current texture of the sprite as well
	         * @param {boolean} [options.baseTexture=false] - Should it destroy the base texture of the sprite as well
	         */
	
	    }, {
	        key: 'destroy',
	        value: function destroy(options) {
	            _get(Sprite.prototype.__proto__ || Object.getPrototypeOf(Sprite.prototype), 'destroy', this).call(this, options);
	
	            this._anchor = null;
	
	            var destroyTexture = typeof options === 'boolean' ? options : options && options.texture;
	
	            if (destroyTexture) {
	                var destroyBaseTexture = typeof options === 'boolean' ? options : options && options.baseTexture;
	
	                this._texture.destroy(!!destroyBaseTexture);
	            }
	
	            this._texture = null;
	            this.shader = null;
	        }
	
	        // some helper functions..
	
	        /**
	         * Helper function that creates a new sprite based on the source you provide.
	         * The source can be - frame id, image url, video url, canvas element, video element, base texture
	         *
	         * @static
	         * @param {number|string|PIXI.BaseTexture|HTMLCanvasElement|HTMLVideoElement} source Source to create texture from
	         * @return {PIXI.Sprite} The newly created sprite
	         */
	
	    }, {
	        key: 'width',
	
	
	        /**
	         * The width of the sprite, setting this will actually modify the scale to achieve the value set
	         *
	         * @member {number}
	         */
	        get: function get() {
	            return Math.abs(this.scale.x) * this._texture.orig.width;
	        },
	        set: function set(value) // eslint-disable-line require-jsdoc
	        {
	            var s = (0, _utils.sign)(this.scale.x) || 1;
	
	            this.scale.x = s * value / this._texture.orig.width;
	            this._width = value;
	        }
	
	        /**
	         * The height of the sprite, setting this will actually modify the scale to achieve the value set
	         *
	         * @member {number}
	         */
	
	    }, {
	        key: 'height',
	        get: function get() {
	            return Math.abs(this.scale.y) * this._texture.orig.height;
	        },
	        set: function set(value) // eslint-disable-line require-jsdoc
	        {
	            var s = (0, _utils.sign)(this.scale.y) || 1;
	
	            this.scale.y = s * value / this._texture.orig.height;
	            this._height = value;
	        }
	
	        /**
	         * The anchor sets the origin point of the texture.
	         * The default is 0,0 this means the texture's origin is the top left
	         * Setting the anchor to 0.5,0.5 means the texture's origin is centered
	         * Setting the anchor to 1,1 would mean the texture's origin point will be the bottom right corner
	         *
	         * @member {PIXI.ObservablePoint}
	         */
	
	    }, {
	        key: 'anchor',
	        get: function get() {
	            return this._anchor;
	        },
	        set: function set(value) // eslint-disable-line require-jsdoc
	        {
	            this._anchor.copy(value);
	        }
	
	        /**
	         * The tint applied to the sprite. This is a hex value.
	         * A value of 0xFFFFFF will remove any tint effect.
	         *
	         * @member {number}
	         * @default 0xFFFFFF
	         */
	
	    }, {
	        key: 'tint',
	        get: function get() {
	            return this._tint;
	        },
	        set: function set(value) // eslint-disable-line require-jsdoc
	        {
	            this._tint = value;
	            this._tintRGB = (value >> 16) + (value & 0xff00) + ((value & 0xff) << 16);
	        }
	
	        /**
	         * The texture that the sprite is using
	         *
	         * @member {PIXI.Texture}
	         */
	
	    }, {
	        key: 'texture',
	        get: function get() {
	            return this._texture;
	        },
	        set: function set(value) // eslint-disable-line require-jsdoc
	        {
	            if (this._texture === value) {
	                return;
	            }
	
	            this._texture = value;
	            this.cachedTint = 0xFFFFFF;
	
	            this._textureID = -1;
	            this._textureTrimmedID = -1;
	
	            if (value) {
	                // wait for the texture to load
	                if (value.baseTexture.hasLoaded) {
	                    this._onTextureUpdate();
	                } else {
	                    value.once('update', this._onTextureUpdate, this);
	                }
	            }
	        }
	    }], [{
	        key: 'from',
	        value: function from(source) {
	            return new Sprite(_Texture2.default.from(source));
	        }
	
	        /**
	         * Helper function that creates a sprite that will contain a texture from the TextureCache based on the frameId
	         * The frame ids are created when a Texture packer file has been loaded
	         *
	         * @static
	         * @param {string} frameId - The frame Id of the texture in the cache
	         * @return {PIXI.Sprite} A new Sprite using a texture from the texture cache matching the frameId
	         */
	
	    }, {
	        key: 'fromFrame',
	        value: function fromFrame(frameId) {
	            var texture = _utils.TextureCache[frameId];
	
	            if (!texture) {
	                throw new Error('The frameId "' + frameId + '" does not exist in the texture cache');
	            }
	
	            return new Sprite(texture);
	        }
	
	        /**
	         * Helper function that creates a sprite that will contain a texture based on an image url
	         * If the image is not in the texture cache it will be loaded
	         *
	         * @static
	         * @param {string} imageId - The image url of the texture
	         * @param {boolean} [crossorigin=(auto)] - if you want to specify the cross-origin parameter
	         * @param {number} [scaleMode=PIXI.settings.SCALE_MODE] - if you want to specify the scale mode,
	         *  see {@link PIXI.SCALE_MODES} for possible values
	         * @return {PIXI.Sprite} A new Sprite using a texture from the texture cache matching the image id
	         */
	
	    }, {
	        key: 'fromImage',
	        value: function fromImage(imageId, crossorigin, scaleMode) {
	            return new Sprite(_Texture2.default.fromImage(imageId, crossorigin, scaleMode));
	        }
	    }]);
	
	    return Sprite;
	}(_Container3.default);
	
	exports.default = Sprite;

/***/ }),
/* 378 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = bezierCurveTo;
	/**
	 * Calculate the points for a bezier curve and then draws it.
	 *
	 * Ignored from docs since it is not directly exposed.
	 *
	 * @ignore
	 * @param {number} fromX - Starting point x
	 * @param {number} fromY - Starting point y
	 * @param {number} cpX - Control point x
	 * @param {number} cpY - Control point y
	 * @param {number} cpX2 - Second Control point x
	 * @param {number} cpY2 - Second Control point y
	 * @param {number} toX - Destination point x
	 * @param {number} toY - Destination point y
	 * @param {number[]} [path=[]] - Path array to push points into
	 * @return {number[]} Array of points of the curve
	 */
	function bezierCurveTo(fromX, fromY, cpX, cpY, cpX2, cpY2, toX, toY) {
	    var path = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : [];
	
	    var n = 20;
	    var dt = 0;
	    var dt2 = 0;
	    var dt3 = 0;
	    var t2 = 0;
	    var t3 = 0;
	
	    path.push(fromX, fromY);
	
	    for (var i = 1, j = 0; i <= n; ++i) {
	        j = i / n;
	
	        dt = 1 - j;
	        dt2 = dt * dt;
	        dt3 = dt2 * dt;
	
	        t2 = j * j;
	        t3 = t2 * j;
	
	        path.push(dt3 * fromX + 3 * dt2 * j * cpX + 3 * dt * t2 * cpX2 + t3 * toX, dt3 * fromY + 3 * dt2 * j * cpY + 3 * dt * t2 * cpY2 + t3 * toY);
	    }
	
	    return path;
	}

/***/ }),
/* 379 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _SystemRenderer2 = __webpack_require__(380);
	
	var _SystemRenderer3 = _interopRequireDefault(_SystemRenderer2);
	
	var _CanvasMaskManager = __webpack_require__(381);
	
	var _CanvasMaskManager2 = _interopRequireDefault(_CanvasMaskManager);
	
	var _CanvasRenderTarget = __webpack_require__(382);
	
	var _CanvasRenderTarget2 = _interopRequireDefault(_CanvasRenderTarget);
	
	var _mapCanvasBlendModesToPixi = __webpack_require__(383);
	
	var _mapCanvasBlendModesToPixi2 = _interopRequireDefault(_mapCanvasBlendModesToPixi);
	
	var _utils = __webpack_require__(332);
	
	var _const = __webpack_require__(333);
	
	var _settings = __webpack_require__(334);
	
	var _settings2 = _interopRequireDefault(_settings);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * The CanvasRenderer draws the scene and all its content onto a 2d canvas. This renderer should
	 * be used for browsers that do not support WebGL. Don't forget to add the CanvasRenderer.view to
	 * your DOM or you will not see anything :)
	 *
	 * @class
	 * @memberof PIXI
	 * @extends PIXI.SystemRenderer
	 */
	var CanvasRenderer = function (_SystemRenderer) {
	    _inherits(CanvasRenderer, _SystemRenderer);
	
	    // eslint-disable-next-line valid-jsdoc
	    /**
	     * @param {object} [options] - The optional renderer parameters
	     * @param {number} [options.width=800] - the width of the screen
	     * @param {number} [options.height=600] - the height of the screen
	     * @param {HTMLCanvasElement} [options.view] - the canvas to use as a view, optional
	     * @param {boolean} [options.transparent=false] - If the render view is transparent, default false
	     * @param {boolean} [options.autoResize=false] - If the render view is automatically resized, default false
	     * @param {boolean} [options.antialias=false] - sets antialias (only applicable in chrome at the moment)
	     * @param {number} [options.resolution=1] - The resolution / device pixel ratio of the renderer. The
	     *  resolution of the renderer retina would be 2.
	     * @param {boolean} [options.preserveDrawingBuffer=false] - enables drawing buffer preservation,
	     *  enable this if you need to call toDataUrl on the webgl context.
	     * @param {boolean} [options.clearBeforeRender=true] - This sets if the renderer will clear the canvas or
	     *      not before the new render pass.
	     * @param {number} [options.backgroundColor=0x000000] - The background color of the rendered area
	     *  (shown if not transparent).
	     * @param {boolean} [options.roundPixels=false] - If true PixiJS will Math.floor() x/y values when rendering,
	     *  stopping pixel interpolation.
	     */
	    function CanvasRenderer(options, arg2, arg3) {
	        _classCallCheck(this, CanvasRenderer);
	
	        var _this = _possibleConstructorReturn(this, (CanvasRenderer.__proto__ || Object.getPrototypeOf(CanvasRenderer)).call(this, 'Canvas', options, arg2, arg3));
	
	        _this.type = _const.RENDERER_TYPE.CANVAS;
	
	        /**
	         * The root canvas 2d context that everything is drawn with.
	         *
	         * @member {CanvasRenderingContext2D}
	         */
	        _this.rootContext = _this.view.getContext('2d', { alpha: _this.transparent });
	
	        /**
	         * The currently active canvas 2d context (could change with renderTextures)
	         *
	         * @member {CanvasRenderingContext2D}
	         */
	        _this.context = _this.rootContext;
	
	        /**
	         * Boolean flag controlling canvas refresh.
	         *
	         * @member {boolean}
	         */
	        _this.refresh = true;
	
	        /**
	         * Instance of a CanvasMaskManager, handles masking when using the canvas renderer.
	         *
	         * @member {PIXI.CanvasMaskManager}
	         */
	        _this.maskManager = new _CanvasMaskManager2.default(_this);
	
	        /**
	         * The canvas property used to set the canvas smoothing property.
	         *
	         * @member {string}
	         */
	        _this.smoothProperty = 'imageSmoothingEnabled';
	
	        if (!_this.rootContext.imageSmoothingEnabled) {
	            if (_this.rootContext.webkitImageSmoothingEnabled) {
	                _this.smoothProperty = 'webkitImageSmoothingEnabled';
	            } else if (_this.rootContext.mozImageSmoothingEnabled) {
	                _this.smoothProperty = 'mozImageSmoothingEnabled';
	            } else if (_this.rootContext.oImageSmoothingEnabled) {
	                _this.smoothProperty = 'oImageSmoothingEnabled';
	            } else if (_this.rootContext.msImageSmoothingEnabled) {
	                _this.smoothProperty = 'msImageSmoothingEnabled';
	            }
	        }
	
	        _this.initPlugins();
	
	        _this.blendModes = (0, _mapCanvasBlendModesToPixi2.default)();
	        _this._activeBlendMode = null;
	
	        _this.renderingToScreen = false;
	
	        _this.resize(_this.options.width, _this.options.height);
	
	        /**
	         * Fired after rendering finishes.
	         *
	         * @event PIXI.CanvasRenderer#postrender
	         */
	
	        /**
	         * Fired before rendering starts.
	         *
	         * @event PIXI.CanvasRenderer#prerender
	         */
	        return _this;
	    }
	
	    /**
	     * Renders the object to this canvas view
	     *
	     * @param {PIXI.DisplayObject} displayObject - The object to be rendered
	     * @param {PIXI.RenderTexture} [renderTexture] - A render texture to be rendered to.
	     *  If unset, it will render to the root context.
	     * @param {boolean} [clear=false] - Whether to clear the canvas before drawing
	     * @param {PIXI.Transform} [transform] - A transformation to be applied
	     * @param {boolean} [skipUpdateTransform=false] - Whether to skip the update transform
	     */
	
	
	    _createClass(CanvasRenderer, [{
	        key: 'render',
	        value: function render(displayObject, renderTexture, clear, transform, skipUpdateTransform) {
	            if (!this.view) {
	                return;
	            }
	
	            // can be handy to know!
	            this.renderingToScreen = !renderTexture;
	
	            this.emit('prerender');
	
	            var rootResolution = this.resolution;
	
	            if (renderTexture) {
	                renderTexture = renderTexture.baseTexture || renderTexture;
	
	                if (!renderTexture._canvasRenderTarget) {
	                    renderTexture._canvasRenderTarget = new _CanvasRenderTarget2.default(renderTexture.width, renderTexture.height, renderTexture.resolution);
	                    renderTexture.source = renderTexture._canvasRenderTarget.canvas;
	                    renderTexture.valid = true;
	                }
	
	                this.context = renderTexture._canvasRenderTarget.context;
	                this.resolution = renderTexture._canvasRenderTarget.resolution;
	            } else {
	                this.context = this.rootContext;
	            }
	
	            var context = this.context;
	
	            if (!renderTexture) {
	                this._lastObjectRendered = displayObject;
	            }
	
	            if (!skipUpdateTransform) {
	                // update the scene graph
	                var cacheParent = displayObject.parent;
	                var tempWt = this._tempDisplayObjectParent.transform.worldTransform;
	
	                if (transform) {
	                    transform.copy(tempWt);
	
	                    // lets not forget to flag the parent transform as dirty...
	                    this._tempDisplayObjectParent.transform._worldID = -1;
	                } else {
	                    tempWt.identity();
	                }
	
	                displayObject.parent = this._tempDisplayObjectParent;
	
	                displayObject.updateTransform();
	                displayObject.parent = cacheParent;
	                // displayObject.hitArea = //TODO add a temp hit area
	            }
	
	            context.save();
	            context.setTransform(1, 0, 0, 1, 0, 0);
	            context.globalAlpha = 1;
	            this._activeBlendMode = _const.BLEND_MODES.NORMAL;
	            context.globalCompositeOperation = this.blendModes[_const.BLEND_MODES.NORMAL];
	
	            if (navigator.isCocoonJS && this.view.screencanvas) {
	                context.fillStyle = 'black';
	                context.clear();
	            }
	
	            if (clear !== undefined ? clear : this.clearBeforeRender) {
	                if (this.renderingToScreen) {
	                    if (this.transparent) {
	                        context.clearRect(0, 0, this.width, this.height);
	                    } else {
	                        context.fillStyle = this._backgroundColorString;
	                        context.fillRect(0, 0, this.width, this.height);
	                    }
	                } // else {
	                // TODO: implement background for CanvasRenderTarget or RenderTexture?
	                // }
	            }
	
	            // TODO RENDER TARGET STUFF HERE..
	            var tempContext = this.context;
	
	            this.context = context;
	            displayObject.renderCanvas(this);
	            this.context = tempContext;
	
	            context.restore();
	
	            this.resolution = rootResolution;
	
	            this.emit('postrender');
	        }
	
	        /**
	         * Clear the canvas of renderer.
	         *
	         * @param {string} [clearColor] - Clear the canvas with this color, except the canvas is transparent.
	         */
	
	    }, {
	        key: 'clear',
	        value: function clear(clearColor) {
	            var context = this.context;
	
	            clearColor = clearColor || this._backgroundColorString;
	
	            if (!this.transparent && clearColor) {
	                context.fillStyle = clearColor;
	                context.fillRect(0, 0, this.width, this.height);
	            } else {
	                context.clearRect(0, 0, this.width, this.height);
	            }
	        }
	
	        /**
	         * Sets the blend mode of the renderer.
	         *
	         * @param {number} blendMode - See {@link PIXI.BLEND_MODES} for valid values.
	         */
	
	    }, {
	        key: 'setBlendMode',
	        value: function setBlendMode(blendMode) {
	            if (this._activeBlendMode === blendMode) {
	                return;
	            }
	
	            this._activeBlendMode = blendMode;
	            this.context.globalCompositeOperation = this.blendModes[blendMode];
	        }
	
	        /**
	         * Removes everything from the renderer and optionally removes the Canvas DOM element.
	         *
	         * @param {boolean} [removeView=false] - Removes the Canvas element from the DOM.
	         */
	
	    }, {
	        key: 'destroy',
	        value: function destroy(removeView) {
	            this.destroyPlugins();
	
	            // call the base destroy
	            _get(CanvasRenderer.prototype.__proto__ || Object.getPrototypeOf(CanvasRenderer.prototype), 'destroy', this).call(this, removeView);
	
	            this.context = null;
	
	            this.refresh = true;
	
	            this.maskManager.destroy();
	            this.maskManager = null;
	
	            this.smoothProperty = null;
	        }
	
	        /**
	         * Resizes the canvas view to the specified width and height.
	         *
	         * @extends PIXI.SystemRenderer#resize
	         *
	         * @param {number} screenWidth - the new width of the screen
	         * @param {number} screenHeight - the new height of the screen
	         */
	
	    }, {
	        key: 'resize',
	        value: function resize(screenWidth, screenHeight) {
	            _get(CanvasRenderer.prototype.__proto__ || Object.getPrototypeOf(CanvasRenderer.prototype), 'resize', this).call(this, screenWidth, screenHeight);
	
	            // reset the scale mode.. oddly this seems to be reset when the canvas is resized.
	            // surely a browser bug?? Let PixiJS fix that for you..
	            if (this.smoothProperty) {
	                this.rootContext[this.smoothProperty] = _settings2.default.SCALE_MODE === _const.SCALE_MODES.LINEAR;
	            }
	        }
	
	        /**
	         * Checks if blend mode has changed.
	         */
	
	    }, {
	        key: 'invalidateBlendMode',
	        value: function invalidateBlendMode() {
	            this._activeBlendMode = this.blendModes.indexOf(this.context.globalCompositeOperation);
	        }
	    }]);
	
	    return CanvasRenderer;
	}(_SystemRenderer3.default);
	
	/**
	 * Collection of installed plugins. These are included by default in PIXI, but can be excluded
	 * by creating a custom build. Consult the README for more information about creating custom
	 * builds and excluding plugins.
	 * @name PIXI.CanvasRenderer#plugins
	 * @type {object}
	 * @readonly
	 * @property {PIXI.accessibility.AccessibilityManager} accessibility Support tabbing interactive elements.
	 * @property {PIXI.extract.CanvasExtract} extract Extract image data from renderer.
	 * @property {PIXI.interaction.InteractionManager} interaction Handles mouse, touch and pointer events.
	 * @property {PIXI.prepare.CanvasPrepare} prepare Pre-render display objects.
	 */
	
	/**
	 * Adds a plugin to the renderer.
	 *
	 * @method PIXI.CanvasRenderer#registerPlugin
	 * @param {string} pluginName - The name of the plugin.
	 * @param {Function} ctor - The constructor function or class for the plugin.
	 */
	
	exports.default = CanvasRenderer;
	_utils.pluginTarget.mixin(CanvasRenderer);

/***/ }),
/* 380 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _utils = __webpack_require__(332);
	
	var _math = __webpack_require__(345);
	
	var _const = __webpack_require__(333);
	
	var _settings = __webpack_require__(334);
	
	var _settings2 = _interopRequireDefault(_settings);
	
	var _Container = __webpack_require__(331);
	
	var _Container2 = _interopRequireDefault(_Container);
	
	var _RenderTexture = __webpack_require__(358);
	
	var _RenderTexture2 = _interopRequireDefault(_RenderTexture);
	
	var _eventemitter = __webpack_require__(338);
	
	var _eventemitter2 = _interopRequireDefault(_eventemitter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var tempMatrix = new _math.Matrix();
	
	/**
	 * The SystemRenderer is the base for a PixiJS Renderer. It is extended by the {@link PIXI.CanvasRenderer}
	 * and {@link PIXI.WebGLRenderer} which can be used for rendering a PixiJS scene.
	 *
	 * @abstract
	 * @class
	 * @extends EventEmitter
	 * @memberof PIXI
	 */
	
	var SystemRenderer = function (_EventEmitter) {
	  _inherits(SystemRenderer, _EventEmitter);
	
	  // eslint-disable-next-line valid-jsdoc
	  /**
	   * @param {string} system - The name of the system this renderer is for.
	   * @param {object} [options] - The optional renderer parameters
	   * @param {number} [options.width=800] - the width of the screen
	   * @param {number} [options.height=600] - the height of the screen
	   * @param {HTMLCanvasElement} [options.view] - the canvas to use as a view, optional
	   * @param {boolean} [options.transparent=false] - If the render view is transparent, default false
	   * @param {boolean} [options.autoResize=false] - If the render view is automatically resized, default false
	   * @param {boolean} [options.antialias=false] - sets antialias (only applicable in chrome at the moment)
	   * @param {number} [options.resolution=1] - The resolution / device pixel ratio of the renderer. The
	   *  resolution of the renderer retina would be 2.
	   * @param {boolean} [options.preserveDrawingBuffer=false] - enables drawing buffer preservation,
	   *  enable this if you need to call toDataUrl on the webgl context.
	   * @param {boolean} [options.clearBeforeRender=true] - This sets if the renderer will clear the canvas or
	   *      not before the new render pass.
	   * @param {number} [options.backgroundColor=0x000000] - The background color of the rendered area
	   *  (shown if not transparent).
	   * @param {boolean} [options.roundPixels=false] - If true PixiJS will Math.floor() x/y values when rendering,
	   *  stopping pixel interpolation.
	   */
	  function SystemRenderer(system, options, arg2, arg3) {
	    _classCallCheck(this, SystemRenderer);
	
	    var _this = _possibleConstructorReturn(this, (SystemRenderer.__proto__ || Object.getPrototypeOf(SystemRenderer)).call(this));
	
	    (0, _utils.sayHello)(system);
	
	    // Support for constructor(system, screenWidth, screenHeight, options)
	    if (typeof options === 'number') {
	      options = Object.assign({
	        width: options,
	        height: arg2 || _settings2.default.RENDER_OPTIONS.height
	      }, arg3);
	    }
	
	    // Add the default render options
	    options = Object.assign({}, _settings2.default.RENDER_OPTIONS, options);
	
	    /**
	     * The supplied constructor options.
	     *
	     * @member {Object}
	     * @readOnly
	     */
	    _this.options = options;
	
	    /**
	     * The type of the renderer.
	     *
	     * @member {number}
	     * @default PIXI.RENDERER_TYPE.UNKNOWN
	     * @see PIXI.RENDERER_TYPE
	     */
	    _this.type = _const.RENDERER_TYPE.UNKNOWN;
	
	    /**
	     * Measurements of the screen. (0, 0, screenWidth, screenHeight)
	     *
	     * Its safe to use as filterArea or hitArea for whole stage
	     *
	     * @member {PIXI.Rectangle}
	     */
	    _this.screen = new _math.Rectangle(0, 0, options.width, options.height);
	
	    /**
	     * The canvas element that everything is drawn to
	     *
	     * @member {HTMLCanvasElement}
	     */
	    _this.view = options.view || document.createElement('canvas');
	
	    /**
	     * The resolution / device pixel ratio of the renderer
	     *
	     * @member {number}
	     * @default 1
	     */
	    _this.resolution = options.resolution || _settings2.default.RESOLUTION;
	
	    /**
	     * Whether the render view is transparent
	     *
	     * @member {boolean}
	     */
	    _this.transparent = options.transparent;
	
	    /**
	     * Whether css dimensions of canvas view should be resized to screen dimensions automatically
	     *
	     * @member {boolean}
	     */
	    _this.autoResize = options.autoResize || false;
	
	    /**
	     * Tracks the blend modes useful for this renderer.
	     *
	     * @member {object<string, mixed>}
	     */
	    _this.blendModes = null;
	
	    /**
	     * The value of the preserveDrawingBuffer flag affects whether or not the contents of
	     * the stencil buffer is retained after rendering.
	     *
	     * @member {boolean}
	     */
	    _this.preserveDrawingBuffer = options.preserveDrawingBuffer;
	
	    /**
	     * This sets if the CanvasRenderer will clear the canvas or not before the new render pass.
	     * If the scene is NOT transparent PixiJS will use a canvas sized fillRect operation every
	     * frame to set the canvas background color. If the scene is transparent PixiJS will use clearRect
	     * to clear the canvas every frame. Disable this by setting this to false. For example if
	     * your game has a canvas filling background image you often don't need this set.
	     *
	     * @member {boolean}
	     * @default
	     */
	    _this.clearBeforeRender = options.clearBeforeRender;
	
	    /**
	     * If true PixiJS will Math.floor() x/y values when rendering, stopping pixel interpolation.
	     * Handy for crisp pixel art and speed on legacy devices.
	     *
	     * @member {boolean}
	     */
	    _this.roundPixels = options.roundPixels;
	
	    /**
	     * The background color as a number.
	     *
	     * @member {number}
	     * @private
	     */
	    _this._backgroundColor = 0x000000;
	
	    /**
	     * The background color as an [R, G, B] array.
	     *
	     * @member {number[]}
	     * @private
	     */
	    _this._backgroundColorRgba = [0, 0, 0, 0];
	
	    /**
	     * The background color as a string.
	     *
	     * @member {string}
	     * @private
	     */
	    _this._backgroundColorString = '#000000';
	
	    _this.backgroundColor = options.backgroundColor || _this._backgroundColor; // run bg color setter
	
	    /**
	     * This temporary display object used as the parent of the currently being rendered item
	     *
	     * @member {PIXI.DisplayObject}
	     * @private
	     */
	    _this._tempDisplayObjectParent = new _Container2.default();
	
	    /**
	     * The last root object that the renderer tried to render.
	     *
	     * @member {PIXI.DisplayObject}
	     * @private
	     */
	    _this._lastObjectRendered = _this._tempDisplayObjectParent;
	    return _this;
	  }
	
	  /**
	   * Same as view.width, actual number of pixels in the canvas by horizontal
	   *
	   * @member {number}
	   * @readonly
	   * @default 800
	   */
	
	
	  _createClass(SystemRenderer, [{
	    key: 'resize',
	
	
	    /**
	     * Resizes the screen and canvas to the specified width and height
	     * Canvas dimensions are multiplied by resolution
	     *
	     * @param {number} screenWidth - the new width of the screen
	     * @param {number} screenHeight - the new height of the screen
	     */
	    value: function resize(screenWidth, screenHeight) {
	      this.screen.width = screenWidth;
	      this.screen.height = screenHeight;
	
	      this.view.width = screenWidth * this.resolution;
	      this.view.height = screenHeight * this.resolution;
	
	      if (this.autoResize) {
	        this.view.style.width = screenWidth + 'px';
	        this.view.style.height = screenHeight + 'px';
	      }
	    }
	
	    /**
	     * Useful function that returns a texture of the display object that can then be used to create sprites
	     * This can be quite useful if your displayObject is complicated and needs to be reused multiple times.
	     *
	     * @param {PIXI.DisplayObject} displayObject - The displayObject the object will be generated from
	     * @param {number} scaleMode - Should be one of the scaleMode consts
	     * @param {number} resolution - The resolution / device pixel ratio of the texture being generated
	     * @param {PIXI.Rectangle} [region] - The region of the displayObject, that shall be rendered,
	     *        if no region is specified, defaults to the local bounds of the displayObject.
	     * @return {PIXI.Texture} a texture of the graphics object
	     */
	
	  }, {
	    key: 'generateTexture',
	    value: function generateTexture(displayObject, scaleMode, resolution, region) {
	      region = region || displayObject.getLocalBounds();
	
	      var renderTexture = _RenderTexture2.default.create(region.width | 0, region.height | 0, scaleMode, resolution);
	
	      tempMatrix.tx = -region.x;
	      tempMatrix.ty = -region.y;
	
	      this.render(displayObject, renderTexture, false, tempMatrix, true);
	
	      return renderTexture;
	    }
	
	    /**
	     * Removes everything from the renderer and optionally removes the Canvas DOM element.
	     *
	     * @param {boolean} [removeView=false] - Removes the Canvas element from the DOM.
	     */
	
	  }, {
	    key: 'destroy',
	    value: function destroy(removeView) {
	      if (removeView && this.view.parentNode) {
	        this.view.parentNode.removeChild(this.view);
	      }
	
	      this.type = _const.RENDERER_TYPE.UNKNOWN;
	
	      this.view = null;
	
	      this.screen = null;
	
	      this.resolution = 0;
	
	      this.transparent = false;
	
	      this.autoResize = false;
	
	      this.blendModes = null;
	
	      this.options = null;
	
	      this.preserveDrawingBuffer = false;
	      this.clearBeforeRender = false;
	
	      this.roundPixels = false;
	
	      this._backgroundColor = 0;
	      this._backgroundColorRgba = null;
	      this._backgroundColorString = null;
	
	      this._tempDisplayObjectParent = null;
	      this._lastObjectRendered = null;
	    }
	
	    /**
	     * The background color to fill if not transparent
	     *
	     * @member {number}
	     */
	
	  }, {
	    key: 'width',
	    get: function get() {
	      return this.view.width;
	    }
	
	    /**
	     * Same as view.height, actual number of pixels in the canvas by vertical
	     *
	     * @member {number}
	     * @readonly
	     * @default 600
	     */
	
	  }, {
	    key: 'height',
	    get: function get() {
	      return this.view.height;
	    }
	  }, {
	    key: 'backgroundColor',
	    get: function get() {
	      return this._backgroundColor;
	    },
	    set: function set(value) // eslint-disable-line require-jsdoc
	    {
	      this._backgroundColor = value;
	      this._backgroundColorString = (0, _utils.hex2string)(value);
	      (0, _utils.hex2rgb)(value, this._backgroundColorRgba);
	    }
	  }]);
	
	  return SystemRenderer;
	}(_eventemitter2.default);
	
	exports.default = SystemRenderer;

/***/ }),
/* 381 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _const = __webpack_require__(333);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * A set of functions used to handle masking.
	 *
	 * @class
	 * @memberof PIXI
	 */
	var CanvasMaskManager = function () {
	    /**
	     * @param {PIXI.CanvasRenderer} renderer - The canvas renderer.
	     */
	    function CanvasMaskManager(renderer) {
	        _classCallCheck(this, CanvasMaskManager);
	
	        this.renderer = renderer;
	    }
	
	    /**
	     * This method adds it to the current stack of masks.
	     *
	     * @param {object} maskData - the maskData that will be pushed
	     */
	
	
	    _createClass(CanvasMaskManager, [{
	        key: 'pushMask',
	        value: function pushMask(maskData) {
	            var renderer = this.renderer;
	
	            renderer.context.save();
	
	            var cacheAlpha = maskData.alpha;
	            var transform = maskData.transform.worldTransform;
	            var resolution = renderer.resolution;
	
	            renderer.context.setTransform(transform.a * resolution, transform.b * resolution, transform.c * resolution, transform.d * resolution, transform.tx * resolution, transform.ty * resolution);
	
	            // TODO suport sprite alpha masks??
	            // lots of effort required. If demand is great enough..
	            if (!maskData._texture) {
	                this.renderGraphicsShape(maskData);
	                renderer.context.clip();
	            }
	
	            maskData.worldAlpha = cacheAlpha;
	        }
	
	        /**
	         * Renders a PIXI.Graphics shape.
	         *
	         * @param {PIXI.Graphics} graphics - The object to render.
	         */
	
	    }, {
	        key: 'renderGraphicsShape',
	        value: function renderGraphicsShape(graphics) {
	            var context = this.renderer.context;
	            var len = graphics.graphicsData.length;
	
	            if (len === 0) {
	                return;
	            }
	
	            context.beginPath();
	
	            for (var i = 0; i < len; i++) {
	                var data = graphics.graphicsData[i];
	                var shape = data.shape;
	
	                if (data.type === _const.SHAPES.POLY) {
	                    var points = shape.points;
	
	                    context.moveTo(points[0], points[1]);
	
	                    for (var j = 1; j < points.length / 2; j++) {
	                        context.lineTo(points[j * 2], points[j * 2 + 1]);
	                    }
	
	                    // if the first and last point are the same close the path - much neater :)
	                    if (points[0] === points[points.length - 2] && points[1] === points[points.length - 1]) {
	                        context.closePath();
	                    }
	                } else if (data.type === _const.SHAPES.RECT) {
	                    context.rect(shape.x, shape.y, shape.width, shape.height);
	                    context.closePath();
	                } else if (data.type === _const.SHAPES.CIRC) {
	                    // TODO - need to be Undefined!
	                    context.arc(shape.x, shape.y, shape.radius, 0, 2 * Math.PI);
	                    context.closePath();
	                } else if (data.type === _const.SHAPES.ELIP) {
	                    // ellipse code taken from: http://stackoverflow.com/questions/2172798/how-to-draw-an-oval-in-html5-canvas
	
	                    var w = shape.width * 2;
	                    var h = shape.height * 2;
	
	                    var x = shape.x - w / 2;
	                    var y = shape.y - h / 2;
	
	                    var kappa = 0.5522848;
	                    var ox = w / 2 * kappa; // control point offset horizontal
	                    var oy = h / 2 * kappa; // control point offset vertical
	                    var xe = x + w; // x-end
	                    var ye = y + h; // y-end
	                    var xm = x + w / 2; // x-middle
	                    var ym = y + h / 2; // y-middle
	
	                    context.moveTo(x, ym);
	                    context.bezierCurveTo(x, ym - oy, xm - ox, y, xm, y);
	                    context.bezierCurveTo(xm + ox, y, xe, ym - oy, xe, ym);
	                    context.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
	                    context.bezierCurveTo(xm - ox, ye, x, ym + oy, x, ym);
	                    context.closePath();
	                } else if (data.type === _const.SHAPES.RREC) {
	                    var rx = shape.x;
	                    var ry = shape.y;
	                    var width = shape.width;
	                    var height = shape.height;
	                    var radius = shape.radius;
	
	                    var maxRadius = Math.min(width, height) / 2 | 0;
	
	                    radius = radius > maxRadius ? maxRadius : radius;
	
	                    context.moveTo(rx, ry + radius);
	                    context.lineTo(rx, ry + height - radius);
	                    context.quadraticCurveTo(rx, ry + height, rx + radius, ry + height);
	                    context.lineTo(rx + width - radius, ry + height);
	                    context.quadraticCurveTo(rx + width, ry + height, rx + width, ry + height - radius);
	                    context.lineTo(rx + width, ry + radius);
	                    context.quadraticCurveTo(rx + width, ry, rx + width - radius, ry);
	                    context.lineTo(rx + radius, ry);
	                    context.quadraticCurveTo(rx, ry, rx, ry + radius);
	                    context.closePath();
	                }
	            }
	        }
	
	        /**
	         * Restores the current drawing context to the state it was before the mask was applied.
	         *
	         * @param {PIXI.CanvasRenderer} renderer - The renderer context to use.
	         */
	
	    }, {
	        key: 'popMask',
	        value: function popMask(renderer) {
	            renderer.context.restore();
	            renderer.invalidateBlendMode();
	        }
	
	        /**
	         * Destroys this canvas mask manager.
	         *
	         */
	
	    }, {
	        key: 'destroy',
	        value: function destroy() {
	            /* empty */
	        }
	    }]);
	
	    return CanvasMaskManager;
	}();
	
	exports.default = CanvasMaskManager;

/***/ }),
/* 382 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _settings = __webpack_require__(334);
	
	var _settings2 = _interopRequireDefault(_settings);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Creates a Canvas element of the given size.
	 *
	 * @class
	 * @memberof PIXI
	 */
	var CanvasRenderTarget = function () {
	  /**
	   * @param {number} width - the width for the newly created canvas
	   * @param {number} height - the height for the newly created canvas
	   * @param {number} [resolution=1] - The resolution / device pixel ratio of the canvas
	   */
	  function CanvasRenderTarget(width, height, resolution) {
	    _classCallCheck(this, CanvasRenderTarget);
	
	    /**
	     * The Canvas object that belongs to this CanvasRenderTarget.
	     *
	     * @member {HTMLCanvasElement}
	     */
	    this.canvas = document.createElement('canvas');
	
	    /**
	     * A CanvasRenderingContext2D object representing a two-dimensional rendering context.
	     *
	     * @member {CanvasRenderingContext2D}
	     */
	    this.context = this.canvas.getContext('2d');
	
	    this.resolution = resolution || _settings2.default.RESOLUTION;
	
	    this.resize(width, height);
	  }
	
	  /**
	   * Clears the canvas that was created by the CanvasRenderTarget class.
	   *
	   * @private
	   */
	
	
	  _createClass(CanvasRenderTarget, [{
	    key: 'clear',
	    value: function clear() {
	      this.context.setTransform(1, 0, 0, 1, 0, 0);
	      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
	    }
	
	    /**
	     * Resizes the canvas to the specified width and height.
	     *
	     * @param {number} width - the new width of the canvas
	     * @param {number} height - the new height of the canvas
	     */
	
	  }, {
	    key: 'resize',
	    value: function resize(width, height) {
	      this.canvas.width = width * this.resolution;
	      this.canvas.height = height * this.resolution;
	    }
	
	    /**
	     * Destroys this canvas.
	     *
	     */
	
	  }, {
	    key: 'destroy',
	    value: function destroy() {
	      this.context = null;
	      this.canvas = null;
	    }
	
	    /**
	     * The width of the canvas buffer in pixels.
	     *
	     * @member {number}
	     */
	
	  }, {
	    key: 'width',
	    get: function get() {
	      return this.canvas.width;
	    },
	    set: function set(val) // eslint-disable-line require-jsdoc
	    {
	      this.canvas.width = val;
	    }
	
	    /**
	     * The height of the canvas buffer in pixels.
	     *
	     * @member {number}
	     */
	
	  }, {
	    key: 'height',
	    get: function get() {
	      return this.canvas.height;
	    },
	    set: function set(val) // eslint-disable-line require-jsdoc
	    {
	      this.canvas.height = val;
	    }
	  }]);
	
	  return CanvasRenderTarget;
	}();
	
	exports.default = CanvasRenderTarget;

/***/ }),
/* 383 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = mapCanvasBlendModesToPixi;
	
	var _const = __webpack_require__(333);
	
	var _canUseNewCanvasBlendModes = __webpack_require__(384);
	
	var _canUseNewCanvasBlendModes2 = _interopRequireDefault(_canUseNewCanvasBlendModes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Maps blend combinations to Canvas.
	 *
	 * @memberof PIXI
	 * @function mapCanvasBlendModesToPixi
	 * @private
	 * @param {string[]} [array=[]] - The array to output into.
	 * @return {string[]} Mapped modes.
	 */
	function mapCanvasBlendModesToPixi() {
	    var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	
	    if ((0, _canUseNewCanvasBlendModes2.default)()) {
	        array[_const.BLEND_MODES.NORMAL] = 'source-over';
	        array[_const.BLEND_MODES.ADD] = 'lighter'; // IS THIS OK???
	        array[_const.BLEND_MODES.MULTIPLY] = 'multiply';
	        array[_const.BLEND_MODES.SCREEN] = 'screen';
	        array[_const.BLEND_MODES.OVERLAY] = 'overlay';
	        array[_const.BLEND_MODES.DARKEN] = 'darken';
	        array[_const.BLEND_MODES.LIGHTEN] = 'lighten';
	        array[_const.BLEND_MODES.COLOR_DODGE] = 'color-dodge';
	        array[_const.BLEND_MODES.COLOR_BURN] = 'color-burn';
	        array[_const.BLEND_MODES.HARD_LIGHT] = 'hard-light';
	        array[_const.BLEND_MODES.SOFT_LIGHT] = 'soft-light';
	        array[_const.BLEND_MODES.DIFFERENCE] = 'difference';
	        array[_const.BLEND_MODES.EXCLUSION] = 'exclusion';
	        array[_const.BLEND_MODES.HUE] = 'hue';
	        array[_const.BLEND_MODES.SATURATION] = 'saturate';
	        array[_const.BLEND_MODES.COLOR] = 'color';
	        array[_const.BLEND_MODES.LUMINOSITY] = 'luminosity';
	    } else {
	        // this means that the browser does not support the cool new blend modes in canvas 'cough' ie 'cough'
	        array[_const.BLEND_MODES.NORMAL] = 'source-over';
	        array[_const.BLEND_MODES.ADD] = 'lighter'; // IS THIS OK???
	        array[_const.BLEND_MODES.MULTIPLY] = 'source-over';
	        array[_const.BLEND_MODES.SCREEN] = 'source-over';
	        array[_const.BLEND_MODES.OVERLAY] = 'source-over';
	        array[_const.BLEND_MODES.DARKEN] = 'source-over';
	        array[_const.BLEND_MODES.LIGHTEN] = 'source-over';
	        array[_const.BLEND_MODES.COLOR_DODGE] = 'source-over';
	        array[_const.BLEND_MODES.COLOR_BURN] = 'source-over';
	        array[_const.BLEND_MODES.HARD_LIGHT] = 'source-over';
	        array[_const.BLEND_MODES.SOFT_LIGHT] = 'source-over';
	        array[_const.BLEND_MODES.DIFFERENCE] = 'source-over';
	        array[_const.BLEND_MODES.EXCLUSION] = 'source-over';
	        array[_const.BLEND_MODES.HUE] = 'source-over';
	        array[_const.BLEND_MODES.SATURATION] = 'source-over';
	        array[_const.BLEND_MODES.COLOR] = 'source-over';
	        array[_const.BLEND_MODES.LUMINOSITY] = 'source-over';
	    }
	    // not-premultiplied, only for webgl
	    array[_const.BLEND_MODES.NORMAL_NPM] = array[_const.BLEND_MODES.NORMAL];
	    array[_const.BLEND_MODES.ADD_NPM] = array[_const.BLEND_MODES.ADD];
	    array[_const.BLEND_MODES.SCREEN_NPM] = array[_const.BLEND_MODES.SCREEN];
	
	    return array;
	}

/***/ }),
/* 384 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = canUseNewCanvasBlendModes;
	/**
	 * Creates a little colored canvas
	 *
	 * @ignore
	 * @param {string} color - The color to make the canvas
	 * @return {canvas} a small canvas element
	 */
	function createColoredCanvas(color) {
	    var canvas = document.createElement('canvas');
	
	    canvas.width = 6;
	    canvas.height = 1;
	
	    var context = canvas.getContext('2d');
	
	    context.fillStyle = color;
	    context.fillRect(0, 0, 6, 1);
	
	    return canvas;
	}
	
	/**
	 * Checks whether the Canvas BlendModes are supported by the current browser
	 *
	 * @return {boolean} whether they are supported
	 */
	function canUseNewCanvasBlendModes() {
	    if (typeof document === 'undefined') {
	        return false;
	    }
	
	    var magenta = createColoredCanvas('#ff00ff');
	    var yellow = createColoredCanvas('#ffff00');
	
	    var canvas = document.createElement('canvas');
	
	    canvas.width = 6;
	    canvas.height = 1;
	
	    var context = canvas.getContext('2d');
	
	    context.globalCompositeOperation = 'multiply';
	    context.drawImage(magenta, 0, 0);
	    context.drawImage(yellow, 2, 0);
	
	    var imageData = context.getImageData(2, 0, 1, 1);
	
	    if (!imageData) {
	        return false;
	    }
	
	    var data = imageData.data;
	
	    return data[0] === 255 && data[1] === 0 && data[2] === 0;
	}

/***/ }),
/* 385 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var KeyCode = function () {
	    function KeyCode() {
	        _classCallCheck(this, KeyCode);
	    }
	
	    _createClass(KeyCode, null, [{
	        key: "BREAK",
	        get: function get() {
	            return 3;
	        }
	    }, {
	        key: "BACKSPACE",
	        get: function get() {
	            return 8;
	        }
	    }, {
	        key: "TAB",
	        get: function get() {
	            return 9;
	        }
	    }, {
	        key: "CLEAR",
	        get: function get() {
	            return 12;
	        }
	    }, {
	        key: "ENTER",
	        get: function get() {
	            return 13;
	        }
	    }, {
	        key: "COMMAND",
	        get: function get() {
	            return 15;
	        }
	    }, {
	        key: "SHIFT",
	        get: function get() {
	            return 16;
	        }
	    }, {
	        key: "CONTROL",
	        get: function get() {
	            return 17;
	        }
	    }, {
	        key: "ALTERNATE",
	        get: function get() {
	            return 18;
	        }
	    }, {
	        key: "PAUSE",
	        get: function get() {
	            return 18;
	        }
	    }, {
	        key: "CAPSLOCK",
	        get: function get() {
	            return 18;
	        }
	    }, {
	        key: "ESCAPE",
	        get: function get() {
	            return 27;
	        }
	    }, {
	        key: "SPACE",
	        get: function get() {
	            return 32;
	        }
	    }, {
	        key: "PAGE_UP",
	        get: function get() {
	            return 33;
	        }
	    }, {
	        key: "PAGE_DOWN",
	        get: function get() {
	            return 34;
	        }
	    }, {
	        key: "END",
	        get: function get() {
	            return 35;
	        }
	    }, {
	        key: "HOME",
	        get: function get() {
	            return 36;
	        }
	    }, {
	        key: "LEFT",
	        get: function get() {
	            return 37;
	        }
	    }, {
	        key: "UP",
	        get: function get() {
	            return 38;
	        }
	    }, {
	        key: "RIGHT",
	        get: function get() {
	            return 39;
	        }
	    }, {
	        key: "DOWN",
	        get: function get() {
	            return 40;
	        }
	    }, {
	        key: "INSERT",
	        get: function get() {
	            return 45;
	        }
	    }, {
	        key: "DELETE",
	        get: function get() {
	            return 46;
	        }
	    }, {
	        key: "NUMBER_0",
	        get: function get() {
	            return 48;
	        }
	    }, {
	        key: "NUMBER_1",
	        get: function get() {
	            return 49;
	        }
	    }, {
	        key: "NUMBER_2",
	        get: function get() {
	            return 50;
	        }
	    }, {
	        key: "NUMBER_3",
	        get: function get() {
	            return 51;
	        }
	    }, {
	        key: "NUMBER_4",
	        get: function get() {
	            return 52;
	        }
	    }, {
	        key: "NUMBER_5",
	        get: function get() {
	            return 53;
	        }
	    }, {
	        key: "NUMBER_6",
	        get: function get() {
	            return 54;
	        }
	    }, {
	        key: "NUMBER_7",
	        get: function get() {
	            return 55;
	        }
	    }, {
	        key: "NUMBER_8",
	        get: function get() {
	            return 56;
	        }
	    }, {
	        key: "NUMBER_9",
	        get: function get() {
	            return 57;
	        }
	    }, {
	        key: "A",
	        get: function get() {
	            return 65;
	        }
	    }, {
	        key: "B",
	        get: function get() {
	            return 66;
	        }
	    }, {
	        key: "C",
	        get: function get() {
	            return 67;
	        }
	    }, {
	        key: "D",
	        get: function get() {
	            return 68;
	        }
	    }, {
	        key: "E",
	        get: function get() {
	            return 69;
	        }
	    }, {
	        key: "F",
	        get: function get() {
	            return 70;
	        }
	    }, {
	        key: "G",
	        get: function get() {
	            return 71;
	        }
	    }, {
	        key: "H",
	        get: function get() {
	            return 72;
	        }
	    }, {
	        key: "I",
	        get: function get() {
	            return 73;
	        }
	    }, {
	        key: "J",
	        get: function get() {
	            return 74;
	        }
	    }, {
	        key: "K",
	        get: function get() {
	            return 75;
	        }
	    }, {
	        key: "L",
	        get: function get() {
	            return 76;
	        }
	    }, {
	        key: "M",
	        get: function get() {
	            return 77;
	        }
	    }, {
	        key: "N",
	        get: function get() {
	            return 78;
	        }
	    }, {
	        key: "O",
	        get: function get() {
	            return 79;
	        }
	    }, {
	        key: "P",
	        get: function get() {
	            return 80;
	        }
	    }, {
	        key: "Q",
	        get: function get() {
	            return 81;
	        }
	    }, {
	        key: "R",
	        get: function get() {
	            return 82;
	        }
	    }, {
	        key: "S",
	        get: function get() {
	            return 83;
	        }
	    }, {
	        key: "T",
	        get: function get() {
	            return 84;
	        }
	    }, {
	        key: "U",
	        get: function get() {
	            return 85;
	        }
	    }, {
	        key: "V",
	        get: function get() {
	            return 86;
	        }
	    }, {
	        key: "W",
	        get: function get() {
	            return 87;
	        }
	    }, {
	        key: "X",
	        get: function get() {
	            return 88;
	        }
	    }, {
	        key: "Y",
	        get: function get() {
	            return 89;
	        }
	    }, {
	        key: "Z",
	        get: function get() {
	            return 90;
	        }
	    }, {
	        key: "LEFT_WINDOW",
	        get: function get() {
	            return 91;
	        }
	    }, {
	        key: "RIGHT_WINDOW",
	        get: function get() {
	            return 92;
	        }
	    }, {
	        key: "RIGHT_MENU",
	        get: function get() {
	            return 93;
	        }
	    }, {
	        key: "NUMPAD_0",
	        get: function get() {
	            return 96;
	        }
	    }, {
	        key: "NUMPAD_1",
	        get: function get() {
	            return 97;
	        }
	    }, {
	        key: "NUMPAD_2",
	        get: function get() {
	            return 98;
	        }
	    }, {
	        key: "NUMPAD_3",
	        get: function get() {
	            return 99;
	        }
	    }, {
	        key: "NUMPAD_4",
	        get: function get() {
	            return 100;
	        }
	    }, {
	        key: "NUMPAD_5",
	        get: function get() {
	            return 101;
	        }
	    }, {
	        key: "NUMPAD_6",
	        get: function get() {
	            return 102;
	        }
	    }, {
	        key: "NUMPAD_7",
	        get: function get() {
	            return 103;
	        }
	    }, {
	        key: "NUMPAD_8",
	        get: function get() {
	            return 104;
	        }
	    }, {
	        key: "NUMPAD_9",
	        get: function get() {
	            return 105;
	        }
	    }, {
	        key: "NUMPAD_MULTIPLY",
	        get: function get() {
	            return 106;
	        }
	    }, {
	        key: "NUMPAD_ADD",
	        get: function get() {
	            return 107;
	        }
	    }, {
	        key: "NUMPAD_ENTER",
	        get: function get() {
	            return 108;
	        }
	    }, {
	        key: "NUMPAD_SUBTRACT",
	        get: function get() {
	            return 109;
	        }
	    }, {
	        key: "NUMPAD_DECIMAL",
	        get: function get() {
	            return 110;
	        }
	    }, {
	        key: "NUMPAD_DIVIDE",
	        get: function get() {
	            return 111;
	        }
	    }, {
	        key: "F1",
	        get: function get() {
	            return 112;
	        }
	    }, {
	        key: "F2",
	        get: function get() {
	            return 113;
	        }
	    }, {
	        key: "F3",
	        get: function get() {
	            return 114;
	        }
	    }, {
	        key: "F4",
	        get: function get() {
	            return 115;
	        }
	    }, {
	        key: "F5",
	        get: function get() {
	            return 116;
	        }
	    }, {
	        key: "F6",
	        get: function get() {
	            return 117;
	        }
	    }, {
	        key: "F7",
	        get: function get() {
	            return 118;
	        }
	    }, {
	        key: "F8",
	        get: function get() {
	            return 119;
	        }
	    }, {
	        key: "F9",
	        get: function get() {
	            return 120;
	        }
	    }, {
	        key: "F10",
	        get: function get() {
	            return 121;
	        }
	    }, {
	        key: "F11",
	        get: function get() {
	            return 122;
	        }
	    }, {
	        key: "F12",
	        get: function get() {
	            return 123;
	        }
	    }, {
	        key: "F13",
	        get: function get() {
	            return 124;
	        }
	    }, {
	        key: "F14",
	        get: function get() {
	            return 125;
	        }
	    }, {
	        key: "F15",
	        get: function get() {
	            return 126;
	        }
	    }, {
	        key: "SEMICOLON",
	        get: function get() {
	            return 186;
	        }
	    }, {
	        key: "EQUAL",
	        get: function get() {
	            return 187;
	        }
	    }, {
	        key: "COMMA",
	        get: function get() {
	            return 188;
	        }
	    }, {
	        key: "DASH",
	        get: function get() {
	            return 189;
	        }
	    }, {
	        key: "PERIOD",
	        get: function get() {
	            return 190;
	        }
	    }, {
	        key: "BACKQUOTE",
	        get: function get() {
	            return 192;
	        }
	    }, {
	        key: "BACKSLASH",
	        get: function get() {
	            return 220;
	        }
	    }, {
	        key: "QUOTE",
	        get: function get() {
	            return 222;
	        }
	
	        /*
	        const keyCodes = {
	            3 : "break",
	            8 : "backspace / delete",
	            9 : "tab",
	            12 : 'clear',
	            13 : "enter",
	            16 : "shift",
	            17 : "ctrl",
	            18 : "alt",
	            19 : "pause/break",
	            20 : "caps lock",
	            27 : "escape",
	            32 : "spacebar",
	            33 : "page up",
	            34 : "page down",
	            35 : "end",
	            36 : "home ",
	            37 : "left arrow ",
	            38 : "up arrow ",
	            39 : "right arrow",
	            40 : "down arrow ",
	            41 : "select",
	            42 : "print",
	            43 : "execute",
	            44 : "Print Screen",
	            45 : "insert ",
	            46 : "delete",
	            48 : "0",
	            49 : "1",
	            50 : "2",
	            51 : "3",
	            52 : "4",
	            53 : "5",
	            54 : "6",
	            55 : "7",
	            56 : "8",
	            57 : "9",
	            58 : ":",
	            59 : "semicolon (firefox), equals",
	            60 : "<",
	            61 : "equals (firefox)",
	            63 : "ß",
	            64 : "@ (firefox)",
	            65 : "a",
	            66 : "b",
	            67 : "c",
	            68 : "d",
	            69 : "e",
	            70 : "f",
	            71 : "g",
	            72 : "h",
	            73 : "i",
	            74 : "j",
	            75 : "k",
	            76 : "l",
	            77 : "m",
	            78 : "n",
	            79 : "o",
	            80 : "p",
	            81 : "q",
	            82 : "r",
	            83 : "s",
	            84 : "t",
	            85 : "u",
	            86 : "v",
	            87 : "w",
	            88 : "x",
	            89 : "y",
	            90 : "z",
	            91 : "Windows Key / Left ⌘ / Chromebook Search key",
	            92 : "right window key ",
	            93 : "Windows Menu / Right ⌘",
	            96 : "numpad 0 ",
	            97 : "numpad 1 ",
	            98 : "numpad 2 ",
	            99 : "numpad 3 ",
	            100 : "numpad 4 ",
	            101 : "numpad 5 ",
	            102 : "numpad 6 ",
	            103 : "numpad 7 ",
	            104 : "numpad 8 ",
	            105 : "numpad 9 ",
	            106 : "multiply ",
	            107 : "add",
	            108 : "numpad period (firefox)",
	            109 : "subtract ",
	            110 : "decimal point",
	            111 : "divide ",
	            112 : "f1 ",
	            113 : "f2 ",
	            114 : "f3 ",
	            115 : "f4 ",
	            116 : "f5 ",
	            117 : "f6 ",
	            118 : "f7 ",
	            119 : "f8 ",
	            120 : "f9 ",
	            121 : "f10",
	            122 : "f11",
	            123 : "f12",
	            124 : "f13",
	            125 : "f14",
	            126 : "f15",
	            127 : "f16",
	            128 : "f17",
	            129 : "f18",
	            130 : "f19",
	            131 : "f20",
	            132 : "f21",
	            133 : "f22",
	            134 : "f23",
	            135 : "f24",
	            144 : "num lock ",
	            145 : "scroll lock",
	            160 : "^",
	            161: '!',
	            163 : "#",
	            164: '$',
	            165: 'ù',
	            166 : "page backward",
	            167 : "page forward",
	            169 : "closing paren (AZERTY)",
	            170: '*',
	            171 : "~ + * key",
	            173 : "minus (firefox), mute/unmute",
	            174 : "decrease volume level",
	            175 : "increase volume level",
	            176 : "next",
	            177 : "previous",
	            178 : "stop",
	            179 : "play/pause",
	            180 : "e-mail",
	            181 : "mute/unmute (firefox)",
	            182 : "decrease volume level (firefox)",
	            183 : "increase volume level (firefox)",
	            186 : "semi-colon / ñ",
	            187 : "equal sign ",
	            188 : "comma",
	            189 : "dash ",
	            190 : "period ",
	            191 : "forward slash / ç",
	            192 : "grave accent / ñ / æ",
	            193 : "?, / or °",
	            194 : "numpad period (chrome)",
	            219 : "open bracket ",
	            220 : "back slash ",
	            221 : "close bracket / å",
	            222 : "single quote / ø",
	            223 : "`",
	            224 : "left or right ⌘ key (firefox)",
	            225 : "altgr",
	            226 : "< /git >",
	            230 : "GNOME Compose Key",
	            231 : "ç",
	            233 : "XF86Forward",
	            234 : "XF86Back",
	            255 : "toggle touchpad"
	        };
	        */
	
	    }]);
	
	    return KeyCode;
	}();
	
	exports.default = KeyCode;

/***/ }),
/* 386 */,
/* 387 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.autoDetectRenderer = autoDetectRenderer;
	
	var _CanvasRenderer = __webpack_require__(379);
	
	var _CanvasRenderer2 = _interopRequireDefault(_CanvasRenderer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// eslint-disable-next-line valid-jsdoc
	/**
	 * This helper function will automatically detect which renderer you should be using.
	 * WebGL is the preferred renderer as it is a lot faster. If webGL is not supported by
	 * the browser then this function will return a canvas renderer
	 *
	 * @memberof PIXI
	 * @function autoDetectRenderer
	 * @param {object} [options] - The optional renderer parameters
	 * @param {number} [options.width=800] - the width of the renderers view
	 * @param {number} [options.height=600] - the height of the renderers view
	 * @param {HTMLCanvasElement} [options.view] - the canvas to use as a view, optional
	 * @param {boolean} [options.transparent=false] - If the render view is transparent, default false
	 * @param {boolean} [options.antialias=false] - sets antialias (only applicable in chrome at the moment)
	 * @param {boolean} [options.preserveDrawingBuffer=false] - enables drawing buffer preservation, enable this if you
	 *  need to call toDataUrl on the webgl context
	 * @param {number} [options.backgroundColor=0x000000] - The background color of the rendered area
	 *  (shown if not transparent).
	 * @param {boolean} [options.clearBeforeRender=true] - This sets if the renderer will clear the canvas or
	 *   not before the new render pass.
	 * @param {number} [options.resolution=1] - The resolution / device pixel ratio of the renderer, retina would be 2
	 * @param {boolean} [options.forceCanvas=false] - prevents selection of WebGL renderer, even if such is present
	 * @param {boolean} [options.roundPixels=false] - If true PixiJS will Math.floor() x/y values when rendering,
	 *  stopping pixel interpolation.
	 * @param {boolean} [options.forceFXAA=false] - forces FXAA antialiasing to be used over native.
	 *  FXAA is faster, but may not always look as great **webgl only**
	 * @param {boolean} [options.legacy=false] - `true` to ensure compatibility with older / less advanced devices.
	 *  If you experience unexplained flickering try setting this to true. **webgl only**
	 * @param {string} [options.powerPreference] - Parameter passed to webgl context, set to "high-performance"
	 *  for devices with dual graphics card **webgl only**
	 * @return {PIXI.WebGLRenderer|PIXI.CanvasRenderer} Returns WebGL renderer if available, otherwise CanvasRenderer
	 */
	function autoDetectRenderer(options, arg1, arg2, arg3) {
	  return new _CanvasRenderer2.default(options, arg1, arg2);
	}

/***/ }),
/* 388 */,
/* 389 */,
/* 390 */,
/* 391 */,
/* 392 */,
/* 393 */,
/* 394 */,
/* 395 */,
/* 396 */,
/* 397 */,
/* 398 */,
/* 399 */,
/* 400 */,
/* 401 */,
/* 402 */,
/* 403 */,
/* 404 */,
/* 405 */,
/* 406 */,
/* 407 */,
/* 408 */,
/* 409 */,
/* 410 */,
/* 411 */,
/* 412 */,
/* 413 */,
/* 414 */,
/* 415 */,
/* 416 */,
/* 417 */,
/* 418 */,
/* 419 */,
/* 420 */,
/* 421 */,
/* 422 */,
/* 423 */,
/* 424 */,
/* 425 */,
/* 426 */,
/* 427 */,
/* 428 */,
/* 429 */,
/* 430 */,
/* 431 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _CanvasRenderer = __webpack_require__(379);
	
	var _CanvasRenderer2 = _interopRequireDefault(_CanvasRenderer);
	
	var _const = __webpack_require__(333);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * @author Mat Groves
	 *
	 * Big thanks to the very clever Matt DesLauriers <mattdesl> https://github.com/mattdesl/
	 * for creating the original PixiJS version!
	 * Also a thanks to https://github.com/bchevalier for tweaking the tint and alpha so that they
	 * now share 4 bytes on the vertex buffer
	 *
	 * Heavily inspired by LibGDX's CanvasGraphicsRenderer:
	 * https://github.com/libgdx/libgdx/blob/1.0.0/gdx/src/com/badlogic/gdx/graphics/glutils/ShapeRenderer.java
	 */
	
	/**
	 * Renderer dedicated to drawing and batching graphics objects.
	 *
	 * @class
	 * @private
	 * @memberof PIXI
	 */
	var CanvasGraphicsRenderer = function () {
	    /**
	     * @param {PIXI.CanvasRenderer} renderer - The current PIXI renderer.
	     */
	    function CanvasGraphicsRenderer(renderer) {
	        _classCallCheck(this, CanvasGraphicsRenderer);
	
	        this.renderer = renderer;
	    }
	
	    /**
	     * Renders a Graphics object to a canvas.
	     *
	     * @param {PIXI.Graphics} graphics - the actual graphics object to render
	     */
	
	
	    _createClass(CanvasGraphicsRenderer, [{
	        key: 'render',
	        value: function render(graphics) {
	            var renderer = this.renderer;
	            var context = renderer.context;
	            var worldAlpha = graphics.worldAlpha;
	            var transform = graphics.transform.worldTransform;
	            var resolution = renderer.resolution;
	
	            // if the tint has changed, set the graphics object to dirty.
	            if (this._prevTint !== this.tint) {
	                this.dirty = true;
	            }
	
	            context.setTransform(transform.a * resolution, transform.b * resolution, transform.c * resolution, transform.d * resolution, transform.tx * resolution, transform.ty * resolution);
	
	            if (graphics.dirty) {
	                this.updateGraphicsTint(graphics);
	                graphics.dirty = false;
	            }
	
	            renderer.setBlendMode(graphics.blendMode);
	
	            for (var i = 0; i < graphics.graphicsData.length; i++) {
	                var data = graphics.graphicsData[i];
	                var shape = data.shape;
	
	                var fillColor = data._fillTint;
	                var lineColor = data._lineTint;
	
	                context.lineWidth = data.lineWidth;
	
	                if (data.type === _const.SHAPES.POLY) {
	                    context.beginPath();
	
	                    this.renderPolygon(shape.points, shape.closed, context);
	
	                    for (var j = 0; j < data.holes.length; j++) {
	                        this.renderPolygon(data.holes[j].points, true, context);
	                    }
	
	                    if (data.fill) {
	                        context.globalAlpha = data.fillAlpha * worldAlpha;
	                        context.fillStyle = '#' + ('00000' + (fillColor | 0).toString(16)).substr(-6);
	                        context.fill();
	                    }
	                    if (data.lineWidth) {
	                        context.globalAlpha = data.lineAlpha * worldAlpha;
	                        context.strokeStyle = '#' + ('00000' + (lineColor | 0).toString(16)).substr(-6);
	                        context.stroke();
	                    }
	                } else if (data.type === _const.SHAPES.RECT) {
	                    if (data.fillColor || data.fillColor === 0) {
	                        context.globalAlpha = data.fillAlpha * worldAlpha;
	                        context.fillStyle = '#' + ('00000' + (fillColor | 0).toString(16)).substr(-6);
	                        context.fillRect(shape.x, shape.y, shape.width, shape.height);
	                    }
	                    if (data.lineWidth) {
	                        context.globalAlpha = data.lineAlpha * worldAlpha;
	                        context.strokeStyle = '#' + ('00000' + (lineColor | 0).toString(16)).substr(-6);
	                        context.strokeRect(shape.x, shape.y, shape.width, shape.height);
	                    }
	                } else if (data.type === _const.SHAPES.CIRC) {
	                    // TODO - need to be Undefined!
	                    context.beginPath();
	                    context.arc(shape.x, shape.y, shape.radius, 0, 2 * Math.PI);
	                    context.closePath();
	
	                    if (data.fill) {
	                        context.globalAlpha = data.fillAlpha * worldAlpha;
	                        context.fillStyle = '#' + ('00000' + (fillColor | 0).toString(16)).substr(-6);
	                        context.fill();
	                    }
	                    if (data.lineWidth) {
	                        context.globalAlpha = data.lineAlpha * worldAlpha;
	                        context.strokeStyle = '#' + ('00000' + (lineColor | 0).toString(16)).substr(-6);
	                        context.stroke();
	                    }
	                } else if (data.type === _const.SHAPES.ELIP) {
	                    // ellipse code taken from: http://stackoverflow.com/questions/2172798/how-to-draw-an-oval-in-html5-canvas
	
	                    var w = shape.width * 2;
	                    var h = shape.height * 2;
	
	                    var x = shape.x - w / 2;
	                    var y = shape.y - h / 2;
	
	                    context.beginPath();
	
	                    var kappa = 0.5522848;
	                    var ox = w / 2 * kappa; // control point offset horizontal
	                    var oy = h / 2 * kappa; // control point offset vertical
	                    var xe = x + w; // x-end
	                    var ye = y + h; // y-end
	                    var xm = x + w / 2; // x-middle
	                    var ym = y + h / 2; // y-middle
	
	                    context.moveTo(x, ym);
	                    context.bezierCurveTo(x, ym - oy, xm - ox, y, xm, y);
	                    context.bezierCurveTo(xm + ox, y, xe, ym - oy, xe, ym);
	                    context.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
	                    context.bezierCurveTo(xm - ox, ye, x, ym + oy, x, ym);
	
	                    context.closePath();
	
	                    if (data.fill) {
	                        context.globalAlpha = data.fillAlpha * worldAlpha;
	                        context.fillStyle = '#' + ('00000' + (fillColor | 0).toString(16)).substr(-6);
	                        context.fill();
	                    }
	                    if (data.lineWidth) {
	                        context.globalAlpha = data.lineAlpha * worldAlpha;
	                        context.strokeStyle = '#' + ('00000' + (lineColor | 0).toString(16)).substr(-6);
	                        context.stroke();
	                    }
	                } else if (data.type === _const.SHAPES.RREC) {
	                    var rx = shape.x;
	                    var ry = shape.y;
	                    var width = shape.width;
	                    var height = shape.height;
	                    var radius = shape.radius;
	
	                    var maxRadius = Math.min(width, height) / 2 | 0;
	
	                    radius = radius > maxRadius ? maxRadius : radius;
	
	                    context.beginPath();
	                    context.moveTo(rx, ry + radius);
	                    context.lineTo(rx, ry + height - radius);
	                    context.quadraticCurveTo(rx, ry + height, rx + radius, ry + height);
	                    context.lineTo(rx + width - radius, ry + height);
	                    context.quadraticCurveTo(rx + width, ry + height, rx + width, ry + height - radius);
	                    context.lineTo(rx + width, ry + radius);
	                    context.quadraticCurveTo(rx + width, ry, rx + width - radius, ry);
	                    context.lineTo(rx + radius, ry);
	                    context.quadraticCurveTo(rx, ry, rx, ry + radius);
	                    context.closePath();
	
	                    if (data.fillColor || data.fillColor === 0) {
	                        context.globalAlpha = data.fillAlpha * worldAlpha;
	                        context.fillStyle = '#' + ('00000' + (fillColor | 0).toString(16)).substr(-6);
	                        context.fill();
	                    }
	
	                    if (data.lineWidth) {
	                        context.globalAlpha = data.lineAlpha * worldAlpha;
	                        context.strokeStyle = '#' + ('00000' + (lineColor | 0).toString(16)).substr(-6);
	                        context.stroke();
	                    }
	                }
	            }
	        }
	
	        /**
	         * Updates the tint of a graphics object
	         *
	         * @private
	         * @param {PIXI.Graphics} graphics - the graphics that will have its tint updated
	         */
	
	    }, {
	        key: 'updateGraphicsTint',
	        value: function updateGraphicsTint(graphics) {
	            graphics._prevTint = graphics.tint;
	
	            var tintR = (graphics.tint >> 16 & 0xFF) / 255;
	            var tintG = (graphics.tint >> 8 & 0xFF) / 255;
	            var tintB = (graphics.tint & 0xFF) / 255;
	
	            for (var i = 0; i < graphics.graphicsData.length; ++i) {
	                var data = graphics.graphicsData[i];
	
	                var fillColor = data.fillColor | 0;
	                var lineColor = data.lineColor | 0;
	
	                // super inline cos im an optimization NAZI :)
	                data._fillTint = ((fillColor >> 16 & 0xFF) / 255 * tintR * 255 << 16) + ((fillColor >> 8 & 0xFF) / 255 * tintG * 255 << 8) + (fillColor & 0xFF) / 255 * tintB * 255;
	
	                data._lineTint = ((lineColor >> 16 & 0xFF) / 255 * tintR * 255 << 16) + ((lineColor >> 8 & 0xFF) / 255 * tintG * 255 << 8) + (lineColor & 0xFF) / 255 * tintB * 255;
	            }
	        }
	
	        /**
	         * Renders a polygon.
	         *
	         * @param {PIXI.Point[]} points - The points to render
	         * @param {boolean} close - Should the polygon be closed
	         * @param {CanvasRenderingContext2D} context - The rendering context to use
	         */
	
	    }, {
	        key: 'renderPolygon',
	        value: function renderPolygon(points, close, context) {
	            context.moveTo(points[0], points[1]);
	
	            for (var j = 1; j < points.length / 2; ++j) {
	                context.lineTo(points[j * 2], points[j * 2 + 1]);
	            }
	
	            if (close) {
	                context.closePath();
	            }
	        }
	
	        /**
	         * destroy graphics object
	         *
	         */
	
	    }, {
	        key: 'destroy',
	        value: function destroy() {
	            this.renderer = null;
	        }
	    }]);
	
	    return CanvasGraphicsRenderer;
	}();
	
	exports.default = CanvasGraphicsRenderer;
	
	
	_CanvasRenderer2.default.registerPlugin('graphics', CanvasGraphicsRenderer);

/***/ })
]);
//# sourceMappingURL=index.js.map