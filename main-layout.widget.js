System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.2.0/model", "@beyond-js/react-18-widgets@1.1.2/base", "@aimpact/chat-sdk@1.0.1/core", "@aimpact/chat@1.0.2/wrapper", "@beyond-js/kernel@0.1.9/texts", "react@18.2.0", "pragmate-ui@1.0.0-beta.1/modal", "@aimpact/ailearn-app@0.1.0-test.11/components/ui", "pragmate-ui@1.0.0-beta.1/components", "pragmate-ui@1.0.0-beta.1/chips", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.1/icons", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.1.0-test.11/components/navbar-header.code", "pragmate-ui@1.0.0-beta.1/toast", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, bimport, __Bundle, __pkg, ims, LayoutBroker, Controller, Header, OverlayHeader, __beyond_pkg, hmr;
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
    }, function (_beyondJsReact18Widgets112Base) {
      dependency_3 = _beyondJsReact18Widgets112Base;
    }, function (_aimpactChatSdk101Core) {
      dependency_4 = _aimpactChatSdk101Core;
    }, function (_aimpactChat102Wrapper) {
      dependency_5 = _aimpactChat102Wrapper;
    }, function (_beyondJsKernel019Texts) {
      dependency_6 = _beyondJsKernel019Texts;
    }, function (_react2) {
      dependency_7 = _react2;
    }, function (_pragmateUi100Beta1Modal) {
      dependency_8 = _pragmateUi100Beta1Modal;
    }, function (_aimpactAilearnApp010Test11ComponentsUi) {
      dependency_9 = _aimpactAilearnApp010Test11ComponentsUi;
    }, function (_pragmateUi100Beta1Components) {
      dependency_10 = _pragmateUi100Beta1Components;
    }, function (_pragmateUi100Beta1Chips) {
      dependency_11 = _pragmateUi100Beta1Chips;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_12 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi100Beta1Icons) {
      dependency_13 = _pragmateUi100Beta1Icons;
    }, function (_framerMotion2) {
      dependency_14 = _framerMotion2;
    }, function (_aimpactAilearnApp010Test11ComponentsNavbarHeaderCode) {
      dependency_15 = _aimpactAilearnApp010Test11ComponentsNavbarHeaderCode;
    }, function (_pragmateUi100Beta1Toast) {
      dependency_16 = _pragmateUi100Beta1Toast;
    }, function (_beyondJsKernel019Styles) {
      dependency_17 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.2"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.1"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.1.0-test.11"], ["@aimpact/ailearn-app", "0.1.0-test.11"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.0-test.11/main-layout",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/reactive/model', dependency_2], ['@beyond-js/react-18-widgets/base', dependency_3], ['@aimpact/chat-sdk/core', dependency_4], ['@aimpact/chat/wrapper', dependency_5], ['@beyond-js/kernel/texts', dependency_6], ['react', dependency_7], ['pragmate-ui/modal', dependency_8], ['@aimpact/ailearn-app/components/ui', dependency_9], ['pragmate-ui/components', dependency_10], ['pragmate-ui/chips', dependency_11], ['@beyond-js/react-18-widgets/hooks', dependency_12], ['pragmate-ui/icons', dependency_13], ['framer-motion', dependency_14], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_15], ['pragmate-ui/toast', dependency_16], ['@beyond-js/kernel/styles', dependency_17]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "main-layout",
        "vspecifier": "@aimpact/ailearn-app@0.1.0-test.11/main-layout.widget",
        "is": "layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.0-test.11/main-layout.widget');
      ims = new Map();
      /************************
      INTERNAL MODULE: ./broker
      ************************/
      ims.set('./broker', {
        hash: 1503138189,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LayoutBroker = exports.Broker = void 0;
          var _model = require("@beyond-js/reactive/model");
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
            #breadcrumb = [];
            get breadcrumb() {
              return this.#breadcrumb;
            }
            set breadcrumb(value) {
              if (!Array.isArray(value)) throw new Error('Breadcrumb must be an array of objects');
              this.#breadcrumb = value;
              this.trigger('change');
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
            addBreadcrumb(items) {
              this.#breadcrumb = [...this.#breadcrumb, items];
              this.trigger('change');
            }
            addMultipleBreadcrumb(items) {
              this.#breadcrumb = [...this.#breadcrumb, ...items];
              this.trigger('change');
            }
            trimBreadcrumb(count) {
              if (count <= this.breadcrumb.length) {
                this.breadcrumb.length -= count;
                this.triggerEvent('change');
              }
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
              this.#breadcrumb = [];
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
        hash: 2423712070,
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
            const onCreditsChange = type => {
              ref.current.classList.add('success--container');
              setMessage(texts?.messages[type]);
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
            const label = store.broker.hasCredits ? texts.actions.available : texts.actions.require;
            if (!store.broker.hasCredits) {
              attrs.onClick = toggleCoinsModal;
            } else {
              attrs.className = 'success--chip';
            }
            return _react.default.createElement("div", {
              className: cls,
              ref: ref
            }, _react.default.createElement(_animatedLabel.AnimatedLabel, null, message), store.broker.hasCredits && _react.default.createElement(_ui.Battery, {
              percent: 100
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
        hash: 2400594431,
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
              store,
              texts
            } = (0, _context.useLayoutContext)();
            const showBar = store.saved && !store.hasCredits;
            const [hasModel, setHasModel] = _react.default.useState(!!store.broker.model);
            const [updated, setUpdated] = _react.default.useState();
            (0, _hooks.useBinder)([_navbarHeader.hmr], () => setUpdated(performance.now()));
            const [breadcrumb, setBreadcrumb] = _react.default.useState([]);
            (0, _hooks.useBinder)([store.broker], () => {
              setHasModel(!!store.broker.model);
              setBreadcrumb(store.broker.breadcrumb);
            });
            return _react.default.createElement(_navbarHeader.NavbarHeader, {
              updated: updated,
              breadcrumb: [, ...breadcrumb]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiQnJva2VyIiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwiaGFzQ3JlZGl0cyIsImNyZWRpdHMiLCJ0b3RhbCIsIm1lc3NhZ2UiLCJicmVhZGNydW1iIiwidmFsdWUiLCJBcnJheSIsImlzQXJyYXkiLCJFcnJvciIsInRyaWdnZXIiLCJzaG93Q3JlZGl0cyIsIm92ZXJsYXkiLCJjYW5Db25zdW1lQ3JlZGl0cyIsImJhY2tMaW5rIiwiY29uc3RydWN0b3IiLCJlbnN1cmVDcmVkaXRzIiwiYmluZCIsImFkZE1vZGVsIiwiaWQiLCJ1bmRlZmluZWQiLCJvbiIsIm9uTGlzdGVuIiwiYXNzaWdubWVudElkIiwiY2xlYXJNb2RlbCIsInNhdmVkIiwidHJpZ2dlckV2ZW50IiwiY2FsbGJhY2siLCJzcGVjcyIsImNvbnNvbGUiLCJlcnJvciIsImFkZEJyZWFkY3J1bWIiLCJpdGVtcyIsImFkZE11bHRpcGxlQnJlYWRjcnVtYiIsInRyaW1CcmVhZGNydW1iIiwiY291bnQiLCJsZW5ndGgiLCJzaG93TWVzc2FnZSIsInR5cGUiLCJnbG9iYWxUaGlzIiwic2V0VGltZW91dCIsImNsZWFyIiwiZXhwb3J0cyIsIkxheW91dEJyb2tlciIsIl9iYXNlIiwiX3N0b3JlIiwiX3ZpZXciLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsIkxheW91dCIsIl93cmFwcGVyIiwiX2Jyb2tlciIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsImJyb2tlciIsInRleHRzIiwiQ3VycmVudFRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwicmVhZHkiLCJpbml0IiwiQXBwV3JhcHBlciIsImlzUmVhZHkiLCJsaXN0ZW4iLCJjbG9zZSIsIm9mZiIsIl9yZWFjdCIsIl9tb2RhbCIsIkNvaW5zQWxlcnQiLCJzaG93Iiwib25DbG9zZSIsImNvaW5zIiwiYWxlcnQiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIkFsZXJ0TW9kYWwiLCJidXR0b25MYWJlbCIsImFjdGlvbiIsIm9uQ29uZmlybSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJfdWkiLCJDb2luc01vZGFsIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsInVzZVN0YXRlIiwic2V0RXJyb3IiLCJtb2RhbCIsImFuc3dlciIsImNvbnN1bWVDb2lucyIsInN0YXR1cyIsImVycm9ycyIsImNvZGUiLCJlIiwibm9DcmVkaXRzIiwiQ29uZmlybU1vZGFsIiwiY2xhc3NOYW1lIiwiY2VudGVyZWQiLCJhY3Rpb25zIiwiY29uZmlybSIsImxhYmVsIiwidmFyaWFudCIsImNhbmNlbCIsImJvcmRlcmVkIiwib25DYW5jZWwiLCJFcnJvclJlbmRlcmVyIiwiQmF0dGVyeSIsInBlcmNlbnQiLCJfY29tcG9uZW50cyIsIl9jaGlwcyIsIl9ob29rcyIsIl9hbmltYXRlZExhYmVsIiwiX2NvbnRleHQiLCJDcmVkaXRzQ29udGFpbmVyIiwidG9nZ2xlQ29pbnNNb2RhbCIsInVzZUxheW91dENvbnRleHQiLCJzZXRNZXNzYWdlIiwic2V0SGFzQ3JlZGl0cyIsInJlZiIsInVzZVJlZiIsImNscyIsIm9uQ3JlZGl0c0NoYW5nZSIsImN1cnJlbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJtZXNzYWdlcyIsInVzZUJpbmRlciIsImhlYWRlciIsIkNvbnRyb2wiLCJDaGlwIiwiQnV0dG9uIiwiYXR0cnMiLCJvbkNsaWNrIiwiZGlzYWJsZWQiLCJhdmFpbGFibGUiLCJBbmltYXRlZExhYmVsIiwiX2ljb25zIiwiX2ZyYW1lck1vdGlvbiIsIl9hbmltYXRlZCIsIk5vdGlmaWNhdGlvbnNCYXIiLCJzZXRTaG93IiwiQW5pbWF0ZVByZXNlbmNlIiwiQW5pbWF0ZWQiLCJhcyIsIkh0bWxXcmFwcGVyIiwiSWNvbiIsImljb24iLCJjaGlsZHJlbiIsInVzZUVmZmVjdCIsIm1vdGlvbiIsInNwYW4iLCJsYXlvdXQiLCJpbml0aWFsIiwib3BhY2l0eSIsIndpZHRoIiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImV4aXQiLCJDb21wb25lbnQiLCJfbmF2YmFySGVhZGVyIiwiX2NyZWRpdHMiLCJIZWFkZXIiLCJzaG93QmFyIiwiaGFzTW9kZWwiLCJzZXRIYXNNb2RlbCIsInVwZGF0ZWQiLCJzZXRVcGRhdGVkIiwiaG1yIiwicGVyZm9ybWFuY2UiLCJub3ciLCJzZXRCcmVhZGNydW1iIiwiTmF2YmFySGVhZGVyIiwiT3ZlcmxheUhlYWRlciIsImNsb3NhYmxlIiwiYmFja2xpbmsiLCJMYXlvdXRDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfdG9hc3QiLCJfaGVhZGVyIiwiX2FsZXJ0IiwiX2NvaW5zTW9kYWwiLCJfbm90aWZpY2F0aW9uc0JhciIsIl9vdmVybGF5SGVhZGVyIiwic2V0UmVhZHkiLCJzaG93Q29pbnNNb2RhbCIsInNldFNob3dDb2luc01vZGFsIiwic2hvd0NvaW5zQWxlcnQiLCJzZXRTaG93Q29pbnNBbGVydCIsInNldFVwZGF0ZSIsInRvZ2dsZUNvaW5zQWxlcnQiLCJIZWFkZXJDb250cm9sIiwiRnJhZ21lbnQiLCJQcm92aWRlciIsIlRvYXN0cyIsIlByZWxvYWQiLCJSZWFjdCJdLCJzb3VyY2VzIjpbIi90cy9icm9rZXIudHMiLCIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3L2NvaW5zL2FsZXJ0LnRzeCIsIi90cy92aWV3L2NvaW5zL2NvaW5zLW1vZGFsLnRzeCIsIi90cy92aWV3L2NvaW5zL2NyZWRpdHMudHN4IiwiL3RzL3ZpZXcvY29pbnMvbm90aWZpY2F0aW9ucy1iYXIudHN4IiwiL3RzL3ZpZXcvY29tcG9uZW50cy9hbmltYXRlZC1sYWJlbC50c3giLCIvdHMvdmlldy9jb21wb25lbnRzL2FuaW1hdGVkLnRzeCIsIi90cy92aWV3L2NvbXBvbmVudHMvaGVhZGVyLnRzeCIsIi90cy92aWV3L2NvbXBvbmVudHMvb3ZlcmxheS1oZWFkZXIudHN4IiwiL3RzL3ZpZXcvY29udGV4dC50cyIsIi90cy92aWV3L2luZGV4LnRzeCIsIi90cy92aWV3L3ByZWxvYWQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQU1NLE1BQU9DLE1BQU8sU0FBUUYsTUFBQSxDQUFBRyxhQUFxQjtZQUNoRCxDQUFBQyxLQUFNO1lBQ04sSUFBSUEsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU07WUFDbkI7WUFDQSxJQUFJQyxVQUFVQSxDQUFBO2NBQ2IsT0FBTyxJQUFJLENBQUMsQ0FBQUQsS0FBTSxFQUFFRSxPQUFPLEVBQUVDLEtBQUssR0FBRyxDQUFDO1lBQ3ZDO1lBRUEsQ0FBQUMsT0FBUTtZQUNSLElBQUlBLE9BQU9BLENBQUE7Y0FDVixPQUFPLElBQUksQ0FBQyxDQUFBQSxPQUFRO1lBQ3JCO1lBRUEsQ0FBQUMsVUFBVyxHQUFHLEVBQUU7WUFDaEIsSUFBSUEsVUFBVUEsQ0FBQTtjQUNiLE9BQU8sSUFBSSxDQUFDLENBQUFBLFVBQVc7WUFDeEI7WUFFQSxJQUFJQSxVQUFVQSxDQUFDQyxLQUFLO2NBQ25CLElBQUksQ0FBQ0MsS0FBSyxDQUFDQyxPQUFPLENBQUNGLEtBQUssQ0FBQyxFQUFFLE1BQU0sSUFBSUcsS0FBSyxDQUFDLHdDQUF3QyxDQUFDO2NBQ3BGLElBQUksQ0FBQyxDQUFBSixVQUFXLEdBQUdDLEtBQUs7Y0FFeEIsSUFBSSxDQUFDSSxPQUFPLENBQUMsUUFBUSxDQUFDO1lBQ3ZCO1lBRUEsQ0FBQUMsV0FBWTtZQUNaLElBQUlBLFdBQVdBLENBQUE7Y0FDZCxPQUFPLElBQUksQ0FBQyxD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