System.register(["@beyond-js/widgets@1.1.1/render", "@beyond-js/kernel@0.1.9/bundle", "@aimpact/reactive@0.0.1/model", "@aimpact/ailearn-app@0.3.1/widgets/breadcrumb.widget", "@aimpact/ailearn-app@0.3.1/i18n.ts", "@beyond-js/react-18-widgets@1.1.3/base", "@aimpact/chat-sdk@1.4.1/core", "@aimpact/chat-sdk@1.4.1/wrapper", "@beyond-js/kernel@0.1.9/texts", "react@18.2.0", "pragmate-ui@1.0.0-beta.7/modal", "@beyond-js/react-18-widgets@1.1.3/hooks", "pragmate-ui@1.0.0-beta.7/chips", "pragmate-ui@1.0.0-beta.7/components", "@aimpact/ailearn-app@0.3.1/components/ui", "pragmate-ui@1.0.0-beta.7/icons", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.3.1/components/navbar-header.code", "pragmate-ui@1.0.0-beta.7/toast"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, bimport, __Bundle, __pkg, ims, LayoutBroker, Controller, Header, OverlayHeader, __beyond_pkg, hmr;
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
    }, function (_beyondJsReact18Widgets113Base) {
      dependency_5 = _beyondJsReact18Widgets113Base;
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
    }, function (_beyondJsReact18Widgets113Hooks) {
      dependency_11 = _beyondJsReact18Widgets113Hooks;
    }, function (_pragmateUi100Beta7Chips) {
      dependency_12 = _pragmateUi100Beta7Chips;
    }, function (_pragmateUi100Beta7Components) {
      dependency_13 = _pragmateUi100Beta7Components;
    }, function (_aimpactAilearnApp031ComponentsUi) {
      dependency_14 = _aimpactAilearnApp031ComponentsUi;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_15 = _pragmateUi100Beta7Icons;
    }, function (_framerMotion2) {
      dependency_16 = _framerMotion2;
    }, function (_aimpactAilearnApp031ComponentsNavbarHeaderCode) {
      dependency_17 = _aimpactAilearnApp031ComponentsNavbarHeaderCode;
    }, function (_pragmateUi100Beta7Toast) {
      dependency_18 = _pragmateUi100Beta7Toast;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", null], ["@aimpact/auth", null], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.1"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.3"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["@google-cloud/storage", "7.15.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.24.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.1"], ["@aimpact/ailearn-app", "0.3.1"]]);
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@aimpact/reactive/model', dependency_2], ['@aimpact/ailearn-app/widgets/breadcrumb.widget', dependency_3], ['@aimpact/ailearn-app/i18n.ts', dependency_4], ['@beyond-js/react-18-widgets/base', dependency_5], ['@aimpact/chat-sdk/core', dependency_6], ['@aimpact/chat-sdk/wrapper', dependency_7], ['@beyond-js/kernel/texts', dependency_8], ['react', dependency_9], ['pragmate-ui/modal', dependency_10], ['@beyond-js/react-18-widgets/hooks', dependency_11], ['pragmate-ui/chips', dependency_12], ['pragmate-ui/components', dependency_13], ['@aimpact/ailearn-app/components/ui', dependency_14], ['pragmate-ui/icons', dependency_15], ['framer-motion', dependency_16], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_17], ['pragmate-ui/toast', dependency_18]]);
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
        hash: 3748420723,
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
          var _ui = require("@aimpact/ailearn-app/components/ui");
          function CreditsContainer() {
            let {
              store,
              toggleCoinsModal,
              texts
            } = (0, _context.useLayoutContext)();
            const [message, setMessage] = _react.default.useState('');
            const [, setHasCredits] = _react.default.useState(store.hasCredits);
            const ref = (0, _react.useRef)(null);
            const cls = `credits__container ${!store.broker.canConsumeCredits ? ' is-disabled' : ''}`;
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
            const percentageAvailable = total / credits.total * 100;
            const label = store.broker.hasCredits ? `${total} ${texts.actions.available}` : texts.actions.require;
            return _react.default.createElement("div", {
              className: cls,
              ref: ref
            }, _react.default.createElement(_animatedLabel.AnimatedLabel, null, message), _react.default.createElement(Control, {
              ...attrs
            }, store.broker.hasCredits ? _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_ui.Battery, {
              percent: percentageAvailable
            }), _react.default.createElement("span", {
              className: "interactions-data"
            }, label)) : _react.default.createElement(_react.default.Fragment, null, label)));
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
        hash: 3691874982,
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
              className: "label-message",
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
        hash: 1607627375,
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
            const ref = _react.default.useRef();
            const {
              texts
            } = store;
            _react.default.useEffect(() => {
              globalThis.mainLayout = ref.current;
            }, []), (0, _hooks.useBinder)([store], () => setReady(store.ready));
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
            }, store.broker.overlay ? _react.default.createElement(_overlayHeader.OverlayHeader, null) : _react.default.createElement(_header.Header, null), _react.default.createElement(_notificationsBar.NotificationsBar, null), _react.default.createElement("main", null, _react.default.createElement("beyond-layout-children", {
              ref: ref
            }), _react.default.createElement(_toast.Toasts, null)))), ready && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_alert.CoinsAlert, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX2JyZWFkY3J1bWIiLCJfaTE4biIsIkJyb2tlciIsIlJlYWN0aXZlTW9kZWwiLCJtb2RlbCIsImhhc0NyZWRpdHMiLCJjcmVkaXRzIiwidG90YWwiLCJtZXNzYWdlIiwiYnJlYWRjcnVtYiIsImJyZWFkY3J1bWJTdG9yZSIsInNob3dDcmVkaXRzIiwicmVmcmVzaCIsInZhbHVlIiwiRXJyb3IiLCJ0cmlnZ2VyIiwiZ2xvYmFsVGV4dHMiLCJ0ZXh0cyIsImNhbkNvbnN1bWVDcmVkaXRzIiwiY29uc3RydWN0b3IiLCJwcm9wZXJ0aWVzIiwiZW5zdXJlQ3JlZGl0cyIsImJpbmQiLCJvbiIsInRyaWdnZXJFdmVudCIsImFkZE1vZGVsIiwiaWQiLCJ1bmRlZmluZWQiLCJvbkxpc3RlbiIsImNsZWFyTW9kZWwiLCJzYXZlZCIsImNhbGxiYWNrIiwic3BlY3MiLCJjb25zb2xlIiwiZXJyb3IiLCJzaG93TWVzc2FnZSIsInR5cGUiLCJnbG9iYWxUaGlzIiwic2V0VGltZW91dCIsImNsZWFyIiwib3ZlcmxheSIsInNldFRpdGxlIiwidGl0bGUiLCJzZXQiLCJwcm9wcyIsIml0ZW1zIiwidXBkYXRlZCIsImV4cG9ydHMiLCJMYXlvdXRCcm9rZXIiLCJfYmFzZSIsIl9zdG9yZSIsIl92aWV3IiwiQ29udHJvbGxlciIsIlJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJMYXlvdXQiLCJfd3JhcHBlciIsIl9icm9rZXIiLCJfdGV4dHMiLCJfYmV5b25kX2NvbnRleHQiLCJpc1N0b3JlIiwiYnJva2VyIiwiQ3VycmVudFRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwicmVhZHkiLCJpbml0IiwiQXBwV3JhcHBlciIsImlzUmVhZHkiLCJsaXN0ZW4iLCJjbG9zZSIsIm9mZiIsIl9yZWFjdCIsIl9tb2RhbCIsIkNvaW5zQWxlcnQiLCJzaG93Iiwib25DbG9zZSIsImNvaW5zIiwiYWxlcnQiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIkFsZXJ0TW9kYWwiLCJidXR0b25MYWJlbCIsImFjdGlvbiIsIm9uQ29uZmlybSIsImRlc2NyaXB0aW9uIiwiX2hvb2tzIiwiX2NoaXBzIiwiX2NvbXBvbmVudHMiLCJfYW5pbWF0ZWRMYWJlbCIsIl9jb250ZXh0IiwiX3VpIiwiQ3JlZGl0c0NvbnRhaW5lciIsInRvZ2dsZUNvaW5zTW9kYWwiLCJ1c2VMYXlvdXRDb250ZXh0Iiwic2V0TWVzc2FnZSIsInVzZVN0YXRlIiwic2V0SGFzQ3JlZGl0cyIsInJlZiIsInVzZVJlZiIsImNscyIsInNldENyZWRpdHMiLCJnZXRQcm9wZXJ0aWVzIiwiY29uc3VtZWQiLCJvbkNyZWRpdHNDaGFuZ2UiLCJjdXJyZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwibWVzc2FnZXMiLCJ1c2VCaW5kZXIiLCJoZWFkZXIiLCJDb250cm9sIiwiYXR0cnMiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwidmFyaWFudCIsImRpc2FibGVkIiwiQnV0dG9uIiwiQ2hpcCIsInBlcmNlbnRhZ2VBdmFpbGFibGUiLCJsYWJlbCIsImFjdGlvbnMiLCJhdmFpbGFibGUiLCJBbmltYXRlZExhYmVsIiwiRnJhZ21lbnQiLCJCYXR0ZXJ5IiwicGVyY2VudCIsIl9pY29ucyIsIl9mcmFtZXJNb3Rpb24iLCJfYW5pbWF0ZWQiLCJOb3RpZmljYXRpb25zQmFyIiwic2V0U2hvdyIsIkFuaW1hdGVQcmVzZW5jZSIsIkFuaW1hdGVkIiwiYXMiLCJIdG1sV3JhcHBlciIsIkljb24iLCJpY29uIiwiY2hpbGRyZW4iLCJ1c2VFZmZlY3QiLCJtb3Rpb24iLCJzcGFuIiwibGF5b3V0IiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJ3aWR0aCIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJleGl0IiwiQ29tcG9uZW50IiwiX25hdmJhckhlYWRlciIsIl9jcmVkaXRzIiwiSGVhZGVyIiwiaGFzTW9kZWwiLCJzZXRIYXNNb2RlbCIsInNldFVwZGF0ZWQiLCJobXIiLCJwZXJmb3JtYW5jZSIsIm5vdyIsIk5hdmJhckhlYWRlciIsIkljb25CdXR0b24iLCJPdmVybGF5SGVhZGVyIiwiY2xvc2FibGUiLCJiYWNrbGluayIsImJhY2tMaW5rIiwiTGF5b3V0Q29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfdG9hc3QiLCJfaGVhZGVyIiwiX2FsZXJ0IiwiX25vdGlmaWNhdGlvbnNCYXIiLCJfb3ZlcmxheUhlYWRlciIsInNldFJlYWR5Iiwic2hvd0NvaW5zTW9kYWwiLCJzZXRTaG93Q29pbnNNb2RhbCIsInNob3dDb2luc0FsZXJ0Iiwic2V0U2hvd0NvaW5zQWxlcnQiLCJzZXRVcGRhdGUiLCJ0b2dnbGVDb2luc0FsZXJ0IiwibWFpbkxheW91dCIsIm1vZGVsVHlwZSIsIlByb3ZpZGVyIiwiVG9hc3RzIiwiQ29pbnNNb2RhbCIsIm93bmVyIiwib25Db25zdW1lIiwiY29uc3VtZUNvaW5zIiwiUHJlbG9hZCIsIlJlYWN0Il0sInNvdXJjZXMiOlsiL3RzL2Jyb2tlci50cyIsIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXcvY29pbnMvYWxlcnQudHN4IiwiL3RzL3ZpZXcvY29pbnMvY3JlZGl0cy50c3giLCIvdHMvdmlldy9jb2lucy9ub3RpZmljYXRpb25zLWJhci50c3giLCIvdHMvdmlldy9jb21wb25lbnRzL2FuaW1hdGVkLWxhYmVsLnRzeCIsIi90cy92aWV3L2NvbXBvbmVudHMvYW5pbWF0ZWQudHN4IiwiL3RzL3ZpZXcvY29tcG9uZW50cy9oZWFkZXIudHN4IiwiL3RzL3ZpZXcvY29tcG9uZW50cy9vdmVybGF5LWhlYWRlci50c3giLCIvdHMvdmlldy9jb250ZXh0LnRzIiwiL2dsb2JhbC50c3giLCIvdHMvdmlldy9pbmRleC50c3giLCIvdHMvdmlldy9wcmVsb2FkLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51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