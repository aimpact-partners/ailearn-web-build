System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.1.12/model", "@beyond-js/react-18-widgets@1.1.2/base", "@aimpact/chat-sdk@1.0.0/core", "@aimpact/chat@1.0.1/wrapper", "@beyond-js/kernel@0.1.9/texts", "react@18.2.0", "pragmate-ui@0.1.1/modal", "@aimpact/ailearn-app@0.0.46.dev-16/components/ui", "pragmate-ui@0.1.1/components", "pragmate-ui@0.1.1/chips", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@0.1.1/icons", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.0.46.dev-16/components/navbar-header.code", "pragmate-ui@0.1.1/toast", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp0046Dev16ComponentsUi) {
      dependency_9 = _aimpactAilearnApp0046Dev16ComponentsUi;
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
    }, function (_aimpactAilearnApp0046Dev16ComponentsNavbarHeaderCode) {
      dependency_15 = _aimpactAilearnApp0046Dev16ComponentsNavbarHeaderCode;
    }, function (_pragmateUi011Toast) {
      dependency_16 = _pragmateUi011Toast;
    }, function (_beyondJsKernel019Styles) {
      dependency_17 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.0.46.dev-16"], ["@aimpact/ailearn-app", "0.0.46.dev-16"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.46.dev-16/main-layout",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/reactive/model', dependency_2], ['@beyond-js/react-18-widgets/base', dependency_3], ['@aimpact/chat-sdk/core', dependency_4], ['@aimpact/chat/wrapper', dependency_5], ['@beyond-js/kernel/texts', dependency_6], ['react', dependency_7], ['pragmate-ui/modal', dependency_8], ['@aimpact/ailearn-app/components/ui', dependency_9], ['pragmate-ui/components', dependency_10], ['pragmate-ui/chips', dependency_11], ['@beyond-js/react-18-widgets/hooks', dependency_12], ['pragmate-ui/icons', dependency_13], ['framer-motion', dependency_14], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_15], ['pragmate-ui/toast', dependency_16], ['@beyond-js/kernel/styles', dependency_17]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "main-layout",
        "vspecifier": "@aimpact/ailearn-app@0.0.46.dev-16/main-layout.widget",
        "is": "layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.46.dev-16/main-layout.widget');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiQnJva2VyIiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwiaGFzQ3JlZGl0cyIsImNyZWRpdHMiLCJ0b3RhbCIsIm1lc3NhZ2UiLCJicmVhZGNydW1iIiwidmFsdWUiLCJBcnJheSIsImlzQXJyYXkiLCJFcnJvciIsInRyaWdnZXIiLCJzaG93Q3JlZGl0cyIsIm92ZXJsYXkiLCJjYW5Db25zdW1lQ3JlZGl0cyIsImJhY2tMaW5rIiwiY29uc3RydWN0b3IiLCJlbnN1cmVDcmVkaXRzIiwiYmluZCIsImFkZE1vZGVsIiwiaWQiLCJvbiIsIm9uTGlzdGVuIiwiYXNzaWdubWVudElkIiwic2F2ZWQiLCJ0cmlnZ2VyRXZlbnQiLCJjYWxsYmFjayIsInNwZWNzIiwiY29uc29sZSIsImVycm9yIiwiYWRkQnJlYWRjcnVtYiIsIml0ZW1zIiwiYWRkTXVsdGlwbGVCcmVhZGNydW1iIiwidHJpbUJyZWFkY3J1bWIiLCJjb3VudCIsImxlbmd0aCIsInNob3dNZXNzYWdlIiwidHlwZSIsImdsb2JhbFRoaXMiLCJzZXRUaW1lb3V0IiwidW5kZWZpbmVkIiwiY2xlYXIiLCJleHBvcnRzIiwiTGF5b3V0QnJva2VyIiwiX2Jhc2UiLCJfc3RvcmUiLCJfdmlldyIsIkNvbnRyb2xsZXIiLCJSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiV2lkZ2V0IiwiTGF5b3V0IiwiX3dyYXBwZXIiLCJfYnJva2VyIiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiYnJva2VyIiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJyZWFkeSIsIkFwcFdyYXBwZXIiLCJsaXN0ZW5lciIsImluaXQiLCJpc1JlYWR5IiwiX3JlYWN0IiwiX21vZGFsIiwiQ29pbnNBbGVydCIsInNob3ciLCJvbkNsb3NlIiwiY29pbnMiLCJhbGVydCIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiQWxlcnRNb2RhbCIsImJ1dHRvbkxhYmVsIiwiYWN0aW9uIiwib25Db25maXJtIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIl91aSIsIkNvaW5zTW9kYWwiLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwidXNlU3RhdGUiLCJzZXRFcnJvciIsIm1vZGFsIiwiYW5zd2VyIiwiY29uc3VtZUNvaW5zIiwic3RhdHVzIiwiZXJyb3JzIiwiY29kZSIsImUiLCJub0NyZWRpdHMiLCJDb25maXJtTW9kYWwiLCJjbGFzc05hbWUiLCJjZW50ZXJlZCIsImFjdGlvbnMiLCJjb25maXJtIiwibGFiZWwiLCJ2YXJpYW50IiwiY2FuY2VsIiwiYm9yZGVyZWQiLCJvbkNhbmNlbCIsIkVycm9yUmVuZGVyZXIiLCJCYXR0ZXJ5IiwicGVyY2VudCIsIl9jb21wb25lbnRzIiwiX2NoaXBzIiwiX2hvb2tzIiwiX2FuaW1hdGVkTGFiZWwiLCJfY29udGV4dCIsIkNyZWRpdHNDb250YWluZXIiLCJ0b2dnbGVDb2luc01vZGFsIiwiaGVhZGVyIiwidXNlTGF5b3V0Q29udGV4dCIsInNldE1lc3NhZ2UiLCJzZXRIYXNDcmVkaXRzIiwicmVmIiwidXNlUmVmIiwiY2xzIiwiQ29udHJvbCIsIkNoaXAiLCJCdXR0b24iLCJhdHRycyIsIm9uQ2xpY2siLCJkaXNhYmxlZCIsImF2YWlsYWJsZSIsIm9uQ3JlZGl0c0NoYW5nZSIsImN1cnJlbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJtZXNzYWdlcyIsInVzZUJpbmRlciIsIkFuaW1hdGVkTGFiZWwiLCJfaWNvbnMiLCJfZnJhbWVyTW90aW9uIiwiX2FuaW1hdGVkIiwiTm90aWZpY2F0aW9uc0JhciIsInNldFNob3ciLCJBbmltYXRlUHJlc2VuY2UiLCJBbmltYXRlZCIsImFzIiwiSHRtbFdyYXBwZXIiLCJJY29uIiwiaWNvbiIsImNoaWxkcmVuIiwidXNlRWZmZWN0IiwibW90aW9uIiwic3BhbiIsImxheW91dCIsImluaXRpYWwiLCJvcGFjaXR5Iiwid2lkdGgiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZXhpdCIsIkNvbXBvbmVudCIsIl9uYXZiYXJIZWFkZXIiLCJfY3JlZGl0cyIsIkhlYWRlciIsInNob3dCYXIiLCJoYXNNb2RlbCIsInNldEhhc01vZGVsIiwidXBkYXRlZCIsInNldFVwZGF0ZWQiLCJobXIiLCJwZXJmb3JtYW5jZSIsIm5vdyIsInNldEJyZWFkY3J1bWIiLCJOYXZiYXJIZWFkZXIiLCJPdmVybGF5SGVhZGVyIiwiY2xvc2FibGUiLCJiYWNrbGluayIsIkxheW91dENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl90b2FzdCIsIl9oZWFkZXIiLCJfYWxlcnQiLCJfY29pbnNNb2RhbCIsIl9ub3RpZmljYXRpb25zQmFyIiwiX292ZXJsYXlIZWFkZXIiLCJzZXRSZWFkeSIsInNob3dDb2luc01vZGFsIiwic2V0U2hvd0NvaW5zTW9kYWwiLCJzaG93Q29pbnNBbGVydCIsInNldFNob3dDb2luc0FsZXJ0Iiwic2V0VXBkYXRlIiwidG9nZ2xlQ29pbnNBbGVydCIsIkhlYWRlckNvbnRyb2wiLCJGcmFnbWVudCIsIlByb3ZpZGVyIiwiVG9hc3RzIiwiUHJlbG9hZCIsIlJlYWN0Il0sInNvdXJjZXMiOlsiL3RzL2Jyb2tlci50cyIsIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXcvY29pbnMvYWxlcnQudHN4IiwiL3RzL3ZpZXcvY29pbnMvY29pbnMtbW9kYWwudHN4IiwiL3RzL3ZpZXcvY29pbnMvY3JlZGl0cy50c3giLCIvdHMvdmlldy9jb2lucy9ub3RpZmljYXRpb25zLWJhci50c3giLCIvdHMvdmlldy9jb21wb25lbnRzL2FuaW1hdGVkLWxhYmVsLnRzeCIsIi90cy92aWV3L2NvbXBvbmVudHMvYW5pbWF0ZWQudHN4IiwiL3RzL3ZpZXcvY29tcG9uZW50cy9oZWFkZXIudHN4IiwiL3RzL3ZpZXcvY29tcG9uZW50cy9vdmVybGF5LWhlYWRlci50c3giLCIvdHMvdmlldy9jb250ZXh0LnRzIiwiL3RzL3ZpZXcvaW5kZXgudHN4IiwiL3RzL3ZpZXcvcHJlbG9hZC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBTU0sTUFBT0MsTUFBTyxTQUFRRixNQUFBLENBQUFHLGFBQXFCO1lBQ2hELENBQUFDLEtBQU07WUFDTixJQUFJQSxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsS0FBTTtZQUNuQjtZQUNBLElBQUlDLFVBQVVBLENBQUE7Y0FDYixPQUFPLElBQUksQ0FBQyxDQUFBRCxLQUFNLEVBQUVFLE9BQU8sRUFBRUMsS0FBSyxHQUFHLENBQUM7WUFDdkM7WUFFQSxDQUFBQyxPQUFRO1lBQ1IsSUFBSUEsT0FBT0EsQ0FBQTtjQUNWLE9BQU8sSUFBSSxDQUFDLENBQUFBLE9BQVE7WUFDckI7WUFFQSxDQUFBQyxVQUFXLEdBQUcsRUFBRTtZQUNoQixJQUFJQSxVQUFVQSxDQUFBO2NBQ2IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsVUFBVztZQUN4QjtZQUVBLElBQUlBLFVBQVVBLENBQUNDLEtBQUs7Y0FDbkIsSUFBSSxDQUFDQyxLQUFLLENBQUNDLE9BQU8sQ0FBQ0YsS0FBSyxDQUFDLEVBQUUsTUFBTSxJQUFJRyxLQUFLLENBQUMsd0NBQXdDLENBQUM7Y0FDcEYsSUFBSSxDQUFDLENBQUFKLFVBQVcsR0FBR0MsS0FBSztjQUN4QixJQUFJLENBQUNJLE9BQU8sQ0FBQyxRQUFRLENBQUM7WUFDdkI7WUFFQSxDQUFBQyxXQUFZO1lBQ1osSUFBSUEsV0FBV0EsQ0FBQTtjQUNkLE9BQU8sSUFBSSxDQUFDLENBQUFBLFdBQVk7WUFDekI7WUFFQSxDQUFB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