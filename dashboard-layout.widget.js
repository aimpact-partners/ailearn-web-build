System.register(["@beyond-js/widgets@1.1.1/render", "@beyond-js/kernel@0.1.9/bundle", "@aimpact/reactive@0.0.1/model", "@aimpact/ailearn-app@0.3.1/widgets/breadcrumb.widget", "@beyond-js/react-18-widgets@1.1.3/base", "@aimpact/chat-sdk@1.4.1/core", "@aimpact/chat-sdk@1.4.1/wrapper", "react@18.2.0", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.3.1/components/navbar-header.code", "@beyond-js/react-18-widgets@1.1.3/hooks", "pragmate-ui@1.0.0-beta.7/icons", "pragmate-ui@1.0.0-beta.7/toast", "@aimpact/ailearn-app@0.3.1/components/ui"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, bimport, __Bundle, __pkg, ims, LayoutBroker, Controller, Header, OverlayHeader, __beyond_pkg, hmr;
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
    }, function (_aimpactAilearnApp031ComponentsNavbarHeaderCode) {
      dependency_9 = _aimpactAilearnApp031ComponentsNavbarHeaderCode;
    }, function (_beyondJsReact18Widgets113Hooks) {
      dependency_10 = _beyondJsReact18Widgets113Hooks;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_11 = _pragmateUi100Beta7Icons;
    }, function (_pragmateUi100Beta7Toast) {
      dependency_12 = _pragmateUi100Beta7Toast;
    }, function (_aimpactAilearnApp031ComponentsUi) {
      dependency_13 = _aimpactAilearnApp031ComponentsUi;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", null], ["@aimpact/auth", null], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.1"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.3"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["@google-cloud/storage", "7.15.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.24.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.1"], ["@aimpact/ailearn-app", "0.3.1"]]);
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@aimpact/reactive/model', dependency_2], ['@aimpact/ailearn-app/widgets/breadcrumb.widget', dependency_3], ['@beyond-js/react-18-widgets/base', dependency_4], ['@aimpact/chat-sdk/core', dependency_5], ['@aimpact/chat-sdk/wrapper', dependency_6], ['react', dependency_7], ['framer-motion', dependency_8], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_9], ['@beyond-js/react-18-widgets/hooks', dependency_10], ['pragmate-ui/icons', dependency_11], ['pragmate-ui/toast', dependency_12], ['@aimpact/ailearn-app/components/ui', dependency_13]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX2JyZWFkY3J1bWIiLCJCcm9rZXIiLCJSZWFjdGl2ZU1vZGVsIiwibW9kZWwiLCJtZXNzYWdlIiwiYnJlYWRjcnVtYiIsImJyZWFkY3J1bWJTdG9yZSIsInNob3dDcmVkaXRzIiwiY29uc3RydWN0b3IiLCJwcm9wZXJ0aWVzIiwic2hvd01lc3NhZ2UiLCJ0eXBlIiwidHJpZ2dlciIsImdsb2JhbFRoaXMiLCJzZXRUaW1lb3V0IiwidW5kZWZpbmVkIiwiY2xlYXIiLCJvdmVybGF5IiwidHJpZ2dlckV2ZW50Iiwic2V0QmFja0xpbmsiLCJiYWNrTGluayIsInNldE1vZGVsIiwic2V0IiwicHJvcHMiLCJpdGVtcyIsInVwZGF0ZWQiLCJleHBvcnRzIiwiTGF5b3V0QnJva2VyIiwiX2Jhc2UiLCJfc3RvcmUiLCJfdmlldyIsIkNvbnRyb2xsZXIiLCJSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiV2lkZ2V0IiwiTGF5b3V0IiwiX3dyYXBwZXIiLCJfYnJva2VyIiwiYnJva2VyIiwiQXBwV3JhcHBlciIsIm9uIiwibGlzdGVuZXIiLCJsYyIsImNvbnNvbGUiLCJsb2ciLCJpbml0IiwiaXNSZWFkeSIsInJlYWR5IiwicmVmcmVzaCIsIl9yZWFjdCIsIl9mcmFtZXJNb3Rpb24iLCJBbmltYXRlZExhYmVsIiwiY2hpbGRyZW4iLCJzaG93Iiwic2V0U2hvdyIsImRlZmF1bHQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImNyZWF0ZUVsZW1lbnQiLCJBbmltYXRlUHJlc2VuY2UiLCJtb3Rpb24iLCJzcGFuIiwibGF5b3V0IiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJ3aWR0aCIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJleGl0IiwiQW5pbWF0ZWQiLCJjbGFzc05hbWUiLCJhcyIsIkNvbXBvbmVudCIsIl9uYXZiYXJIZWFkZXIiLCJfY29udGV4dCIsIl9ob29rcyIsIl9pY29ucyIsIkhlYWRlciIsInVzZUxheW91dENvbnRleHQiLCJoYXNNb2RlbCIsInNldEhhc01vZGVsIiwidXNlQmluZGVyIiwiTmF2YmFySGVhZGVyIiwiSWNvbkJ1dHRvbiIsImljb24iLCJvbkNsaWNrIiwiT3ZlcmxheUhlYWRlciIsImNsb3NhYmxlIiwiYmFja2xpbmsiLCJkZXRhaWwiLCJvdmVybGF5TGFiZWwiLCJMYXlvdXRDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfdG9hc3QiLCJfdWkiLCJfaGVhZGVyIiwiX2JleW9uZF9jb250ZXh0IiwiX292ZXJsYXlIZWFkZXIiLCJzZXRSZWFkeSIsInRleHRzUmVhZHkiLCJ0ZXh0cyIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwic2hvd0NvaW5zTW9kYWwiLCJzZXRTaG93Q29pbnNNb2RhbCIsInNob3dDb2luc0FsZXJ0Iiwic2V0U2hvd0NvaW5zQWxlcnQiLCJzZXRVcGRhdGUiLCJ0b2dnbGVDb2luc0FsZXJ0IiwidG9nZ2xlQ29pbnNNb2RhbCIsIlBhZ2VMb2FkZXIiLCJmZXRjaGluZyIsInZhbHVlIiwiSGVhZGVyQ29udHJvbCIsIkZyYWdtZW50IiwiUHJvdmlkZXIiLCJUb2FzdHMiXSwic291cmNlcyI6WyIvdHMvYnJva2VyLnRzIiwiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlldy9jb21wb25lbnRzL2FuaW1hdGVkLWxhYmVsLnRzeCIsIi90cy92aWV3L2NvbXBvbmVudHMvYW5pbWF0ZWQudHN4IiwiL3RzL3ZpZXcvY29tcG9uZW50cy9oZWFkZXIudHN4IiwiL3RzL3ZpZXcvY29tcG9uZW50cy9vdmVybGF5LWhlYWRlci50c3giLCIvdHMvdmlldy9jb250ZXh0LnRzIiwiL3RzL3ZpZXcvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7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