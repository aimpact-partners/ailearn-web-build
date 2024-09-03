System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.2.0/model", "@aimpact/ailearn-app@0.1.6-dev.17/widgets/breadcrumb.widget", "@aimpact/ailearn-app@0.1.6-dev.17/i18n.ts", "@beyond-js/react-18-widgets@1.1.2/base", "@aimpact/chat-sdk@1.1.0/core", "@aimpact/chat-sdk@1.1.0/wrapper", "@beyond-js/kernel@0.1.9/texts", "pragmate-ui@1.0.0-beta.2/modal", "react@18.2.0", "pragmate-ui@1.0.0-beta.2/components", "pragmate-ui@1.0.0-beta.2/chips", "@aimpact/ailearn-app@0.1.6-dev.17/components/ui", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.2/icons", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.1.6-dev.17/components/navbar-header.code", "pragmate-ui@1.0.0-beta.2/toast", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, bimport, __Bundle, __pkg, ims, LayoutBroker, Controller, Header, OverlayHeader, __beyond_pkg, hmr;
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
    }, function (_beyondJsReactive120Model) {
      dependency_2 = _beyondJsReactive120Model;
    }, function (_aimpactAilearnApp016Dev17WidgetsBreadcrumbWidget) {
      dependency_3 = _aimpactAilearnApp016Dev17WidgetsBreadcrumbWidget;
    }, function (_aimpactAilearnApp016Dev17I18nTs) {
      dependency_4 = _aimpactAilearnApp016Dev17I18nTs;
    }, function (_beyondJsReact18Widgets112Base) {
      dependency_5 = _beyondJsReact18Widgets112Base;
    }, function (_aimpactChatSdk110Core) {
      dependency_6 = _aimpactChatSdk110Core;
    }, function (_aimpactChatSdk110Wrapper) {
      dependency_7 = _aimpactChatSdk110Wrapper;
    }, function (_beyondJsKernel019Texts) {
      dependency_8 = _beyondJsKernel019Texts;
    }, function (_pragmateUi100Beta2Modal) {
      dependency_9 = _pragmateUi100Beta2Modal;
    }, function (_react2) {
      dependency_10 = _react2;
    }, function (_pragmateUi100Beta2Components) {
      dependency_11 = _pragmateUi100Beta2Components;
    }, function (_pragmateUi100Beta2Chips) {
      dependency_12 = _pragmateUi100Beta2Chips;
    }, function (_aimpactAilearnApp016Dev17ComponentsUi) {
      dependency_13 = _aimpactAilearnApp016Dev17ComponentsUi;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_14 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi100Beta2Icons) {
      dependency_15 = _pragmateUi100Beta2Icons;
    }, function (_framerMotion2) {
      dependency_16 = _framerMotion2;
    }, function (_aimpactAilearnApp016Dev17ComponentsNavbarHeaderCode) {
      dependency_17 = _aimpactAilearnApp016Dev17ComponentsNavbarHeaderCode;
    }, function (_pragmateUi100Beta2Toast) {
      dependency_18 = _pragmateUi100Beta2Toast;
    }, function (_beyondJsKernel019Styles) {
      dependency_19 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", null], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.1.0"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.2"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.6.0"], ["markdown-it", "14.1.0"], ["markdown-it-katex", "2.0.3"], ["markdown-it-math", "4.1.1"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prism-themes", "1.9.0"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["react-katex", "3.0.1"], ["react-syntax-highlighter", "15.5.0"], ["simplebar-react", "3.2.6"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["wavesurfer.js", "7.8.4"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.1.6-dev.17"], ["@aimpact/ailearn-app", "0.1.6-dev.17"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.17/main-layout",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/reactive/model', dependency_2], ['@aimpact/ailearn-app/widgets/breadcrumb.widget', dependency_3], ['@aimpact/ailearn-app/i18n.ts', dependency_4], ['@beyond-js/react-18-widgets/base', dependency_5], ['@aimpact/chat-sdk/core', dependency_6], ['@aimpact/chat-sdk/wrapper', dependency_7], ['@beyond-js/kernel/texts', dependency_8], ['pragmate-ui/modal', dependency_9], ['react', dependency_10], ['pragmate-ui/components', dependency_11], ['pragmate-ui/chips', dependency_12], ['@aimpact/ailearn-app/components/ui', dependency_13], ['@beyond-js/react-18-widgets/hooks', dependency_14], ['pragmate-ui/icons', dependency_15], ['framer-motion', dependency_16], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_17], ['pragmate-ui/toast', dependency_18], ['@beyond-js/kernel/styles', dependency_19]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "main-layout",
        "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.17/main-layout.widget",
        "is": "layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.6-dev.17/main-layout.widget');
      ims = new Map();
      /************************
      INTERNAL MODULE: ./broker
      ************************/
      ims.set('./broker', {
        hash: 2345498243,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LayoutBroker = exports.Broker = void 0;
          var _model = require("@beyond-js/reactive/model");
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
              return _breadcrumb.breadcrumbStore.breadcrumb;
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
            #backLink;
            get backLink() {
              return this.#backLink;
            }
            set backLink(value) {
              this.#backLink = value;
              this.trigger('change');
            }
            constructor() {
              super();
              this.ensureCredits = this.ensureCredits.bind(this);
              _i18n.globalTexts.on('change', this.triggerEvent.bind(this));
            }
            addModel(model, showCredits = true) {
              if (model.id !== undefined && model.id === this.#model?.id) return;
              this.#model = model;
              this.#showCredits = showCredits;
              this.#model.on('change', this.onListen.bind(this));
              this.trigger('change');
              if (model.assignmentId) {
                this.#backLink = `/assignments/${model.assignmentId}`;
              }
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
        hash: 3385534773,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _wrapper = require("@aimpact/chat-sdk/wrapper");
          var _broker = require("./broker");
          var _texts = require("@beyond-js/kernel/texts");
          var _beyond_context = require("beyond_context");
          var _i18n = require("@aimpact/ailearn-app/i18n.ts");
          class StoreManager extends _model.ReactiveModel {
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
        hash: 1864987226,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CoinsAlert = CoinsAlert;
          var _modal = require("pragmate-ui/modal");
          function CoinsAlert({
            show,
            onClose,
            texts,
            globalTexts
          }) {
            if (!show) return null;
            texts = texts.coins.alert;
            return React.createElement(_modal.AlertModal, {
              show: true,
              buttonLabel: texts.action,
              onConfirm: onClose,
              onClose: onClose
            }, React.createElement("header", null, React.createElement("h3", null, texts.title), React.createElement("p", null, texts.description)));
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./view/coins/credits
      ************************************/

      ims.set('./view/coins/credits', {
        hash: 2001080002,
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
            let {
              store,
              toggleCoinsModal,
              texts
            } = (0, _context.useLayoutContext)();
            const [message, setMessage] = _react.default.useState('');
            const [, setHasCredits] = _react.default.useState(store.hasCredits);
            const ref = (0, _react.useRef)(null);
            const cls = `credits__container${!store.broker.canConsumeCredits ? ' is-disabled' : ''}`;
            const [credits, setCredits] = _react.default.useState(store.model?.credits ?? {
              total: 0,
              consumed: 0
            });
            const onCreditsChange = type => {
              ref.current.classList.add('success--container');
              setMessage(texts?.messages[type]);
              setCredits(store.broker.model?.credits);
              setHasCredits(store.broker.hasCredits);
            };
            (0, _hooks.useBinder)([store.broker.model], onCreditsChange, 'credits.change');
            if (!texts?.coins) return null;
            texts = texts.coins.header;
            // the control changes based on the user's credits
            // if the user has credits, the control is a chip and does not have an onClick event
            const Control = store.broker.hasCredits ? _chips.Chip : _components.Button;
            const attrs = {
              className: 'credits-action',
              onClick: undefined,
              variant: store.broker.hasCredits ? 'success' : 'primary',
              disabled: store.broker.hasCredits || !store.broker.canConsumeCredits
            };
            if (!store.broker.hasCredits) {
              attrs.onClick = toggleCoinsModal;
            } else {
              attrs.className = 'success--chip';
            }
            const total = credits ? credits.total - credits.consumed : 0;
            const percentageAvailable = total / credits.total * 100;
            const label = store.broker.hasCredits ? `${total} ${texts.actions.available}` : texts.actions.require;
            return _react.default.createElement("div", {
              className: cls,
              ref: ref
            }, _react.default.createElement(_animatedLabel.AnimatedLabel, null, message), store.broker.hasCredits && _react.default.createElement(_ui.Battery, {
              percent: percentageAvailable
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
        hash: 3047296314,
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
              store
            } = (0, _context.useLayoutContext)();
            const [hasModel, setHasModel] = _react.default.useState(!!store.broker.model);
            const [updated, setUpdated] = _react.default.useState();
            (0, _hooks.useBinder)([_navbarHeader.hmr], () => setUpdated(performance.now()));
            (0, _hooks.useBinder)([store.broker], () => setHasModel(!!store.broker.model));
            return _react.default.createElement(_navbarHeader.NavbarHeader, {
              updated: updated
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
        hash: 231537193,
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
            const HeaderControl = !store.broker.overlay ? _header.Header : _overlayHeader.OverlayHeader;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_context.LayoutContext.Provider, {
              value: value
            }, _react.default.createElement("div", {
              className: "main-layout__container"
            }, _react.default.createElement(HeaderControl, null), _react.default.createElement(_notificationsBar.NotificationsBar, null), _react.default.createElement("main", null, _react.default.createElement("beyond-layout-children", null), _react.default.createElement(_toast.Toasts, null)))), ready && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_alert.CoinsAlert, {
              texts: texts,
              globalTexts: store.globalTexts,
              show: showCoinsAlert,
              onClose: toggleCoinsAlert
            }), _react.default.createElement(_ui.CoinsModal, {
              owner: store.model?.owner,
              globalTexts: store.globalTexts,
              onConsume: store.model?.consumeCoins,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX2JyZWFkY3J1bWIiLCJfaTE4biIsIkJyb2tlciIsIlJlYWN0aXZlTW9kZWwiLCJtb2RlbCIsImhhc0NyZWRpdHMiLCJjcmVkaXRzIiwidG90YWwiLCJtZXNzYWdlIiwiYnJlYWRjcnVtYiIsImJyZWFkY3J1bWJTdG9yZSIsInNob3dDcmVkaXRzIiwib3ZlcmxheSIsInZhbHVlIiwidHJpZ2dlciIsImdsb2JhbFRleHRzIiwidGV4dHMiLCJjYW5Db25zdW1lQ3JlZGl0cyIsImJhY2tMaW5rIiwiY29uc3RydWN0b3IiLCJlbnN1cmVDcmVkaXRzIiwiYmluZCIsIm9uIiwidHJpZ2dlckV2ZW50IiwiYWRkTW9kZWwiLCJpZCIsInVuZGVmaW5lZCIsIm9uTGlzdGVuIiwiYXNzaWdubWVudElkIiwiY2xlYXJNb2RlbCIsInNhdmVkIiwiY2FsbGJhY2siLCJzcGVjcyIsImNvbnNvbGUiLCJlcnJvciIsInNob3dNZXNzYWdlIiwidHlwZSIsImdsb2JhbFRoaXMiLCJzZXRUaW1lb3V0IiwiY2xlYXIiLCJleHBvcnRzIiwiTGF5b3V0QnJva2VyIiwiX2Jhc2UiLCJfc3RvcmUiLCJfdmlldyIsIkNvbnRyb2xsZXIiLCJSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiV2lkZ2V0IiwiTGF5b3V0IiwiX3dyYXBwZXIiLCJfYnJva2VyIiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiYnJva2VyIiwiQ3VycmVudFRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwicmVhZHkiLCJpbml0IiwiQXBwV3JhcHBlciIsImlzUmVhZHkiLCJsaXN0ZW4iLCJjbG9zZSIsIm9mZiIsIl9tb2RhbCIsIkNvaW5zQWxlcnQiLCJzaG93Iiwib25DbG9zZSIsImNvaW5zIiwiYWxlcnQiLCJSZWFjdCIsImNyZWF0ZUVsZW1lbnQiLCJBbGVydE1vZGFsIiwiYnV0dG9uTGFiZWwiLCJhY3Rpb24iLCJvbkNvbmZpcm0iLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiX3JlYWN0IiwiX2NvbXBvbmVudHMiLCJfY2hpcHMiLCJfdWkiLCJfaG9va3MiLCJfYW5pbWF0ZWRMYWJlbCIsIl9jb250ZXh0IiwiQ3JlZGl0c0NvbnRhaW5lciIsInRvZ2dsZUNvaW5zTW9kYWwiLCJ1c2VMYXlvdXRDb250ZXh0Iiwic2V0TWVzc2FnZSIsImRlZmF1bHQiLCJ1c2VTdGF0ZSIsInNldEhhc0NyZWRpdHMiLCJyZWYiLCJ1c2VSZWYiLCJjbHMiLCJzZXRDcmVkaXRzIiwiY29uc3VtZWQiLCJvbkNyZWRpdHNDaGFuZ2UiLCJjdXJyZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwibWVzc2FnZXMiLCJ1c2VCaW5kZXIiLCJoZWFkZXIiLCJDb250cm9sIiwiQ2hpcCIsIkJ1dHRvbiIsImF0dHJzIiwiY2xhc3NOYW1lIiwib25DbGljayIsInZhcmlhbnQiLCJkaXNhYmxlZCIsInBlcmNlbnRhZ2VBdmFpbGFibGUiLCJsYWJlbCIsImFjdGlvbnMiLCJhdmFpbGFibGUiLCJBbmltYXRlZExhYmVsIiwiQmF0dGVyeSIsInBlcmNlbnQiLCJfaWNvbnMiLCJfZnJhbWVyTW90aW9uIiwiX2FuaW1hdGVkIiwiTm90aWZpY2F0aW9uc0JhciIsInNldFNob3ciLCJBbmltYXRlUHJlc2VuY2UiLCJBbmltYXRlZCIsImFzIiwiSHRtbFdyYXBwZXIiLCJJY29uIiwiaWNvbiIsImNoaWxkcmVuIiwidXNlRWZmZWN0IiwibW90aW9uIiwic3BhbiIsImxheW91dCIsImluaXRpYWwiLCJvcGFjaXR5Iiwid2lkdGgiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZXhpdCIsIkNvbXBvbmVudCIsIl9uYXZiYXJIZWFkZXIiLCJfY3JlZGl0cyIsIkhlYWRlciIsImhhc01vZGVsIiwic2V0SGFzTW9kZWwiLCJ1cGRhdGVkIiwic2V0VXBkYXRlZCIsImhtciIsInBlcmZvcm1hbmNlIiwibm93IiwiTmF2YmFySGVhZGVyIiwiT3ZlcmxheUhlYWRlciIsImNsb3NhYmxlIiwiYmFja2xpbmsiLCJMYXlvdXRDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfdG9hc3QiLCJfaGVhZGVyIiwiX2FsZXJ0IiwiX25vdGlmaWNhdGlvbnNCYXIiLCJfb3ZlcmxheUhlYWRlciIsInNldFJlYWR5Iiwic2hvd0NvaW5zTW9kYWwiLCJzZXRTaG93Q29pbnNNb2RhbCIsInNob3dDb2luc0FsZXJ0Iiwic2V0U2hvd0NvaW5zQWxlcnQiLCJzZXRVcGRhdGUiLCJ0b2dnbGVDb2luc0FsZXJ0IiwiSGVhZGVyQ29udHJvbCIsIkZyYWdtZW50IiwiUHJvdmlkZXIiLCJUb2FzdHMiLCJDb2luc01vZGFsIiwib3duZXIiLCJvbkNvbnN1bWUiLCJjb25zdW1lQ29pbnMiLCJQcmVsb2FkIl0sInNvdXJjZXMiOlsiL3RzL2Jyb2tlci50cyIsIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXcvY29pbnMvYWxlcnQudHN4IiwiL3RzL3ZpZXcvY29pbnMvY3JlZGl0cy50c3giLCIvdHMvdmlldy9jb2lucy9ub3RpZmljYXRpb25zLWJhci50c3giLCIvdHMvdmlldy9jb21wb25lbnRzL2FuaW1hdGVkLWxhYmVsLnRzeCIsIi90cy92aWV3L2NvbXBvbmVudHMvYW5pbWF0ZWQudHN4IiwiL3RzL3ZpZXcvY29tcG9uZW50cy9oZWFkZXIudHN4IiwiL3RzL3ZpZXcvY29tcG9uZW50cy9vdmVybGF5LWhlYWRlci50c3giLCIvdHMvdmlldy9jb250ZXh0LnRzIiwiL3RzL3ZpZXcvaW5kZXgudHN4IiwiL3RzL3ZpZXcvcHJlbG9hZC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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