System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.1.12/model", "@beyond-js/react-18-widgets@1.1.2/base", "@aimpact/chat-sdk@1.0.0/core", "@aimpact/chat@1.0.1/wrapper", "react@18.2.0", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.0.46.dev-22/components/navbar-header.code", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@0.1.1/icons", "pragmate-ui@0.1.1/toast", "@aimpact/chat@1.0.1/shared/components", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, bimport, __Bundle, __pkg, ims, LayoutBroker, Controller, Header, OverlayHeader, __beyond_pkg, hmr;
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
    }, function (_react2) {
      dependency_6 = _react2;
    }, function (_framerMotion2) {
      dependency_7 = _framerMotion2;
    }, function (_aimpactAilearnApp0046Dev22ComponentsNavbarHeaderCode) {
      dependency_8 = _aimpactAilearnApp0046Dev22ComponentsNavbarHeaderCode;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_9 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi011Icons) {
      dependency_10 = _pragmateUi011Icons;
    }, function (_pragmateUi011Toast) {
      dependency_11 = _pragmateUi011Toast;
    }, function (_aimpactChat101SharedComponents) {
      dependency_12 = _aimpactChat101SharedComponents;
    }, function (_beyondJsKernel019Styles) {
      dependency_13 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.0.46.dev-22"], ["@aimpact/ailearn-app", "0.0.46.dev-22"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.46.dev-22/dashboard-layout",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/reactive/model', dependency_2], ['@beyond-js/react-18-widgets/base', dependency_3], ['@aimpact/chat-sdk/core', dependency_4], ['@aimpact/chat/wrapper', dependency_5], ['react', dependency_6], ['framer-motion', dependency_7], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_8], ['@beyond-js/react-18-widgets/hooks', dependency_9], ['pragmate-ui/icons', dependency_10], ['pragmate-ui/toast', dependency_11], ['@aimpact/chat/shared/components', dependency_12], ['@beyond-js/kernel/styles', dependency_13]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "dashboard-layout",
        "vspecifier": "@aimpact/ailearn-app@0.0.46.dev-22/dashboard-layout.widget",
        "is": "layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.46.dev-22/dashboard-layout.widget');
      ims = new Map();
      /************************
      INTERNAL MODULE: ./broker
      ************************/
      ims.set('./broker', {
        hash: 1675570124,
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
            #message;
            get message() {
              return this.#message;
            }
            #breadcrumb = [];
            get breadcrumb() {
              return this.#breadcrumb;
            }
            #overlayLabel;
            get overlayLabel() {
              return this.#overlayLabel;
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
            #backLink;
            get backLink() {
              return this.#backLink;
            }
            constructor() {
              super();
            }
            addBreadcrumb(items) {
              this.#breadcrumb = [...this.#breadcrumb, items];
              this.trigger('change');
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
            setBackLink(backLink) {
              this.#backLink = backLink;
              this.overlay = true;
              this.triggerEvent();
            }
            setModel(model) {
              this.#model = model;
              this.triggerEvent();
            }
            setOverlay(label) {
              this.#overlayLabel = label;
              this.overlay = true;
              this.triggerEvent();
            }
            removeOverlay() {
              this.overlay = false;
              this.#overlayLabel = undefined;
              this.#backLink = undefined;
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
        hash: 1310626975,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _wrapper = require("@aimpact/chat/wrapper");
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
        hash: 135863169,
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
            const [breadcrumb, setBreadcrumb] = _react.default.useState([]);
            (0, _hooks.useBinder)([store.broker], () => {
              setHasModel(!!store.broker.model);
              setBreadcrumb(store.broker.breadcrumb);
            });
            return _react.default.createElement(_navbarHeader.NavbarHeader, {
              breadcrumb: [, ...breadcrumb]
            }, _react.default.createElement(_icons.IconButton, {
              className: "right-action",
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
        hash: 1687109263,
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
        hash: 1703406774,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Layout = void 0;
          var _react = require("react");
          var _toast = require("pragmate-ui/toast");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _components = require("@aimpact/chat/shared/components");
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
            if (!textsReady || !ready) return _react.default.createElement(_components.PreloadScreen, null);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiQnJva2VyIiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwibWVzc2FnZSIsImJyZWFkY3J1bWIiLCJvdmVybGF5TGFiZWwiLCJ2YWx1ZSIsIkFycmF5IiwiaXNBcnJheSIsIkVycm9yIiwidHJpZ2dlciIsInNob3dDcmVkaXRzIiwib3ZlcmxheSIsImJhY2tMaW5rIiwiY29uc3RydWN0b3IiLCJhZGRCcmVhZGNydW1iIiwiaXRlbXMiLCJzaG93TWVzc2FnZSIsInR5cGUiLCJnbG9iYWxUaGlzIiwic2V0VGltZW91dCIsInVuZGVmaW5lZCIsImNsZWFyIiwidHJpZ2dlckV2ZW50Iiwic2V0QmFja0xpbmsiLCJzZXRNb2RlbCIsInNldE92ZXJsYXkiLCJsYWJlbCIsInJlbW92ZU92ZXJsYXkiLCJleHBvcnRzIiwiTGF5b3V0QnJva2VyIiwiX2Jhc2UiLCJfc3RvcmUiLCJfdmlldyIsIkNvbnRyb2xsZXIiLCJSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiV2lkZ2V0IiwiTGF5b3V0IiwiX3dyYXBwZXIiLCJfYnJva2VyIiwiYnJva2VyIiwiQXBwV3JhcHBlciIsIm9uIiwibGlzdGVuZXIiLCJsYyIsImNvbnNvbGUiLCJsb2ciLCJpbml0IiwiaXNSZWFkeSIsInJlYWR5IiwicmVmcmVzaCIsIl9yZWFjdCIsIl9mcmFtZXJNb3Rpb24iLCJBbmltYXRlZExhYmVsIiwiY2hpbGRyZW4iLCJzaG93Iiwic2V0U2hvdyIsImRlZmF1bHQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImNyZWF0ZUVsZW1lbnQiLCJBbmltYXRlUHJlc2VuY2UiLCJtb3Rpb24iLCJzcGFuIiwibGF5b3V0IiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJ3aWR0aCIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJleGl0IiwiQW5pbWF0ZWQiLCJjbGFzc05hbWUiLCJhcyIsIkNvbXBvbmVudCIsIl9uYXZiYXJIZWFkZXIiLCJfY29udGV4dCIsIl9ob29rcyIsIl9pY29ucyIsIkhlYWRlciIsInVzZUxheW91dENvbnRleHQiLCJoYXNNb2RlbCIsInNldEhhc01vZGVsIiwic2V0QnJlYWRjcnVtYiIsInVzZUJpbmRlciIsIk5hdmJhckhlYWRlciIsIkljb25CdXR0b24iLCJpY29uIiwib25DbGljayIsIk92ZXJsYXlIZWFkZXIiLCJjbG9zYWJsZSIsImJhY2tsaW5rIiwiZGV0YWlsIiwiTGF5b3V0Q29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX3RvYXN0IiwiX2NvbXBvbmVudHMiLCJfaGVhZGVyIiwiX2JleW9uZF9jb250ZXh0IiwiX292ZXJsYXlIZWFkZXIiLCJzZXRSZWFkeSIsInRleHRzUmVhZHkiLCJ0ZXh0cyIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwic2hvd0NvaW5zTW9kYWwiLCJzZXRTaG93Q29pbnNNb2RhbCIsInNob3dDb2luc0FsZXJ0Iiwic2V0U2hvd0NvaW5zQWxlcnQiLCJzZXRVcGRhdGUiLCJ0b2dnbGVDb2luc0FsZXJ0IiwidG9nZ2xlQ29pbnNNb2RhbCIsIlByZWxvYWRTY3JlZW4iLCJIZWFkZXJDb250cm9sIiwiRnJhZ21lbnQiLCJQcm92aWRlciIsIlRvYXN0cyJdLCJzb3VyY2VzIjpbIi90cy9icm9rZXIudHMiLCIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3L2NvbXBvbmVudHMvYW5pbWF0ZWQtbGFiZWwudHN4IiwiL3RzL3ZpZXcvY29tcG9uZW50cy9hbmltYXRlZC50c3giLCIvdHMvdmlldy9jb21wb25lbnRzL2hlYWRlci50c3giLCIvdHMvdmlldy9jb21wb25lbnRzL292ZXJsYXktaGVhZGVyLnRzeCIsIi90cy92aWV3L2NvbnRleHQudHMiLCIvdHMvdmlldy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVs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