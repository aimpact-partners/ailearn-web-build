System.register(["@beyond-js/widgets@1.1.1/render", "@beyond-js/kernel@0.1.9/bundle", "@aimpact/reactive@0.0.1/model", "@aimpact/ailearn-app@0.3.1/widgets/breadcrumb.widget", "@aimpact/ailearn-app@0.3.1/i18n.ts", "@beyond-js/react-18-widgets@1.1.3/base", "@aimpact/chat-sdk@1.4.1/core", "@aimpact/chat-sdk@1.4.1/wrapper", "@beyond-js/kernel@0.1.9/texts", "react@18.2.0", "pragmate-ui@1.0.0-beta.7/modal", "@beyond-js/react-18-widgets@1.1.3/hooks", "pragmate-ui@1.0.0-beta.7/chips", "pragmate-ui@1.0.0-beta.7/components", "@aimpact/ailearn-app@0.3.1/components/ui", "pragmate-ui@1.0.0-beta.7/icons", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.3.1/components/navbar-header.code", "pragmate-ui@1.0.0-beta.7/toast", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context2) {
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
    }, function (_beyondJsKernel019Styles) {
      dependency_19 = _beyondJsKernel019Styles;
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@aimpact/reactive/model', dependency_2], ['@aimpact/ailearn-app/widgets/breadcrumb.widget', dependency_3], ['@aimpact/ailearn-app/i18n.ts', dependency_4], ['@beyond-js/react-18-widgets/base', dependency_5], ['@aimpact/chat-sdk/core', dependency_6], ['@aimpact/chat-sdk/wrapper', dependency_7], ['@beyond-js/kernel/texts', dependency_8], ['react', dependency_9], ['pragmate-ui/modal', dependency_10], ['@beyond-js/react-18-widgets/hooks', dependency_11], ['pragmate-ui/chips', dependency_12], ['pragmate-ui/components', dependency_13], ['@aimpact/ailearn-app/components/ui', dependency_14], ['pragmate-ui/icons', dependency_15], ['framer-motion', dependency_16], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_17], ['pragmate-ui/toast', dependency_18], ['@beyond-js/kernel/styles', dependency_19]]);
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