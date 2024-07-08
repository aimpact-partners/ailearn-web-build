System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.1.12/model", "@beyond-js/react-18-widgets@1.1.2/base", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/chat-sdk@1.0.1/core", "@aimpact/chat@1.0.2/wrapper", "@beyond-js/kernel@0.1.9/texts", "react@18.2.0", "pragmate-ui@0.1.1/modal", "@aimpact/ailearn-app@0.0.52/components/ui", "pragmate-ui@0.1.1/components", "pragmate-ui@0.1.1/chips", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@0.1.1/icons", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.0.52/components/navbar-header.code", "pragmate-ui@0.1.1/toast", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context2) {
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
    }, function (_aimpactChatSdk101Core) {
      dependency_5 = _aimpactChatSdk101Core;
    }, function (_aimpactChat102Wrapper) {
      dependency_6 = _aimpactChat102Wrapper;
    }, function (_beyondJsKernel019Texts) {
      dependency_7 = _beyondJsKernel019Texts;
    }, function (_react2) {
      dependency_8 = _react2;
    }, function (_pragmateUi011Modal) {
      dependency_9 = _pragmateUi011Modal;
    }, function (_aimpactAilearnApp0052ComponentsUi) {
      dependency_10 = _aimpactAilearnApp0052ComponentsUi;
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
    }, function (_aimpactAilearnApp0052ComponentsNavbarHeaderCode) {
      dependency_16 = _aimpactAilearnApp0052ComponentsNavbarHeaderCode;
    }, function (_pragmateUi011Toast) {
      dependency_17 = _pragmateUi011Toast;
    }, function (_beyondJsKernel019Styles) {
      dependency_18 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.2"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.0.52"], ["@aimpact/ailearn-app", "0.0.52"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.52/main-layout",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/reactive/model', dependency_2], ['@beyond-js/react-18-widgets/base', dependency_3], ['@beyond-js/react-18-widgets/page', dependency_4], ['@aimpact/chat-sdk/core', dependency_5], ['@aimpact/chat/wrapper', dependency_6], ['@beyond-js/kernel/texts', dependency_7], ['react', dependency_8], ['pragmate-ui/modal', dependency_9], ['@aimpact/ailearn-app/components/ui', dependency_10], ['pragmate-ui/components', dependency_11], ['pragmate-ui/chips', dependency_12], ['@beyond-js/react-18-widgets/hooks', dependency_13], ['pragmate-ui/icons', dependency_14], ['framer-motion', dependency_15], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_16], ['pragmate-ui/toast', dependency_17], ['@beyond-js/kernel/styles', dependency_18]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "main-layout",
        "vspecifier": "@aimpact/ailearn-app@0.0.52/main-layout.widget",
        "is": "layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.52/main-layout.widget');
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