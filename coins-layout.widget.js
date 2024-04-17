System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.1.12/model", "@beyond-js/react-18-widgets@1.1.1/base", "@aimpact/chat-sdk@1.0.0/core", "@aimpact/chat@1.0.1/wrapper", "react@18.2.0", "pragmate-ui@0.1.1/modal", "@aimpact/ailearn-app@0.0.32/components/ui", "pragmate-ui@0.1.1/components", "pragmate-ui@0.1.1/chips", "@beyond-js/react-18-widgets@1.1.1/hooks", "pragmate-ui@0.1.1/icons", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.0.32/components/navbar-header.code", "@aimpact/ailearn-app@0.0.32/config", "pragmate-ui@0.1.1/toast", "@aimpact/chat@1.0.1/shared/components", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context2) {
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
    }, function (_beyondJsReact18Widgets111Base) {
      dependency_3 = _beyondJsReact18Widgets111Base;
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
    }, function (_beyondJsReact18Widgets111Hooks) {
      dependency_11 = _beyondJsReact18Widgets111Hooks;
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
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/http-suite", "1.0.3"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.1.1"], ["apexcharts", "3.48.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["firebase", "10.9.0"], ["firebase-admin", "11.11.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["@aimpact/ailearn-app", "0.0.32"], ["@aimpact/ailearn-app", "0.0.32"]]);
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
        hash: 3932608563,
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
              this.#showCredits = this.#model.saved;
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
        hash: 1870356707,
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
        hash: 1976028161,
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
        hash: 1697022954,
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
            /**
             *
             */
            const Control = store.hasCredits ? _chips.Chip : _components.Button;
            const attrs = {
              className: 'credits-action',
              onClick: undefined,
              variant: store.hasCredits ? 'success' : 'primary',
              disabled: !store.saved
            };
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
            }, texts.actions.require));
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
        hash: 750901233,
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
          /*bundle*/
          function Header() {
            const {
              store,
              texts
            } = (0, _context.useLayoutContext)();
            const showBar = store.saved && !store.hasCredits;
            return _react.default.createElement("section", null, _react.default.createElement(_navbarHeader.NavbarHeader, {
              breadcrumb: [[_config.default.params.APP_NAME, '/'], [texts.breadcrumb.modules, '/modules/list'], [texts.breadcrumb.management, '']]
            }, _react.default.createElement(_credits.CreditsContainer, null)));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiQnJva2VyIiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwiaGFzQ3JlZGl0cyIsImNyZWRpdHMiLCJ0b3RhbCIsInNob3dDcmVkaXRzIiwiY29uc3RydWN0b3IiLCJlbnN1cmVDcmVkaXRzIiwiYmluZCIsImdsb2JhbFRoaXMiLCJicm9rZXIiLCJhZGRNb2RlbCIsImlkIiwib24iLCJvbkxpc3RlbiIsInRyaWdnZXIiLCJzYXZlZCIsImNhbGxiYWNrIiwic3BlY3MiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJleHBvcnRzIiwiTGF5b3V0QnJva2VyIiwiX2Jhc2UiLCJfc3RvcmUiLCJfdmlldyIsIkNvbnRyb2xsZXIiLCJSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiV2lkZ2V0IiwiTGF5b3V0IiwiX3dyYXBwZXIiLCJfYnJva2VyIiwiQXBwV3JhcHBlciIsImxpc3RlbmVyIiwidHJpZ2dlckV2ZW50IiwiaW5pdCIsImlzUmVhZHkiLCJyZWFkeSIsIl9yZWFjdCIsIl9tb2RhbCIsIkNvaW5zQWxlcnQiLCJzaG93Iiwib25DbG9zZSIsInRleHRzIiwiY29pbnMiLCJhbGVydCIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiQWxlcnRNb2RhbCIsImJ1dHRvbkxhYmVsIiwiYWN0aW9uIiwib25Db25maXJtIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIl91aSIsIkNvaW5zTW9kYWwiLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwidXNlU3RhdGUiLCJzZXRFcnJvciIsIm1vZGFsIiwiZ2V0Q3JlZGl0cyIsImUiLCJlcnJvcnMiLCJub0NyZWRpdHMiLCJDb25maXJtTW9kYWwiLCJjbGFzc05hbWUiLCJjZW50ZXJlZCIsImFjdGlvbnMiLCJjb25maXJtIiwibGFiZWwiLCJ2YXJpYW50IiwiY2FuY2VsIiwiYm9yZGVyZWQiLCJvbkNhbmNlbCIsIkVycm9yUmVuZGVyZXIiLCJCYXR0ZXJ5IiwicGVyY2VudCIsIl9jb21wb25lbnRzIiwiX2NoaXBzIiwiX2hvb2tzIiwiX2FuaW1hdGVkTGFiZWwiLCJfY29udGV4dCIsIkNyZWRpdHNDb250YWluZXIiLCJ0b2dnbGVDb2luc01vZGFsIiwiaGVhZGVyIiwidXNlTGF5b3V0Q29udGV4dCIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwic2V0SGFzQ3JlZGl0cyIsInJlZiIsInVzZVJlZiIsImNscyIsIkNvbnRyb2wiLCJDaGlwIiwiQnV0dG9uIiwiYXR0cnMiLCJvbkNsaWNrIiwidW5kZWZpbmVkIiwiZGlzYWJsZWQiLCJvbkNyZWRpdHNDaGFuZ2UiLCJ0eXBlIiwiY3VycmVudCIsImNsYXNzTGlzdCIsImFkZCIsIm1lc3NhZ2VzIiwidXNlQmluZGVyIiwiQW5pbWF0ZWRMYWJlbCIsIl9pY29ucyIsIl9mcmFtZXJNb3Rpb24iLCJfYW5pbWF0ZWQiLCJOb3RpZmljYXRpb25zQmFyIiwiY2hpbGRyZW4iLCJzZXRTaG93IiwiQW5pbWF0ZVByZXNlbmNlIiwiQW5pbWF0ZWQiLCJhcyIsIkh0bWxXcmFwcGVyIiwiSWNvbiIsImljb24iLCJ1c2VFZmZlY3QiLCJzZXRUaW1lb3V0IiwibW90aW9uIiwic3BhbiIsImxheW91dCIsImluaXRpYWwiLCJvcGFjaXR5Iiwid2lkdGgiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZXhpdCIsIkNvbXBvbmVudCIsIl9uYXZiYXJIZWFkZXIiLCJfY29uZmlnIiwiX2NyZWRpdHMiLCJIZWFkZXIiLCJzaG93QmFyIiwiTmF2YmFySGVhZGVyIiwiYnJlYWRjcnVtYiIsInBhcmFtcyIsIkFQUF9OQU1FIiwibW9kdWxlcyIsIm1hbmFnZW1lbnQiLCJMYXlvdXRDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfdG9hc3QiLCJfaGVhZGVyIiwiX2JleW9uZF9jb250ZXh0IiwiX2FsZXJ0IiwiX2NvaW5zTW9kYWwiLCJzZXRSZWFkeSIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInNob3dDb2luc01vZGFsIiwic2V0U2hvd0NvaW5zTW9kYWwiLCJzaG93Q29pbnNBbGVydCIsInNldFNob3dDb2luc0FsZXJ0Iiwic2V0VXBkYXRlIiwidG9nZ2xlQ29pbnNBbGVydCIsIlByZWxvYWRTY3JlZW4iLCJ2YWx1ZSIsIkZyYWdtZW50IiwiUHJvdmlkZXIiLCJUb2FzdHMiXSwic291cmNlcyI6WyIvdHMvYnJva2VyLnRzIiwiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlldy9jb2lucy9hbGVydC50c3giLCIvdHMvdmlldy9jb2lucy9jb2lucy1tb2RhbC50c3giLCIvdHMvdmlldy9jb2lucy9jcmVkaXRzLnRzeCIsIi90cy92aWV3L2NvaW5zL25vdGlmaWNhdGlvbnMtYmFyLnRzeCIsIi90cy92aWV3L2NvbXBvbmVudHMvYW5pbWF0ZWQtbGFiZWwudHN4IiwiL3RzL3ZpZXcvY29tcG9uZW50cy9hbmltYXRlZC50c3giLCIvdHMvdmlldy9jb21wb25lbnRzL2hlYWRlci50c3giLCIvdHMvdmlldy9jb250ZXh0LnRzIiwiL3RzL3ZpZXcvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUVNLE1BQU9DLE1BQU8sU0FBUUYsTUFBQSxDQUFBRyxhQUFxQjtZQUNoRCxDQUFBQyxLQUFNO1lBQ04sSUFBSUEsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU07WUFDbkI7WUFDQSxJQUFJQyxVQUFVQSxDQUFBO2NBQ2IsT0FBTyxJQUFJLENBQUMsQ0FBQUQsS0FBTSxF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