System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.2.0/model", "@aimpact/ailearn-app@0.1.6-dev.01/widgets/breadcrumb.widget", "@beyond-js/react-18-widgets@1.1.2/base", "@aimpact/chat-sdk@1.0.1/core", "@aimpact/chat@1.0.2/wrapper", "@beyond-js/kernel@0.1.9/texts", "react@18.2.0", "pragmate-ui@1.0.0-beta.2/modal", "@aimpact/ailearn-app@0.1.6-dev.01/components/ui", "pragmate-ui@1.0.0-beta.2/components", "pragmate-ui@1.0.0-beta.2/chips", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.2/icons", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.1.6-dev.01/components/navbar-header.code", "pragmate-ui@1.0.0-beta.2/toast", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, bimport, __Bundle, __pkg, ims, LayoutBroker, Controller, Header, OverlayHeader, __beyond_pkg, hmr;
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
    }, function (_aimpactAilearnApp016Dev01WidgetsBreadcrumbWidget) {
      dependency_3 = _aimpactAilearnApp016Dev01WidgetsBreadcrumbWidget;
    }, function (_beyondJsReact18Widgets112Base) {
      dependency_4 = _beyondJsReact18Widgets112Base;
    }, function (_aimpactChatSdk101Core) {
      dependency_5 = _aimpactChatSdk101Core;
    }, function (_aimpactChat102Wrapper) {
      dependency_6 = _aimpactChat102Wrapper;
    }, function (_beyondJsKernel019Texts) {
      dependency_7 = _beyondJsKernel019Texts;
    }, function (_react2) {
      dependency_8 = _react2;
    }, function (_pragmateUi100Beta2Modal) {
      dependency_9 = _pragmateUi100Beta2Modal;
    }, function (_aimpactAilearnApp016Dev01ComponentsUi) {
      dependency_10 = _aimpactAilearnApp016Dev01ComponentsUi;
    }, function (_pragmateUi100Beta2Components) {
      dependency_11 = _pragmateUi100Beta2Components;
    }, function (_pragmateUi100Beta2Chips) {
      dependency_12 = _pragmateUi100Beta2Chips;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_13 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi100Beta2Icons) {
      dependency_14 = _pragmateUi100Beta2Icons;
    }, function (_framerMotion2) {
      dependency_15 = _framerMotion2;
    }, function (_aimpactAilearnApp016Dev01ComponentsNavbarHeaderCode) {
      dependency_16 = _aimpactAilearnApp016Dev01ComponentsNavbarHeaderCode;
    }, function (_pragmateUi100Beta2Toast) {
      dependency_17 = _pragmateUi100Beta2Toast;
    }, function (_beyondJsKernel019Styles) {
      dependency_18 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.2"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.2"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.1.6-dev.01"], ["@aimpact/ailearn-app", "0.1.6-dev.01"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.01/main-layout",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/reactive/model', dependency_2], ['@aimpact/ailearn-app/widgets/breadcrumb.widget', dependency_3], ['@beyond-js/react-18-widgets/base', dependency_4], ['@aimpact/chat-sdk/core', dependency_5], ['@aimpact/chat/wrapper', dependency_6], ['@beyond-js/kernel/texts', dependency_7], ['react', dependency_8], ['pragmate-ui/modal', dependency_9], ['@aimpact/ailearn-app/components/ui', dependency_10], ['pragmate-ui/components', dependency_11], ['pragmate-ui/chips', dependency_12], ['@beyond-js/react-18-widgets/hooks', dependency_13], ['pragmate-ui/icons', dependency_14], ['framer-motion', dependency_15], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_16], ['pragmate-ui/toast', dependency_17], ['@beyond-js/kernel/styles', dependency_18]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "main-layout",
        "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.01/main-layout.widget",
        "is": "layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.6-dev.01/main-layout.widget');
      ims = new Map();
      /************************
      INTERNAL MODULE: ./broker
      ************************/
      ims.set('./broker', {
        hash: 2158011783,
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
        hash: 2543502439,
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
            get model() {
              return this.#broker.model;
            }
            get saved() {
              return this.#broker?.model?.saved;
            }
            get ready() {
              return super.ready && this.#texts.ready;
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
        hash: 3281594040,
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
        hash: 1880573122,
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
            const percentageAvailable = (credits.total - 30) / credits.total * 100;
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
        hash: 2323863151,
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
          var _coinsModal = require("./coins/coins-modal");
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
              show: showCoinsAlert,
              onClose: toggleCoinsAlert
            }), _react.default.createElement(_coinsModal.CoinsModal, {
              store: store,
              texts: texts,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX2JyZWFkY3J1bWIiLCJCcm9rZXIiLCJSZWFjdGl2ZU1vZGVsIiwibW9kZWwiLCJoYXNDcmVkaXRzIiwiY3JlZGl0cyIsInRvdGFsIiwibWVzc2FnZSIsImJyZWFkY3J1bWIiLCJicmVhZGNydW1iU3RvcmUiLCJzaG93Q3JlZGl0cyIsIm92ZXJsYXkiLCJ2YWx1ZSIsInRyaWdnZXIiLCJjYW5Db25zdW1lQ3JlZGl0cyIsImJhY2tMaW5rIiwiY29uc3RydWN0b3IiLCJlbnN1cmVDcmVkaXRzIiwiYmluZCIsImFkZE1vZGVsIiwiaWQiLCJ1bmRlZmluZWQiLCJvbiIsIm9uTGlzdGVuIiwiYXNzaWdubWVudElkIiwiY2xlYXJNb2RlbCIsInNhdmVkIiwidHJpZ2dlckV2ZW50IiwiY2FsbGJhY2siLCJzcGVjcyIsImNvbnNvbGUiLCJlcnJvciIsInNob3dNZXNzYWdlIiwidHlwZSIsImdsb2JhbFRoaXMiLCJzZXRUaW1lb3V0IiwiY2xlYXIiLCJleHBvcnRzIiwiTGF5b3V0QnJva2VyIiwiX2Jhc2UiLCJfc3RvcmUiLCJfdmlldyIsIkNvbnRyb2xsZXIiLCJSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiV2lkZ2V0IiwiTGF5b3V0IiwiX3dyYXBwZXIiLCJfYnJva2VyIiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiYnJva2VyIiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJyZWFkeSIsImluaXQiLCJBcHBXcmFwcGVyIiwiaXNSZWFkeSIsImxpc3RlbiIsImNsb3NlIiwib2ZmIiwiX3JlYWN0IiwiX21vZGFsIiwiQ29pbnNBbGVydCIsInNob3ciLCJvbkNsb3NlIiwiY29pbnMiLCJhbGVydCIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiQWxlcnRNb2RhbCIsImJ1dHRvbkxhYmVsIiwiYWN0aW9uIiwib25Db25maXJtIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIl91aSIsIkNvaW5zTW9kYWwiLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwidXNlU3RhdGUiLCJzZXRFcnJvciIsIm1vZGFsIiwiYW5zd2VyIiwiY29uc3VtZUNvaW5zIiwic3RhdHVzIiwiZXJyb3JzIiwiRXJyb3IiLCJjb2RlIiwiZSIsIm5vQ3JlZGl0cyIsIkNvbmZpcm1Nb2RhbCIsImNsYXNzTmFtZSIsImNlbnRlcmVkIiwiYWN0aW9ucyIsImNvbmZpcm0iLCJsYWJlbCIsInZhcmlhbnQiLCJjYW5jZWwiLCJib3JkZXJlZCIsIm9uQ2FuY2VsIiwiRXJyb3JSZW5kZXJlciIsIkJhdHRlcnkiLCJwZXJjZW50IiwiX2NvbXBvbmVudHMiLCJfY2hpcHMiLCJfaG9va3MiLCJfYW5pbWF0ZWRMYWJlbCIsIl9jb250ZXh0IiwiQ3JlZGl0c0NvbnRhaW5lciIsInRvZ2dsZUNvaW5zTW9kYWwiLCJ1c2VMYXlvdXRDb250ZXh0Iiwic2V0TWVzc2FnZSIsInNldEhhc0NyZWRpdHMiLCJyZWYiLCJ1c2VSZWYiLCJjbHMiLCJzZXRDcmVkaXRzIiwiY29uc3VtZWQiLCJvbkNyZWRpdHNDaGFuZ2UiLCJjdXJyZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwibWVzc2FnZXMiLCJ1c2VCaW5kZXIiLCJoZWFkZXIiLCJDb250cm9sIiwiQ2hpcCIsIkJ1dHRvbiIsImF0dHJzIiwib25DbGljayIsImRpc2FibGVkIiwicGVyY2VudGFnZUF2YWlsYWJsZSIsImF2YWlsYWJsZSIsIkFuaW1hdGVkTGFiZWwiLCJfaWNvbnMiLCJfZnJhbWVyTW90aW9uIiwiX2FuaW1hdGVkIiwiTm90aWZpY2F0aW9uc0JhciIsInNldFNob3ciLCJBbmltYXRlUHJlc2VuY2UiLCJBbmltYXRlZCIsImFzIiwiSHRtbFdyYXBwZXIiLCJJY29uIiwiaWNvbiIsImNoaWxkcmVuIiwidXNlRWZmZWN0IiwibW90aW9uIiwic3BhbiIsImxheW91dCIsImluaXRpYWwiLCJvcGFjaXR5Iiwid2lkdGgiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZXhpdCIsIkNvbXBvbmVudCIsIl9uYXZiYXJIZWFkZXIiLCJfY3JlZGl0cyIsIkhlYWRlciIsImhhc01vZGVsIiwic2V0SGFzTW9kZWwiLCJ1cGRhdGVkIiwic2V0VXBkYXRlZCIsImhtciIsInBlcmZvcm1hbmNlIiwibm93IiwiTmF2YmFySGVhZGVyIiwiT3ZlcmxheUhlYWRlciIsImNsb3NhYmxlIiwiYmFja2xpbmsiLCJMYXlvdXRDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfdG9hc3QiLCJfaGVhZGVyIiwiX2FsZXJ0IiwiX2NvaW5zTW9kYWwiLCJfbm90aWZpY2F0aW9uc0JhciIsIl9vdmVybGF5SGVhZGVyIiwic2V0UmVhZHkiLCJzaG93Q29pbnNNb2RhbCIsInNldFNob3dDb2luc01vZGFsIiwic2hvd0NvaW5zQWxlcnQiLCJzZXRTaG93Q29pbnNBbGVydCIsInNldFVwZGF0ZSIsInRvZ2dsZUNvaW5zQWxlcnQiLCJIZWFkZXJDb250cm9sIiwiRnJhZ21lbnQiLCJQcm92aWRlciIsIlRvYXN0cyIsIlByZWxvYWQiLCJSZWFjdCJdLCJzb3VyY2VzIjpbIi90cy9icm9rZXIudHMiLCIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3L2NvaW5zL2FsZXJ0LnRzeCIsIi90cy92aWV3L2NvaW5zL2NvaW5zLW1vZGFsLnRzeCIsIi90cy92aWV3L2NvaW5zL2NyZWRpdHMudHN4IiwiL3RzL3ZpZXcvY29pbnMvbm90aWZpY2F0aW9ucy1iYXIudHN4IiwiL3RzL3ZpZXcvY29tcG9uZW50cy9hbmltYXRlZC1sYWJlbC50c3giLCIvdHMvdmlldy9jb21wb25lbnRzL2FuaW1hdGVkLnRzeCIsIi90cy92aWV3L2NvbXBvbmVudHMvaGVhZGVyLnRzeCIsIi90cy92aWV3L2NvbXBvbmVudHMvb3ZlcmxheS1oZWFkZXIudHN4IiwiL3RzL3ZpZXcvY29udGV4dC50cyIsIi90cy92aWV3L2luZGV4LnRzeCIsIi90cy92aWV3L3ByZWxvYWQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsV0FBQSxHQUFBRCxPQUFBO1VBS00sTUFBT0UsTUFBTyxTQUFRSCxNQUFBLENBQUFJLGFBQXFCO1lBQ2hELENBQUFDLEtBQU07WUFDTixJQUFJQSxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsS0FBTTtZQUNuQjtZQUNBLElBQUlDLFVBQVVBLENBQUE7Y0FDYixPQUFPLElBQUksQ0FBQyxDQUFBRCxLQUFNLEVBQUVFLE9BQU8sRUFBRUMsS0FBSyxHQUFHLENBQUM7WUFDdkM7WUFFQSxDQUFBQyxPQUFRO1lBQ1IsSUFBSUEsT0FBT0EsQ0FBQTtjQUNWLE9BQU8sSUFBSSxDQUFDLENBQUFBLE9BQVE7WUFDckI7WUFFQSxJQUFJQyxVQUFVQSxDQUFBO2NBQ2IsT0FBT1IsV0FBQSxDQUFBUyxlQUFlLENBQUNELFVBQVU7WUFDbEM7WUFFQSxDQUFBRSxXQUFZO1lBQ1osSUFBSUEsV0FBV0EsQ0FBQTtjQUNkLE9BQU8sSUFBSSxDQUFDLENBQUFBLFdBQVk7WUFDekI7WUFFQSxDQUFBQyxPQUFRO1lBQ1IsSUFBSUEsT0FBT0EsQ0FBQTtjQUNWLE9BQU8sSUFBSSxDQUFDLENBQUFBLE9BQVE7WUFDckI7WUFDQSxJQUFJQSxPQUFPQSxDQUFDQyxLQUFLO2NBQ2hCLElBQUksSUFBSSxDQUFDLENBQUFELE9BQVEsS0FBS0MsS0FBSyxFQUFFO2NBQzdCLElBQUksQ0FBQyxDQUFBRCxPQUFRLEdBQUdDLEtBQUs7Y0FFckIsSUFBSSxDQUFDQyxPQUFPLENBQUMsUUFB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