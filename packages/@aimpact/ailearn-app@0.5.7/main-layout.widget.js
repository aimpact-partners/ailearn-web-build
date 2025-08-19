System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.12/bundle", "@beyond-js/reactive@2.1.1/model", "@aimpact/ailearn-app@0.5.7/widgets/breadcrumb.widget", "@aimpact/ailearn-app@0.5.7/i18n.ts", "@beyond-js/kernel@0.1.12/routing", "@beyond-js/react-18-widgets@1.1.4/base", "@aimpact/chat-sdk@1.5.5/core", "@aimpact/chat-sdk@1.5.5/wrapper", "@beyond-js/kernel@0.1.12/texts", "react@18.3.1", "pragmate-ui@1.0.6/modal", "@beyond-js/react-18-widgets@1.1.4/hooks", "pragmate-ui@1.0.6/chips", "pragmate-ui@1.0.6/components", "@aimpact/ailearn-app@0.5.7/components/ui", "@aimpact/ailearn-app@0.5.7/shared/hooks", "pragmate-ui@1.0.6/icons", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.5.7/components/navbar-header.code", "pragmate-ui@1.0.6/toast", "@beyond-js/kernel@0.1.12/styles"], function (_export, _context2) {
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
    }, function (_beyondJsReactive211Model) {
      dependency_2 = _beyondJsReactive211Model;
    }, function (_aimpactAilearnApp057WidgetsBreadcrumbWidget) {
      dependency_3 = _aimpactAilearnApp057WidgetsBreadcrumbWidget;
    }, function (_aimpactAilearnApp057I18nTs) {
      dependency_4 = _aimpactAilearnApp057I18nTs;
    }, function (_beyondJsKernel0112Routing) {
      dependency_5 = _beyondJsKernel0112Routing;
    }, function (_beyondJsReact18Widgets114Base) {
      dependency_6 = _beyondJsReact18Widgets114Base;
    }, function (_aimpactChatSdk155Core) {
      dependency_7 = _aimpactChatSdk155Core;
    }, function (_aimpactChatSdk155Wrapper) {
      dependency_8 = _aimpactChatSdk155Wrapper;
    }, function (_beyondJsKernel0112Texts) {
      dependency_9 = _beyondJsKernel0112Texts;
    }, function (_react2) {
      dependency_10 = _react2;
    }, function (_pragmateUi106Modal) {
      dependency_11 = _pragmateUi106Modal;
    }, function (_beyondJsReact18Widgets114Hooks) {
      dependency_12 = _beyondJsReact18Widgets114Hooks;
    }, function (_pragmateUi106Chips) {
      dependency_13 = _pragmateUi106Chips;
    }, function (_pragmateUi106Components) {
      dependency_14 = _pragmateUi106Components;
    }, function (_aimpactAilearnApp057ComponentsUi) {
      dependency_15 = _aimpactAilearnApp057ComponentsUi;
    }, function (_aimpactAilearnApp057SharedHooks) {
      dependency_16 = _aimpactAilearnApp057SharedHooks;
    }, function (_pragmateUi106Icons) {
      dependency_17 = _pragmateUi106Icons;
    }, function (_framerMotion2) {
      dependency_18 = _framerMotion2;
    }, function (_aimpactAilearnApp057ComponentsNavbarHeaderCode) {
      dependency_19 = _aimpactAilearnApp057ComponentsNavbarHeaderCode;
    }, function (_pragmateUi106Toast) {
      dependency_20 = _pragmateUi106Toast;
    }, function (_beyondJsKernel0112Styles) {
      dependency_21 = _beyondJsKernel0112Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.6"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.1.1"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["@radix-ui/react-accordion", "1.2.12"], ["@radix-ui/react-collapsible", "1.1.12"], ["@radix-ui/react-icons", "1.3.2"], ["@tiptap/extension-blockquote", "3.2.0"], ["@tiptap/extension-code-block", "3.2.0"], ["@tiptap/extension-horizontal-rule", "3.2.0"], ["@tiptap/extension-task-item", "3.2.0"], ["@tiptap/extension-task-list", "3.2.0"], ["@tiptap/extension-underline", "3.2.0"], ["@tiptap/pm", "3.2.0"], ["@tiptap/react", "3.2.0"], ["@tiptap/starter-kit", "3.2.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.4.0"], ["react-virtuoso", "4.14.0"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["turndown", "7.2.0"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.5.7"], ["@aimpact/rvd", "0.5.7"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.5.7/main-layout",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/reactive/model', dependency_2], ['@aimpact/ailearn-app/widgets/breadcrumb.widget', dependency_3], ['@aimpact/ailearn-app/i18n.ts', dependency_4], ['@beyond-js/kernel/routing', dependency_5], ['@beyond-js/react-18-widgets/base', dependency_6], ['@aimpact/chat-sdk/core', dependency_7], ['@aimpact/chat-sdk/wrapper', dependency_8], ['@beyond-js/kernel/texts', dependency_9], ['react', dependency_10], ['pragmate-ui/modal', dependency_11], ['@beyond-js/react-18-widgets/hooks', dependency_12], ['pragmate-ui/chips', dependency_13], ['pragmate-ui/components', dependency_14], ['@aimpact/ailearn-app/components/ui', dependency_15], ['@aimpact/ailearn-app/shared/hooks', dependency_16], ['pragmate-ui/icons', dependency_17], ['framer-motion', dependency_18], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_19], ['pragmate-ui/toast', dependency_20], ['@beyond-js/kernel/styles', dependency_21]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "main-layout",
        "vspecifier": "@aimpact/ailearn-app@0.5.7/main-layout.widget",
        "is": "layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.5.7/main-layout.widget');
      ims = new Map();
      /************************
      INTERNAL MODULE: ./broker
      ************************/
      ims.set('./broker', {
        hash: 3682149980,
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
                let exists = this.breadcrumb.items?.findIndex(item => item?.[1] === _routing.routing.uri.pathname);
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
                    if (!item?.[1] || !Array.isArray(item?.[1])) return;
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
                const newItems = this.breadcrumb.items?.slice(0, exists + 1);
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
        hash: 3964216279,
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
          var _hooks = require("@aimpact/ailearn-app/shared/hooks");
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
        hash: 498352045,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Header = Header;
          var _react = require("react");
          var _navbarHeader = require("@aimpact/ailearn-app/components/navbar-header.code");
          var _icons = require("pragmate-ui/icons");
          var _hooks = require("@aimpact/ailearn-app/shared/hooks");
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
        hash: 4015851082,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Layout = void 0;
          var _hooks = require("@aimpact/ailearn-app/shared/hooks");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _toast = require("pragmate-ui/toast");
          var _react = require("react");
          var _alert = require("./coins/alert");
          var _notificationsBar = require("./coins/notifications-bar");
          var _header = require("./components/header");
          var _context = require("./context");
          const Layout = ({
            store
          }) => {
            const [showCoinsModal, setShowCoinsModal] = _react.default.useState(false);
            const [showCoinsAlert, setShowCoinsAlert] = _react.default.useState(false);
            const toggleCoinsAlert = () => setShowCoinsAlert(!showCoinsAlert);
            const toggleCoinsModal = () => setShowCoinsModal(!showCoinsModal);
            const ref = _react.default.useRef();
            (0, _hooks.useStore)(store.broker, ['no.credits'], toggleCoinsAlert);
            (0, _hooks.useStore)(store);
            const {
              texts,
              ready
            } = store;
            const value = {
              store,
              texts,
              toggleCoinsModal,
              overlay: store.broker?.overlay
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX2JyZWFkY3J1bWIiLCJfaTE4biIsIl9yb3V0aW5nIiwiQnJva2VyIiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwiaGFzQ3JlZGl0cyIsImNyZWRpdHMiLCJ0b3RhbCIsIm1lc3NhZ2UiLCJicmVhZGNydW1iIiwiYnJlYWRjcnVtYlN0b3JlIiwic2hvd0NyZWRpdHMiLCJnbG9iYWxUZXh0cyIsInRleHRzIiwiY2FuQ29uc3VtZUNyZWRpdHMiLCJ2YWx1ZSIsInRyaWdnZXIiLCJwcmV2aW91c1BhdGhuYW1lIiwicm91dGluZyIsInVyaSIsInBhdGhuYW1lIiwiY29uc3RydWN0b3IiLCJwcm9wZXJ0aWVzIiwiZW5zdXJlQ3JlZGl0cyIsImJpbmQiLCJvbiIsInRyaWdnZXJFdmVudCIsImV4aXN0cyIsIml0ZW1zIiwiZmluZEluZGV4IiwiaXRlbSIsImZpbmRMYXN0SW5kZXgiLCJhcnJheSIsInByZWRpY2F0ZSIsImkiLCJsZW5ndGgiLCJsYXN0SW5kZXgiLCJBcnJheSIsImlzQXJyYXkiLCJpbmNsdWRlcyIsIm5ld0l0ZW1zIiwic2xpY2UiLCJzZXQiLCJnbG9iYWxUaGlzIiwibGF5b3V0IiwiYWRkTW9kZWwiLCJpZCIsInVuZGVmaW5lZCIsIm9uTGlzdGVuIiwiY2xlYXJNb2RlbCIsInNhdmVkIiwiY2FsbGJhY2siLCJzcGVjcyIsImNvbnNvbGUiLCJlcnJvciIsInNob3dNZXNzYWdlIiwidHlwZSIsInNldFRpbWVvdXQiLCJjbGVhciIsIm92ZXJsYXkiLCJzZXRUaXRsZSIsInRpdGxlIiwib25SZWZyZXNoIiwicmVmcmVzaCIsImZvcmNlIiwicHJvcHMiLCJ1cGRhdGVkIiwiZXhwb3J0cyIsIkxheW91dEJyb2tlciIsIl9iYXNlIiwiX3N0b3JlIiwiX3ZpZXciLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsIkxheW91dCIsIl93cmFwcGVyIiwiX2Jyb2tlciIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsImlzU3RvcmUiLCJicm9rZXIiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJyZWFkeSIsImluaXQiLCJBcHBXcmFwcGVyIiwiaXNSZWFkeSIsImxpc3RlbiIsImNsb3NlIiwib2ZmIiwiX3JlYWN0IiwiX21vZGFsIiwiQ29pbnNBbGVydCIsInNob3ciLCJvbkNsb3NlIiwiY29pbnMiLCJhbGVydCIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiQWxlcnRNb2RhbCIsImJ1dHRvbkxhYmVsIiwiYWN0aW9uIiwib25Db25maXJtIiwiZGVzY3JpcHRpb24iLCJfY2hpcHMiLCJfY29tcG9uZW50cyIsIl9hbmltYXRlZExhYmVsIiwiX2NvbnRleHQiLCJfdWkiLCJfaG9va3MiLCJDcmVkaXRzQ29udGFpbmVyIiwidG9nZ2xlQ29pbnNNb2RhbCIsInVzZUxheW91dENvbnRleHQiLCJzZXRNZXNzYWdlIiwidXNlU3RhdGUiLCJzZXRIYXNDcmVkaXRzIiwicmVmIiwidXNlUmVmIiwiY2xzIiwic2V0Q3JlZGl0cyIsImdldFByb3BlcnRpZXMiLCJjb25zdW1lZCIsIm9uQ3JlZGl0c0NoYW5nZSIsImN1cnJlbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJtZXNzYWdlcyIsInVzZVN0b3JlIiwiaGVhZGVyIiwiQ29udHJvbCIsImF0dHJzIiwiY2xhc3NOYW1lIiwib25DbGljayIsInZhcmlhbnQiLCJkaXNhYmxlZCIsIkJ1dHRvbiIsIkNoaXAiLCJwZXJjZW50YWdlQXZhaWxhYmxlIiwibGFiZWwiLCJhY3Rpb25zIiwiYXZhaWxhYmxlIiwiQW5pbWF0ZWRMYWJlbCIsIkZyYWdtZW50IiwiQmF0dGVyeSIsInBlcmNlbnQiLCJfaWNvbnMiLCJfZnJhbWVyTW90aW9uIiwiX2FuaW1hdGVkIiwiTm90aWZpY2F0aW9uc0JhciIsInNldFNob3ciLCJ1c2VCaW5kZXIiLCJBbmltYXRlUHJlc2VuY2UiLCJBbmltYXRlZCIsImFzIiwiSHRtbFdyYXBwZXIiLCJJY29uIiwiaWNvbiIsImNoaWxkcmVuIiwidXNlRWZmZWN0IiwibW90aW9uIiwic3BhbiIsImluaXRpYWwiLCJvcGFjaXR5Iiwid2lkdGgiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZXhpdCIsIkNvbXBvbmVudCIsIl9uYXZiYXJIZWFkZXIiLCJfY3JlZGl0cyIsIkhlYWRlciIsImhhc01vZGVsIiwiY2xvc2FibGUiLCJiYWNrbGluayIsImJhY2tMaW5rIiwiTmF2YmFySGVhZGVyIiwiSWNvbkJ1dHRvbiIsIlJlYWN0IiwiT3ZlcmxheUhlYWRlciIsIkxheW91dENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX3RvYXN0IiwiX2FsZXJ0IiwiX25vdGlmaWNhdGlvbnNCYXIiLCJfaGVhZGVyIiwic2hvd0NvaW5zTW9kYWwiLCJzZXRTaG93Q29pbnNNb2RhbCIsInNob3dDb2luc0FsZXJ0Iiwic2V0U2hvd0NvaW5zQWxlcnQiLCJ0b2dnbGVDb2luc0FsZXJ0IiwibW9kZWxUeXBlIiwiUHJvdmlkZXIiLCJUb2FzdHMiLCJDb2luc01vZGFsIiwib3duZXIiLCJvbkNvbnN1bWUiLCJjb25zdW1lQ29pbnMiLCJQcmVsb2FkIl0sInNvdXJjZXMiOlsiLy90cy9icm9rZXIudHMiLCIvL3RzL2NvbnRyb2xsZXIudHMiLCIvL3RzL3N0b3JlLnRzIiwiLy90cy92aWV3L2NvaW5zL2FsZXJ0LnRzeCIsIi8vdHMvdmlldy9jb2lucy9jcmVkaXRzLnRzeCIsIi8vdHMvdmlldy9jb2lucy9ub3RpZmljYXRpb25zLWJhci50c3giLCIvL3RzL3ZpZXcvY29tcG9uZW50cy9hbmltYXRlZC1sYWJlbC50c3giLCIvL3RzL3ZpZXcvY29tcG9uZW50cy9hbmltYXRlZC50c3giLCIvL3RzL3ZpZXcvY29tcG9uZW50cy9oZWFkZXIudHN4IiwiLy90cy92aWV3L2NvbXBvbmVudHMvb3ZlcmxheS1oZWFkZXIudHN4IiwiLy90cy92aWV3L2NvbnRleHQudHMiLCIvL2dsb2JhbC50c3gvIiwiLy90cy92aWV3L2luZGV4LnRzeCIsIi8vdHMvdmlldy9wcmVsb2FkLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLFdBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLEtBQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFHLFFBQUEsR0FBQUgsT0FBQTtVQVdNLE1BQU9JLE1BQU8sU0FBUUwsTUFBQSxDQUFBTSxhQUFzQjtZQUVqRCxDQUFBQyxLQUFNO1lBTU4sSUFBSUEsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU07WUFDbkI7WUFDQSxJQUFJQyxVQUFVQSxDQUFBO2NBQ2IsT0FBTyxJQUFJLENBQUMsQ0FBQUQsS0FBTSxFQUFFRSxPQUFPLEVBQUVDLEtBQUssR0FBRyxDQUFDO1lBQ3ZDO1lBRUEsQ0FBQUMsT0FBUTtZQUNSLElBQUlBLE9BQU9BLENBQUE7Y0FDVixPQUFPLElBQUksQ0FBQyxDQUFBQSxPQUFRO1lBQ3JCO1lBRUEsSUFBSUMsVUFBVUEsQ0FBQTtjQUNiLE9BQU9WLFdBQUEsQ0FBQVcsZUFBc0I7WUFDOUI7WUFFQSxDQUFBQyxXQUFZO1lBQ1osSUFBSUEsV0FBV0EsQ0FBQTtjQUNkLE9BQU8sSUFBSSxDQUFDLENBQUFBLFdBQVk7WUFDekI7WUFFQSxJQUFJQyxXQUFXQSxDQUFBO2NBQ2QsT0FBT1osS0FBQSxDQUFBWSxXQUFXLENBQUNDLEtBQUs7WUFDekI7WUFDQTs7Ozs7WUFLQSxDQUFBQyxpQkFBa0I7WUFD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