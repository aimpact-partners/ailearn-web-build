System.register([], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["swiper","10.3.1"]]);
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

// .beyond/uimport/swiper.10.3.1.js
var swiper_10_3_1_exports = {};
__export(swiper_10_3_1_exports, {
  Swiper: () => Swiper,
  default: () => swiper_10_3_1_default
});
module.exports = __toCommonJS(swiper_10_3_1_exports);

// node_modules/swiper/shared/ssr-window.esm.mjs
function isObject(obj) {
  return obj !== null && typeof obj === "object" && "constructor" in obj && obj.constructor === Object;
}
function extend(target, src) {
  if (target === void 0) {
    target = {};
  }
  if (src === void 0) {
    src = {};
  }
  Object.keys(src).forEach(key => {
    if (typeof target[key] === "undefined") target[key] = src[key];else if (isObject(src[key]) && isObject(target[key]) && Object.keys(src[key]).length > 0) {
      extend(target[key], src[key]);
    }
  });
}
var ssrDocument = {
  body: {},
  addEventListener() {},
  removeEventListener() {},
  activeElement: {
    blur() {},
    nodeName: ""
  },
  querySelector() {
    return null;
  },
  querySelectorAll() {
    return [];
  },
  getElementById() {
    return null;
  },
  createEvent() {
    return {
      initEvent() {}
    };
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName() {
        return [];
      }
    };
  },
  createElementNS() {
    return {};
  },
  importNode() {
    return null;
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: ""
  }
};
function getDocument() {
  const doc = typeof document !== "undefined" ? document : {};
  extend(doc, ssrDocument);
  return doc;
}
var ssrWindow = {
  document: ssrDocument,
  navigator: {
    userAgent: ""
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: ""
  },
  history: {
    replaceState() {},
    pushState() {},
    go() {},
    back() {}
  },
  CustomEvent: function CustomEvent() {
    return this;
  },
  addEventListener() {},
  removeEventListener() {},
  getComputedStyle() {
    return {
      getPropertyValue() {
        return "";
      }
    };
  },
  Image() {},
  Date() {},
  screen: {},
  setTimeout() {},
  clearTimeout() {},
  matchMedia() {
    return {};
  },
  requestAnimationFrame(callback) {
    if (typeof setTimeout === "undefined") {
      callback();
      return null;
    }
    return setTimeout(callback, 0);
  },
  cancelAnimationFrame(id) {
    if (typeof setTimeout === "undefined") {
      return;
    }
    clearTimeout(id);
  }
};
function getWindow() {
  const win = typeof window !== "undefined" ? window : {};
  extend(win, ssrWindow);
  return win;
}

// node_modules/swiper/shared/utils.mjs
function deleteProps(obj) {
  const object = obj;
  Object.keys(object).forEach(key => {
    try {
      object[key] = null;
    } catch (e) {}
    try {
      delete object[key];
    } catch (e) {}
  });
}
function nextTick(callback, delay) {
  if (delay === void 0) {
    delay = 0;
  }
  return setTimeout(callback, delay);
}
function now() {
  return Date.now();
}
function getComputedStyle2(el) {
  const window2 = getWindow();
  let style;
  if (window2.getComputedStyle) {
    style = window2.getComputedStyle(el, null);
  }
  if (!style && el.currentStyle) {
    style = el.currentStyle;
  }
  if (!style) {
    style = el.style;
  }
  return style;
}
function getTranslate(el, axis) {
  if (axis === void 0) {
    axis = "x";
  }
  const window2 = getWindow();
  let matrix;
  let curTransform;
  let transformMatrix;
  const curStyle = getComputedStyle2(el);
  if (window2.WebKitCSSMatrix) {
    curTransform = curStyle.transform || curStyle.webkitTransform;
    if (curTransform.split(",").length > 6) {
      curTransform = curTransform.split(", ").map(a => a.replace(",", ".")).join(", ");
    }
    transformMatrix = new window2.WebKitCSSMatrix(curTransform === "none" ? "" : curTransform);
  } else {
    transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,");
    matrix = transformMatrix.toString().split(",");
  }
  if (axis === "x") {
    if (window2.WebKitCSSMatrix) curTransform = transformMatrix.m41;else if (matrix.length === 16) curTransform = parseFloat(matrix[12]);else curTransform = parseFloat(matrix[4]);
  }
  if (axis === "y") {
    if (window2.WebKitCSSMatrix) curTransform = transformMatrix.m42;else if (matrix.length === 16) curTransform = parseFloat(matrix[13]);else curTransform = parseFloat(matrix[5]);
  }
  return curTransform || 0;
}
function isObject2(o) {
  return typeof o === "object" && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === "Object";
}
function isNode(node) {
  if (typeof window !== "undefined" && typeof window.HTMLElement !== "undefined") {
    return node instanceof HTMLElement;
  }
  return node && (node.nodeType === 1 || node.nodeType === 11);
}
function extend2() {
  const to = Object(arguments.length <= 0 ? void 0 : arguments[0]);
  const noExtend = ["__proto__", "constructor", "prototype"];
  for (let i = 1; i < arguments.length; i += 1) {
    const nextSource = i < 0 || arguments.length <= i ? void 0 : arguments[i];
    if (nextSource !== void 0 && nextSource !== null && !isNode(nextSource)) {
      const keysArray = Object.keys(Object(nextSource)).filter(key => noExtend.indexOf(key) < 0);
      for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
        const nextKey = keysArray[nextIndex];
        const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
        if (desc !== void 0 && desc.enumerable) {
          if (isObject2(to[nextKey]) && isObject2(nextSource[nextKey])) {
            if (nextSource[nextKey].__swiper__) {
              to[nextKey] = nextSource[nextKey];
            } else {
              extend2(to[nextKey], nextSource[nextKey]);
            }
          } else if (!isObject2(to[nextKey]) && isObject2(nextSource[nextKey])) {
            to[nextKey] = {};
            if (nextSource[nextKey].__swiper__) {
              to[nextKey] = nextSource[nextKey];
            } else {
              extend2(to[nextKey], nextSource[nextKey]);
            }
          } else {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
    }
  }
  return to;
}
function setCSSProperty(el, varName, varValue) {
  el.style.setProperty(varName, varValue);
}
function animateCSSModeScroll(_ref) {
  let {
    swiper,
    targetPosition,
    side
  } = _ref;
  const window2 = getWindow();
  const startPosition = -swiper.translate;
  let startTime = null;
  let time;
  const duration = swiper.params.speed;
  swiper.wrapperEl.style.scrollSnapType = "none";
  window2.cancelAnimationFrame(swiper.cssModeFrameID);
  const dir = targetPosition > startPosition ? "next" : "prev";
  const isOutOfBound = (current, target) => {
    return dir === "next" && current >= target || dir === "prev" && current <= target;
  };
  const animate = () => {
    time = (/* @__PURE__ */new Date()).getTime();
    if (startTime === null) {
      startTime = time;
    }
    const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
    const easeProgress = 0.5 - Math.cos(progress * Math.PI) / 2;
    let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);
    if (isOutOfBound(currentPosition, targetPosition)) {
      currentPosition = targetPosition;
    }
    swiper.wrapperEl.scrollTo({
      [side]: currentPosition
    });
    if (isOutOfBound(currentPosition, targetPosition)) {
      swiper.wrapperEl.style.overflow = "hidden";
      swiper.wrapperEl.style.scrollSnapType = "";
      setTimeout(() => {
        swiper.wrapperEl.style.overflow = "";
        swiper.wrapperEl.scrollTo({
          [side]: currentPosition
        });
      });
      window2.cancelAnimationFrame(swiper.cssModeFrameID);
      return;
    }
    swiper.cssModeFrameID = window2.requestAnimationFrame(animate);
  };
  animate();
}
function getSlideTransformEl(slideEl) {
  return slideEl.querySelector(".swiper-slide-transform") || slideEl.shadowRoot && slideEl.shadowRoot.querySelector(".swiper-slide-transform") || slideEl;
}
function elementChildren(element, selector) {
  if (selector === void 0) {
    selector = "";
  }
  return [...element.children].filter(el => el.matches(selector));
}
function createElement(tag, classes2) {
  if (classes2 === void 0) {
    classes2 = [];
  }
  const el = document.createElement(tag);
  el.classList.add(...(Array.isArray(classes2) ? classes2 : [classes2]));
  return el;
}
function elementOffset(el) {
  const window2 = getWindow();
  const document2 = getDocument();
  const box = el.getBoundingClientRect();
  const body = document2.body;
  const clientTop = el.clientTop || body.clientTop || 0;
  const clientLeft = el.clientLeft || body.clientLeft || 0;
  const scrollTop = el === window2 ? window2.scrollY : el.scrollTop;
  const scrollLeft = el === window2 ? window2.scrollX : el.scrollLeft;
  return {
    top: box.top + scrollTop - clientTop,
    left: box.left + scrollLeft - clientLeft
  };
}
function elementPrevAll(el, selector) {
  const prevEls = [];
  while (el.previousElementSibling) {
    const prev = el.previousElementSibling;
    if (selector) {
      if (prev.matches(selector)) prevEls.push(prev);
    } else prevEls.push(prev);
    el = prev;
  }
  return prevEls;
}
function elementNextAll(el, selector) {
  const nextEls = [];
  while (el.nextElementSibling) {
    const next = el.nextElementSibling;
    if (selector) {
      if (next.matches(selector)) nextEls.push(next);
    } else nextEls.push(next);
    el = next;
  }
  return nextEls;
}
function elementStyle(el, prop) {
  const window2 = getWindow();
  return window2.getComputedStyle(el, null).getPropertyValue(prop);
}
function elementIndex(el) {
  let child = el;
  let i;
  if (child) {
    i = 0;
    while ((child = child.previousSibling) !== null) {
      if (child.nodeType === 1) i += 1;
    }
    return i;
  }
  return void 0;
}
function elementParents(el, selector) {
  const parents = [];
  let parent = el.parentElement;
  while (parent) {
    if (selector) {
      if (parent.matches(selector)) parents.push(parent);
    } else {
      parents.push(parent);
    }
    parent = parent.parentElement;
  }
  return parents;
}
function elementTransitionEnd(el, callback) {
  function fireCallBack(e) {
    if (e.target !== el) return;
    callback.call(el, e);
    el.removeEventListener("transitionend", fireCallBack);
  }
  if (callback) {
    el.addEventListener("transitionend", fireCallBack);
  }
}
function elementOuterSize(el, size, includeMargins) {
  const window2 = getWindow();
  if (includeMargins) {
    return el[size === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(window2.getComputedStyle(el, null).getPropertyValue(size === "width" ? "margin-right" : "margin-top")) + parseFloat(window2.getComputedStyle(el, null).getPropertyValue(size === "width" ? "margin-left" : "margin-bottom"));
  }
  return el.offsetWidth;
}

// node_modules/swiper/shared/swiper-core.mjs
var support;
function calcSupport() {
  const window2 = getWindow();
  const document2 = getDocument();
  return {
    smoothScroll: document2.documentElement && document2.documentElement.style && "scrollBehavior" in document2.documentElement.style,
    touch: !!("ontouchstart" in window2 || window2.DocumentTouch && document2 instanceof window2.DocumentTouch)
  };
}
function getSupport() {
  if (!support) {
    support = calcSupport();
  }
  return support;
}
var deviceCached;
function calcDevice(_temp) {
  let {
    userAgent
  } = _temp === void 0 ? {} : _temp;
  const support2 = getSupport();
  const window2 = getWindow();
  const platform = window2.navigator.platform;
  const ua = userAgent || window2.navigator.userAgent;
  const device = {
    ios: false,
    android: false
  };
  const screenWidth = window2.screen.width;
  const screenHeight = window2.screen.height;
  const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
  let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
  const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
  const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
  const windows = platform === "Win32";
  let macos = platform === "MacIntel";
  const iPadScreens = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
  if (!ipad && macos && support2.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0) {
    ipad = ua.match(/(Version)\/([\d.]+)/);
    if (!ipad) ipad = [0, 1, "13_0_0"];
    macos = false;
  }
  if (android && !windows) {
    device.os = "android";
    device.android = true;
  }
  if (ipad || iphone || ipod) {
    device.os = "ios";
    device.ios = true;
  }
  return device;
}
function getDevice(overrides) {
  if (overrides === void 0) {
    overrides = {};
  }
  if (!deviceCached) {
    deviceCached = calcDevice(overrides);
  }
  return deviceCached;
}
var browser;
function calcBrowser() {
  const window2 = getWindow();
  let needPerspectiveFix = false;
  function isSafari() {
    const ua = window2.navigator.userAgent.toLowerCase();
    return ua.indexOf("safari") >= 0 && ua.indexOf("chrome") < 0 && ua.indexOf("android") < 0;
  }
  if (isSafari()) {
    const ua = String(window2.navigator.userAgent);
    if (ua.includes("Version/")) {
      const [major, minor] = ua.split("Version/")[1].split(" ")[0].split(".").map(num => Number(num));
      needPerspectiveFix = major < 16 || major === 16 && minor < 2;
    }
  }
  return {
    isSafari: needPerspectiveFix || isSafari(),
    needPerspectiveFix,
    isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window2.navigator.userAgent)
  };
}
function getBrowser() {
  if (!browser) {
    browser = calcBrowser();
  }
  return browser;
}
function Resize(_ref) {
  let {
    swiper,
    on,
    emit
  } = _ref;
  const window2 = getWindow();
  let observer = null;
  let animationFrame = null;
  const resizeHandler = () => {
    if (!swiper || swiper.destroyed || !swiper.initialized) return;
    emit("beforeResize");
    emit("resize");
  };
  const createObserver = () => {
    if (!swiper || swiper.destroyed || !swiper.initialized) return;
    observer = new ResizeObserver(entries => {
      animationFrame = window2.requestAnimationFrame(() => {
        const {
          width,
          height
        } = swiper;
        let newWidth = width;
        let newHeight = height;
        entries.forEach(_ref2 => {
          let {
            contentBoxSize,
            contentRect,
            target
          } = _ref2;
          if (target && target !== swiper.el) return;
          newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
          newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
        });
        if (newWidth !== width || newHeight !== height) {
          resizeHandler();
        }
      });
    });
    observer.observe(swiper.el);
  };
  const removeObserver = () => {
    if (animationFrame) {
      window2.cancelAnimationFrame(animationFrame);
    }
    if (observer && observer.unobserve && swiper.el) {
      observer.unobserve(swiper.el);
      observer = null;
    }
  };
  const orientationChangeHandler = () => {
    if (!swiper || swiper.destroyed || !swiper.initialized) return;
    emit("orientationchange");
  };
  on("init", () => {
    if (swiper.params.resizeObserver && typeof window2.ResizeObserver !== "undefined") {
      createObserver();
      return;
    }
    window2.addEventListener("resize", resizeHandler);
    window2.addEventListener("orientationchange", orientationChangeHandler);
  });
  on("destroy", () => {
    removeObserver();
    window2.removeEventListener("resize", resizeHandler);
    window2.removeEventListener("orientationchange", orientationChangeHandler);
  });
}
function Observer(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  const observers = [];
  const window2 = getWindow();
  const attach = function (target, options) {
    if (options === void 0) {
      options = {};
    }
    const ObserverFunc = window2.MutationObserver || window2.WebkitMutationObserver;
    const observer = new ObserverFunc(mutations => {
      if (swiper.__preventObserver__) return;
      if (mutations.length === 1) {
        emit("observerUpdate", mutations[0]);
        return;
      }
      const observerUpdate = function observerUpdate2() {
        emit("observerUpdate", mutations[0]);
      };
      if (window2.requestAnimationFrame) {
        window2.requestAnimationFrame(observerUpdate);
      } else {
        window2.setTimeout(observerUpdate, 0);
      }
    });
    observer.observe(target, {
      attributes: typeof options.attributes === "undefined" ? true : options.attributes,
      childList: typeof options.childList === "undefined" ? true : options.childList,
      characterData: typeof options.characterData === "undefined" ? true : options.characterData
    });
    observers.push(observer);
  };
  const init = () => {
    if (!swiper.params.observer) return;
    if (swiper.params.observeParents) {
      const containerParents = elementParents(swiper.hostEl);
      for (let i = 0; i < containerParents.length; i += 1) {
        attach(containerParents[i]);
      }
    }
    attach(swiper.hostEl, {
      childList: swiper.params.observeSlideChildren
    });
    attach(swiper.wrapperEl, {
      attributes: false
    });
  };
  const destroy = () => {
    observers.forEach(observer => {
      observer.disconnect();
    });
    observers.splice(0, observers.length);
  };
  extendParams({
    observer: false,
    observeParents: false,
    observeSlideChildren: false
  });
  on("init", init);
  on("destroy", destroy);
}
var eventsEmitter = {
  on(events2, handler, priority) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (typeof handler !== "function") return self;
    const method = priority ? "unshift" : "push";
    events2.split(" ").forEach(event => {
      if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
      self.eventsListeners[event][method](handler);
    });
    return self;
  },
  once(events2, handler, priority) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (typeof handler !== "function") return self;
    function onceHandler() {
      self.off(events2, onceHandler);
      if (onceHandler.__emitterProxy) {
        delete onceHandler.__emitterProxy;
      }
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      handler.apply(self, args);
    }
    onceHandler.__emitterProxy = handler;
    return self.on(events2, onceHandler, priority);
  },
  onAny(handler, priority) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (typeof handler !== "function") return self;
    const method = priority ? "unshift" : "push";
    if (self.eventsAnyListeners.indexOf(handler) < 0) {
      self.eventsAnyListeners[method](handler);
    }
    return self;
  },
  offAny(handler) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (!self.eventsAnyListeners) return self;
    const index = self.eventsAnyListeners.indexOf(handler);
    if (index >= 0) {
      self.eventsAnyListeners.splice(index, 1);
    }
    return self;
  },
  off(events2, handler) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (!self.eventsListeners) return self;
    events2.split(" ").forEach(event => {
      if (typeof handler === "undefined") {
        self.eventsListeners[event] = [];
      } else if (self.eventsListeners[event]) {
        self.eventsListeners[event].forEach((eventHandler, index) => {
          if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) {
            self.eventsListeners[event].splice(index, 1);
          }
        });
      }
    });
    return self;
  },
  emit() {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (!self.eventsListeners) return self;
    let events2;
    let data;
    let context;
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    if (typeof args[0] === "string" || Array.isArray(args[0])) {
      events2 = args[0];
      data = args.slice(1, args.length);
      context = self;
    } else {
      events2 = args[0].events;
      data = args[0].data;
      context = args[0].context || self;
    }
    data.unshift(context);
    const eventsArray = Array.isArray(events2) ? events2 : events2.split(" ");
    eventsArray.forEach(event => {
      if (self.eventsAnyListeners && self.eventsAnyListeners.length) {
        self.eventsAnyListeners.forEach(eventHandler => {
          eventHandler.apply(context, [event, ...data]);
        });
      }
      if (self.eventsListeners && self.eventsListeners[event]) {
        self.eventsListeners[event].forEach(eventHandler => {
          eventHandler.apply(context, data);
        });
      }
    });
    return self;
  }
};
function updateSize() {
  const swiper = this;
  let width;
  let height;
  const el = swiper.el;
  if (typeof swiper.params.width !== "undefined" && swiper.params.width !== null) {
    width = swiper.params.width;
  } else {
    width = el.clientWidth;
  }
  if (typeof swiper.params.height !== "undefined" && swiper.params.height !== null) {
    height = swiper.params.height;
  } else {
    height = el.clientHeight;
  }
  if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) {
    return;
  }
  width = width - parseInt(elementStyle(el, "padding-left") || 0, 10) - parseInt(elementStyle(el, "padding-right") || 0, 10);
  height = height - parseInt(elementStyle(el, "padding-top") || 0, 10) - parseInt(elementStyle(el, "padding-bottom") || 0, 10);
  if (Number.isNaN(width)) width = 0;
  if (Number.isNaN(height)) height = 0;
  Object.assign(swiper, {
    width,
    height,
    size: swiper.isHorizontal() ? width : height
  });
}
function updateSlides() {
  const swiper = this;
  function getDirectionLabel(property) {
    if (swiper.isHorizontal()) {
      return property;
    }
    return {
      "width": "height",
      "margin-top": "margin-left",
      "margin-bottom ": "margin-right",
      "margin-left": "margin-top",
      "margin-right": "margin-bottom",
      "padding-left": "padding-top",
      "padding-right": "padding-bottom",
      "marginRight": "marginBottom"
    }[property];
  }
  function getDirectionPropertyValue(node, label) {
    return parseFloat(node.getPropertyValue(getDirectionLabel(label)) || 0);
  }
  const params = swiper.params;
  const {
    wrapperEl,
    slidesEl,
    size: swiperSize,
    rtlTranslate: rtl,
    wrongRTL
  } = swiper;
  const isVirtual = swiper.virtual && params.virtual.enabled;
  const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
  const slides = elementChildren(slidesEl, `.${swiper.params.slideClass}, swiper-slide`);
  const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
  let snapGrid = [];
  const slidesGrid = [];
  const slidesSizesGrid = [];
  let offsetBefore = params.slidesOffsetBefore;
  if (typeof offsetBefore === "function") {
    offsetBefore = params.slidesOffsetBefore.call(swiper);
  }
  let offsetAfter = params.slidesOffsetAfter;
  if (typeof offsetAfter === "function") {
    offsetAfter = params.slidesOffsetAfter.call(swiper);
  }
  const previousSnapGridLength = swiper.snapGrid.length;
  const previousSlidesGridLength = swiper.slidesGrid.length;
  let spaceBetween = params.spaceBetween;
  let slidePosition = -offsetBefore;
  let prevSlideSize = 0;
  let index = 0;
  if (typeof swiperSize === "undefined") {
    return;
  }
  if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) {
    spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiperSize;
  } else if (typeof spaceBetween === "string") {
    spaceBetween = parseFloat(spaceBetween);
  }
  swiper.virtualSize = -spaceBetween;
  slides.forEach(slideEl => {
    if (rtl) {
      slideEl.style.marginLeft = "";
    } else {
      slideEl.style.marginRight = "";
    }
    slideEl.style.marginBottom = "";
    slideEl.style.marginTop = "";
  });
  if (params.centeredSlides && params.cssMode) {
    setCSSProperty(wrapperEl, "--swiper-centered-offset-before", "");
    setCSSProperty(wrapperEl, "--swiper-centered-offset-after", "");
  }
  const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;
  if (gridEnabled) {
    swiper.grid.initSlides(slidesLength);
  }
  let slideSize;
  const shouldResetSlideSize = params.slidesPerView === "auto" && params.breakpoints && Object.keys(params.breakpoints).filter(key => {
    return typeof params.breakpoints[key].slidesPerView !== "undefined";
  }).length > 0;
  for (let i = 0; i < slidesLength; i += 1) {
    slideSize = 0;
    let slide2;
    if (slides[i]) slide2 = slides[i];
    if (gridEnabled) {
      swiper.grid.updateSlide(i, slide2, slidesLength, getDirectionLabel);
    }
    if (slides[i] && elementStyle(slide2, "display") === "none") continue;
    if (params.slidesPerView === "auto") {
      if (shouldResetSlideSize) {
        slides[i].style[getDirectionLabel("width")] = ``;
      }
      const slideStyles = getComputedStyle(slide2);
      const currentTransform = slide2.style.transform;
      const currentWebKitTransform = slide2.style.webkitTransform;
      if (currentTransform) {
        slide2.style.transform = "none";
      }
      if (currentWebKitTransform) {
        slide2.style.webkitTransform = "none";
      }
      if (params.roundLengths) {
        slideSize = swiper.isHorizontal() ? elementOuterSize(slide2, "width", true) : elementOuterSize(slide2, "height", true);
      } else {
        const width = getDirectionPropertyValue(slideStyles, "width");
        const paddingLeft = getDirectionPropertyValue(slideStyles, "padding-left");
        const paddingRight = getDirectionPropertyValue(slideStyles, "padding-right");
        const marginLeft = getDirectionPropertyValue(slideStyles, "margin-left");
        const marginRight = getDirectionPropertyValue(slideStyles, "margin-right");
        const boxSizing = slideStyles.getPropertyValue("box-sizing");
        if (boxSizing && boxSizing === "border-box") {
          slideSize = width + marginLeft + marginRight;
        } else {
          const {
            clientWidth,
            offsetWidth
          } = slide2;
          slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
        }
      }
      if (currentTransform) {
        slide2.style.transform = currentTransform;
      }
      if (currentWebKitTransform) {
        slide2.style.webkitTransform = currentWebKitTransform;
      }
      if (params.roundLengths) slideSize = Math.floor(slideSize);
    } else {
      slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
      if (params.roundLengths) slideSize = Math.floor(slideSize);
      if (slides[i]) {
        slides[i].style[getDirectionLabel("width")] = `${slideSize}px`;
      }
    }
    if (slides[i]) {
      slides[i].swiperSlideSize = slideSize;
    }
    slidesSizesGrid.push(slideSize);
    if (params.centeredSlides) {
      slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
      if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
      if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
      if (Math.abs(slidePosition) < 1 / 1e3) slidePosition = 0;
      if (params.roundLengths) slidePosition = Math.floor(slidePosition);
      if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
      slidesGrid.push(slidePosition);
    } else {
      if (params.roundLengths) slidePosition = Math.floor(slidePosition);
      if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
      slidesGrid.push(slidePosition);
      slidePosition = slidePosition + slideSize + spaceBetween;
    }
    swiper.virtualSize += slideSize + spaceBetween;
    prevSlideSize = slideSize;
    index += 1;
  }
  swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
  if (rtl && wrongRTL && (params.effect === "slide" || params.effect === "coverflow")) {
    wrapperEl.style.width = `${swiper.virtualSize + spaceBetween}px`;
  }
  if (params.setWrapperSize) {
    wrapperEl.style[getDirectionLabel("width")] = `${swiper.virtualSize + spaceBetween}px`;
  }
  if (gridEnabled) {
    swiper.grid.updateWrapperSize(slideSize, snapGrid, getDirectionLabel);
  }
  if (!params.centeredSlides) {
    const newSlidesGrid = [];
    for (let i = 0; i < snapGrid.length; i += 1) {
      let slidesGridItem = snapGrid[i];
      if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
      if (snapGrid[i] <= swiper.virtualSize - swiperSize) {
        newSlidesGrid.push(slidesGridItem);
      }
    }
    snapGrid = newSlidesGrid;
    if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
      snapGrid.push(swiper.virtualSize - swiperSize);
    }
  }
  if (isVirtual && params.loop) {
    const size = slidesSizesGrid[0] + spaceBetween;
    if (params.slidesPerGroup > 1) {
      const groups = Math.ceil((swiper.virtual.slidesBefore + swiper.virtual.slidesAfter) / params.slidesPerGroup);
      const groupSize = size * params.slidesPerGroup;
      for (let i = 0; i < groups; i += 1) {
        snapGrid.push(snapGrid[snapGrid.length - 1] + groupSize);
      }
    }
    for (let i = 0; i < swiper.virtual.slidesBefore + swiper.virtual.slidesAfter; i += 1) {
      if (params.slidesPerGroup === 1) {
        snapGrid.push(snapGrid[snapGrid.length - 1] + size);
      }
      slidesGrid.push(slidesGrid[slidesGrid.length - 1] + size);
      swiper.virtualSize += size;
    }
  }
  if (snapGrid.length === 0) snapGrid = [0];
  if (spaceBetween !== 0) {
    const key = swiper.isHorizontal() && rtl ? "marginLeft" : getDirectionLabel("marginRight");
    slides.filter((_, slideIndex) => {
      if (!params.cssMode || params.loop) return true;
      if (slideIndex === slides.length - 1) {
        return false;
      }
      return true;
    }).forEach(slideEl => {
      slideEl.style[key] = `${spaceBetween}px`;
    });
  }
  if (params.centeredSlides && params.centeredSlidesBounds) {
    let allSlidesSize = 0;
    slidesSizesGrid.forEach(slideSizeValue => {
      allSlidesSize += slideSizeValue + (spaceBetween || 0);
    });
    allSlidesSize -= spaceBetween;
    const maxSnap = allSlidesSize - swiperSize;
    snapGrid = snapGrid.map(snap => {
      if (snap <= 0) return -offsetBefore;
      if (snap > maxSnap) return maxSnap + offsetAfter;
      return snap;
    });
  }
  if (params.centerInsufficientSlides) {
    let allSlidesSize = 0;
    slidesSizesGrid.forEach(slideSizeValue => {
      allSlidesSize += slideSizeValue + (spaceBetween || 0);
    });
    allSlidesSize -= spaceBetween;
    if (allSlidesSize < swiperSize) {
      const allSlidesOffset = (swiperSize - allSlidesSize) / 2;
      snapGrid.forEach((snap, snapIndex) => {
        snapGrid[snapIndex] = snap - allSlidesOffset;
      });
      slidesGrid.forEach((snap, snapIndex) => {
        slidesGrid[snapIndex] = snap + allSlidesOffset;
      });
    }
  }
  Object.assign(swiper, {
    slides,
    snapGrid,
    slidesGrid,
    slidesSizesGrid
  });
  if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
    setCSSProperty(wrapperEl, "--swiper-centered-offset-before", `${-snapGrid[0]}px`);
    setCSSProperty(wrapperEl, "--swiper-centered-offset-after", `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
    const addToSnapGrid = -swiper.snapGrid[0];
    const addToSlidesGrid = -swiper.slidesGrid[0];
    swiper.snapGrid = swiper.snapGrid.map(v => v + addToSnapGrid);
    swiper.slidesGrid = swiper.slidesGrid.map(v => v + addToSlidesGrid);
  }
  if (slidesLength !== previousSlidesLength) {
    swiper.emit("slidesLengthChange");
  }
  if (snapGrid.length !== previousSnapGridLength) {
    if (swiper.params.watchOverflow) swiper.checkOverflow();
    swiper.emit("snapGridLengthChange");
  }
  if (slidesGrid.length !== previousSlidesGridLength) {
    swiper.emit("slidesGridLengthChange");
  }
  if (params.watchSlidesProgress) {
    swiper.updateSlidesOffset();
  }
  if (!isVirtual && !params.cssMode && (params.effect === "slide" || params.effect === "fade")) {
    const backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`;
    const hasClassBackfaceClassAdded = swiper.el.classList.contains(backFaceHiddenClass);
    if (slidesLength <= params.maxBackfaceHiddenSlides) {
      if (!hasClassBackfaceClassAdded) swiper.el.classList.add(backFaceHiddenClass);
    } else if (hasClassBackfaceClassAdded) {
      swiper.el.classList.remove(backFaceHiddenClass);
    }
  }
}
function updateAutoHeight(speed) {
  const swiper = this;
  const activeSlides = [];
  const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
  let newHeight = 0;
  let i;
  if (typeof speed === "number") {
    swiper.setTransition(speed);
  } else if (speed === true) {
    swiper.setTransition(swiper.params.speed);
  }
  const getSlideByIndex = index => {
    if (isVirtual) {
      return swiper.slides[swiper.getSlideIndexByData(index)];
    }
    return swiper.slides[index];
  };
  if (swiper.params.slidesPerView !== "auto" && swiper.params.slidesPerView > 1) {
    if (swiper.params.centeredSlides) {
      (swiper.visibleSlides || []).forEach(slide2 => {
        activeSlides.push(slide2);
      });
    } else {
      for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
        const index = swiper.activeIndex + i;
        if (index > swiper.slides.length && !isVirtual) break;
        activeSlides.push(getSlideByIndex(index));
      }
    }
  } else {
    activeSlides.push(getSlideByIndex(swiper.activeIndex));
  }
  for (i = 0; i < activeSlides.length; i += 1) {
    if (typeof activeSlides[i] !== "undefined") {
      const height = activeSlides[i].offsetHeight;
      newHeight = height > newHeight ? height : newHeight;
    }
  }
  if (newHeight || newHeight === 0) swiper.wrapperEl.style.height = `${newHeight}px`;
}
function updateSlidesOffset() {
  const swiper = this;
  const slides = swiper.slides;
  const minusOffset = swiper.isElement ? swiper.isHorizontal() ? swiper.wrapperEl.offsetLeft : swiper.wrapperEl.offsetTop : 0;
  for (let i = 0; i < slides.length; i += 1) {
    slides[i].swiperSlideOffset = (swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop) - minusOffset - swiper.cssOverflowAdjustment();
  }
}
function updateSlidesProgress(translate2) {
  if (translate2 === void 0) {
    translate2 = this && this.translate || 0;
  }
  const swiper = this;
  const params = swiper.params;
  const {
    slides,
    rtlTranslate: rtl,
    snapGrid
  } = swiper;
  if (slides.length === 0) return;
  if (typeof slides[0].swiperSlideOffset === "undefined") swiper.updateSlidesOffset();
  let offsetCenter = -translate2;
  if (rtl) offsetCenter = translate2;
  slides.forEach(slideEl => {
    slideEl.classList.remove(params.slideVisibleClass);
  });
  swiper.visibleSlidesIndexes = [];
  swiper.visibleSlides = [];
  let spaceBetween = params.spaceBetween;
  if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) {
    spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiper.size;
  } else if (typeof spaceBetween === "string") {
    spaceBetween = parseFloat(spaceBetween);
  }
  for (let i = 0; i < slides.length; i += 1) {
    const slide2 = slides[i];
    let slideOffset = slide2.swiperSlideOffset;
    if (params.cssMode && params.centeredSlides) {
      slideOffset -= slides[0].swiperSlideOffset;
    }
    const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide2.swiperSlideSize + spaceBetween);
    const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide2.swiperSlideSize + spaceBetween);
    const slideBefore = -(offsetCenter - slideOffset);
    const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
    const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;
    if (isVisible) {
      swiper.visibleSlides.push(slide2);
      swiper.visibleSlidesIndexes.push(i);
      slides[i].classList.add(params.slideVisibleClass);
    }
    slide2.progress = rtl ? -slideProgress : slideProgress;
    slide2.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
  }
}
function updateProgress(translate2) {
  const swiper = this;
  if (typeof translate2 === "undefined") {
    const multiplier = swiper.rtlTranslate ? -1 : 1;
    translate2 = swiper && swiper.translate && swiper.translate * multiplier || 0;
  }
  const params = swiper.params;
  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  let {
    progress,
    isBeginning,
    isEnd,
    progressLoop
  } = swiper;
  const wasBeginning = isBeginning;
  const wasEnd = isEnd;
  if (translatesDiff === 0) {
    progress = 0;
    isBeginning = true;
    isEnd = true;
  } else {
    progress = (translate2 - swiper.minTranslate()) / translatesDiff;
    const isBeginningRounded = Math.abs(translate2 - swiper.minTranslate()) < 1;
    const isEndRounded = Math.abs(translate2 - swiper.maxTranslate()) < 1;
    isBeginning = isBeginningRounded || progress <= 0;
    isEnd = isEndRounded || progress >= 1;
    if (isBeginningRounded) progress = 0;
    if (isEndRounded) progress = 1;
  }
  if (params.loop) {
    const firstSlideIndex = swiper.getSlideIndexByData(0);
    const lastSlideIndex = swiper.getSlideIndexByData(swiper.slides.length - 1);
    const firstSlideTranslate = swiper.slidesGrid[firstSlideIndex];
    const lastSlideTranslate = swiper.slidesGrid[lastSlideIndex];
    const translateMax = swiper.slidesGrid[swiper.slidesGrid.length - 1];
    const translateAbs = Math.abs(translate2);
    if (translateAbs >= firstSlideTranslate) {
      progressLoop = (translateAbs - firstSlideTranslate) / translateMax;
    } else {
      progressLoop = (translateAbs + translateMax - lastSlideTranslate) / translateMax;
    }
    if (progressLoop > 1) progressLoop -= 1;
  }
  Object.assign(swiper, {
    progress,
    progressLoop,
    isBeginning,
    isEnd
  });
  if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate2);
  if (isBeginning && !wasBeginning) {
    swiper.emit("reachBeginning toEdge");
  }
  if (isEnd && !wasEnd) {
    swiper.emit("reachEnd toEdge");
  }
  if (wasBeginning && !isBeginning || wasEnd && !isEnd) {
    swiper.emit("fromEdge");
  }
  swiper.emit("progress", progress);
}
function updateSlidesClasses() {
  const swiper = this;
  const {
    slides,
    params,
    slidesEl,
    activeIndex
  } = swiper;
  const isVirtual = swiper.virtual && params.virtual.enabled;
  const getFilteredSlide = selector => {
    return elementChildren(slidesEl, `.${params.slideClass}${selector}, swiper-slide${selector}`)[0];
  };
  slides.forEach(slideEl => {
    slideEl.classList.remove(params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
  });
  let activeSlide;
  if (isVirtual) {
    if (params.loop) {
      let slideIndex = activeIndex - swiper.virtual.slidesBefore;
      if (slideIndex < 0) slideIndex = swiper.virtual.slides.length + slideIndex;
      if (slideIndex >= swiper.virtual.slides.length) slideIndex -= swiper.virtual.slides.length;
      activeSlide = getFilteredSlide(`[data-swiper-slide-index="${slideIndex}"]`);
    } else {
      activeSlide = getFilteredSlide(`[data-swiper-slide-index="${activeIndex}"]`);
    }
  } else {
    activeSlide = slides[activeIndex];
  }
  if (activeSlide) {
    activeSlide.classList.add(params.slideActiveClass);
    let nextSlide = elementNextAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
    if (params.loop && !nextSlide) {
      nextSlide = slides[0];
    }
    if (nextSlide) {
      nextSlide.classList.add(params.slideNextClass);
    }
    let prevSlide = elementPrevAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
    if (params.loop && !prevSlide === 0) {
      prevSlide = slides[slides.length - 1];
    }
    if (prevSlide) {
      prevSlide.classList.add(params.slidePrevClass);
    }
  }
  swiper.emitSlidesClasses();
}
var processLazyPreloader = (swiper, imageEl) => {
  if (!swiper || swiper.destroyed || !swiper.params) return;
  const slideSelector = () => swiper.isElement ? `swiper-slide` : `.${swiper.params.slideClass}`;
  const slideEl = imageEl.closest(slideSelector());
  if (slideEl) {
    let lazyEl = slideEl.querySelector(`.${swiper.params.lazyPreloaderClass}`);
    if (!lazyEl && swiper.isElement) {
      if (slideEl.shadowRoot) {
        lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`);
      } else {
        requestAnimationFrame(() => {
          if (slideEl.shadowRoot) {
            lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`);
            if (lazyEl) lazyEl.remove();
          }
        });
      }
    }
    if (lazyEl) lazyEl.remove();
  }
};
var unlazy = (swiper, index) => {
  if (!swiper.slides[index]) return;
  const imageEl = swiper.slides[index].querySelector('[loading="lazy"]');
  if (imageEl) imageEl.removeAttribute("loading");
};
var preload = swiper => {
  if (!swiper || swiper.destroyed || !swiper.params) return;
  let amount = swiper.params.lazyPreloadPrevNext;
  const len = swiper.slides.length;
  if (!len || !amount || amount < 0) return;
  amount = Math.min(amount, len);
  const slidesPerView = swiper.params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(swiper.params.slidesPerView);
  const activeIndex = swiper.activeIndex;
  if (swiper.params.grid && swiper.params.grid.rows > 1) {
    const activeColumn = activeIndex;
    const preloadColumns = [activeColumn - amount];
    preloadColumns.push(...Array.from({
      length: amount
    }).map((_, i) => {
      return activeColumn + slidesPerView + i;
    }));
    swiper.slides.forEach((slideEl, i) => {
      if (preloadColumns.includes(slideEl.column)) unlazy(swiper, i);
    });
    return;
  }
  const slideIndexLastInView = activeIndex + slidesPerView - 1;
  if (swiper.params.rewind || swiper.params.loop) {
    for (let i = activeIndex - amount; i <= slideIndexLastInView + amount; i += 1) {
      const realIndex = (i % len + len) % len;
      if (realIndex < activeIndex || realIndex > slideIndexLastInView) unlazy(swiper, realIndex);
    }
  } else {
    for (let i = Math.max(activeIndex - amount, 0); i <= Math.min(slideIndexLastInView + amount, len - 1); i += 1) {
      if (i !== activeIndex && (i > slideIndexLastInView || i < activeIndex)) {
        unlazy(swiper, i);
      }
    }
  }
};
function getActiveIndexByTranslate(swiper) {
  const {
    slidesGrid,
    params
  } = swiper;
  const translate2 = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
  let activeIndex;
  for (let i = 0; i < slidesGrid.length; i += 1) {
    if (typeof slidesGrid[i + 1] !== "undefined") {
      if (translate2 >= slidesGrid[i] && translate2 < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) {
        activeIndex = i;
      } else if (translate2 >= slidesGrid[i] && translate2 < slidesGrid[i + 1]) {
        activeIndex = i + 1;
      }
    } else if (translate2 >= slidesGrid[i]) {
      activeIndex = i;
    }
  }
  if (params.normalizeSlideIndex) {
    if (activeIndex < 0 || typeof activeIndex === "undefined") activeIndex = 0;
  }
  return activeIndex;
}
function updateActiveIndex(newActiveIndex) {
  const swiper = this;
  const translate2 = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
  const {
    snapGrid,
    params,
    activeIndex: previousIndex,
    realIndex: previousRealIndex,
    snapIndex: previousSnapIndex
  } = swiper;
  let activeIndex = newActiveIndex;
  let snapIndex;
  const getVirtualRealIndex = aIndex => {
    let realIndex2 = aIndex - swiper.virtual.slidesBefore;
    if (realIndex2 < 0) {
      realIndex2 = swiper.virtual.slides.length + realIndex2;
    }
    if (realIndex2 >= swiper.virtual.slides.length) {
      realIndex2 -= swiper.virtual.slides.length;
    }
    return realIndex2;
  };
  if (typeof activeIndex === "undefined") {
    activeIndex = getActiveIndexByTranslate(swiper);
  }
  if (snapGrid.indexOf(translate2) >= 0) {
    snapIndex = snapGrid.indexOf(translate2);
  } else {
    const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
    snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
  }
  if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
  if (activeIndex === previousIndex) {
    if (snapIndex !== previousSnapIndex) {
      swiper.snapIndex = snapIndex;
      swiper.emit("snapIndexChange");
    }
    if (swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) {
      swiper.realIndex = getVirtualRealIndex(activeIndex);
    }
    return;
  }
  let realIndex;
  if (swiper.virtual && params.virtual.enabled && params.loop) {
    realIndex = getVirtualRealIndex(activeIndex);
  } else if (swiper.slides[activeIndex]) {
    realIndex = parseInt(swiper.slides[activeIndex].getAttribute("data-swiper-slide-index") || activeIndex, 10);
  } else {
    realIndex = activeIndex;
  }
  Object.assign(swiper, {
    previousSnapIndex,
    snapIndex,
    previousRealIndex,
    realIndex,
    previousIndex,
    activeIndex
  });
  if (swiper.initialized) {
    preload(swiper);
  }
  swiper.emit("activeIndexChange");
  swiper.emit("snapIndexChange");
  if (swiper.initialized || swiper.params.runCallbacksOnInit) {
    if (previousRealIndex !== realIndex) {
      swiper.emit("realIndexChange");
    }
    swiper.emit("slideChange");
  }
}
function updateClickedSlide(el, path) {
  const swiper = this;
  const params = swiper.params;
  let slide2 = el.closest(`.${params.slideClass}, swiper-slide`);
  if (!slide2 && swiper.isElement && path && path.length > 1 && path.includes(el)) {
    [...path.slice(path.indexOf(el) + 1, path.length)].forEach(pathEl => {
      if (!slide2 && pathEl.matches && pathEl.matches(`.${params.slideClass}, swiper-slide`)) {
        slide2 = pathEl;
      }
    });
  }
  let slideFound = false;
  let slideIndex;
  if (slide2) {
    for (let i = 0; i < swiper.slides.length; i += 1) {
      if (swiper.slides[i] === slide2) {
        slideFound = true;
        slideIndex = i;
        break;
      }
    }
  }
  if (slide2 && slideFound) {
    swiper.clickedSlide = slide2;
    if (swiper.virtual && swiper.params.virtual.enabled) {
      swiper.clickedIndex = parseInt(slide2.getAttribute("data-swiper-slide-index"), 10);
    } else {
      swiper.clickedIndex = slideIndex;
    }
  } else {
    swiper.clickedSlide = void 0;
    swiper.clickedIndex = void 0;
    return;
  }
  if (params.slideToClickedSlide && swiper.clickedIndex !== void 0 && swiper.clickedIndex !== swiper.activeIndex) {
    swiper.slideToClickedSlide();
  }
}
var update = {
  updateSize,
  updateSlides,
  updateAutoHeight,
  updateSlidesOffset,
  updateSlidesProgress,
  updateProgress,
  updateSlidesClasses,
  updateActiveIndex,
  updateClickedSlide
};
function getSwiperTranslate(axis) {
  if (axis === void 0) {
    axis = this.isHorizontal() ? "x" : "y";
  }
  const swiper = this;
  const {
    params,
    rtlTranslate: rtl,
    translate: translate2,
    wrapperEl
  } = swiper;
  if (params.virtualTranslate) {
    return rtl ? -translate2 : translate2;
  }
  if (params.cssMode) {
    return translate2;
  }
  let currentTranslate = getTranslate(wrapperEl, axis);
  currentTranslate += swiper.cssOverflowAdjustment();
  if (rtl) currentTranslate = -currentTranslate;
  return currentTranslate || 0;
}
function setTranslate(translate2, byController) {
  const swiper = this;
  const {
    rtlTranslate: rtl,
    params,
    wrapperEl,
    progress
  } = swiper;
  let x = 0;
  let y = 0;
  const z = 0;
  if (swiper.isHorizontal()) {
    x = rtl ? -translate2 : translate2;
  } else {
    y = translate2;
  }
  if (params.roundLengths) {
    x = Math.floor(x);
    y = Math.floor(y);
  }
  swiper.previousTranslate = swiper.translate;
  swiper.translate = swiper.isHorizontal() ? x : y;
  if (params.cssMode) {
    wrapperEl[swiper.isHorizontal() ? "scrollLeft" : "scrollTop"] = swiper.isHorizontal() ? -x : -y;
  } else if (!params.virtualTranslate) {
    if (swiper.isHorizontal()) {
      x -= swiper.cssOverflowAdjustment();
    } else {
      y -= swiper.cssOverflowAdjustment();
    }
    wrapperEl.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
  }
  let newProgress;
  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  if (translatesDiff === 0) {
    newProgress = 0;
  } else {
    newProgress = (translate2 - swiper.minTranslate()) / translatesDiff;
  }
  if (newProgress !== progress) {
    swiper.updateProgress(translate2);
  }
  swiper.emit("setTranslate", swiper.translate, byController);
}
function minTranslate() {
  return -this.snapGrid[0];
}
function maxTranslate() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function translateTo(translate2, speed, runCallbacks, translateBounds, internal) {
  if (translate2 === void 0) {
    translate2 = 0;
  }
  if (speed === void 0) {
    speed = this.params.speed;
  }
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  if (translateBounds === void 0) {
    translateBounds = true;
  }
  const swiper = this;
  const {
    params,
    wrapperEl
  } = swiper;
  if (swiper.animating && params.preventInteractionOnTransition) {
    return false;
  }
  const minTranslate2 = swiper.minTranslate();
  const maxTranslate2 = swiper.maxTranslate();
  let newTranslate;
  if (translateBounds && translate2 > minTranslate2) newTranslate = minTranslate2;else if (translateBounds && translate2 < maxTranslate2) newTranslate = maxTranslate2;else newTranslate = translate2;
  swiper.updateProgress(newTranslate);
  if (params.cssMode) {
    const isH = swiper.isHorizontal();
    if (speed === 0) {
      wrapperEl[isH ? "scrollLeft" : "scrollTop"] = -newTranslate;
    } else {
      if (!swiper.support.smoothScroll) {
        animateCSSModeScroll({
          swiper,
          targetPosition: -newTranslate,
          side: isH ? "left" : "top"
        });
        return true;
      }
      wrapperEl.scrollTo({
        [isH ? "left" : "top"]: -newTranslate,
        behavior: "smooth"
      });
    }
    return true;
  }
  if (speed === 0) {
    swiper.setTransition(0);
    swiper.setTranslate(newTranslate);
    if (runCallbacks) {
      swiper.emit("beforeTransitionStart", speed, internal);
      swiper.emit("transitionEnd");
    }
  } else {
    swiper.setTransition(speed);
    swiper.setTranslate(newTranslate);
    if (runCallbacks) {
      swiper.emit("beforeTransitionStart", speed, internal);
      swiper.emit("transitionStart");
    }
    if (!swiper.animating) {
      swiper.animating = true;
      if (!swiper.onTranslateToWrapperTransitionEnd) {
        swiper.onTranslateToWrapperTransitionEnd = function transitionEnd2(e) {
          if (!swiper || swiper.destroyed) return;
          if (e.target !== this) return;
          swiper.wrapperEl.removeEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
          swiper.onTranslateToWrapperTransitionEnd = null;
          delete swiper.onTranslateToWrapperTransitionEnd;
          if (runCallbacks) {
            swiper.emit("transitionEnd");
          }
        };
      }
      swiper.wrapperEl.addEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
    }
  }
  return true;
}
var translate = {
  getTranslate: getSwiperTranslate,
  setTranslate,
  minTranslate,
  maxTranslate,
  translateTo
};
function setTransition(duration, byController) {
  const swiper = this;
  if (!swiper.params.cssMode) {
    swiper.wrapperEl.style.transitionDuration = `${duration}ms`;
    swiper.wrapperEl.style.transitionDelay = duration === 0 ? `0ms` : "";
  }
  swiper.emit("setTransition", duration, byController);
}
function transitionEmit(_ref) {
  let {
    swiper,
    runCallbacks,
    direction,
    step
  } = _ref;
  const {
    activeIndex,
    previousIndex
  } = swiper;
  let dir = direction;
  if (!dir) {
    if (activeIndex > previousIndex) dir = "next";else if (activeIndex < previousIndex) dir = "prev";else dir = "reset";
  }
  swiper.emit(`transition${step}`);
  if (runCallbacks && activeIndex !== previousIndex) {
    if (dir === "reset") {
      swiper.emit(`slideResetTransition${step}`);
      return;
    }
    swiper.emit(`slideChangeTransition${step}`);
    if (dir === "next") {
      swiper.emit(`slideNextTransition${step}`);
    } else {
      swiper.emit(`slidePrevTransition${step}`);
    }
  }
}
function transitionStart(runCallbacks, direction) {
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  const swiper = this;
  const {
    params
  } = swiper;
  if (params.cssMode) return;
  if (params.autoHeight) {
    swiper.updateAutoHeight();
  }
  transitionEmit({
    swiper,
    runCallbacks,
    direction,
    step: "Start"
  });
}
function transitionEnd(runCallbacks, direction) {
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  const swiper = this;
  const {
    params
  } = swiper;
  swiper.animating = false;
  if (params.cssMode) return;
  swiper.setTransition(0);
  transitionEmit({
    swiper,
    runCallbacks,
    direction,
    step: "End"
  });
}
var transition = {
  setTransition,
  transitionStart,
  transitionEnd
};
function slideTo(index, speed, runCallbacks, internal, initial) {
  if (index === void 0) {
    index = 0;
  }
  if (speed === void 0) {
    speed = this.params.speed;
  }
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  if (typeof index === "string") {
    index = parseInt(index, 10);
  }
  const swiper = this;
  let slideIndex = index;
  if (slideIndex < 0) slideIndex = 0;
  const {
    params,
    snapGrid,
    slidesGrid,
    previousIndex,
    activeIndex,
    rtlTranslate: rtl,
    wrapperEl,
    enabled
  } = swiper;
  if (swiper.animating && params.preventInteractionOnTransition || !enabled && !internal && !initial) {
    return false;
  }
  const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
  let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
  if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
  const translate2 = -snapGrid[snapIndex];
  if (params.normalizeSlideIndex) {
    for (let i = 0; i < slidesGrid.length; i += 1) {
      const normalizedTranslate = -Math.floor(translate2 * 100);
      const normalizedGrid = Math.floor(slidesGrid[i] * 100);
      const normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);
      if (typeof slidesGrid[i + 1] !== "undefined") {
        if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) {
          slideIndex = i;
        } else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) {
          slideIndex = i + 1;
        }
      } else if (normalizedTranslate >= normalizedGrid) {
        slideIndex = i;
      }
    }
  }
  if (swiper.initialized && slideIndex !== activeIndex) {
    if (!swiper.allowSlideNext && (rtl ? translate2 > swiper.translate && translate2 > swiper.minTranslate() : translate2 < swiper.translate && translate2 < swiper.minTranslate())) {
      return false;
    }
    if (!swiper.allowSlidePrev && translate2 > swiper.translate && translate2 > swiper.maxTranslate()) {
      if ((activeIndex || 0) !== slideIndex) {
        return false;
      }
    }
  }
  if (slideIndex !== (previousIndex || 0) && runCallbacks) {
    swiper.emit("beforeSlideChangeStart");
  }
  swiper.updateProgress(translate2);
  let direction;
  if (slideIndex > activeIndex) direction = "next";else if (slideIndex < activeIndex) direction = "prev";else direction = "reset";
  if (rtl && -translate2 === swiper.translate || !rtl && translate2 === swiper.translate) {
    swiper.updateActiveIndex(slideIndex);
    if (params.autoHeight) {
      swiper.updateAutoHeight();
    }
    swiper.updateSlidesClasses();
    if (params.effect !== "slide") {
      swiper.setTranslate(translate2);
    }
    if (direction !== "reset") {
      swiper.transitionStart(runCallbacks, direction);
      swiper.transitionEnd(runCallbacks, direction);
    }
    return false;
  }
  if (params.cssMode) {
    const isH = swiper.isHorizontal();
    const t = rtl ? translate2 : -translate2;
    if (speed === 0) {
      const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
      if (isVirtual) {
        swiper.wrapperEl.style.scrollSnapType = "none";
        swiper._immediateVirtual = true;
      }
      if (isVirtual && !swiper._cssModeVirtualInitialSet && swiper.params.initialSlide > 0) {
        swiper._cssModeVirtualInitialSet = true;
        requestAnimationFrame(() => {
          wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
        });
      } else {
        wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
      }
      if (isVirtual) {
        requestAnimationFrame(() => {
          swiper.wrapperEl.style.scrollSnapType = "";
          swiper._immediateVirtual = false;
        });
      }
    } else {
      if (!swiper.support.smoothScroll) {
        animateCSSModeScroll({
          swiper,
          targetPosition: t,
          side: isH ? "left" : "top"
        });
        return true;
      }
      wrapperEl.scrollTo({
        [isH ? "left" : "top"]: t,
        behavior: "smooth"
      });
    }
    return true;
  }
  swiper.setTransition(speed);
  swiper.setTranslate(translate2);
  swiper.updateActiveIndex(slideIndex);
  swiper.updateSlidesClasses();
  swiper.emit("beforeTransitionStart", speed, internal);
  swiper.transitionStart(runCallbacks, direction);
  if (speed === 0) {
    swiper.transitionEnd(runCallbacks, direction);
  } else if (!swiper.animating) {
    swiper.animating = true;
    if (!swiper.onSlideToWrapperTransitionEnd) {
      swiper.onSlideToWrapperTransitionEnd = function transitionEnd2(e) {
        if (!swiper || swiper.destroyed) return;
        if (e.target !== this) return;
        swiper.wrapperEl.removeEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
        swiper.onSlideToWrapperTransitionEnd = null;
        delete swiper.onSlideToWrapperTransitionEnd;
        swiper.transitionEnd(runCallbacks, direction);
      };
    }
    swiper.wrapperEl.addEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
  }
  return true;
}
function slideToLoop(index, speed, runCallbacks, internal) {
  if (index === void 0) {
    index = 0;
  }
  if (speed === void 0) {
    speed = this.params.speed;
  }
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  if (typeof index === "string") {
    const indexAsNumber = parseInt(index, 10);
    index = indexAsNumber;
  }
  const swiper = this;
  let newIndex = index;
  if (swiper.params.loop) {
    if (swiper.virtual && swiper.params.virtual.enabled) {
      newIndex = newIndex + swiper.virtual.slidesBefore;
    } else {
      newIndex = swiper.getSlideIndexByData(newIndex);
    }
  }
  return swiper.slideTo(newIndex, speed, runCallbacks, internal);
}
function slideNext(speed, runCallbacks, internal) {
  if (speed === void 0) {
    speed = this.params.speed;
  }
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  const swiper = this;
  const {
    enabled,
    params,
    animating
  } = swiper;
  if (!enabled) return swiper;
  let perGroup = params.slidesPerGroup;
  if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
    perGroup = Math.max(swiper.slidesPerViewDynamic("current", true), 1);
  }
  const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;
  const isVirtual = swiper.virtual && params.virtual.enabled;
  if (params.loop) {
    if (animating && !isVirtual && params.loopPreventsSliding) return false;
    swiper.loopFix({
      direction: "next"
    });
    swiper._clientLeft = swiper.wrapperEl.clientLeft;
    if (swiper.activeIndex === swiper.slides.length - 1 && params.cssMode) {
      requestAnimationFrame(() => {
        swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
      });
      return true;
    }
  }
  if (params.rewind && swiper.isEnd) {
    return swiper.slideTo(0, speed, runCallbacks, internal);
  }
  return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
}
function slidePrev(speed, runCallbacks, internal) {
  if (speed === void 0) {
    speed = this.params.speed;
  }
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  const swiper = this;
  const {
    params,
    snapGrid,
    slidesGrid,
    rtlTranslate,
    enabled,
    animating
  } = swiper;
  if (!enabled) return swiper;
  const isVirtual = swiper.virtual && params.virtual.enabled;
  if (params.loop) {
    if (animating && !isVirtual && params.loopPreventsSliding) return false;
    swiper.loopFix({
      direction: "prev"
    });
    swiper._clientLeft = swiper.wrapperEl.clientLeft;
  }
  const translate2 = rtlTranslate ? swiper.translate : -swiper.translate;
  function normalize(val) {
    if (val < 0) return -Math.floor(Math.abs(val));
    return Math.floor(val);
  }
  const normalizedTranslate = normalize(translate2);
  const normalizedSnapGrid = snapGrid.map(val => normalize(val));
  let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
  if (typeof prevSnap === "undefined" && params.cssMode) {
    let prevSnapIndex;
    snapGrid.forEach((snap, snapIndex) => {
      if (normalizedTranslate >= snap) {
        prevSnapIndex = snapIndex;
      }
    });
    if (typeof prevSnapIndex !== "undefined") {
      prevSnap = snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
    }
  }
  let prevIndex = 0;
  if (typeof prevSnap !== "undefined") {
    prevIndex = slidesGrid.indexOf(prevSnap);
    if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
    if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
      prevIndex = prevIndex - swiper.slidesPerViewDynamic("previous", true) + 1;
      prevIndex = Math.max(prevIndex, 0);
    }
  }
  if (params.rewind && swiper.isBeginning) {
    const lastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
    return swiper.slideTo(lastIndex, speed, runCallbacks, internal);
  } else if (params.loop && swiper.activeIndex === 0 && params.cssMode) {
    requestAnimationFrame(() => {
      swiper.slideTo(prevIndex, speed, runCallbacks, internal);
    });
    return true;
  }
  return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
}
function slideReset(speed, runCallbacks, internal) {
  if (speed === void 0) {
    speed = this.params.speed;
  }
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  const swiper = this;
  return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
}
function slideToClosest(speed, runCallbacks, internal, threshold) {
  if (speed === void 0) {
    speed = this.params.speed;
  }
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  if (threshold === void 0) {
    threshold = 0.5;
  }
  const swiper = this;
  let index = swiper.activeIndex;
  const skip = Math.min(swiper.params.slidesPerGroupSkip, index);
  const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
  const translate2 = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
  if (translate2 >= swiper.snapGrid[snapIndex]) {
    const currentSnap = swiper.snapGrid[snapIndex];
    const nextSnap = swiper.snapGrid[snapIndex + 1];
    if (translate2 - currentSnap > (nextSnap - currentSnap) * threshold) {
      index += swiper.params.slidesPerGroup;
    }
  } else {
    const prevSnap = swiper.snapGrid[snapIndex - 1];
    const currentSnap = swiper.snapGrid[snapIndex];
    if (translate2 - prevSnap <= (currentSnap - prevSnap) * threshold) {
      index -= swiper.params.slidesPerGroup;
    }
  }
  index = Math.max(index, 0);
  index = Math.min(index, swiper.slidesGrid.length - 1);
  return swiper.slideTo(index, speed, runCallbacks, internal);
}
function slideToClickedSlide() {
  const swiper = this;
  const {
    params,
    slidesEl
  } = swiper;
  const slidesPerView = params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : params.slidesPerView;
  let slideToIndex = swiper.clickedIndex;
  let realIndex;
  const slideSelector = swiper.isElement ? `swiper-slide` : `.${params.slideClass}`;
  if (params.loop) {
    if (swiper.animating) return;
    realIndex = parseInt(swiper.clickedSlide.getAttribute("data-swiper-slide-index"), 10);
    if (params.centeredSlides) {
      if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
        swiper.loopFix();
        slideToIndex = swiper.getSlideIndex(elementChildren(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
        nextTick(() => {
          swiper.slideTo(slideToIndex);
        });
      } else {
        swiper.slideTo(slideToIndex);
      }
    } else if (slideToIndex > swiper.slides.length - slidesPerView) {
      swiper.loopFix();
      slideToIndex = swiper.getSlideIndex(elementChildren(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
      nextTick(() => {
        swiper.slideTo(slideToIndex);
      });
    } else {
      swiper.slideTo(slideToIndex);
    }
  } else {
    swiper.slideTo(slideToIndex);
  }
}
var slide = {
  slideTo,
  slideToLoop,
  slideNext,
  slidePrev,
  slideReset,
  slideToClosest,
  slideToClickedSlide
};
function loopCreate(slideRealIndex) {
  const swiper = this;
  const {
    params,
    slidesEl
  } = swiper;
  if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
  const slides = elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
  slides.forEach((el, index) => {
    el.setAttribute("data-swiper-slide-index", index);
  });
  swiper.loopFix({
    slideRealIndex,
    direction: params.centeredSlides ? void 0 : "next"
  });
}
function loopFix(_temp) {
  let {
    slideRealIndex,
    slideTo: slideTo2 = true,
    direction,
    setTranslate: setTranslate2,
    activeSlideIndex,
    byController,
    byMousewheel
  } = _temp === void 0 ? {} : _temp;
  const swiper = this;
  if (!swiper.params.loop) return;
  swiper.emit("beforeLoopFix");
  const {
    slides,
    allowSlidePrev,
    allowSlideNext,
    slidesEl,
    params
  } = swiper;
  swiper.allowSlidePrev = true;
  swiper.allowSlideNext = true;
  if (swiper.virtual && params.virtual.enabled) {
    if (slideTo2) {
      if (!params.centeredSlides && swiper.snapIndex === 0) {
        swiper.slideTo(swiper.virtual.slides.length, 0, false, true);
      } else if (params.centeredSlides && swiper.snapIndex < params.slidesPerView) {
        swiper.slideTo(swiper.virtual.slides.length + swiper.snapIndex, 0, false, true);
      } else if (swiper.snapIndex === swiper.snapGrid.length - 1) {
        swiper.slideTo(swiper.virtual.slidesBefore, 0, false, true);
      }
    }
    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;
    swiper.emit("loopFix");
    return;
  }
  const slidesPerView = params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(parseFloat(params.slidesPerView, 10));
  let loopedSlides = params.loopedSlides || slidesPerView;
  if (loopedSlides % params.slidesPerGroup !== 0) {
    loopedSlides += params.slidesPerGroup - loopedSlides % params.slidesPerGroup;
  }
  swiper.loopedSlides = loopedSlides;
  const prependSlidesIndexes = [];
  const appendSlidesIndexes = [];
  let activeIndex = swiper.activeIndex;
  if (typeof activeSlideIndex === "undefined") {
    activeSlideIndex = swiper.getSlideIndex(swiper.slides.filter(el => el.classList.contains(params.slideActiveClass))[0]);
  } else {
    activeIndex = activeSlideIndex;
  }
  const isNext = direction === "next" || !direction;
  const isPrev = direction === "prev" || !direction;
  let slidesPrepended = 0;
  let slidesAppended = 0;
  if (activeSlideIndex < loopedSlides) {
    slidesPrepended = Math.max(loopedSlides - activeSlideIndex, params.slidesPerGroup);
    for (let i = 0; i < loopedSlides - activeSlideIndex; i += 1) {
      const index = i - Math.floor(i / slides.length) * slides.length;
      prependSlidesIndexes.push(slides.length - index - 1);
    }
  } else if (activeSlideIndex > swiper.slides.length - loopedSlides * 2) {
    slidesAppended = Math.max(activeSlideIndex - (swiper.slides.length - loopedSlides * 2), params.slidesPerGroup);
    for (let i = 0; i < slidesAppended; i += 1) {
      const index = i - Math.floor(i / slides.length) * slides.length;
      appendSlidesIndexes.push(index);
    }
  }
  if (isPrev) {
    prependSlidesIndexes.forEach(index => {
      swiper.slides[index].swiperLoopMoveDOM = true;
      slidesEl.prepend(swiper.slides[index]);
      swiper.slides[index].swiperLoopMoveDOM = false;
    });
  }
  if (isNext) {
    appendSlidesIndexes.forEach(index => {
      swiper.slides[index].swiperLoopMoveDOM = true;
      slidesEl.append(swiper.slides[index]);
      swiper.slides[index].swiperLoopMoveDOM = false;
    });
  }
  swiper.recalcSlides();
  if (params.slidesPerView === "auto") {
    swiper.updateSlides();
  }
  if (params.watchSlidesProgress) {
    swiper.updateSlidesOffset();
  }
  if (slideTo2) {
    if (prependSlidesIndexes.length > 0 && isPrev) {
      if (typeof slideRealIndex === "undefined") {
        const currentSlideTranslate = swiper.slidesGrid[activeIndex];
        const newSlideTranslate = swiper.slidesGrid[activeIndex + slidesPrepended];
        const diff = newSlideTranslate - currentSlideTranslate;
        if (byMousewheel) {
          swiper.setTranslate(swiper.translate - diff);
        } else {
          swiper.slideTo(activeIndex + slidesPrepended, 0, false, true);
          if (setTranslate2) {
            swiper.touches[swiper.isHorizontal() ? "startX" : "startY"] += diff;
            swiper.touchEventsData.currentTranslate = swiper.translate;
          }
        }
      } else {
        if (setTranslate2) {
          swiper.slideToLoop(slideRealIndex, 0, false, true);
          swiper.touchEventsData.currentTranslate = swiper.translate;
        }
      }
    } else if (appendSlidesIndexes.length > 0 && isNext) {
      if (typeof slideRealIndex === "undefined") {
        const currentSlideTranslate = swiper.slidesGrid[activeIndex];
        const newSlideTranslate = swiper.slidesGrid[activeIndex - slidesAppended];
        const diff = newSlideTranslate - currentSlideTranslate;
        if (byMousewheel) {
          swiper.setTranslate(swiper.translate - diff);
        } else {
          swiper.slideTo(activeIndex - slidesAppended, 0, false, true);
          if (setTranslate2) {
            swiper.touches[swiper.isHorizontal() ? "startX" : "startY"] += diff;
            swiper.touchEventsData.currentTranslate = swiper.translate;
          }
        }
      } else {
        swiper.slideToLoop(slideRealIndex, 0, false, true);
      }
    }
  }
  swiper.allowSlidePrev = allowSlidePrev;
  swiper.allowSlideNext = allowSlideNext;
  if (swiper.controller && swiper.controller.control && !byController) {
    const loopParams = {
      slideRealIndex,
      direction,
      setTranslate: setTranslate2,
      activeSlideIndex,
      byController: true
    };
    if (Array.isArray(swiper.controller.control)) {
      swiper.controller.control.forEach(c => {
        if (!c.destroyed && c.params.loop) c.loopFix({
          ...loopParams,
          slideTo: c.params.slidesPerView === params.slidesPerView ? slideTo2 : false
        });
      });
    } else if (swiper.controller.control instanceof swiper.constructor && swiper.controller.control.params.loop) {
      swiper.controller.control.loopFix({
        ...loopParams,
        slideTo: swiper.controller.control.params.slidesPerView === params.slidesPerView ? slideTo2 : false
      });
    }
  }
  swiper.emit("loopFix");
}
function loopDestroy() {
  const swiper = this;
  const {
    params,
    slidesEl
  } = swiper;
  if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
  swiper.recalcSlides();
  const newSlidesOrder = [];
  swiper.slides.forEach(slideEl => {
    const index = typeof slideEl.swiperSlideIndex === "undefined" ? slideEl.getAttribute("data-swiper-slide-index") * 1 : slideEl.swiperSlideIndex;
    newSlidesOrder[index] = slideEl;
  });
  swiper.slides.forEach(slideEl => {
    slideEl.removeAttribute("data-swiper-slide-index");
  });
  newSlidesOrder.forEach(slideEl => {
    slidesEl.append(slideEl);
  });
  swiper.recalcSlides();
  swiper.slideTo(swiper.realIndex, 0);
}
var loop = {
  loopCreate,
  loopFix,
  loopDestroy
};
function setGrabCursor(moving) {
  const swiper = this;
  if (!swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
  const el = swiper.params.touchEventsTarget === "container" ? swiper.el : swiper.wrapperEl;
  if (swiper.isElement) {
    swiper.__preventObserver__ = true;
  }
  el.style.cursor = "move";
  el.style.cursor = moving ? "grabbing" : "grab";
  if (swiper.isElement) {
    requestAnimationFrame(() => {
      swiper.__preventObserver__ = false;
    });
  }
}
function unsetGrabCursor() {
  const swiper = this;
  if (swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) {
    return;
  }
  if (swiper.isElement) {
    swiper.__preventObserver__ = true;
  }
  swiper[swiper.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "";
  if (swiper.isElement) {
    requestAnimationFrame(() => {
      swiper.__preventObserver__ = false;
    });
  }
}
var grabCursor = {
  setGrabCursor,
  unsetGrabCursor
};
function closestElement(selector, base) {
  if (base === void 0) {
    base = this;
  }
  function __closestFrom(el) {
    if (!el || el === getDocument() || el === getWindow()) return null;
    if (el.assignedSlot) el = el.assignedSlot;
    const found = el.closest(selector);
    if (!found && !el.getRootNode) {
      return null;
    }
    return found || __closestFrom(el.getRootNode().host);
  }
  return __closestFrom(base);
}
function onTouchStart(event) {
  const swiper = this;
  const document2 = getDocument();
  const window2 = getWindow();
  const data = swiper.touchEventsData;
  data.evCache.push(event);
  const {
    params,
    touches,
    enabled
  } = swiper;
  if (!enabled) return;
  if (!params.simulateTouch && event.pointerType === "mouse") return;
  if (swiper.animating && params.preventInteractionOnTransition) {
    return;
  }
  if (!swiper.animating && params.cssMode && params.loop) {
    swiper.loopFix();
  }
  let e = event;
  if (e.originalEvent) e = e.originalEvent;
  let targetEl = e.target;
  if (params.touchEventsTarget === "wrapper") {
    if (!swiper.wrapperEl.contains(targetEl)) return;
  }
  if ("which" in e && e.which === 3) return;
  if ("button" in e && e.button > 0) return;
  if (data.isTouched && data.isMoved) return;
  const swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== "";
  const eventPath = event.composedPath ? event.composedPath() : event.path;
  if (swipingClassHasValue && e.target && e.target.shadowRoot && eventPath) {
    targetEl = eventPath[0];
  }
  const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
  const isTargetShadow = !!(e.target && e.target.shadowRoot);
  if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, targetEl) : targetEl.closest(noSwipingSelector))) {
    swiper.allowClick = true;
    return;
  }
  if (params.swipeHandler) {
    if (!targetEl.closest(params.swipeHandler)) return;
  }
  touches.currentX = e.pageX;
  touches.currentY = e.pageY;
  const startX = touches.currentX;
  const startY = touches.currentY;
  const edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
  const edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;
  if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window2.innerWidth - edgeSwipeThreshold)) {
    if (edgeSwipeDetection === "prevent") {
      event.preventDefault();
    } else {
      return;
    }
  }
  Object.assign(data, {
    isTouched: true,
    isMoved: false,
    allowTouchCallbacks: true,
    isScrolling: void 0,
    startMoving: void 0
  });
  touches.startX = startX;
  touches.startY = startY;
  data.touchStartTime = now();
  swiper.allowClick = true;
  swiper.updateSize();
  swiper.swipeDirection = void 0;
  if (params.threshold > 0) data.allowThresholdMove = false;
  let preventDefault = true;
  if (targetEl.matches(data.focusableElements)) {
    preventDefault = false;
    if (targetEl.nodeName === "SELECT") {
      data.isTouched = false;
    }
  }
  if (document2.activeElement && document2.activeElement.matches(data.focusableElements) && document2.activeElement !== targetEl) {
    document2.activeElement.blur();
  }
  const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
  if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !targetEl.isContentEditable) {
    e.preventDefault();
  }
  if (params.freeMode && params.freeMode.enabled && swiper.freeMode && swiper.animating && !params.cssMode) {
    swiper.freeMode.onTouchStart();
  }
  swiper.emit("touchStart", e);
}
function onTouchMove(event) {
  const document2 = getDocument();
  const swiper = this;
  const data = swiper.touchEventsData;
  const {
    params,
    touches,
    rtlTranslate: rtl,
    enabled
  } = swiper;
  if (!enabled) return;
  if (!params.simulateTouch && event.pointerType === "mouse") return;
  let e = event;
  if (e.originalEvent) e = e.originalEvent;
  if (!data.isTouched) {
    if (data.startMoving && data.isScrolling) {
      swiper.emit("touchMoveOpposite", e);
    }
    return;
  }
  const pointerIndex = data.evCache.findIndex(cachedEv => cachedEv.pointerId === e.pointerId);
  if (pointerIndex >= 0) data.evCache[pointerIndex] = e;
  const targetTouch = data.evCache.length > 1 ? data.evCache[0] : e;
  const pageX = targetTouch.pageX;
  const pageY = targetTouch.pageY;
  if (e.preventedByNestedSwiper) {
    touches.startX = pageX;
    touches.startY = pageY;
    return;
  }
  if (!swiper.allowTouchMove) {
    if (!e.target.matches(data.focusableElements)) {
      swiper.allowClick = false;
    }
    if (data.isTouched) {
      Object.assign(touches, {
        startX: pageX,
        startY: pageY,
        prevX: swiper.touches.currentX,
        prevY: swiper.touches.currentY,
        currentX: pageX,
        currentY: pageY
      });
      data.touchStartTime = now();
    }
    return;
  }
  if (params.touchReleaseOnEdges && !params.loop) {
    if (swiper.isVertical()) {
      if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
        data.isTouched = false;
        data.isMoved = false;
        return;
      }
    } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) {
      return;
    }
  }
  if (document2.activeElement) {
    if (e.target === document2.activeElement && e.target.matches(data.focusableElements)) {
      data.isMoved = true;
      swiper.allowClick = false;
      return;
    }
  }
  if (data.allowTouchCallbacks) {
    swiper.emit("touchMove", e);
  }
  if (e.targetTouches && e.targetTouches.length > 1) return;
  touches.currentX = pageX;
  touches.currentY = pageY;
  const diffX = touches.currentX - touches.startX;
  const diffY = touches.currentY - touches.startY;
  if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold) return;
  if (typeof data.isScrolling === "undefined") {
    let touchAngle;
    if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) {
      data.isScrolling = false;
    } else {
      if (diffX * diffX + diffY * diffY >= 25) {
        touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
        data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
      }
    }
  }
  if (data.isScrolling) {
    swiper.emit("touchMoveOpposite", e);
  }
  if (typeof data.startMoving === "undefined") {
    if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
      data.startMoving = true;
    }
  }
  if (data.isScrolling || swiper.zoom && swiper.params.zoom && swiper.params.zoom.enabled && data.evCache.length > 1) {
    data.isTouched = false;
    return;
  }
  if (!data.startMoving) {
    return;
  }
  swiper.allowClick = false;
  if (!params.cssMode && e.cancelable) {
    e.preventDefault();
  }
  if (params.touchMoveStopPropagation && !params.nested) {
    e.stopPropagation();
  }
  let diff = swiper.isHorizontal() ? diffX : diffY;
  let touchesDiff = swiper.isHorizontal() ? touches.currentX - touches.previousX : touches.currentY - touches.previousY;
  if (params.oneWayMovement) {
    diff = Math.abs(diff) * (rtl ? 1 : -1);
    touchesDiff = Math.abs(touchesDiff) * (rtl ? 1 : -1);
  }
  touches.diff = diff;
  diff *= params.touchRatio;
  if (rtl) {
    diff = -diff;
    touchesDiff = -touchesDiff;
  }
  const prevTouchesDirection = swiper.touchesDirection;
  swiper.swipeDirection = diff > 0 ? "prev" : "next";
  swiper.touchesDirection = touchesDiff > 0 ? "prev" : "next";
  const isLoop = swiper.params.loop && !params.cssMode;
  const allowLoopFix = swiper.swipeDirection === "next" && swiper.allowSlideNext || swiper.swipeDirection === "prev" && swiper.allowSlidePrev;
  if (!data.isMoved) {
    if (isLoop && allowLoopFix) {
      swiper.loopFix({
        direction: swiper.swipeDirection
      });
    }
    data.startTranslate = swiper.getTranslate();
    swiper.setTransition(0);
    if (swiper.animating) {
      const evt = new window.CustomEvent("transitionend", {
        bubbles: true,
        cancelable: true
      });
      swiper.wrapperEl.dispatchEvent(evt);
    }
    data.allowMomentumBounce = false;
    if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
      swiper.setGrabCursor(true);
    }
    swiper.emit("sliderFirstMove", e);
  }
  let loopFixed;
  if (data.isMoved && prevTouchesDirection !== swiper.touchesDirection && isLoop && allowLoopFix && Math.abs(diff) >= 1) {
    swiper.loopFix({
      direction: swiper.swipeDirection,
      setTranslate: true
    });
    loopFixed = true;
  }
  swiper.emit("sliderMove", e);
  data.isMoved = true;
  data.currentTranslate = diff + data.startTranslate;
  let disableParentSwiper = true;
  let resistanceRatio = params.resistanceRatio;
  if (params.touchReleaseOnEdges) {
    resistanceRatio = 0;
  }
  if (diff > 0) {
    if (isLoop && allowLoopFix && !loopFixed && data.currentTranslate > (params.centeredSlides ? swiper.minTranslate() - swiper.size / 2 : swiper.minTranslate())) {
      swiper.loopFix({
        direction: "prev",
        setTranslate: true,
        activeSlideIndex: 0
      });
    }
    if (data.currentTranslate > swiper.minTranslate()) {
      disableParentSwiper = false;
      if (params.resistance) {
        data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio;
      }
    }
  } else if (diff < 0) {
    if (isLoop && allowLoopFix && !loopFixed && data.currentTranslate < (params.centeredSlides ? swiper.maxTranslate() + swiper.size / 2 : swiper.maxTranslate())) {
      swiper.loopFix({
        direction: "next",
        setTranslate: true,
        activeSlideIndex: swiper.slides.length - (params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(parseFloat(params.slidesPerView, 10)))
      });
    }
    if (data.currentTranslate < swiper.maxTranslate()) {
      disableParentSwiper = false;
      if (params.resistance) {
        data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio;
      }
    }
  }
  if (disableParentSwiper) {
    e.preventedByNestedSwiper = true;
  }
  if (!swiper.allowSlideNext && swiper.swipeDirection === "next" && data.currentTranslate < data.startTranslate) {
    data.currentTranslate = data.startTranslate;
  }
  if (!swiper.allowSlidePrev && swiper.swipeDirection === "prev" && data.currentTranslate > data.startTranslate) {
    data.currentTranslate = data.startTranslate;
  }
  if (!swiper.allowSlidePrev && !swiper.allowSlideNext) {
    data.currentTranslate = data.startTranslate;
  }
  if (params.threshold > 0) {
    if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
      if (!data.allowThresholdMove) {
        data.allowThresholdMove = true;
        touches.startX = touches.currentX;
        touches.startY = touches.currentY;
        data.currentTranslate = data.startTranslate;
        touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
        return;
      }
    } else {
      data.currentTranslate = data.startTranslate;
      return;
    }
  }
  if (!params.followFinger || params.cssMode) return;
  if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  }
  if (params.freeMode && params.freeMode.enabled && swiper.freeMode) {
    swiper.freeMode.onTouchMove();
  }
  swiper.updateProgress(data.currentTranslate);
  swiper.setTranslate(data.currentTranslate);
}
function onTouchEnd(event) {
  const swiper = this;
  const data = swiper.touchEventsData;
  const pointerIndex = data.evCache.findIndex(cachedEv => cachedEv.pointerId === event.pointerId);
  if (pointerIndex >= 0) {
    data.evCache.splice(pointerIndex, 1);
  }
  if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(event.type)) {
    const proceed = ["pointercancel", "contextmenu"].includes(event.type) && (swiper.browser.isSafari || swiper.browser.isWebView);
    if (!proceed) {
      return;
    }
  }
  const {
    params,
    touches,
    rtlTranslate: rtl,
    slidesGrid,
    enabled
  } = swiper;
  if (!enabled) return;
  if (!params.simulateTouch && event.pointerType === "mouse") return;
  let e = event;
  if (e.originalEvent) e = e.originalEvent;
  if (data.allowTouchCallbacks) {
    swiper.emit("touchEnd", e);
  }
  data.allowTouchCallbacks = false;
  if (!data.isTouched) {
    if (data.isMoved && params.grabCursor) {
      swiper.setGrabCursor(false);
    }
    data.isMoved = false;
    data.startMoving = false;
    return;
  }
  if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
    swiper.setGrabCursor(false);
  }
  const touchEndTime = now();
  const timeDiff = touchEndTime - data.touchStartTime;
  if (swiper.allowClick) {
    const pathTree = e.path || e.composedPath && e.composedPath();
    swiper.updateClickedSlide(pathTree && pathTree[0] || e.target, pathTree);
    swiper.emit("tap click", e);
    if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) {
      swiper.emit("doubleTap doubleClick", e);
    }
  }
  data.lastClickTime = now();
  nextTick(() => {
    if (!swiper.destroyed) swiper.allowClick = true;
  });
  if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 || data.currentTranslate === data.startTranslate) {
    data.isTouched = false;
    data.isMoved = false;
    data.startMoving = false;
    return;
  }
  data.isTouched = false;
  data.isMoved = false;
  data.startMoving = false;
  let currentPos;
  if (params.followFinger) {
    currentPos = rtl ? swiper.translate : -swiper.translate;
  } else {
    currentPos = -data.currentTranslate;
  }
  if (params.cssMode) {
    return;
  }
  if (params.freeMode && params.freeMode.enabled) {
    swiper.freeMode.onTouchEnd({
      currentPos
    });
    return;
  }
  let stopIndex = 0;
  let groupSize = swiper.slidesSizesGrid[0];
  for (let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
    const increment2 = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
    if (typeof slidesGrid[i + increment2] !== "undefined") {
      if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment2]) {
        stopIndex = i;
        groupSize = slidesGrid[i + increment2] - slidesGrid[i];
      }
    } else if (currentPos >= slidesGrid[i]) {
      stopIndex = i;
      groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
    }
  }
  let rewindFirstIndex = null;
  let rewindLastIndex = null;
  if (params.rewind) {
    if (swiper.isBeginning) {
      rewindLastIndex = params.virtual && params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
    } else if (swiper.isEnd) {
      rewindFirstIndex = 0;
    }
  }
  const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
  const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
  if (timeDiff > params.longSwipesMs) {
    if (!params.longSwipes) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }
    if (swiper.swipeDirection === "next") {
      if (ratio >= params.longSwipesRatio) swiper.slideTo(params.rewind && swiper.isEnd ? rewindFirstIndex : stopIndex + increment);else swiper.slideTo(stopIndex);
    }
    if (swiper.swipeDirection === "prev") {
      if (ratio > 1 - params.longSwipesRatio) {
        swiper.slideTo(stopIndex + increment);
      } else if (rewindLastIndex !== null && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio) {
        swiper.slideTo(rewindLastIndex);
      } else {
        swiper.slideTo(stopIndex);
      }
    }
  } else {
    if (!params.shortSwipes) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }
    const isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);
    if (!isNavButtonTarget) {
      if (swiper.swipeDirection === "next") {
        swiper.slideTo(rewindFirstIndex !== null ? rewindFirstIndex : stopIndex + increment);
      }
      if (swiper.swipeDirection === "prev") {
        swiper.slideTo(rewindLastIndex !== null ? rewindLastIndex : stopIndex);
      }
    } else if (e.target === swiper.navigation.nextEl) {
      swiper.slideTo(stopIndex + increment);
    } else {
      swiper.slideTo(stopIndex);
    }
  }
}
function onResize() {
  const swiper = this;
  const {
    params,
    el
  } = swiper;
  if (el && el.offsetWidth === 0) return;
  if (params.breakpoints) {
    swiper.setBreakpoint();
  }
  const {
    allowSlideNext,
    allowSlidePrev,
    snapGrid
  } = swiper;
  const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
  swiper.allowSlideNext = true;
  swiper.allowSlidePrev = true;
  swiper.updateSize();
  swiper.updateSlides();
  swiper.updateSlidesClasses();
  const isVirtualLoop = isVirtual && params.loop;
  if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides && !isVirtualLoop) {
    swiper.slideTo(swiper.slides.length - 1, 0, false, true);
  } else {
    if (swiper.params.loop && !isVirtual) {
      swiper.slideToLoop(swiper.realIndex, 0, false, true);
    } else {
      swiper.slideTo(swiper.activeIndex, 0, false, true);
    }
  }
  if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
    clearTimeout(swiper.autoplay.resizeTimeout);
    swiper.autoplay.resizeTimeout = setTimeout(() => {
      if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
        swiper.autoplay.resume();
      }
    }, 500);
  }
  swiper.allowSlidePrev = allowSlidePrev;
  swiper.allowSlideNext = allowSlideNext;
  if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
    swiper.checkOverflow();
  }
}
function onClick(e) {
  const swiper = this;
  if (!swiper.enabled) return;
  if (!swiper.allowClick) {
    if (swiper.params.preventClicks) e.preventDefault();
    if (swiper.params.preventClicksPropagation && swiper.animating) {
      e.stopPropagation();
      e.stopImmediatePropagation();
    }
  }
}
function onScroll() {
  const swiper = this;
  const {
    wrapperEl,
    rtlTranslate,
    enabled
  } = swiper;
  if (!enabled) return;
  swiper.previousTranslate = swiper.translate;
  if (swiper.isHorizontal()) {
    swiper.translate = -wrapperEl.scrollLeft;
  } else {
    swiper.translate = -wrapperEl.scrollTop;
  }
  if (swiper.translate === 0) swiper.translate = 0;
  swiper.updateActiveIndex();
  swiper.updateSlidesClasses();
  let newProgress;
  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  if (translatesDiff === 0) {
    newProgress = 0;
  } else {
    newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
  }
  if (newProgress !== swiper.progress) {
    swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
  }
  swiper.emit("setTranslate", swiper.translate, false);
}
function onLoad(e) {
  const swiper = this;
  processLazyPreloader(swiper, e.target);
  if (swiper.params.cssMode || swiper.params.slidesPerView !== "auto" && !swiper.params.autoHeight) {
    return;
  }
  swiper.update();
}
var dummyEventAttached = false;
function dummyEventListener() {}
var events = (swiper, method) => {
  const document2 = getDocument();
  const {
    params,
    el,
    wrapperEl,
    device
  } = swiper;
  const capture = !!params.nested;
  const domMethod = method === "on" ? "addEventListener" : "removeEventListener";
  const swiperMethod = method;
  el[domMethod]("pointerdown", swiper.onTouchStart, {
    passive: false
  });
  document2[domMethod]("pointermove", swiper.onTouchMove, {
    passive: false,
    capture
  });
  document2[domMethod]("pointerup", swiper.onTouchEnd, {
    passive: true
  });
  document2[domMethod]("pointercancel", swiper.onTouchEnd, {
    passive: true
  });
  document2[domMethod]("pointerout", swiper.onTouchEnd, {
    passive: true
  });
  document2[domMethod]("pointerleave", swiper.onTouchEnd, {
    passive: true
  });
  document2[domMethod]("contextmenu", swiper.onTouchEnd, {
    passive: true
  });
  if (params.preventClicks || params.preventClicksPropagation) {
    el[domMethod]("click", swiper.onClick, true);
  }
  if (params.cssMode) {
    wrapperEl[domMethod]("scroll", swiper.onScroll);
  }
  if (params.updateOnWindowResize) {
    swiper[swiperMethod](device.ios || device.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", onResize, true);
  } else {
    swiper[swiperMethod]("observerUpdate", onResize, true);
  }
  el[domMethod]("load", swiper.onLoad, {
    capture: true
  });
};
function attachEvents() {
  const swiper = this;
  const document2 = getDocument();
  const {
    params
  } = swiper;
  swiper.onTouchStart = onTouchStart.bind(swiper);
  swiper.onTouchMove = onTouchMove.bind(swiper);
  swiper.onTouchEnd = onTouchEnd.bind(swiper);
  if (params.cssMode) {
    swiper.onScroll = onScroll.bind(swiper);
  }
  swiper.onClick = onClick.bind(swiper);
  swiper.onLoad = onLoad.bind(swiper);
  if (!dummyEventAttached) {
    document2.addEventListener("touchstart", dummyEventListener);
    dummyEventAttached = true;
  }
  events(swiper, "on");
}
function detachEvents() {
  const swiper = this;
  events(swiper, "off");
}
var events$1 = {
  attachEvents,
  detachEvents
};
var isGridEnabled = (swiper, params) => {
  return swiper.grid && params.grid && params.grid.rows > 1;
};
function setBreakpoint() {
  const swiper = this;
  const {
    realIndex,
    initialized,
    params,
    el
  } = swiper;
  const breakpoints2 = params.breakpoints;
  if (!breakpoints2 || breakpoints2 && Object.keys(breakpoints2).length === 0) return;
  const breakpoint = swiper.getBreakpoint(breakpoints2, swiper.params.breakpointsBase, swiper.el);
  if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
  const breakpointOnlyParams = breakpoint in breakpoints2 ? breakpoints2[breakpoint] : void 0;
  const breakpointParams = breakpointOnlyParams || swiper.originalParams;
  const wasMultiRow = isGridEnabled(swiper, params);
  const isMultiRow = isGridEnabled(swiper, breakpointParams);
  const wasEnabled = params.enabled;
  if (wasMultiRow && !isMultiRow) {
    el.classList.remove(`${params.containerModifierClass}grid`, `${params.containerModifierClass}grid-column`);
    swiper.emitContainerClasses();
  } else if (!wasMultiRow && isMultiRow) {
    el.classList.add(`${params.containerModifierClass}grid`);
    if (breakpointParams.grid.fill && breakpointParams.grid.fill === "column" || !breakpointParams.grid.fill && params.grid.fill === "column") {
      el.classList.add(`${params.containerModifierClass}grid-column`);
    }
    swiper.emitContainerClasses();
  }
  ["navigation", "pagination", "scrollbar"].forEach(prop => {
    if (typeof breakpointParams[prop] === "undefined") return;
    const wasModuleEnabled = params[prop] && params[prop].enabled;
    const isModuleEnabled = breakpointParams[prop] && breakpointParams[prop].enabled;
    if (wasModuleEnabled && !isModuleEnabled) {
      swiper[prop].disable();
    }
    if (!wasModuleEnabled && isModuleEnabled) {
      swiper[prop].enable();
    }
  });
  const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
  const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
  const wasLoop = params.loop;
  if (directionChanged && initialized) {
    swiper.changeDirection();
  }
  extend2(swiper.params, breakpointParams);
  const isEnabled = swiper.params.enabled;
  const hasLoop = swiper.params.loop;
  Object.assign(swiper, {
    allowTouchMove: swiper.params.allowTouchMove,
    allowSlideNext: swiper.params.allowSlideNext,
    allowSlidePrev: swiper.params.allowSlidePrev
  });
  if (wasEnabled && !isEnabled) {
    swiper.disable();
  } else if (!wasEnabled && isEnabled) {
    swiper.enable();
  }
  swiper.currentBreakpoint = breakpoint;
  swiper.emit("_beforeBreakpoint", breakpointParams);
  if (initialized) {
    if (needsReLoop) {
      swiper.loopDestroy();
      swiper.loopCreate(realIndex);
      swiper.updateSlides();
    } else if (!wasLoop && hasLoop) {
      swiper.loopCreate(realIndex);
      swiper.updateSlides();
    } else if (wasLoop && !hasLoop) {
      swiper.loopDestroy();
    }
  }
  swiper.emit("breakpoint", breakpointParams);
}
function getBreakpoint(breakpoints2, base, containerEl) {
  if (base === void 0) {
    base = "window";
  }
  if (!breakpoints2 || base === "container" && !containerEl) return void 0;
  let breakpoint = false;
  const window2 = getWindow();
  const currentHeight = base === "window" ? window2.innerHeight : containerEl.clientHeight;
  const points = Object.keys(breakpoints2).map(point => {
    if (typeof point === "string" && point.indexOf("@") === 0) {
      const minRatio = parseFloat(point.substr(1));
      const value = currentHeight * minRatio;
      return {
        value,
        point
      };
    }
    return {
      value: point,
      point
    };
  });
  points.sort((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10));
  for (let i = 0; i < points.length; i += 1) {
    const {
      point,
      value
    } = points[i];
    if (base === "window") {
      if (window2.matchMedia(`(min-width: ${value}px)`).matches) {
        breakpoint = point;
      }
    } else if (value <= containerEl.clientWidth) {
      breakpoint = point;
    }
  }
  return breakpoint || "max";
}
var breakpoints = {
  setBreakpoint,
  getBreakpoint
};
function prepareClasses(entries, prefix) {
  const resultClasses = [];
  entries.forEach(item => {
    if (typeof item === "object") {
      Object.keys(item).forEach(classNames => {
        if (item[classNames]) {
          resultClasses.push(prefix + classNames);
        }
      });
    } else if (typeof item === "string") {
      resultClasses.push(prefix + item);
    }
  });
  return resultClasses;
}
function addClasses() {
  const swiper = this;
  const {
    classNames,
    params,
    rtl,
    el,
    device
  } = swiper;
  const suffixes = prepareClasses(["initialized", params.direction, {
    "free-mode": swiper.params.freeMode && params.freeMode.enabled
  }, {
    "autoheight": params.autoHeight
  }, {
    "rtl": rtl
  }, {
    "grid": params.grid && params.grid.rows > 1
  }, {
    "grid-column": params.grid && params.grid.rows > 1 && params.grid.fill === "column"
  }, {
    "android": device.android
  }, {
    "ios": device.ios
  }, {
    "css-mode": params.cssMode
  }, {
    "centered": params.cssMode && params.centeredSlides
  }, {
    "watch-progress": params.watchSlidesProgress
  }], params.containerModifierClass);
  classNames.push(...suffixes);
  el.classList.add(...classNames);
  swiper.emitContainerClasses();
}
function removeClasses() {
  const swiper = this;
  const {
    el,
    classNames
  } = swiper;
  el.classList.remove(...classNames);
  swiper.emitContainerClasses();
}
var classes = {
  addClasses,
  removeClasses
};
function checkOverflow() {
  const swiper = this;
  const {
    isLocked: wasLocked,
    params
  } = swiper;
  const {
    slidesOffsetBefore
  } = params;
  if (slidesOffsetBefore) {
    const lastSlideIndex = swiper.slides.length - 1;
    const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + slidesOffsetBefore * 2;
    swiper.isLocked = swiper.size > lastSlideRightEdge;
  } else {
    swiper.isLocked = swiper.snapGrid.length === 1;
  }
  if (params.allowSlideNext === true) {
    swiper.allowSlideNext = !swiper.isLocked;
  }
  if (params.allowSlidePrev === true) {
    swiper.allowSlidePrev = !swiper.isLocked;
  }
  if (wasLocked && wasLocked !== swiper.isLocked) {
    swiper.isEnd = false;
  }
  if (wasLocked !== swiper.isLocked) {
    swiper.emit(swiper.isLocked ? "lock" : "unlock");
  }
}
var checkOverflow$1 = {
  checkOverflow
};
var defaults = {
  init: true,
  direction: "horizontal",
  oneWayMovement: false,
  touchEventsTarget: "wrapper",
  initialSlide: 0,
  speed: 300,
  cssMode: false,
  updateOnWindowResize: true,
  resizeObserver: true,
  nested: false,
  createElements: false,
  enabled: true,
  focusableElements: "input, select, option, textarea, button, video, label",
  // Overrides
  width: null,
  height: null,
  //
  preventInteractionOnTransition: false,
  // ssr
  userAgent: null,
  url: null,
  // To support iOS's swipe-to-go-back gesture (when being used in-app).
  edgeSwipeDetection: false,
  edgeSwipeThreshold: 20,
  // Autoheight
  autoHeight: false,
  // Set wrapper width
  setWrapperSize: false,
  // Virtual Translate
  virtualTranslate: false,
  // Effects
  effect: "slide",
  // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
  // Breakpoints
  breakpoints: void 0,
  breakpointsBase: "window",
  // Slides grid
  spaceBetween: 0,
  slidesPerView: 1,
  slidesPerGroup: 1,
  slidesPerGroupSkip: 0,
  slidesPerGroupAuto: false,
  centeredSlides: false,
  centeredSlidesBounds: false,
  slidesOffsetBefore: 0,
  // in px
  slidesOffsetAfter: 0,
  // in px
  normalizeSlideIndex: true,
  centerInsufficientSlides: false,
  // Disable swiper and hide navigation when container not overflow
  watchOverflow: true,
  // Round length
  roundLengths: false,
  // Touches
  touchRatio: 1,
  touchAngle: 45,
  simulateTouch: true,
  shortSwipes: true,
  longSwipes: true,
  longSwipesRatio: 0.5,
  longSwipesMs: 300,
  followFinger: true,
  allowTouchMove: true,
  threshold: 5,
  touchMoveStopPropagation: false,
  touchStartPreventDefault: true,
  touchStartForcePreventDefault: false,
  touchReleaseOnEdges: false,
  // Unique Navigation Elements
  uniqueNavElements: true,
  // Resistance
  resistance: true,
  resistanceRatio: 0.85,
  // Progress
  watchSlidesProgress: false,
  // Cursor
  grabCursor: false,
  // Clicks
  preventClicks: true,
  preventClicksPropagation: true,
  slideToClickedSlide: false,
  // loop
  loop: false,
  loopedSlides: null,
  loopPreventsSliding: true,
  // rewind
  rewind: false,
  // Swiping/no swiping
  allowSlidePrev: true,
  allowSlideNext: true,
  swipeHandler: null,
  // '.swipe-handler',
  noSwiping: true,
  noSwipingClass: "swiper-no-swiping",
  noSwipingSelector: null,
  // Passive Listeners
  passiveListeners: true,
  maxBackfaceHiddenSlides: 10,
  // NS
  containerModifierClass: "swiper-",
  // NEW
  slideClass: "swiper-slide",
  slideActiveClass: "swiper-slide-active",
  slideVisibleClass: "swiper-slide-visible",
  slideNextClass: "swiper-slide-next",
  slidePrevClass: "swiper-slide-prev",
  wrapperClass: "swiper-wrapper",
  lazyPreloaderClass: "swiper-lazy-preloader",
  lazyPreloadPrevNext: 0,
  // Callbacks
  runCallbacksOnInit: true,
  // Internals
  _emitClasses: false
};
function moduleExtendParams(params, allModulesParams) {
  return function extendParams(obj) {
    if (obj === void 0) {
      obj = {};
    }
    const moduleParamName = Object.keys(obj)[0];
    const moduleParams = obj[moduleParamName];
    if (typeof moduleParams !== "object" || moduleParams === null) {
      extend2(allModulesParams, obj);
      return;
    }
    if (params[moduleParamName] === true) {
      params[moduleParamName] = {
        enabled: true
      };
    }
    if (moduleParamName === "navigation" && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].prevEl && !params[moduleParamName].nextEl) {
      params[moduleParamName].auto = true;
    }
    if (["pagination", "scrollbar"].indexOf(moduleParamName) >= 0 && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].el) {
      params[moduleParamName].auto = true;
    }
    if (!(moduleParamName in params && "enabled" in moduleParams)) {
      extend2(allModulesParams, obj);
      return;
    }
    if (typeof params[moduleParamName] === "object" && !("enabled" in params[moduleParamName])) {
      params[moduleParamName].enabled = true;
    }
    if (!params[moduleParamName]) params[moduleParamName] = {
      enabled: false
    };
    extend2(allModulesParams, obj);
  };
}
var prototypes = {
  eventsEmitter,
  update,
  translate,
  transition,
  slide,
  loop,
  grabCursor,
  events: events$1,
  breakpoints,
  checkOverflow: checkOverflow$1,
  classes
};
var extendedDefaults = {};
var Swiper = class _Swiper {
  constructor() {
    let el;
    let params;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === "Object") {
      params = args[0];
    } else {
      [el, params] = args;
    }
    if (!params) params = {};
    params = extend2({}, params);
    if (el && !params.el) params.el = el;
    const document2 = getDocument();
    if (params.el && typeof params.el === "string" && document2.querySelectorAll(params.el).length > 1) {
      const swipers = [];
      document2.querySelectorAll(params.el).forEach(containerEl => {
        const newParams = extend2({}, params, {
          el: containerEl
        });
        swipers.push(new _Swiper(newParams));
      });
      return swipers;
    }
    const swiper = this;
    swiper.__swiper__ = true;
    swiper.support = getSupport();
    swiper.device = getDevice({
      userAgent: params.userAgent
    });
    swiper.browser = getBrowser();
    swiper.eventsListeners = {};
    swiper.eventsAnyListeners = [];
    swiper.modules = [...swiper.__modules__];
    if (params.modules && Array.isArray(params.modules)) {
      swiper.modules.push(...params.modules);
    }
    const allModulesParams = {};
    swiper.modules.forEach(mod => {
      mod({
        params,
        swiper,
        extendParams: moduleExtendParams(params, allModulesParams),
        on: swiper.on.bind(swiper),
        once: swiper.once.bind(swiper),
        off: swiper.off.bind(swiper),
        emit: swiper.emit.bind(swiper)
      });
    });
    const swiperParams = extend2({}, defaults, allModulesParams);
    swiper.params = extend2({}, swiperParams, extendedDefaults, params);
    swiper.originalParams = extend2({}, swiper.params);
    swiper.passedParams = extend2({}, params);
    if (swiper.params && swiper.params.on) {
      Object.keys(swiper.params.on).forEach(eventName => {
        swiper.on(eventName, swiper.params.on[eventName]);
      });
    }
    if (swiper.params && swiper.params.onAny) {
      swiper.onAny(swiper.params.onAny);
    }
    Object.assign(swiper, {
      enabled: swiper.params.enabled,
      el,
      // Classes
      classNames: [],
      // Slides
      slides: [],
      slidesGrid: [],
      snapGrid: [],
      slidesSizesGrid: [],
      // isDirection
      isHorizontal() {
        return swiper.params.direction === "horizontal";
      },
      isVertical() {
        return swiper.params.direction === "vertical";
      },
      // Indexes
      activeIndex: 0,
      realIndex: 0,
      //
      isBeginning: true,
      isEnd: false,
      // Props
      translate: 0,
      previousTranslate: 0,
      progress: 0,
      velocity: 0,
      animating: false,
      cssOverflowAdjustment() {
        return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
      },
      // Locks
      allowSlideNext: swiper.params.allowSlideNext,
      allowSlidePrev: swiper.params.allowSlidePrev,
      // Touch Events
      touchEventsData: {
        isTouched: void 0,
        isMoved: void 0,
        allowTouchCallbacks: void 0,
        touchStartTime: void 0,
        isScrolling: void 0,
        currentTranslate: void 0,
        startTranslate: void 0,
        allowThresholdMove: void 0,
        // Form elements to match
        focusableElements: swiper.params.focusableElements,
        // Last click time
        lastClickTime: 0,
        clickTimeout: void 0,
        // Velocities
        velocities: [],
        allowMomentumBounce: void 0,
        startMoving: void 0,
        evCache: []
      },
      // Clicks
      allowClick: true,
      // Touches
      allowTouchMove: swiper.params.allowTouchMove,
      touches: {
        startX: 0,
        startY: 0,
        currentX: 0,
        currentY: 0,
        diff: 0
      },
      // Images
      imagesToLoad: [],
      imagesLoaded: 0
    });
    swiper.emit("_swiper");
    if (swiper.params.init) {
      swiper.init();
    }
    return swiper;
  }
  getSlideIndex(slideEl) {
    const {
      slidesEl,
      params
    } = this;
    const slides = elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
    const firstSlideIndex = elementIndex(slides[0]);
    return elementIndex(slideEl) - firstSlideIndex;
  }
  getSlideIndexByData(index) {
    return this.getSlideIndex(this.slides.filter(slideEl => slideEl.getAttribute("data-swiper-slide-index") * 1 === index)[0]);
  }
  recalcSlides() {
    const swiper = this;
    const {
      slidesEl,
      params
    } = swiper;
    swiper.slides = elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
  }
  enable() {
    const swiper = this;
    if (swiper.enabled) return;
    swiper.enabled = true;
    if (swiper.params.grabCursor) {
      swiper.setGrabCursor();
    }
    swiper.emit("enable");
  }
  disable() {
    const swiper = this;
    if (!swiper.enabled) return;
    swiper.enabled = false;
    if (swiper.params.grabCursor) {
      swiper.unsetGrabCursor();
    }
    swiper.emit("disable");
  }
  setProgress(progress, speed) {
    const swiper = this;
    progress = Math.min(Math.max(progress, 0), 1);
    const min = swiper.minTranslate();
    const max = swiper.maxTranslate();
    const current = (max - min) * progress + min;
    swiper.translateTo(current, typeof speed === "undefined" ? 0 : speed);
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  }
  emitContainerClasses() {
    const swiper = this;
    if (!swiper.params._emitClasses || !swiper.el) return;
    const cls = swiper.el.className.split(" ").filter(className => {
      return className.indexOf("swiper") === 0 || className.indexOf(swiper.params.containerModifierClass) === 0;
    });
    swiper.emit("_containerClasses", cls.join(" "));
  }
  getSlideClasses(slideEl) {
    const swiper = this;
    if (swiper.destroyed) return "";
    return slideEl.className.split(" ").filter(className => {
      return className.indexOf("swiper-slide") === 0 || className.indexOf(swiper.params.slideClass) === 0;
    }).join(" ");
  }
  emitSlidesClasses() {
    const swiper = this;
    if (!swiper.params._emitClasses || !swiper.el) return;
    const updates = [];
    swiper.slides.forEach(slideEl => {
      const classNames = swiper.getSlideClasses(slideEl);
      updates.push({
        slideEl,
        classNames
      });
      swiper.emit("_slideClass", slideEl, classNames);
    });
    swiper.emit("_slideClasses", updates);
  }
  slidesPerViewDynamic(view, exact) {
    if (view === void 0) {
      view = "current";
    }
    if (exact === void 0) {
      exact = false;
    }
    const swiper = this;
    const {
      params,
      slides,
      slidesGrid,
      slidesSizesGrid,
      size: swiperSize,
      activeIndex
    } = swiper;
    let spv = 1;
    if (typeof params.slidesPerView === "number") return params.slidesPerView;
    if (params.centeredSlides) {
      let slideSize = slides[activeIndex] ? slides[activeIndex].swiperSlideSize : 0;
      let breakLoop;
      for (let i = activeIndex + 1; i < slides.length; i += 1) {
        if (slides[i] && !breakLoop) {
          slideSize += slides[i].swiperSlideSize;
          spv += 1;
          if (slideSize > swiperSize) breakLoop = true;
        }
      }
      for (let i = activeIndex - 1; i >= 0; i -= 1) {
        if (slides[i] && !breakLoop) {
          slideSize += slides[i].swiperSlideSize;
          spv += 1;
          if (slideSize > swiperSize) breakLoop = true;
        }
      }
    } else {
      if (view === "current") {
        for (let i = activeIndex + 1; i < slides.length; i += 1) {
          const slideInView = exact ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize;
          if (slideInView) {
            spv += 1;
          }
        }
      } else {
        for (let i = activeIndex - 1; i >= 0; i -= 1) {
          const slideInView = slidesGrid[activeIndex] - slidesGrid[i] < swiperSize;
          if (slideInView) {
            spv += 1;
          }
        }
      }
    }
    return spv;
  }
  update() {
    const swiper = this;
    if (!swiper || swiper.destroyed) return;
    const {
      snapGrid,
      params
    } = swiper;
    if (params.breakpoints) {
      swiper.setBreakpoint();
    }
    [...swiper.el.querySelectorAll('[loading="lazy"]')].forEach(imageEl => {
      if (imageEl.complete) {
        processLazyPreloader(swiper, imageEl);
      }
    });
    swiper.updateSize();
    swiper.updateSlides();
    swiper.updateProgress();
    swiper.updateSlidesClasses();
    function setTranslate2() {
      const translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
      const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
      swiper.setTranslate(newTranslate);
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
    let translated;
    if (params.freeMode && params.freeMode.enabled && !params.cssMode) {
      setTranslate2();
      if (params.autoHeight) {
        swiper.updateAutoHeight();
      }
    } else {
      if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper.isEnd && !params.centeredSlides) {
        const slides = swiper.virtual && params.virtual.enabled ? swiper.virtual.slides : swiper.slides;
        translated = swiper.slideTo(slides.length - 1, 0, false, true);
      } else {
        translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
      }
      if (!translated) {
        setTranslate2();
      }
    }
    if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
      swiper.checkOverflow();
    }
    swiper.emit("update");
  }
  changeDirection(newDirection, needUpdate) {
    if (needUpdate === void 0) {
      needUpdate = true;
    }
    const swiper = this;
    const currentDirection = swiper.params.direction;
    if (!newDirection) {
      newDirection = currentDirection === "horizontal" ? "vertical" : "horizontal";
    }
    if (newDirection === currentDirection || newDirection !== "horizontal" && newDirection !== "vertical") {
      return swiper;
    }
    swiper.el.classList.remove(`${swiper.params.containerModifierClass}${currentDirection}`);
    swiper.el.classList.add(`${swiper.params.containerModifierClass}${newDirection}`);
    swiper.emitContainerClasses();
    swiper.params.direction = newDirection;
    swiper.slides.forEach(slideEl => {
      if (newDirection === "vertical") {
        slideEl.style.width = "";
      } else {
        slideEl.style.height = "";
      }
    });
    swiper.emit("changeDirection");
    if (needUpdate) swiper.update();
    return swiper;
  }
  changeLanguageDirection(direction) {
    const swiper = this;
    if (swiper.rtl && direction === "rtl" || !swiper.rtl && direction === "ltr") return;
    swiper.rtl = direction === "rtl";
    swiper.rtlTranslate = swiper.params.direction === "horizontal" && swiper.rtl;
    if (swiper.rtl) {
      swiper.el.classList.add(`${swiper.params.containerModifierClass}rtl`);
      swiper.el.dir = "rtl";
    } else {
      swiper.el.classList.remove(`${swiper.params.containerModifierClass}rtl`);
      swiper.el.dir = "ltr";
    }
    swiper.update();
  }
  mount(element) {
    const swiper = this;
    if (swiper.mounted) return true;
    let el = element || swiper.params.el;
    if (typeof el === "string") {
      el = document.querySelector(el);
    }
    if (!el) {
      return false;
    }
    el.swiper = swiper;
    if (el.parentNode && el.parentNode.host && el.parentNode.host.nodeName === "SWIPER-CONTAINER") {
      swiper.isElement = true;
    }
    const getWrapperSelector = () => {
      return `.${(swiper.params.wrapperClass || "").trim().split(" ").join(".")}`;
    };
    const getWrapper = () => {
      if (el && el.shadowRoot && el.shadowRoot.querySelector) {
        const res = el.shadowRoot.querySelector(getWrapperSelector());
        return res;
      }
      return elementChildren(el, getWrapperSelector())[0];
    };
    let wrapperEl = getWrapper();
    if (!wrapperEl && swiper.params.createElements) {
      wrapperEl = createElement("div", swiper.params.wrapperClass);
      el.append(wrapperEl);
      elementChildren(el, `.${swiper.params.slideClass}`).forEach(slideEl => {
        wrapperEl.append(slideEl);
      });
    }
    Object.assign(swiper, {
      el,
      wrapperEl,
      slidesEl: swiper.isElement && !el.parentNode.host.slideSlots ? el.parentNode.host : wrapperEl,
      hostEl: swiper.isElement ? el.parentNode.host : el,
      mounted: true,
      // RTL
      rtl: el.dir.toLowerCase() === "rtl" || elementStyle(el, "direction") === "rtl",
      rtlTranslate: swiper.params.direction === "horizontal" && (el.dir.toLowerCase() === "rtl" || elementStyle(el, "direction") === "rtl"),
      wrongRTL: elementStyle(wrapperEl, "display") === "-webkit-box"
    });
    return true;
  }
  init(el) {
    const swiper = this;
    if (swiper.initialized) return swiper;
    const mounted = swiper.mount(el);
    if (mounted === false) return swiper;
    swiper.emit("beforeInit");
    if (swiper.params.breakpoints) {
      swiper.setBreakpoint();
    }
    swiper.addClasses();
    swiper.updateSize();
    swiper.updateSlides();
    if (swiper.params.watchOverflow) {
      swiper.checkOverflow();
    }
    if (swiper.params.grabCursor && swiper.enabled) {
      swiper.setGrabCursor();
    }
    if (swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) {
      swiper.slideTo(swiper.params.initialSlide + swiper.virtual.slidesBefore, 0, swiper.params.runCallbacksOnInit, false, true);
    } else {
      swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
    }
    if (swiper.params.loop) {
      swiper.loopCreate();
    }
    swiper.attachEvents();
    const lazyElements = [...swiper.el.querySelectorAll('[loading="lazy"]')];
    if (swiper.isElement) {
      lazyElements.push(...swiper.hostEl.querySelectorAll('[loading="lazy"]'));
    }
    lazyElements.forEach(imageEl => {
      if (imageEl.complete) {
        processLazyPreloader(swiper, imageEl);
      } else {
        imageEl.addEventListener("load", e => {
          processLazyPreloader(swiper, e.target);
        });
      }
    });
    preload(swiper);
    swiper.initialized = true;
    preload(swiper);
    swiper.emit("init");
    swiper.emit("afterInit");
    return swiper;
  }
  destroy(deleteInstance, cleanStyles) {
    if (deleteInstance === void 0) {
      deleteInstance = true;
    }
    if (cleanStyles === void 0) {
      cleanStyles = true;
    }
    const swiper = this;
    const {
      params,
      el,
      wrapperEl,
      slides
    } = swiper;
    if (typeof swiper.params === "undefined" || swiper.destroyed) {
      return null;
    }
    swiper.emit("beforeDestroy");
    swiper.initialized = false;
    swiper.detachEvents();
    if (params.loop) {
      swiper.loopDestroy();
    }
    if (cleanStyles) {
      swiper.removeClasses();
      el.removeAttribute("style");
      wrapperEl.removeAttribute("style");
      if (slides && slides.length) {
        slides.forEach(slideEl => {
          slideEl.classList.remove(params.slideVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
          slideEl.removeAttribute("style");
          slideEl.removeAttribute("data-swiper-slide-index");
        });
      }
    }
    swiper.emit("destroy");
    Object.keys(swiper.eventsListeners).forEach(eventName => {
      swiper.off(eventName);
    });
    if (deleteInstance !== false) {
      swiper.el.swiper = null;
      deleteProps(swiper);
    }
    swiper.destroyed = true;
    return null;
  }
  static extendDefaults(newDefaults) {
    extend2(extendedDefaults, newDefaults);
  }
  static get extendedDefaults() {
    return extendedDefaults;
  }
  static get defaults() {
    return defaults;
  }
  static installModule(mod) {
    if (!_Swiper.prototype.__modules__) _Swiper.prototype.__modules__ = [];
    const modules = _Swiper.prototype.__modules__;
    if (typeof mod === "function" && modules.indexOf(mod) < 0) {
      modules.push(mod);
    }
  }
  static use(module2) {
    if (Array.isArray(module2)) {
      module2.forEach(m => _Swiper.installModule(m));
      return _Swiper;
    }
    _Swiper.installModule(module2);
    return _Swiper;
  }
};
Object.keys(prototypes).forEach(prototypeGroup => {
  Object.keys(prototypes[prototypeGroup]).forEach(protoMethod => {
    Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
  });
});
Swiper.use([Resize, Observer]);

// .beyond/uimport/swiper.10.3.1.js
var swiper_10_3_1_default = Swiper;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9zd2lwZXIuMTAuMy4xLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3N3aXBlci9zaGFyZWQvc3NyLXdpbmRvdy5lc20ubWpzIiwiLi4vbm9kZV9tb2R1bGVzL3N3aXBlci9zaGFyZWQvdXRpbHMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL3N3aXBlci9zaGFyZWQvc3dpcGVyLWNvcmUubWpzIl0sIm5hbWVzIjpbInN3aXBlcl8xMF8zXzFfZXhwb3J0cyIsIl9fZXhwb3J0IiwiU3dpcGVyIiwiZGVmYXVsdCIsInN3aXBlcl8xMF8zXzFfZGVmYXVsdCIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJpc09iamVjdCIsIm9iaiIsImNvbnN0cnVjdG9yIiwiT2JqZWN0IiwiZXh0ZW5kIiwidGFyZ2V0Iiwic3JjIiwia2V5cyIsImZvckVhY2giLCJrZXkiLCJsZW5ndGgiLCJzc3JEb2N1bWVudCIsImJvZHkiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImFjdGl2ZUVsZW1lbnQiLCJibHVyIiwibm9kZU5hbWUiLCJxdWVyeVNlbGVjdG9yIiwicXVlcnlTZWxlY3RvckFsbCIsImdldEVsZW1lbnRCeUlkIiwiY3JlYXRlRXZlbnQiLCJpbml0RXZlbnQiLCJjcmVhdGVFbGVtZW50IiwiY2hpbGRyZW4iLCJjaGlsZE5vZGVzIiwic3R5bGUiLCJzZXRBdHRyaWJ1dGUiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImNyZWF0ZUVsZW1lbnROUyIsImltcG9ydE5vZGUiLCJsb2NhdGlvbiIsImhhc2giLCJob3N0IiwiaG9zdG5hbWUiLCJocmVmIiwib3JpZ2luIiwicGF0aG5hbWUiLCJwcm90b2NvbCIsInNlYXJjaCIsImdldERvY3VtZW50IiwiZG9jIiwiZG9jdW1lbnQiLCJzc3JXaW5kb3ciLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJoaXN0b3J5IiwicmVwbGFjZVN0YXRlIiwicHVzaFN0YXRlIiwiZ28iLCJiYWNrIiwiQ3VzdG9tRXZlbnQiLCJnZXRDb21wdXRlZFN0eWxlIiwiZ2V0UHJvcGVydHlWYWx1ZSIsIkltYWdlIiwiRGF0ZSIsInNjcmVlbiIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJtYXRjaE1lZGlhIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY2FsbGJhY2siLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImlkIiwiZ2V0V2luZG93Iiwid2luIiwid2luZG93IiwiZGVsZXRlUHJvcHMiLCJvYmplY3QiLCJlIiwibmV4dFRpY2siLCJkZWxheSIsIm5vdyIsImdldENvbXB1dGVkU3R5bGUyIiwiZWwiLCJ3aW5kb3cyIiwiY3VycmVudFN0eWxlIiwiZ2V0VHJhbnNsYXRlIiwiYXhpcyIsIm1hdHJpeCIsImN1clRyYW5zZm9ybSIsInRyYW5zZm9ybU1hdHJpeCIsImN1clN0eWxlIiwiV2ViS2l0Q1NTTWF0cml4IiwidHJhbnNmb3JtIiwid2Via2l0VHJhbnNmb3JtIiwic3BsaXQiLCJtYXAiLCJhIiwicmVwbGFjZSIsImpvaW4iLCJNb3pUcmFuc2Zvcm0iLCJPVHJhbnNmb3JtIiwiTXNUcmFuc2Zvcm0iLCJtc1RyYW5zZm9ybSIsInRvU3RyaW5nIiwibTQxIiwicGFyc2VGbG9hdCIsIm00MiIsImlzT2JqZWN0MiIsIm8iLCJwcm90b3R5cGUiLCJjYWxsIiwic2xpY2UiLCJpc05vZGUiLCJub2RlIiwiSFRNTEVsZW1lbnQiLCJub2RlVHlwZSIsImV4dGVuZDIiLCJ0byIsImFyZ3VtZW50cyIsIm5vRXh0ZW5kIiwiaSIsIm5leHRTb3VyY2UiLCJrZXlzQXJyYXkiLCJmaWx0ZXIiLCJpbmRleE9mIiwibmV4dEluZGV4IiwibGVuIiwibmV4dEtleSIsImRlc2MiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJlbnVtZXJhYmxlIiwiX19zd2lwZXJfXyIsInNldENTU1Byb3BlcnR5IiwidmFyTmFtZSIsInZhclZhbHVlIiwic2V0UHJvcGVydHkiLCJhbmltYXRlQ1NTTW9kZVNjcm9sbCIsIl9yZWYiLCJzd2lwZXIiLCJ0YXJnZXRQb3NpdGlvbiIsInNpZGUiLCJzdGFydFBvc2l0aW9uIiwidHJhbnNsYXRlIiwic3RhcnRUaW1lIiwidGltZSIsImR1cmF0aW9uIiwicGFyYW1zIiwic3BlZWQiLCJ3cmFwcGVyRWwiLCJzY3JvbGxTbmFwVHlwZSIsImNzc01vZGVGcmFtZUlEIiwiZGlyIiwiaXNPdXRPZkJvdW5kIiwiY3VycmVudCIsImFuaW1hdGUiLCJnZXRUaW1lIiwicHJvZ3Jlc3MiLCJNYXRoIiwibWF4IiwibWluIiwiZWFzZVByb2dyZXNzIiwiY29zIiwiUEkiLCJjdXJyZW50UG9zaXRpb24iLCJzY3JvbGxUbyIsIm92ZXJmbG93IiwiZ2V0U2xpZGVUcmFuc2Zvcm1FbCIsInNsaWRlRWwiLCJzaGFkb3dSb290IiwiZWxlbWVudENoaWxkcmVuIiwiZWxlbWVudCIsInNlbGVjdG9yIiwibWF0Y2hlcyIsInRhZyIsImNsYXNzZXMyIiwiY2xhc3NMaXN0IiwiYWRkIiwiQXJyYXkiLCJpc0FycmF5IiwiZWxlbWVudE9mZnNldCIsImRvY3VtZW50MiIsImJveCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImNsaWVudFRvcCIsImNsaWVudExlZnQiLCJzY3JvbGxUb3AiLCJzY3JvbGxZIiwic2Nyb2xsTGVmdCIsInNjcm9sbFgiLCJ0b3AiLCJsZWZ0IiwiZWxlbWVudFByZXZBbGwiLCJwcmV2RWxzIiwicHJldmlvdXNFbGVtZW50U2libGluZyIsInByZXYiLCJwdXNoIiwiZWxlbWVudE5leHRBbGwiLCJuZXh0RWxzIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwibmV4dCIsImVsZW1lbnRTdHlsZSIsInByb3AiLCJlbGVtZW50SW5kZXgiLCJjaGlsZCIsInByZXZpb3VzU2libGluZyIsImVsZW1lbnRQYXJlbnRzIiwicGFyZW50cyIsInBhcmVudCIsInBhcmVudEVsZW1lbnQiLCJlbGVtZW50VHJhbnNpdGlvbkVuZCIsImZpcmVDYWxsQmFjayIsImVsZW1lbnRPdXRlclNpemUiLCJzaXplIiwiaW5jbHVkZU1hcmdpbnMiLCJvZmZzZXRXaWR0aCIsInN1cHBvcnQiLCJjYWxjU3VwcG9ydCIsInNtb290aFNjcm9sbCIsImRvY3VtZW50RWxlbWVudCIsInRvdWNoIiwiRG9jdW1lbnRUb3VjaCIsImdldFN1cHBvcnQiLCJkZXZpY2VDYWNoZWQiLCJjYWxjRGV2aWNlIiwiX3RlbXAiLCJzdXBwb3J0MiIsInBsYXRmb3JtIiwidWEiLCJkZXZpY2UiLCJpb3MiLCJhbmRyb2lkIiwic2NyZWVuV2lkdGgiLCJ3aWR0aCIsInNjcmVlbkhlaWdodCIsImhlaWdodCIsIm1hdGNoIiwiaXBhZCIsImlwb2QiLCJpcGhvbmUiLCJ3aW5kb3dzIiwibWFjb3MiLCJpUGFkU2NyZWVucyIsIm9zIiwiZ2V0RGV2aWNlIiwib3ZlcnJpZGVzIiwiYnJvd3NlciIsImNhbGNCcm93c2VyIiwibmVlZFBlcnNwZWN0aXZlRml4IiwiaXNTYWZhcmkiLCJ0b0xvd2VyQ2FzZSIsIlN0cmluZyIsImluY2x1ZGVzIiwibWFqb3IiLCJtaW5vciIsIm51bSIsIk51bWJlciIsImlzV2ViVmlldyIsInRlc3QiLCJnZXRCcm93c2VyIiwiUmVzaXplIiwib24iLCJlbWl0Iiwib2JzZXJ2ZXIiLCJhbmltYXRpb25GcmFtZSIsInJlc2l6ZUhhbmRsZXIiLCJkZXN0cm95ZWQiLCJpbml0aWFsaXplZCIsImNyZWF0ZU9ic2VydmVyIiwiUmVzaXplT2JzZXJ2ZXIiLCJlbnRyaWVzIiwibmV3V2lkdGgiLCJuZXdIZWlnaHQiLCJfcmVmMiIsImNvbnRlbnRCb3hTaXplIiwiY29udGVudFJlY3QiLCJpbmxpbmVTaXplIiwiYmxvY2tTaXplIiwib2JzZXJ2ZSIsInJlbW92ZU9ic2VydmVyIiwidW5vYnNlcnZlIiwib3JpZW50YXRpb25DaGFuZ2VIYW5kbGVyIiwicmVzaXplT2JzZXJ2ZXIiLCJPYnNlcnZlciIsImV4dGVuZFBhcmFtcyIsIm9ic2VydmVycyIsImF0dGFjaCIsIm9wdGlvbnMiLCJPYnNlcnZlckZ1bmMiLCJNdXRhdGlvbk9ic2VydmVyIiwiV2Via2l0TXV0YXRpb25PYnNlcnZlciIsIm11dGF0aW9ucyIsIl9fcHJldmVudE9ic2VydmVyX18iLCJvYnNlcnZlclVwZGF0ZSIsIm9ic2VydmVyVXBkYXRlMiIsImF0dHJpYnV0ZXMiLCJjaGlsZExpc3QiLCJjaGFyYWN0ZXJEYXRhIiwiaW5pdCIsIm9ic2VydmVQYXJlbnRzIiwiY29udGFpbmVyUGFyZW50cyIsImhvc3RFbCIsIm9ic2VydmVTbGlkZUNoaWxkcmVuIiwiZGVzdHJveSIsImRpc2Nvbm5lY3QiLCJzcGxpY2UiLCJldmVudHNFbWl0dGVyIiwiZXZlbnRzMiIsImhhbmRsZXIiLCJwcmlvcml0eSIsInNlbGYiLCJldmVudHNMaXN0ZW5lcnMiLCJtZXRob2QiLCJldmVudCIsIm9uY2UiLCJvbmNlSGFuZGxlciIsIm9mZiIsIl9fZW1pdHRlclByb3h5IiwiX2xlbiIsImFyZ3MiLCJfa2V5IiwiYXBwbHkiLCJvbkFueSIsImV2ZW50c0FueUxpc3RlbmVycyIsIm9mZkFueSIsImluZGV4IiwiZXZlbnRIYW5kbGVyIiwiZGF0YSIsImNvbnRleHQiLCJfbGVuMiIsIl9rZXkyIiwiZXZlbnRzIiwidW5zaGlmdCIsImV2ZW50c0FycmF5IiwidXBkYXRlU2l6ZSIsImNsaWVudFdpZHRoIiwiY2xpZW50SGVpZ2h0IiwiaXNIb3Jpem9udGFsIiwiaXNWZXJ0aWNhbCIsInBhcnNlSW50IiwiaXNOYU4iLCJhc3NpZ24iLCJ1cGRhdGVTbGlkZXMiLCJnZXREaXJlY3Rpb25MYWJlbCIsInByb3BlcnR5IiwiZ2V0RGlyZWN0aW9uUHJvcGVydHlWYWx1ZSIsImxhYmVsIiwic2xpZGVzRWwiLCJzd2lwZXJTaXplIiwicnRsVHJhbnNsYXRlIiwicnRsIiwid3JvbmdSVEwiLCJpc1ZpcnR1YWwiLCJ2aXJ0dWFsIiwiZW5hYmxlZCIsInByZXZpb3VzU2xpZGVzTGVuZ3RoIiwic2xpZGVzIiwic2xpZGVDbGFzcyIsInNsaWRlc0xlbmd0aCIsInNuYXBHcmlkIiwic2xpZGVzR3JpZCIsInNsaWRlc1NpemVzR3JpZCIsIm9mZnNldEJlZm9yZSIsInNsaWRlc09mZnNldEJlZm9yZSIsIm9mZnNldEFmdGVyIiwic2xpZGVzT2Zmc2V0QWZ0ZXIiLCJwcmV2aW91c1NuYXBHcmlkTGVuZ3RoIiwicHJldmlvdXNTbGlkZXNHcmlkTGVuZ3RoIiwic3BhY2VCZXR3ZWVuIiwic2xpZGVQb3NpdGlvbiIsInByZXZTbGlkZVNpemUiLCJ2aXJ0dWFsU2l6ZSIsIm1hcmdpbkxlZnQiLCJtYXJnaW5SaWdodCIsIm1hcmdpbkJvdHRvbSIsIm1hcmdpblRvcCIsImNlbnRlcmVkU2xpZGVzIiwiY3NzTW9kZSIsImdyaWRFbmFibGVkIiwiZ3JpZCIsInJvd3MiLCJpbml0U2xpZGVzIiwic2xpZGVTaXplIiwic2hvdWxkUmVzZXRTbGlkZVNpemUiLCJzbGlkZXNQZXJWaWV3IiwiYnJlYWtwb2ludHMiLCJzbGlkZTIiLCJ1cGRhdGVTbGlkZSIsInNsaWRlU3R5bGVzIiwiY3VycmVudFRyYW5zZm9ybSIsImN1cnJlbnRXZWJLaXRUcmFuc2Zvcm0iLCJyb3VuZExlbmd0aHMiLCJwYWRkaW5nTGVmdCIsInBhZGRpbmdSaWdodCIsImJveFNpemluZyIsImZsb29yIiwic3dpcGVyU2xpZGVTaXplIiwiYWJzIiwic2xpZGVzUGVyR3JvdXAiLCJzbGlkZXNQZXJHcm91cFNraXAiLCJlZmZlY3QiLCJzZXRXcmFwcGVyU2l6ZSIsInVwZGF0ZVdyYXBwZXJTaXplIiwibmV3U2xpZGVzR3JpZCIsInNsaWRlc0dyaWRJdGVtIiwibG9vcCIsImdyb3VwcyIsImNlaWwiLCJzbGlkZXNCZWZvcmUiLCJzbGlkZXNBZnRlciIsImdyb3VwU2l6ZSIsIl8iLCJzbGlkZUluZGV4IiwiY2VudGVyZWRTbGlkZXNCb3VuZHMiLCJhbGxTbGlkZXNTaXplIiwic2xpZGVTaXplVmFsdWUiLCJtYXhTbmFwIiwic25hcCIsImNlbnRlckluc3VmZmljaWVudFNsaWRlcyIsImFsbFNsaWRlc09mZnNldCIsInNuYXBJbmRleCIsImFkZFRvU25hcEdyaWQiLCJhZGRUb1NsaWRlc0dyaWQiLCJ2Iiwid2F0Y2hPdmVyZmxvdyIsImNoZWNrT3ZlcmZsb3ciLCJ3YXRjaFNsaWRlc1Byb2dyZXNzIiwidXBkYXRlU2xpZGVzT2Zmc2V0IiwiYmFja0ZhY2VIaWRkZW5DbGFzcyIsImNvbnRhaW5lck1vZGlmaWVyQ2xhc3MiLCJoYXNDbGFzc0JhY2tmYWNlQ2xhc3NBZGRlZCIsImNvbnRhaW5zIiwibWF4QmFja2ZhY2VIaWRkZW5TbGlkZXMiLCJyZW1vdmUiLCJ1cGRhdGVBdXRvSGVpZ2h0IiwiYWN0aXZlU2xpZGVzIiwic2V0VHJhbnNpdGlvbiIsImdldFNsaWRlQnlJbmRleCIsImdldFNsaWRlSW5kZXhCeURhdGEiLCJ2aXNpYmxlU2xpZGVzIiwiYWN0aXZlSW5kZXgiLCJvZmZzZXRIZWlnaHQiLCJtaW51c09mZnNldCIsImlzRWxlbWVudCIsIm9mZnNldExlZnQiLCJvZmZzZXRUb3AiLCJzd2lwZXJTbGlkZU9mZnNldCIsImNzc092ZXJmbG93QWRqdXN0bWVudCIsInVwZGF0ZVNsaWRlc1Byb2dyZXNzIiwidHJhbnNsYXRlMiIsIm9mZnNldENlbnRlciIsInNsaWRlVmlzaWJsZUNsYXNzIiwidmlzaWJsZVNsaWRlc0luZGV4ZXMiLCJzbGlkZU9mZnNldCIsInNsaWRlUHJvZ3Jlc3MiLCJtaW5UcmFuc2xhdGUiLCJvcmlnaW5hbFNsaWRlUHJvZ3Jlc3MiLCJzbGlkZUJlZm9yZSIsInNsaWRlQWZ0ZXIiLCJpc1Zpc2libGUiLCJvcmlnaW5hbFByb2dyZXNzIiwidXBkYXRlUHJvZ3Jlc3MiLCJtdWx0aXBsaWVyIiwidHJhbnNsYXRlc0RpZmYiLCJtYXhUcmFuc2xhdGUiLCJpc0JlZ2lubmluZyIsImlzRW5kIiwicHJvZ3Jlc3NMb29wIiwid2FzQmVnaW5uaW5nIiwid2FzRW5kIiwiaXNCZWdpbm5pbmdSb3VuZGVkIiwiaXNFbmRSb3VuZGVkIiwiZmlyc3RTbGlkZUluZGV4IiwibGFzdFNsaWRlSW5kZXgiLCJmaXJzdFNsaWRlVHJhbnNsYXRlIiwibGFzdFNsaWRlVHJhbnNsYXRlIiwidHJhbnNsYXRlTWF4IiwidHJhbnNsYXRlQWJzIiwiYXV0b0hlaWdodCIsInVwZGF0ZVNsaWRlc0NsYXNzZXMiLCJnZXRGaWx0ZXJlZFNsaWRlIiwic2xpZGVBY3RpdmVDbGFzcyIsInNsaWRlTmV4dENsYXNzIiwic2xpZGVQcmV2Q2xhc3MiLCJhY3RpdmVTbGlkZSIsIm5leHRTbGlkZSIsInByZXZTbGlkZSIsImVtaXRTbGlkZXNDbGFzc2VzIiwicHJvY2Vzc0xhenlQcmVsb2FkZXIiLCJpbWFnZUVsIiwic2xpZGVTZWxlY3RvciIsImNsb3Nlc3QiLCJsYXp5RWwiLCJsYXp5UHJlbG9hZGVyQ2xhc3MiLCJ1bmxhenkiLCJyZW1vdmVBdHRyaWJ1dGUiLCJwcmVsb2FkIiwiYW1vdW50IiwibGF6eVByZWxvYWRQcmV2TmV4dCIsInNsaWRlc1BlclZpZXdEeW5hbWljIiwiYWN0aXZlQ29sdW1uIiwicHJlbG9hZENvbHVtbnMiLCJmcm9tIiwiY29sdW1uIiwic2xpZGVJbmRleExhc3RJblZpZXciLCJyZXdpbmQiLCJyZWFsSW5kZXgiLCJnZXRBY3RpdmVJbmRleEJ5VHJhbnNsYXRlIiwibm9ybWFsaXplU2xpZGVJbmRleCIsInVwZGF0ZUFjdGl2ZUluZGV4IiwibmV3QWN0aXZlSW5kZXgiLCJwcmV2aW91c0luZGV4IiwicHJldmlvdXNSZWFsSW5kZXgiLCJwcmV2aW91c1NuYXBJbmRleCIsImdldFZpcnR1YWxSZWFsSW5kZXgiLCJhSW5kZXgiLCJyZWFsSW5kZXgyIiwic2tpcCIsImdldEF0dHJpYnV0ZSIsInJ1bkNhbGxiYWNrc09uSW5pdCIsInVwZGF0ZUNsaWNrZWRTbGlkZSIsInBhdGgiLCJwYXRoRWwiLCJzbGlkZUZvdW5kIiwiY2xpY2tlZFNsaWRlIiwiY2xpY2tlZEluZGV4Iiwic2xpZGVUb0NsaWNrZWRTbGlkZSIsInVwZGF0ZSIsImdldFN3aXBlclRyYW5zbGF0ZSIsInZpcnR1YWxUcmFuc2xhdGUiLCJjdXJyZW50VHJhbnNsYXRlIiwic2V0VHJhbnNsYXRlIiwiYnlDb250cm9sbGVyIiwieCIsInkiLCJ6IiwicHJldmlvdXNUcmFuc2xhdGUiLCJuZXdQcm9ncmVzcyIsInRyYW5zbGF0ZVRvIiwicnVuQ2FsbGJhY2tzIiwidHJhbnNsYXRlQm91bmRzIiwiaW50ZXJuYWwiLCJhbmltYXRpbmciLCJwcmV2ZW50SW50ZXJhY3Rpb25PblRyYW5zaXRpb24iLCJtaW5UcmFuc2xhdGUyIiwibWF4VHJhbnNsYXRlMiIsIm5ld1RyYW5zbGF0ZSIsImlzSCIsImJlaGF2aW9yIiwib25UcmFuc2xhdGVUb1dyYXBwZXJUcmFuc2l0aW9uRW5kIiwidHJhbnNpdGlvbkVuZDIiLCJ0cmFuc2l0aW9uRHVyYXRpb24iLCJ0cmFuc2l0aW9uRGVsYXkiLCJ0cmFuc2l0aW9uRW1pdCIsImRpcmVjdGlvbiIsInN0ZXAiLCJ0cmFuc2l0aW9uU3RhcnQiLCJ0cmFuc2l0aW9uRW5kIiwidHJhbnNpdGlvbiIsInNsaWRlVG8iLCJpbml0aWFsIiwibm9ybWFsaXplZFRyYW5zbGF0ZSIsIm5vcm1hbGl6ZWRHcmlkIiwibm9ybWFsaXplZEdyaWROZXh0IiwiYWxsb3dTbGlkZU5leHQiLCJhbGxvd1NsaWRlUHJldiIsInQiLCJfaW1tZWRpYXRlVmlydHVhbCIsIl9jc3NNb2RlVmlydHVhbEluaXRpYWxTZXQiLCJpbml0aWFsU2xpZGUiLCJvblNsaWRlVG9XcmFwcGVyVHJhbnNpdGlvbkVuZCIsInNsaWRlVG9Mb29wIiwiaW5kZXhBc051bWJlciIsIm5ld0luZGV4Iiwic2xpZGVOZXh0IiwicGVyR3JvdXAiLCJzbGlkZXNQZXJHcm91cEF1dG8iLCJpbmNyZW1lbnQiLCJsb29wUHJldmVudHNTbGlkaW5nIiwibG9vcEZpeCIsIl9jbGllbnRMZWZ0Iiwic2xpZGVQcmV2Iiwibm9ybWFsaXplIiwidmFsIiwibm9ybWFsaXplZFNuYXBHcmlkIiwicHJldlNuYXAiLCJwcmV2U25hcEluZGV4IiwicHJldkluZGV4IiwibGFzdEluZGV4Iiwic2xpZGVSZXNldCIsInNsaWRlVG9DbG9zZXN0IiwidGhyZXNob2xkIiwiY3VycmVudFNuYXAiLCJuZXh0U25hcCIsInNsaWRlVG9JbmRleCIsImxvb3BlZFNsaWRlcyIsImdldFNsaWRlSW5kZXgiLCJzbGlkZSIsImxvb3BDcmVhdGUiLCJzbGlkZVJlYWxJbmRleCIsInNsaWRlVG8yIiwic2V0VHJhbnNsYXRlMiIsImFjdGl2ZVNsaWRlSW5kZXgiLCJieU1vdXNld2hlZWwiLCJwcmVwZW5kU2xpZGVzSW5kZXhlcyIsImFwcGVuZFNsaWRlc0luZGV4ZXMiLCJpc05leHQiLCJpc1ByZXYiLCJzbGlkZXNQcmVwZW5kZWQiLCJzbGlkZXNBcHBlbmRlZCIsInN3aXBlckxvb3BNb3ZlRE9NIiwicHJlcGVuZCIsImFwcGVuZCIsInJlY2FsY1NsaWRlcyIsImN1cnJlbnRTbGlkZVRyYW5zbGF0ZSIsIm5ld1NsaWRlVHJhbnNsYXRlIiwiZGlmZiIsInRvdWNoZXMiLCJ0b3VjaEV2ZW50c0RhdGEiLCJjb250cm9sbGVyIiwiY29udHJvbCIsImxvb3BQYXJhbXMiLCJjIiwibG9vcERlc3Ryb3kiLCJuZXdTbGlkZXNPcmRlciIsInN3aXBlclNsaWRlSW5kZXgiLCJzZXRHcmFiQ3Vyc29yIiwibW92aW5nIiwic2ltdWxhdGVUb3VjaCIsImlzTG9ja2VkIiwidG91Y2hFdmVudHNUYXJnZXQiLCJjdXJzb3IiLCJ1bnNldEdyYWJDdXJzb3IiLCJncmFiQ3Vyc29yIiwiY2xvc2VzdEVsZW1lbnQiLCJiYXNlIiwiX19jbG9zZXN0RnJvbSIsImFzc2lnbmVkU2xvdCIsImZvdW5kIiwiZ2V0Um9vdE5vZGUiLCJvblRvdWNoU3RhcnQiLCJldkNhY2hlIiwicG9pbnRlclR5cGUiLCJvcmlnaW5hbEV2ZW50IiwidGFyZ2V0RWwiLCJ3aGljaCIsImJ1dHRvbiIsImlzVG91Y2hlZCIsImlzTW92ZWQiLCJzd2lwaW5nQ2xhc3NIYXNWYWx1ZSIsIm5vU3dpcGluZ0NsYXNzIiwiZXZlbnRQYXRoIiwiY29tcG9zZWRQYXRoIiwibm9Td2lwaW5nU2VsZWN0b3IiLCJpc1RhcmdldFNoYWRvdyIsIm5vU3dpcGluZyIsImFsbG93Q2xpY2siLCJzd2lwZUhhbmRsZXIiLCJjdXJyZW50WCIsInBhZ2VYIiwiY3VycmVudFkiLCJwYWdlWSIsInN0YXJ0WCIsInN0YXJ0WSIsImVkZ2VTd2lwZURldGVjdGlvbiIsImlPU0VkZ2VTd2lwZURldGVjdGlvbiIsImVkZ2VTd2lwZVRocmVzaG9sZCIsImlPU0VkZ2VTd2lwZVRocmVzaG9sZCIsImlubmVyV2lkdGgiLCJwcmV2ZW50RGVmYXVsdCIsImFsbG93VG91Y2hDYWxsYmFja3MiLCJpc1Njcm9sbGluZyIsInN0YXJ0TW92aW5nIiwidG91Y2hTdGFydFRpbWUiLCJzd2lwZURpcmVjdGlvbiIsImFsbG93VGhyZXNob2xkTW92ZSIsImZvY3VzYWJsZUVsZW1lbnRzIiwic2hvdWxkUHJldmVudERlZmF1bHQiLCJhbGxvd1RvdWNoTW92ZSIsInRvdWNoU3RhcnRQcmV2ZW50RGVmYXVsdCIsInRvdWNoU3RhcnRGb3JjZVByZXZlbnREZWZhdWx0IiwiaXNDb250ZW50RWRpdGFibGUiLCJmcmVlTW9kZSIsIm9uVG91Y2hNb3ZlIiwicG9pbnRlckluZGV4IiwiZmluZEluZGV4IiwiY2FjaGVkRXYiLCJwb2ludGVySWQiLCJ0YXJnZXRUb3VjaCIsInByZXZlbnRlZEJ5TmVzdGVkU3dpcGVyIiwicHJldlgiLCJwcmV2WSIsInRvdWNoUmVsZWFzZU9uRWRnZXMiLCJ0YXJnZXRUb3VjaGVzIiwiZGlmZlgiLCJkaWZmWSIsInNxcnQiLCJ0b3VjaEFuZ2xlIiwiYXRhbjIiLCJ6b29tIiwiY2FuY2VsYWJsZSIsInRvdWNoTW92ZVN0b3BQcm9wYWdhdGlvbiIsIm5lc3RlZCIsInN0b3BQcm9wYWdhdGlvbiIsInRvdWNoZXNEaWZmIiwicHJldmlvdXNYIiwicHJldmlvdXNZIiwib25lV2F5TW92ZW1lbnQiLCJ0b3VjaFJhdGlvIiwicHJldlRvdWNoZXNEaXJlY3Rpb24iLCJ0b3VjaGVzRGlyZWN0aW9uIiwiaXNMb29wIiwiYWxsb3dMb29wRml4Iiwic3RhcnRUcmFuc2xhdGUiLCJldnQiLCJidWJibGVzIiwiZGlzcGF0Y2hFdmVudCIsImFsbG93TW9tZW50dW1Cb3VuY2UiLCJsb29wRml4ZWQiLCJkaXNhYmxlUGFyZW50U3dpcGVyIiwicmVzaXN0YW5jZVJhdGlvIiwicmVzaXN0YW5jZSIsImZvbGxvd0ZpbmdlciIsIm9uVG91Y2hFbmQiLCJ0eXBlIiwicHJvY2VlZCIsInRvdWNoRW5kVGltZSIsInRpbWVEaWZmIiwicGF0aFRyZWUiLCJsYXN0Q2xpY2tUaW1lIiwiY3VycmVudFBvcyIsInN0b3BJbmRleCIsImluY3JlbWVudDIiLCJyZXdpbmRGaXJzdEluZGV4IiwicmV3aW5kTGFzdEluZGV4IiwicmF0aW8iLCJsb25nU3dpcGVzTXMiLCJsb25nU3dpcGVzIiwibG9uZ1N3aXBlc1JhdGlvIiwic2hvcnRTd2lwZXMiLCJpc05hdkJ1dHRvblRhcmdldCIsIm5hdmlnYXRpb24iLCJuZXh0RWwiLCJwcmV2RWwiLCJvblJlc2l6ZSIsInNldEJyZWFrcG9pbnQiLCJpc1ZpcnR1YWxMb29wIiwiYXV0b3BsYXkiLCJydW5uaW5nIiwicGF1c2VkIiwicmVzaXplVGltZW91dCIsInJlc3VtZSIsIm9uQ2xpY2siLCJwcmV2ZW50Q2xpY2tzIiwicHJldmVudENsaWNrc1Byb3BhZ2F0aW9uIiwic3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uIiwib25TY3JvbGwiLCJvbkxvYWQiLCJkdW1teUV2ZW50QXR0YWNoZWQiLCJkdW1teUV2ZW50TGlzdGVuZXIiLCJjYXB0dXJlIiwiZG9tTWV0aG9kIiwic3dpcGVyTWV0aG9kIiwicGFzc2l2ZSIsInVwZGF0ZU9uV2luZG93UmVzaXplIiwiYXR0YWNoRXZlbnRzIiwiYmluZCIsImRldGFjaEV2ZW50cyIsImV2ZW50cyQxIiwiaXNHcmlkRW5hYmxlZCIsImJyZWFrcG9pbnRzMiIsImJyZWFrcG9pbnQiLCJnZXRCcmVha3BvaW50IiwiYnJlYWtwb2ludHNCYXNlIiwiY3VycmVudEJyZWFrcG9pbnQiLCJicmVha3BvaW50T25seVBhcmFtcyIsImJyZWFrcG9pbnRQYXJhbXMiLCJvcmlnaW5hbFBhcmFtcyIsIndhc011bHRpUm93IiwiaXNNdWx0aVJvdyIsIndhc0VuYWJsZWQiLCJlbWl0Q29udGFpbmVyQ2xhc3NlcyIsImZpbGwiLCJ3YXNNb2R1bGVFbmFibGVkIiwiaXNNb2R1bGVFbmFibGVkIiwiZGlzYWJsZSIsImVuYWJsZSIsImRpcmVjdGlvbkNoYW5nZWQiLCJuZWVkc1JlTG9vcCIsIndhc0xvb3AiLCJjaGFuZ2VEaXJlY3Rpb24iLCJpc0VuYWJsZWQiLCJoYXNMb29wIiwiY29udGFpbmVyRWwiLCJjdXJyZW50SGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJwb2ludHMiLCJwb2ludCIsIm1pblJhdGlvIiwic3Vic3RyIiwidmFsdWUiLCJzb3J0IiwiYiIsInByZXBhcmVDbGFzc2VzIiwicHJlZml4IiwicmVzdWx0Q2xhc3NlcyIsIml0ZW0iLCJjbGFzc05hbWVzIiwiYWRkQ2xhc3NlcyIsInN1ZmZpeGVzIiwicmVtb3ZlQ2xhc3NlcyIsImNsYXNzZXMiLCJ3YXNMb2NrZWQiLCJsYXN0U2xpZGVSaWdodEVkZ2UiLCJjaGVja092ZXJmbG93JDEiLCJkZWZhdWx0cyIsImNyZWF0ZUVsZW1lbnRzIiwidXJsIiwidW5pcXVlTmF2RWxlbWVudHMiLCJwYXNzaXZlTGlzdGVuZXJzIiwid3JhcHBlckNsYXNzIiwiX2VtaXRDbGFzc2VzIiwibW9kdWxlRXh0ZW5kUGFyYW1zIiwiYWxsTW9kdWxlc1BhcmFtcyIsIm1vZHVsZVBhcmFtTmFtZSIsIm1vZHVsZVBhcmFtcyIsImF1dG8iLCJwcm90b3R5cGVzIiwiZXh0ZW5kZWREZWZhdWx0cyIsIl9Td2lwZXIiLCJzd2lwZXJzIiwibmV3UGFyYW1zIiwibW9kdWxlcyIsIl9fbW9kdWxlc19fIiwibW9kIiwic3dpcGVyUGFyYW1zIiwicGFzc2VkUGFyYW1zIiwiZXZlbnROYW1lIiwidmVsb2NpdHkiLCJ0cnVuYyIsImNsaWNrVGltZW91dCIsInZlbG9jaXRpZXMiLCJpbWFnZXNUb0xvYWQiLCJpbWFnZXNMb2FkZWQiLCJzZXRQcm9ncmVzcyIsImNscyIsImNsYXNzTmFtZSIsImdldFNsaWRlQ2xhc3NlcyIsInVwZGF0ZXMiLCJ2aWV3IiwiZXhhY3QiLCJzcHYiLCJicmVha0xvb3AiLCJzbGlkZUluVmlldyIsImNvbXBsZXRlIiwidHJhbnNsYXRlVmFsdWUiLCJ0cmFuc2xhdGVkIiwibmV3RGlyZWN0aW9uIiwibmVlZFVwZGF0ZSIsImN1cnJlbnREaXJlY3Rpb24iLCJjaGFuZ2VMYW5ndWFnZURpcmVjdGlvbiIsIm1vdW50IiwibW91bnRlZCIsInBhcmVudE5vZGUiLCJnZXRXcmFwcGVyU2VsZWN0b3IiLCJ0cmltIiwiZ2V0V3JhcHBlciIsInJlcyIsInNsaWRlU2xvdHMiLCJsYXp5RWxlbWVudHMiLCJkZWxldGVJbnN0YW5jZSIsImNsZWFuU3R5bGVzIiwiZXh0ZW5kRGVmYXVsdHMiLCJuZXdEZWZhdWx0cyIsImluc3RhbGxNb2R1bGUiLCJ1c2UiLCJtb2R1bGUyIiwibSIsInByb3RvdHlwZUdyb3VwIiwicHJvdG9NZXRob2QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLHFCQUFBO0FBQUFDLFFBQUEsQ0FBQUQscUJBQUE7RUFBQUUsTUFBQSxFQUFBQSxDQUFBLEtBQUFBLE1BQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFDO0FBQUE7QUFBQUMsTUFBQSxDQUFBQyxPQUFBLEdBQUFDLFlBQUEsQ0FBQVAscUJBQUE7OztBQ1lBLFNBQVNRLFNBQVNDLEdBQUEsRUFBSztFQUNyQixPQUFPQSxHQUFBLEtBQVEsUUFBUSxPQUFPQSxHQUFBLEtBQVEsWUFBWSxpQkFBaUJBLEdBQUEsSUFBT0EsR0FBQSxDQUFJQyxXQUFBLEtBQWdCQyxNQUFBO0FBQ2hHO0FBQ0EsU0FBU0MsT0FBT0MsTUFBQSxFQUFRQyxHQUFBLEVBQUs7RUFDM0IsSUFBSUQsTUFBQSxLQUFXLFFBQVE7SUFDckJBLE1BQUEsR0FBUyxDQUFDO0VBQ1o7RUFDQSxJQUFJQyxHQUFBLEtBQVEsUUFBUTtJQUNsQkEsR0FBQSxHQUFNLENBQUM7RUFDVDtFQUNBSCxNQUFBLENBQU9JLElBQUEsQ0FBS0QsR0FBRyxFQUFFRSxPQUFBLENBQVFDLEdBQUEsSUFBTztJQUM5QixJQUFJLE9BQU9KLE1BQUEsQ0FBT0ksR0FBRyxNQUFNLGFBQWFKLE1BQUEsQ0FBT0ksR0FBRyxJQUFJSCxHQUFBLENBQUlHLEdBQUcsV0FBV1QsUUFBQSxDQUFTTSxHQUFBLENBQUlHLEdBQUcsQ0FBQyxLQUFLVCxRQUFBLENBQVNLLE1BQUEsQ0FBT0ksR0FBRyxDQUFDLEtBQUtOLE1BQUEsQ0FBT0ksSUFBQSxDQUFLRCxHQUFBLENBQUlHLEdBQUcsQ0FBQyxFQUFFQyxNQUFBLEdBQVMsR0FBRztNQUN2Sk4sTUFBQSxDQUFPQyxNQUFBLENBQU9JLEdBQUcsR0FBR0gsR0FBQSxDQUFJRyxHQUFHLENBQUM7SUFDOUI7RUFDRixDQUFDO0FBQ0g7QUFDQSxJQUFNRSxXQUFBLEdBQWM7RUFDbEJDLElBQUEsRUFBTSxDQUFDO0VBQ1BDLGlCQUFBLEVBQW1CLENBQUM7RUFDcEJDLG9CQUFBLEVBQXNCLENBQUM7RUFDdkJDLGFBQUEsRUFBZTtJQUNiQyxLQUFBLEVBQU8sQ0FBQztJQUNSQyxRQUFBLEVBQVU7RUFDWjtFQUNBQyxjQUFBLEVBQWdCO0lBQ2QsT0FBTztFQUNUO0VBQ0FDLGlCQUFBLEVBQW1CO0lBQ2pCLE9BQU8sRUFBQztFQUNWO0VBQ0FDLGVBQUEsRUFBaUI7SUFDZixPQUFPO0VBQ1Q7RUFDQUMsWUFBQSxFQUFjO0lBQ1osT0FBTztNQUNMQyxVQUFBLEVBQVksQ0FBQztJQUNmO0VBQ0Y7RUFDQUMsY0FBQSxFQUFnQjtJQUNkLE9BQU87TUFDTEMsUUFBQSxFQUFVLEVBQUM7TUFDWEMsVUFBQSxFQUFZLEVBQUM7TUFDYkMsS0FBQSxFQUFPLENBQUM7TUFDUkMsYUFBQSxFQUFlLENBQUM7TUFDaEJDLHFCQUFBLEVBQXVCO1FBQ3JCLE9BQU8sRUFBQztNQUNWO0lBQ0Y7RUFDRjtFQUNBQyxnQkFBQSxFQUFrQjtJQUNoQixPQUFPLENBQUM7RUFDVjtFQUNBQyxXQUFBLEVBQWE7SUFDWCxPQUFPO0VBQ1Q7RUFDQUMsUUFBQSxFQUFVO0lBQ1JDLElBQUEsRUFBTTtJQUNOQyxJQUFBLEVBQU07SUFDTkMsUUFBQSxFQUFVO0lBQ1ZDLElBQUEsRUFBTTtJQUNOQyxNQUFBLEVBQVE7SUFDUkMsUUFBQSxFQUFVO0lBQ1ZDLFFBQUEsRUFBVTtJQUNWQyxNQUFBLEVBQVE7RUFDVjtBQUNGO0FBQ0EsU0FBU0MsWUFBQSxFQUFjO0VBQ3JCLE1BQU1DLEdBQUEsR0FBTSxPQUFPQyxRQUFBLEtBQWEsY0FBY0EsUUFBQSxHQUFXLENBQUM7RUFDMUR0QyxNQUFBLENBQU9xQyxHQUFBLEVBQUs5QixXQUFXO0VBQ3ZCLE9BQU84QixHQUFBO0FBQ1Q7QUFDQSxJQUFNRSxTQUFBLEdBQVk7RUFDaEJELFFBQUEsRUFBVS9CLFdBQUE7RUFDVmlDLFNBQUEsRUFBVztJQUNUQyxTQUFBLEVBQVc7RUFDYjtFQUNBZCxRQUFBLEVBQVU7SUFDUkMsSUFBQSxFQUFNO0lBQ05DLElBQUEsRUFBTTtJQUNOQyxRQUFBLEVBQVU7SUFDVkMsSUFBQSxFQUFNO0lBQ05DLE1BQUEsRUFBUTtJQUNSQyxRQUFBLEVBQVU7SUFDVkMsUUFBQSxFQUFVO0lBQ1ZDLE1BQUEsRUFBUTtFQUNWO0VBQ0FPLE9BQUEsRUFBUztJQUNQQyxhQUFBLEVBQWUsQ0FBQztJQUNoQkMsVUFBQSxFQUFZLENBQUM7SUFDYkMsR0FBQSxFQUFLLENBQUM7SUFDTkMsS0FBQSxFQUFPLENBQUM7RUFDVjtFQUNBQyxXQUFBLEVBQWEsU0FBU0EsWUFBQSxFQUFjO0lBQ2xDLE9BQU87RUFDVDtFQUNBdEMsaUJBQUEsRUFBbUIsQ0FBQztFQUNwQkMsb0JBQUEsRUFBc0IsQ0FBQztFQUN2QnNDLGlCQUFBLEVBQW1CO0lBQ2pCLE9BQU87TUFDTEMsaUJBQUEsRUFBbUI7UUFDakIsT0FBTztNQUNUO0lBQ0Y7RUFDRjtFQUNBQyxNQUFBLEVBQVEsQ0FBQztFQUNUQyxLQUFBLEVBQU8sQ0FBQztFQUNSQyxNQUFBLEVBQVEsQ0FBQztFQUNUQyxXQUFBLEVBQWEsQ0FBQztFQUNkQyxhQUFBLEVBQWUsQ0FBQztFQUNoQkMsV0FBQSxFQUFhO0lBQ1gsT0FBTyxDQUFDO0VBQ1Y7RUFDQUMsc0JBQXNCQyxRQUFBLEVBQVU7SUFDOUIsSUFBSSxPQUFPSixVQUFBLEtBQWUsYUFBYTtNQUNyQ0ksUUFBQSxDQUFTO01BQ1QsT0FBTztJQUNUO0lBQ0EsT0FBT0osVUFBQSxDQUFXSSxRQUFBLEVBQVUsQ0FBQztFQUMvQjtFQUNBQyxxQkFBcUJDLEVBQUEsRUFBSTtJQUN2QixJQUFJLE9BQU9OLFVBQUEsS0FBZSxhQUFhO01BQ3JDO0lBQ0Y7SUFDQUMsWUFBQSxDQUFhSyxFQUFFO0VBQ2pCO0FBQ0Y7QUFDQSxTQUFTQyxVQUFBLEVBQVk7RUFDbkIsTUFBTUMsR0FBQSxHQUFNLE9BQU9DLE1BQUEsS0FBVyxjQUFjQSxNQUFBLEdBQVMsQ0FBQztFQUN0RDlELE1BQUEsQ0FBTzZELEdBQUEsRUFBS3RCLFNBQVM7RUFDckIsT0FBT3NCLEdBQUE7QUFDVDs7O0FDNUlBLFNBQVNFLFlBQVlsRSxHQUFBLEVBQUs7RUFDeEIsTUFBTW1FLE1BQUEsR0FBU25FLEdBQUE7RUFDZkUsTUFBQSxDQUFPSSxJQUFBLENBQUs2RCxNQUFNLEVBQUU1RCxPQUFBLENBQVFDLEdBQUEsSUFBTztJQUNqQyxJQUFJO01BQ0YyRCxNQUFBLENBQU8zRCxHQUFHLElBQUk7SUFDaEIsU0FBUzRELENBQUEsRUFBRyxDQUVaO0lBQ0EsSUFBSTtNQUNGLE9BQU9ELE1BQUEsQ0FBTzNELEdBQUc7SUFDbkIsU0FBUzRELENBQUEsRUFBRyxDQUVaO0VBQ0YsQ0FBQztBQUNIO0FBQ0EsU0FBU0MsU0FBU1QsUUFBQSxFQUFVVSxLQUFBLEVBQU87RUFDakMsSUFBSUEsS0FBQSxLQUFVLFFBQVE7SUFDcEJBLEtBQUEsR0FBUTtFQUNWO0VBQ0EsT0FBT2QsVUFBQSxDQUFXSSxRQUFBLEVBQVVVLEtBQUs7QUFDbkM7QUFDQSxTQUFTQyxJQUFBLEVBQU07RUFDYixPQUFPakIsSUFBQSxDQUFLaUIsR0FBQSxDQUFJO0FBQ2xCO0FBQ0EsU0FBU0Msa0JBQWlCQyxFQUFBLEVBQUk7RUFDNUIsTUFBTUMsT0FBQSxHQUFTWCxTQUFBLENBQVU7RUFDekIsSUFBSXRDLEtBQUE7RUFDSixJQUFJaUQsT0FBQSxDQUFPdkIsZ0JBQUEsRUFBa0I7SUFDM0IxQixLQUFBLEdBQVFpRCxPQUFBLENBQU92QixnQkFBQSxDQUFpQnNCLEVBQUEsRUFBSSxJQUFJO0VBQzFDO0VBQ0EsSUFBSSxDQUFDaEQsS0FBQSxJQUFTZ0QsRUFBQSxDQUFHRSxZQUFBLEVBQWM7SUFDN0JsRCxLQUFBLEdBQVFnRCxFQUFBLENBQUdFLFlBQUE7RUFDYjtFQUNBLElBQUksQ0FBQ2xELEtBQUEsRUFBTztJQUNWQSxLQUFBLEdBQVFnRCxFQUFBLENBQUdoRCxLQUFBO0VBQ2I7RUFDQSxPQUFPQSxLQUFBO0FBQ1Q7QUFDQSxTQUFTbUQsYUFBYUgsRUFBQSxFQUFJSSxJQUFBLEVBQU07RUFDOUIsSUFBSUEsSUFBQSxLQUFTLFFBQVE7SUFDbkJBLElBQUEsR0FBTztFQUNUO0VBQ0EsTUFBTUgsT0FBQSxHQUFTWCxTQUFBLENBQVU7RUFDekIsSUFBSWUsTUFBQTtFQUNKLElBQUlDLFlBQUE7RUFDSixJQUFJQyxlQUFBO0VBQ0osTUFBTUMsUUFBQSxHQUFXVCxpQkFBQSxDQUFpQkMsRUFBRTtFQUNwQyxJQUFJQyxPQUFBLENBQU9RLGVBQUEsRUFBaUI7SUFDMUJILFlBQUEsR0FBZUUsUUFBQSxDQUFTRSxTQUFBLElBQWFGLFFBQUEsQ0FBU0csZUFBQTtJQUM5QyxJQUFJTCxZQUFBLENBQWFNLEtBQUEsQ0FBTSxHQUFHLEVBQUU1RSxNQUFBLEdBQVMsR0FBRztNQUN0Q3NFLFlBQUEsR0FBZUEsWUFBQSxDQUFhTSxLQUFBLENBQU0sSUFBSSxFQUFFQyxHQUFBLENBQUlDLENBQUEsSUFBS0EsQ0FBQSxDQUFFQyxPQUFBLENBQVEsS0FBSyxHQUFHLENBQUMsRUFBRUMsSUFBQSxDQUFLLElBQUk7SUFDakY7SUFHQVQsZUFBQSxHQUFrQixJQUFJTixPQUFBLENBQU9RLGVBQUEsQ0FBZ0JILFlBQUEsS0FBaUIsU0FBUyxLQUFLQSxZQUFZO0VBQzFGLE9BQU87SUFDTEMsZUFBQSxHQUFrQkMsUUFBQSxDQUFTUyxZQUFBLElBQWdCVCxRQUFBLENBQVNVLFVBQUEsSUFBY1YsUUFBQSxDQUFTVyxXQUFBLElBQWVYLFFBQUEsQ0FBU1ksV0FBQSxJQUFlWixRQUFBLENBQVNFLFNBQUEsSUFBYUYsUUFBQSxDQUFTN0IsZ0JBQUEsQ0FBaUIsV0FBVyxFQUFFb0MsT0FBQSxDQUFRLGNBQWMsb0JBQW9CO0lBQ3pOVixNQUFBLEdBQVNFLGVBQUEsQ0FBZ0JjLFFBQUEsQ0FBUyxFQUFFVCxLQUFBLENBQU0sR0FBRztFQUMvQztFQUNBLElBQUlSLElBQUEsS0FBUyxLQUFLO0lBRWhCLElBQUlILE9BQUEsQ0FBT1EsZUFBQSxFQUFpQkgsWUFBQSxHQUFlQyxlQUFBLENBQWdCZSxHQUFBLFVBRWxEakIsTUFBQSxDQUFPckUsTUFBQSxLQUFXLElBQUlzRSxZQUFBLEdBQWVpQixVQUFBLENBQVdsQixNQUFBLENBQU8sRUFBRSxDQUFDLE9BRTlEQyxZQUFBLEdBQWVpQixVQUFBLENBQVdsQixNQUFBLENBQU8sQ0FBQyxDQUFDO0VBQzFDO0VBQ0EsSUFBSUQsSUFBQSxLQUFTLEtBQUs7SUFFaEIsSUFBSUgsT0FBQSxDQUFPUSxlQUFBLEVBQWlCSCxZQUFBLEdBQWVDLGVBQUEsQ0FBZ0JpQixHQUFBLFVBRWxEbkIsTUFBQSxDQUFPckUsTUFBQSxLQUFXLElBQUlzRSxZQUFBLEdBQWVpQixVQUFBLENBQVdsQixNQUFBLENBQU8sRUFBRSxDQUFDLE9BRTlEQyxZQUFBLEdBQWVpQixVQUFBLENBQVdsQixNQUFBLENBQU8sQ0FBQyxDQUFDO0VBQzFDO0VBQ0EsT0FBT0MsWUFBQSxJQUFnQjtBQUN6QjtBQUNBLFNBQVNtQixVQUFTQyxDQUFBLEVBQUc7RUFDbkIsT0FBTyxPQUFPQSxDQUFBLEtBQU0sWUFBWUEsQ0FBQSxLQUFNLFFBQVFBLENBQUEsQ0FBRWxHLFdBQUEsSUFBZUMsTUFBQSxDQUFPa0csU0FBQSxDQUFVTixRQUFBLENBQVNPLElBQUEsQ0FBS0YsQ0FBQyxFQUFFRyxLQUFBLENBQU0sR0FBRyxFQUFFLE1BQU07QUFDcEg7QUFDQSxTQUFTQyxPQUFPQyxJQUFBLEVBQU07RUFFcEIsSUFBSSxPQUFPdkMsTUFBQSxLQUFXLGVBQWUsT0FBT0EsTUFBQSxDQUFPd0MsV0FBQSxLQUFnQixhQUFhO0lBQzlFLE9BQU9ELElBQUEsWUFBZ0JDLFdBQUE7RUFDekI7RUFDQSxPQUFPRCxJQUFBLEtBQVNBLElBQUEsQ0FBS0UsUUFBQSxLQUFhLEtBQUtGLElBQUEsQ0FBS0UsUUFBQSxLQUFhO0FBQzNEO0FBQ0EsU0FBU0MsUUFBQSxFQUFTO0VBQ2hCLE1BQU1DLEVBQUEsR0FBSzFHLE1BQUEsQ0FBTzJHLFNBQUEsQ0FBVXBHLE1BQUEsSUFBVSxJQUFJLFNBQVlvRyxTQUFBLENBQVUsQ0FBQyxDQUFDO0VBQ2xFLE1BQU1DLFFBQUEsR0FBVyxDQUFDLGFBQWEsZUFBZSxXQUFXO0VBQ3pELFNBQVNDLENBQUEsR0FBSSxHQUFHQSxDQUFBLEdBQUlGLFNBQUEsQ0FBVXBHLE1BQUEsRUFBUXNHLENBQUEsSUFBSyxHQUFHO0lBQzVDLE1BQU1DLFVBQUEsR0FBYUQsQ0FBQSxHQUFJLEtBQUtGLFNBQUEsQ0FBVXBHLE1BQUEsSUFBVXNHLENBQUEsR0FBSSxTQUFZRixTQUFBLENBQVVFLENBQUM7SUFDM0UsSUFBSUMsVUFBQSxLQUFlLFVBQWFBLFVBQUEsS0FBZSxRQUFRLENBQUNULE1BQUEsQ0FBT1MsVUFBVSxHQUFHO01BQzFFLE1BQU1DLFNBQUEsR0FBWS9HLE1BQUEsQ0FBT0ksSUFBQSxDQUFLSixNQUFBLENBQU84RyxVQUFVLENBQUMsRUFBRUUsTUFBQSxDQUFPMUcsR0FBQSxJQUFPc0csUUFBQSxDQUFTSyxPQUFBLENBQVEzRyxHQUFHLElBQUksQ0FBQztNQUN6RixTQUFTNEcsU0FBQSxHQUFZLEdBQUdDLEdBQUEsR0FBTUosU0FBQSxDQUFVeEcsTUFBQSxFQUFRMkcsU0FBQSxHQUFZQyxHQUFBLEVBQUtELFNBQUEsSUFBYSxHQUFHO1FBQy9FLE1BQU1FLE9BQUEsR0FBVUwsU0FBQSxDQUFVRyxTQUFTO1FBQ25DLE1BQU1HLElBQUEsR0FBT3JILE1BQUEsQ0FBT3NILHdCQUFBLENBQXlCUixVQUFBLEVBQVlNLE9BQU87UUFDaEUsSUFBSUMsSUFBQSxLQUFTLFVBQWFBLElBQUEsQ0FBS0UsVUFBQSxFQUFZO1VBQ3pDLElBQUl2QixTQUFBLENBQVNVLEVBQUEsQ0FBR1UsT0FBTyxDQUFDLEtBQUtwQixTQUFBLENBQVNjLFVBQUEsQ0FBV00sT0FBTyxDQUFDLEdBQUc7WUFDMUQsSUFBSU4sVUFBQSxDQUFXTSxPQUFPLEVBQUVJLFVBQUEsRUFBWTtjQUNsQ2QsRUFBQSxDQUFHVSxPQUFPLElBQUlOLFVBQUEsQ0FBV00sT0FBTztZQUNsQyxPQUFPO2NBQ0xYLE9BQUEsQ0FBT0MsRUFBQSxDQUFHVSxPQUFPLEdBQUdOLFVBQUEsQ0FBV00sT0FBTyxDQUFDO1lBQ3pDO1VBQ0YsV0FBVyxDQUFDcEIsU0FBQSxDQUFTVSxFQUFBLENBQUdVLE9BQU8sQ0FBQyxLQUFLcEIsU0FBQSxDQUFTYyxVQUFBLENBQVdNLE9BQU8sQ0FBQyxHQUFHO1lBQ2xFVixFQUFBLENBQUdVLE9BQU8sSUFBSSxDQUFDO1lBQ2YsSUFBSU4sVUFBQSxDQUFXTSxPQUFPLEVBQUVJLFVBQUEsRUFBWTtjQUNsQ2QsRUFBQSxDQUFHVSxPQUFPLElBQUlOLFVBQUEsQ0FBV00sT0FBTztZQUNsQyxPQUFPO2NBQ0xYLE9BQUEsQ0FBT0MsRUFBQSxDQUFHVSxPQUFPLEdBQUdOLFVBQUEsQ0FBV00sT0FBTyxDQUFDO1lBQ3pDO1VBQ0YsT0FBTztZQUNMVixFQUFBLENBQUdVLE9BQU8sSUFBSU4sVUFBQSxDQUFXTSxPQUFPO1VBQ2xDO1FBQ0Y7TUFDRjtJQUNGO0VBQ0Y7RUFDQSxPQUFPVixFQUFBO0FBQ1Q7QUFDQSxTQUFTZSxlQUFlbEQsRUFBQSxFQUFJbUQsT0FBQSxFQUFTQyxRQUFBLEVBQVU7RUFDN0NwRCxFQUFBLENBQUdoRCxLQUFBLENBQU1xRyxXQUFBLENBQVlGLE9BQUEsRUFBU0MsUUFBUTtBQUN4QztBQUNBLFNBQVNFLHFCQUFxQkMsSUFBQSxFQUFNO0VBQ2xDLElBQUk7SUFDRkMsTUFBQTtJQUNBQyxjQUFBO0lBQ0FDO0VBQ0YsSUFBSUgsSUFBQTtFQUNKLE1BQU10RCxPQUFBLEdBQVNYLFNBQUEsQ0FBVTtFQUN6QixNQUFNcUUsYUFBQSxHQUFnQixDQUFDSCxNQUFBLENBQU9JLFNBQUE7RUFDOUIsSUFBSUMsU0FBQSxHQUFZO0VBQ2hCLElBQUlDLElBQUE7RUFDSixNQUFNQyxRQUFBLEdBQVdQLE1BQUEsQ0FBT1EsTUFBQSxDQUFPQyxLQUFBO0VBQy9CVCxNQUFBLENBQU9VLFNBQUEsQ0FBVWxILEtBQUEsQ0FBTW1ILGNBQUEsR0FBaUI7RUFDeENsRSxPQUFBLENBQU9iLG9CQUFBLENBQXFCb0UsTUFBQSxDQUFPWSxjQUFjO0VBQ2pELE1BQU1DLEdBQUEsR0FBTVosY0FBQSxHQUFpQkUsYUFBQSxHQUFnQixTQUFTO0VBQ3RELE1BQU1XLFlBQUEsR0FBZUEsQ0FBQ0MsT0FBQSxFQUFTNUksTUFBQSxLQUFXO0lBQ3hDLE9BQU8wSSxHQUFBLEtBQVEsVUFBVUUsT0FBQSxJQUFXNUksTUFBQSxJQUFVMEksR0FBQSxLQUFRLFVBQVVFLE9BQUEsSUFBVzVJLE1BQUE7RUFDN0U7RUFDQSxNQUFNNkksT0FBQSxHQUFVQSxDQUFBLEtBQU07SUFDcEJWLElBQUEsSUFBTyxtQkFBSWpGLElBQUEsQ0FBSyxHQUFFNEYsT0FBQSxDQUFRO0lBQzFCLElBQUlaLFNBQUEsS0FBYyxNQUFNO01BQ3RCQSxTQUFBLEdBQVlDLElBQUE7SUFDZDtJQUNBLE1BQU1ZLFFBQUEsR0FBV0MsSUFBQSxDQUFLQyxHQUFBLENBQUlELElBQUEsQ0FBS0UsR0FBQSxFQUFLZixJQUFBLEdBQU9ELFNBQUEsSUFBYUUsUUFBQSxFQUFVLENBQUMsR0FBRyxDQUFDO0lBQ3ZFLE1BQU1lLFlBQUEsR0FBZSxNQUFNSCxJQUFBLENBQUtJLEdBQUEsQ0FBSUwsUUFBQSxHQUFXQyxJQUFBLENBQUtLLEVBQUUsSUFBSTtJQUMxRCxJQUFJQyxlQUFBLEdBQWtCdEIsYUFBQSxHQUFnQm1CLFlBQUEsSUFBZ0JyQixjQUFBLEdBQWlCRSxhQUFBO0lBQ3ZFLElBQUlXLFlBQUEsQ0FBYVcsZUFBQSxFQUFpQnhCLGNBQWMsR0FBRztNQUNqRHdCLGVBQUEsR0FBa0J4QixjQUFBO0lBQ3BCO0lBQ0FELE1BQUEsQ0FBT1UsU0FBQSxDQUFVZ0IsUUFBQSxDQUFTO01BQ3hCLENBQUN4QixJQUFJLEdBQUd1QjtJQUNWLENBQUM7SUFDRCxJQUFJWCxZQUFBLENBQWFXLGVBQUEsRUFBaUJ4QixjQUFjLEdBQUc7TUFDakRELE1BQUEsQ0FBT1UsU0FBQSxDQUFVbEgsS0FBQSxDQUFNbUksUUFBQSxHQUFXO01BQ2xDM0IsTUFBQSxDQUFPVSxTQUFBLENBQVVsSCxLQUFBLENBQU1tSCxjQUFBLEdBQWlCO01BQ3hDcEYsVUFBQSxDQUFXLE1BQU07UUFDZnlFLE1BQUEsQ0FBT1UsU0FBQSxDQUFVbEgsS0FBQSxDQUFNbUksUUFBQSxHQUFXO1FBQ2xDM0IsTUFBQSxDQUFPVSxTQUFBLENBQVVnQixRQUFBLENBQVM7VUFDeEIsQ0FBQ3hCLElBQUksR0FBR3VCO1FBQ1YsQ0FBQztNQUNILENBQUM7TUFDRGhGLE9BQUEsQ0FBT2Isb0JBQUEsQ0FBcUJvRSxNQUFBLENBQU9ZLGNBQWM7TUFDakQ7SUFDRjtJQUNBWixNQUFBLENBQU9ZLGNBQUEsR0FBaUJuRSxPQUFBLENBQU9mLHFCQUFBLENBQXNCc0YsT0FBTztFQUM5RDtFQUNBQSxPQUFBLENBQVE7QUFDVjtBQUNBLFNBQVNZLG9CQUFvQkMsT0FBQSxFQUFTO0VBQ3BDLE9BQU9BLE9BQUEsQ0FBUTdJLGFBQUEsQ0FBYyx5QkFBeUIsS0FBSzZJLE9BQUEsQ0FBUUMsVUFBQSxJQUFjRCxPQUFBLENBQVFDLFVBQUEsQ0FBVzlJLGFBQUEsQ0FBYyx5QkFBeUIsS0FBSzZJLE9BQUE7QUFDbEo7QUFDQSxTQUFTRSxnQkFBZ0JDLE9BQUEsRUFBU0MsUUFBQSxFQUFVO0VBQzFDLElBQUlBLFFBQUEsS0FBYSxRQUFRO0lBQ3ZCQSxRQUFBLEdBQVc7RUFDYjtFQUNBLE9BQU8sQ0FBQyxHQUFHRCxPQUFBLENBQVExSSxRQUFRLEVBQUUyRixNQUFBLENBQU96QyxFQUFBLElBQU1BLEVBQUEsQ0FBRzBGLE9BQUEsQ0FBUUQsUUFBUSxDQUFDO0FBQ2hFO0FBQ0EsU0FBUzVJLGNBQWM4SSxHQUFBLEVBQUtDLFFBQUEsRUFBUztFQUNuQyxJQUFJQSxRQUFBLEtBQVksUUFBUTtJQUN0QkEsUUFBQSxHQUFVLEVBQUM7RUFDYjtFQUNBLE1BQU01RixFQUFBLEdBQUtoQyxRQUFBLENBQVNuQixhQUFBLENBQWM4SSxHQUFHO0VBQ3JDM0YsRUFBQSxDQUFHNkYsU0FBQSxDQUFVQyxHQUFBLENBQUksSUFBSUMsS0FBQSxDQUFNQyxPQUFBLENBQVFKLFFBQU8sSUFBSUEsUUFBQSxHQUFVLENBQUNBLFFBQU8sQ0FBRTtFQUNsRSxPQUFPNUYsRUFBQTtBQUNUO0FBQ0EsU0FBU2lHLGNBQWNqRyxFQUFBLEVBQUk7RUFDekIsTUFBTUMsT0FBQSxHQUFTWCxTQUFBLENBQVU7RUFDekIsTUFBTTRHLFNBQUEsR0FBV3BJLFdBQUEsQ0FBWTtFQUM3QixNQUFNcUksR0FBQSxHQUFNbkcsRUFBQSxDQUFHb0cscUJBQUEsQ0FBc0I7RUFDckMsTUFBTWxLLElBQUEsR0FBT2dLLFNBQUEsQ0FBU2hLLElBQUE7RUFDdEIsTUFBTW1LLFNBQUEsR0FBWXJHLEVBQUEsQ0FBR3FHLFNBQUEsSUFBYW5LLElBQUEsQ0FBS21LLFNBQUEsSUFBYTtFQUNwRCxNQUFNQyxVQUFBLEdBQWF0RyxFQUFBLENBQUdzRyxVQUFBLElBQWNwSyxJQUFBLENBQUtvSyxVQUFBLElBQWM7RUFDdkQsTUFBTUMsU0FBQSxHQUFZdkcsRUFBQSxLQUFPQyxPQUFBLEdBQVNBLE9BQUEsQ0FBT3VHLE9BQUEsR0FBVXhHLEVBQUEsQ0FBR3VHLFNBQUE7RUFDdEQsTUFBTUUsVUFBQSxHQUFhekcsRUFBQSxLQUFPQyxPQUFBLEdBQVNBLE9BQUEsQ0FBT3lHLE9BQUEsR0FBVTFHLEVBQUEsQ0FBR3lHLFVBQUE7RUFDdkQsT0FBTztJQUNMRSxHQUFBLEVBQUtSLEdBQUEsQ0FBSVEsR0FBQSxHQUFNSixTQUFBLEdBQVlGLFNBQUE7SUFDM0JPLElBQUEsRUFBTVQsR0FBQSxDQUFJUyxJQUFBLEdBQU9ILFVBQUEsR0FBYUg7RUFDaEM7QUFDRjtBQUNBLFNBQVNPLGVBQWU3RyxFQUFBLEVBQUl5RixRQUFBLEVBQVU7RUFDcEMsTUFBTXFCLE9BQUEsR0FBVSxFQUFDO0VBQ2pCLE9BQU85RyxFQUFBLENBQUcrRyxzQkFBQSxFQUF3QjtJQUNoQyxNQUFNQyxJQUFBLEdBQU9oSCxFQUFBLENBQUcrRyxzQkFBQTtJQUNoQixJQUFJdEIsUUFBQSxFQUFVO01BQ1osSUFBSXVCLElBQUEsQ0FBS3RCLE9BQUEsQ0FBUUQsUUFBUSxHQUFHcUIsT0FBQSxDQUFRRyxJQUFBLENBQUtELElBQUk7SUFDL0MsT0FBT0YsT0FBQSxDQUFRRyxJQUFBLENBQUtELElBQUk7SUFDeEJoSCxFQUFBLEdBQUtnSCxJQUFBO0VBQ1A7RUFDQSxPQUFPRixPQUFBO0FBQ1Q7QUFDQSxTQUFTSSxlQUFlbEgsRUFBQSxFQUFJeUYsUUFBQSxFQUFVO0VBQ3BDLE1BQU0wQixPQUFBLEdBQVUsRUFBQztFQUNqQixPQUFPbkgsRUFBQSxDQUFHb0gsa0JBQUEsRUFBb0I7SUFDNUIsTUFBTUMsSUFBQSxHQUFPckgsRUFBQSxDQUFHb0gsa0JBQUE7SUFDaEIsSUFBSTNCLFFBQUEsRUFBVTtNQUNaLElBQUk0QixJQUFBLENBQUszQixPQUFBLENBQVFELFFBQVEsR0FBRzBCLE9BQUEsQ0FBUUYsSUFBQSxDQUFLSSxJQUFJO0lBQy9DLE9BQU9GLE9BQUEsQ0FBUUYsSUFBQSxDQUFLSSxJQUFJO0lBQ3hCckgsRUFBQSxHQUFLcUgsSUFBQTtFQUNQO0VBQ0EsT0FBT0YsT0FBQTtBQUNUO0FBQ0EsU0FBU0csYUFBYXRILEVBQUEsRUFBSXVILElBQUEsRUFBTTtFQUM5QixNQUFNdEgsT0FBQSxHQUFTWCxTQUFBLENBQVU7RUFDekIsT0FBT1csT0FBQSxDQUFPdkIsZ0JBQUEsQ0FBaUJzQixFQUFBLEVBQUksSUFBSSxFQUFFckIsZ0JBQUEsQ0FBaUI0SSxJQUFJO0FBQ2hFO0FBQ0EsU0FBU0MsYUFBYXhILEVBQUEsRUFBSTtFQUN4QixJQUFJeUgsS0FBQSxHQUFRekgsRUFBQTtFQUNaLElBQUlzQyxDQUFBO0VBQ0osSUFBSW1GLEtBQUEsRUFBTztJQUNUbkYsQ0FBQSxHQUFJO0lBRUosUUFBUW1GLEtBQUEsR0FBUUEsS0FBQSxDQUFNQyxlQUFBLE1BQXFCLE1BQU07TUFDL0MsSUFBSUQsS0FBQSxDQUFNeEYsUUFBQSxLQUFhLEdBQUdLLENBQUEsSUFBSztJQUNqQztJQUNBLE9BQU9BLENBQUE7RUFDVDtFQUNBLE9BQU87QUFDVDtBQUNBLFNBQVNxRixlQUFlM0gsRUFBQSxFQUFJeUYsUUFBQSxFQUFVO0VBQ3BDLE1BQU1tQyxPQUFBLEdBQVUsRUFBQztFQUNqQixJQUFJQyxNQUFBLEdBQVM3SCxFQUFBLENBQUc4SCxhQUFBO0VBQ2hCLE9BQU9ELE1BQUEsRUFBUTtJQUNiLElBQUlwQyxRQUFBLEVBQVU7TUFDWixJQUFJb0MsTUFBQSxDQUFPbkMsT0FBQSxDQUFRRCxRQUFRLEdBQUdtQyxPQUFBLENBQVFYLElBQUEsQ0FBS1ksTUFBTTtJQUNuRCxPQUFPO01BQ0xELE9BQUEsQ0FBUVgsSUFBQSxDQUFLWSxNQUFNO0lBQ3JCO0lBQ0FBLE1BQUEsR0FBU0EsTUFBQSxDQUFPQyxhQUFBO0VBQ2xCO0VBQ0EsT0FBT0YsT0FBQTtBQUNUO0FBQ0EsU0FBU0cscUJBQXFCL0gsRUFBQSxFQUFJYixRQUFBLEVBQVU7RUFDMUMsU0FBUzZJLGFBQWFySSxDQUFBLEVBQUc7SUFDdkIsSUFBSUEsQ0FBQSxDQUFFaEUsTUFBQSxLQUFXcUUsRUFBQSxFQUFJO0lBQ3JCYixRQUFBLENBQVN5QyxJQUFBLENBQUs1QixFQUFBLEVBQUlMLENBQUM7SUFDbkJLLEVBQUEsQ0FBRzVELG1CQUFBLENBQW9CLGlCQUFpQjRMLFlBQVk7RUFDdEQ7RUFDQSxJQUFJN0ksUUFBQSxFQUFVO0lBQ1phLEVBQUEsQ0FBRzdELGdCQUFBLENBQWlCLGlCQUFpQjZMLFlBQVk7RUFDbkQ7QUFDRjtBQUNBLFNBQVNDLGlCQUFpQmpJLEVBQUEsRUFBSWtJLElBQUEsRUFBTUMsY0FBQSxFQUFnQjtFQUNsRCxNQUFNbEksT0FBQSxHQUFTWCxTQUFBLENBQVU7RUFDekIsSUFBSTZJLGNBQUEsRUFBZ0I7SUFDbEIsT0FBT25JLEVBQUEsQ0FBR2tJLElBQUEsS0FBUyxVQUFVLGdCQUFnQixjQUFjLElBQUkzRyxVQUFBLENBQVd0QixPQUFBLENBQU92QixnQkFBQSxDQUFpQnNCLEVBQUEsRUFBSSxJQUFJLEVBQUVyQixnQkFBQSxDQUFpQnVKLElBQUEsS0FBUyxVQUFVLGlCQUFpQixZQUFZLENBQUMsSUFBSTNHLFVBQUEsQ0FBV3RCLE9BQUEsQ0FBT3ZCLGdCQUFBLENBQWlCc0IsRUFBQSxFQUFJLElBQUksRUFBRXJCLGdCQUFBLENBQWlCdUosSUFBQSxLQUFTLFVBQVUsZ0JBQWdCLGVBQWUsQ0FBQztFQUNyUztFQUNBLE9BQU9sSSxFQUFBLENBQUdvSSxXQUFBO0FBQ1o7OztBQzVRQSxJQUFJQyxPQUFBO0FBQ0osU0FBU0MsWUFBQSxFQUFjO0VBQ3JCLE1BQU1ySSxPQUFBLEdBQVNYLFNBQUEsQ0FBVTtFQUN6QixNQUFNNEcsU0FBQSxHQUFXcEksV0FBQSxDQUFZO0VBQzdCLE9BQU87SUFDTHlLLFlBQUEsRUFBY3JDLFNBQUEsQ0FBU3NDLGVBQUEsSUFBbUJ0QyxTQUFBLENBQVNzQyxlQUFBLENBQWdCeEwsS0FBQSxJQUFTLG9CQUFvQmtKLFNBQUEsQ0FBU3NDLGVBQUEsQ0FBZ0J4TCxLQUFBO0lBQ3pIeUwsS0FBQSxFQUFPLENBQUMsRUFBRSxrQkFBa0J4SSxPQUFBLElBQVVBLE9BQUEsQ0FBT3lJLGFBQUEsSUFBaUJ4QyxTQUFBLFlBQW9CakcsT0FBQSxDQUFPeUksYUFBQTtFQUMzRjtBQUNGO0FBQ0EsU0FBU0MsV0FBQSxFQUFhO0VBQ3BCLElBQUksQ0FBQ04sT0FBQSxFQUFTO0lBQ1pBLE9BQUEsR0FBVUMsV0FBQSxDQUFZO0VBQ3hCO0VBQ0EsT0FBT0QsT0FBQTtBQUNUO0FBRUEsSUFBSU8sWUFBQTtBQUNKLFNBQVNDLFdBQVdDLEtBQUEsRUFBTztFQUN6QixJQUFJO0lBQ0YzSztFQUNGLElBQUkySyxLQUFBLEtBQVUsU0FBUyxDQUFDLElBQUlBLEtBQUE7RUFDNUIsTUFBTUMsUUFBQSxHQUFVSixVQUFBLENBQVc7RUFDM0IsTUFBTTFJLE9BQUEsR0FBU1gsU0FBQSxDQUFVO0VBQ3pCLE1BQU0wSixRQUFBLEdBQVcvSSxPQUFBLENBQU8vQixTQUFBLENBQVU4SyxRQUFBO0VBQ2xDLE1BQU1DLEVBQUEsR0FBSzlLLFNBQUEsSUFBYThCLE9BQUEsQ0FBTy9CLFNBQUEsQ0FBVUMsU0FBQTtFQUN6QyxNQUFNK0ssTUFBQSxHQUFTO0lBQ2JDLEdBQUEsRUFBSztJQUNMQyxPQUFBLEVBQVM7RUFDWDtFQUNBLE1BQU1DLFdBQUEsR0FBY3BKLE9BQUEsQ0FBT25CLE1BQUEsQ0FBT3dLLEtBQUE7RUFDbEMsTUFBTUMsWUFBQSxHQUFldEosT0FBQSxDQUFPbkIsTUFBQSxDQUFPMEssTUFBQTtFQUNuQyxNQUFNSixPQUFBLEdBQVVILEVBQUEsQ0FBR1EsS0FBQSxDQUFNLDZCQUE2QjtFQUN0RCxJQUFJQyxJQUFBLEdBQU9ULEVBQUEsQ0FBR1EsS0FBQSxDQUFNLHNCQUFzQjtFQUMxQyxNQUFNRSxJQUFBLEdBQU9WLEVBQUEsQ0FBR1EsS0FBQSxDQUFNLHlCQUF5QjtFQUMvQyxNQUFNRyxNQUFBLEdBQVMsQ0FBQ0YsSUFBQSxJQUFRVCxFQUFBLENBQUdRLEtBQUEsQ0FBTSw0QkFBNEI7RUFDN0QsTUFBTUksT0FBQSxHQUFVYixRQUFBLEtBQWE7RUFDN0IsSUFBSWMsS0FBQSxHQUFRZCxRQUFBLEtBQWE7RUFHekIsTUFBTWUsV0FBQSxHQUFjLENBQUMsYUFBYSxhQUFhLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFVBQVU7RUFDckssSUFBSSxDQUFDTCxJQUFBLElBQVFJLEtBQUEsSUFBU2YsUUFBQSxDQUFRTixLQUFBLElBQVNzQixXQUFBLENBQVlySCxPQUFBLENBQVEsR0FBRzJHLFdBQVcsSUFBSUUsWUFBWSxFQUFFLEtBQUssR0FBRztJQUNqR0csSUFBQSxHQUFPVCxFQUFBLENBQUdRLEtBQUEsQ0FBTSxxQkFBcUI7SUFDckMsSUFBSSxDQUFDQyxJQUFBLEVBQU1BLElBQUEsR0FBTyxDQUFDLEdBQUcsR0FBRyxRQUFRO0lBQ2pDSSxLQUFBLEdBQVE7RUFDVjtFQUdBLElBQUlWLE9BQUEsSUFBVyxDQUFDUyxPQUFBLEVBQVM7SUFDdkJYLE1BQUEsQ0FBT2MsRUFBQSxHQUFLO0lBQ1pkLE1BQUEsQ0FBT0UsT0FBQSxHQUFVO0VBQ25CO0VBQ0EsSUFBSU0sSUFBQSxJQUFRRSxNQUFBLElBQVVELElBQUEsRUFBTTtJQUMxQlQsTUFBQSxDQUFPYyxFQUFBLEdBQUs7SUFDWmQsTUFBQSxDQUFPQyxHQUFBLEdBQU07RUFDZjtFQUdBLE9BQU9ELE1BQUE7QUFDVDtBQUNBLFNBQVNlLFVBQVVDLFNBQUEsRUFBVztFQUM1QixJQUFJQSxTQUFBLEtBQWMsUUFBUTtJQUN4QkEsU0FBQSxHQUFZLENBQUM7RUFDZjtFQUNBLElBQUksQ0FBQ3RCLFlBQUEsRUFBYztJQUNqQkEsWUFBQSxHQUFlQyxVQUFBLENBQVdxQixTQUFTO0VBQ3JDO0VBQ0EsT0FBT3RCLFlBQUE7QUFDVDtBQUVBLElBQUl1QixPQUFBO0FBQ0osU0FBU0MsWUFBQSxFQUFjO0VBQ3JCLE1BQU1uSyxPQUFBLEdBQVNYLFNBQUEsQ0FBVTtFQUN6QixJQUFJK0ssa0JBQUEsR0FBcUI7RUFDekIsU0FBU0MsU0FBQSxFQUFXO0lBQ2xCLE1BQU1yQixFQUFBLEdBQUtoSixPQUFBLENBQU8vQixTQUFBLENBQVVDLFNBQUEsQ0FBVW9NLFdBQUEsQ0FBWTtJQUNsRCxPQUFPdEIsRUFBQSxDQUFHdkcsT0FBQSxDQUFRLFFBQVEsS0FBSyxLQUFLdUcsRUFBQSxDQUFHdkcsT0FBQSxDQUFRLFFBQVEsSUFBSSxLQUFLdUcsRUFBQSxDQUFHdkcsT0FBQSxDQUFRLFNBQVMsSUFBSTtFQUMxRjtFQUNBLElBQUk0SCxRQUFBLENBQVMsR0FBRztJQUNkLE1BQU1yQixFQUFBLEdBQUt1QixNQUFBLENBQU92SyxPQUFBLENBQU8vQixTQUFBLENBQVVDLFNBQVM7SUFDNUMsSUFBSThLLEVBQUEsQ0FBR3dCLFFBQUEsQ0FBUyxVQUFVLEdBQUc7TUFDM0IsTUFBTSxDQUFDQyxLQUFBLEVBQU9DLEtBQUssSUFBSTFCLEVBQUEsQ0FBR3JJLEtBQUEsQ0FBTSxVQUFVLEVBQUUsQ0FBQyxFQUFFQSxLQUFBLENBQU0sR0FBRyxFQUFFLENBQUMsRUFBRUEsS0FBQSxDQUFNLEdBQUcsRUFBRUMsR0FBQSxDQUFJK0osR0FBQSxJQUFPQyxNQUFBLENBQU9ELEdBQUcsQ0FBQztNQUM5RlAsa0JBQUEsR0FBcUJLLEtBQUEsR0FBUSxNQUFNQSxLQUFBLEtBQVUsTUFBTUMsS0FBQSxHQUFRO0lBQzdEO0VBQ0Y7RUFDQSxPQUFPO0lBQ0xMLFFBQUEsRUFBVUQsa0JBQUEsSUFBc0JDLFFBQUEsQ0FBUztJQUN6Q0Qsa0JBQUE7SUFDQVMsU0FBQSxFQUFXLCtDQUErQ0MsSUFBQSxDQUFLOUssT0FBQSxDQUFPL0IsU0FBQSxDQUFVQyxTQUFTO0VBQzNGO0FBQ0Y7QUFDQSxTQUFTNk0sV0FBQSxFQUFhO0VBQ3BCLElBQUksQ0FBQ2IsT0FBQSxFQUFTO0lBQ1pBLE9BQUEsR0FBVUMsV0FBQSxDQUFZO0VBQ3hCO0VBQ0EsT0FBT0QsT0FBQTtBQUNUO0FBRUEsU0FBU2MsT0FBTzFILElBQUEsRUFBTTtFQUNwQixJQUFJO0lBQ0ZDLE1BQUE7SUFDQTBILEVBQUE7SUFDQUM7RUFDRixJQUFJNUgsSUFBQTtFQUNKLE1BQU10RCxPQUFBLEdBQVNYLFNBQUEsQ0FBVTtFQUN6QixJQUFJOEwsUUFBQSxHQUFXO0VBQ2YsSUFBSUMsY0FBQSxHQUFpQjtFQUNyQixNQUFNQyxhQUFBLEdBQWdCQSxDQUFBLEtBQU07SUFDMUIsSUFBSSxDQUFDOUgsTUFBQSxJQUFVQSxNQUFBLENBQU8rSCxTQUFBLElBQWEsQ0FBQy9ILE1BQUEsQ0FBT2dJLFdBQUEsRUFBYTtJQUN4REwsSUFBQSxDQUFLLGNBQWM7SUFDbkJBLElBQUEsQ0FBSyxRQUFRO0VBQ2Y7RUFDQSxNQUFNTSxjQUFBLEdBQWlCQSxDQUFBLEtBQU07SUFDM0IsSUFBSSxDQUFDakksTUFBQSxJQUFVQSxNQUFBLENBQU8rSCxTQUFBLElBQWEsQ0FBQy9ILE1BQUEsQ0FBT2dJLFdBQUEsRUFBYTtJQUN4REosUUFBQSxHQUFXLElBQUlNLGNBQUEsQ0FBZUMsT0FBQSxJQUFXO01BQ3ZDTixjQUFBLEdBQWlCcEwsT0FBQSxDQUFPZixxQkFBQSxDQUFzQixNQUFNO1FBQ2xELE1BQU07VUFDSm9LLEtBQUE7VUFDQUU7UUFDRixJQUFJaEcsTUFBQTtRQUNKLElBQUlvSSxRQUFBLEdBQVd0QyxLQUFBO1FBQ2YsSUFBSXVDLFNBQUEsR0FBWXJDLE1BQUE7UUFDaEJtQyxPQUFBLENBQVE3UCxPQUFBLENBQVFnUSxLQUFBLElBQVM7VUFDdkIsSUFBSTtZQUNGQyxjQUFBO1lBQ0FDLFdBQUE7WUFDQXJRO1VBQ0YsSUFBSW1RLEtBQUE7VUFDSixJQUFJblEsTUFBQSxJQUFVQSxNQUFBLEtBQVc2SCxNQUFBLENBQU94RCxFQUFBLEVBQUk7VUFDcEM0TCxRQUFBLEdBQVdJLFdBQUEsR0FBY0EsV0FBQSxDQUFZMUMsS0FBQSxJQUFTeUMsY0FBQSxDQUFlLENBQUMsS0FBS0EsY0FBQSxFQUFnQkUsVUFBQTtVQUNuRkosU0FBQSxHQUFZRyxXQUFBLEdBQWNBLFdBQUEsQ0FBWXhDLE1BQUEsSUFBVXVDLGNBQUEsQ0FBZSxDQUFDLEtBQUtBLGNBQUEsRUFBZ0JHLFNBQUE7UUFDdkYsQ0FBQztRQUNELElBQUlOLFFBQUEsS0FBYXRDLEtBQUEsSUFBU3VDLFNBQUEsS0FBY3JDLE1BQUEsRUFBUTtVQUM5QzhCLGFBQUEsQ0FBYztRQUNoQjtNQUNGLENBQUM7SUFDSCxDQUFDO0lBQ0RGLFFBQUEsQ0FBU2UsT0FBQSxDQUFRM0ksTUFBQSxDQUFPeEQsRUFBRTtFQUM1QjtFQUNBLE1BQU1vTSxjQUFBLEdBQWlCQSxDQUFBLEtBQU07SUFDM0IsSUFBSWYsY0FBQSxFQUFnQjtNQUNsQnBMLE9BQUEsQ0FBT2Isb0JBQUEsQ0FBcUJpTSxjQUFjO0lBQzVDO0lBQ0EsSUFBSUQsUUFBQSxJQUFZQSxRQUFBLENBQVNpQixTQUFBLElBQWE3SSxNQUFBLENBQU94RCxFQUFBLEVBQUk7TUFDL0NvTCxRQUFBLENBQVNpQixTQUFBLENBQVU3SSxNQUFBLENBQU94RCxFQUFFO01BQzVCb0wsUUFBQSxHQUFXO0lBQ2I7RUFDRjtFQUNBLE1BQU1rQix3QkFBQSxHQUEyQkEsQ0FBQSxLQUFNO0lBQ3JDLElBQUksQ0FBQzlJLE1BQUEsSUFBVUEsTUFBQSxDQUFPK0gsU0FBQSxJQUFhLENBQUMvSCxNQUFBLENBQU9nSSxXQUFBLEVBQWE7SUFDeERMLElBQUEsQ0FBSyxtQkFBbUI7RUFDMUI7RUFDQUQsRUFBQSxDQUFHLFFBQVEsTUFBTTtJQUNmLElBQUkxSCxNQUFBLENBQU9RLE1BQUEsQ0FBT3VJLGNBQUEsSUFBa0IsT0FBT3RNLE9BQUEsQ0FBT3lMLGNBQUEsS0FBbUIsYUFBYTtNQUNoRkQsY0FBQSxDQUFlO01BQ2Y7SUFDRjtJQUNBeEwsT0FBQSxDQUFPOUQsZ0JBQUEsQ0FBaUIsVUFBVW1QLGFBQWE7SUFDL0NyTCxPQUFBLENBQU85RCxnQkFBQSxDQUFpQixxQkFBcUJtUSx3QkFBd0I7RUFDdkUsQ0FBQztFQUNEcEIsRUFBQSxDQUFHLFdBQVcsTUFBTTtJQUNsQmtCLGNBQUEsQ0FBZTtJQUNmbk0sT0FBQSxDQUFPN0QsbUJBQUEsQ0FBb0IsVUFBVWtQLGFBQWE7SUFDbERyTCxPQUFBLENBQU83RCxtQkFBQSxDQUFvQixxQkFBcUJrUSx3QkFBd0I7RUFDMUUsQ0FBQztBQUNIO0FBRUEsU0FBU0UsU0FBU2pKLElBQUEsRUFBTTtFQUN0QixJQUFJO0lBQ0ZDLE1BQUE7SUFDQWlKLFlBQUE7SUFDQXZCLEVBQUE7SUFDQUM7RUFDRixJQUFJNUgsSUFBQTtFQUNKLE1BQU1tSixTQUFBLEdBQVksRUFBQztFQUNuQixNQUFNek0sT0FBQSxHQUFTWCxTQUFBLENBQVU7RUFDekIsTUFBTXFOLE1BQUEsR0FBUyxTQUFBQSxDQUFVaFIsTUFBQSxFQUFRaVIsT0FBQSxFQUFTO0lBQ3hDLElBQUlBLE9BQUEsS0FBWSxRQUFRO01BQ3RCQSxPQUFBLEdBQVUsQ0FBQztJQUNiO0lBQ0EsTUFBTUMsWUFBQSxHQUFlNU0sT0FBQSxDQUFPNk0sZ0JBQUEsSUFBb0I3TSxPQUFBLENBQU84TSxzQkFBQTtJQUN2RCxNQUFNM0IsUUFBQSxHQUFXLElBQUl5QixZQUFBLENBQWFHLFNBQUEsSUFBYTtNQUk3QyxJQUFJeEosTUFBQSxDQUFPeUosbUJBQUEsRUFBcUI7TUFDaEMsSUFBSUQsU0FBQSxDQUFVaFIsTUFBQSxLQUFXLEdBQUc7UUFDMUJtUCxJQUFBLENBQUssa0JBQWtCNkIsU0FBQSxDQUFVLENBQUMsQ0FBQztRQUNuQztNQUNGO01BQ0EsTUFBTUUsY0FBQSxHQUFpQixTQUFTQyxnQkFBQSxFQUFpQjtRQUMvQ2hDLElBQUEsQ0FBSyxrQkFBa0I2QixTQUFBLENBQVUsQ0FBQyxDQUFDO01BQ3JDO01BQ0EsSUFBSS9NLE9BQUEsQ0FBT2YscUJBQUEsRUFBdUI7UUFDaENlLE9BQUEsQ0FBT2YscUJBQUEsQ0FBc0JnTyxjQUFjO01BQzdDLE9BQU87UUFDTGpOLE9BQUEsQ0FBT2xCLFVBQUEsQ0FBV21PLGNBQUEsRUFBZ0IsQ0FBQztNQUNyQztJQUNGLENBQUM7SUFDRDlCLFFBQUEsQ0FBU2UsT0FBQSxDQUFReFEsTUFBQSxFQUFRO01BQ3ZCeVIsVUFBQSxFQUFZLE9BQU9SLE9BQUEsQ0FBUVEsVUFBQSxLQUFlLGNBQWMsT0FBT1IsT0FBQSxDQUFRUSxVQUFBO01BQ3ZFQyxTQUFBLEVBQVcsT0FBT1QsT0FBQSxDQUFRUyxTQUFBLEtBQWMsY0FBYyxPQUFPVCxPQUFBLENBQVFTLFNBQUE7TUFDckVDLGFBQUEsRUFBZSxPQUFPVixPQUFBLENBQVFVLGFBQUEsS0FBa0IsY0FBYyxPQUFPVixPQUFBLENBQVFVO0lBQy9FLENBQUM7SUFDRFosU0FBQSxDQUFVekYsSUFBQSxDQUFLbUUsUUFBUTtFQUN6QjtFQUNBLE1BQU1tQyxJQUFBLEdBQU9BLENBQUEsS0FBTTtJQUNqQixJQUFJLENBQUMvSixNQUFBLENBQU9RLE1BQUEsQ0FBT29ILFFBQUEsRUFBVTtJQUM3QixJQUFJNUgsTUFBQSxDQUFPUSxNQUFBLENBQU93SixjQUFBLEVBQWdCO01BQ2hDLE1BQU1DLGdCQUFBLEdBQW1COUYsY0FBQSxDQUFlbkUsTUFBQSxDQUFPa0ssTUFBTTtNQUNyRCxTQUFTcEwsQ0FBQSxHQUFJLEdBQUdBLENBQUEsR0FBSW1MLGdCQUFBLENBQWlCelIsTUFBQSxFQUFRc0csQ0FBQSxJQUFLLEdBQUc7UUFDbkRxSyxNQUFBLENBQU9jLGdCQUFBLENBQWlCbkwsQ0FBQyxDQUFDO01BQzVCO0lBQ0Y7SUFFQXFLLE1BQUEsQ0FBT25KLE1BQUEsQ0FBT2tLLE1BQUEsRUFBUTtNQUNwQkwsU0FBQSxFQUFXN0osTUFBQSxDQUFPUSxNQUFBLENBQU8ySjtJQUMzQixDQUFDO0lBR0RoQixNQUFBLENBQU9uSixNQUFBLENBQU9VLFNBQUEsRUFBVztNQUN2QmtKLFVBQUEsRUFBWTtJQUNkLENBQUM7RUFDSDtFQUNBLE1BQU1RLE9BQUEsR0FBVUEsQ0FBQSxLQUFNO0lBQ3BCbEIsU0FBQSxDQUFVNVEsT0FBQSxDQUFRc1AsUUFBQSxJQUFZO01BQzVCQSxRQUFBLENBQVN5QyxVQUFBLENBQVc7SUFDdEIsQ0FBQztJQUNEbkIsU0FBQSxDQUFVb0IsTUFBQSxDQUFPLEdBQUdwQixTQUFBLENBQVUxUSxNQUFNO0VBQ3RDO0VBQ0F5USxZQUFBLENBQWE7SUFDWHJCLFFBQUEsRUFBVTtJQUNWb0MsY0FBQSxFQUFnQjtJQUNoQkcsb0JBQUEsRUFBc0I7RUFDeEIsQ0FBQztFQUNEekMsRUFBQSxDQUFHLFFBQVFxQyxJQUFJO0VBQ2ZyQyxFQUFBLENBQUcsV0FBVzBDLE9BQU87QUFDdkI7QUFJQSxJQUFJRyxhQUFBLEdBQWdCO0VBQ2xCN0MsR0FBRzhDLE9BQUEsRUFBUUMsT0FBQSxFQUFTQyxRQUFBLEVBQVU7SUFDNUIsTUFBTUMsSUFBQSxHQUFPO0lBQ2IsSUFBSSxDQUFDQSxJQUFBLENBQUtDLGVBQUEsSUFBbUJELElBQUEsQ0FBSzVDLFNBQUEsRUFBVyxPQUFPNEMsSUFBQTtJQUNwRCxJQUFJLE9BQU9GLE9BQUEsS0FBWSxZQUFZLE9BQU9FLElBQUE7SUFDMUMsTUFBTUUsTUFBQSxHQUFTSCxRQUFBLEdBQVcsWUFBWTtJQUN0Q0YsT0FBQSxDQUFPcE4sS0FBQSxDQUFNLEdBQUcsRUFBRTlFLE9BQUEsQ0FBUXdTLEtBQUEsSUFBUztNQUNqQyxJQUFJLENBQUNILElBQUEsQ0FBS0MsZUFBQSxDQUFnQkUsS0FBSyxHQUFHSCxJQUFBLENBQUtDLGVBQUEsQ0FBZ0JFLEtBQUssSUFBSSxFQUFDO01BQ2pFSCxJQUFBLENBQUtDLGVBQUEsQ0FBZ0JFLEtBQUssRUFBRUQsTUFBTSxFQUFFSixPQUFPO0lBQzdDLENBQUM7SUFDRCxPQUFPRSxJQUFBO0VBQ1Q7RUFDQUksS0FBS1AsT0FBQSxFQUFRQyxPQUFBLEVBQVNDLFFBQUEsRUFBVTtJQUM5QixNQUFNQyxJQUFBLEdBQU87SUFDYixJQUFJLENBQUNBLElBQUEsQ0FBS0MsZUFBQSxJQUFtQkQsSUFBQSxDQUFLNUMsU0FBQSxFQUFXLE9BQU80QyxJQUFBO0lBQ3BELElBQUksT0FBT0YsT0FBQSxLQUFZLFlBQVksT0FBT0UsSUFBQTtJQUMxQyxTQUFTSyxZQUFBLEVBQWM7TUFDckJMLElBQUEsQ0FBS00sR0FBQSxDQUFJVCxPQUFBLEVBQVFRLFdBQVc7TUFDNUIsSUFBSUEsV0FBQSxDQUFZRSxjQUFBLEVBQWdCO1FBQzlCLE9BQU9GLFdBQUEsQ0FBWUUsY0FBQTtNQUNyQjtNQUNBLFNBQVNDLElBQUEsR0FBT3ZNLFNBQUEsQ0FBVXBHLE1BQUEsRUFBUTRTLElBQUEsR0FBTyxJQUFJN0ksS0FBQSxDQUFNNEksSUFBSSxHQUFHRSxJQUFBLEdBQU8sR0FBR0EsSUFBQSxHQUFPRixJQUFBLEVBQU1FLElBQUEsSUFBUTtRQUN2RkQsSUFBQSxDQUFLQyxJQUFJLElBQUl6TSxTQUFBLENBQVV5TSxJQUFJO01BQzdCO01BQ0FaLE9BQUEsQ0FBUWEsS0FBQSxDQUFNWCxJQUFBLEVBQU1TLElBQUk7SUFDMUI7SUFDQUosV0FBQSxDQUFZRSxjQUFBLEdBQWlCVCxPQUFBO0lBQzdCLE9BQU9FLElBQUEsQ0FBS2pELEVBQUEsQ0FBRzhDLE9BQUEsRUFBUVEsV0FBQSxFQUFhTixRQUFRO0VBQzlDO0VBQ0FhLE1BQU1kLE9BQUEsRUFBU0MsUUFBQSxFQUFVO0lBQ3ZCLE1BQU1DLElBQUEsR0FBTztJQUNiLElBQUksQ0FBQ0EsSUFBQSxDQUFLQyxlQUFBLElBQW1CRCxJQUFBLENBQUs1QyxTQUFBLEVBQVcsT0FBTzRDLElBQUE7SUFDcEQsSUFBSSxPQUFPRixPQUFBLEtBQVksWUFBWSxPQUFPRSxJQUFBO0lBQzFDLE1BQU1FLE1BQUEsR0FBU0gsUUFBQSxHQUFXLFlBQVk7SUFDdEMsSUFBSUMsSUFBQSxDQUFLYSxrQkFBQSxDQUFtQnRNLE9BQUEsQ0FBUXVMLE9BQU8sSUFBSSxHQUFHO01BQ2hERSxJQUFBLENBQUthLGtCQUFBLENBQW1CWCxNQUFNLEVBQUVKLE9BQU87SUFDekM7SUFDQSxPQUFPRSxJQUFBO0VBQ1Q7RUFDQWMsT0FBT2hCLE9BQUEsRUFBUztJQUNkLE1BQU1FLElBQUEsR0FBTztJQUNiLElBQUksQ0FBQ0EsSUFBQSxDQUFLQyxlQUFBLElBQW1CRCxJQUFBLENBQUs1QyxTQUFBLEVBQVcsT0FBTzRDLElBQUE7SUFDcEQsSUFBSSxDQUFDQSxJQUFBLENBQUthLGtCQUFBLEVBQW9CLE9BQU9iLElBQUE7SUFDckMsTUFBTWUsS0FBQSxHQUFRZixJQUFBLENBQUthLGtCQUFBLENBQW1CdE0sT0FBQSxDQUFRdUwsT0FBTztJQUNyRCxJQUFJaUIsS0FBQSxJQUFTLEdBQUc7TUFDZGYsSUFBQSxDQUFLYSxrQkFBQSxDQUFtQmxCLE1BQUEsQ0FBT29CLEtBQUEsRUFBTyxDQUFDO0lBQ3pDO0lBQ0EsT0FBT2YsSUFBQTtFQUNUO0VBQ0FNLElBQUlULE9BQUEsRUFBUUMsT0FBQSxFQUFTO0lBQ25CLE1BQU1FLElBQUEsR0FBTztJQUNiLElBQUksQ0FBQ0EsSUFBQSxDQUFLQyxlQUFBLElBQW1CRCxJQUFBLENBQUs1QyxTQUFBLEVBQVcsT0FBTzRDLElBQUE7SUFDcEQsSUFBSSxDQUFDQSxJQUFBLENBQUtDLGVBQUEsRUFBaUIsT0FBT0QsSUFBQTtJQUNsQ0gsT0FBQSxDQUFPcE4sS0FBQSxDQUFNLEdBQUcsRUFBRTlFLE9BQUEsQ0FBUXdTLEtBQUEsSUFBUztNQUNqQyxJQUFJLE9BQU9MLE9BQUEsS0FBWSxhQUFhO1FBQ2xDRSxJQUFBLENBQUtDLGVBQUEsQ0FBZ0JFLEtBQUssSUFBSSxFQUFDO01BQ2pDLFdBQVdILElBQUEsQ0FBS0MsZUFBQSxDQUFnQkUsS0FBSyxHQUFHO1FBQ3RDSCxJQUFBLENBQUtDLGVBQUEsQ0FBZ0JFLEtBQUssRUFBRXhTLE9BQUEsQ0FBUSxDQUFDcVQsWUFBQSxFQUFjRCxLQUFBLEtBQVU7VUFDM0QsSUFBSUMsWUFBQSxLQUFpQmxCLE9BQUEsSUFBV2tCLFlBQUEsQ0FBYVQsY0FBQSxJQUFrQlMsWUFBQSxDQUFhVCxjQUFBLEtBQW1CVCxPQUFBLEVBQVM7WUFDdEdFLElBQUEsQ0FBS0MsZUFBQSxDQUFnQkUsS0FBSyxFQUFFUixNQUFBLENBQU9vQixLQUFBLEVBQU8sQ0FBQztVQUM3QztRQUNGLENBQUM7TUFDSDtJQUNGLENBQUM7SUFDRCxPQUFPZixJQUFBO0VBQ1Q7RUFDQWhELEtBQUEsRUFBTztJQUNMLE1BQU1nRCxJQUFBLEdBQU87SUFDYixJQUFJLENBQUNBLElBQUEsQ0FBS0MsZUFBQSxJQUFtQkQsSUFBQSxDQUFLNUMsU0FBQSxFQUFXLE9BQU80QyxJQUFBO0lBQ3BELElBQUksQ0FBQ0EsSUFBQSxDQUFLQyxlQUFBLEVBQWlCLE9BQU9ELElBQUE7SUFDbEMsSUFBSUgsT0FBQTtJQUNKLElBQUlvQixJQUFBO0lBQ0osSUFBSUMsT0FBQTtJQUNKLFNBQVNDLEtBQUEsR0FBUWxOLFNBQUEsQ0FBVXBHLE1BQUEsRUFBUTRTLElBQUEsR0FBTyxJQUFJN0ksS0FBQSxDQUFNdUosS0FBSyxHQUFHQyxLQUFBLEdBQVEsR0FBR0EsS0FBQSxHQUFRRCxLQUFBLEVBQU9DLEtBQUEsSUFBUztNQUM3RlgsSUFBQSxDQUFLVyxLQUFLLElBQUluTixTQUFBLENBQVVtTixLQUFLO0lBQy9CO0lBQ0EsSUFBSSxPQUFPWCxJQUFBLENBQUssQ0FBQyxNQUFNLFlBQVk3SSxLQUFBLENBQU1DLE9BQUEsQ0FBUTRJLElBQUEsQ0FBSyxDQUFDLENBQUMsR0FBRztNQUN6RFosT0FBQSxHQUFTWSxJQUFBLENBQUssQ0FBQztNQUNmUSxJQUFBLEdBQU9SLElBQUEsQ0FBSy9NLEtBQUEsQ0FBTSxHQUFHK00sSUFBQSxDQUFLNVMsTUFBTTtNQUNoQ3FULE9BQUEsR0FBVWxCLElBQUE7SUFDWixPQUFPO01BQ0xILE9BQUEsR0FBU1ksSUFBQSxDQUFLLENBQUMsRUFBRVksTUFBQTtNQUNqQkosSUFBQSxHQUFPUixJQUFBLENBQUssQ0FBQyxFQUFFUSxJQUFBO01BQ2ZDLE9BQUEsR0FBVVQsSUFBQSxDQUFLLENBQUMsRUFBRVMsT0FBQSxJQUFXbEIsSUFBQTtJQUMvQjtJQUNBaUIsSUFBQSxDQUFLSyxPQUFBLENBQVFKLE9BQU87SUFDcEIsTUFBTUssV0FBQSxHQUFjM0osS0FBQSxDQUFNQyxPQUFBLENBQVFnSSxPQUFNLElBQUlBLE9BQUEsR0FBU0EsT0FBQSxDQUFPcE4sS0FBQSxDQUFNLEdBQUc7SUFDckU4TyxXQUFBLENBQVk1VCxPQUFBLENBQVF3UyxLQUFBLElBQVM7TUFDM0IsSUFBSUgsSUFBQSxDQUFLYSxrQkFBQSxJQUFzQmIsSUFBQSxDQUFLYSxrQkFBQSxDQUFtQmhULE1BQUEsRUFBUTtRQUM3RG1TLElBQUEsQ0FBS2Esa0JBQUEsQ0FBbUJsVCxPQUFBLENBQVFxVCxZQUFBLElBQWdCO1VBQzlDQSxZQUFBLENBQWFMLEtBQUEsQ0FBTU8sT0FBQSxFQUFTLENBQUNmLEtBQUEsRUFBTyxHQUFHYyxJQUFJLENBQUM7UUFDOUMsQ0FBQztNQUNIO01BQ0EsSUFBSWpCLElBQUEsQ0FBS0MsZUFBQSxJQUFtQkQsSUFBQSxDQUFLQyxlQUFBLENBQWdCRSxLQUFLLEdBQUc7UUFDdkRILElBQUEsQ0FBS0MsZUFBQSxDQUFnQkUsS0FBSyxFQUFFeFMsT0FBQSxDQUFRcVQsWUFBQSxJQUFnQjtVQUNsREEsWUFBQSxDQUFhTCxLQUFBLENBQU1PLE9BQUEsRUFBU0QsSUFBSTtRQUNsQyxDQUFDO01BQ0g7SUFDRixDQUFDO0lBQ0QsT0FBT2pCLElBQUE7RUFDVDtBQUNGO0FBRUEsU0FBU3dCLFdBQUEsRUFBYTtFQUNwQixNQUFNbk0sTUFBQSxHQUFTO0VBQ2YsSUFBSThGLEtBQUE7RUFDSixJQUFJRSxNQUFBO0VBQ0osTUFBTXhKLEVBQUEsR0FBS3dELE1BQUEsQ0FBT3hELEVBQUE7RUFDbEIsSUFBSSxPQUFPd0QsTUFBQSxDQUFPUSxNQUFBLENBQU9zRixLQUFBLEtBQVUsZUFBZTlGLE1BQUEsQ0FBT1EsTUFBQSxDQUFPc0YsS0FBQSxLQUFVLE1BQU07SUFDOUVBLEtBQUEsR0FBUTlGLE1BQUEsQ0FBT1EsTUFBQSxDQUFPc0YsS0FBQTtFQUN4QixPQUFPO0lBQ0xBLEtBQUEsR0FBUXRKLEVBQUEsQ0FBRzRQLFdBQUE7RUFDYjtFQUNBLElBQUksT0FBT3BNLE1BQUEsQ0FBT1EsTUFBQSxDQUFPd0YsTUFBQSxLQUFXLGVBQWVoRyxNQUFBLENBQU9RLE1BQUEsQ0FBT3dGLE1BQUEsS0FBVyxNQUFNO0lBQ2hGQSxNQUFBLEdBQVNoRyxNQUFBLENBQU9RLE1BQUEsQ0FBT3dGLE1BQUE7RUFDekIsT0FBTztJQUNMQSxNQUFBLEdBQVN4SixFQUFBLENBQUc2UCxZQUFBO0VBQ2Q7RUFDQSxJQUFJdkcsS0FBQSxLQUFVLEtBQUs5RixNQUFBLENBQU9zTSxZQUFBLENBQWEsS0FBS3RHLE1BQUEsS0FBVyxLQUFLaEcsTUFBQSxDQUFPdU0sVUFBQSxDQUFXLEdBQUc7SUFDL0U7RUFDRjtFQUdBekcsS0FBQSxHQUFRQSxLQUFBLEdBQVEwRyxRQUFBLENBQVMxSSxZQUFBLENBQWF0SCxFQUFBLEVBQUksY0FBYyxLQUFLLEdBQUcsRUFBRSxJQUFJZ1EsUUFBQSxDQUFTMUksWUFBQSxDQUFhdEgsRUFBQSxFQUFJLGVBQWUsS0FBSyxHQUFHLEVBQUU7RUFDekh3SixNQUFBLEdBQVNBLE1BQUEsR0FBU3dHLFFBQUEsQ0FBUzFJLFlBQUEsQ0FBYXRILEVBQUEsRUFBSSxhQUFhLEtBQUssR0FBRyxFQUFFLElBQUlnUSxRQUFBLENBQVMxSSxZQUFBLENBQWF0SCxFQUFBLEVBQUksZ0JBQWdCLEtBQUssR0FBRyxFQUFFO0VBQzNILElBQUk2SyxNQUFBLENBQU9vRixLQUFBLENBQU0zRyxLQUFLLEdBQUdBLEtBQUEsR0FBUTtFQUNqQyxJQUFJdUIsTUFBQSxDQUFPb0YsS0FBQSxDQUFNekcsTUFBTSxHQUFHQSxNQUFBLEdBQVM7RUFDbkMvTixNQUFBLENBQU95VSxNQUFBLENBQU8xTSxNQUFBLEVBQVE7SUFDcEI4RixLQUFBO0lBQ0FFLE1BQUE7SUFDQXRCLElBQUEsRUFBTTFFLE1BQUEsQ0FBT3NNLFlBQUEsQ0FBYSxJQUFJeEcsS0FBQSxHQUFRRTtFQUN4QyxDQUFDO0FBQ0g7QUFFQSxTQUFTMkcsYUFBQSxFQUFlO0VBQ3RCLE1BQU0zTSxNQUFBLEdBQVM7RUFDZixTQUFTNE0sa0JBQWtCQyxRQUFBLEVBQVU7SUFDbkMsSUFBSTdNLE1BQUEsQ0FBT3NNLFlBQUEsQ0FBYSxHQUFHO01BQ3pCLE9BQU9PLFFBQUE7SUFDVDtJQUVBLE9BQU87TUFDTCxTQUFTO01BQ1QsY0FBYztNQUNkLGtCQUFrQjtNQUNsQixlQUFlO01BQ2YsZ0JBQWdCO01BQ2hCLGdCQUFnQjtNQUNoQixpQkFBaUI7TUFDakIsZUFBZTtJQUNqQixFQUFFQSxRQUFRO0VBQ1o7RUFDQSxTQUFTQywwQkFBMEJ2TyxJQUFBLEVBQU13TyxLQUFBLEVBQU87SUFDOUMsT0FBT2hQLFVBQUEsQ0FBV1EsSUFBQSxDQUFLcEQsZ0JBQUEsQ0FBaUJ5UixpQkFBQSxDQUFrQkcsS0FBSyxDQUFDLEtBQUssQ0FBQztFQUN4RTtFQUNBLE1BQU12TSxNQUFBLEdBQVNSLE1BQUEsQ0FBT1EsTUFBQTtFQUN0QixNQUFNO0lBQ0pFLFNBQUE7SUFDQXNNLFFBQUE7SUFDQXRJLElBQUEsRUFBTXVJLFVBQUE7SUFDTkMsWUFBQSxFQUFjQyxHQUFBO0lBQ2RDO0VBQ0YsSUFBSXBOLE1BQUE7RUFDSixNQUFNcU4sU0FBQSxHQUFZck4sTUFBQSxDQUFPc04sT0FBQSxJQUFXOU0sTUFBQSxDQUFPOE0sT0FBQSxDQUFRQyxPQUFBO0VBQ25ELE1BQU1DLG9CQUFBLEdBQXVCSCxTQUFBLEdBQVlyTixNQUFBLENBQU9zTixPQUFBLENBQVFHLE1BQUEsQ0FBT2pWLE1BQUEsR0FBU3dILE1BQUEsQ0FBT3lOLE1BQUEsQ0FBT2pWLE1BQUE7RUFDdEYsTUFBTWlWLE1BQUEsR0FBUzFMLGVBQUEsQ0FBZ0JpTCxRQUFBLEVBQVUsSUFBSWhOLE1BQUEsQ0FBT1EsTUFBQSxDQUFPa04sVUFBVSxnQkFBZ0I7RUFDckYsTUFBTUMsWUFBQSxHQUFlTixTQUFBLEdBQVlyTixNQUFBLENBQU9zTixPQUFBLENBQVFHLE1BQUEsQ0FBT2pWLE1BQUEsR0FBU2lWLE1BQUEsQ0FBT2pWLE1BQUE7RUFDdkUsSUFBSW9WLFFBQUEsR0FBVyxFQUFDO0VBQ2hCLE1BQU1DLFVBQUEsR0FBYSxFQUFDO0VBQ3BCLE1BQU1DLGVBQUEsR0FBa0IsRUFBQztFQUN6QixJQUFJQyxZQUFBLEdBQWV2TixNQUFBLENBQU93TixrQkFBQTtFQUMxQixJQUFJLE9BQU9ELFlBQUEsS0FBaUIsWUFBWTtJQUN0Q0EsWUFBQSxHQUFldk4sTUFBQSxDQUFPd04sa0JBQUEsQ0FBbUI1UCxJQUFBLENBQUs0QixNQUFNO0VBQ3REO0VBQ0EsSUFBSWlPLFdBQUEsR0FBY3pOLE1BQUEsQ0FBTzBOLGlCQUFBO0VBQ3pCLElBQUksT0FBT0QsV0FBQSxLQUFnQixZQUFZO0lBQ3JDQSxXQUFBLEdBQWN6TixNQUFBLENBQU8wTixpQkFBQSxDQUFrQjlQLElBQUEsQ0FBSzRCLE1BQU07RUFDcEQ7RUFDQSxNQUFNbU8sc0JBQUEsR0FBeUJuTyxNQUFBLENBQU80TixRQUFBLENBQVNwVixNQUFBO0VBQy9DLE1BQU00Vix3QkFBQSxHQUEyQnBPLE1BQUEsQ0FBTzZOLFVBQUEsQ0FBV3JWLE1BQUE7RUFDbkQsSUFBSTZWLFlBQUEsR0FBZTdOLE1BQUEsQ0FBTzZOLFlBQUE7RUFDMUIsSUFBSUMsYUFBQSxHQUFnQixDQUFDUCxZQUFBO0VBQ3JCLElBQUlRLGFBQUEsR0FBZ0I7RUFDcEIsSUFBSTdDLEtBQUEsR0FBUTtFQUNaLElBQUksT0FBT3VCLFVBQUEsS0FBZSxhQUFhO0lBQ3JDO0VBQ0Y7RUFDQSxJQUFJLE9BQU9vQixZQUFBLEtBQWlCLFlBQVlBLFlBQUEsQ0FBYW5QLE9BQUEsQ0FBUSxHQUFHLEtBQUssR0FBRztJQUN0RW1QLFlBQUEsR0FBZXRRLFVBQUEsQ0FBV3NRLFlBQUEsQ0FBYTlRLE9BQUEsQ0FBUSxLQUFLLEVBQUUsQ0FBQyxJQUFJLE1BQU0wUCxVQUFBO0VBQ25FLFdBQVcsT0FBT29CLFlBQUEsS0FBaUIsVUFBVTtJQUMzQ0EsWUFBQSxHQUFldFEsVUFBQSxDQUFXc1EsWUFBWTtFQUN4QztFQUNBck8sTUFBQSxDQUFPd08sV0FBQSxHQUFjLENBQUNILFlBQUE7RUFHdEJaLE1BQUEsQ0FBT25WLE9BQUEsQ0FBUXVKLE9BQUEsSUFBVztJQUN4QixJQUFJc0wsR0FBQSxFQUFLO01BQ1B0TCxPQUFBLENBQVFySSxLQUFBLENBQU1pVixVQUFBLEdBQWE7SUFDN0IsT0FBTztNQUNMNU0sT0FBQSxDQUFRckksS0FBQSxDQUFNa1YsV0FBQSxHQUFjO0lBQzlCO0lBQ0E3TSxPQUFBLENBQVFySSxLQUFBLENBQU1tVixZQUFBLEdBQWU7SUFDN0I5TSxPQUFBLENBQVFySSxLQUFBLENBQU1vVixTQUFBLEdBQVk7RUFDNUIsQ0FBQztFQUdELElBQUlwTyxNQUFBLENBQU9xTyxjQUFBLElBQWtCck8sTUFBQSxDQUFPc08sT0FBQSxFQUFTO0lBQzNDcFAsY0FBQSxDQUFlZ0IsU0FBQSxFQUFXLG1DQUFtQyxFQUFFO0lBQy9EaEIsY0FBQSxDQUFlZ0IsU0FBQSxFQUFXLGtDQUFrQyxFQUFFO0VBQ2hFO0VBQ0EsTUFBTXFPLFdBQUEsR0FBY3ZPLE1BQUEsQ0FBT3dPLElBQUEsSUFBUXhPLE1BQUEsQ0FBT3dPLElBQUEsQ0FBS0MsSUFBQSxHQUFPLEtBQUtqUCxNQUFBLENBQU9nUCxJQUFBO0VBQ2xFLElBQUlELFdBQUEsRUFBYTtJQUNmL08sTUFBQSxDQUFPZ1AsSUFBQSxDQUFLRSxVQUFBLENBQVd2QixZQUFZO0VBQ3JDO0VBR0EsSUFBSXdCLFNBQUE7RUFDSixNQUFNQyxvQkFBQSxHQUF1QjVPLE1BQUEsQ0FBTzZPLGFBQUEsS0FBa0IsVUFBVTdPLE1BQUEsQ0FBTzhPLFdBQUEsSUFBZXJYLE1BQUEsQ0FBT0ksSUFBQSxDQUFLbUksTUFBQSxDQUFPOE8sV0FBVyxFQUFFclEsTUFBQSxDQUFPMUcsR0FBQSxJQUFPO0lBQ2xJLE9BQU8sT0FBT2lJLE1BQUEsQ0FBTzhPLFdBQUEsQ0FBWS9XLEdBQUcsRUFBRThXLGFBQUEsS0FBa0I7RUFDMUQsQ0FBQyxFQUFFN1csTUFBQSxHQUFTO0VBQ1osU0FBU3NHLENBQUEsR0FBSSxHQUFHQSxDQUFBLEdBQUk2TyxZQUFBLEVBQWM3TyxDQUFBLElBQUssR0FBRztJQUN4Q3FRLFNBQUEsR0FBWTtJQUNaLElBQUlJLE1BQUE7SUFDSixJQUFJOUIsTUFBQSxDQUFPM08sQ0FBQyxHQUFHeVEsTUFBQSxHQUFROUIsTUFBQSxDQUFPM08sQ0FBQztJQUMvQixJQUFJaVEsV0FBQSxFQUFhO01BQ2YvTyxNQUFBLENBQU9nUCxJQUFBLENBQUtRLFdBQUEsQ0FBWTFRLENBQUEsRUFBR3lRLE1BQUEsRUFBTzVCLFlBQUEsRUFBY2YsaUJBQWlCO0lBQ25FO0lBQ0EsSUFBSWEsTUFBQSxDQUFPM08sQ0FBQyxLQUFLZ0YsWUFBQSxDQUFheUwsTUFBQSxFQUFPLFNBQVMsTUFBTSxRQUFRO0lBRTVELElBQUkvTyxNQUFBLENBQU82TyxhQUFBLEtBQWtCLFFBQVE7TUFDbkMsSUFBSUQsb0JBQUEsRUFBc0I7UUFDeEIzQixNQUFBLENBQU8zTyxDQUFDLEVBQUV0RixLQUFBLENBQU1vVCxpQkFBQSxDQUFrQixPQUFPLENBQUMsSUFBSTtNQUNoRDtNQUNBLE1BQU02QyxXQUFBLEdBQWN2VSxnQkFBQSxDQUFpQnFVLE1BQUs7TUFDMUMsTUFBTUcsZ0JBQUEsR0FBbUJILE1BQUEsQ0FBTS9WLEtBQUEsQ0FBTTBELFNBQUE7TUFDckMsTUFBTXlTLHNCQUFBLEdBQXlCSixNQUFBLENBQU0vVixLQUFBLENBQU0yRCxlQUFBO01BQzNDLElBQUl1UyxnQkFBQSxFQUFrQjtRQUNwQkgsTUFBQSxDQUFNL1YsS0FBQSxDQUFNMEQsU0FBQSxHQUFZO01BQzFCO01BQ0EsSUFBSXlTLHNCQUFBLEVBQXdCO1FBQzFCSixNQUFBLENBQU0vVixLQUFBLENBQU0yRCxlQUFBLEdBQWtCO01BQ2hDO01BQ0EsSUFBSXFELE1BQUEsQ0FBT29QLFlBQUEsRUFBYztRQUN2QlQsU0FBQSxHQUFZblAsTUFBQSxDQUFPc00sWUFBQSxDQUFhLElBQUk3SCxnQkFBQSxDQUFpQjhLLE1BQUEsRUFBTyxTQUFTLElBQUksSUFBSTlLLGdCQUFBLENBQWlCOEssTUFBQSxFQUFPLFVBQVUsSUFBSTtNQUNySCxPQUFPO1FBRUwsTUFBTXpKLEtBQUEsR0FBUWdILHlCQUFBLENBQTBCMkMsV0FBQSxFQUFhLE9BQU87UUFDNUQsTUFBTUksV0FBQSxHQUFjL0MseUJBQUEsQ0FBMEIyQyxXQUFBLEVBQWEsY0FBYztRQUN6RSxNQUFNSyxZQUFBLEdBQWVoRCx5QkFBQSxDQUEwQjJDLFdBQUEsRUFBYSxlQUFlO1FBQzNFLE1BQU1oQixVQUFBLEdBQWEzQix5QkFBQSxDQUEwQjJDLFdBQUEsRUFBYSxhQUFhO1FBQ3ZFLE1BQU1mLFdBQUEsR0FBYzVCLHlCQUFBLENBQTBCMkMsV0FBQSxFQUFhLGNBQWM7UUFDekUsTUFBTU0sU0FBQSxHQUFZTixXQUFBLENBQVl0VSxnQkFBQSxDQUFpQixZQUFZO1FBQzNELElBQUk0VSxTQUFBLElBQWFBLFNBQUEsS0FBYyxjQUFjO1VBQzNDWixTQUFBLEdBQVlySixLQUFBLEdBQVEySSxVQUFBLEdBQWFDLFdBQUE7UUFDbkMsT0FBTztVQUNMLE1BQU07WUFDSnRDLFdBQUE7WUFDQXhIO1VBQ0YsSUFBSTJLLE1BQUE7VUFDSkosU0FBQSxHQUFZckosS0FBQSxHQUFRK0osV0FBQSxHQUFjQyxZQUFBLEdBQWVyQixVQUFBLEdBQWFDLFdBQUEsSUFBZTlKLFdBQUEsR0FBY3dILFdBQUE7UUFDN0Y7TUFDRjtNQUNBLElBQUlzRCxnQkFBQSxFQUFrQjtRQUNwQkgsTUFBQSxDQUFNL1YsS0FBQSxDQUFNMEQsU0FBQSxHQUFZd1MsZ0JBQUE7TUFDMUI7TUFDQSxJQUFJQyxzQkFBQSxFQUF3QjtRQUMxQkosTUFBQSxDQUFNL1YsS0FBQSxDQUFNMkQsZUFBQSxHQUFrQndTLHNCQUFBO01BQ2hDO01BQ0EsSUFBSW5QLE1BQUEsQ0FBT29QLFlBQUEsRUFBY1QsU0FBQSxHQUFZaE8sSUFBQSxDQUFLNk8sS0FBQSxDQUFNYixTQUFTO0lBQzNELE9BQU87TUFDTEEsU0FBQSxJQUFhbEMsVUFBQSxJQUFjek0sTUFBQSxDQUFPNk8sYUFBQSxHQUFnQixLQUFLaEIsWUFBQSxJQUFnQjdOLE1BQUEsQ0FBTzZPLGFBQUE7TUFDOUUsSUFBSTdPLE1BQUEsQ0FBT29QLFlBQUEsRUFBY1QsU0FBQSxHQUFZaE8sSUFBQSxDQUFLNk8sS0FBQSxDQUFNYixTQUFTO01BQ3pELElBQUkxQixNQUFBLENBQU8zTyxDQUFDLEdBQUc7UUFDYjJPLE1BQUEsQ0FBTzNPLENBQUMsRUFBRXRGLEtBQUEsQ0FBTW9ULGlCQUFBLENBQWtCLE9BQU8sQ0FBQyxJQUFJLEdBQUd1QyxTQUFTO01BQzVEO0lBQ0Y7SUFDQSxJQUFJMUIsTUFBQSxDQUFPM08sQ0FBQyxHQUFHO01BQ2IyTyxNQUFBLENBQU8zTyxDQUFDLEVBQUVtUixlQUFBLEdBQWtCZCxTQUFBO0lBQzlCO0lBQ0FyQixlQUFBLENBQWdCckssSUFBQSxDQUFLMEwsU0FBUztJQUM5QixJQUFJM08sTUFBQSxDQUFPcU8sY0FBQSxFQUFnQjtNQUN6QlAsYUFBQSxHQUFnQkEsYUFBQSxHQUFnQmEsU0FBQSxHQUFZLElBQUlaLGFBQUEsR0FBZ0IsSUFBSUYsWUFBQTtNQUNwRSxJQUFJRSxhQUFBLEtBQWtCLEtBQUt6UCxDQUFBLEtBQU0sR0FBR3dQLGFBQUEsR0FBZ0JBLGFBQUEsR0FBZ0JyQixVQUFBLEdBQWEsSUFBSW9CLFlBQUE7TUFDckYsSUFBSXZQLENBQUEsS0FBTSxHQUFHd1AsYUFBQSxHQUFnQkEsYUFBQSxHQUFnQnJCLFVBQUEsR0FBYSxJQUFJb0IsWUFBQTtNQUM5RCxJQUFJbE4sSUFBQSxDQUFLK08sR0FBQSxDQUFJNUIsYUFBYSxJQUFJLElBQUksS0FBTUEsYUFBQSxHQUFnQjtNQUN4RCxJQUFJOU4sTUFBQSxDQUFPb1AsWUFBQSxFQUFjdEIsYUFBQSxHQUFnQm5OLElBQUEsQ0FBSzZPLEtBQUEsQ0FBTTFCLGFBQWE7TUFDakUsSUFBSTVDLEtBQUEsR0FBUWxMLE1BQUEsQ0FBTzJQLGNBQUEsS0FBbUIsR0FBR3ZDLFFBQUEsQ0FBU25LLElBQUEsQ0FBSzZLLGFBQWE7TUFDcEVULFVBQUEsQ0FBV3BLLElBQUEsQ0FBSzZLLGFBQWE7SUFDL0IsT0FBTztNQUNMLElBQUk5TixNQUFBLENBQU9vUCxZQUFBLEVBQWN0QixhQUFBLEdBQWdCbk4sSUFBQSxDQUFLNk8sS0FBQSxDQUFNMUIsYUFBYTtNQUNqRSxLQUFLNUMsS0FBQSxHQUFRdkssSUFBQSxDQUFLRSxHQUFBLENBQUlyQixNQUFBLENBQU9RLE1BQUEsQ0FBTzRQLGtCQUFBLEVBQW9CMUUsS0FBSyxLQUFLMUwsTUFBQSxDQUFPUSxNQUFBLENBQU8yUCxjQUFBLEtBQW1CLEdBQUd2QyxRQUFBLENBQVNuSyxJQUFBLENBQUs2SyxhQUFhO01BQ2pJVCxVQUFBLENBQVdwSyxJQUFBLENBQUs2SyxhQUFhO01BQzdCQSxhQUFBLEdBQWdCQSxhQUFBLEdBQWdCYSxTQUFBLEdBQVlkLFlBQUE7SUFDOUM7SUFDQXJPLE1BQUEsQ0FBT3dPLFdBQUEsSUFBZVcsU0FBQSxHQUFZZCxZQUFBO0lBQ2xDRSxhQUFBLEdBQWdCWSxTQUFBO0lBQ2hCekQsS0FBQSxJQUFTO0VBQ1g7RUFDQTFMLE1BQUEsQ0FBT3dPLFdBQUEsR0FBY3JOLElBQUEsQ0FBS0MsR0FBQSxDQUFJcEIsTUFBQSxDQUFPd08sV0FBQSxFQUFhdkIsVUFBVSxJQUFJZ0IsV0FBQTtFQUNoRSxJQUFJZCxHQUFBLElBQU9DLFFBQUEsS0FBYTVNLE1BQUEsQ0FBTzZQLE1BQUEsS0FBVyxXQUFXN1AsTUFBQSxDQUFPNlAsTUFBQSxLQUFXLGNBQWM7SUFDbkYzUCxTQUFBLENBQVVsSCxLQUFBLENBQU1zTSxLQUFBLEdBQVEsR0FBRzlGLE1BQUEsQ0FBT3dPLFdBQUEsR0FBY0gsWUFBWTtFQUM5RDtFQUNBLElBQUk3TixNQUFBLENBQU84UCxjQUFBLEVBQWdCO0lBQ3pCNVAsU0FBQSxDQUFVbEgsS0FBQSxDQUFNb1QsaUJBQUEsQ0FBa0IsT0FBTyxDQUFDLElBQUksR0FBRzVNLE1BQUEsQ0FBT3dPLFdBQUEsR0FBY0gsWUFBWTtFQUNwRjtFQUNBLElBQUlVLFdBQUEsRUFBYTtJQUNmL08sTUFBQSxDQUFPZ1AsSUFBQSxDQUFLdUIsaUJBQUEsQ0FBa0JwQixTQUFBLEVBQVd2QixRQUFBLEVBQVVoQixpQkFBaUI7RUFDdEU7RUFHQSxJQUFJLENBQUNwTSxNQUFBLENBQU9xTyxjQUFBLEVBQWdCO0lBQzFCLE1BQU0yQixhQUFBLEdBQWdCLEVBQUM7SUFDdkIsU0FBUzFSLENBQUEsR0FBSSxHQUFHQSxDQUFBLEdBQUk4TyxRQUFBLENBQVNwVixNQUFBLEVBQVFzRyxDQUFBLElBQUssR0FBRztNQUMzQyxJQUFJMlIsY0FBQSxHQUFpQjdDLFFBQUEsQ0FBUzlPLENBQUM7TUFDL0IsSUFBSTBCLE1BQUEsQ0FBT29QLFlBQUEsRUFBY2EsY0FBQSxHQUFpQnRQLElBQUEsQ0FBSzZPLEtBQUEsQ0FBTVMsY0FBYztNQUNuRSxJQUFJN0MsUUFBQSxDQUFTOU8sQ0FBQyxLQUFLa0IsTUFBQSxDQUFPd08sV0FBQSxHQUFjdkIsVUFBQSxFQUFZO1FBQ2xEdUQsYUFBQSxDQUFjL00sSUFBQSxDQUFLZ04sY0FBYztNQUNuQztJQUNGO0lBQ0E3QyxRQUFBLEdBQVc0QyxhQUFBO0lBQ1gsSUFBSXJQLElBQUEsQ0FBSzZPLEtBQUEsQ0FBTWhRLE1BQUEsQ0FBT3dPLFdBQUEsR0FBY3ZCLFVBQVUsSUFBSTlMLElBQUEsQ0FBSzZPLEtBQUEsQ0FBTXBDLFFBQUEsQ0FBU0EsUUFBQSxDQUFTcFYsTUFBQSxHQUFTLENBQUMsQ0FBQyxJQUFJLEdBQUc7TUFDL0ZvVixRQUFBLENBQVNuSyxJQUFBLENBQUt6RCxNQUFBLENBQU93TyxXQUFBLEdBQWN2QixVQUFVO0lBQy9DO0VBQ0Y7RUFDQSxJQUFJSSxTQUFBLElBQWE3TSxNQUFBLENBQU9rUSxJQUFBLEVBQU07SUFDNUIsTUFBTWhNLElBQUEsR0FBT29KLGVBQUEsQ0FBZ0IsQ0FBQyxJQUFJTyxZQUFBO0lBQ2xDLElBQUk3TixNQUFBLENBQU8yUCxjQUFBLEdBQWlCLEdBQUc7TUFDN0IsTUFBTVEsTUFBQSxHQUFTeFAsSUFBQSxDQUFLeVAsSUFBQSxFQUFNNVEsTUFBQSxDQUFPc04sT0FBQSxDQUFRdUQsWUFBQSxHQUFlN1EsTUFBQSxDQUFPc04sT0FBQSxDQUFRd0QsV0FBQSxJQUFldFEsTUFBQSxDQUFPMlAsY0FBYztNQUMzRyxNQUFNWSxTQUFBLEdBQVlyTSxJQUFBLEdBQU9sRSxNQUFBLENBQU8yUCxjQUFBO01BQ2hDLFNBQVNyUixDQUFBLEdBQUksR0FBR0EsQ0FBQSxHQUFJNlIsTUFBQSxFQUFRN1IsQ0FBQSxJQUFLLEdBQUc7UUFDbEM4TyxRQUFBLENBQVNuSyxJQUFBLENBQUttSyxRQUFBLENBQVNBLFFBQUEsQ0FBU3BWLE1BQUEsR0FBUyxDQUFDLElBQUl1WSxTQUFTO01BQ3pEO0lBQ0Y7SUFDQSxTQUFTalMsQ0FBQSxHQUFJLEdBQUdBLENBQUEsR0FBSWtCLE1BQUEsQ0FBT3NOLE9BQUEsQ0FBUXVELFlBQUEsR0FBZTdRLE1BQUEsQ0FBT3NOLE9BQUEsQ0FBUXdELFdBQUEsRUFBYWhTLENBQUEsSUFBSyxHQUFHO01BQ3BGLElBQUkwQixNQUFBLENBQU8yUCxjQUFBLEtBQW1CLEdBQUc7UUFDL0J2QyxRQUFBLENBQVNuSyxJQUFBLENBQUttSyxRQUFBLENBQVNBLFFBQUEsQ0FBU3BWLE1BQUEsR0FBUyxDQUFDLElBQUlrTSxJQUFJO01BQ3BEO01BQ0FtSixVQUFBLENBQVdwSyxJQUFBLENBQUtvSyxVQUFBLENBQVdBLFVBQUEsQ0FBV3JWLE1BQUEsR0FBUyxDQUFDLElBQUlrTSxJQUFJO01BQ3hEMUUsTUFBQSxDQUFPd08sV0FBQSxJQUFlOUosSUFBQTtJQUN4QjtFQUNGO0VBQ0EsSUFBSWtKLFFBQUEsQ0FBU3BWLE1BQUEsS0FBVyxHQUFHb1YsUUFBQSxHQUFXLENBQUMsQ0FBQztFQUN4QyxJQUFJUyxZQUFBLEtBQWlCLEdBQUc7SUFDdEIsTUFBTTlWLEdBQUEsR0FBTXlILE1BQUEsQ0FBT3NNLFlBQUEsQ0FBYSxLQUFLYSxHQUFBLEdBQU0sZUFBZVAsaUJBQUEsQ0FBa0IsYUFBYTtJQUN6RmEsTUFBQSxDQUFPeE8sTUFBQSxDQUFPLENBQUMrUixDQUFBLEVBQUdDLFVBQUEsS0FBZTtNQUMvQixJQUFJLENBQUN6USxNQUFBLENBQU9zTyxPQUFBLElBQVd0TyxNQUFBLENBQU9rUSxJQUFBLEVBQU0sT0FBTztNQUMzQyxJQUFJTyxVQUFBLEtBQWV4RCxNQUFBLENBQU9qVixNQUFBLEdBQVMsR0FBRztRQUNwQyxPQUFPO01BQ1Q7TUFDQSxPQUFPO0lBQ1QsQ0FBQyxFQUFFRixPQUFBLENBQVF1SixPQUFBLElBQVc7TUFDcEJBLE9BQUEsQ0FBUXJJLEtBQUEsQ0FBTWpCLEdBQUcsSUFBSSxHQUFHOFYsWUFBWTtJQUN0QyxDQUFDO0VBQ0g7RUFDQSxJQUFJN04sTUFBQSxDQUFPcU8sY0FBQSxJQUFrQnJPLE1BQUEsQ0FBTzBRLG9CQUFBLEVBQXNCO0lBQ3hELElBQUlDLGFBQUEsR0FBZ0I7SUFDcEJyRCxlQUFBLENBQWdCeFYsT0FBQSxDQUFROFksY0FBQSxJQUFrQjtNQUN4Q0QsYUFBQSxJQUFpQkMsY0FBQSxJQUFrQi9DLFlBQUEsSUFBZ0I7SUFDckQsQ0FBQztJQUNEOEMsYUFBQSxJQUFpQjlDLFlBQUE7SUFDakIsTUFBTWdELE9BQUEsR0FBVUYsYUFBQSxHQUFnQmxFLFVBQUE7SUFDaENXLFFBQUEsR0FBV0EsUUFBQSxDQUFTdlEsR0FBQSxDQUFJaVUsSUFBQSxJQUFRO01BQzlCLElBQUlBLElBQUEsSUFBUSxHQUFHLE9BQU8sQ0FBQ3ZELFlBQUE7TUFDdkIsSUFBSXVELElBQUEsR0FBT0QsT0FBQSxFQUFTLE9BQU9BLE9BQUEsR0FBVXBELFdBQUE7TUFDckMsT0FBT3FELElBQUE7SUFDVCxDQUFDO0VBQ0g7RUFDQSxJQUFJOVEsTUFBQSxDQUFPK1Esd0JBQUEsRUFBMEI7SUFDbkMsSUFBSUosYUFBQSxHQUFnQjtJQUNwQnJELGVBQUEsQ0FBZ0J4VixPQUFBLENBQVE4WSxjQUFBLElBQWtCO01BQ3hDRCxhQUFBLElBQWlCQyxjQUFBLElBQWtCL0MsWUFBQSxJQUFnQjtJQUNyRCxDQUFDO0lBQ0Q4QyxhQUFBLElBQWlCOUMsWUFBQTtJQUNqQixJQUFJOEMsYUFBQSxHQUFnQmxFLFVBQUEsRUFBWTtNQUM5QixNQUFNdUUsZUFBQSxJQUFtQnZFLFVBQUEsR0FBYWtFLGFBQUEsSUFBaUI7TUFDdkR2RCxRQUFBLENBQVN0VixPQUFBLENBQVEsQ0FBQ2daLElBQUEsRUFBTUcsU0FBQSxLQUFjO1FBQ3BDN0QsUUFBQSxDQUFTNkQsU0FBUyxJQUFJSCxJQUFBLEdBQU9FLGVBQUE7TUFDL0IsQ0FBQztNQUNEM0QsVUFBQSxDQUFXdlYsT0FBQSxDQUFRLENBQUNnWixJQUFBLEVBQU1HLFNBQUEsS0FBYztRQUN0QzVELFVBQUEsQ0FBVzRELFNBQVMsSUFBSUgsSUFBQSxHQUFPRSxlQUFBO01BQ2pDLENBQUM7SUFDSDtFQUNGO0VBQ0F2WixNQUFBLENBQU95VSxNQUFBLENBQU8xTSxNQUFBLEVBQVE7SUFDcEJ5TixNQUFBO0lBQ0FHLFFBQUE7SUFDQUMsVUFBQTtJQUNBQztFQUNGLENBQUM7RUFDRCxJQUFJdE4sTUFBQSxDQUFPcU8sY0FBQSxJQUFrQnJPLE1BQUEsQ0FBT3NPLE9BQUEsSUFBVyxDQUFDdE8sTUFBQSxDQUFPMFEsb0JBQUEsRUFBc0I7SUFDM0V4UixjQUFBLENBQWVnQixTQUFBLEVBQVcsbUNBQW1DLEdBQUcsQ0FBQ2tOLFFBQUEsQ0FBUyxDQUFDLENBQUMsSUFBSTtJQUNoRmxPLGNBQUEsQ0FBZWdCLFNBQUEsRUFBVyxrQ0FBa0MsR0FBR1YsTUFBQSxDQUFPMEUsSUFBQSxHQUFPLElBQUlvSixlQUFBLENBQWdCQSxlQUFBLENBQWdCdFYsTUFBQSxHQUFTLENBQUMsSUFBSSxDQUFDLElBQUk7SUFDcEksTUFBTWtaLGFBQUEsR0FBZ0IsQ0FBQzFSLE1BQUEsQ0FBTzROLFFBQUEsQ0FBUyxDQUFDO0lBQ3hDLE1BQU0rRCxlQUFBLEdBQWtCLENBQUMzUixNQUFBLENBQU82TixVQUFBLENBQVcsQ0FBQztJQUM1QzdOLE1BQUEsQ0FBTzROLFFBQUEsR0FBVzVOLE1BQUEsQ0FBTzROLFFBQUEsQ0FBU3ZRLEdBQUEsQ0FBSXVVLENBQUEsSUFBS0EsQ0FBQSxHQUFJRixhQUFhO0lBQzVEMVIsTUFBQSxDQUFPNk4sVUFBQSxHQUFhN04sTUFBQSxDQUFPNk4sVUFBQSxDQUFXeFEsR0FBQSxDQUFJdVUsQ0FBQSxJQUFLQSxDQUFBLEdBQUlELGVBQWU7RUFDcEU7RUFDQSxJQUFJaEUsWUFBQSxLQUFpQkgsb0JBQUEsRUFBc0I7SUFDekN4TixNQUFBLENBQU8ySCxJQUFBLENBQUssb0JBQW9CO0VBQ2xDO0VBQ0EsSUFBSWlHLFFBQUEsQ0FBU3BWLE1BQUEsS0FBVzJWLHNCQUFBLEVBQXdCO0lBQzlDLElBQUluTyxNQUFBLENBQU9RLE1BQUEsQ0FBT3FSLGFBQUEsRUFBZTdSLE1BQUEsQ0FBTzhSLGFBQUEsQ0FBYztJQUN0RDlSLE1BQUEsQ0FBTzJILElBQUEsQ0FBSyxzQkFBc0I7RUFDcEM7RUFDQSxJQUFJa0csVUFBQSxDQUFXclYsTUFBQSxLQUFXNFYsd0JBQUEsRUFBMEI7SUFDbERwTyxNQUFBLENBQU8ySCxJQUFBLENBQUssd0JBQXdCO0VBQ3RDO0VBQ0EsSUFBSW5ILE1BQUEsQ0FBT3VSLG1CQUFBLEVBQXFCO0lBQzlCL1IsTUFBQSxDQUFPZ1Msa0JBQUEsQ0FBbUI7RUFDNUI7RUFDQSxJQUFJLENBQUMzRSxTQUFBLElBQWEsQ0FBQzdNLE1BQUEsQ0FBT3NPLE9BQUEsS0FBWXRPLE1BQUEsQ0FBTzZQLE1BQUEsS0FBVyxXQUFXN1AsTUFBQSxDQUFPNlAsTUFBQSxLQUFXLFNBQVM7SUFDNUYsTUFBTTRCLG1CQUFBLEdBQXNCLEdBQUd6UixNQUFBLENBQU8wUixzQkFBc0I7SUFDNUQsTUFBTUMsMEJBQUEsR0FBNkJuUyxNQUFBLENBQU94RCxFQUFBLENBQUc2RixTQUFBLENBQVUrUCxRQUFBLENBQVNILG1CQUFtQjtJQUNuRixJQUFJdEUsWUFBQSxJQUFnQm5OLE1BQUEsQ0FBTzZSLHVCQUFBLEVBQXlCO01BQ2xELElBQUksQ0FBQ0YsMEJBQUEsRUFBNEJuUyxNQUFBLENBQU94RCxFQUFBLENBQUc2RixTQUFBLENBQVVDLEdBQUEsQ0FBSTJQLG1CQUFtQjtJQUM5RSxXQUFXRSwwQkFBQSxFQUE0QjtNQUNyQ25TLE1BQUEsQ0FBT3hELEVBQUEsQ0FBRzZGLFNBQUEsQ0FBVWlRLE1BQUEsQ0FBT0wsbUJBQW1CO0lBQ2hEO0VBQ0Y7QUFDRjtBQUVBLFNBQVNNLGlCQUFpQjlSLEtBQUEsRUFBTztFQUMvQixNQUFNVCxNQUFBLEdBQVM7RUFDZixNQUFNd1MsWUFBQSxHQUFlLEVBQUM7RUFDdEIsTUFBTW5GLFNBQUEsR0FBWXJOLE1BQUEsQ0FBT3NOLE9BQUEsSUFBV3ROLE1BQUEsQ0FBT1EsTUFBQSxDQUFPOE0sT0FBQSxDQUFRQyxPQUFBO0VBQzFELElBQUlsRixTQUFBLEdBQVk7RUFDaEIsSUFBSXZKLENBQUE7RUFDSixJQUFJLE9BQU8yQixLQUFBLEtBQVUsVUFBVTtJQUM3QlQsTUFBQSxDQUFPeVMsYUFBQSxDQUFjaFMsS0FBSztFQUM1QixXQUFXQSxLQUFBLEtBQVUsTUFBTTtJQUN6QlQsTUFBQSxDQUFPeVMsYUFBQSxDQUFjelMsTUFBQSxDQUFPUSxNQUFBLENBQU9DLEtBQUs7RUFDMUM7RUFDQSxNQUFNaVMsZUFBQSxHQUFrQmhILEtBQUEsSUFBUztJQUMvQixJQUFJMkIsU0FBQSxFQUFXO01BQ2IsT0FBT3JOLE1BQUEsQ0FBT3lOLE1BQUEsQ0FBT3pOLE1BQUEsQ0FBTzJTLG1CQUFBLENBQW9CakgsS0FBSyxDQUFDO0lBQ3hEO0lBQ0EsT0FBTzFMLE1BQUEsQ0FBT3lOLE1BQUEsQ0FBTy9CLEtBQUs7RUFDNUI7RUFFQSxJQUFJMUwsTUFBQSxDQUFPUSxNQUFBLENBQU82TyxhQUFBLEtBQWtCLFVBQVVyUCxNQUFBLENBQU9RLE1BQUEsQ0FBTzZPLGFBQUEsR0FBZ0IsR0FBRztJQUM3RSxJQUFJclAsTUFBQSxDQUFPUSxNQUFBLENBQU9xTyxjQUFBLEVBQWdCO01BQ2hDLENBQUM3TyxNQUFBLENBQU80UyxhQUFBLElBQWlCLEVBQUMsRUFBR3RhLE9BQUEsQ0FBUWlYLE1BQUEsSUFBUztRQUM1Q2lELFlBQUEsQ0FBYS9PLElBQUEsQ0FBSzhMLE1BQUs7TUFDekIsQ0FBQztJQUNILE9BQU87TUFDTCxLQUFLelEsQ0FBQSxHQUFJLEdBQUdBLENBQUEsR0FBSXFDLElBQUEsQ0FBS3lQLElBQUEsQ0FBSzVRLE1BQUEsQ0FBT1EsTUFBQSxDQUFPNk8sYUFBYSxHQUFHdlEsQ0FBQSxJQUFLLEdBQUc7UUFDOUQsTUFBTTRNLEtBQUEsR0FBUTFMLE1BQUEsQ0FBTzZTLFdBQUEsR0FBYy9ULENBQUE7UUFDbkMsSUFBSTRNLEtBQUEsR0FBUTFMLE1BQUEsQ0FBT3lOLE1BQUEsQ0FBT2pWLE1BQUEsSUFBVSxDQUFDNlUsU0FBQSxFQUFXO1FBQ2hEbUYsWUFBQSxDQUFhL08sSUFBQSxDQUFLaVAsZUFBQSxDQUFnQmhILEtBQUssQ0FBQztNQUMxQztJQUNGO0VBQ0YsT0FBTztJQUNMOEcsWUFBQSxDQUFhL08sSUFBQSxDQUFLaVAsZUFBQSxDQUFnQjFTLE1BQUEsQ0FBTzZTLFdBQVcsQ0FBQztFQUN2RDtFQUdBLEtBQUsvVCxDQUFBLEdBQUksR0FBR0EsQ0FBQSxHQUFJMFQsWUFBQSxDQUFhaGEsTUFBQSxFQUFRc0csQ0FBQSxJQUFLLEdBQUc7SUFDM0MsSUFBSSxPQUFPMFQsWUFBQSxDQUFhMVQsQ0FBQyxNQUFNLGFBQWE7TUFDMUMsTUFBTWtILE1BQUEsR0FBU3dNLFlBQUEsQ0FBYTFULENBQUMsRUFBRWdVLFlBQUE7TUFDL0J6SyxTQUFBLEdBQVlyQyxNQUFBLEdBQVNxQyxTQUFBLEdBQVlyQyxNQUFBLEdBQVNxQyxTQUFBO0lBQzVDO0VBQ0Y7RUFHQSxJQUFJQSxTQUFBLElBQWFBLFNBQUEsS0FBYyxHQUFHckksTUFBQSxDQUFPVSxTQUFBLENBQVVsSCxLQUFBLENBQU13TSxNQUFBLEdBQVMsR0FBR3FDLFNBQVM7QUFDaEY7QUFFQSxTQUFTMkosbUJBQUEsRUFBcUI7RUFDNUIsTUFBTWhTLE1BQUEsR0FBUztFQUNmLE1BQU15TixNQUFBLEdBQVN6TixNQUFBLENBQU95TixNQUFBO0VBRXRCLE1BQU1zRixXQUFBLEdBQWMvUyxNQUFBLENBQU9nVCxTQUFBLEdBQVloVCxNQUFBLENBQU9zTSxZQUFBLENBQWEsSUFBSXRNLE1BQUEsQ0FBT1UsU0FBQSxDQUFVdVMsVUFBQSxHQUFhalQsTUFBQSxDQUFPVSxTQUFBLENBQVV3UyxTQUFBLEdBQVk7RUFDMUgsU0FBU3BVLENBQUEsR0FBSSxHQUFHQSxDQUFBLEdBQUkyTyxNQUFBLENBQU9qVixNQUFBLEVBQVFzRyxDQUFBLElBQUssR0FBRztJQUN6QzJPLE1BQUEsQ0FBTzNPLENBQUMsRUFBRXFVLGlCQUFBLElBQXFCblQsTUFBQSxDQUFPc00sWUFBQSxDQUFhLElBQUltQixNQUFBLENBQU8zTyxDQUFDLEVBQUVtVSxVQUFBLEdBQWF4RixNQUFBLENBQU8zTyxDQUFDLEVBQUVvVSxTQUFBLElBQWFILFdBQUEsR0FBYy9TLE1BQUEsQ0FBT29ULHFCQUFBLENBQXNCO0VBQ2xKO0FBQ0Y7QUFFQSxTQUFTQyxxQkFBcUJDLFVBQUEsRUFBVztFQUN2QyxJQUFJQSxVQUFBLEtBQWMsUUFBUTtJQUN4QkEsVUFBQSxHQUFZLFFBQVEsS0FBS2xULFNBQUEsSUFBYTtFQUN4QztFQUNBLE1BQU1KLE1BQUEsR0FBUztFQUNmLE1BQU1RLE1BQUEsR0FBU1IsTUFBQSxDQUFPUSxNQUFBO0VBQ3RCLE1BQU07SUFDSmlOLE1BQUE7SUFDQVAsWUFBQSxFQUFjQyxHQUFBO0lBQ2RTO0VBQ0YsSUFBSTVOLE1BQUE7RUFDSixJQUFJeU4sTUFBQSxDQUFPalYsTUFBQSxLQUFXLEdBQUc7RUFDekIsSUFBSSxPQUFPaVYsTUFBQSxDQUFPLENBQUMsRUFBRTBGLGlCQUFBLEtBQXNCLGFBQWFuVCxNQUFBLENBQU9nUyxrQkFBQSxDQUFtQjtFQUNsRixJQUFJdUIsWUFBQSxHQUFlLENBQUNELFVBQUE7RUFDcEIsSUFBSW5HLEdBQUEsRUFBS29HLFlBQUEsR0FBZUQsVUFBQTtFQUd4QjdGLE1BQUEsQ0FBT25WLE9BQUEsQ0FBUXVKLE9BQUEsSUFBVztJQUN4QkEsT0FBQSxDQUFRUSxTQUFBLENBQVVpUSxNQUFBLENBQU85UixNQUFBLENBQU9nVCxpQkFBaUI7RUFDbkQsQ0FBQztFQUNEeFQsTUFBQSxDQUFPeVQsb0JBQUEsR0FBdUIsRUFBQztFQUMvQnpULE1BQUEsQ0FBTzRTLGFBQUEsR0FBZ0IsRUFBQztFQUN4QixJQUFJdkUsWUFBQSxHQUFlN04sTUFBQSxDQUFPNk4sWUFBQTtFQUMxQixJQUFJLE9BQU9BLFlBQUEsS0FBaUIsWUFBWUEsWUFBQSxDQUFhblAsT0FBQSxDQUFRLEdBQUcsS0FBSyxHQUFHO0lBQ3RFbVAsWUFBQSxHQUFldFEsVUFBQSxDQUFXc1EsWUFBQSxDQUFhOVEsT0FBQSxDQUFRLEtBQUssRUFBRSxDQUFDLElBQUksTUFBTXlDLE1BQUEsQ0FBTzBFLElBQUE7RUFDMUUsV0FBVyxPQUFPMkosWUFBQSxLQUFpQixVQUFVO0lBQzNDQSxZQUFBLEdBQWV0USxVQUFBLENBQVdzUSxZQUFZO0VBQ3hDO0VBQ0EsU0FBU3ZQLENBQUEsR0FBSSxHQUFHQSxDQUFBLEdBQUkyTyxNQUFBLENBQU9qVixNQUFBLEVBQVFzRyxDQUFBLElBQUssR0FBRztJQUN6QyxNQUFNeVEsTUFBQSxHQUFROUIsTUFBQSxDQUFPM08sQ0FBQztJQUN0QixJQUFJNFUsV0FBQSxHQUFjbkUsTUFBQSxDQUFNNEQsaUJBQUE7SUFDeEIsSUFBSTNTLE1BQUEsQ0FBT3NPLE9BQUEsSUFBV3RPLE1BQUEsQ0FBT3FPLGNBQUEsRUFBZ0I7TUFDM0M2RSxXQUFBLElBQWVqRyxNQUFBLENBQU8sQ0FBQyxFQUFFMEYsaUJBQUE7SUFDM0I7SUFDQSxNQUFNUSxhQUFBLElBQWlCSixZQUFBLElBQWdCL1MsTUFBQSxDQUFPcU8sY0FBQSxHQUFpQjdPLE1BQUEsQ0FBTzRULFlBQUEsQ0FBYSxJQUFJLEtBQUtGLFdBQUEsS0FBZ0JuRSxNQUFBLENBQU1VLGVBQUEsR0FBa0I1QixZQUFBO0lBQ3BJLE1BQU13RixxQkFBQSxJQUF5Qk4sWUFBQSxHQUFlM0YsUUFBQSxDQUFTLENBQUMsS0FBS3BOLE1BQUEsQ0FBT3FPLGNBQUEsR0FBaUI3TyxNQUFBLENBQU80VCxZQUFBLENBQWEsSUFBSSxLQUFLRixXQUFBLEtBQWdCbkUsTUFBQSxDQUFNVSxlQUFBLEdBQWtCNUIsWUFBQTtJQUMxSixNQUFNeUYsV0FBQSxHQUFjLEVBQUVQLFlBQUEsR0FBZUcsV0FBQTtJQUNyQyxNQUFNSyxVQUFBLEdBQWFELFdBQUEsR0FBYzlULE1BQUEsQ0FBTzhOLGVBQUEsQ0FBZ0JoUCxDQUFDO0lBQ3pELE1BQU1rVixTQUFBLEdBQVlGLFdBQUEsSUFBZSxLQUFLQSxXQUFBLEdBQWM5VCxNQUFBLENBQU8wRSxJQUFBLEdBQU8sS0FBS3FQLFVBQUEsR0FBYSxLQUFLQSxVQUFBLElBQWMvVCxNQUFBLENBQU8wRSxJQUFBLElBQVFvUCxXQUFBLElBQWUsS0FBS0MsVUFBQSxJQUFjL1QsTUFBQSxDQUFPMEUsSUFBQTtJQUMvSixJQUFJc1AsU0FBQSxFQUFXO01BQ2JoVSxNQUFBLENBQU80UyxhQUFBLENBQWNuUCxJQUFBLENBQUs4TCxNQUFLO01BQy9CdlAsTUFBQSxDQUFPeVQsb0JBQUEsQ0FBcUJoUSxJQUFBLENBQUszRSxDQUFDO01BQ2xDMk8sTUFBQSxDQUFPM08sQ0FBQyxFQUFFdUQsU0FBQSxDQUFVQyxHQUFBLENBQUk5QixNQUFBLENBQU9nVCxpQkFBaUI7SUFDbEQ7SUFDQWpFLE1BQUEsQ0FBTXJPLFFBQUEsR0FBV2lNLEdBQUEsR0FBTSxDQUFDd0csYUFBQSxHQUFnQkEsYUFBQTtJQUN4Q3BFLE1BQUEsQ0FBTTBFLGdCQUFBLEdBQW1COUcsR0FBQSxHQUFNLENBQUMwRyxxQkFBQSxHQUF3QkEscUJBQUE7RUFDMUQ7QUFDRjtBQUVBLFNBQVNLLGVBQWVaLFVBQUEsRUFBVztFQUNqQyxNQUFNdFQsTUFBQSxHQUFTO0VBQ2YsSUFBSSxPQUFPc1QsVUFBQSxLQUFjLGFBQWE7SUFDcEMsTUFBTWEsVUFBQSxHQUFhblUsTUFBQSxDQUFPa04sWUFBQSxHQUFlLEtBQUs7SUFFOUNvRyxVQUFBLEdBQVl0VCxNQUFBLElBQVVBLE1BQUEsQ0FBT0ksU0FBQSxJQUFhSixNQUFBLENBQU9JLFNBQUEsR0FBWStULFVBQUEsSUFBYztFQUM3RTtFQUNBLE1BQU0zVCxNQUFBLEdBQVNSLE1BQUEsQ0FBT1EsTUFBQTtFQUN0QixNQUFNNFQsY0FBQSxHQUFpQnBVLE1BQUEsQ0FBT3FVLFlBQUEsQ0FBYSxJQUFJclUsTUFBQSxDQUFPNFQsWUFBQSxDQUFhO0VBQ25FLElBQUk7SUFDRjFTLFFBQUE7SUFDQW9ULFdBQUE7SUFDQUMsS0FBQTtJQUNBQztFQUNGLElBQUl4VSxNQUFBO0VBQ0osTUFBTXlVLFlBQUEsR0FBZUgsV0FBQTtFQUNyQixNQUFNSSxNQUFBLEdBQVNILEtBQUE7RUFDZixJQUFJSCxjQUFBLEtBQW1CLEdBQUc7SUFDeEJsVCxRQUFBLEdBQVc7SUFDWG9ULFdBQUEsR0FBYztJQUNkQyxLQUFBLEdBQVE7RUFDVixPQUFPO0lBQ0xyVCxRQUFBLElBQVlvUyxVQUFBLEdBQVl0VCxNQUFBLENBQU80VCxZQUFBLENBQWEsS0FBS1EsY0FBQTtJQUNqRCxNQUFNTyxrQkFBQSxHQUFxQnhULElBQUEsQ0FBSytPLEdBQUEsQ0FBSW9ELFVBQUEsR0FBWXRULE1BQUEsQ0FBTzRULFlBQUEsQ0FBYSxDQUFDLElBQUk7SUFDekUsTUFBTWdCLFlBQUEsR0FBZXpULElBQUEsQ0FBSytPLEdBQUEsQ0FBSW9ELFVBQUEsR0FBWXRULE1BQUEsQ0FBT3FVLFlBQUEsQ0FBYSxDQUFDLElBQUk7SUFDbkVDLFdBQUEsR0FBY0ssa0JBQUEsSUFBc0J6VCxRQUFBLElBQVk7SUFDaERxVCxLQUFBLEdBQVFLLFlBQUEsSUFBZ0IxVCxRQUFBLElBQVk7SUFDcEMsSUFBSXlULGtCQUFBLEVBQW9CelQsUUFBQSxHQUFXO0lBQ25DLElBQUkwVCxZQUFBLEVBQWMxVCxRQUFBLEdBQVc7RUFDL0I7RUFDQSxJQUFJVixNQUFBLENBQU9rUSxJQUFBLEVBQU07SUFDZixNQUFNbUUsZUFBQSxHQUFrQjdVLE1BQUEsQ0FBTzJTLG1CQUFBLENBQW9CLENBQUM7SUFDcEQsTUFBTW1DLGNBQUEsR0FBaUI5VSxNQUFBLENBQU8yUyxtQkFBQSxDQUFvQjNTLE1BQUEsQ0FBT3lOLE1BQUEsQ0FBT2pWLE1BQUEsR0FBUyxDQUFDO0lBQzFFLE1BQU11YyxtQkFBQSxHQUFzQi9VLE1BQUEsQ0FBTzZOLFVBQUEsQ0FBV2dILGVBQWU7SUFDN0QsTUFBTUcsa0JBQUEsR0FBcUJoVixNQUFBLENBQU82TixVQUFBLENBQVdpSCxjQUFjO0lBQzNELE1BQU1HLFlBQUEsR0FBZWpWLE1BQUEsQ0FBTzZOLFVBQUEsQ0FBVzdOLE1BQUEsQ0FBTzZOLFVBQUEsQ0FBV3JWLE1BQUEsR0FBUyxDQUFDO0lBQ25FLE1BQU0wYyxZQUFBLEdBQWUvVCxJQUFBLENBQUsrTyxHQUFBLENBQUlvRCxVQUFTO0lBQ3ZDLElBQUk0QixZQUFBLElBQWdCSCxtQkFBQSxFQUFxQjtNQUN2Q1AsWUFBQSxJQUFnQlUsWUFBQSxHQUFlSCxtQkFBQSxJQUF1QkUsWUFBQTtJQUN4RCxPQUFPO01BQ0xULFlBQUEsSUFBZ0JVLFlBQUEsR0FBZUQsWUFBQSxHQUFlRCxrQkFBQSxJQUFzQkMsWUFBQTtJQUN0RTtJQUNBLElBQUlULFlBQUEsR0FBZSxHQUFHQSxZQUFBLElBQWdCO0VBQ3hDO0VBQ0F2YyxNQUFBLENBQU95VSxNQUFBLENBQU8xTSxNQUFBLEVBQVE7SUFDcEJrQixRQUFBO0lBQ0FzVCxZQUFBO0lBQ0FGLFdBQUE7SUFDQUM7RUFDRixDQUFDO0VBQ0QsSUFBSS9ULE1BQUEsQ0FBT3VSLG1CQUFBLElBQXVCdlIsTUFBQSxDQUFPcU8sY0FBQSxJQUFrQnJPLE1BQUEsQ0FBTzJVLFVBQUEsRUFBWW5WLE1BQUEsQ0FBT3FULG9CQUFBLENBQXFCQyxVQUFTO0VBQ25ILElBQUlnQixXQUFBLElBQWUsQ0FBQ0csWUFBQSxFQUFjO0lBQ2hDelUsTUFBQSxDQUFPMkgsSUFBQSxDQUFLLHVCQUF1QjtFQUNyQztFQUNBLElBQUk0TSxLQUFBLElBQVMsQ0FBQ0csTUFBQSxFQUFRO0lBQ3BCMVUsTUFBQSxDQUFPMkgsSUFBQSxDQUFLLGlCQUFpQjtFQUMvQjtFQUNBLElBQUk4TSxZQUFBLElBQWdCLENBQUNILFdBQUEsSUFBZUksTUFBQSxJQUFVLENBQUNILEtBQUEsRUFBTztJQUNwRHZVLE1BQUEsQ0FBTzJILElBQUEsQ0FBSyxVQUFVO0VBQ3hCO0VBQ0EzSCxNQUFBLENBQU8ySCxJQUFBLENBQUssWUFBWXpHLFFBQVE7QUFDbEM7QUFFQSxTQUFTa1Usb0JBQUEsRUFBc0I7RUFDN0IsTUFBTXBWLE1BQUEsR0FBUztFQUNmLE1BQU07SUFDSnlOLE1BQUE7SUFDQWpOLE1BQUE7SUFDQXdNLFFBQUE7SUFDQTZGO0VBQ0YsSUFBSTdTLE1BQUE7RUFDSixNQUFNcU4sU0FBQSxHQUFZck4sTUFBQSxDQUFPc04sT0FBQSxJQUFXOU0sTUFBQSxDQUFPOE0sT0FBQSxDQUFRQyxPQUFBO0VBQ25ELE1BQU04SCxnQkFBQSxHQUFtQnBULFFBQUEsSUFBWTtJQUNuQyxPQUFPRixlQUFBLENBQWdCaUwsUUFBQSxFQUFVLElBQUl4TSxNQUFBLENBQU9rTixVQUFVLEdBQUd6TCxRQUFRLGlCQUFpQkEsUUFBUSxFQUFFLEVBQUUsQ0FBQztFQUNqRztFQUNBd0wsTUFBQSxDQUFPblYsT0FBQSxDQUFRdUosT0FBQSxJQUFXO0lBQ3hCQSxPQUFBLENBQVFRLFNBQUEsQ0FBVWlRLE1BQUEsQ0FBTzlSLE1BQUEsQ0FBTzhVLGdCQUFBLEVBQWtCOVUsTUFBQSxDQUFPK1UsY0FBQSxFQUFnQi9VLE1BQUEsQ0FBT2dWLGNBQWM7RUFDaEcsQ0FBQztFQUNELElBQUlDLFdBQUE7RUFDSixJQUFJcEksU0FBQSxFQUFXO0lBQ2IsSUFBSTdNLE1BQUEsQ0FBT2tRLElBQUEsRUFBTTtNQUNmLElBQUlPLFVBQUEsR0FBYTRCLFdBQUEsR0FBYzdTLE1BQUEsQ0FBT3NOLE9BQUEsQ0FBUXVELFlBQUE7TUFDOUMsSUFBSUksVUFBQSxHQUFhLEdBQUdBLFVBQUEsR0FBYWpSLE1BQUEsQ0FBT3NOLE9BQUEsQ0FBUUcsTUFBQSxDQUFPalYsTUFBQSxHQUFTeVksVUFBQTtNQUNoRSxJQUFJQSxVQUFBLElBQWNqUixNQUFBLENBQU9zTixPQUFBLENBQVFHLE1BQUEsQ0FBT2pWLE1BQUEsRUFBUXlZLFVBQUEsSUFBY2pSLE1BQUEsQ0FBT3NOLE9BQUEsQ0FBUUcsTUFBQSxDQUFPalYsTUFBQTtNQUNwRmlkLFdBQUEsR0FBY0osZ0JBQUEsQ0FBaUIsNkJBQTZCcEUsVUFBVSxJQUFJO0lBQzVFLE9BQU87TUFDTHdFLFdBQUEsR0FBY0osZ0JBQUEsQ0FBaUIsNkJBQTZCeEMsV0FBVyxJQUFJO0lBQzdFO0VBQ0YsT0FBTztJQUNMNEMsV0FBQSxHQUFjaEksTUFBQSxDQUFPb0YsV0FBVztFQUNsQztFQUNBLElBQUk0QyxXQUFBLEVBQWE7SUFFZkEsV0FBQSxDQUFZcFQsU0FBQSxDQUFVQyxHQUFBLENBQUk5QixNQUFBLENBQU84VSxnQkFBZ0I7SUFHakQsSUFBSUksU0FBQSxHQUFZaFMsY0FBQSxDQUFlK1IsV0FBQSxFQUFhLElBQUlqVixNQUFBLENBQU9rTixVQUFVLGdCQUFnQixFQUFFLENBQUM7SUFDcEYsSUFBSWxOLE1BQUEsQ0FBT2tRLElBQUEsSUFBUSxDQUFDZ0YsU0FBQSxFQUFXO01BQzdCQSxTQUFBLEdBQVlqSSxNQUFBLENBQU8sQ0FBQztJQUN0QjtJQUNBLElBQUlpSSxTQUFBLEVBQVc7TUFDYkEsU0FBQSxDQUFVclQsU0FBQSxDQUFVQyxHQUFBLENBQUk5QixNQUFBLENBQU8rVSxjQUFjO0lBQy9DO0lBRUEsSUFBSUksU0FBQSxHQUFZdFMsY0FBQSxDQUFlb1MsV0FBQSxFQUFhLElBQUlqVixNQUFBLENBQU9rTixVQUFVLGdCQUFnQixFQUFFLENBQUM7SUFDcEYsSUFBSWxOLE1BQUEsQ0FBT2tRLElBQUEsSUFBUSxDQUFDaUYsU0FBQSxLQUFjLEdBQUc7TUFDbkNBLFNBQUEsR0FBWWxJLE1BQUEsQ0FBT0EsTUFBQSxDQUFPalYsTUFBQSxHQUFTLENBQUM7SUFDdEM7SUFDQSxJQUFJbWQsU0FBQSxFQUFXO01BQ2JBLFNBQUEsQ0FBVXRULFNBQUEsQ0FBVUMsR0FBQSxDQUFJOUIsTUFBQSxDQUFPZ1YsY0FBYztJQUMvQztFQUNGO0VBQ0F4VixNQUFBLENBQU80VixpQkFBQSxDQUFrQjtBQUMzQjtBQUVBLElBQU1DLG9CQUFBLEdBQXVCQSxDQUFDN1YsTUFBQSxFQUFROFYsT0FBQSxLQUFZO0VBQ2hELElBQUksQ0FBQzlWLE1BQUEsSUFBVUEsTUFBQSxDQUFPK0gsU0FBQSxJQUFhLENBQUMvSCxNQUFBLENBQU9RLE1BQUEsRUFBUTtFQUNuRCxNQUFNdVYsYUFBQSxHQUFnQkEsQ0FBQSxLQUFNL1YsTUFBQSxDQUFPZ1QsU0FBQSxHQUFZLGlCQUFpQixJQUFJaFQsTUFBQSxDQUFPUSxNQUFBLENBQU9rTixVQUFVO0VBQzVGLE1BQU03TCxPQUFBLEdBQVVpVSxPQUFBLENBQVFFLE9BQUEsQ0FBUUQsYUFBQSxDQUFjLENBQUM7RUFDL0MsSUFBSWxVLE9BQUEsRUFBUztJQUNYLElBQUlvVSxNQUFBLEdBQVNwVSxPQUFBLENBQVE3SSxhQUFBLENBQWMsSUFBSWdILE1BQUEsQ0FBT1EsTUFBQSxDQUFPMFYsa0JBQWtCLEVBQUU7SUFDekUsSUFBSSxDQUFDRCxNQUFBLElBQVVqVyxNQUFBLENBQU9nVCxTQUFBLEVBQVc7TUFDL0IsSUFBSW5SLE9BQUEsQ0FBUUMsVUFBQSxFQUFZO1FBQ3RCbVUsTUFBQSxHQUFTcFUsT0FBQSxDQUFRQyxVQUFBLENBQVc5SSxhQUFBLENBQWMsSUFBSWdILE1BQUEsQ0FBT1EsTUFBQSxDQUFPMFYsa0JBQWtCLEVBQUU7TUFDbEYsT0FBTztRQUVMeGEscUJBQUEsQ0FBc0IsTUFBTTtVQUMxQixJQUFJbUcsT0FBQSxDQUFRQyxVQUFBLEVBQVk7WUFDdEJtVSxNQUFBLEdBQVNwVSxPQUFBLENBQVFDLFVBQUEsQ0FBVzlJLGFBQUEsQ0FBYyxJQUFJZ0gsTUFBQSxDQUFPUSxNQUFBLENBQU8wVixrQkFBa0IsRUFBRTtZQUNoRixJQUFJRCxNQUFBLEVBQVFBLE1BQUEsQ0FBTzNELE1BQUEsQ0FBTztVQUM1QjtRQUNGLENBQUM7TUFDSDtJQUNGO0lBQ0EsSUFBSTJELE1BQUEsRUFBUUEsTUFBQSxDQUFPM0QsTUFBQSxDQUFPO0VBQzVCO0FBQ0Y7QUFDQSxJQUFNNkQsTUFBQSxHQUFTQSxDQUFDblcsTUFBQSxFQUFRMEwsS0FBQSxLQUFVO0VBQ2hDLElBQUksQ0FBQzFMLE1BQUEsQ0FBT3lOLE1BQUEsQ0FBTy9CLEtBQUssR0FBRztFQUMzQixNQUFNb0ssT0FBQSxHQUFVOVYsTUFBQSxDQUFPeU4sTUFBQSxDQUFPL0IsS0FBSyxFQUFFMVMsYUFBQSxDQUFjLGtCQUFrQjtFQUNyRSxJQUFJOGMsT0FBQSxFQUFTQSxPQUFBLENBQVFNLGVBQUEsQ0FBZ0IsU0FBUztBQUNoRDtBQUNBLElBQU1DLE9BQUEsR0FBVXJXLE1BQUEsSUFBVTtFQUN4QixJQUFJLENBQUNBLE1BQUEsSUFBVUEsTUFBQSxDQUFPK0gsU0FBQSxJQUFhLENBQUMvSCxNQUFBLENBQU9RLE1BQUEsRUFBUTtFQUNuRCxJQUFJOFYsTUFBQSxHQUFTdFcsTUFBQSxDQUFPUSxNQUFBLENBQU8rVixtQkFBQTtFQUMzQixNQUFNblgsR0FBQSxHQUFNWSxNQUFBLENBQU95TixNQUFBLENBQU9qVixNQUFBO0VBQzFCLElBQUksQ0FBQzRHLEdBQUEsSUFBTyxDQUFDa1gsTUFBQSxJQUFVQSxNQUFBLEdBQVMsR0FBRztFQUNuQ0EsTUFBQSxHQUFTblYsSUFBQSxDQUFLRSxHQUFBLENBQUlpVixNQUFBLEVBQVFsWCxHQUFHO0VBQzdCLE1BQU1pUSxhQUFBLEdBQWdCclAsTUFBQSxDQUFPUSxNQUFBLENBQU82TyxhQUFBLEtBQWtCLFNBQVNyUCxNQUFBLENBQU93VyxvQkFBQSxDQUFxQixJQUFJclYsSUFBQSxDQUFLeVAsSUFBQSxDQUFLNVEsTUFBQSxDQUFPUSxNQUFBLENBQU82TyxhQUFhO0VBQ3BJLE1BQU13RCxXQUFBLEdBQWM3UyxNQUFBLENBQU82UyxXQUFBO0VBQzNCLElBQUk3UyxNQUFBLENBQU9RLE1BQUEsQ0FBT3dPLElBQUEsSUFBUWhQLE1BQUEsQ0FBT1EsTUFBQSxDQUFPd08sSUFBQSxDQUFLQyxJQUFBLEdBQU8sR0FBRztJQUNyRCxNQUFNd0gsWUFBQSxHQUFlNUQsV0FBQTtJQUNyQixNQUFNNkQsY0FBQSxHQUFpQixDQUFDRCxZQUFBLEdBQWVILE1BQU07SUFDN0NJLGNBQUEsQ0FBZWpULElBQUEsQ0FBSyxHQUFHbEIsS0FBQSxDQUFNb1UsSUFBQSxDQUFLO01BQ2hDbmUsTUFBQSxFQUFROGQ7SUFDVixDQUFDLEVBQUVqWixHQUFBLENBQUksQ0FBQzJULENBQUEsRUFBR2xTLENBQUEsS0FBTTtNQUNmLE9BQU8yWCxZQUFBLEdBQWVwSCxhQUFBLEdBQWdCdlEsQ0FBQTtJQUN4QyxDQUFDLENBQUM7SUFDRmtCLE1BQUEsQ0FBT3lOLE1BQUEsQ0FBT25WLE9BQUEsQ0FBUSxDQUFDdUosT0FBQSxFQUFTL0MsQ0FBQSxLQUFNO01BQ3BDLElBQUk0WCxjQUFBLENBQWV6UCxRQUFBLENBQVNwRixPQUFBLENBQVErVSxNQUFNLEdBQUdULE1BQUEsQ0FBT25XLE1BQUEsRUFBUWxCLENBQUM7SUFDL0QsQ0FBQztJQUNEO0VBQ0Y7RUFDQSxNQUFNK1gsb0JBQUEsR0FBdUJoRSxXQUFBLEdBQWN4RCxhQUFBLEdBQWdCO0VBQzNELElBQUlyUCxNQUFBLENBQU9RLE1BQUEsQ0FBT3NXLE1BQUEsSUFBVTlXLE1BQUEsQ0FBT1EsTUFBQSxDQUFPa1EsSUFBQSxFQUFNO0lBQzlDLFNBQVM1UixDQUFBLEdBQUkrVCxXQUFBLEdBQWN5RCxNQUFBLEVBQVF4WCxDQUFBLElBQUsrWCxvQkFBQSxHQUF1QlAsTUFBQSxFQUFReFgsQ0FBQSxJQUFLLEdBQUc7TUFDN0UsTUFBTWlZLFNBQUEsSUFBYWpZLENBQUEsR0FBSU0sR0FBQSxHQUFNQSxHQUFBLElBQU9BLEdBQUE7TUFDcEMsSUFBSTJYLFNBQUEsR0FBWWxFLFdBQUEsSUFBZWtFLFNBQUEsR0FBWUYsb0JBQUEsRUFBc0JWLE1BQUEsQ0FBT25XLE1BQUEsRUFBUStXLFNBQVM7SUFDM0Y7RUFDRixPQUFPO0lBQ0wsU0FBU2pZLENBQUEsR0FBSXFDLElBQUEsQ0FBS0MsR0FBQSxDQUFJeVIsV0FBQSxHQUFjeUQsTUFBQSxFQUFRLENBQUMsR0FBR3hYLENBQUEsSUFBS3FDLElBQUEsQ0FBS0UsR0FBQSxDQUFJd1Ysb0JBQUEsR0FBdUJQLE1BQUEsRUFBUWxYLEdBQUEsR0FBTSxDQUFDLEdBQUdOLENBQUEsSUFBSyxHQUFHO01BQzdHLElBQUlBLENBQUEsS0FBTStULFdBQUEsS0FBZ0IvVCxDQUFBLEdBQUkrWCxvQkFBQSxJQUF3Qi9YLENBQUEsR0FBSStULFdBQUEsR0FBYztRQUN0RXNELE1BQUEsQ0FBT25XLE1BQUEsRUFBUWxCLENBQUM7TUFDbEI7SUFDRjtFQUNGO0FBQ0Y7QUFFQSxTQUFTa1ksMEJBQTBCaFgsTUFBQSxFQUFRO0VBQ3pDLE1BQU07SUFDSjZOLFVBQUE7SUFDQXJOO0VBQ0YsSUFBSVIsTUFBQTtFQUNKLE1BQU1zVCxVQUFBLEdBQVl0VCxNQUFBLENBQU9rTixZQUFBLEdBQWVsTixNQUFBLENBQU9JLFNBQUEsR0FBWSxDQUFDSixNQUFBLENBQU9JLFNBQUE7RUFDbkUsSUFBSXlTLFdBQUE7RUFDSixTQUFTL1QsQ0FBQSxHQUFJLEdBQUdBLENBQUEsR0FBSStPLFVBQUEsQ0FBV3JWLE1BQUEsRUFBUXNHLENBQUEsSUFBSyxHQUFHO0lBQzdDLElBQUksT0FBTytPLFVBQUEsQ0FBVy9PLENBQUEsR0FBSSxDQUFDLE1BQU0sYUFBYTtNQUM1QyxJQUFJd1UsVUFBQSxJQUFhekYsVUFBQSxDQUFXL08sQ0FBQyxLQUFLd1UsVUFBQSxHQUFZekYsVUFBQSxDQUFXL08sQ0FBQSxHQUFJLENBQUMsS0FBSytPLFVBQUEsQ0FBVy9PLENBQUEsR0FBSSxDQUFDLElBQUkrTyxVQUFBLENBQVcvTyxDQUFDLEtBQUssR0FBRztRQUN6RytULFdBQUEsR0FBYy9ULENBQUE7TUFDaEIsV0FBV3dVLFVBQUEsSUFBYXpGLFVBQUEsQ0FBVy9PLENBQUMsS0FBS3dVLFVBQUEsR0FBWXpGLFVBQUEsQ0FBVy9PLENBQUEsR0FBSSxDQUFDLEdBQUc7UUFDdEUrVCxXQUFBLEdBQWMvVCxDQUFBLEdBQUk7TUFDcEI7SUFDRixXQUFXd1UsVUFBQSxJQUFhekYsVUFBQSxDQUFXL08sQ0FBQyxHQUFHO01BQ3JDK1QsV0FBQSxHQUFjL1QsQ0FBQTtJQUNoQjtFQUNGO0VBRUEsSUFBSTBCLE1BQUEsQ0FBT3lXLG1CQUFBLEVBQXFCO0lBQzlCLElBQUlwRSxXQUFBLEdBQWMsS0FBSyxPQUFPQSxXQUFBLEtBQWdCLGFBQWFBLFdBQUEsR0FBYztFQUMzRTtFQUNBLE9BQU9BLFdBQUE7QUFDVDtBQUNBLFNBQVNxRSxrQkFBa0JDLGNBQUEsRUFBZ0I7RUFDekMsTUFBTW5YLE1BQUEsR0FBUztFQUNmLE1BQU1zVCxVQUFBLEdBQVl0VCxNQUFBLENBQU9rTixZQUFBLEdBQWVsTixNQUFBLENBQU9JLFNBQUEsR0FBWSxDQUFDSixNQUFBLENBQU9JLFNBQUE7RUFDbkUsTUFBTTtJQUNKd04sUUFBQTtJQUNBcE4sTUFBQTtJQUNBcVMsV0FBQSxFQUFhdUUsYUFBQTtJQUNiTCxTQUFBLEVBQVdNLGlCQUFBO0lBQ1g1RixTQUFBLEVBQVc2RjtFQUNiLElBQUl0WCxNQUFBO0VBQ0osSUFBSTZTLFdBQUEsR0FBY3NFLGNBQUE7RUFDbEIsSUFBSTFGLFNBQUE7RUFDSixNQUFNOEYsbUJBQUEsR0FBc0JDLE1BQUEsSUFBVTtJQUNwQyxJQUFJQyxVQUFBLEdBQVlELE1BQUEsR0FBU3hYLE1BQUEsQ0FBT3NOLE9BQUEsQ0FBUXVELFlBQUE7SUFDeEMsSUFBSTRHLFVBQUEsR0FBWSxHQUFHO01BQ2pCQSxVQUFBLEdBQVl6WCxNQUFBLENBQU9zTixPQUFBLENBQVFHLE1BQUEsQ0FBT2pWLE1BQUEsR0FBU2lmLFVBQUE7SUFDN0M7SUFDQSxJQUFJQSxVQUFBLElBQWF6WCxNQUFBLENBQU9zTixPQUFBLENBQVFHLE1BQUEsQ0FBT2pWLE1BQUEsRUFBUTtNQUM3Q2lmLFVBQUEsSUFBYXpYLE1BQUEsQ0FBT3NOLE9BQUEsQ0FBUUcsTUFBQSxDQUFPalYsTUFBQTtJQUNyQztJQUNBLE9BQU9pZixVQUFBO0VBQ1Q7RUFDQSxJQUFJLE9BQU81RSxXQUFBLEtBQWdCLGFBQWE7SUFDdENBLFdBQUEsR0FBY21FLHlCQUFBLENBQTBCaFgsTUFBTTtFQUNoRDtFQUNBLElBQUk0TixRQUFBLENBQVMxTyxPQUFBLENBQVFvVSxVQUFTLEtBQUssR0FBRztJQUNwQzdCLFNBQUEsR0FBWTdELFFBQUEsQ0FBUzFPLE9BQUEsQ0FBUW9VLFVBQVM7RUFDeEMsT0FBTztJQUNMLE1BQU1vRSxJQUFBLEdBQU92VyxJQUFBLENBQUtFLEdBQUEsQ0FBSWIsTUFBQSxDQUFPNFAsa0JBQUEsRUFBb0J5QyxXQUFXO0lBQzVEcEIsU0FBQSxHQUFZaUcsSUFBQSxHQUFPdlcsSUFBQSxDQUFLNk8sS0FBQSxFQUFPNkMsV0FBQSxHQUFjNkUsSUFBQSxJQUFRbFgsTUFBQSxDQUFPMlAsY0FBYztFQUM1RTtFQUNBLElBQUlzQixTQUFBLElBQWE3RCxRQUFBLENBQVNwVixNQUFBLEVBQVFpWixTQUFBLEdBQVk3RCxRQUFBLENBQVNwVixNQUFBLEdBQVM7RUFDaEUsSUFBSXFhLFdBQUEsS0FBZ0J1RSxhQUFBLEVBQWU7SUFDakMsSUFBSTNGLFNBQUEsS0FBYzZGLGlCQUFBLEVBQW1CO01BQ25DdFgsTUFBQSxDQUFPeVIsU0FBQSxHQUFZQSxTQUFBO01BQ25CelIsTUFBQSxDQUFPMkgsSUFBQSxDQUFLLGlCQUFpQjtJQUMvQjtJQUNBLElBQUkzSCxNQUFBLENBQU9RLE1BQUEsQ0FBT2tRLElBQUEsSUFBUTFRLE1BQUEsQ0FBT3NOLE9BQUEsSUFBV3ROLE1BQUEsQ0FBT1EsTUFBQSxDQUFPOE0sT0FBQSxDQUFRQyxPQUFBLEVBQVM7TUFDekV2TixNQUFBLENBQU8rVyxTQUFBLEdBQVlRLG1CQUFBLENBQW9CMUUsV0FBVztJQUNwRDtJQUNBO0VBQ0Y7RUFFQSxJQUFJa0UsU0FBQTtFQUNKLElBQUkvVyxNQUFBLENBQU9zTixPQUFBLElBQVc5TSxNQUFBLENBQU84TSxPQUFBLENBQVFDLE9BQUEsSUFBVy9NLE1BQUEsQ0FBT2tRLElBQUEsRUFBTTtJQUMzRHFHLFNBQUEsR0FBWVEsbUJBQUEsQ0FBb0IxRSxXQUFXO0VBQzdDLFdBQVc3UyxNQUFBLENBQU95TixNQUFBLENBQU9vRixXQUFXLEdBQUc7SUFDckNrRSxTQUFBLEdBQVl2SyxRQUFBLENBQVN4TSxNQUFBLENBQU95TixNQUFBLENBQU9vRixXQUFXLEVBQUU4RSxZQUFBLENBQWEseUJBQXlCLEtBQUs5RSxXQUFBLEVBQWEsRUFBRTtFQUM1RyxPQUFPO0lBQ0xrRSxTQUFBLEdBQVlsRSxXQUFBO0VBQ2Q7RUFDQTVhLE1BQUEsQ0FBT3lVLE1BQUEsQ0FBTzFNLE1BQUEsRUFBUTtJQUNwQnNYLGlCQUFBO0lBQ0E3RixTQUFBO0lBQ0E0RixpQkFBQTtJQUNBTixTQUFBO0lBQ0FLLGFBQUE7SUFDQXZFO0VBQ0YsQ0FBQztFQUNELElBQUk3UyxNQUFBLENBQU9nSSxXQUFBLEVBQWE7SUFDdEJxTyxPQUFBLENBQVFyVyxNQUFNO0VBQ2hCO0VBQ0FBLE1BQUEsQ0FBTzJILElBQUEsQ0FBSyxtQkFBbUI7RUFDL0IzSCxNQUFBLENBQU8ySCxJQUFBLENBQUssaUJBQWlCO0VBQzdCLElBQUkzSCxNQUFBLENBQU9nSSxXQUFBLElBQWVoSSxNQUFBLENBQU9RLE1BQUEsQ0FBT29YLGtCQUFBLEVBQW9CO0lBQzFELElBQUlQLGlCQUFBLEtBQXNCTixTQUFBLEVBQVc7TUFDbkMvVyxNQUFBLENBQU8ySCxJQUFBLENBQUssaUJBQWlCO0lBQy9CO0lBQ0EzSCxNQUFBLENBQU8ySCxJQUFBLENBQUssYUFBYTtFQUMzQjtBQUNGO0FBRUEsU0FBU2tRLG1CQUFtQnJiLEVBQUEsRUFBSXNiLElBQUEsRUFBTTtFQUNwQyxNQUFNOVgsTUFBQSxHQUFTO0VBQ2YsTUFBTVEsTUFBQSxHQUFTUixNQUFBLENBQU9RLE1BQUE7RUFDdEIsSUFBSStPLE1BQUEsR0FBUS9TLEVBQUEsQ0FBR3daLE9BQUEsQ0FBUSxJQUFJeFYsTUFBQSxDQUFPa04sVUFBVSxnQkFBZ0I7RUFDNUQsSUFBSSxDQUFDNkIsTUFBQSxJQUFTdlAsTUFBQSxDQUFPZ1QsU0FBQSxJQUFhOEUsSUFBQSxJQUFRQSxJQUFBLENBQUt0ZixNQUFBLEdBQVMsS0FBS3NmLElBQUEsQ0FBSzdRLFFBQUEsQ0FBU3pLLEVBQUUsR0FBRztJQUM5RSxDQUFDLEdBQUdzYixJQUFBLENBQUt6WixLQUFBLENBQU15WixJQUFBLENBQUs1WSxPQUFBLENBQVExQyxFQUFFLElBQUksR0FBR3NiLElBQUEsQ0FBS3RmLE1BQU0sQ0FBQyxFQUFFRixPQUFBLENBQVF5ZixNQUFBLElBQVU7TUFDbkUsSUFBSSxDQUFDeEksTUFBQSxJQUFTd0ksTUFBQSxDQUFPN1YsT0FBQSxJQUFXNlYsTUFBQSxDQUFPN1YsT0FBQSxDQUFRLElBQUkxQixNQUFBLENBQU9rTixVQUFVLGdCQUFnQixHQUFHO1FBQ3JGNkIsTUFBQSxHQUFRd0ksTUFBQTtNQUNWO0lBQ0YsQ0FBQztFQUNIO0VBQ0EsSUFBSUMsVUFBQSxHQUFhO0VBQ2pCLElBQUkvRyxVQUFBO0VBQ0osSUFBSTFCLE1BQUEsRUFBTztJQUNULFNBQVN6USxDQUFBLEdBQUksR0FBR0EsQ0FBQSxHQUFJa0IsTUFBQSxDQUFPeU4sTUFBQSxDQUFPalYsTUFBQSxFQUFRc0csQ0FBQSxJQUFLLEdBQUc7TUFDaEQsSUFBSWtCLE1BQUEsQ0FBT3lOLE1BQUEsQ0FBTzNPLENBQUMsTUFBTXlRLE1BQUEsRUFBTztRQUM5QnlJLFVBQUEsR0FBYTtRQUNiL0csVUFBQSxHQUFhblMsQ0FBQTtRQUNiO01BQ0Y7SUFDRjtFQUNGO0VBQ0EsSUFBSXlRLE1BQUEsSUFBU3lJLFVBQUEsRUFBWTtJQUN2QmhZLE1BQUEsQ0FBT2lZLFlBQUEsR0FBZTFJLE1BQUE7SUFDdEIsSUFBSXZQLE1BQUEsQ0FBT3NOLE9BQUEsSUFBV3ROLE1BQUEsQ0FBT1EsTUFBQSxDQUFPOE0sT0FBQSxDQUFRQyxPQUFBLEVBQVM7TUFDbkR2TixNQUFBLENBQU9rWSxZQUFBLEdBQWUxTCxRQUFBLENBQVMrQyxNQUFBLENBQU1vSSxZQUFBLENBQWEseUJBQXlCLEdBQUcsRUFBRTtJQUNsRixPQUFPO01BQ0wzWCxNQUFBLENBQU9rWSxZQUFBLEdBQWVqSCxVQUFBO0lBQ3hCO0VBQ0YsT0FBTztJQUNMalIsTUFBQSxDQUFPaVksWUFBQSxHQUFlO0lBQ3RCalksTUFBQSxDQUFPa1ksWUFBQSxHQUFlO0lBQ3RCO0VBQ0Y7RUFDQSxJQUFJMVgsTUFBQSxDQUFPMlgsbUJBQUEsSUFBdUJuWSxNQUFBLENBQU9rWSxZQUFBLEtBQWlCLFVBQWFsWSxNQUFBLENBQU9rWSxZQUFBLEtBQWlCbFksTUFBQSxDQUFPNlMsV0FBQSxFQUFhO0lBQ2pIN1MsTUFBQSxDQUFPbVksbUJBQUEsQ0FBb0I7RUFDN0I7QUFDRjtBQUVBLElBQUlDLE1BQUEsR0FBUztFQUNYak0sVUFBQTtFQUNBUSxZQUFBO0VBQ0E0RixnQkFBQTtFQUNBUCxrQkFBQTtFQUNBcUIsb0JBQUE7RUFDQWEsY0FBQTtFQUNBa0IsbUJBQUE7RUFDQThCLGlCQUFBO0VBQ0FXO0FBQ0Y7QUFFQSxTQUFTUSxtQkFBbUJ6YixJQUFBLEVBQU07RUFDaEMsSUFBSUEsSUFBQSxLQUFTLFFBQVE7SUFDbkJBLElBQUEsR0FBTyxLQUFLMFAsWUFBQSxDQUFhLElBQUksTUFBTTtFQUNyQztFQUNBLE1BQU10TSxNQUFBLEdBQVM7RUFDZixNQUFNO0lBQ0pRLE1BQUE7SUFDQTBNLFlBQUEsRUFBY0MsR0FBQTtJQUNkL00sU0FBQSxFQUFBa1QsVUFBQTtJQUNBNVM7RUFDRixJQUFJVixNQUFBO0VBQ0osSUFBSVEsTUFBQSxDQUFPOFgsZ0JBQUEsRUFBa0I7SUFDM0IsT0FBT25MLEdBQUEsR0FBTSxDQUFDbUcsVUFBQSxHQUFZQSxVQUFBO0VBQzVCO0VBQ0EsSUFBSTlTLE1BQUEsQ0FBT3NPLE9BQUEsRUFBUztJQUNsQixPQUFPd0UsVUFBQTtFQUNUO0VBQ0EsSUFBSWlGLGdCQUFBLEdBQW1CNWIsWUFBQSxDQUFhK0QsU0FBQSxFQUFXOUQsSUFBSTtFQUNuRDJiLGdCQUFBLElBQW9CdlksTUFBQSxDQUFPb1QscUJBQUEsQ0FBc0I7RUFDakQsSUFBSWpHLEdBQUEsRUFBS29MLGdCQUFBLEdBQW1CLENBQUNBLGdCQUFBO0VBQzdCLE9BQU9BLGdCQUFBLElBQW9CO0FBQzdCO0FBRUEsU0FBU0MsYUFBYWxGLFVBQUEsRUFBV21GLFlBQUEsRUFBYztFQUM3QyxNQUFNelksTUFBQSxHQUFTO0VBQ2YsTUFBTTtJQUNKa04sWUFBQSxFQUFjQyxHQUFBO0lBQ2QzTSxNQUFBO0lBQ0FFLFNBQUE7SUFDQVE7RUFDRixJQUFJbEIsTUFBQTtFQUNKLElBQUkwWSxDQUFBLEdBQUk7RUFDUixJQUFJQyxDQUFBLEdBQUk7RUFDUixNQUFNQyxDQUFBLEdBQUk7RUFDVixJQUFJNVksTUFBQSxDQUFPc00sWUFBQSxDQUFhLEdBQUc7SUFDekJvTSxDQUFBLEdBQUl2TCxHQUFBLEdBQU0sQ0FBQ21HLFVBQUEsR0FBWUEsVUFBQTtFQUN6QixPQUFPO0lBQ0xxRixDQUFBLEdBQUlyRixVQUFBO0VBQ047RUFDQSxJQUFJOVMsTUFBQSxDQUFPb1AsWUFBQSxFQUFjO0lBQ3ZCOEksQ0FBQSxHQUFJdlgsSUFBQSxDQUFLNk8sS0FBQSxDQUFNMEksQ0FBQztJQUNoQkMsQ0FBQSxHQUFJeFgsSUFBQSxDQUFLNk8sS0FBQSxDQUFNMkksQ0FBQztFQUNsQjtFQUNBM1ksTUFBQSxDQUFPNlksaUJBQUEsR0FBb0I3WSxNQUFBLENBQU9JLFNBQUE7RUFDbENKLE1BQUEsQ0FBT0ksU0FBQSxHQUFZSixNQUFBLENBQU9zTSxZQUFBLENBQWEsSUFBSW9NLENBQUEsR0FBSUMsQ0FBQTtFQUMvQyxJQUFJblksTUFBQSxDQUFPc08sT0FBQSxFQUFTO0lBQ2xCcE8sU0FBQSxDQUFVVixNQUFBLENBQU9zTSxZQUFBLENBQWEsSUFBSSxlQUFlLFdBQVcsSUFBSXRNLE1BQUEsQ0FBT3NNLFlBQUEsQ0FBYSxJQUFJLENBQUNvTSxDQUFBLEdBQUksQ0FBQ0MsQ0FBQTtFQUNoRyxXQUFXLENBQUNuWSxNQUFBLENBQU84WCxnQkFBQSxFQUFrQjtJQUNuQyxJQUFJdFksTUFBQSxDQUFPc00sWUFBQSxDQUFhLEdBQUc7TUFDekJvTSxDQUFBLElBQUsxWSxNQUFBLENBQU9vVCxxQkFBQSxDQUFzQjtJQUNwQyxPQUFPO01BQ0x1RixDQUFBLElBQUszWSxNQUFBLENBQU9vVCxxQkFBQSxDQUFzQjtJQUNwQztJQUNBMVMsU0FBQSxDQUFVbEgsS0FBQSxDQUFNMEQsU0FBQSxHQUFZLGVBQWV3YixDQUFDLE9BQU9DLENBQUMsT0FBT0MsQ0FBQztFQUM5RDtFQUdBLElBQUlFLFdBQUE7RUFDSixNQUFNMUUsY0FBQSxHQUFpQnBVLE1BQUEsQ0FBT3FVLFlBQUEsQ0FBYSxJQUFJclUsTUFBQSxDQUFPNFQsWUFBQSxDQUFhO0VBQ25FLElBQUlRLGNBQUEsS0FBbUIsR0FBRztJQUN4QjBFLFdBQUEsR0FBYztFQUNoQixPQUFPO0lBQ0xBLFdBQUEsSUFBZXhGLFVBQUEsR0FBWXRULE1BQUEsQ0FBTzRULFlBQUEsQ0FBYSxLQUFLUSxjQUFBO0VBQ3REO0VBQ0EsSUFBSTBFLFdBQUEsS0FBZ0I1WCxRQUFBLEVBQVU7SUFDNUJsQixNQUFBLENBQU9rVSxjQUFBLENBQWVaLFVBQVM7RUFDakM7RUFDQXRULE1BQUEsQ0FBTzJILElBQUEsQ0FBSyxnQkFBZ0IzSCxNQUFBLENBQU9JLFNBQUEsRUFBV3FZLFlBQVk7QUFDNUQ7QUFFQSxTQUFTN0UsYUFBQSxFQUFlO0VBQ3RCLE9BQU8sQ0FBQyxLQUFLaEcsUUFBQSxDQUFTLENBQUM7QUFDekI7QUFFQSxTQUFTeUcsYUFBQSxFQUFlO0VBQ3RCLE9BQU8sQ0FBQyxLQUFLekcsUUFBQSxDQUFTLEtBQUtBLFFBQUEsQ0FBU3BWLE1BQUEsR0FBUyxDQUFDO0FBQ2hEO0FBRUEsU0FBU3VnQixZQUFZekYsVUFBQSxFQUFXN1MsS0FBQSxFQUFPdVksWUFBQSxFQUFjQyxlQUFBLEVBQWlCQyxRQUFBLEVBQVU7RUFDOUUsSUFBSTVGLFVBQUEsS0FBYyxRQUFRO0lBQ3hCQSxVQUFBLEdBQVk7RUFDZDtFQUNBLElBQUk3UyxLQUFBLEtBQVUsUUFBUTtJQUNwQkEsS0FBQSxHQUFRLEtBQUtELE1BQUEsQ0FBT0MsS0FBQTtFQUN0QjtFQUNBLElBQUl1WSxZQUFBLEtBQWlCLFFBQVE7SUFDM0JBLFlBQUEsR0FBZTtFQUNqQjtFQUNBLElBQUlDLGVBQUEsS0FBb0IsUUFBUTtJQUM5QkEsZUFBQSxHQUFrQjtFQUNwQjtFQUNBLE1BQU1qWixNQUFBLEdBQVM7RUFDZixNQUFNO0lBQ0pRLE1BQUE7SUFDQUU7RUFDRixJQUFJVixNQUFBO0VBQ0osSUFBSUEsTUFBQSxDQUFPbVosU0FBQSxJQUFhM1ksTUFBQSxDQUFPNFksOEJBQUEsRUFBZ0M7SUFDN0QsT0FBTztFQUNUO0VBQ0EsTUFBTUMsYUFBQSxHQUFlclosTUFBQSxDQUFPNFQsWUFBQSxDQUFhO0VBQ3pDLE1BQU0wRixhQUFBLEdBQWV0WixNQUFBLENBQU9xVSxZQUFBLENBQWE7RUFDekMsSUFBSWtGLFlBQUE7RUFDSixJQUFJTixlQUFBLElBQW1CM0YsVUFBQSxHQUFZK0YsYUFBQSxFQUFjRSxZQUFBLEdBQWVGLGFBQUEsVUFBc0JKLGVBQUEsSUFBbUIzRixVQUFBLEdBQVlnRyxhQUFBLEVBQWNDLFlBQUEsR0FBZUQsYUFBQSxNQUFrQkMsWUFBQSxHQUFlakcsVUFBQTtFQUduTHRULE1BQUEsQ0FBT2tVLGNBQUEsQ0FBZXFGLFlBQVk7RUFDbEMsSUFBSS9ZLE1BQUEsQ0FBT3NPLE9BQUEsRUFBUztJQUNsQixNQUFNMEssR0FBQSxHQUFNeFosTUFBQSxDQUFPc00sWUFBQSxDQUFhO0lBQ2hDLElBQUk3TCxLQUFBLEtBQVUsR0FBRztNQUNmQyxTQUFBLENBQVU4WSxHQUFBLEdBQU0sZUFBZSxXQUFXLElBQUksQ0FBQ0QsWUFBQTtJQUNqRCxPQUFPO01BQ0wsSUFBSSxDQUFDdlosTUFBQSxDQUFPNkUsT0FBQSxDQUFRRSxZQUFBLEVBQWM7UUFDaENqRixvQkFBQSxDQUFxQjtVQUNuQkUsTUFBQTtVQUNBQyxjQUFBLEVBQWdCLENBQUNzWixZQUFBO1VBQ2pCclosSUFBQSxFQUFNc1osR0FBQSxHQUFNLFNBQVM7UUFDdkIsQ0FBQztRQUNELE9BQU87TUFDVDtNQUNBOVksU0FBQSxDQUFVZ0IsUUFBQSxDQUFTO1FBQ2pCLENBQUM4WCxHQUFBLEdBQU0sU0FBUyxLQUFLLEdBQUcsQ0FBQ0QsWUFBQTtRQUN6QkUsUUFBQSxFQUFVO01BQ1osQ0FBQztJQUNIO0lBQ0EsT0FBTztFQUNUO0VBQ0EsSUFBSWhaLEtBQUEsS0FBVSxHQUFHO0lBQ2ZULE1BQUEsQ0FBT3lTLGFBQUEsQ0FBYyxDQUFDO0lBQ3RCelMsTUFBQSxDQUFPd1ksWUFBQSxDQUFhZSxZQUFZO0lBQ2hDLElBQUlQLFlBQUEsRUFBYztNQUNoQmhaLE1BQUEsQ0FBTzJILElBQUEsQ0FBSyx5QkFBeUJsSCxLQUFBLEVBQU95WSxRQUFRO01BQ3BEbFosTUFBQSxDQUFPMkgsSUFBQSxDQUFLLGVBQWU7SUFDN0I7RUFDRixPQUFPO0lBQ0wzSCxNQUFBLENBQU95UyxhQUFBLENBQWNoUyxLQUFLO0lBQzFCVCxNQUFBLENBQU93WSxZQUFBLENBQWFlLFlBQVk7SUFDaEMsSUFBSVAsWUFBQSxFQUFjO01BQ2hCaFosTUFBQSxDQUFPMkgsSUFBQSxDQUFLLHlCQUF5QmxILEtBQUEsRUFBT3lZLFFBQVE7TUFDcERsWixNQUFBLENBQU8ySCxJQUFBLENBQUssaUJBQWlCO0lBQy9CO0lBQ0EsSUFBSSxDQUFDM0gsTUFBQSxDQUFPbVosU0FBQSxFQUFXO01BQ3JCblosTUFBQSxDQUFPbVosU0FBQSxHQUFZO01BQ25CLElBQUksQ0FBQ25aLE1BQUEsQ0FBTzBaLGlDQUFBLEVBQW1DO1FBQzdDMVosTUFBQSxDQUFPMFosaUNBQUEsR0FBb0MsU0FBU0MsZUFBY3hkLENBQUEsRUFBRztVQUNuRSxJQUFJLENBQUM2RCxNQUFBLElBQVVBLE1BQUEsQ0FBTytILFNBQUEsRUFBVztVQUNqQyxJQUFJNUwsQ0FBQSxDQUFFaEUsTUFBQSxLQUFXLE1BQU07VUFDdkI2SCxNQUFBLENBQU9VLFNBQUEsQ0FBVTlILG1CQUFBLENBQW9CLGlCQUFpQm9ILE1BQUEsQ0FBTzBaLGlDQUFpQztVQUM5RjFaLE1BQUEsQ0FBTzBaLGlDQUFBLEdBQW9DO1VBQzNDLE9BQU8xWixNQUFBLENBQU8wWixpQ0FBQTtVQUNkLElBQUlWLFlBQUEsRUFBYztZQUNoQmhaLE1BQUEsQ0FBTzJILElBQUEsQ0FBSyxlQUFlO1VBQzdCO1FBQ0Y7TUFDRjtNQUNBM0gsTUFBQSxDQUFPVSxTQUFBLENBQVUvSCxnQkFBQSxDQUFpQixpQkFBaUJxSCxNQUFBLENBQU8wWixpQ0FBaUM7SUFDN0Y7RUFDRjtFQUNBLE9BQU87QUFDVDtBQUVBLElBQUl0WixTQUFBLEdBQVk7RUFDZHpELFlBQUEsRUFBYzBiLGtCQUFBO0VBQ2RHLFlBQUE7RUFDQTVFLFlBQUE7RUFDQVMsWUFBQTtFQUNBMEU7QUFDRjtBQUVBLFNBQVN0RyxjQUFjbFMsUUFBQSxFQUFVa1ksWUFBQSxFQUFjO0VBQzdDLE1BQU16WSxNQUFBLEdBQVM7RUFDZixJQUFJLENBQUNBLE1BQUEsQ0FBT1EsTUFBQSxDQUFPc08sT0FBQSxFQUFTO0lBQzFCOU8sTUFBQSxDQUFPVSxTQUFBLENBQVVsSCxLQUFBLENBQU1vZ0Isa0JBQUEsR0FBcUIsR0FBR3JaLFFBQVE7SUFDdkRQLE1BQUEsQ0FBT1UsU0FBQSxDQUFVbEgsS0FBQSxDQUFNcWdCLGVBQUEsR0FBa0J0WixRQUFBLEtBQWEsSUFBSSxRQUFRO0VBQ3BFO0VBQ0FQLE1BQUEsQ0FBTzJILElBQUEsQ0FBSyxpQkFBaUJwSCxRQUFBLEVBQVVrWSxZQUFZO0FBQ3JEO0FBRUEsU0FBU3FCLGVBQWUvWixJQUFBLEVBQU07RUFDNUIsSUFBSTtJQUNGQyxNQUFBO0lBQ0FnWixZQUFBO0lBQ0FlLFNBQUE7SUFDQUM7RUFDRixJQUFJamEsSUFBQTtFQUNKLE1BQU07SUFDSjhTLFdBQUE7SUFDQXVFO0VBQ0YsSUFBSXBYLE1BQUE7RUFDSixJQUFJYSxHQUFBLEdBQU1rWixTQUFBO0VBQ1YsSUFBSSxDQUFDbFosR0FBQSxFQUFLO0lBQ1IsSUFBSWdTLFdBQUEsR0FBY3VFLGFBQUEsRUFBZXZXLEdBQUEsR0FBTSxnQkFBZ0JnUyxXQUFBLEdBQWN1RSxhQUFBLEVBQWV2VyxHQUFBLEdBQU0sWUFBWUEsR0FBQSxHQUFNO0VBQzlHO0VBQ0FiLE1BQUEsQ0FBTzJILElBQUEsQ0FBSyxhQUFhcVMsSUFBSSxFQUFFO0VBQy9CLElBQUloQixZQUFBLElBQWdCbkcsV0FBQSxLQUFnQnVFLGFBQUEsRUFBZTtJQUNqRCxJQUFJdlcsR0FBQSxLQUFRLFNBQVM7TUFDbkJiLE1BQUEsQ0FBTzJILElBQUEsQ0FBSyx1QkFBdUJxUyxJQUFJLEVBQUU7TUFDekM7SUFDRjtJQUNBaGEsTUFBQSxDQUFPMkgsSUFBQSxDQUFLLHdCQUF3QnFTLElBQUksRUFBRTtJQUMxQyxJQUFJblosR0FBQSxLQUFRLFFBQVE7TUFDbEJiLE1BQUEsQ0FBTzJILElBQUEsQ0FBSyxzQkFBc0JxUyxJQUFJLEVBQUU7SUFDMUMsT0FBTztNQUNMaGEsTUFBQSxDQUFPMkgsSUFBQSxDQUFLLHNCQUFzQnFTLElBQUksRUFBRTtJQUMxQztFQUNGO0FBQ0Y7QUFFQSxTQUFTQyxnQkFBZ0JqQixZQUFBLEVBQWNlLFNBQUEsRUFBVztFQUNoRCxJQUFJZixZQUFBLEtBQWlCLFFBQVE7SUFDM0JBLFlBQUEsR0FBZTtFQUNqQjtFQUNBLE1BQU1oWixNQUFBLEdBQVM7RUFDZixNQUFNO0lBQ0pRO0VBQ0YsSUFBSVIsTUFBQTtFQUNKLElBQUlRLE1BQUEsQ0FBT3NPLE9BQUEsRUFBUztFQUNwQixJQUFJdE8sTUFBQSxDQUFPMlUsVUFBQSxFQUFZO0lBQ3JCblYsTUFBQSxDQUFPdVMsZ0JBQUEsQ0FBaUI7RUFDMUI7RUFDQXVILGNBQUEsQ0FBZTtJQUNiOVosTUFBQTtJQUNBZ1osWUFBQTtJQUNBZSxTQUFBO0lBQ0FDLElBQUEsRUFBTTtFQUNSLENBQUM7QUFDSDtBQUVBLFNBQVNFLGNBQWNsQixZQUFBLEVBQWNlLFNBQUEsRUFBVztFQUM5QyxJQUFJZixZQUFBLEtBQWlCLFFBQVE7SUFDM0JBLFlBQUEsR0FBZTtFQUNqQjtFQUNBLE1BQU1oWixNQUFBLEdBQVM7RUFDZixNQUFNO0lBQ0pRO0VBQ0YsSUFBSVIsTUFBQTtFQUNKQSxNQUFBLENBQU9tWixTQUFBLEdBQVk7RUFDbkIsSUFBSTNZLE1BQUEsQ0FBT3NPLE9BQUEsRUFBUztFQUNwQjlPLE1BQUEsQ0FBT3lTLGFBQUEsQ0FBYyxDQUFDO0VBQ3RCcUgsY0FBQSxDQUFlO0lBQ2I5WixNQUFBO0lBQ0FnWixZQUFBO0lBQ0FlLFNBQUE7SUFDQUMsSUFBQSxFQUFNO0VBQ1IsQ0FBQztBQUNIO0FBRUEsSUFBSUcsVUFBQSxHQUFhO0VBQ2YxSCxhQUFBO0VBQ0F3SCxlQUFBO0VBQ0FDO0FBQ0Y7QUFFQSxTQUFTRSxRQUFRMU8sS0FBQSxFQUFPakwsS0FBQSxFQUFPdVksWUFBQSxFQUFjRSxRQUFBLEVBQVVtQixPQUFBLEVBQVM7RUFDOUQsSUFBSTNPLEtBQUEsS0FBVSxRQUFRO0lBQ3BCQSxLQUFBLEdBQVE7RUFDVjtFQUNBLElBQUlqTCxLQUFBLEtBQVUsUUFBUTtJQUNwQkEsS0FBQSxHQUFRLEtBQUtELE1BQUEsQ0FBT0MsS0FBQTtFQUN0QjtFQUNBLElBQUl1WSxZQUFBLEtBQWlCLFFBQVE7SUFDM0JBLFlBQUEsR0FBZTtFQUNqQjtFQUNBLElBQUksT0FBT3ROLEtBQUEsS0FBVSxVQUFVO0lBQzdCQSxLQUFBLEdBQVFjLFFBQUEsQ0FBU2QsS0FBQSxFQUFPLEVBQUU7RUFDNUI7RUFDQSxNQUFNMUwsTUFBQSxHQUFTO0VBQ2YsSUFBSWlSLFVBQUEsR0FBYXZGLEtBQUE7RUFDakIsSUFBSXVGLFVBQUEsR0FBYSxHQUFHQSxVQUFBLEdBQWE7RUFDakMsTUFBTTtJQUNKelEsTUFBQTtJQUNBb04sUUFBQTtJQUNBQyxVQUFBO0lBQ0F1SixhQUFBO0lBQ0F2RSxXQUFBO0lBQ0EzRixZQUFBLEVBQWNDLEdBQUE7SUFDZHpNLFNBQUE7SUFDQTZNO0VBQ0YsSUFBSXZOLE1BQUE7RUFDSixJQUFJQSxNQUFBLENBQU9tWixTQUFBLElBQWEzWSxNQUFBLENBQU80WSw4QkFBQSxJQUFrQyxDQUFDN0wsT0FBQSxJQUFXLENBQUMyTCxRQUFBLElBQVksQ0FBQ21CLE9BQUEsRUFBUztJQUNsRyxPQUFPO0VBQ1Q7RUFDQSxNQUFNM0MsSUFBQSxHQUFPdlcsSUFBQSxDQUFLRSxHQUFBLENBQUlyQixNQUFBLENBQU9RLE1BQUEsQ0FBTzRQLGtCQUFBLEVBQW9CYSxVQUFVO0VBQ2xFLElBQUlRLFNBQUEsR0FBWWlHLElBQUEsR0FBT3ZXLElBQUEsQ0FBSzZPLEtBQUEsRUFBT2lCLFVBQUEsR0FBYXlHLElBQUEsSUFBUTFYLE1BQUEsQ0FBT1EsTUFBQSxDQUFPMlAsY0FBYztFQUNwRixJQUFJc0IsU0FBQSxJQUFhN0QsUUFBQSxDQUFTcFYsTUFBQSxFQUFRaVosU0FBQSxHQUFZN0QsUUFBQSxDQUFTcFYsTUFBQSxHQUFTO0VBQ2hFLE1BQU04YSxVQUFBLEdBQVksQ0FBQzFGLFFBQUEsQ0FBUzZELFNBQVM7RUFFckMsSUFBSWpSLE1BQUEsQ0FBT3lXLG1CQUFBLEVBQXFCO0lBQzlCLFNBQVNuWSxDQUFBLEdBQUksR0FBR0EsQ0FBQSxHQUFJK08sVUFBQSxDQUFXclYsTUFBQSxFQUFRc0csQ0FBQSxJQUFLLEdBQUc7TUFDN0MsTUFBTXdiLG1CQUFBLEdBQXNCLENBQUNuWixJQUFBLENBQUs2TyxLQUFBLENBQU1zRCxVQUFBLEdBQVksR0FBRztNQUN2RCxNQUFNaUgsY0FBQSxHQUFpQnBaLElBQUEsQ0FBSzZPLEtBQUEsQ0FBTW5DLFVBQUEsQ0FBVy9PLENBQUMsSUFBSSxHQUFHO01BQ3JELE1BQU0wYixrQkFBQSxHQUFxQnJaLElBQUEsQ0FBSzZPLEtBQUEsQ0FBTW5DLFVBQUEsQ0FBVy9PLENBQUEsR0FBSSxDQUFDLElBQUksR0FBRztNQUM3RCxJQUFJLE9BQU8rTyxVQUFBLENBQVcvTyxDQUFBLEdBQUksQ0FBQyxNQUFNLGFBQWE7UUFDNUMsSUFBSXdiLG1CQUFBLElBQXVCQyxjQUFBLElBQWtCRCxtQkFBQSxHQUFzQkUsa0JBQUEsSUFBc0JBLGtCQUFBLEdBQXFCRCxjQUFBLElBQWtCLEdBQUc7VUFDakl0SixVQUFBLEdBQWFuUyxDQUFBO1FBQ2YsV0FBV3diLG1CQUFBLElBQXVCQyxjQUFBLElBQWtCRCxtQkFBQSxHQUFzQkUsa0JBQUEsRUFBb0I7VUFDNUZ2SixVQUFBLEdBQWFuUyxDQUFBLEdBQUk7UUFDbkI7TUFDRixXQUFXd2IsbUJBQUEsSUFBdUJDLGNBQUEsRUFBZ0I7UUFDaER0SixVQUFBLEdBQWFuUyxDQUFBO01BQ2Y7SUFDRjtFQUNGO0VBRUEsSUFBSWtCLE1BQUEsQ0FBT2dJLFdBQUEsSUFBZWlKLFVBQUEsS0FBZTRCLFdBQUEsRUFBYTtJQUNwRCxJQUFJLENBQUM3UyxNQUFBLENBQU95YSxjQUFBLEtBQW1CdE4sR0FBQSxHQUFNbUcsVUFBQSxHQUFZdFQsTUFBQSxDQUFPSSxTQUFBLElBQWFrVCxVQUFBLEdBQVl0VCxNQUFBLENBQU80VCxZQUFBLENBQWEsSUFBSU4sVUFBQSxHQUFZdFQsTUFBQSxDQUFPSSxTQUFBLElBQWFrVCxVQUFBLEdBQVl0VCxNQUFBLENBQU80VCxZQUFBLENBQWEsSUFBSTtNQUMzSyxPQUFPO0lBQ1Q7SUFDQSxJQUFJLENBQUM1VCxNQUFBLENBQU8wYSxjQUFBLElBQWtCcEgsVUFBQSxHQUFZdFQsTUFBQSxDQUFPSSxTQUFBLElBQWFrVCxVQUFBLEdBQVl0VCxNQUFBLENBQU9xVSxZQUFBLENBQWEsR0FBRztNQUMvRixLQUFLeEIsV0FBQSxJQUFlLE9BQU81QixVQUFBLEVBQVk7UUFDckMsT0FBTztNQUNUO0lBQ0Y7RUFDRjtFQUNBLElBQUlBLFVBQUEsTUFBZ0JtRyxhQUFBLElBQWlCLE1BQU00QixZQUFBLEVBQWM7SUFDdkRoWixNQUFBLENBQU8ySCxJQUFBLENBQUssd0JBQXdCO0VBQ3RDO0VBR0EzSCxNQUFBLENBQU9rVSxjQUFBLENBQWVaLFVBQVM7RUFDL0IsSUFBSXlHLFNBQUE7RUFDSixJQUFJOUksVUFBQSxHQUFhNEIsV0FBQSxFQUFha0gsU0FBQSxHQUFZLGdCQUFnQjlJLFVBQUEsR0FBYTRCLFdBQUEsRUFBYWtILFNBQUEsR0FBWSxZQUFZQSxTQUFBLEdBQVk7RUFHeEgsSUFBSTVNLEdBQUEsSUFBTyxDQUFDbUcsVUFBQSxLQUFjdFQsTUFBQSxDQUFPSSxTQUFBLElBQWEsQ0FBQytNLEdBQUEsSUFBT21HLFVBQUEsS0FBY3RULE1BQUEsQ0FBT0ksU0FBQSxFQUFXO0lBQ3BGSixNQUFBLENBQU9rWCxpQkFBQSxDQUFrQmpHLFVBQVU7SUFFbkMsSUFBSXpRLE1BQUEsQ0FBTzJVLFVBQUEsRUFBWTtNQUNyQm5WLE1BQUEsQ0FBT3VTLGdCQUFBLENBQWlCO0lBQzFCO0lBQ0F2UyxNQUFBLENBQU9vVixtQkFBQSxDQUFvQjtJQUMzQixJQUFJNVUsTUFBQSxDQUFPNlAsTUFBQSxLQUFXLFNBQVM7TUFDN0JyUSxNQUFBLENBQU93WSxZQUFBLENBQWFsRixVQUFTO0lBQy9CO0lBQ0EsSUFBSXlHLFNBQUEsS0FBYyxTQUFTO01BQ3pCL1osTUFBQSxDQUFPaWEsZUFBQSxDQUFnQmpCLFlBQUEsRUFBY2UsU0FBUztNQUM5Qy9aLE1BQUEsQ0FBT2thLGFBQUEsQ0FBY2xCLFlBQUEsRUFBY2UsU0FBUztJQUM5QztJQUNBLE9BQU87RUFDVDtFQUNBLElBQUl2WixNQUFBLENBQU9zTyxPQUFBLEVBQVM7SUFDbEIsTUFBTTBLLEdBQUEsR0FBTXhaLE1BQUEsQ0FBT3NNLFlBQUEsQ0FBYTtJQUNoQyxNQUFNcU8sQ0FBQSxHQUFJeE4sR0FBQSxHQUFNbUcsVUFBQSxHQUFZLENBQUNBLFVBQUE7SUFDN0IsSUFBSTdTLEtBQUEsS0FBVSxHQUFHO01BQ2YsTUFBTTRNLFNBQUEsR0FBWXJOLE1BQUEsQ0FBT3NOLE9BQUEsSUFBV3ROLE1BQUEsQ0FBT1EsTUFBQSxDQUFPOE0sT0FBQSxDQUFRQyxPQUFBO01BQzFELElBQUlGLFNBQUEsRUFBVztRQUNick4sTUFBQSxDQUFPVSxTQUFBLENBQVVsSCxLQUFBLENBQU1tSCxjQUFBLEdBQWlCO1FBQ3hDWCxNQUFBLENBQU80YSxpQkFBQSxHQUFvQjtNQUM3QjtNQUNBLElBQUl2TixTQUFBLElBQWEsQ0FBQ3JOLE1BQUEsQ0FBTzZhLHlCQUFBLElBQTZCN2EsTUFBQSxDQUFPUSxNQUFBLENBQU9zYSxZQUFBLEdBQWUsR0FBRztRQUNwRjlhLE1BQUEsQ0FBTzZhLHlCQUFBLEdBQTRCO1FBQ25DbmYscUJBQUEsQ0FBc0IsTUFBTTtVQUMxQmdGLFNBQUEsQ0FBVThZLEdBQUEsR0FBTSxlQUFlLFdBQVcsSUFBSW1CLENBQUE7UUFDaEQsQ0FBQztNQUNILE9BQU87UUFDTGphLFNBQUEsQ0FBVThZLEdBQUEsR0FBTSxlQUFlLFdBQVcsSUFBSW1CLENBQUE7TUFDaEQ7TUFDQSxJQUFJdE4sU0FBQSxFQUFXO1FBQ2IzUixxQkFBQSxDQUFzQixNQUFNO1VBQzFCc0UsTUFBQSxDQUFPVSxTQUFBLENBQVVsSCxLQUFBLENBQU1tSCxjQUFBLEdBQWlCO1VBQ3hDWCxNQUFBLENBQU80YSxpQkFBQSxHQUFvQjtRQUM3QixDQUFDO01BQ0g7SUFDRixPQUFPO01BQ0wsSUFBSSxDQUFDNWEsTUFBQSxDQUFPNkUsT0FBQSxDQUFRRSxZQUFBLEVBQWM7UUFDaENqRixvQkFBQSxDQUFxQjtVQUNuQkUsTUFBQTtVQUNBQyxjQUFBLEVBQWdCMGEsQ0FBQTtVQUNoQnphLElBQUEsRUFBTXNaLEdBQUEsR0FBTSxTQUFTO1FBQ3ZCLENBQUM7UUFDRCxPQUFPO01BQ1Q7TUFDQTlZLFNBQUEsQ0FBVWdCLFFBQUEsQ0FBUztRQUNqQixDQUFDOFgsR0FBQSxHQUFNLFNBQVMsS0FBSyxHQUFHbUIsQ0FBQTtRQUN4QmxCLFFBQUEsRUFBVTtNQUNaLENBQUM7SUFDSDtJQUNBLE9BQU87RUFDVDtFQUNBelosTUFBQSxDQUFPeVMsYUFBQSxDQUFjaFMsS0FBSztFQUMxQlQsTUFBQSxDQUFPd1ksWUFBQSxDQUFhbEYsVUFBUztFQUM3QnRULE1BQUEsQ0FBT2tYLGlCQUFBLENBQWtCakcsVUFBVTtFQUNuQ2pSLE1BQUEsQ0FBT29WLG1CQUFBLENBQW9CO0VBQzNCcFYsTUFBQSxDQUFPMkgsSUFBQSxDQUFLLHlCQUF5QmxILEtBQUEsRUFBT3lZLFFBQVE7RUFDcERsWixNQUFBLENBQU9pYSxlQUFBLENBQWdCakIsWUFBQSxFQUFjZSxTQUFTO0VBQzlDLElBQUl0WixLQUFBLEtBQVUsR0FBRztJQUNmVCxNQUFBLENBQU9rYSxhQUFBLENBQWNsQixZQUFBLEVBQWNlLFNBQVM7RUFDOUMsV0FBVyxDQUFDL1osTUFBQSxDQUFPbVosU0FBQSxFQUFXO0lBQzVCblosTUFBQSxDQUFPbVosU0FBQSxHQUFZO0lBQ25CLElBQUksQ0FBQ25aLE1BQUEsQ0FBTythLDZCQUFBLEVBQStCO01BQ3pDL2EsTUFBQSxDQUFPK2EsNkJBQUEsR0FBZ0MsU0FBU3BCLGVBQWN4ZCxDQUFBLEVBQUc7UUFDL0QsSUFBSSxDQUFDNkQsTUFBQSxJQUFVQSxNQUFBLENBQU8rSCxTQUFBLEVBQVc7UUFDakMsSUFBSTVMLENBQUEsQ0FBRWhFLE1BQUEsS0FBVyxNQUFNO1FBQ3ZCNkgsTUFBQSxDQUFPVSxTQUFBLENBQVU5SCxtQkFBQSxDQUFvQixpQkFBaUJvSCxNQUFBLENBQU8rYSw2QkFBNkI7UUFDMUYvYSxNQUFBLENBQU8rYSw2QkFBQSxHQUFnQztRQUN2QyxPQUFPL2EsTUFBQSxDQUFPK2EsNkJBQUE7UUFDZC9hLE1BQUEsQ0FBT2thLGFBQUEsQ0FBY2xCLFlBQUEsRUFBY2UsU0FBUztNQUM5QztJQUNGO0lBQ0EvWixNQUFBLENBQU9VLFNBQUEsQ0FBVS9ILGdCQUFBLENBQWlCLGlCQUFpQnFILE1BQUEsQ0FBTythLDZCQUE2QjtFQUN6RjtFQUNBLE9BQU87QUFDVDtBQUVBLFNBQVNDLFlBQVl0UCxLQUFBLEVBQU9qTCxLQUFBLEVBQU91WSxZQUFBLEVBQWNFLFFBQUEsRUFBVTtFQUN6RCxJQUFJeE4sS0FBQSxLQUFVLFFBQVE7SUFDcEJBLEtBQUEsR0FBUTtFQUNWO0VBQ0EsSUFBSWpMLEtBQUEsS0FBVSxRQUFRO0lBQ3BCQSxLQUFBLEdBQVEsS0FBS0QsTUFBQSxDQUFPQyxLQUFBO0VBQ3RCO0VBQ0EsSUFBSXVZLFlBQUEsS0FBaUIsUUFBUTtJQUMzQkEsWUFBQSxHQUFlO0VBQ2pCO0VBQ0EsSUFBSSxPQUFPdE4sS0FBQSxLQUFVLFVBQVU7SUFDN0IsTUFBTXVQLGFBQUEsR0FBZ0J6TyxRQUFBLENBQVNkLEtBQUEsRUFBTyxFQUFFO0lBQ3hDQSxLQUFBLEdBQVF1UCxhQUFBO0VBQ1Y7RUFDQSxNQUFNamIsTUFBQSxHQUFTO0VBQ2YsSUFBSWtiLFFBQUEsR0FBV3hQLEtBQUE7RUFDZixJQUFJMUwsTUFBQSxDQUFPUSxNQUFBLENBQU9rUSxJQUFBLEVBQU07SUFDdEIsSUFBSTFRLE1BQUEsQ0FBT3NOLE9BQUEsSUFBV3ROLE1BQUEsQ0FBT1EsTUFBQSxDQUFPOE0sT0FBQSxDQUFRQyxPQUFBLEVBQVM7TUFFbkQyTixRQUFBLEdBQVdBLFFBQUEsR0FBV2xiLE1BQUEsQ0FBT3NOLE9BQUEsQ0FBUXVELFlBQUE7SUFDdkMsT0FBTztNQUNMcUssUUFBQSxHQUFXbGIsTUFBQSxDQUFPMlMsbUJBQUEsQ0FBb0J1SSxRQUFRO0lBQ2hEO0VBQ0Y7RUFDQSxPQUFPbGIsTUFBQSxDQUFPb2EsT0FBQSxDQUFRYyxRQUFBLEVBQVV6YSxLQUFBLEVBQU91WSxZQUFBLEVBQWNFLFFBQVE7QUFDL0Q7QUFHQSxTQUFTaUMsVUFBVTFhLEtBQUEsRUFBT3VZLFlBQUEsRUFBY0UsUUFBQSxFQUFVO0VBQ2hELElBQUl6WSxLQUFBLEtBQVUsUUFBUTtJQUNwQkEsS0FBQSxHQUFRLEtBQUtELE1BQUEsQ0FBT0MsS0FBQTtFQUN0QjtFQUNBLElBQUl1WSxZQUFBLEtBQWlCLFFBQVE7SUFDM0JBLFlBQUEsR0FBZTtFQUNqQjtFQUNBLE1BQU1oWixNQUFBLEdBQVM7RUFDZixNQUFNO0lBQ0p1TixPQUFBO0lBQ0EvTSxNQUFBO0lBQ0EyWTtFQUNGLElBQUluWixNQUFBO0VBQ0osSUFBSSxDQUFDdU4sT0FBQSxFQUFTLE9BQU92TixNQUFBO0VBQ3JCLElBQUlvYixRQUFBLEdBQVc1YSxNQUFBLENBQU8yUCxjQUFBO0VBQ3RCLElBQUkzUCxNQUFBLENBQU82TyxhQUFBLEtBQWtCLFVBQVU3TyxNQUFBLENBQU8yUCxjQUFBLEtBQW1CLEtBQUszUCxNQUFBLENBQU82YSxrQkFBQSxFQUFvQjtJQUMvRkQsUUFBQSxHQUFXamEsSUFBQSxDQUFLQyxHQUFBLENBQUlwQixNQUFBLENBQU93VyxvQkFBQSxDQUFxQixXQUFXLElBQUksR0FBRyxDQUFDO0VBQ3JFO0VBQ0EsTUFBTThFLFNBQUEsR0FBWXRiLE1BQUEsQ0FBTzZTLFdBQUEsR0FBY3JTLE1BQUEsQ0FBTzRQLGtCQUFBLEdBQXFCLElBQUlnTCxRQUFBO0VBQ3ZFLE1BQU0vTixTQUFBLEdBQVlyTixNQUFBLENBQU9zTixPQUFBLElBQVc5TSxNQUFBLENBQU84TSxPQUFBLENBQVFDLE9BQUE7RUFDbkQsSUFBSS9NLE1BQUEsQ0FBT2tRLElBQUEsRUFBTTtJQUNmLElBQUl5SSxTQUFBLElBQWEsQ0FBQzlMLFNBQUEsSUFBYTdNLE1BQUEsQ0FBTythLG1CQUFBLEVBQXFCLE9BQU87SUFDbEV2YixNQUFBLENBQU93YixPQUFBLENBQVE7TUFDYnpCLFNBQUEsRUFBVztJQUNiLENBQUM7SUFFRC9aLE1BQUEsQ0FBT3liLFdBQUEsR0FBY3piLE1BQUEsQ0FBT1UsU0FBQSxDQUFVb0MsVUFBQTtJQUN0QyxJQUFJOUMsTUFBQSxDQUFPNlMsV0FBQSxLQUFnQjdTLE1BQUEsQ0FBT3lOLE1BQUEsQ0FBT2pWLE1BQUEsR0FBUyxLQUFLZ0ksTUFBQSxDQUFPc08sT0FBQSxFQUFTO01BQ3JFcFQscUJBQUEsQ0FBc0IsTUFBTTtRQUMxQnNFLE1BQUEsQ0FBT29hLE9BQUEsQ0FBUXBhLE1BQUEsQ0FBTzZTLFdBQUEsR0FBY3lJLFNBQUEsRUFBVzdhLEtBQUEsRUFBT3VZLFlBQUEsRUFBY0UsUUFBUTtNQUM5RSxDQUFDO01BQ0QsT0FBTztJQUNUO0VBQ0Y7RUFDQSxJQUFJMVksTUFBQSxDQUFPc1csTUFBQSxJQUFVOVcsTUFBQSxDQUFPdVUsS0FBQSxFQUFPO0lBQ2pDLE9BQU92VSxNQUFBLENBQU9vYSxPQUFBLENBQVEsR0FBRzNaLEtBQUEsRUFBT3VZLFlBQUEsRUFBY0UsUUFBUTtFQUN4RDtFQUNBLE9BQU9sWixNQUFBLENBQU9vYSxPQUFBLENBQVFwYSxNQUFBLENBQU82UyxXQUFBLEdBQWN5SSxTQUFBLEVBQVc3YSxLQUFBLEVBQU91WSxZQUFBLEVBQWNFLFFBQVE7QUFDckY7QUFHQSxTQUFTd0MsVUFBVWpiLEtBQUEsRUFBT3VZLFlBQUEsRUFBY0UsUUFBQSxFQUFVO0VBQ2hELElBQUl6WSxLQUFBLEtBQVUsUUFBUTtJQUNwQkEsS0FBQSxHQUFRLEtBQUtELE1BQUEsQ0FBT0MsS0FBQTtFQUN0QjtFQUNBLElBQUl1WSxZQUFBLEtBQWlCLFFBQVE7SUFDM0JBLFlBQUEsR0FBZTtFQUNqQjtFQUNBLE1BQU1oWixNQUFBLEdBQVM7RUFDZixNQUFNO0lBQ0pRLE1BQUE7SUFDQW9OLFFBQUE7SUFDQUMsVUFBQTtJQUNBWCxZQUFBO0lBQ0FLLE9BQUE7SUFDQTRMO0VBQ0YsSUFBSW5aLE1BQUE7RUFDSixJQUFJLENBQUN1TixPQUFBLEVBQVMsT0FBT3ZOLE1BQUE7RUFDckIsTUFBTXFOLFNBQUEsR0FBWXJOLE1BQUEsQ0FBT3NOLE9BQUEsSUFBVzlNLE1BQUEsQ0FBTzhNLE9BQUEsQ0FBUUMsT0FBQTtFQUNuRCxJQUFJL00sTUFBQSxDQUFPa1EsSUFBQSxFQUFNO0lBQ2YsSUFBSXlJLFNBQUEsSUFBYSxDQUFDOUwsU0FBQSxJQUFhN00sTUFBQSxDQUFPK2EsbUJBQUEsRUFBcUIsT0FBTztJQUNsRXZiLE1BQUEsQ0FBT3diLE9BQUEsQ0FBUTtNQUNiekIsU0FBQSxFQUFXO0lBQ2IsQ0FBQztJQUVEL1osTUFBQSxDQUFPeWIsV0FBQSxHQUFjemIsTUFBQSxDQUFPVSxTQUFBLENBQVVvQyxVQUFBO0VBQ3hDO0VBQ0EsTUFBTXdRLFVBQUEsR0FBWXBHLFlBQUEsR0FBZWxOLE1BQUEsQ0FBT0ksU0FBQSxHQUFZLENBQUNKLE1BQUEsQ0FBT0ksU0FBQTtFQUM1RCxTQUFTdWIsVUFBVUMsR0FBQSxFQUFLO0lBQ3RCLElBQUlBLEdBQUEsR0FBTSxHQUFHLE9BQU8sQ0FBQ3phLElBQUEsQ0FBSzZPLEtBQUEsQ0FBTTdPLElBQUEsQ0FBSytPLEdBQUEsQ0FBSTBMLEdBQUcsQ0FBQztJQUM3QyxPQUFPemEsSUFBQSxDQUFLNk8sS0FBQSxDQUFNNEwsR0FBRztFQUN2QjtFQUNBLE1BQU10QixtQkFBQSxHQUFzQnFCLFNBQUEsQ0FBVXJJLFVBQVM7RUFDL0MsTUFBTXVJLGtCQUFBLEdBQXFCak8sUUFBQSxDQUFTdlEsR0FBQSxDQUFJdWUsR0FBQSxJQUFPRCxTQUFBLENBQVVDLEdBQUcsQ0FBQztFQUM3RCxJQUFJRSxRQUFBLEdBQVdsTyxRQUFBLENBQVNpTyxrQkFBQSxDQUFtQjNjLE9BQUEsQ0FBUW9iLG1CQUFtQixJQUFJLENBQUM7RUFDM0UsSUFBSSxPQUFPd0IsUUFBQSxLQUFhLGVBQWV0YixNQUFBLENBQU9zTyxPQUFBLEVBQVM7SUFDckQsSUFBSWlOLGFBQUE7SUFDSm5PLFFBQUEsQ0FBU3RWLE9BQUEsQ0FBUSxDQUFDZ1osSUFBQSxFQUFNRyxTQUFBLEtBQWM7TUFDcEMsSUFBSTZJLG1CQUFBLElBQXVCaEosSUFBQSxFQUFNO1FBRS9CeUssYUFBQSxHQUFnQnRLLFNBQUE7TUFDbEI7SUFDRixDQUFDO0lBQ0QsSUFBSSxPQUFPc0ssYUFBQSxLQUFrQixhQUFhO01BQ3hDRCxRQUFBLEdBQVdsTyxRQUFBLENBQVNtTyxhQUFBLEdBQWdCLElBQUlBLGFBQUEsR0FBZ0IsSUFBSUEsYUFBYTtJQUMzRTtFQUNGO0VBQ0EsSUFBSUMsU0FBQSxHQUFZO0VBQ2hCLElBQUksT0FBT0YsUUFBQSxLQUFhLGFBQWE7SUFDbkNFLFNBQUEsR0FBWW5PLFVBQUEsQ0FBVzNPLE9BQUEsQ0FBUTRjLFFBQVE7SUFDdkMsSUFBSUUsU0FBQSxHQUFZLEdBQUdBLFNBQUEsR0FBWWhjLE1BQUEsQ0FBTzZTLFdBQUEsR0FBYztJQUNwRCxJQUFJclMsTUFBQSxDQUFPNk8sYUFBQSxLQUFrQixVQUFVN08sTUFBQSxDQUFPMlAsY0FBQSxLQUFtQixLQUFLM1AsTUFBQSxDQUFPNmEsa0JBQUEsRUFBb0I7TUFDL0ZXLFNBQUEsR0FBWUEsU0FBQSxHQUFZaGMsTUFBQSxDQUFPd1csb0JBQUEsQ0FBcUIsWUFBWSxJQUFJLElBQUk7TUFDeEV3RixTQUFBLEdBQVk3YSxJQUFBLENBQUtDLEdBQUEsQ0FBSTRhLFNBQUEsRUFBVyxDQUFDO0lBQ25DO0VBQ0Y7RUFDQSxJQUFJeGIsTUFBQSxDQUFPc1csTUFBQSxJQUFVOVcsTUFBQSxDQUFPc1UsV0FBQSxFQUFhO0lBQ3ZDLE1BQU0ySCxTQUFBLEdBQVlqYyxNQUFBLENBQU9RLE1BQUEsQ0FBTzhNLE9BQUEsSUFBV3ROLE1BQUEsQ0FBT1EsTUFBQSxDQUFPOE0sT0FBQSxDQUFRQyxPQUFBLElBQVd2TixNQUFBLENBQU9zTixPQUFBLEdBQVV0TixNQUFBLENBQU9zTixPQUFBLENBQVFHLE1BQUEsQ0FBT2pWLE1BQUEsR0FBUyxJQUFJd0gsTUFBQSxDQUFPeU4sTUFBQSxDQUFPalYsTUFBQSxHQUFTO0lBQ3ZKLE9BQU93SCxNQUFBLENBQU9vYSxPQUFBLENBQVE2QixTQUFBLEVBQVd4YixLQUFBLEVBQU91WSxZQUFBLEVBQWNFLFFBQVE7RUFDaEUsV0FBVzFZLE1BQUEsQ0FBT2tRLElBQUEsSUFBUTFRLE1BQUEsQ0FBTzZTLFdBQUEsS0FBZ0IsS0FBS3JTLE1BQUEsQ0FBT3NPLE9BQUEsRUFBUztJQUNwRXBULHFCQUFBLENBQXNCLE1BQU07TUFDMUJzRSxNQUFBLENBQU9vYSxPQUFBLENBQVE0QixTQUFBLEVBQVd2YixLQUFBLEVBQU91WSxZQUFBLEVBQWNFLFFBQVE7SUFDekQsQ0FBQztJQUNELE9BQU87RUFDVDtFQUNBLE9BQU9sWixNQUFBLENBQU9vYSxPQUFBLENBQVE0QixTQUFBLEVBQVd2YixLQUFBLEVBQU91WSxZQUFBLEVBQWNFLFFBQVE7QUFDaEU7QUFHQSxTQUFTZ0QsV0FBV3piLEtBQUEsRUFBT3VZLFlBQUEsRUFBY0UsUUFBQSxFQUFVO0VBQ2pELElBQUl6WSxLQUFBLEtBQVUsUUFBUTtJQUNwQkEsS0FBQSxHQUFRLEtBQUtELE1BQUEsQ0FBT0MsS0FBQTtFQUN0QjtFQUNBLElBQUl1WSxZQUFBLEtBQWlCLFFBQVE7SUFDM0JBLFlBQUEsR0FBZTtFQUNqQjtFQUNBLE1BQU1oWixNQUFBLEdBQVM7RUFDZixPQUFPQSxNQUFBLENBQU9vYSxPQUFBLENBQVFwYSxNQUFBLENBQU82UyxXQUFBLEVBQWFwUyxLQUFBLEVBQU91WSxZQUFBLEVBQWNFLFFBQVE7QUFDekU7QUFHQSxTQUFTaUQsZUFBZTFiLEtBQUEsRUFBT3VZLFlBQUEsRUFBY0UsUUFBQSxFQUFVa0QsU0FBQSxFQUFXO0VBQ2hFLElBQUkzYixLQUFBLEtBQVUsUUFBUTtJQUNwQkEsS0FBQSxHQUFRLEtBQUtELE1BQUEsQ0FBT0MsS0FBQTtFQUN0QjtFQUNBLElBQUl1WSxZQUFBLEtBQWlCLFFBQVE7SUFDM0JBLFlBQUEsR0FBZTtFQUNqQjtFQUNBLElBQUlvRCxTQUFBLEtBQWMsUUFBUTtJQUN4QkEsU0FBQSxHQUFZO0VBQ2Q7RUFDQSxNQUFNcGMsTUFBQSxHQUFTO0VBQ2YsSUFBSTBMLEtBQUEsR0FBUTFMLE1BQUEsQ0FBTzZTLFdBQUE7RUFDbkIsTUFBTTZFLElBQUEsR0FBT3ZXLElBQUEsQ0FBS0UsR0FBQSxDQUFJckIsTUFBQSxDQUFPUSxNQUFBLENBQU80UCxrQkFBQSxFQUFvQjFFLEtBQUs7RUFDN0QsTUFBTStGLFNBQUEsR0FBWWlHLElBQUEsR0FBT3ZXLElBQUEsQ0FBSzZPLEtBQUEsRUFBT3RFLEtBQUEsR0FBUWdNLElBQUEsSUFBUTFYLE1BQUEsQ0FBT1EsTUFBQSxDQUFPMlAsY0FBYztFQUNqRixNQUFNbUQsVUFBQSxHQUFZdFQsTUFBQSxDQUFPa04sWUFBQSxHQUFlbE4sTUFBQSxDQUFPSSxTQUFBLEdBQVksQ0FBQ0osTUFBQSxDQUFPSSxTQUFBO0VBQ25FLElBQUlrVCxVQUFBLElBQWF0VCxNQUFBLENBQU80TixRQUFBLENBQVM2RCxTQUFTLEdBQUc7SUFHM0MsTUFBTTRLLFdBQUEsR0FBY3JjLE1BQUEsQ0FBTzROLFFBQUEsQ0FBUzZELFNBQVM7SUFDN0MsTUFBTTZLLFFBQUEsR0FBV3RjLE1BQUEsQ0FBTzROLFFBQUEsQ0FBUzZELFNBQUEsR0FBWSxDQUFDO0lBQzlDLElBQUk2QixVQUFBLEdBQVkrSSxXQUFBLElBQWVDLFFBQUEsR0FBV0QsV0FBQSxJQUFlRCxTQUFBLEVBQVc7TUFDbEUxUSxLQUFBLElBQVMxTCxNQUFBLENBQU9RLE1BQUEsQ0FBTzJQLGNBQUE7SUFDekI7RUFDRixPQUFPO0lBR0wsTUFBTTJMLFFBQUEsR0FBVzliLE1BQUEsQ0FBTzROLFFBQUEsQ0FBUzZELFNBQUEsR0FBWSxDQUFDO0lBQzlDLE1BQU00SyxXQUFBLEdBQWNyYyxNQUFBLENBQU80TixRQUFBLENBQVM2RCxTQUFTO0lBQzdDLElBQUk2QixVQUFBLEdBQVl3SSxRQUFBLEtBQWFPLFdBQUEsR0FBY1AsUUFBQSxJQUFZTSxTQUFBLEVBQVc7TUFDaEUxUSxLQUFBLElBQVMxTCxNQUFBLENBQU9RLE1BQUEsQ0FBTzJQLGNBQUE7SUFDekI7RUFDRjtFQUNBekUsS0FBQSxHQUFRdkssSUFBQSxDQUFLQyxHQUFBLENBQUlzSyxLQUFBLEVBQU8sQ0FBQztFQUN6QkEsS0FBQSxHQUFRdkssSUFBQSxDQUFLRSxHQUFBLENBQUlxSyxLQUFBLEVBQU8xTCxNQUFBLENBQU82TixVQUFBLENBQVdyVixNQUFBLEdBQVMsQ0FBQztFQUNwRCxPQUFPd0gsTUFBQSxDQUFPb2EsT0FBQSxDQUFRMU8sS0FBQSxFQUFPakwsS0FBQSxFQUFPdVksWUFBQSxFQUFjRSxRQUFRO0FBQzVEO0FBRUEsU0FBU2Ysb0JBQUEsRUFBc0I7RUFDN0IsTUFBTW5ZLE1BQUEsR0FBUztFQUNmLE1BQU07SUFDSlEsTUFBQTtJQUNBd007RUFDRixJQUFJaE4sTUFBQTtFQUNKLE1BQU1xUCxhQUFBLEdBQWdCN08sTUFBQSxDQUFPNk8sYUFBQSxLQUFrQixTQUFTclAsTUFBQSxDQUFPd1csb0JBQUEsQ0FBcUIsSUFBSWhXLE1BQUEsQ0FBTzZPLGFBQUE7RUFDL0YsSUFBSWtOLFlBQUEsR0FBZXZjLE1BQUEsQ0FBT2tZLFlBQUE7RUFDMUIsSUFBSW5CLFNBQUE7RUFDSixNQUFNaEIsYUFBQSxHQUFnQi9WLE1BQUEsQ0FBT2dULFNBQUEsR0FBWSxpQkFBaUIsSUFBSXhTLE1BQUEsQ0FBT2tOLFVBQVU7RUFDL0UsSUFBSWxOLE1BQUEsQ0FBT2tRLElBQUEsRUFBTTtJQUNmLElBQUkxUSxNQUFBLENBQU9tWixTQUFBLEVBQVc7SUFDdEJwQyxTQUFBLEdBQVl2SyxRQUFBLENBQVN4TSxNQUFBLENBQU9pWSxZQUFBLENBQWFOLFlBQUEsQ0FBYSx5QkFBeUIsR0FBRyxFQUFFO0lBQ3BGLElBQUluWCxNQUFBLENBQU9xTyxjQUFBLEVBQWdCO01BQ3pCLElBQUkwTixZQUFBLEdBQWV2YyxNQUFBLENBQU93YyxZQUFBLEdBQWVuTixhQUFBLEdBQWdCLEtBQUtrTixZQUFBLEdBQWV2YyxNQUFBLENBQU95TixNQUFBLENBQU9qVixNQUFBLEdBQVN3SCxNQUFBLENBQU93YyxZQUFBLEdBQWVuTixhQUFBLEdBQWdCLEdBQUc7UUFDM0lyUCxNQUFBLENBQU93YixPQUFBLENBQVE7UUFDZmUsWUFBQSxHQUFldmMsTUFBQSxDQUFPeWMsYUFBQSxDQUFjMWEsZUFBQSxDQUFnQmlMLFFBQUEsRUFBVSxHQUFHK0ksYUFBYSw2QkFBNkJnQixTQUFTLElBQUksRUFBRSxDQUFDLENBQUM7UUFDNUgzYSxRQUFBLENBQVMsTUFBTTtVQUNiNEQsTUFBQSxDQUFPb2EsT0FBQSxDQUFRbUMsWUFBWTtRQUM3QixDQUFDO01BQ0gsT0FBTztRQUNMdmMsTUFBQSxDQUFPb2EsT0FBQSxDQUFRbUMsWUFBWTtNQUM3QjtJQUNGLFdBQVdBLFlBQUEsR0FBZXZjLE1BQUEsQ0FBT3lOLE1BQUEsQ0FBT2pWLE1BQUEsR0FBUzZXLGFBQUEsRUFBZTtNQUM5RHJQLE1BQUEsQ0FBT3diLE9BQUEsQ0FBUTtNQUNmZSxZQUFBLEdBQWV2YyxNQUFBLENBQU95YyxhQUFBLENBQWMxYSxlQUFBLENBQWdCaUwsUUFBQSxFQUFVLEdBQUcrSSxhQUFhLDZCQUE2QmdCLFNBQVMsSUFBSSxFQUFFLENBQUMsQ0FBQztNQUM1SDNhLFFBQUEsQ0FBUyxNQUFNO1FBQ2I0RCxNQUFBLENBQU9vYSxPQUFBLENBQVFtQyxZQUFZO01BQzdCLENBQUM7SUFDSCxPQUFPO01BQ0x2YyxNQUFBLENBQU9vYSxPQUFBLENBQVFtQyxZQUFZO0lBQzdCO0VBQ0YsT0FBTztJQUNMdmMsTUFBQSxDQUFPb2EsT0FBQSxDQUFRbUMsWUFBWTtFQUM3QjtBQUNGO0FBRUEsSUFBSUcsS0FBQSxHQUFRO0VBQ1Z0QyxPQUFBO0VBQ0FZLFdBQUE7RUFDQUcsU0FBQTtFQUNBTyxTQUFBO0VBQ0FRLFVBQUE7RUFDQUMsY0FBQTtFQUNBaEU7QUFDRjtBQUVBLFNBQVN3RSxXQUFXQyxjQUFBLEVBQWdCO0VBQ2xDLE1BQU01YyxNQUFBLEdBQVM7RUFDZixNQUFNO0lBQ0pRLE1BQUE7SUFDQXdNO0VBQ0YsSUFBSWhOLE1BQUE7RUFDSixJQUFJLENBQUNRLE1BQUEsQ0FBT2tRLElBQUEsSUFBUTFRLE1BQUEsQ0FBT3NOLE9BQUEsSUFBV3ROLE1BQUEsQ0FBT1EsTUFBQSxDQUFPOE0sT0FBQSxDQUFRQyxPQUFBLEVBQVM7RUFDckUsTUFBTUUsTUFBQSxHQUFTMUwsZUFBQSxDQUFnQmlMLFFBQUEsRUFBVSxJQUFJeE0sTUFBQSxDQUFPa04sVUFBVSxnQkFBZ0I7RUFDOUVELE1BQUEsQ0FBT25WLE9BQUEsQ0FBUSxDQUFDa0UsRUFBQSxFQUFJa1AsS0FBQSxLQUFVO0lBQzVCbFAsRUFBQSxDQUFHL0MsWUFBQSxDQUFhLDJCQUEyQmlTLEtBQUs7RUFDbEQsQ0FBQztFQUNEMUwsTUFBQSxDQUFPd2IsT0FBQSxDQUFRO0lBQ2JvQixjQUFBO0lBQ0E3QyxTQUFBLEVBQVd2WixNQUFBLENBQU9xTyxjQUFBLEdBQWlCLFNBQVk7RUFDakQsQ0FBQztBQUNIO0FBRUEsU0FBUzJNLFFBQVFsVyxLQUFBLEVBQU87RUFDdEIsSUFBSTtJQUNGc1gsY0FBQTtJQUNBeEMsT0FBQSxFQUFBeUMsUUFBQSxHQUFVO0lBQ1Y5QyxTQUFBO0lBQ0F2QixZQUFBLEVBQUFzRSxhQUFBO0lBQ0FDLGdCQUFBO0lBQ0F0RSxZQUFBO0lBQ0F1RTtFQUNGLElBQUkxWCxLQUFBLEtBQVUsU0FBUyxDQUFDLElBQUlBLEtBQUE7RUFDNUIsTUFBTXRGLE1BQUEsR0FBUztFQUNmLElBQUksQ0FBQ0EsTUFBQSxDQUFPUSxNQUFBLENBQU9rUSxJQUFBLEVBQU07RUFDekIxUSxNQUFBLENBQU8ySCxJQUFBLENBQUssZUFBZTtFQUMzQixNQUFNO0lBQ0o4RixNQUFBO0lBQ0FpTixjQUFBO0lBQ0FELGNBQUE7SUFDQXpOLFFBQUE7SUFDQXhNO0VBQ0YsSUFBSVIsTUFBQTtFQUNKQSxNQUFBLENBQU8wYSxjQUFBLEdBQWlCO0VBQ3hCMWEsTUFBQSxDQUFPeWEsY0FBQSxHQUFpQjtFQUN4QixJQUFJemEsTUFBQSxDQUFPc04sT0FBQSxJQUFXOU0sTUFBQSxDQUFPOE0sT0FBQSxDQUFRQyxPQUFBLEVBQVM7SUFDNUMsSUFBSXNQLFFBQUEsRUFBUztNQUNYLElBQUksQ0FBQ3JjLE1BQUEsQ0FBT3FPLGNBQUEsSUFBa0I3TyxNQUFBLENBQU95UixTQUFBLEtBQWMsR0FBRztRQUNwRHpSLE1BQUEsQ0FBT29hLE9BQUEsQ0FBUXBhLE1BQUEsQ0FBT3NOLE9BQUEsQ0FBUUcsTUFBQSxDQUFPalYsTUFBQSxFQUFRLEdBQUcsT0FBTyxJQUFJO01BQzdELFdBQVdnSSxNQUFBLENBQU9xTyxjQUFBLElBQWtCN08sTUFBQSxDQUFPeVIsU0FBQSxHQUFZalIsTUFBQSxDQUFPNk8sYUFBQSxFQUFlO1FBQzNFclAsTUFBQSxDQUFPb2EsT0FBQSxDQUFRcGEsTUFBQSxDQUFPc04sT0FBQSxDQUFRRyxNQUFBLENBQU9qVixNQUFBLEdBQVN3SCxNQUFBLENBQU95UixTQUFBLEVBQVcsR0FBRyxPQUFPLElBQUk7TUFDaEYsV0FBV3pSLE1BQUEsQ0FBT3lSLFNBQUEsS0FBY3pSLE1BQUEsQ0FBTzROLFFBQUEsQ0FBU3BWLE1BQUEsR0FBUyxHQUFHO1FBQzFEd0gsTUFBQSxDQUFPb2EsT0FBQSxDQUFRcGEsTUFBQSxDQUFPc04sT0FBQSxDQUFRdUQsWUFBQSxFQUFjLEdBQUcsT0FBTyxJQUFJO01BQzVEO0lBQ0Y7SUFDQTdRLE1BQUEsQ0FBTzBhLGNBQUEsR0FBaUJBLGNBQUE7SUFDeEIxYSxNQUFBLENBQU95YSxjQUFBLEdBQWlCQSxjQUFBO0lBQ3hCemEsTUFBQSxDQUFPMkgsSUFBQSxDQUFLLFNBQVM7SUFDckI7RUFDRjtFQUNBLE1BQU0wSCxhQUFBLEdBQWdCN08sTUFBQSxDQUFPNk8sYUFBQSxLQUFrQixTQUFTclAsTUFBQSxDQUFPd1csb0JBQUEsQ0FBcUIsSUFBSXJWLElBQUEsQ0FBS3lQLElBQUEsQ0FBSzdTLFVBQUEsQ0FBV3lDLE1BQUEsQ0FBTzZPLGFBQUEsRUFBZSxFQUFFLENBQUM7RUFDdEksSUFBSW1OLFlBQUEsR0FBZWhjLE1BQUEsQ0FBT2djLFlBQUEsSUFBZ0JuTixhQUFBO0VBQzFDLElBQUltTixZQUFBLEdBQWVoYyxNQUFBLENBQU8yUCxjQUFBLEtBQW1CLEdBQUc7SUFDOUNxTSxZQUFBLElBQWdCaGMsTUFBQSxDQUFPMlAsY0FBQSxHQUFpQnFNLFlBQUEsR0FBZWhjLE1BQUEsQ0FBTzJQLGNBQUE7RUFDaEU7RUFDQW5RLE1BQUEsQ0FBT3djLFlBQUEsR0FBZUEsWUFBQTtFQUN0QixNQUFNUyxvQkFBQSxHQUF1QixFQUFDO0VBQzlCLE1BQU1DLG1CQUFBLEdBQXNCLEVBQUM7RUFDN0IsSUFBSXJLLFdBQUEsR0FBYzdTLE1BQUEsQ0FBTzZTLFdBQUE7RUFDekIsSUFBSSxPQUFPa0ssZ0JBQUEsS0FBcUIsYUFBYTtJQUMzQ0EsZ0JBQUEsR0FBbUIvYyxNQUFBLENBQU95YyxhQUFBLENBQWN6YyxNQUFBLENBQU95TixNQUFBLENBQU94TyxNQUFBLENBQU96QyxFQUFBLElBQU1BLEVBQUEsQ0FBRzZGLFNBQUEsQ0FBVStQLFFBQUEsQ0FBUzVSLE1BQUEsQ0FBTzhVLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBQ3ZILE9BQU87SUFDTHpDLFdBQUEsR0FBY2tLLGdCQUFBO0VBQ2hCO0VBQ0EsTUFBTUksTUFBQSxHQUFTcEQsU0FBQSxLQUFjLFVBQVUsQ0FBQ0EsU0FBQTtFQUN4QyxNQUFNcUQsTUFBQSxHQUFTckQsU0FBQSxLQUFjLFVBQVUsQ0FBQ0EsU0FBQTtFQUN4QyxJQUFJc0QsZUFBQSxHQUFrQjtFQUN0QixJQUFJQyxjQUFBLEdBQWlCO0VBRXJCLElBQUlQLGdCQUFBLEdBQW1CUCxZQUFBLEVBQWM7SUFDbkNhLGVBQUEsR0FBa0JsYyxJQUFBLENBQUtDLEdBQUEsQ0FBSW9iLFlBQUEsR0FBZU8sZ0JBQUEsRUFBa0J2YyxNQUFBLENBQU8yUCxjQUFjO0lBQ2pGLFNBQVNyUixDQUFBLEdBQUksR0FBR0EsQ0FBQSxHQUFJMGQsWUFBQSxHQUFlTyxnQkFBQSxFQUFrQmplLENBQUEsSUFBSyxHQUFHO01BQzNELE1BQU00TSxLQUFBLEdBQVE1TSxDQUFBLEdBQUlxQyxJQUFBLENBQUs2TyxLQUFBLENBQU1sUixDQUFBLEdBQUkyTyxNQUFBLENBQU9qVixNQUFNLElBQUlpVixNQUFBLENBQU9qVixNQUFBO01BQ3pEeWtCLG9CQUFBLENBQXFCeFosSUFBQSxDQUFLZ0ssTUFBQSxDQUFPalYsTUFBQSxHQUFTa1QsS0FBQSxHQUFRLENBQUM7SUFDckQ7RUFDRixXQUFXcVIsZ0JBQUEsR0FBeUMvYyxNQUFBLENBQU95TixNQUFBLENBQU9qVixNQUFBLEdBQVNna0IsWUFBQSxHQUFlLEdBQUc7SUFDM0ZjLGNBQUEsR0FBaUJuYyxJQUFBLENBQUtDLEdBQUEsQ0FBSTJiLGdCQUFBLElBQW9CL2MsTUFBQSxDQUFPeU4sTUFBQSxDQUFPalYsTUFBQSxHQUFTZ2tCLFlBQUEsR0FBZSxJQUFJaGMsTUFBQSxDQUFPMlAsY0FBYztJQUM3RyxTQUFTclIsQ0FBQSxHQUFJLEdBQUdBLENBQUEsR0FBSXdlLGNBQUEsRUFBZ0J4ZSxDQUFBLElBQUssR0FBRztNQUMxQyxNQUFNNE0sS0FBQSxHQUFRNU0sQ0FBQSxHQUFJcUMsSUFBQSxDQUFLNk8sS0FBQSxDQUFNbFIsQ0FBQSxHQUFJMk8sTUFBQSxDQUFPalYsTUFBTSxJQUFJaVYsTUFBQSxDQUFPalYsTUFBQTtNQUN6RDBrQixtQkFBQSxDQUFvQnpaLElBQUEsQ0FBS2lJLEtBQUs7SUFDaEM7RUFDRjtFQUNBLElBQUkwUixNQUFBLEVBQVE7SUFDVkgsb0JBQUEsQ0FBcUIza0IsT0FBQSxDQUFRb1QsS0FBQSxJQUFTO01BQ3BDMUwsTUFBQSxDQUFPeU4sTUFBQSxDQUFPL0IsS0FBSyxFQUFFNlIsaUJBQUEsR0FBb0I7TUFDekN2USxRQUFBLENBQVN3USxPQUFBLENBQVF4ZCxNQUFBLENBQU95TixNQUFBLENBQU8vQixLQUFLLENBQUM7TUFDckMxTCxNQUFBLENBQU95TixNQUFBLENBQU8vQixLQUFLLEVBQUU2UixpQkFBQSxHQUFvQjtJQUMzQyxDQUFDO0VBQ0g7RUFDQSxJQUFJSixNQUFBLEVBQVE7SUFDVkQsbUJBQUEsQ0FBb0I1a0IsT0FBQSxDQUFRb1QsS0FBQSxJQUFTO01BQ25DMUwsTUFBQSxDQUFPeU4sTUFBQSxDQUFPL0IsS0FBSyxFQUFFNlIsaUJBQUEsR0FBb0I7TUFDekN2USxRQUFBLENBQVN5USxNQUFBLENBQU96ZCxNQUFBLENBQU95TixNQUFBLENBQU8vQixLQUFLLENBQUM7TUFDcEMxTCxNQUFBLENBQU95TixNQUFBLENBQU8vQixLQUFLLEVBQUU2UixpQkFBQSxHQUFvQjtJQUMzQyxDQUFDO0VBQ0g7RUFDQXZkLE1BQUEsQ0FBTzBkLFlBQUEsQ0FBYTtFQUNwQixJQUFJbGQsTUFBQSxDQUFPNk8sYUFBQSxLQUFrQixRQUFRO0lBQ25DclAsTUFBQSxDQUFPMk0sWUFBQSxDQUFhO0VBQ3RCO0VBQ0EsSUFBSW5NLE1BQUEsQ0FBT3VSLG1CQUFBLEVBQXFCO0lBQzlCL1IsTUFBQSxDQUFPZ1Msa0JBQUEsQ0FBbUI7RUFDNUI7RUFDQSxJQUFJNkssUUFBQSxFQUFTO0lBQ1gsSUFBSUksb0JBQUEsQ0FBcUJ6a0IsTUFBQSxHQUFTLEtBQUs0a0IsTUFBQSxFQUFRO01BQzdDLElBQUksT0FBT1IsY0FBQSxLQUFtQixhQUFhO1FBQ3pDLE1BQU1lLHFCQUFBLEdBQXdCM2QsTUFBQSxDQUFPNk4sVUFBQSxDQUFXZ0YsV0FBVztRQUMzRCxNQUFNK0ssaUJBQUEsR0FBb0I1ZCxNQUFBLENBQU82TixVQUFBLENBQVdnRixXQUFBLEdBQWN3SyxlQUFlO1FBQ3pFLE1BQU1RLElBQUEsR0FBT0QsaUJBQUEsR0FBb0JELHFCQUFBO1FBQ2pDLElBQUlYLFlBQUEsRUFBYztVQUNoQmhkLE1BQUEsQ0FBT3dZLFlBQUEsQ0FBYXhZLE1BQUEsQ0FBT0ksU0FBQSxHQUFZeWQsSUFBSTtRQUM3QyxPQUFPO1VBQ0w3ZCxNQUFBLENBQU9vYSxPQUFBLENBQVF2SCxXQUFBLEdBQWN3SyxlQUFBLEVBQWlCLEdBQUcsT0FBTyxJQUFJO1VBQzVELElBQUlQLGFBQUEsRUFBYztZQUNoQjljLE1BQUEsQ0FBTzhkLE9BQUEsQ0FBUTlkLE1BQUEsQ0FBT3NNLFlBQUEsQ0FBYSxJQUFJLFdBQVcsUUFBUSxLQUFLdVIsSUFBQTtZQUMvRDdkLE1BQUEsQ0FBTytkLGVBQUEsQ0FBZ0J4RixnQkFBQSxHQUFtQnZZLE1BQUEsQ0FBT0ksU0FBQTtVQUNuRDtRQUNGO01BQ0YsT0FBTztRQUNMLElBQUkwYyxhQUFBLEVBQWM7VUFDaEI5YyxNQUFBLENBQU9nYixXQUFBLENBQVk0QixjQUFBLEVBQWdCLEdBQUcsT0FBTyxJQUFJO1VBQ2pENWMsTUFBQSxDQUFPK2QsZUFBQSxDQUFnQnhGLGdCQUFBLEdBQW1CdlksTUFBQSxDQUFPSSxTQUFBO1FBQ25EO01BQ0Y7SUFDRixXQUFXOGMsbUJBQUEsQ0FBb0Ixa0IsTUFBQSxHQUFTLEtBQUsya0IsTUFBQSxFQUFRO01BQ25ELElBQUksT0FBT1AsY0FBQSxLQUFtQixhQUFhO1FBQ3pDLE1BQU1lLHFCQUFBLEdBQXdCM2QsTUFBQSxDQUFPNk4sVUFBQSxDQUFXZ0YsV0FBVztRQUMzRCxNQUFNK0ssaUJBQUEsR0FBb0I1ZCxNQUFBLENBQU82TixVQUFBLENBQVdnRixXQUFBLEdBQWN5SyxjQUFjO1FBQ3hFLE1BQU1PLElBQUEsR0FBT0QsaUJBQUEsR0FBb0JELHFCQUFBO1FBQ2pDLElBQUlYLFlBQUEsRUFBYztVQUNoQmhkLE1BQUEsQ0FBT3dZLFlBQUEsQ0FBYXhZLE1BQUEsQ0FBT0ksU0FBQSxHQUFZeWQsSUFBSTtRQUM3QyxPQUFPO1VBQ0w3ZCxNQUFBLENBQU9vYSxPQUFBLENBQVF2SCxXQUFBLEdBQWN5SyxjQUFBLEVBQWdCLEdBQUcsT0FBTyxJQUFJO1VBQzNELElBQUlSLGFBQUEsRUFBYztZQUNoQjljLE1BQUEsQ0FBTzhkLE9BQUEsQ0FBUTlkLE1BQUEsQ0FBT3NNLFlBQUEsQ0FBYSxJQUFJLFdBQVcsUUFBUSxLQUFLdVIsSUFBQTtZQUMvRDdkLE1BQUEsQ0FBTytkLGVBQUEsQ0FBZ0J4RixnQkFBQSxHQUFtQnZZLE1BQUEsQ0FBT0ksU0FBQTtVQUNuRDtRQUNGO01BQ0YsT0FBTztRQUNMSixNQUFBLENBQU9nYixXQUFBLENBQVk0QixjQUFBLEVBQWdCLEdBQUcsT0FBTyxJQUFJO01BQ25EO0lBQ0Y7RUFDRjtFQUNBNWMsTUFBQSxDQUFPMGEsY0FBQSxHQUFpQkEsY0FBQTtFQUN4QjFhLE1BQUEsQ0FBT3lhLGNBQUEsR0FBaUJBLGNBQUE7RUFDeEIsSUFBSXphLE1BQUEsQ0FBT2dlLFVBQUEsSUFBY2hlLE1BQUEsQ0FBT2dlLFVBQUEsQ0FBV0MsT0FBQSxJQUFXLENBQUN4RixZQUFBLEVBQWM7SUFDbkUsTUFBTXlGLFVBQUEsR0FBYTtNQUNqQnRCLGNBQUE7TUFDQTdDLFNBQUE7TUFDQXZCLFlBQUEsRUFBQXNFLGFBQUE7TUFDQUMsZ0JBQUE7TUFDQXRFLFlBQUEsRUFBYztJQUNoQjtJQUNBLElBQUlsVyxLQUFBLENBQU1DLE9BQUEsQ0FBUXhDLE1BQUEsQ0FBT2dlLFVBQUEsQ0FBV0MsT0FBTyxHQUFHO01BQzVDamUsTUFBQSxDQUFPZ2UsVUFBQSxDQUFXQyxPQUFBLENBQVEzbEIsT0FBQSxDQUFRNmxCLENBQUEsSUFBSztRQUNyQyxJQUFJLENBQUNBLENBQUEsQ0FBRXBXLFNBQUEsSUFBYW9XLENBQUEsQ0FBRTNkLE1BQUEsQ0FBT2tRLElBQUEsRUFBTXlOLENBQUEsQ0FBRTNDLE9BQUEsQ0FBUTtVQUMzQyxHQUFHMEMsVUFBQTtVQUNIOUQsT0FBQSxFQUFTK0QsQ0FBQSxDQUFFM2QsTUFBQSxDQUFPNk8sYUFBQSxLQUFrQjdPLE1BQUEsQ0FBTzZPLGFBQUEsR0FBZ0J3TixRQUFBLEdBQVU7UUFDdkUsQ0FBQztNQUNILENBQUM7SUFDSCxXQUFXN2MsTUFBQSxDQUFPZ2UsVUFBQSxDQUFXQyxPQUFBLFlBQW1CamUsTUFBQSxDQUFPaEksV0FBQSxJQUFlZ0ksTUFBQSxDQUFPZ2UsVUFBQSxDQUFXQyxPQUFBLENBQVF6ZCxNQUFBLENBQU9rUSxJQUFBLEVBQU07TUFDM0cxUSxNQUFBLENBQU9nZSxVQUFBLENBQVdDLE9BQUEsQ0FBUXpDLE9BQUEsQ0FBUTtRQUNoQyxHQUFHMEMsVUFBQTtRQUNIOUQsT0FBQSxFQUFTcGEsTUFBQSxDQUFPZ2UsVUFBQSxDQUFXQyxPQUFBLENBQVF6ZCxNQUFBLENBQU82TyxhQUFBLEtBQWtCN08sTUFBQSxDQUFPNk8sYUFBQSxHQUFnQndOLFFBQUEsR0FBVTtNQUMvRixDQUFDO0lBQ0g7RUFDRjtFQUNBN2MsTUFBQSxDQUFPMkgsSUFBQSxDQUFLLFNBQVM7QUFDdkI7QUFFQSxTQUFTeVcsWUFBQSxFQUFjO0VBQ3JCLE1BQU1wZSxNQUFBLEdBQVM7RUFDZixNQUFNO0lBQ0pRLE1BQUE7SUFDQXdNO0VBQ0YsSUFBSWhOLE1BQUE7RUFDSixJQUFJLENBQUNRLE1BQUEsQ0FBT2tRLElBQUEsSUFBUTFRLE1BQUEsQ0FBT3NOLE9BQUEsSUFBV3ROLE1BQUEsQ0FBT1EsTUFBQSxDQUFPOE0sT0FBQSxDQUFRQyxPQUFBLEVBQVM7RUFDckV2TixNQUFBLENBQU8wZCxZQUFBLENBQWE7RUFDcEIsTUFBTVcsY0FBQSxHQUFpQixFQUFDO0VBQ3hCcmUsTUFBQSxDQUFPeU4sTUFBQSxDQUFPblYsT0FBQSxDQUFRdUosT0FBQSxJQUFXO0lBQy9CLE1BQU02SixLQUFBLEdBQVEsT0FBTzdKLE9BQUEsQ0FBUXljLGdCQUFBLEtBQXFCLGNBQWN6YyxPQUFBLENBQVE4VixZQUFBLENBQWEseUJBQXlCLElBQUksSUFBSTlWLE9BQUEsQ0FBUXljLGdCQUFBO0lBQzlIRCxjQUFBLENBQWUzUyxLQUFLLElBQUk3SixPQUFBO0VBQzFCLENBQUM7RUFDRDdCLE1BQUEsQ0FBT3lOLE1BQUEsQ0FBT25WLE9BQUEsQ0FBUXVKLE9BQUEsSUFBVztJQUMvQkEsT0FBQSxDQUFRdVUsZUFBQSxDQUFnQix5QkFBeUI7RUFDbkQsQ0FBQztFQUNEaUksY0FBQSxDQUFlL2xCLE9BQUEsQ0FBUXVKLE9BQUEsSUFBVztJQUNoQ21MLFFBQUEsQ0FBU3lRLE1BQUEsQ0FBTzViLE9BQU87RUFDekIsQ0FBQztFQUNEN0IsTUFBQSxDQUFPMGQsWUFBQSxDQUFhO0VBQ3BCMWQsTUFBQSxDQUFPb2EsT0FBQSxDQUFRcGEsTUFBQSxDQUFPK1csU0FBQSxFQUFXLENBQUM7QUFDcEM7QUFFQSxJQUFJckcsSUFBQSxHQUFPO0VBQ1RpTSxVQUFBO0VBQ0FuQixPQUFBO0VBQ0E0QztBQUNGO0FBRUEsU0FBU0csY0FBY0MsTUFBQSxFQUFRO0VBQzdCLE1BQU14ZSxNQUFBLEdBQVM7RUFDZixJQUFJLENBQUNBLE1BQUEsQ0FBT1EsTUFBQSxDQUFPaWUsYUFBQSxJQUFpQnplLE1BQUEsQ0FBT1EsTUFBQSxDQUFPcVIsYUFBQSxJQUFpQjdSLE1BQUEsQ0FBTzBlLFFBQUEsSUFBWTFlLE1BQUEsQ0FBT1EsTUFBQSxDQUFPc08sT0FBQSxFQUFTO0VBQzdHLE1BQU10UyxFQUFBLEdBQUt3RCxNQUFBLENBQU9RLE1BQUEsQ0FBT21lLGlCQUFBLEtBQXNCLGNBQWMzZSxNQUFBLENBQU94RCxFQUFBLEdBQUt3RCxNQUFBLENBQU9VLFNBQUE7RUFDaEYsSUFBSVYsTUFBQSxDQUFPZ1QsU0FBQSxFQUFXO0lBQ3BCaFQsTUFBQSxDQUFPeUosbUJBQUEsR0FBc0I7RUFDL0I7RUFDQWpOLEVBQUEsQ0FBR2hELEtBQUEsQ0FBTW9sQixNQUFBLEdBQVM7RUFDbEJwaUIsRUFBQSxDQUFHaEQsS0FBQSxDQUFNb2xCLE1BQUEsR0FBU0osTUFBQSxHQUFTLGFBQWE7RUFDeEMsSUFBSXhlLE1BQUEsQ0FBT2dULFNBQUEsRUFBVztJQUNwQnRYLHFCQUFBLENBQXNCLE1BQU07TUFDMUJzRSxNQUFBLENBQU95SixtQkFBQSxHQUFzQjtJQUMvQixDQUFDO0VBQ0g7QUFDRjtBQUVBLFNBQVNvVixnQkFBQSxFQUFrQjtFQUN6QixNQUFNN2UsTUFBQSxHQUFTO0VBQ2YsSUFBSUEsTUFBQSxDQUFPUSxNQUFBLENBQU9xUixhQUFBLElBQWlCN1IsTUFBQSxDQUFPMGUsUUFBQSxJQUFZMWUsTUFBQSxDQUFPUSxNQUFBLENBQU9zTyxPQUFBLEVBQVM7SUFDM0U7RUFDRjtFQUNBLElBQUk5TyxNQUFBLENBQU9nVCxTQUFBLEVBQVc7SUFDcEJoVCxNQUFBLENBQU95SixtQkFBQSxHQUFzQjtFQUMvQjtFQUNBekosTUFBQSxDQUFPQSxNQUFBLENBQU9RLE1BQUEsQ0FBT21lLGlCQUFBLEtBQXNCLGNBQWMsT0FBTyxXQUFXLEVBQUVubEIsS0FBQSxDQUFNb2xCLE1BQUEsR0FBUztFQUM1RixJQUFJNWUsTUFBQSxDQUFPZ1QsU0FBQSxFQUFXO0lBQ3BCdFgscUJBQUEsQ0FBc0IsTUFBTTtNQUMxQnNFLE1BQUEsQ0FBT3lKLG1CQUFBLEdBQXNCO0lBQy9CLENBQUM7RUFDSDtBQUNGO0FBRUEsSUFBSXFWLFVBQUEsR0FBYTtFQUNmUCxhQUFBO0VBQ0FNO0FBQ0Y7QUFHQSxTQUFTRSxlQUFlOWMsUUFBQSxFQUFVK2MsSUFBQSxFQUFNO0VBQ3RDLElBQUlBLElBQUEsS0FBUyxRQUFRO0lBQ25CQSxJQUFBLEdBQU87RUFDVDtFQUNBLFNBQVNDLGNBQWN6aUIsRUFBQSxFQUFJO0lBQ3pCLElBQUksQ0FBQ0EsRUFBQSxJQUFNQSxFQUFBLEtBQU9sQyxXQUFBLENBQVksS0FBS2tDLEVBQUEsS0FBT1YsU0FBQSxDQUFVLEdBQUcsT0FBTztJQUM5RCxJQUFJVSxFQUFBLENBQUcwaUIsWUFBQSxFQUFjMWlCLEVBQUEsR0FBS0EsRUFBQSxDQUFHMGlCLFlBQUE7SUFDN0IsTUFBTUMsS0FBQSxHQUFRM2lCLEVBQUEsQ0FBR3daLE9BQUEsQ0FBUS9ULFFBQVE7SUFDakMsSUFBSSxDQUFDa2QsS0FBQSxJQUFTLENBQUMzaUIsRUFBQSxDQUFHNGlCLFdBQUEsRUFBYTtNQUM3QixPQUFPO0lBQ1Q7SUFDQSxPQUFPRCxLQUFBLElBQVNGLGFBQUEsQ0FBY3ppQixFQUFBLENBQUc0aUIsV0FBQSxDQUFZLEVBQUVybEIsSUFBSTtFQUNyRDtFQUNBLE9BQU9rbEIsYUFBQSxDQUFjRCxJQUFJO0FBQzNCO0FBQ0EsU0FBU0ssYUFBYXZVLEtBQUEsRUFBTztFQUMzQixNQUFNOUssTUFBQSxHQUFTO0VBQ2YsTUFBTTBDLFNBQUEsR0FBV3BJLFdBQUEsQ0FBWTtFQUM3QixNQUFNbUMsT0FBQSxHQUFTWCxTQUFBLENBQVU7RUFDekIsTUFBTThQLElBQUEsR0FBTzVMLE1BQUEsQ0FBTytkLGVBQUE7RUFDcEJuUyxJQUFBLENBQUswVCxPQUFBLENBQVE3YixJQUFBLENBQUtxSCxLQUFLO0VBQ3ZCLE1BQU07SUFDSnRLLE1BQUE7SUFDQXNkLE9BQUE7SUFDQXZRO0VBQ0YsSUFBSXZOLE1BQUE7RUFDSixJQUFJLENBQUN1TixPQUFBLEVBQVM7RUFDZCxJQUFJLENBQUMvTSxNQUFBLENBQU9pZSxhQUFBLElBQWlCM1QsS0FBQSxDQUFNeVUsV0FBQSxLQUFnQixTQUFTO0VBQzVELElBQUl2ZixNQUFBLENBQU9tWixTQUFBLElBQWEzWSxNQUFBLENBQU80WSw4QkFBQSxFQUFnQztJQUM3RDtFQUNGO0VBQ0EsSUFBSSxDQUFDcFosTUFBQSxDQUFPbVosU0FBQSxJQUFhM1ksTUFBQSxDQUFPc08sT0FBQSxJQUFXdE8sTUFBQSxDQUFPa1EsSUFBQSxFQUFNO0lBQ3REMVEsTUFBQSxDQUFPd2IsT0FBQSxDQUFRO0VBQ2pCO0VBQ0EsSUFBSXJmLENBQUEsR0FBSTJPLEtBQUE7RUFDUixJQUFJM08sQ0FBQSxDQUFFcWpCLGFBQUEsRUFBZXJqQixDQUFBLEdBQUlBLENBQUEsQ0FBRXFqQixhQUFBO0VBQzNCLElBQUlDLFFBQUEsR0FBV3RqQixDQUFBLENBQUVoRSxNQUFBO0VBQ2pCLElBQUlxSSxNQUFBLENBQU9tZSxpQkFBQSxLQUFzQixXQUFXO0lBQzFDLElBQUksQ0FBQzNlLE1BQUEsQ0FBT1UsU0FBQSxDQUFVMFIsUUFBQSxDQUFTcU4sUUFBUSxHQUFHO0VBQzVDO0VBQ0EsSUFBSSxXQUFXdGpCLENBQUEsSUFBS0EsQ0FBQSxDQUFFdWpCLEtBQUEsS0FBVSxHQUFHO0VBQ25DLElBQUksWUFBWXZqQixDQUFBLElBQUtBLENBQUEsQ0FBRXdqQixNQUFBLEdBQVMsR0FBRztFQUNuQyxJQUFJL1QsSUFBQSxDQUFLZ1UsU0FBQSxJQUFhaFUsSUFBQSxDQUFLaVUsT0FBQSxFQUFTO0VBR3BDLE1BQU1DLG9CQUFBLEdBQXVCLENBQUMsQ0FBQ3RmLE1BQUEsQ0FBT3VmLGNBQUEsSUFBa0J2ZixNQUFBLENBQU91ZixjQUFBLEtBQW1CO0VBRWxGLE1BQU1DLFNBQUEsR0FBWWxWLEtBQUEsQ0FBTW1WLFlBQUEsR0FBZW5WLEtBQUEsQ0FBTW1WLFlBQUEsQ0FBYSxJQUFJblYsS0FBQSxDQUFNZ04sSUFBQTtFQUNwRSxJQUFJZ0ksb0JBQUEsSUFBd0IzakIsQ0FBQSxDQUFFaEUsTUFBQSxJQUFVZ0UsQ0FBQSxDQUFFaEUsTUFBQSxDQUFPMkosVUFBQSxJQUFja2UsU0FBQSxFQUFXO0lBQ3hFUCxRQUFBLEdBQVdPLFNBQUEsQ0FBVSxDQUFDO0VBQ3hCO0VBQ0EsTUFBTUUsaUJBQUEsR0FBb0IxZixNQUFBLENBQU8wZixpQkFBQSxHQUFvQjFmLE1BQUEsQ0FBTzBmLGlCQUFBLEdBQW9CLElBQUkxZixNQUFBLENBQU91ZixjQUFjO0VBQ3pHLE1BQU1JLGNBQUEsR0FBaUIsQ0FBQyxFQUFFaGtCLENBQUEsQ0FBRWhFLE1BQUEsSUFBVWdFLENBQUEsQ0FBRWhFLE1BQUEsQ0FBTzJKLFVBQUE7RUFHL0MsSUFBSXRCLE1BQUEsQ0FBTzRmLFNBQUEsS0FBY0QsY0FBQSxHQUFpQnBCLGNBQUEsQ0FBZW1CLGlCQUFBLEVBQW1CVCxRQUFRLElBQUlBLFFBQUEsQ0FBU3pKLE9BQUEsQ0FBUWtLLGlCQUFpQixJQUFJO0lBQzVIbGdCLE1BQUEsQ0FBT3FnQixVQUFBLEdBQWE7SUFDcEI7RUFDRjtFQUNBLElBQUk3ZixNQUFBLENBQU84ZixZQUFBLEVBQWM7SUFDdkIsSUFBSSxDQUFDYixRQUFBLENBQVN6SixPQUFBLENBQVF4VixNQUFBLENBQU84ZixZQUFZLEdBQUc7RUFDOUM7RUFDQXhDLE9BQUEsQ0FBUXlDLFFBQUEsR0FBV3BrQixDQUFBLENBQUVxa0IsS0FBQTtFQUNyQjFDLE9BQUEsQ0FBUTJDLFFBQUEsR0FBV3RrQixDQUFBLENBQUV1a0IsS0FBQTtFQUNyQixNQUFNQyxNQUFBLEdBQVM3QyxPQUFBLENBQVF5QyxRQUFBO0VBQ3ZCLE1BQU1LLE1BQUEsR0FBUzlDLE9BQUEsQ0FBUTJDLFFBQUE7RUFJdkIsTUFBTUksa0JBQUEsR0FBcUJyZ0IsTUFBQSxDQUFPcWdCLGtCQUFBLElBQXNCcmdCLE1BQUEsQ0FBT3NnQixxQkFBQTtFQUMvRCxNQUFNQyxrQkFBQSxHQUFxQnZnQixNQUFBLENBQU91Z0Isa0JBQUEsSUFBc0J2Z0IsTUFBQSxDQUFPd2dCLHFCQUFBO0VBQy9ELElBQUlILGtCQUFBLEtBQXVCRixNQUFBLElBQVVJLGtCQUFBLElBQXNCSixNQUFBLElBQVVsa0IsT0FBQSxDQUFPd2tCLFVBQUEsR0FBYUYsa0JBQUEsR0FBcUI7SUFDNUcsSUFBSUYsa0JBQUEsS0FBdUIsV0FBVztNQUNwQy9WLEtBQUEsQ0FBTW9XLGNBQUEsQ0FBZTtJQUN2QixPQUFPO01BQ0w7SUFDRjtFQUNGO0VBQ0FqcEIsTUFBQSxDQUFPeVUsTUFBQSxDQUFPZCxJQUFBLEVBQU07SUFDbEJnVSxTQUFBLEVBQVc7SUFDWEMsT0FBQSxFQUFTO0lBQ1RzQixtQkFBQSxFQUFxQjtJQUNyQkMsV0FBQSxFQUFhO0lBQ2JDLFdBQUEsRUFBYTtFQUNmLENBQUM7RUFDRHZELE9BQUEsQ0FBUTZDLE1BQUEsR0FBU0EsTUFBQTtFQUNqQjdDLE9BQUEsQ0FBUThDLE1BQUEsR0FBU0EsTUFBQTtFQUNqQmhWLElBQUEsQ0FBSzBWLGNBQUEsR0FBaUJobEIsR0FBQSxDQUFJO0VBQzFCMEQsTUFBQSxDQUFPcWdCLFVBQUEsR0FBYTtFQUNwQnJnQixNQUFBLENBQU9tTSxVQUFBLENBQVc7RUFDbEJuTSxNQUFBLENBQU91aEIsY0FBQSxHQUFpQjtFQUN4QixJQUFJL2dCLE1BQUEsQ0FBTzRiLFNBQUEsR0FBWSxHQUFHeFEsSUFBQSxDQUFLNFYsa0JBQUEsR0FBcUI7RUFDcEQsSUFBSU4sY0FBQSxHQUFpQjtFQUNyQixJQUFJekIsUUFBQSxDQUFTdmQsT0FBQSxDQUFRMEosSUFBQSxDQUFLNlYsaUJBQWlCLEdBQUc7SUFDNUNQLGNBQUEsR0FBaUI7SUFDakIsSUFBSXpCLFFBQUEsQ0FBUzFtQixRQUFBLEtBQWEsVUFBVTtNQUNsQzZTLElBQUEsQ0FBS2dVLFNBQUEsR0FBWTtJQUNuQjtFQUNGO0VBQ0EsSUFBSWxkLFNBQUEsQ0FBUzdKLGFBQUEsSUFBaUI2SixTQUFBLENBQVM3SixhQUFBLENBQWNxSixPQUFBLENBQVEwSixJQUFBLENBQUs2VixpQkFBaUIsS0FBSy9lLFNBQUEsQ0FBUzdKLGFBQUEsS0FBa0I0bUIsUUFBQSxFQUFVO0lBQzNIL2MsU0FBQSxDQUFTN0osYUFBQSxDQUFjQyxJQUFBLENBQUs7RUFDOUI7RUFDQSxNQUFNNG9CLG9CQUFBLEdBQXVCUixjQUFBLElBQWtCbGhCLE1BQUEsQ0FBTzJoQixjQUFBLElBQWtCbmhCLE1BQUEsQ0FBT29oQix3QkFBQTtFQUMvRSxLQUFLcGhCLE1BQUEsQ0FBT3FoQiw2QkFBQSxJQUFpQ0gsb0JBQUEsS0FBeUIsQ0FBQ2pDLFFBQUEsQ0FBU3FDLGlCQUFBLEVBQW1CO0lBQ2pHM2xCLENBQUEsQ0FBRStrQixjQUFBLENBQWU7RUFDbkI7RUFDQSxJQUFJMWdCLE1BQUEsQ0FBT3VoQixRQUFBLElBQVl2aEIsTUFBQSxDQUFPdWhCLFFBQUEsQ0FBU3hVLE9BQUEsSUFBV3ZOLE1BQUEsQ0FBTytoQixRQUFBLElBQVkvaEIsTUFBQSxDQUFPbVosU0FBQSxJQUFhLENBQUMzWSxNQUFBLENBQU9zTyxPQUFBLEVBQVM7SUFDeEc5TyxNQUFBLENBQU8raEIsUUFBQSxDQUFTMUMsWUFBQSxDQUFhO0VBQy9CO0VBQ0FyZixNQUFBLENBQU8ySCxJQUFBLENBQUssY0FBY3hMLENBQUM7QUFDN0I7QUFFQSxTQUFTNmxCLFlBQVlsWCxLQUFBLEVBQU87RUFDMUIsTUFBTXBJLFNBQUEsR0FBV3BJLFdBQUEsQ0FBWTtFQUM3QixNQUFNMEYsTUFBQSxHQUFTO0VBQ2YsTUFBTTRMLElBQUEsR0FBTzVMLE1BQUEsQ0FBTytkLGVBQUE7RUFDcEIsTUFBTTtJQUNKdmQsTUFBQTtJQUNBc2QsT0FBQTtJQUNBNVEsWUFBQSxFQUFjQyxHQUFBO0lBQ2RJO0VBQ0YsSUFBSXZOLE1BQUE7RUFDSixJQUFJLENBQUN1TixPQUFBLEVBQVM7RUFDZCxJQUFJLENBQUMvTSxNQUFBLENBQU9pZSxhQUFBLElBQWlCM1QsS0FBQSxDQUFNeVUsV0FBQSxLQUFnQixTQUFTO0VBQzVELElBQUlwakIsQ0FBQSxHQUFJMk8sS0FBQTtFQUNSLElBQUkzTyxDQUFBLENBQUVxakIsYUFBQSxFQUFlcmpCLENBQUEsR0FBSUEsQ0FBQSxDQUFFcWpCLGFBQUE7RUFDM0IsSUFBSSxDQUFDNVQsSUFBQSxDQUFLZ1UsU0FBQSxFQUFXO0lBQ25CLElBQUloVSxJQUFBLENBQUt5VixXQUFBLElBQWV6VixJQUFBLENBQUt3VixXQUFBLEVBQWE7TUFDeENwaEIsTUFBQSxDQUFPMkgsSUFBQSxDQUFLLHFCQUFxQnhMLENBQUM7SUFDcEM7SUFDQTtFQUNGO0VBQ0EsTUFBTThsQixZQUFBLEdBQWVyVyxJQUFBLENBQUswVCxPQUFBLENBQVE0QyxTQUFBLENBQVVDLFFBQUEsSUFBWUEsUUFBQSxDQUFTQyxTQUFBLEtBQWNqbUIsQ0FBQSxDQUFFaW1CLFNBQVM7RUFDMUYsSUFBSUgsWUFBQSxJQUFnQixHQUFHclcsSUFBQSxDQUFLMFQsT0FBQSxDQUFRMkMsWUFBWSxJQUFJOWxCLENBQUE7RUFDcEQsTUFBTWttQixXQUFBLEdBQWN6VyxJQUFBLENBQUswVCxPQUFBLENBQVE5bUIsTUFBQSxHQUFTLElBQUlvVCxJQUFBLENBQUswVCxPQUFBLENBQVEsQ0FBQyxJQUFJbmpCLENBQUE7RUFDaEUsTUFBTXFrQixLQUFBLEdBQVE2QixXQUFBLENBQVk3QixLQUFBO0VBQzFCLE1BQU1FLEtBQUEsR0FBUTJCLFdBQUEsQ0FBWTNCLEtBQUE7RUFDMUIsSUFBSXZrQixDQUFBLENBQUVtbUIsdUJBQUEsRUFBeUI7SUFDN0J4RSxPQUFBLENBQVE2QyxNQUFBLEdBQVNILEtBQUE7SUFDakIxQyxPQUFBLENBQVE4QyxNQUFBLEdBQVNGLEtBQUE7SUFDakI7RUFDRjtFQUNBLElBQUksQ0FBQzFnQixNQUFBLENBQU8yaEIsY0FBQSxFQUFnQjtJQUMxQixJQUFJLENBQUN4bEIsQ0FBQSxDQUFFaEUsTUFBQSxDQUFPK0osT0FBQSxDQUFRMEosSUFBQSxDQUFLNlYsaUJBQWlCLEdBQUc7TUFDN0N6aEIsTUFBQSxDQUFPcWdCLFVBQUEsR0FBYTtJQUN0QjtJQUNBLElBQUl6VSxJQUFBLENBQUtnVSxTQUFBLEVBQVc7TUFDbEIzbkIsTUFBQSxDQUFPeVUsTUFBQSxDQUFPb1IsT0FBQSxFQUFTO1FBQ3JCNkMsTUFBQSxFQUFRSCxLQUFBO1FBQ1JJLE1BQUEsRUFBUUYsS0FBQTtRQUNSNkIsS0FBQSxFQUFPdmlCLE1BQUEsQ0FBTzhkLE9BQUEsQ0FBUXlDLFFBQUE7UUFDdEJpQyxLQUFBLEVBQU94aUIsTUFBQSxDQUFPOGQsT0FBQSxDQUFRMkMsUUFBQTtRQUN0QkYsUUFBQSxFQUFVQyxLQUFBO1FBQ1ZDLFFBQUEsRUFBVUM7TUFDWixDQUFDO01BQ0Q5VSxJQUFBLENBQUswVixjQUFBLEdBQWlCaGxCLEdBQUEsQ0FBSTtJQUM1QjtJQUNBO0VBQ0Y7RUFDQSxJQUFJa0UsTUFBQSxDQUFPaWlCLG1CQUFBLElBQXVCLENBQUNqaUIsTUFBQSxDQUFPa1EsSUFBQSxFQUFNO0lBQzlDLElBQUkxUSxNQUFBLENBQU91TSxVQUFBLENBQVcsR0FBRztNQUV2QixJQUFJbVUsS0FBQSxHQUFRNUMsT0FBQSxDQUFROEMsTUFBQSxJQUFVNWdCLE1BQUEsQ0FBT0ksU0FBQSxJQUFhSixNQUFBLENBQU9xVSxZQUFBLENBQWEsS0FBS3FNLEtBQUEsR0FBUTVDLE9BQUEsQ0FBUThDLE1BQUEsSUFBVTVnQixNQUFBLENBQU9JLFNBQUEsSUFBYUosTUFBQSxDQUFPNFQsWUFBQSxDQUFhLEdBQUc7UUFDOUloSSxJQUFBLENBQUtnVSxTQUFBLEdBQVk7UUFDakJoVSxJQUFBLENBQUtpVSxPQUFBLEdBQVU7UUFDZjtNQUNGO0lBQ0YsV0FBV1csS0FBQSxHQUFRMUMsT0FBQSxDQUFRNkMsTUFBQSxJQUFVM2dCLE1BQUEsQ0FBT0ksU0FBQSxJQUFhSixNQUFBLENBQU9xVSxZQUFBLENBQWEsS0FBS21NLEtBQUEsR0FBUTFDLE9BQUEsQ0FBUTZDLE1BQUEsSUFBVTNnQixNQUFBLENBQU9JLFNBQUEsSUFBYUosTUFBQSxDQUFPNFQsWUFBQSxDQUFhLEdBQUc7TUFDcko7SUFDRjtFQUNGO0VBQ0EsSUFBSWxSLFNBQUEsQ0FBUzdKLGFBQUEsRUFBZTtJQUMxQixJQUFJc0QsQ0FBQSxDQUFFaEUsTUFBQSxLQUFXdUssU0FBQSxDQUFTN0osYUFBQSxJQUFpQnNELENBQUEsQ0FBRWhFLE1BQUEsQ0FBTytKLE9BQUEsQ0FBUTBKLElBQUEsQ0FBSzZWLGlCQUFpQixHQUFHO01BQ25GN1YsSUFBQSxDQUFLaVUsT0FBQSxHQUFVO01BQ2Y3ZixNQUFBLENBQU9xZ0IsVUFBQSxHQUFhO01BQ3BCO0lBQ0Y7RUFDRjtFQUNBLElBQUl6VSxJQUFBLENBQUt1VixtQkFBQSxFQUFxQjtJQUM1Qm5oQixNQUFBLENBQU8ySCxJQUFBLENBQUssYUFBYXhMLENBQUM7RUFDNUI7RUFDQSxJQUFJQSxDQUFBLENBQUV1bUIsYUFBQSxJQUFpQnZtQixDQUFBLENBQUV1bUIsYUFBQSxDQUFjbHFCLE1BQUEsR0FBUyxHQUFHO0VBQ25Ec2xCLE9BQUEsQ0FBUXlDLFFBQUEsR0FBV0MsS0FBQTtFQUNuQjFDLE9BQUEsQ0FBUTJDLFFBQUEsR0FBV0MsS0FBQTtFQUNuQixNQUFNaUMsS0FBQSxHQUFRN0UsT0FBQSxDQUFReUMsUUFBQSxHQUFXekMsT0FBQSxDQUFRNkMsTUFBQTtFQUN6QyxNQUFNaUMsS0FBQSxHQUFROUUsT0FBQSxDQUFRMkMsUUFBQSxHQUFXM0MsT0FBQSxDQUFROEMsTUFBQTtFQUN6QyxJQUFJNWdCLE1BQUEsQ0FBT1EsTUFBQSxDQUFPNGIsU0FBQSxJQUFhamIsSUFBQSxDQUFLMGhCLElBQUEsQ0FBS0YsS0FBQSxJQUFTLElBQUlDLEtBQUEsSUFBUyxDQUFDLElBQUk1aUIsTUFBQSxDQUFPUSxNQUFBLENBQU80YixTQUFBLEVBQVc7RUFDN0YsSUFBSSxPQUFPeFEsSUFBQSxDQUFLd1YsV0FBQSxLQUFnQixhQUFhO0lBQzNDLElBQUkwQixVQUFBO0lBQ0osSUFBSTlpQixNQUFBLENBQU9zTSxZQUFBLENBQWEsS0FBS3dSLE9BQUEsQ0FBUTJDLFFBQUEsS0FBYTNDLE9BQUEsQ0FBUThDLE1BQUEsSUFBVTVnQixNQUFBLENBQU91TSxVQUFBLENBQVcsS0FBS3VSLE9BQUEsQ0FBUXlDLFFBQUEsS0FBYXpDLE9BQUEsQ0FBUTZDLE1BQUEsRUFBUTtNQUM5SC9VLElBQUEsQ0FBS3dWLFdBQUEsR0FBYztJQUNyQixPQUFPO01BRUwsSUFBSXVCLEtBQUEsR0FBUUEsS0FBQSxHQUFRQyxLQUFBLEdBQVFBLEtBQUEsSUFBUyxJQUFJO1FBQ3ZDRSxVQUFBLEdBQWEzaEIsSUFBQSxDQUFLNGhCLEtBQUEsQ0FBTTVoQixJQUFBLENBQUsrTyxHQUFBLENBQUkwUyxLQUFLLEdBQUd6aEIsSUFBQSxDQUFLK08sR0FBQSxDQUFJeVMsS0FBSyxDQUFDLElBQUksTUFBTXhoQixJQUFBLENBQUtLLEVBQUE7UUFDdkVvSyxJQUFBLENBQUt3VixXQUFBLEdBQWNwaEIsTUFBQSxDQUFPc00sWUFBQSxDQUFhLElBQUl3VyxVQUFBLEdBQWF0aUIsTUFBQSxDQUFPc2lCLFVBQUEsR0FBYSxLQUFLQSxVQUFBLEdBQWF0aUIsTUFBQSxDQUFPc2lCLFVBQUE7TUFDdkc7SUFDRjtFQUNGO0VBQ0EsSUFBSWxYLElBQUEsQ0FBS3dWLFdBQUEsRUFBYTtJQUNwQnBoQixNQUFBLENBQU8ySCxJQUFBLENBQUsscUJBQXFCeEwsQ0FBQztFQUNwQztFQUNBLElBQUksT0FBT3lQLElBQUEsQ0FBS3lWLFdBQUEsS0FBZ0IsYUFBYTtJQUMzQyxJQUFJdkQsT0FBQSxDQUFReUMsUUFBQSxLQUFhekMsT0FBQSxDQUFRNkMsTUFBQSxJQUFVN0MsT0FBQSxDQUFRMkMsUUFBQSxLQUFhM0MsT0FBQSxDQUFROEMsTUFBQSxFQUFRO01BQzlFaFYsSUFBQSxDQUFLeVYsV0FBQSxHQUFjO0lBQ3JCO0VBQ0Y7RUFDQSxJQUFJelYsSUFBQSxDQUFLd1YsV0FBQSxJQUFlcGhCLE1BQUEsQ0FBT2dqQixJQUFBLElBQVFoakIsTUFBQSxDQUFPUSxNQUFBLENBQU93aUIsSUFBQSxJQUFRaGpCLE1BQUEsQ0FBT1EsTUFBQSxDQUFPd2lCLElBQUEsQ0FBS3pWLE9BQUEsSUFBVzNCLElBQUEsQ0FBSzBULE9BQUEsQ0FBUTltQixNQUFBLEdBQVMsR0FBRztJQUNsSG9ULElBQUEsQ0FBS2dVLFNBQUEsR0FBWTtJQUNqQjtFQUNGO0VBQ0EsSUFBSSxDQUFDaFUsSUFBQSxDQUFLeVYsV0FBQSxFQUFhO0lBQ3JCO0VBQ0Y7RUFDQXJoQixNQUFBLENBQU9xZ0IsVUFBQSxHQUFhO0VBQ3BCLElBQUksQ0FBQzdmLE1BQUEsQ0FBT3NPLE9BQUEsSUFBVzNTLENBQUEsQ0FBRThtQixVQUFBLEVBQVk7SUFDbkM5bUIsQ0FBQSxDQUFFK2tCLGNBQUEsQ0FBZTtFQUNuQjtFQUNBLElBQUkxZ0IsTUFBQSxDQUFPMGlCLHdCQUFBLElBQTRCLENBQUMxaUIsTUFBQSxDQUFPMmlCLE1BQUEsRUFBUTtJQUNyRGhuQixDQUFBLENBQUVpbkIsZUFBQSxDQUFnQjtFQUNwQjtFQUNBLElBQUl2RixJQUFBLEdBQU83ZCxNQUFBLENBQU9zTSxZQUFBLENBQWEsSUFBSXFXLEtBQUEsR0FBUUMsS0FBQTtFQUMzQyxJQUFJUyxXQUFBLEdBQWNyakIsTUFBQSxDQUFPc00sWUFBQSxDQUFhLElBQUl3UixPQUFBLENBQVF5QyxRQUFBLEdBQVd6QyxPQUFBLENBQVF3RixTQUFBLEdBQVl4RixPQUFBLENBQVEyQyxRQUFBLEdBQVczQyxPQUFBLENBQVF5RixTQUFBO0VBQzVHLElBQUkvaUIsTUFBQSxDQUFPZ2pCLGNBQUEsRUFBZ0I7SUFDekIzRixJQUFBLEdBQU8xYyxJQUFBLENBQUsrTyxHQUFBLENBQUkyTixJQUFJLEtBQUsxUSxHQUFBLEdBQU0sSUFBSTtJQUNuQ2tXLFdBQUEsR0FBY2xpQixJQUFBLENBQUsrTyxHQUFBLENBQUltVCxXQUFXLEtBQUtsVyxHQUFBLEdBQU0sSUFBSTtFQUNuRDtFQUNBMlEsT0FBQSxDQUFRRCxJQUFBLEdBQU9BLElBQUE7RUFDZkEsSUFBQSxJQUFRcmQsTUFBQSxDQUFPaWpCLFVBQUE7RUFDZixJQUFJdFcsR0FBQSxFQUFLO0lBQ1AwUSxJQUFBLEdBQU8sQ0FBQ0EsSUFBQTtJQUNSd0YsV0FBQSxHQUFjLENBQUNBLFdBQUE7RUFDakI7RUFDQSxNQUFNSyxvQkFBQSxHQUF1QjFqQixNQUFBLENBQU8yakIsZ0JBQUE7RUFDcEMzakIsTUFBQSxDQUFPdWhCLGNBQUEsR0FBaUIxRCxJQUFBLEdBQU8sSUFBSSxTQUFTO0VBQzVDN2QsTUFBQSxDQUFPMmpCLGdCQUFBLEdBQW1CTixXQUFBLEdBQWMsSUFBSSxTQUFTO0VBQ3JELE1BQU1PLE1BQUEsR0FBUzVqQixNQUFBLENBQU9RLE1BQUEsQ0FBT2tRLElBQUEsSUFBUSxDQUFDbFEsTUFBQSxDQUFPc08sT0FBQTtFQUM3QyxNQUFNK1UsWUFBQSxHQUFlN2pCLE1BQUEsQ0FBT3VoQixjQUFBLEtBQW1CLFVBQVV2aEIsTUFBQSxDQUFPeWEsY0FBQSxJQUFrQnphLE1BQUEsQ0FBT3VoQixjQUFBLEtBQW1CLFVBQVV2aEIsTUFBQSxDQUFPMGEsY0FBQTtFQUM3SCxJQUFJLENBQUM5TyxJQUFBLENBQUtpVSxPQUFBLEVBQVM7SUFDakIsSUFBSStELE1BQUEsSUFBVUMsWUFBQSxFQUFjO01BQzFCN2pCLE1BQUEsQ0FBT3diLE9BQUEsQ0FBUTtRQUNiekIsU0FBQSxFQUFXL1osTUFBQSxDQUFPdWhCO01BQ3BCLENBQUM7SUFDSDtJQUNBM1YsSUFBQSxDQUFLa1ksY0FBQSxHQUFpQjlqQixNQUFBLENBQU9yRCxZQUFBLENBQWE7SUFDMUNxRCxNQUFBLENBQU95UyxhQUFBLENBQWMsQ0FBQztJQUN0QixJQUFJelMsTUFBQSxDQUFPbVosU0FBQSxFQUFXO01BQ3BCLE1BQU00SyxHQUFBLEdBQU0sSUFBSS9uQixNQUFBLENBQU9mLFdBQUEsQ0FBWSxpQkFBaUI7UUFDbEQrb0IsT0FBQSxFQUFTO1FBQ1RmLFVBQUEsRUFBWTtNQUNkLENBQUM7TUFDRGpqQixNQUFBLENBQU9VLFNBQUEsQ0FBVXVqQixhQUFBLENBQWNGLEdBQUc7SUFDcEM7SUFDQW5ZLElBQUEsQ0FBS3NZLG1CQUFBLEdBQXNCO0lBRTNCLElBQUkxakIsTUFBQSxDQUFPc2UsVUFBQSxLQUFlOWUsTUFBQSxDQUFPeWEsY0FBQSxLQUFtQixRQUFRemEsTUFBQSxDQUFPMGEsY0FBQSxLQUFtQixPQUFPO01BQzNGMWEsTUFBQSxDQUFPdWUsYUFBQSxDQUFjLElBQUk7SUFDM0I7SUFDQXZlLE1BQUEsQ0FBTzJILElBQUEsQ0FBSyxtQkFBbUJ4TCxDQUFDO0VBQ2xDO0VBQ0EsSUFBSWdvQixTQUFBO0VBQ0osSUFBSXZZLElBQUEsQ0FBS2lVLE9BQUEsSUFBVzZELG9CQUFBLEtBQXlCMWpCLE1BQUEsQ0FBTzJqQixnQkFBQSxJQUFvQkMsTUFBQSxJQUFVQyxZQUFBLElBQWdCMWlCLElBQUEsQ0FBSytPLEdBQUEsQ0FBSTJOLElBQUksS0FBSyxHQUFHO0lBRXJIN2QsTUFBQSxDQUFPd2IsT0FBQSxDQUFRO01BQ2J6QixTQUFBLEVBQVcvWixNQUFBLENBQU91aEIsY0FBQTtNQUNsQi9JLFlBQUEsRUFBYztJQUNoQixDQUFDO0lBQ0QyTCxTQUFBLEdBQVk7RUFDZDtFQUNBbmtCLE1BQUEsQ0FBTzJILElBQUEsQ0FBSyxjQUFjeEwsQ0FBQztFQUMzQnlQLElBQUEsQ0FBS2lVLE9BQUEsR0FBVTtFQUNmalUsSUFBQSxDQUFLMk0sZ0JBQUEsR0FBbUJzRixJQUFBLEdBQU9qUyxJQUFBLENBQUtrWSxjQUFBO0VBQ3BDLElBQUlNLG1CQUFBLEdBQXNCO0VBQzFCLElBQUlDLGVBQUEsR0FBa0I3akIsTUFBQSxDQUFPNmpCLGVBQUE7RUFDN0IsSUFBSTdqQixNQUFBLENBQU9paUIsbUJBQUEsRUFBcUI7SUFDOUI0QixlQUFBLEdBQWtCO0VBQ3BCO0VBQ0EsSUFBSXhHLElBQUEsR0FBTyxHQUFHO0lBQ1osSUFBSStGLE1BQUEsSUFBVUMsWUFBQSxJQUFnQixDQUFDTSxTQUFBLElBQWF2WSxJQUFBLENBQUsyTSxnQkFBQSxJQUFvQi9YLE1BQUEsQ0FBT3FPLGNBQUEsR0FBaUI3TyxNQUFBLENBQU80VCxZQUFBLENBQWEsSUFBSTVULE1BQUEsQ0FBTzBFLElBQUEsR0FBTyxJQUFJMUUsTUFBQSxDQUFPNFQsWUFBQSxDQUFhLElBQUk7TUFDN0o1VCxNQUFBLENBQU93YixPQUFBLENBQVE7UUFDYnpCLFNBQUEsRUFBVztRQUNYdkIsWUFBQSxFQUFjO1FBQ2R1RSxnQkFBQSxFQUFrQjtNQUNwQixDQUFDO0lBQ0g7SUFDQSxJQUFJblIsSUFBQSxDQUFLMk0sZ0JBQUEsR0FBbUJ2WSxNQUFBLENBQU80VCxZQUFBLENBQWEsR0FBRztNQUNqRHdRLG1CQUFBLEdBQXNCO01BQ3RCLElBQUk1akIsTUFBQSxDQUFPOGpCLFVBQUEsRUFBWTtRQUNyQjFZLElBQUEsQ0FBSzJNLGdCQUFBLEdBQW1CdlksTUFBQSxDQUFPNFQsWUFBQSxDQUFhLElBQUksS0FBSyxDQUFDNVQsTUFBQSxDQUFPNFQsWUFBQSxDQUFhLElBQUloSSxJQUFBLENBQUtrWSxjQUFBLEdBQWlCakcsSUFBQSxLQUFTd0csZUFBQTtNQUMvRztJQUNGO0VBQ0YsV0FBV3hHLElBQUEsR0FBTyxHQUFHO0lBQ25CLElBQUkrRixNQUFBLElBQVVDLFlBQUEsSUFBZ0IsQ0FBQ00sU0FBQSxJQUFhdlksSUFBQSxDQUFLMk0sZ0JBQUEsSUFBb0IvWCxNQUFBLENBQU9xTyxjQUFBLEdBQWlCN08sTUFBQSxDQUFPcVUsWUFBQSxDQUFhLElBQUlyVSxNQUFBLENBQU8wRSxJQUFBLEdBQU8sSUFBSTFFLE1BQUEsQ0FBT3FVLFlBQUEsQ0FBYSxJQUFJO01BQzdKclUsTUFBQSxDQUFPd2IsT0FBQSxDQUFRO1FBQ2J6QixTQUFBLEVBQVc7UUFDWHZCLFlBQUEsRUFBYztRQUNkdUUsZ0JBQUEsRUFBa0IvYyxNQUFBLENBQU95TixNQUFBLENBQU9qVixNQUFBLElBQVVnSSxNQUFBLENBQU82TyxhQUFBLEtBQWtCLFNBQVNyUCxNQUFBLENBQU93VyxvQkFBQSxDQUFxQixJQUFJclYsSUFBQSxDQUFLeVAsSUFBQSxDQUFLN1MsVUFBQSxDQUFXeUMsTUFBQSxDQUFPNk8sYUFBQSxFQUFlLEVBQUUsQ0FBQztNQUM1SixDQUFDO0lBQ0g7SUFDQSxJQUFJekQsSUFBQSxDQUFLMk0sZ0JBQUEsR0FBbUJ2WSxNQUFBLENBQU9xVSxZQUFBLENBQWEsR0FBRztNQUNqRCtQLG1CQUFBLEdBQXNCO01BQ3RCLElBQUk1akIsTUFBQSxDQUFPOGpCLFVBQUEsRUFBWTtRQUNyQjFZLElBQUEsQ0FBSzJNLGdCQUFBLEdBQW1CdlksTUFBQSxDQUFPcVUsWUFBQSxDQUFhLElBQUksS0FBS3JVLE1BQUEsQ0FBT3FVLFlBQUEsQ0FBYSxJQUFJekksSUFBQSxDQUFLa1ksY0FBQSxHQUFpQmpHLElBQUEsS0FBU3dHLGVBQUE7TUFDOUc7SUFDRjtFQUNGO0VBQ0EsSUFBSUQsbUJBQUEsRUFBcUI7SUFDdkJqb0IsQ0FBQSxDQUFFbW1CLHVCQUFBLEdBQTBCO0VBQzlCO0VBR0EsSUFBSSxDQUFDdGlCLE1BQUEsQ0FBT3lhLGNBQUEsSUFBa0J6YSxNQUFBLENBQU91aEIsY0FBQSxLQUFtQixVQUFVM1YsSUFBQSxDQUFLMk0sZ0JBQUEsR0FBbUIzTSxJQUFBLENBQUtrWSxjQUFBLEVBQWdCO0lBQzdHbFksSUFBQSxDQUFLMk0sZ0JBQUEsR0FBbUIzTSxJQUFBLENBQUtrWSxjQUFBO0VBQy9CO0VBQ0EsSUFBSSxDQUFDOWpCLE1BQUEsQ0FBTzBhLGNBQUEsSUFBa0IxYSxNQUFBLENBQU91aEIsY0FBQSxLQUFtQixVQUFVM1YsSUFBQSxDQUFLMk0sZ0JBQUEsR0FBbUIzTSxJQUFBLENBQUtrWSxjQUFBLEVBQWdCO0lBQzdHbFksSUFBQSxDQUFLMk0sZ0JBQUEsR0FBbUIzTSxJQUFBLENBQUtrWSxjQUFBO0VBQy9CO0VBQ0EsSUFBSSxDQUFDOWpCLE1BQUEsQ0FBTzBhLGNBQUEsSUFBa0IsQ0FBQzFhLE1BQUEsQ0FBT3lhLGNBQUEsRUFBZ0I7SUFDcEQ3TyxJQUFBLENBQUsyTSxnQkFBQSxHQUFtQjNNLElBQUEsQ0FBS2tZLGNBQUE7RUFDL0I7RUFHQSxJQUFJdGpCLE1BQUEsQ0FBTzRiLFNBQUEsR0FBWSxHQUFHO0lBQ3hCLElBQUlqYixJQUFBLENBQUsrTyxHQUFBLENBQUkyTixJQUFJLElBQUlyZCxNQUFBLENBQU80YixTQUFBLElBQWF4USxJQUFBLENBQUs0VixrQkFBQSxFQUFvQjtNQUNoRSxJQUFJLENBQUM1VixJQUFBLENBQUs0VixrQkFBQSxFQUFvQjtRQUM1QjVWLElBQUEsQ0FBSzRWLGtCQUFBLEdBQXFCO1FBQzFCMUQsT0FBQSxDQUFRNkMsTUFBQSxHQUFTN0MsT0FBQSxDQUFReUMsUUFBQTtRQUN6QnpDLE9BQUEsQ0FBUThDLE1BQUEsR0FBUzlDLE9BQUEsQ0FBUTJDLFFBQUE7UUFDekI3VSxJQUFBLENBQUsyTSxnQkFBQSxHQUFtQjNNLElBQUEsQ0FBS2tZLGNBQUE7UUFDN0JoRyxPQUFBLENBQVFELElBQUEsR0FBTzdkLE1BQUEsQ0FBT3NNLFlBQUEsQ0FBYSxJQUFJd1IsT0FBQSxDQUFReUMsUUFBQSxHQUFXekMsT0FBQSxDQUFRNkMsTUFBQSxHQUFTN0MsT0FBQSxDQUFRMkMsUUFBQSxHQUFXM0MsT0FBQSxDQUFROEMsTUFBQTtRQUN0RztNQUNGO0lBQ0YsT0FBTztNQUNMaFYsSUFBQSxDQUFLMk0sZ0JBQUEsR0FBbUIzTSxJQUFBLENBQUtrWSxjQUFBO01BQzdCO0lBQ0Y7RUFDRjtFQUNBLElBQUksQ0FBQ3RqQixNQUFBLENBQU8rakIsWUFBQSxJQUFnQi9qQixNQUFBLENBQU9zTyxPQUFBLEVBQVM7RUFHNUMsSUFBSXRPLE1BQUEsQ0FBT3VoQixRQUFBLElBQVl2aEIsTUFBQSxDQUFPdWhCLFFBQUEsQ0FBU3hVLE9BQUEsSUFBV3ZOLE1BQUEsQ0FBTytoQixRQUFBLElBQVl2aEIsTUFBQSxDQUFPdVIsbUJBQUEsRUFBcUI7SUFDL0YvUixNQUFBLENBQU9rWCxpQkFBQSxDQUFrQjtJQUN6QmxYLE1BQUEsQ0FBT29WLG1CQUFBLENBQW9CO0VBQzdCO0VBQ0EsSUFBSTVVLE1BQUEsQ0FBT3VoQixRQUFBLElBQVl2aEIsTUFBQSxDQUFPdWhCLFFBQUEsQ0FBU3hVLE9BQUEsSUFBV3ZOLE1BQUEsQ0FBTytoQixRQUFBLEVBQVU7SUFDakUvaEIsTUFBQSxDQUFPK2hCLFFBQUEsQ0FBU0MsV0FBQSxDQUFZO0VBQzlCO0VBRUFoaUIsTUFBQSxDQUFPa1UsY0FBQSxDQUFldEksSUFBQSxDQUFLMk0sZ0JBQWdCO0VBRTNDdlksTUFBQSxDQUFPd1ksWUFBQSxDQUFhNU0sSUFBQSxDQUFLMk0sZ0JBQWdCO0FBQzNDO0FBRUEsU0FBU2lNLFdBQVcxWixLQUFBLEVBQU87RUFDekIsTUFBTTlLLE1BQUEsR0FBUztFQUNmLE1BQU00TCxJQUFBLEdBQU81TCxNQUFBLENBQU8rZCxlQUFBO0VBQ3BCLE1BQU1rRSxZQUFBLEdBQWVyVyxJQUFBLENBQUswVCxPQUFBLENBQVE0QyxTQUFBLENBQVVDLFFBQUEsSUFBWUEsUUFBQSxDQUFTQyxTQUFBLEtBQWN0WCxLQUFBLENBQU1zWCxTQUFTO0VBQzlGLElBQUlILFlBQUEsSUFBZ0IsR0FBRztJQUNyQnJXLElBQUEsQ0FBSzBULE9BQUEsQ0FBUWhWLE1BQUEsQ0FBTzJYLFlBQUEsRUFBYyxDQUFDO0VBQ3JDO0VBQ0EsSUFBSSxDQUFDLGlCQUFpQixjQUFjLGdCQUFnQixhQUFhLEVBQUVoYixRQUFBLENBQVM2RCxLQUFBLENBQU0yWixJQUFJLEdBQUc7SUFDdkYsTUFBTUMsT0FBQSxHQUFVLENBQUMsaUJBQWlCLGFBQWEsRUFBRXpkLFFBQUEsQ0FBUzZELEtBQUEsQ0FBTTJaLElBQUksTUFBTXprQixNQUFBLENBQU8yRyxPQUFBLENBQVFHLFFBQUEsSUFBWTlHLE1BQUEsQ0FBTzJHLE9BQUEsQ0FBUVcsU0FBQTtJQUNwSCxJQUFJLENBQUNvZCxPQUFBLEVBQVM7TUFDWjtJQUNGO0VBQ0Y7RUFDQSxNQUFNO0lBQ0psa0IsTUFBQTtJQUNBc2QsT0FBQTtJQUNBNVEsWUFBQSxFQUFjQyxHQUFBO0lBQ2RVLFVBQUE7SUFDQU47RUFDRixJQUFJdk4sTUFBQTtFQUNKLElBQUksQ0FBQ3VOLE9BQUEsRUFBUztFQUNkLElBQUksQ0FBQy9NLE1BQUEsQ0FBT2llLGFBQUEsSUFBaUIzVCxLQUFBLENBQU15VSxXQUFBLEtBQWdCLFNBQVM7RUFDNUQsSUFBSXBqQixDQUFBLEdBQUkyTyxLQUFBO0VBQ1IsSUFBSTNPLENBQUEsQ0FBRXFqQixhQUFBLEVBQWVyakIsQ0FBQSxHQUFJQSxDQUFBLENBQUVxakIsYUFBQTtFQUMzQixJQUFJNVQsSUFBQSxDQUFLdVYsbUJBQUEsRUFBcUI7SUFDNUJuaEIsTUFBQSxDQUFPMkgsSUFBQSxDQUFLLFlBQVl4TCxDQUFDO0VBQzNCO0VBQ0F5UCxJQUFBLENBQUt1VixtQkFBQSxHQUFzQjtFQUMzQixJQUFJLENBQUN2VixJQUFBLENBQUtnVSxTQUFBLEVBQVc7SUFDbkIsSUFBSWhVLElBQUEsQ0FBS2lVLE9BQUEsSUFBV3JmLE1BQUEsQ0FBT3NlLFVBQUEsRUFBWTtNQUNyQzllLE1BQUEsQ0FBT3VlLGFBQUEsQ0FBYyxLQUFLO0lBQzVCO0lBQ0EzUyxJQUFBLENBQUtpVSxPQUFBLEdBQVU7SUFDZmpVLElBQUEsQ0FBS3lWLFdBQUEsR0FBYztJQUNuQjtFQUNGO0VBRUEsSUFBSTdnQixNQUFBLENBQU9zZSxVQUFBLElBQWNsVCxJQUFBLENBQUtpVSxPQUFBLElBQVdqVSxJQUFBLENBQUtnVSxTQUFBLEtBQWM1ZixNQUFBLENBQU95YSxjQUFBLEtBQW1CLFFBQVF6YSxNQUFBLENBQU8wYSxjQUFBLEtBQW1CLE9BQU87SUFDN0gxYSxNQUFBLENBQU91ZSxhQUFBLENBQWMsS0FBSztFQUM1QjtFQUdBLE1BQU1vRyxZQUFBLEdBQWVyb0IsR0FBQSxDQUFJO0VBQ3pCLE1BQU1zb0IsUUFBQSxHQUFXRCxZQUFBLEdBQWUvWSxJQUFBLENBQUswVixjQUFBO0VBR3JDLElBQUl0aEIsTUFBQSxDQUFPcWdCLFVBQUEsRUFBWTtJQUNyQixNQUFNd0UsUUFBQSxHQUFXMW9CLENBQUEsQ0FBRTJiLElBQUEsSUFBUTNiLENBQUEsQ0FBRThqQixZQUFBLElBQWdCOWpCLENBQUEsQ0FBRThqQixZQUFBLENBQWE7SUFDNURqZ0IsTUFBQSxDQUFPNlgsa0JBQUEsQ0FBbUJnTixRQUFBLElBQVlBLFFBQUEsQ0FBUyxDQUFDLEtBQUsxb0IsQ0FBQSxDQUFFaEUsTUFBQSxFQUFRMHNCLFFBQVE7SUFDdkU3a0IsTUFBQSxDQUFPMkgsSUFBQSxDQUFLLGFBQWF4TCxDQUFDO0lBQzFCLElBQUl5b0IsUUFBQSxHQUFXLE9BQU9ELFlBQUEsR0FBZS9ZLElBQUEsQ0FBS2taLGFBQUEsR0FBZ0IsS0FBSztNQUM3RDlrQixNQUFBLENBQU8ySCxJQUFBLENBQUsseUJBQXlCeEwsQ0FBQztJQUN4QztFQUNGO0VBQ0F5UCxJQUFBLENBQUtrWixhQUFBLEdBQWdCeG9CLEdBQUEsQ0FBSTtFQUN6QkYsUUFBQSxDQUFTLE1BQU07SUFDYixJQUFJLENBQUM0RCxNQUFBLENBQU8rSCxTQUFBLEVBQVcvSCxNQUFBLENBQU9xZ0IsVUFBQSxHQUFhO0VBQzdDLENBQUM7RUFDRCxJQUFJLENBQUN6VSxJQUFBLENBQUtnVSxTQUFBLElBQWEsQ0FBQ2hVLElBQUEsQ0FBS2lVLE9BQUEsSUFBVyxDQUFDN2YsTUFBQSxDQUFPdWhCLGNBQUEsSUFBa0J6RCxPQUFBLENBQVFELElBQUEsS0FBUyxLQUFLalMsSUFBQSxDQUFLMk0sZ0JBQUEsS0FBcUIzTSxJQUFBLENBQUtrWSxjQUFBLEVBQWdCO0lBQ3JJbFksSUFBQSxDQUFLZ1UsU0FBQSxHQUFZO0lBQ2pCaFUsSUFBQSxDQUFLaVUsT0FBQSxHQUFVO0lBQ2ZqVSxJQUFBLENBQUt5VixXQUFBLEdBQWM7SUFDbkI7RUFDRjtFQUNBelYsSUFBQSxDQUFLZ1UsU0FBQSxHQUFZO0VBQ2pCaFUsSUFBQSxDQUFLaVUsT0FBQSxHQUFVO0VBQ2ZqVSxJQUFBLENBQUt5VixXQUFBLEdBQWM7RUFDbkIsSUFBSTBELFVBQUE7RUFDSixJQUFJdmtCLE1BQUEsQ0FBTytqQixZQUFBLEVBQWM7SUFDdkJRLFVBQUEsR0FBYTVYLEdBQUEsR0FBTW5OLE1BQUEsQ0FBT0ksU0FBQSxHQUFZLENBQUNKLE1BQUEsQ0FBT0ksU0FBQTtFQUNoRCxPQUFPO0lBQ0wya0IsVUFBQSxHQUFhLENBQUNuWixJQUFBLENBQUsyTSxnQkFBQTtFQUNyQjtFQUNBLElBQUkvWCxNQUFBLENBQU9zTyxPQUFBLEVBQVM7SUFDbEI7RUFDRjtFQUNBLElBQUl0TyxNQUFBLENBQU91aEIsUUFBQSxJQUFZdmhCLE1BQUEsQ0FBT3VoQixRQUFBLENBQVN4VSxPQUFBLEVBQVM7SUFDOUN2TixNQUFBLENBQU8raEIsUUFBQSxDQUFTeUMsVUFBQSxDQUFXO01BQ3pCTztJQUNGLENBQUM7SUFDRDtFQUNGO0VBR0EsSUFBSUMsU0FBQSxHQUFZO0VBQ2hCLElBQUlqVSxTQUFBLEdBQVkvUSxNQUFBLENBQU84TixlQUFBLENBQWdCLENBQUM7RUFDeEMsU0FBU2hQLENBQUEsR0FBSSxHQUFHQSxDQUFBLEdBQUkrTyxVQUFBLENBQVdyVixNQUFBLEVBQVFzRyxDQUFBLElBQUtBLENBQUEsR0FBSTBCLE1BQUEsQ0FBTzRQLGtCQUFBLEdBQXFCLElBQUk1UCxNQUFBLENBQU8yUCxjQUFBLEVBQWdCO0lBQ3JHLE1BQU04VSxVQUFBLEdBQVlubUIsQ0FBQSxHQUFJMEIsTUFBQSxDQUFPNFAsa0JBQUEsR0FBcUIsSUFBSSxJQUFJNVAsTUFBQSxDQUFPMlAsY0FBQTtJQUNqRSxJQUFJLE9BQU90QyxVQUFBLENBQVcvTyxDQUFBLEdBQUltbUIsVUFBUyxNQUFNLGFBQWE7TUFDcEQsSUFBSUYsVUFBQSxJQUFjbFgsVUFBQSxDQUFXL08sQ0FBQyxLQUFLaW1CLFVBQUEsR0FBYWxYLFVBQUEsQ0FBVy9PLENBQUEsR0FBSW1tQixVQUFTLEdBQUc7UUFDekVELFNBQUEsR0FBWWxtQixDQUFBO1FBQ1ppUyxTQUFBLEdBQVlsRCxVQUFBLENBQVcvTyxDQUFBLEdBQUltbUIsVUFBUyxJQUFJcFgsVUFBQSxDQUFXL08sQ0FBQztNQUN0RDtJQUNGLFdBQVdpbUIsVUFBQSxJQUFjbFgsVUFBQSxDQUFXL08sQ0FBQyxHQUFHO01BQ3RDa21CLFNBQUEsR0FBWWxtQixDQUFBO01BQ1ppUyxTQUFBLEdBQVlsRCxVQUFBLENBQVdBLFVBQUEsQ0FBV3JWLE1BQUEsR0FBUyxDQUFDLElBQUlxVixVQUFBLENBQVdBLFVBQUEsQ0FBV3JWLE1BQUEsR0FBUyxDQUFDO0lBQ2xGO0VBQ0Y7RUFDQSxJQUFJMHNCLGdCQUFBLEdBQW1CO0VBQ3ZCLElBQUlDLGVBQUEsR0FBa0I7RUFDdEIsSUFBSTNrQixNQUFBLENBQU9zVyxNQUFBLEVBQVE7SUFDakIsSUFBSTlXLE1BQUEsQ0FBT3NVLFdBQUEsRUFBYTtNQUN0QjZRLGVBQUEsR0FBa0Iza0IsTUFBQSxDQUFPOE0sT0FBQSxJQUFXOU0sTUFBQSxDQUFPOE0sT0FBQSxDQUFRQyxPQUFBLElBQVd2TixNQUFBLENBQU9zTixPQUFBLEdBQVV0TixNQUFBLENBQU9zTixPQUFBLENBQVFHLE1BQUEsQ0FBT2pWLE1BQUEsR0FBUyxJQUFJd0gsTUFBQSxDQUFPeU4sTUFBQSxDQUFPalYsTUFBQSxHQUFTO0lBQzNJLFdBQVd3SCxNQUFBLENBQU91VSxLQUFBLEVBQU87TUFDdkIyUSxnQkFBQSxHQUFtQjtJQUNyQjtFQUNGO0VBRUEsTUFBTUUsS0FBQSxJQUFTTCxVQUFBLEdBQWFsWCxVQUFBLENBQVdtWCxTQUFTLEtBQUtqVSxTQUFBO0VBQ3JELE1BQU11SyxTQUFBLEdBQVkwSixTQUFBLEdBQVl4a0IsTUFBQSxDQUFPNFAsa0JBQUEsR0FBcUIsSUFBSSxJQUFJNVAsTUFBQSxDQUFPMlAsY0FBQTtFQUN6RSxJQUFJeVUsUUFBQSxHQUFXcGtCLE1BQUEsQ0FBTzZrQixZQUFBLEVBQWM7SUFFbEMsSUFBSSxDQUFDN2tCLE1BQUEsQ0FBTzhrQixVQUFBLEVBQVk7TUFDdEJ0bEIsTUFBQSxDQUFPb2EsT0FBQSxDQUFRcGEsTUFBQSxDQUFPNlMsV0FBVztNQUNqQztJQUNGO0lBQ0EsSUFBSTdTLE1BQUEsQ0FBT3VoQixjQUFBLEtBQW1CLFFBQVE7TUFDcEMsSUFBSTZELEtBQUEsSUFBUzVrQixNQUFBLENBQU8ra0IsZUFBQSxFQUFpQnZsQixNQUFBLENBQU9vYSxPQUFBLENBQVE1WixNQUFBLENBQU9zVyxNQUFBLElBQVU5VyxNQUFBLENBQU91VSxLQUFBLEdBQVEyUSxnQkFBQSxHQUFtQkYsU0FBQSxHQUFZMUosU0FBUyxPQUFPdGIsTUFBQSxDQUFPb2EsT0FBQSxDQUFRNEssU0FBUztJQUM3SjtJQUNBLElBQUlobEIsTUFBQSxDQUFPdWhCLGNBQUEsS0FBbUIsUUFBUTtNQUNwQyxJQUFJNkQsS0FBQSxHQUFRLElBQUk1a0IsTUFBQSxDQUFPK2tCLGVBQUEsRUFBaUI7UUFDdEN2bEIsTUFBQSxDQUFPb2EsT0FBQSxDQUFRNEssU0FBQSxHQUFZMUosU0FBUztNQUN0QyxXQUFXNkosZUFBQSxLQUFvQixRQUFRQyxLQUFBLEdBQVEsS0FBS2prQixJQUFBLENBQUsrTyxHQUFBLENBQUlrVixLQUFLLElBQUk1a0IsTUFBQSxDQUFPK2tCLGVBQUEsRUFBaUI7UUFDNUZ2bEIsTUFBQSxDQUFPb2EsT0FBQSxDQUFRK0ssZUFBZTtNQUNoQyxPQUFPO1FBQ0xubEIsTUFBQSxDQUFPb2EsT0FBQSxDQUFRNEssU0FBUztNQUMxQjtJQUNGO0VBQ0YsT0FBTztJQUVMLElBQUksQ0FBQ3hrQixNQUFBLENBQU9nbEIsV0FBQSxFQUFhO01BQ3ZCeGxCLE1BQUEsQ0FBT29hLE9BQUEsQ0FBUXBhLE1BQUEsQ0FBTzZTLFdBQVc7TUFDakM7SUFDRjtJQUNBLE1BQU00UyxpQkFBQSxHQUFvQnpsQixNQUFBLENBQU8wbEIsVUFBQSxLQUFldnBCLENBQUEsQ0FBRWhFLE1BQUEsS0FBVzZILE1BQUEsQ0FBTzBsQixVQUFBLENBQVdDLE1BQUEsSUFBVXhwQixDQUFBLENBQUVoRSxNQUFBLEtBQVc2SCxNQUFBLENBQU8wbEIsVUFBQSxDQUFXRSxNQUFBO0lBQ3hILElBQUksQ0FBQ0gsaUJBQUEsRUFBbUI7TUFDdEIsSUFBSXpsQixNQUFBLENBQU91aEIsY0FBQSxLQUFtQixRQUFRO1FBQ3BDdmhCLE1BQUEsQ0FBT29hLE9BQUEsQ0FBUThLLGdCQUFBLEtBQXFCLE9BQU9BLGdCQUFBLEdBQW1CRixTQUFBLEdBQVkxSixTQUFTO01BQ3JGO01BQ0EsSUFBSXRiLE1BQUEsQ0FBT3VoQixjQUFBLEtBQW1CLFFBQVE7UUFDcEN2aEIsTUFBQSxDQUFPb2EsT0FBQSxDQUFRK0ssZUFBQSxLQUFvQixPQUFPQSxlQUFBLEdBQWtCSCxTQUFTO01BQ3ZFO0lBQ0YsV0FBVzdvQixDQUFBLENBQUVoRSxNQUFBLEtBQVc2SCxNQUFBLENBQU8wbEIsVUFBQSxDQUFXQyxNQUFBLEVBQVE7TUFDaEQzbEIsTUFBQSxDQUFPb2EsT0FBQSxDQUFRNEssU0FBQSxHQUFZMUosU0FBUztJQUN0QyxPQUFPO01BQ0x0YixNQUFBLENBQU9vYSxPQUFBLENBQVE0SyxTQUFTO0lBQzFCO0VBQ0Y7QUFDRjtBQUVBLFNBQVNhLFNBQUEsRUFBVztFQUNsQixNQUFNN2xCLE1BQUEsR0FBUztFQUNmLE1BQU07SUFDSlEsTUFBQTtJQUNBaEU7RUFDRixJQUFJd0QsTUFBQTtFQUNKLElBQUl4RCxFQUFBLElBQU1BLEVBQUEsQ0FBR29JLFdBQUEsS0FBZ0IsR0FBRztFQUdoQyxJQUFJcEUsTUFBQSxDQUFPOE8sV0FBQSxFQUFhO0lBQ3RCdFAsTUFBQSxDQUFPOGxCLGFBQUEsQ0FBYztFQUN2QjtFQUdBLE1BQU07SUFDSnJMLGNBQUE7SUFDQUMsY0FBQTtJQUNBOU07RUFDRixJQUFJNU4sTUFBQTtFQUNKLE1BQU1xTixTQUFBLEdBQVlyTixNQUFBLENBQU9zTixPQUFBLElBQVd0TixNQUFBLENBQU9RLE1BQUEsQ0FBTzhNLE9BQUEsQ0FBUUMsT0FBQTtFQUcxRHZOLE1BQUEsQ0FBT3lhLGNBQUEsR0FBaUI7RUFDeEJ6YSxNQUFBLENBQU8wYSxjQUFBLEdBQWlCO0VBQ3hCMWEsTUFBQSxDQUFPbU0sVUFBQSxDQUFXO0VBQ2xCbk0sTUFBQSxDQUFPMk0sWUFBQSxDQUFhO0VBQ3BCM00sTUFBQSxDQUFPb1YsbUJBQUEsQ0FBb0I7RUFDM0IsTUFBTTJRLGFBQUEsR0FBZ0IxWSxTQUFBLElBQWE3TSxNQUFBLENBQU9rUSxJQUFBO0VBQzFDLEtBQUtsUSxNQUFBLENBQU82TyxhQUFBLEtBQWtCLFVBQVU3TyxNQUFBLENBQU82TyxhQUFBLEdBQWdCLE1BQU1yUCxNQUFBLENBQU91VSxLQUFBLElBQVMsQ0FBQ3ZVLE1BQUEsQ0FBT3NVLFdBQUEsSUFBZSxDQUFDdFUsTUFBQSxDQUFPUSxNQUFBLENBQU9xTyxjQUFBLElBQWtCLENBQUNrWCxhQUFBLEVBQWU7SUFDM0ovbEIsTUFBQSxDQUFPb2EsT0FBQSxDQUFRcGEsTUFBQSxDQUFPeU4sTUFBQSxDQUFPalYsTUFBQSxHQUFTLEdBQUcsR0FBRyxPQUFPLElBQUk7RUFDekQsT0FBTztJQUNMLElBQUl3SCxNQUFBLENBQU9RLE1BQUEsQ0FBT2tRLElBQUEsSUFBUSxDQUFDckQsU0FBQSxFQUFXO01BQ3BDck4sTUFBQSxDQUFPZ2IsV0FBQSxDQUFZaGIsTUFBQSxDQUFPK1csU0FBQSxFQUFXLEdBQUcsT0FBTyxJQUFJO0lBQ3JELE9BQU87TUFDTC9XLE1BQUEsQ0FBT29hLE9BQUEsQ0FBUXBhLE1BQUEsQ0FBTzZTLFdBQUEsRUFBYSxHQUFHLE9BQU8sSUFBSTtJQUNuRDtFQUNGO0VBQ0EsSUFBSTdTLE1BQUEsQ0FBT2dtQixRQUFBLElBQVlobUIsTUFBQSxDQUFPZ21CLFFBQUEsQ0FBU0MsT0FBQSxJQUFXam1CLE1BQUEsQ0FBT2dtQixRQUFBLENBQVNFLE1BQUEsRUFBUTtJQUN4RTFxQixZQUFBLENBQWF3RSxNQUFBLENBQU9nbUIsUUFBQSxDQUFTRyxhQUFhO0lBQzFDbm1CLE1BQUEsQ0FBT2dtQixRQUFBLENBQVNHLGFBQUEsR0FBZ0I1cUIsVUFBQSxDQUFXLE1BQU07TUFDL0MsSUFBSXlFLE1BQUEsQ0FBT2dtQixRQUFBLElBQVlobUIsTUFBQSxDQUFPZ21CLFFBQUEsQ0FBU0MsT0FBQSxJQUFXam1CLE1BQUEsQ0FBT2dtQixRQUFBLENBQVNFLE1BQUEsRUFBUTtRQUN4RWxtQixNQUFBLENBQU9nbUIsUUFBQSxDQUFTSSxNQUFBLENBQU87TUFDekI7SUFDRixHQUFHLEdBQUc7RUFDUjtFQUVBcG1CLE1BQUEsQ0FBTzBhLGNBQUEsR0FBaUJBLGNBQUE7RUFDeEIxYSxNQUFBLENBQU95YSxjQUFBLEdBQWlCQSxjQUFBO0VBQ3hCLElBQUl6YSxNQUFBLENBQU9RLE1BQUEsQ0FBT3FSLGFBQUEsSUFBaUJqRSxRQUFBLEtBQWE1TixNQUFBLENBQU80TixRQUFBLEVBQVU7SUFDL0Q1TixNQUFBLENBQU84UixhQUFBLENBQWM7RUFDdkI7QUFDRjtBQUVBLFNBQVN1VSxRQUFRbHFCLENBQUEsRUFBRztFQUNsQixNQUFNNkQsTUFBQSxHQUFTO0VBQ2YsSUFBSSxDQUFDQSxNQUFBLENBQU91TixPQUFBLEVBQVM7RUFDckIsSUFBSSxDQUFDdk4sTUFBQSxDQUFPcWdCLFVBQUEsRUFBWTtJQUN0QixJQUFJcmdCLE1BQUEsQ0FBT1EsTUFBQSxDQUFPOGxCLGFBQUEsRUFBZW5xQixDQUFBLENBQUUra0IsY0FBQSxDQUFlO0lBQ2xELElBQUlsaEIsTUFBQSxDQUFPUSxNQUFBLENBQU8rbEIsd0JBQUEsSUFBNEJ2bUIsTUFBQSxDQUFPbVosU0FBQSxFQUFXO01BQzlEaGQsQ0FBQSxDQUFFaW5CLGVBQUEsQ0FBZ0I7TUFDbEJqbkIsQ0FBQSxDQUFFcXFCLHdCQUFBLENBQXlCO0lBQzdCO0VBQ0Y7QUFDRjtBQUVBLFNBQVNDLFNBQUEsRUFBVztFQUNsQixNQUFNem1CLE1BQUEsR0FBUztFQUNmLE1BQU07SUFDSlUsU0FBQTtJQUNBd00sWUFBQTtJQUNBSztFQUNGLElBQUl2TixNQUFBO0VBQ0osSUFBSSxDQUFDdU4sT0FBQSxFQUFTO0VBQ2R2TixNQUFBLENBQU82WSxpQkFBQSxHQUFvQjdZLE1BQUEsQ0FBT0ksU0FBQTtFQUNsQyxJQUFJSixNQUFBLENBQU9zTSxZQUFBLENBQWEsR0FBRztJQUN6QnRNLE1BQUEsQ0FBT0ksU0FBQSxHQUFZLENBQUNNLFNBQUEsQ0FBVXVDLFVBQUE7RUFDaEMsT0FBTztJQUNMakQsTUFBQSxDQUFPSSxTQUFBLEdBQVksQ0FBQ00sU0FBQSxDQUFVcUMsU0FBQTtFQUNoQztFQUVBLElBQUkvQyxNQUFBLENBQU9JLFNBQUEsS0FBYyxHQUFHSixNQUFBLENBQU9JLFNBQUEsR0FBWTtFQUMvQ0osTUFBQSxDQUFPa1gsaUJBQUEsQ0FBa0I7RUFDekJsWCxNQUFBLENBQU9vVixtQkFBQSxDQUFvQjtFQUMzQixJQUFJMEQsV0FBQTtFQUNKLE1BQU0xRSxjQUFBLEdBQWlCcFUsTUFBQSxDQUFPcVUsWUFBQSxDQUFhLElBQUlyVSxNQUFBLENBQU80VCxZQUFBLENBQWE7RUFDbkUsSUFBSVEsY0FBQSxLQUFtQixHQUFHO0lBQ3hCMEUsV0FBQSxHQUFjO0VBQ2hCLE9BQU87SUFDTEEsV0FBQSxJQUFlOVksTUFBQSxDQUFPSSxTQUFBLEdBQVlKLE1BQUEsQ0FBTzRULFlBQUEsQ0FBYSxLQUFLUSxjQUFBO0VBQzdEO0VBQ0EsSUFBSTBFLFdBQUEsS0FBZ0I5WSxNQUFBLENBQU9rQixRQUFBLEVBQVU7SUFDbkNsQixNQUFBLENBQU9rVSxjQUFBLENBQWVoSCxZQUFBLEdBQWUsQ0FBQ2xOLE1BQUEsQ0FBT0ksU0FBQSxHQUFZSixNQUFBLENBQU9JLFNBQVM7RUFDM0U7RUFDQUosTUFBQSxDQUFPMkgsSUFBQSxDQUFLLGdCQUFnQjNILE1BQUEsQ0FBT0ksU0FBQSxFQUFXLEtBQUs7QUFDckQ7QUFFQSxTQUFTc21CLE9BQU92cUIsQ0FBQSxFQUFHO0VBQ2pCLE1BQU02RCxNQUFBLEdBQVM7RUFDZjZWLG9CQUFBLENBQXFCN1YsTUFBQSxFQUFRN0QsQ0FBQSxDQUFFaEUsTUFBTTtFQUNyQyxJQUFJNkgsTUFBQSxDQUFPUSxNQUFBLENBQU9zTyxPQUFBLElBQVc5TyxNQUFBLENBQU9RLE1BQUEsQ0FBTzZPLGFBQUEsS0FBa0IsVUFBVSxDQUFDclAsTUFBQSxDQUFPUSxNQUFBLENBQU8yVSxVQUFBLEVBQVk7SUFDaEc7RUFDRjtFQUNBblYsTUFBQSxDQUFPb1ksTUFBQSxDQUFPO0FBQ2hCO0FBRUEsSUFBSXVPLGtCQUFBLEdBQXFCO0FBQ3pCLFNBQVNDLG1CQUFBLEVBQXFCLENBQUM7QUFDL0IsSUFBTTVhLE1BQUEsR0FBU0EsQ0FBQ2hNLE1BQUEsRUFBUTZLLE1BQUEsS0FBVztFQUNqQyxNQUFNbkksU0FBQSxHQUFXcEksV0FBQSxDQUFZO0VBQzdCLE1BQU07SUFDSmtHLE1BQUE7SUFDQWhFLEVBQUE7SUFDQWtFLFNBQUE7SUFDQWdGO0VBQ0YsSUFBSTFGLE1BQUE7RUFDSixNQUFNNm1CLE9BQUEsR0FBVSxDQUFDLENBQUNybUIsTUFBQSxDQUFPMmlCLE1BQUE7RUFDekIsTUFBTTJELFNBQUEsR0FBWWpjLE1BQUEsS0FBVyxPQUFPLHFCQUFxQjtFQUN6RCxNQUFNa2MsWUFBQSxHQUFlbGMsTUFBQTtFQUdyQnJPLEVBQUEsQ0FBR3NxQixTQUFTLEVBQUUsZUFBZTltQixNQUFBLENBQU9xZixZQUFBLEVBQWM7SUFDaEQySCxPQUFBLEVBQVM7RUFDWCxDQUFDO0VBQ0R0a0IsU0FBQSxDQUFTb2tCLFNBQVMsRUFBRSxlQUFlOW1CLE1BQUEsQ0FBT2dpQixXQUFBLEVBQWE7SUFDckRnRixPQUFBLEVBQVM7SUFDVEg7RUFDRixDQUFDO0VBQ0Rua0IsU0FBQSxDQUFTb2tCLFNBQVMsRUFBRSxhQUFhOW1CLE1BQUEsQ0FBT3drQixVQUFBLEVBQVk7SUFDbER3QyxPQUFBLEVBQVM7RUFDWCxDQUFDO0VBQ0R0a0IsU0FBQSxDQUFTb2tCLFNBQVMsRUFBRSxpQkFBaUI5bUIsTUFBQSxDQUFPd2tCLFVBQUEsRUFBWTtJQUN0RHdDLE9BQUEsRUFBUztFQUNYLENBQUM7RUFDRHRrQixTQUFBLENBQVNva0IsU0FBUyxFQUFFLGNBQWM5bUIsTUFBQSxDQUFPd2tCLFVBQUEsRUFBWTtJQUNuRHdDLE9BQUEsRUFBUztFQUNYLENBQUM7RUFDRHRrQixTQUFBLENBQVNva0IsU0FBUyxFQUFFLGdCQUFnQjltQixNQUFBLENBQU93a0IsVUFBQSxFQUFZO0lBQ3JEd0MsT0FBQSxFQUFTO0VBQ1gsQ0FBQztFQUNEdGtCLFNBQUEsQ0FBU29rQixTQUFTLEVBQUUsZUFBZTltQixNQUFBLENBQU93a0IsVUFBQSxFQUFZO0lBQ3BEd0MsT0FBQSxFQUFTO0VBQ1gsQ0FBQztFQUdELElBQUl4bUIsTUFBQSxDQUFPOGxCLGFBQUEsSUFBaUI5bEIsTUFBQSxDQUFPK2xCLHdCQUFBLEVBQTBCO0lBQzNEL3BCLEVBQUEsQ0FBR3NxQixTQUFTLEVBQUUsU0FBUzltQixNQUFBLENBQU9xbUIsT0FBQSxFQUFTLElBQUk7RUFDN0M7RUFDQSxJQUFJN2xCLE1BQUEsQ0FBT3NPLE9BQUEsRUFBUztJQUNsQnBPLFNBQUEsQ0FBVW9tQixTQUFTLEVBQUUsVUFBVTltQixNQUFBLENBQU95bUIsUUFBUTtFQUNoRDtFQUdBLElBQUlqbUIsTUFBQSxDQUFPeW1CLG9CQUFBLEVBQXNCO0lBQy9Cam5CLE1BQUEsQ0FBTyttQixZQUFZLEVBQUVyaEIsTUFBQSxDQUFPQyxHQUFBLElBQU9ELE1BQUEsQ0FBT0UsT0FBQSxHQUFVLDRDQUE0Qyx5QkFBeUJpZ0IsUUFBQSxFQUFVLElBQUk7RUFDekksT0FBTztJQUNMN2xCLE1BQUEsQ0FBTyttQixZQUFZLEVBQUUsa0JBQWtCbEIsUUFBQSxFQUFVLElBQUk7RUFDdkQ7RUFHQXJwQixFQUFBLENBQUdzcUIsU0FBUyxFQUFFLFFBQVE5bUIsTUFBQSxDQUFPMG1CLE1BQUEsRUFBUTtJQUNuQ0csT0FBQSxFQUFTO0VBQ1gsQ0FBQztBQUNIO0FBQ0EsU0FBU0ssYUFBQSxFQUFlO0VBQ3RCLE1BQU1sbkIsTUFBQSxHQUFTO0VBQ2YsTUFBTTBDLFNBQUEsR0FBV3BJLFdBQUEsQ0FBWTtFQUM3QixNQUFNO0lBQ0prRztFQUNGLElBQUlSLE1BQUE7RUFDSkEsTUFBQSxDQUFPcWYsWUFBQSxHQUFlQSxZQUFBLENBQWE4SCxJQUFBLENBQUtubkIsTUFBTTtFQUM5Q0EsTUFBQSxDQUFPZ2lCLFdBQUEsR0FBY0EsV0FBQSxDQUFZbUYsSUFBQSxDQUFLbm5CLE1BQU07RUFDNUNBLE1BQUEsQ0FBT3drQixVQUFBLEdBQWFBLFVBQUEsQ0FBVzJDLElBQUEsQ0FBS25uQixNQUFNO0VBQzFDLElBQUlRLE1BQUEsQ0FBT3NPLE9BQUEsRUFBUztJQUNsQjlPLE1BQUEsQ0FBT3ltQixRQUFBLEdBQVdBLFFBQUEsQ0FBU1UsSUFBQSxDQUFLbm5CLE1BQU07RUFDeEM7RUFDQUEsTUFBQSxDQUFPcW1CLE9BQUEsR0FBVUEsT0FBQSxDQUFRYyxJQUFBLENBQUtubkIsTUFBTTtFQUNwQ0EsTUFBQSxDQUFPMG1CLE1BQUEsR0FBU0EsTUFBQSxDQUFPUyxJQUFBLENBQUtubkIsTUFBTTtFQUNsQyxJQUFJLENBQUMybUIsa0JBQUEsRUFBb0I7SUFDdkJqa0IsU0FBQSxDQUFTL0osZ0JBQUEsQ0FBaUIsY0FBY2l1QixrQkFBa0I7SUFDMURELGtCQUFBLEdBQXFCO0VBQ3ZCO0VBQ0EzYSxNQUFBLENBQU9oTSxNQUFBLEVBQVEsSUFBSTtBQUNyQjtBQUNBLFNBQVNvbkIsYUFBQSxFQUFlO0VBQ3RCLE1BQU1wbkIsTUFBQSxHQUFTO0VBQ2ZnTSxNQUFBLENBQU9oTSxNQUFBLEVBQVEsS0FBSztBQUN0QjtBQUNBLElBQUlxbkIsUUFBQSxHQUFXO0VBQ2JILFlBQUE7RUFDQUU7QUFDRjtBQUVBLElBQU1FLGFBQUEsR0FBZ0JBLENBQUN0bkIsTUFBQSxFQUFRUSxNQUFBLEtBQVc7RUFDeEMsT0FBT1IsTUFBQSxDQUFPZ1AsSUFBQSxJQUFReE8sTUFBQSxDQUFPd08sSUFBQSxJQUFReE8sTUFBQSxDQUFPd08sSUFBQSxDQUFLQyxJQUFBLEdBQU87QUFDMUQ7QUFDQSxTQUFTNlcsY0FBQSxFQUFnQjtFQUN2QixNQUFNOWxCLE1BQUEsR0FBUztFQUNmLE1BQU07SUFDSitXLFNBQUE7SUFDQS9PLFdBQUE7SUFDQXhILE1BQUE7SUFDQWhFO0VBQ0YsSUFBSXdELE1BQUE7RUFDSixNQUFNdW5CLFlBQUEsR0FBYy9tQixNQUFBLENBQU84TyxXQUFBO0VBQzNCLElBQUksQ0FBQ2lZLFlBQUEsSUFBZUEsWUFBQSxJQUFldHZCLE1BQUEsQ0FBT0ksSUFBQSxDQUFLa3ZCLFlBQVcsRUFBRS91QixNQUFBLEtBQVcsR0FBRztFQUcxRSxNQUFNZ3ZCLFVBQUEsR0FBYXhuQixNQUFBLENBQU95bkIsYUFBQSxDQUFjRixZQUFBLEVBQWF2bkIsTUFBQSxDQUFPUSxNQUFBLENBQU9rbkIsZUFBQSxFQUFpQjFuQixNQUFBLENBQU94RCxFQUFFO0VBQzdGLElBQUksQ0FBQ2dyQixVQUFBLElBQWN4bkIsTUFBQSxDQUFPMm5CLGlCQUFBLEtBQXNCSCxVQUFBLEVBQVk7RUFDNUQsTUFBTUksb0JBQUEsR0FBdUJKLFVBQUEsSUFBY0QsWUFBQSxHQUFjQSxZQUFBLENBQVlDLFVBQVUsSUFBSTtFQUNuRixNQUFNSyxnQkFBQSxHQUFtQkQsb0JBQUEsSUFBd0I1bkIsTUFBQSxDQUFPOG5CLGNBQUE7RUFDeEQsTUFBTUMsV0FBQSxHQUFjVCxhQUFBLENBQWN0bkIsTUFBQSxFQUFRUSxNQUFNO0VBQ2hELE1BQU13bkIsVUFBQSxHQUFhVixhQUFBLENBQWN0bkIsTUFBQSxFQUFRNm5CLGdCQUFnQjtFQUN6RCxNQUFNSSxVQUFBLEdBQWF6bkIsTUFBQSxDQUFPK00sT0FBQTtFQUMxQixJQUFJd2EsV0FBQSxJQUFlLENBQUNDLFVBQUEsRUFBWTtJQUM5QnhyQixFQUFBLENBQUc2RixTQUFBLENBQVVpUSxNQUFBLENBQU8sR0FBRzlSLE1BQUEsQ0FBTzBSLHNCQUFzQixRQUFRLEdBQUcxUixNQUFBLENBQU8wUixzQkFBc0IsYUFBYTtJQUN6R2xTLE1BQUEsQ0FBT2tvQixvQkFBQSxDQUFxQjtFQUM5QixXQUFXLENBQUNILFdBQUEsSUFBZUMsVUFBQSxFQUFZO0lBQ3JDeHJCLEVBQUEsQ0FBRzZGLFNBQUEsQ0FBVUMsR0FBQSxDQUFJLEdBQUc5QixNQUFBLENBQU8wUixzQkFBc0IsTUFBTTtJQUN2RCxJQUFJMlYsZ0JBQUEsQ0FBaUI3WSxJQUFBLENBQUttWixJQUFBLElBQVFOLGdCQUFBLENBQWlCN1ksSUFBQSxDQUFLbVosSUFBQSxLQUFTLFlBQVksQ0FBQ04sZ0JBQUEsQ0FBaUI3WSxJQUFBLENBQUttWixJQUFBLElBQVEzbkIsTUFBQSxDQUFPd08sSUFBQSxDQUFLbVosSUFBQSxLQUFTLFVBQVU7TUFDekkzckIsRUFBQSxDQUFHNkYsU0FBQSxDQUFVQyxHQUFBLENBQUksR0FBRzlCLE1BQUEsQ0FBTzBSLHNCQUFzQixhQUFhO0lBQ2hFO0lBQ0FsUyxNQUFBLENBQU9rb0Isb0JBQUEsQ0FBcUI7RUFDOUI7RUFHQSxDQUFDLGNBQWMsY0FBYyxXQUFXLEVBQUU1dkIsT0FBQSxDQUFReUwsSUFBQSxJQUFRO0lBQ3hELElBQUksT0FBTzhqQixnQkFBQSxDQUFpQjlqQixJQUFJLE1BQU0sYUFBYTtJQUNuRCxNQUFNcWtCLGdCQUFBLEdBQW1CNW5CLE1BQUEsQ0FBT3VELElBQUksS0FBS3ZELE1BQUEsQ0FBT3VELElBQUksRUFBRXdKLE9BQUE7SUFDdEQsTUFBTThhLGVBQUEsR0FBa0JSLGdCQUFBLENBQWlCOWpCLElBQUksS0FBSzhqQixnQkFBQSxDQUFpQjlqQixJQUFJLEVBQUV3SixPQUFBO0lBQ3pFLElBQUk2YSxnQkFBQSxJQUFvQixDQUFDQyxlQUFBLEVBQWlCO01BQ3hDcm9CLE1BQUEsQ0FBTytELElBQUksRUFBRXVrQixPQUFBLENBQVE7SUFDdkI7SUFDQSxJQUFJLENBQUNGLGdCQUFBLElBQW9CQyxlQUFBLEVBQWlCO01BQ3hDcm9CLE1BQUEsQ0FBTytELElBQUksRUFBRXdrQixNQUFBLENBQU87SUFDdEI7RUFDRixDQUFDO0VBQ0QsTUFBTUMsZ0JBQUEsR0FBbUJYLGdCQUFBLENBQWlCOU4sU0FBQSxJQUFhOE4sZ0JBQUEsQ0FBaUI5TixTQUFBLEtBQWN2WixNQUFBLENBQU91WixTQUFBO0VBQzdGLE1BQU0wTyxXQUFBLEdBQWNqb0IsTUFBQSxDQUFPa1EsSUFBQSxLQUFTbVgsZ0JBQUEsQ0FBaUJ4WSxhQUFBLEtBQWtCN08sTUFBQSxDQUFPNk8sYUFBQSxJQUFpQm1aLGdCQUFBO0VBQy9GLE1BQU1FLE9BQUEsR0FBVWxvQixNQUFBLENBQU9rUSxJQUFBO0VBQ3ZCLElBQUk4WCxnQkFBQSxJQUFvQnhnQixXQUFBLEVBQWE7SUFDbkNoSSxNQUFBLENBQU8yb0IsZUFBQSxDQUFnQjtFQUN6QjtFQUNBanFCLE9BQUEsQ0FBT3NCLE1BQUEsQ0FBT1EsTUFBQSxFQUFRcW5CLGdCQUFnQjtFQUN0QyxNQUFNZSxTQUFBLEdBQVk1b0IsTUFBQSxDQUFPUSxNQUFBLENBQU8rTSxPQUFBO0VBQ2hDLE1BQU1zYixPQUFBLEdBQVU3b0IsTUFBQSxDQUFPUSxNQUFBLENBQU9rUSxJQUFBO0VBQzlCelksTUFBQSxDQUFPeVUsTUFBQSxDQUFPMU0sTUFBQSxFQUFRO0lBQ3BCMmhCLGNBQUEsRUFBZ0IzaEIsTUFBQSxDQUFPUSxNQUFBLENBQU9taEIsY0FBQTtJQUM5QmxILGNBQUEsRUFBZ0J6YSxNQUFBLENBQU9RLE1BQUEsQ0FBT2lhLGNBQUE7SUFDOUJDLGNBQUEsRUFBZ0IxYSxNQUFBLENBQU9RLE1BQUEsQ0FBT2thO0VBQ2hDLENBQUM7RUFDRCxJQUFJdU4sVUFBQSxJQUFjLENBQUNXLFNBQUEsRUFBVztJQUM1QjVvQixNQUFBLENBQU9zb0IsT0FBQSxDQUFRO0VBQ2pCLFdBQVcsQ0FBQ0wsVUFBQSxJQUFjVyxTQUFBLEVBQVc7SUFDbkM1b0IsTUFBQSxDQUFPdW9CLE1BQUEsQ0FBTztFQUNoQjtFQUNBdm9CLE1BQUEsQ0FBTzJuQixpQkFBQSxHQUFvQkgsVUFBQTtFQUMzQnhuQixNQUFBLENBQU8ySCxJQUFBLENBQUsscUJBQXFCa2dCLGdCQUFnQjtFQUNqRCxJQUFJN2YsV0FBQSxFQUFhO0lBQ2YsSUFBSXlnQixXQUFBLEVBQWE7TUFDZnpvQixNQUFBLENBQU9vZSxXQUFBLENBQVk7TUFDbkJwZSxNQUFBLENBQU8yYyxVQUFBLENBQVc1RixTQUFTO01BQzNCL1csTUFBQSxDQUFPMk0sWUFBQSxDQUFhO0lBQ3RCLFdBQVcsQ0FBQytiLE9BQUEsSUFBV0csT0FBQSxFQUFTO01BQzlCN29CLE1BQUEsQ0FBTzJjLFVBQUEsQ0FBVzVGLFNBQVM7TUFDM0IvVyxNQUFBLENBQU8yTSxZQUFBLENBQWE7SUFDdEIsV0FBVytiLE9BQUEsSUFBVyxDQUFDRyxPQUFBLEVBQVM7TUFDOUI3b0IsTUFBQSxDQUFPb2UsV0FBQSxDQUFZO0lBQ3JCO0VBQ0Y7RUFDQXBlLE1BQUEsQ0FBTzJILElBQUEsQ0FBSyxjQUFja2dCLGdCQUFnQjtBQUM1QztBQUVBLFNBQVNKLGNBQWNGLFlBQUEsRUFBYXZJLElBQUEsRUFBTThKLFdBQUEsRUFBYTtFQUNyRCxJQUFJOUosSUFBQSxLQUFTLFFBQVE7SUFDbkJBLElBQUEsR0FBTztFQUNUO0VBQ0EsSUFBSSxDQUFDdUksWUFBQSxJQUFldkksSUFBQSxLQUFTLGVBQWUsQ0FBQzhKLFdBQUEsRUFBYSxPQUFPO0VBQ2pFLElBQUl0QixVQUFBLEdBQWE7RUFDakIsTUFBTS9xQixPQUFBLEdBQVNYLFNBQUEsQ0FBVTtFQUN6QixNQUFNaXRCLGFBQUEsR0FBZ0IvSixJQUFBLEtBQVMsV0FBV3ZpQixPQUFBLENBQU91c0IsV0FBQSxHQUFjRixXQUFBLENBQVl6YyxZQUFBO0VBQzNFLE1BQU00YyxNQUFBLEdBQVNoeEIsTUFBQSxDQUFPSSxJQUFBLENBQUtrdkIsWUFBVyxFQUFFbHFCLEdBQUEsQ0FBSTZyQixLQUFBLElBQVM7SUFDbkQsSUFBSSxPQUFPQSxLQUFBLEtBQVUsWUFBWUEsS0FBQSxDQUFNaHFCLE9BQUEsQ0FBUSxHQUFHLE1BQU0sR0FBRztNQUN6RCxNQUFNaXFCLFFBQUEsR0FBV3ByQixVQUFBLENBQVdtckIsS0FBQSxDQUFNRSxNQUFBLENBQU8sQ0FBQyxDQUFDO01BQzNDLE1BQU1DLEtBQUEsR0FBUU4sYUFBQSxHQUFnQkksUUFBQTtNQUM5QixPQUFPO1FBQ0xFLEtBQUE7UUFDQUg7TUFDRjtJQUNGO0lBQ0EsT0FBTztNQUNMRyxLQUFBLEVBQU9ILEtBQUE7TUFDUEE7SUFDRjtFQUNGLENBQUM7RUFDREQsTUFBQSxDQUFPSyxJQUFBLENBQUssQ0FBQ2hzQixDQUFBLEVBQUdpc0IsQ0FBQSxLQUFNL2MsUUFBQSxDQUFTbFAsQ0FBQSxDQUFFK3JCLEtBQUEsRUFBTyxFQUFFLElBQUk3YyxRQUFBLENBQVMrYyxDQUFBLENBQUVGLEtBQUEsRUFBTyxFQUFFLENBQUM7RUFDbkUsU0FBU3ZxQixDQUFBLEdBQUksR0FBR0EsQ0FBQSxHQUFJbXFCLE1BQUEsQ0FBT3p3QixNQUFBLEVBQVFzRyxDQUFBLElBQUssR0FBRztJQUN6QyxNQUFNO01BQ0pvcUIsS0FBQTtNQUNBRztJQUNGLElBQUlKLE1BQUEsQ0FBT25xQixDQUFDO0lBQ1osSUFBSWtnQixJQUFBLEtBQVMsVUFBVTtNQUNyQixJQUFJdmlCLE9BQUEsQ0FBT2hCLFVBQUEsQ0FBVyxlQUFlNHRCLEtBQUssS0FBSyxFQUFFbm5CLE9BQUEsRUFBUztRQUN4RHNsQixVQUFBLEdBQWEwQixLQUFBO01BQ2Y7SUFDRixXQUFXRyxLQUFBLElBQVNQLFdBQUEsQ0FBWTFjLFdBQUEsRUFBYTtNQUMzQ29iLFVBQUEsR0FBYTBCLEtBQUE7SUFDZjtFQUNGO0VBQ0EsT0FBTzFCLFVBQUEsSUFBYztBQUN2QjtBQUVBLElBQUlsWSxXQUFBLEdBQWM7RUFDaEJ3VyxhQUFBO0VBQ0EyQjtBQUNGO0FBRUEsU0FBUytCLGVBQWVyaEIsT0FBQSxFQUFTc2hCLE1BQUEsRUFBUTtFQUN2QyxNQUFNQyxhQUFBLEdBQWdCLEVBQUM7RUFDdkJ2aEIsT0FBQSxDQUFRN1AsT0FBQSxDQUFRcXhCLElBQUEsSUFBUTtJQUN0QixJQUFJLE9BQU9BLElBQUEsS0FBUyxVQUFVO01BQzVCMXhCLE1BQUEsQ0FBT0ksSUFBQSxDQUFLc3hCLElBQUksRUFBRXJ4QixPQUFBLENBQVFzeEIsVUFBQSxJQUFjO1FBQ3RDLElBQUlELElBQUEsQ0FBS0MsVUFBVSxHQUFHO1VBQ3BCRixhQUFBLENBQWNqbUIsSUFBQSxDQUFLZ21CLE1BQUEsR0FBU0csVUFBVTtRQUN4QztNQUNGLENBQUM7SUFDSCxXQUFXLE9BQU9ELElBQUEsS0FBUyxVQUFVO01BQ25DRCxhQUFBLENBQWNqbUIsSUFBQSxDQUFLZ21CLE1BQUEsR0FBU0UsSUFBSTtJQUNsQztFQUNGLENBQUM7RUFDRCxPQUFPRCxhQUFBO0FBQ1Q7QUFDQSxTQUFTRyxXQUFBLEVBQWE7RUFDcEIsTUFBTTdwQixNQUFBLEdBQVM7RUFDZixNQUFNO0lBQ0o0cEIsVUFBQTtJQUNBcHBCLE1BQUE7SUFDQTJNLEdBQUE7SUFDQTNRLEVBQUE7SUFDQWtKO0VBQ0YsSUFBSTFGLE1BQUE7RUFFSixNQUFNOHBCLFFBQUEsR0FBV04sY0FBQSxDQUFlLENBQUMsZUFBZWhwQixNQUFBLENBQU91WixTQUFBLEVBQVc7SUFDaEUsYUFBYS9aLE1BQUEsQ0FBT1EsTUFBQSxDQUFPdWhCLFFBQUEsSUFBWXZoQixNQUFBLENBQU91aEIsUUFBQSxDQUFTeFU7RUFDekQsR0FBRztJQUNELGNBQWMvTSxNQUFBLENBQU8yVTtFQUN2QixHQUFHO0lBQ0QsT0FBT2hJO0VBQ1QsR0FBRztJQUNELFFBQVEzTSxNQUFBLENBQU93TyxJQUFBLElBQVF4TyxNQUFBLENBQU93TyxJQUFBLENBQUtDLElBQUEsR0FBTztFQUM1QyxHQUFHO0lBQ0QsZUFBZXpPLE1BQUEsQ0FBT3dPLElBQUEsSUFBUXhPLE1BQUEsQ0FBT3dPLElBQUEsQ0FBS0MsSUFBQSxHQUFPLEtBQUt6TyxNQUFBLENBQU93TyxJQUFBLENBQUttWixJQUFBLEtBQVM7RUFDN0UsR0FBRztJQUNELFdBQVd6aUIsTUFBQSxDQUFPRTtFQUNwQixHQUFHO0lBQ0QsT0FBT0YsTUFBQSxDQUFPQztFQUNoQixHQUFHO0lBQ0QsWUFBWW5GLE1BQUEsQ0FBT3NPO0VBQ3JCLEdBQUc7SUFDRCxZQUFZdE8sTUFBQSxDQUFPc08sT0FBQSxJQUFXdE8sTUFBQSxDQUFPcU87RUFDdkMsR0FBRztJQUNELGtCQUFrQnJPLE1BQUEsQ0FBT3VSO0VBQzNCLENBQUMsR0FBR3ZSLE1BQUEsQ0FBTzBSLHNCQUFzQjtFQUNqQzBYLFVBQUEsQ0FBV25tQixJQUFBLENBQUssR0FBR3FtQixRQUFRO0VBQzNCdHRCLEVBQUEsQ0FBRzZGLFNBQUEsQ0FBVUMsR0FBQSxDQUFJLEdBQUdzbkIsVUFBVTtFQUM5QjVwQixNQUFBLENBQU9rb0Isb0JBQUEsQ0FBcUI7QUFDOUI7QUFFQSxTQUFTNkIsY0FBQSxFQUFnQjtFQUN2QixNQUFNL3BCLE1BQUEsR0FBUztFQUNmLE1BQU07SUFDSnhELEVBQUE7SUFDQW90QjtFQUNGLElBQUk1cEIsTUFBQTtFQUNKeEQsRUFBQSxDQUFHNkYsU0FBQSxDQUFVaVEsTUFBQSxDQUFPLEdBQUdzWCxVQUFVO0VBQ2pDNXBCLE1BQUEsQ0FBT2tvQixvQkFBQSxDQUFxQjtBQUM5QjtBQUVBLElBQUk4QixPQUFBLEdBQVU7RUFDWkgsVUFBQTtFQUNBRTtBQUNGO0FBRUEsU0FBU2pZLGNBQUEsRUFBZ0I7RUFDdkIsTUFBTTlSLE1BQUEsR0FBUztFQUNmLE1BQU07SUFDSjBlLFFBQUEsRUFBVXVMLFNBQUE7SUFDVnpwQjtFQUNGLElBQUlSLE1BQUE7RUFDSixNQUFNO0lBQ0pnTztFQUNGLElBQUl4TixNQUFBO0VBQ0osSUFBSXdOLGtCQUFBLEVBQW9CO0lBQ3RCLE1BQU04RyxjQUFBLEdBQWlCOVUsTUFBQSxDQUFPeU4sTUFBQSxDQUFPalYsTUFBQSxHQUFTO0lBQzlDLE1BQU0weEIsa0JBQUEsR0FBcUJscUIsTUFBQSxDQUFPNk4sVUFBQSxDQUFXaUgsY0FBYyxJQUFJOVUsTUFBQSxDQUFPOE4sZUFBQSxDQUFnQmdILGNBQWMsSUFBSTlHLGtCQUFBLEdBQXFCO0lBQzdIaE8sTUFBQSxDQUFPMGUsUUFBQSxHQUFXMWUsTUFBQSxDQUFPMEUsSUFBQSxHQUFPd2xCLGtCQUFBO0VBQ2xDLE9BQU87SUFDTGxxQixNQUFBLENBQU8wZSxRQUFBLEdBQVcxZSxNQUFBLENBQU80TixRQUFBLENBQVNwVixNQUFBLEtBQVc7RUFDL0M7RUFDQSxJQUFJZ0ksTUFBQSxDQUFPaWEsY0FBQSxLQUFtQixNQUFNO0lBQ2xDemEsTUFBQSxDQUFPeWEsY0FBQSxHQUFpQixDQUFDemEsTUFBQSxDQUFPMGUsUUFBQTtFQUNsQztFQUNBLElBQUlsZSxNQUFBLENBQU9rYSxjQUFBLEtBQW1CLE1BQU07SUFDbEMxYSxNQUFBLENBQU8wYSxjQUFBLEdBQWlCLENBQUMxYSxNQUFBLENBQU8wZSxRQUFBO0VBQ2xDO0VBQ0EsSUFBSXVMLFNBQUEsSUFBYUEsU0FBQSxLQUFjanFCLE1BQUEsQ0FBTzBlLFFBQUEsRUFBVTtJQUM5QzFlLE1BQUEsQ0FBT3VVLEtBQUEsR0FBUTtFQUNqQjtFQUNBLElBQUkwVixTQUFBLEtBQWNqcUIsTUFBQSxDQUFPMGUsUUFBQSxFQUFVO0lBQ2pDMWUsTUFBQSxDQUFPMkgsSUFBQSxDQUFLM0gsTUFBQSxDQUFPMGUsUUFBQSxHQUFXLFNBQVMsUUFBUTtFQUNqRDtBQUNGO0FBQ0EsSUFBSXlMLGVBQUEsR0FBa0I7RUFDcEJyWTtBQUNGO0FBRUEsSUFBSXNZLFFBQUEsR0FBVztFQUNicmdCLElBQUEsRUFBTTtFQUNOZ1EsU0FBQSxFQUFXO0VBQ1h5SixjQUFBLEVBQWdCO0VBQ2hCN0UsaUJBQUEsRUFBbUI7RUFDbkI3RCxZQUFBLEVBQWM7RUFDZHJhLEtBQUEsRUFBTztFQUNQcU8sT0FBQSxFQUFTO0VBQ1RtWSxvQkFBQSxFQUFzQjtFQUN0QmxlLGNBQUEsRUFBZ0I7RUFDaEJvYSxNQUFBLEVBQVE7RUFDUmtILGNBQUEsRUFBZ0I7RUFDaEI5YyxPQUFBLEVBQVM7RUFDVGtVLGlCQUFBLEVBQW1CO0VBQUE7RUFFbkIzYixLQUFBLEVBQU87RUFDUEUsTUFBQSxFQUFRO0VBQUE7RUFFUm9ULDhCQUFBLEVBQWdDO0VBQUE7RUFFaEN6ZSxTQUFBLEVBQVc7RUFDWDJ2QixHQUFBLEVBQUs7RUFBQTtFQUVMekosa0JBQUEsRUFBb0I7RUFDcEJFLGtCQUFBLEVBQW9CO0VBQUE7RUFFcEI1TCxVQUFBLEVBQVk7RUFBQTtFQUVaN0UsY0FBQSxFQUFnQjtFQUFBO0VBRWhCZ0ksZ0JBQUEsRUFBa0I7RUFBQTtFQUVsQmpJLE1BQUEsRUFBUTtFQUFBO0VBQUE7RUFJUmYsV0FBQSxFQUFhO0VBQ2JvWSxlQUFBLEVBQWlCO0VBQUE7RUFFakJyWixZQUFBLEVBQWM7RUFDZGdCLGFBQUEsRUFBZTtFQUNmYyxjQUFBLEVBQWdCO0VBQ2hCQyxrQkFBQSxFQUFvQjtFQUNwQmlMLGtCQUFBLEVBQW9CO0VBQ3BCeE0sY0FBQSxFQUFnQjtFQUNoQnFDLG9CQUFBLEVBQXNCO0VBQ3RCbEQsa0JBQUEsRUFBb0I7RUFBQTtFQUVwQkUsaUJBQUEsRUFBbUI7RUFBQTtFQUVuQitJLG1CQUFBLEVBQXFCO0VBQ3JCMUYsd0JBQUEsRUFBMEI7RUFBQTtFQUUxQk0sYUFBQSxFQUFlO0VBQUE7RUFFZmpDLFlBQUEsRUFBYztFQUFBO0VBRWQ2VCxVQUFBLEVBQVk7RUFDWlgsVUFBQSxFQUFZO0VBQ1pyRSxhQUFBLEVBQWU7RUFDZitHLFdBQUEsRUFBYTtFQUNiRixVQUFBLEVBQVk7RUFDWkMsZUFBQSxFQUFpQjtFQUNqQkYsWUFBQSxFQUFjO0VBQ2RkLFlBQUEsRUFBYztFQUNkNUMsY0FBQSxFQUFnQjtFQUNoQnZGLFNBQUEsRUFBVztFQUNYOEcsd0JBQUEsRUFBMEI7RUFDMUJ0Qix3QkFBQSxFQUEwQjtFQUMxQkMsNkJBQUEsRUFBK0I7RUFDL0JZLG1CQUFBLEVBQXFCO0VBQUE7RUFFckI4SCxpQkFBQSxFQUFtQjtFQUFBO0VBRW5CakcsVUFBQSxFQUFZO0VBQ1pELGVBQUEsRUFBaUI7RUFBQTtFQUVqQnRTLG1CQUFBLEVBQXFCO0VBQUE7RUFFckIrTSxVQUFBLEVBQVk7RUFBQTtFQUVad0gsYUFBQSxFQUFlO0VBQ2ZDLHdCQUFBLEVBQTBCO0VBQzFCcE8sbUJBQUEsRUFBcUI7RUFBQTtFQUVyQnpILElBQUEsRUFBTTtFQUNOOEwsWUFBQSxFQUFjO0VBQ2RqQixtQkFBQSxFQUFxQjtFQUFBO0VBRXJCekUsTUFBQSxFQUFRO0VBQUE7RUFFUjRELGNBQUEsRUFBZ0I7RUFDaEJELGNBQUEsRUFBZ0I7RUFDaEI2RixZQUFBLEVBQWM7RUFBQTtFQUVkRixTQUFBLEVBQVc7RUFDWEwsY0FBQSxFQUFnQjtFQUNoQkcsaUJBQUEsRUFBbUI7RUFBQTtFQUVuQnNLLGdCQUFBLEVBQWtCO0VBQ2xCblksdUJBQUEsRUFBeUI7RUFBQTtFQUV6Qkgsc0JBQUEsRUFBd0I7RUFBQTtFQUV4QnhFLFVBQUEsRUFBWTtFQUNaNEgsZ0JBQUEsRUFBa0I7RUFDbEI5QixpQkFBQSxFQUFtQjtFQUNuQitCLGNBQUEsRUFBZ0I7RUFDaEJDLGNBQUEsRUFBZ0I7RUFDaEJpVixZQUFBLEVBQWM7RUFDZHZVLGtCQUFBLEVBQW9CO0VBQ3BCSyxtQkFBQSxFQUFxQjtFQUFBO0VBRXJCcUIsa0JBQUEsRUFBb0I7RUFBQTtFQUVwQjhTLFlBQUEsRUFBYztBQUNoQjtBQUVBLFNBQVNDLG1CQUFtQm5xQixNQUFBLEVBQVFvcUIsZ0JBQUEsRUFBa0I7RUFDcEQsT0FBTyxTQUFTM2hCLGFBQWFsUixHQUFBLEVBQUs7SUFDaEMsSUFBSUEsR0FBQSxLQUFRLFFBQVE7TUFDbEJBLEdBQUEsR0FBTSxDQUFDO0lBQ1Q7SUFDQSxNQUFNOHlCLGVBQUEsR0FBa0I1eUIsTUFBQSxDQUFPSSxJQUFBLENBQUtOLEdBQUcsRUFBRSxDQUFDO0lBQzFDLE1BQU0reUIsWUFBQSxHQUFlL3lCLEdBQUEsQ0FBSTh5QixlQUFlO0lBQ3hDLElBQUksT0FBT0MsWUFBQSxLQUFpQixZQUFZQSxZQUFBLEtBQWlCLE1BQU07TUFDN0Rwc0IsT0FBQSxDQUFPa3NCLGdCQUFBLEVBQWtCN3lCLEdBQUc7TUFDNUI7SUFDRjtJQUNBLElBQUl5SSxNQUFBLENBQU9xcUIsZUFBZSxNQUFNLE1BQU07TUFDcENycUIsTUFBQSxDQUFPcXFCLGVBQWUsSUFBSTtRQUN4QnRkLE9BQUEsRUFBUztNQUNYO0lBQ0Y7SUFDQSxJQUFJc2QsZUFBQSxLQUFvQixnQkFBZ0JycUIsTUFBQSxDQUFPcXFCLGVBQWUsS0FBS3JxQixNQUFBLENBQU9xcUIsZUFBZSxFQUFFdGQsT0FBQSxJQUFXLENBQUMvTSxNQUFBLENBQU9xcUIsZUFBZSxFQUFFakYsTUFBQSxJQUFVLENBQUNwbEIsTUFBQSxDQUFPcXFCLGVBQWUsRUFBRWxGLE1BQUEsRUFBUTtNQUN4S25sQixNQUFBLENBQU9xcUIsZUFBZSxFQUFFRSxJQUFBLEdBQU87SUFDakM7SUFDQSxJQUFJLENBQUMsY0FBYyxXQUFXLEVBQUU3ckIsT0FBQSxDQUFRMnJCLGVBQWUsS0FBSyxLQUFLcnFCLE1BQUEsQ0FBT3FxQixlQUFlLEtBQUtycUIsTUFBQSxDQUFPcXFCLGVBQWUsRUFBRXRkLE9BQUEsSUFBVyxDQUFDL00sTUFBQSxDQUFPcXFCLGVBQWUsRUFBRXJ1QixFQUFBLEVBQUk7TUFDMUpnRSxNQUFBLENBQU9xcUIsZUFBZSxFQUFFRSxJQUFBLEdBQU87SUFDakM7SUFDQSxJQUFJLEVBQUVGLGVBQUEsSUFBbUJycUIsTUFBQSxJQUFVLGFBQWFzcUIsWUFBQSxHQUFlO01BQzdEcHNCLE9BQUEsQ0FBT2tzQixnQkFBQSxFQUFrQjd5QixHQUFHO01BQzVCO0lBQ0Y7SUFDQSxJQUFJLE9BQU95SSxNQUFBLENBQU9xcUIsZUFBZSxNQUFNLFlBQVksRUFBRSxhQUFhcnFCLE1BQUEsQ0FBT3FxQixlQUFlLElBQUk7TUFDMUZycUIsTUFBQSxDQUFPcXFCLGVBQWUsRUFBRXRkLE9BQUEsR0FBVTtJQUNwQztJQUNBLElBQUksQ0FBQy9NLE1BQUEsQ0FBT3FxQixlQUFlLEdBQUdycUIsTUFBQSxDQUFPcXFCLGVBQWUsSUFBSTtNQUN0RHRkLE9BQUEsRUFBUztJQUNYO0lBQ0E3TyxPQUFBLENBQU9rc0IsZ0JBQUEsRUFBa0I3eUIsR0FBRztFQUM5QjtBQUNGO0FBR0EsSUFBTWl6QixVQUFBLEdBQWE7RUFDakJ6Z0IsYUFBQTtFQUNBNk4sTUFBQTtFQUNBaFksU0FBQTtFQUNBK1osVUFBQTtFQUNBdUMsS0FBQTtFQUNBaE0sSUFBQTtFQUNBb08sVUFBQTtFQUNBOVMsTUFBQSxFQUFRcWIsUUFBQTtFQUNSL1gsV0FBQTtFQUNBd0MsYUFBQSxFQUFlcVksZUFBQTtFQUNmSDtBQUNGO0FBQ0EsSUFBTWlCLGdCQUFBLEdBQW1CLENBQUM7QUFDMUIsSUFBTXp6QixNQUFBLEdBQU4sTUFBTTB6QixPQUFBLENBQU87RUFDWGx6QixZQUFBLEVBQWM7SUFDWixJQUFJd0UsRUFBQTtJQUNKLElBQUlnRSxNQUFBO0lBQ0osU0FBUzJLLElBQUEsR0FBT3ZNLFNBQUEsQ0FBVXBHLE1BQUEsRUFBUTRTLElBQUEsR0FBTyxJQUFJN0ksS0FBQSxDQUFNNEksSUFBSSxHQUFHRSxJQUFBLEdBQU8sR0FBR0EsSUFBQSxHQUFPRixJQUFBLEVBQU1FLElBQUEsSUFBUTtNQUN2RkQsSUFBQSxDQUFLQyxJQUFJLElBQUl6TSxTQUFBLENBQVV5TSxJQUFJO0lBQzdCO0lBQ0EsSUFBSUQsSUFBQSxDQUFLNVMsTUFBQSxLQUFXLEtBQUs0UyxJQUFBLENBQUssQ0FBQyxFQUFFcFQsV0FBQSxJQUFlQyxNQUFBLENBQU9rRyxTQUFBLENBQVVOLFFBQUEsQ0FBU08sSUFBQSxDQUFLZ04sSUFBQSxDQUFLLENBQUMsQ0FBQyxFQUFFL00sS0FBQSxDQUFNLEdBQUcsRUFBRSxNQUFNLFVBQVU7TUFDakhtQyxNQUFBLEdBQVM0SyxJQUFBLENBQUssQ0FBQztJQUNqQixPQUFPO01BQ0wsQ0FBQzVPLEVBQUEsRUFBSWdFLE1BQU0sSUFBSTRLLElBQUE7SUFDakI7SUFDQSxJQUFJLENBQUM1SyxNQUFBLEVBQVFBLE1BQUEsR0FBUyxDQUFDO0lBQ3ZCQSxNQUFBLEdBQVM5QixPQUFBLENBQU8sQ0FBQyxHQUFHOEIsTUFBTTtJQUMxQixJQUFJaEUsRUFBQSxJQUFNLENBQUNnRSxNQUFBLENBQU9oRSxFQUFBLEVBQUlnRSxNQUFBLENBQU9oRSxFQUFBLEdBQUtBLEVBQUE7SUFDbEMsTUFBTWtHLFNBQUEsR0FBV3BJLFdBQUEsQ0FBWTtJQUM3QixJQUFJa0csTUFBQSxDQUFPaEUsRUFBQSxJQUFNLE9BQU9nRSxNQUFBLENBQU9oRSxFQUFBLEtBQU8sWUFBWWtHLFNBQUEsQ0FBU3pKLGdCQUFBLENBQWlCdUgsTUFBQSxDQUFPaEUsRUFBRSxFQUFFaEUsTUFBQSxHQUFTLEdBQUc7TUFDakcsTUFBTTJ5QixPQUFBLEdBQVUsRUFBQztNQUNqQnpvQixTQUFBLENBQVN6SixnQkFBQSxDQUFpQnVILE1BQUEsQ0FBT2hFLEVBQUUsRUFBRWxFLE9BQUEsQ0FBUXd3QixXQUFBLElBQWU7UUFDMUQsTUFBTXNDLFNBQUEsR0FBWTFzQixPQUFBLENBQU8sQ0FBQyxHQUFHOEIsTUFBQSxFQUFRO1VBQ25DaEUsRUFBQSxFQUFJc3NCO1FBQ04sQ0FBQztRQUNEcUMsT0FBQSxDQUFRMW5CLElBQUEsQ0FBSyxJQUFJeW5CLE9BQUEsQ0FBT0UsU0FBUyxDQUFDO01BQ3BDLENBQUM7TUFFRCxPQUFPRCxPQUFBO0lBQ1Q7SUFHQSxNQUFNbnJCLE1BQUEsR0FBUztJQUNmQSxNQUFBLENBQU9QLFVBQUEsR0FBYTtJQUNwQk8sTUFBQSxDQUFPNkUsT0FBQSxHQUFVTSxVQUFBLENBQVc7SUFDNUJuRixNQUFBLENBQU8wRixNQUFBLEdBQVNlLFNBQUEsQ0FBVTtNQUN4QjlMLFNBQUEsRUFBVzZGLE1BQUEsQ0FBTzdGO0lBQ3BCLENBQUM7SUFDRHFGLE1BQUEsQ0FBTzJHLE9BQUEsR0FBVWEsVUFBQSxDQUFXO0lBQzVCeEgsTUFBQSxDQUFPNEssZUFBQSxHQUFrQixDQUFDO0lBQzFCNUssTUFBQSxDQUFPd0wsa0JBQUEsR0FBcUIsRUFBQztJQUM3QnhMLE1BQUEsQ0FBT3FyQixPQUFBLEdBQVUsQ0FBQyxHQUFHcnJCLE1BQUEsQ0FBT3NyQixXQUFXO0lBQ3ZDLElBQUk5cUIsTUFBQSxDQUFPNnFCLE9BQUEsSUFBVzlvQixLQUFBLENBQU1DLE9BQUEsQ0FBUWhDLE1BQUEsQ0FBTzZxQixPQUFPLEdBQUc7TUFDbkRyckIsTUFBQSxDQUFPcXJCLE9BQUEsQ0FBUTVuQixJQUFBLENBQUssR0FBR2pELE1BQUEsQ0FBTzZxQixPQUFPO0lBQ3ZDO0lBQ0EsTUFBTVQsZ0JBQUEsR0FBbUIsQ0FBQztJQUMxQjVxQixNQUFBLENBQU9xckIsT0FBQSxDQUFRL3lCLE9BQUEsQ0FBUWl6QixHQUFBLElBQU87TUFDNUJBLEdBQUEsQ0FBSTtRQUNGL3FCLE1BQUE7UUFDQVIsTUFBQTtRQUNBaUosWUFBQSxFQUFjMGhCLGtCQUFBLENBQW1CbnFCLE1BQUEsRUFBUW9xQixnQkFBZ0I7UUFDekRsakIsRUFBQSxFQUFJMUgsTUFBQSxDQUFPMEgsRUFBQSxDQUFHeWYsSUFBQSxDQUFLbm5CLE1BQU07UUFDekIrSyxJQUFBLEVBQU0vSyxNQUFBLENBQU8rSyxJQUFBLENBQUtvYyxJQUFBLENBQUtubkIsTUFBTTtRQUM3QmlMLEdBQUEsRUFBS2pMLE1BQUEsQ0FBT2lMLEdBQUEsQ0FBSWtjLElBQUEsQ0FBS25uQixNQUFNO1FBQzNCMkgsSUFBQSxFQUFNM0gsTUFBQSxDQUFPMkgsSUFBQSxDQUFLd2YsSUFBQSxDQUFLbm5CLE1BQU07TUFDL0IsQ0FBQztJQUNILENBQUM7SUFHRCxNQUFNd3JCLFlBQUEsR0FBZTlzQixPQUFBLENBQU8sQ0FBQyxHQUFHMHJCLFFBQUEsRUFBVVEsZ0JBQWdCO0lBRzFENXFCLE1BQUEsQ0FBT1EsTUFBQSxHQUFTOUIsT0FBQSxDQUFPLENBQUMsR0FBRzhzQixZQUFBLEVBQWNQLGdCQUFBLEVBQWtCenFCLE1BQU07SUFDakVSLE1BQUEsQ0FBTzhuQixjQUFBLEdBQWlCcHBCLE9BQUEsQ0FBTyxDQUFDLEdBQUdzQixNQUFBLENBQU9RLE1BQU07SUFDaERSLE1BQUEsQ0FBT3lyQixZQUFBLEdBQWUvc0IsT0FBQSxDQUFPLENBQUMsR0FBRzhCLE1BQU07SUFHdkMsSUFBSVIsTUFBQSxDQUFPUSxNQUFBLElBQVVSLE1BQUEsQ0FBT1EsTUFBQSxDQUFPa0gsRUFBQSxFQUFJO01BQ3JDelAsTUFBQSxDQUFPSSxJQUFBLENBQUsySCxNQUFBLENBQU9RLE1BQUEsQ0FBT2tILEVBQUUsRUFBRXBQLE9BQUEsQ0FBUW96QixTQUFBLElBQWE7UUFDakQxckIsTUFBQSxDQUFPMEgsRUFBQSxDQUFHZ2tCLFNBQUEsRUFBVzFyQixNQUFBLENBQU9RLE1BQUEsQ0FBT2tILEVBQUEsQ0FBR2drQixTQUFTLENBQUM7TUFDbEQsQ0FBQztJQUNIO0lBQ0EsSUFBSTFyQixNQUFBLENBQU9RLE1BQUEsSUFBVVIsTUFBQSxDQUFPUSxNQUFBLENBQU8rSyxLQUFBLEVBQU87TUFDeEN2TCxNQUFBLENBQU91TCxLQUFBLENBQU12TCxNQUFBLENBQU9RLE1BQUEsQ0FBTytLLEtBQUs7SUFDbEM7SUFHQXRULE1BQUEsQ0FBT3lVLE1BQUEsQ0FBTzFNLE1BQUEsRUFBUTtNQUNwQnVOLE9BQUEsRUFBU3ZOLE1BQUEsQ0FBT1EsTUFBQSxDQUFPK00sT0FBQTtNQUN2Qi9RLEVBQUE7TUFBQTtNQUVBb3RCLFVBQUEsRUFBWSxFQUFDO01BQUE7TUFFYm5jLE1BQUEsRUFBUSxFQUFDO01BQ1RJLFVBQUEsRUFBWSxFQUFDO01BQ2JELFFBQUEsRUFBVSxFQUFDO01BQ1hFLGVBQUEsRUFBaUIsRUFBQztNQUFBO01BRWxCeEIsYUFBQSxFQUFlO1FBQ2IsT0FBT3RNLE1BQUEsQ0FBT1EsTUFBQSxDQUFPdVosU0FBQSxLQUFjO01BQ3JDO01BQ0F4TixXQUFBLEVBQWE7UUFDWCxPQUFPdk0sTUFBQSxDQUFPUSxNQUFBLENBQU91WixTQUFBLEtBQWM7TUFDckM7TUFBQTtNQUVBbEgsV0FBQSxFQUFhO01BQ2JrRSxTQUFBLEVBQVc7TUFBQTtNQUVYekMsV0FBQSxFQUFhO01BQ2JDLEtBQUEsRUFBTztNQUFBO01BRVBuVSxTQUFBLEVBQVc7TUFDWHlZLGlCQUFBLEVBQW1CO01BQ25CM1gsUUFBQSxFQUFVO01BQ1Z5cUIsUUFBQSxFQUFVO01BQ1Z4UyxTQUFBLEVBQVc7TUFDWC9GLHNCQUFBLEVBQXdCO1FBR3RCLE9BQU9qUyxJQUFBLENBQUt5cUIsS0FBQSxDQUFNLEtBQUt4ckIsU0FBQSxHQUFZLEtBQUssRUFBRSxJQUFJLEtBQUs7TUFDckQ7TUFBQTtNQUVBcWEsY0FBQSxFQUFnQnphLE1BQUEsQ0FBT1EsTUFBQSxDQUFPaWEsY0FBQTtNQUM5QkMsY0FBQSxFQUFnQjFhLE1BQUEsQ0FBT1EsTUFBQSxDQUFPa2EsY0FBQTtNQUFBO01BRTlCcUQsZUFBQSxFQUFpQjtRQUNmNkIsU0FBQSxFQUFXO1FBQ1hDLE9BQUEsRUFBUztRQUNUc0IsbUJBQUEsRUFBcUI7UUFDckJHLGNBQUEsRUFBZ0I7UUFDaEJGLFdBQUEsRUFBYTtRQUNiN0ksZ0JBQUEsRUFBa0I7UUFDbEJ1TCxjQUFBLEVBQWdCO1FBQ2hCdEMsa0JBQUEsRUFBb0I7UUFBQTtRQUVwQkMsaUJBQUEsRUFBbUJ6aEIsTUFBQSxDQUFPUSxNQUFBLENBQU9paEIsaUJBQUE7UUFBQTtRQUVqQ3FELGFBQUEsRUFBZTtRQUNmK0csWUFBQSxFQUFjO1FBQUE7UUFFZEMsVUFBQSxFQUFZLEVBQUM7UUFDYjVILG1CQUFBLEVBQXFCO1FBQ3JCN0MsV0FBQSxFQUFhO1FBQ2IvQixPQUFBLEVBQVM7TUFDWDtNQUFBO01BRUFlLFVBQUEsRUFBWTtNQUFBO01BRVpzQixjQUFBLEVBQWdCM2hCLE1BQUEsQ0FBT1EsTUFBQSxDQUFPbWhCLGNBQUE7TUFDOUI3RCxPQUFBLEVBQVM7UUFDUDZDLE1BQUEsRUFBUTtRQUNSQyxNQUFBLEVBQVE7UUFDUkwsUUFBQSxFQUFVO1FBQ1ZFLFFBQUEsRUFBVTtRQUNWNUMsSUFBQSxFQUFNO01BQ1I7TUFBQTtNQUVBa08sWUFBQSxFQUFjLEVBQUM7TUFDZkMsWUFBQSxFQUFjO0lBQ2hCLENBQUM7SUFDRGhzQixNQUFBLENBQU8ySCxJQUFBLENBQUssU0FBUztJQUdyQixJQUFJM0gsTUFBQSxDQUFPUSxNQUFBLENBQU91SixJQUFBLEVBQU07TUFDdEIvSixNQUFBLENBQU8rSixJQUFBLENBQUs7SUFDZDtJQUlBLE9BQU8vSixNQUFBO0VBQ1Q7RUFDQXljLGNBQWM1YSxPQUFBLEVBQVM7SUFDckIsTUFBTTtNQUNKbUwsUUFBQTtNQUNBeE07SUFDRixJQUFJO0lBQ0osTUFBTWlOLE1BQUEsR0FBUzFMLGVBQUEsQ0FBZ0JpTCxRQUFBLEVBQVUsSUFBSXhNLE1BQUEsQ0FBT2tOLFVBQVUsZ0JBQWdCO0lBQzlFLE1BQU1tSCxlQUFBLEdBQWtCN1EsWUFBQSxDQUFheUosTUFBQSxDQUFPLENBQUMsQ0FBQztJQUM5QyxPQUFPekosWUFBQSxDQUFhbkMsT0FBTyxJQUFJZ1QsZUFBQTtFQUNqQztFQUNBbEMsb0JBQW9CakgsS0FBQSxFQUFPO0lBQ3pCLE9BQU8sS0FBSytRLGFBQUEsQ0FBYyxLQUFLaFAsTUFBQSxDQUFPeE8sTUFBQSxDQUFPNEMsT0FBQSxJQUFXQSxPQUFBLENBQVE4VixZQUFBLENBQWEseUJBQXlCLElBQUksTUFBTWpNLEtBQUssRUFBRSxDQUFDLENBQUM7RUFDM0g7RUFDQWdTLGFBQUEsRUFBZTtJQUNiLE1BQU0xZCxNQUFBLEdBQVM7SUFDZixNQUFNO01BQ0pnTixRQUFBO01BQ0F4TTtJQUNGLElBQUlSLE1BQUE7SUFDSkEsTUFBQSxDQUFPeU4sTUFBQSxHQUFTMUwsZUFBQSxDQUFnQmlMLFFBQUEsRUFBVSxJQUFJeE0sTUFBQSxDQUFPa04sVUFBVSxnQkFBZ0I7RUFDakY7RUFDQTZhLE9BQUEsRUFBUztJQUNQLE1BQU12b0IsTUFBQSxHQUFTO0lBQ2YsSUFBSUEsTUFBQSxDQUFPdU4sT0FBQSxFQUFTO0lBQ3BCdk4sTUFBQSxDQUFPdU4sT0FBQSxHQUFVO0lBQ2pCLElBQUl2TixNQUFBLENBQU9RLE1BQUEsQ0FBT3NlLFVBQUEsRUFBWTtNQUM1QjllLE1BQUEsQ0FBT3VlLGFBQUEsQ0FBYztJQUN2QjtJQUNBdmUsTUFBQSxDQUFPMkgsSUFBQSxDQUFLLFFBQVE7RUFDdEI7RUFDQTJnQixRQUFBLEVBQVU7SUFDUixNQUFNdG9CLE1BQUEsR0FBUztJQUNmLElBQUksQ0FBQ0EsTUFBQSxDQUFPdU4sT0FBQSxFQUFTO0lBQ3JCdk4sTUFBQSxDQUFPdU4sT0FBQSxHQUFVO0lBQ2pCLElBQUl2TixNQUFBLENBQU9RLE1BQUEsQ0FBT3NlLFVBQUEsRUFBWTtNQUM1QjllLE1BQUEsQ0FBTzZlLGVBQUEsQ0FBZ0I7SUFDekI7SUFDQTdlLE1BQUEsQ0FBTzJILElBQUEsQ0FBSyxTQUFTO0VBQ3ZCO0VBQ0Fza0IsWUFBWS9xQixRQUFBLEVBQVVULEtBQUEsRUFBTztJQUMzQixNQUFNVCxNQUFBLEdBQVM7SUFDZmtCLFFBQUEsR0FBV0MsSUFBQSxDQUFLRSxHQUFBLENBQUlGLElBQUEsQ0FBS0MsR0FBQSxDQUFJRixRQUFBLEVBQVUsQ0FBQyxHQUFHLENBQUM7SUFDNUMsTUFBTUcsR0FBQSxHQUFNckIsTUFBQSxDQUFPNFQsWUFBQSxDQUFhO0lBQ2hDLE1BQU14UyxHQUFBLEdBQU1wQixNQUFBLENBQU9xVSxZQUFBLENBQWE7SUFDaEMsTUFBTXRULE9BQUEsSUFBV0ssR0FBQSxHQUFNQyxHQUFBLElBQU9ILFFBQUEsR0FBV0csR0FBQTtJQUN6Q3JCLE1BQUEsQ0FBTytZLFdBQUEsQ0FBWWhZLE9BQUEsRUFBUyxPQUFPTixLQUFBLEtBQVUsY0FBYyxJQUFJQSxLQUFLO0lBQ3BFVCxNQUFBLENBQU9rWCxpQkFBQSxDQUFrQjtJQUN6QmxYLE1BQUEsQ0FBT29WLG1CQUFBLENBQW9CO0VBQzdCO0VBQ0E4UyxxQkFBQSxFQUF1QjtJQUNyQixNQUFNbG9CLE1BQUEsR0FBUztJQUNmLElBQUksQ0FBQ0EsTUFBQSxDQUFPUSxNQUFBLENBQU9rcUIsWUFBQSxJQUFnQixDQUFDMXFCLE1BQUEsQ0FBT3hELEVBQUEsRUFBSTtJQUMvQyxNQUFNMHZCLEdBQUEsR0FBTWxzQixNQUFBLENBQU94RCxFQUFBLENBQUcydkIsU0FBQSxDQUFVL3VCLEtBQUEsQ0FBTSxHQUFHLEVBQUU2QixNQUFBLENBQU9rdEIsU0FBQSxJQUFhO01BQzdELE9BQU9BLFNBQUEsQ0FBVWp0QixPQUFBLENBQVEsUUFBUSxNQUFNLEtBQUtpdEIsU0FBQSxDQUFVanRCLE9BQUEsQ0FBUWMsTUFBQSxDQUFPUSxNQUFBLENBQU8wUixzQkFBc0IsTUFBTTtJQUMxRyxDQUFDO0lBQ0RsUyxNQUFBLENBQU8ySCxJQUFBLENBQUsscUJBQXFCdWtCLEdBQUEsQ0FBSTF1QixJQUFBLENBQUssR0FBRyxDQUFDO0VBQ2hEO0VBQ0E0dUIsZ0JBQWdCdnFCLE9BQUEsRUFBUztJQUN2QixNQUFNN0IsTUFBQSxHQUFTO0lBQ2YsSUFBSUEsTUFBQSxDQUFPK0gsU0FBQSxFQUFXLE9BQU87SUFDN0IsT0FBT2xHLE9BQUEsQ0FBUXNxQixTQUFBLENBQVUvdUIsS0FBQSxDQUFNLEdBQUcsRUFBRTZCLE1BQUEsQ0FBT2t0QixTQUFBLElBQWE7TUFDdEQsT0FBT0EsU0FBQSxDQUFVanRCLE9BQUEsQ0FBUSxjQUFjLE1BQU0sS0FBS2l0QixTQUFBLENBQVVqdEIsT0FBQSxDQUFRYyxNQUFBLENBQU9RLE1BQUEsQ0FBT2tOLFVBQVUsTUFBTTtJQUNwRyxDQUFDLEVBQUVsUSxJQUFBLENBQUssR0FBRztFQUNiO0VBQ0FvWSxrQkFBQSxFQUFvQjtJQUNsQixNQUFNNVYsTUFBQSxHQUFTO0lBQ2YsSUFBSSxDQUFDQSxNQUFBLENBQU9RLE1BQUEsQ0FBT2txQixZQUFBLElBQWdCLENBQUMxcUIsTUFBQSxDQUFPeEQsRUFBQSxFQUFJO0lBQy9DLE1BQU02dkIsT0FBQSxHQUFVLEVBQUM7SUFDakJyc0IsTUFBQSxDQUFPeU4sTUFBQSxDQUFPblYsT0FBQSxDQUFRdUosT0FBQSxJQUFXO01BQy9CLE1BQU0rbkIsVUFBQSxHQUFhNXBCLE1BQUEsQ0FBT29zQixlQUFBLENBQWdCdnFCLE9BQU87TUFDakR3cUIsT0FBQSxDQUFRNW9CLElBQUEsQ0FBSztRQUNYNUIsT0FBQTtRQUNBK25CO01BQ0YsQ0FBQztNQUNENXBCLE1BQUEsQ0FBTzJILElBQUEsQ0FBSyxlQUFlOUYsT0FBQSxFQUFTK25CLFVBQVU7SUFDaEQsQ0FBQztJQUNENXBCLE1BQUEsQ0FBTzJILElBQUEsQ0FBSyxpQkFBaUIwa0IsT0FBTztFQUN0QztFQUNBN1YscUJBQXFCOFYsSUFBQSxFQUFNQyxLQUFBLEVBQU87SUFDaEMsSUFBSUQsSUFBQSxLQUFTLFFBQVE7TUFDbkJBLElBQUEsR0FBTztJQUNUO0lBQ0EsSUFBSUMsS0FBQSxLQUFVLFFBQVE7TUFDcEJBLEtBQUEsR0FBUTtJQUNWO0lBQ0EsTUFBTXZzQixNQUFBLEdBQVM7SUFDZixNQUFNO01BQ0pRLE1BQUE7TUFDQWlOLE1BQUE7TUFDQUksVUFBQTtNQUNBQyxlQUFBO01BQ0FwSixJQUFBLEVBQU11SSxVQUFBO01BQ040RjtJQUNGLElBQUk3UyxNQUFBO0lBQ0osSUFBSXdzQixHQUFBLEdBQU07SUFDVixJQUFJLE9BQU9oc0IsTUFBQSxDQUFPNk8sYUFBQSxLQUFrQixVQUFVLE9BQU83TyxNQUFBLENBQU82TyxhQUFBO0lBQzVELElBQUk3TyxNQUFBLENBQU9xTyxjQUFBLEVBQWdCO01BQ3pCLElBQUlNLFNBQUEsR0FBWTFCLE1BQUEsQ0FBT29GLFdBQVcsSUFBSXBGLE1BQUEsQ0FBT29GLFdBQVcsRUFBRTVDLGVBQUEsR0FBa0I7TUFDNUUsSUFBSXdjLFNBQUE7TUFDSixTQUFTM3RCLENBQUEsR0FBSStULFdBQUEsR0FBYyxHQUFHL1QsQ0FBQSxHQUFJMk8sTUFBQSxDQUFPalYsTUFBQSxFQUFRc0csQ0FBQSxJQUFLLEdBQUc7UUFDdkQsSUFBSTJPLE1BQUEsQ0FBTzNPLENBQUMsS0FBSyxDQUFDMnRCLFNBQUEsRUFBVztVQUMzQnRkLFNBQUEsSUFBYTFCLE1BQUEsQ0FBTzNPLENBQUMsRUFBRW1SLGVBQUE7VUFDdkJ1YyxHQUFBLElBQU87VUFDUCxJQUFJcmQsU0FBQSxHQUFZbEMsVUFBQSxFQUFZd2YsU0FBQSxHQUFZO1FBQzFDO01BQ0Y7TUFDQSxTQUFTM3RCLENBQUEsR0FBSStULFdBQUEsR0FBYyxHQUFHL1QsQ0FBQSxJQUFLLEdBQUdBLENBQUEsSUFBSyxHQUFHO1FBQzVDLElBQUkyTyxNQUFBLENBQU8zTyxDQUFDLEtBQUssQ0FBQzJ0QixTQUFBLEVBQVc7VUFDM0J0ZCxTQUFBLElBQWExQixNQUFBLENBQU8zTyxDQUFDLEVBQUVtUixlQUFBO1VBQ3ZCdWMsR0FBQSxJQUFPO1VBQ1AsSUFBSXJkLFNBQUEsR0FBWWxDLFVBQUEsRUFBWXdmLFNBQUEsR0FBWTtRQUMxQztNQUNGO0lBQ0YsT0FBTztNQUVMLElBQUlILElBQUEsS0FBUyxXQUFXO1FBQ3RCLFNBQVN4dEIsQ0FBQSxHQUFJK1QsV0FBQSxHQUFjLEdBQUcvVCxDQUFBLEdBQUkyTyxNQUFBLENBQU9qVixNQUFBLEVBQVFzRyxDQUFBLElBQUssR0FBRztVQUN2RCxNQUFNNHRCLFdBQUEsR0FBY0gsS0FBQSxHQUFRMWUsVUFBQSxDQUFXL08sQ0FBQyxJQUFJZ1AsZUFBQSxDQUFnQmhQLENBQUMsSUFBSStPLFVBQUEsQ0FBV2dGLFdBQVcsSUFBSTVGLFVBQUEsR0FBYVksVUFBQSxDQUFXL08sQ0FBQyxJQUFJK08sVUFBQSxDQUFXZ0YsV0FBVyxJQUFJNUYsVUFBQTtVQUNsSixJQUFJeWYsV0FBQSxFQUFhO1lBQ2ZGLEdBQUEsSUFBTztVQUNUO1FBQ0Y7TUFDRixPQUFPO1FBRUwsU0FBUzF0QixDQUFBLEdBQUkrVCxXQUFBLEdBQWMsR0FBRy9ULENBQUEsSUFBSyxHQUFHQSxDQUFBLElBQUssR0FBRztVQUM1QyxNQUFNNHRCLFdBQUEsR0FBYzdlLFVBQUEsQ0FBV2dGLFdBQVcsSUFBSWhGLFVBQUEsQ0FBVy9PLENBQUMsSUFBSW1PLFVBQUE7VUFDOUQsSUFBSXlmLFdBQUEsRUFBYTtZQUNmRixHQUFBLElBQU87VUFDVDtRQUNGO01BQ0Y7SUFDRjtJQUNBLE9BQU9BLEdBQUE7RUFDVDtFQUNBcFUsT0FBQSxFQUFTO0lBQ1AsTUFBTXBZLE1BQUEsR0FBUztJQUNmLElBQUksQ0FBQ0EsTUFBQSxJQUFVQSxNQUFBLENBQU8rSCxTQUFBLEVBQVc7SUFDakMsTUFBTTtNQUNKNkYsUUFBQTtNQUNBcE47SUFDRixJQUFJUixNQUFBO0lBRUosSUFBSVEsTUFBQSxDQUFPOE8sV0FBQSxFQUFhO01BQ3RCdFAsTUFBQSxDQUFPOGxCLGFBQUEsQ0FBYztJQUN2QjtJQUNBLENBQUMsR0FBRzlsQixNQUFBLENBQU94RCxFQUFBLENBQUd2RCxnQkFBQSxDQUFpQixrQkFBa0IsQ0FBQyxFQUFFWCxPQUFBLENBQVF3ZCxPQUFBLElBQVc7TUFDckUsSUFBSUEsT0FBQSxDQUFRNlcsUUFBQSxFQUFVO1FBQ3BCOVcsb0JBQUEsQ0FBcUI3VixNQUFBLEVBQVE4VixPQUFPO01BQ3RDO0lBQ0YsQ0FBQztJQUNEOVYsTUFBQSxDQUFPbU0sVUFBQSxDQUFXO0lBQ2xCbk0sTUFBQSxDQUFPMk0sWUFBQSxDQUFhO0lBQ3BCM00sTUFBQSxDQUFPa1UsY0FBQSxDQUFlO0lBQ3RCbFUsTUFBQSxDQUFPb1YsbUJBQUEsQ0FBb0I7SUFDM0IsU0FBUzBILGNBQUEsRUFBZTtNQUN0QixNQUFNOFAsY0FBQSxHQUFpQjVzQixNQUFBLENBQU9rTixZQUFBLEdBQWVsTixNQUFBLENBQU9JLFNBQUEsR0FBWSxLQUFLSixNQUFBLENBQU9JLFNBQUE7TUFDNUUsTUFBTW1aLFlBQUEsR0FBZXBZLElBQUEsQ0FBS0UsR0FBQSxDQUFJRixJQUFBLENBQUtDLEdBQUEsQ0FBSXdyQixjQUFBLEVBQWdCNXNCLE1BQUEsQ0FBT3FVLFlBQUEsQ0FBYSxDQUFDLEdBQUdyVSxNQUFBLENBQU80VCxZQUFBLENBQWEsQ0FBQztNQUNwRzVULE1BQUEsQ0FBT3dZLFlBQUEsQ0FBYWUsWUFBWTtNQUNoQ3ZaLE1BQUEsQ0FBT2tYLGlCQUFBLENBQWtCO01BQ3pCbFgsTUFBQSxDQUFPb1YsbUJBQUEsQ0FBb0I7SUFDN0I7SUFDQSxJQUFJeVgsVUFBQTtJQUNKLElBQUlyc0IsTUFBQSxDQUFPdWhCLFFBQUEsSUFBWXZoQixNQUFBLENBQU91aEIsUUFBQSxDQUFTeFUsT0FBQSxJQUFXLENBQUMvTSxNQUFBLENBQU9zTyxPQUFBLEVBQVM7TUFDakVnTyxhQUFBLENBQWE7TUFDYixJQUFJdGMsTUFBQSxDQUFPMlUsVUFBQSxFQUFZO1FBQ3JCblYsTUFBQSxDQUFPdVMsZ0JBQUEsQ0FBaUI7TUFDMUI7SUFDRixPQUFPO01BQ0wsS0FBSy9SLE1BQUEsQ0FBTzZPLGFBQUEsS0FBa0IsVUFBVTdPLE1BQUEsQ0FBTzZPLGFBQUEsR0FBZ0IsTUFBTXJQLE1BQUEsQ0FBT3VVLEtBQUEsSUFBUyxDQUFDL1QsTUFBQSxDQUFPcU8sY0FBQSxFQUFnQjtRQUMzRyxNQUFNcEIsTUFBQSxHQUFTek4sTUFBQSxDQUFPc04sT0FBQSxJQUFXOU0sTUFBQSxDQUFPOE0sT0FBQSxDQUFRQyxPQUFBLEdBQVV2TixNQUFBLENBQU9zTixPQUFBLENBQVFHLE1BQUEsR0FBU3pOLE1BQUEsQ0FBT3lOLE1BQUE7UUFDekZvZixVQUFBLEdBQWE3c0IsTUFBQSxDQUFPb2EsT0FBQSxDQUFRM00sTUFBQSxDQUFPalYsTUFBQSxHQUFTLEdBQUcsR0FBRyxPQUFPLElBQUk7TUFDL0QsT0FBTztRQUNMcTBCLFVBQUEsR0FBYTdzQixNQUFBLENBQU9vYSxPQUFBLENBQVFwYSxNQUFBLENBQU82UyxXQUFBLEVBQWEsR0FBRyxPQUFPLElBQUk7TUFDaEU7TUFDQSxJQUFJLENBQUNnYSxVQUFBLEVBQVk7UUFDZi9QLGFBQUEsQ0FBYTtNQUNmO0lBQ0Y7SUFDQSxJQUFJdGMsTUFBQSxDQUFPcVIsYUFBQSxJQUFpQmpFLFFBQUEsS0FBYTVOLE1BQUEsQ0FBTzROLFFBQUEsRUFBVTtNQUN4RDVOLE1BQUEsQ0FBTzhSLGFBQUEsQ0FBYztJQUN2QjtJQUNBOVIsTUFBQSxDQUFPMkgsSUFBQSxDQUFLLFFBQVE7RUFDdEI7RUFDQWdoQixnQkFBZ0JtRSxZQUFBLEVBQWNDLFVBQUEsRUFBWTtJQUN4QyxJQUFJQSxVQUFBLEtBQWUsUUFBUTtNQUN6QkEsVUFBQSxHQUFhO0lBQ2Y7SUFDQSxNQUFNL3NCLE1BQUEsR0FBUztJQUNmLE1BQU1ndEIsZ0JBQUEsR0FBbUJodEIsTUFBQSxDQUFPUSxNQUFBLENBQU91WixTQUFBO0lBQ3ZDLElBQUksQ0FBQytTLFlBQUEsRUFBYztNQUVqQkEsWUFBQSxHQUFlRSxnQkFBQSxLQUFxQixlQUFlLGFBQWE7SUFDbEU7SUFDQSxJQUFJRixZQUFBLEtBQWlCRSxnQkFBQSxJQUFvQkYsWUFBQSxLQUFpQixnQkFBZ0JBLFlBQUEsS0FBaUIsWUFBWTtNQUNyRyxPQUFPOXNCLE1BQUE7SUFDVDtJQUNBQSxNQUFBLENBQU94RCxFQUFBLENBQUc2RixTQUFBLENBQVVpUSxNQUFBLENBQU8sR0FBR3RTLE1BQUEsQ0FBT1EsTUFBQSxDQUFPMFIsc0JBQXNCLEdBQUc4YSxnQkFBZ0IsRUFBRTtJQUN2Rmh0QixNQUFBLENBQU94RCxFQUFBLENBQUc2RixTQUFBLENBQVVDLEdBQUEsQ0FBSSxHQUFHdEMsTUFBQSxDQUFPUSxNQUFBLENBQU8wUixzQkFBc0IsR0FBRzRhLFlBQVksRUFBRTtJQUNoRjlzQixNQUFBLENBQU9rb0Isb0JBQUEsQ0FBcUI7SUFDNUJsb0IsTUFBQSxDQUFPUSxNQUFBLENBQU91WixTQUFBLEdBQVkrUyxZQUFBO0lBQzFCOXNCLE1BQUEsQ0FBT3lOLE1BQUEsQ0FBT25WLE9BQUEsQ0FBUXVKLE9BQUEsSUFBVztNQUMvQixJQUFJaXJCLFlBQUEsS0FBaUIsWUFBWTtRQUMvQmpyQixPQUFBLENBQVFySSxLQUFBLENBQU1zTSxLQUFBLEdBQVE7TUFDeEIsT0FBTztRQUNMakUsT0FBQSxDQUFRckksS0FBQSxDQUFNd00sTUFBQSxHQUFTO01BQ3pCO0lBQ0YsQ0FBQztJQUNEaEcsTUFBQSxDQUFPMkgsSUFBQSxDQUFLLGlCQUFpQjtJQUM3QixJQUFJb2xCLFVBQUEsRUFBWS9zQixNQUFBLENBQU9vWSxNQUFBLENBQU87SUFDOUIsT0FBT3BZLE1BQUE7RUFDVDtFQUNBaXRCLHdCQUF3QmxULFNBQUEsRUFBVztJQUNqQyxNQUFNL1osTUFBQSxHQUFTO0lBQ2YsSUFBSUEsTUFBQSxDQUFPbU4sR0FBQSxJQUFPNE0sU0FBQSxLQUFjLFNBQVMsQ0FBQy9aLE1BQUEsQ0FBT21OLEdBQUEsSUFBTzRNLFNBQUEsS0FBYyxPQUFPO0lBQzdFL1osTUFBQSxDQUFPbU4sR0FBQSxHQUFNNE0sU0FBQSxLQUFjO0lBQzNCL1osTUFBQSxDQUFPa04sWUFBQSxHQUFlbE4sTUFBQSxDQUFPUSxNQUFBLENBQU91WixTQUFBLEtBQWMsZ0JBQWdCL1osTUFBQSxDQUFPbU4sR0FBQTtJQUN6RSxJQUFJbk4sTUFBQSxDQUFPbU4sR0FBQSxFQUFLO01BQ2RuTixNQUFBLENBQU94RCxFQUFBLENBQUc2RixTQUFBLENBQVVDLEdBQUEsQ0FBSSxHQUFHdEMsTUFBQSxDQUFPUSxNQUFBLENBQU8wUixzQkFBc0IsS0FBSztNQUNwRWxTLE1BQUEsQ0FBT3hELEVBQUEsQ0FBR3FFLEdBQUEsR0FBTTtJQUNsQixPQUFPO01BQ0xiLE1BQUEsQ0FBT3hELEVBQUEsQ0FBRzZGLFNBQUEsQ0FBVWlRLE1BQUEsQ0FBTyxHQUFHdFMsTUFBQSxDQUFPUSxNQUFBLENBQU8wUixzQkFBc0IsS0FBSztNQUN2RWxTLE1BQUEsQ0FBT3hELEVBQUEsQ0FBR3FFLEdBQUEsR0FBTTtJQUNsQjtJQUNBYixNQUFBLENBQU9vWSxNQUFBLENBQU87RUFDaEI7RUFDQThVLE1BQU1sckIsT0FBQSxFQUFTO0lBQ2IsTUFBTWhDLE1BQUEsR0FBUztJQUNmLElBQUlBLE1BQUEsQ0FBT210QixPQUFBLEVBQVMsT0FBTztJQUczQixJQUFJM3dCLEVBQUEsR0FBS3dGLE9BQUEsSUFBV2hDLE1BQUEsQ0FBT1EsTUFBQSxDQUFPaEUsRUFBQTtJQUNsQyxJQUFJLE9BQU9BLEVBQUEsS0FBTyxVQUFVO01BQzFCQSxFQUFBLEdBQUtoQyxRQUFBLENBQVN4QixhQUFBLENBQWN3RCxFQUFFO0lBQ2hDO0lBQ0EsSUFBSSxDQUFDQSxFQUFBLEVBQUk7TUFDUCxPQUFPO0lBQ1Q7SUFDQUEsRUFBQSxDQUFHd0QsTUFBQSxHQUFTQSxNQUFBO0lBQ1osSUFBSXhELEVBQUEsQ0FBRzR3QixVQUFBLElBQWM1d0IsRUFBQSxDQUFHNHdCLFVBQUEsQ0FBV3J6QixJQUFBLElBQVF5QyxFQUFBLENBQUc0d0IsVUFBQSxDQUFXcnpCLElBQUEsQ0FBS2hCLFFBQUEsS0FBYSxvQkFBb0I7TUFDN0ZpSCxNQUFBLENBQU9nVCxTQUFBLEdBQVk7SUFDckI7SUFDQSxNQUFNcWEsa0JBQUEsR0FBcUJBLENBQUEsS0FBTTtNQUMvQixPQUFPLEtBQUtydEIsTUFBQSxDQUFPUSxNQUFBLENBQU9pcUIsWUFBQSxJQUFnQixJQUFJNkMsSUFBQSxDQUFLLEVBQUVsd0IsS0FBQSxDQUFNLEdBQUcsRUFBRUksSUFBQSxDQUFLLEdBQUcsQ0FBQztJQUMzRTtJQUNBLE1BQU0rdkIsVUFBQSxHQUFhQSxDQUFBLEtBQU07TUFDdkIsSUFBSS93QixFQUFBLElBQU1BLEVBQUEsQ0FBR3NGLFVBQUEsSUFBY3RGLEVBQUEsQ0FBR3NGLFVBQUEsQ0FBVzlJLGFBQUEsRUFBZTtRQUN0RCxNQUFNdzBCLEdBQUEsR0FBTWh4QixFQUFBLENBQUdzRixVQUFBLENBQVc5SSxhQUFBLENBQWNxMEIsa0JBQUEsQ0FBbUIsQ0FBQztRQUU1RCxPQUFPRyxHQUFBO01BQ1Q7TUFDQSxPQUFPenJCLGVBQUEsQ0FBZ0J2RixFQUFBLEVBQUk2d0Isa0JBQUEsQ0FBbUIsQ0FBQyxFQUFFLENBQUM7SUFDcEQ7SUFFQSxJQUFJM3NCLFNBQUEsR0FBWTZzQixVQUFBLENBQVc7SUFDM0IsSUFBSSxDQUFDN3NCLFNBQUEsSUFBYVYsTUFBQSxDQUFPUSxNQUFBLENBQU82cEIsY0FBQSxFQUFnQjtNQUM5QzNwQixTQUFBLEdBQVlySCxhQUFBLENBQWMsT0FBTzJHLE1BQUEsQ0FBT1EsTUFBQSxDQUFPaXFCLFlBQVk7TUFDM0RqdUIsRUFBQSxDQUFHaWhCLE1BQUEsQ0FBTy9jLFNBQVM7TUFDbkJxQixlQUFBLENBQWdCdkYsRUFBQSxFQUFJLElBQUl3RCxNQUFBLENBQU9RLE1BQUEsQ0FBT2tOLFVBQVUsRUFBRSxFQUFFcFYsT0FBQSxDQUFRdUosT0FBQSxJQUFXO1FBQ3JFbkIsU0FBQSxDQUFVK2MsTUFBQSxDQUFPNWIsT0FBTztNQUMxQixDQUFDO0lBQ0g7SUFDQTVKLE1BQUEsQ0FBT3lVLE1BQUEsQ0FBTzFNLE1BQUEsRUFBUTtNQUNwQnhELEVBQUE7TUFDQWtFLFNBQUE7TUFDQXNNLFFBQUEsRUFBVWhOLE1BQUEsQ0FBT2dULFNBQUEsSUFBYSxDQUFDeFcsRUFBQSxDQUFHNHdCLFVBQUEsQ0FBV3J6QixJQUFBLENBQUswekIsVUFBQSxHQUFhanhCLEVBQUEsQ0FBRzR3QixVQUFBLENBQVdyekIsSUFBQSxHQUFPMkcsU0FBQTtNQUNwRndKLE1BQUEsRUFBUWxLLE1BQUEsQ0FBT2dULFNBQUEsR0FBWXhXLEVBQUEsQ0FBRzR3QixVQUFBLENBQVdyekIsSUFBQSxHQUFPeUMsRUFBQTtNQUNoRDJ3QixPQUFBLEVBQVM7TUFBQTtNQUVUaGdCLEdBQUEsRUFBSzNRLEVBQUEsQ0FBR3FFLEdBQUEsQ0FBSWtHLFdBQUEsQ0FBWSxNQUFNLFNBQVNqRCxZQUFBLENBQWF0SCxFQUFBLEVBQUksV0FBVyxNQUFNO01BQ3pFMFEsWUFBQSxFQUFjbE4sTUFBQSxDQUFPUSxNQUFBLENBQU91WixTQUFBLEtBQWMsaUJBQWlCdmQsRUFBQSxDQUFHcUUsR0FBQSxDQUFJa0csV0FBQSxDQUFZLE1BQU0sU0FBU2pELFlBQUEsQ0FBYXRILEVBQUEsRUFBSSxXQUFXLE1BQU07TUFDL0g0USxRQUFBLEVBQVV0SixZQUFBLENBQWFwRCxTQUFBLEVBQVcsU0FBUyxNQUFNO0lBQ25ELENBQUM7SUFDRCxPQUFPO0VBQ1Q7RUFDQXFKLEtBQUt2TixFQUFBLEVBQUk7SUFDUCxNQUFNd0QsTUFBQSxHQUFTO0lBQ2YsSUFBSUEsTUFBQSxDQUFPZ0ksV0FBQSxFQUFhLE9BQU9oSSxNQUFBO0lBQy9CLE1BQU1tdEIsT0FBQSxHQUFVbnRCLE1BQUEsQ0FBT2t0QixLQUFBLENBQU0xd0IsRUFBRTtJQUMvQixJQUFJMndCLE9BQUEsS0FBWSxPQUFPLE9BQU9udEIsTUFBQTtJQUM5QkEsTUFBQSxDQUFPMkgsSUFBQSxDQUFLLFlBQVk7SUFHeEIsSUFBSTNILE1BQUEsQ0FBT1EsTUFBQSxDQUFPOE8sV0FBQSxFQUFhO01BQzdCdFAsTUFBQSxDQUFPOGxCLGFBQUEsQ0FBYztJQUN2QjtJQUdBOWxCLE1BQUEsQ0FBTzZwQixVQUFBLENBQVc7SUFHbEI3cEIsTUFBQSxDQUFPbU0sVUFBQSxDQUFXO0lBR2xCbk0sTUFBQSxDQUFPMk0sWUFBQSxDQUFhO0lBQ3BCLElBQUkzTSxNQUFBLENBQU9RLE1BQUEsQ0FBT3FSLGFBQUEsRUFBZTtNQUMvQjdSLE1BQUEsQ0FBTzhSLGFBQUEsQ0FBYztJQUN2QjtJQUdBLElBQUk5UixNQUFBLENBQU9RLE1BQUEsQ0FBT3NlLFVBQUEsSUFBYzllLE1BQUEsQ0FBT3VOLE9BQUEsRUFBUztNQUM5Q3ZOLE1BQUEsQ0FBT3VlLGFBQUEsQ0FBYztJQUN2QjtJQUdBLElBQUl2ZSxNQUFBLENBQU9RLE1BQUEsQ0FBT2tRLElBQUEsSUFBUTFRLE1BQUEsQ0FBT3NOLE9BQUEsSUFBV3ROLE1BQUEsQ0FBT1EsTUFBQSxDQUFPOE0sT0FBQSxDQUFRQyxPQUFBLEVBQVM7TUFDekV2TixNQUFBLENBQU9vYSxPQUFBLENBQVFwYSxNQUFBLENBQU9RLE1BQUEsQ0FBT3NhLFlBQUEsR0FBZTlhLE1BQUEsQ0FBT3NOLE9BQUEsQ0FBUXVELFlBQUEsRUFBYyxHQUFHN1EsTUFBQSxDQUFPUSxNQUFBLENBQU9vWCxrQkFBQSxFQUFvQixPQUFPLElBQUk7SUFDM0gsT0FBTztNQUNMNVgsTUFBQSxDQUFPb2EsT0FBQSxDQUFRcGEsTUFBQSxDQUFPUSxNQUFBLENBQU9zYSxZQUFBLEVBQWMsR0FBRzlhLE1BQUEsQ0FBT1EsTUFBQSxDQUFPb1gsa0JBQUEsRUFBb0IsT0FBTyxJQUFJO0lBQzdGO0lBR0EsSUFBSTVYLE1BQUEsQ0FBT1EsTUFBQSxDQUFPa1EsSUFBQSxFQUFNO01BQ3RCMVEsTUFBQSxDQUFPMmMsVUFBQSxDQUFXO0lBQ3BCO0lBR0EzYyxNQUFBLENBQU9rbkIsWUFBQSxDQUFhO0lBQ3BCLE1BQU13RyxZQUFBLEdBQWUsQ0FBQyxHQUFHMXRCLE1BQUEsQ0FBT3hELEVBQUEsQ0FBR3ZELGdCQUFBLENBQWlCLGtCQUFrQixDQUFDO0lBQ3ZFLElBQUkrRyxNQUFBLENBQU9nVCxTQUFBLEVBQVc7TUFDcEIwYSxZQUFBLENBQWFqcUIsSUFBQSxDQUFLLEdBQUd6RCxNQUFBLENBQU9rSyxNQUFBLENBQU9qUixnQkFBQSxDQUFpQixrQkFBa0IsQ0FBQztJQUN6RTtJQUNBeTBCLFlBQUEsQ0FBYXAxQixPQUFBLENBQVF3ZCxPQUFBLElBQVc7TUFDOUIsSUFBSUEsT0FBQSxDQUFRNlcsUUFBQSxFQUFVO1FBQ3BCOVcsb0JBQUEsQ0FBcUI3VixNQUFBLEVBQVE4VixPQUFPO01BQ3RDLE9BQU87UUFDTEEsT0FBQSxDQUFRbmQsZ0JBQUEsQ0FBaUIsUUFBUXdELENBQUEsSUFBSztVQUNwQzBaLG9CQUFBLENBQXFCN1YsTUFBQSxFQUFRN0QsQ0FBQSxDQUFFaEUsTUFBTTtRQUN2QyxDQUFDO01BQ0g7SUFDRixDQUFDO0lBQ0RrZSxPQUFBLENBQVFyVyxNQUFNO0lBR2RBLE1BQUEsQ0FBT2dJLFdBQUEsR0FBYztJQUNyQnFPLE9BQUEsQ0FBUXJXLE1BQU07SUFHZEEsTUFBQSxDQUFPMkgsSUFBQSxDQUFLLE1BQU07SUFDbEIzSCxNQUFBLENBQU8ySCxJQUFBLENBQUssV0FBVztJQUN2QixPQUFPM0gsTUFBQTtFQUNUO0VBQ0FvSyxRQUFRdWpCLGNBQUEsRUFBZ0JDLFdBQUEsRUFBYTtJQUNuQyxJQUFJRCxjQUFBLEtBQW1CLFFBQVE7TUFDN0JBLGNBQUEsR0FBaUI7SUFDbkI7SUFDQSxJQUFJQyxXQUFBLEtBQWdCLFFBQVE7TUFDMUJBLFdBQUEsR0FBYztJQUNoQjtJQUNBLE1BQU01dEIsTUFBQSxHQUFTO0lBQ2YsTUFBTTtNQUNKUSxNQUFBO01BQ0FoRSxFQUFBO01BQ0FrRSxTQUFBO01BQ0ErTTtJQUNGLElBQUl6TixNQUFBO0lBQ0osSUFBSSxPQUFPQSxNQUFBLENBQU9RLE1BQUEsS0FBVyxlQUFlUixNQUFBLENBQU8rSCxTQUFBLEVBQVc7TUFDNUQsT0FBTztJQUNUO0lBQ0EvSCxNQUFBLENBQU8ySCxJQUFBLENBQUssZUFBZTtJQUczQjNILE1BQUEsQ0FBT2dJLFdBQUEsR0FBYztJQUdyQmhJLE1BQUEsQ0FBT29uQixZQUFBLENBQWE7SUFHcEIsSUFBSTVtQixNQUFBLENBQU9rUSxJQUFBLEVBQU07TUFDZjFRLE1BQUEsQ0FBT29lLFdBQUEsQ0FBWTtJQUNyQjtJQUdBLElBQUl3UCxXQUFBLEVBQWE7TUFDZjV0QixNQUFBLENBQU8rcEIsYUFBQSxDQUFjO01BQ3JCdnRCLEVBQUEsQ0FBRzRaLGVBQUEsQ0FBZ0IsT0FBTztNQUMxQjFWLFNBQUEsQ0FBVTBWLGVBQUEsQ0FBZ0IsT0FBTztNQUNqQyxJQUFJM0ksTUFBQSxJQUFVQSxNQUFBLENBQU9qVixNQUFBLEVBQVE7UUFDM0JpVixNQUFBLENBQU9uVixPQUFBLENBQVF1SixPQUFBLElBQVc7VUFDeEJBLE9BQUEsQ0FBUVEsU0FBQSxDQUFVaVEsTUFBQSxDQUFPOVIsTUFBQSxDQUFPZ1QsaUJBQUEsRUFBbUJoVCxNQUFBLENBQU84VSxnQkFBQSxFQUFrQjlVLE1BQUEsQ0FBTytVLGNBQUEsRUFBZ0IvVSxNQUFBLENBQU9nVixjQUFjO1VBQ3hIM1QsT0FBQSxDQUFRdVUsZUFBQSxDQUFnQixPQUFPO1VBQy9CdlUsT0FBQSxDQUFRdVUsZUFBQSxDQUFnQix5QkFBeUI7UUFDbkQsQ0FBQztNQUNIO0lBQ0Y7SUFDQXBXLE1BQUEsQ0FBTzJILElBQUEsQ0FBSyxTQUFTO0lBR3JCMVAsTUFBQSxDQUFPSSxJQUFBLENBQUsySCxNQUFBLENBQU80SyxlQUFlLEVBQUV0UyxPQUFBLENBQVFvekIsU0FBQSxJQUFhO01BQ3ZEMXJCLE1BQUEsQ0FBT2lMLEdBQUEsQ0FBSXlnQixTQUFTO0lBQ3RCLENBQUM7SUFDRCxJQUFJaUMsY0FBQSxLQUFtQixPQUFPO01BQzVCM3RCLE1BQUEsQ0FBT3hELEVBQUEsQ0FBR3dELE1BQUEsR0FBUztNQUNuQi9ELFdBQUEsQ0FBWStELE1BQU07SUFDcEI7SUFDQUEsTUFBQSxDQUFPK0gsU0FBQSxHQUFZO0lBQ25CLE9BQU87RUFDVDtFQUNBLE9BQU84bEIsZUFBZUMsV0FBQSxFQUFhO0lBQ2pDcHZCLE9BQUEsQ0FBT3VzQixnQkFBQSxFQUFrQjZDLFdBQVc7RUFDdEM7RUFDQSxXQUFXN0MsaUJBQUEsRUFBbUI7SUFDNUIsT0FBT0EsZ0JBQUE7RUFDVDtFQUNBLFdBQVdiLFNBQUEsRUFBVztJQUNwQixPQUFPQSxRQUFBO0VBQ1Q7RUFDQSxPQUFPMkQsY0FBY3hDLEdBQUEsRUFBSztJQUN4QixJQUFJLENBQUNMLE9BQUEsQ0FBTy9zQixTQUFBLENBQVVtdEIsV0FBQSxFQUFhSixPQUFBLENBQU8vc0IsU0FBQSxDQUFVbXRCLFdBQUEsR0FBYyxFQUFDO0lBQ25FLE1BQU1ELE9BQUEsR0FBVUgsT0FBQSxDQUFPL3NCLFNBQUEsQ0FBVW10QixXQUFBO0lBQ2pDLElBQUksT0FBT0MsR0FBQSxLQUFRLGNBQWNGLE9BQUEsQ0FBUW5zQixPQUFBLENBQVFxc0IsR0FBRyxJQUFJLEdBQUc7TUFDekRGLE9BQUEsQ0FBUTVuQixJQUFBLENBQUs4bkIsR0FBRztJQUNsQjtFQUNGO0VBQ0EsT0FBT3lDLElBQUlDLE9BQUEsRUFBUTtJQUNqQixJQUFJMXJCLEtBQUEsQ0FBTUMsT0FBQSxDQUFReXJCLE9BQU0sR0FBRztNQUN6QkEsT0FBQSxDQUFPMzFCLE9BQUEsQ0FBUTQxQixDQUFBLElBQUtoRCxPQUFBLENBQU82QyxhQUFBLENBQWNHLENBQUMsQ0FBQztNQUMzQyxPQUFPaEQsT0FBQTtJQUNUO0lBQ0FBLE9BQUEsQ0FBTzZDLGFBQUEsQ0FBY0UsT0FBTTtJQUMzQixPQUFPL0MsT0FBQTtFQUNUO0FBQ0Y7QUFDQWp6QixNQUFBLENBQU9JLElBQUEsQ0FBSzJ5QixVQUFVLEVBQUUxeUIsT0FBQSxDQUFRNjFCLGNBQUEsSUFBa0I7RUFDaERsMkIsTUFBQSxDQUFPSSxJQUFBLENBQUsyeUIsVUFBQSxDQUFXbUQsY0FBYyxDQUFDLEVBQUU3MUIsT0FBQSxDQUFRODFCLFdBQUEsSUFBZTtJQUM3RDUyQixNQUFBLENBQU8yRyxTQUFBLENBQVVpd0IsV0FBVyxJQUFJcEQsVUFBQSxDQUFXbUQsY0FBYyxFQUFFQyxXQUFXO0VBQ3hFLENBQUM7QUFDSCxDQUFDO0FBQ0Q1MkIsTUFBQSxDQUFPdzJCLEdBQUEsQ0FBSSxDQUFDdm1CLE1BQUEsRUFBUXVCLFFBQVEsQ0FBQzs7O0FIeGpIN0IsSUFBT3RSLHFCQUFBLEdBQVFGLE1BQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haS9haWxlYXJuL2NsaWVudC9hcHBzL3J2ZC9vdXQifQ==