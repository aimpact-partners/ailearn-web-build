System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.2.0/model", "@beyond-js/react-18-widgets@1.1.2/base", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/chat-sdk@1.0.1/core", "@aimpact/chat@1.0.2/wrapper", "@beyond-js/kernel@0.1.9/texts", "react@18.2.0", "pragmate-ui@1.0.0-beta.1/modal", "@aimpact/ailearn-app@0.1.0-dev.06/components/ui", "pragmate-ui@1.0.0-beta.1/components", "pragmate-ui@1.0.0-beta.1/chips", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.1/icons", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.1.0-dev.06/components/navbar-header.code", "pragmate-ui@1.0.0-beta.1/toast", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, bimport, __Bundle, __pkg, ims, LayoutBroker, Controller, MainLayoutPageController, Header, OverlayHeader, __beyond_pkg, hmr;
  _export({
    LayoutBroker: void 0,
    Controller: void 0,
    MainLayoutPageController: void 0,
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
    }, function (_beyondJsReact18Widgets112Page) {
      dependency_4 = _beyondJsReact18Widgets112Page;
    }, function (_aimpactChatSdk101Core) {
      dependency_5 = _aimpactChatSdk101Core;
    }, function (_aimpactChat102Wrapper) {
      dependency_6 = _aimpactChat102Wrapper;
    }, function (_beyondJsKernel019Texts) {
      dependency_7 = _beyondJsKernel019Texts;
    }, function (_react2) {
      dependency_8 = _react2;
    }, function (_pragmateUi100Beta1Modal) {
      dependency_9 = _pragmateUi100Beta1Modal;
    }, function (_aimpactAilearnApp010Dev06ComponentsUi) {
      dependency_10 = _aimpactAilearnApp010Dev06ComponentsUi;
    }, function (_pragmateUi100Beta1Components) {
      dependency_11 = _pragmateUi100Beta1Components;
    }, function (_pragmateUi100Beta1Chips) {
      dependency_12 = _pragmateUi100Beta1Chips;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_13 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi100Beta1Icons) {
      dependency_14 = _pragmateUi100Beta1Icons;
    }, function (_framerMotion2) {
      dependency_15 = _framerMotion2;
    }, function (_aimpactAilearnApp010Dev06ComponentsNavbarHeaderCode) {
      dependency_16 = _aimpactAilearnApp010Dev06ComponentsNavbarHeaderCode;
    }, function (_pragmateUi100Beta1Toast) {
      dependency_17 = _pragmateUi100Beta1Toast;
    }, function (_beyondJsKernel019Styles) {
      dependency_18 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.2"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.1"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.1.0-dev.06"], ["@aimpact/ailearn-app", "0.1.0-dev.06"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.0-dev.06/main-layout",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/reactive/model', dependency_2], ['@beyond-js/react-18-widgets/base', dependency_3], ['@beyond-js/react-18-widgets/page', dependency_4], ['@aimpact/chat-sdk/core', dependency_5], ['@aimpact/chat/wrapper', dependency_6], ['@beyond-js/kernel/texts', dependency_7], ['react', dependency_8], ['pragmate-ui/modal', dependency_9], ['@aimpact/ailearn-app/components/ui', dependency_10], ['pragmate-ui/components', dependency_11], ['pragmate-ui/chips', dependency_12], ['@beyond-js/react-18-widgets/hooks', dependency_13], ['pragmate-ui/icons', dependency_14], ['framer-motion', dependency_15], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_16], ['pragmate-ui/toast', dependency_17], ['@beyond-js/kernel/styles', dependency_18]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "main-layout",
        "vspecifier": "@aimpact/ailearn-app@0.1.0-dev.06/main-layout.widget",
        "is": "layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.0-dev.06/main-layout.widget');
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

      /*********************************
      INTERNAL MODULE: ./page-controller
      *********************************/

      ims.set('./page-controller', {
        hash: 759318765,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MainLayoutPageController = void 0;
          var _page = require("@beyond-js/react-18-widgets/page");
          /*bundle*/
          class MainLayoutPageController extends _page.PageReactWidgetController {
            #store;
            get store() {
              return this.#store;
            }
            show() {
              this.#store?.init();
            }
            hide() {
              this.#store?.clear();
            }
          }
          exports.MainLayoutPageController = MainLayoutPageController;
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
        "im": "./page-controller",
        "from": "MainLayoutPageController",
        "name": "MainLayoutPageController"
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
        (require || prop === 'MainLayoutPageController') && _export("MainLayoutPageController", MainLayoutPageController = require ? require('./page-controller').MainLayoutPageController : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiQnJva2VyIiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwiaGFzQ3JlZGl0cyIsImNyZWRpdHMiLCJ0b3RhbCIsIm1lc3NhZ2UiLCJicmVhZGNydW1iIiwidmFsdWUiLCJBcnJheSIsImlzQXJyYXkiLCJFcnJvciIsInRyaWdnZXIiLCJzaG93Q3JlZGl0cyIsIm92ZXJsYXkiLCJjYW5Db25zdW1lQ3JlZGl0cyIsImJhY2tMaW5rIiwiY29uc3RydWN0b3IiLCJlbnN1cmVDcmVkaXRzIiwiYmluZCIsImFkZE1vZGVsIiwiaWQiLCJ1bmRlZmluZWQiLCJvbiIsIm9uTGlzdGVuIiwiYXNzaWdubWVudElkIiwiY2xlYXJNb2RlbCIsInNhdmVkIiwidHJpZ2dlckV2ZW50IiwiY2FsbGJhY2siLCJzcGVjcyIsImNvbnNvbGUiLCJlcnJvciIsImFkZEJyZWFkY3J1bWIiLCJpdGVtcyIsImFkZE11bHRpcGxlQnJlYWRjcnVtYiIsInRyaW1CcmVhZGNydW1iIiwiY291bnQiLCJsZW5ndGgiLCJzaG93TWVzc2FnZSIsInR5cGUiLCJnbG9iYWxUaGlzIiwic2V0VGltZW91dCIsImNsZWFyIiwiZXhwb3J0cyIsIkxheW91dEJyb2tlciIsIl9iYXNlIiwiX3N0b3JlIiwiX3ZpZXciLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsIkxheW91dCIsIl9wYWdlIiwiTWFpbkxheW91dFBhZ2VDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInNob3ciLCJpbml0IiwiaGlkZSIsIl93cmFwcGVyIiwiX2Jyb2tlciIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsImJyb2tlciIsInRleHRzIiwiQ3VycmVudFRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwicmVhZHkiLCJBcHBXcmFwcGVyIiwiaXNSZWFkeSIsImxpc3RlbiIsImNsb3NlIiwib2ZmIiwiX3JlYWN0IiwiX21vZGFsIiwiQ29pbnNBbGVydCIsIm9uQ2xvc2UiLCJjb2lucyIsImFsZXJ0IiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJBbGVydE1vZGFsIiwiYnV0dG9uTGFiZWwiLCJhY3Rpb24iLCJvbkNvbmZpcm0iLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiX3VpIiwiQ29pbnNNb2RhbCIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJ1c2VTdGF0ZSIsInNldEVycm9yIiwibW9kYWwiLCJhbnN3ZXIiLCJjb25zdW1lQ29pbnMiLCJzdGF0dXMiLCJlcnJvcnMiLCJjb2RlIiwiZSIsIm5vQ3JlZGl0cyIsIkNvbmZpcm1Nb2RhbCIsImNsYXNzTmFtZSIsImNlbnRlcmVkIiwiYWN0aW9ucyIsImNvbmZpcm0iLCJsYWJlbCIsInZhcmlhbnQiLCJjYW5jZWwiLCJib3JkZXJlZCIsIm9uQ2FuY2VsIiwiRXJyb3JSZW5kZXJlciIsIkJhdHRlcnkiLCJwZXJjZW50IiwiX2NvbXBvbmVudHMiLCJfY2hpcHMiLCJfaG9va3MiLCJfYW5pbWF0ZWRMYWJlbCIsIl9jb250ZXh0IiwiQ3JlZGl0c0NvbnRhaW5lciIsInRvZ2dsZUNvaW5zTW9kYWwiLCJ1c2VMYXlvdXRDb250ZXh0Iiwic2V0TWVzc2FnZSIsInNldEhhc0NyZWRpdHMiLCJyZWYiLCJ1c2VSZWYiLCJjbHMiLCJvbkNyZWRpdHNDaGFuZ2UiLCJjdXJyZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwibWVzc2FnZXMiLCJ1c2VCaW5kZXIiLCJoZWFkZXIiLCJDb250cm9sIiwiQ2hpcCIsIkJ1dHRvbiIsImF0dHJzIiwib25DbGljayIsImRpc2FibGVkIiwiYXZhaWxhYmxlIiwiQW5pbWF0ZWRMYWJlbCIsIl9pY29ucyIsIl9mcmFtZXJNb3Rpb24iLCJfYW5pbWF0ZWQiLCJOb3RpZmljYXRpb25zQmFyIiwic2V0U2hvdyIsIkFuaW1hdGVQcmVzZW5jZSIsIkFuaW1hdGVkIiwiYXMiLCJIdG1sV3JhcHBlciIsIkljb24iLCJpY29uIiwiY2hpbGRyZW4iLCJ1c2VFZmZlY3QiLCJtb3Rpb24iLCJzcGFuIiwibGF5b3V0IiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJ3aWR0aCIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJleGl0IiwiQ29tcG9uZW50IiwiX25hdmJhckhlYWRlciIsIl9jcmVkaXRzIiwiSGVhZGVyIiwic2hvd0JhciIsImhhc01vZGVsIiwic2V0SGFzTW9kZWwiLCJ1cGRhdGVkIiwic2V0VXBkYXRlZCIsImhtciIsInBlcmZvcm1hbmNlIiwibm93Iiwic2V0QnJlYWRjcnVtYiIsIk5hdmJhckhlYWRlciIsIk92ZXJsYXlIZWFkZXIiLCJjbG9zYWJsZSIsImJhY2tsaW5rIiwiTGF5b3V0Q29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX3RvYXN0IiwiX2hlYWRlciIsIl9hbGVydCIsIl9jb2luc01vZGFsIiwiX25vdGlmaWNhdGlvbnNCYXIiLCJfb3ZlcmxheUhlYWRlciIsInNldFJlYWR5Iiwic2hvd0NvaW5zTW9kYWwiLCJzZXRTaG93Q29pbnNNb2RhbCIsInNob3dDb2luc0FsZXJ0Iiwic2V0U2hvd0NvaW5zQWxlcnQiLCJzZXRVcGRhdGUiLCJ0b2dnbGVDb2luc0FsZXJ0IiwiSGVhZGVyQ29udHJvbCIsIkZyYWdtZW50IiwiUHJvdmlkZXIiLCJUb2FzdHMiLCJQcmVsb2FkIiwiUmVhY3QiXSwic291cmNlcyI6WyIvdHMvYnJva2VyLnRzIiwiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvcGFnZS1jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXcvY29pbnMvYWxlcnQudHN4IiwiL3RzL3ZpZXcvY29pbnMvY29pbnMtbW9kYWwudHN4IiwiL3RzL3ZpZXcvY29pbnMvY3JlZGl0cy50c3giLCIvdHMvdmlldy9jb2lucy9ub3RpZmljYXRpb25zLWJhci50c3giLCIvdHMvdmlldy9jb21wb25lbnRzL2FuaW1hdGVkLWxhYmVsLnRzeCIsIi90cy92aWV3L2NvbXBvbmVudHMvYW5pbWF0ZWQudHN4IiwiL3RzL3ZpZXcvY29tcG9uZW50cy9oZWFkZXIudHN4IiwiL3RzL3ZpZXcvY29tcG9uZW50cy9vdmVybGF5LWhlYWRlci50c3giLCIvdHMvdmlldy9jb250ZXh0LnRzIiwiL3RzL3ZpZXcvaW5kZXgudHN4IiwiL3RzL3ZpZXcvcHJlbG9hZC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFNTSxNQUFPQyxNQUFPLFNBQVFGLE1BQUEsQ0FBQUcsYUFBcUI7WUFDaEQsQ0FBQUMsS0FBTTtZQUNOLElBQUlBLEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNO1lBQ25CO1lBQ0EsSUFBSUMsVUFBVUEsQ0FBQTtjQUNiLE9BQU8sSUFBSSxDQUFDLENBQUFELEtBQU0sRUFBRUUsT0FBTyxFQUFFQyxLQUFLLEdBQUcsQ0FBQztZQUN2QztZQUVBLENBQUFDLE9BQVE7WUFDUixJQUFJQSxPQUFPQSxDQUFBO2NBQ1YsT0FBTyxJQUFJLENBQUMsQ0FBQUEsT0FBUTtZQUNyQjtZQUVBLENBQUFDLFVBQVcsR0FBRyxFQUFFO1lBQ2hCLElBQUlBLFVBQVVBLENBQUE7Y0FDYixPQUFPLElBQUksQ0FBQyxDQUFBQSxVQUFXO1lBQ3hCO1lBRUEsSUFBSUEsVUFBVUEsQ0FBQ0MsS0FBSztjQUNuQixJQUFJLENBQUNDLEtBQUssQ0FBQ0MsT0FBTyxDQUFDRixLQUFLLENBQUMsRUFBRSxNQUFNLElBQUlHLEtBQUssQ0FBQyx3Q0FBd0MsQ0FBQztjQUNwRixJQUFJLENBQUMsQ0FBQUosVUFBVyxHQUFHQyxLQUFL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RTtZQUMvRSxNQUFNNEwsYUFBYSxHQUFHLENBQUN2SixLQUFLLENBQUNlLE1BQU0sQ0FBQ3BELE9BQU8sR0FBR2dMLE9BQUEsQ0FBQWxCLE1BQU0sR0FBR3NCLGNBQUEsQ0FBQVgsYUFBYTtZQUVwRSxPQUNDMUcsTUFBQSxDQUFBTSxPQUFBLENBQUFDLGFBQUEsQ0FBQVAsTUFBQSxDQUFBTSxPQUFBLENBQUF3SCxRQUFBLFFBQ0M5SCxNQUFBLENBQUFNLE9BQUEsQ0FBQUMsYUFBQSxDQUFDc0MsUUFBQSxDQUFBZ0UsYUFBYSxDQUFDa0IsUUFBUTtjQUFDcE0sS0FBSyxFQUFFQTtZQUFLLEdBQ25DcUUsTUFBQSxDQUFBTSxPQUFBLENBQUFDLGFBQUE7Y0FBS3NCLFNBQVMsRUFBQztZQUF3QixHQUN0QzdCLE1BQUEsQ0FBQU0sT0FBQSxDQUFBQyxhQUFBLENBQUNzSCxhQUFhLE9BQUcsRUFDakI3SCxNQUFBLENBQUFNLE9BQUEsQ0FBQUMsYUFBQSxDQUFDNkcsaUJBQUEsQ0FBQTVDLGdCQUFnQixPQUFHLEVBQ3BCeEUsTUFBQSxDQUFBTSxPQUFBLENBQUFDLGFBQUEsZUFDQ1AsTUFBQSxDQUFBTSxPQUFBLENBQUFDLGFBQUEsZ0NBQTBCLEVBQzFCUCxNQUFBLENBQUFNLE9BQUEsQ0FBQUMsYUFBQSxDQUFDeUcsTUFBQSxDQUFBZ0IsTUFBTSxPQUFHLENBQ0osQ0FDRixDQUNrQixFQUN4QnRJLEtBQUssSUFDTE0sTUFBQSxDQUFBTSxPQUFBLENBQUFDLGFBQUEsQ0FBQVAsTUFBQSxDQUFBTSxPQUFBLENBQUF3SCxRQUFBLFFBQ0M5SCxNQUFBLENBQUFNLE9BQUEsQ0FBQUMsYUFBQSxDQUFDMkcsTUFBQSxDQUFBaEgsVUFBVTtjQUFDWixLQUFLLEVBQUVBLEtBQUs7Y0FBRVIsSUFBSSxFQUFFMkksY0FBYztjQUFFdEgsT0FBTyxFQUFFeUg7WUFBZ0IsRUFBSSxFQUM3RTVILE1BQUEsQ0FBQU0sT0FBQSxDQUFBQyxhQUFBLENBQUM0RyxXQUFBLENBQUFwRyxVQUFVO2NBQUN6QyxLQUFLLEVBQUVBLEtBQUs7Y0FBRWdCLEtBQUssRUFBRUEsS0FBSztjQUFFUixJQUFJLEVBQUV5SSxjQUFjO2NBQUVwSCxPQUFPLEVBQUU0QztZQUFnQixFQUFJLENBRTVGLENBQ0M7VUFFTCxDQUFDO1VBQUNoRixPQUFBLENBQUFXLE1BQUEsR0FBQUEsTUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMxREksU0FBVXVKLE9BQU9BLENBQUE7WUFDdEIsT0FBT0MsS0FBQSxDQUFBM0gsYUFBQSxDQUFBMkgsS0FBQSxDQUFBSixRQUFBLE9BQUs7VUFDYiIsImlnbm9yZUxpc3QiOltdfQ==