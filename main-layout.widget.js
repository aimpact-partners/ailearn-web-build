System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.1.12/model", "@beyond-js/react-18-widgets@1.1.2/base", "@aimpact/chat-sdk@1.0.0/core", "@aimpact/chat@1.0.1/wrapper", "@beyond-js/kernel@0.1.9/texts", "react@18.2.0", "pragmate-ui@0.1.1/modal", "@aimpact/ailearn-app@0.0.46.dev-09/components/ui", "pragmate-ui@0.1.1/components", "pragmate-ui@0.1.1/chips", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@0.1.1/icons", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.0.46.dev-09/components/navbar-header.code", "pragmate-ui@0.1.1/toast", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context2) {
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
    }, function (_beyondJsReactive1112Model) {
      dependency_2 = _beyondJsReactive1112Model;
    }, function (_beyondJsReact18Widgets112Base) {
      dependency_3 = _beyondJsReact18Widgets112Base;
    }, function (_aimpactChatSdk100Core) {
      dependency_4 = _aimpactChatSdk100Core;
    }, function (_aimpactChat101Wrapper) {
      dependency_5 = _aimpactChat101Wrapper;
    }, function (_beyondJsKernel019Texts) {
      dependency_6 = _beyondJsKernel019Texts;
    }, function (_react2) {
      dependency_7 = _react2;
    }, function (_pragmateUi011Modal) {
      dependency_8 = _pragmateUi011Modal;
    }, function (_aimpactAilearnApp0046Dev09ComponentsUi) {
      dependency_9 = _aimpactAilearnApp0046Dev09ComponentsUi;
    }, function (_pragmateUi011Components) {
      dependency_10 = _pragmateUi011Components;
    }, function (_pragmateUi011Chips) {
      dependency_11 = _pragmateUi011Chips;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_12 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi011Icons) {
      dependency_13 = _pragmateUi011Icons;
    }, function (_framerMotion2) {
      dependency_14 = _framerMotion2;
    }, function (_aimpactAilearnApp0046Dev09ComponentsNavbarHeaderCode) {
      dependency_15 = _aimpactAilearnApp0046Dev09ComponentsNavbarHeaderCode;
    }, function (_pragmateUi011Toast) {
      dependency_16 = _pragmateUi011Toast;
    }, function (_beyondJsKernel019Styles) {
      dependency_17 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.0.46.dev-09"], ["@aimpact/ailearn-app", "0.0.46.dev-09"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.46.dev-09/main-layout",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/reactive/model', dependency_2], ['@beyond-js/react-18-widgets/base', dependency_3], ['@aimpact/chat-sdk/core', dependency_4], ['@aimpact/chat/wrapper', dependency_5], ['@beyond-js/kernel/texts', dependency_6], ['react', dependency_7], ['pragmate-ui/modal', dependency_8], ['@aimpact/ailearn-app/components/ui', dependency_9], ['pragmate-ui/components', dependency_10], ['pragmate-ui/chips', dependency_11], ['@beyond-js/react-18-widgets/hooks', dependency_12], ['pragmate-ui/icons', dependency_13], ['framer-motion', dependency_14], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_15], ['pragmate-ui/toast', dependency_16], ['@beyond-js/kernel/styles', dependency_17]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "main-layout",
        "vspecifier": "@aimpact/ailearn-app@0.0.46.dev-09/main-layout.widget",
        "is": "layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.46.dev-09/main-layout.widget');
      ims = new Map();
      /************************
      INTERNAL MODULE: ./broker
      ************************/
      ims.set('./broker', {
        hash: 1249874465,
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
              if (model.id === this.#model?.id) return;
              this.#model = model;
              this.#showCredits = showCredits;
              this.#model.on('change', this.onListen.bind(this));
              this.trigger('change');
              if (model.assignmentId) {
                this.#backLink = `/assignments/${model.assignmentId}`;
              }
              // logic for activities;
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
        hash: 2803709794,
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
        hash: 4209388385,
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
              return this.#texts?.value;
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
              _wrapper.AppWrapper.on('change', this.listener);
              this.#broker = _broker.LayoutBroker;
              this.#broker.on('change', this.triggerEvent);
              this.#texts.on('change', this.triggerEvent);
              this.init();
            }
            init = async () => {
              await _wrapper.AppWrapper.isReady;
              super.ready = true;
            };
            listener = () => {};
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
        hash: 1755494759,
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
            const {
              store,
              toggleCoinsModal,
              texts: {
                coins: {
                  header: texts
                }
              }
            } = (0, _context.useLayoutContext)();
            const [message, setMessage] = _react.default.useState('');
            const [, setHasCredits] = _react.default.useState(store.hasCredits);
            const ref = (0, _react.useRef)(null);
            const cls = `credits__container${!store.broker.canConsumeCredits ? ' is-disabled' : ''}`;
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
            const onCreditsChange = type => {
              ref.current.classList.add('success--container');
              setMessage(texts.messages[type]);
              setHasCredits(store.broker.hasCredits);
            };
            (0, _hooks.useBinder)([store.broker.model], onCreditsChange, 'credits.change');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiQnJva2VyIiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwiaGFzQ3JlZGl0cyIsImNyZWRpdHMiLCJ0b3RhbCIsIm1lc3NhZ2UiLCJicmVhZGNydW1iIiwidmFsdWUiLCJBcnJheSIsImlzQXJyYXkiLCJFcnJvciIsInRyaWdnZXIiLCJzaG93Q3JlZGl0cyIsIm92ZXJsYXkiLCJjYW5Db25zdW1lQ3JlZGl0cyIsImJhY2tMaW5rIiwiY29uc3RydWN0b3IiLCJlbnN1cmVDcmVkaXRzIiwiYmluZCIsImFkZE1vZGVsIiwiaWQiLCJvbiIsIm9uTGlzdGVuIiwiYXNzaWdubWVudElkIiwic2F2ZWQiLCJ0cmlnZ2VyRXZlbnQiLCJjYWxsYmFjayIsInNwZWNzIiwiY29uc29sZSIsImVycm9yIiwiYWRkQnJlYWRjcnVtYiIsIml0ZW1zIiwiYWRkTXVsdGlwbGVCcmVhZGNydW1iIiwidHJpbUJyZWFkY3J1bWIiLCJjb3VudCIsImxlbmd0aCIsInNob3dNZXNzYWdlIiwidHlwZSIsImdsb2JhbFRoaXMiLCJzZXRUaW1lb3V0IiwidW5kZWZpbmVkIiwiY2xlYXIiLCJleHBvcnRzIiwiTGF5b3V0QnJva2VyIiwiX2Jhc2UiLCJfc3RvcmUiLCJfdmlldyIsIkNvbnRyb2xsZXIiLCJSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiV2lkZ2V0IiwiTGF5b3V0IiwiX3dyYXBwZXIiLCJfYnJva2VyIiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiYnJva2VyIiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJyZWFkeSIsIkFwcFdyYXBwZXIiLCJsaXN0ZW5lciIsImluaXQiLCJpc1JlYWR5IiwiX3JlYWN0IiwiX21vZGFsIiwiQ29pbnNBbGVydCIsInNob3ciLCJvbkNsb3NlIiwiY29pbnMiLCJhbGVydCIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiQWxlcnRNb2RhbCIsImJ1dHRvbkxhYmVsIiwiYWN0aW9uIiwib25Db25maXJtIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIl91aSIsIkNvaW5zTW9kYWwiLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwidXNlU3RhdGUiLCJzZXRFcnJvciIsIm1vZGFsIiwiYW5zd2VyIiwiY29uc3VtZUNvaW5zIiwic3RhdHVzIiwiZXJyb3JzIiwiY29kZSIsImUiLCJub0NyZWRpdHMiLCJDb25maXJtTW9kYWwiLCJjbGFzc05hbWUiLCJjZW50ZXJlZCIsImFjdGlvbnMiLCJjb25maXJtIiwibGFiZWwiLCJ2YXJpYW50IiwiY2FuY2VsIiwiYm9yZGVyZWQiLCJvbkNhbmNlbCIsIkVycm9yUmVuZGVyZXIiLCJCYXR0ZXJ5IiwicGVyY2VudCIsIl9jb21wb25lbnRzIiwiX2NoaXBzIiwiX2hvb2tzIiwiX2FuaW1hdGVkTGFiZWwiLCJfY29udGV4dCIsIkNyZWRpdHNDb250YWluZXIiLCJ0b2dnbGVDb2luc01vZGFsIiwiaGVhZGVyIiwidXNlTGF5b3V0Q29udGV4dCIsInNldE1lc3NhZ2UiLCJzZXRIYXNDcmVkaXRzIiwicmVmIiwidXNlUmVmIiwiY2xzIiwiQ29udHJvbCIsIkNoaXAiLCJCdXR0b24iLCJhdHRycyIsIm9uQ2xpY2siLCJkaXNhYmxlZCIsImF2YWlsYWJsZSIsIm9uQ3JlZGl0c0NoYW5nZSIsImN1cnJlbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJtZXNzYWdlcyIsInVzZUJpbmRlciIsIkFuaW1hdGVkTGFiZWwiLCJfaWNvbnMiLCJfZnJhbWVyTW90aW9uIiwiX2FuaW1hdGVkIiwiTm90aWZpY2F0aW9uc0JhciIsInNldFNob3ciLCJBbmltYXRlUHJlc2VuY2UiLCJBbmltYXRlZCIsImFzIiwiSHRtbFdyYXBwZXIiLCJJY29uIiwiaWNvbiIsImNoaWxkcmVuIiwidXNlRWZmZWN0IiwibW90aW9uIiwic3BhbiIsImxheW91dCIsImluaXRpYWwiLCJvcGFjaXR5Iiwid2lkdGgiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZXhpdCIsIkNvbXBvbmVudCIsIl9uYXZiYXJIZWFkZXIiLCJfY3JlZGl0cyIsIkhlYWRlciIsInNob3dCYXIiLCJoYXNNb2RlbCIsInNldEhhc01vZGVsIiwidXBkYXRlZCIsInNldFVwZGF0ZWQiLCJobXIiLCJwZXJmb3JtYW5jZSIsIm5vdyIsInNldEJyZWFkY3J1bWIiLCJOYXZiYXJIZWFkZXIiLCJPdmVybGF5SGVhZGVyIiwiY2xvc2FibGUiLCJiYWNrbGluayIsIkxheW91dENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl90b2FzdCIsIl9oZWFkZXIiLCJfYWxlcnQiLCJfY29pbnNNb2RhbCIsIl9ub3RpZmljYXRpb25zQmFyIiwiX292ZXJsYXlIZWFkZXIiLCJzZXRSZWFkeSIsInNob3dDb2luc01vZGFsIiwic2V0U2hvd0NvaW5zTW9kYWwiLCJzaG93Q29pbnNBbGVydCIsInNldFNob3dDb2luc0FsZXJ0Iiwic2V0VXBkYXRlIiwidG9nZ2xlQ29pbnNBbGVydCIsIkhlYWRlckNvbnRyb2wiLCJGcmFnbWVudCIsIlByb3ZpZGVyIiwiVG9hc3RzIiwiUHJlbG9hZCIsIlJlYWN0Il0sInNvdXJjZXMiOlsiL3RzL2Jyb2tlci50cyIsIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXcvY29pbnMvYWxlcnQudHN4IiwiL3RzL3ZpZXcvY29pbnMvY29pbnMtbW9kYWwudHN4IiwiL3RzL3ZpZXcvY29pbnMvY3JlZGl0cy50c3giLCIvdHMvdmlldy9jb2lucy9ub3RpZmljYXRpb25zLWJhci50c3giLCIvdHMvdmlldy9jb21wb25lbnRzL2FuaW1hdGVkLWxhYmVsLnRzeCIsIi90cy92aWV3L2NvbXBvbmVudHMvYW5pbWF0ZWQudHN4IiwiL3RzL3ZpZXcvY29tcG9uZW50cy9oZWFkZXIudHN4IiwiL3RzL3ZpZXcvY29tcG9uZW50cy9vdmVybGF5LWhlYWRlci50c3giLCIvdHMvdmlldy9jb250ZXh0LnRzIiwiL3RzL3ZpZXcvaW5kZXgudHN4IiwiL3RzL3ZpZXcvcHJlbG9hZC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBTU0sTUFBT0MsTUFBTyxTQUFRRixNQUFBLENBQUFHLGFBQXFCO1lBQ2hELENBQUFDLEtBQU07WUFDTixJQUFJQSxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsS0FBTTtZQUNuQjtZQUNBLElBQUlDLFVBQVVBLENBQUE7Y0FDYixPQUFPLElBQUksQ0FBQyxDQUFBRCxLQUFNLEVBQUVFLE9BQU8sRUFBRUMsS0FBSyxHQUFHLENBQUM7WUFDdkM7WUFFQSxDQUFBQyxPQUFRO1lBQ1IsSUFBSUEsT0FBT0EsQ0FBQTtjQUNWLE9BQU8sSUFBSSxDQUFDLENBQUFBLE9BQVE7WUFDckI7WUFFQSxDQUFBQyxVQUFXLEdBQUcsRUFBRTtZQUNoQixJQUFJQSxVQUFVQSxDQUFBO2NBQ2IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsVUFBVztZQUN4QjtZQUVBLElBQUlBLFVBQVVBLENBQUNDLEtBQUs7Y0FDbkIsSUFBSSxDQUFDQyxLQUFLLENBQUNDLE9BQU8sQ0FBQ0YsS0FBSyxDQUFDLEVBQUUsTUFBTSxJQUFJRyxLQUFLLENBQUMsd0NBQXdDLENBQUM7Y0FDcEYsSUFBSSxDQUFDLENBQUFKLFVBQVcsR0FBR0MsS0FBSztjQUN4QixJQUFJLENBQUNJLE9BQU8sQ0FBQyxRQUFRLENBQUM7WUFDdkI7WUFFQSxDQUFBQyxXQUFZO1lBQ1osSUFBSUEsV0FBV0EsQ0FBQTtjQUNkLE9BQU8sSUFBSSxDQUFDLENBQUFBLFdBQVk7WUFDekI7WUFFQSxDQUFB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c0IsY0FBQSxDQUFBWCxhQUFhO1lBRXBFLE9BQ0MzRyxNQUFBLENBQUFPLE9BQUEsQ0FBQUMsYUFBQSxDQUFBUixNQUFBLENBQUFPLE9BQUEsQ0FBQXdILFFBQUEsUUFDQy9ILE1BQUEsQ0FBQU8sT0FBQSxDQUFBQyxhQUFBLENBQUNzQyxRQUFBLENBQUFnRSxhQUFhLENBQUNrQixRQUFRO2NBQUM3TCxLQUFLLEVBQUVBO1lBQUssR0FDbkM2RCxNQUFBLENBQUFPLE9BQUEsQ0FBQUMsYUFBQTtjQUFLc0IsU0FBUyxFQUFDO1lBQXdCLEdBQ3RDOUIsTUFBQSxDQUFBTyxPQUFBLENBQUFDLGFBQUEsQ0FBQ3NILGFBQWEsT0FBRyxFQUNqQjlILE1BQUEsQ0FBQU8sT0FBQSxDQUFBQyxhQUFBLENBQUM2RyxpQkFBQSxDQUFBNUMsZ0JBQWdCLE9BQUcsRUFDcEJ6RSxNQUFBLENBQUFPLE9BQUEsQ0FBQUMsYUFBQSxlQUNDUixNQUFBLENBQUFPLE9BQUEsQ0FBQUMsYUFBQSxnQ0FBMEIsRUFDMUJSLE1BQUEsQ0FBQU8sT0FBQSxDQUFBQyxhQUFBLENBQUN5RyxNQUFBLENBQUFnQixNQUFNLE9BQUcsQ0FDSixDQUNGLENBQ2tCLEVBQ3hCdEksS0FBSyxJQUNMSyxNQUFBLENBQUFPLE9BQUEsQ0FBQUMsYUFBQSxDQUFBUixNQUFBLENBQUFPLE9BQUEsQ0FBQXdILFFBQUEsUUFDQy9ILE1BQUEsQ0FBQU8sT0FBQSxDQUFBQyxhQUFBLENBQUMyRyxNQUFBLENBQUFqSCxVQUFVO2NBQUNYLEtBQUssRUFBRUEsS0FBSztjQUFFWSxJQUFJLEVBQUV1SCxjQUFjO2NBQUV0SCxPQUFPLEVBQUV5SDtZQUFnQixFQUFJLEVBQzdFN0gsTUFBQSxDQUFBTyxPQUFBLENBQUFDLGFBQUEsQ0FBQzRHLFdBQUEsQ0FBQXBHLFVBQVU7Y0FBQ25DLEtBQUssRUFBRUEsS0FBSztjQUFFVSxLQUFLLEVBQUVBLEtBQUs7Y0FBRVksSUFBSSxFQUFFcUgsY0FBYztjQUFFcEgsT0FBTyxFQUFFNEM7WUFBZ0IsRUFBSSxDQUU1RixDQUNDO1VBRUwsQ0FBQztVQUFDMUUsT0FBQSxDQUFBVyxNQUFBLEdBQUFBLE1BQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDMURJLFNBQVVpSixPQUFPQSxDQUFBO1lBQ3RCLE9BQU9DLEtBQUEsQ0FBQTNILGFBQUEsQ0FBQTJILEtBQUEsQ0FBQUosUUFBQSxPQUFLO1VBQ2IiLCJpZ25vcmVMaXN0IjpbXX0=