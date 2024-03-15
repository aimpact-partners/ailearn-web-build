System.register(["react@18.2.0"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["react","18.2.0"],["framer-motion","10.17.8"],["@emotion/memoize","0.7.4"],["@emotion/is-prop-valid","0.8.8"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('react@18.2.0', dep)],
execute: function() {
// Prevent esbuild from considering the context to be amd
const define = void 0;
const module = {};

const code = (module, require) => {
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = {
    exports: {}
  }).exports, mod), mod.exports;
};
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
  value: mod,
  enumerable: true
}) : target, mod));
var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);

// node_modules/@emotion/memoize/dist/memoize.browser.cjs.js
var require_memoize_browser_cjs = __commonJS({
  "node_modules/@emotion/memoize/dist/memoize.browser.cjs.js"(exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function memoize(fn) {
      var cache = {};
      return function (arg) {
        if (cache[arg] === void 0) cache[arg] = fn(arg);
        return cache[arg];
      };
    }
    exports.default = memoize;
  }
});

// node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.cjs.js
var require_is_prop_valid_browser_cjs = __commonJS({
  "node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.cjs.js"(exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _interopDefault(ex) {
      return ex && typeof ex === "object" && "default" in ex ? ex["default"] : ex;
    }
    var memoize = _interopDefault(require_memoize_browser_cjs());
    var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
    var index = memoize(function (prop) {
      return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111 && prop.charCodeAt(1) === 110 && prop.charCodeAt(2) < 91;
    });
    exports.default = index;
  }
});

// .beyond/uimport/framer-motion.10.17.8.js
var framer_motion_10_17_8_exports = {};
__export(framer_motion_10_17_8_exports, {
  AnimatePresence: () => AnimatePresence,
  AnimateSharedLayout: () => AnimateSharedLayout,
  DeprecatedLayoutGroupContext: () => DeprecatedLayoutGroupContext,
  DragControls: () => DragControls,
  FlatTree: () => FlatTree,
  LayoutGroup: () => LayoutGroup,
  LayoutGroupContext: () => LayoutGroupContext,
  LazyMotion: () => LazyMotion,
  MotionConfig: () => MotionConfig,
  MotionConfigContext: () => MotionConfigContext,
  MotionContext: () => MotionContext,
  MotionGlobalConfig: () => MotionGlobalConfig,
  MotionValue: () => MotionValue,
  PresenceContext: () => PresenceContext,
  Reorder: () => Reorder,
  SwitchLayoutGroupContext: () => SwitchLayoutGroupContext,
  VisualElement: () => VisualElement,
  addPointerEvent: () => addPointerEvent,
  addPointerInfo: () => addPointerInfo,
  addScaleCorrector: () => addScaleCorrector,
  animate: () => animate,
  animateValue: () => animateValue,
  animateVisualElement: () => animateVisualElement,
  animationControls: () => animationControls,
  animations: () => animations,
  anticipate: () => anticipate,
  backIn: () => backIn,
  backInOut: () => backInOut,
  backOut: () => backOut,
  buildTransform: () => buildTransform,
  calcLength: () => calcLength,
  cancelFrame: () => cancelFrame,
  cancelSync: () => cancelSync,
  checkTargetForNewValues: () => checkTargetForNewValues,
  circIn: () => circIn,
  circInOut: () => circInOut,
  circOut: () => circOut,
  clamp: () => clamp,
  color: () => color,
  complex: () => complex,
  createBox: () => createBox,
  createDomMotionComponent: () => createDomMotionComponent,
  createMotionComponent: () => createMotionComponent,
  createScopedAnimate: () => createScopedAnimate,
  cubicBezier: () => cubicBezier,
  delay: () => delay,
  disableInstantTransitions: () => disableInstantTransitions,
  distance: () => distance,
  distance2D: () => distance2D,
  domAnimation: () => domAnimation,
  domMax: () => domMax,
  easeIn: () => easeIn,
  easeInOut: () => easeInOut,
  easeOut: () => easeOut,
  filterProps: () => filterProps,
  frame: () => frame,
  frameData: () => frameData,
  inView: () => inView,
  interpolate: () => interpolate,
  invariant: () => invariant,
  isBrowser: () => isBrowser,
  isDragActive: () => isDragActive,
  isMotionComponent: () => isMotionComponent,
  isMotionValue: () => isMotionValue,
  isValidMotionProp: () => isValidMotionProp,
  m: () => m,
  makeUseVisualState: () => makeUseVisualState,
  mirrorEasing: () => mirrorEasing,
  mix: () => mix,
  motion: () => motion,
  motionValue: () => motionValue,
  optimizedAppearDataAttribute: () => optimizedAppearDataAttribute,
  pipe: () => pipe,
  progress: () => progress,
  px: () => px,
  resolveMotionValue: () => resolveMotionValue,
  reverseEasing: () => reverseEasing,
  scroll: () => scroll,
  scrollInfo: () => scrollInfo,
  spring: () => spring,
  stagger: () => stagger,
  startOptimizedAppearAnimation: () => startOptimizedAppearAnimation,
  steps: () => steps,
  sync: () => sync,
  transform: () => transform,
  unwrapMotionComponent: () => unwrapMotionComponent,
  useAnimate: () => useAnimate,
  useAnimation: () => useAnimation,
  useAnimationControls: () => useAnimationControls,
  useAnimationFrame: () => useAnimationFrame,
  useCycle: () => useCycle,
  useDeprecatedAnimatedState: () => useAnimatedState,
  useDeprecatedInvertedScale: () => useInvertedScale,
  useDomEvent: () => useDomEvent,
  useDragControls: () => useDragControls,
  useElementScroll: () => useElementScroll,
  useForceUpdate: () => useForceUpdate,
  useInView: () => useInView,
  useInstantLayoutTransition: () => useInstantLayoutTransition,
  useInstantTransition: () => useInstantTransition,
  useIsPresent: () => useIsPresent,
  useIsomorphicLayoutEffect: () => useIsomorphicLayoutEffect,
  useMotionTemplate: () => useMotionTemplate,
  useMotionValue: () => useMotionValue,
  useMotionValueEvent: () => useMotionValueEvent,
  usePresence: () => usePresence,
  useReducedMotion: () => useReducedMotion,
  useReducedMotionConfig: () => useReducedMotionConfig,
  useResetProjection: () => useResetProjection,
  useScroll: () => useScroll,
  useSpring: () => useSpring,
  useTime: () => useTime,
  useTransform: () => useTransform,
  useUnmountEffect: () => useUnmountEffect,
  useVelocity: () => useVelocity,
  useViewportScroll: () => useViewportScroll,
  useWillChange: () => useWillChange,
  visualElementStore: () => visualElementStore,
  warning: () => warning,
  wrap: () => wrap
});
module.exports = __toCommonJS(framer_motion_10_17_8_exports);

// node_modules/framer-motion/dist/es/context/MotionConfigContext.mjs
var import_react = require("react@18.2.0");
var MotionConfigContext = (0, import_react.createContext)({
  transformPagePoint: p => p,
  isStatic: false,
  reducedMotion: "never"
});

// node_modules/framer-motion/dist/es/context/MotionContext/index.mjs
var import_react2 = require("react@18.2.0");
var MotionContext = (0, import_react2.createContext)({});

// node_modules/framer-motion/dist/es/context/PresenceContext.mjs
var import_react3 = require("react@18.2.0");
var PresenceContext = (0, import_react3.createContext)(null);

// node_modules/framer-motion/dist/es/utils/is-browser.mjs
var isBrowser = typeof document !== "undefined";

// node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs
var import_react4 = require("react@18.2.0");
var useIsomorphicLayoutEffect = isBrowser ? import_react4.useLayoutEffect : import_react4.useEffect;

// node_modules/framer-motion/dist/es/context/LazyContext.mjs
var import_react5 = require("react@18.2.0");
var LazyContext = (0, import_react5.createContext)({
  strict: false
});

// node_modules/framer-motion/dist/es/render/dom/utils/camel-to-dash.mjs
var camelToDash = str => str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();

// node_modules/framer-motion/dist/es/animation/optimized-appear/data-id.mjs
var optimizedAppearDataId = "framerAppearId";
var optimizedAppearDataAttribute = "data-" + camelToDash(optimizedAppearDataId);

// node_modules/framer-motion/dist/es/motion/utils/use-visual-element.mjs
var import_react6 = require("react@18.2.0");
function useVisualElement(Component2, visualState, props, createVisualElement2) {
  const {
    visualElement: parent
  } = (0, import_react6.useContext)(MotionContext);
  const lazyContext = (0, import_react6.useContext)(LazyContext);
  const presenceContext = (0, import_react6.useContext)(PresenceContext);
  const reducedMotionConfig = (0, import_react6.useContext)(MotionConfigContext).reducedMotion;
  const visualElementRef = (0, import_react6.useRef)();
  createVisualElement2 = createVisualElement2 || lazyContext.renderer;
  if (!visualElementRef.current && createVisualElement2) {
    visualElementRef.current = createVisualElement2(Component2, {
      visualState,
      parent,
      props,
      presenceContext,
      blockInitialAnimation: presenceContext ? presenceContext.initial === false : false,
      reducedMotionConfig
    });
  }
  const visualElement = visualElementRef.current;
  (0, import_react6.useInsertionEffect)(() => {
    visualElement && visualElement.update(props, presenceContext);
  });
  const wantsHandoff = (0, import_react6.useRef)(Boolean(props[optimizedAppearDataAttribute] && !window.HandoffComplete));
  useIsomorphicLayoutEffect(() => {
    if (!visualElement) return;
    visualElement.render();
    if (wantsHandoff.current && visualElement.animationState) {
      visualElement.animationState.animateChanges();
    }
  });
  (0, import_react6.useEffect)(() => {
    if (!visualElement) return;
    visualElement.updateFeatures();
    if (!wantsHandoff.current && visualElement.animationState) {
      visualElement.animationState.animateChanges();
    }
    if (wantsHandoff.current) {
      wantsHandoff.current = false;
      window.HandoffComplete = true;
    }
  });
  return visualElement;
}

// node_modules/framer-motion/dist/es/utils/is-ref-object.mjs
function isRefObject(ref) {
  return ref && typeof ref === "object" && Object.prototype.hasOwnProperty.call(ref, "current");
}

// node_modules/framer-motion/dist/es/motion/utils/use-motion-ref.mjs
var import_react7 = require("react@18.2.0");
function useMotionRef(visualState, visualElement, externalRef) {
  return (0, import_react7.useCallback)(instance => {
    instance && visualState.mount && visualState.mount(instance);
    if (visualElement) {
      instance ? visualElement.mount(instance) : visualElement.unmount();
    }
    if (externalRef) {
      if (typeof externalRef === "function") {
        externalRef(instance);
      } else if (isRefObject(externalRef)) {
        externalRef.current = instance;
      }
    }
  }, [visualElement]);
}

// node_modules/framer-motion/dist/es/render/utils/is-variant-label.mjs
function isVariantLabel(v) {
  return typeof v === "string" || Array.isArray(v);
}

// node_modules/framer-motion/dist/es/animation/utils/is-animation-controls.mjs
function isAnimationControls(v) {
  return v !== null && typeof v === "object" && typeof v.start === "function";
}

// node_modules/framer-motion/dist/es/render/utils/variant-props.mjs
var variantPriorityOrder = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"];
var variantProps = ["initial", ...variantPriorityOrder];

// node_modules/framer-motion/dist/es/render/utils/is-controlling-variants.mjs
function isControllingVariants(props) {
  return isAnimationControls(props.animate) || variantProps.some(name => isVariantLabel(props[name]));
}
function isVariantNode(props) {
  return Boolean(isControllingVariants(props) || props.variants);
}

// node_modules/framer-motion/dist/es/context/MotionContext/utils.mjs
function getCurrentTreeVariants(props, context) {
  if (isControllingVariants(props)) {
    const {
      initial,
      animate: animate2
    } = props;
    return {
      initial: initial === false || isVariantLabel(initial) ? initial : void 0,
      animate: isVariantLabel(animate2) ? animate2 : void 0
    };
  }
  return props.inherit !== false ? context : {};
}

// node_modules/framer-motion/dist/es/context/MotionContext/create.mjs
var import_react8 = require("react@18.2.0");
function useCreateMotionContext(props) {
  const {
    initial,
    animate: animate2
  } = getCurrentTreeVariants(props, (0, import_react8.useContext)(MotionContext));
  return (0, import_react8.useMemo)(() => ({
    initial,
    animate: animate2
  }), [variantLabelsAsDependency(initial), variantLabelsAsDependency(animate2)]);
}
function variantLabelsAsDependency(prop) {
  return Array.isArray(prop) ? prop.join(" ") : prop;
}

// node_modules/framer-motion/dist/es/motion/features/definitions.mjs
var featureProps = {
  animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
  exit: ["exit"],
  drag: ["drag", "dragControls"],
  focus: ["whileFocus"],
  hover: ["whileHover", "onHoverStart", "onHoverEnd"],
  tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
  pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
  inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
  layout: ["layout", "layoutId"]
};
var featureDefinitions = {};
for (const key in featureProps) {
  featureDefinitions[key] = {
    isEnabled: props => featureProps[key].some(name => !!props[name])
  };
}

// node_modules/framer-motion/dist/es/motion/features/load-features.mjs
function loadFeatures(features) {
  for (const key in features) {
    featureDefinitions[key] = {
      ...featureDefinitions[key],
      ...features[key]
    };
  }
}

// node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs
var import_react9 = require("react@18.2.0");
var LayoutGroupContext = (0, import_react9.createContext)({});

// node_modules/framer-motion/dist/es/context/SwitchLayoutGroupContext.mjs
var import_react10 = require("react@18.2.0");
var SwitchLayoutGroupContext = (0, import_react10.createContext)({});

// node_modules/framer-motion/dist/es/motion/utils/symbol.mjs
var motionComponentSymbol = Symbol.for("motionComponentSymbol");

// node_modules/framer-motion/dist/es/motion/index.mjs
var React = __toESM(require("react@18.2.0"), 0);
var import_react11 = require("react@18.2.0");
function createMotionComponent({
  preloadedFeatures: preloadedFeatures2,
  createVisualElement: createVisualElement2,
  useRender,
  useVisualState: useVisualState2,
  Component: Component2
}) {
  preloadedFeatures2 && loadFeatures(preloadedFeatures2);
  function MotionComponent(props, externalRef) {
    let MeasureLayout2;
    const configAndProps = {
      ...(0, import_react11.useContext)(MotionConfigContext),
      ...props,
      layoutId: useLayoutId(props)
    };
    const {
      isStatic
    } = configAndProps;
    const context = useCreateMotionContext(props);
    const visualState = useVisualState2(props, isStatic);
    if (!isStatic && isBrowser) {
      context.visualElement = useVisualElement(Component2, visualState, configAndProps, createVisualElement2);
      const initialLayoutGroupConfig = (0, import_react11.useContext)(SwitchLayoutGroupContext);
      const isStrict = (0, import_react11.useContext)(LazyContext).strict;
      if (context.visualElement) {
        MeasureLayout2 = context.visualElement.loadFeatures(configAndProps, isStrict, preloadedFeatures2, initialLayoutGroupConfig);
      }
    }
    return React.createElement(MotionContext.Provider, {
      value: context
    }, MeasureLayout2 && context.visualElement ? React.createElement(MeasureLayout2, {
      visualElement: context.visualElement,
      ...configAndProps
    }) : null, useRender(Component2, props, useMotionRef(visualState, context.visualElement, externalRef), visualState, isStatic, context.visualElement));
  }
  const ForwardRefComponent = (0, import_react11.forwardRef)(MotionComponent);
  ForwardRefComponent[motionComponentSymbol] = Component2;
  return ForwardRefComponent;
}
function useLayoutId({
  layoutId
}) {
  const layoutGroupId = (0, import_react11.useContext)(LayoutGroupContext).id;
  return layoutGroupId && layoutId !== void 0 ? layoutGroupId + "-" + layoutId : layoutId;
}

// node_modules/framer-motion/dist/es/render/dom/motion-proxy.mjs
function createMotionProxy(createConfig) {
  function custom(Component2, customMotionComponentConfig = {}) {
    return createMotionComponent(createConfig(Component2, customMotionComponentConfig));
  }
  if (typeof Proxy === "undefined") {
    return custom;
  }
  const componentCache = /* @__PURE__ */new Map();
  return new Proxy(custom, {
    get: (_target, key) => {
      if (!componentCache.has(key)) {
        componentCache.set(key, custom(key));
      }
      return componentCache.get(key);
    }
  });
}

// node_modules/framer-motion/dist/es/render/svg/lowercase-elements.mjs
var lowercaseSVGElements = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

// node_modules/framer-motion/dist/es/render/dom/utils/is-svg-component.mjs
function isSVGComponent(Component2) {
  if (typeof Component2 !== "string" || Component2.includes("-")) {
    return false;
  } else if (lowercaseSVGElements.indexOf(Component2) > -1 || /[A-Z]/.test(Component2)) {
    return true;
  }
  return false;
}

// node_modules/framer-motion/dist/es/projection/styles/scale-correction.mjs
var scaleCorrectors = {};
function addScaleCorrector(correctors) {
  Object.assign(scaleCorrectors, correctors);
}

// node_modules/framer-motion/dist/es/render/html/utils/transform.mjs
var transformPropOrder = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"];
var transformProps = new Set(transformPropOrder);

// node_modules/framer-motion/dist/es/motion/utils/is-forced-motion-value.mjs
function isForcedMotionValue(key, {
  layout: layout2,
  layoutId
}) {
  return transformProps.has(key) || key.startsWith("origin") || (layout2 || layoutId !== void 0) && (!!scaleCorrectors[key] || key === "opacity");
}

// node_modules/framer-motion/dist/es/value/utils/is-motion-value.mjs
var isMotionValue = value => Boolean(value && value.getVelocity);

// node_modules/framer-motion/dist/es/render/html/utils/build-transform.mjs
var translateAlias = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
};
var numTransforms = transformPropOrder.length;
function buildTransform(transform2, {
  enableHardwareAcceleration = true,
  allowTransformNone = true
}, transformIsDefault, transformTemplate) {
  let transformString = "";
  for (let i = 0; i < numTransforms; i++) {
    const key = transformPropOrder[i];
    if (transform2[key] !== void 0) {
      const transformName = translateAlias[key] || key;
      transformString += `${transformName}(${transform2[key]}) `;
    }
  }
  if (enableHardwareAcceleration && !transform2.z) {
    transformString += "translateZ(0)";
  }
  transformString = transformString.trim();
  if (transformTemplate) {
    transformString = transformTemplate(transform2, transformIsDefault ? "" : transformString);
  } else if (allowTransformNone && transformIsDefault) {
    transformString = "none";
  }
  return transformString;
}

// node_modules/framer-motion/dist/es/render/dom/utils/is-css-variable.mjs
var checkStringStartsWith = token => key => typeof key === "string" && key.startsWith(token);
var isCSSVariableName = checkStringStartsWith("--");
var isCSSVariableToken = checkStringStartsWith("var(--");
var cssVariableRegex = /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g;

// node_modules/framer-motion/dist/es/render/dom/value-types/get-as-type.mjs
var getValueAsType = (value, type) => {
  return type && typeof value === "number" ? type.transform(value) : value;
};

// node_modules/framer-motion/dist/es/utils/clamp.mjs
var clamp = (min, max, v) => Math.min(Math.max(v, min), max);

// node_modules/framer-motion/dist/es/value/types/numbers/index.mjs
var number = {
  test: v => typeof v === "number",
  parse: parseFloat,
  transform: v => v
};
var alpha = {
  ...number,
  transform: v => clamp(0, 1, v)
};
var scale = {
  ...number,
  default: 1
};

// node_modules/framer-motion/dist/es/value/types/utils.mjs
var sanitize = v => Math.round(v * 1e5) / 1e5;
var floatRegex = /(-)?([\d]*\.?[\d])+/g;
var colorRegex = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi;
var singleColorRegex = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function isString(v) {
  return typeof v === "string";
}

// node_modules/framer-motion/dist/es/value/types/numbers/units.mjs
var createUnitType = unit => ({
  test: v => isString(v) && v.endsWith(unit) && v.split(" ").length === 1,
  parse: parseFloat,
  transform: v => `${v}${unit}`
});
var degrees = createUnitType("deg");
var percent = createUnitType("%");
var px = createUnitType("px");
var vh = createUnitType("vh");
var vw = createUnitType("vw");
var progressPercentage = {
  ...percent,
  parse: v => percent.parse(v) / 100,
  transform: v => percent.transform(v * 100)
};

// node_modules/framer-motion/dist/es/render/dom/value-types/type-int.mjs
var int = {
  ...number,
  transform: Math.round
};

// node_modules/framer-motion/dist/es/render/dom/value-types/number.mjs
var numberValueTypes = {
  borderWidth: px,
  borderTopWidth: px,
  borderRightWidth: px,
  borderBottomWidth: px,
  borderLeftWidth: px,
  borderRadius: px,
  radius: px,
  borderTopLeftRadius: px,
  borderTopRightRadius: px,
  borderBottomRightRadius: px,
  borderBottomLeftRadius: px,
  width: px,
  maxWidth: px,
  height: px,
  maxHeight: px,
  size: px,
  top: px,
  right: px,
  bottom: px,
  left: px,
  padding: px,
  paddingTop: px,
  paddingRight: px,
  paddingBottom: px,
  paddingLeft: px,
  margin: px,
  marginTop: px,
  marginRight: px,
  marginBottom: px,
  marginLeft: px,
  rotate: degrees,
  rotateX: degrees,
  rotateY: degrees,
  rotateZ: degrees,
  scale,
  scaleX: scale,
  scaleY: scale,
  scaleZ: scale,
  skew: degrees,
  skewX: degrees,
  skewY: degrees,
  distance: px,
  translateX: px,
  translateY: px,
  translateZ: px,
  x: px,
  y: px,
  z: px,
  perspective: px,
  transformPerspective: px,
  opacity: alpha,
  originX: progressPercentage,
  originY: progressPercentage,
  originZ: px,
  zIndex: int,
  fillOpacity: alpha,
  strokeOpacity: alpha,
  numOctaves: int
};

// node_modules/framer-motion/dist/es/render/html/utils/build-styles.mjs
function buildHTMLStyles(state, latestValues, options, transformTemplate) {
  const {
    style,
    vars,
    transform: transform2,
    transformOrigin
  } = state;
  let hasTransform2 = false;
  let hasTransformOrigin = false;
  let transformIsNone = true;
  for (const key in latestValues) {
    const value = latestValues[key];
    if (isCSSVariableName(key)) {
      vars[key] = value;
      continue;
    }
    const valueType = numberValueTypes[key];
    const valueAsType = getValueAsType(value, valueType);
    if (transformProps.has(key)) {
      hasTransform2 = true;
      transform2[key] = valueAsType;
      if (!transformIsNone) continue;
      if (value !== (valueType.default || 0)) transformIsNone = false;
    } else if (key.startsWith("origin")) {
      hasTransformOrigin = true;
      transformOrigin[key] = valueAsType;
    } else {
      style[key] = valueAsType;
    }
  }
  if (!latestValues.transform) {
    if (hasTransform2 || transformTemplate) {
      style.transform = buildTransform(state.transform, options, transformIsNone, transformTemplate);
    } else if (style.transform) {
      style.transform = "none";
    }
  }
  if (hasTransformOrigin) {
    const {
      originX = "50%",
      originY = "50%",
      originZ = 0
    } = transformOrigin;
    style.transformOrigin = `${originX} ${originY} ${originZ}`;
  }
}

// node_modules/framer-motion/dist/es/render/html/utils/create-render-state.mjs
var createHtmlRenderState = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});

// node_modules/framer-motion/dist/es/render/html/use-props.mjs
var import_react12 = require("react@18.2.0");
function copyRawValuesOnly(target, source, props) {
  for (const key in source) {
    if (!isMotionValue(source[key]) && !isForcedMotionValue(key, props)) {
      target[key] = source[key];
    }
  }
}
function useInitialMotionValues({
  transformTemplate
}, visualState, isStatic) {
  return (0, import_react12.useMemo)(() => {
    const state = createHtmlRenderState();
    buildHTMLStyles(state, visualState, {
      enableHardwareAcceleration: !isStatic
    }, transformTemplate);
    return Object.assign({}, state.vars, state.style);
  }, [visualState]);
}
function useStyle(props, visualState, isStatic) {
  const styleProp = props.style || {};
  const style = {};
  copyRawValuesOnly(style, styleProp, props);
  Object.assign(style, useInitialMotionValues(props, visualState, isStatic));
  return props.transformValues ? props.transformValues(style) : style;
}
function useHTMLProps(props, visualState, isStatic) {
  const htmlProps = {};
  const style = useStyle(props, visualState, isStatic);
  if (props.drag && props.dragListener !== false) {
    htmlProps.draggable = false;
    style.userSelect = style.WebkitUserSelect = style.WebkitTouchCallout = "none";
    style.touchAction = props.drag === true ? "none" : `pan-${props.drag === "x" ? "y" : "x"}`;
  }
  if (props.tabIndex === void 0 && (props.onTap || props.onTapStart || props.whileTap)) {
    htmlProps.tabIndex = 0;
  }
  htmlProps.style = style;
  return htmlProps;
}

// node_modules/framer-motion/dist/es/motion/utils/valid-prop.mjs
var validMotionProps = /* @__PURE__ */new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "transformValues", "custom", "inherit", "onLayoutAnimationStart", "onLayoutAnimationComplete", "onLayoutMeasure", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "ignoreStrict", "viewport"]);
function isValidMotionProp(key) {
  return key.startsWith("while") || key.startsWith("drag") && key !== "draggable" || key.startsWith("layout") || key.startsWith("onTap") || key.startsWith("onPan") || validMotionProps.has(key);
}

// node_modules/framer-motion/dist/es/render/dom/utils/filter-props.mjs
var shouldForward = key => !isValidMotionProp(key);
function loadExternalIsValidProp(isValidProp) {
  if (!isValidProp) return;
  shouldForward = key => key.startsWith("on") ? !isValidMotionProp(key) : isValidProp(key);
}
try {
  loadExternalIsValidProp(require_is_prop_valid_browser_cjs().default);
} catch (_a) {}
function filterProps(props, isDom, forwardMotionProps) {
  const filteredProps = {};
  for (const key in props) {
    if (key === "values" && typeof props.values === "object") continue;
    if (shouldForward(key) || forwardMotionProps === true && isValidMotionProp(key) || !isDom && !isValidMotionProp(key) || props["draggable"] && key.startsWith("onDrag")) {
      filteredProps[key] = props[key];
    }
  }
  return filteredProps;
}

// node_modules/framer-motion/dist/es/render/svg/utils/transform-origin.mjs
function calcOrigin(origin, offset, size) {
  return typeof origin === "string" ? origin : px.transform(offset + size * origin);
}
function calcSVGTransformOrigin(dimensions, originX, originY) {
  const pxOriginX = calcOrigin(originX, dimensions.x, dimensions.width);
  const pxOriginY = calcOrigin(originY, dimensions.y, dimensions.height);
  return `${pxOriginX} ${pxOriginY}`;
}

// node_modules/framer-motion/dist/es/render/svg/utils/path.mjs
var dashKeys = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
};
var camelKeys = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function buildSVGPath(attrs, length, spacing = 1, offset = 0, useDashCase = true) {
  attrs.pathLength = 1;
  const keys2 = useDashCase ? dashKeys : camelKeys;
  attrs[keys2.offset] = px.transform(-offset);
  const pathLength = px.transform(length);
  const pathSpacing = px.transform(spacing);
  attrs[keys2.array] = `${pathLength} ${pathSpacing}`;
}

// node_modules/framer-motion/dist/es/render/svg/utils/build-attrs.mjs
function buildSVGAttrs(state, {
  attrX,
  attrY,
  attrScale,
  originX,
  originY,
  pathLength,
  pathSpacing = 1,
  pathOffset = 0,
  ...latest
}, options, isSVGTag2, transformTemplate) {
  buildHTMLStyles(state, latest, options, transformTemplate);
  if (isSVGTag2) {
    if (state.style.viewBox) {
      state.attrs.viewBox = state.style.viewBox;
    }
    return;
  }
  state.attrs = state.style;
  state.style = {};
  const {
    attrs,
    style,
    dimensions
  } = state;
  if (attrs.transform) {
    if (dimensions) style.transform = attrs.transform;
    delete attrs.transform;
  }
  if (dimensions && (originX !== void 0 || originY !== void 0 || style.transform)) {
    style.transformOrigin = calcSVGTransformOrigin(dimensions, originX !== void 0 ? originX : 0.5, originY !== void 0 ? originY : 0.5);
  }
  if (attrX !== void 0) attrs.x = attrX;
  if (attrY !== void 0) attrs.y = attrY;
  if (attrScale !== void 0) attrs.scale = attrScale;
  if (pathLength !== void 0) {
    buildSVGPath(attrs, pathLength, pathSpacing, pathOffset, false);
  }
}

// node_modules/framer-motion/dist/es/render/svg/utils/create-render-state.mjs
var createSvgRenderState = () => ({
  ...createHtmlRenderState(),
  attrs: {}
});

// node_modules/framer-motion/dist/es/render/svg/utils/is-svg-tag.mjs
var isSVGTag = tag => typeof tag === "string" && tag.toLowerCase() === "svg";

// node_modules/framer-motion/dist/es/render/svg/use-props.mjs
var import_react13 = require("react@18.2.0");
function useSVGProps(props, visualState, _isStatic, Component2) {
  const visualProps = (0, import_react13.useMemo)(() => {
    const state = createSvgRenderState();
    buildSVGAttrs(state, visualState, {
      enableHardwareAcceleration: false
    }, isSVGTag(Component2), props.transformTemplate);
    return {
      ...state.attrs,
      style: {
        ...state.style
      }
    };
  }, [visualState]);
  if (props.style) {
    const rawStyles = {};
    copyRawValuesOnly(rawStyles, props.style, props);
    visualProps.style = {
      ...rawStyles,
      ...visualProps.style
    };
  }
  return visualProps;
}

// node_modules/framer-motion/dist/es/render/dom/use-render.mjs
var import_react14 = require("react@18.2.0");
function createUseRender(forwardMotionProps = false) {
  const useRender = (Component2, props, ref, {
    latestValues
  }, isStatic) => {
    const useVisualProps = isSVGComponent(Component2) ? useSVGProps : useHTMLProps;
    const visualProps = useVisualProps(props, latestValues, isStatic, Component2);
    const filteredProps = filterProps(props, typeof Component2 === "string", forwardMotionProps);
    const elementProps = {
      ...filteredProps,
      ...visualProps,
      ref
    };
    const {
      children
    } = props;
    const renderedChildren = (0, import_react14.useMemo)(() => isMotionValue(children) ? children.get() : children, [children]);
    return (0, import_react14.createElement)(Component2, {
      ...elementProps,
      children: renderedChildren
    });
  };
  return useRender;
}

// node_modules/framer-motion/dist/es/render/html/utils/render.mjs
function renderHTML(element, {
  style,
  vars
}, styleProp, projection) {
  Object.assign(element.style, style, projection && projection.getProjectionStyles(styleProp));
  for (const key in vars) {
    element.style.setProperty(key, vars[key]);
  }
}

// node_modules/framer-motion/dist/es/render/svg/utils/camel-case-attrs.mjs
var camelCaseAttributes = /* @__PURE__ */new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);

// node_modules/framer-motion/dist/es/render/svg/utils/render.mjs
function renderSVG(element, renderState, _styleProp, projection) {
  renderHTML(element, renderState, void 0, projection);
  for (const key in renderState.attrs) {
    element.setAttribute(!camelCaseAttributes.has(key) ? camelToDash(key) : key, renderState.attrs[key]);
  }
}

// node_modules/framer-motion/dist/es/render/html/utils/scrape-motion-values.mjs
function scrapeMotionValuesFromProps(props, prevProps) {
  const {
    style
  } = props;
  const newValues = {};
  for (const key in style) {
    if (isMotionValue(style[key]) || prevProps.style && isMotionValue(prevProps.style[key]) || isForcedMotionValue(key, props)) {
      newValues[key] = style[key];
    }
  }
  return newValues;
}

// node_modules/framer-motion/dist/es/render/svg/utils/scrape-motion-values.mjs
function scrapeMotionValuesFromProps2(props, prevProps) {
  const newValues = scrapeMotionValuesFromProps(props, prevProps);
  for (const key in props) {
    if (isMotionValue(props[key]) || isMotionValue(prevProps[key])) {
      const targetKey = transformPropOrder.indexOf(key) !== -1 ? "attr" + key.charAt(0).toUpperCase() + key.substring(1) : key;
      newValues[targetKey] = props[key];
    }
  }
  return newValues;
}

// node_modules/framer-motion/dist/es/render/utils/resolve-variants.mjs
function resolveVariantFromProps(props, definition, custom, currentValues = {}, currentVelocity = {}) {
  if (typeof definition === "function") {
    definition = definition(custom !== void 0 ? custom : props.custom, currentValues, currentVelocity);
  }
  if (typeof definition === "string") {
    definition = props.variants && props.variants[definition];
  }
  if (typeof definition === "function") {
    definition = definition(custom !== void 0 ? custom : props.custom, currentValues, currentVelocity);
  }
  return definition;
}

// node_modules/framer-motion/dist/es/utils/use-constant.mjs
var import_react15 = require("react@18.2.0");
function useConstant(init) {
  const ref = (0, import_react15.useRef)(null);
  if (ref.current === null) {
    ref.current = init();
  }
  return ref.current;
}

// node_modules/framer-motion/dist/es/animation/utils/is-keyframes-target.mjs
var isKeyframesTarget = v => {
  return Array.isArray(v);
};

// node_modules/framer-motion/dist/es/utils/resolve-value.mjs
var isCustomValue = v => {
  return Boolean(v && typeof v === "object" && v.mix && v.toValue);
};
var resolveFinalValueInKeyframes = v => {
  return isKeyframesTarget(v) ? v[v.length - 1] || 0 : v;
};

// node_modules/framer-motion/dist/es/value/utils/resolve-motion-value.mjs
function resolveMotionValue(value) {
  const unwrappedValue = isMotionValue(value) ? value.get() : value;
  return isCustomValue(unwrappedValue) ? unwrappedValue.toValue() : unwrappedValue;
}

// node_modules/framer-motion/dist/es/motion/utils/use-visual-state.mjs
var import_react16 = require("react@18.2.0");
function makeState({
  scrapeMotionValuesFromProps: scrapeMotionValuesFromProps3,
  createRenderState,
  onMount
}, props, context, presenceContext) {
  const state = {
    latestValues: makeLatestValues(props, context, presenceContext, scrapeMotionValuesFromProps3),
    renderState: createRenderState()
  };
  if (onMount) {
    state.mount = instance => onMount(props, instance, state);
  }
  return state;
}
var makeUseVisualState = config => (props, isStatic) => {
  const context = (0, import_react16.useContext)(MotionContext);
  const presenceContext = (0, import_react16.useContext)(PresenceContext);
  const make = () => makeState(config, props, context, presenceContext);
  return isStatic ? make() : useConstant(make);
};
function makeLatestValues(props, context, presenceContext, scrapeMotionValues) {
  const values = {};
  const motionValues = scrapeMotionValues(props, {});
  for (const key in motionValues) {
    values[key] = resolveMotionValue(motionValues[key]);
  }
  let {
    initial,
    animate: animate2
  } = props;
  const isControllingVariants$1 = isControllingVariants(props);
  const isVariantNode$1 = isVariantNode(props);
  if (context && isVariantNode$1 && !isControllingVariants$1 && props.inherit !== false) {
    if (initial === void 0) initial = context.initial;
    if (animate2 === void 0) animate2 = context.animate;
  }
  let isInitialAnimationBlocked = presenceContext ? presenceContext.initial === false : false;
  isInitialAnimationBlocked = isInitialAnimationBlocked || initial === false;
  const variantToSet = isInitialAnimationBlocked ? animate2 : initial;
  if (variantToSet && typeof variantToSet !== "boolean" && !isAnimationControls(variantToSet)) {
    const list = Array.isArray(variantToSet) ? variantToSet : [variantToSet];
    list.forEach(definition => {
      const resolved = resolveVariantFromProps(props, definition);
      if (!resolved) return;
      const {
        transitionEnd,
        transition,
        ...target
      } = resolved;
      for (const key in target) {
        let valueTarget = target[key];
        if (Array.isArray(valueTarget)) {
          const index = isInitialAnimationBlocked ? valueTarget.length - 1 : 0;
          valueTarget = valueTarget[index];
        }
        if (valueTarget !== null) {
          values[key] = valueTarget;
        }
      }
      for (const key in transitionEnd) values[key] = transitionEnd[key];
    });
  }
  return values;
}

// node_modules/framer-motion/dist/es/utils/noop.mjs
var noop = any => any;

// node_modules/framer-motion/dist/es/frameloop/render-step.mjs
var Queue = class {
  constructor() {
    this.order = [];
    this.scheduled = /* @__PURE__ */new Set();
  }
  add(process2) {
    if (!this.scheduled.has(process2)) {
      this.scheduled.add(process2);
      this.order.push(process2);
      return true;
    }
  }
  remove(process2) {
    const index = this.order.indexOf(process2);
    if (index !== -1) {
      this.order.splice(index, 1);
      this.scheduled.delete(process2);
    }
  }
  clear() {
    this.order.length = 0;
    this.scheduled.clear();
  }
};
function createRenderStep(runNextFrame) {
  let thisFrame = new Queue();
  let nextFrame = new Queue();
  let numToRun = 0;
  let isProcessing = false;
  let flushNextFrame = false;
  const toKeepAlive = /* @__PURE__ */new WeakSet();
  const step = {
    schedule: (callback, keepAlive = false, immediate = false) => {
      const addToCurrentFrame = immediate && isProcessing;
      const queue = addToCurrentFrame ? thisFrame : nextFrame;
      if (keepAlive) toKeepAlive.add(callback);
      if (queue.add(callback) && addToCurrentFrame && isProcessing) {
        numToRun = thisFrame.order.length;
      }
      return callback;
    },
    cancel: callback => {
      nextFrame.remove(callback);
      toKeepAlive.delete(callback);
    },
    process: frameData2 => {
      if (isProcessing) {
        flushNextFrame = true;
        return;
      }
      isProcessing = true;
      [thisFrame, nextFrame] = [nextFrame, thisFrame];
      nextFrame.clear();
      numToRun = thisFrame.order.length;
      if (numToRun) {
        for (let i = 0; i < numToRun; i++) {
          const callback = thisFrame.order[i];
          callback(frameData2);
          if (toKeepAlive.has(callback)) {
            step.schedule(callback);
            runNextFrame();
          }
        }
      }
      isProcessing = false;
      if (flushNextFrame) {
        flushNextFrame = false;
        step.process(frameData2);
      }
    }
  };
  return step;
}

// node_modules/framer-motion/dist/es/frameloop/batcher.mjs
var stepsOrder = ["prepare", "read", "update", "preRender", "render", "postRender"];
var maxElapsed = 40;
function createRenderBatcher(scheduleNextBatch, allowKeepAlive) {
  let runNextFrame = false;
  let useDefaultElapsed = true;
  const state = {
    delta: 0,
    timestamp: 0,
    isProcessing: false
  };
  const steps2 = stepsOrder.reduce((acc, key) => {
    acc[key] = createRenderStep(() => runNextFrame = true);
    return acc;
  }, {});
  const processStep = stepId => steps2[stepId].process(state);
  const processBatch = () => {
    const timestamp = performance.now();
    runNextFrame = false;
    state.delta = useDefaultElapsed ? 1e3 / 60 : Math.max(Math.min(timestamp - state.timestamp, maxElapsed), 1);
    state.timestamp = timestamp;
    state.isProcessing = true;
    stepsOrder.forEach(processStep);
    state.isProcessing = false;
    if (runNextFrame && allowKeepAlive) {
      useDefaultElapsed = false;
      scheduleNextBatch(processBatch);
    }
  };
  const wake = () => {
    runNextFrame = true;
    useDefaultElapsed = true;
    if (!state.isProcessing) {
      scheduleNextBatch(processBatch);
    }
  };
  const schedule = stepsOrder.reduce((acc, key) => {
    const step = steps2[key];
    acc[key] = (process2, keepAlive = false, immediate = false) => {
      if (!runNextFrame) wake();
      return step.schedule(process2, keepAlive, immediate);
    };
    return acc;
  }, {});
  const cancel = process2 => stepsOrder.forEach(key => steps2[key].cancel(process2));
  return {
    schedule,
    cancel,
    state,
    steps: steps2
  };
}

// node_modules/framer-motion/dist/es/frameloop/frame.mjs
var {
  schedule: frame,
  cancel: cancelFrame,
  state: frameData,
  steps
} = createRenderBatcher(typeof requestAnimationFrame !== "undefined" ? requestAnimationFrame : noop, true);

// node_modules/framer-motion/dist/es/render/svg/config-motion.mjs
var svgMotionConfig = {
  useVisualState: makeUseVisualState({
    scrapeMotionValuesFromProps: scrapeMotionValuesFromProps2,
    createRenderState: createSvgRenderState,
    onMount: (props, instance, {
      renderState,
      latestValues
    }) => {
      frame.read(() => {
        try {
          renderState.dimensions = typeof instance.getBBox === "function" ? instance.getBBox() : instance.getBoundingClientRect();
        } catch (e) {
          renderState.dimensions = {
            x: 0,
            y: 0,
            width: 0,
            height: 0
          };
        }
      });
      frame.render(() => {
        buildSVGAttrs(renderState, latestValues, {
          enableHardwareAcceleration: false
        }, isSVGTag(instance.tagName), props.transformTemplate);
        renderSVG(instance, renderState);
      });
    }
  })
};

// node_modules/framer-motion/dist/es/render/html/config-motion.mjs
var htmlMotionConfig = {
  useVisualState: makeUseVisualState({
    scrapeMotionValuesFromProps,
    createRenderState: createHtmlRenderState
  })
};

// node_modules/framer-motion/dist/es/render/dom/utils/create-config.mjs
function createDomMotionConfig(Component2, {
  forwardMotionProps = false
}, preloadedFeatures2, createVisualElement2) {
  const baseConfig = isSVGComponent(Component2) ? svgMotionConfig : htmlMotionConfig;
  return {
    ...baseConfig,
    preloadedFeatures: preloadedFeatures2,
    useRender: createUseRender(forwardMotionProps),
    createVisualElement: createVisualElement2,
    Component: Component2
  };
}

// node_modules/framer-motion/dist/es/events/add-dom-event.mjs
function addDomEvent(target, eventName, handler, options = {
  passive: true
}) {
  target.addEventListener(eventName, handler, options);
  return () => target.removeEventListener(eventName, handler);
}

// node_modules/framer-motion/dist/es/events/utils/is-primary-pointer.mjs
var isPrimaryPointer = event => {
  if (event.pointerType === "mouse") {
    return typeof event.button !== "number" || event.button <= 0;
  } else {
    return event.isPrimary !== false;
  }
};

// node_modules/framer-motion/dist/es/events/event-info.mjs
function extractEventInfo(event, pointType = "page") {
  return {
    point: {
      x: event[pointType + "X"],
      y: event[pointType + "Y"]
    }
  };
}
var addPointerInfo = handler => {
  return event => isPrimaryPointer(event) && handler(event, extractEventInfo(event));
};

// node_modules/framer-motion/dist/es/events/add-pointer-event.mjs
function addPointerEvent(target, eventName, handler, options) {
  return addDomEvent(target, eventName, addPointerInfo(handler), options);
}

// node_modules/framer-motion/dist/es/utils/pipe.mjs
var combineFunctions = (a, b) => v => b(a(v));
var pipe = (...transformers) => transformers.reduce(combineFunctions);

// node_modules/framer-motion/dist/es/gestures/drag/utils/lock.mjs
function createLock(name) {
  let lock = null;
  return () => {
    const openLock = () => {
      lock = null;
    };
    if (lock === null) {
      lock = name;
      return openLock;
    }
    return false;
  };
}
var globalHorizontalLock = createLock("dragHorizontal");
var globalVerticalLock = createLock("dragVertical");
function getGlobalLock(drag2) {
  let lock = false;
  if (drag2 === "y") {
    lock = globalVerticalLock();
  } else if (drag2 === "x") {
    lock = globalHorizontalLock();
  } else {
    const openHorizontal = globalHorizontalLock();
    const openVertical = globalVerticalLock();
    if (openHorizontal && openVertical) {
      lock = () => {
        openHorizontal();
        openVertical();
      };
    } else {
      if (openHorizontal) openHorizontal();
      if (openVertical) openVertical();
    }
  }
  return lock;
}
function isDragActive() {
  const openGestureLock = getGlobalLock(true);
  if (!openGestureLock) return true;
  openGestureLock();
  return false;
}

// node_modules/framer-motion/dist/es/motion/features/Feature.mjs
var Feature = class {
  constructor(node) {
    this.isMounted = false;
    this.node = node;
  }
  update() {}
};

// node_modules/framer-motion/dist/es/gestures/hover.mjs
function addHoverEvent(node, isActive) {
  const eventName = "pointer" + (isActive ? "enter" : "leave");
  const callbackName = "onHover" + (isActive ? "Start" : "End");
  const handleEvent = (event, info) => {
    if (event.pointerType === "touch" || isDragActive()) return;
    const props = node.getProps();
    if (node.animationState && props.whileHover) {
      node.animationState.setActive("whileHover", isActive);
    }
    if (props[callbackName]) {
      frame.update(() => props[callbackName](event, info));
    }
  };
  return addPointerEvent(node.current, eventName, handleEvent, {
    passive: !node.getProps()[callbackName]
  });
}
var HoverGesture = class extends Feature {
  mount() {
    this.unmount = pipe(addHoverEvent(this.node, true), addHoverEvent(this.node, false));
  }
  unmount() {}
};

// node_modules/framer-motion/dist/es/gestures/focus.mjs
var FocusGesture = class extends Feature {
  constructor() {
    super(...arguments);
    this.isActive = false;
  }
  onFocus() {
    let isFocusVisible = false;
    try {
      isFocusVisible = this.node.current.matches(":focus-visible");
    } catch (e) {
      isFocusVisible = true;
    }
    if (!isFocusVisible || !this.node.animationState) return;
    this.node.animationState.setActive("whileFocus", true);
    this.isActive = true;
  }
  onBlur() {
    if (!this.isActive || !this.node.animationState) return;
    this.node.animationState.setActive("whileFocus", false);
    this.isActive = false;
  }
  mount() {
    this.unmount = pipe(addDomEvent(this.node.current, "focus", () => this.onFocus()), addDomEvent(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {}
};

// node_modules/framer-motion/dist/es/gestures/utils/is-node-or-child.mjs
var isNodeOrChild = (parent, child) => {
  if (!child) {
    return false;
  } else if (parent === child) {
    return true;
  } else {
    return isNodeOrChild(parent, child.parentElement);
  }
};

// node_modules/framer-motion/dist/es/gestures/press.mjs
function fireSyntheticPointerEvent(name, handler) {
  if (!handler) return;
  const syntheticPointerEvent = new PointerEvent("pointer" + name);
  handler(syntheticPointerEvent, extractEventInfo(syntheticPointerEvent));
}
var PressGesture = class extends Feature {
  constructor() {
    super(...arguments);
    this.removeStartListeners = noop;
    this.removeEndListeners = noop;
    this.removeAccessibleListeners = noop;
    this.startPointerPress = (startEvent, startInfo) => {
      this.removeEndListeners();
      if (this.isPressing) return;
      const props = this.node.getProps();
      const endPointerPress = (endEvent, endInfo) => {
        if (!this.checkPressEnd()) return;
        const {
          onTap,
          onTapCancel
        } = this.node.getProps();
        frame.update(() => {
          !isNodeOrChild(this.node.current, endEvent.target) ? onTapCancel && onTapCancel(endEvent, endInfo) : onTap && onTap(endEvent, endInfo);
        });
      };
      const removePointerUpListener = addPointerEvent(window, "pointerup", endPointerPress, {
        passive: !(props.onTap || props["onPointerUp"])
      });
      const removePointerCancelListener = addPointerEvent(window, "pointercancel", (cancelEvent, cancelInfo) => this.cancelPress(cancelEvent, cancelInfo), {
        passive: !(props.onTapCancel || props["onPointerCancel"])
      });
      this.removeEndListeners = pipe(removePointerUpListener, removePointerCancelListener);
      this.startPress(startEvent, startInfo);
    };
    this.startAccessiblePress = () => {
      const handleKeydown = keydownEvent => {
        if (keydownEvent.key !== "Enter" || this.isPressing) return;
        const handleKeyup = keyupEvent => {
          if (keyupEvent.key !== "Enter" || !this.checkPressEnd()) return;
          fireSyntheticPointerEvent("up", (event, info) => {
            const {
              onTap
            } = this.node.getProps();
            if (onTap) {
              frame.update(() => onTap(event, info));
            }
          });
        };
        this.removeEndListeners();
        this.removeEndListeners = addDomEvent(this.node.current, "keyup", handleKeyup);
        fireSyntheticPointerEvent("down", (event, info) => {
          this.startPress(event, info);
        });
      };
      const removeKeydownListener = addDomEvent(this.node.current, "keydown", handleKeydown);
      const handleBlur = () => {
        if (!this.isPressing) return;
        fireSyntheticPointerEvent("cancel", (cancelEvent, cancelInfo) => this.cancelPress(cancelEvent, cancelInfo));
      };
      const removeBlurListener = addDomEvent(this.node.current, "blur", handleBlur);
      this.removeAccessibleListeners = pipe(removeKeydownListener, removeBlurListener);
    };
  }
  startPress(event, info) {
    this.isPressing = true;
    const {
      onTapStart,
      whileTap
    } = this.node.getProps();
    if (whileTap && this.node.animationState) {
      this.node.animationState.setActive("whileTap", true);
    }
    if (onTapStart) {
      frame.update(() => onTapStart(event, info));
    }
  }
  checkPressEnd() {
    this.removeEndListeners();
    this.isPressing = false;
    const props = this.node.getProps();
    if (props.whileTap && this.node.animationState) {
      this.node.animationState.setActive("whileTap", false);
    }
    return !isDragActive();
  }
  cancelPress(event, info) {
    if (!this.checkPressEnd()) return;
    const {
      onTapCancel
    } = this.node.getProps();
    if (onTapCancel) {
      frame.update(() => onTapCancel(event, info));
    }
  }
  mount() {
    const props = this.node.getProps();
    const removePointerListener = addPointerEvent(this.node.current, "pointerdown", this.startPointerPress, {
      passive: !(props.onTapStart || props["onPointerStart"])
    });
    const removeFocusListener = addDomEvent(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = pipe(removePointerListener, removeFocusListener);
  }
  unmount() {
    this.removeStartListeners();
    this.removeEndListeners();
    this.removeAccessibleListeners();
  }
};

// node_modules/framer-motion/dist/es/motion/features/viewport/observers.mjs
var observerCallbacks = /* @__PURE__ */new WeakMap();
var observers = /* @__PURE__ */new WeakMap();
var fireObserverCallback = entry => {
  const callback = observerCallbacks.get(entry.target);
  callback && callback(entry);
};
var fireAllObserverCallbacks = entries => {
  entries.forEach(fireObserverCallback);
};
function initIntersectionObserver({
  root,
  ...options
}) {
  const lookupRoot = root || document;
  if (!observers.has(lookupRoot)) {
    observers.set(lookupRoot, {});
  }
  const rootObservers = observers.get(lookupRoot);
  const key = JSON.stringify(options);
  if (!rootObservers[key]) {
    rootObservers[key] = new IntersectionObserver(fireAllObserverCallbacks, {
      root,
      ...options
    });
  }
  return rootObservers[key];
}
function observeIntersection(element, options, callback) {
  const rootInteresectionObserver = initIntersectionObserver(options);
  observerCallbacks.set(element, callback);
  rootInteresectionObserver.observe(element);
  return () => {
    observerCallbacks.delete(element);
    rootInteresectionObserver.unobserve(element);
  };
}

// node_modules/framer-motion/dist/es/motion/features/viewport/index.mjs
var thresholdNames = {
  some: 0,
  all: 1
};
var InViewFeature = class extends Feature {
  constructor() {
    super(...arguments);
    this.hasEnteredView = false;
    this.isInView = false;
  }
  startObserver() {
    this.unmount();
    const {
      viewport = {}
    } = this.node.getProps();
    const {
      root,
      margin: rootMargin,
      amount = "some",
      once
    } = viewport;
    const options = {
      root: root ? root.current : void 0,
      rootMargin,
      threshold: typeof amount === "number" ? amount : thresholdNames[amount]
    };
    const onIntersectionUpdate = entry => {
      const {
        isIntersecting
      } = entry;
      if (this.isInView === isIntersecting) return;
      this.isInView = isIntersecting;
      if (once && !isIntersecting && this.hasEnteredView) {
        return;
      } else if (isIntersecting) {
        this.hasEnteredView = true;
      }
      if (this.node.animationState) {
        this.node.animationState.setActive("whileInView", isIntersecting);
      }
      const {
        onViewportEnter,
        onViewportLeave
      } = this.node.getProps();
      const callback = isIntersecting ? onViewportEnter : onViewportLeave;
      callback && callback(entry);
    };
    return observeIntersection(this.node.current, options, onIntersectionUpdate);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver === "undefined") return;
    const {
      props,
      prevProps
    } = this.node;
    const hasOptionsChanged = ["amount", "margin", "root"].some(hasViewportOptionChanged(props, prevProps));
    if (hasOptionsChanged) {
      this.startObserver();
    }
  }
  unmount() {}
};
function hasViewportOptionChanged({
  viewport = {}
}, {
  viewport: prevViewport = {}
} = {}) {
  return name => viewport[name] !== prevViewport[name];
}

// node_modules/framer-motion/dist/es/motion/features/gestures.mjs
var gestureAnimations = {
  inView: {
    Feature: InViewFeature
  },
  tap: {
    Feature: PressGesture
  },
  focus: {
    Feature: FocusGesture
  },
  hover: {
    Feature: HoverGesture
  }
};

// node_modules/framer-motion/dist/es/utils/shallow-compare.mjs
function shallowCompare(next, prev) {
  if (!Array.isArray(prev)) return false;
  const prevLength = prev.length;
  if (prevLength !== next.length) return false;
  for (let i = 0; i < prevLength; i++) {
    if (prev[i] !== next[i]) return false;
  }
  return true;
}

// node_modules/framer-motion/dist/es/render/utils/resolve-dynamic-variants.mjs
function getCurrent(visualElement) {
  const current = {};
  visualElement.values.forEach((value, key) => current[key] = value.get());
  return current;
}
function getVelocity(visualElement) {
  const velocity = {};
  visualElement.values.forEach((value, key) => velocity[key] = value.getVelocity());
  return velocity;
}
function resolveVariant(visualElement, definition, custom) {
  const props = visualElement.getProps();
  return resolveVariantFromProps(props, definition, custom !== void 0 ? custom : props.custom, getCurrent(visualElement), getVelocity(visualElement));
}

// node_modules/framer-motion/dist/es/utils/errors.mjs
var warning = noop;
var invariant = noop;
if (true) {
  warning = (check, message) => {
    if (!check && typeof console !== "undefined") {
      console.warn(message);
    }
  };
  invariant = (check, message) => {
    if (!check) {
      throw new Error(message);
    }
  };
}

// node_modules/framer-motion/dist/es/utils/time-conversion.mjs
var secondsToMilliseconds = seconds => seconds * 1e3;
var millisecondsToSeconds = milliseconds => milliseconds / 1e3;

// node_modules/framer-motion/dist/es/utils/use-instant-transition-state.mjs
var instantAnimationState = {
  current: false
};

// node_modules/framer-motion/dist/es/easing/utils/is-bezier-definition.mjs
var isBezierDefinition = easing => Array.isArray(easing) && typeof easing[0] === "number";

// node_modules/framer-motion/dist/es/animation/animators/waapi/easing.mjs
function isWaapiSupportedEasing(easing) {
  return Boolean(!easing || typeof easing === "string" && supportedWaapiEasing[easing] || isBezierDefinition(easing) || Array.isArray(easing) && easing.every(isWaapiSupportedEasing));
}
var cubicBezierAsString = ([a, b, c, d]) => `cubic-bezier(${a}, ${b}, ${c}, ${d})`;
var supportedWaapiEasing = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: cubicBezierAsString([0, 0.65, 0.55, 1]),
  circOut: cubicBezierAsString([0.55, 0, 1, 0.45]),
  backIn: cubicBezierAsString([0.31, 0.01, 0.66, -0.59]),
  backOut: cubicBezierAsString([0.33, 1.53, 0.69, 0.99])
};
function mapEasingToNativeEasing(easing) {
  if (!easing) return void 0;
  return isBezierDefinition(easing) ? cubicBezierAsString(easing) : Array.isArray(easing) ? easing.map(mapEasingToNativeEasing) : supportedWaapiEasing[easing];
}

// node_modules/framer-motion/dist/es/animation/animators/waapi/index.mjs
function animateStyle(element, valueName, keyframes2, {
  delay: delay2 = 0,
  duration,
  repeat = 0,
  repeatType = "loop",
  ease: ease2,
  times
} = {}) {
  const keyframeOptions = {
    [valueName]: keyframes2
  };
  if (times) keyframeOptions.offset = times;
  const easing = mapEasingToNativeEasing(ease2);
  if (Array.isArray(easing)) keyframeOptions.easing = easing;
  return element.animate(keyframeOptions, {
    delay: delay2,
    duration,
    easing: !Array.isArray(easing) ? easing : "linear",
    fill: "both",
    iterations: repeat + 1,
    direction: repeatType === "reverse" ? "alternate" : "normal"
  });
}

// node_modules/framer-motion/dist/es/animation/animators/waapi/utils/get-final-keyframe.mjs
function getFinalKeyframe(keyframes2, {
  repeat,
  repeatType = "loop"
}) {
  const index = repeat && repeatType !== "loop" && repeat % 2 === 1 ? 0 : keyframes2.length - 1;
  return keyframes2[index];
}

// node_modules/framer-motion/dist/es/easing/cubic-bezier.mjs
var calcBezier = (t, a1, a2) => (((1 - 3 * a2 + 3 * a1) * t + (3 * a2 - 6 * a1)) * t + 3 * a1) * t;
var subdivisionPrecision = 1e-7;
var subdivisionMaxIterations = 12;
function binarySubdivide(x, lowerBound, upperBound, mX1, mX2) {
  let currentX;
  let currentT;
  let i = 0;
  do {
    currentT = lowerBound + (upperBound - lowerBound) / 2;
    currentX = calcBezier(currentT, mX1, mX2) - x;
    if (currentX > 0) {
      upperBound = currentT;
    } else {
      lowerBound = currentT;
    }
  } while (Math.abs(currentX) > subdivisionPrecision && ++i < subdivisionMaxIterations);
  return currentT;
}
function cubicBezier(mX1, mY1, mX2, mY2) {
  if (mX1 === mY1 && mX2 === mY2) return noop;
  const getTForX = aX => binarySubdivide(aX, 0, 1, mX1, mX2);
  return t => t === 0 || t === 1 ? t : calcBezier(getTForX(t), mY1, mY2);
}

// node_modules/framer-motion/dist/es/easing/ease.mjs
var easeIn = cubicBezier(0.42, 0, 1, 1);
var easeOut = cubicBezier(0, 0, 0.58, 1);
var easeInOut = cubicBezier(0.42, 0, 0.58, 1);

// node_modules/framer-motion/dist/es/easing/utils/is-easing-array.mjs
var isEasingArray = ease2 => {
  return Array.isArray(ease2) && typeof ease2[0] !== "number";
};

// node_modules/framer-motion/dist/es/easing/modifiers/mirror.mjs
var mirrorEasing = easing => p => p <= 0.5 ? easing(2 * p) / 2 : (2 - easing(2 * (1 - p))) / 2;

// node_modules/framer-motion/dist/es/easing/modifiers/reverse.mjs
var reverseEasing = easing => p => 1 - easing(1 - p);

// node_modules/framer-motion/dist/es/easing/circ.mjs
var circIn = p => 1 - Math.sin(Math.acos(p));
var circOut = reverseEasing(circIn);
var circInOut = mirrorEasing(circIn);

// node_modules/framer-motion/dist/es/easing/back.mjs
var backOut = cubicBezier(0.33, 1.53, 0.69, 0.99);
var backIn = reverseEasing(backOut);
var backInOut = mirrorEasing(backIn);

// node_modules/framer-motion/dist/es/easing/anticipate.mjs
var anticipate = p => (p *= 2) < 1 ? 0.5 * backIn(p) : 0.5 * (2 - Math.pow(2, -10 * (p - 1)));

// node_modules/framer-motion/dist/es/easing/utils/map.mjs
var easingLookup = {
  linear: noop,
  easeIn,
  easeInOut,
  easeOut,
  circIn,
  circInOut,
  circOut,
  backIn,
  backInOut,
  backOut,
  anticipate
};
var easingDefinitionToFunction = definition => {
  if (Array.isArray(definition)) {
    invariant(definition.length === 4, `Cubic bezier arrays must contain four numerical values.`);
    const [x1, y1, x2, y2] = definition;
    return cubicBezier(x1, y1, x2, y2);
  } else if (typeof definition === "string") {
    invariant(easingLookup[definition] !== void 0, `Invalid easing type '${definition}'`);
    return easingLookup[definition];
  }
  return definition;
};

// node_modules/framer-motion/dist/es/value/types/color/utils.mjs
var isColorString = (type, testProp) => v => {
  return Boolean(isString(v) && singleColorRegex.test(v) && v.startsWith(type) || testProp && Object.prototype.hasOwnProperty.call(v, testProp));
};
var splitColor = (aName, bName, cName) => v => {
  if (!isString(v)) return v;
  const [a, b, c, alpha2] = v.match(floatRegex);
  return {
    [aName]: parseFloat(a),
    [bName]: parseFloat(b),
    [cName]: parseFloat(c),
    alpha: alpha2 !== void 0 ? parseFloat(alpha2) : 1
  };
};

// node_modules/framer-motion/dist/es/value/types/color/rgba.mjs
var clampRgbUnit = v => clamp(0, 255, v);
var rgbUnit = {
  ...number,
  transform: v => Math.round(clampRgbUnit(v))
};
var rgba = {
  test: isColorString("rgb", "red"),
  parse: splitColor("red", "green", "blue"),
  transform: ({
    red,
    green,
    blue,
    alpha: alpha$1 = 1
  }) => "rgba(" + rgbUnit.transform(red) + ", " + rgbUnit.transform(green) + ", " + rgbUnit.transform(blue) + ", " + sanitize(alpha.transform(alpha$1)) + ")"
};

// node_modules/framer-motion/dist/es/value/types/color/hex.mjs
function parseHex(v) {
  let r = "";
  let g = "";
  let b = "";
  let a = "";
  if (v.length > 5) {
    r = v.substring(1, 3);
    g = v.substring(3, 5);
    b = v.substring(5, 7);
    a = v.substring(7, 9);
  } else {
    r = v.substring(1, 2);
    g = v.substring(2, 3);
    b = v.substring(3, 4);
    a = v.substring(4, 5);
    r += r;
    g += g;
    b += b;
    a += a;
  }
  return {
    red: parseInt(r, 16),
    green: parseInt(g, 16),
    blue: parseInt(b, 16),
    alpha: a ? parseInt(a, 16) / 255 : 1
  };
}
var hex = {
  test: isColorString("#"),
  parse: parseHex,
  transform: rgba.transform
};

// node_modules/framer-motion/dist/es/value/types/color/hsla.mjs
var hsla = {
  test: isColorString("hsl", "hue"),
  parse: splitColor("hue", "saturation", "lightness"),
  transform: ({
    hue,
    saturation,
    lightness,
    alpha: alpha$1 = 1
  }) => {
    return "hsla(" + Math.round(hue) + ", " + percent.transform(sanitize(saturation)) + ", " + percent.transform(sanitize(lightness)) + ", " + sanitize(alpha.transform(alpha$1)) + ")";
  }
};

// node_modules/framer-motion/dist/es/value/types/color/index.mjs
var color = {
  test: v => rgba.test(v) || hex.test(v) || hsla.test(v),
  parse: v => {
    if (rgba.test(v)) {
      return rgba.parse(v);
    } else if (hsla.test(v)) {
      return hsla.parse(v);
    } else {
      return hex.parse(v);
    }
  },
  transform: v => {
    return isString(v) ? v : v.hasOwnProperty("red") ? rgba.transform(v) : hsla.transform(v);
  }
};

// node_modules/framer-motion/dist/es/utils/mix.mjs
var mix = (from, to, progress2) => -progress2 * from + progress2 * to + from;

// node_modules/framer-motion/dist/es/utils/hsla-to-rgba.mjs
function hueToRgb(p, q, t) {
  if (t < 0) t += 1;
  if (t > 1) t -= 1;
  if (t < 1 / 6) return p + (q - p) * 6 * t;
  if (t < 1 / 2) return q;
  if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
  return p;
}
function hslaToRgba({
  hue,
  saturation,
  lightness,
  alpha: alpha2
}) {
  hue /= 360;
  saturation /= 100;
  lightness /= 100;
  let red = 0;
  let green = 0;
  let blue = 0;
  if (!saturation) {
    red = green = blue = lightness;
  } else {
    const q = lightness < 0.5 ? lightness * (1 + saturation) : lightness + saturation - lightness * saturation;
    const p = 2 * lightness - q;
    red = hueToRgb(p, q, hue + 1 / 3);
    green = hueToRgb(p, q, hue);
    blue = hueToRgb(p, q, hue - 1 / 3);
  }
  return {
    red: Math.round(red * 255),
    green: Math.round(green * 255),
    blue: Math.round(blue * 255),
    alpha: alpha2
  };
}

// node_modules/framer-motion/dist/es/utils/mix-color.mjs
var mixLinearColor = (from, to, v) => {
  const fromExpo = from * from;
  return Math.sqrt(Math.max(0, v * (to * to - fromExpo) + fromExpo));
};
var colorTypes = [hex, rgba, hsla];
var getColorType = v => colorTypes.find(type => type.test(v));
function asRGBA(color2) {
  const type = getColorType(color2);
  invariant(Boolean(type), `'${color2}' is not an animatable color. Use the equivalent color code instead.`);
  let model = type.parse(color2);
  if (type === hsla) {
    model = hslaToRgba(model);
  }
  return model;
}
var mixColor = (from, to) => {
  const fromRGBA = asRGBA(from);
  const toRGBA = asRGBA(to);
  const blended = {
    ...fromRGBA
  };
  return v => {
    blended.red = mixLinearColor(fromRGBA.red, toRGBA.red, v);
    blended.green = mixLinearColor(fromRGBA.green, toRGBA.green, v);
    blended.blue = mixLinearColor(fromRGBA.blue, toRGBA.blue, v);
    blended.alpha = mix(fromRGBA.alpha, toRGBA.alpha, v);
    return rgba.transform(blended);
  };
};

// node_modules/framer-motion/dist/es/value/types/complex/index.mjs
function test(v) {
  var _a, _b;
  return isNaN(v) && isString(v) && (((_a = v.match(floatRegex)) === null || _a === void 0 ? void 0 : _a.length) || 0) + (((_b = v.match(colorRegex)) === null || _b === void 0 ? void 0 : _b.length) || 0) > 0;
}
var cssVarTokeniser = {
  regex: cssVariableRegex,
  countKey: "Vars",
  token: "${v}",
  parse: noop
};
var colorTokeniser = {
  regex: colorRegex,
  countKey: "Colors",
  token: "${c}",
  parse: color.parse
};
var numberTokeniser = {
  regex: floatRegex,
  countKey: "Numbers",
  token: "${n}",
  parse: number.parse
};
function tokenise(info, {
  regex,
  countKey,
  token,
  parse
}) {
  const matches = info.tokenised.match(regex);
  if (!matches) return;
  info["num" + countKey] = matches.length;
  info.tokenised = info.tokenised.replace(regex, token);
  info.values.push(...matches.map(parse));
}
function analyseComplexValue(value) {
  const originalValue = value.toString();
  const info = {
    value: originalValue,
    tokenised: originalValue,
    values: [],
    numVars: 0,
    numColors: 0,
    numNumbers: 0
  };
  if (info.value.includes("var(--")) tokenise(info, cssVarTokeniser);
  tokenise(info, colorTokeniser);
  tokenise(info, numberTokeniser);
  return info;
}
function parseComplexValue(v) {
  return analyseComplexValue(v).values;
}
function createTransformer(source) {
  const {
    values,
    numColors,
    numVars,
    tokenised
  } = analyseComplexValue(source);
  const numValues = values.length;
  return v => {
    let output = tokenised;
    for (let i = 0; i < numValues; i++) {
      if (i < numVars) {
        output = output.replace(cssVarTokeniser.token, v[i]);
      } else if (i < numVars + numColors) {
        output = output.replace(colorTokeniser.token, color.transform(v[i]));
      } else {
        output = output.replace(numberTokeniser.token, sanitize(v[i]));
      }
    }
    return output;
  };
}
var convertNumbersToZero = v => typeof v === "number" ? 0 : v;
function getAnimatableNone(v) {
  const parsed = parseComplexValue(v);
  const transformer = createTransformer(v);
  return transformer(parsed.map(convertNumbersToZero));
}
var complex = {
  test,
  parse: parseComplexValue,
  createTransformer,
  getAnimatableNone
};

// node_modules/framer-motion/dist/es/utils/mix-complex.mjs
var mixImmediate = (origin, target) => p => `${p > 0 ? target : origin}`;
function getMixer(origin, target) {
  if (typeof origin === "number") {
    return v => mix(origin, target, v);
  } else if (color.test(origin)) {
    return mixColor(origin, target);
  } else {
    return origin.startsWith("var(") ? mixImmediate(origin, target) : mixComplex(origin, target);
  }
}
var mixArray = (from, to) => {
  const output = [...from];
  const numValues = output.length;
  const blendValue = from.map((fromThis, i) => getMixer(fromThis, to[i]));
  return v => {
    for (let i = 0; i < numValues; i++) {
      output[i] = blendValue[i](v);
    }
    return output;
  };
};
var mixObject = (origin, target) => {
  const output = {
    ...origin,
    ...target
  };
  const blendValue = {};
  for (const key in output) {
    if (origin[key] !== void 0 && target[key] !== void 0) {
      blendValue[key] = getMixer(origin[key], target[key]);
    }
  }
  return v => {
    for (const key in blendValue) {
      output[key] = blendValue[key](v);
    }
    return output;
  };
};
var mixComplex = (origin, target) => {
  const template = complex.createTransformer(target);
  const originStats = analyseComplexValue(origin);
  const targetStats = analyseComplexValue(target);
  const canInterpolate = originStats.numVars === targetStats.numVars && originStats.numColors === targetStats.numColors && originStats.numNumbers >= targetStats.numNumbers;
  if (canInterpolate) {
    return pipe(mixArray(originStats.values, targetStats.values), template);
  } else {
    warning(true, `Complex values '${origin}' and '${target}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`);
    return mixImmediate(origin, target);
  }
};

// node_modules/framer-motion/dist/es/utils/progress.mjs
var progress = (from, to, value) => {
  const toFromDifference = to - from;
  return toFromDifference === 0 ? 1 : (value - from) / toFromDifference;
};

// node_modules/framer-motion/dist/es/utils/interpolate.mjs
var mixNumber = (from, to) => p => mix(from, to, p);
function detectMixerFactory(v) {
  if (typeof v === "number") {
    return mixNumber;
  } else if (typeof v === "string") {
    return color.test(v) ? mixColor : mixComplex;
  } else if (Array.isArray(v)) {
    return mixArray;
  } else if (typeof v === "object") {
    return mixObject;
  }
  return mixNumber;
}
function createMixers(output, ease2, customMixer) {
  const mixers = [];
  const mixerFactory = customMixer || detectMixerFactory(output[0]);
  const numMixers = output.length - 1;
  for (let i = 0; i < numMixers; i++) {
    let mixer = mixerFactory(output[i], output[i + 1]);
    if (ease2) {
      const easingFunction = Array.isArray(ease2) ? ease2[i] || noop : ease2;
      mixer = pipe(easingFunction, mixer);
    }
    mixers.push(mixer);
  }
  return mixers;
}
function interpolate(input, output, {
  clamp: isClamp = true,
  ease: ease2,
  mixer
} = {}) {
  const inputLength = input.length;
  invariant(inputLength === output.length, "Both input and output ranges must be the same length");
  if (inputLength === 1) return () => output[0];
  if (input[0] > input[inputLength - 1]) {
    input = [...input].reverse();
    output = [...output].reverse();
  }
  const mixers = createMixers(output, ease2, mixer);
  const numMixers = mixers.length;
  const interpolator = v => {
    let i = 0;
    if (numMixers > 1) {
      for (; i < input.length - 2; i++) {
        if (v < input[i + 1]) break;
      }
    }
    const progressInRange = progress(input[i], input[i + 1], v);
    return mixers[i](progressInRange);
  };
  return isClamp ? v => interpolator(clamp(input[0], input[inputLength - 1], v)) : interpolator;
}

// node_modules/framer-motion/dist/es/utils/offsets/fill.mjs
function fillOffset(offset, remaining) {
  const min = offset[offset.length - 1];
  for (let i = 1; i <= remaining; i++) {
    const offsetProgress = progress(0, remaining, i);
    offset.push(mix(min, 1, offsetProgress));
  }
}

// node_modules/framer-motion/dist/es/utils/offsets/default.mjs
function defaultOffset(arr) {
  const offset = [0];
  fillOffset(offset, arr.length - 1);
  return offset;
}

// node_modules/framer-motion/dist/es/utils/offsets/time.mjs
function convertOffsetToTimes(offset, duration) {
  return offset.map(o => o * duration);
}

// node_modules/framer-motion/dist/es/animation/generators/keyframes.mjs
function defaultEasing(values, easing) {
  return values.map(() => easing || easeInOut).splice(0, values.length - 1);
}
function keyframes({
  duration = 300,
  keyframes: keyframeValues,
  times,
  ease: ease2 = "easeInOut"
}) {
  const easingFunctions = isEasingArray(ease2) ? ease2.map(easingDefinitionToFunction) : easingDefinitionToFunction(ease2);
  const state = {
    done: false,
    value: keyframeValues[0]
  };
  const absoluteTimes = convertOffsetToTimes(times && times.length === keyframeValues.length ? times : defaultOffset(keyframeValues), duration);
  const mapTimeToKeyframe = interpolate(absoluteTimes, keyframeValues, {
    ease: Array.isArray(easingFunctions) ? easingFunctions : defaultEasing(keyframeValues, easingFunctions)
  });
  return {
    calculatedDuration: duration,
    next: t => {
      state.value = mapTimeToKeyframe(t);
      state.done = t >= duration;
      return state;
    }
  };
}

// node_modules/framer-motion/dist/es/utils/velocity-per-second.mjs
function velocityPerSecond(velocity, frameDuration) {
  return frameDuration ? velocity * (1e3 / frameDuration) : 0;
}

// node_modules/framer-motion/dist/es/animation/generators/utils/velocity.mjs
var velocitySampleDuration = 5;
function calcGeneratorVelocity(resolveValue, t, current) {
  const prevT = Math.max(t - velocitySampleDuration, 0);
  return velocityPerSecond(current - resolveValue(prevT), t - prevT);
}

// node_modules/framer-motion/dist/es/animation/generators/spring/find.mjs
var safeMin = 1e-3;
var minDuration = 0.01;
var maxDuration = 10;
var minDamping = 0.05;
var maxDamping = 1;
function findSpring({
  duration = 800,
  bounce = 0.25,
  velocity = 0,
  mass = 1
}) {
  let envelope;
  let derivative;
  warning(duration <= secondsToMilliseconds(maxDuration), "Spring duration must be 10 seconds or less");
  let dampingRatio = 1 - bounce;
  dampingRatio = clamp(minDamping, maxDamping, dampingRatio);
  duration = clamp(minDuration, maxDuration, millisecondsToSeconds(duration));
  if (dampingRatio < 1) {
    envelope = undampedFreq2 => {
      const exponentialDecay = undampedFreq2 * dampingRatio;
      const delta = exponentialDecay * duration;
      const a = exponentialDecay - velocity;
      const b = calcAngularFreq(undampedFreq2, dampingRatio);
      const c = Math.exp(-delta);
      return safeMin - a / b * c;
    };
    derivative = undampedFreq2 => {
      const exponentialDecay = undampedFreq2 * dampingRatio;
      const delta = exponentialDecay * duration;
      const d = delta * velocity + velocity;
      const e = Math.pow(dampingRatio, 2) * Math.pow(undampedFreq2, 2) * duration;
      const f = Math.exp(-delta);
      const g = calcAngularFreq(Math.pow(undampedFreq2, 2), dampingRatio);
      const factor = -envelope(undampedFreq2) + safeMin > 0 ? -1 : 1;
      return factor * ((d - e) * f) / g;
    };
  } else {
    envelope = undampedFreq2 => {
      const a = Math.exp(-undampedFreq2 * duration);
      const b = (undampedFreq2 - velocity) * duration + 1;
      return -safeMin + a * b;
    };
    derivative = undampedFreq2 => {
      const a = Math.exp(-undampedFreq2 * duration);
      const b = (velocity - undampedFreq2) * (duration * duration);
      return a * b;
    };
  }
  const initialGuess = 5 / duration;
  const undampedFreq = approximateRoot(envelope, derivative, initialGuess);
  duration = secondsToMilliseconds(duration);
  if (isNaN(undampedFreq)) {
    return {
      stiffness: 100,
      damping: 10,
      duration
    };
  } else {
    const stiffness = Math.pow(undampedFreq, 2) * mass;
    return {
      stiffness,
      damping: dampingRatio * 2 * Math.sqrt(mass * stiffness),
      duration
    };
  }
}
var rootIterations = 12;
function approximateRoot(envelope, derivative, initialGuess) {
  let result = initialGuess;
  for (let i = 1; i < rootIterations; i++) {
    result = result - envelope(result) / derivative(result);
  }
  return result;
}
function calcAngularFreq(undampedFreq, dampingRatio) {
  return undampedFreq * Math.sqrt(1 - dampingRatio * dampingRatio);
}

// node_modules/framer-motion/dist/es/animation/generators/spring/index.mjs
var durationKeys = ["duration", "bounce"];
var physicsKeys = ["stiffness", "damping", "mass"];
function isSpringType(options, keys2) {
  return keys2.some(key => options[key] !== void 0);
}
function getSpringOptions(options) {
  let springOptions = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: false,
    ...options
  };
  if (!isSpringType(options, physicsKeys) && isSpringType(options, durationKeys)) {
    const derived = findSpring(options);
    springOptions = {
      ...springOptions,
      ...derived,
      mass: 1
    };
    springOptions.isResolvedFromDuration = true;
  }
  return springOptions;
}
function spring({
  keyframes: keyframes2,
  restDelta,
  restSpeed,
  ...options
}) {
  const origin = keyframes2[0];
  const target = keyframes2[keyframes2.length - 1];
  const state = {
    done: false,
    value: origin
  };
  const {
    stiffness,
    damping,
    mass,
    duration,
    velocity,
    isResolvedFromDuration
  } = getSpringOptions({
    ...options,
    velocity: -millisecondsToSeconds(options.velocity || 0)
  });
  const initialVelocity = velocity || 0;
  const dampingRatio = damping / (2 * Math.sqrt(stiffness * mass));
  const initialDelta = target - origin;
  const undampedAngularFreq = millisecondsToSeconds(Math.sqrt(stiffness / mass));
  const isGranularScale = Math.abs(initialDelta) < 5;
  restSpeed || (restSpeed = isGranularScale ? 0.01 : 2);
  restDelta || (restDelta = isGranularScale ? 5e-3 : 0.5);
  let resolveSpring;
  if (dampingRatio < 1) {
    const angularFreq = calcAngularFreq(undampedAngularFreq, dampingRatio);
    resolveSpring = t => {
      const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
      return target - envelope * ((initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) / angularFreq * Math.sin(angularFreq * t) + initialDelta * Math.cos(angularFreq * t));
    };
  } else if (dampingRatio === 1) {
    resolveSpring = t => target - Math.exp(-undampedAngularFreq * t) * (initialDelta + (initialVelocity + undampedAngularFreq * initialDelta) * t);
  } else {
    const dampedAngularFreq = undampedAngularFreq * Math.sqrt(dampingRatio * dampingRatio - 1);
    resolveSpring = t => {
      const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
      const freqForT = Math.min(dampedAngularFreq * t, 300);
      return target - envelope * ((initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) * Math.sinh(freqForT) + dampedAngularFreq * initialDelta * Math.cosh(freqForT)) / dampedAngularFreq;
    };
  }
  return {
    calculatedDuration: isResolvedFromDuration ? duration || null : null,
    next: t => {
      const current = resolveSpring(t);
      if (!isResolvedFromDuration) {
        let currentVelocity = initialVelocity;
        if (t !== 0) {
          if (dampingRatio < 1) {
            currentVelocity = calcGeneratorVelocity(resolveSpring, t, current);
          } else {
            currentVelocity = 0;
          }
        }
        const isBelowVelocityThreshold = Math.abs(currentVelocity) <= restSpeed;
        const isBelowDisplacementThreshold = Math.abs(target - current) <= restDelta;
        state.done = isBelowVelocityThreshold && isBelowDisplacementThreshold;
      } else {
        state.done = t >= duration;
      }
      state.value = state.done ? target : current;
      return state;
    }
  };
}

// node_modules/framer-motion/dist/es/animation/generators/inertia.mjs
function inertia({
  keyframes: keyframes2,
  velocity = 0,
  power = 0.8,
  timeConstant = 325,
  bounceDamping = 10,
  bounceStiffness = 500,
  modifyTarget,
  min,
  max,
  restDelta = 0.5,
  restSpeed
}) {
  const origin = keyframes2[0];
  const state = {
    done: false,
    value: origin
  };
  const isOutOfBounds = v => min !== void 0 && v < min || max !== void 0 && v > max;
  const nearestBoundary = v => {
    if (min === void 0) return max;
    if (max === void 0) return min;
    return Math.abs(min - v) < Math.abs(max - v) ? min : max;
  };
  let amplitude = power * velocity;
  const ideal = origin + amplitude;
  const target = modifyTarget === void 0 ? ideal : modifyTarget(ideal);
  if (target !== ideal) amplitude = target - origin;
  const calcDelta = t => -amplitude * Math.exp(-t / timeConstant);
  const calcLatest = t => target + calcDelta(t);
  const applyFriction = t => {
    const delta = calcDelta(t);
    const latest = calcLatest(t);
    state.done = Math.abs(delta) <= restDelta;
    state.value = state.done ? target : latest;
  };
  let timeReachedBoundary;
  let spring$1;
  const checkCatchBoundary = t => {
    if (!isOutOfBounds(state.value)) return;
    timeReachedBoundary = t;
    spring$1 = spring({
      keyframes: [state.value, nearestBoundary(state.value)],
      velocity: calcGeneratorVelocity(calcLatest, t, state.value),
      damping: bounceDamping,
      stiffness: bounceStiffness,
      restDelta,
      restSpeed
    });
  };
  checkCatchBoundary(0);
  return {
    calculatedDuration: null,
    next: t => {
      let hasUpdatedFrame = false;
      if (!spring$1 && timeReachedBoundary === void 0) {
        hasUpdatedFrame = true;
        applyFriction(t);
        checkCatchBoundary(t);
      }
      if (timeReachedBoundary !== void 0 && t > timeReachedBoundary) {
        return spring$1.next(t - timeReachedBoundary);
      } else {
        !hasUpdatedFrame && applyFriction(t);
        return state;
      }
    }
  };
}

// node_modules/framer-motion/dist/es/animation/animators/js/driver-frameloop.mjs
var frameloopDriver = update => {
  const passTimestamp = ({
    timestamp
  }) => update(timestamp);
  return {
    start: () => frame.update(passTimestamp, true),
    stop: () => cancelFrame(passTimestamp),
    now: () => frameData.isProcessing ? frameData.timestamp : performance.now()
  };
};

// node_modules/framer-motion/dist/es/animation/generators/utils/calc-duration.mjs
var maxGeneratorDuration = 2e4;
function calcGeneratorDuration(generator) {
  let duration = 0;
  const timeStep = 50;
  let state = generator.next(duration);
  while (!state.done && duration < maxGeneratorDuration) {
    duration += timeStep;
    state = generator.next(duration);
  }
  return duration >= maxGeneratorDuration ? Infinity : duration;
}

// node_modules/framer-motion/dist/es/animation/animators/js/index.mjs
var types = {
  decay: inertia,
  inertia,
  tween: keyframes,
  keyframes,
  spring
};
function animateValue({
  autoplay = true,
  delay: delay2 = 0,
  driver = frameloopDriver,
  keyframes: keyframes$1,
  type = "keyframes",
  repeat = 0,
  repeatDelay = 0,
  repeatType = "loop",
  onPlay,
  onStop,
  onComplete,
  onUpdate,
  ...options
}) {
  let speed = 1;
  let hasStopped = false;
  let resolveFinishedPromise;
  let currentFinishedPromise;
  const updateFinishedPromise = () => {
    currentFinishedPromise = new Promise(resolve => {
      resolveFinishedPromise = resolve;
    });
  };
  updateFinishedPromise();
  let animationDriver;
  const generatorFactory = types[type] || keyframes;
  let mapNumbersToKeyframes;
  if (generatorFactory !== keyframes && typeof keyframes$1[0] !== "number") {
    mapNumbersToKeyframes = interpolate([0, 100], keyframes$1, {
      clamp: false
    });
    keyframes$1 = [0, 100];
  }
  const generator = generatorFactory({
    ...options,
    keyframes: keyframes$1
  });
  let mirroredGenerator;
  if (repeatType === "mirror") {
    mirroredGenerator = generatorFactory({
      ...options,
      keyframes: [...keyframes$1].reverse(),
      velocity: -(options.velocity || 0)
    });
  }
  let playState = "idle";
  let holdTime = null;
  let startTime = null;
  let cancelTime = null;
  if (generator.calculatedDuration === null && repeat) {
    generator.calculatedDuration = calcGeneratorDuration(generator);
  }
  const {
    calculatedDuration
  } = generator;
  let resolvedDuration = Infinity;
  let totalDuration = Infinity;
  if (calculatedDuration !== null) {
    resolvedDuration = calculatedDuration + repeatDelay;
    totalDuration = resolvedDuration * (repeat + 1) - repeatDelay;
  }
  let currentTime = 0;
  const tick = timestamp => {
    if (startTime === null) return;
    if (speed > 0) startTime = Math.min(startTime, timestamp);
    if (speed < 0) startTime = Math.min(timestamp - totalDuration / speed, startTime);
    if (holdTime !== null) {
      currentTime = holdTime;
    } else {
      currentTime = Math.round(timestamp - startTime) * speed;
    }
    const timeWithoutDelay = currentTime - delay2 * (speed >= 0 ? 1 : -1);
    const isInDelayPhase = speed >= 0 ? timeWithoutDelay < 0 : timeWithoutDelay > totalDuration;
    currentTime = Math.max(timeWithoutDelay, 0);
    if (playState === "finished" && holdTime === null) {
      currentTime = totalDuration;
    }
    let elapsed = currentTime;
    let frameGenerator = generator;
    if (repeat) {
      const progress2 = Math.min(currentTime, totalDuration) / resolvedDuration;
      let currentIteration = Math.floor(progress2);
      let iterationProgress = progress2 % 1;
      if (!iterationProgress && progress2 >= 1) {
        iterationProgress = 1;
      }
      iterationProgress === 1 && currentIteration--;
      currentIteration = Math.min(currentIteration, repeat + 1);
      const isOddIteration = Boolean(currentIteration % 2);
      if (isOddIteration) {
        if (repeatType === "reverse") {
          iterationProgress = 1 - iterationProgress;
          if (repeatDelay) {
            iterationProgress -= repeatDelay / resolvedDuration;
          }
        } else if (repeatType === "mirror") {
          frameGenerator = mirroredGenerator;
        }
      }
      elapsed = clamp(0, 1, iterationProgress) * resolvedDuration;
    }
    const state = isInDelayPhase ? {
      done: false,
      value: keyframes$1[0]
    } : frameGenerator.next(elapsed);
    if (mapNumbersToKeyframes) {
      state.value = mapNumbersToKeyframes(state.value);
    }
    let {
      done
    } = state;
    if (!isInDelayPhase && calculatedDuration !== null) {
      done = speed >= 0 ? currentTime >= totalDuration : currentTime <= 0;
    }
    const isAnimationFinished = holdTime === null && (playState === "finished" || playState === "running" && done);
    if (onUpdate) {
      onUpdate(state.value);
    }
    if (isAnimationFinished) {
      finish();
    }
    return state;
  };
  const stopAnimationDriver = () => {
    animationDriver && animationDriver.stop();
    animationDriver = void 0;
  };
  const cancel = () => {
    playState = "idle";
    stopAnimationDriver();
    resolveFinishedPromise();
    updateFinishedPromise();
    startTime = cancelTime = null;
  };
  const finish = () => {
    playState = "finished";
    onComplete && onComplete();
    stopAnimationDriver();
    resolveFinishedPromise();
  };
  const play = () => {
    if (hasStopped) return;
    if (!animationDriver) animationDriver = driver(tick);
    const now = animationDriver.now();
    onPlay && onPlay();
    if (holdTime !== null) {
      startTime = now - holdTime;
    } else if (!startTime || playState === "finished") {
      startTime = now;
    }
    if (playState === "finished") {
      updateFinishedPromise();
    }
    cancelTime = startTime;
    holdTime = null;
    playState = "running";
    animationDriver.start();
  };
  if (autoplay) {
    play();
  }
  const controls = {
    then(resolve, reject) {
      return currentFinishedPromise.then(resolve, reject);
    },
    get time() {
      return millisecondsToSeconds(currentTime);
    },
    set time(newTime) {
      newTime = secondsToMilliseconds(newTime);
      currentTime = newTime;
      if (holdTime !== null || !animationDriver || speed === 0) {
        holdTime = newTime;
      } else {
        startTime = animationDriver.now() - newTime / speed;
      }
    },
    get duration() {
      const duration = generator.calculatedDuration === null ? calcGeneratorDuration(generator) : generator.calculatedDuration;
      return millisecondsToSeconds(duration);
    },
    get speed() {
      return speed;
    },
    set speed(newSpeed) {
      if (newSpeed === speed || !animationDriver) return;
      speed = newSpeed;
      controls.time = millisecondsToSeconds(currentTime);
    },
    get state() {
      return playState;
    },
    play,
    pause: () => {
      playState = "paused";
      holdTime = currentTime;
    },
    stop: () => {
      hasStopped = true;
      if (playState === "idle") return;
      playState = "idle";
      onStop && onStop();
      cancel();
    },
    cancel: () => {
      if (cancelTime !== null) tick(cancelTime);
      cancel();
    },
    complete: () => {
      playState = "finished";
    },
    sample: elapsed => {
      startTime = 0;
      return tick(elapsed);
    }
  };
  return controls;
}

// node_modules/framer-motion/dist/es/utils/memo.mjs
function memo(callback) {
  let result;
  return () => {
    if (result === void 0) result = callback();
    return result;
  };
}

// node_modules/framer-motion/dist/es/animation/animators/waapi/create-accelerated-animation.mjs
var supportsWaapi = memo(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
var acceleratedValues = /* @__PURE__ */new Set(["opacity", "clipPath", "filter", "transform", "backgroundColor"]);
var sampleDelta = 10;
var maxDuration2 = 2e4;
var requiresPregeneratedKeyframes = (valueName, options) => options.type === "spring" || valueName === "backgroundColor" || !isWaapiSupportedEasing(options.ease);
function createAcceleratedAnimation(value, valueName, {
  onUpdate,
  onComplete,
  ...options
}) {
  const canAccelerateAnimation = supportsWaapi() && acceleratedValues.has(valueName) && !options.repeatDelay && options.repeatType !== "mirror" && options.damping !== 0 && options.type !== "inertia";
  if (!canAccelerateAnimation) return false;
  let hasStopped = false;
  let resolveFinishedPromise;
  let currentFinishedPromise;
  let pendingCancel = false;
  const updateFinishedPromise = () => {
    currentFinishedPromise = new Promise(resolve => {
      resolveFinishedPromise = resolve;
    });
  };
  updateFinishedPromise();
  let {
    keyframes: keyframes2,
    duration = 300,
    ease: ease2,
    times
  } = options;
  if (requiresPregeneratedKeyframes(valueName, options)) {
    const sampleAnimation = animateValue({
      ...options,
      repeat: 0,
      delay: 0
    });
    let state = {
      done: false,
      value: keyframes2[0]
    };
    const pregeneratedKeyframes = [];
    let t = 0;
    while (!state.done && t < maxDuration2) {
      state = sampleAnimation.sample(t);
      pregeneratedKeyframes.push(state.value);
      t += sampleDelta;
    }
    times = void 0;
    keyframes2 = pregeneratedKeyframes;
    duration = t - sampleDelta;
    ease2 = "linear";
  }
  const animation = animateStyle(value.owner.current, valueName, keyframes2, {
    ...options,
    duration,
    ease: ease2,
    times
  });
  const cancelAnimation = () => {
    pendingCancel = false;
    animation.cancel();
  };
  const safeCancel = () => {
    pendingCancel = true;
    frame.update(cancelAnimation);
    resolveFinishedPromise();
    updateFinishedPromise();
  };
  animation.onfinish = () => {
    if (pendingCancel) return;
    value.set(getFinalKeyframe(keyframes2, options));
    onComplete && onComplete();
    safeCancel();
  };
  const controls = {
    then(resolve, reject) {
      return currentFinishedPromise.then(resolve, reject);
    },
    attachTimeline(timeline) {
      animation.timeline = timeline;
      animation.onfinish = null;
      return noop;
    },
    get time() {
      return millisecondsToSeconds(animation.currentTime || 0);
    },
    set time(newTime) {
      animation.currentTime = secondsToMilliseconds(newTime);
    },
    get speed() {
      return animation.playbackRate;
    },
    set speed(newSpeed) {
      animation.playbackRate = newSpeed;
    },
    get duration() {
      return millisecondsToSeconds(duration);
    },
    play: () => {
      if (hasStopped) return;
      animation.play();
      cancelFrame(cancelAnimation);
    },
    pause: () => animation.pause(),
    stop: () => {
      hasStopped = true;
      if (animation.playState === "idle") return;
      const {
        currentTime
      } = animation;
      if (currentTime) {
        const sampleAnimation = animateValue({
          ...options,
          autoplay: false
        });
        value.setWithVelocity(sampleAnimation.sample(currentTime - sampleDelta).value, sampleAnimation.sample(currentTime).value, sampleDelta);
      }
      safeCancel();
    },
    complete: () => {
      if (pendingCancel) return;
      animation.finish();
    },
    cancel: safeCancel
  };
  return controls;
}

// node_modules/framer-motion/dist/es/animation/animators/instant.mjs
function createInstantAnimation({
  keyframes: keyframes2,
  delay: delay2,
  onUpdate,
  onComplete
}) {
  const setValue = () => {
    onUpdate && onUpdate(keyframes2[keyframes2.length - 1]);
    onComplete && onComplete();
    return {
      time: 0,
      speed: 1,
      duration: 0,
      play: noop,
      pause: noop,
      stop: noop,
      then: resolve => {
        resolve();
        return Promise.resolve();
      },
      cancel: noop,
      complete: noop
    };
  };
  return delay2 ? animateValue({
    keyframes: [0, 1],
    duration: 0,
    delay: delay2,
    onComplete: setValue
  }) : setValue();
}

// node_modules/framer-motion/dist/es/animation/utils/default-transitions.mjs
var underDampedSpring = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
};
var criticallyDampedSpring = target => ({
  type: "spring",
  stiffness: 550,
  damping: target === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
});
var keyframesTransition = {
  type: "keyframes",
  duration: 0.8
};
var ease = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
};
var getDefaultTransition = (valueKey, {
  keyframes: keyframes2
}) => {
  if (keyframes2.length > 2) {
    return keyframesTransition;
  } else if (transformProps.has(valueKey)) {
    return valueKey.startsWith("scale") ? criticallyDampedSpring(keyframes2[1]) : underDampedSpring;
  }
  return ease;
};

// node_modules/framer-motion/dist/es/animation/utils/is-animatable.mjs
var isAnimatable = (key, value) => {
  if (key === "zIndex") return false;
  if (typeof value === "number" || Array.isArray(value)) return true;
  if (typeof value === "string" && (complex.test(value) || value === "0") && !value.startsWith("url(")) {
    return true;
  }
  return false;
};

// node_modules/framer-motion/dist/es/value/types/complex/filter.mjs
var maxDefaults = /* @__PURE__ */new Set(["brightness", "contrast", "saturate", "opacity"]);
function applyDefaultFilter(v) {
  const [name, value] = v.slice(0, -1).split("(");
  if (name === "drop-shadow") return v;
  const [number2] = value.match(floatRegex) || [];
  if (!number2) return v;
  const unit = value.replace(number2, "");
  let defaultValue = maxDefaults.has(name) ? 1 : 0;
  if (number2 !== value) defaultValue *= 100;
  return name + "(" + defaultValue + unit + ")";
}
var functionRegex = /([a-z-]*)\(.*?\)/g;
var filter = {
  ...complex,
  getAnimatableNone: v => {
    const functions = v.match(functionRegex);
    return functions ? functions.map(applyDefaultFilter).join(" ") : v;
  }
};

// node_modules/framer-motion/dist/es/render/dom/value-types/defaults.mjs
var defaultValueTypes = {
  ...numberValueTypes,
  color,
  backgroundColor: color,
  outlineColor: color,
  fill: color,
  stroke: color,
  borderColor: color,
  borderTopColor: color,
  borderRightColor: color,
  borderBottomColor: color,
  borderLeftColor: color,
  filter,
  WebkitFilter: filter
};
var getDefaultValueType = key => defaultValueTypes[key];

// node_modules/framer-motion/dist/es/render/dom/value-types/animatable-none.mjs
function getAnimatableNone2(key, value) {
  let defaultValueType = getDefaultValueType(key);
  if (defaultValueType !== filter) defaultValueType = complex;
  return defaultValueType.getAnimatableNone ? defaultValueType.getAnimatableNone(value) : void 0;
}

// node_modules/framer-motion/dist/es/utils/is-zero-value-string.mjs
var isZeroValueString = v => /^0[^.\s]+$/.test(v);

// node_modules/framer-motion/dist/es/animation/utils/is-none.mjs
function isNone(value) {
  if (typeof value === "number") {
    return value === 0;
  } else if (value !== null) {
    return value === "none" || value === "0" || isZeroValueString(value);
  }
}

// node_modules/framer-motion/dist/es/animation/utils/keyframes.mjs
function getKeyframes(value, valueName, target, transition) {
  const isTargetAnimatable = isAnimatable(valueName, target);
  let keyframes2;
  if (Array.isArray(target)) {
    keyframes2 = [...target];
  } else {
    keyframes2 = [null, target];
  }
  const defaultOrigin = transition.from !== void 0 ? transition.from : value.get();
  let animatableTemplateValue = void 0;
  const noneKeyframeIndexes = [];
  for (let i = 0; i < keyframes2.length; i++) {
    if (keyframes2[i] === null) {
      keyframes2[i] = i === 0 ? defaultOrigin : keyframes2[i - 1];
    }
    if (isNone(keyframes2[i])) {
      noneKeyframeIndexes.push(i);
    }
    if (typeof keyframes2[i] === "string" && keyframes2[i] !== "none" && keyframes2[i] !== "0") {
      animatableTemplateValue = keyframes2[i];
    }
  }
  if (isTargetAnimatable && noneKeyframeIndexes.length && animatableTemplateValue) {
    for (let i = 0; i < noneKeyframeIndexes.length; i++) {
      const index = noneKeyframeIndexes[i];
      keyframes2[index] = getAnimatableNone2(valueName, animatableTemplateValue);
    }
  }
  return keyframes2;
}

// node_modules/framer-motion/dist/es/animation/utils/transitions.mjs
function isTransitionDefined({
  when,
  delay: _delay,
  delayChildren,
  staggerChildren,
  staggerDirection,
  repeat,
  repeatType,
  repeatDelay,
  from,
  elapsed,
  ...transition
}) {
  return !!Object.keys(transition).length;
}
function getValueTransition(transition, key) {
  return transition[key] || transition["default"] || transition;
}

// node_modules/framer-motion/dist/es/utils/GlobalConfig.mjs
var MotionGlobalConfig = {
  skipAnimations: false
};

// node_modules/framer-motion/dist/es/animation/interfaces/motion-value.mjs
var animateMotionValue = (valueName, value, target, transition = {}) => {
  return onComplete => {
    const valueTransition = getValueTransition(transition, valueName) || {};
    const delay2 = valueTransition.delay || transition.delay || 0;
    let {
      elapsed = 0
    } = transition;
    elapsed = elapsed - secondsToMilliseconds(delay2);
    const keyframes2 = getKeyframes(value, valueName, target, valueTransition);
    const originKeyframe = keyframes2[0];
    const targetKeyframe = keyframes2[keyframes2.length - 1];
    const isOriginAnimatable = isAnimatable(valueName, originKeyframe);
    const isTargetAnimatable = isAnimatable(valueName, targetKeyframe);
    warning(isOriginAnimatable === isTargetAnimatable, `You are trying to animate ${valueName} from "${originKeyframe}" to "${targetKeyframe}". ${originKeyframe} is not an animatable value - to enable this animation set ${originKeyframe} to a value animatable to ${targetKeyframe} via the \`style\` property.`);
    let options = {
      keyframes: keyframes2,
      velocity: value.getVelocity(),
      ease: "easeOut",
      ...valueTransition,
      delay: -elapsed,
      onUpdate: v => {
        value.set(v);
        valueTransition.onUpdate && valueTransition.onUpdate(v);
      },
      onComplete: () => {
        onComplete();
        valueTransition.onComplete && valueTransition.onComplete();
      }
    };
    if (!isTransitionDefined(valueTransition)) {
      options = {
        ...options,
        ...getDefaultTransition(valueName, options)
      };
    }
    if (options.duration) {
      options.duration = secondsToMilliseconds(options.duration);
    }
    if (options.repeatDelay) {
      options.repeatDelay = secondsToMilliseconds(options.repeatDelay);
    }
    if (!isOriginAnimatable || !isTargetAnimatable || instantAnimationState.current || valueTransition.type === false || MotionGlobalConfig.skipAnimations) {
      return createInstantAnimation(instantAnimationState.current ? {
        ...options,
        delay: 0
      } : options);
    }
    if (!transition.isHandoff && value.owner && value.owner.current instanceof HTMLElement && !value.owner.getProps().onUpdate) {
      const acceleratedAnimation = createAcceleratedAnimation(value, valueName, options);
      if (acceleratedAnimation) return acceleratedAnimation;
    }
    return animateValue(options);
  };
};

// node_modules/framer-motion/dist/es/value/use-will-change/is.mjs
function isWillChangeMotionValue(value) {
  return Boolean(isMotionValue(value) && value.add);
}

// node_modules/framer-motion/dist/es/utils/is-numerical-string.mjs
var isNumericalString = v => /^\-?\d*\.?\d+$/.test(v);

// node_modules/framer-motion/dist/es/utils/array.mjs
function addUniqueItem(arr, item) {
  if (arr.indexOf(item) === -1) arr.push(item);
}
function removeItem(arr, item) {
  const index = arr.indexOf(item);
  if (index > -1) arr.splice(index, 1);
}
function moveItem([...arr], fromIndex, toIndex) {
  const startIndex = fromIndex < 0 ? arr.length + fromIndex : fromIndex;
  if (startIndex >= 0 && startIndex < arr.length) {
    const endIndex = toIndex < 0 ? arr.length + toIndex : toIndex;
    const [item] = arr.splice(fromIndex, 1);
    arr.splice(endIndex, 0, item);
  }
  return arr;
}

// node_modules/framer-motion/dist/es/utils/subscription-manager.mjs
var SubscriptionManager = class {
  constructor() {
    this.subscriptions = [];
  }
  add(handler) {
    addUniqueItem(this.subscriptions, handler);
    return () => removeItem(this.subscriptions, handler);
  }
  notify(a, b, c) {
    const numSubscriptions = this.subscriptions.length;
    if (!numSubscriptions) return;
    if (numSubscriptions === 1) {
      this.subscriptions[0](a, b, c);
    } else {
      for (let i = 0; i < numSubscriptions; i++) {
        const handler = this.subscriptions[i];
        handler && handler(a, b, c);
      }
    }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
};

// node_modules/framer-motion/dist/es/utils/warn-once.mjs
var warned = /* @__PURE__ */new Set();
function warnOnce(condition, message, element) {
  if (condition || warned.has(message)) return;
  console.warn(message);
  if (element) console.warn(element);
  warned.add(message);
}

// node_modules/framer-motion/dist/es/value/index.mjs
var isFloat = value => {
  return !isNaN(parseFloat(value));
};
var collectMotionValues = {
  current: void 0
};
var MotionValue = class {
  constructor(init, options = {}) {
    this.version = "10.17.8";
    this.timeDelta = 0;
    this.lastUpdated = 0;
    this.canTrackVelocity = false;
    this.events = {};
    this.updateAndNotify = (v, render = true) => {
      this.prev = this.current;
      this.current = v;
      const {
        delta,
        timestamp
      } = frameData;
      if (this.lastUpdated !== timestamp) {
        this.timeDelta = delta;
        this.lastUpdated = timestamp;
        frame.postRender(this.scheduleVelocityCheck);
      }
      if (this.prev !== this.current && this.events.change) {
        this.events.change.notify(this.current);
      }
      if (this.events.velocityChange) {
        this.events.velocityChange.notify(this.getVelocity());
      }
      if (render && this.events.renderRequest) {
        this.events.renderRequest.notify(this.current);
      }
    };
    this.scheduleVelocityCheck = () => frame.postRender(this.velocityCheck);
    this.velocityCheck = ({
      timestamp
    }) => {
      if (timestamp !== this.lastUpdated) {
        this.prev = this.current;
        if (this.events.velocityChange) {
          this.events.velocityChange.notify(this.getVelocity());
        }
      }
    };
    this.hasAnimated = false;
    this.prev = this.current = init;
    this.canTrackVelocity = isFloat(this.current);
    this.owner = options.owner;
  }
  onChange(subscription) {
    if (true) {
      warnOnce(false, `value.onChange(callback) is deprecated. Switch to value.on("change", callback).`);
    }
    return this.on("change", subscription);
  }
  on(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = new SubscriptionManager();
    }
    const unsubscribe = this.events[eventName].add(callback);
    if (eventName === "change") {
      return () => {
        unsubscribe();
        frame.read(() => {
          if (!this.events.change.getSize()) {
            this.stop();
          }
        });
      };
    }
    return unsubscribe;
  }
  clearListeners() {
    for (const eventManagers in this.events) {
      this.events[eventManagers].clear();
    }
  }
  attach(passiveEffect, stopPassiveEffect) {
    this.passiveEffect = passiveEffect;
    this.stopPassiveEffect = stopPassiveEffect;
  }
  set(v, render = true) {
    if (!render || !this.passiveEffect) {
      this.updateAndNotify(v, render);
    } else {
      this.passiveEffect(v, this.updateAndNotify);
    }
  }
  setWithVelocity(prev, current, delta) {
    this.set(current);
    this.prev = prev;
    this.timeDelta = delta;
  }
  jump(v) {
    this.updateAndNotify(v);
    this.prev = v;
    this.stop();
    if (this.stopPassiveEffect) this.stopPassiveEffect();
  }
  get() {
    if (collectMotionValues.current) {
      collectMotionValues.current.push(this);
    }
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    return this.canTrackVelocity ? velocityPerSecond(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0;
  }
  start(startAnimation) {
    this.stop();
    return new Promise(resolve => {
      this.hasAnimated = true;
      this.animation = startAnimation(resolve);
      if (this.events.animationStart) {
        this.events.animationStart.notify();
      }
    }).then(() => {
      if (this.events.animationComplete) {
        this.events.animationComplete.notify();
      }
      this.clearAnimation();
    });
  }
  stop() {
    if (this.animation) {
      this.animation.stop();
      if (this.events.animationCancel) {
        this.events.animationCancel.notify();
      }
    }
    this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    this.clearListeners();
    this.stop();
    if (this.stopPassiveEffect) {
      this.stopPassiveEffect();
    }
  }
};
function motionValue(init, options) {
  return new MotionValue(init, options);
}

// node_modules/framer-motion/dist/es/render/dom/value-types/test.mjs
var testValueType = v => type => type.test(v);

// node_modules/framer-motion/dist/es/render/dom/value-types/type-auto.mjs
var auto = {
  test: v => v === "auto",
  parse: v => v
};

// node_modules/framer-motion/dist/es/render/dom/value-types/dimensions.mjs
var dimensionValueTypes = [number, px, percent, degrees, vw, vh, auto];
var findDimensionValueType = v => dimensionValueTypes.find(testValueType(v));

// node_modules/framer-motion/dist/es/render/dom/value-types/find.mjs
var valueTypes = [...dimensionValueTypes, color, complex];
var findValueType = v => valueTypes.find(testValueType(v));

// node_modules/framer-motion/dist/es/render/utils/setters.mjs
function setMotionValue(visualElement, key, value) {
  if (visualElement.hasValue(key)) {
    visualElement.getValue(key).set(value);
  } else {
    visualElement.addValue(key, motionValue(value));
  }
}
function setTarget(visualElement, definition) {
  const resolved = resolveVariant(visualElement, definition);
  let {
    transitionEnd = {},
    transition = {},
    ...target
  } = resolved ? visualElement.makeTargetAnimatable(resolved, false) : {};
  target = {
    ...target,
    ...transitionEnd
  };
  for (const key in target) {
    const value = resolveFinalValueInKeyframes(target[key]);
    setMotionValue(visualElement, key, value);
  }
}
function setVariants(visualElement, variantLabels) {
  const reversedLabels = [...variantLabels].reverse();
  reversedLabels.forEach(key => {
    const variant = visualElement.getVariant(key);
    variant && setTarget(visualElement, variant);
    if (visualElement.variantChildren) {
      visualElement.variantChildren.forEach(child => {
        setVariants(child, variantLabels);
      });
    }
  });
}
function setValues(visualElement, definition) {
  if (Array.isArray(definition)) {
    return setVariants(visualElement, definition);
  } else if (typeof definition === "string") {
    return setVariants(visualElement, [definition]);
  } else {
    setTarget(visualElement, definition);
  }
}
function checkTargetForNewValues(visualElement, target, origin) {
  var _a, _b;
  const newValueKeys = Object.keys(target).filter(key => !visualElement.hasValue(key));
  const numNewValues = newValueKeys.length;
  if (!numNewValues) return;
  for (let i = 0; i < numNewValues; i++) {
    const key = newValueKeys[i];
    const targetValue = target[key];
    let value = null;
    if (Array.isArray(targetValue)) {
      value = targetValue[0];
    }
    if (value === null) {
      value = (_b = (_a = origin[key]) !== null && _a !== void 0 ? _a : visualElement.readValue(key)) !== null && _b !== void 0 ? _b : target[key];
    }
    if (value === void 0 || value === null) continue;
    if (typeof value === "string" && (isNumericalString(value) || isZeroValueString(value))) {
      value = parseFloat(value);
    } else if (!findValueType(value) && complex.test(targetValue)) {
      value = getAnimatableNone2(key, targetValue);
    }
    visualElement.addValue(key, motionValue(value, {
      owner: visualElement
    }));
    if (origin[key] === void 0) {
      origin[key] = value;
    }
    if (value !== null) visualElement.setBaseTarget(key, value);
  }
}
function getOriginFromTransition(key, transition) {
  if (!transition) return;
  const valueTransition = transition[key] || transition["default"] || transition;
  return valueTransition.from;
}
function getOrigin(target, transition, visualElement) {
  const origin = {};
  for (const key in target) {
    const transitionOrigin = getOriginFromTransition(key, transition);
    if (transitionOrigin !== void 0) {
      origin[key] = transitionOrigin;
    } else {
      const value = visualElement.getValue(key);
      if (value) {
        origin[key] = value.get();
      }
    }
  }
  return origin;
}

// node_modules/framer-motion/dist/es/animation/interfaces/visual-element-target.mjs
function shouldBlockAnimation({
  protectedKeys,
  needsAnimating
}, key) {
  const shouldBlock = protectedKeys.hasOwnProperty(key) && needsAnimating[key] !== true;
  needsAnimating[key] = false;
  return shouldBlock;
}
function hasKeyframesChanged(value, target) {
  const current = value.get();
  if (Array.isArray(target)) {
    for (let i = 0; i < target.length; i++) {
      if (target[i] !== current) return true;
    }
  } else {
    return current !== target;
  }
}
function animateTarget(visualElement, definition, {
  delay: delay2 = 0,
  transitionOverride,
  type
} = {}) {
  let {
    transition = visualElement.getDefaultTransition(),
    transitionEnd,
    ...target
  } = visualElement.makeTargetAnimatable(definition);
  const willChange = visualElement.getValue("willChange");
  if (transitionOverride) transition = transitionOverride;
  const animations2 = [];
  const animationTypeState = type && visualElement.animationState && visualElement.animationState.getState()[type];
  for (const key in target) {
    const value = visualElement.getValue(key);
    const valueTarget = target[key];
    if (!value || valueTarget === void 0 || animationTypeState && shouldBlockAnimation(animationTypeState, key)) {
      continue;
    }
    const valueTransition = {
      delay: delay2,
      elapsed: 0,
      ...getValueTransition(transition || {}, key)
    };
    if (window.HandoffAppearAnimations) {
      const appearId = visualElement.getProps()[optimizedAppearDataAttribute];
      if (appearId) {
        const elapsed = window.HandoffAppearAnimations(appearId, key, value, frame);
        if (elapsed !== null) {
          valueTransition.elapsed = elapsed;
          valueTransition.isHandoff = true;
        }
      }
    }
    let canSkip = !valueTransition.isHandoff && !hasKeyframesChanged(value, valueTarget);
    if (valueTransition.type === "spring" && (value.getVelocity() || valueTransition.velocity)) {
      canSkip = false;
    }
    if (value.animation) {
      canSkip = false;
    }
    if (canSkip) continue;
    value.start(animateMotionValue(key, value, valueTarget, visualElement.shouldReduceMotion && transformProps.has(key) ? {
      type: false
    } : valueTransition));
    const animation = value.animation;
    if (isWillChangeMotionValue(willChange)) {
      willChange.add(key);
      animation.then(() => willChange.remove(key));
    }
    animations2.push(animation);
  }
  if (transitionEnd) {
    Promise.all(animations2).then(() => {
      transitionEnd && setTarget(visualElement, transitionEnd);
    });
  }
  return animations2;
}

// node_modules/framer-motion/dist/es/animation/interfaces/visual-element-variant.mjs
function animateVariant(visualElement, variant, options = {}) {
  const resolved = resolveVariant(visualElement, variant, options.custom);
  let {
    transition = visualElement.getDefaultTransition() || {}
  } = resolved || {};
  if (options.transitionOverride) {
    transition = options.transitionOverride;
  }
  const getAnimation = resolved ? () => Promise.all(animateTarget(visualElement, resolved, options)) : () => Promise.resolve();
  const getChildAnimations = visualElement.variantChildren && visualElement.variantChildren.size ? (forwardDelay = 0) => {
    const {
      delayChildren = 0,
      staggerChildren,
      staggerDirection
    } = transition;
    return animateChildren(visualElement, variant, delayChildren + forwardDelay, staggerChildren, staggerDirection, options);
  } : () => Promise.resolve();
  const {
    when
  } = transition;
  if (when) {
    const [first, last] = when === "beforeChildren" ? [getAnimation, getChildAnimations] : [getChildAnimations, getAnimation];
    return first().then(() => last());
  } else {
    return Promise.all([getAnimation(), getChildAnimations(options.delay)]);
  }
}
function animateChildren(visualElement, variant, delayChildren = 0, staggerChildren = 0, staggerDirection = 1, options) {
  const animations2 = [];
  const maxStaggerDuration = (visualElement.variantChildren.size - 1) * staggerChildren;
  const generateStaggerDuration = staggerDirection === 1 ? (i = 0) => i * staggerChildren : (i = 0) => maxStaggerDuration - i * staggerChildren;
  Array.from(visualElement.variantChildren).sort(sortByTreeOrder).forEach((child, i) => {
    child.notify("AnimationStart", variant);
    animations2.push(animateVariant(child, variant, {
      ...options,
      delay: delayChildren + generateStaggerDuration(i)
    }).then(() => child.notify("AnimationComplete", variant)));
  });
  return Promise.all(animations2);
}
function sortByTreeOrder(a, b) {
  return a.sortNodePosition(b);
}

// node_modules/framer-motion/dist/es/animation/interfaces/visual-element.mjs
function animateVisualElement(visualElement, definition, options = {}) {
  visualElement.notify("AnimationStart", definition);
  let animation;
  if (Array.isArray(definition)) {
    const animations2 = definition.map(variant => animateVariant(visualElement, variant, options));
    animation = Promise.all(animations2);
  } else if (typeof definition === "string") {
    animation = animateVariant(visualElement, definition, options);
  } else {
    const resolvedDefinition = typeof definition === "function" ? resolveVariant(visualElement, definition, options.custom) : definition;
    animation = Promise.all(animateTarget(visualElement, resolvedDefinition, options));
  }
  return animation.then(() => visualElement.notify("AnimationComplete", definition));
}

// node_modules/framer-motion/dist/es/render/utils/animation-state.mjs
var reversePriorityOrder = [...variantPriorityOrder].reverse();
var numAnimationTypes = variantPriorityOrder.length;
function animateList(visualElement) {
  return animations2 => Promise.all(animations2.map(({
    animation,
    options
  }) => animateVisualElement(visualElement, animation, options)));
}
function createAnimationState(visualElement) {
  let animate2 = animateList(visualElement);
  const state = createState();
  let isInitialRender = true;
  const buildResolvedTypeValues = (acc, definition) => {
    const resolved = resolveVariant(visualElement, definition);
    if (resolved) {
      const {
        transition,
        transitionEnd,
        ...target
      } = resolved;
      acc = {
        ...acc,
        ...target,
        ...transitionEnd
      };
    }
    return acc;
  };
  function setAnimateFunction(makeAnimator) {
    animate2 = makeAnimator(visualElement);
  }
  function animateChanges(options, changedActiveType) {
    const props = visualElement.getProps();
    const context = visualElement.getVariantContext(true) || {};
    const animations2 = [];
    const removedKeys = /* @__PURE__ */new Set();
    let encounteredKeys = {};
    let removedVariantIndex = Infinity;
    for (let i = 0; i < numAnimationTypes; i++) {
      const type = reversePriorityOrder[i];
      const typeState = state[type];
      const prop = props[type] !== void 0 ? props[type] : context[type];
      const propIsVariant = isVariantLabel(prop);
      const activeDelta = type === changedActiveType ? typeState.isActive : null;
      if (activeDelta === false) removedVariantIndex = i;
      let isInherited = prop === context[type] && prop !== props[type] && propIsVariant;
      if (isInherited && isInitialRender && visualElement.manuallyAnimateOnMount) {
        isInherited = false;
      }
      typeState.protectedKeys = {
        ...encounteredKeys
      };
      if (!typeState.isActive && activeDelta === null || !prop && !typeState.prevProp || isAnimationControls(prop) || typeof prop === "boolean") {
        continue;
      }
      const variantDidChange = checkVariantsDidChange(typeState.prevProp, prop);
      let shouldAnimateType = variantDidChange || type === changedActiveType && typeState.isActive && !isInherited && propIsVariant || i > removedVariantIndex && propIsVariant;
      let handledRemovedValues = false;
      const definitionList = Array.isArray(prop) ? prop : [prop];
      let resolvedValues = definitionList.reduce(buildResolvedTypeValues, {});
      if (activeDelta === false) resolvedValues = {};
      const {
        prevResolvedValues = {}
      } = typeState;
      const allKeys = {
        ...prevResolvedValues,
        ...resolvedValues
      };
      const markToAnimate = key => {
        shouldAnimateType = true;
        if (removedKeys.has(key)) {
          handledRemovedValues = true;
          removedKeys.delete(key);
        }
        typeState.needsAnimating[key] = true;
      };
      for (const key in allKeys) {
        const next = resolvedValues[key];
        const prev = prevResolvedValues[key];
        if (encounteredKeys.hasOwnProperty(key)) continue;
        let valueHasChanged = false;
        if (isKeyframesTarget(next) && isKeyframesTarget(prev)) {
          valueHasChanged = !shallowCompare(next, prev);
        } else {
          valueHasChanged = next !== prev;
        }
        if (valueHasChanged) {
          if (next !== void 0) {
            markToAnimate(key);
          } else {
            removedKeys.add(key);
          }
        } else if (next !== void 0 && removedKeys.has(key)) {
          markToAnimate(key);
        } else {
          typeState.protectedKeys[key] = true;
        }
      }
      typeState.prevProp = prop;
      typeState.prevResolvedValues = resolvedValues;
      if (typeState.isActive) {
        encounteredKeys = {
          ...encounteredKeys,
          ...resolvedValues
        };
      }
      if (isInitialRender && visualElement.blockInitialAnimation) {
        shouldAnimateType = false;
      }
      if (shouldAnimateType && (!isInherited || handledRemovedValues)) {
        animations2.push(...definitionList.map(animation => ({
          animation,
          options: {
            type,
            ...options
          }
        })));
      }
    }
    if (removedKeys.size) {
      const fallbackAnimation = {};
      removedKeys.forEach(key => {
        const fallbackTarget = visualElement.getBaseTarget(key);
        if (fallbackTarget !== void 0) {
          fallbackAnimation[key] = fallbackTarget;
        }
      });
      animations2.push({
        animation: fallbackAnimation
      });
    }
    let shouldAnimate = Boolean(animations2.length);
    if (isInitialRender && (props.initial === false || props.initial === props.animate) && !visualElement.manuallyAnimateOnMount) {
      shouldAnimate = false;
    }
    isInitialRender = false;
    return shouldAnimate ? animate2(animations2) : Promise.resolve();
  }
  function setActive(type, isActive, options) {
    var _a;
    if (state[type].isActive === isActive) return Promise.resolve();
    (_a = visualElement.variantChildren) === null || _a === void 0 ? void 0 : _a.forEach(child => {
      var _a2;
      return (_a2 = child.animationState) === null || _a2 === void 0 ? void 0 : _a2.setActive(type, isActive);
    });
    state[type].isActive = isActive;
    const animations2 = animateChanges(options, type);
    for (const key in state) {
      state[key].protectedKeys = {};
    }
    return animations2;
  }
  return {
    animateChanges,
    setActive,
    setAnimateFunction,
    getState: () => state
  };
}
function checkVariantsDidChange(prev, next) {
  if (typeof next === "string") {
    return next !== prev;
  } else if (Array.isArray(next)) {
    return !shallowCompare(next, prev);
  }
  return false;
}
function createTypeState(isActive = false) {
  return {
    isActive,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function createState() {
  return {
    animate: createTypeState(true),
    whileInView: createTypeState(),
    whileHover: createTypeState(),
    whileTap: createTypeState(),
    whileDrag: createTypeState(),
    whileFocus: createTypeState(),
    exit: createTypeState()
  };
}

// node_modules/framer-motion/dist/es/motion/features/animation/index.mjs
var AnimationFeature = class extends Feature {
  constructor(node) {
    super(node);
    node.animationState || (node.animationState = createAnimationState(node));
  }
  updateAnimationControlsSubscription() {
    const {
      animate: animate2
    } = this.node.getProps();
    this.unmount();
    if (isAnimationControls(animate2)) {
      this.unmount = animate2.subscribe(this.node);
    }
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const {
      animate: animate2
    } = this.node.getProps();
    const {
      animate: prevAnimate
    } = this.node.prevProps || {};
    if (animate2 !== prevAnimate) {
      this.updateAnimationControlsSubscription();
    }
  }
  unmount() {}
};

// node_modules/framer-motion/dist/es/motion/features/animation/exit.mjs
var id = 0;
var ExitAnimationFeature = class extends Feature {
  constructor() {
    super(...arguments);
    this.id = id++;
  }
  update() {
    if (!this.node.presenceContext) return;
    const {
      isPresent: isPresent2,
      onExitComplete,
      custom
    } = this.node.presenceContext;
    const {
      isPresent: prevIsPresent
    } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || isPresent2 === prevIsPresent) {
      return;
    }
    const exitAnimation = this.node.animationState.setActive("exit", !isPresent2, {
      custom: custom !== null && custom !== void 0 ? custom : this.node.getProps().custom
    });
    if (onExitComplete && !isPresent2) {
      exitAnimation.then(() => onExitComplete(this.id));
    }
  }
  mount() {
    const {
      register
    } = this.node.presenceContext || {};
    if (register) {
      this.unmount = register(this.id);
    }
  }
  unmount() {}
};

// node_modules/framer-motion/dist/es/motion/features/animations.mjs
var animations = {
  animation: {
    Feature: AnimationFeature
  },
  exit: {
    Feature: ExitAnimationFeature
  }
};

// node_modules/framer-motion/dist/es/utils/distance.mjs
var distance = (a, b) => Math.abs(a - b);
function distance2D(a, b) {
  const xDelta = distance(a.x, b.x);
  const yDelta = distance(a.y, b.y);
  return Math.sqrt(xDelta ** 2 + yDelta ** 2);
}

// node_modules/framer-motion/dist/es/gestures/pan/PanSession.mjs
var PanSession = class {
  constructor(event, handlers, {
    transformPagePoint,
    contextWindow,
    dragSnapToOrigin = false
  } = {}) {
    this.startEvent = null;
    this.lastMoveEvent = null;
    this.lastMoveEventInfo = null;
    this.handlers = {};
    this.contextWindow = window;
    this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
      const info2 = getPanInfo(this.lastMoveEventInfo, this.history);
      const isPanStarted = this.startEvent !== null;
      const isDistancePastThreshold = distance2D(info2.offset, {
        x: 0,
        y: 0
      }) >= 3;
      if (!isPanStarted && !isDistancePastThreshold) return;
      const {
        point: point3
      } = info2;
      const {
        timestamp: timestamp2
      } = frameData;
      this.history.push({
        ...point3,
        timestamp: timestamp2
      });
      const {
        onStart,
        onMove
      } = this.handlers;
      if (!isPanStarted) {
        onStart && onStart(this.lastMoveEvent, info2);
        this.startEvent = this.lastMoveEvent;
      }
      onMove && onMove(this.lastMoveEvent, info2);
    };
    this.handlePointerMove = (event2, info2) => {
      this.lastMoveEvent = event2;
      this.lastMoveEventInfo = transformPoint(info2, this.transformPagePoint);
      frame.update(this.updatePoint, true);
    };
    this.handlePointerUp = (event2, info2) => {
      this.end();
      const {
        onEnd,
        onSessionEnd,
        resumeAnimation
      } = this.handlers;
      if (this.dragSnapToOrigin) resumeAnimation && resumeAnimation();
      if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
      const panInfo = getPanInfo(event2.type === "pointercancel" ? this.lastMoveEventInfo : transformPoint(info2, this.transformPagePoint), this.history);
      if (this.startEvent && onEnd) {
        onEnd(event2, panInfo);
      }
      onSessionEnd && onSessionEnd(event2, panInfo);
    };
    if (!isPrimaryPointer(event)) return;
    this.dragSnapToOrigin = dragSnapToOrigin;
    this.handlers = handlers;
    this.transformPagePoint = transformPagePoint;
    this.contextWindow = contextWindow || window;
    const info = extractEventInfo(event);
    const initialInfo = transformPoint(info, this.transformPagePoint);
    const {
      point: point2
    } = initialInfo;
    const {
      timestamp
    } = frameData;
    this.history = [{
      ...point2,
      timestamp
    }];
    const {
      onSessionStart
    } = handlers;
    onSessionStart && onSessionStart(event, getPanInfo(initialInfo, this.history));
    this.removeListeners = pipe(addPointerEvent(this.contextWindow, "pointermove", this.handlePointerMove), addPointerEvent(this.contextWindow, "pointerup", this.handlePointerUp), addPointerEvent(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(handlers) {
    this.handlers = handlers;
  }
  end() {
    this.removeListeners && this.removeListeners();
    cancelFrame(this.updatePoint);
  }
};
function transformPoint(info, transformPagePoint) {
  return transformPagePoint ? {
    point: transformPagePoint(info.point)
  } : info;
}
function subtractPoint(a, b) {
  return {
    x: a.x - b.x,
    y: a.y - b.y
  };
}
function getPanInfo({
  point: point2
}, history) {
  return {
    point: point2,
    delta: subtractPoint(point2, lastDevicePoint(history)),
    offset: subtractPoint(point2, startDevicePoint(history)),
    velocity: getVelocity2(history, 0.1)
  };
}
function startDevicePoint(history) {
  return history[0];
}
function lastDevicePoint(history) {
  return history[history.length - 1];
}
function getVelocity2(history, timeDelta) {
  if (history.length < 2) {
    return {
      x: 0,
      y: 0
    };
  }
  let i = history.length - 1;
  let timestampedPoint = null;
  const lastPoint = lastDevicePoint(history);
  while (i >= 0) {
    timestampedPoint = history[i];
    if (lastPoint.timestamp - timestampedPoint.timestamp > secondsToMilliseconds(timeDelta)) {
      break;
    }
    i--;
  }
  if (!timestampedPoint) {
    return {
      x: 0,
      y: 0
    };
  }
  const time = millisecondsToSeconds(lastPoint.timestamp - timestampedPoint.timestamp);
  if (time === 0) {
    return {
      x: 0,
      y: 0
    };
  }
  const currentVelocity = {
    x: (lastPoint.x - timestampedPoint.x) / time,
    y: (lastPoint.y - timestampedPoint.y) / time
  };
  if (currentVelocity.x === Infinity) {
    currentVelocity.x = 0;
  }
  if (currentVelocity.y === Infinity) {
    currentVelocity.y = 0;
  }
  return currentVelocity;
}

// node_modules/framer-motion/dist/es/projection/geometry/delta-calc.mjs
function calcLength(axis) {
  return axis.max - axis.min;
}
function isNear(value, target = 0, maxDistance = 0.01) {
  return Math.abs(value - target) <= maxDistance;
}
function calcAxisDelta(delta, source, target, origin = 0.5) {
  delta.origin = origin;
  delta.originPoint = mix(source.min, source.max, delta.origin);
  delta.scale = calcLength(target) / calcLength(source);
  if (isNear(delta.scale, 1, 1e-4) || isNaN(delta.scale)) delta.scale = 1;
  delta.translate = mix(target.min, target.max, delta.origin) - delta.originPoint;
  if (isNear(delta.translate) || isNaN(delta.translate)) delta.translate = 0;
}
function calcBoxDelta(delta, source, target, origin) {
  calcAxisDelta(delta.x, source.x, target.x, origin ? origin.originX : void 0);
  calcAxisDelta(delta.y, source.y, target.y, origin ? origin.originY : void 0);
}
function calcRelativeAxis(target, relative, parent) {
  target.min = parent.min + relative.min;
  target.max = target.min + calcLength(relative);
}
function calcRelativeBox(target, relative, parent) {
  calcRelativeAxis(target.x, relative.x, parent.x);
  calcRelativeAxis(target.y, relative.y, parent.y);
}
function calcRelativeAxisPosition(target, layout2, parent) {
  target.min = layout2.min - parent.min;
  target.max = target.min + calcLength(layout2);
}
function calcRelativePosition(target, layout2, parent) {
  calcRelativeAxisPosition(target.x, layout2.x, parent.x);
  calcRelativeAxisPosition(target.y, layout2.y, parent.y);
}

// node_modules/framer-motion/dist/es/gestures/drag/utils/constraints.mjs
function applyConstraints(point2, {
  min,
  max
}, elastic) {
  if (min !== void 0 && point2 < min) {
    point2 = elastic ? mix(min, point2, elastic.min) : Math.max(point2, min);
  } else if (max !== void 0 && point2 > max) {
    point2 = elastic ? mix(max, point2, elastic.max) : Math.min(point2, max);
  }
  return point2;
}
function calcRelativeAxisConstraints(axis, min, max) {
  return {
    min: min !== void 0 ? axis.min + min : void 0,
    max: max !== void 0 ? axis.max + max - (axis.max - axis.min) : void 0
  };
}
function calcRelativeConstraints(layoutBox, {
  top,
  left,
  bottom,
  right
}) {
  return {
    x: calcRelativeAxisConstraints(layoutBox.x, left, right),
    y: calcRelativeAxisConstraints(layoutBox.y, top, bottom)
  };
}
function calcViewportAxisConstraints(layoutAxis, constraintsAxis) {
  let min = constraintsAxis.min - layoutAxis.min;
  let max = constraintsAxis.max - layoutAxis.max;
  if (constraintsAxis.max - constraintsAxis.min < layoutAxis.max - layoutAxis.min) {
    [min, max] = [max, min];
  }
  return {
    min,
    max
  };
}
function calcViewportConstraints(layoutBox, constraintsBox) {
  return {
    x: calcViewportAxisConstraints(layoutBox.x, constraintsBox.x),
    y: calcViewportAxisConstraints(layoutBox.y, constraintsBox.y)
  };
}
function calcOrigin2(source, target) {
  let origin = 0.5;
  const sourceLength = calcLength(source);
  const targetLength = calcLength(target);
  if (targetLength > sourceLength) {
    origin = progress(target.min, target.max - sourceLength, source.min);
  } else if (sourceLength > targetLength) {
    origin = progress(source.min, source.max - targetLength, target.min);
  }
  return clamp(0, 1, origin);
}
function rebaseAxisConstraints(layout2, constraints) {
  const relativeConstraints = {};
  if (constraints.min !== void 0) {
    relativeConstraints.min = constraints.min - layout2.min;
  }
  if (constraints.max !== void 0) {
    relativeConstraints.max = constraints.max - layout2.min;
  }
  return relativeConstraints;
}
var defaultElastic = 0.35;
function resolveDragElastic(dragElastic = defaultElastic) {
  if (dragElastic === false) {
    dragElastic = 0;
  } else if (dragElastic === true) {
    dragElastic = defaultElastic;
  }
  return {
    x: resolveAxisElastic(dragElastic, "left", "right"),
    y: resolveAxisElastic(dragElastic, "top", "bottom")
  };
}
function resolveAxisElastic(dragElastic, minLabel, maxLabel) {
  return {
    min: resolvePointElastic(dragElastic, minLabel),
    max: resolvePointElastic(dragElastic, maxLabel)
  };
}
function resolvePointElastic(dragElastic, label) {
  return typeof dragElastic === "number" ? dragElastic : dragElastic[label] || 0;
}

// node_modules/framer-motion/dist/es/projection/geometry/models.mjs
var createAxisDelta = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
});
var createDelta = () => ({
  x: createAxisDelta(),
  y: createAxisDelta()
});
var createAxis = () => ({
  min: 0,
  max: 0
});
var createBox = () => ({
  x: createAxis(),
  y: createAxis()
});

// node_modules/framer-motion/dist/es/projection/utils/each-axis.mjs
function eachAxis(callback) {
  return [callback("x"), callback("y")];
}

// node_modules/framer-motion/dist/es/projection/geometry/conversion.mjs
function convertBoundingBoxToBox({
  top,
  left,
  right,
  bottom
}) {
  return {
    x: {
      min: left,
      max: right
    },
    y: {
      min: top,
      max: bottom
    }
  };
}
function convertBoxToBoundingBox({
  x,
  y
}) {
  return {
    top: y.min,
    right: x.max,
    bottom: y.max,
    left: x.min
  };
}
function transformBoxPoints(point2, transformPoint2) {
  if (!transformPoint2) return point2;
  const topLeft = transformPoint2({
    x: point2.left,
    y: point2.top
  });
  const bottomRight = transformPoint2({
    x: point2.right,
    y: point2.bottom
  });
  return {
    top: topLeft.y,
    left: topLeft.x,
    bottom: bottomRight.y,
    right: bottomRight.x
  };
}

// node_modules/framer-motion/dist/es/projection/utils/has-transform.mjs
function isIdentityScale(scale2) {
  return scale2 === void 0 || scale2 === 1;
}
function hasScale({
  scale: scale2,
  scaleX,
  scaleY
}) {
  return !isIdentityScale(scale2) || !isIdentityScale(scaleX) || !isIdentityScale(scaleY);
}
function hasTransform(values) {
  return hasScale(values) || has2DTranslate(values) || values.z || values.rotate || values.rotateX || values.rotateY;
}
function has2DTranslate(values) {
  return is2DTranslate(values.x) || is2DTranslate(values.y);
}
function is2DTranslate(value) {
  return value && value !== "0%";
}

// node_modules/framer-motion/dist/es/projection/geometry/delta-apply.mjs
function scalePoint(point2, scale2, originPoint) {
  const distanceFromOrigin = point2 - originPoint;
  const scaled = scale2 * distanceFromOrigin;
  return originPoint + scaled;
}
function applyPointDelta(point2, translate, scale2, originPoint, boxScale) {
  if (boxScale !== void 0) {
    point2 = scalePoint(point2, boxScale, originPoint);
  }
  return scalePoint(point2, scale2, originPoint) + translate;
}
function applyAxisDelta(axis, translate = 0, scale2 = 1, originPoint, boxScale) {
  axis.min = applyPointDelta(axis.min, translate, scale2, originPoint, boxScale);
  axis.max = applyPointDelta(axis.max, translate, scale2, originPoint, boxScale);
}
function applyBoxDelta(box, {
  x,
  y
}) {
  applyAxisDelta(box.x, x.translate, x.scale, x.originPoint);
  applyAxisDelta(box.y, y.translate, y.scale, y.originPoint);
}
function applyTreeDeltas(box, treeScale, treePath, isSharedTransition = false) {
  const treeLength = treePath.length;
  if (!treeLength) return;
  treeScale.x = treeScale.y = 1;
  let node;
  let delta;
  for (let i = 0; i < treeLength; i++) {
    node = treePath[i];
    delta = node.projectionDelta;
    const instance = node.instance;
    if (instance && instance.style && instance.style.display === "contents") {
      continue;
    }
    if (isSharedTransition && node.options.layoutScroll && node.scroll && node !== node.root) {
      transformBox(box, {
        x: -node.scroll.offset.x,
        y: -node.scroll.offset.y
      });
    }
    if (delta) {
      treeScale.x *= delta.x.scale;
      treeScale.y *= delta.y.scale;
      applyBoxDelta(box, delta);
    }
    if (isSharedTransition && hasTransform(node.latestValues)) {
      transformBox(box, node.latestValues);
    }
  }
  treeScale.x = snapToDefault(treeScale.x);
  treeScale.y = snapToDefault(treeScale.y);
}
function snapToDefault(scale2) {
  if (Number.isInteger(scale2)) return scale2;
  return scale2 > 1.0000000000001 || scale2 < 0.999999999999 ? scale2 : 1;
}
function translateAxis(axis, distance2) {
  axis.min = axis.min + distance2;
  axis.max = axis.max + distance2;
}
function transformAxis(axis, transforms, [key, scaleKey, originKey]) {
  const axisOrigin = transforms[originKey] !== void 0 ? transforms[originKey] : 0.5;
  const originPoint = mix(axis.min, axis.max, axisOrigin);
  applyAxisDelta(axis, transforms[key], transforms[scaleKey], originPoint, transforms.scale);
}
var xKeys = ["x", "scaleX", "originX"];
var yKeys = ["y", "scaleY", "originY"];
function transformBox(box, transform2) {
  transformAxis(box.x, transform2, xKeys);
  transformAxis(box.y, transform2, yKeys);
}

// node_modules/framer-motion/dist/es/projection/utils/measure.mjs
function measureViewportBox(instance, transformPoint2) {
  return convertBoundingBoxToBox(transformBoxPoints(instance.getBoundingClientRect(), transformPoint2));
}
function measurePageBox(element, rootProjectionNode2, transformPagePoint) {
  const viewportBox = measureViewportBox(element, transformPagePoint);
  const {
    scroll: scroll2
  } = rootProjectionNode2;
  if (scroll2) {
    translateAxis(viewportBox.x, scroll2.offset.x);
    translateAxis(viewportBox.y, scroll2.offset.y);
  }
  return viewportBox;
}

// node_modules/framer-motion/dist/es/utils/get-context-window.mjs
var getContextWindow = ({
  current
}) => {
  return current ? current.ownerDocument.defaultView : null;
};

// node_modules/framer-motion/dist/es/gestures/drag/VisualElementDragControls.mjs
var elementDragControls = /* @__PURE__ */new WeakMap();
var VisualElementDragControls = class {
  constructor(visualElement) {
    this.openGlobalLock = null;
    this.isDragging = false;
    this.currentDirection = null;
    this.originPoint = {
      x: 0,
      y: 0
    };
    this.constraints = false;
    this.hasMutatedConstraints = false;
    this.elastic = createBox();
    this.visualElement = visualElement;
  }
  start(originEvent, {
    snapToCursor = false
  } = {}) {
    const {
      presenceContext
    } = this.visualElement;
    if (presenceContext && presenceContext.isPresent === false) return;
    const onSessionStart = event => {
      const {
        dragSnapToOrigin: dragSnapToOrigin2
      } = this.getProps();
      dragSnapToOrigin2 ? this.pauseAnimation() : this.stopAnimation();
      if (snapToCursor) {
        this.snapToCursor(extractEventInfo(event, "page").point);
      }
    };
    const onStart = (event, info) => {
      const {
        drag: drag2,
        dragPropagation,
        onDragStart
      } = this.getProps();
      if (drag2 && !dragPropagation) {
        if (this.openGlobalLock) this.openGlobalLock();
        this.openGlobalLock = getGlobalLock(drag2);
        if (!this.openGlobalLock) return;
      }
      this.isDragging = true;
      this.currentDirection = null;
      this.resolveConstraints();
      if (this.visualElement.projection) {
        this.visualElement.projection.isAnimationBlocked = true;
        this.visualElement.projection.target = void 0;
      }
      eachAxis(axis => {
        let current = this.getAxisMotionValue(axis).get() || 0;
        if (percent.test(current)) {
          const {
            projection
          } = this.visualElement;
          if (projection && projection.layout) {
            const measuredAxis = projection.layout.layoutBox[axis];
            if (measuredAxis) {
              const length = calcLength(measuredAxis);
              current = length * (parseFloat(current) / 100);
            }
          }
        }
        this.originPoint[axis] = current;
      });
      if (onDragStart) {
        frame.update(() => onDragStart(event, info), false, true);
      }
      const {
        animationState
      } = this.visualElement;
      animationState && animationState.setActive("whileDrag", true);
    };
    const onMove = (event, info) => {
      const {
        dragPropagation,
        dragDirectionLock,
        onDirectionLock,
        onDrag
      } = this.getProps();
      if (!dragPropagation && !this.openGlobalLock) return;
      const {
        offset
      } = info;
      if (dragDirectionLock && this.currentDirection === null) {
        this.currentDirection = getCurrentDirection(offset);
        if (this.currentDirection !== null) {
          onDirectionLock && onDirectionLock(this.currentDirection);
        }
        return;
      }
      this.updateAxis("x", info.point, offset);
      this.updateAxis("y", info.point, offset);
      this.visualElement.render();
      onDrag && onDrag(event, info);
    };
    const onSessionEnd = (event, info) => this.stop(event, info);
    const resumeAnimation = () => eachAxis(axis => {
      var _a;
      return this.getAnimationState(axis) === "paused" && ((_a = this.getAxisMotionValue(axis).animation) === null || _a === void 0 ? void 0 : _a.play());
    });
    const {
      dragSnapToOrigin
    } = this.getProps();
    this.panSession = new PanSession(originEvent, {
      onSessionStart,
      onStart,
      onMove,
      onSessionEnd,
      resumeAnimation
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin,
      contextWindow: getContextWindow(this.visualElement)
    });
  }
  stop(event, info) {
    const isDragging = this.isDragging;
    this.cancel();
    if (!isDragging) return;
    const {
      velocity
    } = info;
    this.startAnimation(velocity);
    const {
      onDragEnd
    } = this.getProps();
    if (onDragEnd) {
      frame.update(() => onDragEnd(event, info));
    }
  }
  cancel() {
    this.isDragging = false;
    const {
      projection,
      animationState
    } = this.visualElement;
    if (projection) {
      projection.isAnimationBlocked = false;
    }
    this.panSession && this.panSession.end();
    this.panSession = void 0;
    const {
      dragPropagation
    } = this.getProps();
    if (!dragPropagation && this.openGlobalLock) {
      this.openGlobalLock();
      this.openGlobalLock = null;
    }
    animationState && animationState.setActive("whileDrag", false);
  }
  updateAxis(axis, _point, offset) {
    const {
      drag: drag2
    } = this.getProps();
    if (!offset || !shouldDrag(axis, drag2, this.currentDirection)) return;
    const axisValue = this.getAxisMotionValue(axis);
    let next = this.originPoint[axis] + offset[axis];
    if (this.constraints && this.constraints[axis]) {
      next = applyConstraints(next, this.constraints[axis], this.elastic[axis]);
    }
    axisValue.set(next);
  }
  resolveConstraints() {
    var _a;
    const {
      dragConstraints,
      dragElastic
    } = this.getProps();
    const layout2 = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(false) : (_a = this.visualElement.projection) === null || _a === void 0 ? void 0 : _a.layout;
    const prevConstraints = this.constraints;
    if (dragConstraints && isRefObject(dragConstraints)) {
      if (!this.constraints) {
        this.constraints = this.resolveRefConstraints();
      }
    } else {
      if (dragConstraints && layout2) {
        this.constraints = calcRelativeConstraints(layout2.layoutBox, dragConstraints);
      } else {
        this.constraints = false;
      }
    }
    this.elastic = resolveDragElastic(dragElastic);
    if (prevConstraints !== this.constraints && layout2 && this.constraints && !this.hasMutatedConstraints) {
      eachAxis(axis => {
        if (this.getAxisMotionValue(axis)) {
          this.constraints[axis] = rebaseAxisConstraints(layout2.layoutBox[axis], this.constraints[axis]);
        }
      });
    }
  }
  resolveRefConstraints() {
    const {
      dragConstraints: constraints,
      onMeasureDragConstraints
    } = this.getProps();
    if (!constraints || !isRefObject(constraints)) return false;
    const constraintsElement = constraints.current;
    invariant(constraintsElement !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
    const {
      projection
    } = this.visualElement;
    if (!projection || !projection.layout) return false;
    const constraintsBox = measurePageBox(constraintsElement, projection.root, this.visualElement.getTransformPagePoint());
    let measuredConstraints = calcViewportConstraints(projection.layout.layoutBox, constraintsBox);
    if (onMeasureDragConstraints) {
      const userConstraints = onMeasureDragConstraints(convertBoxToBoundingBox(measuredConstraints));
      this.hasMutatedConstraints = !!userConstraints;
      if (userConstraints) {
        measuredConstraints = convertBoundingBoxToBox(userConstraints);
      }
    }
    return measuredConstraints;
  }
  startAnimation(velocity) {
    const {
      drag: drag2,
      dragMomentum,
      dragElastic,
      dragTransition,
      dragSnapToOrigin,
      onDragTransitionEnd
    } = this.getProps();
    const constraints = this.constraints || {};
    const momentumAnimations = eachAxis(axis => {
      if (!shouldDrag(axis, drag2, this.currentDirection)) {
        return;
      }
      let transition = constraints && constraints[axis] || {};
      if (dragSnapToOrigin) transition = {
        min: 0,
        max: 0
      };
      const bounceStiffness = dragElastic ? 200 : 1e6;
      const bounceDamping = dragElastic ? 40 : 1e7;
      const inertia2 = {
        type: "inertia",
        velocity: dragMomentum ? velocity[axis] : 0,
        bounceStiffness,
        bounceDamping,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...dragTransition,
        ...transition
      };
      return this.startAxisValueAnimation(axis, inertia2);
    });
    return Promise.all(momentumAnimations).then(onDragTransitionEnd);
  }
  startAxisValueAnimation(axis, transition) {
    const axisValue = this.getAxisMotionValue(axis);
    return axisValue.start(animateMotionValue(axis, axisValue, 0, transition));
  }
  stopAnimation() {
    eachAxis(axis => this.getAxisMotionValue(axis).stop());
  }
  pauseAnimation() {
    eachAxis(axis => {
      var _a;
      return (_a = this.getAxisMotionValue(axis).animation) === null || _a === void 0 ? void 0 : _a.pause();
    });
  }
  getAnimationState(axis) {
    var _a;
    return (_a = this.getAxisMotionValue(axis).animation) === null || _a === void 0 ? void 0 : _a.state;
  }
  getAxisMotionValue(axis) {
    const dragKey = "_drag" + axis.toUpperCase();
    const props = this.visualElement.getProps();
    const externalMotionValue = props[dragKey];
    return externalMotionValue ? externalMotionValue : this.visualElement.getValue(axis, (props.initial ? props.initial[axis] : void 0) || 0);
  }
  snapToCursor(point2) {
    eachAxis(axis => {
      const {
        drag: drag2
      } = this.getProps();
      if (!shouldDrag(axis, drag2, this.currentDirection)) return;
      const {
        projection
      } = this.visualElement;
      const axisValue = this.getAxisMotionValue(axis);
      if (projection && projection.layout) {
        const {
          min,
          max
        } = projection.layout.layoutBox[axis];
        axisValue.set(point2[axis] - mix(min, max, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const {
      drag: drag2,
      dragConstraints
    } = this.getProps();
    const {
      projection
    } = this.visualElement;
    if (!isRefObject(dragConstraints) || !projection || !this.constraints) return;
    this.stopAnimation();
    const boxProgress = {
      x: 0,
      y: 0
    };
    eachAxis(axis => {
      const axisValue = this.getAxisMotionValue(axis);
      if (axisValue) {
        const latest = axisValue.get();
        boxProgress[axis] = calcOrigin2({
          min: latest,
          max: latest
        }, this.constraints[axis]);
      }
    });
    const {
      transformTemplate
    } = this.visualElement.getProps();
    this.visualElement.current.style.transform = transformTemplate ? transformTemplate({}, "") : "none";
    projection.root && projection.root.updateScroll();
    projection.updateLayout();
    this.resolveConstraints();
    eachAxis(axis => {
      if (!shouldDrag(axis, drag2, null)) return;
      const axisValue = this.getAxisMotionValue(axis);
      const {
        min,
        max
      } = this.constraints[axis];
      axisValue.set(mix(min, max, boxProgress[axis]));
    });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    elementDragControls.set(this.visualElement, this);
    const element = this.visualElement.current;
    const stopPointerListener = addPointerEvent(element, "pointerdown", event => {
      const {
        drag: drag2,
        dragListener = true
      } = this.getProps();
      drag2 && dragListener && this.start(event);
    });
    const measureDragConstraints = () => {
      const {
        dragConstraints
      } = this.getProps();
      if (isRefObject(dragConstraints)) {
        this.constraints = this.resolveRefConstraints();
      }
    };
    const {
      projection
    } = this.visualElement;
    const stopMeasureLayoutListener = projection.addEventListener("measure", measureDragConstraints);
    if (projection && !projection.layout) {
      projection.root && projection.root.updateScroll();
      projection.updateLayout();
    }
    measureDragConstraints();
    const stopResizeListener = addDomEvent(window, "resize", () => this.scalePositionWithinConstraints());
    const stopLayoutUpdateListener = projection.addEventListener("didUpdate", ({
      delta,
      hasLayoutChanged
    }) => {
      if (this.isDragging && hasLayoutChanged) {
        eachAxis(axis => {
          const motionValue2 = this.getAxisMotionValue(axis);
          if (!motionValue2) return;
          this.originPoint[axis] += delta[axis].translate;
          motionValue2.set(motionValue2.get() + delta[axis].translate);
        });
        this.visualElement.render();
      }
    });
    return () => {
      stopResizeListener();
      stopPointerListener();
      stopMeasureLayoutListener();
      stopLayoutUpdateListener && stopLayoutUpdateListener();
    };
  }
  getProps() {
    const props = this.visualElement.getProps();
    const {
      drag: drag2 = false,
      dragDirectionLock = false,
      dragPropagation = false,
      dragConstraints = false,
      dragElastic = defaultElastic,
      dragMomentum = true
    } = props;
    return {
      ...props,
      drag: drag2,
      dragDirectionLock,
      dragPropagation,
      dragConstraints,
      dragElastic,
      dragMomentum
    };
  }
};
function shouldDrag(direction, drag2, currentDirection) {
  return (drag2 === true || drag2 === direction) && (currentDirection === null || currentDirection === direction);
}
function getCurrentDirection(offset, lockThreshold = 10) {
  let direction = null;
  if (Math.abs(offset.y) > lockThreshold) {
    direction = "y";
  } else if (Math.abs(offset.x) > lockThreshold) {
    direction = "x";
  }
  return direction;
}

// node_modules/framer-motion/dist/es/gestures/drag/index.mjs
var DragGesture = class extends Feature {
  constructor(node) {
    super(node);
    this.removeGroupControls = noop;
    this.removeListeners = noop;
    this.controls = new VisualElementDragControls(node);
  }
  mount() {
    const {
      dragControls
    } = this.node.getProps();
    if (dragControls) {
      this.removeGroupControls = dragControls.subscribe(this.controls);
    }
    this.removeListeners = this.controls.addListeners() || noop;
  }
  unmount() {
    this.removeGroupControls();
    this.removeListeners();
  }
};

// node_modules/framer-motion/dist/es/gestures/pan/index.mjs
var asyncHandler = handler => (event, info) => {
  if (handler) {
    frame.update(() => handler(event, info));
  }
};
var PanGesture = class extends Feature {
  constructor() {
    super(...arguments);
    this.removePointerDownListener = noop;
  }
  onPointerDown(pointerDownEvent) {
    this.session = new PanSession(pointerDownEvent, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: getContextWindow(this.node)
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart,
      onPanStart,
      onPan,
      onPanEnd
    } = this.node.getProps();
    return {
      onSessionStart: asyncHandler(onPanSessionStart),
      onStart: asyncHandler(onPanStart),
      onMove: onPan,
      onEnd: (event, info) => {
        delete this.session;
        if (onPanEnd) {
          frame.update(() => onPanEnd(event, info));
        }
      }
    };
  }
  mount() {
    this.removePointerDownListener = addPointerEvent(this.node.current, "pointerdown", event => this.onPointerDown(event));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener();
    this.session && this.session.end();
  }
};

// node_modules/framer-motion/dist/es/components/AnimatePresence/use-presence.mjs
var import_react17 = require("react@18.2.0");
function usePresence() {
  const context = (0, import_react17.useContext)(PresenceContext);
  if (context === null) return [true, null];
  const {
    isPresent: isPresent2,
    onExitComplete,
    register
  } = context;
  const id4 = (0, import_react17.useId)();
  (0, import_react17.useEffect)(() => register(id4), []);
  const safeToRemove = () => onExitComplete && onExitComplete(id4);
  return !isPresent2 && onExitComplete ? [false, safeToRemove] : [true];
}
function useIsPresent() {
  return isPresent((0, import_react17.useContext)(PresenceContext));
}
function isPresent(context) {
  return context === null ? true : context.isPresent;
}

// node_modules/framer-motion/dist/es/projection/node/state.mjs
var globalProjectionState = {
  hasAnimatedSinceResize: true,
  hasEverUpdated: false
};

// node_modules/framer-motion/dist/es/projection/styles/scale-border-radius.mjs
function pixelsToPercent(pixels, axis) {
  if (axis.max === axis.min) return 0;
  return pixels / (axis.max - axis.min) * 100;
}
var correctBorderRadius = {
  correct: (latest, node) => {
    if (!node.target) return latest;
    if (typeof latest === "string") {
      if (px.test(latest)) {
        latest = parseFloat(latest);
      } else {
        return latest;
      }
    }
    const x = pixelsToPercent(latest, node.target.x);
    const y = pixelsToPercent(latest, node.target.y);
    return `${x}% ${y}%`;
  }
};

// node_modules/framer-motion/dist/es/projection/styles/scale-box-shadow.mjs
var correctBoxShadow = {
  correct: (latest, {
    treeScale,
    projectionDelta
  }) => {
    const original = latest;
    const shadow = complex.parse(latest);
    if (shadow.length > 5) return original;
    const template = complex.createTransformer(latest);
    const offset = typeof shadow[0] !== "number" ? 1 : 0;
    const xScale = projectionDelta.x.scale * treeScale.x;
    const yScale = projectionDelta.y.scale * treeScale.y;
    shadow[0 + offset] /= xScale;
    shadow[1 + offset] /= yScale;
    const averageScale = mix(xScale, yScale, 0.5);
    if (typeof shadow[2 + offset] === "number") shadow[2 + offset] /= averageScale;
    if (typeof shadow[3 + offset] === "number") shadow[3 + offset] /= averageScale;
    return template(shadow);
  }
};

// node_modules/framer-motion/dist/es/motion/features/layout/MeasureLayout.mjs
var import_react18 = __toESM(require("react@18.2.0"), 0);
var MeasureLayoutWithContext = class extends import_react18.default.Component {
  componentDidMount() {
    const {
      visualElement,
      layoutGroup,
      switchLayoutGroup,
      layoutId
    } = this.props;
    const {
      projection
    } = visualElement;
    addScaleCorrector(defaultScaleCorrectors);
    if (projection) {
      if (layoutGroup.group) layoutGroup.group.add(projection);
      if (switchLayoutGroup && switchLayoutGroup.register && layoutId) {
        switchLayoutGroup.register(projection);
      }
      projection.root.didUpdate();
      projection.addEventListener("animationComplete", () => {
        this.safeToRemove();
      });
      projection.setOptions({
        ...projection.options,
        onExitComplete: () => this.safeToRemove()
      });
    }
    globalProjectionState.hasEverUpdated = true;
  }
  getSnapshotBeforeUpdate(prevProps) {
    const {
      layoutDependency,
      visualElement,
      drag: drag2,
      isPresent: isPresent2
    } = this.props;
    const projection = visualElement.projection;
    if (!projection) return null;
    projection.isPresent = isPresent2;
    if (drag2 || prevProps.layoutDependency !== layoutDependency || layoutDependency === void 0) {
      projection.willUpdate();
    } else {
      this.safeToRemove();
    }
    if (prevProps.isPresent !== isPresent2) {
      if (isPresent2) {
        projection.promote();
      } else if (!projection.relegate()) {
        frame.postRender(() => {
          const stack = projection.getStack();
          if (!stack || !stack.members.length) {
            this.safeToRemove();
          }
        });
      }
    }
    return null;
  }
  componentDidUpdate() {
    const {
      projection
    } = this.props.visualElement;
    if (projection) {
      projection.root.didUpdate();
      queueMicrotask(() => {
        if (!projection.currentAnimation && projection.isLead()) {
          this.safeToRemove();
        }
      });
    }
  }
  componentWillUnmount() {
    const {
      visualElement,
      layoutGroup,
      switchLayoutGroup: promoteContext
    } = this.props;
    const {
      projection
    } = visualElement;
    if (projection) {
      projection.scheduleCheckAfterUnmount();
      if (layoutGroup && layoutGroup.group) layoutGroup.group.remove(projection);
      if (promoteContext && promoteContext.deregister) promoteContext.deregister(projection);
    }
  }
  safeToRemove() {
    const {
      safeToRemove
    } = this.props;
    safeToRemove && safeToRemove();
  }
  render() {
    return null;
  }
};
function MeasureLayout(props) {
  const [isPresent2, safeToRemove] = usePresence();
  const layoutGroup = (0, import_react18.useContext)(LayoutGroupContext);
  return import_react18.default.createElement(MeasureLayoutWithContext, {
    ...props,
    layoutGroup,
    switchLayoutGroup: (0, import_react18.useContext)(SwitchLayoutGroupContext),
    isPresent: isPresent2,
    safeToRemove
  });
}
var defaultScaleCorrectors = {
  borderRadius: {
    ...correctBorderRadius,
    applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
  },
  borderTopLeftRadius: correctBorderRadius,
  borderTopRightRadius: correctBorderRadius,
  borderBottomLeftRadius: correctBorderRadius,
  borderBottomRightRadius: correctBorderRadius,
  boxShadow: correctBoxShadow
};

// node_modules/framer-motion/dist/es/projection/animation/mix-values.mjs
var borders = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"];
var numBorders = borders.length;
var asNumber = value => typeof value === "string" ? parseFloat(value) : value;
var isPx = value => typeof value === "number" || px.test(value);
function mixValues(target, follow, lead, progress2, shouldCrossfadeOpacity, isOnlyMember) {
  if (shouldCrossfadeOpacity) {
    target.opacity = mix(0, lead.opacity !== void 0 ? lead.opacity : 1, easeCrossfadeIn(progress2));
    target.opacityExit = mix(follow.opacity !== void 0 ? follow.opacity : 1, 0, easeCrossfadeOut(progress2));
  } else if (isOnlyMember) {
    target.opacity = mix(follow.opacity !== void 0 ? follow.opacity : 1, lead.opacity !== void 0 ? lead.opacity : 1, progress2);
  }
  for (let i = 0; i < numBorders; i++) {
    const borderLabel = `border${borders[i]}Radius`;
    let followRadius = getRadius(follow, borderLabel);
    let leadRadius = getRadius(lead, borderLabel);
    if (followRadius === void 0 && leadRadius === void 0) continue;
    followRadius || (followRadius = 0);
    leadRadius || (leadRadius = 0);
    const canMix = followRadius === 0 || leadRadius === 0 || isPx(followRadius) === isPx(leadRadius);
    if (canMix) {
      target[borderLabel] = Math.max(mix(asNumber(followRadius), asNumber(leadRadius), progress2), 0);
      if (percent.test(leadRadius) || percent.test(followRadius)) {
        target[borderLabel] += "%";
      }
    } else {
      target[borderLabel] = leadRadius;
    }
  }
  if (follow.rotate || lead.rotate) {
    target.rotate = mix(follow.rotate || 0, lead.rotate || 0, progress2);
  }
}
function getRadius(values, radiusName) {
  return values[radiusName] !== void 0 ? values[radiusName] : values.borderRadius;
}
var easeCrossfadeIn = compress(0, 0.5, circOut);
var easeCrossfadeOut = compress(0.5, 0.95, noop);
function compress(min, max, easing) {
  return p => {
    if (p < min) return 0;
    if (p > max) return 1;
    return easing(progress(min, max, p));
  };
}

// node_modules/framer-motion/dist/es/projection/geometry/copy.mjs
function copyAxisInto(axis, originAxis) {
  axis.min = originAxis.min;
  axis.max = originAxis.max;
}
function copyBoxInto(box, originBox) {
  copyAxisInto(box.x, originBox.x);
  copyAxisInto(box.y, originBox.y);
}

// node_modules/framer-motion/dist/es/projection/geometry/delta-remove.mjs
function removePointDelta(point2, translate, scale2, originPoint, boxScale) {
  point2 -= translate;
  point2 = scalePoint(point2, 1 / scale2, originPoint);
  if (boxScale !== void 0) {
    point2 = scalePoint(point2, 1 / boxScale, originPoint);
  }
  return point2;
}
function removeAxisDelta(axis, translate = 0, scale2 = 1, origin = 0.5, boxScale, originAxis = axis, sourceAxis = axis) {
  if (percent.test(translate)) {
    translate = parseFloat(translate);
    const relativeProgress = mix(sourceAxis.min, sourceAxis.max, translate / 100);
    translate = relativeProgress - sourceAxis.min;
  }
  if (typeof translate !== "number") return;
  let originPoint = mix(originAxis.min, originAxis.max, origin);
  if (axis === originAxis) originPoint -= translate;
  axis.min = removePointDelta(axis.min, translate, scale2, originPoint, boxScale);
  axis.max = removePointDelta(axis.max, translate, scale2, originPoint, boxScale);
}
function removeAxisTransforms(axis, transforms, [key, scaleKey, originKey], origin, sourceAxis) {
  removeAxisDelta(axis, transforms[key], transforms[scaleKey], transforms[originKey], transforms.scale, origin, sourceAxis);
}
var xKeys2 = ["x", "scaleX", "originX"];
var yKeys2 = ["y", "scaleY", "originY"];
function removeBoxTransforms(box, transforms, originBox, sourceBox) {
  removeAxisTransforms(box.x, transforms, xKeys2, originBox ? originBox.x : void 0, sourceBox ? sourceBox.x : void 0);
  removeAxisTransforms(box.y, transforms, yKeys2, originBox ? originBox.y : void 0, sourceBox ? sourceBox.y : void 0);
}

// node_modules/framer-motion/dist/es/projection/geometry/utils.mjs
function isAxisDeltaZero(delta) {
  return delta.translate === 0 && delta.scale === 1;
}
function isDeltaZero(delta) {
  return isAxisDeltaZero(delta.x) && isAxisDeltaZero(delta.y);
}
function boxEquals(a, b) {
  return a.x.min === b.x.min && a.x.max === b.x.max && a.y.min === b.y.min && a.y.max === b.y.max;
}
function boxEqualsRounded(a, b) {
  return Math.round(a.x.min) === Math.round(b.x.min) && Math.round(a.x.max) === Math.round(b.x.max) && Math.round(a.y.min) === Math.round(b.y.min) && Math.round(a.y.max) === Math.round(b.y.max);
}
function aspectRatio(box) {
  return calcLength(box.x) / calcLength(box.y);
}

// node_modules/framer-motion/dist/es/projection/shared/stack.mjs
var NodeStack = class {
  constructor() {
    this.members = [];
  }
  add(node) {
    addUniqueItem(this.members, node);
    node.scheduleRender();
  }
  remove(node) {
    removeItem(this.members, node);
    if (node === this.prevLead) {
      this.prevLead = void 0;
    }
    if (node === this.lead) {
      const prevLead = this.members[this.members.length - 1];
      if (prevLead) {
        this.promote(prevLead);
      }
    }
  }
  relegate(node) {
    const indexOfNode = this.members.findIndex(member => node === member);
    if (indexOfNode === 0) return false;
    let prevLead;
    for (let i = indexOfNode; i >= 0; i--) {
      const member = this.members[i];
      if (member.isPresent !== false) {
        prevLead = member;
        break;
      }
    }
    if (prevLead) {
      this.promote(prevLead);
      return true;
    } else {
      return false;
    }
  }
  promote(node, preserveFollowOpacity) {
    const prevLead = this.lead;
    if (node === prevLead) return;
    this.prevLead = prevLead;
    this.lead = node;
    node.show();
    if (prevLead) {
      prevLead.instance && prevLead.scheduleRender();
      node.scheduleRender();
      node.resumeFrom = prevLead;
      if (preserveFollowOpacity) {
        node.resumeFrom.preserveOpacity = true;
      }
      if (prevLead.snapshot) {
        node.snapshot = prevLead.snapshot;
        node.snapshot.latestValues = prevLead.animationValues || prevLead.latestValues;
      }
      if (node.root && node.root.isUpdating) {
        node.isLayoutDirty = true;
      }
      const {
        crossfade
      } = node.options;
      if (crossfade === false) {
        prevLead.hide();
      }
    }
  }
  exitAnimationComplete() {
    this.members.forEach(node => {
      const {
        options,
        resumingFrom
      } = node;
      options.onExitComplete && options.onExitComplete();
      if (resumingFrom) {
        resumingFrom.options.onExitComplete && resumingFrom.options.onExitComplete();
      }
    });
  }
  scheduleRender() {
    this.members.forEach(node => {
      node.instance && node.scheduleRender(false);
    });
  }
  removeLeadSnapshot() {
    if (this.lead && this.lead.snapshot) {
      this.lead.snapshot = void 0;
    }
  }
};

// node_modules/framer-motion/dist/es/projection/styles/transform.mjs
function buildProjectionTransform(delta, treeScale, latestTransform) {
  let transform2 = "";
  const xTranslate = delta.x.translate / treeScale.x;
  const yTranslate = delta.y.translate / treeScale.y;
  if (xTranslate || yTranslate) {
    transform2 = `translate3d(${xTranslate}px, ${yTranslate}px, 0) `;
  }
  if (treeScale.x !== 1 || treeScale.y !== 1) {
    transform2 += `scale(${1 / treeScale.x}, ${1 / treeScale.y}) `;
  }
  if (latestTransform) {
    const {
      rotate,
      rotateX,
      rotateY
    } = latestTransform;
    if (rotate) transform2 += `rotate(${rotate}deg) `;
    if (rotateX) transform2 += `rotateX(${rotateX}deg) `;
    if (rotateY) transform2 += `rotateY(${rotateY}deg) `;
  }
  const elementScaleX = delta.x.scale * treeScale.x;
  const elementScaleY = delta.y.scale * treeScale.y;
  if (elementScaleX !== 1 || elementScaleY !== 1) {
    transform2 += `scale(${elementScaleX}, ${elementScaleY})`;
  }
  return transform2 || "none";
}

// node_modules/framer-motion/dist/es/render/utils/compare-by-depth.mjs
var compareByDepth = (a, b) => a.depth - b.depth;

// node_modules/framer-motion/dist/es/render/utils/flat-tree.mjs
var FlatTree = class {
  constructor() {
    this.children = [];
    this.isDirty = false;
  }
  add(child) {
    addUniqueItem(this.children, child);
    this.isDirty = true;
  }
  remove(child) {
    removeItem(this.children, child);
    this.isDirty = true;
  }
  forEach(callback) {
    this.isDirty && this.children.sort(compareByDepth);
    this.isDirty = false;
    this.children.forEach(callback);
  }
};

// node_modules/framer-motion/dist/es/utils/delay.mjs
function delay(callback, timeout) {
  const start = performance.now();
  const checkElapsed = ({
    timestamp
  }) => {
    const elapsed = timestamp - start;
    if (elapsed >= timeout) {
      cancelFrame(checkElapsed);
      callback(elapsed - timeout);
    }
  };
  frame.read(checkElapsed, true);
  return () => cancelFrame(checkElapsed);
}

// node_modules/framer-motion/dist/es/debug/record.mjs
function record(data) {
  if (window.MotionDebug) {
    window.MotionDebug.record(data);
  }
}

// node_modules/framer-motion/dist/es/render/dom/utils/is-svg-element.mjs
function isSVGElement(element) {
  return element instanceof SVGElement && element.tagName !== "svg";
}

// node_modules/framer-motion/dist/es/animation/interfaces/single-value.mjs
function animateSingleValue(value, keyframes2, options) {
  const motionValue$1 = isMotionValue(value) ? value : motionValue(value);
  motionValue$1.start(animateMotionValue("", motionValue$1, keyframes2, options));
  return motionValue$1.animation;
}

// node_modules/framer-motion/dist/es/projection/node/create-projection-node.mjs
var transformAxes = ["", "X", "Y", "Z"];
var hiddenVisibility = {
  visibility: "hidden"
};
var animationTarget = 1e3;
var id2 = 0;
var projectionFrameData = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0
};
function createProjectionNode({
  attachResizeListener,
  defaultParent,
  measureScroll,
  checkIsScrollRoot,
  resetTransform
}) {
  return class ProjectionNode {
    constructor(latestValues = {}, parent = defaultParent === null || defaultParent === void 0 ? void 0 : defaultParent()) {
      this.id = id2++;
      this.animationId = 0;
      this.children = /* @__PURE__ */new Set();
      this.options = {};
      this.isTreeAnimating = false;
      this.isAnimationBlocked = false;
      this.isLayoutDirty = false;
      this.isProjectionDirty = false;
      this.isSharedProjectionDirty = false;
      this.isTransformDirty = false;
      this.updateManuallyBlocked = false;
      this.updateBlockedByResize = false;
      this.isUpdating = false;
      this.isSVG = false;
      this.needsReset = false;
      this.shouldResetTransform = false;
      this.treeScale = {
        x: 1,
        y: 1
      };
      this.eventHandlers = /* @__PURE__ */new Map();
      this.hasTreeAnimated = false;
      this.updateScheduled = false;
      this.projectionUpdateScheduled = false;
      this.checkUpdateFailed = () => {
        if (this.isUpdating) {
          this.isUpdating = false;
          this.clearAllSnapshots();
        }
      };
      this.updateProjection = () => {
        this.projectionUpdateScheduled = false;
        projectionFrameData.totalNodes = projectionFrameData.resolvedTargetDeltas = projectionFrameData.recalculatedProjection = 0;
        this.nodes.forEach(propagateDirtyNodes);
        this.nodes.forEach(resolveTargetDelta);
        this.nodes.forEach(calcProjection);
        this.nodes.forEach(cleanDirtyNodes);
        record(projectionFrameData);
      };
      this.hasProjected = false;
      this.isVisible = true;
      this.animationProgress = 0;
      this.sharedNodes = /* @__PURE__ */new Map();
      this.latestValues = latestValues;
      this.root = parent ? parent.root || parent : this;
      this.path = parent ? [...parent.path, parent] : [];
      this.parent = parent;
      this.depth = parent ? parent.depth + 1 : 0;
      for (let i = 0; i < this.path.length; i++) {
        this.path[i].shouldResetTransform = true;
      }
      if (this.root === this) this.nodes = new FlatTree();
    }
    addEventListener(name, handler) {
      if (!this.eventHandlers.has(name)) {
        this.eventHandlers.set(name, new SubscriptionManager());
      }
      return this.eventHandlers.get(name).add(handler);
    }
    notifyListeners(name, ...args) {
      const subscriptionManager = this.eventHandlers.get(name);
      subscriptionManager && subscriptionManager.notify(...args);
    }
    hasListeners(name) {
      return this.eventHandlers.has(name);
    }
    mount(instance, isLayoutDirty = this.root.hasTreeAnimated) {
      if (this.instance) return;
      this.isSVG = isSVGElement(instance);
      this.instance = instance;
      const {
        layoutId,
        layout: layout2,
        visualElement
      } = this.options;
      if (visualElement && !visualElement.current) {
        visualElement.mount(instance);
      }
      this.root.nodes.add(this);
      this.parent && this.parent.children.add(this);
      if (isLayoutDirty && (layout2 || layoutId)) {
        this.isLayoutDirty = true;
      }
      if (attachResizeListener) {
        let cancelDelay;
        const resizeUnblockUpdate = () => this.root.updateBlockedByResize = false;
        attachResizeListener(instance, () => {
          this.root.updateBlockedByResize = true;
          cancelDelay && cancelDelay();
          cancelDelay = delay(resizeUnblockUpdate, 250);
          if (globalProjectionState.hasAnimatedSinceResize) {
            globalProjectionState.hasAnimatedSinceResize = false;
            this.nodes.forEach(finishAnimation);
          }
        });
      }
      if (layoutId) {
        this.root.registerSharedNode(layoutId, this);
      }
      if (this.options.animate !== false && visualElement && (layoutId || layout2)) {
        this.addEventListener("didUpdate", ({
          delta,
          hasLayoutChanged,
          hasRelativeTargetChanged,
          layout: newLayout
        }) => {
          if (this.isTreeAnimationBlocked()) {
            this.target = void 0;
            this.relativeTarget = void 0;
            return;
          }
          const layoutTransition = this.options.transition || visualElement.getDefaultTransition() || defaultLayoutTransition;
          const {
            onLayoutAnimationStart,
            onLayoutAnimationComplete
          } = visualElement.getProps();
          const targetChanged = !this.targetLayout || !boxEqualsRounded(this.targetLayout, newLayout) || hasRelativeTargetChanged;
          const hasOnlyRelativeTargetChanged = !hasLayoutChanged && hasRelativeTargetChanged;
          if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || hasOnlyRelativeTargetChanged || hasLayoutChanged && (targetChanged || !this.currentAnimation)) {
            if (this.resumeFrom) {
              this.resumingFrom = this.resumeFrom;
              this.resumingFrom.resumingFrom = void 0;
            }
            this.setAnimationOrigin(delta, hasOnlyRelativeTargetChanged);
            const animationOptions = {
              ...getValueTransition(layoutTransition, "layout"),
              onPlay: onLayoutAnimationStart,
              onComplete: onLayoutAnimationComplete
            };
            if (visualElement.shouldReduceMotion || this.options.layoutRoot) {
              animationOptions.delay = 0;
              animationOptions.type = false;
            }
            this.startAnimation(animationOptions);
          } else {
            if (!hasLayoutChanged) {
              finishAnimation(this);
            }
            if (this.isLead() && this.options.onExitComplete) {
              this.options.onExitComplete();
            }
          }
          this.targetLayout = newLayout;
        });
      }
    }
    unmount() {
      this.options.layoutId && this.willUpdate();
      this.root.nodes.remove(this);
      const stack = this.getStack();
      stack && stack.remove(this);
      this.parent && this.parent.children.delete(this);
      this.instance = void 0;
      cancelFrame(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = true;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = false;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || false;
    }
    startUpdate() {
      if (this.isUpdateBlocked()) return;
      this.isUpdating = true;
      this.nodes && this.nodes.forEach(resetRotation);
      this.animationId++;
    }
    getTransformTemplate() {
      const {
        visualElement
      } = this.options;
      return visualElement && visualElement.getProps().transformTemplate;
    }
    willUpdate(shouldNotifyListeners = true) {
      this.root.hasTreeAnimated = true;
      if (this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      !this.root.isUpdating && this.root.startUpdate();
      if (this.isLayoutDirty) return;
      this.isLayoutDirty = true;
      for (let i = 0; i < this.path.length; i++) {
        const node = this.path[i];
        node.shouldResetTransform = true;
        node.updateScroll("snapshot");
        if (node.options.layoutRoot) {
          node.willUpdate(false);
        }
      }
      const {
        layoutId,
        layout: layout2
      } = this.options;
      if (layoutId === void 0 && !layout2) return;
      const transformTemplate = this.getTransformTemplate();
      this.prevTransformTemplateValue = transformTemplate ? transformTemplate(this.latestValues, "") : void 0;
      this.updateSnapshot();
      shouldNotifyListeners && this.notifyListeners("willUpdate");
    }
    update() {
      this.updateScheduled = false;
      const updateWasBlocked = this.isUpdateBlocked();
      if (updateWasBlocked) {
        this.unblockUpdate();
        this.clearAllSnapshots();
        this.nodes.forEach(clearMeasurements);
        return;
      }
      if (!this.isUpdating) {
        this.nodes.forEach(clearIsLayoutDirty);
      }
      this.isUpdating = false;
      this.nodes.forEach(resetTransformStyle);
      this.nodes.forEach(updateLayout);
      this.nodes.forEach(notifyLayoutUpdate);
      this.clearAllSnapshots();
      const now = performance.now();
      frameData.delta = clamp(0, 1e3 / 60, now - frameData.timestamp);
      frameData.timestamp = now;
      frameData.isProcessing = true;
      steps.update.process(frameData);
      steps.preRender.process(frameData);
      steps.render.process(frameData);
      frameData.isProcessing = false;
    }
    didUpdate() {
      if (!this.updateScheduled) {
        this.updateScheduled = true;
        queueMicrotask(() => this.update());
      }
    }
    clearAllSnapshots() {
      this.nodes.forEach(clearSnapshot);
      this.sharedNodes.forEach(removeLeadSnapshots);
    }
    scheduleUpdateProjection() {
      if (!this.projectionUpdateScheduled) {
        this.projectionUpdateScheduled = true;
        frame.preRender(this.updateProjection, false, true);
      }
    }
    scheduleCheckAfterUnmount() {
      frame.postRender(() => {
        if (this.isLayoutDirty) {
          this.root.didUpdate();
        } else {
          this.root.checkUpdateFailed();
        }
      });
    }
    updateSnapshot() {
      if (this.snapshot || !this.instance) return;
      this.snapshot = this.measure();
    }
    updateLayout() {
      if (!this.instance) return;
      this.updateScroll();
      if (!(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty) {
        return;
      }
      if (this.resumeFrom && !this.resumeFrom.instance) {
        for (let i = 0; i < this.path.length; i++) {
          const node = this.path[i];
          node.updateScroll();
        }
      }
      const prevLayout = this.layout;
      this.layout = this.measure(false);
      this.layoutCorrected = createBox();
      this.isLayoutDirty = false;
      this.projectionDelta = void 0;
      this.notifyListeners("measure", this.layout.layoutBox);
      const {
        visualElement
      } = this.options;
      visualElement && visualElement.notify("LayoutMeasure", this.layout.layoutBox, prevLayout ? prevLayout.layoutBox : void 0);
    }
    updateScroll(phase = "measure") {
      let needsMeasurement = Boolean(this.options.layoutScroll && this.instance);
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === phase) {
        needsMeasurement = false;
      }
      if (needsMeasurement) {
        this.scroll = {
          animationId: this.root.animationId,
          phase,
          isRoot: checkIsScrollRoot(this.instance),
          offset: measureScroll(this.instance)
        };
      }
    }
    resetTransform() {
      if (!resetTransform) return;
      const isResetRequested = this.isLayoutDirty || this.shouldResetTransform;
      const hasProjection = this.projectionDelta && !isDeltaZero(this.projectionDelta);
      const transformTemplate = this.getTransformTemplate();
      const transformTemplateValue = transformTemplate ? transformTemplate(this.latestValues, "") : void 0;
      const transformTemplateHasChanged = transformTemplateValue !== this.prevTransformTemplateValue;
      if (isResetRequested && (hasProjection || hasTransform(this.latestValues) || transformTemplateHasChanged)) {
        resetTransform(this.instance, transformTemplateValue);
        this.shouldResetTransform = false;
        this.scheduleRender();
      }
    }
    measure(removeTransform = true) {
      const pageBox = this.measurePageBox();
      let layoutBox = this.removeElementScroll(pageBox);
      if (removeTransform) {
        layoutBox = this.removeTransform(layoutBox);
      }
      roundBox(layoutBox);
      return {
        animationId: this.root.animationId,
        measuredBox: pageBox,
        layoutBox,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      const {
        visualElement
      } = this.options;
      if (!visualElement) return createBox();
      const box = visualElement.measureViewportBox();
      const {
        scroll: scroll2
      } = this.root;
      if (scroll2) {
        translateAxis(box.x, scroll2.offset.x);
        translateAxis(box.y, scroll2.offset.y);
      }
      return box;
    }
    removeElementScroll(box) {
      const boxWithoutScroll = createBox();
      copyBoxInto(boxWithoutScroll, box);
      for (let i = 0; i < this.path.length; i++) {
        const node = this.path[i];
        const {
          scroll: scroll2,
          options
        } = node;
        if (node !== this.root && scroll2 && options.layoutScroll) {
          if (scroll2.isRoot) {
            copyBoxInto(boxWithoutScroll, box);
            const {
              scroll: rootScroll
            } = this.root;
            if (rootScroll) {
              translateAxis(boxWithoutScroll.x, -rootScroll.offset.x);
              translateAxis(boxWithoutScroll.y, -rootScroll.offset.y);
            }
          }
          translateAxis(boxWithoutScroll.x, scroll2.offset.x);
          translateAxis(boxWithoutScroll.y, scroll2.offset.y);
        }
      }
      return boxWithoutScroll;
    }
    applyTransform(box, transformOnly = false) {
      const withTransforms = createBox();
      copyBoxInto(withTransforms, box);
      for (let i = 0; i < this.path.length; i++) {
        const node = this.path[i];
        if (!transformOnly && node.options.layoutScroll && node.scroll && node !== node.root) {
          transformBox(withTransforms, {
            x: -node.scroll.offset.x,
            y: -node.scroll.offset.y
          });
        }
        if (!hasTransform(node.latestValues)) continue;
        transformBox(withTransforms, node.latestValues);
      }
      if (hasTransform(this.latestValues)) {
        transformBox(withTransforms, this.latestValues);
      }
      return withTransforms;
    }
    removeTransform(box) {
      const boxWithoutTransform = createBox();
      copyBoxInto(boxWithoutTransform, box);
      for (let i = 0; i < this.path.length; i++) {
        const node = this.path[i];
        if (!node.instance) continue;
        if (!hasTransform(node.latestValues)) continue;
        hasScale(node.latestValues) && node.updateSnapshot();
        const sourceBox = createBox();
        const nodeBox = node.measurePageBox();
        copyBoxInto(sourceBox, nodeBox);
        removeBoxTransforms(boxWithoutTransform, node.latestValues, node.snapshot ? node.snapshot.layoutBox : void 0, sourceBox);
      }
      if (hasTransform(this.latestValues)) {
        removeBoxTransforms(boxWithoutTransform, this.latestValues);
      }
      return boxWithoutTransform;
    }
    setTargetDelta(delta) {
      this.targetDelta = delta;
      this.root.scheduleUpdateProjection();
      this.isProjectionDirty = true;
    }
    setOptions(options) {
      this.options = {
        ...this.options,
        ...options,
        crossfade: options.crossfade !== void 0 ? options.crossfade : true
      };
    }
    clearMeasurements() {
      this.scroll = void 0;
      this.layout = void 0;
      this.snapshot = void 0;
      this.prevTransformTemplateValue = void 0;
      this.targetDelta = void 0;
      this.target = void 0;
      this.isLayoutDirty = false;
    }
    forceRelativeParentToResolveTarget() {
      if (!this.relativeParent) return;
      if (this.relativeParent.resolvedRelativeTargetAt !== frameData.timestamp) {
        this.relativeParent.resolveTargetDelta(true);
      }
    }
    resolveTargetDelta(forceRecalculation = false) {
      var _a;
      const lead = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = lead.isProjectionDirty);
      this.isTransformDirty || (this.isTransformDirty = lead.isTransformDirty);
      this.isSharedProjectionDirty || (this.isSharedProjectionDirty = lead.isSharedProjectionDirty);
      const isShared = Boolean(this.resumingFrom) || this !== lead;
      const canSkip = !(forceRecalculation || isShared && this.isSharedProjectionDirty || this.isProjectionDirty || ((_a = this.parent) === null || _a === void 0 ? void 0 : _a.isProjectionDirty) || this.attemptToResolveRelativeTarget);
      if (canSkip) return;
      const {
        layout: layout2,
        layoutId
      } = this.options;
      if (!this.layout || !(layout2 || layoutId)) return;
      this.resolvedRelativeTargetAt = frameData.timestamp;
      if (!this.targetDelta && !this.relativeTarget) {
        const relativeParent = this.getClosestProjectingParent();
        if (relativeParent && relativeParent.layout && this.animationProgress !== 1) {
          this.relativeParent = relativeParent;
          this.forceRelativeParentToResolveTarget();
          this.relativeTarget = createBox();
          this.relativeTargetOrigin = createBox();
          calcRelativePosition(this.relativeTargetOrigin, this.layout.layoutBox, relativeParent.layout.layoutBox);
          copyBoxInto(this.relativeTarget, this.relativeTargetOrigin);
        } else {
          this.relativeParent = this.relativeTarget = void 0;
        }
      }
      if (!this.relativeTarget && !this.targetDelta) return;
      if (!this.target) {
        this.target = createBox();
        this.targetWithTransforms = createBox();
      }
      if (this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target) {
        this.forceRelativeParentToResolveTarget();
        calcRelativeBox(this.target, this.relativeTarget, this.relativeParent.target);
      } else if (this.targetDelta) {
        if (Boolean(this.resumingFrom)) {
          this.target = this.applyTransform(this.layout.layoutBox);
        } else {
          copyBoxInto(this.target, this.layout.layoutBox);
        }
        applyBoxDelta(this.target, this.targetDelta);
      } else {
        copyBoxInto(this.target, this.layout.layoutBox);
      }
      if (this.attemptToResolveRelativeTarget) {
        this.attemptToResolveRelativeTarget = false;
        const relativeParent = this.getClosestProjectingParent();
        if (relativeParent && Boolean(relativeParent.resumingFrom) === Boolean(this.resumingFrom) && !relativeParent.options.layoutScroll && relativeParent.target && this.animationProgress !== 1) {
          this.relativeParent = relativeParent;
          this.forceRelativeParentToResolveTarget();
          this.relativeTarget = createBox();
          this.relativeTargetOrigin = createBox();
          calcRelativePosition(this.relativeTargetOrigin, this.target, relativeParent.target);
          copyBoxInto(this.relativeTarget, this.relativeTargetOrigin);
        } else {
          this.relativeParent = this.relativeTarget = void 0;
        }
      }
      projectionFrameData.resolvedTargetDeltas++;
    }
    getClosestProjectingParent() {
      if (!this.parent || hasScale(this.parent.latestValues) || has2DTranslate(this.parent.latestValues)) {
        return void 0;
      }
      if (this.parent.isProjecting()) {
        return this.parent;
      } else {
        return this.parent.getClosestProjectingParent();
      }
    }
    isProjecting() {
      return Boolean((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      var _a;
      const lead = this.getLead();
      const isShared = Boolean(this.resumingFrom) || this !== lead;
      let canSkip = true;
      if (this.isProjectionDirty || ((_a = this.parent) === null || _a === void 0 ? void 0 : _a.isProjectionDirty)) {
        canSkip = false;
      }
      if (isShared && (this.isSharedProjectionDirty || this.isTransformDirty)) {
        canSkip = false;
      }
      if (this.resolvedRelativeTargetAt === frameData.timestamp) {
        canSkip = false;
      }
      if (canSkip) return;
      const {
        layout: layout2,
        layoutId
      } = this.options;
      this.isTreeAnimating = Boolean(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation);
      if (!this.isTreeAnimating) {
        this.targetDelta = this.relativeTarget = void 0;
      }
      if (!this.layout || !(layout2 || layoutId)) return;
      copyBoxInto(this.layoutCorrected, this.layout.layoutBox);
      const prevTreeScaleX = this.treeScale.x;
      const prevTreeScaleY = this.treeScale.y;
      applyTreeDeltas(this.layoutCorrected, this.treeScale, this.path, isShared);
      if (lead.layout && !lead.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1)) {
        lead.target = lead.layout.layoutBox;
      }
      const {
        target
      } = lead;
      if (!target) {
        if (this.projectionTransform) {
          this.projectionDelta = createDelta();
          this.projectionTransform = "none";
          this.scheduleRender();
        }
        return;
      }
      if (!this.projectionDelta) {
        this.projectionDelta = createDelta();
        this.projectionDeltaWithTransform = createDelta();
      }
      const prevProjectionTransform = this.projectionTransform;
      calcBoxDelta(this.projectionDelta, this.layoutCorrected, target, this.latestValues);
      this.projectionTransform = buildProjectionTransform(this.projectionDelta, this.treeScale);
      if (this.projectionTransform !== prevProjectionTransform || this.treeScale.x !== prevTreeScaleX || this.treeScale.y !== prevTreeScaleY) {
        this.hasProjected = true;
        this.scheduleRender();
        this.notifyListeners("projectionUpdate", target);
      }
      projectionFrameData.recalculatedProjection++;
    }
    hide() {
      this.isVisible = false;
    }
    show() {
      this.isVisible = true;
    }
    scheduleRender(notifyAll2 = true) {
      this.options.scheduleRender && this.options.scheduleRender();
      if (notifyAll2) {
        const stack = this.getStack();
        stack && stack.scheduleRender();
      }
      if (this.resumingFrom && !this.resumingFrom.instance) {
        this.resumingFrom = void 0;
      }
    }
    setAnimationOrigin(delta, hasOnlyRelativeTargetChanged = false) {
      const snapshot = this.snapshot;
      const snapshotLatestValues = snapshot ? snapshot.latestValues : {};
      const mixedValues = {
        ...this.latestValues
      };
      const targetDelta = createDelta();
      if (!this.relativeParent || !this.relativeParent.options.layoutRoot) {
        this.relativeTarget = this.relativeTargetOrigin = void 0;
      }
      this.attemptToResolveRelativeTarget = !hasOnlyRelativeTargetChanged;
      const relativeLayout = createBox();
      const snapshotSource = snapshot ? snapshot.source : void 0;
      const layoutSource = this.layout ? this.layout.source : void 0;
      const isSharedLayoutAnimation = snapshotSource !== layoutSource;
      const stack = this.getStack();
      const isOnlyMember = !stack || stack.members.length <= 1;
      const shouldCrossfadeOpacity = Boolean(isSharedLayoutAnimation && !isOnlyMember && this.options.crossfade === true && !this.path.some(hasOpacityCrossfade));
      this.animationProgress = 0;
      let prevRelativeTarget;
      this.mixTargetDelta = latest => {
        const progress2 = latest / 1e3;
        mixAxisDelta(targetDelta.x, delta.x, progress2);
        mixAxisDelta(targetDelta.y, delta.y, progress2);
        this.setTargetDelta(targetDelta);
        if (this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout) {
          calcRelativePosition(relativeLayout, this.layout.layoutBox, this.relativeParent.layout.layoutBox);
          mixBox(this.relativeTarget, this.relativeTargetOrigin, relativeLayout, progress2);
          if (prevRelativeTarget && boxEquals(this.relativeTarget, prevRelativeTarget)) {
            this.isProjectionDirty = false;
          }
          if (!prevRelativeTarget) prevRelativeTarget = createBox();
          copyBoxInto(prevRelativeTarget, this.relativeTarget);
        }
        if (isSharedLayoutAnimation) {
          this.animationValues = mixedValues;
          mixValues(mixedValues, snapshotLatestValues, this.latestValues, progress2, shouldCrossfadeOpacity, isOnlyMember);
        }
        this.root.scheduleUpdateProjection();
        this.scheduleRender();
        this.animationProgress = progress2;
      };
      this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(options) {
      this.notifyListeners("animationStart");
      this.currentAnimation && this.currentAnimation.stop();
      if (this.resumingFrom && this.resumingFrom.currentAnimation) {
        this.resumingFrom.currentAnimation.stop();
      }
      if (this.pendingAnimation) {
        cancelFrame(this.pendingAnimation);
        this.pendingAnimation = void 0;
      }
      this.pendingAnimation = frame.update(() => {
        globalProjectionState.hasAnimatedSinceResize = true;
        this.currentAnimation = animateSingleValue(0, animationTarget, {
          ...options,
          onUpdate: latest => {
            this.mixTargetDelta(latest);
            options.onUpdate && options.onUpdate(latest);
          },
          onComplete: () => {
            options.onComplete && options.onComplete();
            this.completeAnimation();
          }
        });
        if (this.resumingFrom) {
          this.resumingFrom.currentAnimation = this.currentAnimation;
        }
        this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      if (this.resumingFrom) {
        this.resumingFrom.currentAnimation = void 0;
        this.resumingFrom.preserveOpacity = void 0;
      }
      const stack = this.getStack();
      stack && stack.exitAnimationComplete();
      this.resumingFrom = this.currentAnimation = this.animationValues = void 0;
      this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      if (this.currentAnimation) {
        this.mixTargetDelta && this.mixTargetDelta(animationTarget);
        this.currentAnimation.stop();
      }
      this.completeAnimation();
    }
    applyTransformsToTarget() {
      const lead = this.getLead();
      let {
        targetWithTransforms,
        target,
        layout: layout2,
        latestValues
      } = lead;
      if (!targetWithTransforms || !target || !layout2) return;
      if (this !== lead && this.layout && layout2 && shouldAnimatePositionOnly(this.options.animationType, this.layout.layoutBox, layout2.layoutBox)) {
        target = this.target || createBox();
        const xLength = calcLength(this.layout.layoutBox.x);
        target.x.min = lead.target.x.min;
        target.x.max = target.x.min + xLength;
        const yLength = calcLength(this.layout.layoutBox.y);
        target.y.min = lead.target.y.min;
        target.y.max = target.y.min + yLength;
      }
      copyBoxInto(targetWithTransforms, target);
      transformBox(targetWithTransforms, latestValues);
      calcBoxDelta(this.projectionDeltaWithTransform, this.layoutCorrected, targetWithTransforms, latestValues);
    }
    registerSharedNode(layoutId, node) {
      if (!this.sharedNodes.has(layoutId)) {
        this.sharedNodes.set(layoutId, new NodeStack());
      }
      const stack = this.sharedNodes.get(layoutId);
      stack.add(node);
      const config = node.options.initialPromotionConfig;
      node.promote({
        transition: config ? config.transition : void 0,
        preserveFollowOpacity: config && config.shouldPreserveFollowOpacity ? config.shouldPreserveFollowOpacity(node) : void 0
      });
    }
    isLead() {
      const stack = this.getStack();
      return stack ? stack.lead === this : true;
    }
    getLead() {
      var _a;
      const {
        layoutId
      } = this.options;
      return layoutId ? ((_a = this.getStack()) === null || _a === void 0 ? void 0 : _a.lead) || this : this;
    }
    getPrevLead() {
      var _a;
      const {
        layoutId
      } = this.options;
      return layoutId ? (_a = this.getStack()) === null || _a === void 0 ? void 0 : _a.prevLead : void 0;
    }
    getStack() {
      const {
        layoutId
      } = this.options;
      if (layoutId) return this.root.sharedNodes.get(layoutId);
    }
    promote({
      needsReset,
      transition,
      preserveFollowOpacity
    } = {}) {
      const stack = this.getStack();
      if (stack) stack.promote(this, preserveFollowOpacity);
      if (needsReset) {
        this.projectionDelta = void 0;
        this.needsReset = true;
      }
      if (transition) this.setOptions({
        transition
      });
    }
    relegate() {
      const stack = this.getStack();
      if (stack) {
        return stack.relegate(this);
      } else {
        return false;
      }
    }
    resetRotation() {
      const {
        visualElement
      } = this.options;
      if (!visualElement) return;
      let hasRotate = false;
      const {
        latestValues
      } = visualElement;
      if (latestValues.rotate || latestValues.rotateX || latestValues.rotateY || latestValues.rotateZ) {
        hasRotate = true;
      }
      if (!hasRotate) return;
      const resetValues = {};
      for (let i = 0; i < transformAxes.length; i++) {
        const key = "rotate" + transformAxes[i];
        if (latestValues[key]) {
          resetValues[key] = latestValues[key];
          visualElement.setStaticValue(key, 0);
        }
      }
      visualElement.render();
      for (const key in resetValues) {
        visualElement.setStaticValue(key, resetValues[key]);
      }
      visualElement.scheduleRender();
    }
    getProjectionStyles(styleProp) {
      var _a, _b;
      if (!this.instance || this.isSVG) return void 0;
      if (!this.isVisible) {
        return hiddenVisibility;
      }
      const styles = {
        visibility: ""
      };
      const transformTemplate = this.getTransformTemplate();
      if (this.needsReset) {
        this.needsReset = false;
        styles.opacity = "";
        styles.pointerEvents = resolveMotionValue(styleProp === null || styleProp === void 0 ? void 0 : styleProp.pointerEvents) || "";
        styles.transform = transformTemplate ? transformTemplate(this.latestValues, "") : "none";
        return styles;
      }
      const lead = this.getLead();
      if (!this.projectionDelta || !this.layout || !lead.target) {
        const emptyStyles = {};
        if (this.options.layoutId) {
          emptyStyles.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1;
          emptyStyles.pointerEvents = resolveMotionValue(styleProp === null || styleProp === void 0 ? void 0 : styleProp.pointerEvents) || "";
        }
        if (this.hasProjected && !hasTransform(this.latestValues)) {
          emptyStyles.transform = transformTemplate ? transformTemplate({}, "") : "none";
          this.hasProjected = false;
        }
        return emptyStyles;
      }
      const valuesToRender = lead.animationValues || lead.latestValues;
      this.applyTransformsToTarget();
      styles.transform = buildProjectionTransform(this.projectionDeltaWithTransform, this.treeScale, valuesToRender);
      if (transformTemplate) {
        styles.transform = transformTemplate(valuesToRender, styles.transform);
      }
      const {
        x,
        y
      } = this.projectionDelta;
      styles.transformOrigin = `${x.origin * 100}% ${y.origin * 100}% 0`;
      if (lead.animationValues) {
        styles.opacity = lead === this ? (_b = (_a = valuesToRender.opacity) !== null && _a !== void 0 ? _a : this.latestValues.opacity) !== null && _b !== void 0 ? _b : 1 : this.preserveOpacity ? this.latestValues.opacity : valuesToRender.opacityExit;
      } else {
        styles.opacity = lead === this ? valuesToRender.opacity !== void 0 ? valuesToRender.opacity : "" : valuesToRender.opacityExit !== void 0 ? valuesToRender.opacityExit : 0;
      }
      for (const key in scaleCorrectors) {
        if (valuesToRender[key] === void 0) continue;
        const {
          correct,
          applyTo
        } = scaleCorrectors[key];
        const corrected = styles.transform === "none" ? valuesToRender[key] : correct(valuesToRender[key], lead);
        if (applyTo) {
          const num = applyTo.length;
          for (let i = 0; i < num; i++) {
            styles[applyTo[i]] = corrected;
          }
        } else {
          styles[key] = corrected;
        }
      }
      if (this.options.layoutId) {
        styles.pointerEvents = lead === this ? resolveMotionValue(styleProp === null || styleProp === void 0 ? void 0 : styleProp.pointerEvents) || "" : "none";
      }
      return styles;
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach(node => {
        var _a;
        return (_a = node.currentAnimation) === null || _a === void 0 ? void 0 : _a.stop();
      });
      this.root.nodes.forEach(clearMeasurements);
      this.root.sharedNodes.clear();
    }
  };
}
function updateLayout(node) {
  node.updateLayout();
}
function notifyLayoutUpdate(node) {
  var _a;
  const snapshot = ((_a = node.resumeFrom) === null || _a === void 0 ? void 0 : _a.snapshot) || node.snapshot;
  if (node.isLead() && node.layout && snapshot && node.hasListeners("didUpdate")) {
    const {
      layoutBox: layout2,
      measuredBox: measuredLayout
    } = node.layout;
    const {
      animationType
    } = node.options;
    const isShared = snapshot.source !== node.layout.source;
    if (animationType === "size") {
      eachAxis(axis => {
        const axisSnapshot = isShared ? snapshot.measuredBox[axis] : snapshot.layoutBox[axis];
        const length = calcLength(axisSnapshot);
        axisSnapshot.min = layout2[axis].min;
        axisSnapshot.max = axisSnapshot.min + length;
      });
    } else if (shouldAnimatePositionOnly(animationType, snapshot.layoutBox, layout2)) {
      eachAxis(axis => {
        const axisSnapshot = isShared ? snapshot.measuredBox[axis] : snapshot.layoutBox[axis];
        const length = calcLength(layout2[axis]);
        axisSnapshot.max = axisSnapshot.min + length;
        if (node.relativeTarget && !node.currentAnimation) {
          node.isProjectionDirty = true;
          node.relativeTarget[axis].max = node.relativeTarget[axis].min + length;
        }
      });
    }
    const layoutDelta = createDelta();
    calcBoxDelta(layoutDelta, layout2, snapshot.layoutBox);
    const visualDelta = createDelta();
    if (isShared) {
      calcBoxDelta(visualDelta, node.applyTransform(measuredLayout, true), snapshot.measuredBox);
    } else {
      calcBoxDelta(visualDelta, layout2, snapshot.layoutBox);
    }
    const hasLayoutChanged = !isDeltaZero(layoutDelta);
    let hasRelativeTargetChanged = false;
    if (!node.resumeFrom) {
      const relativeParent = node.getClosestProjectingParent();
      if (relativeParent && !relativeParent.resumeFrom) {
        const {
          snapshot: parentSnapshot,
          layout: parentLayout
        } = relativeParent;
        if (parentSnapshot && parentLayout) {
          const relativeSnapshot = createBox();
          calcRelativePosition(relativeSnapshot, snapshot.layoutBox, parentSnapshot.layoutBox);
          const relativeLayout = createBox();
          calcRelativePosition(relativeLayout, layout2, parentLayout.layoutBox);
          if (!boxEqualsRounded(relativeSnapshot, relativeLayout)) {
            hasRelativeTargetChanged = true;
          }
          if (relativeParent.options.layoutRoot) {
            node.relativeTarget = relativeLayout;
            node.relativeTargetOrigin = relativeSnapshot;
            node.relativeParent = relativeParent;
          }
        }
      }
    }
    node.notifyListeners("didUpdate", {
      layout: layout2,
      snapshot,
      delta: visualDelta,
      layoutDelta,
      hasLayoutChanged,
      hasRelativeTargetChanged
    });
  } else if (node.isLead()) {
    const {
      onExitComplete
    } = node.options;
    onExitComplete && onExitComplete();
  }
  node.options.transition = void 0;
}
function propagateDirtyNodes(node) {
  projectionFrameData.totalNodes++;
  if (!node.parent) return;
  if (!node.isProjecting()) {
    node.isProjectionDirty = node.parent.isProjectionDirty;
  }
  node.isSharedProjectionDirty || (node.isSharedProjectionDirty = Boolean(node.isProjectionDirty || node.parent.isProjectionDirty || node.parent.isSharedProjectionDirty));
  node.isTransformDirty || (node.isTransformDirty = node.parent.isTransformDirty);
}
function cleanDirtyNodes(node) {
  node.isProjectionDirty = node.isSharedProjectionDirty = node.isTransformDirty = false;
}
function clearSnapshot(node) {
  node.clearSnapshot();
}
function clearMeasurements(node) {
  node.clearMeasurements();
}
function clearIsLayoutDirty(node) {
  node.isLayoutDirty = false;
}
function resetTransformStyle(node) {
  const {
    visualElement
  } = node.options;
  if (visualElement && visualElement.getProps().onBeforeLayoutMeasure) {
    visualElement.notify("BeforeLayoutMeasure");
  }
  node.resetTransform();
}
function finishAnimation(node) {
  node.finishAnimation();
  node.targetDelta = node.relativeTarget = node.target = void 0;
  node.isProjectionDirty = true;
}
function resolveTargetDelta(node) {
  node.resolveTargetDelta();
}
function calcProjection(node) {
  node.calcProjection();
}
function resetRotation(node) {
  node.resetRotation();
}
function removeLeadSnapshots(stack) {
  stack.removeLeadSnapshot();
}
function mixAxisDelta(output, delta, p) {
  output.translate = mix(delta.translate, 0, p);
  output.scale = mix(delta.scale, 1, p);
  output.origin = delta.origin;
  output.originPoint = delta.originPoint;
}
function mixAxis(output, from, to, p) {
  output.min = mix(from.min, to.min, p);
  output.max = mix(from.max, to.max, p);
}
function mixBox(output, from, to, p) {
  mixAxis(output.x, from.x, to.x, p);
  mixAxis(output.y, from.y, to.y, p);
}
function hasOpacityCrossfade(node) {
  return node.animationValues && node.animationValues.opacityExit !== void 0;
}
var defaultLayoutTransition = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
};
var userAgentContains = string => typeof navigator !== "undefined" && navigator.userAgent.toLowerCase().includes(string);
var roundPoint = userAgentContains("applewebkit/") && !userAgentContains("chrome/") ? Math.round : noop;
function roundAxis(axis) {
  axis.min = roundPoint(axis.min);
  axis.max = roundPoint(axis.max);
}
function roundBox(box) {
  roundAxis(box.x);
  roundAxis(box.y);
}
function shouldAnimatePositionOnly(animationType, snapshot, layout2) {
  return animationType === "position" || animationType === "preserve-aspect" && !isNear(aspectRatio(snapshot), aspectRatio(layout2), 0.2);
}

// node_modules/framer-motion/dist/es/projection/node/DocumentProjectionNode.mjs
var DocumentProjectionNode = createProjectionNode({
  attachResizeListener: (ref, notify2) => addDomEvent(ref, "resize", notify2),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => true
});

// node_modules/framer-motion/dist/es/projection/node/HTMLProjectionNode.mjs
var rootProjectionNode = {
  current: void 0
};
var HTMLProjectionNode = createProjectionNode({
  measureScroll: instance => ({
    x: instance.scrollLeft,
    y: instance.scrollTop
  }),
  defaultParent: () => {
    if (!rootProjectionNode.current) {
      const documentNode = new DocumentProjectionNode({});
      documentNode.mount(window);
      documentNode.setOptions({
        layoutScroll: true
      });
      rootProjectionNode.current = documentNode;
    }
    return rootProjectionNode.current;
  },
  resetTransform: (instance, value) => {
    instance.style.transform = value !== void 0 ? value : "none";
  },
  checkIsScrollRoot: instance => Boolean(window.getComputedStyle(instance).position === "fixed")
});

// node_modules/framer-motion/dist/es/motion/features/drag.mjs
var drag = {
  pan: {
    Feature: PanGesture
  },
  drag: {
    Feature: DragGesture,
    ProjectionNode: HTMLProjectionNode,
    MeasureLayout
  }
};

// node_modules/framer-motion/dist/es/render/dom/utils/css-variables-conversion.mjs
var splitCSSVariableRegex = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function parseCSSVariable(current) {
  const match = splitCSSVariableRegex.exec(current);
  if (!match) return [,];
  const [, token, fallback] = match;
  return [token, fallback];
}
var maxDepth = 4;
function getVariableValue(current, element, depth = 1) {
  invariant(depth <= maxDepth, `Max CSS variable fallback depth detected in property "${current}". This may indicate a circular fallback dependency.`);
  const [token, fallback] = parseCSSVariable(current);
  if (!token) return;
  const resolved = window.getComputedStyle(element).getPropertyValue(token);
  if (resolved) {
    const trimmed = resolved.trim();
    return isNumericalString(trimmed) ? parseFloat(trimmed) : trimmed;
  } else if (isCSSVariableToken(fallback)) {
    return getVariableValue(fallback, element, depth + 1);
  } else {
    return fallback;
  }
}
function resolveCSSVariables(visualElement, {
  ...target
}, transitionEnd) {
  const element = visualElement.current;
  if (!(element instanceof Element)) return {
    target,
    transitionEnd
  };
  if (transitionEnd) {
    transitionEnd = {
      ...transitionEnd
    };
  }
  visualElement.values.forEach(value => {
    const current = value.get();
    if (!isCSSVariableToken(current)) return;
    const resolved = getVariableValue(current, element);
    if (resolved) value.set(resolved);
  });
  for (const key in target) {
    const current = target[key];
    if (!isCSSVariableToken(current)) continue;
    const resolved = getVariableValue(current, element);
    if (!resolved) continue;
    target[key] = resolved;
    if (!transitionEnd) transitionEnd = {};
    if (transitionEnd[key] === void 0) {
      transitionEnd[key] = current;
    }
  }
  return {
    target,
    transitionEnd
  };
}

// node_modules/framer-motion/dist/es/render/dom/utils/unit-conversion.mjs
var positionalKeys = /* @__PURE__ */new Set(["width", "height", "top", "left", "right", "bottom", "x", "y", "translateX", "translateY"]);
var isPositionalKey = key => positionalKeys.has(key);
var hasPositionalKey = target => {
  return Object.keys(target).some(isPositionalKey);
};
var isNumOrPxType = v => v === number || v === px;
var getPosFromMatrix = (matrix, pos) => parseFloat(matrix.split(", ")[pos]);
var getTranslateFromMatrix = (pos2, pos3) => (_bbox, {
  transform: transform2
}) => {
  if (transform2 === "none" || !transform2) return 0;
  const matrix3d = transform2.match(/^matrix3d\((.+)\)$/);
  if (matrix3d) {
    return getPosFromMatrix(matrix3d[1], pos3);
  } else {
    const matrix = transform2.match(/^matrix\((.+)\)$/);
    if (matrix) {
      return getPosFromMatrix(matrix[1], pos2);
    } else {
      return 0;
    }
  }
};
var transformKeys = /* @__PURE__ */new Set(["x", "y", "z"]);
var nonTranslationalTransformKeys = transformPropOrder.filter(key => !transformKeys.has(key));
function removeNonTranslationalTransform(visualElement) {
  const removedTransforms = [];
  nonTranslationalTransformKeys.forEach(key => {
    const value = visualElement.getValue(key);
    if (value !== void 0) {
      removedTransforms.push([key, value.get()]);
      value.set(key.startsWith("scale") ? 1 : 0);
    }
  });
  if (removedTransforms.length) visualElement.render();
  return removedTransforms;
}
var positionalValues = {
  width: ({
    x
  }, {
    paddingLeft = "0",
    paddingRight = "0"
  }) => x.max - x.min - parseFloat(paddingLeft) - parseFloat(paddingRight),
  height: ({
    y
  }, {
    paddingTop = "0",
    paddingBottom = "0"
  }) => y.max - y.min - parseFloat(paddingTop) - parseFloat(paddingBottom),
  top: (_bbox, {
    top
  }) => parseFloat(top),
  left: (_bbox, {
    left
  }) => parseFloat(left),
  bottom: ({
    y
  }, {
    top
  }) => parseFloat(top) + (y.max - y.min),
  right: ({
    x
  }, {
    left
  }) => parseFloat(left) + (x.max - x.min),
  x: getTranslateFromMatrix(4, 13),
  y: getTranslateFromMatrix(5, 14)
};
positionalValues.translateX = positionalValues.x;
positionalValues.translateY = positionalValues.y;
var convertChangedValueTypes = (target, visualElement, changedKeys) => {
  const originBbox = visualElement.measureViewportBox();
  const element = visualElement.current;
  const elementComputedStyle = getComputedStyle(element);
  const {
    display
  } = elementComputedStyle;
  const origin = {};
  if (display === "none") {
    visualElement.setStaticValue("display", target.display || "block");
  }
  changedKeys.forEach(key => {
    origin[key] = positionalValues[key](originBbox, elementComputedStyle);
  });
  visualElement.render();
  const targetBbox = visualElement.measureViewportBox();
  changedKeys.forEach(key => {
    const value = visualElement.getValue(key);
    value && value.jump(origin[key]);
    target[key] = positionalValues[key](targetBbox, elementComputedStyle);
  });
  return target;
};
var checkAndConvertChangedValueTypes = (visualElement, target, origin = {}, transitionEnd = {}) => {
  target = {
    ...target
  };
  transitionEnd = {
    ...transitionEnd
  };
  const targetPositionalKeys = Object.keys(target).filter(isPositionalKey);
  let removedTransformValues = [];
  let hasAttemptedToRemoveTransformValues = false;
  const changedValueTypeKeys = [];
  targetPositionalKeys.forEach(key => {
    const value = visualElement.getValue(key);
    if (!visualElement.hasValue(key)) return;
    let from = origin[key];
    let fromType = findDimensionValueType(from);
    const to = target[key];
    let toType;
    if (isKeyframesTarget(to)) {
      const numKeyframes = to.length;
      const fromIndex = to[0] === null ? 1 : 0;
      from = to[fromIndex];
      fromType = findDimensionValueType(from);
      for (let i = fromIndex; i < numKeyframes; i++) {
        if (to[i] === null) break;
        if (!toType) {
          toType = findDimensionValueType(to[i]);
          invariant(toType === fromType || isNumOrPxType(fromType) && isNumOrPxType(toType), "Keyframes must be of the same dimension as the current value");
        } else {
          invariant(findDimensionValueType(to[i]) === toType, "All keyframes must be of the same type");
        }
      }
    } else {
      toType = findDimensionValueType(to);
    }
    if (fromType !== toType) {
      if (isNumOrPxType(fromType) && isNumOrPxType(toType)) {
        const current = value.get();
        if (typeof current === "string") {
          value.set(parseFloat(current));
        }
        if (typeof to === "string") {
          target[key] = parseFloat(to);
        } else if (Array.isArray(to) && toType === px) {
          target[key] = to.map(parseFloat);
        }
      } else if ((fromType === null || fromType === void 0 ? void 0 : fromType.transform) && (toType === null || toType === void 0 ? void 0 : toType.transform) && (from === 0 || to === 0)) {
        if (from === 0) {
          value.set(toType.transform(from));
        } else {
          target[key] = fromType.transform(to);
        }
      } else {
        if (!hasAttemptedToRemoveTransformValues) {
          removedTransformValues = removeNonTranslationalTransform(visualElement);
          hasAttemptedToRemoveTransformValues = true;
        }
        changedValueTypeKeys.push(key);
        transitionEnd[key] = transitionEnd[key] !== void 0 ? transitionEnd[key] : target[key];
        value.jump(to);
      }
    }
  });
  if (changedValueTypeKeys.length) {
    const scrollY = changedValueTypeKeys.indexOf("height") >= 0 ? window.pageYOffset : null;
    const convertedTarget = convertChangedValueTypes(target, visualElement, changedValueTypeKeys);
    if (removedTransformValues.length) {
      removedTransformValues.forEach(([key, value]) => {
        visualElement.getValue(key).set(value);
      });
    }
    visualElement.render();
    if (isBrowser && scrollY !== null) {
      window.scrollTo({
        top: scrollY
      });
    }
    return {
      target: convertedTarget,
      transitionEnd
    };
  } else {
    return {
      target,
      transitionEnd
    };
  }
};
function unitConversion(visualElement, target, origin, transitionEnd) {
  return hasPositionalKey(target) ? checkAndConvertChangedValueTypes(visualElement, target, origin, transitionEnd) : {
    target,
    transitionEnd
  };
}

// node_modules/framer-motion/dist/es/render/dom/utils/parse-dom-variant.mjs
var parseDomVariant = (visualElement, target, origin, transitionEnd) => {
  const resolved = resolveCSSVariables(visualElement, target, transitionEnd);
  target = resolved.target;
  transitionEnd = resolved.transitionEnd;
  return unitConversion(visualElement, target, origin, transitionEnd);
};

// node_modules/framer-motion/dist/es/utils/reduced-motion/state.mjs
var prefersReducedMotion = {
  current: null
};
var hasReducedMotionListener = {
  current: false
};

// node_modules/framer-motion/dist/es/utils/reduced-motion/index.mjs
function initPrefersReducedMotion() {
  hasReducedMotionListener.current = true;
  if (!isBrowser) return;
  if (window.matchMedia) {
    const motionMediaQuery = window.matchMedia("(prefers-reduced-motion)");
    const setReducedMotionPreferences = () => prefersReducedMotion.current = motionMediaQuery.matches;
    motionMediaQuery.addListener(setReducedMotionPreferences);
    setReducedMotionPreferences();
  } else {
    prefersReducedMotion.current = false;
  }
}

// node_modules/framer-motion/dist/es/render/utils/motion-values.mjs
function updateMotionValuesFromProps(element, next, prev) {
  const {
    willChange
  } = next;
  for (const key in next) {
    const nextValue = next[key];
    const prevValue = prev[key];
    if (isMotionValue(nextValue)) {
      element.addValue(key, nextValue);
      if (isWillChangeMotionValue(willChange)) {
        willChange.add(key);
      }
      if (true) {
        warnOnce(nextValue.version === "10.17.8", `Attempting to mix Framer Motion versions ${nextValue.version} with 10.17.8 may not work as expected.`);
      }
    } else if (isMotionValue(prevValue)) {
      element.addValue(key, motionValue(nextValue, {
        owner: element
      }));
      if (isWillChangeMotionValue(willChange)) {
        willChange.remove(key);
      }
    } else if (prevValue !== nextValue) {
      if (element.hasValue(key)) {
        const existingValue = element.getValue(key);
        !existingValue.hasAnimated && existingValue.set(nextValue);
      } else {
        const latestValue = element.getStaticValue(key);
        element.addValue(key, motionValue(latestValue !== void 0 ? latestValue : nextValue, {
          owner: element
        }));
      }
    }
  }
  for (const key in prev) {
    if (next[key] === void 0) element.removeValue(key);
  }
  return next;
}

// node_modules/framer-motion/dist/es/render/store.mjs
var visualElementStore = /* @__PURE__ */new WeakMap();

// node_modules/framer-motion/dist/es/render/VisualElement.mjs
var featureNames = Object.keys(featureDefinitions);
var numFeatures = featureNames.length;
var propEventHandlers = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
var numVariantProps = variantProps.length;
var VisualElement = class {
  constructor({
    parent,
    props,
    presenceContext,
    reducedMotionConfig,
    visualState
  }, options = {}) {
    this.current = null;
    this.children = /* @__PURE__ */new Set();
    this.isVariantNode = false;
    this.isControllingVariants = false;
    this.shouldReduceMotion = null;
    this.values = /* @__PURE__ */new Map();
    this.features = {};
    this.valueSubscriptions = /* @__PURE__ */new Map();
    this.prevMotionValues = {};
    this.events = {};
    this.propEventSubscriptions = {};
    this.notifyUpdate = () => this.notify("Update", this.latestValues);
    this.render = () => {
      if (!this.current) return;
      this.triggerBuild();
      this.renderInstance(this.current, this.renderState, this.props.style, this.projection);
    };
    this.scheduleRender = () => frame.render(this.render, false, true);
    const {
      latestValues,
      renderState
    } = visualState;
    this.latestValues = latestValues;
    this.baseTarget = {
      ...latestValues
    };
    this.initialValues = props.initial ? {
      ...latestValues
    } : {};
    this.renderState = renderState;
    this.parent = parent;
    this.props = props;
    this.presenceContext = presenceContext;
    this.depth = parent ? parent.depth + 1 : 0;
    this.reducedMotionConfig = reducedMotionConfig;
    this.options = options;
    this.isControllingVariants = isControllingVariants(props);
    this.isVariantNode = isVariantNode(props);
    if (this.isVariantNode) {
      this.variantChildren = /* @__PURE__ */new Set();
    }
    this.manuallyAnimateOnMount = Boolean(parent && parent.current);
    const {
      willChange,
      ...initialMotionValues
    } = this.scrapeMotionValuesFromProps(props, {});
    for (const key in initialMotionValues) {
      const value = initialMotionValues[key];
      if (latestValues[key] !== void 0 && isMotionValue(value)) {
        value.set(latestValues[key], false);
        if (isWillChangeMotionValue(willChange)) {
          willChange.add(key);
        }
      }
    }
  }
  scrapeMotionValuesFromProps(_props, _prevProps) {
    return {};
  }
  mount(instance) {
    this.current = instance;
    visualElementStore.set(instance, this);
    if (this.projection && !this.projection.instance) {
      this.projection.mount(instance);
    }
    if (this.parent && this.isVariantNode && !this.isControllingVariants) {
      this.removeFromVariantTree = this.parent.addVariantChild(this);
    }
    this.values.forEach((value, key) => this.bindToMotionValue(key, value));
    if (!hasReducedMotionListener.current) {
      initPrefersReducedMotion();
    }
    this.shouldReduceMotion = this.reducedMotionConfig === "never" ? false : this.reducedMotionConfig === "always" ? true : prefersReducedMotion.current;
    if (true) {
      warnOnce(this.shouldReduceMotion !== true, "You have Reduced Motion enabled on your device. Animations may not appear as expected.");
    }
    if (this.parent) this.parent.children.add(this);
    this.update(this.props, this.presenceContext);
  }
  unmount() {
    visualElementStore.delete(this.current);
    this.projection && this.projection.unmount();
    cancelFrame(this.notifyUpdate);
    cancelFrame(this.render);
    this.valueSubscriptions.forEach(remove => remove());
    this.removeFromVariantTree && this.removeFromVariantTree();
    this.parent && this.parent.children.delete(this);
    for (const key in this.events) {
      this.events[key].clear();
    }
    for (const key in this.features) {
      this.features[key].unmount();
    }
    this.current = null;
  }
  bindToMotionValue(key, value) {
    const valueIsTransform = transformProps.has(key);
    const removeOnChange = value.on("change", latestValue => {
      this.latestValues[key] = latestValue;
      this.props.onUpdate && frame.update(this.notifyUpdate, false, true);
      if (valueIsTransform && this.projection) {
        this.projection.isTransformDirty = true;
      }
    });
    const removeOnRenderRequest = value.on("renderRequest", this.scheduleRender);
    this.valueSubscriptions.set(key, () => {
      removeOnChange();
      removeOnRenderRequest();
    });
  }
  sortNodePosition(other) {
    if (!this.current || !this.sortInstanceNodePosition || this.type !== other.type) {
      return 0;
    }
    return this.sortInstanceNodePosition(this.current, other.current);
  }
  loadFeatures({
    children,
    ...renderedProps
  }, isStrict, preloadedFeatures2, initialLayoutGroupConfig) {
    let ProjectionNodeConstructor;
    let MeasureLayout2;
    if (preloadedFeatures2 && isStrict) {
      const strictMessage = "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.";
      renderedProps.ignoreStrict ? warning(false, strictMessage) : invariant(false, strictMessage);
    }
    for (let i = 0; i < numFeatures; i++) {
      const name = featureNames[i];
      const {
        isEnabled,
        Feature: FeatureConstructor,
        ProjectionNode,
        MeasureLayout: MeasureLayoutComponent
      } = featureDefinitions[name];
      if (ProjectionNode) ProjectionNodeConstructor = ProjectionNode;
      if (isEnabled(renderedProps)) {
        if (!this.features[name] && FeatureConstructor) {
          this.features[name] = new FeatureConstructor(this);
        }
        if (MeasureLayoutComponent) {
          MeasureLayout2 = MeasureLayoutComponent;
        }
      }
    }
    if (!this.projection && ProjectionNodeConstructor) {
      this.projection = new ProjectionNodeConstructor(this.latestValues, this.parent && this.parent.projection);
      const {
        layoutId,
        layout: layout2,
        drag: drag2,
        dragConstraints,
        layoutScroll,
        layoutRoot
      } = renderedProps;
      this.projection.setOptions({
        layoutId,
        layout: layout2,
        alwaysMeasureLayout: Boolean(drag2) || dragConstraints && isRefObject(dragConstraints),
        visualElement: this,
        scheduleRender: () => this.scheduleRender(),
        animationType: typeof layout2 === "string" ? layout2 : "both",
        initialPromotionConfig: initialLayoutGroupConfig,
        layoutScroll,
        layoutRoot
      });
    }
    return MeasureLayout2;
  }
  updateFeatures() {
    for (const key in this.features) {
      const feature = this.features[key];
      if (feature.isMounted) {
        feature.update();
      } else {
        feature.mount();
        feature.isMounted = true;
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.options, this.props);
  }
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : createBox();
  }
  getStaticValue(key) {
    return this.latestValues[key];
  }
  setStaticValue(key, value) {
    this.latestValues[key] = value;
  }
  makeTargetAnimatable(target, canMutate = true) {
    return this.makeTargetAnimatableFromInstance(target, this.props, canMutate);
  }
  update(props, presenceContext) {
    if (props.transformTemplate || this.props.transformTemplate) {
      this.scheduleRender();
    }
    this.prevProps = this.props;
    this.props = props;
    this.prevPresenceContext = this.presenceContext;
    this.presenceContext = presenceContext;
    for (let i = 0; i < propEventHandlers.length; i++) {
      const key = propEventHandlers[i];
      if (this.propEventSubscriptions[key]) {
        this.propEventSubscriptions[key]();
        delete this.propEventSubscriptions[key];
      }
      const listener = props["on" + key];
      if (listener) {
        this.propEventSubscriptions[key] = this.on(key, listener);
      }
    }
    this.prevMotionValues = updateMotionValuesFromProps(this, this.scrapeMotionValuesFromProps(props, this.prevProps), this.prevMotionValues);
    if (this.handleChildMotionValue) {
      this.handleChildMotionValue();
    }
  }
  getProps() {
    return this.props;
  }
  getVariant(name) {
    return this.props.variants ? this.props.variants[name] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
  }
  getVariantContext(startAtParent = false) {
    if (startAtParent) {
      return this.parent ? this.parent.getVariantContext() : void 0;
    }
    if (!this.isControllingVariants) {
      const context2 = this.parent ? this.parent.getVariantContext() || {} : {};
      if (this.props.initial !== void 0) {
        context2.initial = this.props.initial;
      }
      return context2;
    }
    const context = {};
    for (let i = 0; i < numVariantProps; i++) {
      const name = variantProps[i];
      const prop = this.props[name];
      if (isVariantLabel(prop) || prop === false) {
        context[name] = prop;
      }
    }
    return context;
  }
  addVariantChild(child) {
    const closestVariantNode = this.getClosestVariantNode();
    if (closestVariantNode) {
      closestVariantNode.variantChildren && closestVariantNode.variantChildren.add(child);
      return () => closestVariantNode.variantChildren.delete(child);
    }
  }
  addValue(key, value) {
    if (value !== this.values.get(key)) {
      this.removeValue(key);
      this.bindToMotionValue(key, value);
    }
    this.values.set(key, value);
    this.latestValues[key] = value.get();
  }
  removeValue(key) {
    this.values.delete(key);
    const unsubscribe = this.valueSubscriptions.get(key);
    if (unsubscribe) {
      unsubscribe();
      this.valueSubscriptions.delete(key);
    }
    delete this.latestValues[key];
    this.removeValueFromRenderState(key, this.renderState);
  }
  hasValue(key) {
    return this.values.has(key);
  }
  getValue(key, defaultValue) {
    if (this.props.values && this.props.values[key]) {
      return this.props.values[key];
    }
    let value = this.values.get(key);
    if (value === void 0 && defaultValue !== void 0) {
      value = motionValue(defaultValue, {
        owner: this
      });
      this.addValue(key, value);
    }
    return value;
  }
  readValue(key) {
    var _a;
    return this.latestValues[key] !== void 0 || !this.current ? this.latestValues[key] : (_a = this.getBaseTargetFromProps(this.props, key)) !== null && _a !== void 0 ? _a : this.readValueFromInstance(this.current, key, this.options);
  }
  setBaseTarget(key, value) {
    this.baseTarget[key] = value;
  }
  getBaseTarget(key) {
    var _a;
    const {
      initial
    } = this.props;
    const valueFromInitial = typeof initial === "string" || typeof initial === "object" ? (_a = resolveVariantFromProps(this.props, initial)) === null || _a === void 0 ? void 0 : _a[key] : void 0;
    if (initial && valueFromInitial !== void 0) {
      return valueFromInitial;
    }
    const target = this.getBaseTargetFromProps(this.props, key);
    if (target !== void 0 && !isMotionValue(target)) return target;
    return this.initialValues[key] !== void 0 && valueFromInitial === void 0 ? void 0 : this.baseTarget[key];
  }
  on(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = new SubscriptionManager();
    }
    return this.events[eventName].add(callback);
  }
  notify(eventName, ...args) {
    if (this.events[eventName]) {
      this.events[eventName].notify(...args);
    }
  }
};

// node_modules/framer-motion/dist/es/render/dom/DOMVisualElement.mjs
var DOMVisualElement = class extends VisualElement {
  sortInstanceNodePosition(a, b) {
    return a.compareDocumentPosition(b) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(props, key) {
    return props.style ? props.style[key] : void 0;
  }
  removeValueFromRenderState(key, {
    vars,
    style
  }) {
    delete vars[key];
    delete style[key];
  }
  makeTargetAnimatableFromInstance({
    transition,
    transitionEnd,
    ...target
  }, {
    transformValues
  }, isMounted) {
    let origin = getOrigin(target, transition || {}, this);
    if (transformValues) {
      if (transitionEnd) transitionEnd = transformValues(transitionEnd);
      if (target) target = transformValues(target);
      if (origin) origin = transformValues(origin);
    }
    if (isMounted) {
      checkTargetForNewValues(this, target, origin);
      const parsed = parseDomVariant(this, target, origin, transitionEnd);
      transitionEnd = parsed.transitionEnd;
      target = parsed.target;
    }
    return {
      transition,
      transitionEnd,
      ...target
    };
  }
};

// node_modules/framer-motion/dist/es/render/html/HTMLVisualElement.mjs
function getComputedStyle2(element) {
  return window.getComputedStyle(element);
}
var HTMLVisualElement = class extends DOMVisualElement {
  readValueFromInstance(instance, key) {
    if (transformProps.has(key)) {
      const defaultType = getDefaultValueType(key);
      return defaultType ? defaultType.default || 0 : 0;
    } else {
      const computedStyle = getComputedStyle2(instance);
      const value = (isCSSVariableName(key) ? computedStyle.getPropertyValue(key) : computedStyle[key]) || 0;
      return typeof value === "string" ? value.trim() : value;
    }
  }
  measureInstanceViewportBox(instance, {
    transformPagePoint
  }) {
    return measureViewportBox(instance, transformPagePoint);
  }
  build(renderState, latestValues, options, props) {
    buildHTMLStyles(renderState, latestValues, options, props.transformTemplate);
  }
  scrapeMotionValuesFromProps(props, prevProps) {
    return scrapeMotionValuesFromProps(props, prevProps);
  }
  handleChildMotionValue() {
    if (this.childSubscription) {
      this.childSubscription();
      delete this.childSubscription;
    }
    const {
      children
    } = this.props;
    if (isMotionValue(children)) {
      this.childSubscription = children.on("change", latest => {
        if (this.current) this.current.textContent = `${latest}`;
      });
    }
  }
  renderInstance(instance, renderState, styleProp, projection) {
    renderHTML(instance, renderState, styleProp, projection);
  }
};

// node_modules/framer-motion/dist/es/render/svg/SVGVisualElement.mjs
var SVGVisualElement = class extends DOMVisualElement {
  constructor() {
    super(...arguments);
    this.isSVGTag = false;
  }
  getBaseTargetFromProps(props, key) {
    return props[key];
  }
  readValueFromInstance(instance, key) {
    if (transformProps.has(key)) {
      const defaultType = getDefaultValueType(key);
      return defaultType ? defaultType.default || 0 : 0;
    }
    key = !camelCaseAttributes.has(key) ? camelToDash(key) : key;
    return instance.getAttribute(key);
  }
  measureInstanceViewportBox() {
    return createBox();
  }
  scrapeMotionValuesFromProps(props, prevProps) {
    return scrapeMotionValuesFromProps2(props, prevProps);
  }
  build(renderState, latestValues, options, props) {
    buildSVGAttrs(renderState, latestValues, options, this.isSVGTag, props.transformTemplate);
  }
  renderInstance(instance, renderState, styleProp, projection) {
    renderSVG(instance, renderState, styleProp, projection);
  }
  mount(instance) {
    this.isSVGTag = isSVGTag(instance.tagName);
    super.mount(instance);
  }
};

// node_modules/framer-motion/dist/es/render/dom/create-visual-element.mjs
var createDomVisualElement = (Component2, options) => {
  return isSVGComponent(Component2) ? new SVGVisualElement(options, {
    enableHardwareAcceleration: false
  }) : new HTMLVisualElement(options, {
    enableHardwareAcceleration: true
  });
};

// node_modules/framer-motion/dist/es/motion/features/layout.mjs
var layout = {
  layout: {
    ProjectionNode: HTMLProjectionNode,
    MeasureLayout
  }
};

// node_modules/framer-motion/dist/es/render/dom/motion.mjs
var preloadedFeatures = {
  ...animations,
  ...gestureAnimations,
  ...drag,
  ...layout
};
var motion = /* @__PURE__ */createMotionProxy((Component2, config) => createDomMotionConfig(Component2, config, preloadedFeatures, createDomVisualElement));
function createDomMotionComponent(key) {
  return createMotionComponent(createDomMotionConfig(key, {
    forwardMotionProps: false
  }, preloadedFeatures, createDomVisualElement));
}

// node_modules/framer-motion/dist/es/render/dom/motion-minimal.mjs
var m = createMotionProxy(createDomMotionConfig);

// node_modules/framer-motion/dist/es/utils/use-is-mounted.mjs
var import_react19 = require("react@18.2.0");
function useIsMounted() {
  const isMounted = (0, import_react19.useRef)(false);
  useIsomorphicLayoutEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);
  return isMounted;
}

// node_modules/framer-motion/dist/es/utils/use-force-update.mjs
var import_react20 = require("react@18.2.0");
function useForceUpdate() {
  const isMounted = useIsMounted();
  const [forcedRenderCount, setForcedRenderCount] = (0, import_react20.useState)(0);
  const forceRender = (0, import_react20.useCallback)(() => {
    isMounted.current && setForcedRenderCount(forcedRenderCount + 1);
  }, [forcedRenderCount]);
  const deferredForceRender = (0, import_react20.useCallback)(() => frame.postRender(forceRender), [forceRender]);
  return [deferredForceRender, forcedRenderCount];
}

// node_modules/framer-motion/dist/es/components/AnimatePresence/PopChild.mjs
var React2 = __toESM(require("react@18.2.0"), 0);
var import_react21 = require("react@18.2.0");
var PopChildMeasure = class extends React2.Component {
  getSnapshotBeforeUpdate(prevProps) {
    const element = this.props.childRef.current;
    if (element && prevProps.isPresent && !this.props.isPresent) {
      const size = this.props.sizeRef.current;
      size.height = element.offsetHeight || 0;
      size.width = element.offsetWidth || 0;
      size.top = element.offsetTop;
      size.left = element.offsetLeft;
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
};
function PopChild({
  children,
  isPresent: isPresent2
}) {
  const id4 = (0, import_react21.useId)();
  const ref = (0, import_react21.useRef)(null);
  const size = (0, import_react21.useRef)({
    width: 0,
    height: 0,
    top: 0,
    left: 0
  });
  (0, import_react21.useInsertionEffect)(() => {
    const {
      width,
      height,
      top,
      left
    } = size.current;
    if (isPresent2 || !ref.current || !width || !height) return;
    ref.current.dataset.motionPopId = id4;
    const style = document.createElement("style");
    document.head.appendChild(style);
    if (style.sheet) {
      style.sheet.insertRule(`
          [data-motion-pop-id="${id4}"] {
            position: absolute !important;
            width: ${width}px !important;
            height: ${height}px !important;
            top: ${top}px !important;
            left: ${left}px !important;
          }
        `);
    }
    return () => {
      document.head.removeChild(style);
    };
  }, [isPresent2]);
  return React2.createElement(PopChildMeasure, {
    isPresent: isPresent2,
    childRef: ref,
    sizeRef: size
  }, React2.cloneElement(children, {
    ref
  }));
}

// node_modules/framer-motion/dist/es/components/AnimatePresence/PresenceChild.mjs
var React3 = __toESM(require("react@18.2.0"), 0);
var import_react22 = require("react@18.2.0");
var PresenceChild = ({
  children,
  initial,
  isPresent: isPresent2,
  onExitComplete,
  custom,
  presenceAffectsLayout,
  mode
}) => {
  const presenceChildren = useConstant(newChildrenMap);
  const id4 = (0, import_react22.useId)();
  const context = (0, import_react22.useMemo)(() => ({
    id: id4,
    initial,
    isPresent: isPresent2,
    custom,
    onExitComplete: childId => {
      presenceChildren.set(childId, true);
      for (const isComplete of presenceChildren.values()) {
        if (!isComplete) return;
      }
      onExitComplete && onExitComplete();
    },
    register: childId => {
      presenceChildren.set(childId, false);
      return () => presenceChildren.delete(childId);
    }
  }), presenceAffectsLayout ? void 0 : [isPresent2]);
  (0, import_react22.useMemo)(() => {
    presenceChildren.forEach((_, key) => presenceChildren.set(key, false));
  }, [isPresent2]);
  React3.useEffect(() => {
    !isPresent2 && !presenceChildren.size && onExitComplete && onExitComplete();
  }, [isPresent2]);
  if (mode === "popLayout") {
    children = React3.createElement(PopChild, {
      isPresent: isPresent2
    }, children);
  }
  return React3.createElement(PresenceContext.Provider, {
    value: context
  }, children);
};
function newChildrenMap() {
  return /* @__PURE__ */new Map();
}

// node_modules/framer-motion/dist/es/utils/use-unmount-effect.mjs
var import_react23 = require("react@18.2.0");
function useUnmountEffect(callback) {
  return (0, import_react23.useEffect)(() => () => callback(), []);
}

// node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs
var React4 = __toESM(require("react@18.2.0"), 0);
var import_react24 = require("react@18.2.0");
var getChildKey = child => child.key || "";
function updateChildLookup(children, allChildren) {
  children.forEach(child => {
    const key = getChildKey(child);
    allChildren.set(key, child);
  });
}
function onlyElements(children) {
  const filtered = [];
  import_react24.Children.forEach(children, child => {
    if ((0, import_react24.isValidElement)(child)) filtered.push(child);
  });
  return filtered;
}
var AnimatePresence = ({
  children,
  custom,
  initial = true,
  onExitComplete,
  exitBeforeEnter,
  presenceAffectsLayout = true,
  mode = "sync"
}) => {
  invariant(!exitBeforeEnter, "Replace exitBeforeEnter with mode='wait'");
  const forceRender = (0, import_react24.useContext)(LayoutGroupContext).forceRender || useForceUpdate()[0];
  const isMounted = useIsMounted();
  const filteredChildren = onlyElements(children);
  let childrenToRender = filteredChildren;
  const exitingChildren = (0, import_react24.useRef)( /* @__PURE__ */new Map()).current;
  const presentChildren = (0, import_react24.useRef)(childrenToRender);
  const allChildren = (0, import_react24.useRef)( /* @__PURE__ */new Map()).current;
  const isInitialRender = (0, import_react24.useRef)(true);
  useIsomorphicLayoutEffect(() => {
    isInitialRender.current = false;
    updateChildLookup(filteredChildren, allChildren);
    presentChildren.current = childrenToRender;
  });
  useUnmountEffect(() => {
    isInitialRender.current = true;
    allChildren.clear();
    exitingChildren.clear();
  });
  if (isInitialRender.current) {
    return React4.createElement(React4.Fragment, null, childrenToRender.map(child => React4.createElement(PresenceChild, {
      key: getChildKey(child),
      isPresent: true,
      initial: initial ? void 0 : false,
      presenceAffectsLayout,
      mode
    }, child)));
  }
  childrenToRender = [...childrenToRender];
  const presentKeys = presentChildren.current.map(getChildKey);
  const targetKeys = filteredChildren.map(getChildKey);
  const numPresent = presentKeys.length;
  for (let i = 0; i < numPresent; i++) {
    const key = presentKeys[i];
    if (targetKeys.indexOf(key) === -1 && !exitingChildren.has(key)) {
      exitingChildren.set(key, void 0);
    }
  }
  if (mode === "wait" && exitingChildren.size) {
    childrenToRender = [];
  }
  exitingChildren.forEach((component, key) => {
    if (targetKeys.indexOf(key) !== -1) return;
    const child = allChildren.get(key);
    if (!child) return;
    const insertionIndex = presentKeys.indexOf(key);
    let exitingComponent = component;
    if (!exitingComponent) {
      const onExit = () => {
        exitingChildren.delete(key);
        const leftOverKeys = Array.from(allChildren.keys()).filter(childKey => !targetKeys.includes(childKey));
        leftOverKeys.forEach(leftOverKey => allChildren.delete(leftOverKey));
        presentChildren.current = filteredChildren.filter(presentChild => {
          const presentChildKey = getChildKey(presentChild);
          return presentChildKey === key || leftOverKeys.includes(presentChildKey);
        });
        if (!exitingChildren.size) {
          if (isMounted.current === false) return;
          forceRender();
          onExitComplete && onExitComplete();
        }
      };
      exitingComponent = React4.createElement(PresenceChild, {
        key: getChildKey(child),
        isPresent: false,
        onExitComplete: onExit,
        custom,
        presenceAffectsLayout,
        mode
      }, child);
      exitingChildren.set(key, exitingComponent);
    }
    childrenToRender.splice(insertionIndex, 0, exitingComponent);
  });
  childrenToRender = childrenToRender.map(child => {
    const key = child.key;
    return exitingChildren.has(key) ? child : React4.createElement(PresenceChild, {
      key: getChildKey(child),
      isPresent: true,
      presenceAffectsLayout,
      mode
    }, child);
  });
  if (mode === "wait" && childrenToRender.length > 1) {
    console.warn(`You're attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.`);
  }
  return React4.createElement(React4.Fragment, null, exitingChildren.size ? childrenToRender : childrenToRender.map(child => (0, import_react24.cloneElement)(child)));
};

// node_modules/framer-motion/dist/es/components/MotionConfig/index.mjs
var React5 = __toESM(require("react@18.2.0"), 0);
var import_react25 = require("react@18.2.0");
function MotionConfig({
  children,
  isValidProp,
  ...config
}) {
  isValidProp && loadExternalIsValidProp(isValidProp);
  config = {
    ...(0, import_react25.useContext)(MotionConfigContext),
    ...config
  };
  config.isStatic = useConstant(() => config.isStatic);
  const context = (0, import_react25.useMemo)(() => config, [JSON.stringify(config.transition), config.transformPagePoint, config.reducedMotion]);
  return React5.createElement(MotionConfigContext.Provider, {
    value: context
  }, children);
}

// node_modules/framer-motion/dist/es/components/LazyMotion/index.mjs
var React6 = __toESM(require("react@18.2.0"), 0);
var import_react26 = require("react@18.2.0");
function LazyMotion({
  children,
  features,
  strict = false
}) {
  const [, setIsLoaded] = (0, import_react26.useState)(!isLazyBundle(features));
  const loadedRenderer = (0, import_react26.useRef)(void 0);
  if (!isLazyBundle(features)) {
    const {
      renderer,
      ...loadedFeatures
    } = features;
    loadedRenderer.current = renderer;
    loadFeatures(loadedFeatures);
  }
  (0, import_react26.useEffect)(() => {
    if (isLazyBundle(features)) {
      features().then(({
        renderer,
        ...loadedFeatures
      }) => {
        loadFeatures(loadedFeatures);
        loadedRenderer.current = renderer;
        setIsLoaded(true);
      });
    }
  }, []);
  return React6.createElement(LazyContext.Provider, {
    value: {
      renderer: loadedRenderer.current,
      strict
    }
  }, children);
}
function isLazyBundle(features) {
  return typeof features === "function";
}

// node_modules/framer-motion/dist/es/context/DeprecatedLayoutGroupContext.mjs
var import_react27 = require("react@18.2.0");
var DeprecatedLayoutGroupContext = (0, import_react27.createContext)(null);

// node_modules/framer-motion/dist/es/projection/node/group.mjs
var notify = node => !node.isLayoutDirty && node.willUpdate(false);
function nodeGroup() {
  const nodes = /* @__PURE__ */new Set();
  const subscriptions = /* @__PURE__ */new WeakMap();
  const dirtyAll = () => nodes.forEach(notify);
  return {
    add: node => {
      nodes.add(node);
      subscriptions.set(node, node.addEventListener("willUpdate", dirtyAll));
    },
    remove: node => {
      nodes.delete(node);
      const unsubscribe = subscriptions.get(node);
      if (unsubscribe) {
        unsubscribe();
        subscriptions.delete(node);
      }
      dirtyAll();
    },
    dirty: dirtyAll
  };
}

// node_modules/framer-motion/dist/es/components/LayoutGroup/index.mjs
var React7 = __toESM(require("react@18.2.0"), 0);
var import_react28 = require("react@18.2.0");
var shouldInheritGroup = inherit => inherit === true;
var shouldInheritId = inherit => shouldInheritGroup(inherit === true) || inherit === "id";
var LayoutGroup = ({
  children,
  id: id4,
  inherit = true
}) => {
  const layoutGroupContext = (0, import_react28.useContext)(LayoutGroupContext);
  const deprecatedLayoutGroupContext = (0, import_react28.useContext)(DeprecatedLayoutGroupContext);
  const [forceRender, key] = useForceUpdate();
  const context = (0, import_react28.useRef)(null);
  const upstreamId = layoutGroupContext.id || deprecatedLayoutGroupContext;
  if (context.current === null) {
    if (shouldInheritId(inherit) && upstreamId) {
      id4 = id4 ? upstreamId + "-" + id4 : upstreamId;
    }
    context.current = {
      id: id4,
      group: shouldInheritGroup(inherit) ? layoutGroupContext.group || nodeGroup() : nodeGroup()
    };
  }
  const memoizedContext = (0, import_react28.useMemo)(() => ({
    ...context.current,
    forceRender
  }), [key]);
  return React7.createElement(LayoutGroupContext.Provider, {
    value: memoizedContext
  }, children);
};

// node_modules/framer-motion/dist/es/context/ReorderContext.mjs
var import_react29 = require("react@18.2.0");
var ReorderContext = (0, import_react29.createContext)(null);

// node_modules/framer-motion/dist/es/components/Reorder/utils/check-reorder.mjs
function checkReorder(order, value, offset, velocity) {
  if (!velocity) return order;
  const index = order.findIndex(item2 => item2.value === value);
  if (index === -1) return order;
  const nextOffset = velocity > 0 ? 1 : -1;
  const nextItem = order[index + nextOffset];
  if (!nextItem) return order;
  const item = order[index];
  const nextLayout = nextItem.layout;
  const nextItemCenter = mix(nextLayout.min, nextLayout.max, 0.5);
  if (nextOffset === 1 && item.layout.max + offset > nextItemCenter || nextOffset === -1 && item.layout.min + offset < nextItemCenter) {
    return moveItem(order, index, index + nextOffset);
  }
  return order;
}

// node_modules/framer-motion/dist/es/components/Reorder/Group.mjs
var React8 = __toESM(require("react@18.2.0"), 0);
var import_react30 = require("react@18.2.0");
function ReorderGroup({
  children,
  as = "ul",
  axis = "y",
  onReorder,
  values,
  ...props
}, externalRef) {
  const Component2 = useConstant(() => motion(as));
  const order = [];
  const isReordering = (0, import_react30.useRef)(false);
  invariant(Boolean(values), "Reorder.Group must be provided a values prop");
  const context = {
    axis,
    registerItem: (value, layout2) => {
      const idx = order.findIndex(entry => value === entry.value);
      if (idx !== -1) {
        order[idx].layout = layout2[axis];
      } else {
        order.push({
          value,
          layout: layout2[axis]
        });
      }
      order.sort(compareMin);
    },
    updateOrder: (item, offset, velocity) => {
      if (isReordering.current) return;
      const newOrder = checkReorder(order, item, offset, velocity);
      if (order !== newOrder) {
        isReordering.current = true;
        onReorder(newOrder.map(getValue).filter(value => values.indexOf(value) !== -1));
      }
    }
  };
  (0, import_react30.useEffect)(() => {
    isReordering.current = false;
  });
  return React8.createElement(Component2, {
    ...props,
    ref: externalRef,
    ignoreStrict: true
  }, React8.createElement(ReorderContext.Provider, {
    value: context
  }, children));
}
var Group = (0, import_react30.forwardRef)(ReorderGroup);
function getValue(item) {
  return item.value;
}
function compareMin(a, b) {
  return a.layout.min - b.layout.min;
}

// node_modules/framer-motion/dist/es/value/use-motion-value.mjs
var import_react31 = require("react@18.2.0");
function useMotionValue(initial) {
  const value = useConstant(() => motionValue(initial));
  const {
    isStatic
  } = (0, import_react31.useContext)(MotionConfigContext);
  if (isStatic) {
    const [, setLatest] = (0, import_react31.useState)(initial);
    (0, import_react31.useEffect)(() => value.on("change", setLatest), []);
  }
  return value;
}

// node_modules/framer-motion/dist/es/utils/transform.mjs
var isCustomValueType = v => {
  return v && typeof v === "object" && v.mix;
};
var getMixer2 = v => isCustomValueType(v) ? v.mix : void 0;
function transform(...args) {
  const useImmediate = !Array.isArray(args[0]);
  const argOffset = useImmediate ? 0 : -1;
  const inputValue = args[0 + argOffset];
  const inputRange = args[1 + argOffset];
  const outputRange = args[2 + argOffset];
  const options = args[3 + argOffset];
  const interpolator = interpolate(inputRange, outputRange, {
    mixer: getMixer2(outputRange[0]),
    ...options
  });
  return useImmediate ? interpolator(inputValue) : interpolator;
}

// node_modules/framer-motion/dist/es/value/use-combine-values.mjs
function useCombineMotionValues(values, combineValues) {
  const value = useMotionValue(combineValues());
  const updateValue = () => value.set(combineValues());
  updateValue();
  useIsomorphicLayoutEffect(() => {
    const scheduleUpdate = () => frame.update(updateValue, false, true);
    const subscriptions = values.map(v => v.on("change", scheduleUpdate));
    return () => {
      subscriptions.forEach(unsubscribe => unsubscribe());
      cancelFrame(updateValue);
    };
  });
  return value;
}

// node_modules/framer-motion/dist/es/value/use-computed.mjs
function useComputed(compute) {
  collectMotionValues.current = [];
  compute();
  const value = useCombineMotionValues(collectMotionValues.current, compute);
  collectMotionValues.current = void 0;
  return value;
}

// node_modules/framer-motion/dist/es/value/use-transform.mjs
function useTransform(input, inputRangeOrTransformer, outputRange, options) {
  if (typeof input === "function") {
    return useComputed(input);
  }
  const transformer = typeof inputRangeOrTransformer === "function" ? inputRangeOrTransformer : transform(inputRangeOrTransformer, outputRange, options);
  return Array.isArray(input) ? useListTransform(input, transformer) : useListTransform([input], ([latest]) => transformer(latest));
}
function useListTransform(values, transformer) {
  const latest = useConstant(() => []);
  return useCombineMotionValues(values, () => {
    latest.length = 0;
    const numValues = values.length;
    for (let i = 0; i < numValues; i++) {
      latest[i] = values[i].get();
    }
    return transformer(latest);
  });
}

// node_modules/framer-motion/dist/es/components/Reorder/Item.mjs
var React9 = __toESM(require("react@18.2.0"), 0);
var import_react32 = require("react@18.2.0");
function useDefaultMotionValue(value, defaultValue = 0) {
  return isMotionValue(value) ? value : useMotionValue(defaultValue);
}
function ReorderItem({
  children,
  style = {},
  value,
  as = "li",
  onDrag,
  layout: layout2 = true,
  ...props
}, externalRef) {
  const Component2 = useConstant(() => motion(as));
  const context = (0, import_react32.useContext)(ReorderContext);
  const point2 = {
    x: useDefaultMotionValue(style.x),
    y: useDefaultMotionValue(style.y)
  };
  const zIndex = useTransform([point2.x, point2.y], ([latestX, latestY]) => latestX || latestY ? 1 : "unset");
  invariant(Boolean(context), "Reorder.Item must be a child of Reorder.Group");
  const {
    axis,
    registerItem,
    updateOrder
  } = context;
  return React9.createElement(Component2, {
    drag: axis,
    ...props,
    dragSnapToOrigin: true,
    style: {
      ...style,
      x: point2.x,
      y: point2.y,
      zIndex
    },
    layout: layout2,
    onDrag: (event, gesturePoint) => {
      const {
        velocity
      } = gesturePoint;
      velocity[axis] && updateOrder(value, point2[axis].get(), velocity[axis]);
      onDrag && onDrag(event, gesturePoint);
    },
    onLayoutMeasure: measured => registerItem(value, measured),
    ref: externalRef,
    ignoreStrict: true
  }, children);
}
var Item = (0, import_react32.forwardRef)(ReorderItem);

// node_modules/framer-motion/dist/es/components/Reorder/index.mjs
var Reorder = {
  Group,
  Item
};

// node_modules/framer-motion/dist/es/render/dom/features-animation.mjs
var domAnimation = {
  renderer: createDomVisualElement,
  ...animations,
  ...gestureAnimations
};

// node_modules/framer-motion/dist/es/render/dom/features-max.mjs
var domMax = {
  ...domAnimation,
  ...drag,
  ...layout
};

// node_modules/framer-motion/dist/es/value/use-motion-template.mjs
function useMotionTemplate(fragments, ...values) {
  const numFragments = fragments.length;
  function buildValue() {
    let output = ``;
    for (let i = 0; i < numFragments; i++) {
      output += fragments[i];
      const value = values[i];
      if (value) {
        output += isMotionValue(value) ? value.get() : value;
      }
    }
    return output;
  }
  return useCombineMotionValues(values.filter(isMotionValue), buildValue);
}

// node_modules/framer-motion/dist/es/value/use-spring.mjs
var import_react33 = require("react@18.2.0");
function useSpring(source, config = {}) {
  const {
    isStatic
  } = (0, import_react33.useContext)(MotionConfigContext);
  const activeSpringAnimation = (0, import_react33.useRef)(null);
  const value = useMotionValue(isMotionValue(source) ? source.get() : source);
  const stopAnimation2 = () => {
    if (activeSpringAnimation.current) {
      activeSpringAnimation.current.stop();
    }
  };
  (0, import_react33.useInsertionEffect)(() => {
    return value.attach((v, set) => {
      if (isStatic) return set(v);
      stopAnimation2();
      activeSpringAnimation.current = animateValue({
        keyframes: [value.get(), v],
        velocity: value.getVelocity(),
        type: "spring",
        restDelta: 1e-3,
        restSpeed: 0.01,
        ...config,
        onUpdate: set
      });
      if (!frameData.isProcessing) {
        const delta = performance.now() - frameData.timestamp;
        if (delta < 30) {
          activeSpringAnimation.current.time = millisecondsToSeconds(delta);
        }
      }
      return value.get();
    }, stopAnimation2);
  }, [JSON.stringify(config)]);
  useIsomorphicLayoutEffect(() => {
    if (isMotionValue(source)) {
      return source.on("change", v => value.set(parseFloat(v)));
    }
  }, [value]);
  return value;
}

// node_modules/framer-motion/dist/es/utils/use-motion-value-event.mjs
var import_react34 = require("react@18.2.0");
function useMotionValueEvent(value, event, callback) {
  (0, import_react34.useInsertionEffect)(() => value.on(event, callback), [value, event, callback]);
}

// node_modules/framer-motion/dist/es/value/use-velocity.mjs
function useVelocity(value) {
  const velocity = useMotionValue(value.getVelocity());
  useMotionValueEvent(value, "velocityChange", newVelocity => {
    velocity.set(newVelocity);
  });
  return velocity;
}

// node_modules/framer-motion/dist/es/render/dom/utils/resolve-element.mjs
function resolveElements(elements, scope, selectorCache) {
  var _a;
  if (typeof elements === "string") {
    let root = document;
    if (scope) {
      invariant(Boolean(scope.current), "Scope provided, but no element detected.");
      root = scope.current;
    }
    if (selectorCache) {
      (_a = selectorCache[elements]) !== null && _a !== void 0 ? _a : selectorCache[elements] = root.querySelectorAll(elements);
      elements = selectorCache[elements];
    } else {
      elements = root.querySelectorAll(elements);
    }
  } else if (elements instanceof Element) {
    elements = [elements];
  }
  return Array.from(elements || []);
}

// node_modules/framer-motion/dist/es/render/dom/resize/handle-element.mjs
var resizeHandlers = /* @__PURE__ */new WeakMap();
var observer;
function getElementSize(target, borderBoxSize) {
  if (borderBoxSize) {
    const {
      inlineSize,
      blockSize
    } = borderBoxSize[0];
    return {
      width: inlineSize,
      height: blockSize
    };
  } else if (target instanceof SVGElement && "getBBox" in target) {
    return target.getBBox();
  } else {
    return {
      width: target.offsetWidth,
      height: target.offsetHeight
    };
  }
}
function notifyTarget({
  target,
  contentRect,
  borderBoxSize
}) {
  var _a;
  (_a = resizeHandlers.get(target)) === null || _a === void 0 ? void 0 : _a.forEach(handler => {
    handler({
      target,
      contentSize: contentRect,
      get size() {
        return getElementSize(target, borderBoxSize);
      }
    });
  });
}
function notifyAll(entries) {
  entries.forEach(notifyTarget);
}
function createResizeObserver() {
  if (typeof ResizeObserver === "undefined") return;
  observer = new ResizeObserver(notifyAll);
}
function resizeElement(target, handler) {
  if (!observer) createResizeObserver();
  const elements = resolveElements(target);
  elements.forEach(element => {
    let elementHandlers = resizeHandlers.get(element);
    if (!elementHandlers) {
      elementHandlers = /* @__PURE__ */new Set();
      resizeHandlers.set(element, elementHandlers);
    }
    elementHandlers.add(handler);
    observer === null || observer === void 0 ? void 0 : observer.observe(element);
  });
  return () => {
    elements.forEach(element => {
      const elementHandlers = resizeHandlers.get(element);
      elementHandlers === null || elementHandlers === void 0 ? void 0 : elementHandlers.delete(handler);
      if (!(elementHandlers === null || elementHandlers === void 0 ? void 0 : elementHandlers.size)) {
        observer === null || observer === void 0 ? void 0 : observer.unobserve(element);
      }
    });
  };
}

// node_modules/framer-motion/dist/es/render/dom/resize/handle-window.mjs
var windowCallbacks = /* @__PURE__ */new Set();
var windowResizeHandler;
function createWindowResizeHandler() {
  windowResizeHandler = () => {
    const size = {
      width: window.innerWidth,
      height: window.innerHeight
    };
    const info = {
      target: window,
      size,
      contentSize: size
    };
    windowCallbacks.forEach(callback => callback(info));
  };
  window.addEventListener("resize", windowResizeHandler);
}
function resizeWindow(callback) {
  windowCallbacks.add(callback);
  if (!windowResizeHandler) createWindowResizeHandler();
  return () => {
    windowCallbacks.delete(callback);
    if (!windowCallbacks.size && windowResizeHandler) {
      windowResizeHandler = void 0;
    }
  };
}

// node_modules/framer-motion/dist/es/render/dom/resize/index.mjs
function resize(a, b) {
  return typeof a === "function" ? resizeWindow(a) : resizeElement(a, b);
}

// node_modules/framer-motion/dist/es/render/dom/scroll/info.mjs
var maxElapsed2 = 50;
var createAxisInfo = () => ({
  current: 0,
  offset: [],
  progress: 0,
  scrollLength: 0,
  targetOffset: 0,
  targetLength: 0,
  containerLength: 0,
  velocity: 0
});
var createScrollInfo = () => ({
  time: 0,
  x: createAxisInfo(),
  y: createAxisInfo()
});
var keys = {
  x: {
    length: "Width",
    position: "Left"
  },
  y: {
    length: "Height",
    position: "Top"
  }
};
function updateAxisInfo(element, axisName, info, time) {
  const axis = info[axisName];
  const {
    length,
    position
  } = keys[axisName];
  const prev = axis.current;
  const prevTime = info.time;
  axis.current = element["scroll" + position];
  axis.scrollLength = element["scroll" + length] - element["client" + length];
  axis.offset.length = 0;
  axis.offset[0] = 0;
  axis.offset[1] = axis.scrollLength;
  axis.progress = progress(0, axis.scrollLength, axis.current);
  const elapsed = time - prevTime;
  axis.velocity = elapsed > maxElapsed2 ? 0 : velocityPerSecond(axis.current - prev, elapsed);
}
function updateScrollInfo(element, info, time) {
  updateAxisInfo(element, "x", info, time);
  updateAxisInfo(element, "y", info, time);
  info.time = time;
}

// node_modules/framer-motion/dist/es/render/dom/scroll/offsets/inset.mjs
function calcInset(element, container) {
  const inset = {
    x: 0,
    y: 0
  };
  let current = element;
  while (current && current !== container) {
    if (current instanceof HTMLElement) {
      inset.x += current.offsetLeft;
      inset.y += current.offsetTop;
      current = current.offsetParent;
    } else if (current.tagName === "svg") {
      const svgBoundingBox = current.getBoundingClientRect();
      current = current.parentElement;
      const parentBoundingBox = current.getBoundingClientRect();
      inset.x += svgBoundingBox.left - parentBoundingBox.left;
      inset.y += svgBoundingBox.top - parentBoundingBox.top;
    } else if (current instanceof SVGGraphicsElement) {
      const {
        x,
        y
      } = current.getBBox();
      inset.x += x;
      inset.y += y;
      let svg = null;
      let parent = current.parentNode;
      while (!svg) {
        if (parent.tagName === "svg") {
          svg = parent;
        }
        parent = current.parentNode;
      }
      current = svg;
    } else {
      break;
    }
  }
  return inset;
}

// node_modules/framer-motion/dist/es/render/dom/scroll/offsets/presets.mjs
var ScrollOffset = {
  Enter: [[0, 1], [1, 1]],
  Exit: [[0, 0], [1, 0]],
  Any: [[1, 0], [0, 1]],
  All: [[0, 0], [1, 1]]
};

// node_modules/framer-motion/dist/es/render/dom/scroll/offsets/edge.mjs
var namedEdges = {
  start: 0,
  center: 0.5,
  end: 1
};
function resolveEdge(edge, length, inset = 0) {
  let delta = 0;
  if (namedEdges[edge] !== void 0) {
    edge = namedEdges[edge];
  }
  if (typeof edge === "string") {
    const asNumber2 = parseFloat(edge);
    if (edge.endsWith("px")) {
      delta = asNumber2;
    } else if (edge.endsWith("%")) {
      edge = asNumber2 / 100;
    } else if (edge.endsWith("vw")) {
      delta = asNumber2 / 100 * document.documentElement.clientWidth;
    } else if (edge.endsWith("vh")) {
      delta = asNumber2 / 100 * document.documentElement.clientHeight;
    } else {
      edge = asNumber2;
    }
  }
  if (typeof edge === "number") {
    delta = length * edge;
  }
  return inset + delta;
}

// node_modules/framer-motion/dist/es/render/dom/scroll/offsets/offset.mjs
var defaultOffset2 = [0, 0];
function resolveOffset(offset, containerLength, targetLength, targetInset) {
  let offsetDefinition = Array.isArray(offset) ? offset : defaultOffset2;
  let targetPoint = 0;
  let containerPoint = 0;
  if (typeof offset === "number") {
    offsetDefinition = [offset, offset];
  } else if (typeof offset === "string") {
    offset = offset.trim();
    if (offset.includes(" ")) {
      offsetDefinition = offset.split(" ");
    } else {
      offsetDefinition = [offset, namedEdges[offset] ? offset : `0`];
    }
  }
  targetPoint = resolveEdge(offsetDefinition[0], targetLength, targetInset);
  containerPoint = resolveEdge(offsetDefinition[1], containerLength);
  return targetPoint - containerPoint;
}

// node_modules/framer-motion/dist/es/render/dom/scroll/offsets/index.mjs
var point = {
  x: 0,
  y: 0
};
function getTargetSize(target) {
  return "getBBox" in target && target.tagName !== "svg" ? target.getBBox() : {
    width: target.clientWidth,
    height: target.clientHeight
  };
}
function resolveOffsets(container, info, options) {
  let {
    offset: offsetDefinition = ScrollOffset.All
  } = options;
  const {
    target = container,
    axis = "y"
  } = options;
  const lengthLabel = axis === "y" ? "height" : "width";
  const inset = target !== container ? calcInset(target, container) : point;
  const targetSize = target === container ? {
    width: container.scrollWidth,
    height: container.scrollHeight
  } : getTargetSize(target);
  const containerSize = {
    width: container.clientWidth,
    height: container.clientHeight
  };
  info[axis].offset.length = 0;
  let hasChanged = !info[axis].interpolate;
  const numOffsets = offsetDefinition.length;
  for (let i = 0; i < numOffsets; i++) {
    const offset = resolveOffset(offsetDefinition[i], containerSize[lengthLabel], targetSize[lengthLabel], inset[axis]);
    if (!hasChanged && offset !== info[axis].interpolatorOffsets[i]) {
      hasChanged = true;
    }
    info[axis].offset[i] = offset;
  }
  if (hasChanged) {
    info[axis].interpolate = interpolate(info[axis].offset, defaultOffset(offsetDefinition));
    info[axis].interpolatorOffsets = [...info[axis].offset];
  }
  info[axis].progress = info[axis].interpolate(info[axis].current);
}

// node_modules/framer-motion/dist/es/render/dom/scroll/on-scroll-handler.mjs
function measure(container, target = container, info) {
  info.x.targetOffset = 0;
  info.y.targetOffset = 0;
  if (target !== container) {
    let node = target;
    while (node && node !== container) {
      info.x.targetOffset += node.offsetLeft;
      info.y.targetOffset += node.offsetTop;
      node = node.offsetParent;
    }
  }
  info.x.targetLength = target === container ? target.scrollWidth : target.clientWidth;
  info.y.targetLength = target === container ? target.scrollHeight : target.clientHeight;
  info.x.containerLength = container.clientWidth;
  info.y.containerLength = container.clientHeight;
  if (true) {
    if (container && target && target !== container) {
      warnOnce(getComputedStyle(container).position !== "static", "Please ensure that the container has a non-static position, like 'relative', 'fixed', or 'absolute' to ensure scroll offset is calculated correctly.");
    }
  }
}
function createOnScrollHandler(element, onScroll, info, options = {}) {
  return {
    measure: () => measure(element, options.target, info),
    update: time => {
      updateScrollInfo(element, info, time);
      if (options.offset || options.target) {
        resolveOffsets(element, info, options);
      }
    },
    notify: () => onScroll(info)
  };
}

// node_modules/framer-motion/dist/es/render/dom/scroll/track.mjs
var scrollListeners = /* @__PURE__ */new WeakMap();
var resizeListeners = /* @__PURE__ */new WeakMap();
var onScrollHandlers = /* @__PURE__ */new WeakMap();
var getEventTarget = element => element === document.documentElement ? window : element;
function scrollInfo(onScroll, {
  container = document.documentElement,
  ...options
} = {}) {
  let containerHandlers = onScrollHandlers.get(container);
  if (!containerHandlers) {
    containerHandlers = /* @__PURE__ */new Set();
    onScrollHandlers.set(container, containerHandlers);
  }
  const info = createScrollInfo();
  const containerHandler = createOnScrollHandler(container, onScroll, info, options);
  containerHandlers.add(containerHandler);
  if (!scrollListeners.has(container)) {
    const measureAll = () => {
      for (const handler of containerHandlers) handler.measure();
    };
    const updateAll = () => {
      for (const handler of containerHandlers) {
        handler.update(frameData.timestamp);
      }
    };
    const notifyAll2 = () => {
      for (const handler of containerHandlers) handler.notify();
    };
    const listener2 = () => {
      frame.read(measureAll, false, true);
      frame.read(updateAll, false, true);
      frame.update(notifyAll2, false, true);
    };
    scrollListeners.set(container, listener2);
    const target = getEventTarget(container);
    window.addEventListener("resize", listener2, {
      passive: true
    });
    if (container !== document.documentElement) {
      resizeListeners.set(container, resize(container, listener2));
    }
    target.addEventListener("scroll", listener2, {
      passive: true
    });
  }
  const listener = scrollListeners.get(container);
  frame.read(listener, false, true);
  return () => {
    var _a;
    cancelFrame(listener);
    const currentHandlers = onScrollHandlers.get(container);
    if (!currentHandlers) return;
    currentHandlers.delete(containerHandler);
    if (currentHandlers.size) return;
    const scrollListener = scrollListeners.get(container);
    scrollListeners.delete(container);
    if (scrollListener) {
      getEventTarget(container).removeEventListener("scroll", scrollListener);
      (_a = resizeListeners.get(container)) === null || _a === void 0 ? void 0 : _a();
      window.removeEventListener("resize", scrollListener);
    }
  };
}

// node_modules/framer-motion/dist/es/value/use-scroll.mjs
var import_react35 = require("react@18.2.0");
function refWarning(name, ref) {
  warning(Boolean(!ref || ref.current), `You have defined a ${name} options but the provided ref is not yet hydrated, probably because it's defined higher up the tree. Try calling useScroll() in the same component as the ref, or setting its \`layoutEffect: false\` option.`);
}
var createScrollMotionValues = () => ({
  scrollX: motionValue(0),
  scrollY: motionValue(0),
  scrollXProgress: motionValue(0),
  scrollYProgress: motionValue(0)
});
function useScroll({
  container,
  target,
  layoutEffect = true,
  ...options
} = {}) {
  const values = useConstant(createScrollMotionValues);
  const useLifecycleEffect = layoutEffect ? useIsomorphicLayoutEffect : import_react35.useEffect;
  useLifecycleEffect(() => {
    refWarning("target", target);
    refWarning("container", container);
    return scrollInfo(({
      x,
      y
    }) => {
      values.scrollX.set(x.current);
      values.scrollXProgress.set(x.progress);
      values.scrollY.set(y.current);
      values.scrollYProgress.set(y.progress);
    }, {
      ...options,
      container: (container === null || container === void 0 ? void 0 : container.current) || void 0,
      target: (target === null || target === void 0 ? void 0 : target.current) || void 0
    });
  }, [container, target, JSON.stringify(options.offset)]);
  return values;
}

// node_modules/framer-motion/dist/es/value/scroll/use-element-scroll.mjs
function useElementScroll(ref) {
  if (true) {
    warnOnce(false, "useElementScroll is deprecated. Convert to useScroll({ container: ref }).");
  }
  return useScroll({
    container: ref
  });
}

// node_modules/framer-motion/dist/es/value/scroll/use-viewport-scroll.mjs
function useViewportScroll() {
  if (true) {
    warnOnce(false, "useViewportScroll is deprecated. Convert to useScroll().");
  }
  return useScroll();
}

// node_modules/framer-motion/dist/es/utils/use-animation-frame.mjs
var import_react36 = require("react@18.2.0");
function useAnimationFrame(callback) {
  const initialTimestamp = (0, import_react36.useRef)(0);
  const {
    isStatic
  } = (0, import_react36.useContext)(MotionConfigContext);
  (0, import_react36.useEffect)(() => {
    if (isStatic) return;
    const provideTimeSinceStart = ({
      timestamp,
      delta
    }) => {
      if (!initialTimestamp.current) initialTimestamp.current = timestamp;
      callback(timestamp - initialTimestamp.current, delta);
    };
    frame.update(provideTimeSinceStart, true);
    return () => cancelFrame(provideTimeSinceStart);
  }, [callback]);
}

// node_modules/framer-motion/dist/es/value/use-time.mjs
function useTime() {
  const time = useMotionValue(0);
  useAnimationFrame(t => time.set(t));
  return time;
}

// node_modules/framer-motion/dist/es/value/use-will-change/index.mjs
var WillChangeMotionValue = class extends MotionValue {
  constructor() {
    super(...arguments);
    this.members = [];
    this.transforms = /* @__PURE__ */new Set();
  }
  add(name) {
    let memberName;
    if (transformProps.has(name)) {
      this.transforms.add(name);
      memberName = "transform";
    } else if (!name.startsWith("origin") && !isCSSVariableName(name) && name !== "willChange") {
      memberName = camelToDash(name);
    }
    if (memberName) {
      addUniqueItem(this.members, memberName);
      this.update();
    }
  }
  remove(name) {
    if (transformProps.has(name)) {
      this.transforms.delete(name);
      if (!this.transforms.size) {
        removeItem(this.members, "transform");
      }
    } else {
      removeItem(this.members, camelToDash(name));
    }
    this.update();
  }
  update() {
    this.set(this.members.length ? this.members.join(", ") : "auto");
  }
};
function useWillChange() {
  return useConstant(() => new WillChangeMotionValue("auto"));
}

// node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs
var import_react37 = require("react@18.2.0");
function useReducedMotion() {
  !hasReducedMotionListener.current && initPrefersReducedMotion();
  const [shouldReduceMotion] = (0, import_react37.useState)(prefersReducedMotion.current);
  if (true) {
    warnOnce(shouldReduceMotion !== true, "You have Reduced Motion enabled on your device. Animations may not appear as expected.");
  }
  return shouldReduceMotion;
}

// node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion-config.mjs
var import_react38 = require("react@18.2.0");
function useReducedMotionConfig() {
  const reducedMotionPreference = useReducedMotion();
  const {
    reducedMotion
  } = (0, import_react38.useContext)(MotionConfigContext);
  if (reducedMotion === "never") {
    return false;
  } else if (reducedMotion === "always") {
    return true;
  } else {
    return reducedMotionPreference;
  }
}

// node_modules/framer-motion/dist/es/animation/hooks/animation-controls.mjs
function stopAnimation(visualElement) {
  visualElement.values.forEach(value => value.stop());
}
function animationControls() {
  let hasMounted = false;
  const subscribers = /* @__PURE__ */new Set();
  const controls = {
    subscribe(visualElement) {
      subscribers.add(visualElement);
      return () => void subscribers.delete(visualElement);
    },
    start(definition, transitionOverride) {
      invariant(hasMounted, "controls.start() should only be called after a component has mounted. Consider calling within a useEffect hook.");
      const animations2 = [];
      subscribers.forEach(visualElement => {
        animations2.push(animateVisualElement(visualElement, definition, {
          transitionOverride
        }));
      });
      return Promise.all(animations2);
    },
    set(definition) {
      invariant(hasMounted, "controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook.");
      return subscribers.forEach(visualElement => {
        setValues(visualElement, definition);
      });
    },
    stop() {
      subscribers.forEach(visualElement => {
        stopAnimation(visualElement);
      });
    },
    mount() {
      hasMounted = true;
      return () => {
        hasMounted = false;
        controls.stop();
      };
    }
  };
  return controls;
}

// node_modules/framer-motion/dist/es/render/dom/scroll/observe.mjs
function observeTimeline(update, timeline) {
  let prevProgress;
  const onFrame = () => {
    const {
      currentTime
    } = timeline;
    const percentage = currentTime === null ? 0 : currentTime.value;
    const progress2 = percentage / 100;
    if (prevProgress !== progress2) {
      update(progress2);
    }
    prevProgress = progress2;
  };
  frame.update(onFrame, true);
  return () => cancelFrame(onFrame);
}

// node_modules/framer-motion/dist/es/render/dom/scroll/supports.mjs
var supportsScrollTimeline = memo(() => window.ScrollTimeline !== void 0);

// node_modules/framer-motion/dist/es/animation/GroupPlaybackControls.mjs
var GroupPlaybackControls = class {
  constructor(animations2) {
    this.animations = animations2.filter(Boolean);
  }
  then(onResolve, onReject) {
    return Promise.all(this.animations).then(onResolve).catch(onReject);
  }
  getAll(propName) {
    return this.animations[0][propName];
  }
  setAll(propName, newValue) {
    for (let i = 0; i < this.animations.length; i++) {
      this.animations[i][propName] = newValue;
    }
  }
  attachTimeline(timeline) {
    const cancelAll = this.animations.map(animation => {
      if (supportsScrollTimeline() && animation.attachTimeline) {
        animation.attachTimeline(timeline);
      } else {
        animation.pause();
        return observeTimeline(progress2 => {
          animation.time = animation.duration * progress2;
        }, timeline);
      }
    });
    return () => {
      cancelAll.forEach((cancelTimeline, i) => {
        if (cancelTimeline) cancelTimeline();
        this.animations[i].stop();
      });
    };
  }
  get time() {
    return this.getAll("time");
  }
  set time(time) {
    this.setAll("time", time);
  }
  get speed() {
    return this.getAll("speed");
  }
  set speed(speed) {
    this.setAll("speed", speed);
  }
  get duration() {
    let max = 0;
    for (let i = 0; i < this.animations.length; i++) {
      max = Math.max(max, this.animations[i].duration);
    }
    return max;
  }
  runAll(methodName) {
    this.animations.forEach(controls => controls[methodName]());
  }
  play() {
    this.runAll("play");
  }
  pause() {
    this.runAll("pause");
  }
  stop() {
    this.runAll("stop");
  }
  cancel() {
    this.runAll("cancel");
  }
  complete() {
    this.runAll("complete");
  }
};

// node_modules/framer-motion/dist/es/animation/utils/is-dom-keyframes.mjs
function isDOMKeyframes(keyframes2) {
  return typeof keyframes2 === "object" && !Array.isArray(keyframes2);
}

// node_modules/framer-motion/dist/es/animation/utils/create-visual-element.mjs
function createVisualElement(element) {
  const options = {
    presenceContext: null,
    props: {},
    visualState: {
      renderState: {
        transform: {},
        transformOrigin: {},
        style: {},
        vars: {},
        attrs: {}
      },
      latestValues: {}
    }
  };
  const node = isSVGElement(element) ? new SVGVisualElement(options, {
    enableHardwareAcceleration: false
  }) : new HTMLVisualElement(options, {
    enableHardwareAcceleration: true
  });
  node.mount(element);
  visualElementStore.set(element, node);
}

// node_modules/framer-motion/dist/es/easing/utils/create-generator-easing.mjs
function createGeneratorEasing(options, scale2 = 100) {
  const generator = spring({
    keyframes: [0, scale2],
    ...options
  });
  const duration = Math.min(calcGeneratorDuration(generator), maxGeneratorDuration);
  return {
    type: "keyframes",
    ease: progress2 => generator.next(duration * progress2).value / scale2,
    duration: millisecondsToSeconds(duration)
  };
}

// node_modules/framer-motion/dist/es/animation/sequence/utils/calc-time.mjs
function calcNextTime(current, next, prev, labels) {
  var _a;
  if (typeof next === "number") {
    return next;
  } else if (next.startsWith("-") || next.startsWith("+")) {
    return Math.max(0, current + parseFloat(next));
  } else if (next === "<") {
    return prev;
  } else {
    return (_a = labels.get(next)) !== null && _a !== void 0 ? _a : current;
  }
}

// node_modules/framer-motion/dist/es/utils/wrap.mjs
var wrap = (min, max, v) => {
  const rangeSize = max - min;
  return ((v - min) % rangeSize + rangeSize) % rangeSize + min;
};

// node_modules/framer-motion/dist/es/easing/utils/get-easing-for-segment.mjs
function getEasingForSegment(easing, i) {
  return isEasingArray(easing) ? easing[wrap(0, easing.length, i)] : easing;
}

// node_modules/framer-motion/dist/es/animation/sequence/utils/edit.mjs
function eraseKeyframes(sequence, startTime, endTime) {
  for (let i = 0; i < sequence.length; i++) {
    const keyframe = sequence[i];
    if (keyframe.at > startTime && keyframe.at < endTime) {
      removeItem(sequence, keyframe);
      i--;
    }
  }
}
function addKeyframes(sequence, keyframes2, easing, offset, startTime, endTime) {
  eraseKeyframes(sequence, startTime, endTime);
  for (let i = 0; i < keyframes2.length; i++) {
    sequence.push({
      value: keyframes2[i],
      at: mix(startTime, endTime, offset[i]),
      easing: getEasingForSegment(easing, i)
    });
  }
}

// node_modules/framer-motion/dist/es/animation/sequence/utils/sort.mjs
function compareByTime(a, b) {
  if (a.at === b.at) {
    if (a.value === null) return 1;
    if (b.value === null) return -1;
    return 0;
  } else {
    return a.at - b.at;
  }
}

// node_modules/framer-motion/dist/es/animation/sequence/create.mjs
var defaultSegmentEasing = "easeInOut";
function createAnimationsFromSequence(sequence, {
  defaultTransition = {},
  ...sequenceTransition
} = {}, scope) {
  const defaultDuration = defaultTransition.duration || 0.3;
  const animationDefinitions = /* @__PURE__ */new Map();
  const sequences = /* @__PURE__ */new Map();
  const elementCache = {};
  const timeLabels = /* @__PURE__ */new Map();
  let prevTime = 0;
  let currentTime = 0;
  let totalDuration = 0;
  for (let i = 0; i < sequence.length; i++) {
    const segment = sequence[i];
    if (typeof segment === "string") {
      timeLabels.set(segment, currentTime);
      continue;
    } else if (!Array.isArray(segment)) {
      timeLabels.set(segment.name, calcNextTime(currentTime, segment.at, prevTime, timeLabels));
      continue;
    }
    let [subject, keyframes2, transition = {}] = segment;
    if (transition.at !== void 0) {
      currentTime = calcNextTime(currentTime, transition.at, prevTime, timeLabels);
    }
    let maxDuration3 = 0;
    const resolveValueSequence = (valueKeyframes, valueTransition, valueSequence, elementIndex = 0, numElements = 0) => {
      const valueKeyframesAsList = keyframesAsList(valueKeyframes);
      const {
        delay: delay2 = 0,
        times = defaultOffset(valueKeyframesAsList),
        type = "keyframes",
        ...remainingTransition
      } = valueTransition;
      let {
        ease: ease2 = defaultTransition.ease || "easeOut",
        duration
      } = valueTransition;
      const calculatedDelay = typeof delay2 === "function" ? delay2(elementIndex, numElements) : delay2;
      const numKeyframes = valueKeyframesAsList.length;
      if (numKeyframes <= 2 && type === "spring") {
        let absoluteDelta = 100;
        if (numKeyframes === 2 && isNumberKeyframesArray(valueKeyframesAsList)) {
          const delta = valueKeyframesAsList[1] - valueKeyframesAsList[0];
          absoluteDelta = Math.abs(delta);
        }
        const springTransition = {
          ...remainingTransition
        };
        if (duration !== void 0) {
          springTransition.duration = secondsToMilliseconds(duration);
        }
        const springEasing = createGeneratorEasing(springTransition, absoluteDelta);
        ease2 = springEasing.ease;
        duration = springEasing.duration;
      }
      duration !== null && duration !== void 0 ? duration : duration = defaultDuration;
      const startTime = currentTime + calculatedDelay;
      const targetTime = startTime + duration;
      if (times.length === 1 && times[0] === 0) {
        times[1] = 1;
      }
      const remainder = times.length - valueKeyframesAsList.length;
      remainder > 0 && fillOffset(times, remainder);
      valueKeyframesAsList.length === 1 && valueKeyframesAsList.unshift(null);
      addKeyframes(valueSequence, valueKeyframesAsList, ease2, times, startTime, targetTime);
      maxDuration3 = Math.max(calculatedDelay + duration, maxDuration3);
      totalDuration = Math.max(targetTime, totalDuration);
    };
    if (isMotionValue(subject)) {
      const subjectSequence = getSubjectSequence(subject, sequences);
      resolveValueSequence(keyframes2, transition, getValueSequence("default", subjectSequence));
    } else {
      const elements = resolveElements(subject, scope, elementCache);
      const numElements = elements.length;
      for (let elementIndex = 0; elementIndex < numElements; elementIndex++) {
        keyframes2 = keyframes2;
        transition = transition;
        const element = elements[elementIndex];
        const subjectSequence = getSubjectSequence(element, sequences);
        for (const key in keyframes2) {
          resolveValueSequence(keyframes2[key], getValueTransition2(transition, key), getValueSequence(key, subjectSequence), elementIndex, numElements);
        }
      }
      prevTime = currentTime;
      currentTime += maxDuration3;
    }
  }
  sequences.forEach((valueSequences, element) => {
    for (const key in valueSequences) {
      const valueSequence = valueSequences[key];
      valueSequence.sort(compareByTime);
      const keyframes2 = [];
      const valueOffset = [];
      const valueEasing = [];
      for (let i = 0; i < valueSequence.length; i++) {
        const {
          at,
          value,
          easing
        } = valueSequence[i];
        keyframes2.push(value);
        valueOffset.push(progress(0, totalDuration, at));
        valueEasing.push(easing || "easeOut");
      }
      if (valueOffset[0] !== 0) {
        valueOffset.unshift(0);
        keyframes2.unshift(keyframes2[0]);
        valueEasing.unshift(defaultSegmentEasing);
      }
      if (valueOffset[valueOffset.length - 1] !== 1) {
        valueOffset.push(1);
        keyframes2.push(null);
      }
      if (!animationDefinitions.has(element)) {
        animationDefinitions.set(element, {
          keyframes: {},
          transition: {}
        });
      }
      const definition = animationDefinitions.get(element);
      definition.keyframes[key] = keyframes2;
      definition.transition[key] = {
        ...defaultTransition,
        duration: totalDuration,
        ease: valueEasing,
        times: valueOffset,
        ...sequenceTransition
      };
    }
  });
  return animationDefinitions;
}
function getSubjectSequence(subject, sequences) {
  !sequences.has(subject) && sequences.set(subject, {});
  return sequences.get(subject);
}
function getValueSequence(name, sequences) {
  if (!sequences[name]) sequences[name] = [];
  return sequences[name];
}
function keyframesAsList(keyframes2) {
  return Array.isArray(keyframes2) ? keyframes2 : [keyframes2];
}
function getValueTransition2(transition, key) {
  return transition[key] ? {
    ...transition,
    ...transition[key]
  } : {
    ...transition
  };
}
var isNumber = keyframe => typeof keyframe === "number";
var isNumberKeyframesArray = keyframes2 => keyframes2.every(isNumber);

// node_modules/framer-motion/dist/es/animation/animate.mjs
function animateElements(elementOrSelector, keyframes2, options, scope) {
  const elements = resolveElements(elementOrSelector, scope);
  const numElements = elements.length;
  invariant(Boolean(numElements), "No valid element provided.");
  const animations2 = [];
  for (let i = 0; i < numElements; i++) {
    const element = elements[i];
    if (!visualElementStore.has(element)) {
      createVisualElement(element);
    }
    const visualElement = visualElementStore.get(element);
    const transition = {
      ...options
    };
    if (typeof transition.delay === "function") {
      transition.delay = transition.delay(i, numElements);
    }
    animations2.push(...animateTarget(visualElement, {
      ...keyframes2,
      transition
    }, {}));
  }
  return new GroupPlaybackControls(animations2);
}
var isSequence = value => Array.isArray(value) && Array.isArray(value[0]);
function animateSequence(sequence, options, scope) {
  const animations2 = [];
  const animationDefinitions = createAnimationsFromSequence(sequence, options, scope);
  animationDefinitions.forEach(({
    keyframes: keyframes2,
    transition
  }, subject) => {
    let animation;
    if (isMotionValue(subject)) {
      animation = animateSingleValue(subject, keyframes2.default, transition.default);
    } else {
      animation = animateElements(subject, keyframes2, transition);
    }
    animations2.push(animation);
  });
  return new GroupPlaybackControls(animations2);
}
var createScopedAnimate = scope => {
  function scopedAnimate(valueOrElementOrSequence, keyframes2, options) {
    let animation;
    if (isSequence(valueOrElementOrSequence)) {
      animation = animateSequence(valueOrElementOrSequence, keyframes2, scope);
    } else if (isDOMKeyframes(keyframes2)) {
      animation = animateElements(valueOrElementOrSequence, keyframes2, options, scope);
    } else {
      animation = animateSingleValue(valueOrElementOrSequence, keyframes2, options);
    }
    if (scope) {
      scope.animations.push(animation);
    }
    return animation;
  }
  return scopedAnimate;
};
var animate = createScopedAnimate();

// node_modules/framer-motion/dist/es/animation/hooks/use-animate.mjs
function useAnimate() {
  const scope = useConstant(() => ({
    current: null,
    animations: []
  }));
  const animate2 = useConstant(() => createScopedAnimate(scope));
  useUnmountEffect(() => {
    scope.animations.forEach(animation => animation.stop());
  });
  return [scope, animate2];
}

// node_modules/framer-motion/dist/es/animation/hooks/use-animation.mjs
function useAnimationControls() {
  const controls = useConstant(animationControls);
  useIsomorphicLayoutEffect(controls.mount, []);
  return controls;
}
var useAnimation = useAnimationControls;

// node_modules/framer-motion/dist/es/utils/use-cycle.mjs
var import_react39 = require("react@18.2.0");
function useCycle(...items) {
  const index = (0, import_react39.useRef)(0);
  const [item, setItem] = (0, import_react39.useState)(items[index.current]);
  const runCycle = (0, import_react39.useCallback)(next => {
    index.current = typeof next !== "number" ? wrap(0, items.length, index.current + 1) : next;
    setItem(items[index.current]);
  }, [items.length, ...items]);
  return [item, runCycle];
}

// node_modules/framer-motion/dist/es/render/dom/viewport/index.mjs
var thresholds = {
  some: 0,
  all: 1
};
function inView(elementOrSelector, onStart, {
  root,
  margin: rootMargin,
  amount = "some"
} = {}) {
  const elements = resolveElements(elementOrSelector);
  const activeIntersections = /* @__PURE__ */new WeakMap();
  const onIntersectionChange = entries => {
    entries.forEach(entry => {
      const onEnd = activeIntersections.get(entry.target);
      if (entry.isIntersecting === Boolean(onEnd)) return;
      if (entry.isIntersecting) {
        const newOnEnd = onStart(entry);
        if (typeof newOnEnd === "function") {
          activeIntersections.set(entry.target, newOnEnd);
        } else {
          observer2.unobserve(entry.target);
        }
      } else if (onEnd) {
        onEnd(entry);
        activeIntersections.delete(entry.target);
      }
    });
  };
  const observer2 = new IntersectionObserver(onIntersectionChange, {
    root,
    rootMargin,
    threshold: typeof amount === "number" ? amount : thresholds[amount]
  });
  elements.forEach(element => observer2.observe(element));
  return () => observer2.disconnect();
}

// node_modules/framer-motion/dist/es/utils/use-in-view.mjs
var import_react40 = require("react@18.2.0");
function useInView(ref, {
  root,
  margin,
  amount,
  once = false
} = {}) {
  const [isInView, setInView] = (0, import_react40.useState)(false);
  (0, import_react40.useEffect)(() => {
    if (!ref.current || once && isInView) return;
    const onEnter = () => {
      setInView(true);
      return once ? void 0 : () => setInView(false);
    };
    const options = {
      root: root && root.current || void 0,
      margin,
      amount
    };
    return inView(ref.current, onEnter, options);
  }, [root, ref, margin, once, amount]);
  return isInView;
}

// node_modules/framer-motion/dist/es/gestures/drag/use-drag-controls.mjs
var DragControls = class {
  constructor() {
    this.componentControls = /* @__PURE__ */new Set();
  }
  subscribe(controls) {
    this.componentControls.add(controls);
    return () => this.componentControls.delete(controls);
  }
  start(event, options) {
    this.componentControls.forEach(controls => {
      controls.start(event.nativeEvent || event, options);
    });
  }
};
var createDragControls = () => new DragControls();
function useDragControls() {
  return useConstant(createDragControls);
}

// node_modules/framer-motion/dist/es/events/use-dom-event.mjs
var import_react41 = require("react@18.2.0");
function useDomEvent(ref, eventName, handler, options) {
  (0, import_react41.useEffect)(() => {
    const element = ref.current;
    if (handler && element) {
      return addDomEvent(element, eventName, handler, options);
    }
  }, [ref, eventName, handler, options]);
}

// node_modules/framer-motion/dist/es/motion/utils/is-motion-component.mjs
function isMotionComponent(component) {
  return component !== null && typeof component === "object" && motionComponentSymbol in component;
}

// node_modules/framer-motion/dist/es/motion/utils/unwrap-motion-component.mjs
function unwrapMotionComponent(component) {
  if (isMotionComponent(component)) {
    return component[motionComponentSymbol];
  }
  return void 0;
}

// node_modules/framer-motion/dist/es/projection/use-instant-layout-transition.mjs
function useInstantLayoutTransition() {
  return startTransition;
}
function startTransition(callback) {
  if (!rootProjectionNode.current) return;
  rootProjectionNode.current.isUpdating = false;
  rootProjectionNode.current.blockUpdate();
  callback && callback();
}

// node_modules/framer-motion/dist/es/utils/use-instant-transition.mjs
var import_react42 = require("react@18.2.0");
function useInstantTransition() {
  const [forceUpdate, forcedRenderCount] = useForceUpdate();
  const startInstantLayoutTransition = useInstantLayoutTransition();
  const unlockOnFrameRef = (0, import_react42.useRef)();
  (0, import_react42.useEffect)(() => {
    frame.postRender(() => frame.postRender(() => {
      if (forcedRenderCount !== unlockOnFrameRef.current) return;
      instantAnimationState.current = false;
    }));
  }, [forcedRenderCount]);
  return callback => {
    startInstantLayoutTransition(() => {
      instantAnimationState.current = true;
      forceUpdate();
      callback();
      unlockOnFrameRef.current = forcedRenderCount + 1;
    });
  };
}
function disableInstantTransitions() {
  instantAnimationState.current = false;
}

// node_modules/framer-motion/dist/es/projection/use-reset-projection.mjs
var React10 = __toESM(require("react@18.2.0"), 0);
function useResetProjection() {
  const reset = React10.useCallback(() => {
    const root = rootProjectionNode.current;
    if (!root) return;
    root.resetTree();
  }, []);
  return reset;
}

// node_modules/framer-motion/dist/es/animation/optimized-appear/store-id.mjs
var appearStoreId = (id4, value) => `${id4}: ${value}`;

// node_modules/framer-motion/dist/es/animation/optimized-appear/store.mjs
var appearAnimationStore = /* @__PURE__ */new Map();

// node_modules/framer-motion/dist/es/animation/optimized-appear/handoff.mjs
var handoffFrameTime;
function handoffOptimizedAppearAnimation(elementId, valueName, _value, _frame) {
  const optimisedValueName = transformProps.has(valueName) ? "transform" : valueName;
  const storeId = appearStoreId(elementId, optimisedValueName);
  const optimisedAnimation = appearAnimationStore.get(storeId);
  if (!optimisedAnimation) {
    return null;
  }
  const {
    animation,
    startTime
  } = optimisedAnimation;
  const cancelAnimation = () => {
    appearAnimationStore.delete(storeId);
    try {
      animation.cancel();
    } catch (error) {}
  };
  if (startTime === null || window.HandoffComplete) {
    cancelAnimation();
    return null;
  } else {
    if (handoffFrameTime === void 0) {
      handoffFrameTime = performance.now();
    }
    return handoffFrameTime - startTime || 0;
  }
}

// node_modules/framer-motion/dist/es/animation/optimized-appear/start.mjs
var startFrameTime;
var readyAnimation;
function startOptimizedAppearAnimation(element, name, keyframes2, options, onReady) {
  if (window.HandoffComplete) {
    window.HandoffAppearAnimations = void 0;
    return;
  }
  const id4 = element.dataset[optimizedAppearDataId];
  if (!id4) return;
  window.HandoffAppearAnimations = handoffOptimizedAppearAnimation;
  const storeId = appearStoreId(id4, name);
  if (!readyAnimation) {
    readyAnimation = animateStyle(element, name, [keyframes2[0], keyframes2[0]], {
      duration: 1e4,
      ease: "linear"
    });
    appearAnimationStore.set(storeId, {
      animation: readyAnimation,
      startTime: null
    });
  }
  const startAnimation = () => {
    readyAnimation.cancel();
    const appearAnimation = animateStyle(element, name, keyframes2, options);
    if (startFrameTime === void 0) {
      startFrameTime = performance.now();
    }
    appearAnimation.startTime = startFrameTime;
    appearAnimationStore.set(storeId, {
      animation: appearAnimation,
      startTime: startFrameTime
    });
    if (onReady) onReady(appearAnimation);
  };
  if (readyAnimation.ready) {
    readyAnimation.ready.then(startAnimation).catch(noop);
  } else {
    startAnimation();
  }
}

// node_modules/framer-motion/dist/es/animation/hooks/use-animated-state.mjs
var import_react43 = require("react@18.2.0");
var createObject = () => ({});
var StateVisualElement = class extends VisualElement {
  build() {}
  measureInstanceViewportBox() {
    return createBox();
  }
  resetTransform() {}
  restoreTransform() {}
  removeValueFromRenderState() {}
  renderInstance() {}
  scrapeMotionValuesFromProps() {
    return createObject();
  }
  getBaseTargetFromProps() {
    return void 0;
  }
  readValueFromInstance(_state, key, options) {
    return options.initialState[key] || 0;
  }
  sortInstanceNodePosition() {
    return 0;
  }
  makeTargetAnimatableFromInstance({
    transition,
    transitionEnd,
    ...target
  }) {
    const origin = getOrigin(target, transition || {}, this);
    checkTargetForNewValues(this, target, origin);
    return {
      transition,
      transitionEnd,
      ...target
    };
  }
};
var useVisualState = makeUseVisualState({
  scrapeMotionValuesFromProps: createObject,
  createRenderState: createObject
});
function useAnimatedState(initialState) {
  const [animationState, setAnimationState] = (0, import_react43.useState)(initialState);
  const visualState = useVisualState({}, false);
  const element = useConstant(() => {
    return new StateVisualElement({
      props: {},
      visualState,
      presenceContext: null
    }, {
      initialState
    });
  });
  (0, import_react43.useEffect)(() => {
    element.mount({});
    return () => element.unmount();
  }, [element]);
  (0, import_react43.useEffect)(() => {
    element.update({
      onUpdate: v => {
        setAnimationState({
          ...v
        });
      }
    }, null);
  }, [setAnimationState, element]);
  const startAnimation = useConstant(() => animationDefinition => {
    return animateVisualElement(element, animationDefinition);
  });
  return [animationState, startAnimation];
}

// node_modules/framer-motion/dist/es/value/use-inverted-scale.mjs
var import_react44 = require("react@18.2.0");
var maxScale = 1e5;
var invertScale = scale2 => scale2 > 1e-3 ? 1 / scale2 : maxScale;
var hasWarned = false;
function useInvertedScale(scale2) {
  let parentScaleX = useMotionValue(1);
  let parentScaleY = useMotionValue(1);
  const {
    visualElement
  } = (0, import_react44.useContext)(MotionContext);
  invariant(!!(scale2 || visualElement), "If no scale values are provided, useInvertedScale must be used within a child of another motion component.");
  warning(hasWarned, "useInvertedScale is deprecated and will be removed in 3.0. Use the layout prop instead.");
  hasWarned = true;
  if (scale2) {
    parentScaleX = scale2.scaleX || parentScaleX;
    parentScaleY = scale2.scaleY || parentScaleY;
  } else if (visualElement) {
    parentScaleX = visualElement.getValue("scaleX", 1);
    parentScaleY = visualElement.getValue("scaleY", 1);
  }
  const scaleX = useTransform(parentScaleX, invertScale);
  const scaleY = useTransform(parentScaleY, invertScale);
  return {
    scaleX,
    scaleY
  };
}

// node_modules/framer-motion/dist/es/components/AnimateSharedLayout.mjs
var React11 = __toESM(require("react@18.2.0"), 0);
var id3 = 0;
var AnimateSharedLayout = ({
  children
}) => {
  React11.useEffect(() => {
    invariant(false, "AnimateSharedLayout is deprecated: https://www.framer.com/docs/guide-upgrade/##shared-layout-animations");
  }, []);
  return React11.createElement(LayoutGroup, {
    id: useConstant(() => `asl-${id3++}`)
  }, children);
};

// node_modules/framer-motion/dist/es/render/dom/scroll/index.mjs
function scrollTimelineFallback({
  source,
  axis = "y"
}) {
  const currentTime = {
    value: 0
  };
  const cancel = scrollInfo(info => {
    currentTime.value = info[axis].progress * 100;
  }, {
    container: source,
    axis
  });
  return {
    currentTime,
    cancel
  };
}
var timelineCache = /* @__PURE__ */new Map();
function getTimeline({
  source = document.documentElement,
  axis = "y"
} = {}) {
  if (!timelineCache.has(source)) {
    timelineCache.set(source, {});
  }
  const elementCache = timelineCache.get(source);
  if (!elementCache[axis]) {
    elementCache[axis] = supportsScrollTimeline() ? new ScrollTimeline({
      source,
      axis
    }) : scrollTimelineFallback({
      source,
      axis
    });
  }
  return elementCache[axis];
}
function scroll(onScroll, options) {
  const timeline = getTimeline(options);
  if (typeof onScroll === "function") {
    return observeTimeline(onScroll, timeline);
  } else {
    return onScroll.attachTimeline(timeline);
  }
}

// node_modules/framer-motion/dist/es/animation/utils/stagger.mjs
function getOriginIndex(from, total) {
  if (from === "first") {
    return 0;
  } else {
    const lastIndex = total - 1;
    return from === "last" ? lastIndex : lastIndex / 2;
  }
}
function stagger(duration = 0.1, {
  startDelay = 0,
  from = 0,
  ease: ease2
} = {}) {
  return (i, total) => {
    const fromIndex = typeof from === "number" ? from : getOriginIndex(from, total);
    const distance2 = Math.abs(fromIndex - i);
    let delay2 = duration * distance2;
    if (ease2) {
      const maxDelay = total * duration;
      const easingFunction = easingDefinitionToFunction(ease2);
      delay2 = easingFunction(delay2 / maxDelay) * maxDelay;
    }
    return startDelay + delay2;
  };
}

// node_modules/framer-motion/dist/es/frameloop/index-legacy.mjs
var sync = frame;
var cancelSync = stepsOrder.reduce((acc, key) => {
  acc[key] = process2 => cancelFrame(process2);
  return acc;
}, {});
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9tZW1vaXplL2Rpc3QvbWVtb2l6ZS5icm93c2VyLmNqcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9pcy1wcm9wLXZhbGlkL2Rpc3QvaXMtcHJvcC12YWxpZC5icm93c2VyLmNqcy5qcyIsIi4uLy5iZXlvbmQvdWltcG9ydC9mcmFtZXItbW90aW9uLjEwLjE3LjguanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2NvbnRleHQvTW90aW9uQ29uZmlnQ29udGV4dC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2NvbnRleHQvTW90aW9uQ29udGV4dC9pbmRleC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2NvbnRleHQvUHJlc2VuY2VDb250ZXh0Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvaXMtYnJvd3Nlci5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL3VzZS1pc29tb3JwaGljLWVmZmVjdC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2NvbnRleHQvTGF6eUNvbnRleHQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL3V0aWxzL2NhbWVsLXRvLWRhc2gubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vb3B0aW1pemVkLWFwcGVhci9kYXRhLWlkLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvbW90aW9uL3V0aWxzL3VzZS12aXN1YWwtZWxlbWVudC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL2lzLXJlZi1vYmplY3QubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9tb3Rpb24vdXRpbHMvdXNlLW1vdGlvbi1yZWYubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvdXRpbHMvaXMtdmFyaWFudC1sYWJlbC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi91dGlscy9pcy1hbmltYXRpb24tY29udHJvbHMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvdXRpbHMvdmFyaWFudC1wcm9wcy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci91dGlscy9pcy1jb250cm9sbGluZy12YXJpYW50cy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2NvbnRleHQvTW90aW9uQ29udGV4dC91dGlscy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2NvbnRleHQvTW90aW9uQ29udGV4dC9jcmVhdGUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9tb3Rpb24vZmVhdHVyZXMvZGVmaW5pdGlvbnMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9tb3Rpb24vZmVhdHVyZXMvbG9hZC1mZWF0dXJlcy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2NvbnRleHQvTGF5b3V0R3JvdXBDb250ZXh0Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvY29udGV4dC9Td2l0Y2hMYXlvdXRHcm91cENvbnRleHQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9tb3Rpb24vdXRpbHMvc3ltYm9sLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvbW90aW9uL2luZGV4Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS9tb3Rpb24tcHJveHkubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvc3ZnL2xvd2VyY2FzZS1lbGVtZW50cy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vdXRpbHMvaXMtc3ZnLWNvbXBvbmVudC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3Byb2plY3Rpb24vc3R5bGVzL3NjYWxlLWNvcnJlY3Rpb24ubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvaHRtbC91dGlscy90cmFuc2Zvcm0ubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9tb3Rpb24vdXRpbHMvaXMtZm9yY2VkLW1vdGlvbi12YWx1ZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3ZhbHVlL3V0aWxzL2lzLW1vdGlvbi12YWx1ZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9odG1sL3V0aWxzL2J1aWxkLXRyYW5zZm9ybS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vdXRpbHMvaXMtY3NzLXZhcmlhYmxlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS92YWx1ZS10eXBlcy9nZXQtYXMtdHlwZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL2NsYW1wLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdmFsdWUvdHlwZXMvbnVtYmVycy9pbmRleC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3ZhbHVlL3R5cGVzL3V0aWxzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdmFsdWUvdHlwZXMvbnVtYmVycy91bml0cy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vdmFsdWUtdHlwZXMvdHlwZS1pbnQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL3ZhbHVlLXR5cGVzL251bWJlci5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9odG1sL3V0aWxzL2J1aWxkLXN0eWxlcy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9odG1sL3V0aWxzL2NyZWF0ZS1yZW5kZXItc3RhdGUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvaHRtbC91c2UtcHJvcHMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9tb3Rpb24vdXRpbHMvdmFsaWQtcHJvcC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vdXRpbHMvZmlsdGVyLXByb3BzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL3N2Zy91dGlscy90cmFuc2Zvcm0tb3JpZ2luLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL3N2Zy91dGlscy9wYXRoLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL3N2Zy91dGlscy9idWlsZC1hdHRycy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9zdmcvdXRpbHMvY3JlYXRlLXJlbmRlci1zdGF0ZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9zdmcvdXRpbHMvaXMtc3ZnLXRhZy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9zdmcvdXNlLXByb3BzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS91c2UtcmVuZGVyLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2h0bWwvdXRpbHMvcmVuZGVyLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL3N2Zy91dGlscy9jYW1lbC1jYXNlLWF0dHJzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL3N2Zy91dGlscy9yZW5kZXIubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvaHRtbC91dGlscy9zY3JhcGUtbW90aW9uLXZhbHVlcy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9zdmcvdXRpbHMvc2NyYXBlLW1vdGlvbi12YWx1ZXMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvdXRpbHMvcmVzb2x2ZS12YXJpYW50cy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL3VzZS1jb25zdGFudC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi91dGlscy9pcy1rZXlmcmFtZXMtdGFyZ2V0Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvcmVzb2x2ZS12YWx1ZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3ZhbHVlL3V0aWxzL3Jlc29sdmUtbW90aW9uLXZhbHVlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvbW90aW9uL3V0aWxzL3VzZS12aXN1YWwtc3RhdGUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy9ub29wLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvZnJhbWVsb29wL3JlbmRlci1zdGVwLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvZnJhbWVsb29wL2JhdGNoZXIubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9mcmFtZWxvb3AvZnJhbWUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvc3ZnL2NvbmZpZy1tb3Rpb24ubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvaHRtbC9jb25maWctbW90aW9uLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS91dGlscy9jcmVhdGUtY29uZmlnLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvZXZlbnRzL2FkZC1kb20tZXZlbnQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9ldmVudHMvdXRpbHMvaXMtcHJpbWFyeS1wb2ludGVyLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvZXZlbnRzL2V2ZW50LWluZm8ubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9ldmVudHMvYWRkLXBvaW50ZXItZXZlbnQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy9waXBlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvZ2VzdHVyZXMvZHJhZy91dGlscy9sb2NrLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvbW90aW9uL2ZlYXR1cmVzL0ZlYXR1cmUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9nZXN0dXJlcy9ob3Zlci5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2dlc3R1cmVzL2ZvY3VzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvZ2VzdHVyZXMvdXRpbHMvaXMtbm9kZS1vci1jaGlsZC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2dlc3R1cmVzL3ByZXNzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvbW90aW9uL2ZlYXR1cmVzL3ZpZXdwb3J0L29ic2VydmVycy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL21vdGlvbi9mZWF0dXJlcy92aWV3cG9ydC9pbmRleC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL21vdGlvbi9mZWF0dXJlcy9nZXN0dXJlcy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL3NoYWxsb3ctY29tcGFyZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci91dGlscy9yZXNvbHZlLWR5bmFtaWMtdmFyaWFudHMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy9lcnJvcnMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy90aW1lLWNvbnZlcnNpb24ubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy91c2UtaW5zdGFudC10cmFuc2l0aW9uLXN0YXRlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvZWFzaW5nL3V0aWxzL2lzLWJlemllci1kZWZpbml0aW9uLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL2FuaW1hdG9ycy93YWFwaS9lYXNpbmcubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vYW5pbWF0b3JzL3dhYXBpL2luZGV4Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL2FuaW1hdG9ycy93YWFwaS91dGlscy9nZXQtZmluYWwta2V5ZnJhbWUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9lYXNpbmcvY3ViaWMtYmV6aWVyLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvZWFzaW5nL2Vhc2UubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9lYXNpbmcvdXRpbHMvaXMtZWFzaW5nLWFycmF5Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvZWFzaW5nL21vZGlmaWVycy9taXJyb3IubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9lYXNpbmcvbW9kaWZpZXJzL3JldmVyc2UubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9lYXNpbmcvY2lyYy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2Vhc2luZy9iYWNrLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvZWFzaW5nL2FudGljaXBhdGUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9lYXNpbmcvdXRpbHMvbWFwLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdmFsdWUvdHlwZXMvY29sb3IvdXRpbHMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy92YWx1ZS90eXBlcy9jb2xvci9yZ2JhLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdmFsdWUvdHlwZXMvY29sb3IvaGV4Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdmFsdWUvdHlwZXMvY29sb3IvaHNsYS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3ZhbHVlL3R5cGVzL2NvbG9yL2luZGV4Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvbWl4Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvaHNsYS10by1yZ2JhLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvbWl4LWNvbG9yLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdmFsdWUvdHlwZXMvY29tcGxleC9pbmRleC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL21peC1jb21wbGV4Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvcHJvZ3Jlc3MubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy9pbnRlcnBvbGF0ZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL29mZnNldHMvZmlsbC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL29mZnNldHMvZGVmYXVsdC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL29mZnNldHMvdGltZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9nZW5lcmF0b3JzL2tleWZyYW1lcy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL3ZlbG9jaXR5LXBlci1zZWNvbmQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vZ2VuZXJhdG9ycy91dGlscy92ZWxvY2l0eS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9nZW5lcmF0b3JzL3NwcmluZy9maW5kLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL2dlbmVyYXRvcnMvc3ByaW5nL2luZGV4Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL2dlbmVyYXRvcnMvaW5lcnRpYS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9hbmltYXRvcnMvanMvZHJpdmVyLWZyYW1lbG9vcC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9nZW5lcmF0b3JzL3V0aWxzL2NhbGMtZHVyYXRpb24ubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vYW5pbWF0b3JzL2pzL2luZGV4Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvbWVtby5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9hbmltYXRvcnMvd2FhcGkvY3JlYXRlLWFjY2VsZXJhdGVkLWFuaW1hdGlvbi5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9hbmltYXRvcnMvaW5zdGFudC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi91dGlscy9kZWZhdWx0LXRyYW5zaXRpb25zLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL3V0aWxzL2lzLWFuaW1hdGFibGUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy92YWx1ZS90eXBlcy9jb21wbGV4L2ZpbHRlci5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vdmFsdWUtdHlwZXMvZGVmYXVsdHMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL3ZhbHVlLXR5cGVzL2FuaW1hdGFibGUtbm9uZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL2lzLXplcm8tdmFsdWUtc3RyaW5nLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL3V0aWxzL2lzLW5vbmUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vdXRpbHMva2V5ZnJhbWVzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL3V0aWxzL3RyYW5zaXRpb25zLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvR2xvYmFsQ29uZmlnLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL2ludGVyZmFjZXMvbW90aW9uLXZhbHVlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdmFsdWUvdXNlLXdpbGwtY2hhbmdlL2lzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvaXMtbnVtZXJpY2FsLXN0cmluZy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL2FycmF5Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvc3Vic2NyaXB0aW9uLW1hbmFnZXIubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy93YXJuLW9uY2UubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy92YWx1ZS9pbmRleC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vdmFsdWUtdHlwZXMvdGVzdC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vdmFsdWUtdHlwZXMvdHlwZS1hdXRvLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS92YWx1ZS10eXBlcy9kaW1lbnNpb25zLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS92YWx1ZS10eXBlcy9maW5kLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL3V0aWxzL3NldHRlcnMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vaW50ZXJmYWNlcy92aXN1YWwtZWxlbWVudC10YXJnZXQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vaW50ZXJmYWNlcy92aXN1YWwtZWxlbWVudC12YXJpYW50Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL2ludGVyZmFjZXMvdmlzdWFsLWVsZW1lbnQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvdXRpbHMvYW5pbWF0aW9uLXN0YXRlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvbW90aW9uL2ZlYXR1cmVzL2FuaW1hdGlvbi9pbmRleC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL21vdGlvbi9mZWF0dXJlcy9hbmltYXRpb24vZXhpdC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL21vdGlvbi9mZWF0dXJlcy9hbmltYXRpb25zLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvZGlzdGFuY2UubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9nZXN0dXJlcy9wYW4vUGFuU2Vzc2lvbi5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3Byb2plY3Rpb24vZ2VvbWV0cnkvZGVsdGEtY2FsYy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2dlc3R1cmVzL2RyYWcvdXRpbHMvY29uc3RyYWludHMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9wcm9qZWN0aW9uL2dlb21ldHJ5L21vZGVscy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3Byb2plY3Rpb24vdXRpbHMvZWFjaC1heGlzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcHJvamVjdGlvbi9nZW9tZXRyeS9jb252ZXJzaW9uLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcHJvamVjdGlvbi91dGlscy9oYXMtdHJhbnNmb3JtLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcHJvamVjdGlvbi9nZW9tZXRyeS9kZWx0YS1hcHBseS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3Byb2plY3Rpb24vdXRpbHMvbWVhc3VyZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL2dldC1jb250ZXh0LXdpbmRvdy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2dlc3R1cmVzL2RyYWcvVmlzdWFsRWxlbWVudERyYWdDb250cm9scy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2dlc3R1cmVzL2RyYWcvaW5kZXgubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9nZXN0dXJlcy9wYW4vaW5kZXgubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9jb21wb25lbnRzL0FuaW1hdGVQcmVzZW5jZS91c2UtcHJlc2VuY2UubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9wcm9qZWN0aW9uL25vZGUvc3RhdGUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9wcm9qZWN0aW9uL3N0eWxlcy9zY2FsZS1ib3JkZXItcmFkaXVzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcHJvamVjdGlvbi9zdHlsZXMvc2NhbGUtYm94LXNoYWRvdy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL21vdGlvbi9mZWF0dXJlcy9sYXlvdXQvTWVhc3VyZUxheW91dC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3Byb2plY3Rpb24vYW5pbWF0aW9uL21peC12YWx1ZXMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9wcm9qZWN0aW9uL2dlb21ldHJ5L2NvcHkubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9wcm9qZWN0aW9uL2dlb21ldHJ5L2RlbHRhLXJlbW92ZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3Byb2plY3Rpb24vZ2VvbWV0cnkvdXRpbHMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9wcm9qZWN0aW9uL3NoYXJlZC9zdGFjay5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3Byb2plY3Rpb24vc3R5bGVzL3RyYW5zZm9ybS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci91dGlscy9jb21wYXJlLWJ5LWRlcHRoLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL3V0aWxzL2ZsYXQtdHJlZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL2RlbGF5Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvZGVidWcvcmVjb3JkLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS91dGlscy9pcy1zdmctZWxlbWVudC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9pbnRlcmZhY2VzL3NpbmdsZS12YWx1ZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3Byb2plY3Rpb24vbm9kZS9jcmVhdGUtcHJvamVjdGlvbi1ub2RlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcHJvamVjdGlvbi9ub2RlL0RvY3VtZW50UHJvamVjdGlvbk5vZGUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9wcm9qZWN0aW9uL25vZGUvSFRNTFByb2plY3Rpb25Ob2RlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvbW90aW9uL2ZlYXR1cmVzL2RyYWcubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL3V0aWxzL2Nzcy12YXJpYWJsZXMtY29udmVyc2lvbi5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vdXRpbHMvdW5pdC1jb252ZXJzaW9uLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS91dGlscy9wYXJzZS1kb20tdmFyaWFudC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL3JlZHVjZWQtbW90aW9uL3N0YXRlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvcmVkdWNlZC1tb3Rpb24vaW5kZXgubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvdXRpbHMvbW90aW9uLXZhbHVlcy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9zdG9yZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9WaXN1YWxFbGVtZW50Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS9ET01WaXN1YWxFbGVtZW50Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2h0bWwvSFRNTFZpc3VhbEVsZW1lbnQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvc3ZnL1NWR1Zpc3VhbEVsZW1lbnQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL2NyZWF0ZS12aXN1YWwtZWxlbWVudC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL21vdGlvbi9mZWF0dXJlcy9sYXlvdXQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL21vdGlvbi5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vbW90aW9uLW1pbmltYWwubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy91c2UtaXMtbW91bnRlZC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL3VzZS1mb3JjZS11cGRhdGUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9jb21wb25lbnRzL0FuaW1hdGVQcmVzZW5jZS9Qb3BDaGlsZC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2NvbXBvbmVudHMvQW5pbWF0ZVByZXNlbmNlL1ByZXNlbmNlQ2hpbGQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy91c2UtdW5tb3VudC1lZmZlY3QubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9jb21wb25lbnRzL0FuaW1hdGVQcmVzZW5jZS9pbmRleC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2NvbXBvbmVudHMvTW90aW9uQ29uZmlnL2luZGV4Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvY29tcG9uZW50cy9MYXp5TW90aW9uL2luZGV4Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvY29udGV4dC9EZXByZWNhdGVkTGF5b3V0R3JvdXBDb250ZXh0Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcHJvamVjdGlvbi9ub2RlL2dyb3VwLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvY29tcG9uZW50cy9MYXlvdXRHcm91cC9pbmRleC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2NvbnRleHQvUmVvcmRlckNvbnRleHQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9jb21wb25lbnRzL1Jlb3JkZXIvdXRpbHMvY2hlY2stcmVvcmRlci5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2NvbXBvbmVudHMvUmVvcmRlci9Hcm91cC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3ZhbHVlL3VzZS1tb3Rpb24tdmFsdWUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy90cmFuc2Zvcm0ubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy92YWx1ZS91c2UtY29tYmluZS12YWx1ZXMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy92YWx1ZS91c2UtY29tcHV0ZWQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy92YWx1ZS91c2UtdHJhbnNmb3JtLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvY29tcG9uZW50cy9SZW9yZGVyL0l0ZW0ubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9jb21wb25lbnRzL1Jlb3JkZXIvaW5kZXgubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL2ZlYXR1cmVzLWFuaW1hdGlvbi5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vZmVhdHVyZXMtbWF4Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdmFsdWUvdXNlLW1vdGlvbi10ZW1wbGF0ZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3ZhbHVlL3VzZS1zcHJpbmcubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy91c2UtbW90aW9uLXZhbHVlLWV2ZW50Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdmFsdWUvdXNlLXZlbG9jaXR5Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS91dGlscy9yZXNvbHZlLWVsZW1lbnQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL3Jlc2l6ZS9oYW5kbGUtZWxlbWVudC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vcmVzaXplL2hhbmRsZS13aW5kb3cubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL3Jlc2l6ZS9pbmRleC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vc2Nyb2xsL2luZm8ubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL3Njcm9sbC9vZmZzZXRzL2luc2V0Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS9zY3JvbGwvb2Zmc2V0cy9wcmVzZXRzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS9zY3JvbGwvb2Zmc2V0cy9lZGdlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS9zY3JvbGwvb2Zmc2V0cy9vZmZzZXQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL3Njcm9sbC9vZmZzZXRzL2luZGV4Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS9zY3JvbGwvb24tc2Nyb2xsLWhhbmRsZXIubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL3Njcm9sbC90cmFjay5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3ZhbHVlL3VzZS1zY3JvbGwubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy92YWx1ZS9zY3JvbGwvdXNlLWVsZW1lbnQtc2Nyb2xsLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdmFsdWUvc2Nyb2xsL3VzZS12aWV3cG9ydC1zY3JvbGwubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy91c2UtYW5pbWF0aW9uLWZyYW1lLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdmFsdWUvdXNlLXRpbWUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy92YWx1ZS91c2Utd2lsbC1jaGFuZ2UvaW5kZXgubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy9yZWR1Y2VkLW1vdGlvbi91c2UtcmVkdWNlZC1tb3Rpb24ubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy9yZWR1Y2VkLW1vdGlvbi91c2UtcmVkdWNlZC1tb3Rpb24tY29uZmlnLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL2hvb2tzL2FuaW1hdGlvbi1jb250cm9scy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vc2Nyb2xsL29ic2VydmUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL3Njcm9sbC9zdXBwb3J0cy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9Hcm91cFBsYXliYWNrQ29udHJvbHMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vdXRpbHMvaXMtZG9tLWtleWZyYW1lcy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi91dGlscy9jcmVhdGUtdmlzdWFsLWVsZW1lbnQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9lYXNpbmcvdXRpbHMvY3JlYXRlLWdlbmVyYXRvci1lYXNpbmcubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vc2VxdWVuY2UvdXRpbHMvY2FsYy10aW1lLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvd3JhcC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2Vhc2luZy91dGlscy9nZXQtZWFzaW5nLWZvci1zZWdtZW50Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL3NlcXVlbmNlL3V0aWxzL2VkaXQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vc2VxdWVuY2UvdXRpbHMvc29ydC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9zZXF1ZW5jZS9jcmVhdGUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vYW5pbWF0ZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9ob29rcy91c2UtYW5pbWF0ZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9ob29rcy91c2UtYW5pbWF0aW9uLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvdXNlLWN5Y2xlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS92aWV3cG9ydC9pbmRleC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL3VzZS1pbi12aWV3Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvZ2VzdHVyZXMvZHJhZy91c2UtZHJhZy1jb250cm9scy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2V2ZW50cy91c2UtZG9tLWV2ZW50Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvbW90aW9uL3V0aWxzL2lzLW1vdGlvbi1jb21wb25lbnQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9tb3Rpb24vdXRpbHMvdW53cmFwLW1vdGlvbi1jb21wb25lbnQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9wcm9qZWN0aW9uL3VzZS1pbnN0YW50LWxheW91dC10cmFuc2l0aW9uLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvdXNlLWluc3RhbnQtdHJhbnNpdGlvbi5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3Byb2plY3Rpb24vdXNlLXJlc2V0LXByb2plY3Rpb24ubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vb3B0aW1pemVkLWFwcGVhci9zdG9yZS1pZC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9vcHRpbWl6ZWQtYXBwZWFyL3N0b3JlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL29wdGltaXplZC1hcHBlYXIvaGFuZG9mZi5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9vcHRpbWl6ZWQtYXBwZWFyL3N0YXJ0Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL2hvb2tzL3VzZS1hbmltYXRlZC1zdGF0ZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3ZhbHVlL3VzZS1pbnZlcnRlZC1zY2FsZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2NvbXBvbmVudHMvQW5pbWF0ZVNoYXJlZExheW91dC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vc2Nyb2xsL2luZGV4Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL3V0aWxzL3N0YWdnZXIubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9mcmFtZWxvb3AvaW5kZXgtbGVnYWN5Lm1qcyJdLCJuYW1lcyI6WyJyZXF1aXJlX21lbW9pemVfYnJvd3Nlcl9janMiLCJfX2NvbW1vbkpTIiwibm9kZV9tb2R1bGVzL0BlbW90aW9uL21lbW9pemUvZGlzdC9tZW1vaXplLmJyb3dzZXIuY2pzLmpzIiwiZXhwb3J0cyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJtZW1vaXplIiwiZm4iLCJjYWNoZSIsImFyZyIsImRlZmF1bHQiLCJyZXF1aXJlX2lzX3Byb3BfdmFsaWRfYnJvd3Nlcl9janMiLCJub2RlX21vZHVsZXMvQGVtb3Rpb24vaXMtcHJvcC12YWxpZC9kaXN0L2lzLXByb3AtdmFsaWQuYnJvd3Nlci5janMuanMiLCJfaW50ZXJvcERlZmF1bHQiLCJleCIsInJlYWN0UHJvcHNSZWdleCIsImluZGV4IiwicHJvcCIsInRlc3QiLCJjaGFyQ29kZUF0IiwiZnJhbWVyX21vdGlvbl8xMF8xN184X2V4cG9ydHMiLCJfX2V4cG9ydCIsIkFuaW1hdGVQcmVzZW5jZSIsIkFuaW1hdGVTaGFyZWRMYXlvdXQiLCJEZXByZWNhdGVkTGF5b3V0R3JvdXBDb250ZXh0IiwiRHJhZ0NvbnRyb2xzIiwiRmxhdFRyZWUiLCJMYXlvdXRHcm91cCIsIkxheW91dEdyb3VwQ29udGV4dCIsIkxhenlNb3Rpb24iLCJNb3Rpb25Db25maWciLCJNb3Rpb25Db25maWdDb250ZXh0IiwiTW90aW9uQ29udGV4dCIsIk1vdGlvbkdsb2JhbENvbmZpZyIsIk1vdGlvblZhbHVlIiwiUHJlc2VuY2VDb250ZXh0IiwiUmVvcmRlciIsIlN3aXRjaExheW91dEdyb3VwQ29udGV4dCIsIlZpc3VhbEVsZW1lbnQiLCJhZGRQb2ludGVyRXZlbnQiLCJhZGRQb2ludGVySW5mbyIsImFkZFNjYWxlQ29ycmVjdG9yIiwiYW5pbWF0ZSIsImFuaW1hdGVWYWx1ZSIsImFuaW1hdGVWaXN1YWxFbGVtZW50IiwiYW5pbWF0aW9uQ29udHJvbHMiLCJhbmltYXRpb25zIiwiYW50aWNpcGF0ZSIsImJhY2tJbiIsImJhY2tJbk91dCIsImJhY2tPdXQiLCJidWlsZFRyYW5zZm9ybSIsImNhbGNMZW5ndGgiLCJjYW5jZWxGcmFtZSIsImNhbmNlbFN5bmMiLCJjaGVja1RhcmdldEZvck5ld1ZhbHVlcyIsImNpcmNJbiIsImNpcmNJbk91dCIsImNpcmNPdXQiLCJjbGFtcCIsImNvbG9yIiwiY29tcGxleCIsImNyZWF0ZUJveCIsImNyZWF0ZURvbU1vdGlvbkNvbXBvbmVudCIsImNyZWF0ZU1vdGlvbkNvbXBvbmVudCIsImNyZWF0ZVNjb3BlZEFuaW1hdGUiLCJjdWJpY0JlemllciIsImRlbGF5IiwiZGlzYWJsZUluc3RhbnRUcmFuc2l0aW9ucyIsImRpc3RhbmNlIiwiZGlzdGFuY2UyRCIsImRvbUFuaW1hdGlvbiIsImRvbU1heCIsImVhc2VJbiIsImVhc2VJbk91dCIsImVhc2VPdXQiLCJmaWx0ZXJQcm9wcyIsImZyYW1lIiwiZnJhbWVEYXRhIiwiaW5WaWV3IiwiaW50ZXJwb2xhdGUiLCJpbnZhcmlhbnQiLCJpc0Jyb3dzZXIiLCJpc0RyYWdBY3RpdmUiLCJpc01vdGlvbkNvbXBvbmVudCIsImlzTW90aW9uVmFsdWUiLCJpc1ZhbGlkTW90aW9uUHJvcCIsIm0iLCJtYWtlVXNlVmlzdWFsU3RhdGUiLCJtaXJyb3JFYXNpbmciLCJtaXgiLCJtb3Rpb24iLCJtb3Rpb25WYWx1ZSIsIm9wdGltaXplZEFwcGVhckRhdGFBdHRyaWJ1dGUiLCJwaXBlIiwicHJvZ3Jlc3MiLCJweCIsInJlc29sdmVNb3Rpb25WYWx1ZSIsInJldmVyc2VFYXNpbmciLCJzY3JvbGwiLCJzY3JvbGxJbmZvIiwic3ByaW5nIiwic3RhZ2dlciIsInN0YXJ0T3B0aW1pemVkQXBwZWFyQW5pbWF0aW9uIiwic3RlcHMiLCJzeW5jIiwidHJhbnNmb3JtIiwidW53cmFwTW90aW9uQ29tcG9uZW50IiwidXNlQW5pbWF0ZSIsInVzZUFuaW1hdGlvbiIsInVzZUFuaW1hdGlvbkNvbnRyb2xzIiwidXNlQW5pbWF0aW9uRnJhbWUiLCJ1c2VDeWNsZSIsInVzZURlcHJlY2F0ZWRBbmltYXRlZFN0YXRlIiwidXNlQW5pbWF0ZWRTdGF0ZSIsInVzZURlcHJlY2F0ZWRJbnZlcnRlZFNjYWxlIiwidXNlSW52ZXJ0ZWRTY2FsZSIsInVzZURvbUV2ZW50IiwidXNlRHJhZ0NvbnRyb2xzIiwidXNlRWxlbWVudFNjcm9sbCIsInVzZUZvcmNlVXBkYXRlIiwidXNlSW5WaWV3IiwidXNlSW5zdGFudExheW91dFRyYW5zaXRpb24iLCJ1c2VJbnN0YW50VHJhbnNpdGlvbiIsInVzZUlzUHJlc2VudCIsInVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QiLCJ1c2VNb3Rpb25UZW1wbGF0ZSIsInVzZU1vdGlvblZhbHVlIiwidXNlTW90aW9uVmFsdWVFdmVudCIsInVzZVByZXNlbmNlIiwidXNlUmVkdWNlZE1vdGlvbiIsInVzZVJlZHVjZWRNb3Rpb25Db25maWciLCJ1c2VSZXNldFByb2plY3Rpb24iLCJ1c2VTY3JvbGwiLCJ1c2VTcHJpbmciLCJ1c2VUaW1lIiwidXNlVHJhbnNmb3JtIiwidXNlVW5tb3VudEVmZmVjdCIsInVzZVZlbG9jaXR5IiwidXNlVmlld3BvcnRTY3JvbGwiLCJ1c2VXaWxsQ2hhbmdlIiwidmlzdWFsRWxlbWVudFN0b3JlIiwid2FybmluZyIsIndyYXAiLCJtb2R1bGUiLCJfX3RvQ29tbW9uSlMiLCJpbXBvcnRfcmVhY3QiLCJyZXF1aXJlIiwiY3JlYXRlQ29udGV4dCIsInRyYW5zZm9ybVBhZ2VQb2ludCIsInAiLCJpc1N0YXRpYyIsInJlZHVjZWRNb3Rpb24iLCJpbXBvcnRfcmVhY3QyIiwiaW1wb3J0X3JlYWN0MyIsImRvY3VtZW50IiwiaW1wb3J0X3JlYWN0NCIsInVzZUxheW91dEVmZmVjdCIsInVzZUVmZmVjdCIsImltcG9ydF9yZWFjdDUiLCJMYXp5Q29udGV4dCIsInN0cmljdCIsImNhbWVsVG9EYXNoIiwic3RyIiwicmVwbGFjZSIsInRvTG93ZXJDYXNlIiwib3B0aW1pemVkQXBwZWFyRGF0YUlkIiwiaW1wb3J0X3JlYWN0NiIsInVzZVZpc3VhbEVsZW1lbnQiLCJDb21wb25lbnQyIiwidmlzdWFsU3RhdGUiLCJwcm9wcyIsImNyZWF0ZVZpc3VhbEVsZW1lbnQyIiwidmlzdWFsRWxlbWVudCIsInBhcmVudCIsInVzZUNvbnRleHQiLCJsYXp5Q29udGV4dCIsInByZXNlbmNlQ29udGV4dCIsInJlZHVjZWRNb3Rpb25Db25maWciLCJ2aXN1YWxFbGVtZW50UmVmIiwidXNlUmVmIiwicmVuZGVyZXIiLCJjdXJyZW50IiwiYmxvY2tJbml0aWFsQW5pbWF0aW9uIiwiaW5pdGlhbCIsInVzZUluc2VydGlvbkVmZmVjdCIsInVwZGF0ZSIsIndhbnRzSGFuZG9mZiIsIkJvb2xlYW4iLCJ3aW5kb3ciLCJIYW5kb2ZmQ29tcGxldGUiLCJyZW5kZXIiLCJhbmltYXRpb25TdGF0ZSIsImFuaW1hdGVDaGFuZ2VzIiwidXBkYXRlRmVhdHVyZXMiLCJpc1JlZk9iamVjdCIsInJlZiIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImltcG9ydF9yZWFjdDciLCJ1c2VNb3Rpb25SZWYiLCJleHRlcm5hbFJlZiIsInVzZUNhbGxiYWNrIiwiaW5zdGFuY2UiLCJtb3VudCIsInVubW91bnQiLCJpc1ZhcmlhbnRMYWJlbCIsInYiLCJBcnJheSIsImlzQXJyYXkiLCJpc0FuaW1hdGlvbkNvbnRyb2xzIiwic3RhcnQiLCJ2YXJpYW50UHJpb3JpdHlPcmRlciIsInZhcmlhbnRQcm9wcyIsImlzQ29udHJvbGxpbmdWYXJpYW50cyIsInNvbWUiLCJuYW1lIiwiaXNWYXJpYW50Tm9kZSIsInZhcmlhbnRzIiwiZ2V0Q3VycmVudFRyZWVWYXJpYW50cyIsImNvbnRleHQiLCJhbmltYXRlMiIsImluaGVyaXQiLCJpbXBvcnRfcmVhY3Q4IiwidXNlQ3JlYXRlTW90aW9uQ29udGV4dCIsInVzZU1lbW8iLCJ2YXJpYW50TGFiZWxzQXNEZXBlbmRlbmN5Iiwiam9pbiIsImZlYXR1cmVQcm9wcyIsImFuaW1hdGlvbiIsImV4aXQiLCJkcmFnIiwiZm9jdXMiLCJob3ZlciIsInRhcCIsInBhbiIsImxheW91dCIsImZlYXR1cmVEZWZpbml0aW9ucyIsImtleSIsImlzRW5hYmxlZCIsImxvYWRGZWF0dXJlcyIsImZlYXR1cmVzIiwiaW1wb3J0X3JlYWN0OSIsImltcG9ydF9yZWFjdDEwIiwibW90aW9uQ29tcG9uZW50U3ltYm9sIiwiU3ltYm9sIiwiZm9yIiwiUmVhY3QiLCJfX3RvRVNNIiwiaW1wb3J0X3JlYWN0MTEiLCJwcmVsb2FkZWRGZWF0dXJlcyIsInByZWxvYWRlZEZlYXR1cmVzMiIsImNyZWF0ZVZpc3VhbEVsZW1lbnQiLCJ1c2VSZW5kZXIiLCJ1c2VWaXN1YWxTdGF0ZSIsInVzZVZpc3VhbFN0YXRlMiIsIkNvbXBvbmVudCIsIk1vdGlvbkNvbXBvbmVudCIsIk1lYXN1cmVMYXlvdXQyIiwiY29uZmlnQW5kUHJvcHMiLCJsYXlvdXRJZCIsInVzZUxheW91dElkIiwiaW5pdGlhbExheW91dEdyb3VwQ29uZmlnIiwiaXNTdHJpY3QiLCJjcmVhdGVFbGVtZW50IiwiUHJvdmlkZXIiLCJGb3J3YXJkUmVmQ29tcG9uZW50IiwiZm9yd2FyZFJlZiIsImxheW91dEdyb3VwSWQiLCJpZCIsImNyZWF0ZU1vdGlvblByb3h5IiwiY3JlYXRlQ29uZmlnIiwiY3VzdG9tIiwiY3VzdG9tTW90aW9uQ29tcG9uZW50Q29uZmlnIiwiUHJveHkiLCJjb21wb25lbnRDYWNoZSIsIk1hcCIsImdldCIsIl90YXJnZXQiLCJoYXMiLCJzZXQiLCJsb3dlcmNhc2VTVkdFbGVtZW50cyIsImlzU1ZHQ29tcG9uZW50IiwiaW5jbHVkZXMiLCJpbmRleE9mIiwic2NhbGVDb3JyZWN0b3JzIiwiY29ycmVjdG9ycyIsImFzc2lnbiIsInRyYW5zZm9ybVByb3BPcmRlciIsInRyYW5zZm9ybVByb3BzIiwiU2V0IiwiaXNGb3JjZWRNb3Rpb25WYWx1ZSIsImxheW91dDIiLCJzdGFydHNXaXRoIiwiZ2V0VmVsb2NpdHkiLCJ0cmFuc2xhdGVBbGlhcyIsIngiLCJ5IiwieiIsInRyYW5zZm9ybVBlcnNwZWN0aXZlIiwibnVtVHJhbnNmb3JtcyIsImxlbmd0aCIsInRyYW5zZm9ybTIiLCJlbmFibGVIYXJkd2FyZUFjY2VsZXJhdGlvbiIsImFsbG93VHJhbnNmb3JtTm9uZSIsInRyYW5zZm9ybUlzRGVmYXVsdCIsInRyYW5zZm9ybVRlbXBsYXRlIiwidHJhbnNmb3JtU3RyaW5nIiwiaSIsInRyYW5zZm9ybU5hbWUiLCJ0cmltIiwiY2hlY2tTdHJpbmdTdGFydHNXaXRoIiwidG9rZW4iLCJpc0NTU1ZhcmlhYmxlTmFtZSIsImlzQ1NTVmFyaWFibGVUb2tlbiIsImNzc1ZhcmlhYmxlUmVnZXgiLCJnZXRWYWx1ZUFzVHlwZSIsInR5cGUiLCJtaW4iLCJtYXgiLCJNYXRoIiwibnVtYmVyIiwicGFyc2UiLCJwYXJzZUZsb2F0IiwiYWxwaGEiLCJzY2FsZSIsInNhbml0aXplIiwicm91bmQiLCJmbG9hdFJlZ2V4IiwiY29sb3JSZWdleCIsInNpbmdsZUNvbG9yUmVnZXgiLCJpc1N0cmluZyIsImNyZWF0ZVVuaXRUeXBlIiwidW5pdCIsImVuZHNXaXRoIiwic3BsaXQiLCJkZWdyZWVzIiwicGVyY2VudCIsInZoIiwidnciLCJwcm9ncmVzc1BlcmNlbnRhZ2UiLCJpbnQiLCJudW1iZXJWYWx1ZVR5cGVzIiwiYm9yZGVyV2lkdGgiLCJib3JkZXJUb3BXaWR0aCIsImJvcmRlclJpZ2h0V2lkdGgiLCJib3JkZXJCb3R0b21XaWR0aCIsImJvcmRlckxlZnRXaWR0aCIsImJvcmRlclJhZGl1cyIsInJhZGl1cyIsImJvcmRlclRvcExlZnRSYWRpdXMiLCJib3JkZXJUb3BSaWdodFJhZGl1cyIsImJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzIiwiYm9yZGVyQm90dG9tTGVmdFJhZGl1cyIsIndpZHRoIiwibWF4V2lkdGgiLCJoZWlnaHQiLCJtYXhIZWlnaHQiLCJzaXplIiwidG9wIiwicmlnaHQiLCJib3R0b20iLCJsZWZ0IiwicGFkZGluZyIsInBhZGRpbmdUb3AiLCJwYWRkaW5nUmlnaHQiLCJwYWRkaW5nQm90dG9tIiwicGFkZGluZ0xlZnQiLCJtYXJnaW4iLCJtYXJnaW5Ub3AiLCJtYXJnaW5SaWdodCIsIm1hcmdpbkJvdHRvbSIsIm1hcmdpbkxlZnQiLCJyb3RhdGUiLCJyb3RhdGVYIiwicm90YXRlWSIsInJvdGF0ZVoiLCJzY2FsZVgiLCJzY2FsZVkiLCJzY2FsZVoiLCJza2V3Iiwic2tld1giLCJza2V3WSIsInRyYW5zbGF0ZVgiLCJ0cmFuc2xhdGVZIiwidHJhbnNsYXRlWiIsInBlcnNwZWN0aXZlIiwib3BhY2l0eSIsIm9yaWdpblgiLCJvcmlnaW5ZIiwib3JpZ2luWiIsInpJbmRleCIsImZpbGxPcGFjaXR5Iiwic3Ryb2tlT3BhY2l0eSIsIm51bU9jdGF2ZXMiLCJidWlsZEhUTUxTdHlsZXMiLCJzdGF0ZSIsImxhdGVzdFZhbHVlcyIsIm9wdGlvbnMiLCJzdHlsZSIsInZhcnMiLCJ0cmFuc2Zvcm1PcmlnaW4iLCJoYXNUcmFuc2Zvcm0yIiwiaGFzVHJhbnNmb3JtT3JpZ2luIiwidHJhbnNmb3JtSXNOb25lIiwidmFsdWVUeXBlIiwidmFsdWVBc1R5cGUiLCJjcmVhdGVIdG1sUmVuZGVyU3RhdGUiLCJpbXBvcnRfcmVhY3QxMiIsImNvcHlSYXdWYWx1ZXNPbmx5IiwidGFyZ2V0Iiwic291cmNlIiwidXNlSW5pdGlhbE1vdGlvblZhbHVlcyIsInVzZVN0eWxlIiwic3R5bGVQcm9wIiwidHJhbnNmb3JtVmFsdWVzIiwidXNlSFRNTFByb3BzIiwiaHRtbFByb3BzIiwiZHJhZ0xpc3RlbmVyIiwiZHJhZ2dhYmxlIiwidXNlclNlbGVjdCIsIldlYmtpdFVzZXJTZWxlY3QiLCJXZWJraXRUb3VjaENhbGxvdXQiLCJ0b3VjaEFjdGlvbiIsInRhYkluZGV4Iiwib25UYXAiLCJvblRhcFN0YXJ0Iiwid2hpbGVUYXAiLCJ2YWxpZE1vdGlvblByb3BzIiwic2hvdWxkRm9yd2FyZCIsImxvYWRFeHRlcm5hbElzVmFsaWRQcm9wIiwiaXNWYWxpZFByb3AiLCJfYSIsImlzRG9tIiwiZm9yd2FyZE1vdGlvblByb3BzIiwiZmlsdGVyZWRQcm9wcyIsInZhbHVlcyIsImNhbGNPcmlnaW4iLCJvcmlnaW4iLCJvZmZzZXQiLCJjYWxjU1ZHVHJhbnNmb3JtT3JpZ2luIiwiZGltZW5zaW9ucyIsInB4T3JpZ2luWCIsInB4T3JpZ2luWSIsImRhc2hLZXlzIiwiYXJyYXkiLCJjYW1lbEtleXMiLCJidWlsZFNWR1BhdGgiLCJhdHRycyIsInNwYWNpbmciLCJ1c2VEYXNoQ2FzZSIsInBhdGhMZW5ndGgiLCJrZXlzMiIsInBhdGhTcGFjaW5nIiwiYnVpbGRTVkdBdHRycyIsImF0dHJYIiwiYXR0clkiLCJhdHRyU2NhbGUiLCJwYXRoT2Zmc2V0IiwibGF0ZXN0IiwiaXNTVkdUYWcyIiwidmlld0JveCIsImNyZWF0ZVN2Z1JlbmRlclN0YXRlIiwiaXNTVkdUYWciLCJ0YWciLCJpbXBvcnRfcmVhY3QxMyIsInVzZVNWR1Byb3BzIiwiX2lzU3RhdGljIiwidmlzdWFsUHJvcHMiLCJyYXdTdHlsZXMiLCJpbXBvcnRfcmVhY3QxNCIsImNyZWF0ZVVzZVJlbmRlciIsInVzZVZpc3VhbFByb3BzIiwiZWxlbWVudFByb3BzIiwiY2hpbGRyZW4iLCJyZW5kZXJlZENoaWxkcmVuIiwicmVuZGVySFRNTCIsImVsZW1lbnQiLCJwcm9qZWN0aW9uIiwiZ2V0UHJvamVjdGlvblN0eWxlcyIsInNldFByb3BlcnR5IiwiY2FtZWxDYXNlQXR0cmlidXRlcyIsInJlbmRlclNWRyIsInJlbmRlclN0YXRlIiwiX3N0eWxlUHJvcCIsInNldEF0dHJpYnV0ZSIsInNjcmFwZU1vdGlvblZhbHVlc0Zyb21Qcm9wcyIsInByZXZQcm9wcyIsIm5ld1ZhbHVlcyIsInNjcmFwZU1vdGlvblZhbHVlc0Zyb21Qcm9wczIiLCJ0YXJnZXRLZXkiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInN1YnN0cmluZyIsInJlc29sdmVWYXJpYW50RnJvbVByb3BzIiwiZGVmaW5pdGlvbiIsImN1cnJlbnRWYWx1ZXMiLCJjdXJyZW50VmVsb2NpdHkiLCJpbXBvcnRfcmVhY3QxNSIsInVzZUNvbnN0YW50IiwiaW5pdCIsImlzS2V5ZnJhbWVzVGFyZ2V0IiwiaXNDdXN0b21WYWx1ZSIsInRvVmFsdWUiLCJyZXNvbHZlRmluYWxWYWx1ZUluS2V5ZnJhbWVzIiwidW53cmFwcGVkVmFsdWUiLCJpbXBvcnRfcmVhY3QxNiIsIm1ha2VTdGF0ZSIsInNjcmFwZU1vdGlvblZhbHVlc0Zyb21Qcm9wczMiLCJjcmVhdGVSZW5kZXJTdGF0ZSIsIm9uTW91bnQiLCJtYWtlTGF0ZXN0VmFsdWVzIiwiY29uZmlnIiwibWFrZSIsInNjcmFwZU1vdGlvblZhbHVlcyIsIm1vdGlvblZhbHVlcyIsImlzQ29udHJvbGxpbmdWYXJpYW50cyQxIiwiaXNWYXJpYW50Tm9kZSQxIiwiaXNJbml0aWFsQW5pbWF0aW9uQmxvY2tlZCIsInZhcmlhbnRUb1NldCIsImxpc3QiLCJmb3JFYWNoIiwicmVzb2x2ZWQiLCJ0cmFuc2l0aW9uRW5kIiwidHJhbnNpdGlvbiIsInZhbHVlVGFyZ2V0Iiwibm9vcCIsImFueSIsIlF1ZXVlIiwiY29uc3RydWN0b3IiLCJvcmRlciIsInNjaGVkdWxlZCIsImFkZCIsInByb2Nlc3MyIiwicHVzaCIsInJlbW92ZSIsInNwbGljZSIsImRlbGV0ZSIsImNsZWFyIiwiY3JlYXRlUmVuZGVyU3RlcCIsInJ1bk5leHRGcmFtZSIsInRoaXNGcmFtZSIsIm5leHRGcmFtZSIsIm51bVRvUnVuIiwiaXNQcm9jZXNzaW5nIiwiZmx1c2hOZXh0RnJhbWUiLCJ0b0tlZXBBbGl2ZSIsIldlYWtTZXQiLCJzdGVwIiwic2NoZWR1bGUiLCJjYWxsYmFjayIsImtlZXBBbGl2ZSIsImltbWVkaWF0ZSIsImFkZFRvQ3VycmVudEZyYW1lIiwicXVldWUiLCJjYW5jZWwiLCJwcm9jZXNzIiwiZnJhbWVEYXRhMiIsInN0ZXBzT3JkZXIiLCJtYXhFbGFwc2VkIiwiY3JlYXRlUmVuZGVyQmF0Y2hlciIsInNjaGVkdWxlTmV4dEJhdGNoIiwiYWxsb3dLZWVwQWxpdmUiLCJ1c2VEZWZhdWx0RWxhcHNlZCIsImRlbHRhIiwidGltZXN0YW1wIiwic3RlcHMyIiwicmVkdWNlIiwiYWNjIiwicHJvY2Vzc1N0ZXAiLCJzdGVwSWQiLCJwcm9jZXNzQmF0Y2giLCJwZXJmb3JtYW5jZSIsIm5vdyIsIndha2UiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJzdmdNb3Rpb25Db25maWciLCJyZWFkIiwiZ2V0QkJveCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImUiLCJ0YWdOYW1lIiwiaHRtbE1vdGlvbkNvbmZpZyIsImNyZWF0ZURvbU1vdGlvbkNvbmZpZyIsImJhc2VDb25maWciLCJhZGREb21FdmVudCIsImV2ZW50TmFtZSIsImhhbmRsZXIiLCJwYXNzaXZlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJpc1ByaW1hcnlQb2ludGVyIiwiZXZlbnQiLCJwb2ludGVyVHlwZSIsImJ1dHRvbiIsImlzUHJpbWFyeSIsImV4dHJhY3RFdmVudEluZm8iLCJwb2ludFR5cGUiLCJwb2ludCIsImNvbWJpbmVGdW5jdGlvbnMiLCJhIiwiYiIsInRyYW5zZm9ybWVycyIsImNyZWF0ZUxvY2siLCJsb2NrIiwib3BlbkxvY2siLCJnbG9iYWxIb3Jpem9udGFsTG9jayIsImdsb2JhbFZlcnRpY2FsTG9jayIsImdldEdsb2JhbExvY2siLCJkcmFnMiIsIm9wZW5Ib3Jpem9udGFsIiwib3BlblZlcnRpY2FsIiwib3Blbkdlc3R1cmVMb2NrIiwiRmVhdHVyZSIsIm5vZGUiLCJpc01vdW50ZWQiLCJhZGRIb3ZlckV2ZW50IiwiaXNBY3RpdmUiLCJjYWxsYmFja05hbWUiLCJoYW5kbGVFdmVudCIsImluZm8iLCJnZXRQcm9wcyIsIndoaWxlSG92ZXIiLCJzZXRBY3RpdmUiLCJIb3Zlckdlc3R1cmUiLCJGb2N1c0dlc3R1cmUiLCJhcmd1bWVudHMiLCJvbkZvY3VzIiwiaXNGb2N1c1Zpc2libGUiLCJtYXRjaGVzIiwib25CbHVyIiwiaXNOb2RlT3JDaGlsZCIsImNoaWxkIiwicGFyZW50RWxlbWVudCIsImZpcmVTeW50aGV0aWNQb2ludGVyRXZlbnQiLCJzeW50aGV0aWNQb2ludGVyRXZlbnQiLCJQb2ludGVyRXZlbnQiLCJQcmVzc0dlc3R1cmUiLCJyZW1vdmVTdGFydExpc3RlbmVycyIsInJlbW92ZUVuZExpc3RlbmVycyIsInJlbW92ZUFjY2Vzc2libGVMaXN0ZW5lcnMiLCJzdGFydFBvaW50ZXJQcmVzcyIsInN0YXJ0RXZlbnQiLCJzdGFydEluZm8iLCJpc1ByZXNzaW5nIiwiZW5kUG9pbnRlclByZXNzIiwiZW5kRXZlbnQiLCJlbmRJbmZvIiwiY2hlY2tQcmVzc0VuZCIsIm9uVGFwQ2FuY2VsIiwicmVtb3ZlUG9pbnRlclVwTGlzdGVuZXIiLCJyZW1vdmVQb2ludGVyQ2FuY2VsTGlzdGVuZXIiLCJjYW5jZWxFdmVudCIsImNhbmNlbEluZm8iLCJjYW5jZWxQcmVzcyIsInN0YXJ0UHJlc3MiLCJzdGFydEFjY2Vzc2libGVQcmVzcyIsImhhbmRsZUtleWRvd24iLCJrZXlkb3duRXZlbnQiLCJoYW5kbGVLZXl1cCIsImtleXVwRXZlbnQiLCJyZW1vdmVLZXlkb3duTGlzdGVuZXIiLCJoYW5kbGVCbHVyIiwicmVtb3ZlQmx1ckxpc3RlbmVyIiwicmVtb3ZlUG9pbnRlckxpc3RlbmVyIiwicmVtb3ZlRm9jdXNMaXN0ZW5lciIsIm9ic2VydmVyQ2FsbGJhY2tzIiwiV2Vha01hcCIsIm9ic2VydmVycyIsImZpcmVPYnNlcnZlckNhbGxiYWNrIiwiZW50cnkiLCJmaXJlQWxsT2JzZXJ2ZXJDYWxsYmFja3MiLCJlbnRyaWVzIiwiaW5pdEludGVyc2VjdGlvbk9ic2VydmVyIiwicm9vdCIsImxvb2t1cFJvb3QiLCJyb290T2JzZXJ2ZXJzIiwiSlNPTiIsInN0cmluZ2lmeSIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwib2JzZXJ2ZUludGVyc2VjdGlvbiIsInJvb3RJbnRlcmVzZWN0aW9uT2JzZXJ2ZXIiLCJvYnNlcnZlIiwidW5vYnNlcnZlIiwidGhyZXNob2xkTmFtZXMiLCJhbGwiLCJJblZpZXdGZWF0dXJlIiwiaGFzRW50ZXJlZFZpZXciLCJpc0luVmlldyIsInN0YXJ0T2JzZXJ2ZXIiLCJ2aWV3cG9ydCIsInJvb3RNYXJnaW4iLCJhbW91bnQiLCJvbmNlIiwidGhyZXNob2xkIiwib25JbnRlcnNlY3Rpb25VcGRhdGUiLCJpc0ludGVyc2VjdGluZyIsIm9uVmlld3BvcnRFbnRlciIsIm9uVmlld3BvcnRMZWF2ZSIsImhhc09wdGlvbnNDaGFuZ2VkIiwiaGFzVmlld3BvcnRPcHRpb25DaGFuZ2VkIiwicHJldlZpZXdwb3J0IiwiZ2VzdHVyZUFuaW1hdGlvbnMiLCJzaGFsbG93Q29tcGFyZSIsIm5leHQiLCJwcmV2IiwicHJldkxlbmd0aCIsImdldEN1cnJlbnQiLCJ2ZWxvY2l0eSIsInJlc29sdmVWYXJpYW50IiwiY2hlY2siLCJtZXNzYWdlIiwiY29uc29sZSIsIndhcm4iLCJFcnJvciIsInNlY29uZHNUb01pbGxpc2Vjb25kcyIsInNlY29uZHMiLCJtaWxsaXNlY29uZHNUb1NlY29uZHMiLCJtaWxsaXNlY29uZHMiLCJpbnN0YW50QW5pbWF0aW9uU3RhdGUiLCJpc0JlemllckRlZmluaXRpb24iLCJlYXNpbmciLCJpc1dhYXBpU3VwcG9ydGVkRWFzaW5nIiwic3VwcG9ydGVkV2FhcGlFYXNpbmciLCJldmVyeSIsImN1YmljQmV6aWVyQXNTdHJpbmciLCJjIiwiZCIsImxpbmVhciIsImVhc2UiLCJtYXBFYXNpbmdUb05hdGl2ZUVhc2luZyIsIm1hcCIsImFuaW1hdGVTdHlsZSIsInZhbHVlTmFtZSIsImtleWZyYW1lczIiLCJkZWxheTIiLCJkdXJhdGlvbiIsInJlcGVhdCIsInJlcGVhdFR5cGUiLCJlYXNlMiIsInRpbWVzIiwia2V5ZnJhbWVPcHRpb25zIiwiZmlsbCIsIml0ZXJhdGlvbnMiLCJkaXJlY3Rpb24iLCJnZXRGaW5hbEtleWZyYW1lIiwiY2FsY0JlemllciIsInQiLCJhMSIsImEyIiwic3ViZGl2aXNpb25QcmVjaXNpb24iLCJzdWJkaXZpc2lvbk1heEl0ZXJhdGlvbnMiLCJiaW5hcnlTdWJkaXZpZGUiLCJsb3dlckJvdW5kIiwidXBwZXJCb3VuZCIsIm1YMSIsIm1YMiIsImN1cnJlbnRYIiwiY3VycmVudFQiLCJhYnMiLCJtWTEiLCJtWTIiLCJnZXRURm9yWCIsImFYIiwiaXNFYXNpbmdBcnJheSIsInNpbiIsImFjb3MiLCJwb3ciLCJlYXNpbmdMb29rdXAiLCJlYXNpbmdEZWZpbml0aW9uVG9GdW5jdGlvbiIsIngxIiwieTEiLCJ4MiIsInkyIiwiaXNDb2xvclN0cmluZyIsInRlc3RQcm9wIiwic3BsaXRDb2xvciIsImFOYW1lIiwiYk5hbWUiLCJjTmFtZSIsImFscGhhMiIsIm1hdGNoIiwiY2xhbXBSZ2JVbml0IiwicmdiVW5pdCIsInJnYmEiLCJyZWQiLCJncmVlbiIsImJsdWUiLCJhbHBoYSQxIiwicGFyc2VIZXgiLCJyIiwiZyIsInBhcnNlSW50IiwiaGV4IiwiaHNsYSIsImh1ZSIsInNhdHVyYXRpb24iLCJsaWdodG5lc3MiLCJmcm9tIiwidG8iLCJwcm9ncmVzczIiLCJodWVUb1JnYiIsInEiLCJoc2xhVG9SZ2JhIiwibWl4TGluZWFyQ29sb3IiLCJmcm9tRXhwbyIsInNxcnQiLCJjb2xvclR5cGVzIiwiZ2V0Q29sb3JUeXBlIiwiZmluZCIsImFzUkdCQSIsImNvbG9yMiIsIm1vZGVsIiwibWl4Q29sb3IiLCJmcm9tUkdCQSIsInRvUkdCQSIsImJsZW5kZWQiLCJfYiIsImlzTmFOIiwiY3NzVmFyVG9rZW5pc2VyIiwicmVnZXgiLCJjb3VudEtleSIsImNvbG9yVG9rZW5pc2VyIiwibnVtYmVyVG9rZW5pc2VyIiwidG9rZW5pc2UiLCJ0b2tlbmlzZWQiLCJhbmFseXNlQ29tcGxleFZhbHVlIiwib3JpZ2luYWxWYWx1ZSIsInRvU3RyaW5nIiwibnVtVmFycyIsIm51bUNvbG9ycyIsIm51bU51bWJlcnMiLCJwYXJzZUNvbXBsZXhWYWx1ZSIsImNyZWF0ZVRyYW5zZm9ybWVyIiwibnVtVmFsdWVzIiwib3V0cHV0IiwiY29udmVydE51bWJlcnNUb1plcm8iLCJnZXRBbmltYXRhYmxlTm9uZSIsInBhcnNlZCIsInRyYW5zZm9ybWVyIiwibWl4SW1tZWRpYXRlIiwiZ2V0TWl4ZXIiLCJtaXhDb21wbGV4IiwibWl4QXJyYXkiLCJibGVuZFZhbHVlIiwiZnJvbVRoaXMiLCJtaXhPYmplY3QiLCJ0ZW1wbGF0ZSIsIm9yaWdpblN0YXRzIiwidGFyZ2V0U3RhdHMiLCJjYW5JbnRlcnBvbGF0ZSIsInRvRnJvbURpZmZlcmVuY2UiLCJtaXhOdW1iZXIiLCJkZXRlY3RNaXhlckZhY3RvcnkiLCJjcmVhdGVNaXhlcnMiLCJjdXN0b21NaXhlciIsIm1peGVycyIsIm1peGVyRmFjdG9yeSIsIm51bU1peGVycyIsIm1peGVyIiwiZWFzaW5nRnVuY3Rpb24iLCJpbnB1dCIsImlzQ2xhbXAiLCJpbnB1dExlbmd0aCIsInJldmVyc2UiLCJpbnRlcnBvbGF0b3IiLCJwcm9ncmVzc0luUmFuZ2UiLCJmaWxsT2Zmc2V0IiwicmVtYWluaW5nIiwib2Zmc2V0UHJvZ3Jlc3MiLCJkZWZhdWx0T2Zmc2V0IiwiYXJyIiwiY29udmVydE9mZnNldFRvVGltZXMiLCJvIiwiZGVmYXVsdEVhc2luZyIsImtleWZyYW1lcyIsImtleWZyYW1lVmFsdWVzIiwiZWFzaW5nRnVuY3Rpb25zIiwiZG9uZSIsImFic29sdXRlVGltZXMiLCJtYXBUaW1lVG9LZXlmcmFtZSIsImNhbGN1bGF0ZWREdXJhdGlvbiIsInZlbG9jaXR5UGVyU2Vjb25kIiwiZnJhbWVEdXJhdGlvbiIsInZlbG9jaXR5U2FtcGxlRHVyYXRpb24iLCJjYWxjR2VuZXJhdG9yVmVsb2NpdHkiLCJyZXNvbHZlVmFsdWUiLCJwcmV2VCIsInNhZmVNaW4iLCJtaW5EdXJhdGlvbiIsIm1heER1cmF0aW9uIiwibWluRGFtcGluZyIsIm1heERhbXBpbmciLCJmaW5kU3ByaW5nIiwiYm91bmNlIiwibWFzcyIsImVudmVsb3BlIiwiZGVyaXZhdGl2ZSIsImRhbXBpbmdSYXRpbyIsInVuZGFtcGVkRnJlcTIiLCJleHBvbmVudGlhbERlY2F5IiwiY2FsY0FuZ3VsYXJGcmVxIiwiZXhwIiwiZiIsImZhY3RvciIsImluaXRpYWxHdWVzcyIsInVuZGFtcGVkRnJlcSIsImFwcHJveGltYXRlUm9vdCIsInN0aWZmbmVzcyIsImRhbXBpbmciLCJyb290SXRlcmF0aW9ucyIsInJlc3VsdCIsImR1cmF0aW9uS2V5cyIsInBoeXNpY3NLZXlzIiwiaXNTcHJpbmdUeXBlIiwiZ2V0U3ByaW5nT3B0aW9ucyIsInNwcmluZ09wdGlvbnMiLCJpc1Jlc29sdmVkRnJvbUR1cmF0aW9uIiwiZGVyaXZlZCIsInJlc3REZWx0YSIsInJlc3RTcGVlZCIsImluaXRpYWxWZWxvY2l0eSIsImluaXRpYWxEZWx0YSIsInVuZGFtcGVkQW5ndWxhckZyZXEiLCJpc0dyYW51bGFyU2NhbGUiLCJyZXNvbHZlU3ByaW5nIiwiYW5ndWxhckZyZXEiLCJjb3MiLCJkYW1wZWRBbmd1bGFyRnJlcSIsImZyZXFGb3JUIiwic2luaCIsImNvc2giLCJpc0JlbG93VmVsb2NpdHlUaHJlc2hvbGQiLCJpc0JlbG93RGlzcGxhY2VtZW50VGhyZXNob2xkIiwiaW5lcnRpYSIsInBvd2VyIiwidGltZUNvbnN0YW50IiwiYm91bmNlRGFtcGluZyIsImJvdW5jZVN0aWZmbmVzcyIsIm1vZGlmeVRhcmdldCIsImlzT3V0T2ZCb3VuZHMiLCJuZWFyZXN0Qm91bmRhcnkiLCJhbXBsaXR1ZGUiLCJpZGVhbCIsImNhbGNEZWx0YSIsImNhbGNMYXRlc3QiLCJhcHBseUZyaWN0aW9uIiwidGltZVJlYWNoZWRCb3VuZGFyeSIsInNwcmluZyQxIiwiY2hlY2tDYXRjaEJvdW5kYXJ5IiwiaGFzVXBkYXRlZEZyYW1lIiwiZnJhbWVsb29wRHJpdmVyIiwicGFzc1RpbWVzdGFtcCIsInN0b3AiLCJtYXhHZW5lcmF0b3JEdXJhdGlvbiIsImNhbGNHZW5lcmF0b3JEdXJhdGlvbiIsImdlbmVyYXRvciIsInRpbWVTdGVwIiwiSW5maW5pdHkiLCJ0eXBlcyIsImRlY2F5IiwidHdlZW4iLCJhdXRvcGxheSIsImRyaXZlciIsImtleWZyYW1lcyQxIiwicmVwZWF0RGVsYXkiLCJvblBsYXkiLCJvblN0b3AiLCJvbkNvbXBsZXRlIiwib25VcGRhdGUiLCJzcGVlZCIsImhhc1N0b3BwZWQiLCJyZXNvbHZlRmluaXNoZWRQcm9taXNlIiwiY3VycmVudEZpbmlzaGVkUHJvbWlzZSIsInVwZGF0ZUZpbmlzaGVkUHJvbWlzZSIsIlByb21pc2UiLCJyZXNvbHZlIiwiYW5pbWF0aW9uRHJpdmVyIiwiZ2VuZXJhdG9yRmFjdG9yeSIsIm1hcE51bWJlcnNUb0tleWZyYW1lcyIsIm1pcnJvcmVkR2VuZXJhdG9yIiwicGxheVN0YXRlIiwiaG9sZFRpbWUiLCJzdGFydFRpbWUiLCJjYW5jZWxUaW1lIiwicmVzb2x2ZWREdXJhdGlvbiIsInRvdGFsRHVyYXRpb24iLCJjdXJyZW50VGltZSIsInRpY2siLCJ0aW1lV2l0aG91dERlbGF5IiwiaXNJbkRlbGF5UGhhc2UiLCJlbGFwc2VkIiwiZnJhbWVHZW5lcmF0b3IiLCJjdXJyZW50SXRlcmF0aW9uIiwiZmxvb3IiLCJpdGVyYXRpb25Qcm9ncmVzcyIsImlzT2RkSXRlcmF0aW9uIiwiaXNBbmltYXRpb25GaW5pc2hlZCIsImZpbmlzaCIsInN0b3BBbmltYXRpb25Ecml2ZXIiLCJwbGF5IiwiY29udHJvbHMiLCJ0aGVuIiwicmVqZWN0IiwidGltZSIsIm5ld1RpbWUiLCJuZXdTcGVlZCIsInBhdXNlIiwiY29tcGxldGUiLCJzYW1wbGUiLCJtZW1vIiwic3VwcG9ydHNXYWFwaSIsIkVsZW1lbnQiLCJhY2NlbGVyYXRlZFZhbHVlcyIsInNhbXBsZURlbHRhIiwibWF4RHVyYXRpb24yIiwicmVxdWlyZXNQcmVnZW5lcmF0ZWRLZXlmcmFtZXMiLCJjcmVhdGVBY2NlbGVyYXRlZEFuaW1hdGlvbiIsImNhbkFjY2VsZXJhdGVBbmltYXRpb24iLCJwZW5kaW5nQ2FuY2VsIiwic2FtcGxlQW5pbWF0aW9uIiwicHJlZ2VuZXJhdGVkS2V5ZnJhbWVzIiwib3duZXIiLCJjYW5jZWxBbmltYXRpb24iLCJzYWZlQ2FuY2VsIiwib25maW5pc2giLCJhdHRhY2hUaW1lbGluZSIsInRpbWVsaW5lIiwicGxheWJhY2tSYXRlIiwic2V0V2l0aFZlbG9jaXR5IiwiY3JlYXRlSW5zdGFudEFuaW1hdGlvbiIsInNldFZhbHVlIiwidW5kZXJEYW1wZWRTcHJpbmciLCJjcml0aWNhbGx5RGFtcGVkU3ByaW5nIiwia2V5ZnJhbWVzVHJhbnNpdGlvbiIsImdldERlZmF1bHRUcmFuc2l0aW9uIiwidmFsdWVLZXkiLCJpc0FuaW1hdGFibGUiLCJtYXhEZWZhdWx0cyIsImFwcGx5RGVmYXVsdEZpbHRlciIsInNsaWNlIiwibnVtYmVyMiIsImRlZmF1bHRWYWx1ZSIsImZ1bmN0aW9uUmVnZXgiLCJmaWx0ZXIiLCJmdW5jdGlvbnMiLCJkZWZhdWx0VmFsdWVUeXBlcyIsImJhY2tncm91bmRDb2xvciIsIm91dGxpbmVDb2xvciIsInN0cm9rZSIsImJvcmRlckNvbG9yIiwiYm9yZGVyVG9wQ29sb3IiLCJib3JkZXJSaWdodENvbG9yIiwiYm9yZGVyQm90dG9tQ29sb3IiLCJib3JkZXJMZWZ0Q29sb3IiLCJXZWJraXRGaWx0ZXIiLCJnZXREZWZhdWx0VmFsdWVUeXBlIiwiZ2V0QW5pbWF0YWJsZU5vbmUyIiwiZGVmYXVsdFZhbHVlVHlwZSIsImlzWmVyb1ZhbHVlU3RyaW5nIiwiaXNOb25lIiwiZ2V0S2V5ZnJhbWVzIiwiaXNUYXJnZXRBbmltYXRhYmxlIiwiZGVmYXVsdE9yaWdpbiIsImFuaW1hdGFibGVUZW1wbGF0ZVZhbHVlIiwibm9uZUtleWZyYW1lSW5kZXhlcyIsImlzVHJhbnNpdGlvbkRlZmluZWQiLCJ3aGVuIiwiX2RlbGF5IiwiZGVsYXlDaGlsZHJlbiIsInN0YWdnZXJDaGlsZHJlbiIsInN0YWdnZXJEaXJlY3Rpb24iLCJrZXlzIiwiZ2V0VmFsdWVUcmFuc2l0aW9uIiwic2tpcEFuaW1hdGlvbnMiLCJhbmltYXRlTW90aW9uVmFsdWUiLCJ2YWx1ZVRyYW5zaXRpb24iLCJvcmlnaW5LZXlmcmFtZSIsInRhcmdldEtleWZyYW1lIiwiaXNPcmlnaW5BbmltYXRhYmxlIiwiaXNIYW5kb2ZmIiwiSFRNTEVsZW1lbnQiLCJhY2NlbGVyYXRlZEFuaW1hdGlvbiIsImlzV2lsbENoYW5nZU1vdGlvblZhbHVlIiwiaXNOdW1lcmljYWxTdHJpbmciLCJhZGRVbmlxdWVJdGVtIiwiaXRlbSIsInJlbW92ZUl0ZW0iLCJtb3ZlSXRlbSIsImZyb21JbmRleCIsInRvSW5kZXgiLCJzdGFydEluZGV4IiwiZW5kSW5kZXgiLCJTdWJzY3JpcHRpb25NYW5hZ2VyIiwic3Vic2NyaXB0aW9ucyIsIm5vdGlmeSIsIm51bVN1YnNjcmlwdGlvbnMiLCJnZXRTaXplIiwid2FybmVkIiwid2Fybk9uY2UiLCJjb25kaXRpb24iLCJpc0Zsb2F0IiwiY29sbGVjdE1vdGlvblZhbHVlcyIsInZlcnNpb24iLCJ0aW1lRGVsdGEiLCJsYXN0VXBkYXRlZCIsImNhblRyYWNrVmVsb2NpdHkiLCJldmVudHMiLCJ1cGRhdGVBbmROb3RpZnkiLCJwb3N0UmVuZGVyIiwic2NoZWR1bGVWZWxvY2l0eUNoZWNrIiwiY2hhbmdlIiwidmVsb2NpdHlDaGFuZ2UiLCJyZW5kZXJSZXF1ZXN0IiwidmVsb2NpdHlDaGVjayIsImhhc0FuaW1hdGVkIiwib25DaGFuZ2UiLCJzdWJzY3JpcHRpb24iLCJvbiIsInVuc3Vic2NyaWJlIiwiY2xlYXJMaXN0ZW5lcnMiLCJldmVudE1hbmFnZXJzIiwiYXR0YWNoIiwicGFzc2l2ZUVmZmVjdCIsInN0b3BQYXNzaXZlRWZmZWN0IiwianVtcCIsImdldFByZXZpb3VzIiwic3RhcnRBbmltYXRpb24iLCJhbmltYXRpb25TdGFydCIsImFuaW1hdGlvbkNvbXBsZXRlIiwiY2xlYXJBbmltYXRpb24iLCJhbmltYXRpb25DYW5jZWwiLCJpc0FuaW1hdGluZyIsImRlc3Ryb3kiLCJ0ZXN0VmFsdWVUeXBlIiwiYXV0byIsImRpbWVuc2lvblZhbHVlVHlwZXMiLCJmaW5kRGltZW5zaW9uVmFsdWVUeXBlIiwidmFsdWVUeXBlcyIsImZpbmRWYWx1ZVR5cGUiLCJzZXRNb3Rpb25WYWx1ZSIsImhhc1ZhbHVlIiwiZ2V0VmFsdWUiLCJhZGRWYWx1ZSIsInNldFRhcmdldCIsIm1ha2VUYXJnZXRBbmltYXRhYmxlIiwic2V0VmFyaWFudHMiLCJ2YXJpYW50TGFiZWxzIiwicmV2ZXJzZWRMYWJlbHMiLCJ2YXJpYW50IiwiZ2V0VmFyaWFudCIsInZhcmlhbnRDaGlsZHJlbiIsInNldFZhbHVlcyIsIm5ld1ZhbHVlS2V5cyIsIm51bU5ld1ZhbHVlcyIsInRhcmdldFZhbHVlIiwicmVhZFZhbHVlIiwic2V0QmFzZVRhcmdldCIsImdldE9yaWdpbkZyb21UcmFuc2l0aW9uIiwiZ2V0T3JpZ2luIiwidHJhbnNpdGlvbk9yaWdpbiIsInNob3VsZEJsb2NrQW5pbWF0aW9uIiwicHJvdGVjdGVkS2V5cyIsIm5lZWRzQW5pbWF0aW5nIiwic2hvdWxkQmxvY2siLCJoYXNLZXlmcmFtZXNDaGFuZ2VkIiwiYW5pbWF0ZVRhcmdldCIsInRyYW5zaXRpb25PdmVycmlkZSIsIndpbGxDaGFuZ2UiLCJhbmltYXRpb25zMiIsImFuaW1hdGlvblR5cGVTdGF0ZSIsImdldFN0YXRlIiwiSGFuZG9mZkFwcGVhckFuaW1hdGlvbnMiLCJhcHBlYXJJZCIsImNhblNraXAiLCJzaG91bGRSZWR1Y2VNb3Rpb24iLCJhbmltYXRlVmFyaWFudCIsImdldEFuaW1hdGlvbiIsImdldENoaWxkQW5pbWF0aW9ucyIsImZvcndhcmREZWxheSIsImFuaW1hdGVDaGlsZHJlbiIsImZpcnN0IiwibGFzdCIsIm1heFN0YWdnZXJEdXJhdGlvbiIsImdlbmVyYXRlU3RhZ2dlckR1cmF0aW9uIiwic29ydCIsInNvcnRCeVRyZWVPcmRlciIsInNvcnROb2RlUG9zaXRpb24iLCJyZXNvbHZlZERlZmluaXRpb24iLCJyZXZlcnNlUHJpb3JpdHlPcmRlciIsIm51bUFuaW1hdGlvblR5cGVzIiwiYW5pbWF0ZUxpc3QiLCJjcmVhdGVBbmltYXRpb25TdGF0ZSIsImNyZWF0ZVN0YXRlIiwiaXNJbml0aWFsUmVuZGVyIiwiYnVpbGRSZXNvbHZlZFR5cGVWYWx1ZXMiLCJzZXRBbmltYXRlRnVuY3Rpb24iLCJtYWtlQW5pbWF0b3IiLCJjaGFuZ2VkQWN0aXZlVHlwZSIsImdldFZhcmlhbnRDb250ZXh0IiwicmVtb3ZlZEtleXMiLCJlbmNvdW50ZXJlZEtleXMiLCJyZW1vdmVkVmFyaWFudEluZGV4IiwidHlwZVN0YXRlIiwicHJvcElzVmFyaWFudCIsImFjdGl2ZURlbHRhIiwiaXNJbmhlcml0ZWQiLCJtYW51YWxseUFuaW1hdGVPbk1vdW50IiwicHJldlByb3AiLCJ2YXJpYW50RGlkQ2hhbmdlIiwiY2hlY2tWYXJpYW50c0RpZENoYW5nZSIsInNob3VsZEFuaW1hdGVUeXBlIiwiaGFuZGxlZFJlbW92ZWRWYWx1ZXMiLCJkZWZpbml0aW9uTGlzdCIsInJlc29sdmVkVmFsdWVzIiwicHJldlJlc29sdmVkVmFsdWVzIiwiYWxsS2V5cyIsIm1hcmtUb0FuaW1hdGUiLCJ2YWx1ZUhhc0NoYW5nZWQiLCJmYWxsYmFja0FuaW1hdGlvbiIsImZhbGxiYWNrVGFyZ2V0IiwiZ2V0QmFzZVRhcmdldCIsInNob3VsZEFuaW1hdGUiLCJfYTIiLCJjcmVhdGVUeXBlU3RhdGUiLCJ3aGlsZUluVmlldyIsIndoaWxlRHJhZyIsIndoaWxlRm9jdXMiLCJBbmltYXRpb25GZWF0dXJlIiwidXBkYXRlQW5pbWF0aW9uQ29udHJvbHNTdWJzY3JpcHRpb24iLCJzdWJzY3JpYmUiLCJwcmV2QW5pbWF0ZSIsIkV4aXRBbmltYXRpb25GZWF0dXJlIiwiaXNQcmVzZW50IiwiaXNQcmVzZW50MiIsIm9uRXhpdENvbXBsZXRlIiwicHJldklzUHJlc2VudCIsInByZXZQcmVzZW5jZUNvbnRleHQiLCJleGl0QW5pbWF0aW9uIiwicmVnaXN0ZXIiLCJ4RGVsdGEiLCJ5RGVsdGEiLCJQYW5TZXNzaW9uIiwiaGFuZGxlcnMiLCJjb250ZXh0V2luZG93IiwiZHJhZ1NuYXBUb09yaWdpbiIsImxhc3RNb3ZlRXZlbnQiLCJsYXN0TW92ZUV2ZW50SW5mbyIsInVwZGF0ZVBvaW50IiwiaW5mbzIiLCJnZXRQYW5JbmZvIiwiaGlzdG9yeSIsImlzUGFuU3RhcnRlZCIsImlzRGlzdGFuY2VQYXN0VGhyZXNob2xkIiwicG9pbnQzIiwidGltZXN0YW1wMiIsIm9uU3RhcnQiLCJvbk1vdmUiLCJoYW5kbGVQb2ludGVyTW92ZSIsImV2ZW50MiIsInRyYW5zZm9ybVBvaW50IiwiaGFuZGxlUG9pbnRlclVwIiwiZW5kIiwib25FbmQiLCJvblNlc3Npb25FbmQiLCJyZXN1bWVBbmltYXRpb24iLCJwYW5JbmZvIiwiaW5pdGlhbEluZm8iLCJwb2ludDIiLCJvblNlc3Npb25TdGFydCIsInJlbW92ZUxpc3RlbmVycyIsInVwZGF0ZUhhbmRsZXJzIiwic3VidHJhY3RQb2ludCIsImxhc3REZXZpY2VQb2ludCIsInN0YXJ0RGV2aWNlUG9pbnQiLCJnZXRWZWxvY2l0eTIiLCJ0aW1lc3RhbXBlZFBvaW50IiwibGFzdFBvaW50IiwiYXhpcyIsImlzTmVhciIsIm1heERpc3RhbmNlIiwiY2FsY0F4aXNEZWx0YSIsIm9yaWdpblBvaW50IiwidHJhbnNsYXRlIiwiY2FsY0JveERlbHRhIiwiY2FsY1JlbGF0aXZlQXhpcyIsInJlbGF0aXZlIiwiY2FsY1JlbGF0aXZlQm94IiwiY2FsY1JlbGF0aXZlQXhpc1Bvc2l0aW9uIiwiY2FsY1JlbGF0aXZlUG9zaXRpb24iLCJhcHBseUNvbnN0cmFpbnRzIiwiZWxhc3RpYyIsImNhbGNSZWxhdGl2ZUF4aXNDb25zdHJhaW50cyIsImNhbGNSZWxhdGl2ZUNvbnN0cmFpbnRzIiwibGF5b3V0Qm94IiwiY2FsY1ZpZXdwb3J0QXhpc0NvbnN0cmFpbnRzIiwibGF5b3V0QXhpcyIsImNvbnN0cmFpbnRzQXhpcyIsImNhbGNWaWV3cG9ydENvbnN0cmFpbnRzIiwiY29uc3RyYWludHNCb3giLCJjYWxjT3JpZ2luMiIsInNvdXJjZUxlbmd0aCIsInRhcmdldExlbmd0aCIsInJlYmFzZUF4aXNDb25zdHJhaW50cyIsImNvbnN0cmFpbnRzIiwicmVsYXRpdmVDb25zdHJhaW50cyIsImRlZmF1bHRFbGFzdGljIiwicmVzb2x2ZURyYWdFbGFzdGljIiwiZHJhZ0VsYXN0aWMiLCJyZXNvbHZlQXhpc0VsYXN0aWMiLCJtaW5MYWJlbCIsIm1heExhYmVsIiwicmVzb2x2ZVBvaW50RWxhc3RpYyIsImxhYmVsIiwiY3JlYXRlQXhpc0RlbHRhIiwiY3JlYXRlRGVsdGEiLCJjcmVhdGVBeGlzIiwiZWFjaEF4aXMiLCJjb252ZXJ0Qm91bmRpbmdCb3hUb0JveCIsImNvbnZlcnRCb3hUb0JvdW5kaW5nQm94IiwidHJhbnNmb3JtQm94UG9pbnRzIiwidHJhbnNmb3JtUG9pbnQyIiwidG9wTGVmdCIsImJvdHRvbVJpZ2h0IiwiaXNJZGVudGl0eVNjYWxlIiwic2NhbGUyIiwiaGFzU2NhbGUiLCJoYXNUcmFuc2Zvcm0iLCJoYXMyRFRyYW5zbGF0ZSIsImlzMkRUcmFuc2xhdGUiLCJzY2FsZVBvaW50IiwiZGlzdGFuY2VGcm9tT3JpZ2luIiwic2NhbGVkIiwiYXBwbHlQb2ludERlbHRhIiwiYm94U2NhbGUiLCJhcHBseUF4aXNEZWx0YSIsImFwcGx5Qm94RGVsdGEiLCJib3giLCJhcHBseVRyZWVEZWx0YXMiLCJ0cmVlU2NhbGUiLCJ0cmVlUGF0aCIsImlzU2hhcmVkVHJhbnNpdGlvbiIsInRyZWVMZW5ndGgiLCJwcm9qZWN0aW9uRGVsdGEiLCJkaXNwbGF5IiwibGF5b3V0U2Nyb2xsIiwidHJhbnNmb3JtQm94Iiwic25hcFRvRGVmYXVsdCIsIk51bWJlciIsImlzSW50ZWdlciIsInRyYW5zbGF0ZUF4aXMiLCJkaXN0YW5jZTIiLCJ0cmFuc2Zvcm1BeGlzIiwidHJhbnNmb3JtcyIsInNjYWxlS2V5Iiwib3JpZ2luS2V5IiwiYXhpc09yaWdpbiIsInhLZXlzIiwieUtleXMiLCJtZWFzdXJlVmlld3BvcnRCb3giLCJtZWFzdXJlUGFnZUJveCIsInJvb3RQcm9qZWN0aW9uTm9kZTIiLCJ2aWV3cG9ydEJveCIsInNjcm9sbDIiLCJnZXRDb250ZXh0V2luZG93Iiwib3duZXJEb2N1bWVudCIsImRlZmF1bHRWaWV3IiwiZWxlbWVudERyYWdDb250cm9scyIsIlZpc3VhbEVsZW1lbnREcmFnQ29udHJvbHMiLCJvcGVuR2xvYmFsTG9jayIsImlzRHJhZ2dpbmciLCJjdXJyZW50RGlyZWN0aW9uIiwiaGFzTXV0YXRlZENvbnN0cmFpbnRzIiwib3JpZ2luRXZlbnQiLCJzbmFwVG9DdXJzb3IiLCJkcmFnU25hcFRvT3JpZ2luMiIsInBhdXNlQW5pbWF0aW9uIiwic3RvcEFuaW1hdGlvbiIsImRyYWdQcm9wYWdhdGlvbiIsIm9uRHJhZ1N0YXJ0IiwicmVzb2x2ZUNvbnN0cmFpbnRzIiwiaXNBbmltYXRpb25CbG9ja2VkIiwiZ2V0QXhpc01vdGlvblZhbHVlIiwibWVhc3VyZWRBeGlzIiwiZHJhZ0RpcmVjdGlvbkxvY2siLCJvbkRpcmVjdGlvbkxvY2siLCJvbkRyYWciLCJnZXRDdXJyZW50RGlyZWN0aW9uIiwidXBkYXRlQXhpcyIsImdldEFuaW1hdGlvblN0YXRlIiwicGFuU2Vzc2lvbiIsImdldFRyYW5zZm9ybVBhZ2VQb2ludCIsIm9uRHJhZ0VuZCIsIl9wb2ludCIsInNob3VsZERyYWciLCJheGlzVmFsdWUiLCJkcmFnQ29uc3RyYWludHMiLCJtZWFzdXJlIiwicHJldkNvbnN0cmFpbnRzIiwicmVzb2x2ZVJlZkNvbnN0cmFpbnRzIiwib25NZWFzdXJlRHJhZ0NvbnN0cmFpbnRzIiwiY29uc3RyYWludHNFbGVtZW50IiwibWVhc3VyZWRDb25zdHJhaW50cyIsInVzZXJDb25zdHJhaW50cyIsImRyYWdNb21lbnR1bSIsImRyYWdUcmFuc2l0aW9uIiwib25EcmFnVHJhbnNpdGlvbkVuZCIsIm1vbWVudHVtQW5pbWF0aW9ucyIsImluZXJ0aWEyIiwic3RhcnRBeGlzVmFsdWVBbmltYXRpb24iLCJkcmFnS2V5IiwiZXh0ZXJuYWxNb3Rpb25WYWx1ZSIsInNjYWxlUG9zaXRpb25XaXRoaW5Db25zdHJhaW50cyIsImJveFByb2dyZXNzIiwidXBkYXRlU2Nyb2xsIiwidXBkYXRlTGF5b3V0IiwiYWRkTGlzdGVuZXJzIiwic3RvcFBvaW50ZXJMaXN0ZW5lciIsIm1lYXN1cmVEcmFnQ29uc3RyYWludHMiLCJzdG9wTWVhc3VyZUxheW91dExpc3RlbmVyIiwic3RvcFJlc2l6ZUxpc3RlbmVyIiwic3RvcExheW91dFVwZGF0ZUxpc3RlbmVyIiwiaGFzTGF5b3V0Q2hhbmdlZCIsIm1vdGlvblZhbHVlMiIsImxvY2tUaHJlc2hvbGQiLCJEcmFnR2VzdHVyZSIsInJlbW92ZUdyb3VwQ29udHJvbHMiLCJkcmFnQ29udHJvbHMiLCJhc3luY0hhbmRsZXIiLCJQYW5HZXN0dXJlIiwicmVtb3ZlUG9pbnRlckRvd25MaXN0ZW5lciIsIm9uUG9pbnRlckRvd24iLCJwb2ludGVyRG93bkV2ZW50Iiwic2Vzc2lvbiIsImNyZWF0ZVBhbkhhbmRsZXJzIiwib25QYW5TZXNzaW9uU3RhcnQiLCJvblBhblN0YXJ0Iiwib25QYW4iLCJvblBhbkVuZCIsImltcG9ydF9yZWFjdDE3IiwiaWQ0IiwidXNlSWQiLCJzYWZlVG9SZW1vdmUiLCJnbG9iYWxQcm9qZWN0aW9uU3RhdGUiLCJoYXNBbmltYXRlZFNpbmNlUmVzaXplIiwiaGFzRXZlclVwZGF0ZWQiLCJwaXhlbHNUb1BlcmNlbnQiLCJwaXhlbHMiLCJjb3JyZWN0Qm9yZGVyUmFkaXVzIiwiY29ycmVjdCIsImNvcnJlY3RCb3hTaGFkb3ciLCJvcmlnaW5hbCIsInNoYWRvdyIsInhTY2FsZSIsInlTY2FsZSIsImF2ZXJhZ2VTY2FsZSIsImltcG9ydF9yZWFjdDE4IiwiTWVhc3VyZUxheW91dFdpdGhDb250ZXh0IiwiY29tcG9uZW50RGlkTW91bnQiLCJsYXlvdXRHcm91cCIsInN3aXRjaExheW91dEdyb3VwIiwiZGVmYXVsdFNjYWxlQ29ycmVjdG9ycyIsImdyb3VwIiwiZGlkVXBkYXRlIiwic2V0T3B0aW9ucyIsImdldFNuYXBzaG90QmVmb3JlVXBkYXRlIiwibGF5b3V0RGVwZW5kZW5jeSIsIndpbGxVcGRhdGUiLCJwcm9tb3RlIiwicmVsZWdhdGUiLCJzdGFjayIsImdldFN0YWNrIiwibWVtYmVycyIsImNvbXBvbmVudERpZFVwZGF0ZSIsInF1ZXVlTWljcm90YXNrIiwiY3VycmVudEFuaW1hdGlvbiIsImlzTGVhZCIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwicHJvbW90ZUNvbnRleHQiLCJzY2hlZHVsZUNoZWNrQWZ0ZXJVbm1vdW50IiwiZGVyZWdpc3RlciIsIk1lYXN1cmVMYXlvdXQiLCJhcHBseVRvIiwiYm94U2hhZG93IiwiYm9yZGVycyIsIm51bUJvcmRlcnMiLCJhc051bWJlciIsImlzUHgiLCJtaXhWYWx1ZXMiLCJmb2xsb3ciLCJsZWFkIiwic2hvdWxkQ3Jvc3NmYWRlT3BhY2l0eSIsImlzT25seU1lbWJlciIsImVhc2VDcm9zc2ZhZGVJbiIsIm9wYWNpdHlFeGl0IiwiZWFzZUNyb3NzZmFkZU91dCIsImJvcmRlckxhYmVsIiwiZm9sbG93UmFkaXVzIiwiZ2V0UmFkaXVzIiwibGVhZFJhZGl1cyIsImNhbk1peCIsInJhZGl1c05hbWUiLCJjb21wcmVzcyIsImNvcHlBeGlzSW50byIsIm9yaWdpbkF4aXMiLCJjb3B5Qm94SW50byIsIm9yaWdpbkJveCIsInJlbW92ZVBvaW50RGVsdGEiLCJyZW1vdmVBeGlzRGVsdGEiLCJzb3VyY2VBeGlzIiwicmVsYXRpdmVQcm9ncmVzcyIsInJlbW92ZUF4aXNUcmFuc2Zvcm1zIiwieEtleXMyIiwieUtleXMyIiwicmVtb3ZlQm94VHJhbnNmb3JtcyIsInNvdXJjZUJveCIsImlzQXhpc0RlbHRhWmVybyIsImlzRGVsdGFaZXJvIiwiYm94RXF1YWxzIiwiYm94RXF1YWxzUm91bmRlZCIsImFzcGVjdFJhdGlvIiwiTm9kZVN0YWNrIiwic2NoZWR1bGVSZW5kZXIiLCJwcmV2TGVhZCIsImluZGV4T2ZOb2RlIiwiZmluZEluZGV4IiwibWVtYmVyIiwicHJlc2VydmVGb2xsb3dPcGFjaXR5Iiwic2hvdyIsInJlc3VtZUZyb20iLCJwcmVzZXJ2ZU9wYWNpdHkiLCJzbmFwc2hvdCIsImFuaW1hdGlvblZhbHVlcyIsImlzVXBkYXRpbmciLCJpc0xheW91dERpcnR5IiwiY3Jvc3NmYWRlIiwiaGlkZSIsImV4aXRBbmltYXRpb25Db21wbGV0ZSIsInJlc3VtaW5nRnJvbSIsInJlbW92ZUxlYWRTbmFwc2hvdCIsImJ1aWxkUHJvamVjdGlvblRyYW5zZm9ybSIsImxhdGVzdFRyYW5zZm9ybSIsInhUcmFuc2xhdGUiLCJ5VHJhbnNsYXRlIiwiZWxlbWVudFNjYWxlWCIsImVsZW1lbnRTY2FsZVkiLCJjb21wYXJlQnlEZXB0aCIsImRlcHRoIiwiaXNEaXJ0eSIsInRpbWVvdXQiLCJjaGVja0VsYXBzZWQiLCJyZWNvcmQiLCJkYXRhIiwiTW90aW9uRGVidWciLCJpc1NWR0VsZW1lbnQiLCJTVkdFbGVtZW50IiwiYW5pbWF0ZVNpbmdsZVZhbHVlIiwibW90aW9uVmFsdWUkMSIsInRyYW5zZm9ybUF4ZXMiLCJoaWRkZW5WaXNpYmlsaXR5IiwidmlzaWJpbGl0eSIsImFuaW1hdGlvblRhcmdldCIsImlkMiIsInByb2plY3Rpb25GcmFtZURhdGEiLCJ0b3RhbE5vZGVzIiwicmVzb2x2ZWRUYXJnZXREZWx0YXMiLCJyZWNhbGN1bGF0ZWRQcm9qZWN0aW9uIiwiY3JlYXRlUHJvamVjdGlvbk5vZGUiLCJhdHRhY2hSZXNpemVMaXN0ZW5lciIsImRlZmF1bHRQYXJlbnQiLCJtZWFzdXJlU2Nyb2xsIiwiY2hlY2tJc1Njcm9sbFJvb3QiLCJyZXNldFRyYW5zZm9ybSIsIlByb2plY3Rpb25Ob2RlIiwiYW5pbWF0aW9uSWQiLCJpc1RyZWVBbmltYXRpbmciLCJpc1Byb2plY3Rpb25EaXJ0eSIsImlzU2hhcmVkUHJvamVjdGlvbkRpcnR5IiwiaXNUcmFuc2Zvcm1EaXJ0eSIsInVwZGF0ZU1hbnVhbGx5QmxvY2tlZCIsInVwZGF0ZUJsb2NrZWRCeVJlc2l6ZSIsImlzU1ZHIiwibmVlZHNSZXNldCIsInNob3VsZFJlc2V0VHJhbnNmb3JtIiwiZXZlbnRIYW5kbGVycyIsImhhc1RyZWVBbmltYXRlZCIsInVwZGF0ZVNjaGVkdWxlZCIsInByb2plY3Rpb25VcGRhdGVTY2hlZHVsZWQiLCJjaGVja1VwZGF0ZUZhaWxlZCIsImNsZWFyQWxsU25hcHNob3RzIiwidXBkYXRlUHJvamVjdGlvbiIsIm5vZGVzIiwicHJvcGFnYXRlRGlydHlOb2RlcyIsInJlc29sdmVUYXJnZXREZWx0YSIsImNhbGNQcm9qZWN0aW9uIiwiY2xlYW5EaXJ0eU5vZGVzIiwiaGFzUHJvamVjdGVkIiwiaXNWaXNpYmxlIiwiYW5pbWF0aW9uUHJvZ3Jlc3MiLCJzaGFyZWROb2RlcyIsInBhdGgiLCJub3RpZnlMaXN0ZW5lcnMiLCJhcmdzIiwic3Vic2NyaXB0aW9uTWFuYWdlciIsImhhc0xpc3RlbmVycyIsImNhbmNlbERlbGF5IiwicmVzaXplVW5ibG9ja1VwZGF0ZSIsImZpbmlzaEFuaW1hdGlvbiIsInJlZ2lzdGVyU2hhcmVkTm9kZSIsImhhc1JlbGF0aXZlVGFyZ2V0Q2hhbmdlZCIsIm5ld0xheW91dCIsImlzVHJlZUFuaW1hdGlvbkJsb2NrZWQiLCJyZWxhdGl2ZVRhcmdldCIsImxheW91dFRyYW5zaXRpb24iLCJkZWZhdWx0TGF5b3V0VHJhbnNpdGlvbiIsIm9uTGF5b3V0QW5pbWF0aW9uU3RhcnQiLCJvbkxheW91dEFuaW1hdGlvbkNvbXBsZXRlIiwidGFyZ2V0Q2hhbmdlZCIsInRhcmdldExheW91dCIsImhhc09ubHlSZWxhdGl2ZVRhcmdldENoYW5nZWQiLCJsYXlvdXRSb290Iiwic2V0QW5pbWF0aW9uT3JpZ2luIiwiYW5pbWF0aW9uT3B0aW9ucyIsImJsb2NrVXBkYXRlIiwidW5ibG9ja1VwZGF0ZSIsImlzVXBkYXRlQmxvY2tlZCIsInN0YXJ0VXBkYXRlIiwicmVzZXRSb3RhdGlvbiIsImdldFRyYW5zZm9ybVRlbXBsYXRlIiwic2hvdWxkTm90aWZ5TGlzdGVuZXJzIiwicHJldlRyYW5zZm9ybVRlbXBsYXRlVmFsdWUiLCJ1cGRhdGVTbmFwc2hvdCIsInVwZGF0ZVdhc0Jsb2NrZWQiLCJjbGVhck1lYXN1cmVtZW50cyIsImNsZWFySXNMYXlvdXREaXJ0eSIsInJlc2V0VHJhbnNmb3JtU3R5bGUiLCJub3RpZnlMYXlvdXRVcGRhdGUiLCJwcmVSZW5kZXIiLCJjbGVhclNuYXBzaG90IiwicmVtb3ZlTGVhZFNuYXBzaG90cyIsInNjaGVkdWxlVXBkYXRlUHJvamVjdGlvbiIsImFsd2F5c01lYXN1cmVMYXlvdXQiLCJwcmV2TGF5b3V0IiwibGF5b3V0Q29ycmVjdGVkIiwicGhhc2UiLCJuZWVkc01lYXN1cmVtZW50IiwiaXNSb290IiwiaXNSZXNldFJlcXVlc3RlZCIsImhhc1Byb2plY3Rpb24iLCJ0cmFuc2Zvcm1UZW1wbGF0ZVZhbHVlIiwidHJhbnNmb3JtVGVtcGxhdGVIYXNDaGFuZ2VkIiwicmVtb3ZlVHJhbnNmb3JtIiwicGFnZUJveCIsInJlbW92ZUVsZW1lbnRTY3JvbGwiLCJyb3VuZEJveCIsIm1lYXN1cmVkQm94IiwiYm94V2l0aG91dFNjcm9sbCIsInJvb3RTY3JvbGwiLCJhcHBseVRyYW5zZm9ybSIsInRyYW5zZm9ybU9ubHkiLCJ3aXRoVHJhbnNmb3JtcyIsImJveFdpdGhvdXRUcmFuc2Zvcm0iLCJub2RlQm94Iiwic2V0VGFyZ2V0RGVsdGEiLCJ0YXJnZXREZWx0YSIsImZvcmNlUmVsYXRpdmVQYXJlbnRUb1Jlc29sdmVUYXJnZXQiLCJyZWxhdGl2ZVBhcmVudCIsInJlc29sdmVkUmVsYXRpdmVUYXJnZXRBdCIsImZvcmNlUmVjYWxjdWxhdGlvbiIsImdldExlYWQiLCJpc1NoYXJlZCIsImF0dGVtcHRUb1Jlc29sdmVSZWxhdGl2ZVRhcmdldCIsImdldENsb3Nlc3RQcm9qZWN0aW5nUGFyZW50IiwicmVsYXRpdmVUYXJnZXRPcmlnaW4iLCJ0YXJnZXRXaXRoVHJhbnNmb3JtcyIsImlzUHJvamVjdGluZyIsInBlbmRpbmdBbmltYXRpb24iLCJwcmV2VHJlZVNjYWxlWCIsInByZXZUcmVlU2NhbGVZIiwicHJvamVjdGlvblRyYW5zZm9ybSIsInByb2plY3Rpb25EZWx0YVdpdGhUcmFuc2Zvcm0iLCJwcmV2UHJvamVjdGlvblRyYW5zZm9ybSIsIm5vdGlmeUFsbDIiLCJzbmFwc2hvdExhdGVzdFZhbHVlcyIsIm1peGVkVmFsdWVzIiwicmVsYXRpdmVMYXlvdXQiLCJzbmFwc2hvdFNvdXJjZSIsImxheW91dFNvdXJjZSIsImlzU2hhcmVkTGF5b3V0QW5pbWF0aW9uIiwiaGFzT3BhY2l0eUNyb3NzZmFkZSIsInByZXZSZWxhdGl2ZVRhcmdldCIsIm1peFRhcmdldERlbHRhIiwibWl4QXhpc0RlbHRhIiwibWl4Qm94IiwiY29tcGxldGVBbmltYXRpb24iLCJhcHBseVRyYW5zZm9ybXNUb1RhcmdldCIsInNob3VsZEFuaW1hdGVQb3NpdGlvbk9ubHkiLCJhbmltYXRpb25UeXBlIiwieExlbmd0aCIsInlMZW5ndGgiLCJpbml0aWFsUHJvbW90aW9uQ29uZmlnIiwic2hvdWxkUHJlc2VydmVGb2xsb3dPcGFjaXR5IiwiZ2V0UHJldkxlYWQiLCJoYXNSb3RhdGUiLCJyZXNldFZhbHVlcyIsInNldFN0YXRpY1ZhbHVlIiwic3R5bGVzIiwicG9pbnRlckV2ZW50cyIsImVtcHR5U3R5bGVzIiwidmFsdWVzVG9SZW5kZXIiLCJjb3JyZWN0ZWQiLCJudW0iLCJyZXNldFRyZWUiLCJtZWFzdXJlZExheW91dCIsImF4aXNTbmFwc2hvdCIsImxheW91dERlbHRhIiwidmlzdWFsRGVsdGEiLCJwYXJlbnRTbmFwc2hvdCIsInBhcmVudExheW91dCIsInJlbGF0aXZlU25hcHNob3QiLCJvbkJlZm9yZUxheW91dE1lYXN1cmUiLCJtaXhBeGlzIiwidXNlckFnZW50Q29udGFpbnMiLCJzdHJpbmciLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJyb3VuZFBvaW50Iiwicm91bmRBeGlzIiwiRG9jdW1lbnRQcm9qZWN0aW9uTm9kZSIsIm5vdGlmeTIiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxMZWZ0IiwiYm9keSIsInNjcm9sbFRvcCIsInJvb3RQcm9qZWN0aW9uTm9kZSIsIkhUTUxQcm9qZWN0aW9uTm9kZSIsImRvY3VtZW50Tm9kZSIsImdldENvbXB1dGVkU3R5bGUiLCJwb3NpdGlvbiIsInNwbGl0Q1NTVmFyaWFibGVSZWdleCIsInBhcnNlQ1NTVmFyaWFibGUiLCJleGVjIiwiZmFsbGJhY2siLCJtYXhEZXB0aCIsImdldFZhcmlhYmxlVmFsdWUiLCJnZXRQcm9wZXJ0eVZhbHVlIiwidHJpbW1lZCIsInJlc29sdmVDU1NWYXJpYWJsZXMiLCJwb3NpdGlvbmFsS2V5cyIsImlzUG9zaXRpb25hbEtleSIsImhhc1Bvc2l0aW9uYWxLZXkiLCJpc051bU9yUHhUeXBlIiwiZ2V0UG9zRnJvbU1hdHJpeCIsIm1hdHJpeCIsInBvcyIsImdldFRyYW5zbGF0ZUZyb21NYXRyaXgiLCJwb3MyIiwicG9zMyIsIl9iYm94IiwibWF0cml4M2QiLCJ0cmFuc2Zvcm1LZXlzIiwibm9uVHJhbnNsYXRpb25hbFRyYW5zZm9ybUtleXMiLCJyZW1vdmVOb25UcmFuc2xhdGlvbmFsVHJhbnNmb3JtIiwicmVtb3ZlZFRyYW5zZm9ybXMiLCJwb3NpdGlvbmFsVmFsdWVzIiwiY29udmVydENoYW5nZWRWYWx1ZVR5cGVzIiwiY2hhbmdlZEtleXMiLCJvcmlnaW5CYm94IiwiZWxlbWVudENvbXB1dGVkU3R5bGUiLCJ0YXJnZXRCYm94IiwiY2hlY2tBbmRDb252ZXJ0Q2hhbmdlZFZhbHVlVHlwZXMiLCJ0YXJnZXRQb3NpdGlvbmFsS2V5cyIsInJlbW92ZWRUcmFuc2Zvcm1WYWx1ZXMiLCJoYXNBdHRlbXB0ZWRUb1JlbW92ZVRyYW5zZm9ybVZhbHVlcyIsImNoYW5nZWRWYWx1ZVR5cGVLZXlzIiwiZnJvbVR5cGUiLCJ0b1R5cGUiLCJudW1LZXlmcmFtZXMiLCJzY3JvbGxZIiwicGFnZVlPZmZzZXQiLCJjb252ZXJ0ZWRUYXJnZXQiLCJzY3JvbGxUbyIsInVuaXRDb252ZXJzaW9uIiwicGFyc2VEb21WYXJpYW50IiwicHJlZmVyc1JlZHVjZWRNb3Rpb24iLCJoYXNSZWR1Y2VkTW90aW9uTGlzdGVuZXIiLCJpbml0UHJlZmVyc1JlZHVjZWRNb3Rpb24iLCJtYXRjaE1lZGlhIiwibW90aW9uTWVkaWFRdWVyeSIsInNldFJlZHVjZWRNb3Rpb25QcmVmZXJlbmNlcyIsImFkZExpc3RlbmVyIiwidXBkYXRlTW90aW9uVmFsdWVzRnJvbVByb3BzIiwibmV4dFZhbHVlIiwicHJldlZhbHVlIiwiZXhpc3RpbmdWYWx1ZSIsImxhdGVzdFZhbHVlIiwiZ2V0U3RhdGljVmFsdWUiLCJyZW1vdmVWYWx1ZSIsImZlYXR1cmVOYW1lcyIsIm51bUZlYXR1cmVzIiwicHJvcEV2ZW50SGFuZGxlcnMiLCJudW1WYXJpYW50UHJvcHMiLCJ2YWx1ZVN1YnNjcmlwdGlvbnMiLCJwcmV2TW90aW9uVmFsdWVzIiwicHJvcEV2ZW50U3Vic2NyaXB0aW9ucyIsIm5vdGlmeVVwZGF0ZSIsInRyaWdnZXJCdWlsZCIsInJlbmRlckluc3RhbmNlIiwiYmFzZVRhcmdldCIsImluaXRpYWxWYWx1ZXMiLCJpbml0aWFsTW90aW9uVmFsdWVzIiwiX3Byb3BzIiwiX3ByZXZQcm9wcyIsInJlbW92ZUZyb21WYXJpYW50VHJlZSIsImFkZFZhcmlhbnRDaGlsZCIsImJpbmRUb01vdGlvblZhbHVlIiwidmFsdWVJc1RyYW5zZm9ybSIsInJlbW92ZU9uQ2hhbmdlIiwicmVtb3ZlT25SZW5kZXJSZXF1ZXN0Iiwib3RoZXIiLCJzb3J0SW5zdGFuY2VOb2RlUG9zaXRpb24iLCJyZW5kZXJlZFByb3BzIiwiUHJvamVjdGlvbk5vZGVDb25zdHJ1Y3RvciIsInN0cmljdE1lc3NhZ2UiLCJpZ25vcmVTdHJpY3QiLCJGZWF0dXJlQ29uc3RydWN0b3IiLCJNZWFzdXJlTGF5b3V0Q29tcG9uZW50IiwiZmVhdHVyZSIsImJ1aWxkIiwibWVhc3VyZUluc3RhbmNlVmlld3BvcnRCb3giLCJjYW5NdXRhdGUiLCJtYWtlVGFyZ2V0QW5pbWF0YWJsZUZyb21JbnN0YW5jZSIsImxpc3RlbmVyIiwiaGFuZGxlQ2hpbGRNb3Rpb25WYWx1ZSIsImdldENsb3Nlc3RWYXJpYW50Tm9kZSIsInN0YXJ0QXRQYXJlbnQiLCJjb250ZXh0MiIsImNsb3Nlc3RWYXJpYW50Tm9kZSIsInJlbW92ZVZhbHVlRnJvbVJlbmRlclN0YXRlIiwiZ2V0QmFzZVRhcmdldEZyb21Qcm9wcyIsInJlYWRWYWx1ZUZyb21JbnN0YW5jZSIsInZhbHVlRnJvbUluaXRpYWwiLCJET01WaXN1YWxFbGVtZW50IiwiY29tcGFyZURvY3VtZW50UG9zaXRpb24iLCJnZXRDb21wdXRlZFN0eWxlMiIsIkhUTUxWaXN1YWxFbGVtZW50IiwiZGVmYXVsdFR5cGUiLCJjb21wdXRlZFN0eWxlIiwiY2hpbGRTdWJzY3JpcHRpb24iLCJ0ZXh0Q29udGVudCIsIlNWR1Zpc3VhbEVsZW1lbnQiLCJnZXRBdHRyaWJ1dGUiLCJjcmVhdGVEb21WaXN1YWxFbGVtZW50IiwiaW1wb3J0X3JlYWN0MTkiLCJ1c2VJc01vdW50ZWQiLCJpbXBvcnRfcmVhY3QyMCIsImZvcmNlZFJlbmRlckNvdW50Iiwic2V0Rm9yY2VkUmVuZGVyQ291bnQiLCJ1c2VTdGF0ZSIsImZvcmNlUmVuZGVyIiwiZGVmZXJyZWRGb3JjZVJlbmRlciIsIlJlYWN0MiIsImltcG9ydF9yZWFjdDIxIiwiUG9wQ2hpbGRNZWFzdXJlIiwiY2hpbGRSZWYiLCJzaXplUmVmIiwib2Zmc2V0SGVpZ2h0Iiwib2Zmc2V0V2lkdGgiLCJvZmZzZXRUb3AiLCJvZmZzZXRMZWZ0IiwiUG9wQ2hpbGQiLCJkYXRhc2V0IiwibW90aW9uUG9wSWQiLCJoZWFkIiwiYXBwZW5kQ2hpbGQiLCJzaGVldCIsImluc2VydFJ1bGUiLCJyZW1vdmVDaGlsZCIsImNsb25lRWxlbWVudCIsIlJlYWN0MyIsImltcG9ydF9yZWFjdDIyIiwiUHJlc2VuY2VDaGlsZCIsInByZXNlbmNlQWZmZWN0c0xheW91dCIsIm1vZGUiLCJwcmVzZW5jZUNoaWxkcmVuIiwibmV3Q2hpbGRyZW5NYXAiLCJjaGlsZElkIiwiaXNDb21wbGV0ZSIsIl8iLCJpbXBvcnRfcmVhY3QyMyIsIlJlYWN0NCIsImltcG9ydF9yZWFjdDI0IiwiZ2V0Q2hpbGRLZXkiLCJ1cGRhdGVDaGlsZExvb2t1cCIsImFsbENoaWxkcmVuIiwib25seUVsZW1lbnRzIiwiZmlsdGVyZWQiLCJDaGlsZHJlbiIsImlzVmFsaWRFbGVtZW50IiwiZXhpdEJlZm9yZUVudGVyIiwiZmlsdGVyZWRDaGlsZHJlbiIsImNoaWxkcmVuVG9SZW5kZXIiLCJleGl0aW5nQ2hpbGRyZW4iLCJwcmVzZW50Q2hpbGRyZW4iLCJGcmFnbWVudCIsInByZXNlbnRLZXlzIiwidGFyZ2V0S2V5cyIsIm51bVByZXNlbnQiLCJjb21wb25lbnQiLCJpbnNlcnRpb25JbmRleCIsImV4aXRpbmdDb21wb25lbnQiLCJvbkV4aXQiLCJsZWZ0T3ZlcktleXMiLCJjaGlsZEtleSIsImxlZnRPdmVyS2V5IiwicHJlc2VudENoaWxkIiwicHJlc2VudENoaWxkS2V5IiwiUmVhY3Q1IiwiaW1wb3J0X3JlYWN0MjUiLCJSZWFjdDYiLCJpbXBvcnRfcmVhY3QyNiIsInNldElzTG9hZGVkIiwiaXNMYXp5QnVuZGxlIiwibG9hZGVkUmVuZGVyZXIiLCJsb2FkZWRGZWF0dXJlcyIsImltcG9ydF9yZWFjdDI3Iiwibm9kZUdyb3VwIiwiZGlydHlBbGwiLCJkaXJ0eSIsIlJlYWN0NyIsImltcG9ydF9yZWFjdDI4Iiwic2hvdWxkSW5oZXJpdEdyb3VwIiwic2hvdWxkSW5oZXJpdElkIiwibGF5b3V0R3JvdXBDb250ZXh0IiwiZGVwcmVjYXRlZExheW91dEdyb3VwQ29udGV4dCIsInVwc3RyZWFtSWQiLCJtZW1vaXplZENvbnRleHQiLCJpbXBvcnRfcmVhY3QyOSIsIlJlb3JkZXJDb250ZXh0IiwiY2hlY2tSZW9yZGVyIiwiaXRlbTIiLCJuZXh0T2Zmc2V0IiwibmV4dEl0ZW0iLCJuZXh0TGF5b3V0IiwibmV4dEl0ZW1DZW50ZXIiLCJSZWFjdDgiLCJpbXBvcnRfcmVhY3QzMCIsIlJlb3JkZXJHcm91cCIsImFzIiwib25SZW9yZGVyIiwiaXNSZW9yZGVyaW5nIiwicmVnaXN0ZXJJdGVtIiwiaWR4IiwiY29tcGFyZU1pbiIsInVwZGF0ZU9yZGVyIiwibmV3T3JkZXIiLCJHcm91cCIsImltcG9ydF9yZWFjdDMxIiwic2V0TGF0ZXN0IiwiaXNDdXN0b21WYWx1ZVR5cGUiLCJnZXRNaXhlcjIiLCJ1c2VJbW1lZGlhdGUiLCJhcmdPZmZzZXQiLCJpbnB1dFZhbHVlIiwiaW5wdXRSYW5nZSIsIm91dHB1dFJhbmdlIiwidXNlQ29tYmluZU1vdGlvblZhbHVlcyIsImNvbWJpbmVWYWx1ZXMiLCJ1cGRhdGVWYWx1ZSIsInNjaGVkdWxlVXBkYXRlIiwidXNlQ29tcHV0ZWQiLCJjb21wdXRlIiwiaW5wdXRSYW5nZU9yVHJhbnNmb3JtZXIiLCJ1c2VMaXN0VHJhbnNmb3JtIiwiUmVhY3Q5IiwiaW1wb3J0X3JlYWN0MzIiLCJ1c2VEZWZhdWx0TW90aW9uVmFsdWUiLCJSZW9yZGVySXRlbSIsImxhdGVzdFgiLCJsYXRlc3RZIiwiZ2VzdHVyZVBvaW50Iiwib25MYXlvdXRNZWFzdXJlIiwibWVhc3VyZWQiLCJJdGVtIiwiZnJhZ21lbnRzIiwibnVtRnJhZ21lbnRzIiwiYnVpbGRWYWx1ZSIsImltcG9ydF9yZWFjdDMzIiwiYWN0aXZlU3ByaW5nQW5pbWF0aW9uIiwic3RvcEFuaW1hdGlvbjIiLCJpbXBvcnRfcmVhY3QzNCIsIm5ld1ZlbG9jaXR5IiwicmVzb2x2ZUVsZW1lbnRzIiwiZWxlbWVudHMiLCJzY29wZSIsInNlbGVjdG9yQ2FjaGUiLCJxdWVyeVNlbGVjdG9yQWxsIiwicmVzaXplSGFuZGxlcnMiLCJvYnNlcnZlciIsImdldEVsZW1lbnRTaXplIiwiYm9yZGVyQm94U2l6ZSIsImlubGluZVNpemUiLCJibG9ja1NpemUiLCJub3RpZnlUYXJnZXQiLCJjb250ZW50UmVjdCIsImNvbnRlbnRTaXplIiwibm90aWZ5QWxsIiwiY3JlYXRlUmVzaXplT2JzZXJ2ZXIiLCJSZXNpemVPYnNlcnZlciIsInJlc2l6ZUVsZW1lbnQiLCJlbGVtZW50SGFuZGxlcnMiLCJ3aW5kb3dDYWxsYmFja3MiLCJ3aW5kb3dSZXNpemVIYW5kbGVyIiwiY3JlYXRlV2luZG93UmVzaXplSGFuZGxlciIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInJlc2l6ZVdpbmRvdyIsInJlc2l6ZSIsIm1heEVsYXBzZWQyIiwiY3JlYXRlQXhpc0luZm8iLCJzY3JvbGxMZW5ndGgiLCJ0YXJnZXRPZmZzZXQiLCJjb250YWluZXJMZW5ndGgiLCJjcmVhdGVTY3JvbGxJbmZvIiwidXBkYXRlQXhpc0luZm8iLCJheGlzTmFtZSIsInByZXZUaW1lIiwidXBkYXRlU2Nyb2xsSW5mbyIsImNhbGNJbnNldCIsImNvbnRhaW5lciIsImluc2V0Iiwib2Zmc2V0UGFyZW50Iiwic3ZnQm91bmRpbmdCb3giLCJwYXJlbnRCb3VuZGluZ0JveCIsIlNWR0dyYXBoaWNzRWxlbWVudCIsInN2ZyIsInBhcmVudE5vZGUiLCJTY3JvbGxPZmZzZXQiLCJFbnRlciIsIkV4aXQiLCJBbnkiLCJBbGwiLCJuYW1lZEVkZ2VzIiwiY2VudGVyIiwicmVzb2x2ZUVkZ2UiLCJlZGdlIiwiYXNOdW1iZXIyIiwiY2xpZW50V2lkdGgiLCJjbGllbnRIZWlnaHQiLCJkZWZhdWx0T2Zmc2V0MiIsInJlc29sdmVPZmZzZXQiLCJ0YXJnZXRJbnNldCIsIm9mZnNldERlZmluaXRpb24iLCJ0YXJnZXRQb2ludCIsImNvbnRhaW5lclBvaW50IiwiZ2V0VGFyZ2V0U2l6ZSIsInJlc29sdmVPZmZzZXRzIiwibGVuZ3RoTGFiZWwiLCJ0YXJnZXRTaXplIiwic2Nyb2xsV2lkdGgiLCJzY3JvbGxIZWlnaHQiLCJjb250YWluZXJTaXplIiwiaGFzQ2hhbmdlZCIsIm51bU9mZnNldHMiLCJpbnRlcnBvbGF0b3JPZmZzZXRzIiwiY3JlYXRlT25TY3JvbGxIYW5kbGVyIiwib25TY3JvbGwiLCJzY3JvbGxMaXN0ZW5lcnMiLCJyZXNpemVMaXN0ZW5lcnMiLCJvblNjcm9sbEhhbmRsZXJzIiwiZ2V0RXZlbnRUYXJnZXQiLCJjb250YWluZXJIYW5kbGVycyIsImNvbnRhaW5lckhhbmRsZXIiLCJtZWFzdXJlQWxsIiwidXBkYXRlQWxsIiwibGlzdGVuZXIyIiwiY3VycmVudEhhbmRsZXJzIiwic2Nyb2xsTGlzdGVuZXIiLCJpbXBvcnRfcmVhY3QzNSIsInJlZldhcm5pbmciLCJjcmVhdGVTY3JvbGxNb3Rpb25WYWx1ZXMiLCJzY3JvbGxYIiwic2Nyb2xsWFByb2dyZXNzIiwic2Nyb2xsWVByb2dyZXNzIiwibGF5b3V0RWZmZWN0IiwidXNlTGlmZWN5Y2xlRWZmZWN0IiwiaW1wb3J0X3JlYWN0MzYiLCJpbml0aWFsVGltZXN0YW1wIiwicHJvdmlkZVRpbWVTaW5jZVN0YXJ0IiwiV2lsbENoYW5nZU1vdGlvblZhbHVlIiwibWVtYmVyTmFtZSIsImltcG9ydF9yZWFjdDM3IiwiaW1wb3J0X3JlYWN0MzgiLCJyZWR1Y2VkTW90aW9uUHJlZmVyZW5jZSIsImhhc01vdW50ZWQiLCJzdWJzY3JpYmVycyIsIm9ic2VydmVUaW1lbGluZSIsInByZXZQcm9ncmVzcyIsIm9uRnJhbWUiLCJwZXJjZW50YWdlIiwic3VwcG9ydHNTY3JvbGxUaW1lbGluZSIsIlNjcm9sbFRpbWVsaW5lIiwiR3JvdXBQbGF5YmFja0NvbnRyb2xzIiwib25SZXNvbHZlIiwib25SZWplY3QiLCJjYXRjaCIsImdldEFsbCIsInByb3BOYW1lIiwic2V0QWxsIiwibmV3VmFsdWUiLCJjYW5jZWxBbGwiLCJjYW5jZWxUaW1lbGluZSIsInJ1bkFsbCIsIm1ldGhvZE5hbWUiLCJpc0RPTUtleWZyYW1lcyIsImNyZWF0ZUdlbmVyYXRvckVhc2luZyIsImNhbGNOZXh0VGltZSIsImxhYmVscyIsInJhbmdlU2l6ZSIsImdldEVhc2luZ0ZvclNlZ21lbnQiLCJlcmFzZUtleWZyYW1lcyIsInNlcXVlbmNlIiwiZW5kVGltZSIsImtleWZyYW1lIiwiYXQiLCJhZGRLZXlmcmFtZXMiLCJjb21wYXJlQnlUaW1lIiwiZGVmYXVsdFNlZ21lbnRFYXNpbmciLCJjcmVhdGVBbmltYXRpb25zRnJvbVNlcXVlbmNlIiwiZGVmYXVsdFRyYW5zaXRpb24iLCJzZXF1ZW5jZVRyYW5zaXRpb24iLCJkZWZhdWx0RHVyYXRpb24iLCJhbmltYXRpb25EZWZpbml0aW9ucyIsInNlcXVlbmNlcyIsImVsZW1lbnRDYWNoZSIsInRpbWVMYWJlbHMiLCJzZWdtZW50Iiwic3ViamVjdCIsIm1heER1cmF0aW9uMyIsInJlc29sdmVWYWx1ZVNlcXVlbmNlIiwidmFsdWVLZXlmcmFtZXMiLCJ2YWx1ZVNlcXVlbmNlIiwiZWxlbWVudEluZGV4IiwibnVtRWxlbWVudHMiLCJ2YWx1ZUtleWZyYW1lc0FzTGlzdCIsImtleWZyYW1lc0FzTGlzdCIsInJlbWFpbmluZ1RyYW5zaXRpb24iLCJjYWxjdWxhdGVkRGVsYXkiLCJhYnNvbHV0ZURlbHRhIiwiaXNOdW1iZXJLZXlmcmFtZXNBcnJheSIsInNwcmluZ1RyYW5zaXRpb24iLCJzcHJpbmdFYXNpbmciLCJ0YXJnZXRUaW1lIiwicmVtYWluZGVyIiwidW5zaGlmdCIsInN1YmplY3RTZXF1ZW5jZSIsImdldFN1YmplY3RTZXF1ZW5jZSIsImdldFZhbHVlU2VxdWVuY2UiLCJnZXRWYWx1ZVRyYW5zaXRpb24yIiwidmFsdWVTZXF1ZW5jZXMiLCJ2YWx1ZU9mZnNldCIsInZhbHVlRWFzaW5nIiwiaXNOdW1iZXIiLCJhbmltYXRlRWxlbWVudHMiLCJlbGVtZW50T3JTZWxlY3RvciIsImlzU2VxdWVuY2UiLCJhbmltYXRlU2VxdWVuY2UiLCJzY29wZWRBbmltYXRlIiwidmFsdWVPckVsZW1lbnRPclNlcXVlbmNlIiwiaW1wb3J0X3JlYWN0MzkiLCJpdGVtcyIsInNldEl0ZW0iLCJydW5DeWNsZSIsInRocmVzaG9sZHMiLCJhY3RpdmVJbnRlcnNlY3Rpb25zIiwib25JbnRlcnNlY3Rpb25DaGFuZ2UiLCJuZXdPbkVuZCIsIm9ic2VydmVyMiIsImRpc2Nvbm5lY3QiLCJpbXBvcnRfcmVhY3Q0MCIsInNldEluVmlldyIsIm9uRW50ZXIiLCJjb21wb25lbnRDb250cm9scyIsIm5hdGl2ZUV2ZW50IiwiY3JlYXRlRHJhZ0NvbnRyb2xzIiwiaW1wb3J0X3JlYWN0NDEiLCJzdGFydFRyYW5zaXRpb24iLCJpbXBvcnRfcmVhY3Q0MiIsImZvcmNlVXBkYXRlIiwic3RhcnRJbnN0YW50TGF5b3V0VHJhbnNpdGlvbiIsInVubG9ja09uRnJhbWVSZWYiLCJSZWFjdDEwIiwicmVzZXQiLCJhcHBlYXJTdG9yZUlkIiwiYXBwZWFyQW5pbWF0aW9uU3RvcmUiLCJoYW5kb2ZmRnJhbWVUaW1lIiwiaGFuZG9mZk9wdGltaXplZEFwcGVhckFuaW1hdGlvbiIsImVsZW1lbnRJZCIsIl92YWx1ZSIsIl9mcmFtZSIsIm9wdGltaXNlZFZhbHVlTmFtZSIsInN0b3JlSWQiLCJvcHRpbWlzZWRBbmltYXRpb24iLCJlcnJvciIsInN0YXJ0RnJhbWVUaW1lIiwicmVhZHlBbmltYXRpb24iLCJvblJlYWR5IiwiYXBwZWFyQW5pbWF0aW9uIiwicmVhZHkiLCJpbXBvcnRfcmVhY3Q0MyIsImNyZWF0ZU9iamVjdCIsIlN0YXRlVmlzdWFsRWxlbWVudCIsInJlc3RvcmVUcmFuc2Zvcm0iLCJfc3RhdGUiLCJpbml0aWFsU3RhdGUiLCJzZXRBbmltYXRpb25TdGF0ZSIsImFuaW1hdGlvbkRlZmluaXRpb24iLCJpbXBvcnRfcmVhY3Q0NCIsIm1heFNjYWxlIiwiaW52ZXJ0U2NhbGUiLCJoYXNXYXJuZWQiLCJwYXJlbnRTY2FsZVgiLCJwYXJlbnRTY2FsZVkiLCJSZWFjdDExIiwiaWQzIiwic2Nyb2xsVGltZWxpbmVGYWxsYmFjayIsInRpbWVsaW5lQ2FjaGUiLCJnZXRUaW1lbGluZSIsImdldE9yaWdpbkluZGV4IiwidG90YWwiLCJsYXN0SW5kZXgiLCJzdGFydERlbGF5IiwibWF4RGVsYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsMkJBQUEsR0FBQUMsVUFBQTtFQUFBLDJEQUFBQyxDQUFBQyxPQUFBO0lBQUE7O0lBRUFDLE1BQUEsQ0FBT0MsY0FBQSxDQUFlRixPQUFBLEVBQVMsY0FBYztNQUFFRyxLQUFBLEVBQU87SUFBSyxDQUFDO0lBRTVELFNBQVNDLFFBQVFDLEVBQUEsRUFBSTtNQUNuQixJQUFJQyxLQUFBLEdBQVEsQ0FBQztNQUNiLE9BQU8sVUFBVUMsR0FBQSxFQUFLO1FBQ3BCLElBQUlELEtBQUEsQ0FBTUMsR0FBQSxNQUFTLFFBQVdELEtBQUEsQ0FBTUMsR0FBQSxJQUFPRixFQUFBLENBQUdFLEdBQUc7UUFDakQsT0FBT0QsS0FBQSxDQUFNQyxHQUFBO01BQ2Y7SUFDRjtJQUVBUCxPQUFBLENBQVFRLE9BQUEsR0FBVUosT0FBQTtFQUFBO0FBQUE7OztBQ1psQixJQUFBSyxpQ0FBQSxHQUFBWCxVQUFBO0VBQUEsdUVBQUFZLENBQUFWLE9BQUE7SUFBQTs7SUFFQUMsTUFBQSxDQUFPQyxjQUFBLENBQWVGLE9BQUEsRUFBUyxjQUFjO01BQUVHLEtBQUEsRUFBTztJQUFLLENBQUM7SUFFNUQsU0FBU1EsZ0JBQWlCQyxFQUFBLEVBQUk7TUFBRSxPQUFRQSxFQUFBLElBQU8sT0FBT0EsRUFBQSxLQUFPLFlBQWEsYUFBYUEsRUFBQSxHQUFNQSxFQUFBLENBQUcsYUFBYUEsRUFBQTtJQUFJO0lBRWpILElBQUlSLE9BQUEsR0FBVU8sZUFBQSxDQUFnQmQsMkJBQUEsRUFBMkI7SUFFekQsSUFBSWdCLGVBQUEsR0FBa0I7SUFFdEIsSUFBSUMsS0FBQSxHQUFRVixPQUFBLENBQVEsVUFBVVcsSUFBQSxFQUFNO01BQ2xDLE9BQU9GLGVBQUEsQ0FBZ0JHLElBQUEsQ0FBS0QsSUFBSSxLQUFLQSxJQUFBLENBQUtFLFVBQUEsQ0FBVyxDQUFDLE1BQU0sT0FFekRGLElBQUEsQ0FBS0UsVUFBQSxDQUFXLENBQUMsTUFBTSxPQUV2QkYsSUFBQSxDQUFLRSxVQUFBLENBQVcsQ0FBQyxJQUFJO0lBQzFCLENBRUE7SUFFQWpCLE9BQUEsQ0FBUVEsT0FBQSxHQUFVTSxLQUFBO0VBQUE7QUFBQTs7O0FDcEJsQixJQUFBSSw2QkFBQTtBQUFBQyxRQUFBLENBQUFELDZCQUFBO0VBQUFFLGVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxlQUFBO0VBQUFDLG1CQUFBLEVBQUFBLENBQUEsS0FBQUEsbUJBQUE7RUFBQUMsNEJBQUEsRUFBQUEsQ0FBQSxLQUFBQSw0QkFBQTtFQUFBQyxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUEsUUFBQTtFQUFBQyxXQUFBLEVBQUFBLENBQUEsS0FBQUEsV0FBQTtFQUFBQyxrQkFBQSxFQUFBQSxDQUFBLEtBQUFBLGtCQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQSxZQUFBO0VBQUFDLG1CQUFBLEVBQUFBLENBQUEsS0FBQUEsbUJBQUE7RUFBQUMsYUFBQSxFQUFBQSxDQUFBLEtBQUFBLGFBQUE7RUFBQUMsa0JBQUEsRUFBQUEsQ0FBQSxLQUFBQSxrQkFBQTtFQUFBQyxXQUFBLEVBQUFBLENBQUEsS0FBQUEsV0FBQTtFQUFBQyxlQUFBLEVBQUFBLENBQUEsS0FBQUEsZUFBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyx3QkFBQSxFQUFBQSxDQUFBLEtBQUFBLHdCQUFBO0VBQUFDLGFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxhQUFBO0VBQUFDLGVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxlQUFBO0VBQUFDLGNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxjQUFBO0VBQUFDLGlCQUFBLEVBQUFBLENBQUEsS0FBQUEsaUJBQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFBLE9BQUE7RUFBQUMsWUFBQSxFQUFBQSxDQUFBLEtBQUFBLFlBQUE7RUFBQUMsb0JBQUEsRUFBQUEsQ0FBQSxLQUFBQSxvQkFBQTtFQUFBQyxpQkFBQSxFQUFBQSxDQUFBLEtBQUFBLGlCQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQSxNQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLGNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxjQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLFdBQUEsRUFBQUEsQ0FBQSxLQUFBQSxXQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLHVCQUFBLEVBQUFBLENBQUEsS0FBQUEsdUJBQUE7RUFBQUMsTUFBQSxFQUFBQSxDQUFBLEtBQUFBLE1BQUE7RUFBQUMsU0FBQSxFQUFBQSxDQUFBLEtBQUFBLFNBQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFBLE9BQUE7RUFBQUMsS0FBQSxFQUFBQSxDQUFBLEtBQUFBLEtBQUE7RUFBQUMsS0FBQSxFQUFBQSxDQUFBLEtBQUFBLEtBQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFBLE9BQUE7RUFBQUMsU0FBQSxFQUFBQSxDQUFBLEtBQUFBLFNBQUE7RUFBQUMsd0JBQUEsRUFBQUEsQ0FBQSxLQUFBQSx3QkFBQTtFQUFBQyxxQkFBQSxFQUFBQSxDQUFBLEtBQUFBLHFCQUFBO0VBQUFDLG1CQUFBLEVBQUFBLENBQUEsS0FBQUEsbUJBQUE7RUFBQUMsV0FBQSxFQUFBQSxDQUFBLEtBQUFBLFdBQUE7RUFBQUMsS0FBQSxFQUFBQSxDQUFBLEtBQUFBLEtBQUE7RUFBQUMseUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSx5QkFBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUEsUUFBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUEsTUFBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUEsTUFBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxXQUFBLEVBQUFBLENBQUEsS0FBQUEsV0FBQTtFQUFBQyxLQUFBLEVBQUFBLENBQUEsS0FBQUEsS0FBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUEsTUFBQTtFQUFBQyxXQUFBLEVBQUFBLENBQUEsS0FBQUEsV0FBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFBQyxpQkFBQSxFQUFBQSxDQUFBLEtBQUFBLGlCQUFBO0VBQUFDLGFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxhQUFBO0VBQUFDLGlCQUFBLEVBQUFBLENBQUEsS0FBQUEsaUJBQUE7RUFBQUMsQ0FBQSxFQUFBQSxDQUFBLEtBQUFBLENBQUE7RUFBQUMsa0JBQUEsRUFBQUEsQ0FBQSxLQUFBQSxrQkFBQTtFQUFBQyxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFBQyxHQUFBLEVBQUFBLENBQUEsS0FBQUEsR0FBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUEsTUFBQTtFQUFBQyxXQUFBLEVBQUFBLENBQUEsS0FBQUEsV0FBQTtFQUFBQyw0QkFBQSxFQUFBQSxDQUFBLEtBQUFBLDRCQUFBO0VBQUFDLElBQUEsRUFBQUEsQ0FBQSxLQUFBQSxJQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxRQUFBO0VBQUFDLEVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxFQUFBO0VBQUFDLGtCQUFBLEVBQUFBLENBQUEsS0FBQUEsa0JBQUE7RUFBQUMsYUFBQSxFQUFBQSxDQUFBLEtBQUFBLGFBQUE7RUFBQUMsTUFBQSxFQUFBQSxDQUFBLEtBQUFBLE1BQUE7RUFBQUMsVUFBQSxFQUFBQSxDQUFBLEtBQUFBLFVBQUE7RUFBQUMsTUFBQSxFQUFBQSxDQUFBLEtB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