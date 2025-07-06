System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.12/bundle", "@beyond-js/reactive@2.1.0/model", "@aimpact/ailearn-app@0.4.2/widgets/breadcrumb.widget", "@aimpact/ailearn-app@0.4.2/i18n.ts", "@beyond-js/kernel@0.1.12/routing", "@beyond-js/react-18-widgets@1.1.4/base", "@aimpact/chat-sdk@1.5.4/core", "@aimpact/chat-sdk@1.5.4/wrapper", "@beyond-js/kernel@0.1.12/texts", "react@18.3.1", "pragmate-ui@1.0.2/modal", "@beyond-js/react-18-widgets@1.1.4/hooks", "pragmate-ui@1.0.2/chips", "pragmate-ui@1.0.2/components", "@aimpact/ailearn-app@0.4.2/components/ui", "@aimpact/ailearn-app@0.4.2/components/hooks", "pragmate-ui@1.0.2/icons", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.4.2/components/navbar-header.code", "pragmate-ui@1.0.2/toast", "@beyond-js/kernel@0.1.12/styles"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, bimport, __Bundle, __pkg, ims, LayoutBroker, Controller, Header, OverlayHeader, __beyond_pkg, hmr;
  _export({
    LayoutBroker: void 0,
    Controller: void 0,
    Header: void 0,
    OverlayHeader: void 0
  });
  return {
    setters: [function (_beyondJsWidgets112Render) {
      dependency_0 = _beyondJsWidgets112Render;
    }, function (_beyondJsKernel0112Bundle) {
      dependency_1 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsReactive210Model) {
      dependency_2 = _beyondJsReactive210Model;
    }, function (_aimpactAilearnApp042WidgetsBreadcrumbWidget) {
      dependency_3 = _aimpactAilearnApp042WidgetsBreadcrumbWidget;
    }, function (_aimpactAilearnApp042I18nTs) {
      dependency_4 = _aimpactAilearnApp042I18nTs;
    }, function (_beyondJsKernel0112Routing) {
      dependency_5 = _beyondJsKernel0112Routing;
    }, function (_beyondJsReact18Widgets114Base) {
      dependency_6 = _beyondJsReact18Widgets114Base;
    }, function (_aimpactChatSdk154Core) {
      dependency_7 = _aimpactChatSdk154Core;
    }, function (_aimpactChatSdk154Wrapper) {
      dependency_8 = _aimpactChatSdk154Wrapper;
    }, function (_beyondJsKernel0112Texts) {
      dependency_9 = _beyondJsKernel0112Texts;
    }, function (_react2) {
      dependency_10 = _react2;
    }, function (_pragmateUi102Modal) {
      dependency_11 = _pragmateUi102Modal;
    }, function (_beyondJsReact18Widgets114Hooks) {
      dependency_12 = _beyondJsReact18Widgets114Hooks;
    }, function (_pragmateUi102Chips) {
      dependency_13 = _pragmateUi102Chips;
    }, function (_pragmateUi102Components) {
      dependency_14 = _pragmateUi102Components;
    }, function (_aimpactAilearnApp042ComponentsUi) {
      dependency_15 = _aimpactAilearnApp042ComponentsUi;
    }, function (_aimpactAilearnApp042ComponentsHooks) {
      dependency_16 = _aimpactAilearnApp042ComponentsHooks;
    }, function (_pragmateUi102Icons) {
      dependency_17 = _pragmateUi102Icons;
    }, function (_framerMotion2) {
      dependency_18 = _framerMotion2;
    }, function (_aimpactAilearnApp042ComponentsNavbarHeaderCode) {
      dependency_19 = _aimpactAilearnApp042ComponentsNavbarHeaderCode;
    }, function (_pragmateUi102Toast) {
      dependency_20 = _pragmateUi102Toast;
    }, function (_beyondJsKernel0112Styles) {
      dependency_21 = _beyondJsKernel0112Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", null], ["@aimpact/chat-sdk", "1.5.4"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.2"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.1.0"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.1"], ["@firebase/auth", "1.10.7"], ["@google-cloud/storage", "7.16.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.6"], ["driver.js", "1.3.6"], ["firebase", "11.9.1"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.22"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.2"], ["marked-mangle", "1.1.11"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.2.2"], ["simplebar-react", "3.3.1"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.9"], ["zod", "3.25.67"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.23"], ["@types/react-dom", "18.3.7"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.4.2"], ["@aimpact/rvd", "0.5.3"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.4.2/main-layout",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/reactive/model', dependency_2], ['@aimpact/ailearn-app/widgets/breadcrumb.widget', dependency_3], ['@aimpact/ailearn-app/i18n.ts', dependency_4], ['@beyond-js/kernel/routing', dependency_5], ['@beyond-js/react-18-widgets/base', dependency_6], ['@aimpact/chat-sdk/core', dependency_7], ['@aimpact/chat-sdk/wrapper', dependency_8], ['@beyond-js/kernel/texts', dependency_9], ['react', dependency_10], ['pragmate-ui/modal', dependency_11], ['@beyond-js/react-18-widgets/hooks', dependency_12], ['pragmate-ui/chips', dependency_13], ['pragmate-ui/components', dependency_14], ['@aimpact/ailearn-app/components/ui', dependency_15], ['@aimpact/ailearn-app/components/hooks', dependency_16], ['pragmate-ui/icons', dependency_17], ['framer-motion', dependency_18], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_19], ['pragmate-ui/toast', dependency_20], ['@beyond-js/kernel/styles', dependency_21]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "main-layout",
        "vspecifier": "@aimpact/ailearn-app@0.4.2/main-layout.widget",
        "is": "layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.4.2/main-layout.widget');
      ims = new Map();
      /************************
      INTERNAL MODULE: ./broker
      ************************/
      ims.set('./broker', {
        hash: 3556337552,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LayoutBroker = exports.Broker = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _breadcrumb = require("@aimpact/ailearn-app/widgets/breadcrumb.widget");
          var _i18n = require("@aimpact/ailearn-app/i18n.ts");
          var _routing = require("@beyond-js/kernel/routing");
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
              return _breadcrumb.breadcrumbStore;
            }
            #showCredits;
            get showCredits() {
              return this.#showCredits;
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
            #previousPathname = _routing.routing.uri.pathname;
            constructor() {
              super({
                properties: ['title', 'backLink', 'overlay', 'force', 'refresh']
              });
              this.ensureCredits = this.ensureCredits.bind(this);
              _i18n.globalTexts.on('change', this.triggerEvent.bind(this));
              _routing.routing.on('change', () => {
                if (this.#previousPathname === _routing.routing.uri.pathname) return;
                this.#previousPathname = _routing.routing.uri.pathname;
                let exists = this.breadcrumb.items.findIndex(item => item?.[1] === _routing.routing.uri.pathname);
                if (exists === -1) {
                  function findLastIndex(array, predicate) {
                    for (let i = array.length - 1; i >= 0; i--) {
                      if (predicate(array[i], i, array)) {
                        return i;
                      }
                    }
                    return -1;
                  }
                  const lastIndex = findLastIndex(this.breadcrumb.items, item => {
                    if (!item?.[1]) return;
                    return !!item?.[1]?.includes(_routing.routing.uri.pathname);
                  });
                  if (lastIndex) {
                    const newItems = this.breadcrumb.items.slice(0, lastIndex + 1);
                    this.breadcrumb.set({
                      items: newItems
                    });
                    return;
                  }
                  this.breadcrumb.set({
                    items: []
                  });
                  return;
                }
                const newItems = this.breadcrumb.items.slice(0, exists + 1);
                this.breadcrumb.set({
                  items: newItems
                });
              });
              globalThis.layout = this;
            }
            addModel(model, showCredits = true) {
              if (model.id !== undefined && model.id === this.#model?.id) return;
              this.#model = model;
              this.#showCredits = showCredits;
              this.#model.on('change', this.onListen.bind(this));
              this.trigger('change');
              this.trigger('model.changed');
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
            setTitle(title) {
              this.title = title;
            }
            onRefresh() {
              this.refresh();
            }
            set({
              breadcrumb,
              force = false,
              ...props
            }) {
              super.set({
                force,
                ...props
              });
              if (breadcrumb) {
                this.breadcrumb.set({
                  items: breadcrumb
                });
              }
              return {
                updated: true
              };
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
        hash: 686618676,
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
            isStore;
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
              this.#broker.on('model.changed', () => this.triggerEvent('model.changed'));
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
        hash: 3254726018,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CreditsContainer = CreditsContainer;
          var _chips = require("pragmate-ui/chips");
          var _components = require("pragmate-ui/components");
          var _react = require("react");
          var _animatedLabel = require("../components/animated-label");
          var _context = require("../context");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _hooks = require("@aimpact/ailearn-app/components/hooks");
          function CreditsContainer() {
            let {
              store,
              toggleCoinsModal,
              texts
            } = (0, _context.useLayoutContext)();
            const [message, setMessage] = _react.default.useState('');
            const [, setHasCredits] = _react.default.useState(store.hasCredits);
            const ref = (0, _react.useRef)(null);
            const cls = `credits__container ${!store.broker.canConsumeCredits ? ' is-disabled' : ''}`;
            const [credits, setCredits] = _react.default.useState(store.model?.credits.getProperties() ?? {
              total: 0,
              consumed: 0
            });
            const onCreditsChange = type => {
              ref.current.classList.add('success--container');
              setMessage(texts?.messages[type]);
              setCredits({
                ...store.broker.model?.credits.getProperties()
              });
              setHasCredits(store.broker.hasCredits);
            };
            (0, _hooks.useStore)(store.broker.model, ['credits.change'], onCreditsChange);
            if (!texts?.coins || !store.broker.model?.id) return null;
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
            }, _react.default.createElement(_animatedLabel.AnimatedLabel, null, message), _react.default.createElement(Control, {
              ...attrs
            }, store.broker.hasCredits ? _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_ui.Battery, {
              percent: percentageAvailable
            }), _react.default.createElement("span", {
              className: "interactions-data"
            }, label)) : _react.default.createElement(_react.default.Fragment, null, label)));
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
        hash: 2257335102,
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
            const [show, setShow] = _react.default.useState(true);
            _react.default.useEffect(() => {
              setShow(children);
              globalThis.setTimeout(() => {
                setShow(false);
              }, 2000);
            }, [children]);
            return _react.default.createElement(_framerMotion.AnimatePresence, null, show && _react.default.createElement(_framerMotion.motion.span, {
              layout: true,
              className: "label-message",
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
        hash: 663260427,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Header = Header;
          var _react = require("react");
          var _navbarHeader = require("@aimpact/ailearn-app/components/navbar-header.code");
          var _icons = require("pragmate-ui/icons");
          var _hooks = require("@aimpact/ailearn-app/components/hooks");
          var _credits = require("../coins/credits");
          var _context = require("../context");
          /*bundle*/
          function Header() {
            const {
              store
            } = (0, _context.useLayoutContext)();
            (0, _hooks.useStore)(store, ['overlay.changed', 'title.changed', 'model.changed']);
            const hasModel = !!store.broker.model;
            const attrs = {
              force: store.broker.force,
              store,
              closable: store.broker.overlay,
              backlink: store.broker.backLink
            };
            return _react.default.createElement(_navbarHeader.NavbarHeader, {
              ...attrs
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
        hash: 1200112220,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.OverlayHeader = OverlayHeader;
          var React = require("react");
          var _navbarHeader = require("@aimpact/ailearn-app/components/navbar-header.code");
          var _context = require("../context");
          var _credits = require("../coins/credits");
          var _icons = require("pragmate-ui/icons");
          /*bundle*/
          function OverlayHeader() {
            const {
              store
            } = (0, _context.useLayoutContext)();
            return React.createElement(_navbarHeader.NavbarHeader, {
              force: store.broker.force,
              store: store,
              closable: true,
              backlink: store.broker.backLink
            }, !!store.broker.model && React.createElement(_credits.CreditsContainer, null), store.broker.refresh && React.createElement(_icons.IconButton, {
              icon: "refresh",
              className: "circle",
              onClick: () => store.broker.refresh()
            }));
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

      /*****************************
      INTERNAL MODULE: ./view/global
      *****************************/

      ims.set('./view/global', {
        hash: 4223080399,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /****************************
      INTERNAL MODULE: ./view/index
      ****************************/

      ims.set('./view/index', {
        hash: 2296189957,
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
          const Layout = ({
            store
          }) => {
            const [ready, setReady] = (0, _react.useState)(store.ready);
            const [showCoinsModal, setShowCoinsModal] = _react.default.useState(false);
            const [showCoinsAlert, setShowCoinsAlert] = _react.default.useState(false);
            const [, setUpdate] = (0, _react.useState)({});
            const toggleCoinsAlert = () => setShowCoinsAlert(!showCoinsAlert);
            const toggleCoinsModal = () => setShowCoinsModal(!showCoinsModal);
            const ref = _react.default.useRef();
            const {
              texts
            } = store;
            _react.default.useEffect(() => {
              globalThis.mainLayout = ref.current;
            }, []), (0, _hooks.useBinder)([store], () => setReady(store.ready));
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
            }, _react.default.createElement(_header.Header, null), _react.default.createElement(_notificationsBar.NotificationsBar, null), _react.default.createElement("main", null, _react.default.createElement("beyond-layout-children", {
              ref: ref
            }), _react.default.createElement(_toast.Toasts, null)))), ready && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_alert.CoinsAlert, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX2JyZWFkY3J1bWIiLCJfaTE4biIsIl9yb3V0aW5nIiwiQnJva2VyIiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwiaGFzQ3JlZGl0cyIsImNyZWRpdHMiLCJ0b3RhbCIsIm1lc3NhZ2UiLCJicmVhZGNydW1iIiwiYnJlYWRjcnVtYlN0b3JlIiwic2hvd0NyZWRpdHMiLCJnbG9iYWxUZXh0cyIsInRleHRzIiwiY2FuQ29uc3VtZUNyZWRpdHMiLCJ2YWx1ZSIsInRyaWdnZXIiLCJwcmV2aW91c1BhdGhuYW1lIiwicm91dGluZyIsInVyaSIsInBhdGhuYW1lIiwiY29uc3RydWN0b3IiLCJwcm9wZXJ0aWVzIiwiZW5zdXJlQ3JlZGl0cyIsImJpbmQiLCJvbiIsInRyaWdnZXJFdmVudCIsImV4aXN0cyIsIml0ZW1zIiwiZmluZEluZGV4IiwiaXRlbSIsImZpbmRMYXN0SW5kZXgiLCJhcnJheSIsInByZWRpY2F0ZSIsImkiLCJsZW5ndGgiLCJsYXN0SW5kZXgiLCJpbmNsdWRlcyIsIm5ld0l0ZW1zIiwic2xpY2UiLCJzZXQiLCJnbG9iYWxUaGlzIiwibGF5b3V0IiwiYWRkTW9kZWwiLCJpZCIsInVuZGVmaW5lZCIsIm9uTGlzdGVuIiwiY2xlYXJNb2RlbCIsInNhdmVkIiwiY2FsbGJhY2siLCJzcGVjcyIsImNvbnNvbGUiLCJlcnJvciIsInNob3dNZXNzYWdlIiwidHlwZSIsInNldFRpbWVvdXQiLCJjbGVhciIsIm92ZXJsYXkiLCJzZXRUaXRsZSIsInRpdGxlIiwib25SZWZyZXNoIiwicmVmcmVzaCIsImZvcmNlIiwicHJvcHMiLCJ1cGRhdGVkIiwiZXhwb3J0cyIsIkxheW91dEJyb2tlciIsIl9iYXNlIiwiX3N0b3JlIiwiX3ZpZXciLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsIkxheW91dCIsIl93cmFwcGVyIiwiX2Jyb2tlciIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsImlzU3RvcmUiLCJicm9rZXIiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJyZWFkeSIsImluaXQiLCJBcHBXcmFwcGVyIiwiaXNSZWFkeSIsImxpc3RlbiIsImNsb3NlIiwib2ZmIiwiX3JlYWN0IiwiX21vZGFsIiwiQ29pbnNBbGVydCIsInNob3ciLCJvbkNsb3NlIiwiY29pbnMiLCJhbGVydCIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiQWxlcnRNb2RhbCIsImJ1dHRvbkxhYmVsIiwiYWN0aW9uIiwib25Db25maXJtIiwiZGVzY3JpcHRpb24iLCJfY2hpcHMiLCJfY29tcG9uZW50cyIsIl9hbmltYXRlZExhYmVsIiwiX2NvbnRleHQiLCJfdWkiLCJfaG9va3MiLCJDcmVkaXRzQ29udGFpbmVyIiwidG9nZ2xlQ29pbnNNb2RhbCIsInVzZUxheW91dENvbnRleHQiLCJzZXRNZXNzYWdlIiwidXNlU3RhdGUiLCJzZXRIYXNDcmVkaXRzIiwicmVmIiwidXNlUmVmIiwiY2xzIiwic2V0Q3JlZGl0cyIsImdldFByb3BlcnRpZXMiLCJjb25zdW1lZCIsIm9uQ3JlZGl0c0NoYW5nZSIsImN1cnJlbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJtZXNzYWdlcyIsInVzZVN0b3JlIiwiaGVhZGVyIiwiQ29udHJvbCIsImF0dHJzIiwiY2xhc3NOYW1lIiwib25DbGljayIsInZhcmlhbnQiLCJkaXNhYmxlZCIsIkJ1dHRvbiIsIkNoaXAiLCJwZXJjZW50YWdlQXZhaWxhYmxlIiwibGFiZWwiLCJhY3Rpb25zIiwiYXZhaWxhYmxlIiwiQW5pbWF0ZWRMYWJlbCIsIkZyYWdtZW50IiwiQmF0dGVyeSIsInBlcmNlbnQiLCJfaWNvbnMiLCJfZnJhbWVyTW90aW9uIiwiX2FuaW1hdGVkIiwiTm90aWZpY2F0aW9uc0JhciIsInNldFNob3ciLCJ1c2VCaW5kZXIiLCJBbmltYXRlUHJlc2VuY2UiLCJBbmltYXRlZCIsImFzIiwiSHRtbFdyYXBwZXIiLCJJY29uIiwiaWNvbiIsImNoaWxkcmVuIiwidXNlRWZmZWN0IiwibW90aW9uIiwic3BhbiIsImluaXRpYWwiLCJvcGFjaXR5Iiwid2lkdGgiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZXhpdCIsIkNvbXBvbmVudCIsIl9uYXZiYXJIZWFkZXIiLCJfY3JlZGl0cyIsIkhlYWRlciIsImhhc01vZGVsIiwiY2xvc2FibGUiLCJiYWNrbGluayIsImJhY2tMaW5rIiwiTmF2YmFySGVhZGVyIiwiSWNvbkJ1dHRvbiIsIlJlYWN0IiwiT3ZlcmxheUhlYWRlciIsIkxheW91dENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX3RvYXN0IiwiX2hlYWRlciIsIl9hbGVydCIsIl9ub3RpZmljYXRpb25zQmFyIiwic2V0UmVhZHkiLCJzaG93Q29pbnNNb2RhbCIsInNldFNob3dDb2luc01vZGFsIiwic2hvd0NvaW5zQWxlcnQiLCJzZXRTaG93Q29pbnNBbGVydCIsInNldFVwZGF0ZSIsInRvZ2dsZUNvaW5zQWxlcnQiLCJtYWluTGF5b3V0IiwibW9kZWxUeXBlIiwiUHJvdmlkZXIiLCJUb2FzdHMiLCJDb2luc01vZGFsIiwib3duZXIiLCJvbkNvbnN1bWUiLCJjb25zdW1lQ29pbnMiLCJQcmVsb2FkIl0sInNvdXJjZXMiOlsiL3RzL2Jyb2tlci50cyIsIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXcvY29pbnMvYWxlcnQudHN4IiwiL3RzL3ZpZXcvY29pbnMvY3JlZGl0cy50c3giLCIvdHMvdmlldy9jb2lucy9ub3RpZmljYXRpb25zLWJhci50c3giLCIvdHMvdmlldy9jb21wb25lbnRzL2FuaW1hdGVkLWxhYmVsLnRzeCIsIi90cy92aWV3L2NvbXBvbmVudHMvYW5pbWF0ZWQudHN4IiwiL3RzL3ZpZXcvY29tcG9uZW50cy9oZWFkZXIudHN4IiwiL3RzL3ZpZXcvY29tcG9uZW50cy9vdmVybGF5LWhlYWRlci50c3giLCIvdHMvdmlldy9jb250ZXh0LnRzIiwiL2dsb2JhbC50c3giLCIvdHMvdmlldy9pbmRleC50c3giLCIvdHMvdmlldy9wcmVsb2FkLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLFdBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLEtBQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFHLFFBQUEsR0FBQUgsT0FBQTtVQVdNLE1BQU9JLE1BQU8sU0FBUUwsTUFBQSxDQUFBTSxhQUFzQjtZQUVqRCxDQUFBQyxLQUFNO1lBTU4sSUFBSUEsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU07WUFDbkI7WUFDQSxJQUFJQyxVQUFVQSxDQUFBO2NBQ2IsT0FBTyxJQUFJLENBQUMsQ0FBQUQsS0FBTSxFQUFFRSxPQUFPLEVBQUVDLEtBQUssR0FBRyxDQUFDO1lBQ3ZDO1lBRUEsQ0FBQUMsT0FBUTtZQUNSLElBQUlBLE9BQU9BLENBQUE7Y0FDVixPQUFPLElBQUksQ0FBQyxDQUFBQSxPQUFRO1lBQ3JCO1lBRUEsSUFBSUMsVUFBVUEsQ0FBQTtjQUNiLE9BQU9WLFdBQUEsQ0FBQVcsZUFBc0I7WUFDOUI7WUFFQSxDQUFBQyxXQUFZO1lBQ1osSUFBSUEsV0FBV0EsQ0FBQTtjQUNkLE9BQU8sSUFBSSxDQUFDLENBQUFBLFdBQVk7WUFDekI7WUFFQSxJQUFJQyxXQUFXQSxDQUFBO2NBQ2QsT0FBT1osS0FBQSxDQUFBWSxXQUFXLENBQUNDLEtBQUs7WUFDekI7WUFDQTs7Ozs7WUFLQSxDQUFBQyxpQkFBa0I7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