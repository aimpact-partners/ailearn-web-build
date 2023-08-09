System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.1/base", "@aimpact/ailearn-app@1.0.0/model/gclassroom", "@beyond-js/reactive@1.1.2/model", "@aimpact/chat-sdk@1.0.1/core", "@aimpact/chat@1.0.1/wrapper", "@aimpact/chat-sdk@1.0.1/session", "react@18.2.0", "@aimpact/chat@1.0.1/ui/manager", "pragmate-ui@0.0.36/components", "@aimpact/chat@1.0.1/shared/hooks", "@beyond-js/react-18-widgets@1.0.1/hooks", "@beyond-js/kernel@0.1.9/routing"], function (_export, _context2) {
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
    }, function (_aimpactChatSdk101Core) {
      dependency_6 = _aimpactChatSdk101Core;
    }, function (_aimpactChat101Wrapper) {
      dependency_7 = _aimpactChat101Wrapper;
    }, function (_aimpactChatSdk101Session) {
      dependency_8 = _aimpactChatSdk101Session;
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
        const dependencies = new Map([["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.2"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "10.0.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["swiper", "8.4.7"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/ailearn-app", "1.0.0"], ["@aimpact/ailearn-app", "1.0.0"]]);
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
        hash: 4165555617,
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
            show() {
              // console.log(12, 'yes');
            }
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
        hash: 512341543,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QjtjQUFJNkIsR0FBRyxFQUFFakMsSUFBSSxDQUFDZCxFQUFFO2NBQUVzQyxTQUFTLEVBQUUsZ0JBQWdCSSxTQUFTLEdBQUcsU0FBUyxHQUFHLEVBQUU7WUFBRSxHQUN4RXhCLDZCQUFDOEIsZ0JBQUk7Y0FBQ0MsSUFBSSxFQUFFLGtCQUFrQm5DLElBQUksQ0FBQ2QsRUFBRTtZQUFFLEdBQUdjLElBQUksQ0FBQ2hCLElBQUksQ0FBUSxFQUMzRG9CLDZCQUFDc0Isb0JBQVc7Y0FBQzFCLElBQUksRUFBRUEsSUFBSTtjQUFFMkIsTUFBTSxFQUFFQSxNQUFNO2NBQUVDLFNBQVMsRUFBRUE7WUFBUyxFQUFJLENBQzdEO1VBRVAsQ0FBQztVQUFDL0M7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDaEJGO1VBQ0E7VUFDQTtVQUNBO1VBRU0sU0FBVXdDLElBQUksQ0FBQyxFQUFFO1lBQ3RCLE1BQU07Y0FBRWI7WUFBSyxDQUFFLEdBQUcsK0JBQWtCLEdBQUU7WUFDdEMsTUFBTSxDQUFDZCxLQUFLLEVBQUUwQyxRQUFRLENBQUMsR0FBR2hDLEtBQUssQ0FBQ08sUUFBUSxDQUFDSCxLQUFLLENBQUNkLEtBQUssQ0FBQztZQUVyRCxvQkFBUyxFQUFDLENBQUNjLEtBQUssQ0FBQyxFQUFFLE1BQU00QixRQUFRLENBQUM1QixLQUFLLENBQUNkLEtBQUssQ0FBQyxDQUFDO1lBRS9DLE1BQU0yQyxNQUFNLEdBQUc3QixLQUFLLENBQUNkLEtBQUssQ0FBQzRDLEdBQUcsQ0FBQ3RDLElBQUksSUFBRztjQUNyQyxPQUFPSSxvQkFBQ3lCLFdBQUk7Z0JBQUM3QixJQUFJLEVBQUVBLElBQUk7Z0JBQUVpQyxHQUFHLEVBQUVqQyxJQUFJLENBQUNkO2NBQUUsRUFBSTtZQUMxQyxDQUFDLENBQUM7WUFDRixPQUFPa0I7Y0FBSW9CLFNBQVMsRUFBQztZQUFlLEdBQUVhLE1BQU0sQ0FBTTtVQUNuRCIsIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsIkV4cGxvcmVyIiwic2hvdyIsImV4cG9ydHMiLCJHQ2xhc3MiLCJSZWFjdGl2ZU1vZGVsIiwibmFtZSIsImNvZGUiLCJpZCIsImNvbnN0cnVjdG9yIiwiZ2NsYXNzIiwiZGVzY3JpcHRpb25IZWFkaW5nIiwiZW5yb2xsbWVudENvZGUiLCJpc1JlYWR5IiwiZ2NsYXNzcm9vbSIsIk1hcCIsIml0ZW1zIiwidmFsdWVzIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJjb3Vyc2VzIiwiZm9yRWFjaCIsIml0ZW0iLCJzZXQiLCJyZWFkeSIsIkV4cGxvcmVyQ29udGV4dCIsIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZUV4cGxvcmVyQ29udGV4dCIsInVzZUNvbnRleHQiLCJzdG9yZSIsInNlYXJjaCIsInNldFNlYXJjaCIsInVzZVN0YXRlIiwiZGlhbG9nUmVmIiwidXNlUmVmIiwidGV4dHNSZWFkeSIsInRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwic2V0UmVhZHkiLCJDb250cm9sIiwiU3Bpbm5lciIsIkxpc3QiLCJQcm92aWRlciIsInZhbHVlIiwiY2xhc3NOYW1lIiwidGl0bGUiLCJJdGVtQWN0aW9ucyIsImNoYXRJZCIsImlzQ3VycmVudCIsIkl0ZW0iLCJwYXRobmFtZSIsInJvdXRpbmciLCJ1cmkiLCJrZXkiLCJMaW5rIiwiaHJlZiIsInNldEl0ZW1zIiwib3V0cHV0IiwibWFwIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJ3aWRnZXQvdHMvY29udHJvbGxlci50cyIsIndpZGdldC90cy9nY2xhc3MudHMiLCJ3aWRnZXQvdHMvc3RvcmUudHMiLCJ3aWRnZXQvdHMvdmlld3MvY29udGV4dC50cyIsIndpZGdldC90cy92aWV3cy9pbmRleC50c3giLCJ3aWRnZXQvdHMvdmlld3MvaXRlbXMvYWN0aW9ucy50c3giLCJ3aWRnZXQvdHMvdmlld3MvaXRlbXMvaW5kZXgudHN4Iiwid2lkZ2V0L3RzL3ZpZXdzL2xpc3QudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXX0=