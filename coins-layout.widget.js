System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.1.12/model", "@beyond-js/react-18-widgets@1.1.2/base", "@aimpact/chat-sdk@1.0.0/core", "@aimpact/chat@1.0.1/wrapper", "react@18.2.0", "pragmate-ui@0.1.1/modal", "@aimpact/ailearn-app@0.0.32/components/ui", "pragmate-ui@0.1.1/components", "pragmate-ui@0.1.1/chips", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@0.1.1/icons", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.0.32/components/navbar-header.code", "@aimpact/ailearn-app@0.0.32/config", "pragmate-ui@0.1.1/toast", "@aimpact/chat@1.0.1/shared/components", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, bimport, __Bundle, __pkg, ims, LayoutBroker, Controller, Header, __beyond_pkg, hmr;
  _export({
    LayoutBroker: void 0,
    Controller: void 0,
    Header: void 0
  });
  return {
    setters: [function (_beyondJsWidgets110Render) {
      dependency_0 = _beyondJsWidgets110Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsReactive1112Model) {
      dependency_2 = _beyondJsReactive1112Model;
    }, function (_beyondJsReact18Widgets112Base) {
      dependency_3 = _beyondJsReact18Widgets112Base;
    }, function (_aimpactChatSdk100Core) {
      dependency_4 = _aimpactChatSdk100Core;
    }, function (_aimpactChat101Wrapper) {
      dependency_5 = _aimpactChat101Wrapper;
    }, function (_react2) {
      dependency_6 = _react2;
    }, function (_pragmateUi011Modal) {
      dependency_7 = _pragmateUi011Modal;
    }, function (_aimpactAilearnApp0032ComponentsUi) {
      dependency_8 = _aimpactAilearnApp0032ComponentsUi;
    }, function (_pragmateUi011Components) {
      dependency_9 = _pragmateUi011Components;
    }, function (_pragmateUi011Chips) {
      dependency_10 = _pragmateUi011Chips;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_11 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi011Icons) {
      dependency_12 = _pragmateUi011Icons;
    }, function (_framerMotion2) {
      dependency_13 = _framerMotion2;
    }, function (_aimpactAilearnApp0032ComponentsNavbarHeaderCode) {
      dependency_14 = _aimpactAilearnApp0032ComponentsNavbarHeaderCode;
    }, function (_aimpactAilearnApp0032Config) {
      dependency_15 = _aimpactAilearnApp0032Config;
    }, function (_pragmateUi011Toast) {
      dependency_16 = _pragmateUi011Toast;
    }, function (_aimpactChat101SharedComponents) {
      dependency_17 = _aimpactChat101SharedComponents;
    }, function (_beyondJsKernel019Styles) {
      dependency_18 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/http-suite", "1.0.3"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/react-18-widgets", "1.1.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["apexcharts", "3.48.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["firebase", "10.9.0"], ["firebase-admin", "11.11.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["@aimpact/ailearn-app", "0.0.32"], ["@aimpact/ailearn-app", "0.0.32"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.32/coins-layout",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/reactive/model', dependency_2], ['@beyond-js/react-18-widgets/base', dependency_3], ['@aimpact/chat-sdk/core', dependency_4], ['@aimpact/chat/wrapper', dependency_5], ['react', dependency_6], ['pragmate-ui/modal', dependency_7], ['@aimpact/ailearn-app/components/ui', dependency_8], ['pragmate-ui/components', dependency_9], ['pragmate-ui/chips', dependency_10], ['@beyond-js/react-18-widgets/hooks', dependency_11], ['pragmate-ui/icons', dependency_12], ['framer-motion', dependency_13], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_14], ['@aimpact/ailearn-app/config', dependency_15], ['pragmate-ui/toast', dependency_16], ['@aimpact/chat/shared/components', dependency_17], ['@beyond-js/kernel/styles', dependency_18]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "coins-layout",
        "vspecifier": "@aimpact/ailearn-app@0.0.32/coins-layout.widget",
        "is": "layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.32/coins-layout.widget');
      ims = new Map();
      /************************
      INTERNAL MODULE: ./broker
      ************************/
      ims.set('./broker', {
        hash: 363689408,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LayoutBroker = exports.Broker = void 0;
          var _model = require("@beyond-js/reactive/model");
          class Broker extends _model.ReactiveModel {
            #model;
            get model() {
              return this.#model;
            }
            get hasCredits() {
              return this.#model?.credits?.total > 0;
            }
            #message;
            get message() {
              return this.#message;
            }
            #breadcrumb = [];
            get breadcrumb() {
              return this.#breadcrumb;
            }
            set breadcrumb(value) {
              if (!Array.isArray(value)) throw new Error('Breadcrumb must be an array of objects');
              this.#breadcrumb = value;
              this.trigger('change');
            }
            #showCredits;
            get showCredits() {
              return this.#showCredits;
            }
            constructor() {
              super();
              this.ensureCredits = this.ensureCredits.bind(this);
              globalThis.broker = this;
            }
            addModel(model, showCredits = true) {
              if (model.id === this.#model?.id) return;
              this.#model = model;
              this.#showCredits = showCredits;
              this.#model.on('change', this.onListen.bind(this));
              this.trigger('change');
            }
            async onListen() {
              if (this.#showCredits === this.#model.saved) {
                return;
              }
              this.#showCredits = this.#model.saved;
              this.triggerEvent();
            }
            async ensureCredits(callback, ...specs) {
              // validation
              if (!this.#model) console.error('No model found');
              if (!this.hasCredits) {
                this.trigger('no.credits');
                return;
              }
              return callback(...specs);
            }
            addBreadcrumb(items) {
              this.#breadcrumb = [...this.#breadcrumb, items];
              this.trigger('change');
            }
            addMultipleBreadcrumb(items) {
              this.#breadcrumb = [...this.#breadcrumb, ...items];
              this.trigger('change');
            }
            trimBreadcrumb(count) {
              if (count <= this.breadcrumb.length) {
                this.breadcrumb.length -= count;
                this.triggerEvent('change');
              }
            }
            showMessage(type, message) {
              this.#message = {
                type,
                message
              };
              this.trigger('show.message');
              globalThis.setTimeout(() => {
                this.#message = undefined;
              }, 2000);
            }
          }
          exports.Broker = Broker;
          /*bundle */
          const LayoutBroker = exports.LayoutBroker = new Broker();
        }
      });

      /****************************
      INTERNAL MODULE: ./controller
      ****************************/

      ims.set('./controller', {
        hash: 2803709794,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _base = require("@beyond-js/react-18-widgets/base");
          var _store = require("./store");
          var _view = require("./view");
          /*bundle*/
          class Controller extends _base.ReactWidgetController {
            #store;
            createStore() {
              this.#store = new _store.StoreManager();
              return this.#store;
            }
            get Widget() {
              return _view.Layout;
            }
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 2951602853,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _wrapper = require("@aimpact/chat/wrapper");
          var _broker = require("./broker");
          class StoreManager extends _model.ReactiveModel {
            #broker;
            get broker() {
              return this.#broker;
            }
            get showCredits() {
              return this.#broker.showCredits;
            }
            get model() {
              return this.#broker.model;
            }
            get saved() {
              return this.#broker?.model?.saved;
            }
            constructor() {
              super();
              _wrapper.AppWrapper.on('change', this.listener);
              this.#broker = _broker.LayoutBroker;
              this.#broker.on('change', this.triggerEvent);
              globalThis.lc = this;
              console.log('layout controller is being exposed as lc in the global scope');
              this.init();
            }
            init = async () => {
              await _wrapper.AppWrapper.isReady;
              this.ready = true;
            };
            listener = () => {};
          }
          exports.StoreManager = StoreManager;
        }
      });

      /**********************************
      INTERNAL MODULE: ./view/coins/alert
      **********************************/

      ims.set('./view/coins/alert', {
        hash: 3955356505,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CoinsAlert = CoinsAlert;
          var _react = require("react");
          var _modal = require("pragmate-ui/modal");
          function CoinsAlert({
            show,
            onClose,
            texts
          }) {
            if (!show) return null;
            texts = texts.coins.alert;
            return _react.default.createElement(_modal.AlertModal, {
              show: true,
              buttonLabel: texts.action,
              onConfirm: onClose,
              onClose: onClose
            }, _react.default.createElement("header", null, _react.default.createElement("h3", null, texts.title), _react.default.createElement("p", null, texts.description)));
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./view/coins/coins-modal
      ****************************************/

      ims.set('./view/coins/coins-modal', {
        hash: 1336822574,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CoinsModal = CoinsModal;
          var _react = require("react");
          var _modal = require("pragmate-ui/modal");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          function CoinsModal({
            store,
            show,
            onClose,
            texts
          }) {
            if (!show) return null;
            const [fetching, setFetching] = _react.default.useState(false);
            const [error, setError] = _react.default.useState();
            texts = texts.coins.modal;
            const onConfirm = async () => {
              try {
                setFetching(true);
                const answer = await store.model.getCredits();
                if (!answer.status) {
                  const errors = {
                    48: 'NO_CREDITS'
                  };
                  throw new Error(errors[answer.error.code]);
                }
                onClose();
              } catch (e) {
                console.error(e);
                setError(texts.errors.noCredits);
              } finally {
                setFetching(false);
              }
            };
            return _react.default.createElement(_modal.ConfirmModal, {
              show: true,
              className: "modal-sm modal-centered",
              centered: true,
              actions: {
                confirm: {
                  label: texts.actions.confirm,
                  variant: 'primary'
                },
                cancel: {
                  label: texts.actions.cancel,
                  variant: 'primary',
                  bordered: true
                }
              },
              onConfirm: onConfirm,
              onCancel: onClose,
              onClose: onClose
            }, _react.default.createElement("header", null, _react.default.createElement("h3", null, texts.title), _react.default.createElement(_ui.ErrorRenderer, {
              error: error,
              variant: "warning"
            }), _react.default.createElement(_ui.Battery, {
              percent: "100",
              className: "lg"
            }), _react.default.createElement("p", null, texts.description)));
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./view/coins/credits
      ************************************/

      ims.set('./view/coins/credits', {
        hash: 3088742770,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CreditsContainer = CreditsContainer;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _chips = require("pragmate-ui/chips");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _animatedLabel = require("../components/animated-label");
          var _context = require("../context");
          function CreditsContainer() {
            const {
              store,
              toggleCoinsModal,
              texts: {
                coins: {
                  header: texts
                }
              }
            } = (0, _context.useLayoutContext)();
            const [message, setMessage] = _react.default.useState('');
            const [hasCredits, setHasCredits] = _react.default.useState(store.hasCredits);
            const ref = (0, _react.useRef)(null);
            const cls = `credits__container${!store.saved ? ' is-disabled' : ''}`;
            // the control changes based on the user's credits
            // if the user has credits, the control is a chip and does not have an onClick event
            const Control = store.broker.hasCredits ? _chips.Chip : _components.Button;
            const attrs = {
              className: 'credits-action',
              onClick: undefined,
              variant: store.broker.hasCredits ? 'success' : 'primary',
              disabled: store.broker.hasCredits || !store.saved
            };
            const label = store.broker.hasCredits ? texts.actions.available : texts.actions.require;
            const onCreditsChange = type => {
              ref.current.classList.add('success--container');
              setMessage(texts.messages[type]);
              setHasCredits(store.hasCredits);
            };
            (0, _hooks.useBinder)([store.broker.model], onCreditsChange, 'credits.change');
            if (!store.broker.hasCredits) {
              attrs.onClick = toggleCoinsModal;
            } else {
              attrs.className = 'success--chip';
            }
            return _react.default.createElement("div", {
              className: cls,
              ref: ref
            }, _react.default.createElement(_animatedLabel.AnimatedLabel, null, message), store.broker.hasCredits && _react.default.createElement(_ui.Battery, {
              percent: 100
            }), _react.default.createElement(Control, {
              ...attrs
            }, label));
          }
        }
      });

      /**********************************************
      INTERNAL MODULE: ./view/coins/notifications-bar
      **********************************************/

      ims.set('./view/coins/notifications-bar', {
        hash: 608402207,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.NotificationsBar = NotificationsBar;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _icons = require("pragmate-ui/icons");
          var _framerMotion = require("framer-motion");
          var _animated = require("../components/animated");
          var _context = require("../context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          function NotificationsBar({}) {
            const {
              store: {
                broker
              }
            } = (0, _context.useLayoutContext)();
            const [show, setShow] = _react.default.useState(true);
            const [message, setMessage] = _react.default.useState(undefined);
            const onClose = () => {
              setMessage(undefined);
              setShow(false);
            };
            (0, _hooks.useBinder)([broker], () => {
              setMessage(broker.message);
            }, 'show.message');
            if (!message) return null;
            const cls = `notifications-bar center-items notifications--${message?.type}`;
            return _react.default.createElement(_framerMotion.AnimatePresence, null, show && _react.default.createElement(_animated.Animated, {
              as: "div",
              className: cls
            }, _react.default.createElement(_components.HtmlWrapper, null, message.message), _react.default.createElement(_icons.Icon, {
              className: "close-icon",
              icon: "close",
              onClick: onClose
            })));
          }
        }
      });

      /************************************************
      INTERNAL MODULE: ./view/components/animated-label
      ************************************************/

      ims.set('./view/components/animated-label', {
        hash: 2096490113,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AnimatedLabel = AnimatedLabel;
          var _react = require("react");
          var _framerMotion = require("framer-motion");
          function AnimatedLabel({
            children
          }) {
            const [show, setShow] = _react.default.useState(!!children);
            _react.default.useEffect(() => {
              setShow(children);
              globalThis.setTimeout(() => {
                setShow(false);
              }, 2000);
            }, [children]);
            return _react.default.createElement(_framerMotion.AnimatePresence, null, show && _react.default.createElement(_framerMotion.motion.span, {
              layout: true,
              initial: {
                opacity: 0,
                width: '0'
              },
              animate: {
                opacity: 1,
                transition: {
                  duration: 0.3
                },
                width: 'auto'
              },
              exit: {
                transition: {
                  duration: 0.3,
                  width: 0
                },
                opacity: 0
              }
            }, children));
          }
        }
      });

      /******************************************
      INTERNAL MODULE: ./view/components/animated
      ******************************************/

      ims.set('./view/components/animated', {
        hash: 796986304,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Animated = Animated;
          var _react = require("react");
          var _framerMotion = require("framer-motion");
          function Animated({
            className,
            children,
            as = 'span'
          }) {
            const Component = (0, _framerMotion.motion)(as);
            return _react.default.createElement(Component, {
              layout: true,
              className: className,
              initial: {
                opacity: 0
              },
              animate: {
                opacity: 1,
                transition: {
                  duration: 0.3
                }
              },
              exit: {
                transition: {
                  duration: 0.3,
                  width: 0
                },
                opacity: 0
              }
            }, children);
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./view/components/header
      ****************************************/

      ims.set('./view/components/header', {
        hash: 2215166053,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Header = Header;
          var _react = require("react");
          var _navbarHeader = require("@aimpact/ailearn-app/components/navbar-header.code");
          var _context = require("../context");
          var _credits = require("../coins/credits");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          /*bundle*/
          function Header() {
            const {
              store,
              texts
            } = (0, _context.useLayoutContext)();
            const showBar = store.saved && !store.hasCredits;
            const [hasModel, setHasModel] = _react.default.useState(!!store.broker.model);
            const [breadcrumb, setBreadcrumb] = _react.default.useState([]);
            (0, _hooks.useBinder)([store.broker], () => {
              setHasModel(!!store.broker.model);
              setBreadcrumb(store.broker.breadcrumb);
            });
            return _react.default.createElement(_navbarHeader.NavbarHeader, {
              breadcrumb: [, ...breadcrumb]
            }, hasModel && _react.default.createElement(_credits.CreditsContainer, null));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./view/context
      ******************************/

      ims.set('./view/context', {
        hash: 772258609,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useLayoutContext = exports.LayoutContext = void 0;
          var _react = require("react");
          const LayoutContext = exports.LayoutContext = _react.default.createContext({});
          const useLayoutContext = () => _react.default.useContext(LayoutContext);
          exports.useLayoutContext = useLayoutContext;
        }
      });

      /****************************
      INTERNAL MODULE: ./view/index
      ****************************/

      ims.set('./view/index', {
        hash: 686551454,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Layout = void 0;
          var _react = require("react");
          var _toast = require("pragmate-ui/toast");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _components = require("@aimpact/chat/shared/components");
          var _context = require("./context");
          var _header = require("./components/header");
          var _beyond_context = require("beyond_context");
          var _alert = require("./coins/alert");
          var _coinsModal = require("./coins/coins-modal");
          var _notificationsBar = require("./coins/notifications-bar");
          const Layout = ({
            store
          }) => {
            const [ready, setReady] = (0, _react.useState)(store.ready);
            (0, _hooks.useBinder)([store], () => setReady(store.ready));
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            const [showCoinsModal, setShowCoinsModal] = _react.default.useState(false);
            const [showCoinsAlert, setShowCoinsAlert] = _react.default.useState(false);
            const [, setUpdate] = (0, _react.useState)({});
            const toggleCoinsAlert = () => setShowCoinsAlert(!showCoinsAlert);
            const toggleCoinsModal = () => setShowCoinsModal(!showCoinsModal);
            (0, _hooks.useBinder)([store.broker], toggleCoinsAlert, 'no.credits');
            (0, _hooks.useBinder)([store], () => setUpdate({}));
            if (!textsReady || !ready) return _react.default.createElement(_components.PreloadScreen, null);
            const value = {
              store,
              texts,
              toggleCoinsModal
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_context.LayoutContext.Provider, {
              value: value
            }, _react.default.createElement("div", {
              className: "coins-layout__container"
            }, _react.default.createElement(_header.Header, null), _react.default.createElement(_notificationsBar.NotificationsBar, null), _react.default.createElement("main", null, _react.default.createElement("beyond-layout-children", null), _react.default.createElement(_toast.Toasts, null)))), _react.default.createElement(_alert.CoinsAlert, {
              texts: texts,
              show: showCoinsAlert,
              onClose: toggleCoinsAlert
            }), _react.default.createElement(_coinsModal.CoinsModal, {
              store: store,
              texts: texts,
              show: showCoinsModal,
              onClose: toggleCoinsModal
            }));
          };
          exports.Layout = Layout;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./broker",
        "from": "LayoutBroker",
        "name": "LayoutBroker"
      }, {
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./view/components/header",
        "from": "Header",
        "name": "Header"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'LayoutBroker') && _export("LayoutBroker", LayoutBroker = require ? require('./broker').LayoutBroker : value);
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'Header') && _export("Header", Header = require ? require('./view/components/header').Header : value);
      };
      _export("__beyond_pkg", __beyond_pkg = __pkg);
      _export("hmr", hmr = new function () {
        this.on = (event, listener) => __pkg.hmr.on(event, listener);
        this.off = (event, listener) => __pkg.hmr.off(event, listener);
      }());
      __pkg.initialise(ims);
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiQnJva2VyIiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwiaGFzQ3JlZGl0cyIsImNyZWRpdHMiLCJ0b3RhbCIsIm1lc3NhZ2UiLCJicmVhZGNydW1iIiwidmFsdWUiLCJBcnJheSIsImlzQXJyYXkiLCJFcnJvciIsInRyaWdnZXIiLCJzaG93Q3JlZGl0cyIsImNvbnN0cnVjdG9yIiwiZW5zdXJlQ3JlZGl0cyIsImJpbmQiLCJnbG9iYWxUaGlzIiwiYnJva2VyIiwiYWRkTW9kZWwiLCJpZCIsIm9uIiwib25MaXN0ZW4iLCJzYXZlZCIsInRyaWdnZXJFdmVudCIsImNhbGxiYWNrIiwic3BlY3MiLCJjb25zb2xlIiwiZXJyb3IiLCJhZGRCcmVhZGNydW1iIiwiaXRlbXMiLCJhZGRNdWx0aXBsZUJyZWFkY3J1bWIiLCJ0cmltQnJlYWRjcnVtYiIsImNvdW50IiwibGVuZ3RoIiwic2hvd01lc3NhZ2UiLCJ0eXBlIiwic2V0VGltZW91dCIsInVuZGVmaW5lZCIsImV4cG9ydHMiLCJMYXlvdXRCcm9rZXIiLCJfYmFzZSIsIl9zdG9yZSIsIl92aWV3IiwiQ29udHJvbGxlciIsIlJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJMYXlvdXQiLCJfd3JhcHBlciIsIl9icm9rZXIiLCJBcHBXcmFwcGVyIiwibGlzdGVuZXIiLCJsYyIsImxvZyIsImluaXQiLCJpc1JlYWR5IiwicmVhZHkiLCJfcmVhY3QiLCJfbW9kYWwiLCJDb2luc0FsZXJ0Iiwic2hvdyIsIm9uQ2xvc2UiLCJ0ZXh0cyIsImNvaW5zIiwiYWxlcnQiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIkFsZXJ0TW9kYWwiLCJidXR0b25MYWJlbCIsImFjdGlvbiIsIm9uQ29uZmlybSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJfdWkiLCJDb2luc01vZGFsIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsInVzZVN0YXRlIiwic2V0RXJyb3IiLCJtb2RhbCIsImFuc3dlciIsImdldENyZWRpdHMiLCJzdGF0dXMiLCJlcnJvcnMiLCJjb2RlIiwiZSIsIm5vQ3JlZGl0cyIsIkNvbmZpcm1Nb2RhbCIsImNsYXNzTmFtZSIsImNlbnRlcmVkIiwiYWN0aW9ucyIsImNvbmZpcm0iLCJsYWJlbCIsInZhcmlhbnQiLCJjYW5jZWwiLCJib3JkZXJlZCIsIm9uQ2FuY2VsIiwiRXJyb3JSZW5kZXJlciIsIkJhdHRlcnkiLCJwZXJjZW50IiwiX2NvbXBvbmVudHMiLCJfY2hpcHMiLCJfaG9va3MiLCJfYW5pbWF0ZWRMYWJlbCIsIl9jb250ZXh0IiwiQ3JlZGl0c0NvbnRhaW5lciIsInRvZ2dsZUNvaW5zTW9kYWwiLCJoZWFkZXIiLCJ1c2VMYXlvdXRDb250ZXh0Iiwic2V0TWVzc2FnZSIsInNldEhhc0NyZWRpdHMiLCJyZWYiLCJ1c2VSZWYiLCJjbHMiLCJDb250cm9sIiwiQ2hpcCIsIkJ1dHRvbiIsImF0dHJzIiwib25DbGljayIsImRpc2FibGVkIiwiYXZhaWxhYmxlIiwib25DcmVkaXRzQ2hhbmdlIiwiY3VycmVudCIsImNsYXNzTGlzdCIsImFkZCIsIm1lc3NhZ2VzIiwidXNlQmluZGVyIiwiQW5pbWF0ZWRMYWJlbCIsIl9pY29ucyIsIl9mcmFtZXJNb3Rpb24iLCJfYW5pbWF0ZWQiLCJOb3RpZmljYXRpb25zQmFyIiwic2V0U2hvdyIsIkFuaW1hdGVQcmVzZW5jZSIsIkFuaW1hdGVkIiwiYXMiLCJIdG1sV3JhcHBlciIsIkljb24iLCJpY29uIiwiY2hpbGRyZW4iLCJ1c2VFZmZlY3QiLCJtb3Rpb24iLCJzcGFuIiwibGF5b3V0IiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJ3aWR0aCIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJleGl0IiwiQ29tcG9uZW50IiwiX25hdmJhckhlYWRlciIsIl9jcmVkaXRzIiwiSGVhZGVyIiwic2hvd0JhciIsImhhc01vZGVsIiwic2V0SGFzTW9kZWwiLCJzZXRCcmVhZGNydW1iIiwiTmF2YmFySGVhZGVyIiwiTGF5b3V0Q29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX3RvYXN0IiwiX2hlYWRlciIsIl9iZXlvbmRfY29udGV4dCIsIl9hbGVydCIsIl9jb2luc01vZGFsIiwiX25vdGlmaWNhdGlvbnNCYXIiLCJzZXRSZWFkeSIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInNob3dDb2luc01vZGFsIiwic2V0U2hvd0NvaW5zTW9kYWwiLCJzaG93Q29pbnNBbGVydCIsInNldFNob3dDb2luc0FsZXJ0Iiwic2V0VXBkYXRlIiwidG9nZ2xlQ29pbnNBbGVydCIsIlByZWxvYWRTY3JlZW4iLCJGcmFnbWVudCIsIlByb3ZpZGVyIiwiVG9hc3RzIl0sInNvdXJjZXMiOlsiL3RzL2Jyb2tlci50cyIsIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXcvY29pbnMvYWxlcnQudHN4IiwiL3RzL3ZpZXcvY29pbnMvY29pbnMtbW9kYWwudHN4IiwiL3RzL3ZpZXcvY29pbnMvY3JlZGl0cy50c3giLCIvdHMvdmlldy9jb2lucy9ub3RpZmljYXRpb25zLWJhci50c3giLCIvdHMvdmlldy9jb21wb25lbnRzL2FuaW1hdGVkLWxhYmVsLnRzeCIsIi90cy92aWV3L2NvbXBvbmVudHMvYW5pbWF0ZWQudHN4IiwiL3RzL3ZpZXcvY29tcG9uZW50cy9oZWFkZXIudHN4IiwiL3RzL3ZpZXcvY29udGV4dC50cyIsIi90cy92aWV3L2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9B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