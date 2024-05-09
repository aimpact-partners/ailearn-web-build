System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.1.12/model", "@beyond-js/react-18-widgets@1.1.2/base", "@aimpact/chat-sdk@1.0.0/core", "@aimpact/chat@1.0.1/wrapper", "react@18.2.0", "pragmate-ui@0.1.1/modal", "@aimpact/ailearn-app@0.0.32/components/ui", "pragmate-ui@0.1.1/components", "pragmate-ui@0.1.1/chips", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@0.1.1/icons", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.0.32/components/navbar-header.code", "pragmate-ui@0.1.1/toast", "@aimpact/chat@1.0.1/shared/components", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, bimport, __Bundle, __pkg, ims, LayoutBroker, Controller, Header, OverlayHeader, __beyond_pkg, hmr;
  _export({
    LayoutBroker: void 0,
    Controller: void 0,
    Header: void 0,
    OverlayHeader: void 0
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
    }, function (_pragmateUi011Toast) {
      dependency_15 = _pragmateUi011Toast;
    }, function (_aimpactChat101SharedComponents) {
      dependency_16 = _aimpactChat101SharedComponents;
    }, function (_beyondJsKernel019Styles) {
      dependency_17 = _beyondJsKernel019Styles;
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/reactive/model', dependency_2], ['@beyond-js/react-18-widgets/base', dependency_3], ['@aimpact/chat-sdk/core', dependency_4], ['@aimpact/chat/wrapper', dependency_5], ['react', dependency_6], ['pragmate-ui/modal', dependency_7], ['@aimpact/ailearn-app/components/ui', dependency_8], ['pragmate-ui/components', dependency_9], ['pragmate-ui/chips', dependency_10], ['@beyond-js/react-18-widgets/hooks', dependency_11], ['pragmate-ui/icons', dependency_12], ['framer-motion', dependency_13], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_14], ['pragmate-ui/toast', dependency_15], ['@aimpact/chat/shared/components', dependency_16], ['@beyond-js/kernel/styles', dependency_17]]);
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
        hash: 846216306,
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
            #overlay;
            get overlay() {
              return this.#overlay;
            }
            set overlay(value) {
              if (this.#overlay === value) return;
              this.#overlay = value;
              this.trigger('change');
            }
            /**
             * Let's check if the user can consume coins
             *
             * The coins are available in Drafts Models and Assignment Models
             */
            #canConsumeCredits;
            get canConsumeCredits() {
              return this.#model?.canConsumeCredits || this.#canConsumeCredits;
            }
            set canConsumeCredits(value) {
              if (this.#canConsumeCredits === value) return;
              this.#canConsumeCredits = value;
              this.trigger('change');
            }
            #backLink;
            get backLink() {
              return this.#backLink;
            }
            constructor() {
              super();
              this.ensureCredits = this.ensureCredits.bind(this);
            }
            addModel(model, showCredits = true) {
              if (model.id === this.#model?.id) return;
              this.#model = model;
              this.#showCredits = showCredits;
              this.#model.on('change', this.onListen.bind(this));
              this.trigger('change');
              if (model.assignmentId) {
                this.#backLink = `/assignments/${model.assignmentId}`;
              }
              // logic for activities;
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
            clear() {
              this.#model = undefined;
              this.#breadcrumb = [];
              this.overlay = false;
              this.triggerEvent();
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
        hash: 705841434,
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
                const answer = await store.model.consumeCoins();
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
        hash: 2960115556,
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
            const cls = `credits__container${!store.broker.canConsumeCredits ? ' is-disabled' : ''}`;
            // the control changes based on the user's credits
            // if the user has credits, the control is a chip and does not have an onClick event
            const Control = store.broker.hasCredits ? _chips.Chip : _components.Button;
            const attrs = {
              className: 'credits-action',
              onClick: undefined,
              variant: store.broker.hasCredits ? 'success' : 'primary',
              disabled: store.broker.hasCredits || !store.broker.canConsumeCredits
            };
            const label = store.broker.hasCredits ? texts.actions.available : texts.actions.require;
            const onCreditsChange = type => {
              console.log(2, "im' here");
              ref.current.classList.add('success--container');
              setMessage(texts.messages[type]);
              setHasCredits(store.broker.hasCredits);
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
        hash: 3652372777,
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

      /************************************************
      INTERNAL MODULE: ./view/components/overlay-header
      ************************************************/

      ims.set('./view/components/overlay-header', {
        hash: 2194629961,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.OverlayHeader = OverlayHeader;
          var _react = require("react");
          var _navbarHeader = require("@aimpact/ailearn-app/components/navbar-header.code");
          var _context = require("../context");
          var _credits = require("../coins/credits");
          /*bundle*/
          function OverlayHeader() {
            const {
              store
            } = (0, _context.useLayoutContext)();
            return _react.default.createElement(_navbarHeader.NavbarHeader, {
              closable: true,
              backlink: store.broker.backLink
            }, !!store.broker.model && _react.default.createElement(_credits.CreditsContainer, null));
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
        hash: 1946992666,
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
          var _overlayHeader = require("./components/overlay-header");
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
              toggleCoinsModal,
              overlay: store.broker.overlay
            };
            const HeaderControl = !store.broker.overlay ? _header.Header : _overlayHeader.OverlayHeader;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_context.LayoutContext.Provider, {
              value: value
            }, _react.default.createElement("div", {
              className: "coins-layout__container"
            }, _react.default.createElement(HeaderControl, null), _react.default.createElement(_notificationsBar.NotificationsBar, null), _react.default.createElement("main", null, _react.default.createElement("beyond-layout-children", null), _react.default.createElement(_toast.Toasts, null)))), _react.default.createElement(_alert.CoinsAlert, {
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
      }, {
        "im": "./view/components/overlay-header",
        "from": "OverlayHeader",
        "name": "OverlayHeader"
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
        (require || prop === 'OverlayHeader') && _export("OverlayHeader", OverlayHeader = require ? require('./view/components/overlay-header').OverlayHeader : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiQnJva2VyIiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwiaGFzQ3JlZGl0cyIsImNyZWRpdHMiLCJ0b3RhbCIsIm1lc3NhZ2UiLCJicmVhZGNydW1iIiwidmFsdWUiLCJBcnJheSIsImlzQXJyYXkiLCJFcnJvciIsInRyaWdnZXIiLCJzaG93Q3JlZGl0cyIsIm92ZXJsYXkiLCJjYW5Db25zdW1lQ3JlZGl0cyIsImJhY2tMaW5rIiwiY29uc3RydWN0b3IiLCJlbnN1cmVDcmVkaXRzIiwiYmluZCIsImFkZE1vZGVsIiwiaWQiLCJvbiIsIm9uTGlzdGVuIiwiYXNzaWdubWVudElkIiwic2F2ZWQiLCJ0cmlnZ2VyRXZlbnQiLCJjYWxsYmFjayIsInNwZWNzIiwiY29uc29sZSIsImVycm9yIiwiYWRkQnJlYWRjcnVtYiIsIml0ZW1zIiwiYWRkTXVsdGlwbGVCcmVhZGNydW1iIiwidHJpbUJyZWFkY3J1bWIiLCJjb3VudCIsImxlbmd0aCIsInNob3dNZXNzYWdlIiwidHlwZSIsImdsb2JhbFRoaXMiLCJzZXRUaW1lb3V0IiwidW5kZWZpbmVkIiwiY2xlYXIiLCJleHBvcnRzIiwiTGF5b3V0QnJva2VyIiwiX2Jhc2UiLCJfc3RvcmUiLCJfdmlldyIsIkNvbnRyb2xsZXIiLCJSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiV2lkZ2V0IiwiTGF5b3V0IiwiX3dyYXBwZXIiLCJfYnJva2VyIiwiYnJva2VyIiwiQXBwV3JhcHBlciIsImxpc3RlbmVyIiwibGMiLCJsb2ciLCJpbml0IiwiaXNSZWFkeSIsInJlYWR5IiwiX3JlYWN0IiwiX21vZGFsIiwiQ29pbnNBbGVydCIsInNob3ciLCJvbkNsb3NlIiwidGV4dHMiLCJjb2lucyIsImFsZXJ0IiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJBbGVydE1vZGFsIiwiYnV0dG9uTGFiZWwiLCJhY3Rpb24iLCJvbkNvbmZpcm0iLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiX3VpIiwiQ29pbnNNb2RhbCIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJ1c2VTdGF0ZSIsInNldEVycm9yIiwibW9kYWwiLCJhbnN3ZXIiLCJjb25zdW1lQ29pbnMiLCJzdGF0dXMiLCJlcnJvcnMiLCJjb2RlIiwiZSIsIm5vQ3JlZGl0cyIsIkNvbmZpcm1Nb2RhbCIsImNsYXNzTmFtZSIsImNlbnRlcmVkIiwiYWN0aW9ucyIsImNvbmZpcm0iLCJsYWJlbCIsInZhcmlhbnQiLCJjYW5jZWwiLCJib3JkZXJlZCIsIm9uQ2FuY2VsIiwiRXJyb3JSZW5kZXJlciIsIkJhdHRlcnkiLCJwZXJjZW50IiwiX2NvbXBvbmVudHMiLCJfY2hpcHMiLCJfaG9va3MiLCJfYW5pbWF0ZWRMYWJlbCIsIl9jb250ZXh0IiwiQ3JlZGl0c0NvbnRhaW5lciIsInRvZ2dsZUNvaW5zTW9kYWwiLCJoZWFkZXIiLCJ1c2VMYXlvdXRDb250ZXh0Iiwic2V0TWVzc2FnZSIsInNldEhhc0NyZWRpdHMiLCJyZWYiLCJ1c2VSZWYiLCJjbHMiLCJDb250cm9sIiwiQ2hpcCIsIkJ1dHRvbiIsImF0dHJzIiwib25DbGljayIsImRpc2FibGVkIiwiYXZhaWxhYmxlIiwib25DcmVkaXRzQ2hhbmdlIiwiY3VycmVudCIsImNsYXNzTGlzdCIsImFkZCIsIm1lc3NhZ2VzIiwidXNlQmluZGVyIiwiQW5pbWF0ZWRMYWJlbCIsIl9pY29ucyIsIl9mcmFtZXJNb3Rpb24iLCJfYW5pbWF0ZWQiLCJOb3RpZmljYXRpb25zQmFyIiwic2V0U2hvdyIsIkFuaW1hdGVQcmVzZW5jZSIsIkFuaW1hdGVkIiwiYXMiLCJIdG1sV3JhcHBlciIsIkljb24iLCJpY29uIiwiY2hpbGRyZW4iLCJ1c2VFZmZlY3QiLCJtb3Rpb24iLCJzcGFuIiwibGF5b3V0IiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJ3aWR0aCIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJleGl0IiwiQ29tcG9uZW50IiwiX25hdmJhckhlYWRlciIsIl9jcmVkaXRzIiwiSGVhZGVyIiwic2hvd0JhciIsImhhc01vZGVsIiwic2V0SGFzTW9kZWwiLCJzZXRCcmVhZGNydW1iIiwiTmF2YmFySGVhZGVyIiwiT3ZlcmxheUhlYWRlciIsImNsb3NhYmxlIiwiYmFja2xpbmsiLCJMYXlvdXRDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfdG9hc3QiLCJfaGVhZGVyIiwiX2JleW9uZF9jb250ZXh0IiwiX2FsZXJ0IiwiX2NvaW5zTW9kYWwiLCJfbm90aWZpY2F0aW9uc0JhciIsIl9vdmVybGF5SGVhZGVyIiwic2V0UmVhZHkiLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJzaG93Q29pbnNNb2RhbCIsInNldFNob3dDb2luc01vZGFsIiwic2hvd0NvaW5zQWxlcnQiLCJzZXRTaG93Q29pbnNBbGVydCIsInNldFVwZGF0ZSIsInRvZ2dsZUNvaW5zQWxlcnQiLCJQcmVsb2FkU2NyZWVuIiwiSGVhZGVyQ29udHJvbCIsIkZyYWdtZW50IiwiUHJvdmlkZXIiLCJUb2FzdHMiXSwic291cmNlcyI6WyIvdHMvYnJva2VyLnRzIiwiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlldy9jb2lucy9hbGVydC50c3giLCIvdHMvdmlldy9jb2lucy9jb2lucy1tb2RhbC50c3giLCIvdHMvdmlldy9jb2lucy9jcmVkaXRzLnRzeCIsIi90cy92aWV3L2NvaW5zL25vdGlmaWNhdGlvbnMtYmFyLnRzeCIsIi90cy92aWV3L2NvbXBvbmVudHMvYW5pbWF0ZWQtbGFiZWwudHN4IiwiL3RzL3ZpZXcvY29tcG9uZW50cy9hbmltYXRlZC50c3giLCIvdHMvdmlldy9jb21wb25lbnRzL2hlYWRlci50c3giLCIvdHMvdmlldy9jb21wb25lbnRzL292ZXJsYXktaGVhZGVyLnRzeCIsIi90cy92aWV3L2NvbnRleHQudHMiLCIvdHMvdmlldy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxs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