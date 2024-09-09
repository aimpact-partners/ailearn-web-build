System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.2.0/model", "@aimpact/ailearn-app@0.1.6-dev.21/widgets/breadcrumb.widget", "@aimpact/ailearn-app@0.1.6-dev.21/i18n.ts", "@beyond-js/react-18-widgets@1.1.2/base", "@aimpact/chat-sdk@1.1.0/core", "@aimpact/chat-sdk@1.1.0/wrapper", "@beyond-js/kernel@0.1.9/texts", "pragmate-ui@1.0.0-beta.6/modal", "react@18.3.1", "pragmate-ui@1.0.0-beta.6/components", "pragmate-ui@1.0.0-beta.6/chips", "@aimpact/ailearn-app@0.1.6-dev.21/components/ui", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.6/icons", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.1.6-dev.21/components/navbar-header.code", "pragmate-ui@1.0.0-beta.6/toast", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp016Dev21WidgetsBreadcrumbWidget) {
      dependency_3 = _aimpactAilearnApp016Dev21WidgetsBreadcrumbWidget;
    }, function (_aimpactAilearnApp016Dev21I18nTs) {
      dependency_4 = _aimpactAilearnApp016Dev21I18nTs;
    }, function (_beyondJsReact18Widgets112Base) {
      dependency_5 = _beyondJsReact18Widgets112Base;
    }, function (_aimpactChatSdk110Core) {
      dependency_6 = _aimpactChatSdk110Core;
    }, function (_aimpactChatSdk110Wrapper) {
      dependency_7 = _aimpactChatSdk110Wrapper;
    }, function (_beyondJsKernel019Texts) {
      dependency_8 = _beyondJsKernel019Texts;
    }, function (_pragmateUi100Beta6Modal) {
      dependency_9 = _pragmateUi100Beta6Modal;
    }, function (_react2) {
      dependency_10 = _react2;
    }, function (_pragmateUi100Beta6Components) {
      dependency_11 = _pragmateUi100Beta6Components;
    }, function (_pragmateUi100Beta6Chips) {
      dependency_12 = _pragmateUi100Beta6Chips;
    }, function (_aimpactAilearnApp016Dev21ComponentsUi) {
      dependency_13 = _aimpactAilearnApp016Dev21ComponentsUi;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_14 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi100Beta6Icons) {
      dependency_15 = _pragmateUi100Beta6Icons;
    }, function (_framerMotion2) {
      dependency_16 = _framerMotion2;
    }, function (_aimpactAilearnApp016Dev21ComponentsNavbarHeaderCode) {
      dependency_17 = _aimpactAilearnApp016Dev21ComponentsNavbarHeaderCode;
    }, function (_pragmateUi100Beta6Toast) {
      dependency_18 = _pragmateUi100Beta6Toast;
    }, function (_beyondJsKernel019Styles) {
      dependency_19 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.1.0"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.6"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["simplebar-react", "3.2.6"], ["swiper", "10.3.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["wavesurfer.js", "7.8.5"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.8"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["firebase", "10.13.1"], ["firebase-admin", "12.4.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["@aimpact/ailearn-app", "0.1.6-dev.21"], ["@aimpact/ailearn-app", "0.1.6-dev.21"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.21/main-layout",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/reactive/model', dependency_2], ['@aimpact/ailearn-app/widgets/breadcrumb.widget', dependency_3], ['@aimpact/ailearn-app/i18n.ts', dependency_4], ['@beyond-js/react-18-widgets/base', dependency_5], ['@aimpact/chat-sdk/core', dependency_6], ['@aimpact/chat-sdk/wrapper', dependency_7], ['@beyond-js/kernel/texts', dependency_8], ['pragmate-ui/modal', dependency_9], ['react', dependency_10], ['pragmate-ui/components', dependency_11], ['pragmate-ui/chips', dependency_12], ['@aimpact/ailearn-app/components/ui', dependency_13], ['@beyond-js/react-18-widgets/hooks', dependency_14], ['pragmate-ui/icons', dependency_15], ['framer-motion', dependency_16], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_17], ['pragmate-ui/toast', dependency_18], ['@beyond-js/kernel/styles', dependency_19]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "main-layout",
        "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.21/main-layout.widget",
        "is": "layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.6-dev.21/main-layout.widget');
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