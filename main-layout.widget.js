System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.2.0/model", "@aimpact/ailearn-app@0.1.6-dev.04/widgets/breadcrumb.widget", "@beyond-js/react-18-widgets@1.1.2/base", "@aimpact/chat-sdk@1.0.1/core", "@aimpact/chat@1.0.2/wrapper", "@beyond-js/kernel@0.1.9/texts", "@aimpact/ailearn-app@0.1.6-dev.04/i18n.ts", "pragmate-ui@1.0.0-beta.2/modal", "react@18.2.0", "pragmate-ui@1.0.0-beta.2/components", "pragmate-ui@1.0.0-beta.2/chips", "@aimpact/ailearn-app@0.1.6-dev.04/components/ui", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.2/icons", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.1.6-dev.04/components/navbar-header.code", "pragmate-ui@1.0.0-beta.2/toast", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp016Dev04WidgetsBreadcrumbWidget) {
      dependency_3 = _aimpactAilearnApp016Dev04WidgetsBreadcrumbWidget;
    }, function (_beyondJsReact18Widgets112Base) {
      dependency_4 = _beyondJsReact18Widgets112Base;
    }, function (_aimpactChatSdk101Core) {
      dependency_5 = _aimpactChatSdk101Core;
    }, function (_aimpactChat102Wrapper) {
      dependency_6 = _aimpactChat102Wrapper;
    }, function (_beyondJsKernel019Texts) {
      dependency_7 = _beyondJsKernel019Texts;
    }, function (_aimpactAilearnApp016Dev04I18nTs) {
      dependency_8 = _aimpactAilearnApp016Dev04I18nTs;
    }, function (_pragmateUi100Beta2Modal) {
      dependency_9 = _pragmateUi100Beta2Modal;
    }, function (_react2) {
      dependency_10 = _react2;
    }, function (_pragmateUi100Beta2Components) {
      dependency_11 = _pragmateUi100Beta2Components;
    }, function (_pragmateUi100Beta2Chips) {
      dependency_12 = _pragmateUi100Beta2Chips;
    }, function (_aimpactAilearnApp016Dev04ComponentsUi) {
      dependency_13 = _aimpactAilearnApp016Dev04ComponentsUi;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_14 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi100Beta2Icons) {
      dependency_15 = _pragmateUi100Beta2Icons;
    }, function (_framerMotion2) {
      dependency_16 = _framerMotion2;
    }, function (_aimpactAilearnApp016Dev04ComponentsNavbarHeaderCode) {
      dependency_17 = _aimpactAilearnApp016Dev04ComponentsNavbarHeaderCode;
    }, function (_pragmateUi100Beta2Toast) {
      dependency_18 = _pragmateUi100Beta2Toast;
    }, function (_beyondJsKernel019Styles) {
      dependency_19 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.2"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.2"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.1.6-dev.04"], ["@aimpact/ailearn-app", "0.1.6-dev.04"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.04/main-layout",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/reactive/model', dependency_2], ['@aimpact/ailearn-app/widgets/breadcrumb.widget', dependency_3], ['@beyond-js/react-18-widgets/base', dependency_4], ['@aimpact/chat-sdk/core', dependency_5], ['@aimpact/chat/wrapper', dependency_6], ['@beyond-js/kernel/texts', dependency_7], ['@aimpact/ailearn-app/i18n.ts', dependency_8], ['pragmate-ui/modal', dependency_9], ['react', dependency_10], ['pragmate-ui/components', dependency_11], ['pragmate-ui/chips', dependency_12], ['@aimpact/ailearn-app/components/ui', dependency_13], ['@beyond-js/react-18-widgets/hooks', dependency_14], ['pragmate-ui/icons', dependency_15], ['framer-motion', dependency_16], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_17], ['pragmate-ui/toast', dependency_18], ['@beyond-js/kernel/styles', dependency_19]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "main-layout",
        "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.04/main-layout.widget",
        "is": "layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.6-dev.04/main-layout.widget');
      ims = new Map();
      /************************
      INTERNAL MODULE: ./broker
      ************************/
      ims.set('./broker', {
        hash: 3301447498,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LayoutBroker = exports.Broker = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _breadcrumb = require("@aimpact/ailearn-app/widgets/breadcrumb.widget");
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
          console.log(0.2, LayoutBroker);
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
        hash: 1177072789,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _wrapper = require("@aimpact/chat/wrapper");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX2JyZWFkY3J1bWIiLCJCcm9rZXIiLCJSZWFjdGl2ZU1vZGVsIiwibW9kZWwiLCJoYXNDcmVkaXRzIiwiY3JlZGl0cyIsInRvdGFsIiwibWVzc2FnZSIsImJyZWFkY3J1bWIiLCJicmVhZGNydW1iU3RvcmUiLCJzaG93Q3JlZGl0cyIsIm92ZXJsYXkiLCJ2YWx1ZSIsInRyaWdnZXIiLCJjYW5Db25zdW1lQ3JlZGl0cyIsImJhY2tMaW5rIiwiY29uc3RydWN0b3IiLCJlbnN1cmVDcmVkaXRzIiwiYmluZCIsImFkZE1vZGVsIiwiaWQiLCJ1bmRlZmluZWQiLCJvbiIsIm9uTGlzdGVuIiwiYXNzaWdubWVudElkIiwiY2xlYXJNb2RlbCIsInNhdmVkIiwidHJpZ2dlckV2ZW50IiwiY2FsbGJhY2siLCJzcGVjcyIsImNvbnNvbGUiLCJlcnJvciIsInNob3dNZXNzYWdlIiwidHlwZSIsImdsb2JhbFRoaXMiLCJzZXRUaW1lb3V0IiwiY2xlYXIiLCJleHBvcnRzIiwiTGF5b3V0QnJva2VyIiwibG9nIiwiX2Jhc2UiLCJfc3RvcmUiLCJfdmlldyIsIkNvbnRyb2xsZXIiLCJSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiV2lkZ2V0IiwiTGF5b3V0IiwiX3dyYXBwZXIiLCJfYnJva2VyIiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiX2kxOG4iLCJicm9rZXIiLCJ0ZXh0cyIsIkN1cnJlbnRUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsImdsb2JhbFRleHRzIiwicmVhZHkiLCJpbml0IiwiQXBwV3JhcHBlciIsImlzUmVhZHkiLCJsaXN0ZW4iLCJjbG9zZSIsIm9mZiIsIl9tb2RhbCIsIkNvaW5zQWxlcnQiLCJzaG93Iiwib25DbG9zZSIsImNvaW5zIiwiYWxlcnQiLCJSZWFjdCIsImNyZWF0ZUVsZW1lbnQiLCJBbGVydE1vZGFsIiwiYnV0dG9uTGFiZWwiLCJhY3Rpb24iLCJvbkNvbmZpcm0iLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiX3JlYWN0IiwiX2NvbXBvbmVudHMiLCJfY2hpcHMiLCJfdWkiLCJfaG9va3MiLCJfYW5pbWF0ZWRMYWJlbCIsIl9jb250ZXh0IiwiQ3JlZGl0c0NvbnRhaW5lciIsInRvZ2dsZUNvaW5zTW9kYWwiLCJ1c2VMYXlvdXRDb250ZXh0Iiwic2V0TWVzc2FnZSIsImRlZmF1bHQiLCJ1c2VTdGF0ZSIsInNldEhhc0NyZWRpdHMiLCJyZWYiLCJ1c2VSZWYiLCJjbHMiLCJzZXRDcmVkaXRzIiwiY29uc3VtZWQiLCJvbkNyZWRpdHNDaGFuZ2UiLCJjdXJyZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwibWVzc2FnZXMiLCJ1c2VCaW5kZXIiLCJoZWFkZXIiLCJDb250cm9sIiwiQ2hpcCIsIkJ1dHRvbiIsImF0dHJzIiwiY2xhc3NOYW1lIiwib25DbGljayIsInZhcmlhbnQiLCJkaXNhYmxlZCIsInBlcmNlbnRhZ2VBdmFpbGFibGUiLCJsYWJlbCIsImFjdGlvbnMiLCJhdmFpbGFibGUiLCJBbmltYXRlZExhYmVsIiwiQmF0dGVyeSIsInBlcmNlbnQiLCJfaWNvbnMiLCJfZnJhbWVyTW90aW9uIiwiX2FuaW1hdGVkIiwiTm90aWZpY2F0aW9uc0JhciIsInNldFNob3ciLCJBbmltYXRlUHJlc2VuY2UiLCJBbmltYXRlZCIsImFzIiwiSHRtbFdyYXBwZXIiLCJJY29uIiwiaWNvbiIsImNoaWxkcmVuIiwidXNlRWZmZWN0IiwibW90aW9uIiwic3BhbiIsImxheW91dCIsImluaXRpYWwiLCJvcGFjaXR5Iiwid2lkdGgiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZXhpdCIsIkNvbXBvbmVudCIsIl9uYXZiYXJIZWFkZXIiLCJfY3JlZGl0cyIsIkhlYWRlciIsImhhc01vZGVsIiwic2V0SGFzTW9kZWwiLCJ1cGRhdGVkIiwic2V0VXBkYXRlZCIsImhtciIsInBlcmZvcm1hbmNlIiwibm93IiwiTmF2YmFySGVhZGVyIiwiT3ZlcmxheUhlYWRlciIsImNsb3NhYmxlIiwiYmFja2xpbmsiLCJMYXlvdXRDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfdG9hc3QiLCJfaGVhZGVyIiwiX2FsZXJ0IiwiX25vdGlmaWNhdGlvbnNCYXIiLCJfb3ZlcmxheUhlYWRlciIsInNldFJlYWR5Iiwic2hvd0NvaW5zTW9kYWwiLCJzZXRTaG93Q29pbnNNb2RhbCIsInNob3dDb2luc0FsZXJ0Iiwic2V0U2hvd0NvaW5zQWxlcnQiLCJzZXRVcGRhdGUiLCJ0b2dnbGVDb2luc0FsZXJ0IiwiSGVhZGVyQ29udHJvbCIsIkZyYWdtZW50IiwiUHJvdmlkZXIiLCJUb2FzdHMiLCJDb2luc01vZGFsIiwib3duZXIiLCJvbkNvbnN1bWUiLCJjb25zdW1lQ29pbnMiLCJQcmVsb2FkIl0sInNvdXJjZXMiOlsiL3RzL2Jyb2tlci50cyIsIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXcvY29pbnMvYWxlcnQudHN4IiwiL3RzL3ZpZXcvY29pbnMvY3JlZGl0cy50c3giLCIvdHMvdmlldy9jb2lucy9ub3RpZmljYXRpb25zLWJhci50c3giLCIvdHMvdmlldy9jb21wb25lbnRzL2FuaW1hdGVkLWxhYmVsLnRzeCIsIi90cy92aWV3L2NvbXBvbmVudHMvYW5pbWF0ZWQudHN4IiwiL3RzL3ZpZXcvY29tcG9uZW50cy9oZWFkZXIudHN4IiwiL3RzL3ZpZXcvY29tcG9uZW50cy9vdmVybGF5LWhlYWRlci50c3giLCIvdHMvdmlldy9jb250ZXh0LnRzIiwiL3RzL3ZpZXcvaW5kZXgudHN4IiwiL3RzL3ZpZXcvcHJlbG9hZC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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LE9BQUEsQ0FBQWxCLGFBQUEsQ0FBQU8sTUFBQSxDQUFBVyxPQUFBLENBQUFvRixRQUFBLFFBQ0MvRixNQUFBLENBQUFXLE9BQUEsQ0FBQWxCLGFBQUEsQ0FBQ2EsUUFBQSxDQUFBeUUsYUFBYSxDQUFDaUIsUUFBUTtjQUFDdEssS0FBSyxFQUFFQTtZQUFLLEdBQ25Dc0UsTUFBQSxDQUFBVyxPQUFBLENBQUFsQixhQUFBO2NBQUtxQyxTQUFTLEVBQUM7WUFBd0IsR0FDdEM5QixNQUFBLENBQUFXLE9BQUEsQ0FBQWxCLGFBQUEsQ0FBQ3FHLGFBQWEsT0FBRyxFQUNqQjlGLE1BQUEsQ0FBQVcsT0FBQSxDQUFBbEIsYUFBQSxDQUFDNEYsaUJBQUEsQ0FBQXpDLGdCQUFnQixPQUFHLEVBQ3BCNUMsTUFBQSxDQUFBVyxPQUFBLENBQUFsQixhQUFBLGVBQ0NPLE1BQUEsQ0FBQVcsT0FBQSxDQUFBbEIsYUFBQSxnQ0FBMEIsRUFDMUJPLE1BQUEsQ0FBQVcsT0FBQSxDQUFBbEIsYUFBQSxDQUFDeUYsTUFBQSxDQUFBZSxNQUFNLE9BQUcsQ0FDSixDQUNGLENBQ2tCLEVBQ3hCdEgsS0FBSyxJQUNMcUIsTUFBQSxDQUFBVyxPQUFBLENBQUFsQixhQUFBLENBQUFPLE1BQUEsQ0FBQVcsT0FBQSxDQUFBb0YsUUFBQSxRQUNDL0YsTUFBQSxDQUFBVyxPQUFBLENBQUFsQixhQUFBLENBQUMyRixNQUFBLENBQUFqRyxVQUFVO2NBQ1ZiLEtBQUssRUFBRUEsS0FBSztjQUNaSSxXQUFXLEVBQUVmLEtBQUssQ0FBQ2UsV0FBVztjQUM5QlUsSUFBSSxFQUFFc0csY0FBYztjQUNwQnJHLE9BQU8sRUFBRXdHO1lBQWdCLEVBQ3hCLEVBQ0Y3RixNQUFBLENBQUFXLE9BQUEsQ0FBQWxCLGFBQUEsQ0FBQ1UsR0FBQSxDQUFBK0YsVUFBVTtjQUNWQyxLQUFLLEVBQUV4SSxLQUFLLENBQUMxQyxLQUFLLEVBQUVrTCxLQUFLO2NBQ3pCekgsV0FBVyxFQUFFZixLQUFLLENBQUNlLFdBQVc7Y0FDOUIwSCxTQUFTLEVBQUV6SSxLQUFLLENBQUMxQyxLQUFLLEVBQUVvTCxZQUFZO2NBQ3BDakgsSUFBSSxFQUFFb0csY0FBYztjQUNwQm5HLE9BQU8sRUFBRW1CO1lBQWdCLEVBQ3hCLENBRUgsQ0FDQztVQUVMLENBQUM7VUFBQ3JELE9BQUEsQ0FBQVksTUFBQSxHQUFBQSxNQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3JFSSxTQUFVdUksT0FBT0EsQ0FBQTtZQUN0QixPQUFPOUcsS0FBQSxDQUFBQyxhQUFBLENBQUFELEtBQUEsQ0FBQXVHLFFBQUEsT0FBSztVQUNiIiwiaWdub3JlTGlzdCI6W119