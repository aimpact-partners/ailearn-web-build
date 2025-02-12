System.register(["@beyond-js/widgets@1.1.1/render", "@beyond-js/kernel@0.1.9/bundle", "@aimpact/reactive@0.0.1/model", "@aimpact/ailearn-app@0.3.1/widgets/breadcrumb.widget", "@aimpact/ailearn-app@0.3.1/i18n.ts", "@beyond-js/react-18-widgets@1.1.2/base", "@aimpact/chat-sdk@1.4.1/core", "@aimpact/chat-sdk@1.4.1/wrapper", "@beyond-js/kernel@0.1.9/texts", "react@18.2.0", "pragmate-ui@1.0.0-beta.7/modal", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.7/chips", "pragmate-ui@1.0.0-beta.7/components", "pragmate-ui@1.0.0-beta.7/icons", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.3.1/components/navbar-header.code", "pragmate-ui@1.0.0-beta.7/toast", "@aimpact/ailearn-app@0.3.1/components/ui", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, bimport, __Bundle, __pkg, ims, LayoutBroker, Controller, Header, OverlayHeader, __beyond_pkg, hmr;
  _export({
    LayoutBroker: void 0,
    Controller: void 0,
    Header: void 0,
    OverlayHeader: void 0
  });
  return {
    setters: [function (_beyondJsWidgets111Render) {
      dependency_0 = _beyondJsWidgets111Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_aimpactReactive001Model) {
      dependency_2 = _aimpactReactive001Model;
    }, function (_aimpactAilearnApp031WidgetsBreadcrumbWidget) {
      dependency_3 = _aimpactAilearnApp031WidgetsBreadcrumbWidget;
    }, function (_aimpactAilearnApp031I18nTs) {
      dependency_4 = _aimpactAilearnApp031I18nTs;
    }, function (_beyondJsReact18Widgets112Base) {
      dependency_5 = _beyondJsReact18Widgets112Base;
    }, function (_aimpactChatSdk141Core) {
      dependency_6 = _aimpactChatSdk141Core;
    }, function (_aimpactChatSdk141Wrapper) {
      dependency_7 = _aimpactChatSdk141Wrapper;
    }, function (_beyondJsKernel019Texts) {
      dependency_8 = _beyondJsKernel019Texts;
    }, function (_react2) {
      dependency_9 = _react2;
    }, function (_pragmateUi100Beta7Modal) {
      dependency_10 = _pragmateUi100Beta7Modal;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_11 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi100Beta7Chips) {
      dependency_12 = _pragmateUi100Beta7Chips;
    }, function (_pragmateUi100Beta7Components) {
      dependency_13 = _pragmateUi100Beta7Components;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_14 = _pragmateUi100Beta7Icons;
    }, function (_framerMotion2) {
      dependency_15 = _framerMotion2;
    }, function (_aimpactAilearnApp031ComponentsNavbarHeaderCode) {
      dependency_16 = _aimpactAilearnApp031ComponentsNavbarHeaderCode;
    }, function (_pragmateUi100Beta7Toast) {
      dependency_17 = _pragmateUi100Beta7Toast;
    }, function (_aimpactAilearnApp031ComponentsUi) {
      dependency_18 = _aimpactAilearnApp031ComponentsUi;
    }, function (_beyondJsKernel019Styles) {
      dependency_19 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", null], ["@aimpact/auth", null], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.1"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["@google-cloud/storage", "7.15.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.24.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.1"], ["@aimpact/ailearn-app", "0.3.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.3.1/main-layout",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@aimpact/reactive/model', dependency_2], ['@aimpact/ailearn-app/widgets/breadcrumb.widget', dependency_3], ['@aimpact/ailearn-app/i18n.ts', dependency_4], ['@beyond-js/react-18-widgets/base', dependency_5], ['@aimpact/chat-sdk/core', dependency_6], ['@aimpact/chat-sdk/wrapper', dependency_7], ['@beyond-js/kernel/texts', dependency_8], ['react', dependency_9], ['pragmate-ui/modal', dependency_10], ['@beyond-js/react-18-widgets/hooks', dependency_11], ['pragmate-ui/chips', dependency_12], ['pragmate-ui/components', dependency_13], ['pragmate-ui/icons', dependency_14], ['framer-motion', dependency_15], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_16], ['pragmate-ui/toast', dependency_17], ['@aimpact/ailearn-app/components/ui', dependency_18], ['@beyond-js/kernel/styles', dependency_19]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "main-layout",
        "vspecifier": "@aimpact/ailearn-app@0.3.1/main-layout.widget",
        "is": "layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.3.1/main-layout.widget');
      ims = new Map();
      /************************
      INTERNAL MODULE: ./broker
      ************************/
      ims.set('./broker', {
        hash: 8240255,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LayoutBroker = exports.Broker = void 0;
          var _model = require("@aimpact/reactive/model");
          var _breadcrumb = require("@aimpact/ailearn-app/widgets/breadcrumb.widget");
          var _i18n = require("@aimpact/ailearn-app/i18n.ts");
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
            get breadcrumb() {
              return _breadcrumb.breadcrumbStore;
            }
            #showCredits;
            get showCredits() {
              return this.#showCredits;
            }
            #refresh;
            get refresh() {
              return this.#refresh;
            }
            set refresh(value) {
              if (typeof value !== 'function' && value !== null) {
                throw new Error('Invalid value provided, the refresh method must be a function');
              }
              this.#refresh = value;
              this.trigger('change');
            }
            get globalTexts() {
              return _i18n.globalTexts.texts;
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
            constructor() {
              super({
                properties: ['title', 'backLink', 'overlay']
              });
              this.ensureCredits = this.ensureCredits.bind(this);
              _i18n.globalTexts.on('change', this.triggerEvent.bind(this));
            }
            addModel(model, showCredits = true) {
              if (model.id !== undefined && model.id === this.#model?.id) return;
              this.#model = model;
              this.#showCredits = showCredits;
              this.#model.on('change', this.onListen.bind(this));
              this.trigger('change');
              // logic for activities;
            }
            clearModel() {
              this.#model = undefined;
              this.#showCredits = false;
            }
            async onListen() {
              if (this.#showCredits === this.#model?.saved) {
                return;
              }
              this.#showCredits = this.#model?.saved;
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
              this.overlay = false;
              this.triggerEvent();
            }
            setTitle(title) {
              this.title = title;
            }
            set({
              breadcrumb,
              ...props
            }) {
              super.set(props);
              this.breadcrumb.set({
                items: breadcrumb
              });
              return {
                updated: true
              };
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
        hash: 514040884,
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
            //@ts-ignore
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
        hash: 1864562254,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _model = require("@aimpact/reactive/model");
          var _wrapper = require("@aimpact/chat-sdk/wrapper");
          var _broker = require("./broker");
          var _texts = require("@beyond-js/kernel/texts");
          var _beyond_context = require("beyond_context");
          var _i18n = require("@aimpact/ailearn-app/i18n.ts");
          class StoreManager extends _model.ReactiveModel {
            isStore;
            #broker;
            get broker() {
              return this.#broker;
            }
            get showCredits() {
              return this.#broker.showCredits;
            }
            #texts = new _texts.CurrentTexts(_beyond_context.module.specifier);
            get texts() {
              return this.#texts?.value ?? {};
            }
            get globalTexts() {
              return _i18n.globalTexts.texts;
            }
            get model() {
              return this.#broker.model;
            }
            get saved() {
              return this.#broker?.model?.saved;
            }
            get ready() {
              return super.ready && this.#texts.ready && _i18n.globalTexts.ready;
            }
            constructor() {
              super();
              this.init();
            }
            init = async () => {
              await _wrapper.AppWrapper.isReady;
              super.ready = true;
              this.#broker = _broker.LayoutBroker;
              _wrapper.AppWrapper.on('change', this.triggerEvent);
              this.#broker.on('change', this.triggerEvent);
              this.#texts.on('change', this.triggerEvent);
              _i18n.globalTexts.on('change', this.triggerEvent);
            };
            listen = () => {
              this.#broker.on('change', this.triggerEvent);
              this.#texts.on('change', this.triggerEvent);
            };
            close() {
              this.#broker.off('change', this.triggerEvent);
              this.#texts.off('change', this.triggerEvent);
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /**********************************
      INTERNAL MODULE: ./view/coins/alert
      **********************************/

      ims.set('./view/coins/alert', {
        hash: 3536504213,
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
            texts,
            globalTexts
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

      /************************************
      INTERNAL MODULE: ./view/coins/credits
      ************************************/

      ims.set('./view/coins/credits', {
        hash: 3414444672,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CreditsContainer = CreditsContainer;
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _chips = require("pragmate-ui/chips");
          var _components = require("pragmate-ui/components");
          var _react = require("react");
          var _animatedLabel = require("../components/animated-label");
          var _context = require("../context");
          function CreditsContainer() {
            let {
              store,
              toggleCoinsModal,
              texts
            } = (0, _context.useLayoutContext)();
            const [message, setMessage] = _react.default.useState('');
            const [, setHasCredits] = _react.default.useState(store.hasCredits);
            const ref = (0, _react.useRef)(null);
            const cls = `credits__container${!store.broker.canConsumeCredits ? ' is-disabled' : ''}`;
            const [credits, setCredits] = _react.default.useState(store.model?.credits.getProperties() ?? {
              total: 0,
              consumed: 0
            });
            const onCreditsChange = type => {
              ref.current.classList.add('success--container');
              setMessage(texts?.messages[type]);
              setCredits({
                ...store.broker.model?.credits.getProperties()
              });
              setHasCredits(store.broker.hasCredits);
            };
            (0, _hooks.useBinder)([store.broker.model], onCreditsChange, 'credits.change');
            if (!texts?.coins) return null;
            texts = texts.coins.header;
            // the control changes based on the user's credits
            // if the user has credits, the control is a chip and does not have an onClick event
            let Control;
            const attrs = {
              className: 'credits-action',
              onClick: undefined,
              variant: store.broker.hasCredits ? 'success' : 'primary',
              disabled: store.broker.hasCredits || !store.broker.canConsumeCredits
            };
            if (!store.broker.hasCredits) {
              Control = _components.Button;
              attrs.onClick = toggleCoinsModal;
            } else {
              Control = _chips.Chip;
              attrs.className = 'success--chip';
            }
            const total = credits ? credits.total - credits.consumed : 0;
            const label = store.broker.hasCredits ? `${total} ${texts.actions.available}` : texts.actions.require;
            return _react.default.createElement("div", {
              className: cls,
              ref: ref
            }, _react.default.createElement(_animatedLabel.AnimatedLabel, null, message), _react.default.createElement(Control, {
              ...attrs
            }, label));
          }
        }
      });

      /**********************************************
      INTERNAL MODULE: ./view/coins/notifications-bar
      **********************************************/

      ims.set('./view/coins/notifications-bar', {
        hash: 3153698943,
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
        hash: 1313093558,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Header = Header;
          var _react = require("react");
          var _navbarHeader = require("@aimpact/ailearn-app/components/navbar-header.code");
          var _icons = require("pragmate-ui/icons");
          var _context = require("../context");
          var _credits = require("../coins/credits");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          /*bundle*/
          function Header() {
            const {
              store
            } = (0, _context.useLayoutContext)();
            const [hasModel, setHasModel] = _react.default.useState(!!store.broker.model);
            const [updated, setUpdated] = _react.default.useState();
            (0, _hooks.useBinder)([_navbarHeader.hmr], () => setUpdated(performance.now()));
            (0, _hooks.useBinder)([store.broker], () => setHasModel(!!store.broker.model));
            return _react.default.createElement(_navbarHeader.NavbarHeader, {
              store: store,
              updated: updated
            }, hasModel && _react.default.createElement(_credits.CreditsContainer, null), store.broker.refresh && _react.default.createElement(_icons.IconButton, {
              icon: "refresh",
              className: "circle",
              onClick: () => store.broker.refresh()
            }));
          }
        }
      });

      /************************************************
      INTERNAL MODULE: ./view/components/overlay-header
      ************************************************/

      ims.set('./view/components/overlay-header', {
        hash: 338688290,
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
              store: store,
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
        hash: 4272098812,
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

      /*****************************
      INTERNAL MODULE: ./view/global
      *****************************/

      ims.set('./view/global', {
        hash: 4223080399,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /****************************
      INTERNAL MODULE: ./view/index
      ****************************/

      ims.set('./view/index', {
        hash: 3122963098,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Layout = void 0;
          var _react = require("react");
          var _toast = require("pragmate-ui/toast");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _context = require("./context");
          var _header = require("./components/header");
          var _alert = require("./coins/alert");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _notificationsBar = require("./coins/notifications-bar");
          var _overlayHeader = require("./components/overlay-header");
          const Layout = ({
            store
          }) => {
            const [ready, setReady] = (0, _react.useState)(store.ready);
            const [showCoinsModal, setShowCoinsModal] = _react.default.useState(false);
            const [showCoinsAlert, setShowCoinsAlert] = _react.default.useState(false);
            const [, setUpdate] = (0, _react.useState)({});
            const toggleCoinsAlert = () => setShowCoinsAlert(!showCoinsAlert);
            const toggleCoinsModal = () => setShowCoinsModal(!showCoinsModal);
            const {
              texts
            } = store;
            (0, _hooks.useBinder)([store], () => setReady(store.ready));
            (0, _hooks.useBinder)([store.broker], toggleCoinsAlert, 'no.credits');
            (0, _hooks.useBinder)([store], () => setUpdate({}));
            const value = {
              store,
              texts,
              toggleCoinsModal,
              overlay: store.broker.overlay
            };
            const type = store.broker?.model?.modelType === 'tracking' ? 'interactive' : 'generative';
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_context.LayoutContext.Provider, {
              value: value
            }, _react.default.createElement("div", {
              className: "main-layout__container"
            }, store.broker.overlay ? _react.default.createElement(_overlayHeader.OverlayHeader, null) : _react.default.createElement(_header.Header, null), _react.default.createElement(_notificationsBar.NotificationsBar, null), _react.default.createElement("main", null, _react.default.createElement("beyond-layout-children", null), _react.default.createElement(_toast.Toasts, null)))), ready && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_alert.CoinsAlert, {
              texts: texts,
              globalTexts: store.globalTexts,
              show: showCoinsAlert,
              onClose: toggleCoinsAlert
            }), _react.default.createElement(_ui.CoinsModal, {
              owner: store.model?.owner,
              globalTexts: store.globalTexts,
              onConsume: store.model?.consumeCoins,
              type: type,
              show: showCoinsModal,
              onClose: toggleCoinsModal
            })));
          };
          exports.Layout = Layout;
        }
      });

      /******************************
      INTERNAL MODULE: ./view/preload
      ******************************/

      ims.set('./view/preload', {
        hash: 246890105,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Preload = Preload;
          function Preload() {
            return React.createElement(React.Fragment, null);
          }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX2JyZWFkY3J1bWIiLCJfaTE4biIsIkJyb2tlciIsIlJlYWN0aXZlTW9kZWwiLCJtb2RlbCIsImhhc0NyZWRpdHMiLCJjcmVkaXRzIiwidG90YWwiLCJtZXNzYWdlIiwiYnJlYWRjcnVtYiIsImJyZWFkY3J1bWJTdG9yZSIsInNob3dDcmVkaXRzIiwicmVmcmVzaCIsInZhbHVlIiwiRXJyb3IiLCJ0cmlnZ2VyIiwiZ2xvYmFsVGV4dHMiLCJ0ZXh0cyIsImNhbkNvbnN1bWVDcmVkaXRzIiwiY29uc3RydWN0b3IiLCJwcm9wZXJ0aWVzIiwiZW5zdXJlQ3JlZGl0cyIsImJpbmQiLCJvbiIsInRyaWdnZXJFdmVudCIsImFkZE1vZGVsIiwiaWQiLCJ1bmRlZmluZWQiLCJvbkxpc3RlbiIsImNsZWFyTW9kZWwiLCJzYXZlZCIsImNhbGxiYWNrIiwic3BlY3MiLCJjb25zb2xlIiwiZXJyb3IiLCJzaG93TWVzc2FnZSIsInR5cGUiLCJnbG9iYWxUaGlzIiwic2V0VGltZW91dCIsImNsZWFyIiwib3ZlcmxheSIsInNldFRpdGxlIiwidGl0bGUiLCJzZXQiLCJwcm9wcyIsIml0ZW1zIiwidXBkYXRlZCIsImV4cG9ydHMiLCJMYXlvdXRCcm9rZXIiLCJfYmFzZSIsIl9zdG9yZSIsIl92aWV3IiwiQ29udHJvbGxlciIsIlJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJMYXlvdXQiLCJfd3JhcHBlciIsIl9icm9rZXIiLCJfdGV4dHMiLCJfYmV5b25kX2NvbnRleHQiLCJpc1N0b3JlIiwiYnJva2VyIiwiQ3VycmVudFRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwicmVhZHkiLCJpbml0IiwiQXBwV3JhcHBlciIsImlzUmVhZHkiLCJsaXN0ZW4iLCJjbG9zZSIsIm9mZiIsIl9yZWFjdCIsIl9tb2RhbCIsIkNvaW5zQWxlcnQiLCJzaG93Iiwib25DbG9zZSIsImNvaW5zIiwiYWxlcnQiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIkFsZXJ0TW9kYWwiLCJidXR0b25MYWJlbCIsImFjdGlvbiIsIm9uQ29uZmlybSIsImRlc2NyaXB0aW9uIiwiX2hvb2tzIiwiX2NoaXBzIiwiX2NvbXBvbmVudHMiLCJfYW5pbWF0ZWRMYWJlbCIsIl9jb250ZXh0IiwiQ3JlZGl0c0NvbnRhaW5lciIsInRvZ2dsZUNvaW5zTW9kYWwiLCJ1c2VMYXlvdXRDb250ZXh0Iiwic2V0TWVzc2FnZSIsInVzZVN0YXRlIiwic2V0SGFzQ3JlZGl0cyIsInJlZiIsInVzZVJlZiIsImNscyIsInNldENyZWRpdHMiLCJnZXRQcm9wZXJ0aWVzIiwiY29uc3VtZWQiLCJvbkNyZWRpdHNDaGFuZ2UiLCJjdXJyZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwibWVzc2FnZXMiLCJ1c2VCaW5kZXIiLCJoZWFkZXIiLCJDb250cm9sIiwiYXR0cnMiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwidmFyaWFudCIsImRpc2FibGVkIiwiQnV0dG9uIiwiQ2hpcCIsImxhYmVsIiwiYWN0aW9ucyIsImF2YWlsYWJsZSIsIkFuaW1hdGVkTGFiZWwiLCJfaWNvbnMiLCJfZnJhbWVyTW90aW9uIiwiX2FuaW1hdGVkIiwiTm90aWZpY2F0aW9uc0JhciIsInNldFNob3ciLCJBbmltYXRlUHJlc2VuY2UiLCJBbmltYXRlZCIsImFzIiwiSHRtbFdyYXBwZXIiLCJJY29uIiwiaWNvbiIsImNoaWxkcmVuIiwidXNlRWZmZWN0IiwibW90aW9uIiwic3BhbiIsImxheW91dCIsImluaXRpYWwiLCJvcGFjaXR5Iiwid2lkdGgiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZXhpdCIsIkNvbXBvbmVudCIsIl9uYXZiYXJIZWFkZXIiLCJfY3JlZGl0cyIsIkhlYWRlciIsImhhc01vZGVsIiwic2V0SGFzTW9kZWwiLCJzZXRVcGRhdGVkIiwiaG1yIiwicGVyZm9ybWFuY2UiLCJub3ciLCJOYXZiYXJIZWFkZXIiLCJJY29uQnV0dG9uIiwiT3ZlcmxheUhlYWRlciIsImNsb3NhYmxlIiwiYmFja2xpbmsiLCJiYWNrTGluayIsIkxheW91dENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX3RvYXN0IiwiX2hlYWRlciIsIl9hbGVydCIsIl91aSIsIl9ub3RpZmljYXRpb25zQmFyIiwiX292ZXJsYXlIZWFkZXIiLCJzZXRSZWFkeSIsInNob3dDb2luc01vZGFsIiwic2V0U2hvd0NvaW5zTW9kYWwiLCJzaG93Q29pbnNBbGVydCIsInNldFNob3dDb2luc0FsZXJ0Iiwic2V0VXBkYXRlIiwidG9nZ2xlQ29pbnNBbGVydCIsIm1vZGVsVHlwZSIsIkZyYWdtZW50IiwiUHJvdmlkZXIiLCJUb2FzdHMiLCJDb2luc01vZGFsIiwib3duZXIiLCJvbkNvbnN1bWUiLCJjb25zdW1lQ29pbnMiLCJQcmVsb2FkIiwiUmVhY3QiXSwic291cmNlcyI6WyIvdHMvYnJva2VyLnRzIiwiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlldy9jb2lucy9hbGVydC50c3giLCIvdHMvdmlldy9jb2lucy9jcmVkaXRzLnRzeCIsIi90cy92aWV3L2NvaW5zL25vdGlmaWNhdGlvbnMtYmFyLnRzeCIsIi90cy92aWV3L2NvbXBvbmVudHMvYW5pbWF0ZWQtbGFiZWwudHN4IiwiL3RzL3ZpZXcvY29tcG9uZW50cy9hbmltYXRlZC50c3giLCIvdHMvdmlldy9jb21wb25lbnRzL2hlYWRlci50c3giLCIvdHMvdmlldy9jb21wb25lbnRzL292ZXJsYXktaGVhZGVyLnRzeCIsIi90cy92aWV3L2NvbnRleHQudHMiLCIvZ2xvYmFsLnRzeCIsIi90cy92aWV3L2luZGV4LnRzeCIsIi90cy92aWV3L3ByZWxvYWQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwi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