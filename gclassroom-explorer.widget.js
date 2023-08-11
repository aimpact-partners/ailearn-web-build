System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.1/base", "@aimpact/ailearn-app@1.0.0/model/gclassroom", "@beyond-js/reactive@1.1.2/model", "@aimpact/chat-sdk@1.0.0/core", "@aimpact/chat@1.0.1/wrapper", "@aimpact/chat-sdk@1.0.0/session", "react@18.2.0", "@aimpact/chat@1.0.1/ui/manager", "pragmate-ui@0.0.36/components", "@aimpact/chat@1.0.1/shared/hooks", "@beyond-js/react-18-widgets@1.0.1/hooks", "@beyond-js/kernel@0.1.9/routing"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, bimport, __Bundle, __pkg, ims, Controller, Explorer, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    Explorer: void 0
  });
  return {
    setters: [function (_beyondJsWidgets015Render) {
      dependency_0 = _beyondJsWidgets015Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_beyondJsReact18Widgets101Base) {
      dependency_3 = _beyondJsReact18Widgets101Base;
    }, function (_aimpactAilearnApp100ModelGclassroom) {
      dependency_4 = _aimpactAilearnApp100ModelGclassroom;
    }, function (_beyondJsReactive112Model) {
      dependency_5 = _beyondJsReactive112Model;
    }, function (_aimpactChatSdk100Core) {
      dependency_6 = _aimpactChatSdk100Core;
    }, function (_aimpactChat101Wrapper) {
      dependency_7 = _aimpactChat101Wrapper;
    }, function (_aimpactChatSdk100Session) {
      dependency_8 = _aimpactChatSdk100Session;
    }, function (_react2) {
      dependency_9 = _react2;
    }, function (_aimpactChat101UiManager) {
      dependency_10 = _aimpactChat101UiManager;
    }, function (_pragmateUi0036Components) {
      dependency_11 = _pragmateUi0036Components;
    }, function (_aimpactChat101SharedHooks) {
      dependency_12 = _aimpactChat101SharedHooks;
    }, function (_beyondJsReact18Widgets101Hooks) {
      dependency_13 = _beyondJsReact18Widgets101Hooks;
    }, function (_beyondJsKernel019Routing) {
      dependency_14 = _beyondJsKernel019Routing;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.2"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "10.0.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["swiper", "8.4.7"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/ailearn-app", "1.0.0"], ["@aimpact/ailearn-app", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@1.0.0/gclassroom-explorer",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/base', dependency_3], ['@aimpact/ailearn-app/model/gclassroom', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/chat-sdk/core', dependency_6], ['@aimpact/chat/wrapper', dependency_7], ['@aimpact/chat-sdk/session', dependency_8], ['react', dependency_9], ['@aimpact/chat/ui/manager', dependency_10], ['pragmate-ui/components', dependency_11], ['@aimpact/chat/shared/hooks', dependency_12], ['@beyond-js/react-18-widgets/hooks', dependency_13], ['@beyond-js/kernel/routing', dependency_14]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-gclassroom-explorer",
        "vspecifier": "@aimpact/ailearn-app@1.0.0/gclassroom-explorer.widget"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@1.0.0/gclassroom-explorer.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 597030862,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _base = require("@beyond-js/react-18-widgets/base");
          var _store = require("./store");
          var _views = require("./views");
          /*bundle*/
          class Controller extends _base.ReactWidgetController {
            #store;
            createStore() {
              this.#store = new _store.StoreManager();
              return this.#store;
            }
            get Widget() {
              return _views.Explorer;
            }
            show() {}
          }
          exports.Controller = Controller;
        }
      });

      /************************
      INTERNAL MODULE: ./gclass
      ************************/

      ims.set('./gclass', {
        hash: 1820026526,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.GClass = void 0;
          var _model = require("@beyond-js/reactive/model");
          class GClass extends _model.ReactiveModel {
            #course;
            #name;
            get name() {
              return this.#name;
            }
            #code;
            get code() {
              return this.#code;
            }
            get id() {
              return this.#course.id;
            }
            constructor(gclass) {
              super();
              this.#course = gclass;
              this.#init();
            }
            #init() {
              this.#name = this.#course.descriptionHeading;
              this.#code = this.#course.enrollmentCode;
            }
          }
          exports.GClass = GClass;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 364262105,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _gclassroom = require("@aimpact/ailearn-app/model/gclassroom");
          var _gclass = require("./gclass");
          class StoreManager extends _model.ReactiveModel {
            get isReady() {
              return _gclassroom.gclassroom.isReady;
            }
            #items = new Map();
            get items() {
              return [...this.#items.values()];
            }
            constructor() {
              super();
              _gclassroom.gclassroom.on('change', this.triggerEvent);
              this.#init();
            }
            async #init() {
              const courses = await _gclassroom.gclassroom.courses();
              courses.forEach(item => {
                const gclass = new _gclass.GClass(item);
                this.#items.set(item.id, gclass);
              });
              this.ready = true;
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 2841784997,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useExplorerContext = exports.ExplorerContext = void 0;
          var React = require("react");
          const ExplorerContext = React.createContext({});
          exports.ExplorerContext = ExplorerContext;
          const useExplorerContext = () => React.useContext(ExplorerContext);
          exports.useExplorerContext = useExplorerContext;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 713382427,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Explorer = Explorer;
          var React = require("react");
          var _gclassroom = require("@aimpact/ailearn-app/model/gclassroom");
          var _components = require("pragmate-ui/components");
          var _context = require("./context");
          var _beyond_context = require("beyond_context");
          var _hooks = require("@aimpact/chat/shared/hooks");
          var _list = require("./list");
          var _hooks2 = require("@beyond-js/react-18-widgets/hooks");
          /*bundle*/
          function Explorer({
            store
          }) {
            const [search, setSearch] = React.useState('');
            const dialogRef = React.useRef(null);
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            const [ready, setReady] = React.useState(store.ready);
            const Control = !textsReady ? _components.Spinner : _list.List;
            (0, _hooks2.useBinder)([store], () => {
              setReady(store.ready);
            });
            if (!textsReady || !_gclassroom.gclassroom.ready || !ready) return null;
            return React.createElement(_context.ExplorerContext.Provider, {
              value: {
                store,
                texts
              }
            }, React.createElement("article", null, React.createElement("header", {
              className: "aside__top"
            }, React.createElement("h3", null, texts.title)), React.createElement(Control, null)));
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./views/items/actions
      *************************************/

      ims.set('./views/items/actions', {
        hash: 4062573251,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ItemActions = ItemActions;
          function ItemActions({
            item,
            chatId,
            isCurrent
          }) {
            return null;
            //todo: define actions
          }
        }
      });

      /***********************************
      INTERNAL MODULE: ./views/items/index
      ***********************************/

      ims.set('./views/items/index', {
        hash: 2185142307,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Item = void 0;
          var _react = require("react");
          var _routing = require("@beyond-js/kernel/routing");
          var _actions = require("./actions");
          var _components = require("pragmate-ui/components");
          const Item = ({
            item
          }) => {
            const {
              pathname
            } = _routing.routing.uri;
            //const chatId = pathname.split('/')[2];
            let chatId = 'any';
            const isCurrent = chatId === item.id;
            return _react.default.createElement("li", {
              key: item.id,
              className: `sidebar-item ${isCurrent ? 'current' : ''}`
            }, _react.default.createElement(_components.Link, {
              href: `/sessions/list/${item.id}`
            }, item.name), _react.default.createElement(_actions.ItemActions, {
              item: item,
              chatId: chatId,
              isCurrent: isCurrent
            }));
          };
          exports.Item = Item;
        }
      });

      /****************************
      INTERNAL MODULE: ./views/list
      ****************************/

      ims.set('./views/list', {
        hash: 3733525451,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.List = List;
          var React = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _context = require("./context");
          var _items = require("./items");
          function List({}) {
            const {
              store
            } = (0, _context.useExplorerContext)();
            const [items, setItems] = React.useState(store.items);
            (0, _hooks.useBinder)([store], () => setItems(store.items));
            const output = store.items.map(item => {
              return React.createElement(_items.Item, {
                item: item,
                key: item.id
              });
            });
            return React.createElement("ul", {
              className: "sidebar__list"
            }, output);
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./views/index",
        "from": "Explorer",
        "name": "Explorer"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'Explorer') && _export("Explorer", Explorer = require ? require('./views/index').Explorer : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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STZCLEdBQUcsRUFBRWpDLElBQUksQ0FBQ2QsRUFBRTtjQUFFc0MsU0FBUyxFQUFFLGdCQUFnQkksU0FBUyxHQUFHLFNBQVMsR0FBRyxFQUFFO1lBQUUsR0FDeEV4Qiw2QkFBQzhCLGdCQUFJO2NBQUNDLElBQUksRUFBRSxrQkFBa0JuQyxJQUFJLENBQUNkLEVBQUU7WUFBRSxHQUFHYyxJQUFJLENBQUNoQixJQUFJLENBQVEsRUFDM0RvQiw2QkFBQ3NCLG9CQUFXO2NBQUMxQixJQUFJLEVBQUVBLElBQUk7Y0FBRTJCLE1BQU0sRUFBRUEsTUFBTTtjQUFFQyxTQUFTLEVBQUVBO1lBQVMsRUFBSSxDQUM3RDtVQUVQLENBQUM7VUFBQy9DOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2hCRjtVQUNBO1VBQ0E7VUFDQTtVQUVNLFNBQVV3QyxJQUFJLENBQUMsRUFBRTtZQUN0QixNQUFNO2NBQUViO1lBQUssQ0FBRSxHQUFHLCtCQUFrQixHQUFFO1lBQ3RDLE1BQU0sQ0FBQ2QsS0FBSyxFQUFFMEMsUUFBUSxDQUFDLEdBQUdoQyxLQUFLLENBQUNPLFFBQVEsQ0FBQ0gsS0FBSyxDQUFDZCxLQUFLLENBQUM7WUFFckQsb0JBQVMsRUFBQyxDQUFDYyxLQUFLLENBQUMsRUFBRSxNQUFNNEIsUUFBUSxDQUFDNUIsS0FBSyxDQUFDZCxLQUFLLENBQUMsQ0FBQztZQUUvQyxNQUFNMkMsTUFBTSxHQUFHN0IsS0FBSyxDQUFDZCxLQUFLLENBQUM0QyxHQUFHLENBQUN0QyxJQUFJLElBQUc7Y0FDckMsT0FBT0ksb0JBQUN5QixXQUFJO2dCQUFDN0IsSUFBSSxFQUFFQSxJQUFJO2dCQUFFaUMsR0FBRyxFQUFFakMsSUFBSSxDQUFDZDtjQUFFLEVBQUk7WUFDMUMsQ0FBQyxDQUFDO1lBQ0YsT0FBT2tCO2NBQUlvQixTQUFTLEVBQUM7WUFBZSxHQUFFYSxNQUFNLENBQU07VUFDbkQiLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJFeHBsb3JlciIsInNob3ciLCJleHBvcnRzIiwiR0NsYXNzIiwiUmVhY3RpdmVNb2RlbCIsIm5hbWUiLCJjb2RlIiwiaWQiLCJjb25zdHJ1Y3RvciIsImdjbGFzcyIsImRlc2NyaXB0aW9uSGVhZGluZyIsImVucm9sbG1lbnRDb2RlIiwiaXNSZWFkeSIsImdjbGFzc3Jvb20iLCJNYXAiLCJpdGVtcyIsInZhbHVlcyIsIm9uIiwidHJpZ2dlckV2ZW50IiwiY291cnNlcyIsImZvckVhY2giLCJpdGVtIiwic2V0IiwicmVhZHkiLCJFeHBsb3JlckNvbnRleHQiLCJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VFeHBsb3JlckNvbnRleHQiLCJ1c2VDb250ZXh0Iiwic3RvcmUiLCJzZWFyY2giLCJzZXRTZWFyY2giLCJ1c2VTdGF0ZSIsImRpYWxvZ1JlZiIsInVzZVJlZiIsInRleHRzUmVhZHkiLCJ0ZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInNldFJlYWR5IiwiQ29udHJvbCIsIlNwaW5uZXIiLCJMaXN0IiwiUHJvdmlkZXIiLCJ2YWx1ZSIsImNsYXNzTmFtZSIsInRpdGxlIiwiSXRlbUFjdGlvbnMiLCJjaGF0SWQiLCJpc0N1cnJlbnQiLCJJdGVtIiwicGF0aG5hbWUiLCJyb3V0aW5nIiwidXJpIiwia2V5IiwiTGluayIsImhyZWYiLCJzZXRJdGVtcyIsIm91dHB1dCIsIm1hcCJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsidHMvY29udHJvbGxlci50cyIsInRzL2djbGFzcy50cyIsInRzL3N0b3JlLnRzIiwidHMvdmlld3MvY29udGV4dC50cyIsInRzL3ZpZXdzL2luZGV4LnRzeCIsInRzL3ZpZXdzL2l0ZW1zL2FjdGlvbnMudHN4IiwidHMvdmlld3MvaXRlbXMvaW5kZXgudHN4IiwidHMvdmlld3MvbGlzdC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdfQ==