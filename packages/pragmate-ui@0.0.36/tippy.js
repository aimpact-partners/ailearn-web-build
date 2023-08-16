System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, bimport, __Bundle, __pkg, ims, __beyond_pkg, hmr;
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/react-18-widgets", "0.0.5"], ["@beyond-js/reactive", "0.0.3"], ["@beyond-js/widgets", "0.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["socket.io-client", "4.6.1"], ["prismjs", "1.29.0"], ["swiper", "8.4.7"], ["@beyond-js/backend", "0.1.5"], ["@types/react", "18.0.37"], ["@types/react-dom", "18.0.11"], ["pragmate-ui", "0.0.36"], ["@aimpact/ailearn-app", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@0.0.36/tippy"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.0.36/tippy');
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./control
      *************************/
      ims.set('./control', {
        hash: 2668423646,
        creator: function (require, exports) {
          "use strict";

          /**!
          * tippy.js v6.3.7
          * (c) 2017-2021 atomiks
          * MIT License
          */
          (function (global, factory) {
            typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@popperjs/core')) : typeof define === 'function' && define.amd ? define(['@popperjs/core'], factory) : (global = global || self, global.tippy = factory(global.Popper));
          })(void 0, function (core) {
            'use strict';

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
            var TIPPY_DEFAULT_APPEND_TO = function TIPPY_DEFAULT_APPEND_TO() {
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
              return str.indexOf('[object') === 0 && str.indexOf(type + "]") > -1;
            }
            function invokeWithArgsOrReturn(value, args) {
              return typeof value === 'function' ? value.apply(void 0, args) : value;
            }
            function debounce(fn, ms) {
              // Avoid wrapping in `setTimeout` if ms is 0 anyway
              if (ms === 0) {
                return fn;
              }
              var timeout;
              return function (arg) {
                clearTimeout(timeout);
                timeout = setTimeout(function () {
                  fn(arg);
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
              return placement.split('-')[0];
            }
            function arrayFrom(value) {
              return [].slice.call(value);
            }
            function removeUndefinedProps(obj) {
              return Object.keys(obj).reduce(function (acc, key) {
                if (obj[key] !== undefined) {
                  acc[key] = obj[key];
                }
                return acc;
              }, {});
            }
            function div() {
              return document.createElement('div');
            }
            function isElement(value) {
              return ['Element', 'Fragment'].some(function (type) {
                return isType(value, type);
              });
            }
            function isNodeList(value) {
              return isType(value, 'NodeList');
            }
            function isMouseEvent(value) {
              return isType(value, 'MouseEvent');
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
                  el.setAttribute('data-state', state);
                }
              });
            }
            function getOwnerDocument(elementOrElements) {
              var _element$ownerDocumen;
              var _normalizeToArray = normalizeToArray(elementOrElements),
                element = _normalizeToArray[0]; // Elements created via a <template> have an ownerDocument with no reference to the body
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
                var topDistance = basePlacement === 'bottom' ? offsetData.top.y : 0;
                var bottomDistance = basePlacement === 'top' ? offsetData.bottom.y : 0;
                var leftDistance = basePlacement === 'right' ? offsetData.left.x : 0;
                var rightDistance = basePlacement === 'left' ? offsetData.right.x : 0;
                var exceedsTop = popperRect.top - clientY + topDistance > interactiveBorder;
                var exceedsBottom = clientY - popperRect.bottom - bottomDistance > interactiveBorder;
                var exceedsLeft = popperRect.left - clientX + leftDistance > interactiveBorder;
                var exceedsRight = clientX - popperRect.right - rightDistance > interactiveBorder;
                return exceedsTop || exceedsBottom || exceedsLeft || exceedsRight;
              });
            }
            function updateTransitionEndListener(box, action, listener) {
              var method = action + "EventListener"; // some browsers apparently support `transition` (unprefixed) but only fire
              // `webkitTransitionEnd`...
              ['transitionend', 'webkitTransitionEnd'].forEach(function (event) {
                box[method](event, listener);
              });
            }
            /**
             * Compared to xxx.contains, this function works for dom structures with shadow
             * dom
             */
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
            /**
             * When a `touchstart` event is fired, it's assumed the user is using touch
             * input. We'll bind a `mousemove` event listener to listen for mouse input in
             * the future. This way, the `isTouch` property is fully dynamic and will handle
             * hybrid devices that use a mix of touch + mouse input.
             */
            function onDocumentTouchStart() {
              if (currentInput.isTouch) {
                return;
              }
              currentInput.isTouch = true;
              if (window.performance) {
                document.addEventListener('mousemove', onDocumentMouseMove);
              }
            }
            /**
             * When two `mousemove` event are fired consecutively within 20ms, it's assumed
             * the user is using mouse input again. `mousemove` can fire on touch devices as
             * well, but very rarely that quickly.
             */
            function onDocumentMouseMove() {
              var now = performance.now();
              if (now - lastMouseMoveTime < 20) {
                currentInput.isTouch = false;
                document.removeEventListener('mousemove', onDocumentMouseMove);
              }
              lastMouseMoveTime = now;
            }
            /**
             * When an element is in focus and has a tippy, leaving the tab/window and
             * returning causes it to show again. For mouse users this is unexpected, but
             * for keyboard use it makes sense.
             * TODO: find a better technique to solve this problem
             */
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
              document.addEventListener('touchstart', onDocumentTouchStart, TOUCH_OPTIONS);
              window.addEventListener('blur', onWindowBlur);
            }
            var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';
            var isIE11 = isBrowser ?
            // @ts-ignore
            !!window.msCrypto : false;
            function createMemoryLeakWarning(method) {
              var txt = method === 'destroy' ? 'n already-' : ' ';
              return [method + "() was called on a" + txt + "destroyed instance. This is a no-op but", 'indicates a potential memory leak.'].join(' ');
            }
            function clean(value) {
              var spacesAndTabs = /[ \t]{2,}/g;
              var lineStartWithSpaces = /^[ \t]*/gm;
              return value.replace(spacesAndTabs, ' ').replace(lineStartWithSpaces, '').trim();
            }
            function getDevMessage(message) {
              return clean("\n  %ctippy.js\n\n  %c" + clean(message) + "\n\n  %c\uD83D\uDC77\u200D This is a development-only message. It will be removed in production.\n  ");
            }
            function getFormattedMessage(message) {
              return [getDevMessage(message), 'color: #00C584; font-size: 1.3em; font-weight: bold;', 'line-height: 1.5', 'color: #a6a095;'];
            } // Assume warnings and errors never have the same message
            var visitedMessages;
            {
              resetVisitedMessages();
            }
            function resetVisitedMessages() {
              visitedMessages = new Set();
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
              var didPassPlainObject = Object.prototype.toString.call(targets) === '[object Object]' && !targets.addEventListener;
              errorWhen(didPassFalsyValue, ['tippy() was passed', '`' + String(targets) + '`', 'as its targets (first) argument. Valid types are: String, Element,', 'Element[], or NodeList.'].join(' '));
              errorWhen(didPassPlainObject, ['tippy() was passed a plain object which is not supported as an argument', 'for virtual positioning. Use props.getReferenceClientRect instead.'].join(' '));
            }
            var pluginProps = {
              animateFill: false,
              followCursor: false,
              inlinePositioning: false,
              sticky: false
            };
            var renderProps = {
              allowHTML: false,
              animation: 'fade',
              arrow: true,
              content: '',
              inertia: false,
              maxWidth: 350,
              role: 'tooltip',
              theme: '',
              zIndex: 9999
            };
            var defaultProps = Object.assign({
              appendTo: TIPPY_DEFAULT_APPEND_TO,
              aria: {
                content: 'auto',
                expanded: 'auto'
              },
              delay: 0,
              duration: [300, 250],
              getReferenceClientRect: null,
              hideOnClick: true,
              ignoreAttributes: false,
              interactive: false,
              interactiveBorder: 2,
              interactiveDebounce: 0,
              moveTransition: '',
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
              placement: 'top',
              plugins: [],
              popperOptions: {},
              render: null,
              showOnCreate: false,
              touch: true,
              trigger: 'mouseenter focus',
              triggerTarget: null
            }, pluginProps, renderProps);
            var defaultKeys = Object.keys(defaultProps);
            var setDefaultProps = function setDefaultProps(partialProps) {
              /* istanbul ignore else */
              {
                validateProps(partialProps, []);
              }
              var keys = Object.keys(partialProps);
              keys.forEach(function (key) {
                defaultProps[key] = partialProps[key];
              });
            };
            function getExtendedPassedProps(passedProps) {
              var plugins = passedProps.plugins || [];
              var pluginProps = plugins.reduce(function (acc, plugin) {
                var name = plugin.name,
                  defaultValue = plugin.defaultValue;
                if (name) {
                  var _name;
                  acc[name] = passedProps[name] !== undefined ? passedProps[name] : (_name = defaultProps[name]) != null ? _name : defaultValue;
                }
                return acc;
              }, {});
              return Object.assign({}, passedProps, pluginProps);
            }
            function getDataAttributeProps(reference, plugins) {
              var propKeys = plugins ? Object.keys(getExtendedPassedProps(Object.assign({}, defaultProps, {
                plugins: plugins
              }))) : defaultKeys;
              var props = propKeys.reduce(function (acc, key) {
                var valueAsString = (reference.getAttribute("data-tippy-" + key) || '').trim();
                if (!valueAsString) {
                  return acc;
                }
                if (key === 'content') {
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
                expanded: out.aria.expanded === 'auto' ? props.interactive : out.aria.expanded,
                content: out.aria.content === 'auto' ? props.interactive ? null : 'describedby' : out.aria.content
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
                var didPassUnknownProp = !hasOwnProperty(nonPluginProps, prop); // Check if the prop exists in `plugins`
                if (didPassUnknownProp) {
                  didPassUnknownProp = plugins.filter(function (plugin) {
                    return plugin.name === prop;
                  }).length === 0;
                }
                warnWhen(didPassUnknownProp, ["`" + prop + "`", "is not a valid prop. You may have spelled it incorrectly, or if it's", 'a plugin, forgot to pass it in an array as props.plugins.', '\n\n', 'All props: https://atomiks.github.io/tippyjs/v6/all-props/\n', 'Plugins: https://atomiks.github.io/tippyjs/v6/plugins/'].join(' '));
              });
            }
            var innerHTML = function innerHTML() {
              return 'innerHTML';
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
                dangerouslySetInnerHTML(content, '');
                content.appendChild(props.content);
              } else if (typeof props.content !== 'function') {
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
                box: box,
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
              box.setAttribute('data-state', 'hidden');
              box.setAttribute('tabindex', '-1');
              var content = div();
              content.className = CONTENT_CLASS;
              content.setAttribute('data-state', 'hidden');
              setContent(content, instance.props);
              popper.appendChild(box);
              box.appendChild(content);
              onUpdate(instance.props, instance.props);
              function onUpdate(prevProps, nextProps) {
                var _getChildren = getChildren(popper),
                  box = _getChildren.box,
                  content = _getChildren.content,
                  arrow = _getChildren.arrow;
                if (nextProps.theme) {
                  box.setAttribute('data-theme', nextProps.theme);
                } else {
                  box.removeAttribute('data-theme');
                }
                if (typeof nextProps.animation === 'string') {
                  box.setAttribute('data-animation', nextProps.animation);
                } else {
                  box.removeAttribute('data-animation');
                }
                if (nextProps.inertia) {
                  box.setAttribute('data-inertia', '');
                } else {
                  box.removeAttribute('data-inertia');
                }
                box.style.maxWidth = typeof nextProps.maxWidth === 'number' ? nextProps.maxWidth + "px" : nextProps.maxWidth;
                if (nextProps.role) {
                  box.setAttribute('role', nextProps.role);
                } else {
                  box.removeAttribute('role');
                }
                if (prevProps.content !== nextProps.content || prevProps.allowHTML !== nextProps.allowHTML) {
                  setContent(content, instance.props);
                }
                if (nextProps.arrow) {
                  if (!arrow) {
                    box.appendChild(createArrowElement(nextProps.arrow));
                  } else if (prevProps.arrow !== nextProps.arrow) {
                    box.removeChild(arrow);
                    box.appendChild(createArrowElement(nextProps.arrow));
                  }
                } else if (arrow) {
                  box.removeChild(arrow);
                }
              }
              return {
                popper: popper,
                onUpdate: onUpdate
              };
            } // Runtime check to identify if the render function is the default one; this
            // way we can apply default CSS transitions logic and it can be tree-shaken away
            render.$$tippy = true;
            var idCounter = 1;
            var mouseMoveListeners = []; // Used by `hideAll()`
            var mountedInstances = [];
            function createTippy(reference, passedProps) {
              var props = evaluateProps(reference, Object.assign({}, defaultProps, getExtendedPassedProps(removeUndefinedProps(passedProps)))); // ===========================================================================
              // 🔒 Private members
              // ===========================================================================
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
              var currentTarget; // ===========================================================================
              // 🔑 Public members
              // ===========================================================================
              var id = idCounter++;
              var popperInstance = null;
              var plugins = unique(props.plugins);
              var state = {
                // Is the instance currently enabled?
                isEnabled: true,
                // Is the tippy currently showing and not transitioning out?
                isVisible: false,
                // Has the instance been destroyed?
                isDestroyed: false,
                // Is the tippy currently mounted to the DOM?
                isMounted: false,
                // Has the tippy finished transitioning in?
                isShown: false
              };
              var instance = {
                // properties
                id: id,
                reference: reference,
                popper: div(),
                popperInstance: popperInstance,
                props: props,
                state: state,
                plugins: plugins,
                // methods
                clearDelayTimeouts: clearDelayTimeouts,
                setProps: setProps,
                setContent: setContent,
                show: show,
                hide: hide,
                hideWithInteractivity: hideWithInteractivity,
                enable: enable,
                disable: disable,
                unmount: unmount,
                destroy: destroy
              }; // TODO: Investigate why this early return causes a TDZ error in the tests —
              // it doesn't seem to happen in the browser
              /* istanbul ignore if */
              if (!props.render) {
                {
                  errorWhen(true, 'render() function has not been supplied.');
                }
                return instance;
              } // ===========================================================================
              // Initial mutations
              // ===========================================================================
              var _props$render = props.render(instance),
                popper = _props$render.popper,
                onUpdate = _props$render.onUpdate;
              popper.setAttribute('data-tippy-root', '');
              popper.id = "tippy-" + instance.id;
              instance.popper = popper;
              reference._tippy = instance;
              popper._tippy = instance;
              var pluginsHooks = plugins.map(function (plugin) {
                return plugin.fn(instance);
              });
              var hasAriaExpanded = reference.hasAttribute('aria-expanded');
              addListeners();
              handleAriaExpandedAttribute();
              handleStyles();
              invokeHook('onCreate', [instance]);
              if (props.showOnCreate) {
                scheduleShow();
              } // Prevent a tippy with a delay from hiding if the cursor left then returned
              // before it started hiding
              popper.addEventListener('mouseenter', function () {
                if (instance.props.interactive && instance.state.isVisible) {
                  instance.clearDelayTimeouts();
                }
              });
              popper.addEventListener('mouseleave', function () {
                if (instance.props.interactive && instance.props.trigger.indexOf('mouseenter') >= 0) {
                  getDocument().addEventListener('mousemove', debouncedOnMouseMove);
                }
              });
              return instance; // ===========================================================================
              // 🔒 Private methods
              // ===========================================================================
              function getNormalizedTouchSettings() {
                var touch = instance.props.touch;
                return Array.isArray(touch) ? touch : [touch, 0];
              }
              function getIsCustomTouchBehavior() {
                return getNormalizedTouchSettings()[0] === 'hold';
              }
              function getIsDefaultRenderFn() {
                var _instance$props$rende;
                // @ts-ignore
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
                // For touch or keyboard input, force `0` delay for UX reasons
                // Also if the instance is mounted but not visible (transitioning out),
                // ignore delay
                if (instance.state.isMounted && !instance.state.isVisible || currentInput.isTouch || lastTriggerEvent && lastTriggerEvent.type === 'focus') {
                  return 0;
                }
                return getValueAtIndexOrReturn(instance.props.delay, isShow ? 0 : 1, defaultProps.delay);
              }
              function handleStyles(fromHide) {
                if (fromHide === void 0) {
                  fromHide = false;
                }
                popper.style.pointerEvents = instance.props.interactive && !fromHide ? '' : 'none';
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
                var id = popper.id;
                var nodes = normalizeToArray(instance.props.triggerTarget || reference);
                nodes.forEach(function (node) {
                  var currentValue = node.getAttribute(attr);
                  if (instance.state.isVisible) {
                    node.setAttribute(attr, currentValue ? currentValue + " " + id : id);
                  } else {
                    var nextValue = currentValue && currentValue.replace(id, '').trim();
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
                    node.setAttribute('aria-expanded', instance.state.isVisible && node === getCurrentTarget() ? 'true' : 'false');
                  } else {
                    node.removeAttribute('aria-expanded');
                  }
                });
              }
              function cleanupInteractiveMouseListeners() {
                getDocument().removeEventListener('mousemove', debouncedOnMouseMove);
                mouseMoveListeners = mouseMoveListeners.filter(function (listener) {
                  return listener !== debouncedOnMouseMove;
                });
              }
              function onDocumentPress(event) {
                // Moved finger to scroll instead of an intentional tap outside
                if (currentInput.isTouch) {
                  if (didTouchMove || event.type === 'mousedown') {
                    return;
                  }
                }
                var actualTarget = event.composedPath && event.composedPath()[0] || event.target; // Clicked on interactive popper
                if (instance.props.interactive && actualContains(popper, actualTarget)) {
                  return;
                } // Clicked on the event listeners target
                if (normalizeToArray(instance.props.triggerTarget || reference).some(function (el) {
                  return actualContains(el, actualTarget);
                })) {
                  if (currentInput.isTouch) {
                    return;
                  }
                  if (instance.state.isVisible && instance.props.trigger.indexOf('click') >= 0) {
                    return;
                  }
                } else {
                  invokeHook('onClickOutside', [instance, event]);
                }
                if (instance.props.hideOnClick === true) {
                  instance.clearDelayTimeouts();
                  instance.hide(); // `mousedown` event is fired right before `focus` if pressing the
                  // currentTarget. This lets a tippy with `focus` trigger know that it
                  // should not show
                  didHideDueToDocumentMouseDown = true;
                  setTimeout(function () {
                    didHideDueToDocumentMouseDown = false;
                  }); // The listener gets added in `scheduleShow()`, but this may be hiding it
                  // before it shows, and hide()'s early bail-out behavior can prevent it
                  // from being cleaned up
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
                doc.addEventListener('mousedown', onDocumentPress, true);
                doc.addEventListener('touchend', onDocumentPress, TOUCH_OPTIONS);
                doc.addEventListener('touchstart', onTouchStart, TOUCH_OPTIONS);
                doc.addEventListener('touchmove', onTouchMove, TOUCH_OPTIONS);
              }
              function removeDocumentPress() {
                var doc = getDocument();
                doc.removeEventListener('mousedown', onDocumentPress, true);
                doc.removeEventListener('touchend', onDocumentPress, TOUCH_OPTIONS);
                doc.removeEventListener('touchstart', onTouchStart, TOUCH_OPTIONS);
                doc.removeEventListener('touchmove', onTouchMove, TOUCH_OPTIONS);
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
                    updateTransitionEndListener(box, 'remove', listener);
                    callback();
                  }
                } // Make callback synchronous if duration is 0
                // `transitionend` won't fire otherwise
                if (duration === 0) {
                  return callback();
                }
                updateTransitionEndListener(box, 'remove', currentTransitionEndListener);
                updateTransitionEndListener(box, 'add', listener);
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
                    node: node,
                    eventType: eventType,
                    handler: handler,
                    options: options
                  });
                });
              }
              function addListeners() {
                if (getIsCustomTouchBehavior()) {
                  on('touchstart', onTrigger, {
                    passive: true
                  });
                  on('touchend', onMouseLeave, {
                    passive: true
                  });
                }
                splitBySpaces(instance.props.trigger).forEach(function (eventType) {
                  if (eventType === 'manual') {
                    return;
                  }
                  on(eventType, onTrigger);
                  switch (eventType) {
                    case 'mouseenter':
                      on('mouseleave', onMouseLeave);
                      break;
                    case 'focus':
                      on(isIE11 ? 'focusout' : 'blur', onBlurOrFocusOut);
                      break;
                    case 'focusin':
                      on('focusout', onBlurOrFocusOut);
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
              function onTrigger(event) {
                var _lastTriggerEvent;
                var shouldScheduleClickHide = false;
                if (!instance.state.isEnabled || isEventListenerStopped(event) || didHideDueToDocumentMouseDown) {
                  return;
                }
                var wasFocused = ((_lastTriggerEvent = lastTriggerEvent) == null ? void 0 : _lastTriggerEvent.type) === 'focus';
                lastTriggerEvent = event;
                currentTarget = event.currentTarget;
                handleAriaExpandedAttribute();
                if (!instance.state.isVisible && isMouseEvent(event)) {
                  // If scrolling, `mouseenter` events can be fired if the cursor lands
                  // over a new target, but `mousemove` events don't get fired. This
                  // causes interactive tooltips to get stuck open until the cursor is
                  // moved
                  mouseMoveListeners.forEach(function (listener) {
                    return listener(event);
                  });
                } // Toggle show/hide when clicking click-triggered tooltips
                if (event.type === 'click' && (instance.props.trigger.indexOf('mouseenter') < 0 || isVisibleFromClick) && instance.props.hideOnClick !== false && instance.state.isVisible) {
                  shouldScheduleClickHide = true;
                } else {
                  scheduleShow(event);
                }
                if (event.type === 'click') {
                  isVisibleFromClick = !shouldScheduleClickHide;
                }
                if (shouldScheduleClickHide && !wasFocused) {
                  scheduleHide(event);
                }
              }
              function onMouseMove(event) {
                var target = event.target;
                var isCursorOverReferenceOrPopper = getCurrentTarget().contains(target) || popper.contains(target);
                if (event.type === 'mousemove' && isCursorOverReferenceOrPopper) {
                  return;
                }
                var popperTreeData = getNestedPopperTree().concat(popper).map(function (popper) {
                  var _instance$popperInsta;
                  var instance = popper._tippy;
                  var state = (_instance$popperInsta = instance.popperInstance) == null ? void 0 : _instance$popperInsta.state;
                  if (state) {
                    return {
                      popperRect: popper.getBoundingClientRect(),
                      popperState: state,
                      props: props
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
                var shouldBail = isEventListenerStopped(event) || instance.props.trigger.indexOf('click') >= 0 && isVisibleFromClick;
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
                if (instance.props.trigger.indexOf('focusin') < 0 && event.target !== getCurrentTarget()) {
                  return;
                } // If focus was moved to within the popper
                if (instance.props.interactive && event.relatedTarget && popper.contains(event.relatedTarget)) {
                  return;
                }
                scheduleHide(event);
              }
              function isEventListenerStopped(event) {
                return currentInput.isTouch ? getIsCustomTouchBehavior() !== event.type.indexOf('touch') >= 0 : false;
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
                  name: '$$tippy',
                  enabled: true,
                  phase: 'beforeWrite',
                  requires: ['computeStyles'],
                  fn: function fn(_ref2) {
                    var state = _ref2.state;
                    if (getIsDefaultRenderFn()) {
                      var _getDefaultTemplateCh = getDefaultTemplateChildren(),
                        box = _getDefaultTemplateCh.box;
                      ['placement', 'reference-hidden', 'escaped'].forEach(function (attr) {
                        if (attr === 'placement') {
                          box.setAttribute('data-placement', state.placement);
                        } else {
                          if (state.attributes.popper["data-popper-" + attr]) {
                            box.setAttribute("data-" + attr, '');
                          } else {
                            box.removeAttribute("data-" + attr);
                          }
                        }
                      });
                      state.attributes.popper = {};
                    }
                  }
                };
                var modifiers = [{
                  name: 'offset',
                  options: {
                    offset: offset
                  }
                }, {
                  name: 'preventOverflow',
                  options: {
                    padding: {
                      top: 2,
                      bottom: 2,
                      left: 5,
                      right: 5
                    }
                  }
                }, {
                  name: 'flip',
                  options: {
                    padding: 5
                  }
                }, {
                  name: 'computeStyles',
                  options: {
                    adaptive: !moveTransition
                  }
                }, tippyModifier];
                if (getIsDefaultRenderFn() && arrow) {
                  modifiers.push({
                    name: 'arrow',
                    options: {
                      element: arrow,
                      padding: 3
                    }
                  });
                }
                modifiers.push.apply(modifiers, (popperOptions == null ? void 0 : popperOptions.modifiers) || []);
                instance.popperInstance = core.createPopper(computedReference, popper, Object.assign({}, popperOptions, {
                  placement: placement,
                  onFirstUpdate: onFirstUpdate,
                  modifiers: modifiers
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
                var parentNode; // By default, we'll append the popper to the triggerTargets's parentNode so
                // it's directly after the reference element so the elements inside the
                // tippy can be tabbed to
                // If there are clipping issues, the user can specify a different appendTo
                // and ensure focus management is handled correctly manually
                var node = getCurrentTarget();
                if (instance.props.interactive && appendTo === TIPPY_DEFAULT_APPEND_TO || appendTo === 'parent') {
                  parentNode = node.parentNode;
                } else {
                  parentNode = invokeWithArgsOrReturn(appendTo, [node]);
                } // The popper element needs to exist on the DOM before its position can be
                // updated as Popper needs to read its dimensions
                if (!parentNode.contains(popper)) {
                  parentNode.appendChild(popper);
                }
                instance.state.isMounted = true;
                createPopperInstance();
                /* istanbul ignore else */
                {
                  // Accessibility check
                  warnWhen(instance.props.interactive && appendTo === defaultProps.appendTo && node.nextElementSibling !== popper, ['Interactive tippy element may not be accessible via keyboard', 'navigation because it is not directly after the reference element', 'in the DOM source order.', '\n\n', 'Using a wrapper <div> or <span> tag around the reference element', 'solves this by creating a new parentNode context.', '\n\n', 'Specifying `appendTo: document.body` silences this warning, but it', 'assumes you are using a focus management solution to handle', 'keyboard navigation.', '\n\n', 'See: https://atomiks.github.io/tippyjs/v6/accessibility/#interactivity'].join(' '));
                }
              }
              function getNestedPopperTree() {
                return arrayFrom(popper.querySelectorAll('[data-tippy-root]'));
              }
              function scheduleShow(event) {
                instance.clearDelayTimeouts();
                if (event) {
                  invokeHook('onTrigger', [instance, event]);
                }
                addDocumentPress();
                var delay = getDelay(true);
                var _getNormalizedTouchSe = getNormalizedTouchSettings(),
                  touchValue = _getNormalizedTouchSe[0],
                  touchDelay = _getNormalizedTouchSe[1];
                if (currentInput.isTouch && touchValue === 'hold' && touchDelay) {
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
                invokeHook('onUntrigger', [instance, event]);
                if (!instance.state.isVisible) {
                  removeDocumentPress();
                  return;
                } // For interactive tippies, scheduleHide is added to a document.body handler
                // from onMouseLeave so must intercept scheduled hides from mousemove/leave
                // events when trigger contains mouseenter and click, and the tip is
                // currently shown as a result of a click.
                if (instance.props.trigger.indexOf('mouseenter') >= 0 && instance.props.trigger.indexOf('click') >= 0 && ['mouseleave', 'mousemove'].indexOf(event.type) >= 0 && isVisibleFromClick) {
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
                  // Fixes a `transitionend` problem when it fires 1 frame too
                  // late sometimes, we don't want hide() to be called.
                  scheduleHideAnimationFrame = requestAnimationFrame(function () {
                    instance.hide();
                  });
                }
              } // ===========================================================================
              // 🔑 Public methods
              // ===========================================================================
              function enable() {
                instance.state.isEnabled = true;
              }
              function disable() {
                // Disabling the instance should also hide it
                // https://github.com/atomiks/tippy.js-react/issues/106
                instance.hide();
                instance.state.isEnabled = false;
              }
              function clearDelayTimeouts() {
                clearTimeout(showTimeout);
                clearTimeout(hideTimeout);
                cancelAnimationFrame(scheduleHideAnimationFrame);
              }
              function setProps(partialProps) {
                /* istanbul ignore else */
                {
                  warnWhen(instance.state.isDestroyed, createMemoryLeakWarning('setProps'));
                }
                if (instance.state.isDestroyed) {
                  return;
                }
                invokeHook('onBeforeUpdate', [instance, partialProps]);
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
                } // Ensure stale aria-expanded attributes are removed
                if (prevProps.triggerTarget && !nextProps.triggerTarget) {
                  normalizeToArray(prevProps.triggerTarget).forEach(function (node) {
                    node.removeAttribute('aria-expanded');
                  });
                } else if (nextProps.triggerTarget) {
                  reference.removeAttribute('aria-expanded');
                }
                handleAriaExpandedAttribute();
                handleStyles();
                if (onUpdate) {
                  onUpdate(prevProps, nextProps);
                }
                if (instance.popperInstance) {
                  createPopperInstance(); // Fixes an issue with nested tippies if they are all getting re-rendered,
                  // and the nested ones get re-rendered first.
                  // https://github.com/atomiks/tippyjs-react/issues/177
                  // TODO: find a cleaner / more efficient solution(!)
                  getNestedPopperTree().forEach(function (nestedPopper) {
                    // React (and other UI libs likely) requires a rAF wrapper as it flushes
                    // its work in one
                    requestAnimationFrame(nestedPopper._tippy.popperInstance.forceUpdate);
                  });
                }
                invokeHook('onAfterUpdate', [instance, partialProps]);
              }
              function setContent(content) {
                instance.setProps({
                  content: content
                });
              }
              function show() {
                /* istanbul ignore else */
                {
                  warnWhen(instance.state.isDestroyed, createMemoryLeakWarning('show'));
                } // Early bail-out
                var isAlreadyVisible = instance.state.isVisible;
                var isDestroyed = instance.state.isDestroyed;
                var isDisabled = !instance.state.isEnabled;
                var isTouchAndTouchDisabled = currentInput.isTouch && !instance.props.touch;
                var duration = getValueAtIndexOrReturn(instance.props.duration, 0, defaultProps.duration);
                if (isAlreadyVisible || isDestroyed || isDisabled || isTouchAndTouchDisabled) {
                  return;
                } // Normalize `disabled` behavior across browsers.
                // Firefox allows events on disabled elements, but Chrome doesn't.
                // Using a wrapper element (i.e. <span>) is recommended.
                if (getCurrentTarget().hasAttribute('disabled')) {
                  return;
                }
                invokeHook('onShow', [instance], false);
                if (instance.props.onShow(instance) === false) {
                  return;
                }
                instance.state.isVisible = true;
                if (getIsDefaultRenderFn()) {
                  popper.style.visibility = 'visible';
                }
                handleStyles();
                addDocumentPress();
                if (!instance.state.isMounted) {
                  popper.style.transition = 'none';
                } // If flipping to the opposite side after hiding at least once, the
                // animation will use the wrong placement without resetting the duration
                if (getIsDefaultRenderFn()) {
                  var _getDefaultTemplateCh2 = getDefaultTemplateChildren(),
                    box = _getDefaultTemplateCh2.box,
                    content = _getDefaultTemplateCh2.content;
                  setTransitionDuration([box, content], 0);
                }
                onFirstUpdate = function onFirstUpdate() {
                  var _instance$popperInsta2;
                  if (!instance.state.isVisible || ignoreOnFirstUpdate) {
                    return;
                  }
                  ignoreOnFirstUpdate = true; // reflow
                  void popper.offsetHeight;
                  popper.style.transition = instance.props.moveTransition;
                  if (getIsDefaultRenderFn() && instance.props.animation) {
                    var _getDefaultTemplateCh3 = getDefaultTemplateChildren(),
                      _box = _getDefaultTemplateCh3.box,
                      _content = _getDefaultTemplateCh3.content;
                    setTransitionDuration([_box, _content], duration);
                    setVisibilityState([_box, _content], 'visible');
                  }
                  handleAriaContentAttribute();
                  handleAriaExpandedAttribute();
                  pushIfUnique(mountedInstances, instance); // certain modifiers (e.g. `maxSize`) require a second update after the
                  // popper has been positioned for the first time
                  (_instance$popperInsta2 = instance.popperInstance) == null ? void 0 : _instance$popperInsta2.forceUpdate();
                  invokeHook('onMount', [instance]);
                  if (instance.props.animation && getIsDefaultRenderFn()) {
                    onTransitionedIn(duration, function () {
                      instance.state.isShown = true;
                      invokeHook('onShown', [instance]);
                    });
                  }
                };
                mount();
              }
              function hide() {
                /* istanbul ignore else */
                {
                  warnWhen(instance.state.isDestroyed, createMemoryLeakWarning('hide'));
                } // Early bail-out
                var isAlreadyHidden = !instance.state.isVisible;
                var isDestroyed = instance.state.isDestroyed;
                var isDisabled = !instance.state.isEnabled;
                var duration = getValueAtIndexOrReturn(instance.props.duration, 1, defaultProps.duration);
                if (isAlreadyHidden || isDestroyed || isDisabled) {
                  return;
                }
                invokeHook('onHide', [instance], false);
                if (instance.props.onHide(instance) === false) {
                  return;
                }
                instance.state.isVisible = false;
                instance.state.isShown = false;
                ignoreOnFirstUpdate = false;
                isVisibleFromClick = false;
                if (getIsDefaultRenderFn()) {
                  popper.style.visibility = 'hidden';
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
                    setVisibilityState([box, content], 'hidden');
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
                /* istanbul ignore else */
                {
                  warnWhen(instance.state.isDestroyed, createMemoryLeakWarning('hideWithInteractivity'));
                }
                getDocument().addEventListener('mousemove', debouncedOnMouseMove);
                pushIfUnique(mouseMoveListeners, debouncedOnMouseMove);
                debouncedOnMouseMove(event);
              }
              function unmount() {
                /* istanbul ignore else */
                {
                  warnWhen(instance.state.isDestroyed, createMemoryLeakWarning('unmount'));
                }
                if (instance.state.isVisible) {
                  instance.hide();
                }
                if (!instance.state.isMounted) {
                  return;
                }
                destroyPopperInstance(); // If a popper is not interactive, it will be appended outside the popper
                // tree by default. This seems mainly for interactive tippies, but we should
                // find a workaround if possible
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
                invokeHook('onHidden', [instance]);
              }
              function destroy() {
                /* istanbul ignore else */
                {
                  warnWhen(instance.state.isDestroyed, createMemoryLeakWarning('destroy'));
                }
                if (instance.state.isDestroyed) {
                  return;
                }
                instance.clearDelayTimeouts();
                instance.unmount();
                removeListeners();
                delete reference._tippy;
                instance.state.isDestroyed = true;
                invokeHook('onDestroy', [instance]);
              }
            }
            function tippy(targets, optionalProps) {
              if (optionalProps === void 0) {
                optionalProps = {};
              }
              var plugins = defaultProps.plugins.concat(optionalProps.plugins || []);
              /* istanbul ignore else */
              {
                validateTargets(targets);
                validateProps(optionalProps, plugins);
              }
              bindGlobalEventListeners();
              var passedProps = Object.assign({}, optionalProps, {
                plugins: plugins
              });
              var elements = getArrayOfElements(targets);
              /* istanbul ignore else */
              {
                var isSingleContentElement = isElement(passedProps.content);
                var isMoreThanOneReferenceElement = elements.length > 1;
                warnWhen(isSingleContentElement && isMoreThanOneReferenceElement, ['tippy() was passed an Element as the `content` prop, but more than', 'one tippy instance was created by this invocation. This means the', 'content element will only be appended to the last tippy instance.', '\n\n', 'Instead, pass the .innerHTML of the element, or use a function that', 'returns a cloned version of the element instead.', '\n\n', '1) content: element.innerHTML\n', '2) content: () => element.cloneNode(true)'].join(' '));
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
            var hideAll = function hideAll(_temp) {
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
                    duration: duration
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
            // every time the popper is destroyed (i.e. a new target), removing the styles
            // and causing transitions to break for singletons when the console is open, but
            // most notably for non-transform styles being used, `gpuAcceleration: false`.
            var applyStylesModifier = Object.assign({}, core.applyStyles, {
              effect: function effect(_ref) {
                var state = _ref.state;
                var initialStyles = {
                  popper: {
                    position: state.options.strategy,
                    left: '0',
                    top: '0',
                    margin: '0'
                  },
                  arrow: {
                    position: 'absolute'
                  },
                  reference: {}
                };
                Object.assign(state.elements.popper.style, initialStyles.popper);
                state.styles = initialStyles;
                if (state.elements.arrow) {
                  Object.assign(state.elements.arrow.style, initialStyles.arrow);
                } // intentionally return no cleanup function
                // return () => { ... }
              }
            });

            var createSingleton = function createSingleton(tippyInstances, optionalProps) {
              var _optionalProps$popper;
              if (optionalProps === void 0) {
                optionalProps = {};
              }
              /* istanbul ignore else */
              {
                errorWhen(!Array.isArray(tippyInstances), ['The first argument passed to createSingleton() must be an array of', 'tippy instances. The passed value was', String(tippyInstances)].join(' '));
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
              function interceptSetProps(singleton) {
                return individualInstances.map(function (instance) {
                  var originalSetProps = instance.setProps;
                  instance.setProps = function (props) {
                    originalSetProps(props);
                    if (instance.reference === currentTarget) {
                      singleton.setProps(props);
                    }
                  };
                  return function () {
                    instance.setProps = originalSetProps;
                  };
                });
              } // have to pass singleton, as it maybe undefined on first call
              function prepareInstance(singleton, target) {
                var index = triggerTargets.indexOf(target); // bail-out
                if (target === currentTarget) {
                  return;
                }
                currentTarget = target;
                var overrideProps = (overrides || []).concat('content').reduce(function (acc, prop) {
                  acc[prop] = individualInstances[index].props[prop];
                  return acc;
                }, {});
                singleton.setProps(Object.assign({}, overrideProps, {
                  getReferenceClientRect: typeof overrideProps.getReferenceClientRect === 'function' ? overrideProps.getReferenceClientRect : function () {
                    var _references$index;
                    return (_references$index = references[index]) == null ? void 0 : _references$index.getBoundingClientRect();
                  }
                }));
              }
              enableInstances(false);
              setReferences();
              setTriggerTargets();
              var plugin = {
                fn: function fn() {
                  return {
                    onDestroy: function onDestroy() {
                      enableInstances(true);
                    },
                    onHidden: function onHidden() {
                      currentTarget = null;
                    },
                    onClickOutside: function onClickOutside(instance) {
                      if (instance.props.showOnCreate && !shownOnCreate) {
                        shownOnCreate = true;
                        currentTarget = null;
                      }
                    },
                    onShow: function onShow(instance) {
                      if (instance.props.showOnCreate && !shownOnCreate) {
                        shownOnCreate = true;
                        prepareInstance(instance, references[0]);
                      }
                    },
                    onTrigger: function onTrigger(instance, event) {
                      prepareInstance(instance, event.currentTarget);
                    }
                  };
                }
              };
              var singleton = tippy(div(), Object.assign({}, removeProperties(optionalProps, ['overrides']), {
                plugins: [plugin].concat(optionalProps.plugins || []),
                triggerTarget: triggerTargets,
                popperOptions: Object.assign({}, optionalProps.popperOptions, {
                  modifiers: [].concat(((_optionalProps$popper = optionalProps.popperOptions) == null ? void 0 : _optionalProps$popper.modifiers) || [], [applyStylesModifier])
                })
              }));
              var originalShow = singleton.show;
              singleton.show = function (target) {
                originalShow(); // first time, showOnCreate or programmatic call with no params
                // default to showing first instance
                if (!currentTarget && target == null) {
                  return prepareInstance(singleton, references[0]);
                } // triggered from event (do nothing as prepareInstance already called by onTrigger)
                // programmatic call with no params when already visible (do nothing again)
                if (currentTarget && target == null) {
                  return;
                } // target is index of instance
                if (typeof target === 'number') {
                  return references[target] && prepareInstance(singleton, references[target]);
                } // target is a child tippy instance
                if (individualInstances.indexOf(target) >= 0) {
                  var ref = target.reference;
                  return prepareInstance(singleton, ref);
                } // target is a ReferenceElement
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
                interceptSetPropsCleanups.forEach(function (fn) {
                  return fn();
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
              mouseover: 'mouseenter',
              focusin: 'focus',
              click: 'click'
            };
            /**
             * Creates a delegate instance that controls the creation of tippy instances
             * for child elements (`target` CSS selector).
             */
            function delegate(targets, props) {
              /* istanbul ignore else */
              {
                errorWhen(!(props && props.target), ['You must specity a `target` prop indicating a CSS selector string matching', 'the target elements that should receive a tippy.'].join(' '));
              }
              var listeners = [];
              var childTippyInstances = [];
              var disabled = false;
              var target = props.target;
              var nativeProps = removeProperties(props, ['target']);
              var parentProps = Object.assign({}, nativeProps, {
                trigger: 'manual',
                touch: false
              });
              var childProps = Object.assign({
                touch: defaultProps.touch
              }, nativeProps, {
                showOnCreate: true
              });
              var returnValue = tippy(targets, parentProps);
              var normalizedReturnValue = normalizeToArray(returnValue);
              function onTrigger(event) {
                if (!event.target || disabled) {
                  return;
                }
                var targetNode = event.target.closest(target);
                if (!targetNode) {
                  return;
                } // Get relevant trigger with fallbacks:
                // 1. Check `data-tippy-trigger` attribute on target node
                // 2. Fallback to `trigger` passed to `delegate()`
                // 3. Fallback to `defaultProps.trigger`
                var trigger = targetNode.getAttribute('data-tippy-trigger') || props.trigger || defaultProps.trigger; // @ts-ignore
                if (targetNode._tippy) {
                  return;
                }
                if (event.type === 'touchstart' && typeof childProps.touch === 'boolean') {
                  return;
                }
                if (event.type !== 'touchstart' && trigger.indexOf(BUBBLING_EVENTS_MAP[event.type]) < 0) {
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
                  node: node,
                  eventType: eventType,
                  handler: handler,
                  options: options
                });
              }
              function addEventListeners(instance) {
                var reference = instance.reference;
                on(reference, 'touchstart', onTrigger, TOUCH_OPTIONS);
                on(reference, 'mouseover', onTrigger);
                on(reference, 'focusin', onTrigger);
                on(reference, 'click', onTrigger);
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
                    childTippyInstances.forEach(function (instance) {
                      instance.destroy();
                    });
                  }
                  childTippyInstances = [];
                  removeEventListeners();
                  originalDestroy();
                };
                instance.enable = function () {
                  originalEnable();
                  childTippyInstances.forEach(function (instance) {
                    return instance.enable();
                  });
                  disabled = false;
                };
                instance.disable = function () {
                  originalDisable();
                  childTippyInstances.forEach(function (instance) {
                    return instance.disable();
                  });
                  disabled = true;
                };
                addEventListeners(instance);
              }
              normalizedReturnValue.forEach(applyMutations);
              return returnValue;
            }
            var animateFill = {
              name: 'animateFill',
              defaultValue: false,
              fn: function fn(instance) {
                var _instance$props$rende;
                // @ts-ignore
                if (!((_instance$props$rende = instance.props.render) != null && _instance$props$rende.$$tippy)) {
                  {
                    errorWhen(instance.props.animateFill, 'The `animateFill` plugin requires the default render function.');
                  }
                  return {};
                }
                var _getChildren = getChildren(instance.popper),
                  box = _getChildren.box,
                  content = _getChildren.content;
                var backdrop = instance.props.animateFill ? createBackdropElement() : null;
                return {
                  onCreate: function onCreate() {
                    if (backdrop) {
                      box.insertBefore(backdrop, box.firstElementChild);
                      box.setAttribute('data-animatefill', '');
                      box.style.overflow = 'hidden';
                      instance.setProps({
                        arrow: false,
                        animation: 'shift-away'
                      });
                    }
                  },
                  onMount: function onMount() {
                    if (backdrop) {
                      var transitionDuration = box.style.transitionDuration;
                      var duration = Number(transitionDuration.replace('ms', '')); // The content should fade in after the backdrop has mostly filled the
                      // tooltip element. `clip-path` is the other alternative but is not
                      // well-supported and is buggy on some devices.
                      content.style.transitionDelay = Math.round(duration / 10) + "ms";
                      backdrop.style.transitionDuration = transitionDuration;
                      setVisibilityState([backdrop], 'visible');
                    }
                  },
                  onShow: function onShow() {
                    if (backdrop) {
                      backdrop.style.transitionDuration = '0ms';
                    }
                  },
                  onHide: function onHide() {
                    if (backdrop) {
                      setVisibilityState([backdrop], 'hidden');
                    }
                  }
                };
              }
            };
            function createBackdropElement() {
              var backdrop = div();
              backdrop.className = BACKDROP_CLASS;
              setVisibilityState([backdrop], 'hidden');
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
                clientX: clientX,
                clientY: clientY
              };
            }
            function addMouseCoordsListener(doc) {
              doc.addEventListener('mousemove', storeMouseCoords);
            }
            function removeMouseCoordsListener(doc) {
              doc.removeEventListener('mousemove', storeMouseCoords);
            }
            var followCursor = {
              name: 'followCursor',
              defaultValue: false,
              fn: function fn(instance) {
                var reference = instance.reference;
                var doc = getOwnerDocument(instance.props.triggerTarget || reference);
                var isInternalUpdate = false;
                var wasFocusEvent = false;
                var isUnmounted = true;
                var prevProps = instance.props;
                function getIsInitialBehavior() {
                  return instance.props.followCursor === 'initial' && instance.state.isVisible;
                }
                function addListener() {
                  doc.addEventListener('mousemove', onMouseMove);
                }
                function removeListener() {
                  doc.removeEventListener('mousemove', onMouseMove);
                }
                function unsetGetReferenceClientRect() {
                  isInternalUpdate = true;
                  instance.setProps({
                    getReferenceClientRect: null
                  });
                  isInternalUpdate = false;
                }
                function onMouseMove(event) {
                  // If the instance is interactive, avoid updating the position unless it's
                  // over the reference element
                  var isCursorOverReference = event.target ? reference.contains(event.target) : true;
                  var followCursor = instance.props.followCursor;
                  var clientX = event.clientX,
                    clientY = event.clientY;
                  var rect = reference.getBoundingClientRect();
                  var relativeX = clientX - rect.left;
                  var relativeY = clientY - rect.top;
                  if (isCursorOverReference || !instance.props.interactive) {
                    instance.setProps({
                      // @ts-ignore - unneeded DOMRect properties
                      getReferenceClientRect: function getReferenceClientRect() {
                        var rect = reference.getBoundingClientRect();
                        var x = clientX;
                        var y = clientY;
                        if (followCursor === 'initial') {
                          x = rect.left + relativeX;
                          y = rect.top + relativeY;
                        }
                        var top = followCursor === 'horizontal' ? rect.top : y;
                        var right = followCursor === 'vertical' ? rect.right : x;
                        var bottom = followCursor === 'horizontal' ? rect.bottom : y;
                        var left = followCursor === 'vertical' ? rect.left : x;
                        return {
                          width: right - left,
                          height: bottom - top,
                          top: top,
                          right: right,
                          bottom: bottom,
                          left: left
                        };
                      }
                    });
                  }
                }
                function create() {
                  if (instance.props.followCursor) {
                    activeInstances.push({
                      instance: instance,
                      doc: doc
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
                  onBeforeUpdate: function onBeforeUpdate() {
                    prevProps = instance.props;
                  },
                  onAfterUpdate: function onAfterUpdate(_, _ref2) {
                    var followCursor = _ref2.followCursor;
                    if (isInternalUpdate) {
                      return;
                    }
                    if (followCursor !== undefined && prevProps.followCursor !== followCursor) {
                      destroy();
                      if (followCursor) {
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
                  onMount: function onMount() {
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
                  onTrigger: function onTrigger(_, event) {
                    if (isMouseEvent(event)) {
                      mouseCoords = {
                        clientX: event.clientX,
                        clientY: event.clientY
                      };
                    }
                    wasFocusEvent = event.type === 'focus';
                  },
                  onHidden: function onHidden() {
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
              name: 'inlinePositioning',
              defaultValue: false,
              fn: function fn(instance) {
                var reference = instance.reference;
                function isEnabled() {
                  return !!instance.props.inlinePositioning;
                }
                var placement;
                var cursorRectIndex = -1;
                var isInternalUpdate = false;
                var triedPlacements = [];
                var modifier = {
                  name: 'tippyInlinePositioning',
                  enabled: true,
                  phase: 'afterWrite',
                  fn: function fn(_ref2) {
                    var state = _ref2.state;
                    if (isEnabled()) {
                      if (triedPlacements.indexOf(state.placement) !== -1) {
                        triedPlacements = [];
                      }
                      if (placement !== state.placement && triedPlacements.indexOf(state.placement) === -1) {
                        triedPlacements.push(state.placement);
                        instance.setProps({
                          // @ts-ignore - unneeded DOMRect properties
                          getReferenceClientRect: function getReferenceClientRect() {
                            return _getReferenceClientRect(state.placement);
                          }
                        });
                      }
                      placement = state.placement;
                    }
                  }
                };
                function _getReferenceClientRect(placement) {
                  return getInlineBoundingClientRect(getBasePlacement(placement), reference.getBoundingClientRect(), arrayFrom(reference.getClientRects()), cursorRectIndex);
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
                  onTrigger: function onTrigger(_, event) {
                    if (isMouseEvent(event)) {
                      var rects = arrayFrom(instance.reference.getClientRects());
                      var cursorRect = rects.find(function (rect) {
                        return rect.left - 2 <= event.clientX && rect.right + 2 >= event.clientX && rect.top - 2 <= event.clientY && rect.bottom + 2 >= event.clientY;
                      });
                      var index = rects.indexOf(cursorRect);
                      cursorRectIndex = index > -1 ? index : cursorRectIndex;
                    }
                  },
                  onHidden: function onHidden() {
                    cursorRectIndex = -1;
                  }
                };
              }
            };
            function getInlineBoundingClientRect(currentBasePlacement, boundingRect, clientRects, cursorRectIndex) {
              // Not an inline element, or placement is not yet known
              if (clientRects.length < 2 || currentBasePlacement === null) {
                return boundingRect;
              } // There are two rects and they are disjoined
              if (clientRects.length === 2 && cursorRectIndex >= 0 && clientRects[0].left > clientRects[1].right) {
                return clientRects[cursorRectIndex] || boundingRect;
              }
              switch (currentBasePlacement) {
                case 'top':
                case 'bottom':
                  {
                    var firstRect = clientRects[0];
                    var lastRect = clientRects[clientRects.length - 1];
                    var isTop = currentBasePlacement === 'top';
                    var top = firstRect.top;
                    var bottom = lastRect.bottom;
                    var left = isTop ? firstRect.left : lastRect.left;
                    var right = isTop ? firstRect.right : lastRect.right;
                    var width = right - left;
                    var height = bottom - top;
                    return {
                      top: top,
                      bottom: bottom,
                      left: left,
                      right: right,
                      width: width,
                      height: height
                    };
                  }
                case 'left':
                case 'right':
                  {
                    var minLeft = Math.min.apply(Math, clientRects.map(function (rects) {
                      return rects.left;
                    }));
                    var maxRight = Math.max.apply(Math, clientRects.map(function (rects) {
                      return rects.right;
                    }));
                    var measureRects = clientRects.filter(function (rect) {
                      return currentBasePlacement === 'left' ? rect.left === minLeft : rect.right === maxRight;
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
              name: 'sticky',
              defaultValue: false,
              fn: function fn(instance) {
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
                  var currentRefRect = shouldCheck('reference') ? getReference().getBoundingClientRect() : null;
                  var currentPopRect = shouldCheck('popper') ? popper.getBoundingClientRect() : null;
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
                  onMount: function onMount() {
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
              plugins: [animateFill, followCursor, inlinePositioning, sticky],
              render: render
            });
            tippy.createSingleton = createSingleton;
            tippy.delegate = delegate;
            tippy.hideAll = hideAll;
            tippy.roundArrow = ROUND_ARROW;
            return tippy;
          });

          //# sourceMappingURL=control.js.map
        }
      });

      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {};
      _export("__beyond_pkg", __beyond_pkg = __pkg);
      _export("hmr", hmr = new function () {
        this.on = (event, listener) => __pkg.hmr.on(event, listener);
        this.off = (event, listener) => __pkg.hmr.off(event, listener);
      }());
      __pkg.initialise(ims);
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJnbG9iYWwiLCJmYWN0b3J5IiwiZXhwb3J0cyIsIm1vZHVsZSIsInJlcXVpcmUiLCJkZWZpbmUiLCJhbWQiLCJzZWxmIiwidGlwcHkiLCJQb3BwZXIiLCJjb3JlIiwiUk9VTkRfQVJST1ciLCJCT1hfQ0xBU1MiLCJDT05URU5UX0NMQVNTIiwiQkFDS0RST1BfQ0xBU1MiLCJBUlJPV19DTEFTUyIsIlNWR19BUlJPV19DTEFTUyIsIlRPVUNIX09QVElPTlMiLCJwYXNzaXZlIiwiY2FwdHVyZSIsIlRJUFBZX0RFRkFVTFRfQVBQRU5EX1RPIiwiZG9jdW1lbnQiLCJib2R5IiwiaGFzT3duUHJvcGVydHkiLCJvYmoiLCJrZXkiLCJjYWxsIiwiZ2V0VmFsdWVBdEluZGV4T3JSZXR1cm4iLCJ2YWx1ZSIsImluZGV4IiwiZGVmYXVsdFZhbHVlIiwiQXJyYXkiLCJpc0FycmF5IiwidiIsImlzVHlwZSIsInR5cGUiLCJzdHIiLCJ0b1N0cmluZyIsImluZGV4T2YiLCJpbnZva2VXaXRoQXJnc09yUmV0dXJuIiwiYXJncyIsImFwcGx5IiwiZGVib3VuY2UiLCJmbiIsIm1zIiwidGltZW91dCIsImFyZyIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJyZW1vdmVQcm9wZXJ0aWVzIiwia2V5cyIsImNsb25lIiwiT2JqZWN0IiwiYXNzaWduIiwiZm9yRWFjaCIsInNwbGl0QnlTcGFjZXMiLCJzcGxpdCIsImZpbHRlciIsIkJvb2xlYW4iLCJub3JtYWxpemVUb0FycmF5IiwiY29uY2F0IiwicHVzaElmVW5pcXVlIiwiYXJyIiwicHVzaCIsInVuaXF1ZSIsIml0ZW0iLCJnZXRCYXNlUGxhY2VtZW50IiwicGxhY2VtZW50IiwiYXJyYXlGcm9tIiwic2xpY2UiLCJyZW1vdmVVbmRlZmluZWRQcm9wcyIsInJlZHVjZSIsImFjYyIsInVuZGVmaW5lZCIsImRpdiIsImNyZWF0ZUVsZW1lbnQiLCJpc0VsZW1lbnQiLCJzb21lIiwiaXNOb2RlTGlzdCIsImlzTW91c2VFdmVudCIsImlzUmVmZXJlbmNlRWxlbWVudCIsIl90aXBweSIsInJlZmVyZW5jZSIsImdldEFycmF5T2ZFbGVtZW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzZXRUcmFuc2l0aW9uRHVyYXRpb24iLCJlbHMiLCJlbCIsInN0eWxlIiwidHJhbnNpdGlvbkR1cmF0aW9uIiwic2V0VmlzaWJpbGl0eVN0YXRlIiwic3RhdGUiLCJzZXRBdHRyaWJ1dGUiLCJnZXRPd25lckRvY3VtZW50IiwiZWxlbWVudE9yRWxlbWVudHMiLCJfZWxlbWVudCRvd25lckRvY3VtZW4iLCJfbm9ybWFsaXplVG9BcnJheSIsImVsZW1lbnQiLCJvd25lckRvY3VtZW50IiwiaXNDdXJzb3JPdXRzaWRlSW50ZXJhY3RpdmVCb3JkZXIiLCJwb3BwZXJUcmVlRGF0YSIsImV2ZW50IiwiY2xpZW50WCIsImNsaWVudFkiLCJldmVyeSIsIl9yZWYiLCJwb3BwZXJSZWN0IiwicG9wcGVyU3RhdGUiLCJwcm9wcyIsImludGVyYWN0aXZlQm9yZGVyIiwiYmFzZVBsYWNlbWVudCIsIm9mZnNldERhdGEiLCJtb2RpZmllcnNEYXRhIiwib2Zmc2V0IiwidG9wRGlzdGFuY2UiLCJ0b3AiLCJ5IiwiYm90dG9tRGlzdGFuY2UiLCJib3R0b20iLCJsZWZ0RGlzdGFuY2UiLCJsZWZ0IiwieCIsInJpZ2h0RGlzdGFuY2UiLCJyaWdodCIsImV4Y2VlZHNUb3AiLCJleGNlZWRzQm90dG9tIiwiZXhjZWVkc0xlZnQiLCJleGNlZWRzUmlnaHQiLCJ1cGRhdGVUcmFuc2l0aW9uRW5kTGlzdGVuZXIiLCJib3giLCJhY3Rpb24iLCJsaXN0ZW5lciIsIm1ldGhvZCIsImFjdHVhbENvbnRhaW5zIiwicGFyZW50IiwiY2hpbGQiLCJ0YXJnZXQiLCJfdGFyZ2V0JGdldFJvb3ROb2RlIiwiY29udGFpbnMiLCJnZXRSb290Tm9kZSIsImhvc3QiLCJjdXJyZW50SW5wdXQiLCJpc1RvdWNoIiwibGFzdE1vdXNlTW92ZVRpbWUiLCJvbkRvY3VtZW50VG91Y2hTdGFydCIsIndpbmRvdyIsInBlcmZvcm1hbmNlIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9uRG9jdW1lbnRNb3VzZU1vdmUiLCJub3ciLCJyZW1vdmVFdmVudExpc3RlbmVyIiwib25XaW5kb3dCbHVyIiwiYWN0aXZlRWxlbWVudCIsImluc3RhbmNlIiwiYmx1ciIsImlzVmlzaWJsZSIsImJpbmRHbG9iYWxFdmVudExpc3RlbmVycyIsImlzQnJvd3NlciIsImlzSUUxMSIsIm1zQ3J5cHRvIiwiY3JlYXRlTWVtb3J5TGVha1dhcm5pbmciLCJ0eHQiLCJqb2luIiwiY2xlYW4iLCJzcGFjZXNBbmRUYWJzIiwibGluZVN0YXJ0V2l0aFNwYWNlcyIsInJlcGxhY2UiLCJ0cmltIiwiZ2V0RGV2TWVzc2FnZSIsIm1lc3NhZ2UiLCJnZXRGb3JtYXR0ZWRNZXNzYWdlIiwidmlzaXRlZE1lc3NhZ2VzIiwicmVzZXRWaXNpdGVkTWVzc2FnZXMiLCJTZXQiLCJ3YXJuV2hlbiIsImNvbmRpdGlvbiIsImhhcyIsIl9jb25zb2xlIiwiYWRkIiwiY29uc29sZSIsIndhcm4iLCJlcnJvcldoZW4iLCJfY29uc29sZTIiLCJlcnJvciIsInZhbGlkYXRlVGFyZ2V0cyIsInRhcmdldHMiLCJkaWRQYXNzRmFsc3lWYWx1ZSIsImRpZFBhc3NQbGFpbk9iamVjdCIsInByb3RvdHlwZSIsIlN0cmluZyIsInBsdWdpblByb3BzIiwiYW5pbWF0ZUZpbGwiLCJmb2xsb3dDdXJzb3IiLCJpbmxpbmVQb3NpdGlvbmluZyIsInN0aWNreSIsInJlbmRlclByb3BzIiwiYWxsb3dIVE1MIiwiYW5pbWF0aW9uIiwiYXJyb3ciLCJjb250ZW50IiwiaW5lcnRpYSIsIm1heFdpZHRoIiwicm9sZSIsInRoZW1lIiwiekluZGV4IiwiZGVmYXVsdFByb3BzIiwiYXBwZW5kVG8iLCJhcmlhIiwiZXhwYW5kZWQiLCJkZWxheSIsImR1cmF0aW9uIiwiZ2V0UmVmZXJlbmNlQ2xpZW50UmVjdCIsImhpZGVPbkNsaWNrIiwiaWdub3JlQXR0cmlidXRlcyIsImludGVyYWN0aXZlIiwiaW50ZXJhY3RpdmVEZWJvdW5jZSIsIm1vdmVUcmFuc2l0aW9uIiwib25BZnRlclVwZGF0ZSIsIm9uQmVmb3JlVXBkYXRlIiwib25DcmVhdGUiLCJvbkRlc3Ryb3kiLCJvbkhpZGRlbiIsIm9uSGlkZSIsIm9uTW91bnQiLCJvblNob3ciLCJvblNob3duIiwib25UcmlnZ2VyIiwib25VbnRyaWdnZXIiLCJvbkNsaWNrT3V0c2lkZSIsInBsdWdpbnMiLCJwb3BwZXJPcHRpb25zIiwicmVuZGVyIiwic2hvd09uQ3JlYXRlIiwidG91Y2giLCJ0cmlnZ2VyIiwidHJpZ2dlclRhcmdldCIsImRlZmF1bHRLZXlzIiwic2V0RGVmYXVsdFByb3BzIiwicGFydGlhbFByb3BzIiwidmFsaWRhdGVQcm9wcyIsImdldEV4dGVuZGVkUGFzc2VkUHJvcHMiLCJwYXNzZWRQcm9wcyIsInBsdWdpbiIsIm5hbWUiLCJfbmFtZSIsImdldERhdGFBdHRyaWJ1dGVQcm9wcyIsInByb3BLZXlzIiwidmFsdWVBc1N0cmluZyIsImdldEF0dHJpYnV0ZSIsIkpTT04iLCJwYXJzZSIsImUiLCJldmFsdWF0ZVByb3BzIiwib3V0IiwicHJvcCIsIm5vblBsdWdpblByb3BzIiwiZGlkUGFzc1Vua25vd25Qcm9wIiwibGVuZ3RoIiwiaW5uZXJIVE1MIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJodG1sIiwiY3JlYXRlQXJyb3dFbGVtZW50IiwiY2xhc3NOYW1lIiwiYXBwZW5kQ2hpbGQiLCJzZXRDb250ZW50IiwidGV4dENvbnRlbnQiLCJnZXRDaGlsZHJlbiIsInBvcHBlciIsImZpcnN0RWxlbWVudENoaWxkIiwiYm94Q2hpbGRyZW4iLCJjaGlsZHJlbiIsImZpbmQiLCJub2RlIiwiY2xhc3NMaXN0IiwiYmFja2Ryb3AiLCJvblVwZGF0ZSIsInByZXZQcm9wcyIsIm5leHRQcm9wcyIsIl9nZXRDaGlsZHJlbiIsInJlbW92ZUF0dHJpYnV0ZSIsInJlbW92ZUNoaWxkIiwiJCR0aXBweSIsImlkQ291bnRlciIsIm1vdXNlTW92ZUxpc3RlbmVycyIsIm1vdW50ZWRJbnN0YW5jZXMiLCJjcmVhdGVUaXBweSIsInNob3dUaW1lb3V0IiwiaGlkZVRpbWVvdXQiLCJzY2hlZHVsZUhpZGVBbmltYXRpb25GcmFtZSIsImlzVmlzaWJsZUZyb21DbGljayIsImRpZEhpZGVEdWVUb0RvY3VtZW50TW91c2VEb3duIiwiZGlkVG91Y2hNb3ZlIiwiaWdub3JlT25GaXJzdFVwZGF0ZSIsImxhc3RUcmlnZ2VyRXZlbnQiLCJjdXJyZW50VHJhbnNpdGlvbkVuZExpc3RlbmVyIiwib25GaXJzdFVwZGF0ZSIsImxpc3RlbmVycyIsImRlYm91bmNlZE9uTW91c2VNb3ZlIiwib25Nb3VzZU1vdmUiLCJjdXJyZW50VGFyZ2V0IiwiaWQiLCJwb3BwZXJJbnN0YW5jZSIsImlzRW5hYmxlZCIsImlzRGVzdHJveWVkIiwiaXNNb3VudGVkIiwiaXNTaG93biIsImNsZWFyRGVsYXlUaW1lb3V0cyIsInNldFByb3BzIiwic2hvdyIsImhpZGUiLCJoaWRlV2l0aEludGVyYWN0aXZpdHkiLCJlbmFibGUiLCJkaXNhYmxlIiwidW5tb3VudCIsImRlc3Ryb3kiLCJfcHJvcHMkcmVuZGVyIiwicGx1Z2luc0hvb2tzIiwibWFwIiwiaGFzQXJpYUV4cGFuZGVkIiwiaGFzQXR0cmlidXRlIiwiYWRkTGlzdGVuZXJzIiwiaGFuZGxlQXJpYUV4cGFuZGVkQXR0cmlidXRlIiwiaGFuZGxlU3R5bGVzIiwiaW52b2tlSG9vayIsInNjaGVkdWxlU2hvdyIsImdldERvY3VtZW50IiwiZ2V0Tm9ybWFsaXplZFRvdWNoU2V0dGluZ3MiLCJnZXRJc0N1c3RvbVRvdWNoQmVoYXZpb3IiLCJnZXRJc0RlZmF1bHRSZW5kZXJGbiIsIl9pbnN0YW5jZSRwcm9wcyRyZW5kZSIsImdldEN1cnJlbnRUYXJnZXQiLCJwYXJlbnROb2RlIiwiZ2V0RGVmYXVsdFRlbXBsYXRlQ2hpbGRyZW4iLCJnZXREZWxheSIsImlzU2hvdyIsImZyb21IaWRlIiwicG9pbnRlckV2ZW50cyIsImhvb2siLCJzaG91bGRJbnZva2VQcm9wc0hvb2siLCJwbHVnaW5Ib29rcyIsIl9pbnN0YW5jZSRwcm9wcyIsImhhbmRsZUFyaWFDb250ZW50QXR0cmlidXRlIiwiYXR0ciIsIm5vZGVzIiwiY3VycmVudFZhbHVlIiwibmV4dFZhbHVlIiwiY2xlYW51cEludGVyYWN0aXZlTW91c2VMaXN0ZW5lcnMiLCJvbkRvY3VtZW50UHJlc3MiLCJhY3R1YWxUYXJnZXQiLCJjb21wb3NlZFBhdGgiLCJyZW1vdmVEb2N1bWVudFByZXNzIiwib25Ub3VjaE1vdmUiLCJvblRvdWNoU3RhcnQiLCJhZGREb2N1bWVudFByZXNzIiwiZG9jIiwib25UcmFuc2l0aW9uZWRPdXQiLCJjYWxsYmFjayIsIm9uVHJhbnNpdGlvbkVuZCIsIm9uVHJhbnNpdGlvbmVkSW4iLCJvbiIsImV2ZW50VHlwZSIsImhhbmRsZXIiLCJvcHRpb25zIiwib25Nb3VzZUxlYXZlIiwib25CbHVyT3JGb2N1c091dCIsInJlbW92ZUxpc3RlbmVycyIsIl9sYXN0VHJpZ2dlckV2ZW50Iiwic2hvdWxkU2NoZWR1bGVDbGlja0hpZGUiLCJpc0V2ZW50TGlzdGVuZXJTdG9wcGVkIiwid2FzRm9jdXNlZCIsInNjaGVkdWxlSGlkZSIsImlzQ3Vyc29yT3ZlclJlZmVyZW5jZU9yUG9wcGVyIiwiZ2V0TmVzdGVkUG9wcGVyVHJlZSIsIl9pbnN0YW5jZSRwb3BwZXJJbnN0YSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInNob3VsZEJhaWwiLCJyZWxhdGVkVGFyZ2V0IiwiY3JlYXRlUG9wcGVySW5zdGFuY2UiLCJkZXN0cm95UG9wcGVySW5zdGFuY2UiLCJfaW5zdGFuY2UkcHJvcHMyIiwiY29tcHV0ZWRSZWZlcmVuY2UiLCJjb250ZXh0RWxlbWVudCIsInRpcHB5TW9kaWZpZXIiLCJlbmFibGVkIiwicGhhc2UiLCJyZXF1aXJlcyIsIl9yZWYyIiwiX2dldERlZmF1bHRUZW1wbGF0ZUNoIiwiYXR0cmlidXRlcyIsIm1vZGlmaWVycyIsInBhZGRpbmciLCJhZGFwdGl2ZSIsImNyZWF0ZVBvcHBlciIsIm1vdW50IiwibmV4dEVsZW1lbnRTaWJsaW5nIiwiX2dldE5vcm1hbGl6ZWRUb3VjaFNlIiwidG91Y2hWYWx1ZSIsInRvdWNoRGVsYXkiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsIm5lc3RlZFBvcHBlciIsImZvcmNlVXBkYXRlIiwiaXNBbHJlYWR5VmlzaWJsZSIsImlzRGlzYWJsZWQiLCJpc1RvdWNoQW5kVG91Y2hEaXNhYmxlZCIsInZpc2liaWxpdHkiLCJ0cmFuc2l0aW9uIiwiX2dldERlZmF1bHRUZW1wbGF0ZUNoMiIsIl9pbnN0YW5jZSRwb3BwZXJJbnN0YTIiLCJvZmZzZXRIZWlnaHQiLCJfZ2V0RGVmYXVsdFRlbXBsYXRlQ2gzIiwiX2JveCIsIl9jb250ZW50IiwiaXNBbHJlYWR5SGlkZGVuIiwiX2dldERlZmF1bHRUZW1wbGF0ZUNoNCIsImkiLCJvcHRpb25hbFByb3BzIiwiZWxlbWVudHMiLCJpc1NpbmdsZUNvbnRlbnRFbGVtZW50IiwiaXNNb3JlVGhhbk9uZVJlZmVyZW5jZUVsZW1lbnQiLCJpbnN0YW5jZXMiLCJoaWRlQWxsIiwiX3RlbXAiLCJleGNsdWRlZFJlZmVyZW5jZU9ySW5zdGFuY2UiLCJleGNsdWRlIiwiaXNFeGNsdWRlZCIsIm9yaWdpbmFsRHVyYXRpb24iLCJhcHBseVN0eWxlc01vZGlmaWVyIiwiYXBwbHlTdHlsZXMiLCJlZmZlY3QiLCJpbml0aWFsU3R5bGVzIiwicG9zaXRpb24iLCJzdHJhdGVneSIsIm1hcmdpbiIsInN0eWxlcyIsImNyZWF0ZVNpbmdsZXRvbiIsInRpcHB5SW5zdGFuY2VzIiwiX29wdGlvbmFsUHJvcHMkcG9wcGVyIiwiaW5kaXZpZHVhbEluc3RhbmNlcyIsInJlZmVyZW5jZXMiLCJ0cmlnZ2VyVGFyZ2V0cyIsIm92ZXJyaWRlcyIsImludGVyY2VwdFNldFByb3BzQ2xlYW51cHMiLCJzaG93bk9uQ3JlYXRlIiwic2V0VHJpZ2dlclRhcmdldHMiLCJzZXRSZWZlcmVuY2VzIiwiZW5hYmxlSW5zdGFuY2VzIiwiaW50ZXJjZXB0U2V0UHJvcHMiLCJzaW5nbGV0b24iLCJvcmlnaW5hbFNldFByb3BzIiwicHJlcGFyZUluc3RhbmNlIiwib3ZlcnJpZGVQcm9wcyIsIl9yZWZlcmVuY2VzJGluZGV4Iiwib3JpZ2luYWxTaG93IiwicmVmIiwic2hvd05leHQiLCJmaXJzdCIsInNob3dQcmV2aW91cyIsImxhc3QiLCJzZXRJbnN0YW5jZXMiLCJuZXh0SW5zdGFuY2VzIiwiQlVCQkxJTkdfRVZFTlRTX01BUCIsIm1vdXNlb3ZlciIsImZvY3VzaW4iLCJjbGljayIsImRlbGVnYXRlIiwiY2hpbGRUaXBweUluc3RhbmNlcyIsImRpc2FibGVkIiwibmF0aXZlUHJvcHMiLCJwYXJlbnRQcm9wcyIsImNoaWxkUHJvcHMiLCJyZXR1cm5WYWx1ZSIsIm5vcm1hbGl6ZWRSZXR1cm5WYWx1ZSIsInRhcmdldE5vZGUiLCJjbG9zZXN0IiwiYWRkRXZlbnRMaXN0ZW5lcnMiLCJyZW1vdmVFdmVudExpc3RlbmVycyIsImFwcGx5TXV0YXRpb25zIiwib3JpZ2luYWxEZXN0cm95Iiwib3JpZ2luYWxFbmFibGUiLCJvcmlnaW5hbERpc2FibGUiLCJzaG91bGREZXN0cm95Q2hpbGRJbnN0YW5jZXMiLCJjcmVhdGVCYWNrZHJvcEVsZW1lbnQiLCJpbnNlcnRCZWZvcmUiLCJvdmVyZmxvdyIsIk51bWJlciIsInRyYW5zaXRpb25EZWxheSIsIk1hdGgiLCJyb3VuZCIsIm1vdXNlQ29vcmRzIiwiYWN0aXZlSW5zdGFuY2VzIiwic3RvcmVNb3VzZUNvb3JkcyIsImFkZE1vdXNlQ29vcmRzTGlzdGVuZXIiLCJyZW1vdmVNb3VzZUNvb3Jkc0xpc3RlbmVyIiwiaXNJbnRlcm5hbFVwZGF0ZSIsIndhc0ZvY3VzRXZlbnQiLCJpc1VubW91bnRlZCIsImdldElzSW5pdGlhbEJlaGF2aW9yIiwiYWRkTGlzdGVuZXIiLCJyZW1vdmVMaXN0ZW5lciIsInVuc2V0R2V0UmVmZXJlbmNlQ2xpZW50UmVjdCIsImlzQ3Vyc29yT3ZlclJlZmVyZW5jZSIsInJlY3QiLCJyZWxhdGl2ZVgiLCJyZWxhdGl2ZVkiLCJ3aWR0aCIsImhlaWdodCIsImNyZWF0ZSIsImRhdGEiLCJfIiwiZ2V0UHJvcHMiLCJtb2RpZmllciIsIl9wcm9wcyRwb3BwZXJPcHRpb25zIiwiY3Vyc29yUmVjdEluZGV4IiwidHJpZWRQbGFjZW1lbnRzIiwiX2dldFJlZmVyZW5jZUNsaWVudFJlY3QiLCJnZXRJbmxpbmVCb3VuZGluZ0NsaWVudFJlY3QiLCJnZXRDbGllbnRSZWN0cyIsInNldEludGVybmFsUHJvcHMiLCJhZGRNb2RpZmllciIsInJlY3RzIiwiY3Vyc29yUmVjdCIsImN1cnJlbnRCYXNlUGxhY2VtZW50IiwiYm91bmRpbmdSZWN0IiwiY2xpZW50UmVjdHMiLCJmaXJzdFJlY3QiLCJsYXN0UmVjdCIsImlzVG9wIiwibWluTGVmdCIsIm1pbiIsIm1heFJpZ2h0IiwibWF4IiwibWVhc3VyZVJlY3RzIiwiX3RvcCIsIl9ib3R0b20iLCJfbGVmdCIsIl9yaWdodCIsIl93aWR0aCIsIl9oZWlnaHQiLCJnZXRSZWZlcmVuY2UiLCJzaG91bGRDaGVjayIsInByZXZSZWZSZWN0IiwicHJldlBvcFJlY3QiLCJ1cGRhdGVQb3NpdGlvbiIsImN1cnJlbnRSZWZSZWN0IiwiY3VycmVudFBvcFJlY3QiLCJhcmVSZWN0c0RpZmZlcmVudCIsInVwZGF0ZSIsInJlY3RBIiwicmVjdEIiLCJyb3VuZEFycm93Il0sInNvdXJjZXMiOlsiL2NvZGUvdHMvY29udHJvbC50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUE7Ozs7O1VBS0MsV0FBVUEsTUFBTSxFQUFFQyxPQUFPO1lBQ3RCLE9BQU9DLE9BQU8sS0FBSyxRQUFRLElBQUksT0FBT0MsTUFBTSxLQUFLLFdBQVcsR0FBR0EsTUFBTSxDQUFDRCxPQUFPLEdBQUdELE9BQU8sQ0FBQ0csT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUMsR0FDbEgsT0FBT0MsTUFBTSxLQUFLLFVBQVUs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