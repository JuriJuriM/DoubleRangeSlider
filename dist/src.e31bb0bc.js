// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/prettier/standalone.js":[function(require,module,exports) {
var define;
var global = arguments[3];
function _wrapRegExp() { _wrapRegExp = function _wrapRegExp(re, groups) { return new BabelRegExp(re, void 0, groups); }; var _super = RegExp.prototype, _groups = new WeakMap(); function BabelRegExp(re, flags, groups) { var _this = new RegExp(re, flags); return _groups.set(_this, groups || _groups.get(re)), _setPrototypeOf(_this, BabelRegExp.prototype); } function buildGroups(result, re) { var g = _groups.get(re); return Object.keys(g).reduce(function (groups, name) { return groups[name] = result[g[name]], groups; }, Object.create(null)); } return _inherits(BabelRegExp, RegExp), BabelRegExp.prototype.exec = function (str) { var result = _super.exec.call(this, str); return result && (result.groups = buildGroups(result, this)), result; }, BabelRegExp.prototype[Symbol.replace] = function (str, substitution) { if ("string" == typeof substitution) { var groups = _groups.get(this); return _super[Symbol.replace].call(this, str, substitution.replace(/\$<([^>]+)>/g, function (_, name) { return "$" + groups[name]; })); } if ("function" == typeof substitution) { var _this = this; return _super[Symbol.replace].call(this, str, function () { var args = arguments; return "object" != _typeof(args[args.length - 1]) && (args = [].slice.call(args)).push(buildGroups(args, _this)), substitution.apply(this, args); }); } return _super[Symbol.replace].call(this, str, substitution); }, _wrapRegExp.apply(this, arguments); }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

(function (e) {
  if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) == "object" && (typeof module === "undefined" ? "undefined" : _typeof(module)) == "object") module.exports = e();else if (typeof define == "function" && define.amd) define(e);else {
    var f = (typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) < "u" ? globalThis : (typeof global === "undefined" ? "undefined" : _typeof(global)) < "u" ? global : (typeof self === "undefined" ? "undefined" : _typeof(self)) < "u" ? self : this || {};
    f.prettier = e();
  }
})(function () {
  "use strict";

  var be = function be(e, n) {
    return function () {
      return n || e((n = {
        exports: {}
      }).exports, n), n.exports;
    };
  };

  var Ye = be(function (yg, ru) {
    var er = function er(e) {
      return e && e.Math == Math && e;
    };

    ru.exports = er((typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) == "object" && globalThis) || er((typeof window === "undefined" ? "undefined" : _typeof(window)) == "object" && window) || er((typeof self === "undefined" ? "undefined" : _typeof(self)) == "object" && self) || er((typeof global === "undefined" ? "undefined" : _typeof(global)) == "object" && global) || function () {
      return this;
    }() || Function("return this")();
  });
  var ft = be(function (hg, nu) {
    nu.exports = function (e) {
      try {
        return !!e();
      } catch (_unused) {
        return !0;
      }
    };
  });
  var ht = be(function (Cg, uu) {
    var vo = ft();
    uu.exports = !vo(function () {
      return Object.defineProperty({}, 1, {
        get: function get() {
          return 7;
        }
      })[1] != 7;
    });
  });
  var tr = be(function (Eg, su) {
    var Fo = ft();
    su.exports = !Fo(function () {
      var e = function () {}.bind();

      return typeof e != "function" || e.hasOwnProperty("prototype");
    });
  });
  var Ct = be(function (vg, au) {
    var Ao = tr(),
        rr = Function.prototype.call;
    au.exports = Ao ? rr.bind(rr) : function () {
      return rr.apply(rr, arguments);
    };
  });
  var lu = be(function (cu) {
    "use strict";

    var iu = {}.propertyIsEnumerable,
        ou = Object.getOwnPropertyDescriptor,
        So = ou && !iu.call({
      1: 2
    }, 1);
    cu.f = So ? function (n) {
      var t = ou(this, n);
      return !!t && t.enumerable;
    } : iu;
  });
  var nr = be(function (Ag, pu) {
    pu.exports = function (e, n) {
      return {
        enumerable: !(e & 1),
        configurable: !(e & 2),
        writable: !(e & 4),
        value: n
      };
    };
  });
  var at = be(function (Sg, mu) {
    var fu = tr(),
        Du = Function.prototype,
        xo = Du.bind,
        Lr = Du.call,
        bo = fu && xo.bind(Lr, Lr);
    mu.exports = fu ? function (e) {
      return e && bo(e);
    } : function (e) {
      return e && function () {
        return Lr.apply(e, arguments);
      };
    };
  });
  var ur = be(function (xg, gu) {
    var du = at(),
        To = du({}.toString),
        Bo = du("".slice);

    gu.exports = function (e) {
      return Bo(To(e), 8, -1);
    };
  });
  var hu = be(function (bg, yu) {
    var No = Ye(),
        wo = at(),
        _o = ft(),
        Po = ur(),
        Or = No.Object,
        Io = wo("".split);

    yu.exports = _o(function () {
      return !Or("z").propertyIsEnumerable(0);
    }) ? function (e) {
      return Po(e) == "String" ? Io(e, "") : Or(e);
    } : Or;
  });
  var jr = be(function (Tg, Cu) {
    var ko = Ye(),
        Lo = ko.TypeError;

    Cu.exports = function (e) {
      if (e == null) throw Lo("Can't call method on " + e);
      return e;
    };
  });
  var sr = be(function (Bg, Eu) {
    var Oo = hu(),
        jo = jr();

    Eu.exports = function (e) {
      return Oo(jo(e));
    };
  });
  var it = be(function (Ng, vu) {
    vu.exports = function (e) {
      return typeof e == "function";
    };
  });
  var Et = be(function (wg, Fu) {
    var qo = it();

    Fu.exports = function (e) {
      return _typeof(e) == "object" ? e !== null : qo(e);
    };
  });
  var Mt = be(function (_g, Au) {
    var qr = Ye(),
        Mo = it(),
        Ro = function Ro(e) {
      return Mo(e) ? e : void 0;
    };

    Au.exports = function (e, n) {
      return arguments.length < 2 ? Ro(qr[e]) : qr[e] && qr[e][n];
    };
  });
  var Mr = be(function (Pg, Su) {
    var Vo = at();
    Su.exports = Vo({}.isPrototypeOf);
  });
  var bu = be(function (Ig, xu) {
    var Wo = Mt();
    xu.exports = Wo("navigator", "userAgent") || "";
  });
  var Iu = be(function (kg, Pu) {
    var _u = Ye(),
        Rr = bu(),
        Tu = _u.process,
        Bu = _u.Deno,
        Nu = Tu && Tu.versions || Bu && Bu.version,
        wu = Nu && Nu.v8,
        lt,
        ar;

    wu && (lt = wu.split("."), ar = lt[0] > 0 && lt[0] < 4 ? 1 : +(lt[0] + lt[1]));
    !ar && Rr && (lt = Rr.match(/Edge\/(\d+)/), (!lt || lt[1] >= 74) && (lt = Rr.match(/Chrome\/(\d+)/), lt && (ar = +lt[1])));
    Pu.exports = ar;
  });
  var Vr = be(function (Lg, Lu) {
    var ku = Iu(),
        $o = ft();
    Lu.exports = !!Object.getOwnPropertySymbols && !$o(function () {
      var e = Symbol();
      return !String(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && ku && ku < 41;
    });
  });
  var Wr = be(function (Og, Ou) {
    var Ho = Vr();
    Ou.exports = Ho && !Symbol.sham && _typeof(Symbol.iterator) == "symbol";
  });
  var $r = be(function (jg, ju) {
    var Go = Ye(),
        Jo = Mt(),
        Uo = it(),
        zo = Mr(),
        Xo = Wr(),
        Ko = Go.Object;
    ju.exports = Xo ? function (e) {
      return _typeof(e) == "symbol";
    } : function (e) {
      var n = Jo("Symbol");
      return Uo(n) && zo(n.prototype, Ko(e));
    };
  });
  var ir = be(function (qg, qu) {
    var Yo = Ye(),
        Qo = Yo.String;

    qu.exports = function (e) {
      try {
        return Qo(e);
      } catch (_unused2) {
        return "Object";
      }
    };
  });
  var Rt = be(function (Mg, Mu) {
    var Zo = Ye(),
        ec = it(),
        tc = ir(),
        rc = Zo.TypeError;

    Mu.exports = function (e) {
      if (ec(e)) return e;
      throw rc(tc(e) + " is not a function");
    };
  });
  var or = be(function (Rg, Ru) {
    var nc = Rt();

    Ru.exports = function (e, n) {
      var t = e[n];
      return t == null ? void 0 : nc(t);
    };
  });
  var Wu = be(function (Vg, Vu) {
    var uc = Ye(),
        Hr = Ct(),
        Gr = it(),
        Jr = Et(),
        sc = uc.TypeError;

    Vu.exports = function (e, n) {
      var t, s;
      if (n === "string" && Gr(t = e.toString) && !Jr(s = Hr(t, e)) || Gr(t = e.valueOf) && !Jr(s = Hr(t, e)) || n !== "string" && Gr(t = e.toString) && !Jr(s = Hr(t, e))) return s;
      throw sc("Can't convert object to primitive value");
    };
  });
  var Hu = be(function (Wg, $u) {
    $u.exports = !1;
  });
  var cr = be(function ($g, Ju) {
    var Gu = Ye(),
        ac = Object.defineProperty;

    Ju.exports = function (e, n) {
      try {
        ac(Gu, e, {
          value: n,
          configurable: !0,
          writable: !0
        });
      } catch (_unused3) {
        Gu[e] = n;
      }

      return n;
    };
  });
  var lr = be(function (Hg, zu) {
    var ic = Ye(),
        oc = cr(),
        Uu = "__core-js_shared__",
        cc = ic[Uu] || oc(Uu, {});
    zu.exports = cc;
  });
  var Ur = be(function (Gg, Ku) {
    var lc = Hu(),
        Xu = lr();
    (Ku.exports = function (e, n) {
      return Xu[e] || (Xu[e] = n !== void 0 ? n : {});
    })("versions", []).push({
      version: "3.21.1",
      mode: lc ? "pure" : "global",
      copyright: "\xA9 2014-2022 Denis Pushkarev (zloirock.ru)",
      license: "https://github.com/zloirock/core-js/blob/v3.21.1/LICENSE",
      source: "https://github.com/zloirock/core-js"
    });
  });
  var pr = be(function (Jg, Yu) {
    var pc = Ye(),
        fc = jr(),
        Dc = pc.Object;

    Yu.exports = function (e) {
      return Dc(fc(e));
    };
  });
  var mt = be(function (Ug, Qu) {
    var mc = at(),
        dc = pr(),
        gc = mc({}.hasOwnProperty);

    Qu.exports = Object.hasOwn || function (n, t) {
      return gc(dc(n), t);
    };
  });
  var zr = be(function (zg, Zu) {
    var yc = at(),
        hc = 0,
        Cc = Math.random(),
        Ec = yc(1 .toString);

    Zu.exports = function (e) {
      return "Symbol(" + (e === void 0 ? "" : e) + ")_" + Ec(++hc + Cc, 36);
    };
  });
  var Ft = be(function (Xg, us) {
    var vc = Ye(),
        Fc = Ur(),
        es = mt(),
        Ac = zr(),
        ts = Vr(),
        ns = Wr(),
        Tt = Fc("wks"),
        vt = vc.Symbol,
        rs = vt && vt.for,
        Sc = ns ? vt : vt && vt.withoutSetter || Ac;

    us.exports = function (e) {
      if (!es(Tt, e) || !(ts || typeof Tt[e] == "string")) {
        var n = "Symbol." + e;
        ts && es(vt, e) ? Tt[e] = vt[e] : ns && rs ? Tt[e] = rs(n) : Tt[e] = Sc(n);
      }

      return Tt[e];
    };
  });
  var os = be(function (Kg, is) {
    var xc = Ye(),
        bc = Ct(),
        ss = Et(),
        as = $r(),
        Tc = or(),
        Bc = Wu(),
        Nc = Ft(),
        wc = xc.TypeError,
        _c = Nc("toPrimitive");

    is.exports = function (e, n) {
      if (!ss(e) || as(e)) return e;
      var t = Tc(e, _c),
          s;

      if (t) {
        if (n === void 0 && (n = "default"), s = bc(t, e, n), !ss(s) || as(s)) return s;
        throw wc("Can't convert object to primitive value");
      }

      return n === void 0 && (n = "number"), Bc(e, n);
    };
  });
  var fr = be(function (Yg, cs) {
    var Pc = os(),
        Ic = $r();

    cs.exports = function (e) {
      var n = Pc(e, "string");
      return Ic(n) ? n : n + "";
    };
  });
  var fs = be(function (Qg, ps) {
    var kc = Ye(),
        ls = Et(),
        Xr = kc.document,
        Lc = ls(Xr) && ls(Xr.createElement);

    ps.exports = function (e) {
      return Lc ? Xr.createElement(e) : {};
    };
  });
  var Kr = be(function (Zg, Ds) {
    var Oc = ht(),
        jc = ft(),
        qc = fs();
    Ds.exports = !Oc && !jc(function () {
      return Object.defineProperty(qc("div"), "a", {
        get: function get() {
          return 7;
        }
      }).a != 7;
    });
  });
  var Yr = be(function (ds) {
    var Mc = ht(),
        Rc = Ct(),
        Vc = lu(),
        Wc = nr(),
        $c = sr(),
        Hc = fr(),
        Gc = mt(),
        Jc = Kr(),
        ms = Object.getOwnPropertyDescriptor;
    ds.f = Mc ? ms : function (n, t) {
      if (n = $c(n), t = Hc(t), Jc) try {
        return ms(n, t);
      } catch (_unused4) {}
      if (Gc(n, t)) return Wc(!Rc(Vc.f, n, t), n[t]);
    };
  });
  var ys = be(function (t0, gs) {
    var Uc = ht(),
        zc = ft();
    gs.exports = Uc && zc(function () {
      return Object.defineProperty(function () {}, "prototype", {
        value: 42,
        writable: !1
      }).prototype != 42;
    });
  });
  var Bt = be(function (r0, Cs) {
    var hs = Ye(),
        Xc = Et(),
        Kc = hs.String,
        Yc = hs.TypeError;

    Cs.exports = function (e) {
      if (Xc(e)) return e;
      throw Yc(Kc(e) + " is not an object");
    };
  });
  var mr = be(function (vs) {
    var Qc = Ye(),
        Zc = ht(),
        el = Kr(),
        tl = ys(),
        Dr = Bt(),
        Es = fr(),
        rl = Qc.TypeError,
        Qr = Object.defineProperty,
        nl = Object.getOwnPropertyDescriptor,
        Zr = "enumerable",
        en = "configurable",
        tn = "writable";
    vs.f = Zc ? tl ? function (n, t, s) {
      if (Dr(n), t = Es(t), Dr(s), typeof n == "function" && t === "prototype" && "value" in s && tn in s && !s[tn]) {
        var i = nl(n, t);
        i && i[tn] && (n[t] = s.value, s = {
          configurable: en in s ? s[en] : i[en],
          enumerable: Zr in s ? s[Zr] : i[Zr],
          writable: !1
        });
      }

      return Qr(n, t, s);
    } : Qr : function (n, t, s) {
      if (Dr(n), t = Es(t), Dr(s), el) try {
        return Qr(n, t, s);
      } catch (_unused5) {}
      if ("get" in s || "set" in s) throw rl("Accessors not supported");
      return "value" in s && (n[t] = s.value), n;
    };
  });
  var dr = be(function (u0, Fs) {
    var ul = ht(),
        sl = mr(),
        al = nr();
    Fs.exports = ul ? function (e, n, t) {
      return sl.f(e, n, al(1, t));
    } : function (e, n, t) {
      return e[n] = t, e;
    };
  });
  var gr = be(function (s0, As) {
    var il = at(),
        ol = it(),
        rn = lr(),
        cl = il(Function.toString);
    ol(rn.inspectSource) || (rn.inspectSource = function (e) {
      return cl(e);
    });
    As.exports = rn.inspectSource;
  });
  var bs = be(function (a0, xs) {
    var ll = Ye(),
        pl = it(),
        fl = gr(),
        Ss = ll.WeakMap;
    xs.exports = pl(Ss) && /native code/.test(fl(Ss));
  });
  var Ns = be(function (i0, Bs) {
    var Dl = Ur(),
        ml = zr(),
        Ts = Dl("keys");

    Bs.exports = function (e) {
      return Ts[e] || (Ts[e] = ml(e));
    };
  });
  var nn = be(function (o0, ws) {
    ws.exports = {};
  });
  var Os = be(function (c0, Ls) {
    var dl = bs(),
        ks = Ye(),
        un = at(),
        gl = Et(),
        yl = dr(),
        sn = mt(),
        an = lr(),
        hl = Ns(),
        Cl = nn(),
        _s = "Object already initialized",
        cn = ks.TypeError,
        El = ks.WeakMap,
        yr,
        Vt,
        hr,
        vl = function vl(e) {
      return hr(e) ? Vt(e) : yr(e, {});
    },
        Fl = function Fl(e) {
      return function (n) {
        var t;
        if (!gl(n) || (t = Vt(n)).type !== e) throw cn("Incompatible receiver, " + e + " required");
        return t;
      };
    };

    dl || an.state ? (dt = an.state || (an.state = new El()), Ps = un(dt.get), on = un(dt.has), Is = un(dt.set), yr = function yr(e, n) {
      if (on(dt, e)) throw new cn(_s);
      return n.facade = e, Is(dt, e, n), n;
    }, Vt = function Vt(e) {
      return Ps(dt, e) || {};
    }, hr = function hr(e) {
      return on(dt, e);
    }) : (At = hl("state"), Cl[At] = !0, yr = function yr(e, n) {
      if (sn(e, At)) throw new cn(_s);
      return n.facade = e, yl(e, At, n), n;
    }, Vt = function Vt(e) {
      return sn(e, At) ? e[At] : {};
    }, hr = function hr(e) {
      return sn(e, At);
    });
    var dt, Ps, on, Is, At;
    Ls.exports = {
      set: yr,
      get: Vt,
      has: hr,
      enforce: vl,
      getterFor: Fl
    };
  });
  var Ms = be(function (l0, qs) {
    var ln = ht(),
        Al = mt(),
        js = Function.prototype,
        Sl = ln && Object.getOwnPropertyDescriptor,
        pn = Al(js, "name"),
        xl = pn && function () {}.name === "something",
        bl = pn && (!ln || ln && Sl(js, "name").configurable);

    qs.exports = {
      EXISTS: pn,
      PROPER: xl,
      CONFIGURABLE: bl
    };
  });
  var Hs = be(function (p0, $s) {
    var Tl = Ye(),
        Rs = it(),
        Bl = mt(),
        Vs = dr(),
        Nl = cr(),
        wl = gr(),
        Ws = Os(),
        _l = Ms().CONFIGURABLE,
        Pl = Ws.get,
        Il = Ws.enforce,
        kl = String(String).split("String");
    ($s.exports = function (e, n, t, s) {
      var i = s ? !!s.unsafe : !1,
          r = s ? !!s.enumerable : !1,
          u = s ? !!s.noTargetGet : !1,
          a = s && s.name !== void 0 ? s.name : n,
          c;

      if (Rs(t) && (String(a).slice(0, 7) === "Symbol(" && (a = "[" + String(a).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"), (!Bl(t, "name") || _l && t.name !== a) && Vs(t, "name", a), c = Il(t), c.source || (c.source = kl.join(typeof a == "string" ? a : ""))), e === Tl) {
        r ? e[n] = t : Nl(n, t);
        return;
      } else i ? !u && e[n] && (r = !0) : delete e[n];

      r ? e[n] = t : Vs(e, n, t);
    })(Function.prototype, "toString", function () {
      return Rs(this) && Pl(this).source || wl(this);
    });
  });
  var Cr = be(function (f0, Gs) {
    var Ll = Math.ceil,
        Ol = Math.floor;

    Gs.exports = function (e) {
      var n = +e;
      return n !== n || n === 0 ? 0 : (n > 0 ? Ol : Ll)(n);
    };
  });
  var Us = be(function (D0, Js) {
    var jl = Cr(),
        ql = Math.max,
        Ml = Math.min;

    Js.exports = function (e, n) {
      var t = jl(e);
      return t < 0 ? ql(t + n, 0) : Ml(t, n);
    };
  });
  var Xs = be(function (m0, zs) {
    var Rl = Cr(),
        Vl = Math.min;

    zs.exports = function (e) {
      return e > 0 ? Vl(Rl(e), 9007199254740991) : 0;
    };
  });
  var Nt = be(function (d0, Ks) {
    var Wl = Xs();

    Ks.exports = function (e) {
      return Wl(e.length);
    };
  });
  var Zs = be(function (g0, Qs) {
    var $l = sr(),
        Hl = Us(),
        Gl = Nt(),
        Ys = function Ys(e) {
      return function (n, t, s) {
        var i = $l(n),
            r = Gl(i),
            u = Hl(s, r),
            a;

        if (e && t != t) {
          for (; r > u;) {
            if (a = i[u++], a != a) return !0;
          }
        } else for (; r > u; u++) {
          if ((e || u in i) && i[u] === t) return e || u || 0;
        }

        return !e && -1;
      };
    };

    Qs.exports = {
      includes: Ys(!0),
      indexOf: Ys(!1)
    };
  });
  var ra = be(function (y0, ta) {
    var Jl = at(),
        fn = mt(),
        Ul = sr(),
        zl = Zs().indexOf,
        Xl = nn(),
        ea = Jl([].push);

    ta.exports = function (e, n) {
      var t = Ul(e),
          s = 0,
          i = [],
          r;

      for (r in t) {
        !fn(Xl, r) && fn(t, r) && ea(i, r);
      }

      for (; n.length > s;) {
        fn(t, r = n[s++]) && (~zl(i, r) || ea(i, r));
      }

      return i;
    };
  });
  var ua = be(function (h0, na) {
    na.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
  });
  var aa = be(function (sa) {
    var Kl = ra(),
        Yl = ua(),
        Ql = Yl.concat("length", "prototype");

    sa.f = Object.getOwnPropertyNames || function (n) {
      return Kl(n, Ql);
    };
  });
  var oa = be(function (ia) {
    ia.f = Object.getOwnPropertySymbols;
  });
  var la = be(function (v0, ca) {
    var Zl = Mt(),
        ep = at(),
        tp = aa(),
        rp = oa(),
        np = Bt(),
        up = ep([].concat);

    ca.exports = Zl("Reflect", "ownKeys") || function (n) {
      var t = tp.f(np(n)),
          s = rp.f;
      return s ? up(t, s(n)) : t;
    };
  });
  var Da = be(function (F0, fa) {
    var pa = mt(),
        sp = la(),
        ap = Yr(),
        ip = mr();

    fa.exports = function (e, n, t) {
      for (var s = sp(n), i = ip.f, r = ap.f, u = 0; u < s.length; u++) {
        var a = s[u];
        !pa(e, a) && !(t && pa(t, a)) && i(e, a, r(n, a));
      }
    };
  });
  var da = be(function (A0, ma) {
    var op = ft(),
        cp = it(),
        lp = /#|\.prototype\./,
        Wt = function Wt(e, n) {
      var t = fp[pp(e)];
      return t == mp ? !0 : t == Dp ? !1 : cp(n) ? op(n) : !!n;
    },
        pp = Wt.normalize = function (e) {
      return String(e).replace(lp, ".").toLowerCase();
    },
        fp = Wt.data = {},
        Dp = Wt.NATIVE = "N",
        mp = Wt.POLYFILL = "P";

    ma.exports = Wt;
  });
  var $t = be(function (S0, ga) {
    var Dn = Ye(),
        dp = Yr().f,
        gp = dr(),
        yp = Hs(),
        hp = cr(),
        Cp = Da(),
        Ep = da();

    ga.exports = function (e, n) {
      var t = e.target,
          s = e.global,
          i = e.stat,
          r,
          u,
          a,
          c,
          l,
          C;
      if (s ? u = Dn : i ? u = Dn[t] || hp(t, {}) : u = (Dn[t] || {}).prototype, u) for (a in n) {
        if (l = n[a], e.noTargetGet ? (C = dp(u, a), c = C && C.value) : c = u[a], r = Ep(s ? a : t + (i ? "." : "#") + a, e.forced), !r && c !== void 0) {
          if (_typeof(l) == _typeof(c)) continue;
          Cp(l, c);
        }

        (e.sham || c && c.sham) && gp(l, "sham", !0), yp(u, a, l, e);
      }
    };
  });
  var mn = be(function (x0, ya) {
    var vp = ur();

    ya.exports = Array.isArray || function (n) {
      return vp(n) == "Array";
    };
  });
  var dn = be(function (b0, Ca) {
    var ha = at(),
        Fp = Rt(),
        Ap = tr(),
        Sp = ha(ha.bind);

    Ca.exports = function (e, n) {
      return Fp(e), n === void 0 ? e : Ap ? Sp(e, n) : function () {
        return e.apply(n, arguments);
      };
    };
  });
  var gn = be(function (T0, va) {
    "use strict";

    var xp = Ye(),
        bp = mn(),
        Tp = Nt(),
        Bp = dn(),
        Np = xp.TypeError,
        Ea = function Ea(e, n, t, s, i, r, u, a) {
      for (var c = i, l = 0, C = u ? Bp(u, a) : !1, m, g; l < s;) {
        if (l in t) {
          if (m = C ? C(t[l], l, n) : t[l], r > 0 && bp(m)) g = Tp(m), c = Ea(e, n, m, g, c, r - 1) - 1;else {
            if (c >= 9007199254740991) throw Np("Exceed the acceptable array length");
            e[c] = m;
          }
          c++;
        }

        l++;
      }

      return c;
    };

    va.exports = Ea;
  });
  var Sa = be(function (B0, Aa) {
    var wp = Ft(),
        _p = wp("toStringTag"),
        Fa = {};

    Fa[_p] = "z";
    Aa.exports = String(Fa) === "[object z]";
  });
  var yn = be(function (N0, xa) {
    var Pp = Ye(),
        Ip = Sa(),
        kp = it(),
        Er = ur(),
        Lp = Ft(),
        Op = Lp("toStringTag"),
        jp = Pp.Object,
        qp = Er(function () {
      return arguments;
    }()) == "Arguments",
        Mp = function Mp(e, n) {
      try {
        return e[n];
      } catch (_unused6) {}
    };

    xa.exports = Ip ? Er : function (e) {
      var n, t, s;
      return e === void 0 ? "Undefined" : e === null ? "Null" : typeof (t = Mp(n = jp(e), Op)) == "string" ? t : qp ? Er(n) : (s = Er(n)) == "Object" && kp(n.callee) ? "Arguments" : s;
    };
  });

  var _a = be(function (w0, wa) {
    var Rp = at(),
        Vp = ft(),
        ba = it(),
        Wp = yn(),
        $p = Mt(),
        Hp = gr(),
        Ta = function Ta() {},
        Gp = [],
        Ba = $p("Reflect", "construct"),
        hn = /^\s*(?:class|function)\b/,
        Jp = Rp(hn.exec),
        Up = !hn.exec(Ta),
        Ht = function Ht(n) {
      if (!ba(n)) return !1;

      try {
        return Ba(Ta, Gp, n), !0;
      } catch (_unused7) {
        return !1;
      }
    },
        Na = function Na(n) {
      if (!ba(n)) return !1;

      switch (Wp(n)) {
        case "AsyncFunction":
        case "GeneratorFunction":
        case "AsyncGeneratorFunction":
          return !1;
      }

      try {
        return Up || !!Jp(hn, Hp(n));
      } catch (_unused8) {
        return !0;
      }
    };

    Na.sham = !0;
    wa.exports = !Ba || Vp(function () {
      var e;
      return Ht(Ht.call) || !Ht(Object) || !Ht(function () {
        e = !0;
      }) || e;
    }) ? Na : Ht;
  });

  var La = be(function (_0, ka) {
    var zp = Ye(),
        Pa = mn(),
        Xp = _a(),
        Kp = Et(),
        Yp = Ft(),
        Qp = Yp("species"),
        Ia = zp.Array;

    ka.exports = function (e) {
      var n;
      return Pa(e) && (n = e.constructor, Xp(n) && (n === Ia || Pa(n.prototype)) ? n = void 0 : Kp(n) && (n = n[Qp], n === null && (n = void 0))), n === void 0 ? Ia : n;
    };
  });
  var Cn = be(function (P0, Oa) {
    var Zp = La();

    Oa.exports = function (e, n) {
      return new (Zp(e))(n === 0 ? 0 : n);
    };
  });
  var ja = be(function () {
    "use strict";

    var ef = $t(),
        tf = gn(),
        rf = Rt(),
        nf = pr(),
        uf = Nt(),
        sf = Cn();
    ef({
      target: "Array",
      proto: !0
    }, {
      flatMap: function flatMap(n) {
        var t = nf(this),
            s = uf(t),
            i;
        return rf(n), i = sf(t, 0), i.length = tf(i, t, t, s, 0, 1, n, arguments.length > 1 ? arguments[1] : void 0), i;
      }
    });
  });
  var En = be(function (L0, qa) {
    qa.exports = {};
  });
  var Ra = be(function (O0, Ma) {
    var af = Ft(),
        of = En(),
        cf = af("iterator"),
        lf = Array.prototype;

    Ma.exports = function (e) {
      return e !== void 0 && (of.Array === e || lf[cf] === e);
    };
  });
  var vn = be(function (j0, Wa) {
    var pf = yn(),
        Va = or(),
        ff = En(),
        Df = Ft(),
        mf = Df("iterator");

    Wa.exports = function (e) {
      if (e != null) return Va(e, mf) || Va(e, "@@iterator") || ff[pf(e)];
    };
  });
  var Ha = be(function (q0, $a) {
    var df = Ye(),
        gf = Ct(),
        yf = Rt(),
        hf = Bt(),
        Cf = ir(),
        Ef = vn(),
        vf = df.TypeError;

    $a.exports = function (e, n) {
      var t = arguments.length < 2 ? Ef(e) : n;
      if (yf(t)) return hf(gf(t, e));
      throw vf(Cf(e) + " is not iterable");
    };
  });
  var Ua = be(function (M0, Ja) {
    var Ff = Ct(),
        Ga = Bt(),
        Af = or();

    Ja.exports = function (e, n, t) {
      var s, i;
      Ga(e);

      try {
        if (s = Af(e, "return"), !s) {
          if (n === "throw") throw t;
          return t;
        }

        s = Ff(s, e);
      } catch (r) {
        i = !0, s = r;
      }

      if (n === "throw") throw t;
      if (i) throw s;
      return Ga(s), t;
    };
  });
  var Qa = be(function (R0, Ya) {
    var Sf = Ye(),
        xf = dn(),
        bf = Ct(),
        Tf = Bt(),
        Bf = ir(),
        Nf = Ra(),
        wf = Nt(),
        za = Mr(),
        _f = Ha(),
        Pf = vn(),
        Xa = Ua(),
        If = Sf.TypeError,
        vr = function vr(e, n) {
      this.stopped = e, this.result = n;
    },
        Ka = vr.prototype;

    Ya.exports = function (e, n, t) {
      var s = t && t.that,
          i = !!(t && t.AS_ENTRIES),
          r = !!(t && t.IS_ITERATOR),
          u = !!(t && t.INTERRUPTED),
          a = xf(n, s),
          c,
          l,
          C,
          m,
          g,
          p,
          f,
          h = function h(T) {
        return c && Xa(c, "normal", T), new vr(!0, T);
      },
          N = function N(T) {
        return i ? (Tf(T), u ? a(T[0], T[1], h) : a(T[0], T[1])) : u ? a(T, h) : a(T);
      };

      if (r) c = e;else {
        if (l = Pf(e), !l) throw If(Bf(e) + " is not iterable");

        if (Nf(l)) {
          for (C = 0, m = wf(e); m > C; C++) {
            if (g = N(e[C]), g && za(Ka, g)) return g;
          }

          return new vr(!1);
        }

        c = _f(e, l);
      }

      for (p = c.next; !(f = bf(p, c)).done;) {
        try {
          g = N(f.value);
        } catch (T) {
          Xa(c, "throw", T);
        }

        if (_typeof(g) == "object" && g && za(Ka, g)) return g;
      }

      return new vr(!1);
    };
  });
  var ei = be(function (V0, Za) {
    "use strict";

    var kf = fr(),
        Lf = mr(),
        Of = nr();

    Za.exports = function (e, n, t) {
      var s = kf(n);
      s in e ? Lf.f(e, s, Of(0, t)) : e[s] = t;
    };
  });
  var ti = be(function () {
    var jf = $t(),
        qf = Qa(),
        Mf = ei();
    jf({
      target: "Object",
      stat: !0
    }, {
      fromEntries: function fromEntries(n) {
        var t = {};
        return qf(n, function (s, i) {
          Mf(t, s, i);
        }, {
          AS_ENTRIES: !0
        }), t;
      }
    });
  });
  var ri = be(function () {
    var Rf = $t(),
        Vf = Ye();
    Rf({
      global: !0
    }, {
      globalThis: Vf
    });
  });
  var ni = be(function () {
    ri();
  });
  var ui = be(function () {
    "use strict";

    var Wf = $t(),
        $f = gn(),
        Hf = pr(),
        Gf = Nt(),
        Jf = Cr(),
        Uf = Cn();
    Wf({
      target: "Array",
      proto: !0
    }, {
      flat: function flat() {
        var n = arguments.length ? arguments[0] : void 0,
            t = Hf(this),
            s = Gf(t),
            i = Uf(t, 0);
        return i.length = $f(i, t, t, s, 0, n === void 0 ? 1 : Jf(n)), i;
      }
    });
  });
  var dg = be(function (Y0, yo) {
    var zf = ["cliName", "cliCategory", "cliDescription"],
        Xf = ["_"],
        Kf = ["languageId"],
        si,
        ai,
        ii,
        oi,
        ci,
        li;

    function _n(e, n) {
      if (e == null) return {};
      var t = Yf(e, n),
          s,
          i;

      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);

        for (i = 0; i < r.length; i++) {
          s = r[i], !(n.indexOf(s) >= 0) && (!Object.prototype.propertyIsEnumerable.call(e, s) || (t[s] = e[s]));
        }
      }

      return t;
    }

    function Yf(e, n) {
      if (e == null) return {};
      var t = {},
          s = Object.keys(e),
          i,
          r;

      for (r = 0; r < s.length; r++) {
        i = s[r], !(n.indexOf(i) >= 0) && (t[i] = e[i]);
      }

      return t;
    }

    ja();
    ti();
    ni();
    ui();

    function wt(e, n) {
      return n || (n = e.slice(0)), Object.freeze(Object.defineProperties(e, {
        raw: {
          value: Object.freeze(n)
        }
      }));
    }

    var Pn = Object.defineProperty,
        Qf = Object.getOwnPropertyDescriptor,
        In = Object.getOwnPropertyNames,
        Zf = Object.prototype.hasOwnProperty,
        br = function br(e, n) {
      return function () {
        return e && (n = (0, e[In(e)[0]])(e = 0)), n;
      };
    },
        Z = function Z(e, n) {
      return function () {
        return n || (0, e[In(e)[0]])((n = {
          exports: {}
        }).exports, n), n.exports;
      };
    },
        kn = function kn(e, n) {
      for (var t in n) {
        Pn(e, t, {
          get: n[t],
          enumerable: !0
        });
      }
    },
        eD = function eD(e, n, t, s) {
      if (n && _typeof(n) == "object" || typeof n == "function") {
        var _iterator = _createForOfIteratorHelper(In(n)),
            _step;

        try {
          var _loop = function _loop() {
            var i = _step.value;
            !Zf.call(e, i) && i !== t && Pn(e, i, {
              get: function get() {
                return n[i];
              },
              enumerable: !(s = Qf(n, i)) || s.enumerable
            });
          };

          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            _loop();
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }

      return e;
    },
        pt = function pt(e) {
      return eD(Pn({}, "__esModule", {
        value: !0
      }), e);
    },
        pi,
        fi,
        xt,
        ae = br({
      "<define:process>": function defineProcess() {
        pi = {}, fi = [], xt = {
          env: pi,
          argv: fi
        };
      }
    }),
        gi = Z({
      "package.json": function packageJson(e, n) {
        n.exports = {
          version: "2.6.2"
        };
      }
    }),
        tD = Z({
      "node_modules/diff/lib/diff/base.js": function node_modulesDiffLibDiffBaseJs(e) {
        "use strict";

        ae(), Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = n;

        function n() {}

        n.prototype = {
          diff: function diff(r, u) {
            var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
                c = a.callback;
            typeof a == "function" && (c = a, a = {}), this.options = a;
            var l = this;

            function C(b) {
              return c ? (setTimeout(function () {
                c(void 0, b);
              }, 0), !0) : b;
            }

            r = this.castInput(r), u = this.castInput(u), r = this.removeEmpty(this.tokenize(r)), u = this.removeEmpty(this.tokenize(u));
            var m = u.length,
                g = r.length,
                p = 1,
                f = m + g,
                h = [{
              newPos: -1,
              components: []
            }],
                N = this.extractCommon(h[0], u, r, 0);
            if (h[0].newPos + 1 >= m && N + 1 >= g) return C([{
              value: this.join(u),
              count: u.length
            }]);

            function T() {
              for (var b = -1 * p; b <= p; b += 2) {
                var v = void 0,
                    B = h[b - 1],
                    w = h[b + 1],
                    I = (w ? w.newPos : 0) - b;
                B && (h[b - 1] = void 0);
                var E = B && B.newPos + 1 < m,
                    D = w && 0 <= I && I < g;

                if (!E && !D) {
                  h[b] = void 0;
                  continue;
                }

                if (!E || D && B.newPos < w.newPos ? (v = s(w), l.pushComponent(v.components, void 0, !0)) : (v = B, v.newPos++, l.pushComponent(v.components, !0, void 0)), I = l.extractCommon(v, u, r, b), v.newPos + 1 >= m && I + 1 >= g) return C(t(l, v.components, u, r, l.useLongestToken));
                h[b] = v;
              }

              p++;
            }

            if (c) (function b() {
              setTimeout(function () {
                if (p > f) return c();
                T() || b();
              }, 0);
            })();else for (; p <= f;) {
              var A = T();
              if (A) return A;
            }
          },
          pushComponent: function pushComponent(r, u, a) {
            var c = r[r.length - 1];
            c && c.added === u && c.removed === a ? r[r.length - 1] = {
              count: c.count + 1,
              added: u,
              removed: a
            } : r.push({
              count: 1,
              added: u,
              removed: a
            });
          },
          extractCommon: function extractCommon(r, u, a, c) {
            for (var l = u.length, C = a.length, m = r.newPos, g = m - c, p = 0; m + 1 < l && g + 1 < C && this.equals(u[m + 1], a[g + 1]);) {
              m++, g++, p++;
            }

            return p && r.components.push({
              count: p
            }), r.newPos = m, g;
          },
          equals: function equals(r, u) {
            return this.options.comparator ? this.options.comparator(r, u) : r === u || this.options.ignoreCase && r.toLowerCase() === u.toLowerCase();
          },
          removeEmpty: function removeEmpty(r) {
            for (var u = [], a = 0; a < r.length; a++) {
              r[a] && u.push(r[a]);
            }

            return u;
          },
          castInput: function castInput(r) {
            return r;
          },
          tokenize: function tokenize(r) {
            return r.split("");
          },
          join: function join(r) {
            return r.join("");
          }
        };

        function t(i, r, u, a, c) {
          for (var l = 0, C = r.length, m = 0, g = 0; l < C; l++) {
            var p = r[l];

            if (p.removed) {
              if (p.value = i.join(a.slice(g, g + p.count)), g += p.count, l && r[l - 1].added) {
                var h = r[l - 1];
                r[l - 1] = r[l], r[l] = h;
              }
            } else {
              if (!p.added && c) {
                var f = u.slice(m, m + p.count);
                f = f.map(function (T, A) {
                  var b = a[g + A];
                  return b.length > T.length ? b : T;
                }), p.value = i.join(f);
              } else p.value = i.join(u.slice(m, m + p.count));

              m += p.count, p.added || (g += p.count);
            }
          }

          var N = r[C - 1];
          return C > 1 && typeof N.value == "string" && (N.added || N.removed) && i.equals("", N.value) && (r[C - 2].value += N.value, r.pop()), r;
        }

        function s(i) {
          return {
            newPos: i.newPos,
            components: i.components.slice(0)
          };
        }
      }
    }),
        rD = Z({
      "node_modules/diff/lib/diff/array.js": function node_modulesDiffLibDiffArrayJs(e) {
        "use strict";

        ae(), Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.diffArrays = i, e.arrayDiff = void 0;
        var n = t(tD());

        function t(r) {
          return r && r.__esModule ? r : {
            default: r
          };
        }

        var s = new n.default();
        e.arrayDiff = s, s.tokenize = function (r) {
          return r.slice();
        }, s.join = s.removeEmpty = function (r) {
          return r;
        };

        function i(r, u, a) {
          return s.diff(r, u, a);
        }
      }
    }),
        Ln = Z({
      "src/document/doc-builders.js": function srcDocumentDocBuildersJs(e, n) {
        "use strict";

        ae();

        function t(y) {
          return {
            type: "concat",
            parts: y
          };
        }

        function s(y) {
          return {
            type: "indent",
            contents: y
          };
        }

        function i(y, o) {
          return {
            type: "align",
            contents: o,
            n: y
          };
        }

        function r(y) {
          var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          return {
            type: "group",
            id: o.id,
            contents: y,
            break: Boolean(o.shouldBreak),
            expandedStates: o.expandedStates
          };
        }

        function u(y) {
          return i(Number.NEGATIVE_INFINITY, y);
        }

        function a(y) {
          return i({
            type: "root"
          }, y);
        }

        function c(y) {
          return i(-1, y);
        }

        function l(y, o) {
          return r(y[0], Object.assign(Object.assign({}, o), {}, {
            expandedStates: y
          }));
        }

        function C(y) {
          return {
            type: "fill",
            parts: y
          };
        }

        function m(y, o) {
          var x = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          return {
            type: "if-break",
            breakContents: y,
            flatContents: o,
            groupId: x.groupId
          };
        }

        function g(y, o) {
          return {
            type: "indent-if-break",
            contents: y,
            groupId: o.groupId,
            negate: o.negate
          };
        }

        function p(y) {
          return {
            type: "line-suffix",
            contents: y
          };
        }

        var f = {
          type: "line-suffix-boundary"
        },
            h = {
          type: "break-parent"
        },
            N = {
          type: "trim"
        },
            T = {
          type: "line",
          hard: !0
        },
            A = {
          type: "line",
          hard: !0,
          literal: !0
        },
            b = {
          type: "line"
        },
            v = {
          type: "line",
          soft: !0
        },
            B = t([T, h]),
            w = t([A, h]),
            I = {
          type: "cursor",
          placeholder: Symbol("cursor")
        };

        function E(y, o) {
          var x = [];

          for (var F = 0; F < o.length; F++) {
            F !== 0 && x.push(y), x.push(o[F]);
          }

          return t(x);
        }

        function D(y, o, x) {
          var F = y;

          if (o > 0) {
            for (var S = 0; S < Math.floor(o / x); ++S) {
              F = s(F);
            }

            F = i(o % x, F), F = i(Number.NEGATIVE_INFINITY, F);
          }

          return F;
        }

        function d(y, o) {
          return {
            type: "label",
            label: y,
            contents: o
          };
        }

        n.exports = {
          concat: t,
          join: E,
          line: b,
          softline: v,
          hardline: B,
          literalline: w,
          group: r,
          conditionalGroup: l,
          fill: C,
          lineSuffix: p,
          lineSuffixBoundary: f,
          cursor: I,
          breakParent: h,
          ifBreak: m,
          trim: N,
          indent: s,
          indentIfBreak: g,
          align: i,
          addAlignmentToDoc: D,
          markAsRoot: a,
          dedentToRoot: u,
          dedent: c,
          hardlineWithoutBreakParent: T,
          literallineWithoutBreakParent: A,
          label: d
        };
      }
    }),
        On = Z({
      "src/common/end-of-line.js": function srcCommonEndOfLineJs(e, n) {
        "use strict";

        ae();

        function t(u) {
          var a = u.indexOf("\r");
          return a >= 0 ? u.charAt(a + 1) === "\n" ? "crlf" : "cr" : "lf";
        }

        function s(u) {
          switch (u) {
            case "cr":
              return "\r";

            case "crlf":
              return "\r\n";

            default:
              return "\n";
          }
        }

        function i(u, a) {
          var c;

          switch (a) {
            case "\n":
              c = /\n/g;
              break;

            case "\r":
              c = /\r/g;
              break;

            case "\r\n":
              c = /\r\n/g;
              break;

            default:
              throw new Error('Unexpected "eol" '.concat(JSON.stringify(a), "."));
          }

          var l = u.match(c);
          return l ? l.length : 0;
        }

        function r(u) {
          return u.replace(/\r\n?/g, "\n");
        }

        n.exports = {
          guessEndOfLine: t,
          convertEndOfLineToChars: s,
          countEndOfLineChars: i,
          normalizeEndOfLine: r
        };
      }
    }),
        st = Z({
      "src/utils/get-last.js": function srcUtilsGetLastJs(e, n) {
        "use strict";

        ae();

        var t = function t(s) {
          return s[s.length - 1];
        };

        n.exports = t;
      }
    }),
        nD = Z({
      "vendors/string-width.js": function vendorsStringWidthJs(e, n) {
        ae();

        var t = Object.create,
            s = Object.defineProperty,
            i = Object.getOwnPropertyDescriptor,
            r = Object.getOwnPropertyNames,
            u = Object.getPrototypeOf,
            a = Object.prototype.hasOwnProperty,
            c = function c(v, B) {
          return function () {
            return B || (0, v[r(v)[0]])((B = {
              exports: {}
            }).exports, B), B.exports;
          };
        },
            l = function l(v, B) {
          for (var w in B) {
            s(v, w, {
              get: B[w],
              enumerable: !0
            });
          }
        },
            C = function C(v, B, w, I) {
          if (B && _typeof(B) == "object" || typeof B == "function") {
            var _iterator2 = _createForOfIteratorHelper(r(B)),
                _step2;

            try {
              var _loop2 = function _loop2() {
                var E = _step2.value;
                !a.call(v, E) && E !== w && s(v, E, {
                  get: function get() {
                    return B[E];
                  },
                  enumerable: !(I = i(B, E)) || I.enumerable
                });
              };

              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                _loop2();
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }

          return v;
        },
            m = function m(v, B, w) {
          return w = v != null ? t(u(v)) : {}, C(B || !v || !v.__esModule ? s(w, "default", {
            value: v,
            enumerable: !0
          }) : w, v);
        },
            g = function g(v) {
          return C(s({}, "__esModule", {
            value: !0
          }), v);
        },
            p = c({
          "node_modules/emoji-regex/index.js": function node_modulesEmojiRegexIndexJs(v, B) {
            "use strict";

            B.exports = function () {
              return /\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|(?:\uD83E\uDDD1\uD83C\uDFFF\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFE])|(?:\uD83E\uDDD1\uD83C\uDFFE\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFD\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFC\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFB\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFC-\uDFFF])|\uD83D\uDC68(?:\uD83C\uDFFB(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF]))|\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFC-\uDFFF])|[\u2695\u2696\u2708]\uFE0F|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))?|(?:\uD83C[\uDFFC-\uDFFF])\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF]))|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFE])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])\uFE0F|\u200D(?:(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D[\uDC66\uDC67])|\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC)?|(?:\uD83D\uDC69(?:\uD83C\uDFFB\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|(?:\uD83C[\uDFFC-\uDFFF])\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1)(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC69(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83E\uDDD1(?:\u200D(?:\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83E\uDDD1(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDE36\u200D\uD83C\uDF2B|\uD83C\uDFF3\uFE0F\u200D\u26A7|\uD83D\uDC3B\u200D\u2744|(?:(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\uD83C\uDFF4\u200D\u2620|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])\u200D[\u2640\u2642]|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u2600-\u2604\u260E\u2611\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26B0\u26B1\u26C8\u26CF\u26D1\u26D3\u26E9\u26F0\u26F1\u26F4\u26F7\u26F8\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u3030\u303D\u3297\u3299]|\uD83C[\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]|\uD83D[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3])\uFE0F|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDE35\u200D\uD83D\uDCAB|\uD83D\uDE2E\u200D\uD83D\uDCA8|\uD83D\uDC15\u200D\uD83E\uDDBA|\uD83E\uDDD1(?:\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC|\uD83C\uDFFB)?|\uD83D\uDC69(?:\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC|\uD83C\uDFFB)?|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83D\uDC08\u200D\u2B1B|\u2764\uFE0F\u200D(?:\uD83D\uDD25|\uD83E\uDE79)|\uD83D\uDC41\uFE0F|\uD83C\uDFF3\uFE0F|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|[#\*0-9]\uFE0F\u20E3|\u2764\uFE0F|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])|\uD83C\uDFF4|(?:[\u270A\u270B]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270C\u270D]|\uD83D[\uDD74\uDD90])(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])|[\u270A\u270B]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC08\uDC15\uDC3B\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE2E\uDE35\uDE36\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5]|\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD]|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF]|[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0D\uDD0E\uDD10-\uDD17\uDD1D\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78\uDD7A-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCB\uDDD0\uDDE0-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6]|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDED5-\uDED7\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26A7\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5-\uDED7\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])\uFE0F|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDC8F\uDC91\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1F\uDD26\uDD30-\uDD39\uDD3C-\uDD3E\uDD77\uDDB5\uDDB6\uDDB8\uDDB9\uDDBB\uDDCD-\uDDCF\uDDD1-\uDDDD])/g;
            };
          }
        }),
            f = {};

        l(f, {
          default: function _default() {
            return b;
          }
        }), n.exports = g(f);

        function h() {
          var _ref = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
              _ref$onlyFirst = _ref.onlyFirst,
              v = _ref$onlyFirst === void 0 ? !1 : _ref$onlyFirst,
              B = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"].join("|");

          return new RegExp(B, v ? void 0 : "g");
        }

        function N(v) {
          if (typeof v != "string") throw new TypeError("Expected a `string`, got `".concat(_typeof(v), "`"));
          return v.replace(h(), "");
        }

        function T(v) {
          return Number.isInteger(v) ? v >= 4352 && (v <= 4447 || v === 9001 || v === 9002 || 11904 <= v && v <= 12871 && v !== 12351 || 12880 <= v && v <= 19903 || 19968 <= v && v <= 42182 || 43360 <= v && v <= 43388 || 44032 <= v && v <= 55203 || 63744 <= v && v <= 64255 || 65040 <= v && v <= 65049 || 65072 <= v && v <= 65131 || 65281 <= v && v <= 65376 || 65504 <= v && v <= 65510 || 110592 <= v && v <= 110593 || 127488 <= v && v <= 127569 || 131072 <= v && v <= 262141) : !1;
        }

        var A = m(p(), 1);

        function b(v) {
          if (typeof v != "string" || v.length === 0 || (v = N(v), v.length === 0)) return 0;
          v = v.replace((0, A.default)(), "  ");
          var B = 0;

          for (var w = 0; w < v.length; w++) {
            var I = v.codePointAt(w);
            I <= 31 || I >= 127 && I <= 159 || I >= 768 && I <= 879 || (I > 65535 && w++, B += T(I) ? 2 : 1);
          }

          return B;
        }
      }
    }),
        yi = Z({
      "src/utils/get-string-width.js": function srcUtilsGetStringWidthJs(e, n) {
        "use strict";

        ae();
        var t = nD().default,
            s = /[^\x20-\x7F]/;

        function i(r) {
          return r ? s.test(r) ? t(r) : r.length : 0;
        }

        n.exports = i;
      }
    }),
        jn = Z({
      "src/document/doc-utils.js": function srcDocumentDocUtilsJs(e, n) {
        "use strict";

        ae();

        var t = st(),
            _Ln = Ln(),
            s = _Ln.literalline,
            i = _Ln.join,
            r = function r(o) {
          return Array.isArray(o) || o && o.type === "concat";
        },
            u = function u(o) {
          if (Array.isArray(o)) return o;
          if (o.type !== "concat" && o.type !== "fill") throw new Error("Expect doc type to be `concat` or `fill`.");
          return o.parts;
        },
            a = {};

        function c(o, x, F, S) {
          var k = [o];

          for (; k.length > 0;) {
            var _ = k.pop();

            if (_ === a) {
              F(k.pop());
              continue;
            }

            if (F && k.push(_, a), !x || x(_) !== !1) if (r(_) || _.type === "fill") {
              var O = u(_);

              for (var R = O.length, M = R - 1; M >= 0; --M) {
                k.push(O[M]);
              }
            } else if (_.type === "if-break") _.flatContents && k.push(_.flatContents), _.breakContents && k.push(_.breakContents);else if (_.type === "group" && _.expandedStates) {
              if (S) for (var _O = _.expandedStates.length, _R = _O - 1; _R >= 0; --_R) {
                k.push(_.expandedStates[_R]);
              } else k.push(_.contents);
            } else _.contents && k.push(_.contents);
          }
        }

        function l(o, x) {
          var F = new Map();
          return S(o);

          function S(_) {
            if (F.has(_)) return F.get(_);
            var O = k(_);
            return F.set(_, O), O;
          }

          function k(_) {
            if (Array.isArray(_)) return x(_.map(S));

            if (_.type === "concat" || _.type === "fill") {
              var O = _.parts.map(S);

              return x(Object.assign(Object.assign({}, _), {}, {
                parts: O
              }));
            }

            if (_.type === "if-break") {
              var _O2 = _.breakContents && S(_.breakContents),
                  R = _.flatContents && S(_.flatContents);

              return x(Object.assign(Object.assign({}, _), {}, {
                breakContents: _O2,
                flatContents: R
              }));
            }

            if (_.type === "group" && _.expandedStates) {
              var _O3 = _.expandedStates.map(S),
                  _R2 = _O3[0];

              return x(Object.assign(Object.assign({}, _), {}, {
                contents: _R2,
                expandedStates: _O3
              }));
            }

            if (_.contents) {
              var _O4 = S(_.contents);

              return x(Object.assign(Object.assign({}, _), {}, {
                contents: _O4
              }));
            }

            return x(_);
          }
        }

        function C(o, x, F) {
          var S = F,
              k = !1;

          function _(O) {
            var R = x(O);
            if (R !== void 0 && (k = !0, S = R), k) return !1;
          }

          return c(o, _), S;
        }

        function m(o) {
          if (o.type === "group" && o.break || o.type === "line" && o.hard || o.type === "break-parent") return !0;
        }

        function g(o) {
          return C(o, m, !1);
        }

        function p(o) {
          if (o.length > 0) {
            var x = t(o);
            !x.expandedStates && !x.break && (x.break = "propagated");
          }

          return null;
        }

        function f(o) {
          var x = new Set(),
              F = [];

          function S(_) {
            if (_.type === "break-parent" && p(F), _.type === "group") {
              if (F.push(_), x.has(_)) return !1;
              x.add(_);
            }
          }

          function k(_) {
            _.type === "group" && F.pop().break && p(F);
          }

          c(o, S, k, !0);
        }

        function h(o) {
          return o.type === "line" && !o.hard ? o.soft ? "" : " " : o.type === "if-break" ? o.flatContents || "" : o;
        }

        function N(o) {
          return l(o, h);
        }

        var T = function T(o, x) {
          return o && o.type === "line" && o.hard && x && x.type === "break-parent";
        };

        function A(o) {
          if (!o) return o;

          if (r(o) || o.type === "fill") {
            var x = u(o);

            for (; x.length > 1 && T.apply(void 0, _toConsumableArray(x.slice(-2)));) {
              x.length -= 2;
            }

            if (x.length > 0) {
              var F = A(t(x));
              x[x.length - 1] = F;
            }

            return Array.isArray(o) ? x : Object.assign(Object.assign({}, o), {}, {
              parts: x
            });
          }

          switch (o.type) {
            case "align":
            case "indent":
            case "indent-if-break":
            case "group":
            case "line-suffix":
            case "label":
              {
                var _x = A(o.contents);

                return Object.assign(Object.assign({}, o), {}, {
                  contents: _x
                });
              }

            case "if-break":
              {
                var _x2 = A(o.breakContents),
                    _F = A(o.flatContents);

                return Object.assign(Object.assign({}, o), {}, {
                  breakContents: _x2,
                  flatContents: _F
                });
              }
          }

          return o;
        }

        function b(o) {
          return A(B(o));
        }

        function v(o) {
          switch (o.type) {
            case "fill":
              if (o.parts.every(function (F) {
                return F === "";
              })) return "";
              break;

            case "group":
              if (!o.contents && !o.id && !o.break && !o.expandedStates) return "";
              if (o.contents.type === "group" && o.contents.id === o.id && o.contents.break === o.break && o.contents.expandedStates === o.expandedStates) return o.contents;
              break;

            case "align":
            case "indent":
            case "indent-if-break":
            case "line-suffix":
              if (!o.contents) return "";
              break;

            case "if-break":
              if (!o.flatContents && !o.breakContents) return "";
              break;
          }

          if (!r(o)) return o;
          var x = [];

          var _iterator3 = _createForOfIteratorHelper(u(o)),
              _step3;

          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var F = _step3.value;
              if (!F) continue;

              var _ref2 = r(F) ? u(F) : [F],
                  _ref3 = _toArray(_ref2),
                  S = _ref3[0],
                  k = _ref3.slice(1);

              typeof S == "string" && typeof t(x) == "string" ? x[x.length - 1] += S : x.push(S), x.push.apply(x, _toConsumableArray(k));
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }

          return x.length === 0 ? "" : x.length === 1 ? x[0] : Array.isArray(o) ? x : Object.assign(Object.assign({}, o), {}, {
            parts: x
          });
        }

        function B(o) {
          return l(o, function (x) {
            return v(x);
          });
        }

        function w(o) {
          var x = [],
              F = o.filter(Boolean);

          for (; F.length > 0;) {
            var S = F.shift();

            if (!!S) {
              if (r(S)) {
                F.unshift.apply(F, _toConsumableArray(u(S)));
                continue;
              }

              if (x.length > 0 && typeof t(x) == "string" && typeof S == "string") {
                x[x.length - 1] += S;
                continue;
              }

              x.push(S);
            }
          }

          return x;
        }

        function I(o) {
          return l(o, function (x) {
            return Array.isArray(x) ? w(x) : x.parts ? Object.assign(Object.assign({}, x), {}, {
              parts: w(x.parts)
            }) : x;
          });
        }

        function E(o) {
          return l(o, function (x) {
            return typeof x == "string" && x.includes("\n") ? D(x) : x;
          });
        }

        function D(o) {
          var x = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : s;
          return i(x, o.split("\n")).parts;
        }

        function d(o) {
          if (o.type === "line") return !0;
        }

        function y(o) {
          return C(o, d, !1);
        }

        n.exports = {
          isConcat: r,
          getDocParts: u,
          willBreak: g,
          traverseDoc: c,
          findInDoc: C,
          mapDoc: l,
          propagateBreaks: f,
          removeLines: N,
          stripTrailingHardline: b,
          normalizeParts: w,
          normalizeDoc: I,
          cleanDoc: B,
          replaceTextEndOfLine: D,
          replaceEndOfLine: E,
          canBreak: y
        };
      }
    }),
        uD = Z({
      "src/document/doc-printer.js": function srcDocumentDocPrinterJs(e, n) {
        "use strict";

        ae();

        var _On = On(),
            t = _On.convertEndOfLineToChars,
            s = st(),
            i = yi(),
            _Ln2 = Ln(),
            r = _Ln2.fill,
            u = _Ln2.cursor,
            a = _Ln2.indent,
            _jn = jn(),
            c = _jn.isConcat,
            l = _jn.getDocParts,
            C,
            m = 1,
            g = 2;

        function p() {
          return {
            value: "",
            length: 0,
            queue: []
          };
        }

        function f(v, B) {
          return N(v, {
            type: "indent"
          }, B);
        }

        function h(v, B, w) {
          return B === Number.NEGATIVE_INFINITY ? v.root || p() : B < 0 ? N(v, {
            type: "dedent"
          }, w) : B ? B.type === "root" ? Object.assign(Object.assign({}, v), {}, {
            root: v
          }) : N(v, {
            type: typeof B == "string" ? "stringAlign" : "numberAlign",
            n: B
          }, w) : v;
        }

        function N(v, B, w) {
          var I = B.type === "dedent" ? v.queue.slice(0, -1) : [].concat(_toConsumableArray(v.queue), [B]),
              E = "",
              D = 0,
              d = 0,
              y = 0;

          var _iterator4 = _createForOfIteratorHelper(I),
              _step4;

          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var O = _step4.value;

              switch (O.type) {
                case "indent":
                  F(), w.useTabs ? o(1) : x(w.tabWidth);
                  break;

                case "stringAlign":
                  F(), E += O.n, D += O.n.length;
                  break;

                case "numberAlign":
                  d += 1, y += O.n;
                  break;

                default:
                  throw new Error("Unexpected type '".concat(O.type, "'"));
              }
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }

          return k(), Object.assign(Object.assign({}, v), {}, {
            value: E,
            length: D,
            queue: I
          });

          function o(O) {
            E += "	".repeat(O), D += w.tabWidth * O;
          }

          function x(O) {
            E += " ".repeat(O), D += O;
          }

          function F() {
            w.useTabs ? S() : k();
          }

          function S() {
            d > 0 && o(d), _();
          }

          function k() {
            y > 0 && x(y), _();
          }

          function _() {
            d = 0, y = 0;
          }
        }

        function T(v) {
          if (v.length === 0) return 0;
          var B = 0;

          for (; v.length > 0 && typeof s(v) == "string" && /^[\t ]*$/.test(s(v));) {
            B += v.pop().length;
          }

          if (v.length > 0 && typeof s(v) == "string") {
            var w = s(v).replace(/[\t ]*$/, "");
            B += s(v).length - w.length, v[v.length - 1] = w;
          }

          return B;
        }

        function A(v, B, w, I, E, D) {
          var d = B.length,
              y = [v],
              o = [];

          for (; w >= 0;) {
            if (y.length === 0) {
              if (d === 0) return !0;
              y.push(B[d - 1]), d--;
              continue;
            }

            var _y$pop = y.pop(),
                _y$pop2 = _slicedToArray(_y$pop, 3),
                x = _y$pop2[0],
                F = _y$pop2[1],
                S = _y$pop2[2];

            if (typeof S == "string") o.push(S), w -= i(S);else if (c(S)) {
              var k = l(S);

              for (var _ = k.length - 1; _ >= 0; _--) {
                y.push([x, F, k[_]]);
              }
            } else switch (S.type) {
              case "indent":
                y.push([f(x, I), F, S.contents]);
                break;

              case "align":
                y.push([h(x, S.n, I), F, S.contents]);
                break;

              case "trim":
                w += T(o);
                break;

              case "group":
                {
                  if (D && S.break) return !1;

                  var _k = S.break ? m : F;

                  y.push([x, _k, S.expandedStates && _k === m ? s(S.expandedStates) : S.contents]), S.id && (C[S.id] = _k);
                  break;
                }

              case "fill":
                for (var _k2 = S.parts.length - 1; _k2 >= 0; _k2--) {
                  y.push([x, F, S.parts[_k2]]);
                }

                break;

              case "if-break":
              case "indent-if-break":
                {
                  var _k3 = S.groupId ? C[S.groupId] : F;

                  if (_k3 === m) {
                    var _2 = S.type === "if-break" ? S.breakContents : S.negate ? S.contents : a(S.contents);

                    _2 && y.push([x, F, _2]);
                  }

                  if (_k3 === g) {
                    var _3 = S.type === "if-break" ? S.flatContents : S.negate ? a(S.contents) : S.contents;

                    _3 && y.push([x, F, _3]);
                  }

                  break;
                }

              case "line":
                switch (F) {
                  case g:
                    if (!S.hard) {
                      S.soft || (o.push(" "), w -= 1);
                      break;
                    }

                    return !0;

                  case m:
                    return !0;
                }

                break;

              case "line-suffix":
                E = !0;
                break;

              case "line-suffix-boundary":
                if (E) return !1;
                break;

              case "label":
                y.push([x, F, S.contents]);
                break;
            }
          }

          return !1;
        }

        function b(v, B) {
          C = {};
          var w = B.printWidth,
              I = t(B.endOfLine),
              E = 0,
              D = [[p(), m, v]],
              d = [],
              y = !1,
              o = [];

          for (; D.length > 0;) {
            var _D$pop = D.pop(),
                _D$pop2 = _slicedToArray(_D$pop, 3),
                F = _D$pop2[0],
                S = _D$pop2[1],
                k = _D$pop2[2];

            if (typeof k == "string") {
              var _ = I !== "\n" ? k.replace(/\n/g, I) : k;

              d.push(_), E += i(_);
            } else if (c(k)) {
              var _4 = l(k);

              for (var O = _4.length - 1; O >= 0; O--) {
                D.push([F, S, _4[O]]);
              }
            } else switch (k.type) {
              case "cursor":
                d.push(u.placeholder);
                break;

              case "indent":
                D.push([f(F, B), S, k.contents]);
                break;

              case "align":
                D.push([h(F, k.n, B), S, k.contents]);
                break;

              case "trim":
                E -= T(d);
                break;

              case "group":
                switch (S) {
                  case g:
                    if (!y) {
                      D.push([F, k.break ? m : g, k.contents]);
                      break;
                    }

                  case m:
                    {
                      y = !1;

                      var _5 = [F, g, k.contents],
                          _O5 = w - E,
                          R = o.length > 0;

                      if (!k.break && A(_5, D, _O5, B, R)) D.push(_5);else if (k.expandedStates) {
                        var M = s(k.expandedStates);

                        if (k.break) {
                          D.push([F, m, M]);
                          break;
                        } else for (var H = 1; H < k.expandedStates.length + 1; H++) {
                          if (H >= k.expandedStates.length) {
                            D.push([F, m, M]);
                            break;
                          } else {
                            var P = k.expandedStates[H],
                                G = [F, g, P];

                            if (A(G, D, _O5, B, R)) {
                              D.push(G);
                              break;
                            }
                          }
                        }
                      } else D.push([F, m, k.contents]);
                      break;
                    }
                }

                k.id && (C[k.id] = s(D)[1]);
                break;

              case "fill":
                {
                  var _6 = w - E,
                      _O6 = k.parts;

                  if (_O6.length === 0) break;

                  var _O7 = _slicedToArray(_O6, 2),
                      _R3 = _O7[0],
                      _M = _O7[1],
                      _H = [F, g, _R3],
                      _P = [F, m, _R3],
                      _G = A(_H, [], _6, B, o.length > 0, !0);

                  if (_O6.length === 1) {
                    _G ? D.push(_H) : D.push(_P);
                    break;
                  }

                  var re = [F, g, _M],
                      $ = [F, m, _M];

                  if (_O6.length === 2) {
                    _G ? D.push(re, _H) : D.push($, _P);
                    break;
                  }

                  _O6.splice(0, 2);

                  var W = [F, S, r(_O6)],
                      ee = _O6[0];
                  A([F, g, [_R3, _M, ee]], [], _6, B, o.length > 0, !0) ? D.push(W, re, _H) : _G ? D.push(W, $, _H) : D.push(W, $, _P);
                  break;
                }

              case "if-break":
              case "indent-if-break":
                {
                  var _7 = k.groupId ? C[k.groupId] : S;

                  if (_7 === m) {
                    var _O8 = k.type === "if-break" ? k.breakContents : k.negate ? k.contents : a(k.contents);

                    _O8 && D.push([F, S, _O8]);
                  }

                  if (_7 === g) {
                    var _O9 = k.type === "if-break" ? k.flatContents : k.negate ? a(k.contents) : k.contents;

                    _O9 && D.push([F, S, _O9]);
                  }

                  break;
                }

              case "line-suffix":
                o.push([F, S, k.contents]);
                break;

              case "line-suffix-boundary":
                o.length > 0 && D.push([F, S, {
                  type: "line",
                  hard: !0
                }]);
                break;

              case "line":
                switch (S) {
                  case g:
                    if (k.hard) y = !0;else {
                      k.soft || (d.push(" "), E += 1);
                      break;
                    }

                  case m:
                    if (o.length > 0) {
                      D.push.apply(D, [[F, S, k]].concat(_toConsumableArray(o.reverse()))), o = [];
                      break;
                    }

                    k.literal ? F.root ? (d.push(I, F.root.value), E = F.root.length) : (d.push(I), E = 0) : (E -= T(d), d.push(I + F.value), E = F.length);
                    break;
                }

                break;

              case "label":
                D.push([F, S, k.contents]);
                break;

              default:
            }

            D.length === 0 && o.length > 0 && (D.push.apply(D, _toConsumableArray(o.reverse())), o = []);
          }

          var x = d.indexOf(u.placeholder);

          if (x !== -1) {
            var _F2 = d.indexOf(u.placeholder, x + 1),
                _S = d.slice(0, x).join(""),
                _k4 = d.slice(x + 1, _F2).join(""),
                _8 = d.slice(_F2 + 1).join("");

            return {
              formatted: _S + _k4 + _8,
              cursorNodeStart: _S.length,
              cursorNodeText: _k4
            };
          }

          return {
            formatted: d.join("")
          };
        }

        n.exports = {
          printDocToString: b
        };
      }
    }),
        sD = Z({
      "src/document/doc-debug.js": function srcDocumentDocDebugJs(e, n) {
        "use strict";

        ae();

        var _jn2 = jn(),
            t = _jn2.isConcat,
            s = _jn2.getDocParts;

        function i(u) {
          if (!u) return "";

          if (t(u)) {
            var a = [];

            var _iterator5 = _createForOfIteratorHelper(s(u)),
                _step5;

            try {
              for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                var c = _step5.value;
                if (t(c)) a.push.apply(a, _toConsumableArray(i(c).parts));else {
                  var l = i(c);
                  l !== "" && a.push(l);
                }
              }
            } catch (err) {
              _iterator5.e(err);
            } finally {
              _iterator5.f();
            }

            return {
              type: "concat",
              parts: a
            };
          }

          return u.type === "if-break" ? Object.assign(Object.assign({}, u), {}, {
            breakContents: i(u.breakContents),
            flatContents: i(u.flatContents)
          }) : u.type === "group" ? Object.assign(Object.assign({}, u), {}, {
            contents: i(u.contents),
            expandedStates: u.expandedStates && u.expandedStates.map(i)
          }) : u.type === "fill" ? {
            type: "fill",
            parts: u.parts.map(i)
          } : u.contents ? Object.assign(Object.assign({}, u), {}, {
            contents: i(u.contents)
          }) : u;
        }

        function r(u) {
          var a = Object.create(null),
              c = new Set();
          return l(i(u));

          function l(m, g, p) {
            if (typeof m == "string") return JSON.stringify(m);

            if (t(m)) {
              var f = s(m).map(l).filter(Boolean);
              return f.length === 1 ? f[0] : "[".concat(f.join(", "), "]");
            }

            if (m.type === "line") {
              var _f2 = Array.isArray(p) && p[g + 1] && p[g + 1].type === "break-parent";

              return m.literal ? _f2 ? "literalline" : "literallineWithoutBreakParent" : m.hard ? _f2 ? "hardline" : "hardlineWithoutBreakParent" : m.soft ? "softline" : "line";
            }

            if (m.type === "break-parent") return Array.isArray(p) && p[g - 1] && p[g - 1].type === "line" && p[g - 1].hard ? void 0 : "breakParent";
            if (m.type === "trim") return "trim";
            if (m.type === "indent") return "indent(" + l(m.contents) + ")";
            if (m.type === "align") return m.n === Number.NEGATIVE_INFINITY ? "dedentToRoot(" + l(m.contents) + ")" : m.n < 0 ? "dedent(" + l(m.contents) + ")" : m.n.type === "root" ? "markAsRoot(" + l(m.contents) + ")" : "align(" + JSON.stringify(m.n) + ", " + l(m.contents) + ")";
            if (m.type === "if-break") return "ifBreak(" + l(m.breakContents) + (m.flatContents ? ", " + l(m.flatContents) : "") + (m.groupId ? (m.flatContents ? "" : ', ""') + ", { groupId: ".concat(C(m.groupId), " }") : "") + ")";

            if (m.type === "indent-if-break") {
              var _f3 = [];
              m.negate && _f3.push("negate: true"), m.groupId && _f3.push("groupId: ".concat(C(m.groupId)));
              var h = _f3.length > 0 ? ", { ".concat(_f3.join(", "), " }") : "";
              return "indentIfBreak(".concat(l(m.contents)).concat(h, ")");
            }

            if (m.type === "group") {
              var _f4 = [];
              m.break && m.break !== "propagated" && _f4.push("shouldBreak: true"), m.id && _f4.push("id: ".concat(C(m.id)));

              var _h = _f4.length > 0 ? ", { ".concat(_f4.join(", "), " }") : "";

              return m.expandedStates ? "conditionalGroup([".concat(m.expandedStates.map(function (N) {
                return l(N);
              }).join(","), "]").concat(_h, ")") : "group(".concat(l(m.contents)).concat(_h, ")");
            }

            if (m.type === "fill") return "fill([".concat(m.parts.map(function (f) {
              return l(f);
            }).join(", "), "])");
            if (m.type === "line-suffix") return "lineSuffix(" + l(m.contents) + ")";
            if (m.type === "line-suffix-boundary") return "lineSuffixBoundary";
            if (m.type === "label") return "label(".concat(JSON.stringify(m.label), ", ").concat(l(m.contents), ")");
            throw new Error("Unknown doc type " + m.type);
          }

          function C(m) {
            if (_typeof(m) != "symbol") return JSON.stringify(String(m));
            if (m in a) return a[m];
            var g = String(m).slice(7, -1) || "symbol";

            for (var p = 0;; p++) {
              var f = g + (p > 0 ? " #".concat(p) : "");
              if (!c.has(f)) return c.add(f), a[m] = "Symbol.for(".concat(JSON.stringify(f), ")");
            }
          }
        }

        n.exports = {
          printDocToDebug: r
        };
      }
    }),
        Le = Z({
      "src/document/index.js": function srcDocumentIndexJs(e, n) {
        "use strict";

        ae(), n.exports = {
          builders: Ln(),
          printer: uD(),
          utils: jn(),
          debug: sD()
        };
      }
    }),
        aD = Z({
      "vendors/escape-string-regexp.js": function vendorsEscapeStringRegexpJs(e, n) {
        ae();

        var t = Object.defineProperty,
            s = Object.getOwnPropertyDescriptor,
            i = Object.getOwnPropertyNames,
            r = Object.prototype.hasOwnProperty,
            u = function u(m, g) {
          for (var p in g) {
            t(m, p, {
              get: g[p],
              enumerable: !0
            });
          }
        },
            a = function a(m, g, p, f) {
          if (g && _typeof(g) == "object" || typeof g == "function") {
            var _iterator6 = _createForOfIteratorHelper(i(g)),
                _step6;

            try {
              var _loop3 = function _loop3() {
                var h = _step6.value;
                !r.call(m, h) && h !== p && t(m, h, {
                  get: function get() {
                    return g[h];
                  },
                  enumerable: !(f = s(g, h)) || f.enumerable
                });
              };

              for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                _loop3();
              }
            } catch (err) {
              _iterator6.e(err);
            } finally {
              _iterator6.f();
            }
          }

          return m;
        },
            c = function c(m) {
          return a(t({}, "__esModule", {
            value: !0
          }), m);
        },
            l = {};

        u(l, {
          default: function _default() {
            return C;
          }
        }), n.exports = c(l);

        function C(m) {
          if (typeof m != "string") throw new TypeError("Expected a string");
          return m.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
        }
      }
    }),
        hi = Z({
      "node_modules/semver/internal/debug.js": function node_modulesSemverInternalDebugJs(e, n) {
        ae();
        var t = _typeof(xt) == "object" && xt.env && xt.env.NODE_DEBUG && /\bsemver\b/i.test(xt.env.NODE_DEBUG) ? function () {
          var _console;

          for (var s = arguments.length, i = new Array(s), r = 0; r < s; r++) {
            i[r] = arguments[r];
          }

          return (_console = console).error.apply(_console, ["SEMVER"].concat(i));
        } : function () {};
        n.exports = t;
      }
    }),
        Ci = Z({
      "node_modules/semver/internal/constants.js": function node_modulesSemverInternalConstantsJs(e, n) {
        ae();
        var t = "2.0.0",
            s = 256,
            i = Number.MAX_SAFE_INTEGER || 9007199254740991,
            r = 16;
        n.exports = {
          SEMVER_SPEC_VERSION: t,
          MAX_LENGTH: s,
          MAX_SAFE_INTEGER: i,
          MAX_SAFE_COMPONENT_LENGTH: r
        };
      }
    }),
        iD = Z({
      "node_modules/semver/internal/re.js": function node_modulesSemverInternalReJs(e, n) {
        ae();

        var _Ci = Ci(),
            t = _Ci.MAX_SAFE_COMPONENT_LENGTH,
            s = hi();

        e = n.exports = {};

        var i = e.re = [],
            r = e.src = [],
            u = e.t = {},
            a = 0,
            c = function c(l, C, m) {
          var g = a++;
          s(g, C), u[l] = g, r[g] = C, i[g] = new RegExp(C, m ? "g" : void 0);
        };

        c("NUMERICIDENTIFIER", "0|[1-9]\\d*"), c("NUMERICIDENTIFIERLOOSE", "[0-9]+"), c("NONNUMERICIDENTIFIER", "\\d*[a-zA-Z-][a-zA-Z0-9-]*"), c("MAINVERSION", "(".concat(r[u.NUMERICIDENTIFIER], ")\\.(").concat(r[u.NUMERICIDENTIFIER], ")\\.(").concat(r[u.NUMERICIDENTIFIER], ")")), c("MAINVERSIONLOOSE", "(".concat(r[u.NUMERICIDENTIFIERLOOSE], ")\\.(").concat(r[u.NUMERICIDENTIFIERLOOSE], ")\\.(").concat(r[u.NUMERICIDENTIFIERLOOSE], ")")), c("PRERELEASEIDENTIFIER", "(?:".concat(r[u.NUMERICIDENTIFIER], "|").concat(r[u.NONNUMERICIDENTIFIER], ")")), c("PRERELEASEIDENTIFIERLOOSE", "(?:".concat(r[u.NUMERICIDENTIFIERLOOSE], "|").concat(r[u.NONNUMERICIDENTIFIER], ")")), c("PRERELEASE", "(?:-(".concat(r[u.PRERELEASEIDENTIFIER], "(?:\\.").concat(r[u.PRERELEASEIDENTIFIER], ")*))")), c("PRERELEASELOOSE", "(?:-?(".concat(r[u.PRERELEASEIDENTIFIERLOOSE], "(?:\\.").concat(r[u.PRERELEASEIDENTIFIERLOOSE], ")*))")), c("BUILDIDENTIFIER", "[0-9A-Za-z-]+"), c("BUILD", "(?:\\+(".concat(r[u.BUILDIDENTIFIER], "(?:\\.").concat(r[u.BUILDIDENTIFIER], ")*))")), c("FULLPLAIN", "v?".concat(r[u.MAINVERSION]).concat(r[u.PRERELEASE], "?").concat(r[u.BUILD], "?")), c("FULL", "^".concat(r[u.FULLPLAIN], "$")), c("LOOSEPLAIN", "[v=\\s]*".concat(r[u.MAINVERSIONLOOSE]).concat(r[u.PRERELEASELOOSE], "?").concat(r[u.BUILD], "?")), c("LOOSE", "^".concat(r[u.LOOSEPLAIN], "$")), c("GTLT", "((?:<|>)?=?)"), c("XRANGEIDENTIFIERLOOSE", "".concat(r[u.NUMERICIDENTIFIERLOOSE], "|x|X|\\*")), c("XRANGEIDENTIFIER", "".concat(r[u.NUMERICIDENTIFIER], "|x|X|\\*")), c("XRANGEPLAIN", "[v=\\s]*(".concat(r[u.XRANGEIDENTIFIER], ")(?:\\.(").concat(r[u.XRANGEIDENTIFIER], ")(?:\\.(").concat(r[u.XRANGEIDENTIFIER], ")(?:").concat(r[u.PRERELEASE], ")?").concat(r[u.BUILD], "?)?)?")), c("XRANGEPLAINLOOSE", "[v=\\s]*(".concat(r[u.XRANGEIDENTIFIERLOOSE], ")(?:\\.(").concat(r[u.XRANGEIDENTIFIERLOOSE], ")(?:\\.(").concat(r[u.XRANGEIDENTIFIERLOOSE], ")(?:").concat(r[u.PRERELEASELOOSE], ")?").concat(r[u.BUILD], "?)?)?")), c("XRANGE", "^".concat(r[u.GTLT], "\\s*").concat(r[u.XRANGEPLAIN], "$")), c("XRANGELOOSE", "^".concat(r[u.GTLT], "\\s*").concat(r[u.XRANGEPLAINLOOSE], "$")), c("COERCE", "(^|[^\\d])(\\d{1,".concat(t, "})(?:\\.(\\d{1,").concat(t, "}))?(?:\\.(\\d{1,").concat(t, "}))?(?:$|[^\\d])")), c("COERCERTL", r[u.COERCE], !0), c("LONETILDE", "(?:~>?)"), c("TILDETRIM", "(\\s*)".concat(r[u.LONETILDE], "\\s+"), !0), e.tildeTrimReplace = "$1~", c("TILDE", "^".concat(r[u.LONETILDE]).concat(r[u.XRANGEPLAIN], "$")), c("TILDELOOSE", "^".concat(r[u.LONETILDE]).concat(r[u.XRANGEPLAINLOOSE], "$")), c("LONECARET", "(?:\\^)"), c("CARETTRIM", "(\\s*)".concat(r[u.LONECARET], "\\s+"), !0), e.caretTrimReplace = "$1^", c("CARET", "^".concat(r[u.LONECARET]).concat(r[u.XRANGEPLAIN], "$")), c("CARETLOOSE", "^".concat(r[u.LONECARET]).concat(r[u.XRANGEPLAINLOOSE], "$")), c("COMPARATORLOOSE", "^".concat(r[u.GTLT], "\\s*(").concat(r[u.LOOSEPLAIN], ")$|^$")), c("COMPARATOR", "^".concat(r[u.GTLT], "\\s*(").concat(r[u.FULLPLAIN], ")$|^$")), c("COMPARATORTRIM", "(\\s*)".concat(r[u.GTLT], "\\s*(").concat(r[u.LOOSEPLAIN], "|").concat(r[u.XRANGEPLAIN], ")"), !0), e.comparatorTrimReplace = "$1$2$3", c("HYPHENRANGE", "^\\s*(".concat(r[u.XRANGEPLAIN], ")\\s+-\\s+(").concat(r[u.XRANGEPLAIN], ")\\s*$")), c("HYPHENRANGELOOSE", "^\\s*(".concat(r[u.XRANGEPLAINLOOSE], ")\\s+-\\s+(").concat(r[u.XRANGEPLAINLOOSE], ")\\s*$")), c("STAR", "(<|>)?=?\\s*\\*"), c("GTE0", "^\\s*>=\\s*0.0.0\\s*$"), c("GTE0PRE", "^\\s*>=\\s*0.0.0-0\\s*$");
      }
    }),
        oD = Z({
      "node_modules/semver/internal/parse-options.js": function node_modulesSemverInternalParseOptionsJs(e, n) {
        ae();

        var t = ["includePrerelease", "loose", "rtl"],
            s = function s(i) {
          return i ? _typeof(i) != "object" ? {
            loose: !0
          } : t.filter(function (r) {
            return i[r];
          }).reduce(function (r, u) {
            return r[u] = !0, r;
          }, {}) : {};
        };

        n.exports = s;
      }
    }),
        cD = Z({
      "node_modules/semver/internal/identifiers.js": function node_modulesSemverInternalIdentifiersJs(e, n) {
        ae();

        var t = /^[0-9]+$/,
            s = function s(r, u) {
          var a = t.test(r),
              c = t.test(u);
          return a && c && (r = +r, u = +u), r === u ? 0 : a && !c ? -1 : c && !a ? 1 : r < u ? -1 : 1;
        },
            i = function i(r, u) {
          return s(u, r);
        };

        n.exports = {
          compareIdentifiers: s,
          rcompareIdentifiers: i
        };
      }
    }),
        lD = Z({
      "node_modules/semver/classes/semver.js": function node_modulesSemverClassesSemverJs(e, n) {
        ae();

        var t = hi(),
            _Ci2 = Ci(),
            s = _Ci2.MAX_LENGTH,
            i = _Ci2.MAX_SAFE_INTEGER,
            _iD = iD(),
            r = _iD.re,
            u = _iD.t,
            a = oD(),
            _cD = cD(),
            c = _cD.compareIdentifiers,
            l = /*#__PURE__*/function () {
          function l(C, m) {
            _classCallCheck(this, l);

            if (m = a(m), C instanceof l) {
              if (C.loose === !!m.loose && C.includePrerelease === !!m.includePrerelease) return C;
              C = C.version;
            } else if (typeof C != "string") throw new TypeError("Invalid Version: ".concat(C));

            if (C.length > s) throw new TypeError("version is longer than ".concat(s, " characters"));
            t("SemVer", C, m), this.options = m, this.loose = !!m.loose, this.includePrerelease = !!m.includePrerelease;
            var g = C.trim().match(m.loose ? r[u.LOOSE] : r[u.FULL]);
            if (!g) throw new TypeError("Invalid Version: ".concat(C));
            if (this.raw = C, this.major = +g[1], this.minor = +g[2], this.patch = +g[3], this.major > i || this.major < 0) throw new TypeError("Invalid major version");
            if (this.minor > i || this.minor < 0) throw new TypeError("Invalid minor version");
            if (this.patch > i || this.patch < 0) throw new TypeError("Invalid patch version");
            g[4] ? this.prerelease = g[4].split(".").map(function (p) {
              if (/^[0-9]+$/.test(p)) {
                var f = +p;
                if (f >= 0 && f < i) return f;
              }

              return p;
            }) : this.prerelease = [], this.build = g[5] ? g[5].split(".") : [], this.format();
          }

          _createClass(l, [{
            key: "format",
            value: function format() {
              return this.version = "".concat(this.major, ".").concat(this.minor, ".").concat(this.patch), this.prerelease.length && (this.version += "-".concat(this.prerelease.join("."))), this.version;
            }
          }, {
            key: "toString",
            value: function toString() {
              return this.version;
            }
          }, {
            key: "compare",
            value: function compare(C) {
              if (t("SemVer.compare", this.version, this.options, C), !(C instanceof l)) {
                if (typeof C == "string" && C === this.version) return 0;
                C = new l(C, this.options);
              }

              return C.version === this.version ? 0 : this.compareMain(C) || this.comparePre(C);
            }
          }, {
            key: "compareMain",
            value: function compareMain(C) {
              return C instanceof l || (C = new l(C, this.options)), c(this.major, C.major) || c(this.minor, C.minor) || c(this.patch, C.patch);
            }
          }, {
            key: "comparePre",
            value: function comparePre(C) {
              if (C instanceof l || (C = new l(C, this.options)), this.prerelease.length && !C.prerelease.length) return -1;
              if (!this.prerelease.length && C.prerelease.length) return 1;
              if (!this.prerelease.length && !C.prerelease.length) return 0;
              var m = 0;

              do {
                var g = this.prerelease[m],
                    p = C.prerelease[m];
                if (t("prerelease compare", m, g, p), g === void 0 && p === void 0) return 0;
                if (p === void 0) return 1;
                if (g === void 0) return -1;
                if (g === p) continue;
                return c(g, p);
              } while (++m);
            }
          }, {
            key: "compareBuild",
            value: function compareBuild(C) {
              C instanceof l || (C = new l(C, this.options));
              var m = 0;

              do {
                var g = this.build[m],
                    p = C.build[m];
                if (t("prerelease compare", m, g, p), g === void 0 && p === void 0) return 0;
                if (p === void 0) return 1;
                if (g === void 0) return -1;
                if (g === p) continue;
                return c(g, p);
              } while (++m);
            }
          }, {
            key: "inc",
            value: function inc(C, m) {
              switch (C) {
                case "premajor":
                  this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", m);
                  break;

                case "preminor":
                  this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", m);
                  break;

                case "prepatch":
                  this.prerelease.length = 0, this.inc("patch", m), this.inc("pre", m);
                  break;

                case "prerelease":
                  this.prerelease.length === 0 && this.inc("patch", m), this.inc("pre", m);
                  break;

                case "major":
                  (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) && this.major++, this.minor = 0, this.patch = 0, this.prerelease = [];
                  break;

                case "minor":
                  (this.patch !== 0 || this.prerelease.length === 0) && this.minor++, this.patch = 0, this.prerelease = [];
                  break;

                case "patch":
                  this.prerelease.length === 0 && this.patch++, this.prerelease = [];
                  break;

                case "pre":
                  if (this.prerelease.length === 0) this.prerelease = [0];else {
                    var g = this.prerelease.length;

                    for (; --g >= 0;) {
                      typeof this.prerelease[g] == "number" && (this.prerelease[g]++, g = -2);
                    }

                    g === -1 && this.prerelease.push(0);
                  }
                  m && (this.prerelease[0] === m ? isNaN(this.prerelease[1]) && (this.prerelease = [m, 0]) : this.prerelease = [m, 0]);
                  break;

                default:
                  throw new Error("invalid increment argument: ".concat(C));
              }

              return this.format(), this.raw = this.version, this;
            }
          }]);

          return l;
        }();

        n.exports = l;
      }
    }),
        qn = Z({
      "node_modules/semver/functions/compare.js": function node_modulesSemverFunctionsCompareJs(e, n) {
        ae();

        var t = lD(),
            s = function s(i, r, u) {
          return new t(i, u).compare(new t(r, u));
        };

        n.exports = s;
      }
    }),
        pD = Z({
      "node_modules/semver/functions/lt.js": function node_modulesSemverFunctionsLtJs(e, n) {
        ae();

        var t = qn(),
            s = function s(i, r, u) {
          return t(i, r, u) < 0;
        };

        n.exports = s;
      }
    }),
        fD = Z({
      "node_modules/semver/functions/gte.js": function node_modulesSemverFunctionsGteJs(e, n) {
        ae();

        var t = qn(),
            s = function s(i, r, u) {
          return t(i, r, u) >= 0;
        };

        n.exports = s;
      }
    }),
        DD = Z({
      "src/utils/arrayify.js": function srcUtilsArrayifyJs(e, n) {
        "use strict";

        ae(), n.exports = function (t, s) {
          return Object.entries(t).map(function (i) {
            var _i2 = _slicedToArray(i, 2),
                r = _i2[0],
                u = _i2[1];

            return Object.assign(_defineProperty({}, s, r), u);
          });
        };
      }
    }),
        mD = Z({
      "node_modules/outdent/lib/index.js": function node_modulesOutdentLibIndexJs(e, n) {
        "use strict";

        ae(), Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.outdent = void 0;

        function t() {
          for (var A = [], b = 0; b < arguments.length; b++) {
            A[b] = arguments[b];
          }
        }

        function s() {
          return (typeof WeakMap === "undefined" ? "undefined" : _typeof(WeakMap)) < "u" ? new WeakMap() : i();
        }

        function i() {
          return {
            add: t,
            delete: t,
            get: t,
            set: t,
            has: function has(A) {
              return !1;
            }
          };
        }

        var r = Object.prototype.hasOwnProperty,
            u = function u(A, b) {
          return r.call(A, b);
        };

        function a(A, b) {
          for (var v in b) {
            u(b, v) && (A[v] = b[v]);
          }

          return A;
        }

        var c = /^[ \t]*(?:\r\n|\r|\n)/,
            l = /(?:\r\n|\r|\n)[ \t]*$/,
            C = /^(?:[\r\n]|$)/,
            m = /(?:\r\n|\r|\n)([ \t]*)(?:[^ \t\r\n]|$)/,
            g = /^[ \t]*[\r\n][ \t\r\n]*$/;

        function p(A, b, v) {
          var B = 0,
              w = A[0].match(m);
          w && (B = w[1].length);
          var I = "(\\r\\n|\\r|\\n).{0," + B + "}",
              E = new RegExp(I, "g");
          b && (A = A.slice(1));
          var D = v.newline,
              d = v.trimLeadingNewline,
              y = v.trimTrailingNewline,
              o = typeof D == "string",
              x = A.length,
              F = A.map(function (S, k) {
            return S = S.replace(E, "$1"), k === 0 && d && (S = S.replace(c, "")), k === x - 1 && y && (S = S.replace(l, "")), o && (S = S.replace(/\r\n|\n|\r/g, function (_) {
              return D;
            })), S;
          });
          return F;
        }

        function f(A, b) {
          for (var v = "", B = 0, w = A.length; B < w; B++) {
            v += A[B], B < w - 1 && (v += b[B]);
          }

          return v;
        }

        function h(A) {
          return u(A, "raw") && u(A, "length");
        }

        function N(A) {
          var b = s(),
              v = s();

          function B(I) {
            for (var E = [], D = 1; D < arguments.length; D++) {
              E[D - 1] = arguments[D];
            }

            if (h(I)) {
              var d = I,
                  y = (E[0] === B || E[0] === T) && g.test(d[0]) && C.test(d[1]),
                  o = y ? v : b,
                  x = o.get(d);
              if (x || (x = p(d, y, A), o.set(d, x)), E.length === 0) return x[0];
              var F = f(x, y ? E.slice(1) : E);
              return F;
            } else return N(a(a({}, A), I || {}));
          }

          var w = a(B, {
            string: function string(I) {
              return p([I], !1, A)[0];
            }
          });
          return w;
        }

        var T = N({
          trimLeadingNewline: !0,
          trimTrailingNewline: !0
        });
        if (e.outdent = T, e.default = T, _typeof(n) < "u") try {
          n.exports = T, Object.defineProperty(T, "__esModule", {
            value: !0
          }), T.default = T, T.outdent = T;
        } catch (_unused9) {}
      }
    }),
        dD = Z({
      "src/main/core-options.js": function srcMainCoreOptionsJs(e, n) {
        "use strict";

        ae();

        var _mD = mD(),
            t = _mD.outdent,
            s = "Config",
            i = "Editor",
            r = "Format",
            u = "Other",
            a = "Output",
            c = "Global",
            l = "Special",
            C = {
          cursorOffset: {
            since: "1.4.0",
            category: l,
            type: "int",
            default: -1,
            range: {
              start: -1,
              end: Number.POSITIVE_INFINITY,
              step: 1
            },
            description: t(si || (si = wt(["\n      Print (to stderr) where a cursor at the given position would move to after formatting.\n      This option cannot be used with --range-start and --range-end.\n    "]))),
            cliCategory: i
          },
          endOfLine: {
            since: "1.15.0",
            category: c,
            type: "choice",
            default: [{
              since: "1.15.0",
              value: "auto"
            }, {
              since: "2.0.0",
              value: "lf"
            }],
            description: "Which end of line characters to apply.",
            choices: [{
              value: "lf",
              description: "Line Feed only (\\n), common on Linux and macOS as well as inside git repos"
            }, {
              value: "crlf",
              description: "Carriage Return + Line Feed characters (\\r\\n), common on Windows"
            }, {
              value: "cr",
              description: "Carriage Return character only (\\r), used very rarely"
            }, {
              value: "auto",
              description: t(ai || (ai = wt(["\n          Maintain existing\n          (mixed values within one file are normalised by looking at what's used after the first line)\n        "])))
            }]
          },
          filepath: {
            since: "1.4.0",
            category: l,
            type: "path",
            description: "Specify the input filepath. This will be used to do parser inference.",
            cliName: "stdin-filepath",
            cliCategory: u,
            cliDescription: "Path to the file to pretend that stdin comes from."
          },
          insertPragma: {
            since: "1.8.0",
            category: l,
            type: "boolean",
            default: !1,
            description: "Insert @format pragma into file's first docblock comment.",
            cliCategory: u
          },
          parser: {
            since: "0.0.10",
            category: c,
            type: "choice",
            default: [{
              since: "0.0.10",
              value: "babylon"
            }, {
              since: "1.13.0",
              value: void 0
            }],
            description: "Which parser to use.",
            exception: function exception(m) {
              return typeof m == "string" || typeof m == "function";
            },
            choices: [{
              value: "flow",
              description: "Flow"
            }, {
              value: "babel",
              since: "1.16.0",
              description: "JavaScript"
            }, {
              value: "babel-flow",
              since: "1.16.0",
              description: "Flow"
            }, {
              value: "babel-ts",
              since: "2.0.0",
              description: "TypeScript"
            }, {
              value: "typescript",
              since: "1.4.0",
              description: "TypeScript"
            }, {
              value: "acorn",
              since: "2.6.0",
              description: "JavaScript"
            }, {
              value: "espree",
              since: "2.2.0",
              description: "JavaScript"
            }, {
              value: "meriyah",
              since: "2.2.0",
              description: "JavaScript"
            }, {
              value: "css",
              since: "1.7.1",
              description: "CSS"
            }, {
              value: "less",
              since: "1.7.1",
              description: "Less"
            }, {
              value: "scss",
              since: "1.7.1",
              description: "SCSS"
            }, {
              value: "json",
              since: "1.5.0",
              description: "JSON"
            }, {
              value: "json5",
              since: "1.13.0",
              description: "JSON5"
            }, {
              value: "json-stringify",
              since: "1.13.0",
              description: "JSON.stringify"
            }, {
              value: "graphql",
              since: "1.5.0",
              description: "GraphQL"
            }, {
              value: "markdown",
              since: "1.8.0",
              description: "Markdown"
            }, {
              value: "mdx",
              since: "1.15.0",
              description: "MDX"
            }, {
              value: "vue",
              since: "1.10.0",
              description: "Vue"
            }, {
              value: "yaml",
              since: "1.14.0",
              description: "YAML"
            }, {
              value: "glimmer",
              since: "2.3.0",
              description: "Ember / Handlebars"
            }, {
              value: "html",
              since: "1.15.0",
              description: "HTML"
            }, {
              value: "angular",
              since: "1.15.0",
              description: "Angular"
            }, {
              value: "lwc",
              since: "1.17.0",
              description: "Lightning Web Components"
            }]
          },
          plugins: {
            since: "1.10.0",
            type: "path",
            array: !0,
            default: [{
              value: []
            }],
            category: c,
            description: "Add a plugin. Multiple plugins can be passed as separate `--plugin`s.",
            exception: function exception(m) {
              return typeof m == "string" || _typeof(m) == "object";
            },
            cliName: "plugin",
            cliCategory: s
          },
          pluginSearchDirs: {
            since: "1.13.0",
            type: "path",
            array: !0,
            default: [{
              value: []
            }],
            category: c,
            description: t(ii || (ii = wt(["\n      Custom directory that contains prettier plugins in node_modules subdirectory.\n      Overrides default behavior when plugins are searched relatively to the location of Prettier.\n      Multiple values are accepted.\n    "]))),
            exception: function exception(m) {
              return typeof m == "string" || _typeof(m) == "object";
            },
            cliName: "plugin-search-dir",
            cliCategory: s
          },
          printWidth: {
            since: "0.0.0",
            category: c,
            type: "int",
            default: 80,
            description: "The line length where Prettier will try wrap.",
            range: {
              start: 0,
              end: Number.POSITIVE_INFINITY,
              step: 1
            }
          },
          rangeEnd: {
            since: "1.4.0",
            category: l,
            type: "int",
            default: Number.POSITIVE_INFINITY,
            range: {
              start: 0,
              end: Number.POSITIVE_INFINITY,
              step: 1
            },
            description: t(oi || (oi = wt(["\n      Format code ending at a given character offset (exclusive).\n      The range will extend forwards to the end of the selected statement.\n      This option cannot be used with --cursor-offset.\n    "]))),
            cliCategory: i
          },
          rangeStart: {
            since: "1.4.0",
            category: l,
            type: "int",
            default: 0,
            range: {
              start: 0,
              end: Number.POSITIVE_INFINITY,
              step: 1
            },
            description: t(ci || (ci = wt(["\n      Format code starting at a given character offset.\n      The range will extend backwards to the start of the first line containing the selected statement.\n      This option cannot be used with --cursor-offset.\n    "]))),
            cliCategory: i
          },
          requirePragma: {
            since: "1.7.0",
            category: l,
            type: "boolean",
            default: !1,
            description: t(li || (li = wt(["\n      Require either '@prettier' or '@format' to be present in the file's first docblock comment\n      in order for it to be formatted.\n    "]))),
            cliCategory: u
          },
          tabWidth: {
            type: "int",
            category: c,
            default: 2,
            description: "Number of spaces per indentation level.",
            range: {
              start: 0,
              end: Number.POSITIVE_INFINITY,
              step: 1
            }
          },
          useTabs: {
            since: "1.0.0",
            category: c,
            type: "boolean",
            default: !1,
            description: "Indent with tabs instead of spaces."
          },
          embeddedLanguageFormatting: {
            since: "2.1.0",
            category: c,
            type: "choice",
            default: [{
              since: "2.1.0",
              value: "auto"
            }],
            description: "Control how Prettier formats quoted code embedded in the file.",
            choices: [{
              value: "auto",
              description: "Format embedded code if Prettier can automatically identify it."
            }, {
              value: "off",
              description: "Never automatically format embedded code."
            }]
          }
        };

        n.exports = {
          CATEGORY_CONFIG: s,
          CATEGORY_EDITOR: i,
          CATEGORY_FORMAT: r,
          CATEGORY_OTHER: u,
          CATEGORY_OUTPUT: a,
          CATEGORY_GLOBAL: c,
          CATEGORY_SPECIAL: l,
          options: C
        };
      }
    }),
        Mn = Z({
      "src/main/support.js": function srcMainSupportJs(e, n) {
        "use strict";

        ae();
        var t = {
          compare: qn(),
          lt: pD(),
          gte: fD()
        },
            s = DD(),
            i = gi().version,
            r = dD().options;

        function u() {
          var _ref4 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
              _ref4$plugins = _ref4.plugins,
              c = _ref4$plugins === void 0 ? [] : _ref4$plugins,
              _ref4$showUnreleased = _ref4.showUnreleased,
              l = _ref4$showUnreleased === void 0 ? !1 : _ref4$showUnreleased,
              _ref4$showDeprecated = _ref4.showDeprecated,
              C = _ref4$showDeprecated === void 0 ? !1 : _ref4$showDeprecated,
              _ref4$showInternal = _ref4.showInternal,
              m = _ref4$showInternal === void 0 ? !1 : _ref4$showInternal,
              g = i.split("-", 1)[0],
              p = c.flatMap(function (A) {
            return A.languages || [];
          }).filter(h),
              f = s(Object.assign.apply(Object, [{}].concat(_toConsumableArray(c.map(function (A) {
            var b = A.options;
            return b;
          })), [r])), "name").filter(function (A) {
            return h(A) && N(A);
          }).sort(function (A, b) {
            return A.name === b.name ? 0 : A.name < b.name ? -1 : 1;
          }).map(T).map(function (A) {
            A = Object.assign({}, A), Array.isArray(A.default) && (A.default = A.default.length === 1 ? A.default[0].value : A.default.filter(h).sort(function (v, B) {
              return t.compare(B.since, v.since);
            })[0].value), Array.isArray(A.choices) && (A.choices = A.choices.filter(function (v) {
              return h(v) && N(v);
            }), A.name === "parser" && a(A, p, c));
            var b = Object.fromEntries(c.filter(function (v) {
              return v.defaultOptions && v.defaultOptions[A.name] !== void 0;
            }).map(function (v) {
              return [v.name, v.defaultOptions[A.name]];
            }));
            return Object.assign(Object.assign({}, A), {}, {
              pluginDefaults: b
            });
          });

          return {
            languages: p,
            options: f
          };

          function h(A) {
            return l || !("since" in A) || A.since && t.gte(g, A.since);
          }

          function N(A) {
            return C || !("deprecated" in A) || A.deprecated && t.lt(g, A.deprecated);
          }

          function T(A) {
            if (m) return A;
            var b = A.cliName,
                v = A.cliCategory,
                B = A.cliDescription;
            return _n(A, zf);
          }
        }

        function a(c, l, C) {
          var m = new Set(c.choices.map(function (g) {
            return g.value;
          }));

          var _iterator7 = _createForOfIteratorHelper(l),
              _step7;

          try {
            for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
              var g = _step7.value;

              if (g.parsers) {
                var _iterator8 = _createForOfIteratorHelper(g.parsers),
                    _step8;

                try {
                  var _loop4 = function _loop4() {
                    var p = _step8.value;

                    if (!m.has(p)) {
                      m.add(p);
                      var f = C.find(function (N) {
                        return N.parsers && N.parsers[p];
                      }),
                          _h2 = g.name;
                      f && f.name && (_h2 += " (plugin: ".concat(f.name, ")")), c.choices.push({
                        value: p,
                        description: _h2
                      });
                    }
                  };

                  for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                    _loop4();
                  }
                } catch (err) {
                  _iterator8.e(err);
                } finally {
                  _iterator8.f();
                }
              }
            }
          } catch (err) {
            _iterator7.e(err);
          } finally {
            _iterator7.f();
          }
        }

        n.exports = {
          getSupportInfo: u
        };
      }
    }),
        Rn = Z({
      "src/utils/is-non-empty-array.js": function srcUtilsIsNonEmptyArrayJs(e, n) {
        "use strict";

        ae();

        function t(s) {
          return Array.isArray(s) && s.length > 0;
        }

        n.exports = t;
      }
    }),
        Tr = Z({
      "src/utils/text/skip.js": function srcUtilsTextSkipJs(e, n) {
        "use strict";

        ae();

        function t(a) {
          return function (c, l, C) {
            var m = C && C.backwards;
            if (l === !1) return !1;
            var g = c.length,
                p = l;

            for (; p >= 0 && p < g;) {
              var f = c.charAt(p);

              if (a instanceof RegExp) {
                if (!a.test(f)) return p;
              } else if (!a.includes(f)) return p;

              m ? p-- : p++;
            }

            return p === -1 || p === g ? p : !1;
          };
        }

        var s = t(/\s/),
            i = t(" 	"),
            r = t(",; 	"),
            u = t(/[^\n\r]/);
        n.exports = {
          skipWhitespace: s,
          skipSpaces: i,
          skipToLineEnd: r,
          skipEverythingButNewLine: u
        };
      }
    }),
        Ei = Z({
      "src/utils/text/skip-inline-comment.js": function srcUtilsTextSkipInlineCommentJs(e, n) {
        "use strict";

        ae();

        function t(s, i) {
          if (i === !1) return !1;

          if (s.charAt(i) === "/" && s.charAt(i + 1) === "*") {
            for (var r = i + 2; r < s.length; ++r) {
              if (s.charAt(r) === "*" && s.charAt(r + 1) === "/") return r + 2;
            }
          }

          return i;
        }

        n.exports = t;
      }
    }),
        vi = Z({
      "src/utils/text/skip-trailing-comment.js": function srcUtilsTextSkipTrailingCommentJs(e, n) {
        "use strict";

        ae();

        var _Tr = Tr(),
            t = _Tr.skipEverythingButNewLine;

        function s(i, r) {
          return r === !1 ? !1 : i.charAt(r) === "/" && i.charAt(r + 1) === "/" ? t(i, r) : r;
        }

        n.exports = s;
      }
    }),
        Fi = Z({
      "src/utils/text/skip-newline.js": function srcUtilsTextSkipNewlineJs(e, n) {
        "use strict";

        ae();

        function t(s, i, r) {
          var u = r && r.backwards;
          if (i === !1) return !1;
          var a = s.charAt(i);

          if (u) {
            if (s.charAt(i - 1) === "\r" && a === "\n") return i - 2;
            if (a === "\n" || a === "\r" || a === "\u2028" || a === "\u2029") return i - 1;
          } else {
            if (a === "\r" && s.charAt(i + 1) === "\n") return i + 2;
            if (a === "\n" || a === "\r" || a === "\u2028" || a === "\u2029") return i + 1;
          }

          return i;
        }

        n.exports = t;
      }
    }),
        gD = Z({
      "src/utils/text/get-next-non-space-non-comment-character-index-with-start-index.js": function srcUtilsTextGetNextNonSpaceNonCommentCharacterIndexWithStartIndexJs(e, n) {
        "use strict";

        ae();

        var t = Ei(),
            s = Fi(),
            i = vi(),
            _Tr2 = Tr(),
            r = _Tr2.skipSpaces;

        function u(a, c) {
          var l = null,
              C = c;

          for (; C !== l;) {
            l = C, C = r(a, C), C = t(a, C), C = i(a, C), C = s(a, C);
          }

          return C;
        }

        n.exports = u;
      }
    }),
        Ge = Z({
      "src/common/util.js": function srcCommonUtilJs(e, n) {
        "use strict";

        ae();

        var _aD = aD(),
            t = _aD.default,
            s = st(),
            _Mn = Mn(),
            i = _Mn.getSupportInfo,
            r = Rn(),
            u = yi(),
            _Tr3 = Tr(),
            a = _Tr3.skipWhitespace,
            c = _Tr3.skipSpaces,
            l = _Tr3.skipToLineEnd,
            C = _Tr3.skipEverythingButNewLine,
            m = Ei(),
            g = vi(),
            p = Fi(),
            f = gD(),
            h = function h($) {
          return $[$.length - 2];
        };

        function N($) {
          return function (W, ee, U) {
            var ne = U && U.backwards;
            if (ee === !1) return !1;
            var se = W.length,
                V = ee;

            for (; V >= 0 && V < se;) {
              var oe = W.charAt(V);

              if ($ instanceof RegExp) {
                if (!$.test(oe)) return V;
              } else if (!$.includes(oe)) return V;

              ne ? V-- : V++;
            }

            return V === -1 || V === se ? V : !1;
          };
        }

        function T($, W) {
          var ee = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
              U = c($, ee.backwards ? W - 1 : W, ee),
              ne = p($, U, ee);
          return U !== ne;
        }

        function A($, W, ee) {
          for (var U = W; U < ee; ++U) {
            if ($.charAt(U) === "\n") return !0;
          }

          return !1;
        }

        function b($, W, ee) {
          var U = ee(W) - 1;
          U = c($, U, {
            backwards: !0
          }), U = p($, U, {
            backwards: !0
          }), U = c($, U, {
            backwards: !0
          });
          var ne = p($, U, {
            backwards: !0
          });
          return U !== ne;
        }

        function v($, W) {
          var ee = null,
              U = W;

          for (; U !== ee;) {
            ee = U, U = l($, U), U = m($, U), U = c($, U);
          }

          return U = g($, U), U = p($, U), U !== !1 && T($, U);
        }

        function B($, W, ee) {
          return v($, ee(W));
        }

        function w($, W, ee) {
          return f($, ee(W));
        }

        function I($, W, ee) {
          return $.charAt(w($, W, ee));
        }

        function E($, W) {
          var ee = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          return c($, ee.backwards ? W - 1 : W, ee) !== W;
        }

        function D($, W) {
          var ee = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0,
              U = 0;

          for (var ne = ee; ne < $.length; ++ne) {
            $[ne] === "	" ? U = U + W - U % W : U++;
          }

          return U;
        }

        function d($, W) {
          var ee = $.lastIndexOf("\n");
          return ee === -1 ? 0 : D($.slice(ee + 1).match(/^[\t ]*/)[0], W);
        }

        function y($, W) {
          var ee = {
            quote: '"',
            regex: /"/g,
            escaped: "&quot;"
          },
              U = {
            quote: "'",
            regex: /'/g,
            escaped: "&apos;"
          },
              ne = W === "'" ? U : ee,
              se = ne === U ? ee : U,
              V = ne;

          if ($.includes(ne.quote) || $.includes(se.quote)) {
            var oe = ($.match(ne.regex) || []).length,
                K = ($.match(se.regex) || []).length;
            V = oe > K ? se : ne;
          }

          return V;
        }

        function o($, W) {
          var ee = $.slice(1, -1),
              U = W.parser === "json" || W.parser === "json5" && W.quoteProps === "preserve" && !W.singleQuote ? '"' : W.__isInHtmlAttribute ? "'" : y(ee, W.singleQuote ? "'" : '"').quote;
          return x(ee, U, !(W.parser === "css" || W.parser === "less" || W.parser === "scss" || W.__embeddedInHtml));
        }

        function x($, W, ee) {
          var U = W === '"' ? "'" : '"',
              ne = /\\([\s\S])|(["'])/g,
              se = $.replace(ne, function (V, oe, K) {
            return oe === U ? oe : K === W ? "\\" + K : K || (ee && /^[^\n\r"'0-7\\bfnrt-vx\u2028\u2029]$/.test(oe) ? oe : "\\" + oe);
          });
          return W + se + W;
        }

        function F($) {
          return $.toLowerCase().replace(/^([+-]?[\d.]+e)(?:\+|(-))?0*(\d)/, "$1$2$3").replace(/^([+-]?[\d.]+)e[+-]?0+$/, "$1").replace(/^([+-])?\./, "$10.").replace(/(\.\d+?)0+(?=e|$)/, "$1").replace(/\.(?=e|$)/, "");
        }

        function S($, W) {
          var ee = $.match(new RegExp("(".concat(t(W), ")+"), "g"));
          return ee === null ? 0 : ee.reduce(function (U, ne) {
            return Math.max(U, ne.length / W.length);
          }, 0);
        }

        function k($, W) {
          var ee = $.match(new RegExp("(".concat(t(W), ")+"), "g"));
          if (ee === null) return 0;
          var U = new Map(),
              ne = 0;

          var _iterator9 = _createForOfIteratorHelper(ee),
              _step9;

          try {
            for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
              var _se = _step9.value;
              var V = _se.length / W.length;
              U.set(V, !0), V > ne && (ne = V);
            }
          } catch (err) {
            _iterator9.e(err);
          } finally {
            _iterator9.f();
          }

          for (var se = 1; se < ne; se++) {
            if (!U.get(se)) return se;
          }

          return ne + 1;
        }

        function _($, W) {
          ($.comments || ($.comments = [])).push(W), W.printed = !1, W.nodeDescription = re($);
        }

        function O($, W) {
          W.leading = !0, W.trailing = !1, _($, W);
        }

        function R($, W, ee) {
          W.leading = !1, W.trailing = !1, ee && (W.marker = ee), _($, W);
        }

        function M($, W) {
          W.leading = !1, W.trailing = !0, _($, W);
        }

        function H($, W) {
          var _i3 = i({
            plugins: W.plugins
          }),
              ee = _i3.languages,
              U = ee.find(function (ne) {
            var se = ne.name;
            return se.toLowerCase() === $;
          }) || ee.find(function (ne) {
            var se = ne.aliases;
            return Array.isArray(se) && se.includes($);
          }) || ee.find(function (ne) {
            var se = ne.extensions;
            return Array.isArray(se) && se.includes(".".concat($));
          });

          return U && U.parsers[0];
        }

        function P($) {
          return $ && $.type === "front-matter";
        }

        function G($) {
          var W = new WeakMap();
          return function (ee) {
            return W.has(ee) || W.set(ee, Symbol($)), W.get(ee);
          };
        }

        function re($) {
          var W = $.type || $.kind || "(unknown type)",
              ee = String($.name || $.id && (_typeof($.id) == "object" ? $.id.name : $.id) || $.key && (_typeof($.key) == "object" ? $.key.name : $.key) || $.value && (_typeof($.value) == "object" ? "" : String($.value)) || $.operator || "");
          return ee.length > 20 && (ee = ee.slice(0, 19) + "\u2026"), W + (ee ? " " + ee : "");
        }

        n.exports = {
          inferParserByLanguage: H,
          getStringWidth: u,
          getMaxContinuousCount: S,
          getMinNotPresentContinuousCount: k,
          getPenultimate: h,
          getLast: s,
          getNextNonSpaceNonCommentCharacterIndexWithStartIndex: f,
          getNextNonSpaceNonCommentCharacterIndex: w,
          getNextNonSpaceNonCommentCharacter: I,
          skip: N,
          skipWhitespace: a,
          skipSpaces: c,
          skipToLineEnd: l,
          skipEverythingButNewLine: C,
          skipInlineComment: m,
          skipTrailingComment: g,
          skipNewline: p,
          isNextLineEmptyAfterIndex: v,
          isNextLineEmpty: B,
          isPreviousLineEmpty: b,
          hasNewline: T,
          hasNewlineInRange: A,
          hasSpaces: E,
          getAlignmentSize: D,
          getIndentSize: d,
          getPreferredQuote: y,
          printString: o,
          printNumber: F,
          makeString: x,
          addLeadingComment: O,
          addDanglingComment: R,
          addTrailingComment: M,
          isFrontMatterNode: P,
          isNonEmptyArray: r,
          createGroupIdMapper: G
        };
      }
    }),
        Ai = {};

    kn(Ai, {
      basename: function basename() {
        return Bi;
      },
      default: function _default() {
        return wi;
      },
      delimiter: function delimiter() {
        return bn;
      },
      dirname: function dirname() {
        return Ti;
      },
      extname: function extname() {
        return Ni;
      },
      isAbsolute: function isAbsolute() {
        return Wn;
      },
      join: function join() {
        return xi;
      },
      normalize: function normalize() {
        return Vn;
      },
      relative: function relative() {
        return bi;
      },
      resolve: function resolve() {
        return xr;
      },
      sep: function sep() {
        return xn;
      }
    });

    function Si(e, n) {
      for (var t = 0, s = e.length - 1; s >= 0; s--) {
        var i = e[s];
        i === "." ? e.splice(s, 1) : i === ".." ? (e.splice(s, 1), t++) : t && (e.splice(s, 1), t--);
      }

      if (n) for (; t--; t) {
        e.unshift("..");
      }
      return e;
    }

    function xr() {
      for (var e = "", n = !1, t = arguments.length - 1; t >= -1 && !n; t--) {
        var s = t >= 0 ? arguments[t] : "/";
        if (typeof s != "string") throw new TypeError("Arguments to path.resolve must be strings");
        if (!s) continue;
        e = s + "/" + e, n = s.charAt(0) === "/";
      }

      return e = Si($n(e.split("/"), function (i) {
        return !!i;
      }), !n).join("/"), (n ? "/" : "") + e || ".";
    }

    function Vn(e) {
      var n = Wn(e),
          t = _i(e, -1) === "/";
      return e = Si($n(e.split("/"), function (s) {
        return !!s;
      }), !n).join("/"), !e && !n && (e = "."), e && t && (e += "/"), (n ? "/" : "") + e;
    }

    function Wn(e) {
      return e.charAt(0) === "/";
    }

    function xi() {
      var e = Array.prototype.slice.call(arguments, 0);
      return Vn($n(e, function (n, t) {
        if (typeof n != "string") throw new TypeError("Arguments to path.join must be strings");
        return n;
      }).join("/"));
    }

    function bi(e, n) {
      e = xr(e).substr(1), n = xr(n).substr(1);

      function t(l) {
        for (var C = 0; C < l.length && l[C] === ""; C++) {
          ;
        }

        for (var m = l.length - 1; m >= 0 && l[m] === ""; m--) {
          ;
        }

        return C > m ? [] : l.slice(C, m - C + 1);
      }

      for (var s = t(e.split("/")), i = t(n.split("/")), r = Math.min(s.length, i.length), u = r, a = 0; a < r; a++) {
        if (s[a] !== i[a]) {
          u = a;
          break;
        }
      }

      for (var c = [], a = u; a < s.length; a++) {
        c.push("..");
      }

      return c = c.concat(i.slice(u)), c.join("/");
    }

    function Ti(e) {
      var n = Br(e),
          t = n[0],
          s = n[1];
      return !t && !s ? "." : (s && (s = s.substr(0, s.length - 1)), t + s);
    }

    function Bi(e, n) {
      var t = Br(e)[2];
      return n && t.substr(-1 * n.length) === n && (t = t.substr(0, t.length - n.length)), t;
    }

    function Ni(e) {
      return Br(e)[3];
    }

    function $n(e, n) {
      if (e.filter) return e.filter(n);

      for (var t = [], s = 0; s < e.length; s++) {
        n(e[s], s, e) && t.push(e[s]);
      }

      return t;
    }

    var Di,
        Br,
        xn,
        bn,
        wi,
        _i,
        yD = br({
      "node-modules-polyfills:path": function nodeModulesPolyfillsPath() {
        ae(), Di = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/, Br = function Br(e) {
          return Di.exec(e).slice(1);
        }, xn = "/", bn = ":", wi = {
          extname: Ni,
          basename: Bi,
          dirname: Ti,
          sep: xn,
          delimiter: bn,
          relative: bi,
          join: xi,
          isAbsolute: Wn,
          normalize: Vn,
          resolve: xr
        }, _i = "ab".substr(-1) === "b" ? function (e, n, t) {
          return e.substr(n, t);
        } : function (e, n, t) {
          return n < 0 && (n = e.length + n), e.substr(n, t);
        };
      }
    }),
        Pi = Z({
      "node-modules-polyfills-commonjs:path": function nodeModulesPolyfillsCommonjsPath(e, n) {
        ae();
        var t = (yD(), pt(Ai));

        if (t && t.default) {
          n.exports = t.default;

          for (var s in t) {
            n.exports[s] = t[s];
          }
        } else t && (n.exports = t);
      }
    }),
        Jt = Z({
      "src/common/errors.js": function srcCommonErrorsJs(e, n) {
        "use strict";

        ae();

        var t = /*#__PURE__*/function (_Error) {
          _inherits(t, _Error);

          var _super = _createSuper(t);

          function t() {
            _classCallCheck(this, t);

            return _super.apply(this, arguments);
          }

          return _createClass(t);
        }( /*#__PURE__*/_wrapNativeSuper(Error)),
            s = /*#__PURE__*/function (_Error2) {
          _inherits(s, _Error2);

          var _super2 = _createSuper(s);

          function s() {
            _classCallCheck(this, s);

            return _super2.apply(this, arguments);
          }

          return _createClass(s);
        }( /*#__PURE__*/_wrapNativeSuper(Error)),
            i = /*#__PURE__*/function (_Error3) {
          _inherits(i, _Error3);

          var _super3 = _createSuper(i);

          function i() {
            _classCallCheck(this, i);

            return _super3.apply(this, arguments);
          }

          return _createClass(i);
        }( /*#__PURE__*/_wrapNativeSuper(Error)),
            r = /*#__PURE__*/function (_Error4) {
          _inherits(r, _Error4);

          var _super4 = _createSuper(r);

          function r() {
            _classCallCheck(this, r);

            return _super4.apply(this, arguments);
          }

          return _createClass(r);
        }( /*#__PURE__*/_wrapNativeSuper(Error));

        n.exports = {
          ConfigError: t,
          DebugError: s,
          UndefinedParserError: i,
          ArgExpansionBailout: r
        };
      }
    }),
        Dt = {};

    kn(Dt, {
      __assign: function __assign() {
        return _Sr;
      },
      __asyncDelegator: function __asyncDelegator() {
        return wD;
      },
      __asyncGenerator: function __asyncGenerator() {
        return ND;
      },
      __asyncValues: function __asyncValues() {
        return _D;
      },
      __await: function __await() {
        return Gt;
      },
      __awaiter: function __awaiter() {
        return AD;
      },
      __classPrivateFieldGet: function __classPrivateFieldGet() {
        return LD;
      },
      __classPrivateFieldSet: function __classPrivateFieldSet() {
        return OD;
      },
      __createBinding: function __createBinding() {
        return xD;
      },
      __decorate: function __decorate() {
        return ED;
      },
      __exportStar: function __exportStar() {
        return bD;
      },
      __extends: function __extends() {
        return hD;
      },
      __generator: function __generator() {
        return SD;
      },
      __importDefault: function __importDefault() {
        return kD;
      },
      __importStar: function __importStar() {
        return ID;
      },
      __makeTemplateObject: function __makeTemplateObject() {
        return PD;
      },
      __metadata: function __metadata() {
        return FD;
      },
      __param: function __param() {
        return vD;
      },
      __read: function __read() {
        return Ii;
      },
      __rest: function __rest() {
        return CD;
      },
      __spread: function __spread() {
        return TD;
      },
      __spreadArrays: function __spreadArrays() {
        return BD;
      },
      __values: function __values() {
        return Tn;
      }
    });

    function hD(e, n) {
      _Ar(e, n);

      function t() {
        this.constructor = e;
      }

      e.prototype = n === null ? Object.create(n) : (t.prototype = n.prototype, new t());
    }

    function CD(e, n) {
      var t = {};

      for (var s in e) {
        Object.prototype.hasOwnProperty.call(e, s) && n.indexOf(s) < 0 && (t[s] = e[s]);
      }

      if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var i = 0, s = Object.getOwnPropertySymbols(e); i < s.length; i++) {
        n.indexOf(s[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[i]) && (t[s[i]] = e[s[i]]);
      }
      return t;
    }

    function ED(e, n, t, s) {
      var i = arguments.length,
          r = i < 3 ? n : s === null ? s = Object.getOwnPropertyDescriptor(n, t) : s,
          u;
      if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) == "object" && typeof Reflect.decorate == "function") r = Reflect.decorate(e, n, t, s);else for (var a = e.length - 1; a >= 0; a--) {
        (u = e[a]) && (r = (i < 3 ? u(r) : i > 3 ? u(n, t, r) : u(n, t)) || r);
      }
      return i > 3 && r && Object.defineProperty(n, t, r), r;
    }

    function vD(e, n) {
      return function (t, s) {
        n(t, s, e);
      };
    }

    function FD(e, n) {
      if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) == "object" && typeof Reflect.metadata == "function") return Reflect.metadata(e, n);
    }

    function AD(e, n, t, s) {
      function i(r) {
        return r instanceof t ? r : new t(function (u) {
          u(r);
        });
      }

      return new (t || (t = Promise))(function (r, u) {
        function a(C) {
          try {
            l(s.next(C));
          } catch (m) {
            u(m);
          }
        }

        function c(C) {
          try {
            l(s.throw(C));
          } catch (m) {
            u(m);
          }
        }

        function l(C) {
          C.done ? r(C.value) : i(C.value).then(a, c);
        }

        l((s = s.apply(e, n || [])).next());
      });
    }

    function SD(e, n) {
      var t = {
        label: 0,
        sent: function sent() {
          if (r[0] & 1) throw r[1];
          return r[1];
        },
        trys: [],
        ops: []
      },
          s,
          i,
          r,
          u;
      return u = {
        next: a(0),
        throw: a(1),
        return: a(2)
      }, typeof Symbol == "function" && (u[Symbol.iterator] = function () {
        return this;
      }), u;

      function a(l) {
        return function (C) {
          return c([l, C]);
        };
      }

      function c(l) {
        if (s) throw new TypeError("Generator is already executing.");

        for (; t;) {
          try {
            if (s = 1, i && (r = l[0] & 2 ? i.return : l[0] ? i.throw || ((r = i.return) && r.call(i), 0) : i.next) && !(r = r.call(i, l[1])).done) return r;

            switch (i = 0, r && (l = [l[0] & 2, r.value]), l[0]) {
              case 0:
              case 1:
                r = l;
                break;

              case 4:
                return t.label++, {
                  value: l[1],
                  done: !1
                };

              case 5:
                t.label++, i = l[1], l = [0];
                continue;

              case 7:
                l = t.ops.pop(), t.trys.pop();
                continue;

              default:
                if (r = t.trys, !(r = r.length > 0 && r[r.length - 1]) && (l[0] === 6 || l[0] === 2)) {
                  t = 0;
                  continue;
                }

                if (l[0] === 3 && (!r || l[1] > r[0] && l[1] < r[3])) {
                  t.label = l[1];
                  break;
                }

                if (l[0] === 6 && t.label < r[1]) {
                  t.label = r[1], r = l;
                  break;
                }

                if (r && t.label < r[2]) {
                  t.label = r[2], t.ops.push(l);
                  break;
                }

                r[2] && t.ops.pop(), t.trys.pop();
                continue;
            }

            l = n.call(e, t);
          } catch (C) {
            l = [6, C], i = 0;
          } finally {
            s = r = 0;
          }
        }

        if (l[0] & 5) throw l[1];
        return {
          value: l[0] ? l[1] : void 0,
          done: !0
        };
      }
    }

    function xD(e, n, t, s) {
      s === void 0 && (s = t), e[s] = n[t];
    }

    function bD(e, n) {
      for (var t in e) {
        t !== "default" && !n.hasOwnProperty(t) && (n[t] = e[t]);
      }
    }

    function Tn(e) {
      var n = typeof Symbol == "function" && Symbol.iterator,
          t = n && e[n],
          s = 0;
      if (t) return t.call(e);
      if (e && typeof e.length == "number") return {
        next: function next() {
          return e && s >= e.length && (e = void 0), {
            value: e && e[s++],
            done: !e
          };
        }
      };
      throw new TypeError(n ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function Ii(e, n) {
      var t = typeof Symbol == "function" && e[Symbol.iterator];
      if (!t) return e;
      var s = t.call(e),
          i,
          r = [],
          u;

      try {
        for (; (n === void 0 || n-- > 0) && !(i = s.next()).done;) {
          r.push(i.value);
        }
      } catch (a) {
        u = {
          error: a
        };
      } finally {
        try {
          i && !i.done && (t = s.return) && t.call(s);
        } finally {
          if (u) throw u.error;
        }
      }

      return r;
    }

    function TD() {
      for (var e = [], n = 0; n < arguments.length; n++) {
        e = e.concat(Ii(arguments[n]));
      }

      return e;
    }

    function BD() {
      for (var e = 0, n = 0, t = arguments.length; n < t; n++) {
        e += arguments[n].length;
      }

      for (var s = Array(e), i = 0, n = 0; n < t; n++) {
        for (var r = arguments[n], u = 0, a = r.length; u < a; u++, i++) {
          s[i] = r[u];
        }
      }

      return s;
    }

    function Gt(e) {
      return this instanceof Gt ? (this.v = e, this) : new Gt(e);
    }

    function ND(e, n, t) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var s = t.apply(e, n || []),
          i,
          r = [];
      return i = {}, u("next"), u("throw"), u("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function u(g) {
        s[g] && (i[g] = function (p) {
          return new Promise(function (f, h) {
            r.push([g, p, f, h]) > 1 || a(g, p);
          });
        });
      }

      function a(g, p) {
        try {
          c(s[g](p));
        } catch (f) {
          m(r[0][3], f);
        }
      }

      function c(g) {
        g.value instanceof Gt ? Promise.resolve(g.value.v).then(l, C) : m(r[0][2], g);
      }

      function l(g) {
        a("next", g);
      }

      function C(g) {
        a("throw", g);
      }

      function m(g, p) {
        g(p), r.shift(), r.length && a(r[0][0], r[0][1]);
      }
    }

    function wD(e) {
      var n, t;
      return n = {}, s("next"), s("throw", function (i) {
        throw i;
      }), s("return"), n[Symbol.iterator] = function () {
        return this;
      }, n;

      function s(i, r) {
        n[i] = e[i] ? function (u) {
          return (t = !t) ? {
            value: Gt(e[i](u)),
            done: i === "return"
          } : r ? r(u) : u;
        } : r;
      }
    }

    function _D(e) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var n = e[Symbol.asyncIterator],
          t;
      return n ? n.call(e) : (e = typeof Tn == "function" ? Tn(e) : e[Symbol.iterator](), t = {}, s("next"), s("throw"), s("return"), t[Symbol.asyncIterator] = function () {
        return this;
      }, t);

      function s(r) {
        t[r] = e[r] && function (u) {
          return new Promise(function (a, c) {
            u = e[r](u), i(a, c, u.done, u.value);
          });
        };
      }

      function i(r, u, a, c) {
        Promise.resolve(c).then(function (l) {
          r({
            value: l,
            done: a
          });
        }, u);
      }
    }

    function PD(e, n) {
      return Object.defineProperty ? Object.defineProperty(e, "raw", {
        value: n
      }) : e.raw = n, e;
    }

    function ID(e) {
      if (e && e.__esModule) return e;
      var n = {};
      if (e != null) for (var t in e) {
        Object.hasOwnProperty.call(e, t) && (n[t] = e[t]);
      }
      return n.default = e, n;
    }

    function kD(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function LD(e, n) {
      if (!n.has(e)) throw new TypeError("attempted to get private field on non-instance");
      return n.get(e);
    }

    function OD(e, n, t) {
      if (!n.has(e)) throw new TypeError("attempted to set private field on non-instance");
      return n.set(e, t), t;
    }

    var _Ar,
        _Sr,
        gt = br({
      "node_modules/tslib/tslib.es6.js": function node_modulesTslibTslibEs6Js() {
        ae(), _Ar = function Ar(e, n) {
          return _Ar = Object.setPrototypeOf || {
            __proto__: []
          } instanceof Array && function (t, s) {
            t.__proto__ = s;
          } || function (t, s) {
            for (var i in s) {
              s.hasOwnProperty(i) && (t[i] = s[i]);
            }
          }, _Ar(e, n);
        }, _Sr = function Sr() {
          return _Sr = Object.assign || function (n) {
            for (var t, s = 1, i = arguments.length; s < i; s++) {
              t = arguments[s];

              for (var r in t) {
                Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
              }
            }

            return n;
          }, _Sr.apply(this, arguments);
        };
      }
    }),
        ki = Z({
      "node_modules/vnopts/lib/descriptors/api.js": function node_modulesVnoptsLibDescriptorsApiJs(e) {
        "use strict";

        ae(), Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.apiDescriptor = {
          key: function key(n) {
            return /^[$_a-zA-Z][$_a-zA-Z0-9]*$/.test(n) ? n : JSON.stringify(n);
          },
          value: function value(n) {
            if (n === null || _typeof(n) != "object") return JSON.stringify(n);
            if (Array.isArray(n)) return "[".concat(n.map(function (s) {
              return e.apiDescriptor.value(s);
            }).join(", "), "]");
            var t = Object.keys(n);
            return t.length === 0 ? "{}" : "{ ".concat(t.map(function (s) {
              return "".concat(e.apiDescriptor.key(s), ": ").concat(e.apiDescriptor.value(n[s]));
            }).join(", "), " }");
          },
          pair: function pair(n) {
            var t = n.key,
                s = n.value;
            return e.apiDescriptor.value(_defineProperty({}, t, s));
          }
        };
      }
    }),
        jD = Z({
      "node_modules/vnopts/lib/descriptors/index.js": function node_modulesVnoptsLibDescriptorsIndexJs(e) {
        "use strict";

        ae(), Object.defineProperty(e, "__esModule", {
          value: !0
        });
        var n = (gt(), pt(Dt));

        n.__exportStar(ki(), e);
      }
    }),
        Nr = Z({
      "scripts/build/shims/chalk.cjs": function scriptsBuildShimsChalkCjs(e, n) {
        "use strict";

        ae();

        var t = function t(s) {
          return s;
        };

        t.grey = t, t.red = t, t.bold = t, t.yellow = t, t.blue = t, t.default = t, n.exports = t;
      }
    }),
        Li = Z({
      "node_modules/vnopts/lib/handlers/deprecated/common.js": function node_modulesVnoptsLibHandlersDeprecatedCommonJs(e) {
        "use strict";

        ae(), Object.defineProperty(e, "__esModule", {
          value: !0
        });
        var n = Nr();

        e.commonDeprecatedHandler = function (t, s, i) {
          var r = i.descriptor,
              u = ["".concat(n.default.yellow(typeof t == "string" ? r.key(t) : r.pair(t)), " is deprecated")];
          return s && u.push("we now treat it as ".concat(n.default.blue(typeof s == "string" ? r.key(s) : r.pair(s)))), u.join("; ") + ".";
        };
      }
    }),
        qD = Z({
      "node_modules/vnopts/lib/handlers/deprecated/index.js": function node_modulesVnoptsLibHandlersDeprecatedIndexJs(e) {
        "use strict";

        ae(), Object.defineProperty(e, "__esModule", {
          value: !0
        });
        var n = (gt(), pt(Dt));

        n.__exportStar(Li(), e);
      }
    }),
        MD = Z({
      "node_modules/vnopts/lib/handlers/invalid/common.js": function node_modulesVnoptsLibHandlersInvalidCommonJs(e) {
        "use strict";

        ae(), Object.defineProperty(e, "__esModule", {
          value: !0
        });
        var n = Nr();

        e.commonInvalidHandler = function (t, s, i) {
          return ["Invalid ".concat(n.default.red(i.descriptor.key(t)), " value."), "Expected ".concat(n.default.blue(i.schemas[t].expected(i)), ","), "but received ".concat(n.default.red(i.descriptor.value(s)), ".")].join(" ");
        };
      }
    }),
        Oi = Z({
      "node_modules/vnopts/lib/handlers/invalid/index.js": function node_modulesVnoptsLibHandlersInvalidIndexJs(e) {
        "use strict";

        ae(), Object.defineProperty(e, "__esModule", {
          value: !0
        });
        var n = (gt(), pt(Dt));

        n.__exportStar(MD(), e);
      }
    }),
        RD = Z({
      "node_modules/vnopts/node_modules/leven/index.js": function node_modulesVnoptsNode_modulesLevenIndexJs(e, n) {
        "use strict";

        ae();
        var t = [],
            s = [];

        n.exports = function (i, r) {
          if (i === r) return 0;
          var u = i;
          i.length > r.length && (i = r, r = u);
          var a = i.length,
              c = r.length;
          if (a === 0) return c;
          if (c === 0) return a;

          for (; a > 0 && i.charCodeAt(~-a) === r.charCodeAt(~-c);) {
            a--, c--;
          }

          if (a === 0) return c;

          for (var l = 0; l < a && i.charCodeAt(l) === r.charCodeAt(l);) {
            l++;
          }

          if (a -= l, c -= l, a === 0) return c;

          for (var C, m, g, p, f = 0, h = 0; f < a;) {
            s[l + f] = i.charCodeAt(l + f), t[f] = ++f;
          }

          for (; h < c;) {
            for (C = r.charCodeAt(l + h), g = h++, m = h, f = 0; f < a; f++) {
              p = C === s[l + f] ? g : g + 1, g = t[f], m = t[f] = g > m ? p > m ? m + 1 : p : p > g ? g + 1 : p;
            }
          }

          return m;
        };
      }
    }),
        ji = Z({
      "node_modules/vnopts/lib/handlers/unknown/leven.js": function node_modulesVnoptsLibHandlersUnknownLevenJs(e) {
        "use strict";

        ae(), Object.defineProperty(e, "__esModule", {
          value: !0
        });
        var n = Nr(),
            t = RD();

        e.levenUnknownHandler = function (s, i, r) {
          var u = r.descriptor,
              a = r.logger,
              c = r.schemas,
              l = ["Ignored unknown option ".concat(n.default.yellow(u.pair({
            key: s,
            value: i
          })), ".")],
              C = Object.keys(c).sort().find(function (m) {
            return t(s, m) < 3;
          });
          C && l.push("Did you mean ".concat(n.default.blue(u.key(C)), "?")), a.warn(l.join(" "));
        };
      }
    }),
        VD = Z({
      "node_modules/vnopts/lib/handlers/unknown/index.js": function node_modulesVnoptsLibHandlersUnknownIndexJs(e) {
        "use strict";

        ae(), Object.defineProperty(e, "__esModule", {
          value: !0
        });
        var n = (gt(), pt(Dt));

        n.__exportStar(ji(), e);
      }
    }),
        WD = Z({
      "node_modules/vnopts/lib/handlers/index.js": function node_modulesVnoptsLibHandlersIndexJs(e) {
        "use strict";

        ae(), Object.defineProperty(e, "__esModule", {
          value: !0
        });
        var n = (gt(), pt(Dt));
        n.__exportStar(qD(), e), n.__exportStar(Oi(), e), n.__exportStar(VD(), e);
      }
    }),
        yt = Z({
      "node_modules/vnopts/lib/schema.js": function node_modulesVnoptsLibSchemaJs(e) {
        "use strict";

        ae(), Object.defineProperty(e, "__esModule", {
          value: !0
        });
        var n = ["default", "expected", "validate", "deprecated", "forward", "redirect", "overlap", "preprocess", "postprocess"];

        function t(r, u) {
          var a = new r(u),
              c = Object.create(a);

          var _iterator10 = _createForOfIteratorHelper(n),
              _step10;

          try {
            for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
              var l = _step10.value;
              l in u && (c[l] = i(u[l], a, s.prototype[l].length));
            }
          } catch (err) {
            _iterator10.e(err);
          } finally {
            _iterator10.f();
          }

          return c;
        }

        e.createSchema = t;

        var s = /*#__PURE__*/function () {
          function s(r) {
            _classCallCheck(this, s);

            this.name = r.name;
          }

          _createClass(s, [{
            key: "default",
            value: function _default(r) {}
          }, {
            key: "expected",
            value: function expected(r) {
              return "nothing";
            }
          }, {
            key: "validate",
            value: function validate(r, u) {
              return !1;
            }
          }, {
            key: "deprecated",
            value: function deprecated(r, u) {
              return !1;
            }
          }, {
            key: "forward",
            value: function forward(r, u) {}
          }, {
            key: "redirect",
            value: function redirect(r, u) {}
          }, {
            key: "overlap",
            value: function overlap(r, u, a) {
              return r;
            }
          }, {
            key: "preprocess",
            value: function preprocess(r, u) {
              return r;
            }
          }, {
            key: "postprocess",
            value: function postprocess(r, u) {
              return r;
            }
          }], [{
            key: "create",
            value: function create(r) {
              return t(this, r);
            }
          }]);

          return s;
        }();

        e.Schema = s;

        function i(r, u, a) {
          return typeof r == "function" ? function () {
            for (var c = arguments.length, l = new Array(c), C = 0; C < c; C++) {
              l[C] = arguments[C];
            }

            return r.apply(void 0, _toConsumableArray(l.slice(0, a - 1)).concat([u], _toConsumableArray(l.slice(a - 1))));
          } : function () {
            return r;
          };
        }
      }
    }),
        $D = Z({
      "node_modules/vnopts/lib/schemas/alias.js": function node_modulesVnoptsLibSchemasAliasJs(e) {
        "use strict";

        ae(), Object.defineProperty(e, "__esModule", {
          value: !0
        });

        var n = yt(),
            t = /*#__PURE__*/function (_n$Schema) {
          _inherits(t, _n$Schema);

          var _super5 = _createSuper(t);

          function t(s) {
            var _this;

            _classCallCheck(this, t);

            _this = _super5.call(this, s);
            _this._sourceName = s.sourceName;
            return _this;
          }

          _createClass(t, [{
            key: "expected",
            value: function expected(s) {
              return s.schemas[this._sourceName].expected(s);
            }
          }, {
            key: "validate",
            value: function validate(s, i) {
              return i.schemas[this._sourceName].validate(s, i);
            }
          }, {
            key: "redirect",
            value: function redirect(s, i) {
              return this._sourceName;
            }
          }]);

          return t;
        }(n.Schema);

        e.AliasSchema = t;
      }
    }),
        HD = Z({
      "node_modules/vnopts/lib/schemas/any.js": function node_modulesVnoptsLibSchemasAnyJs(e) {
        "use strict";

        ae(), Object.defineProperty(e, "__esModule", {
          value: !0
        });

        var n = yt(),
            t = /*#__PURE__*/function (_n$Schema2) {
          _inherits(t, _n$Schema2);

          var _super6 = _createSuper(t);

          function t() {
            _classCallCheck(this, t);

            return _super6.apply(this, arguments);
          }

          _createClass(t, [{
            key: "expected",
            value: function expected() {
              return "anything";
            }
          }, {
            key: "validate",
            value: function validate() {
              return !0;
            }
          }]);

          return t;
        }(n.Schema);

        e.AnySchema = t;
      }
    }),
        GD = Z({
      "node_modules/vnopts/lib/schemas/array.js": function node_modulesVnoptsLibSchemasArrayJs(e) {
        "use strict";

        ae(), Object.defineProperty(e, "__esModule", {
          value: !0
        });

        var n = (gt(), pt(Dt)),
            t = yt(),
            s = /*#__PURE__*/function (_t$Schema) {
          _inherits(s, _t$Schema);

          var _super7 = _createSuper(s);

          function s(r) {
            var _this2;

            _classCallCheck(this, s);

            var u = r.valueSchema,
                _r$name = r.name,
                a = _r$name === void 0 ? u.name : _r$name,
                c = n.__rest(r, ["valueSchema", "name"]);

            _this2 = _super7.call(this, Object.assign({}, c, {
              name: a
            }));
            _this2._valueSchema = u;
            return _this2;
          }

          _createClass(s, [{
            key: "expected",
            value: function expected(r) {
              return "an array of ".concat(this._valueSchema.expected(r));
            }
          }, {
            key: "validate",
            value: function validate(r, u) {
              if (!Array.isArray(r)) return !1;
              var a = [];

              var _iterator11 = _createForOfIteratorHelper(r),
                  _step11;

              try {
                for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
                  var c = _step11.value;
                  var l = u.normalizeValidateResult(this._valueSchema.validate(c, u), c);
                  l !== !0 && a.push(l.value);
                }
              } catch (err) {
                _iterator11.e(err);
              } finally {
                _iterator11.f();
              }

              return a.length === 0 ? !0 : {
                value: a
              };
            }
          }, {
            key: "deprecated",
            value: function deprecated(r, u) {
              var a = [];

              var _iterator12 = _createForOfIteratorHelper(r),
                  _step12;

              try {
                for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
                  var c = _step12.value;
                  var l = u.normalizeDeprecatedResult(this._valueSchema.deprecated(c, u), c);
                  l !== !1 && a.push.apply(a, _toConsumableArray(l.map(function (C) {
                    var m = C.value;
                    return {
                      value: [m]
                    };
                  })));
                }
              } catch (err) {
                _iterator12.e(err);
              } finally {
                _iterator12.f();
              }

              return a;
            }
          }, {
            key: "forward",
            value: function forward(r, u) {
              var a = [];

              var _iterator13 = _createForOfIteratorHelper(r),
                  _step13;

              try {
                for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
                  var c = _step13.value;
                  var l = u.normalizeForwardResult(this._valueSchema.forward(c, u), c);
                  a.push.apply(a, _toConsumableArray(l.map(i)));
                }
              } catch (err) {
                _iterator13.e(err);
              } finally {
                _iterator13.f();
              }

              return a;
            }
          }, {
            key: "redirect",
            value: function redirect(r, u) {
              var a = [],
                  c = [];

              var _iterator14 = _createForOfIteratorHelper(r),
                  _step14;

              try {
                for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
                  var l = _step14.value;
                  var C = u.normalizeRedirectResult(this._valueSchema.redirect(l, u), l);
                  "remain" in C && a.push(C.remain), c.push.apply(c, _toConsumableArray(C.redirect.map(i)));
                }
              } catch (err) {
                _iterator14.e(err);
              } finally {
                _iterator14.f();
              }

              return a.length === 0 ? {
                redirect: c
              } : {
                redirect: c,
                remain: a
              };
            }
          }, {
            key: "overlap",
            value: function overlap(r, u) {
              return r.concat(u);
            }
          }]);

          return s;
        }(t.Schema);

        e.ArraySchema = s;

        function i(r) {
          var u = r.from,
              a = r.to;
          return {
            from: [u],
            to: a
          };
        }
      }
    }),
        JD = Z({
      "node_modules/vnopts/lib/schemas/boolean.js": function node_modulesVnoptsLibSchemasBooleanJs(e) {
        "use strict";

        ae(), Object.defineProperty(e, "__esModule", {
          value: !0
        });

        var n = yt(),
            t = /*#__PURE__*/function (_n$Schema3) {
          _inherits(t, _n$Schema3);

          var _super8 = _createSuper(t);

          function t() {
            _classCallCheck(this, t);

            return _super8.apply(this, arguments);
          }

          _createClass(t, [{
            key: "expected",
            value: function expected() {
              return "true or false";
            }
          }, {
            key: "validate",
            value: function validate(s) {
              return typeof s == "boolean";
            }
          }]);

          return t;
        }(n.Schema);

        e.BooleanSchema = t;
      }
    }),
        Hn = Z({
      "node_modules/vnopts/lib/utils.js": function node_modulesVnoptsLibUtilsJs(e) {
        "use strict";

        ae(), Object.defineProperty(e, "__esModule", {
          value: !0
        });

        function n(p, f) {
          var h = Object.create(null);

          var _iterator15 = _createForOfIteratorHelper(p),
              _step15;

          try {
            for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
              var _N = _step15.value;
              var T = _N[f];
              if (h[T]) throw new Error("Duplicate ".concat(f, " ").concat(JSON.stringify(T)));
              h[T] = _N;
            }
          } catch (err) {
            _iterator15.e(err);
          } finally {
            _iterator15.f();
          }

          return h;
        }

        e.recordFromArray = n;

        function t(p, f) {
          var h = new Map();

          var _iterator16 = _createForOfIteratorHelper(p),
              _step16;

          try {
            for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
              var _N2 = _step16.value;
              var T = _N2[f];
              if (h.has(T)) throw new Error("Duplicate ".concat(f, " ").concat(JSON.stringify(T)));
              h.set(T, _N2);
            }
          } catch (err) {
            _iterator16.e(err);
          } finally {
            _iterator16.f();
          }

          return h;
        }

        e.mapFromArray = t;

        function s() {
          var p = Object.create(null);
          return function (f) {
            var h = JSON.stringify(f);
            return p[h] ? !0 : (p[h] = !0, !1);
          };
        }

        e.createAutoChecklist = s;

        function i(p, f) {
          var h = [],
              N = [];

          var _iterator17 = _createForOfIteratorHelper(p),
              _step17;

          try {
            for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
              var T = _step17.value;
              f(T) ? h.push(T) : N.push(T);
            }
          } catch (err) {
            _iterator17.e(err);
          } finally {
            _iterator17.f();
          }

          return [h, N];
        }

        e.partition = i;

        function r(p) {
          return p === Math.floor(p);
        }

        e.isInt = r;

        function u(p, f) {
          if (p === f) return 0;

          var h = _typeof(p),
              N = _typeof(f),
              T = ["undefined", "object", "boolean", "number", "string"];

          return h !== N ? T.indexOf(h) - T.indexOf(N) : h !== "string" ? Number(p) - Number(f) : p.localeCompare(f);
        }

        e.comparePrimitive = u;

        function a(p) {
          return p === void 0 ? {} : p;
        }

        e.normalizeDefaultResult = a;

        function c(p, f) {
          return p === !0 ? !0 : p === !1 ? {
            value: f
          } : p;
        }

        e.normalizeValidateResult = c;

        function l(p, f) {
          var h = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
          return p === !1 ? !1 : p === !0 ? h ? !0 : [{
            value: f
          }] : "value" in p ? [p] : p.length === 0 ? !1 : p;
        }

        e.normalizeDeprecatedResult = l;

        function C(p, f) {
          return typeof p == "string" || "key" in p ? {
            from: f,
            to: p
          } : "from" in p ? {
            from: p.from,
            to: p.to
          } : {
            from: f,
            to: p.to
          };
        }

        e.normalizeTransferResult = C;

        function m(p, f) {
          return p === void 0 ? [] : Array.isArray(p) ? p.map(function (h) {
            return C(h, f);
          }) : [C(p, f)];
        }

        e.normalizeForwardResult = m;

        function g(p, f) {
          var h = m(_typeof(p) == "object" && "redirect" in p ? p.redirect : p, f);
          return h.length === 0 ? {
            remain: f,
            redirect: h
          } : _typeof(p) == "object" && "remain" in p ? {
            remain: p.remain,
            redirect: h
          } : {
            redirect: h
          };
        }

        e.normalizeRedirectResult = g;
      }
    }),
        UD = Z({
      "node_modules/vnopts/lib/schemas/choice.js": function node_modulesVnoptsLibSchemasChoiceJs(e) {
        "use strict";

        ae(), Object.defineProperty(e, "__esModule", {
          value: !0
        });

        var n = yt(),
            t = Hn(),
            s = /*#__PURE__*/function (_n$Schema4) {
          _inherits(s, _n$Schema4);

          var _super9 = _createSuper(s);

          function s(i) {
            var _this3;

            _classCallCheck(this, s);

            _this3 = _super9.call(this, i);
            _this3._choices = t.mapFromArray(i.choices.map(function (r) {
              return r && _typeof(r) == "object" ? r : {
                value: r
              };
            }), "value");
            return _this3;
          }

          _createClass(s, [{
            key: "expected",
            value: function expected(i) {
              var _this4 = this;

              var r = i.descriptor,
                  u = Array.from(this._choices.keys()).map(function (l) {
                return _this4._choices.get(l);
              }).filter(function (l) {
                return !l.deprecated;
              }).map(function (l) {
                return l.value;
              }).sort(t.comparePrimitive).map(r.value),
                  a = u.slice(0, -2),
                  c = u.slice(-2);
              return a.concat(c.join(" or ")).join(", ");
            }
          }, {
            key: "validate",
            value: function validate(i) {
              return this._choices.has(i);
            }
          }, {
            key: "deprecated",
            value: function deprecated(i) {
              var r = this._choices.get(i);

              return r && r.deprecated ? {
                value: i
              } : !1;
            }
          }, {
            key: "forward",
            value: function forward(i) {
              var r = this._choices.get(i);

              return r ? r.forward : void 0;
            }
          }, {
            key: "redirect",
            value: function redirect(i) {
              var r = this._choices.get(i);

              return r ? r.redirect : void 0;
            }
          }]);

          return s;
        }(n.Schema);

        e.ChoiceSchema = s;
      }
    }),
        qi = Z({
      "node_modules/vnopts/lib/schemas/number.js": function node_modulesVnoptsLibSchemasNumberJs(e) {
        "use strict";

        ae(), Object.defineProperty(e, "__esModule", {
          value: !0
        });

        var n = yt(),
            t = /*#__PURE__*/function (_n$Schema5) {
          _inherits(t, _n$Schema5);

          var _super10 = _createSuper(t);

          function t() {
            _classCallCheck(this, t);

            return _super10.apply(this, arguments);
          }

          _createClass(t, [{
            key: "expected",
            value: function expected() {
              return "a number";
            }
          }, {
            key: "validate",
            value: function validate(s, i) {
              return typeof s == "number";
            }
          }]);

          return t;
        }(n.Schema);

        e.NumberSchema = t;
      }
    }),
        zD = Z({
      "node_modules/vnopts/lib/schemas/integer.js": function node_modulesVnoptsLibSchemasIntegerJs(e) {
        "use strict";

        ae(), Object.defineProperty(e, "__esModule", {
          value: !0
        });

        var n = Hn(),
            t = qi(),
            s = /*#__PURE__*/function (_t$NumberSchema) {
          _inherits(s, _t$NumberSchema);

          var _super11 = _createSuper(s);

          function s() {
            _classCallCheck(this, s);

            return _super11.apply(this, arguments);
          }

          _createClass(s, [{
            key: "expected",
            value: function expected() {
              return "an integer";
            }
          }, {
            key: "validate",
            value: function validate(i, r) {
              return r.normalizeValidateResult(_get(_getPrototypeOf(s.prototype), "validate", this).call(this, i, r), i) === !0 && n.isInt(i);
            }
          }]);

          return s;
        }(t.NumberSchema);

        e.IntegerSchema = s;
      }
    }),
        XD = Z({
      "node_modules/vnopts/lib/schemas/string.js": function node_modulesVnoptsLibSchemasStringJs(e) {
        "use strict";

        ae(), Object.defineProperty(e, "__esModule", {
          value: !0
        });

        var n = yt(),
            t = /*#__PURE__*/function (_n$Schema6) {
          _inherits(t, _n$Schema6);

          var _super12 = _createSuper(t);

          function t() {
            _classCallCheck(this, t);

            return _super12.apply(this, arguments);
          }

          _createClass(t, [{
            key: "expected",
            value: function expected() {
              return "a string";
            }
          }, {
            key: "validate",
            value: function validate(s) {
              return typeof s == "string";
            }
          }]);

          return t;
        }(n.Schema);

        e.StringSchema = t;
      }
    }),
        KD = Z({
      "node_modules/vnopts/lib/schemas/index.js": function node_modulesVnoptsLibSchemasIndexJs(e) {
        "use strict";

        ae(), Object.defineProperty(e, "__esModule", {
          value: !0
        });
        var n = (gt(), pt(Dt));
        n.__exportStar($D(), e), n.__exportStar(HD(), e), n.__exportStar(GD(), e), n.__exportStar(JD(), e), n.__exportStar(UD(), e), n.__exportStar(zD(), e), n.__exportStar(qi(), e), n.__exportStar(XD(), e);
      }
    }),
        YD = Z({
      "node_modules/vnopts/lib/defaults.js": function node_modulesVnoptsLibDefaultsJs(e) {
        "use strict";

        ae(), Object.defineProperty(e, "__esModule", {
          value: !0
        });
        var n = ki(),
            t = Li(),
            s = Oi(),
            i = ji();
        e.defaultDescriptor = n.apiDescriptor, e.defaultUnknownHandler = i.levenUnknownHandler, e.defaultInvalidHandler = s.commonInvalidHandler, e.defaultDeprecatedHandler = t.commonDeprecatedHandler;
      }
    }),
        QD = Z({
      "node_modules/vnopts/lib/normalize.js": function node_modulesVnoptsLibNormalizeJs(e) {
        "use strict";

        ae(), Object.defineProperty(e, "__esModule", {
          value: !0
        });
        var n = YD(),
            t = Hn();

        e.normalize = function (i, r, u) {
          return new s(r, u).normalize(i);
        };

        var s = /*#__PURE__*/function () {
          function s(i, r) {
            _classCallCheck(this, s);

            var _ref5 = r || {},
                _ref5$logger = _ref5.logger,
                u = _ref5$logger === void 0 ? console : _ref5$logger,
                _ref5$descriptor = _ref5.descriptor,
                a = _ref5$descriptor === void 0 ? n.defaultDescriptor : _ref5$descriptor,
                _ref5$unknown = _ref5.unknown,
                c = _ref5$unknown === void 0 ? n.defaultUnknownHandler : _ref5$unknown,
                _ref5$invalid = _ref5.invalid,
                l = _ref5$invalid === void 0 ? n.defaultInvalidHandler : _ref5$invalid,
                _ref5$deprecated = _ref5.deprecated,
                C = _ref5$deprecated === void 0 ? n.defaultDeprecatedHandler : _ref5$deprecated;

            this._utils = {
              descriptor: a,
              logger: u || {
                warn: function warn() {}
              },
              schemas: t.recordFromArray(i, "name"),
              normalizeDefaultResult: t.normalizeDefaultResult,
              normalizeDeprecatedResult: t.normalizeDeprecatedResult,
              normalizeForwardResult: t.normalizeForwardResult,
              normalizeRedirectResult: t.normalizeRedirectResult,
              normalizeValidateResult: t.normalizeValidateResult
            }, this._unknownHandler = c, this._invalidHandler = l, this._deprecatedHandler = C, this.cleanHistory();
          }

          _createClass(s, [{
            key: "cleanHistory",
            value: function cleanHistory() {
              this._hasDeprecationWarned = t.createAutoChecklist();
            }
          }, {
            key: "normalize",
            value: function normalize(i) {
              var _this5 = this;

              var r = {},
                  u = [i],
                  a = function a() {
                for (; u.length !== 0;) {
                  var c = u.shift(),
                      l = _this5._applyNormalization(c, r);

                  u.push.apply(u, _toConsumableArray(l));
                }
              };

              a();

              for (var _i4 = 0, _Object$keys = Object.keys(this._utils.schemas); _i4 < _Object$keys.length; _i4++) {
                var c = _Object$keys[_i4];
                var l = this._utils.schemas[c];

                if (!(c in r)) {
                  var C = t.normalizeDefaultResult(l.default(this._utils));
                  "value" in C && u.push(_defineProperty({}, c, C.value));
                }
              }

              a();

              for (var _i5 = 0, _Object$keys2 = Object.keys(this._utils.schemas); _i5 < _Object$keys2.length; _i5++) {
                var _c2 = _Object$keys2[_i5];
                var _l2 = this._utils.schemas[_c2];
                _c2 in r && (r[_c2] = _l2.postprocess(r[_c2], this._utils));
              }

              return r;
            }
          }, {
            key: "_applyNormalization",
            value: function _applyNormalization(i, r) {
              var _this6 = this;

              var u = [],
                  _t$partition = t.partition(Object.keys(i), function (l) {
                return l in _this6._utils.schemas;
              }),
                  _t$partition2 = _slicedToArray(_t$partition, 2),
                  a = _t$partition2[0],
                  c = _t$partition2[1];

              var _iterator18 = _createForOfIteratorHelper(a),
                  _step18;

              try {
                var _loop5 = function _loop5() {
                  var l = _step18.value;
                  var C = _this6._utils.schemas[l],
                      m = C.preprocess(i[l], _this6._utils),
                      g = t.normalizeValidateResult(C.validate(m, _this6._utils), m);

                  if (g !== !0) {
                    var T = g.value,
                        A = _this6._invalidHandler(l, T, _this6._utils);

                    throw typeof A == "string" ? new Error(A) : A;
                  }

                  var p = function p(T) {
                    var A = T.from,
                        b = T.to;
                    u.push(typeof b == "string" ? _defineProperty({}, b, A) : _defineProperty({}, b.key, b.value));
                  },
                      f = function f(T) {
                    var A = T.value,
                        b = T.redirectTo,
                        v = t.normalizeDeprecatedResult(C.deprecated(A, _this6._utils), m, !0);
                    if (v !== !1) if (v === !0) _this6._hasDeprecationWarned(l) || _this6._utils.logger.warn(_this6._deprecatedHandler(l, b, _this6._utils));else {
                      var _iterator20 = _createForOfIteratorHelper(v),
                          _step20;

                      try {
                        for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
                          var B = _step20.value.value;
                          var w = {
                            key: l,
                            value: B
                          };

                          if (!_this6._hasDeprecationWarned(w)) {
                            var I = typeof b == "string" ? {
                              key: b,
                              value: B
                            } : b;

                            _this6._utils.logger.warn(_this6._deprecatedHandler(w, I, _this6._utils));
                          }
                        }
                      } catch (err) {
                        _iterator20.e(err);
                      } finally {
                        _iterator20.f();
                      }
                    }
                  };

                  t.normalizeForwardResult(C.forward(m, _this6._utils), m).forEach(p);
                  var N = t.normalizeRedirectResult(C.redirect(m, _this6._utils), m);

                  if (N.redirect.forEach(p), "remain" in N) {
                    var _T = N.remain;
                    r[l] = l in r ? C.overlap(r[l], _T, _this6._utils) : _T, f({
                      value: _T
                    });
                  }

                  var _iterator21 = _createForOfIteratorHelper(N.redirect),
                      _step21;

                  try {
                    for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
                      var _step21$value = _step21.value,
                          _T2 = _step21$value.from,
                          _A = _step21$value.to;
                      f({
                        value: _T2,
                        redirectTo: _A
                      });
                    }
                  } catch (err) {
                    _iterator21.e(err);
                  } finally {
                    _iterator21.f();
                  }
                };

                for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
                  _loop5();
                }
              } catch (err) {
                _iterator18.e(err);
              } finally {
                _iterator18.f();
              }

              var _iterator19 = _createForOfIteratorHelper(c),
                  _step19;

              try {
                for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
                  var l = _step19.value;

                  var C = i[l],
                      m = this._unknownHandler(l, C, this._utils);

                  if (m) for (var _i6 = 0, _Object$keys3 = Object.keys(m); _i6 < _Object$keys3.length; _i6++) {
                    var g = _Object$keys3[_i6];

                    var p = _defineProperty({}, g, m[g]);

                    g in this._utils.schemas ? u.push(p) : Object.assign(r, p);
                  }
                }
              } catch (err) {
                _iterator19.e(err);
              } finally {
                _iterator19.f();
              }

              return u;
            }
          }]);

          return s;
        }();

        e.Normalizer = s;
      }
    }),
        ZD = Z({
      "node_modules/vnopts/lib/index.js": function node_modulesVnoptsLibIndexJs(e) {
        "use strict";

        ae(), Object.defineProperty(e, "__esModule", {
          value: !0
        });
        var n = (gt(), pt(Dt));
        n.__exportStar(jD(), e), n.__exportStar(WD(), e), n.__exportStar(KD(), e), n.__exportStar(QD(), e), n.__exportStar(yt(), e);
      }
    }),
        em = Z({
      "src/main/options-normalizer.js": function srcMainOptionsNormalizerJs(e, n) {
        "use strict";

        ae();

        var t = ZD(),
            s = st(),
            i = {
          key: function key(g) {
            return g.length === 1 ? "-".concat(g) : "--".concat(g);
          },
          value: function value(g) {
            return t.apiDescriptor.value(g);
          },
          pair: function pair(g) {
            var p = g.key,
                f = g.value;
            return f === !1 ? "--no-".concat(p) : f === !0 ? i.key(p) : f === "" ? "".concat(i.key(p), " without an argument") : "".concat(i.key(p), "=").concat(f);
          }
        },
            r = function r(g) {
          var p = g.colorsModule,
              f = g.levenshteinDistance;
          return /*#__PURE__*/function (_t$ChoiceSchema) {
            _inherits(_class, _t$ChoiceSchema);

            var _super13 = _createSuper(_class);

            function _class(N) {
              var _this7;

              _classCallCheck(this, _class);

              var T = N.name,
                  A = N.flags;
              _this7 = _super13.call(this, {
                name: T,
                choices: A
              });
              _this7._flags = _toConsumableArray(A).sort();
              return _this7;
            }

            _createClass(_class, [{
              key: "preprocess",
              value: function preprocess(N, T) {
                if (typeof N == "string" && N.length > 0 && !this._flags.includes(N)) {
                  var A = this._flags.find(function (b) {
                    return f(b, N) < 3;
                  });

                  if (A) return T.logger.warn(["Unknown flag ".concat(p.yellow(T.descriptor.value(N)), ","), "did you mean ".concat(p.blue(T.descriptor.value(A)), "?")].join(" ")), A;
                }

                return N;
              }
            }, {
              key: "expected",
              value: function expected() {
                return "a flag";
              }
            }]);

            return _class;
          }(t.ChoiceSchema);
        },
            u;

        function a(g, p) {
          var _ref8 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
              f = _ref8.logger,
              _ref8$isCLI = _ref8.isCLI,
              h = _ref8$isCLI === void 0 ? !1 : _ref8$isCLI,
              _ref8$passThrough = _ref8.passThrough,
              N = _ref8$passThrough === void 0 ? !1 : _ref8$passThrough,
              T = _ref8.colorsModule,
              A = _ref8.levenshteinDistance,
              b = N ? Array.isArray(N) ? function (D, d) {
            return N.includes(D) ? _defineProperty({}, D, d) : void 0;
          } : function (D, d) {
            return _defineProperty({}, D, d);
          } : function (D, d, y) {
            var o = y.schemas,
                x = o._,
                F = _n(o, Xf);

            return t.levenUnknownHandler(D, d, Object.assign(Object.assign({}, y), {}, {
              schemas: F
            }));
          },
              v = h ? i : t.apiDescriptor,
              B = c(p, {
            isCLI: h,
            colorsModule: T,
            levenshteinDistance: A
          }),
              w = new t.Normalizer(B, {
            logger: f,
            unknown: b,
            descriptor: v
          }),
              I = f !== !1;

          I && u && (w._hasDeprecationWarned = u);
          var E = w.normalize(g);
          return I && (u = w._hasDeprecationWarned), h && E["plugin-search"] === !1 && (E["plugin-search-dir"] = !1), E;
        }

        function c(g, p) {
          var f = p.isCLI,
              h = p.colorsModule,
              N = p.levenshteinDistance,
              T = [];
          f && T.push(t.AnySchema.create({
            name: "_"
          }));

          var _iterator22 = _createForOfIteratorHelper(g),
              _step22;

          try {
            for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
              var A = _step22.value;
              T.push(l(A, {
                isCLI: f,
                optionInfos: g,
                colorsModule: h,
                levenshteinDistance: N
              })), A.alias && f && T.push(t.AliasSchema.create({
                name: A.alias,
                sourceName: A.name
              }));
            }
          } catch (err) {
            _iterator22.e(err);
          } finally {
            _iterator22.f();
          }

          return T;
        }

        function l(g, p) {
          var f = p.isCLI,
              h = p.optionInfos,
              N = p.colorsModule,
              T = p.levenshteinDistance,
              A = g.name;
          if (A === "plugin-search-dir" || A === "pluginSearchDirs") return t.AnySchema.create({
            name: A,
            preprocess: function preprocess(w) {
              return w === !1 || (w = Array.isArray(w) ? w : [w]), w;
            },
            validate: function validate(w) {
              return w === !1 ? !0 : w.every(function (I) {
                return typeof I == "string";
              });
            },
            expected: function expected() {
              return "false or paths to plugin search dir";
            }
          });
          var b = {
            name: A
          },
              v,
              B = {};

          switch (g.type) {
            case "int":
              v = t.IntegerSchema, f && (b.preprocess = function (w) {
                return Number(w);
              });
              break;

            case "string":
              v = t.StringSchema;
              break;

            case "choice":
              v = t.ChoiceSchema, b.choices = g.choices.map(function (w) {
                return _typeof(w) == "object" && w.redirect ? Object.assign(Object.assign({}, w), {}, {
                  redirect: {
                    to: {
                      key: g.name,
                      value: w.redirect
                    }
                  }
                }) : w;
              });
              break;

            case "boolean":
              v = t.BooleanSchema;
              break;

            case "flag":
              v = r({
                colorsModule: N,
                levenshteinDistance: T
              }), b.flags = h.flatMap(function (w) {
                return [w.alias, w.description && w.name, w.oppositeDescription && "no-".concat(w.name)].filter(Boolean);
              });
              break;

            case "path":
              v = t.StringSchema;
              break;

            default:
              throw new Error("Unexpected type ".concat(g.type));
          }

          if (g.exception ? b.validate = function (w, I, E) {
            return g.exception(w) || I.validate(w, E);
          } : b.validate = function (w, I, E) {
            return w === void 0 || I.validate(w, E);
          }, g.redirect && (B.redirect = function (w) {
            return w ? {
              to: {
                key: g.redirect.option,
                value: g.redirect.value
              }
            } : void 0;
          }), g.deprecated && (B.deprecated = !0), f && !g.array) {
            var w = b.preprocess || function (I) {
              return I;
            };

            b.preprocess = function (I, E, D) {
              return E.preprocess(w(Array.isArray(I) ? s(I) : I), D);
            };
          }

          return g.array ? t.ArraySchema.create(Object.assign(Object.assign(Object.assign({}, f ? {
            preprocess: function preprocess(w) {
              return Array.isArray(w) ? w : [w];
            }
          } : {}), B), {}, {
            valueSchema: v.create(b)
          })) : v.create(Object.assign(Object.assign({}, b), B));
        }

        function C(g, p, f) {
          return a(g, p, f);
        }

        function m(g, p, f) {
          return a(g, p, Object.assign({
            isCLI: !0
          }, f));
        }

        n.exports = {
          normalizeApiOptions: C,
          normalizeCliOptions: m
        };
      }
    }),
        nt = Z({
      "src/language-js/loc.js": function srcLanguageJsLocJs(e, n) {
        "use strict";

        ae();
        var t = Rn();

        function s(c, l) {
          var _ref11 = l || {},
              C = _ref11.ignoreDecorators;

          if (!C) {
            var m = c.declaration && c.declaration.decorators || c.decorators;
            if (t(m)) return s(m[0]);
          }

          return c.range ? c.range[0] : c.start;
        }

        function i(c) {
          return c.range ? c.range[1] : c.end;
        }

        function r(c, l) {
          var C = s(c);
          return Number.isInteger(C) && C === s(l);
        }

        function u(c, l) {
          var C = i(c);
          return Number.isInteger(C) && C === i(l);
        }

        function a(c, l) {
          return r(c, l) && u(c, l);
        }

        n.exports = {
          locStart: s,
          locEnd: i,
          hasSameLocStart: r,
          hasSameLoc: a
        };
      }
    }),
        tm = Z({
      "scripts/build/shims/babel-highlight.cjs": function scriptsBuildShimsBabelHighlightCjs(e, n) {
        "use strict";

        ae();
        var t = Nr(),
            s = {
          shouldHighlight: function shouldHighlight() {
            return !1;
          },
          getChalk: function getChalk() {
            return t;
          }
        };
        n.exports = s;
      }
    }),
        rm = Z({
      "node_modules/@babel/code-frame/lib/index.js": function node_modulesBabelCodeFrameLibIndexJs(e) {
        "use strict";

        ae(), Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.codeFrameColumns = u, e.default = a;
        var n = tm(),
            t = !1;

        function s(c) {
          return {
            gutter: c.grey,
            marker: c.red.bold,
            message: c.red.bold
          };
        }

        var i = /\r\n|[\n\r\u2028\u2029]/;

        function r(c, l, C) {
          var m = Object.assign({
            column: 0,
            line: -1
          }, c.start),
              g = Object.assign({}, m, c.end),
              _ref12 = C || {},
              _ref12$linesAbove = _ref12.linesAbove,
              p = _ref12$linesAbove === void 0 ? 2 : _ref12$linesAbove,
              _ref12$linesBelow = _ref12.linesBelow,
              f = _ref12$linesBelow === void 0 ? 3 : _ref12$linesBelow,
              h = m.line,
              N = m.column,
              T = g.line,
              A = g.column,
              b = Math.max(h - (p + 1), 0),
              v = Math.min(l.length, T + f);

          h === -1 && (b = 0), T === -1 && (v = l.length);
          var B = T - h,
              w = {};
          if (B) for (var I = 0; I <= B; I++) {
            var E = I + h;
            if (!N) w[E] = !0;else if (I === 0) {
              var D = l[E - 1].length;
              w[E] = [N, D - N + 1];
            } else if (I === B) w[E] = [0, A];else {
              var _D2 = l[E - I].length;
              w[E] = [0, _D2];
            }
          } else N === A ? N ? w[h] = [N, 0] : w[h] = !0 : w[h] = [N, A - N];
          return {
            start: b,
            end: v,
            markerLines: w
          };
        }

        function u(c, l) {
          var C = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
              m = (C.highlightCode || C.forceColor) && (0, n.shouldHighlight)(C),
              g = (0, n.getChalk)(C),
              p = s(g),
              f = function f(I, E) {
            return m ? I(E) : E;
          },
              h = c.split(i),
              _r2 = r(l, h, C),
              N = _r2.start,
              T = _r2.end,
              A = _r2.markerLines,
              b = l.start && typeof l.start.column == "number",
              v = String(T).length,
              w = (m ? (0, n.default)(c, C) : c).split(i, T).slice(N, T).map(function (I, E) {
            var D = N + 1 + E,
                d = " ".concat(D).slice(-v),
                y = " ".concat(d, " |"),
                o = A[D],
                x = !A[D + 1];

            if (o) {
              var F = "";

              if (Array.isArray(o)) {
                var S = I.slice(0, Math.max(o[0] - 1, 0)).replace(/[^\t]/g, " "),
                    k = o[1] || 1;
                F = ["\n ", f(p.gutter, y.replace(/\d/g, " ")), " ", S, f(p.marker, "^").repeat(k)].join(""), x && C.message && (F += " " + f(p.message, C.message));
              }

              return [f(p.marker, ">"), f(p.gutter, y), I.length > 0 ? " ".concat(I) : "", F].join("");
            } else return " ".concat(f(p.gutter, y)).concat(I.length > 0 ? " ".concat(I) : "");
          }).join("\n");

          return C.message && !b && (w = "".concat(" ".repeat(v + 1)).concat(C.message, "\n").concat(w)), m ? g.reset(w) : w;
        }

        function a(c, l, C) {
          var m = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};

          if (!t) {
            t = !0;
            var p = "Passing lineNumber and colNumber is deprecated to @babel/code-frame. Please use `codeFrameColumns`.";
            if (xt.emitWarning) xt.emitWarning(p, "DeprecationWarning");else {
              var f = new Error(p);
              f.name = "DeprecationWarning", console.warn(new Error(p));
            }
          }

          return C = Math.max(C, 0), u(c, {
            start: {
              column: C,
              line: l
            }
          }, m);
        }
      }
    }),
        Gn = Z({
      "src/main/parser.js": function srcMainParserJs(e, n) {
        "use strict";

        ae();

        var t = Pi(),
            _Jt = Jt(),
            s = _Jt.ConfigError,
            i = nt(),
            r = i.locStart,
            u = i.locEnd,
            a = Object.getOwnPropertyNames,
            c = Object.getOwnPropertyDescriptor;

        function l(g) {
          var p = {};

          var _iterator23 = _createForOfIteratorHelper(g.plugins),
              _step23;

          try {
            for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
              var f = _step23.value;

              if (!!f.parsers) {
                var _iterator24 = _createForOfIteratorHelper(a(f.parsers)),
                    _step24;

                try {
                  for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
                    var _h3 = _step24.value;
                    Object.defineProperty(p, _h3, c(f.parsers, _h3));
                  }
                } catch (err) {
                  _iterator24.e(err);
                } finally {
                  _iterator24.f();
                }
              }
            }
          } catch (err) {
            _iterator23.e(err);
          } finally {
            _iterator23.f();
          }

          return p;
        }

        function C(g) {
          var p = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : l(g);
          if (typeof g.parser == "function") return {
            parse: g.parser,
            astFormat: "estree",
            locStart: r,
            locEnd: u
          };

          if (typeof g.parser == "string") {
            if (Object.prototype.hasOwnProperty.call(p, g.parser)) return p[g.parser];
            throw new s("Couldn't resolve parser \"".concat(g.parser, '". Parsers must be explicitly added to the standalone bundle.'));
          }
        }

        function m(g, p) {
          var f = l(p),
              h = Object.defineProperties({}, Object.fromEntries(Object.keys(f).map(function (T) {
            return [T, {
              enumerable: !0,
              get: function get() {
                return f[T].parse;
              }
            }];
          }))),
              N = C(p, f);

          try {
            return N.preprocess && (g = N.preprocess(g, p)), {
              text: g,
              ast: N.parse(g, h, p)
            };
          } catch (T) {
            var A = T.loc;

            if (A) {
              var _rm = rm(),
                  b = _rm.codeFrameColumns;

              throw T.codeFrame = b(g, A, {
                highlightCode: !0
              }), T.message += "\n" + T.codeFrame, T;
            }

            throw T.stack;
          }
        }

        n.exports = {
          parse: m,
          resolveParser: C
        };
      }
    }),
        Mi = Z({
      "src/main/options.js": function srcMainOptionsJs(e, n) {
        "use strict";

        ae();

        var t = Pi(),
            _Jt2 = Jt(),
            s = _Jt2.UndefinedParserError,
            _Mn2 = Mn(),
            i = _Mn2.getSupportInfo,
            r = em(),
            _Gn = Gn(),
            u = _Gn.resolveParser,
            a = {
          astFormat: "estree",
          printer: {},
          originalText: void 0,
          locStart: null,
          locEnd: null
        };

        function c(m) {
          var g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
              p = Object.assign({}, m),
              f = i({
            plugins: m.plugins,
            showUnreleased: !0,
            showDeprecated: !0
          }).options,
              h = Object.assign(Object.assign({}, a), Object.fromEntries(f.filter(function (v) {
            return v.default !== void 0;
          }).map(function (v) {
            return [v.name, v.default];
          })));

          if (!p.parser) {
            if (!p.filepath) (g.logger || console).warn("No parser and no filepath given, using 'babel' the parser now but this will throw an error in the future. Please specify a parser or a filepath so one can be inferred."), p.parser = "babel";else if (p.parser = C(p.filepath, p.plugins), !p.parser) throw new s("No parser could be inferred for file: ".concat(p.filepath));
          }

          var N = u(r.normalizeApiOptions(p, [f.find(function (v) {
            return v.name === "parser";
          })], {
            passThrough: !0,
            logger: !1
          }));
          p.astFormat = N.astFormat, p.locEnd = N.locEnd, p.locStart = N.locStart;
          var T = l(p);
          p.printer = T.printers[p.astFormat];
          var A = Object.fromEntries(f.filter(function (v) {
            return v.pluginDefaults && v.pluginDefaults[T.name] !== void 0;
          }).map(function (v) {
            return [v.name, v.pluginDefaults[T.name]];
          })),
              b = Object.assign(Object.assign({}, h), A);

          for (var _i7 = 0, _Object$entries = Object.entries(b); _i7 < _Object$entries.length; _i7++) {
            var _Object$entries$_i = _slicedToArray(_Object$entries[_i7], 2),
                v = _Object$entries$_i[0],
                B = _Object$entries$_i[1];

            (p[v] === null || p[v] === void 0) && (p[v] = B);
          }

          return p.parser === "json" && (p.trailingComma = "none"), r.normalizeApiOptions(p, f, Object.assign({
            passThrough: Object.keys(a)
          }, g));
        }

        function l(m) {
          var g = m.astFormat;
          if (!g) throw new Error("getPlugin() requires astFormat to be set");
          var p = m.plugins.find(function (f) {
            return f.printers && f.printers[g];
          });
          if (!p) throw new Error("Couldn't find plugin for AST format \"".concat(g, '"'));
          return p;
        }

        function C(m, g) {
          var p = t.basename(m).toLowerCase(),
              h = i({
            plugins: g
          }).languages.filter(function (N) {
            return N.since !== null;
          }).find(function (N) {
            return N.extensions && N.extensions.some(function (T) {
              return p.endsWith(T);
            }) || N.filenames && N.filenames.some(function (T) {
              return T.toLowerCase() === p;
            });
          });
          return h && h.parsers[0];
        }

        n.exports = {
          normalize: c,
          hiddenDefaults: a,
          inferParser: C
        };
      }
    }),
        nm = Z({
      "src/main/massage-ast.js": function srcMainMassageAstJs(e, n) {
        "use strict";

        ae();

        function t(s, i, r) {
          if (Array.isArray(s)) return s.map(function (l) {
            return t(l, i, r);
          }).filter(Boolean);
          if (!s || _typeof(s) != "object") return s;
          var u = i.printer.massageAstNode,
              a;
          u && u.ignoredProperties ? a = u.ignoredProperties : a = new Set();
          var c = {};

          for (var _i8 = 0, _Object$entries2 = Object.entries(s); _i8 < _Object$entries2.length; _i8++) {
            var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i8], 2),
                l = _Object$entries2$_i[0],
                C = _Object$entries2$_i[1];

            !a.has(l) && typeof C != "function" && (c[l] = t(C, i, s));
          }

          if (u) {
            var _l3 = u(s, c, r);

            if (_l3 === null) return;
            if (_l3) return _l3;
          }

          return c;
        }

        n.exports = t;
      }
    }),
        Ut = Z({
      "scripts/build/shims/assert.cjs": function scriptsBuildShimsAssertCjs(e, n) {
        "use strict";

        ae();

        var t = function t() {};

        t.ok = t, t.strictEqual = t, n.exports = t;
      }
    }),
        Qe = Z({
      "src/main/comments.js": function srcMainCommentsJs(e, n) {
        "use strict";

        ae();

        var t = Ut(),
            _Le = Le(),
            _Le$builders = _Le.builders,
            s = _Le$builders.line,
            i = _Le$builders.hardline,
            r = _Le$builders.breakParent,
            u = _Le$builders.indent,
            a = _Le$builders.lineSuffix,
            c = _Le$builders.join,
            l = _Le$builders.cursor,
            _Ge = Ge(),
            C = _Ge.hasNewline,
            m = _Ge.skipNewline,
            g = _Ge.skipSpaces,
            p = _Ge.isPreviousLineEmpty,
            f = _Ge.addLeadingComment,
            h = _Ge.addDanglingComment,
            N = _Ge.addTrailingComment,
            T = new WeakMap();

        function A(O, R, M) {
          if (!O) return;
          var H = R.printer,
              P = R.locStart,
              G = R.locEnd;

          if (M) {
            if (H.canAttachComment && H.canAttachComment(O)) {
              var $;

              for ($ = M.length - 1; $ >= 0 && !(P(M[$]) <= P(O) && G(M[$]) <= G(O)); --$) {
                ;
              }

              M.splice($ + 1, 0, O);
              return;
            }
          } else if (T.has(O)) return T.get(O);

          var re = H.getCommentChildNodes && H.getCommentChildNodes(O, R) || _typeof(O) == "object" && Object.entries(O).filter(function ($) {
            var _$ = _slicedToArray($, 1),
                W = _$[0];

            return W !== "enclosingNode" && W !== "precedingNode" && W !== "followingNode" && W !== "tokens" && W !== "comments" && W !== "parent";
          }).map(function ($) {
            var _$2 = _slicedToArray($, 2),
                W = _$2[1];

            return W;
          });

          if (!!re) {
            M || (M = [], T.set(O, M));

            var _iterator25 = _createForOfIteratorHelper(re),
                _step25;

            try {
              for (_iterator25.s(); !(_step25 = _iterator25.n()).done;) {
                var _$3 = _step25.value;
                A(_$3, R, M);
              }
            } catch (err) {
              _iterator25.e(err);
            } finally {
              _iterator25.f();
            }

            return M;
          }
        }

        function b(O, R, M, H) {
          var P = M.locStart,
              G = M.locEnd,
              re = P(R),
              $ = G(R),
              W = A(O, M),
              ee,
              U,
              ne = 0,
              se = W.length;

          for (; ne < se;) {
            var V = ne + se >> 1,
                oe = W[V],
                K = P(oe),
                Ee = G(oe);
            if (K <= re && $ <= Ee) return b(oe, R, M, oe);

            if (Ee <= re) {
              ee = oe, ne = V + 1;
              continue;
            }

            if ($ <= K) {
              U = oe, se = V;
              continue;
            }

            throw new Error("Comment location overlaps with node location");
          }

          if (H && H.type === "TemplateLiteral") {
            var _V = H.quasis,
                _oe = y(_V, R, M);

            ee && y(_V, ee, M) !== _oe && (ee = null), U && y(_V, U, M) !== _oe && (U = null);
          }

          return {
            enclosingNode: H,
            precedingNode: ee,
            followingNode: U
          };
        }

        var v = function v() {
          return !1;
        };

        function B(O, R, M, H) {
          if (!Array.isArray(O)) return;
          var P = [],
              G = H.locStart,
              re = H.locEnd,
              _H$printer$handleComm = H.printer.handleComments,
              $ = _H$printer$handleComm === void 0 ? {} : _H$printer$handleComm,
              W = $.avoidAstMutation,
              _$$ownLine = $.ownLine,
              ee = _$$ownLine === void 0 ? v : _$$ownLine,
              _$$endOfLine = $.endOfLine,
              U = _$$endOfLine === void 0 ? v : _$$endOfLine,
              _$$remaining = $.remaining,
              ne = _$$remaining === void 0 ? v : _$$remaining,
              se = O.map(function (V, oe) {
            return Object.assign(Object.assign({}, b(R, V, H)), {}, {
              comment: V,
              text: M,
              options: H,
              ast: R,
              isLastComment: O.length - 1 === oe
            });
          });

          var _iterator26 = _createForOfIteratorHelper(se.entries()),
              _step26;

          try {
            for (_iterator26.s(); !(_step26 = _iterator26.n()).done;) {
              var _step26$value = _slicedToArray(_step26.value, 2),
                  _V2 = _step26$value[0],
                  oe = _step26$value[1];

              var K = oe.comment,
                  Ee = oe.precedingNode,
                  q = oe.enclosingNode,
                  le = oe.followingNode,
                  ue = oe.text,
                  Q = oe.options,
                  de = oe.ast,
                  ge = oe.isLastComment;

              if (Q.parser === "json" || Q.parser === "json5" || Q.parser === "__js_expression" || Q.parser === "__vue_expression") {
                if (G(K) - G(de) <= 0) {
                  f(de, K);
                  continue;
                }

                if (re(K) - re(de) >= 0) {
                  N(de, K);
                  continue;
                }
              }

              var ve = void 0;
              if (W ? ve = [oe] : (K.enclosingNode = q, K.precedingNode = Ee, K.followingNode = le, ve = [K, ue, Q, de, ge]), I(ue, Q, se, _V2)) K.placement = "ownLine", ee.apply(void 0, _toConsumableArray(ve)) || (le ? f(le, K) : Ee ? N(Ee, K) : h(q || de, K));else if (E(ue, Q, se, _V2)) K.placement = "endOfLine", U.apply(void 0, _toConsumableArray(ve)) || (Ee ? N(Ee, K) : le ? f(le, K) : h(q || de, K));else if (K.placement = "remaining", !ne.apply(void 0, _toConsumableArray(ve))) if (Ee && le) {
                var xe = P.length;
                xe > 0 && P[xe - 1].followingNode !== le && D(P, ue, Q), P.push(oe);
              } else Ee ? N(Ee, K) : le ? f(le, K) : h(q || de, K);
            }
          } catch (err) {
            _iterator26.e(err);
          } finally {
            _iterator26.f();
          }

          if (D(P, M, H), !W) {
            var _iterator27 = _createForOfIteratorHelper(O),
                _step27;

            try {
              for (_iterator27.s(); !(_step27 = _iterator27.n()).done;) {
                var V = _step27.value;
                delete V.precedingNode, delete V.enclosingNode, delete V.followingNode;
              }
            } catch (err) {
              _iterator27.e(err);
            } finally {
              _iterator27.f();
            }
          }
        }

        var w = function w(O) {
          return !/[\S\n\u2028\u2029]/.test(O);
        };

        function I(O, R, M, H) {
          var _M$H = M[H],
              P = _M$H.comment,
              G = _M$H.precedingNode,
              re = R.locStart,
              $ = R.locEnd,
              W = re(P);
          if (G) for (var ee = H - 1; ee >= 0; ee--) {
            var _M$ee = M[ee],
                U = _M$ee.comment,
                ne = _M$ee.precedingNode;
            if (ne !== G || !w(O.slice($(U), W))) break;
            W = re(U);
          }
          return C(O, W, {
            backwards: !0
          });
        }

        function E(O, R, M, H) {
          var _M$H2 = M[H],
              P = _M$H2.comment,
              G = _M$H2.followingNode,
              re = R.locStart,
              $ = R.locEnd,
              W = $(P);
          if (G) for (var ee = H + 1; ee < M.length; ee++) {
            var _M$ee2 = M[ee],
                U = _M$ee2.comment,
                ne = _M$ee2.followingNode;
            if (ne !== G || !w(O.slice(W, re(U)))) break;
            W = $(U);
          }
          return C(O, W);
        }

        function D(O, R, M) {
          var H = O.length;
          if (H === 0) return;
          var _O$ = O[0],
              P = _O$.precedingNode,
              G = _O$.followingNode,
              re = _O$.enclosingNode,
              $ = M.printer.getGapRegex && M.printer.getGapRegex(re) || /^[\s(]*$/,
              W = M.locStart(G),
              ee;

          for (ee = H; ee > 0; --ee) {
            var _O10 = O[ee - 1],
                U = _O10.comment,
                ne = _O10.precedingNode,
                se = _O10.followingNode;
            t.strictEqual(ne, P), t.strictEqual(se, G);
            var V = R.slice(M.locEnd(U), W);
            if ($.test(V)) W = M.locStart(U);else break;
          }

          var _iterator28 = _createForOfIteratorHelper(O.entries()),
              _step28;

          try {
            for (_iterator28.s(); !(_step28 = _iterator28.n()).done;) {
              var _step28$value = _slicedToArray(_step28.value, 2),
                  _U2 = _step28$value[0],
                  _ne = _step28$value[1].comment;

              _U2 < ee ? N(P, _ne) : f(G, _ne);
            }
          } catch (err) {
            _iterator28.e(err);
          } finally {
            _iterator28.f();
          }

          for (var _i9 = 0, _arr2 = [P, G]; _i9 < _arr2.length; _i9++) {
            var _U = _arr2[_i9];
            _U.comments && _U.comments.length > 1 && _U.comments.sort(function (ne, se) {
              return M.locStart(ne) - M.locStart(se);
            });
          }

          O.length = 0;
        }

        function d(O, R) {
          var M = O.getValue();
          return M.printed = !0, R.printer.printComment(O, R);
        }

        function y(O, R, M) {
          var H = M.locStart(R) - 1;

          for (var P = 1; P < O.length; ++P) {
            if (H < M.locStart(O[P])) return P - 1;
          }

          return 0;
        }

        function o(O, R) {
          var M = O.getValue(),
              H = [d(O, R)],
              P = R.printer,
              G = R.originalText,
              re = R.locStart,
              $ = R.locEnd;

          if (P.isBlockComment && P.isBlockComment(M)) {
            var U = C(G, $(M)) ? C(G, re(M), {
              backwards: !0
            }) ? i : s : " ";
            H.push(U);
          } else H.push(i);

          var ee = m(G, g(G, $(M)));
          return ee !== !1 && C(G, ee) && H.push(i), H;
        }

        function x(O, R) {
          var M = O.getValue(),
              H = d(O, R),
              P = R.printer,
              G = R.originalText,
              re = R.locStart,
              $ = P.isBlockComment && P.isBlockComment(M);

          if (C(G, re(M), {
            backwards: !0
          })) {
            var ee = p(G, M, re);
            return a([i, ee ? i : "", H]);
          }

          var W = [" ", H];
          return $ || (W = [a(W), r]), W;
        }

        function F(O, R, M, H) {
          var P = [],
              G = O.getValue();
          return !G || !G.comments || (O.each(function () {
            var re = O.getValue();
            !re.leading && !re.trailing && (!H || H(re)) && P.push(d(O, R));
          }, "comments"), P.length === 0) ? "" : M ? c(i, P) : u([i, c(i, P)]);
        }

        function S(O, R, M) {
          var H = O.getValue();
          if (!H) return {};
          var P = H.comments || [];
          M && (P = P.filter(function (W) {
            return !M.has(W);
          }));
          var G = H === R.cursorNode;

          if (P.length === 0) {
            var W = G ? l : "";
            return {
              leading: W,
              trailing: W
            };
          }

          var re = [],
              $ = [];
          return O.each(function () {
            var W = O.getValue();
            if (M && M.has(W)) return;
            var ee = W.leading,
                U = W.trailing;
            ee ? re.push(o(O, R)) : U && $.push(x(O, R));
          }, "comments"), G && (re.unshift(l), $.push(l)), {
            leading: re,
            trailing: $
          };
        }

        function k(O, R, M, H) {
          var _S2 = S(O, M, H),
              P = _S2.leading,
              G = _S2.trailing;

          return !P && !G ? R : [P, R, G];
        }

        function _(O) {
          if (!!O) {
            var _iterator29 = _createForOfIteratorHelper(O),
                _step29;

            try {
              for (_iterator29.s(); !(_step29 = _iterator29.n()).done;) {
                var R = _step29.value;
                if (!R.printed) throw new Error('Comment "' + R.value.trim() + '" was not printed. Please report this error!');
                delete R.printed;
              }
            } catch (err) {
              _iterator29.e(err);
            } finally {
              _iterator29.f();
            }
          }
        }

        n.exports = {
          attach: B,
          printComments: k,
          printCommentsSeparately: S,
          printDanglingComments: F,
          getSortedChildNodes: A,
          ensureAllCommentsPrinted: _
        };
      }
    }),
        um = Z({
      "src/common/ast-path.js": function srcCommonAstPathJs(e, n) {
        "use strict";

        ae();
        var t = st();

        function s(u, a) {
          var c = i(u.stack, a);
          return c === -1 ? null : u.stack[c];
        }

        function i(u, a) {
          for (var c = u.length - 1; c >= 0; c -= 2) {
            var l = u[c];
            if (l && !Array.isArray(l) && --a < 0) return c;
          }

          return -1;
        }

        var r = /*#__PURE__*/function () {
          function r(u) {
            _classCallCheck(this, r);

            this.stack = [u];
          }

          _createClass(r, [{
            key: "getName",
            value: function getName() {
              var u = this.stack,
                  a = u.length;
              return a > 1 ? u[a - 2] : null;
            }
          }, {
            key: "getValue",
            value: function getValue() {
              return t(this.stack);
            }
          }, {
            key: "getNode",
            value: function getNode() {
              var u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
              return s(this, u);
            }
          }, {
            key: "getParentNode",
            value: function getParentNode() {
              var u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
              return s(this, u + 1);
            }
          }, {
            key: "call",
            value: function call(u) {
              var a = this.stack,
                  c = a.length,
                  l = t(a);

              for (var C = arguments.length, m = new Array(C > 1 ? C - 1 : 0), g = 1; g < C; g++) {
                m[g - 1] = arguments[g];
              }

              for (var _i10 = 0, _m2 = m; _i10 < _m2.length; _i10++) {
                var f = _m2[_i10];
                l = l[f], a.push(f, l);
              }

              var p = u(this);
              return a.length = c, p;
            }
          }, {
            key: "callParent",
            value: function callParent(u) {
              var _this$stack;

              var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
                  c = i(this.stack, a + 1),
                  l = this.stack.splice(c + 1),
                  C = u(this);
              return (_this$stack = this.stack).push.apply(_this$stack, _toConsumableArray(l)), C;
            }
          }, {
            key: "each",
            value: function each(u) {
              var a = this.stack,
                  c = a.length,
                  l = t(a);

              for (var C = arguments.length, m = new Array(C > 1 ? C - 1 : 0), g = 1; g < C; g++) {
                m[g - 1] = arguments[g];
              }

              for (var _i11 = 0, _m3 = m; _i11 < _m3.length; _i11++) {
                var p = _m3[_i11];
                l = l[p], a.push(p, l);
              }

              for (var _p3 = 0; _p3 < l.length; ++_p3) {
                a.push(_p3, l[_p3]), u(this, _p3, l), a.length -= 2;
              }

              a.length = c;
            }
          }, {
            key: "map",
            value: function map(u) {
              var a = [];

              for (var c = arguments.length, l = new Array(c > 1 ? c - 1 : 0), C = 1; C < c; C++) {
                l[C - 1] = arguments[C];
              }

              return this.each.apply(this, [function (m, g, p) {
                a[g] = u(m, g, p);
              }].concat(l)), a;
            }
          }, {
            key: "try",
            value: function _try(u) {
              var a = this.stack,
                  c = _toConsumableArray(a);

              try {
                return u();
              } finally {
                a.length = 0, a.push.apply(a, _toConsumableArray(c));
              }
            }
          }, {
            key: "match",
            value: function match() {
              var u = this.stack.length - 1,
                  a = null,
                  c = this.stack[u--];

              for (var l = arguments.length, C = new Array(l), m = 0; m < l; m++) {
                C[m] = arguments[m];
              }

              for (var _i12 = 0, _C = C; _i12 < _C.length; _i12++) {
                var g = _C[_i12];
                if (c === void 0) return !1;
                var p = null;
                if (typeof a == "number" && (p = a, a = this.stack[u--], c = this.stack[u--]), g && !g(c, a, p)) return !1;
                a = this.stack[u--], c = this.stack[u--];
              }

              return !0;
            }
          }, {
            key: "findAncestor",
            value: function findAncestor(u) {
              var a = this.stack.length - 1,
                  c = null,
                  l = this.stack[a--];

              for (; l;) {
                var C = null;
                if (typeof c == "number" && (C = c, c = this.stack[a--], l = this.stack[a--]), c !== null && u(l, c, C)) return l;
                c = this.stack[a--], l = this.stack[a--];
              }
            }
          }]);

          return r;
        }();

        n.exports = r;
      }
    }),
        sm = Z({
      "src/main/multiparser.js": function srcMainMultiparserJs(e, n) {
        "use strict";

        ae();

        var _Le2 = Le(),
            t = _Le2.utils.stripTrailingHardline,
            _Mi = Mi(),
            s = _Mi.normalize,
            i = Qe();

        function r(a, c, l, C) {
          if (l.printer.embed && l.embeddedLanguageFormatting === "auto") return l.printer.embed(a, c, function (m, g, p) {
            return u(m, g, l, C, p);
          }, l);
        }

        function u(a, c, l, C) {
          var _ref13 = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {},
              _ref13$stripTrailingH = _ref13.stripTrailingHardline,
              m = _ref13$stripTrailingH === void 0 ? !1 : _ref13$stripTrailingH,
              g = s(Object.assign(Object.assign(Object.assign({}, l), c), {}, {
            parentParser: l.parser,
            originalText: a
          }), {
            passThrough: !0
          }),
              p = Gn().parse(a, g),
              f = p.ast;

          a = p.text;
          var h = f.comments;
          delete f.comments, i.attach(h, f, a, g), g[Symbol.for("comments")] = h || [], g[Symbol.for("tokens")] = f.tokens || [];
          var N = C(f, g);
          return i.ensureAllCommentsPrinted(h), m ? typeof N == "string" ? N.replace(/(?:\r?\n)*$/, "") : t(N) : N;
        }

        n.exports = {
          printSubtree: r
        };
      }
    }),
        am = Z({
      "src/main/ast-to-doc.js": function srcMainAstToDocJs(e, n) {
        "use strict";

        ae();

        var t = um(),
            _Le3 = Le(),
            _Le3$builders = _Le3.builders,
            s = _Le3$builders.hardline,
            i = _Le3$builders.addAlignmentToDoc,
            r = _Le3.utils.propagateBreaks,
            _Qe = Qe(),
            u = _Qe.printComments,
            a = sm();

        function c(m, g) {
          var p = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0,
              f = g.printer;
          f.preprocess && (m = f.preprocess(m, g));
          var h = new Map(),
              N = new t(m),
              T = A();
          return p > 0 && (T = i([s, T], p, g.tabWidth)), r(T), T;

          function A(v, B) {
            return v === void 0 || v === N ? b(B) : Array.isArray(v) ? N.call.apply(N, [function () {
              return b(B);
            }].concat(_toConsumableArray(v))) : N.call(function () {
              return b(B);
            }, v);
          }

          function b(v) {
            var B = N.getValue(),
                w = B && _typeof(B) == "object" && v === void 0;
            if (w && h.has(B)) return h.get(B);
            var I = C(N, g, A, v);
            return w && h.set(B, I), I;
          }
        }

        function l(m, g) {
          var p = g.originalText,
              f = g[Symbol.for("comments")],
              h = g.locStart,
              N = g.locEnd,
              T = h(m),
              A = N(m),
              b = new Set();

          var _iterator30 = _createForOfIteratorHelper(f),
              _step30;

          try {
            for (_iterator30.s(); !(_step30 = _iterator30.n()).done;) {
              var v = _step30.value;
              h(v) >= T && N(v) <= A && (v.printed = !0, b.add(v));
            }
          } catch (err) {
            _iterator30.e(err);
          } finally {
            _iterator30.f();
          }

          return {
            doc: p.slice(T, A),
            printedComments: b
          };
        }

        function C(m, g, p, f) {
          var h = m.getValue(),
              N = g.printer,
              T,
              A;

          if (N.hasPrettierIgnore && N.hasPrettierIgnore(m)) {
            var _l4 = l(h, g);

            T = _l4.doc;
            A = _l4.printedComments;
          } else {
            if (h) try {
              T = a.printSubtree(m, p, g, c);
            } catch (b) {
              if (globalThis.PRETTIER_DEBUG) throw b;
            }
            T || (T = N.print(m, g, p, f));
          }

          return (!N.willPrintOwnComments || !N.willPrintOwnComments(m, g)) && (T = u(m, T, g, A)), T;
        }

        n.exports = c;
      }
    }),
        im = Z({
      "src/main/range-util.js": function srcMainRangeUtilJs(e, n) {
        "use strict";

        ae();

        var t = Ut(),
            s = Qe(),
            i = function i(f) {
          var h = f.parser;
          return h === "json" || h === "json5" || h === "json-stringify";
        };

        function r(f, h) {
          var N = [f.node].concat(_toConsumableArray(f.parentNodes)),
              T = new Set([h.node].concat(_toConsumableArray(h.parentNodes)));
          return N.find(function (A) {
            return C.has(A.type) && T.has(A);
          });
        }

        function u(f) {
          var h = f.length - 1;

          for (;;) {
            var _N3 = f[h];
            if (_N3 && (_N3.type === "Program" || _N3.type === "File")) h--;else break;
          }

          return f.slice(0, h + 1);
        }

        function a(f, h, N) {
          var T = N.locStart,
              A = N.locEnd,
              b = f.node,
              v = h.node;
          if (b === v) return {
            startNode: b,
            endNode: v
          };
          var B = T(f.node);

          var _iterator31 = _createForOfIteratorHelper(u(h.parentNodes)),
              _step31;

          try {
            for (_iterator31.s(); !(_step31 = _iterator31.n()).done;) {
              var I = _step31.value;
              if (T(I) >= B) v = I;else break;
            }
          } catch (err) {
            _iterator31.e(err);
          } finally {
            _iterator31.f();
          }

          var w = A(h.node);

          var _iterator32 = _createForOfIteratorHelper(u(f.parentNodes)),
              _step32;

          try {
            for (_iterator32.s(); !(_step32 = _iterator32.n()).done;) {
              var _I = _step32.value;
              if (A(_I) <= w) b = _I;else break;
            }
          } catch (err) {
            _iterator32.e(err);
          } finally {
            _iterator32.f();
          }

          return {
            startNode: b,
            endNode: v
          };
        }

        function c(f, h, N, T) {
          var A = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : [],
              b = arguments.length > 5 ? arguments[5] : void 0,
              v = N.locStart,
              B = N.locEnd,
              w = v(f),
              I = B(f);

          if (!(h > I || h < w || b === "rangeEnd" && h === w || b === "rangeStart" && h === I)) {
            var _iterator33 = _createForOfIteratorHelper(s.getSortedChildNodes(f, N)),
                _step33;

            try {
              for (_iterator33.s(); !(_step33 = _iterator33.n()).done;) {
                var E = _step33.value;
                var D = c(E, h, N, T, [f].concat(_toConsumableArray(A)), b);
                if (D) return D;
              }
            } catch (err) {
              _iterator33.e(err);
            } finally {
              _iterator33.f();
            }

            if (!T || T(f, A[0])) return {
              node: f,
              parentNodes: A
            };
          }
        }

        function l(f, h) {
          return h !== "DeclareExportDeclaration" && f !== "TypeParameterDeclaration" && (f === "Directive" || f === "TypeAlias" || f === "TSExportAssignment" || f.startsWith("Declare") || f.startsWith("TSDeclare") || f.endsWith("Statement") || f.endsWith("Declaration"));
        }

        var C = new Set(["ObjectExpression", "ArrayExpression", "StringLiteral", "NumericLiteral", "BooleanLiteral", "NullLiteral", "UnaryExpression", "TemplateLiteral"]),
            m = new Set(["OperationDefinition", "FragmentDefinition", "VariableDefinition", "TypeExtensionDefinition", "ObjectTypeDefinition", "FieldDefinition", "DirectiveDefinition", "EnumTypeDefinition", "EnumValueDefinition", "InputValueDefinition", "InputObjectTypeDefinition", "SchemaDefinition", "OperationTypeDefinition", "InterfaceTypeDefinition", "UnionTypeDefinition", "ScalarTypeDefinition"]);

        function g(f, h, N) {
          if (!h) return !1;

          switch (f.parser) {
            case "flow":
            case "babel":
            case "babel-flow":
            case "babel-ts":
            case "typescript":
            case "acorn":
            case "espree":
            case "meriyah":
            case "__babel_estree":
              return l(h.type, N && N.type);

            case "json":
            case "json5":
            case "json-stringify":
              return C.has(h.type);

            case "graphql":
              return m.has(h.kind);

            case "vue":
              return h.tag !== "root";
          }

          return !1;
        }

        function p(f, h, N) {
          var T = h.rangeStart,
              A = h.rangeEnd,
              b = h.locStart,
              v = h.locEnd;
          t.ok(A > T);
          var B = f.slice(T, A).search(/\S/),
              w = B === -1;
          if (!w) for (T += B; A > T && !/\S/.test(f[A - 1]); --A) {
            ;
          }
          var I = c(N, T, h, function (y, o) {
            return g(h, y, o);
          }, [], "rangeStart"),
              E = w ? I : c(N, A, h, function (y) {
            return g(h, y);
          }, [], "rangeEnd");
          if (!I || !E) return {
            rangeStart: 0,
            rangeEnd: 0
          };
          var D, d;

          if (i(h)) {
            var y = r(I, E);
            D = y, d = y;
          } else {
            var _a2 = a(I, E, h);

            D = _a2.startNode;
            d = _a2.endNode;
          }

          return {
            rangeStart: Math.min(b(D), b(d)),
            rangeEnd: Math.max(v(D), v(d))
          };
        }

        n.exports = {
          calculateRange: p,
          findNodeAtOffset: c
        };
      }
    }),
        om = Z({
      "src/main/core.js": function srcMainCoreJs(e, n) {
        "use strict";

        ae();

        var _rD = rD(),
            t = _rD.diffArrays,
            _Le4 = Le(),
            s = _Le4.printer.printDocToString,
            i = _Le4.debug.printDocToDebug,
            _Ge2 = Ge(),
            r = _Ge2.getAlignmentSize,
            _On2 = On(),
            u = _On2.guessEndOfLine,
            a = _On2.convertEndOfLineToChars,
            c = _On2.countEndOfLineChars,
            l = _On2.normalizeEndOfLine,
            C = Mi().normalize,
            m = nm(),
            g = Qe(),
            p = Gn(),
            f = am(),
            h = im(),
            N = "\uFEFF",
            T = Symbol("cursor");

        function A(d, y, o) {
          var x = y.comments;
          return x && (delete y.comments, g.attach(x, y, d, o)), o[Symbol.for("comments")] = x || [], o[Symbol.for("tokens")] = y.tokens || [], o.originalText = d, x;
        }

        function b(d, y) {
          var o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
          if (!d || d.trim().length === 0) return {
            formatted: "",
            cursorOffset: -1,
            comments: []
          };

          var _p$parse = p.parse(d, y),
              x = _p$parse.ast,
              F = _p$parse.text;

          if (y.cursorOffset >= 0) {
            var O = h.findNodeAtOffset(x, y.cursorOffset, y);
            O && O.node && (y.cursorNode = O.node);
          }

          var S = A(F, x, y),
              k = f(x, y, o),
              _ = s(k, y);

          if (g.ensureAllCommentsPrinted(S), o > 0) {
            var _O11 = _.formatted.trim();

            _.cursorNodeStart !== void 0 && (_.cursorNodeStart -= _.formatted.indexOf(_O11)), _.formatted = _O11 + a(y.endOfLine);
          }

          if (y.cursorOffset >= 0) {
            var _O12, R, M, H, P;

            if (y.cursorNode && _.cursorNodeText ? (_O12 = y.locStart(y.cursorNode), R = F.slice(_O12, y.locEnd(y.cursorNode)), M = y.cursorOffset - _O12, H = _.cursorNodeStart, P = _.cursorNodeText) : (_O12 = 0, R = F, M = y.cursorOffset, H = 0, P = _.formatted), R === P) return {
              formatted: _.formatted,
              cursorOffset: H + M,
              comments: S
            };

            var G = _toConsumableArray(R);

            G.splice(M, 0, T);

            var re = _toConsumableArray(P),
                $ = t(G, re),
                W = H;

            var _iterator34 = _createForOfIteratorHelper($),
                _step34;

            try {
              for (_iterator34.s(); !(_step34 = _iterator34.n()).done;) {
                var ee = _step34.value;

                if (ee.removed) {
                  if (ee.value.includes(T)) break;
                } else W += ee.count;
              }
            } catch (err) {
              _iterator34.e(err);
            } finally {
              _iterator34.f();
            }

            return {
              formatted: _.formatted,
              cursorOffset: W,
              comments: S
            };
          }

          return {
            formatted: _.formatted,
            cursorOffset: -1,
            comments: S
          };
        }

        function v(d, y) {
          var _p$parse2 = p.parse(d, y),
              o = _p$parse2.ast,
              x = _p$parse2.text,
              _h$calculateRange = h.calculateRange(x, y, o),
              F = _h$calculateRange.rangeStart,
              S = _h$calculateRange.rangeEnd,
              k = x.slice(F, S),
              _ = Math.min(F, x.lastIndexOf("\n", F) + 1),
              O = x.slice(_, F).match(/^\s*/)[0],
              R = r(O, y.tabWidth),
              M = b(k, Object.assign(Object.assign({}, y), {}, {
            rangeStart: 0,
            rangeEnd: Number.POSITIVE_INFINITY,
            cursorOffset: y.cursorOffset > F && y.cursorOffset <= S ? y.cursorOffset - F : -1,
            endOfLine: "lf"
          }), R),
              H = M.formatted.trimEnd(),
              P = y.cursorOffset;

          P > S ? P += H.length - k.length : M.cursorOffset >= 0 && (P = M.cursorOffset + F);
          var G = x.slice(0, F) + H + x.slice(S);

          if (y.endOfLine !== "lf") {
            var re = a(y.endOfLine);
            P >= 0 && re === "\r\n" && (P += c(G.slice(0, P), "\n")), G = G.replace(/\n/g, re);
          }

          return {
            formatted: G,
            cursorOffset: P,
            comments: M.comments
          };
        }

        function B(d, y, o) {
          return typeof y != "number" || Number.isNaN(y) || y < 0 || y > d.length ? o : y;
        }

        function w(d, y) {
          var o = y.cursorOffset,
              x = y.rangeStart,
              F = y.rangeEnd;
          return o = B(d, o, -1), x = B(d, x, 0), F = B(d, F, d.length), Object.assign(Object.assign({}, y), {}, {
            cursorOffset: o,
            rangeStart: x,
            rangeEnd: F
          });
        }

        function I(d, y) {
          var _w = w(d, y),
              o = _w.cursorOffset,
              x = _w.rangeStart,
              F = _w.rangeEnd,
              S = _w.endOfLine,
              k = d.charAt(0) === N;

          if (k && (d = d.slice(1), o--, x--, F--), S === "auto" && (S = u(d)), d.includes("\r")) {
            var _ = function _(O) {
              return c(d.slice(0, Math.max(O, 0)), "\r\n");
            };

            o -= _(o), x -= _(x), F -= _(F), d = l(d);
          }

          return {
            hasBOM: k,
            text: d,
            options: w(d, Object.assign(Object.assign({}, y), {}, {
              cursorOffset: o,
              rangeStart: x,
              rangeEnd: F,
              endOfLine: S
            }))
          };
        }

        function E(d, y) {
          var o = p.resolveParser(y);
          return !o.hasPragma || o.hasPragma(d);
        }

        function D(d, y) {
          var _I2 = I(d, C(y)),
              o = _I2.hasBOM,
              x = _I2.text,
              F = _I2.options;

          if (F.rangeStart >= F.rangeEnd && x !== "" || F.requirePragma && !E(x, F)) return {
            formatted: d,
            cursorOffset: y.cursorOffset,
            comments: []
          };
          var S;
          return F.rangeStart > 0 || F.rangeEnd < x.length ? S = v(x, F) : (!F.requirePragma && F.insertPragma && F.printer.insertPragma && !E(x, F) && (x = F.printer.insertPragma(x)), S = b(x, F)), o && (S.formatted = N + S.formatted, S.cursorOffset >= 0 && S.cursorOffset++), S;
        }

        n.exports = {
          formatWithCursor: D,
          parse: function parse(d, y, o) {
            var _I3 = I(d, C(y)),
                x = _I3.text,
                F = _I3.options,
                S = p.parse(x, F);

            return o && (S.ast = m(S.ast, F)), S;
          },
          formatAST: function formatAST(d, y) {
            y = C(y);
            var o = f(d, y);
            return s(o, y);
          },
          formatDoc: function formatDoc(d, y) {
            return D(i(d), Object.assign(Object.assign({}, y), {}, {
              parser: "__js_expression"
            })).formatted;
          },
          printToDoc: function printToDoc(d, y) {
            y = C(y);

            var _p$parse3 = p.parse(d, y),
                o = _p$parse3.ast,
                x = _p$parse3.text;

            return A(x, o, y), f(o, y);
          },
          printDocToString: function printDocToString(d, y) {
            return s(d, C(y));
          }
        };
      }
    }),
        cm = Z({
      "src/common/util-shared.js": function srcCommonUtilSharedJs(e, n) {
        "use strict";

        ae();

        var _Ge3 = Ge(),
            t = _Ge3.getMaxContinuousCount,
            s = _Ge3.getStringWidth,
            i = _Ge3.getAlignmentSize,
            r = _Ge3.getIndentSize,
            u = _Ge3.skip,
            a = _Ge3.skipWhitespace,
            c = _Ge3.skipSpaces,
            l = _Ge3.skipNewline,
            C = _Ge3.skipToLineEnd,
            m = _Ge3.skipEverythingButNewLine,
            g = _Ge3.skipInlineComment,
            p = _Ge3.skipTrailingComment,
            f = _Ge3.hasNewline,
            h = _Ge3.hasNewlineInRange,
            N = _Ge3.hasSpaces,
            T = _Ge3.isNextLineEmpty,
            A = _Ge3.isNextLineEmptyAfterIndex,
            b = _Ge3.isPreviousLineEmpty,
            v = _Ge3.getNextNonSpaceNonCommentCharacterIndex,
            B = _Ge3.makeString,
            w = _Ge3.addLeadingComment,
            I = _Ge3.addDanglingComment,
            E = _Ge3.addTrailingComment;

        n.exports = {
          getMaxContinuousCount: t,
          getStringWidth: s,
          getAlignmentSize: i,
          getIndentSize: r,
          skip: u,
          skipWhitespace: a,
          skipSpaces: c,
          skipNewline: l,
          skipToLineEnd: C,
          skipEverythingButNewLine: m,
          skipInlineComment: g,
          skipTrailingComment: p,
          hasNewline: f,
          hasNewlineInRange: h,
          hasSpaces: N,
          isNextLineEmpty: T,
          isNextLineEmptyAfterIndex: A,
          isPreviousLineEmpty: b,
          getNextNonSpaceNonCommentCharacterIndex: v,
          makeString: B,
          addLeadingComment: w,
          addDanglingComment: I,
          addTrailingComment: E
        };
      }
    }),
        bt = Z({
      "src/utils/create-language.js": function srcUtilsCreateLanguageJs(e, n) {
        "use strict";

        ae(), n.exports = function (t, s) {
          var i = t.languageId,
              r = _n(t, Kf);

          return Object.assign(Object.assign({
            linguistLanguageId: i
          }, r), s(t));
        };
      }
    }),
        lm = Z({
      "node_modules/esutils/lib/ast.js": function node_modulesEsutilsLibAstJs(e, n) {
        ae(), function () {
          "use strict";

          function t(c) {
            if (c == null) return !1;

            switch (c.type) {
              case "ArrayExpression":
              case "AssignmentExpression":
              case "BinaryExpression":
              case "CallExpression":
              case "ConditionalExpression":
              case "FunctionExpression":
              case "Identifier":
              case "Literal":
              case "LogicalExpression":
              case "MemberExpression":
              case "NewExpression":
              case "ObjectExpression":
              case "SequenceExpression":
              case "ThisExpression":
              case "UnaryExpression":
              case "UpdateExpression":
                return !0;
            }

            return !1;
          }

          function s(c) {
            if (c == null) return !1;

            switch (c.type) {
              case "DoWhileStatement":
              case "ForInStatement":
              case "ForStatement":
              case "WhileStatement":
                return !0;
            }

            return !1;
          }

          function i(c) {
            if (c == null) return !1;

            switch (c.type) {
              case "BlockStatement":
              case "BreakStatement":
              case "ContinueStatement":
              case "DebuggerStatement":
              case "DoWhileStatement":
              case "EmptyStatement":
              case "ExpressionStatement":
              case "ForInStatement":
              case "ForStatement":
              case "IfStatement":
              case "LabeledStatement":
              case "ReturnStatement":
              case "SwitchStatement":
              case "ThrowStatement":
              case "TryStatement":
              case "VariableDeclaration":
              case "WhileStatement":
              case "WithStatement":
                return !0;
            }

            return !1;
          }

          function r(c) {
            return i(c) || c != null && c.type === "FunctionDeclaration";
          }

          function u(c) {
            switch (c.type) {
              case "IfStatement":
                return c.alternate != null ? c.alternate : c.consequent;

              case "LabeledStatement":
              case "ForStatement":
              case "ForInStatement":
              case "WhileStatement":
              case "WithStatement":
                return c.body;
            }

            return null;
          }

          function a(c) {
            var l;
            if (c.type !== "IfStatement" || c.alternate == null) return !1;
            l = c.consequent;

            do {
              if (l.type === "IfStatement" && l.alternate == null) return !0;
              l = u(l);
            } while (l);

            return !1;
          }

          n.exports = {
            isExpression: t,
            isStatement: i,
            isIterationStatement: s,
            isSourceElement: r,
            isProblematicIfStatement: a,
            trailingStatement: u
          };
        }();
      }
    }),
        Ri = Z({
      "node_modules/esutils/lib/code.js": function node_modulesEsutilsLibCodeJs(e, n) {
        ae(), function () {
          "use strict";

          var t, s, i, r, u, a;
          s = {
            NonAsciiIdentifierStart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
            NonAsciiIdentifierPart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/
          }, t = {
            NonAsciiIdentifierStart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]/,
            NonAsciiIdentifierPart: /[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/
          };

          function c(A) {
            return 48 <= A && A <= 57;
          }

          function l(A) {
            return 48 <= A && A <= 57 || 97 <= A && A <= 102 || 65 <= A && A <= 70;
          }

          function C(A) {
            return A >= 48 && A <= 55;
          }

          i = [5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8239, 8287, 12288, 65279];

          function m(A) {
            return A === 32 || A === 9 || A === 11 || A === 12 || A === 160 || A >= 5760 && i.indexOf(A) >= 0;
          }

          function g(A) {
            return A === 10 || A === 13 || A === 8232 || A === 8233;
          }

          function p(A) {
            if (A <= 65535) return String.fromCharCode(A);
            var b = String.fromCharCode(Math.floor((A - 65536) / 1024) + 55296),
                v = String.fromCharCode((A - 65536) % 1024 + 56320);
            return b + v;
          }

          for (r = new Array(128), a = 0; a < 128; ++a) {
            r[a] = a >= 97 && a <= 122 || a >= 65 && a <= 90 || a === 36 || a === 95;
          }

          for (u = new Array(128), a = 0; a < 128; ++a) {
            u[a] = a >= 97 && a <= 122 || a >= 65 && a <= 90 || a >= 48 && a <= 57 || a === 36 || a === 95;
          }

          function f(A) {
            return A < 128 ? r[A] : s.NonAsciiIdentifierStart.test(p(A));
          }

          function h(A) {
            return A < 128 ? u[A] : s.NonAsciiIdentifierPart.test(p(A));
          }

          function N(A) {
            return A < 128 ? r[A] : t.NonAsciiIdentifierStart.test(p(A));
          }

          function T(A) {
            return A < 128 ? u[A] : t.NonAsciiIdentifierPart.test(p(A));
          }

          n.exports = {
            isDecimalDigit: c,
            isHexDigit: l,
            isOctalDigit: C,
            isWhiteSpace: m,
            isLineTerminator: g,
            isIdentifierStartES5: f,
            isIdentifierPartES5: h,
            isIdentifierStartES6: N,
            isIdentifierPartES6: T
          };
        }();
      }
    }),
        pm = Z({
      "node_modules/esutils/lib/keyword.js": function node_modulesEsutilsLibKeywordJs(e, n) {
        ae(), function () {
          "use strict";

          var t = Ri();

          function s(f) {
            switch (f) {
              case "implements":
              case "interface":
              case "package":
              case "private":
              case "protected":
              case "public":
              case "static":
              case "let":
                return !0;

              default:
                return !1;
            }
          }

          function i(f, h) {
            return !h && f === "yield" ? !1 : r(f, h);
          }

          function r(f, h) {
            if (h && s(f)) return !0;

            switch (f.length) {
              case 2:
                return f === "if" || f === "in" || f === "do";

              case 3:
                return f === "var" || f === "for" || f === "new" || f === "try";

              case 4:
                return f === "this" || f === "else" || f === "case" || f === "void" || f === "with" || f === "enum";

              case 5:
                return f === "while" || f === "break" || f === "catch" || f === "throw" || f === "const" || f === "yield" || f === "class" || f === "super";

              case 6:
                return f === "return" || f === "typeof" || f === "delete" || f === "switch" || f === "export" || f === "import";

              case 7:
                return f === "default" || f === "finally" || f === "extends";

              case 8:
                return f === "function" || f === "continue" || f === "debugger";

              case 10:
                return f === "instanceof";

              default:
                return !1;
            }
          }

          function u(f, h) {
            return f === "null" || f === "true" || f === "false" || i(f, h);
          }

          function a(f, h) {
            return f === "null" || f === "true" || f === "false" || r(f, h);
          }

          function c(f) {
            return f === "eval" || f === "arguments";
          }

          function l(f) {
            var h, N, T;
            if (f.length === 0 || (T = f.charCodeAt(0), !t.isIdentifierStartES5(T))) return !1;

            for (h = 1, N = f.length; h < N; ++h) {
              if (T = f.charCodeAt(h), !t.isIdentifierPartES5(T)) return !1;
            }

            return !0;
          }

          function C(f, h) {
            return (f - 55296) * 1024 + (h - 56320) + 65536;
          }

          function m(f) {
            var h, N, T, A, b;
            if (f.length === 0) return !1;

            for (b = t.isIdentifierStartES6, h = 0, N = f.length; h < N; ++h) {
              if (T = f.charCodeAt(h), 55296 <= T && T <= 56319) {
                if (++h, h >= N || (A = f.charCodeAt(h), !(56320 <= A && A <= 57343))) return !1;
                T = C(T, A);
              }

              if (!b(T)) return !1;
              b = t.isIdentifierPartES6;
            }

            return !0;
          }

          function g(f, h) {
            return l(f) && !u(f, h);
          }

          function p(f, h) {
            return m(f) && !a(f, h);
          }

          n.exports = {
            isKeywordES5: i,
            isKeywordES6: r,
            isReservedWordES5: u,
            isReservedWordES6: a,
            isRestrictedWord: c,
            isIdentifierNameES5: l,
            isIdentifierNameES6: m,
            isIdentifierES5: g,
            isIdentifierES6: p
          };
        }();
      }
    }),
        fm = Z({
      "node_modules/esutils/lib/utils.js": function node_modulesEsutilsLibUtilsJs(e) {
        ae(), function () {
          "use strict";

          e.ast = lm(), e.code = Ri(), e.keyword = pm();
        }();
      }
    }),
        Pt = Z({
      "src/language-js/utils/is-block-comment.js": function srcLanguageJsUtilsIsBlockCommentJs(e, n) {
        "use strict";

        ae();

        function t(s) {
          return s.type === "Block" || s.type === "CommentBlock" || s.type === "MultiLine";
        }

        n.exports = t;
      }
    }),
        Xe = Z({
      "src/language-js/utils/index.js": function srcLanguageJsUtilsIndexJs(e, n) {
        "use strict";

        ae();

        var t = fm().keyword.isIdentifierNameES5,
            _Ge4 = Ge(),
            s = _Ge4.getLast,
            i = _Ge4.hasNewline,
            r = _Ge4.skipWhitespace,
            u = _Ge4.isNonEmptyArray,
            a = _Ge4.isNextLineEmptyAfterIndex,
            c = _Ge4.getStringWidth,
            _nt = nt(),
            l = _nt.locStart,
            C = _nt.locEnd,
            m = _nt.hasSameLocStart,
            g = Pt(),
            p = "(?:(?=.)\\s)",
            f = new RegExp("^".concat(p, "*:")),
            h = new RegExp("^".concat(p, "*::"));

        function N(L) {
          return L.extra && L.extra.parenthesized && u(L.trailingComments) && g(L.trailingComments[0]) && f.test(L.trailingComments[0].value);
        }

        function T(L) {
          return u(L) && g(L[0]) && h.test(L[0].value);
        }

        function A(L, De) {
          if (!L || _typeof(L) != "object") return !1;
          if (Array.isArray(L)) return L.some(function (We) {
            return A(We, De);
          });
          var ke = De(L);
          return typeof ke == "boolean" ? ke : Object.values(L).some(function (We) {
            return A(We, De);
          });
        }

        function b(L) {
          return L.type === "AssignmentExpression" || L.type === "BinaryExpression" || L.type === "LogicalExpression" || L.type === "NGPipeExpression" || L.type === "ConditionalExpression" || Ee(L) || q(L) || L.type === "SequenceExpression" || L.type === "TaggedTemplateExpression" || L.type === "BindExpression" || L.type === "UpdateExpression" && !L.prefix || L.type === "TSAsExpression" || L.type === "TSNonNullExpression";
        }

        function v(L) {
          return L.expressions ? L.expressions[0] : L.left || L.test || L.callee || L.object || L.tag || L.argument || L.expression;
        }

        function B(L, De) {
          if (De.expressions) return ["expressions", 0];
          if (De.left) return ["left"];
          if (De.test) return ["test"];
          if (De.object) return ["object"];
          if (De.callee) return ["callee"];
          if (De.tag) return ["tag"];
          if (De.argument) return ["argument"];
          if (De.expression) return ["expression"];
          throw new Error("Unexpected node has no left side.");
        }

        function w(L) {
          return L.type === "Line" || L.type === "CommentLine" || L.type === "SingleLine" || L.type === "HashbangComment" || L.type === "HTMLOpen" || L.type === "HTMLClose";
        }

        var I = new Set(["ExportDefaultDeclaration", "ExportDefaultSpecifier", "DeclareExportDeclaration", "ExportNamedDeclaration", "ExportAllDeclaration"]);

        function E(L) {
          return L && I.has(L.type);
        }

        function D(L) {
          var De = L.getParentNode();
          return L.getName() === "declaration" && E(De) ? De : null;
        }

        function d(L) {
          return L.type === "BooleanLiteral" || L.type === "DirectiveLiteral" || L.type === "Literal" || L.type === "NullLiteral" || L.type === "NumericLiteral" || L.type === "BigIntLiteral" || L.type === "DecimalLiteral" || L.type === "RegExpLiteral" || L.type === "StringLiteral" || L.type === "TemplateLiteral" || L.type === "TSTypeLiteral" || L.type === "JSXText";
        }

        function y(L) {
          return L.type === "NumericLiteral" || L.type === "Literal" && typeof L.value == "number";
        }

        function o(L) {
          return L.type === "UnaryExpression" && (L.operator === "+" || L.operator === "-") && y(L.argument);
        }

        function x(L) {
          return L.type === "StringLiteral" || L.type === "Literal" && typeof L.value == "string";
        }

        function F(L) {
          return L.type === "ObjectTypeAnnotation" || L.type === "TSTypeLiteral" || L.type === "TSMappedType";
        }

        function S(L) {
          return L.type === "FunctionExpression" || L.type === "ArrowFunctionExpression";
        }

        function k(L) {
          return L.type === "FunctionExpression" || L.type === "ArrowFunctionExpression" && L.body.type === "BlockStatement";
        }

        function _(L) {
          return L.type === "TemplateLiteral";
        }

        function O(L) {
          return Ee(L) && L.callee.type === "Identifier" && ["async", "inject", "fakeAsync", "waitForAsync"].includes(L.callee.name);
        }

        function R(L) {
          return L.type === "JSXElement" || L.type === "JSXFragment";
        }

        function M(L, De) {
          if (L.parentParser !== "markdown" && L.parentParser !== "mdx") return !1;
          var ke = De.getNode();
          if (!ke.expression || !R(ke.expression)) return !1;
          var We = De.getParentNode();
          return We.type === "Program" && We.body.length === 1;
        }

        function H(L) {
          return L.kind === "get" || L.kind === "set";
        }

        function P(L) {
          return H(L) || m(L, L.value);
        }

        function G(L) {
          return (L.type === "ObjectTypeProperty" || L.type === "ObjectTypeInternalSlot") && L.value.type === "FunctionTypeAnnotation" && !L.static && !P(L);
        }

        function re(L) {
          return (L.type === "TypeAnnotation" || L.type === "TSTypeAnnotation") && L.typeAnnotation.type === "FunctionTypeAnnotation" && !L.static && !m(L, L.typeAnnotation);
        }

        var $ = new Set(["BinaryExpression", "LogicalExpression", "NGPipeExpression"]);

        function W(L) {
          return $.has(L.type);
        }

        function ee(L) {
          return q(L) || L.type === "BindExpression" && Boolean(L.object);
        }

        var U = new Set(["AnyTypeAnnotation", "TSAnyKeyword", "NullLiteralTypeAnnotation", "TSNullKeyword", "ThisTypeAnnotation", "TSThisType", "NumberTypeAnnotation", "TSNumberKeyword", "VoidTypeAnnotation", "TSVoidKeyword", "BooleanTypeAnnotation", "TSBooleanKeyword", "BigIntTypeAnnotation", "TSBigIntKeyword", "SymbolTypeAnnotation", "TSSymbolKeyword", "StringTypeAnnotation", "TSStringKeyword", "BooleanLiteralTypeAnnotation", "StringLiteralTypeAnnotation", "BigIntLiteralTypeAnnotation", "NumberLiteralTypeAnnotation", "TSLiteralType", "TSTemplateLiteralType", "EmptyTypeAnnotation", "MixedTypeAnnotation", "TSNeverKeyword", "TSObjectKeyword", "TSUndefinedKeyword", "TSUnknownKeyword"]);

        function ne(L) {
          return L ? !!((L.type === "GenericTypeAnnotation" || L.type === "TSTypeReference") && !L.typeParameters || U.has(L.type)) : !1;
        }

        var se = /^(?:skip|[fx]?(?:it|describe|test))$/;

        function V(L) {
          return q(L.callee) && L.callee.object.type === "Identifier" && L.callee.property.type === "Identifier" && se.test(L.callee.object.name) && (L.callee.property.name === "only" || L.callee.property.name === "skip");
        }

        function oe(L) {
          var De = /^(?:before|after)(?:Each|All)$/;
          return L.callee.type === "Identifier" && De.test(L.callee.name) && L.arguments.length === 1;
        }

        function K(L, De) {
          if (L.type !== "CallExpression") return !1;

          if (L.arguments.length === 1) {
            if (O(L) && De && K(De)) return S(L.arguments[0]);
            if (oe(L)) return O(L.arguments[0]);
          } else if ((L.arguments.length === 2 || L.arguments.length === 3) && (L.callee.type === "Identifier" && se.test(L.callee.name) || V(L)) && (_(L.arguments[0]) || x(L.arguments[0]))) return L.arguments[2] && !y(L.arguments[2]) ? !1 : (L.arguments.length === 2 ? S(L.arguments[1]) : k(L.arguments[1]) && Ke(L.arguments[1]).length <= 1) || O(L.arguments[1]);

          return !1;
        }

        function Ee(L) {
          return L && (L.type === "CallExpression" || L.type === "OptionalCallExpression");
        }

        function q(L) {
          return L && (L.type === "MemberExpression" || L.type === "OptionalMemberExpression");
        }

        function le(L) {
          var De = "expressions";
          L.type === "TSTemplateLiteralType" && (De = "types");
          var ke = L[De];
          return ke.length === 0 ? !1 : ke.every(function (We) {
            if (Me(We)) return !1;
            if (We.type === "Identifier" || We.type === "ThisExpression") return !0;

            if (q(We)) {
              var $e = We;

              for (; q($e);) {
                if ($e.property.type !== "Identifier" && $e.property.type !== "Literal" && $e.property.type !== "StringLiteral" && $e.property.type !== "NumericLiteral" || ($e = $e.object, Me($e))) return !1;
              }

              return $e.type === "Identifier" || $e.type === "ThisExpression";
            }

            return !1;
          });
        }

        function ue(L, De) {
          return L === "+" ? "+" + De : L === "-" ? "-" + De : De;
        }

        function Q(L, De) {
          var ke = l(De),
              We = r(L, C(De));
          return We !== !1 && L.slice(ke, ke + 2) === "/*" && L.slice(We, We + 2) === "*/";
        }

        function de(L, De) {
          return R(De) ? Ae(De) : Me(De, Pe.Leading, function (ke) {
            return i(L, C(ke));
          });
        }

        function ge(L, De) {
          return De.parser !== "json" && x(L.key) && J(L.key).slice(1, -1) === L.key.value && (t(L.key.value) && !(De.parser === "babel-ts" && L.type === "ClassProperty" || De.parser === "typescript" && L.type === "PropertyDefinition") || ve(L.key.value) && String(Number(L.key.value)) === L.key.value && (De.parser === "babel" || De.parser === "acorn" || De.parser === "espree" || De.parser === "meriyah" || De.parser === "__babel_estree"));
        }

        function ve(L) {
          return /^(?:\d+|\d+\.\d+)$/.test(L);
        }

        function xe(L, De) {
          var ke = /^[fx]?(?:describe|it|test)$/;
          return De.type === "TaggedTemplateExpression" && De.quasi === L && De.tag.type === "MemberExpression" && De.tag.property.type === "Identifier" && De.tag.property.name === "each" && (De.tag.object.type === "Identifier" && ke.test(De.tag.object.name) || De.tag.object.type === "MemberExpression" && De.tag.object.property.type === "Identifier" && (De.tag.object.property.name === "only" || De.tag.object.property.name === "skip") && De.tag.object.object.type === "Identifier" && ke.test(De.tag.object.object.name));
        }

        function we(L) {
          return L.quasis.some(function (De) {
            return De.value.raw.includes("\n");
          });
        }

        function fe(L, De) {
          return (L.type === "TemplateLiteral" && we(L) || L.type === "TaggedTemplateExpression" && we(L.quasi)) && !i(De, l(L), {
            backwards: !0
          });
        }

        function pe(L) {
          if (!Me(L)) return !1;
          var De = s(qe(L, Pe.Dangling));
          return De && !g(De);
        }

        function me(L) {
          if (L.length <= 1) return !1;
          var De = 0;

          var _iterator35 = _createForOfIteratorHelper(L),
              _step35;

          try {
            for (_iterator35.s(); !(_step35 = _iterator35.n()).done;) {
              var ke = _step35.value;

              if (S(ke)) {
                if (De += 1, De > 1) return !0;
              } else if (Ee(ke)) {
                var _iterator36 = _createForOfIteratorHelper(ke.arguments),
                    _step36;

                try {
                  for (_iterator36.s(); !(_step36 = _iterator36.n()).done;) {
                    var We = _step36.value;
                    if (S(We)) return !0;
                  }
                } catch (err) {
                  _iterator36.e(err);
                } finally {
                  _iterator36.f();
                }
              }
            }
          } catch (err) {
            _iterator35.e(err);
          } finally {
            _iterator35.f();
          }

          return !1;
        }

        function ce(L) {
          var De = L.getValue(),
              ke = L.getParentNode();
          return Ee(De) && Ee(ke) && ke.callee === De && De.arguments.length > ke.arguments.length && ke.arguments.length > 0;
        }

        function he(L, De) {
          if (De >= 2) return !1;

          var ke = function ke($e) {
            return he($e, De + 1);
          },
              We = L.type === "Literal" && "regex" in L && L.regex.pattern || L.type === "RegExpLiteral" && L.pattern;

          return We && c(We) > 5 ? !1 : L.type === "Literal" || L.type === "BigIntLiteral" || L.type === "DecimalLiteral" || L.type === "BooleanLiteral" || L.type === "NullLiteral" || L.type === "NumericLiteral" || L.type === "RegExpLiteral" || L.type === "StringLiteral" || L.type === "Identifier" || L.type === "ThisExpression" || L.type === "Super" || L.type === "PrivateName" || L.type === "PrivateIdentifier" || L.type === "ArgumentPlaceholder" || L.type === "Import" ? !0 : L.type === "TemplateLiteral" ? L.quasis.every(function ($e) {
            return !$e.value.raw.includes("\n");
          }) && L.expressions.every(ke) : L.type === "ObjectExpression" ? L.properties.every(function ($e) {
            return !$e.computed && ($e.shorthand || $e.value && ke($e.value));
          }) : L.type === "ArrayExpression" ? L.elements.every(function ($e) {
            return $e === null || ke($e);
          }) : rt(L) ? (L.type === "ImportExpression" || he(L.callee, De)) && Be(L).every(ke) : q(L) ? he(L.object, De) && he(L.property, De) : L.type === "UnaryExpression" && (L.operator === "!" || L.operator === "-") ? he(L.argument, De) : L.type === "TSNonNullExpression" ? he(L.expression, De) : !1;
        }

        function J(L) {
          return L.extra ? L.extra.raw : L.raw;
        }

        function ye(L) {
          return L;
        }

        function X(L) {
          return L.filepath && /\.tsx$/i.test(L.filepath);
        }

        function Y(L) {
          var De = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "es5";
          return L.trailingComma === "es5" && De === "es5" || L.trailingComma === "all" && (De === "all" || De === "es5");
        }

        function te(L, De) {
          switch (L = tt(L), L.type) {
            case "FunctionExpression":
            case "ClassExpression":
            case "DoExpression":
              return De;

            case "ObjectExpression":
              return !0;

            case "MemberExpression":
            case "OptionalMemberExpression":
              return te(L.object, De);

            case "TaggedTemplateExpression":
              return L.tag.type === "FunctionExpression" ? !1 : te(L.tag, De);

            case "CallExpression":
            case "OptionalCallExpression":
              return L.callee.type === "FunctionExpression" ? !1 : te(L.callee, De);

            case "ConditionalExpression":
              return te(L.test, De);

            case "UpdateExpression":
              return !L.prefix && te(L.argument, De);

            case "BindExpression":
              return L.object && te(L.object, De);

            case "SequenceExpression":
              return te(L.expressions[0], De);

            case "TSAsExpression":
            case "TSNonNullExpression":
              return te(L.expression, De);

            default:
              return !1;
          }
        }

        var z = {
          "==": !0,
          "!=": !0,
          "===": !0,
          "!==": !0
        },
            j = {
          "*": !0,
          "/": !0,
          "%": !0
        },
            Ce = {
          ">>": !0,
          ">>>": !0,
          "<<": !0
        };

        function Ne(L, De) {
          return !(Ue(De) !== Ue(L) || L === "**" || z[L] && z[De] || De === "%" && j[L] || L === "%" && j[De] || De !== L && j[De] && j[L] || Ce[L] && Ce[De]);
        }

        var je = {};

        var _iterator37 = _createForOfIteratorHelper([["|>"], ["??"], ["||"], ["&&"], ["|"], ["^"], ["&"], ["==", "===", "!=", "!=="], ["<", ">", "<=", ">=", "in", "instanceof"], [">>", "<<", ">>>"], ["+", "-"], ["*", "/", "%"], ["**"]].entries()),
            _step37;

        try {
          for (_iterator37.s(); !(_step37 = _iterator37.n()).done;) {
            var _step37$value = _slicedToArray(_step37.value, 2),
                L = _step37$value[0],
                De = _step37$value[1];

            var _iterator38 = _createForOfIteratorHelper(De),
                _step38;

            try {
              for (_iterator38.s(); !(_step38 = _iterator38.n()).done;) {
                var ke = _step38.value;
                je[ke] = L;
              }
            } catch (err) {
              _iterator38.e(err);
            } finally {
              _iterator38.f();
            }
          }
        } catch (err) {
          _iterator37.e(err);
        } finally {
          _iterator37.f();
        }

        function Ue(L) {
          return je[L];
        }

        function tt(L) {
          for (; L.left;) {
            L = L.left;
          }

          return L;
        }

        function Te(L) {
          return Boolean(Ce[L]) || L === "|" || L === "^" || L === "&";
        }

        function _e(L) {
          if (L.rest) return !0;
          var De = Ke(L);
          return De.length > 0 && s(De).type === "RestElement";
        }

        var Fe = new WeakMap();

        function Ke(L) {
          if (Fe.has(L)) return Fe.get(L);
          var De = [];
          return L.this && De.push(L.this), Array.isArray(L.parameters) ? De.push.apply(De, _toConsumableArray(L.parameters)) : Array.isArray(L.params) && De.push.apply(De, _toConsumableArray(L.params)), L.rest && De.push(L.rest), Fe.set(L, De), De;
        }

        function Se(L, De) {
          var ke = L.getValue(),
              We = 0,
              $e = function $e(ut) {
            return De(ut, We++);
          };

          ke.this && L.call($e, "this"), Array.isArray(ke.parameters) ? L.each($e, "parameters") : Array.isArray(ke.params) && L.each($e, "params"), ke.rest && L.call($e, "rest");
        }

        var ze = new WeakMap();

        function Be(L) {
          if (ze.has(L)) return ze.get(L);
          var De = L.arguments;
          return L.type === "ImportExpression" && (De = [L.source], L.attributes && De.push(L.attributes)), ze.set(L, De), De;
        }

        function Ie(L, De) {
          var ke = L.getValue();
          ke.type === "ImportExpression" ? (L.call(function (We) {
            return De(We, 0);
          }, "source"), ke.attributes && L.call(function (We) {
            return De(We, 1);
          }, "attributes")) : L.each(De, "arguments");
        }

        function Ve(L) {
          return L.value.trim() === "prettier-ignore" && !L.unignore;
        }

        function Ae(L) {
          return L && (L.prettierIgnore || Me(L, Pe.PrettierIgnore));
        }

        function Oe(L) {
          var De = L.getValue();
          return Ae(De);
        }

        var Pe = {
          Leading: 1 << 1,
          Trailing: 1 << 2,
          Dangling: 1 << 3,
          Block: 1 << 4,
          Line: 1 << 5,
          PrettierIgnore: 1 << 6,
          First: 1 << 7,
          Last: 1 << 8
        },
            ie = function ie(L, De) {
          if (typeof L == "function" && (De = L, L = 0), L || De) return function (ke, We, $e) {
            return !(L & Pe.Leading && !ke.leading || L & Pe.Trailing && !ke.trailing || L & Pe.Dangling && (ke.leading || ke.trailing) || L & Pe.Block && !g(ke) || L & Pe.Line && !w(ke) || L & Pe.First && We !== 0 || L & Pe.Last && We !== $e.length - 1 || L & Pe.PrettierIgnore && !Ve(ke) || De && !De(ke));
          };
        };

        function Me(L, De, ke) {
          if (!L || !u(L.comments)) return !1;
          var We = ie(De, ke);
          return We ? L.comments.some(We) : !0;
        }

        function qe(L, De, ke) {
          if (!L || !Array.isArray(L.comments)) return [];
          var We = ie(De, ke);
          return We ? L.comments.filter(We) : L.comments;
        }

        var Je = function Je(L, De) {
          var ke = De.originalText;
          return a(ke, C(L));
        };

        function rt(L) {
          return Ee(L) || L.type === "NewExpression" || L.type === "ImportExpression";
        }

        function Ze(L) {
          return L && (L.type === "ObjectProperty" || L.type === "Property" && !L.method && L.kind === "init");
        }

        function ct(L) {
          return Boolean(L.__isUsingHackPipeline);
        }

        var qt = Symbol("ifWithoutBlockAndSameLineComment");
        n.exports = {
          getFunctionParameters: Ke,
          iterateFunctionParametersPath: Se,
          getCallArguments: Be,
          iterateCallArgumentsPath: Ie,
          hasRestParameter: _e,
          getLeftSide: v,
          getLeftSidePathName: B,
          getParentExportDeclaration: D,
          getTypeScriptMappedTypeModifier: ue,
          hasFlowAnnotationComment: T,
          hasFlowShorthandAnnotationComment: N,
          hasLeadingOwnLineComment: de,
          hasNakedLeftSide: b,
          hasNode: A,
          hasIgnoreComment: Oe,
          hasNodeIgnoreComment: Ae,
          identity: ye,
          isBinaryish: W,
          isCallLikeExpression: rt,
          isEnabledHackPipeline: ct,
          isLineComment: w,
          isPrettierIgnoreComment: Ve,
          isCallExpression: Ee,
          isMemberExpression: q,
          isExportDeclaration: E,
          isFlowAnnotationComment: Q,
          isFunctionCompositionArgs: me,
          isFunctionNotation: P,
          isFunctionOrArrowExpression: S,
          isGetterOrSetter: H,
          isJestEachTemplateLiteral: xe,
          isJsxNode: R,
          isLiteral: d,
          isLongCurriedCallExpression: ce,
          isSimpleCallArgument: he,
          isMemberish: ee,
          isNumericLiteral: y,
          isSignedNumericLiteral: o,
          isObjectProperty: Ze,
          isObjectType: F,
          isObjectTypePropertyAFunction: G,
          isSimpleType: ne,
          isSimpleNumber: ve,
          isSimpleTemplateLiteral: le,
          isStringLiteral: x,
          isStringPropSafeToUnquote: ge,
          isTemplateOnItsOwnLine: fe,
          isTestCall: K,
          isTheOnlyJsxElementInMarkdown: M,
          isTSXFile: X,
          isTypeAnnotationAFunction: re,
          isNextLineEmpty: Je,
          needsHardlineAfterDanglingComment: pe,
          rawText: J,
          shouldPrintComma: Y,
          isBitwiseOperator: Te,
          shouldFlatten: Ne,
          startsWithNoLookaheadToken: te,
          getPrecedence: Ue,
          hasComment: Me,
          getComments: qe,
          CommentCheckFlags: Pe,
          markerForIfWithoutBlockAndSameLineComment: qt
        };
      }
    }),
        It = Z({
      "src/language-js/print/template-literal.js": function srcLanguageJsPrintTemplateLiteralJs(e, n) {
        "use strict";

        ae();

        var t = st(),
            _Ge5 = Ge(),
            s = _Ge5.getStringWidth,
            i = _Ge5.getIndentSize,
            _Le5 = Le(),
            _Le5$builders = _Le5.builders,
            r = _Le5$builders.join,
            u = _Le5$builders.hardline,
            a = _Le5$builders.softline,
            c = _Le5$builders.group,
            l = _Le5$builders.indent,
            C = _Le5$builders.align,
            m = _Le5$builders.lineSuffixBoundary,
            g = _Le5$builders.addAlignmentToDoc,
            p = _Le5.printer.printDocToString,
            f = _Le5.utils.mapDoc,
            _Xe = Xe(),
            h = _Xe.isBinaryish,
            N = _Xe.isJestEachTemplateLiteral,
            T = _Xe.isSimpleTemplateLiteral,
            A = _Xe.hasComment,
            b = _Xe.isMemberExpression;

        function v(d, y, o) {
          var x = d.getValue();

          if (x.type === "TemplateLiteral" && N(x, d.getParentNode())) {
            var R = B(d, o, y);
            if (R) return R;
          }

          var S = "expressions";
          x.type === "TSTemplateLiteralType" && (S = "types");

          var k = [],
              _ = d.map(y, S),
              O = T(x);

          return O && (_ = _.map(function (R) {
            return p(R, Object.assign(Object.assign({}, o), {}, {
              printWidth: Number.POSITIVE_INFINITY
            })).formatted;
          })), k.push(m, "`"), d.each(function (R) {
            var M = R.getName();

            if (k.push(y()), M < _.length) {
              var H = o.tabWidth,
                  P = R.getValue(),
                  G = i(P.value.raw, H),
                  re = _[M];

              if (!O) {
                var W = x[S][M];
                (A(W) || b(W) || W.type === "ConditionalExpression" || W.type === "SequenceExpression" || W.type === "TSAsExpression" || h(W)) && (re = [l([a, re]), a]);
              }

              var $ = G === 0 && P.value.raw.endsWith("\n") ? C(Number.NEGATIVE_INFINITY, re) : g(re, G, H);
              k.push(c(["${", $, m, "}"]));
            }
          }, "quasis"), k.push("`"), k;
        }

        function B(d, y, o) {
          var x = d.getNode(),
              F = x.quasis[0].value.raw.trim().split(/\s*\|\s*/);

          if (F.length > 1 || F.some(function (S) {
            return S.length > 0;
          })) {
            y.__inJestEach = !0;
            var S = d.map(o, "expressions");
            y.__inJestEach = !1;

            var k = [],
                _ = S.map(function (P) {
              return "${" + p(P, Object.assign(Object.assign({}, y), {}, {
                printWidth: Number.POSITIVE_INFINITY,
                endOfLine: "lf"
              })).formatted + "}";
            }),
                O = [{
              hasLineBreak: !1,
              cells: []
            }];

            for (var P = 1; P < x.quasis.length; P++) {
              var G = t(O),
                  re = _[P - 1];
              G.cells.push(re), re.includes("\n") && (G.hasLineBreak = !0), x.quasis[P].value.raw.includes("\n") && O.push({
                hasLineBreak: !1,
                cells: []
              });
            }

            var R = Math.max.apply(Math, [F.length].concat(_toConsumableArray(O.map(function (P) {
              return P.cells.length;
            })))),
                M = Array.from({
              length: R
            }).fill(0),
                H = [{
              cells: F
            }].concat(_toConsumableArray(O.filter(function (P) {
              return P.cells.length > 0;
            })));

            var _iterator39 = _createForOfIteratorHelper(H.filter(function (G) {
              return !G.hasLineBreak;
            })),
                _step39;

            try {
              for (_iterator39.s(); !(_step39 = _iterator39.n()).done;) {
                var _P2 = _step39.value.cells;

                var _iterator40 = _createForOfIteratorHelper(_P2.entries()),
                    _step40;

                try {
                  for (_iterator40.s(); !(_step40 = _iterator40.n()).done;) {
                    var _step40$value = _slicedToArray(_step40.value, 2),
                        _G2 = _step40$value[0],
                        _re = _step40$value[1];

                    M[_G2] = Math.max(M[_G2], s(_re));
                  }
                } catch (err) {
                  _iterator40.e(err);
                } finally {
                  _iterator40.f();
                }
              }
            } catch (err) {
              _iterator39.e(err);
            } finally {
              _iterator39.f();
            }

            return k.push(m, "`", l([u, r(u, H.map(function (P) {
              return r(" | ", P.cells.map(function (G, re) {
                return P.hasLineBreak ? G : G + " ".repeat(M[re] - s(G));
              }));
            }))]), u, "`"), k;
          }
        }

        function w(d, y) {
          var o = d.getValue(),
              x = y();
          return A(o) && (x = c([l([a, x]), a])), ["${", x, m, "}"];
        }

        function I(d, y) {
          return d.map(function (o) {
            return w(o, y);
          }, "expressions");
        }

        function E(d, y) {
          return f(d, function (o) {
            return typeof o == "string" ? y ? o.replace(/(\\*)`/g, "$1$1\\`") : D(o) : o;
          });
        }

        function D(d) {
          return d.replace(/([\\`]|\${)/g, "\\$1");
        }

        n.exports = {
          printTemplateLiteral: v,
          printTemplateExpressions: I,
          escapeTemplateCharacters: E,
          uncookTemplateElementValue: D
        };
      }
    }),
        Dm = Z({
      "src/language-js/embed/markdown.js": function srcLanguageJsEmbedMarkdownJs(e, n) {
        "use strict";

        ae();

        var _Le6 = Le(),
            _Le6$builders = _Le6.builders,
            t = _Le6$builders.indent,
            s = _Le6$builders.softline,
            i = _Le6$builders.literalline,
            r = _Le6$builders.dedentToRoot,
            _It = It(),
            u = _It.escapeTemplateCharacters;

        function a(l, C, m) {
          var p = l.getValue().quasis[0].value.raw.replace(/((?:\\\\)*)\\`/g, function (T, A) {
            return "\\".repeat(A.length / 2) + "`";
          }),
              f = c(p),
              h = f !== "";
          h && (p = p.replace(new RegExp("^".concat(f), "gm"), ""));
          var N = u(m(p, {
            parser: "markdown",
            __inJsTemplate: !0
          }, {
            stripTrailingHardline: !0
          }), !0);
          return ["`", h ? t([s, N]) : [i, r(N)], s, "`"];
        }

        function c(l) {
          var C = l.match(/^([^\S\n]*)\S/m);
          return C === null ? "" : C[1];
        }

        n.exports = a;
      }
    }),
        mm = Z({
      "src/language-js/embed/css.js": function srcLanguageJsEmbedCssJs(e, n) {
        "use strict";

        ae();

        var _Ge6 = Ge(),
            t = _Ge6.isNonEmptyArray,
            _Le7 = Le(),
            _Le7$builders = _Le7.builders,
            s = _Le7$builders.indent,
            i = _Le7$builders.hardline,
            r = _Le7$builders.softline,
            _Le7$utils = _Le7.utils,
            u = _Le7$utils.mapDoc,
            a = _Le7$utils.replaceEndOfLine,
            c = _Le7$utils.cleanDoc,
            _It2 = It(),
            l = _It2.printTemplateExpressions;

        function C(p, f, h) {
          var N = p.getValue(),
              T = N.quasis.map(function (w) {
            return w.value.raw;
          }),
              A = 0,
              b = T.reduce(function (w, I, E) {
            return E === 0 ? I : w + "@prettier-placeholder-" + A++ + "-id" + I;
          }, ""),
              v = h(b, {
            parser: "scss"
          }, {
            stripTrailingHardline: !0
          }),
              B = l(p, f);
          return m(v, N, B);
        }

        function m(p, f, h) {
          if (f.quasis.length === 1 && !f.quasis[0].value.raw.trim()) return "``";
          var T = g(p, h);
          if (!T) throw new Error("Couldn't insert all the expressions");
          return ["`", s([i, T]), r, "`"];
        }

        function g(p, f) {
          if (!t(f)) return p;
          var h = 0,
              N = u(c(p), function (T) {
            return typeof T != "string" || !T.includes("@prettier-placeholder") ? T : T.split(/@prettier-placeholder-(\d+)-id/).map(function (A, b) {
              return b % 2 === 0 ? a(A) : (h++, f[A]);
            });
          });
          return f.length === h ? N : null;
        }

        n.exports = C;
      }
    }),
        dm = Z({
      "src/language-js/embed/graphql.js": function srcLanguageJsEmbedGraphqlJs(e, n) {
        "use strict";

        ae();

        var _Le8 = Le(),
            _Le8$builders = _Le8.builders,
            t = _Le8$builders.indent,
            s = _Le8$builders.join,
            i = _Le8$builders.hardline,
            _It3 = It(),
            r = _It3.escapeTemplateCharacters,
            u = _It3.printTemplateExpressions;

        function a(l, C, m) {
          var g = l.getValue(),
              p = g.quasis.length;
          if (p === 1 && g.quasis[0].value.raw.trim() === "") return "``";
          var f = u(l, C),
              h = [];

          for (var _N4 = 0; _N4 < p; _N4++) {
            var T = g.quasis[_N4],
                A = _N4 === 0,
                b = _N4 === p - 1,
                v = T.value.cooked,
                B = v.split("\n"),
                w = B.length,
                I = f[_N4],
                E = w > 2 && B[0].trim() === "" && B[1].trim() === "",
                D = w > 2 && B[w - 1].trim() === "" && B[w - 2].trim() === "",
                d = B.every(function (o) {
              return /^\s*(?:#[^\n\r]*)?$/.test(o);
            });
            if (!b && /#[^\n\r]*$/.test(B[w - 1])) return null;
            var y = null;
            d ? y = c(B) : y = m(v, {
              parser: "graphql"
            }, {
              stripTrailingHardline: !0
            }), y ? (y = r(y, !1), !A && E && h.push(""), h.push(y), !b && D && h.push("")) : !A && !b && E && h.push(""), I && h.push(I);
          }

          return ["`", t([i, s(i, h)]), i, "`"];
        }

        function c(l) {
          var C = [],
              m = !1,
              g = l.map(function (p) {
            return p.trim();
          });

          var _iterator41 = _createForOfIteratorHelper(g.entries()),
              _step41;

          try {
            for (_iterator41.s(); !(_step41 = _iterator41.n()).done;) {
              var _step41$value = _slicedToArray(_step41.value, 2),
                  p = _step41$value[0],
                  f = _step41$value[1];

              f !== "" && (g[p - 1] === "" && m ? C.push([i, f]) : C.push(f), m = !0);
            }
          } catch (err) {
            _iterator41.e(err);
          } finally {
            _iterator41.f();
          }

          return C.length === 0 ? null : s(i, C);
        }

        n.exports = a;
      }
    }),
        gm = Z({
      "src/language-js/embed/html.js": function srcLanguageJsEmbedHtmlJs(e, n) {
        "use strict";

        ae();

        var _Le9 = Le(),
            _Le9$builders = _Le9.builders,
            t = _Le9$builders.indent,
            s = _Le9$builders.line,
            i = _Le9$builders.hardline,
            r = _Le9$builders.group,
            u = _Le9.utils.mapDoc,
            _It4 = It(),
            a = _It4.printTemplateExpressions,
            c = _It4.uncookTemplateElementValue,
            l = 0;

        function C(m, g, p, f, h) {
          var N = h.parser,
              T = m.getValue(),
              A = l;
          l = l + 1 >>> 0;

          var b = function b(x) {
            return "PRETTIER_HTML_PLACEHOLDER_".concat(x, "_").concat(A, "_IN_JS");
          },
              v = T.quasis.map(function (x, F, S) {
            return F === S.length - 1 ? x.value.cooked : x.value.cooked + b(F);
          }).join(""),
              B = a(m, g);

          if (B.length === 0 && v.trim().length === 0) return "``";
          var w = new RegExp(b("(\\d+)"), "g"),
              I = 0,
              E = p(v, {
            parser: N,
            __onHtmlRoot: function __onHtmlRoot(x) {
              I = x.children.length;
            }
          }, {
            stripTrailingHardline: !0
          }),
              D = u(E, function (x) {
            if (typeof x != "string") return x;
            var F = [],
                S = x.split(w);

            for (var k = 0; k < S.length; k++) {
              var _ = S[k];

              if (k % 2 === 0) {
                _ && (_ = c(_), f.__embeddedInHtml && (_ = _.replace(/<\/(script)\b/gi, "<\\/$1")), F.push(_));
                continue;
              }

              var O = Number(_);
              F.push(B[O]);
            }

            return F;
          }),
              d = /^\s/.test(v) ? " " : "",
              y = /\s$/.test(v) ? " " : "",
              o = f.htmlWhitespaceSensitivity === "ignore" ? i : d && y ? s : null;
          return r(o ? ["`", t([o, r(D)]), o, "`"] : ["`", d, I > 1 ? t(r(D)) : r(D), y, "`"]);
        }

        n.exports = C;
      }
    }),
        ym = Z({
      "src/language-js/embed.js": function srcLanguageJsEmbedJs(e, n) {
        "use strict";

        ae();

        var _Xe2 = Xe(),
            t = _Xe2.hasComment,
            s = _Xe2.CommentCheckFlags,
            i = _Xe2.isObjectProperty,
            r = Dm(),
            u = mm(),
            a = dm(),
            c = gm();

        function l(E) {
          if (g(E) || N(E) || T(E) || p(E)) return "css";
          if (v(E)) return "graphql";
          if (w(E)) return "html";
          if (f(E)) return "angular";
          if (m(E)) return "markdown";
        }

        function C(E, D, d, y) {
          var o = E.getValue();
          if (o.type !== "TemplateLiteral" || I(o)) return;
          var x = l(E);

          if (!!x) {
            if (x === "markdown") return r(E, D, d);
            if (x === "css") return u(E, D, d);
            if (x === "graphql") return a(E, D, d);
            if (x === "html" || x === "angular") return c(E, D, d, y, {
              parser: x
            });
          }
        }

        function m(E) {
          var D = E.getValue(),
              d = E.getParentNode();
          return d && d.type === "TaggedTemplateExpression" && D.quasis.length === 1 && d.tag.type === "Identifier" && (d.tag.name === "md" || d.tag.name === "markdown");
        }

        function g(E) {
          var D = E.getValue(),
              d = E.getParentNode(),
              y = E.getParentNode(1);
          return y && D.quasis && d.type === "JSXExpressionContainer" && y.type === "JSXElement" && y.openingElement.name.name === "style" && y.openingElement.attributes.some(function (o) {
            return o.name.name === "jsx";
          }) || d && d.type === "TaggedTemplateExpression" && d.tag.type === "Identifier" && d.tag.name === "css" || d && d.type === "TaggedTemplateExpression" && d.tag.type === "MemberExpression" && d.tag.object.name === "css" && (d.tag.property.name === "global" || d.tag.property.name === "resolve");
        }

        function p(E) {
          return E.match.apply(E, [function (D) {
            return D.type === "TemplateLiteral";
          }, function (D, d) {
            return D.type === "ArrayExpression" && d === "elements";
          }, function (D, d) {
            return i(D) && D.key.type === "Identifier" && D.key.name === "styles" && d === "value";
          }].concat(h));
        }

        function f(E) {
          return E.match.apply(E, [function (D) {
            return D.type === "TemplateLiteral";
          }, function (D, d) {
            return i(D) && D.key.type === "Identifier" && D.key.name === "template" && d === "value";
          }].concat(h));
        }

        var h = [function (E, D) {
          return E.type === "ObjectExpression" && D === "properties";
        }, function (E, D) {
          return E.type === "CallExpression" && E.callee.type === "Identifier" && E.callee.name === "Component" && D === "arguments";
        }, function (E, D) {
          return E.type === "Decorator" && D === "expression";
        }];

        function N(E) {
          var D = E.getParentNode();
          if (!D || D.type !== "TaggedTemplateExpression") return !1;
          var d = D.tag.type === "ParenthesizedExpression" ? D.tag.expression : D.tag;

          switch (d.type) {
            case "MemberExpression":
              return A(d.object) || b(d);

            case "CallExpression":
              return A(d.callee) || d.callee.type === "MemberExpression" && (d.callee.object.type === "MemberExpression" && (A(d.callee.object.object) || b(d.callee.object)) || d.callee.object.type === "CallExpression" && A(d.callee.object.callee));

            case "Identifier":
              return d.name === "css";

            default:
              return !1;
          }
        }

        function T(E) {
          var D = E.getParentNode(),
              d = E.getParentNode(1);
          return d && D.type === "JSXExpressionContainer" && d.type === "JSXAttribute" && d.name.type === "JSXIdentifier" && d.name.name === "css";
        }

        function A(E) {
          return E.type === "Identifier" && E.name === "styled";
        }

        function b(E) {
          return /^[A-Z]/.test(E.object.name) && E.property.name === "extend";
        }

        function v(E) {
          var D = E.getValue(),
              d = E.getParentNode();
          return B(D, "GraphQL") || d && (d.type === "TaggedTemplateExpression" && (d.tag.type === "MemberExpression" && d.tag.object.name === "graphql" && d.tag.property.name === "experimental" || d.tag.type === "Identifier" && (d.tag.name === "gql" || d.tag.name === "graphql")) || d.type === "CallExpression" && d.callee.type === "Identifier" && d.callee.name === "graphql");
        }

        function B(E, D) {
          return t(E, s.Block | s.Leading, function (d) {
            var y = d.value;
            return y === " ".concat(D, " ");
          });
        }

        function w(E) {
          return B(E.getValue(), "HTML") || E.match(function (D) {
            return D.type === "TemplateLiteral";
          }, function (D, d) {
            return D.type === "TaggedTemplateExpression" && D.tag.type === "Identifier" && D.tag.name === "html" && d === "quasi";
          });
        }

        function I(E) {
          var D = E.quasis;
          return D.some(function (d) {
            var y = d.value.cooked;
            return y === null;
          });
        }

        n.exports = C;
      }
    }),
        hm = Z({
      "src/language-js/clean.js": function srcLanguageJsCleanJs(e, n) {
        "use strict";

        ae();

        var t = Pt(),
            s = new Set(["range", "raw", "comments", "leadingComments", "trailingComments", "innerComments", "extra", "start", "end", "loc", "flags", "errors", "tokens"]),
            i = function i(u) {
          var _iterator42 = _createForOfIteratorHelper(u.quasis),
              _step42;

          try {
            for (_iterator42.s(); !(_step42 = _iterator42.n()).done;) {
              var a = _step42.value;
              delete a.value;
            }
          } catch (err) {
            _iterator42.e(err);
          } finally {
            _iterator42.f();
          }
        };

        function r(u, a, c) {
          if (u.type === "Program" && delete a.sourceType, (u.type === "BigIntLiteral" || u.type === "BigIntLiteralTypeAnnotation") && a.value && (a.value = a.value.toLowerCase()), (u.type === "BigIntLiteral" || u.type === "Literal") && a.bigint && (a.bigint = a.bigint.toLowerCase()), u.type === "DecimalLiteral" && (a.value = Number(a.value)), u.type === "Literal" && a.decimal && (a.decimal = Number(a.decimal)), u.type === "EmptyStatement" || u.type === "JSXText" || u.type === "JSXExpressionContainer" && (u.expression.type === "Literal" || u.expression.type === "StringLiteral") && u.expression.value === " ") return null;

          if ((u.type === "Property" || u.type === "ObjectProperty" || u.type === "MethodDefinition" || u.type === "ClassProperty" || u.type === "ClassMethod" || u.type === "PropertyDefinition" || u.type === "TSDeclareMethod" || u.type === "TSPropertySignature" || u.type === "ObjectTypeProperty") && _typeof(u.key) == "object" && u.key && (u.key.type === "Literal" || u.key.type === "NumericLiteral" || u.key.type === "StringLiteral" || u.key.type === "Identifier") && delete a.key, u.type === "JSXElement" && u.openingElement.name.name === "style" && u.openingElement.attributes.some(function (C) {
            return C.name.name === "jsx";
          })) {
            var _iterator43 = _createForOfIteratorHelper(a.children),
                _step43;

            try {
              for (_iterator43.s(); !(_step43 = _iterator43.n()).done;) {
                var _step43$value = _step43.value,
                    C = _step43$value.type,
                    m = _step43$value.expression;
                C === "JSXExpressionContainer" && m.type === "TemplateLiteral" && i(m);
              }
            } catch (err) {
              _iterator43.e(err);
            } finally {
              _iterator43.f();
            }
          }

          u.type === "JSXAttribute" && u.name.name === "css" && u.value.type === "JSXExpressionContainer" && u.value.expression.type === "TemplateLiteral" && i(a.value.expression), u.type === "JSXAttribute" && u.value && u.value.type === "Literal" && /["']|&quot;|&apos;/.test(u.value.value) && (a.value.value = a.value.value.replace(/["']|&quot;|&apos;/g, '"'));
          var l = u.expression || u.callee;

          if (u.type === "Decorator" && l.type === "CallExpression" && l.callee.name === "Component" && l.arguments.length === 1) {
            var _C2 = u.expression.arguments[0].properties;

            var _iterator44 = _createForOfIteratorHelper(a.expression.arguments[0].properties.entries()),
                _step44;

            try {
              for (_iterator44.s(); !(_step44 = _iterator44.n()).done;) {
                var _step44$value = _slicedToArray(_step44.value, 2),
                    _m4 = _step44$value[0],
                    g = _step44$value[1];

                switch (_C2[_m4].key.name) {
                  case "styles":
                    g.value.type === "ArrayExpression" && i(g.value.elements[0]);
                    break;

                  case "template":
                    g.value.type === "TemplateLiteral" && i(g.value);
                    break;
                }
              }
            } catch (err) {
              _iterator44.e(err);
            } finally {
              _iterator44.f();
            }
          }

          if (u.type === "TaggedTemplateExpression" && (u.tag.type === "MemberExpression" || u.tag.type === "Identifier" && (u.tag.name === "gql" || u.tag.name === "graphql" || u.tag.name === "css" || u.tag.name === "md" || u.tag.name === "markdown" || u.tag.name === "html") || u.tag.type === "CallExpression") && i(a.quasi), u.type === "TemplateLiteral" && (u.leadingComments && u.leadingComments.some(function (m) {
            return t(m) && ["GraphQL", "HTML"].some(function (g) {
              return m.value === " ".concat(g, " ");
            });
          }) || c.type === "CallExpression" && c.callee.name === "graphql" || !u.leadingComments) && i(a), u.type === "InterpreterDirective" && (a.value = a.value.trimEnd()), (u.type === "TSIntersectionType" || u.type === "TSUnionType") && u.types.length === 1) return a.types[0];
        }

        r.ignoredProperties = s, n.exports = r;
      }
    }),
        Vi = {};

    kn(Vi, {
      EOL: function EOL() {
        return wn;
      },
      arch: function arch() {
        return Cm;
      },
      cpus: function cpus() {
        return zi;
      },
      default: function _default() {
        return Zi;
      },
      endianness: function endianness() {
        return Wi;
      },
      freemem: function freemem() {
        return Ji;
      },
      getNetworkInterfaces: function getNetworkInterfaces() {
        return Qi;
      },
      hostname: function hostname() {
        return $i;
      },
      loadavg: function loadavg() {
        return Hi;
      },
      networkInterfaces: function networkInterfaces() {
        return Yi;
      },
      platform: function platform() {
        return Em;
      },
      release: function release() {
        return Ki;
      },
      tmpDir: function tmpDir() {
        return Bn;
      },
      tmpdir: function tmpdir() {
        return Nn;
      },
      totalmem: function totalmem() {
        return Ui;
      },
      type: function type() {
        return Xi;
      },
      uptime: function uptime() {
        return Gi;
      }
    });

    function Wi() {
      if (_typeof(Fr) > "u") {
        var e = new ArrayBuffer(2),
            n = new Uint8Array(e),
            t = new Uint16Array(e);
        if (n[0] = 1, n[1] = 2, t[0] === 258) Fr = "BE";else if (t[0] === 513) Fr = "LE";else throw new Error("unable to figure out endianess");
      }

      return Fr;
    }

    function $i() {
      return _typeof(globalThis.location) < "u" ? globalThis.location.hostname : "";
    }

    function Hi() {
      return [];
    }

    function Gi() {
      return 0;
    }

    function Ji() {
      return Number.MAX_VALUE;
    }

    function Ui() {
      return Number.MAX_VALUE;
    }

    function zi() {
      return [];
    }

    function Xi() {
      return "Browser";
    }

    function Ki() {
      return _typeof(globalThis.navigator) < "u" ? globalThis.navigator.appVersion : "";
    }

    function Yi() {}

    function Qi() {}

    function Cm() {
      return "javascript";
    }

    function Em() {
      return "browser";
    }

    function Bn() {
      return "/tmp";
    }

    var Fr,
        Nn,
        wn,
        Zi,
        vm = br({
      "node-modules-polyfills:os": function nodeModulesPolyfillsOs() {
        ae(), Nn = Bn, wn = "\n", Zi = {
          EOL: wn,
          tmpdir: Nn,
          tmpDir: Bn,
          networkInterfaces: Yi,
          getNetworkInterfaces: Qi,
          release: Ki,
          type: Xi,
          cpus: zi,
          totalmem: Ui,
          freemem: Ji,
          uptime: Gi,
          loadavg: Hi,
          hostname: $i,
          endianness: Wi
        };
      }
    }),
        Fm = Z({
      "node-modules-polyfills-commonjs:os": function nodeModulesPolyfillsCommonjsOs(e, n) {
        ae();
        var t = (vm(), pt(Vi));

        if (t && t.default) {
          n.exports = t.default;

          for (var s in t) {
            n.exports[s] = t[s];
          }
        } else t && (n.exports = t);
      }
    }),
        Am = Z({
      "node_modules/detect-newline/index.js": function node_modulesDetectNewlineIndexJs(e, n) {
        "use strict";

        ae();

        var t = function t(s) {
          if (typeof s != "string") throw new TypeError("Expected a string");
          var i = s.match(/(?:\r?\n)/g) || [];
          if (i.length === 0) return;
          var r = i.filter(function (a) {
            return a === "\r\n";
          }).length,
              u = i.length - r;
          return r > u ? "\r\n" : "\n";
        };

        n.exports = t, n.exports.graceful = function (s) {
          return typeof s == "string" && t(s) || "\n";
        };
      }
    }),
        Sm = Z({
      "node_modules/jest-docblock/build/index.js": function node_modulesJestDocblockBuildIndexJs(e) {
        "use strict";

        ae(), Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.extract = p, e.parse = h, e.parseWithComments = N, e.print = T, e.strip = f;

        function n() {
          var b = Fm();
          return n = function n() {
            return b;
          }, b;
        }

        function t() {
          var b = s(Am());
          return t = function t() {
            return b;
          }, b;
        }

        function s(b) {
          return b && b.__esModule ? b : {
            default: b
          };
        }

        var i = /\*\/$/,
            r = /^\/\*\*/,
            u = /^\s*(\/\*\*?(.|\r?\n)*?\*\/)/,
            a = /(^|\s+)\/\/([^\r\n]*)/g,
            c = /^(\r?\n)+/,
            l = /(?:^|\r?\n) *(@[^\r\n]*?) *\r?\n *(?![^@\r\n]*\/\/[^]*)([^@\r\n\s][^@\r\n]+?) *\r?\n/g,
            C = /(?:^|\r?\n) *@(\S+) *([^\r\n]*)/g,
            m = /(\r?\n|^) *\* ?/g,
            g = [];

        function p(b) {
          var v = b.match(u);
          return v ? v[0].trimLeft() : "";
        }

        function f(b) {
          var v = b.match(u);
          return v && v[0] ? b.substring(v[0].length) : b;
        }

        function h(b) {
          return N(b).pragmas;
        }

        function N(b) {
          var v = (0, t().default)(b) || n().EOL;
          b = b.replace(r, "").replace(i, "").replace(m, "$1");
          var B = "";

          for (; B !== b;) {
            B = b, b = b.replace(l, "".concat(v, "$1 $2").concat(v));
          }

          b = b.replace(c, "").trimRight();
          var w = Object.create(null),
              I = b.replace(C, "").replace(c, "").trimRight(),
              E;

          for (; E = C.exec(b);) {
            var D = E[2].replace(a, "");
            typeof w[E[1]] == "string" || Array.isArray(w[E[1]]) ? w[E[1]] = g.concat(w[E[1]], D) : w[E[1]] = D;
          }

          return {
            comments: I,
            pragmas: w
          };
        }

        function T(b) {
          var _b$comments = b.comments,
              v = _b$comments === void 0 ? "" : _b$comments,
              _b$pragmas = b.pragmas,
              B = _b$pragmas === void 0 ? {} : _b$pragmas,
              w = (0, t().default)(v) || n().EOL,
              I = "/**",
              E = " *",
              D = " */",
              d = Object.keys(B),
              y = d.map(function (x) {
            return A(x, B[x]);
          }).reduce(function (x, F) {
            return x.concat(F);
          }, []).map(function (x) {
            return E + " " + x + w;
          }).join("");

          if (!v) {
            if (d.length === 0) return "";

            if (d.length === 1 && !Array.isArray(B[d[0]])) {
              var x = B[d[0]];
              return "".concat(I, " ").concat(A(d[0], x)[0]).concat(D);
            }
          }

          var o = v.split(w).map(function (x) {
            return "".concat(E, " ").concat(x);
          }).join(w) + w;
          return I + w + (v ? o : "") + (v && d.length ? E + w : "") + y + D;
        }

        function A(b, v) {
          return g.concat(v).map(function (B) {
            return "@".concat(b, " ").concat(B).trim();
          });
        }
      }
    }),
        xm = Z({
      "src/language-js/utils/get-shebang.js": function srcLanguageJsUtilsGetShebangJs(e, n) {
        "use strict";

        ae();

        function t(s) {
          if (!s.startsWith("#!")) return "";
          var i = s.indexOf("\n");
          return i === -1 ? s : s.slice(0, i);
        }

        n.exports = t;
      }
    }),
        eo = Z({
      "src/language-js/pragma.js": function srcLanguageJsPragmaJs(e, n) {
        "use strict";

        ae();

        var _Sm = Sm(),
            t = _Sm.parseWithComments,
            s = _Sm.strip,
            i = _Sm.extract,
            r = _Sm.print,
            _On3 = On(),
            u = _On3.normalizeEndOfLine,
            a = xm();

        function c(m) {
          var g = a(m);
          g && (m = m.slice(g.length + 1));

          var p = i(m),
              _t2 = t(p),
              f = _t2.pragmas,
              h = _t2.comments;

          return {
            shebang: g,
            text: m,
            pragmas: f,
            comments: h
          };
        }

        function l(m) {
          var g = Object.keys(c(m).pragmas);
          return g.includes("prettier") || g.includes("format");
        }

        function C(m) {
          var _c3 = c(m),
              g = _c3.shebang,
              p = _c3.text,
              f = _c3.pragmas,
              h = _c3.comments,
              N = s(p),
              T = r({
            pragmas: Object.assign({
              format: ""
            }, f),
            comments: h.trimStart()
          });

          return (g ? "".concat(g, "\n") : "") + u(T) + (N.startsWith("\n") ? "\n" : "\n\n") + N;
        }

        n.exports = {
          hasPragma: l,
          insertPragma: C
        };
      }
    }),
        to = Z({
      "src/language-js/comments.js": function srcLanguageJsCommentsJs(e, n) {
        "use strict";

        ae();

        var _Ge7 = Ge(),
            t = _Ge7.getLast,
            s = _Ge7.hasNewline,
            i = _Ge7.getNextNonSpaceNonCommentCharacterIndexWithStartIndex,
            r = _Ge7.getNextNonSpaceNonCommentCharacter,
            u = _Ge7.hasNewlineInRange,
            a = _Ge7.addLeadingComment,
            c = _Ge7.addTrailingComment,
            l = _Ge7.addDanglingComment,
            C = _Ge7.getNextNonSpaceNonCommentCharacterIndex,
            m = _Ge7.isNonEmptyArray,
            _Xe3 = Xe(),
            g = _Xe3.getFunctionParameters,
            p = _Xe3.isPrettierIgnoreComment,
            f = _Xe3.isJsxNode,
            h = _Xe3.hasFlowShorthandAnnotationComment,
            N = _Xe3.hasFlowAnnotationComment,
            T = _Xe3.hasIgnoreComment,
            A = _Xe3.isCallLikeExpression,
            b = _Xe3.getCallArguments,
            v = _Xe3.isCallExpression,
            B = _Xe3.isMemberExpression,
            w = _Xe3.isObjectProperty,
            I = _Xe3.isLineComment,
            E = _Xe3.getComments,
            D = _Xe3.CommentCheckFlags,
            d = _Xe3.markerForIfWithoutBlockAndSameLineComment,
            _nt2 = nt(),
            y = _nt2.locStart,
            o = _nt2.locEnd,
            x = Pt();

        function F(X) {
          return [fe, V, G, M, H, P, W, oe, de, le, Q, ge, ve, ee, K, Ee].some(function (Y) {
            return Y(X);
          });
        }

        function S(X) {
          return [R, V, re, oe, M, H, P, W, K, q, ue, Q, xe, Ee, me].some(function (Y) {
            return Y(X);
          });
        }

        function k(X) {
          return [fe, M, H, $, se, ee, Q, ne, U, pe, Ee, we].some(function (Y) {
            return Y(X);
          });
        }

        function _(X, Y) {
          var te = (X.body || X.properties).find(function (z) {
            var j = z.type;
            return j !== "EmptyStatement";
          });
          te ? a(te, Y) : l(X, Y);
        }

        function O(X, Y) {
          X.type === "BlockStatement" ? _(X, Y) : a(X, Y);
        }

        function R(X) {
          var Y = X.comment,
              te = X.followingNode;
          return te && J(Y) ? (a(te, Y), !0) : !1;
        }

        function M(X) {
          var Y = X.comment,
              te = X.precedingNode,
              z = X.enclosingNode,
              j = X.followingNode,
              Ce = X.text;
          if (!z || z.type !== "IfStatement" || !j) return !1;
          if (r(Ce, Y, o) === ")") return c(te, Y), !0;

          if (te === z.consequent && j === z.alternate) {
            if (te.type === "BlockStatement") c(te, Y);else {
              var je = Y.type === "SingleLine" || Y.loc.start.line === Y.loc.end.line,
                  Ue = Y.loc.start.line === te.loc.start.line;
              je && Ue ? l(te, Y, d) : l(z, Y);
            }
            return !0;
          }

          return j.type === "BlockStatement" ? (_(j, Y), !0) : j.type === "IfStatement" ? (O(j.consequent, Y), !0) : z.consequent === j ? (a(j, Y), !0) : !1;
        }

        function H(X) {
          var Y = X.comment,
              te = X.precedingNode,
              z = X.enclosingNode,
              j = X.followingNode,
              Ce = X.text;
          return !z || z.type !== "WhileStatement" || !j ? !1 : r(Ce, Y, o) === ")" ? (c(te, Y), !0) : j.type === "BlockStatement" ? (_(j, Y), !0) : z.body === j ? (a(j, Y), !0) : !1;
        }

        function P(X) {
          var Y = X.comment,
              te = X.precedingNode,
              z = X.enclosingNode,
              j = X.followingNode;
          return !z || z.type !== "TryStatement" && z.type !== "CatchClause" || !j ? !1 : z.type === "CatchClause" && te ? (c(te, Y), !0) : j.type === "BlockStatement" ? (_(j, Y), !0) : j.type === "TryStatement" ? (O(j.finalizer, Y), !0) : j.type === "CatchClause" ? (O(j.body, Y), !0) : !1;
        }

        function G(X) {
          var Y = X.comment,
              te = X.enclosingNode,
              z = X.followingNode;
          return B(te) && z && z.type === "Identifier" ? (a(te, Y), !0) : !1;
        }

        function re(X) {
          var Y = X.comment,
              te = X.precedingNode,
              z = X.enclosingNode,
              j = X.followingNode,
              Ce = X.text,
              Ne = te && !u(Ce, o(te), y(Y));
          return (!te || !Ne) && z && (z.type === "ConditionalExpression" || z.type === "TSConditionalType") && j ? (a(j, Y), !0) : !1;
        }

        function $(X) {
          var Y = X.comment,
              te = X.precedingNode,
              z = X.enclosingNode;
          return w(z) && z.shorthand && z.key === te && z.value.type === "AssignmentPattern" ? (c(z.value.left, Y), !0) : !1;
        }

        function W(X) {
          var Y = X.comment,
              te = X.precedingNode,
              z = X.enclosingNode,
              j = X.followingNode;

          if (z && (z.type === "ClassDeclaration" || z.type === "ClassExpression" || z.type === "DeclareClass" || z.type === "DeclareInterface" || z.type === "InterfaceDeclaration" || z.type === "TSInterfaceDeclaration")) {
            if (m(z.decorators) && !(j && j.type === "Decorator")) return c(t(z.decorators), Y), !0;
            if (z.body && j === z.body) return _(z.body, Y), !0;

            if (j) {
              if (z.superClass && j === z.superClass && te && (te === z.id || te === z.typeParameters)) return c(te, Y), !0;

              for (var _i13 = 0, _arr3 = ["implements", "extends", "mixins"]; _i13 < _arr3.length; _i13++) {
                var Ce = _arr3[_i13];
                if (z[Ce] && j === z[Ce][0]) return te && (te === z.id || te === z.typeParameters || te === z.superClass) ? c(te, Y) : l(z, Y, Ce), !0;
              }
            }
          }

          return !1;
        }

        function ee(X) {
          var Y = X.comment,
              te = X.precedingNode,
              z = X.enclosingNode,
              j = X.text;
          return z && te && r(j, Y, o) === "(" && (z.type === "Property" || z.type === "TSDeclareMethod" || z.type === "TSAbstractMethodDefinition") && te.type === "Identifier" && z.key === te && r(j, te, o) !== ":" || te && z && te.type === "Decorator" && (z.type === "ClassMethod" || z.type === "ClassProperty" || z.type === "PropertyDefinition" || z.type === "TSAbstractPropertyDefinition" || z.type === "TSAbstractMethodDefinition" || z.type === "TSDeclareMethod" || z.type === "MethodDefinition") ? (c(te, Y), !0) : !1;
        }

        function U(X) {
          var Y = X.comment,
              te = X.precedingNode,
              z = X.enclosingNode,
              j = X.text;
          return r(j, Y, o) !== "(" ? !1 : te && z && (z.type === "FunctionDeclaration" || z.type === "FunctionExpression" || z.type === "ClassMethod" || z.type === "MethodDefinition" || z.type === "ObjectMethod") ? (c(te, Y), !0) : !1;
        }

        function ne(X) {
          var Y = X.comment,
              te = X.enclosingNode,
              z = X.text;
          if (!(te && te.type === "ArrowFunctionExpression")) return !1;
          var j = C(z, Y, o);
          return j !== !1 && z.slice(j, j + 2) === "=>" ? (l(te, Y), !0) : !1;
        }

        function se(X) {
          var Y = X.comment,
              te = X.enclosingNode,
              z = X.text;
          return r(z, Y, o) !== ")" ? !1 : te && (ce(te) && g(te).length === 0 || A(te) && b(te).length === 0) ? (l(te, Y), !0) : te && (te.type === "MethodDefinition" || te.type === "TSAbstractMethodDefinition") && g(te.value).length === 0 ? (l(te.value, Y), !0) : !1;
        }

        function V(X) {
          var Y = X.comment,
              te = X.precedingNode,
              z = X.enclosingNode,
              j = X.followingNode,
              Ce = X.text;
          if (te && te.type === "FunctionTypeParam" && z && z.type === "FunctionTypeAnnotation" && j && j.type !== "FunctionTypeParam" || te && (te.type === "Identifier" || te.type === "AssignmentPattern") && z && ce(z) && r(Ce, Y, o) === ")") return c(te, Y), !0;

          if (z && z.type === "FunctionDeclaration" && j && j.type === "BlockStatement") {
            var Ne = function () {
              var je = g(z);
              if (je.length > 0) return i(Ce, o(t(je)));
              var Ue = i(Ce, o(z.id));
              return Ue !== !1 && i(Ce, Ue + 1);
            }();

            if (y(Y) > Ne) return _(j, Y), !0;
          }

          return !1;
        }

        function oe(X) {
          var Y = X.comment,
              te = X.enclosingNode;
          return te && te.type === "ImportSpecifier" ? (a(te, Y), !0) : !1;
        }

        function K(X) {
          var Y = X.comment,
              te = X.enclosingNode;
          return te && te.type === "LabeledStatement" ? (a(te, Y), !0) : !1;
        }

        function Ee(X) {
          var Y = X.comment,
              te = X.enclosingNode;
          return te && (te.type === "ContinueStatement" || te.type === "BreakStatement") && !te.label ? (c(te, Y), !0) : !1;
        }

        function q(X) {
          var Y = X.comment,
              te = X.precedingNode,
              z = X.enclosingNode;
          return v(z) && te && z.callee === te && z.arguments.length > 0 ? (a(z.arguments[0], Y), !0) : !1;
        }

        function le(X) {
          var Y = X.comment,
              te = X.precedingNode,
              z = X.enclosingNode,
              j = X.followingNode;
          return z && (z.type === "UnionTypeAnnotation" || z.type === "TSUnionType") ? (p(Y) && (j.prettierIgnore = !0, Y.unignore = !0), te ? (c(te, Y), !0) : !1) : (j && (j.type === "UnionTypeAnnotation" || j.type === "TSUnionType") && p(Y) && (j.types[0].prettierIgnore = !0, Y.unignore = !0), !1);
        }

        function ue(X) {
          var Y = X.comment,
              te = X.enclosingNode;
          return w(te) ? (a(te, Y), !0) : !1;
        }

        function Q(X) {
          var Y = X.comment,
              te = X.enclosingNode,
              z = X.followingNode,
              j = X.ast,
              Ce = X.isLastComment;
          return j && j.body && j.body.length === 0 ? (Ce ? l(j, Y) : a(j, Y), !0) : te && te.type === "Program" && te.body.length === 0 && !m(te.directives) ? (Ce ? l(te, Y) : a(te, Y), !0) : z && z.type === "Program" && z.body.length === 0 && te && te.type === "ModuleExpression" ? (l(z, Y), !0) : !1;
        }

        function de(X) {
          var Y = X.comment,
              te = X.enclosingNode;
          return te && (te.type === "ForInStatement" || te.type === "ForOfStatement") ? (a(te, Y), !0) : !1;
        }

        function ge(X) {
          var Y = X.comment,
              te = X.precedingNode,
              z = X.enclosingNode,
              j = X.text;
          return te && te.type === "ImportSpecifier" && z && z.type === "ImportDeclaration" && s(j, o(Y)) ? (c(te, Y), !0) : !1;
        }

        function ve(X) {
          var Y = X.comment,
              te = X.enclosingNode;
          return te && te.type === "AssignmentPattern" ? (a(te, Y), !0) : !1;
        }

        function xe(X) {
          var Y = X.comment,
              te = X.enclosingNode,
              z = X.followingNode;
          return te && (te.type === "VariableDeclarator" || te.type === "AssignmentExpression" || te.type === "TypeAlias" || te.type === "TSTypeAliasDeclaration") && z && (z.type === "ObjectExpression" || z.type === "ArrayExpression" || z.type === "TemplateLiteral" || z.type === "TaggedTemplateExpression" || z.type === "ObjectTypeAnnotation" || z.type === "TSTypeLiteral" || x(Y)) ? (a(z, Y), !0) : !1;
        }

        function we(X) {
          var Y = X.comment,
              te = X.enclosingNode,
              z = X.followingNode,
              j = X.text;
          return !z && te && (te.type === "TSMethodSignature" || te.type === "TSDeclareFunction" || te.type === "TSAbstractMethodDefinition") && r(j, Y, o) === ";" ? (c(te, Y), !0) : !1;
        }

        function fe(X) {
          var Y = X.comment,
              te = X.enclosingNode,
              z = X.followingNode;
          if (p(Y) && te && te.type === "TSMappedType" && z && z.type === "TSTypeParameter" && z.constraint) return te.prettierIgnore = !0, Y.unignore = !0, !0;
        }

        function pe(X) {
          var Y = X.comment,
              te = X.precedingNode,
              z = X.enclosingNode,
              j = X.followingNode;
          return !z || z.type !== "TSMappedType" ? !1 : j && j.type === "TSTypeParameter" && j.name ? (a(j.name, Y), !0) : te && te.type === "TSTypeParameter" && te.constraint ? (c(te.constraint, Y), !0) : !1;
        }

        function me(X) {
          var Y = X.comment,
              te = X.enclosingNode,
              z = X.followingNode;
          return !te || te.type !== "SwitchCase" || te.test ? !1 : (z.type === "BlockStatement" && I(Y) ? _(z, Y) : l(te, Y), !0);
        }

        function ce(X) {
          return X.type === "ArrowFunctionExpression" || X.type === "FunctionExpression" || X.type === "FunctionDeclaration" || X.type === "ObjectMethod" || X.type === "ClassMethod" || X.type === "TSDeclareFunction" || X.type === "TSCallSignatureDeclaration" || X.type === "TSConstructSignatureDeclaration" || X.type === "TSMethodSignature" || X.type === "TSConstructorType" || X.type === "TSFunctionType" || X.type === "TSDeclareMethod";
        }

        function he(X, Y) {
          if ((Y.parser === "typescript" || Y.parser === "flow" || Y.parser === "acorn" || Y.parser === "espree" || Y.parser === "meriyah" || Y.parser === "__babel_estree") && X.type === "MethodDefinition" && X.value && X.value.type === "FunctionExpression" && g(X.value).length === 0 && !X.value.returnType && !m(X.value.typeParameters) && X.value.body) return [].concat(_toConsumableArray(X.decorators || []), [X.key, X.value.body]);
        }

        function J(X) {
          return x(X) && X.value[0] === "*" && /@type\b/.test(X.value);
        }

        function ye(X) {
          var Y = X.getValue(),
              te = X.getParentNode(),
              z = function z(j) {
            return N(E(j, D.Leading)) || N(E(j, D.Trailing));
          };

          return (Y && (f(Y) || h(Y) || v(te) && z(Y)) || te && (te.type === "JSXSpreadAttribute" || te.type === "JSXSpreadChild" || te.type === "UnionTypeAnnotation" || te.type === "TSUnionType" || (te.type === "ClassDeclaration" || te.type === "ClassExpression") && te.superClass === Y)) && (!T(X) || te.type === "UnionTypeAnnotation" || te.type === "TSUnionType");
        }

        n.exports = {
          handleOwnLineComment: F,
          handleEndOfLineComment: S,
          handleRemainingComment: k,
          isTypeCastComment: J,
          getCommentChildNodes: he,
          willPrintOwnComments: ye
        };
      }
    }),
        kt = Z({
      "src/language-js/needs-parens.js": function srcLanguageJsNeedsParensJs(e, n) {
        "use strict";

        ae();

        var t = st(),
            s = Rn(),
            _Xe4 = Xe(),
            i = _Xe4.getFunctionParameters,
            r = _Xe4.getLeftSidePathName,
            u = _Xe4.hasFlowShorthandAnnotationComment,
            a = _Xe4.hasNakedLeftSide,
            c = _Xe4.hasNode,
            l = _Xe4.isBitwiseOperator,
            C = _Xe4.startsWithNoLookaheadToken,
            m = _Xe4.shouldFlatten,
            g = _Xe4.getPrecedence,
            p = _Xe4.isCallExpression,
            f = _Xe4.isMemberExpression,
            h = _Xe4.isObjectProperty;

        function N(I, E) {
          var D = I.getParentNode();
          if (!D) return !1;
          var d = I.getName(),
              y = I.getNode();
          if (E.__isInHtmlInterpolation && !E.bracketSpacing && v(y) && B(I)) return !0;
          if (T(y)) return !1;
          if (E.parser !== "flow" && u(I.getValue())) return !0;
          if (y.type === "Identifier") return !!(y.extra && y.extra.parenthesized && /^PRETTIER_HTML_PLACEHOLDER_\d+_\d+_IN_JS$/.test(y.name) || d === "left" && y.name === "async" && D.type === "ForOfStatement" && !D.await);

          switch (D.type) {
            case "ParenthesizedExpression":
              return !1;

            case "ClassDeclaration":
            case "ClassExpression":
              {
                if (d === "superClass" && (y.type === "ArrowFunctionExpression" || y.type === "AssignmentExpression" || y.type === "AwaitExpression" || y.type === "BinaryExpression" || y.type === "ConditionalExpression" || y.type === "LogicalExpression" || y.type === "NewExpression" || y.type === "ObjectExpression" || y.type === "SequenceExpression" || y.type === "TaggedTemplateExpression" || y.type === "UnaryExpression" || y.type === "UpdateExpression" || y.type === "YieldExpression" || y.type === "TSNonNullExpression")) return !0;
                break;
              }

            case "ExportDefaultDeclaration":
              return w(I, E) || y.type === "SequenceExpression";

            case "Decorator":
              {
                if (d === "expression") {
                  var o = !1,
                      x = !1,
                      F = y;

                  for (; F;) {
                    switch (F.type) {
                      case "MemberExpression":
                        x = !0, F = F.object;
                        break;

                      case "CallExpression":
                        if (x || o) return E.parser !== "typescript";
                        o = !0, F = F.callee;
                        break;

                      case "Identifier":
                        return !1;

                      case "TaggedTemplateExpression":
                        return E.parser !== "typescript";

                      default:
                        return !0;
                    }
                  }

                  return !0;
                }

                break;
              }

            case "ExpressionStatement":
              {
                if (C(y, !0)) return !0;
                break;
              }

            case "ArrowFunctionExpression":
              {
                if (d === "body" && y.type !== "SequenceExpression" && C(y, !1)) return !0;
                break;
              }
          }

          switch (y.type) {
            case "UpdateExpression":
              if (D.type === "UnaryExpression") return y.prefix && (y.operator === "++" && D.operator === "+" || y.operator === "--" && D.operator === "-");

            case "UnaryExpression":
              switch (D.type) {
                case "UnaryExpression":
                  return y.operator === D.operator && (y.operator === "+" || y.operator === "-");

                case "BindExpression":
                  return !0;

                case "MemberExpression":
                case "OptionalMemberExpression":
                  return d === "object";

                case "TaggedTemplateExpression":
                  return !0;

                case "NewExpression":
                case "CallExpression":
                case "OptionalCallExpression":
                  return d === "callee";

                case "BinaryExpression":
                  return d === "left" && D.operator === "**";

                case "TSNonNullExpression":
                  return !0;

                default:
                  return !1;
              }

            case "BinaryExpression":
              {
                if (D.type === "UpdateExpression" || y.operator === "in" && A(I)) return !0;

                if (y.operator === "|>" && y.extra && y.extra.parenthesized) {
                  var _o2 = I.getParentNode(1);

                  if (_o2.type === "BinaryExpression" && _o2.operator === "|>") return !0;
                }
              }

            case "TSTypeAssertion":
            case "TSAsExpression":
            case "LogicalExpression":
              switch (D.type) {
                case "TSAsExpression":
                  return y.type !== "TSAsExpression";

                case "ConditionalExpression":
                  return y.type === "TSAsExpression";

                case "CallExpression":
                case "NewExpression":
                case "OptionalCallExpression":
                  return d === "callee";

                case "ClassExpression":
                case "ClassDeclaration":
                  return d === "superClass";

                case "TSTypeAssertion":
                case "TaggedTemplateExpression":
                case "UnaryExpression":
                case "JSXSpreadAttribute":
                case "SpreadElement":
                case "SpreadProperty":
                case "BindExpression":
                case "AwaitExpression":
                case "TSNonNullExpression":
                case "UpdateExpression":
                  return !0;

                case "MemberExpression":
                case "OptionalMemberExpression":
                  return d === "object";

                case "AssignmentExpression":
                case "AssignmentPattern":
                  return d === "left" && (y.type === "TSTypeAssertion" || y.type === "TSAsExpression");

                case "LogicalExpression":
                  if (y.type === "LogicalExpression") return D.operator !== y.operator;

                case "BinaryExpression":
                  {
                    var _o3 = y.operator,
                        _x3 = y.type;
                    if (!_o3 && _x3 !== "TSTypeAssertion") return !0;

                    var _F3 = g(_o3),
                        S = D.operator,
                        k = g(S);

                    return k > _F3 || d === "right" && k === _F3 || k === _F3 && !m(S, _o3) ? !0 : k < _F3 && _o3 === "%" ? S === "+" || S === "-" : !!l(S);
                  }

                default:
                  return !1;
              }

            case "SequenceExpression":
              switch (D.type) {
                case "ReturnStatement":
                  return !1;

                case "ForStatement":
                  return !1;

                case "ExpressionStatement":
                  return d !== "expression";

                case "ArrowFunctionExpression":
                  return d !== "body";

                default:
                  return !0;
              }

            case "YieldExpression":
              if (D.type === "UnaryExpression" || D.type === "AwaitExpression" || D.type === "TSAsExpression" || D.type === "TSNonNullExpression") return !0;

            case "AwaitExpression":
              switch (D.type) {
                case "TaggedTemplateExpression":
                case "UnaryExpression":
                case "LogicalExpression":
                case "SpreadElement":
                case "SpreadProperty":
                case "TSAsExpression":
                case "TSNonNullExpression":
                case "BindExpression":
                  return !0;

                case "MemberExpression":
                case "OptionalMemberExpression":
                  return d === "object";

                case "NewExpression":
                case "CallExpression":
                case "OptionalCallExpression":
                  return d === "callee";

                case "ConditionalExpression":
                  return d === "test";

                case "BinaryExpression":
                  return !(!y.argument && D.operator === "|>");

                default:
                  return !1;
              }

            case "TSConditionalType":
              if (d === "extendsType" && D.type === "TSConditionalType") return !0;

            case "TSFunctionType":
            case "TSConstructorType":
              if (d === "checkType" && D.type === "TSConditionalType") return !0;

            case "TSUnionType":
            case "TSIntersectionType":
              if ((D.type === "TSUnionType" || D.type === "TSIntersectionType") && D.types.length > 1 && (!y.types || y.types.length > 1)) return !0;

            case "TSInferType":
              if (y.type === "TSInferType" && D.type === "TSRestType") return !1;

            case "TSTypeOperator":
              return D.type === "TSArrayType" || D.type === "TSOptionalType" || D.type === "TSRestType" || d === "objectType" && D.type === "TSIndexedAccessType" || D.type === "TSTypeOperator" || D.type === "TSTypeAnnotation" && I.getParentNode(1).type.startsWith("TSJSDoc");

            case "ArrayTypeAnnotation":
              return D.type === "NullableTypeAnnotation";

            case "IntersectionTypeAnnotation":
            case "UnionTypeAnnotation":
              return D.type === "ArrayTypeAnnotation" || D.type === "NullableTypeAnnotation" || D.type === "IntersectionTypeAnnotation" || D.type === "UnionTypeAnnotation" || d === "objectType" && (D.type === "IndexedAccessType" || D.type === "OptionalIndexedAccessType");

            case "NullableTypeAnnotation":
              return D.type === "ArrayTypeAnnotation" || d === "objectType" && (D.type === "IndexedAccessType" || D.type === "OptionalIndexedAccessType");

            case "FunctionTypeAnnotation":
              {
                var _o4 = D.type === "NullableTypeAnnotation" ? I.getParentNode(1) : D;

                return _o4.type === "UnionTypeAnnotation" || _o4.type === "IntersectionTypeAnnotation" || _o4.type === "ArrayTypeAnnotation" || d === "objectType" && (_o4.type === "IndexedAccessType" || _o4.type === "OptionalIndexedAccessType") || _o4.type === "NullableTypeAnnotation" || D.type === "FunctionTypeParam" && D.name === null && i(y).some(function (x) {
                  return x.typeAnnotation && x.typeAnnotation.type === "NullableTypeAnnotation";
                });
              }

            case "OptionalIndexedAccessType":
              return d === "objectType" && D.type === "IndexedAccessType";

            case "TypeofTypeAnnotation":
              return d === "objectType" && (D.type === "IndexedAccessType" || D.type === "OptionalIndexedAccessType");

            case "StringLiteral":
            case "NumericLiteral":
            case "Literal":
              if (typeof y.value == "string" && D.type === "ExpressionStatement" && !D.directive) {
                var _o5 = I.getParentNode(1);

                return _o5.type === "Program" || _o5.type === "BlockStatement";
              }

              return d === "object" && D.type === "MemberExpression" && typeof y.value == "number";

            case "AssignmentExpression":
              {
                var _o6 = I.getParentNode(1);

                return d === "body" && D.type === "ArrowFunctionExpression" ? !0 : d === "key" && (D.type === "ClassProperty" || D.type === "PropertyDefinition") && D.computed || (d === "init" || d === "update") && D.type === "ForStatement" ? !1 : D.type === "ExpressionStatement" ? y.left.type === "ObjectPattern" : !(d === "key" && D.type === "TSPropertySignature" || D.type === "AssignmentExpression" || D.type === "SequenceExpression" && _o6 && _o6.type === "ForStatement" && (_o6.init === D || _o6.update === D) || d === "value" && D.type === "Property" && _o6 && _o6.type === "ObjectPattern" && _o6.properties.includes(D) || D.type === "NGChainedExpression");
              }

            case "ConditionalExpression":
              switch (D.type) {
                case "TaggedTemplateExpression":
                case "UnaryExpression":
                case "SpreadElement":
                case "SpreadProperty":
                case "BinaryExpression":
                case "LogicalExpression":
                case "NGPipeExpression":
                case "ExportDefaultDeclaration":
                case "AwaitExpression":
                case "JSXSpreadAttribute":
                case "TSTypeAssertion":
                case "TypeCastExpression":
                case "TSAsExpression":
                case "TSNonNullExpression":
                  return !0;

                case "NewExpression":
                case "CallExpression":
                case "OptionalCallExpression":
                  return d === "callee";

                case "ConditionalExpression":
                  return d === "test";

                case "MemberExpression":
                case "OptionalMemberExpression":
                  return d === "object";

                default:
                  return !1;
              }

            case "FunctionExpression":
              switch (D.type) {
                case "NewExpression":
                case "CallExpression":
                case "OptionalCallExpression":
                  return d === "callee";

                case "TaggedTemplateExpression":
                  return !0;

                default:
                  return !1;
              }

            case "ArrowFunctionExpression":
              switch (D.type) {
                case "BinaryExpression":
                  return D.operator !== "|>" || y.extra && y.extra.parenthesized;

                case "NewExpression":
                case "CallExpression":
                case "OptionalCallExpression":
                  return d === "callee";

                case "MemberExpression":
                case "OptionalMemberExpression":
                  return d === "object";

                case "TSAsExpression":
                case "TSNonNullExpression":
                case "BindExpression":
                case "TaggedTemplateExpression":
                case "UnaryExpression":
                case "LogicalExpression":
                case "AwaitExpression":
                case "TSTypeAssertion":
                  return !0;

                case "ConditionalExpression":
                  return d === "test";

                default:
                  return !1;
              }

            case "ClassExpression":
              if (s(y.decorators)) return !0;

              switch (D.type) {
                case "NewExpression":
                  return d === "callee";

                default:
                  return !1;
              }

            case "OptionalMemberExpression":
            case "OptionalCallExpression":
              {
                var _o7 = I.getParentNode(1);

                if (d === "object" && D.type === "MemberExpression" || d === "callee" && (D.type === "CallExpression" || D.type === "NewExpression") || D.type === "TSNonNullExpression" && _o7.type === "MemberExpression" && _o7.object === D) return !0;
              }

            case "CallExpression":
            case "MemberExpression":
            case "TaggedTemplateExpression":
            case "TSNonNullExpression":
              if (d === "callee" && (D.type === "BindExpression" || D.type === "NewExpression")) {
                var _o8 = y;

                for (; _o8;) {
                  switch (_o8.type) {
                    case "CallExpression":
                    case "OptionalCallExpression":
                      return !0;

                    case "MemberExpression":
                    case "OptionalMemberExpression":
                    case "BindExpression":
                      _o8 = _o8.object;
                      break;

                    case "TaggedTemplateExpression":
                      _o8 = _o8.tag;
                      break;

                    case "TSNonNullExpression":
                      _o8 = _o8.expression;
                      break;

                    default:
                      return !1;
                  }
                }
              }

              return !1;

            case "BindExpression":
              return d === "callee" && (D.type === "BindExpression" || D.type === "NewExpression") || d === "object" && f(D);

            case "NGPipeExpression":
              return !(D.type === "NGRoot" || D.type === "NGMicrosyntaxExpression" || D.type === "ObjectProperty" && !(y.extra && y.extra.parenthesized) || D.type === "ArrayExpression" || p(D) && D.arguments[d] === y || d === "right" && D.type === "NGPipeExpression" || d === "property" && D.type === "MemberExpression" || D.type === "AssignmentExpression");

            case "JSXFragment":
            case "JSXElement":
              return d === "callee" || d === "left" && D.type === "BinaryExpression" && D.operator === "<" || D.type !== "ArrayExpression" && D.type !== "ArrowFunctionExpression" && D.type !== "AssignmentExpression" && D.type !== "AssignmentPattern" && D.type !== "BinaryExpression" && D.type !== "NewExpression" && D.type !== "ConditionalExpression" && D.type !== "ExpressionStatement" && D.type !== "JsExpressionRoot" && D.type !== "JSXAttribute" && D.type !== "JSXElement" && D.type !== "JSXExpressionContainer" && D.type !== "JSXFragment" && D.type !== "LogicalExpression" && !p(D) && !h(D) && D.type !== "ReturnStatement" && D.type !== "ThrowStatement" && D.type !== "TypeCastExpression" && D.type !== "VariableDeclarator" && D.type !== "YieldExpression";

            case "TypeAnnotation":
              return d === "returnType" && D.type === "ArrowFunctionExpression" && b(y);
          }

          return !1;
        }

        function T(I) {
          return I.type === "BlockStatement" || I.type === "BreakStatement" || I.type === "ClassBody" || I.type === "ClassDeclaration" || I.type === "ClassMethod" || I.type === "ClassProperty" || I.type === "PropertyDefinition" || I.type === "ClassPrivateProperty" || I.type === "ContinueStatement" || I.type === "DebuggerStatement" || I.type === "DeclareClass" || I.type === "DeclareExportAllDeclaration" || I.type === "DeclareExportDeclaration" || I.type === "DeclareFunction" || I.type === "DeclareInterface" || I.type === "DeclareModule" || I.type === "DeclareModuleExports" || I.type === "DeclareVariable" || I.type === "DoWhileStatement" || I.type === "EnumDeclaration" || I.type === "ExportAllDeclaration" || I.type === "ExportDefaultDeclaration" || I.type === "ExportNamedDeclaration" || I.type === "ExpressionStatement" || I.type === "ForInStatement" || I.type === "ForOfStatement" || I.type === "ForStatement" || I.type === "FunctionDeclaration" || I.type === "IfStatement" || I.type === "ImportDeclaration" || I.type === "InterfaceDeclaration" || I.type === "LabeledStatement" || I.type === "MethodDefinition" || I.type === "ReturnStatement" || I.type === "SwitchStatement" || I.type === "ThrowStatement" || I.type === "TryStatement" || I.type === "TSDeclareFunction" || I.type === "TSEnumDeclaration" || I.type === "TSImportEqualsDeclaration" || I.type === "TSInterfaceDeclaration" || I.type === "TSModuleDeclaration" || I.type === "TSNamespaceExportDeclaration" || I.type === "TypeAlias" || I.type === "VariableDeclaration" || I.type === "WhileStatement" || I.type === "WithStatement";
        }

        function A(I) {
          var E = 0,
              D = I.getValue();

          for (; D;) {
            var d = I.getParentNode(E++);
            if (d && d.type === "ForStatement" && d.init === D) return !0;
            D = d;
          }

          return !1;
        }

        function b(I) {
          return c(I, function (E) {
            return E.type === "ObjectTypeAnnotation" && c(E, function (D) {
              return D.type === "FunctionTypeAnnotation" || void 0;
            }) || void 0;
          });
        }

        function v(I) {
          switch (I.type) {
            case "ObjectExpression":
              return !0;

            default:
              return !1;
          }
        }

        function B(I) {
          var E = I.getValue(),
              D = I.getParentNode(),
              d = I.getName();

          switch (D.type) {
            case "NGPipeExpression":
              if (typeof d == "number" && D.arguments[d] === E && D.arguments.length - 1 === d) return I.callParent(B);
              break;

            case "ObjectProperty":
              if (d === "value") {
                var y = I.getParentNode(1);
                return t(y.properties) === D;
              }

              break;

            case "BinaryExpression":
            case "LogicalExpression":
              if (d === "right") return I.callParent(B);
              break;

            case "ConditionalExpression":
              if (d === "alternate") return I.callParent(B);
              break;

            case "UnaryExpression":
              if (D.prefix) return I.callParent(B);
              break;
          }

          return !1;
        }

        function w(I, E) {
          var D = I.getValue(),
              d = I.getParentNode();
          return D.type === "FunctionExpression" || D.type === "ClassExpression" ? d.type === "ExportDefaultDeclaration" || !N(I, E) : !a(D) || d.type !== "ExportDefaultDeclaration" && N(I, E) ? !1 : I.call.apply(I, [function (y) {
            return w(y, E);
          }].concat(_toConsumableArray(r(I, D))));
        }

        n.exports = N;
      }
    }),
        ro = Z({
      "src/language-js/print-preprocess.js": function srcLanguageJsPrintPreprocessJs(e, n) {
        "use strict";

        ae();

        function t(s, i) {
          switch (i.parser) {
            case "json":
            case "json5":
            case "json-stringify":
            case "__js_expression":
            case "__vue_expression":
              return Object.assign(Object.assign({}, s), {}, {
                type: i.parser.startsWith("__") ? "JsExpressionRoot" : "JsonRoot",
                node: s,
                comments: [],
                rootMarker: i.rootMarker
              });

            default:
              return s;
          }
        }

        n.exports = t;
      }
    }),
        bm = Z({
      "src/language-js/print/html-binding.js": function srcLanguageJsPrintHtmlBindingJs(e, n) {
        "use strict";

        ae();

        var _Le10 = Le(),
            _Le10$builders = _Le10.builders,
            t = _Le10$builders.join,
            s = _Le10$builders.line,
            i = _Le10$builders.group,
            r = _Le10$builders.softline,
            u = _Le10$builders.indent;

        function a(l, C, m) {
          var g = l.getValue();

          if (C.__onHtmlBindingRoot && l.getName() === null && C.__onHtmlBindingRoot(g, C), g.type === "File") {
            if (C.__isVueForBindingLeft) return l.call(function (p) {
              var f = t([",", s], p.map(m, "params")),
                  _p$getValue = p.getValue(),
                  h = _p$getValue.params;

              return h.length === 1 ? f : ["(", u([r, i(f)]), r, ")"];
            }, "program", "body", 0);
            if (C.__isVueBindings) return l.call(function (p) {
              return t([",", s], p.map(m, "params"));
            }, "program", "body", 0);
          }
        }

        function c(l) {
          switch (l.type) {
            case "MemberExpression":
              switch (l.property.type) {
                case "Identifier":
                case "NumericLiteral":
                case "StringLiteral":
                  return c(l.object);
              }

              return !1;

            case "Identifier":
              return !0;

            default:
              return !1;
          }
        }

        n.exports = {
          isVueEventBindingExpression: c,
          printHtmlBinding: a
        };
      }
    }),
        Jn = Z({
      "src/language-js/print/binaryish.js": function srcLanguageJsPrintBinaryishJs(e, n) {
        "use strict";

        ae();

        var _Qe2 = Qe(),
            t = _Qe2.printComments,
            _Ge8 = Ge(),
            s = _Ge8.getLast,
            _Le11 = Le(),
            _Le11$builders = _Le11.builders,
            i = _Le11$builders.join,
            r = _Le11$builders.line,
            u = _Le11$builders.softline,
            a = _Le11$builders.group,
            c = _Le11$builders.indent,
            l = _Le11$builders.align,
            C = _Le11$builders.ifBreak,
            m = _Le11$builders.indentIfBreak,
            _Le11$utils = _Le11.utils,
            g = _Le11$utils.cleanDoc,
            p = _Le11$utils.getDocParts,
            f = _Le11$utils.isConcat,
            _Xe5 = Xe(),
            h = _Xe5.hasLeadingOwnLineComment,
            N = _Xe5.isBinaryish,
            T = _Xe5.isJsxNode,
            A = _Xe5.shouldFlatten,
            b = _Xe5.hasComment,
            v = _Xe5.CommentCheckFlags,
            B = _Xe5.isCallExpression,
            w = _Xe5.isMemberExpression,
            I = _Xe5.isObjectProperty,
            E = _Xe5.isEnabledHackPipeline,
            D = 0;

        function d(x, F, S) {
          var k = x.getValue(),
              _ = x.getParentNode(),
              O = x.getParentNode(1),
              R = k !== _.body && (_.type === "IfStatement" || _.type === "WhileStatement" || _.type === "SwitchStatement" || _.type === "DoWhileStatement"),
              M = E(F) && k.operator === "|>",
              H = y(x, S, F, !1, R);

          if (R) return H;
          if (M) return a(H);
          if (B(_) && _.callee === k || _.type === "UnaryExpression" || w(_) && !_.computed) return a([c([u].concat(_toConsumableArray(H))), u]);
          var P = _.type === "ReturnStatement" || _.type === "ThrowStatement" || _.type === "JSXExpressionContainer" && O.type === "JSXAttribute" || k.operator !== "|" && _.type === "JsExpressionRoot" || k.type !== "NGPipeExpression" && (_.type === "NGRoot" && F.parser === "__ng_binding" || _.type === "NGMicrosyntaxExpression" && O.type === "NGMicrosyntax" && O.body.length === 1) || k === _.body && _.type === "ArrowFunctionExpression" || k !== _.body && _.type === "ForStatement" || _.type === "ConditionalExpression" && O.type !== "ReturnStatement" && O.type !== "ThrowStatement" && !B(O) || _.type === "TemplateLiteral",
              G = _.type === "AssignmentExpression" || _.type === "VariableDeclarator" || _.type === "ClassProperty" || _.type === "PropertyDefinition" || _.type === "TSAbstractPropertyDefinition" || _.type === "ClassPrivateProperty" || I(_),
              re = N(k.left) && A(k.operator, k.left.operator);
          if (P || o(k) && !re || !o(k) && G) return a(H);
          if (H.length === 0) return "";
          var $ = T(k.right),
              W = H.findIndex(function (oe) {
            return typeof oe != "string" && !Array.isArray(oe) && oe.type === "group";
          }),
              ee = H.slice(0, W === -1 ? 1 : W + 1),
              U = H.slice(ee.length, $ ? -1 : void 0),
              ne = Symbol("logicalChain-" + ++D),
              se = a([].concat(_toConsumableArray(ee), [c(U)]), {
            id: ne
          });
          if (!$) return se;
          var V = s(H);
          return a([se, m(V, {
            groupId: ne
          })]);
        }

        function y(x, F, S, k, _) {
          var O = x.getValue();
          if (!N(O)) return [a(F())];
          var R = [];
          A(O.operator, O.left.operator) ? R = x.call(function (U) {
            return y(U, F, S, !0, _);
          }, "left") : R.push(a(F("left")));
          var M = o(O),
              H = (O.operator === "|>" || O.type === "NGPipeExpression" || O.operator === "|" && S.parser === "__vue_expression") && !h(S.originalText, O.right),
              P = O.type === "NGPipeExpression" ? "|" : O.operator,
              G = O.type === "NGPipeExpression" && O.arguments.length > 0 ? a(c([u, ": ", i([u, ":", C(" ")], x.map(F, "arguments").map(function (U) {
            return l(2, a(U));
          }))])) : "",
              re;
          if (M) re = [P, " ", F("right"), G];else {
            var ne = E(S) && P === "|>" ? x.call(function (se) {
              return y(se, F, S, !0, _);
            }, "right") : F("right");
            re = [H ? r : "", P, H ? " " : r, ne, G];
          }
          var $ = x.getParentNode(),
              W = b(O.left, v.Trailing | v.Line),
              ee = W || !(_ && O.type === "LogicalExpression") && $.type !== O.type && O.left.type !== O.type && O.right.type !== O.type;

          if (R.push(H ? "" : " ", ee ? a(re, {
            shouldBreak: W
          }) : re), k && b(O)) {
            var U = g(t(x, R, S));
            return f(U) || U.type === "fill" ? p(U) : [U];
          }

          return R;
        }

        function o(x) {
          return x.type !== "LogicalExpression" ? !1 : !!(x.right.type === "ObjectExpression" && x.right.properties.length > 0 || x.right.type === "ArrayExpression" && x.right.elements.length > 0 || T(x.right));
        }

        n.exports = {
          printBinaryishExpression: d,
          shouldInlineLogicalExpression: o
        };
      }
    }),
        Tm = Z({
      "src/language-js/print/angular.js": function srcLanguageJsPrintAngularJs(e, n) {
        "use strict";

        ae();

        var _Le12 = Le(),
            _Le12$builders = _Le12.builders,
            t = _Le12$builders.join,
            s = _Le12$builders.line,
            i = _Le12$builders.group,
            _Xe6 = Xe(),
            r = _Xe6.hasNode,
            u = _Xe6.hasComment,
            a = _Xe6.getComments,
            _Jn = Jn(),
            c = _Jn.printBinaryishExpression;

        function l(g, p, f) {
          var h = g.getValue();
          if (!!h.type.startsWith("NG")) switch (h.type) {
            case "NGRoot":
              return [f("node"), u(h.node) ? " //" + a(h.node)[0].value.trimEnd() : ""];

            case "NGPipeExpression":
              return c(g, p, f);

            case "NGChainedExpression":
              return i(t([";", s], g.map(function (N) {
                return m(N) ? f() : ["(", f(), ")"];
              }, "expressions")));

            case "NGEmptyExpression":
              return "";

            case "NGQuotedExpression":
              return [h.prefix, ": ", h.value.trim()];

            case "NGMicrosyntax":
              return g.map(function (N, T) {
                return [T === 0 ? "" : C(N.getValue(), T, h) ? " " : [";", s], f()];
              }, "body");

            case "NGMicrosyntaxKey":
              return /^[$_a-z][\w$]*(?:-[$_a-z][\w$])*$/i.test(h.name) ? h.name : JSON.stringify(h.name);

            case "NGMicrosyntaxExpression":
              return [f("expression"), h.alias === null ? "" : [" as ", f("alias")]];

            case "NGMicrosyntaxKeyedExpression":
              {
                var _N5 = g.getName(),
                    T = g.getParentNode(),
                    A = C(h, _N5, T) || (_N5 === 1 && (h.key.name === "then" || h.key.name === "else") || _N5 === 2 && h.key.name === "else" && T.body[_N5 - 1].type === "NGMicrosyntaxKeyedExpression" && T.body[_N5 - 1].key.name === "then") && T.body[0].type === "NGMicrosyntaxExpression";

                return [f("key"), A ? " " : ": ", f("expression")];
              }

            case "NGMicrosyntaxLet":
              return ["let ", f("key"), h.value === null ? "" : [" = ", f("value")]];

            case "NGMicrosyntaxAs":
              return [f("key"), " as ", f("alias")];

            default:
              throw new Error("Unknown Angular node type: ".concat(JSON.stringify(h.type), "."));
          }
        }

        function C(g, p, f) {
          return g.type === "NGMicrosyntaxKeyedExpression" && g.key.name === "of" && p === 1 && f.body[0].type === "NGMicrosyntaxLet" && f.body[0].value === null;
        }

        function m(g) {
          return r(g.getValue(), function (p) {
            switch (p.type) {
              case void 0:
                return !1;

              case "CallExpression":
              case "OptionalCallExpression":
              case "AssignmentExpression":
                return !0;
            }
          });
        }

        n.exports = {
          printAngular: l
        };
      }
    }),
        Bm = Z({
      "src/language-js/print/jsx.js": function srcLanguageJsPrintJsxJs(e, n) {
        "use strict";

        ae();

        var _Qe3 = Qe(),
            t = _Qe3.printComments,
            s = _Qe3.printDanglingComments,
            _Le13 = Le(),
            _Le13$builders = _Le13.builders,
            i = _Le13$builders.line,
            r = _Le13$builders.hardline,
            u = _Le13$builders.softline,
            a = _Le13$builders.group,
            c = _Le13$builders.indent,
            l = _Le13$builders.conditionalGroup,
            C = _Le13$builders.fill,
            m = _Le13$builders.ifBreak,
            g = _Le13$builders.lineSuffixBoundary,
            p = _Le13$builders.join,
            f = _Le13.utils.willBreak,
            _Ge9 = Ge(),
            h = _Ge9.getLast,
            N = _Ge9.getPreferredQuote,
            _Xe7 = Xe(),
            T = _Xe7.isJsxNode,
            A = _Xe7.rawText,
            b = _Xe7.isLiteral,
            v = _Xe7.isCallExpression,
            B = _Xe7.isStringLiteral,
            w = _Xe7.isBinaryish,
            I = _Xe7.hasComment,
            E = _Xe7.CommentCheckFlags,
            D = _Xe7.hasNodeIgnoreComment,
            d = kt(),
            _to = to(),
            y = _to.willPrintOwnComments,
            o = function o(q) {
          return q === "" || q === i || q === r || q === u;
        };

        function x(q, le, ue) {
          var Q = q.getValue();
          if (Q.type === "JSXElement" && V(Q)) return [ue("openingElement"), ue("closingElement")];
          var de = Q.type === "JSXElement" ? ue("openingElement") : ue("openingFragment"),
              ge = Q.type === "JSXElement" ? ue("closingElement") : ue("closingFragment");
          if (Q.children.length === 1 && Q.children[0].type === "JSXExpressionContainer" && (Q.children[0].expression.type === "TemplateLiteral" || Q.children[0].expression.type === "TaggedTemplateExpression")) return [de].concat(_toConsumableArray(q.map(ue, "children")), [ge]);
          Q.children = Q.children.map(function (z) {
            return K(z) ? {
              type: "JSXText",
              value: " ",
              raw: " "
            } : z;
          });
          var ve = Q.children.some(T),
              xe = Q.children.filter(function (z) {
            return z.type === "JSXExpressionContainer";
          }).length > 1,
              we = Q.type === "JSXElement" && Q.openingElement.attributes.length > 1,
              fe = f(de) || ve || we || xe,
              pe = q.getParentNode().rootMarker === "mdx",
              me = le.singleQuote ? "{' '}" : '{" "}',
              ce = pe ? " " : m([me, u], " "),
              he = Q.openingElement && Q.openingElement.name && Q.openingElement.name.name === "fbt",
              J = F(q, le, ue, ce, he),
              ye = Q.children.some(function (z) {
            return oe(z);
          });

          for (var z = J.length - 2; z >= 0; z--) {
            var j = J[z] === "" && J[z + 1] === "",
                Ce = J[z] === r && J[z + 1] === "" && J[z + 2] === r,
                Ne = (J[z] === u || J[z] === r) && J[z + 1] === "" && J[z + 2] === ce,
                je = J[z] === ce && J[z + 1] === "" && (J[z + 2] === u || J[z + 2] === r),
                Ue = J[z] === ce && J[z + 1] === "" && J[z + 2] === ce,
                tt = J[z] === u && J[z + 1] === "" && J[z + 2] === r || J[z] === r && J[z + 1] === "" && J[z + 2] === u;
            Ce && ye || j || Ne || Ue || tt ? J.splice(z, 2) : je && J.splice(z + 1, 2);
          }

          for (; J.length > 0 && o(h(J));) {
            J.pop();
          }

          for (; J.length > 1 && o(J[0]) && o(J[1]);) {
            J.shift(), J.shift();
          }

          var X = [];

          var _iterator45 = _createForOfIteratorHelper(J.entries()),
              _step45;

          try {
            for (_iterator45.s(); !(_step45 = _iterator45.n()).done;) {
              var _step45$value = _slicedToArray(_step45.value, 2),
                  _z = _step45$value[0],
                  _j = _step45$value[1];

              if (_j === ce) {
                if (_z === 1 && J[_z - 1] === "") {
                  if (J.length === 2) {
                    X.push(me);
                    continue;
                  }

                  X.push([me, r]);
                  continue;
                } else if (_z === J.length - 1) {
                  X.push(me);
                  continue;
                } else if (J[_z - 1] === "" && J[_z - 2] === r) {
                  X.push(me);
                  continue;
                }
              }

              X.push(_j), f(_j) && (fe = !0);
            }
          } catch (err) {
            _iterator45.e(err);
          } finally {
            _iterator45.f();
          }

          var Y = ye ? C(X) : a(X, {
            shouldBreak: !0
          });
          if (pe) return Y;
          var te = a([de, c([r, Y]), r, ge]);
          return fe ? te : l([a([de].concat(_toConsumableArray(J), [ge])), te]);
        }

        function F(q, le, ue, Q, de) {
          var ge = [];
          return q.each(function (ve, xe, we) {
            var fe = ve.getValue();

            if (b(fe)) {
              var pe = A(fe);

              if (oe(fe)) {
                var me = pe.split(U);

                if (me[0] === "") {
                  if (ge.push(""), me.shift(), /\n/.test(me[0])) {
                    var he = we[xe + 1];
                    ge.push(k(de, me[1], fe, he));
                  } else ge.push(Q);

                  me.shift();
                }

                var ce;
                if (h(me) === "" && (me.pop(), ce = me.pop()), me.length === 0) return;

                var _iterator46 = _createForOfIteratorHelper(me.entries()),
                    _step46;

                try {
                  for (_iterator46.s(); !(_step46 = _iterator46.n()).done;) {
                    var _step46$value = _slicedToArray(_step46.value, 2),
                        _he3 = _step46$value[0],
                        J = _step46$value[1];

                    _he3 % 2 === 1 ? ge.push(i) : ge.push(J);
                  }
                } catch (err) {
                  _iterator46.e(err);
                } finally {
                  _iterator46.f();
                }

                if (ce !== void 0) {
                  if (/\n/.test(ce)) {
                    var _he = we[xe + 1];
                    ge.push(k(de, h(ge), fe, _he));
                  } else ge.push(Q);
                } else {
                  var _he2 = we[xe + 1];
                  ge.push(S(de, h(ge), fe, _he2));
                }
              } else /\n/.test(pe) ? pe.match(/\n/g).length > 1 && ge.push("", r) : ge.push("", Q);
            } else {
              var _pe = ue();

              ge.push(_pe);
              var _me = we[xe + 1];

              if (_me && oe(_me)) {
                var _he4 = se(A(_me)).split(U)[0];
                ge.push(S(de, _he4, fe, _me));
              } else ge.push(r);
            }
          }, "children"), ge;
        }

        function S(q, le, ue, Q) {
          return q ? "" : ue.type === "JSXElement" && !ue.closingElement || Q && Q.type === "JSXElement" && !Q.closingElement ? le.length === 1 ? u : r : u;
        }

        function k(q, le, ue, Q) {
          return q ? r : le.length === 1 ? ue.type === "JSXElement" && !ue.closingElement || Q && Q.type === "JSXElement" && !Q.closingElement ? r : u : r;
        }

        function _(q, le, ue) {
          var Q = q.getParentNode();
          if (!Q || {
            ArrayExpression: !0,
            JSXAttribute: !0,
            JSXElement: !0,
            JSXExpressionContainer: !0,
            JSXFragment: !0,
            ExpressionStatement: !0,
            CallExpression: !0,
            OptionalCallExpression: !0,
            ConditionalExpression: !0,
            JsExpressionRoot: !0
          }[Q.type]) return le;
          var ge = q.match(void 0, function (xe) {
            return xe.type === "ArrowFunctionExpression";
          }, v, function (xe) {
            return xe.type === "JSXExpressionContainer";
          }),
              ve = d(q, ue);
          return a([ve ? "" : m("("), c([u, le]), u, ve ? "" : m(")")], {
            shouldBreak: ge
          });
        }

        function O(q, le, ue) {
          var Q = q.getValue(),
              de = [];

          if (de.push(ue("name")), Q.value) {
            var ge;

            if (B(Q.value)) {
              var xe = A(Q.value).slice(1, -1).replace(/&apos;/g, "'").replace(/&quot;/g, '"'),
                  _N6 = N(xe, le.jsxSingleQuote ? "'" : '"'),
                  we = _N6.escaped,
                  fe = _N6.quote,
                  pe = _N6.regex;

              xe = xe.replace(pe, we), ge = [fe, xe, fe];
            } else ge = ue("value");

            de.push("=", ge);
          }

          return de;
        }

        function R(q, le, ue) {
          var Q = q.getValue(),
              de = function de(ge, ve) {
            return ge.type === "JSXEmptyExpression" || !I(ge) && (ge.type === "ArrayExpression" || ge.type === "ObjectExpression" || ge.type === "ArrowFunctionExpression" || ge.type === "AwaitExpression" && (de(ge.argument, ge) || ge.argument.type === "JSXElement") || v(ge) || ge.type === "FunctionExpression" || ge.type === "TemplateLiteral" || ge.type === "TaggedTemplateExpression" || ge.type === "DoExpression" || T(ve) && (ge.type === "ConditionalExpression" || w(ge)));
          };

          return de(Q.expression, q.getParentNode(0)) ? a(["{", ue("expression"), g, "}"]) : a(["{", c([u, ue("expression")]), u, g, "}"]);
        }

        function M(q, le, ue) {
          var Q = q.getValue(),
              de = Q.name && I(Q.name) || Q.typeParameters && I(Q.typeParameters);
          if (Q.selfClosing && Q.attributes.length === 0 && !de) return ["<", ue("name"), ue("typeParameters"), " />"];
          if (Q.attributes && Q.attributes.length === 1 && Q.attributes[0].value && B(Q.attributes[0].value) && !Q.attributes[0].value.value.includes("\n") && !de && !I(Q.attributes[0])) return a(["<", ue("name"), ue("typeParameters"), " "].concat(_toConsumableArray(q.map(ue, "attributes")), [Q.selfClosing ? " />" : ">"]));
          var ge = Q.attributes.length > 0 && I(h(Q.attributes), E.Trailing),
              ve = Q.attributes.length === 0 && !de || (le.bracketSameLine || le.jsxBracketSameLine) && (!de || Q.attributes.length > 0) && !ge,
              xe = Q.attributes && Q.attributes.some(function (fe) {
            return fe.value && B(fe.value) && fe.value.value.includes("\n");
          }),
              we = le.singleAttributePerLine && Q.attributes.length > 1 ? r : i;
          return a(["<", ue("name"), ue("typeParameters"), c(q.map(function () {
            return [we, ue()];
          }, "attributes")), Q.selfClosing ? i : ve ? ">" : u, Q.selfClosing ? "/>" : ve ? "" : ">"], {
            shouldBreak: xe
          });
        }

        function H(q, le, ue) {
          var Q = q.getValue(),
              de = [];
          de.push("</");
          var ge = ue("name");
          return I(Q.name, E.Leading | E.Line) ? de.push(c([r, ge]), r) : I(Q.name, E.Leading | E.Block) ? de.push(" ", ge) : de.push(ge), de.push(">"), de;
        }

        function P(q, le) {
          var ue = q.getValue(),
              Q = I(ue),
              de = I(ue, E.Line),
              ge = ue.type === "JSXOpeningFragment";
          return [ge ? "<" : "</", c([de ? r : Q && !ge ? " " : "", s(q, le, !0)]), de ? r : "", ">"];
        }

        function G(q, le, ue) {
          var Q = t(q, x(q, le, ue), le);
          return _(q, Q, le);
        }

        function re(q, le) {
          var ue = q.getValue(),
              Q = I(ue, E.Line);
          return [s(q, le, !Q), Q ? r : ""];
        }

        function $(q, le, ue) {
          var Q = q.getValue();
          return ["{", q.call(function (de) {
            var ge = ["...", ue()],
                ve = de.getValue();
            return !I(ve) || !y(de) ? ge : [c([u, t(de, ge, le)]), u];
          }, Q.type === "JSXSpreadAttribute" ? "argument" : "expression"), "}"];
        }

        function W(q, le, ue) {
          var Q = q.getValue();
          if (!!Q.type.startsWith("JSX")) switch (Q.type) {
            case "JSXAttribute":
              return O(q, le, ue);

            case "JSXIdentifier":
              return String(Q.name);

            case "JSXNamespacedName":
              return p(":", [ue("namespace"), ue("name")]);

            case "JSXMemberExpression":
              return p(".", [ue("object"), ue("property")]);

            case "JSXSpreadAttribute":
              return $(q, le, ue);

            case "JSXSpreadChild":
              return $(q, le, ue);

            case "JSXExpressionContainer":
              return R(q, le, ue);

            case "JSXFragment":
            case "JSXElement":
              return G(q, le, ue);

            case "JSXOpeningElement":
              return M(q, le, ue);

            case "JSXClosingElement":
              return H(q, le, ue);

            case "JSXOpeningFragment":
            case "JSXClosingFragment":
              return P(q, le);

            case "JSXEmptyExpression":
              return re(q, le);

            case "JSXText":
              throw new Error("JSXTest should be handled by JSXElement");

            default:
              throw new Error("Unknown JSX node type: ".concat(JSON.stringify(Q.type), "."));
          }
        }

        var ee = " \n\r\t",
            U = new RegExp("([" + ee + "]+)"),
            ne = new RegExp("[^" + ee + "]"),
            se = function se(q) {
          return q.replace(new RegExp("(?:^" + U.source + "|" + U.source + "$)"), "");
        };

        function V(q) {
          if (q.children.length === 0) return !0;
          if (q.children.length > 1) return !1;
          var le = q.children[0];
          return b(le) && !oe(le);
        }

        function oe(q) {
          return b(q) && (ne.test(A(q)) || !/\n/.test(A(q)));
        }

        function K(q) {
          return q.type === "JSXExpressionContainer" && b(q.expression) && q.expression.value === " " && !I(q.expression);
        }

        function Ee(q) {
          var le = q.getValue(),
              ue = q.getParentNode();
          if (!ue || !le || !T(le) || !T(ue)) return !1;
          var Q = ue.children.indexOf(le),
              de = null;

          for (var ge = Q; ge > 0; ge--) {
            var ve = ue.children[ge - 1];

            if (!(ve.type === "JSXText" && !oe(ve))) {
              de = ve;
              break;
            }
          }

          return de && de.type === "JSXExpressionContainer" && de.expression.type === "JSXEmptyExpression" && D(de.expression);
        }

        n.exports = {
          hasJsxIgnoreComment: Ee,
          printJsx: W
        };
      }
    }),
        ot = Z({
      "src/language-js/print/misc.js": function srcLanguageJsPrintMiscJs(e, n) {
        "use strict";

        ae();

        var _Ge10 = Ge(),
            t = _Ge10.isNonEmptyArray,
            _Le14 = Le(),
            _Le14$builders = _Le14.builders,
            s = _Le14$builders.indent,
            i = _Le14$builders.join,
            r = _Le14$builders.line,
            _Xe8 = Xe(),
            u = _Xe8.isFlowAnnotationComment;

        function a(h) {
          var N = h.getValue();
          return !N.optional || N.type === "Identifier" && N === h.getParentNode().key ? "" : N.type === "OptionalCallExpression" || N.type === "OptionalMemberExpression" && N.computed ? "?." : "?";
        }

        function c(h) {
          return h.getValue().definite || h.match(void 0, function (N, T) {
            return T === "id" && N.type === "VariableDeclarator" && N.definite;
          }) ? "!" : "";
        }

        function l(h, N, T) {
          var A = h.getValue();
          return A.typeArguments ? T("typeArguments") : A.typeParameters ? T("typeParameters") : "";
        }

        function C(h, N, T) {
          var A = h.getValue();
          if (!A.typeAnnotation) return "";
          var b = h.getParentNode(),
              v = b.type === "DeclareFunction" && b.id === A;
          return u(N.originalText, A.typeAnnotation) ? [" /*: ", T("typeAnnotation"), " */"] : [v ? "" : ": ", T("typeAnnotation")];
        }

        function m(h, N, T) {
          return ["::", T("callee")];
        }

        function g(h, N, T) {
          var A = h.getValue();
          return t(A.modifiers) ? [i(" ", h.map(T, "modifiers")), " "] : "";
        }

        function p(h, N, T) {
          return h.type === "EmptyStatement" ? ";" : h.type === "BlockStatement" || T ? [" ", N] : s([r, N]);
        }

        function f(h, N, T) {
          return ["...", T("argument"), C(h, N, T)];
        }

        n.exports = {
          printOptionalToken: a,
          printDefiniteToken: c,
          printFunctionTypeParameters: l,
          printBindExpressionCallee: m,
          printTypeScriptModifiers: g,
          printTypeAnnotation: C,
          printRestSpread: f,
          adjustClause: p
        };
      }
    }),
        zt = Z({
      "src/language-js/print/array.js": function srcLanguageJsPrintArrayJs(e, n) {
        "use strict";

        ae();

        var _Qe4 = Qe(),
            t = _Qe4.printDanglingComments,
            _Le15 = Le(),
            _Le15$builders = _Le15.builders,
            s = _Le15$builders.line,
            i = _Le15$builders.softline,
            r = _Le15$builders.hardline,
            u = _Le15$builders.group,
            a = _Le15$builders.indent,
            c = _Le15$builders.ifBreak,
            l = _Le15$builders.fill,
            _Ge11 = Ge(),
            C = _Ge11.getLast,
            m = _Ge11.hasNewline,
            _Xe9 = Xe(),
            g = _Xe9.shouldPrintComma,
            p = _Xe9.hasComment,
            f = _Xe9.CommentCheckFlags,
            h = _Xe9.isNextLineEmpty,
            N = _Xe9.isNumericLiteral,
            T = _Xe9.isSignedNumericLiteral,
            _nt3 = nt(),
            A = _nt3.locStart,
            _ot = ot(),
            b = _ot.printOptionalToken,
            v = _ot.printTypeAnnotation;

        function B(D, d, y) {
          var o = D.getValue(),
              x = [],
              F = o.type === "TupleExpression" ? "#[" : "[",
              S = "]";
          if (o.elements.length === 0) p(o, f.Dangling) ? x.push(u([F, t(D, d), i, S])) : x.push(F, S);else {
            var k = C(o.elements),
                _ = !(k && k.type === "RestElement"),
                O = k === null,
                R = Symbol("array"),
                M = !d.__inJestEach && o.elements.length > 1 && o.elements.every(function (G, re, $) {
              var W = G && G.type;
              if (W !== "ArrayExpression" && W !== "ObjectExpression") return !1;
              var ee = $[re + 1];
              if (ee && W !== ee.type) return !1;
              var U = W === "ArrayExpression" ? "elements" : "properties";
              return G[U] && G[U].length > 1;
            }),
                H = w(o, d),
                P = _ ? O ? "," : g(d) ? H ? c(",", "", {
              groupId: R
            }) : c(",") : "" : "";

            x.push(u([F, a([i, H ? E(D, d, y, P) : [I(D, d, "elements", y), P], t(D, d, !0)]), i, S], {
              shouldBreak: M,
              id: R
            }));
          }
          return x.push(b(D), v(D, d, y)), x;
        }

        function w(D, d) {
          return D.elements.length > 1 && D.elements.every(function (y) {
            return y && (N(y) || T(y) && !p(y.argument)) && !p(y, f.Trailing | f.Line, function (o) {
              return !m(d.originalText, A(o), {
                backwards: !0
              });
            });
          });
        }

        function I(D, d, y, o) {
          var x = [],
              F = [];
          return D.each(function (S) {
            x.push(F, u(o())), F = [",", s], S.getValue() && h(S.getValue(), d) && F.push(i);
          }, y), x;
        }

        function E(D, d, y, o) {
          var x = [];
          return D.each(function (F, S, k) {
            var _ = S === k.length - 1;

            x.push([y(), _ ? o : ","]), _ || x.push(h(F.getValue(), d) ? [r, r] : p(k[S + 1], f.Leading | f.Line) ? r : s);
          }, "elements"), l(x);
        }

        n.exports = {
          printArray: B,
          printArrayItems: I,
          isConciselyPrintedArray: w
        };
      }
    }),
        no = Z({
      "src/language-js/print/call-arguments.js": function srcLanguageJsPrintCallArgumentsJs(e, n) {
        "use strict";

        ae();

        var _Qe5 = Qe(),
            t = _Qe5.printDanglingComments,
            _Ge12 = Ge(),
            s = _Ge12.getLast,
            i = _Ge12.getPenultimate,
            _Xe10 = Xe(),
            r = _Xe10.getFunctionParameters,
            u = _Xe10.hasComment,
            a = _Xe10.CommentCheckFlags,
            c = _Xe10.isFunctionCompositionArgs,
            l = _Xe10.isJsxNode,
            C = _Xe10.isLongCurriedCallExpression,
            m = _Xe10.shouldPrintComma,
            g = _Xe10.getCallArguments,
            p = _Xe10.iterateCallArgumentsPath,
            f = _Xe10.isNextLineEmpty,
            h = _Xe10.isCallExpression,
            N = _Xe10.isStringLiteral,
            T = _Xe10.isObjectProperty,
            _Le16 = Le(),
            _Le16$builders = _Le16.builders,
            A = _Le16$builders.line,
            b = _Le16$builders.hardline,
            v = _Le16$builders.softline,
            B = _Le16$builders.group,
            w = _Le16$builders.indent,
            I = _Le16$builders.conditionalGroup,
            E = _Le16$builders.ifBreak,
            D = _Le16$builders.breakParent,
            d = _Le16.utils.willBreak,
            _Jt3 = Jt(),
            y = _Jt3.ArgExpansionBailout,
            _zt = zt(),
            o = _zt.isConciselyPrintedArray;

        function x(M, H, P) {
          var G = M.getValue(),
              re = G.type === "ImportExpression",
              $ = g(G);
          if ($.length === 0) return ["(", t(M, H, !0), ")"];
          if (_($)) return ["(", P(["arguments", 0]), ", ", P(["arguments", 1]), ")"];
          var W = !1,
              ee = !1,
              U = $.length - 1,
              ne = [];
          p(M, function (q, le) {
            var ue = q.getNode(),
                Q = [P()];
            le === U || (f(ue, H) ? (le === 0 && (ee = !0), W = !0, Q.push(",", b, b)) : Q.push(",", A)), ne.push(Q);
          });
          var se = !(re || G.callee && G.callee.type === "Import") && m(H, "all") ? "," : "";

          function V() {
            return B(["(", w([A].concat(ne)), se, A, ")"], {
              shouldBreak: !0
            });
          }

          if (W || M.getParentNode().type !== "Decorator" && c($)) return V();
          var oe = k($),
              K = S($, H);

          if (oe || K) {
            if (oe ? ne.slice(1).some(d) : ne.slice(0, -1).some(d)) return V();
            var q = [];

            try {
              M.try(function () {
                p(M, function (le, ue) {
                  oe && ue === 0 && (q = [[P([], {
                    expandFirstArg: !0
                  }), ne.length > 1 ? "," : "", ee ? b : A, ee ? b : ""]].concat(_toConsumableArray(ne.slice(1)))), K && ue === U && (q = [].concat(_toConsumableArray(ne.slice(0, -1)), [P([], {
                    expandLastArg: !0
                  })]));
                });
              });
            } catch (le) {
              if (le instanceof y) return V();
              throw le;
            }

            return [ne.some(d) ? D : "", I([["("].concat(_toConsumableArray(q), [")"]), oe ? ["(", B(q[0], {
              shouldBreak: !0
            })].concat(_toConsumableArray(q.slice(1)), [")"]) : ["("].concat(_toConsumableArray(ne.slice(0, -1)), [B(s(q), {
              shouldBreak: !0
            }), ")"]), V()])];
          }

          var Ee = ["(", w([v].concat(ne)), E(se), v, ")"];
          return C(M) ? Ee : B(Ee, {
            shouldBreak: ne.some(d) || W
          });
        }

        function F(M) {
          var H = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
          return M.type === "ObjectExpression" && (M.properties.length > 0 || u(M)) || M.type === "ArrayExpression" && (M.elements.length > 0 || u(M)) || M.type === "TSTypeAssertion" && F(M.expression) || M.type === "TSAsExpression" && F(M.expression) || M.type === "FunctionExpression" || M.type === "ArrowFunctionExpression" && (!M.returnType || !M.returnType.typeAnnotation || M.returnType.typeAnnotation.type !== "TSTypeReference" || O(M.body)) && (M.body.type === "BlockStatement" || M.body.type === "ArrowFunctionExpression" && F(M.body, !0) || M.body.type === "ObjectExpression" || M.body.type === "ArrayExpression" || !H && (h(M.body) || M.body.type === "ConditionalExpression") || l(M.body)) || M.type === "DoExpression" || M.type === "ModuleExpression";
        }

        function S(M, H) {
          var P = s(M),
              G = i(M);
          return !u(P, a.Leading) && !u(P, a.Trailing) && F(P) && (!G || G.type !== P.type) && (M.length !== 2 || G.type !== "ArrowFunctionExpression" || P.type !== "ArrayExpression") && !(M.length > 1 && P.type === "ArrayExpression" && o(P, H));
        }

        function k(M) {
          if (M.length !== 2) return !1;

          var _M2 = _slicedToArray(M, 2),
              H = _M2[0],
              P = _M2[1];

          return H.type === "ModuleExpression" && R(P) ? !0 : !u(H) && (H.type === "FunctionExpression" || H.type === "ArrowFunctionExpression" && H.body.type === "BlockStatement") && P.type !== "FunctionExpression" && P.type !== "ArrowFunctionExpression" && P.type !== "ConditionalExpression" && !F(P);
        }

        function _(M) {
          return M.length === 2 && M[0].type === "ArrowFunctionExpression" && r(M[0]).length === 0 && M[0].body.type === "BlockStatement" && M[1].type === "ArrayExpression" && !M.some(function (H) {
            return u(H);
          });
        }

        function O(M) {
          return M.type === "BlockStatement" && (M.body.some(function (H) {
            return H.type !== "EmptyStatement";
          }) || u(M, a.Dangling));
        }

        function R(M) {
          return M.type === "ObjectExpression" && M.properties.length === 1 && T(M.properties[0]) && M.properties[0].key.type === "Identifier" && M.properties[0].key.name === "type" && N(M.properties[0].value) && M.properties[0].value.value === "module";
        }

        n.exports = x;
      }
    }),
        uo = Z({
      "src/language-js/print/member.js": function srcLanguageJsPrintMemberJs(e, n) {
        "use strict";

        ae();

        var _Le17 = Le(),
            _Le17$builders = _Le17.builders,
            t = _Le17$builders.softline,
            s = _Le17$builders.group,
            i = _Le17$builders.indent,
            r = _Le17$builders.label,
            _Xe11 = Xe(),
            u = _Xe11.isNumericLiteral,
            a = _Xe11.isMemberExpression,
            c = _Xe11.isCallExpression,
            _ot2 = ot(),
            l = _ot2.printOptionalToken;

        function C(g, p, f) {
          var h = g.getValue(),
              N = g.getParentNode(),
              T,
              A = 0;

          do {
            T = g.getParentNode(A), A++;
          } while (T && (a(T) || T.type === "TSNonNullExpression"));

          var b = f("object"),
              v = m(g, p, f),
              B = T && (T.type === "NewExpression" || T.type === "BindExpression" || T.type === "AssignmentExpression" && T.left.type !== "Identifier") || h.computed || h.object.type === "Identifier" && h.property.type === "Identifier" && !a(N) || (N.type === "AssignmentExpression" || N.type === "VariableDeclarator") && (c(h.object) && h.object.arguments.length > 0 || h.object.type === "TSNonNullExpression" && c(h.object.expression) && h.object.expression.arguments.length > 0 || b.label === "member-chain");
          return r(b.label === "member-chain" ? "member-chain" : "member", [b, B ? v : s(i([t, v]))]);
        }

        function m(g, p, f) {
          var h = f("property"),
              N = g.getValue(),
              T = l(g);
          return N.computed ? !N.property || u(N.property) ? [T, "[", h, "]"] : s([T, "[", i([t, h]), t, "]"]) : [T, ".", h];
        }

        n.exports = {
          printMemberExpression: C,
          printMemberLookup: m
        };
      }
    }),
        Nm = Z({
      "src/language-js/print/member-chain.js": function srcLanguageJsPrintMemberChainJs(e, n) {
        "use strict";

        ae();

        var _Qe6 = Qe(),
            t = _Qe6.printComments,
            _Ge13 = Ge(),
            s = _Ge13.getLast,
            i = _Ge13.isNextLineEmptyAfterIndex,
            r = _Ge13.getNextNonSpaceNonCommentCharacterIndex,
            u = kt(),
            _Xe12 = Xe(),
            a = _Xe12.isCallExpression,
            c = _Xe12.isMemberExpression,
            l = _Xe12.isFunctionOrArrowExpression,
            C = _Xe12.isLongCurriedCallExpression,
            m = _Xe12.isMemberish,
            g = _Xe12.isNumericLiteral,
            p = _Xe12.isSimpleCallArgument,
            f = _Xe12.hasComment,
            h = _Xe12.CommentCheckFlags,
            N = _Xe12.isNextLineEmpty,
            _nt4 = nt(),
            T = _nt4.locEnd,
            _Le18 = Le(),
            _Le18$builders = _Le18.builders,
            A = _Le18$builders.join,
            b = _Le18$builders.hardline,
            v = _Le18$builders.group,
            B = _Le18$builders.indent,
            w = _Le18$builders.conditionalGroup,
            I = _Le18$builders.breakParent,
            E = _Le18$builders.label,
            D = _Le18.utils.willBreak,
            d = no(),
            _uo = uo(),
            y = _uo.printMemberLookup,
            _ot3 = ot(),
            o = _ot3.printOptionalToken,
            x = _ot3.printFunctionTypeParameters,
            F = _ot3.printBindExpressionCallee;

        function S(k, _, O) {
          var R = k.getParentNode(),
              M = !R || R.type === "ExpressionStatement",
              H = [];

          function P(me) {
            var ce = _.originalText,
                he = r(ce, me, T);
            return ce.charAt(he) === ")" ? he !== !1 && i(ce, he + 1) : N(me, _);
          }

          function G(me) {
            var ce = me.getValue();
            a(ce) && (m(ce.callee) || a(ce.callee)) ? (H.unshift({
              node: ce,
              printed: [t(me, [o(me), x(me, _, O), d(me, _, O)], _), P(ce) ? b : ""]
            }), me.call(function (he) {
              return G(he);
            }, "callee")) : m(ce) ? (H.unshift({
              node: ce,
              needsParens: u(me, _),
              printed: t(me, c(ce) ? y(me, _, O) : F(me, _, O), _)
            }), me.call(function (he) {
              return G(he);
            }, "object")) : ce.type === "TSNonNullExpression" ? (H.unshift({
              node: ce,
              printed: t(me, "!", _)
            }), me.call(function (he) {
              return G(he);
            }, "expression")) : H.unshift({
              node: ce,
              printed: O()
            });
          }

          var re = k.getValue();
          H.unshift({
            node: re,
            printed: [o(k), x(k, _, O), d(k, _, O)]
          }), re.callee && k.call(function (me) {
            return G(me);
          }, "callee");
          var $ = [],
              W = [H[0]],
              ee = 1;

          for (; ee < H.length && (H[ee].node.type === "TSNonNullExpression" || a(H[ee].node) || c(H[ee].node) && H[ee].node.computed && g(H[ee].node.property)); ++ee) {
            W.push(H[ee]);
          }

          if (!a(H[0].node)) for (; ee + 1 < H.length && m(H[ee].node) && m(H[ee + 1].node); ++ee) {
            W.push(H[ee]);
          }
          $.push(W), W = [];
          var U = !1;

          for (; ee < H.length; ++ee) {
            if (U && m(H[ee].node)) {
              if (H[ee].node.computed && g(H[ee].node.property)) {
                W.push(H[ee]);
                continue;
              }

              $.push(W), W = [], U = !1;
            }

            (a(H[ee].node) || H[ee].node.type === "ImportExpression") && (U = !0), W.push(H[ee]), f(H[ee].node, h.Trailing) && ($.push(W), W = [], U = !1);
          }

          W.length > 0 && $.push(W);

          function ne(me) {
            return /^[A-Z]|^[$_]+$/.test(me);
          }

          function se(me) {
            return me.length <= _.tabWidth;
          }

          function V(me) {
            var ce = me[1].length > 0 && me[1][0].node.computed;

            if (me[0].length === 1) {
              var J = me[0][0].node;
              return J.type === "ThisExpression" || J.type === "Identifier" && (ne(J.name) || M && se(J.name) || ce);
            }

            var he = s(me[0]).node;
            return c(he) && he.property.type === "Identifier" && (ne(he.property.name) || ce);
          }

          var oe = $.length >= 2 && !f($[1][0].node) && V($);

          function K(me) {
            var ce = me.map(function (he) {
              return he.printed;
            });
            return me.length > 0 && s(me).needsParens ? ["("].concat(_toConsumableArray(ce), [")"]) : ce;
          }

          function Ee(me) {
            return me.length === 0 ? "" : B(v([b, A(b, me.map(K))]));
          }

          var q = $.map(K),
              le = q,
              ue = oe ? 3 : 2,
              Q = $.flat(),
              de = Q.slice(1, -1).some(function (me) {
            return f(me.node, h.Leading);
          }) || Q.slice(0, -1).some(function (me) {
            return f(me.node, h.Trailing);
          }) || $[ue] && f($[ue][0].node, h.Leading);
          if ($.length <= ue && !de) return C(k) ? le : v(le);
          var ge = s($[oe ? 1 : 0]).node,
              ve = !a(ge) && P(ge),
              xe = [K($[0]), oe ? $.slice(1, 2).map(K) : "", ve ? b : "", Ee($.slice(oe ? 2 : 1))],
              we = H.map(function (me) {
            var ce = me.node;
            return ce;
          }).filter(a);

          function fe() {
            var me = s(s($)).node,
                ce = s(q);
            return a(me) && D(ce) && we.slice(0, -1).some(function (he) {
              return he.arguments.some(l);
            });
          }

          var pe;
          return de || we.length > 2 && we.some(function (me) {
            return !me.arguments.every(function (ce) {
              return p(ce, 0);
            });
          }) || q.slice(0, -1).some(D) || fe() ? pe = v(xe) : pe = [D(le) || ve ? I : "", w([le, xe])], E("member-chain", pe);
        }

        n.exports = S;
      }
    }),
        so = Z({
      "src/language-js/print/call-expression.js": function srcLanguageJsPrintCallExpressionJs(e, n) {
        "use strict";

        ae();

        var _Le19 = Le(),
            _Le19$builders = _Le19.builders,
            t = _Le19$builders.join,
            s = _Le19$builders.group,
            i = kt(),
            _Xe13 = Xe(),
            r = _Xe13.getCallArguments,
            u = _Xe13.hasFlowAnnotationComment,
            a = _Xe13.isCallExpression,
            c = _Xe13.isMemberish,
            l = _Xe13.isStringLiteral,
            C = _Xe13.isTemplateOnItsOwnLine,
            m = _Xe13.isTestCall,
            g = _Xe13.iterateCallArgumentsPath,
            p = Nm(),
            f = no(),
            _ot4 = ot(),
            h = _ot4.printOptionalToken,
            N = _ot4.printFunctionTypeParameters;

        function T(b, v, B) {
          var w = b.getValue(),
              I = b.getParentNode(),
              E = w.type === "NewExpression",
              D = w.type === "ImportExpression",
              d = h(b),
              y = r(w);

          if (y.length > 0 && (!D && !E && A(w, I) || y.length === 1 && C(y[0], v.originalText) || !E && m(w, I))) {
            var F = [];
            return g(b, function () {
              F.push(B());
            }), [E ? "new " : "", B("callee"), d, N(b, v, B), "(", t(", ", F), ")"];
          }

          var o = (v.parser === "babel" || v.parser === "babel-flow") && w.callee && w.callee.type === "Identifier" && u(w.callee.trailingComments);
          if (o && (w.callee.trailingComments[0].printed = !0), !D && !E && c(w.callee) && !b.call(function (F) {
            return i(F, v);
          }, "callee")) return p(b, v, B);
          var x = [E ? "new " : "", D ? "import" : B("callee"), d, o ? "/*:: ".concat(w.callee.trailingComments[0].value.slice(2).trim(), " */") : "", N(b, v, B), f(b, v, B)];
          return D || a(w.callee) ? s(x) : x;
        }

        function A(b, v) {
          if (b.callee.type !== "Identifier") return !1;
          if (b.callee.name === "require") return !0;

          if (b.callee.name === "define") {
            var B = r(b);
            return v.type === "ExpressionStatement" && (B.length === 1 || B.length === 2 && B[0].type === "ArrayExpression" || B.length === 3 && l(B[0]) && B[1].type === "ArrayExpression");
          }

          return !1;
        }

        n.exports = {
          printCallExpression: T
        };
      }
    }),
        Xt = Z({
      "src/language-js/print/assignment.js": function srcLanguageJsPrintAssignmentJs(e, n) {
        "use strict";

        ae();

        var _Ge14 = Ge(),
            t = _Ge14.isNonEmptyArray,
            s = _Ge14.getStringWidth,
            _Le20 = Le(),
            _Le20$builders = _Le20.builders,
            i = _Le20$builders.line,
            r = _Le20$builders.group,
            u = _Le20$builders.indent,
            a = _Le20$builders.indentIfBreak,
            c = _Le20$builders.lineSuffixBoundary,
            _Le20$utils = _Le20.utils,
            l = _Le20$utils.cleanDoc,
            C = _Le20$utils.willBreak,
            m = _Le20$utils.canBreak,
            _Xe14 = Xe(),
            g = _Xe14.hasLeadingOwnLineComment,
            p = _Xe14.isBinaryish,
            f = _Xe14.isStringLiteral,
            h = _Xe14.isLiteral,
            N = _Xe14.isNumericLiteral,
            T = _Xe14.isCallExpression,
            A = _Xe14.isMemberExpression,
            b = _Xe14.getCallArguments,
            v = _Xe14.rawText,
            B = _Xe14.hasComment,
            w = _Xe14.isSignedNumericLiteral,
            I = _Xe14.isObjectProperty,
            _Jn2 = Jn(),
            E = _Jn2.shouldInlineLogicalExpression,
            _so = so(),
            D = _so.printCallExpression;

        function d(V, oe, K, Ee, q, le) {
          var ue = x(V, oe, K, Ee, le),
              Q = K(le, {
            assignmentLayout: ue
          });

          switch (ue) {
            case "break-after-operator":
              return r([r(Ee), q, r(u([i, Q]))]);

            case "never-break-after-operator":
              return r([r(Ee), q, " ", Q]);

            case "fluid":
              {
                var de = Symbol("assignment");
                return r([r(Ee), q, r(u(i), {
                  id: de
                }), c, a(Q, {
                  groupId: de
                })]);
              }

            case "break-lhs":
              return r([Ee, q, " ", r(Q)]);

            case "chain":
              return [r(Ee), q, i, Q];

            case "chain-tail":
              return [r(Ee), q, u([i, Q])];

            case "chain-tail-arrow-chain":
              return [r(Ee), q, Q];

            case "only-left":
              return Ee;
          }
        }

        function y(V, oe, K) {
          var Ee = V.getValue();
          return d(V, oe, K, K("left"), [" ", Ee.operator], "right");
        }

        function o(V, oe, K) {
          return d(V, oe, K, K("id"), " =", "init");
        }

        function x(V, oe, K, Ee, q) {
          var le = V.getValue(),
              ue = le[q];
          if (!ue) return "only-left";
          var Q = !k(ue);
          if (V.match(k, _, function (xe) {
            return !Q || xe.type !== "ExpressionStatement" && xe.type !== "VariableDeclaration";
          })) return Q ? ue.type === "ArrowFunctionExpression" && ue.body.type === "ArrowFunctionExpression" ? "chain-tail-arrow-chain" : "chain-tail" : "chain";
          if (!Q && k(ue.right) || g(oe.originalText, ue)) return "break-after-operator";
          if (ue.type === "CallExpression" && ue.callee.name === "require" || oe.parser === "json5" || oe.parser === "json") return "never-break-after-operator";
          if (S(le) || O(le) || H(le) || P(le) && m(Ee)) return "break-lhs";
          var ve = U(le, Ee, oe);
          return V.call(function () {
            return F(V, oe, K, ve);
          }, q) ? "break-after-operator" : ve || ue.type === "TemplateLiteral" || ue.type === "TaggedTemplateExpression" || ue.type === "BooleanLiteral" || N(ue) || ue.type === "ClassExpression" ? "never-break-after-operator" : "fluid";
        }

        function F(V, oe, K, Ee) {
          var q = V.getValue();
          if (p(q) && !E(q)) return !0;

          switch (q.type) {
            case "StringLiteralTypeAnnotation":
            case "SequenceExpression":
              return !0;

            case "ConditionalExpression":
              {
                var Q = q.test;
                return p(Q) && !E(Q);
              }

            case "ClassExpression":
              return t(q.decorators);
          }

          if (Ee) return !1;
          var le = q,
              ue = [];

          for (;;) {
            if (le.type === "UnaryExpression") le = le.argument, ue.push("argument");else if (le.type === "TSNonNullExpression") le = le.expression, ue.push("expression");else break;
          }

          return !!(f(le) || V.call.apply(V, [function () {
            return $(V, oe, K);
          }].concat(ue)));
        }

        function S(V) {
          if (_(V)) {
            var oe = V.left || V.id;
            return oe.type === "ObjectPattern" && oe.properties.length > 2 && oe.properties.some(function (K) {
              return I(K) && (!K.shorthand || K.value && K.value.type === "AssignmentPattern");
            });
          }

          return !1;
        }

        function k(V) {
          return V.type === "AssignmentExpression";
        }

        function _(V) {
          return k(V) || V.type === "VariableDeclarator";
        }

        function O(V) {
          var oe = R(V);

          if (t(oe)) {
            var K = V.type === "TSTypeAliasDeclaration" ? "constraint" : "bound";
            if (oe.length > 1 && oe.some(function (Ee) {
              return Ee[K] || Ee.default;
            })) return !0;
          }

          return !1;
        }

        function R(V) {
          return M(V) && V.typeParameters && V.typeParameters.params ? V.typeParameters.params : null;
        }

        function M(V) {
          return V.type === "TSTypeAliasDeclaration" || V.type === "TypeAlias";
        }

        function H(V) {
          if (V.type !== "VariableDeclarator") return !1;
          var oe = V.id.typeAnnotation;
          if (!oe || !oe.typeAnnotation) return !1;
          var K = G(oe.typeAnnotation);
          return t(K) && K.length > 1 && K.some(function (Ee) {
            return t(G(Ee)) || Ee.type === "TSConditionalType";
          });
        }

        function P(V) {
          return V.type === "VariableDeclarator" && V.init && V.init.type === "ArrowFunctionExpression";
        }

        function G(V) {
          return re(V) && V.typeParameters && V.typeParameters.params ? V.typeParameters.params : null;
        }

        function re(V) {
          return V.type === "TSTypeReference" || V.type === "GenericTypeAnnotation";
        }

        function $(V, oe, K) {
          var Ee = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1,
              q = V.getValue(),
              le = function le() {
            return $(V, oe, K, !0);
          };

          if (q.type === "TSNonNullExpression") return V.call(le, "expression");

          if (T(q)) {
            if (D(V, oe, K).label === "member-chain") return !1;
            var Q = b(q);
            return !(Q.length === 0 || Q.length === 1 && ee(Q[0], oe)) || ne(q, K) ? !1 : V.call(le, "callee");
          }

          return A(q) ? V.call(le, "object") : Ee && (q.type === "Identifier" || q.type === "ThisExpression");
        }

        var W = .25;

        function ee(V, oe) {
          var K = oe.printWidth;
          if (B(V)) return !1;
          var Ee = K * W;
          if (V.type === "ThisExpression" || V.type === "Identifier" && V.name.length <= Ee || w(V) && !B(V.argument)) return !0;
          var q = V.type === "Literal" && "regex" in V && V.regex.pattern || V.type === "RegExpLiteral" && V.pattern;
          return q ? q.length <= Ee : f(V) ? v(V).length <= Ee : V.type === "TemplateLiteral" ? V.expressions.length === 0 && V.quasis[0].value.raw.length <= Ee && !V.quasis[0].value.raw.includes("\n") : h(V);
        }

        function U(V, oe, K) {
          if (!I(V)) return !1;
          oe = l(oe);
          var Ee = 3;
          return typeof oe == "string" && s(oe) < K.tabWidth + Ee;
        }

        function ne(V, oe) {
          var K = se(V);

          if (t(K)) {
            if (K.length > 1) return !0;

            if (K.length === 1) {
              var q = K[0];
              if (q.type === "TSUnionType" || q.type === "UnionTypeAnnotation" || q.type === "TSIntersectionType" || q.type === "IntersectionTypeAnnotation" || q.type === "TSTypeLiteral" || q.type === "ObjectTypeAnnotation") return !0;
            }

            var Ee = V.typeParameters ? "typeParameters" : "typeArguments";
            if (C(oe(Ee))) return !0;
          }

          return !1;
        }

        function se(V) {
          return V.typeParameters && V.typeParameters.params || V.typeArguments && V.typeArguments.params;
        }

        n.exports = {
          printVariableDeclarator: o,
          printAssignmentExpression: y,
          printAssignment: d,
          isArrowFunctionVariableDeclarator: P
        };
      }
    }),
        wr = Z({
      "src/language-js/print/function-parameters.js": function srcLanguageJsPrintFunctionParametersJs(e, n) {
        "use strict";

        ae();

        var _Ge15 = Ge(),
            t = _Ge15.getNextNonSpaceNonCommentCharacter,
            _Qe7 = Qe(),
            s = _Qe7.printDanglingComments,
            _Le21 = Le(),
            _Le21$builders = _Le21.builders,
            i = _Le21$builders.line,
            r = _Le21$builders.hardline,
            u = _Le21$builders.softline,
            a = _Le21$builders.group,
            c = _Le21$builders.indent,
            l = _Le21$builders.ifBreak,
            _Le21$utils = _Le21.utils,
            C = _Le21$utils.removeLines,
            m = _Le21$utils.willBreak,
            _Xe15 = Xe(),
            g = _Xe15.getFunctionParameters,
            p = _Xe15.iterateFunctionParametersPath,
            f = _Xe15.isSimpleType,
            h = _Xe15.isTestCall,
            N = _Xe15.isTypeAnnotationAFunction,
            T = _Xe15.isObjectType,
            A = _Xe15.isObjectTypePropertyAFunction,
            b = _Xe15.hasRestParameter,
            v = _Xe15.shouldPrintComma,
            B = _Xe15.hasComment,
            w = _Xe15.isNextLineEmpty,
            _nt5 = nt(),
            I = _nt5.locEnd,
            _Jt4 = Jt(),
            E = _Jt4.ArgExpansionBailout,
            _ot5 = ot(),
            D = _ot5.printFunctionTypeParameters;

        function d(F, S, k, _, O) {
          var R = F.getValue(),
              M = g(R),
              H = O ? D(F, k, S) : "";
          if (M.length === 0) return [H, "(", s(F, k, !0, function (U) {
            return t(k.originalText, U, I) === ")";
          }), ")"];
          var P = F.getParentNode(),
              G = h(P),
              re = y(R),
              $ = [];

          if (p(F, function (U, ne) {
            var se = ne === M.length - 1;
            se && R.rest && $.push("..."), $.push(S()), !se && ($.push(","), G || re ? $.push(" ") : w(M[ne], k) ? $.push(r, r) : $.push(i));
          }), _) {
            if (m(H) || m($)) throw new E();
            return a([C(H), "(", C($), ")"]);
          }

          var W = M.every(function (U) {
            return !U.decorators;
          });
          return re && W ? [H, "("].concat($, [")"]) : G ? [H, "("].concat($, [")"]) : (A(P) || N(P) || P.type === "TypeAlias" || P.type === "UnionTypeAnnotation" || P.type === "TSUnionType" || P.type === "IntersectionTypeAnnotation" || P.type === "FunctionTypeAnnotation" && P.returnType === R) && M.length === 1 && M[0].name === null && R.this !== M[0] && M[0].typeAnnotation && R.typeParameters === null && f(M[0].typeAnnotation) && !R.rest ? k.arrowParens === "always" ? ["("].concat($, [")"]) : $ : [H, "(", c([u].concat($)), l(!b(R) && v(k, "all") ? "," : ""), u, ")"];
        }

        function y(F) {
          if (!F) return !1;
          var S = g(F);
          if (S.length !== 1) return !1;

          var _S3 = _slicedToArray(S, 1),
              k = _S3[0];

          return !B(k) && (k.type === "ObjectPattern" || k.type === "ArrayPattern" || k.type === "Identifier" && k.typeAnnotation && (k.typeAnnotation.type === "TypeAnnotation" || k.typeAnnotation.type === "TSTypeAnnotation") && T(k.typeAnnotation.typeAnnotation) || k.type === "FunctionTypeParam" && T(k.typeAnnotation) || k.type === "AssignmentPattern" && (k.left.type === "ObjectPattern" || k.left.type === "ArrayPattern") && (k.right.type === "Identifier" || k.right.type === "ObjectExpression" && k.right.properties.length === 0 || k.right.type === "ArrayExpression" && k.right.elements.length === 0));
        }

        function o(F) {
          var S;
          return F.returnType ? (S = F.returnType, S.typeAnnotation && (S = S.typeAnnotation)) : F.typeAnnotation && (S = F.typeAnnotation), S;
        }

        function x(F, S) {
          var k = o(F);
          if (!k) return !1;

          var _ = F.typeParameters && F.typeParameters.params;

          if (_) {
            if (_.length > 1) return !1;

            if (_.length === 1) {
              var O = _[0];
              if (O.constraint || O.default) return !1;
            }
          }

          return g(F).length === 1 && (T(k) || m(S));
        }

        n.exports = {
          printFunctionParameters: d,
          shouldHugFunctionParameters: y,
          shouldGroupFunctionParameters: x
        };
      }
    }),
        _r = Z({
      "src/language-js/print/type-annotation.js": function srcLanguageJsPrintTypeAnnotationJs(e, n) {
        "use strict";

        ae();

        var _Qe8 = Qe(),
            t = _Qe8.printComments,
            s = _Qe8.printDanglingComments,
            _Ge16 = Ge(),
            i = _Ge16.isNonEmptyArray,
            _Le22 = Le(),
            _Le22$builders = _Le22.builders,
            r = _Le22$builders.group,
            u = _Le22$builders.join,
            a = _Le22$builders.line,
            c = _Le22$builders.softline,
            l = _Le22$builders.indent,
            C = _Le22$builders.align,
            m = _Le22$builders.ifBreak,
            g = kt(),
            _nt6 = nt(),
            p = _nt6.locStart,
            _Xe16 = Xe(),
            f = _Xe16.isSimpleType,
            h = _Xe16.isObjectType,
            N = _Xe16.hasLeadingOwnLineComment,
            T = _Xe16.isObjectTypePropertyAFunction,
            A = _Xe16.shouldPrintComma,
            _Xt = Xt(),
            b = _Xt.printAssignment,
            _wr = wr(),
            v = _wr.printFunctionParameters,
            B = _wr.shouldGroupFunctionParameters,
            _zt2 = zt(),
            w = _zt2.printArrayItems;

        function I(S) {
          if (f(S) || h(S)) return !0;

          if (S.type === "UnionTypeAnnotation" || S.type === "TSUnionType") {
            var k = S.types.filter(function (O) {
              return O.type === "VoidTypeAnnotation" || O.type === "TSVoidKeyword" || O.type === "NullLiteralTypeAnnotation" || O.type === "TSNullKeyword";
            }).length,
                _ = S.types.some(function (O) {
              return O.type === "ObjectTypeAnnotation" || O.type === "TSTypeLiteral" || O.type === "GenericTypeAnnotation" || O.type === "TSTypeReference";
            });

            if (S.types.length - 1 === k && _) return !0;
          }

          return !1;
        }

        function E(S, k, _) {
          var O = k.semi ? ";" : "",
              R = S.getValue(),
              M = [];
          return M.push("opaque type ", _("id"), _("typeParameters")), R.supertype && M.push(": ", _("supertype")), R.impltype && M.push(" = ", _("impltype")), M.push(O), M;
        }

        function D(S, k, _) {
          var O = k.semi ? ";" : "",
              R = S.getValue(),
              M = [];
          R.declare && M.push("declare "), M.push("type ", _("id"), _("typeParameters"));
          var H = R.type === "TSTypeAliasDeclaration" ? "typeAnnotation" : "right";
          return [b(S, k, _, M, " =", H), O];
        }

        function d(S, k, _) {
          var O = S.getValue(),
              R = S.map(_, "types"),
              M = [],
              H = !1;

          for (var P = 0; P < R.length; ++P) {
            P === 0 ? M.push(R[P]) : h(O.types[P - 1]) && h(O.types[P]) ? M.push([" & ", H ? l(R[P]) : R[P]]) : !h(O.types[P - 1]) && !h(O.types[P]) ? M.push(l([" &", a, R[P]])) : (P > 1 && (H = !0), M.push(" & ", P > 1 ? l(R[P]) : R[P]));
          }

          return r(M);
        }

        function y(S, k, _) {
          var O = S.getValue(),
              R = S.getParentNode(),
              M = R.type !== "TypeParameterInstantiation" && R.type !== "TSTypeParameterInstantiation" && R.type !== "GenericTypeAnnotation" && R.type !== "TSTypeReference" && R.type !== "TSTypeAssertion" && R.type !== "TupleTypeAnnotation" && R.type !== "TSTupleType" && !(R.type === "FunctionTypeParam" && !R.name && S.getParentNode(1).this !== R) && !((R.type === "TypeAlias" || R.type === "VariableDeclarator" || R.type === "TSTypeAliasDeclaration") && N(k.originalText, O)),
              H = I(O),
              P = S.map(function ($) {
            var W = _();

            return H || (W = C(2, W)), t($, W, k);
          }, "types");
          if (H) return u(" | ", P);
          var G = M && !N(k.originalText, O),
              re = [m([G ? a : "", "| "]), u([a, "| "], P)];
          return g(S, k) ? r([l(re), c]) : R.type === "TupleTypeAnnotation" && R.types.length > 1 || R.type === "TSTupleType" && R.elementTypes.length > 1 ? r([l([m(["(", c]), re]), c, m(")")]) : r(M ? l(re) : re);
        }

        function o(S, k, _) {
          var O = S.getValue(),
              R = [],
              M = S.getParentNode(0),
              H = S.getParentNode(1),
              P = S.getParentNode(2),
              G = O.type === "TSFunctionType" || !((M.type === "ObjectTypeProperty" || M.type === "ObjectTypeInternalSlot") && !M.variance && !M.optional && p(M) === p(O) || M.type === "ObjectTypeCallProperty" || P && P.type === "DeclareFunction"),
              re = G && (M.type === "TypeAnnotation" || M.type === "TSTypeAnnotation"),
              $ = re && G && (M.type === "TypeAnnotation" || M.type === "TSTypeAnnotation") && H.type === "ArrowFunctionExpression";
          T(M) && (G = !0, re = !0), $ && R.push("(");
          var W = v(S, _, k, !1, !0),
              ee = O.returnType || O.predicate || O.typeAnnotation ? [G ? " => " : ": ", _("returnType"), _("predicate"), _("typeAnnotation")] : "",
              U = B(O, ee);
          return R.push(U ? r(W) : W), ee && R.push(ee), $ && R.push(")"), r(R);
        }

        function x(S, k, _) {
          var O = S.getValue(),
              R = O.type === "TSTupleType" ? "elementTypes" : "types",
              M = O[R],
              H = i(M),
              P = H ? c : "";
          return r(["[", l([P, w(S, k, R, _)]), m(H && A(k, "all") ? "," : ""), s(S, k, !0), P, "]"]);
        }

        function F(S, k, _) {
          var O = S.getValue(),
              R = O.type === "OptionalIndexedAccessType" && O.optional ? "?.[" : "[";
          return [_("objectType"), R, _("indexType"), "]"];
        }

        n.exports = {
          printOpaqueType: E,
          printTypeAlias: D,
          printIntersectionType: d,
          printUnionType: y,
          printFunctionType: o,
          printTupleType: x,
          printIndexedAccessType: F,
          shouldHugType: I
        };
      }
    }),
        Pr = Z({
      "src/language-js/print/type-parameters.js": function srcLanguageJsPrintTypeParametersJs(e, n) {
        "use strict";

        ae();

        var _Qe9 = Qe(),
            t = _Qe9.printDanglingComments,
            _Le23 = Le(),
            _Le23$builders = _Le23.builders,
            s = _Le23$builders.join,
            i = _Le23$builders.line,
            r = _Le23$builders.hardline,
            u = _Le23$builders.softline,
            a = _Le23$builders.group,
            c = _Le23$builders.indent,
            l = _Le23$builders.ifBreak,
            _Xe17 = Xe(),
            C = _Xe17.isTestCall,
            m = _Xe17.hasComment,
            g = _Xe17.CommentCheckFlags,
            p = _Xe17.isTSXFile,
            f = _Xe17.shouldPrintComma,
            h = _Xe17.getFunctionParameters,
            N = _Xe17.isObjectType,
            _Ge17 = Ge(),
            T = _Ge17.createGroupIdMapper,
            _r3 = _r(),
            A = _r3.shouldHugType,
            _Xt2 = Xt(),
            b = _Xt2.isArrowFunctionVariableDeclarator,
            v = T("typeParameters");

        function B(E, D, d, y) {
          var o = E.getValue();
          if (!o[y]) return "";
          if (!Array.isArray(o[y])) return d(y);
          var x = E.getNode(2),
              F = x && C(x);
          if (!E.match(function (O) {
            return !(O[y].length === 1 && N(O[y][0]));
          }, void 0, function (O, R) {
            return R === "typeAnnotation";
          }, function (O) {
            return O.type === "Identifier";
          }, b) && (F || o[y].length === 0 || o[y].length === 1 && (o[y][0].type === "NullableTypeAnnotation" || A(o[y][0])))) return ["<", s(", ", E.map(d, y)), w(E, D), ">"];

          var _ = o.type === "TSTypeParameterInstantiation" ? "" : h(o).length === 1 && p(D) && !o[y][0].constraint && E.getParentNode().type === "ArrowFunctionExpression" ? "," : f(D, "all") ? l(",") : "";

          return a(["<", c([u, s([",", i], E.map(d, y))]), _, u, ">"], {
            id: v(o)
          });
        }

        function w(E, D) {
          var d = E.getValue();
          if (!m(d, g.Dangling)) return "";
          var y = !m(d, g.Line),
              o = t(E, D, y);
          return y ? o : [o, r];
        }

        function I(E, D, d) {
          var y = E.getValue(),
              o = [],
              x = E.getParentNode();
          return x.type === "TSMappedType" ? (o.push("[", d("name")), y.constraint && o.push(" in ", d("constraint")), x.nameType && o.push(" as ", E.callParent(function () {
            return d("nameType");
          })), o.push("]"), o) : (y.variance && o.push(d("variance")), o.push(d("name")), y.bound && o.push(": ", d("bound")), y.constraint && o.push(" extends ", d("constraint")), y.default && o.push(" = ", d("default")), o);
        }

        n.exports = {
          printTypeParameter: I,
          printTypeParameters: B,
          getTypeParametersGroupId: v
        };
      }
    }),
        Kt = Z({
      "src/language-js/print/property.js": function srcLanguageJsPrintPropertyJs(e, n) {
        "use strict";

        ae();

        var _Qe10 = Qe(),
            t = _Qe10.printComments,
            _Ge18 = Ge(),
            s = _Ge18.printString,
            i = _Ge18.printNumber,
            _Xe18 = Xe(),
            r = _Xe18.isNumericLiteral,
            u = _Xe18.isSimpleNumber,
            a = _Xe18.isStringLiteral,
            c = _Xe18.isStringPropSafeToUnquote,
            l = _Xe18.rawText,
            _Xt3 = Xt(),
            C = _Xt3.printAssignment,
            m = new WeakMap();

        function g(f, h, N) {
          var T = f.getNode();
          if (T.computed) return ["[", N("key"), "]"];
          var A = f.getParentNode(),
              b = T.key;
          if (T.type === "ClassPrivateProperty" && b.type === "Identifier") return ["#", N("key")];

          if (h.quoteProps === "consistent" && !m.has(A)) {
            var v = (A.properties || A.body || A.members).some(function (B) {
              return !B.computed && B.key && a(B.key) && !c(B, h);
            });
            m.set(A, v);
          }

          if ((b.type === "Identifier" || r(b) && u(i(l(b))) && String(b.value) === i(l(b)) && !(h.parser === "typescript" || h.parser === "babel-ts")) && (h.parser === "json" || h.quoteProps === "consistent" && m.get(A))) {
            var _v = s(JSON.stringify(b.type === "Identifier" ? b.name : b.value.toString()), h);

            return f.call(function (B) {
              return t(B, _v, h);
            }, "key");
          }

          return c(T, h) && (h.quoteProps === "as-needed" || h.quoteProps === "consistent" && !m.get(A)) ? f.call(function (v) {
            return t(v, /^\d/.test(b.value) ? i(b.value) : b.value, h);
          }, "key") : N("key");
        }

        function p(f, h, N) {
          return f.getValue().shorthand ? N("value") : C(f, h, N, g(f, h, N), ":", "value");
        }

        n.exports = {
          printProperty: p,
          printPropertyKey: g
        };
      }
    }),
        Ir = Z({
      "src/language-js/print/function.js": function srcLanguageJsPrintFunctionJs(e, n) {
        "use strict";

        ae();

        var t = Ut(),
            _Qe11 = Qe(),
            s = _Qe11.printDanglingComments,
            i = _Qe11.printCommentsSeparately,
            r = st(),
            _Ge19 = Ge(),
            u = _Ge19.getNextNonSpaceNonCommentCharacterIndex,
            _Le24 = Le(),
            _Le24$builders = _Le24.builders,
            a = _Le24$builders.line,
            c = _Le24$builders.softline,
            l = _Le24$builders.group,
            C = _Le24$builders.indent,
            m = _Le24$builders.ifBreak,
            g = _Le24$builders.hardline,
            p = _Le24$builders.join,
            f = _Le24$builders.indentIfBreak,
            _Le24$utils = _Le24.utils,
            h = _Le24$utils.removeLines,
            N = _Le24$utils.willBreak,
            _Jt5 = Jt(),
            T = _Jt5.ArgExpansionBailout,
            _Xe19 = Xe(),
            A = _Xe19.getFunctionParameters,
            b = _Xe19.hasLeadingOwnLineComment,
            v = _Xe19.isFlowAnnotationComment,
            B = _Xe19.isJsxNode,
            w = _Xe19.isTemplateOnItsOwnLine,
            I = _Xe19.shouldPrintComma,
            E = _Xe19.startsWithNoLookaheadToken,
            D = _Xe19.isBinaryish,
            d = _Xe19.isLineComment,
            y = _Xe19.hasComment,
            o = _Xe19.getComments,
            x = _Xe19.CommentCheckFlags,
            F = _Xe19.isCallLikeExpression,
            S = _Xe19.isCallExpression,
            k = _Xe19.getCallArguments,
            _ = _Xe19.hasNakedLeftSide,
            O = _Xe19.getLeftSide,
            _nt7 = nt(),
            R = _nt7.locEnd,
            _wr2 = wr(),
            M = _wr2.printFunctionParameters,
            H = _wr2.shouldGroupFunctionParameters,
            _Kt = Kt(),
            P = _Kt.printPropertyKey,
            _ot6 = ot(),
            G = _ot6.printFunctionTypeParameters;

        function re(ue, Q, de, ge) {
          var ve = ue.getValue(),
              xe = !1;

          if ((ve.type === "FunctionDeclaration" || ve.type === "FunctionExpression") && ge && ge.expandLastArg) {
            var ce = ue.getParentNode();
            S(ce) && k(ce).length > 1 && (xe = !0);
          }

          var we = [];
          ve.type === "TSDeclareFunction" && ve.declare && we.push("declare "), ve.async && we.push("async "), ve.generator ? we.push("function* ") : we.push("function "), ve.id && we.push(Q("id"));
          var fe = M(ue, Q, de, xe),
              pe = oe(ue, Q, de),
              me = H(ve, pe);
          return we.push(G(ue, de, Q), l([me ? l(fe) : fe, pe]), ve.body ? " " : "", Q("body")), de.semi && (ve.declare || !ve.body) && we.push(";"), we;
        }

        function $(ue, Q, de) {
          var ge = ue.getNode(),
              ve = ge.kind,
              xe = ge.value || ge,
              we = [];
          return !ve || ve === "init" || ve === "method" || ve === "constructor" ? xe.async && we.push("async ") : (t.ok(ve === "get" || ve === "set"), we.push(ve, " ")), xe.generator && we.push("*"), we.push(P(ue, Q, de), ge.optional || ge.key.optional ? "?" : ""), ge === xe ? we.push(W(ue, Q, de)) : xe.type === "FunctionExpression" ? we.push(ue.call(function (fe) {
            return W(fe, Q, de);
          }, "value")) : we.push(de("value")), we;
        }

        function W(ue, Q, de) {
          var ge = ue.getNode(),
              ve = M(ue, de, Q),
              xe = oe(ue, de, Q),
              we = H(ge, xe),
              fe = [G(ue, Q, de), l([we ? l(ve) : ve, xe])];
          return ge.body ? fe.push(" ", de("body")) : fe.push(Q.semi ? ";" : ""), fe;
        }

        function ee(ue, Q, de, ge) {
          var ve = ue.getValue(),
              xe = [];
          if (ve.async && xe.push("async "), V(ue, Q)) xe.push(de(["params", 0]));else {
            var fe = ge && (ge.expandLastArg || ge.expandFirstArg),
                pe = oe(ue, de, Q);

            if (fe) {
              if (N(pe)) throw new T();
              pe = l(h(pe));
            }

            xe.push(l([M(ue, de, Q, fe, !0), pe]));
          }
          var we = s(ue, Q, !0, function (fe) {
            var pe = u(Q.originalText, fe, R);
            return pe !== !1 && Q.originalText.slice(pe, pe + 2) === "=>";
          });
          return we && xe.push(" ", we), xe;
        }

        function U(ue, Q, de, ge, ve, xe) {
          var we = ue.getName(),
              fe = ue.getParentNode(),
              pe = F(fe) && we === "callee",
              me = Boolean(Q && Q.assignmentLayout),
              ce = xe.body.type !== "BlockStatement" && xe.body.type !== "ObjectExpression" && xe.body.type !== "SequenceExpression",
              he = pe && ce || Q && Q.assignmentLayout === "chain-tail-arrow-chain",
              J = Symbol("arrow-chain");
          return xe.body.type === "SequenceExpression" && (ve = l(["(", C([c, ve]), c, ")"])), l([l(C([pe || me ? c : "", l(p([" =>", a], de), {
            shouldBreak: ge
          })]), {
            id: J,
            shouldBreak: he
          }), " =>", f(ce ? C([a, ve]) : [" ", ve], {
            groupId: J
          }), pe ? m(c, "", {
            groupId: J
          }) : ""]);
        }

        function ne(ue, Q, de, ge) {
          var ve = ue.getValue(),
              xe = [],
              we = [],
              fe = !1;
          if (function J() {
            var ye = ee(ue, Q, de, ge);
            if (xe.length === 0) xe.push(ye);else {
              var _i14 = i(ue, Q),
                  X = _i14.leading,
                  Y = _i14.trailing;

              xe.push([X, ye]), we.unshift(Y);
            }
            fe = fe || ve.returnType && A(ve).length > 0 || ve.typeParameters || A(ve).some(function (X) {
              return X.type !== "Identifier";
            }), ve.body.type !== "ArrowFunctionExpression" || ge && ge.expandLastArg ? we.unshift(de("body", ge)) : (ve = ve.body, ue.call(J, "body"));
          }(), xe.length > 1) return U(ue, ge, xe, fe, we, ve);
          var pe = xe;
          if (pe.push(" =>"), !b(Q.originalText, ve.body) && (ve.body.type === "ArrayExpression" || ve.body.type === "ObjectExpression" || ve.body.type === "BlockStatement" || B(ve.body) || w(ve.body, Q.originalText) || ve.body.type === "ArrowFunctionExpression" || ve.body.type === "DoExpression")) return l([].concat(pe, [" ", we]));
          if (ve.body.type === "SequenceExpression") return l([].concat(pe, [l([" (", C([c, we]), c, ")"])]));
          var me = (ge && ge.expandLastArg || ue.getParentNode().type === "JSXExpressionContainer") && !y(ve),
              ce = ge && ge.expandLastArg && I(Q, "all"),
              he = ve.body.type === "ConditionalExpression" && !E(ve.body, !1);
          return l([].concat(pe, [l([C([a, he ? m("", "(") : "", we, he ? m("", ")") : ""]), me ? [m(ce ? "," : ""), c] : ""])]));
        }

        function se(ue) {
          var Q = A(ue);
          return Q.length === 1 && !ue.typeParameters && !y(ue, x.Dangling) && Q[0].type === "Identifier" && !Q[0].typeAnnotation && !y(Q[0]) && !Q[0].optional && !ue.predicate && !ue.returnType;
        }

        function V(ue, Q) {
          if (Q.arrowParens === "always") return !1;

          if (Q.arrowParens === "avoid") {
            var de = ue.getValue();
            return se(de);
          }

          return !1;
        }

        function oe(ue, Q, de) {
          var ge = ue.getValue(),
              ve = Q("returnType");
          if (ge.returnType && v(de.originalText, ge.returnType)) return [" /*: ", ve, " */"];
          var xe = [ve];
          return ge.returnType && ge.returnType.typeAnnotation && xe.unshift(": "), ge.predicate && xe.push(ge.returnType ? " " : ": ", Q("predicate")), xe;
        }

        function K(ue, Q, de) {
          var ge = ue.getValue(),
              ve = Q.semi ? ";" : "",
              xe = [];
          ge.argument && (le(Q, ge.argument) ? xe.push([" (", C([g, de("argument")]), g, ")"]) : D(ge.argument) || ge.argument.type === "SequenceExpression" ? xe.push(l([m(" (", " "), C([c, de("argument")]), c, m(")")])) : xe.push(" ", de("argument")));
          var we = o(ge),
              fe = r(we),
              pe = fe && d(fe);
          return pe && xe.push(ve), y(ge, x.Dangling) && xe.push(" ", s(ue, Q, !0)), pe || xe.push(ve), xe;
        }

        function Ee(ue, Q, de) {
          return ["return", K(ue, Q, de)];
        }

        function q(ue, Q, de) {
          return ["throw", K(ue, Q, de)];
        }

        function le(ue, Q) {
          if (b(ue.originalText, Q)) return !0;

          if (_(Q)) {
            var de = Q,
                ge;

            for (; ge = O(de);) {
              if (de = ge, b(ue.originalText, de)) return !0;
            }
          }

          return !1;
        }

        n.exports = {
          printFunction: re,
          printArrowFunction: ne,
          printMethod: $,
          printReturnStatement: Ee,
          printThrowStatement: q,
          printMethodInternal: W,
          shouldPrintParamsWithoutParens: V
        };
      }
    }),
        Un = Z({
      "src/language-js/print/decorators.js": function srcLanguageJsPrintDecoratorsJs(e, n) {
        "use strict";

        ae();

        var _Ge20 = Ge(),
            t = _Ge20.isNonEmptyArray,
            s = _Ge20.hasNewline,
            _Le25 = Le(),
            _Le25$builders = _Le25.builders,
            i = _Le25$builders.line,
            r = _Le25$builders.hardline,
            u = _Le25$builders.join,
            a = _Le25$builders.breakParent,
            c = _Le25$builders.group,
            _nt8 = nt(),
            l = _nt8.locStart,
            C = _nt8.locEnd,
            _Xe20 = Xe(),
            m = _Xe20.getParentExportDeclaration;

        function g(T, A, b) {
          var v = T.getValue();
          return c([u(i, T.map(b, "decorators")), h(v, A) ? r : i]);
        }

        function p(T, A, b) {
          return [u(r, T.map(b, "declaration", "decorators")), r];
        }

        function f(T, A, b) {
          var v = T.getValue(),
              B = v.decorators;
          if (!t(B) || N(T.getParentNode())) return;
          var w = v.type === "ClassExpression" || v.type === "ClassDeclaration" || h(v, A);
          return [m(T) ? r : w ? a : "", u(i, T.map(b, "decorators")), i];
        }

        function h(T, A) {
          return T.decorators.some(function (b) {
            return s(A.originalText, C(b));
          });
        }

        function N(T) {
          if (T.type !== "ExportDefaultDeclaration" && T.type !== "ExportNamedDeclaration" && T.type !== "DeclareExportDeclaration") return !1;
          var A = T.declaration && T.declaration.decorators;
          return t(A) && l(T, {
            ignoreDecorators: !0
          }) > l(A[0]);
        }

        n.exports = {
          printDecorators: f,
          printClassMemberDecorators: g,
          printDecoratorsBeforeExport: p,
          hasDecoratorsBeforeExport: N
        };
      }
    }),
        Yt = Z({
      "src/language-js/print/class.js": function srcLanguageJsPrintClassJs(e, n) {
        "use strict";

        ae();

        var _Ge21 = Ge(),
            t = _Ge21.isNonEmptyArray,
            s = _Ge21.createGroupIdMapper,
            _Qe12 = Qe(),
            i = _Qe12.printComments,
            r = _Qe12.printDanglingComments,
            _Le26 = Le(),
            _Le26$builders = _Le26.builders,
            u = _Le26$builders.join,
            a = _Le26$builders.line,
            c = _Le26$builders.hardline,
            l = _Le26$builders.softline,
            C = _Le26$builders.group,
            m = _Le26$builders.indent,
            g = _Le26$builders.ifBreak,
            _Xe21 = Xe(),
            p = _Xe21.hasComment,
            f = _Xe21.CommentCheckFlags,
            _Pr = Pr(),
            h = _Pr.getTypeParametersGroupId,
            _Ir = Ir(),
            N = _Ir.printMethod,
            _ot7 = ot(),
            T = _ot7.printOptionalToken,
            A = _ot7.printTypeAnnotation,
            b = _ot7.printDefiniteToken,
            _Kt2 = Kt(),
            v = _Kt2.printPropertyKey,
            _Xt4 = Xt(),
            B = _Xt4.printAssignment,
            _Un = Un(),
            w = _Un.printClassMemberDecorators;

        function I(k, _, O) {
          var R = k.getValue(),
              M = [];
          R.declare && M.push("declare "), R.abstract && M.push("abstract "), M.push("class");
          var H = R.id && p(R.id, f.Trailing) || R.typeParameters && p(R.typeParameters, f.Trailing) || R.superClass && p(R.superClass) || t(R.extends) || t(R.mixins) || t(R.implements),
              P = [],
              G = [];

          if (R.id && P.push(" ", O("id")), P.push(O("typeParameters")), R.superClass) {
            var re = [x(k, _, O), O("superTypeParameters")],
                $ = k.call(function (W) {
              return ["extends ", i(W, re, _)];
            }, "superClass");
            H ? G.push(a, C($)) : G.push(" ", $);
          } else G.push(o(k, _, O, "extends"));

          if (G.push(o(k, _, O, "mixins"), o(k, _, O, "implements")), H) {
            var _re2;

            y(R) ? _re2 = [].concat(P, [m(G)]) : _re2 = m([].concat(P, [G])), M.push(C(_re2, {
              id: E(R)
            }));
          } else M.push.apply(M, P.concat(G));

          return M.push(" ", O("body")), M;
        }

        var E = s("heritageGroup");

        function D(k) {
          return g(c, "", {
            groupId: E(k)
          });
        }

        function d(k) {
          return ["superClass", "extends", "mixins", "implements"].filter(function (_) {
            return Boolean(k[_]);
          }).length > 1;
        }

        function y(k) {
          return k.typeParameters && !p(k.typeParameters, f.Trailing | f.Line) && !d(k);
        }

        function o(k, _, O, R) {
          var M = k.getValue();
          if (!t(M[R])) return "";
          var H = r(k, _, !0, function (P) {
            var G = P.marker;
            return G === R;
          });
          return [y(M) ? g(" ", a, {
            groupId: h(M.typeParameters)
          }) : a, H, H && c, R, C(m([a, u([",", a], k.map(O, R))]))];
        }

        function x(k, _, O) {
          var R = O("superClass");
          return k.getParentNode().type === "AssignmentExpression" ? C(g(["(", m([l, R]), l, ")"], R)) : R;
        }

        function F(k, _, O) {
          var R = k.getValue(),
              M = [];
          return t(R.decorators) && M.push(w(k, _, O)), R.accessibility && M.push(R.accessibility + " "), R.readonly && M.push("readonly "), R.declare && M.push("declare "), R.static && M.push("static "), (R.type === "TSAbstractMethodDefinition" || R.abstract) && M.push("abstract "), R.override && M.push("override "), M.push(N(k, _, O)), M;
        }

        function S(k, _, O) {
          var R = k.getValue(),
              M = [],
              H = _.semi ? ";" : "";
          return t(R.decorators) && M.push(w(k, _, O)), R.accessibility && M.push(R.accessibility + " "), R.declare && M.push("declare "), R.static && M.push("static "), (R.type === "TSAbstractPropertyDefinition" || R.abstract) && M.push("abstract "), R.override && M.push("override "), R.readonly && M.push("readonly "), R.variance && M.push(O("variance")), R.type === "ClassAccessorProperty" && M.push("accessor "), M.push(v(k, _, O), T(k), b(k), A(k, _, O)), [B(k, _, O, M, " =", "value"), H];
        }

        n.exports = {
          printClass: I,
          printClassMethod: F,
          printClassProperty: S,
          printHardlineAfterHeritage: D
        };
      }
    }),
        ao = Z({
      "src/language-js/print/interface.js": function srcLanguageJsPrintInterfaceJs(e, n) {
        "use strict";

        ae();

        var _Ge22 = Ge(),
            t = _Ge22.isNonEmptyArray,
            _Le27 = Le(),
            _Le27$builders = _Le27.builders,
            s = _Le27$builders.join,
            i = _Le27$builders.line,
            r = _Le27$builders.group,
            u = _Le27$builders.indent,
            a = _Le27$builders.ifBreak,
            _Xe22 = Xe(),
            c = _Xe22.hasComment,
            l = _Xe22.identity,
            C = _Xe22.CommentCheckFlags,
            _Pr2 = Pr(),
            m = _Pr2.getTypeParametersGroupId,
            _ot8 = ot(),
            g = _ot8.printTypeScriptModifiers;

        function p(f, h, N) {
          var T = f.getValue(),
              A = [];
          T.declare && A.push("declare "), T.type === "TSInterfaceDeclaration" && A.push(T.abstract ? "abstract " : "", g(f, h, N)), A.push("interface");
          var b = [],
              v = [];
          T.type !== "InterfaceTypeAnnotation" && b.push(" ", N("id"), N("typeParameters"));
          var B = T.typeParameters && !c(T.typeParameters, C.Trailing | C.Line);
          return t(T.extends) && v.push(B ? a(" ", i, {
            groupId: m(T.typeParameters)
          }) : i, "extends ", (T.extends.length === 1 ? l : u)(s([",", i], f.map(N, "extends")))), T.id && c(T.id, C.Trailing) || t(T.extends) ? B ? A.push(r([].concat(b, [u(v)]))) : A.push(r(u([].concat(b, v)))) : A.push.apply(A, b.concat(v)), A.push(" ", N("body")), r(A);
        }

        n.exports = {
          printInterface: p
        };
      }
    }),
        io = Z({
      "src/language-js/print/module.js": function srcLanguageJsPrintModuleJs(e, n) {
        "use strict";

        ae();

        var _Ge23 = Ge(),
            t = _Ge23.isNonEmptyArray,
            _Le28 = Le(),
            _Le28$builders = _Le28.builders,
            s = _Le28$builders.softline,
            i = _Le28$builders.group,
            r = _Le28$builders.indent,
            u = _Le28$builders.join,
            a = _Le28$builders.line,
            c = _Le28$builders.ifBreak,
            l = _Le28$builders.hardline,
            _Qe13 = Qe(),
            C = _Qe13.printDanglingComments,
            _Xe23 = Xe(),
            m = _Xe23.hasComment,
            g = _Xe23.CommentCheckFlags,
            p = _Xe23.shouldPrintComma,
            f = _Xe23.needsHardlineAfterDanglingComment,
            h = _Xe23.isStringLiteral,
            N = _Xe23.rawText,
            _nt9 = nt(),
            T = _nt9.locStart,
            A = _nt9.hasSameLoc,
            _Un2 = Un(),
            b = _Un2.hasDecoratorsBeforeExport,
            v = _Un2.printDecoratorsBeforeExport;

        function B(S, k, _) {
          var O = S.getValue(),
              R = k.semi ? ";" : "",
              M = [],
              H = O.importKind;
          return M.push("import"), H && H !== "value" && M.push(" ", H), M.push(d(S, k, _), D(S, k, _), o(S, k, _), R), M;
        }

        function w(S, k, _) {
          var O = S.getValue(),
              R = [];
          b(O) && R.push(v(S, k, _));
          var M = O.type,
              H = O.exportKind,
              P = O.declaration;
          return R.push("export"), (O.default || M === "ExportDefaultDeclaration") && R.push(" default"), m(O, g.Dangling) && (R.push(" ", C(S, k, !0)), f(O) && R.push(l)), P ? R.push(" ", _("declaration")) : R.push(H === "type" ? " type" : "", d(S, k, _), D(S, k, _), o(S, k, _)), E(O, k) && R.push(";"), R;
        }

        function I(S, k, _) {
          var O = S.getValue(),
              R = k.semi ? ";" : "",
              M = [],
              H = O.exportKind,
              P = O.exported;
          return M.push("export"), H === "type" && M.push(" type"), M.push(" *"), P && M.push(" as ", _("exported")), M.push(D(S, k, _), o(S, k, _), R), M;
        }

        function E(S, k) {
          if (!k.semi) return !1;
          var _ = S.type,
              O = S.declaration,
              R = S.default || _ === "ExportDefaultDeclaration";
          if (!O) return !0;
          var M = O.type;
          return !!(R && M !== "ClassDeclaration" && M !== "FunctionDeclaration" && M !== "TSInterfaceDeclaration" && M !== "DeclareClass" && M !== "DeclareFunction" && M !== "TSDeclareFunction" && M !== "EnumDeclaration");
        }

        function D(S, k, _) {
          var O = S.getValue();
          if (!O.source) return "";
          var R = [];
          return y(O, k) || R.push(" from"), R.push(" ", _("source")), R;
        }

        function d(S, k, _) {
          var O = S.getValue();
          if (y(O, k)) return "";
          var R = [" "];

          if (t(O.specifiers)) {
            var M = [],
                H = [];
            S.each(function () {
              var P = S.getValue().type;
              if (P === "ExportNamespaceSpecifier" || P === "ExportDefaultSpecifier" || P === "ImportNamespaceSpecifier" || P === "ImportDefaultSpecifier") M.push(_());else if (P === "ExportSpecifier" || P === "ImportSpecifier") H.push(_());else throw new Error("Unknown specifier type ".concat(JSON.stringify(P)));
            }, "specifiers"), R.push(u(", ", M)), H.length > 0 && (M.length > 0 && R.push(", "), H.length > 1 || M.length > 0 || O.specifiers.some(function (G) {
              return m(G);
            }) ? R.push(i(["{", r([k.bracketSpacing ? a : s, u([",", a], H)]), c(p(k) ? "," : ""), k.bracketSpacing ? a : s, "}"])) : R.push(["{", k.bracketSpacing ? " " : ""].concat(H, [k.bracketSpacing ? " " : "", "}"])));
          } else R.push("{}");

          return R;
        }

        function y(S, k) {
          var _ = S.type,
              O = S.importKind,
              R = S.source,
              M = S.specifiers;
          return _ !== "ImportDeclaration" || t(M) || O === "type" ? !1 : !/{\s*}/.test(k.originalText.slice(T(S), T(R)));
        }

        function o(S, k, _) {
          var O = S.getNode();
          return t(O.assertions) ? [" assert {", k.bracketSpacing ? " " : "", u(", ", S.map(_, "assertions")), k.bracketSpacing ? " " : "", "}"] : "";
        }

        function x(S, k, _) {
          var O = S.getNode(),
              R = O.type,
              M = [],
              H = R === "ImportSpecifier" ? O.importKind : O.exportKind;
          H && H !== "value" && M.push(H, " ");
          var P = R.startsWith("Import"),
              G = P ? "imported" : "local",
              re = P ? "local" : "exported",
              $ = O[G],
              W = O[re],
              ee = "",
              U = "";
          return R === "ExportNamespaceSpecifier" || R === "ImportNamespaceSpecifier" ? ee = "*" : $ && (ee = _(G)), W && !F(O) && (U = _(re)), M.push(ee, ee && U ? " as " : "", U), M;
        }

        function F(S) {
          if (S.type !== "ImportSpecifier" && S.type !== "ExportSpecifier") return !1;
          var k = S.local,
              _ = S[S.type === "ImportSpecifier" ? "imported" : "exported"];
          if (k.type !== _.type || !A(k, _)) return !1;
          if (h(k)) return k.value === _.value && N(k) === N(_);

          switch (k.type) {
            case "Identifier":
              return k.name === _.name;

            default:
              return !1;
          }
        }

        n.exports = {
          printImportDeclaration: B,
          printExportDeclaration: w,
          printExportAllDeclaration: I,
          printModuleSpecifier: x
        };
      }
    }),
        zn = Z({
      "src/language-js/print/object.js": function srcLanguageJsPrintObjectJs(e, n) {
        "use strict";

        ae();

        var _Qe14 = Qe(),
            t = _Qe14.printDanglingComments,
            _Le29 = Le(),
            _Le29$builders = _Le29.builders,
            s = _Le29$builders.line,
            i = _Le29$builders.softline,
            r = _Le29$builders.group,
            u = _Le29$builders.indent,
            a = _Le29$builders.ifBreak,
            c = _Le29$builders.hardline,
            _Ge24 = Ge(),
            l = _Ge24.getLast,
            C = _Ge24.hasNewlineInRange,
            m = _Ge24.hasNewline,
            g = _Ge24.isNonEmptyArray,
            _Xe24 = Xe(),
            p = _Xe24.shouldPrintComma,
            f = _Xe24.hasComment,
            h = _Xe24.getComments,
            N = _Xe24.CommentCheckFlags,
            T = _Xe24.isNextLineEmpty,
            _nt10 = nt(),
            A = _nt10.locStart,
            b = _nt10.locEnd,
            _ot9 = ot(),
            v = _ot9.printOptionalToken,
            B = _ot9.printTypeAnnotation,
            _wr3 = wr(),
            w = _wr3.shouldHugFunctionParameters,
            _r4 = _r(),
            I = _r4.shouldHugType,
            _Yt = Yt(),
            E = _Yt.printHardlineAfterHeritage;

        function D(d, y, o) {
          var x = y.semi ? ";" : "",
              F = d.getValue(),
              S;
          F.type === "TSTypeLiteral" ? S = "members" : F.type === "TSInterfaceBody" ? S = "body" : S = "properties";
          var k = F.type === "ObjectTypeAnnotation",
              _ = [S];
          k && _.push("indexers", "callProperties", "internalSlots");

          var O = _.map(function (V) {
            return F[V][0];
          }).sort(function (V, oe) {
            return A(V) - A(oe);
          })[0],
              R = d.getParentNode(0),
              M = k && R && (R.type === "InterfaceDeclaration" || R.type === "DeclareInterface" || R.type === "DeclareClass") && d.getName() === "body",
              H = F.type === "TSInterfaceBody" || M || F.type === "ObjectPattern" && R.type !== "FunctionDeclaration" && R.type !== "FunctionExpression" && R.type !== "ArrowFunctionExpression" && R.type !== "ObjectMethod" && R.type !== "ClassMethod" && R.type !== "ClassPrivateMethod" && R.type !== "AssignmentPattern" && R.type !== "CatchClause" && F.properties.some(function (V) {
            return V.value && (V.value.type === "ObjectPattern" || V.value.type === "ArrayPattern");
          }) || F.type !== "ObjectPattern" && O && C(y.originalText, A(F), A(O)),
              P = M ? ";" : F.type === "TSInterfaceBody" || F.type === "TSTypeLiteral" ? a(x, ";") : ",",
              G = F.type === "RecordExpression" ? "#{" : F.exact ? "{|" : "{",
              re = F.exact ? "|}" : "}",
              $ = [];

          for (var _i15 = 0, _arr4 = _; _i15 < _arr4.length; _i15++) {
            var V = _arr4[_i15];
            d.each(function (oe) {
              var K = oe.getValue();
              $.push({
                node: K,
                printed: o(),
                loc: A(K)
              });
            }, V);
          }

          _.length > 1 && $.sort(function (V, oe) {
            return V.loc - oe.loc;
          });
          var W = [],
              ee = $.map(function (V) {
            var oe = [].concat(_toConsumableArray(W), [r(V.printed)]);
            return W = [P, s], (V.node.type === "TSPropertySignature" || V.node.type === "TSMethodSignature" || V.node.type === "TSConstructSignatureDeclaration") && f(V.node, N.PrettierIgnore) && W.shift(), T(V.node, y) && W.push(c), oe;
          });

          if (F.inexact) {
            var _V3;

            if (f(F, N.Dangling)) {
              var oe = f(F, N.Line);
              _V3 = [t(d, y, !0), oe || m(y.originalText, b(l(h(F)))) ? c : s, "..."];
            } else _V3 = ["..."];

            ee.push([].concat(_toConsumableArray(W), _toConsumableArray(_V3)));
          }

          var U = l(F[S]),
              ne = !(F.inexact || U && U.type === "RestElement" || U && (U.type === "TSPropertySignature" || U.type === "TSCallSignatureDeclaration" || U.type === "TSMethodSignature" || U.type === "TSConstructSignatureDeclaration") && f(U, N.PrettierIgnore)),
              se;

          if (ee.length === 0) {
            if (!f(F, N.Dangling)) return [G, re, B(d, y, o)];
            se = r([G, t(d, y), i, re, v(d), B(d, y, o)]);
          } else se = [M && g(F.properties) ? E(R) : "", G, u([y.bracketSpacing ? s : i].concat(_toConsumableArray(ee))), a(ne && (P !== "," || p(y)) ? P : ""), y.bracketSpacing ? s : i, re, v(d), B(d, y, o)];

          return d.match(function (V) {
            return V.type === "ObjectPattern" && !V.decorators;
          }, function (V, oe, K) {
            return w(V) && (oe === "params" || oe === "parameters" || oe === "this" || oe === "rest") && K === 0;
          }) || d.match(I, function (V, oe) {
            return oe === "typeAnnotation";
          }, function (V, oe) {
            return oe === "typeAnnotation";
          }, function (V, oe, K) {
            return w(V) && (oe === "params" || oe === "parameters" || oe === "this" || oe === "rest") && K === 0;
          }) || !H && d.match(function (V) {
            return V.type === "ObjectPattern";
          }, function (V) {
            return V.type === "AssignmentExpression" || V.type === "VariableDeclarator";
          }) ? se : r(se, {
            shouldBreak: H
          });
        }

        n.exports = {
          printObject: D
        };
      }
    }),
        wm = Z({
      "src/language-js/print/flow.js": function srcLanguageJsPrintFlowJs(e, n) {
        "use strict";

        ae();

        var t = Ut(),
            _Qe15 = Qe(),
            s = _Qe15.printDanglingComments,
            _Ge25 = Ge(),
            i = _Ge25.printString,
            r = _Ge25.printNumber,
            _Le30 = Le(),
            _Le30$builders = _Le30.builders,
            u = _Le30$builders.hardline,
            a = _Le30$builders.softline,
            c = _Le30$builders.group,
            l = _Le30$builders.indent,
            _Xe25 = Xe(),
            C = _Xe25.getParentExportDeclaration,
            m = _Xe25.isFunctionNotation,
            g = _Xe25.isGetterOrSetter,
            p = _Xe25.rawText,
            f = _Xe25.shouldPrintComma,
            _nt11 = nt(),
            h = _nt11.locStart,
            N = _nt11.locEnd,
            _Yt2 = Yt(),
            T = _Yt2.printClass,
            _r5 = _r(),
            A = _r5.printOpaqueType,
            b = _r5.printTypeAlias,
            v = _r5.printIntersectionType,
            B = _r5.printUnionType,
            w = _r5.printFunctionType,
            I = _r5.printTupleType,
            E = _r5.printIndexedAccessType,
            _ao = ao(),
            D = _ao.printInterface,
            _Pr3 = Pr(),
            d = _Pr3.printTypeParameter,
            y = _Pr3.printTypeParameters,
            _io = io(),
            o = _io.printExportDeclaration,
            x = _io.printExportAllDeclaration,
            _zt3 = zt(),
            F = _zt3.printArrayItems,
            _zn = zn(),
            S = _zn.printObject,
            _Kt3 = Kt(),
            k = _Kt3.printPropertyKey,
            _ot10 = ot(),
            _ = _ot10.printOptionalToken,
            O = _ot10.printTypeAnnotation,
            R = _ot10.printRestSpread;

        function M(P, G, re) {
          var $ = P.getValue(),
              W = G.semi ? ";" : "",
              ee = [];

          switch ($.type) {
            case "DeclareClass":
              return H(P, T(P, G, re));

            case "DeclareFunction":
              return H(P, ["function ", re("id"), $.predicate ? " " : "", re("predicate"), W]);

            case "DeclareModule":
              return H(P, ["module ", re("id"), " ", re("body")]);

            case "DeclareModuleExports":
              return H(P, ["module.exports", ": ", re("typeAnnotation"), W]);

            case "DeclareVariable":
              return H(P, ["var ", re("id"), W]);

            case "DeclareOpaqueType":
              return H(P, A(P, G, re));

            case "DeclareInterface":
              return H(P, D(P, G, re));

            case "DeclareTypeAlias":
              return H(P, b(P, G, re));

            case "DeclareExportDeclaration":
              return H(P, o(P, G, re));

            case "DeclareExportAllDeclaration":
              return H(P, x(P, G, re));

            case "OpaqueType":
              return A(P, G, re);

            case "TypeAlias":
              return b(P, G, re);

            case "IntersectionTypeAnnotation":
              return v(P, G, re);

            case "UnionTypeAnnotation":
              return B(P, G, re);

            case "FunctionTypeAnnotation":
              return w(P, G, re);

            case "TupleTypeAnnotation":
              return I(P, G, re);

            case "GenericTypeAnnotation":
              return [re("id"), y(P, G, re, "typeParameters")];

            case "IndexedAccessType":
            case "OptionalIndexedAccessType":
              return E(P, G, re);

            case "TypeAnnotation":
              return re("typeAnnotation");

            case "TypeParameter":
              return d(P, G, re);

            case "TypeofTypeAnnotation":
              return ["typeof ", re("argument")];

            case "ExistsTypeAnnotation":
              return "*";

            case "EmptyTypeAnnotation":
              return "empty";

            case "MixedTypeAnnotation":
              return "mixed";

            case "ArrayTypeAnnotation":
              return [re("elementType"), "[]"];

            case "BooleanLiteralTypeAnnotation":
              return String($.value);

            case "EnumDeclaration":
              return ["enum ", re("id"), " ", re("body")];

            case "EnumBooleanBody":
            case "EnumNumberBody":
            case "EnumStringBody":
            case "EnumSymbolBody":
              {
                if ($.type === "EnumSymbolBody" || $.explicitType) {
                  var U = null;

                  switch ($.type) {
                    case "EnumBooleanBody":
                      U = "boolean";
                      break;

                    case "EnumNumberBody":
                      U = "number";
                      break;

                    case "EnumStringBody":
                      U = "string";
                      break;

                    case "EnumSymbolBody":
                      U = "symbol";
                      break;
                  }

                  ee.push("of ", U, " ");
                }

                if ($.members.length === 0 && !$.hasUnknownMembers) ee.push(c(["{", s(P, G), a, "}"]));else {
                  var _U3 = $.members.length > 0 ? [u, F(P, G, "members", re), $.hasUnknownMembers || f(G) ? "," : ""] : [];

                  ee.push(c(["{", l([].concat(_U3, _toConsumableArray($.hasUnknownMembers ? [u, "..."] : []))), s(P, G, !0), u, "}"]));
                }
                return ee;
              }

            case "EnumBooleanMember":
            case "EnumNumberMember":
            case "EnumStringMember":
              return [re("id"), " = ", _typeof($.init) == "object" ? re("init") : String($.init)];

            case "EnumDefaultedMember":
              return re("id");

            case "FunctionTypeParam":
              {
                var _U4 = $.name ? re("name") : P.getParentNode().this === $ ? "this" : "";

                return [_U4, _(P), _U4 ? ": " : "", re("typeAnnotation")];
              }

            case "InterfaceDeclaration":
            case "InterfaceTypeAnnotation":
              return D(P, G, re);

            case "ClassImplements":
            case "InterfaceExtends":
              return [re("id"), re("typeParameters")];

            case "NullableTypeAnnotation":
              return ["?", re("typeAnnotation")];

            case "Variance":
              {
                var _U5 = $.kind;
                return t.ok(_U5 === "plus" || _U5 === "minus"), _U5 === "plus" ? "+" : "-";
              }

            case "ObjectTypeCallProperty":
              return $.static && ee.push("static "), ee.push(re("value")), ee;

            case "ObjectTypeIndexer":
              return [$.static ? "static " : "", $.variance ? re("variance") : "", "[", re("id"), $.id ? ": " : "", re("key"), "]: ", re("value")];

            case "ObjectTypeProperty":
              {
                var _U6 = "";
                return $.proto ? _U6 = "proto " : $.static && (_U6 = "static "), [_U6, g($) ? $.kind + " " : "", $.variance ? re("variance") : "", k(P, G, re), _(P), m($) ? "" : ": ", re("value")];
              }

            case "ObjectTypeAnnotation":
              return S(P, G, re);

            case "ObjectTypeInternalSlot":
              return [$.static ? "static " : "", "[[", re("id"), "]]", _(P), $.method ? "" : ": ", re("value")];

            case "ObjectTypeSpreadProperty":
              return R(P, G, re);

            case "QualifiedTypeofIdentifier":
            case "QualifiedTypeIdentifier":
              return [re("qualification"), ".", re("id")];

            case "StringLiteralTypeAnnotation":
              return i(p($), G);

            case "NumberLiteralTypeAnnotation":
              t.strictEqual(_typeof($.value), "number");

            case "BigIntLiteralTypeAnnotation":
              return $.extra ? r($.extra.raw) : r($.raw);

            case "TypeCastExpression":
              return ["(", re("expression"), O(P, G, re), ")"];

            case "TypeParameterDeclaration":
            case "TypeParameterInstantiation":
              {
                var _U7 = y(P, G, re, "params");

                if (G.parser === "flow") {
                  var ne = h($),
                      se = N($),
                      V = G.originalText.lastIndexOf("/*", ne),
                      oe = G.originalText.indexOf("*/", se);

                  if (V !== -1 && oe !== -1) {
                    var K = G.originalText.slice(V + 2, oe).trim();
                    if (K.startsWith("::") && !K.includes("/*") && !K.includes("*/")) return ["/*:: ", _U7, " */"];
                  }
                }

                return _U7;
              }

            case "InferredPredicate":
              return "%checks";

            case "DeclaredPredicate":
              return ["%checks(", re("value"), ")"];

            case "AnyTypeAnnotation":
              return "any";

            case "BooleanTypeAnnotation":
              return "boolean";

            case "BigIntTypeAnnotation":
              return "bigint";

            case "NullLiteralTypeAnnotation":
              return "null";

            case "NumberTypeAnnotation":
              return "number";

            case "SymbolTypeAnnotation":
              return "symbol";

            case "StringTypeAnnotation":
              return "string";

            case "VoidTypeAnnotation":
              return "void";

            case "ThisTypeAnnotation":
              return "this";

            case "Node":
            case "Printable":
            case "SourceLocation":
            case "Position":
            case "Statement":
            case "Function":
            case "Pattern":
            case "Expression":
            case "Declaration":
            case "Specifier":
            case "NamedSpecifier":
            case "Comment":
            case "MemberTypeAnnotation":
            case "Type":
              throw new Error("unprintable type: " + JSON.stringify($.type));
          }
        }

        function H(P, G) {
          var re = C(P);
          return re ? (t.strictEqual(re.type, "DeclareExportDeclaration"), G) : ["declare ", G];
        }

        n.exports = {
          printFlow: M
        };
      }
    }),
        _m = Z({
      "src/language-js/utils/is-ts-keyword-type.js": function srcLanguageJsUtilsIsTsKeywordTypeJs(e, n) {
        "use strict";

        ae();

        function t(s) {
          var i = s.type;
          return i.startsWith("TS") && i.endsWith("Keyword");
        }

        n.exports = t;
      }
    }),
        oo = Z({
      "src/language-js/print/ternary.js": function srcLanguageJsPrintTernaryJs(e, n) {
        "use strict";

        ae();

        var _Ge26 = Ge(),
            t = _Ge26.hasNewlineInRange,
            _Xe26 = Xe(),
            s = _Xe26.isJsxNode,
            i = _Xe26.getComments,
            r = _Xe26.isCallExpression,
            u = _Xe26.isMemberExpression,
            _nt12 = nt(),
            a = _nt12.locStart,
            c = _nt12.locEnd,
            l = Pt(),
            _Le31 = Le(),
            _Le31$builders = _Le31.builders,
            C = _Le31$builders.line,
            m = _Le31$builders.softline,
            g = _Le31$builders.group,
            p = _Le31$builders.indent,
            f = _Le31$builders.align,
            h = _Le31$builders.ifBreak,
            N = _Le31$builders.dedent,
            T = _Le31$builders.breakParent;

        function A(I) {
          var E = [I];

          for (var D = 0; D < E.length; D++) {
            var d = E[D];

            for (var _i16 = 0, _arr5 = ["test", "consequent", "alternate"]; _i16 < _arr5.length; _i16++) {
              var y = _arr5[_i16];
              var o = d[y];
              if (s(o)) return !0;
              o.type === "ConditionalExpression" && E.push(o);
            }
          }

          return !1;
        }

        function b(I, E, D) {
          var d = I.getValue(),
              y = d.type === "ConditionalExpression",
              o = y ? "alternate" : "falseType",
              x = I.getParentNode(),
              F = y ? D("test") : [D("checkType"), " ", "extends", " ", D("extendsType")];
          return x.type === d.type && x[o] === d ? f(2, F) : F;
        }

        var v = new Map([["AssignmentExpression", "right"], ["VariableDeclarator", "init"], ["ReturnStatement", "argument"], ["ThrowStatement", "argument"], ["UnaryExpression", "argument"], ["YieldExpression", "argument"]]);

        function B(I) {
          var E = I.getValue();
          if (E.type !== "ConditionalExpression") return !1;
          var D,
              d = E;

          for (var y = 0; !D; y++) {
            var o = I.getParentNode(y);

            if (r(o) && o.callee === d || u(o) && o.object === d || o.type === "TSNonNullExpression" && o.expression === d) {
              d = o;
              continue;
            }

            o.type === "NewExpression" && o.callee === d || o.type === "TSAsExpression" && o.expression === d ? (D = I.getParentNode(y + 1), d = o) : D = o;
          }

          return d === E ? !1 : D[v.get(D.type)] === d;
        }

        function w(I, E, D) {
          var d = I.getValue(),
              y = d.type === "ConditionalExpression",
              o = y ? "consequent" : "trueType",
              x = y ? "alternate" : "falseType",
              F = y ? ["test"] : ["checkType", "extendsType"],
              S = d[o],
              k = d[x],
              _ = [],
              O = !1,
              R = I.getParentNode(),
              M = R.type === d.type && F.some(function (K) {
            return R[K] === d;
          }),
              H = R.type === d.type && !M,
              P,
              G,
              re = 0;

          do {
            G = P || d, P = I.getParentNode(re), re++;
          } while (P && P.type === d.type && F.every(function (K) {
            return P[K] !== G;
          }));

          var $ = P || R,
              W = G;

          if (y && (s(d[F[0]]) || s(S) || s(k) || A(W))) {
            O = !0, H = !0;

            var K = function K(q) {
              return [h("("), p([m, q]), m, h(")")];
            },
                Ee = function Ee(q) {
              return q.type === "NullLiteral" || q.type === "Literal" && q.value === null || q.type === "Identifier" && q.name === "undefined";
            };

            _.push(" ? ", Ee(S) ? D(o) : K(D(o)), " : ", k.type === d.type || Ee(k) ? D(x) : K(D(x)));
          } else {
            var _K = [C, "? ", S.type === d.type ? h("", "(") : "", f(2, D(o)), S.type === d.type ? h("", ")") : "", C, ": ", k.type === d.type ? D(x) : f(2, D(x))];

            _.push(R.type !== d.type || R[x] === d || M ? _K : E.useTabs ? N(p(_K)) : f(Math.max(0, E.tabWidth - 2), _K));
          }

          var U = [].concat(_toConsumableArray(F.map(function (K) {
            return i(d[K]);
          })), [i(S), i(k)]).flat().some(function (K) {
            return l(K) && t(E.originalText, a(K), c(K));
          }),
              ne = function ne(K) {
            return R === $ ? g(K, {
              shouldBreak: U
            }) : U ? [K, T] : K;
          },
              se = !O && (u(R) || R.type === "NGPipeExpression" && R.left === d) && !R.computed,
              V = B(I),
              oe = ne([b(I, E, D), H ? _ : p(_), y && se && !V ? m : ""]);

          return M || V ? g([p([m, oe]), m]) : oe;
        }

        n.exports = {
          printTernary: w
        };
      }
    }),
        co = Z({
      "src/language-js/print/statement.js": function srcLanguageJsPrintStatementJs(e, n) {
        "use strict";

        ae();

        var _Le32 = Le(),
            t = _Le32.builders.hardline,
            s = kt(),
            _Xe27 = Xe(),
            i = _Xe27.getLeftSidePathName,
            r = _Xe27.hasNakedLeftSide,
            u = _Xe27.isJsxNode,
            a = _Xe27.isTheOnlyJsxElementInMarkdown,
            c = _Xe27.hasComment,
            l = _Xe27.CommentCheckFlags,
            C = _Xe27.isNextLineEmpty,
            _Ir2 = Ir(),
            m = _Ir2.shouldPrintParamsWithoutParens;

        function g(v, B, w, I) {
          var E = v.getValue(),
              D = [],
              d = E.type === "ClassBody",
              y = p(E[I]);
          return v.each(function (o, x, F) {
            var S = o.getValue();
            if (S.type === "EmptyStatement") return;
            var k = w();
            !B.semi && !d && !a(B, o) && f(o, B) ? c(S, l.Leading) ? D.push(w([], {
              needsSemi: !0
            })) : D.push(";", k) : D.push(k), !B.semi && d && A(S) && b(S, F[x + 1]) && D.push(";"), S !== y && (D.push(t), C(S, B) && D.push(t));
          }, I), D;
        }

        function p(v) {
          for (var B = v.length - 1; B >= 0; B--) {
            var w = v[B];
            if (w.type !== "EmptyStatement") return w;
          }
        }

        function f(v, B) {
          return v.getNode().type !== "ExpressionStatement" ? !1 : v.call(function (I) {
            return h(I, B);
          }, "expression");
        }

        function h(v, B) {
          var w = v.getValue();

          switch (w.type) {
            case "ParenthesizedExpression":
            case "TypeCastExpression":
            case "ArrayExpression":
            case "ArrayPattern":
            case "TemplateLiteral":
            case "TemplateElement":
            case "RegExpLiteral":
              return !0;

            case "ArrowFunctionExpression":
              {
                if (!m(v, B)) return !0;
                break;
              }

            case "UnaryExpression":
              {
                var I = w.prefix,
                    E = w.operator;
                if (I && (E === "+" || E === "-")) return !0;
                break;
              }

            case "BindExpression":
              {
                if (!w.object) return !0;
                break;
              }

            case "Literal":
              {
                if (w.regex) return !0;
                break;
              }

            default:
              if (u(w)) return !0;
          }

          return s(v, B) ? !0 : r(w) ? v.call.apply(v, [function (I) {
            return h(I, B);
          }].concat(_toConsumableArray(i(v, w)))) : !1;
        }

        function N(v, B, w) {
          return g(v, B, w, "body");
        }

        function T(v, B, w) {
          return g(v, B, w, "consequent");
        }

        var A = function A(v) {
          var B = v.type;
          return B === "ClassProperty" || B === "PropertyDefinition" || B === "ClassPrivateProperty" || B === "ClassAccessorProperty";
        };

        function b(v, B) {
          var w = v.key && v.key.name;
          if ((w === "static" || w === "get" || w === "set") && !v.value && !v.typeAnnotation) return !0;
          if (!B || B.static || B.accessibility) return !1;

          if (!B.computed) {
            var I = B.key && B.key.name;
            if (I === "in" || I === "instanceof") return !0;
          }

          if (A(B) && B.variance && !B.static && !B.declare) return !0;

          switch (B.type) {
            case "ClassProperty":
            case "PropertyDefinition":
            case "TSAbstractPropertyDefinition":
              return B.computed;

            case "MethodDefinition":
            case "TSAbstractMethodDefinition":
            case "ClassMethod":
            case "ClassPrivateMethod":
              {
                if ((B.value ? B.value.async : B.async) || B.kind === "get" || B.kind === "set") return !1;
                var E = B.value ? B.value.generator : B.generator;
                return !!(B.computed || E);
              }

            case "TSIndexSignature":
              return !0;
          }

          return !1;
        }

        n.exports = {
          printBody: N,
          printSwitchCaseConsequent: T
        };
      }
    }),
        lo = Z({
      "src/language-js/print/block.js": function srcLanguageJsPrintBlockJs(e, n) {
        "use strict";

        ae();

        var _Qe16 = Qe(),
            t = _Qe16.printDanglingComments,
            _Ge27 = Ge(),
            s = _Ge27.isNonEmptyArray,
            _Le33 = Le(),
            _Le33$builders = _Le33.builders,
            i = _Le33$builders.hardline,
            r = _Le33$builders.indent,
            _Xe28 = Xe(),
            u = _Xe28.hasComment,
            a = _Xe28.CommentCheckFlags,
            c = _Xe28.isNextLineEmpty,
            _Yt3 = Yt(),
            l = _Yt3.printHardlineAfterHeritage,
            _co = co(),
            C = _co.printBody;

        function m(p, f, h) {
          var N = p.getValue(),
              T = [];

          if (N.type === "StaticBlock" && T.push("static "), N.type === "ClassBody" && s(N.body)) {
            var b = p.getParentNode();
            T.push(l(b));
          }

          T.push("{");
          var A = g(p, f, h);
          if (A) T.push(r([i, A]), i);else {
            var _b = p.getParentNode(),
                v = p.getParentNode(1);

            _b.type === "ArrowFunctionExpression" || _b.type === "FunctionExpression" || _b.type === "FunctionDeclaration" || _b.type === "ObjectMethod" || _b.type === "ClassMethod" || _b.type === "ClassPrivateMethod" || _b.type === "ForStatement" || _b.type === "WhileStatement" || _b.type === "DoWhileStatement" || _b.type === "DoExpression" || _b.type === "CatchClause" && !v.finalizer || _b.type === "TSModuleDeclaration" || _b.type === "TSDeclareFunction" || N.type === "StaticBlock" || N.type === "ClassBody" || T.push(i);
          }
          return T.push("}"), T;
        }

        function g(p, f, h) {
          var N = p.getValue(),
              T = s(N.directives),
              A = N.body.some(function (B) {
            return B.type !== "EmptyStatement";
          }),
              b = u(N, a.Dangling);
          if (!T && !A && !b) return "";
          var v = [];

          if (T && p.each(function (B, w, I) {
            v.push(h()), (w < I.length - 1 || A || b) && (v.push(i), c(B.getValue(), f) && v.push(i));
          }, "directives"), A && v.push(C(p, f, h)), b && v.push(t(p, f, !0)), N.type === "Program") {
            var B = p.getParentNode();
            (!B || B.type !== "ModuleExpression") && v.push(i);
          }

          return v;
        }

        n.exports = {
          printBlock: m,
          printBlockBody: g
        };
      }
    }),
        Pm = Z({
      "src/language-js/print/typescript.js": function srcLanguageJsPrintTypescriptJs(e, n) {
        "use strict";

        ae();

        var _Qe17 = Qe(),
            t = _Qe17.printDanglingComments,
            _Ge28 = Ge(),
            s = _Ge28.hasNewlineInRange,
            _Le34 = Le(),
            _Le34$builders = _Le34.builders,
            i = _Le34$builders.join,
            r = _Le34$builders.line,
            u = _Le34$builders.hardline,
            a = _Le34$builders.softline,
            c = _Le34$builders.group,
            l = _Le34$builders.indent,
            C = _Le34$builders.conditionalGroup,
            m = _Le34$builders.ifBreak,
            _Xe29 = Xe(),
            g = _Xe29.isLiteral,
            p = _Xe29.getTypeScriptMappedTypeModifier,
            f = _Xe29.shouldPrintComma,
            h = _Xe29.isCallExpression,
            N = _Xe29.isMemberExpression,
            T = _m(),
            _nt13 = nt(),
            A = _nt13.locStart,
            b = _nt13.locEnd,
            _ot11 = ot(),
            v = _ot11.printOptionalToken,
            B = _ot11.printTypeScriptModifiers,
            _oo = oo(),
            w = _oo.printTernary,
            _wr4 = wr(),
            I = _wr4.printFunctionParameters,
            E = _wr4.shouldGroupFunctionParameters,
            _It5 = It(),
            D = _It5.printTemplateLiteral,
            _zt4 = zt(),
            d = _zt4.printArrayItems,
            _zn2 = zn(),
            y = _zn2.printObject,
            _Yt4 = Yt(),
            o = _Yt4.printClassProperty,
            x = _Yt4.printClassMethod,
            _Pr4 = Pr(),
            F = _Pr4.printTypeParameter,
            S = _Pr4.printTypeParameters,
            _Kt4 = Kt(),
            k = _Kt4.printPropertyKey,
            _Ir3 = Ir(),
            _ = _Ir3.printFunction,
            O = _Ir3.printMethodInternal,
            _ao2 = ao(),
            R = _ao2.printInterface,
            _lo = lo(),
            M = _lo.printBlock,
            _r6 = _r(),
            H = _r6.printTypeAlias,
            P = _r6.printIntersectionType,
            G = _r6.printUnionType,
            re = _r6.printFunctionType,
            $ = _r6.printTupleType,
            W = _r6.printIndexedAccessType;

        function ee(U, ne, se) {
          var V = U.getValue();
          if (!V.type.startsWith("TS")) return;
          if (T(V)) return V.type.slice(2, -7).toLowerCase();
          var oe = ne.semi ? ";" : "",
              K = [];

          switch (V.type) {
            case "TSThisType":
              return "this";

            case "TSTypeAssertion":
              {
                var Ee = !(V.expression.type === "ArrayExpression" || V.expression.type === "ObjectExpression"),
                    q = c(["<", l([a, se("typeAnnotation")]), a, ">"]),
                    le = [m("("), l([a, se("expression")]), a, m(")")];
                return Ee ? C([[q, se("expression")], [q, c(le, {
                  shouldBreak: !0
                })], [q, se("expression")]]) : c([q, se("expression")]);
              }

            case "TSDeclareFunction":
              return _(U, se, ne);

            case "TSExportAssignment":
              return ["export = ", se("expression"), oe];

            case "TSModuleBlock":
              return M(U, ne, se);

            case "TSInterfaceBody":
            case "TSTypeLiteral":
              return y(U, ne, se);

            case "TSTypeAliasDeclaration":
              return H(U, ne, se);

            case "TSQualifiedName":
              return i(".", [se("left"), se("right")]);

            case "TSAbstractMethodDefinition":
            case "TSDeclareMethod":
              return x(U, ne, se);

            case "TSAbstractPropertyDefinition":
              return o(U, ne, se);

            case "TSInterfaceHeritage":
            case "TSExpressionWithTypeArguments":
              return K.push(se("expression")), V.typeParameters && K.push(se("typeParameters")), K;

            case "TSTemplateLiteralType":
              return D(U, se, ne);

            case "TSNamedTupleMember":
              return [se("label"), V.optional ? "?" : "", ": ", se("elementType")];

            case "TSRestType":
              return ["...", se("typeAnnotation")];

            case "TSOptionalType":
              return [se("typeAnnotation"), "?"];

            case "TSInterfaceDeclaration":
              return R(U, ne, se);

            case "TSClassImplements":
              return [se("expression"), se("typeParameters")];

            case "TSTypeParameterDeclaration":
            case "TSTypeParameterInstantiation":
              return S(U, ne, se, "params");

            case "TSTypeParameter":
              return F(U, ne, se);

            case "TSAsExpression":
              {
                K.push(se("expression"), " as ", se("typeAnnotation"));

                var _Ee = U.getParentNode();

                return h(_Ee) && _Ee.callee === V || N(_Ee) && _Ee.object === V ? c([l([a].concat(K)), a]) : K;
              }

            case "TSArrayType":
              return [se("elementType"), "[]"];

            case "TSPropertySignature":
              return V.readonly && K.push("readonly "), K.push(k(U, ne, se), v(U)), V.typeAnnotation && K.push(": ", se("typeAnnotation")), V.initializer && K.push(" = ", se("initializer")), K;

            case "TSParameterProperty":
              return V.accessibility && K.push(V.accessibility + " "), V.export && K.push("export "), V.static && K.push("static "), V.override && K.push("override "), V.readonly && K.push("readonly "), K.push(se("parameter")), K;

            case "TSTypeQuery":
              return ["typeof ", se("exprName")];

            case "TSIndexSignature":
              {
                var _Ee2 = U.getParentNode(),
                    _q = V.parameters.length > 1 ? m(f(ne) ? "," : "") : "",
                    _le = c([l([a, i([", ", a], U.map(se, "parameters"))]), _q, a]);

                return [V.export ? "export " : "", V.accessibility ? [V.accessibility, " "] : "", V.static ? "static " : "", V.readonly ? "readonly " : "", V.declare ? "declare " : "", "[", V.parameters ? _le : "", V.typeAnnotation ? "]: " : "]", V.typeAnnotation ? se("typeAnnotation") : "", _Ee2.type === "ClassBody" ? oe : ""];
              }

            case "TSTypePredicate":
              return [V.asserts ? "asserts " : "", se("parameterName"), V.typeAnnotation ? [" is ", se("typeAnnotation")] : ""];

            case "TSNonNullExpression":
              return [se("expression"), "!"];

            case "TSImportType":
              return [V.isTypeOf ? "typeof " : "", "import(", se(V.parameter ? "parameter" : "argument"), ")", V.qualifier ? [".", se("qualifier")] : "", S(U, ne, se, "typeParameters")];

            case "TSLiteralType":
              return se("literal");

            case "TSIndexedAccessType":
              return W(U, ne, se);

            case "TSConstructSignatureDeclaration":
            case "TSCallSignatureDeclaration":
            case "TSConstructorType":
              {
                if (V.type === "TSConstructorType" && V.abstract && K.push("abstract "), V.type !== "TSCallSignatureDeclaration" && K.push("new "), K.push(c(I(U, se, ne, !1, !0))), V.returnType || V.typeAnnotation) {
                  var _Ee3 = V.type === "TSConstructorType";

                  K.push(_Ee3 ? " => " : ": ", se("returnType"), se("typeAnnotation"));
                }

                return K;
              }

            case "TSTypeOperator":
              return [V.operator, " ", se("typeAnnotation")];

            case "TSMappedType":
              {
                var _Ee4 = s(ne.originalText, A(V), b(V));

                return c(["{", l([ne.bracketSpacing ? r : a, V.readonly ? [p(V.readonly, "readonly"), " "] : "", B(U, ne, se), se("typeParameter"), V.optional ? p(V.optional, "?") : "", V.typeAnnotation ? ": " : "", se("typeAnnotation"), m(oe)]), t(U, ne, !0), ne.bracketSpacing ? r : a, "}"], {
                  shouldBreak: _Ee4
                });
              }

            case "TSMethodSignature":
              {
                var _Ee5 = V.kind && V.kind !== "method" ? "".concat(V.kind, " ") : "";

                K.push(V.accessibility ? [V.accessibility, " "] : "", _Ee5, V.export ? "export " : "", V.static ? "static " : "", V.readonly ? "readonly " : "", V.abstract ? "abstract " : "", V.declare ? "declare " : "", V.computed ? "[" : "", se("key"), V.computed ? "]" : "", v(U));

                var _q2 = I(U, se, ne, !1, !0),
                    _le2 = V.returnType ? "returnType" : "typeAnnotation",
                    ue = V[_le2],
                    Q = ue ? se(_le2) : "",
                    de = E(V, Q);

                return K.push(de ? c(_q2) : _q2), ue && K.push(": ", c(Q)), c(K);
              }

            case "TSNamespaceExportDeclaration":
              return K.push("export as namespace ", se("id")), ne.semi && K.push(";"), c(K);

            case "TSEnumDeclaration":
              return V.declare && K.push("declare "), V.modifiers && K.push(B(U, ne, se)), V.const && K.push("const "), K.push("enum ", se("id"), " "), V.members.length === 0 ? K.push(c(["{", t(U, ne), a, "}"])) : K.push(c(["{", l([u, d(U, ne, "members", se), f(ne, "es5") ? "," : ""]), t(U, ne, !0), u, "}"])), K;

            case "TSEnumMember":
              return K.push(se("id")), V.initializer && K.push(" = ", se("initializer")), K;

            case "TSImportEqualsDeclaration":
              return V.isExport && K.push("export "), K.push("import "), V.importKind && V.importKind !== "value" && K.push(V.importKind, " "), K.push(se("id"), " = ", se("moduleReference")), ne.semi && K.push(";"), c(K);

            case "TSExternalModuleReference":
              return ["require(", se("expression"), ")"];

            case "TSModuleDeclaration":
              {
                var _Ee6 = U.getParentNode(),
                    _q3 = g(V.id),
                    _le3 = _Ee6.type === "TSModuleDeclaration",
                    _ue = V.body && V.body.type === "TSModuleDeclaration";

                if (_le3) K.push(".");else {
                  V.declare && K.push("declare "), K.push(B(U, ne, se));

                  var _Q = ne.originalText.slice(A(V), A(V.id));

                  V.id.type === "Identifier" && V.id.name === "global" && !/namespace|module/.test(_Q) || K.push(_q3 || /(?:^|\s)module(?:\s|$)/.test(_Q) ? "module " : "namespace ");
                }
                return K.push(se("id")), _ue ? K.push(se("body")) : V.body ? K.push(" ", c(se("body"))) : K.push(oe), K;
              }

            case "TSConditionalType":
              return w(U, ne, se);

            case "TSInferType":
              return ["infer", " ", se("typeParameter")];

            case "TSIntersectionType":
              return P(U, ne, se);

            case "TSUnionType":
              return G(U, ne, se);

            case "TSFunctionType":
              return re(U, ne, se);

            case "TSTupleType":
              return $(U, ne, se);

            case "TSTypeReference":
              return [se("typeName"), S(U, ne, se, "typeParameters")];

            case "TSTypeAnnotation":
              return se("typeAnnotation");

            case "TSEmptyBodyFunctionExpression":
              return O(U, ne, se);

            case "TSJSDocAllType":
              return "*";

            case "TSJSDocUnknownType":
              return "?";

            case "TSJSDocNullableType":
              return ["?", se("typeAnnotation")];

            case "TSJSDocNonNullableType":
              return ["!", se("typeAnnotation")];

            default:
              throw new Error("Unknown TypeScript node type: ".concat(JSON.stringify(V.type), "."));
          }
        }

        n.exports = {
          printTypescript: ee
        };
      }
    }),
        Im = Z({
      "src/language-js/print/comment.js": function srcLanguageJsPrintCommentJs(e, n) {
        "use strict";

        ae();

        var _Ge29 = Ge(),
            t = _Ge29.hasNewline,
            _Le35 = Le(),
            _Le35$builders = _Le35.builders,
            s = _Le35$builders.join,
            i = _Le35$builders.hardline,
            r = _Le35.utils.replaceTextEndOfLine,
            _Xe30 = Xe(),
            u = _Xe30.isLineComment,
            _nt14 = nt(),
            a = _nt14.locStart,
            c = _nt14.locEnd,
            l = Pt();

        function C(p, f) {
          var h = p.getValue();
          if (u(h)) return f.originalText.slice(a(h), c(h)).trimEnd();

          if (l(h)) {
            if (m(h)) {
              var A = g(h);
              return h.trailing && !t(f.originalText, a(h), {
                backwards: !0
              }) ? [i, A] : A;
            }

            var _N7 = c(h),
                T = f.originalText.slice(_N7 - 3, _N7) === "*-/";

            return ["/*", r(h.value), T ? "*-/" : "*/"];
          }

          throw new Error("Not a comment: " + JSON.stringify(h));
        }

        function m(p) {
          var f = "*".concat(p.value, "*").split("\n");
          return f.length > 1 && f.every(function (h) {
            return h.trim()[0] === "*";
          });
        }

        function g(p) {
          var f = p.value.split("\n");
          return ["/*", s(i, f.map(function (h, N) {
            return N === 0 ? h.trimEnd() : " " + (N < f.length - 1 ? h.trim() : h.trimStart());
          })), "*/"];
        }

        n.exports = {
          printComment: C
        };
      }
    }),
        km = Z({
      "src/language-js/print/literal.js": function srcLanguageJsPrintLiteralJs(e, n) {
        "use strict";

        ae();

        var _Ge30 = Ge(),
            t = _Ge30.printString,
            s = _Ge30.printNumber;

        function i(a, c) {
          var l = a.getNode();

          switch (l.type) {
            case "RegExpLiteral":
              return u(l);

            case "BigIntLiteral":
              return r(l.bigint || l.extra.raw);

            case "NumericLiteral":
              return s(l.extra.raw);

            case "StringLiteral":
              return t(l.extra.raw, c);

            case "NullLiteral":
              return "null";

            case "BooleanLiteral":
              return String(l.value);

            case "DecimalLiteral":
              return s(l.value) + "m";

            case "Literal":
              {
                if (l.regex) return u(l.regex);
                if (l.bigint) return r(l.raw);
                if (l.decimal) return s(l.decimal) + "m";
                var C = l.value;
                return typeof C == "number" ? s(l.raw) : typeof C == "string" ? t(l.raw, c) : String(C);
              }
          }
        }

        function r(a) {
          return a.toLowerCase();
        }

        function u(a) {
          var c = a.pattern,
              l = a.flags;
          return l = _toConsumableArray(l).sort().join(""), "/".concat(c, "/").concat(l);
        }

        n.exports = {
          printLiteral: i
        };
      }
    }),
        Lm = Z({
      "src/language-js/printer-estree.js": function srcLanguageJsPrinterEstreeJs(e, n) {
        "use strict";

        ae();

        var _Qe18 = Qe(),
            t = _Qe18.printDanglingComments,
            _Ge31 = Ge(),
            s = _Ge31.hasNewline,
            _Le36 = Le(),
            _Le36$builders = _Le36.builders,
            i = _Le36$builders.join,
            r = _Le36$builders.line,
            u = _Le36$builders.hardline,
            a = _Le36$builders.softline,
            c = _Le36$builders.group,
            l = _Le36$builders.indent,
            C = _Le36.utils.replaceTextEndOfLine,
            m = ym(),
            g = hm(),
            _eo = eo(),
            p = _eo.insertPragma,
            f = to(),
            h = kt(),
            N = ro(),
            _Xe31 = Xe(),
            T = _Xe31.hasFlowShorthandAnnotationComment,
            A = _Xe31.hasComment,
            b = _Xe31.CommentCheckFlags,
            v = _Xe31.isTheOnlyJsxElementInMarkdown,
            B = _Xe31.isLineComment,
            w = _Xe31.isNextLineEmpty,
            I = _Xe31.needsHardlineAfterDanglingComment,
            E = _Xe31.rawText,
            D = _Xe31.hasIgnoreComment,
            d = _Xe31.isCallExpression,
            y = _Xe31.isMemberExpression,
            o = _Xe31.markerForIfWithoutBlockAndSameLineComment,
            _nt15 = nt(),
            x = _nt15.locStart,
            F = _nt15.locEnd,
            S = Pt(),
            _bm = bm(),
            k = _bm.printHtmlBinding,
            _ = _bm.isVueEventBindingExpression,
            _Tm = Tm(),
            O = _Tm.printAngular,
            _Bm = Bm(),
            R = _Bm.printJsx,
            M = _Bm.hasJsxIgnoreComment,
            _wm = wm(),
            H = _wm.printFlow,
            _Pm = Pm(),
            P = _Pm.printTypescript,
            _ot12 = ot(),
            G = _ot12.printOptionalToken,
            re = _ot12.printBindExpressionCallee,
            $ = _ot12.printTypeAnnotation,
            W = _ot12.adjustClause,
            ee = _ot12.printRestSpread,
            U = _ot12.printDefiniteToken,
            _io2 = io(),
            ne = _io2.printImportDeclaration,
            se = _io2.printExportDeclaration,
            V = _io2.printExportAllDeclaration,
            oe = _io2.printModuleSpecifier,
            _oo2 = oo(),
            K = _oo2.printTernary,
            _It6 = It(),
            Ee = _It6.printTemplateLiteral,
            _zt5 = zt(),
            q = _zt5.printArray,
            _zn3 = zn(),
            le = _zn3.printObject,
            _Yt5 = Yt(),
            ue = _Yt5.printClass,
            Q = _Yt5.printClassMethod,
            de = _Yt5.printClassProperty,
            _Kt5 = Kt(),
            ge = _Kt5.printProperty,
            _Ir4 = Ir(),
            ve = _Ir4.printFunction,
            xe = _Ir4.printArrowFunction,
            we = _Ir4.printMethod,
            fe = _Ir4.printReturnStatement,
            pe = _Ir4.printThrowStatement,
            _so2 = so(),
            me = _so2.printCallExpression,
            _Xt5 = Xt(),
            ce = _Xt5.printVariableDeclarator,
            he = _Xt5.printAssignmentExpression,
            _Jn3 = Jn(),
            J = _Jn3.printBinaryishExpression,
            _co2 = co(),
            ye = _co2.printSwitchCaseConsequent,
            _uo2 = uo(),
            X = _uo2.printMemberExpression,
            _lo2 = lo(),
            Y = _lo2.printBlock,
            te = _lo2.printBlockBody,
            _Im = Im(),
            z = _Im.printComment,
            _km = km(),
            j = _km.printLiteral,
            _Un3 = Un(),
            Ce = _Un3.printDecorators;

        function Ne(Te, _e, Fe, Ke) {
          var Se = je(Te, _e, Fe, Ke);
          if (!Se) return "";
          var ze = Te.getValue(),
              Be = ze.type;
          if (Be === "ClassMethod" || Be === "ClassPrivateMethod" || Be === "ClassProperty" || Be === "ClassAccessorProperty" || Be === "PropertyDefinition" || Be === "TSAbstractPropertyDefinition" || Be === "ClassPrivateProperty" || Be === "MethodDefinition" || Be === "TSAbstractMethodDefinition" || Be === "TSDeclareMethod") return Se;
          var Ie = [Se],
              Ve = Ce(Te, _e, Fe),
              Ae = ze.type === "ClassExpression" && Ve;
          if (Ve && (Ie = [].concat(_toConsumableArray(Ve), [Se]), !Ae)) return c(Ie);
          if (!h(Te, _e)) return Ke && Ke.needsSemi && Ie.unshift(";"), Ie.length === 1 && Ie[0] === Se ? Se : Ie;

          if (Ae && (Ie = [l([r].concat(_toConsumableArray(Ie)))]), Ie.unshift("("), Ke && Ke.needsSemi && Ie.unshift(";"), T(ze)) {
            var _ze$trailingComments = _slicedToArray(ze.trailingComments, 1),
                Pe = _ze$trailingComments[0];

            Ie.push(" /*", Pe.value.trimStart(), "*/"), Pe.printed = !0;
          }

          return Ae && Ie.push(r), Ie.push(")"), Ie;
        }

        function je(Te, _e, Fe, Ke) {
          var Se = Te.getValue(),
              ze = _e.semi ? ";" : "";
          if (!Se) return "";
          if (typeof Se == "string") return Se;

          for (var _i17 = 0, _arr6 = [j, k, O, R, H, P]; _i17 < _arr6.length; _i17++) {
            var Ie = _arr6[_i17];
            var Ve = Ie(Te, _e, Fe);
            if (_typeof(Ve) < "u") return Ve;
          }

          var Be = [];

          switch (Se.type) {
            case "JsExpressionRoot":
              return Fe("node");

            case "JsonRoot":
              return [Fe("node"), u];

            case "File":
              return Se.program && Se.program.interpreter && Be.push(Fe(["program", "interpreter"])), Be.push(Fe("program")), Be;

            case "Program":
              return te(Te, _e, Fe);

            case "EmptyStatement":
              return "";

            case "ExpressionStatement":
              {
                if (Se.directive) return [Ue(Se.expression, _e), ze];

                if (_e.parser === "__vue_event_binding") {
                  var _Ve = Te.getParentNode();

                  if (_Ve.type === "Program" && _Ve.body.length === 1 && _Ve.body[0] === Se) return [Fe("expression"), _(Se.expression) ? ";" : ""];
                }

                var _Ie = t(Te, _e, !0, function (Ve) {
                  var Ae = Ve.marker;
                  return Ae === o;
                });

                return [Fe("expression"), v(_e, Te) ? "" : ze, _Ie ? [" ", _Ie] : ""];
              }

            case "ParenthesizedExpression":
              return !A(Se.expression) && (Se.expression.type === "ObjectExpression" || Se.expression.type === "ArrayExpression") ? ["(", Fe("expression"), ")"] : c(["(", l([a, Fe("expression")]), a, ")"]);

            case "AssignmentExpression":
              return he(Te, _e, Fe);

            case "VariableDeclarator":
              return ce(Te, _e, Fe);

            case "BinaryExpression":
            case "LogicalExpression":
              return J(Te, _e, Fe);

            case "AssignmentPattern":
              return [Fe("left"), " = ", Fe("right")];

            case "OptionalMemberExpression":
            case "MemberExpression":
              return X(Te, _e, Fe);

            case "MetaProperty":
              return [Fe("meta"), ".", Fe("property")];

            case "BindExpression":
              return Se.object && Be.push(Fe("object")), Be.push(c(l([a, re(Te, _e, Fe)]))), Be;

            case "Identifier":
              return [Se.name, G(Te), U(Te), $(Te, _e, Fe)];

            case "V8IntrinsicIdentifier":
              return ["%", Se.name];

            case "SpreadElement":
            case "SpreadElementPattern":
            case "SpreadProperty":
            case "SpreadPropertyPattern":
            case "RestElement":
              return ee(Te, _e, Fe);

            case "FunctionDeclaration":
            case "FunctionExpression":
              return ve(Te, Fe, _e, Ke);

            case "ArrowFunctionExpression":
              return xe(Te, _e, Fe, Ke);

            case "YieldExpression":
              return Be.push("yield"), Se.delegate && Be.push("*"), Se.argument && Be.push(" ", Fe("argument")), Be;

            case "AwaitExpression":
              {
                if (Be.push("await"), Se.argument) {
                  Be.push(" ", Fe("argument"));

                  var _Ie2 = Te.getParentNode();

                  if (d(_Ie2) && _Ie2.callee === Se || y(_Ie2) && _Ie2.object === Se) {
                    Be = [l([a].concat(_toConsumableArray(Be))), a];

                    var _Ve2 = Te.findAncestor(function (Ae) {
                      return Ae.type === "AwaitExpression" || Ae.type === "BlockStatement";
                    });

                    if (!_Ve2 || _Ve2.type !== "AwaitExpression") return c(Be);
                  }
                }

                return Be;
              }

            case "ExportDefaultDeclaration":
            case "ExportNamedDeclaration":
              return se(Te, _e, Fe);

            case "ExportAllDeclaration":
              return V(Te, _e, Fe);

            case "ImportDeclaration":
              return ne(Te, _e, Fe);

            case "ImportSpecifier":
            case "ExportSpecifier":
            case "ImportNamespaceSpecifier":
            case "ExportNamespaceSpecifier":
            case "ImportDefaultSpecifier":
            case "ExportDefaultSpecifier":
              return oe(Te, _e, Fe);

            case "ImportAttribute":
              return [Fe("key"), ": ", Fe("value")];

            case "Import":
              return "import";

            case "BlockStatement":
            case "StaticBlock":
            case "ClassBody":
              return Y(Te, _e, Fe);

            case "ThrowStatement":
              return pe(Te, _e, Fe);

            case "ReturnStatement":
              return fe(Te, _e, Fe);

            case "NewExpression":
            case "ImportExpression":
            case "OptionalCallExpression":
            case "CallExpression":
              return me(Te, _e, Fe);

            case "ObjectExpression":
            case "ObjectPattern":
            case "RecordExpression":
              return le(Te, _e, Fe);

            case "ObjectProperty":
            case "Property":
              return Se.method || Se.kind === "get" || Se.kind === "set" ? we(Te, _e, Fe) : ge(Te, _e, Fe);

            case "ObjectMethod":
              return we(Te, _e, Fe);

            case "Decorator":
              return ["@", Fe("expression")];

            case "ArrayExpression":
            case "ArrayPattern":
            case "TupleExpression":
              return q(Te, _e, Fe);

            case "SequenceExpression":
              {
                var _Ie3 = Te.getParentNode(0);

                if (_Ie3.type === "ExpressionStatement" || _Ie3.type === "ForStatement") {
                  var _Ve3 = [];
                  return Te.each(function (Ae, Oe) {
                    Oe === 0 ? _Ve3.push(Fe()) : _Ve3.push(",", l([r, Fe()]));
                  }, "expressions"), c(_Ve3);
                }

                return c(i([",", r], Te.map(Fe, "expressions")));
              }

            case "ThisExpression":
              return "this";

            case "Super":
              return "super";

            case "Directive":
              return [Fe("value"), ze];

            case "DirectiveLiteral":
              return Ue(Se, _e);

            case "UnaryExpression":
              return Be.push(Se.operator), /[a-z]$/.test(Se.operator) && Be.push(" "), A(Se.argument) ? Be.push(c(["(", l([a, Fe("argument")]), a, ")"])) : Be.push(Fe("argument")), Be;

            case "UpdateExpression":
              return Be.push(Fe("argument"), Se.operator), Se.prefix && Be.reverse(), Be;

            case "ConditionalExpression":
              return K(Te, _e, Fe);

            case "VariableDeclaration":
              {
                var _Ie4 = Te.map(Fe, "declarations"),
                    _Ve4 = Te.getParentNode(),
                    Ae = _Ve4.type === "ForStatement" || _Ve4.type === "ForInStatement" || _Ve4.type === "ForOfStatement",
                    Oe = Se.declarations.some(function (ie) {
                  return ie.init;
                }),
                    Pe;

                return _Ie4.length === 1 && !A(Se.declarations[0]) ? Pe = _Ie4[0] : _Ie4.length > 0 && (Pe = l(_Ie4[0])), Be = [Se.declare ? "declare " : "", Se.kind, Pe ? [" ", Pe] : "", l(_Ie4.slice(1).map(function (ie) {
                  return [",", Oe && !Ae ? u : r, ie];
                }))], Ae && _Ve4.body !== Se || Be.push(ze), c(Be);
              }

            case "WithStatement":
              return c(["with (", Fe("object"), ")", W(Se.body, Fe("body"))]);

            case "IfStatement":
              {
                var _Ie5 = W(Se.consequent, Fe("consequent")),
                    _Ve5 = c(["if (", c([l([a, Fe("test")]), a]), ")", _Ie5]);

                if (Be.push(_Ve5), Se.alternate) {
                  var _Ae = A(Se.consequent, b.Trailing | b.Line) || I(Se),
                      _Oe = Se.consequent.type === "BlockStatement" && !_Ae;

                  Be.push(_Oe ? " " : u), A(Se, b.Dangling) && Be.push(t(Te, _e, !0), _Ae ? u : " "), Be.push("else", c(W(Se.alternate, Fe("alternate"), Se.alternate.type === "IfStatement")));
                }

                return Be;
              }

            case "ForStatement":
              {
                var _Ie6 = W(Se.body, Fe("body")),
                    _Ve6 = t(Te, _e, !0),
                    _Ae2 = _Ve6 ? [_Ve6, a] : "";

                return !Se.init && !Se.test && !Se.update ? [_Ae2, c(["for (;;)", _Ie6])] : [_Ae2, c(["for (", c([l([a, Fe("init"), ";", r, Fe("test"), ";", r, Fe("update")]), a]), ")", _Ie6])];
              }

            case "WhileStatement":
              return c(["while (", c([l([a, Fe("test")]), a]), ")", W(Se.body, Fe("body"))]);

            case "ForInStatement":
              return c(["for (", Fe("left"), " in ", Fe("right"), ")", W(Se.body, Fe("body"))]);

            case "ForOfStatement":
              return c(["for", Se.await ? " await" : "", " (", Fe("left"), " of ", Fe("right"), ")", W(Se.body, Fe("body"))]);

            case "DoWhileStatement":
              {
                var _Ie7 = W(Se.body, Fe("body"));

                return Be = [c(["do", _Ie7])], Se.body.type === "BlockStatement" ? Be.push(" ") : Be.push(u), Be.push("while (", c([l([a, Fe("test")]), a]), ")", ze), Be;
              }

            case "DoExpression":
              return [Se.async ? "async " : "", "do ", Fe("body")];

            case "BreakStatement":
              return Be.push("break"), Se.label && Be.push(" ", Fe("label")), Be.push(ze), Be;

            case "ContinueStatement":
              return Be.push("continue"), Se.label && Be.push(" ", Fe("label")), Be.push(ze), Be;

            case "LabeledStatement":
              return Se.body.type === "EmptyStatement" ? [Fe("label"), ":;"] : [Fe("label"), ": ", Fe("body")];

            case "TryStatement":
              return ["try ", Fe("block"), Se.handler ? [" ", Fe("handler")] : "", Se.finalizer ? [" finally ", Fe("finalizer")] : ""];

            case "CatchClause":
              if (Se.param) {
                var _Ie8 = A(Se.param, function (Ae) {
                  return !S(Ae) || Ae.leading && s(_e.originalText, F(Ae)) || Ae.trailing && s(_e.originalText, x(Ae), {
                    backwards: !0
                  });
                }),
                    _Ve7 = Fe("param");

                return ["catch ", _Ie8 ? ["(", l([a, _Ve7]), a, ") "] : ["(", _Ve7, ") "], Fe("body")];
              }

              return ["catch ", Fe("body")];

            case "SwitchStatement":
              return [c(["switch (", l([a, Fe("discriminant")]), a, ")"]), " {", Se.cases.length > 0 ? l([u, i(u, Te.map(function (Ie, Ve, Ae) {
                var Oe = Ie.getValue();
                return [Fe(), Ve !== Ae.length - 1 && w(Oe, _e) ? u : ""];
              }, "cases"))]) : "", u, "}"];

            case "SwitchCase":
              {
                Se.test ? Be.push("case ", Fe("test"), ":") : Be.push("default:"), A(Se, b.Dangling) && Be.push(" ", t(Te, _e, !0));

                var _Ie9 = Se.consequent.filter(function (Ve) {
                  return Ve.type !== "EmptyStatement";
                });

                if (_Ie9.length > 0) {
                  var _Ve8 = ye(Te, _e, Fe);

                  Be.push(_Ie9.length === 1 && _Ie9[0].type === "BlockStatement" ? [" ", _Ve8] : l([u, _Ve8]));
                }

                return Be;
              }

            case "DebuggerStatement":
              return ["debugger", ze];

            case "ClassDeclaration":
            case "ClassExpression":
              return ue(Te, _e, Fe);

            case "ClassMethod":
            case "ClassPrivateMethod":
            case "MethodDefinition":
              return Q(Te, _e, Fe);

            case "ClassProperty":
            case "PropertyDefinition":
            case "ClassPrivateProperty":
            case "ClassAccessorProperty":
              return de(Te, _e, Fe);

            case "TemplateElement":
              return C(Se.value.raw);

            case "TemplateLiteral":
              return Ee(Te, Fe, _e);

            case "TaggedTemplateExpression":
              return [Fe("tag"), Fe("typeParameters"), Fe("quasi")];

            case "PrivateIdentifier":
              return ["#", Fe("name")];

            case "PrivateName":
              return ["#", Fe("id")];

            case "InterpreterDirective":
              return Be.push("#!", Se.value, u), w(Se, _e) && Be.push(u), Be;

            case "TopicReference":
              return "%";

            case "ArgumentPlaceholder":
              return "?";

            case "ModuleExpression":
              {
                Be.push("module {");

                var _Ie10 = Fe("body");

                return _Ie10 && Be.push(l([u, _Ie10]), u), Be.push("}"), Be;
              }

            default:
              throw new Error("unknown type: " + JSON.stringify(Se.type));
          }
        }

        function Ue(Te, _e) {
          var Fe = E(Te),
              Ke = Fe.slice(1, -1);
          if (Ke.includes('"') || Ke.includes("'")) return Fe;
          var Se = _e.singleQuote ? "'" : '"';
          return Se + Ke + Se;
        }

        function tt(Te) {
          return Te.type && !S(Te) && !B(Te) && Te.type !== "EmptyStatement" && Te.type !== "TemplateElement" && Te.type !== "Import" && Te.type !== "TSEmptyBodyFunctionExpression";
        }

        n.exports = {
          preprocess: N,
          print: Ne,
          embed: m,
          insertPragma: p,
          massageAstNode: g,
          hasPrettierIgnore: function hasPrettierIgnore(Te) {
            return D(Te) || M(Te);
          },
          willPrintOwnComments: f.willPrintOwnComments,
          canAttachComment: tt,
          printComment: z,
          isBlockComment: S,
          handleComments: {
            avoidAstMutation: !0,
            ownLine: f.handleOwnLineComment,
            endOfLine: f.handleEndOfLineComment,
            remaining: f.handleRemainingComment
          },
          getCommentChildNodes: f.getCommentChildNodes
        };
      }
    }),
        Om = Z({
      "src/language-js/printer-estree-json.js": function srcLanguageJsPrinterEstreeJsonJs(e, n) {
        "use strict";

        ae();

        var _Le37 = Le(),
            _Le37$builders = _Le37.builders,
            t = _Le37$builders.hardline,
            s = _Le37$builders.indent,
            i = _Le37$builders.join,
            r = ro();

        function u(l, C, m) {
          var g = l.getValue();

          switch (g.type) {
            case "JsonRoot":
              return [m("node"), t];

            case "ArrayExpression":
              {
                if (g.elements.length === 0) return "[]";
                var p = l.map(function () {
                  return l.getValue() === null ? "null" : m();
                }, "elements");
                return ["[", s([t, i([",", t], p)]), t, "]"];
              }

            case "ObjectExpression":
              return g.properties.length === 0 ? "{}" : ["{", s([t, i([",", t], l.map(m, "properties"))]), t, "}"];

            case "ObjectProperty":
              return [m("key"), ": ", m("value")];

            case "UnaryExpression":
              return [g.operator === "+" ? "" : g.operator, m("argument")];

            case "NullLiteral":
              return "null";

            case "BooleanLiteral":
              return g.value ? "true" : "false";

            case "StringLiteral":
            case "NumericLiteral":
              return JSON.stringify(g.value);

            case "Identifier":
              {
                var _p4 = l.getParentNode();

                return _p4 && _p4.type === "ObjectProperty" && _p4.key === g ? JSON.stringify(g.name) : g.name;
              }

            case "TemplateLiteral":
              return m(["quasis", 0]);

            case "TemplateElement":
              return JSON.stringify(g.value.cooked);

            default:
              throw new Error("unknown type: " + JSON.stringify(g.type));
          }
        }

        var a = new Set(["start", "end", "extra", "loc", "comments", "leadingComments", "trailingComments", "innerComments", "errors", "range", "tokens"]);

        function c(l, C) {
          var m = l.type;

          if (m === "ObjectProperty" && l.key.type === "Identifier") {
            C.key = {
              type: "StringLiteral",
              value: l.key.name
            };
            return;
          }

          if (m === "UnaryExpression" && l.operator === "+") return C.argument;

          if (m === "ArrayExpression") {
            var _iterator47 = _createForOfIteratorHelper(l.elements.entries()),
                _step47;

            try {
              for (_iterator47.s(); !(_step47 = _iterator47.n()).done;) {
                var _step47$value = _slicedToArray(_step47.value, 2),
                    g = _step47$value[0],
                    p = _step47$value[1];

                p === null && C.elements.splice(g, 0, {
                  type: "NullLiteral"
                });
              }
            } catch (err) {
              _iterator47.e(err);
            } finally {
              _iterator47.f();
            }

            return;
          }

          if (m === "TemplateLiteral") return {
            type: "StringLiteral",
            value: l.quasis[0].value.cooked
          };
        }

        c.ignoredProperties = a, n.exports = {
          preprocess: r,
          print: u,
          massageAstNode: c
        };
      }
    }),
        Lt = Z({
      "src/common/common-options.js": function srcCommonCommonOptionsJs(e, n) {
        "use strict";

        ae();
        var t = "Common";
        n.exports = {
          bracketSpacing: {
            since: "0.0.0",
            category: t,
            type: "boolean",
            default: !0,
            description: "Print spaces between brackets.",
            oppositeDescription: "Do not print spaces between brackets."
          },
          singleQuote: {
            since: "0.0.0",
            category: t,
            type: "boolean",
            default: !1,
            description: "Use single quotes instead of double quotes."
          },
          proseWrap: {
            since: "1.8.2",
            category: t,
            type: "choice",
            default: [{
              since: "1.8.2",
              value: !0
            }, {
              since: "1.9.0",
              value: "preserve"
            }],
            description: "How to wrap prose.",
            choices: [{
              since: "1.9.0",
              value: "always",
              description: "Wrap prose if it exceeds the print width."
            }, {
              since: "1.9.0",
              value: "never",
              description: "Do not wrap prose."
            }, {
              since: "1.9.0",
              value: "preserve",
              description: "Wrap prose as-is."
            }]
          },
          bracketSameLine: {
            since: "2.4.0",
            category: t,
            type: "boolean",
            default: !1,
            description: "Put > of opening tags on the last line instead of on a new line."
          },
          singleAttributePerLine: {
            since: "2.6.0",
            category: t,
            type: "boolean",
            default: !1,
            description: "Enforce single attribute per line in HTML, Vue and JSX."
          }
        };
      }
    }),
        jm = Z({
      "src/language-js/options.js": function srcLanguageJsOptionsJs(e, n) {
        "use strict";

        ae();
        var t = Lt(),
            s = "JavaScript";
        n.exports = {
          arrowParens: {
            since: "1.9.0",
            category: s,
            type: "choice",
            default: [{
              since: "1.9.0",
              value: "avoid"
            }, {
              since: "2.0.0",
              value: "always"
            }],
            description: "Include parentheses around a sole arrow function parameter.",
            choices: [{
              value: "always",
              description: "Always include parens. Example: `(x) => x`"
            }, {
              value: "avoid",
              description: "Omit parens when possible. Example: `x => x`"
            }]
          },
          bracketSameLine: t.bracketSameLine,
          bracketSpacing: t.bracketSpacing,
          jsxBracketSameLine: {
            since: "0.17.0",
            category: s,
            type: "boolean",
            description: "Put > on the last line instead of at a new line.",
            deprecated: "2.4.0"
          },
          semi: {
            since: "1.0.0",
            category: s,
            type: "boolean",
            default: !0,
            description: "Print semicolons.",
            oppositeDescription: "Do not print semicolons, except at the beginning of lines which may need them."
          },
          singleQuote: t.singleQuote,
          jsxSingleQuote: {
            since: "1.15.0",
            category: s,
            type: "boolean",
            default: !1,
            description: "Use single quotes in JSX."
          },
          quoteProps: {
            since: "1.17.0",
            category: s,
            type: "choice",
            default: "as-needed",
            description: "Change when properties in objects are quoted.",
            choices: [{
              value: "as-needed",
              description: "Only add quotes around object properties where required."
            }, {
              value: "consistent",
              description: "If at least one property in an object requires quotes, quote all properties."
            }, {
              value: "preserve",
              description: "Respect the input use of quotes in object properties."
            }]
          },
          trailingComma: {
            since: "0.0.0",
            category: s,
            type: "choice",
            default: [{
              since: "0.0.0",
              value: !1
            }, {
              since: "0.19.0",
              value: "none"
            }, {
              since: "2.0.0",
              value: "es5"
            }],
            description: "Print trailing commas wherever possible when multi-line.",
            choices: [{
              value: "es5",
              description: "Trailing commas where valid in ES5 (objects, arrays, etc.)"
            }, {
              value: "none",
              description: "No trailing commas."
            }, {
              value: "all",
              description: "Trailing commas wherever possible (including function arguments)."
            }]
          },
          singleAttributePerLine: t.singleAttributePerLine
        };
      }
    }),
        qm = Z({
      "src/language-js/parse/parsers.js": function srcLanguageJsParseParsersJs() {
        ae();
      }
    }),
        Fn = Z({
      "node_modules/linguist-languages/data/JavaScript.json": function node_modulesLinguistLanguagesDataJavaScriptJson(e, n) {
        n.exports = {
          name: "JavaScript",
          type: "programming",
          tmScope: "source.js",
          aceMode: "javascript",
          codemirrorMode: "javascript",
          codemirrorMimeType: "text/javascript",
          color: "#f1e05a",
          aliases: ["js", "node"],
          extensions: [".js", "._js", ".bones", ".cjs", ".es", ".es6", ".frag", ".gs", ".jake", ".jsb", ".jscad", ".jsfl", ".jsm", ".jss", ".jsx", ".mjs", ".njs", ".pac", ".sjs", ".ssjs", ".xsjs", ".xsjslib"],
          filenames: ["Jakefile"],
          interpreters: ["chakra", "d8", "gjs", "js", "node", "nodejs", "qjs", "rhino", "v8", "v8-shell"],
          languageId: 183
        };
      }
    }),
        Mm = Z({
      "node_modules/linguist-languages/data/TypeScript.json": function node_modulesLinguistLanguagesDataTypeScriptJson(e, n) {
        n.exports = {
          name: "TypeScript",
          type: "programming",
          color: "#2b7489",
          aliases: ["ts"],
          interpreters: ["deno", "ts-node"],
          extensions: [".ts"],
          tmScope: "source.ts",
          aceMode: "typescript",
          codemirrorMode: "javascript",
          codemirrorMimeType: "application/typescript",
          languageId: 378
        };
      }
    }),
        Rm = Z({
      "node_modules/linguist-languages/data/TSX.json": function node_modulesLinguistLanguagesDataTSXJson(e, n) {
        n.exports = {
          name: "TSX",
          type: "programming",
          group: "TypeScript",
          extensions: [".tsx"],
          tmScope: "source.tsx",
          aceMode: "javascript",
          codemirrorMode: "jsx",
          codemirrorMimeType: "text/jsx",
          languageId: 94901924
        };
      }
    }),
        mi = Z({
      "node_modules/linguist-languages/data/JSON.json": function node_modulesLinguistLanguagesDataJSONJson(e, n) {
        n.exports = {
          name: "JSON",
          type: "data",
          tmScope: "source.json",
          aceMode: "json",
          codemirrorMode: "javascript",
          codemirrorMimeType: "application/json",
          extensions: [".json", ".avsc", ".geojson", ".gltf", ".har", ".ice", ".JSON-tmLanguage", ".jsonl", ".mcmeta", ".tfstate", ".tfstate.backup", ".topojson", ".webapp", ".webmanifest", ".yy", ".yyp"],
          filenames: [".arcconfig", ".htmlhintrc", ".imgbotconfig", ".tern-config", ".tern-project", ".watchmanconfig", "Pipfile.lock", "composer.lock", "mcmod.info"],
          languageId: 174
        };
      }
    }),
        Vm = Z({
      "node_modules/linguist-languages/data/JSON with Comments.json": function node_modulesLinguistLanguagesDataJSONWithCommentsJson(e, n) {
        n.exports = {
          name: "JSON with Comments",
          type: "data",
          group: "JSON",
          tmScope: "source.js",
          aceMode: "javascript",
          codemirrorMode: "javascript",
          codemirrorMimeType: "text/javascript",
          aliases: ["jsonc"],
          extensions: [".jsonc", ".sublime-build", ".sublime-commands", ".sublime-completions", ".sublime-keymap", ".sublime-macro", ".sublime-menu", ".sublime-mousemap", ".sublime-project", ".sublime-settings", ".sublime-theme", ".sublime-workspace", ".sublime_metrics", ".sublime_session"],
          filenames: [".babelrc", ".eslintrc.json", ".jscsrc", ".jshintrc", ".jslintrc", "api-extractor.json", "devcontainer.json", "jsconfig.json", "language-configuration.json", "tsconfig.json", "tslint.json"],
          languageId: 423
        };
      }
    }),
        Wm = Z({
      "node_modules/linguist-languages/data/JSON5.json": function node_modulesLinguistLanguagesDataJSON5Json(e, n) {
        n.exports = {
          name: "JSON5",
          type: "data",
          extensions: [".json5"],
          tmScope: "source.js",
          aceMode: "javascript",
          codemirrorMode: "javascript",
          codemirrorMimeType: "application/json",
          languageId: 175
        };
      }
    }),
        $m = Z({
      "src/language-js/index.js": function srcLanguageJsIndexJs(e, n) {
        "use strict";

        ae();
        var t = bt(),
            s = Lm(),
            i = Om(),
            r = jm(),
            u = qm(),
            a = [t(Fn(), function (l) {
          return {
            since: "0.0.0",
            parsers: ["babel", "acorn", "espree", "meriyah", "babel-flow", "babel-ts", "flow", "typescript"],
            vscodeLanguageIds: ["javascript", "mongo"],
            interpreters: [].concat(_toConsumableArray(l.interpreters), ["zx"]),
            extensions: [].concat(_toConsumableArray(l.extensions.filter(function (C) {
              return C !== ".jsx";
            })), [".wxs"])
          };
        }), t(Fn(), function () {
          return {
            name: "Flow",
            since: "0.0.0",
            parsers: ["flow", "babel-flow"],
            vscodeLanguageIds: ["javascript"],
            aliases: [],
            filenames: [],
            extensions: [".js.flow"]
          };
        }), t(Fn(), function () {
          return {
            name: "JSX",
            since: "0.0.0",
            parsers: ["babel", "babel-flow", "babel-ts", "flow", "typescript", "espree", "meriyah"],
            vscodeLanguageIds: ["javascriptreact"],
            aliases: void 0,
            filenames: void 0,
            extensions: [".jsx"],
            group: "JavaScript",
            interpreters: void 0,
            tmScope: "source.js.jsx",
            aceMode: "javascript",
            codemirrorMode: "jsx",
            codemirrorMimeType: "text/jsx",
            color: void 0
          };
        }), t(Mm(), function (l) {
          return {
            since: "1.4.0",
            parsers: ["typescript", "babel-ts"],
            vscodeLanguageIds: ["typescript"],
            extensions: [].concat(_toConsumableArray(l.extensions), [".mts", ".cts"])
          };
        }), t(Rm(), function () {
          return {
            since: "1.4.0",
            parsers: ["typescript", "babel-ts"],
            vscodeLanguageIds: ["typescriptreact"]
          };
        }), t(mi(), function () {
          return {
            name: "JSON.stringify",
            since: "1.13.0",
            parsers: ["json-stringify"],
            vscodeLanguageIds: ["json"],
            extensions: [],
            filenames: ["package.json", "package-lock.json", "composer.json"]
          };
        }), t(mi(), function (l) {
          return {
            since: "1.5.0",
            parsers: ["json"],
            vscodeLanguageIds: ["json"],
            extensions: l.extensions.filter(function (C) {
              return C !== ".jsonl";
            })
          };
        }), t(Vm(), function (l) {
          return {
            since: "1.5.0",
            parsers: ["json"],
            vscodeLanguageIds: ["jsonc"],
            filenames: [].concat(_toConsumableArray(l.filenames), [".eslintrc", ".swcrc"])
          };
        }), t(Wm(), function () {
          return {
            since: "1.13.0",
            parsers: ["json5"],
            vscodeLanguageIds: ["json5"]
          };
        })],
            c = {
          estree: s,
          "estree-json": i
        };
        n.exports = {
          languages: a,
          options: r,
          printers: c,
          parsers: u
        };
      }
    }),
        Hm = Z({
      "src/language-css/clean.js": function srcLanguageCssCleanJs(e, n) {
        "use strict";

        ae();

        var _Ge32 = Ge(),
            t = _Ge32.isFrontMatterNode,
            s = st(),
            i = new Set(["raw", "raws", "sourceIndex", "source", "before", "after", "trailingComma"]);

        function r(a, c, l) {
          if (t(a) && a.lang === "yaml" && delete c.value, a.type === "css-comment" && l.type === "css-root" && l.nodes.length > 0 && ((l.nodes[0] === a || t(l.nodes[0]) && l.nodes[1] === a) && (delete c.text, /^\*\s*@(?:format|prettier)\s*$/.test(a.text)) || l.type === "css-root" && s(l.nodes) === a)) return null;

          if (a.type === "value-root" && delete c.text, (a.type === "media-query" || a.type === "media-query-list" || a.type === "media-feature-expression") && delete c.value, a.type === "css-rule" && delete c.params, a.type === "selector-combinator" && (c.value = c.value.replace(/\s+/g, " ")), a.type === "media-feature" && (c.value = c.value.replace(/ /g, "")), (a.type === "value-word" && (a.isColor && a.isHex || ["initial", "inherit", "unset", "revert"].includes(c.value.replace().toLowerCase())) || a.type === "media-feature" || a.type === "selector-root-invalid" || a.type === "selector-pseudo") && (c.value = c.value.toLowerCase()), a.type === "css-decl" && (c.prop = c.prop.toLowerCase()), (a.type === "css-atrule" || a.type === "css-import") && (c.name = c.name.toLowerCase()), a.type === "value-number" && (c.unit = c.unit.toLowerCase()), (a.type === "media-feature" || a.type === "media-keyword" || a.type === "media-type" || a.type === "media-unknown" || a.type === "media-url" || a.type === "media-value" || a.type === "selector-attribute" || a.type === "selector-string" || a.type === "selector-class" || a.type === "selector-combinator" || a.type === "value-string") && c.value && (c.value = u(c.value)), a.type === "selector-attribute" && (c.attribute = c.attribute.trim(), c.namespace && typeof c.namespace == "string" && (c.namespace = c.namespace.trim(), c.namespace.length === 0 && (c.namespace = !0)), c.value && (c.value = c.value.trim().replace(/^["']|["']$/g, ""), delete c.quoted)), (a.type === "media-value" || a.type === "media-type" || a.type === "value-number" || a.type === "selector-root-invalid" || a.type === "selector-class" || a.type === "selector-combinator" || a.type === "selector-tag") && c.value && (c.value = c.value.replace(/([\d+.Ee-]+)([A-Za-z]*)/g, function (C, m, g) {
            var p = Number(m);
            return Number.isNaN(p) ? C : p + g.toLowerCase();
          })), a.type === "selector-tag") {
            var C = a.value.toLowerCase();
            ["from", "to"].includes(C) && (c.value = C);
          }

          if (a.type === "css-atrule" && a.name.toLowerCase() === "supports" && delete c.value, a.type === "selector-unknown" && delete c.value, a.type === "value-comma_group") {
            var _C3 = a.groups.findIndex(function (m) {
              return m.type === "value-number" && m.unit === "...";
            });

            _C3 !== -1 && (c.groups[_C3].unit = "", c.groups.splice(_C3 + 1, 0, {
              type: "value-word",
              value: "...",
              isColor: !1,
              isHex: !1
            }));
          }
        }

        r.ignoredProperties = i;

        function u(a) {
          return a.replace(/'/g, '"').replace(/\\([^\dA-Fa-f])/g, "$1");
        }

        n.exports = r;
      }
    }),
        Xn = Z({
      "src/utils/front-matter/print.js": function srcUtilsFrontMatterPrintJs(e, n) {
        "use strict";

        ae();

        var _Le38 = Le(),
            _Le38$builders = _Le38.builders,
            t = _Le38$builders.hardline,
            s = _Le38$builders.markAsRoot;

        function i(r, u) {
          if (r.lang === "yaml") {
            var a = r.value.trim(),
                c = a ? u(a, {
              parser: "yaml"
            }, {
              stripTrailingHardline: !0
            }) : "";
            return s([r.startDelimiter, t, c, c ? t : "", r.endDelimiter]);
          }
        }

        n.exports = i;
      }
    }),
        Gm = Z({
      "src/language-css/embed.js": function srcLanguageCssEmbedJs(e, n) {
        "use strict";

        ae();

        var _Le39 = Le(),
            t = _Le39.builders.hardline,
            s = Xn();

        function i(r, u, a) {
          var c = r.getValue();

          if (c.type === "front-matter") {
            var l = s(c, a);
            return l ? [l, t] : "";
          }
        }

        n.exports = i;
      }
    }),
        po = Z({
      "src/utils/front-matter/parse.js": function srcUtilsFrontMatterParseJs(e, n) {
        "use strict";

        ae();
        var t = new RegExp("^(?<startDelimiter>-{3}|\\+{3})(?<language>[^\\n]*)\\n(?:|(?<value>.*?)\\n)(?<endDelimiter>\\k<startDelimiter>|\\.{3})[^\\S\\n]*(?:\\n|$)", "s");

        function s(i) {
          var r = i.match(t);
          if (!r) return {
            content: i
          };
          var _r$groups = r.groups,
              u = _r$groups.startDelimiter,
              a = _r$groups.language,
              _r$groups$value = _r$groups.value,
              c = _r$groups$value === void 0 ? "" : _r$groups$value,
              l = _r$groups.endDelimiter,
              C = a.trim() || "yaml";
          if (u === "+++" && (C = "toml"), C !== "yaml" && u !== l) return {
            content: i
          };

          var _r7 = _slicedToArray(r, 1),
              m = _r7[0];

          return {
            frontMatter: {
              type: "front-matter",
              lang: C,
              value: c,
              startDelimiter: u,
              endDelimiter: l,
              raw: m.replace(/\n$/, "")
            },
            content: m.replace(/[^\n]/g, " ") + i.slice(m.length)
          };
        }

        n.exports = s;
      }
    }),
        Jm = Z({
      "src/language-css/pragma.js": function srcLanguageCssPragmaJs(e, n) {
        "use strict";

        ae();
        var t = eo(),
            s = po();

        function i(u) {
          return t.hasPragma(s(u).content);
        }

        function r(u) {
          var _s2 = s(u),
              a = _s2.frontMatter,
              c = _s2.content;

          return (a ? a.raw + "\n\n" : "") + t.insertPragma(c);
        }

        n.exports = {
          hasPragma: i,
          insertPragma: r
        };
      }
    }),
        Um = Z({
      "src/language-css/utils/index.js": function srcLanguageCssUtilsIndexJs(e, n) {
        "use strict";

        ae();
        var t = new Set(["red", "green", "blue", "alpha", "a", "rgb", "hue", "h", "saturation", "s", "lightness", "l", "whiteness", "w", "blackness", "b", "tint", "shade", "blend", "blenda", "contrast", "hsl", "hsla", "hwb", "hwba"]);

        function s(q, le) {
          var ue = Array.isArray(le) ? le : [le],
              Q = -1,
              de;

          for (; de = q.getParentNode(++Q);) {
            if (ue.includes(de.type)) return Q;
          }

          return -1;
        }

        function i(q, le) {
          var ue = s(q, le);
          return ue === -1 ? null : q.getParentNode(ue);
        }

        function r(q) {
          var le = i(q, "css-decl");
          return le && le.prop && le.prop.toLowerCase();
        }

        function u(q) {
          return ["initial", "inherit", "unset", "revert"].includes(q.toLowerCase());
        }

        function a(q, le) {
          var ue = i(q, "css-atrule");
          return ue && ue.name && ue.name.toLowerCase().endsWith("keyframes") && ["from", "to"].includes(le.toLowerCase());
        }

        function c(q) {
          return q.includes("$") || q.includes("@") || q.includes("#") || q.startsWith("%") || q.startsWith("--") || q.startsWith(":--") || q.includes("(") && q.includes(")") ? q : q.toLowerCase();
        }

        function l(q, le) {
          var ue = i(q, "value-func");
          return ue && ue.value && ue.value.toLowerCase() === le;
        }

        function C(q) {
          var le = i(q, "css-rule");
          return le && le.raws && le.raws.selector && (le.raws.selector.startsWith(":import") || le.raws.selector.startsWith(":export"));
        }

        function m(q, le) {
          var ue = Array.isArray(le) ? le : [le],
              Q = i(q, "css-atrule");
          return Q && ue.includes(Q.name.toLowerCase());
        }

        function g(q) {
          var le = q.getValue(),
              ue = i(q, "css-atrule");
          return ue && ue.name === "import" && le.groups[0].value === "url" && le.groups.length === 2;
        }

        function p(q) {
          return q.type === "value-func" && q.value.toLowerCase() === "url";
        }

        function f(q, le) {
          var ue = q.getParentNode();
          if (!ue) return !1;
          var Q = ue.nodes;
          return Q && Q.indexOf(le) === Q.length - 1;
        }

        function h(q) {
          return q.selector ? typeof q.selector == "string" && /^@.+:.*$/.test(q.selector) || q.selector.value && /^@.+:.*$/.test(q.selector.value) : !1;
        }

        function N(q) {
          return q.type === "value-word" && ["from", "through", "end"].includes(q.value);
        }

        function T(q) {
          return q.type === "value-word" && ["and", "or", "not"].includes(q.value);
        }

        function A(q) {
          return q.type === "value-word" && q.value === "in";
        }

        function b(q) {
          return q.type === "value-operator" && q.value === "*";
        }

        function v(q) {
          return q.type === "value-operator" && q.value === "/";
        }

        function B(q) {
          return q.type === "value-operator" && q.value === "+";
        }

        function w(q) {
          return q.type === "value-operator" && q.value === "-";
        }

        function I(q) {
          return q.type === "value-operator" && q.value === "%";
        }

        function E(q) {
          return b(q) || v(q) || B(q) || w(q) || I(q);
        }

        function D(q) {
          return q.type === "value-word" && ["==", "!="].includes(q.value);
        }

        function d(q) {
          return q.type === "value-word" && ["<", ">", "<=", ">="].includes(q.value);
        }

        function y(q) {
          return q.type === "css-atrule" && ["if", "else", "for", "each", "while"].includes(q.name);
        }

        function o(q) {
          return q.raws && q.raws.params && /^\(\s*\)$/.test(q.raws.params);
        }

        function x(q) {
          return q.name.startsWith("prettier-placeholder");
        }

        function F(q) {
          return q.prop.startsWith("@prettier-placeholder");
        }

        function S(q, le) {
          return q.value === "$$" && q.type === "value-func" && le && le.type === "value-word" && !le.raws.before;
        }

        function k(q) {
          return q.value && q.value.type === "value-root" && q.value.group && q.value.group.type === "value-value" && q.prop.toLowerCase() === "composes";
        }

        function _(q) {
          return q.value && q.value.group && q.value.group.group && q.value.group.group.type === "value-paren_group" && q.value.group.group.open !== null && q.value.group.group.close !== null;
        }

        function O(q) {
          return q.raws && q.raws.before === "";
        }

        function R(q) {
          return q.type === "value-comma_group" && q.groups && q.groups[1] && q.groups[1].type === "value-colon";
        }

        function M(q) {
          return q.type === "value-paren_group" && q.groups && q.groups[0] && R(q.groups[0]);
        }

        function H(q) {
          var le = q.getValue();
          if (le.groups.length === 0) return !1;
          var ue = q.getParentNode(1);
          if (!M(le) && !(ue && M(ue))) return !1;
          var Q = i(q, "css-decl");
          return !!(Q && Q.prop && Q.prop.startsWith("$") || M(ue) || ue.type === "value-func");
        }

        function P(q) {
          return q.type === "value-comment" && q.inline;
        }

        function G(q) {
          return q.type === "value-word" && q.value === "#";
        }

        function re(q) {
          return q.type === "value-word" && q.value === "{";
        }

        function $(q) {
          return q.type === "value-word" && q.value === "}";
        }

        function W(q) {
          return ["value-word", "value-atword"].includes(q.type);
        }

        function ee(q) {
          return q && q.type === "value-colon";
        }

        function U(q, le) {
          if (!R(le)) return !1;
          var ue = le.groups,
              Q = ue.indexOf(q);
          return Q === -1 ? !1 : ee(ue[Q + 1]);
        }

        function ne(q) {
          return q.value && ["not", "and", "or"].includes(q.value.toLowerCase());
        }

        function se(q) {
          return q.type !== "value-func" ? !1 : t.has(q.value.toLowerCase());
        }

        function V(q) {
          return /\/\//.test(q.split(/[\n\r]/).pop());
        }

        function oe(q) {
          return q && q.type === "value-atword" && q.value.startsWith("prettier-placeholder-");
        }

        function K(q, le) {
          if (!q.open || q.open.value !== "(" || !q.close || q.close.value !== ")" || q.groups.some(function (ue) {
            return ue.type !== "value-comma_group";
          })) return !1;

          if (le.type === "value-comma_group") {
            var ue = le.groups.indexOf(q) - 1,
                Q = le.groups[ue];
            if (Q && Q.type === "value-word" && Q.value === "with") return !0;
          }

          return !1;
        }

        function Ee(q) {
          return q.type === "value-paren_group" && q.open && q.open.value === "(" && q.close && q.close.value === ")";
        }

        n.exports = {
          getAncestorCounter: s,
          getAncestorNode: i,
          getPropOfDeclNode: r,
          maybeToLowerCase: c,
          insideValueFunctionNode: l,
          insideICSSRuleNode: C,
          insideAtRuleNode: m,
          insideURLFunctionInImportAtRuleNode: g,
          isKeyframeAtRuleKeywords: a,
          isWideKeywords: u,
          isLastNode: f,
          isSCSSControlDirectiveNode: y,
          isDetachedRulesetDeclarationNode: h,
          isRelationalOperatorNode: d,
          isEqualityOperatorNode: D,
          isMultiplicationNode: b,
          isDivisionNode: v,
          isAdditionNode: B,
          isSubtractionNode: w,
          isModuloNode: I,
          isMathOperatorNode: E,
          isEachKeywordNode: A,
          isForKeywordNode: N,
          isURLFunctionNode: p,
          isIfElseKeywordNode: T,
          hasComposesNode: k,
          hasParensAroundNode: _,
          hasEmptyRawBefore: O,
          isDetachedRulesetCallNode: o,
          isTemplatePlaceholderNode: x,
          isTemplatePropNode: F,
          isPostcssSimpleVarNode: S,
          isKeyValuePairNode: R,
          isKeyValuePairInParenGroupNode: M,
          isKeyInValuePairNode: U,
          isSCSSMapItemNode: H,
          isInlineValueCommentNode: P,
          isHashNode: G,
          isLeftCurlyBraceNode: re,
          isRightCurlyBraceNode: $,
          isWordNode: W,
          isColonNode: ee,
          isMediaAndSupportsKeywords: ne,
          isColorAdjusterFuncNode: se,
          lastLineHasInlineComment: V,
          isAtWordPlaceholderNode: oe,
          isConfigurationNode: K,
          isParenGroupNode: Ee
        };
      }
    }),
        zm = Z({
      "src/utils/line-column-to-index.js": function srcUtilsLineColumnToIndexJs(e, n) {
        "use strict";

        ae(), n.exports = function (t, s) {
          var i = 0;

          for (var r = 0; r < t.line - 1; ++r) {
            i = s.indexOf("\n", i) + 1;
          }

          return i + t.column;
        };
      }
    }),
        Xm = Z({
      "src/language-css/loc.js": function srcLanguageCssLocJs(e, n) {
        "use strict";

        ae();

        var _Tr4 = Tr(),
            t = _Tr4.skipEverythingButNewLine,
            s = st(),
            i = zm();

        function r(p, f) {
          return typeof p.sourceIndex == "number" ? p.sourceIndex : p.source ? i(p.source.start, f) - 1 : null;
        }

        function u(p, f) {
          if (p.type === "css-comment" && p.inline) return t(f, p.source.startOffset);
          var h = p.nodes && s(p.nodes);
          return h && p.source && !p.source.end && (p = h), p.source && p.source.end ? i(p.source.end, f) : null;
        }

        function a(p, f) {
          p.source && (p.source.startOffset = r(p, f), p.source.endOffset = u(p, f));

          for (var _h4 in p) {
            var _N8 = p[_h4];
            _h4 === "source" || !_N8 || _typeof(_N8) != "object" || (_N8.type === "value-root" || _N8.type === "value-unknown" ? c(_N8, l(p), _N8.text || _N8.value) : a(_N8, f));
          }
        }

        function c(p, f, h) {
          p.source && (p.source.startOffset = r(p, h) + f, p.source.endOffset = u(p, h) + f);

          for (var _N9 in p) {
            var T = p[_N9];
            _N9 === "source" || !T || _typeof(T) != "object" || c(T, f, h);
          }
        }

        function l(p) {
          var f = p.source.startOffset;
          return typeof p.prop == "string" && (f += p.prop.length), p.type === "css-atrule" && typeof p.name == "string" && (f += 1 + p.name.length + p.raws.afterName.match(/^\s*:?\s*/)[0].length), p.type !== "css-atrule" && p.raws && typeof p.raws.between == "string" && (f += p.raws.between.length), f;
        }

        function C(p) {
          var f = "initial",
              h = "initial",
              N,
              T = !1,
              A = [];

          for (var b = 0; b < p.length; b++) {
            var v = p[b];

            switch (f) {
              case "initial":
                if (v === "'") {
                  f = "single-quotes";
                  continue;
                }

                if (v === '"') {
                  f = "double-quotes";
                  continue;
                }

                if ((v === "u" || v === "U") && p.slice(b, b + 4).toLowerCase() === "url(") {
                  f = "url", b += 3;
                  continue;
                }

                if (v === "*" && p[b - 1] === "/") {
                  f = "comment-block";
                  continue;
                }

                if (v === "/" && p[b - 1] === "/") {
                  f = "comment-inline", N = b - 1;
                  continue;
                }

                continue;

              case "single-quotes":
                if (v === "'" && p[b - 1] !== "\\" && (f = h, h = "initial"), v === "\n" || v === "\r") return p;
                continue;

              case "double-quotes":
                if (v === '"' && p[b - 1] !== "\\" && (f = h, h = "initial"), v === "\n" || v === "\r") return p;
                continue;

              case "url":
                if (v === ")" && (f = "initial"), v === "\n" || v === "\r") return p;

                if (v === "'") {
                  f = "single-quotes", h = "url";
                  continue;
                }

                if (v === '"') {
                  f = "double-quotes", h = "url";
                  continue;
                }

                continue;

              case "comment-block":
                v === "/" && p[b - 1] === "*" && (f = "initial");
                continue;

              case "comment-inline":
                (v === '"' || v === "'" || v === "*") && (T = !0), (v === "\n" || v === "\r") && (T && A.push([N, b]), f = "initial", T = !1);
                continue;
            }
          }

          for (var _i18 = 0, _A2 = A; _i18 < _A2.length; _i18++) {
            var _A2$_i = _slicedToArray(_A2[_i18], 2),
                _b2 = _A2$_i[0],
                _v2 = _A2$_i[1];

            p = p.slice(0, _b2) + p.slice(_b2, _v2).replace(/["'*]/g, " ") + p.slice(_v2);
          }

          return p;
        }

        function m(p) {
          return p.source.startOffset;
        }

        function g(p) {
          return p.source.endOffset;
        }

        n.exports = {
          locStart: m,
          locEnd: g,
          calculateLoc: a,
          replaceQuotesInInlineComments: C
        };
      }
    }),
        Km = Z({
      "src/language-css/utils/is-less-parser.js": function srcLanguageCssUtilsIsLessParserJs(e, n) {
        "use strict";

        ae();

        function t(s) {
          return s.parser === "css" || s.parser === "less";
        }

        n.exports = t;
      }
    }),
        Ym = Z({
      "src/language-css/utils/is-scss.js": function srcLanguageCssUtilsIsScssJs(e, n) {
        "use strict";

        ae();

        function t(s, i) {
          return s === "less" || s === "scss" ? s === "scss" : /(?:\w\s*:\s*[^:}]+|#){|@import[^\n]+(?:url|,)/.test(i);
        }

        n.exports = t;
      }
    }),
        Qm = Z({
      "src/language-css/utils/css-units.evaluate.js": function srcLanguageCssUtilsCssUnitsEvaluateJs(e, n) {
        n.exports = {
          em: "em",
          rem: "rem",
          ex: "ex",
          rex: "rex",
          cap: "cap",
          rcap: "rcap",
          ch: "ch",
          rch: "rch",
          ic: "ic",
          ric: "ric",
          lh: "lh",
          rlh: "rlh",
          vw: "vw",
          vh: "vh",
          vi: "vi",
          vb: "vb",
          vmin: "vmin",
          vmax: "vmax",
          cm: "cm",
          mm: "mm",
          q: "Q",
          in: "in",
          pt: "pt",
          pc: "pc",
          px: "px",
          deg: "deg",
          grad: "grad",
          rad: "rad",
          turn: "turn",
          s: "s",
          ms: "ms",
          hz: "Hz",
          khz: "kHz",
          dpi: "dpi",
          dpcm: "dpcm",
          dppx: "dppx",
          x: "x"
        };
      }
    }),
        Zm = Z({
      "src/language-css/utils/print-unit.js": function srcLanguageCssUtilsPrintUnitJs(e, n) {
        "use strict";

        ae();
        var t = Qm();

        function s(i) {
          var r = i.toLowerCase();
          return Object.prototype.hasOwnProperty.call(t, r) ? t[r] : i;
        }

        n.exports = s;
      }
    }),
        ed = Z({
      "src/language-css/printer-postcss.js": function srcLanguageCssPrinterPostcssJs(e, n) {
        "use strict";

        ae();

        var t = st(),
            _Ge33 = Ge(),
            s = _Ge33.printNumber,
            i = _Ge33.printString,
            r = _Ge33.hasNewline,
            u = _Ge33.isFrontMatterNode,
            a = _Ge33.isNextLineEmpty,
            c = _Ge33.isNonEmptyArray,
            _Le40 = Le(),
            _Le40$builders = _Le40.builders,
            l = _Le40$builders.join,
            C = _Le40$builders.line,
            m = _Le40$builders.hardline,
            g = _Le40$builders.softline,
            p = _Le40$builders.group,
            f = _Le40$builders.fill,
            h = _Le40$builders.indent,
            N = _Le40$builders.dedent,
            T = _Le40$builders.ifBreak,
            A = _Le40$builders.breakParent,
            _Le40$utils = _Le40.utils,
            b = _Le40$utils.removeLines,
            v = _Le40$utils.getDocParts,
            B = Hm(),
            w = Gm(),
            _Jm = Jm(),
            I = _Jm.insertPragma,
            _Um = Um(),
            E = _Um.getAncestorNode,
            D = _Um.getPropOfDeclNode,
            d = _Um.maybeToLowerCase,
            y = _Um.insideValueFunctionNode,
            o = _Um.insideICSSRuleNode,
            x = _Um.insideAtRuleNode,
            F = _Um.insideURLFunctionInImportAtRuleNode,
            S = _Um.isKeyframeAtRuleKeywords,
            k = _Um.isWideKeywords,
            _ = _Um.isLastNode,
            O = _Um.isSCSSControlDirectiveNode,
            R = _Um.isDetachedRulesetDeclarationNode,
            M = _Um.isRelationalOperatorNode,
            H = _Um.isEqualityOperatorNode,
            P = _Um.isMultiplicationNode,
            G = _Um.isDivisionNode,
            re = _Um.isAdditionNode,
            $ = _Um.isSubtractionNode,
            W = _Um.isMathOperatorNode,
            ee = _Um.isEachKeywordNode,
            U = _Um.isForKeywordNode,
            ne = _Um.isURLFunctionNode,
            se = _Um.isIfElseKeywordNode,
            V = _Um.hasComposesNode,
            oe = _Um.hasParensAroundNode,
            K = _Um.hasEmptyRawBefore,
            Ee = _Um.isKeyValuePairNode,
            q = _Um.isKeyInValuePairNode,
            le = _Um.isDetachedRulesetCallNode,
            ue = _Um.isTemplatePlaceholderNode,
            Q = _Um.isTemplatePropNode,
            de = _Um.isPostcssSimpleVarNode,
            ge = _Um.isSCSSMapItemNode,
            ve = _Um.isInlineValueCommentNode,
            xe = _Um.isHashNode,
            we = _Um.isLeftCurlyBraceNode,
            fe = _Um.isRightCurlyBraceNode,
            pe = _Um.isWordNode,
            me = _Um.isColonNode,
            ce = _Um.isMediaAndSupportsKeywords,
            he = _Um.isColorAdjusterFuncNode,
            J = _Um.lastLineHasInlineComment,
            ye = _Um.isAtWordPlaceholderNode,
            X = _Um.isConfigurationNode,
            Y = _Um.isParenGroupNode,
            _Xm = Xm(),
            te = _Xm.locStart,
            z = _Xm.locEnd,
            j = Km(),
            Ce = Ym(),
            Ne = Zm();

        function je(Ae) {
          return Ae.trailingComma === "es5" || Ae.trailingComma === "all";
        }

        function Ue(Ae, Oe, Pe) {
          var ie = Ae.getValue();
          if (!ie) return "";
          if (typeof ie == "string") return ie;

          switch (ie.type) {
            case "front-matter":
              return [ie.raw, m];

            case "css-root":
              {
                var Me = tt(Ae, Oe, Pe),
                    qe = ie.raws.after.trim();
                return [Me, qe ? " ".concat(qe) : "", v(Me).length > 0 ? m : ""];
              }

            case "css-comment":
              {
                var _Me = ie.inline || ie.raws.inline,
                    _qe = Oe.originalText.slice(te(ie), z(ie));

                return _Me ? _qe.trimEnd() : _qe;
              }

            case "css-rule":
              return [Pe("selector"), ie.important ? " !important" : "", ie.nodes ? [ie.selector && ie.selector.type === "selector-unknown" && J(ie.selector.value) ? C : " ", "{", ie.nodes.length > 0 ? h([m, tt(Ae, Oe, Pe)]) : "", m, "}", R(ie) ? ";" : ""] : ";"];

            case "css-decl":
              {
                var _Me2 = Ae.getParentNode(),
                    _qe2 = ie.raws.between,
                    Je = _qe2.trim(),
                    rt = Je === ":",
                    Ze = V(ie) ? b(Pe("value")) : Pe("value");

                return !rt && J(Je) && (Ze = h([m, N(Ze)])), [ie.raws.before.replace(/[\s;]/g, ""), o(Ae) ? ie.prop : d(ie.prop), Je.startsWith("//") ? " " : "", Je, ie.extend ? "" : " ", j(Oe) && ie.extend && ie.selector ? ["extend(", Pe("selector"), ")"] : "", Ze, ie.raws.important ? ie.raws.important.replace(/\s*!\s*important/i, " !important") : ie.important ? " !important" : "", ie.raws.scssDefault ? ie.raws.scssDefault.replace(/\s*!default/i, " !default") : ie.scssDefault ? " !default" : "", ie.raws.scssGlobal ? ie.raws.scssGlobal.replace(/\s*!global/i, " !global") : ie.scssGlobal ? " !global" : "", ie.nodes ? [" {", h([g, tt(Ae, Oe, Pe)]), g, "}"] : Q(ie) && !_Me2.raws.semicolon && Oe.originalText[z(ie) - 1] !== ";" ? "" : Oe.__isHTMLStyleAttribute && _(Ae, ie) ? T(";") : ";"];
              }

            case "css-atrule":
              {
                var _Me3 = Ae.getParentNode(),
                    _qe3 = ue(ie) && !_Me3.raws.semicolon && Oe.originalText[z(ie) - 1] !== ";";

                if (j(Oe)) {
                  if (ie.mixin) return [Pe("selector"), ie.important ? " !important" : "", _qe3 ? "" : ";"];
                  if (ie.function) return [ie.name, Pe("params"), _qe3 ? "" : ";"];
                  if (ie.variable) return ["@", ie.name, ": ", ie.value ? Pe("value") : "", ie.raws.between.trim() ? ie.raws.between.trim() + " " : "", ie.nodes ? ["{", h([ie.nodes.length > 0 ? g : "", tt(Ae, Oe, Pe)]), g, "}"] : "", _qe3 ? "" : ";"];
                }

                return ["@", le(ie) || ie.name.endsWith(":") ? ie.name : d(ie.name), ie.params ? [le(ie) ? "" : ue(ie) ? ie.raws.afterName === "" ? "" : ie.name.endsWith(":") ? " " : /^\s*\n\s*\n/.test(ie.raws.afterName) ? [m, m] : /^\s*\n/.test(ie.raws.afterName) ? m : " " : " ", Pe("params")] : "", ie.selector ? h([" ", Pe("selector")]) : "", ie.value ? p([" ", Pe("value"), O(ie) ? oe(ie) ? " " : C : ""]) : ie.name === "else" ? " " : "", ie.nodes ? [O(ie) ? "" : ie.selector && !ie.selector.nodes && typeof ie.selector.value == "string" && J(ie.selector.value) || !ie.selector && typeof ie.params == "string" && J(ie.params) ? C : " ", "{", h([ie.nodes.length > 0 ? g : "", tt(Ae, Oe, Pe)]), g, "}"] : _qe3 ? "" : ";"];
              }

            case "media-query-list":
              {
                var _Me4 = [];
                return Ae.each(function (qe) {
                  var Je = qe.getValue();
                  Je.type === "media-query" && Je.value === "" || _Me4.push(Pe());
                }, "nodes"), p(h(l(C, _Me4)));
              }

            case "media-query":
              return [l(" ", Ae.map(Pe, "nodes")), _(Ae, ie) ? "" : ","];

            case "media-type":
              return Ie(ze(ie.value, Oe));

            case "media-feature-expression":
              return ie.nodes ? ["("].concat(_toConsumableArray(Ae.map(Pe, "nodes")), [")"]) : ie.value;

            case "media-feature":
              return d(ze(ie.value.replace(/ +/g, " "), Oe));

            case "media-colon":
              return [ie.value, " "];

            case "media-value":
              return Ie(ze(ie.value, Oe));

            case "media-keyword":
              return ze(ie.value, Oe);

            case "media-url":
              return ze(ie.value.replace(/^url\(\s+/gi, "url(").replace(/\s+\)$/g, ")"), Oe);

            case "media-unknown":
              return ie.value;

            case "selector-root":
              return p([x(Ae, "custom-selector") ? [E(Ae, "css-atrule").customSelector, C] : "", l([",", x(Ae, ["extend", "custom-selector", "nest"]) ? C : m], Ae.map(Pe, "nodes"))]);

            case "selector-selector":
              return p(h(Ae.map(Pe, "nodes")));

            case "selector-comment":
              return ie.value;

            case "selector-string":
              return ze(ie.value, Oe);

            case "selector-tag":
              {
                var _Me5 = Ae.getParentNode(),
                    _qe4 = _Me5 && _Me5.nodes.indexOf(ie),
                    _Je = _qe4 && _Me5.nodes[_qe4 - 1];

                return [ie.namespace ? [ie.namespace === !0 ? "" : ie.namespace.trim(), "|"] : "", _Je.type === "selector-nesting" ? ie.value : Ie(S(Ae, ie.value) ? ie.value.toLowerCase() : ie.value)];
              }

            case "selector-id":
              return ["#", ie.value];

            case "selector-class":
              return [".", Ie(ze(ie.value, Oe))];

            case "selector-attribute":
              return ["[", ie.namespace ? [ie.namespace === !0 ? "" : ie.namespace.trim(), "|"] : "", ie.attribute.trim(), ie.operator ? ie.operator : "", ie.value ? Be(ze(ie.value.trim(), Oe), Oe) : "", ie.insensitive ? " i" : "", "]"];

            case "selector-combinator":
              {
                if (ie.value === "+" || ie.value === ">" || ie.value === "~" || ie.value === ">>>") {
                  var _Je2 = Ae.getParentNode();

                  return [_Je2.type === "selector-selector" && _Je2.nodes[0] === ie ? "" : C, ie.value, _(Ae, ie) ? "" : " "];
                }

                var _Me6 = ie.value.trim().startsWith("(") ? C : "",
                    _qe5 = Ie(ze(ie.value.trim(), Oe)) || C;

                return [_Me6, _qe5];
              }

            case "selector-universal":
              return [ie.namespace ? [ie.namespace === !0 ? "" : ie.namespace.trim(), "|"] : "", ie.value];

            case "selector-pseudo":
              return [d(ie.value), c(ie.nodes) ? ["(", l(", ", Ae.map(Pe, "nodes")), ")"] : ""];

            case "selector-nesting":
              return ie.value;

            case "selector-unknown":
              {
                var _Me7 = E(Ae, "css-rule");

                if (_Me7 && _Me7.isSCSSNesterProperty) return Ie(ze(d(ie.value), Oe));

                var _qe6 = Ae.getParentNode();

                if (_qe6.raws && _qe6.raws.selector) {
                  var _rt = te(_qe6),
                      _Ze = _rt + _qe6.raws.selector.length;

                  return Oe.originalText.slice(_rt, _Ze).trim();
                }

                var _Je3 = Ae.getParentNode(1);

                if (_qe6.type === "value-paren_group" && _Je3 && _Je3.type === "value-func" && _Je3.value === "selector") {
                  var _rt2 = z(_qe6.open) + 1,
                      _Ze2 = te(_qe6.close),
                      ct = Oe.originalText.slice(_rt2, _Ze2).trim();

                  return J(ct) ? [A, ct] : ct;
                }

                return ie.value;
              }

            case "value-value":
            case "value-root":
              return Pe("group");

            case "value-comment":
              return Oe.originalText.slice(te(ie), z(ie));

            case "value-comma_group":
              {
                var _Me8 = Ae.getParentNode(),
                    _qe7 = Ae.getParentNode(1),
                    _Je4 = D(Ae),
                    _rt3 = _Je4 && _Me8.type === "value-value" && (_Je4 === "grid" || _Je4.startsWith("grid-template")),
                    _Ze3 = E(Ae, "css-atrule"),
                    _ct = _Ze3 && O(_Ze3),
                    qt = ie.groups.some(function (ut) {
                  return ve(ut);
                }),
                    L = Ae.map(Pe, "groups"),
                    De = [],
                    ke = y(Ae, "url"),
                    We = !1,
                    $e = !1;

                for (var ut = 0; ut < ie.groups.length; ++ut) {
                  De.push(L[ut]);
                  var et = ie.groups[ut - 1],
                      Re = ie.groups[ut],
                      He = ie.groups[ut + 1],
                      Zt = ie.groups[ut + 2];

                  if (ke) {
                    (He && re(He) || re(Re)) && De.push(" ");
                    continue;
                  }

                  if (x(Ae, "forward") && Re.type === "value-word" && Re.value && et !== void 0 && et.type === "value-word" && et.value === "as" && He.type === "value-operator" && He.value === "*" || !He || Re.type === "value-word" && Re.value.endsWith("-") && ye(He)) continue;
                  var ho = Re.type === "value-string" && Re.value.startsWith("#{"),
                      Co = We && He.type === "value-string" && He.value.endsWith("}");

                  if (ho || Co) {
                    We = !We;
                    continue;
                  }

                  if (We || me(Re) || me(He) || Re.type === "value-atword" && Re.value === "" || Re.value === "~" || Re.value && Re.value.includes("\\") && He && He.type !== "value-comment" || et && et.value && et.value.indexOf("\\") === et.value.length - 1 && Re.type === "value-operator" && Re.value === "/" || Re.value === "\\" || de(Re, He) || xe(Re) || we(Re) || fe(He) || we(He) && K(He) || fe(Re) && K(He) || Re.value === "--" && xe(He)) continue;
                  var Qn = W(Re),
                      Zn = W(He);
                  if ((Qn && xe(He) || Zn && fe(Re)) && K(He) || !et && G(Re) || y(Ae, "calc") && (re(Re) || re(He) || $(Re) || $(He)) && K(He)) continue;
                  var Eo = (re(Re) || $(Re)) && ut === 0 && (He.type === "value-number" || He.isHex) && _qe7 && he(_qe7) && !K(He),
                      eu = Zt && Zt.type === "value-func" || Zt && pe(Zt) || Re.type === "value-func" || pe(Re),
                      tu = He.type === "value-func" || pe(He) || et && et.type === "value-func" || et && pe(et);

                  if (!(!(P(He) || P(Re)) && !y(Ae, "calc") && !Eo && (G(He) && !eu || G(Re) && !tu || re(He) && !eu || re(Re) && !tu || $(He) || $(Re)) && (K(He) || Qn && (!et || et && W(et))))) {
                    if (ve(Re)) {
                      if (_Me8.type === "value-paren_group") {
                        De.push(N(m));
                        continue;
                      }

                      De.push(m);
                      continue;
                    }

                    if (_ct && (H(He) || M(He) || se(He) || ee(Re) || U(Re))) {
                      De.push(" ");
                      continue;
                    }

                    if (_Ze3 && _Ze3.name.toLowerCase() === "namespace") {
                      De.push(" ");
                      continue;
                    }

                    if (_rt3) {
                      Re.source && He.source && Re.source.start.line !== He.source.start.line ? (De.push(m), $e = !0) : De.push(" ");
                      continue;
                    }

                    if (Zn) {
                      De.push(" ");
                      continue;
                    }

                    if (!(He && He.value === "...") && !(ye(Re) && ye(He) && z(Re) === te(He))) {
                      if (ye(Re) && Y(He) && z(Re) === te(He.open)) {
                        De.push(g);
                        continue;
                      }

                      if (Re.value === "with" && Y(He)) {
                        De.push(" ");
                        continue;
                      }

                      De.push(C);
                    }
                  }
                }

                return qt && De.push(A), $e && De.unshift(m), _ct ? p(h(De)) : F(Ae) ? p(f(De)) : p(h(f(De)));
              }

            case "value-paren_group":
              {
                var _Me9 = Ae.getParentNode();

                if (_Me9 && ne(_Me9) && (ie.groups.length === 1 || ie.groups.length > 0 && ie.groups[0].type === "value-comma_group" && ie.groups[0].groups.length > 0 && ie.groups[0].groups[0].type === "value-word" && ie.groups[0].groups[0].value.startsWith("data:"))) return [ie.open ? Pe("open") : "", l(",", Ae.map(Pe, "groups")), ie.close ? Pe("close") : ""];

                if (!ie.open) {
                  var _ke = Ae.map(Pe, "groups"),
                      _We = [];

                  for (var _$e = 0; _$e < _ke.length; _$e++) {
                    _$e !== 0 && _We.push([",", C]), _We.push(_ke[_$e]);
                  }

                  return p(h(f(_We)));
                }

                var _qe8 = ge(Ae),
                    _Je5 = t(ie.groups),
                    _rt4 = _Je5 && _Je5.type === "value-comment",
                    _Ze4 = q(ie, _Me9),
                    _ct2 = X(ie, _Me9),
                    _qt = _ct2 || _qe8 && !_Ze4,
                    _L = _ct2 || _Ze4,
                    _De = p([ie.open ? Pe("open") : "", h([g, l([C], Ae.map(function (ke, We) {
                  var $e = ke.getValue(),
                      ut = We === ie.groups.length - 1,
                      et = [Pe(), ut ? "" : ","];

                  if (Ee($e) && $e.type === "value-comma_group" && $e.groups && $e.groups[0].type !== "value-paren_group" && $e.groups[2] && $e.groups[2].type === "value-paren_group") {
                    var _Re = v(et[0].contents.contents);

                    return _Re[1] = p(_Re[1]), p(N(et));
                  }

                  if (!ut && $e.type === "value-comma_group" && c($e.groups)) {
                    var _Re2 = t($e.groups);

                    _Re2.source && a(Oe.originalText, _Re2, z) && et.push(m);
                  }

                  return et;
                }, "groups"))]), T(!_rt4 && Ce(Oe.parser, Oe.originalText) && _qe8 && je(Oe) ? "," : ""), g, ie.close ? Pe("close") : ""], {
                  shouldBreak: _qt
                });

                return _L ? N(_De) : _De;
              }

            case "value-func":
              return [ie.value, x(Ae, "supports") && ce(ie) ? " " : "", Pe("group")];

            case "value-paren":
              return ie.value;

            case "value-number":
              return [Ve(ie.value), Ne(ie.unit)];

            case "value-operator":
              return ie.value;

            case "value-word":
              return ie.isColor && ie.isHex || k(ie.value) ? ie.value.toLowerCase() : ie.value;

            case "value-colon":
              {
                var _Me10 = Ae.getParentNode(),
                    _qe9 = _Me10 && _Me10.groups.indexOf(ie),
                    _Je6 = _qe9 && _Me10.groups[_qe9 - 1];

                return [ie.value, _Je6 && typeof _Je6.value == "string" && t(_Je6.value) === "\\" || y(Ae, "url") ? "" : C];
              }

            case "value-comma":
              return [ie.value, " "];

            case "value-string":
              return i(ie.raws.quote + ie.value + ie.raws.quote, Oe);

            case "value-atword":
              return ["@", ie.value];

            case "value-unicode-range":
              return ie.value;

            case "value-unknown":
              return ie.value;

            default:
              throw new Error("Unknown postcss type ".concat(JSON.stringify(ie.type)));
          }
        }

        function tt(Ae, Oe, Pe) {
          var ie = [];
          return Ae.each(function (Me, qe, Je) {
            var rt = Je[qe - 1];

            if (rt && rt.type === "css-comment" && rt.text.trim() === "prettier-ignore") {
              var Ze = Me.getValue();
              ie.push(Oe.originalText.slice(te(Ze), z(Ze)));
            } else ie.push(Pe());

            qe !== Je.length - 1 && (Je[qe + 1].type === "css-comment" && !r(Oe.originalText, te(Je[qe + 1]), {
              backwards: !0
            }) && !u(Je[qe]) || Je[qe + 1].type === "css-atrule" && Je[qe + 1].name === "else" && Je[qe].type !== "css-comment" ? ie.push(" ") : (ie.push(Oe.__isHTMLStyleAttribute ? C : m), a(Oe.originalText, Me.getValue(), z) && !u(Je[qe]) && ie.push(m)));
          }, "nodes"), ie;
        }

        var Te = /(["'])(?:(?!\1)[^\\]|\\[\s\S])*\1/g,
            _e = /(?:\d*\.\d+|\d+\.?)(?:[Ee][+-]?\d+)?/g,
            Fe = /[A-Za-z]+/g,
            Ke = /[$@]?[A-Z_a-z\u0080-\uFFFF][\w\u0080-\uFFFF-]*/g,
            Se = new RegExp(Te.source + "|(".concat(Ke.source, ")?(").concat(_e.source, ")(").concat(Fe.source, ")?"), "g");

        function ze(Ae, Oe) {
          return Ae.replace(Te, function (Pe) {
            return i(Pe, Oe);
          });
        }

        function Be(Ae, Oe) {
          var Pe = Oe.singleQuote ? "'" : '"';
          return Ae.includes('"') || Ae.includes("'") ? Ae : Pe + Ae + Pe;
        }

        function Ie(Ae) {
          return Ae.replace(Se, function (Oe, Pe, ie, Me, qe) {
            return !ie && Me ? Ve(Me) + d(qe || "") : Oe;
          });
        }

        function Ve(Ae) {
          return s(Ae).replace(/\.0(?=$|e)/, "");
        }

        n.exports = {
          print: Ue,
          embed: w,
          insertPragma: I,
          massageAstNode: B
        };
      }
    }),
        td = Z({
      "src/language-css/options.js": function srcLanguageCssOptionsJs(e, n) {
        "use strict";

        ae();
        var t = Lt();
        n.exports = {
          singleQuote: t.singleQuote
        };
      }
    }),
        rd = Z({
      "src/language-css/parsers.js": function srcLanguageCssParsersJs() {
        ae();
      }
    }),
        nd = Z({
      "node_modules/linguist-languages/data/CSS.json": function node_modulesLinguistLanguagesDataCSSJson(e, n) {
        n.exports = {
          name: "CSS",
          type: "markup",
          tmScope: "source.css",
          aceMode: "css",
          codemirrorMode: "css",
          codemirrorMimeType: "text/css",
          color: "#563d7c",
          extensions: [".css"],
          languageId: 50
        };
      }
    }),
        ud = Z({
      "node_modules/linguist-languages/data/PostCSS.json": function node_modulesLinguistLanguagesDataPostCSSJson(e, n) {
        n.exports = {
          name: "PostCSS",
          type: "markup",
          tmScope: "source.postcss",
          group: "CSS",
          extensions: [".pcss", ".postcss"],
          aceMode: "text",
          languageId: 262764437
        };
      }
    }),
        sd = Z({
      "node_modules/linguist-languages/data/Less.json": function node_modulesLinguistLanguagesDataLessJson(e, n) {
        n.exports = {
          name: "Less",
          type: "markup",
          color: "#1d365d",
          extensions: [".less"],
          tmScope: "source.css.less",
          aceMode: "less",
          codemirrorMode: "css",
          codemirrorMimeType: "text/css",
          languageId: 198
        };
      }
    }),
        ad = Z({
      "node_modules/linguist-languages/data/SCSS.json": function node_modulesLinguistLanguagesDataSCSSJson(e, n) {
        n.exports = {
          name: "SCSS",
          type: "markup",
          color: "#c6538c",
          tmScope: "source.css.scss",
          aceMode: "scss",
          codemirrorMode: "css",
          codemirrorMimeType: "text/x-scss",
          extensions: [".scss"],
          languageId: 329
        };
      }
    }),
        id = Z({
      "src/language-css/index.js": function srcLanguageCssIndexJs(e, n) {
        "use strict";

        ae();
        var t = bt(),
            s = ed(),
            i = td(),
            r = rd(),
            u = [t(nd(), function (c) {
          return {
            since: "1.4.0",
            parsers: ["css"],
            vscodeLanguageIds: ["css"],
            extensions: [].concat(_toConsumableArray(c.extensions), [".wxss"])
          };
        }), t(ud(), function () {
          return {
            since: "1.4.0",
            parsers: ["css"],
            vscodeLanguageIds: ["postcss"]
          };
        }), t(sd(), function () {
          return {
            since: "1.4.0",
            parsers: ["less"],
            vscodeLanguageIds: ["less"]
          };
        }), t(ad(), function () {
          return {
            since: "1.4.0",
            parsers: ["scss"],
            vscodeLanguageIds: ["scss"]
          };
        })],
            a = {
          postcss: s
        };
        n.exports = {
          languages: u,
          options: i,
          printers: a,
          parsers: r
        };
      }
    }),
        od = Z({
      "src/language-handlebars/loc.js": function srcLanguageHandlebarsLocJs(e, n) {
        "use strict";

        ae();

        function t(i) {
          return i.loc.start.offset;
        }

        function s(i) {
          return i.loc.end.offset;
        }

        n.exports = {
          locStart: t,
          locEnd: s
        };
      }
    }),
        cd = Z({
      "src/language-handlebars/clean.js": function srcLanguageHandlebarsCleanJs(e, n) {
        "use strict";

        ae();

        function t(s, i) {
          if (s.type === "TextNode") {
            var r = s.chars.trim();
            if (!r) return null;
            i.chars = r.replace(/[\t\n\f\r ]+/g, " ");
          }

          s.type === "AttrNode" && s.name.toLowerCase() === "class" && delete i.value;
        }

        t.ignoredProperties = new Set(["loc", "selfClosing"]), n.exports = t;
      }
    }),
        ld = Z({
      "vendors/html-void-elements.json": function vendorsHtmlVoidElementsJson(e, n) {
        n.exports = {
          htmlVoidElements: ["area", "base", "basefont", "bgsound", "br", "col", "command", "embed", "frame", "hr", "image", "img", "input", "isindex", "keygen", "link", "menuitem", "meta", "nextid", "param", "source", "track", "wbr"]
        };
      }
    }),
        pd = Z({
      "src/language-handlebars/utils.js": function srcLanguageHandlebarsUtilsJs(e, n) {
        "use strict";

        ae();

        var _ld = ld(),
            t = _ld.htmlVoidElements,
            s = st();

        function i(b) {
          var v = b.getValue(),
              B = b.getParentNode(0);
          return !!(m(b, ["ElementNode"]) && s(B.children) === v || m(b, ["Block"]) && s(B.body) === v);
        }

        function r(b) {
          return b.toUpperCase() === b;
        }

        function u(b) {
          return C(b, ["ElementNode"]) && typeof b.tag == "string" && b.tag[0] !== ":" && (r(b.tag[0]) || b.tag.includes("."));
        }

        var a = new Set(t);

        function c(b) {
          return u(b) && b.children.every(function (v) {
            return l(v);
          }) || a.has(b.tag);
        }

        function l(b) {
          return C(b, ["TextNode"]) && !/\S/.test(b.chars);
        }

        function C(b, v) {
          return b && v.includes(b.type);
        }

        function m(b, v) {
          var B = b.getParentNode(0);
          return C(B, v);
        }

        function g(b, v) {
          var B = h(b);
          return C(B, v);
        }

        function p(b, v) {
          var B = N(b);
          return C(B, v);
        }

        function f(b, v) {
          var B = b.getValue(),
              w = b.getParentNode(0) || {},
              I = w.children || w.body || w.parts || [],
              E = I.indexOf(B);
          return E !== -1 && I[E + v];
        }

        function h(b) {
          var v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
          return f(b, -v);
        }

        function N(b) {
          return f(b, 1);
        }

        function T(b) {
          return C(b, ["MustacheCommentStatement"]) && typeof b.value == "string" && b.value.trim() === "prettier-ignore";
        }

        function A(b) {
          var v = b.getValue(),
              B = h(b, 2);
          return T(v) || T(B);
        }

        n.exports = {
          getNextNode: N,
          getPreviousNode: h,
          hasPrettierIgnore: A,
          isLastNodeOfSiblings: i,
          isNextNodeOfSomeType: p,
          isNodeOfSomeType: C,
          isParentOfSomeType: m,
          isPreviousNodeOfSomeType: g,
          isVoid: c,
          isWhitespaceNode: l
        };
      }
    }),
        fd = Z({
      "src/language-handlebars/printer-glimmer.js": function srcLanguageHandlebarsPrinterGlimmerJs(e, n) {
        "use strict";

        ae();

        var _Le41 = Le(),
            _Le41$builders = _Le41.builders,
            t = _Le41$builders.dedent,
            s = _Le41$builders.fill,
            i = _Le41$builders.group,
            r = _Le41$builders.hardline,
            u = _Le41$builders.ifBreak,
            a = _Le41$builders.indent,
            c = _Le41$builders.join,
            l = _Le41$builders.line,
            C = _Le41$builders.softline,
            _Le41$utils = _Le41.utils,
            m = _Le41$utils.getDocParts,
            g = _Le41$utils.replaceTextEndOfLine,
            _Ge34 = Ge(),
            p = _Ge34.getPreferredQuote,
            f = _Ge34.isNonEmptyArray,
            _od = od(),
            h = _od.locStart,
            N = _od.locEnd,
            T = cd(),
            _pd = pd(),
            A = _pd.getNextNode,
            b = _pd.getPreviousNode,
            v = _pd.hasPrettierIgnore,
            B = _pd.isLastNodeOfSiblings,
            w = _pd.isNextNodeOfSomeType,
            I = _pd.isNodeOfSomeType,
            E = _pd.isParentOfSomeType,
            D = _pd.isPreviousNodeOfSomeType,
            d = _pd.isVoid,
            y = _pd.isWhitespaceNode,
            o = 2;

        function x(J, ye, X) {
          var Y = J.getValue();
          if (!Y) return "";
          if (v(J)) return ye.originalText.slice(h(Y), N(Y));
          var te = ye.singleQuote ? "'" : '"';

          switch (Y.type) {
            case "Block":
            case "Program":
            case "Template":
              return i(J.map(X, "body"));

            case "ElementNode":
              {
                var z = i(S(J, X)),
                    j = ye.htmlWhitespaceSensitivity === "ignore" && w(J, ["ElementNode"]) ? C : "";
                if (d(Y)) return [z, j];
                var Ce = ["</", Y.tag, ">"];
                return Y.children.length === 0 ? [z, a(Ce), j] : ye.htmlWhitespaceSensitivity === "ignore" ? [z, a(k(J, ye, X)), r, a(Ce), j] : [z, a(i(k(J, ye, X))), a(Ce), j];
              }

            case "BlockStatement":
              {
                var _z2 = J.getParentNode(1);

                return _z2 && _z2.inverse && _z2.inverse.body.length === 1 && _z2.inverse.body[0] === Y && _z2.inverse.body[0].path.parts[0] === "if" ? [U(J, X), K(J, X, ye), Ee(J, X, ye)] : [W(J, X), i([K(J, X, ye), Ee(J, X, ye), ne(J, X, ye)])];
              }

            case "ElementModifierStatement":
              return i(["{{", pe(J, X), "}}"]);

            case "MustacheStatement":
              return i([O(Y), pe(J, X), R(Y)]);

            case "SubExpression":
              return i(["(", fe(J, X), C, ")"]);

            case "AttrNode":
              {
                var _z3 = Y.value.type === "TextNode";

                if (_z3 && Y.value.chars === "" && h(Y.value) === N(Y.value)) return Y.name;

                var _Ce = _z3 ? p(Y.value.chars, te).quote : Y.value.type === "ConcatStatement" ? p(Y.value.parts.filter(function (je) {
                  return je.type === "TextNode";
                }).map(function (je) {
                  return je.chars;
                }).join(""), te).quote : "",
                    Ne = X("value");

                return [Y.name, "=", _Ce, Y.name === "class" && _Ce ? i(a(Ne)) : Ne, _Ce];
              }

            case "ConcatStatement":
              return J.map(X, "parts");

            case "Hash":
              return c(l, J.map(X, "pairs"));

            case "HashPair":
              return [Y.key, "=", X("value")];

            case "TextNode":
              {
                var _z4 = Y.chars.replace(/{{/g, "\\{{"),
                    _j2 = ue(J);

                if (_j2) {
                  if (_j2 === "class") {
                    var Se = _z4.trim().split(/\s+/).join(" "),
                        ze = !1,
                        Be = !1;

                    return E(J, ["ConcatStatement"]) && (D(J, ["MustacheStatement"]) && /^\s/.test(_z4) && (ze = !0), w(J, ["MustacheStatement"]) && /\s$/.test(_z4) && Se !== "" && (Be = !0)), [ze ? l : "", Se, Be ? l : ""];
                  }

                  return g(_z4);
                }

                var _Ne = /^[\t\n\f\r ]*$/.test(_z4),
                    je = !b(J),
                    Ue = !A(J);

                if (ye.htmlWhitespaceSensitivity !== "ignore") {
                  var _Se = /^[\t\n\f\r ]*/,
                      _ze = /[\t\n\f\r ]*$/,
                      _Be = Ue && E(J, ["Template"]),
                      Ie = je && E(J, ["Template"]);

                  if (_Ne) {
                    if (Ie || _Be) return "";
                    var ie = [l],
                        Me = Q(_z4);
                    return Me && (ie = ve(Me)), B(J) && (ie = ie.map(function (qe) {
                      return t(qe);
                    })), ie;
                  }

                  var _z4$match = _z4.match(_Se),
                      _z4$match2 = _slicedToArray(_z4$match, 1),
                      Ve = _z4$match2[0],
                      _z4$match3 = _z4.match(_ze),
                      _z4$match4 = _slicedToArray(_z4$match3, 1),
                      Ae = _z4$match4[0],
                      Oe = [];

                  if (Ve) {
                    Oe = [l];

                    var _ie = Q(Ve);

                    _ie && (Oe = ve(_ie)), _z4 = _z4.replace(_Se, "");
                  }

                  var Pe = [];

                  if (Ae) {
                    if (!_Be) {
                      Pe = [l];

                      var _ie2 = Q(Ae);

                      _ie2 && (Pe = ve(_ie2)), B(J) && (Pe = Pe.map(function (Me) {
                        return t(Me);
                      }));
                    }

                    _z4 = _z4.replace(_ze, "");
                  }

                  return [].concat(_toConsumableArray(Oe), [s(q(_z4))], _toConsumableArray(Pe));
                }

                var tt = Q(_z4),
                    Te = de(_z4),
                    _e = ge(_z4);

                if ((je || Ue) && _Ne && E(J, ["Block", "ElementNode", "Template"])) return "";
                _Ne && tt ? (Te = Math.min(tt, o), _e = 0) : (w(J, ["BlockStatement", "ElementNode"]) && (_e = Math.max(_e, 1)), D(J, ["BlockStatement", "ElementNode"]) && (Te = Math.max(Te, 1)));
                var Fe = "",
                    Ke = "";
                return _e === 0 && w(J, ["MustacheStatement"]) && (Ke = " "), Te === 0 && D(J, ["MustacheStatement"]) && (Fe = " "), je && (Te = 0, Fe = ""), Ue && (_e = 0, Ke = ""), _z4 = _z4.replace(/^[\t\n\f\r ]+/g, Fe).replace(/[\t\n\f\r ]+$/, Ke), [].concat(_toConsumableArray(ve(Te)), [s(q(_z4))], _toConsumableArray(ve(_e)));
              }

            case "MustacheCommentStatement":
              {
                var _z5 = h(Y),
                    _j3 = N(Y),
                    _Ce2 = ye.originalText.charAt(_z5 + 2) === "~",
                    _Ne2 = ye.originalText.charAt(_j3 - 3) === "~",
                    _je = Y.value.includes("}}") ? "--" : "";

                return ["{{", _Ce2 ? "~" : "", "!", _je, Y.value, _je, _Ne2 ? "~" : "", "}}"];
              }

            case "PathExpression":
              return Y.original;

            case "BooleanLiteral":
              return String(Y.value);

            case "CommentStatement":
              return ["<!--", Y.value, "-->"];

            case "StringLiteral":
              {
                if (we(J)) {
                  var _z6 = ye.singleQuote ? '"' : "'";

                  return xe(Y.value, _z6);
                }

                return xe(Y.value, te);
              }

            case "NumberLiteral":
              return String(Y.value);

            case "UndefinedLiteral":
              return "undefined";

            case "NullLiteral":
              return "null";

            default:
              throw new Error("unknown glimmer type: " + JSON.stringify(Y.type));
          }
        }

        function F(J, ye) {
          return h(J) - h(ye);
        }

        function S(J, ye) {
          var X = J.getValue(),
              Y = ["attributes", "modifiers", "comments"].filter(function (z) {
            return f(X[z]);
          }),
              te = Y.flatMap(function (z) {
            return X[z];
          }).sort(F);

          var _iterator48 = _createForOfIteratorHelper(Y),
              _step48;

          try {
            for (_iterator48.s(); !(_step48 = _iterator48.n()).done;) {
              var z = _step48.value;
              J.each(function (j) {
                var Ce = te.indexOf(j.getValue());
                te.splice(Ce, 1, [l, ye()]);
              }, z);
            }
          } catch (err) {
            _iterator48.e(err);
          } finally {
            _iterator48.f();
          }

          return f(X.blockParams) && te.push(l, he(X)), ["<", X.tag, a(te), _(X)];
        }

        function k(J, ye, X) {
          var te = J.getValue().children.every(function (z) {
            return y(z);
          });
          return ye.htmlWhitespaceSensitivity === "ignore" && te ? "" : J.map(function (z, j) {
            var Ce = X();
            return j === 0 && ye.htmlWhitespaceSensitivity === "ignore" ? [C, Ce] : Ce;
          }, "children");
        }

        function _(J) {
          return d(J) ? u([C, "/>"], [" />", C]) : u([C, ">"], ">");
        }

        function O(J) {
          var ye = J.escaped === !1 ? "{{{" : "{{",
              X = J.strip && J.strip.open ? "~" : "";
          return [ye, X];
        }

        function R(J) {
          var ye = J.escaped === !1 ? "}}}" : "}}";
          return [J.strip && J.strip.close ? "~" : "", ye];
        }

        function M(J) {
          var ye = O(J),
              X = J.openStrip.open ? "~" : "";
          return [ye, X, "#"];
        }

        function H(J) {
          var ye = R(J);
          return [J.openStrip.close ? "~" : "", ye];
        }

        function P(J) {
          var ye = O(J),
              X = J.closeStrip.open ? "~" : "";
          return [ye, X, "/"];
        }

        function G(J) {
          var ye = R(J);
          return [J.closeStrip.close ? "~" : "", ye];
        }

        function re(J) {
          var ye = O(J),
              X = J.inverseStrip.open ? "~" : "";
          return [ye, X];
        }

        function $(J) {
          var ye = R(J);
          return [J.inverseStrip.close ? "~" : "", ye];
        }

        function W(J, ye) {
          var X = J.getValue(),
              Y = M(X),
              te = H(X),
              z = [me(J, ye)],
              j = ce(J, ye);

          if (j && z.push(l, j), f(X.program.blockParams)) {
            var Ce = he(X.program);
            z.push(l, Ce);
          }

          return i([Y, a(z), C, te]);
        }

        function ee(J, ye) {
          return [ye.htmlWhitespaceSensitivity === "ignore" ? r : "", re(J), "else", $(J)];
        }

        function U(J, ye) {
          var X = J.getParentNode(1);
          return [re(X), "else if ", ce(J, ye), $(X)];
        }

        function ne(J, ye, X) {
          var Y = J.getValue();
          return X.htmlWhitespaceSensitivity === "ignore" ? [se(Y) ? C : r, P(Y), ye("path"), G(Y)] : [P(Y), ye("path"), G(Y)];
        }

        function se(J) {
          return I(J, ["BlockStatement"]) && J.program.body.every(function (ye) {
            return y(ye);
          });
        }

        function V(J) {
          return oe(J) && J.inverse.body.length === 1 && I(J.inverse.body[0], ["BlockStatement"]) && J.inverse.body[0].path.parts[0] === "if";
        }

        function oe(J) {
          return I(J, ["BlockStatement"]) && J.inverse;
        }

        function K(J, ye, X) {
          var Y = J.getValue();
          if (se(Y)) return "";
          var te = ye("program");
          return X.htmlWhitespaceSensitivity === "ignore" ? a([r, te]) : a(te);
        }

        function Ee(J, ye, X) {
          var Y = J.getValue(),
              te = ye("inverse"),
              z = X.htmlWhitespaceSensitivity === "ignore" ? [r, te] : te;
          return V(Y) ? z : oe(Y) ? [ee(Y, X), a(z)] : "";
        }

        function q(J) {
          return m(c(l, le(J)));
        }

        function le(J) {
          return J.split(/[\t\n\f\r ]+/);
        }

        function ue(J) {
          for (var ye = 0; ye < 2; ye++) {
            var X = J.getParentNode(ye);
            if (X && X.type === "AttrNode") return X.name.toLowerCase();
          }
        }

        function Q(J) {
          return J = typeof J == "string" ? J : "", J.split("\n").length - 1;
        }

        function de(J) {
          J = typeof J == "string" ? J : "";
          var ye = (J.match(/^([^\S\n\r]*[\n\r])+/g) || [])[0] || "";
          return Q(ye);
        }

        function ge(J) {
          J = typeof J == "string" ? J : "";
          var ye = (J.match(/([\n\r][^\S\n\r]*)+$/g) || [])[0] || "";
          return Q(ye);
        }

        function ve() {
          var J = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
          return Array.from({
            length: Math.min(J, o)
          }).fill(r);
        }

        function xe(J, ye) {
          var _p5 = p(J, ye),
              X = _p5.quote,
              Y = _p5.regex;

          return [X, J.replace(Y, "\\".concat(X)), X];
        }

        function we(J) {
          var ye = 0,
              X = J.getParentNode(ye);

          for (; X && I(X, ["SubExpression"]);) {
            ye++, X = J.getParentNode(ye);
          }

          return !!(X && I(J.getParentNode(ye + 1), ["ConcatStatement"]) && I(J.getParentNode(ye + 2), ["AttrNode"]));
        }

        function fe(J, ye) {
          var X = me(J, ye),
              Y = ce(J, ye);
          return Y ? a([X, l, i(Y)]) : X;
        }

        function pe(J, ye) {
          var X = me(J, ye),
              Y = ce(J, ye);
          return Y ? [a([X, l, Y]), C] : X;
        }

        function me(J, ye) {
          return ye("path");
        }

        function ce(J, ye) {
          var X = J.getValue(),
              Y = [];

          if (X.params.length > 0) {
            var te = J.map(ye, "params");
            Y.push.apply(Y, _toConsumableArray(te));
          }

          if (X.hash && X.hash.pairs.length > 0) {
            var _te = ye("hash");

            Y.push(_te);
          }

          return Y.length === 0 ? "" : c(l, Y);
        }

        function he(J) {
          return ["as |", J.blockParams.join(" "), "|"];
        }

        n.exports = {
          print: x,
          massageAstNode: T
        };
      }
    }),
        Dd = Z({
      "src/language-handlebars/parsers.js": function srcLanguageHandlebarsParsersJs() {
        ae();
      }
    }),
        md = Z({
      "node_modules/linguist-languages/data/Handlebars.json": function node_modulesLinguistLanguagesDataHandlebarsJson(e, n) {
        n.exports = {
          name: "Handlebars",
          type: "markup",
          color: "#f7931e",
          aliases: ["hbs", "htmlbars"],
          extensions: [".handlebars", ".hbs"],
          tmScope: "text.html.handlebars",
          aceMode: "handlebars",
          languageId: 155
        };
      }
    }),
        dd = Z({
      "src/language-handlebars/index.js": function srcLanguageHandlebarsIndexJs(e, n) {
        "use strict";

        ae();
        var t = bt(),
            s = fd(),
            i = Dd(),
            r = [t(md(), function () {
          return {
            since: "2.3.0",
            parsers: ["glimmer"],
            vscodeLanguageIds: ["handlebars"]
          };
        })],
            u = {
          glimmer: s
        };
        n.exports = {
          languages: r,
          printers: u,
          parsers: i
        };
      }
    }),
        gd = Z({
      "src/language-graphql/pragma.js": function srcLanguageGraphqlPragmaJs(e, n) {
        "use strict";

        ae();

        function t(i) {
          return /^\s*#[^\S\n]*@(?:format|prettier)\s*(?:\n|$)/.test(i);
        }

        function s(i) {
          return "# @format\n\n" + i;
        }

        n.exports = {
          hasPragma: t,
          insertPragma: s
        };
      }
    }),
        yd = Z({
      "src/language-graphql/loc.js": function srcLanguageGraphqlLocJs(e, n) {
        "use strict";

        ae();

        function t(i) {
          return typeof i.start == "number" ? i.start : i.loc && i.loc.start;
        }

        function s(i) {
          return typeof i.end == "number" ? i.end : i.loc && i.loc.end;
        }

        n.exports = {
          locStart: t,
          locEnd: s
        };
      }
    }),
        hd = Z({
      "src/language-graphql/printer-graphql.js": function srcLanguageGraphqlPrinterGraphqlJs(e, n) {
        "use strict";

        ae();

        var _Le42 = Le(),
            _Le42$builders = _Le42.builders,
            t = _Le42$builders.join,
            s = _Le42$builders.hardline,
            i = _Le42$builders.line,
            r = _Le42$builders.softline,
            u = _Le42$builders.group,
            a = _Le42$builders.indent,
            c = _Le42$builders.ifBreak,
            _Ge35 = Ge(),
            l = _Ge35.isNextLineEmpty,
            C = _Ge35.isNonEmptyArray,
            _gd = gd(),
            m = _gd.insertPragma,
            _yd = yd(),
            g = _yd.locStart,
            p = _yd.locEnd;

        function f(w, I, E) {
          var D = w.getValue();
          if (!D) return "";
          if (typeof D == "string") return D;

          switch (D.kind) {
            case "Document":
              {
                var d = [];
                return w.each(function (y, o, x) {
                  d.push(E()), o !== x.length - 1 && (d.push(s), l(I.originalText, y.getValue(), p) && d.push(s));
                }, "definitions"), [].concat(d, [s]);
              }

            case "OperationDefinition":
              {
                var _d2 = I.originalText[g(D)] !== "{",
                    y = Boolean(D.name);

                return [_d2 ? D.operation : "", _d2 && y ? [" ", E("name")] : "", _d2 && !y && C(D.variableDefinitions) ? " " : "", C(D.variableDefinitions) ? u(["(", a([r, t([c("", ", "), r], w.map(E, "variableDefinitions"))]), r, ")"]) : "", h(w, E, D), D.selectionSet ? !_d2 && !y ? "" : " " : "", E("selectionSet")];
              }

            case "FragmentDefinition":
              return ["fragment ", E("name"), C(D.variableDefinitions) ? u(["(", a([r, t([c("", ", "), r], w.map(E, "variableDefinitions"))]), r, ")"]) : "", " on ", E("typeCondition"), h(w, E, D), " ", E("selectionSet")];

            case "SelectionSet":
              return ["{", a([s, t(s, N(w, I, E, "selections"))]), s, "}"];

            case "Field":
              return u([D.alias ? [E("alias"), ": "] : "", E("name"), D.arguments.length > 0 ? u(["(", a([r, t([c("", ", "), r], N(w, I, E, "arguments"))]), r, ")"]) : "", h(w, E, D), D.selectionSet ? " " : "", E("selectionSet")]);

            case "Name":
              return D.value;

            case "StringValue":
              return D.block ? ['"""', s, t(s, D.value.replace(/"""/g, "\\$&").split("\n")), s, '"""'] : ['"', D.value.replace(/["\\]/g, "\\$&").replace(/\n/g, "\\n"), '"'];

            case "IntValue":
            case "FloatValue":
            case "EnumValue":
              return D.value;

            case "BooleanValue":
              return D.value ? "true" : "false";

            case "NullValue":
              return "null";

            case "Variable":
              return ["$", E("name")];

            case "ListValue":
              return u(["[", a([r, t([c("", ", "), r], w.map(E, "values"))]), r, "]"]);

            case "ObjectValue":
              return u(["{", I.bracketSpacing && D.fields.length > 0 ? " " : "", a([r, t([c("", ", "), r], w.map(E, "fields"))]), r, c("", I.bracketSpacing && D.fields.length > 0 ? " " : ""), "}"]);

            case "ObjectField":
            case "Argument":
              return [E("name"), ": ", E("value")];

            case "Directive":
              return ["@", E("name"), D.arguments.length > 0 ? u(["(", a([r, t([c("", ", "), r], N(w, I, E, "arguments"))]), r, ")"]) : ""];

            case "NamedType":
              return E("name");

            case "VariableDefinition":
              return [E("variable"), ": ", E("type"), D.defaultValue ? [" = ", E("defaultValue")] : "", h(w, E, D)];

            case "ObjectTypeExtension":
            case "ObjectTypeDefinition":
              return [E("description"), D.description ? s : "", D.kind === "ObjectTypeExtension" ? "extend " : "", "type ", E("name"), D.interfaces.length > 0 ? [" implements "].concat(_toConsumableArray(b(w, I, E))) : "", h(w, E, D), D.fields.length > 0 ? [" {", a([s, t(s, N(w, I, E, "fields"))]), s, "}"] : ""];

            case "FieldDefinition":
              return [E("description"), D.description ? s : "", E("name"), D.arguments.length > 0 ? u(["(", a([r, t([c("", ", "), r], N(w, I, E, "arguments"))]), r, ")"]) : "", ": ", E("type"), h(w, E, D)];

            case "DirectiveDefinition":
              return [E("description"), D.description ? s : "", "directive ", "@", E("name"), D.arguments.length > 0 ? u(["(", a([r, t([c("", ", "), r], N(w, I, E, "arguments"))]), r, ")"]) : "", D.repeatable ? " repeatable" : "", " on ", t(" | ", w.map(E, "locations"))];

            case "EnumTypeExtension":
            case "EnumTypeDefinition":
              return [E("description"), D.description ? s : "", D.kind === "EnumTypeExtension" ? "extend " : "", "enum ", E("name"), h(w, E, D), D.values.length > 0 ? [" {", a([s, t(s, N(w, I, E, "values"))]), s, "}"] : ""];

            case "EnumValueDefinition":
              return [E("description"), D.description ? s : "", E("name"), h(w, E, D)];

            case "InputValueDefinition":
              return [E("description"), D.description ? D.description.block ? s : i : "", E("name"), ": ", E("type"), D.defaultValue ? [" = ", E("defaultValue")] : "", h(w, E, D)];

            case "InputObjectTypeExtension":
            case "InputObjectTypeDefinition":
              return [E("description"), D.description ? s : "", D.kind === "InputObjectTypeExtension" ? "extend " : "", "input ", E("name"), h(w, E, D), D.fields.length > 0 ? [" {", a([s, t(s, N(w, I, E, "fields"))]), s, "}"] : ""];

            case "SchemaDefinition":
              return [E("description"), D.description ? s : "", "schema", h(w, E, D), " {", D.operationTypes.length > 0 ? a([s, t(s, N(w, I, E, "operationTypes"))]) : "", s, "}"];

            case "OperationTypeDefinition":
              return [E("operation"), ": ", E("type")];

            case "InterfaceTypeExtension":
            case "InterfaceTypeDefinition":
              return [E("description"), D.description ? s : "", D.kind === "InterfaceTypeExtension" ? "extend " : "", "interface ", E("name"), D.interfaces.length > 0 ? [" implements "].concat(_toConsumableArray(b(w, I, E))) : "", h(w, E, D), D.fields.length > 0 ? [" {", a([s, t(s, N(w, I, E, "fields"))]), s, "}"] : ""];

            case "FragmentSpread":
              return ["...", E("name"), h(w, E, D)];

            case "InlineFragment":
              return ["...", D.typeCondition ? [" on ", E("typeCondition")] : "", h(w, E, D), " ", E("selectionSet")];

            case "UnionTypeExtension":
            case "UnionTypeDefinition":
              return u([E("description"), D.description ? s : "", u([D.kind === "UnionTypeExtension" ? "extend " : "", "union ", E("name"), h(w, E, D), D.types.length > 0 ? [" =", c("", " "), a([c([i, "  "]), t([i, "| "], w.map(E, "types"))])] : ""])]);

            case "ScalarTypeExtension":
            case "ScalarTypeDefinition":
              return [E("description"), D.description ? s : "", D.kind === "ScalarTypeExtension" ? "extend " : "", "scalar ", E("name"), h(w, E, D)];

            case "NonNullType":
              return [E("type"), "!"];

            case "ListType":
              return ["[", E("type"), "]"];

            default:
              throw new Error("unknown graphql type: " + JSON.stringify(D.kind));
          }
        }

        function h(w, I, E) {
          if (E.directives.length === 0) return "";
          var D = t(i, w.map(I, "directives"));
          return E.kind === "FragmentDefinition" || E.kind === "OperationDefinition" ? u([i, D]) : [" ", u(a([r, D]))];
        }

        function N(w, I, E, D) {
          return w.map(function (d, y, o) {
            var x = E();
            return y < o.length - 1 && l(I.originalText, d.getValue(), p) ? [x, s] : x;
          }, D);
        }

        function T(w) {
          return w.kind && w.kind !== "Comment";
        }

        function A(w) {
          var I = w.getValue();
          if (I.kind === "Comment") return "#" + I.value.trimEnd();
          throw new Error("Not a comment: " + JSON.stringify(I));
        }

        function b(w, I, E) {
          var D = w.getNode(),
              d = [],
              y = D.interfaces,
              o = w.map(function (x) {
            return E(x);
          }, "interfaces");

          for (var x = 0; x < y.length; x++) {
            var F = y[x];
            d.push(o[x]);
            var S = y[x + 1];

            if (S) {
              var k = I.originalText.slice(F.loc.end, S.loc.start),
                  _ = k.includes("#"),
                  O = k.replace(/#.*/g, "").trim();

              d.push(O === "," ? "," : " &", _ ? i : " ");
            }
          }

          return d;
        }

        function v() {}

        v.ignoredProperties = new Set(["loc", "comments"]);

        function B(w) {
          var I = w.getValue();
          return I && Array.isArray(I.comments) && I.comments.some(function (E) {
            return E.value.trim() === "prettier-ignore";
          });
        }

        n.exports = {
          print: f,
          massageAstNode: v,
          hasPrettierIgnore: B,
          insertPragma: m,
          printComment: A,
          canAttachComment: T
        };
      }
    }),
        Cd = Z({
      "src/language-graphql/options.js": function srcLanguageGraphqlOptionsJs(e, n) {
        "use strict";

        ae();
        var t = Lt();
        n.exports = {
          bracketSpacing: t.bracketSpacing
        };
      }
    }),
        Ed = Z({
      "src/language-graphql/parsers.js": function srcLanguageGraphqlParsersJs() {
        ae();
      }
    }),
        vd = Z({
      "node_modules/linguist-languages/data/GraphQL.json": function node_modulesLinguistLanguagesDataGraphQLJson(e, n) {
        n.exports = {
          name: "GraphQL",
          type: "data",
          color: "#e10098",
          extensions: [".graphql", ".gql", ".graphqls"],
          tmScope: "source.graphql",
          aceMode: "text",
          languageId: 139
        };
      }
    }),
        Fd = Z({
      "src/language-graphql/index.js": function srcLanguageGraphqlIndexJs(e, n) {
        "use strict";

        ae();
        var t = bt(),
            s = hd(),
            i = Cd(),
            r = Ed(),
            u = [t(vd(), function () {
          return {
            since: "1.5.0",
            parsers: ["graphql"],
            vscodeLanguageIds: ["graphql"]
          };
        })],
            a = {
          graphql: s
        };
        n.exports = {
          languages: u,
          options: i,
          printers: a,
          parsers: r
        };
      }
    }),
        fo = Z({
      "src/language-markdown/loc.js": function srcLanguageMarkdownLocJs(e, n) {
        "use strict";

        ae();

        function t(i) {
          return i.position.start.offset;
        }

        function s(i) {
          return i.position.end.offset;
        }

        n.exports = {
          locStart: t,
          locEnd: s
        };
      }
    }),
        Ad = Z({
      "src/language-markdown/constants.evaluate.js": function srcLanguageMarkdownConstantsEvaluateJs(e, n) {
        n.exports = {
          cjkPattern: "(?:[\\u02ea-\\u02eb\\u1100-\\u11ff\\u2e80-\\u2e99\\u2e9b-\\u2ef3\\u2f00-\\u2fd5\\u2ff0-\\u303f\\u3041-\\u3096\\u3099-\\u309f\\u30a1-\\u30fa\\u30fc-\\u30ff\\u3105-\\u312f\\u3131-\\u318e\\u3190-\\u3191\\u3196-\\u31ba\\u31c0-\\u31e3\\u31f0-\\u321e\\u322a-\\u3247\\u3260-\\u327e\\u328a-\\u32b0\\u32c0-\\u32cb\\u32d0-\\u3370\\u337b-\\u337f\\u33e0-\\u33fe\\u3400-\\u4db5\\u4e00-\\u9fef\\ua960-\\ua97c\\uac00-\\ud7a3\\ud7b0-\\ud7c6\\ud7cb-\\ud7fb\\uf900-\\ufa6d\\ufa70-\\ufad9\\ufe10-\\ufe1f\\ufe30-\\ufe6f\\uff00-\\uffef]|[\\ud840-\\ud868\\ud86a-\\ud86c\\ud86f-\\ud872\\ud874-\\ud879][\\udc00-\\udfff]|\\ud82c[\\udc00-\\udd1e\\udd50-\\udd52\\udd64-\\udd67]|\\ud83c[\\ude00\\ude50-\\ude51]|\\ud869[\\udc00-\\uded6\\udf00-\\udfff]|\\ud86d[\\udc00-\\udf34\\udf40-\\udfff]|\\ud86e[\\udc00-\\udc1d\\udc20-\\udfff]|\\ud873[\\udc00-\\udea1\\udeb0-\\udfff]|\\ud87a[\\udc00-\\udfe0]|\\ud87e[\\udc00-\\ude1d])(?:[\\ufe00-\\ufe0f]|\\udb40[\\udd00-\\uddef])?",
          kPattern: "[\\u1100-\\u11ff\\u3001-\\u3003\\u3008-\\u3011\\u3013-\\u301f\\u302e-\\u3030\\u3037\\u30fb\\u3131-\\u318e\\u3200-\\u321e\\u3260-\\u327e\\ua960-\\ua97c\\uac00-\\ud7a3\\ud7b0-\\ud7c6\\ud7cb-\\ud7fb\\ufe45-\\ufe46\\uff61-\\uff65\\uffa0-\\uffbe\\uffc2-\\uffc7\\uffca-\\uffcf\\uffd2-\\uffd7\\uffda-\\uffdc]",
          punctuationPattern: "[\\u0021-\\u002f\\u003a-\\u0040\\u005b-\\u0060\\u007b-\\u007e\\u00a1\\u00a7\\u00ab\\u00b6-\\u00b7\\u00bb\\u00bf\\u037e\\u0387\\u055a-\\u055f\\u0589-\\u058a\\u05be\\u05c0\\u05c3\\u05c6\\u05f3-\\u05f4\\u0609-\\u060a\\u060c-\\u060d\\u061b\\u061e-\\u061f\\u066a-\\u066d\\u06d4\\u0700-\\u070d\\u07f7-\\u07f9\\u0830-\\u083e\\u085e\\u0964-\\u0965\\u0970\\u09fd\\u0a76\\u0af0\\u0c77\\u0c84\\u0df4\\u0e4f\\u0e5a-\\u0e5b\\u0f04-\\u0f12\\u0f14\\u0f3a-\\u0f3d\\u0f85\\u0fd0-\\u0fd4\\u0fd9-\\u0fda\\u104a-\\u104f\\u10fb\\u1360-\\u1368\\u1400\\u166e\\u169b-\\u169c\\u16eb-\\u16ed\\u1735-\\u1736\\u17d4-\\u17d6\\u17d8-\\u17da\\u1800-\\u180a\\u1944-\\u1945\\u1a1e-\\u1a1f\\u1aa0-\\u1aa6\\u1aa8-\\u1aad\\u1b5a-\\u1b60\\u1bfc-\\u1bff\\u1c3b-\\u1c3f\\u1c7e-\\u1c7f\\u1cc0-\\u1cc7\\u1cd3\\u2010-\\u2027\\u2030-\\u2043\\u2045-\\u2051\\u2053-\\u205e\\u207d-\\u207e\\u208d-\\u208e\\u2308-\\u230b\\u2329-\\u232a\\u2768-\\u2775\\u27c5-\\u27c6\\u27e6-\\u27ef\\u2983-\\u2998\\u29d8-\\u29db\\u29fc-\\u29fd\\u2cf9-\\u2cfc\\u2cfe-\\u2cff\\u2d70\\u2e00-\\u2e2e\\u2e30-\\u2e4f\\u3001-\\u3003\\u3008-\\u3011\\u3014-\\u301f\\u3030\\u303d\\u30a0\\u30fb\\ua4fe-\\ua4ff\\ua60d-\\ua60f\\ua673\\ua67e\\ua6f2-\\ua6f7\\ua874-\\ua877\\ua8ce-\\ua8cf\\ua8f8-\\ua8fa\\ua8fc\\ua92e-\\ua92f\\ua95f\\ua9c1-\\ua9cd\\ua9de-\\ua9df\\uaa5c-\\uaa5f\\uaade-\\uaadf\\uaaf0-\\uaaf1\\uabeb\\ufd3e-\\ufd3f\\ufe10-\\ufe19\\ufe30-\\ufe52\\ufe54-\\ufe61\\ufe63\\ufe68\\ufe6a-\\ufe6b\\uff01-\\uff03\\uff05-\\uff0a\\uff0c-\\uff0f\\uff1a-\\uff1b\\uff1f-\\uff20\\uff3b-\\uff3d\\uff3f\\uff5b\\uff5d\\uff5f-\\uff65]|\\ud800[\\udd00-\\udd02\\udf9f\\udfd0]|\\ud801[\\udd6f]|\\ud802[\\udc57\\udd1f\\udd3f\\ude50-\\ude58\\ude7f\\udef0-\\udef6\\udf39-\\udf3f\\udf99-\\udf9c]|\\ud803[\\udf55-\\udf59]|\\ud804[\\udc47-\\udc4d\\udcbb-\\udcbc\\udcbe-\\udcc1\\udd40-\\udd43\\udd74-\\udd75\\uddc5-\\uddc8\\uddcd\\udddb\\udddd-\\udddf\\ude38-\\ude3d\\udea9]|\\ud805[\\udc4b-\\udc4f\\udc5b\\udc5d\\udcc6\\uddc1-\\uddd7\\ude41-\\ude43\\ude60-\\ude6c\\udf3c-\\udf3e]|\\ud806[\\udc3b\\udde2\\ude3f-\\ude46\\ude9a-\\ude9c\\ude9e-\\udea2]|\\ud807[\\udc41-\\udc45\\udc70-\\udc71\\udef7-\\udef8\\udfff]|\\ud809[\\udc70-\\udc74]|\\ud81a[\\ude6e-\\ude6f\\udef5\\udf37-\\udf3b\\udf44]|\\ud81b[\\ude97-\\ude9a\\udfe2]|\\ud82f[\\udc9f]|\\ud836[\\ude87-\\ude8b]|\\ud83a[\\udd5e-\\udd5f]"
        };
      }
    }),
        Kn = Z({
      "src/language-markdown/utils.js": function srcLanguageMarkdownUtilsJs(e, n) {
        "use strict";

        ae();

        var _Ge36 = Ge(),
            t = _Ge36.getLast,
            _fo = fo(),
            s = _fo.locStart,
            i = _fo.locEnd,
            _Ad = Ad(),
            r = _Ad.cjkPattern,
            u = _Ad.kPattern,
            a = _Ad.punctuationPattern,
            c = ["liquidNode", "inlineCode", "emphasis", "esComment", "strong", "delete", "wikiLink", "link", "linkReference", "image", "imageReference", "footnote", "footnoteReference", "sentence", "whitespace", "word", "break", "inlineMath"],
            l = [].concat(c, ["tableCell", "paragraph", "heading"]),
            C = new RegExp(u),
            m = new RegExp(a);

        function g(A, b) {
          var v = "non-cjk",
              B = "cj-letter",
              w = "k-letter",
              I = "cjk-punctuation",
              E = [],
              D = (b.proseWrap === "preserve" ? A : A.replace(new RegExp("(".concat(r, ")\n(").concat(r, ")"), "g"), "$1$2")).split(/([\t\n ]+)/);

          var _iterator49 = _createForOfIteratorHelper(D.entries()),
              _step49;

          try {
            for (_iterator49.s(); !(_step49 = _iterator49.n()).done;) {
              var _step49$value = _slicedToArray(_step49.value, 2),
                  y = _step49$value[0],
                  o = _step49$value[1];

              if (y % 2 === 1) {
                E.push({
                  type: "whitespace",
                  value: /\n/.test(o) ? "\n" : " "
                });
                continue;
              }

              if ((y === 0 || y === D.length - 1) && o === "") continue;
              var x = o.split(new RegExp("(".concat(r, ")")));

              var _iterator50 = _createForOfIteratorHelper(x.entries()),
                  _step50;

              try {
                for (_iterator50.s(); !(_step50 = _iterator50.n()).done;) {
                  var _step50$value = _slicedToArray(_step50.value, 2),
                      F = _step50$value[0],
                      S = _step50$value[1];

                  if (!((F === 0 || F === x.length - 1) && S === "")) {
                    if (F % 2 === 0) {
                      S !== "" && d({
                        type: "word",
                        value: S,
                        kind: v,
                        hasLeadingPunctuation: m.test(S[0]),
                        hasTrailingPunctuation: m.test(t(S))
                      });
                      continue;
                    }

                    d(m.test(S) ? {
                      type: "word",
                      value: S,
                      kind: I,
                      hasLeadingPunctuation: !0,
                      hasTrailingPunctuation: !0
                    } : {
                      type: "word",
                      value: S,
                      kind: C.test(S) ? w : B,
                      hasLeadingPunctuation: !1,
                      hasTrailingPunctuation: !1
                    });
                  }
                }
              } catch (err) {
                _iterator50.e(err);
              } finally {
                _iterator50.f();
              }
            }
          } catch (err) {
            _iterator49.e(err);
          } finally {
            _iterator49.f();
          }

          return E;

          function d(y) {
            var o = t(E);
            o && o.type === "word" && (o.kind === v && y.kind === B && !o.hasTrailingPunctuation || o.kind === B && y.kind === v && !y.hasLeadingPunctuation ? E.push({
              type: "whitespace",
              value: " "
            }) : !x(v, I) && ![o.value, y.value].some(function (F) {
              return /\u3000/.test(F);
            }) && E.push({
              type: "whitespace",
              value: ""
            })), E.push(y);

            function x(F, S) {
              return o.kind === F && y.kind === S || o.kind === S && y.kind === F;
            }
          }
        }

        function p(A, b) {
          var _b$slice$match = b.slice(A.position.start.offset, A.position.end.offset).match(/^\s*(\d+)(\.|\))(\s*)/),
              _b$slice$match2 = _slicedToArray(_b$slice$match, 4),
              v = _b$slice$match2[1],
              B = _b$slice$match2[2],
              w = _b$slice$match2[3];

          return {
            numberText: v,
            marker: B,
            leadingSpaces: w
          };
        }

        function f(A, b) {
          if (!A.ordered || A.children.length < 2) return !1;
          var v = Number(p(A.children[0], b.originalText).numberText),
              B = Number(p(A.children[1], b.originalText).numberText);

          if (v === 0 && A.children.length > 2) {
            var w = Number(p(A.children[2], b.originalText).numberText);
            return B === 1 && w === 1;
          }

          return B === 1;
        }

        function h(A, b) {
          var v = A.value;
          return A.position.end.offset === b.length && v.endsWith("\n") && b.endsWith("\n") ? v.slice(0, -1) : v;
        }

        function N(A, b) {
          return function v(B, w, I) {
            var E = Object.assign({}, b(B, w, I));
            return E.children && (E.children = E.children.map(function (D, d) {
              return v(D, d, [E].concat(_toConsumableArray(I)));
            })), E;
          }(A, null, []);
        }

        function T(A) {
          if (!A || A.type !== "link" || A.children.length !== 1) return !1;
          var b = A.children[0];
          return b && s(A) === s(b) && i(A) === i(b);
        }

        n.exports = {
          mapAst: N,
          splitText: g,
          punctuationPattern: a,
          getFencedCodeBlockValue: h,
          getOrderedListItemInfo: p,
          hasGitDiffFriendlyOrderedList: f,
          INLINE_NODE_TYPES: c,
          INLINE_NODE_WRAPPER_TYPES: l,
          isAutolink: T
        };
      }
    }),
        Sd = Z({
      "src/language-markdown/embed.js": function srcLanguageMarkdownEmbedJs(e, n) {
        "use strict";

        ae();

        var _Ge37 = Ge(),
            t = _Ge37.inferParserByLanguage,
            s = _Ge37.getMaxContinuousCount,
            _Le43 = Le(),
            _Le43$builders = _Le43.builders,
            i = _Le43$builders.hardline,
            r = _Le43$builders.markAsRoot,
            u = _Le43.utils.replaceEndOfLine,
            a = Xn(),
            _Kn = Kn(),
            c = _Kn.getFencedCodeBlockValue;

        function l(C, m, g, p) {
          var f = C.getValue();

          if (f.type === "code" && f.lang !== null) {
            var _h5 = t(f.lang, p);

            if (_h5) {
              var _N10 = p.__inJsTemplate ? "~" : "`",
                  T = _N10.repeat(Math.max(3, s(f.value, _N10) + 1)),
                  A = {
                parser: _h5
              };

              f.lang === "tsx" && (A.filepath = "dummy.tsx");
              var b = g(c(f, p.originalText), A, {
                stripTrailingHardline: !0
              });
              return r([T, f.lang, f.meta ? " " + f.meta : "", i, u(b), i, T]);
            }
          }

          switch (f.type) {
            case "front-matter":
              return a(f, g);

            case "importExport":
              return [g(f.value, {
                parser: "babel"
              }, {
                stripTrailingHardline: !0
              }), i];

            case "jsx":
              return g("<$>".concat(f.value, "</$>"), {
                parser: "__js_expression",
                rootMarker: "mdx"
              }, {
                stripTrailingHardline: !0
              });
          }

          return null;
        }

        n.exports = l;
      }
    }),
        Do = Z({
      "src/language-markdown/pragma.js": function srcLanguageMarkdownPragmaJs(e, n) {
        "use strict";

        ae();
        var t = po(),
            s = ["format", "prettier"];

        function i(r) {
          var u = "@(".concat(s.join("|"), ")"),
              a = new RegExp(["<!--\\s*".concat(u, "\\s*-->"), "{\\s*\\/\\*\\s*".concat(u, "\\s*\\*\\/\\s*}"), "<!--.*\r?\n[\\s\\S]*(^|\n)[^\\S\n]*".concat(u, "[^\\S\n]*($|\n)[\\s\\S]*\n.*-->")].join("|"), "m"),
              c = r.match(a);
          return c && c.index === 0;
        }

        n.exports = {
          startWithPragma: i,
          hasPragma: function hasPragma(r) {
            return i(t(r).content.trimStart());
          },
          insertPragma: function insertPragma(r) {
            var u = t(r),
                a = "<!-- @".concat(s[0], " -->");
            return u.frontMatter ? "".concat(u.frontMatter.raw, "\n\n").concat(a, "\n\n").concat(u.content) : "".concat(a, "\n\n").concat(u.content);
          }
        };
      }
    }),
        xd = Z({
      "src/language-markdown/print-preprocess.js": function srcLanguageMarkdownPrintPreprocessJs(e, n) {
        "use strict";

        ae();

        var t = st(),
            _Kn2 = Kn(),
            s = _Kn2.getOrderedListItemInfo,
            i = _Kn2.mapAst,
            r = _Kn2.splitText,
            u = /^(?:[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])$/;

        function a(T, A) {
          return T = C(T, A), T = p(T), T = l(T), T = h(T, A), T = N(T, A), T = f(T, A), T = c(T), T = m(T), T;
        }

        function c(T) {
          return i(T, function (A) {
            return A.type !== "import" && A.type !== "export" ? A : Object.assign(Object.assign({}, A), {}, {
              type: "importExport"
            });
          });
        }

        function l(T) {
          return i(T, function (A) {
            return A.type !== "inlineCode" ? A : Object.assign(Object.assign({}, A), {}, {
              value: A.value.replace(/\s+/g, " ")
            });
          });
        }

        function C(T, A) {
          return i(T, function (b) {
            return b.type !== "text" || b.value === "*" || b.value === "_" || !u.test(b.value) || b.position.end.offset - b.position.start.offset === b.value.length ? b : Object.assign(Object.assign({}, b), {}, {
              value: A.originalText.slice(b.position.start.offset, b.position.end.offset)
            });
          });
        }

        function m(T) {
          return g(T, function (A, b) {
            return A.type === "importExport" && b.type === "importExport";
          }, function (A, b) {
            return {
              type: "importExport",
              value: A.value + "\n\n" + b.value,
              position: {
                start: A.position.start,
                end: b.position.end
              }
            };
          });
        }

        function g(T, A, b) {
          return i(T, function (v) {
            if (!v.children) return v;
            var B = v.children.reduce(function (w, I) {
              var E = t(w);
              return E && A(E, I) ? w.splice(-1, 1, b(E, I)) : w.push(I), w;
            }, []);
            return Object.assign(Object.assign({}, v), {}, {
              children: B
            });
          });
        }

        function p(T) {
          return g(T, function (A, b) {
            return A.type === "text" && b.type === "text";
          }, function (A, b) {
            return {
              type: "text",
              value: A.value + b.value,
              position: {
                start: A.position.start,
                end: b.position.end
              }
            };
          });
        }

        function f(T, A) {
          return i(T, function (b, v, B) {
            var _B = _slicedToArray(B, 1),
                w = _B[0];

            if (b.type !== "text") return b;
            var I = b.value;
            return w.type === "paragraph" && (v === 0 && (I = I.trimStart()), v === w.children.length - 1 && (I = I.trimEnd())), {
              type: "sentence",
              position: b.position,
              children: r(I, A)
            };
          });
        }

        function h(T, A) {
          return i(T, function (b, v, B) {
            if (b.type === "code") {
              var w = /^\n?(?: {4,}|\t)/.test(A.originalText.slice(b.position.start.offset, b.position.end.offset));
              if (b.isIndented = w, w) for (var I = 0; I < B.length; I++) {
                var E = B[I];
                if (E.hasIndentedCodeblock) break;
                E.type === "list" && (E.hasIndentedCodeblock = !0);
              }
            }

            return b;
          });
        }

        function N(T, A) {
          return i(T, function (B, w, I) {
            if (B.type === "list" && B.children.length > 0) {
              for (var E = 0; E < I.length; E++) {
                var D = I[E];
                if (D.type === "list" && !D.isAligned) return B.isAligned = !1, B;
              }

              B.isAligned = v(B);
            }

            return B;
          });

          function b(B) {
            return B.children.length === 0 ? -1 : B.children[0].position.start.column - 1;
          }

          function v(B) {
            if (!B.ordered) return !0;

            var _B$children = _slicedToArray(B.children, 2),
                w = _B$children[0],
                I = _B$children[1];

            if (s(w, A.originalText).leadingSpaces.length > 1) return !0;
            var D = b(w);
            if (D === -1) return !1;
            if (B.children.length === 1) return D % A.tabWidth === 0;
            var d = b(I);
            return D !== d ? !1 : D % A.tabWidth === 0 ? !0 : s(I, A.originalText).leadingSpaces.length > 1;
          }
        }

        n.exports = a;
      }
    }),
        bd = Z({
      "src/language-markdown/clean.js": function srcLanguageMarkdownCleanJs(e, n) {
        "use strict";

        ae();

        var _Ge38 = Ge(),
            t = _Ge38.isFrontMatterNode,
            _Do = Do(),
            s = _Do.startWithPragma,
            i = new Set(["position", "raw"]);

        function r(u, a, c) {
          if ((u.type === "front-matter" || u.type === "code" || u.type === "yaml" || u.type === "import" || u.type === "export" || u.type === "jsx") && delete a.value, u.type === "list" && delete a.isAligned, (u.type === "list" || u.type === "listItem") && (delete a.spread, delete a.loose), u.type === "text" || (u.type === "inlineCode" && (a.value = u.value.replace(/[\t\n ]+/g, " ")), u.type === "wikiLink" && (a.value = u.value.trim().replace(/[\t\n]+/g, " ")), (u.type === "definition" || u.type === "linkReference") && (a.label = u.label.trim().replace(/[\t\n ]+/g, " ").toLowerCase()), (u.type === "definition" || u.type === "link" || u.type === "image") && u.title && (a.title = u.title.replace(/\\(["')])/g, "$1")), c && c.type === "root" && c.children.length > 0 && (c.children[0] === u || t(c.children[0]) && c.children[1] === u) && u.type === "html" && s(u.value))) return null;
        }

        r.ignoredProperties = i, n.exports = r;
      }
    }),
        Td = Z({
      "src/language-markdown/printer-markdown.js": function srcLanguageMarkdownPrinterMarkdownJs(e, n) {
        "use strict";

        ae();

        var _Ge39 = Ge(),
            t = _Ge39.getLast,
            s = _Ge39.getMinNotPresentContinuousCount,
            i = _Ge39.getMaxContinuousCount,
            r = _Ge39.getStringWidth,
            u = _Ge39.isNonEmptyArray,
            _Le44 = Le(),
            _Le44$builders = _Le44.builders,
            a = _Le44$builders.breakParent,
            c = _Le44$builders.join,
            l = _Le44$builders.line,
            C = _Le44$builders.literalline,
            m = _Le44$builders.markAsRoot,
            g = _Le44$builders.hardline,
            p = _Le44$builders.softline,
            f = _Le44$builders.ifBreak,
            h = _Le44$builders.fill,
            N = _Le44$builders.align,
            T = _Le44$builders.indent,
            A = _Le44$builders.group,
            b = _Le44$builders.hardlineWithoutBreakParent,
            _Le44$utils = _Le44.utils,
            v = _Le44$utils.normalizeDoc,
            B = _Le44$utils.replaceTextEndOfLine,
            w = _Le44.printer.printDocToString,
            I = Sd(),
            _Do2 = Do(),
            E = _Do2.insertPragma,
            _fo2 = fo(),
            D = _fo2.locStart,
            d = _fo2.locEnd,
            y = xd(),
            o = bd(),
            _Kn3 = Kn(),
            x = _Kn3.getFencedCodeBlockValue,
            F = _Kn3.hasGitDiffFriendlyOrderedList,
            S = _Kn3.splitText,
            k = _Kn3.punctuationPattern,
            _ = _Kn3.INLINE_NODE_TYPES,
            O = _Kn3.INLINE_NODE_WRAPPER_TYPES,
            R = _Kn3.isAutolink,
            M = new Set(["importExport"]),
            H = ["heading", "tableCell", "link", "wikiLink"],
            P = new Set(["listItem", "definition", "footnoteDefinition"]);

        function G(fe, pe, me) {
          var ce = fe.getValue();
          if (de(fe)) return S(pe.originalText.slice(ce.position.start.offset, ce.position.end.offset), pe).map(function (he) {
            return he.type === "word" ? he.value : he.value === "" ? "" : se(fe, he.value, pe);
          });

          switch (ce.type) {
            case "front-matter":
              return pe.originalText.slice(ce.position.start.offset, ce.position.end.offset);

            case "root":
              return ce.children.length === 0 ? "" : [v(oe(fe, pe, me)), M.has(Ee(ce).type) ? "" : g];

            case "paragraph":
              return K(fe, pe, me, {
                postprocessor: h
              });

            case "sentence":
              return K(fe, pe, me);

            case "word":
              {
                var he = ce.value.replace(/\*/g, "\\$&").replace(new RegExp(["(^|".concat(k, ")(_+)"), "(_+)(".concat(k, "|$)")].join("|"), "g"), function (X, Y, te, z, j) {
                  return (te ? "".concat(Y).concat(te) : "".concat(z).concat(j)).replace(/_/g, "\\_");
                }),
                    J = function J(X, Y, te) {
                  return X.type === "sentence" && te === 0;
                },
                    ye = function ye(X, Y, te) {
                  return R(X.children[te - 1]);
                };

                return he !== ce.value && (fe.match(void 0, J, ye) || fe.match(void 0, J, function (X, Y, te) {
                  return X.type === "emphasis" && te === 0;
                }, ye)) && (he = he.replace(/^(\\?[*_])+/, function (X) {
                  return X.replace(/\\/g, "");
                })), he;
              }

            case "whitespace":
              {
                var _he5 = fe.getParentNode(),
                    _J = _he5.children.indexOf(ce),
                    _ye = _he5.children[_J + 1],
                    X = _ye && /^>|^(?:[*+-]|#{1,6}|\d+[).])$/.test(_ye.value) ? "never" : pe.proseWrap;

                return se(fe, ce.value, {
                  proseWrap: X
                });
              }

            case "emphasis":
              {
                var _he6;

                if (R(ce.children[0])) _he6 = pe.originalText[ce.position.start.offset];else {
                  var _J2 = fe.getParentNode(),
                      _ye2 = _J2.children.indexOf(ce),
                      _X = _J2.children[_ye2 - 1],
                      Y = _J2.children[_ye2 + 1];

                  _he6 = _X && _X.type === "sentence" && _X.children.length > 0 && t(_X.children).type === "word" && !t(_X.children).hasTrailingPunctuation || Y && Y.type === "sentence" && Y.children.length > 0 && Y.children[0].type === "word" && !Y.children[0].hasLeadingPunctuation || ne(fe, "emphasis") ? "*" : "_";
                }
                return [_he6, K(fe, pe, me), _he6];
              }

            case "strong":
              return ["**", K(fe, pe, me), "**"];

            case "delete":
              return ["~~", K(fe, pe, me), "~~"];

            case "inlineCode":
              {
                var _he7 = s(ce.value, "`"),
                    _J3 = "`".repeat(_he7 || 1),
                    _ye3 = _he7 && !/^\s/.test(ce.value) ? " " : "";

                return [_J3, _ye3, ce.value, _ye3, _J3];
              }

            case "wikiLink":
              {
                var _he8 = "";
                return pe.proseWrap === "preserve" ? _he8 = ce.value : _he8 = ce.value.replace(/[\t\n]+/g, " "), ["[[", _he8, "]]"];
              }

            case "link":
              switch (pe.originalText[ce.position.start.offset]) {
                case "<":
                  {
                    var _he9 = "mailto:",
                        _J4 = ce.url.startsWith(_he9) && pe.originalText.slice(ce.position.start.offset + 1, ce.position.start.offset + 1 + _he9.length) !== _he9 ? ce.url.slice(_he9.length) : ce.url;

                    return ["<", _J4, ">"];
                  }

                case "[":
                  return ["[", K(fe, pe, me), "](", ge(ce.url, ")"), ve(ce.title, pe), ")"];

                default:
                  return pe.originalText.slice(ce.position.start.offset, ce.position.end.offset);
              }

            case "image":
              return ["![", ce.alt || "", "](", ge(ce.url, ")"), ve(ce.title, pe), ")"];

            case "blockquote":
              return ["> ", N("> ", K(fe, pe, me))];

            case "heading":
              return ["#".repeat(ce.depth) + " ", K(fe, pe, me)];

            case "code":
              {
                if (ce.isIndented) {
                  var _ye4 = " ".repeat(4);

                  return N(_ye4, [_ye4].concat(_toConsumableArray(B(ce.value, g))));
                }

                var _he10 = pe.__inJsTemplate ? "~" : "`",
                    _J5 = _he10.repeat(Math.max(3, i(ce.value, _he10) + 1));

                return [_J5, ce.lang || "", ce.meta ? " " + ce.meta : "", g].concat(_toConsumableArray(B(x(ce, pe.originalText), g)), [g, _J5]);
              }

            case "html":
              {
                var _he11 = fe.getParentNode(),
                    _J6 = _he11.type === "root" && t(_he11.children) === ce ? ce.value.trimEnd() : ce.value,
                    _ye5 = /^<!\x2D\x2D[\s\S]*\x2D\x2D>$/.test(_J6);

                return B(_J6, _ye5 ? g : m(C));
              }

            case "list":
              {
                var _he12 = W(ce, fe.getParentNode()),
                    _J7 = F(ce, pe);

                return K(fe, pe, me, {
                  processor: function processor(ye, X) {
                    var Y = z(),
                        te = ye.getValue();
                    if (te.children.length === 2 && te.children[1].type === "html" && te.children[0].position.start.column !== te.children[1].position.start.column) return [Y, re(ye, pe, me, Y)];
                    return [Y, N(" ".repeat(Y.length), re(ye, pe, me, Y))];

                    function z() {
                      var j = ce.ordered ? (X === 0 ? ce.start : _J7 ? 1 : ce.start + X) + (_he12 % 2 === 0 ? ". " : ") ") : _he12 % 2 === 0 ? "- " : "* ";
                      return ce.isAligned || ce.hasIndentedCodeblock ? $(j, pe) : j;
                    }
                  }
                });
              }

            case "thematicBreak":
              {
                var _he13 = U(fe, "list");

                return _he13 === -1 ? "---" : W(fe.getParentNode(_he13), fe.getParentNode(_he13 + 1)) % 2 === 0 ? "***" : "---";
              }

            case "linkReference":
              return ["[", K(fe, pe, me), "]", ce.referenceType === "full" ? ["[", ce.identifier, "]"] : ce.referenceType === "collapsed" ? "[]" : ""];

            case "imageReference":
              switch (ce.referenceType) {
                case "full":
                  return ["![", ce.alt || "", "][", ce.identifier, "]"];

                default:
                  return ["![", ce.alt, "]", ce.referenceType === "collapsed" ? "[]" : ""];
              }

            case "definition":
              {
                var _he14 = pe.proseWrap === "always" ? l : " ";

                return A(["[", ce.identifier, "]:", T([_he14, ge(ce.url), ce.title === null ? "" : [_he14, ve(ce.title, pe, !1)]])]);
              }

            case "footnote":
              return ["[^", K(fe, pe, me), "]"];

            case "footnoteReference":
              return ["[^", ce.identifier, "]"];

            case "footnoteDefinition":
              {
                var _he15 = fe.getParentNode().children[fe.getName() + 1],
                    _J8 = ce.children.length === 1 && ce.children[0].type === "paragraph" && (pe.proseWrap === "never" || pe.proseWrap === "preserve" && ce.children[0].position.start.line === ce.children[0].position.end.line);

                return ["[^", ce.identifier, "]: ", _J8 ? K(fe, pe, me) : A([N(" ".repeat(4), K(fe, pe, me, {
                  processor: function processor(ye, X) {
                    return X === 0 ? A([p, me()]) : me();
                  }
                })), _he15 && _he15.type === "footnoteDefinition" ? p : ""])];
              }

            case "table":
              return V(fe, pe, me);

            case "tableCell":
              return K(fe, pe, me);

            case "break":
              return /\s/.test(pe.originalText[ce.position.start.offset]) ? ["  ", m(C)] : ["\\", g];

            case "liquidNode":
              return B(ce.value, g);

            case "importExport":
              return [ce.value, g];

            case "esComment":
              return ["{/* ", ce.value, " */}"];

            case "jsx":
              return ce.value;

            case "math":
              return ["$$", g, ce.value ? [].concat(_toConsumableArray(B(ce.value, g)), [g]) : "", "$$"];

            case "inlineMath":
              return pe.originalText.slice(D(ce), d(ce));

            case "tableRow":
            case "listItem":
            default:
              throw new Error("Unknown markdown type ".concat(JSON.stringify(ce.type)));
          }
        }

        function re(fe, pe, me, ce) {
          var he = fe.getValue(),
              J = he.checked === null ? "" : he.checked ? "[x] " : "[ ] ";
          return [J, K(fe, pe, me, {
            processor: function processor(ye, X) {
              if (X === 0 && ye.getValue().type !== "list") return N(" ".repeat(J.length), me());
              var Y = " ".repeat(xe(pe.tabWidth - ce.length, 0, 3));
              return [Y, N(Y, me())];
            }
          })];
        }

        function $(fe, pe) {
          var me = ce();
          return fe + " ".repeat(me >= 4 ? 0 : me);

          function ce() {
            var he = fe.length % pe.tabWidth;
            return he === 0 ? 0 : pe.tabWidth - he;
          }
        }

        function W(fe, pe) {
          return ee(fe, pe, function (me) {
            return me.ordered === fe.ordered;
          });
        }

        function ee(fe, pe, me) {
          var ce = -1;

          var _iterator51 = _createForOfIteratorHelper(pe.children),
              _step51;

          try {
            for (_iterator51.s(); !(_step51 = _iterator51.n()).done;) {
              var he = _step51.value;
              if (he.type === fe.type && me(he) ? ce++ : ce = -1, he === fe) return ce;
            }
          } catch (err) {
            _iterator51.e(err);
          } finally {
            _iterator51.f();
          }
        }

        function U(fe, pe) {
          var me = Array.isArray(pe) ? pe : [pe],
              ce = -1,
              he;

          for (; he = fe.getParentNode(++ce);) {
            if (me.includes(he.type)) return ce;
          }

          return -1;
        }

        function ne(fe, pe) {
          var me = U(fe, pe);
          return me === -1 ? null : fe.getParentNode(me);
        }

        function se(fe, pe, me) {
          if (me.proseWrap === "preserve" && pe === "\n") return g;
          var ce = me.proseWrap === "always" && !ne(fe, H);
          return pe !== "" ? ce ? l : " " : ce ? p : "";
        }

        function V(fe, pe, me) {
          var ce = fe.getValue(),
              he = [],
              J = fe.map(function (j) {
            return j.map(function (Ce, Ne) {
              var je = w(me(), pe).formatted,
                  Ue = r(je);
              return he[Ne] = Math.max(he[Ne] || 3, Ue), {
                text: je,
                width: Ue
              };
            }, "children");
          }, "children"),
              ye = Y(!1);
          if (pe.proseWrap !== "never") return [a, ye];
          var X = Y(!0);
          return [a, A(f(X, ye))];

          function Y(j) {
            var Ce = [z(J[0], j), te(j)];
            return J.length > 1 && Ce.push(c(b, J.slice(1).map(function (Ne) {
              return z(Ne, j);
            }))), c(b, Ce);
          }

          function te(j) {
            var Ce = he.map(function (Ne, je) {
              var Ue = ce.align[je],
                  tt = Ue === "center" || Ue === "left" ? ":" : "-",
                  Te = Ue === "center" || Ue === "right" ? ":" : "-",
                  _e = j ? "-" : "-".repeat(Ne - 2);

              return "".concat(tt).concat(_e).concat(Te);
            });
            return "| ".concat(Ce.join(" | "), " |");
          }

          function z(j, Ce) {
            var Ne = j.map(function (je, Ue) {
              var tt = je.text,
                  Te = je.width;
              if (Ce) return tt;

              var _e = he[Ue] - Te,
                  Fe = ce.align[Ue],
                  Ke = 0;

              Fe === "right" ? Ke = _e : Fe === "center" && (Ke = Math.floor(_e / 2));
              var Se = _e - Ke;
              return "".concat(" ".repeat(Ke)).concat(tt).concat(" ".repeat(Se));
            });
            return "| ".concat(Ne.join(" | "), " |");
          }
        }

        function oe(fe, pe, me) {
          var ce = [],
              he = null,
              _fe$getValue = fe.getValue(),
              J = _fe$getValue.children;

          var _iterator52 = _createForOfIteratorHelper(J.entries()),
              _step52;

          try {
            for (_iterator52.s(); !(_step52 = _iterator52.n()).done;) {
              var _step52$value = _slicedToArray(_step52.value, 2),
                  ye = _step52$value[0],
                  X = _step52$value[1];

              switch (q(X)) {
                case "start":
                  he === null && (he = {
                    index: ye,
                    offset: X.position.end.offset
                  });
                  break;

                case "end":
                  he !== null && (ce.push({
                    start: he,
                    end: {
                      index: ye,
                      offset: X.position.start.offset
                    }
                  }), he = null);
                  break;

                default:
                  break;
              }
            }
          } catch (err) {
            _iterator52.e(err);
          } finally {
            _iterator52.f();
          }

          return K(fe, pe, me, {
            processor: function processor(ye, X) {
              if (ce.length > 0) {
                var Y = ce[0];
                if (X === Y.start.index) return [J[Y.start.index].value, pe.originalText.slice(Y.start.offset, Y.end.offset), J[Y.end.index].value];
                if (Y.start.index < X && X < Y.end.index) return !1;
                if (X === Y.end.index) return ce.shift(), !1;
              }

              return me();
            }
          });
        }

        function K(fe, pe, me) {
          var ce = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {},
              he = ce.postprocessor,
              J = ce.processor || function () {
            return me();
          },
              ye = fe.getValue(),
              X = [],
              Y;

          return fe.each(function (te, z) {
            var j = te.getValue(),
                Ce = J(te, z);

            if (Ce !== !1) {
              var Ne = {
                parts: X,
                prevNode: Y,
                parentNode: ye,
                options: pe
              };
              le(j, Ne) && (X.push(g), Y && M.has(Y.type) || (ue(j, Ne) || Q(j, Ne)) && X.push(g), Q(j, Ne) && X.push(g)), X.push(Ce), Y = j;
            }
          }, "children"), he ? he(X) : X;
        }

        function Ee(fe) {
          var pe = fe;

          for (; u(pe.children);) {
            pe = t(pe.children);
          }

          return pe;
        }

        function q(fe) {
          var pe;
          if (fe.type === "html") pe = fe.value.match(/^<!--\s*prettier-ignore(?:-(start|end))?\s*-->$/);else {
            var me;
            fe.type === "esComment" ? me = fe : fe.type === "paragraph" && fe.children.length === 1 && fe.children[0].type === "esComment" && (me = fe.children[0]), me && (pe = me.value.match(/^prettier-ignore(?:-(start|end))?$/));
          }
          return pe ? pe[1] ? pe[1] : "next" : !1;
        }

        function le(fe, pe) {
          var me = pe.parts.length === 0,
              ce = _.includes(fe.type),
              he = fe.type === "html" && O.includes(pe.parentNode.type);

          return !me && !ce && !he;
        }

        function ue(fe, pe) {
          var ce = (pe.prevNode && pe.prevNode.type) === fe.type && P.has(fe.type),
              he = pe.parentNode.type === "listItem" && !pe.parentNode.loose,
              J = pe.prevNode && pe.prevNode.type === "listItem" && pe.prevNode.loose,
              ye = q(pe.prevNode) === "next",
              X = fe.type === "html" && pe.prevNode && pe.prevNode.type === "html" && pe.prevNode.position.end.line + 1 === fe.position.start.line,
              Y = fe.type === "html" && pe.parentNode.type === "listItem" && pe.prevNode && pe.prevNode.type === "paragraph" && pe.prevNode.position.end.line + 1 === fe.position.start.line;
          return J || !(ce || he || ye || X || Y);
        }

        function Q(fe, pe) {
          var me = pe.prevNode && pe.prevNode.type === "list",
              ce = fe.type === "code" && fe.isIndented;
          return me && ce;
        }

        function de(fe) {
          var pe = ne(fe, ["linkReference", "imageReference"]);
          return pe && (pe.type !== "linkReference" || pe.referenceType !== "full");
        }

        function ge(fe) {
          var pe = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [],
              me = [" "].concat(_toConsumableArray(Array.isArray(pe) ? pe : [pe]));
          return new RegExp(me.map(function (ce) {
            return "\\".concat(ce);
          }).join("|")).test(fe) ? "<".concat(fe, ">") : fe;
        }

        function ve(fe, pe) {
          var me = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
          if (!fe) return "";
          if (me) return " " + ve(fe, pe, !1);
          if (fe = fe.replace(/\\(["')])/g, "$1"), fe.includes('"') && fe.includes("'") && !fe.includes(")")) return "(".concat(fe, ")");
          var ce = fe.split("'").length - 1,
              he = fe.split('"').length - 1,
              J = ce > he ? '"' : he > ce || pe.singleQuote ? "'" : '"';
          return fe = fe.replace(/\\/, "\\\\"), fe = fe.replace(new RegExp("(".concat(J, ")"), "g"), "\\$1"), "".concat(J).concat(fe).concat(J);
        }

        function xe(fe, pe, me) {
          return fe < pe ? pe : fe > me ? me : fe;
        }

        function we(fe) {
          var pe = Number(fe.getName());
          if (pe === 0) return !1;
          var me = fe.getParentNode().children[pe - 1];
          return q(me) === "next";
        }

        n.exports = {
          preprocess: y,
          print: G,
          embed: I,
          massageAstNode: o,
          hasPrettierIgnore: we,
          insertPragma: E
        };
      }
    }),
        Bd = Z({
      "src/language-markdown/options.js": function srcLanguageMarkdownOptionsJs(e, n) {
        "use strict";

        ae();
        var t = Lt();
        n.exports = {
          proseWrap: t.proseWrap,
          singleQuote: t.singleQuote
        };
      }
    }),
        Nd = Z({
      "src/language-markdown/parsers.js": function srcLanguageMarkdownParsersJs() {
        ae();
      }
    }),
        di = Z({
      "node_modules/linguist-languages/data/Markdown.json": function node_modulesLinguistLanguagesDataMarkdownJson(e, n) {
        n.exports = {
          name: "Markdown",
          type: "prose",
          color: "#083fa1",
          aliases: ["pandoc"],
          aceMode: "markdown",
          codemirrorMode: "gfm",
          codemirrorMimeType: "text/x-gfm",
          wrap: !0,
          extensions: [".md", ".markdown", ".mdown", ".mdwn", ".mdx", ".mkd", ".mkdn", ".mkdown", ".ronn", ".scd", ".workbook"],
          filenames: ["contents.lr"],
          tmScope: "source.gfm",
          languageId: 222
        };
      }
    }),
        wd = Z({
      "src/language-markdown/index.js": function srcLanguageMarkdownIndexJs(e, n) {
        "use strict";

        ae();
        var t = bt(),
            s = Td(),
            i = Bd(),
            r = Nd(),
            u = [t(di(), function (c) {
          return {
            since: "1.8.0",
            parsers: ["markdown"],
            vscodeLanguageIds: ["markdown"],
            filenames: [].concat(_toConsumableArray(c.filenames), ["README"]),
            extensions: c.extensions.filter(function (l) {
              return l !== ".mdx";
            })
          };
        }), t(di(), function () {
          return {
            name: "MDX",
            since: "1.15.0",
            parsers: ["mdx"],
            vscodeLanguageIds: ["mdx"],
            filenames: [],
            extensions: [".mdx"]
          };
        })],
            a = {
          mdast: s
        };
        n.exports = {
          languages: u,
          options: i,
          printers: a,
          parsers: r
        };
      }
    }),
        _d = Z({
      "src/language-html/clean.js": function srcLanguageHtmlCleanJs(e, n) {
        "use strict";

        ae();

        var _Ge40 = Ge(),
            t = _Ge40.isFrontMatterNode,
            s = new Set(["sourceSpan", "startSourceSpan", "endSourceSpan", "nameSpan", "valueSpan", "parent"]);

        function i(r, u) {
          if (r.type === "text" || r.type === "comment" || t(r) || r.type === "yaml" || r.type === "toml") return null;
          r.type === "attribute" && delete u.value, r.type === "docType" && delete u.value;
        }

        i.ignoredProperties = s, n.exports = i;
      }
    }),
        Pd = Z({
      "src/language-html/constants.evaluate.js": function srcLanguageHtmlConstantsEvaluateJs(e, n) {
        n.exports = {
          CSS_DISPLAY_TAGS: {
            area: "none",
            base: "none",
            basefont: "none",
            datalist: "none",
            head: "none",
            link: "none",
            meta: "none",
            noembed: "none",
            noframes: "none",
            param: "block",
            rp: "none",
            script: "block",
            source: "block",
            style: "none",
            template: "inline",
            track: "block",
            title: "none",
            html: "block",
            body: "block",
            address: "block",
            blockquote: "block",
            center: "block",
            div: "block",
            figure: "block",
            figcaption: "block",
            footer: "block",
            form: "block",
            header: "block",
            hr: "block",
            legend: "block",
            listing: "block",
            main: "block",
            p: "block",
            plaintext: "block",
            pre: "block",
            xmp: "block",
            slot: "contents",
            ruby: "ruby",
            rt: "ruby-text",
            article: "block",
            aside: "block",
            h1: "block",
            h2: "block",
            h3: "block",
            h4: "block",
            h5: "block",
            h6: "block",
            hgroup: "block",
            nav: "block",
            section: "block",
            dir: "block",
            dd: "block",
            dl: "block",
            dt: "block",
            ol: "block",
            ul: "block",
            li: "list-item",
            table: "table",
            caption: "table-caption",
            colgroup: "table-column-group",
            col: "table-column",
            thead: "table-header-group",
            tbody: "table-row-group",
            tfoot: "table-footer-group",
            tr: "table-row",
            td: "table-cell",
            th: "table-cell",
            fieldset: "block",
            button: "inline-block",
            details: "block",
            summary: "block",
            dialog: "block",
            meter: "inline-block",
            progress: "inline-block",
            object: "inline-block",
            video: "inline-block",
            audio: "inline-block",
            select: "inline-block",
            option: "block",
            optgroup: "block"
          },
          CSS_DISPLAY_DEFAULT: "inline",
          CSS_WHITE_SPACE_TAGS: {
            listing: "pre",
            plaintext: "pre",
            pre: "pre",
            xmp: "pre",
            nobr: "nowrap",
            table: "initial",
            textarea: "pre-wrap"
          },
          CSS_WHITE_SPACE_DEFAULT: "normal"
        };
      }
    }),
        Id = Z({
      "src/language-html/utils/is-unknown-namespace.js": function srcLanguageHtmlUtilsIsUnknownNamespaceJs(e, n) {
        "use strict";

        ae();

        function t(s) {
          return s.type === "element" && !s.hasExplicitNamespace && !["html", "svg"].includes(s.namespace);
        }

        n.exports = t;
      }
    }),
        Ot = Z({
      "src/language-html/utils/index.js": function srcLanguageHtmlUtilsIndexJs(e, n) {
        "use strict";

        ae();

        var _Ge41 = Ge(),
            t = _Ge41.inferParserByLanguage,
            s = _Ge41.isFrontMatterNode,
            _Le45 = Le(),
            _Le45$builders = _Le45.builders,
            i = _Le45$builders.line,
            r = _Le45$builders.hardline,
            u = _Le45$builders.join,
            _Le45$utils = _Le45.utils,
            a = _Le45$utils.getDocParts,
            c = _Le45$utils.replaceTextEndOfLine,
            _Pd = Pd(),
            l = _Pd.CSS_DISPLAY_TAGS,
            C = _Pd.CSS_DISPLAY_DEFAULT,
            m = _Pd.CSS_WHITE_SPACE_TAGS,
            g = _Pd.CSS_WHITE_SPACE_DEFAULT,
            p = Id(),
            f = new Set(["	", "\n", "\f", "\r", " "]),
            h = function h(j) {
          return j.replace(/^[\t\n\f\r ]+/, "");
        },
            N = function N(j) {
          return j.replace(/[\t\n\f\r ]+$/, "");
        },
            T = function T(j) {
          return h(N(j));
        },
            A = function A(j) {
          return j.replace(/^[\t\f\r ]*\n/g, "");
        },
            b = function b(j) {
          return A(N(j));
        },
            v = function v(j) {
          return j.split(/[\t\n\f\r ]+/);
        },
            B = function B(j) {
          return j.match(/^[\t\n\f\r ]*/)[0];
        },
            w = function w(j) {
          var _j$match = j.match(/^([\t\n\f\r ]*)([\s\S]*?)([\t\n\f\r ]*)$/),
              _j$match2 = _slicedToArray(_j$match, 4),
              Ce = _j$match2[1],
              Ne = _j$match2[2],
              je = _j$match2[3];

          return {
            leadingWhitespace: Ce,
            trailingWhitespace: je,
            text: Ne
          };
        },
            I = function I(j) {
          return /[\t\n\f\r ]/.test(j);
        };

        function E(j, Ce) {
          return !!(j.type === "ieConditionalComment" && j.lastChild && !j.lastChild.isSelfClosing && !j.lastChild.endSourceSpan || j.type === "ieConditionalComment" && !j.complete || de(j) && j.children.some(function (Ne) {
            return Ne.type !== "text" && Ne.type !== "interpolation";
          }) || X(j, Ce) && !o(j) && j.type !== "interpolation");
        }

        function D(j) {
          return j.type === "attribute" || !j.parent || !j.prev ? !1 : d(j.prev);
        }

        function d(j) {
          return j.type === "comment" && j.value.trim() === "prettier-ignore";
        }

        function y(j) {
          return j.type === "text" || j.type === "comment";
        }

        function o(j) {
          return j.type === "element" && (j.fullName === "script" || j.fullName === "style" || j.fullName === "svg:style" || p(j) && (j.name === "script" || j.name === "style"));
        }

        function x(j) {
          return j.children && !o(j);
        }

        function F(j) {
          return o(j) || j.type === "interpolation" || S(j);
        }

        function S(j) {
          return we(j).startsWith("pre");
        }

        function k(j, Ce) {
          var Ne = je();
          if (Ne && !j.prev && j.parent && j.parent.tagDefinition && j.parent.tagDefinition.ignoreFirstLf) return j.type === "interpolation";
          return Ne;

          function je() {
            return s(j) ? !1 : (j.type === "text" || j.type === "interpolation") && j.prev && (j.prev.type === "text" || j.prev.type === "interpolation") ? !0 : !j.parent || j.parent.cssDisplay === "none" ? !1 : de(j.parent) ? !0 : !(!j.prev && (j.parent.type === "root" || de(j) && j.parent || o(j.parent) || J(j.parent, Ce) || !Ee(j.parent.cssDisplay)) || j.prev && !ue(j.prev.cssDisplay));
          }
        }

        function _(j, Ce) {
          return s(j) ? !1 : (j.type === "text" || j.type === "interpolation") && j.next && (j.next.type === "text" || j.next.type === "interpolation") ? !0 : !j.parent || j.parent.cssDisplay === "none" ? !1 : de(j.parent) ? !0 : !(!j.next && (j.parent.type === "root" || de(j) && j.parent || o(j.parent) || J(j.parent, Ce) || !q(j.parent.cssDisplay)) || j.next && !le(j.next.cssDisplay));
        }

        function O(j) {
          return Q(j.cssDisplay) && !o(j);
        }

        function R(j) {
          return s(j) || j.next && j.sourceSpan.end && j.sourceSpan.end.line + 1 < j.next.sourceSpan.start.line;
        }

        function M(j) {
          return H(j) || j.type === "element" && j.children.length > 0 && (["body", "script", "style"].includes(j.name) || j.children.some(function (Ce) {
            return ne(Ce);
          })) || j.firstChild && j.firstChild === j.lastChild && j.firstChild.type !== "text" && $(j.firstChild) && (!j.lastChild.isTrailingSpaceSensitive || W(j.lastChild));
        }

        function H(j) {
          return j.type === "element" && j.children.length > 0 && (["html", "head", "ul", "ol", "select"].includes(j.name) || j.cssDisplay.startsWith("table") && j.cssDisplay !== "table-cell");
        }

        function P(j) {
          return ee(j) || j.prev && G(j.prev) || re(j);
        }

        function G(j) {
          return ee(j) || j.type === "element" && j.fullName === "br" || re(j);
        }

        function re(j) {
          return $(j) && W(j);
        }

        function $(j) {
          return j.hasLeadingSpaces && (j.prev ? j.prev.sourceSpan.end.line < j.sourceSpan.start.line : j.parent.type === "root" || j.parent.startSourceSpan.end.line < j.sourceSpan.start.line);
        }

        function W(j) {
          return j.hasTrailingSpaces && (j.next ? j.next.sourceSpan.start.line > j.sourceSpan.end.line : j.parent.type === "root" || j.parent.endSourceSpan && j.parent.endSourceSpan.start.line > j.sourceSpan.end.line);
        }

        function ee(j) {
          switch (j.type) {
            case "ieConditionalComment":
            case "comment":
            case "directive":
              return !0;

            case "element":
              return ["script", "select"].includes(j.name);
          }

          return !1;
        }

        function U(j) {
          return j.lastChild ? U(j.lastChild) : j;
        }

        function ne(j) {
          return j.children && j.children.some(function (Ce) {
            return Ce.type !== "text";
          });
        }

        function se(j) {
          var _j$attrMap = j.attrMap,
              Ce = _j$attrMap.type,
              Ne = _j$attrMap.lang;
          if (Ce === "module" || Ce === "text/javascript" || Ce === "text/babel" || Ce === "application/javascript" || Ne === "jsx") return "babel";
          if (Ce === "application/x-typescript" || Ne === "ts" || Ne === "tsx") return "typescript";
          if (Ce === "text/markdown") return "markdown";
          if (Ce === "text/html") return "html";
          if (Ce && (Ce.endsWith("json") || Ce.endsWith("importmap"))) return "json";
          if (Ce === "text/x-handlebars-template") return "glimmer";
        }

        function V(j) {
          var Ce = j.attrMap.lang;
          if (!Ce || Ce === "postcss" || Ce === "css") return "css";
          if (Ce === "scss") return "scss";
          if (Ce === "less") return "less";
        }

        function oe(j, Ce) {
          if (j.name === "script" && !j.attrMap.src) return !j.attrMap.lang && !j.attrMap.type ? "babel" : se(j);
          if (j.name === "style") return V(j);
          if (Ce && X(j, Ce)) return se(j) || !("src" in j.attrMap) && t(j.attrMap.lang, Ce);
        }

        function K(j) {
          return j === "block" || j === "list-item" || j.startsWith("table");
        }

        function Ee(j) {
          return !K(j) && j !== "inline-block";
        }

        function q(j) {
          return !K(j) && j !== "inline-block";
        }

        function le(j) {
          return !K(j);
        }

        function ue(j) {
          return !K(j);
        }

        function Q(j) {
          return !K(j) && j !== "inline-block";
        }

        function de(j) {
          return we(j).startsWith("pre");
        }

        function ge(j, Ce) {
          var Ne = 0;

          for (var je = j.stack.length - 1; je >= 0; je--) {
            var Ue = j.stack[je];
            Ue && _typeof(Ue) == "object" && !Array.isArray(Ue) && Ce(Ue) && Ne++;
          }

          return Ne;
        }

        function ve(j, Ce) {
          var Ne = j;

          for (; Ne;) {
            if (Ce(Ne)) return !0;
            Ne = Ne.parent;
          }

          return !1;
        }

        function xe(j, Ce) {
          if (j.prev && j.prev.type === "comment") {
            var je = j.prev.value.match(/^\s*display:\s*([a-z]+)\s*$/);
            if (je) return je[1];
          }

          var Ne = !1;
          if (j.type === "element" && j.namespace === "svg") if (ve(j, function (je) {
            return je.fullName === "svg:foreignObject";
          })) Ne = !0;else return j.name === "svg" ? "inline-block" : "block";

          switch (Ce.htmlWhitespaceSensitivity) {
            case "strict":
              return "inline";

            case "ignore":
              return "block";

            default:
              return Ce.parser === "vue" && j.parent && j.parent.type === "root" ? "block" : j.type === "element" && (!j.namespace || Ne || p(j)) && l[j.name] || C;
          }
        }

        function we(j) {
          return j.type === "element" && (!j.namespace || p(j)) && m[j.name] || g;
        }

        function fe(j) {
          var Ce = Number.POSITIVE_INFINITY;

          var _iterator53 = _createForOfIteratorHelper(j.split("\n")),
              _step53;

          try {
            for (_iterator53.s(); !(_step53 = _iterator53.n()).done;) {
              var Ne = _step53.value;
              if (Ne.length === 0) continue;
              if (!f.has(Ne[0])) return 0;
              var je = B(Ne).length;
              Ne.length !== je && je < Ce && (Ce = je);
            }
          } catch (err) {
            _iterator53.e(err);
          } finally {
            _iterator53.f();
          }

          return Ce === Number.POSITIVE_INFINITY ? 0 : Ce;
        }

        function pe(j) {
          var Ce = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : fe(j);
          return Ce === 0 ? j : j.split("\n").map(function (Ne) {
            return Ne.slice(Ce);
          }).join("\n");
        }

        function me(j, Ce) {
          var Ne = 0;

          for (var je = 0; je < j.length; je++) {
            j[je] === Ce && Ne++;
          }

          return Ne;
        }

        function ce(j) {
          return j.replace(/&apos;/g, "'").replace(/&quot;/g, '"');
        }

        var he = new Set(["template", "style", "script"]);

        function J(j, Ce) {
          return ye(j, Ce) && !he.has(j.fullName);
        }

        function ye(j, Ce) {
          return Ce.parser === "vue" && j.type === "element" && j.parent.type === "root" && j.fullName.toLowerCase() !== "html";
        }

        function X(j, Ce) {
          return ye(j, Ce) && (J(j, Ce) || j.attrMap.lang && j.attrMap.lang !== "html");
        }

        function Y(j) {
          var Ce = j.fullName;
          return Ce.charAt(0) === "#" || Ce === "slot-scope" || Ce === "v-slot" || Ce.startsWith("v-slot:");
        }

        function te(j, Ce) {
          var Ne = j.parent;
          if (!ye(Ne, Ce)) return !1;
          var je = Ne.fullName,
              Ue = j.fullName;
          return je === "script" && Ue === "setup" || je === "style" && Ue === "vars";
        }

        function z(j) {
          var Ce = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : j.value;
          return j.parent.isWhitespaceSensitive ? j.parent.isIndentationSensitive ? c(Ce) : c(pe(b(Ce)), r) : a(u(i, v(Ce)));
        }

        n.exports = {
          htmlTrim: T,
          htmlTrimPreserveIndentation: b,
          hasHtmlWhitespace: I,
          getLeadingAndTrailingHtmlWhitespace: w,
          canHaveInterpolation: x,
          countChars: me,
          countParents: ge,
          dedentString: pe,
          forceBreakChildren: H,
          forceBreakContent: M,
          forceNextEmptyLine: R,
          getLastDescendant: U,
          getNodeCssStyleDisplay: xe,
          getNodeCssStyleWhiteSpace: we,
          hasPrettierIgnore: D,
          inferScriptParser: oe,
          isVueCustomBlock: J,
          isVueNonHtmlBlock: X,
          isVueSlotAttribute: Y,
          isVueSfcBindingsAttribute: te,
          isDanglingSpaceSensitiveNode: O,
          isIndentationSensitiveNode: S,
          isLeadingSpaceSensitiveNode: k,
          isPreLikeNode: de,
          isScriptLikeTag: o,
          isTextLikeNode: y,
          isTrailingSpaceSensitiveNode: _,
          isWhitespaceSensitiveNode: F,
          isUnknownNamespace: p,
          preferHardlineAsLeadingSpaces: P,
          preferHardlineAsTrailingSpaces: G,
          shouldPreserveContent: E,
          unescapeQuoteEntities: ce,
          getTextValueParts: z
        };
      }
    }),
        kd = Z({
      "node_modules/angular-html-parser/lib/compiler/src/chars.js": function node_modulesAngularHtmlParserLibCompilerSrcCharsJs(e) {
        "use strict";

        ae(), Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.$EOF = 0, e.$BSPACE = 8, e.$TAB = 9, e.$LF = 10, e.$VTAB = 11, e.$FF = 12, e.$CR = 13, e.$SPACE = 32, e.$BANG = 33, e.$DQ = 34, e.$HASH = 35, e.$$ = 36, e.$PERCENT = 37, e.$AMPERSAND = 38, e.$SQ = 39, e.$LPAREN = 40, e.$RPAREN = 41, e.$STAR = 42, e.$PLUS = 43, e.$COMMA = 44, e.$MINUS = 45, e.$PERIOD = 46, e.$SLASH = 47, e.$COLON = 58, e.$SEMICOLON = 59, e.$LT = 60, e.$EQ = 61, e.$GT = 62, e.$QUESTION = 63, e.$0 = 48, e.$7 = 55, e.$9 = 57, e.$A = 65, e.$E = 69, e.$F = 70, e.$X = 88, e.$Z = 90, e.$LBRACKET = 91, e.$BACKSLASH = 92, e.$RBRACKET = 93, e.$CARET = 94, e.$_ = 95, e.$a = 97, e.$b = 98, e.$e = 101, e.$f = 102, e.$n = 110, e.$r = 114, e.$t = 116, e.$u = 117, e.$v = 118, e.$x = 120, e.$z = 122, e.$LBRACE = 123, e.$BAR = 124, e.$RBRACE = 125, e.$NBSP = 160, e.$PIPE = 124, e.$TILDA = 126, e.$AT = 64, e.$BT = 96;

        function n(a) {
          return a >= e.$TAB && a <= e.$SPACE || a == e.$NBSP;
        }

        e.isWhitespace = n;

        function t(a) {
          return e.$0 <= a && a <= e.$9;
        }

        e.isDigit = t;

        function s(a) {
          return a >= e.$a && a <= e.$z || a >= e.$A && a <= e.$Z;
        }

        e.isAsciiLetter = s;

        function i(a) {
          return a >= e.$a && a <= e.$f || a >= e.$A && a <= e.$F || t(a);
        }

        e.isAsciiHexDigit = i;

        function r(a) {
          return a === e.$LF || a === e.$CR;
        }

        e.isNewLine = r;

        function u(a) {
          return e.$0 <= a && a <= e.$7;
        }

        e.isOctalDigit = u;
      }
    }),
        Ld = Z({
      "node_modules/angular-html-parser/lib/compiler/src/aot/static_symbol.js": function node_modulesAngularHtmlParserLibCompilerSrcAotStatic_symbolJs(e) {
        "use strict";

        ae(), Object.defineProperty(e, "__esModule", {
          value: !0
        });

        var n = /*#__PURE__*/function () {
          function n(s, i, r) {
            _classCallCheck(this, n);

            this.filePath = s, this.name = i, this.members = r;
          }

          _createClass(n, [{
            key: "assertNoMembers",
            value: function assertNoMembers() {
              if (this.members.length) throw new Error("Illegal state: symbol without members expected, but got ".concat(JSON.stringify(this), "."));
            }
          }]);

          return n;
        }();

        e.StaticSymbol = n;

        var t = /*#__PURE__*/function () {
          function t() {
            _classCallCheck(this, t);

            this.cache = new Map();
          }

          _createClass(t, [{
            key: "get",
            value: function get(s, i, r) {
              r = r || [];
              var u = r.length ? ".".concat(r.join(".")) : "",
                  a = '"'.concat(s, '".').concat(i).concat(u),
                  c = this.cache.get(a);
              return c || (c = new n(s, i, r), this.cache.set(a, c)), c;
            }
          }]);

          return t;
        }();

        e.StaticSymbolCache = t;
      }
    }),
        Od = Z({
      "node_modules/angular-html-parser/lib/compiler/src/util.js": function node_modulesAngularHtmlParserLibCompilerSrcUtilJs(e) {
        "use strict";

        ae(), Object.defineProperty(e, "__esModule", {
          value: !0
        });
        var n = /-+([a-z0-9])/g;

        function t(o) {
          return o.replace(n, function () {
            for (var x = arguments.length, F = new Array(x), S = 0; S < x; S++) {
              F[S] = arguments[S];
            }

            return F[1].toUpperCase();
          });
        }

        e.dashCaseToCamelCase = t;

        function s(o, x) {
          return r(o, ":", x);
        }

        e.splitAtColon = s;

        function i(o, x) {
          return r(o, ".", x);
        }

        e.splitAtPeriod = i;

        function r(o, x, F) {
          var S = o.indexOf(x);
          return S == -1 ? F : [o.slice(0, S).trim(), o.slice(S + 1).trim()];
        }

        function u(o, x, F) {
          return Array.isArray(o) ? x.visitArray(o, F) : A(o) ? x.visitStringMap(o, F) : o == null || typeof o == "string" || typeof o == "number" || typeof o == "boolean" ? x.visitPrimitive(o, F) : x.visitOther(o, F);
        }

        e.visitValue = u;

        function a(o) {
          return o != null;
        }

        e.isDefined = a;

        function c(o) {
          return o === void 0 ? null : o;
        }

        e.noUndefined = c;

        var l = /*#__PURE__*/function () {
          function l() {
            _classCallCheck(this, l);
          }

          _createClass(l, [{
            key: "visitArray",
            value: function visitArray(o, x) {
              var _this8 = this;

              return o.map(function (F) {
                return u(F, _this8, x);
              });
            }
          }, {
            key: "visitStringMap",
            value: function visitStringMap(o, x) {
              var _this9 = this;

              var F = {};
              return Object.keys(o).forEach(function (S) {
                F[S] = u(o[S], _this9, x);
              }), F;
            }
          }, {
            key: "visitPrimitive",
            value: function visitPrimitive(o, x) {
              return o;
            }
          }, {
            key: "visitOther",
            value: function visitOther(o, x) {
              return o;
            }
          }]);

          return l;
        }();

        e.ValueTransformer = l, e.SyncAsync = {
          assertSync: function assertSync(o) {
            if (w(o)) throw new Error("Illegal state: value cannot be a promise");
            return o;
          },
          then: function then(o, x) {
            return w(o) ? o.then(x) : x(o);
          },
          all: function all(o) {
            return o.some(w) ? Promise.all(o) : o;
          }
        };

        function C(o) {
          throw new Error("Internal Error: ".concat(o));
        }

        e.error = C;

        function m(o, x) {
          var F = Error(o);
          return F[g] = !0, x && (F[p] = x), F;
        }

        e.syntaxError = m;
        var g = "ngSyntaxError",
            p = "ngParseErrors";

        function f(o) {
          return o[g];
        }

        e.isSyntaxError = f;

        function h(o) {
          return o[p] || [];
        }

        e.getParseErrors = h;

        function N(o) {
          return o.replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1");
        }

        e.escapeRegExp = N;
        var T = Object.getPrototypeOf({});

        function A(o) {
          return _typeof(o) == "object" && o !== null && Object.getPrototypeOf(o) === T;
        }

        function b(o) {
          var x = "";

          for (var F = 0; F < o.length; F++) {
            var S = o.charCodeAt(F);

            if (S >= 55296 && S <= 56319 && o.length > F + 1) {
              var k = o.charCodeAt(F + 1);
              k >= 56320 && k <= 57343 && (F++, S = (S - 55296 << 10) + k - 56320 + 65536);
            }

            S <= 127 ? x += String.fromCharCode(S) : S <= 2047 ? x += String.fromCharCode(S >> 6 & 31 | 192, S & 63 | 128) : S <= 65535 ? x += String.fromCharCode(S >> 12 | 224, S >> 6 & 63 | 128, S & 63 | 128) : S <= 2097151 && (x += String.fromCharCode(S >> 18 & 7 | 240, S >> 12 & 63 | 128, S >> 6 & 63 | 128, S & 63 | 128));
          }

          return x;
        }

        e.utf8Encode = b;

        function v(o) {
          if (typeof o == "string") return o;
          if (o instanceof Array) return "[" + o.map(v).join(", ") + "]";
          if (o == null) return "" + o;
          if (o.overriddenName) return "".concat(o.overriddenName);
          if (o.name) return "".concat(o.name);
          if (!o.toString) return "object";
          var x = o.toString();
          if (x == null) return "" + x;
          var F = x.indexOf("\n");
          return F === -1 ? x : x.substring(0, F);
        }

        e.stringify = v;

        function B(o) {
          return typeof o == "function" && o.hasOwnProperty("__forward_ref__") ? o() : o;
        }

        e.resolveForwardRef = B;

        function w(o) {
          return !!o && typeof o.then == "function";
        }

        e.isPromise = w;

        var I = /*#__PURE__*/_createClass(function I(o) {
          _classCallCheck(this, I);

          this.full = o;
          var x = o.split(".");
          this.major = x[0], this.minor = x[1], this.patch = x.slice(2).join(".");
        });

        e.Version = I;
        var E = (typeof window === "undefined" ? "undefined" : _typeof(window)) < "u" && window,
            D = (typeof self === "undefined" ? "undefined" : _typeof(self)) < "u" && (typeof WorkerGlobalScope === "undefined" ? "undefined" : _typeof(WorkerGlobalScope)) < "u" && self instanceof WorkerGlobalScope && self,
            d = (typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) < "u" && globalThis,
            y = d || E || D;
        e.global = y;
      }
    }),
        jd = Z({
      "node_modules/angular-html-parser/lib/compiler/src/compile_metadata.js": function node_modulesAngularHtmlParserLibCompilerSrcCompile_metadataJs(e) {
        "use strict";

        ae(), Object.defineProperty(e, "__esModule", {
          value: !0
        });
        var n = Ld(),
            t = Od(),
            s = /^(?:(?:\[([^\]]+)\])|(?:\(([^\)]+)\)))|(\@[-\w]+)$/;

        function i(F) {
          return F.replace(/\W/g, "_");
        }

        e.sanitizeIdentifier = i;
        var r = 0;

        function u(F) {
          if (!F || !F.reference) return null;
          var S = F.reference;
          if (S instanceof n.StaticSymbol) return S.name;
          if (S.__anonymousType) return S.__anonymousType;
          var k = t.stringify(S);
          return k.indexOf("(") >= 0 ? (k = "anonymous_".concat(r++), S.__anonymousType = k) : k = i(k), k;
        }

        e.identifierName = u;

        function a(F) {
          var S = F.reference;
          return S instanceof n.StaticSymbol ? S.filePath : "./".concat(t.stringify(S));
        }

        e.identifierModuleUrl = a;

        function c(F, S) {
          return "View_".concat(u({
            reference: F
          }), "_").concat(S);
        }

        e.viewClassName = c;

        function l(F) {
          return "RenderType_".concat(u({
            reference: F
          }));
        }

        e.rendererTypeName = l;

        function C(F) {
          return "HostView_".concat(u({
            reference: F
          }));
        }

        e.hostViewClassName = C;

        function m(F) {
          return "".concat(u({
            reference: F
          }), "NgFactory");
        }

        e.componentFactoryName = m;
        var g;

        (function (F) {
          F[F.Pipe = 0] = "Pipe", F[F.Directive = 1] = "Directive", F[F.NgModule = 2] = "NgModule", F[F.Injectable = 3] = "Injectable";
        })(g = e.CompileSummaryKind || (e.CompileSummaryKind = {}));

        function p(F) {
          return F.value != null ? i(F.value) : u(F.identifier);
        }

        e.tokenName = p;

        function f(F) {
          return F.identifier != null ? F.identifier.reference : F.value;
        }

        e.tokenReference = f;

        var h = /*#__PURE__*/_createClass(function h() {
          _classCallCheck(this, h);

          var _ref14 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
              F = _ref14.moduleUrl,
              S = _ref14.styles,
              k = _ref14.styleUrls;

          this.moduleUrl = F || null, this.styles = w(S), this.styleUrls = w(k);
        });

        e.CompileStylesheetMetadata = h;

        var N = /*#__PURE__*/function () {
          function N(F) {
            _classCallCheck(this, N);

            var S = F.encapsulation,
                k = F.template,
                _ = F.templateUrl,
                O = F.htmlAst,
                R = F.styles,
                M = F.styleUrls,
                H = F.externalStylesheets,
                P = F.animations,
                G = F.ngContentSelectors,
                re = F.interpolation,
                $ = F.isInline,
                W = F.preserveWhitespaces;
            if (this.encapsulation = S, this.template = k, this.templateUrl = _, this.htmlAst = O, this.styles = w(R), this.styleUrls = w(M), this.externalStylesheets = w(H), this.animations = P ? E(P) : [], this.ngContentSelectors = G || [], re && re.length != 2) throw new Error("'interpolation' should have a start and an end symbol.");
            this.interpolation = re, this.isInline = $, this.preserveWhitespaces = W;
          }

          _createClass(N, [{
            key: "toSummary",
            value: function toSummary() {
              return {
                ngContentSelectors: this.ngContentSelectors,
                encapsulation: this.encapsulation,
                styles: this.styles,
                animations: this.animations
              };
            }
          }]);

          return N;
        }();

        e.CompileTemplateMetadata = N;

        var T = /*#__PURE__*/function () {
          function T(F) {
            _classCallCheck(this, T);

            var S = F.isHost,
                k = F.type,
                _ = F.isComponent,
                O = F.selector,
                R = F.exportAs,
                M = F.changeDetection,
                H = F.inputs,
                P = F.outputs,
                G = F.hostListeners,
                re = F.hostProperties,
                $ = F.hostAttributes,
                W = F.providers,
                ee = F.viewProviders,
                U = F.queries,
                ne = F.guards,
                se = F.viewQueries,
                V = F.entryComponents,
                oe = F.template,
                K = F.componentViewType,
                Ee = F.rendererType,
                q = F.componentFactory;
            this.isHost = !!S, this.type = k, this.isComponent = _, this.selector = O, this.exportAs = R, this.changeDetection = M, this.inputs = H, this.outputs = P, this.hostListeners = G, this.hostProperties = re, this.hostAttributes = $, this.providers = w(W), this.viewProviders = w(ee), this.queries = w(U), this.guards = ne, this.viewQueries = w(se), this.entryComponents = w(V), this.template = oe, this.componentViewType = K, this.rendererType = Ee, this.componentFactory = q;
          }

          _createClass(T, [{
            key: "toSummary",
            value: function toSummary() {
              return {
                summaryKind: g.Directive,
                type: this.type,
                isComponent: this.isComponent,
                selector: this.selector,
                exportAs: this.exportAs,
                inputs: this.inputs,
                outputs: this.outputs,
                hostListeners: this.hostListeners,
                hostProperties: this.hostProperties,
                hostAttributes: this.hostAttributes,
                providers: this.providers,
                viewProviders: this.viewProviders,
                queries: this.queries,
                guards: this.guards,
                viewQueries: this.viewQueries,
                entryComponents: this.entryComponents,
                changeDetection: this.changeDetection,
                template: this.template && this.template.toSummary(),
                componentViewType: this.componentViewType,
                rendererType: this.rendererType,
                componentFactory: this.componentFactory
              };
            }
          }], [{
            key: "create",
            value: function create(F) {
              var S = F.isHost,
                  k = F.type,
                  _ = F.isComponent,
                  O = F.selector,
                  R = F.exportAs,
                  M = F.changeDetection,
                  H = F.inputs,
                  P = F.outputs,
                  G = F.host,
                  re = F.providers,
                  $ = F.viewProviders,
                  W = F.queries,
                  ee = F.guards,
                  U = F.viewQueries,
                  ne = F.entryComponents,
                  se = F.template,
                  V = F.componentViewType,
                  oe = F.rendererType,
                  K = F.componentFactory,
                  Ee = {},
                  q = {},
                  le = {};
              G != null && Object.keys(G).forEach(function (de) {
                var ge = G[de],
                    ve = de.match(s);
                ve === null ? le[de] = ge : ve[1] != null ? q[ve[1]] = ge : ve[2] != null && (Ee[ve[2]] = ge);
              });
              var ue = {};
              H != null && H.forEach(function (de) {
                var ge = t.splitAtColon(de, [de, de]);
                ue[ge[0]] = ge[1];
              });
              var Q = {};
              return P != null && P.forEach(function (de) {
                var ge = t.splitAtColon(de, [de, de]);
                Q[ge[0]] = ge[1];
              }), new T({
                isHost: S,
                type: k,
                isComponent: !!_,
                selector: O,
                exportAs: R,
                changeDetection: M,
                inputs: ue,
                outputs: Q,
                hostListeners: Ee,
                hostProperties: q,
                hostAttributes: le,
                providers: re,
                viewProviders: $,
                queries: W,
                guards: ee,
                viewQueries: U,
                entryComponents: ne,
                template: se,
                componentViewType: V,
                rendererType: oe,
                componentFactory: K
              });
            }
          }]);

          return T;
        }();

        e.CompileDirectiveMetadata = T;

        var A = /*#__PURE__*/function () {
          function A(F) {
            _classCallCheck(this, A);

            var S = F.type,
                k = F.name,
                _ = F.pure;
            this.type = S, this.name = k, this.pure = !!_;
          }

          _createClass(A, [{
            key: "toSummary",
            value: function toSummary() {
              return {
                summaryKind: g.Pipe,
                type: this.type,
                name: this.name,
                pure: this.pure
              };
            }
          }]);

          return A;
        }();

        e.CompilePipeMetadata = A;

        var b = /*#__PURE__*/_createClass(function b() {
          _classCallCheck(this, b);
        });

        e.CompileShallowModuleMetadata = b;

        var v = /*#__PURE__*/function () {
          function v(F) {
            _classCallCheck(this, v);

            var S = F.type,
                k = F.providers,
                _ = F.declaredDirectives,
                O = F.exportedDirectives,
                R = F.declaredPipes,
                M = F.exportedPipes,
                H = F.entryComponents,
                P = F.bootstrapComponents,
                G = F.importedModules,
                re = F.exportedModules,
                $ = F.schemas,
                W = F.transitiveModule,
                ee = F.id;
            this.type = S || null, this.declaredDirectives = w(_), this.exportedDirectives = w(O), this.declaredPipes = w(R), this.exportedPipes = w(M), this.providers = w(k), this.entryComponents = w(H), this.bootstrapComponents = w(P), this.importedModules = w(G), this.exportedModules = w(re), this.schemas = w($), this.id = ee || null, this.transitiveModule = W || null;
          }

          _createClass(v, [{
            key: "toSummary",
            value: function toSummary() {
              var F = this.transitiveModule;
              return {
                summaryKind: g.NgModule,
                type: this.type,
                entryComponents: F.entryComponents,
                providers: F.providers,
                modules: F.modules,
                exportedDirectives: F.exportedDirectives,
                exportedPipes: F.exportedPipes
              };
            }
          }]);

          return v;
        }();

        e.CompileNgModuleMetadata = v;

        var B = /*#__PURE__*/function () {
          function B() {
            _classCallCheck(this, B);

            this.directivesSet = new Set(), this.directives = [], this.exportedDirectivesSet = new Set(), this.exportedDirectives = [], this.pipesSet = new Set(), this.pipes = [], this.exportedPipesSet = new Set(), this.exportedPipes = [], this.modulesSet = new Set(), this.modules = [], this.entryComponentsSet = new Set(), this.entryComponents = [], this.providers = [];
          }

          _createClass(B, [{
            key: "addProvider",
            value: function addProvider(F, S) {
              this.providers.push({
                provider: F,
                module: S
              });
            }
          }, {
            key: "addDirective",
            value: function addDirective(F) {
              this.directivesSet.has(F.reference) || (this.directivesSet.add(F.reference), this.directives.push(F));
            }
          }, {
            key: "addExportedDirective",
            value: function addExportedDirective(F) {
              this.exportedDirectivesSet.has(F.reference) || (this.exportedDirectivesSet.add(F.reference), this.exportedDirectives.push(F));
            }
          }, {
            key: "addPipe",
            value: function addPipe(F) {
              this.pipesSet.has(F.reference) || (this.pipesSet.add(F.reference), this.pipes.push(F));
            }
          }, {
            key: "addExportedPipe",
            value: function addExportedPipe(F) {
              this.exportedPipesSet.has(F.reference) || (this.exportedPipesSet.add(F.reference), this.exportedPipes.push(F));
            }
          }, {
            key: "addModule",
            value: function addModule(F) {
              this.modulesSet.has(F.reference) || (this.modulesSet.add(F.reference), this.modules.push(F));
            }
          }, {
            key: "addEntryComponent",
            value: function addEntryComponent(F) {
              this.entryComponentsSet.has(F.componentType) || (this.entryComponentsSet.add(F.componentType), this.entryComponents.push(F));
            }
          }]);

          return B;
        }();

        e.TransitiveCompileNgModuleMetadata = B;

        function w(F) {
          return F || [];
        }

        var I = /*#__PURE__*/_createClass(function I(F, S) {
          _classCallCheck(this, I);

          var k = S.useClass,
              _ = S.useValue,
              O = S.useExisting,
              R = S.useFactory,
              M = S.deps,
              H = S.multi;
          this.token = F, this.useClass = k || null, this.useValue = _, this.useExisting = O, this.useFactory = R || null, this.dependencies = M || null, this.multi = !!H;
        });

        e.ProviderMeta = I;

        function E(F) {
          return F.reduce(function (S, k) {
            var _ = Array.isArray(k) ? E(k) : k;

            return S.concat(_);
          }, []);
        }

        e.flatten = E;

        function D(F) {
          return F.replace(/(\w+:\/\/[\w:-]+)?(\/+)?/, "ng:///");
        }

        function d(F, S, k) {
          var _;

          return k.isInline ? S.type.reference instanceof n.StaticSymbol ? _ = "".concat(S.type.reference.filePath, ".").concat(S.type.reference.name, ".html") : _ = "".concat(u(F), "/").concat(u(S.type), ".html") : _ = k.templateUrl, S.type.reference instanceof n.StaticSymbol ? _ : D(_);
        }

        e.templateSourceUrl = d;

        function y(F, S) {
          var k = F.moduleUrl.split(/\/\\/g),
              _ = k[k.length - 1];
          return D("css/".concat(S).concat(_, ".ngstyle.js"));
        }

        e.sharedStylesheetJitUrl = y;

        function o(F) {
          return D("".concat(u(F.type), "/module.ngfactory.js"));
        }

        e.ngModuleJitUrl = o;

        function x(F, S) {
          return D("".concat(u(F), "/").concat(u(S.type), ".ngfactory.js"));
        }

        e.templateJitUrl = x;
      }
    }),
        qd = Z({
      "node_modules/angular-html-parser/lib/compiler/src/parse_util.js": function node_modulesAngularHtmlParserLibCompilerSrcParse_utilJs(e) {
        "use strict";

        ae(), Object.defineProperty(e, "__esModule", {
          value: !0
        });

        var n = kd(),
            t = jd(),
            s = /*#__PURE__*/function () {
          function s(C, m, g, p) {
            _classCallCheck(this, s);

            this.file = C, this.offset = m, this.line = g, this.col = p;
          }

          _createClass(s, [{
            key: "toString",
            value: function toString() {
              return this.offset != null ? "".concat(this.file.url, "@").concat(this.line, ":").concat(this.col) : this.file.url;
            }
          }, {
            key: "moveBy",
            value: function moveBy(C) {
              var m = this.file.content,
                  g = m.length,
                  p = this.offset,
                  f = this.line,
                  h = this.col;

              for (; p > 0 && C < 0;) {
                if (p--, C++, m.charCodeAt(p) == n.$LF) {
                  f--;
                  var T = m.substr(0, p - 1).lastIndexOf(String.fromCharCode(n.$LF));
                  h = T > 0 ? p - T : p;
                } else h--;
              }

              for (; p < g && C > 0;) {
                var _N11 = m.charCodeAt(p);

                p++, C--, _N11 == n.$LF ? (f++, h = 0) : h++;
              }

              return new s(this.file, p, f, h);
            }
          }, {
            key: "getContext",
            value: function getContext(C, m) {
              var g = this.file.content,
                  p = this.offset;

              if (p != null) {
                p > g.length - 1 && (p = g.length - 1);
                var f = p,
                    _h6 = 0,
                    _N12 = 0;

                for (; _h6 < C && p > 0 && (p--, _h6++, !(g[p] == "\n" && ++_N12 == m));) {
                  ;
                }

                for (_h6 = 0, _N12 = 0; _h6 < C && f < g.length - 1 && (f++, _h6++, !(g[f] == "\n" && ++_N12 == m));) {
                  ;
                }

                return {
                  before: g.substring(p, this.offset),
                  after: g.substring(this.offset, f + 1)
                };
              }

              return null;
            }
          }]);

          return s;
        }();

        e.ParseLocation = s;

        var i = /*#__PURE__*/_createClass(function i(C, m) {
          _classCallCheck(this, i);

          this.content = C, this.url = m;
        });

        e.ParseSourceFile = i;

        var r = /*#__PURE__*/function () {
          function r(C, m) {
            _classCallCheck(this, r);

            var g = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
            this.start = C, this.end = m, this.details = g;
          }

          _createClass(r, [{
            key: "toString",
            value: function toString() {
              return this.start.file.content.substring(this.start.offset, this.end.offset);
            }
          }]);

          return r;
        }();

        e.ParseSourceSpan = r, e.EMPTY_PARSE_LOCATION = new s(new i("", ""), 0, 0, 0), e.EMPTY_SOURCE_SPAN = new r(e.EMPTY_PARSE_LOCATION, e.EMPTY_PARSE_LOCATION);
        var u;

        (function (C) {
          C[C.WARNING = 0] = "WARNING", C[C.ERROR = 1] = "ERROR";
        })(u = e.ParseErrorLevel || (e.ParseErrorLevel = {}));

        var a = /*#__PURE__*/function () {
          function a(C, m) {
            _classCallCheck(this, a);

            var g = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : u.ERROR;
            this.span = C, this.msg = m, this.level = g;
          }

          _createClass(a, [{
            key: "contextualMessage",
            value: function contextualMessage() {
              var C = this.span.start.getContext(100, 3);
              return C ? "".concat(this.msg, ' ("').concat(C.before, "[").concat(u[this.level], " ->]").concat(C.after, '")') : this.msg;
            }
          }, {
            key: "toString",
            value: function toString() {
              var C = this.span.details ? ", ".concat(this.span.details) : "";
              return "".concat(this.contextualMessage(), ": ").concat(this.span.start).concat(C);
            }
          }]);

          return a;
        }();

        e.ParseError = a;

        function c(C, m) {
          var g = t.identifierModuleUrl(m),
              p = g != null ? "in ".concat(C, " ").concat(t.identifierName(m), " in ").concat(g) : "in ".concat(C, " ").concat(t.identifierName(m)),
              f = new i("", p);
          return new r(new s(f, -1, -1, -1), new s(f, -1, -1, -1));
        }

        e.typeSourceSpan = c;

        function l(C, m, g) {
          var p = "in ".concat(C, " ").concat(m, " in ").concat(g),
              f = new i("", p);
          return new r(new s(f, -1, -1, -1), new s(f, -1, -1, -1));
        }

        e.r3JitTypeSourceSpan = l;
      }
    }),
        Md = Z({
      "src/language-html/print-preprocess.js": function srcLanguageHtmlPrintPreprocessJs(e, n) {
        "use strict";

        ae();

        var _qd = qd(),
            t = _qd.ParseSourceSpan,
            _Ot = Ot(),
            s = _Ot.htmlTrim,
            i = _Ot.getLeadingAndTrailingHtmlWhitespace,
            r = _Ot.hasHtmlWhitespace,
            u = _Ot.canHaveInterpolation,
            a = _Ot.getNodeCssStyleDisplay,
            c = _Ot.isDanglingSpaceSensitiveNode,
            l = _Ot.isIndentationSensitiveNode,
            C = _Ot.isLeadingSpaceSensitiveNode,
            m = _Ot.isTrailingSpaceSensitiveNode,
            g = _Ot.isWhitespaceSensitiveNode,
            p = [h, N, A, v, B, E, w, I, D, b];

        function f(d, y) {
          var _iterator54 = _createForOfIteratorHelper(p),
              _step54;

          try {
            for (_iterator54.s(); !(_step54 = _iterator54.n()).done;) {
              var o = _step54.value;
              o(d, y);
            }
          } catch (err) {
            _iterator54.e(err);
          } finally {
            _iterator54.f();
          }

          return d;
        }

        function h(d) {
          d.walk(function (y) {
            if (y.type === "element" && y.tagDefinition.ignoreFirstLf && y.children.length > 0 && y.children[0].type === "text" && y.children[0].value[0] === "\n") {
              var o = y.children[0];
              o.value.length === 1 ? y.removeChild(o) : o.value = o.value.slice(1);
            }
          });
        }

        function N(d) {
          var y = function y(o) {
            return o.type === "element" && o.prev && o.prev.type === "ieConditionalStartComment" && o.prev.sourceSpan.end.offset === o.startSourceSpan.start.offset && o.firstChild && o.firstChild.type === "ieConditionalEndComment" && o.firstChild.sourceSpan.start.offset === o.startSourceSpan.end.offset;
          };

          d.walk(function (o) {
            if (o.children) for (var x = 0; x < o.children.length; x++) {
              var F = o.children[x];
              if (!y(F)) continue;
              var S = F.prev,
                  k = F.firstChild;
              o.removeChild(S), x--;

              var _ = new t(S.sourceSpan.start, k.sourceSpan.end),
                  O = new t(_.start, F.sourceSpan.end);

              F.condition = S.condition, F.sourceSpan = O, F.startSourceSpan = _, F.removeChild(k);
            }
          });
        }

        function T(d, y, o) {
          d.walk(function (x) {
            if (x.children) for (var F = 0; F < x.children.length; F++) {
              var S = x.children[F];
              if (S.type !== "text" && !y(S)) continue;
              S.type !== "text" && (S.type = "text", S.value = o(S));
              var k = S.prev;
              !k || k.type !== "text" || (k.value += S.value, k.sourceSpan = new t(k.sourceSpan.start, S.sourceSpan.end), x.removeChild(S), F--);
            }
          });
        }

        function A(d) {
          return T(d, function (y) {
            return y.type === "cdata";
          }, function (y) {
            return "<![CDATA[".concat(y.value, "]]>");
          });
        }

        function b(d) {
          var y = function y(o) {
            return o.type === "element" && o.attrs.length === 0 && o.children.length === 1 && o.firstChild.type === "text" && !r(o.children[0].value) && !o.firstChild.hasLeadingSpaces && !o.firstChild.hasTrailingSpaces && o.isLeadingSpaceSensitive && !o.hasLeadingSpaces && o.isTrailingSpaceSensitive && !o.hasTrailingSpaces && o.prev && o.prev.type === "text" && o.next && o.next.type === "text";
          };

          d.walk(function (o) {
            if (o.children) for (var x = 0; x < o.children.length; x++) {
              var F = o.children[x];
              if (!y(F)) continue;
              var S = F.prev,
                  k = F.next;
              S.value += "<".concat(F.rawName, ">") + F.firstChild.value + "</".concat(F.rawName, ">") + k.value, S.sourceSpan = new t(S.sourceSpan.start, k.sourceSpan.end), S.isTrailingSpaceSensitive = k.isTrailingSpaceSensitive, S.hasTrailingSpaces = k.hasTrailingSpaces, o.removeChild(F), x--, o.removeChild(k);
            }
          });
        }

        function v(d, y) {
          if (y.parser === "html") return;
          var o = /\{\{([\s\S]+?)\}\}/;
          d.walk(function (x) {
            if (!!u(x)) {
              var _iterator55 = _createForOfIteratorHelper(x.children),
                  _step55;

              try {
                for (_iterator55.s(); !(_step55 = _iterator55.n()).done;) {
                  var F = _step55.value;
                  if (F.type !== "text") continue;

                  var S = F.sourceSpan.start,
                      k = null,
                      _ = F.value.split(o);

                  for (var O = 0; O < _.length; O++, S = k) {
                    var R = _[O];

                    if (O % 2 === 0) {
                      k = S.moveBy(R.length), R.length > 0 && x.insertChildBefore(F, {
                        type: "text",
                        value: R,
                        sourceSpan: new t(S, k)
                      });
                      continue;
                    }

                    k = S.moveBy(R.length + 4), x.insertChildBefore(F, {
                      type: "interpolation",
                      sourceSpan: new t(S, k),
                      children: R.length === 0 ? [] : [{
                        type: "text",
                        value: R,
                        sourceSpan: new t(S.moveBy(2), k.moveBy(-2))
                      }]
                    });
                  }

                  x.removeChild(F);
                }
              } catch (err) {
                _iterator55.e(err);
              } finally {
                _iterator55.f();
              }
            }
          });
        }

        function B(d) {
          d.walk(function (y) {
            if (!y.children) return;

            if (y.children.length === 0 || y.children.length === 1 && y.children[0].type === "text" && s(y.children[0].value).length === 0) {
              y.hasDanglingSpaces = y.children.length > 0, y.children = [];
              return;
            }

            var o = g(y),
                x = l(y);
            if (!o) for (var F = 0; F < y.children.length; F++) {
              var S = y.children[F];
              if (S.type !== "text") continue;

              var _i19 = i(S.value),
                  k = _i19.leadingWhitespace,
                  _ = _i19.text,
                  O = _i19.trailingWhitespace,
                  R = S.prev,
                  M = S.next;

              _ ? (S.value = _, S.sourceSpan = new t(S.sourceSpan.start.moveBy(k.length), S.sourceSpan.end.moveBy(-O.length)), k && (R && (R.hasTrailingSpaces = !0), S.hasLeadingSpaces = !0), O && (S.hasTrailingSpaces = !0, M && (M.hasLeadingSpaces = !0))) : (y.removeChild(S), F--, (k || O) && (R && (R.hasTrailingSpaces = !0), M && (M.hasLeadingSpaces = !0)));
            }
            y.isWhitespaceSensitive = o, y.isIndentationSensitive = x;
          });
        }

        function w(d) {
          d.walk(function (y) {
            y.isSelfClosing = !y.children || y.type === "element" && (y.tagDefinition.isVoid || y.startSourceSpan === y.endSourceSpan);
          });
        }

        function I(d, y) {
          d.walk(function (o) {
            o.type === "element" && (o.hasHtmComponentClosingTag = o.endSourceSpan && /^<\s*\/\s*\/\s*>$/.test(y.originalText.slice(o.endSourceSpan.start.offset, o.endSourceSpan.end.offset)));
          });
        }

        function E(d, y) {
          d.walk(function (o) {
            o.cssDisplay = a(o, y);
          });
        }

        function D(d, y) {
          d.walk(function (o) {
            var x = o.children;

            if (!!x) {
              if (x.length === 0) {
                o.isDanglingSpaceSensitive = c(o);
                return;
              }

              var _iterator56 = _createForOfIteratorHelper(x),
                  _step56;

              try {
                for (_iterator56.s(); !(_step56 = _iterator56.n()).done;) {
                  var _F4 = _step56.value;
                  _F4.isLeadingSpaceSensitive = C(_F4, y), _F4.isTrailingSpaceSensitive = m(_F4, y);
                }
              } catch (err) {
                _iterator56.e(err);
              } finally {
                _iterator56.f();
              }

              for (var F = 0; F < x.length; F++) {
                var S = x[F];
                S.isLeadingSpaceSensitive = (F === 0 || S.prev.isTrailingSpaceSensitive) && S.isLeadingSpaceSensitive, S.isTrailingSpaceSensitive = (F === x.length - 1 || S.next.isLeadingSpaceSensitive) && S.isTrailingSpaceSensitive;
              }
            }
          });
        }

        n.exports = f;
      }
    }),
        Rd = Z({
      "src/language-html/pragma.js": function srcLanguageHtmlPragmaJs(e, n) {
        "use strict";

        ae();

        function t(i) {
          return /^\s*<!--\s*@(?:format|prettier)\s*-->/.test(i);
        }

        function s(i) {
          return "<!-- @format -->\n\n" + i.replace(/^\s*\n/, "");
        }

        n.exports = {
          hasPragma: t,
          insertPragma: s
        };
      }
    }),
        Yn = Z({
      "src/language-html/loc.js": function srcLanguageHtmlLocJs(e, n) {
        "use strict";

        ae();

        function t(i) {
          return i.sourceSpan.start.offset;
        }

        function s(i) {
          return i.sourceSpan.end.offset;
        }

        n.exports = {
          locStart: t,
          locEnd: s
        };
      }
    }),
        Qt = Z({
      "src/language-html/print/tag.js": function srcLanguageHtmlPrintTagJs(e, n) {
        "use strict";

        ae();

        var t = Ut(),
            _Ge42 = Ge(),
            s = _Ge42.isNonEmptyArray,
            _Le46 = Le(),
            _Le46$builders = _Le46.builders,
            i = _Le46$builders.indent,
            r = _Le46$builders.join,
            u = _Le46$builders.line,
            a = _Le46$builders.softline,
            c = _Le46$builders.hardline,
            l = _Le46.utils.replaceTextEndOfLine,
            _Yn = Yn(),
            C = _Yn.locStart,
            m = _Yn.locEnd,
            _Ot2 = Ot(),
            g = _Ot2.isTextLikeNode,
            p = _Ot2.getLastDescendant,
            f = _Ot2.isPreLikeNode,
            h = _Ot2.hasPrettierIgnore,
            N = _Ot2.shouldPreserveContent;

        function T(P, G) {
          return [P.isSelfClosing ? "" : A(P, G), b(P, G)];
        }

        function A(P, G) {
          return P.lastChild && y(P.lastChild) ? "" : [v(P, G), w(P, G)];
        }

        function b(P, G) {
          return (P.next ? D(P.next) : d(P.parent)) ? "" : [I(P, G), B(P, G)];
        }

        function v(P, G) {
          return d(P) ? I(P.lastChild, G) : "";
        }

        function B(P, G) {
          return y(P) ? w(P.parent, G) : o(P) ? M(P.next) : "";
        }

        function w(P, G) {
          if (t(!P.isSelfClosing), E(P, G)) return "";

          switch (P.type) {
            case "ieConditionalComment":
              return "<!";

            case "element":
              if (P.hasHtmComponentClosingTag) return "<//";

            default:
              return "</".concat(P.rawName);
          }
        }

        function I(P, G) {
          if (E(P, G)) return "";

          switch (P.type) {
            case "ieConditionalComment":
            case "ieConditionalEndComment":
              return "[endif]-->";

            case "ieConditionalStartComment":
              return "]><!-->";

            case "interpolation":
              return "}}";

            case "element":
              if (P.isSelfClosing) return "/>";

            default:
              return ">";
          }
        }

        function E(P, G) {
          return !P.isSelfClosing && !P.endSourceSpan && (h(P) || N(P.parent, G));
        }

        function D(P) {
          return P.prev && P.prev.type !== "docType" && !g(P.prev) && P.isLeadingSpaceSensitive && !P.hasLeadingSpaces;
        }

        function d(P) {
          return P.lastChild && P.lastChild.isTrailingSpaceSensitive && !P.lastChild.hasTrailingSpaces && !g(p(P.lastChild)) && !f(P);
        }

        function y(P) {
          return !P.next && !P.hasTrailingSpaces && P.isTrailingSpaceSensitive && g(p(P));
        }

        function o(P) {
          return P.next && !g(P.next) && g(P) && P.isTrailingSpaceSensitive && !P.hasTrailingSpaces;
        }

        function x(P) {
          var G = P.trim().match(/^prettier\x2Dignore\x2Dattribute(?:\s+([\s\S]+))?$/);
          return G ? G[1] ? G[1].split(/\s+/) : !0 : !1;
        }

        function F(P) {
          return !P.prev && P.isLeadingSpaceSensitive && !P.hasLeadingSpaces;
        }

        function S(P, G, re) {
          var $ = P.getValue();
          if (!s($.attrs)) return $.isSelfClosing ? " " : "";
          var W = $.prev && $.prev.type === "comment" && x($.prev.value),
              ee = typeof W == "boolean" ? function () {
            return W;
          } : Array.isArray(W) ? function (oe) {
            return W.includes(oe.rawName);
          } : function () {
            return !1;
          },
              U = P.map(function (oe) {
            var K = oe.getValue();
            return ee(K) ? l(G.originalText.slice(C(K), m(K))) : re();
          }, "attrs"),
              ne = $.type === "element" && $.fullName === "script" && $.attrs.length === 1 && $.attrs[0].fullName === "src" && $.children.length === 0,
              se = G.singleAttributePerLine && $.attrs.length > 1 ? c : u,
              V = [i([ne ? " " : u, r(se, U)])];
          return $.firstChild && F($.firstChild) || $.isSelfClosing && d($.parent) || ne ? V.push($.isSelfClosing ? " " : "") : V.push(G.bracketSameLine ? $.isSelfClosing ? " " : "" : $.isSelfClosing ? u : a), V;
        }

        function k(P) {
          return P.firstChild && F(P.firstChild) ? "" : H(P);
        }

        function _(P, G, re) {
          var $ = P.getValue();
          return [O($, G), S(P, G, re), $.isSelfClosing ? "" : k($)];
        }

        function O(P, G) {
          return P.prev && o(P.prev) ? "" : [R(P, G), M(P)];
        }

        function R(P, G) {
          return F(P) ? H(P.parent) : D(P) ? I(P.prev, G) : "";
        }

        function M(P) {
          switch (P.type) {
            case "ieConditionalComment":
            case "ieConditionalStartComment":
              return "<!--[if ".concat(P.condition);

            case "ieConditionalEndComment":
              return "<!--<!";

            case "interpolation":
              return "{{";

            case "docType":
              return "<!DOCTYPE";

            case "element":
              if (P.condition) return "<!--[if ".concat(P.condition, "]><!--><").concat(P.rawName);

            default:
              return "<".concat(P.rawName);
          }
        }

        function H(P) {
          switch (t(!P.isSelfClosing), P.type) {
            case "ieConditionalComment":
              return "]>";

            case "element":
              if (P.condition) return "><!--<![endif]-->";

            default:
              return ">";
          }
        }

        n.exports = {
          printClosingTag: T,
          printClosingTagStart: A,
          printClosingTagStartMarker: w,
          printClosingTagEndMarker: I,
          printClosingTagSuffix: B,
          printClosingTagEnd: b,
          needsToBorrowLastChildClosingTagEndMarker: d,
          needsToBorrowParentClosingTagStartMarker: y,
          needsToBorrowPrevClosingTagEndMarker: D,
          printOpeningTag: _,
          printOpeningTagStart: O,
          printOpeningTagPrefix: R,
          printOpeningTagStartMarker: M,
          printOpeningTagEndMarker: H,
          needsToBorrowNextOpeningTagStartMarker: o,
          needsToBorrowParentOpeningTagEndMarker: F
        };
      }
    }),
        Vd = Z({
      "node_modules/parse-srcset/src/parse-srcset.js": function node_modulesParseSrcsetSrcParseSrcsetJs(e, n) {
        ae(), function (t, s) {
          typeof define == "function" && define.amd ? define([], s) : _typeof(n) == "object" && n.exports ? n.exports = s() : t.parseSrcset = s();
        }(e, function () {
          return function (t, s) {
            var i = s && s.logger || console;

            function r(I) {
              return I === " " || I === "	" || I === "\n" || I === "\f" || I === "\r";
            }

            function u(I) {
              var E,
                  D = I.exec(t.substring(b));
              if (D) return E = D[0], b += E.length, E;
            }

            for (var a = t.length, c = /^[ \t\n\r\u000c]+/, l = /^[, \t\n\r\u000c]+/, C = /^[^ \t\n\r\u000c]+/, m = /[,]+$/, g = /^\d+$/, p = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/, f, h, N, T, A, b = 0, v = [];;) {
              if (u(l), b >= a) return v;
              f = u(C), h = [], f.slice(-1) === "," ? (f = f.replace(m, ""), w()) : B();
            }

            function B() {
              for (u(c), N = "", T = "in descriptor";;) {
                if (A = t.charAt(b), T === "in descriptor") {
                  if (r(A)) N && (h.push(N), N = "", T = "after descriptor");else if (A === ",") {
                    b += 1, N && h.push(N), w();
                    return;
                  } else if (A === "(") N = N + A, T = "in parens";else if (A === "") {
                    N && h.push(N), w();
                    return;
                  } else N = N + A;
                } else if (T === "in parens") {
                  if (A === ")") N = N + A, T = "in descriptor";else if (A === "") {
                    h.push(N), w();
                    return;
                  } else N = N + A;
                } else if (T === "after descriptor" && !r(A)) if (A === "") {
                  w();
                  return;
                } else T = "in descriptor", b -= 1;
                b += 1;
              }
            }

            function w() {
              var I = !1,
                  E,
                  D,
                  d,
                  y,
                  o = {},
                  x,
                  F,
                  S,
                  k,
                  _;

              for (y = 0; y < h.length; y++) {
                x = h[y], F = x[x.length - 1], S = x.substring(0, x.length - 1), k = parseInt(S, 10), _ = parseFloat(S), g.test(S) && F === "w" ? ((E || D) && (I = !0), k === 0 ? I = !0 : E = k) : p.test(S) && F === "x" ? ((E || D || d) && (I = !0), _ < 0 ? I = !0 : D = _) : g.test(S) && F === "h" ? ((d || D) && (I = !0), k === 0 ? I = !0 : d = k) : I = !0;
              }

              I ? i && i.error && i.error("Invalid srcset descriptor found in '" + t + "' at '" + x + "'.") : (o.url = f, E && (o.w = E), D && (o.d = D), d && (o.h = d), v.push(o));
            }
          };
        });
      }
    }),
        Wd = Z({
      "src/language-html/syntax-attribute.js": function srcLanguageHtmlSyntaxAttributeJs(e, n) {
        "use strict";

        ae();

        var t = Vd(),
            _Le47 = Le(),
            _Le47$builders = _Le47.builders,
            s = _Le47$builders.ifBreak,
            i = _Le47$builders.join,
            r = _Le47$builders.line;

        function u(c) {
          var l = t(c, {
            logger: {
              error: function error(B) {
                throw new Error(B);
              }
            }
          }),
              C = l.some(function (B) {
            var w = B.w;
            return w;
          }),
              m = l.some(function (B) {
            var w = B.h;
            return w;
          }),
              g = l.some(function (B) {
            var w = B.d;
            return w;
          });
          if (C + m + g > 1) throw new Error("Mixed descriptor in srcset is not supported");

          var p = C ? "w" : m ? "h" : "d",
              f = C ? "w" : m ? "h" : "x",
              h = function h(B) {
            return Math.max.apply(Math, _toConsumableArray(B));
          },
              N = l.map(function (B) {
            return B.url;
          }),
              T = h(N.map(function (B) {
            return B.length;
          })),
              A = l.map(function (B) {
            return B[p];
          }).map(function (B) {
            return B ? B.toString() : "";
          }),
              b = A.map(function (B) {
            var w = B.indexOf(".");
            return w === -1 ? B.length : w;
          }),
              v = h(b);

          return i([",", r], N.map(function (B, w) {
            var I = [B],
                E = A[w];

            if (E) {
              var D = T - B.length + 1,
                  d = v - b[w],
                  y = " ".repeat(D + d);
              I.push(s(y, " "), E + f);
            }

            return I;
          }));
        }

        function a(c) {
          return c.trim().split(/\s+/).join(" ");
        }

        n.exports = {
          printImgSrcset: u,
          printClassNames: a
        };
      }
    }),
        $d = Z({
      "src/language-html/syntax-vue.js": function srcLanguageHtmlSyntaxVueJs(e, n) {
        "use strict";

        ae();

        var _Le48 = Le(),
            t = _Le48.builders.group;

        function s(a, c) {
          var _i20 = i(a),
              l = _i20.left,
              C = _i20.operator,
              m = _i20.right;

          return [t(c("function _(".concat(l, ") {}"), {
            parser: "babel",
            __isVueForBindingLeft: !0
          })), " ", C, " ", c(m, {
            parser: "__js_expression"
          }, {
            stripTrailingHardline: !0
          })];
        }

        function i(a) {
          var c = /([\s\S]*?)\s+(in|of)\s+([\s\S]*)/,
              l = /,([^,\]}]*)(?:,([^,\]}]*))?$/,
              C = /^\(|\)$/g,
              m = a.match(c);
          if (!m) return;
          var g = {};
          if (g.for = m[3].trim(), !g.for) return;
          var p = m[1].trim().replace(C, ""),
              f = p.match(l);
          f ? (g.alias = p.replace(l, ""), g.iterator1 = f[1].trim(), f[2] && (g.iterator2 = f[2].trim())) : g.alias = p;
          var h = [g.alias, g.iterator1, g.iterator2];
          if (!h.some(function (N, T) {
            return !N && (T === 0 || h.slice(T + 1).some(Boolean));
          })) return {
            left: h.filter(Boolean).join(","),
            operator: m[2],
            right: g.for
          };
        }

        function r(a, c) {
          return c("function _(".concat(a, ") {}"), {
            parser: "babel",
            __isVueBindings: !0
          });
        }

        function u(a) {
          var c = /^(?:[\w$]+|\([^)]*\))\s*=>|^function\s*\(/,
              l = /^[$A-Z_a-z][\w$]*(?:\.[$A-Z_a-z][\w$]*|\['[^']*']|\["[^"]*"]|\[\d+]|\[[$A-Z_a-z][\w$]*])*$/,
              C = a.trim();
          return c.test(C) || l.test(C);
        }

        n.exports = {
          isVueEventBindingExpression: u,
          printVueFor: s,
          printVueBindings: r
        };
      }
    }),
        mo = Z({
      "src/language-html/get-node-content.js": function srcLanguageHtmlGetNodeContentJs(e, n) {
        "use strict";

        ae();

        var _Qt = Qt(),
            t = _Qt.needsToBorrowParentClosingTagStartMarker,
            s = _Qt.printClosingTagStartMarker,
            i = _Qt.needsToBorrowLastChildClosingTagEndMarker,
            r = _Qt.printClosingTagEndMarker,
            u = _Qt.needsToBorrowParentOpeningTagEndMarker,
            a = _Qt.printOpeningTagEndMarker;

        function c(l, C) {
          var m = l.startSourceSpan.end.offset;
          l.firstChild && u(l.firstChild) && (m -= a(l).length);
          var g = l.endSourceSpan.start.offset;
          return l.lastChild && t(l.lastChild) ? g += s(l, C).length : i(l) && (g -= r(l.lastChild, C).length), C.originalText.slice(m, g);
        }

        n.exports = c;
      }
    }),
        Hd = Z({
      "src/language-html/embed.js": function srcLanguageHtmlEmbedJs(e, n) {
        "use strict";

        ae();

        var _Le49 = Le(),
            _Le49$builders = _Le49.builders,
            t = _Le49$builders.breakParent,
            s = _Le49$builders.group,
            i = _Le49$builders.hardline,
            r = _Le49$builders.indent,
            u = _Le49$builders.line,
            a = _Le49$builders.fill,
            c = _Le49$builders.softline,
            _Le49$utils = _Le49.utils,
            l = _Le49$utils.mapDoc,
            C = _Le49$utils.replaceTextEndOfLine,
            m = Xn(),
            _Qt2 = Qt(),
            g = _Qt2.printClosingTag,
            p = _Qt2.printClosingTagSuffix,
            f = _Qt2.needsToBorrowPrevClosingTagEndMarker,
            h = _Qt2.printOpeningTagPrefix,
            N = _Qt2.printOpeningTag,
            _Wd = Wd(),
            T = _Wd.printImgSrcset,
            A = _Wd.printClassNames,
            _$d = $d(),
            b = _$d.printVueFor,
            v = _$d.printVueBindings,
            B = _$d.isVueEventBindingExpression,
            _Ot3 = Ot(),
            w = _Ot3.isScriptLikeTag,
            I = _Ot3.isVueNonHtmlBlock,
            E = _Ot3.inferScriptParser,
            D = _Ot3.htmlTrimPreserveIndentation,
            d = _Ot3.dedentString,
            y = _Ot3.unescapeQuoteEntities,
            o = _Ot3.isVueSlotAttribute,
            x = _Ot3.isVueSfcBindingsAttribute,
            F = _Ot3.getTextValueParts,
            S = mo();

        function k(O, R, M) {
          var H = function H(ne) {
            return new RegExp(ne.join("|")).test(O.fullName);
          },
              P = function P() {
            return y(O.value);
          },
              G = !1,
              re = function re(ne, se) {
            var V = ne.type === "NGRoot" ? ne.node.type === "NGMicrosyntax" && ne.node.body.length === 1 && ne.node.body[0].type === "NGMicrosyntaxExpression" ? ne.node.body[0].expression : ne.node : ne.type === "JsExpressionRoot" ? ne.node : ne;
            V && (V.type === "ObjectExpression" || V.type === "ArrayExpression" || se.parser === "__vue_expression" && (V.type === "TemplateLiteral" || V.type === "StringLiteral")) && (G = !0);
          },
              $ = function $(ne) {
            return s(ne);
          },
              W = function W(ne) {
            var se = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
            return s([r([c, ne]), se ? c : ""]);
          },
              ee = function ee(ne) {
            return G ? $(ne) : W(ne);
          },
              U = function U(ne, se) {
            return R(ne, Object.assign({
              __onHtmlBindingRoot: re,
              __embeddedInHtml: !0
            }, se));
          };

          if (O.fullName === "srcset" && (O.parent.fullName === "img" || O.parent.fullName === "source")) return W(T(P()));

          if (O.fullName === "class" && !M.parentParser) {
            var ne = P();
            if (!ne.includes("{{")) return A(ne);
          }

          if (O.fullName === "style" && !M.parentParser) {
            var _ne2 = P();

            if (!_ne2.includes("{{")) return W(U(_ne2, {
              parser: "css",
              __isHTMLStyleAttribute: !0
            }));
          }

          if (M.parser === "vue") {
            if (O.fullName === "v-for") return b(P(), U);
            if (o(O) || x(O, M)) return v(P(), U);
            var _ne3 = ["^@", "^v-on:"],
                se = ["^:", "^v-bind:"],
                V = ["^v-"];

            if (H(_ne3)) {
              var oe = P();
              return ee(U(oe, {
                parser: B(oe) ? "__js_expression" : "__vue_event_binding"
              }));
            }

            if (H(se)) return ee(U(P(), {
              parser: "__vue_expression"
            }));
            if (H(V)) return ee(U(P(), {
              parser: "__js_expression"
            }));
          }

          if (M.parser === "angular") {
            var _ne4 = function _ne4(le, ue) {
              return U(le, Object.assign(Object.assign({}, ue), {}, {
                trailingComma: "none"
              }));
            },
                _se2 = ["^\\*"],
                _V4 = ["^\\(.+\\)$", "^on-"],
                _oe2 = ["^\\[.+\\]$", "^bind(on)?-", "^ng-(if|show|hide|class|style)$"],
                K = ["^i18n(-.+)?$"];

            if (H(_V4)) return ee(_ne4(P(), {
              parser: "__ng_action"
            }));
            if (H(_oe2)) return ee(_ne4(P(), {
              parser: "__ng_binding"
            }));

            if (H(K)) {
              var le = P().trim();
              return W(a(F(O, le)), !le.includes("@@"));
            }

            if (H(_se2)) return ee(_ne4(P(), {
              parser: "__ng_directive"
            }));
            var Ee = /\{\{([\s\S]+?)\}\}/,
                q = P();

            if (Ee.test(q)) {
              var _le4 = [];

              var _iterator57 = _createForOfIteratorHelper(q.split(Ee).entries()),
                  _step57;

              try {
                for (_iterator57.s(); !(_step57 = _iterator57.n()).done;) {
                  var _step57$value = _slicedToArray(_step57.value, 2),
                      ue = _step57$value[0],
                      Q = _step57$value[1];

                  if (ue % 2 === 0) _le4.push(C(Q));else try {
                    _le4.push(s(["{{", r([u, _ne4(Q, {
                      parser: "__ng_interpolation",
                      __isInHtmlInterpolation: !0
                    })]), u, "}}"]));
                  } catch (_unused10) {
                    _le4.push("{{", C(Q), "}}");
                  }
                }
              } catch (err) {
                _iterator57.e(err);
              } finally {
                _iterator57.f();
              }

              return s(_le4);
            }
          }

          return null;
        }

        function _(O, R, M, H) {
          var P = O.getValue();

          switch (P.type) {
            case "element":
              {
                if (w(P) || P.type === "interpolation") return;

                if (!P.isSelfClosing && I(P, H)) {
                  var G = E(P, H);
                  if (!G) return;
                  var re = S(P, H),
                      $ = /^\s*$/.test(re),
                      W = "";
                  return $ || (W = M(D(re), {
                    parser: G,
                    __embeddedInHtml: !0
                  }, {
                    stripTrailingHardline: !0
                  }), $ = W === ""), [h(P, H), s(N(O, H, R)), $ ? "" : i, W, $ ? "" : i, g(P, H), p(P, H)];
                }

                break;
              }

            case "text":
              {
                if (w(P.parent)) {
                  var _G3 = E(P.parent);

                  if (_G3) {
                    var _re3 = _G3 === "markdown" ? d(P.value.replace(/^[^\S\n]*\n/, "")) : P.value,
                        _$4 = {
                      parser: _G3,
                      __embeddedInHtml: !0
                    };

                    if (H.parser === "html" && _G3 === "babel") {
                      var _W = "script",
                          ee = P.parent.attrMap;
                      ee && (ee.type === "module" || ee.type === "text/babel" && ee["data-type"] === "module") && (_W = "module"), _$4.__babelSourceType = _W;
                    }

                    return [t, h(P, H), M(_re3, _$4, {
                      stripTrailingHardline: !0
                    }), p(P, H)];
                  }
                } else if (P.parent.type === "interpolation") {
                  var _G4 = {
                    __isInHtmlInterpolation: !0,
                    __embeddedInHtml: !0
                  };
                  return H.parser === "angular" ? (_G4.parser = "__ng_interpolation", _G4.trailingComma = "none") : H.parser === "vue" ? _G4.parser = "__vue_expression" : _G4.parser = "__js_expression", [r([u, M(P.value, _G4, {
                    stripTrailingHardline: !0
                  })]), P.parent.next && f(P.parent.next) ? " " : u];
                }

                break;
              }

            case "attribute":
              {
                if (!P.value) break;
                if (/^PRETTIER_HTML_PLACEHOLDER_\d+_\d+_IN_JS$/.test(H.originalText.slice(P.valueSpan.start.offset, P.valueSpan.end.offset))) return [P.rawName, "=", P.value];
                if (H.parser === "lwc" && /^\{[\s\S]*\}$/.test(H.originalText.slice(P.valueSpan.start.offset, P.valueSpan.end.offset))) return [P.rawName, "=", P.value];

                var _G5 = k(P, function (re, $) {
                  return M(re, Object.assign({
                    __isInHtmlAttribute: !0,
                    __embeddedInHtml: !0
                  }, $), {
                    stripTrailingHardline: !0
                  });
                }, H);

                if (_G5) return [P.rawName, '="', s(l(_G5, function (re) {
                  return typeof re == "string" ? re.replace(/"/g, "&quot;") : re;
                })), '"'];
                break;
              }

            case "front-matter":
              return m(P, M);
          }
        }

        n.exports = _;
      }
    }),
        go = Z({
      "src/language-html/print/children.js": function srcLanguageHtmlPrintChildrenJs(e, n) {
        "use strict";

        ae();

        var _Le50 = Le(),
            _Le50$builders = _Le50.builders,
            t = _Le50$builders.breakParent,
            s = _Le50$builders.group,
            i = _Le50$builders.ifBreak,
            r = _Le50$builders.line,
            u = _Le50$builders.softline,
            a = _Le50$builders.hardline,
            c = _Le50.utils.replaceTextEndOfLine,
            _Yn2 = Yn(),
            l = _Yn2.locStart,
            C = _Yn2.locEnd,
            _Ot4 = Ot(),
            m = _Ot4.forceBreakChildren,
            g = _Ot4.forceNextEmptyLine,
            p = _Ot4.isTextLikeNode,
            f = _Ot4.hasPrettierIgnore,
            h = _Ot4.preferHardlineAsLeadingSpaces,
            _Qt3 = Qt(),
            N = _Qt3.printOpeningTagPrefix,
            T = _Qt3.needsToBorrowNextOpeningTagStartMarker,
            A = _Qt3.printOpeningTagStartMarker,
            b = _Qt3.needsToBorrowPrevClosingTagEndMarker,
            v = _Qt3.printClosingTagEndMarker,
            B = _Qt3.printClosingTagSuffix,
            w = _Qt3.needsToBorrowParentClosingTagStartMarker;

        function I(d, y, o) {
          var x = d.getValue();
          return f(x) ? [N(x, y)].concat(_toConsumableArray(c(y.originalText.slice(l(x) + (x.prev && T(x.prev) ? A(x).length : 0), C(x) - (x.next && b(x.next) ? v(x, y).length : 0)))), [B(x, y)]) : o();
        }

        function E(d, y) {
          return p(d) && p(y) ? d.isTrailingSpaceSensitive ? d.hasTrailingSpaces ? h(y) ? a : r : "" : h(y) ? a : u : T(d) && (f(y) || y.firstChild || y.isSelfClosing || y.type === "element" && y.attrs.length > 0) || d.type === "element" && d.isSelfClosing && b(y) ? "" : !y.isLeadingSpaceSensitive || h(y) || b(y) && d.lastChild && w(d.lastChild) && d.lastChild.lastChild && w(d.lastChild.lastChild) ? a : y.hasLeadingSpaces ? r : u;
        }

        function D(d, y, o) {
          var x = d.getValue();
          if (m(x)) return [t].concat(_toConsumableArray(d.map(function (S) {
            var k = S.getValue(),
                _ = k.prev ? E(k.prev, k) : "";

            return [_ ? [_, g(k.prev) ? a : ""] : "", I(S, y, o)];
          }, "children")));
          var F = x.children.map(function () {
            return Symbol("");
          });
          return d.map(function (S, k) {
            var _ = S.getValue();

            if (p(_)) {
              if (_.prev && p(_.prev)) {
                var re = E(_.prev, _);
                if (re) return g(_.prev) ? [a, a, I(S, y, o)] : [re, I(S, y, o)];
              }

              return I(S, y, o);
            }

            var O = [],
                R = [],
                M = [],
                H = [],
                P = _.prev ? E(_.prev, _) : "",
                G = _.next ? E(_, _.next) : "";
            return P && (g(_.prev) ? O.push(a, a) : P === a ? O.push(a) : p(_.prev) ? R.push(P) : R.push(i("", u, {
              groupId: F[k - 1]
            }))), G && (g(_) ? p(_.next) && H.push(a, a) : G === a ? p(_.next) && H.push(a) : M.push(G)), [].concat(O, [s([].concat(R, [s([I(S, y, o)].concat(M), {
              id: F[k]
            })]))], H);
          }, "children");
        }

        n.exports = {
          printChildren: D
        };
      }
    }),
        Gd = Z({
      "src/language-html/print/element.js": function srcLanguageHtmlPrintElementJs(e, n) {
        "use strict";

        ae();

        var _Le51 = Le(),
            _Le51$builders = _Le51.builders,
            t = _Le51$builders.breakParent,
            s = _Le51$builders.dedentToRoot,
            i = _Le51$builders.group,
            r = _Le51$builders.ifBreak,
            u = _Le51$builders.indentIfBreak,
            a = _Le51$builders.indent,
            c = _Le51$builders.line,
            l = _Le51$builders.softline,
            C = _Le51.utils.replaceTextEndOfLine,
            m = mo(),
            _Ot5 = Ot(),
            g = _Ot5.shouldPreserveContent,
            p = _Ot5.isScriptLikeTag,
            f = _Ot5.isVueCustomBlock,
            h = _Ot5.countParents,
            N = _Ot5.forceBreakContent,
            _Qt4 = Qt(),
            T = _Qt4.printOpeningTagPrefix,
            A = _Qt4.printOpeningTag,
            b = _Qt4.printClosingTagSuffix,
            v = _Qt4.printClosingTag,
            B = _Qt4.needsToBorrowPrevClosingTagEndMarker,
            w = _Qt4.needsToBorrowLastChildClosingTagEndMarker,
            _go = go(),
            I = _go.printChildren;

        function E(D, d, y) {
          var o = D.getValue();
          if (g(o, d)) return [T(o, d), i(A(D, d, y))].concat(_toConsumableArray(C(m(o, d))), _toConsumableArray(v(o, d)), [b(o, d)]);

          var x = o.children.length === 1 && o.firstChild.type === "interpolation" && o.firstChild.isLeadingSpaceSensitive && !o.firstChild.hasLeadingSpaces && o.lastChild.isTrailingSpaceSensitive && !o.lastChild.hasTrailingSpaces,
              F = Symbol("element-attr-group-id"),
              S = function S(R) {
            return i([i(A(D, d, y), {
              id: F
            }), R, v(o, d)]);
          },
              k = function k(R) {
            return x ? u(R, {
              groupId: F
            }) : (p(o) || f(o, d)) && o.parent.type === "root" && d.parser === "vue" && !d.vueIndentScriptAndStyle ? R : a(R);
          },
              _ = function _() {
            return x ? r(l, "", {
              groupId: F
            }) : o.firstChild.hasLeadingSpaces && o.firstChild.isLeadingSpaceSensitive ? c : o.firstChild.type === "text" && o.isWhitespaceSensitive && o.isIndentationSensitive ? s(l) : l;
          },
              O = function O() {
            return (o.next ? B(o.next) : w(o.parent)) ? o.lastChild.hasTrailingSpaces && o.lastChild.isTrailingSpaceSensitive ? " " : "" : x ? r(l, "", {
              groupId: F
            }) : o.lastChild.hasTrailingSpaces && o.lastChild.isTrailingSpaceSensitive ? c : (o.lastChild.type === "comment" || o.lastChild.type === "text" && o.isWhitespaceSensitive && o.isIndentationSensitive) && new RegExp("\\n[\\t ]{".concat(d.tabWidth * h(D, function (M) {
              return M.parent && M.parent.type !== "root";
            }), "}$")).test(o.lastChild.value) ? "" : l;
          };

          return o.children.length === 0 ? S(o.hasDanglingSpaces && o.isDanglingSpaceSensitive ? c : "") : S([N(o) ? t : "", k([_(), I(D, d, y)]), O()]);
        }

        n.exports = {
          printElement: E
        };
      }
    }),
        Jd = Z({
      "src/language-html/printer-html.js": function srcLanguageHtmlPrinterHtmlJs(e, n) {
        "use strict";

        ae();

        var _Le52 = Le(),
            _Le52$builders = _Le52.builders,
            t = _Le52$builders.fill,
            s = _Le52$builders.group,
            i = _Le52$builders.hardline,
            r = _Le52$builders.literalline,
            _Le52$utils = _Le52.utils,
            u = _Le52$utils.cleanDoc,
            a = _Le52$utils.getDocParts,
            c = _Le52$utils.isConcat,
            l = _Le52$utils.replaceTextEndOfLine,
            C = _d(),
            _Ot6 = Ot(),
            m = _Ot6.countChars,
            g = _Ot6.unescapeQuoteEntities,
            p = _Ot6.getTextValueParts,
            f = Md(),
            _Rd = Rd(),
            h = _Rd.insertPragma,
            _Yn3 = Yn(),
            N = _Yn3.locStart,
            T = _Yn3.locEnd,
            A = Hd(),
            _Qt5 = Qt(),
            b = _Qt5.printClosingTagSuffix,
            v = _Qt5.printClosingTagEnd,
            B = _Qt5.printOpeningTagPrefix,
            w = _Qt5.printOpeningTagStart,
            _Gd = Gd(),
            I = _Gd.printElement,
            _go2 = go(),
            E = _go2.printChildren;

        function D(d, y, o) {
          var x = d.getValue();

          switch (x.type) {
            case "front-matter":
              return l(x.raw);

            case "root":
              return y.__onHtmlRoot && y.__onHtmlRoot(x), [s(E(d, y, o)), i];

            case "element":
            case "ieConditionalComment":
              return I(d, y, o);

            case "ieConditionalStartComment":
            case "ieConditionalEndComment":
              return [w(x), v(x)];

            case "interpolation":
              return [w(x, y)].concat(_toConsumableArray(d.map(o, "children")), [v(x, y)]);

            case "text":
              {
                if (x.parent.type === "interpolation") {
                  var S = /\n[^\S\n]*$/,
                      k = S.test(x.value),
                      _ = k ? x.value.replace(S, "") : x.value;

                  return [].concat(_toConsumableArray(l(_)), [k ? i : ""]);
                }

                var F = u([B(x, y)].concat(_toConsumableArray(p(x)), [b(x, y)]));
                return c(F) || F.type === "fill" ? t(a(F)) : F;
              }

            case "docType":
              return [s([w(x, y), " ", x.value.replace(/^html\b/i, "html").replace(/\s+/g, " ")]), v(x, y)];

            case "comment":
              return [B(x, y)].concat(_toConsumableArray(l(y.originalText.slice(N(x), T(x)), r)), [b(x, y)]);

            case "attribute":
              {
                if (x.value === null) return x.rawName;

                var _F5 = g(x.value),
                    _S4 = m(_F5, "'"),
                    _k5 = m(_F5, '"'),
                    _9 = _S4 < _k5 ? "'" : '"';

                return [x.rawName, "=", _9].concat(_toConsumableArray(l(_9 === '"' ? _F5.replace(/"/g, "&quot;") : _F5.replace(/'/g, "&apos;"))), [_9]);
              }

            default:
              throw new Error("Unexpected node type ".concat(x.type));
          }
        }

        n.exports = {
          preprocess: f,
          print: D,
          insertPragma: h,
          massageAstNode: C,
          embed: A
        };
      }
    }),
        Ud = Z({
      "src/language-html/options.js": function srcLanguageHtmlOptionsJs(e, n) {
        "use strict";

        ae();
        var t = Lt(),
            s = "HTML";
        n.exports = {
          bracketSameLine: t.bracketSameLine,
          htmlWhitespaceSensitivity: {
            since: "1.15.0",
            category: s,
            type: "choice",
            default: "css",
            description: "How to handle whitespaces in HTML.",
            choices: [{
              value: "css",
              description: "Respect the default value of CSS display property."
            }, {
              value: "strict",
              description: "Whitespaces are considered sensitive."
            }, {
              value: "ignore",
              description: "Whitespaces are considered insensitive."
            }]
          },
          singleAttributePerLine: t.singleAttributePerLine,
          vueIndentScriptAndStyle: {
            since: "1.19.0",
            category: s,
            type: "boolean",
            default: !1,
            description: "Indent script and style tags in Vue files."
          }
        };
      }
    }),
        zd = Z({
      "src/language-html/parsers.js": function srcLanguageHtmlParsersJs() {
        ae();
      }
    }),
        An = Z({
      "node_modules/linguist-languages/data/HTML.json": function node_modulesLinguistLanguagesDataHTMLJson(e, n) {
        n.exports = {
          name: "HTML",
          type: "markup",
          tmScope: "text.html.basic",
          aceMode: "html",
          codemirrorMode: "htmlmixed",
          codemirrorMimeType: "text/html",
          color: "#e34c26",
          aliases: ["xhtml"],
          extensions: [".html", ".htm", ".html.hl", ".inc", ".xht", ".xhtml"],
          languageId: 146
        };
      }
    }),
        Xd = Z({
      "node_modules/linguist-languages/data/Vue.json": function node_modulesLinguistLanguagesDataVueJson(e, n) {
        n.exports = {
          name: "Vue",
          type: "markup",
          color: "#41b883",
          extensions: [".vue"],
          tmScope: "text.html.vue",
          aceMode: "html",
          languageId: 391
        };
      }
    }),
        Kd = Z({
      "src/language-html/index.js": function srcLanguageHtmlIndexJs(e, n) {
        "use strict";

        ae();
        var t = bt(),
            s = Jd(),
            i = Ud(),
            r = zd(),
            u = [t(An(), function () {
          return {
            name: "Angular",
            since: "1.15.0",
            parsers: ["angular"],
            vscodeLanguageIds: ["html"],
            extensions: [".component.html"],
            filenames: []
          };
        }), t(An(), function (c) {
          return {
            since: "1.15.0",
            parsers: ["html"],
            vscodeLanguageIds: ["html"],
            extensions: [].concat(_toConsumableArray(c.extensions), [".mjml"])
          };
        }), t(An(), function () {
          return {
            name: "Lightning Web Components",
            since: "1.17.0",
            parsers: ["lwc"],
            vscodeLanguageIds: ["html"],
            extensions: [],
            filenames: []
          };
        }), t(Xd(), function () {
          return {
            since: "1.10.0",
            parsers: ["vue"],
            vscodeLanguageIds: ["vue"]
          };
        })],
            a = {
          html: s
        };
        n.exports = {
          languages: u,
          printers: a,
          options: i,
          parsers: r
        };
      }
    }),
        Yd = Z({
      "src/language-yaml/pragma.js": function srcLanguageYamlPragmaJs(e, n) {
        "use strict";

        ae();

        function t(r) {
          return /^\s*@(?:prettier|format)\s*$/.test(r);
        }

        function s(r) {
          return /^\s*#[^\S\n]*@(?:prettier|format)\s*?(?:\n|$)/.test(r);
        }

        function i(r) {
          return "# @format\n\n".concat(r);
        }

        n.exports = {
          isPragma: t,
          hasPragma: s,
          insertPragma: i
        };
      }
    }),
        Qd = Z({
      "src/language-yaml/loc.js": function srcLanguageYamlLocJs(e, n) {
        "use strict";

        ae();

        function t(i) {
          return i.position.start.offset;
        }

        function s(i) {
          return i.position.end.offset;
        }

        n.exports = {
          locStart: t,
          locEnd: s
        };
      }
    }),
        Zd = Z({
      "src/language-yaml/embed.js": function srcLanguageYamlEmbedJs(e, n) {
        "use strict";

        ae();

        function t(s, i, r, u) {
          if (s.getValue().type === "root" && u.filepath && /(?:[/\\]|^)\.(?:prettier|stylelint)rc$/.test(u.filepath)) return r(u.originalText, Object.assign(Object.assign({}, u), {}, {
            parser: "json"
          }));
        }

        n.exports = t;
      }
    }),
        jt = Z({
      "src/language-yaml/utils.js": function srcLanguageYamlUtilsJs(e, n) {
        "use strict";

        ae();

        var _Ge43 = Ge(),
            t = _Ge43.getLast,
            s = _Ge43.isNonEmptyArray;

        function i(E, D) {
          var d = 0,
              y = E.stack.length - 1;

          for (var o = 0; o < y; o++) {
            var x = E.stack[o];
            r(x) && D(x) && d++;
          }

          return d;
        }

        function r(E, D) {
          return E && typeof E.type == "string" && (!D || D.includes(E.type));
        }

        function u(E, D, d) {
          return D("children" in E ? Object.assign(Object.assign({}, E), {}, {
            children: E.children.map(function (y) {
              return u(y, D, E);
            })
          }) : E, d);
        }

        function a(E, D, d) {
          Object.defineProperty(E, D, {
            get: d,
            enumerable: !1
          });
        }

        function c(E, D) {
          var d = 0,
              y = D.length;

          for (var o = E.position.end.offset - 1; o < y; o++) {
            var x = D[o];
            if (x === "\n" && d++, d === 1 && /\S/.test(x)) return !1;
            if (d === 2) return !0;
          }

          return !1;
        }

        function l(E) {
          switch (E.getValue().type) {
            case "tag":
            case "anchor":
            case "comment":
              return !1;
          }

          var d = E.stack.length;

          for (var y = 1; y < d; y++) {
            var o = E.stack[y],
                x = E.stack[y - 1];
            if (Array.isArray(x) && typeof o == "number" && o !== x.length - 1) return !1;
          }

          return !0;
        }

        function C(E) {
          return s(E.children) ? C(t(E.children)) : E;
        }

        function m(E) {
          return E.value.trim() === "prettier-ignore";
        }

        function g(E) {
          var D = E.getValue();

          if (D.type === "documentBody") {
            var d = E.getParentNode();
            return b(d.head) && m(t(d.head.endComments));
          }

          return h(D) && m(t(D.leadingComments));
        }

        function p(E) {
          return !s(E.children) && !f(E);
        }

        function f(E) {
          return h(E) || N(E) || T(E) || A(E) || b(E);
        }

        function h(E) {
          return E && s(E.leadingComments);
        }

        function N(E) {
          return E && s(E.middleComments);
        }

        function T(E) {
          return E && E.indicatorComment;
        }

        function A(E) {
          return E && E.trailingComment;
        }

        function b(E) {
          return E && s(E.endComments);
        }

        function v(E) {
          var D = [],
              d;

          var _iterator58 = _createForOfIteratorHelper(E.split(/( +)/)),
              _step58;

          try {
            for (_iterator58.s(); !(_step58 = _iterator58.n()).done;) {
              var y = _step58.value;
              y !== " " ? d === " " ? D.push(y) : D.push((D.pop() || "") + y) : d === void 0 && D.unshift(""), d = y;
            }
          } catch (err) {
            _iterator58.e(err);
          } finally {
            _iterator58.f();
          }

          return d === " " && D.push((D.pop() || "") + " "), D[0] === "" && (D.shift(), D.unshift(" " + (D.shift() || ""))), D;
        }

        function B(E, D, d) {
          var y = D.split("\n").map(function (o, x, F) {
            return x === 0 && x === F.length - 1 ? o : x !== 0 && x !== F.length - 1 ? o.trim() : x === 0 ? o.trimEnd() : o.trimStart();
          });
          return d.proseWrap === "preserve" ? y.map(function (o) {
            return o.length === 0 ? [] : [o];
          }) : y.map(function (o) {
            return o.length === 0 ? [] : v(o);
          }).reduce(function (o, x, F) {
            return F !== 0 && y[F - 1].length > 0 && x.length > 0 && !(E === "quoteDouble" && t(t(o)).endsWith("\\")) ? [].concat(_toConsumableArray(o.slice(0, -1)), [[].concat(_toConsumableArray(t(o)), _toConsumableArray(x))]) : [].concat(_toConsumableArray(o), [x]);
          }, []).map(function (o) {
            return d.proseWrap === "never" ? [o.join(" ")] : o;
          });
        }

        function w(E, D) {
          var d = D.parentIndent,
              y = D.isLastDescendant,
              o = D.options,
              x = E.position.start.line === E.position.end.line ? "" : o.originalText.slice(E.position.start.offset, E.position.end.offset).match(/^[^\n]*\n([\s\S]*)$/)[1],
              F;

          if (E.indent === null) {
            var _ = x.match( /*#__PURE__*/_wrapRegExp(/^( *)[^\n\r ]/m, {
              leadingSpace: 1
            }));

            F = _ ? _.groups.leadingSpace.length : Number.POSITIVE_INFINITY;
          } else F = E.indent - 1 + d;

          var S = x.split("\n").map(function (_) {
            return _.slice(F);
          });
          if (o.proseWrap === "preserve" || E.type === "blockLiteral") return k(S.map(function (_) {
            return _.length === 0 ? [] : [_];
          }));
          return k(S.map(function (_) {
            return _.length === 0 ? [] : v(_);
          }).reduce(function (_, O, R) {
            return R !== 0 && S[R - 1].length > 0 && O.length > 0 && !/^\s/.test(O[0]) && !/^\s|\s$/.test(t(_)) ? [].concat(_toConsumableArray(_.slice(0, -1)), [[].concat(_toConsumableArray(t(_)), _toConsumableArray(O))]) : [].concat(_toConsumableArray(_), [O]);
          }, []).map(function (_) {
            return _.reduce(function (O, R) {
              return O.length > 0 && /\s$/.test(t(O)) ? [].concat(_toConsumableArray(O.slice(0, -1)), [t(O) + " " + R]) : [].concat(_toConsumableArray(O), [R]);
            }, []);
          }).map(function (_) {
            return o.proseWrap === "never" ? [_.join(" ")] : _;
          }));

          function k(_) {
            if (E.chomping === "keep") return t(_).length === 0 ? _.slice(0, -1) : _;
            var O = 0;

            for (var R = _.length - 1; R >= 0 && _[R].length === 0; R--) {
              O++;
            }

            return O === 0 ? _ : O >= 2 && !y ? _.slice(0, -(O - 1)) : _.slice(0, -O);
          }
        }

        function I(E) {
          if (!E) return !0;

          switch (E.type) {
            case "plain":
            case "quoteDouble":
            case "quoteSingle":
            case "alias":
            case "flowMapping":
            case "flowSequence":
              return !0;

            default:
              return !1;
          }
        }

        n.exports = {
          getLast: t,
          getAncestorCount: i,
          isNode: r,
          isEmptyNode: p,
          isInlineNode: I,
          mapNode: u,
          defineShortcut: a,
          isNextLineEmpty: c,
          isLastDescendantNode: l,
          getBlockValueLineContents: w,
          getFlowScalarLineContents: B,
          getLastDescendantNode: C,
          hasPrettierIgnore: g,
          hasLeadingComments: h,
          hasMiddleComments: N,
          hasIndicatorComment: T,
          hasTrailingComment: A,
          hasEndComments: b
        };
      }
    }),
        eg = Z({
      "src/language-yaml/print-preprocess.js": function srcLanguageYamlPrintPreprocessJs(e, n) {
        "use strict";

        ae();

        var _jt = jt(),
            t = _jt.defineShortcut,
            s = _jt.mapNode;

        function i(u) {
          return s(u, r);
        }

        function r(u) {
          switch (u.type) {
            case "document":
              t(u, "head", function () {
                return u.children[0];
              }), t(u, "body", function () {
                return u.children[1];
              });
              break;

            case "documentBody":
            case "sequenceItem":
            case "flowSequenceItem":
            case "mappingKey":
            case "mappingValue":
              t(u, "content", function () {
                return u.children[0];
              });
              break;

            case "mappingItem":
            case "flowMappingItem":
              t(u, "key", function () {
                return u.children[0];
              }), t(u, "value", function () {
                return u.children[1];
              });
              break;
          }

          return u;
        }

        n.exports = i;
      }
    }),
        kr = Z({
      "src/language-yaml/print/misc.js": function srcLanguageYamlPrintMiscJs(e, n) {
        "use strict";

        ae();

        var _Le53 = Le(),
            _Le53$builders = _Le53.builders,
            t = _Le53$builders.softline,
            s = _Le53$builders.align,
            _jt2 = jt(),
            i = _jt2.hasEndComments,
            r = _jt2.isNextLineEmpty,
            u = _jt2.isNode,
            a = new WeakMap();

        function c(m, g) {
          var p = m.getValue(),
              f = m.stack[0],
              h;
          return a.has(f) ? h = a.get(f) : (h = new Set(), a.set(f, h)), !h.has(p.position.end.line) && (h.add(p.position.end.line), r(p, g) && !l(m.getParentNode())) ? t : "";
        }

        function l(m) {
          return i(m) && !u(m, ["documentHead", "documentBody", "flowMapping", "flowSequence"]);
        }

        function C(m, g) {
          return s(" ".repeat(m), g);
        }

        n.exports = {
          alignWithSpaces: C,
          shouldPrintEndComments: l,
          printNextEmptyLine: c
        };
      }
    }),
        tg = Z({
      "src/language-yaml/print/flow-mapping-sequence.js": function srcLanguageYamlPrintFlowMappingSequenceJs(e, n) {
        "use strict";

        ae();

        var _Le54 = Le(),
            _Le54$builders = _Le54.builders,
            t = _Le54$builders.ifBreak,
            s = _Le54$builders.line,
            i = _Le54$builders.softline,
            r = _Le54$builders.hardline,
            u = _Le54$builders.join,
            _jt3 = jt(),
            a = _jt3.isEmptyNode,
            c = _jt3.getLast,
            l = _jt3.hasEndComments,
            _kr = kr(),
            C = _kr.printNextEmptyLine,
            m = _kr.alignWithSpaces;

        function g(f, h, N) {
          var T = f.getValue(),
              A = T.type === "flowMapping",
              b = A ? "{" : "[",
              v = A ? "}" : "]",
              B = i;
          A && T.children.length > 0 && N.bracketSpacing && (B = s);
          var w = c(T.children),
              I = w && w.type === "flowMappingItem" && a(w.key) && a(w.value);
          return [b, m(N.tabWidth, [B, p(f, h, N), N.trailingComma === "none" ? "" : t(","), l(T) ? [r, u(r, f.map(h, "endComments"))] : ""]), I ? "" : B, v];
        }

        function p(f, h, N) {
          var T = f.getValue();
          return f.map(function (b, v) {
            return [h(), v === T.children.length - 1 ? "" : [",", s, T.children[v].position.start.line !== T.children[v + 1].position.start.line ? C(b, N.originalText) : ""]];
          }, "children");
        }

        n.exports = {
          printFlowMapping: g,
          printFlowSequence: g
        };
      }
    }),
        rg = Z({
      "src/language-yaml/print/mapping-item.js": function srcLanguageYamlPrintMappingItemJs(e, n) {
        "use strict";

        ae();

        var _Le55 = Le(),
            _Le55$builders = _Le55.builders,
            t = _Le55$builders.conditionalGroup,
            s = _Le55$builders.group,
            i = _Le55$builders.hardline,
            r = _Le55$builders.ifBreak,
            u = _Le55$builders.join,
            a = _Le55$builders.line,
            _jt4 = jt(),
            c = _jt4.hasLeadingComments,
            l = _jt4.hasMiddleComments,
            C = _jt4.hasTrailingComment,
            m = _jt4.hasEndComments,
            g = _jt4.isNode,
            p = _jt4.isEmptyNode,
            f = _jt4.isInlineNode,
            _kr2 = kr(),
            h = _kr2.alignWithSpaces;

        function N(v, B, w, I, E) {
          var D = v.key,
              d = v.value,
              y = p(D),
              o = p(d);
          if (y && o) return ": ";
          var x = I("key"),
              F = A(v) ? " " : "";
          if (o) return v.type === "flowMappingItem" && B.type === "flowMapping" ? x : v.type === "mappingItem" && T(D.content, E) && !C(D.content) && (!B.tag || B.tag.value !== "tag:yaml.org,2002:set") ? [x, F, ":"] : ["? ", h(2, x)];
          var S = I("value");
          if (y) return [": ", h(2, S)];
          if (c(d) || !f(D.content)) return ["? ", h(2, x), i, u("", w.map(I, "value", "leadingComments").map(function (H) {
            return [H, i];
          })), ": ", h(2, S)];
          if (b(D.content) && !c(D.content) && !l(D.content) && !C(D.content) && !m(D) && !c(d.content) && !l(d.content) && !m(d) && T(d.content, E)) return [x, F, ": ", S];

          var k = Symbol("mappingKey"),
              _ = s([r("? "), s(h(2, x), {
            id: k
          })]),
              O = [i, ": ", h(2, S)],
              R = [F, ":"];

          c(d.content) || m(d) && d.content && !g(d.content, ["mapping", "sequence"]) || B.type === "mapping" && C(D.content) && f(d.content) || g(d.content, ["mapping", "sequence"]) && d.content.tag === null && d.content.anchor === null ? R.push(i) : d.content && R.push(a), R.push(S);
          var M = h(E.tabWidth, R);
          return T(D.content, E) && !c(D.content) && !l(D.content) && !m(D) ? t([[x, M]]) : t([[_, r(O, M, {
            groupId: k
          })]]);
        }

        function T(v, B) {
          if (!v) return !0;

          switch (v.type) {
            case "plain":
            case "quoteSingle":
            case "quoteDouble":
              break;

            case "alias":
              return !0;

            default:
              return !1;
          }

          if (B.proseWrap === "preserve") return v.position.start.line === v.position.end.line;
          if (/\\$/m.test(B.originalText.slice(v.position.start.offset, v.position.end.offset))) return !1;

          switch (B.proseWrap) {
            case "never":
              return !v.value.includes("\n");

            case "always":
              return !/[\n ]/.test(v.value);

            default:
              return !1;
          }
        }

        function A(v) {
          return v.key.content && v.key.content.type === "alias";
        }

        function b(v) {
          if (!v) return !0;

          switch (v.type) {
            case "plain":
            case "quoteDouble":
            case "quoteSingle":
              return v.position.start.line === v.position.end.line;

            case "alias":
              return !0;

            default:
              return !1;
          }
        }

        n.exports = N;
      }
    }),
        ng = Z({
      "src/language-yaml/print/block.js": function srcLanguageYamlPrintBlockJs(e, n) {
        "use strict";

        ae();

        var _Le56 = Le(),
            _Le56$builders = _Le56.builders,
            t = _Le56$builders.dedent,
            s = _Le56$builders.dedentToRoot,
            i = _Le56$builders.fill,
            r = _Le56$builders.hardline,
            u = _Le56$builders.join,
            a = _Le56$builders.line,
            c = _Le56$builders.literalline,
            l = _Le56$builders.markAsRoot,
            C = _Le56.utils.getDocParts,
            _jt5 = jt(),
            m = _jt5.getAncestorCount,
            g = _jt5.getBlockValueLineContents,
            p = _jt5.hasIndicatorComment,
            f = _jt5.isLastDescendantNode,
            h = _jt5.isNode,
            _kr3 = kr(),
            N = _kr3.alignWithSpaces;

        function T(A, b, v) {
          var B = A.getValue(),
              w = m(A, function (y) {
            return h(y, ["sequence", "mapping"]);
          }),
              I = f(A),
              E = [B.type === "blockFolded" ? ">" : "|"];
          B.indent !== null && E.push(B.indent.toString()), B.chomping !== "clip" && E.push(B.chomping === "keep" ? "+" : "-"), p(B) && E.push(" ", b("indicatorComment"));
          var D = g(B, {
            parentIndent: w,
            isLastDescendant: I,
            options: v
          }),
              d = [];

          var _iterator59 = _createForOfIteratorHelper(D.entries()),
              _step59;

          try {
            for (_iterator59.s(); !(_step59 = _iterator59.n()).done;) {
              var _step59$value = _slicedToArray(_step59.value, 2),
                  y = _step59$value[0],
                  o = _step59$value[1];

              y === 0 && d.push(r), d.push(i(C(u(a, o)))), y !== D.length - 1 ? d.push(o.length === 0 ? r : l(c)) : B.chomping === "keep" && I && d.push(s(o.length === 0 ? r : c));
            }
          } catch (err) {
            _iterator59.e(err);
          } finally {
            _iterator59.f();
          }

          return B.indent === null ? E.push(t(N(v.tabWidth, d))) : E.push(s(N(B.indent - 1 + w, d))), E;
        }

        n.exports = T;
      }
    }),
        ug = Z({
      "src/language-yaml/printer-yaml.js": function srcLanguageYamlPrinterYamlJs(e, n) {
        "use strict";

        ae();

        var _Le57 = Le(),
            _Le57$builders = _Le57.builders,
            t = _Le57$builders.breakParent,
            s = _Le57$builders.fill,
            i = _Le57$builders.group,
            r = _Le57$builders.hardline,
            u = _Le57$builders.join,
            a = _Le57$builders.line,
            c = _Le57$builders.lineSuffix,
            l = _Le57$builders.literalline,
            _Le57$utils = _Le57.utils,
            C = _Le57$utils.getDocParts,
            m = _Le57$utils.replaceTextEndOfLine,
            _Ge44 = Ge(),
            g = _Ge44.isPreviousLineEmpty,
            _Yd = Yd(),
            p = _Yd.insertPragma,
            f = _Yd.isPragma,
            _Qd = Qd(),
            h = _Qd.locStart,
            N = Zd(),
            _jt6 = jt(),
            T = _jt6.getFlowScalarLineContents,
            A = _jt6.getLastDescendantNode,
            b = _jt6.hasLeadingComments,
            v = _jt6.hasMiddleComments,
            B = _jt6.hasTrailingComment,
            w = _jt6.hasEndComments,
            I = _jt6.hasPrettierIgnore,
            E = _jt6.isLastDescendantNode,
            D = _jt6.isNode,
            d = _jt6.isInlineNode,
            y = eg(),
            _kr4 = kr(),
            o = _kr4.alignWithSpaces,
            x = _kr4.printNextEmptyLine,
            F = _kr4.shouldPrintEndComments,
            _tg = tg(),
            S = _tg.printFlowMapping,
            k = _tg.printFlowSequence,
            _ = rg(),
            O = ng();

        function R(W, ee, U) {
          var ne = W.getValue(),
              se = [];
          ne.type !== "mappingValue" && b(ne) && se.push([u(r, W.map(U, "leadingComments")), r]);
          var V = ne.tag,
              oe = ne.anchor;
          V && se.push(U("tag")), V && oe && se.push(" "), oe && se.push(U("anchor"));
          var K = "";
          D(ne, ["mapping", "sequence", "comment", "directive", "mappingItem", "sequenceItem"]) && !E(W) && (K = x(W, ee.originalText)), (V || oe) && (D(ne, ["sequence", "mapping"]) && !v(ne) ? se.push(r) : se.push(" ")), v(ne) && se.push([ne.middleComments.length === 1 ? "" : r, u(r, W.map(U, "middleComments")), r]);
          var Ee = W.getParentNode();
          return I(W) ? se.push(m(ee.originalText.slice(ne.position.start.offset, ne.position.end.offset).trimEnd(), l)) : se.push(i(M(ne, Ee, W, ee, U))), B(ne) && !D(ne, ["document", "documentHead"]) && se.push(c([ne.type === "mappingValue" && !ne.content ? "" : " ", Ee.type === "mappingKey" && W.getParentNode(2).type === "mapping" && d(ne) ? "" : t, U("trailingComment")])), F(ne) && se.push(o(ne.type === "sequenceItem" ? 2 : 0, [r, u(r, W.map(function (q) {
            return [g(ee.originalText, q.getValue(), h) ? r : "", U()];
          }, "endComments"))])), se.push(K), se;
        }

        function M(W, ee, U, ne, se) {
          switch (W.type) {
            case "root":
              {
                var V = W.children,
                    oe = [];
                U.each(function (Ee, q) {
                  var le = V[q],
                      ue = V[q + 1];
                  q !== 0 && oe.push(r), oe.push(se()), P(le, ue) ? (oe.push(r, "..."), B(le) && oe.push(" ", se("trailingComment"))) : ue && !B(ue.head) && oe.push(r, "---");
                }, "children");
                var K = A(W);
                return (!D(K, ["blockLiteral", "blockFolded"]) || K.chomping !== "keep") && oe.push(r), oe;
              }

            case "document":
              {
                var _V5 = ee.children[U.getName() + 1],
                    _oe3 = [];
                return G(W, _V5, ee, ne) === "head" && ((W.head.children.length > 0 || W.head.endComments.length > 0) && _oe3.push(se("head")), B(W.head) ? _oe3.push(["---", " ", se(["head", "trailingComment"])]) : _oe3.push("---")), H(W) && _oe3.push(se("body")), u(r, _oe3);
              }

            case "documentHead":
              return u(r, [].concat(_toConsumableArray(U.map(se, "children")), _toConsumableArray(U.map(se, "endComments"))));

            case "documentBody":
              {
                var _V6 = W.children,
                    _oe4 = W.endComments,
                    _K2 = "";

                if (_V6.length > 0 && _oe4.length > 0) {
                  var Ee = A(W);
                  D(Ee, ["blockFolded", "blockLiteral"]) ? Ee.chomping !== "keep" && (_K2 = [r, r]) : _K2 = r;
                }

                return [u(r, U.map(se, "children")), _K2, u(r, U.map(se, "endComments"))];
              }

            case "directive":
              return ["%", u(" ", [W.name].concat(_toConsumableArray(W.parameters)))];

            case "comment":
              return ["#", W.value];

            case "alias":
              return ["*", W.value];

            case "tag":
              return ne.originalText.slice(W.position.start.offset, W.position.end.offset);

            case "anchor":
              return ["&", W.value];

            case "plain":
              return re(W.type, ne.originalText.slice(W.position.start.offset, W.position.end.offset), ne);

            case "quoteDouble":
            case "quoteSingle":
              {
                var _V7 = "'",
                    _oe5 = '"',
                    _K3 = ne.originalText.slice(W.position.start.offset + 1, W.position.end.offset - 1);

                if (W.type === "quoteSingle" && _K3.includes("\\") || W.type === "quoteDouble" && /\\[^"]/.test(_K3)) {
                  var q = W.type === "quoteDouble" ? _oe5 : _V7;
                  return [q, re(W.type, _K3, ne), q];
                }

                if (_K3.includes(_oe5)) return [_V7, re(W.type, W.type === "quoteDouble" ? _K3.replace(/\\"/g, _oe5).replace(/'/g, _V7.repeat(2)) : _K3, ne), _V7];
                if (_K3.includes(_V7)) return [_oe5, re(W.type, W.type === "quoteSingle" ? _K3.replace(/''/g, _V7) : _K3, ne), _oe5];

                var _Ee7 = ne.singleQuote ? _V7 : _oe5;

                return [_Ee7, re(W.type, _K3, ne), _Ee7];
              }

            case "blockFolded":
            case "blockLiteral":
              return O(U, se, ne);

            case "mapping":
            case "sequence":
              return u(r, U.map(se, "children"));

            case "sequenceItem":
              return ["- ", o(2, W.content ? se("content") : "")];

            case "mappingKey":
            case "mappingValue":
              return W.content ? se("content") : "";

            case "mappingItem":
            case "flowMappingItem":
              return _(W, ee, U, se, ne);

            case "flowMapping":
              return S(U, se, ne);

            case "flowSequence":
              return k(U, se, ne);

            case "flowSequenceItem":
              return se("content");

            default:
              throw new Error("Unexpected node type ".concat(W.type));
          }
        }

        function H(W) {
          return W.body.children.length > 0 || w(W.body);
        }

        function P(W, ee) {
          return B(W) || ee && (ee.head.children.length > 0 || w(ee.head));
        }

        function G(W, ee, U, ne) {
          return U.children[0] === W && /---(?:\s|$)/.test(ne.originalText.slice(h(W), h(W) + 4)) || W.head.children.length > 0 || w(W.head) || B(W.head) ? "head" : P(W, ee) ? !1 : ee ? "root" : !1;
        }

        function re(W, ee, U) {
          var ne = T(W, ee, U);
          return u(r, ne.map(function (se) {
            return s(C(u(a, se)));
          }));
        }

        function $(W, ee) {
          if (D(ee)) switch (delete ee.position, ee.type) {
            case "comment":
              if (f(ee.value)) return null;
              break;

            case "quoteDouble":
            case "quoteSingle":
              ee.type = "quote";
              break;
          }
        }

        n.exports = {
          preprocess: y,
          embed: N,
          print: R,
          massageAstNode: $,
          insertPragma: p
        };
      }
    }),
        sg = Z({
      "src/language-yaml/options.js": function srcLanguageYamlOptionsJs(e, n) {
        "use strict";

        ae();
        var t = Lt();
        n.exports = {
          bracketSpacing: t.bracketSpacing,
          singleQuote: t.singleQuote,
          proseWrap: t.proseWrap
        };
      }
    }),
        ag = Z({
      "src/language-yaml/parsers.js": function srcLanguageYamlParsersJs() {
        ae();
      }
    }),
        ig = Z({
      "node_modules/linguist-languages/data/YAML.json": function node_modulesLinguistLanguagesDataYAMLJson(e, n) {
        n.exports = {
          name: "YAML",
          type: "data",
          color: "#cb171e",
          tmScope: "source.yaml",
          aliases: ["yml"],
          extensions: [".yml", ".mir", ".reek", ".rviz", ".sublime-syntax", ".syntax", ".yaml", ".yaml-tmlanguage", ".yaml.sed", ".yml.mysql"],
          filenames: [".clang-format", ".clang-tidy", ".gemrc", "glide.lock", "yarn.lock"],
          aceMode: "yaml",
          codemirrorMode: "yaml",
          codemirrorMimeType: "text/x-yaml",
          languageId: 407
        };
      }
    }),
        og = Z({
      "src/language-yaml/index.js": function srcLanguageYamlIndexJs(e, n) {
        "use strict";

        ae();
        var t = bt(),
            s = ug(),
            i = sg(),
            r = ag(),
            u = [t(ig(), function (a) {
          return {
            since: "1.14.0",
            parsers: ["yaml"],
            vscodeLanguageIds: ["yaml", "ansible", "home-assistant"],
            filenames: [].concat(_toConsumableArray(a.filenames.filter(function (c) {
              return c !== "yarn.lock";
            })), [".prettierrc", ".stylelintrc"])
          };
        })];
        n.exports = {
          languages: u,
          printers: {
            yaml: s
          },
          options: i,
          parsers: r
        };
      }
    }),
        cg = Z({
      "src/languages.js": function srcLanguagesJs(e, n) {
        "use strict";

        ae(), n.exports = [$m(), id(), dd(), Fd(), wd(), Kd(), og()];
      }
    });

    ae();

    var _gi = gi(),
        lg = _gi.version,
        _t = om(),
        _Mn3 = Mn(),
        pg = _Mn3.getSupportInfo,
        fg = cm(),
        Dg = cg(),
        mg = Le();

    function St(e) {
      var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
      return function () {
        for (var t = arguments.length, s = new Array(t), i = 0; i < t; i++) {
          s[i] = arguments[i];
        }

        var r = s[n] || {},
            u = r.plugins || [];
        return s[n] = Object.assign(Object.assign({}, r), {}, {
          plugins: [].concat(_toConsumableArray(Dg), _toConsumableArray(Array.isArray(u) ? u : Object.values(u)))
        }), e.apply(void 0, s);
      };
    }

    var Sn = St(_t.formatWithCursor);
    yo.exports = {
      formatWithCursor: Sn,
      format: function format(e, n) {
        return Sn(e, n).formatted;
      },
      check: function check(e, n) {
        var _Sn = Sn(e, n),
            t = _Sn.formatted;

        return t === e;
      },
      doc: mg,
      getSupportInfo: St(pg, 0),
      version: lg,
      util: fg,
      __debug: {
        parse: St(_t.parse),
        formatAST: St(_t.formatAST),
        formatDoc: St(_t.formatDoc),
        printToDoc: St(_t.printToDoc),
        printDocToString: St(_t.printDocToString)
      }
    };
  });
  "use strict";

  return dg();
});
},{}],"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"main.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"main.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _main = _interopRequireDefault(require("./main.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Импортируйте CSS-модуль 
var _default = function _default() {
  console.log(_main.default.main);
};

exports.default = _default;
},{"./main.scss":"main.scss"}],"index.js":[function(require,module,exports) {
"use strict";

var _prettier = require("prettier");

var _main = _interopRequireDefault(require("./main"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Импортируйте компоненты
(0, _main.default)();
console.log('Hi');
var sliderOne = document.getElementById('slider-1');
var sliderTwo = document.getElementById('slider-2');
var displayValOne = document.getElementById('range1');
var displayValTwo = document.getElementById('range2');
var minGap = 1;
var sliderTrack = document.querySelector('.doubslider__track');
var sliderMaxValue = document.getElementById('slider-1').max;

sliderOne.oninput = function () {
  if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
    sliderOne.value = parseInt(sliderTwo.value) - minGap;
  }

  displayValOne.textContent = sliderOne.value;
  fillColor();
};

sliderTwo.oninput = function () {
  if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
    sliderTwo.value = parseInt(sliderOne.value) + minGap;
  }

  displayValTwo.textContent = sliderTwo.value;
  fillColor();
};

function fillColor() {
  var persent1 = sliderOne.value / sliderMaxValue * 100;
  var persent2 = sliderTwo.value / sliderMaxValue * 100;
  sliderTrack.style.background = "linear-gradient(to right, #dadae5 ".concat(persent1, "%, #3264fe ").concat(persent1, "%, #3264fe ").concat(persent2, "%, #dadae5 ").concat(persent2, "%)");
}
},{"prettier":"../node_modules/prettier/standalone.js","./main":"main.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "60016" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.js.map