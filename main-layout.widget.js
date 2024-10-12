System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@aimpact/ailearn-sdk@1.0.0/reactive/model", "@aimpact/ailearn-app@0.1.13/widgets/breadcrumb.widget", "@aimpact/ailearn-app@0.1.13/i18n.ts", "@beyond-js/react-18-widgets@1.1.2/base", "@beyond-js/reactive@1.2.0/model", "@aimpact/chat-sdk@1.3.0/core", "@aimpact/chat-sdk@1.3.0/wrapper", "@beyond-js/kernel@0.1.9/texts", "react@18.2.0", "pragmate-ui@1.0.0-beta.6/modal", "pragmate-ui@1.0.0-beta.6/base", "pragmate-ui@1.0.0-beta.6/components", "pragmate-ui@1.0.0-beta.6/chips", "@aimpact/ailearn-app@0.1.13/components/ui", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.6/icons", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.1.13/components/navbar-header.code", "pragmate-ui@1.0.0-beta.6/toast", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, bimport, __Bundle, __pkg, ims, LayoutBroker, Controller, Header, OverlayHeader, __beyond_pkg, hmr;
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
    }, function (_aimpactAilearnSdk100ReactiveModel) {
      dependency_2 = _aimpactAilearnSdk100ReactiveModel;
    }, function (_aimpactAilearnApp0113WidgetsBreadcrumbWidget) {
      dependency_3 = _aimpactAilearnApp0113WidgetsBreadcrumbWidget;
    }, function (_aimpactAilearnApp0113I18nTs) {
      dependency_4 = _aimpactAilearnApp0113I18nTs;
    }, function (_beyondJsReact18Widgets112Base) {
      dependency_5 = _beyondJsReact18Widgets112Base;
    }, function (_beyondJsReactive120Model) {
      dependency_6 = _beyondJsReactive120Model;
    }, function (_aimpactChatSdk130Core) {
      dependency_7 = _aimpactChatSdk130Core;
    }, function (_aimpactChatSdk130Wrapper) {
      dependency_8 = _aimpactChatSdk130Wrapper;
    }, function (_beyondJsKernel019Texts) {
      dependency_9 = _beyondJsKernel019Texts;
    }, function (_react2) {
      dependency_10 = _react2;
    }, function (_pragmateUi100Beta6Modal) {
      dependency_11 = _pragmateUi100Beta6Modal;
    }, function (_pragmateUi100Beta6Base) {
      dependency_12 = _pragmateUi100Beta6Base;
    }, function (_pragmateUi100Beta6Components) {
      dependency_13 = _pragmateUi100Beta6Components;
    }, function (_pragmateUi100Beta6Chips) {
      dependency_14 = _pragmateUi100Beta6Chips;
    }, function (_aimpactAilearnApp0113ComponentsUi) {
      dependency_15 = _aimpactAilearnApp0113ComponentsUi;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_16 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi100Beta6Icons) {
      dependency_17 = _pragmateUi100Beta6Icons;
    }, function (_framerMotion2) {
      dependency_18 = _framerMotion2;
    }, function (_aimpactAilearnApp0113ComponentsNavbarHeaderCode) {
      dependency_19 = _aimpactAilearnApp0113ComponentsNavbarHeaderCode;
    }, function (_pragmateUi100Beta6Toast) {
      dependency_20 = _pragmateUi100Beta6Toast;
    }, function (_beyondJsKernel019Styles) {
      dependency_21 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.3.0"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.6"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.23.8"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.1.13"], ["@aimpact/ailearn-app", "0.1.13"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.13/main-layout",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@aimpact/ailearn-sdk/reactive/model', dependency_2], ['@aimpact/ailearn-app/widgets/breadcrumb.widget', dependency_3], ['@aimpact/ailearn-app/i18n.ts', dependency_4], ['@beyond-js/react-18-widgets/base', dependency_5], ['@beyond-js/reactive/model', dependency_6], ['@aimpact/chat-sdk/core', dependency_7], ['@aimpact/chat-sdk/wrapper', dependency_8], ['@beyond-js/kernel/texts', dependency_9], ['react', dependency_10], ['pragmate-ui/modal', dependency_11], ['pragmate-ui/base', dependency_12], ['pragmate-ui/components', dependency_13], ['pragmate-ui/chips', dependency_14], ['@aimpact/ailearn-app/components/ui', dependency_15], ['@beyond-js/react-18-widgets/hooks', dependency_16], ['pragmate-ui/icons', dependency_17], ['framer-motion', dependency_18], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_19], ['pragmate-ui/toast', dependency_20], ['@beyond-js/kernel/styles', dependency_21]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "main-layout",
        "vspecifier": "@aimpact/ailearn-app@0.1.13/main-layout.widget",
        "is": "layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.13/main-layout.widget');
      ims = new Map();
      /************************
      INTERNAL MODULE: ./broker
      ************************/
      ims.set('./broker', {
        hash: 4094725522,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LayoutBroker = exports.Broker = void 0;
          var _model = require("@aimpact/ailearn-sdk/reactive/model");
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
        hash: 1638998339,
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
        hash: 4083565738,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX2JyZWFkY3J1bWIiLCJfaTE4biIsIkJyb2tlciIsIlJlYWN0aXZlTW9kZWwiLCJtb2RlbCIsImhhc0NyZWRpdHMiLCJjcmVkaXRzIiwidG90YWwiLCJtZXNzYWdlIiwiYnJlYWRjcnVtYiIsImJyZWFkY3J1bWJTdG9yZSIsInNob3dDcmVkaXRzIiwib3ZlcmxheSIsInZhbHVlIiwidHJpZ2dlciIsInJlZnJlc2giLCJFcnJvciIsImdsb2JhbFRleHRzIiwidGV4dHMiLCJjYW5Db25zdW1lQ3JlZGl0cyIsImJhY2tMaW5rIiwiY29uc3RydWN0b3IiLCJlbnN1cmVDcmVkaXRzIiwiYmluZCIsIm9uIiwidHJpZ2dlckV2ZW50IiwiYWRkTW9kZWwiLCJpZCIsInVuZGVmaW5lZCIsIm9uTGlzdGVuIiwiYXNzaWdubWVudElkIiwiY2xlYXJNb2RlbCIsInNhdmVkIiwiY2FsbGJhY2siLCJzcGVjcyIsImNvbnNvbGUiLCJlcnJvciIsInNob3dNZXNzYWdlIiwidHlwZSIsImdsb2JhbFRoaXMiLCJzZXRUaW1lb3V0IiwiY2xlYXIiLCJleHBvcnRzIiwiTGF5b3V0QnJva2VyIiwiX2Jhc2UiLCJfc3RvcmUiLCJfdmlldyIsIkNvbnRyb2xsZXIiLCJSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiV2lkZ2V0IiwiTGF5b3V0IiwiX3dyYXBwZXIiLCJfYnJva2VyIiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiYnJva2VyIiwiQ3VycmVudFRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwicmVhZHkiLCJpbml0IiwiQXBwV3JhcHBlciIsImlzUmVhZHkiLCJsaXN0ZW4iLCJjbG9zZSIsIm9mZiIsIl9yZWFjdCIsIl9tb2RhbCIsIkNvaW5zQWxlcnQiLCJzaG93Iiwib25DbG9zZSIsImNvaW5zIiwiYWxlcnQiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIkFsZXJ0TW9kYWwiLCJidXR0b25MYWJlbCIsImFjdGlvbiIsIm9uQ29uZmlybSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJfY29tcG9uZW50cyIsIl9jaGlwcyIsIl91aSIsIl9ob29rcyIsIl9hbmltYXRlZExhYmVsIiwiX2NvbnRleHQiLCJDcmVkaXRzQ29udGFpbmVyIiwidG9nZ2xlQ29pbnNNb2RhbCIsInVzZUxheW91dENvbnRleHQiLCJzZXRNZXNzYWdlIiwidXNlU3RhdGUiLCJzZXRIYXNDcmVkaXRzIiwicmVmIiwidXNlUmVmIiwiY2xzIiwic2V0Q3JlZGl0cyIsImNvbnN1bWVkIiwib25DcmVkaXRzQ2hhbmdlIiwiY3VycmVudCIsImNsYXNzTGlzdCIsImFkZCIsIm1lc3NhZ2VzIiwidXNlQmluZGVyIiwiaGVhZGVyIiwiQ29udHJvbCIsImF0dHJzIiwiY2xhc3NOYW1lIiwib25DbGljayIsInZhcmlhbnQiLCJkaXNhYmxlZCIsIkJ1dHRvbiIsIkNoaXAiLCJwZXJjZW50YWdlQXZhaWxhYmxlIiwibGFiZWwiLCJhY3Rpb25zIiwiYXZhaWxhYmxlIiwiQW5pbWF0ZWRMYWJlbCIsIkJhdHRlcnkiLCJwZXJjZW50IiwiX2ljb25zIiwiX2ZyYW1lck1vdGlvbiIsIl9hbmltYXRlZCIsIk5vdGlmaWNhdGlvbnNCYXIiLCJzZXRTaG93IiwiQW5pbWF0ZVByZXNlbmNlIiwiQW5pbWF0ZWQiLCJhcyIsIkh0bWxXcmFwcGVyIiwiSWNvbiIsImljb24iLCJjaGlsZHJlbiIsInVzZUVmZmVjdCIsIm1vdGlvbiIsInNwYW4iLCJsYXlvdXQiLCJpbml0aWFsIiwib3BhY2l0eSIsIndpZHRoIiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImV4aXQiLCJDb21wb25lbnQiLCJfbmF2YmFySGVhZGVyIiwiX2NyZWRpdHMiLCJIZWFkZXIiLCJoYXNNb2RlbCIsInNldEhhc01vZGVsIiwidXBkYXRlZCIsInNldFVwZGF0ZWQiLCJobXIiLCJwZXJmb3JtYW5jZSIsIm5vdyIsIk5hdmJhckhlYWRlciIsIkljb25CdXR0b24iLCJPdmVybGF5SGVhZGVyIiwiY2xvc2FibGUiLCJiYWNrbGluayIsIkxheW91dENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl90b2FzdCIsIl9oZWFkZXIiLCJfYWxlcnQiLCJfbm90aWZpY2F0aW9uc0JhciIsIl9vdmVybGF5SGVhZGVyIiwic2V0UmVhZHkiLCJzaG93Q29pbnNNb2RhbCIsInNldFNob3dDb2luc01vZGFsIiwic2hvd0NvaW5zQWxlcnQiLCJzZXRTaG93Q29pbnNBbGVydCIsInNldFVwZGF0ZSIsInRvZ2dsZUNvaW5zQWxlcnQiLCJtb2RlbFR5cGUiLCJGcmFnbWVudCIsIlByb3ZpZGVyIiwiVG9hc3RzIiwiQ29pbnNNb2RhbCIsIm93bmVyIiwib25Db25zdW1lIiwiY29uc3VtZUNvaW5zIiwiUHJlbG9hZCIsIlJlYWN0Il0sInNvdXJjZXMiOlsiL3RzL2Jyb2tlci50cyIsIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXcvY29pbnMvYWxlcnQudHN4IiwiL3RzL3ZpZXcvY29pbnMvY3JlZGl0cy50c3giLCIvdHMvdmlldy9jb2lucy9ub3RpZmljYXRpb25zLWJhci50c3giLCIvdHMvdmlldy9jb21wb25lbnRzL2FuaW1hdGVkLWxhYmVsLnRzeCIsIi90cy92aWV3L2NvbXBvbmVudHMvYW5pbWF0ZWQudHN4IiwiL3RzL3ZpZXcvY29tcG9uZW50cy9oZWFkZXIudHN4IiwiL3RzL3ZpZXcvY29tcG9uZW50cy9vdmVybGF5LWhlYWRlci50c3giLCIvdHMvdmlldy9jb250ZXh0LnRzIiwiL3RzL3ZpZXcvaW5kZXgudHN4IiwiL3RzL3ZpZXcvcHJlbG9hZC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsV0FBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsS0FBQSxHQUFBRixPQUFBO1VBQ00sTUFBT0csTUFBTyxTQUFRSixNQUFBLENBQUFLLGFBQXFCO1lBQ2hELENBQUFDLEtBQU07WUFDTixJQUFJQSxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsS0FBTTtZQUNuQjtZQUNBLElBQUlDLFVBQVVBLENBQUE7Y0FDYixPQUFPLElBQUksQ0FBQyxDQUFBRCxLQUFNLEVBQUVFLE9BQU8sRUFBRUMsS0FBSyxHQUFHLENBQUM7WUFDdkM7WUFFQSxDQUFBQyxPQUFRO1lBQ1IsSUFBSUEsT0FBT0EsQ0FBQTtjQUNWLE9BQU8sSUFBSSxDQUFDLENBQUFBLE9BQVE7WUFDckI7WUFFQSxJQUFJQyxVQUFVQSxDQUFBO2NBQ2IsT0FBT1QsV0FBQSxDQUFBVSxlQUFlLENBQUNELFVBQVU7WUFDbEM7WUFFQSxDQUFBRSxXQUFZO1lBQ1osSUFBSUEsV0FBV0EsQ0FBQTtjQUNkLE9BQU8sSUFBSSxDQUFDLENBQUFBLFdBQVk7WUFDekI7WUFFQSxDQUFBQyxPQUFRO1lBQ1IsSUFBSUEsT0FBT0EsQ0FBQTtjQUNWLE9BQU8sSUFBSSxDQUFDLENBQUFBLE9BQVE7WUFDckI7WUFDQSxJQUFJQSxPQUFPQSxDQUFDQyxLQUFLO2NBQ2hCLElBQUksSUFBSSxDQUFDLENBQUFELE9BQVEsS0FBS0MsS0FBSyxFQUFFO2NBQzdCLElBQUksQ0FBQyxDQUFBRCxPQUFRLEdBQUdDLEtBQUs7Y0FFckIsSUFBSSxDQUFDQyxPQUFPLENBQUMsUUFBUSxDQUFDO1lBQ3ZCO1lBRUEsQ0FBQUMsT0FBUTtZQUNSLElBQUlBLE9BQU9BLENBQUE7Y0FDVixPQUFPLElBQUksQ0FBQyxDQUFBQSxPQUFRO1lBQ3JCO1lBQ0EsSUFBSUEsT0FBT0EsQ0FBQ0YsS0FBSztjQUNoQixJQUFJLE9BQU9BLEtBQUssS0FBSyxVQUFVLElBQUlBLEtBQUssS0FBSyxJQUFJLEVBQUU7Z0JBQ2xELE1BQU0sSUFBSUcsS0FBSyxDQUFDLCtEQUErRCxDQUFDOztjQUVqRixJQUFJLENBQUMsQ0FBQUQsT0FBUSxHQUFHRixLQUFLO2NBQ3JCLElBQUksQ0FBQ0MsT0FBTyxDQUFDLFFBQVEsQ0FBQztZQUN2QjtZQUNBLElBQUlHLFdBQVdBLENBQUE7Y0FDZCxPQUFPaEIsS0FBQSxDQUFBZ0IsV0FBVyxDQUFDQyxLQUFLO1lBQ3pCO1lBQ0E7Ozs7O1lBS0EsQ0FBQUMsaUJBQWtCO1lBQ2xCLElBQUlBLGlCQUFpQkEsQ0FBQTtjQUNwQixPQUFPLElBQUksQ0FBQyxDQUFBZixLQUFNLEVBQUVlLGlCQUFpQixJQUFJLElBQUksQ0FBQyxDQUFBQSxpQkFBa0I7WUFDakU7WUFFQSxJQUFJQSxpQkFBaUJBLENBQUNOLEtBQUs7Y0FDMUIsSUFBSSxJQUFJLENBQUMsQ0FBQU0saUJBQWtCLEtBQUtOLEtBQUssRUFBRTtjQUN2QyxJQUFJLENBQUMsQ0FBQU0saUJBQWtCLEdBQUdOLEtBQUs7Y0FFL0IsSUFBSSxDQUFDQyxPQUFPLENBQUMsUUFBUSxDQUFDO1lBQ3ZCO1lBQ0EsQ0FBQU0sUUFBUztZQUNULElBQUlBLFFBQVFBLENBQUE7Y0FDWCxPQUFPLElBQUksQ0FBQyxDQUFBQSxRQUFTO1lBQ3RCO1lBRUEsSUFBSUEsUUFBUUEsQ0FBQ1AsS0FBSztjQUNqQixJQUFJLENBQUMsQ0FBQU8sUUFBUyxHQUFHUCxLQUFLO2NBQ3RCLElBQUksQ0FBQ0MsT0FBTyxDQUFDLFFBQVEsQ0FBQztZQUN2QjtZQUNBTyxZQUFBO2NBQ0MsS0FBSyxFQUFFO2NBRVAsSUFBSSxDQUFDQyxhQUFhLEdBQUcsSUFBSSxDQUFDQSxhQUFhLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUM7Y0FDbER0QixLQUFBLENBQUFnQixXQUFXLENBQUNPLEVBQUUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDQyxZQUFZLENBQUNGLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN2RDtZQUNBRyxRQUFRQSxDQUFDdEIsS0FBSyxFQUFFTyxXQUFXLEdBQUcsSUFBSTtjQUNqQyxJQUFJUCxLQUFLLENBQUN1QixFQUFFLEtBQUtDLFNBQVMsSUFBSXhCLEtBQUssQ0FBQ3VCLEVBQUUsS0FBSyxJQUFJLENBQUMsQ0FBQXZCLEtBQU0sRUFBRXVCLEVBQUUsRUFBRTtjQUU1RCxJQUFJLENBQUMsQ0FBQXZCLEtBQU0sR0FBR0EsS0FBSztjQUNuQixJQUFJLENBQUMsQ0FBQU8sV0FBWSxHQUFHQSxXQUFXO2NBQy9CLElBQUksQ0FBQyxDQUFBUCxLQUFNLENBQUNvQixFQUFFLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQ0ssUUFBUSxDQUFDTixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Y0FDbEQsSUFBSSxDQUFDVCxPQUFPLENBQUMsUUFBUSxDQUFDO2NBRXRCLElBQUlWLEtBQUssQ0FBQzBCLFlBQVksRUFBRTtnQkFDdkIsSUFBSSxDQUFDLENBQUFWLFFBQVMsR0FBRyxnQkFBZ0JoQixLQUFLLENBQUMwQixZQUFZLEVBQUU7O2NBR3REO1lBQ0Q7WUFFQUMsVUFBVUEsQ0FBQTtjQUNULElBQUksQ0FBQyxDQUFBM0IsS0FBTSxHQUFHd0IsU0FBUztjQUN2QixJQUFJLENBQUMsQ0FBQWpCLFdBQVksR0FBRyxLQUFLO1lBQzFCO1lBRUEsTUFBTWtCLFFBQVFBLENBQUE7Y0FDYixJQUFJLElBQUksQ0FBQyxDQUFBbEIsV0FBWSxLQUFLLElBQUksQ0FBQyxDQUFBUCxLQUFNLEVBQUU0QixLQUFLLEVBQUU7Z0JBQzdDOztjQUdELElBQUksQ0FBQyxDQUFBckIsV0FBWSxHQUFHLElBQUksQ0FBQyxDQUFBUCxLQUFNLEVBQUU0QixLQUFLO2NBQ3RDLElBQUksQ0FBQ1AsWUFBWSxFQUFFO1lBQ3BCO1lBRUEsTUFBTUgsYUFBYUEsQ0FBQ1csUUFBUSxFQUFFLEdBQUdDLEtBQUs7Y0FDckM7Y0FFQSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE5QixLQUFNLEVBQUUrQixPQUFPLENBQUNDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQztjQUVqRCxJQUFJLENBQUMsSUFBSSxDQUFDL0IsVUFBVSxFQUFFO2dCQUNyQixJQUFJLENBQUNTLE9BQU8sQ0FBQyxZQUFZLENBQUM7Z0JBQzFCOztjQUdELE9BQU9tQixRQUFRLENBQUMsR0FBR0MsS0FBSyxDQUFDO1lBQzFCO1lBRUFHLFdBQVdBLENBQUNDLElBQUksRUFBRTlCLE9BQU87Y0FDeEIsSUFBSSxDQUFDLENBQUFBLE9BQVEsR0FBRztnQkFBRThCLElBQUk7Z0JBQUU5QjtjQUFPLENBQUU7Y0FDakMsSUFBSSxDQUFDTSxPQUFPLENBQUMsY0FBYyxDQUFDO2NBRTVCeUIsVUFBVSxDQUFDQyxVQUFVLENBQUMsTUFBSztnQkFDMUIsSUFBSSxDQUFDLENBQUFoQyxPQUFRLEdBQUdvQixTQUFTO2NBQzFCLENBQUMsRUFBRSxJQUFJLENBQUM7WUFDVDtZQUVBYSxLQUFLQSxDQUFBO2NBQ0osSUFBSSxDQUFDLENBQUFyQyxLQUFNLEdBQUd3QixTQUFTO2NBRXZCLElBQUksQ0FBQ2hCLE9BQU8sR0FBRyxLQUFLO2NBQ3BCLElBQUksQ0FBQ2EsWUFBWSxFQUFFO1lBQ3BCOztVQUNBaUIsT0FBQSxDQUFBeEMsTUFBQSxHQUFBQSxNQUFBO1VBRU07VUFBWSxNQUFNeUMsWUFBWSxHQUFBRCxPQUFBLENBQUFDLFlBQUEsR0FBRyxJQUFJekMsTUFBTSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7OztVQzdJcEQsSUFBQTBDLEtBQUEsR0FBQTdDLE9BQUE7VUFDQSxJQUFBOEMsTUFBQSxHQUFBOUMsT0FBQTtVQUNBLElBQUErQyxLQUFBLEdBQUEvQyxPQUFBO1VBRU87VUFBVSxNQUNYZ0QsVUFBVyxTQUFRSCxLQUFBLENBQUFJLHFCQUFxQjtZQUM3QyxDQUFBQyxLQUFNO1lBQ047WUFDQUMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUosTUFBQSxDQUFBTSxZQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNuQjtZQUNBLElBQUlHLE1BQU1BLENBQUE7Y0FDVCxPQUFPTixLQUFBLENBQUFPLE1BQU07WUFDZDs7VUFDQVgsT0FBQSxDQUFBSyxVQUFBLEdBQUFBLFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDZEQsSUFBQWpELE1BQUEsR0FBQUMsT0FBQTtVQUVBLElBQUF1RCxRQUFBLEdBQUF2RCxPQUFBO1VBQ0EsSUFBQXdELE9BQUEsR0FBQXhELE9BQUE7VUFDQSxJQUFBeUQsTUFBQSxHQUFBekQsT0FBQTtVQUNBLElBQUEwRCxlQUFBLEdBQUExRCxPQUFBO1VBQ0EsSUFBQUUsS0FBQSxHQUFBRixPQUFBO1VBT00sTUFBT29ELFlBQWEsU0FBUXJELE1BQUEsQ0FBQUssYUFBcUI7WUFFdEQsQ0FBQXVELE1BQU87WUFDUCxJQUFJQSxNQUFNQSxDQUFBO2NBQ1QsT0FBTyxJQUFJLENBQUMsQ0FBQUEsTUFBTztZQUNwQjtZQUNBLElBQUkvQyxXQUFXQSxDQUFBO2NBQ2QsT0FBTyxJQUFJLENBQUMsQ0FBQStDLE1BQU8sQ0FBQy9DLFdBQVc7WUFDaEM7WUFFQSxDQUFBTyxLQUFNLEdBQStCLElBQUlzQyxNQUFBLENBQUFHLFlBQVksQ0FBQ0YsZUFBQSxDQUFBRyxNQUFNLENBQUNDLFNBQVMsQ0FBQztZQUN2RSxJQUFJM0MsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU0sRUFBRUwsS0FBSyxJQUFJLEVBQUU7WUFDaEM7WUFFQSxJQUFJSSxXQUFXQSxDQUFBO2NBQ2QsT0FBT2hCLEtBQUEsQ0FBQWdCLFdBQVcsQ0FBQ0MsS0FBSztZQUN6QjtZQUVBLElBQUlkLEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBc0QsTUFBTyxDQUFDdEQsS0FBSztZQUMxQjtZQUNBLElBQUk0QixLQUFLQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUMsQ0FBQTBCLE1BQU8sRUFBRXRELEtBQUssRUFBRTRCLEtBQUs7WUFDbEM7WUFDQSxJQUFJOEIsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sS0FBSyxDQUFDQSxLQUFLLElBQUksSUFBSSxDQUFDLENBQUE1QyxLQUFNLENBQUM0QyxLQUFLLElBQUk3RCxLQUFBLENBQUFnQixXQUFXLENBQUM2QyxLQUFLO1lBQzdEO1lBRUF6QyxZQUFBO2NBQ0MsS0FBSyxFQUFFO2NBQ1AsSUFBSSxDQUFDMEMsSUFBSSxFQUFFO1lBQ1o7WUFDQUEsSUFBSSxHQUFHLE1BQUFBLENBQUEsS0FBVztjQUNqQixNQUFNVCxRQUFBLENBQUFVLFVBQVUsQ0FBQ0MsT0FBTztjQUN4QixLQUFLLENBQUNILEtBQUssR0FBRyxJQUFJO2NBQ2xCLElBQUksQ0FBQyxDQUFBSixNQUFPLEdBQUdILE9BQUEsQ0FBQVosWUFBWTtjQUUzQlcsUUFBQSxDQUFBVSxVQUFVLENBQUN4QyxFQUFFLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQ0MsWUFBWSxDQUFDO2NBQzFDLElBQUksQ0FBQyxDQUFBaUMsTUFBTyxDQUFDbEMsRUFBRSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUNDLFlBQVksQ0FBQztjQUM1QyxJQUFJLENBQUMsQ0FBQVAsS0FBTSxDQUFDTSxFQUFFLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQ0MsWUFBWSxDQUFDO2NBQzNDeEIsS0FBQSxDQUFBZ0IsV0FBVyxDQUFDTyxFQUFFLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQ0MsWUFBWSxDQUFDO1lBQzVDLENBQUM7WUFDRHlDLE1BQU0sR0FBR0EsQ0FBQSxLQUFLO2NBQ2IsSUFBSSxDQUFDLENBQUFSLE1BQU8sQ0FBQ2xDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDQyxZQUFZLENBQUM7Y0FDNUMsSUFBSSxDQUFDLENBQUFQLEtBQU0sQ0FBQ00sRUFBRSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUNDLFlBQVksQ0FBQztZQUM1QyxDQUFDO1lBRUQwQyxLQUFLQSxDQUFBO2NBQ0osSUFBSSxDQUFDLENBQUFULE1BQU8sQ0FBQ1UsR0FBRyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMzQyxZQUFZLENBQUM7Y0FDN0MsSUFBSSxDQUFDLENBQUFQLEtBQU0sQ0FBQ2tELEdBQUcsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDM0MsWUFBWSxDQUFDO1lBQzdDOztVQUNBaUIsT0FBQSxDQUFBUyxZQUFBLEdBQUFBLFlBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbEVELElBQUFrQixNQUFBLEdBQUF0RSxPQUFBO1VBQ0EsSUFBQXVFLE1BQUEsR0FBQXZFLE9BQUE7VUFDTSxTQUFVd0UsVUFBVUEsQ0FBQztZQUFFQyxJQUFJO1lBQUVDLE9BQU87WUFBRXZELEtBQUs7WUFBRUQ7VUFBVyxDQUFFO1lBQy9ELElBQUksQ0FBQ3VELElBQUksRUFBRSxPQUFPLElBQUk7WUFDdEJ0RCxLQUFLLEdBQUdBLEtBQUssQ0FBQ3dELEtBQUssQ0FBQ0MsS0FBSztZQUV6QixPQUNDTixNQUFBLENBQUFPLE9BQUEsQ0FBQUMsYUFBQSxDQUFDUCxNQUFBLENBQUFRLFVBQVU7Y0FBQ04sSUFBSTtjQUFDTyxXQUFXLEVBQUU3RCxLQUFLLENBQUM4RCxNQUFNO2NBQUVDLFNBQVMsRUFBRVIsT0FBTztjQUFFQSxPQUFPLEVBQUVBO1lBQU8sR0FDL0VKLE1BQUEsQ0FBQU8sT0FBQSxDQUFBQyxhQUFBLGlCQUNDUixNQUFBLENBQUFPLE9BQUEsQ0FBQUMsYUFBQSxhQUFLM0QsS0FBSyxDQUFDZ0UsS0FBSyxDQUFNLEVBRXRCYixNQUFBLENBQUFPLE9BQUEsQ0FBQUMsYUFBQSxZQUFJM0QsS0FBSyxDQUFDaUUsV0FBVyxDQUFLLENBQ2xCLENBQ0c7VUFFZjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNmQSxJQUFBZCxNQUFBLEdBQUF0RSxPQUFBO1VBRUEsSUFBQXFGLFdBQUEsR0FBQXJGLE9BQUE7VUFDQSxJQUFBc0YsTUFBQSxHQUFBdEYsT0FBQTtVQUNBLElBQUF1RixHQUFBLEdBQUF2RixPQUFBO1VBQ0EsSUFBQXdGLE1BQUEsR0FBQXhGLE9BQUE7VUFDQSxJQUFBeUYsY0FBQSxHQUFBekYsT0FBQTtVQUNBLElBQUEwRixRQUFBLEdBQUExRixPQUFBO1VBRU0sU0FBVTJGLGdCQUFnQkEsQ0FBQTtZQUMvQixJQUFJO2NBQUV6QyxLQUFLO2NBQUUwQyxnQkFBZ0I7Y0FBRXpFO1lBQUssQ0FBRSxHQUFHLElBQUF1RSxRQUFBLENBQUFHLGdCQUFnQixHQUFFO1lBRTNELE1BQU0sQ0FBQ3BGLE9BQU8sRUFBRXFGLFVBQVUsQ0FBQyxHQUFHeEIsTUFBQSxDQUFBTyxPQUFLLENBQUNrQixRQUFRLENBQUMsRUFBRSxDQUFDO1lBQ2hELE1BQU0sR0FBR0MsYUFBYSxDQUFDLEdBQUcxQixNQUFBLENBQUFPLE9BQUssQ0FBQ2tCLFFBQVEsQ0FBQzdDLEtBQUssQ0FBQzVDLFVBQVUsQ0FBQztZQUMxRCxNQUFNMkYsR0FBRyxHQUFHLElBQUEzQixNQUFBLENBQUE0QixNQUFNLEVBQUMsSUFBSSxDQUFDO1lBQ3hCLE1BQU1DLEdBQUcsR0FBRyxxQkFBcUIsQ0FBQ2pELEtBQUssQ0FBQ1MsTUFBTSxDQUFDdkMsaUJBQWlCLEdBQUcsY0FBYyxHQUFHLEVBQUUsRUFBRTtZQUN4RixNQUFNLENBQUNiLE9BQU8sRUFBRTZGLFVBQVUsQ0FBQyxHQUFHOUIsTUFBQSxDQUFBTyxPQUFLLENBQUNrQixRQUFRLENBQUM3QyxLQUFLLENBQUM3QyxLQUFLLEVBQUVFLE9BQU8sSUFBSTtjQUFFQyxLQUFLLEVBQUUsQ0FBQztjQUFFNkYsUUFBUSxFQUFFO1lBQUMsQ0FBRSxDQUFDO1lBRS9GLE1BQU1DLGVBQWUsR0FBRy9ELElBQUksSUFBRztjQUM5QjBELEdBQUcsQ0FBQ00sT0FBTyxDQUFDQyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQztjQUMvQ1gsVUFBVSxDQUFDM0UsS0FBSyxFQUFFdUYsUUFBUSxDQUFDbkUsSUFBSSxDQUFDLENBQUM7Y0FDakM2RCxVQUFVLENBQUNsRCxLQUFLLENBQUNTLE1BQU0sQ0FBQ3RELEtBQUssRUFBRUUsT0FBTyxDQUFDO2NBQ3ZDeUYsYUFBYSxDQUFDOUMsS0FBSyxDQUFDUyxNQUFNLENBQUNyRCxVQUFVLENBQUM7WUFDdkMsQ0FBQztZQUVELElBQUFrRixNQUFBLENBQUFtQixTQUFTLEVBQUMsQ0FBQ3pELEtBQUssQ0FBQ1MsTUFBTSxDQUFDdEQsS0FBSyxDQUFDLEVBQUVpRyxlQUFlLEVBQUUsZ0JBQWdCLENBQUM7WUFFbEUsSUFBSSxDQUFDbkYsS0FBSyxFQUFFd0QsS0FBSyxFQUFFLE9BQU8sSUFBSTtZQUM5QnhELEtBQUssR0FBR0EsS0FBSyxDQUFDd0QsS0FBSyxDQUFDaUMsTUFBTTtZQUMxQjtZQUNBO1lBQ0EsSUFBSUMsT0FBTztZQUNYLE1BQU1DLEtBQUssR0FBRztjQUNiQyxTQUFTLEVBQUUsZ0JBQWdCO2NBQzNCQyxPQUFPLEVBQUVuRixTQUFTO2NBQ2xCb0YsT0FBTyxFQUFFL0QsS0FBSyxDQUFDUyxNQUFNLENBQUNyRCxVQUFVLEdBQUcsU0FBUyxHQUFHLFNBQVM7Y0FDeEQ0RyxRQUFRLEVBQUVoRSxLQUFLLENBQUNTLE1BQU0sQ0FBQ3JELFVBQVUsSUFBSSxDQUFDNEMsS0FBSyxDQUFDUyxNQUFNLENBQUN2QzthQUNuRDtZQUVELElBQUksQ0FBQzhCLEtBQUssQ0FBQ1MsTUFBTSxDQUFDckQsVUFBVSxFQUFFO2NBQzdCdUcsT0FBTyxHQUFHeEIsV0FBQSxDQUFBOEIsTUFBTTtjQUNoQkwsS0FBSyxDQUFDRSxPQUFPLEdBQUdwQixnQkFBZ0I7YUFDaEMsTUFBTTtjQUNOaUIsT0FBTyxHQUFHdkIsTUFBQSxDQUFBOEIsSUFBSTtjQUNkTixLQUFLLENBQUNDLFNBQVMsR0FBRyxlQUFlOztZQUdsQyxNQUFNdkcsS0FBSyxHQUFHRCxPQUFPLEdBQUdBLE9BQU8sQ0FBQ0MsS0FBSyxHQUFHRCxPQUFPLENBQUM4RixRQUFRLEdBQUcsQ0FBQztZQUM1RCxNQUFNZ0IsbUJBQW1CLEdBQUk3RyxLQUFLLEdBQUdELE9BQU8sQ0FBQ0MsS0FBSyxHQUFJLEdBQUc7WUFDekQsTUFBTThHLEtBQUssR0FBR3BFLEtBQUssQ0FBQ1MsTUFBTSxDQUFDckQsVUFBVSxHQUFHLEdBQUdFLEtBQUssSUFBSVcsS0FBSyxDQUFDb0csT0FBTyxDQUFDQyxTQUFTLEVBQUUsR0FBR3JHLEtBQUssQ0FBQ29HLE9BQU8sQ0FBQ3ZILE9BQU87WUFFckcsT0FDQ3NFLE1BQUEsQ0FBQU8sT0FBQSxDQUFBQyxhQUFBO2NBQUtpQyxTQUFTLEVBQUVaLEdBQUc7Y0FBRUYsR0FBRyxFQUFFQTtZQUFHLEdBQzVCM0IsTUFBQSxDQUFBTyxPQUFBLENBQUFDLGFBQUEsQ0FBQ1csY0FBQSxDQUFBZ0MsYUFBYSxRQUFFaEgsT0FBTyxDQUFpQixFQUN2Q3lDLEtBQUssQ0FBQ1MsTUFBTSxDQUFDckQsVUFBVSxJQUFJZ0UsTUFBQSxDQUFBTyxPQUFBLENBQUFDLGFBQUEsQ0FBQ1MsR0FBQSxDQUFBbUMsT0FBTztjQUFDQyxPQUFPLEVBQUVOO1lBQW1CLEVBQUksRUFDckUvQyxNQUFBLENBQUFPLE9BQUEsQ0FBQUMsYUFBQSxDQUFDK0IsT0FBTztjQUFBLEdBQUtDO1lBQUssR0FBR1EsS0FBSyxDQUFXLENBQ2hDO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDMURBLElBQUFoRCxNQUFBLEdBQUF0RSxPQUFBO1VBQ0EsSUFBQXFGLFdBQUEsR0FBQXJGLE9BQUE7VUFDQSxJQUFBNEgsTUFBQSxHQUFBNUgsT0FBQTtVQUNBLElBQUE2SCxhQUFBLEdBQUE3SCxPQUFBO1VBQ0EsSUFBQThILFNBQUEsR0FBQTlILE9BQUE7VUFDQSxJQUFBMEYsUUFBQSxHQUFBMUYsT0FBQTtVQUNBLElBQUF3RixNQUFBLEdBQUF4RixPQUFBO1VBRU0sU0FBVStILGdCQUFnQkEsQ0FBQyxFQUFFO1lBQ2xDLE1BQU07Y0FDTDdFLEtBQUssRUFBRTtnQkFBRVM7Y0FBTTtZQUFFLENBQ2pCLEdBQUcsSUFBQStCLFFBQUEsQ0FBQUcsZ0JBQWdCLEdBQUU7WUFDdEIsTUFBTSxDQUFDcEIsSUFBSSxFQUFFdUQsT0FBTyxDQUFDLEdBQUcxRCxNQUFBLENBQUFPLE9BQUssQ0FBQ2tCLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFDNUMsTUFBTSxDQUFDdEYsT0FBTyxFQUFFcUYsVUFBVSxDQUFDLEdBQUd4QixNQUFBLENBQUFPLE9BQUssQ0FBQ2tCLFFBQVEsQ0FBQ2xFLFNBQVMsQ0FBQztZQUN2RCxNQUFNNkMsT0FBTyxHQUFHQSxDQUFBLEtBQUs7Y0FDcEJvQixVQUFVLENBQUNqRSxTQUFTLENBQUM7Y0FDckJtRyxPQUFPLENBQUMsS0FBSyxDQUFDO1lBQ2YsQ0FBQztZQUVELElBQUF4QyxNQUFBLENBQUFtQixTQUFTLEVBQ1IsQ0FBQ2hELE1BQU0sQ0FBQyxFQUNSLE1BQUs7Y0FDSm1DLFVBQVUsQ0FBQ25DLE1BQU0sQ0FBQ2xELE9BQU8sQ0FBQztZQUMzQixDQUFDLEVBQ0QsY0FBYyxDQUNkO1lBRUQsSUFBSSxDQUFDQSxPQUFPLEVBQUUsT0FBTyxJQUFJO1lBQ3pCLE1BQU0wRixHQUFHLEdBQUcsaURBQWlEMUYsT0FBTyxFQUFFOEIsSUFBSSxFQUFFO1lBQzVFLE9BQ0MrQixNQUFBLENBQUFPLE9BQUEsQ0FBQUMsYUFBQSxDQUFDK0MsYUFBQSxDQUFBSSxlQUFlLFFBQ2R4RCxJQUFJLElBQ0pILE1BQUEsQ0FBQU8sT0FBQSxDQUFBQyxhQUFBLENBQUNnRCxTQUFBLENBQUFJLFFBQVE7Y0FBQ0MsRUFBRSxFQUFDLEtBQUs7Y0FBQ3BCLFNBQVMsRUFBRVo7WUFBRyxHQUNoQzdCLE1BQUEsQ0FBQU8sT0FBQSxDQUFBQyxhQUFBLENBQUNPLFdBQUEsQ0FBQStDLFdBQVcsUUFBRTNILE9BQU8sQ0FBQ0EsT0FBTyxDQUFlLEVBQzVDNkQsTUFBQSxDQUFBTyxPQUFBLENBQUFDLGFBQUEsQ0FBQzhDLE1BQUEsQ0FBQVMsSUFBSTtjQUFDdEIsU0FBUyxFQUFDLFlBQVk7Y0FBQ3VCLElBQUksRUFBQyxPQUFPO2NBQUN0QixPQUFPLEVBQUV0QztZQUFPLEVBQUksQ0FFL0QsQ0FDZ0I7VUFFcEI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdkNBLElBQUFKLE1BQUEsR0FBQXRFLE9BQUE7VUFDQSxJQUFBNkgsYUFBQSxHQUFBN0gsT0FBQTtVQUNNLFNBQVV5SCxhQUFhQSxDQUFDO1lBQUVjO1VBQVEsQ0FBRTtZQUN6QyxNQUFNLENBQUM5RCxJQUFJLEVBQUV1RCxPQUFPLENBQUMsR0FBRzFELE1BQUEsQ0FBQU8sT0FBSyxDQUFDa0IsUUFBUSxDQUFDLENBQUMsQ0FBQ3dDLFFBQVEsQ0FBQztZQUVsRGpFLE1BQUEsQ0FBQU8sT0FBSyxDQUFDMkQsU0FBUyxDQUFDLE1BQUs7Y0FDcEJSLE9BQU8sQ0FBQ08sUUFBUSxDQUFDO2NBQ2pCL0YsVUFBVSxDQUFDQyxVQUFVLENBQUMsTUFBSztnQkFDMUJ1RixPQUFPLENBQUMsS0FBSyxDQUFDO2NBQ2YsQ0FBQyxFQUFFLElBQUksQ0FBQztZQUNULENBQUMsRUFBRSxDQUFDTyxRQUFRLENBQUMsQ0FBQztZQUVkLE9BQ0NqRSxNQUFBLENBQUFPLE9BQUEsQ0FBQUMsYUFBQSxDQUFDK0MsYUFBQSxDQUFBSSxlQUFlLFFBQ2R4RCxJQUFJLElBQ0pILE1BQUEsQ0FBQU8sT0FBQSxDQUFBQyxhQUFBLENBQUMrQyxhQUFBLENBQUFZLE1BQU0sQ0FBQ0MsSUFBSTtjQUNYQyxNQUFNO2NBQ05DLE9BQU8sRUFBRTtnQkFDUkMsT0FBTyxFQUFFLENBQUM7Z0JBQ1ZDLEtBQUssRUFBRTtlQUNQO2NBQ0RDLE9BQU8sRUFBRTtnQkFDUkYsT0FBTyxFQUFFLENBQUM7Z0JBQ1ZHLFVBQVUsRUFBRTtrQkFDWEMsUUFBUSxFQUFFO2lCQUNWO2dCQUNESCxLQUFLLEVBQUU7ZUFDUDtjQUNESSxJQUFJLEVBQUU7Z0JBQ0xGLFVBQVUsRUFBRTtrQkFDWEMsUUFBUSxFQUFFLEdBQUc7a0JBQ2JILEtBQUssRUFBRTtpQkFDUDtnQkFDREQsT0FBTyxFQUFFOztZQUNULEdBRUFOLFFBQVEsQ0FFVixDQUNnQjtVQUVwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN6Q0EsSUFBQWpFLE1BQUEsR0FBQXRFLE9BQUE7VUFDQSxJQUFBNkgsYUFBQSxHQUFBN0gsT0FBQTtVQUNNLFNBQVVrSSxRQUFRQSxDQUFDO1lBQUVuQixTQUFTO1lBQUV3QixRQUFRO1lBQUVKLEVBQUUsR0FBRztVQUFNLENBQUU7WUFDNUQsTUFBTWdCLFNBQVMsR0FBRyxJQUFBdEIsYUFBQSxDQUFBWSxNQUFNLEVBQUNOLEVBQUUsQ0FBQztZQUM1QixPQUNDN0QsTUFBQSxDQUFBTyxPQUFBLENBQUFDLGFBQUEsQ0FBQ3FFLFNBQVM7Y0FDVFIsTUFBTTtjQUNONUIsU0FBUyxFQUFFQSxTQUFTO2NBQ3BCNkIsT0FBTyxFQUFFO2dCQUNSQyxPQUFPLEVBQUU7ZUFDVDtjQUNERSxPQUFPLEVBQUU7Z0JBQ1JGLE9BQU8sRUFBRSxDQUFDO2dCQUNWRyxVQUFVLEVBQUU7a0JBQ1hDLFFBQVEsRUFBRTs7ZUFFWDtjQUNEQyxJQUFJLEVBQUU7Z0JBQ0xGLFVBQVUsRUFBRTtrQkFDWEMsUUFBUSxFQUFFLEdBQUc7a0JBQ2JILEtBQUssRUFBRTtpQkFDUDtnQkFDREQsT0FBTyxFQUFFOztZQUNULEdBRUFOLFFBQVEsQ0FDRTtVQUVkOzs7Ozs7Ozs7Ozs7Ozs7OztVQzVCQSxJQUFBakUsTUFBQSxHQUFBdEUsT0FBQTtVQUNBLElBQUFvSixhQUFBLEdBQUFwSixPQUFBO1VBQ0EsSUFBQTRILE1BQUEsR0FBQTVILE9BQUE7VUFFQSxJQUFBMEYsUUFBQSxHQUFBMUYsT0FBQTtVQUNBLElBQUFxSixRQUFBLEdBQUFySixPQUFBO1VBQ0EsSUFBQXdGLE1BQUEsR0FBQXhGLE9BQUE7VUFFTztVQUFVLFNBQVVzSixNQUFNQSxDQUFBO1lBQ2hDLE1BQU07Y0FBRXBHO1lBQUssQ0FBRSxHQUFHLElBQUF3QyxRQUFBLENBQUFHLGdCQUFnQixHQUFFO1lBRXBDLE1BQU0sQ0FBQzBELFFBQVEsRUFBRUMsV0FBVyxDQUFDLEdBQUdsRixNQUFBLENBQUFPLE9BQUssQ0FBQ2tCLFFBQVEsQ0FBQyxDQUFDLENBQUM3QyxLQUFLLENBQUNTLE1BQU0sQ0FBQ3RELEtBQUssQ0FBQztZQUNwRSxNQUFNLENBQUNvSixPQUFPLEVBQUVDLFVBQVUsQ0FBQyxHQUFHcEYsTUFBQSxDQUFBTyxPQUFLLENBQUNrQixRQUFRLEVBQVU7WUFFdEQsSUFBQVAsTUFBQSxDQUFBbUIsU0FBUyxFQUFDLENBQUN5QyxhQUFBLENBQUFPLEdBQUcsQ0FBQyxFQUFFLE1BQU1ELFVBQVUsQ0FBQ0UsV0FBVyxDQUFDQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1lBQ3JELElBQUFyRSxNQUFBLENBQUFtQixTQUFTLEVBQUMsQ0FBQ3pELEtBQUssQ0FBQ1MsTUFBTSxDQUFDLEVBQUUsTUFBTTZGLFdBQVcsQ0FBQyxDQUFDLENBQUN0RyxLQUFLLENBQUNTLE1BQU0sQ0FBQ3RELEtBQUssQ0FBQyxDQUFDO1lBRWxFLE9BQ0NpRSxNQUFBLENBQUFPLE9BQUEsQ0FBQUMsYUFBQSxDQUFDc0UsYUFBQSxDQUFBVSxZQUFZO2NBQUNMLE9BQU8sRUFBRUE7WUFBTyxHQUM1QkYsUUFBUSxJQUFJakYsTUFBQSxDQUFBTyxPQUFBLENBQUFDLGFBQUEsQ0FBQ3VFLFFBQUEsQ0FBQTFELGdCQUFnQixPQUFHLEVBQ2hDekMsS0FBSyxDQUFDUyxNQUFNLENBQUMzQyxPQUFPLElBQ3BCc0QsTUFBQSxDQUFBTyxPQUFBLENBQUFDLGFBQUEsQ0FBQzhDLE1BQUEsQ0FBQW1DLFVBQVU7Y0FBQ3pCLElBQUksRUFBQyxTQUFTO2NBQUN2QixTQUFTLEVBQUMsUUFBUTtjQUFDQyxPQUFPLEVBQUVBLENBQUEsS0FBTTlELEtBQUssQ0FBQ1MsTUFBTSxDQUFDM0MsT0FBTztZQUFFLEVBQ25GLENBQ2E7VUFFakI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDekJBLElBQUFzRCxNQUFBLEdBQUF0RSxPQUFBO1VBQ0EsSUFBQW9KLGFBQUEsR0FBQXBKLE9BQUE7VUFFQSxJQUFBMEYsUUFBQSxHQUFBMUYsT0FBQTtVQUNBLElBQUFxSixRQUFBLEdBQUFySixPQUFBO1VBRU87VUFBVSxTQUFVZ0ssYUFBYUEsQ0FBQTtZQUN2QyxNQUFNO2NBQUU5RztZQUFLLENBQUUsR0FBRyxJQUFBd0MsUUFBQSxDQUFBRyxnQkFBZ0IsR0FBRTtZQUVwQyxPQUNDdkIsTUFBQSxDQUFBTyxPQUFBLENBQUFDLGFBQUEsQ0FBQ3NFLGFBQUEsQ0FBQVUsWUFBWTtjQUFDRyxRQUFRO2NBQUNDLFFBQVEsRUFBRWhILEtBQUssQ0FBQ1MsTUFBTSxDQUFDdEM7WUFBUSxHQUNwRCxDQUFDLENBQUM2QixLQUFLLENBQUNTLE1BQU0sQ0FBQ3RELEtBQUssSUFBSWlFLE1BQUEsQ0FBQU8sT0FBQSxDQUFBQyxhQUFBLENBQUN1RSxRQUFBLENBQUExRCxnQkFBZ0IsT0FBRyxDQUMvQjtVQUVqQjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNiQSxJQUFBckIsTUFBQSxHQUFBdEUsT0FBQTtVQVFPLE1BQU1tSyxhQUFhLEdBQUF4SCxPQUFBLENBQUF3SCxhQUFBLEdBQUc3RixNQUFBLENBQUFPLE9BQUssQ0FBQ3VGLGFBQWEsQ0FBQyxFQUFvQixDQUFDO1VBQy9ELE1BQU12RSxnQkFBZ0IsR0FBR0EsQ0FBQSxLQUFNdkIsTUFBQSxDQUFBTyxPQUFLLENBQUN3RixVQUFVLENBQUNGLGFBQWEsQ0FBQztVQUFDeEgsT0FBQSxDQUFBa0QsZ0JBQUEsR0FBQUEsZ0JBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDVnRFLElBQUF2QixNQUFBLEdBQUF0RSxPQUFBO1VBRUEsSUFBQXNLLE1BQUEsR0FBQXRLLE9BQUE7VUFDQSxJQUFBd0YsTUFBQSxHQUFBeEYsT0FBQTtVQUNBLElBQUEwRixRQUFBLEdBQUExRixPQUFBO1VBQ0EsSUFBQXVLLE9BQUEsR0FBQXZLLE9BQUE7VUFDQSxJQUFBd0ssTUFBQSxHQUFBeEssT0FBQTtVQUNBLElBQUF1RixHQUFBLEdBQUF2RixPQUFBO1VBQ0EsSUFBQXlLLGlCQUFBLEdBQUF6SyxPQUFBO1VBQ0EsSUFBQTBLLGNBQUEsR0FBQTFLLE9BQUE7VUFhTyxNQUFNc0QsTUFBTSxHQUFhQSxDQUFDO1lBQUVKO1VBQUssQ0FBVSxLQUFJO1lBQ3JELE1BQU0sQ0FBQ2EsS0FBSyxFQUFFNEcsUUFBUSxDQUFDLEdBQUcsSUFBQXJHLE1BQUEsQ0FBQXlCLFFBQVEsRUFBQzdDLEtBQUssQ0FBQ2EsS0FBSyxDQUFDO1lBQy9DLE1BQU0sQ0FBQzZHLGNBQWMsRUFBRUMsaUJBQWlCLENBQUMsR0FBR3ZHLE1BQUEsQ0FBQU8sT0FBSyxDQUFDa0IsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNqRSxNQUFNLENBQUMrRSxjQUFjLEVBQUVDLGlCQUFpQixDQUFDLEdBQUd6RyxNQUFBLENBQUFPLE9BQUssQ0FBQ2tCLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDakUsTUFBTSxHQUFHaUYsU0FBUyxDQUFDLEdBQUcsSUFBQTFHLE1BQUEsQ0FBQXlCLFFBQVEsRUFBQyxFQUFFLENBQUM7WUFDbEMsTUFBTWtGLGdCQUFnQixHQUFHQSxDQUFBLEtBQU1GLGlCQUFpQixDQUFDLENBQUNELGNBQWMsQ0FBQztZQUNqRSxNQUFNbEYsZ0JBQWdCLEdBQUdBLENBQUEsS0FBTWlGLGlCQUFpQixDQUFDLENBQUNELGNBQWMsQ0FBQztZQUNqRSxNQUFNO2NBQUV6SjtZQUFLLENBQUUsR0FBRytCLEtBQUs7WUFFdkIsSUFBQXNDLE1BQUEsQ0FBQW1CLFNBQVMsRUFBQyxDQUFDekQsS0FBSyxDQUFDLEVBQUUsTUFBTXlILFFBQVEsQ0FBQ3pILEtBQUssQ0FBQ2EsS0FBSyxDQUFDLENBQUM7WUFDL0MsSUFBQXlCLE1BQUEsQ0FBQW1CLFNBQVMsRUFBQyxDQUFDekQsS0FBSyxDQUFDUyxNQUFNLENBQUMsRUFBRXNILGdCQUFnQixFQUFFLFlBQVksQ0FBQztZQUN6RCxJQUFBekYsTUFBQSxDQUFBbUIsU0FBUyxFQUFDLENBQUN6RCxLQUFLLENBQUMsRUFBRSxNQUFNOEgsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBRXZDLE1BQU1sSyxLQUFLLEdBQUc7Y0FBRW9DLEtBQUs7Y0FBRS9CLEtBQUs7Y0FBRXlFLGdCQUFnQjtjQUFFL0UsT0FBTyxFQUFFcUMsS0FBSyxDQUFDUyxNQUFNLENBQUM5QztZQUFPLENBQUU7WUFFL0UsTUFBTTBCLElBQUksR0FBR1csS0FBSyxDQUFDUyxNQUFNLEVBQUV0RCxLQUFLLEVBQUU2SyxTQUFTLEtBQUssVUFBVSxHQUFHLGFBQWEsR0FBRyxZQUFZO1lBQ3pGLE9BQ0M1RyxNQUFBLENBQUFPLE9BQUEsQ0FBQUMsYUFBQSxDQUFBUixNQUFBLENBQUFPLE9BQUEsQ0FBQXNHLFFBQUEsUUFDQzdHLE1BQUEsQ0FBQU8sT0FBQSxDQUFBQyxhQUFBLENBQUNZLFFBQUEsQ0FBQXlFLGFBQWEsQ0FBQ2lCLFFBQVE7Y0FBQ3RLLEtBQUssRUFBRUE7WUFBSyxHQUNuQ3dELE1BQUEsQ0FBQU8sT0FBQSxDQUFBQyxhQUFBO2NBQUtpQyxTQUFTLEVBQUM7WUFBd0IsR0FDckM3RCxLQUFLLENBQUNTLE1BQU0sQ0FBQzlDLE9BQU8sR0FBR3lELE1BQUEsQ0FBQU8sT0FBQSxDQUFBQyxhQUFBLENBQUM0RixjQUFBLENBQUFWLGFBQWEsT0FBRyxHQUFHMUYsTUFBQSxDQUFBTyxPQUFBLENBQUFDLGFBQUEsQ0FBQ3lGLE9BQUEsQ0FBQWpCLE1BQU0sT0FBRyxFQUN0RGhGLE1BQUEsQ0FBQU8sT0FBQSxDQUFBQyxhQUFBLENBQUMyRixpQkFBQSxDQUFBMUMsZ0JBQWdCLE9BQUcsRUFDcEJ6RCxNQUFBLENBQUFPLE9BQUEsQ0FBQUMsYUFBQSxlQUNDUixNQUFBLENBQUFPLE9BQUEsQ0FBQUMsYUFBQSxnQ0FBMEIsRUFDMUJSLE1BQUEsQ0FBQU8sT0FBQSxDQUFBQyxhQUFBLENBQUN3RixNQUFBLENBQUFlLE1BQU0sT0FBRyxDQUNKLENBQ0YsQ0FDa0IsRUFDeEJ0SCxLQUFLLElBQ0xPLE1BQUEsQ0FBQU8sT0FBQSxDQUFBQyxhQUFBLENBQUFSLE1BQUEsQ0FBQU8sT0FBQSxDQUFBc0csUUFBQSxRQUNDN0csTUFBQSxDQUFBTyxPQUFBLENBQUFDLGFBQUEsQ0FBQzBGLE1BQUEsQ0FBQWhHLFVBQVU7Y0FDVnJELEtBQUssRUFBRUEsS0FBSztjQUNaRCxXQUFXLEVBQUVnQyxLQUFLLENBQUNoQyxXQUFXO2NBQzlCdUQsSUFBSSxFQUFFcUcsY0FBYztjQUNwQnBHLE9BQU8sRUFBRXVHO1lBQWdCLEVBQ3hCLEVBQ0YzRyxNQUFBLENBQUFPLE9BQUEsQ0FBQUMsYUFBQSxDQUFDUyxHQUFBLENBQUErRixVQUFVO2NBQ1ZDLEtBQUssRUFBRXJJLEtBQUssQ0FBQzdDLEtBQUssRUFBRWtMLEtBQUs7Y0FDekJySyxXQUFXLEVBQUVnQyxLQUFLLENBQUNoQyxXQUFXO2NBQzlCc0ssU0FBUyxFQUFFdEksS0FBSyxDQUFDN0MsS0FBSyxFQUFFb0wsWUFBWTtjQUNwQ2xKLElBQUksRUFBRUEsSUFBSTtjQUNWa0MsSUFBSSxFQUFFbUcsY0FBYztjQUNwQmxHLE9BQU8sRUFBRWtCO1lBQWdCLEVBQ3hCLENBRUgsQ0FDQztVQUVMLENBQUM7VUFBQ2pELE9BQUEsQ0FBQVcsTUFBQSxHQUFBQSxNQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3RFSSxTQUFVb0ksT0FBT0EsQ0FBQTtZQUN0QixPQUFPQyxLQUFBLENBQUE3RyxhQUFBLENBQUE2RyxLQUFBLENBQUFSLFFBQUEsT0FBSztVQUNiIiwiaWdub3JlTGlzdCI6W119