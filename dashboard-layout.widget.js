System.register(["@beyond-js/widgets@1.1.1/render", "@beyond-js/kernel@0.1.9/bundle", "@aimpact/reactive@0.0.1/model", "@aimpact/ailearn-app@0.3.1/widgets/breadcrumb.widget", "@beyond-js/react-18-widgets@1.1.2/base", "@aimpact/chat-sdk@1.4.1/core", "@aimpact/chat-sdk@1.4.1/wrapper", "react@18.2.0", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.3.1/components/navbar-header.code", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.7/icons", "pragmate-ui@1.0.0-beta.7/toast", "@aimpact/ailearn-app@0.3.1/components/ui", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp031WidgetsBreadcrumbWidget) {
      dependency_3 = _aimpactAilearnApp031WidgetsBreadcrumbWidget;
    }, function (_beyondJsReact18Widgets112Base) {
      dependency_4 = _beyondJsReact18Widgets112Base;
    }, function (_aimpactChatSdk141Core) {
      dependency_5 = _aimpactChatSdk141Core;
    }, function (_aimpactChatSdk141Wrapper) {
      dependency_6 = _aimpactChatSdk141Wrapper;
    }, function (_react2) {
      dependency_7 = _react2;
    }, function (_framerMotion2) {
      dependency_8 = _framerMotion2;
    }, function (_aimpactAilearnApp031ComponentsNavbarHeaderCode) {
      dependency_9 = _aimpactAilearnApp031ComponentsNavbarHeaderCode;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_10 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_11 = _pragmateUi100Beta7Icons;
    }, function (_pragmateUi100Beta7Toast) {
      dependency_12 = _pragmateUi100Beta7Toast;
    }, function (_aimpactAilearnApp031ComponentsUi) {
      dependency_13 = _aimpactAilearnApp031ComponentsUi;
    }, function (_beyondJsKernel019Styles) {
      dependency_14 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", null], ["@aimpact/auth", null], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.1"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["@google-cloud/storage", "7.15.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.24.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.1"], ["@aimpact/ailearn-app", "0.3.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.3.1/dashboard-layout",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@aimpact/reactive/model', dependency_2], ['@aimpact/ailearn-app/widgets/breadcrumb.widget', dependency_3], ['@beyond-js/react-18-widgets/base', dependency_4], ['@aimpact/chat-sdk/core', dependency_5], ['@aimpact/chat-sdk/wrapper', dependency_6], ['react', dependency_7], ['framer-motion', dependency_8], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_9], ['@beyond-js/react-18-widgets/hooks', dependency_10], ['pragmate-ui/icons', dependency_11], ['pragmate-ui/toast', dependency_12], ['@aimpact/ailearn-app/components/ui', dependency_13], ['@beyond-js/kernel/styles', dependency_14]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "dashboard-layout",
        "vspecifier": "@aimpact/ailearn-app@0.3.1/dashboard-layout.widget",
        "is": "layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.3.1/dashboard-layout.widget');
      ims = new Map();
      /************************
      INTERNAL MODULE: ./broker
      ************************/
      ims.set('./broker', {
        hash: 3876706514,
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
                properties: ['title', 'backLink', 'overlay']
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
        hash: 1569896734,
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
          var _icons = require("pragmate-ui/icons");
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
            }, _react.default.createElement(_icons.IconButton, {
              className: " circle",
              icon: "refresh",
              onClick: store.refresh
            }));
          }
        }
      });

      /************************************************
      INTERNAL MODULE: ./view/components/overlay-header
      ************************************************/

      ims.set('./view/components/overlay-header', {
        hash: 3497617082,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.OverlayHeader = OverlayHeader;
          var _react = require("react");
          var _navbarHeader = require("@aimpact/ailearn-app/components/navbar-header.code");
          var _context = require("../context");
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
            });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX2JyZWFkY3J1bWIiLCJCcm9rZXIiLCJSZWFjdGl2ZU1vZGVsIiwibW9kZWwiLCJtZXNzYWdlIiwiYnJlYWRjcnVtYiIsImJyZWFkY3J1bWJTdG9yZSIsInNob3dDcmVkaXRzIiwiY29uc3RydWN0b3IiLCJwcm9wZXJ0aWVzIiwic2hvd01lc3NhZ2UiLCJ0eXBlIiwidHJpZ2dlciIsImdsb2JhbFRoaXMiLCJzZXRUaW1lb3V0IiwidW5kZWZpbmVkIiwiY2xlYXIiLCJvdmVybGF5IiwidHJpZ2dlckV2ZW50Iiwic2V0QmFja0xpbmsiLCJiYWNrTGluayIsInNldE1vZGVsIiwic2V0IiwicHJvcHMiLCJpdGVtcyIsInVwZGF0ZWQiLCJleHBvcnRzIiwiTGF5b3V0QnJva2VyIiwiX2Jhc2UiLCJfc3RvcmUiLCJfdmlldyIsIkNvbnRyb2xsZXIiLCJSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiV2lkZ2V0IiwiTGF5b3V0IiwiX3dyYXBwZXIiLCJfYnJva2VyIiwiYnJva2VyIiwiQXBwV3JhcHBlciIsIm9uIiwibGlzdGVuZXIiLCJsYyIsImNvbnNvbGUiLCJsb2ciLCJpbml0IiwiaXNSZWFkeSIsInJlYWR5IiwicmVmcmVzaCIsIl9yZWFjdCIsIl9mcmFtZXJNb3Rpb24iLCJBbmltYXRlZExhYmVsIiwiY2hpbGRyZW4iLCJzaG93Iiwic2V0U2hvdyIsImRlZmF1bHQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImNyZWF0ZUVsZW1lbnQiLCJBbmltYXRlUHJlc2VuY2UiLCJtb3Rpb24iLCJzcGFuIiwibGF5b3V0IiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJ3aWR0aCIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJleGl0IiwiQW5pbWF0ZWQiLCJjbGFzc05hbWUiLCJhcyIsIkNvbXBvbmVudCIsIl9uYXZiYXJIZWFkZXIiLCJfY29udGV4dCIsIl9ob29rcyIsIl9pY29ucyIsIkhlYWRlciIsInVzZUxheW91dENvbnRleHQiLCJoYXNNb2RlbCIsInNldEhhc01vZGVsIiwidXNlQmluZGVyIiwiTmF2YmFySGVhZGVyIiwiSWNvbkJ1dHRvbiIsImljb24iLCJvbkNsaWNrIiwiT3ZlcmxheUhlYWRlciIsImNsb3NhYmxlIiwiYmFja2xpbmsiLCJkZXRhaWwiLCJvdmVybGF5TGFiZWwiLCJMYXlvdXRDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfdG9hc3QiLCJfdWkiLCJfaGVhZGVyIiwiX2JleW9uZF9jb250ZXh0IiwiX292ZXJsYXlIZWFkZXIiLCJzZXRSZWFkeSIsInRleHRzUmVhZHkiLCJ0ZXh0cyIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwic2hvd0NvaW5zTW9kYWwiLCJzZXRTaG93Q29pbnNNb2RhbCIsInNob3dDb2luc0FsZXJ0Iiwic2V0U2hvd0NvaW5zQWxlcnQiLCJzZXRVcGRhdGUiLCJ0b2dnbGVDb2luc0FsZXJ0IiwidG9nZ2xlQ29pbnNNb2RhbCIsIlBhZ2VMb2FkZXIiLCJmZXRjaGluZyIsInZhbHVlIiwiSGVhZGVyQ29udHJvbCIsIkZyYWdtZW50IiwiUHJvdmlkZXIiLCJUb2FzdHMiXSwic291cmNlcyI6WyIvdHMvYnJva2VyLnRzIiwiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlldy9jb21wb25lbnRzL2FuaW1hdGVkLWxhYmVsLnRzeCIsIi90cy92aWV3L2NvbXBvbmVudHMvYW5pbWF0ZWQudHN4IiwiL3RzL3ZpZXcvY29tcG9uZW50cy9oZWFkZXIudHN4IiwiL3RzL3ZpZXcvY29tcG9uZW50cy9vdmVybGF5LWhlYWRlci50c3giLCIvdHMvdmlldy9jb250ZXh0LnRzIiwiL3RzL3ZpZXcvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsV0FBQSxHQUFBRCxPQUFBO1VBUU0sTUFBT0UsTUFBTyxTQUFRSCxNQUFBLENBQUFJLGFBQXNCO1lBQ2pELENBQUFDLEtBQU07WUFHTixJQUFJQSxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsS0FBTTtZQUNuQjtZQUVBLENBQUFDLE9BQVE7WUFDUixJQUFJQSxPQUFPQSxDQUFBO2NBQ1YsT0FBTyxJQUFJLENBQUMsQ0FBQUEsT0FBUTtZQUNyQjtZQUVBLElBQUlDLFVBQVVBLENBQUE7Y0FDYixPQUFPTCxXQUFBLENBQUFNLGVBQWU7WUFDdkI7WUFFQSxDQUFBQyxXQUFZO1lBQ1osSUFBSUEsV0FBV0EsQ0FBQTtjQUNkLE9BQU8sSUFBSSxDQUFDLENBQUFBLFdBQVk7WUFDekI7WUFFQUMsWUFBQTtjQUNDLEtBQUssQ0FBQztnQkFBRUMsVUFBVSxFQUFFLENBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxTQUFTO2NBQUMsQ0FBRSxDQUFDO1lBQ3hEO1lBRUFDLFdBQVdBLENBQUNDLElBQUksRUFBRVAsT0FBTztjQUN4QixJQUFJLENBQUMsQ0FBQUEsT0FBUSxHQUFHO2dCQUFFTyxJQUFJO2dCQUFFUDtjQUFPLENBQUU7Y0FDakMsSUFBSSxDQUFDUSxPQUFPLENBQUMsY0FBYyxDQUFDO2NBRTVCQyxVQUFVLENBQUNDLFVBQVUsQ0FBQyxNQUFLO2dCQUMxQixJQUFJLENBQUMsQ0FBQVYsT0FBUSxHQUFHVyxTQUFTO2NBQzFCLENBQUMsRUFBRSxJQUFJLENBQUM7WUFDVDtZQUVBQyxLQUFLQSxDQUFBO2NBQ0osSUFBSSxDQUFDLENBQUFiLEtBQU0sR0FBR1ksU0FBUztjQUV2QixJQUFJLENBQUNFLE9BQU8sR0FBRyxLQUFLO2NBQ3BCLElBQUksQ0FBQ0MsWUFBWSxFQUFFO1lBQ3BCO1lBRUFDLFdBQVdBLENBQUNDLFFBQVE7Y0FDbkIsSUFBSSxDQUFDQSxRQUFRLEdBQUdBLFFBQVE7Y0FDeEIsSUFBSSxDQUFDSCxPQUFPLEdBQUcsSUFBSTtjQUNuQixJQUFJLENBQUNDLFlBQVksRUFBRTtZQUNwQjtZQUVBRyxRQUFRQSxDQUFDbEIsS0FBSztjQUNiLElBQUksQ0FBQyxDQUFBQSxLQUFNLEdBQUdBLEtBQUs7Y0FDbkIsSUFBSSxDQUFDZSxZQUFZLEVBQUU7WUFDcEI7WUFFQUksR0FBR0EsQ0FBQztjQUFFakIsVUFBVTtjQUFFLEdBQUdrQjtZQUFLLENBQUU7Y0FDM0IsS0FBSyxDQUFDRCxHQUFHLENBQUNDLEtBQUssQ0FBQztjQUNoQixJQUFJLENBQUNsQixVQUFVLENBQUNpQixHQUFHLENBQUM7Z0JBQUVFLEtBQUssRUFBRW5CO2NBQVUsQ0FBRSxDQUFDO2NBQzFDLE9BQU87Z0JBQUVvQixPQUFPLEVBQUU7Y0FBSSxDQUFFO1lBQ3pCOztVQUNBQyxPQUFBLENBQUF6QixNQUFBLEdBQUFBLE1BQUE7VUFFTTtVQUFZLE1BQU0wQixZQUFZLEdBQUFELE9BQUEsQ0FBQUMsWUFBQSxHQUFHLElBQUkxQixNQUFNLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDckVwRCxJQUFBMkIsS0FBQSxHQUFBN0IsT0FBQTtVQUNBLElBQUE4QixNQUFBLEdBQUE5QixPQUFBO1VBQ0EsSUFBQStCLEtBQUEsR0FBQS9CLE9BQUE7VUFFTztVQUFVLE1BQ1hnQyxVQUFXLFNBQVFILEtBQUEsQ0FBQUkscUJBQXFCO1lBQzdDLENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUosTUFBQSxDQUFBTSxZQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNuQjtZQUNBLElBQUlHLE1BQU1BLENBQUE7Y0FDVCxPQUFPTixLQUFBLENBQUFPLE1BQU07WUFDZDs7VUFDQVgsT0FBQSxDQUFBSyxVQUFBLEdBQUFBLFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDZEQsSUFBQWpDLE1BQUEsR0FBQUMsT0FBQTtVQUVBLElBQUF1QyxRQUFBLEdBQUF2QyxPQUFBO1VBQ0EsSUFBQXdDLE9BQUEsR0FBQXhDLE9BQUE7VUFPTSxNQUFPb0MsWUFBYSxTQUFRckMsTUFBQSxDQUFBSSxhQUFxQjtZQUV0RCxDQUFBc0MsTUFBTztZQUNQLElBQUlBLE1BQU1BLENBQUE7Y0FDVCxPQUFPLElBQUksQ0FBQyxDQUFBQSxNQUFPO1lBQ3BCO1lBRUEsSUFBSXJDLEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBcUMsTUFBTyxDQUFDckMsS0FBSztZQUMxQjtZQUVBSyxZQUFBO2NBQ0MsS0FBSyxFQUFFO2NBQ1A4QixRQUFBLENBQUFHLFVBQVUsQ0FBQ0MsRUFBRSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUNDLFFBQVEsQ0FBQztjQUN0QyxJQUFJLENBQUMsQ0FBQUgsTUFBTyxHQUFHRCxPQUFBLENBQUFaLFlBQVk7Y0FDM0IsSUFBSSxDQUFDLENBQUFhLE1BQU8sQ0FBQ0UsRUFBRSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUN4QixZQUFZLENBQUM7Y0FDNUNMLFVBQVUsQ0FBQytCLEVBQUUsR0FBRyxJQUFJO2NBQ3BCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyw4REFBOEQsQ0FBQztjQUMzRSxJQUFJLENBQUNDLElBQUksRUFBRTtZQUNaO1lBRUFBLElBQUksR0FBRyxNQUFBQSxDQUFBLEtBQVc7Y0FDakIsTUFBTVQsUUFBQSxDQUFBRyxVQUFVLENBQUNPLE9BQU87Y0FDeEIsSUFBSSxDQUFDQyxLQUFLLEdBQUcsSUFBSTtZQUNsQixDQUFDO1lBQ0ROLFFBQVEsR0FBR0EsQ0FBQSxLQUFLLENBQUUsQ0FBQztZQUVuQk8sT0FBTyxHQUFHQSxDQUFBLEtBQUs7Y0FDZCxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUFWLE1BQU8sRUFBRXJDLEtBQUssRUFBRStDLE9BQU8sRUFBRTtjQUNuQyxJQUFJLENBQUMsQ0FBQVYsTUFBTyxDQUFDckMsS0FBSyxDQUFDK0MsT0FBTyxFQUFFO1lBQzdCLENBQUM7O1VBQ0R4QixPQUFBLENBQUFTLFlBQUEsR0FBQUEsWUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN6Q0QsSUFBQWdCLE1BQUEsR0FBQXBELE9BQUE7VUFDQSxJQUFBcUQsYUFBQSxHQUFBckQsT0FBQTtVQUNNLFNBQVVzRCxhQUFhQSxDQUFDO1lBQUVDO1VBQVEsQ0FBRTtZQUN6QyxNQUFNLENBQUNDLElBQUksRUFBRUMsT0FBTyxDQUFDLEdBQUdMLE1BQUEsQ0FBQU0sT0FBSyxDQUFDQyxRQUFRLENBQUMsQ0FBQyxDQUFDSixRQUFRLENBQUM7WUFFbERILE1BQUEsQ0FBQU0sT0FBSyxDQUFDRSxTQUFTLENBQUMsTUFBSztjQUNwQkgsT0FBTyxDQUFDRixRQUFRLENBQUM7Y0FDakJ6QyxVQUFVLENBQUNDLFVBQVUsQ0FBQyxNQUFLO2dCQUMxQjBDLE9BQU8sQ0FBQyxLQUFLLENBQUM7Y0FDZixDQUFDLEVBQUUsSUFBSSxDQUFDO1lBQ1QsQ0FBQyxFQUFFLENBQUNGLFFBQVEsQ0FBQyxDQUFDO1lBRWQsT0FDQ0gsTUFBQSxDQUFBTSxPQUFBLENBQUFHLGFBQUEsQ0FBQ1IsYUFBQSxDQUFBUyxlQUFlLFFBQ2ROLElBQUksSUFDSkosTUFBQSxDQUFBTSxPQUFBLENBQUFHLGFBQUEsQ0FBQ1IsYUFBQSxDQUFBVSxNQUFNLENBQUNDLElBQUk7Y0FDWEMsTUFBTTtjQUNOQyxPQUFPLEVBQUU7Z0JBQ1JDLE9BQU8sRUFBRSxDQUFDO2dCQUNWQyxLQUFLLEVBQUU7ZUFDUDtjQUNEQyxPQUFPLEVBQUU7Z0JBQ1JGLE9BQU8sRUFBRSxDQUFDO2dCQUNWRyxVQUFVLEVBQUU7a0JBQ1hDLFFBQVEsRUFBRTtpQkFDVjtnQkFDREgsS0FBSyxFQUFFO2VBQ1A7Y0FDREksSUFBSSxFQUFFO2dCQUNMRixVQUFVLEVBQUU7a0JBQ1hDLFFBQVEsRUFBRSxHQUFHO2tCQUNiSCxLQUFLLEVBQUU7aUJBQ1A7Z0JBQ0RELE9BQU8sRUFBRTs7WUFDVCxHQUVBWixRQUFRLENBRVYsQ0FDZ0I7VUFFcEI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDekNBLElBQUFILE1BQUEsR0FBQXBELE9BQUE7VUFDQSxJQUFBcUQsYUFBQSxHQUFBckQsT0FBQTtVQUNNLFNBQVV5RSxRQUFRQSxDQUFDO1lBQUVDLFNBQVM7WUFBRW5CLFFBQVE7WUFBRW9CLEVBQUUsR0FBRztVQUFNLENBQUU7WUFDNUQsTUFBTUMsU0FBUyxHQUFHLElBQUF2QixhQUFBLENBQUFVLE1BQU0sRUFBQ1ksRUFBRSxDQUFDO1lBQzVCLE9BQ0N2QixNQUFBLENBQUFNLE9BQUEsQ0FBQUcsYUFBQSxDQUFDZSxTQUFTO2NBQ1RYLE1BQU07Y0FDTlMsU0FBUyxFQUFFQSxTQUFTO2NBQ3BCUixPQUFPLEVBQUU7Z0JBQ1JDLE9BQU8sRUFBRTtlQUNUO2NBQ0RFLE9BQU8sRUFBRTtnQkFDUkYsT0FBTyxFQUFFLENBQUM7Z0JBQ1ZHLFVBQVUsRUFBRTtrQkFDWEMsUUFBUSxFQUFFOztlQUVYO2NBQ0RDLElBQUksRUFBRTtnQkFDTEYsVUFBVSxFQUFFO2tCQUNYQyxRQUFRLEVBQUUsR0FBRztrQkFDYkgsS0FBSyxFQUFFO2lCQUNQO2dCQUNERCxPQUFPLEVBQUU7O1lBQ1QsR0FFQVosUUFBUSxDQUNFO1VBRWQ7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDNUJBLElBQUFILE1BQUEsR0FBQXBELE9BQUE7VUFDQSxJQUFBNkUsYUFBQSxHQUFBN0UsT0FBQTtVQUNBLElBQUE4RSxRQUFBLEdBQUE5RSxPQUFBO1VBQ0EsSUFBQStFLE1BQUEsR0FBQS9FLE9BQUE7VUFDQSxJQUFBZ0YsTUFBQSxHQUFBaEYsT0FBQTtVQUNPO1VBQVUsU0FBVWlGLE1BQU1BLENBQUE7WUFDaEMsTUFBTTtjQUFFL0M7WUFBSyxDQUFFLEdBQUcsSUFBQTRDLFFBQUEsQ0FBQUksZ0JBQWdCLEdBQUU7WUFFcEMsTUFBTSxDQUFDQyxRQUFRLEVBQUVDLFdBQVcsQ0FBQyxHQUFHaEMsTUFBQSxDQUFBTSxPQUFLLENBQUNDLFFBQVEsQ0FBQyxDQUFDLENBQUN6QixLQUFLLENBQUNPLE1BQU0sQ0FBQ3JDLEtBQUssQ0FBQztZQUVwRSxJQUFBMkUsTUFBQSxDQUFBTSxTQUFTLEVBQUMsQ0FBQ25ELEtBQUssQ0FBQ08sTUFBTSxDQUFDLEVBQUUsTUFBSztjQUM5QjJDLFdBQVcsQ0FBQyxDQUFDLENBQUNsRCxLQUFLLENBQUNPLE1BQU0sQ0FBQ3JDLEtBQUssQ0FBQztZQUNsQyxDQUFDLENBQUM7WUFFRixPQUNDZ0QsTUFBQSxDQUFBTSxPQUFBLENBQUFHLGFBQUEsQ0FBQ2dCLGFBQUEsQ0FBQVMsWUFBWTtjQUFDcEQsS0FBSyxFQUFFQTtZQUFLLEdBQ3pCa0IsTUFBQSxDQUFBTSxPQUFBLENBQUFHLGFBQUEsQ0FBQ21CLE1BQUEsQ0FBQU8sVUFBVTtjQUFDYixTQUFTLEVBQUMsU0FBUztjQUFDYyxJQUFJLEVBQUMsU0FBUztjQUFDQyxPQUFPLEVBQUV2RCxLQUFLLENBQUNpQjtZQUFPLEVBQUksQ0FDM0Q7VUFFakI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbkJBLElBQUFDLE1BQUEsR0FBQXBELE9BQUE7VUFDQSxJQUFBNkUsYUFBQSxHQUFBN0UsT0FBQTtVQUVBLElBQUE4RSxRQUFBLEdBQUE5RSxPQUFBO1VBRU87VUFBVSxTQUFVMEYsYUFBYUEsQ0FBQTtZQUN2QyxNQUFNO2NBQUV4RDtZQUFLLENBQUUsR0FBRyxJQUFBNEMsUUFBQSxDQUFBSSxnQkFBZ0IsR0FBRTtZQUVwQyxPQUFPOUIsTUFBQSxDQUFBTSxPQUFBLENBQUFHLGFBQUEsQ0FBQ2dCLGFBQUEsQ0FBQVMsWUFBWTtjQUFDcEQsS0FBSyxFQUFFQSxLQUFLO2NBQUV5RCxRQUFRO2NBQUNDLFFBQVEsRUFBRTFELEtBQUssQ0FBQ08sTUFBTSxDQUFDcEIsUUFBUTtjQUFFd0UsTUFBTSxFQUFFM0QsS0FBSyxDQUFDTyxNQUFNLENBQUNxRDtZQUFZLEVBQUk7VUFDbkg7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDVEEsSUFBQTFDLE1BQUEsR0FBQXBELE9BQUE7VUFRTyxNQUFNK0YsYUFBYSxHQUFBcEUsT0FBQSxDQUFBb0UsYUFBQSxHQUFHM0MsTUFBQSxDQUFBTSxPQUFLLENBQUNzQyxhQUFhLENBQUMsRUFBb0IsQ0FBQztVQUMvRCxNQUFNZCxnQkFBZ0IsR0FBR0EsQ0FBQSxLQUFNOUIsTUFBQSxDQUFBTSxPQUFLLENBQUN1QyxVQUFVLENBQUNGLGFBQWEsQ0FBQztVQUFDcEUsT0FBQSxDQUFBdUQsZ0JBQUEsR0FBQUEsZ0JBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDVHRFLElBQUE5QixNQUFBLEdBQUFwRCxPQUFBO1VBRUEsSUFBQWtHLE1BQUEsR0FBQWxHLE9BQUE7VUFDQSxJQUFBK0UsTUFBQSxHQUFBL0UsT0FBQTtVQUNBLElBQUFtRyxHQUFBLEdBQUFuRyxPQUFBO1VBQ0EsSUFBQThFLFFBQUEsR0FBQTlFLE9BQUE7VUFDQSxJQUFBb0csT0FBQSxHQUFBcEcsT0FBQTtVQUNBLElBQUFxRyxlQUFBLEdBQUFyRyxPQUFBO1VBRUEsSUFBQXNHLGNBQUEsR0FBQXRHLE9BQUE7VUFhTyxNQUFNc0MsTUFBTSxHQUFhQSxDQUFDO1lBQUVKO1VBQUssQ0FBVSxLQUFJO1lBQ3JELE1BQU0sQ0FBQ2dCLEtBQUssRUFBRXFELFFBQVEsQ0FBQyxHQUFHLElBQUFuRCxNQUFBLENBQUFPLFFBQVEsRUFBQ3pCLEtBQUssQ0FBQ2dCLEtBQUssQ0FBQztZQUMvQyxJQUFBNkIsTUFBQSxDQUFBTSxTQUFTLEVBQUMsQ0FBQ25ELEtBQUssQ0FBQyxFQUFFLE1BQU1xRSxRQUFRLENBQUNyRSxLQUFLLENBQUNnQixLQUFLLENBQUMsQ0FBQztZQUMvQyxNQUFNLENBQUNzRCxVQUFVLEVBQUVDLEtBQUssQ0FBQyxHQUFHLElBQUExQixNQUFBLENBQUEyQixRQUFRLEVBQUNMLGVBQUEsQ0FBQU0sTUFBTSxDQUFDQyxTQUFTLENBQUM7WUFDdEQsTUFBTSxDQUFDQyxjQUFjLEVBQUVDLGlCQUFpQixDQUFDLEdBQUcxRCxNQUFBLENBQUFNLE9BQUssQ0FBQ0MsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNqRSxNQUFNLENBQUNvRCxjQUFjLEVBQUVDLGlCQUFpQixDQUFDLEdBQUc1RCxNQUFBLENBQUFNLE9BQUssQ0FBQ0MsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNqRSxNQUFNLEdBQUdzRCxTQUFTLENBQUMsR0FBRyxJQUFBN0QsTUFBQSxDQUFBTyxRQUFRLEVBQUMsRUFBRSxDQUFDO1lBQ2xDLE1BQU11RCxnQkFBZ0IsR0FBR0EsQ0FBQSxLQUFNRixpQkFBaUIsQ0FBQyxDQUFDRCxjQUFjLENBQUM7WUFDakUsTUFBTUksZ0JBQWdCLEdBQUdBLENBQUEsS0FBTUwsaUJBQWlCLENBQUMsQ0FBQ0QsY0FBYyxDQUFDO1lBRWpFLElBQUE5QixNQUFBLENBQUFNLFNBQVMsRUFBQyxDQUFDbkQsS0FBSyxDQUFDTyxNQUFNLENBQUMsRUFBRXlFLGdCQUFnQixFQUFFLFlBQVksQ0FBQztZQUN6RCxJQUFBbkMsTUFBQSxDQUFBTSxTQUFTLEVBQUMsQ0FBQ25ELEtBQUssQ0FBQyxFQUFFLE1BQU0rRSxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7WUFFdkMsSUFBSSxDQUFDVCxVQUFVLElBQUksQ0FBQ3RELEtBQUssRUFBRSxPQUFPRSxNQUFBLENBQUFNLE9BQUEsQ0FBQUcsYUFBQSxDQUFDc0MsR0FBQSxDQUFBaUIsVUFBVTtjQUFDQyxRQUFRLEVBQUU7WUFBSSxFQUFJO1lBRWhFLE1BQU1DLEtBQUssR0FBRztjQUFFcEYsS0FBSztjQUFFdUUsS0FBSztjQUFFVSxnQkFBZ0I7Y0FBRWpHLE9BQU8sRUFBRWdCLEtBQUssQ0FBQ08sTUFBTSxDQUFDdkI7WUFBTyxDQUFFO1lBRS9FLE1BQU1xRyxhQUFhLEdBQUcsQ0FBQ3JGLEtBQUssQ0FBQ08sTUFBTSxDQUFDdkIsT0FBTyxHQUFHa0YsT0FBQSxDQUFBbkIsTUFBTSxHQUFHcUIsY0FBQSxDQUFBWixhQUFhO1lBRXBFLE9BQ0N0QyxNQUFBLENBQUFNLE9BQUEsQ0FBQUcsYUFBQSxDQUFBVCxNQUFBLENBQUFNLE9BQUEsQ0FBQThELFFBQUEsUUFDQ3BFLE1BQUEsQ0FBQU0sT0FBQSxDQUFBRyxhQUFBLENBQUNpQixRQUFBLENBQUFpQixhQUFhLENBQUMwQixRQUFRO2NBQUNILEtBQUssRUFBRUE7WUFBSyxHQUNuQ2xFLE1BQUEsQ0FBQU0sT0FBQSxDQUFBRyxhQUFBO2NBQUthLFNBQVMsRUFBQztZQUF3QixHQUN0Q3RCLE1BQUEsQ0FBQU0sT0FBQSxDQUFBRyxhQUFBLENBQUMwRCxhQUFhLE9BQUcsRUFDakJuRSxNQUFBLENBQUFNLE9BQUEsQ0FBQUcsYUFBQSxlQUNDVCxNQUFBLENBQUFNLE9BQUEsQ0FBQUcsYUFBQSxnQ0FBMEIsRUFDMUJULE1BQUEsQ0FBQU0sT0FBQSxDQUFBRyxhQUFBLENBQUNxQyxNQUFBLENBQUF3QixNQUFNLE9BQUcsQ0FDSixDQUNGLENBQ2tCLENBQ3ZCO1VBRUwsQ0FBQztVQUFDL0YsT0FBQSxDQUFBVyxNQUFBLEdBQUFBLE1BQUEiLCJpZ25vcmVMaXN0IjpbXX0=