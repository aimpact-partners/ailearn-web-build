System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.12/bundle", "@beyond-js/reactive@2.0.5/model", "@aimpact/ailearn-app@0.4.2/widgets/breadcrumb.widget", "@aimpact/ailearn-app@0.4.2/i18n.ts", "@beyond-js/kernel@0.1.12/routing", "@beyond-js/react-18-widgets@1.1.4/base", "@aimpact/chat-sdk@1.5.4/core", "@aimpact/chat-sdk@1.5.4/wrapper", "@beyond-js/kernel@0.1.12/texts", "react@18.3.1", "pragmate-ui@1.0.0-beta.7/modal", "@beyond-js/react-18-widgets@1.1.4/hooks", "pragmate-ui@1.0.0-beta.7/chips", "pragmate-ui@1.0.0-beta.7/components", "@aimpact/ailearn-app@0.4.2/components/ui", "@aimpact/ailearn-app@0.4.2/components/hooks", "pragmate-ui@1.0.0-beta.7/icons", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.4.2/components/navbar-header.code", "pragmate-ui@1.0.0-beta.7/toast", "@beyond-js/kernel@0.1.12/styles"], function (_export, _context2) {
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
    }, function (_beyondJsReactive205Model) {
      dependency_2 = _beyondJsReactive205Model;
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
    }, function (_pragmateUi100Beta7Modal) {
      dependency_11 = _pragmateUi100Beta7Modal;
    }, function (_beyondJsReact18Widgets114Hooks) {
      dependency_12 = _beyondJsReact18Widgets114Hooks;
    }, function (_pragmateUi100Beta7Chips) {
      dependency_13 = _pragmateUi100Beta7Chips;
    }, function (_pragmateUi100Beta7Components) {
      dependency_14 = _pragmateUi100Beta7Components;
    }, function (_aimpactAilearnApp042ComponentsUi) {
      dependency_15 = _aimpactAilearnApp042ComponentsUi;
    }, function (_aimpactAilearnApp042ComponentsHooks) {
      dependency_16 = _aimpactAilearnApp042ComponentsHooks;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_17 = _pragmateUi100Beta7Icons;
    }, function (_framerMotion2) {
      dependency_18 = _framerMotion2;
    }, function (_aimpactAilearnApp042ComponentsNavbarHeaderCode) {
      dependency_19 = _aimpactAilearnApp042ComponentsNavbarHeaderCode;
    }, function (_pragmateUi100Beta7Toast) {
      dependency_20 = _pragmateUi100Beta7Toast;
    }, function (_beyondJsKernel0112Styles) {
      dependency_21 = _beyondJsKernel0112Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", null], ["@aimpact/chat-sdk", "1.5.4"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.0.4"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.2.2"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.4.2"], ["@aimpact/rvd", "0.5.1"]]);
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
        hash: 2524388790,
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
                    return item?.[1].includes(_routing.routing.uri.pathname);
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