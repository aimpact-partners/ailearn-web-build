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
        hash: 729625808,
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
              callback(...specs);
            }
            showMessage(type, message) {
              this.#message = {
                type,
                message
              };
              this.trigger('show.message');
              console.log('aja');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiQnJva2VyIiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwiaGFzQ3JlZGl0cyIsImNyZWRpdHMiLCJ0b3RhbCIsIm1lc3NhZ2UiLCJicmVhZGNydW1iIiwidmFsdWUiLCJBcnJheSIsImlzQXJyYXkiLCJFcnJvciIsInRyaWdnZXIiLCJzaG93Q3JlZGl0cyIsImNvbnN0cnVjdG9yIiwiZW5zdXJlQ3JlZGl0cyIsImJpbmQiLCJnbG9iYWxUaGlzIiwiYnJva2VyIiwiYWRkTW9kZWwiLCJpZCIsIm9uIiwib25MaXN0ZW4iLCJzYXZlZCIsInRyaWdnZXJFdmVudCIsImNhbGxiYWNrIiwic3BlY3MiLCJjb25zb2xlIiwiZXJyb3IiLCJzaG93TWVzc2FnZSIsInR5cGUiLCJsb2ciLCJzZXRUaW1lb3V0IiwidW5kZWZpbmVkIiwiZXhwb3J0cyIsIkxheW91dEJyb2tlciIsIl9iYXNlIiwiX3N0b3JlIiwiX3ZpZXciLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsIkxheW91dCIsIl93cmFwcGVyIiwiX2Jyb2tlciIsIkFwcFdyYXBwZXIiLCJsaXN0ZW5lciIsImxjIiwiaW5pdCIsImlzUmVhZHkiLCJyZWFkeSIsIl9yZWFjdCIsIl9tb2RhbCIsIkNvaW5zQWxlcnQiLCJzaG93Iiwib25DbG9zZSIsInRleHRzIiwiY29pbnMiLCJhbGVydCIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiQWxlcnRNb2RhbCIsImJ1dHRvbkxhYmVsIiwiYWN0aW9uIiwib25Db25maXJtIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIl91aSIsIkNvaW5zTW9kYWwiLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwidXNlU3RhdGUiLCJzZXRFcnJvciIsIm1vZGFsIiwiYW5zd2VyIiwiZ2V0Q3JlZGl0cyIsInN0YXR1cyIsImVycm9ycyIsImNvZGUiLCJlIiwibm9DcmVkaXRzIiwiQ29uZmlybU1vZGFsIiwiY2xhc3NOYW1lIiwiY2VudGVyZWQiLCJhY3Rpb25zIiwiY29uZmlybSIsImxhYmVsIiwidmFyaWFudCIsImNhbmNlbCIsImJvcmRlcmVkIiwib25DYW5jZWwiLCJFcnJvclJlbmRlcmVyIiwiQmF0dGVyeSIsInBlcmNlbnQiLCJfY29tcG9uZW50cyIsIl9jaGlwcyIsIl9ob29rcyIsIl9hbmltYXRlZExhYmVsIiwiX2NvbnRleHQiLCJDcmVkaXRzQ29udGFpbmVyIiwidG9nZ2xlQ29pbnNNb2RhbCIsImhlYWRlciIsInVzZUxheW91dENvbnRleHQiLCJzZXRNZXNzYWdlIiwic2V0SGFzQ3JlZGl0cyIsInJlZiIsInVzZVJlZiIsImNscyIsIkNvbnRyb2wiLCJDaGlwIiwiQnV0dG9uIiwiYXR0cnMiLCJvbkNsaWNrIiwiZGlzYWJsZWQiLCJhdmFpbGFibGUiLCJvbkNyZWRpdHNDaGFuZ2UiLCJjdXJyZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwibWVzc2FnZXMiLCJ1c2VCaW5kZXIiLCJBbmltYXRlZExhYmVsIiwiX2ljb25zIiwiX2ZyYW1lck1vdGlvbiIsIl9hbmltYXRlZCIsIk5vdGlmaWNhdGlvbnNCYXIiLCJzZXRTaG93IiwiQW5pbWF0ZVByZXNlbmNlIiwiQW5pbWF0ZWQiLCJhcyIsIkh0bWxXcmFwcGVyIiwiSWNvbiIsImljb24iLCJjaGlsZHJlbiIsInVzZUVmZmVjdCIsIm1vdGlvbiIsInNwYW4iLCJsYXlvdXQiLCJpbml0aWFsIiwib3BhY2l0eSIsIndpZHRoIiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImV4aXQiLCJDb21wb25lbnQiLCJfbmF2YmFySGVhZGVyIiwiX2NyZWRpdHMiLCJIZWFkZXIiLCJzaG93QmFyIiwiaGFzTW9kZWwiLCJzZXRIYXNNb2RlbCIsInNldEJyZWFkY3J1bWIiLCJOYXZiYXJIZWFkZXIiLCJMYXlvdXRDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfdG9hc3QiLCJfaGVhZGVyIiwiX2JleW9uZF9jb250ZXh0IiwiX2FsZXJ0IiwiX2NvaW5zTW9kYWwiLCJfbm90aWZpY2F0aW9uc0JhciIsInNldFJlYWR5IiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwic2hvd0NvaW5zTW9kYWwiLCJzZXRTaG93Q29pbnNNb2RhbCIsInNob3dDb2luc0FsZXJ0Iiwic2V0U2hvd0NvaW5zQWxlcnQiLCJzZXRVcGRhdGUiLCJ0b2dnbGVDb2luc0FsZXJ0IiwiUHJlbG9hZFNjcmVlbiIsIkZyYWdtZW50IiwiUHJvdmlkZXIiLCJUb2FzdHMiXSwic291cmNlcyI6WyIvdHMvYnJva2VyLnRzIiwiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlldy9jb2lucy9hbGVydC50c3giLCIvdHMvdmlldy9jb2lucy9jb2lucy1tb2RhbC50c3giLCIvdHMvdmlldy9jb2lucy9jcmVkaXRzLnRzeCIsIi90cy92aWV3L2NvaW5zL25vdGlmaWNhdGlvbnMtYmFyLnRzeCIsIi90cy92aWV3L2NvbXBvbmVudHMvYW5pbWF0ZWQtbGFiZWwudHN4IiwiL3RzL3ZpZXcvY29tcG9uZW50cy9hbmltYXRlZC50c3giLCIvdHMvdmlldy9jb21wb25lbnRzL2hlYWRlci50c3giLCIvdHMvdmlldy9jb250ZXh0LnRzIiwiL3RzL3ZpZXcvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUVNLE1BQU9DLE1BQU8sU0FBUUYsTUFBQSxDQUFBRyxhQUFxQjtZQUNoRCxDQUFBQyxLQUFNO1lBQ04sSUFBSUEsS0FBS0EsQ0FBQTtj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