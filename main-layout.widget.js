System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.2.0/model", "@aimpact/ailearn-app@0.1.6-dev.34/widgets/breadcrumb.widget", "@aimpact/ailearn-app@0.1.6-dev.34/i18n.ts", "@beyond-js/react-18-widgets@1.1.2/base", "@aimpact/chat-sdk@1.2.0/core", "@aimpact/chat-sdk@1.2.0/wrapper", "@beyond-js/kernel@0.1.9/texts", "react@18.2.0", "pragmate-ui@1.0.0-beta.6/modal", "pragmate-ui@1.0.0-beta.6/components", "pragmate-ui@1.0.0-beta.6/chips", "@aimpact/ailearn-app@0.1.6-dev.34/components/ui", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.6/icons", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.1.6-dev.34/components/navbar-header.code", "pragmate-ui@1.0.0-beta.6/toast", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp016Dev34WidgetsBreadcrumbWidget) {
      dependency_3 = _aimpactAilearnApp016Dev34WidgetsBreadcrumbWidget;
    }, function (_aimpactAilearnApp016Dev34I18nTs) {
      dependency_4 = _aimpactAilearnApp016Dev34I18nTs;
    }, function (_beyondJsReact18Widgets112Base) {
      dependency_5 = _beyondJsReact18Widgets112Base;
    }, function (_aimpactChatSdk120Core) {
      dependency_6 = _aimpactChatSdk120Core;
    }, function (_aimpactChatSdk120Wrapper) {
      dependency_7 = _aimpactChatSdk120Wrapper;
    }, function (_beyondJsKernel019Texts) {
      dependency_8 = _beyondJsKernel019Texts;
    }, function (_react2) {
      dependency_9 = _react2;
    }, function (_pragmateUi100Beta6Modal) {
      dependency_10 = _pragmateUi100Beta6Modal;
    }, function (_pragmateUi100Beta6Components) {
      dependency_11 = _pragmateUi100Beta6Components;
    }, function (_pragmateUi100Beta6Chips) {
      dependency_12 = _pragmateUi100Beta6Chips;
    }, function (_aimpactAilearnApp016Dev34ComponentsUi) {
      dependency_13 = _aimpactAilearnApp016Dev34ComponentsUi;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_14 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi100Beta6Icons) {
      dependency_15 = _pragmateUi100Beta6Icons;
    }, function (_framerMotion2) {
      dependency_16 = _framerMotion2;
    }, function (_aimpactAilearnApp016Dev34ComponentsNavbarHeaderCode) {
      dependency_17 = _aimpactAilearnApp016Dev34ComponentsNavbarHeaderCode;
    }, function (_pragmateUi100Beta6Toast) {
      dependency_18 = _pragmateUi100Beta6Toast;
    }, function (_beyondJsKernel019Styles) {
      dependency_19 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.2.0"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.6"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["wavesurfer.js", "7.8.5"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.8"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["firebase", "10.13.1"], ["firebase-admin", "12.4.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.1.6-dev.34"], ["@aimpact/ailearn-app", "0.1.6-dev.34"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.34/main-layout",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/reactive/model', dependency_2], ['@aimpact/ailearn-app/widgets/breadcrumb.widget', dependency_3], ['@aimpact/ailearn-app/i18n.ts', dependency_4], ['@beyond-js/react-18-widgets/base', dependency_5], ['@aimpact/chat-sdk/core', dependency_6], ['@aimpact/chat-sdk/wrapper', dependency_7], ['@beyond-js/kernel/texts', dependency_8], ['react', dependency_9], ['pragmate-ui/modal', dependency_10], ['pragmate-ui/components', dependency_11], ['pragmate-ui/chips', dependency_12], ['@aimpact/ailearn-app/components/ui', dependency_13], ['@beyond-js/react-18-widgets/hooks', dependency_14], ['pragmate-ui/icons', dependency_15], ['framer-motion', dependency_16], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_17], ['pragmate-ui/toast', dependency_18], ['@beyond-js/kernel/styles', dependency_19]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "main-layout",
        "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.34/main-layout.widget",
        "is": "layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.6-dev.34/main-layout.widget');
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
        hash: 980056854,
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
        hash: 3740741705,
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
            const type = store.broker?.model?.modelType === 'tracking' ? 'interactive' : 'generative';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX2JyZWFkY3J1bWIiLCJfaTE4biIsIkJyb2tlciIsIlJlYWN0aXZlTW9kZWwiLCJtb2RlbCIsImhhc0NyZWRpdHMiLCJjcmVkaXRzIiwidG90YWwiLCJtZXNzYWdlIiwiYnJlYWRjcnVtYiIsImJyZWFkY3J1bWJTdG9yZSIsInNob3dDcmVkaXRzIiwib3ZlcmxheSIsInZhbHVlIiwidHJpZ2dlciIsImdsb2JhbFRleHRzIiwidGV4dHMiLCJjYW5Db25zdW1lQ3JlZGl0cyIsImJhY2tMaW5rIiwiY29uc3RydWN0b3IiLCJlbnN1cmVDcmVkaXRzIiwiYmluZCIsIm9uIiwidHJpZ2dlckV2ZW50IiwiYWRkTW9kZWwiLCJpZCIsInVuZGVmaW5lZCIsIm9uTGlzdGVuIiwiYXNzaWdubWVudElkIiwiY2xlYXJNb2RlbCIsInNhdmVkIiwiY2FsbGJhY2siLCJzcGVjcyIsImNvbnNvbGUiLCJlcnJvciIsInNob3dNZXNzYWdlIiwidHlwZSIsImdsb2JhbFRoaXMiLCJzZXRUaW1lb3V0IiwiY2xlYXIiLCJleHBvcnRzIiwiTGF5b3V0QnJva2VyIiwiX2Jhc2UiLCJfc3RvcmUiLCJfdmlldyIsIkNvbnRyb2xsZXIiLCJSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiV2lkZ2V0IiwiTGF5b3V0IiwiX3dyYXBwZXIiLCJfYnJva2VyIiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiYnJva2VyIiwiQ3VycmVudFRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwicmVhZHkiLCJpbml0IiwiQXBwV3JhcHBlciIsImlzUmVhZHkiLCJsaXN0ZW4iLCJjbG9zZSIsIm9mZiIsIl9yZWFjdCIsIl9tb2RhbCIsIkNvaW5zQWxlcnQiLCJzaG93Iiwib25DbG9zZSIsImNvaW5zIiwiYWxlcnQiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIkFsZXJ0TW9kYWwiLCJidXR0b25MYWJlbCIsImFjdGlvbiIsIm9uQ29uZmlybSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJfY29tcG9uZW50cyIsIl9jaGlwcyIsIl91aSIsIl9ob29rcyIsIl9hbmltYXRlZExhYmVsIiwiX2NvbnRleHQiLCJDcmVkaXRzQ29udGFpbmVyIiwidG9nZ2xlQ29pbnNNb2RhbCIsInVzZUxheW91dENvbnRleHQiLCJzZXRNZXNzYWdlIiwidXNlU3RhdGUiLCJzZXRIYXNDcmVkaXRzIiwicmVmIiwidXNlUmVmIiwiY2xzIiwic2V0Q3JlZGl0cyIsImNvbnN1bWVkIiwib25DcmVkaXRzQ2hhbmdlIiwiY3VycmVudCIsImNsYXNzTGlzdCIsImFkZCIsIm1lc3NhZ2VzIiwidXNlQmluZGVyIiwiaGVhZGVyIiwiQ29udHJvbCIsIkNoaXAiLCJCdXR0b24iLCJhdHRycyIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJ2YXJpYW50IiwiZGlzYWJsZWQiLCJwZXJjZW50YWdlQXZhaWxhYmxlIiwibGFiZWwiLCJhY3Rpb25zIiwiYXZhaWxhYmxlIiwiQW5pbWF0ZWRMYWJlbCIsIkJhdHRlcnkiLCJwZXJjZW50IiwiX2ljb25zIiwiX2ZyYW1lck1vdGlvbiIsIl9hbmltYXRlZCIsIk5vdGlmaWNhdGlvbnNCYXIiLCJzZXRTaG93IiwiQW5pbWF0ZVByZXNlbmNlIiwiQW5pbWF0ZWQiLCJhcyIsIkh0bWxXcmFwcGVyIiwiSWNvbiIsImljb24iLCJjaGlsZHJlbiIsInVzZUVmZmVjdCIsIm1vdGlvbiIsInNwYW4iLCJsYXlvdXQiLCJpbml0aWFsIiwib3BhY2l0eSIsIndpZHRoIiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImV4aXQiLCJDb21wb25lbnQiLCJfbmF2YmFySGVhZGVyIiwiX2NyZWRpdHMiLCJIZWFkZXIiLCJoYXNNb2RlbCIsInNldEhhc01vZGVsIiwidXBkYXRlZCIsInNldFVwZGF0ZWQiLCJobXIiLCJwZXJmb3JtYW5jZSIsIm5vdyIsIk5hdmJhckhlYWRlciIsIk92ZXJsYXlIZWFkZXIiLCJjbG9zYWJsZSIsImJhY2tsaW5rIiwiTGF5b3V0Q29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX3RvYXN0IiwiX2hlYWRlciIsIl9hbGVydCIsIl9ub3RpZmljYXRpb25zQmFyIiwiX292ZXJsYXlIZWFkZXIiLCJzZXRSZWFkeSIsInNob3dDb2luc01vZGFsIiwic2V0U2hvd0NvaW5zTW9kYWwiLCJzaG93Q29pbnNBbGVydCIsInNldFNob3dDb2luc0FsZXJ0Iiwic2V0VXBkYXRlIiwidG9nZ2xlQ29pbnNBbGVydCIsIkhlYWRlckNvbnRyb2wiLCJtb2RlbFR5cGUiLCJGcmFnbWVudCIsIlByb3ZpZGVyIiwiVG9hc3RzIiwiQ29pbnNNb2RhbCIsIm93bmVyIiwib25Db25zdW1lIiwiY29uc3VtZUNvaW5zIiwiUHJlbG9hZCIsIlJlYWN0Il0sInNvdXJjZXMiOlsiL3RzL2Jyb2tlci50cyIsIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXcvY29pbnMvYWxlcnQudHN4IiwiL3RzL3ZpZXcvY29pbnMvY3JlZGl0cy50c3giLCIvdHMvdmlldy9jb2lucy9ub3RpZmljYXRpb25zLWJhci50c3giLCIvdHMvdmlldy9jb21wb25lbnRzL2FuaW1hdGVkLWxhYmVsLnRzeCIsIi90cy92aWV3L2NvbXBvbmVudHMvYW5pbWF0ZWQudHN4IiwiL3RzL3ZpZXcvY29tcG9uZW50cy9oZWFkZXIudHN4IiwiL3RzL3ZpZXcvY29tcG9uZW50cy9vdmVybGF5LWhlYWRlci50c3giLCIvdHMvdmlldy9jb250ZXh0LnRzIiwiL3RzL3ZpZXcvaW5kZXgudHN4IiwiL3RzL3ZpZXcvcHJlbG9hZC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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