System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@aimpact/ailearn-sdk@1.0.0/reactive/model", "@aimpact/ailearn-app@0.2.14/widgets/breadcrumb.widget", "@aimpact/ailearn-app@0.2.14/i18n.ts", "@beyond-js/react-18-widgets@1.1.2/base", "@beyond-js/reactive@1.1.12/model", "@aimpact/chat-sdk@1.3.0/core", "@aimpact/chat-sdk@1.3.0/wrapper", "@beyond-js/kernel@0.1.9/texts", "react@18.2.0", "pragmate-ui@1.0.0-beta.7/modal", "pragmate-ui@1.0.0-beta.7/base", "pragmate-ui@1.0.0-beta.7/components", "pragmate-ui@1.0.0-beta.7/chips", "@aimpact/ailearn-app@0.2.14/components/ui", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.7/icons", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.2.14/components/navbar-header.code", "pragmate-ui@1.0.0-beta.7/toast", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp0214WidgetsBreadcrumbWidget) {
      dependency_3 = _aimpactAilearnApp0214WidgetsBreadcrumbWidget;
    }, function (_aimpactAilearnApp0214I18nTs) {
      dependency_4 = _aimpactAilearnApp0214I18nTs;
    }, function (_beyondJsReact18Widgets112Base) {
      dependency_5 = _beyondJsReact18Widgets112Base;
    }, function (_beyondJsReactive1112Model) {
      dependency_6 = _beyondJsReactive1112Model;
    }, function (_aimpactChatSdk130Core) {
      dependency_7 = _aimpactChatSdk130Core;
    }, function (_aimpactChatSdk130Wrapper) {
      dependency_8 = _aimpactChatSdk130Wrapper;
    }, function (_beyondJsKernel019Texts) {
      dependency_9 = _beyondJsKernel019Texts;
    }, function (_react2) {
      dependency_10 = _react2;
    }, function (_pragmateUi100Beta7Modal) {
      dependency_11 = _pragmateUi100Beta7Modal;
    }, function (_pragmateUi100Beta7Base) {
      dependency_12 = _pragmateUi100Beta7Base;
    }, function (_pragmateUi100Beta7Components) {
      dependency_13 = _pragmateUi100Beta7Components;
    }, function (_pragmateUi100Beta7Chips) {
      dependency_14 = _pragmateUi100Beta7Chips;
    }, function (_aimpactAilearnApp0214ComponentsUi) {
      dependency_15 = _aimpactAilearnApp0214ComponentsUi;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_16 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_17 = _pragmateUi100Beta7Icons;
    }, function (_framerMotion2) {
      dependency_18 = _framerMotion2;
    }, function (_aimpactAilearnApp0214ComponentsNavbarHeaderCode) {
      dependency_19 = _aimpactAilearnApp0214ComponentsNavbarHeaderCode;
    }, function (_pragmateUi100Beta7Toast) {
      dependency_20 = _pragmateUi100Beta7Toast;
    }, function (_beyondJsKernel019Styles) {
      dependency_21 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.3.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.23.8"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.2.14"], ["@aimpact/ailearn-app", "0.2.14"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.2.14/main-layout",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@aimpact/ailearn-sdk/reactive/model', dependency_2], ['@aimpact/ailearn-app/widgets/breadcrumb.widget', dependency_3], ['@aimpact/ailearn-app/i18n.ts', dependency_4], ['@beyond-js/react-18-widgets/base', dependency_5], ['@beyond-js/reactive/model', dependency_6], ['@aimpact/chat-sdk/core', dependency_7], ['@aimpact/chat-sdk/wrapper', dependency_8], ['@beyond-js/kernel/texts', dependency_9], ['react', dependency_10], ['pragmate-ui/modal', dependency_11], ['pragmate-ui/base', dependency_12], ['pragmate-ui/components', dependency_13], ['pragmate-ui/chips', dependency_14], ['@aimpact/ailearn-app/components/ui', dependency_15], ['@beyond-js/react-18-widgets/hooks', dependency_16], ['pragmate-ui/icons', dependency_17], ['framer-motion', dependency_18], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_19], ['pragmate-ui/toast', dependency_20], ['@beyond-js/kernel/styles', dependency_21]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "main-layout",
        "vspecifier": "@aimpact/ailearn-app@0.2.14/main-layout.widget",
        "is": "layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.2.14/main-layout.widget');
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
        hash: 1384244308,
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
              setCredits({
                ...store.broker.model?.credits
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX2JyZWFkY3J1bWIiLCJfaTE4biIsIkJyb2tlciIsIlJlYWN0aXZlTW9kZWwiLCJtb2RlbCIsImhhc0NyZWRpdHMiLCJjcmVkaXRzIiwidG90YWwiLCJtZXNzYWdlIiwiYnJlYWRjcnVtYiIsImJyZWFkY3J1bWJTdG9yZSIsInNob3dDcmVkaXRzIiwib3ZlcmxheSIsInZhbHVlIiwidHJpZ2dlciIsInJlZnJlc2giLCJFcnJvciIsImdsb2JhbFRleHRzIiwidGV4dHMiLCJjYW5Db25zdW1lQ3JlZGl0cyIsImJhY2tMaW5rIiwiY29uc3RydWN0b3IiLCJlbnN1cmVDcmVkaXRzIiwiYmluZCIsIm9uIiwidHJpZ2dlckV2ZW50IiwiYWRkTW9kZWwiLCJpZCIsInVuZGVmaW5lZCIsIm9uTGlzdGVuIiwiYXNzaWdubWVudElkIiwiY2xlYXJNb2RlbCIsInNhdmVkIiwiY2FsbGJhY2siLCJzcGVjcyIsImNvbnNvbGUiLCJlcnJvciIsInNob3dNZXNzYWdlIiwidHlwZSIsImdsb2JhbFRoaXMiLCJzZXRUaW1lb3V0IiwiY2xlYXIiLCJleHBvcnRzIiwiTGF5b3V0QnJva2VyIiwiX2Jhc2UiLCJfc3RvcmUiLCJfdmlldyIsIkNvbnRyb2xsZXIiLCJSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiV2lkZ2V0IiwiTGF5b3V0IiwiX3dyYXBwZXIiLCJfYnJva2VyIiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiYnJva2VyIiwiQ3VycmVudFRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwicmVhZHkiLCJpbml0IiwiQXBwV3JhcHBlciIsImlzUmVhZHkiLCJsaXN0ZW4iLCJjbG9zZSIsIm9mZiIsIl9yZWFjdCIsIl9tb2RhbCIsIkNvaW5zQWxlcnQiLCJzaG93Iiwib25DbG9zZSIsImNvaW5zIiwiYWxlcnQiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIkFsZXJ0TW9kYWwiLCJidXR0b25MYWJlbCIsImFjdGlvbiIsIm9uQ29uZmlybSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJfY29tcG9uZW50cyIsIl9jaGlwcyIsIl91aSIsIl9ob29rcyIsIl9hbmltYXRlZExhYmVsIiwiX2NvbnRleHQiLCJDcmVkaXRzQ29udGFpbmVyIiwidG9nZ2xlQ29pbnNNb2RhbCIsInVzZUxheW91dENvbnRleHQiLCJzZXRNZXNzYWdlIiwidXNlU3RhdGUiLCJzZXRIYXNDcmVkaXRzIiwicmVmIiwidXNlUmVmIiwiY2xzIiwic2V0Q3JlZGl0cyIsImNvbnN1bWVkIiwib25DcmVkaXRzQ2hhbmdlIiwiY3VycmVudCIsImNsYXNzTGlzdCIsImFkZCIsIm1lc3NhZ2VzIiwidXNlQmluZGVyIiwiaGVhZGVyIiwiQ29udHJvbCIsImF0dHJzIiwiY2xhc3NOYW1lIiwib25DbGljayIsInZhcmlhbnQiLCJkaXNhYmxlZCIsIkJ1dHRvbiIsIkNoaXAiLCJwZXJjZW50YWdlQXZhaWxhYmxlIiwibGFiZWwiLCJhY3Rpb25zIiwiYXZhaWxhYmxlIiwiQW5pbWF0ZWRMYWJlbCIsIkJhdHRlcnkiLCJwZXJjZW50IiwiX2ljb25zIiwiX2ZyYW1lck1vdGlvbiIsIl9hbmltYXRlZCIsIk5vdGlmaWNhdGlvbnNCYXIiLCJzZXRTaG93IiwiQW5pbWF0ZVByZXNlbmNlIiwiQW5pbWF0ZWQiLCJhcyIsIkh0bWxXcmFwcGVyIiwiSWNvbiIsImljb24iLCJjaGlsZHJlbiIsInVzZUVmZmVjdCIsIm1vdGlvbiIsInNwYW4iLCJsYXlvdXQiLCJpbml0aWFsIiwib3BhY2l0eSIsIndpZHRoIiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImV4aXQiLCJDb21wb25lbnQiLCJfbmF2YmFySGVhZGVyIiwiX2NyZWRpdHMiLCJIZWFkZXIiLCJoYXNNb2RlbCIsInNldEhhc01vZGVsIiwidXBkYXRlZCIsInNldFVwZGF0ZWQiLCJobXIiLCJwZXJmb3JtYW5jZSIsIm5vdyIsIk5hdmJhckhlYWRlciIsIkljb25CdXR0b24iLCJPdmVybGF5SGVhZGVyIiwiY2xvc2FibGUiLCJiYWNrbGluayIsIkxheW91dENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl90b2FzdCIsIl9oZWFkZXIiLCJfYWxlcnQiLCJfbm90aWZpY2F0aW9uc0JhciIsIl9vdmVybGF5SGVhZGVyIiwic2V0UmVhZHkiLCJzaG93Q29pbnNNb2RhbCIsInNldFNob3dDb2luc01vZGFsIiwic2hvd0NvaW5zQWxlcnQiLCJzZXRTaG93Q29pbnNBbGVydCIsInNldFVwZGF0ZSIsInRvZ2dsZUNvaW5zQWxlcnQiLCJtb2RlbFR5cGUiLCJGcmFnbWVudCIsIlByb3ZpZGVyIiwiVG9hc3RzIiwiQ29pbnNNb2RhbCIsIm93bmVyIiwib25Db25zdW1lIiwiY29uc3VtZUNvaW5zIiwiUHJlbG9hZCIsIlJlYWN0Il0sInNvdXJjZXMiOlsiL3RzL2Jyb2tlci50cyIsIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXcvY29pbnMvYWxlcnQudHN4IiwiL3RzL3ZpZXcvY29pbnMvY3JlZGl0cy50c3giLCIvdHMvdmlldy9jb2lucy9ub3RpZmljYXRpb25zLWJhci50c3giLCIvdHMvdmlldy9jb21wb25lbnRzL2FuaW1hdGVkLWxhYmVsLnRzeCIsIi90cy92aWV3L2NvbXBvbmVudHMvYW5pbWF0ZWQudHN4IiwiL3RzL3ZpZXcvY29tcG9uZW50cy9oZWFkZXIudHN4IiwiL3RzL3ZpZXcvY29tcG9uZW50cy9vdmVybGF5LWhlYWRlci50c3giLCIvdHMvdmlldy9jb250ZXh0LnRzIiwiL3RzL3ZpZXcvaW5kZXgudHN4IiwiL3RzL3ZpZXcvcHJlbG9hZC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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