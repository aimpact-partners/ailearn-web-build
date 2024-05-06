System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.1.12/model", "@beyond-js/react-18-widgets@1.1.2/base", "@aimpact/chat-sdk@1.0.0/core", "@aimpact/chat@1.0.1/wrapper", "react@18.2.0", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.0.32/components/navbar-header.code", "@aimpact/ailearn-app@0.0.32/config", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@0.1.1/toast", "@aimpact/chat@1.0.1/shared/components", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp0032ComponentsNavbarHeaderCode) {
      dependency_8 = _aimpactAilearnApp0032ComponentsNavbarHeaderCode;
    }, function (_aimpactAilearnApp0032Config) {
      dependency_9 = _aimpactAilearnApp0032Config;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_10 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi011Toast) {
      dependency_11 = _pragmateUi011Toast;
    }, function (_aimpactChat101SharedComponents) {
      dependency_12 = _aimpactChat101SharedComponents;
    }, function (_beyondJsKernel019Styles) {
      dependency_13 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/http-suite", "1.0.3"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/react-18-widgets", "1.1.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["apexcharts", "3.48.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["firebase", "10.9.0"], ["firebase-admin", "11.11.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["@aimpact/ailearn-app", "0.0.32"], ["@aimpact/ailearn-app", "0.0.32"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.32/dashboard-layout",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/reactive/model', dependency_2], ['@beyond-js/react-18-widgets/base', dependency_3], ['@aimpact/chat-sdk/core', dependency_4], ['@aimpact/chat/wrapper', dependency_5], ['react', dependency_6], ['framer-motion', dependency_7], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_8], ['@aimpact/ailearn-app/config', dependency_9], ['@beyond-js/react-18-widgets/hooks', dependency_10], ['pragmate-ui/toast', dependency_11], ['@aimpact/chat/shared/components', dependency_12], ['@beyond-js/kernel/styles', dependency_13]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "dashboard-layout",
        "vspecifier": "@aimpact/ailearn-app@0.0.32/dashboard-layout.widget",
        "is": "layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.32/dashboard-layout.widget');
      ims = new Map();
      /************************
      INTERNAL MODULE: ./broker
      ************************/
      ims.set('./broker', {
        hash: 2402739801,
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
            removeOverlay() {
              this.overlay = false;
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
        hash: 2951602853,
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
            get showCredits() {
              return this.#broker.showCredits;
            }
            get model() {
              return this.#broker.model;
            }
            get saved() {
              return this.#broker?.model?.saved;
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
        hash: 2226592899,
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
            const [breadcrumb, setBreadcrumb] = _react.default.useState([]);
            (0, _hooks.useBinder)([store.broker], () => {
              setHasModel(!!store.broker.model);
              setBreadcrumb(store.broker.breadcrumb);
            });
            return _react.default.createElement(_navbarHeader.NavbarHeader, {
              breadcrumb: [, ...breadcrumb]
            });
          }
        }
      });

      /************************************************
      INTERNAL MODULE: ./view/components/overlay-header
      ************************************************/

      ims.set('./view/components/overlay-header', {
        hash: 4105155995,
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
              backlink: store.broker.backLink
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
        hash: 616577895,
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
              className: "coins-layout__container"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiQnJva2VyIiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwibWVzc2FnZSIsImJyZWFkY3J1bWIiLCJ2YWx1ZSIsIkFycmF5IiwiaXNBcnJheSIsIkVycm9yIiwidHJpZ2dlciIsInNob3dDcmVkaXRzIiwib3ZlcmxheSIsImJhY2tMaW5rIiwiY29uc3RydWN0b3IiLCJhZGRCcmVhZGNydW1iIiwiaXRlbXMiLCJzaG93TWVzc2FnZSIsInR5cGUiLCJnbG9iYWxUaGlzIiwic2V0VGltZW91dCIsInVuZGVmaW5lZCIsImNsZWFyIiwidHJpZ2dlckV2ZW50Iiwic2V0QmFja0xpbmsiLCJyZW1vdmVPdmVybGF5IiwiZXhwb3J0cyIsIkxheW91dEJyb2tlciIsIl9iYXNlIiwiX3N0b3JlIiwiX3ZpZXciLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsIkxheW91dCIsIl93cmFwcGVyIiwiX2Jyb2tlciIsImJyb2tlciIsInNhdmVkIiwiQXBwV3JhcHBlciIsIm9uIiwibGlzdGVuZXIiLCJsYyIsImNvbnNvbGUiLCJsb2ciLCJpbml0IiwiaXNSZWFkeSIsInJlYWR5IiwiX3JlYWN0IiwiX2ZyYW1lck1vdGlvbiIsIkFuaW1hdGVkTGFiZWwiLCJjaGlsZHJlbiIsInNob3ciLCJzZXRTaG93IiwiZGVmYXVsdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiY3JlYXRlRWxlbWVudCIsIkFuaW1hdGVQcmVzZW5jZSIsIm1vdGlvbiIsInNwYW4iLCJsYXlvdXQiLCJpbml0aWFsIiwib3BhY2l0eSIsIndpZHRoIiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImV4aXQiLCJBbmltYXRlZCIsImNsYXNzTmFtZSIsImFzIiwiQ29tcG9uZW50IiwiX25hdmJhckhlYWRlciIsIl9jb250ZXh0IiwiX2hvb2tzIiwiSGVhZGVyIiwidXNlTGF5b3V0Q29udGV4dCIsImhhc01vZGVsIiwic2V0SGFzTW9kZWwiLCJzZXRCcmVhZGNydW1iIiwidXNlQmluZGVyIiwiTmF2YmFySGVhZGVyIiwiT3ZlcmxheUhlYWRlciIsImNsb3NhYmxlIiwiYmFja2xpbmsiLCJMYXlvdXRDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfdG9hc3QiLCJfY29tcG9uZW50cyIsIl9oZWFkZXIiLCJfYmV5b25kX2NvbnRleHQiLCJfb3ZlcmxheUhlYWRlciIsInNldFJlYWR5IiwidGV4dHNSZWFkeSIsInRleHRzIiwidXNlVGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJzaG93Q29pbnNNb2RhbCIsInNldFNob3dDb2luc01vZGFsIiwic2hvd0NvaW5zQWxlcnQiLCJzZXRTaG93Q29pbnNBbGVydCIsInNldFVwZGF0ZSIsInRvZ2dsZUNvaW5zQWxlcnQiLCJ0b2dnbGVDb2luc01vZGFsIiwiUHJlbG9hZFNjcmVlbiIsIkhlYWRlckNvbnRyb2wiLCJGcmFnbWVudCIsIlByb3ZpZGVyIiwiVG9hc3RzIl0sInNvdXJjZXMiOlsiL3RzL2Jyb2tlci50cyIsIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXcvY29tcG9uZW50cy9hbmltYXRlZC1sYWJlbC50c3giLCIvdHMvdmlldy9jb21wb25lbnRzL2FuaW1hdGVkLnRzeCIsIi90cy92aWV3L2NvbXBvbmVudHMvaGVhZGVyLnRzeCIsIi90cy92aWV3L2NvbXBvbmVudHMvb3ZlcmxheS1oZWFkZXIudHN4IiwiL3RzL3ZpZXcvY29udGV4dC50cyIsIi90cy92aWV3L2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJ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