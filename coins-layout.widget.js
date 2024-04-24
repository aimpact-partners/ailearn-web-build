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
        hash: 4119127907,
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
        hash: 431994561,
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
              disabled: !store.saved
            };
            const label = store.broker.hasCredits ? texts.actions.available : texts.actions.require;
            const onCreditsChange = type => {
              ref.current.classList.add('success--container');
              setMessage(texts.messages[type]);
              setHasCredits(store.hasCredits);
            };
            (0, _hooks.useBinder)([store.broker.model], onCreditsChange, 'credits.change');
            if (!hasCredits) {
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
        hash: 88633646,
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
          function NotificationsBar({
            children
          }) {
            const [show, setShow] = _react.default.useState(true);
            const onClose = () => setShow(false);
            return _react.default.createElement(_framerMotion.AnimatePresence, null, show && _react.default.createElement(_animated.Animated, {
              as: "div",
              className: "notifications-bar center-items notifications--info"
            }, _react.default.createElement(_components.HtmlWrapper, null, children), _react.default.createElement(_icons.Icon, {
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
        hash: 2453379635,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Header = Header;
          var _react = require("react");
          var _navbarHeader = require("@aimpact/ailearn-app/components/navbar-header.code");
          var _config = require("@aimpact/ailearn-app/config");
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
              breadcrumb: [[_config.default.params.APP_NAME, '/'], ...breadcrumb]
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
        hash: 1962303491,
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
            }, _react.default.createElement(_header.Header, null), _react.default.createElement("main", null, _react.default.createElement("beyond-layout-children", null), _react.default.createElement(_toast.Toasts, null)))), _react.default.createElement(_alert.CoinsAlert, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiQnJva2VyIiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwiaGFzQ3JlZGl0cyIsImNyZWRpdHMiLCJ0b3RhbCIsImJyZWFkY3J1bWIiLCJ2YWx1ZSIsIkFycmF5IiwiaXNBcnJheSIsIkVycm9yIiwidHJpZ2dlciIsInNob3dDcmVkaXRzIiwiY29uc3RydWN0b3IiLCJlbnN1cmVDcmVkaXRzIiwiYmluZCIsImdsb2JhbFRoaXMiLCJicm9rZXIiLCJhZGRNb2RlbCIsImlkIiwib24iLCJvbkxpc3RlbiIsInNhdmVkIiwidHJpZ2dlckV2ZW50IiwiY2FsbGJhY2siLCJzcGVjcyIsImNvbnNvbGUiLCJlcnJvciIsImV4cG9ydHMiLCJMYXlvdXRCcm9rZXIiLCJfYmFzZSIsIl9zdG9yZSIsIl92aWV3IiwiQ29udHJvbGxlciIsIlJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJMYXlvdXQiLCJfd3JhcHBlciIsIl9icm9rZXIiLCJBcHBXcmFwcGVyIiwibGlzdGVuZXIiLCJsYyIsImxvZyIsImluaXQiLCJpc1JlYWR5IiwicmVhZHkiLCJfcmVhY3QiLCJfbW9kYWwiLCJDb2luc0FsZXJ0Iiwic2hvdyIsIm9uQ2xvc2UiLCJ0ZXh0cyIsImNvaW5zIiwiYWxlcnQiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIkFsZXJ0TW9kYWwiLCJidXR0b25MYWJlbCIsImFjdGlvbiIsIm9uQ29uZmlybSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJfdWkiLCJDb2luc01vZGFsIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsInVzZVN0YXRlIiwic2V0RXJyb3IiLCJtb2RhbCIsImFuc3dlciIsImdldENyZWRpdHMiLCJzdGF0dXMiLCJlcnJvcnMiLCJjb2RlIiwiZSIsIm5vQ3JlZGl0cyIsIkNvbmZpcm1Nb2RhbCIsImNsYXNzTmFtZSIsImNlbnRlcmVkIiwiYWN0aW9ucyIsImNvbmZpcm0iLCJsYWJlbCIsInZhcmlhbnQiLCJjYW5jZWwiLCJib3JkZXJlZCIsIm9uQ2FuY2VsIiwiRXJyb3JSZW5kZXJlciIsIkJhdHRlcnkiLCJwZXJjZW50IiwiX2NvbXBvbmVudHMiLCJfY2hpcHMiLCJfaG9va3MiLCJfYW5pbWF0ZWRMYWJlbCIsIl9jb250ZXh0IiwiQ3JlZGl0c0NvbnRhaW5lciIsInRvZ2dsZUNvaW5zTW9kYWwiLCJoZWFkZXIiLCJ1c2VMYXlvdXRDb250ZXh0IiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJzZXRIYXNDcmVkaXRzIiwicmVmIiwidXNlUmVmIiwiY2xzIiwiQ29udHJvbCIsIkNoaXAiLCJCdXR0b24iLCJhdHRycyIsIm9uQ2xpY2siLCJ1bmRlZmluZWQiLCJkaXNhYmxlZCIsImF2YWlsYWJsZSIsIm9uQ3JlZGl0c0NoYW5nZSIsInR5cGUiLCJjdXJyZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwibWVzc2FnZXMiLCJ1c2VCaW5kZXIiLCJBbmltYXRlZExhYmVsIiwiX2ljb25zIiwiX2ZyYW1lck1vdGlvbiIsIl9hbmltYXRlZCIsIk5vdGlmaWNhdGlvbnNCYXIiLCJjaGlsZHJlbiIsInNldFNob3ciLCJBbmltYXRlUHJlc2VuY2UiLCJBbmltYXRlZCIsImFzIiwiSHRtbFdyYXBwZXIiLCJJY29uIiwiaWNvbiIsInVzZUVmZmVjdCIsInNldFRpbWVvdXQiLCJtb3Rpb24iLCJzcGFuIiwibGF5b3V0IiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJ3aWR0aCIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJleGl0IiwiQ29tcG9uZW50IiwiX25hdmJhckhlYWRlciIsIl9jb25maWciLCJfY3JlZGl0cyIsIkhlYWRlciIsInNob3dCYXIiLCJoYXNNb2RlbCIsInNldEhhc01vZGVsIiwic2V0QnJlYWRjcnVtYiIsIk5hdmJhckhlYWRlciIsInBhcmFtcyIsIkFQUF9OQU1FIiwiTGF5b3V0Q29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX3RvYXN0IiwiX2hlYWRlciIsIl9iZXlvbmRfY29udGV4dCIsIl9hbGVydCIsIl9jb2luc01vZGFsIiwic2V0UmVhZHkiLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJzaG93Q29pbnNNb2RhbCIsInNldFNob3dDb2luc01vZGFsIiwic2hvd0NvaW5zQWxlcnQiLCJzZXRTaG93Q29pbnNBbGVydCIsInNldFVwZGF0ZSIsInRvZ2dsZUNvaW5zQWxlcnQiLCJQcmVsb2FkU2NyZWVuIiwiRnJhZ21lbnQiLCJQcm92aWRlciIsIlRvYXN0cyJdLCJzb3VyY2VzIjpbIi90cy9icm9rZXIudHMiLCIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3L2NvaW5zL2FsZXJ0LnRzeCIsIi90cy92aWV3L2NvaW5zL2NvaW5zLW1vZGFsLnRzeCIsIi90cy92aWV3L2NvaW5zL2NyZWRpdHMudHN4IiwiL3RzL3ZpZXcvY29pbnMvbm90aWZpY2F0aW9ucy1iYXIudHN4IiwiL3RzL3ZpZXcvY29tcG9uZW50cy9hbmltYXRlZC1sYWJlbC50c3giLCIvdHMvdmlldy9jb21wb25lbnRzL2FuaW1hdGVkLnRzeCIsIi90cy92aWV3L2NvbXBvbmVudHMvaGVhZGVyLnRzeCIsIi90cy92aWV3L2NvbnRleHQudHMiLCIvdHMvdmlldy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBRU0sTUFBT0MsTUFBTyxTQUFRRixNQUFBLENBQUFHLGFBQXFCO1lBQ2hELENBQUFDLEtBQU07WUFDTixJQUFJQSxLQUFLQSxDQUFBO2NBQ1Is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