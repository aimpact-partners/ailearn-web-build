System.register(["@popperjs/core@2.11.8"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@popperjs/core","2.11.8"],["tippy.js","6.3.7"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@popperjs/core@2.11.8', dep)],
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

// .beyond/uimport/temp/tippy.js.6.3.7.js
var tippy_js_6_3_7_exports = {};
__export(tippy_js_6_3_7_exports, {
  animateFill: () => animateFill,
  createSingleton: () => createSingleton,
  default: () => tippy_js_6_3_7_default,
  delegate: () => delegate,
  followCursor: () => followCursor,
  hideAll: () => hideAll,
  inlinePositioning: () => inlinePositioning,
  roundArrow: () => ROUND_ARROW,
  sticky: () => sticky
});
module.exports = __toCommonJS(tippy_js_6_3_7_exports);

// node_modules/tippy.js/dist/tippy.esm.js
var import_core = require("@popperjs/core@2.11.8");
var ROUND_ARROW = '<svg width="16" height="6" xmlns="http://www.w3.org/2000/svg"><path d="M0 6s1.796-.013 4.67-3.615C5.851.9 6.93.006 8 0c1.07-.006 2.148.887 3.343 2.385C14.233 6.005 16 6 16 6H0z"></svg>';
var BOX_CLASS = "tippy-box";
var CONTENT_CLASS = "tippy-content";
var BACKDROP_CLASS = "tippy-backdrop";
var ARROW_CLASS = "tippy-arrow";
var SVG_ARROW_CLASS = "tippy-svg-arrow";
var TOUCH_OPTIONS = {
  passive: true,
  capture: true
};
var TIPPY_DEFAULT_APPEND_TO = function TIPPY_DEFAULT_APPEND_TO2() {
  return document.body;
};
function hasOwnProperty(obj, key) {
  return {}.hasOwnProperty.call(obj, key);
}
function getValueAtIndexOrReturn(value, index, defaultValue) {
  if (Array.isArray(value)) {
    var v = value[index];
    return v == null ? Array.isArray(defaultValue) ? defaultValue[index] : defaultValue : v;
  }
  return value;
}
function isType(value, type) {
  var str = {}.toString.call(value);
  return str.indexOf("[object") === 0 && str.indexOf(type + "]") > -1;
}
function invokeWithArgsOrReturn(value, args) {
  return typeof value === "function" ? value.apply(void 0, args) : value;
}
function debounce(fn5, ms) {
  if (ms === 0) {
    return fn5;
  }
  var timeout;
  return function (arg) {
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      fn5(arg);
    }, ms);
  };
}
function removeProperties(obj, keys) {
  var clone = Object.assign({}, obj);
  keys.forEach(function (key) {
    delete clone[key];
  });
  return clone;
}
function splitBySpaces(value) {
  return value.split(/\s+/).filter(Boolean);
}
function normalizeToArray(value) {
  return [].concat(value);
}
function pushIfUnique(arr, value) {
  if (arr.indexOf(value) === -1) {
    arr.push(value);
  }
}
function unique(arr) {
  return arr.filter(function (item, index) {
    return arr.indexOf(item) === index;
  });
}
function getBasePlacement(placement) {
  return placement.split("-")[0];
}
function arrayFrom(value) {
  return [].slice.call(value);
}
function removeUndefinedProps(obj) {
  return Object.keys(obj).reduce(function (acc, key) {
    if (obj[key] !== void 0) {
      acc[key] = obj[key];
    }
    return acc;
  }, {});
}
function div() {
  return document.createElement("div");
}
function isElement(value) {
  return ["Element", "Fragment"].some(function (type) {
    return isType(value, type);
  });
}
function isNodeList(value) {
  return isType(value, "NodeList");
}
function isMouseEvent(value) {
  return isType(value, "MouseEvent");
}
function isReferenceElement(value) {
  return !!(value && value._tippy && value._tippy.reference === value);
}
function getArrayOfElements(value) {
  if (isElement(value)) {
    return [value];
  }
  if (isNodeList(value)) {
    return arrayFrom(value);
  }
  if (Array.isArray(value)) {
    return value;
  }
  return arrayFrom(document.querySelectorAll(value));
}
function setTransitionDuration(els, value) {
  els.forEach(function (el) {
    if (el) {
      el.style.transitionDuration = value + "ms";
    }
  });
}
function setVisibilityState(els, state) {
  els.forEach(function (el) {
    if (el) {
      el.setAttribute("data-state", state);
    }
  });
}
function getOwnerDocument(elementOrElements) {
  var _element$ownerDocumen;
  var _normalizeToArray = normalizeToArray(elementOrElements),
    element = _normalizeToArray[0];
  return element != null && (_element$ownerDocumen = element.ownerDocument) != null && _element$ownerDocumen.body ? element.ownerDocument : document;
}
function isCursorOutsideInteractiveBorder(popperTreeData, event) {
  var clientX = event.clientX,
    clientY = event.clientY;
  return popperTreeData.every(function (_ref) {
    var popperRect = _ref.popperRect,
      popperState = _ref.popperState,
      props = _ref.props;
    var interactiveBorder = props.interactiveBorder;
    var basePlacement = getBasePlacement(popperState.placement);
    var offsetData = popperState.modifiersData.offset;
    if (!offsetData) {
      return true;
    }
    var topDistance = basePlacement === "bottom" ? offsetData.top.y : 0;
    var bottomDistance = basePlacement === "top" ? offsetData.bottom.y : 0;
    var leftDistance = basePlacement === "right" ? offsetData.left.x : 0;
    var rightDistance = basePlacement === "left" ? offsetData.right.x : 0;
    var exceedsTop = popperRect.top - clientY + topDistance > interactiveBorder;
    var exceedsBottom = clientY - popperRect.bottom - bottomDistance > interactiveBorder;
    var exceedsLeft = popperRect.left - clientX + leftDistance > interactiveBorder;
    var exceedsRight = clientX - popperRect.right - rightDistance > interactiveBorder;
    return exceedsTop || exceedsBottom || exceedsLeft || exceedsRight;
  });
}
function updateTransitionEndListener(box, action, listener) {
  var method = action + "EventListener";
  ["transitionend", "webkitTransitionEnd"].forEach(function (event) {
    box[method](event, listener);
  });
}
function actualContains(parent, child) {
  var target = child;
  while (target) {
    var _target$getRootNode;
    if (parent.contains(target)) {
      return true;
    }
    target = target.getRootNode == null ? void 0 : (_target$getRootNode = target.getRootNode()) == null ? void 0 : _target$getRootNode.host;
  }
  return false;
}
var currentInput = {
  isTouch: false
};
var lastMouseMoveTime = 0;
function onDocumentTouchStart() {
  if (currentInput.isTouch) {
    return;
  }
  currentInput.isTouch = true;
  if (window.performance) {
    document.addEventListener("mousemove", onDocumentMouseMove);
  }
}
function onDocumentMouseMove() {
  var now = performance.now();
  if (now - lastMouseMoveTime < 20) {
    currentInput.isTouch = false;
    document.removeEventListener("mousemove", onDocumentMouseMove);
  }
  lastMouseMoveTime = now;
}
function onWindowBlur() {
  var activeElement = document.activeElement;
  if (isReferenceElement(activeElement)) {
    var instance = activeElement._tippy;
    if (activeElement.blur && !instance.state.isVisible) {
      activeElement.blur();
    }
  }
}
function bindGlobalEventListeners() {
  document.addEventListener("touchstart", onDocumentTouchStart, TOUCH_OPTIONS);
  window.addEventListener("blur", onWindowBlur);
}
var isBrowser = typeof window !== "undefined" && typeof document !== "undefined";
var isIE11 = isBrowser ? !!window.msCrypto : false;
function createMemoryLeakWarning(method) {
  var txt = method === "destroy" ? "n already-" : " ";
  return [method + "() was called on a" + txt + "destroyed instance. This is a no-op but", "indicates a potential memory leak."].join(" ");
}
function clean(value) {
  var spacesAndTabs = /[ \t]{2,}/g;
  var lineStartWithSpaces = /^[ \t]*/gm;
  return value.replace(spacesAndTabs, " ").replace(lineStartWithSpaces, "").trim();
}
function getDevMessage(message) {
  return clean("\n  %ctippy.js\n\n  %c" + clean(message) + "\n\n  %c\u{1F477}\u200D This is a development-only message. It will be removed in production.\n  ");
}
function getFormattedMessage(message) {
  return [getDevMessage(message), "color: #00C584; font-size: 1.3em; font-weight: bold;", "line-height: 1.5", "color: #a6a095;"];
}
var visitedMessages;
if (true) {
  resetVisitedMessages();
}
function resetVisitedMessages() {
  visitedMessages = /* @__PURE__ */new Set();
}
function warnWhen(condition, message) {
  if (condition && !visitedMessages.has(message)) {
    var _console;
    visitedMessages.add(message);
    (_console = console).warn.apply(_console, getFormattedMessage(message));
  }
}
function errorWhen(condition, message) {
  if (condition && !visitedMessages.has(message)) {
    var _console2;
    visitedMessages.add(message);
    (_console2 = console).error.apply(_console2, getFormattedMessage(message));
  }
}
function validateTargets(targets) {
  var didPassFalsyValue = !targets;
  var didPassPlainObject = Object.prototype.toString.call(targets) === "[object Object]" && !targets.addEventListener;
  errorWhen(didPassFalsyValue, ["tippy() was passed", "`" + String(targets) + "`", "as its targets (first) argument. Valid types are: String, Element,", "Element[], or NodeList."].join(" "));
  errorWhen(didPassPlainObject, ["tippy() was passed a plain object which is not supported as an argument", "for virtual positioning. Use props.getReferenceClientRect instead."].join(" "));
}
var pluginProps = {
  animateFill: false,
  followCursor: false,
  inlinePositioning: false,
  sticky: false
};
var renderProps = {
  allowHTML: false,
  animation: "fade",
  arrow: true,
  content: "",
  inertia: false,
  maxWidth: 350,
  role: "tooltip",
  theme: "",
  zIndex: 9999
};
var defaultProps = Object.assign({
  appendTo: TIPPY_DEFAULT_APPEND_TO,
  aria: {
    content: "auto",
    expanded: "auto"
  },
  delay: 0,
  duration: [300, 250],
  getReferenceClientRect: null,
  hideOnClick: true,
  ignoreAttributes: false,
  interactive: false,
  interactiveBorder: 2,
  interactiveDebounce: 0,
  moveTransition: "",
  offset: [0, 10],
  onAfterUpdate: function onAfterUpdate() {},
  onBeforeUpdate: function onBeforeUpdate() {},
  onCreate: function onCreate() {},
  onDestroy: function onDestroy() {},
  onHidden: function onHidden() {},
  onHide: function onHide() {},
  onMount: function onMount() {},
  onShow: function onShow() {},
  onShown: function onShown() {},
  onTrigger: function onTrigger() {},
  onUntrigger: function onUntrigger() {},
  onClickOutside: function onClickOutside() {},
  placement: "top",
  plugins: [],
  popperOptions: {},
  render: null,
  showOnCreate: false,
  touch: true,
  trigger: "mouseenter focus",
  triggerTarget: null
}, pluginProps, renderProps);
var defaultKeys = Object.keys(defaultProps);
var setDefaultProps = function setDefaultProps2(partialProps) {
  if (true) {
    validateProps(partialProps, []);
  }
  var keys = Object.keys(partialProps);
  keys.forEach(function (key) {
    defaultProps[key] = partialProps[key];
  });
};
function getExtendedPassedProps(passedProps) {
  var plugins = passedProps.plugins || [];
  var pluginProps2 = plugins.reduce(function (acc, plugin) {
    var name = plugin.name,
      defaultValue = plugin.defaultValue;
    if (name) {
      var _name;
      acc[name] = passedProps[name] !== void 0 ? passedProps[name] : (_name = defaultProps[name]) != null ? _name : defaultValue;
    }
    return acc;
  }, {});
  return Object.assign({}, passedProps, pluginProps2);
}
function getDataAttributeProps(reference, plugins) {
  var propKeys = plugins ? Object.keys(getExtendedPassedProps(Object.assign({}, defaultProps, {
    plugins
  }))) : defaultKeys;
  var props = propKeys.reduce(function (acc, key) {
    var valueAsString = (reference.getAttribute("data-tippy-" + key) || "").trim();
    if (!valueAsString) {
      return acc;
    }
    if (key === "content") {
      acc[key] = valueAsString;
    } else {
      try {
        acc[key] = JSON.parse(valueAsString);
      } catch (e) {
        acc[key] = valueAsString;
      }
    }
    return acc;
  }, {});
  return props;
}
function evaluateProps(reference, props) {
  var out = Object.assign({}, props, {
    content: invokeWithArgsOrReturn(props.content, [reference])
  }, props.ignoreAttributes ? {} : getDataAttributeProps(reference, props.plugins));
  out.aria = Object.assign({}, defaultProps.aria, out.aria);
  out.aria = {
    expanded: out.aria.expanded === "auto" ? props.interactive : out.aria.expanded,
    content: out.aria.content === "auto" ? props.interactive ? null : "describedby" : out.aria.content
  };
  return out;
}
function validateProps(partialProps, plugins) {
  if (partialProps === void 0) {
    partialProps = {};
  }
  if (plugins === void 0) {
    plugins = [];
  }
  var keys = Object.keys(partialProps);
  keys.forEach(function (prop) {
    var nonPluginProps = removeProperties(defaultProps, Object.keys(pluginProps));
    var didPassUnknownProp = !hasOwnProperty(nonPluginProps, prop);
    if (didPassUnknownProp) {
      didPassUnknownProp = plugins.filter(function (plugin) {
        return plugin.name === prop;
      }).length === 0;
    }
    warnWhen(didPassUnknownProp, ["`" + prop + "`", "is not a valid prop. You may have spelled it incorrectly, or if it's", "a plugin, forgot to pass it in an array as props.plugins.", "\n\n", "All props: https://atomiks.github.io/tippyjs/v6/all-props/\n", "Plugins: https://atomiks.github.io/tippyjs/v6/plugins/"].join(" "));
  });
}
var innerHTML = function innerHTML2() {
  return "innerHTML";
};
function dangerouslySetInnerHTML(element, html) {
  element[innerHTML()] = html;
}
function createArrowElement(value) {
  var arrow = div();
  if (value === true) {
    arrow.className = ARROW_CLASS;
  } else {
    arrow.className = SVG_ARROW_CLASS;
    if (isElement(value)) {
      arrow.appendChild(value);
    } else {
      dangerouslySetInnerHTML(arrow, value);
    }
  }
  return arrow;
}
function setContent(content, props) {
  if (isElement(props.content)) {
    dangerouslySetInnerHTML(content, "");
    content.appendChild(props.content);
  } else if (typeof props.content !== "function") {
    if (props.allowHTML) {
      dangerouslySetInnerHTML(content, props.content);
    } else {
      content.textContent = props.content;
    }
  }
}
function getChildren(popper) {
  var box = popper.firstElementChild;
  var boxChildren = arrayFrom(box.children);
  return {
    box,
    content: boxChildren.find(function (node) {
      return node.classList.contains(CONTENT_CLASS);
    }),
    arrow: boxChildren.find(function (node) {
      return node.classList.contains(ARROW_CLASS) || node.classList.contains(SVG_ARROW_CLASS);
    }),
    backdrop: boxChildren.find(function (node) {
      return node.classList.contains(BACKDROP_CLASS);
    })
  };
}
function render(instance) {
  var popper = div();
  var box = div();
  box.className = BOX_CLASS;
  box.setAttribute("data-state", "hidden");
  box.setAttribute("tabindex", "-1");
  var content = div();
  content.className = CONTENT_CLASS;
  content.setAttribute("data-state", "hidden");
  setContent(content, instance.props);
  popper.appendChild(box);
  box.appendChild(content);
  onUpdate(instance.props, instance.props);
  function onUpdate(prevProps, nextProps) {
    var _getChildren = getChildren(popper),
      box2 = _getChildren.box,
      content2 = _getChildren.content,
      arrow = _getChildren.arrow;
    if (nextProps.theme) {
      box2.setAttribute("data-theme", nextProps.theme);
    } else {
      box2.removeAttribute("data-theme");
    }
    if (typeof nextProps.animation === "string") {
      box2.setAttribute("data-animation", nextProps.animation);
    } else {
      box2.removeAttribute("data-animation");
    }
    if (nextProps.inertia) {
      box2.setAttribute("data-inertia", "");
    } else {
      box2.removeAttribute("data-inertia");
    }
    box2.style.maxWidth = typeof nextProps.maxWidth === "number" ? nextProps.maxWidth + "px" : nextProps.maxWidth;
    if (nextProps.role) {
      box2.setAttribute("role", nextProps.role);
    } else {
      box2.removeAttribute("role");
    }
    if (prevProps.content !== nextProps.content || prevProps.allowHTML !== nextProps.allowHTML) {
      setContent(content2, instance.props);
    }
    if (nextProps.arrow) {
      if (!arrow) {
        box2.appendChild(createArrowElement(nextProps.arrow));
      } else if (prevProps.arrow !== nextProps.arrow) {
        box2.removeChild(arrow);
        box2.appendChild(createArrowElement(nextProps.arrow));
      }
    } else if (arrow) {
      box2.removeChild(arrow);
    }
  }
  return {
    popper,
    onUpdate
  };
}
render.$$tippy = true;
var idCounter = 1;
var mouseMoveListeners = [];
var mountedInstances = [];
function createTippy(reference, passedProps) {
  var props = evaluateProps(reference, Object.assign({}, defaultProps, getExtendedPassedProps(removeUndefinedProps(passedProps))));
  var showTimeout;
  var hideTimeout;
  var scheduleHideAnimationFrame;
  var isVisibleFromClick = false;
  var didHideDueToDocumentMouseDown = false;
  var didTouchMove = false;
  var ignoreOnFirstUpdate = false;
  var lastTriggerEvent;
  var currentTransitionEndListener;
  var onFirstUpdate;
  var listeners = [];
  var debouncedOnMouseMove = debounce(onMouseMove, props.interactiveDebounce);
  var currentTarget;
  var id = idCounter++;
  var popperInstance = null;
  var plugins = unique(props.plugins);
  var state = {
    isEnabled: true,
    isVisible: false,
    isDestroyed: false,
    isMounted: false,
    isShown: false
  };
  var instance = {
    id,
    reference,
    popper: div(),
    popperInstance,
    props,
    state,
    plugins,
    clearDelayTimeouts,
    setProps,
    setContent: setContent2,
    show,
    hide,
    hideWithInteractivity,
    enable,
    disable,
    unmount,
    destroy
  };
  if (!props.render) {
    if (true) {
      errorWhen(true, "render() function has not been supplied.");
    }
    return instance;
  }
  var _props$render = props.render(instance),
    popper = _props$render.popper,
    onUpdate = _props$render.onUpdate;
  popper.setAttribute("data-tippy-root", "");
  popper.id = "tippy-" + instance.id;
  instance.popper = popper;
  reference._tippy = instance;
  popper._tippy = instance;
  var pluginsHooks = plugins.map(function (plugin) {
    return plugin.fn(instance);
  });
  var hasAriaExpanded = reference.hasAttribute("aria-expanded");
  addListeners();
  handleAriaExpandedAttribute();
  handleStyles();
  invokeHook("onCreate", [instance]);
  if (props.showOnCreate) {
    scheduleShow();
  }
  popper.addEventListener("mouseenter", function () {
    if (instance.props.interactive && instance.state.isVisible) {
      instance.clearDelayTimeouts();
    }
  });
  popper.addEventListener("mouseleave", function () {
    if (instance.props.interactive && instance.props.trigger.indexOf("mouseenter") >= 0) {
      getDocument().addEventListener("mousemove", debouncedOnMouseMove);
    }
  });
  return instance;
  function getNormalizedTouchSettings() {
    var touch = instance.props.touch;
    return Array.isArray(touch) ? touch : [touch, 0];
  }
  function getIsCustomTouchBehavior() {
    return getNormalizedTouchSettings()[0] === "hold";
  }
  function getIsDefaultRenderFn() {
    var _instance$props$rende;
    return !!((_instance$props$rende = instance.props.render) != null && _instance$props$rende.$$tippy);
  }
  function getCurrentTarget() {
    return currentTarget || reference;
  }
  function getDocument() {
    var parent = getCurrentTarget().parentNode;
    return parent ? getOwnerDocument(parent) : document;
  }
  function getDefaultTemplateChildren() {
    return getChildren(popper);
  }
  function getDelay(isShow) {
    if (instance.state.isMounted && !instance.state.isVisible || currentInput.isTouch || lastTriggerEvent && lastTriggerEvent.type === "focus") {
      return 0;
    }
    return getValueAtIndexOrReturn(instance.props.delay, isShow ? 0 : 1, defaultProps.delay);
  }
  function handleStyles(fromHide) {
    if (fromHide === void 0) {
      fromHide = false;
    }
    popper.style.pointerEvents = instance.props.interactive && !fromHide ? "" : "none";
    popper.style.zIndex = "" + instance.props.zIndex;
  }
  function invokeHook(hook, args, shouldInvokePropsHook) {
    if (shouldInvokePropsHook === void 0) {
      shouldInvokePropsHook = true;
    }
    pluginsHooks.forEach(function (pluginHooks) {
      if (pluginHooks[hook]) {
        pluginHooks[hook].apply(pluginHooks, args);
      }
    });
    if (shouldInvokePropsHook) {
      var _instance$props;
      (_instance$props = instance.props)[hook].apply(_instance$props, args);
    }
  }
  function handleAriaContentAttribute() {
    var aria = instance.props.aria;
    if (!aria.content) {
      return;
    }
    var attr = "aria-" + aria.content;
    var id2 = popper.id;
    var nodes = normalizeToArray(instance.props.triggerTarget || reference);
    nodes.forEach(function (node) {
      var currentValue = node.getAttribute(attr);
      if (instance.state.isVisible) {
        node.setAttribute(attr, currentValue ? currentValue + " " + id2 : id2);
      } else {
        var nextValue = currentValue && currentValue.replace(id2, "").trim();
        if (nextValue) {
          node.setAttribute(attr, nextValue);
        } else {
          node.removeAttribute(attr);
        }
      }
    });
  }
  function handleAriaExpandedAttribute() {
    if (hasAriaExpanded || !instance.props.aria.expanded) {
      return;
    }
    var nodes = normalizeToArray(instance.props.triggerTarget || reference);
    nodes.forEach(function (node) {
      if (instance.props.interactive) {
        node.setAttribute("aria-expanded", instance.state.isVisible && node === getCurrentTarget() ? "true" : "false");
      } else {
        node.removeAttribute("aria-expanded");
      }
    });
  }
  function cleanupInteractiveMouseListeners() {
    getDocument().removeEventListener("mousemove", debouncedOnMouseMove);
    mouseMoveListeners = mouseMoveListeners.filter(function (listener) {
      return listener !== debouncedOnMouseMove;
    });
  }
  function onDocumentPress(event) {
    if (currentInput.isTouch) {
      if (didTouchMove || event.type === "mousedown") {
        return;
      }
    }
    var actualTarget = event.composedPath && event.composedPath()[0] || event.target;
    if (instance.props.interactive && actualContains(popper, actualTarget)) {
      return;
    }
    if (normalizeToArray(instance.props.triggerTarget || reference).some(function (el) {
      return actualContains(el, actualTarget);
    })) {
      if (currentInput.isTouch) {
        return;
      }
      if (instance.state.isVisible && instance.props.trigger.indexOf("click") >= 0) {
        return;
      }
    } else {
      invokeHook("onClickOutside", [instance, event]);
    }
    if (instance.props.hideOnClick === true) {
      instance.clearDelayTimeouts();
      instance.hide();
      didHideDueToDocumentMouseDown = true;
      setTimeout(function () {
        didHideDueToDocumentMouseDown = false;
      });
      if (!instance.state.isMounted) {
        removeDocumentPress();
      }
    }
  }
  function onTouchMove() {
    didTouchMove = true;
  }
  function onTouchStart() {
    didTouchMove = false;
  }
  function addDocumentPress() {
    var doc = getDocument();
    doc.addEventListener("mousedown", onDocumentPress, true);
    doc.addEventListener("touchend", onDocumentPress, TOUCH_OPTIONS);
    doc.addEventListener("touchstart", onTouchStart, TOUCH_OPTIONS);
    doc.addEventListener("touchmove", onTouchMove, TOUCH_OPTIONS);
  }
  function removeDocumentPress() {
    var doc = getDocument();
    doc.removeEventListener("mousedown", onDocumentPress, true);
    doc.removeEventListener("touchend", onDocumentPress, TOUCH_OPTIONS);
    doc.removeEventListener("touchstart", onTouchStart, TOUCH_OPTIONS);
    doc.removeEventListener("touchmove", onTouchMove, TOUCH_OPTIONS);
  }
  function onTransitionedOut(duration, callback) {
    onTransitionEnd(duration, function () {
      if (!instance.state.isVisible && popper.parentNode && popper.parentNode.contains(popper)) {
        callback();
      }
    });
  }
  function onTransitionedIn(duration, callback) {
    onTransitionEnd(duration, callback);
  }
  function onTransitionEnd(duration, callback) {
    var box = getDefaultTemplateChildren().box;
    function listener(event) {
      if (event.target === box) {
        updateTransitionEndListener(box, "remove", listener);
        callback();
      }
    }
    if (duration === 0) {
      return callback();
    }
    updateTransitionEndListener(box, "remove", currentTransitionEndListener);
    updateTransitionEndListener(box, "add", listener);
    currentTransitionEndListener = listener;
  }
  function on(eventType, handler, options) {
    if (options === void 0) {
      options = false;
    }
    var nodes = normalizeToArray(instance.props.triggerTarget || reference);
    nodes.forEach(function (node) {
      node.addEventListener(eventType, handler, options);
      listeners.push({
        node,
        eventType,
        handler,
        options
      });
    });
  }
  function addListeners() {
    if (getIsCustomTouchBehavior()) {
      on("touchstart", onTrigger2, {
        passive: true
      });
      on("touchend", onMouseLeave, {
        passive: true
      });
    }
    splitBySpaces(instance.props.trigger).forEach(function (eventType) {
      if (eventType === "manual") {
        return;
      }
      on(eventType, onTrigger2);
      switch (eventType) {
        case "mouseenter":
          on("mouseleave", onMouseLeave);
          break;
        case "focus":
          on(isIE11 ? "focusout" : "blur", onBlurOrFocusOut);
          break;
        case "focusin":
          on("focusout", onBlurOrFocusOut);
          break;
      }
    });
  }
  function removeListeners() {
    listeners.forEach(function (_ref) {
      var node = _ref.node,
        eventType = _ref.eventType,
        handler = _ref.handler,
        options = _ref.options;
      node.removeEventListener(eventType, handler, options);
    });
    listeners = [];
  }
  function onTrigger2(event) {
    var _lastTriggerEvent;
    var shouldScheduleClickHide = false;
    if (!instance.state.isEnabled || isEventListenerStopped(event) || didHideDueToDocumentMouseDown) {
      return;
    }
    var wasFocused = ((_lastTriggerEvent = lastTriggerEvent) == null ? void 0 : _lastTriggerEvent.type) === "focus";
    lastTriggerEvent = event;
    currentTarget = event.currentTarget;
    handleAriaExpandedAttribute();
    if (!instance.state.isVisible && isMouseEvent(event)) {
      mouseMoveListeners.forEach(function (listener) {
        return listener(event);
      });
    }
    if (event.type === "click" && (instance.props.trigger.indexOf("mouseenter") < 0 || isVisibleFromClick) && instance.props.hideOnClick !== false && instance.state.isVisible) {
      shouldScheduleClickHide = true;
    } else {
      scheduleShow(event);
    }
    if (event.type === "click") {
      isVisibleFromClick = !shouldScheduleClickHide;
    }
    if (shouldScheduleClickHide && !wasFocused) {
      scheduleHide(event);
    }
  }
  function onMouseMove(event) {
    var target = event.target;
    var isCursorOverReferenceOrPopper = getCurrentTarget().contains(target) || popper.contains(target);
    if (event.type === "mousemove" && isCursorOverReferenceOrPopper) {
      return;
    }
    var popperTreeData = getNestedPopperTree().concat(popper).map(function (popper2) {
      var _instance$popperInsta;
      var instance2 = popper2._tippy;
      var state2 = (_instance$popperInsta = instance2.popperInstance) == null ? void 0 : _instance$popperInsta.state;
      if (state2) {
        return {
          popperRect: popper2.getBoundingClientRect(),
          popperState: state2,
          props
        };
      }
      return null;
    }).filter(Boolean);
    if (isCursorOutsideInteractiveBorder(popperTreeData, event)) {
      cleanupInteractiveMouseListeners();
      scheduleHide(event);
    }
  }
  function onMouseLeave(event) {
    var shouldBail = isEventListenerStopped(event) || instance.props.trigger.indexOf("click") >= 0 && isVisibleFromClick;
    if (shouldBail) {
      return;
    }
    if (instance.props.interactive) {
      instance.hideWithInteractivity(event);
      return;
    }
    scheduleHide(event);
  }
  function onBlurOrFocusOut(event) {
    if (instance.props.trigger.indexOf("focusin") < 0 && event.target !== getCurrentTarget()) {
      return;
    }
    if (instance.props.interactive && event.relatedTarget && popper.contains(event.relatedTarget)) {
      return;
    }
    scheduleHide(event);
  }
  function isEventListenerStopped(event) {
    return currentInput.isTouch ? getIsCustomTouchBehavior() !== event.type.indexOf("touch") >= 0 : false;
  }
  function createPopperInstance() {
    destroyPopperInstance();
    var _instance$props2 = instance.props,
      popperOptions = _instance$props2.popperOptions,
      placement = _instance$props2.placement,
      offset = _instance$props2.offset,
      getReferenceClientRect = _instance$props2.getReferenceClientRect,
      moveTransition = _instance$props2.moveTransition;
    var arrow = getIsDefaultRenderFn() ? getChildren(popper).arrow : null;
    var computedReference = getReferenceClientRect ? {
      getBoundingClientRect: getReferenceClientRect,
      contextElement: getReferenceClientRect.contextElement || getCurrentTarget()
    } : reference;
    var tippyModifier = {
      name: "$$tippy",
      enabled: true,
      phase: "beforeWrite",
      requires: ["computeStyles"],
      fn: function fn5(_ref2) {
        var state2 = _ref2.state;
        if (getIsDefaultRenderFn()) {
          var _getDefaultTemplateCh = getDefaultTemplateChildren(),
            box = _getDefaultTemplateCh.box;
          ["placement", "reference-hidden", "escaped"].forEach(function (attr) {
            if (attr === "placement") {
              box.setAttribute("data-placement", state2.placement);
            } else {
              if (state2.attributes.popper["data-popper-" + attr]) {
                box.setAttribute("data-" + attr, "");
              } else {
                box.removeAttribute("data-" + attr);
              }
            }
          });
          state2.attributes.popper = {};
        }
      }
    };
    var modifiers = [{
      name: "offset",
      options: {
        offset
      }
    }, {
      name: "preventOverflow",
      options: {
        padding: {
          top: 2,
          bottom: 2,
          left: 5,
          right: 5
        }
      }
    }, {
      name: "flip",
      options: {
        padding: 5
      }
    }, {
      name: "computeStyles",
      options: {
        adaptive: !moveTransition
      }
    }, tippyModifier];
    if (getIsDefaultRenderFn() && arrow) {
      modifiers.push({
        name: "arrow",
        options: {
          element: arrow,
          padding: 3
        }
      });
    }
    modifiers.push.apply(modifiers, (popperOptions == null ? void 0 : popperOptions.modifiers) || []);
    instance.popperInstance = (0, import_core.createPopper)(computedReference, popper, Object.assign({}, popperOptions, {
      placement,
      onFirstUpdate,
      modifiers
    }));
  }
  function destroyPopperInstance() {
    if (instance.popperInstance) {
      instance.popperInstance.destroy();
      instance.popperInstance = null;
    }
  }
  function mount() {
    var appendTo = instance.props.appendTo;
    var parentNode;
    var node = getCurrentTarget();
    if (instance.props.interactive && appendTo === TIPPY_DEFAULT_APPEND_TO || appendTo === "parent") {
      parentNode = node.parentNode;
    } else {
      parentNode = invokeWithArgsOrReturn(appendTo, [node]);
    }
    if (!parentNode.contains(popper)) {
      parentNode.appendChild(popper);
    }
    instance.state.isMounted = true;
    createPopperInstance();
    if (true) {
      warnWhen(instance.props.interactive && appendTo === defaultProps.appendTo && node.nextElementSibling !== popper, ["Interactive tippy element may not be accessible via keyboard", "navigation because it is not directly after the reference element", "in the DOM source order.", "\n\n", "Using a wrapper <div> or <span> tag around the reference element", "solves this by creating a new parentNode context.", "\n\n", "Specifying `appendTo: document.body` silences this warning, but it", "assumes you are using a focus management solution to handle", "keyboard navigation.", "\n\n", "See: https://atomiks.github.io/tippyjs/v6/accessibility/#interactivity"].join(" "));
    }
  }
  function getNestedPopperTree() {
    return arrayFrom(popper.querySelectorAll("[data-tippy-root]"));
  }
  function scheduleShow(event) {
    instance.clearDelayTimeouts();
    if (event) {
      invokeHook("onTrigger", [instance, event]);
    }
    addDocumentPress();
    var delay = getDelay(true);
    var _getNormalizedTouchSe = getNormalizedTouchSettings(),
      touchValue = _getNormalizedTouchSe[0],
      touchDelay = _getNormalizedTouchSe[1];
    if (currentInput.isTouch && touchValue === "hold" && touchDelay) {
      delay = touchDelay;
    }
    if (delay) {
      showTimeout = setTimeout(function () {
        instance.show();
      }, delay);
    } else {
      instance.show();
    }
  }
  function scheduleHide(event) {
    instance.clearDelayTimeouts();
    invokeHook("onUntrigger", [instance, event]);
    if (!instance.state.isVisible) {
      removeDocumentPress();
      return;
    }
    if (instance.props.trigger.indexOf("mouseenter") >= 0 && instance.props.trigger.indexOf("click") >= 0 && ["mouseleave", "mousemove"].indexOf(event.type) >= 0 && isVisibleFromClick) {
      return;
    }
    var delay = getDelay(false);
    if (delay) {
      hideTimeout = setTimeout(function () {
        if (instance.state.isVisible) {
          instance.hide();
        }
      }, delay);
    } else {
      scheduleHideAnimationFrame = requestAnimationFrame(function () {
        instance.hide();
      });
    }
  }
  function enable() {
    instance.state.isEnabled = true;
  }
  function disable() {
    instance.hide();
    instance.state.isEnabled = false;
  }
  function clearDelayTimeouts() {
    clearTimeout(showTimeout);
    clearTimeout(hideTimeout);
    cancelAnimationFrame(scheduleHideAnimationFrame);
  }
  function setProps(partialProps) {
    if (true) {
      warnWhen(instance.state.isDestroyed, createMemoryLeakWarning("setProps"));
    }
    if (instance.state.isDestroyed) {
      return;
    }
    invokeHook("onBeforeUpdate", [instance, partialProps]);
    removeListeners();
    var prevProps = instance.props;
    var nextProps = evaluateProps(reference, Object.assign({}, prevProps, removeUndefinedProps(partialProps), {
      ignoreAttributes: true
    }));
    instance.props = nextProps;
    addListeners();
    if (prevProps.interactiveDebounce !== nextProps.interactiveDebounce) {
      cleanupInteractiveMouseListeners();
      debouncedOnMouseMove = debounce(onMouseMove, nextProps.interactiveDebounce);
    }
    if (prevProps.triggerTarget && !nextProps.triggerTarget) {
      normalizeToArray(prevProps.triggerTarget).forEach(function (node) {
        node.removeAttribute("aria-expanded");
      });
    } else if (nextProps.triggerTarget) {
      reference.removeAttribute("aria-expanded");
    }
    handleAriaExpandedAttribute();
    handleStyles();
    if (onUpdate) {
      onUpdate(prevProps, nextProps);
    }
    if (instance.popperInstance) {
      createPopperInstance();
      getNestedPopperTree().forEach(function (nestedPopper) {
        requestAnimationFrame(nestedPopper._tippy.popperInstance.forceUpdate);
      });
    }
    invokeHook("onAfterUpdate", [instance, partialProps]);
  }
  function setContent2(content) {
    instance.setProps({
      content
    });
  }
  function show() {
    if (true) {
      warnWhen(instance.state.isDestroyed, createMemoryLeakWarning("show"));
    }
    var isAlreadyVisible = instance.state.isVisible;
    var isDestroyed = instance.state.isDestroyed;
    var isDisabled = !instance.state.isEnabled;
    var isTouchAndTouchDisabled = currentInput.isTouch && !instance.props.touch;
    var duration = getValueAtIndexOrReturn(instance.props.duration, 0, defaultProps.duration);
    if (isAlreadyVisible || isDestroyed || isDisabled || isTouchAndTouchDisabled) {
      return;
    }
    if (getCurrentTarget().hasAttribute("disabled")) {
      return;
    }
    invokeHook("onShow", [instance], false);
    if (instance.props.onShow(instance) === false) {
      return;
    }
    instance.state.isVisible = true;
    if (getIsDefaultRenderFn()) {
      popper.style.visibility = "visible";
    }
    handleStyles();
    addDocumentPress();
    if (!instance.state.isMounted) {
      popper.style.transition = "none";
    }
    if (getIsDefaultRenderFn()) {
      var _getDefaultTemplateCh2 = getDefaultTemplateChildren(),
        box = _getDefaultTemplateCh2.box,
        content = _getDefaultTemplateCh2.content;
      setTransitionDuration([box, content], 0);
    }
    onFirstUpdate = function onFirstUpdate2() {
      var _instance$popperInsta2;
      if (!instance.state.isVisible || ignoreOnFirstUpdate) {
        return;
      }
      ignoreOnFirstUpdate = true;
      void popper.offsetHeight;
      popper.style.transition = instance.props.moveTransition;
      if (getIsDefaultRenderFn() && instance.props.animation) {
        var _getDefaultTemplateCh3 = getDefaultTemplateChildren(),
          _box = _getDefaultTemplateCh3.box,
          _content = _getDefaultTemplateCh3.content;
        setTransitionDuration([_box, _content], duration);
        setVisibilityState([_box, _content], "visible");
      }
      handleAriaContentAttribute();
      handleAriaExpandedAttribute();
      pushIfUnique(mountedInstances, instance);
      (_instance$popperInsta2 = instance.popperInstance) == null ? void 0 : _instance$popperInsta2.forceUpdate();
      invokeHook("onMount", [instance]);
      if (instance.props.animation && getIsDefaultRenderFn()) {
        onTransitionedIn(duration, function () {
          instance.state.isShown = true;
          invokeHook("onShown", [instance]);
        });
      }
    };
    mount();
  }
  function hide() {
    if (true) {
      warnWhen(instance.state.isDestroyed, createMemoryLeakWarning("hide"));
    }
    var isAlreadyHidden = !instance.state.isVisible;
    var isDestroyed = instance.state.isDestroyed;
    var isDisabled = !instance.state.isEnabled;
    var duration = getValueAtIndexOrReturn(instance.props.duration, 1, defaultProps.duration);
    if (isAlreadyHidden || isDestroyed || isDisabled) {
      return;
    }
    invokeHook("onHide", [instance], false);
    if (instance.props.onHide(instance) === false) {
      return;
    }
    instance.state.isVisible = false;
    instance.state.isShown = false;
    ignoreOnFirstUpdate = false;
    isVisibleFromClick = false;
    if (getIsDefaultRenderFn()) {
      popper.style.visibility = "hidden";
    }
    cleanupInteractiveMouseListeners();
    removeDocumentPress();
    handleStyles(true);
    if (getIsDefaultRenderFn()) {
      var _getDefaultTemplateCh4 = getDefaultTemplateChildren(),
        box = _getDefaultTemplateCh4.box,
        content = _getDefaultTemplateCh4.content;
      if (instance.props.animation) {
        setTransitionDuration([box, content], duration);
        setVisibilityState([box, content], "hidden");
      }
    }
    handleAriaContentAttribute();
    handleAriaExpandedAttribute();
    if (instance.props.animation) {
      if (getIsDefaultRenderFn()) {
        onTransitionedOut(duration, instance.unmount);
      }
    } else {
      instance.unmount();
    }
  }
  function hideWithInteractivity(event) {
    if (true) {
      warnWhen(instance.state.isDestroyed, createMemoryLeakWarning("hideWithInteractivity"));
    }
    getDocument().addEventListener("mousemove", debouncedOnMouseMove);
    pushIfUnique(mouseMoveListeners, debouncedOnMouseMove);
    debouncedOnMouseMove(event);
  }
  function unmount() {
    if (true) {
      warnWhen(instance.state.isDestroyed, createMemoryLeakWarning("unmount"));
    }
    if (instance.state.isVisible) {
      instance.hide();
    }
    if (!instance.state.isMounted) {
      return;
    }
    destroyPopperInstance();
    getNestedPopperTree().forEach(function (nestedPopper) {
      nestedPopper._tippy.unmount();
    });
    if (popper.parentNode) {
      popper.parentNode.removeChild(popper);
    }
    mountedInstances = mountedInstances.filter(function (i) {
      return i !== instance;
    });
    instance.state.isMounted = false;
    invokeHook("onHidden", [instance]);
  }
  function destroy() {
    if (true) {
      warnWhen(instance.state.isDestroyed, createMemoryLeakWarning("destroy"));
    }
    if (instance.state.isDestroyed) {
      return;
    }
    instance.clearDelayTimeouts();
    instance.unmount();
    removeListeners();
    delete reference._tippy;
    instance.state.isDestroyed = true;
    invokeHook("onDestroy", [instance]);
  }
}
function tippy(targets, optionalProps) {
  if (optionalProps === void 0) {
    optionalProps = {};
  }
  var plugins = defaultProps.plugins.concat(optionalProps.plugins || []);
  if (true) {
    validateTargets(targets);
    validateProps(optionalProps, plugins);
  }
  bindGlobalEventListeners();
  var passedProps = Object.assign({}, optionalProps, {
    plugins
  });
  var elements = getArrayOfElements(targets);
  if (true) {
    var isSingleContentElement = isElement(passedProps.content);
    var isMoreThanOneReferenceElement = elements.length > 1;
    warnWhen(isSingleContentElement && isMoreThanOneReferenceElement, ["tippy() was passed an Element as the `content` prop, but more than", "one tippy instance was created by this invocation. This means the", "content element will only be appended to the last tippy instance.", "\n\n", "Instead, pass the .innerHTML of the element, or use a function that", "returns a cloned version of the element instead.", "\n\n", "1) content: element.innerHTML\n", "2) content: () => element.cloneNode(true)"].join(" "));
  }
  var instances = elements.reduce(function (acc, reference) {
    var instance = reference && createTippy(reference, passedProps);
    if (instance) {
      acc.push(instance);
    }
    return acc;
  }, []);
  return isElement(targets) ? instances[0] : instances;
}
tippy.defaultProps = defaultProps;
tippy.setDefaultProps = setDefaultProps;
tippy.currentInput = currentInput;
var hideAll = function hideAll2(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
    excludedReferenceOrInstance = _ref.exclude,
    duration = _ref.duration;
  mountedInstances.forEach(function (instance) {
    var isExcluded = false;
    if (excludedReferenceOrInstance) {
      isExcluded = isReferenceElement(excludedReferenceOrInstance) ? instance.reference === excludedReferenceOrInstance : instance.popper === excludedReferenceOrInstance.popper;
    }
    if (!isExcluded) {
      var originalDuration = instance.props.duration;
      instance.setProps({
        duration
      });
      instance.hide();
      if (!instance.state.isDestroyed) {
        instance.setProps({
          duration: originalDuration
        });
      }
    }
  });
};
var applyStylesModifier = Object.assign({}, import_core.applyStyles, {
  effect: function effect(_ref) {
    var state = _ref.state;
    var initialStyles = {
      popper: {
        position: state.options.strategy,
        left: "0",
        top: "0",
        margin: "0"
      },
      arrow: {
        position: "absolute"
      },
      reference: {}
    };
    Object.assign(state.elements.popper.style, initialStyles.popper);
    state.styles = initialStyles;
    if (state.elements.arrow) {
      Object.assign(state.elements.arrow.style, initialStyles.arrow);
    }
  }
});
var createSingleton = function createSingleton2(tippyInstances, optionalProps) {
  var _optionalProps$popper;
  if (optionalProps === void 0) {
    optionalProps = {};
  }
  if (true) {
    errorWhen(!Array.isArray(tippyInstances), ["The first argument passed to createSingleton() must be an array of", "tippy instances. The passed value was", String(tippyInstances)].join(" "));
  }
  var individualInstances = tippyInstances;
  var references = [];
  var triggerTargets = [];
  var currentTarget;
  var overrides = optionalProps.overrides;
  var interceptSetPropsCleanups = [];
  var shownOnCreate = false;
  function setTriggerTargets() {
    triggerTargets = individualInstances.map(function (instance) {
      return normalizeToArray(instance.props.triggerTarget || instance.reference);
    }).reduce(function (acc, item) {
      return acc.concat(item);
    }, []);
  }
  function setReferences() {
    references = individualInstances.map(function (instance) {
      return instance.reference;
    });
  }
  function enableInstances(isEnabled) {
    individualInstances.forEach(function (instance) {
      if (isEnabled) {
        instance.enable();
      } else {
        instance.disable();
      }
    });
  }
  function interceptSetProps(singleton2) {
    return individualInstances.map(function (instance) {
      var originalSetProps2 = instance.setProps;
      instance.setProps = function (props) {
        originalSetProps2(props);
        if (instance.reference === currentTarget) {
          singleton2.setProps(props);
        }
      };
      return function () {
        instance.setProps = originalSetProps2;
      };
    });
  }
  function prepareInstance(singleton2, target) {
    var index = triggerTargets.indexOf(target);
    if (target === currentTarget) {
      return;
    }
    currentTarget = target;
    var overrideProps = (overrides || []).concat("content").reduce(function (acc, prop) {
      acc[prop] = individualInstances[index].props[prop];
      return acc;
    }, {});
    singleton2.setProps(Object.assign({}, overrideProps, {
      getReferenceClientRect: typeof overrideProps.getReferenceClientRect === "function" ? overrideProps.getReferenceClientRect : function () {
        var _references$index;
        return (_references$index = references[index]) == null ? void 0 : _references$index.getBoundingClientRect();
      }
    }));
  }
  enableInstances(false);
  setReferences();
  setTriggerTargets();
  var plugin = {
    fn: function fn5() {
      return {
        onDestroy: function onDestroy2() {
          enableInstances(true);
        },
        onHidden: function onHidden2() {
          currentTarget = null;
        },
        onClickOutside: function onClickOutside2(instance) {
          if (instance.props.showOnCreate && !shownOnCreate) {
            shownOnCreate = true;
            currentTarget = null;
          }
        },
        onShow: function onShow2(instance) {
          if (instance.props.showOnCreate && !shownOnCreate) {
            shownOnCreate = true;
            prepareInstance(instance, references[0]);
          }
        },
        onTrigger: function onTrigger2(instance, event) {
          prepareInstance(instance, event.currentTarget);
        }
      };
    }
  };
  var singleton = tippy(div(), Object.assign({}, removeProperties(optionalProps, ["overrides"]), {
    plugins: [plugin].concat(optionalProps.plugins || []),
    triggerTarget: triggerTargets,
    popperOptions: Object.assign({}, optionalProps.popperOptions, {
      modifiers: [].concat(((_optionalProps$popper = optionalProps.popperOptions) == null ? void 0 : _optionalProps$popper.modifiers) || [], [applyStylesModifier])
    })
  }));
  var originalShow = singleton.show;
  singleton.show = function (target) {
    originalShow();
    if (!currentTarget && target == null) {
      return prepareInstance(singleton, references[0]);
    }
    if (currentTarget && target == null) {
      return;
    }
    if (typeof target === "number") {
      return references[target] && prepareInstance(singleton, references[target]);
    }
    if (individualInstances.indexOf(target) >= 0) {
      var ref = target.reference;
      return prepareInstance(singleton, ref);
    }
    if (references.indexOf(target) >= 0) {
      return prepareInstance(singleton, target);
    }
  };
  singleton.showNext = function () {
    var first = references[0];
    if (!currentTarget) {
      return singleton.show(0);
    }
    var index = references.indexOf(currentTarget);
    singleton.show(references[index + 1] || first);
  };
  singleton.showPrevious = function () {
    var last = references[references.length - 1];
    if (!currentTarget) {
      return singleton.show(last);
    }
    var index = references.indexOf(currentTarget);
    var target = references[index - 1] || last;
    singleton.show(target);
  };
  var originalSetProps = singleton.setProps;
  singleton.setProps = function (props) {
    overrides = props.overrides || overrides;
    originalSetProps(props);
  };
  singleton.setInstances = function (nextInstances) {
    enableInstances(true);
    interceptSetPropsCleanups.forEach(function (fn5) {
      return fn5();
    });
    individualInstances = nextInstances;
    enableInstances(false);
    setReferences();
    setTriggerTargets();
    interceptSetPropsCleanups = interceptSetProps(singleton);
    singleton.setProps({
      triggerTarget: triggerTargets
    });
  };
  interceptSetPropsCleanups = interceptSetProps(singleton);
  return singleton;
};
var BUBBLING_EVENTS_MAP = {
  mouseover: "mouseenter",
  focusin: "focus",
  click: "click"
};
function delegate(targets, props) {
  if (true) {
    errorWhen(!(props && props.target), ["You must specity a `target` prop indicating a CSS selector string matching", "the target elements that should receive a tippy."].join(" "));
  }
  var listeners = [];
  var childTippyInstances = [];
  var disabled = false;
  var target = props.target;
  var nativeProps = removeProperties(props, ["target"]);
  var parentProps = Object.assign({}, nativeProps, {
    trigger: "manual",
    touch: false
  });
  var childProps = Object.assign({
    touch: defaultProps.touch
  }, nativeProps, {
    showOnCreate: true
  });
  var returnValue = tippy(targets, parentProps);
  var normalizedReturnValue = normalizeToArray(returnValue);
  function onTrigger2(event) {
    if (!event.target || disabled) {
      return;
    }
    var targetNode = event.target.closest(target);
    if (!targetNode) {
      return;
    }
    var trigger = targetNode.getAttribute("data-tippy-trigger") || props.trigger || defaultProps.trigger;
    if (targetNode._tippy) {
      return;
    }
    if (event.type === "touchstart" && typeof childProps.touch === "boolean") {
      return;
    }
    if (event.type !== "touchstart" && trigger.indexOf(BUBBLING_EVENTS_MAP[event.type]) < 0) {
      return;
    }
    var instance = tippy(targetNode, childProps);
    if (instance) {
      childTippyInstances = childTippyInstances.concat(instance);
    }
  }
  function on(node, eventType, handler, options) {
    if (options === void 0) {
      options = false;
    }
    node.addEventListener(eventType, handler, options);
    listeners.push({
      node,
      eventType,
      handler,
      options
    });
  }
  function addEventListeners(instance) {
    var reference = instance.reference;
    on(reference, "touchstart", onTrigger2, TOUCH_OPTIONS);
    on(reference, "mouseover", onTrigger2);
    on(reference, "focusin", onTrigger2);
    on(reference, "click", onTrigger2);
  }
  function removeEventListeners() {
    listeners.forEach(function (_ref) {
      var node = _ref.node,
        eventType = _ref.eventType,
        handler = _ref.handler,
        options = _ref.options;
      node.removeEventListener(eventType, handler, options);
    });
    listeners = [];
  }
  function applyMutations(instance) {
    var originalDestroy = instance.destroy;
    var originalEnable = instance.enable;
    var originalDisable = instance.disable;
    instance.destroy = function (shouldDestroyChildInstances) {
      if (shouldDestroyChildInstances === void 0) {
        shouldDestroyChildInstances = true;
      }
      if (shouldDestroyChildInstances) {
        childTippyInstances.forEach(function (instance2) {
          instance2.destroy();
        });
      }
      childTippyInstances = [];
      removeEventListeners();
      originalDestroy();
    };
    instance.enable = function () {
      originalEnable();
      childTippyInstances.forEach(function (instance2) {
        return instance2.enable();
      });
      disabled = false;
    };
    instance.disable = function () {
      originalDisable();
      childTippyInstances.forEach(function (instance2) {
        return instance2.disable();
      });
      disabled = true;
    };
    addEventListeners(instance);
  }
  normalizedReturnValue.forEach(applyMutations);
  return returnValue;
}
var animateFill = {
  name: "animateFill",
  defaultValue: false,
  fn: function fn(instance) {
    var _instance$props$rende;
    if (!((_instance$props$rende = instance.props.render) != null && _instance$props$rende.$$tippy)) {
      if (true) {
        errorWhen(instance.props.animateFill, "The `animateFill` plugin requires the default render function.");
      }
      return {};
    }
    var _getChildren = getChildren(instance.popper),
      box = _getChildren.box,
      content = _getChildren.content;
    var backdrop = instance.props.animateFill ? createBackdropElement() : null;
    return {
      onCreate: function onCreate2() {
        if (backdrop) {
          box.insertBefore(backdrop, box.firstElementChild);
          box.setAttribute("data-animatefill", "");
          box.style.overflow = "hidden";
          instance.setProps({
            arrow: false,
            animation: "shift-away"
          });
        }
      },
      onMount: function onMount2() {
        if (backdrop) {
          var transitionDuration = box.style.transitionDuration;
          var duration = Number(transitionDuration.replace("ms", ""));
          content.style.transitionDelay = Math.round(duration / 10) + "ms";
          backdrop.style.transitionDuration = transitionDuration;
          setVisibilityState([backdrop], "visible");
        }
      },
      onShow: function onShow2() {
        if (backdrop) {
          backdrop.style.transitionDuration = "0ms";
        }
      },
      onHide: function onHide2() {
        if (backdrop) {
          setVisibilityState([backdrop], "hidden");
        }
      }
    };
  }
};
function createBackdropElement() {
  var backdrop = div();
  backdrop.className = BACKDROP_CLASS;
  setVisibilityState([backdrop], "hidden");
  return backdrop;
}
var mouseCoords = {
  clientX: 0,
  clientY: 0
};
var activeInstances = [];
function storeMouseCoords(_ref) {
  var clientX = _ref.clientX,
    clientY = _ref.clientY;
  mouseCoords = {
    clientX,
    clientY
  };
}
function addMouseCoordsListener(doc) {
  doc.addEventListener("mousemove", storeMouseCoords);
}
function removeMouseCoordsListener(doc) {
  doc.removeEventListener("mousemove", storeMouseCoords);
}
var followCursor = {
  name: "followCursor",
  defaultValue: false,
  fn: function fn2(instance) {
    var reference = instance.reference;
    var doc = getOwnerDocument(instance.props.triggerTarget || reference);
    var isInternalUpdate = false;
    var wasFocusEvent = false;
    var isUnmounted = true;
    var prevProps = instance.props;
    function getIsInitialBehavior() {
      return instance.props.followCursor === "initial" && instance.state.isVisible;
    }
    function addListener() {
      doc.addEventListener("mousemove", onMouseMove);
    }
    function removeListener() {
      doc.removeEventListener("mousemove", onMouseMove);
    }
    function unsetGetReferenceClientRect() {
      isInternalUpdate = true;
      instance.setProps({
        getReferenceClientRect: null
      });
      isInternalUpdate = false;
    }
    function onMouseMove(event) {
      var isCursorOverReference = event.target ? reference.contains(event.target) : true;
      var followCursor2 = instance.props.followCursor;
      var clientX = event.clientX,
        clientY = event.clientY;
      var rect = reference.getBoundingClientRect();
      var relativeX = clientX - rect.left;
      var relativeY = clientY - rect.top;
      if (isCursorOverReference || !instance.props.interactive) {
        instance.setProps({
          getReferenceClientRect: function getReferenceClientRect() {
            var rect2 = reference.getBoundingClientRect();
            var x = clientX;
            var y = clientY;
            if (followCursor2 === "initial") {
              x = rect2.left + relativeX;
              y = rect2.top + relativeY;
            }
            var top = followCursor2 === "horizontal" ? rect2.top : y;
            var right = followCursor2 === "vertical" ? rect2.right : x;
            var bottom = followCursor2 === "horizontal" ? rect2.bottom : y;
            var left = followCursor2 === "vertical" ? rect2.left : x;
            return {
              width: right - left,
              height: bottom - top,
              top,
              right,
              bottom,
              left
            };
          }
        });
      }
    }
    function create() {
      if (instance.props.followCursor) {
        activeInstances.push({
          instance,
          doc
        });
        addMouseCoordsListener(doc);
      }
    }
    function destroy() {
      activeInstances = activeInstances.filter(function (data) {
        return data.instance !== instance;
      });
      if (activeInstances.filter(function (data) {
        return data.doc === doc;
      }).length === 0) {
        removeMouseCoordsListener(doc);
      }
    }
    return {
      onCreate: create,
      onDestroy: destroy,
      onBeforeUpdate: function onBeforeUpdate2() {
        prevProps = instance.props;
      },
      onAfterUpdate: function onAfterUpdate2(_, _ref2) {
        var followCursor2 = _ref2.followCursor;
        if (isInternalUpdate) {
          return;
        }
        if (followCursor2 !== void 0 && prevProps.followCursor !== followCursor2) {
          destroy();
          if (followCursor2) {
            create();
            if (instance.state.isMounted && !wasFocusEvent && !getIsInitialBehavior()) {
              addListener();
            }
          } else {
            removeListener();
            unsetGetReferenceClientRect();
          }
        }
      },
      onMount: function onMount2() {
        if (instance.props.followCursor && !wasFocusEvent) {
          if (isUnmounted) {
            onMouseMove(mouseCoords);
            isUnmounted = false;
          }
          if (!getIsInitialBehavior()) {
            addListener();
          }
        }
      },
      onTrigger: function onTrigger2(_, event) {
        if (isMouseEvent(event)) {
          mouseCoords = {
            clientX: event.clientX,
            clientY: event.clientY
          };
        }
        wasFocusEvent = event.type === "focus";
      },
      onHidden: function onHidden2() {
        if (instance.props.followCursor) {
          unsetGetReferenceClientRect();
          removeListener();
          isUnmounted = true;
        }
      }
    };
  }
};
function getProps(props, modifier) {
  var _props$popperOptions;
  return {
    popperOptions: Object.assign({}, props.popperOptions, {
      modifiers: [].concat((((_props$popperOptions = props.popperOptions) == null ? void 0 : _props$popperOptions.modifiers) || []).filter(function (_ref) {
        var name = _ref.name;
        return name !== modifier.name;
      }), [modifier])
    })
  };
}
var inlinePositioning = {
  name: "inlinePositioning",
  defaultValue: false,
  fn: function fn3(instance) {
    var reference = instance.reference;
    function isEnabled() {
      return !!instance.props.inlinePositioning;
    }
    var placement;
    var cursorRectIndex = -1;
    var isInternalUpdate = false;
    var triedPlacements = [];
    var modifier = {
      name: "tippyInlinePositioning",
      enabled: true,
      phase: "afterWrite",
      fn: function fn5(_ref2) {
        var state = _ref2.state;
        if (isEnabled()) {
          if (triedPlacements.indexOf(state.placement) !== -1) {
            triedPlacements = [];
          }
          if (placement !== state.placement && triedPlacements.indexOf(state.placement) === -1) {
            triedPlacements.push(state.placement);
            instance.setProps({
              getReferenceClientRect: function getReferenceClientRect() {
                return _getReferenceClientRect(state.placement);
              }
            });
          }
          placement = state.placement;
        }
      }
    };
    function _getReferenceClientRect(placement2) {
      return getInlineBoundingClientRect(getBasePlacement(placement2), reference.getBoundingClientRect(), arrayFrom(reference.getClientRects()), cursorRectIndex);
    }
    function setInternalProps(partialProps) {
      isInternalUpdate = true;
      instance.setProps(partialProps);
      isInternalUpdate = false;
    }
    function addModifier() {
      if (!isInternalUpdate) {
        setInternalProps(getProps(instance.props, modifier));
      }
    }
    return {
      onCreate: addModifier,
      onAfterUpdate: addModifier,
      onTrigger: function onTrigger2(_, event) {
        if (isMouseEvent(event)) {
          var rects = arrayFrom(instance.reference.getClientRects());
          var cursorRect = rects.find(function (rect) {
            return rect.left - 2 <= event.clientX && rect.right + 2 >= event.clientX && rect.top - 2 <= event.clientY && rect.bottom + 2 >= event.clientY;
          });
          var index = rects.indexOf(cursorRect);
          cursorRectIndex = index > -1 ? index : cursorRectIndex;
        }
      },
      onHidden: function onHidden2() {
        cursorRectIndex = -1;
      }
    };
  }
};
function getInlineBoundingClientRect(currentBasePlacement, boundingRect, clientRects, cursorRectIndex) {
  if (clientRects.length < 2 || currentBasePlacement === null) {
    return boundingRect;
  }
  if (clientRects.length === 2 && cursorRectIndex >= 0 && clientRects[0].left > clientRects[1].right) {
    return clientRects[cursorRectIndex] || boundingRect;
  }
  switch (currentBasePlacement) {
    case "top":
    case "bottom":
      {
        var firstRect = clientRects[0];
        var lastRect = clientRects[clientRects.length - 1];
        var isTop = currentBasePlacement === "top";
        var top = firstRect.top;
        var bottom = lastRect.bottom;
        var left = isTop ? firstRect.left : lastRect.left;
        var right = isTop ? firstRect.right : lastRect.right;
        var width = right - left;
        var height = bottom - top;
        return {
          top,
          bottom,
          left,
          right,
          width,
          height
        };
      }
    case "left":
    case "right":
      {
        var minLeft = Math.min.apply(Math, clientRects.map(function (rects) {
          return rects.left;
        }));
        var maxRight = Math.max.apply(Math, clientRects.map(function (rects) {
          return rects.right;
        }));
        var measureRects = clientRects.filter(function (rect) {
          return currentBasePlacement === "left" ? rect.left === minLeft : rect.right === maxRight;
        });
        var _top = measureRects[0].top;
        var _bottom = measureRects[measureRects.length - 1].bottom;
        var _left = minLeft;
        var _right = maxRight;
        var _width = _right - _left;
        var _height = _bottom - _top;
        return {
          top: _top,
          bottom: _bottom,
          left: _left,
          right: _right,
          width: _width,
          height: _height
        };
      }
    default:
      {
        return boundingRect;
      }
  }
}
var sticky = {
  name: "sticky",
  defaultValue: false,
  fn: function fn4(instance) {
    var reference = instance.reference,
      popper = instance.popper;
    function getReference() {
      return instance.popperInstance ? instance.popperInstance.state.elements.reference : reference;
    }
    function shouldCheck(value) {
      return instance.props.sticky === true || instance.props.sticky === value;
    }
    var prevRefRect = null;
    var prevPopRect = null;
    function updatePosition() {
      var currentRefRect = shouldCheck("reference") ? getReference().getBoundingClientRect() : null;
      var currentPopRect = shouldCheck("popper") ? popper.getBoundingClientRect() : null;
      if (currentRefRect && areRectsDifferent(prevRefRect, currentRefRect) || currentPopRect && areRectsDifferent(prevPopRect, currentPopRect)) {
        if (instance.popperInstance) {
          instance.popperInstance.update();
        }
      }
      prevRefRect = currentRefRect;
      prevPopRect = currentPopRect;
      if (instance.state.isMounted) {
        requestAnimationFrame(updatePosition);
      }
    }
    return {
      onMount: function onMount2() {
        if (instance.props.sticky) {
          updatePosition();
        }
      }
    };
  }
};
function areRectsDifferent(rectA, rectB) {
  if (rectA && rectB) {
    return rectA.top !== rectB.top || rectA.right !== rectB.right || rectA.bottom !== rectB.bottom || rectA.left !== rectB.left;
  }
  return true;
}
tippy.setDefaultProps({
  render
});
var tippy_esm_default = tippy;

// .beyond/uimport/temp/tippy.js.6.3.7.js
var tippy_js_6_3_7_default = tippy_esm_default;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL3RpcHB5LmpzLjYuMy43LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3RpcHB5LmpzL3NyYy9jb25zdGFudHMudHMiLCIuLi9ub2RlX21vZHVsZXMvdGlwcHkuanMvc3JjL3V0aWxzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL3RpcHB5LmpzL3NyYy9kb20tdXRpbHMudHMiLCIuLi9ub2RlX21vZHVsZXMvdGlwcHkuanMvc3JjL2JpbmRHbG9iYWxFdmVudExpc3RlbmVycy50cyIsIi4uL25vZGVfbW9kdWxlcy90aXBweS5qcy9zcmMvYnJvd3Nlci50cyIsIi4uL25vZGVfbW9kdWxlcy90aXBweS5qcy9zcmMvdmFsaWRhdGlvbi50cyIsIi4uL25vZGVfbW9kdWxlcy90aXBweS5qcy9zcmMvcHJvcHMudHMiLCIuLi9ub2RlX21vZHVsZXMvdGlwcHkuanMvc3JjL3RlbXBsYXRlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL3RpcHB5LmpzL3NyYy9jcmVhdGVUaXBweS50cyIsIi4uL25vZGVfbW9kdWxlcy90aXBweS5qcy9zcmMvaW5kZXgudHMiLCIuLi9ub2RlX21vZHVsZXMvdGlwcHkuanMvc3JjL2FkZG9ucy9jcmVhdGVTaW5nbGV0b24udHMiLCIuLi9ub2RlX21vZHVsZXMvdGlwcHkuanMvc3JjL2FkZG9ucy9kZWxlZ2F0ZS50cyIsIi4uL25vZGVfbW9kdWxlcy90aXBweS5qcy9zcmMvcGx1Z2lucy9hbmltYXRlRmlsbC50cyIsIi4uL25vZGVfbW9kdWxlcy90aXBweS5qcy9zcmMvcGx1Z2lucy9mb2xsb3dDdXJzb3IudHMiLCIuLi9ub2RlX21vZHVsZXMvdGlwcHkuanMvc3JjL3BsdWdpbnMvaW5saW5lUG9zaXRpb25pbmcudHMiLCIuLi9ub2RlX21vZHVsZXMvdGlwcHkuanMvc3JjL3BsdWdpbnMvc3RpY2t5LnRzIiwiLi4vbm9kZV9tb2R1bGVzL3RpcHB5LmpzL2J1aWxkL2Jhc2UuanMiXSwibmFtZXMiOlsiX19leHBvcnQiLCJhbmltYXRlRmlsbCIsImNyZWF0ZVNpbmdsZXRvbiIsImRlZmF1bHQiLCJkZWxlZ2F0ZSIsImZvbGxvd0N1cnNvciIsImhpZGVBbGwiLCJpbmxpbmVQb3NpdGlvbmluZyIsInJvdW5kQXJyb3ciLCJzdGlja3kiLCJtb2R1bGUiLCJST1VORF9BUlJPVyIsIkJPWF9DTEFTUyIsIkNPTlRFTlRfQ0xBU1MiLCJCQUNLRFJPUF9DTEFTUyIsIkFSUk9XX0NMQVNTIiwiU1ZHX0FSUk9XX0NMQVNTIiwiVE9VQ0hfT1BUSU9OUyIsInBhc3NpdmUiLCJjYXB0dXJlIiwiVElQUFlfREVGQVVMVF9BUFBFTkRfVE8iLCJkb2N1bWVudCIsImJvZHkiLCJoYXNPd25Qcm9wZXJ0eSIsIm9iaiIsImtleSIsImNhbGwiLCJnZXRWYWx1ZUF0SW5kZXhPclJldHVybiIsInZhbHVlIiwiaW5kZXgiLCJkZWZhdWx0VmFsdWUiLCJBcnJheSIsImlzQXJyYXkiLCJ2IiwiaXNUeXBlIiwidHlwZSIsInN0ciIsInRvU3RyaW5nIiwiaW5kZXhPZiIsImludm9rZVdpdGhBcmdzT3JSZXR1cm4iLCJhcmdzIiwiYXBwbHkiLCJkZWJvdW5jZSIsImZuIiwibXMiLCJ0aW1lb3V0IiwiYXJnIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsInJlbW92ZVByb3BlcnRpZXMiLCJrZXlzIiwiY2xvbmUiLCJPYmplY3QiLCJmb3JFYWNoIiwic3BsaXRCeVNwYWNlcyIsInNwbGl0IiwiZmlsdGVyIiwiQm9vbGVhbiIsIm5vcm1hbGl6ZVRvQXJyYXkiLCJjb25jYXQiLCJwdXNoSWZVbmlxdWUiLCJhcnIiLCJwdXNoIiwidW5pcXVlIiwiaXRlbSIsImdldEJhc2VQbGFjZW1lbnQiLCJwbGFjZW1lbnQiLCJhcnJheUZyb20iLCJzbGljZSIsInJlbW92ZVVuZGVmaW5lZFByb3BzIiwicmVkdWNlIiwiYWNjIiwidW5kZWZpbmVkIiwiZGl2IiwiY3JlYXRlRWxlbWVudCIsImlzRWxlbWVudCIsInNvbWUiLCJpc05vZGVMaXN0IiwiaXNNb3VzZUV2ZW50IiwiaXNSZWZlcmVuY2VFbGVtZW50IiwiX3RpcHB5IiwicmVmZXJlbmNlIiwiZ2V0QXJyYXlPZkVsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsInNldFRyYW5zaXRpb25EdXJhdGlvbiIsImVscyIsImVsIiwic3R5bGUiLCJ0cmFuc2l0aW9uRHVyYXRpb24iLCJzZXRWaXNpYmlsaXR5U3RhdGUiLCJzdGF0ZSIsInNldEF0dHJpYnV0ZSIsImdldE93bmVyRG9jdW1lbnQiLCJlbGVtZW50T3JFbGVtZW50cyIsImVsZW1lbnQiLCJfbm9ybWFsaXplVG9BcnJheSIsIl9lbGVtZW50JG93bmVyRG9jdW1lbiIsIm93bmVyRG9jdW1lbnQiLCJpc0N1cnNvck91dHNpZGVJbnRlcmFjdGl2ZUJvcmRlciIsInBvcHBlclRyZWVEYXRhIiwiZXZlbnQiLCJjbGllbnRYIiwiY2xpZW50WSIsImV2ZXJ5IiwicG9wcGVyUmVjdCIsIl9yZWYiLCJwb3BwZXJTdGF0ZSIsInByb3BzIiwiaW50ZXJhY3RpdmVCb3JkZXIiLCJiYXNlUGxhY2VtZW50Iiwib2Zmc2V0RGF0YSIsIm1vZGlmaWVyc0RhdGEiLCJvZmZzZXQiLCJ0b3BEaXN0YW5jZSIsInRvcCIsInkiLCJib3R0b21EaXN0YW5jZSIsImJvdHRvbSIsImxlZnREaXN0YW5jZSIsImxlZnQiLCJ4IiwicmlnaHREaXN0YW5jZSIsInJpZ2h0IiwiZXhjZWVkc1RvcCIsImV4Y2VlZHNCb3R0b20iLCJleGNlZWRzTGVmdCIsImV4Y2VlZHNSaWdodCIsInVwZGF0ZVRyYW5zaXRpb25FbmRMaXN0ZW5lciIsImJveCIsImFjdGlvbiIsImxpc3RlbmVyIiwibWV0aG9kIiwiYWN0dWFsQ29udGFpbnMiLCJwYXJlbnQiLCJjaGlsZCIsInRhcmdldCIsImNvbnRhaW5zIiwiZ2V0Um9vdE5vZGUiLCJfdGFyZ2V0JGdldFJvb3ROb2RlIiwiaG9zdCIsImN1cnJlbnRJbnB1dCIsImlzVG91Y2giLCJsYXN0TW91c2VNb3ZlVGltZSIsIm9uRG9jdW1lbnRUb3VjaFN0YXJ0Iiwid2luZG93IiwicGVyZm9ybWFuY2UiLCJhZGRFdmVudExpc3RlbmVyIiwib25Eb2N1bWVudE1vdXNlTW92ZSIsIm5vdyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJvbldpbmRvd0JsdXIiLCJhY3RpdmVFbGVtZW50IiwiaW5zdGFuY2UiLCJibHVyIiwiaXNWaXNpYmxlIiwiYmluZEdsb2JhbEV2ZW50TGlzdGVuZXJzIiwiaXNCcm93c2VyIiwiaXNJRTExIiwibXNDcnlwdG8iLCJjcmVhdGVNZW1vcnlMZWFrV2FybmluZyIsInR4dCIsImpvaW4iLCJjbGVhbiIsInNwYWNlc0FuZFRhYnMiLCJsaW5lU3RhcnRXaXRoU3BhY2VzIiwicmVwbGFjZSIsInRyaW0iLCJnZXREZXZNZXNzYWdlIiwibWVzc2FnZSIsImdldEZvcm1hdHRlZE1lc3NhZ2UiLCJ2aXNpdGVkTWVzc2FnZXMiLCJyZXNldFZpc2l0ZWRNZXNzYWdlcyIsIlNldCIsIndhcm5XaGVuIiwiY29uZGl0aW9uIiwiaGFzIiwiYWRkIiwid2FybiIsImVycm9yV2hlbiIsImVycm9yIiwidmFsaWRhdGVUYXJnZXRzIiwidGFyZ2V0cyIsImRpZFBhc3NGYWxzeVZhbHVlIiwiZGlkUGFzc1BsYWluT2JqZWN0IiwicHJvdG90eXBlIiwiU3RyaW5nIiwicGx1Z2luUHJvcHMiLCJyZW5kZXJQcm9wcyIsImFsbG93SFRNTCIsImFuaW1hdGlvbiIsImFycm93IiwiY29udGVudCIsImluZXJ0aWEiLCJtYXhXaWR0aCIsInJvbGUiLCJ0aGVtZSIsInpJbmRleCIsImRlZmF1bHRQcm9wcyIsImFwcGVuZFRvIiwiYXJpYSIsImV4cGFuZGVkIiwiZGVsYXkiLCJkdXJhdGlvbiIsImdldFJlZmVyZW5jZUNsaWVudFJlY3QiLCJoaWRlT25DbGljayIsImlnbm9yZUF0dHJpYnV0ZXMiLCJpbnRlcmFjdGl2ZSIsImludGVyYWN0aXZlRGVib3VuY2UiLCJtb3ZlVHJhbnNpdGlvbiIsIm9uQWZ0ZXJVcGRhdGUiLCJvbkJlZm9yZVVwZGF0ZSIsIm9uQ3JlYXRlIiwib25EZXN0cm95Iiwib25IaWRkZW4iLCJvbkhpZGUiLCJvbk1vdW50Iiwib25TaG93Iiwib25TaG93biIsIm9uVHJpZ2dlciIsIm9uVW50cmlnZ2VyIiwib25DbGlja091dHNpZGUiLCJwbHVnaW5zIiwicG9wcGVyT3B0aW9ucyIsInJlbmRlciIsInNob3dPbkNyZWF0ZSIsInRvdWNoIiwidHJpZ2dlciIsInRyaWdnZXJUYXJnZXQiLCJkZWZhdWx0S2V5cyIsInNldERlZmF1bHRQcm9wcyIsInBhcnRpYWxQcm9wcyIsInZhbGlkYXRlUHJvcHMiLCJnZXRFeHRlbmRlZFBhc3NlZFByb3BzIiwicGFzc2VkUHJvcHMiLCJwbHVnaW4iLCJuYW1lIiwiX25hbWUiLCJnZXREYXRhQXR0cmlidXRlUHJvcHMiLCJwcm9wS2V5cyIsInZhbHVlQXNTdHJpbmciLCJnZXRBdHRyaWJ1dGUiLCJKU09OIiwicGFyc2UiLCJlIiwiZXZhbHVhdGVQcm9wcyIsIm91dCIsInByb3AiLCJub25QbHVnaW5Qcm9wcyIsImRpZFBhc3NVbmtub3duUHJvcCIsImxlbmd0aCIsImlubmVySFRNTCIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiaHRtbCIsImNyZWF0ZUFycm93RWxlbWVudCIsImNsYXNzTmFtZSIsImFwcGVuZENoaWxkIiwic2V0Q29udGVudCIsInRleHRDb250ZW50IiwiZ2V0Q2hpbGRyZW4iLCJwb3BwZXIiLCJmaXJzdEVsZW1lbnRDaGlsZCIsImJveENoaWxkcmVuIiwiY2hpbGRyZW4iLCJmaW5kIiwibm9kZSIsImNsYXNzTGlzdCIsImJhY2tkcm9wIiwib25VcGRhdGUiLCJwcmV2UHJvcHMiLCJuZXh0UHJvcHMiLCJfZ2V0Q2hpbGRyZW4iLCJyZW1vdmVBdHRyaWJ1dGUiLCJyZW1vdmVDaGlsZCIsIiQkdGlwcHkiLCJpZENvdW50ZXIiLCJtb3VzZU1vdmVMaXN0ZW5lcnMiLCJtb3VudGVkSW5zdGFuY2VzIiwiY3JlYXRlVGlwcHkiLCJzaG93VGltZW91dCIsImhpZGVUaW1lb3V0Iiwic2NoZWR1bGVIaWRlQW5pbWF0aW9uRnJhbWUiLCJpc1Zpc2libGVGcm9tQ2xpY2siLCJkaWRIaWRlRHVlVG9Eb2N1bWVudE1vdXNlRG93biIsImRpZFRvdWNoTW92ZSIsImlnbm9yZU9uRmlyc3RVcGRhdGUiLCJsYXN0VHJpZ2dlckV2ZW50IiwiY3VycmVudFRyYW5zaXRpb25FbmRMaXN0ZW5lciIsIm9uRmlyc3RVcGRhdGUiLCJsaXN0ZW5lcnMiLCJkZWJvdW5jZWRPbk1vdXNlTW92ZSIsIm9uTW91c2VNb3ZlIiwiY3VycmVudFRhcmdldCIsImlkIiwicG9wcGVySW5zdGFuY2UiLCJpc0VuYWJsZWQiLCJpc0Rlc3Ryb3llZCIsImlzTW91bnRlZCIsImlzU2hvd24iLCJjbGVhckRlbGF5VGltZW91dHMiLCJzZXRQcm9wcyIsInNob3ciLCJoaWRlIiwiaGlkZVdpdGhJbnRlcmFjdGl2aXR5IiwiZW5hYmxlIiwiZGlzYWJsZSIsInVubW91bnQiLCJkZXN0cm95IiwiX3Byb3BzJHJlbmRlciIsInBsdWdpbnNIb29rcyIsIm1hcCIsImhhc0FyaWFFeHBhbmRlZCIsImhhc0F0dHJpYnV0ZSIsImFkZExpc3RlbmVycyIsImhhbmRsZUFyaWFFeHBhbmRlZEF0dHJpYnV0ZSIsImhhbmRsZVN0eWxlcyIsImludm9rZUhvb2siLCJzY2hlZHVsZVNob3ciLCJnZXREb2N1bWVudCIsImdldE5vcm1hbGl6ZWRUb3VjaFNldHRpbmdzIiwiZ2V0SXNDdXN0b21Ub3VjaEJlaGF2aW9yIiwiZ2V0SXNEZWZhdWx0UmVuZGVyRm4iLCJfaW5zdGFuY2UkcHJvcHMkcmVuZGUiLCJnZXRDdXJyZW50VGFyZ2V0IiwicGFyZW50Tm9kZSIsImdldERlZmF1bHRUZW1wbGF0ZUNoaWxkcmVuIiwiZ2V0RGVsYXkiLCJpc1Nob3ciLCJmcm9tSGlkZSIsInBvaW50ZXJFdmVudHMiLCJob29rIiwic2hvdWxkSW52b2tlUHJvcHNIb29rIiwicGx1Z2luSG9va3MiLCJoYW5kbGVBcmlhQ29udGVudEF0dHJpYnV0ZSIsImF0dHIiLCJub2RlcyIsImN1cnJlbnRWYWx1ZSIsIm5leHRWYWx1ZSIsImNsZWFudXBJbnRlcmFjdGl2ZU1vdXNlTGlzdGVuZXJzIiwib25Eb2N1bWVudFByZXNzIiwiYWN0dWFsVGFyZ2V0IiwiY29tcG9zZWRQYXRoIiwicmVtb3ZlRG9jdW1lbnRQcmVzcyIsIm9uVG91Y2hNb3ZlIiwib25Ub3VjaFN0YXJ0IiwiYWRkRG9jdW1lbnRQcmVzcyIsImRvYyIsIm9uVHJhbnNpdGlvbmVkT3V0IiwiY2FsbGJhY2siLCJvblRyYW5zaXRpb25FbmQiLCJvblRyYW5zaXRpb25lZEluIiwib24iLCJldmVudFR5cGUiLCJoYW5kbGVyIiwib3B0aW9ucyIsIm9uTW91c2VMZWF2ZSIsIm9uQmx1ck9yRm9jdXNPdXQiLCJyZW1vdmVMaXN0ZW5lcnMiLCJzaG91bGRTY2hlZHVsZUNsaWNrSGlkZSIsImlzRXZlbnRMaXN0ZW5lclN0b3BwZWQiLCJ3YXNGb2N1c2VkIiwiX2xhc3RUcmlnZ2VyRXZlbnQiLCJzY2hlZHVsZUhpZGUiLCJpc0N1cnNvck92ZXJSZWZlcmVuY2VPclBvcHBlciIsImdldE5lc3RlZFBvcHBlclRyZWUiLCJfaW5zdGFuY2UkcG9wcGVySW5zdGEiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJzaG91bGRCYWlsIiwicmVsYXRlZFRhcmdldCIsImNyZWF0ZVBvcHBlckluc3RhbmNlIiwiZGVzdHJveVBvcHBlckluc3RhbmNlIiwiX2luc3RhbmNlJHByb3BzMiIsImNvbXB1dGVkUmVmZXJlbmNlIiwiY29udGV4dEVsZW1lbnQiLCJ0aXBweU1vZGlmaWVyIiwiZW5hYmxlZCIsInBoYXNlIiwicmVxdWlyZXMiLCJfcmVmMiIsIl9nZXREZWZhdWx0VGVtcGxhdGVDaCIsImF0dHJpYnV0ZXMiLCJtb2RpZmllcnMiLCJwYWRkaW5nIiwiYWRhcHRpdmUiLCJjcmVhdGVQb3BwZXIiLCJtb3VudCIsIm5leHRFbGVtZW50U2libGluZyIsInRvdWNoVmFsdWUiLCJfZ2V0Tm9ybWFsaXplZFRvdWNoU2UiLCJ0b3VjaERlbGF5IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJuZXN0ZWRQb3BwZXIiLCJmb3JjZVVwZGF0ZSIsImlzQWxyZWFkeVZpc2libGUiLCJpc0Rpc2FibGVkIiwiaXNUb3VjaEFuZFRvdWNoRGlzYWJsZWQiLCJ2aXNpYmlsaXR5IiwidHJhbnNpdGlvbiIsIl9nZXREZWZhdWx0VGVtcGxhdGVDaDIiLCJvZmZzZXRIZWlnaHQiLCJfZ2V0RGVmYXVsdFRlbXBsYXRlQ2gzIiwiaXNBbHJlYWR5SGlkZGVuIiwiX2dldERlZmF1bHRUZW1wbGF0ZUNoNCIsImkiLCJ0aXBweSIsIm9wdGlvbmFsUHJvcHMiLCJlbGVtZW50cyIsImlzU2luZ2xlQ29udGVudEVsZW1lbnQiLCJpc01vcmVUaGFuT25lUmVmZXJlbmNlRWxlbWVudCIsImluc3RhbmNlcyIsIl90ZW1wIiwiZXhjbHVkZWRSZWZlcmVuY2VPckluc3RhbmNlIiwiZXhjbHVkZSIsImlzRXhjbHVkZWQiLCJvcmlnaW5hbER1cmF0aW9uIiwiYXBwbHlTdHlsZXNNb2RpZmllciIsImFwcGx5U3R5bGVzIiwiZWZmZWN0IiwiaW5pdGlhbFN0eWxlcyIsInBvc2l0aW9uIiwic3RyYXRlZ3kiLCJtYXJnaW4iLCJhc3NpZ24iLCJzdHlsZXMiLCJ0aXBweUluc3RhbmNlcyIsImluZGl2aWR1YWxJbnN0YW5jZXMiLCJyZWZlcmVuY2VzIiwidHJpZ2dlclRhcmdldHMiLCJvdmVycmlkZXMiLCJpbnRlcmNlcHRTZXRQcm9wc0NsZWFudXBzIiwic2hvd25PbkNyZWF0ZSIsInNldFRyaWdnZXJUYXJnZXRzIiwic2V0UmVmZXJlbmNlcyIsImVuYWJsZUluc3RhbmNlcyIsImludGVyY2VwdFNldFByb3BzIiwic2luZ2xldG9uIiwib3JpZ2luYWxTZXRQcm9wcyIsInByZXBhcmVJbnN0YW5jZSIsIm92ZXJyaWRlUHJvcHMiLCJfcmVmZXJlbmNlcyRpbmRleCIsIl9vcHRpb25hbFByb3BzJHBvcHBlciIsIm9yaWdpbmFsU2hvdyIsInJlZiIsInNob3dOZXh0IiwiZmlyc3QiLCJzaG93UHJldmlvdXMiLCJsYXN0Iiwic2V0SW5zdGFuY2VzIiwibmV4dEluc3RhbmNlcyIsIkJVQkJMSU5HX0VWRU5UU19NQVAiLCJtb3VzZW92ZXIiLCJmb2N1c2luIiwiY2xpY2siLCJjaGlsZFRpcHB5SW5zdGFuY2VzIiwiZGlzYWJsZWQiLCJuYXRpdmVQcm9wcyIsInBhcmVudFByb3BzIiwiY2hpbGRQcm9wcyIsInJldHVyblZhbHVlIiwibm9ybWFsaXplZFJldHVyblZhbHVlIiwidGFyZ2V0Tm9kZSIsImNsb3Nlc3QiLCJhZGRFdmVudExpc3RlbmVycyIsInJlbW92ZUV2ZW50TGlzdGVuZXJzIiwiYXBwbHlNdXRhdGlvbnMiLCJvcmlnaW5hbERlc3Ryb3kiLCJvcmlnaW5hbEVuYWJsZSIsIm9yaWdpbmFsRGlzYWJsZSIsInNob3VsZERlc3Ryb3lDaGlsZEluc3RhbmNlcyIsImNyZWF0ZUJhY2tkcm9wRWxlbWVudCIsImluc2VydEJlZm9yZSIsIm92ZXJmbG93IiwiTnVtYmVyIiwidHJhbnNpdGlvbkRlbGF5IiwiTWF0aCIsInJvdW5kIiwibW91c2VDb29yZHMiLCJhY3RpdmVJbnN0YW5jZXMiLCJzdG9yZU1vdXNlQ29vcmRzIiwiYWRkTW91c2VDb29yZHNMaXN0ZW5lciIsInJlbW92ZU1vdXNlQ29vcmRzTGlzdGVuZXIiLCJpc0ludGVybmFsVXBkYXRlIiwid2FzRm9jdXNFdmVudCIsImlzVW5tb3VudGVkIiwiZ2V0SXNJbml0aWFsQmVoYXZpb3IiLCJhZGRMaXN0ZW5lciIsInJlbW92ZUxpc3RlbmVyIiwidW5zZXRHZXRSZWZlcmVuY2VDbGllbnRSZWN0IiwiaXNDdXJzb3JPdmVyUmVmZXJlbmNlIiwicmVjdCIsInJlbGF0aXZlWCIsInJlbGF0aXZlWSIsIndpZHRoIiwiaGVpZ2h0IiwiY3JlYXRlIiwiZGF0YSIsIl8iLCJnZXRQcm9wcyIsIm1vZGlmaWVyIiwiX3Byb3BzJHBvcHBlck9wdGlvbnMiLCJjdXJzb3JSZWN0SW5kZXgiLCJ0cmllZFBsYWNlbWVudHMiLCJnZXRJbmxpbmVCb3VuZGluZ0NsaWVudFJlY3QiLCJnZXRDbGllbnRSZWN0cyIsInNldEludGVybmFsUHJvcHMiLCJhZGRNb2RpZmllciIsInJlY3RzIiwiY3Vyc29yUmVjdCIsImN1cnJlbnRCYXNlUGxhY2VtZW50IiwiYm91bmRpbmdSZWN0IiwiY2xpZW50UmVjdHMiLCJmaXJzdFJlY3QiLCJsYXN0UmVjdCIsImlzVG9wIiwibWluTGVmdCIsIm1pbiIsIm1heFJpZ2h0IiwibWF4IiwibWVhc3VyZVJlY3RzIiwiZ2V0UmVmZXJlbmNlIiwic2hvdWxkQ2hlY2siLCJwcmV2UmVmUmVjdCIsInByZXZQb3BSZWN0IiwidXBkYXRlUG9zaXRpb24iLCJjdXJyZW50UmVmUmVjdCIsImN1cnJlbnRQb3BSZWN0IiwiYXJlUmVjdHNEaWZmZXJlbnQiLCJ1cGRhdGUiLCJyZWN0QSIsInJlY3RCIiwidGlwcHlfanNfNl8zXzdfZGVmYXVsdCIsInRpcHB5X2VzbV9kZWZhdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBQTtFQUFBQztFQUFBQztFQUFBQztFQUFBQztFQUFBQztFQUFBQztFQUFBQztFQUFBQztFQUFBQztBQUFBO0FBQUFDOzs7O0lDQWFDLGNBQ1g7QUFFSyxJQUFNQyxZQUFTO0FBQ2YsSUFBTUMsZ0JBQWE7QUFDbkIsSUFBTUMsaUJBQWM7QUFDcEIsSUFBTUMsY0FBVztBQUNqQixJQUFNQyxrQkFBZTtBQUVyQixJQUFNQyxnQkFBZ0I7RUFBQ0MsU0FBUztFQUFNQyxTQUFTO0FBQXpCO0FBRXRCLElBQU1DLDBCQUEwQixTQUExQkEsMkJBQTBCO0VBQUEsT0FBTUMsU0FBU0M7QUFBZjtBQ1RoQyxTQUFTQyxlQUNkQyxLQUNBQyxLQUNTO0VBQ1QsT0FBTyxHQUFHRixlQUFlRyxLQUFLRixLQUFLQyxHQUE1QjtBQUNSO0FBRU0sU0FBU0Usd0JBQ2RDLE9BQ0FDLE9BQ0FDLGNBQ0c7RUFDSCxJQUFJQyxNQUFNQyxRQUFRSixLQUFkLEdBQXNCO0lBQ3hCLElBQU1LLElBQUlMLE1BQU1DO0lBQ2hCLE9B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QUFPa1g7VUFBT0M7UUFBbEM7TUFDUjs7TUFDUTtRQUNQLE9BQU9nQjtNQUNSO0VBQUE7QUFFSjtBQzlLRCxJQUFNcGYsU0FBaUI7RUFDckJrTyxNQUFNO0VBQ043TSxjQUFjO0VBQ2RhLElBSHFCLGFBR2xCNkcsVUFBVTtJQUNYLElBQU92RSxZQUFxQnVFLFNBQXJCdkU7TUFBV2tMLFNBQVUzRyxTQUFWMkc7SUFFbEIsU0FBU29RLGVBQWtEO01BQ3pELE9BQU8vVyxTQUFTNkksaUJBQ1o3SSxTQUFTNkksZUFBZTNNLE1BQU00VCxTQUFTclUsWUFDdkNBO0lBQ0w7SUFFRCxTQUFTdWIsWUFBWTVlLE9BQXdDO01BQzNELE9BQU80SCxTQUFTN0MsTUFBTWxHLFdBQVcsUUFBUStJLFNBQVM3QyxNQUFNbEcsV0FBV21CO0lBQ3BFO0lBRUQsSUFBSTZlLGNBQWlDO0lBQ3JDLElBQUlDLGNBQWlDO0lBRXJDLFNBQVNDLGlCQUF1QjtNQUM5QixJQUFNQyxpQkFBaUJKLFlBQVksV0FBRCxJQUM5QkQsY0FBWSxDQUFHMUosdUJBQWYsR0FDQTtNQUNKLElBQU1nSyxpQkFBaUJMLFlBQVksUUFBRCxJQUM5QnJRLE9BQU8wRyx1QkFBUCxHQUNBO01BRUosSUFDRytKLGtCQUFrQkUsa0JBQWtCTCxhQUFhRyxjQUFkLEtBQ25DQyxrQkFBa0JDLGtCQUFrQkosYUFBYUcsY0FBZCxHQUNwQztRQUNBLElBQUlyWCxTQUFTNkksZ0JBQWdCO1VBQzNCN0ksU0FBUzZJLGVBQWUwTyxRQUF4QjtRQUNEO01BQ0Y7TUFFRE4sY0FBY0c7TUFDZEYsY0FBY0c7TUFFZCxJQUFJclgsU0FBUzlELE1BQU04TSxXQUFXO1FBQzVCNkYsc0JBQXNCc0ksY0FBRDtNQUN0QjtJQUNGO0lBRUQsT0FBTztNQUNMcFQsU0FESyxvQkFDVztRQUNkLElBQUkvRCxTQUFTN0MsTUFBTWxHLFFBQVE7VUFDekJrZ0IsZ0JBQWM7UUFDZjtNQUNGO0lBTEk7RUFPUjtBQW5Eb0I7QUF3RHZCLFNBQVNHLGtCQUNQRSxPQUNBQyxPQUNTO0VBQ1QsSUFBSUQsU0FBU0MsT0FBTztJQUNsQixPQUNFRCxNQUFNOVosUUFBUStaLE1BQU0vWixPQUNwQjhaLE1BQU10WixVQUFVdVosTUFBTXZaLFNBQ3RCc1osTUFBTTNaLFdBQVc0WixNQUFNNVosVUFDdkIyWixNQUFNelosU0FBUzBaLE1BQU0xWjtFQUV4QjtFQUVELE9BQU87QUFDUjtBQ3RFRDZSLE1BQU0vSyxnQkFBZ0I7RUFBQ047QUFBRCxDQUF0Qjs7OztBakJBQSxJQUFPbVQseUJBQVFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWlsZWFybi9hcHAvb3V0In0=