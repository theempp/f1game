var cf = { exports: {} }, is = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var oy;
function LT() {
  if (oy) return is;
  oy = 1;
  var i = Symbol.for("react.transitional.element"), l = Symbol.for("react.fragment");
  function r(u, c, h) {
    var d = null;
    if (h !== void 0 && (d = "" + h), c.key !== void 0 && (d = "" + c.key), "key" in c) {
      h = {};
      for (var m in c)
        m !== "key" && (h[m] = c[m]);
    } else h = c;
    return c = h.ref, {
      $$typeof: i,
      type: u,
      key: d,
      ref: c !== void 0 ? c : null,
      props: h
    };
  }
  return is.Fragment = l, is.jsx = r, is.jsxs = r, is;
}
var uy;
function HT() {
  return uy || (uy = 1, cf.exports = LT()), cf.exports;
}
var lt = HT(), ff = { exports: {} }, ht = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ry;
function GT() {
  if (ry) return ht;
  ry = 1;
  var i = Symbol.for("react.transitional.element"), l = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), u = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), h = Symbol.for("react.consumer"), d = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), v = Symbol.for("react.suspense"), y = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), p = Symbol.for("react.activity"), T = Symbol.for("react.view_transition"), O = Symbol.iterator;
  function w(x) {
    return x === null || typeof x != "object" ? null : (x = O && x[O] || x["@@iterator"], typeof x == "function" ? x : null);
  }
  var B = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, _ = Object.assign, L = {};
  function H(x, j, J) {
    this.props = x, this.context = j, this.refs = L, this.updater = J || B;
  }
  H.prototype.isReactComponent = {}, H.prototype.setState = function(x, j) {
    if (typeof x != "object" && typeof x != "function" && x != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, x, j, "setState");
  }, H.prototype.forceUpdate = function(x) {
    this.updater.enqueueForceUpdate(this, x, "forceUpdate");
  };
  function X() {
  }
  X.prototype = H.prototype;
  function Q(x, j, J) {
    this.props = x, this.context = j, this.refs = L, this.updater = J || B;
  }
  var nt = Q.prototype = new X();
  nt.constructor = Q, _(nt, H.prototype), nt.isPureReactComponent = !0;
  var ut = Array.isArray;
  function Z() {
  }
  var N = { H: null, A: null, T: null, S: null }, dt = Object.prototype.hasOwnProperty;
  function it(x, j, J) {
    var st = J.ref;
    return {
      $$typeof: i,
      type: x,
      key: j,
      ref: st !== void 0 ? st : null,
      props: J
    };
  }
  function pt(x, j) {
    return it(x.type, j, x.props);
  }
  function bt(x) {
    return typeof x == "object" && x !== null && x.$$typeof === i;
  }
  function Xt(x) {
    var j = { "=": "=0", ":": "=2" };
    return "$" + x.replace(/[=:]/g, function(J) {
      return j[J];
    });
  }
  var Ut = /\/+/g;
  function St(x, j) {
    return typeof x == "object" && x !== null && x.key != null ? Xt("" + x.key) : j.toString(36);
  }
  function Y(x) {
    switch (x.status) {
      case "fulfilled":
        return x.value;
      case "rejected":
        throw x.reason;
      default:
        switch (typeof x.status == "string" ? x.then(Z, Z) : (x.status = "pending", x.then(
          function(j) {
            x.status === "pending" && (x.status = "fulfilled", x.value = j);
          },
          function(j) {
            x.status === "pending" && (x.status = "rejected", x.reason = j);
          }
        )), x.status) {
          case "fulfilled":
            return x.value;
          case "rejected":
            throw x.reason;
        }
    }
    throw x;
  }
  function at(x, j, J, st, xt) {
    var rt = typeof x;
    (rt === "undefined" || rt === "boolean") && (x = null);
    var Ct = !1;
    if (x === null) Ct = !0;
    else
      switch (rt) {
        case "bigint":
        case "string":
        case "number":
          Ct = !0;
          break;
        case "object":
          switch (x.$$typeof) {
            case i:
            case l:
              Ct = !0;
              break;
            case b:
              return Ct = x._init, at(
                Ct(x._payload),
                j,
                J,
                st,
                xt
              );
          }
      }
    if (Ct)
      return xt = xt(x), Ct = st === "" ? "." + St(x, 0) : st, ut(xt) ? (J = "", Ct != null && (J = Ct.replace(Ut, "$&/") + "/"), at(xt, j, J, "", function(Ve) {
        return Ve;
      })) : xt != null && (bt(xt) && (xt = pt(
        xt,
        J + (xt.key == null || x && x.key === xt.key ? "" : ("" + xt.key).replace(
          Ut,
          "$&/"
        ) + "/") + Ct
      )), j.push(xt)), 1;
    Ct = 0;
    var $ = st === "" ? "." : st + ":";
    if (ut(x))
      for (var ct = 0; ct < x.length; ct++)
        st = x[ct], rt = $ + St(st, ct), Ct += at(
          st,
          j,
          J,
          rt,
          xt
        );
    else if (ct = w(x), typeof ct == "function")
      for (x = ct.call(x), ct = 0; !(st = x.next()).done; )
        st = st.value, rt = $ + St(st, ct++), Ct += at(
          st,
          j,
          J,
          rt,
          xt
        );
    else if (rt === "object") {
      if (typeof x.then == "function")
        return at(
          Y(x),
          j,
          J,
          st,
          xt
        );
      throw j = String(x), Error(
        "Objects are not valid as a React child (found: " + (j === "[object Object]" ? "object with keys {" + Object.keys(x).join(", ") + "}" : j) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return Ct;
  }
  function k(x, j, J) {
    if (x == null) return x;
    var st = [], xt = 0;
    return at(x, st, "", "", function(rt) {
      return j.call(J, rt, xt++);
    }), st;
  }
  function q(x) {
    if (x._status === -1) {
      var j = x._result, J = j();
      J.then(
        function(st) {
          (x._status === 0 || x._status === -1) && (x._status = 1, x._result = st, J.status === void 0 && (J.status = "fulfilled", J.value = st));
        },
        function(st) {
          (x._status === 0 || x._status === -1) && (x._status = 2, x._result = st, J.status === void 0 && (J.status = "rejected", J.reason = st));
        }
      ), x._status === -1 && (x._status = 0, x._result = J);
    }
    if (x._status === 1) return x._result.default;
    throw x._result;
  }
  var G = typeof reportError == "function" ? reportError : function(x) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var j = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof x == "object" && x !== null && typeof x.message == "string" ? String(x.message) : String(x),
        error: x
      });
      if (!window.dispatchEvent(j)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", x);
      return;
    }
    console.error(x);
  };
  function Bt(x) {
    var j = N.T, J = {};
    J.types = j !== null ? j.types : null, N.T = J;
    try {
      var st = x(), xt = N.S;
      xt !== null && xt(J, st), typeof st == "object" && st !== null && typeof st.then == "function" && st.then(Z, G);
    } catch (rt) {
      G(rt);
    } finally {
      j !== null && J.types !== null && (j.types = J.types), N.T = j;
    }
  }
  function Pt(x) {
    var j = N.T;
    if (j !== null) {
      var J = j.types;
      J === null ? j.types = [x] : J.indexOf(x) === -1 && J.push(x);
    } else Bt(Pt.bind(null, x));
  }
  var _e = {
    map: k,
    forEach: function(x, j, J) {
      k(
        x,
        function() {
          j.apply(this, arguments);
        },
        J
      );
    },
    count: function(x) {
      var j = 0;
      return k(x, function() {
        j++;
      }), j;
    },
    toArray: function(x) {
      return k(x, function(j) {
        return j;
      }) || [];
    },
    only: function(x) {
      if (!bt(x))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return x;
    }
  };
  return ht.Activity = p, ht.Children = _e, ht.Component = H, ht.Fragment = r, ht.Profiler = c, ht.PureComponent = Q, ht.StrictMode = u, ht.Suspense = v, ht.ViewTransition = T, ht.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = N, ht.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(x) {
      return N.H.useMemoCache(x);
    }
  }, ht.addTransitionType = Pt, ht.cache = function(x) {
    return function() {
      return x.apply(null, arguments);
    };
  }, ht.cacheSignal = function() {
    return null;
  }, ht.cloneElement = function(x, j, J) {
    if (x == null)
      throw Error(
        "The argument must be a React element, but you passed " + x + "."
      );
    var st = _({}, x.props), xt = x.key;
    if (j != null)
      for (rt in j.key !== void 0 && (xt = "" + j.key), j)
        !dt.call(j, rt) || rt === "key" || rt === "__self" || rt === "__source" || rt === "ref" && j.ref === void 0 || (st[rt] = j[rt]);
    var rt = arguments.length - 2;
    if (rt === 1) st.children = J;
    else if (1 < rt) {
      for (var Ct = Array(rt), $ = 0; $ < rt; $++)
        Ct[$] = arguments[$ + 2];
      st.children = Ct;
    }
    return it(x.type, xt, st);
  }, ht.createContext = function(x) {
    return x = {
      $$typeof: d,
      _currentValue: x,
      _currentValue2: x,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, x.Provider = x, x.Consumer = {
      $$typeof: h,
      _context: x
    }, x;
  }, ht.createElement = function(x, j, J) {
    var st, xt = {}, rt = null;
    if (j != null)
      for (st in j.key !== void 0 && (rt = "" + j.key), j)
        dt.call(j, st) && st !== "key" && st !== "__self" && st !== "__source" && (xt[st] = j[st]);
    var Ct = arguments.length - 2;
    if (Ct === 1) xt.children = J;
    else if (1 < Ct) {
      for (var $ = Array(Ct), ct = 0; ct < Ct; ct++)
        $[ct] = arguments[ct + 2];
      xt.children = $;
    }
    if (x && x.defaultProps)
      for (st in Ct = x.defaultProps, Ct)
        xt[st] === void 0 && (xt[st] = Ct[st]);
    return it(x, rt, xt);
  }, ht.createRef = function() {
    return { current: null };
  }, ht.forwardRef = function(x) {
    return { $$typeof: m, render: x };
  }, ht.isValidElement = bt, ht.lazy = function(x) {
    return {
      $$typeof: b,
      _payload: { _status: -1, _result: x },
      _init: q
    };
  }, ht.memo = function(x, j) {
    return {
      $$typeof: y,
      type: x,
      compare: j === void 0 ? null : j
    };
  }, ht.startTransition = Bt, ht.unstable_useCacheRefresh = function() {
    return N.H.useCacheRefresh();
  }, ht.use = function(x) {
    return N.H.use(x);
  }, ht.useActionState = function(x, j, J) {
    return N.H.useActionState(x, j, J);
  }, ht.useCallback = function(x, j) {
    return N.H.useCallback(x, j);
  }, ht.useContext = function(x) {
    return N.H.useContext(x);
  }, ht.useDebugValue = function() {
  }, ht.useDeferredValue = function(x, j) {
    return N.H.useDeferredValue(x, j);
  }, ht.useEffect = function(x, j) {
    return N.H.useEffect(x, j);
  }, ht.useEffectEvent = function(x) {
    return N.H.useEffectEvent(x);
  }, ht.useId = function() {
    return N.H.useId();
  }, ht.useImperativeHandle = function(x, j, J) {
    return N.H.useImperativeHandle(x, j, J);
  }, ht.useInsertionEffect = function(x, j) {
    return N.H.useInsertionEffect(x, j);
  }, ht.useLayoutEffect = function(x, j) {
    return N.H.useLayoutEffect(x, j);
  }, ht.useMemo = function(x, j) {
    return N.H.useMemo(x, j);
  }, ht.useOptimistic = function(x, j) {
    return N.H.useOptimistic(x, j);
  }, ht.useReducer = function(x, j, J) {
    return N.H.useReducer(x, j, J);
  }, ht.useRef = function(x) {
    return N.H.useRef(x);
  }, ht.useState = function(x) {
    return N.H.useState(x);
  }, ht.useSyncExternalStore = function(x, j, J) {
    return N.H.useSyncExternalStore(
      x,
      j,
      J
    );
  }, ht.useTransition = function() {
    return N.H.useTransition();
  }, ht.version = "19.3.0", ht;
}
var cy;
function sd() {
  return cy || (cy = 1, ff.exports = GT()), ff.exports;
}
var F = sd(), df = { exports: {} }, ls = {}, hf = { exports: {} }, mf = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fy;
function YT() {
  return fy || (fy = 1, (function(i) {
    function l(Y, at) {
      var k = Y.length;
      Y.push(at);
      t: for (; 0 < k; ) {
        var q = k - 1 >>> 1, G = Y[q];
        if (0 < c(G, at))
          Y[q] = at, Y[k] = G, k = q;
        else break t;
      }
    }
    function r(Y) {
      return Y.length === 0 ? null : Y[0];
    }
    function u(Y) {
      if (Y.length === 0) return null;
      var at = Y[0], k = Y.pop();
      if (k !== at) {
        Y[0] = k;
        t: for (var q = 0, G = Y.length, Bt = G >>> 1; q < Bt; ) {
          var Pt = 2 * (q + 1) - 1, _e = Y[Pt], x = Pt + 1, j = Y[x];
          if (0 > c(_e, k))
            x < G && 0 > c(j, _e) ? (Y[q] = j, Y[x] = k, q = x) : (Y[q] = _e, Y[Pt] = k, q = Pt);
          else if (x < G && 0 > c(j, k))
            Y[q] = j, Y[x] = k, q = x;
          else break t;
        }
      }
      return at;
    }
    function c(Y, at) {
      var k = Y.sortIndex - at.sortIndex;
      return k !== 0 ? k : Y.id - at.id;
    }
    if (i.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var h = performance;
      i.unstable_now = function() {
        return h.now();
      };
    } else {
      var d = Date, m = d.now();
      i.unstable_now = function() {
        return d.now() - m;
      };
    }
    var v = [], y = [], b = 1, p = null, T = 3, O = !1, w = !1, B = !1, _ = !1, L = typeof setTimeout == "function" ? setTimeout : null, H = typeof clearTimeout == "function" ? clearTimeout : null, X = typeof setImmediate < "u" ? setImmediate : null;
    function Q(Y) {
      for (var at = r(y); at !== null; ) {
        if (at.callback === null) u(y);
        else if (at.startTime <= Y)
          u(y), at.sortIndex = at.expirationTime, l(v, at);
        else break;
        at = r(y);
      }
    }
    function nt(Y) {
      if (B = !1, Q(Y), !w)
        if (r(v) !== null)
          w = !0, ut || (ut = !0, bt());
        else {
          var at = r(y);
          at !== null && St(nt, at.startTime - Y);
        }
    }
    var ut = !1, Z = -1, N = 5, dt = -1;
    function it() {
      return _ ? !0 : !(i.unstable_now() - dt < N);
    }
    function pt() {
      if (_ = !1, ut) {
        var Y = i.unstable_now();
        dt = Y;
        var at = !0;
        try {
          t: {
            w = !1, B && (B = !1, H(Z), Z = -1), O = !0;
            var k = T;
            try {
              e: {
                for (Q(Y), p = r(v); p !== null && !(p.expirationTime > Y && it()); ) {
                  var q = p.callback;
                  if (typeof q == "function") {
                    p.callback = null, T = p.priorityLevel;
                    var G = q(
                      p.expirationTime <= Y
                    );
                    if (Y = i.unstable_now(), typeof G == "function") {
                      p.callback = G, Q(Y), at = !0;
                      break e;
                    }
                    p === r(v) && u(v), Q(Y);
                  } else u(v);
                  p = r(v);
                }
                if (p !== null) at = !0;
                else {
                  var Bt = r(y);
                  Bt !== null && St(
                    nt,
                    Bt.startTime - Y
                  ), at = !1;
                }
              }
              break t;
            } finally {
              p = null, T = k, O = !1;
            }
            at = void 0;
          }
        } finally {
          at ? bt() : ut = !1;
        }
      }
    }
    var bt;
    if (typeof X == "function")
      bt = function() {
        X(pt);
      };
    else if (typeof MessageChannel < "u") {
      var Xt = new MessageChannel(), Ut = Xt.port2;
      Xt.port1.onmessage = pt, bt = function() {
        Ut.postMessage(null);
      };
    } else
      bt = function() {
        L(pt, 0);
      };
    function St(Y, at) {
      Z = L(function() {
        Y(i.unstable_now());
      }, at);
    }
    i.unstable_IdlePriority = 5, i.unstable_ImmediatePriority = 1, i.unstable_LowPriority = 4, i.unstable_NormalPriority = 3, i.unstable_Profiling = null, i.unstable_UserBlockingPriority = 2, i.unstable_cancelCallback = function(Y) {
      Y.callback = null;
    }, i.unstable_forceFrameRate = function(Y) {
      0 > Y || 125 < Y ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : N = 0 < Y ? Math.floor(1e3 / Y) : 5;
    }, i.unstable_getCurrentPriorityLevel = function() {
      return T;
    }, i.unstable_next = function(Y) {
      switch (T) {
        case 1:
        case 2:
        case 3:
          var at = 3;
          break;
        default:
          at = T;
      }
      var k = T;
      T = at;
      try {
        return Y();
      } finally {
        T = k;
      }
    }, i.unstable_requestPaint = function() {
      _ = !0;
    }, i.unstable_runWithPriority = function(Y, at) {
      switch (Y) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          Y = 3;
      }
      var k = T;
      T = Y;
      try {
        return at();
      } finally {
        T = k;
      }
    }, i.unstable_scheduleCallback = function(Y, at, k) {
      var q = i.unstable_now();
      switch (typeof k == "object" && k !== null ? (k = k.delay, k = typeof k == "number" && 0 < k ? q + k : q) : k = q, Y) {
        case 1:
          var G = -1;
          break;
        case 2:
          G = 250;
          break;
        case 5:
          G = 1073741823;
          break;
        case 4:
          G = 1e4;
          break;
        default:
          G = 5e3;
      }
      return G = k + G, Y = {
        id: b++,
        callback: at,
        priorityLevel: Y,
        startTime: k,
        expirationTime: G,
        sortIndex: -1
      }, k > q ? (Y.sortIndex = k, l(y, Y), r(v) === null && Y === r(y) && (B ? (H(Z), Z = -1) : B = !0, St(nt, k - q))) : (Y.sortIndex = G, l(v, Y), w || O || (w = !0, ut || (ut = !0, bt()))), Y;
    }, i.unstable_shouldYield = it, i.unstable_wrapCallback = function(Y) {
      var at = T;
      return function() {
        var k = T;
        T = at;
        try {
          return Y.apply(this, arguments);
        } finally {
          T = k;
        }
      };
    };
  })(mf)), mf;
}
var dy;
function qT() {
  return dy || (dy = 1, hf.exports = YT()), hf.exports;
}
var gf = { exports: {} }, pe = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hy;
function XT() {
  if (hy) return pe;
  hy = 1;
  var i = sd();
  function l(b) {
    var p = "https://react.dev/errors/" + b;
    if (1 < arguments.length) {
      p += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var T = 2; T < arguments.length; T++)
        p += "&args[]=" + encodeURIComponent(arguments[T]);
    }
    return "Minified React error #" + b + "; visit " + p + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function r() {
  }
  var u = {
    d: {
      f: r,
      r: function() {
        throw Error(l(522));
      },
      D: r,
      C: r,
      L: r,
      m: r,
      X: r,
      S: r,
      M: r
    },
    p: 0,
    findDOMNode: null
  }, c = Symbol.for("react.portal"), h = Symbol.for("react.recoverable"), d = Symbol.for("react.optimistic_key");
  function m(b, p, T) {
    var O = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: c,
      key: O == null ? null : O === d ? d : "" + O,
      children: b,
      containerInfo: p,
      implementation: T
    };
  }
  var v = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function y(b, p) {
    if (b === "font") return "";
    if (typeof p == "string")
      return p === "use-credentials" ? p : "";
  }
  return pe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = u, pe.browser = function(b) {
    return { $$typeof: h, _reason: b };
  }, pe.createPortal = function(b, p) {
    var T = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!p || p.nodeType !== 1 && p.nodeType !== 9 && p.nodeType !== 11)
      throw Error(l(299));
    return m(b, p, null, T);
  }, pe.flushSync = function(b) {
    var p = v.T, T = u.p;
    try {
      if (v.T = null, u.p = 2, b) return b();
    } finally {
      v.T = p, u.p = T, u.d.f();
    }
  }, pe.preconnect = function(b, p) {
    typeof b == "string" && (p ? (p = p.crossOrigin, p = typeof p == "string" ? p === "use-credentials" ? p : "" : void 0) : p = null, u.d.C(b, p));
  }, pe.prefetchDNS = function(b) {
    typeof b == "string" && u.d.D(b);
  }, pe.preinit = function(b, p) {
    if (typeof b == "string" && p && typeof p.as == "string") {
      var T = p.as, O = y(T, p.crossOrigin), w = typeof p.integrity == "string" ? p.integrity : void 0, B = typeof p.fetchPriority == "string" ? p.fetchPriority : void 0;
      T === "style" ? u.d.S(
        b,
        typeof p.precedence == "string" ? p.precedence : void 0,
        {
          crossOrigin: O,
          integrity: w,
          fetchPriority: B
        }
      ) : T === "script" && u.d.X(b, {
        crossOrigin: O,
        integrity: w,
        fetchPriority: B,
        nonce: typeof p.nonce == "string" ? p.nonce : void 0
      });
    }
  }, pe.preinitModule = function(b, p) {
    if (typeof b == "string")
      if (typeof p == "object" && p !== null) {
        if (p.as == null || p.as === "script") {
          var T = y(
            p.as,
            p.crossOrigin
          );
          u.d.M(b, {
            crossOrigin: T,
            integrity: typeof p.integrity == "string" ? p.integrity : void 0,
            nonce: typeof p.nonce == "string" ? p.nonce : void 0,
            fetchPriority: typeof p.fetchPriority == "string" ? p.fetchPriority : void 0
          });
        }
      } else p == null && u.d.M(b);
  }, pe.preload = function(b, p) {
    if (typeof b == "string" && typeof p == "object" && p !== null && typeof p.as == "string") {
      var T = p.as, O = y(T, p.crossOrigin);
      u.d.L(b, T, {
        crossOrigin: O,
        integrity: typeof p.integrity == "string" ? p.integrity : void 0,
        nonce: typeof p.nonce == "string" ? p.nonce : void 0,
        type: typeof p.type == "string" ? p.type : void 0,
        fetchPriority: typeof p.fetchPriority == "string" ? p.fetchPriority : void 0,
        referrerPolicy: typeof p.referrerPolicy == "string" ? p.referrerPolicy : void 0,
        imageSrcSet: typeof p.imageSrcSet == "string" ? p.imageSrcSet : void 0,
        imageSizes: typeof p.imageSizes == "string" ? p.imageSizes : void 0,
        media: typeof p.media == "string" ? p.media : void 0
      });
    }
  }, pe.preloadModule = function(b, p) {
    if (typeof b == "string")
      if (p) {
        var T = y(p.as, p.crossOrigin);
        u.d.m(b, {
          as: typeof p.as == "string" && p.as !== "script" ? p.as : void 0,
          crossOrigin: T,
          integrity: typeof p.integrity == "string" ? p.integrity : void 0,
          nonce: typeof p.nonce == "string" ? p.nonce : void 0,
          fetchPriority: typeof p.fetchPriority == "string" ? p.fetchPriority : void 0
        });
      } else u.d.m(b);
  }, pe.requestFormReset = function(b) {
    u.d.r(b);
  }, pe.unstable_batchedUpdates = function(b, p) {
    return b(p);
  }, pe.useFormState = function(b, p, T) {
    return v.H.useFormState(b, p, T);
  }, pe.useFormStatus = function() {
    return v.H.useHostTransitionStatus();
  }, pe.version = "19.3.0", pe;
}
var my;
function QT() {
  if (my) return gf.exports;
  my = 1;
  function i() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (l) {
        console.error(l);
      }
  }
  return i(), gf.exports = XT(), gf.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gy;
function ZT() {
  if (gy) return ls;
  gy = 1;
  var i = qT(), l = sd(), r = QT();
  function u(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++)
        e += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function c(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
  }
  function h(t) {
    for (var e = t, n = e; n && !n.alternate; )
      e = n, (e.flags & 4098) !== 0 && (t = e.return), n = e.return;
    for (; e.return; ) e = e.return;
    return e.tag === 3 ? t : null;
  }
  function d(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function m(t) {
    if (t.tag === 31) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function v(t) {
    if (h(t) !== t)
      throw Error(u(188));
  }
  function y(t) {
    var e = t.alternate;
    if (!e) {
      if (e = h(t), e === null) throw Error(u(188));
      return e !== t ? null : t;
    }
    for (var n = t, a = e; ; ) {
      var s = n.return;
      if (s === null) break;
      var o = s.alternate;
      if (o === null) {
        if (a = s.return, a !== null) {
          n = a;
          continue;
        }
        break;
      }
      if (s.child === o.child) {
        for (o = s.child; o; ) {
          if (o === n) return v(s), t;
          if (o === a) return v(s), e;
          o = o.sibling;
        }
        throw Error(u(188));
      }
      if (n.return !== a.return) n = s, a = o;
      else {
        for (var f = !1, g = s.child; g; ) {
          if (g === n) {
            f = !0, n = s, a = o;
            break;
          }
          if (g === a) {
            f = !0, a = s, n = o;
            break;
          }
          g = g.sibling;
        }
        if (!f) {
          for (g = o.child; g; ) {
            if (g === n) {
              f = !0, n = o, a = s;
              break;
            }
            if (g === a) {
              f = !0, a = o, n = s;
              break;
            }
            g = g.sibling;
          }
          if (!f) throw Error(u(189));
        }
      }
      if (n.alternate !== a) throw Error(u(190));
    }
    if (n.tag !== 3) throw Error(u(188));
    return n.stateNode.current === n ? t : e;
  }
  function b(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (e = b(t), e !== null) return e;
      t = t.sibling;
    }
    return null;
  }
  function p(t, e, n, a, s, o) {
    for (; t !== null; ) {
      if ((t.tag === 5 || t.tag === 27 || t.tag === 6) && n(t, a, s, o) || (t.tag !== 22 || t.memoizedState === null) && (e || t.tag !== 5 && t.tag !== 27) && p(
        t.child,
        e,
        n,
        a,
        s,
        o
      ))
        return !0;
      t = t.sibling;
    }
    return !1;
  }
  function T(t) {
    for (t = t.return; t !== null; ) {
      if (t.tag === 3 || t.tag === 5 || t.tag === 27) return t;
      t = t.return;
    }
    return null;
  }
  function O(t) {
    var e = !1;
    for (t = t.return; t !== null && (t.tag === 4 && (e = !0), !(t.tag === 3 || t.tag === 5 || t.tag === 27)); )
      t = t.return;
    return e;
  }
  function w(t) {
    var e = [null, null], n = T(t);
    return n === null || B(
      e,
      t,
      n.child,
      { foundSelf: !1 }
    ), e;
  }
  function B(t, e, n, a) {
    for (; n !== null; ) {
      if (n === e) a.foundSelf = !0;
      else if (n.tag === 5 || n.tag === 27 || n.tag === 6) {
        if (a.foundSelf) return t[1] = n, !0;
        t[0] = n;
      } else if ((n.tag !== 22 || n.memoizedState === null) && B(
        t,
        e,
        n.child,
        a
      ))
        return !0;
      n = n.sibling;
    }
    return !1;
  }
  function _(t) {
    switch (t.tag) {
      case 5:
      case 27:
      case 6:
        return t.stateNode;
      case 3:
        return t.stateNode.containerInfo;
      default:
        throw Error(u(559));
    }
  }
  var L = null, H = null;
  function X(t, e, n) {
    return t === n ? !0 : t === e ? (L = t, !0) : !1;
  }
  function Q(t, e, n) {
    return t === n ? (H = t, !1) : t === e ? (H !== null && (L = t), !0) : !1;
  }
  function nt(t) {
    if (t === null) return null;
    do
      t = t === null ? null : t.return;
    while (t && t.tag !== 5 && t.tag !== 27 && t.tag !== 3);
    return t || null;
  }
  function ut(t, e, n) {
    for (var a = 0, s = t; s; s = n(s)) a++;
    s = 0;
    for (var o = e; o; o = n(o)) s++;
    for (; 0 < a - s; ) t = n(t), a--;
    for (; 0 < s - a; ) e = n(e), s--;
    for (; a--; ) {
      if (t === e || e !== null && t === e.alternate)
        return t;
      t = n(t), e = n(e);
    }
    return null;
  }
  var Z = Object.assign, N = Symbol.for("react.element"), dt = Symbol.for("react.transitional.element"), it = Symbol.for("react.portal"), pt = Symbol.for("react.fragment"), bt = Symbol.for("react.strict_mode"), Xt = Symbol.for("react.profiler"), Ut = Symbol.for("react.consumer"), St = Symbol.for("react.context"), Y = Symbol.for("react.forward_ref"), at = Symbol.for("react.suspense"), k = Symbol.for("react.suspense_list"), q = Symbol.for("react.memo"), G = Symbol.for("react.lazy"), Bt = Symbol.for("react.activity"), Pt = Symbol.for("react.legacy_hidden"), _e = Symbol.for("react.memo_cache_sentinel"), x = Symbol.for("react.view_transition"), j = Symbol.for("react.recoverable"), J = Symbol.iterator;
  function st(t) {
    return t === null || typeof t != "object" ? null : (t = J && t[J] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var xt = Symbol.for("react.client.reference");
  function rt(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === xt ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case pt:
        return "Fragment";
      case Xt:
        return "Profiler";
      case bt:
        return "StrictMode";
      case at:
        return "Suspense";
      case k:
        return "SuspenseList";
      case Bt:
        return "Activity";
      case x:
        return "ViewTransition";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case it:
          return "Portal";
        case St:
          return t.displayName || "Context";
        case Ut:
          return (t._context.displayName || "Context") + ".Consumer";
        case Y:
          var e = t.render;
          return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case q:
          return e = t.displayName || null, e !== null ? e : rt(t.type) || "Memo";
        case G:
          e = t._payload, t = t._init;
          try {
            return rt(t(e));
          } catch {
          }
      }
    return null;
  }
  var Ct = Array.isArray, $ = l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ct = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Ve = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, Jn = [], ci = -1;
  function hn(t) {
    return { current: t };
  }
  function re(t) {
    0 > ci || (t.current = Jn[ci], Jn[ci] = null, ci--);
  }
  function Gt(t, e) {
    ci++, Jn[ci] = t.current, t.current = e;
  }
  var mn = hn(null), cl = hn(null), Fn = hn(null), xs = hn(null);
  function As(t, e) {
    switch (Gt(Fn, e), Gt(cl, t), Gt(mn, null), e.nodeType) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? pp(t) : 0;
        break;
      default:
        if (t = e.tagName, e = e.namespaceURI)
          e = pp(e), t = yp(e, t);
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    re(mn), Gt(mn, t);
  }
  function fi() {
    re(mn), re(cl), re(Fn);
  }
  function Ou(t) {
    var e = t.memoizedState;
    e !== null && (Wi._currentValue = e.memoizedState, Gt(xs, t)), e = mn.current;
    var n = yp(e, t.type);
    e !== n && (Gt(cl, t), Gt(mn, n));
  }
  function Ms(t) {
    cl.current === t && (re(mn), re(cl)), xs.current === t && (re(xs), Wi._currentValue = Ve);
  }
  var Ru, jd;
  function Pn(t) {
    if (Ru === void 0)
      try {
        throw Error();
      } catch (n) {
        var e = n.stack.trim().match(/\n( *(at )?)/);
        Ru = e && e[1] || "", jd = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Ru + t + jd;
  }
  var wu = !1;
  function Nu(t, e) {
    if (!t || wu) return "";
    wu = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function() {
          try {
            if (e) {
              var U = function() {
                throw Error();
              };
              if (Object.defineProperty(U.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(U, []);
                } catch (K) {
                  var A = K;
                }
                Reflect.construct(t, [], U);
              } else {
                try {
                  U.call();
                } catch (K) {
                  A = K;
                }
                U = !1;
                try {
                  var z = Object.getOwnPropertyDescriptor(
                    t.prototype,
                    "props"
                  );
                  Object.defineProperty(t.prototype, "props", {
                    configurable: !0,
                    set: function() {
                      throw Error();
                    }
                  }), U = !0, new t();
                } finally {
                  U && (z !== void 0 ? Object.defineProperty(t.prototype, "props", z) : delete t.prototype.props);
                }
              }
            } else {
              try {
                throw Error();
              } catch (K) {
                A = K;
              }
              (U = t()) && typeof U.catch == "function" && U.catch(function() {
              });
            }
          } catch (K) {
            if (K && A && typeof K.stack == "string")
              return [K.stack, A.stack];
          }
          return [null, null];
        }
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var s = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name"
      );
      s && s.configurable && Object.defineProperty(
        a.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var o = a.DetermineComponentFrameRoot(), f = o[0], g = o[1];
      if (f && g) {
        var S = f.split(`
`), C = g.split(`
`);
        for (s = a = 0; a < S.length && !S[a].includes("DetermineComponentFrameRoot"); )
          a++;
        for (; s < C.length && !C[s].includes(
          "DetermineComponentFrameRoot"
        ); )
          s++;
        if (a === S.length || s === C.length)
          for (a = S.length - 1, s = C.length - 1; 1 <= a && 0 <= s && S[a] !== C[s]; )
            s--;
        for (; 1 <= a && 0 <= s; a--, s--)
          if (S[a] !== C[s]) {
            if (a !== 1 || s !== 1)
              do
                if (a--, s--, 0 > s || S[a] !== C[s]) {
                  var R = `
` + S[a].replace(" at new ", " at ");
                  return t.displayName && R.includes("<anonymous>") && (R = R.replace("<anonymous>", t.displayName)), R;
                }
              while (1 <= a && 0 <= s);
            break;
          }
      }
    } finally {
      wu = !1, Error.prepareStackTrace = n;
    }
    return (n = t ? t.displayName || t.name : "") ? Pn(n) : "";
  }
  function qb(t, e) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return Pn(t.type);
      case 16:
        return Pn("Lazy");
      case 13:
        return t.child !== e && e !== null ? Pn("Suspense Fallback") : Pn("Suspense");
      case 19:
        return Pn("SuspenseList");
      case 0:
      case 15:
        return Nu(t.type, !1);
      case 11:
        return Nu(t.type.render, !1);
      case 1:
        return Nu(t.type, !0);
      case 31:
        return Pn("Activity");
      case 30:
        return Pn("ViewTransition");
      default:
        return "";
    }
  }
  function Ld(t) {
    try {
      var e = "", n = null;
      do
        e += qb(t, n), n = t, t = t.return;
      while (t);
      return e;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  var _u = Object.prototype.hasOwnProperty, Vu = i.unstable_scheduleCallback, Uu = i.unstable_cancelCallback, Xb = i.unstable_shouldYield, Qb = i.unstable_requestPaint, Ue = i.unstable_now, Zb = i.unstable_getCurrentPriorityLevel, Hd = i.unstable_ImmediatePriority, Gd = i.unstable_UserBlockingPriority, Cs = i.unstable_NormalPriority, Kb = i.unstable_LowPriority, Yd = i.unstable_IdlePriority, kb = i.log, Jb = i.unstable_setDisableYieldValue, fl = null, Be = null;
  function In(t) {
    if (typeof kb == "function" && Jb(t), Be && typeof Be.setStrictMode == "function")
      try {
        Be.setStrictMode(fl, t);
      } catch {
      }
  }
  var je = Math.clz32 ? Math.clz32 : Ib, Fb = Math.log, Pb = Math.LN2;
  function Ib(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (Fb(t) / Pb | 0) | 0;
  }
  var Ds = 256, zs = 262144, Os = 4194304;
  function Na(t) {
    var e = t & 42;
    if (e !== 0) return e;
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return t & -t;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function Rs(t, e, n) {
    var a = t.pendingLanes;
    if (a === 0) return 0;
    var s = 0, o = t.suspendedLanes, f = t.pingedLanes;
    t = t.warmLanes;
    var g = a & 134217727;
    return g !== 0 ? (a = g & ~o, a !== 0 ? s = Na(a) : (f &= g, f !== 0 ? s = Na(f) : n || (n = g & ~t, n !== 0 && (s = Na(n))))) : (g = a & ~o, g !== 0 ? s = Na(g) : f !== 0 ? s = Na(f) : n || (n = a & ~t, n !== 0 && (s = Na(n)))), s === 0 ? 0 : e !== 0 && e !== s && (e & o) === 0 && (o = s & -s, n = e & -e, o >= n || o === 32 && (n & 4194048) !== 0) ? e : s;
  }
  function dl(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function qd(t, e) {
    (e & 8) !== 0 && (e |= e & 32);
    var n = t.entangledLanes;
    if (n !== 0)
      for (t = t.entanglements, n &= e; 0 < n; ) {
        var a = 31 - je(n), s = 1 << a;
        e |= t[a], n &= ~s;
      }
    return e;
  }
  function Wb(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return e + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Xd() {
    var t = Os;
    return Os <<= 1, (Os & 62914560) === 0 && (Os = 4194304), t;
  }
  function Bu(t) {
    for (var e = [], n = 0; 31 > n; n++) e.push(t);
    return e;
  }
  function hl(t, e) {
    t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
  }
  function $b(t, e, n, a, s, o) {
    var f = t.pendingLanes;
    t.pendingLanes = n, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= n, t.entangledLanes &= n, t.errorRecoveryDisabledLanes &= n, t.shellSuspendCounter = 0;
    var g = t.entanglements, S = t.expirationTimes, C = t.hiddenUpdates;
    for (n = f & ~n; 0 < n; ) {
      var R = 31 - je(n), U = 1 << R;
      g[R] = 0, S[R] = -1;
      var A = C[R];
      if (A !== null)
        for (C[R] = null, R = 0; R < A.length; R++) {
          var z = A[R];
          z !== null && (z.lane &= -536870913);
        }
      n &= ~U;
    }
    a !== 0 && Qd(t, a, 0), o !== 0 && s === 0 && t.tag !== 0 && (t.suspendedLanes |= o & ~(f & ~e));
  }
  function Qd(t, e, n) {
    t.pendingLanes |= e, t.suspendedLanes &= ~e;
    var a = 31 - je(e);
    t.entangledLanes |= e, t.entanglements[a] = t.entanglements[a] | 1073741824 | n & 261930;
  }
  function Zd(t, e) {
    var n = t.entangledLanes |= e;
    for (t = t.entanglements; n; ) {
      var a = 31 - je(n), s = 1 << a;
      s & e | t[a] & e && (t[a] |= e), n &= ~s;
    }
  }
  function Kd(t, e) {
    var n = e & -e;
    return n = (n & 42) !== 0 ? 1 : ju(n), (n & (t.suspendedLanes | e)) !== 0 ? 0 : n;
  }
  function ju(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function Lu(t) {
    return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function kd() {
    var t = ct.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : ty(t.type));
  }
  function Jd(t, e) {
    var n = ct.p;
    try {
      return ct.p = t, e();
    } finally {
      ct.p = n;
    }
  }
  var wn = Math.random().toString(36).slice(2), ce = "__reactFiber$" + wn, Ce = "__reactProps$" + wn, di = "__reactContainer$" + wn, Fd = "__reactEvents$" + wn, t1 = "__reactListeners$" + wn, e1 = "__reactHandles$" + wn, Pd = "__reactResources$" + wn, ml = "__reactMarker$" + wn, ws = "__reactLoad$" + wn;
  function Ns(t) {
    delete t[ce], delete t[Ce], delete t[t1], delete t[e1];
  }
  function _a(t) {
    var e;
    if (e = t[ce]) return e;
    for (var n = t.parentNode; n; ) {
      if (e = n[di] || n[ce]) {
        if (n = e.alternate, e.child !== null || n !== null && n.child !== null)
          for (t = Vp(t); t !== null; ) {
            if (n = t[ce]) return n;
            t = Vp(t);
          }
        return e;
      }
      t = n, n = t.parentNode;
    }
    return null;
  }
  function hi(t) {
    if (t = t[ce] || t[di]) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3)
        return t;
    }
    return null;
  }
  function gl(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(u(33));
  }
  function mi(t) {
    var e = t[Pd];
    return e || (e = t[Pd] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), e;
  }
  function le(t) {
    t[ml] = !0;
  }
  function Id(t) {
    t[ws] = void 0;
  }
  var Wd = /* @__PURE__ */ new Set(), $d = {};
  function Va(t, e) {
    gi(t, e), gi(t + "Capture", e);
  }
  function gi(t, e) {
    for ($d[t] = e, t = 0; t < e.length; t++)
      Wd.add(e[t]);
  }
  var n1 = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), th = {}, eh = {};
  function a1(t) {
    return _u.call(eh, t) ? !0 : _u.call(th, t) ? !1 : n1.test(t) ? eh[t] = !0 : (th[t] = !0, !1);
  }
  var zt = !1;
  function nh() {
    var t = zt;
    return zt = !1, t;
  }
  function _s(t, e, n) {
    if (a1(e))
      if (n === null) t.removeAttribute(e);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var a = e.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, n);
      }
  }
  function Vs(t, e, n) {
    if (n === null) t.removeAttribute(e);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, n);
    }
  }
  function Nn(t, e, n, a) {
    if (a === null) t.removeAttribute(n);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(n);
          return;
      }
      t.setAttributeNS(e, n, a);
    }
  }
  function Le(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function ah(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
  }
  function i1(t, e, n) {
    var a = Object.getOwnPropertyDescriptor(
      t.constructor.prototype,
      e
    );
    if (!t.hasOwnProperty(e) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
      var s = a.get, o = a.set;
      return Object.defineProperty(t, e, {
        configurable: !0,
        get: function() {
          return s.call(this);
        },
        set: function(f) {
          n = "" + f, o.call(this, f);
        }
      }), Object.defineProperty(t, e, {
        enumerable: a.enumerable
      }), {
        getValue: function() {
          return n;
        },
        setValue: function(f) {
          n = "" + f;
        },
        stopTracking: function() {
          t._valueTracker = null, delete t[e];
        }
      };
    }
  }
  function Hu(t) {
    if (!t._valueTracker) {
      var e = ah(t) ? "checked" : "value";
      t._valueTracker = i1(
        t,
        e,
        "" + t[e]
      );
    }
  }
  function ih(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var n = e.getValue(), a = "";
    return t && (a = ah(t) ? t.checked ? "true" : "false" : t.value), t = a, t !== n ? (e.setValue(t), !0) : !1;
  }
  var l1 = /[\n"\\]/g;
  function Ke(t) {
    return t.replace(
      l1,
      function(e) {
        return "\\" + e.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Gu(t, e, n, a, s, o, f, g) {
    t.name = "", f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? t.type = f : t.removeAttribute("type"), e != null ? f === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + Le(e)) : t.value !== "" + Le(e) && (t.value = "" + Le(e)) : f !== "submit" && f !== "reset" || t.removeAttribute("value"), e != null ? f === "number" && t.value == e ? Yu(t, Le(t.value)) : Yu(t, Le(e)) : n != null ? Yu(t, Le(n)) : a != null && t.removeAttribute("value"), s == null && o != null && (t.defaultChecked = !!o), s != null && (t.checked = s && typeof s != "function" && typeof s != "symbol"), g != null && typeof g != "function" && typeof g != "symbol" && typeof g != "boolean" ? t.name = "" + Le(g) : t.removeAttribute("name");
  }
  function lh(t, e, n, a, s, o, f, g) {
    if (o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" && (t.type = o), e != null || n != null) {
      if (!(o !== "submit" && o !== "reset" || e != null)) {
        Hu(t);
        return;
      }
      n = n != null ? "" + Le(n) : "", e = e != null ? "" + Le(e) : n, g || e === t.value || (t.value = e), t.defaultValue = e;
    }
    a = a ?? s, a = typeof a != "function" && typeof a != "symbol" && !!a, t.checked = g ? t.checked : !!a, t.defaultChecked = !!a, f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (t.name = f), Hu(t);
  }
  function Yu(t, e) {
    t.defaultValue !== "" + e && (t.defaultValue = "" + e);
  }
  function pi(t, e, n, a) {
    if (t = t.options, e) {
      e = {};
      for (var s = 0; s < n.length; s++)
        e["$" + n[s]] = !0;
      for (n = 0; n < t.length; n++)
        s = e.hasOwnProperty("$" + t[n].value), t[n].selected !== s && (t[n].selected = s), s && a && (t[n].defaultSelected = !0);
    } else {
      for (n = "" + Le(n), e = null, s = 0; s < t.length; s++) {
        if (t[s].value === n) {
          t[s].selected = !0, a && (t[s].defaultSelected = !0);
          return;
        }
        e !== null || t[s].disabled || (e = t[s]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function sh(t, e, n) {
    if (e != null && (e = "" + Le(e), e !== t.value && (t.value = e), n == null)) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = n != null ? "" + Le(n) : "";
  }
  function oh(t, e, n, a) {
    if (e == null) {
      if (a != null) {
        if (n != null) throw Error(u(92));
        if (Ct(a)) {
          if (1 < a.length) throw Error(u(93));
          a = a[0];
        }
        n = a;
      }
      n == null && (n = ""), e = n;
    }
    n = Le(e), t.defaultValue = n, a = t.textContent, a === n && a !== "" && a !== null && (t.value = a), Hu(t);
  }
  function yi(t, e) {
    if (e) {
      var n = t.firstChild;
      if (n && n === t.lastChild && n.nodeType === 3) {
        n.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var s1 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function uh(t, e, n) {
    var a = e.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === "" ? a ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : a ? t.setProperty(e, n) : typeof n != "number" || n === 0 || s1.has(e) ? e === "float" ? t.cssFloat = n : t[e] = ("" + n).trim() : t[e] = n + "px";
  }
  function rh(t, e, n) {
    if (e != null && typeof e != "object")
      throw Error(u(62));
    if (t = t.style, n != null) {
      for (var a in n)
        !n.hasOwnProperty(a) || e != null && e.hasOwnProperty(a) || (a.indexOf("--") === 0 ? t.setProperty(a, "") : a === "float" ? t.cssFloat = "" : t[a] = "", zt = !0);
      for (var s in e)
        a = e[s], e.hasOwnProperty(s) && n[s] !== a && (uh(t, s, a), zt = !0);
    } else
      for (var o in e)
        e.hasOwnProperty(o) && uh(t, o, e[o]);
  }
  function qu(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var o1 = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["maskType", "mask-type"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), u1 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Us(t) {
    return u1.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  function gn() {
  }
  var Xu = null;
  function Qu(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var vi = null, bi = null;
  function ch(t) {
    var e = hi(t);
    if (e && (t = e.stateNode)) {
      var n = t[Ce] || null;
      t: switch (t = e.stateNode, e.type) {
        case "input":
          if (Gu(
            t,
            n.value,
            n.defaultValue,
            n.defaultValue,
            n.checked,
            n.defaultChecked,
            n.type,
            n.name
          ), e = n.name, n.type === "radio" && e != null) {
            for (n = t; n.parentNode; ) n = n.parentNode;
            for (n = n.querySelectorAll(
              'input[name="' + Ke(
                "" + e
              ) + '"][type="radio"]'
            ), e = 0; e < n.length; e++) {
              var a = n[e];
              if (a !== t && a.form === t.form) {
                var s = a[Ce] || null;
                if (!s) throw Error(u(90));
                Gu(
                  a,
                  s.value,
                  s.defaultValue,
                  s.defaultValue,
                  s.checked,
                  s.defaultChecked,
                  s.type,
                  s.name
                );
              }
            }
            for (e = 0; e < n.length; e++)
              a = n[e], a.form === t.form && ih(a);
          }
          break t;
        case "textarea":
          sh(t, n.value, n.defaultValue);
          break t;
        case "select":
          e = n.value, e != null && pi(t, !!n.multiple, e, !1);
      }
    }
  }
  var Zu = !1;
  function fh(t, e, n) {
    if (Zu) return t(e, n);
    Zu = !0;
    try {
      var a = t(e);
      return a;
    } finally {
      if (Zu = !1, (vi !== null || bi !== null) && (Bo(), vi && (e = vi, t = bi, bi = vi = null, ch(e), t)))
        for (e = 0; e < t.length; e++) ch(t[e]);
    }
  }
  function pl(t, e) {
    var n = t.stateNode;
    if (n === null) return null;
    var a = n[Ce] || null;
    if (a === null) return null;
    n = a[e];
    t: switch (e) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (a = !a.disabled) || (t = t.type, a = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !a;
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (n && typeof n != "function")
      throw Error(
        u(231, e, typeof n)
      );
    return n;
  }
  var _n = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Ku = !1;
  if (_n)
    try {
      var yl = {};
      Object.defineProperty(yl, "passive", {
        get: function() {
          Ku = !0;
        }
      }), window.addEventListener("test", yl, yl), window.removeEventListener("test", yl, yl);
    } catch {
      Ku = !1;
    }
  var Wn = null, ku = null, Bs = null;
  function dh() {
    if (Bs) return Bs;
    var t, e = ku, n = e.length, a, s = "value" in Wn ? Wn.value : Wn.textContent, o = s.length;
    for (t = 0; t < n && e[t] === s[t]; t++) ;
    var f = n - t;
    for (a = 1; a <= f && e[n - a] === s[o - a]; a++) ;
    return Bs = s.slice(t, 1 < a ? 1 - a : void 0);
  }
  function js(t) {
    var e = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function Ls() {
    return !0;
  }
  function hh() {
    return !1;
  }
  function Se(t) {
    function e(n, a, s, o, f) {
      this._reactName = n, this._targetInst = s, this.type = a, this.nativeEvent = o, this.target = f, this.currentTarget = null;
      for (var g in t)
        t.hasOwnProperty(g) && (n = t[g], this[g] = n ? n(o) : o[g]);
      return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? Ls : hh, this.isPropagationStopped = hh, this;
    }
    return Z(e.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Ls);
      },
      stopPropagation: function() {
        var n = this.nativeEvent;
        n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Ls);
      },
      persist: function() {
      },
      isPersistent: Ls
    }), e;
  }
  var $n = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Hs = Se($n), vl = Z({}, $n, { view: 0, detail: 0 }), r1 = Se(vl), Ju, Fu, bl, Gs = Z({}, vl, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Iu,
    button: 0,
    buttons: 0,
    relatedTarget: function(t) {
      return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
    },
    movementX: function(t) {
      return "movementX" in t ? t.movementX : (t !== bl && (bl && t.type === "mousemove" ? (Ju = t.screenX - bl.screenX, Fu = t.screenY - bl.screenY) : Fu = Ju = 0, bl = t), Ju);
    },
    movementY: function(t) {
      return "movementY" in t ? t.movementY : Fu;
    }
  }), mh = Se(Gs), c1 = Z({}, Gs, { dataTransfer: 0 }), f1 = Se(c1), d1 = Z({}, vl, { relatedTarget: 0 }), Pu = Se(d1), h1 = Z({}, $n, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), m1 = Se(h1), g1 = Z({}, $n, {
    clipboardData: function(t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    }
  }), p1 = Se(g1), y1 = Z({}, $n, { data: 0 }), gh = Se(y1), v1 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, b1 = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, S1 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function T1(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = S1[t]) ? !!e[t] : !1;
  }
  function Iu() {
    return T1;
  }
  var E1 = Z({}, vl, {
    key: function(t) {
      if (t.key) {
        var e = v1[t.key] || t.key;
        if (e !== "Unidentified") return e;
      }
      return t.type === "keypress" ? (t = js(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? b1[t.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Iu,
    charCode: function(t) {
      return t.type === "keypress" ? js(t) : 0;
    },
    keyCode: function(t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function(t) {
      return t.type === "keypress" ? js(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    }
  }), x1 = Se(E1), A1 = Z({}, Gs, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), ph = Se(A1), M1 = Z({}, $n, { submitter: 0 }), C1 = Se(M1), D1 = Z({}, vl, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Iu
  }), z1 = Se(D1), O1 = Z({}, $n, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), R1 = Se(O1), w1 = Z({}, Gs, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), N1 = Se(w1), _1 = Z({}, $n, {
    newState: 0,
    oldState: 0,
    source: 0
  }), V1 = Se(_1), U1 = [9, 13, 27, 32], Wu = _n && "CompositionEvent" in window, Sl = null;
  _n && "documentMode" in document && (Sl = document.documentMode);
  var B1 = _n && "TextEvent" in window && !Sl, yh = _n && (!Wu || Sl && 8 < Sl && 11 >= Sl), vh = " ", bh = !1;
  function Sh(t, e) {
    switch (t) {
      case "keyup":
        return U1.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Th(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var Si = !1;
  function j1(t, e) {
    switch (t) {
      case "compositionend":
        return Th(e);
      case "keypress":
        return e.which !== 32 ? null : (bh = !0, vh);
      case "textInput":
        return t = e.data, t === vh && bh ? null : t;
      default:
        return null;
    }
  }
  function L1(t, e) {
    if (Si)
      return t === "compositionend" || !Wu && Sh(t, e) ? (t = dh(), Bs = ku = Wn = null, Si = !1, t) : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
          if (e.char && 1 < e.char.length)
            return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return yh && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var H1 = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function Eh(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!H1[t.type] : e === "textarea";
  }
  function xh(t, e, n, a) {
    vi ? bi ? bi.push(a) : bi = [a] : vi = a, e = qo(e, "onChange"), 0 < e.length && (n = new Hs(
      "onChange",
      "change",
      null,
      n,
      a
    ), t.push({ event: n, listeners: e }));
  }
  var Tl = null, El = null;
  function G1(t) {
    cp(t, 0);
  }
  function Ys(t) {
    var e = gl(t);
    if (ih(e)) return t;
  }
  function Ah(t, e) {
    if (t === "change") return e;
  }
  var Mh = !1;
  if (_n) {
    var $u;
    if (_n) {
      var tr = "oninput" in document;
      if (!tr) {
        var Ch = document.createElement("div");
        Ch.setAttribute("oninput", "return;"), tr = typeof Ch.oninput == "function";
      }
      $u = tr;
    } else $u = !1;
    Mh = $u && (!document.documentMode || 9 < document.documentMode);
  }
  function Dh() {
    Tl && (Tl.detachEvent("onpropertychange", zh), El = Tl = null);
  }
  function zh(t) {
    if (t.propertyName === "value" && Ys(El)) {
      var e = [];
      xh(
        e,
        El,
        t,
        Qu(t)
      ), fh(G1, e);
    }
  }
  function Y1(t, e, n) {
    t === "focusin" ? (Dh(), Tl = e, El = n, Tl.attachEvent("onpropertychange", zh)) : t === "focusout" && Dh();
  }
  function q1(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return Ys(El);
  }
  function X1(t, e) {
    if (t === "click") return Ys(e);
  }
  function Q1(t, e) {
    if (t === "input" || t === "change")
      return Ys(e);
  }
  function Z1(t, e) {
    return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
  }
  var He = typeof Object.is == "function" ? Object.is : Z1;
  function xl(t, e) {
    if (He(t, e)) return !0;
    if (typeof t != "object" || t === null || typeof e != "object" || e === null)
      return !1;
    var n = Object.keys(t), a = Object.keys(e);
    if (n.length !== a.length) return !1;
    for (a = 0; a < n.length; a++) {
      var s = n[a];
      if (!_u.call(e, s) || !He(t[s], e[s]))
        return !1;
    }
    return !0;
  }
  function er(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  function Oh(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function Rh(t, e) {
    var n = Oh(t);
    t = 0;
    for (var a; n; ) {
      if (n.nodeType === 3) {
        if (a = t + n.textContent.length, t <= e && a >= e)
          return { node: n, offset: e - t };
        t = a;
      }
      t: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break t;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = Oh(n);
    }
  }
  function wh(t, e) {
    return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? wh(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1;
  }
  function Nh(t) {
    t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
    for (var e = er(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var n = typeof e.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) t = e.contentWindow;
      else break;
      e = er(t.document);
    }
    return e;
  }
  function nr(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true");
  }
  var K1 = _n && "documentMode" in document && 11 >= document.documentMode, Ti = null, ar = null, Al = null, ir = !1;
  function _h(t, e, n) {
    var a = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    ir || Ti == null || Ti !== er(a) || (a = Ti, "selectionStart" in a && nr(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), Al && xl(Al, a) || (Al = a, a = qo(ar, "onSelect"), 0 < a.length && (e = new Hs(
      "onSelect",
      "select",
      null,
      e,
      n
    ), t.push({ event: e, listeners: a }), e.target = Ti)));
  }
  function Ua(t, e) {
    var n = {};
    return n[t.toLowerCase()] = e.toLowerCase(), n["Webkit" + t] = "webkit" + e, n["Moz" + t] = "moz" + e, n;
  }
  var Ei = {
    animationend: Ua("Animation", "AnimationEnd"),
    animationiteration: Ua("Animation", "AnimationIteration"),
    animationstart: Ua("Animation", "AnimationStart"),
    transitionrun: Ua("Transition", "TransitionRun"),
    transitionstart: Ua("Transition", "TransitionStart"),
    transitioncancel: Ua("Transition", "TransitionCancel"),
    transitionend: Ua("Transition", "TransitionEnd")
  }, lr = {}, Vh = {};
  _n && (Vh = document.createElement("div").style, "AnimationEvent" in window || (delete Ei.animationend.animation, delete Ei.animationiteration.animation, delete Ei.animationstart.animation), "TransitionEvent" in window || delete Ei.transitionend.transition);
  function Ba(t) {
    if (lr[t]) return lr[t];
    if (!Ei[t]) return t;
    var e = Ei[t], n;
    for (n in e)
      if (e.hasOwnProperty(n) && n in Vh)
        return lr[t] = e[n];
    return t;
  }
  var Uh = Ba("animationend"), Bh = Ba("animationiteration"), jh = Ba("animationstart"), k1 = Ba("transitionrun"), J1 = Ba("transitionstart"), F1 = Ba("transitioncancel"), Lh = Ba("transitionend"), Hh = /* @__PURE__ */ new Map(), sr = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  sr.push("scrollEnd");
  function an(t, e) {
    Hh.set(t, e), Va(e, [t]);
  }
  var P1 = 0;
  function Vn(t, e) {
    if (t.name != null && t.name !== "auto") return t.name;
    if (e.autoName !== null) return e.autoName;
    t = un.identifierPrefix;
    var n = P1++;
    return t = "_" + t + "t_" + n.toString(32) + "_", e.autoName = t;
  }
  function Gh(t) {
    if (t == null || typeof t == "string")
      return t;
    var e = null, n = qi;
    if (n !== null)
      for (var a = 0; a < n.length; a++) {
        var s = t[n[a]];
        if (s != null) {
          if (s === "none") return "none";
          e = e == null ? s : e + (" " + s);
        }
      }
    return e ?? t.default;
  }
  function Un(t, e) {
    return t = Gh(t), e = Gh(e), e == null ? t === "auto" ? null : t : e === "auto" ? null : e;
  }
  var qs = typeof reportError == "function" ? reportError : function(t) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var e = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
        error: t
      });
      if (!window.dispatchEvent(e)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", t);
      return;
    }
    console.error(t);
  }, ke = [], xi = 0, or = 0;
  function Xs() {
    for (var t = xi, e = or = xi = 0; e < t; ) {
      var n = ke[e];
      ke[e++] = null;
      var a = ke[e];
      ke[e++] = null;
      var s = ke[e];
      ke[e++] = null;
      var o = ke[e];
      if (ke[e++] = null, a !== null && s !== null) {
        var f = a.pending;
        f === null ? s.next = s : (s.next = f.next, f.next = s), a.pending = s;
      }
      o !== 0 && Yh(n, s, o);
    }
  }
  function Qs(t, e, n, a) {
    ke[xi++] = t, ke[xi++] = e, ke[xi++] = n, ke[xi++] = a, or |= a, t.lanes |= a, t = t.alternate, t !== null && (t.lanes |= a);
  }
  function ur(t, e, n, a) {
    return Qs(t, e, n, a), Zs(t);
  }
  function ja(t, e) {
    return Qs(t, null, null, e), Zs(t);
  }
  function Yh(t, e, n) {
    t.lanes |= n;
    var a = t.alternate;
    a !== null && (a.lanes |= n);
    for (var s = !1, o = t.return; o !== null; )
      o.childLanes |= n, a = o.alternate, a !== null && (a.childLanes |= n), o.tag === 22 && (t = o.stateNode, t === null || t._visibility & 1 || (s = !0)), t = o, o = o.return;
    return t.tag === 3 ? (o = t.stateNode, s && e !== null && (s = 31 - je(n), t = o.hiddenUpdates, a = t[s], a === null ? t[s] = [e] : a.push(e), e.lane = n | 536870912), o) : null;
  }
  function Zs(t) {
    if (50 < Kl)
      throw Kl = 0, Uo = null, Error(u(185));
    for (var e = t.return; e !== null; )
      t = e, e = t.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var Ai = {};
  function I1(t, e, n, a) {
    this.tag = t, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function De(t, e, n, a) {
    return new I1(t, e, n, a);
  }
  function rr(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function Bn(t, e) {
    var n = t.alternate;
    return n === null ? (n = De(
      t.tag,
      e,
      t.key,
      t.mode
    ), n.elementType = t.elementType, n.type = t.type, n.stateNode = t.stateNode, n.alternate = t, t.alternate = n) : (n.pendingProps = e, n.type = t.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = t.flags & 1206910976, n.childLanes = t.childLanes, n.lanes = t.lanes, n.child = t.child, n.memoizedProps = t.memoizedProps, n.memoizedState = t.memoizedState, n.updateQueue = t.updateQueue, e = t.dependencies, n.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }, n.sibling = t.sibling, n.index = t.index, n.ref = t.ref, n.refCleanup = t.refCleanup, n;
  }
  function qh(t, e) {
    t.flags &= 1206910978;
    var n = t.alternate;
    return n === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = n.childLanes, t.lanes = n.lanes, t.child = n.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = n.memoizedProps, t.memoizedState = n.memoizedState, t.updateQueue = n.updateQueue, t.type = n.type, e = n.dependencies, t.dependencies = e === null ? null : {
      lanes: e.lanes,
      firstContext: e.firstContext
    }), t;
  }
  function Ks(t, e, n, a, s, o) {
    var f = 0;
    if (a = t, typeof a == "function") rr(a) && (f = 1);
    else if (typeof a == "string")
      f = MT(
        t,
        n,
        mn.current
      ) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else
      t: switch (a) {
        case Bt:
          return t = De(31, n, e, s), t.elementType = Bt, t.lanes = o, t;
        case pt:
          return La(n.children, s, o, e);
        case bt:
          f = 8, s |= 24;
          break;
        case Xt:
          return t = De(12, n, e, s | 2), t.elementType = Xt, t.lanes = o, t;
        case at:
          return t = De(13, n, e, s), t.elementType = at, t.lanes = o, t;
        case k:
          return t = De(19, n, e, s), t.elementType = k, t.lanes = o, t;
        case Pt:
        case x:
          return t = s | 32, t = De(30, n, e, t), t.elementType = x, t.lanes = o, t.stateNode = {
            autoName: null,
            paired: null,
            clones: null,
            ref: null
          }, t;
        default:
          if (typeof a == "object" && a !== null)
            switch (a.$$typeof) {
              case St:
                f = 10;
                break t;
              case Ut:
                f = 9;
                break t;
              case Y:
                f = 11;
                break t;
              case q:
                f = 14;
                break t;
              case G:
                f = 16, a = null;
                break t;
            }
          f = 29, n = Error(
            u(130, t === null ? "null" : typeof t, "")
          ), a = null;
      }
    return e = De(f, n, e, s), e.elementType = t, e.type = a, e.lanes = o, e;
  }
  function La(t, e, n, a) {
    return t = De(7, t, a, e), t.lanes = n, t;
  }
  function cr(t, e, n) {
    return t = De(6, t, null, e), t.lanes = n, t;
  }
  function Xh(t) {
    var e = De(18, null, null, 0);
    return e.stateNode = t, e;
  }
  function fr(t, e, n) {
    return e = De(
      4,
      t.children !== null ? t.children : [],
      t.key,
      e
    ), e.lanes = n, e.stateNode = {
      containerInfo: t.containerInfo,
      pendingChildren: null,
      implementation: t.implementation
    }, e;
  }
  var Qh = /* @__PURE__ */ new WeakMap();
  function Je(t, e) {
    if (typeof t == "object" && t !== null) {
      var n = Qh.get(t);
      return n !== void 0 ? n : (e = {
        value: t,
        source: e,
        stack: Ld(e)
      }, Qh.set(t, e), e);
    }
    return {
      value: t,
      source: e,
      stack: Ld(e)
    };
  }
  var Mi = [], Ci = 0, ks = null, Ml = 0, Fe = [], Pe = 0, ta = null, pn = 1, yn = "";
  function jn(t, e) {
    Mi[Ci++] = Ml, Mi[Ci++] = ks, ks = t, Ml = e;
  }
  function Zh(t, e, n) {
    Fe[Pe++] = pn, Fe[Pe++] = yn, Fe[Pe++] = ta, ta = t;
    var a = pn;
    t = yn;
    var s = 32 - je(a) - 1;
    a &= ~(1 << s), n += 1;
    var o = 32 - je(e) + s;
    if (30 < o) {
      var f = s - s % 5;
      o = (a & (1 << f) - 1).toString(32), a >>= f, s -= f, pn = 1 << 32 - je(e) + s | n << s | a, yn = o + t;
    } else
      pn = 1 << o | n << s | a, yn = t;
  }
  function Js(t) {
    t.return !== null && (jn(t, 1), Zh(t, 1, 0));
  }
  function dr(t) {
    for (; t === ks; )
      ks = Mi[--Ci], Mi[Ci] = null, Ml = Mi[--Ci], Mi[Ci] = null;
    for (; t === ta; )
      ta = Fe[--Pe], Fe[Pe] = null, yn = Fe[--Pe], Fe[Pe] = null, pn = Fe[--Pe], Fe[Pe] = null;
  }
  function Kh(t, e) {
    Fe[Pe++] = pn, Fe[Pe++] = yn, Fe[Pe++] = ta, pn = e.id, yn = e.overflow, ta = t;
  }
  var se = null, Yt = null, yt = !1, ea = null, Ie = !1, hr = Error(u(519));
  function na(t) {
    var e = Error(
      u(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Cl(Je(e, t)), hr;
  }
  function kh(t) {
    var e = t.stateNode, n = t.type, a = t.memoizedProps;
    switch (e[ce] = t, e[Ce] = a, n) {
      case "dialog":
        Et("cancel", e), Et("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        Et("load", e);
        break;
      case "video":
      case "audio":
        for (n = 0; n < Jl.length; n++)
          Et(Jl[n], e);
        break;
      case "source":
        Et("error", e);
        break;
      case "img":
      case "image":
      case "link":
        Et("error", e), Et("load", e);
        break;
      case "details":
        Et("toggle", e);
        break;
      case "input":
        Et("invalid", e), lh(
          e,
          a.value,
          a.defaultValue,
          a.checked,
          a.defaultChecked,
          a.type,
          a.name,
          !0
        );
        break;
      case "select":
        Et("invalid", e);
        break;
      case "textarea":
        Et("invalid", e), oh(e, a.value, a.defaultValue, a.children);
    }
    n = a.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || e.textContent === "" + n || a.suppressHydrationWarning === !0 || mp(e.textContent, n) ? (a.popover != null && (Et("beforetoggle", e), Et("toggle", e)), a.onScroll != null && Et("scroll", e), a.onScrollEnd != null && Et("scrollend", e), a.onClick != null && (e.onclick = gn), e = !0) : e = !1, e || na(t, !0);
  }
  function Fs(t) {
    for (se = t.return; se; )
      switch (se.tag) {
        case 5:
        case 31:
        case 13:
          Ie = !1;
          return;
        case 27:
        case 3:
          Ie = !0;
          return;
        default:
          se = se.return;
      }
  }
  function Di(t) {
    if (t !== se) return !1;
    if (!yt) return Fs(t), yt = !0, !1;
    var e = t.tag, n;
    if ((n = e !== 3 && e !== 27) && ((n = e === 5) && (n = t.type, n = !(n !== "form" && n !== "button") || Xc(t.type, t.memoizedProps)), n = !n), n && Yt && na(t), Fs(t), e === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(u(317));
      Yt = _p(t);
    } else if (e === 31) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(u(317));
      Yt = _p(t);
    } else
      e === 27 ? (e = Yt, va(t.type) ? (t = Wc, Wc = null, Yt = t) : Yt = e) : Yt = se ? $e(t.stateNode.nextSibling) : null;
    return !0;
  }
  function Ha() {
    Yt = se = null, yt = !1;
  }
  function mr() {
    var t = ea;
    return t !== null && (Re === null ? Re = t : Re.push.apply(
      Re,
      t
    ), ea = null), t;
  }
  function Cl(t) {
    ea === null ? ea = [t] : ea.push(t);
  }
  var gr = hn(null), Ga = null, Ln = null;
  function aa(t, e, n) {
    Gt(gr, e._currentValue), e._currentValue = n;
  }
  function Hn(t) {
    t._currentValue = gr.current, re(gr);
  }
  function Ps(t, e, n) {
    for (; t !== null; ) {
      var a = t.alternate;
      if ((t.childLanes & e) !== e ? (t.childLanes |= e, a !== null && (a.childLanes |= e)) : a !== null && (a.childLanes & e) !== e && (a.childLanes |= e), t === n) break;
      t = t.return;
    }
  }
  function pr(t, e, n, a) {
    var s = t.child;
    for (s !== null && (s.return = t); s !== null; ) {
      var o = s.dependencies;
      if (o !== null) {
        var f = s.child;
        o = o.firstContext;
        t: for (; o !== null; ) {
          var g = o;
          o = s;
          for (var S = 0; S < e.length; S++)
            if (g.context === e[S]) {
              o.lanes |= n, g = o.alternate, g !== null && (g.lanes |= n), Ps(
                o.return,
                n,
                t
              ), a || (f = null);
              break t;
            }
          o = g.next;
        }
      } else if (s.tag === 18) {
        if (f = s.return, f === null) throw Error(u(341));
        f.lanes |= n, o = f.alternate, o !== null && (o.lanes |= n), Ps(f, n, t), f = null;
      } else
        s.tag === 13 && s.memoizedState !== null && s.memoizedState.dehydrated === null ? (s.lanes |= n, f = s.alternate, f !== null && (f.lanes |= n), Ps(
          s.return,
          n,
          t
        ), f = s.child, f = f !== null ? f.sibling : null) : f = s.child;
      if (f !== null) f.return = s;
      else
        for (f = s; f !== null; ) {
          if (f === t) {
            f = null;
            break;
          }
          if (s = f.sibling, s !== null) {
            s.return = f.return, f = s;
            break;
          }
          f = f.return;
        }
      s = f;
    }
  }
  function Ya(t, e, n, a) {
    t = null;
    for (var s = e, o = !1; s !== null; ) {
      if (!o) {
        if ((s.flags & 524288) !== 0) o = !0;
        else if ((s.flags & 262144) !== 0) break;
      }
      if (s.tag === 10) {
        var f = s.alternate;
        if (f === null) throw Error(u(387));
        if (f = f.memoizedProps, f !== null) {
          var g = s.type;
          He(s.pendingProps.value, f.value) || (t !== null ? t.push(g) : t = [g]);
        }
      } else if (s === xs.current) {
        if (f = s.alternate, f === null) throw Error(u(387));
        f.memoizedState.memoizedState !== s.memoizedState.memoizedState && (t !== null ? t.push(Wi) : t = [Wi]);
      }
      s = s.return;
    }
    return t !== null && pr(
      e,
      t,
      n,
      a
    ), e.flags |= 262144, t !== null;
  }
  function Is(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!He(
        t.context._currentValue,
        t.memoizedValue
      ))
        return !0;
      t = t.next;
    }
    return !1;
  }
  function qa(t) {
    Ga = t, Ln = null, t = t.dependencies, t !== null && (t.firstContext = null);
  }
  function fe(t) {
    return Jh(Ga, t);
  }
  function Ws(t, e) {
    return Ga === null && qa(t), Jh(t, e);
  }
  function Jh(t, e) {
    var n = e._currentValue;
    if (e = { context: e, memoizedValue: n, next: null }, Ln === null) {
      if (t === null) throw Error(u(308));
      Ln = e, t.dependencies = { lanes: 0, firstContext: e }, t.flags |= 524288;
    } else Ln = Ln.next = e;
    return n;
  }
  var W1 = typeof AbortController < "u" ? AbortController : function() {
    var t = [], e = this.signal = {
      aborted: !1,
      addEventListener: function(n, a) {
        t.push(a);
      }
    };
    this.abort = function() {
      e.aborted = !0, t.forEach(function(n) {
        return n();
      });
    };
  }, $1 = i.unstable_scheduleCallback, tS = i.unstable_NormalPriority, It = {
    $$typeof: St,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function yr() {
    return {
      controller: new W1(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Dl(t) {
    t.refCount--, t.refCount === 0 && $1(tS, function() {
      t.controller.abort();
    });
  }
  function Fh(t, e) {
    if ((t.pendingLanes & 4194048) !== 0) {
      var n = t.transitionTypes;
      for (n === null && (n = t.transitionTypes = []), t = 0; t < e.length; t++) {
        var a = e[t];
        n.indexOf(a) === -1 && n.push(a);
      }
    }
  }
  var zl = null;
  function eS(t) {
    var e = t.transitionTypes;
    return t.transitionTypes = null, e;
  }
  var Ol = null, vr = 0, Xa = 0, zi = null;
  function nS(t, e) {
    if (Ol === null) {
      var n = Ol = [];
      vr = 0, Xa = Vc(), zi = {
        status: "pending",
        value: void 0,
        then: function(a) {
          n.push(a);
        }
      };
    }
    return vr++, e.then(Ph, Ph), e;
  }
  function Ph() {
    if (--vr === 0 && (zl = null, Ol !== null)) {
      zi !== null && (zi.status = "fulfilled");
      var t = Ol;
      Ol = null, Xa = 0, zi = null;
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function aS(t, e) {
    var n = [], a = {
      status: "pending",
      value: null,
      reason: null,
      then: function(s) {
        n.push(s);
      }
    };
    return t.then(
      function() {
        a.status = "fulfilled", a.value = e;
        for (var s = 0; s < n.length; s++) (0, n[s])(e);
      },
      function(s) {
        for (a.status = "rejected", a.reason = s, s = 0; s < n.length; s++)
          (0, n[s])(void 0);
      }
    ), a;
  }
  var Ih = $.S;
  $.S = function(t, e) {
    if (Xg = Ue(), typeof e == "object" && e !== null && typeof e.then == "function" && nS(t, e), zl !== null)
      for (var n = Ki; n !== null; )
        Fh(n, zl), n = n.next;
    if (n = t.types, n !== null) {
      for (var a = Ki; a !== null; )
        Fh(a, n), a = a.next;
      if (Xa !== 0) {
        a = zl, a === null && (a = zl = []);
        for (var s = 0; s < n.length; s++) {
          var o = n[s];
          a.indexOf(o) === -1 && a.push(o);
        }
      }
    }
    Ih !== null && Ih(t, e);
  };
  var Qa = hn(null);
  function br() {
    var t = Qa.current;
    return t !== null ? t : jt.pooledCache;
  }
  function $s(t, e) {
    e === null ? Gt(Qa, Qa.current) : Gt(Qa, e.pool);
  }
  function Wh() {
    var t = br();
    return t === null ? null : { parent: It._currentValue, pool: t };
  }
  var Oi = Error(u(460)), Sr = Error(u(474)), to = Error(u(542)), eo = { then: function() {
  } };
  function $h(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function tm(t, e, n) {
    switch (n = t[n], n === void 0 ? t.push(e) : n !== e && (e.then(gn, gn), e = n), e.status) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw t = e.reason, nm(t), t === void 0 && !("reason" in e) ? Error(u(600)) : t;
      default:
        if (typeof e.status == "string") e.then(gn, gn);
        else {
          if (t = jt, t !== null && 100 < t.shellSuspendCounter)
            throw Error(u(482));
          t = e, t.status = "pending", t.then(
            function(a) {
              if (e.status === "pending") {
                var s = e;
                s.status = "fulfilled", s.value = a;
              }
            },
            function(a) {
              if (e.status === "pending") {
                var s = e;
                s.status = "rejected", s.reason = a;
              }
            }
          );
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw t = e.reason, nm(t), t;
        }
        throw Ka = e, Oi;
    }
  }
  function Za(t) {
    try {
      var e = t._init;
      return e(t._payload);
    } catch (n) {
      throw n !== null && typeof n == "object" && typeof n.then == "function" ? (Ka = n, Oi) : n;
    }
  }
  var Ka = null;
  function em() {
    if (Ka === null) throw Error(u(459));
    var t = Ka;
    return Ka = null, t;
  }
  function nm(t) {
    if (t === Oi || t === to)
      throw Error(u(483));
  }
  var Ri = null, Rl = 0;
  function no(t) {
    var e = Rl;
    return Rl += 1, Ri === null && (Ri = []), tm(Ri, t, e);
  }
  function ia(t, e) {
    e = e.props.ref, t.ref = e !== void 0 ? e : null;
  }
  function ao(t, e) {
    throw e.$$typeof === N ? Error(u(525)) : (t = Object.prototype.toString.call(e), Error(
      u(
        31,
        t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t
      )
    ));
  }
  function am(t) {
    function e(M, E) {
      if (t) {
        var D = M.deletions;
        D === null ? (M.deletions = [E], M.flags |= 16) : D.push(E);
      }
    }
    function n(M, E) {
      if (!t) return null;
      for (; E !== null; )
        e(M, E), E = E.sibling;
      return null;
    }
    function a(M) {
      for (var E = /* @__PURE__ */ new Map(); M !== null; )
        M.key === null ? E.set(M.index, M) : E.set(M.key, M), M = M.sibling;
      return E;
    }
    function s(M, E) {
      return M = Bn(M, E), M.index = 0, M.sibling = null, M;
    }
    function o(M, E, D) {
      return M.index = D, t ? (D = M.alternate, D !== null ? (D = D.index, D < E ? (M.flags |= 2, E) : D) : (M.flags |= 134217730, E)) : (M.flags |= 1048576, E);
    }
    function f(M) {
      return t && M.alternate === null && (M.flags |= 134217730), M;
    }
    function g(M, E, D, V) {
      return E === null || E.tag !== 6 ? (E = cr(D, M.mode, V), E.return = M, E) : (E = s(E, D), E.return = M, E);
    }
    function S(M, E, D, V) {
      var P = D.type;
      return P === pt ? (M = R(
        M,
        E,
        D.props.children,
        V,
        D.key
      ), ia(M, D), M) : E !== null && (E.elementType === P || typeof P == "object" && P !== null && P.$$typeof === G && Za(P) === E.type) ? (E = s(E, D.props), ia(E, D), E.return = M, E) : (E = Ks(
        D.type,
        D.key,
        D.props,
        null,
        M.mode,
        V
      ), ia(E, D), E.return = M, E);
    }
    function C(M, E, D, V) {
      return E === null || E.tag !== 4 || E.stateNode.containerInfo !== D.containerInfo || E.stateNode.implementation !== D.implementation ? (E = fr(D, M.mode, V), E.return = M, E) : (E = s(E, D.children || []), E.return = M, E);
    }
    function R(M, E, D, V, P) {
      return E === null || E.tag !== 7 ? (E = La(
        D,
        M.mode,
        V,
        P
      ), E.return = M, E) : (E = s(E, D), E.return = M, E);
    }
    function U(M, E, D) {
      if (typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint")
        return E = cr(
          "" + E,
          M.mode,
          D
        ), E.return = M, E;
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case dt:
            return D = Ks(
              E.type,
              E.key,
              E.props,
              null,
              M.mode,
              D
            ), ia(D, E), D.return = M, D;
          case it:
            return E = fr(
              E,
              M.mode,
              D
            ), E.return = M, E;
          case G:
            return E = Za(E), U(M, E, D);
        }
        if (Ct(E) || st(E))
          return E = La(
            E,
            M.mode,
            D,
            null
          ), E.return = M, E;
        if (typeof E.then == "function")
          return U(M, no(E), D);
        if (E.$$typeof === St)
          return U(
            M,
            Ws(M, E),
            D
          );
        ao(M, E);
      }
      return null;
    }
    function A(M, E, D, V) {
      var P = E !== null ? E.key : null;
      if (typeof D == "string" && D !== "" || typeof D == "number" || typeof D == "bigint")
        return P !== null ? null : g(M, E, "" + D, V);
      if (typeof D == "object" && D !== null) {
        switch (D.$$typeof) {
          case dt:
            return D.key === P ? S(M, E, D, V) : null;
          case it:
            return D.key === P ? C(M, E, D, V) : null;
          case G:
            return D = Za(D), A(M, E, D, V);
        }
        if (Ct(D) || st(D))
          return P !== null ? null : R(M, E, D, V, null);
        if (typeof D.then == "function")
          return A(
            M,
            E,
            no(D),
            V
          );
        if (D.$$typeof === St)
          return A(
            M,
            E,
            Ws(M, D),
            V
          );
        ao(M, D);
      }
      return null;
    }
    function z(M, E, D, V, P) {
      if (typeof V == "string" && V !== "" || typeof V == "number" || typeof V == "bigint")
        return M = M.get(D) || null, g(E, M, "" + V, P);
      if (typeof V == "object" && V !== null) {
        switch (V.$$typeof) {
          case dt:
            return M = M.get(
              V.key === null ? D : V.key
            ) || null, S(E, M, V, P);
          case it:
            return M = M.get(
              V.key === null ? D : V.key
            ) || null, C(E, M, V, P);
          case G:
            return V = Za(V), z(
              M,
              E,
              D,
              V,
              P
            );
        }
        if (Ct(V) || st(V))
          return M = M.get(D) || null, R(E, M, V, P, null);
        if (typeof V.then == "function")
          return z(
            M,
            E,
            D,
            no(V),
            P
          );
        if (V.$$typeof === St)
          return z(
            M,
            E,
            D,
            Ws(E, V),
            P
          );
        ao(E, V);
      }
      return null;
    }
    function K(M, E, D, V) {
      for (var P = null, Mt = null, ot = E, ft = E = 0, te = null; ot !== null && ft < D.length; ft++) {
        ot.index > ft ? (te = ot, ot = null) : te = ot.sibling;
        var Dt = A(
          M,
          ot,
          D[ft],
          V
        );
        if (Dt === null) {
          ot === null && (ot = te);
          break;
        }
        t && ot && Dt.alternate === null && e(M, ot), E = o(Dt, E, ft), Mt === null ? P = Dt : Mt.sibling = Dt, Mt = Dt, ot = te;
      }
      if (ft === D.length)
        return n(M, ot), yt && jn(M, ft), P;
      if (ot === null) {
        for (; ft < D.length; ft++)
          ot = U(M, D[ft], V), ot !== null && (E = o(
            ot,
            E,
            ft
          ), Mt === null ? P = ot : Mt.sibling = ot, Mt = ot);
        return yt && jn(M, ft), P;
      }
      for (ot = a(ot); ft < D.length; ft++)
        te = z(
          ot,
          M,
          ft,
          D[ft],
          V
        ), te !== null && (t && (Dt = te.alternate, Dt !== null && ot.delete(Dt.key === null ? ft : Dt.key)), E = o(
          te,
          E,
          ft
        ), Mt === null ? P = te : Mt.sibling = te, Mt = te);
      return t && ot.forEach(function(xa) {
        return e(M, xa);
      }), yt && jn(M, ft), P;
    }
    function tt(M, E, D, V) {
      if (D == null) throw Error(u(151));
      for (var P = null, Mt = null, ot = E, ft = E = 0, te = null, Dt = D.next(); ot !== null && !Dt.done; ft++, Dt = D.next()) {
        ot.index > ft ? (te = ot, ot = null) : te = ot.sibling;
        var xa = A(M, ot, Dt.value, V);
        if (xa === null) {
          ot === null && (ot = te);
          break;
        }
        t && ot && xa.alternate === null && e(M, ot), E = o(xa, E, ft), Mt === null ? P = xa : Mt.sibling = xa, Mt = xa, ot = te;
      }
      if (Dt.done)
        return n(M, ot), yt && jn(M, ft), P;
      if (ot === null) {
        for (; !Dt.done; ft++, Dt = D.next())
          Dt = U(M, Dt.value, V), Dt !== null && (E = o(Dt, E, ft), Mt === null ? P = Dt : Mt.sibling = Dt, Mt = Dt);
        return yt && jn(M, ft), P;
      }
      for (ot = a(ot); !Dt.done; ft++, Dt = D.next())
        Dt = z(ot, M, ft, Dt.value, V), Dt !== null && (t && (te = Dt.alternate, te !== null && ot.delete(
          te.key === null ? ft : te.key
        )), E = o(Dt, E, ft), Mt === null ? P = Dt : Mt.sibling = Dt, Mt = Dt);
      return t && ot.forEach(function(jT) {
        return e(M, jT);
      }), yt && jn(M, ft), P;
    }
    function gt(M, E, D, V) {
      if (typeof D == "object" && D !== null && D.type === pt && D.key === null && D.props.ref === void 0 && (D = D.props.children), typeof D == "object" && D !== null) {
        switch (D.$$typeof) {
          case dt:
            t: {
              for (var P = D.key; E !== null; ) {
                if (E.key === P) {
                  if (P = D.type, P === pt) {
                    if (E.tag === 7) {
                      n(
                        M,
                        E.sibling
                      ), V = s(
                        E,
                        D.props.children
                      ), ia(V, D), V.return = M, M = V;
                      break t;
                    }
                  } else if (E.elementType === P || typeof P == "object" && P !== null && P.$$typeof === G && Za(P) === E.type) {
                    n(
                      M,
                      E.sibling
                    ), V = s(E, D.props), ia(V, D), V.return = M, M = V;
                    break t;
                  }
                  n(M, E);
                  break;
                } else e(M, E);
                E = E.sibling;
              }
              D.type === pt ? (V = La(
                D.props.children,
                M.mode,
                V,
                D.key
              ), ia(V, D), V.return = M, M = V) : (V = Ks(
                D.type,
                D.key,
                D.props,
                null,
                M.mode,
                V
              ), ia(V, D), V.return = M, M = V);
            }
            return f(M);
          case it:
            t: {
              for (P = D.key; E !== null; ) {
                if (E.key === P)
                  if (E.tag === 4 && E.stateNode.containerInfo === D.containerInfo && E.stateNode.implementation === D.implementation) {
                    n(
                      M,
                      E.sibling
                    ), V = s(E, D.children || []), V.return = M, M = V;
                    break t;
                  } else {
                    n(M, E);
                    break;
                  }
                else e(M, E);
                E = E.sibling;
              }
              V = fr(D, M.mode, V), V.return = M, M = V;
            }
            return f(M);
          case G:
            return D = Za(D), gt(
              M,
              E,
              D,
              V
            );
        }
        if (Ct(D))
          return K(
            M,
            E,
            D,
            V
          );
        if (st(D)) {
          if (P = st(D), typeof P != "function") throw Error(u(150));
          return D = P.call(D), tt(
            M,
            E,
            D,
            V
          );
        }
        if (typeof D.then == "function")
          return gt(
            M,
            E,
            no(D),
            V
          );
        if (D.$$typeof === St)
          return gt(
            M,
            E,
            Ws(M, D),
            V
          );
        ao(M, D);
      }
      return typeof D == "string" && D !== "" || typeof D == "number" || typeof D == "bigint" ? (D = "" + D, E !== null && E.tag === 6 ? (n(M, E.sibling), V = s(E, D), V.return = M, M = V) : (n(M, E), V = cr(D, M.mode, V), V.return = M, M = V), f(M)) : n(M, E);
    }
    return function(M, E, D, V) {
      try {
        Rl = 0;
        var P = gt(
          M,
          E,
          D,
          V
        );
        return Ri = null, P;
      } catch (ot) {
        if (ot === Oi || ot === to) throw ot;
        var Mt = De(29, ot, null, M.mode);
        return Mt.lanes = V, Mt.return = M, Mt;
      } finally {
      }
    };
  }
  var ka = am(!0), im = am(!1), la = !1;
  function Tr(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Er(t, e) {
    t = t.updateQueue, e.updateQueue === t && (e.updateQueue = {
      baseState: t.baseState,
      firstBaseUpdate: t.firstBaseUpdate,
      lastBaseUpdate: t.lastBaseUpdate,
      shared: t.shared,
      callbacks: null
    });
  }
  function sa(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function oa(t, e, n) {
    var a = t.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (Ot & 2) !== 0) {
      var s = a.pending;
      return s === null ? e.next = e : (e.next = s.next, s.next = e), a.pending = e, e = Zs(t), Yh(t, null, n), e;
    }
    return Qs(t, a, e, n), Zs(t);
  }
  function wl(t, e, n) {
    if (e = e.updateQueue, e !== null && (e = e.shared, (n & 4194048) !== 0)) {
      var a = e.lanes;
      a &= t.pendingLanes, n |= a, e.lanes = n, Zd(t, n);
    }
  }
  function xr(t, e) {
    var n = t.updateQueue, a = t.alternate;
    if (a !== null && (a = a.updateQueue, n === a)) {
      var s = null, o = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var f = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null
          };
          o === null ? s = o = f : o = o.next = f, n = n.next;
        } while (n !== null);
        o === null ? s = o = e : o = o.next = e;
      } else s = o = e;
      n = {
        baseState: a.baseState,
        firstBaseUpdate: s,
        lastBaseUpdate: o,
        shared: a.shared,
        callbacks: a.callbacks
      }, t.updateQueue = n;
      return;
    }
    t = n.lastBaseUpdate, t === null ? n.firstBaseUpdate = e : t.next = e, n.lastBaseUpdate = e;
  }
  var Ar = !1;
  function Nl() {
    if (Ar) {
      var t = zi;
      if (t !== null) throw t;
    }
  }
  function _l(t, e, n, a) {
    Ar = !1;
    var s = t.updateQueue;
    la = !1;
    var o = s.firstBaseUpdate, f = s.lastBaseUpdate, g = s.shared.pending;
    if (g !== null) {
      s.shared.pending = null;
      var S = g, C = S.next;
      S.next = null, f === null ? o = C : f.next = C, f = S;
      var R = t.alternate;
      R !== null && (R = R.updateQueue, g = R.lastBaseUpdate, g !== f && (g === null ? R.firstBaseUpdate = C : g.next = C, R.lastBaseUpdate = S));
    }
    if (o !== null) {
      var U = s.baseState;
      f = 0, R = C = S = null, g = o;
      do {
        var A = g.lane & -536870913, z = A !== g.lane;
        if (z ? (At & A) === A : (a & A) === A) {
          A !== 0 && A === Xa && (Ar = !0), R !== null && (R = R.next = {
            lane: 0,
            tag: g.tag,
            payload: g.payload,
            callback: null,
            next: null
          });
          t: {
            var K = t, tt = g;
            A = e;
            var gt = n;
            switch (tt.tag) {
              case 1:
                if (K = tt.payload, typeof K == "function") {
                  U = K.call(gt, U, A);
                  break t;
                }
                U = K;
                break t;
              case 3:
                K.flags = K.flags & -65537 | 128;
              case 0:
                if (K = tt.payload, A = typeof K == "function" ? K.call(gt, U, A) : K, A == null) break t;
                U = Z({}, U, A);
                break t;
              case 2:
                la = !0;
            }
          }
          A = g.callback, A !== null && (t.flags |= 64, z && (t.flags |= 8192), z = s.callbacks, z === null ? s.callbacks = [A] : z.push(A));
        } else
          z = {
            lane: A,
            tag: g.tag,
            payload: g.payload,
            callback: g.callback,
            next: null
          }, R === null ? (C = R = z, S = U) : R = R.next = z, f |= A;
        if (g = g.next, g === null) {
          if (g = s.shared.pending, g === null)
            break;
          z = g, g = z.next, z.next = null, s.lastBaseUpdate = z, s.shared.pending = null;
        }
      } while (!0);
      R === null && (S = U), s.baseState = S, s.firstBaseUpdate = C, s.lastBaseUpdate = R, o === null && (s.shared.lanes = 0), ma |= f, t.lanes = f, t.memoizedState = U;
    }
  }
  function lm(t, e) {
    if (typeof t != "function")
      throw Error(u(191, t));
    t.call(e);
  }
  function sm(t, e) {
    var n = t.callbacks;
    if (n !== null)
      for (t.callbacks = null, t = 0; t < n.length; t++)
        lm(n[t], e);
  }
  var ua = hn(null), io = hn(0);
  function om(t, e) {
    t = Qn, Gt(io, t), Gt(ua, e), Qn = t | e.baseLanes;
  }
  function Mr() {
    Gt(io, Qn), Gt(ua, ua.current);
  }
  function Cr() {
    Qn = io.current, re(ua), re(io);
  }
  var de = hn(null), be = null;
  function ra(t) {
    var e = t.alternate;
    Gt(he, he.current & 1), Gt(de, t), be === null && (e === null || ua.current !== null || e.memoizedState !== null) && (be = t);
  }
  function Dr(t) {
    Gt(he, he.current), Gt(de, t), be === null && (be = t);
  }
  function um(t) {
    t.tag === 22 ? (Gt(he, he.current), Gt(de, t), be === null && (be = t)) : ca();
  }
  function ca() {
    Gt(he, he.current), Gt(de, de.current);
  }
  function Ge(t) {
    re(de), be === t && (be = null), re(he);
  }
  var he = hn(0);
  function Vl(t, e) {
    Gt(de, de.current), Gt(he, e);
  }
  function zr(t) {
    re(he), re(de), be === t && (be = null);
  }
  function lo(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var n = e.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || Pc(n) || Ic(n)))
          return e;
      } else if (e.tag === 19 && e.memoizedProps.revealOrder !== "independent") {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    return null;
  }
  var Gn = 0, mt = null, Vt = null, Wt = null, so = !1, wi = !1, Ja = !1, oo = 0, Ul = 0, Ni = null, iS = 0;
  function kt() {
    throw Error(u(321));
  }
  function Or(t, e) {
    if (e === null) return !1;
    for (var n = 0; n < e.length && n < t.length; n++)
      if (!He(t[n], e[n])) return !1;
    return !0;
  }
  function Rr(t, e, n, a, s, o) {
    return Gn = o, mt = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, $.H = t === null || t.memoizedState === null ? Zm : Km, Ja = !1, o = n(a, s), Ja = !1, wi && (o = cm(
      e,
      n,
      a,
      s
    )), rm(t), o;
  }
  function rm(t) {
    $.H = go;
    var e = Vt !== null && Vt.next !== null;
    if (Gn = 0, Wt = Vt = mt = null, so = !1, Ul = 0, Ni = null, e) throw Error(u(300));
    t === null || $t || (t = t.dependencies, t !== null && Is(t) && ($t = !0));
  }
  function cm(t, e, n, a) {
    mt = t;
    var s = 0;
    do {
      if (wi && (Ni = null), Ul = 0, wi = !1, 25 <= s) throw Error(u(301));
      if (s += 1, Wt = Vt = null, t.updateQueue != null) {
        var o = t.updateQueue;
        o.lastEffect = null, o.events = null, o.stores = null, o.memoCache != null && (o.memoCache.index = 0);
      }
      $.H = dS, o = e(n, a);
    } while (wi);
    return o;
  }
  function lS() {
    var t = $.H, e = t.useState()[0];
    return e = typeof e.then == "function" ? Bl(e) : e, t = t.useState()[0], (Vt !== null ? Vt.memoizedState : null) !== t && (mt.flags |= 1024), e;
  }
  function wr() {
    var t = oo !== 0;
    return oo = 0, t;
  }
  function Nr(t, e, n) {
    e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~n;
  }
  function _r(t) {
    if (so) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), t = t.next;
      }
      so = !1;
    }
    Gn = 0, Wt = Vt = mt = null, wi = !1, Ul = oo = 0, Ni = null;
  }
  function Te() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Wt === null ? mt.memoizedState = Wt = t : Wt = Wt.next = t, Wt;
  }
  function Ft() {
    if (Vt === null) {
      var t = mt.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = Vt.next;
    var e = Wt === null ? mt.memoizedState : Wt.next;
    if (e !== null)
      Wt = e, Vt = t;
    else {
      if (t === null)
        throw mt.alternate === null ? Error(u(467)) : Error(u(310));
      Vt = t, t = {
        memoizedState: Vt.memoizedState,
        baseState: Vt.baseState,
        baseQueue: Vt.baseQueue,
        queue: Vt.queue,
        next: null
      }, Wt === null ? mt.memoizedState = Wt = t : Wt = Wt.next = t;
    }
    return Wt;
  }
  function uo() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Bl(t) {
    var e = Ul;
    return Ul += 1, Ni === null && (Ni = []), t = tm(Ni, t, e), e = mt, (Wt === null ? e.memoizedState : Wt.next) === null && (e = e.alternate, $.H = e === null || e.memoizedState === null ? Zm : Km), t;
  }
  function ro(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return Bl(t);
      if (t.$$typeof === j) return;
      if (t.$$typeof === St) return fe(t);
    }
    throw Error(u(438, String(t)));
  }
  function Vr(t) {
    var e = null, n = mt.updateQueue;
    if (n !== null && (e = n.memoCache), e == null) {
      var a = mt.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (e = {
        data: a.data.map(function(s) {
          return s.slice();
        }),
        index: 0
      })));
    }
    if (e == null && (e = { data: [], index: 0 }), n === null && (n = uo(), mt.updateQueue = n), n.memoCache = e, n = e.data[e.index], n === void 0)
      for (n = e.data[e.index] = Array(t), a = 0; a < t; a++)
        n[a] = _e;
    return e.index++, n;
  }
  function Yn(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function co(t) {
    var e = Ft();
    return Ur(e, Vt, t);
  }
  function Ur(t, e, n) {
    var a = t.queue;
    if (a === null) throw Error(u(311));
    a.lastRenderedReducer = n;
    var s = t.baseQueue, o = a.pending;
    if (o !== null) {
      if (s !== null) {
        var f = s.next;
        s.next = o.next, o.next = f;
      }
      e.baseQueue = s = o, a.pending = null;
    }
    if (o = t.baseState, s === null) t.memoizedState = o;
    else {
      e = s.next;
      var g = f = null, S = null, C = e, R = !1;
      do {
        var U = C.lane & -536870913;
        if (U !== C.lane ? (At & U) === U : (Gn & U) === U) {
          var A = C.revertLane;
          if (A === 0)
            S !== null && (S = S.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: C.action,
              hasEagerState: C.hasEagerState,
              eagerState: C.eagerState,
              next: null
            }), U === Xa && (R = !0);
          else if ((Gn & A) === A) {
            C = C.next, A === Xa && (R = !0);
            continue;
          } else
            U = {
              lane: 0,
              revertLane: C.revertLane,
              gesture: null,
              action: C.action,
              hasEagerState: C.hasEagerState,
              eagerState: C.eagerState,
              next: null
            }, S === null ? (g = S = U, f = o) : S = S.next = U, mt.lanes |= A, ma |= A;
          U = C.action, Ja && n(o, U), o = C.hasEagerState ? C.eagerState : n(o, U);
        } else
          A = {
            lane: U,
            revertLane: C.revertLane,
            gesture: C.gesture,
            action: C.action,
            hasEagerState: C.hasEagerState,
            eagerState: C.eagerState,
            next: null
          }, S === null ? (g = S = A, f = o) : S = S.next = A, mt.lanes |= U, ma |= U;
        C = C.next;
      } while (C !== null && C !== e);
      if (S === null ? f = o : S.next = g, !He(o, t.memoizedState) && ($t = !0, R && (n = zi, n !== null)))
        throw n;
      t.memoizedState = o, t.baseState = f, t.baseQueue = S, a.lastRenderedState = o;
    }
    return s === null && (a.lanes = 0), [t.memoizedState, a.dispatch];
  }
  function Br(t) {
    var e = Ft(), n = e.queue;
    if (n === null) throw Error(u(311));
    n.lastRenderedReducer = t;
    var a = n.dispatch, s = n.pending, o = e.memoizedState;
    if (s !== null) {
      n.pending = null;
      var f = s = s.next;
      do
        o = t(o, f.action), f = f.next;
      while (f !== s);
      He(o, e.memoizedState) || ($t = !0), e.memoizedState = o, e.baseQueue === null && (e.baseState = o), n.lastRenderedState = o;
    }
    return [o, a];
  }
  function fm(t, e, n) {
    var a = mt, s = Ft(), o = yt;
    if (o) {
      if (n === void 0) throw Error(u(407));
      n = n();
    } else n = e();
    var f = !He(
      (Vt || s).memoizedState,
      n
    );
    if (f && (s.memoizedState = n, $t = !0), s = s.queue, Hr(mm.bind(null, a, s, t), [
      t
    ]), t = s.getSnapshot !== e || f || Wt !== null && (Wt.memoizedState.tag & 1) !== 0, _i(
      t ? 9 : 8,
      { destroy: void 0 },
      hm.bind(null, a, s, n, e),
      null
    ), t) {
      if (a.flags |= 2048, jt === null) throw Error(u(349));
      o || (Gn & 127) !== 0 || dm(a, e, n);
    }
    return n;
  }
  function dm(t, e, n) {
    t.flags |= 16384, t = { getSnapshot: e, value: n }, e = mt.updateQueue, e === null ? (e = uo(), mt.updateQueue = e, e.stores = [t]) : (n = e.stores, n === null ? e.stores = [t] : n.push(t));
  }
  function hm(t, e, n, a) {
    e.value = n, e.getSnapshot = a, gm(e) && pm(t);
  }
  function mm(t, e, n) {
    return n(function() {
      gm(e) && pm(t);
    });
  }
  function gm(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var n = e();
      return !He(t, n);
    } catch {
      return !0;
    }
  }
  function pm(t) {
    var e = ja(t, 2);
    e !== null && we(e, t, 2);
  }
  function jr(t) {
    var e = Te();
    if (typeof t == "function") {
      var n = t;
      if (t = n(), Ja) {
        In(!0);
        try {
          n();
        } finally {
          In(!1);
        }
      }
    }
    return e.memoizedState = e.baseState = t, e.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Yn,
      lastRenderedState: t
    }, e;
  }
  function ym(t, e, n, a) {
    return t.baseState = n, Ur(
      t,
      Vt,
      typeof a == "function" ? a : Yn
    );
  }
  function sS(t, e, n, a, s) {
    if (mo(t)) throw Error(u(485));
    if (t = e.action, t !== null) {
      var o = {
        payload: s,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(f) {
          o.listeners.push(f);
        }
      };
      $.T !== null ? n(!0) : o.isTransition = !1, a(o), n = e.pending, n === null ? (o.next = e.pending = o, vm(e, o)) : (o.next = n.next, e.pending = n.next = o);
    }
  }
  function vm(t, e) {
    var n = e.action, a = e.payload, s = t.state;
    if (e.isTransition) {
      var o = $.T, f = {};
      f.types = o !== null ? o.types : null, $.T = f;
      try {
        var g = n(s, a), S = $.S;
        S !== null && S(f, g), bm(t, e, g);
      } catch (C) {
        Lr(t, e, C);
      } finally {
        o !== null && f.types !== null && (o.types = f.types), $.T = o;
      }
    } else
      try {
        o = n(s, a), bm(t, e, o);
      } catch (C) {
        Lr(t, e, C);
      }
  }
  function bm(t, e, n) {
    n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(
      function(a) {
        Sm(t, e, a);
      },
      function(a) {
        return Lr(t, e, a);
      }
    ) : Sm(t, e, n);
  }
  function Sm(t, e, n) {
    e.status = "fulfilled", e.value = n, Tm(e), t.state = n, e = t.pending, e !== null && (n = e.next, n === e ? t.pending = null : (n = n.next, e.next = n, vm(t, n)));
  }
  function Lr(t, e, n) {
    var a = t.pending;
    if (t.pending = null, a !== null) {
      a = a.next;
      do
        e.status = "rejected", e.reason = n, Tm(e), e = e.next;
      while (e !== a);
    }
    t.action = null;
  }
  function Tm(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function Em(t, e) {
    return e;
  }
  function xm(t, e) {
    if (yt) {
      var n = jt.formState;
      if (n !== null) {
        t: {
          var a = mt;
          if (yt) {
            if (Yt) {
              e: {
                for (var s = Yt, o = Ie; s.nodeType !== 8; ) {
                  if (!o) {
                    s = null;
                    break e;
                  }
                  if (s = $e(
                    s.nextSibling
                  ), s === null) {
                    s = null;
                    break e;
                  }
                }
                o = s.data, s = o === "F!" || o === "F" ? s : null;
              }
              if (s) {
                Yt = $e(
                  s.nextSibling
                ), a = s.data === "F!";
                break t;
              }
            }
            na(a);
          }
          a = !1;
        }
        a && (e = n[0]);
      }
    }
    return n = Te(), n.memoizedState = n.baseState = e, a = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Em,
      lastRenderedState: e
    }, n.queue = a, n = qm.bind(
      null,
      mt,
      a
    ), a.dispatch = n, a = jr(!1), o = Qr.bind(
      null,
      mt,
      !1,
      a.queue
    ), a = Te(), s = {
      state: e,
      dispatch: null,
      action: t,
      pending: null
    }, a.queue = s, n = sS.bind(
      null,
      mt,
      s,
      o,
      n
    ), s.dispatch = n, a.memoizedState = t, [e, n, !1];
  }
  function Am(t) {
    var e = Ft();
    return Mm(e, Vt, t);
  }
  function Mm(t, e, n) {
    if (e = Ur(
      t,
      e,
      Em
    )[0], t = co(Yn)[0], typeof e == "object" && e !== null && typeof e.then == "function")
      try {
        var a = Bl(e);
      } catch (f) {
        throw f === Oi ? to : f;
      }
    else a = e;
    e = Ft();
    var s = e.queue, o = s.dispatch;
    return n !== e.memoizedState && (mt.flags |= 2048, _i(
      9,
      { destroy: void 0 },
      oS.bind(null, s, n),
      null
    )), [a, o, t];
  }
  function oS(t, e) {
    t.action = e;
  }
  function Cm(t) {
    var e = Ft(), n = Vt;
    if (n !== null)
      return Mm(e, n, t);
    Ft(), e = e.memoizedState, n = Ft();
    var a = n.queue.dispatch;
    return n.memoizedState = t, [e, a, !1];
  }
  function _i(t, e, n, a) {
    return t = { tag: t, create: n, deps: a, inst: e, next: null }, e = mt.updateQueue, e === null && (e = uo(), mt.updateQueue = e), n = e.lastEffect, n === null ? e.lastEffect = t.next = t : (a = n.next, n.next = t, t.next = a, e.lastEffect = t), t;
  }
  function Dm() {
    return Ft().memoizedState;
  }
  function fo(t, e, n, a) {
    var s = Te();
    mt.flags |= t, s.memoizedState = _i(
      1 | e,
      { destroy: void 0 },
      n,
      a === void 0 ? null : a
    );
  }
  function ho(t, e, n, a) {
    var s = Ft();
    a = a === void 0 ? null : a;
    var o = s.memoizedState.inst;
    Vt !== null && a !== null && Or(a, Vt.memoizedState.deps) ? s.memoizedState = _i(e, o, n, a) : (mt.flags |= t, s.memoizedState = _i(
      1 | e,
      o,
      n,
      a
    ));
  }
  function zm(t, e) {
    fo(8390656, 8, t, e);
  }
  function Hr(t, e) {
    ho(2048, 8, t, e);
  }
  function uS(t) {
    mt.flags |= 4;
    var e = mt.updateQueue;
    if (e === null)
      e = uo(), mt.updateQueue = e, e.events = [t];
    else {
      var n = e.events;
      n === null ? e.events = [t] : n.push(t);
    }
  }
  function Om(t) {
    var e = Ft().memoizedState;
    return uS({ ref: e, nextImpl: t }), function() {
      if ((Ot & 2) !== 0) throw Error(u(440));
      return e.impl.apply(void 0, arguments);
    };
  }
  function Rm(t, e) {
    return ho(4, 2, t, e);
  }
  function wm(t, e) {
    return ho(4, 4, t, e);
  }
  function Nm(t, e) {
    if (typeof e == "function") {
      t = t();
      var n = e(t);
      return function() {
        typeof n == "function" ? n() : e(null);
      };
    }
    if (e != null)
      return t = t(), e.current = t, function() {
        e.current = null;
      };
  }
  function _m(t, e, n) {
    n = n != null ? n.concat([t]) : null, ho(4, 4, Nm.bind(null, e, t), n);
  }
  function Gr() {
  }
  function Vm(t, e) {
    var n = Ft();
    e = e === void 0 ? null : e;
    var a = n.memoizedState;
    return e !== null && Or(e, a[1]) ? a[0] : (n.memoizedState = [t, e], t);
  }
  function Um(t, e) {
    var n = Ft();
    e = e === void 0 ? null : e;
    var a = n.memoizedState;
    if (e !== null && Or(e, a[1]))
      return a[0];
    if (a = t(), Ja) {
      In(!0);
      try {
        t();
      } finally {
        In(!1);
      }
    }
    return n.memoizedState = [a, e], a;
  }
  function Yr(t, e, n) {
    return n === void 0 || (Gn & 1073741824) !== 0 && (At & 261930) === 0 ? t.memoizedState = e : (t.memoizedState = n, t = Zg(), mt.lanes |= t, ma |= t, n);
  }
  function Bm(t, e, n, a) {
    return He(n, e) ? n : ua.current !== null ? (t = Yr(t, n, a), He(t, e) || ($t = !0), t) : (Gn & 106) === 0 || (Gn & 1073741824) !== 0 && (At & 261930) === 0 ? ($t = !0, t.memoizedState = n) : (t = Zg(), mt.lanes |= t, ma |= t, e);
  }
  function jm(t, e, n, a, s) {
    var o = ct.p;
    ct.p = o !== 0 && 8 > o ? o : 8;
    var f = $.T, g = {};
    g.types = f !== null ? f.types : null, $.T = g, Qr(t, !1, e, n);
    try {
      var S = s(), C = $.S;
      if (C !== null && C(g, S), S !== null && typeof S == "object" && typeof S.then == "function") {
        var R = aS(
          S,
          a
        );
        jl(
          t,
          e,
          R,
          Qe(t)
        );
      } else
        jl(
          t,
          e,
          a,
          Qe(t)
        );
    } catch (U) {
      jl(
        t,
        e,
        { then: function() {
        }, status: "rejected", reason: U },
        Qe()
      );
    } finally {
      ct.p = o, f !== null && g.types !== null && (f.types = g.types), $.T = f;
    }
  }
  function rS() {
  }
  function qr(t, e, n, a) {
    if (t.tag !== 5) throw Error(u(476));
    var s = Lm(t).queue;
    jm(
      t,
      s,
      e,
      Ve,
      n === null ? rS : function() {
        return Hm(t), n(a);
      }
    );
  }
  function Lm(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: Ve,
      baseState: Ve,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Yn,
        lastRenderedState: Ve
      },
      next: null
    };
    var n = {};
    return e.next = {
      memoizedState: n,
      baseState: n,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Yn,
        lastRenderedState: n
      },
      next: null
    }, t.memoizedState = e, t = t.alternate, t !== null && (t.memoizedState = e), e;
  }
  function Hm(t) {
    var e = Lm(t);
    e.next === null && (e = t.alternate.memoizedState), jl(
      t,
      e.next.queue,
      {},
      Qe()
    );
  }
  function Xr() {
    return fe(Wi);
  }
  function Gm() {
    return Ft().memoizedState;
  }
  function Ym() {
    return Ft().memoizedState;
  }
  function cS(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var n = Qe();
          t = sa(n);
          var a = oa(e, t, n);
          a !== null && (we(a, e, n), wl(a, e, n)), e = { cache: yr() }, t.payload = e;
          return;
      }
      e = e.return;
    }
  }
  function fS(t, e, n) {
    var a = Qe();
    n = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, mo(t) ? Xm(e, n) : (n = ur(t, e, n, a), n !== null && (we(n, t, a), Qm(n, e, a)));
  }
  function qm(t, e, n) {
    var a = Qe();
    jl(t, e, n, a);
  }
  function jl(t, e, n, a) {
    var s = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (mo(t)) Xm(e, s);
    else {
      var o = t.alternate;
      if (t.lanes === 0 && (o === null || o.lanes === 0) && (o = e.lastRenderedReducer, o !== null))
        try {
          var f = e.lastRenderedState, g = o(f, n);
          if (s.hasEagerState = !0, s.eagerState = g, He(g, f))
            return Qs(t, e, s, 0), jt === null && Xs(), !1;
        } catch {
        } finally {
        }
      if (n = ur(t, e, s, a), n !== null)
        return we(n, t, a), Qm(n, e, a), !0;
    }
    return !1;
  }
  function Qr(t, e, n, a) {
    if (a = {
      lane: 2,
      revertLane: Vc(),
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, mo(t)) {
      if (e) throw Error(u(479));
    } else
      e = ur(
        t,
        n,
        a,
        2
      ), e !== null && we(e, t, 2);
  }
  function mo(t) {
    var e = t.alternate;
    return t === mt || e !== null && e === mt;
  }
  function Xm(t, e) {
    wi = so = !0;
    var n = t.pending;
    n === null ? e.next = e : (e.next = n.next, n.next = e), t.pending = e;
  }
  function Qm(t, e, n) {
    if ((n & 4194048) !== 0) {
      var a = e.lanes;
      a &= t.pendingLanes, n |= a, e.lanes = n, Zd(t, n);
    }
  }
  var go = {
    readContext: fe,
    use: ro,
    useCallback: kt,
    useContext: kt,
    useEffect: kt,
    useImperativeHandle: kt,
    useLayoutEffect: kt,
    useInsertionEffect: kt,
    useMemo: kt,
    useReducer: kt,
    useRef: kt,
    useState: kt,
    useDebugValue: kt,
    useDeferredValue: kt,
    useTransition: kt,
    useSyncExternalStore: kt,
    useId: kt,
    useHostTransitionStatus: kt,
    useFormState: kt,
    useActionState: kt,
    useOptimistic: kt,
    useMemoCache: kt,
    useCacheRefresh: kt,
    useEffectEvent: kt
  }, Zm = {
    readContext: fe,
    use: ro,
    useCallback: function(t, e) {
      return Te().memoizedState = [
        t,
        e === void 0 ? null : e
      ], t;
    },
    useContext: fe,
    useEffect: zm,
    useImperativeHandle: function(t, e, n) {
      n = n != null ? n.concat([t]) : null, fo(
        4194308,
        4,
        Nm.bind(null, e, t),
        n
      );
    },
    useLayoutEffect: function(t, e) {
      return fo(4194308, 4, t, e);
    },
    useInsertionEffect: function(t, e) {
      fo(4, 2, t, e);
    },
    useMemo: function(t, e) {
      var n = Te();
      e = e === void 0 ? null : e;
      var a = t();
      if (Ja) {
        In(!0);
        try {
          t();
        } finally {
          In(!1);
        }
      }
      return n.memoizedState = [a, e], a;
    },
    useReducer: function(t, e, n) {
      var a = Te();
      if (n !== void 0) {
        var s = n(e);
        if (Ja) {
          In(!0);
          try {
            n(e);
          } finally {
            In(!1);
          }
        }
      } else s = e;
      return a.memoizedState = a.baseState = s, t = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: t,
        lastRenderedState: s
      }, a.queue = t, t = t.dispatch = fS.bind(
        null,
        mt,
        t
      ), [a.memoizedState, t];
    },
    useRef: function(t) {
      var e = Te();
      return t = { current: t }, e.memoizedState = t;
    },
    useState: function(t) {
      t = jr(t);
      var e = t.queue, n = qm.bind(null, mt, e);
      return e.dispatch = n, [t.memoizedState, n];
    },
    useDebugValue: Gr,
    useDeferredValue: function(t, e) {
      var n = Te();
      return Yr(n, t, e);
    },
    useTransition: function() {
      var t = jr(!1);
      return t = jm.bind(
        null,
        mt,
        t.queue,
        !0,
        !1
      ), Te().memoizedState = t, [!1, t];
    },
    useSyncExternalStore: function(t, e, n) {
      var a = mt, s = Te();
      if (yt) {
        if (n === void 0)
          throw Error(u(407));
        n = n();
      } else {
        if (n = e(), jt === null)
          throw Error(u(349));
        (At & 127) !== 0 || dm(a, e, n);
      }
      s.memoizedState = n;
      var o = { value: n, getSnapshot: e };
      return s.queue = o, zm(mm.bind(null, a, o, t), [
        t
      ]), a.flags |= 2048, _i(
        9,
        { destroy: void 0 },
        hm.bind(
          null,
          a,
          o,
          n,
          e
        ),
        null
      ), n;
    },
    useId: function() {
      var t = Te(), e = jt.identifierPrefix;
      if (yt) {
        var n = yn, a = pn;
        n = (a & ~(1 << 32 - je(a) - 1)).toString(32) + n, e = "_" + e + "R_" + n, n = oo++, 0 < n && (e += "H" + n.toString(32)), e += "_";
      } else
        n = iS++, e = "_" + e + "r_" + n.toString(32) + "_";
      return t.memoizedState = e;
    },
    useHostTransitionStatus: Xr,
    useFormState: xm,
    useActionState: xm,
    useOptimistic: function(t) {
      var e = Te();
      e.memoizedState = e.baseState = t;
      var n = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return e.queue = n, e = Qr.bind(
        null,
        mt,
        !0,
        n
      ), n.dispatch = e, [t, e];
    },
    useMemoCache: Vr,
    useCacheRefresh: function() {
      return Te().memoizedState = cS.bind(
        null,
        mt
      );
    },
    useEffectEvent: function(t) {
      var e = Te(), n = { impl: t };
      return e.memoizedState = n, function() {
        if ((Ot & 2) !== 0)
          throw Error(u(440));
        return n.impl.apply(void 0, arguments);
      };
    }
  }, Km = {
    readContext: fe,
    use: ro,
    useCallback: Vm,
    useContext: fe,
    useEffect: Hr,
    useImperativeHandle: _m,
    useInsertionEffect: Rm,
    useLayoutEffect: wm,
    useMemo: Um,
    useReducer: co,
    useRef: Dm,
    useState: function() {
      return co(Yn);
    },
    useDebugValue: Gr,
    useDeferredValue: function(t, e) {
      var n = Ft();
      return Bm(
        n,
        Vt.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = co(Yn)[0], e = Ft().memoizedState;
      return [
        typeof t == "boolean" ? t : Bl(t),
        e
      ];
    },
    useSyncExternalStore: fm,
    useId: Gm,
    useHostTransitionStatus: Xr,
    useFormState: Am,
    useActionState: Am,
    useOptimistic: function(t, e) {
      var n = Ft();
      return ym(n, Vt, t, e);
    },
    useMemoCache: Vr,
    useCacheRefresh: Ym,
    useEffectEvent: Om
  }, dS = {
    readContext: fe,
    use: ro,
    useCallback: Vm,
    useContext: fe,
    useEffect: Hr,
    useImperativeHandle: _m,
    useInsertionEffect: Rm,
    useLayoutEffect: wm,
    useMemo: Um,
    useReducer: Br,
    useRef: Dm,
    useState: function() {
      return Br(Yn);
    },
    useDebugValue: Gr,
    useDeferredValue: function(t, e) {
      var n = Ft();
      return Vt === null ? Yr(n, t, e) : Bm(
        n,
        Vt.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = Br(Yn)[0], e = Ft().memoizedState;
      return [
        typeof t == "boolean" ? t : Bl(t),
        e
      ];
    },
    useSyncExternalStore: fm,
    useId: Gm,
    useHostTransitionStatus: Xr,
    useFormState: Cm,
    useActionState: Cm,
    useOptimistic: function(t, e) {
      var n = Ft();
      return Vt !== null ? ym(n, Vt, t, e) : (n.baseState = t, [t, n.queue.dispatch]);
    },
    useMemoCache: Vr,
    useCacheRefresh: Ym,
    useEffectEvent: Om
  };
  function Zr(t, e, n, a) {
    e = t.memoizedState, n = n(a, e), n = n == null ? e : Z({}, e, n), t.memoizedState = n, t.lanes === 0 && (t.updateQueue.baseState = n);
  }
  var Kr = {
    enqueueSetState: function(t, e, n) {
      t = t._reactInternals;
      var a = Qe(), s = sa(a);
      s.payload = e, n != null && (s.callback = n), e = oa(t, s, a), e !== null && (we(e, t, a), wl(e, t, a));
    },
    enqueueReplaceState: function(t, e, n) {
      t = t._reactInternals;
      var a = Qe(), s = sa(a);
      s.tag = 1, s.payload = e, n != null && (s.callback = n), e = oa(t, s, a), e !== null && (we(e, t, a), wl(e, t, a));
    },
    enqueueForceUpdate: function(t, e) {
      t = t._reactInternals;
      var n = Qe(), a = sa(n);
      a.tag = 2, e != null && (a.callback = e), e = oa(t, a, n), e !== null && (we(e, t, n), wl(e, t, n));
    }
  };
  function km(t, e, n, a, s, o, f) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(a, o, f) : e.prototype && e.prototype.isPureReactComponent ? !xl(n, a) || !xl(s, o) : !0;
  }
  function Jm(t, e, n, a) {
    t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(n, a), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(n, a), e.state !== t && Kr.enqueueReplaceState(e, e.state, null);
  }
  function Fa(t, e) {
    var n = e;
    if ("ref" in e) {
      n = {};
      for (var a in e)
        a !== "ref" && (n[a] = e[a]);
    }
    if (t = t.defaultProps) {
      n === e && (n = Z({}, n));
      for (var s in t)
        n[s] === void 0 && (n[s] = t[s]);
    }
    return n;
  }
  function Fm(t) {
    qs(t);
  }
  function Pm(t) {
    console.error(t);
  }
  function Im(t) {
    qs(t);
  }
  function po(t, e) {
    try {
      var n = t.onUncaughtError;
      n(e.value, { componentStack: e.stack });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function Wm(t, e, n) {
    try {
      var a = t.onCaughtError;
      a(n.value, {
        componentStack: n.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null
      });
    } catch (s) {
      setTimeout(function() {
        throw s;
      });
    }
  }
  function kr(t, e, n) {
    return n = sa(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
      po(t, e);
    }, n;
  }
  function $m(t) {
    return t = sa(t), t.tag = 3, t;
  }
  function tg(t, e, n, a) {
    var s = n.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var o = a.value;
      t.payload = function() {
        return s(o);
      }, t.callback = function() {
        Wm(e, n, a);
      };
    }
    var f = n.stateNode;
    f !== null && typeof f.componentDidCatch == "function" && (t.callback = function() {
      Wm(e, n, a), typeof s != "function" && (ga === null ? ga = /* @__PURE__ */ new Set([this]) : ga.add(this));
      var g = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: g !== null ? g : ""
      });
    });
  }
  function hS(t, e, n, a, s) {
    if (n.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (e = n.alternate, e !== null && Ya(
        e,
        n,
        s,
        !0
      ), n = de.current, n !== null) {
        switch (n.tag) {
          case 31:
          case 13:
          case 19:
            return be === null ? jo() : n.alternate === null && Jt === 0 && (Jt = 3), n.flags &= -257, n.flags |= 65536, n.lanes = s, a === eo ? n.flags |= 16384 : (e = n.updateQueue, e === null ? n.updateQueue = /* @__PURE__ */ new Set([a]) : e.add(a), wc(t, a, s)), !1;
          case 22:
            return n.flags |= 65536, a === eo ? n.flags |= 16384 : (e = n.updateQueue, e === null ? (e = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, n.updateQueue = e) : (n = e.retryQueue, n === null ? e.retryQueue = /* @__PURE__ */ new Set([a]) : n.add(a)), wc(t, a, s)), !1;
        }
        throw Error(u(435, n.tag));
      }
      return wc(t, a, s), jo(), !1;
    }
    if (yt)
      return e = de.current, e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256), e.flags |= 65536, e.lanes = s, a !== hr && (t = Error(u(422), { cause: a }), Cl(Je(t, n)))) : (a !== hr && (e = Error(u(423), {
        cause: a
      }), Cl(
        Je(e, n)
      )), t = t.current.alternate, t.flags |= 65536, s &= -s, t.lanes |= s, a = Je(a, n), s = kr(
        t.stateNode,
        a,
        s
      ), xr(t, s), Jt !== 4 && (Jt = 2)), !1;
    var o = Error(u(520), { cause: a });
    if (o = Je(o, n), Zl === null ? Zl = [o] : Zl.push(o), Jt !== 4 && (Jt = 2), e === null) return !0;
    a = Je(a, n), n = e;
    do {
      switch (n.tag) {
        case 3:
          return n.flags |= 65536, t = s & -s, n.lanes |= t, t = kr(n.stateNode, a, t), xr(n, t), !1;
        case 1:
          if (e = n.type, o = n.stateNode, (n.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || o !== null && typeof o.componentDidCatch == "function" && (ga === null || !ga.has(o))))
            return n.flags |= 65536, s &= -s, n.lanes |= s, s = $m(s), tg(
              s,
              t,
              n,
              a
            ), xr(n, s), !1;
          break;
        case 22:
          if (n.memoizedState !== null)
            return n.flags |= 65536, !1;
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var Jr = Error(u(461)), $t = !1;
  function ne(t, e, n, a) {
    e.child = t === null ? im(e, null, n, a) : ka(
      e,
      t.child,
      n,
      a
    );
  }
  function eg(t, e, n, a, s) {
    n = n.render;
    var o = e.ref;
    if ("ref" in a) {
      var f = {};
      for (var g in a)
        g !== "ref" && (f[g] = a[g]);
    } else f = a;
    return qa(e), a = Rr(
      t,
      e,
      n,
      f,
      o,
      s
    ), g = wr(), t !== null && !$t ? (Nr(t, e, s), qn(t, e, s)) : (yt && g && Js(e), e.flags |= 1, ne(t, e, a, s), e.child);
  }
  function ng(t, e, n, a, s) {
    if (t === null) {
      var o = n.type;
      return typeof o == "function" && !rr(o) && o.defaultProps === void 0 && n.compare === null ? (e.tag = 15, e.type = o, ag(
        t,
        e,
        o,
        a,
        s
      )) : (t = Ks(
        n.type,
        null,
        a,
        e,
        e.mode,
        s
      ), t.ref = e.ref, t.return = e, e.child = t);
    }
    if (o = t.child, !nc(t, s)) {
      var f = o.memoizedProps;
      if (n = n.compare, n = n !== null ? n : xl, n(f, a) && t.ref === e.ref)
        return qn(t, e, s);
    }
    return e.flags |= 1, t = Bn(o, a), t.ref = e.ref, t.return = e, e.child = t;
  }
  function ag(t, e, n, a, s) {
    if (t !== null) {
      var o = t.memoizedProps;
      if (xl(o, a) && t.ref === e.ref)
        if ($t = !1, e.pendingProps = a = o, nc(t, s))
          (t.flags & 131072) !== 0 && ($t = !0);
        else
          return e.lanes = t.lanes, qn(t, e, s);
    }
    return Fr(
      t,
      e,
      n,
      a,
      s
    );
  }
  function ig(t, e, n, a) {
    var s = a.children, o = t !== null ? t.memoizedState : null;
    if (t === null && e.stateNode === null && (e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), a.mode === "hidden") {
      if ((e.flags & 128) !== 0) {
        if (o = o !== null ? o.baseLanes | n : n, t !== null) {
          for (a = e.child = t.child, s = 0; a !== null; )
            s = s | a.lanes | a.childLanes, a = a.sibling;
          a = s & ~o;
        } else a = 0, e.child = null;
        return lg(
          t,
          e,
          o,
          n,
          a
        );
      }
      if ((n & 536870912) !== 0)
        e.memoizedState = { baseLanes: 0, cachePool: null }, t !== null && $s(
          e,
          o !== null ? o.cachePool : null
        ), o !== null ? om(e, o) : Mr(), um(e);
      else
        return a = e.lanes = 536870912, lg(
          t,
          e,
          o !== null ? o.baseLanes | n : n,
          n,
          a
        );
    } else
      o !== null ? ($s(e, o.cachePool), om(e, o), ca(), e.memoizedState = null) : (t !== null && $s(e, null), Mr(), ca());
    return ne(t, e, s, n), e.child;
  }
  function Ll(t, e) {
    return t !== null && t.tag === 22 || e.stateNode !== null || (e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), e.sibling;
  }
  function lg(t, e, n, a, s) {
    var o = br();
    return o = o === null ? null : { parent: It._currentValue, pool: o }, e.memoizedState = {
      baseLanes: n,
      cachePool: o
    }, t !== null && $s(e, null), Mr(), um(e), t !== null && Ya(t, e, a, !0), e.childLanes = s, null;
  }
  function yo(t, e) {
    return e = vo(
      { mode: e.mode, children: e.children },
      t.mode
    ), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function sg(t, e, n) {
    return ka(e, t.child, null, n), t = yo(e, e.pendingProps), t.flags |= 2, Ge(e), e.memoizedState = null, t;
  }
  function mS(t, e, n) {
    var a = e.pendingProps, s = (e.flags & 128) !== 0;
    if (e.flags &= -129, t === null) {
      if (yt) {
        if (a.mode === "hidden")
          return t = yo(e, a), e.lanes = 536870912, t.memoizedState = { baseLanes: 0, cachePool: null }, Ll(null, t);
        if (Dr(e), (t = Yt) ? (t = Np(
          t,
          Ie
        ), t = t !== null && t.data === "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: ta !== null ? { id: pn, overflow: yn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = Xh(t), n.return = e, e.child = n, se = e, Yt = null)) : t = null, t === null) throw na(e);
        return e.lanes = 536870912, null;
      }
      return yo(e, a);
    }
    var o = t.memoizedState;
    if (o !== null) {
      var f = o.dehydrated;
      if (Dr(e), s)
        if (e.flags & 256)
          e.flags &= -257, e = sg(
            t,
            e,
            n
          );
        else if (e.memoizedState !== null)
          e.child = t.child, e.flags |= 128, e = null;
        else throw Error(u(558));
      else if ($t || Ya(t, e, n, !1), s = (n & t.childLanes) !== 0, $t || s) {
        if (ua.current === null) {
          if (a = jt, a !== null && (f = Kd(a, n), f !== 0 && f !== o.retryLane))
            throw o.retryLane = f, ja(t, f), we(a, t, f), Jr;
          jo();
        }
        e = sg(
          t,
          e,
          n
        );
      } else
        t = o.treeContext, Yt = $e(f.nextSibling), se = e, yt = !0, ea = null, Ie = !1, t !== null && Kh(e, t), e = yo(e, a), e.flags |= 134221824;
      return e;
    }
    return t = Bn(t.child, {
      mode: a.mode,
      children: a.children
    }), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function Vi(t, e) {
    var n = e.ref;
    if (n === null)
      t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object")
        throw Error(u(284));
      (t === null || t.ref !== n) && (e.flags |= 4194816);
    }
  }
  function Fr(t, e, n, a, s) {
    return qa(e), n = Rr(
      t,
      e,
      n,
      a,
      void 0,
      s
    ), a = wr(), t !== null && !$t ? (Nr(t, e, s), qn(t, e, s)) : (yt && a && Js(e), e.flags |= 1, ne(t, e, n, s), e.child);
  }
  function og(t, e, n, a, s, o) {
    return qa(e), e.updateQueue = null, n = cm(
      e,
      a,
      n,
      s
    ), rm(t), a = wr(), t !== null && !$t ? (Nr(t, e, o), qn(t, e, o)) : (yt && a && Js(e), e.flags |= 1, ne(t, e, n, o), e.child);
  }
  function ug(t, e, n, a, s) {
    if (qa(e), e.stateNode === null) {
      var o = Ai, f = n.contextType;
      typeof f == "object" && f !== null && (o = fe(f)), o = new n(a, o), e.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, o.updater = Kr, e.stateNode = o, o._reactInternals = e, o = e.stateNode, o.props = a, o.state = e.memoizedState, o.refs = {}, Tr(e), f = n.contextType, o.context = typeof f == "object" && f !== null ? fe(f) : Ai, o.state = e.memoizedState, f = n.getDerivedStateFromProps, typeof f == "function" && (Zr(
        e,
        n,
        f,
        a
      ), o.state = e.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (f = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), f !== o.state && Kr.enqueueReplaceState(o, o.state, null), _l(e, a, o, s), Nl(), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308), a = !0;
    } else if (t === null) {
      o = e.stateNode;
      var g = e.memoizedProps, S = Fa(n, g);
      o.props = S;
      var C = o.context, R = n.contextType;
      f = Ai, typeof R == "object" && R !== null && (f = fe(R));
      var U = n.getDerivedStateFromProps;
      R = typeof U == "function" || typeof o.getSnapshotBeforeUpdate == "function", g = e.pendingProps !== g, R || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (g || C !== f) && Jm(
        e,
        o,
        a,
        f
      ), la = !1;
      var A = e.memoizedState;
      o.state = A, _l(e, a, o, s), Nl(), C = e.memoizedState, g || A !== C || la ? (typeof U == "function" && (Zr(
        e,
        n,
        U,
        a
      ), C = e.memoizedState), (S = la || km(
        e,
        n,
        S,
        a,
        A,
        C,
        f
      )) ? (R || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = a, e.memoizedState = C), o.props = a, o.state = C, o.context = f, a = S) : (typeof o.componentDidMount == "function" && (e.flags |= 4194308), a = !1);
    } else {
      o = e.stateNode, Er(t, e), f = e.memoizedProps, R = Fa(n, f), o.props = R, U = e.pendingProps, A = o.context, C = n.contextType, S = Ai, typeof C == "object" && C !== null && (S = fe(C)), g = n.getDerivedStateFromProps, (C = typeof g == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (f !== U || A !== S) && Jm(
        e,
        o,
        a,
        S
      ), la = !1, A = e.memoizedState, o.state = A, _l(e, a, o, s), Nl();
      var z = e.memoizedState;
      f !== U || A !== z || la || t !== null && t.dependencies !== null && Is(t.dependencies) ? (typeof g == "function" && (Zr(
        e,
        n,
        g,
        a
      ), z = e.memoizedState), (R = la || km(
        e,
        n,
        R,
        a,
        A,
        z,
        S
      ) || t !== null && t.dependencies !== null && Is(t.dependencies)) ? (C || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(a, z, S), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(
        a,
        z,
        S
      )), typeof o.componentDidUpdate == "function" && (e.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || f === t.memoizedProps && A === t.memoizedState || (e.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || f === t.memoizedProps && A === t.memoizedState || (e.flags |= 1024), e.memoizedProps = a, e.memoizedState = z), o.props = a, o.state = z, o.context = S, a = R) : (typeof o.componentDidUpdate != "function" || f === t.memoizedProps && A === t.memoizedState || (e.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || f === t.memoizedProps && A === t.memoizedState || (e.flags |= 1024), a = !1);
    }
    return o = a, Vi(t, e), a = (e.flags & 128) !== 0, o || a ? (o = e.stateNode, n = a && typeof n.getDerivedStateFromError != "function" ? null : o.render(), e.flags |= 1, t !== null && a ? (e.child = ka(
      e,
      t.child,
      null,
      s
    ), e.child = ka(
      e,
      null,
      n,
      s
    )) : ne(t, e, n, s), e.memoizedState = o.state, t = e.child) : t = qn(
      t,
      e,
      s
    ), t;
  }
  function rg(t, e, n, a) {
    return Ha(), e.flags |= 256, ne(t, e, n, a), e.child;
  }
  var Pr = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Ir(t) {
    return { baseLanes: t, cachePool: Wh() };
  }
  function Wr(t, e, n) {
    return t = t !== null ? t.childLanes & ~n : 0, e && (t |= Xe), t;
  }
  function cg(t, e, n) {
    var a = e.pendingProps, s = !1, o = (e.flags & 128) !== 0, f;
    if ((f = o) || (f = t !== null && t.memoizedState === null ? !1 : (he.current & 2) !== 0), f && (s = !0, e.flags &= -129), f = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
      if (yt) {
        if (s ? ra(e) : ca(), (t = Yt) ? (t = Np(
          t,
          Ie
        ), t = t !== null && t.data !== "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: ta !== null ? { id: pn, overflow: yn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = Xh(t), n.return = e, e.child = n, se = e, Yt = null)) : t = null, t === null) throw na(e);
        return Ic(t) ? e.lanes = 32 : e.lanes = 536870912, null;
      }
      return o = a.children, a = a.fallback, s ? (ca(), s = e.mode, o = vo(
        { mode: "hidden", children: o },
        s
      ), a = La(
        a,
        s,
        n,
        null
      ), o.return = e, a.return = e, o.sibling = a, e.child = o, a = e.child, a.memoizedState = Ir(n), a.childLanes = Wr(
        t,
        f,
        n
      ), e.memoizedState = Pr, Ll(null, a)) : (ra(e), $r(e, o));
    }
    var g = t.memoizedState;
    if (g !== null) {
      var S = g.dehydrated;
      if (S !== null)
        return gS(
          t,
          e,
          o,
          f,
          a,
          S,
          g,
          n
        );
    }
    return s ? (ca(), s = a.fallback, o = e.mode, g = t.child, S = g.sibling, a = Bn(g, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = g.subtreeFlags & 1206910976, S !== null ? s = Bn(S, s) : (s = La(
      s,
      o,
      n,
      null
    ), s.flags |= 2), s.return = e, a.return = e, a.sibling = s, e.child = a, Ll(null, a), a = e.child, s = t.child.memoizedState, s === null ? s = Ir(n) : (o = s.cachePool, o !== null ? (g = It._currentValue, o = o.parent !== g ? { parent: g, pool: g } : o) : o = Wh(), s = {
      baseLanes: s.baseLanes | n,
      cachePool: o
    }), a.memoizedState = s, a.childLanes = Wr(
      t,
      f,
      n
    ), e.memoizedState = Pr, Ll(t.child, a)) : (ra(e), n = t.child, t = n.sibling, n = Bn(n, {
      mode: "visible",
      children: a.children
    }), n.return = e, n.sibling = null, t !== null && (f = e.deletions, f === null ? (e.deletions = [t], e.flags |= 16) : f.push(t)), e.child = n, e.memoizedState = null, n);
  }
  function $r(t, e) {
    return e = vo(
      { mode: "visible", children: e },
      t.mode
    ), e.return = t, t.child = e;
  }
  function vo(t, e) {
    return t = De(22, t, null, e), t.lanes = 0, t;
  }
  function bo(t, e, n) {
    return ka(e, t.child, null, n), t = $r(
      e,
      e.pendingProps.children
    ), t.flags |= 2, e.memoizedState = null, t;
  }
  function gS(t, e, n, a, s, o, f, g) {
    if (n)
      return e.flags & 256 ? (ra(e), e.flags &= -257, bo(
        t,
        e,
        g
      )) : e.memoizedState !== null ? (ca(), e.child = t.child, e.flags |= 128, null) : (ca(), o = s.fallback, f = e.mode, s = vo(
        { mode: "visible", children: s.children },
        f
      ), o = La(
        o,
        f,
        g,
        null
      ), o.flags |= 2, s.return = e, o.return = e, s.sibling = o, e.child = s, ka(e, t.child, null, g), s = e.child, s.memoizedState = Ir(g), s.childLanes = Wr(
        t,
        a,
        g
      ), e.memoizedState = Pr, Ll(null, s));
    if (ra(e), Ic(o)) {
      if (a = o.nextSibling && o.nextSibling.dataset, a) var S = a.dgst;
      return a = S, a !== "" && (s = Error(u(419)), s.stack = "", s.digest = a, Cl({ value: s, source: null, stack: null })), bo(
        t,
        e,
        g
      );
    }
    if ($t || Ya(t, e, g, !1), a = (g & t.childLanes) !== 0, $t || a) {
      if (ua.current !== null)
        return bo(
          t,
          e,
          g
        );
      if (a = jt, a !== null && (s = Kd(
        a,
        g
      ), s !== 0 && s !== f.retryLane))
        throw f.retryLane = s, ja(t, s), we(a, t, s), Jr;
      return Pc(o) || jo(), bo(
        t,
        e,
        g
      );
    }
    return Pc(o) ? (e.flags |= 192, e.child = t.child, null) : (t = f.treeContext, Yt = $e(o.nextSibling), se = e, yt = !0, ea = null, Ie = !1, t !== null && Kh(e, t), e = $r(
      e,
      s.children
    ), e.flags |= 134221824, e);
  }
  function fg(t, e, n) {
    t.lanes |= e;
    var a = t.alternate;
    a !== null && (a.lanes |= e), Ps(t.return, e, n);
  }
  function dg(t) {
    for (var e = null; t !== null; ) {
      var n = t.alternate;
      n !== null && lo(n) === null && (e = t), t = t.sibling;
    }
    return e;
  }
  function So(t, e, n, a, s, o) {
    var f = t.memoizedState;
    f === null ? t.memoizedState = {
      isBackwards: e,
      rendering: null,
      renderingStartTime: 0,
      last: a,
      tail: n,
      tailMode: s,
      treeForkCount: o
    } : (f.isBackwards = e, f.rendering = null, f.renderingStartTime = 0, f.last = a, f.tail = n, f.tailMode = s, f.treeForkCount = o);
  }
  function tc(t) {
    var e = t.child;
    for (t.child = null; e !== null; ) {
      var n = e.sibling;
      e.sibling = t.child, t.child = e, e = n;
    }
  }
  function ec(t, e, n) {
    var a = e.pendingProps, s = a.revealOrder, o = a.tail;
    a = a.children;
    var f = he.current;
    if (e.flags & 128)
      return Vl(e, f), null;
    var g = (f & 2) !== 0;
    if (g ? (f = f & 1 | 2, e.flags |= 128) : f &= 1, Vl(e, f), s === "backwards" && t !== null ? (tc(t), ne(t, e, a, n), tc(t)) : ne(t, e, a, n), a = yt ? Ml : 0, !g && t !== null && (t.flags & 128) !== 0)
      t: for (t = e.child; t !== null; ) {
        if (t.tag === 13)
          t.memoizedState !== null && fg(t, n, e);
        else if (t.tag === 19)
          fg(t, n, e);
        else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e) break t;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            break t;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    switch (s) {
      case "backwards":
        n = dg(e.child), n === null ? (s = e.child, e.child = null) : (s = n.sibling, n.sibling = null, tc(e)), So(
          e,
          !0,
          s,
          null,
          o,
          a
        );
        break;
      case "unstable_legacy-backwards":
        for (n = null, s = e.child, e.child = null; s !== null; ) {
          if (t = s.alternate, t !== null && lo(t) === null) {
            e.child = s;
            break;
          }
          t = s.sibling, s.sibling = n, n = s, s = t;
        }
        So(
          e,
          !0,
          n,
          null,
          o,
          a
        );
        break;
      case "together":
        So(
          e,
          !1,
          null,
          null,
          void 0,
          a
        );
        break;
      case "independent":
        e.memoizedState = null;
        break;
      default:
        n = dg(e.child), n === null ? (s = e.child, e.child = null) : (s = n.sibling, n.sibling = null), So(
          e,
          !1,
          s,
          n,
          o,
          a
        );
    }
    return e.child;
  }
  function hg(t, e, n) {
    var a = e.pendingProps;
    return aa(e, e.type, a.value), ne(t, e, a.children, n), e.child;
  }
  function qn(t, e, n) {
    if (t !== null && (e.dependencies = t.dependencies), ma |= e.lanes, (n & e.childLanes) === 0)
      if (t !== null) {
        if (Ya(
          t,
          e,
          n,
          !1
        ), (n & e.childLanes) === 0)
          return null;
      } else return null;
    if (t !== null && e.child !== t.child)
      throw Error(u(153));
    if (e.child !== null) {
      for (t = e.child, n = Bn(t, t.pendingProps), e.child = n, n.return = e; t.sibling !== null; )
        t = t.sibling, n = n.sibling = Bn(t, t.pendingProps), n.return = e;
      n.sibling = null;
    }
    return e.child;
  }
  function nc(t, e) {
    return (t.lanes & e) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && Is(t)));
  }
  function pS(t, e, n) {
    switch (e.tag) {
      case 3:
        As(e, e.stateNode.containerInfo), aa(e, It, t.memoizedState.cache), Ha();
        break;
      case 27:
      case 5:
        Ou(e);
        break;
      case 4:
        As(e, e.stateNode.containerInfo);
        break;
      case 10:
        aa(
          e,
          e.type,
          e.memoizedProps.value
        );
        break;
      case 31:
        if (e.memoizedState !== null)
          return e.flags |= 128, Dr(e), null;
        break;
      case 13:
        var a = e.memoizedState;
        if (a !== null) {
          if (a.dehydrated !== null)
            return ra(e), e.flags |= 128, null;
          a = Ya(
            t,
            e,
            n,
            !1
          );
          var s = e.child.childLanes;
          return a || (n & s) !== 0 ? cg(t, e, n) : (ra(e), t = qn(
            t,
            e,
            n
          ), t !== null ? t.sibling : null);
        }
        ra(e);
        break;
      case 19:
        if (e.flags & 128)
          return ec(
            t,
            e,
            n
          );
        if (s = (t.flags & 128) !== 0, a = (n & e.childLanes) !== 0, a || (Ya(
          t,
          e,
          n,
          !1
        ), a = (n & e.childLanes) !== 0), s) {
          if (a)
            return ec(
              t,
              e,
              n
            );
          e.flags |= 128;
        }
        if (s = e.memoizedState, s !== null && (s.rendering = null, s.tail = null, s.lastEffect = null), Vl(e, he.current), a) break;
        return null;
      case 22:
        return e.lanes = 0, ig(
          t,
          e,
          n,
          e.pendingProps
        );
      case 24:
        aa(e, It, t.memoizedState.cache);
    }
    return qn(t, e, n);
  }
  function mg(t, e, n) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps)
        $t = !0;
      else {
        if (!nc(t, n) && (e.flags & 128) === 0)
          return $t = !1, pS(
            t,
            e,
            n
          );
        $t = (t.flags & 131072) !== 0;
      }
    else
      $t = !1, yt && (e.flags & 1048576) !== 0 && Zh(e, Ml, e.index);
    switch (e.lanes = 0, e.tag) {
      case 16:
        t: {
          var a = e.pendingProps;
          if (t = Za(e.elementType), e.type = t, typeof t == "function")
            rr(t) ? (a = Fa(t, a), e.tag = 1, e = ug(
              null,
              e,
              t,
              a,
              n
            )) : (e.tag = 0, e = Fr(
              null,
              e,
              t,
              a,
              n
            ));
          else {
            if (t != null) {
              var s = t.$$typeof;
              if (s === Y) {
                e.tag = 11, e = eg(
                  null,
                  e,
                  t,
                  a,
                  n
                );
                break t;
              } else if (s === q) {
                e.tag = 14, e = ng(
                  null,
                  e,
                  t,
                  a,
                  n
                );
                break t;
              } else if (s === St) {
                e.tag = 10, e.type = t, e = hg(
                  null,
                  e,
                  n
                );
                break t;
              }
            }
            throw e = rt(t) || t, Error(u(306, e, ""));
          }
        }
        return e;
      case 0:
        return Fr(
          t,
          e,
          e.type,
          e.pendingProps,
          n
        );
      case 1:
        return a = e.type, s = Fa(
          a,
          e.pendingProps
        ), ug(
          t,
          e,
          a,
          s,
          n
        );
      case 3:
        t: {
          if (As(
            e,
            e.stateNode.containerInfo
          ), t === null) throw Error(u(387));
          a = e.pendingProps;
          var o = e.memoizedState;
          s = o.element, Er(t, e), _l(e, a, null, n);
          var f = e.memoizedState;
          if (a = f.cache, aa(e, It, a), a !== o.cache && pr(
            e,
            [It],
            n,
            !0
          ), Nl(), a = f.element, o.isDehydrated)
            if (o = {
              element: a,
              isDehydrated: !1,
              cache: f.cache
            }, e.updateQueue.baseState = o, e.memoizedState = o, e.flags & 256) {
              e = rg(
                t,
                e,
                a,
                n
              );
              break t;
            } else if (a !== s) {
              s = Je(
                Error(u(424)),
                e
              ), Cl(s), e = rg(
                t,
                e,
                a,
                n
              );
              break t;
            } else {
              switch (t = e.stateNode.containerInfo, t.nodeType) {
                case 9:
                  t = t.body;
                  break;
                default:
                  t = t.nodeName === "HTML" ? t.ownerDocument.body : t;
              }
              for (Yt = $e(t.firstChild), se = e, yt = !0, ea = null, Ie = !0, n = im(
                e,
                null,
                a,
                n
              ), e.child = n; n; )
                n.flags = n.flags & -3 | 134221824, n = n.sibling;
            }
          else {
            if (Ha(), a === s) {
              e = qn(
                t,
                e,
                n
              );
              break t;
            }
            ne(t, e, a, n);
          }
          e = e.child;
        }
        return e;
      case 26:
        return Vi(t, e), t === null ? (n = Hp(
          e.type,
          null,
          e.pendingProps,
          null
        )) ? e.memoizedState = n : yt || (e.stateNode = vp(
          e.type,
          e.pendingProps,
          Fn.current,
          e
        )) : e.memoizedState = Hp(
          e.type,
          t.memoizedProps,
          e.pendingProps,
          t.memoizedState
        ), null;
      case 27:
        return Ou(e), t === null && yt && (a = e.stateNode = Up(
          e.type,
          e.pendingProps,
          Fn.current
        ), se = e, Ie = !0, s = Yt, va(e.type) ? (Wc = s, Yt = $e(a.firstChild)) : Yt = s), ne(
          t,
          e,
          e.pendingProps.children,
          n
        ), Vi(t, e), t === null && (e.flags |= 4194304), e.child;
      case 5:
        return t === null && yt && ((s = a = Yt) && (a = cT(
          a,
          e.type,
          e.pendingProps,
          Ie
        ), a !== null ? (e.stateNode = a, se = e, Yt = $e(a.firstChild), Ie = !1, s = !0) : s = !1), s || na(e)), Ou(e), s = e.type, o = e.pendingProps, f = t !== null ? t.memoizedProps : null, a = o.children, Xc(s, o) ? a = null : f !== null && Xc(s, f) && (e.flags |= 32), e.memoizedState !== null && (s = Rr(
          t,
          e,
          lS,
          null,
          null,
          n
        ), Wi._currentValue = s), Vi(t, e), ne(t, e, a, n), e.child;
      case 6:
        return t === null && yt && ((t = n = Yt) && (n = fT(
          n,
          e.pendingProps,
          Ie
        ), n !== null ? (e.stateNode = n, se = e, Yt = null, t = !0) : t = !1), t || na(e)), null;
      case 13:
        return cg(t, e, n);
      case 4:
        return As(
          e,
          e.stateNode.containerInfo
        ), a = e.pendingProps, t === null ? e.child = ka(
          e,
          null,
          a,
          n
        ) : ne(t, e, a, n), e.child;
      case 11:
        return eg(
          t,
          e,
          e.type,
          e.pendingProps,
          n
        );
      case 7:
        return a = e.pendingProps, Vi(t, e), ne(t, e, a, n), e.child;
      case 8:
        return ne(
          t,
          e,
          e.pendingProps.children,
          n
        ), e.child;
      case 12:
        return ne(
          t,
          e,
          e.pendingProps.children,
          n
        ), e.child;
      case 10:
        return hg(t, e, n);
      case 9:
        return s = e.type._context, a = e.pendingProps.children, qa(e), s = fe(s), a = a(s), e.flags |= 1, ne(t, e, a, n), e.child;
      case 14:
        return ng(
          t,
          e,
          e.type,
          e.pendingProps,
          n
        );
      case 15:
        return ag(
          t,
          e,
          e.type,
          e.pendingProps,
          n
        );
      case 19:
        return ec(t, e, n);
      case 31:
        return mS(t, e, n);
      case 22:
        return ig(
          t,
          e,
          n,
          e.pendingProps
        );
      case 24:
        return qa(e), a = fe(It), t === null ? (s = br(), s === null && (s = jt, o = yr(), s.pooledCache = o, o.refCount++, o !== null && (s.pooledCacheLanes |= n), s = o), e.memoizedState = { parent: a, cache: s }, Tr(e), aa(e, It, s)) : ((t.lanes & n) !== 0 && (Er(t, e), _l(e, null, null, n), Nl()), s = t.memoizedState, o = e.memoizedState, s.parent !== a ? (s = { parent: a, cache: a }, e.memoizedState = s, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = s), aa(e, It, a)) : (a = o.cache, aa(e, It, a), a !== s.cache && pr(
          e,
          [It],
          n,
          !0
        ))), ne(
          t,
          e,
          e.pendingProps.children,
          n
        ), e.child;
      case 30:
        return e.stateNode === null && (e.stateNode = {
          autoName: null,
          paired: null,
          clones: null,
          ref: null
        }), a = e.pendingProps, a.name != null && a.name !== "auto" ? e.flags |= t === null ? 18882560 : 18874368 : yt && Js(e), t !== null && t.memoizedProps.name !== a.name ? e.flags |= 4194816 : Vi(t, e), ne(t, e, a.children, n), e.child;
      case 29:
        throw e.pendingProps;
    }
    throw Error(u(156, e.tag));
  }
  function Xn(t) {
    t.flags |= 4;
  }
  function ac(t, e, n, a, s) {
    var o;
    if ((o = (t.mode & 32) !== 0) && (o = n === null ? Xp(e, a) : Xp(e, a) && (a.src !== n.src || a.srcSet !== n.srcSet)), o) {
      if (t.flags |= 16777216, (s & 335544128) === s)
        if (t.stateNode.complete) t.flags |= 8192;
        else if (Fg()) t.flags |= 8192;
        else
          throw Ka = eo, Sr;
    } else t.flags &= -16777217;
  }
  function gg(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (t.flags |= 16777216, !Qp(e))
      if (Fg()) t.flags |= 8192;
      else
        throw Ka = eo, Sr;
  }
  function To(t, e) {
    e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? Xd() : 536870912, t.lanes |= e, Hi |= e);
  }
  function Hl(t, e) {
    if (!yt)
      switch (t.tailMode) {
        case "visible":
          break;
        case "collapsed":
          for (var n = t.tail, a = null; n !== null; )
            n.alternate !== null && (a = n), n = n.sibling;
          a === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : a.sibling = null;
          break;
        default:
          for (e = t.tail, n = null; e !== null; )
            e.alternate !== null && (n = e), e = e.sibling;
          n === null ? t.tail = null : n.sibling = null;
      }
  }
  function qt(t) {
    var e = t.alternate !== null && t.alternate.child === t.child, n = 0, a = 0;
    if (e)
      for (var s = t.child; s !== null; )
        n |= s.lanes | s.childLanes, a |= s.subtreeFlags & 1206910976, a |= s.flags & 1206910976, s.return = t, s = s.sibling;
    else
      for (s = t.child; s !== null; )
        n |= s.lanes | s.childLanes, a |= s.subtreeFlags, a |= s.flags, s.return = t, s = s.sibling;
    return t.subtreeFlags |= a, t.childLanes = n, e;
  }
  function yS(t, e, n) {
    var a = e.pendingProps;
    switch (dr(e), e.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return qt(e), null;
      case 1:
        return qt(e), null;
      case 3:
        return n = e.stateNode, a = null, t !== null && (a = t.memoizedState.cache), e.memoizedState.cache !== a && (e.flags |= 2048), Hn(It), fi(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (t === null || t.child === null) && (Di(e) ? Xn(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024, mr())), qt(e), null;
      case 26:
        var s = e.type, o = e.memoizedState;
        return t === null ? (Xn(e), o !== null ? (qt(e), gg(e, o)) : (qt(e), ac(
          e,
          s,
          null,
          a,
          n
        ))) : o ? o !== t.memoizedState ? (Xn(e), qt(e), gg(e, o)) : (qt(e), e.flags &= -16777217) : (t = t.memoizedProps, t !== a && Xn(e), qt(e), ac(
          e,
          s,
          t,
          a,
          n
        )), null;
      case 27:
        if (Ms(e), n = Fn.current, s = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== a && Xn(e);
        else {
          if (!a) {
            if (e.stateNode === null)
              throw Error(u(166));
            return qt(e), e.subtreeFlags &= -33554433, null;
          }
          t = mn.current, Di(e) ? kh(e) : (t = Up(s, a, n), e.stateNode = t, Xn(e));
        }
        return qt(e), e.subtreeFlags &= -33554433, null;
      case 5:
        if (Ms(e), s = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== a && Xn(e);
        else {
          if (!a) {
            if (e.stateNode === null)
              throw Error(u(166));
            return qt(e), e.subtreeFlags &= -33554433, null;
          }
          if (o = mn.current, Di(e))
            kh(e);
          else {
            var f = Pl(
              Fn.current
            );
            switch (o) {
              case 1:
                o = f.createElementNS(
                  "http://www.w3.org/2000/svg",
                  s
                );
                break;
              case 2:
                o = f.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  s
                );
                break;
              default:
                switch (s) {
                  case "svg":
                    o = f.createElementNS(
                      "http://www.w3.org/2000/svg",
                      s
                    );
                    break;
                  case "math":
                    o = f.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      s
                    );
                    break;
                  case "script":
                    o = f.createElement("div"), o.innerHTML = "<script><\/script>", o = o.removeChild(
                      o.firstChild
                    );
                    break;
                  case "select":
                    o = typeof a.is == "string" ? f.createElement("select", {
                      is: a.is
                    }) : f.createElement("select"), a.multiple ? o.multiple = !0 : a.size && (o.size = a.size);
                    break;
                  default:
                    o = typeof a.is == "string" ? f.createElement(s, { is: a.is }) : f.createElement(s);
                }
            }
            o[ce] = e, o[Ce] = a;
            t: for (f = e.child; f !== null; ) {
              if (f.tag === 5 || f.tag === 6)
                o.appendChild(f.stateNode);
              else if (f.tag !== 4 && f.tag !== 27 && f.child !== null) {
                f.child.return = f, f = f.child;
                continue;
              }
              if (f === e) break t;
              for (; f.sibling === null; ) {
                if (f.return === null || f.return === e)
                  break t;
                f = f.return;
              }
              f.sibling.return = f.return, f = f.sibling;
            }
            e.stateNode = o;
            t: switch (ge(o, s, a), s) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                a = !!a.autoFocus;
                break t;
              case "img":
                a = !0;
                break t;
              default:
                a = !1;
            }
            a && Xn(e);
          }
        }
        return qt(e), e.subtreeFlags &= -33554433, ac(
          e,
          e.type,
          t === null ? null : t.memoizedProps,
          e.pendingProps,
          n
        ), null;
      case 6:
        if (t && e.stateNode != null)
          t.memoizedProps !== a && Xn(e);
        else {
          if (typeof a != "string" && e.stateNode === null)
            throw Error(u(166));
          if (t = Fn.current, Di(e)) {
            if (t = e.stateNode, n = e.memoizedProps, a = null, s = se, s !== null)
              switch (s.tag) {
                case 27:
                case 5:
                  a = s.memoizedProps;
              }
            t[ce] = e, t = !!(t.nodeValue === n || a !== null && a.suppressHydrationWarning === !0 || mp(t.nodeValue, n)), t || na(e, !0);
          } else
            t = Pl(t).createTextNode(
              a
            ), t[ce] = e, e.stateNode = t;
        }
        return qt(e), null;
      case 31:
        if (n = e.memoizedState, t === null || t.memoizedState !== null) {
          if (a = Di(e), n !== null) {
            if (t === null) {
              if (!a) throw Error(u(318));
              if (t = e.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(u(557));
              t[ce] = e;
            } else
              Ha(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            qt(e), t = !1;
          } else
            n = mr(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = n), t = !0;
          if (!t)
            return e.flags & 256 ? (Ge(e), e) : (Ge(e), null);
          if ((e.flags & 128) !== 0)
            throw Error(u(558));
        }
        return qt(e), null;
      case 13:
        if (a = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (s = Di(e), a !== null && a.dehydrated !== null) {
            if (t === null) {
              if (!s) throw Error(u(318));
              if (s = e.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(u(317));
              s[ce] = e;
            } else
              Ha(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            qt(e), s = !1;
          } else
            s = mr(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = s), s = !0;
          if (!s)
            return e.flags & 256 ? (Ge(e), e) : (Ge(e), null);
        }
        return Ge(e), (e.flags & 128) !== 0 ? (e.lanes = n, e) : (n = a !== null, t = t !== null && t.memoizedState !== null, n && (a = e.child, s = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (s = a.alternate.memoizedState.cachePool.pool), o = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (o = a.memoizedState.cachePool.pool), o !== s && (a.flags |= 2048)), n !== t && n && (e.child.flags |= 8192), To(e, e.updateQueue), qt(e), null);
      case 4:
        return fi(), t === null && Lc(e.stateNode.containerInfo), e.flags |= 67108864, qt(e), null;
      case 10:
        return Hn(e.type), qt(e), null;
      case 19:
        if (zr(e), a = e.memoizedState, a === null) return qt(e), null;
        if (s = (e.flags & 128) !== 0, o = a.rendering, o === null)
          if (s) Hl(a, !1);
          else {
            if (Jt !== 0 || t !== null && (t.flags & 128) !== 0)
              for (t = e.child; t !== null; ) {
                if (o = lo(t), o !== null) {
                  for (e.flags |= 128, Hl(a, !1), t = o.updateQueue, e.updateQueue = t, To(e, t), e.subtreeFlags = 0, t = n, n = e.child; n !== null; )
                    qh(n, t), n = n.sibling;
                  return Vl(
                    e,
                    he.current & 1 | 2
                  ), yt && jn(e, a.treeForkCount), e.child;
                }
                t = t.sibling;
              }
            a.tail !== null && Ue() > _o && (e.flags |= 128, s = !0, Hl(a, !1), e.lanes = 4194304);
          }
        else {
          if (!s)
            if (t = lo(o), t !== null) {
              if (e.flags |= 128, s = !0, t = t.updateQueue, e.updateQueue = t, To(e, t), Hl(a, !0), a.tail === null && a.tailMode !== "collapsed" && a.tailMode !== "visible" && !o.alternate && !yt)
                return qt(e), null;
            } else
              2 * Ue() - a.renderingStartTime > _o && n !== 536870912 && (e.flags |= 128, s = !0, Hl(a, !1), e.lanes = 4194304);
          a.isBackwards ? (o.sibling = e.child, e.child = o) : (t = a.last, t !== null ? t.sibling = o : e.child = o, a.last = o);
        }
        if (a.tail !== null) {
          t = a.tail;
          t: {
            for (n = t; n !== null; ) {
              if (n.alternate !== null) {
                n = !1;
                break t;
              }
              n = n.sibling;
            }
            n = !0;
          }
          return a.rendering = t, a.tail = t.sibling, a.renderingStartTime = Ue(), t.sibling = null, o = he.current, o = s ? o & 1 | 2 : o & 1, a.tailMode === "visible" || a.tailMode === "collapsed" || !n || yt ? Vl(e, o) : (n = o, Gt(de, e), Gt(he, n), be === null && (be = e)), yt && jn(e, a.treeForkCount), t;
        }
        return qt(e), null;
      case 22:
      case 23:
        return Ge(e), Cr(), a = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== a && (e.flags |= 8192) : a && (e.flags |= 8192), a ? (n & 536870912) !== 0 && (e.flags & 128) === 0 && (qt(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : qt(e), n = e.updateQueue, n !== null && To(e, n.retryQueue), n = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), a = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), a !== n && (e.flags |= 2048), t !== null && re(Qa), null;
      case 24:
        return n = null, t !== null && (n = t.memoizedState.cache), e.memoizedState.cache !== n && (e.flags |= 2048), Hn(It), qt(e), null;
      case 25:
        return null;
      case 30:
        return e.flags |= 33554432, qt(e), null;
    }
    throw Error(u(156, e.tag));
  }
  function vS(t, e) {
    switch (dr(e), e.tag) {
      case 1:
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 3:
        return Hn(It), fi(), t = e.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128, e) : null;
      case 26:
      case 27:
      case 5:
        return Ms(e), null;
      case 31:
        if (e.memoizedState !== null) {
          if (Ge(e), e.alternate === null)
            throw Error(u(340));
          Ha();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 13:
        if (Ge(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
          if (e.alternate === null)
            throw Error(u(340));
          Ha();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 19:
        return zr(e), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, t = e.memoizedState, t !== null && (t.rendering = null, t.tail = null), e.flags |= 4, e) : null;
      case 4:
        return fi(), null;
      case 10:
        return Hn(e.type), null;
      case 22:
      case 23:
        return Ge(e), Cr(), t !== null && re(Qa), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 24:
        return Hn(It), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function pg(t, e) {
    switch (dr(e), e.tag) {
      case 3:
        Hn(It), fi();
        break;
      case 26:
      case 27:
      case 5:
        Ms(e);
        break;
      case 4:
        fi();
        break;
      case 31:
        e.memoizedState !== null && Ge(e);
        break;
      case 13:
        Ge(e);
        break;
      case 19:
        zr(e);
        break;
      case 10:
        Hn(e.type);
        break;
      case 22:
      case 23:
        Ge(e), Cr(), t !== null && re(Qa);
        break;
      case 24:
        Hn(It);
    }
  }
  function Gl(t, e) {
    try {
      var n = e.updateQueue, a = n !== null ? n.lastEffect : null;
      if (a !== null) {
        var s = a.next;
        n = s;
        do {
          if ((n.tag & t) === t) {
            a = void 0;
            var o = n.create, f = n.inst;
            a = o(), f.destroy = a;
          }
          n = n.next;
        } while (n !== s);
      }
    } catch (g) {
      Nt(e, e.return, g);
    }
  }
  function fa(t, e, n) {
    try {
      var a = e.updateQueue, s = a !== null ? a.lastEffect : null;
      if (s !== null) {
        var o = s.next;
        a = o;
        do {
          if ((a.tag & t) === t) {
            var f = a.inst, g = f.destroy;
            if (g !== void 0) {
              f.destroy = void 0, s = e;
              var S = n, C = g;
              try {
                C();
              } catch (R) {
                Nt(
                  s,
                  S,
                  R
                );
              }
            }
          }
          a = a.next;
        } while (a !== o);
      }
    } catch (R) {
      Nt(e, e.return, R);
    }
  }
  function yg(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var n = t.stateNode;
      try {
        sm(e, n);
      } catch (a) {
        Nt(t, t.return, a);
      }
    }
  }
  function vg(t, e, n) {
    n.props = Fa(
      t.type,
      t.memoizedProps
    ), n.state = t.memoizedState;
    try {
      n.componentWillUnmount();
    } catch (a) {
      Nt(t, e, a);
    }
  }
  function vn(t, e) {
    try {
      var n = t.ref;
      if (n !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var a = t.stateNode;
            break;
          case 30:
            var s = t.stateNode, o = Vn(t.memoizedProps, s);
            (s.ref === null || s.ref.name !== o) && (s.ref = Mp(o)), a = s.ref;
            break;
          case 7:
            if (t.stateNode === null) {
              var f = new Ze(t);
              p(
                t.child,
                !1,
                uT,
                f,
                void 0,
                void 0
              ), t.stateNode = f;
            }
            a = t.stateNode;
            break;
          default:
            a = t.stateNode;
        }
        typeof n == "function" ? t.refCleanup = n(a) : n.current = a;
      }
    } catch (g) {
      Nt(t, e, g);
    }
  }
  function me(t, e) {
    var n = t.ref, a = t.refCleanup;
    if (n !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (s) {
          Nt(t, e, s);
        } finally {
          t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (s) {
          Nt(t, e, s);
        }
      else n.current = null;
  }
  function Eo(t, e) {
    if ((t.tag === 5 || t.tag === 27 || t.tag === 6) && t.alternate === null && e !== null)
      for (var n = 0; n < e.length; n++)
        wp(
          t.stateNode,
          e[n]
        );
  }
  function bg(t) {
    for (var e = t.return; e !== null && (lc(e) && wp(t.stateNode, e.stateNode), !ic(e)); )
      e = e.return;
  }
  function Yl(t) {
    for (var e = t.return; e !== null && (lc(e) && rT(t.stateNode, e.stateNode), !ic(e)); )
      e = e.return;
  }
  function ic(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 27;
  }
  function lc(t) {
    return t && t.tag === 7 && t.stateNode !== null;
  }
  function sc(t) {
    var e = t.type, n = t.memoizedProps, a = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && a.focus();
          break t;
        case "img":
          n.src ? a.src = n.src : n.srcSet && (a.srcset = n.srcSet);
      }
    } catch (s) {
      Nt(t, t.return, s);
    }
  }
  function oc(t, e, n) {
    try {
      var a = t.stateNode;
      QS(a, t.type, n, e), a[Ce] = e;
    } catch (s) {
      Nt(t, t.return, s);
    }
  }
  function Sg(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && va(t.type) || t.tag === 4;
  }
  function uc(t) {
    t: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || Sg(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.tag === 27 && va(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function rc(t, e, n, a) {
    var s = t.tag;
    if (s === 5 || s === 6)
      s = t.stateNode, e ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(s, e) : (e = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, e.appendChild(s), n = n._reactRootContainer, n != null || e.onclick !== null || (e.onclick = gn)), Eo(t, a), zt = !0;
    else if (s !== 4 && (s === 27 && (Eo(t, a), a = null, va(t.type) && (n = t.stateNode, e = null)), t = t.child, t !== null))
      for (rc(
        t,
        e,
        n,
        a
      ), t = t.sibling; t !== null; )
        rc(
          t,
          e,
          n,
          a
        ), t = t.sibling;
  }
  function xo(t, e, n, a) {
    var s = t.tag;
    if (s === 5 || s === 6)
      s = t.stateNode, e ? n.insertBefore(s, e) : n.appendChild(s), Eo(t, a), zt = !0;
    else if (s !== 4 && (s === 27 && (Eo(t, a), a = null, va(t.type) && (n = t.stateNode)), t = t.child, t !== null))
      for (xo(
        t,
        e,
        n,
        a
      ), t = t.sibling; t !== null; )
        xo(
          t,
          e,
          n,
          a
        ), t = t.sibling;
  }
  function Tg(t) {
    var e = t.stateNode, n = t.memoizedProps;
    try {
      for (var a = t.type, s = e.attributes; s.length; )
        e.removeAttributeNode(s[0]);
      ge(e, a, n), e[ce] = t, e[Ce] = n;
    } catch (o) {
      Nt(t, t.return, o);
    }
  }
  var Ao = !1, Ye = null;
  function Eg(t) {
    (t.tag === 30 || (t.subtreeFlags & 33554432) !== 0) && (Ao = !0);
  }
  var bn = null;
  function xg() {
    var t = bn;
    return bn = null, t;
  }
  var ze = 0;
  function Ui(t, e, n, a, s) {
    return ze = 0, Ag(
      t.child,
      e,
      n,
      a,
      s
    );
  }
  function Ag(t, e, n, a, s) {
    for (var o = !1; t !== null; ) {
      if (t.tag === 5) {
        var f = t.stateNode;
        if (a !== null) {
          var g = Kc(f);
          a.push(g), g.view && (o = !0);
        } else
          o || Kc(f).view && (o = !0);
        Ao = !0, xp(
          f,
          ze === 0 ? e : e + "_" + ze,
          n
        ), ze++;
      } else (t.tag !== 22 || t.memoizedState === null) && (t.tag === 30 && s || Ag(
        t.child,
        e,
        n,
        a,
        s
      ) && (o = !0));
      t = t.sibling;
    }
    return o;
  }
  function Sn(t, e) {
    for (; t !== null; )
      t.tag === 5 ? Ap(t.stateNode, t.memoizedProps) : (t.tag !== 22 || t.memoizedState === null) && (t.tag === 30 && e || Sn(
        t.child,
        e
      )), t = t.sibling;
  }
  function Mo(t) {
    if ((t.subtreeFlags & 18874368) !== 0)
      for (t = t.child; t !== null; ) {
        if ((t.tag !== 22 || t.memoizedState === null) && (Mo(t), t.tag === 30 && (t.flags & 18874368) !== 0 && t.stateNode.paired)) {
          var e = t.memoizedProps;
          if (e.name == null || e.name === "auto")
            throw Error(u(544));
          var n = e.name;
          e = Un(e.default, e.share), e !== "none" && (Ui(
            t,
            n,
            e,
            null,
            !1
          ) || Sn(t.child, !1));
        }
        t = t.sibling;
      }
  }
  function cc(t, e) {
    if (t.tag === 30) {
      var n = t.stateNode, a = t.memoizedProps, s = Vn(a, n), o = Un(
        a.default,
        n.paired ? a.share : a.enter
      );
      o !== "none" ? Ui(t, s, o, null, !1) ? (Mo(t), n.paired || e || Xi(t, a.onEnter)) : Sn(t.child, !1) : Mo(t);
    } else if ((t.subtreeFlags & 33554432) !== 0)
      for (t = t.child; t !== null; )
        cc(t, e), t = t.sibling;
    else Mo(t);
  }
  function fc(t) {
    if (Ye !== null && Ye.size !== 0) {
      var e = Ye;
      if ((t.subtreeFlags & 18874368) !== 0)
        for (t = t.child; t !== null; ) {
          if (t.tag !== 22 || t.memoizedState === null) {
            if (t.tag === 30 && (t.flags & 18874368) !== 0) {
              var n = t.memoizedProps, a = n.name;
              if (a != null && a !== "auto") {
                var s = e.get(a);
                if (s !== void 0) {
                  var o = Un(
                    n.default,
                    n.share
                  );
                  if (o !== "none" && (Ui(
                    t,
                    a,
                    o,
                    null,
                    !1
                  ) ? (o = t.stateNode, s.paired = o, o.paired = s, Xi(t, n.onShare)) : Sn(t.child, !1)), e.delete(a), e.size === 0) break;
                }
              }
            }
            fc(t);
          }
          t = t.sibling;
        }
    }
  }
  function dc(t) {
    if (t.tag === 30) {
      var e = t.memoizedProps, n = Vn(e, t.stateNode), a = Ye !== null ? Ye.get(n) : void 0, s = Un(
        e.default,
        a !== void 0 ? e.share : e.exit
      );
      s !== "none" && (Ui(t, n, s, null, !1) ? a !== void 0 ? (s = t.stateNode, a.paired = s, s.paired = a, Ye.delete(n), Xi(t, e.onShare)) : Xi(t, e.onExit) : Sn(t.child, !1)), Ye !== null && fc(t);
    } else if ((t.subtreeFlags & 33554432) !== 0)
      for (t = t.child; t !== null; )
        dc(t), t = t.sibling;
    else
      Ye !== null && fc(t);
  }
  function Mg(t) {
    for (t = t.child; t !== null; ) {
      if (t.tag === 30) {
        var e = t.memoizedProps, n = Vn(e, t.stateNode);
        e = Un(e.default, e.update), t.flags &= -5, e !== "none" && Ui(
          t,
          n,
          e,
          t.memoizedState = [],
          !1
        );
      } else
        (t.subtreeFlags & 33554432) !== 0 && Mg(t);
      t = t.sibling;
    }
  }
  function hc(t) {
    if ((t.subtreeFlags & 18874368) !== 0)
      for (t = t.child; t !== null; ) {
        if (t.tag !== 22 || t.memoizedState === null) {
          if (t.tag === 30 && (t.flags & 18874368) !== 0) {
            var e = t.stateNode;
            e.paired !== null && (e.paired = null, Sn(t.child, !1));
          }
          hc(t);
        }
        t = t.sibling;
      }
  }
  function Co(t) {
    if (t.tag === 30)
      t.stateNode.paired = null, Sn(t.child, !1), hc(t);
    else if ((t.subtreeFlags & 33554432) !== 0)
      for (t = t.child; t !== null; )
        Co(t), t = t.sibling;
    else hc(t);
  }
  function Cg(t) {
    for (t = t.child; t !== null; )
      t.tag === 30 ? Sn(t.child, !1) : (t.subtreeFlags & 33554432) !== 0 && Cg(t), t = t.sibling;
  }
  function mc(t, e, n, a, s, o, f) {
    for (var g = !1; e !== null; ) {
      if (e.tag === 5) {
        var S = e.stateNode;
        if (o !== null && ze < o.length) {
          var C = o[ze], R = Kc(S);
          (C.view || R.view) && (g = !0);
          var U;
          if (U = (t.flags & 4) === 0)
            if (R.clip) U = !0;
            else {
              U = C.rect;
              var A = R.rect;
              U = U.y !== A.y || U.x !== A.x || U.height !== A.height || U.width !== A.width;
            }
          U && (t.flags |= 4), R.abs ? R = !C.abs : (C = C.rect, R = R.rect, R = C.height !== R.height || C.width !== R.width), R && (t.flags |= 32);
        } else t.flags |= 32;
        (t.flags & 4) !== 0 && xp(
          S,
          ze === 0 ? n : n + "_" + ze,
          s
        ), g && (t.flags & 4) !== 0 || (bn === null && (bn = []), bn.push(
          S,
          ze === 0 ? a : a + "_" + ze,
          e.memoizedProps
        )), ze++;
      } else (e.tag !== 22 || e.memoizedState === null) && (e.tag === 30 && f ? t.flags |= e.flags & 32 : mc(
        t,
        e.child,
        n,
        a,
        s,
        o,
        f
      ) && (g = !0));
      e = e.sibling;
    }
    return g;
  }
  function Dg(t, e) {
    for (t = t.child; t !== null; ) {
      if (t.tag === 30) {
        var n = t.memoizedProps, a = t.stateNode, s = Vn(n, a), o = Un(n.default, n.update), f;
        f = t.memoizedState, t.memoizedState = null, a = t;
        var g = t.child;
        ze = 0, s = mc(
          a,
          g,
          s,
          s,
          o,
          f,
          !1
        ), (t.flags & 4) !== 0 && s && Xi(t, n.onUpdate);
      } else
        (t.subtreeFlags & 33554432) !== 0 && Dg(t);
      t = t.sibling;
    }
  }
  var oe = !1, Rt = !1, Tn = !1, gc = !1, zg = typeof WeakSet == "function" ? WeakSet : Set, ue = null, En = !1, ql = !1, Do = !1, pc = !1;
  function bS(t, e, n) {
    if (t = t.containerInfo, Yc = $i, t = Nh(t), nr(t)) {
      if ("selectionStart" in t)
        var a = {
          start: t.selectionStart,
          end: t.selectionEnd
        };
      else
        t: {
          a = (a = t.ownerDocument) && a.defaultView || window;
          var s = a.getSelection && a.getSelection();
          if (s && s.rangeCount !== 0) {
            a = s.anchorNode;
            var o = s.anchorOffset, f = s.focusNode;
            s = s.focusOffset;
            try {
              a.nodeType, f.nodeType;
            } catch {
              a = null;
              break t;
            }
            var g = 0, S = -1, C = -1, R = 0, U = 0, A = t, z = null;
            e: for (; ; ) {
              for (var K; A !== a || o !== 0 && A.nodeType !== 3 || (S = g + o), A !== f || s !== 0 && A.nodeType !== 3 || (C = g + s), A.nodeType === 3 && (g += A.nodeValue.length), (K = A.firstChild) !== null; )
                z = A, A = K;
              for (; ; ) {
                if (A === t) break e;
                if (z === a && ++R === o && (S = g), z === f && ++U === s && (C = g), (K = A.nextSibling) !== null) break;
                A = z, z = A.parentNode;
              }
              A = K;
            }
            a = S === -1 || C === -1 ? null : { start: S, end: C };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (qc = { focusedElem: t, selectionRange: a }, $i = !1, n = (n & 335544064) === n, ue = e, e = n ? 9270 : 1024; ue !== null; ) {
      if (t = ue, n && (a = t.deletions, a !== null))
        for (o = 0; o < a.length; o++)
          n && dc(a[o]);
      if (t.alternate === null && (t.flags & 2) !== 0)
        n && Eg(t), zo(n);
      else {
        if (t.tag === 22) {
          if (a = t.alternate, t.memoizedState !== null) {
            a !== null && a.memoizedState === null && n && dc(a), zo(n);
            continue;
          } else if (a !== null && a.memoizedState !== null) {
            n && Eg(t), zo(n);
            continue;
          }
        }
        a = t.child, (t.subtreeFlags & e) !== 0 && a !== null ? (a.return = t, ue = a) : (n && Mg(t), zo(n));
      }
    }
    Ye = null;
  }
  function zo(t) {
    for (; ue !== null; ) {
      var e = ue, n = t, a = e.alternate, s = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if ((s & 1024) !== 0 && a !== null) {
            n = void 0, s = a.memoizedProps, a = a.memoizedState;
            var o = e.stateNode;
            try {
              var f = Fa(
                e.type,
                s
              );
              n = o.getSnapshotBeforeUpdate(
                f,
                a
              ), o.__reactInternalSnapshotBeforeUpdate = n;
            } catch (g) {
              Nt(e, e.return, g);
            }
          }
          break;
        case 3:
          if ((s & 1024) !== 0) {
            if (a = e.stateNode.containerInfo, n = a.nodeType, n === 9)
              Fc(a);
            else if (n === 1)
              switch (a.nodeName) {
                case "HEAD":
                case "HTML":
                case "BODY":
                  Fc(a);
                  break;
                default:
                  a.textContent = "";
              }
          }
          break;
        case 5:
        case 26:
        case 27:
        case 6:
        case 4:
        case 17:
          break;
        case 30:
          n && a !== null && (n = Vn(
            a.memoizedProps,
            a.stateNode
          ), s = e.memoizedProps, s = Un(s.default, s.update), s !== "none" && Ui(
            a,
            n,
            s,
            a.memoizedState = [],
            !0
          ));
          break;
        default:
          if ((s & 1024) !== 0) throw Error(u(163));
      }
      if (a = e.sibling, a !== null) {
        a.return = e.return, ue = a;
        break;
      }
      ue = e.return;
    }
  }
  function Og(t, e, n) {
    var a = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        xn(t, n), a & 4 && Gl(5, n);
        break;
      case 1:
        if (xn(t, n), a & 4)
          if (t = n.stateNode, e === null)
            try {
              t.componentDidMount();
            } catch (f) {
              Nt(n, n.return, f);
            }
          else {
            var s = Fa(
              n.type,
              e.memoizedProps
            );
            e = e.memoizedState;
            try {
              t.componentDidUpdate(
                s,
                e,
                t.__reactInternalSnapshotBeforeUpdate
              );
            } catch (f) {
              Nt(
                n,
                n.return,
                f
              );
            }
          }
        a & 64 && yg(n), a & 512 && vn(n, n.return);
        break;
      case 3:
        if (xn(t, n), a & 64 && (t = n.updateQueue, t !== null)) {
          if (e = null, n.child !== null)
            switch (n.child.tag) {
              case 27:
              case 5:
                e = n.child.stateNode;
                break;
              case 1:
                e = n.child.stateNode;
            }
          try {
            sm(t, e);
          } catch (f) {
            Nt(n, n.return, f);
          }
        }
        break;
      case 27:
        e === null && a & 4 && Tg(n);
      case 26:
      case 5:
        xn(t, n), e === null && a & 4 && sc(n), a & 512 && vn(n, n.return);
        break;
      case 12:
        xn(t, n);
        break;
      case 31:
        xn(t, n), a & 4 && _g(t, n);
        break;
      case 13:
        xn(t, n), a & 4 && Vg(t, n), a & 64 && (t = n.memoizedState, t !== null && (t = t.dehydrated, t !== null && (n = wS.bind(
          null,
          n
        ), dT(t, n))));
        break;
      case 22:
        if (a = n.memoizedState !== null || oe, !a) {
          var o = e !== null && e.memoizedState !== null || Rt;
          e = oe, s = Rt, oe = a, (Rt = o) && !s ? (a = 2, (n.subtreeFlags & 8772) !== 0 && (a |= 1), on(
            t,
            n,
            a
          )) : xn(t, n), oe = e, Rt = s;
        }
        break;
      case 30:
        xn(t, n), a & 512 && vn(n, n.return);
        break;
      case 7:
        a & 512 && vn(n, n.return);
      default:
        xn(t, n);
    }
  }
  function yc(t, e) {
    for (t = t.child; t !== null; )
      Rg(t, e), t = t.sibling;
  }
  function Rg(t, e) {
    switch (t.tag) {
      case 5:
      case 26:
        try {
          var n = t.stateNode;
          if (e) {
            var a = n.style;
            typeof a.setProperty == "function" ? a.setProperty("display", "none", "important") : a.display = "none";
          } else {
            var s = t.stateNode, o = t.memoizedProps.style, f = o != null && o.hasOwnProperty("display") ? o.display : null;
            s.style.display = f == null || typeof f == "boolean" ? "" : ("" + f).trim();
          }
        } catch (S) {
          Nt(t, t.return, S);
        }
        vc(t, e);
        break;
      case 6:
        try {
          t.stateNode.nodeValue = e ? "" : t.memoizedProps, zt = !0;
        } catch (S) {
          Nt(t, t.return, S);
        }
        break;
      case 18:
        try {
          var g = t.stateNode;
          e ? Ep(g, !0) : Ep(t.stateNode, !1);
        } catch (S) {
          Nt(t, t.return, S);
        }
        break;
      case 22:
      case 23:
        t.memoizedState === null && yc(t, e);
        break;
      default:
        yc(t, e);
    }
  }
  function vc(t, e) {
    if (t.subtreeFlags & 67108864)
      for (t = t.child; t !== null; ) {
        t: {
          var n = t, a = e;
          switch (n.tag) {
            case 4:
              Rg(n, a);
              break t;
            case 22:
              n.memoizedState === null && vc(n, a);
              break t;
            default:
              vc(n, a);
          }
        }
        t = t.sibling;
      }
  }
  function wg(t) {
    var e = t.alternate;
    e !== null && (t.alternate = null, wg(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && Ns(e)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var Qt = null, Oe = !1;
  function ln(t, e, n) {
    for (n = n.child; n !== null; )
      Ng(t, e, n), n = n.sibling;
  }
  function Ng(t, e, n) {
    if (Be && typeof Be.onCommitFiberUnmount == "function")
      try {
        Be.onCommitFiberUnmount(fl, n);
      } catch {
      }
    switch (n.tag) {
      case 26:
        Rt || me(n, e), ln(
          t,
          e,
          n
        ), n.memoizedState ? n.memoizedState.count-- : n.stateNode && !Rt && (n = n.stateNode, n.parentNode.removeChild(n));
        break;
      case 27:
        Rt || me(n, e), Yl(n);
        var a = Qt, s = Oe;
        va(n.type) && (Qt = n.stateNode, Oe = !1), ln(
          t,
          e,
          n
        ), Bp(
          n.stateNode,
          n.type,
          n.memoizedProps
        ), Qt = a, Oe = s;
        break;
      case 5:
        Rt || me(n, e), Yl(n);
      case 6:
        if (n.tag === 6 && Yl(n), a = Qt, s = Oe, Qt = null, ln(
          t,
          e,
          n
        ), Qt = a, Oe = s, Qt !== null)
          if (Oe)
            try {
              (Qt.nodeType === 9 ? Qt.body : Qt.nodeName === "HTML" ? Qt.ownerDocument.body : Qt).removeChild(n.stateNode), zt = !0;
            } catch (o) {
              Nt(
                n,
                e,
                o
              );
            }
          else
            try {
              Qt.removeChild(n.stateNode), zt = !0;
            } catch (o) {
              Nt(
                n,
                e,
                o
              );
            }
        break;
      case 18:
        Qt !== null && (Oe ? (t = Qt, Tp(
          t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t,
          n.stateNode
        ), tl(t)) : Tp(Qt, n.stateNode));
        break;
      case 4:
        a = Qt, s = Oe, Qt = n.stateNode.containerInfo, Oe = !0, ln(
          t,
          e,
          n
        ), Qt = a, Oe = s;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        fa(2, n, e), Rt || fa(4, n, e), ln(
          t,
          e,
          n
        );
        break;
      case 1:
        Rt || (me(n, e), a = n.stateNode, typeof a.componentWillUnmount == "function" && vg(
          n,
          e,
          a
        )), ln(
          t,
          e,
          n
        );
        break;
      case 21:
        ln(
          t,
          e,
          n
        );
        break;
      case 22:
        Rt = (a = Rt) || n.memoizedState !== null, ln(
          t,
          e,
          n
        ), Rt = a;
        break;
      case 30:
        me(n, e), ln(
          t,
          e,
          n
        );
        break;
      case 7:
        Rt || me(n, e), ln(
          t,
          e,
          n
        );
        break;
      default:
        ln(
          t,
          e,
          n
        );
    }
  }
  function _g(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null))) {
      t = t.dehydrated;
      try {
        tl(t);
      } catch (n) {
        Nt(e, e.return, n);
      }
    }
  }
  function Vg(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null))))
      try {
        tl(t);
      } catch (n) {
        Nt(e, e.return, n);
      }
  }
  function SS(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new zg()), e;
      case 22:
        return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new zg()), e;
      default:
        throw Error(u(435, t.tag));
    }
  }
  function Oo(t, e) {
    var n = SS(t);
    e.forEach(function(a) {
      if (!n.has(a)) {
        n.add(a);
        var s = NS.bind(null, t, a);
        a.then(s, s);
      }
    });
  }
  function Ee(t, e, n) {
    var a = e.deletions;
    if (a !== null)
      for (var s = 0; s < a.length; s++) {
        var o = a[s], f = t, g = e, S = g;
        t: for (; S !== null; ) {
          switch (S.tag) {
            case 27:
              if (va(S.type)) {
                Qt = S.stateNode, Oe = !1;
                break t;
              }
              break;
            case 5:
              Qt = S.stateNode, Oe = !1;
              break t;
            case 3:
            case 4:
              Qt = S.stateNode.containerInfo, Oe = !0;
              break t;
          }
          S = S.return;
        }
        if (Qt === null) throw Error(u(160));
        Ng(f, g, o), Qt = null, Oe = !1, f = o.alternate, f !== null && (f.return = null), o.return = null;
      }
    if (e.subtreeFlags & 13886)
      for (e = e.child; e !== null; )
        Ug(e, t, n), e = e.sibling;
  }
  var sn = null;
  function Ug(t, e, n) {
    var a = t.alternate, s = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (s & 4 && (a = t.updateQueue, a = a !== null ? a.events : null, a !== null))
          for (var o = 0; o < a.length; o++) {
            var f = a[o];
            f.ref.impl = f.nextImpl;
          }
        Ee(e, t, n), xe(t), s & 4 && (fa(3, t, t.return), Gl(3, t), fa(5, t, t.return));
        break;
      case 1:
        Ee(e, t, n), xe(t), s & 512 && (Rt || a === null || me(a, a.return)), s & 64 && oe && (t = t.updateQueue, t !== null && (e = t.callbacks, e !== null && (n = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = n === null ? e : n.concat(e))));
        break;
      case 26:
        if (o = sn, Ee(e, t, n), xe(t), s & 512 && (Rt || a === null || me(a, a.return)), s & 4)
          if (s = a !== null ? a.memoizedState : null, n = t.memoizedState, a === null)
            if (n === null)
              if (t.stateNode === null)
                if (oe)
                  t.stateNode = vp(
                    t.type,
                    t.memoizedProps,
                    e.containerInfo,
                    t
                  );
                else {
                  t: {
                    e = t.type, n = t.memoizedProps, s = o.ownerDocument || o;
                    e: switch (e) {
                      case "title":
                        a = s.getElementsByTagName("title")[0], (!a || a[ml] || a[ce] || a.namespaceURI === "http://www.w3.org/2000/svg" || a.hasAttribute("itemprop")) && (a = s.createElement(e), s.head.insertBefore(
                          a,
                          s.querySelector("head > title")
                        )), ge(a, e, n), a[ce] = t, le(a), e = a;
                        break t;
                      case "link":
                        if (o = qp(
                          "link",
                          "href",
                          s
                        ).get(e + (n.href || ""))) {
                          for (f = 0; f < o.length; f++)
                            if (a = o[f], a.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && a.getAttribute("rel") === (n.rel == null ? null : n.rel) && a.getAttribute("title") === (n.title == null ? null : n.title) && a.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
                              o.splice(f, 1);
                              break e;
                            }
                        }
                        a = s.createElement(e), ge(a, e, n), s.head.appendChild(a);
                        break;
                      case "meta":
                        if (o = qp(
                          "meta",
                          "content",
                          s
                        ).get(e + (n.content || ""))) {
                          for (f = 0; f < o.length; f++)
                            if (a = o[f], a.getAttribute("content") === (n.content == null ? null : "" + n.content) && a.getAttribute("name") === (n.name == null ? null : n.name) && a.getAttribute("property") === (n.property == null ? null : n.property) && a.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && a.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
                              o.splice(f, 1);
                              break e;
                            }
                        }
                        a = s.createElement(e), ge(a, e, n), s.head.appendChild(a);
                        break;
                      default:
                        throw Error(u(468, e));
                    }
                    a[ce] = t, le(a), e = a;
                  }
                  t.stateNode = e;
                }
              else
                oe || nf(o, t.type, t.stateNode);
            else
              t.stateNode = Yp(
                o,
                n,
                t.memoizedProps
              );
          else
            s !== n ? (s === null ? (e = a.stateNode, e === null || Rt || e.parentNode.removeChild(e)) : s.count--, n === null ? oe || nf(o, t.type, t.stateNode) : Yp(o, n, t.memoizedProps)) : n === null && t.stateNode !== null && oc(
              t,
              t.memoizedProps,
              a.memoizedProps
            );
        break;
      case 27:
        Ee(e, t, n), xe(t), s & 512 && (Rt || a === null || me(a, a.return)), a !== null && s & 4 && oc(
          t,
          t.memoizedProps,
          a.memoizedProps
        );
        break;
      case 5:
        if (o = Tn, Tn = !1, Ee(e, t, n), Tn = o, xe(t), s & 512 && (Rt || a === null || me(a, a.return)), t.flags & 32) {
          e = t.stateNode;
          try {
            yi(e, ""), zt = !0;
          } catch (R) {
            Nt(t, t.return, R);
          }
        }
        s & 4 && t.stateNode != null && (e = t.memoizedProps, oc(
          t,
          e,
          a !== null ? a.memoizedProps : e
        )), s & 1024 && (gc = !0);
        break;
      case 6:
        if (Ee(e, t, n), xe(t), s & 4) {
          if (t.stateNode === null)
            throw Error(u(162));
          e = t.memoizedProps, n = t.stateNode;
          try {
            n.nodeValue = e, zt = !0;
          } catch (R) {
            Nt(t, t.return, R);
          }
        }
        break;
      case 3:
        if (zt = !1, Qo = null, o = sn, sn = Il(e.containerInfo), Ee(e, t, n), sn = o, xe(t), s & 4 && a !== null && a.memoizedState.isDehydrated)
          try {
            tl(e.containerInfo);
          } catch (R) {
            Nt(t, t.return, R);
          }
        gc && (gc = !1, Bg(t)), zt = !1;
        break;
      case 4:
        s = Tn, Tn = oe, a = nh(), o = sn, sn = Il(
          t.stateNode.containerInfo
        ), Ee(e, t, n), xe(t), sn = o, zt && ql && (Do = !0), zt = a, Tn = s;
        break;
      case 12:
        Ee(e, t, n), xe(t);
        break;
      case 31:
        Ee(e, t, n), xe(t), s & 4 && (e = t.updateQueue, e !== null && (t.updateQueue = null, Oo(t, e)));
        break;
      case 13:
        Ee(e, t, n), xe(t), t.child.flags & 8192 && t.memoizedState !== null != (a !== null && a.memoizedState !== null) && (No = Ue()), s & 4 && (e = t.updateQueue, e !== null && (t.updateQueue = null, Oo(t, e)));
        break;
      case 22:
        o = t.memoizedState !== null, f = a !== null && a.memoizedState !== null;
        var g = oe, S = Rt, C = Tn;
        oe = g || o, Tn = C || o, Rt = S || f, Ee(e, t, n), Rt = S, Tn = C, oe = g, xe(t), s & 8192 && (e = t.stateNode, e._visibility = o ? e._visibility & -2 : e._visibility | 1, !o || a === null || f || oe || Rt || (e = f || Rt, n = oe, a = Rt, oe = o || oe, Rt = e, da(t, 2), oe = n, Rt = a), !o && Tn || yc(t, o)), s & 4 && (e = t.updateQueue, e !== null && (n = e.retryQueue, n !== null && (e.retryQueue = null, Oo(t, n))));
        break;
      case 19:
        Ee(e, t, n), xe(t), s & 4 && (e = t.updateQueue, e !== null && (t.updateQueue = null, Oo(t, e)));
        break;
      case 30:
        s & 512 && (Rt || a === null || me(a, a.return)), s = nh(), o = ql, f = (n & 335544064) === n, g = t.memoizedProps, ql = f && Un(
          g.default,
          g.update
        ) !== "none", Ee(e, t, n), xe(t), f && a !== null && zt && (t.flags |= 4), ql = o, zt = s;
        break;
      case 21:
        break;
      case 7:
        s & 512 && (Rt || a === null || me(a, a.return)), a && a.stateNode !== null && (a.stateNode._fragmentFiber = t);
      default:
        Ee(e, t, n), xe(t);
    }
  }
  function xe(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var n, a = t.return; a !== null; ) {
          if (Sg(a)) {
            n = a;
            break;
          }
          a = a.return;
        }
        a = null;
        for (var s = t.return; s !== null; ) {
          if (lc(s)) {
            var o = s.stateNode;
            a === null ? a = [o] : a.push(o);
          }
          if (ic(s)) break;
          s = s.return;
        }
        var f = a;
        if (n == null) throw Error(u(160));
        switch (n.tag) {
          case 27:
            var g = n.stateNode, S = uc(t);
            xo(
              t,
              S,
              g,
              f
            );
            break;
          case 5:
            var C = n.stateNode;
            n.flags & 32 && (yi(C, ""), n.flags &= -33);
            var R = uc(t);
            xo(
              t,
              R,
              C,
              f
            );
            break;
          case 3:
          case 4:
            var U = n.stateNode.containerInfo, A = uc(t);
            rc(
              t,
              A,
              U,
              f
            );
            break;
          default:
            throw Error(u(161));
        }
      } catch (z) {
        Nt(t, t.return, z);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function Bg(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        Bg(e), e.tag === 5 && e.flags & 1024 && (e = e.stateNode, $i = !0, e.reset(), $i = !1), t = t.sibling;
      }
  }
  function Bi(t, e) {
    if (e.subtreeFlags & 9270)
      for (e = e.child; e !== null; )
        jg(e, t), e = e.sibling;
    else Dg(e);
  }
  function jg(t, e) {
    var n = t.alternate;
    if (n === null) cc(t, !1);
    else
      switch (t.tag) {
        case 3:
          if (pc = En = !1, xg(), Bi(e, t), !En && !Do) {
            if (t = bn, t !== null)
              for (var a = 0; a < t.length; a += 3) {
                n = t[a];
                var s = t[a + 1];
                Ap(n, t[a + 2]), n = n.ownerDocument.documentElement, n !== null && n.animate(
                  { opacity: [0, 0], pointerEvents: ["none", "none"] },
                  {
                    duration: 0,
                    fill: "forwards",
                    pseudoElement: "::view-transition-group(" + s + ")"
                  }
                );
              }
            t = e.containerInfo, t = t.nodeType === 9 ? t.documentElement : t.ownerDocument.documentElement, t !== null && t.style.viewTransitionName === "" && (t.style.viewTransitionName = "none", t.animate(
              { opacity: [0, 0], pointerEvents: ["none", "none"] },
              {
                duration: 0,
                fill: "forwards",
                pseudoElement: "::view-transition-group(root)"
              }
            ), t.animate(
              { width: [0, 0], height: [0, 0] },
              {
                duration: 0,
                fill: "forwards",
                pseudoElement: "::view-transition"
              }
            )), pc = !0;
          }
          bn = null;
          break;
        case 5:
          Bi(e, t);
          break;
        case 4:
          a = En, En = !1, Bi(e, t), En && (Do = !0), En = a;
          break;
        case 22:
          t.memoizedState === null && (n.memoizedState !== null ? cc(t, !1) : Bi(e, t));
          break;
        case 30:
          a = En, s = xg(), En = !1, Bi(e, t), En && (t.flags |= 4);
          var o = t.memoizedProps, f = t.stateNode;
          e = Vn(o, f), f = Vn(n.memoizedProps, f);
          var g = Un(o.default, o.update);
          g === "none" ? e = !1 : (o = n.memoizedState, n.memoizedState = null, n = t.child, ze = 0, e = mc(
            t,
            n,
            e,
            f,
            g,
            o,
            !0
          ), ze !== (o === null ? 0 : o.length) && (t.flags |= 32)), (t.flags & 4) !== 0 && e ? (Xi(
            t,
            t.memoizedProps.onUpdate
          ), bn = s) : s !== null && (s.push.apply(s, bn), bn = s), En = (t.flags & 32) !== 0 ? !0 : a;
          break;
        default:
          Bi(e, t);
      }
  }
  function xn(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; )
        Og(t, e.alternate, e), e = e.sibling;
  }
  function da(t, e) {
    for (t = t.child; t !== null; ) {
      var n = t, a = e;
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          fa(4, n, n.return), da(
            n,
            a
          );
          break;
        case 1:
          me(n, n.return);
          var s = n.stateNode;
          typeof s.componentWillUnmount == "function" && vg(
            n,
            n.return,
            s
          ), da(
            n,
            a
          );
          break;
        case 27:
          (a & 2) !== 0 && Bp(
            n.stateNode,
            n.type,
            n.memoizedProps
          );
        case 5:
          me(n, n.return), n.tag !== 5 && n.tag !== 27 || Yl(n), da(
            n,
            a
          );
          break;
        case 6:
          Yl(n);
          break;
        case 26:
          me(n, n.return), s = n.stateNode, n.memoizedState !== null || s === null || Rt || s.parentNode.removeChild(s), da(
            n,
            a
          );
          break;
        case 22:
          n.memoizedState === null && da(
            n,
            a
          );
          break;
        case 30:
          me(n, n.return), da(
            n,
            a
          );
          break;
        case 7:
          me(n, n.return);
        default:
          da(
            n,
            a
          );
      }
      t = t.sibling;
    }
  }
  function on(t, e, n) {
    for (n = (e.subtreeFlags & 8772) !== 0 ? n : n & -2, e = e.child; e !== null; ) {
      var a = e.alternate, s = t, o = e, f = o.flags, g = (n & 1) !== 0;
      switch (o.tag) {
        case 0:
        case 11:
        case 15:
          on(
            s,
            o,
            n
          ), Gl(4, o);
          break;
        case 1:
          if (on(
            s,
            o,
            n
          ), a = o, s = a.stateNode, typeof s.componentDidMount == "function")
            try {
              s.componentDidMount();
            } catch (R) {
              Nt(a, a.return, R);
            }
          if (a = o, s = a.updateQueue, s !== null) {
            var S = a.stateNode;
            try {
              var C = s.shared.hiddenCallbacks;
              if (C !== null)
                for (s.shared.hiddenCallbacks = null, s = 0; s < C.length; s++)
                  lm(C[s], S);
            } catch (R) {
              Nt(a, a.return, R);
            }
          }
          g && f & 64 && yg(o), vn(o, o.return);
          break;
        case 27:
          (n & 2) !== 0 && Tg(o);
        case 5:
          o.tag !== 5 && o.tag !== 27 || bg(o), on(
            s,
            o,
            n
          ), g && a === null && f & 4 && sc(o), vn(o, o.return);
          break;
        case 6:
          bg(o);
          break;
        case 26:
          S = o.stateNode, o.memoizedState !== null || S === null || oe || nf(
            Il(S.ownerDocument),
            o.type,
            S
          ), on(
            s,
            o,
            n
          ), g && a === null && f & 4 && sc(o), vn(o, o.return);
          break;
        case 12:
          on(
            s,
            o,
            n
          );
          break;
        case 31:
          on(
            s,
            o,
            n
          ), g && f & 4 && _g(s, o);
          break;
        case 13:
          on(
            s,
            o,
            n
          ), g && f & 4 && Vg(s, o);
          break;
        case 22:
          o.memoizedState === null && on(
            s,
            o,
            n
          ), vn(o, o.return);
          break;
        case 30:
          on(
            s,
            o,
            n
          ), vn(o, o.return);
          break;
        case 7:
          vn(o, o.return);
        default:
          on(
            s,
            o,
            n
          );
      }
      e = e.sibling;
    }
  }
  function bc(t, e) {
    var n = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== n && (t != null && t.refCount++, n != null && Dl(n));
  }
  function Sc(t, e) {
    t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && Dl(t));
  }
  function We(t, e, n, a) {
    var s = (n & 335544064) === n;
    if (e.subtreeFlags & (s ? 10262 : 10256))
      for (e = e.child; e !== null; )
        Lg(
          t,
          e,
          n,
          a
        ), e = e.sibling;
    else s && Cg(e);
  }
  function Lg(t, e, n, a) {
    var s = (n & 335544064) === n;
    s && e.alternate === null && e.return !== null && e.return.alternate !== null && Co(e);
    var o = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        We(
          t,
          e,
          n,
          a
        ), o & 2048 && Gl(9, e);
        break;
      case 1:
        We(
          t,
          e,
          n,
          a
        );
        break;
      case 3:
        We(
          t,
          e,
          n,
          a
        ), s && pc && (t = t.containerInfo, t = t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, t.style.viewTransitionName === "root" && (t.style.viewTransitionName = ""), t = t.ownerDocument.documentElement, t !== null && t.style.viewTransitionName === "none" && (t.style.viewTransitionName = "")), o & 2048 && (o = null, e.alternate !== null && (o = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== o && (e.refCount++, o != null && Dl(o)));
        break;
      case 12:
        if (o & 2048) {
          We(
            t,
            e,
            n,
            a
          ), o = e.stateNode;
          try {
            var f = e.memoizedProps, g = f.id, S = f.onPostCommit;
            typeof S == "function" && S(
              g,
              e.alternate === null ? "mount" : "update",
              o.passiveEffectDuration,
              -0
            );
          } catch (C) {
            Nt(e, e.return, C);
          }
        } else
          We(
            t,
            e,
            n,
            a
          );
        break;
      case 31:
        We(
          t,
          e,
          n,
          a
        );
        break;
      case 13:
        We(
          t,
          e,
          n,
          a
        );
        break;
      case 23:
        break;
      case 22:
        f = e.stateNode, g = e.alternate, e.memoizedState !== null ? (s && g !== null && g.memoizedState === null && Co(g), f._visibility & 2 ? We(
          t,
          e,
          n,
          a
        ) : Xl(
          t,
          e
        )) : (s && g !== null && g.memoizedState !== null && Co(e), f._visibility & 2 ? We(
          t,
          e,
          n,
          a
        ) : (f._visibility |= 2, ji(
          t,
          e,
          n,
          a,
          (e.subtreeFlags & 10256) !== 0 || !1
        ))), o & 2048 && bc(g, e);
        break;
      case 24:
        We(
          t,
          e,
          n,
          a
        ), o & 2048 && Sc(e.alternate, e);
        break;
      case 30:
        s && (o = e.alternate, o !== null && (Sn(o.child, !0), Sn(e.child, !0))), We(
          t,
          e,
          n,
          a
        );
        break;
      default:
        We(
          t,
          e,
          n,
          a
        );
    }
  }
  function ji(t, e, n, a, s) {
    for (s = s && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child; e !== null; ) {
      var o = t, f = e, g = n, S = a, C = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          ji(
            o,
            f,
            g,
            S,
            s
          ), Gl(8, f);
          break;
        case 23:
          break;
        case 22:
          var R = f.stateNode;
          f.memoizedState !== null ? R._visibility & 2 ? ji(
            o,
            f,
            g,
            S,
            s
          ) : Xl(
            o,
            f
          ) : (R._visibility |= 2, ji(
            o,
            f,
            g,
            S,
            s
          )), s && C & 2048 && bc(
            f.alternate,
            f
          );
          break;
        case 24:
          ji(
            o,
            f,
            g,
            S,
            s
          ), s && C & 2048 && Sc(f.alternate, f);
          break;
        default:
          ji(
            o,
            f,
            g,
            S,
            s
          );
      }
      e = e.sibling;
    }
  }
  function Xl(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var n = t, a = e, s = a.flags;
        switch (a.tag) {
          case 22:
            Xl(n, a), s & 2048 && bc(
              a.alternate,
              a
            );
            break;
          case 24:
            Xl(n, a), s & 2048 && Sc(a.alternate, a);
            break;
          default:
            Xl(n, a);
        }
        e = e.sibling;
      }
  }
  var Pa = 8192;
  function Ia(t, e, n) {
    if (t.subtreeFlags & Pa)
      for (t = t.child; t !== null; )
        Hg(
          t,
          e,
          n
        ), t = t.sibling;
  }
  function Hg(t, e, n) {
    switch (t.tag) {
      case 26:
        Ia(
          t,
          e,
          n
        ), t.flags & Pa && (t.memoizedState !== null ? CT(
          n,
          sn,
          t.memoizedState,
          t.memoizedProps
        ) : (t = t.stateNode, (e & 335544128) === e && Kp(n, t)));
        break;
      case 5:
        Ia(
          t,
          e,
          n
        ), t.flags & Pa && (t = t.stateNode, (e & 335544128) === e && Kp(n, t));
        break;
      case 3:
      case 4:
        var a = sn;
        sn = Il(t.stateNode.containerInfo), Ia(
          t,
          e,
          n
        ), sn = a;
        break;
      case 22:
        t.memoizedState === null && (a = t.alternate, a !== null && a.memoizedState !== null ? (a = Pa, Pa = 16777216, Ia(
          t,
          e,
          n
        ), Pa = a) : Ia(
          t,
          e,
          n
        ));
        break;
      case 30:
        if ((t.flags & Pa) !== 0 && (a = t.memoizedProps.name, a != null && a !== "auto")) {
          var s = t.stateNode;
          s.paired = null, Ye === null && (Ye = /* @__PURE__ */ new Map()), Ye.set(a, s);
        }
        Ia(
          t,
          e,
          n
        );
        break;
      default:
        Ia(
          t,
          e,
          n
        );
    }
  }
  function Gg(t) {
    var e = t.alternate;
    if (e !== null && (t = e.child, t !== null)) {
      e.child = null;
      do
        e = t.sibling, t.sibling = null, t = e;
      while (t !== null);
    }
  }
  function Ql(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var a = e[n];
          ue = a, qg(
            a,
            t
          );
        }
      Gg(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        Yg(t), t = t.sibling;
  }
  function Yg(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Ql(t), t.flags & 2048 && fa(9, t, t.return);
        break;
      case 3:
        Ql(t);
        break;
      case 12:
        Ql(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3, Ro(t)) : Ql(t);
        break;
      default:
        Ql(t);
    }
  }
  function Ro(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var a = e[n];
          ue = a, qg(
            a,
            t
          );
        }
      Gg(t);
    }
    for (t = t.child; t !== null; ) {
      switch (e = t, e.tag) {
        case 0:
        case 11:
        case 15:
          fa(8, e, e.return), Ro(e);
          break;
        case 22:
          n = e.stateNode, n._visibility & 2 && (n._visibility &= -3, Ro(e));
          break;
        default:
          Ro(e);
      }
      t = t.sibling;
    }
  }
  function qg(t, e) {
    for (; ue !== null; ) {
      var n = ue;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          fa(8, n, e);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var a = n.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          Dl(n.memoizedState.cache);
      }
      if (a = n.child, a !== null) a.return = n, ue = a;
      else
        t: for (n = t; ue !== null; ) {
          a = ue;
          var s = a.sibling, o = a.return;
          if (wg(a), a === n) {
            ue = null;
            break t;
          }
          if (s !== null) {
            s.return = o, ue = s;
            break t;
          }
          ue = o;
        }
    }
  }
  var TS = {
    getCacheForType: function(t) {
      var e = fe(It), n = e.data.get(t);
      return n === void 0 && (n = t(), e.data.set(t, n)), n;
    },
    cacheSignal: function() {
      return fe(It).controller.signal;
    }
  }, ES = typeof WeakMap == "function" ? WeakMap : Map, Ot = 0, jt = null, Tt = null, At = 0, wt = 0, qe = null, ha = !1, Li = !1, Tc = !1, Qn = 0, Jt = 0, ma = 0, Wa = 0, wo = 0, Xe = 0, Hi = 0, Zl = null, Re = null, Ec = !1, No = 0, Xg = 0, _o = 1 / 0, Vo = null, ga = null, Zt = 0, un = null, $a = null, An = 0, xc = 0, Ac = null, Qg = null, Gi = null, Yi = null, qi = null, Kl = 0, Uo = null;
  function Qe() {
    return (Ot & 2) !== 0 && At !== 0 ? At & -At : $.T !== null ? Vc() : kd();
  }
  function Zg() {
    if (Xe === 0)
      if ((At & 536870912) === 0 || yt) {
        var t = zs;
        zs <<= 1, (zs & 3932160) === 0 && (zs = 262144), Xe = t;
      } else Xe = 536870912;
    return t = de.current, t !== null && (t.flags |= 32), Xe;
  }
  function Xi(t, e) {
    if (e != null) {
      var n = t.stateNode, a = n.ref;
      a === null && (a = n.ref = Mp(
        Vn(t.memoizedProps, n)
      )), Yi === null && (Yi = []), Yi.push(e.bind(null, a));
    }
  }
  function we(t, e, n) {
    (t === jt && (wt === 2 || wt === 9) || t.cancelPendingCommit !== null) && (Qi(t, 0), pa(
      t,
      At,
      Xe,
      !1
    )), hl(t, n), ((Ot & 2) === 0 || t !== jt) && (t === jt && ((Ot & 2) === 0 && (Wa |= n), Jt === 4 && pa(
      t,
      At,
      Xe,
      !1
    )), Mn(t));
  }
  function Kg(t, e, n) {
    if ((Ot & 6) !== 0) throw Error(u(327));
    var a = !n && (e & 127) === 0 && (e & t.expiredLanes) === 0 || dl(t, e), s = a ? MS(t, e) : Cc(t, e, !0), o = a;
    do {
      if (s === 0) {
        Li && !a && pa(t, e, 0, !1);
        break;
      } else {
        if (n = t.current.alternate, o && !xS(n)) {
          s = Cc(t, e, !1), o = !1;
          continue;
        }
        if (s === 2) {
          if (o = e, t.errorRecoveryDisabledLanes & o)
            var f = 0;
          else
            f = t.pendingLanes & -536870913, f = f !== 0 ? f : f & 536870912 ? 536870912 : 0;
          if (f !== 0) {
            e = f;
            t: {
              var g = t;
              s = Zl;
              var S = g.current.memoizedState.isDehydrated;
              if (S && (Qi(g, f).flags |= 256), f = Cc(
                g,
                f,
                !1
              ), f !== 2 && f !== 6) {
                if (Tc && !S) {
                  g.errorRecoveryDisabledLanes |= o, Wa |= o, s = 4;
                  break t;
                }
                o = Re, Re = s, o !== null && (Re === null ? Re = o : Re.push.apply(
                  Re,
                  o
                ));
              }
              s = f;
            }
            if (o = !1, s !== 2) continue;
          }
        }
        if (s === 1) {
          Qi(t, 0), pa(t, e, 0, !0);
          break;
        }
        t: {
          switch (a = t, o = s, o) {
            case 0:
            case 1:
              throw Error(u(345));
            case 4:
              if ((e & 4194048) !== e && (e & 62914560) !== e)
                break;
            case 6:
              pa(
                a,
                e,
                Xe,
                !ha
              );
              break t;
            case 2:
              Re = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(u(329));
          }
          if ((e & 62914560) === e && (s = No + 300 - Ue(), 10 < s)) {
            if (pa(
              a,
              e,
              Xe,
              !ha
            ), Rs(a, 0, !0) !== 0) break t;
            An = e, a.timeoutHandle = Zc(
              kg.bind(
                null,
                a,
                n,
                Re,
                Vo,
                Ec,
                e,
                Xe,
                Wa,
                Hi,
                ha,
                o,
                "Throttled",
                -0,
                0
              ),
              s
            );
            break t;
          }
          kg(
            a,
            n,
            Re,
            Vo,
            Ec,
            e,
            Xe,
            Wa,
            Hi,
            ha,
            o,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Mn(t);
  }
  function kg(t, e, n, a, s, o, f, g, S, C, R, U, A, z) {
    t.timeoutHandle = -1;
    var K = e.subtreeFlags, tt = (o & 335544064) === o;
    if (U = null, (tt || K & 8192 || (K & 16785408) === 16785408) && (U = {
      stylesheets: null,
      count: 0,
      imgCount: 0,
      imgBytes: 0,
      suspenseyImages: [],
      waitingForImages: !0,
      waitingForViewTransition: !1,
      unsuspend: gn
    }, Ye = null, Hg(
      e,
      o,
      U
    ), tt && (K = U, tt = t.containerInfo, tt = (tt.nodeType === 9 ? tt : tt.ownerDocument).__reactViewTransition, tt != null && (K.count++, K.waitingForViewTransition = !0, K = ts.bind(K), tt.finished.then(K, K))), K = (o & 62914560) === o ? No - Ue() : (o & 4194048) === o ? Xg - Ue() : 0, K = DT(
      U,
      K
    ), K !== null)) {
      An = o, t.cancelPendingCommit = K(
        ep.bind(
          null,
          t,
          e,
          o,
          n,
          a,
          s,
          f,
          g,
          S,
          C,
          R,
          U,
          null,
          A,
          z
        )
      ), pa(t, o, f, !C);
      return;
    }
    ep(
      t,
      e,
      o,
      n,
      a,
      s,
      f,
      g,
      S,
      C,
      R,
      U
    );
  }
  function xS(t) {
    for (var e = t; ; ) {
      var n = e.tag;
      if ((n === 0 || n === 11 || n === 15) && e.flags & 16384 && (n = e.updateQueue, n !== null && (n = n.stores, n !== null)))
        for (var a = 0; a < n.length; a++) {
          var s = n[a], o = s.getSnapshot;
          s = s.value;
          try {
            if (!He(o(), s)) return !1;
          } catch {
            return !1;
          }
        }
      if (n = e.child, e.subtreeFlags & 16384 && n !== null)
        n.return = e, e = n;
      else {
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return !0;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
    }
    return !0;
  }
  function pa(t, e, n, a) {
    e = qd(t, e), e &= ~wo, e &= ~Wa, t.suspendedLanes |= e, t.pingedLanes &= ~e, a && (t.warmLanes |= e), a = t.expirationTimes;
    for (var s = e; 0 < s; ) {
      var o = 31 - je(s), f = 1 << o;
      a[o] = -1, s &= ~f;
    }
    n !== 0 && Qd(t, n, e);
  }
  function Bo() {
    return (Ot & 6) === 0 ? (kl(0), !1) : !0;
  }
  function Mc() {
    if (Tt !== null) {
      if (wt === 0)
        var t = Tt.return;
      else
        t = Tt, Ln = Ga = null, _r(t), Ri = null, Rl = 0, t = Tt;
      for (; t !== null; )
        pg(t.alternate, t), t = t.return;
      Tt = null;
    }
  }
  function Qi(t, e) {
    var n = t.timeoutHandle;
    return n !== -1 && (t.timeoutHandle = -1, kS(n)), n = t.cancelPendingCommit, n !== null && (t.cancelPendingCommit = null, n()), An = 0, Mc(), jt = t, Tt = n = Bn(t.current, null), At = e, wt = 0, qe = null, ha = !1, Li = dl(t, e), Tc = !1, Hi = Xe = wo = Wa = ma = Jt = 0, Re = Zl = null, Ec = !1, Qn = qd(t, e), Xs(), n;
  }
  function Jg(t, e) {
    mt = null, $.H = go, e === Oi || e === to ? (e = em(), wt = 3) : e === Sr ? (e = em(), wt = 4) : wt = e === Jr ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, qe = e, Tt === null && (Jt = 1, po(
      t,
      Je(e, t.current)
    ));
  }
  function Fg() {
    var t = de.current;
    return t === null ? !0 : (At & 4194048) === At ? be === null : (At & 62914560) === At || (At & 536870912) !== 0 ? t === be : !1;
  }
  function Pg() {
    var t = $.H;
    return $.H = go, t === null ? go : t;
  }
  function Ig() {
    var t = $.A;
    return $.A = TS, t;
  }
  function jo() {
    Jt = 4, ha || (At & 4194048) !== At && de.current !== null || (Li = !0), (ma & 134217727) === 0 && (Wa & 134217727) === 0 || jt === null || pa(
      jt,
      At,
      Xe,
      !1
    );
  }
  function Cc(t, e, n) {
    var a = Ot;
    Ot |= 2;
    var s = Pg(), o = Ig();
    (jt !== t || At !== e) && (Vo = null, Qi(t, e)), e = !1;
    var f = Jt;
    t: do
      try {
        if (wt !== 0 && Tt !== null) {
          var g = Tt, S = qe;
          switch (wt) {
            case 8:
              Mc(), f = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              de.current === null && (e = !0);
              var C = wt;
              if (wt = 0, qe = null, Zi(t, g, S, C), n && Li) {
                f = 0;
                break t;
              }
              break;
            default:
              C = wt, wt = 0, qe = null, Zi(t, g, S, C);
          }
        }
        AS(), f = Jt;
        break;
      } catch (R) {
        Jg(t, R);
      }
    while (!0);
    return e && t.shellSuspendCounter++, Ln = Ga = null, Ot = a, $.H = s, $.A = o, Tt === null && (jt = null, At = 0, Xs()), f;
  }
  function AS() {
    for (; Tt !== null; ) Wg(Tt);
  }
  function MS(t, e) {
    var n = Ot;
    Ot |= 2;
    var a = Pg(), s = Ig();
    jt !== t || At !== e ? (Vo = null, _o = Ue() + 500, Qi(t, e)) : Li = dl(
      t,
      e
    );
    t: do
      try {
        if (wt !== 0 && Tt !== null) {
          e = Tt;
          var o = qe;
          e: switch (wt) {
            case 1:
              wt = 0, qe = null, Zi(t, e, o, 1);
              break;
            case 2:
            case 9:
              if ($h(o)) {
                wt = 0, qe = null, $g(e);
                break;
              }
              e = function() {
                wt !== 2 && wt !== 9 || jt !== t || (wt = 7), Mn(t);
              }, o.then(e, e);
              break t;
            case 3:
              wt = 7;
              break t;
            case 4:
              wt = 5;
              break t;
            case 7:
              $h(o) ? (wt = 0, qe = null, $g(e)) : (wt = 0, qe = null, Zi(t, e, o, 7));
              break;
            case 5:
              var f = null;
              switch (Tt.tag) {
                case 26:
                  f = Tt.memoizedState;
                case 5:
                case 27:
                  var g = Tt;
                  if (f ? Qp(f) : g.stateNode.complete) {
                    wt = 0, qe = null;
                    var S = g.sibling;
                    if (S !== null) Tt = S;
                    else {
                      var C = g.return;
                      C !== null ? (Tt = C, Lo(C)) : Tt = null;
                    }
                    break e;
                  }
              }
              wt = 0, qe = null, Zi(t, e, o, 5);
              break;
            case 6:
              wt = 0, qe = null, Zi(t, e, o, 6);
              break;
            case 8:
              Mc(), Jt = 6;
              break t;
            default:
              throw Error(u(462));
          }
        }
        CS();
        break;
      } catch (R) {
        Jg(t, R);
      }
    while (!0);
    return Ln = Ga = null, $.H = a, $.A = s, Ot = n, Tt !== null ? 0 : (jt = null, At = 0, Xs(), Jt);
  }
  function CS() {
    for (; Tt !== null && !Xb(); )
      Wg(Tt);
  }
  function Wg(t) {
    var e = mg(t.alternate, t, Qn);
    t.memoizedProps = t.pendingProps, e === null ? Lo(t) : Tt = e;
  }
  function $g(t) {
    var e = t, n = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = og(
          n,
          e,
          e.pendingProps,
          e.type,
          void 0,
          At
        );
        break;
      case 11:
        e = og(
          n,
          e,
          e.pendingProps,
          e.type.render,
          e.ref,
          At
        );
        break;
      case 5:
        _r(e);
        var a = e;
        a === se && (yt ? (Fs(a), a.tag === 5 && a.stateNode != null && (Yt = a.stateNode)) : (Fs(a), yt = !0));
      default:
        pg(n, e), e = Tt = qh(e, Qn), e = mg(n, e, Qn);
    }
    t.memoizedProps = t.pendingProps, e === null ? Lo(t) : Tt = e;
  }
  function Zi(t, e, n, a) {
    Ln = Ga = null, _r(e), Ri = null, Rl = 0;
    var s = e.return;
    try {
      if (hS(
        t,
        s,
        e,
        n,
        At
      )) {
        Jt = 1, po(
          t,
          Je(n, t.current)
        ), Tt = null;
        return;
      }
    } catch (o) {
      if (s !== null) throw Tt = s, o;
      Jt = 1, po(
        t,
        Je(n, t.current)
      ), Tt = null;
      return;
    }
    e.flags & 32768 ? (yt || a === 1 ? t = !0 : Li || (At & 536870912) !== 0 ? t = !1 : (ha = t = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = de.current, a !== null && a.tag === 13 && (a.flags |= 16384))), tp(e, t)) : Lo(e);
  }
  function Lo(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        tp(
          e,
          ha
        );
        return;
      }
      t = e.return;
      var n = yS(
        e.alternate,
        e,
        Qn
      );
      if (n !== null) {
        Tt = n;
        return;
      }
      if (e = e.sibling, e !== null) {
        Tt = e;
        return;
      }
      Tt = e = t;
    } while (e !== null);
    Jt === 0 && (Jt = 5);
  }
  function tp(t, e) {
    do {
      var n = vS(t.alternate, t);
      if (n !== null) {
        n.flags &= 32767, Tt = n;
        return;
      }
      if (n = t.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !e && (t = t.sibling, t !== null)) {
        Tt = t;
        return;
      }
      Tt = t = n;
    } while (t !== null);
    Jt = 6, Tt = null;
  }
  function ep(t, e, n, a, s, o, f, g, S, C, R, U) {
    t.cancelPendingCommit = null;
    do
      Ho();
    while (Zt !== 0);
    if ((Ot & 6) !== 0) throw Error(u(327));
    if (e !== null) {
      if (e === t.current) throw Error(u(177));
      t === jt && (Tt = jt = null, At = 0), $a = e, un = t, An = n, Ac = s, Qg = a, DS(
        t,
        e,
        n,
        f,
        g,
        S,
        U
      );
    }
  }
  function DS(t, e, n, a, s, o, f) {
    var g = e.lanes | e.childLanes;
    if (xc = g, g |= or, $b(
      t,
      n,
      g,
      a,
      s,
      o
    ), Yi = null, (n & 335544064) === n ? (qi = eS(t), a = 10262) : (qi = null, a = 10256), (e.subtreeFlags & a) !== 0 || (e.flags & a) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, _S(Cs, function() {
      return Rc(), null;
    })) : (t.callbackNode = null, t.callbackPriority = 0), Ao = !1, a = (e.flags & 13878) !== 0, (e.subtreeFlags & 13878) !== 0 || a) {
      a = $.T, $.T = null, s = ct.p, ct.p = 2, o = Ot, Ot |= 4;
      try {
        bS(t, e, n);
      } finally {
        Ot = o, ct.p = s, $.T = a;
      }
    }
    Zt = 1, Ao ? Gi = $S(
      f,
      t.containerInfo,
      qi,
      Dc,
      zc,
      OS,
      Oc,
      Rc,
      zS
    ) : (Dc(), zc(), Oc());
  }
  function zS(t) {
    if (Zt !== 0) {
      var e = un.onRecoverableError;
      e(t, { componentStack: null });
    }
  }
  function OS() {
    Zt === 3 && (Zt = 0, jg($a, un), Zt = 4);
  }
  function Dc() {
    if (Zt === 1) {
      Zt = 0;
      var t = un, e = $a, n = An, a = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || a) {
        a = $.T, $.T = null;
        var s = ct.p;
        ct.p = 2;
        var o = Ot;
        Ot |= 4;
        try {
          ql = Do = !1, Ug(e, t, n), n = qc;
          var f = Nh(t.containerInfo), g = n.focusedElem, S = n.selectionRange;
          if (f !== g && g && g.ownerDocument && wh(
            g.ownerDocument.documentElement,
            g
          )) {
            if (S !== null && nr(g)) {
              var C = S.start, R = S.end;
              if (R === void 0 && (R = C), "selectionStart" in g)
                g.selectionStart = C, g.selectionEnd = Math.min(
                  R,
                  g.value.length
                );
              else {
                var U = g.ownerDocument || document, A = U && U.defaultView || window;
                if (A.getSelection) {
                  var z = A.getSelection(), K = g.textContent.length, tt = Math.min(S.start, K), gt = S.end === void 0 ? tt : Math.min(S.end, K);
                  !z.extend && tt > gt && (f = gt, gt = tt, tt = f);
                  var M = Rh(
                    g,
                    tt
                  ), E = Rh(
                    g,
                    gt
                  );
                  if (M && E && (z.rangeCount !== 1 || z.anchorNode !== M.node || z.anchorOffset !== M.offset || z.focusNode !== E.node || z.focusOffset !== E.offset)) {
                    var D = U.createRange();
                    D.setStart(M.node, M.offset), z.removeAllRanges(), tt > gt ? (z.addRange(D), z.extend(E.node, E.offset)) : (D.setEnd(E.node, E.offset), z.addRange(D));
                  }
                }
              }
            }
            for (U = [], z = g; z = z.parentNode; )
              z.nodeType === 1 && U.push({
                element: z,
                left: z.scrollLeft,
                top: z.scrollTop
              });
            for (typeof g.focus == "function" && g.focus(), g = 0; g < U.length; g++) {
              var V = U[g];
              V.element.scrollLeft = V.left, V.element.scrollTop = V.top;
            }
          }
          $i = !!Yc, qc = Yc = null;
        } finally {
          Ot = o, ct.p = s, $.T = a;
        }
      }
      t.current = e, Zt = 2;
    }
  }
  function zc() {
    if (Zt === 2) {
      Zt = 0;
      var t = un, e = $a, n = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || n) {
        n = $.T, $.T = null;
        var a = ct.p;
        ct.p = 2;
        var s = Ot;
        Ot |= 4;
        try {
          Og(t, e.alternate, e);
        } finally {
          Ot = s, ct.p = a, $.T = n;
        }
      }
      Zt = 3;
    }
  }
  function Oc() {
    if (Zt === 4 || Zt === 3) {
      Zt = 0;
      var t = Gi;
      Gi = null, Qb();
      var e = un, n = $a, a = An, s = Qg, o = (a & 335544064) === a ? 10262 : 10256;
      if ((n.subtreeFlags & o) !== 0 || (n.flags & o) !== 0 ? Zt = 5 : (Zt = 0, $a = un = null, np(e, e.pendingLanes)), o = e.pendingLanes, o === 0 && (ga = null), Lu(a), n = n.stateNode, Be && typeof Be.onCommitFiberRoot == "function")
        try {
          Be.onCommitFiberRoot(
            fl,
            n,
            void 0,
            (n.current.flags & 128) === 128
          );
        } catch {
        }
      if (s !== null) {
        n = $.T, o = ct.p, ct.p = 2, $.T = null;
        try {
          for (var f = e.onRecoverableError, g = 0; g < s.length; g++) {
            var S = s[g];
            f(S.value, {
              componentStack: S.stack
            });
          }
        } finally {
          $.T = n, ct.p = o;
        }
      }
      if (s = Yi, f = qi, qi = null, s !== null && (Yi = null, f === null && (f = []), t !== null))
        for (S = 0; S < s.length; S++)
          n = (0, s[S])(
            f
          ), n !== void 0 && t.finished.finally(n);
      (An & 3) !== 0 && Ho(), Mn(e), o = e.pendingLanes, (a & 261930) !== 0 && (o & 42) !== 0 ? e === Uo ? Kl++ : (Kl = 0, Uo = e) : (Kl = 0, Uo = null), kl(0);
    }
  }
  function np(t, e) {
    (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, Dl(e)));
  }
  function Ho() {
    return Gi !== null && (Gi.skipTransition(), Gi = null), Dc(), zc(), Oc(), Rc();
  }
  function Rc() {
    if (Zt !== 5) return !1;
    var t = un, e = xc;
    xc = 0;
    var n = Lu(An), a = $.T, s = ct.p;
    try {
      ct.p = 32 > n ? 32 : n, $.T = null, n = Ac, Ac = null;
      var o = un, f = An;
      if (Zt = 0, $a = un = null, An = 0, (Ot & 6) !== 0) throw Error(u(331));
      var g = Ot;
      if (Ot |= 4, Yg(o.current), Lg(
        o,
        o.current,
        f,
        n
      ), Ot = g, kl(0, !1), Be && typeof Be.onPostCommitFiberRoot == "function")
        try {
          Be.onPostCommitFiberRoot(fl, o);
        } catch {
        }
      return !0;
    } finally {
      ct.p = s, $.T = a, np(t, e);
    }
  }
  function ap(t, e, n) {
    e = Je(n, e), e = kr(t.stateNode, e, 2), t = oa(t, e, 2), t !== null && (hl(t, 2), Mn(t));
  }
  function Nt(t, e, n) {
    if (t.tag === 3)
      ap(t, t, n);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          ap(
            e,
            t,
            n
          );
          break;
        } else if (e.tag === 1) {
          var a = e.stateNode;
          if (typeof e.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (ga === null || !ga.has(a))) {
            t = Je(n, t), n = $m(2), a = oa(e, n, 2), a !== null && (tg(
              n,
              a,
              e,
              t
            ), hl(a, 2), Mn(a));
            break;
          }
        }
        e = e.return;
      }
  }
  function wc(t, e, n) {
    var a = t.pingCache;
    if (a === null) {
      a = t.pingCache = new ES();
      var s = /* @__PURE__ */ new Set();
      a.set(e, s);
    } else
      s = a.get(e), s === void 0 && (s = /* @__PURE__ */ new Set(), a.set(e, s));
    s.has(n) || (Tc = !0, s.add(n), t = RS.bind(null, t, e, n), e.then(t, t));
  }
  function RS(t, e, n) {
    var a = t.pingCache;
    a !== null && a.delete(e), t.pingedLanes |= t.suspendedLanes & n, t.warmLanes &= ~n, jt === t && (At & n) === n && ((Jt === 4 || Jt === 3 && (At & 62914560) === At && 300 > Ue() - No) && (Ot & 2) === 0 ? Qi(t, 0) : wo |= n, Hi === At && (Hi = 0)), Mn(t);
  }
  function ip(t, e) {
    e === 0 && (e = Xd()), t = ja(t, e), t !== null && (hl(t, e), Mn(t));
  }
  function wS(t) {
    var e = t.memoizedState, n = 0;
    e !== null && (n = e.retryLane), ip(t, n);
  }
  function NS(t, e) {
    var n = 0;
    switch (t.tag) {
      case 31:
      case 13:
        var a = t.stateNode, s = t.memoizedState;
        s !== null && (n = s.retryLane);
        break;
      case 19:
        a = t.stateNode;
        break;
      case 22:
        a = t.stateNode._retryCache;
        break;
      default:
        throw Error(u(314));
    }
    a !== null && a.delete(e), ip(t, n);
  }
  function _S(t, e) {
    return Vu(t, e);
  }
  var Ki = null, ki = null, Nc = !1, Go = !1, _c = !1, ya = 0;
  function Mn(t) {
    t !== ki && t.next === null && (ki === null ? Ki = ki = t : ki = ki.next = t), Go = !0, Nc || (Nc = !0, US());
  }
  function kl(t, e) {
    if (!_c && Go) {
      _c = !0;
      do
        for (var n = !1, a = Ki; a !== null; ) {
          if (t !== 0) {
            var s = a.pendingLanes;
            if (s === 0) var o = 0;
            else {
              var f = a.suspendedLanes, g = a.pingedLanes;
              o = (1 << 31 - je(42 | t) + 1) - 1, o &= s & ~(f & ~g), o = o & 201326741 ? o & 201326741 | 1 : o ? o | 2 : 0;
            }
            o !== 0 && (n = !0, up(a, o));
          } else
            o = At, o = Rs(
              a,
              a === jt ? o : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (o & 3) === 0 || dl(a, o) || (n = !0, up(a, o));
          a = a.next;
        }
      while (n);
      _c = !1;
    }
  }
  function VS() {
    lp();
  }
  function lp() {
    Go = Nc = !1;
    var t = 0;
    ya !== 0 && KS() && (t = ya);
    for (var e = Ue(), n = null, a = Ki; a !== null; ) {
      var s = a.next, o = sp(a, e);
      o === 0 ? (a.next = null, n === null ? Ki = s : n.next = s, s === null && (ki = n)) : (n = a, (t !== 0 || (o & 3) !== 0) && (Go = !0)), a = s;
    }
    Zt !== 0 && Zt !== 5 || kl(t), ya !== 0 && (ya = 0);
  }
  function sp(t, e) {
    for (var n = t.suspendedLanes, a = t.pingedLanes, s = t.expirationTimes, o = t.pendingLanes & -62914561; 0 < o; ) {
      var f = 31 - je(o), g = 1 << f, S = s[f];
      S === -1 ? ((g & n) === 0 || (g & a) !== 0) && (s[f] = Wb(g, e)) : S <= e && (t.expiredLanes |= g), o &= ~g;
    }
    if (e = jt, n = At, n = Rs(
      t,
      t === e ? n : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), a = t.callbackNode, n === 0 || t === e && (wt === 2 || wt === 9) || t.cancelPendingCommit !== null)
      return a !== null && a !== null && Uu(a), t.callbackNode = null, t.callbackPriority = 0;
    if ((n & 3) === 0 || dl(t, n)) {
      if (e = n & -n, e === t.callbackPriority) return e;
      switch (a !== null && Uu(a), Lu(n)) {
        case 2:
        case 8:
          n = Gd;
          break;
        case 32:
          n = Cs;
          break;
        case 268435456:
          n = Yd;
          break;
        default:
          n = Cs;
      }
      return a = op.bind(null, t), n = Vu(n, a), t.callbackPriority = e, t.callbackNode = n, e;
    }
    return a !== null && a !== null && Uu(a), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function op(t, e) {
    if (Zt !== 0 && Zt !== 5)
      return t.callbackNode = null, t.callbackPriority = 0, null;
    var n = t.callbackNode;
    if (Ho() && t.callbackNode !== n)
      return null;
    var a = At;
    return a = Rs(
      t,
      t === jt ? a : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), a === 0 ? null : (Kg(t, a, e), sp(t, Ue()), t.callbackNode != null && t.callbackNode === n ? op.bind(null, t) : null);
  }
  function up(t, e) {
    if (Ho()) return null;
    Kg(t, e, !0);
  }
  function US() {
    JS(function() {
      (Ot & 6) !== 0 ? Vu(
        Hd,
        VS
      ) : lp();
    });
  }
  function Vc() {
    if (ya === 0) {
      var t = Xa;
      t === 0 && (t = Ds, Ds <<= 1, (Ds & 261888) === 0 && (Ds = 256)), ya = t;
    }
    return ya;
  }
  function rp(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : Us(t);
  }
  function BS(t, e, n, a, s) {
    if (e === "submit" && n && n.stateNode === s) {
      var o = rp(
        (s[Ce] || null).action
      ), f = a.submitter;
      f && (e = (e = f[Ce] || null) ? rp(e.formAction) : f.getAttribute("formAction"), e !== null && (o = e, f = null));
      var g = new Hs(
        "action",
        "action",
        null,
        a,
        s
      );
      t.push({
        event: g,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (a.defaultPrevented) {
                if (ya !== 0) {
                  var S = new FormData(s, f);
                  qr(
                    n,
                    {
                      pending: !0,
                      data: S,
                      method: s.method,
                      action: o
                    },
                    null,
                    S
                  );
                }
              } else
                typeof o == "function" && (g.preventDefault(), S = new FormData(s, f), qr(
                  n,
                  {
                    pending: !0,
                    data: S,
                    method: s.method,
                    action: o
                  },
                  o,
                  S
                ));
            },
            currentTarget: s
          }
        ]
      });
    }
  }
  for (var Uc = 0; Uc < sr.length; Uc++) {
    var Bc = sr[Uc], jS = Bc.toLowerCase(), LS = Bc[0].toUpperCase() + Bc.slice(1);
    an(
      jS,
      "on" + LS
    );
  }
  an(Uh, "onAnimationEnd"), an(Bh, "onAnimationIteration"), an(jh, "onAnimationStart"), an("dblclick", "onDoubleClick"), an("focusin", "onFocus"), an("focusout", "onBlur"), an(k1, "onTransitionRun"), an(J1, "onTransitionStart"), an(F1, "onTransitionCancel"), an(Lh, "onTransitionEnd"), gi("onMouseEnter", ["mouseout", "mouseover"]), gi("onMouseLeave", ["mouseout", "mouseover"]), gi("onPointerEnter", ["pointerout", "pointerover"]), gi("onPointerLeave", ["pointerout", "pointerover"]), Va(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Va(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Va("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Va(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Va(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Va(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Jl = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), HS = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Jl)
  );
  function cp(t, e) {
    e = (e & 4) !== 0;
    for (var n = 0; n < t.length; n++) {
      var a = t[n], s = a.event;
      a = a.listeners;
      t: {
        var o = void 0;
        if (e)
          for (var f = a.length - 1; 0 <= f; f--) {
            var g = a[f], S = g.instance, C = g.currentTarget;
            if (g = g.listener, S !== o && s.isPropagationStopped())
              break t;
            o = g, s.currentTarget = C;
            try {
              o(s);
            } catch (R) {
              qs(R);
            }
            s.currentTarget = null, o = S;
          }
        else
          for (f = 0; f < a.length; f++) {
            if (g = a[f], S = g.instance, C = g.currentTarget, g = g.listener, S !== o && s.isPropagationStopped())
              break t;
            o = g, s.currentTarget = C;
            try {
              o(s);
            } catch (R) {
              qs(R);
            }
            s.currentTarget = null, o = S;
          }
      }
    }
  }
  function Et(t, e) {
    var n = e[Fd];
    n === void 0 && (n = e[Fd] = /* @__PURE__ */ new Set());
    var a = t + "__bubble";
    n.has(a) || (fp(e, t, 2, !1), n.add(a));
  }
  function jc(t, e, n) {
    var a = 0;
    e && (a |= 4), fp(
      n,
      t,
      a,
      e
    );
  }
  var Yo = "_reactListening" + Math.random().toString(36).slice(2);
  function Lc(t) {
    if (!t[Yo]) {
      t[Yo] = !0, Wd.forEach(function(n) {
        n !== "selectionchange" && (HS.has(n) || jc(n, !1, t), jc(n, !0, t));
      });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[Yo] || (e[Yo] = !0, jc("selectionchange", !1, e));
    }
  }
  function fp(t, e, n, a) {
    switch (ty(e)) {
      case 2:
        var s = wT;
        break;
      case 8:
        s = NT;
        break;
      default:
        s = lf;
    }
    n = s.bind(
      null,
      e,
      n,
      t
    ), s = void 0, !Ku || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (s = !0), a ? s !== void 0 ? t.addEventListener(e, n, {
      capture: !0,
      passive: s
    }) : t.addEventListener(e, n, !0) : s !== void 0 ? t.addEventListener(e, n, {
      passive: s
    }) : t.addEventListener(e, n, !1);
  }
  function Hc(t, e, n, a, s) {
    var o = a;
    if ((e & 1) === 0 && (e & 2) === 0 && a !== null)
      t: for (; ; ) {
        if (a === null) return;
        var f = a.tag;
        if (f === 3 || f === 4) {
          var g = a.stateNode.containerInfo;
          if (g === s) break;
          if (f === 4)
            for (f = a.return; f !== null; ) {
              var S = f.tag;
              if ((S === 3 || S === 4) && f.stateNode.containerInfo === s)
                return;
              f = f.return;
            }
          for (; g !== null; ) {
            if (f = _a(g), f === null) return;
            if (S = f.tag, S === 5 || S === 6 || S === 26 || S === 27) {
              a = o = f;
              continue t;
            }
            g = g.parentNode;
          }
        }
        a = a.return;
      }
    fh(function() {
      var C = o, R = Qu(n), U = [];
      t: {
        var A = Hh.get(t);
        if (A !== void 0) {
          var z = Hs, K = t;
          switch (t) {
            case "keypress":
              if (js(n) === 0) break t;
            case "keydown":
            case "keyup":
              z = x1;
              break;
            case "focusin":
              K = "focus", z = Pu;
              break;
            case "focusout":
              K = "blur", z = Pu;
              break;
            case "beforeblur":
            case "afterblur":
              z = Pu;
              break;
            case "click":
              if (n.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              z = mh;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              z = f1;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              z = z1;
              break;
            case Uh:
            case Bh:
            case jh:
              z = m1;
              break;
            case Lh:
              z = R1;
              break;
            case "scroll":
            case "scrollend":
              z = r1;
              break;
            case "wheel":
              z = N1;
              break;
            case "copy":
            case "cut":
            case "paste":
              z = p1;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              z = ph;
              break;
            case "submit":
              z = C1;
              break;
            case "toggle":
            case "beforetoggle":
              z = V1;
          }
          var tt = (e & 4) !== 0, gt = !tt && (t === "scroll" || t === "scrollend"), M = tt ? A !== null ? A + "Capture" : null : A;
          tt = [];
          for (var E = C, D; E !== null; ) {
            var V = E;
            if (D = V.stateNode, V = V.tag, V !== 5 && V !== 26 && V !== 27 || D === null || M === null || (V = pl(E, M), V != null && tt.push(
              Fl(E, V, D)
            )), gt) break;
            E = E.return;
          }
          0 < tt.length && (A = new z(
            A,
            K,
            null,
            n,
            R
          ), U.push({ event: A, listeners: tt }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (z = t === "mouseover" || t === "pointerover", A = t === "mouseout" || t === "pointerout", z && n !== Xu && (K = n.relatedTarget || n.fromElement) && (_a(K) || K[di]))
            break t;
          (A || z) && (K = R.window === R ? R : (z = R.ownerDocument) ? z.defaultView || z.parentWindow : window, A ? (z = n.relatedTarget || n.toElement, A = C, z = z ? _a(z) : null, z !== null && (gt = h(z), tt = z.tag, z !== gt || tt !== 5 && tt !== 27 && tt !== 6) && (z = null)) : (A = null, z = C), A !== z && (tt = mh, V = "onMouseLeave", M = "onMouseEnter", E = "mouse", (t === "pointerout" || t === "pointerover") && (tt = ph, V = "onPointerLeave", M = "onPointerEnter", E = "pointer"), gt = A == null ? K : gl(A), D = z == null ? K : gl(z), K = new tt(
            V,
            E + "leave",
            A,
            n,
            R
          ), K.target = gt, K.relatedTarget = D, V = null, _a(R) === C && (tt = new tt(
            M,
            E + "enter",
            z,
            n,
            R
          ), tt.target = D, tt.relatedTarget = gt, V = tt), gt = V, tt = A && z ? ut(
            A,
            z,
            GS
          ) : null, A !== null && dp(
            U,
            K,
            A,
            tt,
            !1
          ), z !== null && gt !== null && dp(
            U,
            gt,
            z,
            tt,
            !0
          )));
        }
        t: {
          if (A = C ? gl(C) : window, z = A.nodeName && A.nodeName.toLowerCase(), z === "select" || z === "input" && A.type === "file")
            var P = Ah;
          else if (Eh(A))
            if (Mh)
              P = Q1;
            else {
              P = q1;
              var Mt = Y1;
            }
          else
            z = A.nodeName, !z || z.toLowerCase() !== "input" || A.type !== "checkbox" && A.type !== "radio" ? C && qu(C.elementType) && (P = Ah) : P = X1;
          if (P && (P = P(t, C))) {
            xh(
              U,
              P,
              n,
              R
            );
            break t;
          }
          Mt && Mt(t, A, C);
        }
        switch (Mt = C ? gl(C) : window, t) {
          case "focusin":
            (Eh(Mt) || Mt.contentEditable === "true") && (Ti = Mt, ar = C, Al = null);
            break;
          case "focusout":
            Al = ar = Ti = null;
            break;
          case "mousedown":
            ir = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ir = !1, _h(U, n, R);
            break;
          case "selectionchange":
            if (K1) break;
          case "keydown":
          case "keyup":
            _h(U, n, R);
        }
        var ot;
        if (Wu)
          t: {
            switch (t) {
              case "compositionstart":
                var ft = "onCompositionStart";
                break t;
              case "compositionend":
                ft = "onCompositionEnd";
                break t;
              case "compositionupdate":
                ft = "onCompositionUpdate";
                break t;
            }
            ft = void 0;
          }
        else
          Si ? Sh(t, n) && (ft = "onCompositionEnd") : t === "keydown" && n.keyCode === 229 && (ft = "onCompositionStart");
        ft && (yh && n.locale !== "ko" && (Si || ft !== "onCompositionStart" ? ft === "onCompositionEnd" && Si && (ot = dh()) : (Wn = R, ku = "value" in Wn ? Wn.value : Wn.textContent, Si = !0)), Mt = qo(C, ft), 0 < Mt.length && (ft = new gh(
          ft,
          t,
          null,
          n,
          R
        ), U.push({ event: ft, listeners: Mt }), ot ? ft.data = ot : (ot = Th(n), ot !== null && (ft.data = ot)))), (ot = B1 ? j1(t, n) : L1(t, n)) && (ft = qo(C, "onBeforeInput"), 0 < ft.length && (Mt = new gh(
          "onBeforeInput",
          "beforeinput",
          null,
          n,
          R
        ), U.push({
          event: Mt,
          listeners: ft
        }), Mt.data = ot)), BS(
          U,
          t,
          C,
          n,
          R
        );
      }
      cp(U, e);
    });
  }
  function Fl(t, e, n) {
    return {
      instance: t,
      listener: e,
      currentTarget: n
    };
  }
  function qo(t, e) {
    for (var n = e + "Capture", a = []; t !== null; ) {
      var s = t, o = s.stateNode;
      if (s = s.tag, s !== 5 && s !== 26 && s !== 27 || o === null || (s = pl(t, n), s != null && a.unshift(
        Fl(t, s, o)
      ), s = pl(t, e), s != null && a.push(
        Fl(t, s, o)
      )), t.tag === 3) return a;
      t = t.return;
    }
    return [];
  }
  function GS(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function dp(t, e, n, a, s) {
    for (var o = e._reactName, f = []; n !== null && n !== a; ) {
      var g = n, S = g.alternate, C = g.stateNode;
      if (g = g.tag, S !== null && S === a) break;
      g !== 5 && g !== 26 && g !== 27 || C === null || (S = C, s ? (C = pl(n, o), C != null && f.unshift(
        Fl(n, C, S)
      )) : s || (C = pl(n, o), C != null && f.push(
        Fl(n, C, S)
      ))), n = n.return;
    }
    f.length !== 0 && t.push({ event: e, listeners: f });
  }
  var YS = /\r\n?/g, qS = /\u0000|\uFFFD/g;
  function hp(t) {
    return (typeof t == "string" ? t : "" + t).replace(YS, `
`).replace(qS, "");
  }
  function mp(t, e) {
    return e = hp(e), hp(t) === e;
  }
  function _t(t, e, n, a, s, o) {
    switch (n) {
      case "children":
        if (typeof a == "string")
          e === "body" || e === "textarea" && a === "" || yi(t, a);
        else if (typeof a == "number" || typeof a == "bigint")
          e !== "body" && yi(t, "" + a);
        else return;
        break;
      case "className":
        Vs(t, "class", a);
        break;
      case "tabIndex":
        Vs(t, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Vs(t, n, a);
        break;
      case "style":
        rh(t, a, o);
        return;
      case "data":
        if (e !== "object") {
          Vs(t, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (e !== "a" || n !== "href")) {
          t.removeAttribute(n);
          break;
        }
        if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
          t.removeAttribute(n);
          break;
        }
        a = Us(a), t.setAttribute(n, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          t.setAttribute(
            n,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof o == "function" && (n === "formAction" ? (e !== "input" && _t(t, e, "name", s.name, s, null), _t(
            t,
            e,
            "formEncType",
            s.formEncType,
            s,
            null
          ), _t(
            t,
            e,
            "formMethod",
            s.formMethod,
            s,
            null
          ), _t(
            t,
            e,
            "formTarget",
            s.formTarget,
            s,
            null
          )) : (_t(t, e, "encType", s.encType, s, null), _t(t, e, "method", s.method, s, null), _t(t, e, "target", s.target, s, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          t.removeAttribute(n);
          break;
        }
        a = Us(a), t.setAttribute(n, a);
        break;
      case "onClick":
        a != null && (t.onclick = gn);
        return;
      case "onScroll":
        a != null && Et("scroll", t);
        return;
      case "onScrollEnd":
        a != null && Et("scrollend", t);
        return;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(u(61));
          if (n = a.__html, n != null) {
            if (s.children != null) throw Error(u(60));
            (o != null ? o.__html : void 0) !== n && (t.innerHTML = n);
          }
        }
        break;
      case "multiple":
        t.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        t.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
          t.removeAttribute("xlink:href");
          break;
        }
        n = Us(a), t.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          n
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(n, a) : t.removeAttribute(n);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "credentialless":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(n, "") : t.removeAttribute(n);
        break;
      case "capture":
      case "download":
        a === !0 ? t.setAttribute(n, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(n, a) : t.removeAttribute(n);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? t.setAttribute(n, a) : t.removeAttribute(n);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? t.removeAttribute(n) : t.setAttribute(n, a);
        break;
      case "popover":
        Et("beforetoggle", t), Et("toggle", t), _s(t, "popover", a);
        break;
      case "xlinkActuate":
        Nn(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          a
        );
        break;
      case "xlinkArcrole":
        Nn(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          a
        );
        break;
      case "xlinkRole":
        Nn(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          a
        );
        break;
      case "xlinkShow":
        Nn(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          a
        );
        break;
      case "xlinkTitle":
        Nn(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          a
        );
        break;
      case "xlinkType":
        Nn(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          a
        );
        break;
      case "xmlBase":
        Nn(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          a
        );
        break;
      case "xmlLang":
        Nn(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          a
        );
        break;
      case "xmlSpace":
        Nn(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          a
        );
        break;
      case "is":
        _s(t, "is", a);
        break;
      case "innerText":
      case "textContent":
        return;
      default:
        if (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N")
          n = o1.get(n) || n, _s(t, n, a);
        else return;
    }
    zt = !0;
  }
  function Gc(t, e, n, a, s, o) {
    switch (n) {
      case "style":
        rh(t, a, o);
        return;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(u(61));
          if (n = a.__html, n != null) {
            if (s.children != null) throw Error(u(60));
            (o != null ? o.__html : void 0) !== n && (t.innerHTML = n);
          }
        }
        break;
      case "children":
        if (typeof a == "string") yi(t, a);
        else if (typeof a == "number" || typeof a == "bigint")
          yi(t, "" + a);
        else return;
        break;
      case "onScroll":
        a != null && Et("scroll", t);
        return;
      case "onScrollEnd":
        a != null && Et("scrollend", t);
        return;
      case "onClick":
        a != null && (t.onclick = gn);
        return;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        return;
      case "innerText":
      case "textContent":
        return;
      default:
        if (!$d.hasOwnProperty(n))
          t: {
            if (n[0] === "o" && n[1] === "n" && (s = n.endsWith("Capture"), o = n.slice(2, s ? n.length - 7 : void 0), e = t[Ce] || null, e = e != null ? e[n] : null, typeof e == "function" && t.removeEventListener(o, e, s), typeof a == "function")) {
              typeof e != "function" && e !== null && (n in t ? t[n] = null : t.hasAttribute(n) && t.removeAttribute(n)), t.addEventListener(o, a, s);
              break t;
            }
            zt = !0, n in t ? t[n] = a : a === !0 ? t.setAttribute(n, "") : _s(t, n, a);
          }
        return;
    }
    zt = !0;
  }
  function ge(t, e, n) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        Et("error", t), Et("load", t);
        var a = !1, s = !1, o;
        for (o in n)
          if (n.hasOwnProperty(o)) {
            var f = n[o];
            if (f != null)
              switch (o) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  s = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(u(137, e));
                default:
                  _t(t, e, o, f, n, null);
              }
          }
        s && _t(t, e, "srcSet", n.srcSet, n, null), a && _t(t, e, "src", n.src, n, null);
        return;
      case "input":
        Et("invalid", t);
        var g = o = f = s = null, S = null, C = null;
        for (a in n)
          if (n.hasOwnProperty(a)) {
            var R = n[a];
            if (R != null)
              switch (a) {
                case "name":
                  s = R;
                  break;
                case "type":
                  f = R;
                  break;
                case "checked":
                  S = R;
                  break;
                case "defaultChecked":
                  C = R;
                  break;
                case "value":
                  o = R;
                  break;
                case "defaultValue":
                  g = R;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (R != null)
                    throw Error(u(137, e));
                  break;
                default:
                  _t(t, e, a, R, n, null);
              }
          }
        lh(
          t,
          o,
          g,
          S,
          C,
          f,
          s,
          !1
        );
        return;
      case "select":
        Et("invalid", t), a = f = o = null;
        for (s in n)
          if (n.hasOwnProperty(s) && (g = n[s], g != null))
            switch (s) {
              case "value":
                o = g;
                break;
              case "defaultValue":
                f = g;
                break;
              case "multiple":
                a = g;
              default:
                _t(t, e, s, g, n, null);
            }
        e = o, n = f, t.multiple = !!a, e != null ? pi(t, !!a, e, !1) : n != null && pi(t, !!a, n, !0);
        return;
      case "textarea":
        Et("invalid", t), o = s = a = null;
        for (f in n)
          if (n.hasOwnProperty(f) && (g = n[f], g != null))
            switch (f) {
              case "value":
                a = g;
                break;
              case "defaultValue":
                s = g;
                break;
              case "children":
                o = g;
                break;
              case "dangerouslySetInnerHTML":
                if (g != null) throw Error(u(91));
                break;
              default:
                _t(t, e, f, g, n, null);
            }
        oh(t, a, s, o);
        return;
      case "option":
        for (S in n)
          if (n.hasOwnProperty(S) && (a = n[S], a != null))
            switch (S) {
              case "selected":
                t.selected = a && typeof a != "function" && typeof a != "symbol";
                break;
              default:
                _t(t, e, S, a, n, null);
            }
        return;
      case "dialog":
        Et("beforetoggle", t), Et("toggle", t), Et("cancel", t), Et("close", t);
        break;
      case "iframe":
      case "object":
        Et("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < Jl.length; a++)
          Et(Jl[a], t);
        break;
      case "image":
        Et("error", t), Et("load", t);
        break;
      case "details":
        Et("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        Et("error", t), Et("load", t);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (C in n)
          if (n.hasOwnProperty(C) && (a = n[C], a != null))
            switch (C) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(u(137, e));
              default:
                _t(t, e, C, a, n, null);
            }
        return;
      default:
        if (qu(e)) {
          for (R in n)
            n.hasOwnProperty(R) && (a = n[R], a !== void 0 && Gc(
              t,
              e,
              R,
              a,
              n,
              void 0
            ));
          return;
        }
    }
    for (g in n)
      n.hasOwnProperty(g) && (a = n[g], a != null && _t(t, e, g, a, n, null));
  }
  var XS = {};
  function QS(t, e, n, a) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var s = null, o = null, f = null, g = null, S = null, C = null, R = null;
        for (z in n) {
          var U = n[z];
          if (n.hasOwnProperty(z) && U != null)
            switch (z) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                S = U;
              default:
                a.hasOwnProperty(z) || _t(t, e, z, null, a, U);
            }
        }
        for (var A in a) {
          var z = a[A];
          if (U = n[A], a.hasOwnProperty(A) && (z != null || U != null))
            switch (A) {
              case "type":
                z !== U && (zt = !0), o = z;
                break;
              case "name":
                z !== U && (zt = !0), s = z;
                break;
              case "checked":
                z !== U && (zt = !0), C = z;
                break;
              case "defaultChecked":
                z !== U && (zt = !0), R = z;
                break;
              case "value":
                z !== U && (zt = !0), f = z;
                break;
              case "defaultValue":
                z !== U && (zt = !0), g = z;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (z != null)
                  throw Error(u(137, e));
                break;
              default:
                z !== U && _t(
                  t,
                  e,
                  A,
                  z,
                  a,
                  U
                );
            }
        }
        Gu(
          t,
          f,
          g,
          S,
          C,
          R,
          o,
          s
        );
        return;
      case "select":
        z = f = g = A = null;
        for (o in n)
          if (S = n[o], n.hasOwnProperty(o) && S != null)
            switch (o) {
              case "value":
                break;
              case "multiple":
                z = S;
              default:
                a.hasOwnProperty(o) || _t(
                  t,
                  e,
                  o,
                  null,
                  a,
                  S
                );
            }
        for (s in a)
          if (o = a[s], S = n[s], a.hasOwnProperty(s) && (o != null || S != null))
            switch (s) {
              case "value":
                o !== S && (zt = !0), A = o;
                break;
              case "defaultValue":
                o !== S && (zt = !0), g = o;
                break;
              case "multiple":
                o !== S && (zt = !0), f = o;
              default:
                o !== S && _t(
                  t,
                  e,
                  s,
                  o,
                  a,
                  S
                );
            }
        e = g, n = f, a = z, A != null ? pi(t, !!n, A, !1) : !!a != !!n && (e != null ? pi(t, !!n, e, !0) : pi(t, !!n, n ? [] : "", !1));
        return;
      case "textarea":
        z = A = null;
        for (g in n)
          if (s = n[g], n.hasOwnProperty(g) && s != null && !a.hasOwnProperty(g))
            switch (g) {
              case "value":
                break;
              case "children":
                break;
              default:
                _t(t, e, g, null, a, s);
            }
        for (f in a)
          if (s = a[f], o = n[f], a.hasOwnProperty(f) && (s != null || o != null))
            switch (f) {
              case "value":
                s !== o && (zt = !0), A = s;
                break;
              case "defaultValue":
                s !== o && (zt = !0), z = s;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (s != null) throw Error(u(91));
                break;
              default:
                s !== o && _t(t, e, f, s, a, o);
            }
        sh(t, A, z);
        return;
      case "option":
        for (var K in n)
          if (A = n[K], n.hasOwnProperty(K) && A != null && !a.hasOwnProperty(K))
            switch (K) {
              case "selected":
                t.selected = !1;
                break;
              default:
                _t(
                  t,
                  e,
                  K,
                  null,
                  a,
                  A
                );
            }
        for (S in a)
          if (A = a[S], z = n[S], a.hasOwnProperty(S) && A !== z && (A != null || z != null))
            switch (S) {
              case "selected":
                A !== z && (zt = !0), t.selected = A && typeof A != "function" && typeof A != "symbol";
                break;
              default:
                _t(
                  t,
                  e,
                  S,
                  A,
                  a,
                  z
                );
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var tt in n)
          A = n[tt], n.hasOwnProperty(tt) && A != null && !a.hasOwnProperty(tt) && _t(t, e, tt, null, a, A);
        for (C in a)
          if (A = a[C], z = n[C], a.hasOwnProperty(C) && A !== z && (A != null || z != null))
            switch (C) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (A != null)
                  throw Error(u(137, e));
                break;
              default:
                _t(
                  t,
                  e,
                  C,
                  A,
                  a,
                  z
                );
            }
        return;
      default:
        if (qu(e)) {
          for (var gt in n)
            A = n[gt], n.hasOwnProperty(gt) && A !== void 0 && !a.hasOwnProperty(gt) && Gc(
              t,
              e,
              gt,
              void 0,
              a,
              A
            );
          for (R in a)
            A = a[R], z = n[R], !a.hasOwnProperty(R) || A === z || A === void 0 && z === void 0 || Gc(
              t,
              e,
              R,
              A,
              a,
              z
            );
          return;
        }
    }
    for (var M in n)
      A = n[M], n.hasOwnProperty(M) && A != null && !a.hasOwnProperty(M) && _t(t, e, M, null, a, A);
    for (U in a)
      A = a[U], z = n[U], !a.hasOwnProperty(U) || A === z || A == null && z == null || _t(t, e, U, A, a, z);
  }
  function gp(t) {
    switch (t) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function ZS() {
    if (typeof performance.getEntriesByType == "function") {
      for (var t = 0, e = 0, n = performance.getEntriesByType("resource"), a = 0; a < n.length; a++) {
        var s = n[a], o = s.transferSize, f = s.initiatorType, g = s.duration;
        if (o && g && gp(f)) {
          for (f = 0, g = s.responseEnd, a += 1; a < n.length; a++) {
            var S = n[a], C = S.startTime;
            if (C > g) break;
            var R = S.transferSize, U = S.initiatorType;
            R && gp(U) && (S = S.responseEnd, f += R * (S < g ? 1 : (g - C) / (S - C)));
          }
          if (--a, e += 8 * (o + f) / (s.duration / 1e3), t++, 10 < t) break;
        }
      }
      if (0 < t) return e / t / 1e6;
    }
    return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5;
  }
  var Yc = null, qc = null;
  function Pl(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function pp(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function yp(t, e) {
    if (t === 0)
      switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && e === "foreignObject" ? 0 : t;
  }
  function vp(t, e, n, a) {
    return n = Pl(
      n
    ).createElement(t), n[ce] = a, n[Ce] = e, ge(n, t, e), le(n), n;
  }
  function Xc(t, e) {
    return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
  }
  var Qc = null;
  function KS() {
    var t = window.event;
    return t && t.type === "popstate" ? t === Qc ? !1 : (Qc = t, !0) : (Qc = null, !1);
  }
  var Zc = typeof setTimeout == "function" ? setTimeout : void 0, kS = typeof clearTimeout == "function" ? clearTimeout : void 0, bp = typeof Promise == "function" ? Promise : void 0, Sp = typeof requestAnimationFrame == "function" ? requestAnimationFrame : Zc, JS = typeof queueMicrotask == "function" ? queueMicrotask : typeof bp < "u" ? function(t) {
    return bp.resolve(null).then(t).catch(FS);
  } : Zc;
  function FS(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function va(t) {
    return t === "head";
  }
  function Tp(t, e) {
    var n = e, a = 0;
    do {
      var s = n.nextSibling;
      if (t.removeChild(n), s && s.nodeType === 8)
        if (n = s.data, n === "/$" || n === "/&") {
          if (a === 0) {
            t.removeChild(s), tl(e);
            return;
          }
          a--;
        } else if (n === "$" || n === "$?" || n === "$~" || n === "$!" || n === "&")
          a++;
        else if (n === "html")
          $c(
            t.ownerDocument.documentElement
          );
        else if (n === "head") {
          n = t.ownerDocument.head, $c(n);
          for (var o = n.firstChild; o; ) {
            var f = o.nextSibling, g = o.nodeName;
            o[ml] || g === "SCRIPT" || g === "STYLE" || g === "LINK" && o.rel.toLowerCase() === "stylesheet" || n.removeChild(o), o = f;
          }
        } else
          n === "body" && $c(t.ownerDocument.body);
      n = s;
    } while (n);
    tl(e);
  }
  function Ep(t, e) {
    var n = t;
    t = 0;
    do {
      var a = n.nextSibling;
      if (n.nodeType === 1 ? e ? (n._stashedDisplay = n.style.display, n.style.display = "none") : (n.style.display = n._stashedDisplay || "", n.getAttribute("style") === "" && n.removeAttribute("style")) : n.nodeType === 3 && (e ? (n._stashedText = n.nodeValue, n.nodeValue = "") : n.nodeValue = n._stashedText || ""), a && a.nodeType === 8)
        if (n = a.data, n === "/$") {
          if (t === 0) break;
          t--;
        } else
          n !== "$" && n !== "$?" && n !== "$~" && n !== "$!" || t++;
      n = a;
    } while (n);
  }
  function xp(t, e, n) {
    if (e = CSS.escape(e) !== e ? "r-" + btoa(e).replace(/=/g, "") : e, t.style.viewTransitionName = e, n != null && (t.style.viewTransitionClass = n), n = getComputedStyle(t), n.display === "inline") {
      if (e = t.getClientRects(), e.length === 1) var a = 1;
      else
        for (var s = a = 0; s < e.length; s++) {
          var o = e[s];
          0 < o.width && 0 < o.height && a++;
        }
      a === 1 && (t = t.style, t.display = e.length === 1 ? "inline-block" : "block", t.marginTop = "-" + n.paddingTop, t.marginBottom = "-" + n.paddingBottom);
    }
  }
  function Ap(t, e) {
    t = t.style, e = e.style;
    var n = e != null ? e.hasOwnProperty("viewTransitionName") ? e.viewTransitionName : e.hasOwnProperty("view-transition-name") ? e["view-transition-name"] : null : null;
    t.viewTransitionName = n == null || typeof n == "boolean" ? "" : ("" + n).trim(), n = e != null ? e.hasOwnProperty("viewTransitionClass") ? e.viewTransitionClass : e.hasOwnProperty("view-transition-class") ? e["view-transition-class"] : null : null, t.viewTransitionClass = n == null || typeof n == "boolean" ? "" : ("" + n).trim(), t.display === "inline-block" && (e == null ? t.display = t.margin = "" : (n = e.display, t.display = n == null || typeof n == "boolean" ? "" : n, n = e.margin, n != null ? t.margin = n : (n = e.hasOwnProperty("marginTop") ? e.marginTop : e["margin-top"], t.marginTop = n == null || typeof n == "boolean" ? "" : n, e = e.hasOwnProperty("marginBottom") ? e.marginBottom : e["margin-bottom"], t.marginBottom = e == null || typeof e == "boolean" ? "" : e)));
  }
  function PS(t, e, n) {
    return n = n.ownerDocument.defaultView, {
      rect: t,
      abs: e.position === "absolute" || e.position === "fixed",
      clip: e.clipPath !== "none" || e.overflow !== "visible" || e.filter !== "none" || e.mask !== "none" || e.mask !== "none" || e.borderRadius !== "0px",
      view: 0 <= t.bottom && 0 <= t.right && t.top <= n.innerHeight && t.left <= n.innerWidth
    };
  }
  function Kc(t) {
    var e = t.getBoundingClientRect(), n = getComputedStyle(t);
    return PS(e, n, t);
  }
  function IS(t) {
    return t.documentElement.clientHeight;
  }
  function WS(t) {
    this.addEventListener("load", t), this.addEventListener("error", t);
  }
  function $S(t, e, n, a, s, o, f, g, S) {
    var C = e.nodeType === 9 ? e : e.ownerDocument;
    try {
      var R = C.startViewTransition({
        update: function() {
          var A = C.defaultView, z = A.navigation && A.navigation.transition, K = C.fonts.status;
          a();
          var tt = [];
          if (K === "loaded" && (IS(C), C.fonts.status === "loading" && tt.push(C.fonts.ready)), K = tt.length, t !== null)
            for (var gt = t.suspenseyImages, M = 0, E = 0; E < gt.length; E++) {
              var D = gt[E];
              if (!D.complete) {
                var V = D.getBoundingClientRect();
                if (0 < V.bottom && 0 < V.right && V.top < A.innerHeight && V.left < A.innerWidth) {
                  if (M += Zp(D), M > Zo) {
                    tt.length = K;
                    break;
                  }
                  D = new Promise(
                    WS.bind(D)
                  ), tt.push(D);
                }
              }
            }
          if (0 < tt.length)
            return A = Promise.race([
              Promise.all(tt),
              new Promise(function(P) {
                return setTimeout(P, 500);
              })
            ]).then(s, s), (z ? Promise.allSettled([z.finished, A]) : A).then(o, o);
          if (s(), z)
            return z.finished.then(
              o,
              o
            );
          o();
        },
        types: n
      });
      C.__reactViewTransition = R;
      var U = [];
      return R.ready.then(
        function() {
          for (var A = C.documentElement.getAnimations({
            subtree: !0
          }), z = 0; z < A.length; z++) {
            var K = A[z], tt = K.effect, gt = tt.pseudoElement;
            if (gt != null && gt.startsWith("::view-transition")) {
              U.push(K), K = tt.getKeyframes();
              for (var M = gt = void 0, E = !0, D = 0; D < K.length; D++) {
                var V = K[D], P = V.width;
                if (gt === void 0) gt = P;
                else if (gt !== P) {
                  E = !1;
                  break;
                }
                if (P = V.height, M === void 0) M = P;
                else if (M !== P) {
                  E = !1;
                  break;
                }
                delete V.width, delete V.height, V.transform === "none" && delete V.transform;
              }
              E && gt !== void 0 && M !== void 0 && (tt.setKeyframes(K), E = getComputedStyle(
                tt.target,
                tt.pseudoElement
              ), E.width !== gt || E.height !== M) && (E = K[0], E.width = gt, E.height = M, E = K[K.length - 1], E.width = gt, E.height = M, tt.setKeyframes(K));
            }
          }
          f();
        },
        function(A) {
          C.__reactViewTransition === R && (C.__reactViewTransition = null);
          try {
            if (typeof A == "object" && A !== null)
              switch (A.name) {
                case "InvalidStateError":
                  (A.message === "View transition was skipped because document visibility state is hidden." || A.message === "Skipping view transition because document visibility state has become hidden." || A.message === "Skipping view transition because viewport size changed." || A.message === "Transition was aborted because of invalid state") && (A = null);
              }
            A !== null && S(A);
          } finally {
            a(), s(), f();
          }
        }
      ), R.finished.finally(function() {
        for (var A = 0; A < U.length; A++)
          U[A].cancel();
        C.__reactViewTransition === R && (C.__reactViewTransition = null), g();
      }), R;
    } catch {
      return a(), s(), f(), null;
    }
  }
  function ti(t, e) {
    this._scope = document.documentElement, this._selector = "::view-transition-" + t + "(" + e + ")";
  }
  ti.prototype.animate = function(t, e) {
    return e = typeof e == "number" ? { duration: e } : Z({}, e), e.pseudoElement = this._selector, this._scope.animate(t, e);
  }, ti.prototype.getAnimations = function() {
    for (var t = this._scope, e = this._selector, n = t.getAnimations({ subtree: !0 }), a = [], s = 0; s < n.length; s++) {
      var o = n[s].effect;
      o !== null && o.target === t && o.pseudoElement === e && a.push(n[s]);
    }
    return a;
  }, ti.prototype.getComputedStyle = function() {
    return getComputedStyle(this._scope, this._selector);
  };
  function Mp(t) {
    return {
      name: t,
      group: new ti("group", t),
      imagePair: new ti("image-pair", t),
      old: new ti("old", t),
      new: new ti("new", t)
    };
  }
  function Ze(t) {
    this._fragmentFiber = t, this._observers = this._eventListeners = null;
  }
  Ze.prototype.addEventListener = function(t, e, n) {
    var a = null, s = null;
    if (!(n != null && typeof n != "boolean" && (a = n.signal || null, a !== null && a.aborted))) {
      this._eventListeners === null && (this._eventListeners = []);
      var o = this._eventListeners;
      if (Dp(o, t, e, n) === -1) {
        var f = this, g = e;
        n != null && typeof n != "boolean" && n.once === !0 && (g = function(S) {
          f.removeEventListener(
            t,
            e,
            n
          ), typeof e == "function" ? e.call(this, S) : e.handleEvent(S);
        }), a !== null && (s = f.removeEventListener.bind(
          f,
          t,
          e,
          n
        ), a.addEventListener("abort", s, { once: !0 }), s = a.removeEventListener.bind(a, "abort", s)), a = Ji(n), o.push({
          type: t,
          listener: e,
          optionsOrUseCapture: n,
          attachedListener: g,
          cleanup: s
        }), p(
          this._fragmentFiber.child,
          !1,
          tT,
          t,
          g,
          a
        );
      }
      this._eventListeners = o;
    }
  };
  function tT(t, e, n, a) {
    return _(t).addEventListener(
      e,
      n,
      a
    ), !1;
  }
  Ze.prototype.removeEventListener = function(t, e, n) {
    var a = this._eventListeners;
    if (a !== null && (e = Dp(
      a,
      t,
      e,
      n
    ), e !== -1)) {
      var s = a[e];
      n = s.attachedListener;
      var o = s.cleanup;
      s = Ji(s.optionsOrUseCapture), p(
        this._fragmentFiber.child,
        !1,
        eT,
        t,
        n,
        s
      ), a.splice(e, 1), o !== null && o();
    }
  };
  function eT(t, e, n, a) {
    return _(t).removeEventListener(
      e,
      n,
      a
    ), !1;
  }
  function Ji(t) {
    return t != null && typeof t != "boolean" && (t.once === !0 || t.signal instanceof AbortSignal) ? { capture: t.capture, passive: t.passive } : t;
  }
  function Cp(t) {
    return t == null ? "c=0" : typeof t == "boolean" ? "c=" + (t ? "1" : "0") : "c=" + (t.capture ? "1" : "0");
  }
  function Dp(t, e, n, a) {
    if (t.length === 0) return -1;
    a = Cp(a);
    for (var s = 0; s < t.length; s++) {
      var o = t[s];
      if (o.type === e && o.listener === n && Cp(o.optionsOrUseCapture) === a)
        return s;
    }
    return -1;
  }
  Ze.prototype.dispatchEvent = function(t) {
    var e = T(
      this._fragmentFiber
    );
    if (e === null) return !0;
    e = _(e);
    var n = this._eventListeners;
    if (n !== null && 0 < n.length || !t.bubbles) {
      var a = e.nodeType === 9 ? e.createComment("") : document.createTextNode("");
      if (n)
        for (var s = 0; s < n.length; s++) {
          var o = n[s];
          a.addEventListener(
            o.type,
            o.attachedListener,
            Ji(o.optionsOrUseCapture)
          );
        }
      if (e.appendChild(a), t = a.dispatchEvent(t), n)
        for (s = 0; s < n.length; s++)
          o = n[s], a.removeEventListener(
            o.type,
            o.attachedListener,
            Ji(o.optionsOrUseCapture)
          );
      return e.removeChild(a), t;
    }
    return e.dispatchEvent(t);
  }, Ze.prototype.focus = function(t) {
    p(
      this._fragmentFiber.child,
      !0,
      zp,
      t,
      void 0,
      void 0
    );
  };
  function zp(t, e) {
    return t.tag === 6 ? !1 : (t = _(t), hT(t, e));
  }
  Ze.prototype.focusLast = function(t) {
    var e = [];
    p(
      this._fragmentFiber.child,
      !0,
      kc,
      e,
      void 0,
      void 0
    );
    for (var n = e.length - 1; 0 <= n && !zp(e[n], t); n--) ;
  };
  function kc(t, e) {
    return e.push(t), !1;
  }
  Ze.prototype.blur = function() {
    var t = T(
      this._fragmentFiber
    );
    t !== null && (t = _(t), t = Pl(t).activeElement, t !== null && p(
      this._fragmentFiber.child,
      !1,
      nT,
      t,
      void 0,
      void 0
    ));
  };
  function nT(t, e) {
    return t.tag === 6 ? !1 : (t = _(t), t === e || t.contains(e) ? (e.blur(), !0) : !1);
  }
  Ze.prototype.observeUsing = function(t) {
    this._observers === null && (this._observers = /* @__PURE__ */ new Set()), this._observers.add(t), p(
      this._fragmentFiber.child,
      !1,
      aT,
      t,
      void 0,
      void 0
    );
  };
  function aT(t, e) {
    return t.tag === 6 || (t = _(t), e.observe(t)), !1;
  }
  Ze.prototype.unobserveUsing = function(t) {
    var e = this._observers;
    if (e !== null && e.has(t)) {
      e.delete(t), p(
        this._fragmentFiber.child,
        !1,
        iT,
        t,
        void 0,
        void 0
      );
      for (var n = e = 0; n < rn.length; n++) {
        var a = rn[n];
        a.fragmentInstance === this && a.observer === t ? t.unobserve(a.instance) : rn[e++] = a;
      }
      rn.length = e;
    }
  };
  function iT(t, e) {
    return t.tag === 6 || (t = _(t), e.unobserve(t)), !1;
  }
  var rn = [], Jc = !1;
  function lT(t, e, n) {
    rn.push({
      fragmentInstance: t,
      observer: e,
      instance: n
    }), Jc || (Jc = !0, mT(function() {
      Jc = !1;
      var a = rn;
      rn = [];
      for (var s = 0; s < a.length; s++) {
        var o = a[s];
        o.observer.unobserve(o.instance);
      }
    }));
  }
  Ze.prototype.getClientRects = function() {
    var t = [];
    return p(
      this._fragmentFiber.child,
      !1,
      sT,
      t,
      void 0,
      void 0
    ), t;
  };
  function sT(t, e) {
    if (t.tag === 6) {
      t = t.stateNode;
      var n = t.ownerDocument.createRange();
      n.selectNodeContents(t), e.push.apply(e, n.getClientRects());
    } else
      t = _(t), e.push.apply(e, t.getClientRects());
    return !1;
  }
  Ze.prototype.getRootNode = function(t) {
    var e = T(
      this._fragmentFiber
    );
    return e === null ? this : _(e).getRootNode(t);
  }, Ze.prototype.compareDocumentPosition = function(t) {
    var e = T(
      this._fragmentFiber
    );
    if (e === null) return Node.DOCUMENT_POSITION_DISCONNECTED;
    var n = [];
    p(
      this._fragmentFiber.child,
      !1,
      kc,
      n,
      void 0,
      void 0
    );
    var a = _(e);
    if (n.length === 0) {
      if (n = a, O(this._fragmentFiber)) {
        t: {
          for (e = this._fragmentFiber.return; e !== null; ) {
            if (e.tag === 4) {
              e = e.stateNode.containerInfo;
              break t;
            }
            if (e.tag === 3 || e.tag === 5 || e.tag === 27)
              break;
            e = e.return;
          }
          e = null;
        }
        e != null && (n = e);
      }
      e = this._fragmentFiber;
      var s = a = n.compareDocumentPosition(t);
      return n === t ? s = Node.DOCUMENT_POSITION_CONTAINS : a & Node.DOCUMENT_POSITION_CONTAINED_BY && (n = w(e)[1], n === null ? s = Node.DOCUMENT_POSITION_PRECEDING : (t = _(n).compareDocumentPosition(
        t
      ), s = t === 0 || t & Node.DOCUMENT_POSITION_FOLLOWING ? Node.DOCUMENT_POSITION_FOLLOWING : Node.DOCUMENT_POSITION_PRECEDING)), s |= Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
    }
    e = _(n[0]), s = _(n[n.length - 1]);
    var o = O(this._fragmentFiber) ? e.parentElement : a;
    if (o == null)
      return Node.DOCUMENT_POSITION_DISCONNECTED;
    a = o.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_CONTAINED_BY, o = o.compareDocumentPosition(s) & Node.DOCUMENT_POSITION_CONTAINED_BY;
    var f = e.compareDocumentPosition(t), g = s.compareDocumentPosition(t), S = f & Node.DOCUMENT_POSITION_CONTAINED_BY || g & Node.DOCUMENT_POSITION_CONTAINED_BY;
    return g = a && o && f & Node.DOCUMENT_POSITION_FOLLOWING && g & Node.DOCUMENT_POSITION_PRECEDING, e = a && e === t || o && s === t || S || g ? Node.DOCUMENT_POSITION_CONTAINED_BY : !a && e === t || !o && s === t ? Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC : f, e & Node.DOCUMENT_POSITION_DISCONNECTED || e & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC || oT(
      e,
      this._fragmentFiber,
      n[0],
      n[n.length - 1],
      t
    ) ? e : Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
  };
  function oT(t, e, n, a, s) {
    var o = _a(s);
    if (t & Node.DOCUMENT_POSITION_CONTAINED_BY) {
      if (n = !!o)
        t: {
          for (; o !== null; ) {
            if (o.tag === 7 && (o === e || o.alternate === e)) {
              n = !0;
              break t;
            }
            o = o.return;
          }
          n = !1;
        }
      return n;
    }
    if (t & Node.DOCUMENT_POSITION_CONTAINS) {
      if (o === null)
        return o = s.ownerDocument, s === o || s === o.documentElement || s === o.body;
      t: {
        for (o = e, e = T(e); o !== null; ) {
          if (!(o.tag !== 5 && o.tag !== 3 && o.tag !== 27 || o !== e && o.alternate !== e)) {
            o = !0;
            break t;
          }
          o = o.return;
        }
        o = !1;
      }
      return o;
    }
    return t & Node.DOCUMENT_POSITION_PRECEDING ? ((e = !!o) && !(e = o === n) && (e = ut(
      n,
      o,
      nt
    ), e === null ? e = !1 : (p(
      e,
      !0,
      X,
      o,
      n
    ), o = L, L = null, e = o !== null)), e) : t & Node.DOCUMENT_POSITION_FOLLOWING ? ((e = !!o) && !(e = o === a) && (e = ut(
      a,
      o,
      nt
    ), e === null ? e = !1 : (p(
      e,
      !0,
      Q,
      o,
      a
    ), o = L, H = L = null, e = o !== null)), e) : !1;
  }
  function Op(t, e) {
    var n = t.ownerDocument.createRange();
    n.selectNodeContents(t), t = n.getBoundingClientRect(), window.scrollTo(
      window.scrollX + t.left,
      e ? window.scrollY + t.top : window.scrollY + t.bottom - window.innerHeight
    );
  }
  Ze.prototype.scrollIntoView = function(t) {
    if (typeof t == "object") throw Error(u(566));
    var e = [];
    p(
      this._fragmentFiber.child,
      !1,
      kc,
      e,
      void 0,
      void 0
    );
    var n = t !== !1;
    if (e.length === 0) {
      var a = w(
        this._fragmentFiber
      );
      if (a = n ? a[1] || a[0] || T(this._fragmentFiber) : a[0] || a[1], a === null) return;
      if (a.tag === 6) {
        t = _(a), Op(t, n);
        return;
      }
      if (a = _(a), a.nodeType !== 9) {
        if (a.nodeType === 11) {
          n = "host" in a ? a.host : null, n !== null && n.scrollIntoView(t);
          return;
        }
        a.scrollIntoView(t);
      }
    }
    for (a = n ? e.length - 1 : 0; a !== (n ? -1 : e.length); ) {
      var s = e[a];
      s.tag === 6 ? (s = _(s), Op(s, n)) : _(s).scrollIntoView(t), a += n ? -1 : 1;
    }
  };
  function uT(t, e) {
    return t = _(t), Rp(t, e), !1;
  }
  function Rp(t, e) {
    t.reactFragments == null && (t.reactFragments = /* @__PURE__ */ new Set()), t.reactFragments.add(e);
  }
  function wp(t, e) {
    var n = e._eventListeners;
    if (n !== null)
      for (var a = 0; a < n.length; a++) {
        var s = n[a];
        t.addEventListener(
          s.type,
          s.attachedListener,
          Ji(s.optionsOrUseCapture)
        );
      }
    t.nodeType !== 3 && (n = e._observers, n !== null && n.forEach(function(o) {
      for (var f = 0, g = 0; g < rn.length; g++) {
        var S = rn[g];
        (S.fragmentInstance !== e || S.observer !== o || S.instance !== t) && (rn[f++] = S);
      }
      rn.length = f, o.observe(t);
    }), Rp(t, e));
  }
  function rT(t, e) {
    var n = e._eventListeners;
    if (n !== null)
      for (var a = 0; a < n.length; a++) {
        var s = n[a];
        t.removeEventListener(
          s.type,
          s.attachedListener,
          Ji(s.optionsOrUseCapture)
        );
      }
    t.nodeType !== 3 && (n = e._observers, n !== null && n.forEach(function(o) {
      typeof o.rootMargin == "string" ? lT(
        e,
        o,
        t
      ) : o.unobserve(t);
    }), t.reactFragments != null && t.reactFragments.delete(e));
  }
  function Fc(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var n = e;
      switch (e = e.nextSibling, n.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Fc(n), Ns(n);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (n.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(n);
    }
  }
  function cT(t, e, n, a) {
    for (; t.nodeType === 1; ) {
      var s = n;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!a && (t.nodeName !== "INPUT" || t.type !== "hidden"))
          break;
      } else if (a) {
        if (!t[ml])
          switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (o = t.getAttribute("rel"), o === "stylesheet" && t.hasAttribute("data-precedence"))
                break;
              if (o !== s.rel || t.getAttribute("href") !== (s.href == null || s.href === "" ? null : s.href) || t.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin) || t.getAttribute("title") !== (s.title == null ? null : s.title))
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (o = t.getAttribute("src"), (o !== (s.src == null ? null : s.src) || t.getAttribute("type") !== (s.type == null ? null : s.type) || t.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin)) && o && t.hasAttribute("async") && !t.hasAttribute("itemprop"))
                break;
              return t;
            default:
              return t;
          }
      } else if (e === "input" && t.type === "hidden") {
        var o = s.name == null ? null : "" + s.name;
        if (s.type === "hidden" && t.getAttribute("name") === o)
          return t;
      } else return t;
      if (t = $e(t.nextSibling), t === null) break;
    }
    return null;
  }
  function fT(t, e, n) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !n || (t = $e(t.nextSibling), t === null)) return null;
    return t;
  }
  function Np(t, e) {
    for (; t.nodeType !== 8; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = $e(t.nextSibling), t === null)) return null;
    return t;
  }
  function Pc(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function Ic(t) {
    return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading";
  }
  function dT(t, e) {
    var n = t.ownerDocument;
    if (t.data === "$~") t._reactRetry = e;
    else if (t.data !== "$?" || n.readyState !== "loading")
      e();
    else {
      var a = function() {
        e(), n.removeEventListener("DOMContentLoaded", a);
      };
      n.addEventListener("DOMContentLoaded", a), t._reactRetry = a;
    }
  }
  function $e(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (e = t.data, e === "$" || e === "$!" || e === "$?" || e === "$~" || e === "&" || e === "F!" || e === "F")
          break;
        if (e === "/$" || e === "/&") return null;
      }
    }
    return t;
  }
  var Wc = null;
  function _p(t) {
    t = t.nextSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var n = t.data;
        if (n === "/$" || n === "/&") {
          if (e === 0)
            return $e(t.nextSibling);
          e--;
        } else
          n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&" || e++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function Vp(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var n = t.data;
        if (n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&") {
          if (e === 0) return t;
          e--;
        } else n !== "/$" && n !== "/&" || e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function hT(t, e) {
    function n() {
      a = !0;
    }
    if (t.ownerDocument.activeElement === t) return !0;
    var a = !1;
    try {
      t.ownerDocument.addEventListener("focus", n, !0), (t.focus || HTMLElement.prototype.focus).call(t, e);
    } finally {
      t.ownerDocument.removeEventListener("focus", n, !0);
    }
    return a;
  }
  function mT(t) {
    Sp(function() {
      Sp(function(e) {
        return t(e);
      });
    });
  }
  function Up(t, e, n) {
    switch (e = Pl(n), t) {
      case "html":
        if (t = e.documentElement, !t) throw Error(u(452));
        return t;
      case "head":
        if (t = e.head, !t) throw Error(u(453));
        return t;
      case "body":
        if (t = e.body, !t) throw Error(u(454));
        return t;
      default:
        throw Error(u(451));
    }
  }
  function Bp(t, e, n) {
    for (var a in n) {
      var s = n[a];
      n.hasOwnProperty(a) && s != null && _t(t, e, a, null, XS, s);
    }
    n.dangerouslySetInnerHTML != null && (t.textContent = ""), t.onclick === gn && (t.onclick = null), Ns(t);
  }
  function $c(t) {
    for (var e = t.attributes; e.length; )
      t.removeAttributeNode(e[0]);
    Ns(t);
  }
  var tn = /* @__PURE__ */ new Map(), jp = /* @__PURE__ */ new Set();
  function Il(t) {
    if (typeof t.getRootNode == "function") {
      var e = t.getRootNode();
      if (e.nodeType === 9 || e.nodeType === 11) return e;
    }
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  var Zn = ct.d;
  ct.d = {
    f: gT,
    r: pT,
    D: yT,
    C: vT,
    L: bT,
    m: ST,
    X: ET,
    S: TT,
    M: xT
  };
  function gT() {
    var t = Zn.f(), e = Bo();
    return t || e;
  }
  function pT(t) {
    var e = hi(t);
    e !== null && e.tag === 5 && e.type === "form" ? Hm(e) : Zn.r(t);
  }
  var Fi = typeof document > "u" ? null : document;
  function Lp(t, e, n) {
    var a = Fi;
    if (a && typeof e == "string" && e) {
      var s = Ke(e);
      s = 'link[rel="' + t + '"][href="' + s + '"]', typeof n == "string" && (s += '[crossorigin="' + n + '"]'), jp.has(s) || (jp.add(s), t = { rel: t, crossOrigin: n, href: e }, a.querySelector(s) === null && (e = a.createElement("link"), ge(e, "link", t), le(e), a.head.appendChild(e)));
    }
  }
  function yT(t) {
    Zn.D(t), Lp("dns-prefetch", t, null);
  }
  function vT(t, e) {
    Zn.C(t, e), Lp("preconnect", t, e);
  }
  function bT(t, e, n) {
    Zn.L(t, e, n);
    var a = Fi;
    if (a && t && e) {
      var s = 'link[rel="preload"][as="' + Ke(e) + '"]';
      e === "image" && n && n.imageSrcSet ? (s += '[imagesrcset="' + Ke(
        n.imageSrcSet
      ) + '"]', typeof n.imageSizes == "string" && (s += '[imagesizes="' + Ke(
        n.imageSizes
      ) + '"]')) : s += '[href="' + Ke(t) + '"]';
      var o = s;
      switch (e) {
        case "style":
          o = Pi(t);
          break;
        case "script":
          o = Ii(t);
      }
      if (!(tn.has(o) || (t = Z(
        {
          rel: "preload",
          href: e === "image" && n && n.imageSrcSet ? void 0 : t,
          as: e
        },
        n
      ), tn.set(o, t), a.querySelector(s) !== null || e === "style" && a.querySelector(Wl(o)) || e === "script" && a.querySelector($l(o))))) {
        var f = a.createElement("link");
        ge(f, "link", t), e === "style" && (f[ws] = !0, f.onload = f.onerror = function() {
          Id(f);
        }), le(f), a.head.appendChild(f);
      }
    }
  }
  function ST(t, e) {
    Zn.m(t, e);
    var n = Fi;
    if (n && t) {
      var a = e && typeof e.as == "string" ? e.as : "script", s = 'link[rel="modulepreload"][as="' + Ke(a) + '"][href="' + Ke(t) + '"]', o = s;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          o = Ii(t);
      }
      if (!tn.has(o) && (t = Z({ rel: "modulepreload", href: t }, e), tn.set(o, t), n.querySelector(s) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector($l(o)))
              return;
        }
        a = n.createElement("link"), ge(a, "link", t), le(a), n.head.appendChild(a);
      }
    }
  }
  function TT(t, e, n) {
    Zn.S(t, e, n);
    var a = Fi;
    if (a && t) {
      var s = mi(a).hoistableStyles, o = Pi(t);
      e = e || "default";
      var f = s.get(o);
      if (!f) {
        var g = { loading: 0, preload: null };
        if (f = a.querySelector(
          Wl(o)
        ))
          g.loading = 5;
        else {
          t = Z(
            { rel: "stylesheet", href: t, "data-precedence": e },
            n
          ), (n = tn.get(o)) && tf(t, n);
          var S = f = a.createElement("link");
          le(S), ge(S, "link", t), S._p = new Promise(function(C, R) {
            S.onload = C, S.onerror = R;
          }), S.addEventListener("load", function() {
            g.loading |= 1;
          }), S.addEventListener("error", function() {
            g.loading |= 2;
          }), g.loading |= 4, Xo(f, e, a);
        }
        f = {
          type: "stylesheet",
          instance: f,
          count: 1,
          state: g
        }, s.set(o, f);
      }
    }
  }
  function ET(t, e) {
    Zn.X(t, e);
    var n = Fi;
    if (n && t) {
      var a = mi(n).hoistableScripts, s = Ii(t), o = a.get(s);
      o || (o = n.querySelector($l(s)), o || (t = Z({ src: t, async: !0 }, e), (e = tn.get(s)) && ef(t, e), o = n.createElement("script"), le(o), ge(o, "link", t), n.head.appendChild(o)), o = {
        type: "script",
        instance: o,
        count: 1,
        state: null
      }, a.set(s, o));
    }
  }
  function xT(t, e) {
    Zn.M(t, e);
    var n = Fi;
    if (n && t) {
      var a = mi(n).hoistableScripts, s = Ii(t), o = a.get(s);
      o || (o = n.querySelector($l(s)), o || (t = Z({ src: t, async: !0, type: "module" }, e), (e = tn.get(s)) && ef(t, e), o = n.createElement("script"), le(o), ge(o, "link", t), n.head.appendChild(o)), o = {
        type: "script",
        instance: o,
        count: 1,
        state: null
      }, a.set(s, o));
    }
  }
  function Hp(t, e, n, a) {
    var s = (s = Fn.current) ? Il(s) : null;
    if (!s) throw Error(u(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string" ? (n = Pi(n.href), e = mi(
          s
        ).hoistableStyles, a = e.get(n), a || (a = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, e.set(n, a)), a) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
          t = Pi(n.href);
          var o = mi(
            s
          ).hoistableStyles, f = o.get(t);
          if (f || (s = s.ownerDocument || s, f = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, o.set(t, f), (o = s.querySelector(
            Wl(t)
          )) ? o._p || (f.instance = o, f.state.loading = 5) : (o = tn.get(t), o || (o = {
            rel: "preload",
            as: "style",
            href: n.href,
            crossOrigin: n.crossOrigin,
            integrity: n.integrity,
            media: n.media,
            hrefLang: n.hrefLang,
            referrerPolicy: n.referrerPolicy
          }, tn.set(t, o)), AT(
            s,
            t,
            o,
            f.state
          ))), e && a === null)
            throw Error(u(528, ""));
          return f;
        }
        if (e && a !== null)
          throw Error(u(529, ""));
        return null;
      case "script":
        return e = n.async, n = n.src, typeof n == "string" && e && typeof e != "function" && typeof e != "symbol" ? (n = Ii(n), e = mi(
          s
        ).hoistableScripts, a = e.get(n), a || (a = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, e.set(n, a)), a) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(u(444, t));
    }
  }
  function Pi(t) {
    return 'href="' + Ke(t) + '"';
  }
  function Wl(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function Gp(t) {
    return Z({}, t, {
      "data-precedence": t.precedence,
      precedence: null
    });
  }
  function AT(t, e, n, a) {
    if (e = t.querySelector(
      'link[rel="preload"][as="style"][' + e + "]"
    )) {
      if (e[ws] !== !0) {
        a.loading = 1;
        return;
      }
    } else
      e = t.createElement("link"), e[ws] = !0, e.onload = e.onerror = Id.bind(null, e), ge(e, "link", n), le(e), t.head.appendChild(e);
    a.preload = e, e.addEventListener("load", function() {
      return a.loading |= 1;
    }), e.addEventListener("error", function() {
      return a.loading |= 2;
    });
  }
  function Ii(t) {
    return '[src="' + Ke(t) + '"]';
  }
  function $l(t) {
    return "script[async]" + t;
  }
  function Yp(t, e, n) {
    if (e.count++, e.instance === null)
      switch (e.type) {
        case "style":
          var a = t.querySelector(
            'style[data-href~="' + Ke(n.href) + '"]'
          );
          if (a)
            return e.instance = a, le(a), a;
          var s = Z({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null
          });
          return a = (t.ownerDocument || t).createElement(
            "style"
          ), le(a), ge(a, "style", s), Xo(a, n.precedence, t), e.instance = a;
        case "stylesheet":
          s = Pi(n.href);
          var o = t.querySelector(
            Wl(s)
          );
          if (o)
            return e.state.loading |= 4, e.instance = o, le(o), o;
          a = Gp(n), (s = tn.get(s)) && tf(a, s), o = (t.ownerDocument || t).createElement("link"), le(o);
          var f = o;
          return f._p = new Promise(function(g, S) {
            f.onload = g, f.onerror = S;
          }), ge(o, "link", a), e.state.loading |= 4, Xo(o, n.precedence, t), e.instance = o;
        case "script":
          return o = Ii(n.src), (s = t.querySelector(
            $l(o)
          )) ? (e.instance = s, le(s), s) : (a = n, (s = tn.get(o)) && (a = Z({}, n), ef(a, s)), t = t.ownerDocument || t, s = t.createElement("script"), le(s), ge(s, "link", a), t.head.appendChild(s), e.instance = s);
        case "void":
          return null;
        default:
          throw Error(u(443, e.type));
      }
    else
      e.type === "stylesheet" && (e.state.loading & 4) === 0 && (a = e.instance, e.state.loading |= 4, Xo(a, n.precedence, t));
    return e.instance;
  }
  function Xo(t, e, n) {
    for (var a = n.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), s = a.length ? a[a.length - 1] : null, o = s, f = 0; f < a.length; f++) {
      var g = a[f];
      if (g.dataset.precedence === e) o = g;
      else if (o !== s) break;
    }
    o ? o.parentNode.insertBefore(t, o.nextSibling) : (e = n.nodeType === 9 ? n.head : n, e.insertBefore(t, e.firstChild));
  }
  function tf(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title);
  }
  function ef(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity);
  }
  var Qo = null;
  function qp(t, e, n) {
    if (Qo === null) {
      var a = /* @__PURE__ */ new Map(), s = Qo = /* @__PURE__ */ new Map();
      s.set(n, a);
    } else
      s = Qo, a = s.get(n), a || (a = /* @__PURE__ */ new Map(), s.set(n, a));
    if (a.has(t)) return a;
    for (a.set(t, null), n = n.getElementsByTagName(t), s = 0; s < n.length; s++) {
      var o = n[s];
      if (!(o[ml] || o[ce] || t === "link" && o.getAttribute("rel") === "stylesheet") && o.namespaceURI !== "http://www.w3.org/2000/svg") {
        var f = o.getAttribute(e) || "";
        f = t + f;
        var g = a.get(f);
        g ? g.push(o) : a.set(f, [o]);
      }
    }
    return a;
  }
  function nf(t, e, n) {
    t = t.ownerDocument || t, t.head.insertBefore(
      n,
      e === "title" ? t.querySelector("head > title") : null
    );
  }
  function MT(t, e, n) {
    if (n === 1 || e.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof e.precedence != "string" || typeof e.href != "string" || e.href === "")
          break;
        return !0;
      case "link":
        if (typeof e.rel != "string" || typeof e.href != "string" || e.href === "" || e.onLoad || e.onError)
          break;
        switch (e.rel) {
          case "stylesheet":
            return t = e.disabled, typeof e.precedence == "string" && t == null;
          default:
            return !0;
        }
      case "script":
        if (e.async && typeof e.async != "function" && typeof e.async != "symbol" && !e.onLoad && !e.onError && e.src && typeof e.src == "string")
          return !0;
    }
    return !1;
  }
  function Xp(t, e) {
    return t === "img" && e.src != null && e.src !== "" && e.onLoad == null && e.loading !== "lazy";
  }
  function Qp(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function Zp(t) {
    return (t.width || 100) * (t.height || 100) * (typeof devicePixelRatio == "number" ? devicePixelRatio : 1) * 0.25;
  }
  function Kp(t, e) {
    typeof e.decode == "function" && (t.imgCount++, e.complete || (t.imgBytes += Zp(e), t.suspenseyImages.push(e)), t = zT.bind(t), e.decode().then(t, t));
  }
  function CT(t, e, n, a) {
    if (n.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var s = Pi(a.href), o = e.querySelector(
          Wl(s)
        );
        if (o) {
          e = o._p, e !== null && typeof e == "object" && typeof e.then == "function" && (t.count++, t = ts.bind(t), e.then(t, t)), n.state.loading |= 4, n.instance = o, le(o);
          return;
        }
        o = e.ownerDocument || e, a = Gp(a), (s = tn.get(s)) && tf(a, s), o = o.createElement("link"), le(o);
        var f = o;
        f._p = new Promise(function(g, S) {
          f.onload = g, f.onerror = S;
        }), ge(o, "link", a), n.instance = o;
      }
      t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(n, e), (e = n.state.preload) && (n.state.loading & 3) === 0 && (t.count++, n = ts.bind(t), e.addEventListener("load", n), e.addEventListener("error", n));
    }
  }
  var Zo = 0;
  function DT(t, e) {
    return t.stylesheets && t.count === 0 && ko(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(n) {
      var a = setTimeout(function() {
        if (t.stylesheets && ko(t, t.stylesheets), t.unsuspend) {
          var o = t.unsuspend;
          t.unsuspend = null, o();
        }
      }, 6e4 + e);
      0 < t.imgBytes && Zo === 0 && (Zo = 62500 * ZS());
      var s = setTimeout(
        function() {
          if (t.waitingForImages = !1, t.count === 0 && (t.stylesheets && ko(t, t.stylesheets), t.unsuspend)) {
            var o = t.unsuspend;
            t.unsuspend = null, o();
          }
        },
        (t.imgBytes > Zo ? 50 : 800) + e
      );
      return t.unsuspend = n, function() {
        t.unsuspend = null, clearTimeout(a), clearTimeout(s);
      };
    } : null;
  }
  function kp(t) {
    if (t.count === 0 && (t.imgCount === 0 || !t.waitingForImages)) {
      if (t.stylesheets) ko(t, t.stylesheets);
      else if (t.unsuspend) {
        var e = t.unsuspend;
        t.unsuspend = null, e();
      }
    }
  }
  function ts() {
    this.count--, kp(this);
  }
  function zT() {
    this.imgCount--, kp(this);
  }
  var Ko = null;
  function ko(t, e) {
    t.stylesheets = null, t.unsuspend !== null && (t.count++, Ko = /* @__PURE__ */ new Map(), e.forEach(OT, t), Ko = null, ts.call(t));
  }
  function OT(t, e) {
    if (!(e.state.loading & 4)) {
      var n = Ko.get(t);
      if (n) var a = n.get(null);
      else {
        n = /* @__PURE__ */ new Map(), Ko.set(t, n);
        for (var s = t.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), o = 0; o < s.length; o++) {
          var f = s[o];
          (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") && (n.set(f.dataset.precedence, f), a = f);
        }
        a && n.set(null, a);
      }
      s = e.instance, f = s.getAttribute("data-precedence"), o = n.get(f) || a, o === a && n.set(null, s), n.set(f, s), this.count++, a = ts.bind(this), s.addEventListener("load", a), s.addEventListener("error", a), o ? o.parentNode.insertBefore(s, o.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(s, t.firstChild)), e.state.loading |= 4;
    }
  }
  var Wi = {
    $$typeof: St,
    Provider: null,
    Consumer: null,
    _currentValue: Ve,
    _currentValue2: Ve,
    _threadCount: 0
  };
  function RT(t, e, n, a, s, o, f, g, S) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Bu(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Bu(0), this.hiddenUpdates = Bu(null), this.identifierPrefix = a, this.onUncaughtError = s, this.onCaughtError = o, this.onRecoverableError = f, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = S, this.transitionTypes = null, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Jp(t, e, n, a, s, o, f, g, S, C, R, U) {
    return t = new RT(
      t,
      e,
      n,
      f,
      S,
      C,
      R,
      U,
      g
    ), e = 1, o === !0 && (e |= 24), o = De(3, null, null, e), t.current = o, o.stateNode = t, e = yr(), e.refCount++, t.pooledCache = e, e.refCount++, o.memoizedState = {
      element: a,
      isDehydrated: n,
      cache: e
    }, Tr(o), t;
  }
  function Fp(t) {
    return t ? (t = Ai, t) : Ai;
  }
  function Pp(t, e, n, a, s, o) {
    s = Fp(s), a.context === null ? a.context = s : a.pendingContext = s, a = sa(e), a.payload = { element: n }, o = o === void 0 ? null : o, o !== null && (a.callback = o), n = oa(t, a, e), n !== null && (we(n, t, e), wl(n, t, e));
  }
  function Ip(t, e) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var n = t.retryLane;
      t.retryLane = n !== 0 && n < e ? n : e;
    }
  }
  function af(t, e) {
    Ip(t, e), (t = t.alternate) && Ip(t, e);
  }
  function Wp(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = ja(t, 67108864);
      e !== null && we(e, t, 67108864), af(t, 67108864);
    }
  }
  function $p(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = Qe();
      e = ju(e);
      var n = ja(t, e);
      n !== null && we(n, t, e), af(t, e);
    }
  }
  var $i = !0;
  function wT(t, e, n, a) {
    var s = $.T;
    $.T = null;
    var o = ct.p;
    try {
      ct.p = 2, lf(t, e, n, a);
    } finally {
      ct.p = o, $.T = s;
    }
  }
  function NT(t, e, n, a) {
    var s = $.T;
    $.T = null;
    var o = ct.p;
    try {
      ct.p = 8, lf(t, e, n, a);
    } finally {
      ct.p = o, $.T = s;
    }
  }
  function lf(t, e, n, a) {
    if ($i) {
      var s = sf(a);
      if (s === null)
        Hc(
          t,
          e,
          a,
          Jo,
          n
        ), ey(t, a);
      else if (VT(
        s,
        t,
        e,
        n,
        a
      ))
        a.stopPropagation();
      else if (ey(t, a), e & 4 && -1 < _T.indexOf(t)) {
        for (; s !== null; ) {
          var o = hi(s);
          if (o !== null)
            switch (o.tag) {
              case 3:
                if (o = o.stateNode, o.current.memoizedState.isDehydrated) {
                  var f = Na(o.pendingLanes);
                  if (f !== 0) {
                    var g = o;
                    for (g.pendingLanes |= 2, g.entangledLanes |= 2; f; ) {
                      var S = 1 << 31 - je(f);
                      g.entanglements[1] |= S, f &= ~S;
                    }
                    Mn(o), (Ot & 6) === 0 && (_o = Ue() + 500, kl(0));
                  }
                }
                break;
              case 31:
              case 13:
                g = ja(o, 2), g !== null && we(g, o, 2), Bo(), af(o, 2);
            }
          if (o = sf(a), o === null && Hc(
            t,
            e,
            a,
            Jo,
            n
          ), o === s) break;
          s = o;
        }
        s !== null && a.stopPropagation();
      } else
        Hc(
          t,
          e,
          a,
          null,
          n
        );
    }
  }
  function sf(t) {
    return t = Qu(t), of(t);
  }
  var Jo = null;
  function of(t) {
    if (Jo = null, t = _a(t), t !== null) {
      var e = h(t);
      if (e === null) t = null;
      else {
        var n = e.tag;
        if (n === 13) {
          if (t = d(e), t !== null) return t;
          t = null;
        } else if (n === 31) {
          if (t = m(e), t !== null) return t;
          t = null;
        } else if (n === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return Jo = t, null;
  }
  function ty(t) {
    switch (t) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "fullscreenerror":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "resize":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Zb()) {
          case Hd:
            return 2;
          case Gd:
            return 8;
          case Cs:
          case Kb:
            return 32;
          case Yd:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var uf = !1, ba = null, Sa = null, Ta = null, es = /* @__PURE__ */ new Map(), ns = /* @__PURE__ */ new Map(), Ea = [], _T = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function ey(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        ba = null;
        break;
      case "dragenter":
      case "dragleave":
        Sa = null;
        break;
      case "mouseover":
      case "mouseout":
        Ta = null;
        break;
      case "pointerover":
      case "pointerout":
        es.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ns.delete(e.pointerId);
    }
  }
  function as(t, e, n, a, s, o) {
    return t === null || t.nativeEvent !== o ? (t = {
      blockedOn: e,
      domEventName: n,
      eventSystemFlags: a,
      nativeEvent: o,
      targetContainers: [s]
    }, e !== null && (e = hi(e), e !== null && Wp(e)), t) : (t.eventSystemFlags |= a, e = t.targetContainers, s !== null && e.indexOf(s) === -1 && e.push(s), t);
  }
  function VT(t, e, n, a, s) {
    switch (e) {
      case "focusin":
        return ba = as(
          ba,
          t,
          e,
          n,
          a,
          s
        ), !0;
      case "dragenter":
        return Sa = as(
          Sa,
          t,
          e,
          n,
          a,
          s
        ), !0;
      case "mouseover":
        return Ta = as(
          Ta,
          t,
          e,
          n,
          a,
          s
        ), !0;
      case "pointerover":
        var o = s.pointerId;
        return es.set(
          o,
          as(
            es.get(o) || null,
            t,
            e,
            n,
            a,
            s
          )
        ), !0;
      case "gotpointercapture":
        return o = s.pointerId, ns.set(
          o,
          as(
            ns.get(o) || null,
            t,
            e,
            n,
            a,
            s
          )
        ), !0;
    }
    return !1;
  }
  function ny(t) {
    var e = _a(t.target);
    if (e !== null) {
      var n = h(e);
      if (n !== null) {
        if (e = n.tag, e === 13) {
          if (e = d(n), e !== null) {
            t.blockedOn = e, Jd(t.priority, function() {
              $p(n);
            });
            return;
          }
        } else if (e === 31) {
          if (e = m(n), e !== null) {
            t.blockedOn = e, Jd(t.priority, function() {
              $p(n);
            });
            return;
          }
        } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function Fo(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var n = sf(t.nativeEvent);
      if (n === null) {
        n = t.nativeEvent;
        var a = new n.constructor(
          n.type,
          n
        );
        Xu = a, n.target.dispatchEvent(a), Xu = null;
      } else
        return e = hi(n), e !== null && Wp(e), t.blockedOn = n, !1;
      e.shift();
    }
    return !0;
  }
  function ay(t, e, n) {
    Fo(t) && n.delete(e);
  }
  function UT() {
    uf = !1, ba !== null && Fo(ba) && (ba = null), Sa !== null && Fo(Sa) && (Sa = null), Ta !== null && Fo(Ta) && (Ta = null), es.forEach(ay), ns.forEach(ay);
  }
  function Po(t, e) {
    t.blockedOn === e && (t.blockedOn = null, uf || (uf = !0, i.unstable_scheduleCallback(
      i.unstable_NormalPriority,
      UT
    )));
  }
  var Io = null;
  function iy(t) {
    Io !== t && (Io = t, i.unstable_scheduleCallback(
      i.unstable_NormalPriority,
      function() {
        Io === t && (Io = null);
        for (var e = 0; e < t.length; e += 3) {
          var n = t[e], a = t[e + 1], s = t[e + 2];
          if (typeof a != "function") {
            if (of(a || n) === null)
              continue;
            break;
          }
          var o = hi(n);
          o !== null && (t.splice(e, 3), e -= 3, qr(
            o,
            {
              pending: !0,
              data: s,
              method: n.method,
              action: a
            },
            a,
            s
          ));
        }
      }
    ));
  }
  function tl(t) {
    function e(S) {
      return Po(S, t);
    }
    ba !== null && Po(ba, t), Sa !== null && Po(Sa, t), Ta !== null && Po(Ta, t), es.forEach(e), ns.forEach(e);
    for (var n = 0; n < Ea.length; n++) {
      var a = Ea[n];
      a.blockedOn === t && (a.blockedOn = null);
    }
    for (; 0 < Ea.length && (n = Ea[0], n.blockedOn === null); )
      ny(n), n.blockedOn === null && Ea.shift();
    if (n = (t.ownerDocument || t).$$reactFormReplay, n != null)
      for (a = 0; a < n.length; a += 3) {
        var s = n[a], o = n[a + 1], f = s[Ce] || null;
        if (typeof o == "function")
          f || iy(n);
        else if (f) {
          var g = null;
          if (o && o.hasAttribute("formAction")) {
            if (s = o, f = o[Ce] || null)
              g = f.formAction;
            else if (of(s) !== null) continue;
          } else g = f.action;
          typeof g == "function" ? n[a + 1] = g : (n.splice(a, 3), a -= 3), iy(n);
        }
      }
  }
  function ly() {
    function t(o) {
      o.canIntercept && o.info === "react-transition" && o.intercept({
        handler: function() {
          return new Promise(function(f) {
            return s = f;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function e() {
      s !== null && (s(), s = null), a || setTimeout(n, 20);
    }
    function n() {
      if (!a && !navigation.transition) {
        var o = navigation.currentEntry;
        o && o.url != null && navigation.navigate(o.url, {
          state: o.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var a = !1, s = null;
      return navigation.addEventListener("navigate", t), navigation.addEventListener("navigatesuccess", e), navigation.addEventListener("navigateerror", e), setTimeout(n, 100), function() {
        a = !0, navigation.removeEventListener("navigate", t), navigation.removeEventListener("navigatesuccess", e), navigation.removeEventListener("navigateerror", e), s !== null && (s(), s = null);
      };
    }
  }
  function rf(t) {
    this._internalRoot = t;
  }
  Wo.prototype.render = rf.prototype.render = function(t) {
    var e = this._internalRoot;
    if (e === null) throw Error(u(409));
    var n = e.current, a = Qe();
    Pp(n, a, t, e, null, null);
  }, Wo.prototype.unmount = rf.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var e = t.containerInfo;
      Pp(t.current, 2, null, t, null, null), Bo(), e[di] = null;
    }
  };
  function Wo(t) {
    this._internalRoot = t;
  }
  Wo.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var e = kd();
      t = { blockedOn: null, target: t, priority: e };
      for (var n = 0; n < Ea.length && e !== 0 && e < Ea[n].priority; n++) ;
      Ea.splice(n, 0, t), n === 0 && ny(t);
    }
  };
  var sy = l.version;
  if (sy !== "19.3.0")
    throw Error(
      u(
        527,
        sy,
        "19.3.0"
      )
    );
  ct.findDOMNode = function(t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function" ? Error(u(188)) : (t = Object.keys(t).join(","), Error(u(268, t)));
    return t = y(e), t = t !== null ? b(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var BT = {
    bundleType: 0,
    version: "19.3.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: $,
    reconcilerVersion: "19.3.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var $o = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!$o.isDisabled && $o.supportsFiber)
      try {
        fl = $o.inject(
          BT
        ), Be = $o;
      } catch {
      }
  }
  return ls.createRoot = function(t, e) {
    if (!c(t)) throw Error(u(299));
    var n = !1, a = "", s = Fm, o = Pm, f = Im;
    return e != null && (e.unstable_strictMode === !0 && (n = !0), e.identifierPrefix !== void 0 && (a = e.identifierPrefix), e.onUncaughtError !== void 0 && (s = e.onUncaughtError), e.onCaughtError !== void 0 && (o = e.onCaughtError), e.onRecoverableError !== void 0 && (f = e.onRecoverableError)), e = Jp(
      t,
      1,
      !1,
      null,
      null,
      n,
      a,
      null,
      s,
      o,
      f,
      ly
    ), t[di] = e.current, Lc(t), new rf(e);
  }, ls.hydrateRoot = function(t, e, n) {
    if (!c(t)) throw Error(u(299));
    var a = !1, s = "", o = Fm, f = Pm, g = Im, S = null;
    return n != null && (n.unstable_strictMode === !0 && (a = !0), n.identifierPrefix !== void 0 && (s = n.identifierPrefix), n.onUncaughtError !== void 0 && (o = n.onUncaughtError), n.onCaughtError !== void 0 && (f = n.onCaughtError), n.onRecoverableError !== void 0 && (g = n.onRecoverableError), n.formState !== void 0 && (S = n.formState)), e = Jp(
      t,
      1,
      !0,
      e,
      n ?? null,
      a,
      s,
      S,
      o,
      f,
      g,
      ly
    ), e.context = Fp(null), n = e.current, a = Qe(), a = ju(a), s = sa(a), s.callback = null, oa(n, s, a), n = a, e.current.lanes = n, hl(e, n), Mn(e), t[di] = e.current, Lc(t), new Wo(e);
  }, ls.version = "19.3.0", ls;
}
var py;
function KT() {
  if (py) return df.exports;
  py = 1;
  function i() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (l) {
        console.error(l);
      }
  }
  return i(), df.exports = ZT(), df.exports;
}
var kT = KT();
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const JT = (i) => i.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), q0 = (...i) => i.filter((l, r, u) => !!l && l.trim() !== "" && u.indexOf(l) === r).join(" ").trim();
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var FT = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const PT = F.forwardRef(
  ({
    color: i = "currentColor",
    size: l = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: u,
    className: c = "",
    children: h,
    iconNode: d,
    ...m
  }, v) => F.createElement(
    "svg",
    {
      ref: v,
      ...FT,
      width: l,
      height: l,
      stroke: i,
      strokeWidth: u ? Number(r) * 24 / Number(l) : r,
      className: q0("lucide", c),
      ...m
    },
    [
      ...d.map(([y, b]) => F.createElement(y, b)),
      ...Array.isArray(h) ? h : [h]
    ]
  )
);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ui = (i, l) => {
  const r = F.forwardRef(
    ({ className: u, ...c }, h) => F.createElement(PT, {
      ref: h,
      iconNode: l,
      className: q0(`lucide-${JT(i)}`, u),
      ...c
    })
  );
  return r.displayName = `${i}`, r;
};
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const IT = ui("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const WT = ui("ArrowUpRight", [
  ["path", { d: "M7 7h10v10", key: "1tivn9" }],
  ["path", { d: "M7 17 17 7", key: "1vkiza" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $T = ui("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tE = ui("Flag", [
  ["path", { d: "M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z", key: "i9b6wo" }],
  ["line", { x1: "4", x2: "4", y1: "22", y2: "15", key: "1cm3nv" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const eE = ui("Settings2", [
  ["path", { d: "M20 7h-9", key: "3s1dr2" }],
  ["path", { d: "M14 17H5", key: "gfn3mx" }],
  ["circle", { cx: "17", cy: "17", r: "3", key: "18b49y" }],
  ["circle", { cx: "7", cy: "7", r: "3", key: "dfmy0x" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nE = ui("Volume2", [
  [
    "path",
    {
      d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
      key: "uqj9uw"
    }
  ],
  ["path", { d: "M16 9a5 5 0 0 1 0 6", key: "1q6k2b" }],
  ["path", { d: "M19.364 18.364a9 9 0 0 0 0-12.728", key: "ijwkga" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const aE = ui("VolumeX", [
  [
    "path",
    {
      d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
      key: "uqj9uw"
    }
  ],
  ["line", { x1: "22", x2: "16", y1: "9", y2: "15", key: "1ewh16" }],
  ["line", { x1: "16", x2: "22", y1: "9", y2: "15", key: "5ykzw1" }]
]), X0 = F.createContext({});
function iE(i) {
  const l = F.useRef(null);
  return l.current === null && (l.current = i()), l.current;
}
const lE = typeof window < "u", sE = lE ? F.useLayoutEffect : F.useEffect, od = /* @__PURE__ */ F.createContext(null);
function ud(i, l) {
  i.indexOf(l) === -1 && i.push(l);
}
function hu(i, l) {
  const r = i.indexOf(l);
  r > -1 && i.splice(r, 1);
}
const Rn = (i, l, r) => r > l ? l : r < i ? i : r;
function yy(i, l) {
  return l ? `${i}. For more information and steps for solving, visit https://motion.dev/troubleshooting/${l}` : i;
}
let vs = () => {
}, Da = () => {
};
var Y0;
typeof process < "u" && ((Y0 = process.env) == null ? void 0 : Y0.NODE_ENV) !== "production" && (vs = (i, l, r) => {
  !i && typeof console < "u" && console.warn(yy(l, r));
}, Da = (i, l, r) => {
  if (!i)
    throw new Error(yy(l, r));
});
const za = {}, Q0 = (i) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(i), Z0 = (i) => typeof i == "object" && i !== null, K0 = (i) => /^0[^.\s]+$/u.test(i);
// @__NO_SIDE_EFFECTS__
function k0(i) {
  let l;
  return () => (l === void 0 && (l = i()), l);
}
const nn = /* @__NO_SIDE_EFFECTS__ */ (i) => i, bs = (...i) => i.reduce((l, r) => (u) => r(l(u))), ms = /* @__NO_SIDE_EFFECTS__ */ (i, l, r) => {
  const u = l - i;
  return u ? (r - i) / u : 1;
};
class rd {
  constructor() {
    this.subscriptions = [];
  }
  add(l) {
    return ud(this.subscriptions, l), () => hu(this.subscriptions, l);
  }
  notify(l, r, u) {
    const c = this.subscriptions.length;
    if (c)
      if (c === 1)
        this.subscriptions[0](l, r, u);
      else
        for (let h = 0; h < c; h++) {
          const d = this.subscriptions[h];
          d && d(l, r, u);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const Ne = /* @__NO_SIDE_EFFECTS__ */ (i) => i * 1e3, en = /* @__NO_SIDE_EFFECTS__ */ (i) => i / 1e3, J0 = /* @__NO_SIDE_EFFECTS__ */ (i, l) => l ? i * (1e3 / l) : 0, F0 = (i, l, r) => (((1 - 3 * r + 3 * l) * i + (3 * r - 6 * l)) * i + 3 * l) * i, oE = 1e-7, uE = 12;
function rE(i, l, r, u, c) {
  let h, d, m = 0;
  do
    d = l + (r - l) / 2, h = F0(d, u, c) - i, h > 0 ? r = d : l = d;
  while (Math.abs(h) > oE && ++m < uE);
  return d;
}
// @__NO_SIDE_EFFECTS__
function Ss(i, l, r, u) {
  if (i === l && r === u)
    return nn;
  const c = (h) => rE(h, 0, 1, i, r);
  return (h) => h === 0 || h === 1 ? h : F0(c(h), l, u);
}
const P0 = /* @__NO_SIDE_EFFECTS__ */ (i) => (l) => l <= 0.5 ? i(2 * l) / 2 : (2 - i(2 * (1 - l))) / 2, I0 = /* @__NO_SIDE_EFFECTS__ */ (i) => (l) => 1 - i(1 - l), W0 = /* @__PURE__ */ Ss(0.33, 1.53, 0.69, 0.99), cd = /* @__PURE__ */ I0(W0), $0 = /* @__PURE__ */ P0(cd), tv = (i) => i >= 1 ? 1 : (i *= 2) < 1 ? 0.5 * cd(i) : 0.5 * (2 - Math.pow(2, -10 * (i - 1))), fd = (i) => 1 - Math.sin(Math.acos(i)), ev = /* @__PURE__ */ I0(fd), nv = /* @__PURE__ */ P0(fd), cE = /* @__PURE__ */ Ss(0.42, 0, 1, 1), fE = /* @__PURE__ */ Ss(0, 0, 0.58, 1), av = /* @__PURE__ */ Ss(0.42, 0, 0.58, 1), dE = /* @__NO_SIDE_EFFECTS__ */ (i) => Array.isArray(i) && typeof i[0] != "number", iv = /* @__NO_SIDE_EFFECTS__ */ (i) => Array.isArray(i) && typeof i[0] == "number", vy = {
  linear: nn,
  easeIn: cE,
  easeInOut: av,
  easeOut: fE,
  circIn: fd,
  circInOut: nv,
  circOut: ev,
  backIn: cd,
  backInOut: $0,
  backOut: W0,
  anticipate: tv
}, hE = (i) => typeof i == "string", by = (i) => {
  if (/* @__PURE__ */ iv(i)) {
    Da(i.length === 4, "Cubic bezier arrays must contain four numerical values.", "cubic-bezier-length");
    const [l, r, u, c] = i;
    return /* @__PURE__ */ Ss(l, r, u, c);
  } else if (hE(i))
    return Da(vy[i] !== void 0, `Invalid easing type '${i}'`, "invalid-easing-type"), vy[i];
  return i;
}, tu = [
  "setup",
  // Compute
  "read",
  // Read
  "resolveKeyframes",
  // Write/Read/Write/Read
  "preUpdate",
  // Compute
  "update",
  // Compute
  "preRender",
  // Compute
  "render",
  // Write
  "postRender"
  // Compute
];
function mE(i) {
  let l = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Set(), u = !1, c = !1;
  const h = /* @__PURE__ */ new WeakSet();
  let d = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  };
  function m(y) {
    h.has(y) && (v.schedule(y), i()), y(d);
  }
  const v = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (y, b = !1, p = !1) => {
      const O = p && u ? l : r;
      return b && h.add(y), O.add(y), y;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (y) => {
      r.delete(y), h.delete(y);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (y) => {
      if (d = y, u) {
        c = !0;
        return;
      }
      u = !0;
      const b = l;
      l = r, r = b, l.forEach(m), l.clear(), u = !1, c && (c = !1, v.process(y));
    }
  };
  return v;
}
const gE = 40;
function lv(i, l) {
  let r = !1, u = !0;
  const c = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, h = () => r = !0, d = tu.reduce((X, Q) => (X[Q] = mE(h), X), {}), { setup: m, read: v, resolveKeyframes: y, preUpdate: b, update: p, preRender: T, render: O, postRender: w } = d, B = () => {
    const X = za.useManualTiming, Q = X ? c.timestamp : performance.now();
    r = !1, X || (c.delta = u ? 1e3 / 60 : Math.max(Math.min(Q - c.timestamp, gE), 1)), c.timestamp = Q, c.isProcessing = !0, m.process(c), v.process(c), y.process(c), b.process(c), p.process(c), T.process(c), O.process(c), w.process(c), c.isProcessing = !1, r && l && (u = !1, i(B));
  }, _ = () => {
    r = !0, u = !0, c.isProcessing || i(B);
  };
  return { schedule: tu.reduce((X, Q) => {
    const nt = d[Q];
    return X[Q] = (ut, Z = !1, N = !1) => (r || _(), nt.schedule(ut, Z, N)), X;
  }, {}), cancel: (X) => {
    for (let Q = 0; Q < tu.length; Q++)
      d[tu[Q]].cancel(X);
  }, state: c, steps: d };
}
const { schedule: Ht, cancel: Oa, state: ye, steps: pf } = /* @__PURE__ */ lv(typeof requestAnimationFrame < "u" ? requestAnimationFrame : nn, !0);
let su;
function pE() {
  su = void 0;
}
const Ae = {
  now: () => (su === void 0 && Ae.set(ye.isProcessing || za.useManualTiming ? ye.timestamp : performance.now()), su),
  set: (i) => {
    su = i, queueMicrotask(pE);
  }
}, sv = (i) => (l) => typeof l == "string" && l.startsWith(i), ov = /* @__PURE__ */ sv("--"), yE = /* @__PURE__ */ sv("var(--"), dd = (i) => yE(i) ? vE.test(i.split("/*")[0].trim()) : !1, vE = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function Sy(i) {
  return typeof i != "string" ? !1 : i.split("/*")[0].includes("var(--");
}
const ol = {
  test: (i) => typeof i == "number",
  parse: parseFloat,
  transform: (i) => i
}, gs = {
  ...ol,
  transform: (i) => Rn(0, 1, i)
}, eu = {
  ...ol,
  default: 1
}, cs = (i) => Math.round(i * 1e5) / 1e5, hd = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function bE(i) {
  return i == null;
}
const SE = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, md = (i, l) => (r) => !!(typeof r == "string" && SE.test(r) && r.startsWith(i) || l && !bE(r) && Object.prototype.hasOwnProperty.call(r, l)), uv = (i, l, r) => (u) => {
  if (typeof u != "string")
    return u;
  const [c, h, d, m] = u.match(hd);
  return {
    [i]: parseFloat(c),
    [l]: parseFloat(h),
    [r]: parseFloat(d),
    alpha: m !== void 0 ? parseFloat(m) : 1
  };
}, TE = (i) => Rn(0, 255, i), yf = {
  ...ol,
  transform: (i) => Math.round(TE(i))
}, ii = {
  test: /* @__PURE__ */ md("rgb", "red"),
  parse: /* @__PURE__ */ uv("red", "green", "blue"),
  transform: ({ red: i, green: l, blue: r, alpha: u = 1 }) => "rgba(" + yf.transform(i) + ", " + yf.transform(l) + ", " + yf.transform(r) + ", " + cs(gs.transform(u)) + ")"
};
function EE(i) {
  let l = "", r = "", u = "", c = "";
  return i.length > 5 ? (l = i.substring(1, 3), r = i.substring(3, 5), u = i.substring(5, 7), c = i.substring(7, 9)) : (l = i.substring(1, 2), r = i.substring(2, 3), u = i.substring(3, 4), c = i.substring(4, 5), l += l, r += r, u += u, c += c), {
    red: parseInt(l, 16),
    green: parseInt(r, 16),
    blue: parseInt(u, 16),
    alpha: c ? parseInt(c, 16) / 255 : 1
  };
}
const Vf = {
  test: /* @__PURE__ */ md("#"),
  parse: EE,
  transform: ii.transform
}, Ts = /* @__NO_SIDE_EFFECTS__ */ (i) => ({
  test: (l) => typeof l == "string" && l.endsWith(i) && l.split(" ").length === 1,
  parse: parseFloat,
  transform: (l) => `${l}${i}`
}), kn = /* @__PURE__ */ Ts("deg"), On = /* @__PURE__ */ Ts("%"), et = /* @__PURE__ */ Ts("px"), xE = /* @__PURE__ */ Ts("vh"), AE = /* @__PURE__ */ Ts("vw"), Ty = {
  ...On,
  parse: (i) => On.parse(i) / 100,
  transform: (i) => On.transform(i * 100)
}, nl = {
  test: /* @__PURE__ */ md("hsl", "hue"),
  parse: /* @__PURE__ */ uv("hue", "saturation", "lightness"),
  transform: ({ hue: i, saturation: l, lightness: r, alpha: u = 1 }) => "hsla(" + Math.round(i) + ", " + On.transform(cs(l)) + ", " + On.transform(cs(r)) + ", " + cs(gs.transform(u)) + ")"
}, ee = {
  test: (i) => ii.test(i) || Vf.test(i) || nl.test(i),
  parse: (i) => ii.test(i) ? ii.parse(i) : nl.test(i) ? nl.parse(i) : Vf.parse(i),
  transform: (i) => typeof i == "string" ? i : i.hasOwnProperty("red") ? ii.transform(i) : nl.transform(i),
  getAnimatableNone: (i) => {
    const l = ee.parse(i);
    return l.alpha = 0, ee.transform(l);
  }
}, ME = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function CE(i) {
  var l, r;
  return isNaN(i) && typeof i == "string" && (((l = i.match(hd)) == null ? void 0 : l.length) || 0) + (((r = i.match(ME)) == null ? void 0 : r.length) || 0) > 0;
}
const rv = "number", cv = "color", DE = "var", zE = "var(", Ey = "${}", OE = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function ll(i) {
  const l = i.toString(), r = [], u = {
    color: [],
    number: [],
    var: []
  }, c = [];
  let h = 0;
  const m = l.replace(OE, (v) => (ee.test(v) ? (u.color.push(h), c.push(cv), r.push(ee.parse(v))) : v.startsWith(zE) ? (u.var.push(h), c.push(DE), r.push(v)) : (u.number.push(h), c.push(rv), r.push(parseFloat(v))), ++h, Ey)).split(Ey);
  return { values: r, split: m, indexes: u, types: c };
}
function RE(i) {
  return ll(i).values;
}
function fv({ split: i, types: l }) {
  const r = i.length;
  return (u) => {
    let c = "";
    for (let h = 0; h < r; h++)
      if (c += i[h], u[h] !== void 0) {
        const d = l[h];
        d === rv ? c += cs(u[h]) : d === cv ? c += ee.transform(u[h]) : c += u[h];
      }
    return c;
  };
}
function wE(i) {
  return fv(ll(i));
}
const NE = (i) => typeof i == "number" ? 0 : ee.test(i) ? ee.getAnimatableNone(i) : i, _E = (i, l) => typeof i == "number" ? l != null && l.trim().endsWith("/") ? i : 0 : NE(i);
function VE(i) {
  const l = ll(i);
  return fv(l)(l.values.map((u, c) => _E(u, l.split[c])));
}
const dn = {
  test: CE,
  parse: RE,
  createTransformer: wE,
  getAnimatableNone: VE
};
function vf(i, l, r) {
  return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? i + (l - i) * 6 * r : r < 1 / 2 ? l : r < 2 / 3 ? i + (l - i) * (2 / 3 - r) * 6 : i;
}
function UE({ hue: i, saturation: l, lightness: r, alpha: u }) {
  i /= 360, l /= 100, r /= 100;
  let c = 0, h = 0, d = 0;
  if (!l)
    c = h = d = r;
  else {
    const m = r < 0.5 ? r * (1 + l) : r + l - r * l, v = 2 * r - m;
    c = vf(v, m, i + 1 / 3), h = vf(v, m, i), d = vf(v, m, i - 1 / 3);
  }
  return {
    red: Math.round(c * 255),
    green: Math.round(h * 255),
    blue: Math.round(d * 255),
    alpha: u
  };
}
function mu(i, l) {
  return (r) => r > 0 ? l : i;
}
const Lt = (i, l, r) => i + (l - i) * r, bf = (i, l, r) => {
  const u = i * i, c = r * (l * l - u) + u;
  return c < 0 ? 0 : Math.sqrt(c);
}, BE = [Vf, ii, nl], jE = (i) => BE.find((l) => l.test(i));
function xy(i) {
  const l = jE(i);
  if (vs(!!l, `'${i}' is not an animatable color. Use the equivalent color code instead.`, "color-not-animatable"), !l)
    return !1;
  let r = l.parse(i);
  return l === nl && (r = UE(r)), r;
}
const Ay = (i, l) => {
  const r = xy(i), u = xy(l);
  if (!r || !u)
    return mu(i, l);
  const c = { ...r };
  return (h) => (c.red = bf(r.red, u.red, h), c.green = bf(r.green, u.green, h), c.blue = bf(r.blue, u.blue, h), c.alpha = Lt(r.alpha, u.alpha, h), ii.transform(c));
}, Uf = /* @__PURE__ */ new Set(["none", "hidden"]);
function LE(i, l) {
  return Uf.has(i) ? (r) => r <= 0 ? i : l : (r) => r >= 1 ? l : i;
}
function HE(i, l) {
  return (r) => Lt(i, l, r);
}
function gd(i) {
  return typeof i == "number" ? HE : typeof i == "string" ? dd(i) ? mu : ee.test(i) ? Ay : qE : Array.isArray(i) ? dv : typeof i == "object" ? ee.test(i) ? Ay : GE : mu;
}
function dv(i, l) {
  const r = [...i], u = r.length, c = i.map((h, d) => gd(h)(h, l[d]));
  return (h) => {
    for (let d = 0; d < u; d++)
      r[d] = c[d](h);
    return r;
  };
}
function GE(i, l) {
  const r = { ...i, ...l }, u = {};
  for (const c in r)
    i[c] !== void 0 && l[c] !== void 0 && (u[c] = gd(i[c])(i[c], l[c]));
  return (c) => {
    for (const h in u)
      r[h] = u[h](c);
    return r;
  };
}
function YE(i, l) {
  const r = [], u = { color: 0, var: 0, number: 0 };
  for (let c = 0; c < l.values.length; c++) {
    const h = l.types[c], d = i.indexes[h][u[h]], m = i.values[d] ?? 0;
    r[c] = m, u[h]++;
  }
  return r;
}
const qE = (i, l) => {
  const r = dn.createTransformer(l), u = ll(i), c = ll(l);
  return u.indexes.var.length === c.indexes.var.length && u.indexes.color.length === c.indexes.color.length && u.indexes.number.length >= c.indexes.number.length ? Uf.has(i) && !c.values.length || Uf.has(l) && !u.values.length ? LE(i, l) : bs(dv(YE(u, c), c.values), r) : (vs(!0, `Complex values '${i}' and '${l}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`, "complex-values-different"), mu(i, l));
};
function hv(i, l, r) {
  return typeof i == "number" && typeof l == "number" && typeof r == "number" ? Lt(i, l, r) : gd(i)(i, l);
}
const XE = (i) => {
  const l = ({ timestamp: r }) => i(r);
  return {
    start: (r = !0) => Ht.update(l, r),
    stop: () => Oa(l),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => ye.isProcessing ? ye.timestamp : Ae.now()
  };
}, mv = (i, l, r = 10) => {
  let u = "";
  const c = Math.max(Math.round(l / r), 2);
  for (let h = 0; h < c; h++)
    u += Math.round(i(h / (c - 1)) * 1e4) / 1e4 + ", ";
  return `linear(${u.substring(0, u.length - 2)})`;
}, gu = 2e4;
function pd(i) {
  let l = 0;
  const r = 50;
  let u = i.next(l);
  for (; !u.done && l < gu; )
    l += r, u = i.next(l);
  return l >= gu ? 1 / 0 : l;
}
function QE(i, l = 100, r) {
  const u = r({ ...i, keyframes: [0, l] }), c = Math.min(pd(u), gu);
  return {
    type: "keyframes",
    ease: (h) => u.next(c * h).value / l,
    duration: /* @__PURE__ */ en(c)
  };
}
const Kt = {
  // Default spring physics
  stiffness: 100,
  damping: 10,
  mass: 1,
  velocity: 0,
  // Default duration/bounce-based options
  duration: 800,
  // in ms
  bounce: 0.3,
  visualDuration: 0.3,
  // in seconds
  // Rest thresholds
  restSpeed: {
    granular: 0.01,
    default: 2
  },
  restDelta: {
    granular: 5e-3,
    default: 0.5
  },
  // Limits
  minDuration: 0.01,
  // in seconds
  maxDuration: 10,
  // in seconds
  minDamping: 0.05,
  maxDamping: 1
};
function Bf(i, l) {
  return i * Math.sqrt(1 - l * l);
}
const ZE = 12;
function KE(i, l, r) {
  let u = r;
  for (let c = 1; c < ZE; c++)
    u = u - i(u) / l(u);
  return u;
}
const Sf = 1e-3;
function kE({ duration: i = Kt.duration, bounce: l = Kt.bounce, velocity: r = Kt.velocity, mass: u = Kt.mass }) {
  let c, h;
  vs(i <= /* @__PURE__ */ Ne(Kt.maxDuration), "Spring duration must be 10 seconds or less", "spring-duration-limit");
  let d = 1 - l;
  d = Rn(Kt.minDamping, Kt.maxDamping, d), i = Rn(Kt.minDuration, Kt.maxDuration, /* @__PURE__ */ en(i)), d < 1 ? (c = (y) => {
    const b = y * d, p = b * i, T = b - r, O = Bf(y, d), w = Math.exp(-p);
    return Sf - T / O * w;
  }, h = (y) => {
    const p = y * d * i, T = p * r + r, O = Math.pow(d, 2) * Math.pow(y, 2) * i, w = Math.exp(-p), B = Bf(Math.pow(y, 2), d);
    return (-c(y) + Sf > 0 ? -1 : 1) * ((T - O) * w) / B;
  }) : (c = (y) => {
    const b = Math.exp(-y * i), p = (y - r) * i + 1;
    return -Sf + b * p;
  }, h = (y) => {
    const b = Math.exp(-y * i), p = (r - y) * (i * i);
    return b * p;
  });
  const m = 5 / i, v = KE(c, h, m);
  if (i = /* @__PURE__ */ Ne(i), isNaN(v))
    return {
      stiffness: Kt.stiffness,
      damping: Kt.damping,
      duration: i
    };
  {
    const y = Math.pow(v, 2) * u;
    return {
      stiffness: y,
      damping: d * 2 * Math.sqrt(u * y),
      duration: i
    };
  }
}
const JE = ["duration", "bounce"], FE = ["stiffness", "damping", "mass"];
function My(i, l) {
  return l.some((r) => i[r] !== void 0);
}
function PE(i) {
  let l = {
    velocity: Kt.velocity,
    stiffness: Kt.stiffness,
    damping: Kt.damping,
    mass: Kt.mass,
    isResolvedFromDuration: !1,
    ...i
  };
  if (!My(i, FE) && My(i, JE))
    if (l.velocity = 0, i.visualDuration) {
      const r = i.visualDuration, u = 2 * Math.PI / (r * 1.2), c = u * u, h = 2 * Rn(0.05, 1, 1 - (i.bounce || 0)) * Math.sqrt(c);
      l = {
        ...l,
        mass: Kt.mass,
        stiffness: c,
        damping: h
      };
    } else {
      const r = kE({ ...i, velocity: 0 });
      l = {
        ...l,
        ...r,
        mass: Kt.mass
      }, l.isResolvedFromDuration = !0;
    }
  return l;
}
function pu(i = Kt.visualDuration, l = Kt.bounce) {
  const r = typeof i != "object" ? {
    visualDuration: i,
    keyframes: [0, 1],
    bounce: l
  } : i;
  let { restSpeed: u, restDelta: c } = r;
  const h = r.keyframes[0], d = r.keyframes[r.keyframes.length - 1], m = { done: !1, value: h }, { stiffness: v, damping: y, mass: b, duration: p, velocity: T, isResolvedFromDuration: O } = PE({
    ...r,
    velocity: -/* @__PURE__ */ en(r.velocity || 0)
  }), w = T || 0, B = y / (2 * Math.sqrt(v * b)), _ = d - h, L = /* @__PURE__ */ en(Math.sqrt(v / b)), H = Math.abs(_) < 5;
  u || (u = H ? Kt.restSpeed.granular : Kt.restSpeed.default), c || (c = H ? Kt.restDelta.granular : Kt.restDelta.default);
  let X, Q, nt, ut, Z, N;
  if (B < 1)
    nt = Bf(L, B), ut = (w + B * L * _) / nt, X = (it) => {
      const pt = Math.exp(-B * L * it);
      return d - pt * (ut * Math.sin(nt * it) + _ * Math.cos(nt * it));
    }, Z = B * L * ut + _ * nt, N = B * L * _ - ut * nt, Q = (it) => Math.exp(-B * L * it) * (Z * Math.sin(nt * it) + N * Math.cos(nt * it));
  else if (B === 1) {
    X = (pt) => d - Math.exp(-L * pt) * (_ + (w + L * _) * pt);
    const it = w + L * _;
    Q = (pt) => Math.exp(-L * pt) * (L * it * pt - w);
  } else {
    const it = L * Math.sqrt(B * B - 1);
    X = (Ut) => {
      const St = Math.exp(-B * L * Ut), Y = Math.min(it * Ut, 300);
      return d - St * ((w + B * L * _) * Math.sinh(Y) + it * _ * Math.cosh(Y)) / it;
    };
    const pt = (w + B * L * _) / it, bt = B * L * pt - _ * it, Xt = B * L * _ - pt * it;
    Q = (Ut) => {
      const St = Math.exp(-B * L * Ut), Y = Math.min(it * Ut, 300);
      return St * (bt * Math.sinh(Y) + Xt * Math.cosh(Y));
    };
  }
  const dt = {
    calculatedDuration: O && p || null,
    velocity: (it) => /* @__PURE__ */ Ne(Q(it)),
    next: (it) => {
      if (!O && B < 1) {
        const bt = Math.exp(-B * L * it), Xt = Math.sin(nt * it), Ut = Math.cos(nt * it), St = d - bt * (ut * Xt + _ * Ut), Y = /* @__PURE__ */ Ne(bt * (Z * Xt + N * Ut));
        return m.done = Math.abs(Y) <= u && Math.abs(d - St) <= c, m.value = m.done ? d : St, m;
      }
      const pt = X(it);
      if (O)
        m.done = it >= p;
      else {
        const bt = /* @__PURE__ */ Ne(Q(it));
        m.done = Math.abs(bt) <= u && Math.abs(d - pt) <= c;
      }
      return m.value = m.done ? d : pt, m;
    },
    toString: () => {
      const it = Math.min(pd(dt), gu), pt = mv((bt) => dt.next(it * bt).value, it, 30);
      return it + "ms " + pt;
    },
    toTransition: () => {
    }
  };
  return dt;
}
pu.applyToOptions = (i) => {
  const l = QE(i, 100, pu);
  return i.ease = l.ease, i.duration = /* @__PURE__ */ Ne(l.duration), i.type = "keyframes", i;
};
const IE = 5;
function gv(i, l, r) {
  const u = Math.max(l - IE, 0);
  return /* @__PURE__ */ J0(r - i(u), l - u);
}
function jf({ keyframes: i, velocity: l = 0, power: r = 0.8, timeConstant: u = 325, bounceDamping: c = 10, bounceStiffness: h = 500, modifyTarget: d, min: m, max: v, restDelta: y = 0.5, restSpeed: b }) {
  const p = i[0], T = {
    done: !1,
    value: p
  }, O = (N) => m !== void 0 && N < m || v !== void 0 && N > v, w = (N) => m === void 0 ? v : v === void 0 || Math.abs(m - N) < Math.abs(v - N) ? m : v;
  let B = r * l;
  const _ = p + B, L = d === void 0 ? _ : d(_);
  L !== _ && (B = L - p);
  const H = (N) => -B * Math.exp(-N / u), X = (N) => L + H(N), Q = (N) => {
    const dt = H(N), it = X(N);
    T.done = Math.abs(dt) <= y, T.value = T.done ? L : it;
  };
  let nt, ut;
  const Z = (N) => {
    O(T.value) && (nt = N, ut = pu({
      keyframes: [T.value, w(T.value)],
      velocity: gv(X, N, T.value),
      // TODO: This should be passing * 1000
      damping: c,
      stiffness: h,
      restDelta: y,
      restSpeed: b
    }));
  };
  return Z(0), {
    calculatedDuration: null,
    next: (N) => {
      let dt = !1;
      return !ut && nt === void 0 && (dt = !0, Q(N), Z(N)), nt !== void 0 && N >= nt ? ut.next(N - nt) : (!dt && Q(N), T);
    }
  };
}
function WE(i, l, r) {
  const u = [], c = r || za.mix || hv, h = i.length - 1;
  for (let d = 0; d < h; d++) {
    let m = c(i[d], i[d + 1]);
    if (l) {
      const v = Array.isArray(l) ? l[d] || nn : l;
      m = bs(v, m);
    }
    u.push(m);
  }
  return u;
}
function $E(i, l, { clamp: r = !0, ease: u, mixer: c } = {}) {
  const h = i.length;
  if (Da(h === l.length, "Both input and output ranges must be the same length", "range-length"), h === 1)
    return () => l[0];
  if (h === 2 && l[0] === l[1])
    return () => l[1];
  const d = i[0] === i[1];
  i[0] > i[h - 1] && (i = [...i].reverse(), l = [...l].reverse());
  const m = WE(l, u, c), v = m.length, y = (b) => {
    if (d && b < i[0])
      return l[0];
    let p = 0;
    if (v > 1)
      for (; p < i.length - 2 && !(b < i[p + 1]); p++)
        ;
    const T = /* @__PURE__ */ ms(i[p], i[p + 1], b);
    return m[p](T);
  };
  return r ? (b) => y(Rn(i[0], i[h - 1], b)) : y;
}
function tx(i, l) {
  const r = i[i.length - 1];
  for (let u = 1; u <= l; u++) {
    const c = /* @__PURE__ */ ms(0, l, u);
    i.push(Lt(r, 1, c));
  }
}
function ex(i) {
  const l = [0];
  return tx(l, i.length - 1), l;
}
function nx(i, l) {
  return i.map((r) => r * l);
}
function ax(i, l) {
  return i.map(() => l || av).splice(0, i.length - 1);
}
function fs({ duration: i = 300, keyframes: l, times: r, ease: u = "easeInOut" }) {
  const c = /* @__PURE__ */ dE(u) ? u.map(by) : by(u), h = {
    done: !1,
    value: l[0]
  }, d = nx(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    r && r.length === l.length ? r : ex(l),
    i
  ), m = $E(d, l, {
    ease: Array.isArray(c) ? c : ax(l, c)
  });
  return {
    calculatedDuration: i,
    next: (v) => (h.value = m(v), h.done = v >= i, h)
  };
}
const ix = (i) => i !== null;
function Mu(i, { repeat: l, repeatType: r = "loop" }, u, c = 1) {
  const h = i.filter(ix), m = c < 0 || l && r !== "loop" && l % 2 === 1 ? 0 : h.length - 1;
  return !m || u === void 0 ? h[m] : u;
}
const lx = {
  decay: jf,
  inertia: jf,
  tween: fs,
  keyframes: fs,
  spring: pu
};
function pv(i) {
  typeof i.type == "string" && (i.type = lx[i.type]);
}
class yd {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise((l) => {
      this.resolve = l;
    });
  }
  notifyFinished() {
    this.resolve();
  }
  /**
   * Allows the animation to be awaited.
   *
   * @deprecated Use `finished` instead.
   */
  then(l, r) {
    return this.finished.then(l, r);
  }
}
const sx = (i) => i / 100;
class yu extends yd {
  constructor(l) {
    super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.delayState = {
      done: !1,
      value: void 0
    }, this.stop = () => {
      var u, c;
      const { motionValue: r } = this.options;
      r && r.updatedAt !== Ae.now() && this.tick(Ae.now()), this.isStopped = !0, this.state !== "idle" && (this.teardown(), (c = (u = this.options).onStop) == null || c.call(u));
    }, this.options = l, this.initAnimation(), this.play(), l.autoplay === !1 && this.pause();
  }
  initAnimation() {
    const { options: l } = this;
    pv(l);
    const { type: r = fs, repeat: u = 0, repeatDelay: c = 0, repeatType: h, velocity: d = 0 } = l;
    let { keyframes: m } = l;
    const v = r || fs;
    v !== fs && typeof m[0] != "number" && (this.mixKeyframes = bs(sx, hv(m[0], m[1])), m = [0, 100]);
    const y = v({ ...l, keyframes: m });
    h === "mirror" && (this.mirroredGenerator = v({
      ...l,
      keyframes: [...m].reverse(),
      velocity: -d
    })), y.calculatedDuration === null && (y.calculatedDuration = pd(y));
    const { calculatedDuration: b } = y;
    this.calculatedDuration = b, this.resolvedDuration = b + c, this.totalDuration = this.resolvedDuration * (u + 1) - c, this.generator = y;
  }
  updateTime(l) {
    const r = Math.round(l - this.startTime) * this.playbackSpeed;
    this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = r;
  }
  tick(l, r = !1) {
    const { generator: u, totalDuration: c, mixKeyframes: h, mirroredGenerator: d, resolvedDuration: m, calculatedDuration: v } = this;
    if (this.startTime === null)
      return u.next(0);
    const { delay: y = 0, keyframes: b, repeat: p, repeatType: T, repeatDelay: O, type: w, onUpdate: B, finalKeyframe: _ } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, l) : this.speed < 0 && (this.startTime = Math.min(l - c / this.speed, this.startTime)), r ? this.currentTime = l : this.updateTime(l);
    const L = this.currentTime - y * (this.playbackSpeed >= 0 ? 1 : -1), H = this.playbackSpeed >= 0 ? L < 0 : L > c;
    this.currentTime = Math.max(L, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = c);
    let X = this.currentTime, Q = u;
    if (p) {
      const N = Math.min(this.currentTime, c) / m;
      let dt = Math.floor(N), it = N % 1;
      !it && N >= 1 && (it = 1), it === 1 && dt--, dt = Math.min(dt, p + 1), !!(dt % 2) && (T === "reverse" ? (it = 1 - it, O && (it -= O / m)) : T === "mirror" && (Q = d)), X = Rn(0, 1, it) * m;
    }
    let nt;
    H ? (this.delayState.value = b[0], nt = this.delayState) : nt = Q.next(X), h && !H && (nt.value = h(nt.value));
    let { done: ut } = nt;
    !H && v !== null && (ut = this.playbackSpeed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
    const Z = this.holdTime === null && (this.state === "finished" || this.state === "running" && ut);
    return Z && w !== jf && (nt.value = Mu(b, this.options, _, this.speed)), B && B(nt.value), Z && this.finish(), nt;
  }
  /**
   * Allows the returned animation to be awaited or promise-chained. Currently
   * resolves when the animation finishes at all but in a future update could/should
   * reject if its cancels.
   */
  then(l, r) {
    return this.finished.then(l, r);
  }
  get duration() {
    return /* @__PURE__ */ en(this.calculatedDuration);
  }
  get iterationDuration() {
    const { delay: l = 0 } = this.options || {};
    return this.duration + /* @__PURE__ */ en(l);
  }
  get time() {
    return /* @__PURE__ */ en(this.currentTime);
  }
  set time(l) {
    l = /* @__PURE__ */ Ne(l), this.currentTime = l, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = l : this.driver && (this.startTime = this.driver.now() - l / this.playbackSpeed), this.driver ? this.driver.start(!1) : (this.startTime = 0, this.state = "paused", this.holdTime = l, this.tick(l));
  }
  /**
   * Returns the generator's velocity at the current time in units/second.
   * Uses the analytical derivative when available (springs), avoiding
   * the MotionValue's frame-dependent velocity estimation.
   */
  getGeneratorVelocity() {
    const l = this.currentTime;
    if (l <= 0)
      return this.options.velocity || 0;
    if (this.generator.velocity)
      return this.generator.velocity(l);
    const r = this.generator.next(l).value;
    return gv((u) => this.generator.next(u).value, l, r);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(l) {
    const r = this.playbackSpeed !== l;
    r && this.driver && this.updateTime(Ae.now()), this.playbackSpeed = l, r && this.driver && (this.time = /* @__PURE__ */ en(this.currentTime));
  }
  play() {
    var c, h;
    if (this.isStopped)
      return;
    const { driver: l = XE, startTime: r } = this.options;
    this.driver || (this.driver = l((d) => this.tick(d))), (h = (c = this.options).onPlay) == null || h.call(c);
    const u = this.driver.now();
    this.state === "finished" ? (this.updateFinished(), this.startTime = u) : this.holdTime !== null ? this.startTime = u - this.holdTime : this.startTime || (this.startTime = r ?? u), this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start();
  }
  pause() {
    this.state = "paused", this.updateTime(Ae.now()), this.holdTime = this.currentTime;
  }
  complete() {
    this.state !== "running" && this.play(), this.state = "finished", this.holdTime = null;
  }
  finish() {
    var l, r;
    this.notifyFinished(), this.teardown(), this.state = "finished", (r = (l = this.options).onComplete) == null || r.call(l);
  }
  cancel() {
    var l, r;
    this.holdTime = null, this.startTime = 0, this.tick(0), this.teardown(), (r = (l = this.options).onCancel) == null || r.call(l);
  }
  teardown() {
    this.state = "idle", this.stopDriver(), this.startTime = this.holdTime = null;
  }
  stopDriver() {
    this.driver && (this.driver.stop(), this.driver = void 0);
  }
  sample(l) {
    return this.startTime = 0, this.tick(l, !0);
  }
  attachTimeline(l) {
    var r;
    return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), (r = this.driver) == null || r.stop(), l.observe(this);
  }
}
function ox(i) {
  for (let l = 1; l < i.length; l++)
    i[l] ?? (i[l] = i[l - 1]);
}
const li = (i) => i * 180 / Math.PI, Lf = (i) => {
  const l = li(Math.atan2(i[1], i[0]));
  return Hf(l);
}, ux = {
  x: 4,
  y: 5,
  translateX: 4,
  translateY: 5,
  scaleX: 0,
  scaleY: 3,
  scale: (i) => (Math.abs(i[0]) + Math.abs(i[3])) / 2,
  rotate: Lf,
  rotateZ: Lf,
  skewX: (i) => li(Math.atan(i[1])),
  skewY: (i) => li(Math.atan(i[2])),
  skew: (i) => (Math.abs(i[1]) + Math.abs(i[2])) / 2
}, Hf = (i) => (i = i % 360, i < 0 && (i += 360), i), Cy = Lf, Dy = (i) => Math.sqrt(i[0] * i[0] + i[1] * i[1]), zy = (i) => Math.sqrt(i[4] * i[4] + i[5] * i[5]), rx = {
  x: 12,
  y: 13,
  z: 14,
  translateX: 12,
  translateY: 13,
  translateZ: 14,
  scaleX: Dy,
  scaleY: zy,
  scale: (i) => (Dy(i) + zy(i)) / 2,
  rotateX: (i) => Hf(li(Math.atan2(i[6], i[5]))),
  rotateY: (i) => Hf(li(Math.atan2(-i[2], i[0]))),
  rotateZ: Cy,
  rotate: Cy,
  skewX: (i) => li(Math.atan(i[4])),
  skewY: (i) => li(Math.atan(i[1])),
  skew: (i) => (Math.abs(i[1]) + Math.abs(i[4])) / 2
};
function Gf(i) {
  return i.includes("scale") ? 1 : 0;
}
function Yf(i, l) {
  if (!i || i === "none")
    return Gf(l);
  const r = i.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let u, c;
  if (r)
    u = rx, c = r;
  else {
    const m = i.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    u = ux, c = m;
  }
  if (!c)
    return Gf(l);
  const h = u[l], d = c[1].split(",").map(fx);
  return typeof h == "function" ? h(d) : d[h];
}
const cx = (i, l) => {
  const { transform: r = "none" } = getComputedStyle(i);
  return Yf(r, l);
};
function fx(i) {
  return parseFloat(i.trim());
}
const ul = [
  "transformPerspective",
  "x",
  "y",
  "z",
  "translateX",
  "translateY",
  "translateZ",
  "scale",
  "scaleX",
  "scaleY",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "skew",
  "skewX",
  "skewY"
], rl = /* @__PURE__ */ new Set([...ul, "pathRotation"]), Oy = (i) => i === ol || i === et, dx = /* @__PURE__ */ new Set(["x", "y", "z"]), hx = ul.filter((i) => !dx.has(i));
function mx(i) {
  const l = [];
  return hx.forEach((r) => {
    const u = i.getValue(r);
    u !== void 0 && (l.push([r, u.get()]), u.set(r.startsWith("scale") ? 1 : 0));
  }), l;
}
const Ca = {
  // Dimensions
  width: ({ x: i }, { paddingLeft: l = "0", paddingRight: r = "0", boxSizing: u }) => {
    const c = i.max - i.min;
    return u === "border-box" ? c : c - parseFloat(l) - parseFloat(r);
  },
  height: ({ y: i }, { paddingTop: l = "0", paddingBottom: r = "0", boxSizing: u }) => {
    const c = i.max - i.min;
    return u === "border-box" ? c : c - parseFloat(l) - parseFloat(r);
  },
  top: (i, { top: l }) => parseFloat(l),
  left: (i, { left: l }) => parseFloat(l),
  bottom: ({ y: i }, { top: l }) => parseFloat(l) + (i.max - i.min),
  right: ({ x: i }, { left: l }) => parseFloat(l) + (i.max - i.min),
  // Transform
  x: (i, { transform: l }) => Yf(l, "x"),
  y: (i, { transform: l }) => Yf(l, "y")
};
Ca.translateX = Ca.x;
Ca.translateY = Ca.y;
const si = /* @__PURE__ */ new Set();
let qf = !1, Xf = !1, Qf = !1;
function yv() {
  if (Xf) {
    const i = Array.from(si).filter((u) => u.needsMeasurement), l = new Set(i.map((u) => u.element)), r = /* @__PURE__ */ new Map();
    l.forEach((u) => {
      const c = mx(u);
      c.length && (r.set(u, c), u.render());
    }), i.forEach((u) => u.measureInitialState()), l.forEach((u) => {
      u.render();
      const c = r.get(u);
      c && c.forEach(([h, d]) => {
        var m;
        (m = u.getValue(h)) == null || m.set(d);
      });
    }), i.forEach((u) => u.measureEndState()), i.forEach((u) => {
      u.suspendedScrollY !== void 0 && window.scrollTo(0, u.suspendedScrollY);
    });
  }
  Xf = !1, qf = !1, si.forEach((i) => i.complete(Qf)), si.clear();
}
function vv() {
  si.forEach((i) => {
    i.readKeyframes(), i.needsMeasurement && (Xf = !0);
  });
}
function gx() {
  Qf = !0, vv(), yv(), Qf = !1;
}
class vd {
  constructor(l, r, u, c, h, d = !1) {
    this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...l], this.onComplete = r, this.name = u, this.motionValue = c, this.element = h, this.isAsync = d;
  }
  scheduleResolve() {
    this.state = "scheduled", this.isAsync ? (si.add(this), qf || (qf = !0, Ht.read(vv), Ht.resolveKeyframes(yv))) : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const { unresolvedKeyframes: l, name: r, element: u, motionValue: c } = this;
    if (l[0] === null) {
      const h = c == null ? void 0 : c.get(), d = l[l.length - 1];
      if (h !== void 0)
        l[0] = h;
      else if (u && r) {
        const m = u.readValue(r, d);
        m != null && (l[0] = m);
      }
      l[0] === void 0 && (l[0] = d), c && h === void 0 && c.set(l[0]);
    }
    ox(l);
  }
  setFinalKeyframe() {
  }
  measureInitialState() {
  }
  renderEndStyles() {
  }
  measureEndState() {
  }
  complete(l = !1) {
    this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, l), si.delete(this);
  }
  cancel() {
    this.state === "scheduled" && (si.delete(this), this.state = "pending");
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const px = (i) => i.startsWith("--");
function bv(i, l, r) {
  px(l) ? i.style.setProperty(l, r) : i.style[l] = r;
}
const yx = {};
function Sv(i, l) {
  const r = /* @__PURE__ */ k0(i);
  return () => yx[l] ?? r();
}
const vx = /* @__PURE__ */ Sv(() => window.ScrollTimeline !== void 0, "scrollTimeline"), Tv = /* @__PURE__ */ Sv(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing"), us = ([i, l, r, u]) => `cubic-bezier(${i}, ${l}, ${r}, ${u})`, Ry = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ us([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ us([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ us([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ us([0.33, 1.53, 0.69, 0.99])
};
function Ev(i, l) {
  if (i)
    return typeof i == "function" ? Tv() ? mv(i, l) : "ease-out" : /* @__PURE__ */ iv(i) ? us(i) : Array.isArray(i) ? i.map((r) => Ev(r, l) || Ry.easeOut) : Ry[i];
}
function bx(i, l, r, { delay: u = 0, duration: c = 300, repeat: h = 0, repeatType: d = "loop", ease: m = "easeOut", times: v } = {}, y = void 0) {
  const b = {
    [l]: r
  };
  v && (b.offset = v);
  const p = Ev(m, c);
  Array.isArray(p) && (b.easing = p);
  const T = {
    delay: u,
    duration: c,
    easing: Array.isArray(p) ? "linear" : p,
    fill: "both",
    iterations: h + 1,
    direction: d === "reverse" ? "alternate" : "normal"
  };
  return y && (T.pseudoElement = y), i.animate(b, T);
}
function xv(i) {
  return typeof i == "function" && "applyToOptions" in i;
}
function Sx({ type: i, ...l }) {
  return xv(i) && Tv() ? i.applyToOptions(l) : (l.duration ?? (l.duration = 300), l.ease ?? (l.ease = "easeOut"), l);
}
class Av extends yd {
  constructor(l) {
    if (super(), this.finishedTime = null, this.isStopped = !1, this.manualStartTime = null, !l)
      return;
    const { element: r, name: u, keyframes: c, pseudoElement: h, allowFlatten: d = !1, finalKeyframe: m, onComplete: v } = l;
    this.isPseudoElement = !!h, this.allowFlatten = d, this.options = l, Da(typeof l.type != "string", `Mini animate() doesn't support "type" as a string.`, "mini-spring");
    const y = Sx(l);
    this.animation = bx(r, u, c, y, h), y.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
      if (this.finishedTime = this.time, !h) {
        const b = Mu(c, this.options, m, this.speed);
        this.updateMotionValue && this.updateMotionValue(b), bv(r, u, b), this.animation.cancel();
      }
      v == null || v(), this.notifyFinished();
    };
  }
  play() {
    this.isStopped || (this.manualStartTime = null, this.animation.play(), this.state === "finished" && this.updateFinished());
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    var l, r;
    (r = (l = this.animation).finish) == null || r.call(l);
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch {
    }
  }
  stop() {
    if (this.isStopped)
      return;
    this.isStopped = !0;
    const { state: l } = this;
    l === "idle" || l === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel());
  }
  /**
   * WAAPI doesn't natively have any interruption capabilities.
   *
   * In this method, we commit styles back to the DOM before cancelling
   * the animation.
   *
   * This is designed to be overridden by NativeAnimationExtended, which
   * will create a renderless JS animation and sample it twice to calculate
   * its current value, "previous" value, and therefore allow
   * Motion to also correctly calculate velocity for any subsequent animation
   * while deferring the commit until the next animation frame.
   */
  commitStyles() {
    var r, u, c;
    const l = (r = this.options) == null ? void 0 : r.element;
    !this.isPseudoElement && (l != null && l.isConnected) && ((c = (u = this.animation).commitStyles) == null || c.call(u));
  }
  get duration() {
    var r, u;
    const l = ((u = (r = this.animation.effect) == null ? void 0 : r.getComputedTiming) == null ? void 0 : u.call(r).duration) || 0;
    return /* @__PURE__ */ en(Number(l));
  }
  get iterationDuration() {
    const { delay: l = 0 } = this.options || {};
    return this.duration + /* @__PURE__ */ en(l);
  }
  get time() {
    return /* @__PURE__ */ en(Number(this.animation.currentTime) || 0);
  }
  set time(l) {
    const r = this.finishedTime !== null;
    this.manualStartTime = null, this.finishedTime = null, this.animation.currentTime = /* @__PURE__ */ Ne(l), r && this.animation.pause();
  }
  /**
   * The playback speed of the animation.
   * 1 = normal speed, 2 = double speed, 0.5 = half speed.
   */
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(l) {
    l < 0 && (this.finishedTime = null), this.animation.playbackRate = l;
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return this.manualStartTime ?? Number(this.animation.startTime);
  }
  set startTime(l) {
    this.manualStartTime = this.animation.startTime = l;
  }
  /**
   * Attaches a timeline to the animation, for instance the `ScrollTimeline`.
   */
  attachTimeline({ timeline: l, rangeStart: r, rangeEnd: u, observe: c }) {
    var h;
    return this.allowFlatten && ((h = this.animation.effect) == null || h.updateTiming({ easing: "linear" })), this.animation.onfinish = null, l && vx() ? (this.animation.timeline = l, r && (this.animation.rangeStart = r), u && (this.animation.rangeEnd = u), nn) : c(this);
  }
}
const Mv = {
  anticipate: tv,
  backInOut: $0,
  circInOut: nv
};
function Tx(i) {
  return i in Mv;
}
function Ex(i) {
  typeof i.ease == "string" && Tx(i.ease) && (i.ease = Mv[i.ease]);
}
const Tf = 10;
class xx extends Av {
  constructor(l) {
    Ex(l), pv(l), super(l), l.startTime !== void 0 && l.autoplay !== !1 && (this.startTime = l.startTime), this.options = l;
  }
  /**
   * WAAPI doesn't natively have any interruption capabilities.
   *
   * Rather than read committed styles back out of the DOM, we can
   * create a renderless JS animation and sample it twice to calculate
   * its current value, "previous" value, and therefore allow
   * Motion to calculate velocity for any subsequent animation.
   */
  updateMotionValue(l) {
    const { motionValue: r, onUpdate: u, onComplete: c, element: h, ...d } = this.options;
    if (!r)
      return;
    if (l !== void 0) {
      r.set(l);
      return;
    }
    const m = new yu({
      ...d,
      autoplay: !1
    }), v = Math.max(Tf, Ae.now() - this.startTime), y = Rn(0, Tf, v - Tf), b = m.sample(v).value, { name: p } = this.options;
    h && p && bv(h, p, b), r.setWithVelocity(m.sample(Math.max(0, v - y)).value, b, y), m.stop();
  }
}
const wy = (i, l) => l === "zIndex" ? !1 : !!(typeof i == "number" || Array.isArray(i) || typeof i == "string" && // It's animatable if we have a string
(dn.test(i) || i === "0") && // And it contains numbers and/or colors
!i.startsWith("url("));
function Ax(i) {
  const l = i[0];
  if (i.length === 1)
    return !0;
  for (let r = 0; r < i.length; r++)
    if (i[r] !== l)
      return !0;
}
function Mx(i, l, r, u) {
  const c = i[0];
  if (c === null)
    return !1;
  if (l === "display" || l === "visibility")
    return !0;
  const h = i[i.length - 1], d = wy(c, l), m = wy(h, l);
  return vs(d === m, `You are trying to animate ${l} from "${c}" to "${h}". "${d ? h : c}" is not an animatable value.`, "value-not-animatable"), !d || !m ? !1 : Ax(i) || (r === "spring" || xv(r)) && u;
}
function Zf(i) {
  i.duration = 0, i.type = "keyframes";
}
const Cv = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform",
  "backgroundColor"
]), Cx = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function Dx(i) {
  for (let l = 0; l < i.length; l++)
    if (typeof i[l] == "string" && Cx.test(i[l]))
      return !0;
  return !1;
}
const zx = /* @__PURE__ */ new Set([
  "color",
  "backgroundColor",
  "outlineColor",
  "fill",
  "stroke",
  "borderColor",
  "borderTopColor",
  "borderRightColor",
  "borderBottomColor",
  "borderLeftColor"
]), Ox = /* @__PURE__ */ k0(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function Rx(i) {
  var p;
  const { motionValue: l, name: r, repeatDelay: u, repeatType: c, damping: h, type: d, keyframes: m } = i, v = (p = l == null ? void 0 : l.owner) == null ? void 0 : p.current;
  if (!(v instanceof HTMLElement) && !(v instanceof SVGElement))
    return !1;
  const { onUpdate: y, transformTemplate: b } = l.owner.getProps();
  return Ox() && r && /**
   * Force WAAPI for color properties with browser-only color formats
   * (oklch, oklab, lab, lch, etc.) that the JS animation path can't parse.
   */
  (Cv.has(r) || zx.has(r) && Dx(m)) && (r !== "transform" || !b) && /**
   * If we're outputting values to onUpdate then we can't use WAAPI as there's
   * no way to read the value from WAAPI every frame.
   */
  !y && !u && c !== "mirror" && h !== 0 && d !== "inertia";
}
const wx = 40;
class Nx extends yd {
  constructor({ autoplay: l = !0, delay: r = 0, type: u = "keyframes", repeat: c = 0, repeatDelay: h = 0, repeatType: d = "loop", keyframes: m, name: v, motionValue: y, element: b, ...p }) {
    var w;
    super(), this.stop = () => {
      var B, _;
      this._animation && (this._animation.stop(), (B = this.stopTimeline) == null || B.call(this)), (_ = this.keyframeResolver) == null || _.cancel();
    }, this.createdAt = Ae.now();
    const T = {
      autoplay: l,
      delay: r,
      type: u,
      repeat: c,
      repeatDelay: h,
      repeatType: d,
      name: v,
      motionValue: y,
      element: b,
      ...p
    }, O = (b == null ? void 0 : b.KeyframeResolver) || vd;
    this.keyframeResolver = new O(m, (B, _, L) => this.onKeyframesResolved(B, _, T, !L), v, y, b), (w = this.keyframeResolver) == null || w.scheduleResolve();
  }
  onKeyframesResolved(l, r, u, c) {
    var L, H;
    this.keyframeResolver = void 0;
    const { name: h, type: d, velocity: m, delay: v, isHandoff: y, onUpdate: b } = u;
    this.resolvedAt = Ae.now();
    let p = !0;
    Mx(l, h, d, m) || (p = !1, (za.instantAnimations || !v) && (b == null || b(Mu(l, u, r))), l[0] = l[l.length - 1], Zf(u), u.repeat = 0);
    const O = {
      startTime: c ? this.resolvedAt ? this.resolvedAt - this.createdAt > wx ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
      finalKeyframe: r,
      ...u,
      keyframes: l
    }, w = p && !y && Rx(O), B = (H = (L = O.motionValue) == null ? void 0 : L.owner) == null ? void 0 : H.current;
    let _;
    if (w)
      try {
        _ = new xx({
          ...O,
          element: B
        });
      } catch {
        _ = new yu(O);
      }
    else
      _ = new yu(O);
    _.finished.then(() => {
      this.notifyFinished();
    }).catch(nn), this.pendingTimeline && (this.stopTimeline = _.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = _;
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(l, r) {
    return this.finished.finally(l).then(() => {
    });
  }
  get animation() {
    var l;
    return this._animation || ((l = this.keyframeResolver) == null || l.resume(), gx()), this._animation;
  }
  get duration() {
    return this.animation.duration;
  }
  get iterationDuration() {
    return this.animation.iterationDuration;
  }
  get time() {
    return this.animation.time;
  }
  set time(l) {
    this.animation.time = l;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(l) {
    this.animation.speed = l;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(l) {
    return this._animation ? this.stopTimeline = this.animation.attachTimeline(l) : this.pendingTimeline = l, () => this.stop();
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    var l;
    this._animation && this.animation.cancel(), (l = this.keyframeResolver) == null || l.cancel();
  }
}
function Dv(i, l, r, u = 0, c = 1) {
  const h = Array.from(i).sort((y, b) => y.sortNodePosition(b)).indexOf(l), d = i.size, m = (d - 1) * u;
  return typeof r == "function" ? r(h, d) : c === 1 ? h * u : m - h * u;
}
const Ny = 30, _x = (i) => !isNaN(parseFloat(i));
class Vx {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   */
  constructor(l, r = {}) {
    this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (u) => {
      var h;
      const c = Ae.now();
      if (this.updatedAt !== c && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(u), this.current !== this.prev && ((h = this.events.change) == null || h.notify(this.current), this.dependents))
        for (const d of this.dependents)
          d.dirty();
    }, this.hasAnimated = !1, this.setCurrent(l), this.owner = r.owner;
  }
  setCurrent(l) {
    this.current = l, this.updatedAt = Ae.now(), this.canTrackVelocity === null && l !== void 0 && (this.canTrackVelocity = _x(this.current));
  }
  setPrevFrameValue(l = this.current) {
    this.prevFrameValue = l, this.prevUpdatedAt = this.updatedAt;
  }
  /**
   * Adds a function that will be notified when the `MotionValue` is updated.
   *
   * It returns a function that, when called, will cancel the subscription.
   *
   * When calling `onChange` inside a React component, it should be wrapped with the
   * `useEffect` hook. As it returns an unsubscribe function, this should be returned
   * from the `useEffect` function to ensure you don't add duplicate subscribers..
   *
   * ```jsx
   * export const MyComponent = () => {
   *   const x = useMotionValue(0)
   *   const y = useMotionValue(0)
   *   const opacity = useMotionValue(1)
   *
   *   useEffect(() => {
   *     function updateOpacity() {
   *       const maxXY = Math.max(x.get(), y.get())
   *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
   *       opacity.set(newOpacity)
   *     }
   *
   *     const unsubscribeX = x.on("change", updateOpacity)
   *     const unsubscribeY = y.on("change", updateOpacity)
   *
   *     return () => {
   *       unsubscribeX()
   *       unsubscribeY()
   *     }
   *   }, [])
   *
   *   return <motion.div style={{ x }} />
   * }
   * ```
   *
   * @param subscriber - A function that receives the latest value.
   * @returns A function that, when called, will cancel this subscription.
   *
   * @deprecated
   */
  onChange(l) {
    return this.on("change", l);
  }
  on(l, r) {
    this.events[l] || (this.events[l] = new rd());
    const u = this.events[l].add(r);
    return l === "change" ? () => {
      u(), Ht.read(() => {
        this.events.change.getSize() || this.stop();
      });
    } : u;
  }
  clearListeners() {
    for (const l in this.events)
      this.events[l].clear();
  }
  /**
   * Attaches a passive effect to the `MotionValue`.
   */
  attach(l, r) {
    this.passiveEffect = l, this.stopPassiveEffect = r;
  }
  /**
   * Sets the state of the `MotionValue`.
   *
   * @remarks
   *
   * ```jsx
   * const x = useMotionValue(0)
   * x.set(10)
   * ```
   *
   * @param latest - Latest value to set.
   * @param render - Whether to notify render subscribers. Defaults to `true`
   *
   * @public
   */
  set(l) {
    this.passiveEffect ? this.passiveEffect(l, this.updateAndNotify) : this.updateAndNotify(l);
  }
  setWithVelocity(l, r, u) {
    this.set(r), this.prev = void 0, this.prevFrameValue = l, this.prevUpdatedAt = this.updatedAt - u;
  }
  /**
   * Set the state of the `MotionValue`, stopping any active animations,
   * effects, and resets velocity to `0`.
   */
  jump(l, r = !0) {
    this.updateAndNotify(l), this.prev = l, this.prevUpdatedAt = this.prevFrameValue = void 0, r && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
  dirty() {
    var l;
    (l = this.events.change) == null || l.notify(this.current);
  }
  addDependent(l) {
    this.dependents || (this.dependents = /* @__PURE__ */ new Set()), this.dependents.add(l);
  }
  removeDependent(l) {
    this.dependents && this.dependents.delete(l);
  }
  /**
   * Returns the latest state of `MotionValue`
   *
   * @returns - The latest state of `MotionValue`
   *
   * @public
   */
  get() {
    return this.current;
  }
  /**
   * @public
   */
  getPrevious() {
    return this.prev;
  }
  /**
   * Returns the latest velocity of `MotionValue`
   *
   * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
   *
   * @public
   */
  getVelocity() {
    const l = Ae.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || l - this.updatedAt > Ny)
      return 0;
    const r = Math.min(this.updatedAt - this.prevUpdatedAt, Ny);
    return /* @__PURE__ */ J0(parseFloat(this.current) - parseFloat(this.prevFrameValue), r);
  }
  /**
   * Registers a new animation to control this `MotionValue`. Only one
   * animation can drive a `MotionValue` at one time.
   *
   * ```jsx
   * value.start()
   * ```
   *
   * @param animation - A function that starts the provided animation
   */
  start(l) {
    return this.stop(), new Promise((r) => {
      this.hasAnimated = !0, this.animation = l(r), this.events.animationStart && this.events.animationStart.notify();
    }).then(() => {
      this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
    });
  }
  /**
   * Stop the currently active animation.
   *
   * @public
   */
  stop() {
    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
  }
  /**
   * Returns `true` if this value is currently animating.
   *
   * @public
   */
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  /**
   * Destroy and clean up subscribers to this `MotionValue`.
   *
   * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
   * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
   * created a `MotionValue` via the `motionValue` function.
   *
   * @public
   */
  destroy() {
    var l, r;
    (l = this.dependents) == null || l.clear(), (r = this.events.destroy) == null || r.notify(), this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function sl(i, l) {
  return new Vx(i, l);
}
function zv(i, l) {
  if (i != null && i.inherit && l) {
    const { inherit: r, ...u } = i;
    return { ...l, ...u };
  }
  return i;
}
function bd(i, l) {
  const r = (i == null ? void 0 : i[l]) ?? (i == null ? void 0 : i.default) ?? i;
  return r !== i ? zv(r, i) : r;
}
const Ux = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, Bx = (i) => ({
  type: "spring",
  stiffness: 550,
  damping: i === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), jx = {
  type: "keyframes",
  duration: 0.8
}, Lx = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, Hx = (i, { keyframes: l }) => l.length > 2 ? jx : rl.has(i) ? i.startsWith("scale") ? Bx(l[1]) : Ux : Lx, Gx = /* @__PURE__ */ new Set([
  "when",
  "delay",
  "delayChildren",
  "staggerChildren",
  "staggerDirection",
  "repeat",
  "repeatType",
  "repeatDelay",
  "from",
  "elapsed"
]);
function Yx(i) {
  for (const l in i)
    if (!Gx.has(l))
      return !0;
  return !1;
}
const Sd = (i, l, r, u = {}, c, h) => (d) => {
  const m = bd(u, i) || {}, v = m.delay || u.delay || 0;
  let { elapsed: y = 0 } = u;
  y = y - /* @__PURE__ */ Ne(v);
  const b = {
    keyframes: Array.isArray(r) ? r : [null, r],
    ease: "easeOut",
    velocity: l.getVelocity(),
    ...m,
    delay: -y,
    onUpdate: (T) => {
      l.set(T), m.onUpdate && m.onUpdate(T);
    },
    onComplete: () => {
      d(), m.onComplete && m.onComplete();
    },
    name: i,
    motionValue: l,
    element: h ? void 0 : c
  };
  Yx(m) || Object.assign(b, Hx(i, b)), b.duration && (b.duration = /* @__PURE__ */ Ne(b.duration)), b.repeatDelay && (b.repeatDelay = /* @__PURE__ */ Ne(b.repeatDelay)), b.from !== void 0 && (b.keyframes[0] = b.from);
  let p = !1;
  if ((b.type === !1 || b.duration === 0 && !b.repeatDelay) && (Zf(b), b.delay === 0 && (p = !0)), (za.instantAnimations || za.skipAnimations || c != null && c.shouldSkipAnimations || m.skipAnimations) && (p = !0, Zf(b), b.delay = 0), b.allowFlatten = !m.type && !m.ease, p && !h && l.get() !== void 0) {
    const T = Mu(b.keyframes, m);
    if (T !== void 0) {
      Ht.update(() => {
        b.onUpdate(T), b.onComplete();
      });
      return;
    }
  }
  return m.isSync ? new yu(b) : new Nx(b);
}, qx = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function Xx(i) {
  const l = qx.exec(i);
  if (!l)
    return [,];
  const [, r, u, c] = l;
  return [`--${r ?? u}`, c];
}
const Qx = 4;
function Ov(i, l, r = 1) {
  Da(r <= Qx, `Max CSS variable fallback depth detected in property "${i}". This may indicate a circular fallback dependency.`, "max-css-var-depth");
  const [u, c] = Xx(i);
  if (!u)
    return;
  const h = window.getComputedStyle(l).getPropertyValue(u);
  if (h) {
    const d = h.trim();
    return Q0(d) ? parseFloat(d) : d;
  }
  return dd(c) ? Ov(c, l, r + 1) : c;
}
function _y(i) {
  const l = [{}, {}];
  return i == null || i.values.forEach((r, u) => {
    l[0][u] = r.get(), l[1][u] = r.getVelocity();
  }), l;
}
function Td(i, l, r, u) {
  if (typeof l == "function") {
    const [c, h] = _y(u);
    l = l(r !== void 0 ? r : i.custom, c, h);
  }
  if (typeof l == "string" && (l = i.variants && i.variants[l]), typeof l == "function") {
    const [c, h] = _y(u);
    l = l(r !== void 0 ? r : i.custom, c, h);
  }
  return l;
}
function oi(i, l, r) {
  const u = i.getProps();
  return Td(u, l, r !== void 0 ? r : u.custom, i);
}
const Rv = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...ul
]), Kf = (i) => Array.isArray(i);
function Zx(i, l, r) {
  i.hasValue(l) ? i.getValue(l).set(r) : i.addValue(l, sl(r));
}
function Kx(i) {
  return Kf(i) ? i[i.length - 1] || 0 : i;
}
function kx(i, l) {
  const r = oi(i, l);
  let { transitionEnd: u = {}, transition: c = {}, ...h } = r || {};
  h = { ...h, ...u };
  for (const d in h) {
    const m = Kx(h[d]);
    Zx(i, d, m);
  }
}
const ve = (i) => !!(i && i.getVelocity);
function Jx(i) {
  return !!(ve(i) && i.add);
}
function kf(i, l) {
  const r = i.getValue("willChange");
  if (Jx(r))
    return r.add(l);
  if (!r && za.WillChange) {
    const u = new za.WillChange("auto");
    i.addValue("willChange", u), u.add(l);
  }
}
function Ed(i) {
  return i.replace(/([A-Z])/g, (l) => `-${l.toLowerCase()}`);
}
const Fx = "framerAppearId", wv = "data-" + Ed(Fx);
function Nv(i) {
  return i.props[wv];
}
function Px({ protectedKeys: i, needsAnimating: l }, r) {
  const u = i.hasOwnProperty(r) && l[r] !== !0;
  return l[r] = !1, u;
}
function _v(i, l, { delay: r = 0, transitionOverride: u, type: c } = {}) {
  let { transition: h, transitionEnd: d, ...m } = l;
  const v = i.getDefaultTransition();
  h = h ? zv(h, v) : v;
  const y = h == null ? void 0 : h.reduceMotion, b = h == null ? void 0 : h.skipAnimations;
  u && (h = u);
  const p = [], T = c && i.animationState && i.animationState.getState()[c], O = h == null ? void 0 : h.path;
  O && O.animateVisualElement(i, m, h, r, p);
  for (const w in m) {
    const B = i.getValue(w, i.latestValues[w] ?? null), _ = m[w];
    if (_ === void 0 || T && Px(T, w))
      continue;
    const L = {
      delay: r,
      ...bd(h || {}, w)
    };
    b && (L.skipAnimations = !0);
    const H = B.get();
    if (H !== void 0 && !B.isAnimating() && !Array.isArray(_) && _ === H && !L.velocity) {
      Ht.update(() => B.set(_));
      continue;
    }
    let X = !1;
    if (window.MotionHandoffAnimation) {
      const ut = Nv(i);
      if (ut) {
        const Z = window.MotionHandoffAnimation(ut, w, Ht);
        Z !== null && (L.startTime = Z, X = !0);
      }
    }
    kf(i, w);
    const Q = y ?? i.shouldReduceMotion;
    B.start(Sd(w, B, _, Q && Rv.has(w) ? { type: !1 } : L, i, X));
    const nt = B.animation;
    nt && p.push(nt);
  }
  if (d) {
    const w = () => Ht.update(() => {
      d && kx(i, d);
    });
    p.length ? Promise.all(p).then(w) : w();
  }
  return p;
}
function Jf(i, l, r = {}) {
  var v;
  const u = oi(i, l, r.type === "exit" ? (v = i.presenceContext) == null ? void 0 : v.custom : void 0);
  let { transition: c = i.getDefaultTransition() || {} } = u || {};
  r.transitionOverride && (c = r.transitionOverride);
  const h = u ? () => Promise.all(_v(i, u, r)) : () => Promise.resolve(), d = i.variantChildren && i.variantChildren.size ? (y = 0) => {
    const { delayChildren: b = 0, staggerChildren: p, staggerDirection: T } = c;
    return Ix(i, l, y, b, p, T, r);
  } : () => Promise.resolve(), { when: m } = c;
  if (m) {
    const [y, b] = m === "beforeChildren" ? [h, d] : [d, h];
    return y().then(() => b());
  } else
    return Promise.all([h(), d(r.delay)]);
}
function Ix(i, l, r = 0, u = 0, c = 0, h = 1, d) {
  const m = [];
  for (const v of i.variantChildren)
    v.notify("AnimationStart", l), m.push(Jf(v, l, {
      ...d,
      delay: r + (typeof u == "function" ? 0 : u) + Dv(i.variantChildren, v, u, c, h)
    }).then(() => v.notify("AnimationComplete", l)));
  return Promise.all(m);
}
function Wx(i, l, r = {}) {
  i.notify("AnimationStart", l);
  let u;
  if (Array.isArray(l)) {
    const c = l.map((h) => Jf(i, h, r));
    u = Promise.all(c);
  } else if (typeof l == "string")
    u = Jf(i, l, r);
  else {
    const c = typeof l == "function" ? oi(i, l, r.custom) : l;
    u = Promise.all(_v(i, c, r));
  }
  return u.then(() => {
    i.notify("AnimationComplete", l);
  });
}
const $x = {
  test: (i) => i === "auto",
  parse: (i) => i
}, Vv = (i) => (l) => l.test(i), Uv = [ol, et, On, kn, AE, xE, $x], Vy = (i) => Uv.find(Vv(i));
function tA(i) {
  return typeof i == "number" ? i === 0 : i !== null ? i === "none" || i === "0" || K0(i) : !0;
}
const eA = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function nA(i) {
  const [l, r] = i.slice(0, -1).split("(");
  if (l === "drop-shadow")
    return i;
  const [u] = r.match(hd) || [];
  if (!u)
    return i;
  const c = r.replace(u, "");
  let h = eA.has(l) ? 1 : 0;
  return u !== r && (h *= 100), l + "(" + h + c + ")";
}
const aA = /\b([a-z-]*)\(.*?\)/gu, Ff = {
  ...dn,
  getAnimatableNone: (i) => {
    const l = i.match(aA);
    return l ? l.map(nA).join(" ") : i;
  }
}, Pf = {
  ...dn,
  getAnimatableNone: (i) => {
    const l = dn.parse(i);
    return dn.createTransformer(i)(l.map((u) => typeof u == "number" ? 0 : typeof u == "object" ? { ...u, alpha: 1 } : u));
  }
}, Uy = {
  ...ol,
  transform: Math.round
}, iA = {
  rotate: kn,
  /**
   * Internal channel for `transition.path` orientToPath. Composed onto
   * `rotate` at the transform-build sites so the user's `rotate` is
   * never read or overwritten. Not part of `transformPropOrder`.
   */
  pathRotation: kn,
  rotateX: kn,
  rotateY: kn,
  rotateZ: kn,
  scale: eu,
  scaleX: eu,
  scaleY: eu,
  scaleZ: eu,
  skew: kn,
  skewX: kn,
  skewY: kn,
  distance: et,
  translateX: et,
  translateY: et,
  translateZ: et,
  x: et,
  y: et,
  z: et,
  perspective: et,
  transformPerspective: et,
  opacity: gs,
  originX: Ty,
  originY: Ty,
  originZ: et
}, vu = {
  // Border props
  borderWidth: et,
  borderTopWidth: et,
  borderRightWidth: et,
  borderBottomWidth: et,
  borderLeftWidth: et,
  borderRadius: et,
  borderTopLeftRadius: et,
  borderTopRightRadius: et,
  borderBottomRightRadius: et,
  borderBottomLeftRadius: et,
  // Positioning props
  width: et,
  maxWidth: et,
  height: et,
  maxHeight: et,
  top: et,
  right: et,
  bottom: et,
  left: et,
  inset: et,
  insetBlock: et,
  insetBlockStart: et,
  insetBlockEnd: et,
  insetInline: et,
  insetInlineStart: et,
  insetInlineEnd: et,
  // Spacing props
  padding: et,
  paddingTop: et,
  paddingRight: et,
  paddingBottom: et,
  paddingLeft: et,
  paddingBlock: et,
  paddingBlockStart: et,
  paddingBlockEnd: et,
  paddingInline: et,
  paddingInlineStart: et,
  paddingInlineEnd: et,
  margin: et,
  marginTop: et,
  marginRight: et,
  marginBottom: et,
  marginLeft: et,
  marginBlock: et,
  marginBlockStart: et,
  marginBlockEnd: et,
  marginInline: et,
  marginInlineStart: et,
  marginInlineEnd: et,
  // Typography
  fontSize: et,
  // Misc
  backgroundPositionX: et,
  backgroundPositionY: et,
  ...iA,
  zIndex: Uy,
  // SVG
  fillOpacity: gs,
  strokeOpacity: gs,
  numOctaves: Uy
}, lA = {
  ...vu,
  // Color props
  color: ee,
  backgroundColor: ee,
  outlineColor: ee,
  fill: ee,
  stroke: ee,
  // Border props
  borderColor: ee,
  borderTopColor: ee,
  borderRightColor: ee,
  borderBottomColor: ee,
  borderLeftColor: ee,
  filter: Ff,
  WebkitFilter: Ff,
  mask: Pf,
  WebkitMask: Pf
}, Bv = (i) => lA[i], sA = /* @__PURE__ */ new Set([Ff, Pf]);
function jv(i, l) {
  let r = Bv(i);
  return sA.has(r) || (r = dn), r.getAnimatableNone ? r.getAnimatableNone(l) : void 0;
}
const oA = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function uA(i, l, r) {
  let u = 0, c;
  for (; u < i.length && !c; ) {
    const h = i[u];
    typeof h == "string" && !oA.has(h) && ll(h).values.length && (c = i[u]), u++;
  }
  if (c && r)
    for (const h of l)
      i[h] = jv(r, c);
}
class rA extends vd {
  constructor(l, r, u, c, h) {
    super(l, r, u, c, h, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: l, element: r, name: u } = this;
    if (!r || !r.current)
      return;
    super.readKeyframes();
    for (let b = 0; b < l.length; b++) {
      let p = l[b];
      if (typeof p == "string" && (p = p.trim(), dd(p))) {
        const T = Ov(p, r.current);
        T !== void 0 && (l[b] = T), b === l.length - 1 && (this.finalKeyframe = p);
      }
    }
    if (this.resolveNoneKeyframes(), !Rv.has(u) || l.length !== 2)
      return;
    const [c, h] = l, d = Vy(c), m = Vy(h), v = Sy(c), y = Sy(h);
    if (v !== y && Ca[u]) {
      this.needsMeasurement = !0;
      return;
    }
    if (d !== m)
      if (Oy(d) && Oy(m))
        for (let b = 0; b < l.length; b++) {
          const p = l[b];
          typeof p == "string" && (l[b] = parseFloat(p));
        }
      else Ca[u] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: l, name: r } = this, u = [];
    for (let c = 0; c < l.length; c++)
      (l[c] === null || tA(l[c])) && u.push(c);
    u.length && uA(l, u, r);
  }
  measureInitialState() {
    const { element: l, unresolvedKeyframes: r, name: u } = this;
    if (!l || !l.current)
      return;
    u === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = Ca[u](l.measureViewportBox(), window.getComputedStyle(l.current)), r[0] = this.measuredOrigin;
    const c = r[r.length - 1];
    c !== void 0 && l.getValue(u, c).jump(c, !1);
  }
  measureEndState() {
    var m;
    const { element: l, name: r, unresolvedKeyframes: u } = this;
    if (!l || !l.current)
      return;
    const c = l.getValue(r);
    c && c.jump(this.measuredOrigin, !1);
    const h = u.length - 1, d = u[h];
    u[h] = Ca[r](l.measureViewportBox(), window.getComputedStyle(l.current)), d !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = d), (m = this.removedTransforms) != null && m.length && this.removedTransforms.forEach(([v, y]) => {
      l.getValue(v).set(y);
    }), this.resolveNoneKeyframes();
  }
}
const xd = [
  "borderTopLeftRadius",
  "borderTopRightRadius",
  "borderBottomRightRadius",
  "borderBottomLeftRadius"
];
function Lv(i, l, r) {
  if (i == null)
    return [];
  if (i instanceof EventTarget)
    return [i];
  if (typeof i == "string") {
    let u = document;
    const c = (r == null ? void 0 : r[i]) ?? u.querySelectorAll(i);
    return c ? Array.from(c) : [];
  }
  return Array.from(i).filter((u) => u != null);
}
const If = (i, l) => l && typeof i == "number" ? l.transform(i) : i;
function cA(i) {
  return Z0(i) && "offsetHeight" in i && !("ownerSVGElement" in i);
}
const { schedule: Ad } = /* @__PURE__ */ lv(queueMicrotask, !1), fn = {
  x: !1,
  y: !1
};
function Hv() {
  return fn.x || fn.y;
}
function fA(i) {
  return i === "x" || i === "y" ? fn[i] ? null : (fn[i] = !0, () => {
    fn[i] = !1;
  }) : fn.x || fn.y ? null : (fn.x = fn.y = !0, () => {
    fn.x = fn.y = !1;
  });
}
function Gv(i, l) {
  const r = Lv(i), u = new AbortController(), c = {
    passive: !0,
    ...l,
    signal: u.signal
  };
  return [r, c, () => u.abort()];
}
function dA(i) {
  return !(i.pointerType === "touch" || Hv());
}
function hA(i, l, r = {}) {
  const [u, c, h] = Gv(i, r);
  return u.forEach((d) => {
    let m = !1, v = !1, y;
    const b = () => {
      d.removeEventListener("pointerleave", w);
    }, p = (_) => {
      y && (y(_), y = void 0), b();
    }, T = (_) => {
      m = !1, window.removeEventListener("pointerup", T), window.removeEventListener("pointercancel", T), v && (v = !1, p(_));
    }, O = () => {
      m = !0, window.addEventListener("pointerup", T, c), window.addEventListener("pointercancel", T, c);
    }, w = (_) => {
      if (_.pointerType !== "touch") {
        if (m) {
          v = !0;
          return;
        }
        p(_);
      }
    }, B = (_) => {
      if (!dA(_))
        return;
      v = !1;
      const L = l(d, _);
      typeof L == "function" && (y = L, d.addEventListener("pointerleave", w, c));
    };
    d.addEventListener("pointerenter", B, c), d.addEventListener("pointerdown", O, c);
  }), h;
}
const Yv = (i, l) => l ? i === l ? !0 : Yv(i, l.parentElement) : !1, Md = (i) => i.pointerType === "mouse" ? typeof i.button != "number" || i.button <= 0 : i.isPrimary !== !1, mA = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function gA(i) {
  return mA.has(i.tagName) || i.isContentEditable === !0;
}
const pA = /* @__PURE__ */ new Set(["INPUT", "SELECT", "TEXTAREA"]);
function yA(i) {
  return pA.has(i.tagName) || i.isContentEditable === !0;
}
const ou = /* @__PURE__ */ new WeakSet();
function By(i) {
  return (l) => {
    l.key === "Enter" && i(l);
  };
}
function Ef(i, l) {
  i.dispatchEvent(new PointerEvent("pointer" + l, { isPrimary: !0, bubbles: !0 }));
}
const vA = (i, l) => {
  const r = i.currentTarget;
  if (!r)
    return;
  const u = By(() => {
    if (ou.has(r))
      return;
    Ef(r, "down");
    const c = By(() => {
      Ef(r, "up");
    }), h = () => Ef(r, "cancel");
    r.addEventListener("keyup", c, l), r.addEventListener("blur", h, l);
  });
  r.addEventListener("keydown", u, l), r.addEventListener("blur", () => r.removeEventListener("keydown", u), l);
};
function jy(i) {
  return Md(i) && !Hv();
}
const Ly = /* @__PURE__ */ new WeakSet();
function bA(i, l, r = {}) {
  const [u, c, h] = Gv(i, r), d = (m) => {
    const v = m.currentTarget;
    if (!jy(m) || Ly.has(m))
      return;
    ou.add(v), r.stopPropagation && Ly.add(m);
    const y = l(v, m), b = { ...c, capture: !0 }, p = (w, B) => {
      window.removeEventListener("pointerup", T, b), window.removeEventListener("pointercancel", O, b), ou.has(v) && ou.delete(v), jy(w) && typeof y == "function" && y(w, { success: B });
    }, T = (w) => {
      p(w, v === window || v === document || r.useGlobalTarget || Yv(v, w.target));
    }, O = (w) => {
      p(w, !1);
    };
    window.addEventListener("pointerup", T, b), window.addEventListener("pointercancel", O, b);
  };
  return u.forEach((m) => {
    (r.useGlobalTarget ? window : m).addEventListener("pointerdown", d, c), cA(m) && (m.addEventListener("focus", (y) => vA(y, c)), !gA(m) && !m.hasAttribute("tabindex") && (m.tabIndex = 0));
  }), h;
}
function Cd(i) {
  return Z0(i) && "ownerSVGElement" in i;
}
const uu = /* @__PURE__ */ new WeakMap();
let Ma;
const qv = (i, l, r) => (u, c) => c && c[0] ? c[0][i + "Size"] : Cd(u) && "getBBox" in u ? u.getBBox()[l] : u[r], SA = /* @__PURE__ */ qv("inline", "width", "offsetWidth"), TA = /* @__PURE__ */ qv("block", "height", "offsetHeight");
function EA({ target: i, borderBoxSize: l }) {
  var r;
  (r = uu.get(i)) == null || r.forEach((u) => {
    u(i, {
      get width() {
        return SA(i, l);
      },
      get height() {
        return TA(i, l);
      }
    });
  });
}
function xA(i) {
  i.forEach(EA);
}
function AA() {
  typeof ResizeObserver > "u" || (Ma = new ResizeObserver(xA));
}
function MA(i, l) {
  Ma || AA();
  const r = Lv(i);
  return r.forEach((u) => {
    let c = uu.get(u);
    c || (c = /* @__PURE__ */ new Set(), uu.set(u, c)), c.add(l), Ma == null || Ma.observe(u);
  }), () => {
    r.forEach((u) => {
      const c = uu.get(u);
      c == null || c.delete(l), c != null && c.size || Ma == null || Ma.unobserve(u);
    });
  };
}
const ru = /* @__PURE__ */ new Set();
let al;
function CA() {
  al = () => {
    const i = {
      get width() {
        return window.innerWidth;
      },
      get height() {
        return window.innerHeight;
      }
    };
    ru.forEach((l) => l(i));
  }, window.addEventListener("resize", al);
}
function DA(i) {
  return ru.add(i), al || CA(), () => {
    ru.delete(i), !ru.size && typeof al == "function" && (window.removeEventListener("resize", al), al = void 0);
  };
}
function Hy(i, l) {
  return typeof i == "function" ? DA(i) : MA(i, l);
}
function zA(i) {
  return Cd(i) && i.tagName === "svg";
}
const OA = [...Uv, ee, dn], RA = (i) => OA.find(Vv(i)), Gy = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), il = () => ({
  x: Gy(),
  y: Gy()
}), Yy = () => ({ min: 0, max: 0 }), ie = () => ({
  x: Yy(),
  y: Yy()
}), wA = /* @__PURE__ */ new WeakMap();
function Cu(i) {
  return i !== null && typeof i == "object" && typeof i.start == "function";
}
function ps(i) {
  return typeof i == "string" || Array.isArray(i);
}
const Dd = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], zd = ["initial", ...Dd];
function Du(i) {
  return Cu(i.animate) || zd.some((l) => ps(i[l]));
}
function Xv(i) {
  return !!(Du(i) || i.variants);
}
function NA(i, l, r) {
  for (const u in l) {
    const c = l[u], h = r[u];
    if (ve(c))
      i.addValue(u, c);
    else if (ve(h))
      i.addValue(u, sl(c, { owner: i }));
    else if (h !== c)
      if (i.hasValue(u)) {
        const d = i.getValue(u);
        d.liveStyle === !0 ? d.jump(c) : d.hasAnimated || d.set(c);
      } else {
        const d = i.getStaticValue(u);
        i.addValue(u, sl(d !== void 0 ? d : c, { owner: i }));
      }
  }
  for (const u in r)
    l[u] === void 0 && i.removeValue(u);
  return l;
}
const bu = { current: null }, Od = { current: !1 }, _A = typeof window < "u";
function Qv() {
  if (Od.current = !0, !!_A)
    if (window.matchMedia) {
      const i = window.matchMedia("(prefers-reduced-motion)"), l = () => bu.current = i.matches;
      i.addEventListener("change", l), l();
    } else
      bu.current = !1;
}
const qy = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
let Su = {};
function Zv(i) {
  Su = i;
}
function VA() {
  return Su;
}
class UA {
  /**
   * This method takes React props and returns found MotionValues. For example, HTML
   * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
   *
   * This isn't an abstract method as it needs calling in the constructor, but it is
   * intended to be one.
   */
  scrapeMotionValuesFromProps(l, r, u) {
    return {};
  }
  constructor({ parent: l, props: r, presenceContext: u, reducedMotionConfig: c, skipAnimations: h, blockInitialAnimation: d, visualState: m }, v = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.shouldSkipAnimations = !1, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = vd, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.hasBeenMounted = !1, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const O = Ae.now();
      this.renderScheduledAt < O && (this.renderScheduledAt = O, Ht.render(this.render, !1, !0));
    };
    const { latestValues: y, renderState: b } = m;
    this.latestValues = y, this.baseTarget = { ...y }, this.initialValues = r.initial ? { ...y } : {}, this.renderState = b, this.parent = l, this.props = r, this.presenceContext = u, this.depth = l ? l.depth + 1 : 0, this.reducedMotionConfig = c, this.skipAnimationsConfig = h, this.options = v, this.blockInitialAnimation = !!d, this.isControllingVariants = Du(r), this.isVariantNode = Xv(r), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(l && l.current);
    const { willChange: p, ...T } = this.scrapeMotionValuesFromProps(r, {}, this);
    for (const O in T) {
      const w = T[O];
      y[O] !== void 0 && ve(w) && w.set(y[O]);
    }
  }
  mount(l) {
    var r, u;
    if (this.hasBeenMounted)
      for (const c in this.initialValues)
        (r = this.values.get(c)) == null || r.jump(this.initialValues[c]), this.latestValues[c] = this.initialValues[c];
    this.current = l, wA.set(l, this), this.projection && !this.projection.instance && this.projection.mount(l), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((c, h) => this.bindToMotionValue(h, c)), this.reducedMotionConfig === "never" ? this.shouldReduceMotion = !1 : this.reducedMotionConfig === "always" ? this.shouldReduceMotion = !0 : (Od.current || Qv(), this.shouldReduceMotion = bu.current), this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1, (u = this.parent) == null || u.addChild(this), this.update(this.props, this.presenceContext), this.hasBeenMounted = !0;
  }
  unmount() {
    var l;
    this.projection && this.projection.unmount(), Oa(this.notifyUpdate), Oa(this.render), this.valueSubscriptions.forEach((r) => r()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), (l = this.parent) == null || l.removeChild(this);
    for (const r in this.events)
      this.events[r].clear();
    for (const r in this.features) {
      const u = this.features[r];
      u && (u.unmount(), u.isMounted = !1);
    }
    this.current = null;
  }
  addChild(l) {
    this.children.add(l), this.enteringChildren ?? (this.enteringChildren = /* @__PURE__ */ new Set()), this.enteringChildren.add(l);
  }
  removeChild(l) {
    this.children.delete(l), this.enteringChildren && this.enteringChildren.delete(l);
  }
  bindToMotionValue(l, r) {
    if (this.valueSubscriptions.has(l) && this.valueSubscriptions.get(l)(), r.accelerate && Cv.has(l) && this.current instanceof HTMLElement) {
      const { factory: d, keyframes: m, times: v, ease: y, duration: b } = r.accelerate, p = new Av({
        element: this.current,
        name: l,
        keyframes: m,
        times: v,
        ease: y,
        duration: /* @__PURE__ */ Ne(b)
      }), T = d(p);
      this.valueSubscriptions.set(l, () => {
        T(), p.cancel();
      });
      return;
    }
    const u = rl.has(l);
    u && this.onBindTransform && this.onBindTransform();
    const c = r.on("change", (d) => {
      this.latestValues[l] = d, this.props.onUpdate && Ht.preRender(this.notifyUpdate), u && this.projection && (this.projection.isTransformDirty = !0), this.scheduleRender();
    });
    let h;
    typeof window < "u" && window.MotionCheckAppearSync && (h = window.MotionCheckAppearSync(this, l, r)), this.valueSubscriptions.set(l, () => {
      c(), h && h();
    });
  }
  sortNodePosition(l) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== l.type ? 0 : this.sortInstanceNodePosition(this.current, l.current);
  }
  updateFeatures() {
    let l = "animation";
    for (l in Su) {
      const r = Su[l];
      if (!r)
        continue;
      const { isEnabled: u, Feature: c } = r;
      if (!this.features[l] && c && u(this.props) && (this.features[l] = new c(this)), this.features[l]) {
        const h = this.features[l];
        h.isMounted ? h.update() : (h.mount(), h.isMounted = !0);
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  /**
   * Measure the current viewport box with or without transforms.
   * Only measures axis-aligned boxes, rotate and skew must be manually
   * removed with a re-render to work.
   */
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : ie();
  }
  getStaticValue(l) {
    return this.latestValues[l];
  }
  setStaticValue(l, r) {
    this.latestValues[l] = r;
  }
  /**
   * Update the provided props. Ensure any newly-added motion values are
   * added to our map, old ones removed, and listeners updated.
   */
  update(l, r) {
    (l.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = l, this.prevPresenceContext = this.presenceContext, this.presenceContext = r;
    for (let u = 0; u < qy.length; u++) {
      const c = qy[u];
      this.propEventSubscriptions[c] && (this.propEventSubscriptions[c](), delete this.propEventSubscriptions[c]);
      const h = "on" + c, d = l[h];
      d && (this.propEventSubscriptions[c] = this.on(c, d));
    }
    this.prevMotionValues = NA(this, this.scrapeMotionValuesFromProps(l, this.prevProps || {}, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  /**
   * Returns the variant definition with a given name.
   */
  getVariant(l) {
    return this.props.variants ? this.props.variants[l] : void 0;
  }
  /**
   * Returns the defined default transition on this component.
   */
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
  }
  /**
   * Add a child visual element to our set of children.
   */
  addVariantChild(l) {
    const r = this.getClosestVariantNode();
    if (r)
      return r.variantChildren && r.variantChildren.add(l), () => r.variantChildren.delete(l);
  }
  /**
   * Add a motion value and bind it to this visual element.
   */
  addValue(l, r) {
    const u = this.values.get(l);
    r !== u && (u && this.removeValue(l), this.bindToMotionValue(l, r), this.values.set(l, r), this.latestValues[l] = r.get());
  }
  /**
   * Remove a motion value and unbind any active subscriptions.
   */
  removeValue(l) {
    this.values.delete(l);
    const r = this.valueSubscriptions.get(l);
    r && (r(), this.valueSubscriptions.delete(l)), delete this.latestValues[l], this.removeValueFromRenderState(l, this.renderState);
  }
  /**
   * Check whether we have a motion value for this key
   */
  hasValue(l) {
    return this.values.has(l);
  }
  getValue(l, r) {
    if (this.props.values && this.props.values[l])
      return this.props.values[l];
    let u = this.values.get(l);
    return u === void 0 && r !== void 0 && (u = sl(r === null ? void 0 : r, { owner: this }), this.addValue(l, u)), u;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(l, r) {
    let u = this.latestValues[l] !== void 0 || !this.current ? this.latestValues[l] : this.getBaseTargetFromProps(this.props, l) ?? this.readValueFromInstance(this.current, l, this.options);
    return u != null && (typeof u == "string" && (Q0(u) || K0(u)) ? u = parseFloat(u) : !RA(u) && dn.test(r) && (u = jv(l, r)), this.setBaseTarget(l, ve(u) ? u.get() : u)), ve(u) ? u.get() : u;
  }
  /**
   * Set the base target to later animate back to. This is currently
   * only hydrated on creation and when we first read a value.
   */
  setBaseTarget(l, r) {
    this.baseTarget[l] = r;
  }
  /**
   * Find the base target for a value thats been removed from all animation
   * props.
   */
  getBaseTarget(l) {
    var h;
    const { initial: r } = this.props;
    let u;
    if (typeof r == "string" || typeof r == "object") {
      const d = Td(this.props, r, (h = this.presenceContext) == null ? void 0 : h.custom);
      d && (u = d[l]);
    }
    if (r && u !== void 0)
      return u;
    const c = this.getBaseTargetFromProps(this.props, l);
    return c !== void 0 && !ve(c) ? c : this.initialValues[l] !== void 0 && u === void 0 ? void 0 : this.baseTarget[l];
  }
  on(l, r) {
    return this.events[l] || (this.events[l] = new rd()), this.events[l].add(r);
  }
  notify(l, ...r) {
    this.events[l] && this.events[l].notify(...r);
  }
  scheduleRenderMicrotask() {
    Ad.render(this.render);
  }
}
class Kv extends UA {
  constructor() {
    super(...arguments), this.KeyframeResolver = rA;
  }
  sortInstanceNodePosition(l, r) {
    return l.compareDocumentPosition(r) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(l, r) {
    const u = l.style;
    return u ? u[r] : void 0;
  }
  removeValueFromRenderState(l, { vars: r, style: u }) {
    delete r[l], delete u[l];
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: l } = this.props;
    ve(l) && (this.childSubscription = l.on("change", (r) => {
      this.current && (this.current.textContent = `${r}`);
    }));
  }
}
class Ra {
  constructor(l) {
    this.isMounted = !1, this.node = l;
  }
  update() {
  }
}
function kv({ top: i, left: l, right: r, bottom: u }) {
  return {
    x: { min: l, max: r },
    y: { min: i, max: u }
  };
}
function BA({ x: i, y: l }) {
  return { top: l.min, right: i.max, bottom: l.max, left: i.min };
}
function jA(i, l) {
  if (!l)
    return i;
  const r = l({ x: i.left, y: i.top }), u = l({ x: i.right, y: i.bottom });
  return {
    top: r.y,
    left: r.x,
    bottom: u.y,
    right: u.x
  };
}
function xf(i) {
  return i === void 0 || i === 1;
}
function Wf({ scale: i, scaleX: l, scaleY: r }) {
  return !xf(i) || !xf(l) || !xf(r);
}
function ai(i) {
  return Wf(i) || Jv(i) || i.z || i.rotate || i.rotateX || i.rotateY || i.skewX || i.skewY;
}
function Jv(i) {
  return Xy(i.x) || Xy(i.y);
}
function Xy(i) {
  return i && i !== "0%";
}
function Tu(i, l, r) {
  const u = i - r, c = l * u;
  return r + c;
}
function Qy(i, l, r, u, c) {
  return c !== void 0 && (i = Tu(i, c, u)), Tu(i, r, u) + l;
}
function $f(i, l = 0, r = 1, u, c) {
  i.min = Qy(i.min, l, r, u, c), i.max = Qy(i.max, l, r, u, c);
}
function Fv(i, { x: l, y: r }) {
  $f(i.x, l.translate, l.scale, l.originPoint), $f(i.y, r.translate, r.scale, r.originPoint);
}
const Zy = 0.999999999999, Ky = 1.0000000000001;
function LA(i, l, r, u = !1) {
  var m;
  const c = r.length;
  if (!c)
    return;
  l.x = l.y = 1;
  let h, d;
  for (let v = 0; v < c; v++) {
    h = r[v], d = h.projectionDelta;
    const { visualElement: y } = h.options;
    y && y.props.style && y.props.style.display === "contents" || (u && h.options.layoutScroll && h.scroll && h !== h.root && (zn(i.x, -h.scroll.offset.x), zn(i.y, -h.scroll.offset.y)), d && (l.x *= d.x.scale, l.y *= d.y.scale, Fv(i, d)), u && ai(h.latestValues) && cu(i, h.latestValues, (m = h.layout) == null ? void 0 : m.layoutBox));
  }
  l.x < Ky && l.x > Zy && (l.x = 1), l.y < Ky && l.y > Zy && (l.y = 1);
}
function zn(i, l) {
  i.min += l, i.max += l;
}
function ky(i, l, r, u, c = 0.5) {
  const h = Lt(i.min, i.max, c);
  $f(i, l, r, h, u);
}
function Jy(i, l) {
  return typeof i == "string" ? parseFloat(i) / 100 * (l.max - l.min) : i;
}
function cu(i, l, r) {
  const u = r ?? i;
  ky(i.x, Jy(l.x, u.x), l.scaleX, l.scale, l.originX), ky(i.y, Jy(l.y, u.y), l.scaleY, l.scale, l.originY);
}
function Pv(i, l) {
  return kv(jA(i.getBoundingClientRect(), l));
}
function HA(i, l, r) {
  const u = Pv(i, r), { scroll: c } = l;
  return c && (zn(u.x, c.offset.x), zn(u.y, c.offset.y)), u;
}
const GA = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, YA = ul.length;
function qA(i, l, r) {
  let u = "", c = !0;
  for (let d = 0; d < YA; d++) {
    const m = ul[d], v = i[m];
    if (v === void 0)
      continue;
    let y = !0;
    if (typeof v == "number")
      y = v === (m.startsWith("scale") ? 1 : 0);
    else {
      const b = parseFloat(v);
      y = m.startsWith("scale") ? b === 1 : b === 0;
    }
    if (!y || r) {
      const b = If(v, vu[m]);
      if (!y) {
        c = !1;
        const p = GA[m] || m;
        u += `${p}(${b}) `;
      }
      r && (l[m] = b);
    }
  }
  const h = i.pathRotation;
  return h && (c = !1, u += `rotate(${If(h, vu.pathRotation)}) `), u = u.trim(), r ? u = r(l, c ? "" : u) : c && (u = "none"), u;
}
function Rd(i, l, r) {
  const { style: u, vars: c, transformOrigin: h } = i;
  let d = !1, m = !1;
  for (const v in l) {
    const y = l[v];
    if (rl.has(v)) {
      d = !0;
      continue;
    } else if (ov(v)) {
      c[v] = y;
      continue;
    } else {
      const b = If(y, vu[v]);
      v.startsWith("origin") ? (m = !0, h[v] = b) : u[v] = b;
    }
  }
  if (l.transform || (d || r ? u.transform = qA(l, i.transform, r) : u.transform && (u.transform = "none")), m) {
    const { originX: v = "50%", originY: y = "50%", originZ: b = 0 } = h;
    u.transformOrigin = `${v} ${y} ${b}`;
  }
}
function Iv(i, { style: l, vars: r }, u, c) {
  const h = i.style;
  let d;
  for (d in l)
    h[d] = l[d];
  c == null || c.applyProjectionStyles(h, u);
  for (d in r)
    h.setProperty(d, r[d]);
}
function Fy(i, l) {
  return l.max === l.min ? 0 : i / (l.max - l.min) * 100;
}
const ss = {
  correct: (i, l) => {
    if (!l.target)
      return i;
    if (typeof i == "string")
      if (et.test(i))
        i = parseFloat(i);
      else
        return i;
    const r = Fy(i, l.target.x), u = Fy(i, l.target.y);
    return `${r}% ${u}%`;
  }
}, XA = {
  correct: (i, { treeScale: l, projectionDelta: r }) => {
    const u = i, c = dn.parse(i);
    if (c.length > 5)
      return u;
    const h = dn.createTransformer(i), d = typeof c[0] != "number" ? 1 : 0, m = r.x.scale * l.x, v = r.y.scale * l.y;
    c[0 + d] /= m, c[1 + d] /= v;
    const y = Lt(m, v, 0.5);
    return typeof c[2 + d] == "number" && (c[2 + d] /= y), typeof c[3 + d] == "number" && (c[3 + d] /= y), h(c);
  }
}, td = {
  borderRadius: {
    ...ss,
    applyTo: [...xd]
  },
  borderTopLeftRadius: ss,
  borderTopRightRadius: ss,
  borderBottomLeftRadius: ss,
  borderBottomRightRadius: ss,
  boxShadow: XA
};
function Wv(i, { layout: l, layoutId: r }) {
  return rl.has(i) || i.startsWith("origin") || (l || r !== void 0) && (!!td[i] || i === "opacity");
}
function wd(i, l, r) {
  var d;
  const u = i.style, c = l == null ? void 0 : l.style, h = {};
  if (!u)
    return h;
  for (const m in u)
    (ve(u[m]) || c && ve(c[m]) || Wv(m, i) || ((d = r == null ? void 0 : r.getValue(m)) == null ? void 0 : d.liveStyle) !== void 0) && (h[m] = u[m]);
  return h;
}
function QA(i) {
  return window.getComputedStyle(i);
}
class ZA extends Kv {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = Iv;
  }
  mount(l) {
    Da(!!l.style, "motion.create() components must forward their ref to a HTML or SVG element", "custom-component-ref"), super.mount(l);
  }
  readValueFromInstance(l, r) {
    var u;
    if (rl.has(r))
      return (u = this.projection) != null && u.isProjecting ? Gf(r) : cx(l, r);
    {
      const c = QA(l), h = (ov(r) ? c.getPropertyValue(r) : c[r]) || 0;
      return typeof h == "string" ? h.trim() : h;
    }
  }
  measureInstanceViewportBox(l, { transformPagePoint: r }) {
    return Pv(l, r);
  }
  build(l, r, u) {
    Rd(l, r, u.transformTemplate);
  }
  scrapeMotionValuesFromProps(l, r, u) {
    return wd(l, r, u);
  }
}
const KA = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, kA = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function JA(i, l, r = 1, u = 0, c = !0) {
  i.pathLength = 1;
  const h = c ? KA : kA;
  i[h.offset] = `${-u}`, i[h.array] = `${l} ${r}`;
}
const FA = [
  "offsetDistance",
  "offsetPath",
  "offsetRotate",
  "offsetAnchor"
];
function $v(i, {
  attrX: l,
  attrY: r,
  attrScale: u,
  pathLength: c,
  pathSpacing: h = 1,
  pathOffset: d = 0,
  // This is object creation, which we try to avoid per-frame.
  ...m
}, v, y, b) {
  if (Rd(i, m, y), v) {
    i.style.viewBox && (i.attrs.viewBox = i.style.viewBox);
    return;
  }
  i.attrs = i.style, i.style = {};
  const { attrs: p, style: T } = i;
  p.transform && (T.transform = p.transform, delete p.transform), (T.transform || p.transformOrigin) && (T.transformOrigin = p.transformOrigin ?? "50% 50%", delete p.transformOrigin), T.transform && (T.transformBox = (b == null ? void 0 : b.transformBox) ?? "fill-box", delete p.transformBox);
  for (const O of FA)
    p[O] !== void 0 && (T[O] = p[O], delete p[O]);
  l !== void 0 && (p.x = l), r !== void 0 && (p.y = r), u !== void 0 && (p.scale = u), c !== void 0 && JA(p, c, h, d, !1);
}
const tb = /* @__PURE__ */ new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust"
]), eb = (i) => typeof i == "string" && i.toLowerCase() === "svg";
function PA(i, l, r, u) {
  Iv(i, l, void 0, u);
  for (const c in l.attrs)
    i.setAttribute(tb.has(c) ? c : Ed(c), l.attrs[c]);
}
function nb(i, l, r) {
  const u = wd(i, l, r);
  for (const c in i)
    if (ve(i[c]) || ve(l[c])) {
      const h = ul.indexOf(c) !== -1 ? "attr" + c.charAt(0).toUpperCase() + c.substring(1) : c;
      u[h] = i[c];
    }
  return u;
}
class IA extends Kv {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = ie;
  }
  getBaseTargetFromProps(l, r) {
    return l[r];
  }
  readValueFromInstance(l, r) {
    if (rl.has(r)) {
      const u = Bv(r);
      return u && u.default || 0;
    }
    return r = tb.has(r) ? r : Ed(r), l.getAttribute(r);
  }
  scrapeMotionValuesFromProps(l, r, u) {
    return nb(l, r, u);
  }
  build(l, r, u) {
    $v(l, r, this.isSVGTag, u.transformTemplate, u.style);
  }
  renderInstance(l, r, u, c) {
    PA(l, r, u, c);
  }
  mount(l) {
    this.isSVGTag = eb(l.tagName), super.mount(l);
  }
}
const WA = zd.length;
function ab(i) {
  if (!i)
    return;
  if (!i.isControllingVariants) {
    const r = i.parent ? ab(i.parent) || {} : {};
    return i.props.initial !== void 0 && (r.initial = i.props.initial), r;
  }
  const l = {};
  for (let r = 0; r < WA; r++) {
    const u = zd[r], c = i.props[u];
    (ps(c) || c === !1) && (l[u] = c);
  }
  return l;
}
function ib(i, l) {
  if (!Array.isArray(l))
    return !1;
  const r = l.length;
  if (r !== i.length)
    return !1;
  for (let u = 0; u < r; u++)
    if (l[u] !== i[u])
      return !1;
  return !0;
}
const $A = [...Dd].reverse(), t2 = Dd.length;
function e2(i) {
  return (l) => Promise.all(l.map(({ animation: r, options: u }) => Wx(i, r, u)));
}
function n2(i) {
  let l = e2(i), r = Py(), u = !0, c = !1;
  const h = (y) => (b, p) => {
    var O;
    const T = oi(i, p, y === "exit" ? (O = i.presenceContext) == null ? void 0 : O.custom : void 0);
    if (T) {
      const { transition: w, transitionEnd: B, ..._ } = T;
      b = { ...b, ..._, ...B };
    }
    return b;
  };
  function d(y) {
    l = y(i);
  }
  function m(y) {
    const { props: b } = i, p = ab(i.parent) || {}, T = [], O = /* @__PURE__ */ new Set();
    let w = {}, B = 1 / 0;
    for (let L = 0; L < t2; L++) {
      const H = $A[L], X = r[H], Q = b[H] !== void 0 ? b[H] : p[H], nt = ps(Q), ut = H === y ? X.isActive : null;
      ut === !1 && (B = L);
      let Z = Q === p[H] && Q !== b[H] && nt;
      if (Z && (u || c) && i.manuallyAnimateOnMount && (Z = !1), X.protectedKeys = { ...w }, // If it isn't active and hasn't *just* been set as inactive
      !X.isActive && ut === null || // If we didn't and don't have any defined prop for this animation type
      !Q && !X.prevProp || // Or if the prop doesn't define an animation
      Cu(Q) || typeof Q == "boolean")
        continue;
      if (H === "exit" && X.isActive && ut !== !0) {
        X.prevResolvedValues && (w = {
          ...w,
          ...X.prevResolvedValues
        });
        continue;
      }
      const N = a2(X.prevProp, Q);
      let dt = N || // If we're making this variant active, we want to always make it active
      H === y && X.isActive && !Z && nt || // If we removed a higher-priority variant (i is in reverse order)
      L > B && nt, it = !1;
      const pt = Array.isArray(Q) ? Q : [Q];
      let bt = pt.reduce(h(H), {});
      ut === !1 && (bt = {});
      const { prevResolvedValues: Xt = {} } = X, Ut = {
        ...Xt,
        ...bt
      }, St = (k) => {
        dt = !0, O.has(k) && (it = !0, O.delete(k)), X.needsAnimating[k] = !0;
        const q = i.getValue(k);
        q && (q.liveStyle = !1);
      };
      for (const k in Ut) {
        const q = bt[k], G = Xt[k];
        if (w.hasOwnProperty(k))
          continue;
        let Bt = !1;
        Kf(q) && Kf(G) ? Bt = !ib(q, G) || N : Bt = q !== G, Bt ? q != null ? St(k) : O.add(k) : q !== void 0 && O.has(k) ? St(k) : X.protectedKeys[k] = !0;
      }
      X.prevProp = Q, X.prevResolvedValues = bt, X.isActive && (w = { ...w, ...bt }), (u || c) && i.blockInitialAnimation && (dt = !1);
      const Y = Z && N;
      dt && (!Y || it) && T.push(...pt.map((k) => {
        const q = { type: H };
        if (typeof k == "string" && (u || c) && !Y && i.manuallyAnimateOnMount && i.parent) {
          const { parent: G } = i, Bt = oi(G, k);
          if (G.enteringChildren && Bt) {
            const { delayChildren: Pt } = Bt.transition || {};
            q.delay = Dv(G.enteringChildren, i, Pt);
          }
        }
        return {
          animation: k,
          options: q
        };
      }));
    }
    if (O.size) {
      const L = {};
      if (typeof b.initial != "boolean") {
        const H = oi(i, Array.isArray(b.initial) ? b.initial[0] : b.initial);
        H && H.transition && (L.transition = H.transition);
      }
      O.forEach((H) => {
        const X = i.getBaseTarget(H), Q = i.getValue(H);
        Q && (Q.liveStyle = !0), L[H] = X ?? null;
      }), T.push({ animation: L });
    }
    let _ = !!T.length;
    return u && (b.initial === !1 || b.initial === b.animate) && !i.manuallyAnimateOnMount && (_ = !1), u = !1, c = !1, _ ? l(T) : Promise.resolve();
  }
  function v(y, b) {
    var T;
    if (r[y].isActive === b)
      return Promise.resolve();
    (T = i.variantChildren) == null || T.forEach((O) => {
      var w;
      return (w = O.animationState) == null ? void 0 : w.setActive(y, b);
    }), r[y].isActive = b;
    const p = m(y);
    for (const O in r)
      r[O].protectedKeys = {};
    return p;
  }
  return {
    animateChanges: m,
    setActive: v,
    setAnimateFunction: d,
    getState: () => r,
    reset: () => {
      r = Py(), c = !0;
    }
  };
}
function a2(i, l) {
  return typeof l == "string" ? l !== i : Array.isArray(l) ? !ib(l, i) : !1;
}
function ei(i = !1) {
  return {
    isActive: i,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function Py() {
  return {
    animate: ei(!0),
    whileInView: ei(),
    whileHover: ei(),
    whileTap: ei(),
    whileDrag: ei(),
    whileFocus: ei(),
    exit: ei()
  };
}
function ed(i, l) {
  i.min = l.min, i.max = l.max;
}
function cn(i, l) {
  ed(i.x, l.x), ed(i.y, l.y);
}
function Iy(i, l) {
  i.translate = l.translate, i.scale = l.scale, i.originPoint = l.originPoint, i.origin = l.origin;
}
const lb = 1e-4, i2 = 1 - lb, l2 = 1 + lb, sb = 0.01, s2 = 0 - sb, o2 = 0 + sb;
function Me(i) {
  return i.max - i.min;
}
function u2(i, l, r) {
  return Math.abs(i - l) <= r;
}
function Wy(i, l, r, u = 0.5) {
  i.origin = u, i.originPoint = Lt(l.min, l.max, i.origin), i.scale = Me(r) / Me(l), i.translate = Lt(r.min, r.max, i.origin) - i.originPoint, (i.scale >= i2 && i.scale <= l2 || isNaN(i.scale)) && (i.scale = 1), (i.translate >= s2 && i.translate <= o2 || isNaN(i.translate)) && (i.translate = 0);
}
function ds(i, l, r, u) {
  Wy(i.x, l.x, r.x, u ? u.originX : void 0), Wy(i.y, l.y, r.y, u ? u.originY : void 0);
}
function $y(i, l, r, u = 0) {
  const c = u ? Lt(r.min, r.max, u) : r.min;
  i.min = c + l.min, i.max = i.min + Me(l);
}
function r2(i, l, r, u) {
  $y(i.x, l.x, r.x, u == null ? void 0 : u.x), $y(i.y, l.y, r.y, u == null ? void 0 : u.y);
}
function t0(i, l, r, u = 0) {
  const c = u ? Lt(r.min, r.max, u) : r.min;
  i.min = l.min - c, i.max = i.min + Me(l);
}
function Eu(i, l, r, u) {
  t0(i.x, l.x, r.x, u == null ? void 0 : u.x), t0(i.y, l.y, r.y, u == null ? void 0 : u.y);
}
function e0(i, l, r, u, c) {
  return i -= l, i = Tu(i, 1 / r, u), c !== void 0 && (i = Tu(i, 1 / c, u)), i;
}
function c2(i, l = 0, r = 1, u = 0.5, c, h = i, d = i) {
  if (On.test(l) && (l = parseFloat(l), l = Lt(d.min, d.max, l / 100) - d.min), typeof l != "number")
    return;
  let m = Lt(h.min, h.max, u);
  i === h && (m -= l), i.min = e0(i.min, l, r, m, c), i.max = e0(i.max, l, r, m, c);
}
function n0(i, l, [r, u, c], h, d) {
  c2(i, l[r], l[u], l[c], l.scale, h, d);
}
const f2 = ["x", "scaleX", "originX"], d2 = ["y", "scaleY", "originY"];
function a0(i, l, r, u) {
  n0(i.x, l, f2, r ? r.x : void 0, u ? u.x : void 0), n0(i.y, l, d2, r ? r.y : void 0, u ? u.y : void 0);
}
function i0(i) {
  return i.translate === 0 && i.scale === 1;
}
function ob(i) {
  return i0(i.x) && i0(i.y);
}
function l0(i, l) {
  return i.min === l.min && i.max === l.max;
}
function h2(i, l) {
  return l0(i.x, l.x) && l0(i.y, l.y);
}
function s0(i, l) {
  return Math.round(i.min) === Math.round(l.min) && Math.round(i.max) === Math.round(l.max);
}
function ub(i, l) {
  return s0(i.x, l.x) && s0(i.y, l.y);
}
function o0(i) {
  return Me(i.x) / Me(i.y);
}
function u0(i, l) {
  return i.translate === l.translate && i.scale === l.scale && i.originPoint === l.originPoint;
}
function Dn(i) {
  return [i("x"), i("y")];
}
function m2(i, l, r) {
  let u = "";
  const c = i.x.translate / l.x, h = i.y.translate / l.y, d = (r == null ? void 0 : r.z) || 0;
  if ((c || h || d) && (u = `translate3d(${c}px, ${h}px, ${d}px) `), (l.x !== 1 || l.y !== 1) && (u += `scale(${1 / l.x}, ${1 / l.y}) `), r) {
    const { transformPerspective: y, rotate: b, pathRotation: p, rotateX: T, rotateY: O, skewX: w, skewY: B } = r;
    y && (u = `perspective(${y}px) ${u}`), b && (u += `rotate(${b}deg) `), p && (u += `rotate(${p}deg) `), T && (u += `rotateX(${T}deg) `), O && (u += `rotateY(${O}deg) `), w && (u += `skewX(${w}deg) `), B && (u += `skewY(${B}deg) `);
  }
  const m = i.x.scale * l.x, v = i.y.scale * l.y;
  return (m !== 1 || v !== 1) && (u += `scale(${m}, ${v})`), u || "none";
}
const g2 = xd.length, r0 = (i) => typeof i == "string" ? parseFloat(i) : i, c0 = (i) => typeof i == "number" || et.test(i);
function p2(i, l, r, u, c, h) {
  c ? (i.opacity = Lt(0, r.opacity ?? 1, y2(u)), i.opacityExit = Lt(l.opacity ?? 1, 0, v2(u))) : h && (i.opacity = Lt(l.opacity ?? 1, r.opacity ?? 1, u));
  for (let d = 0; d < g2; d++) {
    const m = xd[d];
    let v = f0(l, m), y = f0(r, m);
    if (v === void 0 && y === void 0)
      continue;
    v || (v = 0), y || (y = 0), v === 0 || y === 0 || c0(v) === c0(y) ? (i[m] = Math.max(Lt(r0(v), r0(y), u), 0), (On.test(y) || On.test(v)) && (i[m] += "%")) : i[m] = y;
  }
  (l.rotate || r.rotate) && (i.rotate = Lt(l.rotate || 0, r.rotate || 0, u));
}
function f0(i, l) {
  return i[l] !== void 0 ? i[l] : i.borderRadius;
}
const y2 = /* @__PURE__ */ rb(0, 0.5, ev), v2 = /* @__PURE__ */ rb(0.5, 0.95, nn);
function rb(i, l, r) {
  return (u) => u < i ? 0 : u > l ? 1 : r(/* @__PURE__ */ ms(i, l, u));
}
function b2(i, l, r) {
  const u = ve(i) ? i : sl(i);
  return u.start(Sd("", u, l, r)), u.animation;
}
function ys(i, l, r, u = { passive: !0 }) {
  return i.addEventListener(l, r, u), () => i.removeEventListener(l, r, u);
}
const S2 = (i, l) => i.depth - l.depth;
class T2 {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(l) {
    ud(this.children, l), this.isDirty = !0;
  }
  remove(l) {
    hu(this.children, l), this.isDirty = !0;
  }
  forEach(l) {
    this.isDirty && this.children.sort(S2), this.isDirty = !1, this.children.forEach(l);
  }
}
function E2(i, l) {
  const r = Ae.now(), u = ({ timestamp: c }) => {
    const h = c - r;
    h >= l && (Oa(u), i(h - l));
  };
  return Ht.setup(u, !0), () => Oa(u);
}
function fu(i) {
  return ve(i) ? i.get() : i;
}
class x2 {
  constructor() {
    this.members = [];
  }
  add(l) {
    ud(this.members, l);
    for (let r = this.members.length - 1; r >= 0; r--) {
      const u = this.members[r];
      if (u === l || u === this.lead || u === this.prevLead)
        continue;
      const c = u.instance;
      (!c || c.isConnected === !1) && !u.snapshot && (hu(this.members, u), u.unmount());
    }
    l.scheduleRender();
  }
  remove(l) {
    if (hu(this.members, l), l === this.prevLead && (this.prevLead = void 0), l === this.lead) {
      const r = this.members[this.members.length - 1];
      r && this.promote(r);
    }
  }
  relegate(l) {
    var r;
    for (let u = this.members.indexOf(l) - 1; u >= 0; u--) {
      const c = this.members[u];
      if (c.isPresent !== !1 && ((r = c.instance) == null ? void 0 : r.isConnected) !== !1)
        return this.promote(c), !0;
    }
    return !1;
  }
  promote(l, r) {
    var c;
    const u = this.lead;
    if (l !== u && (this.prevLead = u, this.lead = l, l.show(), u)) {
      u.updateSnapshot(), l.scheduleRender();
      const { layoutDependency: h } = u.options, { layoutDependency: d } = l.options;
      (h === void 0 || h !== d) && (l.resumeFrom = u, r && (u.preserveOpacity = !0), u.snapshot && (l.snapshot = u.snapshot, l.snapshot.latestValues = u.animationValues || u.latestValues), (c = l.root) != null && c.isUpdating && (l.isLayoutDirty = !0)), l.options.crossfade === !1 && u.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((l) => {
      var r, u, c, h, d;
      (u = (r = l.options).onExitComplete) == null || u.call(r), (d = (c = l.resumingFrom) == null ? void 0 : (h = c.options).onExitComplete) == null || d.call(h);
    });
  }
  scheduleRender() {
    this.members.forEach((l) => l.instance && l.scheduleRender(!1));
  }
  removeLeadSnapshot() {
    var l;
    (l = this.lead) != null && l.snapshot && (this.lead.snapshot = void 0);
  }
}
const du = {
  /**
   * Global flag as to whether the tree has animated since the last time
   * we resized the window
   */
  hasAnimatedSinceResize: !0,
  /**
   * We set this to true once, on the first update. Any nodes added to the tree beyond that
   * update will be given a `data-projection-id` attribute.
   */
  hasEverUpdated: !1
}, Af = ["", "X", "Y", "Z"], A2 = 1e3;
let M2 = 0;
function Mf(i, l, r, u) {
  const { latestValues: c } = l;
  c[i] && (r[i] = c[i], l.setStaticValue(i, 0), u && (u[i] = 0));
}
function cb(i) {
  if (i.hasCheckedOptimisedAppear = !0, i.root === i)
    return;
  const { visualElement: l } = i.options;
  if (!l)
    return;
  const r = Nv(l);
  if (window.MotionHasOptimisedAnimation(r, "transform")) {
    const { layout: c, layoutId: h } = i.options;
    window.MotionCancelOptimisedAnimation(r, "transform", Ht, !(c || h));
  }
  const { parent: u } = i;
  u && !u.hasCheckedOptimisedAppear && cb(u);
}
function fb({ attachResizeListener: i, defaultParent: l, measureScroll: r, checkIsScrollRoot: u, resetTransform: c }) {
  return class {
    constructor(d = {}, m = l == null ? void 0 : l()) {
      this.id = M2++, this.animationId = 0, this.animationCommitId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.layoutVersion = 0, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, this.nodes.forEach(z2), this.nodes.forEach(V2), this.nodes.forEach(U2), this.nodes.forEach(O2);
      }, this.resolvedRelativeTargetAt = 0, this.linkedParentVersion = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = d, this.root = m ? m.root || m : this, this.path = m ? [...m.path, m] : [], this.parent = m, this.depth = m ? m.depth + 1 : 0;
      for (let v = 0; v < this.path.length; v++)
        this.path[v].shouldResetTransform = !0;
      this.root === this && (this.nodes = new T2());
    }
    addEventListener(d, m) {
      return this.eventHandlers.has(d) || this.eventHandlers.set(d, new rd()), this.eventHandlers.get(d).add(m);
    }
    notifyListeners(d, ...m) {
      const v = this.eventHandlers.get(d);
      v && v.notify(...m);
    }
    hasListeners(d) {
      return this.eventHandlers.has(d);
    }
    /**
     * Lifecycles
     */
    mount(d) {
      if (this.instance)
        return;
      this.isSVG = Cd(d) && !zA(d), this.instance = d;
      const { layoutId: m, layout: v, visualElement: y } = this.options;
      if (y && !y.current && y.mount(d), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (v || m) && (this.isLayoutDirty = !0), i) {
        let b, p = 0;
        const T = () => this.root.updateBlockedByResize = !1;
        Ht.read(() => {
          p = window.innerWidth;
        }), i(d, () => {
          const O = window.innerWidth;
          O !== p && (p = O, this.root.updateBlockedByResize = !0, b && b(), b = E2(T, 250), du.hasAnimatedSinceResize && (du.hasAnimatedSinceResize = !1, this.nodes.forEach(m0)));
        });
      }
      m && this.root.registerSharedNode(m, this), this.options.animate !== !1 && y && (m || v) && this.addEventListener("didUpdate", ({ delta: b, hasLayoutChanged: p, hasRelativeLayoutChanged: T, layout: O }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const w = this.options.transition || y.getDefaultTransition() || G2, { onLayoutAnimationStart: B, onLayoutAnimationComplete: _ } = y.getProps(), L = !this.targetLayout || !ub(this.targetLayout, O), H = !p && T;
        if (this.options.layoutRoot || this.resumeFrom || H || p && (L || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
          const X = {
            ...bd(w, "layout"),
            onPlay: B,
            onComplete: _
          };
          (y.shouldReduceMotion || this.options.layoutRoot) && (X.delay = 0, X.type = !1), this.startAnimation(X), this.setAnimationOrigin(b, H, X.path);
        } else
          p || m0(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = O;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const d = this.getStack();
      d && d.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), Oa(this.updateProjection);
    }
    // only on the root
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1;
    }
    // Note: currently only running on root node
    startUpdate() {
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(B2), this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: d } = this.options;
      return d && d.getProps().transformTemplate;
    }
    willUpdate(d = !0) {
      if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && cb(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      this.isLayoutDirty = !0;
      for (let b = 0; b < this.path.length; b++) {
        const p = this.path[b];
        p.shouldResetTransform = !0, (typeof p.latestValues.x == "string" || typeof p.latestValues.y == "string") && (p.isLayoutDirty = !0), p.updateScroll("snapshot"), p.options.layoutRoot && p.willUpdate(!1);
      }
      const { layoutId: m, layout: v } = this.options;
      if (m === void 0 && !v)
        return;
      const y = this.getTransformTemplate();
      this.prevTransformTemplateValue = y ? y(this.latestValues, "") : void 0, this.updateSnapshot(), d && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        const v = this.updateBlockedByResize;
        this.unblockUpdate(), this.updateBlockedByResize = !1, this.clearAllSnapshots(), v && this.nodes.forEach(w2), this.nodes.forEach(d0);
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(h0);
        return;
      }
      this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(N2), this.nodes.forEach(_2), this.nodes.forEach(C2), this.nodes.forEach(D2)) : this.nodes.forEach(h0), this.clearAllSnapshots();
      const m = Ae.now();
      ye.delta = Rn(0, 1e3 / 60, m - ye.timestamp), ye.timestamp = m, ye.isProcessing = !0, pf.update.process(ye), pf.preRender.process(ye), pf.render.process(ye), ye.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, Ad.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(R2), this.sharedNodes.forEach(j2);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, Ht.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      Ht.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    /**
     * Update measurements
     */
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !Me(this.snapshot.measuredBox.x) && !Me(this.snapshot.measuredBox.y) && (this.snapshot = void 0));
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let v = 0; v < this.path.length; v++)
          this.path[v].updateScroll();
      const d = this.layout;
      this.layout = this.measure(!1), this.layoutVersion++, this.layoutCorrected || (this.layoutCorrected = ie()), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: m } = this.options;
      m && m.notify("LayoutMeasure", this.layout.layoutBox, d ? d.layoutBox : void 0);
    }
    updateScroll(d = "measure") {
      let m = !!(this.options.layoutScroll && this.instance);
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === d && (m = !1), m && this.instance) {
        const v = u(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: d,
          isRoot: v,
          offset: r(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : v
        };
      }
    }
    resetTransform() {
      if (!c)
        return;
      const d = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, m = this.projectionDelta && !ob(this.projectionDelta), v = this.getTransformTemplate(), y = v ? v(this.latestValues, "") : void 0, b = y !== this.prevTransformTemplateValue;
      d && this.instance && (m || ai(this.latestValues) || b) && (c(this.instance, y), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(d = !0) {
      const m = this.measurePageBox();
      let v = this.removeElementScroll(m);
      return d && (v = this.removeTransform(v)), Y2(v), {
        animationId: this.root.animationId,
        measuredBox: m,
        layoutBox: v,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      var y;
      const { visualElement: d } = this.options;
      if (!d)
        return ie();
      const m = d.measureViewportBox();
      if (!(((y = this.scroll) == null ? void 0 : y.wasRoot) || this.path.some(q2))) {
        const { scroll: b } = this.root;
        b && (zn(m.x, b.offset.x), zn(m.y, b.offset.y));
      }
      return m;
    }
    removeElementScroll(d) {
      var v;
      const m = ie();
      if (cn(m, d), (v = this.scroll) != null && v.wasRoot)
        return m;
      for (let y = 0; y < this.path.length; y++) {
        const b = this.path[y], { scroll: p, options: T } = b;
        b !== this.root && p && T.layoutScroll && (p.wasRoot && cn(m, d), zn(m.x, p.offset.x), zn(m.y, p.offset.y));
      }
      return m;
    }
    applyTransform(d, m = !1, v) {
      var b, p;
      const y = v || ie();
      cn(y, d);
      for (let T = 0; T < this.path.length; T++) {
        const O = this.path[T];
        !m && O.options.layoutScroll && O.scroll && O !== O.root && (zn(y.x, -O.scroll.offset.x), zn(y.y, -O.scroll.offset.y)), ai(O.latestValues) && cu(y, O.latestValues, (b = O.layout) == null ? void 0 : b.layoutBox);
      }
      return ai(this.latestValues) && cu(y, this.latestValues, (p = this.layout) == null ? void 0 : p.layoutBox), y;
    }
    removeTransform(d) {
      var v;
      const m = ie();
      cn(m, d);
      for (let y = 0; y < this.path.length; y++) {
        const b = this.path[y];
        if (!ai(b.latestValues))
          continue;
        let p;
        b.instance && (Wf(b.latestValues) && b.updateSnapshot(), p = ie(), cn(p, b.measurePageBox())), a0(m, b.latestValues, (v = b.snapshot) == null ? void 0 : v.layoutBox, p);
      }
      return ai(this.latestValues) && a0(m, this.latestValues), m;
    }
    setTargetDelta(d) {
      this.targetDelta = d, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0;
    }
    setOptions(d) {
      this.options = {
        ...this.options,
        ...d,
        crossfade: d.crossfade !== void 0 ? d.crossfade : !0
      };
    }
    clearMeasurements() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== ye.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(d = !1) {
      var O;
      const m = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = m.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = m.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = m.isSharedProjectionDirty);
      const v = !!this.resumingFrom || this !== m;
      if (!(d || v && this.isSharedProjectionDirty || this.isProjectionDirty || (O = this.parent) != null && O.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
        return;
      const { layout: b, layoutId: p } = this.options;
      if (!this.layout || !(b || p))
        return;
      this.resolvedRelativeTargetAt = ye.timestamp;
      const T = this.getClosestProjectingParent();
      T && this.linkedParentVersion !== T.layoutVersion && !T.options.layoutRoot && this.removeRelativeTarget(), !this.targetDelta && !this.relativeTarget && (this.options.layoutAnchor !== !1 && T && T.layout ? this.createRelativeTarget(T, this.layout.layoutBox, T.layout.layoutBox) : this.removeRelativeTarget()), !(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = ie(), this.targetWithTransforms = ie()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), r2(this.target, this.relativeTarget, this.relativeParent.target, this.options.layoutAnchor || void 0)) : this.targetDelta ? (this.resumingFrom ? this.applyTransform(this.layout.layoutBox, !1, this.target) : cn(this.target, this.layout.layoutBox), Fv(this.target, this.targetDelta)) : cn(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1, this.options.layoutAnchor !== !1 && T && !!T.resumingFrom == !!this.resumingFrom && !T.options.layoutScroll && T.target && this.animationProgress !== 1 ? this.createRelativeTarget(T, this.target, T.target) : this.relativeParent = this.relativeTarget = void 0));
    }
    getClosestProjectingParent() {
      if (!(!this.parent || Wf(this.parent.latestValues) || Jv(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    createRelativeTarget(d, m, v) {
      this.relativeParent = d, this.linkedParentVersion = d.layoutVersion, this.forceRelativeParentToResolveTarget(), this.relativeTarget = ie(), this.relativeTargetOrigin = ie(), Eu(this.relativeTargetOrigin, m, v, this.options.layoutAnchor || void 0), cn(this.relativeTarget, this.relativeTargetOrigin);
    }
    removeRelativeTarget() {
      this.relativeParent = this.relativeTarget = void 0;
    }
    calcProjection() {
      var w;
      const d = this.getLead(), m = !!this.resumingFrom || this !== d;
      let v = !0;
      if ((this.isProjectionDirty || (w = this.parent) != null && w.isProjectionDirty) && (v = !1), m && (this.isSharedProjectionDirty || this.isTransformDirty) && (v = !1), this.resolvedRelativeTargetAt === ye.timestamp && (v = !1), v)
        return;
      const { layout: y, layoutId: b } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(y || b))
        return;
      cn(this.layoutCorrected, this.layout.layoutBox);
      const p = this.treeScale.x, T = this.treeScale.y;
      LA(this.layoutCorrected, this.treeScale, this.path, m), d.layout && !d.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (d.target = d.layout.layoutBox, d.targetWithTransforms = ie());
      const { target: O } = d;
      if (!O) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (Iy(this.prevProjectionDelta.x, this.projectionDelta.x), Iy(this.prevProjectionDelta.y, this.projectionDelta.y)), ds(this.projectionDelta, this.layoutCorrected, O, this.latestValues), (this.treeScale.x !== p || this.treeScale.y !== T || !u0(this.projectionDelta.x, this.prevProjectionDelta.x) || !u0(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", O));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(d = !0) {
      var m;
      if ((m = this.options.visualElement) == null || m.scheduleRender(), d) {
        const v = this.getStack();
        v && v.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      this.prevProjectionDelta = il(), this.projectionDelta = il(), this.projectionDeltaWithTransform = il();
    }
    setAnimationOrigin(d, m = !1, v) {
      const y = this.snapshot, b = y ? y.latestValues : {}, p = { ...this.latestValues }, T = il();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !m;
      const O = ie(), w = y ? y.source : void 0, B = this.layout ? this.layout.source : void 0, _ = w !== B, L = this.getStack(), H = !L || L.members.length <= 1, X = !!(_ && !H && this.options.crossfade === !0 && !this.path.some(H2));
      this.animationProgress = 0;
      let Q;
      const nt = v == null ? void 0 : v.interpolateProjection(d);
      this.mixTargetDelta = (ut) => {
        const Z = ut / 1e3, N = nt == null ? void 0 : nt(Z);
        N ? (T.x.translate = N.x, T.x.scale = Lt(d.x.scale, 1, Z), T.x.origin = d.x.origin, T.x.originPoint = d.x.originPoint, T.y.translate = N.y, T.y.scale = Lt(d.y.scale, 1, Z), T.y.origin = d.y.origin, T.y.originPoint = d.y.originPoint) : (g0(T.x, d.x, Z), g0(T.y, d.y, Z)), this.setTargetDelta(T), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Eu(O, this.layout.layoutBox, this.relativeParent.layout.layoutBox, this.options.layoutAnchor || void 0), L2(this.relativeTarget, this.relativeTargetOrigin, O, Z), Q && h2(this.relativeTarget, Q) && (this.isProjectionDirty = !1), Q || (Q = ie()), cn(Q, this.relativeTarget)), _ && (this.animationValues = p, p2(p, b, this.latestValues, Z, X, H)), N && N.rotate !== void 0 && (this.animationValues || (this.animationValues = p), this.animationValues.pathRotation = N.rotate), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = Z;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(d) {
      var m, v, y;
      this.notifyListeners("animationStart"), (m = this.currentAnimation) == null || m.stop(), (y = (v = this.resumingFrom) == null ? void 0 : v.currentAnimation) == null || y.stop(), this.pendingAnimation && (Oa(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = Ht.update(() => {
        du.hasAnimatedSinceResize = !0, this.motionValue || (this.motionValue = sl(0)), this.motionValue.jump(0, !1), this.currentAnimation = b2(this.motionValue, [0, 1e3], {
          ...d,
          velocity: 0,
          isSync: !0,
          onUpdate: (b) => {
            this.mixTargetDelta(b), d.onUpdate && d.onUpdate(b);
          },
          onComplete: () => {
            d.onComplete && d.onComplete(), this.completeAnimation();
          }
        }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      const d = this.getStack();
      d && d.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(A2), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const d = this.getLead();
      let { targetWithTransforms: m, target: v, layout: y, latestValues: b } = d;
      if (!(!m || !v || !y)) {
        if (this !== d && this.layout && y && db(this.options.animationType, this.layout.layoutBox, y.layoutBox)) {
          v = this.target || ie();
          const p = Me(this.layout.layoutBox.x);
          v.x.min = d.target.x.min, v.x.max = v.x.min + p;
          const T = Me(this.layout.layoutBox.y);
          v.y.min = d.target.y.min, v.y.max = v.y.min + T;
        }
        cn(m, v), cu(m, b), ds(this.projectionDeltaWithTransform, this.layoutCorrected, m, b);
      }
    }
    registerSharedNode(d, m) {
      this.sharedNodes.has(d) || this.sharedNodes.set(d, new x2()), this.sharedNodes.get(d).add(m);
      const y = m.options.initialPromotionConfig;
      m.promote({
        transition: y ? y.transition : void 0,
        preserveFollowOpacity: y && y.shouldPreserveFollowOpacity ? y.shouldPreserveFollowOpacity(m) : void 0
      });
    }
    isLead() {
      const d = this.getStack();
      return d ? d.lead === this : !0;
    }
    getLead() {
      var m;
      const { layoutId: d } = this.options;
      return d ? ((m = this.getStack()) == null ? void 0 : m.lead) || this : this;
    }
    getPrevLead() {
      var m;
      const { layoutId: d } = this.options;
      return d ? (m = this.getStack()) == null ? void 0 : m.prevLead : void 0;
    }
    getStack() {
      const { layoutId: d } = this.options;
      if (d)
        return this.root.sharedNodes.get(d);
    }
    promote({ needsReset: d, transition: m, preserveFollowOpacity: v } = {}) {
      const y = this.getStack();
      y && y.promote(this, v), d && (this.projectionDelta = void 0, this.needsReset = !0), m && this.setOptions({ transition: m });
    }
    relegate() {
      const d = this.getStack();
      return d ? d.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: d } = this.options;
      if (!d)
        return;
      let m = !1;
      const { latestValues: v } = d;
      if ((v.z || v.rotate || v.rotateX || v.rotateY || v.rotateZ || v.skewX || v.skewY) && (m = !0), !m)
        return;
      const y = {};
      v.z && Mf("z", d, y, this.animationValues);
      for (let b = 0; b < Af.length; b++)
        Mf(`rotate${Af[b]}`, d, y, this.animationValues), Mf(`skew${Af[b]}`, d, y, this.animationValues);
      d.render();
      for (const b in y)
        d.setStaticValue(b, y[b]), this.animationValues && (this.animationValues[b] = y[b]);
      d.scheduleRender();
    }
    applyProjectionStyles(d, m) {
      if (!this.instance || this.isSVG)
        return;
      if (!this.isVisible) {
        d.visibility = "hidden";
        return;
      }
      const v = this.getTransformTemplate();
      if (this.needsReset) {
        this.needsReset = !1, d.visibility = "", d.opacity = "", d.pointerEvents = fu(m == null ? void 0 : m.pointerEvents) || "", d.transform = v ? v(this.latestValues, "") : "none";
        return;
      }
      const y = this.getLead();
      if (!this.projectionDelta || !this.layout || !y.target) {
        this.options.layoutId && (d.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, d.pointerEvents = fu(m == null ? void 0 : m.pointerEvents) || ""), this.hasProjected && !ai(this.latestValues) && (d.transform = v ? v({}, "") : "none", this.hasProjected = !1);
        return;
      }
      d.visibility = "";
      const b = y.animationValues || y.latestValues;
      this.applyTransformsToTarget();
      let p = m2(this.projectionDeltaWithTransform, this.treeScale, b);
      v && (p = v(b, p)), d.transform = p;
      const { x: T, y: O } = this.projectionDelta;
      d.transformOrigin = `${T.origin * 100}% ${O.origin * 100}% 0`, y.animationValues ? d.opacity = y === this ? b.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : b.opacityExit : d.opacity = y === this ? b.opacity !== void 0 ? b.opacity : "" : b.opacityExit !== void 0 ? b.opacityExit : 0;
      for (const w in td) {
        if (b[w] === void 0)
          continue;
        const { correct: B, applyTo: _, isCSSVariable: L } = td[w], H = p === "none" ? b[w] : B(b[w], y);
        if (_) {
          const X = _.length;
          for (let Q = 0; Q < X; Q++)
            d[_[Q]] = H;
        } else
          L ? this.options.visualElement.renderState.vars[w] = H : d[w] = H;
      }
      this.options.layoutId && (d.pointerEvents = y === this ? fu(m == null ? void 0 : m.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((d) => {
        var m;
        return (m = d.currentAnimation) == null ? void 0 : m.stop();
      }), this.root.nodes.forEach(d0), this.root.sharedNodes.clear();
    }
  };
}
function C2(i) {
  i.updateLayout();
}
function D2(i) {
  var r;
  const l = ((r = i.resumeFrom) == null ? void 0 : r.snapshot) || i.snapshot;
  if (i.isLead() && i.layout && l && i.hasListeners("didUpdate")) {
    const { layoutBox: u, measuredBox: c } = i.layout, { animationType: h } = i.options, d = l.source !== i.layout.source;
    if (h === "size")
      Dn((p) => {
        const T = d ? l.measuredBox[p] : l.layoutBox[p], O = Me(T);
        T.min = u[p].min, T.max = T.min + O;
      });
    else if (h === "x" || h === "y") {
      const p = h === "x" ? "y" : "x";
      ed(d ? l.measuredBox[p] : l.layoutBox[p], u[p]);
    } else db(h, l.layoutBox, u) && Dn((p) => {
      const T = d ? l.measuredBox[p] : l.layoutBox[p], O = Me(u[p]);
      T.max = T.min + O, i.relativeTarget && !i.currentAnimation && (i.isProjectionDirty = !0, i.relativeTarget[p].max = i.relativeTarget[p].min + O);
    });
    const m = il();
    ds(m, u, l.layoutBox);
    const v = il();
    d ? ds(v, i.applyTransform(c, !0), l.measuredBox) : ds(v, u, l.layoutBox);
    const y = !ob(m);
    let b = !1;
    if (!i.resumeFrom) {
      const p = i.getClosestProjectingParent();
      if (p && !p.resumeFrom) {
        const { snapshot: T, layout: O } = p;
        if (T && O) {
          const w = i.options.layoutAnchor || void 0, B = ie();
          Eu(B, l.layoutBox, T.layoutBox, w);
          const _ = ie();
          Eu(_, u, O.layoutBox, w), ub(B, _) || (b = !0), p.options.layoutRoot && (i.relativeTarget = _, i.relativeTargetOrigin = B, i.relativeParent = p);
        }
      }
    }
    i.notifyListeners("didUpdate", {
      layout: u,
      snapshot: l,
      delta: v,
      layoutDelta: m,
      hasLayoutChanged: y,
      hasRelativeLayoutChanged: b
    });
  } else if (i.isLead()) {
    const { onExitComplete: u } = i.options;
    u && u();
  }
  i.options.transition = void 0;
}
function z2(i) {
  i.parent && (i.isProjecting() || (i.isProjectionDirty = i.parent.isProjectionDirty), i.isSharedProjectionDirty || (i.isSharedProjectionDirty = !!(i.isProjectionDirty || i.parent.isProjectionDirty || i.parent.isSharedProjectionDirty)), i.isTransformDirty || (i.isTransformDirty = i.parent.isTransformDirty));
}
function O2(i) {
  i.isProjectionDirty = i.isSharedProjectionDirty = i.isTransformDirty = !1;
}
function R2(i) {
  i.clearSnapshot();
}
function d0(i) {
  i.clearMeasurements();
}
function w2(i) {
  i.isLayoutDirty = !0, i.updateLayout();
}
function h0(i) {
  i.isLayoutDirty = !1;
}
function N2(i) {
  i.isAnimationBlocked && i.layout && !i.isLayoutDirty && (i.snapshot = i.layout, i.isLayoutDirty = !0);
}
function _2(i) {
  const { visualElement: l } = i.options;
  l && l.getProps().onBeforeLayoutMeasure && l.notify("BeforeLayoutMeasure"), i.resetTransform();
}
function m0(i) {
  i.finishAnimation(), i.targetDelta = i.relativeTarget = i.target = void 0, i.isProjectionDirty = !0;
}
function V2(i) {
  i.resolveTargetDelta();
}
function U2(i) {
  i.calcProjection();
}
function B2(i) {
  i.resetSkewAndRotation();
}
function j2(i) {
  i.removeLeadSnapshot();
}
function g0(i, l, r) {
  i.translate = Lt(l.translate, 0, r), i.scale = Lt(l.scale, 1, r), i.origin = l.origin, i.originPoint = l.originPoint;
}
function p0(i, l, r, u) {
  i.min = Lt(l.min, r.min, u), i.max = Lt(l.max, r.max, u);
}
function L2(i, l, r, u) {
  p0(i.x, l.x, r.x, u), p0(i.y, l.y, r.y, u);
}
function H2(i) {
  return i.animationValues && i.animationValues.opacityExit !== void 0;
}
const G2 = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, y0 = (i) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(i), v0 = y0("applewebkit/") && !y0("chrome/") ? Math.round : nn;
function b0(i) {
  i.min = v0(i.min), i.max = v0(i.max);
}
function Y2(i) {
  b0(i.x), b0(i.y);
}
function db(i, l, r) {
  return i === "position" || i === "preserve-aspect" && !u2(o0(l), o0(r), 0.2);
}
function q2(i) {
  var l;
  return i !== i.root && ((l = i.scroll) == null ? void 0 : l.wasRoot);
}
const X2 = fb({
  attachResizeListener: (i, l) => ys(i, "resize", l),
  measureScroll: () => {
    var i, l;
    return {
      x: document.documentElement.scrollLeft || ((i = document.body) == null ? void 0 : i.scrollLeft) || 0,
      y: document.documentElement.scrollTop || ((l = document.body) == null ? void 0 : l.scrollTop) || 0
    };
  },
  checkIsScrollRoot: () => !0
}), Cf = {
  current: void 0
}, hb = fb({
  measureScroll: (i) => ({
    x: i.scrollLeft,
    y: i.scrollTop
  }),
  defaultParent: () => {
    if (!Cf.current) {
      const i = new X2({});
      i.mount(window), i.setOptions({ layoutScroll: !0 }), Cf.current = i;
    }
    return Cf.current;
  },
  resetTransform: (i, l) => {
    i.style.transform = l !== void 0 ? l : "none";
  },
  checkIsScrollRoot: (i) => window.getComputedStyle(i).position === "fixed"
}), mb = F.createContext({
  transformPagePoint: (i) => i,
  isStatic: !1,
  reducedMotion: "never"
});
function Q2(i = !0) {
  const l = F.useContext(od);
  if (l === null)
    return [!0, null];
  const { isPresent: r, onExitComplete: u, register: c } = l, h = F.useId();
  F.useEffect(() => {
    if (i)
      return c(h);
  }, [i]);
  const d = F.useCallback(() => i && u && u(h), [h, u, i]);
  return !r && u ? [!1, d] : [!0];
}
const gb = F.createContext({ strict: !1 }), S0 = {
  animation: [
    "animate",
    "variants",
    "whileHover",
    "whileTap",
    "exit",
    "whileInView",
    "whileFocus",
    "whileDrag"
  ],
  exit: ["exit"],
  drag: ["drag", "dragControls"],
  focus: ["whileFocus"],
  hover: ["whileHover", "onHoverStart", "onHoverEnd"],
  tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
  pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
  inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
  layout: ["layout", "layoutId"]
};
let T0 = !1;
function Z2() {
  if (T0)
    return;
  const i = {};
  for (const l in S0)
    i[l] = {
      isEnabled: (r) => S0[l].some((u) => !!r[u])
    };
  Zv(i), T0 = !0;
}
function pb() {
  return Z2(), VA();
}
function K2(i) {
  const l = pb();
  for (const r in i)
    l[r] = {
      ...l[r],
      ...i[r]
    };
  Zv(l);
}
const k2 = /* @__PURE__ */ new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "propagate",
  "ignoreStrict",
  "viewport"
]);
function xu(i) {
  return i.startsWith("while") || i.startsWith("drag") && i !== "draggable" || i.startsWith("layout") || i.startsWith("onTap") || i.startsWith("onPan") || i.startsWith("onLayout") || k2.has(i);
}
let yb = (i) => !xu(i);
function J2(i) {
  typeof i == "function" && (yb = (l) => l.startsWith("on") ? !xu(l) : i(l));
}
try {
  J2(require("@emotion/is-prop-valid").default);
} catch {
}
function F2(i, l, r) {
  const u = {};
  for (const c in i)
    c === "values" && typeof i.values == "object" || ve(i[c]) || (yb(c) || r === !0 && xu(c) || !l && !xu(c) || // If trying to use native HTML drag events, forward drag listeners
    i.draggable && c.startsWith("onDrag")) && (u[c] = i[c]);
  return u;
}
const zu = /* @__PURE__ */ F.createContext({});
function P2(i, l) {
  if (Du(i)) {
    const { initial: r, animate: u } = i;
    return {
      initial: r === !1 || ps(r) ? r : void 0,
      animate: ps(u) ? u : void 0
    };
  }
  return i.inherit !== !1 ? l : {};
}
function I2(i) {
  const { initial: l, animate: r } = P2(i, F.useContext(zu));
  return F.useMemo(() => ({ initial: l, animate: r }), [E0(l), E0(r)]);
}
function E0(i) {
  return Array.isArray(i) ? i.join(" ") : i;
}
const Nd = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function vb(i, l, r) {
  for (const u in l)
    !ve(l[u]) && !Wv(u, r) && (i[u] = l[u]);
}
function W2({ transformTemplate: i }, l) {
  return F.useMemo(() => {
    const r = Nd();
    return Rd(r, l, i), Object.assign({}, r.vars, r.style);
  }, [l]);
}
function $2(i, l) {
  const r = i.style || {}, u = {};
  return vb(u, r, i), Object.assign(u, W2(i, l)), u;
}
function t3(i, l) {
  const r = {}, u = $2(i, l);
  return i.drag && i.dragListener !== !1 && (r.draggable = !1, u.userSelect = u.WebkitUserSelect = u.WebkitTouchCallout = "none", u.touchAction = i.drag === !0 ? "none" : `pan-${i.drag === "x" ? "y" : "x"}`), i.tabIndex === void 0 && (i.onTap || i.onTapStart || i.whileTap) && (r.tabIndex = 0), r.style = u, r;
}
const bb = () => ({
  ...Nd(),
  attrs: {}
});
function e3(i, l, r, u) {
  const c = F.useMemo(() => {
    const h = bb();
    return $v(h, l, eb(u), i.transformTemplate, i.style), {
      ...h.attrs,
      style: { ...h.style }
    };
  }, [l]);
  if (i.style) {
    const h = {};
    vb(h, i.style, i), c.style = { ...h, ...c.style };
  }
  return c;
}
const n3 = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view"
];
function _d(i) {
  return (
    /**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */
    typeof i != "string" || /**
     * If it contains a dash, the element is a custom HTML webcomponent.
     */
    i.includes("-") ? !1 : (
      /**
       * If it's in our list of lowercase SVG tags, it's an SVG component
       */
      !!(n3.indexOf(i) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(i))
    )
  );
}
function a3(i, l, r, { latestValues: u }, c, h = !1, d) {
  const v = (d ?? _d(i) ? e3 : t3)(l, u, c, i), y = F2(l, typeof i == "string", h), b = i !== F.Fragment ? { ...y, ...v, ref: r } : {}, { children: p } = l, T = F.useMemo(() => ve(p) ? p.get() : p, [p]);
  return F.createElement(i, {
    ...b,
    children: T
  });
}
function i3({ scrapeMotionValuesFromProps: i, createRenderState: l }, r, u, c) {
  return {
    latestValues: l3(r, u, c, i),
    renderState: l()
  };
}
function l3(i, l, r, u) {
  const c = {}, h = u(i, {});
  for (const T in h)
    c[T] = fu(h[T]);
  let { initial: d, animate: m } = i;
  const v = Du(i), y = Xv(i);
  l && y && !v && i.inherit !== !1 && (d === void 0 && (d = l.initial), m === void 0 && (m = l.animate));
  let b = r ? r.initial === !1 : !1;
  b = b || d === !1;
  const p = b ? m : d;
  if (p && typeof p != "boolean" && !Cu(p)) {
    const T = Array.isArray(p) ? p : [p];
    for (let O = 0; O < T.length; O++) {
      const w = Td(i, T[O]);
      if (w) {
        const { transitionEnd: B, transition: _, ...L } = w;
        for (const H in L) {
          let X = L[H];
          if (Array.isArray(X)) {
            const Q = b ? X.length - 1 : 0;
            X = X[Q];
          }
          X !== null && (c[H] = X);
        }
        for (const H in B)
          c[H] = B[H];
      }
    }
  }
  return c;
}
const Sb = (i) => (l, r) => {
  const u = F.useContext(zu), c = F.useContext(od), h = () => i3(i, l, u, c);
  return r ? h() : iE(h);
}, s3 = /* @__PURE__ */ Sb({
  scrapeMotionValuesFromProps: wd,
  createRenderState: Nd
}), o3 = /* @__PURE__ */ Sb({
  scrapeMotionValuesFromProps: nb,
  createRenderState: bb
}), u3 = Symbol.for("motionComponentSymbol");
function r3(i, l, r) {
  const u = F.useRef(r);
  F.useInsertionEffect(() => {
    u.current = r;
  });
  const c = F.useRef(null);
  return F.useCallback((h) => {
    var m;
    h && ((m = i.onMount) == null || m.call(i, h)), l && (h ? l.mount(h) : l.unmount());
    const d = u.current;
    if (typeof d == "function")
      if (h) {
        const v = d(h);
        typeof v == "function" && (c.current = v);
      } else c.current ? (c.current(), c.current = null) : d(h);
    else d && (d.current = h);
  }, [l]);
}
const Tb = F.createContext({});
function el(i) {
  return i && typeof i == "object" && Object.prototype.hasOwnProperty.call(i, "current");
}
function c3(i, l, r, u, c, h) {
  var X, Q;
  const { visualElement: d } = F.useContext(zu), m = F.useContext(gb), v = F.useContext(od), y = F.useContext(mb), b = y.reducedMotion, p = y.skipAnimations, T = F.useRef(null), O = F.useRef(!1);
  u = u || m.renderer, !T.current && u && (T.current = u(i, {
    visualState: l,
    parent: d,
    props: r,
    presenceContext: v,
    blockInitialAnimation: v ? v.initial === !1 : !1,
    reducedMotionConfig: b,
    skipAnimations: p,
    isSVG: h
  }), O.current && T.current && (T.current.manuallyAnimateOnMount = !0));
  const w = T.current, B = F.useContext(Tb);
  w && !w.projection && c && (w.type === "html" || w.type === "svg") && f3(T.current, r, c, B);
  const _ = F.useRef(!1);
  F.useInsertionEffect(() => {
    w && _.current && w.update(r, v);
  });
  const L = r[wv], H = F.useRef(!!L && typeof window < "u" && !((X = window.MotionHandoffIsComplete) != null && X.call(window, L)) && ((Q = window.MotionHasOptimisedAnimation) == null ? void 0 : Q.call(window, L)));
  return sE(() => {
    O.current = !0, w && (_.current = !0, window.MotionIsMounted = !0, w.updateFeatures(), w.scheduleRenderMicrotask(), H.current && w.animationState && w.animationState.animateChanges());
  }), F.useEffect(() => {
    w && (!H.current && w.animationState && w.animationState.animateChanges(), H.current && (queueMicrotask(() => {
      var nt;
      (nt = window.MotionHandoffMarkAsComplete) == null || nt.call(window, L);
    }), H.current = !1), w.enteringChildren = void 0);
  }), w;
}
function f3(i, l, r, u) {
  const { layoutId: c, layout: h, drag: d, dragConstraints: m, layoutScroll: v, layoutRoot: y, layoutAnchor: b, layoutCrossfade: p } = l;
  i.projection = new r(i.latestValues, l["data-framer-portal-id"] ? void 0 : Eb(i.parent)), i.projection.setOptions({
    layoutId: c,
    layout: h,
    alwaysMeasureLayout: !!d || m && el(m),
    visualElement: i,
    /**
     * TODO: Update options in an effect. This could be tricky as it'll be too late
     * to update by the time layout animations run.
     * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
     * ensuring it gets called if there's no potential layout animations.
     *
     */
    animationType: typeof h == "string" ? h : "both",
    initialPromotionConfig: u,
    crossfade: p,
    layoutScroll: v,
    layoutRoot: y,
    layoutAnchor: b
  });
}
function Eb(i) {
  if (i)
    return i.options.allowProjection !== !1 ? i.projection : Eb(i.parent);
}
function Df(i, { forwardMotionProps: l = !1, type: r } = {}, u, c) {
  u && K2(u);
  const h = r ? r === "svg" : _d(i), d = h ? o3 : s3;
  function m(y, b) {
    let p;
    const T = {
      ...F.useContext(mb),
      ...y,
      layoutId: d3(y)
    }, { isStatic: O } = T, w = I2(y), B = d(y, O);
    if (!O && typeof window < "u") {
      h3();
      const _ = m3(T);
      p = _.MeasureLayout, w.visualElement = c3(i, B, T, c, _.ProjectionNode, h);
    }
    return lt.jsxs(zu.Provider, { value: w, children: [p && w.visualElement ? lt.jsx(p, { visualElement: w.visualElement, ...T }) : null, a3(i, y, r3(B, w.visualElement, b), B, O, l, h)] });
  }
  m.displayName = `motion.${typeof i == "string" ? i : `create(${i.displayName ?? i.name ?? ""})`}`;
  const v = F.forwardRef(m);
  return v[u3] = i, v;
}
function d3({ layoutId: i }) {
  const l = F.useContext(X0).id;
  return l && i !== void 0 ? l + "-" + i : i;
}
function h3(i, l) {
  F.useContext(gb).strict;
}
function m3(i) {
  const l = pb(), { drag: r, layout: u } = l;
  if (!r && !u)
    return {};
  const c = { ...r, ...u };
  return {
    MeasureLayout: r != null && r.isEnabled(i) || u != null && u.isEnabled(i) ? c.MeasureLayout : void 0,
    ProjectionNode: c.ProjectionNode
  };
}
function g3(i, l) {
  if (typeof Proxy > "u")
    return Df;
  const r = /* @__PURE__ */ new Map(), u = (h, d) => Df(h, d, i, l), c = (h, d) => u(h, d);
  return new Proxy(c, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (h, d) => d === "create" ? u : (r.has(d) || r.set(d, Df(d, void 0, i, l)), r.get(d))
  });
}
const p3 = (i, l) => l.isSVG ?? _d(i) ? new IA(l) : new ZA(l, {
  allowProjection: i !== F.Fragment
});
class y3 extends Ra {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(l) {
    super(l), l.animationState || (l.animationState = n2(l));
  }
  updateAnimationControlsSubscription() {
    const { animate: l } = this.node.getProps();
    Cu(l) && (this.unmountControls = l.subscribe(this.node));
  }
  /**
   * Subscribe any provided AnimationControls to the component's VisualElement
   */
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: l } = this.node.getProps(), { animate: r } = this.node.prevProps || {};
    l !== r && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var l;
    this.node.animationState.reset(), (l = this.unmountControls) == null || l.call(this);
  }
}
let v3 = 0;
class b3 extends Ra {
  constructor() {
    super(...arguments), this.id = v3++, this.isExitComplete = !1;
  }
  update() {
    var h;
    if (!this.node.presenceContext)
      return;
    const { isPresent: l, onExitComplete: r } = this.node.presenceContext, { isPresent: u } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || l === u)
      return;
    if (l && u === !1) {
      if (this.isExitComplete) {
        const { initial: d, custom: m } = this.node.getProps();
        if (typeof d == "string" || typeof d == "object" && d !== null && !Array.isArray(d)) {
          const v = oi(this.node, d, m);
          if (v) {
            const { transition: y, transitionEnd: b, ...p } = v;
            for (const T in p)
              (h = this.node.getValue(T)) == null || h.jump(p[T]);
          }
        }
        this.node.animationState.reset(), this.node.animationState.animateChanges();
      } else
        this.node.animationState.setActive("exit", !1);
      this.isExitComplete = !1;
      return;
    }
    const c = this.node.animationState.setActive("exit", !l);
    r && !l && c.then(() => {
      this.isExitComplete = !0, r(this.id);
    });
  }
  mount() {
    const { register: l, onExitComplete: r } = this.node.presenceContext || {};
    r && r(this.id), l && (this.unmount = l(this.id));
  }
  unmount() {
  }
}
const S3 = {
  animation: {
    Feature: y3
  },
  exit: {
    Feature: b3
  }
};
function Es(i) {
  return {
    point: {
      x: i.pageX,
      y: i.pageY
    }
  };
}
const T3 = (i) => (l) => Md(l) && i(l, Es(l));
function hs(i, l, r, u) {
  return ys(i, l, T3(r), u);
}
const xb = ({ current: i }) => i ? i.ownerDocument.defaultView : null, x0 = (i, l) => Math.abs(i - l);
function E3(i, l) {
  const r = x0(i.x, l.x), u = x0(i.y, l.y);
  return Math.sqrt(r ** 2 + u ** 2);
}
const A0 = /* @__PURE__ */ new Set(["auto", "scroll"]);
class Ab {
  constructor(l, r, { transformPagePoint: u, contextWindow: c = window, dragSnapToOrigin: h = !1, distanceThreshold: d = 3, element: m } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.lastRawMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.scrollPositions = /* @__PURE__ */ new Map(), this.removeScrollListeners = null, this.onElementScroll = (w) => {
      this.handleScroll(w.target);
    }, this.onWindowScroll = () => {
      this.handleScroll(window);
    }, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      this.lastRawMoveEventInfo && (this.lastMoveEventInfo = nu(this.lastRawMoveEventInfo, this.transformPagePoint));
      const w = zf(this.lastMoveEventInfo, this.history), B = this.startEvent !== null, _ = E3(w.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
      if (!B && !_)
        return;
      const { point: L } = w, { timestamp: H } = ye;
      this.history.push({ ...L, timestamp: H });
      const { onStart: X, onMove: Q } = this.handlers;
      B || (X && X(this.lastMoveEvent, w), this.startEvent = this.lastMoveEvent), Q && Q(this.lastMoveEvent, w);
    }, this.handlePointerMove = (w, B) => {
      this.lastMoveEvent = w, this.lastRawMoveEventInfo = B, this.lastMoveEventInfo = nu(B, this.transformPagePoint), Ht.update(this.updatePoint, !0);
    }, this.handlePointerUp = (w, B) => {
      this.end();
      const { onEnd: _, onSessionEnd: L, resumeAnimation: H } = this.handlers;
      if ((this.dragSnapToOrigin || !this.startEvent) && H && H(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const X = zf(w.type === "pointercancel" ? this.lastMoveEventInfo : nu(B, this.transformPagePoint), this.history);
      this.startEvent && _ && _(w, X), L && L(w, X);
    }, !Md(l))
      return;
    this.dragSnapToOrigin = h, this.handlers = r, this.transformPagePoint = u, this.distanceThreshold = d, this.contextWindow = c || window;
    const v = Es(l), y = nu(v, this.transformPagePoint), { point: b } = y, { timestamp: p } = ye;
    this.history = [{ ...b, timestamp: p }];
    const { onSessionStart: T } = r;
    T && T(l, zf(y, this.history));
    const O = { passive: !0, capture: !0 };
    this.removeListeners = bs(hs(this.contextWindow, "pointermove", this.handlePointerMove, O), hs(this.contextWindow, "pointerup", this.handlePointerUp, O), hs(this.contextWindow, "pointercancel", this.handlePointerUp, O)), m && this.startScrollTracking(m);
  }
  /**
   * Start tracking scroll on ancestors and window.
   */
  startScrollTracking(l) {
    let r = l.parentElement;
    for (; r; ) {
      const u = getComputedStyle(r);
      (A0.has(u.overflowX) || A0.has(u.overflowY)) && this.scrollPositions.set(r, {
        x: r.scrollLeft,
        y: r.scrollTop
      }), r = r.parentElement;
    }
    this.scrollPositions.set(window, {
      x: window.scrollX,
      y: window.scrollY
    }), window.addEventListener("scroll", this.onElementScroll, {
      capture: !0
    }), window.addEventListener("scroll", this.onWindowScroll), this.removeScrollListeners = () => {
      window.removeEventListener("scroll", this.onElementScroll, {
        capture: !0
      }), window.removeEventListener("scroll", this.onWindowScroll);
    };
  }
  /**
   * Handle scroll compensation during drag.
   *
   * For element scroll: adjusts history origin since pageX/pageY doesn't change.
   * For window scroll: adjusts lastMoveEventInfo since pageX/pageY would change.
   */
  handleScroll(l) {
    const r = this.scrollPositions.get(l);
    if (!r)
      return;
    const u = l === window, c = u ? { x: window.scrollX, y: window.scrollY } : {
      x: l.scrollLeft,
      y: l.scrollTop
    }, h = { x: c.x - r.x, y: c.y - r.y };
    h.x === 0 && h.y === 0 || (u ? this.lastMoveEventInfo && (this.lastMoveEventInfo.point.x += h.x, this.lastMoveEventInfo.point.y += h.y) : this.history.length > 0 && (this.history[0].x -= h.x, this.history[0].y -= h.y), this.scrollPositions.set(l, c), Ht.update(this.updatePoint, !0));
  }
  updateHandlers(l) {
    this.handlers = l;
  }
  end() {
    this.removeListeners && this.removeListeners(), this.removeScrollListeners && this.removeScrollListeners(), this.scrollPositions.clear(), Oa(this.updatePoint);
  }
}
function nu(i, l) {
  return l ? { point: l(i.point) } : i;
}
function M0(i, l) {
  return { x: i.x - l.x, y: i.y - l.y };
}
function zf({ point: i }, l) {
  return {
    point: i,
    delta: M0(i, Mb(l)),
    offset: M0(i, x3(l)),
    velocity: A3(l, 0.1)
  };
}
function x3(i) {
  return i[0];
}
function Mb(i) {
  return i[i.length - 1];
}
function A3(i, l) {
  if (i.length < 2)
    return { x: 0, y: 0 };
  let r = i.length - 1, u = null;
  const c = Mb(i);
  for (; r >= 0 && (u = i[r], !(c.timestamp - u.timestamp > /* @__PURE__ */ Ne(l))); )
    r--;
  if (!u)
    return { x: 0, y: 0 };
  u === i[0] && i.length > 2 && c.timestamp - u.timestamp > /* @__PURE__ */ Ne(l) * 2 && (u = i[1]);
  const h = /* @__PURE__ */ en(c.timestamp - u.timestamp);
  if (h === 0)
    return { x: 0, y: 0 };
  const d = {
    x: (c.x - u.x) / h,
    y: (c.y - u.y) / h
  };
  return d.x === 1 / 0 && (d.x = 0), d.y === 1 / 0 && (d.y = 0), d;
}
function M3(i, { min: l, max: r }, u) {
  return l !== void 0 && i < l ? i = u ? Lt(l, i, u.min) : Math.max(i, l) : r !== void 0 && i > r && (i = u ? Lt(r, i, u.max) : Math.min(i, r)), i;
}
function C0(i, l, r) {
  return {
    min: l !== void 0 ? i.min + l : void 0,
    max: r !== void 0 ? i.max + r - (i.max - i.min) : void 0
  };
}
function C3(i, { top: l, left: r, bottom: u, right: c }) {
  return {
    x: C0(i.x, r, c),
    y: C0(i.y, l, u)
  };
}
function D0(i, l) {
  let r = l.min - i.min, u = l.max - i.max;
  return l.max - l.min < i.max - i.min && ([r, u] = [u, r]), { min: r, max: u };
}
function D3(i, l) {
  return {
    x: D0(i.x, l.x),
    y: D0(i.y, l.y)
  };
}
function z3(i, l) {
  let r = 0.5;
  const u = Me(i), c = Me(l);
  return c > u ? r = /* @__PURE__ */ ms(l.min, l.max - u, i.min) : u > c && (r = /* @__PURE__ */ ms(i.min, i.max - c, l.min)), Rn(0, 1, r);
}
function O3(i, l) {
  const r = {};
  return l.min !== void 0 && (r.min = l.min - i.min), l.max !== void 0 && (r.max = l.max - i.min), r;
}
const nd = 0.35;
function R3(i = nd) {
  return i === !1 ? i = 0 : i === !0 && (i = nd), {
    x: z0(i, "left", "right"),
    y: z0(i, "top", "bottom")
  };
}
function z0(i, l, r) {
  return {
    min: O0(i, l),
    max: O0(i, r)
  };
}
function O0(i, l) {
  return typeof i == "number" ? i : i[l] || 0;
}
const w3 = /* @__PURE__ */ new WeakMap();
class N3 {
  constructor(l) {
    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = ie(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = l;
  }
  start(l, { snapToCursor: r = !1, distanceThreshold: u } = {}) {
    const { presenceContext: c } = this.visualElement;
    if (c && c.isPresent === !1)
      return;
    const h = (p) => {
      r && this.snapToCursor(Es(p).point), this.stopAnimation();
    }, d = (p, T) => {
      const { drag: O, dragPropagation: w, onDragStart: B } = this.getProps();
      if (O && !w && (this.openDragLock && this.openDragLock(), this.openDragLock = fA(O), !this.openDragLock))
        return;
      this.latestPointerEvent = p, this.latestPanInfo = T, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), Dn((L) => {
        let H = this.getAxisMotionValue(L).get() || 0;
        if (On.test(H)) {
          const { projection: X } = this.visualElement;
          if (X && X.layout) {
            const Q = X.layout.layoutBox[L];
            Q && (H = Me(Q) * (parseFloat(H) / 100));
          }
        }
        this.originPoint[L] = H;
      }), B && Ht.update(() => B(p, T), !1, !0), kf(this.visualElement, "transform");
      const { animationState: _ } = this.visualElement;
      _ && _.setActive("whileDrag", !0);
    }, m = (p, T) => {
      this.latestPointerEvent = p, this.latestPanInfo = T;
      const { dragPropagation: O, dragDirectionLock: w, onDirectionLock: B, onDrag: _ } = this.getProps();
      if (!O && !this.openDragLock)
        return;
      const { offset: L } = T;
      if (w && this.currentDirection === null) {
        this.currentDirection = V3(L), this.currentDirection !== null && B && B(this.currentDirection);
        return;
      }
      this.updateAxis("x", T.point, L), this.updateAxis("y", T.point, L), this.visualElement.render(), _ && Ht.update(() => _(p, T), !1, !0);
    }, v = (p, T) => {
      this.latestPointerEvent = p, this.latestPanInfo = T, this.stop(p, T), this.latestPointerEvent = null, this.latestPanInfo = null;
    }, y = () => {
      const { dragSnapToOrigin: p } = this.getProps();
      (p || this.constraints) && this.startAnimation({ x: 0, y: 0 });
    }, { dragSnapToOrigin: b } = this.getProps();
    this.panSession = new Ab(l, {
      onSessionStart: h,
      onStart: d,
      onMove: m,
      onSessionEnd: v,
      resumeAnimation: y
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: b,
      distanceThreshold: u,
      contextWindow: xb(this.visualElement),
      element: this.visualElement.current
    });
  }
  /**
   * @internal
   */
  stop(l, r) {
    const u = l || this.latestPointerEvent, c = r || this.latestPanInfo, h = this.isDragging;
    if (this.cancel(), !h || !c || !u)
      return;
    const { velocity: d } = c;
    this.startAnimation(d);
    const { onDragEnd: m } = this.getProps();
    m && Ht.postRender(() => m(u, c));
  }
  /**
   * @internal
   */
  cancel() {
    this.isDragging = !1;
    const { projection: l, animationState: r } = this.visualElement;
    l && (l.isAnimationBlocked = !1), this.endPanSession();
    const { dragPropagation: u } = this.getProps();
    !u && this.openDragLock && (this.openDragLock(), this.openDragLock = null), r && r.setActive("whileDrag", !1);
  }
  /**
   * Clean up the pan session without modifying other drag state.
   * This is used during unmount to ensure event listeners are removed
   * without affecting projection animations or drag locks.
   * @internal
   */
  endPanSession() {
    this.panSession && this.panSession.end(), this.panSession = void 0;
  }
  updateAxis(l, r, u) {
    const { drag: c } = this.getProps();
    if (!u || !au(l, c, this.currentDirection))
      return;
    const h = this.getAxisMotionValue(l);
    let d = this.originPoint[l] + u[l];
    this.constraints && this.constraints[l] && (d = M3(d, this.constraints[l], this.elastic[l])), h.set(d);
  }
  resolveConstraints() {
    var h;
    const { dragConstraints: l, dragElastic: r } = this.getProps(), u = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (h = this.visualElement.projection) == null ? void 0 : h.layout, c = this.constraints;
    l && el(l) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : l && u ? this.constraints = C3(u.layoutBox, l) : this.constraints = !1, this.elastic = R3(r), c !== this.constraints && !el(l) && u && this.constraints && !this.hasMutatedConstraints && Dn((d) => {
      this.constraints !== !1 && this.getAxisMotionValue(d) && (this.constraints[d] = O3(u.layoutBox[d], this.constraints[d]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: l, onMeasureDragConstraints: r } = this.getProps();
    if (!l || !el(l))
      return !1;
    const u = l.current;
    Da(u !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.", "drag-constraints-ref");
    const { projection: c } = this.visualElement;
    if (!c || !c.layout)
      return !1;
    c.root && (c.root.scroll = void 0, c.root.updateScroll());
    const h = HA(u, c.root, this.visualElement.getTransformPagePoint());
    let d = D3(c.layout.layoutBox, h);
    if (r) {
      const m = r(BA(d));
      this.hasMutatedConstraints = !!m, m && (d = kv(m));
    }
    return d;
  }
  startAnimation(l) {
    const { drag: r, dragMomentum: u, dragElastic: c, dragTransition: h, dragSnapToOrigin: d, onDragTransitionEnd: m } = this.getProps(), v = this.constraints || {}, y = Dn((b) => {
      if (!au(b, r, this.currentDirection))
        return;
      let p = v && v[b] || {};
      (d === !0 || d === b) && (p = { min: 0, max: 0 });
      const T = c ? 200 : 1e6, O = c ? 40 : 1e7, w = {
        type: "inertia",
        velocity: u ? l[b] : 0,
        bounceStiffness: T,
        bounceDamping: O,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...h,
        ...p
      };
      return this.startAxisValueAnimation(b, w);
    });
    return Promise.all(y).then(m);
  }
  startAxisValueAnimation(l, r) {
    const u = this.getAxisMotionValue(l);
    return kf(this.visualElement, l), u.start(Sd(l, u, 0, r, this.visualElement, !1));
  }
  stopAnimation() {
    Dn((l) => this.getAxisMotionValue(l).stop());
  }
  /**
   * Drag works differently depending on which props are provided.
   *
   * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
   * - Otherwise, we apply the delta to the x/y motion values.
   */
  getAxisMotionValue(l) {
    const r = `_drag${l.toUpperCase()}`, c = this.visualElement.getProps()[r];
    return c || this.visualElement.getValue(l, this.visualElement.latestValues[l] ?? 0);
  }
  snapToCursor(l) {
    Dn((r) => {
      const { drag: u } = this.getProps();
      if (!au(r, u, this.currentDirection))
        return;
      const { projection: c } = this.visualElement, h = this.getAxisMotionValue(r);
      if (c && c.layout) {
        const { min: d, max: m } = c.layout.layoutBox[r], v = h.get() || 0;
        h.set(l[r] - Lt(d, m, 0.5) + v);
      }
    });
  }
  /**
   * When the viewport resizes we want to check if the measured constraints
   * have changed and, if so, reposition the element within those new constraints
   * relative to where it was before the resize.
   */
  scalePositionWithinConstraints() {
    if (!this.visualElement.current)
      return;
    const { drag: l, dragConstraints: r } = this.getProps(), { projection: u } = this.visualElement;
    if (!el(r) || !u || !this.constraints)
      return;
    this.stopAnimation();
    const c = { x: 0, y: 0 };
    Dn((d) => {
      const m = this.getAxisMotionValue(d);
      if (m && this.constraints !== !1) {
        const v = m.get();
        c[d] = z3({ min: v, max: v }, this.constraints[d]);
      }
    });
    const { transformTemplate: h } = this.visualElement.getProps();
    this.visualElement.current.style.transform = h ? h({}, "") : "none", u.root && u.root.updateScroll(), u.updateLayout(), this.constraints = !1, this.resolveConstraints(), Dn((d) => {
      if (!au(d, l, null))
        return;
      const m = this.getAxisMotionValue(d), { min: v, max: y } = this.constraints[d];
      m.set(Lt(v, y, c[d]));
    }), this.visualElement.render();
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    w3.set(this.visualElement, this);
    const l = this.visualElement.current, r = hs(l, "pointerdown", (y) => {
      const { drag: b, dragListener: p = !0 } = this.getProps(), T = y.target, O = T !== l && yA(T);
      b && p && !O && this.start(y);
    });
    let u;
    const c = () => {
      const { dragConstraints: y } = this.getProps();
      el(y) && y.current && (this.constraints = this.resolveRefConstraints(), u || (u = _3(l, y.current, () => this.scalePositionWithinConstraints())));
    }, { projection: h } = this.visualElement, d = h.addEventListener("measure", c);
    h && !h.layout && (h.root && h.root.updateScroll(), h.updateLayout()), Ht.read(c);
    const m = ys(window, "resize", () => this.scalePositionWithinConstraints()), v = h.addEventListener("didUpdate", (({ delta: y, hasLayoutChanged: b }) => {
      this.isDragging && b && (Dn((p) => {
        const T = this.getAxisMotionValue(p);
        T && (this.originPoint[p] += y[p].translate, T.set(T.get() + y[p].translate));
      }), this.visualElement.render());
    }));
    return () => {
      m(), r(), d(), v && v(), u && u();
    };
  }
  getProps() {
    const l = this.visualElement.getProps(), { drag: r = !1, dragDirectionLock: u = !1, dragPropagation: c = !1, dragConstraints: h = !1, dragElastic: d = nd, dragMomentum: m = !0 } = l;
    return {
      ...l,
      drag: r,
      dragDirectionLock: u,
      dragPropagation: c,
      dragConstraints: h,
      dragElastic: d,
      dragMomentum: m
    };
  }
}
function R0(i) {
  let l = !0;
  return () => {
    if (l) {
      l = !1;
      return;
    }
    i();
  };
}
function _3(i, l, r) {
  const u = Hy(i, R0(r)), c = Hy(l, R0(r));
  return () => {
    u(), c();
  };
}
function au(i, l, r) {
  return (l === !0 || l === i) && (r === null || r === i);
}
function V3(i, l = 10) {
  let r = null;
  return Math.abs(i.y) > l ? r = "y" : Math.abs(i.x) > l && (r = "x"), r;
}
class U3 extends Ra {
  constructor(l) {
    super(l), this.removeGroupControls = nn, this.removeListeners = nn, this.controls = new N3(l);
  }
  mount() {
    const { dragControls: l } = this.node.getProps();
    l && (this.removeGroupControls = l.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || nn;
  }
  update() {
    const { dragControls: l } = this.node.getProps(), { dragControls: r } = this.node.prevProps || {};
    l !== r && (this.removeGroupControls(), l && (this.removeGroupControls = l.subscribe(this.controls)));
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners(), this.controls.isDragging || this.controls.endPanSession();
  }
}
const Of = (i) => (l, r) => {
  i && Ht.update(() => i(l, r), !1, !0);
};
class B3 extends Ra {
  constructor() {
    super(...arguments), this.removePointerDownListener = nn;
  }
  onPointerDown(l) {
    this.session = new Ab(l, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: xb(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: l, onPanStart: r, onPan: u, onPanEnd: c } = this.node.getProps();
    return {
      onSessionStart: Of(l),
      onStart: Of(r),
      onMove: Of(u),
      onEnd: (h, d) => {
        delete this.session, c && Ht.postRender(() => c(h, d));
      }
    };
  }
  mount() {
    this.removePointerDownListener = hs(this.node.current, "pointerdown", (l) => this.onPointerDown(l));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
let Rf = !1;
class j3 extends F.Component {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: l, layoutGroup: r, switchLayoutGroup: u, layoutId: c } = this.props, { projection: h } = l;
    h && (r.group && r.group.add(h), u && u.register && c && u.register(h), Rf && h.root.didUpdate(), h.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), h.setOptions({
      ...h.options,
      layoutDependency: this.props.layoutDependency,
      onExitComplete: () => this.safeToRemove()
    })), du.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(l) {
    const { layoutDependency: r, visualElement: u, drag: c, isPresent: h } = this.props, { projection: d } = u;
    return d && (d.isPresent = h, l.layoutDependency !== r && d.setOptions({
      ...d.options,
      layoutDependency: r
    }), Rf = !0, c || l.layoutDependency !== r || r === void 0 || l.isPresent !== h ? d.willUpdate() : this.safeToRemove(), l.isPresent !== h && (h ? d.promote() : d.relegate() || Ht.postRender(() => {
      const m = d.getStack();
      (!m || !m.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { visualElement: l, layoutAnchor: r } = this.props, { projection: u } = l;
    u && (u.options.layoutAnchor = r, u.root.didUpdate(), Ad.postRender(() => {
      !u.currentAnimation && u.isLead() && this.safeToRemove();
    }));
  }
  componentWillUnmount() {
    const { visualElement: l, layoutGroup: r, switchLayoutGroup: u } = this.props, { projection: c } = l;
    Rf = !0, c && (c.scheduleCheckAfterUnmount(), r && r.group && r.group.remove(c), u && u.deregister && u.deregister(c));
  }
  safeToRemove() {
    const { safeToRemove: l } = this.props;
    l && l();
  }
  render() {
    return null;
  }
}
function Cb(i) {
  const [l, r] = Q2(), u = F.useContext(X0);
  return lt.jsx(j3, { ...i, layoutGroup: u, switchLayoutGroup: F.useContext(Tb), isPresent: l, safeToRemove: r });
}
const L3 = {
  pan: {
    Feature: B3
  },
  drag: {
    Feature: U3,
    ProjectionNode: hb,
    MeasureLayout: Cb
  }
};
function w0(i, l, r) {
  const { props: u } = i;
  i.animationState && u.whileHover && i.animationState.setActive("whileHover", r === "Start");
  const c = "onHover" + r, h = u[c];
  h && Ht.postRender(() => h(l, Es(l)));
}
class H3 extends Ra {
  mount() {
    const { current: l } = this.node;
    l && (this.unmount = hA(l, (r, u) => (w0(this.node, u, "Start"), (c) => w0(this.node, c, "End"))));
  }
  unmount() {
  }
}
class G3 extends Ra {
  constructor() {
    super(...arguments), this.isActive = !1;
  }
  onFocus() {
    let l = !1;
    try {
      l = this.node.current.matches(":focus-visible");
    } catch {
      l = !0;
    }
    !l || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0);
  }
  onBlur() {
    !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1);
  }
  mount() {
    this.unmount = bs(ys(this.node.current, "focus", () => this.onFocus()), ys(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
function N0(i, l, r) {
  const { props: u } = i;
  if (i.current instanceof HTMLButtonElement && i.current.disabled)
    return;
  i.animationState && u.whileTap && i.animationState.setActive("whileTap", r === "Start");
  const c = "onTap" + (r === "End" ? "" : r), h = u[c];
  h && Ht.postRender(() => h(l, Es(l)));
}
class Y3 extends Ra {
  mount() {
    const { current: l } = this.node;
    if (!l)
      return;
    const { globalTapTarget: r, propagate: u } = this.node.props;
    this.unmount = bA(l, (c, h) => (N0(this.node, h, "Start"), (d, { success: m }) => N0(this.node, d, m ? "End" : "Cancel")), {
      useGlobalTarget: r,
      stopPropagation: (u == null ? void 0 : u.tap) === !1
    });
  }
  unmount() {
  }
}
const ad = /* @__PURE__ */ new WeakMap(), wf = /* @__PURE__ */ new WeakMap(), q3 = (i) => {
  const l = ad.get(i.target);
  l && l(i);
}, X3 = (i) => {
  i.forEach(q3);
};
function Q3({ root: i, ...l }) {
  const r = i || document;
  wf.has(r) || wf.set(r, {});
  const u = wf.get(r), c = JSON.stringify(l);
  return u[c] || (u[c] = new IntersectionObserver(X3, { root: i, ...l })), u[c];
}
function Z3(i, l, r) {
  const u = Q3(l);
  return ad.set(i, r), u.observe(i), () => {
    ad.delete(i), u.unobserve(i);
  };
}
const K3 = {
  some: 0,
  all: 1
};
class k3 extends Ra {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    var v;
    (v = this.stopObserver) == null || v.call(this);
    const { viewport: l = {} } = this.node.getProps(), { root: r, margin: u, amount: c = "some", once: h } = l, d = {
      root: r ? r.current : void 0,
      rootMargin: u,
      threshold: typeof c == "number" ? c : K3[c]
    }, m = (y) => {
      const { isIntersecting: b } = y;
      if (this.isInView === b || (this.isInView = b, h && !b && this.hasEnteredView))
        return;
      b && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", b);
      const { onViewportEnter: p, onViewportLeave: T } = this.node.getProps(), O = b ? p : T;
      O && O(y);
    };
    this.stopObserver = Z3(this.node.current, d, m);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: l, prevProps: r } = this.node;
    ["amount", "margin", "root"].some(J3(l, r)) && this.startObserver();
  }
  unmount() {
    var l;
    (l = this.stopObserver) == null || l.call(this), this.hasEnteredView = !1, this.isInView = !1;
  }
}
function J3({ viewport: i = {} }, { viewport: l = {} } = {}) {
  return (r) => i[r] !== l[r];
}
const F3 = {
  inView: {
    Feature: k3
  },
  tap: {
    Feature: Y3
  },
  focus: {
    Feature: G3
  },
  hover: {
    Feature: H3
  }
}, P3 = {
  layout: {
    ProjectionNode: hb,
    MeasureLayout: Cb
  }
}, I3 = {
  ...S3,
  ...F3,
  ...L3,
  ...P3
}, W3 = /* @__PURE__ */ g3(I3, p3);
function $3() {
  !Od.current && Qv();
  const [i] = F.useState(bu.current);
  return i;
}
const _0 = W3;
function Db(i) {
  var l, r, u = "";
  if (typeof i == "string" || typeof i == "number") u += i;
  else if (typeof i == "object") if (Array.isArray(i)) {
    var c = i.length;
    for (l = 0; l < c; l++) i[l] && (r = Db(i[l])) && (u && (u += " "), u += r);
  } else for (r in i) i[r] && (u && (u += " "), u += r);
  return u;
}
function tM() {
  for (var i, l, r = 0, u = "", c = arguments.length; r < c; r++) (i = arguments[r]) && (l = Db(i)) && (u && (u += " "), u += l);
  return u;
}
const eM = (i, l) => {
  const r = new Array(i.length + l.length);
  for (let u = 0; u < i.length; u++)
    r[u] = i[u];
  for (let u = 0; u < l.length; u++)
    r[i.length + u] = l[u];
  return r;
}, nM = (i, l) => ({
  classGroupId: i,
  validator: l
}), zb = (i = /* @__PURE__ */ new Map(), l = null, r) => ({
  nextPart: i,
  validators: l,
  classGroupId: r
}), Au = "-", V0 = [], aM = "arbitrary..", iM = (i) => {
  const l = sM(i), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: u
  } = i;
  return {
    getClassGroupId: (d) => {
      if (d.startsWith("[") && d.endsWith("]"))
        return lM(d);
      const m = d.split(Au), v = m[0] === "" && m.length > 1 ? 1 : 0;
      return Ob(m, v, l);
    },
    getConflictingClassGroupIds: (d, m) => {
      if (m) {
        const v = u[d], y = r[d];
        return v ? y ? eM(y, v) : v : y || V0;
      }
      return r[d] || V0;
    }
  };
}, Ob = (i, l, r) => {
  if (i.length - l === 0)
    return r.classGroupId;
  const c = i[l], h = r.nextPart.get(c);
  if (h) {
    const y = Ob(i, l + 1, h);
    if (y) return y;
  }
  const d = r.validators;
  if (d === null)
    return;
  const m = l === 0 ? i.join(Au) : i.slice(l).join(Au), v = d.length;
  for (let y = 0; y < v; y++) {
    const b = d[y];
    if (b.validator(m))
      return b.classGroupId;
  }
}, lM = (i) => i.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const l = i.slice(1, -1), r = l.indexOf(":"), u = l.slice(0, r);
  return u ? aM + u : void 0;
})(), sM = (i) => {
  const {
    theme: l,
    classGroups: r
  } = i;
  return oM(r, l);
}, oM = (i, l) => {
  const r = zb();
  for (const u in i) {
    const c = i[u];
    Vd(c, r, u, l);
  }
  return r;
}, Vd = (i, l, r, u) => {
  const c = i.length;
  for (let h = 0; h < c; h++) {
    const d = i[h];
    uM(d, l, r, u);
  }
}, uM = (i, l, r, u) => {
  if (typeof i == "string") {
    rM(i, l, r);
    return;
  }
  if (typeof i == "function") {
    cM(i, l, r, u);
    return;
  }
  fM(i, l, r, u);
}, rM = (i, l, r) => {
  const u = i === "" ? l : Rb(l, i);
  u.classGroupId = r;
}, cM = (i, l, r, u) => {
  if (dM(i)) {
    Vd(i(u), l, r, u);
    return;
  }
  l.validators === null && (l.validators = []), l.validators.push(nM(r, i));
}, fM = (i, l, r, u) => {
  const c = Object.entries(i), h = c.length;
  for (let d = 0; d < h; d++) {
    const [m, v] = c[d];
    Vd(v, Rb(l, m), r, u);
  }
}, Rb = (i, l) => {
  let r = i;
  const u = l.split(Au), c = u.length;
  for (let h = 0; h < c; h++) {
    const d = u[h];
    let m = r.nextPart.get(d);
    m || (m = zb(), r.nextPart.set(d, m)), r = m;
  }
  return r;
}, dM = (i) => "isThemeGetter" in i && i.isThemeGetter === !0, hM = (i) => {
  if (i < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let l = 0, r = /* @__PURE__ */ Object.create(null), u = /* @__PURE__ */ Object.create(null);
  const c = (h, d) => {
    r[h] = d, l++, l > i && (l = 0, u = r, r = /* @__PURE__ */ Object.create(null));
  };
  return {
    get(h) {
      let d = r[h];
      if (d !== void 0)
        return d;
      if ((d = u[h]) !== void 0)
        return c(h, d), d;
    },
    set(h, d) {
      h in r ? r[h] = d : c(h, d);
    }
  };
}, id = "!", U0 = ":", mM = [], B0 = (i, l, r, u, c) => ({
  modifiers: i,
  hasImportantModifier: l,
  baseClassName: r,
  maybePostfixModifierPosition: u,
  isExternal: c
}), gM = (i) => {
  const {
    prefix: l,
    experimentalParseClassName: r
  } = i;
  let u = (c) => {
    const h = [];
    let d = 0, m = 0, v = 0, y;
    const b = c.length;
    for (let B = 0; B < b; B++) {
      const _ = c[B];
      if (d === 0 && m === 0) {
        if (_ === U0) {
          h.push(c.slice(v, B)), v = B + 1;
          continue;
        }
        if (_ === "/") {
          y = B;
          continue;
        }
      }
      _ === "[" ? d++ : _ === "]" ? d-- : _ === "(" ? m++ : _ === ")" && m--;
    }
    const p = h.length === 0 ? c : c.slice(v);
    let T = p, O = !1;
    p.endsWith(id) ? (T = p.slice(0, -1), O = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      p.startsWith(id) && (T = p.slice(1), O = !0)
    );
    const w = y && y > v ? y - v : void 0;
    return B0(h, O, T, w);
  };
  if (l) {
    const c = l + U0, h = u;
    u = (d) => d.startsWith(c) ? h(d.slice(c.length)) : B0(mM, !1, d, void 0, !0);
  }
  if (r) {
    const c = u;
    u = (h) => r({
      className: h,
      parseClassName: c
    });
  }
  return u;
}, pM = (i) => {
  const l = /* @__PURE__ */ new Map();
  return i.orderSensitiveModifiers.forEach((r, u) => {
    l.set(r, 1e6 + u);
  }), (r) => {
    const u = [];
    let c = [];
    for (let h = 0; h < r.length; h++) {
      const d = r[h], m = d[0] === "[", v = l.has(d);
      m || v ? (c.length > 0 && (c.sort(), u.push(...c), c = []), u.push(d)) : c.push(d);
    }
    return c.length > 0 && (c.sort(), u.push(...c)), u;
  };
}, yM = (i) => ({
  cache: hM(i.cacheSize),
  parseClassName: gM(i),
  sortModifiers: pM(i),
  postfixLookupClassGroupIds: vM(i),
  ...iM(i)
}), vM = (i) => {
  const l = /* @__PURE__ */ Object.create(null), r = i.postfixLookupClassGroups;
  if (r)
    for (let u = 0; u < r.length; u++)
      l[r[u]] = !0;
  return l;
}, bM = /\s+/, SM = (i, l) => {
  const {
    parseClassName: r,
    getClassGroupId: u,
    getConflictingClassGroupIds: c,
    sortModifiers: h,
    postfixLookupClassGroupIds: d
  } = l, m = [], v = i.trim().split(bM);
  let y = "";
  for (let b = v.length - 1; b >= 0; b -= 1) {
    const p = v[b], {
      isExternal: T,
      modifiers: O,
      hasImportantModifier: w,
      baseClassName: B,
      maybePostfixModifierPosition: _
    } = r(p);
    if (T) {
      y = p + (y.length > 0 ? " " + y : y);
      continue;
    }
    let L = !!_, H;
    if (L) {
      const Z = B.substring(0, _);
      H = u(Z);
      const N = H && d[H] ? u(B) : void 0;
      N && N !== H && (H = N, L = !1);
    } else
      H = u(B);
    if (!H) {
      if (!L) {
        y = p + (y.length > 0 ? " " + y : y);
        continue;
      }
      if (H = u(B), !H) {
        y = p + (y.length > 0 ? " " + y : y);
        continue;
      }
      L = !1;
    }
    const X = O.length === 0 ? "" : O.length === 1 ? O[0] : h(O).join(":"), Q = w ? X + id : X, nt = Q + H;
    if (m.indexOf(nt) > -1)
      continue;
    m.push(nt);
    const ut = c(H, L);
    for (let Z = 0; Z < ut.length; ++Z) {
      const N = ut[Z];
      m.push(Q + N);
    }
    y = p + (y.length > 0 ? " " + y : y);
  }
  return y;
}, TM = (...i) => {
  let l = 0, r, u, c = "";
  for (; l < i.length; )
    (r = i[l++]) && (u = wb(r)) && (c && (c += " "), c += u);
  return c;
}, wb = (i) => {
  if (typeof i == "string")
    return i;
  let l, r = "";
  for (let u = 0; u < i.length; u++)
    i[u] && (l = wb(i[u])) && (r && (r += " "), r += l);
  return r;
}, EM = (i, ...l) => {
  let r, u, c, h;
  const d = (v) => {
    const y = l.reduce((b, p) => p(b), i());
    return r = yM(y), u = r.cache.get, c = r.cache.set, h = m, m(v);
  }, m = (v) => {
    const y = u(v);
    if (y)
      return y;
    const b = SM(v, r);
    return c(v, b), b;
  };
  return h = d, (...v) => h(TM(...v));
}, xM = [], ae = (i) => {
  const l = (r) => r[i] || xM;
  return l.isThemeGetter = !0, l.themeKey = i, l;
}, Nb = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, _b = /^\((?:(\w[\w-]*):)?(.+)\)$/i, AM = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, MM = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, CM = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, DM = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix|color|light-dark)\(.+\)$/, zM = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, OM = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Aa = (i) => AM.test(i), vt = (i) => !!i && !Number.isNaN(Number(i)), Cn = (i) => !!i && Number.isInteger(Number(i)), Nf = (i) => i.endsWith("%") && vt(i.slice(0, -1)), Kn = (i) => MM.test(i), Vb = () => !0, RM = (i) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  CM.test(i) && !DM.test(i)
), Ud = () => !1, wM = (i) => zM.test(i), NM = (i) => OM.test(i), _M = (i) => !I(i) && !W(i), VM = (i) => i.startsWith("@container") && (i[10] === "/" && i[11] !== void 0 || i[11] === "s" && i[16] !== void 0 && i.startsWith("-size/", 10) || i[11] === "n" && i[18] !== void 0 && i.startsWith("-normal/", 10)), UM = (i) => wa(i, jb, Ud), I = (i) => Nb.test(i), ni = (i) => wa(i, Lb, RM), j0 = (i) => wa(i, XM, vt), BM = (i) => wa(i, Gb, Vb), jM = (i) => wa(i, Hb, Ud), L0 = (i) => wa(i, Ub, Ud), LM = (i) => wa(i, Bb, NM), iu = (i) => wa(i, Yb, wM), W = (i) => _b.test(i), os = (i) => ri(i, Lb), HM = (i) => ri(i, Hb), H0 = (i) => ri(i, Ub), GM = (i) => ri(i, jb), YM = (i) => ri(i, Bb), lu = (i) => ri(i, Yb, !0), qM = (i) => ri(i, Gb, !0), wa = (i, l, r) => {
  const u = Nb.exec(i);
  return u ? u[1] ? l(u[1]) : r(u[2]) : !1;
}, ri = (i, l, r = !1) => {
  const u = _b.exec(i);
  return u ? u[1] ? l(u[1]) : r : !1;
}, Ub = (i) => i === "position" || i === "percentage", Bb = (i) => i === "image" || i === "url", jb = (i) => i === "length" || i === "size" || i === "bg-size", Lb = (i) => i === "length", XM = (i) => i === "number", Hb = (i) => i === "family-name", Gb = (i) => i === "number" || i === "weight", Yb = (i) => i === "shadow", QM = () => {
  const i = ae("color"), l = ae("font"), r = ae("text"), u = ae("font-weight"), c = ae("tracking"), h = ae("leading"), d = ae("breakpoint"), m = ae("container"), v = ae("spacing"), y = ae("radius"), b = ae("shadow"), p = ae("inset-shadow"), T = ae("text-shadow"), O = ae("drop-shadow"), w = ae("blur"), B = ae("perspective"), _ = ae("aspect"), L = ae("ease"), H = ae("animate"), X = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], Q = () => [
    "center",
    "top",
    "bottom",
    "left",
    "right",
    "top-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-top",
    "top-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-top",
    "bottom-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-bottom",
    "bottom-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-bottom"
  ], nt = () => [...Q(), W, I], ut = () => ["auto", "hidden", "clip", "visible", "scroll"], Z = () => ["auto", "contain", "none"], N = () => [W, I, v], dt = () => [Aa, "full", "auto", ...N()], it = () => [Cn, "none", "subgrid", W, I], pt = () => ["auto", {
    span: ["full", Cn, W, I]
  }, Cn, W, I], bt = () => [Cn, "auto", W, I], Xt = () => ["auto", "min", "max", "fr", W, I], Ut = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], St = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], Y = () => ["auto", ...N()], at = () => [Aa, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...N()], k = () => [m, Aa, "screen", "full", "dvw", "lvw", "svw", "min", "max", "fit", ...N()], q = () => [Aa, "screen", "full", "lh", "dvh", "lvh", "svh", "min", "max", "fit", ...N()], G = () => [i, W, I], Bt = () => [...Q(), H0, L0, {
    position: [W, I]
  }], Pt = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], _e = () => ["auto", "cover", "contain", GM, UM, {
    size: [W, I]
  }], x = () => [Nf, os, ni], j = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    y,
    W,
    I
  ], J = () => ["", vt, os, ni], st = () => ["solid", "dashed", "dotted", "double"], xt = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], rt = () => [vt, Nf, H0, L0], Ct = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    w,
    W,
    I
  ], $ = () => ["none", vt, W, I], ct = () => ["none", vt, W, I], Ve = () => [vt, W, I], Jn = () => [Aa, "full", ...N()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [Kn],
      breakpoint: [Kn],
      color: [Vb],
      container: [Kn],
      "drop-shadow": [Kn],
      ease: ["in", "out", "in-out"],
      font: [_M],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [Kn],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [Kn],
      shadow: [Kn],
      spacing: ["px", vt],
      text: [Kn],
      "text-shadow": [Kn],
      tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
    },
    classGroups: {
      // --------------
      // --- Layout ---
      // --------------
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", Aa, I, W, _]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       * @deprecated since Tailwind CSS v4.0.0
       */
      container: ["container"],
      /**
       * Container Type
       * @see https://tailwindcss.com/docs/responsive-design#container-queries
       */
      "container-type": [{
        "@container": ["", "normal", "size", W, I]
      }],
      /**
       * Container Name
       * @see https://tailwindcss.com/docs/responsive-design#named-containers
       */
      "container-named": [VM],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [vt, "auto", I, W, m]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": X()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": X()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Screen Reader Only
       * @see https://tailwindcss.com/docs/display#screen-reader-only
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: nt()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: ut()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": ut()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": ut()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: Z()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": Z()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": Z()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Inset
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: dt()
      }],
      /**
       * Inset Inline
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": dt()
      }],
      /**
       * Inset Block
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": dt()
      }],
      /**
       * Inset Inline Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       * @todo class group will be renamed to `inset-s` in next major release
       */
      start: [{
        "inset-s": dt(),
        /**
         * @deprecated since Tailwind CSS v4.2.0 in favor of `inset-s-*` utilities.
         * @see https://github.com/tailwindlabs/tailwindcss/pull/19613
         */
        start: dt()
      }],
      /**
       * Inset Inline End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       * @todo class group will be renamed to `inset-e` in next major release
       */
      end: [{
        "inset-e": dt(),
        /**
         * @deprecated since Tailwind CSS v4.2.0 in favor of `inset-e-*` utilities.
         * @see https://github.com/tailwindlabs/tailwindcss/pull/19613
         */
        end: dt()
      }],
      /**
       * Inset Block Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-bs": [{
        "inset-bs": dt()
      }],
      /**
       * Inset Block End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-be": [{
        "inset-be": dt()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: dt()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: dt()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: dt()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: dt()
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: [Cn, "auto", W, I]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [Aa, "full", "auto", m, ...N()]
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["nowrap", "wrap", "wrap-reverse"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: [vt, Aa, "auto", "initial", "none", I]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", vt, W, I]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", vt, W, I]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [Cn, "first", "last", "none", W, I]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": it()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: pt()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": bt()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": bt()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": it()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: pt()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": bt()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": bt()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": Xt()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": Xt()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: N()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": N()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": N()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...Ut(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...St(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...St()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...Ut()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...St(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...St(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": Ut()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...St(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...St()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: N()
      }],
      /**
       * Padding Inline
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: N()
      }],
      /**
       * Padding Block
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: N()
      }],
      /**
       * Padding Inline Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: N()
      }],
      /**
       * Padding Inline End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: N()
      }],
      /**
       * Padding Block Start
       * @see https://tailwindcss.com/docs/padding
       */
      pbs: [{
        pbs: N()
      }],
      /**
       * Padding Block End
       * @see https://tailwindcss.com/docs/padding
       */
      pbe: [{
        pbe: N()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: N()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: N()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: N()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: N()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: Y()
      }],
      /**
       * Margin Inline
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: Y()
      }],
      /**
       * Margin Block
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: Y()
      }],
      /**
       * Margin Inline Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: Y()
      }],
      /**
       * Margin Inline End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: Y()
      }],
      /**
       * Margin Block Start
       * @see https://tailwindcss.com/docs/margin
       */
      mbs: [{
        mbs: Y()
      }],
      /**
       * Margin Block End
       * @see https://tailwindcss.com/docs/margin
       */
      mbe: [{
        mbe: Y()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: Y()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: Y()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: Y()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: Y()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": N()
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y": [{
        "space-y": N()
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y-reverse": ["space-y-reverse"],
      // --------------
      // --- Sizing ---
      // --------------
      /**
       * Size
       * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
       */
      size: [{
        size: at()
      }],
      /**
       * Inline Size
       * @see https://tailwindcss.com/docs/inline-size
       */
      "inline-size": [{
        inline: ["auto", ...k()]
      }],
      /**
       * Min-Inline Size
       * @see https://tailwindcss.com/docs/min-inline-size
       */
      "min-inline-size": [{
        "min-inline": ["auto", ...k()]
      }],
      /**
       * Max-Inline Size
       * @see https://tailwindcss.com/docs/max-inline-size
       */
      "max-inline-size": [{
        "max-inline": ["none", ...k()]
      }],
      /**
       * Block Size
       * @see https://tailwindcss.com/docs/block-size
       */
      "block-size": [{
        block: ["auto", ...q()]
      }],
      /**
       * Min-Block Size
       * @see https://tailwindcss.com/docs/min-block-size
       */
      "min-block-size": [{
        "min-block": ["auto", ...q()]
      }],
      /**
       * Max-Block Size
       * @see https://tailwindcss.com/docs/max-block-size
       */
      "max-block-size": [{
        "max-block": ["none", ...q()]
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [m, "screen", ...at()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          m,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...at()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          m,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [d]
          },
          ...at()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...at()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...at()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", "none", ...at()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", r, os, ni]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: [u, qM, BM]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Nf, I]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [HM, jM, l]
      }],
      /**
       * Font Feature Settings
       * @see https://tailwindcss.com/docs/font-feature-settings
       */
      "font-features": [{
        "font-features": [I]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: [c, W, I]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [vt, "none", W, j0]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          h,
          ...N()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", W, I]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["disc", "decimal", "none", W, I]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://v3.tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: G()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: G()
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...st(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [vt, "from-font", "auto", W, ni]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: G()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [vt, "auto", W, I]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: N()
      }],
      /**
       * Tab Size
       * @see https://tailwindcss.com/docs/tab-size
       */
      "tab-size": [{
        tab: [Cn, W, I]
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", W, I]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Overflow Wrap
       * @see https://tailwindcss.com/docs/overflow-wrap
       */
      wrap: [{
        wrap: ["break-word", "anywhere", "normal"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", W, I]
      }],
      // -------------------
      // --- Backgrounds ---
      // -------------------
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: Bt()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: Pt()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: _e()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, Cn, W, I],
          radial: ["", W, I],
          conic: ["", Cn, W, I]
        }, YM, LM]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: G()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: x()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: x()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: x()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: G()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: G()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: G()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: j()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": j()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": j()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": j()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": j()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": j()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": j()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": j()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": j()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": j()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": j()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": j()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": j()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": j()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": j()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: J()
      }],
      /**
       * Border Width Inline
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": J()
      }],
      /**
       * Border Width Block
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": J()
      }],
      /**
       * Border Width Inline Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": J()
      }],
      /**
       * Border Width Inline End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": J()
      }],
      /**
       * Border Width Block Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-bs": [{
        "border-bs": J()
      }],
      /**
       * Border Width Block End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-be": [{
        "border-be": J()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": J()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": J()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": J()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": J()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": J()
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y": [{
        "divide-y": J()
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...st(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...st(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: G()
      }],
      /**
       * Border Color Inline
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": G()
      }],
      /**
       * Border Color Block
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": G()
      }],
      /**
       * Border Color Inline Start
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": G()
      }],
      /**
       * Border Color Inline End
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": G()
      }],
      /**
       * Border Color Block Start
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-bs": [{
        "border-bs": G()
      }],
      /**
       * Border Color Block End
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-be": [{
        "border-be": G()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": G()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": G()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": G()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": G()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: G()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...st(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [vt, W, I]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", vt, os, ni]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: G()
      }],
      // ---------------
      // --- Effects ---
      // ---------------
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          // Deprecated since Tailwind CSS v4.0.0
          "inner",
          "none",
          b,
          lu,
          iu
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: G()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", p, lu, iu]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": G()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: J()
      }],
      /**
       * Ring Width Inset
       * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
       */
      "ring-color": [{
        ring: G()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [vt, ni]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": G()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": J()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": G()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", T, lu, iu]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": G()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [vt, W, I]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...xt(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": xt()
      }],
      /**
       * Mask Clip
       * @see https://tailwindcss.com/docs/mask-clip
       */
      "mask-clip": [{
        "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
      }, "mask-no-clip"],
      /**
       * Mask Composite
       * @see https://tailwindcss.com/docs/mask-composite
       */
      "mask-composite": [{
        mask: ["add", "subtract", "intersect", "exclude"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image-linear-pos": [{
        "mask-linear": [vt]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": rt()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": rt()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": G()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": G()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": rt()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": rt()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": G()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": G()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": rt()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": rt()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": G()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": G()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": rt()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": rt()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": G()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": G()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": rt()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": rt()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": G()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": G()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": rt()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": rt()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": G()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": G()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": rt()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": rt()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": G()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": G()
      }],
      "mask-image-radial": [{
        "mask-radial": [W, I]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": rt()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": rt()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": G()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": G()
      }],
      "mask-image-radial-shape": [{
        "mask-radial": ["circle", "ellipse"]
      }],
      "mask-image-radial-size": [{
        "mask-radial": [{
          closest: ["side", "corner"],
          farthest: ["side", "corner"]
        }]
      }],
      "mask-image-radial-pos": [{
        "mask-radial-at": Q()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [vt]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": rt()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": rt()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": G()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": G()
      }],
      /**
       * Mask Mode
       * @see https://tailwindcss.com/docs/mask-mode
       */
      "mask-mode": [{
        mask: ["alpha", "luminance", "match"]
      }],
      /**
       * Mask Origin
       * @see https://tailwindcss.com/docs/mask-origin
       */
      "mask-origin": [{
        "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
      }],
      /**
       * Mask Position
       * @see https://tailwindcss.com/docs/mask-position
       */
      "mask-position": [{
        mask: Bt()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: Pt()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: _e()
      }],
      /**
       * Mask Type
       * @see https://tailwindcss.com/docs/mask-type
       */
      "mask-type": [{
        "mask-type": ["alpha", "luminance"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image": [{
        mask: ["none", W, I]
      }],
      // ---------------
      // --- Filters ---
      // ---------------
      /**
       * Filter
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          W,
          I
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: Ct()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [vt, W, I]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [vt, W, I]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          O,
          lu,
          iu
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": G()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", vt, W, I]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [vt, W, I]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", vt, W, I]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [vt, W, I]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", vt, W, I]
      }],
      /**
       * Backdrop Filter
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          W,
          I
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": Ct()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [vt, W, I]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [vt, W, I]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", vt, W, I]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [vt, W, I]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", vt, W, I]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [vt, W, I]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [vt, W, I]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", vt, W, I]
      }],
      // --------------
      // --- Tables ---
      // --------------
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": N()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": N()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": N()
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // ---------------------------------
      // --- Transitions and Animation ---
      // ---------------------------------
      /**
       * Transition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", W, I]
      }],
      /**
       * Transition Behavior
       * @see https://tailwindcss.com/docs/transition-behavior
       */
      "transition-behavior": [{
        transition: ["normal", "discrete"]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: [vt, "initial", W, I]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", L, W, I]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [vt, W, I]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", H, W, I]
      }],
      // ------------------
      // --- Transforms ---
      // ------------------
      /**
       * Backface Visibility
       * @see https://tailwindcss.com/docs/backface-visibility
       */
      backface: [{
        backface: ["hidden", "visible"]
      }],
      /**
       * Perspective
       * @see https://tailwindcss.com/docs/perspective
       */
      perspective: [{
        perspective: [B, W, I]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": nt()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: $()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": $()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": $()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": $()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: ct()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": ct()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": ct()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": ct()
      }],
      /**
       * Scale 3D
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-3d": ["scale-3d"],
      /**
       * Skew
       * @see https://tailwindcss.com/docs/skew
       */
      skew: [{
        skew: Ve()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": Ve()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": Ve()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [W, I, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: nt()
      }],
      /**
       * Transform Style
       * @see https://tailwindcss.com/docs/transform-style
       */
      "transform-style": [{
        transform: ["3d", "flat"]
      }],
      /**
       * Translate
       * @see https://tailwindcss.com/docs/translate
       */
      translate: [{
        translate: Jn()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": Jn()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": Jn()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": Jn()
      }],
      /**
       * Translate None
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-none": ["translate-none"],
      /**
       * Zoom
       * @see https://tailwindcss.com/docs/zoom
       */
      zoom: [{
        zoom: [Cn, W, I]
      }],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: G()
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: G()
      }],
      /**
       * Color Scheme
       * @see https://tailwindcss.com/docs/color-scheme
       */
      "color-scheme": [{
        scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", W, I]
      }],
      /**
       * Field Sizing
       * @see https://tailwindcss.com/docs/field-sizing
       */
      "field-sizing": [{
        "field-sizing": ["fixed", "content"]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["auto", "none"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "", "y", "x"]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scrollbar Thumb Color
       * @see https://tailwindcss.com/docs/scrollbar-color
       */
      "scrollbar-thumb-color": [{
        "scrollbar-thumb": G()
      }],
      /**
       * Scrollbar Track Color
       * @see https://tailwindcss.com/docs/scrollbar-color
       */
      "scrollbar-track-color": [{
        "scrollbar-track": G()
      }],
      /**
       * Scrollbar Gutter
       * @see https://tailwindcss.com/docs/scrollbar-gutter
       */
      "scrollbar-gutter": [{
        "scrollbar-gutter": ["auto", "stable", "both"]
      }],
      /**
       * Scrollbar Width
       * @see https://tailwindcss.com/docs/scrollbar-width
       */
      "scrollbar-w": [{
        scrollbar: ["auto", "thin", "none"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": N()
      }],
      /**
       * Scroll Margin Inline
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": N()
      }],
      /**
       * Scroll Margin Block
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": N()
      }],
      /**
       * Scroll Margin Inline Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": N()
      }],
      /**
       * Scroll Margin Inline End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": N()
      }],
      /**
       * Scroll Margin Block Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mbs": [{
        "scroll-mbs": N()
      }],
      /**
       * Scroll Margin Block End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mbe": [{
        "scroll-mbe": N()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": N()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": N()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": N()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": N()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": N()
      }],
      /**
       * Scroll Padding Inline
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": N()
      }],
      /**
       * Scroll Padding Block
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": N()
      }],
      /**
       * Scroll Padding Inline Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": N()
      }],
      /**
       * Scroll Padding Inline End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": N()
      }],
      /**
       * Scroll Padding Block Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pbs": [{
        "scroll-pbs": N()
      }],
      /**
       * Scroll Padding Block End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pbe": [{
        "scroll-pbe": N()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": N()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": N()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": N()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": N()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", W, I]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...G()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [vt, os, ni, j0]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...G()]
      }],
      // ---------------------
      // --- Accessibility ---
      // ---------------------
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      "container-named": ["container-type"],
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "inset-bs", "inset-be", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["start", "end", "right", "left"],
      "inset-y": ["inset-bs", "inset-be", "top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pbs", "pbe", "pt", "pr", "pb", "pl"],
      px: ["ps", "pe", "pr", "pl"],
      py: ["pbs", "pbe", "pt", "pb"],
      m: ["mx", "my", "ms", "me", "mbs", "mbe", "mt", "mr", "mb", "ml"],
      mx: ["ms", "me", "mr", "ml"],
      my: ["mbs", "mbe", "mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-bs", "border-w-be", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-s", "border-w-e", "border-w-r", "border-w-l"],
      "border-w-y": ["border-w-bs", "border-w-be", "border-w-t", "border-w-b"],
      "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-bs", "border-color-be", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-s", "border-color-e", "border-color-r", "border-color-l"],
      "border-color-y": ["border-color-bs", "border-color-be", "border-color-t", "border-color-b"],
      translate: ["translate-x", "translate-y", "translate-none"],
      "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mbs", "scroll-mbe", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-ms", "scroll-me", "scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mbs", "scroll-mbe", "scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pbs", "scroll-pbe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-ps", "scroll-pe", "scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pbs", "scroll-pbe", "scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    },
    postfixLookupClassGroups: ["container-type"],
    orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
  };
}, ZM = /* @__PURE__ */ EM(QM);
function KM(...i) {
  return ZM(tM(i));
}
const kM = "[--ic-background:#ffffff] [--ic-foreground:#111111] [--ic-border:#e3e7ec] [--ic-card:#ffffff] [--ic-ring:rgba(17,17,17,0.16)]", JM = 0.5, FM = [0.16, 1, 0.3, 1];
function G0(i, l, r, u) {
  return Math.ceil(2 * Math.max(Math.hypot(r, u), Math.hypot(i - r, u), Math.hypot(r, l - u), Math.hypot(i - r, l - u)));
}
function PM(i, l) {
  typeof i == "function" ? i(l) : i && (i.current = l);
}
function ld(i) {
  return typeof i == "string" || typeof i == "number" ? String(i).trim().length > 0 : Array.isArray(i) ? i.some(ld) : F.isValidElement(i) ? ld(i.props.children) : !1;
}
const rs = F.forwardRef(({ children: i, className: l, disabled: r = !1, loading: u = !1, type: c = "button", onBlur: h, onClick: d, onFocus: m, onKeyDown: v, onKeyUp: y, onPointerCancel: b, onPointerDown: p, onPointerEnter: T, onPointerLeave: O, onPointerUp: w, ...B }, _) => {
  const L = F.useRef(null), H = !!(r || u), [X, Q] = F.useState(!1), [nt, ut] = F.useState(!1), [Z, N] = F.useState({ x: 0, y: 0 }), [dt, it] = F.useState(0), pt = $3(), bt = B["aria-label"], Xt = B["aria-labelledby"];
  F.useEffect(() => {
    !ld(i) && !(bt != null && bt.trim()) && !(Xt != null && Xt.trim()) && console.warn("OriginButton: provide visible label text or aria-label / aria-labelledby so the control has an accessible name.");
  }, [i, bt, Xt]);
  const Ut = F.useCallback((q, G) => {
    const Bt = L.current;
    if (!Bt) return;
    const Pt = Bt.getBoundingClientRect();
    N({ x: q, y: G }), it(G0(Pt.width, Pt.height, q, G));
  }, []), St = F.useCallback((q) => {
    const G = q.currentTarget.getBoundingClientRect();
    Ut(q.clientX - G.left, q.clientY - G.top);
  }, [Ut]), Y = F.useCallback(() => {
    const q = L.current;
    if (!q) return;
    const G = q.getBoundingClientRect();
    Ut(G.width / 2, G.height / 2);
  }, [Ut]), at = !H && (X || nt);
  F.useLayoutEffect(() => {
    var Pt;
    const q = L.current;
    if (!(q && at)) return;
    const G = () => {
      const _e = q.getBoundingClientRect();
      it(G0(_e.width, _e.height, Z.x, Z.y));
    };
    G();
    const Bt = new ResizeObserver(G);
    return Bt.observe(q), (Pt = document.fonts) == null || Pt.ready.then(G).catch(() => {
    }), () => Bt.disconnect();
  }, [at, Z.x, Z.y]);
  const k = F.useCallback((q) => {
    L.current = q, PM(_, q);
  }, [_]);
  return /* @__PURE__ */ lt.jsxs(_0.button, { ...B, "aria-busy": u || void 0, className: KM(kM, "origin-button relative inline-flex h-12 cursor-pointer touch-manipulation select-none items-center justify-center overflow-hidden rounded-xl px-8 font-medium text-[15px] tracking-[-0.02em]", "border-[0.5px] border-border bg-card text-card-foreground", "transition-[color] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background", "disabled:pointer-events-none disabled:opacity-50", at && "text-background", l), "data-fill": at, "data-pressed": nt ? "true" : "false", disabled: H, onBlur: (q) => {
    h == null || h(q), ut(!1), q.defaultPrevented || Q(!1);
  }, onClick: d, onFocus: (q) => {
    m == null || m(q), !(H || q.defaultPrevented) && q.currentTarget.matches(":focus-visible") && (Y(), Q(!0));
  }, onKeyDown: (q) => {
    v == null || v(q), !(q.defaultPrevented || H || q.repeat || q.key !== " " && q.key !== "Enter") && (Y(), ut(!0), Q(!0));
  }, onKeyUp: (q) => {
    y == null || y(q), (q.key === " " || q.key === "Enter") && (ut(!1), q.currentTarget.matches(":focus-visible") || Q(!1));
  }, onPointerCancel: (q) => {
    b == null || b(q), ut(!1);
  }, onPointerDown: (q) => {
    p == null || p(q), !(q.defaultPrevented || H || q.button !== 0) && (St(q), ut(!0), Q(!0));
  }, onPointerEnter: (q) => {
    T == null || T(q), !(H || q.defaultPrevented) && (St(q), Q(!0));
  }, onPointerLeave: (q) => {
    O == null || O(q), Q(!1), ut(!1);
  }, onPointerUp: (q) => {
    w == null || w(q), ut(!1);
  }, ref: k, type: c, whileTap: H || pt ? void 0 : { scale: 0.985 }, children: [
    /* @__PURE__ */ lt.jsx(_0.span, { animate: { scale: at && dt > 0 ? 1 : 0 }, "aria-hidden": !0, className: "pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground", initial: !1, style: { height: dt, left: Z.x, top: Z.y, width: dt }, transition: { duration: pt ? 0 : JM, ease: FM } }),
    /* @__PURE__ */ lt.jsx("span", { className: "relative z-10 inline-flex items-center justify-center gap-2", children: i })
  ] });
});
rs.displayName = "OriginButton";
const _f = (i) => {
  var l;
  return (l = document.querySelector(i)) == null ? void 0 : l.click();
};
function IM() {
  return /* @__PURE__ */ lt.jsxs("svg", { viewBox: "230 230 800 800", role: "img", "aria-label": "Your racing logo", className: "lobby-logo", children: [
    /* @__PURE__ */ lt.jsx("defs", { children: /* @__PURE__ */ lt.jsx("filter", { id: "remove-white", colorInterpolationFilters: "sRGB", children: /* @__PURE__ */ lt.jsx("feColorMatrix", { type: "matrix", values: "0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  -1 0 0 0 1" }) }) }),
    /* @__PURE__ */ lt.jsx("image", { href: "public/assets/lobby/logo-source.png", width: "1254", height: "1254", filter: "url(#remove-white)" })
  ] });
}
function WM() {
  const [i, l] = F.useState("home"), [r, u] = F.useState(!1), [c, h] = F.useState(!1), [d, m] = F.useState({ races: 0, wins: 0, xp: 0, credits: 1200, ready: !1 });
  F.useEffect(() => {
    const y = () => {
      var O, w;
      const p = (O = window.PocketGP) == null ? void 0 : O.save;
      p && m({ ...p, ready: ((w = window.race3D) == null ? void 0 : w.loaded) === 2 });
      const T = document.querySelector("#drawer");
      T != null && T.hidden && l("home");
    };
    y();
    const b = setInterval(y, 350);
    return () => clearInterval(b);
  }, []), F.useEffect(() => {
    document.body.classList.toggle("lobby-settings-open", r);
  }, [r]);
  function v(y) {
    l(y), u(!1), _f(`[data-tab="${{ home: "race", garage: "car", driver: "driver", career: "stats" }[y]}"]`);
  }
  return /* @__PURE__ */ lt.jsxs(lt.Fragment, { children: [
    /* @__PURE__ */ lt.jsxs("div", { className: "new-nav", children: [
      /* @__PURE__ */ lt.jsxs("a", { href: "#home", className: "new-brand", onClick: (y) => {
        y.preventDefault(), v("home");
      }, children: [
        /* @__PURE__ */ lt.jsx(IM, {}),
        /* @__PURE__ */ lt.jsxs("span", { children: [
          "MINI F1",
          /* @__PURE__ */ lt.jsx("small", { children: "TINY DRIVERS. BIG DREAMS." })
        ] })
      ] }),
      /* @__PURE__ */ lt.jsx("div", { className: "new-links", role: "navigation", "aria-label": "Lobby navigation", children: ["home", "garage", "driver", "career"].map((y) => /* @__PURE__ */ lt.jsx(rs, { className: "nav-origin " + (i === y ? "is-current" : ""), "aria-current": i === y ? "page" : void 0, onClick: () => v(y), children: y[0].toUpperCase() + y.slice(1) }, y)) }),
      /* @__PURE__ */ lt.jsxs("div", { className: "new-account", children: [
        /* @__PURE__ */ lt.jsxs("span", { className: "balance", children: [
          /* @__PURE__ */ lt.jsx("small", { children: "RACE CREDITS" }),
          d.credits.toLocaleString()
        ] }),
        /* @__PURE__ */ lt.jsx(rs, { "aria-label": "Race settings", "aria-expanded": r, className: "settings-origin", onClick: () => {
          v("home"), u(!r);
        }, children: /* @__PURE__ */ lt.jsx(eE, { size: 18 }) })
      ] })
    ] }),
    /* @__PURE__ */ lt.jsxs("div", { className: "home-ui", children: [
      /* @__PURE__ */ lt.jsxs("div", { className: "lobby-topline", children: [
        /* @__PURE__ */ lt.jsxs("span", { children: [
          /* @__PURE__ */ lt.jsx("i", {}),
          " YOUR PADDOCK"
        ] }),
        /* @__PURE__ */ lt.jsx("span", { children: "SEASON 01 / READY WHEN YOU ARE" })
      ] }),
      /* @__PURE__ */ lt.jsx("div", { className: "lobby-stats", children: [[d.races, "Races completed"], [d.wins, "Race wins"], [String(Math.min(3, 1 + Math.floor(d.xp / 300))).padStart(2, "0"), "Driver level"]].map(([y, b]) => /* @__PURE__ */ lt.jsxs("div", { className: "lobby-stat", children: [
        /* @__PURE__ */ lt.jsx("span", { children: b }),
        /* @__PURE__ */ lt.jsx("strong", { children: typeof y == "number" ? String(y).padStart(2, "0") : y }),
        /* @__PURE__ */ lt.jsx("div", { className: "stat-rule" })
      ] }, b)) }),
      /* @__PURE__ */ lt.jsxs("div", { className: "scene-copy", children: [
        /* @__PURE__ */ lt.jsx("span", { children: "SMALL CARS." }),
        /* @__PURE__ */ lt.jsx("span", { children: "BIG RACING." })
      ] }),
      /* @__PURE__ */ lt.jsxs("div", { className: "hero-caption", children: [
        /* @__PURE__ */ lt.jsx("span", { children: "THE MINIATURE COLLECTION" }),
        /* @__PURE__ */ lt.jsxs("span", { children: [
          "01 — THE PADDOCK ",
          /* @__PURE__ */ lt.jsx(WT, { size: 13 })
        ] })
      ] }),
      /* @__PURE__ */ lt.jsxs("div", { className: "lobby-bottom", children: [
        /* @__PURE__ */ lt.jsxs("button", { className: "player-card", onClick: () => v("driver"), children: [
          /* @__PURE__ */ lt.jsx("span", { className: "player-symbol", children: /* @__PURE__ */ lt.jsx(tE, { size: 23 }) }),
          /* @__PURE__ */ lt.jsxs("span", { children: [
            /* @__PURE__ */ lt.jsx("strong", { children: "PLAYER ONE" }),
            /* @__PURE__ */ lt.jsxs("small", { children: [
              ["Rookie racer", "Club contender", "Grand prix ace"][Math.min(2, Math.floor(d.xp / 300))],
              " ",
              /* @__PURE__ */ lt.jsxs("span", { children: [
                " / LEVEL ",
                Math.min(3, 1 + Math.floor(d.xp / 300))
              ] })
            ] })
          ] }),
          /* @__PURE__ */ lt.jsx($T, { size: 18 })
        ] }),
        /* @__PURE__ */ lt.jsxs("div", { className: "start-group", children: [
          /* @__PURE__ */ lt.jsx("span", { children: "3 LAPS · 6 DRIVERS · YOUR RACING LINE" }),
          /* @__PURE__ */ lt.jsxs(rs, { className: "start-origin", loading: !d.ready, onClick: () => _f("#start"), children: [
            d.ready ? "Start race" : "Preparing cars…",
            /* @__PURE__ */ lt.jsx(IT, { size: 21 })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ lt.jsxs("div", { className: "lobby-foot", children: [
        /* @__PURE__ */ lt.jsxs("span", { children: [
          /* @__PURE__ */ lt.jsx("i", {}),
          " PROGRESS SAVED ON THIS DEVICE"
        ] }),
        /* @__PURE__ */ lt.jsxs(rs, { className: "sound-origin", onClick: () => {
          _f("#sound"), h(!c);
        }, children: [
          c ? /* @__PURE__ */ lt.jsx(nE, { size: 15 }) : /* @__PURE__ */ lt.jsx(aE, { size: 15 }),
          " Sound ",
          c ? "on" : "off"
        ] })
      ] })
    ] })
  ] });
}
const Bd = document.createElement("div");
Bd.id = "lobby-react";
document.querySelector("#app").append(Bd);
kT.createRoot(Bd).render(/* @__PURE__ */ lt.jsx(WM, {}));
