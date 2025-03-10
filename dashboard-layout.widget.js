System.register(["@beyond-js/widgets@1.1.1/render", "@beyond-js/kernel@0.1.9/bundle", "@aimpact/reactive@0.0.1/model", "@aimpact/ailearn-app@0.3.20/widgets/breadcrumb.widget", "@beyond-js/react-18-widgets@1.1.3/base", "@aimpact/chat-sdk@1.4.1/core", "@aimpact/chat-sdk@1.4.1/wrapper", "react@18.2.0", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.3.20/components/navbar-header.code", "@beyond-js/react-18-widgets@1.1.3/hooks", "pragmate-ui@1.0.0-beta.7/icons", "pragmate-ui@1.0.0-beta.7/toast", "@aimpact/ailearn-app@0.3.20/components/ui", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, bimport, __Bundle, __pkg, ims, LayoutBroker, Controller, Header, OverlayHeader, __beyond_pkg, hmr;
  _export({
    LayoutBroker: void 0,
    Controller: void 0,
    Header: void 0,
    OverlayHeader: void 0
  });
  return {
    setters: [function (_beyondJsWidgets111Render) {
      dependency_0 = _beyondJsWidgets111Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_aimpactReactive001Model) {
      dependency_2 = _aimpactReactive001Model;
    }, function (_aimpactAilearnApp0320WidgetsBreadcrumbWidget) {
      dependency_3 = _aimpactAilearnApp0320WidgetsBreadcrumbWidget;
    }, function (_beyondJsReact18Widgets113Base) {
      dependency_4 = _beyondJsReact18Widgets113Base;
    }, function (_aimpactChatSdk141Core) {
      dependency_5 = _aimpactChatSdk141Core;
    }, function (_aimpactChatSdk141Wrapper) {
      dependency_6 = _aimpactChatSdk141Wrapper;
    }, function (_react2) {
      dependency_7 = _react2;
    }, function (_framerMotion2) {
      dependency_8 = _framerMotion2;
    }, function (_aimpactAilearnApp0320ComponentsNavbarHeaderCode) {
      dependency_9 = _aimpactAilearnApp0320ComponentsNavbarHeaderCode;
    }, function (_beyondJsReact18Widgets113Hooks) {
      dependency_10 = _beyondJsReact18Widgets113Hooks;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_11 = _pragmateUi100Beta7Icons;
    }, function (_pragmateUi100Beta7Toast) {
      dependency_12 = _pragmateUi100Beta7Toast;
    }, function (_aimpactAilearnApp0320ComponentsUi) {
      dependency_13 = _aimpactAilearnApp0320ComponentsUi;
    }, function (_beyondJsKernel019Styles) {
      dependency_14 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.1.0"], ["@aimpact/ailearn-api", null], ["@aimpact/auth", null], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.1"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.3"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["@google-cloud/storage", "7.15.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.24.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.20"], ["@aimpact/ailearn-app", "0.3.20"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.3.20/dashboard-layout",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@aimpact/reactive/model', dependency_2], ['@aimpact/ailearn-app/widgets/breadcrumb.widget', dependency_3], ['@beyond-js/react-18-widgets/base', dependency_4], ['@aimpact/chat-sdk/core', dependency_5], ['@aimpact/chat-sdk/wrapper', dependency_6], ['react', dependency_7], ['framer-motion', dependency_8], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_9], ['@beyond-js/react-18-widgets/hooks', dependency_10], ['pragmate-ui/icons', dependency_11], ['pragmate-ui/toast', dependency_12], ['@aimpact/ailearn-app/components/ui', dependency_13], ['@beyond-js/kernel/styles', dependency_14]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "dashboard-layout",
        "vspecifier": "@aimpact/ailearn-app@0.3.20/dashboard-layout.widget",
        "is": "layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.3.20/dashboard-layout.widget');
      ims = new Map();
      /************************
      INTERNAL MODULE: ./broker
      ************************/
      ims.set('./broker', {
        hash: 2470891848,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LayoutBroker = exports.Broker = void 0;
          var _model = require("@aimpact/reactive/model");
          var _breadcrumb = require("@aimpact/ailearn-app/widgets/breadcrumb.widget");
          class Broker extends _model.ReactiveModel {
            #model;
            get model() {
              return this.#model;
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
            constructor() {
              super({
                properties: ['title', 'backLink', 'overlay', 'refresh']
              });
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
            setBackLink(backLink) {
              this.backLink = backLink;
              this.overlay = true;
              this.triggerEvent();
            }
            setModel(model) {
              this.#model = model;
              this.triggerEvent();
            }
            set({
              breadcrumb,
              ...props
            }) {
              super.set(props);
              this.breadcrumb.set({
                items: breadcrumb
              });
              return {
                updated: true
              };
            }
            onRefresh() {
              this.refresh();
            }
          }
          exports.Broker = Broker;
          /*bundle */
          const LayoutBroker = exports.LayoutBroker = new Broker();
          globalThis.broker = LayoutBroker;
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
        hash: 4169148919,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _model = require("@aimpact/reactive/model");
          var _wrapper = require("@aimpact/chat-sdk/wrapper");
          var _broker = require("./broker");
          class StoreManager extends _model.ReactiveModel {
            #broker;
            get broker() {
              return this.#broker;
            }
            get model() {
              return this.#broker.model;
            }
            constructor() {
              super();
              _wrapper.AppWrapper.on('change', this.listener);
              this.#broker = _broker.LayoutBroker;
              this.#broker.on('change', this.triggerEvent);
              globalThis.lc = this;
              console.log('layout controller is being exposed as lc in the global scope');
              this.init();
            }
            init = async () => {
              await _wrapper.AppWrapper.isReady;
              this.ready = true;
            };
            listener = () => {};
            refresh = () => {
              if (!this.#broker?.model?.refresh) return;
              this.#broker.model.refresh();
            };
          }
          exports.StoreManager = StoreManager;
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
        hash: 3601472685,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Header = Header;
          var _react = require("react");
          var _navbarHeader = require("@aimpact/ailearn-app/components/navbar-header.code");
          var _context = require("../context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          /*bundle*/
          function Header() {
            const {
              store
            } = (0, _context.useLayoutContext)();
            const [hasModel, setHasModel] = _react.default.useState(!!store.broker.model);
            (0, _hooks.useBinder)([store.broker], () => {
              setHasModel(!!store.broker.model);
            });
            return _react.default.createElement(_navbarHeader.NavbarHeader, {
              store: store
            });
          }
        }
      });

      /************************************************
      INTERNAL MODULE: ./view/components/overlay-header
      ************************************************/

      ims.set('./view/components/overlay-header', {
        hash: 3271070740,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.OverlayHeader = OverlayHeader;
          var _react = require("react");
          var _navbarHeader = require("@aimpact/ailearn-app/components/navbar-header.code");
          var _context = require("../context");
          var _icons = require("pragmate-ui/icons");
          /*bundle*/
          function OverlayHeader() {
            const {
              store
            } = (0, _context.useLayoutContext)();
            return _react.default.createElement(_navbarHeader.NavbarHeader, {
              store: store,
              closable: true,
              backlink: store.broker.backLink,
              detail: store.broker.overlayLabel
            }, store.broker.refresh && _react.default.createElement(_icons.IconButton, {
              icon: "refresh",
              className: "circle",
              onClick: () => store.broker.onRefresh()
            }));
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
        hash: 3236677484,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Layout = void 0;
          var _react = require("react");
          var _toast = require("pragmate-ui/toast");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("./context");
          var _header = require("./components/header");
          var _beyond_context = require("beyond_context");
          var _overlayHeader = require("./components/overlay-header");
          const Layout = ({
            store
          }) => {
            const [ready, setReady] = (0, _react.useState)(store.ready);
            (0, _hooks.useBinder)([store], () => setReady(store.ready));
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            const [showCoinsModal, setShowCoinsModal] = _react.default.useState(false);
            const [showCoinsAlert, setShowCoinsAlert] = _react.default.useState(false);
            const [, setUpdate] = (0, _react.useState)({});
            const toggleCoinsAlert = () => setShowCoinsAlert(!showCoinsAlert);
            const toggleCoinsModal = () => setShowCoinsModal(!showCoinsModal);
            (0, _hooks.useBinder)([store.broker], toggleCoinsAlert, 'no.credits');
            (0, _hooks.useBinder)([store], () => setUpdate({}));
            if (!textsReady || !ready) return _react.default.createElement(_ui.PageLoader, {
              fetching: true
            });
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
            }, _react.default.createElement(HeaderControl, null), _react.default.createElement("main", null, _react.default.createElement("beyond-layout-children", null), _react.default.createElement(_toast.Toasts, null)))));
          };
          exports.Layout = Layout;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX2JyZWFkY3J1bWIiLCJCcm9rZXIiLCJSZWFjdGl2ZU1vZGVsIiwibW9kZWwiLCJtZXNzYWdlIiwiYnJlYWRjcnVtYiIsImJyZWFkY3J1bWJTdG9yZSIsInNob3dDcmVkaXRzIiwiY29uc3RydWN0b3IiLCJwcm9wZXJ0aWVzIiwic2hvd01lc3NhZ2UiLCJ0eXBlIiwidHJpZ2dlciIsImdsb2JhbFRoaXMiLCJzZXRUaW1lb3V0IiwidW5kZWZpbmVkIiwiY2xlYXIiLCJvdmVybGF5IiwidHJpZ2dlckV2ZW50Iiwic2V0QmFja0xpbmsiLCJiYWNrTGluayIsInNldE1vZGVsIiwic2V0IiwicHJvcHMiLCJpdGVtcyIsInVwZGF0ZWQiLCJvblJlZnJlc2giLCJyZWZyZXNoIiwiZXhwb3J0cyIsIkxheW91dEJyb2tlciIsImJyb2tlciIsIl9iYXNlIiwiX3N0b3JlIiwiX3ZpZXciLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsIkxheW91dCIsIl93cmFwcGVyIiwiX2Jyb2tlciIsIkFwcFdyYXBwZXIiLCJvbiIsImxpc3RlbmVyIiwibGMiLCJjb25zb2xlIiwibG9nIiwiaW5pdCIsImlzUmVhZHkiLCJyZWFkeSIsIl9yZWFjdCIsIl9mcmFtZXJNb3Rpb24iLCJBbmltYXRlZExhYmVsIiwiY2hpbGRyZW4iLCJzaG93Iiwic2V0U2hvdyIsImRlZmF1bHQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImNyZWF0ZUVsZW1lbnQiLCJBbmltYXRlUHJlc2VuY2UiLCJtb3Rpb24iLCJzcGFuIiwibGF5b3V0IiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJ3aWR0aCIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJleGl0IiwiQW5pbWF0ZWQiLCJjbGFzc05hbWUiLCJhcyIsIkNvbXBvbmVudCIsIl9uYXZiYXJIZWFkZXIiLCJfY29udGV4dCIsIl9ob29rcyIsIkhlYWRlciIsInVzZUxheW91dENvbnRleHQiLCJoYXNNb2RlbCIsInNldEhhc01vZGVsIiwidXNlQmluZGVyIiwiTmF2YmFySGVhZGVyIiwiX2ljb25zIiwiT3ZlcmxheUhlYWRlciIsImNsb3NhYmxlIiwiYmFja2xpbmsiLCJkZXRhaWwiLCJvdmVybGF5TGFiZWwiLCJJY29uQnV0dG9uIiwiaWNvbiIsIm9uQ2xpY2siLCJMYXlvdXRDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfdG9hc3QiLCJfdWkiLCJfaGVhZGVyIiwiX2JleW9uZF9jb250ZXh0IiwiX292ZXJsYXlIZWFkZXIiLCJzZXRSZWFkeSIsInRleHRzUmVhZHkiLCJ0ZXh0cyIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwic2hvd0NvaW5zTW9kYWwiLCJzZXRTaG93Q29pbnNNb2RhbCIsInNob3dDb2luc0FsZXJ0Iiwic2V0U2hvd0NvaW5zQWxlcnQiLCJzZXRVcGRhdGUiLCJ0b2dnbGVDb2luc0FsZXJ0IiwidG9nZ2xlQ29pbnNNb2RhbCIsIlBhZ2VMb2FkZXIiLCJmZXRjaGluZyIsInZhbHVlIiwiSGVhZGVyQ29udHJvbCIsIkZyYWdtZW50IiwiUHJvdmlkZXIiLCJUb2FzdHMiXSwic291cmNlcyI6WyIvdHMvYnJva2VyLnRzIiwiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlldy9jb21wb25lbnRzL2FuaW1hdGVkLWxhYmVsLnRzeCIsIi90cy92aWV3L2NvbXBvbmVudHMvYW5pbWF0ZWQudHN4IiwiL3RzL3ZpZXcvY29tcG9uZW50cy9oZWFkZXIudHN4IiwiL3RzL3ZpZXcvY29tcG9uZW50cy9vdmVybGF5LWhlYWRlci50c3giLCIvdHMvdmlldy9jb250ZXh0LnRzIiwiL3RzL3ZpZXcvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6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