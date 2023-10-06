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

// .beyond/uimport/tippy.js.6.3.7.js
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

// .beyond/uimport/tippy.js.6.3.7.js
var tippy_js_6_3_7_default = tippy_esm_default;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90aXBweS5qcy42LjMuNy5qcyIsIi4uL25vZGVfbW9kdWxlcy90aXBweS5qcy9zcmMvY29uc3RhbnRzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL3RpcHB5LmpzL3NyYy91dGlscy50cyIsIi4uL25vZGVfbW9kdWxlcy90aXBweS5qcy9zcmMvZG9tLXV0aWxzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL3RpcHB5LmpzL3NyYy9iaW5kR2xvYmFsRXZlbnRMaXN0ZW5lcnMudHMiLCIuLi9ub2RlX21vZHVsZXMvdGlwcHkuanMvc3JjL2Jyb3dzZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvdGlwcHkuanMvc3JjL3ZhbGlkYXRpb24udHMiLCIuLi9ub2RlX21vZHVsZXMvdGlwcHkuanMvc3JjL3Byb3BzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL3RpcHB5LmpzL3NyYy90ZW1wbGF0ZS50cyIsIi4uL25vZGVfbW9kdWxlcy90aXBweS5qcy9zcmMvY3JlYXRlVGlwcHkudHMiLCIuLi9ub2RlX21vZHVsZXMvdGlwcHkuanMvc3JjL2luZGV4LnRzIiwiLi4vbm9kZV9tb2R1bGVzL3RpcHB5LmpzL3NyYy9hZGRvbnMvY3JlYXRlU2luZ2xldG9uLnRzIiwiLi4vbm9kZV9tb2R1bGVzL3RpcHB5LmpzL3NyYy9hZGRvbnMvZGVsZWdhdGUudHMiLCIuLi9ub2RlX21vZHVsZXMvdGlwcHkuanMvc3JjL3BsdWdpbnMvYW5pbWF0ZUZpbGwudHMiLCIuLi9ub2RlX21vZHVsZXMvdGlwcHkuanMvc3JjL3BsdWdpbnMvZm9sbG93Q3Vyc29yLnRzIiwiLi4vbm9kZV9tb2R1bGVzL3RpcHB5LmpzL3NyYy9wbHVnaW5zL2lubGluZVBvc2l0aW9uaW5nLnRzIiwiLi4vbm9kZV9tb2R1bGVzL3RpcHB5LmpzL3NyYy9wbHVnaW5zL3N0aWNreS50cyIsIi4uL25vZGVfbW9kdWxlcy90aXBweS5qcy9idWlsZC9iYXNlLmpzIl0sIm5hbWVzIjpbIl9fZXhwb3J0IiwiYW5pbWF0ZUZpbGwiLCJjcmVhdGVTaW5nbGV0b24iLCJkZWZhdWx0IiwiZGVsZWdhdGUiLCJmb2xsb3dDdXJzb3IiLCJoaWRlQWxsIiwiaW5saW5lUG9zaXRpb25pbmciLCJyb3VuZEFycm93Iiwic3RpY2t5IiwibW9kdWxlIiwiUk9VTkRfQVJST1ciLCJCT1hfQ0xBU1MiLCJDT05URU5UX0NMQVNTIiwiQkFDS0RST1BfQ0xBU1MiLCJBUlJPV19DTEFTUyIsIlNWR19BUlJPV19DTEFTUyIsIlRPVUNIX09QVElPTlMiLCJwYXNzaXZlIiwiY2FwdHVyZSIsIlRJUFBZX0RFRkFVTFRfQVBQRU5EX1RPIiwiZG9jdW1lbnQiLCJib2R5IiwiaGFzT3duUHJvcGVydHkiLCJvYmoiLCJrZXkiLCJjYWxsIiwiZ2V0VmFsdWVBdEluZGV4T3JSZXR1cm4iLCJ2YWx1ZSIsImluZGV4IiwiZGVmYXVsdFZhbHVlIiwiQXJyYXkiLCJpc0FycmF5IiwidiIsImlzVHlwZSIsInR5cGUiLCJzdHIiLCJ0b1N0cmluZyIsImluZGV4T2YiLCJpbnZva2VXaXRoQXJnc09yUmV0dXJuIiwiYXJncyIsImFwcGx5IiwiZGVib3VuY2UiLCJmbiIsIm1zIiwidGltZW91dCIsImFyZyIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJyZW1vdmVQcm9wZXJ0aWVzIiwia2V5cyIsImNsb25lIiwiT2JqZWN0IiwiZm9yRWFjaCIsInNwbGl0QnlTcGFjZXMiLCJzcGxpdCIsImZpbHRlciIsIkJvb2xlYW4iLCJub3JtYWxpemVUb0FycmF5IiwiY29uY2F0IiwicHVzaElmVW5pcXVlIiwiYXJyIiwicHVzaCIsInVuaXF1ZSIsIml0ZW0iLCJnZXRCYXNlUGxhY2VtZW50IiwicGxhY2VtZW50IiwiYXJyYXlGcm9tIiwic2xpY2UiLCJyZW1vdmVVbmRlZmluZWRQcm9wcyIsInJlZHVjZSIsImFjYyIsInVuZGVmaW5lZCIsImRpdiIsImNyZWF0ZUVsZW1lbnQiLCJpc0VsZW1lbnQiLCJzb21lIiwiaXNOb2RlTGlzdCIsImlzTW91c2VFdmVudCIsImlzUmVmZXJlbmNlRWxlbWVudCIsIl90aXBweSIsInJlZmVyZW5jZSIsImdldEFycmF5T2ZFbGVtZW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzZXRUcmFuc2l0aW9uRHVyYXRpb24iLCJlbHMiLCJlbCIsInN0eWxlIiwidHJhbnNpdGlvbkR1cmF0aW9uIiwic2V0VmlzaWJpbGl0eVN0YXRlIiwic3RhdGUiLCJzZXRBdHRyaWJ1dGUiLCJnZXRPd25lckRvY3VtZW50IiwiZWxlbWVudE9yRWxlbWVudHMiLCJlbGVtZW50IiwiX25vcm1hbGl6ZVRvQXJyYXkiLCJfZWxlbWVudCRvd25lckRvY3VtZW4iLCJvd25lckRvY3VtZW50IiwiaXNDdXJzb3JPdXRzaWRlSW50ZXJhY3RpdmVCb3JkZXIiLCJwb3BwZXJUcmVlRGF0YSIsImV2ZW50IiwiY2xpZW50WCIsImNsaWVudFkiLCJldmVyeSIsInBvcHBlclJlY3QiLCJfcmVmIiwicG9wcGVyU3RhdGUiLCJwcm9wcyIsImludGVyYWN0aXZlQm9yZGVyIiwiYmFzZVBsYWNlbWVudCIsIm9mZnNldERhdGEiLCJtb2RpZmllcnNEYXRhIiwib2Zmc2V0IiwidG9wRGlzdGFuY2UiLCJ0b3AiLCJ5IiwiYm90dG9tRGlzdGFuY2UiLCJib3R0b20iLCJsZWZ0RGlzdGFuY2UiLCJsZWZ0IiwieCIsInJpZ2h0RGlzdGFuY2UiLCJyaWdodCIsImV4Y2VlZHNUb3AiLCJleGNlZWRzQm90dG9tIiwiZXhjZWVkc0xlZnQiLCJleGNlZWRzUmlnaHQiLCJ1cGRhdGVUcmFuc2l0aW9uRW5kTGlzdGVuZXIiLCJib3giLCJhY3Rpb24iLCJsaXN0ZW5lciIsIm1ldGhvZCIsImFjdHVhbENvbnRhaW5zIiwicGFyZW50IiwiY2hpbGQiLCJ0YXJnZXQiLCJjb250YWlucyIsImdldFJvb3ROb2RlIiwiX3RhcmdldCRnZXRSb290Tm9kZSIsImhvc3QiLCJjdXJyZW50SW5wdXQiLCJpc1RvdWNoIiwibGFzdE1vdXNlTW92ZVRpbWUiLCJvbkRvY3VtZW50VG91Y2hTdGFydCIsIndpbmRvdyIsInBlcmZvcm1hbmNlIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9uRG9jdW1lbnRNb3VzZU1vdmUiLCJub3ciLCJyZW1vdmVFdmVudExpc3RlbmVyIiwib25XaW5kb3dCbHVyIiwiYWN0aXZlRWxlbWVudCIsImluc3RhbmNlIiwiYmx1ciIsImlzVmlzaWJsZSIsImJpbmRHbG9iYWxFdmVudExpc3RlbmVycyIsImlzQnJvd3NlciIsImlzSUUxMSIsIm1zQ3J5cHRvIiwiY3JlYXRlTWVtb3J5TGVha1dhcm5pbmciLCJ0eHQiLCJqb2luIiwiY2xlYW4iLCJzcGFjZXNBbmRUYWJzIiwibGluZVN0YXJ0V2l0aFNwYWNlcyIsInJlcGxhY2UiLCJ0cmltIiwiZ2V0RGV2TWVzc2FnZSIsIm1lc3NhZ2UiLCJnZXRGb3JtYXR0ZWRNZXNzYWdlIiwidmlzaXRlZE1lc3NhZ2VzIiwicmVzZXRWaXNpdGVkTWVzc2FnZXMiLCJTZXQiLCJ3YXJuV2hlbiIsImNvbmRpdGlvbiIsImhhcyIsImFkZCIsIndhcm4iLCJlcnJvcldoZW4iLCJlcnJvciIsInZhbGlkYXRlVGFyZ2V0cyIsInRhcmdldHMiLCJkaWRQYXNzRmFsc3lWYWx1ZSIsImRpZFBhc3NQbGFpbk9iamVjdCIsInByb3RvdHlwZSIsIlN0cmluZyIsInBsdWdpblByb3BzIiwicmVuZGVyUHJvcHMiLCJhbGxvd0hUTUwiLCJhbmltYXRpb24iLCJhcnJvdyIsImNvbnRlbnQiLCJpbmVydGlhIiwibWF4V2lkdGgiLCJyb2xlIiwidGhlbWUiLCJ6SW5kZXgiLCJkZWZhdWx0UHJvcHMiLCJhcHBlbmRUbyIsImFyaWEiLCJleHBhbmRlZCIsImRlbGF5IiwiZHVyYXRpb24iLCJnZXRSZWZlcmVuY2VDbGllbnRSZWN0IiwiaGlkZU9uQ2xpY2siLCJpZ25vcmVBdHRyaWJ1dGVzIiwiaW50ZXJhY3RpdmUiLCJpbnRlcmFjdGl2ZURlYm91bmNlIiwibW92ZVRyYW5zaXRpb24iLCJvbkFmdGVyVXBkYXRlIiwib25CZWZvcmVVcGRhdGUiLCJvbkNyZWF0ZSIsIm9uRGVzdHJveSIsIm9uSGlkZGVuIiwib25IaWRlIiwib25Nb3VudCIsIm9uU2hvdyIsIm9uU2hvd24iLCJvblRyaWdnZXIiLCJvblVudHJpZ2dlciIsIm9uQ2xpY2tPdXRzaWRlIiwicGx1Z2lucyIsInBvcHBlck9wdGlvbnMiLCJyZW5kZXIiLCJzaG93T25DcmVhdGUiLCJ0b3VjaCIsInRyaWdnZXIiLCJ0cmlnZ2VyVGFyZ2V0IiwiZGVmYXVsdEtleXMiLCJzZXREZWZhdWx0UHJvcHMiLCJwYXJ0aWFsUHJvcHMiLCJ2YWxpZGF0ZVByb3BzIiwiZ2V0RXh0ZW5kZWRQYXNzZWRQcm9wcyIsInBhc3NlZFByb3BzIiwicGx1Z2luIiwibmFtZSIsIl9uYW1lIiwiZ2V0RGF0YUF0dHJpYnV0ZVByb3BzIiwicHJvcEtleXMiLCJ2YWx1ZUFzU3RyaW5nIiwiZ2V0QXR0cmlidXRlIiwiSlNPTiIsInBhcnNlIiwiZSIsImV2YWx1YXRlUHJvcHMiLCJvdXQiLCJwcm9wIiwibm9uUGx1Z2luUHJvcHMiLCJkaWRQYXNzVW5rbm93blByb3AiLCJsZW5ndGgiLCJpbm5lckhUTUwiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsImh0bWwiLCJjcmVhdGVBcnJvd0VsZW1lbnQiLCJjbGFzc05hbWUiLCJhcHBlbmRDaGlsZCIsInNldENvbnRlbnQiLCJ0ZXh0Q29udGVudCIsImdldENoaWxkcmVuIiwicG9wcGVyIiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJib3hDaGlsZHJlbiIsImNoaWxkcmVuIiwiZmluZCIsIm5vZGUiLCJjbGFzc0xpc3QiLCJiYWNrZHJvcCIsIm9uVXBkYXRlIiwicHJldlByb3BzIiwibmV4dFByb3BzIiwiX2dldENoaWxkcmVuIiwicmVtb3ZlQXR0cmlidXRlIiwicmVtb3ZlQ2hpbGQiLCIkJHRpcHB5IiwiaWRDb3VudGVyIiwibW91c2VNb3ZlTGlzdGVuZXJzIiwibW91bnRlZEluc3RhbmNlcyIsImNyZWF0ZVRpcHB5Iiwic2hvd1RpbWVvdXQiLCJoaWRlVGltZW91dCIsInNjaGVkdWxlSGlkZUFuaW1hdGlvbkZyYW1lIiwiaXNWaXNpYmxlRnJvbUNsaWNrIiwiZGlkSGlkZUR1ZVRvRG9jdW1lbnRNb3VzZURvd24iLCJkaWRUb3VjaE1vdmUiLCJpZ25vcmVPbkZpcnN0VXBkYXRlIiwibGFzdFRyaWdnZXJFdmVudCIsImN1cnJlbnRUcmFuc2l0aW9uRW5kTGlzdGVuZXIiLCJvbkZpcnN0VXBkYXRlIiwibGlzdGVuZXJzIiwiZGVib3VuY2VkT25Nb3VzZU1vdmUiLCJvbk1vdXNlTW92ZSIsImN1cnJlbnRUYXJnZXQiLCJpZCIsInBvcHBlckluc3RhbmNlIiwiaXNFbmFibGVkIiwiaXNEZXN0cm95ZWQiLCJpc01vdW50ZWQiLCJpc1Nob3duIiwiY2xlYXJEZWxheVRpbWVvdXRzIiwic2V0UHJvcHMiLCJzaG93IiwiaGlkZSIsImhpZGVXaXRoSW50ZXJhY3Rpdml0eSIsImVuYWJsZSIsImRpc2FibGUiLCJ1bm1vdW50IiwiZGVzdHJveSIsIl9wcm9wcyRyZW5kZXIiLCJwbHVnaW5zSG9va3MiLCJtYXAiLCJoYXNBcmlhRXhwYW5kZWQiLCJoYXNBdHRyaWJ1dGUiLCJhZGRMaXN0ZW5lcnMiLCJoYW5kbGVBcmlhRXhwYW5kZWRBdHRyaWJ1dGUiLCJoYW5kbGVTdHlsZXMiLCJpbnZva2VIb29rIiwic2NoZWR1bGVTaG93IiwiZ2V0RG9jdW1lbnQiLCJnZXROb3JtYWxpemVkVG91Y2hTZXR0aW5ncyIsImdldElzQ3VzdG9tVG91Y2hCZWhhdmlvciIsImdldElzRGVmYXVsdFJlbmRlckZuIiwiX2luc3RhbmNlJHByb3BzJHJlbmRlIiwiZ2V0Q3VycmVudFRhcmdldCIsInBhcmVudE5vZGUiLCJnZXREZWZhdWx0VGVtcGxhdGVDaGlsZHJlbiIsImdldERlbGF5IiwiaXNTaG93IiwiZnJvbUhpZGUiLCJwb2ludGVyRXZlbnRzIiwiaG9vayIsInNob3VsZEludm9rZVByb3BzSG9vayIsInBsdWdpbkhvb2tzIiwiaGFuZGxlQXJpYUNvbnRlbnRBdHRyaWJ1dGUiLCJhdHRyIiwibm9kZXMiLCJjdXJyZW50VmFsdWUiLCJuZXh0VmFsdWUiLCJjbGVhbnVwSW50ZXJhY3RpdmVNb3VzZUxpc3RlbmVycyIsIm9uRG9jdW1lbnRQcmVzcyIsImFjdHVhbFRhcmdldCIsImNvbXBvc2VkUGF0aCIsInJlbW92ZURvY3VtZW50UHJlc3MiLCJvblRvdWNoTW92ZSIsIm9uVG91Y2hTdGFydCIsImFkZERvY3VtZW50UHJlc3MiLCJkb2MiLCJvblRyYW5zaXRpb25lZE91dCIsImNhbGxiYWNrIiwib25UcmFuc2l0aW9uRW5kIiwib25UcmFuc2l0aW9uZWRJbiIsIm9uIiwiZXZlbnRUeXBlIiwiaGFuZGxlciIsIm9wdGlvbnMiLCJvbk1vdXNlTGVhdmUiLCJvbkJsdXJPckZvY3VzT3V0IiwicmVtb3ZlTGlzdGVuZXJzIiwic2hvdWxkU2NoZWR1bGVDbGlja0hpZGUiLCJpc0V2ZW50TGlzdGVuZXJTdG9wcGVkIiwid2FzRm9jdXNlZCIsIl9sYXN0VHJpZ2dlckV2ZW50Iiwic2NoZWR1bGVIaWRlIiwiaXNDdXJzb3JPdmVyUmVmZXJlbmNlT3JQb3BwZXIiLCJnZXROZXN0ZWRQb3BwZXJUcmVlIiwiX2luc3RhbmNlJHBvcHBlckluc3RhIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwic2hvdWxkQmFpbCIsInJlbGF0ZWRUYXJnZXQiLCJjcmVhdGVQb3BwZXJJbnN0YW5jZSIsImRlc3Ryb3lQb3BwZXJJbnN0YW5jZSIsIl9pbnN0YW5jZSRwcm9wczIiLCJjb21wdXRlZFJlZmVyZW5jZSIsImNvbnRleHRFbGVtZW50IiwidGlwcHlNb2RpZmllciIsImVuYWJsZWQiLCJwaGFzZSIsInJlcXVpcmVzIiwiX3JlZjIiLCJfZ2V0RGVmYXVsdFRlbXBsYXRlQ2giLCJhdHRyaWJ1dGVzIiwibW9kaWZpZXJzIiwicGFkZGluZyIsImFkYXB0aXZlIiwiY3JlYXRlUG9wcGVyIiwibW91bnQiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJ0b3VjaFZhbHVlIiwiX2dldE5vcm1hbGl6ZWRUb3VjaFNlIiwidG91Y2hEZWxheSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwibmVzdGVkUG9wcGVyIiwiZm9yY2VVcGRhdGUiLCJpc0FscmVhZHlWaXNpYmxlIiwiaXNEaXNhYmxlZCIsImlzVG91Y2hBbmRUb3VjaERpc2FibGVkIiwidmlzaWJpbGl0eSIsInRyYW5zaXRpb24iLCJfZ2V0RGVmYXVsdFRlbXBsYXRlQ2gyIiwib2Zmc2V0SGVpZ2h0IiwiX2dldERlZmF1bHRUZW1wbGF0ZUNoMyIsImlzQWxyZWFkeUhpZGRlbiIsIl9nZXREZWZhdWx0VGVtcGxhdGVDaDQiLCJpIiwidGlwcHkiLCJvcHRpb25hbFByb3BzIiwiZWxlbWVudHMiLCJpc1NpbmdsZUNvbnRlbnRFbGVtZW50IiwiaXNNb3JlVGhhbk9uZVJlZmVyZW5jZUVsZW1lbnQiLCJpbnN0YW5jZXMiLCJfdGVtcCIsImV4Y2x1ZGVkUmVmZXJlbmNlT3JJbnN0YW5jZSIsImV4Y2x1ZGUiLCJpc0V4Y2x1ZGVkIiwib3JpZ2luYWxEdXJhdGlvbiIsImFwcGx5U3R5bGVzTW9kaWZpZXIiLCJhcHBseVN0eWxlcyIsImVmZmVjdCIsImluaXRpYWxTdHlsZXMiLCJwb3NpdGlvbiIsInN0cmF0ZWd5IiwibWFyZ2luIiwiYXNzaWduIiwic3R5bGVzIiwidGlwcHlJbnN0YW5jZXMiLCJpbmRpdmlkdWFsSW5zdGFuY2VzIiwicmVmZXJlbmNlcyIsInRyaWdnZXJUYXJnZXRzIiwib3ZlcnJpZGVzIiwiaW50ZXJjZXB0U2V0UHJvcHNDbGVhbnVwcyIsInNob3duT25DcmVhdGUiLCJzZXRUcmlnZ2VyVGFyZ2V0cyIsInNldFJlZmVyZW5jZXMiLCJlbmFibGVJbnN0YW5jZXMiLCJpbnRlcmNlcHRTZXRQcm9wcyIsInNpbmdsZXRvbiIsIm9yaWdpbmFsU2V0UHJvcHMiLCJwcmVwYXJlSW5zdGFuY2UiLCJvdmVycmlkZVByb3BzIiwiX3JlZmVyZW5jZXMkaW5kZXgiLCJfb3B0aW9uYWxQcm9wcyRwb3BwZXIiLCJvcmlnaW5hbFNob3ciLCJyZWYiLCJzaG93TmV4dCIsImZpcnN0Iiwic2hvd1ByZXZpb3VzIiwibGFzdCIsInNldEluc3RhbmNlcyIsIm5leHRJbnN0YW5jZXMiLCJCVUJCTElOR19FVkVOVFNfTUFQIiwibW91c2VvdmVyIiwiZm9jdXNpbiIsImNsaWNrIiwiY2hpbGRUaXBweUluc3RhbmNlcyIsImRpc2FibGVkIiwibmF0aXZlUHJvcHMiLCJwYXJlbnRQcm9wcyIsImNoaWxkUHJvcHMiLCJyZXR1cm5WYWx1ZSIsIm5vcm1hbGl6ZWRSZXR1cm5WYWx1ZSIsInRhcmdldE5vZGUiLCJjbG9zZXN0IiwiYWRkRXZlbnRMaXN0ZW5lcnMiLCJyZW1vdmVFdmVudExpc3RlbmVycyIsImFwcGx5TXV0YXRpb25zIiwib3JpZ2luYWxEZXN0cm95Iiwib3JpZ2luYWxFbmFibGUiLCJvcmlnaW5hbERpc2FibGUiLCJzaG91bGREZXN0cm95Q2hpbGRJbnN0YW5jZXMiLCJjcmVhdGVCYWNrZHJvcEVsZW1lbnQiLCJpbnNlcnRCZWZvcmUiLCJvdmVyZmxvdyIsIk51bWJlciIsInRyYW5zaXRpb25EZWxheSIsIk1hdGgiLCJyb3VuZCIsIm1vdXNlQ29vcmRzIiwiYWN0aXZlSW5zdGFuY2VzIiwic3RvcmVNb3VzZUNvb3JkcyIsImFkZE1vdXNlQ29vcmRzTGlzdGVuZXIiLCJyZW1vdmVNb3VzZUNvb3Jkc0xpc3RlbmVyIiwiaXNJbnRlcm5hbFVwZGF0ZSIsIndhc0ZvY3VzRXZlbnQiLCJpc1VubW91bnRlZCIsImdldElzSW5pdGlhbEJlaGF2aW9yIiwiYWRkTGlzdGVuZXIiLCJyZW1vdmVMaXN0ZW5lciIsInVuc2V0R2V0UmVmZXJlbmNlQ2xpZW50UmVjdCIsImlzQ3Vyc29yT3ZlclJlZmVyZW5jZSIsInJlY3QiLCJyZWxhdGl2ZVgiLCJyZWxhdGl2ZVkiLCJ3aWR0aCIsImhlaWdodCIsImNyZWF0ZSIsImRhdGEiLCJfIiwiZ2V0UHJvcHMiLCJtb2RpZmllciIsIl9wcm9wcyRwb3BwZXJPcHRpb25zIiwiY3Vyc29yUmVjdEluZGV4IiwidHJpZWRQbGFjZW1lbnRzIiwiZ2V0SW5saW5lQm91bmRpbmdDbGllbnRSZWN0IiwiZ2V0Q2xpZW50UmVjdHMiLCJzZXRJbnRlcm5hbFByb3BzIiwiYWRkTW9kaWZpZXIiLCJyZWN0cyIsImN1cnNvclJlY3QiLCJjdXJyZW50QmFzZVBsYWNlbWVudCIsImJvdW5kaW5nUmVjdCIsImNsaWVudFJlY3RzIiwiZmlyc3RSZWN0IiwibGFzdFJlY3QiLCJpc1RvcCIsIm1pbkxlZnQiLCJtaW4iLCJtYXhSaWdodCIsIm1heCIsIm1lYXN1cmVSZWN0cyIsImdldFJlZmVyZW5jZSIsInNob3VsZENoZWNrIiwicHJldlJlZlJlY3QiLCJwcmV2UG9wUmVjdCIsInVwZGF0ZVBvc2l0aW9uIiwiY3VycmVudFJlZlJlY3QiLCJjdXJyZW50UG9wUmVjdCIsImFyZVJlY3RzRGlmZmVyZW50IiwidXBkYXRlIiwicmVjdEEiLCJyZWN0QiIsInRpcHB5X2pzXzZfM183X2RlZmF1bHQiLCJ0aXBweV9lc21fZGVmYXVsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQUE7RUFBQUM7RUFBQUM7RUFBQUM7RUFBQUM7RUFBQUM7RUFBQUM7RUFBQUM7RUFBQUM7RUFBQUM7QUFBQTtBQUFBQzs7OztJQ0FhQyxjQUNYO0FBRUssSUFBTUMsWUFBUztBQUNmLElBQU1DLGdCQUFhO0FBQ25CLElBQU1DLGlCQUFjO0FBQ3BCLElBQU1DLGNBQVc7QUFDakIsSUFBTUMsa0JBQWU7QUFFckIsSUFBTUMsZ0JBQWdCO0VBQUNDLFNBQVM7RUFBTUMsU0FBUztBQUF6QjtBQUV0QixJQUFNQywwQkFBMEIsU0FBMUJBLDJCQUEwQjtFQUFBLE9BQU1DLFNBQVNDO0FBQWY7QUNUaEMsU0FBU0MsZUFDZEMsS0FDQUMsS0FDUztFQUNULE9BQU8sR0FBR0YsZUFBZUcsS0FBS0YsS0FBS0MsR0FBNUI7QUFDUjtBQUVNLFNBQVNFLHdCQUNkQyxPQUNBQyxPQUNBQyxjQUNHO0VBQ0gsSUFBSUMsTUFBTUMsUUFBUUosS0FBZCxHQUFzQjtJQUN4QixJQUFNSyxJQUFJTCxNQUFNQztJQUNoQixPQUFPSSxL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O1VBQU9DO1FBQWxDO01BQ1I7O01BQ1E7UUFDUCxPQUFPZ0I7TUFDUjtFQUFBO0FBRUo7QUM5S0QsSUFBTXBmLFNBQWlCO0VBQ3JCa08sTUFBTTtFQUNON00sY0FBYztFQUNkYSxJQUhxQixhQUdsQjZHLFVBQVU7SUFDWCxJQUFPdkUsWUFBcUJ1RSxTQUFyQnZFO01BQVdrTCxTQUFVM0csU0FBVjJHO0lBRWxCLFNBQVNvUSxlQUFrRDtNQUN6RCxPQUFPL1csU0FBUzZJLGlCQUNaN0ksU0FBUzZJLGVBQWUzTSxNQUFNNFQsU0FBU3JVLFlBQ3ZDQTtJQUNMO0lBRUQsU0FBU3ViLFlBQVk1ZSxPQUF3QztNQUMzRCxPQUFPNEgsU0FBUzdDLE1BQU1sRyxXQUFXLFFBQVErSSxTQUFTN0MsTUFBTWxHLFdBQVdtQjtJQUNwRTtJQUVELElBQUk2ZSxjQUFpQztJQUNyQyxJQUFJQyxjQUFpQztJQUVyQyxTQUFTQyxpQkFBdUI7TUFDOUIsSUFBTUMsaUJBQWlCSixZQUFZLFdBQUQsSUFDOUJELGNBQVksQ0FBRzFKLHVCQUFmLEdBQ0E7TUFDSixJQUFNZ0ssaUJBQWlCTCxZQUFZLFFBQUQsSUFDOUJyUSxPQUFPMEcsdUJBQVAsR0FDQTtNQUVKLElBQ0crSixrQkFBa0JFLGtCQUFrQkwsYUFBYUcsY0FBZCxLQUNuQ0Msa0JBQWtCQyxrQkFBa0JKLGFBQWFHLGNBQWQsR0FDcEM7UUFDQSxJQUFJclgsU0FBUzZJLGdCQUFnQjtVQUMzQjdJLFNBQVM2SSxlQUFlME8sUUFBeEI7UUFDRDtNQUNGO01BRUROLGNBQWNHO01BQ2RGLGNBQWNHO01BRWQsSUFBSXJYLFNBQVM5RCxNQUFNOE0sV0FBVztRQUM1QjZGLHNCQUFzQnNJLGNBQUQ7TUFDdEI7SUFDRjtJQUVELE9BQU87TUFDTHBULFNBREssb0JBQ1c7UUFDZCxJQUFJL0QsU0FBUzdDLE1BQU1sRyxRQUFRO1VBQ3pCa2dCLGdCQUFjO1FBQ2Y7TUFDRjtJQUxJO0VBT1I7QUFuRG9CO0FBd0R2QixTQUFTRyxrQkFDUEUsT0FDQUMsT0FDUztFQUNULElBQUlELFNBQVNDLE9BQU87SUFDbEIsT0FDRUQsTUFBTTlaLFFBQVErWixNQUFNL1osT0FDcEI4WixNQUFNdFosVUFBVXVaLE1BQU12WixTQUN0QnNaLE1BQU0zWixXQUFXNFosTUFBTTVaLFVBQ3ZCMlosTUFBTXpaLFNBQVMwWixNQUFNMVo7RUFFeEI7RUFFRCxPQUFPO0FBQ1I7QUN0RUQ2UixNQUFNL0ssZ0JBQWdCO0VBQUNOO0FBQUQsQ0FBdEI7Ozs7QWpCQUEsSUFBT21ULHlCQUFRQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpbGVhcm4vYXBwL291dCJ9