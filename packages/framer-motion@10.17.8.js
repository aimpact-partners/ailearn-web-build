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

// .beyond/uimport/temp/framer-motion.10.17.8.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9tZW1vaXplL2Rpc3QvbWVtb2l6ZS5icm93c2VyLmNqcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9pcy1wcm9wLXZhbGlkL2Rpc3QvaXMtcHJvcC12YWxpZC5icm93c2VyLmNqcy5qcyIsIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL2ZyYW1lci1tb3Rpb24uMTAuMTcuOC5qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvY29udGV4dC9Nb3Rpb25Db25maWdDb250ZXh0Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvY29udGV4dC9Nb3Rpb25Db250ZXh0L2luZGV4Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvY29udGV4dC9QcmVzZW5jZUNvbnRleHQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy9pcy1icm93c2VyLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvdXNlLWlzb21vcnBoaWMtZWZmZWN0Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvY29udGV4dC9MYXp5Q29udGV4dC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vdXRpbHMvY2FtZWwtdG8tZGFzaC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9vcHRpbWl6ZWQtYXBwZWFyL2RhdGEtaWQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9tb3Rpb24vdXRpbHMvdXNlLXZpc3VhbC1lbGVtZW50Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvaXMtcmVmLW9iamVjdC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL21vdGlvbi91dGlscy91c2UtbW90aW9uLXJlZi5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci91dGlscy9pcy12YXJpYW50LWxhYmVsLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL3V0aWxzL2lzLWFuaW1hdGlvbi1jb250cm9scy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci91dGlscy92YXJpYW50LXByb3BzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL3V0aWxzL2lzLWNvbnRyb2xsaW5nLXZhcmlhbnRzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvY29udGV4dC9Nb3Rpb25Db250ZXh0L3V0aWxzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvY29udGV4dC9Nb3Rpb25Db250ZXh0L2NyZWF0ZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL21vdGlvbi9mZWF0dXJlcy9kZWZpbml0aW9ucy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL21vdGlvbi9mZWF0dXJlcy9sb2FkLWZlYXR1cmVzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvY29udGV4dC9MYXlvdXRHcm91cENvbnRleHQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9jb250ZXh0L1N3aXRjaExheW91dEdyb3VwQ29udGV4dC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL21vdGlvbi91dGlscy9zeW1ib2wubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9tb3Rpb24vaW5kZXgubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL21vdGlvbi1wcm94eS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9zdmcvbG93ZXJjYXNlLWVsZW1lbnRzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS91dGlscy9pcy1zdmctY29tcG9uZW50Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcHJvamVjdGlvbi9zdHlsZXMvc2NhbGUtY29ycmVjdGlvbi5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9odG1sL3V0aWxzL3RyYW5zZm9ybS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL21vdGlvbi91dGlscy9pcy1mb3JjZWQtbW90aW9uLXZhbHVlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdmFsdWUvdXRpbHMvaXMtbW90aW9uLXZhbHVlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2h0bWwvdXRpbHMvYnVpbGQtdHJhbnNmb3JtLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS91dGlscy9pcy1jc3MtdmFyaWFibGUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL3ZhbHVlLXR5cGVzL2dldC1hcy10eXBlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvY2xhbXAubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy92YWx1ZS90eXBlcy9udW1iZXJzL2luZGV4Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdmFsdWUvdHlwZXMvdXRpbHMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy92YWx1ZS90eXBlcy9udW1iZXJzL3VuaXRzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS92YWx1ZS10eXBlcy90eXBlLWludC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vdmFsdWUtdHlwZXMvbnVtYmVyLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2h0bWwvdXRpbHMvYnVpbGQtc3R5bGVzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2h0bWwvdXRpbHMvY3JlYXRlLXJlbmRlci1zdGF0ZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9odG1sL3VzZS1wcm9wcy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL21vdGlvbi91dGlscy92YWxpZC1wcm9wLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS91dGlscy9maWx0ZXItcHJvcHMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvc3ZnL3V0aWxzL3RyYW5zZm9ybS1vcmlnaW4ubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvc3ZnL3V0aWxzL3BhdGgubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvc3ZnL3V0aWxzL2J1aWxkLWF0dHJzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL3N2Zy91dGlscy9jcmVhdGUtcmVuZGVyLXN0YXRlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL3N2Zy91dGlscy9pcy1zdmctdGFnLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL3N2Zy91c2UtcHJvcHMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL3VzZS1yZW5kZXIubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvaHRtbC91dGlscy9yZW5kZXIubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvc3ZnL3V0aWxzL2NhbWVsLWNhc2UtYXR0cnMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvc3ZnL3V0aWxzL3JlbmRlci5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9odG1sL3V0aWxzL3NjcmFwZS1tb3Rpb24tdmFsdWVzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL3N2Zy91dGlscy9zY3JhcGUtbW90aW9uLXZhbHVlcy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci91dGlscy9yZXNvbHZlLXZhcmlhbnRzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvdXNlLWNvbnN0YW50Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL3V0aWxzL2lzLWtleWZyYW1lcy10YXJnZXQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy9yZXNvbHZlLXZhbHVlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdmFsdWUvdXRpbHMvcmVzb2x2ZS1tb3Rpb24tdmFsdWUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9tb3Rpb24vdXRpbHMvdXNlLXZpc3VhbC1zdGF0ZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL25vb3AubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9mcmFtZWxvb3AvcmVuZGVyLXN0ZXAubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9mcmFtZWxvb3AvYmF0Y2hlci5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2ZyYW1lbG9vcC9mcmFtZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9zdmcvY29uZmlnLW1vdGlvbi5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9odG1sL2NvbmZpZy1tb3Rpb24ubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL3V0aWxzL2NyZWF0ZS1jb25maWcubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9ldmVudHMvYWRkLWRvbS1ldmVudC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2V2ZW50cy91dGlscy9pcy1wcmltYXJ5LXBvaW50ZXIubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9ldmVudHMvZXZlbnQtaW5mby5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2V2ZW50cy9hZGQtcG9pbnRlci1ldmVudC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL3BpcGUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9nZXN0dXJlcy9kcmFnL3V0aWxzL2xvY2subWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9tb3Rpb24vZmVhdHVyZXMvRmVhdHVyZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2dlc3R1cmVzL2hvdmVyLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvZ2VzdHVyZXMvZm9jdXMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9nZXN0dXJlcy91dGlscy9pcy1ub2RlLW9yLWNoaWxkLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvZ2VzdHVyZXMvcHJlc3MubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9tb3Rpb24vZmVhdHVyZXMvdmlld3BvcnQvb2JzZXJ2ZXJzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvbW90aW9uL2ZlYXR1cmVzL3ZpZXdwb3J0L2luZGV4Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvbW90aW9uL2ZlYXR1cmVzL2dlc3R1cmVzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvc2hhbGxvdy1jb21wYXJlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL3V0aWxzL3Jlc29sdmUtZHluYW1pYy12YXJpYW50cy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL2Vycm9ycy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL3RpbWUtY29udmVyc2lvbi5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL3VzZS1pbnN0YW50LXRyYW5zaXRpb24tc3RhdGUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9lYXNpbmcvdXRpbHMvaXMtYmV6aWVyLWRlZmluaXRpb24ubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vYW5pbWF0b3JzL3dhYXBpL2Vhc2luZy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9hbmltYXRvcnMvd2FhcGkvaW5kZXgubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vYW5pbWF0b3JzL3dhYXBpL3V0aWxzL2dldC1maW5hbC1rZXlmcmFtZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2Vhc2luZy9jdWJpYy1iZXppZXIubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9lYXNpbmcvZWFzZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2Vhc2luZy91dGlscy9pcy1lYXNpbmctYXJyYXkubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9lYXNpbmcvbW9kaWZpZXJzL21pcnJvci5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2Vhc2luZy9tb2RpZmllcnMvcmV2ZXJzZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2Vhc2luZy9jaXJjLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvZWFzaW5nL2JhY2subWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9lYXNpbmcvYW50aWNpcGF0ZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2Vhc2luZy91dGlscy9tYXAubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy92YWx1ZS90eXBlcy9jb2xvci91dGlscy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3ZhbHVlL3R5cGVzL2NvbG9yL3JnYmEubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy92YWx1ZS90eXBlcy9jb2xvci9oZXgubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy92YWx1ZS90eXBlcy9jb2xvci9oc2xhLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdmFsdWUvdHlwZXMvY29sb3IvaW5kZXgubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy9taXgubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy9oc2xhLXRvLXJnYmEubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy9taXgtY29sb3IubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy92YWx1ZS90eXBlcy9jb21wbGV4L2luZGV4Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvbWl4LWNvbXBsZXgubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy9wcm9ncmVzcy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL2ludGVycG9sYXRlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvb2Zmc2V0cy9maWxsLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvb2Zmc2V0cy9kZWZhdWx0Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvb2Zmc2V0cy90aW1lLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL2dlbmVyYXRvcnMva2V5ZnJhbWVzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvdmVsb2NpdHktcGVyLXNlY29uZC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9nZW5lcmF0b3JzL3V0aWxzL3ZlbG9jaXR5Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL2dlbmVyYXRvcnMvc3ByaW5nL2ZpbmQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vZ2VuZXJhdG9ycy9zcHJpbmcvaW5kZXgubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vZ2VuZXJhdG9ycy9pbmVydGlhLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL2FuaW1hdG9ycy9qcy9kcml2ZXItZnJhbWVsb29wLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL2dlbmVyYXRvcnMvdXRpbHMvY2FsYy1kdXJhdGlvbi5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9hbmltYXRvcnMvanMvaW5kZXgubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy9tZW1vLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL2FuaW1hdG9ycy93YWFwaS9jcmVhdGUtYWNjZWxlcmF0ZWQtYW5pbWF0aW9uLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL2FuaW1hdG9ycy9pbnN0YW50Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL3V0aWxzL2RlZmF1bHQtdHJhbnNpdGlvbnMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vdXRpbHMvaXMtYW5pbWF0YWJsZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3ZhbHVlL3R5cGVzL2NvbXBsZXgvZmlsdGVyLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS92YWx1ZS10eXBlcy9kZWZhdWx0cy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vdmFsdWUtdHlwZXMvYW5pbWF0YWJsZS1ub25lLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvaXMtemVyby12YWx1ZS1zdHJpbmcubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vdXRpbHMvaXMtbm9uZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi91dGlscy9rZXlmcmFtZXMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vdXRpbHMvdHJhbnNpdGlvbnMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy9HbG9iYWxDb25maWcubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vaW50ZXJmYWNlcy9tb3Rpb24tdmFsdWUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy92YWx1ZS91c2Utd2lsbC1jaGFuZ2UvaXMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy9pcy1udW1lcmljYWwtc3RyaW5nLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvYXJyYXkubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy9zdWJzY3JpcHRpb24tbWFuYWdlci5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL3dhcm4tb25jZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3ZhbHVlL2luZGV4Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS92YWx1ZS10eXBlcy90ZXN0Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS92YWx1ZS10eXBlcy90eXBlLWF1dG8ubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL3ZhbHVlLXR5cGVzL2RpbWVuc2lvbnMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL3ZhbHVlLXR5cGVzL2ZpbmQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvdXRpbHMvc2V0dGVycy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9pbnRlcmZhY2VzL3Zpc3VhbC1lbGVtZW50LXRhcmdldC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9pbnRlcmZhY2VzL3Zpc3VhbC1lbGVtZW50LXZhcmlhbnQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vaW50ZXJmYWNlcy92aXN1YWwtZWxlbWVudC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci91dGlscy9hbmltYXRpb24tc3RhdGUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9tb3Rpb24vZmVhdHVyZXMvYW5pbWF0aW9uL2luZGV4Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvbW90aW9uL2ZlYXR1cmVzL2FuaW1hdGlvbi9leGl0Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvbW90aW9uL2ZlYXR1cmVzL2FuaW1hdGlvbnMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy9kaXN0YW5jZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2dlc3R1cmVzL3Bhbi9QYW5TZXNzaW9uLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcHJvamVjdGlvbi9nZW9tZXRyeS9kZWx0YS1jYWxjLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvZ2VzdHVyZXMvZHJhZy91dGlscy9jb25zdHJhaW50cy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3Byb2plY3Rpb24vZ2VvbWV0cnkvbW9kZWxzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcHJvamVjdGlvbi91dGlscy9lYWNoLWF4aXMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9wcm9qZWN0aW9uL2dlb21ldHJ5L2NvbnZlcnNpb24ubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9wcm9qZWN0aW9uL3V0aWxzL2hhcy10cmFuc2Zvcm0ubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9wcm9qZWN0aW9uL2dlb21ldHJ5L2RlbHRhLWFwcGx5Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcHJvamVjdGlvbi91dGlscy9tZWFzdXJlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvZ2V0LWNvbnRleHQtd2luZG93Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvZ2VzdHVyZXMvZHJhZy9WaXN1YWxFbGVtZW50RHJhZ0NvbnRyb2xzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvZ2VzdHVyZXMvZHJhZy9pbmRleC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2dlc3R1cmVzL3Bhbi9pbmRleC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2NvbXBvbmVudHMvQW5pbWF0ZVByZXNlbmNlL3VzZS1wcmVzZW5jZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3Byb2plY3Rpb24vbm9kZS9zdGF0ZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3Byb2plY3Rpb24vc3R5bGVzL3NjYWxlLWJvcmRlci1yYWRpdXMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9wcm9qZWN0aW9uL3N0eWxlcy9zY2FsZS1ib3gtc2hhZG93Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvbW90aW9uL2ZlYXR1cmVzL2xheW91dC9NZWFzdXJlTGF5b3V0Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcHJvamVjdGlvbi9hbmltYXRpb24vbWl4LXZhbHVlcy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3Byb2plY3Rpb24vZ2VvbWV0cnkvY29weS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3Byb2plY3Rpb24vZ2VvbWV0cnkvZGVsdGEtcmVtb3ZlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcHJvamVjdGlvbi9nZW9tZXRyeS91dGlscy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3Byb2plY3Rpb24vc2hhcmVkL3N0YWNrLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcHJvamVjdGlvbi9zdHlsZXMvdHJhbnNmb3JtLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL3V0aWxzL2NvbXBhcmUtYnktZGVwdGgubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvdXRpbHMvZmxhdC10cmVlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvZGVsYXkubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9kZWJ1Zy9yZWNvcmQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL3V0aWxzL2lzLXN2Zy1lbGVtZW50Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL2ludGVyZmFjZXMvc2luZ2xlLXZhbHVlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcHJvamVjdGlvbi9ub2RlL2NyZWF0ZS1wcm9qZWN0aW9uLW5vZGUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9wcm9qZWN0aW9uL25vZGUvRG9jdW1lbnRQcm9qZWN0aW9uTm9kZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3Byb2plY3Rpb24vbm9kZS9IVE1MUHJvamVjdGlvbk5vZGUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9tb3Rpb24vZmVhdHVyZXMvZHJhZy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vdXRpbHMvY3NzLXZhcmlhYmxlcy1jb252ZXJzaW9uLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS91dGlscy91bml0LWNvbnZlcnNpb24ubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL3V0aWxzL3BhcnNlLWRvbS12YXJpYW50Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvcmVkdWNlZC1tb3Rpb24vc3RhdGUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy9yZWR1Y2VkLW1vdGlvbi9pbmRleC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci91dGlscy9tb3Rpb24tdmFsdWVzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL3N0b3JlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL1Zpc3VhbEVsZW1lbnQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL0RPTVZpc3VhbEVsZW1lbnQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvaHRtbC9IVE1MVmlzdWFsRWxlbWVudC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9zdmcvU1ZHVmlzdWFsRWxlbWVudC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vY3JlYXRlLXZpc3VhbC1lbGVtZW50Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvbW90aW9uL2ZlYXR1cmVzL2xheW91dC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vbW90aW9uLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS9tb3Rpb24tbWluaW1hbC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL3VzZS1pcy1tb3VudGVkLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvdXNlLWZvcmNlLXVwZGF0ZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2NvbXBvbmVudHMvQW5pbWF0ZVByZXNlbmNlL1BvcENoaWxkLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvY29tcG9uZW50cy9BbmltYXRlUHJlc2VuY2UvUHJlc2VuY2VDaGlsZC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL3VzZS11bm1vdW50LWVmZmVjdC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2NvbXBvbmVudHMvQW5pbWF0ZVByZXNlbmNlL2luZGV4Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvY29tcG9uZW50cy9Nb3Rpb25Db25maWcvaW5kZXgubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9jb21wb25lbnRzL0xhenlNb3Rpb24vaW5kZXgubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9jb250ZXh0L0RlcHJlY2F0ZWRMYXlvdXRHcm91cENvbnRleHQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9wcm9qZWN0aW9uL25vZGUvZ3JvdXAubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9jb21wb25lbnRzL0xheW91dEdyb3VwL2luZGV4Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvY29udGV4dC9SZW9yZGVyQ29udGV4dC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2NvbXBvbmVudHMvUmVvcmRlci91dGlscy9jaGVjay1yZW9yZGVyLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvY29tcG9uZW50cy9SZW9yZGVyL0dyb3VwLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdmFsdWUvdXNlLW1vdGlvbi12YWx1ZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL3RyYW5zZm9ybS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3ZhbHVlL3VzZS1jb21iaW5lLXZhbHVlcy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3ZhbHVlL3VzZS1jb21wdXRlZC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3ZhbHVlL3VzZS10cmFuc2Zvcm0ubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9jb21wb25lbnRzL1Jlb3JkZXIvSXRlbS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2NvbXBvbmVudHMvUmVvcmRlci9pbmRleC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vZmVhdHVyZXMtYW5pbWF0aW9uLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS9mZWF0dXJlcy1tYXgubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy92YWx1ZS91c2UtbW90aW9uLXRlbXBsYXRlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdmFsdWUvdXNlLXNwcmluZy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL3VzZS1tb3Rpb24tdmFsdWUtZXZlbnQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy92YWx1ZS91c2UtdmVsb2NpdHkubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL3V0aWxzL3Jlc29sdmUtZWxlbWVudC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vcmVzaXplL2hhbmRsZS1lbGVtZW50Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS9yZXNpemUvaGFuZGxlLXdpbmRvdy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vcmVzaXplL2luZGV4Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS9zY3JvbGwvaW5mby5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vc2Nyb2xsL29mZnNldHMvaW5zZXQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL3Njcm9sbC9vZmZzZXRzL3ByZXNldHMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL3Njcm9sbC9vZmZzZXRzL2VkZ2UubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL3Njcm9sbC9vZmZzZXRzL29mZnNldC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vc2Nyb2xsL29mZnNldHMvaW5kZXgubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL3Njcm9sbC9vbi1zY3JvbGwtaGFuZGxlci5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vc2Nyb2xsL3RyYWNrLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdmFsdWUvdXNlLXNjcm9sbC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3ZhbHVlL3Njcm9sbC91c2UtZWxlbWVudC1zY3JvbGwubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy92YWx1ZS9zY3JvbGwvdXNlLXZpZXdwb3J0LXNjcm9sbC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL3VzZS1hbmltYXRpb24tZnJhbWUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy92YWx1ZS91c2UtdGltZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3ZhbHVlL3VzZS13aWxsLWNoYW5nZS9pbmRleC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL3JlZHVjZWQtbW90aW9uL3VzZS1yZWR1Y2VkLW1vdGlvbi5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL3JlZHVjZWQtbW90aW9uL3VzZS1yZWR1Y2VkLW1vdGlvbi1jb25maWcubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vaG9va3MvYW5pbWF0aW9uLWNvbnRyb2xzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS9zY3JvbGwvb2JzZXJ2ZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vc2Nyb2xsL3N1cHBvcnRzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL0dyb3VwUGxheWJhY2tDb250cm9scy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi91dGlscy9pcy1kb20ta2V5ZnJhbWVzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL3V0aWxzL2NyZWF0ZS12aXN1YWwtZWxlbWVudC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2Vhc2luZy91dGlscy9jcmVhdGUtZ2VuZXJhdG9yLWVhc2luZy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9zZXF1ZW5jZS91dGlscy9jYWxjLXRpbWUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy93cmFwLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvZWFzaW5nL3V0aWxzL2dldC1lYXNpbmctZm9yLXNlZ21lbnQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vc2VxdWVuY2UvdXRpbHMvZWRpdC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9zZXF1ZW5jZS91dGlscy9zb3J0Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL3NlcXVlbmNlL2NyZWF0ZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9hbmltYXRlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL2hvb2tzL3VzZS1hbmltYXRlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL2hvb2tzL3VzZS1hbmltYXRpb24ubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy91c2UtY3ljbGUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL3ZpZXdwb3J0L2luZGV4Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvdXNlLWluLXZpZXcubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9nZXN0dXJlcy9kcmFnL3VzZS1kcmFnLWNvbnRyb2xzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvZXZlbnRzL3VzZS1kb20tZXZlbnQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9tb3Rpb24vdXRpbHMvaXMtbW90aW9uLWNvbXBvbmVudC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL21vdGlvbi91dGlscy91bndyYXAtbW90aW9uLWNvbXBvbmVudC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3Byb2plY3Rpb24vdXNlLWluc3RhbnQtbGF5b3V0LXRyYW5zaXRpb24ubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy91c2UtaW5zdGFudC10cmFuc2l0aW9uLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcHJvamVjdGlvbi91c2UtcmVzZXQtcHJvamVjdGlvbi5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9vcHRpbWl6ZWQtYXBwZWFyL3N0b3JlLWlkLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL29wdGltaXplZC1hcHBlYXIvc3RvcmUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vb3B0aW1pemVkLWFwcGVhci9oYW5kb2ZmLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL29wdGltaXplZC1hcHBlYXIvc3RhcnQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vaG9va3MvdXNlLWFuaW1hdGVkLXN0YXRlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdmFsdWUvdXNlLWludmVydGVkLXNjYWxlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvY29tcG9uZW50cy9BbmltYXRlU2hhcmVkTGF5b3V0Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS9zY3JvbGwvaW5kZXgubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vdXRpbHMvc3RhZ2dlci5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2ZyYW1lbG9vcC9pbmRleC1sZWdhY3kubWpzIl0sIm5hbWVzIjpbInJlcXVpcmVfbWVtb2l6ZV9icm93c2VyX2NqcyIsIl9fY29tbW9uSlMiLCJub2RlX21vZHVsZXMvQGVtb3Rpb24vbWVtb2l6ZS9kaXN0L21lbW9pemUuYnJvd3Nlci5janMuanMiLCJleHBvcnRzIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsIm1lbW9pemUiLCJmbiIsImNhY2hlIiwiYXJnIiwiZGVmYXVsdCIsInJlcXVpcmVfaXNfcHJvcF92YWxpZF9icm93c2VyX2NqcyIsIm5vZGVfbW9kdWxlcy9AZW1vdGlvbi9pcy1wcm9wLXZhbGlkL2Rpc3QvaXMtcHJvcC12YWxpZC5icm93c2VyLmNqcy5qcyIsIl9pbnRlcm9wRGVmYXVsdCIsImV4IiwicmVhY3RQcm9wc1JlZ2V4IiwiaW5kZXgiLCJwcm9wIiwidGVzdCIsImNoYXJDb2RlQXQiLCJmcmFtZXJfbW90aW9uXzEwXzE3XzhfZXhwb3J0cyIsIl9fZXhwb3J0IiwiQW5pbWF0ZVByZXNlbmNlIiwiQW5pbWF0ZVNoYXJlZExheW91dCIsIkRlcHJlY2F0ZWRMYXlvdXRHcm91cENvbnRleHQiLCJEcmFnQ29udHJvbHMiLCJGbGF0VHJlZSIsIkxheW91dEdyb3VwIiwiTGF5b3V0R3JvdXBDb250ZXh0IiwiTGF6eU1vdGlvbiIsIk1vdGlvbkNvbmZpZyIsIk1vdGlvbkNvbmZpZ0NvbnRleHQiLCJNb3Rpb25Db250ZXh0IiwiTW90aW9uR2xvYmFsQ29uZmlnIiwiTW90aW9uVmFsdWUiLCJQcmVzZW5jZUNvbnRleHQiLCJSZW9yZGVyIiwiU3dpdGNoTGF5b3V0R3JvdXBDb250ZXh0IiwiVmlzdWFsRWxlbWVudCIsImFkZFBvaW50ZXJFdmVudCIsImFkZFBvaW50ZXJJbmZvIiwiYWRkU2NhbGVDb3JyZWN0b3IiLCJhbmltYXRlIiwiYW5pbWF0ZVZhbHVlIiwiYW5pbWF0ZVZpc3VhbEVsZW1lbnQiLCJhbmltYXRpb25Db250cm9scyIsImFuaW1hdGlvbnMiLCJhbnRpY2lwYXRlIiwiYmFja0luIiwiYmFja0luT3V0IiwiYmFja091dCIsImJ1aWxkVHJhbnNmb3JtIiwiY2FsY0xlbmd0aCIsImNhbmNlbEZyYW1lIiwiY2FuY2VsU3luYyIsImNoZWNrVGFyZ2V0Rm9yTmV3VmFsdWVzIiwiY2lyY0luIiwiY2lyY0luT3V0IiwiY2lyY091dCIsImNsYW1wIiwiY29sb3IiLCJjb21wbGV4IiwiY3JlYXRlQm94IiwiY3JlYXRlRG9tTW90aW9uQ29tcG9uZW50IiwiY3JlYXRlTW90aW9uQ29tcG9uZW50IiwiY3JlYXRlU2NvcGVkQW5pbWF0ZSIsImN1YmljQmV6aWVyIiwiZGVsYXkiLCJkaXNhYmxlSW5zdGFudFRyYW5zaXRpb25zIiwiZGlzdGFuY2UiLCJkaXN0YW5jZTJEIiwiZG9tQW5pbWF0aW9uIiwiZG9tTWF4IiwiZWFzZUluIiwiZWFzZUluT3V0IiwiZWFzZU91dCIsImZpbHRlclByb3BzIiwiZnJhbWUiLCJmcmFtZURhdGEiLCJpblZpZXciLCJpbnRlcnBvbGF0ZSIsImludmFyaWFudCIsImlzQnJvd3NlciIsImlzRHJhZ0FjdGl2ZSIsImlzTW90aW9uQ29tcG9uZW50IiwiaXNNb3Rpb25WYWx1ZSIsImlzVmFsaWRNb3Rpb25Qcm9wIiwibSIsIm1ha2VVc2VWaXN1YWxTdGF0ZSIsIm1pcnJvckVhc2luZyIsIm1peCIsIm1vdGlvbiIsIm1vdGlvblZhbHVlIiwib3B0aW1pemVkQXBwZWFyRGF0YUF0dHJpYnV0ZSIsInBpcGUiLCJwcm9ncmVzcyIsInB4IiwicmVzb2x2ZU1vdGlvblZhbHVlIiwicmV2ZXJzZUVhc2luZyIsInNjcm9sbCIsInNjcm9sbEluZm8iLCJzcHJpbmciLCJzdGFnZ2VyIiwic3RhcnRPcHRpbWl6ZWRBcHBlYXJBbmltYXRpb24iLCJzdGVwcyIsInN5bmMiLCJ0cmFuc2Zvcm0iLCJ1bndyYXBNb3Rpb25Db21wb25lbnQiLCJ1c2VBbmltYXRlIiwidXNlQW5pbWF0aW9uIiwidXNlQW5pbWF0aW9uQ29udHJvbHMiLCJ1c2VBbmltYXRpb25GcmFtZSIsInVzZUN5Y2xlIiwidXNlRGVwcmVjYXRlZEFuaW1hdGVkU3RhdGUiLCJ1c2VBbmltYXRlZFN0YXRlIiwidXNlRGVwcmVjYXRlZEludmVydGVkU2NhbGUiLCJ1c2VJbnZlcnRlZFNjYWxlIiwidXNlRG9tRXZlbnQiLCJ1c2VEcmFnQ29udHJvbHMiLCJ1c2VFbGVtZW50U2Nyb2xsIiwidXNlRm9yY2VVcGRhdGUiLCJ1c2VJblZpZXciLCJ1c2VJbnN0YW50TGF5b3V0VHJhbnNpdGlvbiIsInVzZUluc3RhbnRUcmFuc2l0aW9uIiwidXNlSXNQcmVzZW50IiwidXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCIsInVzZU1vdGlvblRlbXBsYXRlIiwidXNlTW90aW9uVmFsdWUiLCJ1c2VNb3Rpb25WYWx1ZUV2ZW50IiwidXNlUHJlc2VuY2UiLCJ1c2VSZWR1Y2VkTW90aW9uIiwidXNlUmVkdWNlZE1vdGlvbkNvbmZpZyIsInVzZVJlc2V0UHJvamVjdGlvbiIsInVzZVNjcm9sbCIsInVzZVNwcmluZyIsInVzZVRpbWUiLCJ1c2VUcmFuc2Zvcm0iLCJ1c2VVbm1vdW50RWZmZWN0IiwidXNlVmVsb2NpdHkiLCJ1c2VWaWV3cG9ydFNjcm9sbCIsInVzZVdpbGxDaGFuZ2UiLCJ2aXN1YWxFbGVtZW50U3RvcmUiLCJ3YXJuaW5nIiwid3JhcCIsIm1vZHVsZSIsIl9fdG9Db21tb25KUyIsImltcG9ydF9yZWFjdCIsInJlcXVpcmUiLCJjcmVhdGVDb250ZXh0IiwidHJhbnNmb3JtUGFnZVBvaW50IiwicCIsImlzU3RhdGljIiwicmVkdWNlZE1vdGlvbiIsImltcG9ydF9yZWFjdDIiLCJpbXBvcnRfcmVhY3QzIiwiZG9jdW1lbnQiLCJpbXBvcnRfcmVhY3Q0IiwidXNlTGF5b3V0RWZmZWN0IiwidXNlRWZmZWN0IiwiaW1wb3J0X3JlYWN0NSIsIkxhenlDb250ZXh0Iiwic3RyaWN0IiwiY2FtZWxUb0Rhc2giLCJzdHIiLCJyZXBsYWNlIiwidG9Mb3dlckNhc2UiLCJvcHRpbWl6ZWRBcHBlYXJEYXRhSWQiLCJpbXBvcnRfcmVhY3Q2IiwidXNlVmlzdWFsRWxlbWVudCIsIkNvbXBvbmVudDIiLCJ2aXN1YWxTdGF0ZSIsInByb3BzIiwiY3JlYXRlVmlzdWFsRWxlbWVudDIiLCJ2aXN1YWxFbGVtZW50IiwicGFyZW50IiwidXNlQ29udGV4dCIsImxhenlDb250ZXh0IiwicHJlc2VuY2VDb250ZXh0IiwicmVkdWNlZE1vdGlvbkNvbmZpZyIsInZpc3VhbEVsZW1lbnRSZWYiLCJ1c2VSZWYiLCJyZW5kZXJlciIsImN1cnJlbnQiLCJibG9ja0luaXRpYWxBbmltYXRpb24iLCJpbml0aWFsIiwidXNlSW5zZXJ0aW9uRWZmZWN0IiwidXBkYXRlIiwid2FudHNIYW5kb2ZmIiwiQm9vbGVhbiIsIndpbmRvdyIsIkhhbmRvZmZDb21wbGV0ZSIsInJlbmRlciIsImFuaW1hdGlvblN0YXRlIiwiYW5pbWF0ZUNoYW5nZXMiLCJ1cGRhdGVGZWF0dXJlcyIsImlzUmVmT2JqZWN0IiwicmVmIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiaW1wb3J0X3JlYWN0NyIsInVzZU1vdGlvblJlZiIsImV4dGVybmFsUmVmIiwidXNlQ2FsbGJhY2siLCJpbnN0YW5jZSIsIm1vdW50IiwidW5tb3VudCIsImlzVmFyaWFudExhYmVsIiwidiIsIkFycmF5IiwiaXNBcnJheSIsImlzQW5pbWF0aW9uQ29udHJvbHMiLCJzdGFydCIsInZhcmlhbnRQcmlvcml0eU9yZGVyIiwidmFyaWFudFByb3BzIiwiaXNDb250cm9sbGluZ1ZhcmlhbnRzIiwic29tZSIsIm5hbWUiLCJpc1ZhcmlhbnROb2RlIiwidmFyaWFudHMiLCJnZXRDdXJyZW50VHJlZVZhcmlhbnRzIiwiY29udGV4dCIsImFuaW1hdGUyIiwiaW5oZXJpdCIsImltcG9ydF9yZWFjdDgiLCJ1c2VDcmVhdGVNb3Rpb25Db250ZXh0IiwidXNlTWVtbyIsInZhcmlhbnRMYWJlbHNBc0RlcGVuZGVuY3kiLCJqb2luIiwiZmVhdHVyZVByb3BzIiwiYW5pbWF0aW9uIiwiZXhpdCIsImRyYWciLCJmb2N1cyIsImhvdmVyIiwidGFwIiwicGFuIiwibGF5b3V0IiwiZmVhdHVyZURlZmluaXRpb25zIiwia2V5IiwiaXNFbmFibGVkIiwibG9hZEZlYXR1cmVzIiwiZmVhdHVyZXMiLCJpbXBvcnRfcmVhY3Q5IiwiaW1wb3J0X3JlYWN0MTAiLCJtb3Rpb25Db21wb25lbnRTeW1ib2wiLCJTeW1ib2wiLCJmb3IiLCJSZWFjdCIsIl9fdG9FU00iLCJpbXBvcnRfcmVhY3QxMSIsInByZWxvYWRlZEZlYXR1cmVzIiwicHJlbG9hZGVkRmVhdHVyZXMyIiwiY3JlYXRlVmlzdWFsRWxlbWVudCIsInVzZVJlbmRlciIsInVzZVZpc3VhbFN0YXRlIiwidXNlVmlzdWFsU3RhdGUyIiwiQ29tcG9uZW50IiwiTW90aW9uQ29tcG9uZW50IiwiTWVhc3VyZUxheW91dDIiLCJjb25maWdBbmRQcm9wcyIsImxheW91dElkIiwidXNlTGF5b3V0SWQiLCJpbml0aWFsTGF5b3V0R3JvdXBDb25maWciLCJpc1N0cmljdCIsImNyZWF0ZUVsZW1lbnQiLCJQcm92aWRlciIsIkZvcndhcmRSZWZDb21wb25lbnQiLCJmb3J3YXJkUmVmIiwibGF5b3V0R3JvdXBJZCIsImlkIiwiY3JlYXRlTW90aW9uUHJveHkiLCJjcmVhdGVDb25maWciLCJjdXN0b20iLCJjdXN0b21Nb3Rpb25Db21wb25lbnRDb25maWciLCJQcm94eSIsImNvbXBvbmVudENhY2hlIiwiTWFwIiwiZ2V0IiwiX3RhcmdldCIsImhhcyIsInNldCIsImxvd2VyY2FzZVNWR0VsZW1lbnRzIiwiaXNTVkdDb21wb25lbnQiLCJpbmNsdWRlcyIsImluZGV4T2YiLCJzY2FsZUNvcnJlY3RvcnMiLCJjb3JyZWN0b3JzIiwiYXNzaWduIiwidHJhbnNmb3JtUHJvcE9yZGVyIiwidHJhbnNmb3JtUHJvcHMiLCJTZXQiLCJpc0ZvcmNlZE1vdGlvblZhbHVlIiwibGF5b3V0MiIsInN0YXJ0c1dpdGgiLCJnZXRWZWxvY2l0eSIsInRyYW5zbGF0ZUFsaWFzIiwieCIsInkiLCJ6IiwidHJhbnNmb3JtUGVyc3BlY3RpdmUiLCJudW1UcmFuc2Zvcm1zIiwibGVuZ3RoIiwidHJhbnNmb3JtMiIsImVuYWJsZUhhcmR3YXJlQWNjZWxlcmF0aW9uIiwiYWxsb3dUcmFuc2Zvcm1Ob25lIiwidHJhbnNmb3JtSXNEZWZhdWx0IiwidHJhbnNmb3JtVGVtcGxhdGUiLCJ0cmFuc2Zvcm1TdHJpbmciLCJpIiwidHJhbnNmb3JtTmFtZSIsInRyaW0iLCJjaGVja1N0cmluZ1N0YXJ0c1dpdGgiLCJ0b2tlbiIsImlzQ1NTVmFyaWFibGVOYW1lIiwiaXNDU1NWYXJpYWJsZVRva2VuIiwiY3NzVmFyaWFibGVSZWdleCIsImdldFZhbHVlQXNUeXBlIiwidHlwZSIsIm1pbiIsIm1heCIsIk1hdGgiLCJudW1iZXIiLCJwYXJzZSIsInBhcnNlRmxvYXQiLCJhbHBoYSIsInNjYWxlIiwic2FuaXRpemUiLCJyb3VuZCIsImZsb2F0UmVnZXgiLCJjb2xvclJlZ2V4Iiwic2luZ2xlQ29sb3JSZWdleCIsImlzU3RyaW5nIiwiY3JlYXRlVW5pdFR5cGUiLCJ1bml0IiwiZW5kc1dpdGgiLCJzcGxpdCIsImRlZ3JlZXMiLCJwZXJjZW50IiwidmgiLCJ2dyIsInByb2dyZXNzUGVyY2VudGFnZSIsImludCIsIm51bWJlclZhbHVlVHlwZXMiLCJib3JkZXJXaWR0aCIsImJvcmRlclRvcFdpZHRoIiwiYm9yZGVyUmlnaHRXaWR0aCIsImJvcmRlckJvdHRvbVdpZHRoIiwiYm9yZGVyTGVmdFdpZHRoIiwiYm9yZGVyUmFkaXVzIiwicmFkaXVzIiwiYm9yZGVyVG9wTGVmdFJhZGl1cyIsImJvcmRlclRvcFJpZ2h0UmFkaXVzIiwiYm9yZGVyQm90dG9tUmlnaHRSYWRpdXMiLCJib3JkZXJCb3R0b21MZWZ0UmFkaXVzIiwid2lkdGgiLCJtYXhXaWR0aCIsImhlaWdodCIsIm1heEhlaWdodCIsInNpemUiLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJwYWRkaW5nIiwicGFkZGluZ1RvcCIsInBhZGRpbmdSaWdodCIsInBhZGRpbmdCb3R0b20iLCJwYWRkaW5nTGVmdCIsIm1hcmdpbiIsIm1hcmdpblRvcCIsIm1hcmdpblJpZ2h0IiwibWFyZ2luQm90dG9tIiwibWFyZ2luTGVmdCIsInJvdGF0ZSIsInJvdGF0ZVgiLCJyb3RhdGVZIiwicm90YXRlWiIsInNjYWxlWCIsInNjYWxlWSIsInNjYWxlWiIsInNrZXciLCJza2V3WCIsInNrZXdZIiwidHJhbnNsYXRlWCIsInRyYW5zbGF0ZVkiLCJ0cmFuc2xhdGVaIiwicGVyc3BlY3RpdmUiLCJvcGFjaXR5Iiwib3JpZ2luWCIsIm9yaWdpblkiLCJvcmlnaW5aIiwiekluZGV4IiwiZmlsbE9wYWNpdHkiLCJzdHJva2VPcGFjaXR5IiwibnVtT2N0YXZlcyIsImJ1aWxkSFRNTFN0eWxlcyIsInN0YXRlIiwibGF0ZXN0VmFsdWVzIiwib3B0aW9ucyIsInN0eWxlIiwidmFycyIsInRyYW5zZm9ybU9yaWdpbiIsImhhc1RyYW5zZm9ybTIiLCJoYXNUcmFuc2Zvcm1PcmlnaW4iLCJ0cmFuc2Zvcm1Jc05vbmUiLCJ2YWx1ZVR5cGUiLCJ2YWx1ZUFzVHlwZSIsImNyZWF0ZUh0bWxSZW5kZXJTdGF0ZSIsImltcG9ydF9yZWFjdDEyIiwiY29weVJhd1ZhbHVlc09ubHkiLCJ0YXJnZXQiLCJzb3VyY2UiLCJ1c2VJbml0aWFsTW90aW9uVmFsdWVzIiwidXNlU3R5bGUiLCJzdHlsZVByb3AiLCJ0cmFuc2Zvcm1WYWx1ZXMiLCJ1c2VIVE1MUHJvcHMiLCJodG1sUHJvcHMiLCJkcmFnTGlzdGVuZXIiLCJkcmFnZ2FibGUiLCJ1c2VyU2VsZWN0IiwiV2Via2l0VXNlclNlbGVjdCIsIldlYmtpdFRvdWNoQ2FsbG91dCIsInRvdWNoQWN0aW9uIiwidGFiSW5kZXgiLCJvblRhcCIsIm9uVGFwU3RhcnQiLCJ3aGlsZVRhcCIsInZhbGlkTW90aW9uUHJvcHMiLCJzaG91bGRGb3J3YXJkIiwibG9hZEV4dGVybmFsSXNWYWxpZFByb3AiLCJpc1ZhbGlkUHJvcCIsIl9hIiwiaXNEb20iLCJmb3J3YXJkTW90aW9uUHJvcHMiLCJmaWx0ZXJlZFByb3BzIiwidmFsdWVzIiwiY2FsY09yaWdpbiIsIm9yaWdpbiIsIm9mZnNldCIsImNhbGNTVkdUcmFuc2Zvcm1PcmlnaW4iLCJkaW1lbnNpb25zIiwicHhPcmlnaW5YIiwicHhPcmlnaW5ZIiwiZGFzaEtleXMiLCJhcnJheSIsImNhbWVsS2V5cyIsImJ1aWxkU1ZHUGF0aCIsImF0dHJzIiwic3BhY2luZyIsInVzZURhc2hDYXNlIiwicGF0aExlbmd0aCIsImtleXMyIiwicGF0aFNwYWNpbmciLCJidWlsZFNWR0F0dHJzIiwiYXR0clgiLCJhdHRyWSIsImF0dHJTY2FsZSIsInBhdGhPZmZzZXQiLCJsYXRlc3QiLCJpc1NWR1RhZzIiLCJ2aWV3Qm94IiwiY3JlYXRlU3ZnUmVuZGVyU3RhdGUiLCJpc1NWR1RhZyIsInRhZyIsImltcG9ydF9yZWFjdDEzIiwidXNlU1ZHUHJvcHMiLCJfaXNTdGF0aWMiLCJ2aXN1YWxQcm9wcyIsInJhd1N0eWxlcyIsImltcG9ydF9yZWFjdDE0IiwiY3JlYXRlVXNlUmVuZGVyIiwidXNlVmlzdWFsUHJvcHMiLCJlbGVtZW50UHJvcHMiLCJjaGlsZHJlbiIsInJlbmRlcmVkQ2hpbGRyZW4iLCJyZW5kZXJIVE1MIiwiZWxlbWVudCIsInByb2plY3Rpb24iLCJnZXRQcm9qZWN0aW9uU3R5bGVzIiwic2V0UHJvcGVydHkiLCJjYW1lbENhc2VBdHRyaWJ1dGVzIiwicmVuZGVyU1ZHIiwicmVuZGVyU3RhdGUiLCJfc3R5bGVQcm9wIiwic2V0QXR0cmlidXRlIiwic2NyYXBlTW90aW9uVmFsdWVzRnJvbVByb3BzIiwicHJldlByb3BzIiwibmV3VmFsdWVzIiwic2NyYXBlTW90aW9uVmFsdWVzRnJvbVByb3BzMiIsInRhcmdldEtleSIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic3Vic3RyaW5nIiwicmVzb2x2ZVZhcmlhbnRGcm9tUHJvcHMiLCJkZWZpbml0aW9uIiwiY3VycmVudFZhbHVlcyIsImN1cnJlbnRWZWxvY2l0eSIsImltcG9ydF9yZWFjdDE1IiwidXNlQ29uc3RhbnQiLCJpbml0IiwiaXNLZXlmcmFtZXNUYXJnZXQiLCJpc0N1c3RvbVZhbHVlIiwidG9WYWx1ZSIsInJlc29sdmVGaW5hbFZhbHVlSW5LZXlmcmFtZXMiLCJ1bndyYXBwZWRWYWx1ZSIsImltcG9ydF9yZWFjdDE2IiwibWFrZVN0YXRlIiwic2NyYXBlTW90aW9uVmFsdWVzRnJvbVByb3BzMyIsImNyZWF0ZVJlbmRlclN0YXRlIiwib25Nb3VudCIsIm1ha2VMYXRlc3RWYWx1ZXMiLCJjb25maWciLCJtYWtlIiwic2NyYXBlTW90aW9uVmFsdWVzIiwibW90aW9uVmFsdWVzIiwiaXNDb250cm9sbGluZ1ZhcmlhbnRzJDEiLCJpc1ZhcmlhbnROb2RlJDEiLCJpc0luaXRpYWxBbmltYXRpb25CbG9ja2VkIiwidmFyaWFudFRvU2V0IiwibGlzdCIsImZvckVhY2giLCJyZXNvbHZlZCIsInRyYW5zaXRpb25FbmQiLCJ0cmFuc2l0aW9uIiwidmFsdWVUYXJnZXQiLCJub29wIiwiYW55IiwiUXVldWUiLCJjb25zdHJ1Y3RvciIsIm9yZGVyIiwic2NoZWR1bGVkIiwiYWRkIiwicHJvY2VzczIiLCJwdXNoIiwicmVtb3ZlIiwic3BsaWNlIiwiZGVsZXRlIiwiY2xlYXIiLCJjcmVhdGVSZW5kZXJTdGVwIiwicnVuTmV4dEZyYW1lIiwidGhpc0ZyYW1lIiwibmV4dEZyYW1lIiwibnVtVG9SdW4iLCJpc1Byb2Nlc3NpbmciLCJmbHVzaE5leHRGcmFtZSIsInRvS2VlcEFsaXZlIiwiV2Vha1NldCIsInN0ZXAiLCJzY2hlZHVsZSIsImNhbGxiYWNrIiwia2VlcEFsaXZlIiwiaW1tZWRpYXRlIiwiYWRkVG9DdXJyZW50RnJhbWUiLCJxdWV1ZSIsImNhbmNlbCIsInByb2Nlc3MiLCJmcmFtZURhdGEyIiwic3RlcHNPcmRlciIsIm1heEVsYXBzZWQiLCJjcmVhdGVSZW5kZXJCYXRjaGVyIiwic2NoZWR1bGVOZXh0QmF0Y2giLCJhbGxvd0tlZXBBbGl2ZSIsInVzZURlZmF1bHRFbGFwc2VkIiwiZGVsdGEiLCJ0aW1lc3RhbXAiLCJzdGVwczIiLCJyZWR1Y2UiLCJhY2MiLCJwcm9jZXNzU3RlcCIsInN0ZXBJZCIsInByb2Nlc3NCYXRjaCIsInBlcmZvcm1hbmNlIiwibm93Iiwid2FrZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInN2Z01vdGlvbkNvbmZpZyIsInJlYWQiLCJnZXRCQm94IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiZSIsInRhZ05hbWUiLCJodG1sTW90aW9uQ29uZmlnIiwiY3JlYXRlRG9tTW90aW9uQ29uZmlnIiwiYmFzZUNvbmZpZyIsImFkZERvbUV2ZW50IiwiZXZlbnROYW1lIiwiaGFuZGxlciIsInBhc3NpdmUiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImlzUHJpbWFyeVBvaW50ZXIiLCJldmVudCIsInBvaW50ZXJUeXBlIiwiYnV0dG9uIiwiaXNQcmltYXJ5IiwiZXh0cmFjdEV2ZW50SW5mbyIsInBvaW50VHlwZSIsInBvaW50IiwiY29tYmluZUZ1bmN0aW9ucyIsImEiLCJiIiwidHJhbnNmb3JtZXJzIiwiY3JlYXRlTG9jayIsImxvY2siLCJvcGVuTG9jayIsImdsb2JhbEhvcml6b250YWxMb2NrIiwiZ2xvYmFsVmVydGljYWxMb2NrIiwiZ2V0R2xvYmFsTG9jayIsImRyYWcyIiwib3Blbkhvcml6b250YWwiLCJvcGVuVmVydGljYWwiLCJvcGVuR2VzdHVyZUxvY2siLCJGZWF0dXJlIiwibm9kZSIsImlzTW91bnRlZCIsImFkZEhvdmVyRXZlbnQiLCJpc0FjdGl2ZSIsImNhbGxiYWNrTmFtZSIsImhhbmRsZUV2ZW50IiwiaW5mbyIsImdldFByb3BzIiwid2hpbGVIb3ZlciIsInNldEFjdGl2ZSIsIkhvdmVyR2VzdHVyZSIsIkZvY3VzR2VzdHVyZSIsImFyZ3VtZW50cyIsIm9uRm9jdXMiLCJpc0ZvY3VzVmlzaWJsZSIsIm1hdGNoZXMiLCJvbkJsdXIiLCJpc05vZGVPckNoaWxkIiwiY2hpbGQiLCJwYXJlbnRFbGVtZW50IiwiZmlyZVN5bnRoZXRpY1BvaW50ZXJFdmVudCIsInN5bnRoZXRpY1BvaW50ZXJFdmVudCIsIlBvaW50ZXJFdmVudCIsIlByZXNzR2VzdHVyZSIsInJlbW92ZVN0YXJ0TGlzdGVuZXJzIiwicmVtb3ZlRW5kTGlzdGVuZXJzIiwicmVtb3ZlQWNjZXNzaWJsZUxpc3RlbmVycyIsInN0YXJ0UG9pbnRlclByZXNzIiwic3RhcnRFdmVudCIsInN0YXJ0SW5mbyIsImlzUHJlc3NpbmciLCJlbmRQb2ludGVyUHJlc3MiLCJlbmRFdmVudCIsImVuZEluZm8iLCJjaGVja1ByZXNzRW5kIiwib25UYXBDYW5jZWwiLCJyZW1vdmVQb2ludGVyVXBMaXN0ZW5lciIsInJlbW92ZVBvaW50ZXJDYW5jZWxMaXN0ZW5lciIsImNhbmNlbEV2ZW50IiwiY2FuY2VsSW5mbyIsImNhbmNlbFByZXNzIiwic3RhcnRQcmVzcyIsInN0YXJ0QWNjZXNzaWJsZVByZXNzIiwiaGFuZGxlS2V5ZG93biIsImtleWRvd25FdmVudCIsImhhbmRsZUtleXVwIiwia2V5dXBFdmVudCIsInJlbW92ZUtleWRvd25MaXN0ZW5lciIsImhhbmRsZUJsdXIiLCJyZW1vdmVCbHVyTGlzdGVuZXIiLCJyZW1vdmVQb2ludGVyTGlzdGVuZXIiLCJyZW1vdmVGb2N1c0xpc3RlbmVyIiwib2JzZXJ2ZXJDYWxsYmFja3MiLCJXZWFrTWFwIiwib2JzZXJ2ZXJzIiwiZmlyZU9ic2VydmVyQ2FsbGJhY2siLCJlbnRyeSIsImZpcmVBbGxPYnNlcnZlckNhbGxiYWNrcyIsImVudHJpZXMiLCJpbml0SW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJyb290IiwibG9va3VwUm9vdCIsInJvb3RPYnNlcnZlcnMiLCJKU09OIiwic3RyaW5naWZ5IiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJvYnNlcnZlSW50ZXJzZWN0aW9uIiwicm9vdEludGVyZXNlY3Rpb25PYnNlcnZlciIsIm9ic2VydmUiLCJ1bm9ic2VydmUiLCJ0aHJlc2hvbGROYW1lcyIsImFsbCIsIkluVmlld0ZlYXR1cmUiLCJoYXNFbnRlcmVkVmlldyIsImlzSW5WaWV3Iiwic3RhcnRPYnNlcnZlciIsInZpZXdwb3J0Iiwicm9vdE1hcmdpbiIsImFtb3VudCIsIm9uY2UiLCJ0aHJlc2hvbGQiLCJvbkludGVyc2VjdGlvblVwZGF0ZSIsImlzSW50ZXJzZWN0aW5nIiwib25WaWV3cG9ydEVudGVyIiwib25WaWV3cG9ydExlYXZlIiwiaGFzT3B0aW9uc0NoYW5nZWQiLCJoYXNWaWV3cG9ydE9wdGlvbkNoYW5nZWQiLCJwcmV2Vmlld3BvcnQiLCJnZXN0dXJlQW5pbWF0aW9ucyIsInNoYWxsb3dDb21wYXJlIiwibmV4dCIsInByZXYiLCJwcmV2TGVuZ3RoIiwiZ2V0Q3VycmVudCIsInZlbG9jaXR5IiwicmVzb2x2ZVZhcmlhbnQiLCJjaGVjayIsIm1lc3NhZ2UiLCJjb25zb2xlIiwid2FybiIsIkVycm9yIiwic2Vjb25kc1RvTWlsbGlzZWNvbmRzIiwic2Vjb25kcyIsIm1pbGxpc2Vjb25kc1RvU2Vjb25kcyIsIm1pbGxpc2Vjb25kcyIsImluc3RhbnRBbmltYXRpb25TdGF0ZSIsImlzQmV6aWVyRGVmaW5pdGlvbiIsImVhc2luZyIsImlzV2FhcGlTdXBwb3J0ZWRFYXNpbmciLCJzdXBwb3J0ZWRXYWFwaUVhc2luZyIsImV2ZXJ5IiwiY3ViaWNCZXppZXJBc1N0cmluZyIsImMiLCJkIiwibGluZWFyIiwiZWFzZSIsIm1hcEVhc2luZ1RvTmF0aXZlRWFzaW5nIiwibWFwIiwiYW5pbWF0ZVN0eWxlIiwidmFsdWVOYW1lIiwia2V5ZnJhbWVzMiIsImRlbGF5MiIsImR1cmF0aW9uIiwicmVwZWF0IiwicmVwZWF0VHlwZSIsImVhc2UyIiwidGltZXMiLCJrZXlmcmFtZU9wdGlvbnMiLCJmaWxsIiwiaXRlcmF0aW9ucyIsImRpcmVjdGlvbiIsImdldEZpbmFsS2V5ZnJhbWUiLCJjYWxjQmV6aWVyIiwidCIsImExIiwiYTIiLCJzdWJkaXZpc2lvblByZWNpc2lvbiIsInN1YmRpdmlzaW9uTWF4SXRlcmF0aW9ucyIsImJpbmFyeVN1YmRpdmlkZSIsImxvd2VyQm91bmQiLCJ1cHBlckJvdW5kIiwibVgxIiwibVgyIiwiY3VycmVudFgiLCJjdXJyZW50VCIsImFicyIsIm1ZMSIsIm1ZMiIsImdldFRGb3JYIiwiYVgiLCJpc0Vhc2luZ0FycmF5Iiwic2luIiwiYWNvcyIsInBvdyIsImVhc2luZ0xvb2t1cCIsImVhc2luZ0RlZmluaXRpb25Ub0Z1bmN0aW9uIiwieDEiLCJ5MSIsIngyIiwieTIiLCJpc0NvbG9yU3RyaW5nIiwidGVzdFByb3AiLCJzcGxpdENvbG9yIiwiYU5hbWUiLCJiTmFtZSIsImNOYW1lIiwiYWxwaGEyIiwibWF0Y2giLCJjbGFtcFJnYlVuaXQiLCJyZ2JVbml0IiwicmdiYSIsInJlZCIsImdyZWVuIiwiYmx1ZSIsImFscGhhJDEiLCJwYXJzZUhleCIsInIiLCJnIiwicGFyc2VJbnQiLCJoZXgiLCJoc2xhIiwiaHVlIiwic2F0dXJhdGlvbiIsImxpZ2h0bmVzcyIsImZyb20iLCJ0byIsInByb2dyZXNzMiIsImh1ZVRvUmdiIiwicSIsImhzbGFUb1JnYmEiLCJtaXhMaW5lYXJDb2xvciIsImZyb21FeHBvIiwic3FydCIsImNvbG9yVHlwZXMiLCJnZXRDb2xvclR5cGUiLCJmaW5kIiwiYXNSR0JBIiwiY29sb3IyIiwibW9kZWwiLCJtaXhDb2xvciIsImZyb21SR0JBIiwidG9SR0JBIiwiYmxlbmRlZCIsIl9iIiwiaXNOYU4iLCJjc3NWYXJUb2tlbmlzZXIiLCJyZWdleCIsImNvdW50S2V5IiwiY29sb3JUb2tlbmlzZXIiLCJudW1iZXJUb2tlbmlzZXIiLCJ0b2tlbmlzZSIsInRva2VuaXNlZCIsImFuYWx5c2VDb21wbGV4VmFsdWUiLCJvcmlnaW5hbFZhbHVlIiwidG9TdHJpbmciLCJudW1WYXJzIiwibnVtQ29sb3JzIiwibnVtTnVtYmVycyIsInBhcnNlQ29tcGxleFZhbHVlIiwiY3JlYXRlVHJhbnNmb3JtZXIiLCJudW1WYWx1ZXMiLCJvdXRwdXQiLCJjb252ZXJ0TnVtYmVyc1RvWmVybyIsImdldEFuaW1hdGFibGVOb25lIiwicGFyc2VkIiwidHJhbnNmb3JtZXIiLCJtaXhJbW1lZGlhdGUiLCJnZXRNaXhlciIsIm1peENvbXBsZXgiLCJtaXhBcnJheSIsImJsZW5kVmFsdWUiLCJmcm9tVGhpcyIsIm1peE9iamVjdCIsInRlbXBsYXRlIiwib3JpZ2luU3RhdHMiLCJ0YXJnZXRTdGF0cyIsImNhbkludGVycG9sYXRlIiwidG9Gcm9tRGlmZmVyZW5jZSIsIm1peE51bWJlciIsImRldGVjdE1peGVyRmFjdG9yeSIsImNyZWF0ZU1peGVycyIsImN1c3RvbU1peGVyIiwibWl4ZXJzIiwibWl4ZXJGYWN0b3J5IiwibnVtTWl4ZXJzIiwibWl4ZXIiLCJlYXNpbmdGdW5jdGlvbiIsImlucHV0IiwiaXNDbGFtcCIsImlucHV0TGVuZ3RoIiwicmV2ZXJzZSIsImludGVycG9sYXRvciIsInByb2dyZXNzSW5SYW5nZSIsImZpbGxPZmZzZXQiLCJyZW1haW5pbmciLCJvZmZzZXRQcm9ncmVzcyIsImRlZmF1bHRPZmZzZXQiLCJhcnIiLCJjb252ZXJ0T2Zmc2V0VG9UaW1lcyIsIm8iLCJkZWZhdWx0RWFzaW5nIiwia2V5ZnJhbWVzIiwia2V5ZnJhbWVWYWx1ZXMiLCJlYXNpbmdGdW5jdGlvbnMiLCJkb25lIiwiYWJzb2x1dGVUaW1lcyIsIm1hcFRpbWVUb0tleWZyYW1lIiwiY2FsY3VsYXRlZER1cmF0aW9uIiwidmVsb2NpdHlQZXJTZWNvbmQiLCJmcmFtZUR1cmF0aW9uIiwidmVsb2NpdHlTYW1wbGVEdXJhdGlvbiIsImNhbGNHZW5lcmF0b3JWZWxvY2l0eSIsInJlc29sdmVWYWx1ZSIsInByZXZUIiwic2FmZU1pbiIsIm1pbkR1cmF0aW9uIiwibWF4RHVyYXRpb24iLCJtaW5EYW1waW5nIiwibWF4RGFtcGluZyIsImZpbmRTcHJpbmciLCJib3VuY2UiLCJtYXNzIiwiZW52ZWxvcGUiLCJkZXJpdmF0aXZlIiwiZGFtcGluZ1JhdGlvIiwidW5kYW1wZWRGcmVxMiIsImV4cG9uZW50aWFsRGVjYXkiLCJjYWxjQW5ndWxhckZyZXEiLCJleHAiLCJmIiwiZmFjdG9yIiwiaW5pdGlhbEd1ZXNzIiwidW5kYW1wZWRGcmVxIiwiYXBwcm94aW1hdGVSb290Iiwic3RpZmZuZXNzIiwiZGFtcGluZyIsInJvb3RJdGVyYXRpb25zIiwicmVzdWx0IiwiZHVyYXRpb25LZXlzIiwicGh5c2ljc0tleXMiLCJpc1NwcmluZ1R5cGUiLCJnZXRTcHJpbmdPcHRpb25zIiwic3ByaW5nT3B0aW9ucyIsImlzUmVzb2x2ZWRGcm9tRHVyYXRpb24iLCJkZXJpdmVkIiwicmVzdERlbHRhIiwicmVzdFNwZWVkIiwiaW5pdGlhbFZlbG9jaXR5IiwiaW5pdGlhbERlbHRhIiwidW5kYW1wZWRBbmd1bGFyRnJlcSIsImlzR3JhbnVsYXJTY2FsZSIsInJlc29sdmVTcHJpbmciLCJhbmd1bGFyRnJlcSIsImNvcyIsImRhbXBlZEFuZ3VsYXJGcmVxIiwiZnJlcUZvclQiLCJzaW5oIiwiY29zaCIsImlzQmVsb3dWZWxvY2l0eVRocmVzaG9sZCIsImlzQmVsb3dEaXNwbGFjZW1lbnRUaHJlc2hvbGQiLCJpbmVydGlhIiwicG93ZXIiLCJ0aW1lQ29uc3RhbnQiLCJib3VuY2VEYW1waW5nIiwiYm91bmNlU3RpZmZuZXNzIiwibW9kaWZ5VGFyZ2V0IiwiaXNPdXRPZkJvdW5kcyIsIm5lYXJlc3RCb3VuZGFyeSIsImFtcGxpdHVkZSIsImlkZWFsIiwiY2FsY0RlbHRhIiwiY2FsY0xhdGVzdCIsImFwcGx5RnJpY3Rpb24iLCJ0aW1lUmVhY2hlZEJvdW5kYXJ5Iiwic3ByaW5nJDEiLCJjaGVja0NhdGNoQm91bmRhcnkiLCJoYXNVcGRhdGVkRnJhbWUiLCJmcmFtZWxvb3BEcml2ZXIiLCJwYXNzVGltZXN0YW1wIiwic3RvcCIsIm1heEdlbmVyYXRvckR1cmF0aW9uIiwiY2FsY0dlbmVyYXRvckR1cmF0aW9uIiwiZ2VuZXJhdG9yIiwidGltZVN0ZXAiLCJJbmZpbml0eSIsInR5cGVzIiwiZGVjYXkiLCJ0d2VlbiIsImF1dG9wbGF5IiwiZHJpdmVyIiwia2V5ZnJhbWVzJDEiLCJyZXBlYXREZWxheSIsIm9uUGxheSIsIm9uU3RvcCIsIm9uQ29tcGxldGUiLCJvblVwZGF0ZSIsInNwZWVkIiwiaGFzU3RvcHBlZCIsInJlc29sdmVGaW5pc2hlZFByb21pc2UiLCJjdXJyZW50RmluaXNoZWRQcm9taXNlIiwidXBkYXRlRmluaXNoZWRQcm9taXNlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJhbmltYXRpb25Ecml2ZXIiLCJnZW5lcmF0b3JGYWN0b3J5IiwibWFwTnVtYmVyc1RvS2V5ZnJhbWVzIiwibWlycm9yZWRHZW5lcmF0b3IiLCJwbGF5U3RhdGUiLCJob2xkVGltZSIsInN0YXJ0VGltZSIsImNhbmNlbFRpbWUiLCJyZXNvbHZlZER1cmF0aW9uIiwidG90YWxEdXJhdGlvbiIsImN1cnJlbnRUaW1lIiwidGljayIsInRpbWVXaXRob3V0RGVsYXkiLCJpc0luRGVsYXlQaGFzZSIsImVsYXBzZWQiLCJmcmFtZUdlbmVyYXRvciIsImN1cnJlbnRJdGVyYXRpb24iLCJmbG9vciIsIml0ZXJhdGlvblByb2dyZXNzIiwiaXNPZGRJdGVyYXRpb24iLCJpc0FuaW1hdGlvbkZpbmlzaGVkIiwiZmluaXNoIiwic3RvcEFuaW1hdGlvbkRyaXZlciIsInBsYXkiLCJjb250cm9scyIsInRoZW4iLCJyZWplY3QiLCJ0aW1lIiwibmV3VGltZSIsIm5ld1NwZWVkIiwicGF1c2UiLCJjb21wbGV0ZSIsInNhbXBsZSIsIm1lbW8iLCJzdXBwb3J0c1dhYXBpIiwiRWxlbWVudCIsImFjY2VsZXJhdGVkVmFsdWVzIiwic2FtcGxlRGVsdGEiLCJtYXhEdXJhdGlvbjIiLCJyZXF1aXJlc1ByZWdlbmVyYXRlZEtleWZyYW1lcyIsImNyZWF0ZUFjY2VsZXJhdGVkQW5pbWF0aW9uIiwiY2FuQWNjZWxlcmF0ZUFuaW1hdGlvbiIsInBlbmRpbmdDYW5jZWwiLCJzYW1wbGVBbmltYXRpb24iLCJwcmVnZW5lcmF0ZWRLZXlmcmFtZXMiLCJvd25lciIsImNhbmNlbEFuaW1hdGlvbiIsInNhZmVDYW5jZWwiLCJvbmZpbmlzaCIsImF0dGFjaFRpbWVsaW5lIiwidGltZWxpbmUiLCJwbGF5YmFja1JhdGUiLCJzZXRXaXRoVmVsb2NpdHkiLCJjcmVhdGVJbnN0YW50QW5pbWF0aW9uIiwic2V0VmFsdWUiLCJ1bmRlckRhbXBlZFNwcmluZyIsImNyaXRpY2FsbHlEYW1wZWRTcHJpbmciLCJrZXlmcmFtZXNUcmFuc2l0aW9uIiwiZ2V0RGVmYXVsdFRyYW5zaXRpb24iLCJ2YWx1ZUtleSIsImlzQW5pbWF0YWJsZSIsIm1heERlZmF1bHRzIiwiYXBwbHlEZWZhdWx0RmlsdGVyIiwic2xpY2UiLCJudW1iZXIyIiwiZGVmYXVsdFZhbHVlIiwiZnVuY3Rpb25SZWdleCIsImZpbHRlciIsImZ1bmN0aW9ucyIsImRlZmF1bHRWYWx1ZVR5cGVzIiwiYmFja2dyb3VuZENvbG9yIiwib3V0bGluZUNvbG9yIiwic3Ryb2tlIiwiYm9yZGVyQ29sb3IiLCJib3JkZXJUb3BDb2xvciIsImJvcmRlclJpZ2h0Q29sb3IiLCJib3JkZXJCb3R0b21Db2xvciIsImJvcmRlckxlZnRDb2xvciIsIldlYmtpdEZpbHRlciIsImdldERlZmF1bHRWYWx1ZVR5cGUiLCJnZXRBbmltYXRhYmxlTm9uZTIiLCJkZWZhdWx0VmFsdWVUeXBlIiwiaXNaZXJvVmFsdWVTdHJpbmciLCJpc05vbmUiLCJnZXRLZXlmcmFtZXMiLCJpc1RhcmdldEFuaW1hdGFibGUiLCJkZWZhdWx0T3JpZ2luIiwiYW5pbWF0YWJsZVRlbXBsYXRlVmFsdWUiLCJub25lS2V5ZnJhbWVJbmRleGVzIiwiaXNUcmFuc2l0aW9uRGVmaW5lZCIsIndoZW4iLCJfZGVsYXkiLCJkZWxheUNoaWxkcmVuIiwic3RhZ2dlckNoaWxkcmVuIiwic3RhZ2dlckRpcmVjdGlvbiIsImtleXMiLCJnZXRWYWx1ZVRyYW5zaXRpb24iLCJza2lwQW5pbWF0aW9ucyIsImFuaW1hdGVNb3Rpb25WYWx1ZSIsInZhbHVlVHJhbnNpdGlvbiIsIm9yaWdpbktleWZyYW1lIiwidGFyZ2V0S2V5ZnJhbWUiLCJpc09yaWdpbkFuaW1hdGFibGUiLCJpc0hhbmRvZmYiLCJIVE1MRWxlbWVudCIsImFjY2VsZXJhdGVkQW5pbWF0aW9uIiwiaXNXaWxsQ2hhbmdlTW90aW9uVmFsdWUiLCJpc051bWVyaWNhbFN0cmluZyIsImFkZFVuaXF1ZUl0ZW0iLCJpdGVtIiwicmVtb3ZlSXRlbSIsIm1vdmVJdGVtIiwiZnJvbUluZGV4IiwidG9JbmRleCIsInN0YXJ0SW5kZXgiLCJlbmRJbmRleCIsIlN1YnNjcmlwdGlvbk1hbmFnZXIiLCJzdWJzY3JpcHRpb25zIiwibm90aWZ5IiwibnVtU3Vic2NyaXB0aW9ucyIsImdldFNpemUiLCJ3YXJuZWQiLCJ3YXJuT25jZSIsImNvbmRpdGlvbiIsImlzRmxvYXQiLCJjb2xsZWN0TW90aW9uVmFsdWVzIiwidmVyc2lvbiIsInRpbWVEZWx0YSIsImxhc3RVcGRhdGVkIiwiY2FuVHJhY2tWZWxvY2l0eSIsImV2ZW50cyIsInVwZGF0ZUFuZE5vdGlmeSIsInBvc3RSZW5kZXIiLCJzY2hlZHVsZVZlbG9jaXR5Q2hlY2siLCJjaGFuZ2UiLCJ2ZWxvY2l0eUNoYW5nZSIsInJlbmRlclJlcXVlc3QiLCJ2ZWxvY2l0eUNoZWNrIiwiaGFzQW5pbWF0ZWQiLCJvbkNoYW5nZSIsInN1YnNjcmlwdGlvbiIsIm9uIiwidW5zdWJzY3JpYmUiLCJjbGVhckxpc3RlbmVycyIsImV2ZW50TWFuYWdlcnMiLCJhdHRhY2giLCJwYXNzaXZlRWZmZWN0Iiwic3RvcFBhc3NpdmVFZmZlY3QiLCJqdW1wIiwiZ2V0UHJldmlvdXMiLCJzdGFydEFuaW1hdGlvbiIsImFuaW1hdGlvblN0YXJ0IiwiYW5pbWF0aW9uQ29tcGxldGUiLCJjbGVhckFuaW1hdGlvbiIsImFuaW1hdGlvbkNhbmNlbCIsImlzQW5pbWF0aW5nIiwiZGVzdHJveSIsInRlc3RWYWx1ZVR5cGUiLCJhdXRvIiwiZGltZW5zaW9uVmFsdWVUeXBlcyIsImZpbmREaW1lbnNpb25WYWx1ZVR5cGUiLCJ2YWx1ZVR5cGVzIiwiZmluZFZhbHVlVHlwZSIsInNldE1vdGlvblZhbHVlIiwiaGFzVmFsdWUiLCJnZXRWYWx1ZSIsImFkZFZhbHVlIiwic2V0VGFyZ2V0IiwibWFrZVRhcmdldEFuaW1hdGFibGUiLCJzZXRWYXJpYW50cyIsInZhcmlhbnRMYWJlbHMiLCJyZXZlcnNlZExhYmVscyIsInZhcmlhbnQiLCJnZXRWYXJpYW50IiwidmFyaWFudENoaWxkcmVuIiwic2V0VmFsdWVzIiwibmV3VmFsdWVLZXlzIiwibnVtTmV3VmFsdWVzIiwidGFyZ2V0VmFsdWUiLCJyZWFkVmFsdWUiLCJzZXRCYXNlVGFyZ2V0IiwiZ2V0T3JpZ2luRnJvbVRyYW5zaXRpb24iLCJnZXRPcmlnaW4iLCJ0cmFuc2l0aW9uT3JpZ2luIiwic2hvdWxkQmxvY2tBbmltYXRpb24iLCJwcm90ZWN0ZWRLZXlzIiwibmVlZHNBbmltYXRpbmciLCJzaG91bGRCbG9jayIsImhhc0tleWZyYW1lc0NoYW5nZWQiLCJhbmltYXRlVGFyZ2V0IiwidHJhbnNpdGlvbk92ZXJyaWRlIiwid2lsbENoYW5nZSIsImFuaW1hdGlvbnMyIiwiYW5pbWF0aW9uVHlwZVN0YXRlIiwiZ2V0U3RhdGUiLCJIYW5kb2ZmQXBwZWFyQW5pbWF0aW9ucyIsImFwcGVhcklkIiwiY2FuU2tpcCIsInNob3VsZFJlZHVjZU1vdGlvbiIsImFuaW1hdGVWYXJpYW50IiwiZ2V0QW5pbWF0aW9uIiwiZ2V0Q2hpbGRBbmltYXRpb25zIiwiZm9yd2FyZERlbGF5IiwiYW5pbWF0ZUNoaWxkcmVuIiwiZmlyc3QiLCJsYXN0IiwibWF4U3RhZ2dlckR1cmF0aW9uIiwiZ2VuZXJhdGVTdGFnZ2VyRHVyYXRpb24iLCJzb3J0Iiwic29ydEJ5VHJlZU9yZGVyIiwic29ydE5vZGVQb3NpdGlvbiIsInJlc29sdmVkRGVmaW5pdGlvbiIsInJldmVyc2VQcmlvcml0eU9yZGVyIiwibnVtQW5pbWF0aW9uVHlwZXMiLCJhbmltYXRlTGlzdCIsImNyZWF0ZUFuaW1hdGlvblN0YXRlIiwiY3JlYXRlU3RhdGUiLCJpc0luaXRpYWxSZW5kZXIiLCJidWlsZFJlc29sdmVkVHlwZVZhbHVlcyIsInNldEFuaW1hdGVGdW5jdGlvbiIsIm1ha2VBbmltYXRvciIsImNoYW5nZWRBY3RpdmVUeXBlIiwiZ2V0VmFyaWFudENvbnRleHQiLCJyZW1vdmVkS2V5cyIsImVuY291bnRlcmVkS2V5cyIsInJlbW92ZWRWYXJpYW50SW5kZXgiLCJ0eXBlU3RhdGUiLCJwcm9wSXNWYXJpYW50IiwiYWN0aXZlRGVsdGEiLCJpc0luaGVyaXRlZCIsIm1hbnVhbGx5QW5pbWF0ZU9uTW91bnQiLCJwcmV2UHJvcCIsInZhcmlhbnREaWRDaGFuZ2UiLCJjaGVja1ZhcmlhbnRzRGlkQ2hhbmdlIiwic2hvdWxkQW5pbWF0ZVR5cGUiLCJoYW5kbGVkUmVtb3ZlZFZhbHVlcyIsImRlZmluaXRpb25MaXN0IiwicmVzb2x2ZWRWYWx1ZXMiLCJwcmV2UmVzb2x2ZWRWYWx1ZXMiLCJhbGxLZXlzIiwibWFya1RvQW5pbWF0ZSIsInZhbHVlSGFzQ2hhbmdlZCIsImZhbGxiYWNrQW5pbWF0aW9uIiwiZmFsbGJhY2tUYXJnZXQiLCJnZXRCYXNlVGFyZ2V0Iiwic2hvdWxkQW5pbWF0ZSIsIl9hMiIsImNyZWF0ZVR5cGVTdGF0ZSIsIndoaWxlSW5WaWV3Iiwid2hpbGVEcmFnIiwid2hpbGVGb2N1cyIsIkFuaW1hdGlvbkZlYXR1cmUiLCJ1cGRhdGVBbmltYXRpb25Db250cm9sc1N1YnNjcmlwdGlvbiIsInN1YnNjcmliZSIsInByZXZBbmltYXRlIiwiRXhpdEFuaW1hdGlvbkZlYXR1cmUiLCJpc1ByZXNlbnQiLCJpc1ByZXNlbnQyIiwib25FeGl0Q29tcGxldGUiLCJwcmV2SXNQcmVzZW50IiwicHJldlByZXNlbmNlQ29udGV4dCIsImV4aXRBbmltYXRpb24iLCJyZWdpc3RlciIsInhEZWx0YSIsInlEZWx0YSIsIlBhblNlc3Npb24iLCJoYW5kbGVycyIsImNvbnRleHRXaW5kb3ciLCJkcmFnU25hcFRvT3JpZ2luIiwibGFzdE1vdmVFdmVudCIsImxhc3RNb3ZlRXZlbnRJbmZvIiwidXBkYXRlUG9pbnQiLCJpbmZvMiIsImdldFBhbkluZm8iLCJoaXN0b3J5IiwiaXNQYW5TdGFydGVkIiwiaXNEaXN0YW5jZVBhc3RUaHJlc2hvbGQiLCJwb2ludDMiLCJ0aW1lc3RhbXAyIiwib25TdGFydCIsIm9uTW92ZSIsImhhbmRsZVBvaW50ZXJNb3ZlIiwiZXZlbnQyIiwidHJhbnNmb3JtUG9pbnQiLCJoYW5kbGVQb2ludGVyVXAiLCJlbmQiLCJvbkVuZCIsIm9uU2Vzc2lvbkVuZCIsInJlc3VtZUFuaW1hdGlvbiIsInBhbkluZm8iLCJpbml0aWFsSW5mbyIsInBvaW50MiIsIm9uU2Vzc2lvblN0YXJ0IiwicmVtb3ZlTGlzdGVuZXJzIiwidXBkYXRlSGFuZGxlcnMiLCJzdWJ0cmFjdFBvaW50IiwibGFzdERldmljZVBvaW50Iiwic3RhcnREZXZpY2VQb2ludCIsImdldFZlbG9jaXR5MiIsInRpbWVzdGFtcGVkUG9pbnQiLCJsYXN0UG9pbnQiLCJheGlzIiwiaXNOZWFyIiwibWF4RGlzdGFuY2UiLCJjYWxjQXhpc0RlbHRhIiwib3JpZ2luUG9pbnQiLCJ0cmFuc2xhdGUiLCJjYWxjQm94RGVsdGEiLCJjYWxjUmVsYXRpdmVBeGlzIiwicmVsYXRpdmUiLCJjYWxjUmVsYXRpdmVCb3giLCJjYWxjUmVsYXRpdmVBeGlzUG9zaXRpb24iLCJjYWxjUmVsYXRpdmVQb3NpdGlvbiIsImFwcGx5Q29uc3RyYWludHMiLCJlbGFzdGljIiwiY2FsY1JlbGF0aXZlQXhpc0NvbnN0cmFpbnRzIiwiY2FsY1JlbGF0aXZlQ29uc3RyYWludHMiLCJsYXlvdXRCb3giLCJjYWxjVmlld3BvcnRBeGlzQ29uc3RyYWludHMiLCJsYXlvdXRBeGlzIiwiY29uc3RyYWludHNBeGlzIiwiY2FsY1ZpZXdwb3J0Q29uc3RyYWludHMiLCJjb25zdHJhaW50c0JveCIsImNhbGNPcmlnaW4yIiwic291cmNlTGVuZ3RoIiwidGFyZ2V0TGVuZ3RoIiwicmViYXNlQXhpc0NvbnN0cmFpbnRzIiwiY29uc3RyYWludHMiLCJyZWxhdGl2ZUNvbnN0cmFpbnRzIiwiZGVmYXVsdEVsYXN0aWMiLCJyZXNvbHZlRHJhZ0VsYXN0aWMiLCJkcmFnRWxhc3RpYyIsInJlc29sdmVBeGlzRWxhc3RpYyIsIm1pbkxhYmVsIiwibWF4TGFiZWwiLCJyZXNvbHZlUG9pbnRFbGFzdGljIiwibGFiZWwiLCJjcmVhdGVBeGlzRGVsdGEiLCJjcmVhdGVEZWx0YSIsImNyZWF0ZUF4aXMiLCJlYWNoQXhpcyIsImNvbnZlcnRCb3VuZGluZ0JveFRvQm94IiwiY29udmVydEJveFRvQm91bmRpbmdCb3giLCJ0cmFuc2Zvcm1Cb3hQb2ludHMiLCJ0cmFuc2Zvcm1Qb2ludDIiLCJ0b3BMZWZ0IiwiYm90dG9tUmlnaHQiLCJpc0lkZW50aXR5U2NhbGUiLCJzY2FsZTIiLCJoYXNTY2FsZSIsImhhc1RyYW5zZm9ybSIsImhhczJEVHJhbnNsYXRlIiwiaXMyRFRyYW5zbGF0ZSIsInNjYWxlUG9pbnQiLCJkaXN0YW5jZUZyb21PcmlnaW4iLCJzY2FsZWQiLCJhcHBseVBvaW50RGVsdGEiLCJib3hTY2FsZSIsImFwcGx5QXhpc0RlbHRhIiwiYXBwbHlCb3hEZWx0YSIsImJveCIsImFwcGx5VHJlZURlbHRhcyIsInRyZWVTY2FsZSIsInRyZWVQYXRoIiwiaXNTaGFyZWRUcmFuc2l0aW9uIiwidHJlZUxlbmd0aCIsInByb2plY3Rpb25EZWx0YSIsImRpc3BsYXkiLCJsYXlvdXRTY3JvbGwiLCJ0cmFuc2Zvcm1Cb3giLCJzbmFwVG9EZWZhdWx0IiwiTnVtYmVyIiwiaXNJbnRlZ2VyIiwidHJhbnNsYXRlQXhpcyIsImRpc3RhbmNlMiIsInRyYW5zZm9ybUF4aXMiLCJ0cmFuc2Zvcm1zIiwic2NhbGVLZXkiLCJvcmlnaW5LZXkiLCJheGlzT3JpZ2luIiwieEtleXMiLCJ5S2V5cyIsIm1lYXN1cmVWaWV3cG9ydEJveCIsIm1lYXN1cmVQYWdlQm94Iiwicm9vdFByb2plY3Rpb25Ob2RlMiIsInZpZXdwb3J0Qm94Iiwic2Nyb2xsMiIsImdldENvbnRleHRXaW5kb3ciLCJvd25lckRvY3VtZW50IiwiZGVmYXVsdFZpZXciLCJlbGVtZW50RHJhZ0NvbnRyb2xzIiwiVmlzdWFsRWxlbWVudERyYWdDb250cm9scyIsIm9wZW5HbG9iYWxMb2NrIiwiaXNEcmFnZ2luZyIsImN1cnJlbnREaXJlY3Rpb24iLCJoYXNNdXRhdGVkQ29uc3RyYWludHMiLCJvcmlnaW5FdmVudCIsInNuYXBUb0N1cnNvciIsImRyYWdTbmFwVG9PcmlnaW4yIiwicGF1c2VBbmltYXRpb24iLCJzdG9wQW5pbWF0aW9uIiwiZHJhZ1Byb3BhZ2F0aW9uIiwib25EcmFnU3RhcnQiLCJyZXNvbHZlQ29uc3RyYWludHMiLCJpc0FuaW1hdGlvbkJsb2NrZWQiLCJnZXRBeGlzTW90aW9uVmFsdWUiLCJtZWFzdXJlZEF4aXMiLCJkcmFnRGlyZWN0aW9uTG9jayIsIm9uRGlyZWN0aW9uTG9jayIsIm9uRHJhZyIsImdldEN1cnJlbnREaXJlY3Rpb24iLCJ1cGRhdGVBeGlzIiwiZ2V0QW5pbWF0aW9uU3RhdGUiLCJwYW5TZXNzaW9uIiwiZ2V0VHJhbnNmb3JtUGFnZVBvaW50Iiwib25EcmFnRW5kIiwiX3BvaW50Iiwic2hvdWxkRHJhZyIsImF4aXNWYWx1ZSIsImRyYWdDb25zdHJhaW50cyIsIm1lYXN1cmUiLCJwcmV2Q29uc3RyYWludHMiLCJyZXNvbHZlUmVmQ29uc3RyYWludHMiLCJvbk1lYXN1cmVEcmFnQ29uc3RyYWludHMiLCJjb25zdHJhaW50c0VsZW1lbnQiLCJtZWFzdXJlZENvbnN0cmFpbnRzIiwidXNlckNvbnN0cmFpbnRzIiwiZHJhZ01vbWVudHVtIiwiZHJhZ1RyYW5zaXRpb24iLCJvbkRyYWdUcmFuc2l0aW9uRW5kIiwibW9tZW50dW1BbmltYXRpb25zIiwiaW5lcnRpYTIiLCJzdGFydEF4aXNWYWx1ZUFuaW1hdGlvbiIsImRyYWdLZXkiLCJleHRlcm5hbE1vdGlvblZhbHVlIiwic2NhbGVQb3NpdGlvbldpdGhpbkNvbnN0cmFpbnRzIiwiYm94UHJvZ3Jlc3MiLCJ1cGRhdGVTY3JvbGwiLCJ1cGRhdGVMYXlvdXQiLCJhZGRMaXN0ZW5lcnMiLCJzdG9wUG9pbnRlckxpc3RlbmVyIiwibWVhc3VyZURyYWdDb25zdHJhaW50cyIsInN0b3BNZWFzdXJlTGF5b3V0TGlzdGVuZXIiLCJzdG9wUmVzaXplTGlzdGVuZXIiLCJzdG9wTGF5b3V0VXBkYXRlTGlzdGVuZXIiLCJoYXNMYXlvdXRDaGFuZ2VkIiwibW90aW9uVmFsdWUyIiwibG9ja1RocmVzaG9sZCIsIkRyYWdHZXN0dXJlIiwicmVtb3ZlR3JvdXBDb250cm9scyIsImRyYWdDb250cm9scyIsImFzeW5jSGFuZGxlciIsIlBhbkdlc3R1cmUiLCJyZW1vdmVQb2ludGVyRG93bkxpc3RlbmVyIiwib25Qb2ludGVyRG93biIsInBvaW50ZXJEb3duRXZlbnQiLCJzZXNzaW9uIiwiY3JlYXRlUGFuSGFuZGxlcnMiLCJvblBhblNlc3Npb25TdGFydCIsIm9uUGFuU3RhcnQiLCJvblBhbiIsIm9uUGFuRW5kIiwiaW1wb3J0X3JlYWN0MTciLCJpZDQiLCJ1c2VJZCIsInNhZmVUb1JlbW92ZSIsImdsb2JhbFByb2plY3Rpb25TdGF0ZSIsImhhc0FuaW1hdGVkU2luY2VSZXNpemUiLCJoYXNFdmVyVXBkYXRlZCIsInBpeGVsc1RvUGVyY2VudCIsInBpeGVscyIsImNvcnJlY3RCb3JkZXJSYWRpdXMiLCJjb3JyZWN0IiwiY29ycmVjdEJveFNoYWRvdyIsIm9yaWdpbmFsIiwic2hhZG93IiwieFNjYWxlIiwieVNjYWxlIiwiYXZlcmFnZVNjYWxlIiwiaW1wb3J0X3JlYWN0MTgiLCJNZWFzdXJlTGF5b3V0V2l0aENvbnRleHQiLCJjb21wb25lbnREaWRNb3VudCIsImxheW91dEdyb3VwIiwic3dpdGNoTGF5b3V0R3JvdXAiLCJkZWZhdWx0U2NhbGVDb3JyZWN0b3JzIiwiZ3JvdXAiLCJkaWRVcGRhdGUiLCJzZXRPcHRpb25zIiwiZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUiLCJsYXlvdXREZXBlbmRlbmN5Iiwid2lsbFVwZGF0ZSIsInByb21vdGUiLCJyZWxlZ2F0ZSIsInN0YWNrIiwiZ2V0U3RhY2siLCJtZW1iZXJzIiwiY29tcG9uZW50RGlkVXBkYXRlIiwicXVldWVNaWNyb3Rhc2siLCJjdXJyZW50QW5pbWF0aW9uIiwiaXNMZWFkIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJwcm9tb3RlQ29udGV4dCIsInNjaGVkdWxlQ2hlY2tBZnRlclVubW91bnQiLCJkZXJlZ2lzdGVyIiwiTWVhc3VyZUxheW91dCIsImFwcGx5VG8iLCJib3hTaGFkb3ciLCJib3JkZXJzIiwibnVtQm9yZGVycyIsImFzTnVtYmVyIiwiaXNQeCIsIm1peFZhbHVlcyIsImZvbGxvdyIsImxlYWQiLCJzaG91bGRDcm9zc2ZhZGVPcGFjaXR5IiwiaXNPbmx5TWVtYmVyIiwiZWFzZUNyb3NzZmFkZUluIiwib3BhY2l0eUV4aXQiLCJlYXNlQ3Jvc3NmYWRlT3V0IiwiYm9yZGVyTGFiZWwiLCJmb2xsb3dSYWRpdXMiLCJnZXRSYWRpdXMiLCJsZWFkUmFkaXVzIiwiY2FuTWl4IiwicmFkaXVzTmFtZSIsImNvbXByZXNzIiwiY29weUF4aXNJbnRvIiwib3JpZ2luQXhpcyIsImNvcHlCb3hJbnRvIiwib3JpZ2luQm94IiwicmVtb3ZlUG9pbnREZWx0YSIsInJlbW92ZUF4aXNEZWx0YSIsInNvdXJjZUF4aXMiLCJyZWxhdGl2ZVByb2dyZXNzIiwicmVtb3ZlQXhpc1RyYW5zZm9ybXMiLCJ4S2V5czIiLCJ5S2V5czIiLCJyZW1vdmVCb3hUcmFuc2Zvcm1zIiwic291cmNlQm94IiwiaXNBeGlzRGVsdGFaZXJvIiwiaXNEZWx0YVplcm8iLCJib3hFcXVhbHMiLCJib3hFcXVhbHNSb3VuZGVkIiwiYXNwZWN0UmF0aW8iLCJOb2RlU3RhY2siLCJzY2hlZHVsZVJlbmRlciIsInByZXZMZWFkIiwiaW5kZXhPZk5vZGUiLCJmaW5kSW5kZXgiLCJtZW1iZXIiLCJwcmVzZXJ2ZUZvbGxvd09wYWNpdHkiLCJzaG93IiwicmVzdW1lRnJvbSIsInByZXNlcnZlT3BhY2l0eSIsInNuYXBzaG90IiwiYW5pbWF0aW9uVmFsdWVzIiwiaXNVcGRhdGluZyIsImlzTGF5b3V0RGlydHkiLCJjcm9zc2ZhZGUiLCJoaWRlIiwiZXhpdEFuaW1hdGlvbkNvbXBsZXRlIiwicmVzdW1pbmdGcm9tIiwicmVtb3ZlTGVhZFNuYXBzaG90IiwiYnVpbGRQcm9qZWN0aW9uVHJhbnNmb3JtIiwibGF0ZXN0VHJhbnNmb3JtIiwieFRyYW5zbGF0ZSIsInlUcmFuc2xhdGUiLCJlbGVtZW50U2NhbGVYIiwiZWxlbWVudFNjYWxlWSIsImNvbXBhcmVCeURlcHRoIiwiZGVwdGgiLCJpc0RpcnR5IiwidGltZW91dCIsImNoZWNrRWxhcHNlZCIsInJlY29yZCIsImRhdGEiLCJNb3Rpb25EZWJ1ZyIsImlzU1ZHRWxlbWVudCIsIlNWR0VsZW1lbnQiLCJhbmltYXRlU2luZ2xlVmFsdWUiLCJtb3Rpb25WYWx1ZSQxIiwidHJhbnNmb3JtQXhlcyIsImhpZGRlblZpc2liaWxpdHkiLCJ2aXNpYmlsaXR5IiwiYW5pbWF0aW9uVGFyZ2V0IiwiaWQyIiwicHJvamVjdGlvbkZyYW1lRGF0YSIsInRvdGFsTm9kZXMiLCJyZXNvbHZlZFRhcmdldERlbHRhcyIsInJlY2FsY3VsYXRlZFByb2plY3Rpb24iLCJjcmVhdGVQcm9qZWN0aW9uTm9kZSIsImF0dGFjaFJlc2l6ZUxpc3RlbmVyIiwiZGVmYXVsdFBhcmVudCIsIm1lYXN1cmVTY3JvbGwiLCJjaGVja0lzU2Nyb2xsUm9vdCIsInJlc2V0VHJhbnNmb3JtIiwiUHJvamVjdGlvbk5vZGUiLCJhbmltYXRpb25JZCIsImlzVHJlZUFuaW1hdGluZyIsImlzUHJvamVjdGlvbkRpcnR5IiwiaXNTaGFyZWRQcm9qZWN0aW9uRGlydHkiLCJpc1RyYW5zZm9ybURpcnR5IiwidXBkYXRlTWFudWFsbHlCbG9ja2VkIiwidXBkYXRlQmxvY2tlZEJ5UmVzaXplIiwiaXNTVkciLCJuZWVkc1Jlc2V0Iiwic2hvdWxkUmVzZXRUcmFuc2Zvcm0iLCJldmVudEhhbmRsZXJzIiwiaGFzVHJlZUFuaW1hdGVkIiwidXBkYXRlU2NoZWR1bGVkIiwicHJvamVjdGlvblVwZGF0ZVNjaGVkdWxlZCIsImNoZWNrVXBkYXRlRmFpbGVkIiwiY2xlYXJBbGxTbmFwc2hvdHMiLCJ1cGRhdGVQcm9qZWN0aW9uIiwibm9kZXMiLCJwcm9wYWdhdGVEaXJ0eU5vZGVzIiwicmVzb2x2ZVRhcmdldERlbHRhIiwiY2FsY1Byb2plY3Rpb24iLCJjbGVhbkRpcnR5Tm9kZXMiLCJoYXNQcm9qZWN0ZWQiLCJpc1Zpc2libGUiLCJhbmltYXRpb25Qcm9ncmVzcyIsInNoYXJlZE5vZGVzIiwicGF0aCIsIm5vdGlmeUxpc3RlbmVycyIsImFyZ3MiLCJzdWJzY3JpcHRpb25NYW5hZ2VyIiwiaGFzTGlzdGVuZXJzIiwiY2FuY2VsRGVsYXkiLCJyZXNpemVVbmJsb2NrVXBkYXRlIiwiZmluaXNoQW5pbWF0aW9uIiwicmVnaXN0ZXJTaGFyZWROb2RlIiwiaGFzUmVsYXRpdmVUYXJnZXRDaGFuZ2VkIiwibmV3TGF5b3V0IiwiaXNUcmVlQW5pbWF0aW9uQmxvY2tlZCIsInJlbGF0aXZlVGFyZ2V0IiwibGF5b3V0VHJhbnNpdGlvbiIsImRlZmF1bHRMYXlvdXRUcmFuc2l0aW9uIiwib25MYXlvdXRBbmltYXRpb25TdGFydCIsIm9uTGF5b3V0QW5pbWF0aW9uQ29tcGxldGUiLCJ0YXJnZXRDaGFuZ2VkIiwidGFyZ2V0TGF5b3V0IiwiaGFzT25seVJlbGF0aXZlVGFyZ2V0Q2hhbmdlZCIsImxheW91dFJvb3QiLCJzZXRBbmltYXRpb25PcmlnaW4iLCJhbmltYXRpb25PcHRpb25zIiwiYmxvY2tVcGRhdGUiLCJ1bmJsb2NrVXBkYXRlIiwiaXNVcGRhdGVCbG9ja2VkIiwic3RhcnRVcGRhdGUiLCJyZXNldFJvdGF0aW9uIiwiZ2V0VHJhbnNmb3JtVGVtcGxhdGUiLCJzaG91bGROb3RpZnlMaXN0ZW5lcnMiLCJwcmV2VHJhbnNmb3JtVGVtcGxhdGVWYWx1ZSIsInVwZGF0ZVNuYXBzaG90IiwidXBkYXRlV2FzQmxvY2tlZCIsImNsZWFyTWVhc3VyZW1lbnRzIiwiY2xlYXJJc0xheW91dERpcnR5IiwicmVzZXRUcmFuc2Zvcm1TdHlsZSIsIm5vdGlmeUxheW91dFVwZGF0ZSIsInByZVJlbmRlciIsImNsZWFyU25hcHNob3QiLCJyZW1vdmVMZWFkU25hcHNob3RzIiwic2NoZWR1bGVVcGRhdGVQcm9qZWN0aW9uIiwiYWx3YXlzTWVhc3VyZUxheW91dCIsInByZXZMYXlvdXQiLCJsYXlvdXRDb3JyZWN0ZWQiLCJwaGFzZSIsIm5lZWRzTWVhc3VyZW1lbnQiLCJpc1Jvb3QiLCJpc1Jlc2V0UmVxdWVzdGVkIiwiaGFzUHJvamVjdGlvbiIsInRyYW5zZm9ybVRlbXBsYXRlVmFsdWUiLCJ0cmFuc2Zvcm1UZW1wbGF0ZUhhc0NoYW5nZWQiLCJyZW1vdmVUcmFuc2Zvcm0iLCJwYWdlQm94IiwicmVtb3ZlRWxlbWVudFNjcm9sbCIsInJvdW5kQm94IiwibWVhc3VyZWRCb3giLCJib3hXaXRob3V0U2Nyb2xsIiwicm9vdFNjcm9sbCIsImFwcGx5VHJhbnNmb3JtIiwidHJhbnNmb3JtT25seSIsIndpdGhUcmFuc2Zvcm1zIiwiYm94V2l0aG91dFRyYW5zZm9ybSIsIm5vZGVCb3giLCJzZXRUYXJnZXREZWx0YSIsInRhcmdldERlbHRhIiwiZm9yY2VSZWxhdGl2ZVBhcmVudFRvUmVzb2x2ZVRhcmdldCIsInJlbGF0aXZlUGFyZW50IiwicmVzb2x2ZWRSZWxhdGl2ZVRhcmdldEF0IiwiZm9yY2VSZWNhbGN1bGF0aW9uIiwiZ2V0TGVhZCIsImlzU2hhcmVkIiwiYXR0ZW1wdFRvUmVzb2x2ZVJlbGF0aXZlVGFyZ2V0IiwiZ2V0Q2xvc2VzdFByb2plY3RpbmdQYXJlbnQiLCJyZWxhdGl2ZVRhcmdldE9yaWdpbiIsInRhcmdldFdpdGhUcmFuc2Zvcm1zIiwiaXNQcm9qZWN0aW5nIiwicGVuZGluZ0FuaW1hdGlvbiIsInByZXZUcmVlU2NhbGVYIiwicHJldlRyZWVTY2FsZVkiLCJwcm9qZWN0aW9uVHJhbnNmb3JtIiwicHJvamVjdGlvbkRlbHRhV2l0aFRyYW5zZm9ybSIsInByZXZQcm9qZWN0aW9uVHJhbnNmb3JtIiwibm90aWZ5QWxsMiIsInNuYXBzaG90TGF0ZXN0VmFsdWVzIiwibWl4ZWRWYWx1ZXMiLCJyZWxhdGl2ZUxheW91dCIsInNuYXBzaG90U291cmNlIiwibGF5b3V0U291cmNlIiwiaXNTaGFyZWRMYXlvdXRBbmltYXRpb24iLCJoYXNPcGFjaXR5Q3Jvc3NmYWRlIiwicHJldlJlbGF0aXZlVGFyZ2V0IiwibWl4VGFyZ2V0RGVsdGEiLCJtaXhBeGlzRGVsdGEiLCJtaXhCb3giLCJjb21wbGV0ZUFuaW1hdGlvbiIsImFwcGx5VHJhbnNmb3Jtc1RvVGFyZ2V0Iiwic2hvdWxkQW5pbWF0ZVBvc2l0aW9uT25seSIsImFuaW1hdGlvblR5cGUiLCJ4TGVuZ3RoIiwieUxlbmd0aCIsImluaXRpYWxQcm9tb3Rpb25Db25maWciLCJzaG91bGRQcmVzZXJ2ZUZvbGxvd09wYWNpdHkiLCJnZXRQcmV2TGVhZCIsImhhc1JvdGF0ZSIsInJlc2V0VmFsdWVzIiwic2V0U3RhdGljVmFsdWUiLCJzdHlsZXMiLCJwb2ludGVyRXZlbnRzIiwiZW1wdHlTdHlsZXMiLCJ2YWx1ZXNUb1JlbmRlciIsImNvcnJlY3RlZCIsIm51bSIsInJlc2V0VHJlZSIsIm1lYXN1cmVkTGF5b3V0IiwiYXhpc1NuYXBzaG90IiwibGF5b3V0RGVsdGEiLCJ2aXN1YWxEZWx0YSIsInBhcmVudFNuYXBzaG90IiwicGFyZW50TGF5b3V0IiwicmVsYXRpdmVTbmFwc2hvdCIsIm9uQmVmb3JlTGF5b3V0TWVhc3VyZSIsIm1peEF4aXMiLCJ1c2VyQWdlbnRDb250YWlucyIsInN0cmluZyIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsInJvdW5kUG9pbnQiLCJyb3VuZEF4aXMiLCJEb2N1bWVudFByb2plY3Rpb25Ob2RlIiwibm90aWZ5MiIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbExlZnQiLCJib2R5Iiwic2Nyb2xsVG9wIiwicm9vdFByb2plY3Rpb25Ob2RlIiwiSFRNTFByb2plY3Rpb25Ob2RlIiwiZG9jdW1lbnROb2RlIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsInBvc2l0aW9uIiwic3BsaXRDU1NWYXJpYWJsZVJlZ2V4IiwicGFyc2VDU1NWYXJpYWJsZSIsImV4ZWMiLCJmYWxsYmFjayIsIm1heERlcHRoIiwiZ2V0VmFyaWFibGVWYWx1ZSIsImdldFByb3BlcnR5VmFsdWUiLCJ0cmltbWVkIiwicmVzb2x2ZUNTU1ZhcmlhYmxlcyIsInBvc2l0aW9uYWxLZXlzIiwiaXNQb3NpdGlvbmFsS2V5IiwiaGFzUG9zaXRpb25hbEtleSIsImlzTnVtT3JQeFR5cGUiLCJnZXRQb3NGcm9tTWF0cml4IiwibWF0cml4IiwicG9zIiwiZ2V0VHJhbnNsYXRlRnJvbU1hdHJpeCIsInBvczIiLCJwb3MzIiwiX2Jib3giLCJtYXRyaXgzZCIsInRyYW5zZm9ybUtleXMiLCJub25UcmFuc2xhdGlvbmFsVHJhbnNmb3JtS2V5cyIsInJlbW92ZU5vblRyYW5zbGF0aW9uYWxUcmFuc2Zvcm0iLCJyZW1vdmVkVHJhbnNmb3JtcyIsInBvc2l0aW9uYWxWYWx1ZXMiLCJjb252ZXJ0Q2hhbmdlZFZhbHVlVHlwZXMiLCJjaGFuZ2VkS2V5cyIsIm9yaWdpbkJib3giLCJlbGVtZW50Q29tcHV0ZWRTdHlsZSIsInRhcmdldEJib3giLCJjaGVja0FuZENvbnZlcnRDaGFuZ2VkVmFsdWVUeXBlcyIsInRhcmdldFBvc2l0aW9uYWxLZXlzIiwicmVtb3ZlZFRyYW5zZm9ybVZhbHVlcyIsImhhc0F0dGVtcHRlZFRvUmVtb3ZlVHJhbnNmb3JtVmFsdWVzIiwiY2hhbmdlZFZhbHVlVHlwZUtleXMiLCJmcm9tVHlwZSIsInRvVHlwZSIsIm51bUtleWZyYW1lcyIsInNjcm9sbFkiLCJwYWdlWU9mZnNldCIsImNvbnZlcnRlZFRhcmdldCIsInNjcm9sbFRvIiwidW5pdENvbnZlcnNpb24iLCJwYXJzZURvbVZhcmlhbnQiLCJwcmVmZXJzUmVkdWNlZE1vdGlvbiIsImhhc1JlZHVjZWRNb3Rpb25MaXN0ZW5lciIsImluaXRQcmVmZXJzUmVkdWNlZE1vdGlvbiIsIm1hdGNoTWVkaWEiLCJtb3Rpb25NZWRpYVF1ZXJ5Iiwic2V0UmVkdWNlZE1vdGlvblByZWZlcmVuY2VzIiwiYWRkTGlzdGVuZXIiLCJ1cGRhdGVNb3Rpb25WYWx1ZXNGcm9tUHJvcHMiLCJuZXh0VmFsdWUiLCJwcmV2VmFsdWUiLCJleGlzdGluZ1ZhbHVlIiwibGF0ZXN0VmFsdWUiLCJnZXRTdGF0aWNWYWx1ZSIsInJlbW92ZVZhbHVlIiwiZmVhdHVyZU5hbWVzIiwibnVtRmVhdHVyZXMiLCJwcm9wRXZlbnRIYW5kbGVycyIsIm51bVZhcmlhbnRQcm9wcyIsInZhbHVlU3Vic2NyaXB0aW9ucyIsInByZXZNb3Rpb25WYWx1ZXMiLCJwcm9wRXZlbnRTdWJzY3JpcHRpb25zIiwibm90aWZ5VXBkYXRlIiwidHJpZ2dlckJ1aWxkIiwicmVuZGVySW5zdGFuY2UiLCJiYXNlVGFyZ2V0IiwiaW5pdGlhbFZhbHVlcyIsImluaXRpYWxNb3Rpb25WYWx1ZXMiLCJfcHJvcHMiLCJfcHJldlByb3BzIiwicmVtb3ZlRnJvbVZhcmlhbnRUcmVlIiwiYWRkVmFyaWFudENoaWxkIiwiYmluZFRvTW90aW9uVmFsdWUiLCJ2YWx1ZUlzVHJhbnNmb3JtIiwicmVtb3ZlT25DaGFuZ2UiLCJyZW1vdmVPblJlbmRlclJlcXVlc3QiLCJvdGhlciIsInNvcnRJbnN0YW5jZU5vZGVQb3NpdGlvbiIsInJlbmRlcmVkUHJvcHMiLCJQcm9qZWN0aW9uTm9kZUNvbnN0cnVjdG9yIiwic3RyaWN0TWVzc2FnZSIsImlnbm9yZVN0cmljdCIsIkZlYXR1cmVDb25zdHJ1Y3RvciIsIk1lYXN1cmVMYXlvdXRDb21wb25lbnQiLCJmZWF0dXJlIiwiYnVpbGQiLCJtZWFzdXJlSW5zdGFuY2VWaWV3cG9ydEJveCIsImNhbk11dGF0ZSIsIm1ha2VUYXJnZXRBbmltYXRhYmxlRnJvbUluc3RhbmNlIiwibGlzdGVuZXIiLCJoYW5kbGVDaGlsZE1vdGlvblZhbHVlIiwiZ2V0Q2xvc2VzdFZhcmlhbnROb2RlIiwic3RhcnRBdFBhcmVudCIsImNvbnRleHQyIiwiY2xvc2VzdFZhcmlhbnROb2RlIiwicmVtb3ZlVmFsdWVGcm9tUmVuZGVyU3RhdGUiLCJnZXRCYXNlVGFyZ2V0RnJvbVByb3BzIiwicmVhZFZhbHVlRnJvbUluc3RhbmNlIiwidmFsdWVGcm9tSW5pdGlhbCIsIkRPTVZpc3VhbEVsZW1lbnQiLCJjb21wYXJlRG9jdW1lbnRQb3NpdGlvbiIsImdldENvbXB1dGVkU3R5bGUyIiwiSFRNTFZpc3VhbEVsZW1lbnQiLCJkZWZhdWx0VHlwZSIsImNvbXB1dGVkU3R5bGUiLCJjaGlsZFN1YnNjcmlwdGlvbiIsInRleHRDb250ZW50IiwiU1ZHVmlzdWFsRWxlbWVudCIsImdldEF0dHJpYnV0ZSIsImNyZWF0ZURvbVZpc3VhbEVsZW1lbnQiLCJpbXBvcnRfcmVhY3QxOSIsInVzZUlzTW91bnRlZCIsImltcG9ydF9yZWFjdDIwIiwiZm9yY2VkUmVuZGVyQ291bnQiLCJzZXRGb3JjZWRSZW5kZXJDb3VudCIsInVzZVN0YXRlIiwiZm9yY2VSZW5kZXIiLCJkZWZlcnJlZEZvcmNlUmVuZGVyIiwiUmVhY3QyIiwiaW1wb3J0X3JlYWN0MjEiLCJQb3BDaGlsZE1lYXN1cmUiLCJjaGlsZFJlZiIsInNpemVSZWYiLCJvZmZzZXRIZWlnaHQiLCJvZmZzZXRXaWR0aCIsIm9mZnNldFRvcCIsIm9mZnNldExlZnQiLCJQb3BDaGlsZCIsImRhdGFzZXQiLCJtb3Rpb25Qb3BJZCIsImhlYWQiLCJhcHBlbmRDaGlsZCIsInNoZWV0IiwiaW5zZXJ0UnVsZSIsInJlbW92ZUNoaWxkIiwiY2xvbmVFbGVtZW50IiwiUmVhY3QzIiwiaW1wb3J0X3JlYWN0MjIiLCJQcmVzZW5jZUNoaWxkIiwicHJlc2VuY2VBZmZlY3RzTGF5b3V0IiwibW9kZSIsInByZXNlbmNlQ2hpbGRyZW4iLCJuZXdDaGlsZHJlbk1hcCIsImNoaWxkSWQiLCJpc0NvbXBsZXRlIiwiXyIsImltcG9ydF9yZWFjdDIzIiwiUmVhY3Q0IiwiaW1wb3J0X3JlYWN0MjQiLCJnZXRDaGlsZEtleSIsInVwZGF0ZUNoaWxkTG9va3VwIiwiYWxsQ2hpbGRyZW4iLCJvbmx5RWxlbWVudHMiLCJmaWx0ZXJlZCIsIkNoaWxkcmVuIiwiaXNWYWxpZEVsZW1lbnQiLCJleGl0QmVmb3JlRW50ZXIiLCJmaWx0ZXJlZENoaWxkcmVuIiwiY2hpbGRyZW5Ub1JlbmRlciIsImV4aXRpbmdDaGlsZHJlbiIsInByZXNlbnRDaGlsZHJlbiIsIkZyYWdtZW50IiwicHJlc2VudEtleXMiLCJ0YXJnZXRLZXlzIiwibnVtUHJlc2VudCIsImNvbXBvbmVudCIsImluc2VydGlvbkluZGV4IiwiZXhpdGluZ0NvbXBvbmVudCIsIm9uRXhpdCIsImxlZnRPdmVyS2V5cyIsImNoaWxkS2V5IiwibGVmdE92ZXJLZXkiLCJwcmVzZW50Q2hpbGQiLCJwcmVzZW50Q2hpbGRLZXkiLCJSZWFjdDUiLCJpbXBvcnRfcmVhY3QyNSIsIlJlYWN0NiIsImltcG9ydF9yZWFjdDI2Iiwic2V0SXNMb2FkZWQiLCJpc0xhenlCdW5kbGUiLCJsb2FkZWRSZW5kZXJlciIsImxvYWRlZEZlYXR1cmVzIiwiaW1wb3J0X3JlYWN0MjciLCJub2RlR3JvdXAiLCJkaXJ0eUFsbCIsImRpcnR5IiwiUmVhY3Q3IiwiaW1wb3J0X3JlYWN0MjgiLCJzaG91bGRJbmhlcml0R3JvdXAiLCJzaG91bGRJbmhlcml0SWQiLCJsYXlvdXRHcm91cENvbnRleHQiLCJkZXByZWNhdGVkTGF5b3V0R3JvdXBDb250ZXh0IiwidXBzdHJlYW1JZCIsIm1lbW9pemVkQ29udGV4dCIsImltcG9ydF9yZWFjdDI5IiwiUmVvcmRlckNvbnRleHQiLCJjaGVja1Jlb3JkZXIiLCJpdGVtMiIsIm5leHRPZmZzZXQiLCJuZXh0SXRlbSIsIm5leHRMYXlvdXQiLCJuZXh0SXRlbUNlbnRlciIsIlJlYWN0OCIsImltcG9ydF9yZWFjdDMwIiwiUmVvcmRlckdyb3VwIiwiYXMiLCJvblJlb3JkZXIiLCJpc1Jlb3JkZXJpbmciLCJyZWdpc3Rlckl0ZW0iLCJpZHgiLCJjb21wYXJlTWluIiwidXBkYXRlT3JkZXIiLCJuZXdPcmRlciIsIkdyb3VwIiwiaW1wb3J0X3JlYWN0MzEiLCJzZXRMYXRlc3QiLCJpc0N1c3RvbVZhbHVlVHlwZSIsImdldE1peGVyMiIsInVzZUltbWVkaWF0ZSIsImFyZ09mZnNldCIsImlucHV0VmFsdWUiLCJpbnB1dFJhbmdlIiwib3V0cHV0UmFuZ2UiLCJ1c2VDb21iaW5lTW90aW9uVmFsdWVzIiwiY29tYmluZVZhbHVlcyIsInVwZGF0ZVZhbHVlIiwic2NoZWR1bGVVcGRhdGUiLCJ1c2VDb21wdXRlZCIsImNvbXB1dGUiLCJpbnB1dFJhbmdlT3JUcmFuc2Zvcm1lciIsInVzZUxpc3RUcmFuc2Zvcm0iLCJSZWFjdDkiLCJpbXBvcnRfcmVhY3QzMiIsInVzZURlZmF1bHRNb3Rpb25WYWx1ZSIsIlJlb3JkZXJJdGVtIiwibGF0ZXN0WCIsImxhdGVzdFkiLCJnZXN0dXJlUG9pbnQiLCJvbkxheW91dE1lYXN1cmUiLCJtZWFzdXJlZCIsIkl0ZW0iLCJmcmFnbWVudHMiLCJudW1GcmFnbWVudHMiLCJidWlsZFZhbHVlIiwiaW1wb3J0X3JlYWN0MzMiLCJhY3RpdmVTcHJpbmdBbmltYXRpb24iLCJzdG9wQW5pbWF0aW9uMiIsImltcG9ydF9yZWFjdDM0IiwibmV3VmVsb2NpdHkiLCJyZXNvbHZlRWxlbWVudHMiLCJlbGVtZW50cyIsInNjb3BlIiwic2VsZWN0b3JDYWNoZSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJyZXNpemVIYW5kbGVycyIsIm9ic2VydmVyIiwiZ2V0RWxlbWVudFNpemUiLCJib3JkZXJCb3hTaXplIiwiaW5saW5lU2l6ZSIsImJsb2NrU2l6ZSIsIm5vdGlmeVRhcmdldCIsImNvbnRlbnRSZWN0IiwiY29udGVudFNpemUiLCJub3RpZnlBbGwiLCJjcmVhdGVSZXNpemVPYnNlcnZlciIsIlJlc2l6ZU9ic2VydmVyIiwicmVzaXplRWxlbWVudCIsImVsZW1lbnRIYW5kbGVycyIsIndpbmRvd0NhbGxiYWNrcyIsIndpbmRvd1Jlc2l6ZUhhbmRsZXIiLCJjcmVhdGVXaW5kb3dSZXNpemVIYW5kbGVyIiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwicmVzaXplV2luZG93IiwicmVzaXplIiwibWF4RWxhcHNlZDIiLCJjcmVhdGVBeGlzSW5mbyIsInNjcm9sbExlbmd0aCIsInRhcmdldE9mZnNldCIsImNvbnRhaW5lckxlbmd0aCIsImNyZWF0ZVNjcm9sbEluZm8iLCJ1cGRhdGVBeGlzSW5mbyIsImF4aXNOYW1lIiwicHJldlRpbWUiLCJ1cGRhdGVTY3JvbGxJbmZvIiwiY2FsY0luc2V0IiwiY29udGFpbmVyIiwiaW5zZXQiLCJvZmZzZXRQYXJlbnQiLCJzdmdCb3VuZGluZ0JveCIsInBhcmVudEJvdW5kaW5nQm94IiwiU1ZHR3JhcGhpY3NFbGVtZW50Iiwic3ZnIiwicGFyZW50Tm9kZSIsIlNjcm9sbE9mZnNldCIsIkVudGVyIiwiRXhpdCIsIkFueSIsIkFsbCIsIm5hbWVkRWRnZXMiLCJjZW50ZXIiLCJyZXNvbHZlRWRnZSIsImVkZ2UiLCJhc051bWJlcjIiLCJjbGllbnRXaWR0aCIsImNsaWVudEhlaWdodCIsImRlZmF1bHRPZmZzZXQyIiwicmVzb2x2ZU9mZnNldCIsInRhcmdldEluc2V0Iiwib2Zmc2V0RGVmaW5pdGlvbiIsInRhcmdldFBvaW50IiwiY29udGFpbmVyUG9pbnQiLCJnZXRUYXJnZXRTaXplIiwicmVzb2x2ZU9mZnNldHMiLCJsZW5ndGhMYWJlbCIsInRhcmdldFNpemUiLCJzY3JvbGxXaWR0aCIsInNjcm9sbEhlaWdodCIsImNvbnRhaW5lclNpemUiLCJoYXNDaGFuZ2VkIiwibnVtT2Zmc2V0cyIsImludGVycG9sYXRvck9mZnNldHMiLCJjcmVhdGVPblNjcm9sbEhhbmRsZXIiLCJvblNjcm9sbCIsInNjcm9sbExpc3RlbmVycyIsInJlc2l6ZUxpc3RlbmVycyIsIm9uU2Nyb2xsSGFuZGxlcnMiLCJnZXRFdmVudFRhcmdldCIsImNvbnRhaW5lckhhbmRsZXJzIiwiY29udGFpbmVySGFuZGxlciIsIm1lYXN1cmVBbGwiLCJ1cGRhdGVBbGwiLCJsaXN0ZW5lcjIiLCJjdXJyZW50SGFuZGxlcnMiLCJzY3JvbGxMaXN0ZW5lciIsImltcG9ydF9yZWFjdDM1IiwicmVmV2FybmluZyIsImNyZWF0ZVNjcm9sbE1vdGlvblZhbHVlcyIsInNjcm9sbFgiLCJzY3JvbGxYUHJvZ3Jlc3MiLCJzY3JvbGxZUHJvZ3Jlc3MiLCJsYXlvdXRFZmZlY3QiLCJ1c2VMaWZlY3ljbGVFZmZlY3QiLCJpbXBvcnRfcmVhY3QzNiIsImluaXRpYWxUaW1lc3RhbXAiLCJwcm92aWRlVGltZVNpbmNlU3RhcnQiLCJXaWxsQ2hhbmdlTW90aW9uVmFsdWUiLCJtZW1iZXJOYW1lIiwiaW1wb3J0X3JlYWN0MzciLCJpbXBvcnRfcmVhY3QzOCIsInJlZHVjZWRNb3Rpb25QcmVmZXJlbmNlIiwiaGFzTW91bnRlZCIsInN1YnNjcmliZXJzIiwib2JzZXJ2ZVRpbWVsaW5lIiwicHJldlByb2dyZXNzIiwib25GcmFtZSIsInBlcmNlbnRhZ2UiLCJzdXBwb3J0c1Njcm9sbFRpbWVsaW5lIiwiU2Nyb2xsVGltZWxpbmUiLCJHcm91cFBsYXliYWNrQ29udHJvbHMiLCJvblJlc29sdmUiLCJvblJlamVjdCIsImNhdGNoIiwiZ2V0QWxsIiwicHJvcE5hbWUiLCJzZXRBbGwiLCJuZXdWYWx1ZSIsImNhbmNlbEFsbCIsImNhbmNlbFRpbWVsaW5lIiwicnVuQWxsIiwibWV0aG9kTmFtZSIsImlzRE9NS2V5ZnJhbWVzIiwiY3JlYXRlR2VuZXJhdG9yRWFzaW5nIiwiY2FsY05leHRUaW1lIiwibGFiZWxzIiwicmFuZ2VTaXplIiwiZ2V0RWFzaW5nRm9yU2VnbWVudCIsImVyYXNlS2V5ZnJhbWVzIiwic2VxdWVuY2UiLCJlbmRUaW1lIiwia2V5ZnJhbWUiLCJhdCIsImFkZEtleWZyYW1lcyIsImNvbXBhcmVCeVRpbWUiLCJkZWZhdWx0U2VnbWVudEVhc2luZyIsImNyZWF0ZUFuaW1hdGlvbnNGcm9tU2VxdWVuY2UiLCJkZWZhdWx0VHJhbnNpdGlvbiIsInNlcXVlbmNlVHJhbnNpdGlvbiIsImRlZmF1bHREdXJhdGlvbiIsImFuaW1hdGlvbkRlZmluaXRpb25zIiwic2VxdWVuY2VzIiwiZWxlbWVudENhY2hlIiwidGltZUxhYmVscyIsInNlZ21lbnQiLCJzdWJqZWN0IiwibWF4RHVyYXRpb24zIiwicmVzb2x2ZVZhbHVlU2VxdWVuY2UiLCJ2YWx1ZUtleWZyYW1lcyIsInZhbHVlU2VxdWVuY2UiLCJlbGVtZW50SW5kZXgiLCJudW1FbGVtZW50cyIsInZhbHVlS2V5ZnJhbWVzQXNMaXN0Iiwia2V5ZnJhbWVzQXNMaXN0IiwicmVtYWluaW5nVHJhbnNpdGlvbiIsImNhbGN1bGF0ZWREZWxheSIsImFic29sdXRlRGVsdGEiLCJpc051bWJlcktleWZyYW1lc0FycmF5Iiwic3ByaW5nVHJhbnNpdGlvbiIsInNwcmluZ0Vhc2luZyIsInRhcmdldFRpbWUiLCJyZW1haW5kZXIiLCJ1bnNoaWZ0Iiwic3ViamVjdFNlcXVlbmNlIiwiZ2V0U3ViamVjdFNlcXVlbmNlIiwiZ2V0VmFsdWVTZXF1ZW5jZSIsImdldFZhbHVlVHJhbnNpdGlvbjIiLCJ2YWx1ZVNlcXVlbmNlcyIsInZhbHVlT2Zmc2V0IiwidmFsdWVFYXNpbmciLCJpc051bWJlciIsImFuaW1hdGVFbGVtZW50cyIsImVsZW1lbnRPclNlbGVjdG9yIiwiaXNTZXF1ZW5jZSIsImFuaW1hdGVTZXF1ZW5jZSIsInNjb3BlZEFuaW1hdGUiLCJ2YWx1ZU9yRWxlbWVudE9yU2VxdWVuY2UiLCJpbXBvcnRfcmVhY3QzOSIsIml0ZW1zIiwic2V0SXRlbSIsInJ1bkN5Y2xlIiwidGhyZXNob2xkcyIsImFjdGl2ZUludGVyc2VjdGlvbnMiLCJvbkludGVyc2VjdGlvbkNoYW5nZSIsIm5ld09uRW5kIiwib2JzZXJ2ZXIyIiwiZGlzY29ubmVjdCIsImltcG9ydF9yZWFjdDQwIiwic2V0SW5WaWV3Iiwib25FbnRlciIsImNvbXBvbmVudENvbnRyb2xzIiwibmF0aXZlRXZlbnQiLCJjcmVhdGVEcmFnQ29udHJvbHMiLCJpbXBvcnRfcmVhY3Q0MSIsInN0YXJ0VHJhbnNpdGlvbiIsImltcG9ydF9yZWFjdDQyIiwiZm9yY2VVcGRhdGUiLCJzdGFydEluc3RhbnRMYXlvdXRUcmFuc2l0aW9uIiwidW5sb2NrT25GcmFtZVJlZiIsIlJlYWN0MTAiLCJyZXNldCIsImFwcGVhclN0b3JlSWQiLCJhcHBlYXJBbmltYXRpb25TdG9yZSIsImhhbmRvZmZGcmFtZVRpbWUiLCJoYW5kb2ZmT3B0aW1pemVkQXBwZWFyQW5pbWF0aW9uIiwiZWxlbWVudElkIiwiX3ZhbHVlIiwiX2ZyYW1lIiwib3B0aW1pc2VkVmFsdWVOYW1lIiwic3RvcmVJZCIsIm9wdGltaXNlZEFuaW1hdGlvbiIsImVycm9yIiwic3RhcnRGcmFtZVRpbWUiLCJyZWFkeUFuaW1hdGlvbiIsIm9uUmVhZHkiLCJhcHBlYXJBbmltYXRpb24iLCJyZWFkeSIsImltcG9ydF9yZWFjdDQzIiwiY3JlYXRlT2JqZWN0IiwiU3RhdGVWaXN1YWxFbGVtZW50IiwicmVzdG9yZVRyYW5zZm9ybSIsIl9zdGF0ZSIsImluaXRpYWxTdGF0ZSIsInNldEFuaW1hdGlvblN0YXRlIiwiYW5pbWF0aW9uRGVmaW5pdGlvbiIsImltcG9ydF9yZWFjdDQ0IiwibWF4U2NhbGUiLCJpbnZlcnRTY2FsZSIsImhhc1dhcm5lZCIsInBhcmVudFNjYWxlWCIsInBhcmVudFNjYWxlWSIsIlJlYWN0MTEiLCJpZDMiLCJzY3JvbGxUaW1lbGluZUZhbGxiYWNrIiwidGltZWxpbmVDYWNoZSIsImdldFRpbWVsaW5lIiwiZ2V0T3JpZ2luSW5kZXgiLCJ0b3RhbCIsImxhc3RJbmRleCIsInN0YXJ0RGVsYXkiLCJtYXhEZWxheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSwyQkFBQSxHQUFBQyxVQUFBO0VBQUEsMkRBQUFDLENBQUFD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LEtBQUFBLFVBQUE7RUFBQUMsTUFBQSxFQUFBQSxDQUFBLEtBQUFBLE1BQUE7RUFBQUMsU0FBQSxFQUFBQSxDQUFBLEtBQUFBLFNBQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFBLE9BQUE7RUFBQUMsY0FBQSxFQUFBQSxDQUFBLEtBQUFBLGNBQUE7RUFBQUMsVUFBQSxFQUFBQSxDQUFBLEtBQUFBLFVBQUE7RUFBQUMsV0FBQSxFQUFBQSxDQUFBLEtBQUFBLFdBQUE7RUFBQUMsVUFBQSxFQUFBQSxDQUFBLEtBQUFBLFVBQUE7RUFBQUMsdUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSx1QkFBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUEsTUFBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxLQUFBLEVBQUFBLENBQUEsS0FBQUEsS0FBQTtFQUFBQyxLQUFBLEVBQUFBLENBQUEsS0FBQUEsS0FBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyx3QkFBQSxFQUFBQSxDQUFBLEtBQUFBLHdCQUFBO0VBQUFDLHFCQUFBLEVBQUFBLENBQUEsS0FBQUEscUJBQUE7RUFBQUMsbUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSxtQkFBQTtFQUFBQyxXQUFBLEVBQUFBLENBQUEsS0FBQUEsV0FBQTtFQUFBQyxLQUFBLEVBQUFBLENBQUEsS0FBQUEsS0FBQTtFQUFBQyx5QkFBQSxFQUFBQSxDQUFBLEtBQUFBLHlCQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxRQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQSxZQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQSxNQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQSxNQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLFdBQUEsRUFBQUEsQ0FBQSxLQUFBQSxXQUFBO0VBQUFDLEtBQUEsRUFBQUEsQ0FBQSxLQUFBQSxLQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQSxNQUFBO0VBQUFDLFdBQUEsRUFBQUEsQ0FBQSxLQUFBQSxXQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQSxZQUFBO0VBQUFDLGlCQUFBLEVBQUFBLENBQUEsS0FBQUEsaUJBQUE7RUFBQUMsYUFBQSxFQUFBQSxDQUFBLEtBQUFBLGFBQUE7RUFBQUMsaUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSxpQkFBQTtFQUFBQyxDQUFBLEVBQUFBLENBQUEsS0FBQUEsQ0FBQTtFQUFBQyxrQkFBQSxFQUFBQSxDQUFBLEtBQUFBLGtCQUFBO0VBQUFDLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQSxZQUFBO0VBQUFDLEdBQUEsRUFBQUEsQ0FBQSxLQUFBQSxHQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQSxNQUFBO0VBQUFDLFdBQUEsRUFBQUEsQ0FBQSxLQUFBQSxXQUFBO0VBQUFDLDRCQUFBLEVBQUFBLENBQUEsS0FBQUEsNEJBQUE7RUFBQUMsSUFBQSxFQUFBQSxDQUFBLEtBQUFBLElBQUE7RUFBQUMsUUFBQSxFQUFBQSxDQUFBLEtBQUFBLFFBQUE7RUFBQUMsRUFBQSxFQUFBQSxDQUFBLEtBQUFBLEVBQUE7RUFBQUMsa0JBQUEsRUFBQUEsQ0FBQSxLQUFBQSxrQkFBQTtFQUFBQyxhQUFBLEVBQUFBLENBQUEsS0FBQUEsYUFBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUEsTUFBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxNQUFBLEVBQUFBLENB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