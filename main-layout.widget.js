System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.1.12/model", "@beyond-js/react-18-widgets@1.1.2/base", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/chat-sdk@1.0.0/core", "@aimpact/chat@1.0.1/wrapper", "@beyond-js/kernel@0.1.9/texts", "react@18.2.0", "pragmate-ui@0.1.1/modal", "@aimpact/ailearn-app@0.0.46.dev-20/components/ui", "pragmate-ui@0.1.1/components", "pragmate-ui@0.1.1/chips", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@0.1.1/icons", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.0.46.dev-20/components/navbar-header.code", "pragmate-ui@0.1.1/toast", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context2) {
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
    }, function (_beyondJsReactive1112Model) {
      dependency_2 = _beyondJsReactive1112Model;
    }, function (_beyondJsReact18Widgets112Base) {
      dependency_3 = _beyondJsReact18Widgets112Base;
    }, function (_beyondJsReact18Widgets112Page) {
      dependency_4 = _beyondJsReact18Widgets112Page;
    }, function (_aimpactChatSdk100Core) {
      dependency_5 = _aimpactChatSdk100Core;
    }, function (_aimpactChat101Wrapper) {
      dependency_6 = _aimpactChat101Wrapper;
    }, function (_beyondJsKernel019Texts) {
      dependency_7 = _beyondJsKernel019Texts;
    }, function (_react2) {
      dependency_8 = _react2;
    }, function (_pragmateUi011Modal) {
      dependency_9 = _pragmateUi011Modal;
    }, function (_aimpactAilearnApp0046Dev20ComponentsUi) {
      dependency_10 = _aimpactAilearnApp0046Dev20ComponentsUi;
    }, function (_pragmateUi011Components) {
      dependency_11 = _pragmateUi011Components;
    }, function (_pragmateUi011Chips) {
      dependency_12 = _pragmateUi011Chips;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_13 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi011Icons) {
      dependency_14 = _pragmateUi011Icons;
    }, function (_framerMotion2) {
      dependency_15 = _framerMotion2;
    }, function (_aimpactAilearnApp0046Dev20ComponentsNavbarHeaderCode) {
      dependency_16 = _aimpactAilearnApp0046Dev20ComponentsNavbarHeaderCode;
    }, function (_pragmateUi011Toast) {
      dependency_17 = _pragmateUi011Toast;
    }, function (_beyondJsKernel019Styles) {
      dependency_18 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.0.46.dev-20"], ["@aimpact/ailearn-app", "0.0.46.dev-20"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.46.dev-20/main-layout",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/reactive/model', dependency_2], ['@beyond-js/react-18-widgets/base', dependency_3], ['@beyond-js/react-18-widgets/page', dependency_4], ['@aimpact/chat-sdk/core', dependency_5], ['@aimpact/chat/wrapper', dependency_6], ['@beyond-js/kernel/texts', dependency_7], ['react', dependency_8], ['pragmate-ui/modal', dependency_9], ['@aimpact/ailearn-app/components/ui', dependency_10], ['pragmate-ui/components', dependency_11], ['pragmate-ui/chips', dependency_12], ['@beyond-js/react-18-widgets/hooks', dependency_13], ['pragmate-ui/icons', dependency_14], ['framer-motion', dependency_15], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_16], ['pragmate-ui/toast', dependency_17], ['@beyond-js/kernel/styles', dependency_18]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "main-layout",
        "vspecifier": "@aimpact/ailearn-app@0.0.46.dev-20/main-layout.widget",
        "is": "layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.46.dev-20/main-layout.widget');
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
        hash: 63260888,
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
              console.log(3233, this.store);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiQnJva2VyIiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwiaGFzQ3JlZGl0cyIsImNyZWRpdHMiLCJ0b3RhbCIsIm1lc3NhZ2UiLCJicmVhZGNydW1iIiwidmFsdWUiLCJBcnJheSIsImlzQXJyYXkiLCJFcnJvciIsInRyaWdnZXIiLCJzaG93Q3JlZGl0cyIsIm92ZXJsYXkiLCJjYW5Db25zdW1lQ3JlZGl0cyIsImJhY2tMaW5rIiwiY29uc3RydWN0b3IiLCJlbnN1cmVDcmVkaXRzIiwiYmluZCIsImFkZE1vZGVsIiwiaWQiLCJ1bmRlZmluZWQiLCJvbiIsIm9uTGlzdGVuIiwiYXNzaWdubWVudElkIiwiY2xlYXJNb2RlbCIsInNhdmVkIiwidHJpZ2dlckV2ZW50IiwiY2FsbGJhY2siLCJzcGVjcyIsImNvbnNvbGUiLCJlcnJvciIsImFkZEJyZWFkY3J1bWIiLCJpdGVtcyIsImFkZE11bHRpcGxlQnJlYWRjcnVtYiIsInRyaW1CcmVhZGNydW1iIiwiY291bnQiLCJsZW5ndGgiLCJzaG93TWVzc2FnZSIsInR5cGUiLCJnbG9iYWxUaGlzIiwic2V0VGltZW91dCIsImNsZWFyIiwiZXhwb3J0cyIsIkxheW91dEJyb2tlciIsIl9iYXNlIiwiX3N0b3JlIiwiX3ZpZXciLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsIkxheW91dCIsIl9wYWdlIiwiTWFpbkxheW91dFBhZ2VDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInNob3ciLCJsb2ciLCJpbml0IiwiaGlkZSIsIl93cmFwcGVyIiwiX2Jyb2tlciIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsImJyb2tlciIsInRleHRzIiwiQ3VycmVudFRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwicmVhZHkiLCJBcHBXcmFwcGVyIiwiaXNSZWFkeSIsImxpc3RlbiIsImNsb3NlIiwib2ZmIiwiX3JlYWN0IiwiX21vZGFsIiwiQ29pbnNBbGVydCIsIm9uQ2xvc2UiLCJjb2lucyIsImFsZXJ0IiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJBbGVydE1vZGFsIiwiYnV0dG9uTGFiZWwiLCJhY3Rpb24iLCJvbkNvbmZpcm0iLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiX3VpIiwiQ29pbnNNb2RhbCIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJ1c2VTdGF0ZSIsInNldEVycm9yIiwibW9kYWwiLCJhbnN3ZXIiLCJjb25zdW1lQ29pbnMiLCJzdGF0dXMiLCJlcnJvcnMiLCJjb2RlIiwiZSIsIm5vQ3JlZGl0cyIsIkNvbmZpcm1Nb2RhbCIsImNsYXNzTmFtZSIsImNlbnRlcmVkIiwiYWN0aW9ucyIsImNvbmZpcm0iLCJsYWJlbCIsInZhcmlhbnQiLCJjYW5jZWwiLCJib3JkZXJlZCIsIm9uQ2FuY2VsIiwiRXJyb3JSZW5kZXJlciIsIkJhdHRlcnkiLCJwZXJjZW50IiwiX2NvbXBvbmVudHMiLCJfY2hpcHMiLCJfaG9va3MiLCJfYW5pbWF0ZWRMYWJlbCIsIl9jb250ZXh0IiwiQ3JlZGl0c0NvbnRhaW5lciIsInRvZ2dsZUNvaW5zTW9kYWwiLCJ1c2VMYXlvdXRDb250ZXh0Iiwic2V0TWVzc2FnZSIsInNldEhhc0NyZWRpdHMiLCJyZWYiLCJ1c2VSZWYiLCJjbHMiLCJvbkNyZWRpdHNDaGFuZ2UiLCJjdXJyZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwibWVzc2FnZXMiLCJ1c2VCaW5kZXIiLCJoZWFkZXIiLCJDb250cm9sIiwiQ2hpcCIsIkJ1dHRvbiIsImF0dHJzIiwib25DbGljayIsImRpc2FibGVkIiwiYXZhaWxhYmxlIiwiQW5pbWF0ZWRMYWJlbCIsIl9pY29ucyIsIl9mcmFtZXJNb3Rpb24iLCJfYW5pbWF0ZWQiLCJOb3RpZmljYXRpb25zQmFyIiwic2V0U2hvdyIsIkFuaW1hdGVQcmVzZW5jZSIsIkFuaW1hdGVkIiwiYXMiLCJIdG1sV3JhcHBlciIsIkljb24iLCJpY29uIiwiY2hpbGRyZW4iLCJ1c2VFZmZlY3QiLCJtb3Rpb24iLCJzcGFuIiwibGF5b3V0IiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJ3aWR0aCIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJleGl0IiwiQ29tcG9uZW50IiwiX25hdmJhckhlYWRlciIsIl9jcmVkaXRzIiwiSGVhZGVyIiwic2hvd0JhciIsImhhc01vZGVsIiwic2V0SGFzTW9kZWwiLCJ1cGRhdGVkIiwic2V0VXBkYXRlZCIsImhtciIsInBlcmZvcm1hbmNlIiwibm93Iiwic2V0QnJlYWRjcnVtYiIsIk5hdmJhckhlYWRlciIsIk92ZXJsYXlIZWFkZXIiLCJjbG9zYWJsZSIsImJhY2tsaW5rIiwiTGF5b3V0Q29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX3RvYXN0IiwiX2hlYWRlciIsIl9hbGVydCIsIl9jb2luc01vZGFsIiwiX25vdGlmaWNhdGlvbnNCYXIiLCJfb3ZlcmxheUhlYWRlciIsInNldFJlYWR5Iiwic2hvd0NvaW5zTW9kYWwiLCJzZXRTaG93Q29pbnNNb2RhbCIsInNob3dDb2luc0FsZXJ0Iiwic2V0U2hvd0NvaW5zQWxlcnQiLCJzZXRVcGRhdGUiLCJ0b2dnbGVDb2luc0FsZXJ0IiwiSGVhZGVyQ29udHJvbCIsIkZyYWdtZW50IiwiUHJvdmlkZXIiLCJUb2FzdHMiLCJQcmVsb2FkIiwiUmVhY3QiXSwic291cmNlcyI6WyIvdHMvYnJva2VyLnRzIiwiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvcGFnZS1jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXcvY29pbnMvYWxlcnQudHN4IiwiL3RzL3ZpZXcvY29pbnMvY29pbnMtbW9kYWwudHN4IiwiL3RzL3ZpZXcvY29pbnMvY3JlZGl0cy50c3giLCIvdHMvdmlldy9jb2lucy9ub3RpZmljYXRpb25zLWJhci50c3giLCIvdHMvdmlldy9jb21wb25lbnRzL2FuaW1hdGVkLWxhYmVsLnRzeCIsIi90cy92aWV3L2NvbXBvbmVudHMvYW5pbWF0ZWQudHN4IiwiL3RzL3ZpZXcvY29tcG9uZW50cy9oZWFkZXIudHN4IiwiL3RzL3ZpZXcvY29tcG9uZW50cy9vdmVybGF5LWhlYWRlci50c3giLCIvdHMvdmlldy9jb250ZXh0LnRzIiwiL3RzL3ZpZXcvaW5kZXgudHN4IiwiL3RzL3ZpZXcvcHJlbG9hZC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFNTSxNQUFPQyxNQUFPLFNBQVFGLE1BQUEsQ0FBQUcsYUFBcUI7WUFDaEQsQ0FBQUMsS0FBTTtZQUNOLElBQUlBLEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNO1lBQ25CO1lBQ0EsSUFBSUMsVUFBVUEsQ0FBQTtjQUNiLE9BQU8sSUFBSSxDQUFDLENBQUFELEtBQU0sRUFBRUUsT0FBTyxFQUFFQyxLQUFLLEdBQUcsQ0FBQztZQUN2QztZQUVBLENBQUFDLE9BQVE7WUFDUixJQUFJQSxPQUFPQSxDQUFBO2NBQ1YsT0FBTyxJQUFJLENBQUMsQ0FBQUEsT0FBUTtZQUNyQjtZQUVBLENBQUFDLFVBQVcsR0FBRyxFQUFFO1lBQ2hCLElBQUlBLFVBQVVBLENBQUE7Y0FDYixPQUFPLElBQUksQ0FBQyxDQUFBQSxVQUFXO1lBQ3hCO1lBRUEsSUFBSUEsVUFBVUEsQ0FBQ0MsS0FBSztjQUNuQixJQUFJLENBQUNDLEtBQUssQ0FBQ0MsT0FBTyxDQUFDRixLQUFLLENBQUMsRUFBRSxNQUFNLElBQUlHLEtBQUssQ0FBQyx3Q0FBd0MsQ0FBQztjQUNwRixJQUFJLENBQUMsQ0FBQUosVUFBVyxHQUFH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