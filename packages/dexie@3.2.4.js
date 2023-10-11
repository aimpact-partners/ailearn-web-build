System.register([], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["dexie","3.2.4"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [],
execute: function() {
// Prevent esbuild from considering the context to be amd
const define = void 0;
const module = {};

const code = (module, require) => {
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all) __defProp(target, name, {
    get: all[name],
    enumerable: true
  });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from)) if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
      get: () => from[key],
      enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
    });
  }
  return to;
};
var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);

// .beyond/uimport/dexie.3.2.4.js
var dexie_3_2_4_exports = {};
__export(dexie_3_2_4_exports, {
  Dexie: () => Dexie$1,
  RangeSet: () => RangeSet,
  default: () => dexie_3_2_4_default,
  liveQuery: () => liveQuery,
  mergeRanges: () => mergeRanges,
  rangesOverlap: () => rangesOverlap
});
module.exports = __toCommonJS(dexie_3_2_4_exports);

// node_modules/dexie/dist/modern/dexie.mjs
var _global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : global;
var keys = Object.keys;
var isArray = Array.isArray;
if (typeof Promise !== "undefined" && !_global.Promise) {
  _global.Promise = Promise;
}
function extend(obj, extension) {
  if (typeof extension !== "object") return obj;
  keys(extension).forEach(function (key) {
    obj[key] = extension[key];
  });
  return obj;
}
var getProto = Object.getPrototypeOf;
var _hasOwn = {}.hasOwnProperty;
function hasOwn(obj, prop) {
  return _hasOwn.call(obj, prop);
}
function props(proto, extension) {
  if (typeof extension === "function") extension = extension(getProto(proto));
  (typeof Reflect === "undefined" ? keys : Reflect.ownKeys)(extension).forEach(key => {
    setProp(proto, key, extension[key]);
  });
}
var defineProperty = Object.defineProperty;
function setProp(obj, prop, functionOrGetSet, options) {
  defineProperty(obj, prop, extend(functionOrGetSet && hasOwn(functionOrGetSet, "get") && typeof functionOrGetSet.get === "function" ? {
    get: functionOrGetSet.get,
    set: functionOrGetSet.set,
    configurable: true
  } : {
    value: functionOrGetSet,
    configurable: true,
    writable: true
  }, options));
}
function derive(Child) {
  return {
    from: function (Parent) {
      Child.prototype = Object.create(Parent.prototype);
      setProp(Child.prototype, "constructor", Child);
      return {
        extend: props.bind(null, Child.prototype)
      };
    }
  };
}
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
function getPropertyDescriptor(obj, prop) {
  const pd = getOwnPropertyDescriptor(obj, prop);
  let proto;
  return pd || (proto = getProto(obj)) && getPropertyDescriptor(proto, prop);
}
var _slice = [].slice;
function slice(args, start, end) {
  return _slice.call(args, start, end);
}
function override(origFunc, overridedFactory) {
  return overridedFactory(origFunc);
}
function assert(b) {
  if (!b) throw new Error("Assertion Failed");
}
function asap$1(fn) {
  if (_global.setImmediate) setImmediate(fn);else setTimeout(fn, 0);
}
function arrayToObject(array, extractor) {
  return array.reduce((result, item, i) => {
    var nameAndValue = extractor(item, i);
    if (nameAndValue) result[nameAndValue[0]] = nameAndValue[1];
    return result;
  }, {});
}
function tryCatch(fn, onerror, args) {
  try {
    fn.apply(null, args);
  } catch (ex) {
    onerror && onerror(ex);
  }
}
function getByKeyPath(obj, keyPath) {
  if (hasOwn(obj, keyPath)) return obj[keyPath];
  if (!keyPath) return obj;
  if (typeof keyPath !== "string") {
    var rv = [];
    for (var i = 0, l = keyPath.length; i < l; ++i) {
      var val = getByKeyPath(obj, keyPath[i]);
      rv.push(val);
    }
    return rv;
  }
  var period = keyPath.indexOf(".");
  if (period !== -1) {
    var innerObj = obj[keyPath.substr(0, period)];
    return innerObj === void 0 ? void 0 : getByKeyPath(innerObj, keyPath.substr(period + 1));
  }
  return void 0;
}
function setByKeyPath(obj, keyPath, value) {
  if (!obj || keyPath === void 0) return;
  if ("isFrozen" in Object && Object.isFrozen(obj)) return;
  if (typeof keyPath !== "string" && "length" in keyPath) {
    assert(typeof value !== "string" && "length" in value);
    for (var i = 0, l = keyPath.length; i < l; ++i) {
      setByKeyPath(obj, keyPath[i], value[i]);
    }
  } else {
    var period = keyPath.indexOf(".");
    if (period !== -1) {
      var currentKeyPath = keyPath.substr(0, period);
      var remainingKeyPath = keyPath.substr(period + 1);
      if (remainingKeyPath === "") {
        if (value === void 0) {
          if (isArray(obj) && !isNaN(parseInt(currentKeyPath))) obj.splice(currentKeyPath, 1);else delete obj[currentKeyPath];
        } else obj[currentKeyPath] = value;
      } else {
        var innerObj = obj[currentKeyPath];
        if (!innerObj || !hasOwn(obj, currentKeyPath)) innerObj = obj[currentKeyPath] = {};
        setByKeyPath(innerObj, remainingKeyPath, value);
      }
    } else {
      if (value === void 0) {
        if (isArray(obj) && !isNaN(parseInt(keyPath))) obj.splice(keyPath, 1);else delete obj[keyPath];
      } else obj[keyPath] = value;
    }
  }
}
function delByKeyPath(obj, keyPath) {
  if (typeof keyPath === "string") setByKeyPath(obj, keyPath, void 0);else if ("length" in keyPath) [].map.call(keyPath, function (kp) {
    setByKeyPath(obj, kp, void 0);
  });
}
function shallowClone(obj) {
  var rv = {};
  for (var m in obj) {
    if (hasOwn(obj, m)) rv[m] = obj[m];
  }
  return rv;
}
var concat = [].concat;
function flatten(a) {
  return concat.apply([], a);
}
var intrinsicTypeNames = "Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(flatten([8, 16, 32, 64].map(num => ["Int", "Uint", "Float"].map(t => t + num + "Array")))).filter(t => _global[t]);
var intrinsicTypes = intrinsicTypeNames.map(t => _global[t]);
arrayToObject(intrinsicTypeNames, x => [x, true]);
var circularRefs = null;
function deepClone(any) {
  circularRefs = typeof WeakMap !== "undefined" && /* @__PURE__ */new WeakMap();
  const rv = innerDeepClone(any);
  circularRefs = null;
  return rv;
}
function innerDeepClone(any) {
  if (!any || typeof any !== "object") return any;
  let rv = circularRefs && circularRefs.get(any);
  if (rv) return rv;
  if (isArray(any)) {
    rv = [];
    circularRefs && circularRefs.set(any, rv);
    for (var i = 0, l = any.length; i < l; ++i) {
      rv.push(innerDeepClone(any[i]));
    }
  } else if (intrinsicTypes.indexOf(any.constructor) >= 0) {
    rv = any;
  } else {
    const proto = getProto(any);
    rv = proto === Object.prototype ? {} : Object.create(proto);
    circularRefs && circularRefs.set(any, rv);
    for (var prop in any) {
      if (hasOwn(any, prop)) {
        rv[prop] = innerDeepClone(any[prop]);
      }
    }
  }
  return rv;
}
var {
  toString
} = {};
function toStringTag(o) {
  return toString.call(o).slice(8, -1);
}
var iteratorSymbol = typeof Symbol !== "undefined" ? Symbol.iterator : "@@iterator";
var getIteratorOf = typeof iteratorSymbol === "symbol" ? function (x) {
  var i;
  return x != null && (i = x[iteratorSymbol]) && i.apply(x);
} : function () {
  return null;
};
var NO_CHAR_ARRAY = {};
function getArrayOf(arrayLike) {
  var i, a, x, it;
  if (arguments.length === 1) {
    if (isArray(arrayLike)) return arrayLike.slice();
    if (this === NO_CHAR_ARRAY && typeof arrayLike === "string") return [arrayLike];
    if (it = getIteratorOf(arrayLike)) {
      a = [];
      while (x = it.next(), !x.done) a.push(x.value);
      return a;
    }
    if (arrayLike == null) return [arrayLike];
    i = arrayLike.length;
    if (typeof i === "number") {
      a = new Array(i);
      while (i--) a[i] = arrayLike[i];
      return a;
    }
    return [arrayLike];
  }
  i = arguments.length;
  a = new Array(i);
  while (i--) a[i] = arguments[i];
  return a;
}
var isAsyncFunction = typeof Symbol !== "undefined" ? fn => fn[Symbol.toStringTag] === "AsyncFunction" : () => false;
var debug = typeof location !== "undefined" && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
function setDebug(value, filter) {
  debug = value;
  libraryFilter = filter;
}
var libraryFilter = () => true;
var NEEDS_THROW_FOR_STACK = !new Error("").stack;
function getErrorWithStack() {
  if (NEEDS_THROW_FOR_STACK) try {
    getErrorWithStack.arguments;
    throw new Error();
  } catch (e) {
    return e;
  }
  return new Error();
}
function prettyStack(exception, numIgnoredFrames) {
  var stack = exception.stack;
  if (!stack) return "";
  numIgnoredFrames = numIgnoredFrames || 0;
  if (stack.indexOf(exception.name) === 0) numIgnoredFrames += (exception.name + exception.message).split("\n").length;
  return stack.split("\n").slice(numIgnoredFrames).filter(libraryFilter).map(frame => "\n" + frame).join("");
}
var dexieErrorNames = ["Modify", "Bulk", "OpenFailed", "VersionChange", "Schema", "Upgrade", "InvalidTable", "MissingAPI", "NoSuchDatabase", "InvalidArgument", "SubTransaction", "Unsupported", "Internal", "DatabaseClosed", "PrematureCommit", "ForeignAwait"];
var idbDomErrorNames = ["Unknown", "Constraint", "Data", "TransactionInactive", "ReadOnly", "Version", "NotFound", "InvalidState", "InvalidAccess", "Abort", "Timeout", "QuotaExceeded", "Syntax", "DataClone"];
var errorList = dexieErrorNames.concat(idbDomErrorNames);
var defaultTexts = {
  VersionChanged: "Database version changed by other database connection",
  DatabaseClosed: "Database has been closed",
  Abort: "Transaction aborted",
  TransactionInactive: "Transaction has already completed or failed",
  MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"
};
function DexieError(name, msg) {
  this._e = getErrorWithStack();
  this.name = name;
  this.message = msg;
}
derive(DexieError).from(Error).extend({
  stack: {
    get: function () {
      return this._stack || (this._stack = this.name + ": " + this.message + prettyStack(this._e, 2));
    }
  },
  toString: function () {
    return this.name + ": " + this.message;
  }
});
function getMultiErrorMessage(msg, failures) {
  return msg + ". Errors: " + Object.keys(failures).map(key => failures[key].toString()).filter((v, i, s) => s.indexOf(v) === i).join("\n");
}
function ModifyError(msg, failures, successCount, failedKeys) {
  this._e = getErrorWithStack();
  this.failures = failures;
  this.failedKeys = failedKeys;
  this.successCount = successCount;
  this.message = getMultiErrorMessage(msg, failures);
}
derive(ModifyError).from(DexieError);
function BulkError(msg, failures) {
  this._e = getErrorWithStack();
  this.name = "BulkError";
  this.failures = Object.keys(failures).map(pos => failures[pos]);
  this.failuresByPos = failures;
  this.message = getMultiErrorMessage(msg, failures);
}
derive(BulkError).from(DexieError);
var errnames = errorList.reduce((obj, name) => (obj[name] = name + "Error", obj), {});
var BaseException = DexieError;
var exceptions = errorList.reduce((obj, name) => {
  var fullName = name + "Error";
  function DexieError2(msgOrInner, inner) {
    this._e = getErrorWithStack();
    this.name = fullName;
    if (!msgOrInner) {
      this.message = defaultTexts[name] || fullName;
      this.inner = null;
    } else if (typeof msgOrInner === "string") {
      this.message = `${msgOrInner}${!inner ? "" : "\n " + inner}`;
      this.inner = inner || null;
    } else if (typeof msgOrInner === "object") {
      this.message = `${msgOrInner.name} ${msgOrInner.message}`;
      this.inner = msgOrInner;
    }
  }
  derive(DexieError2).from(BaseException);
  obj[name] = DexieError2;
  return obj;
}, {});
exceptions.Syntax = SyntaxError;
exceptions.Type = TypeError;
exceptions.Range = RangeError;
var exceptionMap = idbDomErrorNames.reduce((obj, name) => {
  obj[name + "Error"] = exceptions[name];
  return obj;
}, {});
function mapError(domError, message) {
  if (!domError || domError instanceof DexieError || domError instanceof TypeError || domError instanceof SyntaxError || !domError.name || !exceptionMap[domError.name]) return domError;
  var rv = new exceptionMap[domError.name](message || domError.message, domError);
  if ("stack" in domError) {
    setProp(rv, "stack", {
      get: function () {
        return this.inner.stack;
      }
    });
  }
  return rv;
}
var fullNameExceptions = errorList.reduce((obj, name) => {
  if (["Syntax", "Type", "Range"].indexOf(name) === -1) obj[name + "Error"] = exceptions[name];
  return obj;
}, {});
fullNameExceptions.ModifyError = ModifyError;
fullNameExceptions.DexieError = DexieError;
fullNameExceptions.BulkError = BulkError;
function nop() {}
function mirror(val) {
  return val;
}
function pureFunctionChain(f1, f2) {
  if (f1 == null || f1 === mirror) return f2;
  return function (val) {
    return f2(f1(val));
  };
}
function callBoth(on1, on2) {
  return function () {
    on1.apply(this, arguments);
    on2.apply(this, arguments);
  };
}
function hookCreatingChain(f1, f2) {
  if (f1 === nop) return f2;
  return function () {
    var res = f1.apply(this, arguments);
    if (res !== void 0) arguments[0] = res;
    var onsuccess = this.onsuccess,
      onerror = this.onerror;
    this.onsuccess = null;
    this.onerror = null;
    var res2 = f2.apply(this, arguments);
    if (onsuccess) this.onsuccess = this.onsuccess ? callBoth(onsuccess, this.onsuccess) : onsuccess;
    if (onerror) this.onerror = this.onerror ? callBoth(onerror, this.onerror) : onerror;
    return res2 !== void 0 ? res2 : res;
  };
}
function hookDeletingChain(f1, f2) {
  if (f1 === nop) return f2;
  return function () {
    f1.apply(this, arguments);
    var onsuccess = this.onsuccess,
      onerror = this.onerror;
    this.onsuccess = this.onerror = null;
    f2.apply(this, arguments);
    if (onsuccess) this.onsuccess = this.onsuccess ? callBoth(onsuccess, this.onsuccess) : onsuccess;
    if (onerror) this.onerror = this.onerror ? callBoth(onerror, this.onerror) : onerror;
  };
}
function hookUpdatingChain(f1, f2) {
  if (f1 === nop) return f2;
  return function (modifications) {
    var res = f1.apply(this, arguments);
    extend(modifications, res);
    var onsuccess = this.onsuccess,
      onerror = this.onerror;
    this.onsuccess = null;
    this.onerror = null;
    var res2 = f2.apply(this, arguments);
    if (onsuccess) this.onsuccess = this.onsuccess ? callBoth(onsuccess, this.onsuccess) : onsuccess;
    if (onerror) this.onerror = this.onerror ? callBoth(onerror, this.onerror) : onerror;
    return res === void 0 ? res2 === void 0 ? void 0 : res2 : extend(res, res2);
  };
}
function reverseStoppableEventChain(f1, f2) {
  if (f1 === nop) return f2;
  return function () {
    if (f2.apply(this, arguments) === false) return false;
    return f1.apply(this, arguments);
  };
}
function promisableChain(f1, f2) {
  if (f1 === nop) return f2;
  return function () {
    var res = f1.apply(this, arguments);
    if (res && typeof res.then === "function") {
      var thiz = this,
        i = arguments.length,
        args = new Array(i);
      while (i--) args[i] = arguments[i];
      return res.then(function () {
        return f2.apply(thiz, args);
      });
    }
    return f2.apply(this, arguments);
  };
}
var INTERNAL = {};
var LONG_STACKS_CLIP_LIMIT = 100,
  MAX_LONG_STACKS = 20,
  ZONE_ECHO_LIMIT = 100,
  [resolvedNativePromise, nativePromiseProto, resolvedGlobalPromise] = typeof Promise === "undefined" ? [] : (() => {
    let globalP = Promise.resolve();
    if (typeof crypto === "undefined" || !crypto.subtle) return [globalP, getProto(globalP), globalP];
    const nativeP = crypto.subtle.digest("SHA-512", new Uint8Array([0]));
    return [nativeP, getProto(nativeP), globalP];
  })(),
  nativePromiseThen = nativePromiseProto && nativePromiseProto.then;
var NativePromise = resolvedNativePromise && resolvedNativePromise.constructor;
var patchGlobalPromise = !!resolvedGlobalPromise;
var stack_being_generated = false;
var schedulePhysicalTick = resolvedGlobalPromise ? () => {
  resolvedGlobalPromise.then(physicalTick);
} : _global.setImmediate ? setImmediate.bind(null, physicalTick) : _global.MutationObserver ? () => {
  var hiddenDiv = document.createElement("div");
  new MutationObserver(() => {
    physicalTick();
    hiddenDiv = null;
  }).observe(hiddenDiv, {
    attributes: true
  });
  hiddenDiv.setAttribute("i", "1");
} : () => {
  setTimeout(physicalTick, 0);
};
var asap = function (callback, args) {
  microtickQueue.push([callback, args]);
  if (needsNewPhysicalTick) {
    schedulePhysicalTick();
    needsNewPhysicalTick = false;
  }
};
var isOutsideMicroTick = true,
  needsNewPhysicalTick = true,
  unhandledErrors = [],
  rejectingErrors = [],
  currentFulfiller = null,
  rejectionMapper = mirror;
var globalPSD = {
  id: "global",
  global: true,
  ref: 0,
  unhandleds: [],
  onunhandled: globalError,
  pgp: false,
  env: {},
  finalize: function () {
    this.unhandleds.forEach(uh => {
      try {
        globalError(uh[0], uh[1]);
      } catch (e) {}
    });
  }
};
var PSD = globalPSD;
var microtickQueue = [];
var numScheduledCalls = 0;
var tickFinalizers = [];
function DexiePromise(fn) {
  if (typeof this !== "object") throw new TypeError("Promises must be constructed via new");
  this._listeners = [];
  this.onuncatched = nop;
  this._lib = false;
  var psd = this._PSD = PSD;
  if (debug) {
    this._stackHolder = getErrorWithStack();
    this._prev = null;
    this._numPrev = 0;
  }
  if (typeof fn !== "function") {
    if (fn !== INTERNAL) throw new TypeError("Not a function");
    this._state = arguments[1];
    this._value = arguments[2];
    if (this._state === false) handleRejection(this, this._value);
    return;
  }
  this._state = null;
  this._value = null;
  ++psd.ref;
  executePromiseTask(this, fn);
}
var thenProp = {
  get: function () {
    var psd = PSD,
      microTaskId = totalEchoes;
    function then(onFulfilled, onRejected) {
      var possibleAwait = !psd.global && (psd !== PSD || microTaskId !== totalEchoes);
      const cleanup = possibleAwait && !decrementExpectedAwaits();
      var rv = new DexiePromise((resolve, reject) => {
        propagateToListener(this, new Listener(nativeAwaitCompatibleWrap(onFulfilled, psd, possibleAwait, cleanup), nativeAwaitCompatibleWrap(onRejected, psd, possibleAwait, cleanup), resolve, reject, psd));
      });
      debug && linkToPreviousPromise(rv, this);
      return rv;
    }
    then.prototype = INTERNAL;
    return then;
  },
  set: function (value) {
    setProp(this, "then", value && value.prototype === INTERNAL ? thenProp : {
      get: function () {
        return value;
      },
      set: thenProp.set
    });
  }
};
props(DexiePromise.prototype, {
  then: thenProp,
  _then: function (onFulfilled, onRejected) {
    propagateToListener(this, new Listener(null, null, onFulfilled, onRejected, PSD));
  },
  catch: function (onRejected) {
    if (arguments.length === 1) return this.then(null, onRejected);
    var type2 = arguments[0],
      handler = arguments[1];
    return typeof type2 === "function" ? this.then(null, err => err instanceof type2 ? handler(err) : PromiseReject(err)) : this.then(null, err => err && err.name === type2 ? handler(err) : PromiseReject(err));
  },
  finally: function (onFinally) {
    return this.then(value => {
      onFinally();
      return value;
    }, err => {
      onFinally();
      return PromiseReject(err);
    });
  },
  stack: {
    get: function () {
      if (this._stack) return this._stack;
      try {
        stack_being_generated = true;
        var stacks = getStack(this, [], MAX_LONG_STACKS);
        var stack = stacks.join("\nFrom previous: ");
        if (this._state !== null) this._stack = stack;
        return stack;
      } finally {
        stack_being_generated = false;
      }
    }
  },
  timeout: function (ms, msg) {
    return ms < Infinity ? new DexiePromise((resolve, reject) => {
      var handle = setTimeout(() => reject(new exceptions.Timeout(msg)), ms);
      this.then(resolve, reject).finally(clearTimeout.bind(null, handle));
    }) : this;
  }
});
if (typeof Symbol !== "undefined" && Symbol.toStringTag) setProp(DexiePromise.prototype, Symbol.toStringTag, "Dexie.Promise");
globalPSD.env = snapShot();
function Listener(onFulfilled, onRejected, resolve, reject, zone) {
  this.onFulfilled = typeof onFulfilled === "function" ? onFulfilled : null;
  this.onRejected = typeof onRejected === "function" ? onRejected : null;
  this.resolve = resolve;
  this.reject = reject;
  this.psd = zone;
}
props(DexiePromise, {
  all: function () {
    var values = getArrayOf.apply(null, arguments).map(onPossibleParallellAsync);
    return new DexiePromise(function (resolve, reject) {
      if (values.length === 0) resolve([]);
      var remaining = values.length;
      values.forEach((a, i) => DexiePromise.resolve(a).then(x => {
        values[i] = x;
        if (! --remaining) resolve(values);
      }, reject));
    });
  },
  resolve: value => {
    if (value instanceof DexiePromise) return value;
    if (value && typeof value.then === "function") return new DexiePromise((resolve, reject) => {
      value.then(resolve, reject);
    });
    var rv = new DexiePromise(INTERNAL, true, value);
    linkToPreviousPromise(rv, currentFulfiller);
    return rv;
  },
  reject: PromiseReject,
  race: function () {
    var values = getArrayOf.apply(null, arguments).map(onPossibleParallellAsync);
    return new DexiePromise((resolve, reject) => {
      values.map(value => DexiePromise.resolve(value).then(resolve, reject));
    });
  },
  PSD: {
    get: () => PSD,
    set: value => PSD = value
  },
  totalEchoes: {
    get: () => totalEchoes
  },
  newPSD: newScope,
  usePSD,
  scheduler: {
    get: () => asap,
    set: value => {
      asap = value;
    }
  },
  rejectionMapper: {
    get: () => rejectionMapper,
    set: value => {
      rejectionMapper = value;
    }
  },
  follow: (fn, zoneProps) => {
    return new DexiePromise((resolve, reject) => {
      return newScope((resolve2, reject2) => {
        var psd = PSD;
        psd.unhandleds = [];
        psd.onunhandled = reject2;
        psd.finalize = callBoth(function () {
          run_at_end_of_this_or_next_physical_tick(() => {
            this.unhandleds.length === 0 ? resolve2() : reject2(this.unhandleds[0]);
          });
        }, psd.finalize);
        fn();
      }, zoneProps, resolve, reject);
    });
  }
});
if (NativePromise) {
  if (NativePromise.allSettled) setProp(DexiePromise, "allSettled", function () {
    const possiblePromises = getArrayOf.apply(null, arguments).map(onPossibleParallellAsync);
    return new DexiePromise(resolve => {
      if (possiblePromises.length === 0) resolve([]);
      let remaining = possiblePromises.length;
      const results = new Array(remaining);
      possiblePromises.forEach((p, i) => DexiePromise.resolve(p).then(value => results[i] = {
        status: "fulfilled",
        value
      }, reason => results[i] = {
        status: "rejected",
        reason
      }).then(() => --remaining || resolve(results)));
    });
  });
  if (NativePromise.any && typeof AggregateError !== "undefined") setProp(DexiePromise, "any", function () {
    const possiblePromises = getArrayOf.apply(null, arguments).map(onPossibleParallellAsync);
    return new DexiePromise((resolve, reject) => {
      if (possiblePromises.length === 0) reject(new AggregateError([]));
      let remaining = possiblePromises.length;
      const failures = new Array(remaining);
      possiblePromises.forEach((p, i) => DexiePromise.resolve(p).then(value => resolve(value), failure => {
        failures[i] = failure;
        if (! --remaining) reject(new AggregateError(failures));
      }));
    });
  });
}
function executePromiseTask(promise, fn) {
  try {
    fn(value => {
      if (promise._state !== null) return;
      if (value === promise) throw new TypeError("A promise cannot be resolved with itself.");
      var shouldExecuteTick = promise._lib && beginMicroTickScope();
      if (value && typeof value.then === "function") {
        executePromiseTask(promise, (resolve, reject) => {
          value instanceof DexiePromise ? value._then(resolve, reject) : value.then(resolve, reject);
        });
      } else {
        promise._state = true;
        promise._value = value;
        propagateAllListeners(promise);
      }
      if (shouldExecuteTick) endMicroTickScope();
    }, handleRejection.bind(null, promise));
  } catch (ex) {
    handleRejection(promise, ex);
  }
}
function handleRejection(promise, reason) {
  rejectingErrors.push(reason);
  if (promise._state !== null) return;
  var shouldExecuteTick = promise._lib && beginMicroTickScope();
  reason = rejectionMapper(reason);
  promise._state = false;
  promise._value = reason;
  debug && reason !== null && typeof reason === "object" && !reason._promise && tryCatch(() => {
    var origProp = getPropertyDescriptor(reason, "stack");
    reason._promise = promise;
    setProp(reason, "stack", {
      get: () => stack_being_generated ? origProp && (origProp.get ? origProp.get.apply(reason) : origProp.value) : promise.stack
    });
  });
  addPossiblyUnhandledError(promise);
  propagateAllListeners(promise);
  if (shouldExecuteTick) endMicroTickScope();
}
function propagateAllListeners(promise) {
  var listeners = promise._listeners;
  promise._listeners = [];
  for (var i = 0, len = listeners.length; i < len; ++i) {
    propagateToListener(promise, listeners[i]);
  }
  var psd = promise._PSD;
  --psd.ref || psd.finalize();
  if (numScheduledCalls === 0) {
    ++numScheduledCalls;
    asap(() => {
      if (--numScheduledCalls === 0) finalizePhysicalTick();
    }, []);
  }
}
function propagateToListener(promise, listener) {
  if (promise._state === null) {
    promise._listeners.push(listener);
    return;
  }
  var cb = promise._state ? listener.onFulfilled : listener.onRejected;
  if (cb === null) {
    return (promise._state ? listener.resolve : listener.reject)(promise._value);
  }
  ++listener.psd.ref;
  ++numScheduledCalls;
  asap(callListener, [cb, promise, listener]);
}
function callListener(cb, promise, listener) {
  try {
    currentFulfiller = promise;
    var ret,
      value = promise._value;
    if (promise._state) {
      ret = cb(value);
    } else {
      if (rejectingErrors.length) rejectingErrors = [];
      ret = cb(value);
      if (rejectingErrors.indexOf(value) === -1) markErrorAsHandled(promise);
    }
    listener.resolve(ret);
  } catch (e) {
    listener.reject(e);
  } finally {
    currentFulfiller = null;
    if (--numScheduledCalls === 0) finalizePhysicalTick();
    --listener.psd.ref || listener.psd.finalize();
  }
}
function getStack(promise, stacks, limit) {
  if (stacks.length === limit) return stacks;
  var stack = "";
  if (promise._state === false) {
    var failure = promise._value,
      errorName,
      message;
    if (failure != null) {
      errorName = failure.name || "Error";
      message = failure.message || failure;
      stack = prettyStack(failure, 0);
    } else {
      errorName = failure;
      message = "";
    }
    stacks.push(errorName + (message ? ": " + message : "") + stack);
  }
  if (debug) {
    stack = prettyStack(promise._stackHolder, 2);
    if (stack && stacks.indexOf(stack) === -1) stacks.push(stack);
    if (promise._prev) getStack(promise._prev, stacks, limit);
  }
  return stacks;
}
function linkToPreviousPromise(promise, prev) {
  var numPrev = prev ? prev._numPrev + 1 : 0;
  if (numPrev < LONG_STACKS_CLIP_LIMIT) {
    promise._prev = prev;
    promise._numPrev = numPrev;
  }
}
function physicalTick() {
  beginMicroTickScope() && endMicroTickScope();
}
function beginMicroTickScope() {
  var wasRootExec = isOutsideMicroTick;
  isOutsideMicroTick = false;
  needsNewPhysicalTick = false;
  return wasRootExec;
}
function endMicroTickScope() {
  var callbacks, i, l;
  do {
    while (microtickQueue.length > 0) {
      callbacks = microtickQueue;
      microtickQueue = [];
      l = callbacks.length;
      for (i = 0; i < l; ++i) {
        var item = callbacks[i];
        item[0].apply(null, item[1]);
      }
    }
  } while (microtickQueue.length > 0);
  isOutsideMicroTick = true;
  needsNewPhysicalTick = true;
}
function finalizePhysicalTick() {
  var unhandledErrs = unhandledErrors;
  unhandledErrors = [];
  unhandledErrs.forEach(p => {
    p._PSD.onunhandled.call(null, p._value, p);
  });
  var finalizers = tickFinalizers.slice(0);
  var i = finalizers.length;
  while (i) finalizers[--i]();
}
function run_at_end_of_this_or_next_physical_tick(fn) {
  function finalizer() {
    fn();
    tickFinalizers.splice(tickFinalizers.indexOf(finalizer), 1);
  }
  tickFinalizers.push(finalizer);
  ++numScheduledCalls;
  asap(() => {
    if (--numScheduledCalls === 0) finalizePhysicalTick();
  }, []);
}
function addPossiblyUnhandledError(promise) {
  if (!unhandledErrors.some(p => p._value === promise._value)) unhandledErrors.push(promise);
}
function markErrorAsHandled(promise) {
  var i = unhandledErrors.length;
  while (i) if (unhandledErrors[--i]._value === promise._value) {
    unhandledErrors.splice(i, 1);
    return;
  }
}
function PromiseReject(reason) {
  return new DexiePromise(INTERNAL, false, reason);
}
function wrap(fn, errorCatcher) {
  var psd = PSD;
  return function () {
    var wasRootExec = beginMicroTickScope(),
      outerScope = PSD;
    try {
      switchToZone(psd, true);
      return fn.apply(this, arguments);
    } catch (e) {
      errorCatcher && errorCatcher(e);
    } finally {
      switchToZone(outerScope, false);
      if (wasRootExec) endMicroTickScope();
    }
  };
}
var task = {
  awaits: 0,
  echoes: 0,
  id: 0
};
var taskCounter = 0;
var zoneStack = [];
var zoneEchoes = 0;
var totalEchoes = 0;
var zone_id_counter = 0;
function newScope(fn, props2, a1, a2) {
  var parent = PSD,
    psd = Object.create(parent);
  psd.parent = parent;
  psd.ref = 0;
  psd.global = false;
  psd.id = ++zone_id_counter;
  var globalEnv = globalPSD.env;
  psd.env = patchGlobalPromise ? {
    Promise: DexiePromise,
    PromiseProp: {
      value: DexiePromise,
      configurable: true,
      writable: true
    },
    all: DexiePromise.all,
    race: DexiePromise.race,
    allSettled: DexiePromise.allSettled,
    any: DexiePromise.any,
    resolve: DexiePromise.resolve,
    reject: DexiePromise.reject,
    nthen: getPatchedPromiseThen(globalEnv.nthen, psd),
    gthen: getPatchedPromiseThen(globalEnv.gthen, psd)
  } : {};
  if (props2) extend(psd, props2);
  ++parent.ref;
  psd.finalize = function () {
    --this.parent.ref || this.parent.finalize();
  };
  var rv = usePSD(psd, fn, a1, a2);
  if (psd.ref === 0) psd.finalize();
  return rv;
}
function incrementExpectedAwaits() {
  if (!task.id) task.id = ++taskCounter;
  ++task.awaits;
  task.echoes += ZONE_ECHO_LIMIT;
  return task.id;
}
function decrementExpectedAwaits() {
  if (!task.awaits) return false;
  if (--task.awaits === 0) task.id = 0;
  task.echoes = task.awaits * ZONE_ECHO_LIMIT;
  return true;
}
if (("" + nativePromiseThen).indexOf("[native code]") === -1) {
  incrementExpectedAwaits = decrementExpectedAwaits = nop;
}
function onPossibleParallellAsync(possiblePromise) {
  if (task.echoes && possiblePromise && possiblePromise.constructor === NativePromise) {
    incrementExpectedAwaits();
    return possiblePromise.then(x => {
      decrementExpectedAwaits();
      return x;
    }, e => {
      decrementExpectedAwaits();
      return rejection(e);
    });
  }
  return possiblePromise;
}
function zoneEnterEcho(targetZone) {
  ++totalEchoes;
  if (!task.echoes || --task.echoes === 0) {
    task.echoes = task.id = 0;
  }
  zoneStack.push(PSD);
  switchToZone(targetZone, true);
}
function zoneLeaveEcho() {
  var zone = zoneStack[zoneStack.length - 1];
  zoneStack.pop();
  switchToZone(zone, false);
}
function switchToZone(targetZone, bEnteringZone) {
  var currentZone = PSD;
  if (bEnteringZone ? task.echoes && (!zoneEchoes++ || targetZone !== PSD) : zoneEchoes && (! --zoneEchoes || targetZone !== PSD)) {
    enqueueNativeMicroTask(bEnteringZone ? zoneEnterEcho.bind(null, targetZone) : zoneLeaveEcho);
  }
  if (targetZone === PSD) return;
  PSD = targetZone;
  if (currentZone === globalPSD) globalPSD.env = snapShot();
  if (patchGlobalPromise) {
    var GlobalPromise = globalPSD.env.Promise;
    var targetEnv = targetZone.env;
    nativePromiseProto.then = targetEnv.nthen;
    GlobalPromise.prototype.then = targetEnv.gthen;
    if (currentZone.global || targetZone.global) {
      Object.defineProperty(_global, "Promise", targetEnv.PromiseProp);
      GlobalPromise.all = targetEnv.all;
      GlobalPromise.race = targetEnv.race;
      GlobalPromise.resolve = targetEnv.resolve;
      GlobalPromise.reject = targetEnv.reject;
      if (targetEnv.allSettled) GlobalPromise.allSettled = targetEnv.allSettled;
      if (targetEnv.any) GlobalPromise.any = targetEnv.any;
    }
  }
}
function snapShot() {
  var GlobalPromise = _global.Promise;
  return patchGlobalPromise ? {
    Promise: GlobalPromise,
    PromiseProp: Object.getOwnPropertyDescriptor(_global, "Promise"),
    all: GlobalPromise.all,
    race: GlobalPromise.race,
    allSettled: GlobalPromise.allSettled,
    any: GlobalPromise.any,
    resolve: GlobalPromise.resolve,
    reject: GlobalPromise.reject,
    nthen: nativePromiseProto.then,
    gthen: GlobalPromise.prototype.then
  } : {};
}
function usePSD(psd, fn, a1, a2, a3) {
  var outerScope = PSD;
  try {
    switchToZone(psd, true);
    return fn(a1, a2, a3);
  } finally {
    switchToZone(outerScope, false);
  }
}
function enqueueNativeMicroTask(job) {
  nativePromiseThen.call(resolvedNativePromise, job);
}
function nativeAwaitCompatibleWrap(fn, zone, possibleAwait, cleanup) {
  return typeof fn !== "function" ? fn : function () {
    var outerZone = PSD;
    if (possibleAwait) incrementExpectedAwaits();
    switchToZone(zone, true);
    try {
      return fn.apply(this, arguments);
    } finally {
      switchToZone(outerZone, false);
      if (cleanup) enqueueNativeMicroTask(decrementExpectedAwaits);
    }
  };
}
function getPatchedPromiseThen(origThen, zone) {
  return function (onResolved, onRejected) {
    return origThen.call(this, nativeAwaitCompatibleWrap(onResolved, zone), nativeAwaitCompatibleWrap(onRejected, zone));
  };
}
var UNHANDLEDREJECTION = "unhandledrejection";
function globalError(err, promise) {
  var rv;
  try {
    rv = promise.onuncatched(err);
  } catch (e) {}
  if (rv !== false) try {
    var event,
      eventData = {
        promise,
        reason: err
      };
    if (_global.document && document.createEvent) {
      event = document.createEvent("Event");
      event.initEvent(UNHANDLEDREJECTION, true, true);
      extend(event, eventData);
    } else if (_global.CustomEvent) {
      event = new CustomEvent(UNHANDLEDREJECTION, {
        detail: eventData
      });
      extend(event, eventData);
    }
    if (event && _global.dispatchEvent) {
      dispatchEvent(event);
      if (!_global.PromiseRejectionEvent && _global.onunhandledrejection) try {
        _global.onunhandledrejection(event);
      } catch (_) {}
    }
    if (debug && event && !event.defaultPrevented) {
      console.warn(`Unhandled rejection: ${err.stack || err}`);
    }
  } catch (e) {}
}
var rejection = DexiePromise.reject;
function tempTransaction(db, mode, storeNames, fn) {
  if (!db.idbdb || !db._state.openComplete && !PSD.letThrough && !db._vip) {
    if (db._state.openComplete) {
      return rejection(new exceptions.DatabaseClosed(db._state.dbOpenError));
    }
    if (!db._state.isBeingOpened) {
      if (!db._options.autoOpen) return rejection(new exceptions.DatabaseClosed());
      db.open().catch(nop);
    }
    return db._state.dbReadyPromise.then(() => tempTransaction(db, mode, storeNames, fn));
  } else {
    var trans = db._createTransaction(mode, storeNames, db._dbSchema);
    try {
      trans.create();
      db._state.PR1398_maxLoop = 3;
    } catch (ex) {
      if (ex.name === errnames.InvalidState && db.isOpen() && --db._state.PR1398_maxLoop > 0) {
        console.warn("Dexie: Need to reopen db");
        db._close();
        return db.open().then(() => tempTransaction(db, mode, storeNames, fn));
      }
      return rejection(ex);
    }
    return trans._promise(mode, (resolve, reject) => {
      return newScope(() => {
        PSD.trans = trans;
        return fn(resolve, reject, trans);
      });
    }).then(result => {
      return trans._completion.then(() => result);
    });
  }
}
var DEXIE_VERSION = "3.2.4";
var maxString = String.fromCharCode(65535);
var minKey = -Infinity;
var INVALID_KEY_ARGUMENT = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.";
var STRING_EXPECTED = "String expected.";
var connections = [];
var isIEOrEdge = typeof navigator !== "undefined" && /(MSIE|Trident|Edge)/.test(navigator.userAgent);
var hasIEDeleteObjectStoreBug = isIEOrEdge;
var hangsOnDeleteLargeKeyRange = isIEOrEdge;
var dexieStackFrameFilter = frame => !/(dexie\.js|dexie\.min\.js)/.test(frame);
var DBNAMES_DB = "__dbnames";
var READONLY = "readonly";
var READWRITE = "readwrite";
function combine(filter1, filter2) {
  return filter1 ? filter2 ? function () {
    return filter1.apply(this, arguments) && filter2.apply(this, arguments);
  } : filter1 : filter2;
}
var AnyRange = {
  type: 3,
  lower: -Infinity,
  lowerOpen: false,
  upper: [[]],
  upperOpen: false
};
function workaroundForUndefinedPrimKey(keyPath) {
  return typeof keyPath === "string" && !/\./.test(keyPath) ? obj => {
    if (obj[keyPath] === void 0 && keyPath in obj) {
      obj = deepClone(obj);
      delete obj[keyPath];
    }
    return obj;
  } : obj => obj;
}
var Table = class {
  _trans(mode, fn, writeLocked) {
    const trans = this._tx || PSD.trans;
    const tableName = this.name;
    function checkTableInTransaction(resolve, reject, trans2) {
      if (!trans2.schema[tableName]) throw new exceptions.NotFound("Table " + tableName + " not part of transaction");
      return fn(trans2.idbtrans, trans2);
    }
    const wasRootExec = beginMicroTickScope();
    try {
      return trans && trans.db === this.db ? trans === PSD.trans ? trans._promise(mode, checkTableInTransaction, writeLocked) : newScope(() => trans._promise(mode, checkTableInTransaction, writeLocked), {
        trans,
        transless: PSD.transless || PSD
      }) : tempTransaction(this.db, mode, [this.name], checkTableInTransaction);
    } finally {
      if (wasRootExec) endMicroTickScope();
    }
  }
  get(keyOrCrit, cb) {
    if (keyOrCrit && keyOrCrit.constructor === Object) return this.where(keyOrCrit).first(cb);
    return this._trans("readonly", trans => {
      return this.core.get({
        trans,
        key: keyOrCrit
      }).then(res => this.hook.reading.fire(res));
    }).then(cb);
  }
  where(indexOrCrit) {
    if (typeof indexOrCrit === "string") return new this.db.WhereClause(this, indexOrCrit);
    if (isArray(indexOrCrit)) return new this.db.WhereClause(this, `[${indexOrCrit.join("+")}]`);
    const keyPaths = keys(indexOrCrit);
    if (keyPaths.length === 1) return this.where(keyPaths[0]).equals(indexOrCrit[keyPaths[0]]);
    const compoundIndex = this.schema.indexes.concat(this.schema.primKey).filter(ix => ix.compound && keyPaths.every(keyPath => ix.keyPath.indexOf(keyPath) >= 0) && ix.keyPath.every(keyPath => keyPaths.indexOf(keyPath) >= 0))[0];
    if (compoundIndex && this.db._maxKey !== maxString) return this.where(compoundIndex.name).equals(compoundIndex.keyPath.map(kp => indexOrCrit[kp]));
    if (!compoundIndex && debug) console.warn(`The query ${JSON.stringify(indexOrCrit)} on ${this.name} would benefit of a compound index [${keyPaths.join("+")}]`);
    const {
      idxByName
    } = this.schema;
    const idb = this.db._deps.indexedDB;
    function equals(a, b) {
      try {
        return idb.cmp(a, b) === 0;
      } catch (e) {
        return false;
      }
    }
    const [idx, filterFunction] = keyPaths.reduce(([prevIndex, prevFilterFn], keyPath) => {
      const index = idxByName[keyPath];
      const value = indexOrCrit[keyPath];
      return [prevIndex || index, prevIndex || !index ? combine(prevFilterFn, index && index.multi ? x => {
        const prop = getByKeyPath(x, keyPath);
        return isArray(prop) && prop.some(item => equals(value, item));
      } : x => equals(value, getByKeyPath(x, keyPath))) : prevFilterFn];
    }, [null, null]);
    return idx ? this.where(idx.name).equals(indexOrCrit[idx.keyPath]).filter(filterFunction) : compoundIndex ? this.filter(filterFunction) : this.where(keyPaths).equals("");
  }
  filter(filterFunction) {
    return this.toCollection().and(filterFunction);
  }
  count(thenShortcut) {
    return this.toCollection().count(thenShortcut);
  }
  offset(offset) {
    return this.toCollection().offset(offset);
  }
  limit(numRows) {
    return this.toCollection().limit(numRows);
  }
  each(callback) {
    return this.toCollection().each(callback);
  }
  toArray(thenShortcut) {
    return this.toCollection().toArray(thenShortcut);
  }
  toCollection() {
    return new this.db.Collection(new this.db.WhereClause(this));
  }
  orderBy(index) {
    return new this.db.Collection(new this.db.WhereClause(this, isArray(index) ? `[${index.join("+")}]` : index));
  }
  reverse() {
    return this.toCollection().reverse();
  }
  mapToClass(constructor) {
    this.schema.mappedClass = constructor;
    const readHook = obj => {
      if (!obj) return obj;
      const res = Object.create(constructor.prototype);
      for (var m in obj) if (hasOwn(obj, m)) try {
        res[m] = obj[m];
      } catch (_) {}
      return res;
    };
    if (this.schema.readHook) {
      this.hook.reading.unsubscribe(this.schema.readHook);
    }
    this.schema.readHook = readHook;
    this.hook("reading", readHook);
    return constructor;
  }
  defineClass() {
    function Class(content) {
      extend(this, content);
    }
    return this.mapToClass(Class);
  }
  add(obj, key) {
    const {
      auto,
      keyPath
    } = this.schema.primKey;
    let objToAdd = obj;
    if (keyPath && auto) {
      objToAdd = workaroundForUndefinedPrimKey(keyPath)(obj);
    }
    return this._trans("readwrite", trans => {
      return this.core.mutate({
        trans,
        type: "add",
        keys: key != null ? [key] : null,
        values: [objToAdd]
      });
    }).then(res => res.numFailures ? DexiePromise.reject(res.failures[0]) : res.lastResult).then(lastResult => {
      if (keyPath) {
        try {
          setByKeyPath(obj, keyPath, lastResult);
        } catch (_) {}
      }
      return lastResult;
    });
  }
  update(keyOrObject, modifications) {
    if (typeof keyOrObject === "object" && !isArray(keyOrObject)) {
      const key = getByKeyPath(keyOrObject, this.schema.primKey.keyPath);
      if (key === void 0) return rejection(new exceptions.InvalidArgument("Given object does not contain its primary key"));
      try {
        if (typeof modifications !== "function") {
          keys(modifications).forEach(keyPath => {
            setByKeyPath(keyOrObject, keyPath, modifications[keyPath]);
          });
        } else {
          modifications(keyOrObject, {
            value: keyOrObject,
            primKey: key
          });
        }
      } catch (_a) {}
      return this.where(":id").equals(key).modify(modifications);
    } else {
      return this.where(":id").equals(keyOrObject).modify(modifications);
    }
  }
  put(obj, key) {
    const {
      auto,
      keyPath
    } = this.schema.primKey;
    let objToAdd = obj;
    if (keyPath && auto) {
      objToAdd = workaroundForUndefinedPrimKey(keyPath)(obj);
    }
    return this._trans("readwrite", trans => this.core.mutate({
      trans,
      type: "put",
      values: [objToAdd],
      keys: key != null ? [key] : null
    })).then(res => res.numFailures ? DexiePromise.reject(res.failures[0]) : res.lastResult).then(lastResult => {
      if (keyPath) {
        try {
          setByKeyPath(obj, keyPath, lastResult);
        } catch (_) {}
      }
      return lastResult;
    });
  }
  delete(key) {
    return this._trans("readwrite", trans => this.core.mutate({
      trans,
      type: "delete",
      keys: [key]
    })).then(res => res.numFailures ? DexiePromise.reject(res.failures[0]) : void 0);
  }
  clear() {
    return this._trans("readwrite", trans => this.core.mutate({
      trans,
      type: "deleteRange",
      range: AnyRange
    })).then(res => res.numFailures ? DexiePromise.reject(res.failures[0]) : void 0);
  }
  bulkGet(keys2) {
    return this._trans("readonly", trans => {
      return this.core.getMany({
        keys: keys2,
        trans
      }).then(result => result.map(res => this.hook.reading.fire(res)));
    });
  }
  bulkAdd(objects, keysOrOptions, options) {
    const keys2 = Array.isArray(keysOrOptions) ? keysOrOptions : void 0;
    options = options || (keys2 ? void 0 : keysOrOptions);
    const wantResults = options ? options.allKeys : void 0;
    return this._trans("readwrite", trans => {
      const {
        auto,
        keyPath
      } = this.schema.primKey;
      if (keyPath && keys2) throw new exceptions.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
      if (keys2 && keys2.length !== objects.length) throw new exceptions.InvalidArgument("Arguments objects and keys must have the same length");
      const numObjects = objects.length;
      let objectsToAdd = keyPath && auto ? objects.map(workaroundForUndefinedPrimKey(keyPath)) : objects;
      return this.core.mutate({
        trans,
        type: "add",
        keys: keys2,
        values: objectsToAdd,
        wantResults
      }).then(({
        numFailures,
        results,
        lastResult,
        failures
      }) => {
        const result = wantResults ? results : lastResult;
        if (numFailures === 0) return result;
        throw new BulkError(`${this.name}.bulkAdd(): ${numFailures} of ${numObjects} operations failed`, failures);
      });
    });
  }
  bulkPut(objects, keysOrOptions, options) {
    const keys2 = Array.isArray(keysOrOptions) ? keysOrOptions : void 0;
    options = options || (keys2 ? void 0 : keysOrOptions);
    const wantResults = options ? options.allKeys : void 0;
    return this._trans("readwrite", trans => {
      const {
        auto,
        keyPath
      } = this.schema.primKey;
      if (keyPath && keys2) throw new exceptions.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
      if (keys2 && keys2.length !== objects.length) throw new exceptions.InvalidArgument("Arguments objects and keys must have the same length");
      const numObjects = objects.length;
      let objectsToPut = keyPath && auto ? objects.map(workaroundForUndefinedPrimKey(keyPath)) : objects;
      return this.core.mutate({
        trans,
        type: "put",
        keys: keys2,
        values: objectsToPut,
        wantResults
      }).then(({
        numFailures,
        results,
        lastResult,
        failures
      }) => {
        const result = wantResults ? results : lastResult;
        if (numFailures === 0) return result;
        throw new BulkError(`${this.name}.bulkPut(): ${numFailures} of ${numObjects} operations failed`, failures);
      });
    });
  }
  bulkDelete(keys2) {
    const numKeys = keys2.length;
    return this._trans("readwrite", trans => {
      return this.core.mutate({
        trans,
        type: "delete",
        keys: keys2
      });
    }).then(({
      numFailures,
      lastResult,
      failures
    }) => {
      if (numFailures === 0) return lastResult;
      throw new BulkError(`${this.name}.bulkDelete(): ${numFailures} of ${numKeys} operations failed`, failures);
    });
  }
};
function Events(ctx) {
  var evs = {};
  var rv = function (eventName, subscriber) {
    if (subscriber) {
      var i2 = arguments.length,
        args = new Array(i2 - 1);
      while (--i2) args[i2 - 1] = arguments[i2];
      evs[eventName].subscribe.apply(null, args);
      return ctx;
    } else if (typeof eventName === "string") {
      return evs[eventName];
    }
  };
  rv.addEventType = add;
  for (var i = 1, l = arguments.length; i < l; ++i) {
    add(arguments[i]);
  }
  return rv;
  function add(eventName, chainFunction, defaultFunction) {
    if (typeof eventName === "object") return addConfiguredEvents(eventName);
    if (!chainFunction) chainFunction = reverseStoppableEventChain;
    if (!defaultFunction) defaultFunction = nop;
    var context = {
      subscribers: [],
      fire: defaultFunction,
      subscribe: function (cb) {
        if (context.subscribers.indexOf(cb) === -1) {
          context.subscribers.push(cb);
          context.fire = chainFunction(context.fire, cb);
        }
      },
      unsubscribe: function (cb) {
        context.subscribers = context.subscribers.filter(function (fn) {
          return fn !== cb;
        });
        context.fire = context.subscribers.reduce(chainFunction, defaultFunction);
      }
    };
    evs[eventName] = rv[eventName] = context;
    return context;
  }
  function addConfiguredEvents(cfg) {
    keys(cfg).forEach(function (eventName) {
      var args = cfg[eventName];
      if (isArray(args)) {
        add(eventName, cfg[eventName][0], cfg[eventName][1]);
      } else if (args === "asap") {
        var context = add(eventName, mirror, function fire() {
          var i2 = arguments.length,
            args2 = new Array(i2);
          while (i2--) args2[i2] = arguments[i2];
          context.subscribers.forEach(function (fn) {
            asap$1(function fireEvent() {
              fn.apply(null, args2);
            });
          });
        });
      } else throw new exceptions.InvalidArgument("Invalid event config");
    });
  }
}
function makeClassConstructor(prototype, constructor) {
  derive(constructor).from({
    prototype
  });
  return constructor;
}
function createTableConstructor(db) {
  return makeClassConstructor(Table.prototype, function Table2(name, tableSchema, trans) {
    this.db = db;
    this._tx = trans;
    this.name = name;
    this.schema = tableSchema;
    this.hook = db._allTables[name] ? db._allTables[name].hook : Events(null, {
      "creating": [hookCreatingChain, nop],
      "reading": [pureFunctionChain, mirror],
      "updating": [hookUpdatingChain, nop],
      "deleting": [hookDeletingChain, nop]
    });
  });
}
function isPlainKeyRange(ctx, ignoreLimitFilter) {
  return !(ctx.filter || ctx.algorithm || ctx.or) && (ignoreLimitFilter ? ctx.justLimit : !ctx.replayFilter);
}
function addFilter(ctx, fn) {
  ctx.filter = combine(ctx.filter, fn);
}
function addReplayFilter(ctx, factory, isLimitFilter) {
  var curr = ctx.replayFilter;
  ctx.replayFilter = curr ? () => combine(curr(), factory()) : factory;
  ctx.justLimit = isLimitFilter && !curr;
}
function addMatchFilter(ctx, fn) {
  ctx.isMatch = combine(ctx.isMatch, fn);
}
function getIndexOrStore(ctx, coreSchema) {
  if (ctx.isPrimKey) return coreSchema.primaryKey;
  const index = coreSchema.getIndexByKeyPath(ctx.index);
  if (!index) throw new exceptions.Schema("KeyPath " + ctx.index + " on object store " + coreSchema.name + " is not indexed");
  return index;
}
function openCursor(ctx, coreTable, trans) {
  const index = getIndexOrStore(ctx, coreTable.schema);
  return coreTable.openCursor({
    trans,
    values: !ctx.keysOnly,
    reverse: ctx.dir === "prev",
    unique: !!ctx.unique,
    query: {
      index,
      range: ctx.range
    }
  });
}
function iter(ctx, fn, coreTrans, coreTable) {
  const filter = ctx.replayFilter ? combine(ctx.filter, ctx.replayFilter()) : ctx.filter;
  if (!ctx.or) {
    return iterate(openCursor(ctx, coreTable, coreTrans), combine(ctx.algorithm, filter), fn, !ctx.keysOnly && ctx.valueMapper);
  } else {
    const set = {};
    const union = (item, cursor, advance) => {
      if (!filter || filter(cursor, advance, result => cursor.stop(result), err => cursor.fail(err))) {
        var primaryKey = cursor.primaryKey;
        var key = "" + primaryKey;
        if (key === "[object ArrayBuffer]") key = "" + new Uint8Array(primaryKey);
        if (!hasOwn(set, key)) {
          set[key] = true;
          fn(item, cursor, advance);
        }
      }
    };
    return Promise.all([ctx.or._iterate(union, coreTrans), iterate(openCursor(ctx, coreTable, coreTrans), ctx.algorithm, union, !ctx.keysOnly && ctx.valueMapper)]);
  }
}
function iterate(cursorPromise, filter, fn, valueMapper) {
  var mappedFn = valueMapper ? (x, c, a) => fn(valueMapper(x), c, a) : fn;
  var wrappedFn = wrap(mappedFn);
  return cursorPromise.then(cursor => {
    if (cursor) {
      return cursor.start(() => {
        var c = () => cursor.continue();
        if (!filter || filter(cursor, advancer => c = advancer, val => {
          cursor.stop(val);
          c = nop;
        }, e => {
          cursor.fail(e);
          c = nop;
        })) wrappedFn(cursor.value, cursor, advancer => c = advancer);
        c();
      });
    }
  });
}
function cmp(a, b) {
  try {
    const ta = type(a);
    const tb = type(b);
    if (ta !== tb) {
      if (ta === "Array") return 1;
      if (tb === "Array") return -1;
      if (ta === "binary") return 1;
      if (tb === "binary") return -1;
      if (ta === "string") return 1;
      if (tb === "string") return -1;
      if (ta === "Date") return 1;
      if (tb !== "Date") return NaN;
      return -1;
    }
    switch (ta) {
      case "number":
      case "Date":
      case "string":
        return a > b ? 1 : a < b ? -1 : 0;
      case "binary":
        {
          return compareUint8Arrays(getUint8Array(a), getUint8Array(b));
        }
      case "Array":
        return compareArrays(a, b);
    }
  } catch (_a) {}
  return NaN;
}
function compareArrays(a, b) {
  const al = a.length;
  const bl = b.length;
  const l = al < bl ? al : bl;
  for (let i = 0; i < l; ++i) {
    const res = cmp(a[i], b[i]);
    if (res !== 0) return res;
  }
  return al === bl ? 0 : al < bl ? -1 : 1;
}
function compareUint8Arrays(a, b) {
  const al = a.length;
  const bl = b.length;
  const l = al < bl ? al : bl;
  for (let i = 0; i < l; ++i) {
    if (a[i] !== b[i]) return a[i] < b[i] ? -1 : 1;
  }
  return al === bl ? 0 : al < bl ? -1 : 1;
}
function type(x) {
  const t = typeof x;
  if (t !== "object") return t;
  if (ArrayBuffer.isView(x)) return "binary";
  const tsTag = toStringTag(x);
  return tsTag === "ArrayBuffer" ? "binary" : tsTag;
}
function getUint8Array(a) {
  if (a instanceof Uint8Array) return a;
  if (ArrayBuffer.isView(a)) return new Uint8Array(a.buffer, a.byteOffset, a.byteLength);
  return new Uint8Array(a);
}
var Collection = class {
  _read(fn, cb) {
    var ctx = this._ctx;
    return ctx.error ? ctx.table._trans(null, rejection.bind(null, ctx.error)) : ctx.table._trans("readonly", fn).then(cb);
  }
  _write(fn) {
    var ctx = this._ctx;
    return ctx.error ? ctx.table._trans(null, rejection.bind(null, ctx.error)) : ctx.table._trans("readwrite", fn, "locked");
  }
  _addAlgorithm(fn) {
    var ctx = this._ctx;
    ctx.algorithm = combine(ctx.algorithm, fn);
  }
  _iterate(fn, coreTrans) {
    return iter(this._ctx, fn, coreTrans, this._ctx.table.core);
  }
  clone(props2) {
    var rv = Object.create(this.constructor.prototype),
      ctx = Object.create(this._ctx);
    if (props2) extend(ctx, props2);
    rv._ctx = ctx;
    return rv;
  }
  raw() {
    this._ctx.valueMapper = null;
    return this;
  }
  each(fn) {
    var ctx = this._ctx;
    return this._read(trans => iter(ctx, fn, trans, ctx.table.core));
  }
  count(cb) {
    return this._read(trans => {
      const ctx = this._ctx;
      const coreTable = ctx.table.core;
      if (isPlainKeyRange(ctx, true)) {
        return coreTable.count({
          trans,
          query: {
            index: getIndexOrStore(ctx, coreTable.schema),
            range: ctx.range
          }
        }).then(count2 => Math.min(count2, ctx.limit));
      } else {
        var count = 0;
        return iter(ctx, () => {
          ++count;
          return false;
        }, trans, coreTable).then(() => count);
      }
    }).then(cb);
  }
  sortBy(keyPath, cb) {
    const parts = keyPath.split(".").reverse(),
      lastPart = parts[0],
      lastIndex = parts.length - 1;
    function getval(obj, i) {
      if (i) return getval(obj[parts[i]], i - 1);
      return obj[lastPart];
    }
    var order = this._ctx.dir === "next" ? 1 : -1;
    function sorter(a, b) {
      var aVal = getval(a, lastIndex),
        bVal = getval(b, lastIndex);
      return aVal < bVal ? -order : aVal > bVal ? order : 0;
    }
    return this.toArray(function (a) {
      return a.sort(sorter);
    }).then(cb);
  }
  toArray(cb) {
    return this._read(trans => {
      var ctx = this._ctx;
      if (ctx.dir === "next" && isPlainKeyRange(ctx, true) && ctx.limit > 0) {
        const {
          valueMapper
        } = ctx;
        const index = getIndexOrStore(ctx, ctx.table.core.schema);
        return ctx.table.core.query({
          trans,
          limit: ctx.limit,
          values: true,
          query: {
            index,
            range: ctx.range
          }
        }).then(({
          result
        }) => valueMapper ? result.map(valueMapper) : result);
      } else {
        const a = [];
        return iter(ctx, item => a.push(item), trans, ctx.table.core).then(() => a);
      }
    }, cb);
  }
  offset(offset) {
    var ctx = this._ctx;
    if (offset <= 0) return this;
    ctx.offset += offset;
    if (isPlainKeyRange(ctx)) {
      addReplayFilter(ctx, () => {
        var offsetLeft = offset;
        return (cursor, advance) => {
          if (offsetLeft === 0) return true;
          if (offsetLeft === 1) {
            --offsetLeft;
            return false;
          }
          advance(() => {
            cursor.advance(offsetLeft);
            offsetLeft = 0;
          });
          return false;
        };
      });
    } else {
      addReplayFilter(ctx, () => {
        var offsetLeft = offset;
        return () => --offsetLeft < 0;
      });
    }
    return this;
  }
  limit(numRows) {
    this._ctx.limit = Math.min(this._ctx.limit, numRows);
    addReplayFilter(this._ctx, () => {
      var rowsLeft = numRows;
      return function (cursor, advance, resolve) {
        if (--rowsLeft <= 0) advance(resolve);
        return rowsLeft >= 0;
      };
    }, true);
    return this;
  }
  until(filterFunction, bIncludeStopEntry) {
    addFilter(this._ctx, function (cursor, advance, resolve) {
      if (filterFunction(cursor.value)) {
        advance(resolve);
        return bIncludeStopEntry;
      } else {
        return true;
      }
    });
    return this;
  }
  first(cb) {
    return this.limit(1).toArray(function (a) {
      return a[0];
    }).then(cb);
  }
  last(cb) {
    return this.reverse().first(cb);
  }
  filter(filterFunction) {
    addFilter(this._ctx, function (cursor) {
      return filterFunction(cursor.value);
    });
    addMatchFilter(this._ctx, filterFunction);
    return this;
  }
  and(filter) {
    return this.filter(filter);
  }
  or(indexName) {
    return new this.db.WhereClause(this._ctx.table, indexName, this);
  }
  reverse() {
    this._ctx.dir = this._ctx.dir === "prev" ? "next" : "prev";
    if (this._ondirectionchange) this._ondirectionchange(this._ctx.dir);
    return this;
  }
  desc() {
    return this.reverse();
  }
  eachKey(cb) {
    var ctx = this._ctx;
    ctx.keysOnly = !ctx.isMatch;
    return this.each(function (val, cursor) {
      cb(cursor.key, cursor);
    });
  }
  eachUniqueKey(cb) {
    this._ctx.unique = "unique";
    return this.eachKey(cb);
  }
  eachPrimaryKey(cb) {
    var ctx = this._ctx;
    ctx.keysOnly = !ctx.isMatch;
    return this.each(function (val, cursor) {
      cb(cursor.primaryKey, cursor);
    });
  }
  keys(cb) {
    var ctx = this._ctx;
    ctx.keysOnly = !ctx.isMatch;
    var a = [];
    return this.each(function (item, cursor) {
      a.push(cursor.key);
    }).then(function () {
      return a;
    }).then(cb);
  }
  primaryKeys(cb) {
    var ctx = this._ctx;
    if (ctx.dir === "next" && isPlainKeyRange(ctx, true) && ctx.limit > 0) {
      return this._read(trans => {
        var index = getIndexOrStore(ctx, ctx.table.core.schema);
        return ctx.table.core.query({
          trans,
          values: false,
          limit: ctx.limit,
          query: {
            index,
            range: ctx.range
          }
        });
      }).then(({
        result
      }) => result).then(cb);
    }
    ctx.keysOnly = !ctx.isMatch;
    var a = [];
    return this.each(function (item, cursor) {
      a.push(cursor.primaryKey);
    }).then(function () {
      return a;
    }).then(cb);
  }
  uniqueKeys(cb) {
    this._ctx.unique = "unique";
    return this.keys(cb);
  }
  firstKey(cb) {
    return this.limit(1).keys(function (a) {
      return a[0];
    }).then(cb);
  }
  lastKey(cb) {
    return this.reverse().firstKey(cb);
  }
  distinct() {
    var ctx = this._ctx,
      idx = ctx.index && ctx.table.schema.idxByName[ctx.index];
    if (!idx || !idx.multi) return this;
    var set = {};
    addFilter(this._ctx, function (cursor) {
      var strKey = cursor.primaryKey.toString();
      var found = hasOwn(set, strKey);
      set[strKey] = true;
      return !found;
    });
    return this;
  }
  modify(changes) {
    var ctx = this._ctx;
    return this._write(trans => {
      var modifyer;
      if (typeof changes === "function") {
        modifyer = changes;
      } else {
        var keyPaths = keys(changes);
        var numKeys = keyPaths.length;
        modifyer = function (item) {
          var anythingModified = false;
          for (var i = 0; i < numKeys; ++i) {
            var keyPath = keyPaths[i],
              val = changes[keyPath];
            if (getByKeyPath(item, keyPath) !== val) {
              setByKeyPath(item, keyPath, val);
              anythingModified = true;
            }
          }
          return anythingModified;
        };
      }
      const coreTable = ctx.table.core;
      const {
        outbound,
        extractKey
      } = coreTable.schema.primaryKey;
      const limit = this.db._options.modifyChunkSize || 200;
      const totalFailures = [];
      let successCount = 0;
      const failedKeys = [];
      const applyMutateResult = (expectedCount, res) => {
        const {
          failures,
          numFailures
        } = res;
        successCount += expectedCount - numFailures;
        for (let pos of keys(failures)) {
          totalFailures.push(failures[pos]);
        }
      };
      return this.clone().primaryKeys().then(keys2 => {
        const nextChunk = offset => {
          const count = Math.min(limit, keys2.length - offset);
          return coreTable.getMany({
            trans,
            keys: keys2.slice(offset, offset + count),
            cache: "immutable"
          }).then(values => {
            const addValues = [];
            const putValues = [];
            const putKeys = outbound ? [] : null;
            const deleteKeys = [];
            for (let i = 0; i < count; ++i) {
              const origValue = values[i];
              const ctx2 = {
                value: deepClone(origValue),
                primKey: keys2[offset + i]
              };
              if (modifyer.call(ctx2, ctx2.value, ctx2) !== false) {
                if (ctx2.value == null) {
                  deleteKeys.push(keys2[offset + i]);
                } else if (!outbound && cmp(extractKey(origValue), extractKey(ctx2.value)) !== 0) {
                  deleteKeys.push(keys2[offset + i]);
                  addValues.push(ctx2.value);
                } else {
                  putValues.push(ctx2.value);
                  if (outbound) putKeys.push(keys2[offset + i]);
                }
              }
            }
            const criteria = isPlainKeyRange(ctx) && ctx.limit === Infinity && (typeof changes !== "function" || changes === deleteCallback) && {
              index: ctx.index,
              range: ctx.range
            };
            return Promise.resolve(addValues.length > 0 && coreTable.mutate({
              trans,
              type: "add",
              values: addValues
            }).then(res => {
              for (let pos in res.failures) {
                deleteKeys.splice(parseInt(pos), 1);
              }
              applyMutateResult(addValues.length, res);
            })).then(() => (putValues.length > 0 || criteria && typeof changes === "object") && coreTable.mutate({
              trans,
              type: "put",
              keys: putKeys,
              values: putValues,
              criteria,
              changeSpec: typeof changes !== "function" && changes
            }).then(res => applyMutateResult(putValues.length, res))).then(() => (deleteKeys.length > 0 || criteria && changes === deleteCallback) && coreTable.mutate({
              trans,
              type: "delete",
              keys: deleteKeys,
              criteria
            }).then(res => applyMutateResult(deleteKeys.length, res))).then(() => {
              return keys2.length > offset + count && nextChunk(offset + limit);
            });
          });
        };
        return nextChunk(0).then(() => {
          if (totalFailures.length > 0) throw new ModifyError("Error modifying one or more objects", totalFailures, successCount, failedKeys);
          return keys2.length;
        });
      });
    });
  }
  delete() {
    var ctx = this._ctx,
      range = ctx.range;
    if (isPlainKeyRange(ctx) && (ctx.isPrimKey && !hangsOnDeleteLargeKeyRange || range.type === 3)) {
      return this._write(trans => {
        const {
          primaryKey
        } = ctx.table.core.schema;
        const coreRange = range;
        return ctx.table.core.count({
          trans,
          query: {
            index: primaryKey,
            range: coreRange
          }
        }).then(count => {
          return ctx.table.core.mutate({
            trans,
            type: "deleteRange",
            range: coreRange
          }).then(({
            failures,
            lastResult,
            results,
            numFailures
          }) => {
            if (numFailures) throw new ModifyError("Could not delete some values", Object.keys(failures).map(pos => failures[pos]), count - numFailures);
            return count - numFailures;
          });
        });
      });
    }
    return this.modify(deleteCallback);
  }
};
var deleteCallback = (value, ctx) => ctx.value = null;
function createCollectionConstructor(db) {
  return makeClassConstructor(Collection.prototype, function Collection2(whereClause, keyRangeGenerator) {
    this.db = db;
    let keyRange = AnyRange,
      error = null;
    if (keyRangeGenerator) try {
      keyRange = keyRangeGenerator();
    } catch (ex) {
      error = ex;
    }
    const whereCtx = whereClause._ctx;
    const table = whereCtx.table;
    const readingHook = table.hook.reading.fire;
    this._ctx = {
      table,
      index: whereCtx.index,
      isPrimKey: !whereCtx.index || table.schema.primKey.keyPath && whereCtx.index === table.schema.primKey.name,
      range: keyRange,
      keysOnly: false,
      dir: "next",
      unique: "",
      algorithm: null,
      filter: null,
      replayFilter: null,
      justLimit: true,
      isMatch: null,
      offset: 0,
      limit: Infinity,
      error,
      or: whereCtx.or,
      valueMapper: readingHook !== mirror ? readingHook : null
    };
  });
}
function simpleCompare(a, b) {
  return a < b ? -1 : a === b ? 0 : 1;
}
function simpleCompareReverse(a, b) {
  return a > b ? -1 : a === b ? 0 : 1;
}
function fail(collectionOrWhereClause, err, T) {
  var collection = collectionOrWhereClause instanceof WhereClause ? new collectionOrWhereClause.Collection(collectionOrWhereClause) : collectionOrWhereClause;
  collection._ctx.error = T ? new T(err) : new TypeError(err);
  return collection;
}
function emptyCollection(whereClause) {
  return new whereClause.Collection(whereClause, () => rangeEqual("")).limit(0);
}
function upperFactory(dir) {
  return dir === "next" ? s => s.toUpperCase() : s => s.toLowerCase();
}
function lowerFactory(dir) {
  return dir === "next" ? s => s.toLowerCase() : s => s.toUpperCase();
}
function nextCasing(key, lowerKey, upperNeedle, lowerNeedle, cmp2, dir) {
  var length = Math.min(key.length, lowerNeedle.length);
  var llp = -1;
  for (var i = 0; i < length; ++i) {
    var lwrKeyChar = lowerKey[i];
    if (lwrKeyChar !== lowerNeedle[i]) {
      if (cmp2(key[i], upperNeedle[i]) < 0) return key.substr(0, i) + upperNeedle[i] + upperNeedle.substr(i + 1);
      if (cmp2(key[i], lowerNeedle[i]) < 0) return key.substr(0, i) + lowerNeedle[i] + upperNeedle.substr(i + 1);
      if (llp >= 0) return key.substr(0, llp) + lowerKey[llp] + upperNeedle.substr(llp + 1);
      return null;
    }
    if (cmp2(key[i], lwrKeyChar) < 0) llp = i;
  }
  if (length < lowerNeedle.length && dir === "next") return key + upperNeedle.substr(key.length);
  if (length < key.length && dir === "prev") return key.substr(0, upperNeedle.length);
  return llp < 0 ? null : key.substr(0, llp) + lowerNeedle[llp] + upperNeedle.substr(llp + 1);
}
function addIgnoreCaseAlgorithm(whereClause, match, needles, suffix) {
  var upper,
    lower,
    compare,
    upperNeedles,
    lowerNeedles,
    direction,
    nextKeySuffix,
    needlesLen = needles.length;
  if (!needles.every(s => typeof s === "string")) {
    return fail(whereClause, STRING_EXPECTED);
  }
  function initDirection(dir) {
    upper = upperFactory(dir);
    lower = lowerFactory(dir);
    compare = dir === "next" ? simpleCompare : simpleCompareReverse;
    var needleBounds = needles.map(function (needle) {
      return {
        lower: lower(needle),
        upper: upper(needle)
      };
    }).sort(function (a, b) {
      return compare(a.lower, b.lower);
    });
    upperNeedles = needleBounds.map(function (nb) {
      return nb.upper;
    });
    lowerNeedles = needleBounds.map(function (nb) {
      return nb.lower;
    });
    direction = dir;
    nextKeySuffix = dir === "next" ? "" : suffix;
  }
  initDirection("next");
  var c = new whereClause.Collection(whereClause, () => createRange(upperNeedles[0], lowerNeedles[needlesLen - 1] + suffix));
  c._ondirectionchange = function (direction2) {
    initDirection(direction2);
  };
  var firstPossibleNeedle = 0;
  c._addAlgorithm(function (cursor, advance, resolve) {
    var key = cursor.key;
    if (typeof key !== "string") return false;
    var lowerKey = lower(key);
    if (match(lowerKey, lowerNeedles, firstPossibleNeedle)) {
      return true;
    } else {
      var lowestPossibleCasing = null;
      for (var i = firstPossibleNeedle; i < needlesLen; ++i) {
        var casing = nextCasing(key, lowerKey, upperNeedles[i], lowerNeedles[i], compare, direction);
        if (casing === null && lowestPossibleCasing === null) firstPossibleNeedle = i + 1;else if (lowestPossibleCasing === null || compare(lowestPossibleCasing, casing) > 0) {
          lowestPossibleCasing = casing;
        }
      }
      if (lowestPossibleCasing !== null) {
        advance(function () {
          cursor.continue(lowestPossibleCasing + nextKeySuffix);
        });
      } else {
        advance(resolve);
      }
      return false;
    }
  });
  return c;
}
function createRange(lower, upper, lowerOpen, upperOpen) {
  return {
    type: 2,
    lower,
    upper,
    lowerOpen,
    upperOpen
  };
}
function rangeEqual(value) {
  return {
    type: 1,
    lower: value,
    upper: value
  };
}
var WhereClause = class {
  get Collection() {
    return this._ctx.table.db.Collection;
  }
  between(lower, upper, includeLower, includeUpper) {
    includeLower = includeLower !== false;
    includeUpper = includeUpper === true;
    try {
      if (this._cmp(lower, upper) > 0 || this._cmp(lower, upper) === 0 && (includeLower || includeUpper) && !(includeLower && includeUpper)) return emptyCollection(this);
      return new this.Collection(this, () => createRange(lower, upper, !includeLower, !includeUpper));
    } catch (e) {
      return fail(this, INVALID_KEY_ARGUMENT);
    }
  }
  equals(value) {
    if (value == null) return fail(this, INVALID_KEY_ARGUMENT);
    return new this.Collection(this, () => rangeEqual(value));
  }
  above(value) {
    if (value == null) return fail(this, INVALID_KEY_ARGUMENT);
    return new this.Collection(this, () => createRange(value, void 0, true));
  }
  aboveOrEqual(value) {
    if (value == null) return fail(this, INVALID_KEY_ARGUMENT);
    return new this.Collection(this, () => createRange(value, void 0, false));
  }
  below(value) {
    if (value == null) return fail(this, INVALID_KEY_ARGUMENT);
    return new this.Collection(this, () => createRange(void 0, value, false, true));
  }
  belowOrEqual(value) {
    if (value == null) return fail(this, INVALID_KEY_ARGUMENT);
    return new this.Collection(this, () => createRange(void 0, value));
  }
  startsWith(str) {
    if (typeof str !== "string") return fail(this, STRING_EXPECTED);
    return this.between(str, str + maxString, true, true);
  }
  startsWithIgnoreCase(str) {
    if (str === "") return this.startsWith(str);
    return addIgnoreCaseAlgorithm(this, (x, a) => x.indexOf(a[0]) === 0, [str], maxString);
  }
  equalsIgnoreCase(str) {
    return addIgnoreCaseAlgorithm(this, (x, a) => x === a[0], [str], "");
  }
  anyOfIgnoreCase() {
    var set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
    if (set.length === 0) return emptyCollection(this);
    return addIgnoreCaseAlgorithm(this, (x, a) => a.indexOf(x) !== -1, set, "");
  }
  startsWithAnyOfIgnoreCase() {
    var set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
    if (set.length === 0) return emptyCollection(this);
    return addIgnoreCaseAlgorithm(this, (x, a) => a.some(n => x.indexOf(n) === 0), set, maxString);
  }
  anyOf() {
    const set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
    let compare = this._cmp;
    try {
      set.sort(compare);
    } catch (e) {
      return fail(this, INVALID_KEY_ARGUMENT);
    }
    if (set.length === 0) return emptyCollection(this);
    const c = new this.Collection(this, () => createRange(set[0], set[set.length - 1]));
    c._ondirectionchange = direction => {
      compare = direction === "next" ? this._ascending : this._descending;
      set.sort(compare);
    };
    let i = 0;
    c._addAlgorithm((cursor, advance, resolve) => {
      const key = cursor.key;
      while (compare(key, set[i]) > 0) {
        ++i;
        if (i === set.length) {
          advance(resolve);
          return false;
        }
      }
      if (compare(key, set[i]) === 0) {
        return true;
      } else {
        advance(() => {
          cursor.continue(set[i]);
        });
        return false;
      }
    });
    return c;
  }
  notEqual(value) {
    return this.inAnyRange([[minKey, value], [value, this.db._maxKey]], {
      includeLowers: false,
      includeUppers: false
    });
  }
  noneOf() {
    const set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
    if (set.length === 0) return new this.Collection(this);
    try {
      set.sort(this._ascending);
    } catch (e) {
      return fail(this, INVALID_KEY_ARGUMENT);
    }
    const ranges = set.reduce((res, val) => res ? res.concat([[res[res.length - 1][1], val]]) : [[minKey, val]], null);
    ranges.push([set[set.length - 1], this.db._maxKey]);
    return this.inAnyRange(ranges, {
      includeLowers: false,
      includeUppers: false
    });
  }
  inAnyRange(ranges, options) {
    const cmp2 = this._cmp,
      ascending = this._ascending,
      descending = this._descending,
      min = this._min,
      max = this._max;
    if (ranges.length === 0) return emptyCollection(this);
    if (!ranges.every(range => range[0] !== void 0 && range[1] !== void 0 && ascending(range[0], range[1]) <= 0)) {
      return fail(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", exceptions.InvalidArgument);
    }
    const includeLowers = !options || options.includeLowers !== false;
    const includeUppers = options && options.includeUppers === true;
    function addRange2(ranges2, newRange) {
      let i = 0,
        l = ranges2.length;
      for (; i < l; ++i) {
        const range = ranges2[i];
        if (cmp2(newRange[0], range[1]) < 0 && cmp2(newRange[1], range[0]) > 0) {
          range[0] = min(range[0], newRange[0]);
          range[1] = max(range[1], newRange[1]);
          break;
        }
      }
      if (i === l) ranges2.push(newRange);
      return ranges2;
    }
    let sortDirection = ascending;
    function rangeSorter(a, b) {
      return sortDirection(a[0], b[0]);
    }
    let set;
    try {
      set = ranges.reduce(addRange2, []);
      set.sort(rangeSorter);
    } catch (ex) {
      return fail(this, INVALID_KEY_ARGUMENT);
    }
    let rangePos = 0;
    const keyIsBeyondCurrentEntry = includeUppers ? key => ascending(key, set[rangePos][1]) > 0 : key => ascending(key, set[rangePos][1]) >= 0;
    const keyIsBeforeCurrentEntry = includeLowers ? key => descending(key, set[rangePos][0]) > 0 : key => descending(key, set[rangePos][0]) >= 0;
    function keyWithinCurrentRange(key) {
      return !keyIsBeyondCurrentEntry(key) && !keyIsBeforeCurrentEntry(key);
    }
    let checkKey = keyIsBeyondCurrentEntry;
    const c = new this.Collection(this, () => createRange(set[0][0], set[set.length - 1][1], !includeLowers, !includeUppers));
    c._ondirectionchange = direction => {
      if (direction === "next") {
        checkKey = keyIsBeyondCurrentEntry;
        sortDirection = ascending;
      } else {
        checkKey = keyIsBeforeCurrentEntry;
        sortDirection = descending;
      }
      set.sort(rangeSorter);
    };
    c._addAlgorithm((cursor, advance, resolve) => {
      var key = cursor.key;
      while (checkKey(key)) {
        ++rangePos;
        if (rangePos === set.length) {
          advance(resolve);
          return false;
        }
      }
      if (keyWithinCurrentRange(key)) {
        return true;
      } else if (this._cmp(key, set[rangePos][1]) === 0 || this._cmp(key, set[rangePos][0]) === 0) {
        return false;
      } else {
        advance(() => {
          if (sortDirection === ascending) cursor.continue(set[rangePos][0]);else cursor.continue(set[rangePos][1]);
        });
        return false;
      }
    });
    return c;
  }
  startsWithAnyOf() {
    const set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
    if (!set.every(s => typeof s === "string")) {
      return fail(this, "startsWithAnyOf() only works with strings");
    }
    if (set.length === 0) return emptyCollection(this);
    return this.inAnyRange(set.map(str => [str, str + maxString]));
  }
};
function createWhereClauseConstructor(db) {
  return makeClassConstructor(WhereClause.prototype, function WhereClause2(table, index, orCollection) {
    this.db = db;
    this._ctx = {
      table,
      index: index === ":id" ? null : index,
      or: orCollection
    };
    const indexedDB2 = db._deps.indexedDB;
    if (!indexedDB2) throw new exceptions.MissingAPI();
    this._cmp = this._ascending = indexedDB2.cmp.bind(indexedDB2);
    this._descending = (a, b) => indexedDB2.cmp(b, a);
    this._max = (a, b) => indexedDB2.cmp(a, b) > 0 ? a : b;
    this._min = (a, b) => indexedDB2.cmp(a, b) < 0 ? a : b;
    this._IDBKeyRange = db._deps.IDBKeyRange;
  });
}
function eventRejectHandler(reject) {
  return wrap(function (event) {
    preventDefault(event);
    reject(event.target.error);
    return false;
  });
}
function preventDefault(event) {
  if (event.stopPropagation) event.stopPropagation();
  if (event.preventDefault) event.preventDefault();
}
var DEXIE_STORAGE_MUTATED_EVENT_NAME = "storagemutated";
var STORAGE_MUTATED_DOM_EVENT_NAME = "x-storagemutated-1";
var globalEvents = Events(null, DEXIE_STORAGE_MUTATED_EVENT_NAME);
var Transaction = class {
  _lock() {
    assert(!PSD.global);
    ++this._reculock;
    if (this._reculock === 1 && !PSD.global) PSD.lockOwnerFor = this;
    return this;
  }
  _unlock() {
    assert(!PSD.global);
    if (--this._reculock === 0) {
      if (!PSD.global) PSD.lockOwnerFor = null;
      while (this._blockedFuncs.length > 0 && !this._locked()) {
        var fnAndPSD = this._blockedFuncs.shift();
        try {
          usePSD(fnAndPSD[1], fnAndPSD[0]);
        } catch (e) {}
      }
    }
    return this;
  }
  _locked() {
    return this._reculock && PSD.lockOwnerFor !== this;
  }
  create(idbtrans) {
    if (!this.mode) return this;
    const idbdb = this.db.idbdb;
    const dbOpenError = this.db._state.dbOpenError;
    assert(!this.idbtrans);
    if (!idbtrans && !idbdb) {
      switch (dbOpenError && dbOpenError.name) {
        case "DatabaseClosedError":
          throw new exceptions.DatabaseClosed(dbOpenError);
        case "MissingAPIError":
          throw new exceptions.MissingAPI(dbOpenError.message, dbOpenError);
        default:
          throw new exceptions.OpenFailed(dbOpenError);
      }
    }
    if (!this.active) throw new exceptions.TransactionInactive();
    assert(this._completion._state === null);
    idbtrans = this.idbtrans = idbtrans || (this.db.core ? this.db.core.transaction(this.storeNames, this.mode, {
      durability: this.chromeTransactionDurability
    }) : idbdb.transaction(this.storeNames, this.mode, {
      durability: this.chromeTransactionDurability
    }));
    idbtrans.onerror = wrap(ev => {
      preventDefault(ev);
      this._reject(idbtrans.error);
    });
    idbtrans.onabort = wrap(ev => {
      preventDefault(ev);
      this.active && this._reject(new exceptions.Abort(idbtrans.error));
      this.active = false;
      this.on("abort").fire(ev);
    });
    idbtrans.oncomplete = wrap(() => {
      this.active = false;
      this._resolve();
      if ("mutatedParts" in idbtrans) {
        globalEvents.storagemutated.fire(idbtrans["mutatedParts"]);
      }
    });
    return this;
  }
  _promise(mode, fn, bWriteLock) {
    if (mode === "readwrite" && this.mode !== "readwrite") return rejection(new exceptions.ReadOnly("Transaction is readonly"));
    if (!this.active) return rejection(new exceptions.TransactionInactive());
    if (this._locked()) {
      return new DexiePromise((resolve, reject) => {
        this._blockedFuncs.push([() => {
          this._promise(mode, fn, bWriteLock).then(resolve, reject);
        }, PSD]);
      });
    } else if (bWriteLock) {
      return newScope(() => {
        var p2 = new DexiePromise((resolve, reject) => {
          this._lock();
          const rv = fn(resolve, reject, this);
          if (rv && rv.then) rv.then(resolve, reject);
        });
        p2.finally(() => this._unlock());
        p2._lib = true;
        return p2;
      });
    } else {
      var p = new DexiePromise((resolve, reject) => {
        var rv = fn(resolve, reject, this);
        if (rv && rv.then) rv.then(resolve, reject);
      });
      p._lib = true;
      return p;
    }
  }
  _root() {
    return this.parent ? this.parent._root() : this;
  }
  waitFor(promiseLike) {
    var root = this._root();
    const promise = DexiePromise.resolve(promiseLike);
    if (root._waitingFor) {
      root._waitingFor = root._waitingFor.then(() => promise);
    } else {
      root._waitingFor = promise;
      root._waitingQueue = [];
      var store = root.idbtrans.objectStore(root.storeNames[0]);
      (function spin() {
        ++root._spinCount;
        while (root._waitingQueue.length) root._waitingQueue.shift()();
        if (root._waitingFor) store.get(-Infinity).onsuccess = spin;
      })();
    }
    var currentWaitPromise = root._waitingFor;
    return new DexiePromise((resolve, reject) => {
      promise.then(res => root._waitingQueue.push(wrap(resolve.bind(null, res))), err => root._waitingQueue.push(wrap(reject.bind(null, err)))).finally(() => {
        if (root._waitingFor === currentWaitPromise) {
          root._waitingFor = null;
        }
      });
    });
  }
  abort() {
    if (this.active) {
      this.active = false;
      if (this.idbtrans) this.idbtrans.abort();
      this._reject(new exceptions.Abort());
    }
  }
  table(tableName) {
    const memoizedTables = this._memoizedTables || (this._memoizedTables = {});
    if (hasOwn(memoizedTables, tableName)) return memoizedTables[tableName];
    const tableSchema = this.schema[tableName];
    if (!tableSchema) {
      throw new exceptions.NotFound("Table " + tableName + " not part of transaction");
    }
    const transactionBoundTable = new this.db.Table(tableName, tableSchema, this);
    transactionBoundTable.core = this.db.core.table(tableName);
    memoizedTables[tableName] = transactionBoundTable;
    return transactionBoundTable;
  }
};
function createTransactionConstructor(db) {
  return makeClassConstructor(Transaction.prototype, function Transaction2(mode, storeNames, dbschema, chromeTransactionDurability, parent) {
    this.db = db;
    this.mode = mode;
    this.storeNames = storeNames;
    this.schema = dbschema;
    this.chromeTransactionDurability = chromeTransactionDurability;
    this.idbtrans = null;
    this.on = Events(this, "complete", "error", "abort");
    this.parent = parent || null;
    this.active = true;
    this._reculock = 0;
    this._blockedFuncs = [];
    this._resolve = null;
    this._reject = null;
    this._waitingFor = null;
    this._waitingQueue = null;
    this._spinCount = 0;
    this._completion = new DexiePromise((resolve, reject) => {
      this._resolve = resolve;
      this._reject = reject;
    });
    this._completion.then(() => {
      this.active = false;
      this.on.complete.fire();
    }, e => {
      var wasActive = this.active;
      this.active = false;
      this.on.error.fire(e);
      this.parent ? this.parent._reject(e) : wasActive && this.idbtrans && this.idbtrans.abort();
      return rejection(e);
    });
  });
}
function createIndexSpec(name, keyPath, unique, multi, auto, compound, isPrimKey) {
  return {
    name,
    keyPath,
    unique,
    multi,
    auto,
    compound,
    src: (unique && !isPrimKey ? "&" : "") + (multi ? "*" : "") + (auto ? "++" : "") + nameFromKeyPath(keyPath)
  };
}
function nameFromKeyPath(keyPath) {
  return typeof keyPath === "string" ? keyPath : keyPath ? "[" + [].join.call(keyPath, "+") + "]" : "";
}
function createTableSchema(name, primKey, indexes) {
  return {
    name,
    primKey,
    indexes,
    mappedClass: null,
    idxByName: arrayToObject(indexes, index => [index.name, index])
  };
}
function safariMultiStoreFix(storeNames) {
  return storeNames.length === 1 ? storeNames[0] : storeNames;
}
var getMaxKey = IdbKeyRange => {
  try {
    IdbKeyRange.only([[]]);
    getMaxKey = () => [[]];
    return [[]];
  } catch (e) {
    getMaxKey = () => maxString;
    return maxString;
  }
};
function getKeyExtractor(keyPath) {
  if (keyPath == null) {
    return () => void 0;
  } else if (typeof keyPath === "string") {
    return getSinglePathKeyExtractor(keyPath);
  } else {
    return obj => getByKeyPath(obj, keyPath);
  }
}
function getSinglePathKeyExtractor(keyPath) {
  const split = keyPath.split(".");
  if (split.length === 1) {
    return obj => obj[keyPath];
  } else {
    return obj => getByKeyPath(obj, keyPath);
  }
}
function arrayify(arrayLike) {
  return [].slice.call(arrayLike);
}
var _id_counter = 0;
function getKeyPathAlias(keyPath) {
  return keyPath == null ? ":id" : typeof keyPath === "string" ? keyPath : `[${keyPath.join("+")}]`;
}
function createDBCore(db, IdbKeyRange, tmpTrans) {
  function extractSchema(db2, trans) {
    const tables2 = arrayify(db2.objectStoreNames);
    return {
      schema: {
        name: db2.name,
        tables: tables2.map(table => trans.objectStore(table)).map(store => {
          const {
            keyPath,
            autoIncrement
          } = store;
          const compound = isArray(keyPath);
          const outbound = keyPath == null;
          const indexByKeyPath = {};
          const result = {
            name: store.name,
            primaryKey: {
              name: null,
              isPrimaryKey: true,
              outbound,
              compound,
              keyPath,
              autoIncrement,
              unique: true,
              extractKey: getKeyExtractor(keyPath)
            },
            indexes: arrayify(store.indexNames).map(indexName => store.index(indexName)).map(index => {
              const {
                name,
                unique,
                multiEntry,
                keyPath: keyPath2
              } = index;
              const compound2 = isArray(keyPath2);
              const result2 = {
                name,
                compound: compound2,
                keyPath: keyPath2,
                unique,
                multiEntry,
                extractKey: getKeyExtractor(keyPath2)
              };
              indexByKeyPath[getKeyPathAlias(keyPath2)] = result2;
              return result2;
            }),
            getIndexByKeyPath: keyPath2 => indexByKeyPath[getKeyPathAlias(keyPath2)]
          };
          indexByKeyPath[":id"] = result.primaryKey;
          if (keyPath != null) {
            indexByKeyPath[getKeyPathAlias(keyPath)] = result.primaryKey;
          }
          return result;
        })
      },
      hasGetAll: tables2.length > 0 && "getAll" in trans.objectStore(tables2[0]) && !(typeof navigator !== "undefined" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604)
    };
  }
  function makeIDBKeyRange(range) {
    if (range.type === 3) return null;
    if (range.type === 4) throw new Error("Cannot convert never type to IDBKeyRange");
    const {
      lower,
      upper,
      lowerOpen,
      upperOpen
    } = range;
    const idbRange = lower === void 0 ? upper === void 0 ? null : IdbKeyRange.upperBound(upper, !!upperOpen) : upper === void 0 ? IdbKeyRange.lowerBound(lower, !!lowerOpen) : IdbKeyRange.bound(lower, upper, !!lowerOpen, !!upperOpen);
    return idbRange;
  }
  function createDbCoreTable(tableSchema) {
    const tableName = tableSchema.name;
    function mutate({
      trans,
      type: type2,
      keys: keys2,
      values,
      range
    }) {
      return new Promise((resolve, reject) => {
        resolve = wrap(resolve);
        const store = trans.objectStore(tableName);
        const outbound = store.keyPath == null;
        const isAddOrPut = type2 === "put" || type2 === "add";
        if (!isAddOrPut && type2 !== "delete" && type2 !== "deleteRange") throw new Error("Invalid operation type: " + type2);
        const {
          length
        } = keys2 || values || {
          length: 1
        };
        if (keys2 && values && keys2.length !== values.length) {
          throw new Error("Given keys array must have same length as given values array.");
        }
        if (length === 0) return resolve({
          numFailures: 0,
          failures: {},
          results: [],
          lastResult: void 0
        });
        let req;
        const reqs = [];
        const failures = [];
        let numFailures = 0;
        const errorHandler = event => {
          ++numFailures;
          preventDefault(event);
        };
        if (type2 === "deleteRange") {
          if (range.type === 4) return resolve({
            numFailures,
            failures,
            results: [],
            lastResult: void 0
          });
          if (range.type === 3) reqs.push(req = store.clear());else reqs.push(req = store.delete(makeIDBKeyRange(range)));
        } else {
          const [args1, args2] = isAddOrPut ? outbound ? [values, keys2] : [values, null] : [keys2, null];
          if (isAddOrPut) {
            for (let i = 0; i < length; ++i) {
              reqs.push(req = args2 && args2[i] !== void 0 ? store[type2](args1[i], args2[i]) : store[type2](args1[i]));
              req.onerror = errorHandler;
            }
          } else {
            for (let i = 0; i < length; ++i) {
              reqs.push(req = store[type2](args1[i]));
              req.onerror = errorHandler;
            }
          }
        }
        const done = event => {
          const lastResult = event.target.result;
          reqs.forEach((req2, i) => req2.error != null && (failures[i] = req2.error));
          resolve({
            numFailures,
            failures,
            results: type2 === "delete" ? keys2 : reqs.map(req2 => req2.result),
            lastResult
          });
        };
        req.onerror = event => {
          errorHandler(event);
          done(event);
        };
        req.onsuccess = done;
      });
    }
    function openCursor2({
      trans,
      values,
      query: query2,
      reverse,
      unique
    }) {
      return new Promise((resolve, reject) => {
        resolve = wrap(resolve);
        const {
          index,
          range
        } = query2;
        const store = trans.objectStore(tableName);
        const source = index.isPrimaryKey ? store : store.index(index.name);
        const direction = reverse ? unique ? "prevunique" : "prev" : unique ? "nextunique" : "next";
        const req = values || !("openKeyCursor" in source) ? source.openCursor(makeIDBKeyRange(range), direction) : source.openKeyCursor(makeIDBKeyRange(range), direction);
        req.onerror = eventRejectHandler(reject);
        req.onsuccess = wrap(ev => {
          const cursor = req.result;
          if (!cursor) {
            resolve(null);
            return;
          }
          cursor.___id = ++_id_counter;
          cursor.done = false;
          const _cursorContinue = cursor.continue.bind(cursor);
          let _cursorContinuePrimaryKey = cursor.continuePrimaryKey;
          if (_cursorContinuePrimaryKey) _cursorContinuePrimaryKey = _cursorContinuePrimaryKey.bind(cursor);
          const _cursorAdvance = cursor.advance.bind(cursor);
          const doThrowCursorIsNotStarted = () => {
            throw new Error("Cursor not started");
          };
          const doThrowCursorIsStopped = () => {
            throw new Error("Cursor not stopped");
          };
          cursor.trans = trans;
          cursor.stop = cursor.continue = cursor.continuePrimaryKey = cursor.advance = doThrowCursorIsNotStarted;
          cursor.fail = wrap(reject);
          cursor.next = function () {
            let gotOne = 1;
            return this.start(() => gotOne-- ? this.continue() : this.stop()).then(() => this);
          };
          cursor.start = callback => {
            const iterationPromise = new Promise((resolveIteration, rejectIteration) => {
              resolveIteration = wrap(resolveIteration);
              req.onerror = eventRejectHandler(rejectIteration);
              cursor.fail = rejectIteration;
              cursor.stop = value => {
                cursor.stop = cursor.continue = cursor.continuePrimaryKey = cursor.advance = doThrowCursorIsStopped;
                resolveIteration(value);
              };
            });
            const guardedCallback = () => {
              if (req.result) {
                try {
                  callback();
                } catch (err) {
                  cursor.fail(err);
                }
              } else {
                cursor.done = true;
                cursor.start = () => {
                  throw new Error("Cursor behind last entry");
                };
                cursor.stop();
              }
            };
            req.onsuccess = wrap(ev2 => {
              req.onsuccess = guardedCallback;
              guardedCallback();
            });
            cursor.continue = _cursorContinue;
            cursor.continuePrimaryKey = _cursorContinuePrimaryKey;
            cursor.advance = _cursorAdvance;
            guardedCallback();
            return iterationPromise;
          };
          resolve(cursor);
        }, reject);
      });
    }
    function query(hasGetAll2) {
      return request => {
        return new Promise((resolve, reject) => {
          resolve = wrap(resolve);
          const {
            trans,
            values,
            limit,
            query: query2
          } = request;
          const nonInfinitLimit = limit === Infinity ? void 0 : limit;
          const {
            index,
            range
          } = query2;
          const store = trans.objectStore(tableName);
          const source = index.isPrimaryKey ? store : store.index(index.name);
          const idbKeyRange = makeIDBKeyRange(range);
          if (limit === 0) return resolve({
            result: []
          });
          if (hasGetAll2) {
            const req = values ? source.getAll(idbKeyRange, nonInfinitLimit) : source.getAllKeys(idbKeyRange, nonInfinitLimit);
            req.onsuccess = event => resolve({
              result: event.target.result
            });
            req.onerror = eventRejectHandler(reject);
          } else {
            let count = 0;
            const req = values || !("openKeyCursor" in source) ? source.openCursor(idbKeyRange) : source.openKeyCursor(idbKeyRange);
            const result = [];
            req.onsuccess = event => {
              const cursor = req.result;
              if (!cursor) return resolve({
                result
              });
              result.push(values ? cursor.value : cursor.primaryKey);
              if (++count === limit) return resolve({
                result
              });
              cursor.continue();
            };
            req.onerror = eventRejectHandler(reject);
          }
        });
      };
    }
    return {
      name: tableName,
      schema: tableSchema,
      mutate,
      getMany({
        trans,
        keys: keys2
      }) {
        return new Promise((resolve, reject) => {
          resolve = wrap(resolve);
          const store = trans.objectStore(tableName);
          const length = keys2.length;
          const result = new Array(length);
          let keyCount = 0;
          let callbackCount = 0;
          let req;
          const successHandler = event => {
            const req2 = event.target;
            if ((result[req2._pos] = req2.result) != null) ;
            if (++callbackCount === keyCount) resolve(result);
          };
          const errorHandler = eventRejectHandler(reject);
          for (let i = 0; i < length; ++i) {
            const key = keys2[i];
            if (key != null) {
              req = store.get(keys2[i]);
              req._pos = i;
              req.onsuccess = successHandler;
              req.onerror = errorHandler;
              ++keyCount;
            }
          }
          if (keyCount === 0) resolve(result);
        });
      },
      get({
        trans,
        key
      }) {
        return new Promise((resolve, reject) => {
          resolve = wrap(resolve);
          const store = trans.objectStore(tableName);
          const req = store.get(key);
          req.onsuccess = event => resolve(event.target.result);
          req.onerror = eventRejectHandler(reject);
        });
      },
      query: query(hasGetAll),
      openCursor: openCursor2,
      count({
        query: query2,
        trans
      }) {
        const {
          index,
          range
        } = query2;
        return new Promise((resolve, reject) => {
          const store = trans.objectStore(tableName);
          const source = index.isPrimaryKey ? store : store.index(index.name);
          const idbKeyRange = makeIDBKeyRange(range);
          const req = idbKeyRange ? source.count(idbKeyRange) : source.count();
          req.onsuccess = wrap(ev => resolve(ev.target.result));
          req.onerror = eventRejectHandler(reject);
        });
      }
    };
  }
  const {
    schema,
    hasGetAll
  } = extractSchema(db, tmpTrans);
  const tables = schema.tables.map(tableSchema => createDbCoreTable(tableSchema));
  const tableMap = {};
  tables.forEach(table => tableMap[table.name] = table);
  return {
    stack: "dbcore",
    transaction: db.transaction.bind(db),
    table(name) {
      const result = tableMap[name];
      if (!result) throw new Error(`Table '${name}' not found`);
      return tableMap[name];
    },
    MIN_KEY: -Infinity,
    MAX_KEY: getMaxKey(IdbKeyRange),
    schema
  };
}
function createMiddlewareStack(stackImpl, middlewares) {
  return middlewares.reduce((down, {
    create
  }) => ({
    ...down,
    ...create(down)
  }), stackImpl);
}
function createMiddlewareStacks(middlewares, idbdb, {
  IDBKeyRange,
  indexedDB: indexedDB2
}, tmpTrans) {
  const dbcore = createMiddlewareStack(createDBCore(idbdb, IDBKeyRange, tmpTrans), middlewares.dbcore);
  return {
    dbcore
  };
}
function generateMiddlewareStacks({
  _novip: db
}, tmpTrans) {
  const idbdb = tmpTrans.db;
  const stacks = createMiddlewareStacks(db._middlewares, idbdb, db._deps, tmpTrans);
  db.core = stacks.dbcore;
  db.tables.forEach(table => {
    const tableName = table.name;
    if (db.core.schema.tables.some(tbl => tbl.name === tableName)) {
      table.core = db.core.table(tableName);
      if (db[tableName] instanceof db.Table) {
        db[tableName].core = table.core;
      }
    }
  });
}
function setApiOnPlace({
  _novip: db
}, objs, tableNames, dbschema) {
  tableNames.forEach(tableName => {
    const schema = dbschema[tableName];
    objs.forEach(obj => {
      const propDesc = getPropertyDescriptor(obj, tableName);
      if (!propDesc || "value" in propDesc && propDesc.value === void 0) {
        if (obj === db.Transaction.prototype || obj instanceof db.Transaction) {
          setProp(obj, tableName, {
            get() {
              return this.table(tableName);
            },
            set(value) {
              defineProperty(this, tableName, {
                value,
                writable: true,
                configurable: true,
                enumerable: true
              });
            }
          });
        } else {
          obj[tableName] = new db.Table(tableName, schema);
        }
      }
    });
  });
}
function removeTablesApi({
  _novip: db
}, objs) {
  objs.forEach(obj => {
    for (let key in obj) {
      if (obj[key] instanceof db.Table) delete obj[key];
    }
  });
}
function lowerVersionFirst(a, b) {
  return a._cfg.version - b._cfg.version;
}
function runUpgraders(db, oldVersion, idbUpgradeTrans, reject) {
  const globalSchema = db._dbSchema;
  const trans = db._createTransaction("readwrite", db._storeNames, globalSchema);
  trans.create(idbUpgradeTrans);
  trans._completion.catch(reject);
  const rejectTransaction = trans._reject.bind(trans);
  const transless = PSD.transless || PSD;
  newScope(() => {
    PSD.trans = trans;
    PSD.transless = transless;
    if (oldVersion === 0) {
      keys(globalSchema).forEach(tableName => {
        createTable(idbUpgradeTrans, tableName, globalSchema[tableName].primKey, globalSchema[tableName].indexes);
      });
      generateMiddlewareStacks(db, idbUpgradeTrans);
      DexiePromise.follow(() => db.on.populate.fire(trans)).catch(rejectTransaction);
    } else updateTablesAndIndexes(db, oldVersion, trans, idbUpgradeTrans).catch(rejectTransaction);
  });
}
function updateTablesAndIndexes({
  _novip: db
}, oldVersion, trans, idbUpgradeTrans) {
  const queue = [];
  const versions = db._versions;
  let globalSchema = db._dbSchema = buildGlobalSchema(db, db.idbdb, idbUpgradeTrans);
  let anyContentUpgraderHasRun = false;
  const versToRun = versions.filter(v => v._cfg.version >= oldVersion);
  versToRun.forEach(version => {
    queue.push(() => {
      const oldSchema = globalSchema;
      const newSchema = version._cfg.dbschema;
      adjustToExistingIndexNames(db, oldSchema, idbUpgradeTrans);
      adjustToExistingIndexNames(db, newSchema, idbUpgradeTrans);
      globalSchema = db._dbSchema = newSchema;
      const diff = getSchemaDiff(oldSchema, newSchema);
      diff.add.forEach(tuple => {
        createTable(idbUpgradeTrans, tuple[0], tuple[1].primKey, tuple[1].indexes);
      });
      diff.change.forEach(change => {
        if (change.recreate) {
          throw new exceptions.Upgrade("Not yet support for changing primary key");
        } else {
          const store = idbUpgradeTrans.objectStore(change.name);
          change.add.forEach(idx => addIndex(store, idx));
          change.change.forEach(idx => {
            store.deleteIndex(idx.name);
            addIndex(store, idx);
          });
          change.del.forEach(idxName => store.deleteIndex(idxName));
        }
      });
      const contentUpgrade = version._cfg.contentUpgrade;
      if (contentUpgrade && version._cfg.version > oldVersion) {
        generateMiddlewareStacks(db, idbUpgradeTrans);
        trans._memoizedTables = {};
        anyContentUpgraderHasRun = true;
        let upgradeSchema = shallowClone(newSchema);
        diff.del.forEach(table => {
          upgradeSchema[table] = oldSchema[table];
        });
        removeTablesApi(db, [db.Transaction.prototype]);
        setApiOnPlace(db, [db.Transaction.prototype], keys(upgradeSchema), upgradeSchema);
        trans.schema = upgradeSchema;
        const contentUpgradeIsAsync = isAsyncFunction(contentUpgrade);
        if (contentUpgradeIsAsync) {
          incrementExpectedAwaits();
        }
        let returnValue;
        const promiseFollowed = DexiePromise.follow(() => {
          returnValue = contentUpgrade(trans);
          if (returnValue) {
            if (contentUpgradeIsAsync) {
              var decrementor = decrementExpectedAwaits.bind(null, null);
              returnValue.then(decrementor, decrementor);
            }
          }
        });
        return returnValue && typeof returnValue.then === "function" ? DexiePromise.resolve(returnValue) : promiseFollowed.then(() => returnValue);
      }
    });
    queue.push(idbtrans => {
      if (!anyContentUpgraderHasRun || !hasIEDeleteObjectStoreBug) {
        const newSchema = version._cfg.dbschema;
        deleteRemovedTables(newSchema, idbtrans);
      }
      removeTablesApi(db, [db.Transaction.prototype]);
      setApiOnPlace(db, [db.Transaction.prototype], db._storeNames, db._dbSchema);
      trans.schema = db._dbSchema;
    });
  });
  function runQueue() {
    return queue.length ? DexiePromise.resolve(queue.shift()(trans.idbtrans)).then(runQueue) : DexiePromise.resolve();
  }
  return runQueue().then(() => {
    createMissingTables(globalSchema, idbUpgradeTrans);
  });
}
function getSchemaDiff(oldSchema, newSchema) {
  const diff = {
    del: [],
    add: [],
    change: []
  };
  let table;
  for (table in oldSchema) {
    if (!newSchema[table]) diff.del.push(table);
  }
  for (table in newSchema) {
    const oldDef = oldSchema[table],
      newDef = newSchema[table];
    if (!oldDef) {
      diff.add.push([table, newDef]);
    } else {
      const change = {
        name: table,
        def: newDef,
        recreate: false,
        del: [],
        add: [],
        change: []
      };
      if ("" + (oldDef.primKey.keyPath || "") !== "" + (newDef.primKey.keyPath || "") || oldDef.primKey.auto !== newDef.primKey.auto && !isIEOrEdge) {
        change.recreate = true;
        diff.change.push(change);
      } else {
        const oldIndexes = oldDef.idxByName;
        const newIndexes = newDef.idxByName;
        let idxName;
        for (idxName in oldIndexes) {
          if (!newIndexes[idxName]) change.del.push(idxName);
        }
        for (idxName in newIndexes) {
          const oldIdx = oldIndexes[idxName],
            newIdx = newIndexes[idxName];
          if (!oldIdx) change.add.push(newIdx);else if (oldIdx.src !== newIdx.src) change.change.push(newIdx);
        }
        if (change.del.length > 0 || change.add.length > 0 || change.change.length > 0) {
          diff.change.push(change);
        }
      }
    }
  }
  return diff;
}
function createTable(idbtrans, tableName, primKey, indexes) {
  const store = idbtrans.db.createObjectStore(tableName, primKey.keyPath ? {
    keyPath: primKey.keyPath,
    autoIncrement: primKey.auto
  } : {
    autoIncrement: primKey.auto
  });
  indexes.forEach(idx => addIndex(store, idx));
  return store;
}
function createMissingTables(newSchema, idbtrans) {
  keys(newSchema).forEach(tableName => {
    if (!idbtrans.db.objectStoreNames.contains(tableName)) {
      createTable(idbtrans, tableName, newSchema[tableName].primKey, newSchema[tableName].indexes);
    }
  });
}
function deleteRemovedTables(newSchema, idbtrans) {
  [].slice.call(idbtrans.db.objectStoreNames).forEach(storeName => newSchema[storeName] == null && idbtrans.db.deleteObjectStore(storeName));
}
function addIndex(store, idx) {
  store.createIndex(idx.name, idx.keyPath, {
    unique: idx.unique,
    multiEntry: idx.multi
  });
}
function buildGlobalSchema(db, idbdb, tmpTrans) {
  const globalSchema = {};
  const dbStoreNames = slice(idbdb.objectStoreNames, 0);
  dbStoreNames.forEach(storeName => {
    const store = tmpTrans.objectStore(storeName);
    let keyPath = store.keyPath;
    const primKey = createIndexSpec(nameFromKeyPath(keyPath), keyPath || "", false, false, !!store.autoIncrement, keyPath && typeof keyPath !== "string", true);
    const indexes = [];
    for (let j = 0; j < store.indexNames.length; ++j) {
      const idbindex = store.index(store.indexNames[j]);
      keyPath = idbindex.keyPath;
      var index = createIndexSpec(idbindex.name, keyPath, !!idbindex.unique, !!idbindex.multiEntry, false, keyPath && typeof keyPath !== "string", false);
      indexes.push(index);
    }
    globalSchema[storeName] = createTableSchema(storeName, primKey, indexes);
  });
  return globalSchema;
}
function readGlobalSchema({
  _novip: db
}, idbdb, tmpTrans) {
  db.verno = idbdb.version / 10;
  const globalSchema = db._dbSchema = buildGlobalSchema(db, idbdb, tmpTrans);
  db._storeNames = slice(idbdb.objectStoreNames, 0);
  setApiOnPlace(db, [db._allTables], keys(globalSchema), globalSchema);
}
function verifyInstalledSchema(db, tmpTrans) {
  const installedSchema = buildGlobalSchema(db, db.idbdb, tmpTrans);
  const diff = getSchemaDiff(installedSchema, db._dbSchema);
  return !(diff.add.length || diff.change.some(ch => ch.add.length || ch.change.length));
}
function adjustToExistingIndexNames({
  _novip: db
}, schema, idbtrans) {
  const storeNames = idbtrans.db.objectStoreNames;
  for (let i = 0; i < storeNames.length; ++i) {
    const storeName = storeNames[i];
    const store = idbtrans.objectStore(storeName);
    db._hasGetAll = "getAll" in store;
    for (let j = 0; j < store.indexNames.length; ++j) {
      const indexName = store.indexNames[j];
      const keyPath = store.index(indexName).keyPath;
      const dexieName = typeof keyPath === "string" ? keyPath : "[" + slice(keyPath).join("+") + "]";
      if (schema[storeName]) {
        const indexSpec = schema[storeName].idxByName[dexieName];
        if (indexSpec) {
          indexSpec.name = indexName;
          delete schema[storeName].idxByName[dexieName];
          schema[storeName].idxByName[indexName] = indexSpec;
        }
      }
    }
  }
  if (typeof navigator !== "undefined" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && _global.WorkerGlobalScope && _global instanceof _global.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604) {
    db._hasGetAll = false;
  }
}
function parseIndexSyntax(primKeyAndIndexes) {
  return primKeyAndIndexes.split(",").map((index, indexNum) => {
    index = index.trim();
    const name = index.replace(/([&*]|\+\+)/g, "");
    const keyPath = /^\[/.test(name) ? name.match(/^\[(.*)\]$/)[1].split("+") : name;
    return createIndexSpec(name, keyPath || null, /\&/.test(index), /\*/.test(index), /\+\+/.test(index), isArray(keyPath), indexNum === 0);
  });
}
var Version = class {
  _parseStoresSpec(stores, outSchema) {
    keys(stores).forEach(tableName => {
      if (stores[tableName] !== null) {
        var indexes = parseIndexSyntax(stores[tableName]);
        var primKey = indexes.shift();
        if (primKey.multi) throw new exceptions.Schema("Primary key cannot be multi-valued");
        indexes.forEach(idx => {
          if (idx.auto) throw new exceptions.Schema("Only primary key can be marked as autoIncrement (++)");
          if (!idx.keyPath) throw new exceptions.Schema("Index must have a name and cannot be an empty string");
        });
        outSchema[tableName] = createTableSchema(tableName, primKey, indexes);
      }
    });
  }
  stores(stores) {
    const db = this.db;
    this._cfg.storesSource = this._cfg.storesSource ? extend(this._cfg.storesSource, stores) : stores;
    const versions = db._versions;
    const storesSpec = {};
    let dbschema = {};
    versions.forEach(version => {
      extend(storesSpec, version._cfg.storesSource);
      dbschema = version._cfg.dbschema = {};
      version._parseStoresSpec(storesSpec, dbschema);
    });
    db._dbSchema = dbschema;
    removeTablesApi(db, [db._allTables, db, db.Transaction.prototype]);
    setApiOnPlace(db, [db._allTables, db, db.Transaction.prototype, this._cfg.tables], keys(dbschema), dbschema);
    db._storeNames = keys(dbschema);
    return this;
  }
  upgrade(upgradeFunction) {
    this._cfg.contentUpgrade = promisableChain(this._cfg.contentUpgrade || nop, upgradeFunction);
    return this;
  }
};
function createVersionConstructor(db) {
  return makeClassConstructor(Version.prototype, function Version2(versionNumber) {
    this.db = db;
    this._cfg = {
      version: versionNumber,
      storesSource: null,
      dbschema: {},
      tables: {},
      contentUpgrade: null
    };
  });
}
function getDbNamesTable(indexedDB2, IDBKeyRange) {
  let dbNamesDB = indexedDB2["_dbNamesDB"];
  if (!dbNamesDB) {
    dbNamesDB = indexedDB2["_dbNamesDB"] = new Dexie$1(DBNAMES_DB, {
      addons: [],
      indexedDB: indexedDB2,
      IDBKeyRange
    });
    dbNamesDB.version(1).stores({
      dbnames: "name"
    });
  }
  return dbNamesDB.table("dbnames");
}
function hasDatabasesNative(indexedDB2) {
  return indexedDB2 && typeof indexedDB2.databases === "function";
}
function getDatabaseNames({
  indexedDB: indexedDB2,
  IDBKeyRange
}) {
  return hasDatabasesNative(indexedDB2) ? Promise.resolve(indexedDB2.databases()).then(infos => infos.map(info => info.name).filter(name => name !== DBNAMES_DB)) : getDbNamesTable(indexedDB2, IDBKeyRange).toCollection().primaryKeys();
}
function _onDatabaseCreated({
  indexedDB: indexedDB2,
  IDBKeyRange
}, name) {
  !hasDatabasesNative(indexedDB2) && name !== DBNAMES_DB && getDbNamesTable(indexedDB2, IDBKeyRange).put({
    name
  }).catch(nop);
}
function _onDatabaseDeleted({
  indexedDB: indexedDB2,
  IDBKeyRange
}, name) {
  !hasDatabasesNative(indexedDB2) && name !== DBNAMES_DB && getDbNamesTable(indexedDB2, IDBKeyRange).delete(name).catch(nop);
}
function vip(fn) {
  return newScope(function () {
    PSD.letThrough = true;
    return fn();
  });
}
function idbReady() {
  var isSafari = !navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent);
  if (!isSafari || !indexedDB.databases) return Promise.resolve();
  var intervalId;
  return new Promise(function (resolve) {
    var tryIdb = function () {
      return indexedDB.databases().finally(resolve);
    };
    intervalId = setInterval(tryIdb, 100);
    tryIdb();
  }).finally(function () {
    return clearInterval(intervalId);
  });
}
function dexieOpen(db) {
  const state = db._state;
  const {
    indexedDB: indexedDB2
  } = db._deps;
  if (state.isBeingOpened || db.idbdb) return state.dbReadyPromise.then(() => state.dbOpenError ? rejection(state.dbOpenError) : db);
  debug && (state.openCanceller._stackHolder = getErrorWithStack());
  state.isBeingOpened = true;
  state.dbOpenError = null;
  state.openComplete = false;
  const openCanceller = state.openCanceller;
  function throwIfCancelled() {
    if (state.openCanceller !== openCanceller) throw new exceptions.DatabaseClosed("db.open() was cancelled");
  }
  let resolveDbReady = state.dbReadyResolve,
    upgradeTransaction = null,
    wasCreated = false;
  return DexiePromise.race([openCanceller, (typeof navigator === "undefined" ? DexiePromise.resolve() : idbReady()).then(() => new DexiePromise((resolve, reject) => {
    throwIfCancelled();
    if (!indexedDB2) throw new exceptions.MissingAPI();
    const dbName = db.name;
    const req = state.autoSchema ? indexedDB2.open(dbName) : indexedDB2.open(dbName, Math.round(db.verno * 10));
    if (!req) throw new exceptions.MissingAPI();
    req.onerror = eventRejectHandler(reject);
    req.onblocked = wrap(db._fireOnBlocked);
    req.onupgradeneeded = wrap(e => {
      upgradeTransaction = req.transaction;
      if (state.autoSchema && !db._options.allowEmptyDB) {
        req.onerror = preventDefault;
        upgradeTransaction.abort();
        req.result.close();
        const delreq = indexedDB2.deleteDatabase(dbName);
        delreq.onsuccess = delreq.onerror = wrap(() => {
          reject(new exceptions.NoSuchDatabase(`Database ${dbName} doesnt exist`));
        });
      } else {
        upgradeTransaction.onerror = eventRejectHandler(reject);
        var oldVer = e.oldVersion > Math.pow(2, 62) ? 0 : e.oldVersion;
        wasCreated = oldVer < 1;
        db._novip.idbdb = req.result;
        runUpgraders(db, oldVer / 10, upgradeTransaction, reject);
      }
    }, reject);
    req.onsuccess = wrap(() => {
      upgradeTransaction = null;
      const idbdb = db._novip.idbdb = req.result;
      const objectStoreNames = slice(idbdb.objectStoreNames);
      if (objectStoreNames.length > 0) try {
        const tmpTrans = idbdb.transaction(safariMultiStoreFix(objectStoreNames), "readonly");
        if (state.autoSchema) readGlobalSchema(db, idbdb, tmpTrans);else {
          adjustToExistingIndexNames(db, db._dbSchema, tmpTrans);
          if (!verifyInstalledSchema(db, tmpTrans)) {
            console.warn(`Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Some queries may fail.`);
          }
        }
        generateMiddlewareStacks(db, tmpTrans);
      } catch (e) {}
      connections.push(db);
      idbdb.onversionchange = wrap(ev => {
        state.vcFired = true;
        db.on("versionchange").fire(ev);
      });
      idbdb.onclose = wrap(ev => {
        db.on("close").fire(ev);
      });
      if (wasCreated) _onDatabaseCreated(db._deps, dbName);
      resolve();
    }, reject);
  }))]).then(() => {
    throwIfCancelled();
    state.onReadyBeingFired = [];
    return DexiePromise.resolve(vip(() => db.on.ready.fire(db.vip))).then(function fireRemainders() {
      if (state.onReadyBeingFired.length > 0) {
        let remainders = state.onReadyBeingFired.reduce(promisableChain, nop);
        state.onReadyBeingFired = [];
        return DexiePromise.resolve(vip(() => remainders(db.vip))).then(fireRemainders);
      }
    });
  }).finally(() => {
    state.onReadyBeingFired = null;
    state.isBeingOpened = false;
  }).then(() => {
    return db;
  }).catch(err => {
    state.dbOpenError = err;
    try {
      upgradeTransaction && upgradeTransaction.abort();
    } catch (_a) {}
    if (openCanceller === state.openCanceller) {
      db._close();
    }
    return rejection(err);
  }).finally(() => {
    state.openComplete = true;
    resolveDbReady();
  });
}
function awaitIterator(iterator) {
  var callNext = result => iterator.next(result),
    doThrow = error => iterator.throw(error),
    onSuccess = step(callNext),
    onError = step(doThrow);
  function step(getNext) {
    return val => {
      var next = getNext(val),
        value = next.value;
      return next.done ? value : !value || typeof value.then !== "function" ? isArray(value) ? Promise.all(value).then(onSuccess, onError) : onSuccess(value) : value.then(onSuccess, onError);
    };
  }
  return step(callNext)();
}
function extractTransactionArgs(mode, _tableArgs_, scopeFunc) {
  var i = arguments.length;
  if (i < 2) throw new exceptions.InvalidArgument("Too few arguments");
  var args = new Array(i - 1);
  while (--i) args[i - 1] = arguments[i];
  scopeFunc = args.pop();
  var tables = flatten(args);
  return [mode, tables, scopeFunc];
}
function enterTransactionScope(db, mode, storeNames, parentTransaction, scopeFunc) {
  return DexiePromise.resolve().then(() => {
    const transless = PSD.transless || PSD;
    const trans = db._createTransaction(mode, storeNames, db._dbSchema, parentTransaction);
    const zoneProps = {
      trans,
      transless
    };
    if (parentTransaction) {
      trans.idbtrans = parentTransaction.idbtrans;
    } else {
      try {
        trans.create();
        db._state.PR1398_maxLoop = 3;
      } catch (ex) {
        if (ex.name === errnames.InvalidState && db.isOpen() && --db._state.PR1398_maxLoop > 0) {
          console.warn("Dexie: Need to reopen db");
          db._close();
          return db.open().then(() => enterTransactionScope(db, mode, storeNames, null, scopeFunc));
        }
        return rejection(ex);
      }
    }
    const scopeFuncIsAsync = isAsyncFunction(scopeFunc);
    if (scopeFuncIsAsync) {
      incrementExpectedAwaits();
    }
    let returnValue;
    const promiseFollowed = DexiePromise.follow(() => {
      returnValue = scopeFunc.call(trans, trans);
      if (returnValue) {
        if (scopeFuncIsAsync) {
          var decrementor = decrementExpectedAwaits.bind(null, null);
          returnValue.then(decrementor, decrementor);
        } else if (typeof returnValue.next === "function" && typeof returnValue.throw === "function") {
          returnValue = awaitIterator(returnValue);
        }
      }
    }, zoneProps);
    return (returnValue && typeof returnValue.then === "function" ? DexiePromise.resolve(returnValue).then(x => trans.active ? x : rejection(new exceptions.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))) : promiseFollowed.then(() => returnValue)).then(x => {
      if (parentTransaction) trans._resolve();
      return trans._completion.then(() => x);
    }).catch(e => {
      trans._reject(e);
      return rejection(e);
    });
  });
}
function pad(a, value, count) {
  const result = isArray(a) ? a.slice() : [a];
  for (let i = 0; i < count; ++i) result.push(value);
  return result;
}
function createVirtualIndexMiddleware(down) {
  return {
    ...down,
    table(tableName) {
      const table = down.table(tableName);
      const {
        schema
      } = table;
      const indexLookup = {};
      const allVirtualIndexes = [];
      function addVirtualIndexes(keyPath, keyTail, lowLevelIndex) {
        const keyPathAlias = getKeyPathAlias(keyPath);
        const indexList = indexLookup[keyPathAlias] = indexLookup[keyPathAlias] || [];
        const keyLength = keyPath == null ? 0 : typeof keyPath === "string" ? 1 : keyPath.length;
        const isVirtual = keyTail > 0;
        const virtualIndex = {
          ...lowLevelIndex,
          isVirtual,
          keyTail,
          keyLength,
          extractKey: getKeyExtractor(keyPath),
          unique: !isVirtual && lowLevelIndex.unique
        };
        indexList.push(virtualIndex);
        if (!virtualIndex.isPrimaryKey) {
          allVirtualIndexes.push(virtualIndex);
        }
        if (keyLength > 1) {
          const virtualKeyPath = keyLength === 2 ? keyPath[0] : keyPath.slice(0, keyLength - 1);
          addVirtualIndexes(virtualKeyPath, keyTail + 1, lowLevelIndex);
        }
        indexList.sort((a, b) => a.keyTail - b.keyTail);
        return virtualIndex;
      }
      const primaryKey = addVirtualIndexes(schema.primaryKey.keyPath, 0, schema.primaryKey);
      indexLookup[":id"] = [primaryKey];
      for (const index of schema.indexes) {
        addVirtualIndexes(index.keyPath, 0, index);
      }
      function findBestIndex(keyPath) {
        const result2 = indexLookup[getKeyPathAlias(keyPath)];
        return result2 && result2[0];
      }
      function translateRange(range, keyTail) {
        return {
          type: range.type === 1 ? 2 : range.type,
          lower: pad(range.lower, range.lowerOpen ? down.MAX_KEY : down.MIN_KEY, keyTail),
          lowerOpen: true,
          upper: pad(range.upper, range.upperOpen ? down.MIN_KEY : down.MAX_KEY, keyTail),
          upperOpen: true
        };
      }
      function translateRequest(req) {
        const index = req.query.index;
        return index.isVirtual ? {
          ...req,
          query: {
            index,
            range: translateRange(req.query.range, index.keyTail)
          }
        } : req;
      }
      const result = {
        ...table,
        schema: {
          ...schema,
          primaryKey,
          indexes: allVirtualIndexes,
          getIndexByKeyPath: findBestIndex
        },
        count(req) {
          return table.count(translateRequest(req));
        },
        query(req) {
          return table.query(translateRequest(req));
        },
        openCursor(req) {
          const {
            keyTail,
            isVirtual,
            keyLength
          } = req.query.index;
          if (!isVirtual) return table.openCursor(req);
          function createVirtualCursor(cursor) {
            function _continue(key) {
              key != null ? cursor.continue(pad(key, req.reverse ? down.MAX_KEY : down.MIN_KEY, keyTail)) : req.unique ? cursor.continue(cursor.key.slice(0, keyLength).concat(req.reverse ? down.MIN_KEY : down.MAX_KEY, keyTail)) : cursor.continue();
            }
            const virtualCursor = Object.create(cursor, {
              continue: {
                value: _continue
              },
              continuePrimaryKey: {
                value(key, primaryKey2) {
                  cursor.continuePrimaryKey(pad(key, down.MAX_KEY, keyTail), primaryKey2);
                }
              },
              primaryKey: {
                get() {
                  return cursor.primaryKey;
                }
              },
              key: {
                get() {
                  const key = cursor.key;
                  return keyLength === 1 ? key[0] : key.slice(0, keyLength);
                }
              },
              value: {
                get() {
                  return cursor.value;
                }
              }
            });
            return virtualCursor;
          }
          return table.openCursor(translateRequest(req)).then(cursor => cursor && createVirtualCursor(cursor));
        }
      };
      return result;
    }
  };
}
var virtualIndexMiddleware = {
  stack: "dbcore",
  name: "VirtualIndexMiddleware",
  level: 1,
  create: createVirtualIndexMiddleware
};
function getObjectDiff(a, b, rv, prfx) {
  rv = rv || {};
  prfx = prfx || "";
  keys(a).forEach(prop => {
    if (!hasOwn(b, prop)) {
      rv[prfx + prop] = void 0;
    } else {
      var ap = a[prop],
        bp = b[prop];
      if (typeof ap === "object" && typeof bp === "object" && ap && bp) {
        const apTypeName = toStringTag(ap);
        const bpTypeName = toStringTag(bp);
        if (apTypeName !== bpTypeName) {
          rv[prfx + prop] = b[prop];
        } else if (apTypeName === "Object") {
          getObjectDiff(ap, bp, rv, prfx + prop + ".");
        } else if (ap !== bp) {
          rv[prfx + prop] = b[prop];
        }
      } else if (ap !== bp) rv[prfx + prop] = b[prop];
    }
  });
  keys(b).forEach(prop => {
    if (!hasOwn(a, prop)) {
      rv[prfx + prop] = b[prop];
    }
  });
  return rv;
}
function getEffectiveKeys(primaryKey, req) {
  if (req.type === "delete") return req.keys;
  return req.keys || req.values.map(primaryKey.extractKey);
}
var hooksMiddleware = {
  stack: "dbcore",
  name: "HooksMiddleware",
  level: 2,
  create: downCore => ({
    ...downCore,
    table(tableName) {
      const downTable = downCore.table(tableName);
      const {
        primaryKey
      } = downTable.schema;
      const tableMiddleware = {
        ...downTable,
        mutate(req) {
          const dxTrans = PSD.trans;
          const {
            deleting,
            creating,
            updating
          } = dxTrans.table(tableName).hook;
          switch (req.type) {
            case "add":
              if (creating.fire === nop) break;
              return dxTrans._promise("readwrite", () => addPutOrDelete(req), true);
            case "put":
              if (creating.fire === nop && updating.fire === nop) break;
              return dxTrans._promise("readwrite", () => addPutOrDelete(req), true);
            case "delete":
              if (deleting.fire === nop) break;
              return dxTrans._promise("readwrite", () => addPutOrDelete(req), true);
            case "deleteRange":
              if (deleting.fire === nop) break;
              return dxTrans._promise("readwrite", () => deleteRange(req), true);
          }
          return downTable.mutate(req);
          function addPutOrDelete(req2) {
            const dxTrans2 = PSD.trans;
            const keys2 = req2.keys || getEffectiveKeys(primaryKey, req2);
            if (!keys2) throw new Error("Keys missing");
            req2 = req2.type === "add" || req2.type === "put" ? {
              ...req2,
              keys: keys2
            } : {
              ...req2
            };
            if (req2.type !== "delete") req2.values = [...req2.values];
            if (req2.keys) req2.keys = [...req2.keys];
            return getExistingValues(downTable, req2, keys2).then(existingValues => {
              const contexts = keys2.map((key, i) => {
                const existingValue = existingValues[i];
                const ctx = {
                  onerror: null,
                  onsuccess: null
                };
                if (req2.type === "delete") {
                  deleting.fire.call(ctx, key, existingValue, dxTrans2);
                } else if (req2.type === "add" || existingValue === void 0) {
                  const generatedPrimaryKey = creating.fire.call(ctx, key, req2.values[i], dxTrans2);
                  if (key == null && generatedPrimaryKey != null) {
                    key = generatedPrimaryKey;
                    req2.keys[i] = key;
                    if (!primaryKey.outbound) {
                      setByKeyPath(req2.values[i], primaryKey.keyPath, key);
                    }
                  }
                } else {
                  const objectDiff = getObjectDiff(existingValue, req2.values[i]);
                  const additionalChanges = updating.fire.call(ctx, objectDiff, key, existingValue, dxTrans2);
                  if (additionalChanges) {
                    const requestedValue = req2.values[i];
                    Object.keys(additionalChanges).forEach(keyPath => {
                      if (hasOwn(requestedValue, keyPath)) {
                        requestedValue[keyPath] = additionalChanges[keyPath];
                      } else {
                        setByKeyPath(requestedValue, keyPath, additionalChanges[keyPath]);
                      }
                    });
                  }
                }
                return ctx;
              });
              return downTable.mutate(req2).then(({
                failures,
                results,
                numFailures,
                lastResult
              }) => {
                for (let i = 0; i < keys2.length; ++i) {
                  const primKey = results ? results[i] : keys2[i];
                  const ctx = contexts[i];
                  if (primKey == null) {
                    ctx.onerror && ctx.onerror(failures[i]);
                  } else {
                    ctx.onsuccess && ctx.onsuccess(req2.type === "put" && existingValues[i] ? req2.values[i] : primKey);
                  }
                }
                return {
                  failures,
                  results,
                  numFailures,
                  lastResult
                };
              }).catch(error => {
                contexts.forEach(ctx => ctx.onerror && ctx.onerror(error));
                return Promise.reject(error);
              });
            });
          }
          function deleteRange(req2) {
            return deleteNextChunk(req2.trans, req2.range, 1e4);
          }
          function deleteNextChunk(trans, range, limit) {
            return downTable.query({
              trans,
              values: false,
              query: {
                index: primaryKey,
                range
              },
              limit
            }).then(({
              result
            }) => {
              return addPutOrDelete({
                type: "delete",
                keys: result,
                trans
              }).then(res => {
                if (res.numFailures > 0) return Promise.reject(res.failures[0]);
                if (result.length < limit) {
                  return {
                    failures: [],
                    numFailures: 0,
                    lastResult: void 0
                  };
                } else {
                  return deleteNextChunk(trans, {
                    ...range,
                    lower: result[result.length - 1],
                    lowerOpen: true
                  }, limit);
                }
              });
            });
          }
        }
      };
      return tableMiddleware;
    }
  })
};
function getExistingValues(table, req, effectiveKeys) {
  return req.type === "add" ? Promise.resolve([]) : table.getMany({
    trans: req.trans,
    keys: effectiveKeys,
    cache: "immutable"
  });
}
function getFromTransactionCache(keys2, cache, clone) {
  try {
    if (!cache) return null;
    if (cache.keys.length < keys2.length) return null;
    const result = [];
    for (let i = 0, j = 0; i < cache.keys.length && j < keys2.length; ++i) {
      if (cmp(cache.keys[i], keys2[j]) !== 0) continue;
      result.push(clone ? deepClone(cache.values[i]) : cache.values[i]);
      ++j;
    }
    return result.length === keys2.length ? result : null;
  } catch (_a) {
    return null;
  }
}
var cacheExistingValuesMiddleware = {
  stack: "dbcore",
  level: -1,
  create: core => {
    return {
      table: tableName => {
        const table = core.table(tableName);
        return {
          ...table,
          getMany: req => {
            if (!req.cache) {
              return table.getMany(req);
            }
            const cachedResult = getFromTransactionCache(req.keys, req.trans["_cache"], req.cache === "clone");
            if (cachedResult) {
              return DexiePromise.resolve(cachedResult);
            }
            return table.getMany(req).then(res => {
              req.trans["_cache"] = {
                keys: req.keys,
                values: req.cache === "clone" ? deepClone(res) : res
              };
              return res;
            });
          },
          mutate: req => {
            if (req.type !== "add") req.trans["_cache"] = null;
            return table.mutate(req);
          }
        };
      }
    };
  }
};
function isEmptyRange(node) {
  return !("from" in node);
}
var RangeSet = function (fromOrTree, to) {
  if (this) {
    extend(this, arguments.length ? {
      d: 1,
      from: fromOrTree,
      to: arguments.length > 1 ? to : fromOrTree
    } : {
      d: 0
    });
  } else {
    const rv = new RangeSet();
    if (fromOrTree && "d" in fromOrTree) {
      extend(rv, fromOrTree);
    }
    return rv;
  }
};
props(RangeSet.prototype, {
  add(rangeSet) {
    mergeRanges(this, rangeSet);
    return this;
  },
  addKey(key) {
    addRange(this, key, key);
    return this;
  },
  addKeys(keys2) {
    keys2.forEach(key => addRange(this, key, key));
    return this;
  },
  [iteratorSymbol]() {
    return getRangeSetIterator(this);
  }
});
function addRange(target, from, to) {
  const diff = cmp(from, to);
  if (isNaN(diff)) return;
  if (diff > 0) throw RangeError();
  if (isEmptyRange(target)) return extend(target, {
    from,
    to,
    d: 1
  });
  const left = target.l;
  const right = target.r;
  if (cmp(to, target.from) < 0) {
    left ? addRange(left, from, to) : target.l = {
      from,
      to,
      d: 1,
      l: null,
      r: null
    };
    return rebalance(target);
  }
  if (cmp(from, target.to) > 0) {
    right ? addRange(right, from, to) : target.r = {
      from,
      to,
      d: 1,
      l: null,
      r: null
    };
    return rebalance(target);
  }
  if (cmp(from, target.from) < 0) {
    target.from = from;
    target.l = null;
    target.d = right ? right.d + 1 : 1;
  }
  if (cmp(to, target.to) > 0) {
    target.to = to;
    target.r = null;
    target.d = target.l ? target.l.d + 1 : 1;
  }
  const rightWasCutOff = !target.r;
  if (left && !target.l) {
    mergeRanges(target, left);
  }
  if (right && rightWasCutOff) {
    mergeRanges(target, right);
  }
}
function mergeRanges(target, newSet) {
  function _addRangeSet(target2, {
    from,
    to,
    l,
    r
  }) {
    addRange(target2, from, to);
    if (l) _addRangeSet(target2, l);
    if (r) _addRangeSet(target2, r);
  }
  if (!isEmptyRange(newSet)) _addRangeSet(target, newSet);
}
function rangesOverlap(rangeSet1, rangeSet2) {
  const i1 = getRangeSetIterator(rangeSet2);
  let nextResult1 = i1.next();
  if (nextResult1.done) return false;
  let a = nextResult1.value;
  const i2 = getRangeSetIterator(rangeSet1);
  let nextResult2 = i2.next(a.from);
  let b = nextResult2.value;
  while (!nextResult1.done && !nextResult2.done) {
    if (cmp(b.from, a.to) <= 0 && cmp(b.to, a.from) >= 0) return true;
    cmp(a.from, b.from) < 0 ? a = (nextResult1 = i1.next(b.from)).value : b = (nextResult2 = i2.next(a.from)).value;
  }
  return false;
}
function getRangeSetIterator(node) {
  let state = isEmptyRange(node) ? null : {
    s: 0,
    n: node
  };
  return {
    next(key) {
      const keyProvided = arguments.length > 0;
      while (state) {
        switch (state.s) {
          case 0:
            state.s = 1;
            if (keyProvided) {
              while (state.n.l && cmp(key, state.n.from) < 0) state = {
                up: state,
                n: state.n.l,
                s: 1
              };
            } else {
              while (state.n.l) state = {
                up: state,
                n: state.n.l,
                s: 1
              };
            }
          case 1:
            state.s = 2;
            if (!keyProvided || cmp(key, state.n.to) <= 0) return {
              value: state.n,
              done: false
            };
          case 2:
            if (state.n.r) {
              state.s = 3;
              state = {
                up: state,
                n: state.n.r,
                s: 0
              };
              continue;
            }
          case 3:
            state = state.up;
        }
      }
      return {
        done: true
      };
    }
  };
}
function rebalance(target) {
  var _a, _b;
  const diff = (((_a = target.r) === null || _a === void 0 ? void 0 : _a.d) || 0) - (((_b = target.l) === null || _b === void 0 ? void 0 : _b.d) || 0);
  const r = diff > 1 ? "r" : diff < -1 ? "l" : "";
  if (r) {
    const l = r === "r" ? "l" : "r";
    const rootClone = {
      ...target
    };
    const oldRootRight = target[r];
    target.from = oldRootRight.from;
    target.to = oldRootRight.to;
    target[r] = oldRootRight[r];
    rootClone[r] = oldRootRight[l];
    target[l] = rootClone;
    rootClone.d = computeDepth(rootClone);
  }
  target.d = computeDepth(target);
}
function computeDepth({
  r,
  l
}) {
  return (r ? l ? Math.max(r.d, l.d) : r.d : l ? l.d : 0) + 1;
}
var observabilityMiddleware = {
  stack: "dbcore",
  level: 0,
  create: core => {
    const dbName = core.schema.name;
    const FULL_RANGE = new RangeSet(core.MIN_KEY, core.MAX_KEY);
    return {
      ...core,
      table: tableName => {
        const table = core.table(tableName);
        const {
          schema
        } = table;
        const {
          primaryKey
        } = schema;
        const {
          extractKey,
          outbound
        } = primaryKey;
        const tableClone = {
          ...table,
          mutate: req => {
            const trans = req.trans;
            const mutatedParts = trans.mutatedParts || (trans.mutatedParts = {});
            const getRangeSet = indexName => {
              const part = `idb://${dbName}/${tableName}/${indexName}`;
              return mutatedParts[part] || (mutatedParts[part] = new RangeSet());
            };
            const pkRangeSet = getRangeSet("");
            const delsRangeSet = getRangeSet(":dels");
            const {
              type: type2
            } = req;
            let [keys2, newObjs] = req.type === "deleteRange" ? [req.range] : req.type === "delete" ? [req.keys] : req.values.length < 50 ? [[], req.values] : [];
            const oldCache = req.trans["_cache"];
            return table.mutate(req).then(res => {
              if (isArray(keys2)) {
                if (type2 !== "delete") keys2 = res.results;
                pkRangeSet.addKeys(keys2);
                const oldObjs = getFromTransactionCache(keys2, oldCache);
                if (!oldObjs && type2 !== "add") {
                  delsRangeSet.addKeys(keys2);
                }
                if (oldObjs || newObjs) {
                  trackAffectedIndexes(getRangeSet, schema, oldObjs, newObjs);
                }
              } else if (keys2) {
                const range = {
                  from: keys2.lower,
                  to: keys2.upper
                };
                delsRangeSet.add(range);
                pkRangeSet.add(range);
              } else {
                pkRangeSet.add(FULL_RANGE);
                delsRangeSet.add(FULL_RANGE);
                schema.indexes.forEach(idx => getRangeSet(idx.name).add(FULL_RANGE));
              }
              return res;
            });
          }
        };
        const getRange = ({
          query: {
            index,
            range
          }
        }) => {
          var _a, _b;
          return [index, new RangeSet((_a = range.lower) !== null && _a !== void 0 ? _a : core.MIN_KEY, (_b = range.upper) !== null && _b !== void 0 ? _b : core.MAX_KEY)];
        };
        const readSubscribers = {
          get: req => [primaryKey, new RangeSet(req.key)],
          getMany: req => [primaryKey, new RangeSet().addKeys(req.keys)],
          count: getRange,
          query: getRange,
          openCursor: getRange
        };
        keys(readSubscribers).forEach(method => {
          tableClone[method] = function (req) {
            const {
              subscr
            } = PSD;
            if (subscr) {
              const getRangeSet = indexName => {
                const part = `idb://${dbName}/${tableName}/${indexName}`;
                return subscr[part] || (subscr[part] = new RangeSet());
              };
              const pkRangeSet = getRangeSet("");
              const delsRangeSet = getRangeSet(":dels");
              const [queriedIndex, queriedRanges] = readSubscribers[method](req);
              getRangeSet(queriedIndex.name || "").add(queriedRanges);
              if (!queriedIndex.isPrimaryKey) {
                if (method === "count") {
                  delsRangeSet.add(FULL_RANGE);
                } else {
                  const keysPromise = method === "query" && outbound && req.values && table.query({
                    ...req,
                    values: false
                  });
                  return table[method].apply(this, arguments).then(res => {
                    if (method === "query") {
                      if (outbound && req.values) {
                        return keysPromise.then(({
                          result: resultingKeys
                        }) => {
                          pkRangeSet.addKeys(resultingKeys);
                          return res;
                        });
                      }
                      const pKeys = req.values ? res.result.map(extractKey) : res.result;
                      if (req.values) {
                        pkRangeSet.addKeys(pKeys);
                      } else {
                        delsRangeSet.addKeys(pKeys);
                      }
                    } else if (method === "openCursor") {
                      const cursor = res;
                      const wantValues = req.values;
                      return cursor && Object.create(cursor, {
                        key: {
                          get() {
                            delsRangeSet.addKey(cursor.primaryKey);
                            return cursor.key;
                          }
                        },
                        primaryKey: {
                          get() {
                            const pkey = cursor.primaryKey;
                            delsRangeSet.addKey(pkey);
                            return pkey;
                          }
                        },
                        value: {
                          get() {
                            wantValues && pkRangeSet.addKey(cursor.primaryKey);
                            return cursor.value;
                          }
                        }
                      });
                    }
                    return res;
                  });
                }
              }
            }
            return table[method].apply(this, arguments);
          };
        });
        return tableClone;
      }
    };
  }
};
function trackAffectedIndexes(getRangeSet, schema, oldObjs, newObjs) {
  function addAffectedIndex(ix) {
    const rangeSet = getRangeSet(ix.name || "");
    function extractKey(obj) {
      return obj != null ? ix.extractKey(obj) : null;
    }
    const addKeyOrKeys = key => ix.multiEntry && isArray(key) ? key.forEach(key2 => rangeSet.addKey(key2)) : rangeSet.addKey(key);
    (oldObjs || newObjs).forEach((_, i) => {
      const oldKey = oldObjs && extractKey(oldObjs[i]);
      const newKey = newObjs && extractKey(newObjs[i]);
      if (cmp(oldKey, newKey) !== 0) {
        if (oldKey != null) addKeyOrKeys(oldKey);
        if (newKey != null) addKeyOrKeys(newKey);
      }
    });
  }
  schema.indexes.forEach(addAffectedIndex);
}
var Dexie$1 = class {
  constructor(name, options) {
    this._middlewares = {};
    this.verno = 0;
    const deps = Dexie$1.dependencies;
    this._options = options = {
      addons: Dexie$1.addons,
      autoOpen: true,
      indexedDB: deps.indexedDB,
      IDBKeyRange: deps.IDBKeyRange,
      ...options
    };
    this._deps = {
      indexedDB: options.indexedDB,
      IDBKeyRange: options.IDBKeyRange
    };
    const {
      addons
    } = options;
    this._dbSchema = {};
    this._versions = [];
    this._storeNames = [];
    this._allTables = {};
    this.idbdb = null;
    this._novip = this;
    const state = {
      dbOpenError: null,
      isBeingOpened: false,
      onReadyBeingFired: null,
      openComplete: false,
      dbReadyResolve: nop,
      dbReadyPromise: null,
      cancelOpen: nop,
      openCanceller: null,
      autoSchema: true,
      PR1398_maxLoop: 3
    };
    state.dbReadyPromise = new DexiePromise(resolve => {
      state.dbReadyResolve = resolve;
    });
    state.openCanceller = new DexiePromise((_, reject) => {
      state.cancelOpen = reject;
    });
    this._state = state;
    this.name = name;
    this.on = Events(this, "populate", "blocked", "versionchange", "close", {
      ready: [promisableChain, nop]
    });
    this.on.ready.subscribe = override(this.on.ready.subscribe, subscribe => {
      return (subscriber, bSticky) => {
        Dexie$1.vip(() => {
          const state2 = this._state;
          if (state2.openComplete) {
            if (!state2.dbOpenError) DexiePromise.resolve().then(subscriber);
            if (bSticky) subscribe(subscriber);
          } else if (state2.onReadyBeingFired) {
            state2.onReadyBeingFired.push(subscriber);
            if (bSticky) subscribe(subscriber);
          } else {
            subscribe(subscriber);
            const db = this;
            if (!bSticky) subscribe(function unsubscribe() {
              db.on.ready.unsubscribe(subscriber);
              db.on.ready.unsubscribe(unsubscribe);
            });
          }
        });
      };
    });
    this.Collection = createCollectionConstructor(this);
    this.Table = createTableConstructor(this);
    this.Transaction = createTransactionConstructor(this);
    this.Version = createVersionConstructor(this);
    this.WhereClause = createWhereClauseConstructor(this);
    this.on("versionchange", ev => {
      if (ev.newVersion > 0) console.warn(`Another connection wants to upgrade database '${this.name}'. Closing db now to resume the upgrade.`);else console.warn(`Another connection wants to delete database '${this.name}'. Closing db now to resume the delete request.`);
      this.close();
    });
    this.on("blocked", ev => {
      if (!ev.newVersion || ev.newVersion < ev.oldVersion) console.warn(`Dexie.delete('${this.name}') was blocked`);else console.warn(`Upgrade '${this.name}' blocked by other connection holding version ${ev.oldVersion / 10}`);
    });
    this._maxKey = getMaxKey(options.IDBKeyRange);
    this._createTransaction = (mode, storeNames, dbschema, parentTransaction) => new this.Transaction(mode, storeNames, dbschema, this._options.chromeTransactionDurability, parentTransaction);
    this._fireOnBlocked = ev => {
      this.on("blocked").fire(ev);
      connections.filter(c => c.name === this.name && c !== this && !c._state.vcFired).map(c => c.on("versionchange").fire(ev));
    };
    this.use(virtualIndexMiddleware);
    this.use(hooksMiddleware);
    this.use(observabilityMiddleware);
    this.use(cacheExistingValuesMiddleware);
    this.vip = Object.create(this, {
      _vip: {
        value: true
      }
    });
    addons.forEach(addon => addon(this));
  }
  version(versionNumber) {
    if (isNaN(versionNumber) || versionNumber < 0.1) throw new exceptions.Type(`Given version is not a positive number`);
    versionNumber = Math.round(versionNumber * 10) / 10;
    if (this.idbdb || this._state.isBeingOpened) throw new exceptions.Schema("Cannot add version when database is open");
    this.verno = Math.max(this.verno, versionNumber);
    const versions = this._versions;
    var versionInstance = versions.filter(v => v._cfg.version === versionNumber)[0];
    if (versionInstance) return versionInstance;
    versionInstance = new this.Version(versionNumber);
    versions.push(versionInstance);
    versions.sort(lowerVersionFirst);
    versionInstance.stores({});
    this._state.autoSchema = false;
    return versionInstance;
  }
  _whenReady(fn) {
    return this.idbdb && (this._state.openComplete || PSD.letThrough || this._vip) ? fn() : new DexiePromise((resolve, reject) => {
      if (this._state.openComplete) {
        return reject(new exceptions.DatabaseClosed(this._state.dbOpenError));
      }
      if (!this._state.isBeingOpened) {
        if (!this._options.autoOpen) {
          reject(new exceptions.DatabaseClosed());
          return;
        }
        this.open().catch(nop);
      }
      this._state.dbReadyPromise.then(resolve, reject);
    }).then(fn);
  }
  use({
    stack,
    create,
    level,
    name
  }) {
    if (name) this.unuse({
      stack,
      name
    });
    const middlewares = this._middlewares[stack] || (this._middlewares[stack] = []);
    middlewares.push({
      stack,
      create,
      level: level == null ? 10 : level,
      name
    });
    middlewares.sort((a, b) => a.level - b.level);
    return this;
  }
  unuse({
    stack,
    name,
    create
  }) {
    if (stack && this._middlewares[stack]) {
      this._middlewares[stack] = this._middlewares[stack].filter(mw => create ? mw.create !== create : name ? mw.name !== name : false);
    }
    return this;
  }
  open() {
    return dexieOpen(this);
  }
  _close() {
    const state = this._state;
    const idx = connections.indexOf(this);
    if (idx >= 0) connections.splice(idx, 1);
    if (this.idbdb) {
      try {
        this.idbdb.close();
      } catch (e) {}
      this._novip.idbdb = null;
    }
    state.dbReadyPromise = new DexiePromise(resolve => {
      state.dbReadyResolve = resolve;
    });
    state.openCanceller = new DexiePromise((_, reject) => {
      state.cancelOpen = reject;
    });
  }
  close() {
    this._close();
    const state = this._state;
    this._options.autoOpen = false;
    state.dbOpenError = new exceptions.DatabaseClosed();
    if (state.isBeingOpened) state.cancelOpen(state.dbOpenError);
  }
  delete() {
    const hasArguments = arguments.length > 0;
    const state = this._state;
    return new DexiePromise((resolve, reject) => {
      const doDelete = () => {
        this.close();
        var req = this._deps.indexedDB.deleteDatabase(this.name);
        req.onsuccess = wrap(() => {
          _onDatabaseDeleted(this._deps, this.name);
          resolve();
        });
        req.onerror = eventRejectHandler(reject);
        req.onblocked = this._fireOnBlocked;
      };
      if (hasArguments) throw new exceptions.InvalidArgument("Arguments not allowed in db.delete()");
      if (state.isBeingOpened) {
        state.dbReadyPromise.then(doDelete);
      } else {
        doDelete();
      }
    });
  }
  backendDB() {
    return this.idbdb;
  }
  isOpen() {
    return this.idbdb !== null;
  }
  hasBeenClosed() {
    const dbOpenError = this._state.dbOpenError;
    return dbOpenError && dbOpenError.name === "DatabaseClosed";
  }
  hasFailed() {
    return this._state.dbOpenError !== null;
  }
  dynamicallyOpened() {
    return this._state.autoSchema;
  }
  get tables() {
    return keys(this._allTables).map(name => this._allTables[name]);
  }
  transaction() {
    const args = extractTransactionArgs.apply(this, arguments);
    return this._transaction.apply(this, args);
  }
  _transaction(mode, tables, scopeFunc) {
    let parentTransaction = PSD.trans;
    if (!parentTransaction || parentTransaction.db !== this || mode.indexOf("!") !== -1) parentTransaction = null;
    const onlyIfCompatible = mode.indexOf("?") !== -1;
    mode = mode.replace("!", "").replace("?", "");
    let idbMode, storeNames;
    try {
      storeNames = tables.map(table => {
        var storeName = table instanceof this.Table ? table.name : table;
        if (typeof storeName !== "string") throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
        return storeName;
      });
      if (mode == "r" || mode === READONLY) idbMode = READONLY;else if (mode == "rw" || mode == READWRITE) idbMode = READWRITE;else throw new exceptions.InvalidArgument("Invalid transaction mode: " + mode);
      if (parentTransaction) {
        if (parentTransaction.mode === READONLY && idbMode === READWRITE) {
          if (onlyIfCompatible) {
            parentTransaction = null;
          } else throw new exceptions.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
        }
        if (parentTransaction) {
          storeNames.forEach(storeName => {
            if (parentTransaction && parentTransaction.storeNames.indexOf(storeName) === -1) {
              if (onlyIfCompatible) {
                parentTransaction = null;
              } else throw new exceptions.SubTransaction("Table " + storeName + " not included in parent transaction.");
            }
          });
        }
        if (onlyIfCompatible && parentTransaction && !parentTransaction.active) {
          parentTransaction = null;
        }
      }
    } catch (e) {
      return parentTransaction ? parentTransaction._promise(null, (_, reject) => {
        reject(e);
      }) : rejection(e);
    }
    const enterTransaction = enterTransactionScope.bind(null, this, idbMode, storeNames, parentTransaction, scopeFunc);
    return parentTransaction ? parentTransaction._promise(idbMode, enterTransaction, "lock") : PSD.trans ? usePSD(PSD.transless, () => this._whenReady(enterTransaction)) : this._whenReady(enterTransaction);
  }
  table(tableName) {
    if (!hasOwn(this._allTables, tableName)) {
      throw new exceptions.InvalidTable(`Table ${tableName} does not exist`);
    }
    return this._allTables[tableName];
  }
};
var symbolObservable = typeof Symbol !== "undefined" && "observable" in Symbol ? Symbol.observable : "@@observable";
var Observable = class {
  constructor(subscribe) {
    this._subscribe = subscribe;
  }
  subscribe(x, error, complete) {
    return this._subscribe(!x || typeof x === "function" ? {
      next: x,
      error,
      complete
    } : x);
  }
  [symbolObservable]() {
    return this;
  }
};
function extendObservabilitySet(target, newSet) {
  keys(newSet).forEach(part => {
    const rangeSet = target[part] || (target[part] = new RangeSet());
    mergeRanges(rangeSet, newSet[part]);
  });
  return target;
}
function liveQuery(querier) {
  let hasValue = false;
  let currentValue = void 0;
  const observable = new Observable(observer => {
    const scopeFuncIsAsync = isAsyncFunction(querier);
    function execute(subscr) {
      if (scopeFuncIsAsync) {
        incrementExpectedAwaits();
      }
      const exec = () => newScope(querier, {
        subscr,
        trans: null
      });
      const rv = PSD.trans ? usePSD(PSD.transless, exec) : exec();
      if (scopeFuncIsAsync) {
        rv.then(decrementExpectedAwaits, decrementExpectedAwaits);
      }
      return rv;
    }
    let closed = false;
    let accumMuts = {};
    let currentObs = {};
    const subscription = {
      get closed() {
        return closed;
      },
      unsubscribe: () => {
        closed = true;
        globalEvents.storagemutated.unsubscribe(mutationListener);
      }
    };
    observer.start && observer.start(subscription);
    let querying = false,
      startedListening = false;
    function shouldNotify() {
      return keys(currentObs).some(key => accumMuts[key] && rangesOverlap(accumMuts[key], currentObs[key]));
    }
    const mutationListener = parts => {
      extendObservabilitySet(accumMuts, parts);
      if (shouldNotify()) {
        doQuery();
      }
    };
    const doQuery = () => {
      if (querying || closed) return;
      accumMuts = {};
      const subscr = {};
      const ret = execute(subscr);
      if (!startedListening) {
        globalEvents(DEXIE_STORAGE_MUTATED_EVENT_NAME, mutationListener);
        startedListening = true;
      }
      querying = true;
      Promise.resolve(ret).then(result => {
        hasValue = true;
        currentValue = result;
        querying = false;
        if (closed) return;
        if (shouldNotify()) {
          doQuery();
        } else {
          accumMuts = {};
          currentObs = subscr;
          observer.next && observer.next(result);
        }
      }, err => {
        querying = false;
        hasValue = false;
        observer.error && observer.error(err);
        subscription.unsubscribe();
      });
    };
    doQuery();
    return subscription;
  });
  observable.hasValue = () => hasValue;
  observable.getValue = () => currentValue;
  return observable;
}
var domDeps;
try {
  domDeps = {
    indexedDB: _global.indexedDB || _global.mozIndexedDB || _global.webkitIndexedDB || _global.msIndexedDB,
    IDBKeyRange: _global.IDBKeyRange || _global.webkitIDBKeyRange
  };
} catch (e) {
  domDeps = {
    indexedDB: null,
    IDBKeyRange: null
  };
}
var Dexie = Dexie$1;
props(Dexie, {
  ...fullNameExceptions,
  delete(databaseName) {
    const db = new Dexie(databaseName, {
      addons: []
    });
    return db.delete();
  },
  exists(name) {
    return new Dexie(name, {
      addons: []
    }).open().then(db => {
      db.close();
      return true;
    }).catch("NoSuchDatabaseError", () => false);
  },
  getDatabaseNames(cb) {
    try {
      return getDatabaseNames(Dexie.dependencies).then(cb);
    } catch (_a) {
      return rejection(new exceptions.MissingAPI());
    }
  },
  defineClass() {
    function Class(content) {
      extend(this, content);
    }
    return Class;
  },
  ignoreTransaction(scopeFunc) {
    return PSD.trans ? usePSD(PSD.transless, scopeFunc) : scopeFunc();
  },
  vip,
  async: function (generatorFn) {
    return function () {
      try {
        var rv = awaitIterator(generatorFn.apply(this, arguments));
        if (!rv || typeof rv.then !== "function") return DexiePromise.resolve(rv);
        return rv;
      } catch (e) {
        return rejection(e);
      }
    };
  },
  spawn: function (generatorFn, args, thiz) {
    try {
      var rv = awaitIterator(generatorFn.apply(thiz, args || []));
      if (!rv || typeof rv.then !== "function") return DexiePromise.resolve(rv);
      return rv;
    } catch (e) {
      return rejection(e);
    }
  },
  currentTransaction: {
    get: () => PSD.trans || null
  },
  waitFor: function (promiseOrFunction, optionalTimeout) {
    const promise = DexiePromise.resolve(typeof promiseOrFunction === "function" ? Dexie.ignoreTransaction(promiseOrFunction) : promiseOrFunction).timeout(optionalTimeout || 6e4);
    return PSD.trans ? PSD.trans.waitFor(promise) : promise;
  },
  Promise: DexiePromise,
  debug: {
    get: () => debug,
    set: value => {
      setDebug(value, value === "dexie" ? () => true : dexieStackFrameFilter);
    }
  },
  derive,
  extend,
  props,
  override,
  Events,
  on: globalEvents,
  liveQuery,
  extendObservabilitySet,
  getByKeyPath,
  setByKeyPath,
  delByKeyPath,
  shallowClone,
  deepClone,
  getObjectDiff,
  cmp,
  asap: asap$1,
  minKey,
  addons: [],
  connections,
  errnames,
  dependencies: domDeps,
  semVer: DEXIE_VERSION,
  version: DEXIE_VERSION.split(".").map(n => parseInt(n)).reduce((p, c, i) => p + c / Math.pow(10, i * 2))
});
Dexie.maxKey = getMaxKey(Dexie.dependencies.IDBKeyRange);
if (typeof dispatchEvent !== "undefined" && typeof addEventListener !== "undefined") {
  globalEvents(DEXIE_STORAGE_MUTATED_EVENT_NAME, updatedParts => {
    if (!propagatingLocally) {
      let event;
      if (isIEOrEdge) {
        event = document.createEvent("CustomEvent");
        event.initCustomEvent(STORAGE_MUTATED_DOM_EVENT_NAME, true, true, updatedParts);
      } else {
        event = new CustomEvent(STORAGE_MUTATED_DOM_EVENT_NAME, {
          detail: updatedParts
        });
      }
      propagatingLocally = true;
      dispatchEvent(event);
      propagatingLocally = false;
    }
  });
  addEventListener(STORAGE_MUTATED_DOM_EVENT_NAME, ({
    detail
  }) => {
    if (!propagatingLocally) {
      propagateLocally(detail);
    }
  });
}
function propagateLocally(updateParts) {
  let wasMe = propagatingLocally;
  try {
    propagatingLocally = true;
    globalEvents.storagemutated.fire(updateParts);
  } finally {
    propagatingLocally = wasMe;
  }
}
var propagatingLocally = false;
if (typeof BroadcastChannel !== "undefined") {
  const bc = new BroadcastChannel(STORAGE_MUTATED_DOM_EVENT_NAME);
  if (typeof bc.unref === "function") {
    bc.unref();
  }
  globalEvents(DEXIE_STORAGE_MUTATED_EVENT_NAME, changedParts => {
    if (!propagatingLocally) {
      bc.postMessage(changedParts);
    }
  });
  bc.onmessage = ev => {
    if (ev.data) propagateLocally(ev.data);
  };
} else if (typeof self !== "undefined" && typeof navigator !== "undefined") {
  globalEvents(DEXIE_STORAGE_MUTATED_EVENT_NAME, changedParts => {
    try {
      if (!propagatingLocally) {
        if (typeof localStorage !== "undefined") {
          localStorage.setItem(STORAGE_MUTATED_DOM_EVENT_NAME, JSON.stringify({
            trig: Math.random(),
            changedParts
          }));
        }
        if (typeof self["clients"] === "object") {
          [...self["clients"].matchAll({
            includeUncontrolled: true
          })].forEach(client => client.postMessage({
            type: STORAGE_MUTATED_DOM_EVENT_NAME,
            changedParts
          }));
        }
      }
    } catch (_a) {}
  });
  if (typeof addEventListener !== "undefined") {
    addEventListener("storage", ev => {
      if (ev.key === STORAGE_MUTATED_DOM_EVENT_NAME) {
        const data = JSON.parse(ev.newValue);
        if (data) propagateLocally(data.changedParts);
      }
    });
  }
  const swContainer = self.document && navigator.serviceWorker;
  if (swContainer) {
    swContainer.addEventListener("message", propagateMessageLocally);
  }
}
function propagateMessageLocally({
  data
}) {
  if (data && data.type === STORAGE_MUTATED_DOM_EVENT_NAME) {
    propagateLocally(data.changedParts);
  }
}
DexiePromise.rejectionMapper = mapError;
setDebug(debug, dexieStackFrameFilter);

// .beyond/uimport/dexie.3.2.4.js
var dexie_3_2_4_default = Dexie$1;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9kZXhpZS4zLjIuNC5qcyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvZ2xvYmFscy9nbG9iYWwudHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2Z1bmN0aW9ucy91dGlscy50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvaGVscGVycy9kZWJ1Zy50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvZXJyb3JzL2Vycm9ycy5qcyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvZnVuY3Rpb25zL2NoYWluaW5nLWZ1bmN0aW9ucy5qcyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvaGVscGVycy9wcm9taXNlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9mdW5jdGlvbnMvdGVtcC10cmFuc2FjdGlvbi50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvZ2xvYmFscy9jb25zdGFudHMudHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2Z1bmN0aW9ucy9jb21iaW5lLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9kYmNvcmUva2V5cmFuZ2UudHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2Z1bmN0aW9ucy93b3JrYXJvdW5kLXVuZGVmaW5lZC1wcmlta2V5LnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9jbGFzc2VzL3RhYmxlL3RhYmxlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9oZWxwZXJzL0V2ZW50cy5qcyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvZnVuY3Rpb25zL21ha2UtY2xhc3MtY29uc3RydWN0b3IudHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2NsYXNzZXMvdGFibGUvdGFibGUtY29uc3RydWN0b3IudHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2NsYXNzZXMvY29sbGVjdGlvbi9jb2xsZWN0aW9uLWhlbHBlcnMudHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2Z1bmN0aW9ucy9jbXAudHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2NsYXNzZXMvY29sbGVjdGlvbi9jb2xsZWN0aW9uLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9jbGFzc2VzL2NvbGxlY3Rpb24vY29sbGVjdGlvbi1jb25zdHJ1Y3Rvci50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvZnVuY3Rpb25zL2NvbXBhcmUtZnVuY3Rpb25zLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9jbGFzc2VzL3doZXJlLWNsYXVzZS93aGVyZS1jbGF1c2UtaGVscGVycy50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvY2xhc3Nlcy93aGVyZS1jbGF1c2Uvd2hlcmUtY2xhdXNlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9jbGFzc2VzL3doZXJlLWNsYXVzZS93aGVyZS1jbGF1c2UtY29uc3RydWN0b3IudHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2Z1bmN0aW9ucy9ldmVudC13cmFwcGVycy50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvZ2xvYmFscy9nbG9iYWwtZXZlbnRzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9jbGFzc2VzL3RyYW5zYWN0aW9uL3RyYW5zYWN0aW9uLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9jbGFzc2VzL3RyYW5zYWN0aW9uL3RyYW5zYWN0aW9uLWNvbnN0cnVjdG9yLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9oZWxwZXJzL2luZGV4LXNwZWMudHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2hlbHBlcnMvdGFibGUtc2NoZW1hLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9mdW5jdGlvbnMvcXVpcmtzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9kYmNvcmUvZ2V0LWtleS1leHRyYWN0b3IudHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2RiY29yZS9kYmNvcmUtaW5kZXhlZGRiLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9jbGFzc2VzL2RleGllL2dlbmVyYXRlLW1pZGRsZXdhcmUtc3RhY2tzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9jbGFzc2VzL3ZlcnNpb24vc2NoZW1hLWhlbHBlcnMudHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2NsYXNzZXMvdmVyc2lvbi92ZXJzaW9uLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9jbGFzc2VzL3ZlcnNpb24vdmVyc2lvbi1jb25zdHJ1Y3Rvci50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvaGVscGVycy9kYXRhYmFzZS1lbnVtZXJhdG9yLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9jbGFzc2VzL2RleGllL3ZpcC50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9ub2RlX21vZHVsZXMvc2FmYXJpLTE0LWlkYi1maXgvZGlzdC9pbmRleC5qcyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvY2xhc3Nlcy9kZXhpZS9kZXhpZS1vcGVuLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9oZWxwZXJzL3lpZWxkLXN1cHBvcnQudHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2NsYXNzZXMvZGV4aWUvdHJhbnNhY3Rpb24taGVscGVycy50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvZGJjb3JlL3ZpcnR1YWwtaW5kZXgtbWlkZGxld2FyZS50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvZnVuY3Rpb25zL2dldC1vYmplY3QtZGlmZi50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvZGJjb3JlL2dldC1lZmZlY3RpdmUta2V5cy50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvaG9va3MvaG9va3MtbWlkZGxld2FyZS50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvZGJjb3JlL2NhY2hlLWV4aXN0aW5nLXZhbHVlcy1taWRkbGV3YXJlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9oZWxwZXJzL3Jhbmdlc2V0LnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9saXZlLXF1ZXJ5L29ic2VydmFiaWxpdHktbWlkZGxld2FyZS50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvY2xhc3Nlcy9kZXhpZS9kZXhpZS50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvY2xhc3Nlcy9vYnNlcnZhYmxlL29ic2VydmFibGUudHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2xpdmUtcXVlcnkvZXh0ZW5kLW9ic2VydmFiaWxpdHktc2V0LnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9saXZlLXF1ZXJ5L2xpdmUtcXVlcnkudHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2NsYXNzZXMvZGV4aWUvZGV4aWUtZG9tLWRlcGVuZGVuY2llcy50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvY2xhc3Nlcy9kZXhpZS9kZXhpZS1zdGF0aWMtcHJvcHMudHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2xpdmUtcXVlcnkvcHJvcGFnYXRlLWxvY2FsbHkudHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2xpdmUtcXVlcnkvZW5hYmxlLWJyb2FkY2FzdC50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvaW5kZXgudHMiXSwibmFtZXMiOlsiZGV4aWVfM18yXzRfZXhwb3J0cyIsIl9fZXhwb3J0IiwiRGV4aWUiLCJEZXhpZSQxIiwiUmFuZ2VTZXQiLCJkZWZhdWx0IiwiZGV4aWVfM18yXzRfZGVmYXVsdCIsImxpdmVRdWVyeSIsIm1lcmdlUmFuZ2VzIiwicmFuZ2VzT3ZlcmxhcCIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJfZ2xvYmFsIiwiZ2xvYmFsVGhpcyIsInNlbGYiLCJ3aW5kb3ciLCJnbG9iYWwiLCJrZXlzIiwiT2JqZWN0IiwiaXNBcnJheSIsIkFycmF5IiwiUHJvbWlzZSIsImV4dGVuZCIsIm9iaiIsImV4dGVuc2lvbiIsImZvckVhY2giLCJrZXkiLCJnZXRQcm90byIsImdldFByb3RvdHlwZU9mIiwiX2hhc093biIsImhhc093blByb3BlcnR5IiwiaGFzT3duIiwicHJvcCIsImNhbGwiLCJwcm9wcyIsInByb3RvIiwiUmVmbGVjdCIsIm93bktleXMiLCJzZXRQcm9wIiwiZGVmaW5lUHJvcGVydHkiLCJmdW5jdGlvbk9yR2V0U2V0Iiwib3B0aW9ucyIsImdldCIsInNldCIsImNvbmZpZ3VyYWJsZSIsInZhbHVlIiwid3JpdGFibGUiLCJkZXJpdmUiLCJDaGlsZCIsImZyb20iLCJQYXJlbnQiLCJwcm90b3R5cGUiLCJjcmVhdGUiLCJiaW5kIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiZ2V0UHJvcGVydHlEZXNjcmlwdG9yIiwicGQiLCJfc2xpY2UiLCJzbGljZSIsImFyZ3MiLCJzdGFydCIsImVuZCIsIm92ZXJyaWRlIiwib3JpZ0Z1bmMiLCJvdmVycmlkZWRGYWN0b3J5IiwiYXNzZXJ0IiwiYiIsIkVycm9yIiwiYXNhcCQxIiwiZm4iLCJzZXRJbW1lZGlhdGUiLCJzZXRUaW1lb3V0IiwiYXJyYXlUb09iamVjdCIsImFycmF5IiwiZXh0cmFjdG9yIiwicmVkdWNlIiwicmVzdWx0IiwiaXRlbSIsImkiLCJuYW1lQW5kVmFsdWUiLCJ0cnlDYXRjaCIsIm9uZXJyb3IiLCJhcHBseSIsImV4IiwiZ2V0QnlLZXlQYXRoIiwia2V5UGF0aCIsInJ2IiwibCIsImxlbmd0aCIsInZhbCIsInB1c2giLCJwZXJpb2QiLCJpbmRleE9mIiwiaW5uZXJPYmoiLCJzdWJzdHIiLCJzZXRCeUtleVBhdGgiLCJpc0Zyb3plbiIsImN1cnJlbnRLZXlQYXRoIiwicmVtYWluaW5nS2V5UGF0aCIsImlzTmFOIiwicGFyc2VJbnQiLCJzcGxpY2UiLCJkZWxCeUtleVBhdGgiLCJtYXAiLCJrcCIsInNoYWxsb3dDbG9uZSIsIm0iLCJjb25jYXQiLCJmbGF0dGVuIiwiYSIsImludHJpbnNpY1R5cGVOYW1lcyIsInNwbGl0IiwibnVtIiwidCIsImZpbHRlciIsImludHJpbnNpY1R5cGVzIiwieCIsImNpcmN1bGFyUmVmcyIsImRlZXBDbG9uZSIsImFueSIsIldlYWtNYXAiLCJpbm5lckRlZXBDbG9uZSIsImNvbnN0cnVjdG9yIiwidG9TdHJpbmciLCJ0b1N0cmluZ1RhZyIsIm8iLCJpdGVyYXRvclN5bWJvbCIsIlN5bWJvbCIsIml0ZXJhdG9yIiwiZ2V0SXRlcmF0b3JPZiIsIk5PX0NIQVJfQVJSQVkiLCJnZXRBcnJheU9mIiwiYXJyYXlMaWtlIiwiaXQiLCJhcmd1bWVudHMiLCJuZXh0IiwiZG9uZSIsImlzQXN5bmNGdW5jdGlvbiIsImRlYnVnIiwibG9jYXRpb24iLCJ0ZXN0IiwiaHJlZiIsInNldERlYnVnIiwibGlicmFyeUZpbHRlciIsIk5FRURTX1RIUk9XX0ZPUl9TVEFDSyIsInN0YWNrIiwiZ2V0RXJyb3JXaXRoU3RhY2siLCJlIiwicHJldHR5U3RhY2siLCJleGNlcHRpb24iLCJudW1JZ25vcmVkRnJhbWVzIiwibmFtZSIsIm1lc3NhZ2UiLCJmcmFtZSIsImpvaW4iLCJkZXhpZUVycm9yTmFtZXMiLCJpZGJEb21FcnJvck5hbWVzIiwiZXJyb3JMaXN0IiwiZGVmYXVsdFRleHRzIiwiVmVyc2lvbkNoYW5nZWQiLCJEYXRhYmFzZUNsb3NlZCIsIkFib3J0IiwiVHJhbnNhY3Rpb25JbmFjdGl2ZSIsIk1pc3NpbmdBUEkiLCJEZXhpZUVycm9yIiwibXNnIiwiX2UiLCJfc3RhY2siLCJnZXRNdWx0aUVycm9yTWVzc2FnZSIsImZhaWx1cmVzIiwidiIsInMiLCJNb2RpZnlFcnJvciIsInN1Y2Nlc3NDb3VudCIsImZhaWxlZEtleXMiLCJCdWxrRXJyb3IiLCJwb3MiLCJmYWlsdXJlc0J5UG9zIiwiZXJybmFtZXMiLCJCYXNlRXhjZXB0aW9uIiwiZXhjZXB0aW9ucyIsImZ1bGxOYW1lIiwiRGV4aWVFcnJvcjIiLCJtc2dPcklubmVyIiwiaW5uZXIiLCJTeW50YXgiLCJTeW50YXhFcnJvciIsIlR5cGUiLCJUeXBlRXJyb3IiLCJSYW5nZSIsIlJhbmdlRXJyb3IiLCJleGNlcHRpb25NYXAiLCJtYXBFcnJvciIsImRvbUVycm9yIiwiZnVsbE5hbWVFeGNlcHRpb25zIiwibm9wIiwibWlycm9yIiwicHVyZUZ1bmN0aW9uQ2hhaW4iLCJmMSIsImYyIiwiY2FsbEJvdGgiLCJvbjEiLCJvbjIiLCJob29rQ3JlYXRpbmdDaGFpbiIsInJlcyIsIm9uc3VjY2VzcyIsInJlczIiLCJob29rRGVsZXRpbmdDaGFpbiIsImhvb2tVcGRhdGluZ0NoYWluIiwibW9kaWZpY2F0aW9ucyIsInJldmVyc2VTdG9wcGFibGVFdmVudENoYWluIiwicHJvbWlzYWJsZUNoYWluIiwidGhlbiIsInRoaXoiLCJJTlRFUk5BTCIsIkxPTkdfU1RBQ0tTX0NMSVBfTElNSVQiLCJNQVhfTE9OR19TVEFDS1MiLCJaT05FX0VDSE9fTElNSVQiLCJyZXNvbHZlZE5hdGl2ZVByb21pc2UiLCJuYXRpdmVQcm9taXNlUHJvdG8iLCJyZXNvbHZlZEdsb2JhbFByb21pc2UiLCJnbG9iYWxQIiwicmVzb2x2ZSIsImNyeXB0byIsInN1YnRsZSIsIm5hdGl2ZVAiLCJkaWdlc3QiLCJVaW50OEFycmF5IiwibmF0aXZlUHJvbWlzZVRoZW4iLCJOYXRpdmVQcm9taXNlIiwicGF0Y2hHbG9iYWxQcm9taXNlIiwic3RhY2tfYmVpbmdfZ2VuZXJhdGVkIiwic2NoZWR1bGVQaHlzaWNhbFRpY2siLCJwaHlzaWNhbFRpY2siLCJNdXRhdGlvbk9ic2VydmVyIiwiaGlkZGVuRGl2IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwib2JzZXJ2ZSIsImF0dHJpYnV0ZXMiLCJzZXRBdHRyaWJ1dGUiLCJhc2FwIiwiY2FsbGJhY2siLCJtaWNyb3RpY2tRdWV1ZSIsIm5lZWRzTmV3UGh5c2ljYWxUaWNrIiwiaXNPdXRzaWRlTWljcm9UaWNrIiwidW5oYW5kbGVkRXJyb3JzIiwicmVqZWN0aW5nRXJyb3JzIiwiY3VycmVudEZ1bGZpbGxlciIsInJlamVjdGlvbk1hcHBlciIsImdsb2JhbFBTRCIsImlkIiwicmVmIiwidW5oYW5kbGVkcyIsIm9udW5oYW5kbGVkIiwiZ2xvYmFsRXJyb3IiLCJwZ3AiLCJlbnYiLCJmaW5hbGl6ZSIsInVoIiwiUFNEIiwibnVtU2NoZWR1bGVkQ2FsbHMiLCJ0aWNrRmluYWxpemVycyIsIkRleGllUHJvbWlzZSIsIl9saXN0ZW5lcnMiLCJvbnVuY2F0Y2hlZCIsIl9saWIiLCJwc2QiLCJfUFNEIiwiX3N0YWNrSG9sZGVyIiwiX3ByZXYiLCJfbnVtUHJldiIsIl9zdGF0ZSIsIl92YWx1ZSIsImhhbmRsZVJlamVjdGlvbiIsImV4ZWN1dGVQcm9taXNlVGFzayIsInRoZW5Qcm9wIiwibWljcm9UYXNrSWQiLCJ0b3RhbEVjaG9lcyIsIm9uRnVsZmlsbGVkIiwib25SZWplY3RlZCIsInBvc3NpYmxlQXdhaXQiLCJjbGVhbnVwIiwiZGVjcmVtZW50RXhwZWN0ZWRBd2FpdHMiLCJyZWplY3QiLCJwcm9wYWdhdGVUb0xpc3RlbmVyIiwiTGlzdGVuZXIiLCJuYXRpdmVBd2FpdENvbXBhdGlibGVXcmFwIiwibGlua1RvUHJldmlvdXNQcm9taXNlIiwiX3RoZW4iLCJjYXRjaCIsInR5cGUyIiwiaGFuZGxlciIsImVyciIsIlByb21pc2VSZWplY3QiLCJmaW5hbGx5Iiwib25GaW5hbGx5Iiwic3RhY2tzIiwiZ2V0U3RhY2siLCJ0aW1lb3V0IiwibXMiLCJJbmZpbml0eSIsImhhbmRsZSIsIlRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJzbmFwU2hvdCIsInpvbmUiLCJhbGwiLCJ2YWx1ZXMiLCJvblBvc3NpYmxlUGFyYWxsZWxsQXN5bmMiLCJyZW1haW5pbmciLCJyYWNlIiwibmV3UFNEIiwibmV3U2NvcGUiLCJ1c2VQU0QiLCJzY2hlZHVsZXIiLCJmb2xsb3ciLCJ6b25lUHJvcHMiLCJyZXNvbHZlMiIsInJlamVjdDIiLCJydW5fYXRfZW5kX29mX3RoaXNfb3JfbmV4dF9waHlzaWNhbF90aWNrIiwiYWxsU2V0dGxlZCIsInBvc3NpYmxlUHJvbWlzZXMiLCJyZXN1bHRzIiwicCIsInN0YXR1cyIsInJlYXNvbiIsIkFnZ3JlZ2F0ZUVycm9yIiwiZmFpbHVyZSIsInByb21pc2UiLCJzaG91bGRFeGVjdXRlVGljayIsImJlZ2luTWljcm9UaWNrU2NvcGUiLCJwcm9wYWdhdGVBbGxMaXN0ZW5lcnMiLCJlbmRNaWNyb1RpY2tTY29wZSIsIl9wcm9taXNlIiwib3JpZ1Byb3AiLCJhZGRQb3NzaWJseVVuaGFuZGxlZEVycm9yIiwibGlzdGVuZXJzIiwibGVuIiwiZmluYWxpemVQaHlzaWNhbFRpY2siLCJsaXN0ZW5lciIsImNiIiwiY2FsbExpc3RlbmVyIiwicmV0IiwibWFya0Vycm9yQXNIYW5kbGVkIiwibGltaXQiLCJlcnJvck5hbWUiLCJwcmV2IiwibnVtUHJldiIsIndhc1Jvb3RFeGVjIiwiY2FsbGJhY2tzIiwidW5oYW5kbGVkRXJycyIsImZpbmFsaXplcnMiLCJmaW5hbGl6ZXIiLCJzb21lIiwid3JhcCIsImVycm9yQ2F0Y2hlciIsIm91dGVyU2NvcGUiLCJzd2l0Y2hUb1pvbmUiLCJ0YXNrIiwiYXdhaXRzIiwiZWNob2VzIiwidGFza0NvdW50ZXIiLCJ6b25lU3RhY2siLCJ6b25lRWNob2VzIiwiem9uZV9pZF9jb3VudGVyIiwicHJvcHMyIiwiYTEiLCJhMiIsInBhcmVudCIsImdsb2JhbEVudiIsIlByb21pc2VQcm9wIiwibnRoZW4iLCJnZXRQYXRjaGVkUHJvbWlzZVRoZW4iLCJndGhlbiIsImluY3JlbWVudEV4cGVjdGVkQXdhaXRzIiwicG9zc2libGVQcm9taXNlIiwicmVqZWN0aW9uIiwiem9uZUVudGVyRWNobyIsInRhcmdldFpvbmUiLCJ6b25lTGVhdmVFY2hvIiwicG9wIiwiYkVudGVyaW5nWm9uZSIsImN1cnJlbnRab25lIiwiZW5xdWV1ZU5hdGl2ZU1pY3JvVGFzayIsIkdsb2JhbFByb21pc2UiLCJ0YXJnZXRFbnYiLCJhMyIsImpvYiIsIm91dGVyWm9uZSIsIm9yaWdUaGVuIiwib25SZXNvbHZlZCIsIlVOSEFORExFRFJFSkVDVElPTiIsImV2ZW50IiwiZXZlbnREYXRhIiwiY3JlYXRlRXZlbnQiLCJpbml0RXZlbnQiLCJDdXN0b21FdmVudCIsImRldGFpbCIsImRpc3BhdGNoRXZlbnQiLCJQcm9taXNlUmVqZWN0aW9uRXZlbnQiLCJvbnVuaGFuZGxlZHJlamVjdGlvbiIsIl8iLCJkZWZhdWx0UHJldmVudGVkIiwiY29uc29sZSIsIndhcm4iLCJ0ZW1wVHJhbnNhY3Rpb24iLCJkYiIsIm1vZGUiLCJzdG9yZU5hbWVzIiwiaWRiZGIiLCJvcGVuQ29tcGxldGUiLCJsZXRUaHJvdWdoIiwiX3ZpcCIsImRiT3BlbkVycm9yIiwiaXNCZWluZ09wZW5lZCIsIl9vcHRpb25zIiwiYXV0b09wZW4iLCJvcGVuIiwiZGJSZWFkeVByb21pc2UiLCJ0cmFucyIsIl9jcmVhdGVUcmFuc2FjdGlvbiIsIl9kYlNjaGVtYSIsIlBSMTM5OF9tYXhMb29wIiwiSW52YWxpZFN0YXRlIiwiaXNPcGVuIiwiX2Nsb3NlIiwiX2NvbXBsZXRpb24iLCJERVhJRV9WRVJTSU9OIiwibWF4U3RyaW5nIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwibWluS2V5IiwiSU5WQUxJRF9LRVlfQVJHVU1FTlQiLCJTVFJJTkdfRVhQRUNURUQiLCJjb25uZWN0aW9ucyIsImlzSUVPckVkZ2UiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJoYXNJRURlbGV0ZU9iamVjdFN0b3JlQnVnIiwiaGFuZ3NPbkRlbGV0ZUxhcmdlS2V5UmFuZ2UiLCJkZXhpZVN0YWNrRnJhbWVGaWx0ZXIiLCJEQk5BTUVTX0RCIiwiUkVBRE9OTFkiLCJSRUFEV1JJVEUiLCJjb21iaW5lIiwiZmlsdGVyMSIsImZpbHRlcjIiLCJBbnlSYW5nZSIsInR5cGUiLCJsb3dlciIsImxvd2VyT3BlbiIsInVwcGVyIiwidXBwZXJPcGVuIiwid29ya2Fyb3VuZEZvclVuZGVmaW5lZFByaW1LZXkiLCJUYWJsZSIsIl90cmFucyIsIndyaXRlTG9ja2VkIiwiX3R4IiwidGFibGVOYW1lIiwiY2hlY2tUYWJsZUluVHJhbnNhY3Rpb24iLCJ0cmFuczIiLCJzY2hlbWEiLCJOb3RGb3VuZCIsImlkYnRyYW5zIiwidHJhbnNsZXNzIiwia2V5T3JDcml0Iiwid2hlcmUiLCJmaXJzdCIsImNvcmUiLCJob29rIiwicmVhZGluZyIsImZpcmUiLCJpbmRleE9yQ3JpdCIsIldoZXJlQ2xhdXNlIiwia2V5UGF0aHMiLCJlcXVhbHMiLCJjb21wb3VuZEluZGV4IiwiaW5kZXhlcyIsInByaW1LZXkiLCJpeCIsImNvbXBvdW5kIiwiZXZlcnkiLCJfbWF4S2V5IiwiSlNPTiIsInN0cmluZ2lmeSIsImlkeEJ5TmFtZSIsImlkYiIsIl9kZXBzIiwiaW5kZXhlZERCIiwiY21wIiwiaWR4IiwiZmlsdGVyRnVuY3Rpb24iLCJwcmV2SW5kZXgiLCJwcmV2RmlsdGVyRm4iLCJpbmRleCIsIm11bHRpIiwidG9Db2xsZWN0aW9uIiwiYW5kIiwiY291bnQiLCJ0aGVuU2hvcnRjdXQiLCJvZmZzZXQiLCJudW1Sb3dzIiwiZWFjaCIsInRvQXJyYXkiLCJDb2xsZWN0aW9uIiwib3JkZXJCeSIsInJldmVyc2UiLCJtYXBUb0NsYXNzIiwibWFwcGVkQ2xhc3MiLCJyZWFkSG9vayIsInVuc3Vic2NyaWJlIiwiZGVmaW5lQ2xhc3MiLCJDbGFzcyIsImNvbnRlbnQiLCJhZGQiLCJhdXRvIiwib2JqVG9BZGQiLCJtdXRhdGUiLCJudW1GYWlsdXJlcyIsImxhc3RSZXN1bHQiLCJ1cGRhdGUiLCJrZXlPck9iamVjdCIsIkludmFsaWRBcmd1bWVudCIsIl9hIiwibW9kaWZ5IiwicHV0IiwiZGVsZXRlIiwiY2xlYXIiLCJyYW5nZSIsImJ1bGtHZXQiLCJrZXlzMiIsImdldE1hbnkiLCJidWxrQWRkIiwib2JqZWN0cyIsImtleXNPck9wdGlvbnMiLCJ3YW50UmVzdWx0cyIsImFsbEtleXMiLCJudW1PYmplY3RzIiwib2JqZWN0c1RvQWRkIiwiYnVsa1B1dCIsIm9iamVjdHNUb1B1dCIsImJ1bGtEZWxldGUiLCJudW1LZXlzIiwiRXZlbnRzIiwiY3R4IiwiZXZzIiwiZXZlbnROYW1lIiwic3Vic2NyaWJlciIsImkyIiwic3Vic2NyaWJlIiwiYWRkRXZlbnRUeXBlIiwiY2hhaW5GdW5jdGlvbiIsImRlZmF1bHRGdW5jdGlvbiIsImFkZENvbmZpZ3VyZWRFdmVudHMiLCJjb250ZXh0Iiwic3Vic2NyaWJlcnMiLCJjZmciLCJhcmdzMiIsImZpcmVFdmVudCIsIm1ha2VDbGFzc0NvbnN0cnVjdG9yIiwiY3JlYXRlVGFibGVDb25zdHJ1Y3RvciIsIlRhYmxlMiIsInRhYmxlU2NoZW1hIiwiX2FsbFRhYmxlcyIsImlzUGxhaW5LZXlSYW5nZSIsImlnbm9yZUxpbWl0RmlsdGVyIiwiYWxnb3JpdGhtIiwib3IiLCJqdXN0TGltaXQiLCJyZXBsYXlGaWx0ZXIiLCJhZGRGaWx0ZXIiLCJhZGRSZXBsYXlGaWx0ZXIiLCJmYWN0b3J5IiwiaXNMaW1pdEZpbHRlciIsImN1cnIiLCJhZGRNYXRjaEZpbHRlciIsImlzTWF0Y2giLCJnZXRJbmRleE9yU3RvcmUiLCJjb3JlU2NoZW1hIiwiaXNQcmltS2V5IiwicHJpbWFyeUtleSIsImdldEluZGV4QnlLZXlQYXRoIiwiU2NoZW1hIiwib3BlbkN1cnNvciIsImNvcmVUYWJsZSIsImtleXNPbmx5IiwiZGlyIiwidW5pcXVlIiwicXVlcnkiLCJpdGVyIiwiY29yZVRyYW5zIiwiaXRlcmF0ZSIsInZhbHVlTWFwcGVyIiwidW5pb24iLCJjdXJzb3IiLCJhZHZhbmNlIiwic3RvcCIsImZhaWwiLCJfaXRlcmF0ZSIsImN1cnNvclByb21pc2UiLCJtYXBwZWRGbiIsImMiLCJ3cmFwcGVkRm4iLCJjb250aW51ZSIsImFkdmFuY2VyIiwidGEiLCJ0YiIsIk5hTiIsImNvbXBhcmVVaW50OEFycmF5cyIsImdldFVpbnQ4QXJyYXkiLCJjb21wYXJlQXJyYXlzIiwiYWwiLCJibCIsIkFycmF5QnVmZmVyIiwiaXNWaWV3IiwidHNUYWciLCJidWZmZXIiLCJieXRlT2Zmc2V0IiwiYnl0ZUxlbmd0aCIsIl9yZWFkIiwiX2N0eCIsImVycm9yIiwidGFibGUiLCJfd3JpdGUiLCJfYWRkQWxnb3JpdGhtIiwiY2xvbmUiLCJyYXciLCJjb3VudDIiLCJNYXRoIiwibWluIiwic29ydEJ5IiwicGFydHMiLCJsYXN0UGFydCIsImxhc3RJbmRleCIsImdldHZhbCIsIm9yZGVyIiwic29ydGVyIiwiYVZhbCIsImJWYWwiLCJzb3J0Iiwib2Zmc2V0TGVmdCIsInJvd3NMZWZ0IiwidW50aWwiLCJiSW5jbHVkZVN0b3BFbnRyeSIsImxhc3QiLCJpbmRleE5hbWUiLCJfb25kaXJlY3Rpb25jaGFuZ2UiLCJkZXNjIiwiZWFjaEtleSIsImVhY2hVbmlxdWVLZXkiLCJlYWNoUHJpbWFyeUtleSIsInByaW1hcnlLZXlzIiwidW5pcXVlS2V5cyIsImZpcnN0S2V5IiwibGFzdEtleSIsImRpc3RpbmN0Iiwic3RyS2V5IiwiZm91bmQiLCJjaGFuZ2VzIiwibW9kaWZ5ZXIiLCJhbnl0aGluZ01vZGlmaWVkIiwib3V0Ym91bmQiLCJleHRyYWN0S2V5IiwibW9kaWZ5Q2h1bmtTaXplIiwidG90YWxGYWlsdXJlcyIsImFwcGx5TXV0YXRlUmVzdWx0IiwiZXhwZWN0ZWRDb3VudCIsIm5leHRDaHVuayIsImNhY2hlIiwiYWRkVmFsdWVzIiwicHV0VmFsdWVzIiwicHV0S2V5cyIsImRlbGV0ZUtleXMiLCJvcmlnVmFsdWUiLCJjdHgyIiwiY3JpdGVyaWEiLCJkZWxldGVDYWxsYmFjayIsImNoYW5nZVNwZWMiLCJjb3JlUmFuZ2UiLCJjcmVhdGVDb2xsZWN0aW9uQ29uc3RydWN0b3IiLCJDb2xsZWN0aW9uMiIsIndoZXJlQ2xhdXNlIiwia2V5UmFuZ2VHZW5lcmF0b3IiLCJrZXlSYW5nZSIsIndoZXJlQ3R4IiwicmVhZGluZ0hvb2siLCJzaW1wbGVDb21wYXJlIiwic2ltcGxlQ29tcGFyZVJldmVyc2UiLCJjb2xsZWN0aW9uT3JXaGVyZUNsYXVzZSIsIlQiLCJjb2xsZWN0aW9uIiwiZW1wdHlDb2xsZWN0aW9uIiwicmFuZ2VFcXVhbCIsInVwcGVyRmFjdG9yeSIsInRvVXBwZXJDYXNlIiwidG9Mb3dlckNhc2UiLCJsb3dlckZhY3RvcnkiLCJuZXh0Q2FzaW5nIiwibG93ZXJLZXkiLCJ1cHBlck5lZWRsZSIsImxvd2VyTmVlZGxlIiwiY21wMiIsImxscCIsImx3cktleUNoYXIiLCJhZGRJZ25vcmVDYXNlQWxnb3JpdGhtIiwibWF0Y2giLCJuZWVkbGVzIiwic3VmZml4IiwiY29tcGFyZSIsInVwcGVyTmVlZGxlcyIsImxvd2VyTmVlZGxlcyIsImRpcmVjdGlvbiIsIm5leHRLZXlTdWZmaXgiLCJuZWVkbGVzTGVuIiwiaW5pdERpcmVjdGlvbiIsIm5lZWRsZUJvdW5kcyIsIm5lZWRsZSIsIm5iIiwiY3JlYXRlUmFuZ2UiLCJkaXJlY3Rpb24yIiwiZmlyc3RQb3NzaWJsZU5lZWRsZSIsImxvd2VzdFBvc3NpYmxlQ2FzaW5nIiwiY2FzaW5nIiwiYmV0d2VlbiIsImluY2x1ZGVMb3dlciIsImluY2x1ZGVVcHBlciIsIl9jbXAiLCJhYm92ZSIsImFib3ZlT3JFcXVhbCIsImJlbG93IiwiYmVsb3dPckVxdWFsIiwic3RhcnRzV2l0aCIsInN0ciIsInN0YXJ0c1dpdGhJZ25vcmVDYXNlIiwiZXF1YWxzSWdub3JlQ2FzZSIsImFueU9mSWdub3JlQ2FzZSIsInN0YXJ0c1dpdGhBbnlPZklnbm9yZUNhc2UiLCJuIiwiYW55T2YiLCJfYXNjZW5kaW5nIiwiX2Rlc2NlbmRpbmciLCJub3RFcXVhbCIsImluQW55UmFuZ2UiLCJpbmNsdWRlTG93ZXJzIiwiaW5jbHVkZVVwcGVycyIsIm5vbmVPZiIsInJhbmdlcyIsImFzY2VuZGluZyIsImRlc2NlbmRpbmciLCJfbWluIiwibWF4IiwiX21heCIsImFkZFJhbmdlMiIsInJhbmdlczIiLCJuZXdSYW5nZSIsInNvcnREaXJlY3Rpb24iLCJyYW5nZVNvcnRlciIsInJhbmdlUG9zIiwia2V5SXNCZXlvbmRDdXJyZW50RW50cnkiLCJrZXlJc0JlZm9yZUN1cnJlbnRFbnRyeSIsImtleVdpdGhpbkN1cnJlbnRSYW5nZSIsImNoZWNrS2V5Iiwic3RhcnRzV2l0aEFueU9mIiwiY3JlYXRlV2hlcmVDbGF1c2VDb25zdHJ1Y3RvciIsIldoZXJlQ2xhdXNlMiIsIm9yQ29sbGVjdGlvbiIsImluZGV4ZWREQjIiLCJfSURCS2V5UmFuZ2UiLCJJREJLZXlSYW5nZSIsImV2ZW50UmVqZWN0SGFuZGxlciIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0Iiwic3RvcFByb3BhZ2F0aW9uIiwiREVYSUVfU1RPUkFHRV9NVVRBVEVEX0VWRU5UX05BTUUiLCJTVE9SQUdFX01VVEFURURfRE9NX0VWRU5UX05BTUUiLCJnbG9iYWxFdmVudHMiLCJUcmFuc2FjdGlvbiIsIl9sb2NrIiwiX3JlY3Vsb2NrIiwibG9ja093bmVyRm9yIiwiX3VubG9jayIsIl9ibG9ja2VkRnVuY3MiLCJfbG9ja2VkIiwiZm5BbmRQU0QiLCJzaGlmdCIsIk9wZW5GYWlsZWQiLCJhY3RpdmUiLCJ0cmFuc2FjdGlvbiIsImR1cmFiaWxpdHkiLCJjaHJvbWVUcmFuc2FjdGlvbkR1cmFiaWxpdHkiLCJldiIsIl9yZWplY3QiLCJvbmFib3J0Iiwib24iLCJvbmNvbXBsZXRlIiwiX3Jlc29sdmUiLCJzdG9yYWdlbXV0YXRlZCIsImJXcml0ZUxvY2siLCJSZWFkT25seSIsInAyIiwiX3Jvb3QiLCJ3YWl0Rm9yIiwicHJvbWlzZUxpa2UiLCJyb290IiwiX3dhaXRpbmdGb3IiLCJfd2FpdGluZ1F1ZXVlIiwic3RvcmUiLCJvYmplY3RTdG9yZSIsInNwaW4iLCJfc3BpbkNvdW50IiwiY3VycmVudFdhaXRQcm9taXNlIiwiYWJvcnQiLCJtZW1vaXplZFRhYmxlcyIsIl9tZW1vaXplZFRhYmxlcyIsInRyYW5zYWN0aW9uQm91bmRUYWJsZSIsImNyZWF0ZVRyYW5zYWN0aW9uQ29uc3RydWN0b3IiLCJUcmFuc2FjdGlvbjIiLCJkYnNjaGVtYSIsImNvbXBsZXRlIiwid2FzQWN0aXZlIiwiY3JlYXRlSW5kZXhTcGVjIiwic3JjIiwibmFtZUZyb21LZXlQYXRoIiwiY3JlYXRlVGFibGVTY2hlbWEiLCJzYWZhcmlNdWx0aVN0b3JlRml4IiwiZ2V0TWF4S2V5IiwiSWRiS2V5UmFuZ2UiLCJvbmx5IiwiZ2V0S2V5RXh0cmFjdG9yIiwiZ2V0U2luZ2xlUGF0aEtleUV4dHJhY3RvciIsImFycmF5aWZ5IiwiX2lkX2NvdW50ZXIiLCJnZXRLZXlQYXRoQWxpYXMiLCJjcmVhdGVEQkNvcmUiLCJ0bXBUcmFucyIsImV4dHJhY3RTY2hlbWEiLCJkYjIiLCJ0YWJsZXMyIiwib2JqZWN0U3RvcmVOYW1lcyIsInRhYmxlcyIsImF1dG9JbmNyZW1lbnQiLCJpbmRleEJ5S2V5UGF0aCIsImlzUHJpbWFyeUtleSIsImluZGV4TmFtZXMiLCJtdWx0aUVudHJ5Iiwia2V5UGF0aDIiLCJjb21wb3VuZDIiLCJyZXN1bHQyIiwiaGFzR2V0QWxsIiwibWFrZUlEQktleVJhbmdlIiwiaWRiUmFuZ2UiLCJ1cHBlckJvdW5kIiwibG93ZXJCb3VuZCIsImJvdW5kIiwiY3JlYXRlRGJDb3JlVGFibGUiLCJpc0FkZE9yUHV0IiwicmVxIiwicmVxcyIsImVycm9ySGFuZGxlciIsImFyZ3MxIiwicmVxMiIsIm9wZW5DdXJzb3IyIiwicXVlcnkyIiwic291cmNlIiwib3BlbktleUN1cnNvciIsIl9fX2lkIiwiX2N1cnNvckNvbnRpbnVlIiwiX2N1cnNvckNvbnRpbnVlUHJpbWFyeUtleSIsImNvbnRpbnVlUHJpbWFyeUtleSIsIl9jdXJzb3JBZHZhbmNlIiwiZG9UaHJvd0N1cnNvcklzTm90U3RhcnRlZCIsImRvVGhyb3dDdXJzb3JJc1N0b3BwZWQiLCJnb3RPbmUiLCJpdGVyYXRpb25Qcm9taXNlIiwicmVzb2x2ZUl0ZXJhdGlvbiIsInJlamVjdEl0ZXJhdGlvbiIsImd1YXJkZWRDYWxsYmFjayIsImV2MiIsImhhc0dldEFsbDIiLCJyZXF1ZXN0Iiwibm9uSW5maW5pdExpbWl0IiwiaWRiS2V5UmFuZ2UiLCJnZXRBbGwiLCJnZXRBbGxLZXlzIiwia2V5Q291bnQiLCJjYWxsYmFja0NvdW50Iiwic3VjY2Vzc0hhbmRsZXIiLCJfcG9zIiwidGFibGVNYXAiLCJNSU5fS0VZIiwiTUFYX0tFWSIsImNyZWF0ZU1pZGRsZXdhcmVTdGFjayIsInN0YWNrSW1wbCIsIm1pZGRsZXdhcmVzIiwiZG93biIsImNyZWF0ZU1pZGRsZXdhcmVTdGFja3MiLCJkYmNvcmUiLCJnZW5lcmF0ZU1pZGRsZXdhcmVTdGFja3MiLCJfbm92aXAiLCJfbWlkZGxld2FyZXMiLCJ0YmwiLCJzZXRBcGlPblBsYWNlIiwib2JqcyIsInRhYmxlTmFtZXMiLCJwcm9wRGVzYyIsImVudW1lcmFibGUiLCJyZW1vdmVUYWJsZXNBcGkiLCJsb3dlclZlcnNpb25GaXJzdCIsIl9jZmciLCJ2ZXJzaW9uIiwicnVuVXBncmFkZXJzIiwib2xkVmVyc2lvbiIsImlkYlVwZ3JhZGVUcmFucyIsImdsb2JhbFNjaGVtYSIsIl9zdG9yZU5hbWVzIiwicmVqZWN0VHJhbnNhY3Rpb24iLCJjcmVhdGVUYWJsZSIsInBvcHVsYXRlIiwidXBkYXRlVGFibGVzQW5kSW5kZXhlcyIsInF1ZXVlIiwidmVyc2lvbnMiLCJfdmVyc2lvbnMiLCJidWlsZEdsb2JhbFNjaGVtYSIsImFueUNvbnRlbnRVcGdyYWRlckhhc1J1biIsInZlcnNUb1J1biIsIm9sZFNjaGVtYSIsIm5ld1NjaGVtYSIsImFkanVzdFRvRXhpc3RpbmdJbmRleE5hbWVzIiwiZGlmZiIsImdldFNjaGVtYURpZmYiLCJ0dXBsZSIsImNoYW5nZSIsInJlY3JlYXRlIiwiVXBncmFkZSIsImFkZEluZGV4IiwiZGVsZXRlSW5kZXgiLCJkZWwiLCJpZHhOYW1lIiwiY29udGVudFVwZ3JhZGUiLCJ1cGdyYWRlU2NoZW1hIiwiY29udGVudFVwZ3JhZGVJc0FzeW5jIiwicmV0dXJuVmFsdWUiLCJwcm9taXNlRm9sbG93ZWQiLCJkZWNyZW1lbnRvciIsImRlbGV0ZVJlbW92ZWRUYWJsZXMiLCJydW5RdWV1ZSIsImNyZWF0ZU1pc3NpbmdUYWJsZXMiLCJvbGREZWYiLCJuZXdEZWYiLCJkZWYiLCJvbGRJbmRleGVzIiwibmV3SW5kZXhlcyIsIm9sZElkeCIsIm5ld0lkeCIsImNyZWF0ZU9iamVjdFN0b3JlIiwiY29udGFpbnMiLCJzdG9yZU5hbWUiLCJkZWxldGVPYmplY3RTdG9yZSIsImNyZWF0ZUluZGV4IiwiZGJTdG9yZU5hbWVzIiwiaiIsImlkYmluZGV4IiwicmVhZEdsb2JhbFNjaGVtYSIsInZlcm5vIiwidmVyaWZ5SW5zdGFsbGVkU2NoZW1hIiwiaW5zdGFsbGVkU2NoZW1hIiwiY2giLCJfaGFzR2V0QWxsIiwiZGV4aWVOYW1lIiwiaW5kZXhTcGVjIiwiV29ya2VyR2xvYmFsU2NvcGUiLCJwYXJzZUluZGV4U3ludGF4IiwicHJpbUtleUFuZEluZGV4ZXMiLCJpbmRleE51bSIsInRyaW0iLCJyZXBsYWNlIiwiVmVyc2lvbiIsIl9wYXJzZVN0b3Jlc1NwZWMiLCJzdG9yZXMiLCJvdXRTY2hlbWEiLCJzdG9yZXNTb3VyY2UiLCJzdG9yZXNTcGVjIiwidXBncmFkZSIsInVwZ3JhZGVGdW5jdGlvbiIsImNyZWF0ZVZlcnNpb25Db25zdHJ1Y3RvciIsIlZlcnNpb24yIiwidmVyc2lvbk51bWJlciIsImdldERiTmFtZXNUYWJsZSIsImRiTmFtZXNEQiIsImFkZG9ucyIsImRibmFtZXMiLCJoYXNEYXRhYmFzZXNOYXRpdmUiLCJkYXRhYmFzZXMiLCJnZXREYXRhYmFzZU5hbWVzIiwiaW5mb3MiLCJpbmZvIiwiX29uRGF0YWJhc2VDcmVhdGVkIiwiX29uRGF0YWJhc2VEZWxldGVkIiwidmlwIiwiaWRiUmVhZHkiLCJpc1NhZmFyaSIsInVzZXJBZ2VudERhdGEiLCJpbnRlcnZhbElkIiwidHJ5SWRiIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwiZGV4aWVPcGVuIiwic3RhdGUiLCJvcGVuQ2FuY2VsbGVyIiwidGhyb3dJZkNhbmNlbGxlZCIsInJlc29sdmVEYlJlYWR5IiwiZGJSZWFkeVJlc29sdmUiLCJ1cGdyYWRlVHJhbnNhY3Rpb24iLCJ3YXNDcmVhdGVkIiwiZGJOYW1lIiwiYXV0b1NjaGVtYSIsInJvdW5kIiwib25ibG9ja2VkIiwiX2ZpcmVPbkJsb2NrZWQiLCJvbnVwZ3JhZGVuZWVkZWQiLCJhbGxvd0VtcHR5REIiLCJjbG9zZSIsImRlbHJlcSIsImRlbGV0ZURhdGFiYXNlIiwiTm9TdWNoRGF0YWJhc2UiLCJvbGRWZXIiLCJwb3ciLCJvbnZlcnNpb25jaGFuZ2UiLCJ2Y0ZpcmVkIiwib25jbG9zZSIsIm9uUmVhZHlCZWluZ0ZpcmVkIiwicmVhZHkiLCJmaXJlUmVtYWluZGVycyIsInJlbWFpbmRlcnMiLCJhd2FpdEl0ZXJhdG9yIiwiY2FsbE5leHQiLCJkb1Rocm93IiwidGhyb3ciLCJvblN1Y2Nlc3MiLCJzdGVwIiwib25FcnJvciIsImdldE5leHQiLCJleHRyYWN0VHJhbnNhY3Rpb25BcmdzIiwiX3RhYmxlQXJnc18iLCJzY29wZUZ1bmMiLCJlbnRlclRyYW5zYWN0aW9uU2NvcGUiLCJwYXJlbnRUcmFuc2FjdGlvbiIsInNjb3BlRnVuY0lzQXN5bmMiLCJQcmVtYXR1cmVDb21taXQiLCJwYWQiLCJjcmVhdGVWaXJ0dWFsSW5kZXhNaWRkbGV3YXJlIiwiaW5kZXhMb29rdXAiLCJhbGxWaXJ0dWFsSW5kZXhlcyIsImFkZFZpcnR1YWxJbmRleGVzIiwia2V5VGFpbCIsImxvd0xldmVsSW5kZXgiLCJrZXlQYXRoQWxpYXMiLCJpbmRleExpc3QiLCJrZXlMZW5ndGgiLCJpc1ZpcnR1YWwiLCJ2aXJ0dWFsSW5kZXgiLCJ2aXJ0dWFsS2V5UGF0aCIsImZpbmRCZXN0SW5kZXgiLCJ0cmFuc2xhdGVSYW5nZSIsInRyYW5zbGF0ZVJlcXVlc3QiLCJjcmVhdGVWaXJ0dWFsQ3Vyc29yIiwiX2NvbnRpbnVlIiwidmlydHVhbEN1cnNvciIsInByaW1hcnlLZXkyIiwidmlydHVhbEluZGV4TWlkZGxld2FyZSIsImxldmVsIiwiZ2V0T2JqZWN0RGlmZiIsInByZngiLCJhcCIsImJwIiwiYXBUeXBlTmFtZSIsImJwVHlwZU5hbWUiLCJnZXRFZmZlY3RpdmVLZXlzIiwiaG9va3NNaWRkbGV3YXJlIiwiZG93bkNvcmUiLCJkb3duVGFibGUiLCJ0YWJsZU1pZGRsZXdhcmUiLCJkeFRyYW5zIiwiZGVsZXRpbmciLCJjcmVhdGluZyIsInVwZGF0aW5nIiwiYWRkUHV0T3JEZWxldGUiLCJkZWxldGVSYW5nZSIsImR4VHJhbnMyIiwiZ2V0RXhpc3RpbmdWYWx1ZXMiLCJleGlzdGluZ1ZhbHVlcyIsImNvbnRleHRzIiwiZXhpc3RpbmdWYWx1ZSIsImdlbmVyYXRlZFByaW1hcnlLZXkiLCJvYmplY3REaWZmIiwiYWRkaXRpb25hbENoYW5nZXMiLCJyZXF1ZXN0ZWRWYWx1ZSIsImRlbGV0ZU5leHRDaHVuayIsImVmZmVjdGl2ZUtleXMiLCJnZXRGcm9tVHJhbnNhY3Rpb25DYWNoZSIsImNhY2hlRXhpc3RpbmdWYWx1ZXNNaWRkbGV3YXJlIiwiY2FjaGVkUmVzdWx0IiwiaXNFbXB0eVJhbmdlIiwibm9kZSIsImZyb21PclRyZWUiLCJ0byIsImQiLCJyYW5nZVNldCIsImFkZEtleSIsImFkZFJhbmdlIiwiYWRkS2V5cyIsImdldFJhbmdlU2V0SXRlcmF0b3IiLCJsZWZ0IiwicmlnaHQiLCJyIiwicmViYWxhbmNlIiwicmlnaHRXYXNDdXRPZmYiLCJuZXdTZXQiLCJfYWRkUmFuZ2VTZXQiLCJ0YXJnZXQyIiwicmFuZ2VTZXQxIiwicmFuZ2VTZXQyIiwiaTEiLCJuZXh0UmVzdWx0MSIsIm5leHRSZXN1bHQyIiwia2V5UHJvdmlkZWQiLCJ1cCIsIl9iIiwicm9vdENsb25lIiwib2xkUm9vdFJpZ2h0IiwiY29tcHV0ZURlcHRoIiwib2JzZXJ2YWJpbGl0eU1pZGRsZXdhcmUiLCJGVUxMX1JBTkdFIiwidGFibGVDbG9uZSIsIm11dGF0ZWRQYXJ0cyIsImdldFJhbmdlU2V0IiwicGFydCIsInBrUmFuZ2VTZXQiLCJkZWxzUmFuZ2VTZXQiLCJuZXdPYmpzIiwib2xkQ2FjaGUiLCJvbGRPYmpzIiwidHJhY2tBZmZlY3RlZEluZGV4ZXMiLCJnZXRSYW5nZSIsInJlYWRTdWJzY3JpYmVycyIsIm1ldGhvZCIsInN1YnNjciIsInF1ZXJpZWRJbmRleCIsInF1ZXJpZWRSYW5nZXMiLCJrZXlzUHJvbWlzZSIsInJlc3VsdGluZ0tleXMiLCJwS2V5cyIsIndhbnRWYWx1ZXMiLCJwa2V5IiwiYWRkQWZmZWN0ZWRJbmRleCIsImFkZEtleU9yS2V5cyIsImtleTIiLCJvbGRLZXkiLCJuZXdLZXkiLCJkZXBzIiwiZGVwZW5kZW5jaWVzIiwiY2FuY2VsT3BlbiIsImJTdGlja3kiLCJzdGF0ZTIiLCJuZXdWZXJzaW9uIiwidXNlIiwiYWRkb24iLCJ2ZXJzaW9uSW5zdGFuY2UiLCJfd2hlblJlYWR5IiwidW51c2UiLCJtdyIsImhhc0FyZ3VtZW50cyIsImRvRGVsZXRlIiwiYmFja2VuZERCIiwiaGFzQmVlbkNsb3NlZCIsImhhc0ZhaWxlZCIsImR5bmFtaWNhbGx5T3BlbmVkIiwiX3RyYW5zYWN0aW9uIiwib25seUlmQ29tcGF0aWJsZSIsImlkYk1vZGUiLCJTdWJUcmFuc2FjdGlvbiIsImVudGVyVHJhbnNhY3Rpb24iLCJJbnZhbGlkVGFibGUiLCJzeW1ib2xPYnNlcnZhYmxlIiwib2JzZXJ2YWJsZSIsIk9ic2VydmFibGUiLCJfc3Vic2NyaWJlIiwiZXh0ZW5kT2JzZXJ2YWJpbGl0eVNldCIsInF1ZXJpZXIiLCJoYXNWYWx1ZSIsImN1cnJlbnRWYWx1ZSIsIm9ic2VydmVyIiwiZXhlY3V0ZSIsImV4ZWMiLCJjbG9zZWQiLCJhY2N1bU11dHMiLCJjdXJyZW50T2JzIiwic3Vic2NyaXB0aW9uIiwibXV0YXRpb25MaXN0ZW5lciIsInF1ZXJ5aW5nIiwic3RhcnRlZExpc3RlbmluZyIsInNob3VsZE5vdGlmeSIsImRvUXVlcnkiLCJnZXRWYWx1ZSIsImRvbURlcHMiLCJtb3pJbmRleGVkREIiLCJ3ZWJraXRJbmRleGVkREIiLCJtc0luZGV4ZWREQiIsIndlYmtpdElEQktleVJhbmdlIiwiZGF0YWJhc2VOYW1lIiwiZXhpc3RzIiwiaWdub3JlVHJhbnNhY3Rpb24iLCJhc3luYyIsImdlbmVyYXRvckZuIiwic3Bhd24iLCJjdXJyZW50VHJhbnNhY3Rpb24iLCJwcm9taXNlT3JGdW5jdGlvbiIsIm9wdGlvbmFsVGltZW91dCIsInNlbVZlciIsIm1heEtleSIsImFkZEV2ZW50TGlzdGVuZXIiLCJ1cGRhdGVkUGFydHMiLCJwcm9wYWdhdGluZ0xvY2FsbHkiLCJpbml0Q3VzdG9tRXZlbnQiLCJwcm9wYWdhdGVMb2NhbGx5IiwidXBkYXRlUGFydHMiLCJ3YXNNZSIsIkJyb2FkY2FzdENoYW5uZWwiLCJiYyIsInVucmVmIiwiY2hhbmdlZFBhcnRzIiwicG9zdE1lc3NhZ2UiLCJvbm1lc3NhZ2UiLCJkYXRhIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInRyaWciLCJyYW5kb20iLCJtYXRjaEFsbCIsImluY2x1ZGVVbmNvbnRyb2xsZWQiLCJjbGllbnQiLCJwYXJzZSIsIm5ld1ZhbHVlIiwic3dDb250YWluZXIiLCJzZXJ2aWNlV29ya2VyIiwicHJvcGFnYXRlTWVzc2FnZUxvY2FsbHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLG1CQUFBO0FBQUFDLFFBQUEsQ0FBQUQsbUJBQUE7RUFBQUUsS0FBQSxFQUFBQSxDQUFBLEtBQUFDLE9BQUE7RUFBQUMsUUFBQSxFQUFBQSxDQUFBLEtBQUFBLFFBQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFDLG1CQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLFdBQUEsRUFBQUEsQ0FBQSxLQUFBQSxXQUFBO0VBQUFDLGFBQUEsRUFBQUEsQ0FBQSxLQUFBQTtBQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUFaLG1CQUFBOzs7QUNDTyxJQUFNYSxPQUFBLEdBQ1QsT0FBT0MsVUFBQSxLQUFlLGNBQWNBLFVBQUEsR0FDcEMsT0FBT0MsSUFBQSxLQUFTLGNBQWNBLElBQUEsR0FDOUIsT0FBT0MsTUFBQSxLQUFXLGNBQWNBLE1BQUEsR0FDaENDLE1BQUE7QUNKRyxJ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