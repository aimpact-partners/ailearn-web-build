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
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/http-suite", "1.0.3"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/react-18-widgets", "1.1.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["apexcharts", "3.48.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["firebase", "10.9.0"], ["firebase-admin", "11.11.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["@aimpact/ailearn-app", "0.0.32"], ["@aimpact/ailearn-app", "0.0.32"]]);
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
        hash: 349232026,
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
                console.log('no hay evento');
                return;
              }
              console.log('evento');
              this.#showCredits = this.#model.saved;
              this.triggerEvent();
            }
            async ensureCredits(callback, ...specs) {
              // validation
              console.log(22, this.#model);
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
        hash: 634538462,
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
                await store.model.getCredits();
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
              error: error
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiQnJva2VyIiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwiaGFzQ3JlZGl0cyIsImNyZWRpdHMiLCJ0b3RhbCIsImJyZWFkY3J1bWIiLCJ2YWx1ZSIsIkFycmF5IiwiaXNBcnJheSIsIkVycm9yIiwidHJpZ2dlciIsInNob3dDcmVkaXRzIiwiY29uc3RydWN0b3IiLCJlbnN1cmVDcmVkaXRzIiwiYmluZCIsImdsb2JhbFRoaXMiLCJicm9rZXIiLCJhZGRNb2RlbCIsImlkIiwib24iLCJvbkxpc3RlbiIsInNhdmVkIiwiY29uc29sZSIsImxvZyIsInRyaWdnZXJFdmVudCIsImNhbGxiYWNrIiwic3BlY3MiLCJlcnJvciIsImV4cG9ydHMiLCJMYXlvdXRCcm9rZXIiLCJfYmFzZSIsIl9zdG9yZSIsIl92aWV3IiwiQ29udHJvbGxlciIsIlJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJMYXlvdXQiLCJfd3JhcHBlciIsIl9icm9rZXIiLCJBcHBXcmFwcGVyIiwibGlzdGVuZXIiLCJsYyIsImluaXQiLCJpc1JlYWR5IiwicmVhZHkiLCJfcmVhY3QiLCJfbW9kYWwiLCJDb2luc0FsZXJ0Iiwic2hvdyIsIm9uQ2xvc2UiLCJ0ZXh0cyIsImNvaW5zIiwiYWxlcnQiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIkFsZXJ0TW9kYWwiLCJidXR0b25MYWJlbCIsImFjdGlvbiIsIm9uQ29uZmlybSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJfdWkiLCJDb2luc01vZGFsIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsInVzZVN0YXRlIiwic2V0RXJyb3IiLCJtb2RhbCIsImdldENyZWRpdHMiLCJlIiwiZXJyb3JzIiwibm9DcmVkaXRzIiwiQ29uZmlybU1vZGFsIiwiY2xhc3NOYW1lIiwiY2VudGVyZWQiLCJhY3Rpb25zIiwiY29uZmlybSIsImxhYmVsIiwidmFyaWFudCIsImNhbmNlbCIsImJvcmRlcmVkIiwib25DYW5jZWwiLCJFcnJvclJlbmRlcmVyIiwiQmF0dGVyeSIsInBlcmNlbnQiLCJfY29tcG9uZW50cyIsIl9jaGlwcyIsIl9ob29rcyIsIl9hbmltYXRlZExhYmVsIiwiX2NvbnRleHQiLCJDcmVkaXRzQ29udGFpbmVyIiwidG9nZ2xlQ29pbnNNb2RhbCIsImhlYWRlciIsInVzZUxheW91dENvbnRleHQiLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsInNldEhhc0NyZWRpdHMiLCJyZWYiLCJ1c2VSZWYiLCJjbHMiLCJDb250cm9sIiwiQ2hpcCIsIkJ1dHRvbiIsImF0dHJzIiwib25DbGljayIsInVuZGVmaW5lZCIsImRpc2FibGVkIiwiYXZhaWxhYmxlIiwib25DcmVkaXRzQ2hhbmdlIiwidHlwZSIsImN1cnJlbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJtZXNzYWdlcyIsInVzZUJpbmRlciIsIkFuaW1hdGVkTGFiZWwiLCJfaWNvbnMiLCJfZnJhbWVyTW90aW9uIiwiX2FuaW1hdGVkIiwiTm90aWZpY2F0aW9uc0JhciIsImNoaWxkcmVuIiwic2V0U2hvdyIsIkFuaW1hdGVQcmVzZW5jZSIsIkFuaW1hdGVkIiwiYXMiLCJIdG1sV3JhcHBlciIsIkljb24iLCJpY29uIiwidXNlRWZmZWN0Iiwic2V0VGltZW91dCIsIm1vdGlvbiIsInNwYW4iLCJsYXlvdXQiLCJpbml0aWFsIiwib3BhY2l0eSIsIndpZHRoIiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImV4aXQiLCJDb21wb25lbnQiLCJfbmF2YmFySGVhZGVyIiwiX2NvbmZpZyIsIl9jcmVkaXRzIiwiSGVhZGVyIiwic2hvd0JhciIsImhhc01vZGVsIiwic2V0SGFzTW9kZWwiLCJzZXRCcmVhZGNydW1iIiwiTmF2YmFySGVhZGVyIiwicGFyYW1zIiwiQVBQX05BTUUiLCJMYXlvdXRDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfdG9hc3QiLCJfaGVhZGVyIiwiX2JleW9uZF9jb250ZXh0IiwiX2FsZXJ0IiwiX2NvaW5zTW9kYWwiLCJzZXRSZWFkeSIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInNob3dDb2luc01vZGFsIiwic2V0U2hvd0NvaW5zTW9kYWwiLCJzaG93Q29pbnNBbGVydCIsInNldFNob3dDb2luc0FsZXJ0Iiwic2V0VXBkYXRlIiwidG9nZ2xlQ29pbnNBbGVydCIsIlByZWxvYWRTY3JlZW4iLCJGcmFnbWVudCIsIlByb3ZpZGVyIiwiVG9hc3RzIl0sInNvdXJjZXMiOlsiL3RzL2Jyb2tlci50cyIsIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXcvY29pbnMvYWxlcnQudHN4IiwiL3RzL3ZpZXcvY29pbnMvY29pbnMtbW9kYWwudHN4IiwiL3RzL3ZpZXcvY29pbnMvY3JlZGl0cy50c3giLCIvdHMvdmlldy9jb2lucy9ub3RpZmljYXRpb25zLWJhci50c3giLCIvdHMvdmlldy9jb21wb25lbnRzL2FuaW1hdGVkLWxhYmVsLnRzeCIsIi90cy92aWV3L2NvbXBvbmVudHMvYW5pbWF0ZWQudHN4IiwiL3RzL3ZpZXcvY29tcG9uZW50cy9oZWFkZXIudHN4IiwiL3RzL3ZpZXcvY29udGV4dC50cyIsIi90cy92aWV3L2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFFTSxNQUFPQyxNQUFPLFNBQVFGLE1BQUEsQ0FBQUcsYUFBcUI7WUFDaEQsQ0FBQUMsS0FBTTtZQUNOLElBQUlBLEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFN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