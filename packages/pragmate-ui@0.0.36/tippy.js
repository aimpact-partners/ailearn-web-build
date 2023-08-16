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
        const dependencies = new Map([["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "0.0.3"], ["@beyond-js/widgets", "0.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["socket.io-client", "4.7.1"], ["prismjs", "1.29.0"], ["swiper", "8.4.7"], ["@beyond-js/backend", "0.1.8"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["pragmate-ui", "0.0.36"], ["@aimpact/ailearn-app", "0.0.11"]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixXQUFXO1lBRTlCLE9BQU9ILEtBQUs7VUFFZCxDQUFDLENBQUUiLCJuYW1lcyI6WyJnbG9iYWwiLCJmYWN0b3J5IiwiZXhwb3J0cyIsIm1vZHVsZSIsInJlcXVpcmUiLCJkZWZpbmUiLCJhbWQiLCJzZWxmIiwidGlwcHkiLCJQb3BwZXIiLCJjb3JlIiwiUk9VTkRfQVJST1ciLCJCT1hfQ0xBU1MiLCJDT05URU5UX0NMQVNTIiwiQkFDS0RST1BfQ0xBU1MiLCJBUlJPV19DTEFTUyIsIlNWR19BUlJPV19DTEFTUyIsIlRPVUNIX09QVElPTlMiLCJwYXNzaXZlIiwiY2FwdHVyZSIsIlRJUFBZX0RFRkFVTFRfQVBQRU5EX1RPIiwiZG9jdW1lbnQiLCJib2R5IiwiaGFzT3duUHJvcGVydHkiLCJvYmoiLCJrZXkiLCJjYWxsIiwiZ2V0VmFsdWVBdEluZGV4T3JSZXR1cm4iLCJ2YWx1ZSIsImluZGV4IiwiZGVmYXVsdFZhbHVlIiwiQXJyYXkiLCJpc0FycmF5IiwidiIsImlzVHlwZSIsInR5cGUiLCJzdHIiLCJ0b1N0cmluZyIsImluZGV4T2YiLCJpbnZva2VXaXRoQXJnc09yUmV0dXJuIiwiYXJncyIsImFwcGx5IiwiZGVib3VuY2UiLCJmbiIsIm1zIiwidGltZW91dCIsImFyZyIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJyZW1vdmVQcm9wZXJ0aWVzIiwia2V5cyIsImNsb25lIiwiT2JqZWN0IiwiYXNzaWduIiwiZm9yRWFjaCIsInNwbGl0QnlTcGFjZXMiLCJzcGxpdCIsImZpbHRlciIsIkJvb2xlYW4iLCJub3JtYWxpemVUb0FycmF5IiwiY29uY2F0IiwicHVzaElmVW5pcXVlIiwiYXJyIiwicHVzaCIsInVuaXF1ZSIsIml0ZW0iLCJnZXRCYXNlUGxhY2VtZW50IiwicGxhY2VtZW50IiwiYXJyYXlGcm9tIiwic2xpY2UiLCJyZW1vdmVVbmRlZmluZWRQcm9wcyIsInJlZHVjZSIsImFjYyIsInVuZGVmaW5lZCIsImRpdiIsImNyZWF0ZUVsZW1lbnQiLCJpc0VsZW1lbnQiLCJzb21lIiwiaXNOb2RlTGlzdCIsImlzTW91c2VFdmVudCIsImlzUmVmZXJlbmNlRWxlbWVudCIsIl90aXBweSIsInJlZmVyZW5jZSIsImdldEFycmF5T2ZFbGVtZW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzZXRUcmFuc2l0aW9uRHVyYXRpb24iLCJlbHMiLCJlbCIsInN0eWxlIiwidHJhbnNpdGlvbkR1cmF0aW9uIiwic2V0VmlzaWJpbGl0eVN0YXRlIiwic3RhdGUiLCJzZXRBdHRyaWJ1dGUiLCJnZXRPd25lckRvY3VtZW50IiwiZWxlbWVudE9yRWxlbWVudHMiLCJfZWxlbWVudCRvd25lckRvY3VtZW4iLCJfbm9ybWFsaXplVG9BcnJheSIsImVsZW1lbnQiLCJvd25lckRvY3VtZW50IiwiaXNDdXJzb3JPdXRzaWRlSW50ZXJhY3RpdmVCb3JkZXIiLCJwb3BwZXJUcmVlRGF0YSIsImV2ZW50IiwiY2xpZW50WCIsImNsaWVudFkiLCJldmVyeSIsIl9yZWYiLCJwb3BwZXJSZWN0IiwicG9wcGVyU3RhdGUiLCJwcm9wcyIsImludGVyYWN0aXZlQm9yZGVyIiwiYmFzZVBsYWNlbWVudCIsIm9mZnNldERhdGEiLCJtb2RpZmllcnNEYXRhIiwib2Zmc2V0IiwidG9wRGlzdGFuY2UiLCJ0b3AiLCJ5IiwiYm90dG9tRGlzdGFuY2UiLCJib3R0b20iLCJsZWZ0RGlzdGFuY2UiLCJsZWZ0IiwieCIsInJpZ2h0RGlzdGFuY2UiLCJyaWdodCIsImV4Y2VlZHNUb3AiLCJleGNlZWRzQm90dG9tIiwiZXhjZWVkc0xlZnQiLCJleGNlZWRzUmlnaHQiLCJ1cGRhdGVUcmFuc2l0aW9uRW5kTGlzdGVuZXIiLCJib3giLCJhY3Rpb24iLCJsaXN0ZW5lciIsIm1ldGhvZCIsImFjdHVhbENvbnRhaW5zIiwicGFyZW50IiwiY2hpbGQiLCJ0YXJnZXQiLCJfdGFyZ2V0JGdldFJvb3ROb2RlIiwiY29udGFpbnMiLCJnZXRSb290Tm9kZSIsImhvc3QiLCJjdXJyZW50SW5wdXQiLCJpc1RvdWNoIiwibGFzdE1vdXNlTW92ZVRpbWUiLCJvbkRvY3VtZW50VG91Y2hTdGFydCIsIndpbmRvdyIsInBlcmZvcm1hbmNlIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9uRG9jdW1lbnRNb3VzZU1vdmUiLCJub3ciLCJyZW1vdmVFdmVudExpc3RlbmVyIiwib25XaW5kb3dCbHVyIiwiYWN0aXZlRWxlbWVudCIsImluc3RhbmNlIiwiYmx1ciIsImlzVmlzaWJsZSIsImJpbmRHbG9iYWxFdmVudExpc3RlbmVycyIsImlzQnJvd3NlciIsImlzSUUxMSIsIm1zQ3J5cHRvIiwiY3JlYXRlTWVtb3J5TGVha1dhcm5pbmciLCJ0eHQiLCJqb2luIiwiY2xlYW4iLCJzcGFjZXNBbmRUYWJzIiwibGluZVN0YXJ0V2l0aFNwYWNlcyIsInJlcGxhY2UiLCJ0cmltIiwiZ2V0RGV2TWVzc2FnZSIsIm1lc3NhZ2UiLCJnZXRGb3JtYXR0ZWRNZXNzYWdlIiwidmlzaXRlZE1lc3NhZ2VzIiwicmVzZXRWaXNpdGVkTWVzc2FnZXMiLCJTZXQiLCJ3YXJuV2hlbiIsImNvbmRpdGlvbiIsImhhcyIsIl9jb25zb2xlIiwiYWRkIiwiY29uc29sZSIsIndhcm4iLCJlcnJvcldoZW4iLCJfY29uc29sZTIiLCJlcnJvciIsInZhbGlkYXRlVGFyZ2V0cyIsInRhcmdldHMiLCJkaWRQYXNzRmFsc3lWYWx1ZSIsImRpZFBhc3NQbGFpbk9iamVjdCIsInByb3RvdHlwZSIsIlN0cmluZyIsInBsdWdpblByb3BzIiwiYW5pbWF0ZUZpbGwiLCJmb2xsb3dDdXJzb3IiLCJpbmxpbmVQb3NpdGlvbmluZyIsInN0aWNreSIsInJlbmRlclByb3BzIiwiYWxsb3dIVE1MIiwiYW5pbWF0aW9uIiwiYXJyb3ciLCJjb250ZW50IiwiaW5lcnRpYSIsIm1heFdpZHRoIiwicm9sZSIsInRoZW1lIiwiekluZGV4IiwiZGVmYXVsdFByb3BzIiwiYXBwZW5kVG8iLCJhcmlhIiwiZXhwYW5kZWQiLCJkZWxheSIsImR1cmF0aW9uIiwiZ2V0UmVmZXJlbmNlQ2xpZW50UmVjdCIsImhpZGVPbkNsaWNrIiwiaWdub3JlQXR0cmlidXRlcyIsImludGVyYWN0aXZlIiwiaW50ZXJhY3RpdmVEZWJvdW5jZSIsIm1vdmVUcmFuc2l0aW9uIiwib25BZnRlclVwZGF0ZSIsIm9uQmVmb3JlVXBkYXRlIiwib25DcmVhdGUiLCJvbkRlc3Ryb3kiLCJvbkhpZGRlbiIsIm9uSGlkZSIsIm9uTW91bnQiLCJvblNob3ciLCJvblNob3duIiwib25UcmlnZ2VyIiwib25VbnRyaWdnZXIiLCJvbkNsaWNrT3V0c2lkZSIsInBsdWdpbnMiLCJwb3BwZXJPcHRpb25zIiwicmVuZGVyIiwic2hvd09uQ3JlYXRlIiwidG91Y2giLCJ0cmlnZ2VyIiwidHJpZ2dlclRhcmdldCIsImRlZmF1bHRLZXlzIiwic2V0RGVmYXVsdFByb3BzIiwicGFydGlhbFByb3BzIiwidmFsaWRhdGVQcm9wcyIsImdldEV4dGVuZGVkUGFzc2VkUHJvcHMiLCJwYXNzZWRQcm9wcyIsInBsdWdpbiIsIm5hbWUiLCJfbmFtZSIsImdldERhdGFBdHRyaWJ1dGVQcm9wcyIsInByb3BLZXlzIiwidmFsdWVBc1N0cmluZyIsImdldEF0dHJpYnV0ZSIsIkpTT04iLCJwYXJzZSIsImUiLCJldmFsdWF0ZVByb3BzIiwib3V0IiwicHJvcCIsIm5vblBsdWdpblByb3BzIiwiZGlkUGFzc1Vua25vd25Qcm9wIiwibGVuZ3RoIiwiaW5uZXJIVE1MIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJodG1sIiwiY3JlYXRlQXJyb3dFbGVtZW50IiwiY2xhc3NOYW1lIiwiYXBwZW5kQ2hpbGQiLCJzZXRDb250ZW50IiwidGV4dENvbnRlbnQiLCJnZXRDaGlsZHJlbiIsInBvcHBlciIsImZpcnN0RWxlbWVudENoaWxkIiwiYm94Q2hpbGRyZW4iLCJjaGlsZHJlbiIsImZpbmQiLCJub2RlIiwiY2xhc3NMaXN0IiwiYmFja2Ryb3AiLCJvblVwZGF0ZSIsInByZXZQcm9wcyIsIm5leHRQcm9wcyIsIl9nZXRDaGlsZHJlbiIsInJlbW92ZUF0dHJpYnV0ZSIsInJlbW92ZUNoaWxkIiwiJCR0aXBweSIsImlkQ291bnRlciIsIm1vdXNlTW92ZUxpc3RlbmVycyIsIm1vdW50ZWRJbnN0YW5jZXMiLCJjcmVhdGVUaXBweSIsInNob3dUaW1lb3V0IiwiaGlkZVRpbWVvdXQiLCJzY2hlZHVsZUhpZGVBbmltYXRpb25GcmFtZSIsImlzVmlzaWJsZUZyb21DbGljayIsImRpZEhpZGVEdWVUb0RvY3VtZW50TW91c2VEb3duIiwiZGlkVG91Y2hNb3ZlIiwiaWdub3JlT25GaXJzdFVwZGF0ZSIsImxhc3RUcmlnZ2VyRXZlbnQiLCJjdXJyZW50VHJhbnNpdGlvbkVuZExpc3RlbmVyIiwib25GaXJzdFVwZGF0ZSIsImxpc3RlbmVycyIsImRlYm91bmNlZE9uTW91c2VNb3ZlIiwib25Nb3VzZU1vdmUiLCJjdXJyZW50VGFyZ2V0IiwiaWQiLCJwb3BwZXJJbnN0YW5jZSIsImlzRW5hYmxlZCIsImlzRGVzdHJveWVkIiwiaXNNb3VudGVkIiwiaXNTaG93biIsImNsZWFyRGVsYXlUaW1lb3V0cyIsInNldFByb3BzIiwic2hvdyIsImhpZGUiLCJoaWRlV2l0aEludGVyYWN0aXZpdHkiLCJlbmFibGUiLCJkaXNhYmxlIiwidW5tb3VudCIsImRlc3Ryb3kiLCJfcHJvcHMkcmVuZGVyIiwicGx1Z2luc0hvb2tzIiwibWFwIiwiaGFzQXJpYUV4cGFuZGVkIiwiaGFzQXR0cmlidXRlIiwiYWRkTGlzdGVuZXJzIiwiaGFuZGxlQXJpYUV4cGFuZGVkQXR0cmlidXRlIiwiaGFuZGxlU3R5bGVzIiwiaW52b2tlSG9vayIsInNjaGVkdWxlU2hvdyIsImdldERvY3VtZW50IiwiZ2V0Tm9ybWFsaXplZFRvdWNoU2V0dGluZ3MiLCJnZXRJc0N1c3RvbVRvdWNoQmVoYXZpb3IiLCJnZXRJc0RlZmF1bHRSZW5kZXJGbiIsIl9pbnN0YW5jZSRwcm9wcyRyZW5kZSIsImdldEN1cnJlbnRUYXJnZXQiLCJwYXJlbnROb2RlIiwiZ2V0RGVmYXVsdFRlbXBsYXRlQ2hpbGRyZW4iLCJnZXREZWxheSIsImlzU2hvdyIsImZyb21IaWRlIiwicG9pbnRlckV2ZW50cyIsImhvb2siLCJzaG91bGRJbnZva2VQcm9wc0hvb2siLCJwbHVnaW5Ib29rcyIsIl9pbnN0YW5jZSRwcm9wcyIsImhhbmRsZUFyaWFDb250ZW50QXR0cmlidXRlIiwiYXR0ciIsIm5vZGVzIiwiY3VycmVudFZhbHVlIiwibmV4dFZhbHVlIiwiY2xlYW51cEludGVyYWN0aXZlTW91c2VMaXN0ZW5lcnMiLCJvbkRvY3VtZW50UHJlc3MiLCJhY3R1YWxUYXJnZXQiLCJjb21wb3NlZFBhdGgiLCJyZW1vdmVEb2N1bWVudFByZXNzIiwib25Ub3VjaE1vdmUiLCJvblRvdWNoU3RhcnQiLCJhZGREb2N1bWVudFByZXNzIiwiZG9jIiwib25UcmFuc2l0aW9uZWRPdXQiLCJjYWxsYmFjayIsIm9uVHJhbnNpdGlvbkVuZCIsIm9uVHJhbnNpdGlvbmVkSW4iLCJvbiIsImV2ZW50VHlwZSIsImhhbmRsZXIiLCJvcHRpb25zIiwib25Nb3VzZUxlYXZlIiwib25CbHVyT3JGb2N1c091dCIsInJlbW92ZUxpc3RlbmVycyIsIl9sYXN0VHJpZ2dlckV2ZW50Iiwic2hvdWxkU2NoZWR1bGVDbGlja0hpZGUiLCJpc0V2ZW50TGlzdGVuZXJTdG9wcGVkIiwid2FzRm9jdXNlZCIsInNjaGVkdWxlSGlkZSIsImlzQ3Vyc29yT3ZlclJlZmVyZW5jZU9yUG9wcGVyIiwiZ2V0TmVzdGVkUG9wcGVyVHJlZSIsIl9pbnN0YW5jZSRwb3BwZXJJbnN0YSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInNob3VsZEJhaWwiLCJyZWxhdGVkVGFyZ2V0IiwiY3JlYXRlUG9wcGVySW5zdGFuY2UiLCJkZXN0cm95UG9wcGVySW5zdGFuY2UiLCJfaW5zdGFuY2UkcHJvcHMyIiwiY29tcHV0ZWRSZWZlcmVuY2UiLCJjb250ZXh0RWxlbWVudCIsInRpcHB5TW9kaWZpZXIiLCJlbmFibGVkIiwicGhhc2UiLCJyZXF1aXJlcyIsIl9yZWYyIiwiX2dldERlZmF1bHRUZW1wbGF0ZUNoIiwiYXR0cmlidXRlcyIsIm1vZGlmaWVycyIsInBhZGRpbmciLCJhZGFwdGl2ZSIsImNyZWF0ZVBvcHBlciIsIm1vdW50IiwibmV4dEVsZW1lbnRTaWJsaW5nIiwiX2dldE5vcm1hbGl6ZWRUb3VjaFNlIiwidG91Y2hWYWx1ZSIsInRvdWNoRGVsYXkiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsIm5lc3RlZFBvcHBlciIsImZvcmNlVXBkYXRlIiwiaXNBbHJlYWR5VmlzaWJsZSIsImlzRGlzYWJsZWQiLCJpc1RvdWNoQW5kVG91Y2hEaXNhYmxlZCIsInZpc2liaWxpdHkiLCJ0cmFuc2l0aW9uIiwiX2dldERlZmF1bHRUZW1wbGF0ZUNoMiIsIl9pbnN0YW5jZSRwb3BwZXJJbnN0YTIiLCJvZmZzZXRIZWlnaHQiLCJfZ2V0RGVmYXVsdFRlbXBsYXRlQ2gzIiwiX2JveCIsIl9jb250ZW50IiwiaXNBbHJlYWR5SGlkZGVuIiwiX2dldERlZmF1bHRUZW1wbGF0ZUNoNCIsImkiLCJvcHRpb25hbFByb3BzIiwiZWxlbWVudHMiLCJpc1NpbmdsZUNvbnRlbnRFbGVtZW50IiwiaXNNb3JlVGhhbk9uZVJlZmVyZW5jZUVsZW1lbnQiLCJpbnN0YW5jZXMiLCJoaWRlQWxsIiwiX3RlbXAiLCJleGNsdWRlZFJlZmVyZW5jZU9ySW5zdGFuY2UiLCJleGNsdWRlIiwiaXNFeGNsdWRlZCIsIm9yaWdpbmFsRHVyYXRpb24iLCJhcHBseVN0eWxlc01vZGlmaWVyIiwiYXBwbHlTdHlsZXMiLCJlZmZlY3QiLCJpbml0aWFsU3R5bGVzIiwicG9zaXRpb24iLCJzdHJhdGVneSIsIm1hcmdpbiIsInN0eWxlcyIsImNyZWF0ZVNpbmdsZXRvbiIsInRpcHB5SW5zdGFuY2VzIiwiX29wdGlvbmFsUHJvcHMkcG9wcGVyIiwiaW5kaXZpZHVhbEluc3RhbmNlcyIsInJlZmVyZW5jZXMiLCJ0cmlnZ2VyVGFyZ2V0cyIsIm92ZXJyaWRlcyIsImludGVyY2VwdFNldFByb3BzQ2xlYW51cHMiLCJzaG93bk9uQ3JlYXRlIiwic2V0VHJpZ2dlclRhcmdldHMiLCJzZXRSZWZlcmVuY2VzIiwiZW5hYmxlSW5zdGFuY2VzIiwiaW50ZXJjZXB0U2V0UHJvcHMiLCJzaW5nbGV0b24iLCJvcmlnaW5hbFNldFByb3BzIiwicHJlcGFyZUluc3RhbmNlIiwib3ZlcnJpZGVQcm9wcyIsIl9yZWZlcmVuY2VzJGluZGV4Iiwib3JpZ2luYWxTaG93IiwicmVmIiwic2hvd05leHQiLCJmaXJzdCIsInNob3dQcmV2aW91cyIsImxhc3QiLCJzZXRJbnN0YW5jZXMiLCJuZXh0SW5zdGFuY2VzIiwiQlVCQkxJTkdfRVZFTlRTX01BUCIsIm1vdXNlb3ZlciIsImZvY3VzaW4iLCJjbGljayIsImRlbGVnYXRlIiwiY2hpbGRUaXBweUluc3RhbmNlcyIsImRpc2FibGVkIiwibmF0aXZlUHJvcHMiLCJwYXJlbnRQcm9wcyIsImNoaWxkUHJvcHMiLCJyZXR1cm5WYWx1ZSIsIm5vcm1hbGl6ZWRSZXR1cm5WYWx1ZSIsInRhcmdldE5vZGUiLCJjbG9zZXN0IiwiYWRkRXZlbnRMaXN0ZW5lcnMiLCJyZW1vdmVFdmVudExpc3RlbmVycyIsImFwcGx5TXV0YXRpb25zIiwib3JpZ2luYWxEZXN0cm95Iiwib3JpZ2luYWxFbmFibGUiLCJvcmlnaW5hbERpc2FibGUiLCJzaG91bGREZXN0cm95Q2hpbGRJbnN0YW5jZXMiLCJjcmVhdGVCYWNrZHJvcEVsZW1lbnQiLCJpbnNlcnRCZWZvcmUiLCJvdmVyZmxvdyIsIk51bWJlciIsInRyYW5zaXRpb25EZWxheSIsIk1hdGgiLCJyb3VuZCIsIm1vdXNlQ29vcmRzIiwiYWN0aXZlSW5zdGFuY2VzIiwic3RvcmVNb3VzZUNvb3JkcyIsImFkZE1vdXNlQ29vcmRzTGlzdGVuZXIiLCJyZW1vdmVNb3VzZUNvb3Jkc0xpc3RlbmVyIiwiaXNJbnRlcm5hbFVwZGF0ZSIsIndhc0ZvY3VzRXZlbnQiLCJpc1VubW91bnRlZCIsImdldElzSW5pdGlhbEJlaGF2aW9yIiwiYWRkTGlzdGVuZXIiLCJyZW1vdmVMaXN0ZW5lciIsInVuc2V0R2V0UmVmZXJlbmNlQ2xpZW50UmVjdCIsImlzQ3Vyc29yT3ZlclJlZmVyZW5jZSIsInJlY3QiLCJyZWxhdGl2ZVgiLCJyZWxhdGl2ZVkiLCJ3aWR0aCIsImhlaWdodCIsImNyZWF0ZSIsImRhdGEiLCJfIiwiZ2V0UHJvcHMiLCJtb2RpZmllciIsIl9wcm9wcyRwb3BwZXJPcHRpb25zIiwiY3Vyc29yUmVjdEluZGV4IiwidHJpZWRQbGFjZW1lbnRzIiwiX2dldFJlZmVyZW5jZUNsaWVudFJlY3QiLCJnZXRJbmxpbmVCb3VuZGluZ0NsaWVudFJlY3QiLCJnZXRDbGllbnRSZWN0cyIsInNldEludGVybmFsUHJvcHMiLCJhZGRNb2RpZmllciIsInJlY3RzIiwiY3Vyc29yUmVjdCIsImN1cnJlbnRCYXNlUGxhY2VtZW50IiwiYm91bmRpbmdSZWN0IiwiY2xpZW50UmVjdHMiLCJmaXJzdFJlY3QiLCJsYXN0UmVjdCIsImlzVG9wIiwibWluTGVmdCIsIm1pbiIsIm1heFJpZ2h0IiwibWF4IiwibWVhc3VyZVJlY3RzIiwiX3RvcCIsIl9ib3R0b20iLCJfbGVmdCIsIl9yaWdodCIsIl93aWR0aCIsIl9oZWlnaHQiLCJnZXRSZWZlcmVuY2UiLCJzaG91bGRDaGVjayIsInByZXZSZWZSZWN0IiwicHJldlBvcFJlY3QiLCJ1cGRhdGVQb3NpdGlvbiIsImN1cnJlbnRSZWZSZWN0IiwiY3VycmVudFBvcFJlY3QiLCJhcmVSZWN0c0RpZmZlcmVudCIsInVwZGF0ZSIsInJlY3RBIiwicmVjdEIiLCJyb3VuZEFycm93Il0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJjb2RlL3RzL2NvbnRyb2wudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=