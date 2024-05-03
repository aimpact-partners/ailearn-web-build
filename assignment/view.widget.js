System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/kernel@0.1.9/core", "@beyond-js/reactive@1.1.12/model", "@aimpact/ailearn-app@0.0.32/coins-layout.widget", "@beyond-js/kernel@0.1.9/texts", "react@18.2.0", "@aimpact/ailearn-app@0.0.32/components/ui", "pragmate-ui@0.1.1/alert", "pragmate-ui@0.1.1/components", "pragmate-ui@0.1.1/image", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/chat@1.0.1/shared/components"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, bimport, __Bundle, __pkg, ims, Controller, View, EmptyList, List, Item, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    View: void 0,
    EmptyList: void 0,
    List: void 0,
    Item: void 0
  });
  return {
    setters: [function (_beyondJsWidgets110Render) {
      dependency_0 = _beyondJsWidgets110Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_beyondJsReact18Widgets112Page) {
      dependency_3 = _beyondJsReact18Widgets112Page;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_4 = _aimpactAilearnSdk100Core;
    }, function (_beyondJsKernel019Core) {
      dependency_5 = _beyondJsKernel019Core;
    }, function (_beyondJsReactive1112Model) {
      dependency_6 = _beyondJsReactive1112Model;
    }, function (_aimpactAilearnApp0032CoinsLayoutWidget) {
      dependency_7 = _aimpactAilearnApp0032CoinsLayoutWidget;
    }, function (_beyondJsKernel019Texts) {
      dependency_8 = _beyondJsKernel019Texts;
    }, function (_react2) {
      dependency_9 = _react2;
    }, function (_aimpactAilearnApp0032ComponentsUi) {
      dependency_10 = _aimpactAilearnApp0032ComponentsUi;
    }, function (_pragmateUi011Alert) {
      dependency_11 = _pragmateUi011Alert;
    }, function (_pragmateUi011Components) {
      dependency_12 = _pragmateUi011Components;
    }, function (_pragmateUi011Image) {
      dependency_13 = _pragmateUi011Image;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_14 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactChat101SharedComponents) {
      dependency_15 = _aimpactChat101SharedComponents;
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
          "vspecifier": "@aimpact/ailearn-app@0.0.32/assignment/view",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/kernel/core', dependency_5], ['@beyond-js/reactive/model', dependency_6], ['@aimpact/ailearn-app/coins-layout.widget', dependency_7], ['@beyond-js/kernel/texts', dependency_8], ['react', dependency_9], ['@aimpact/ailearn-app/components/ui', dependency_10], ['pragmate-ui/alert', dependency_11], ['pragmate-ui/components', dependency_12], ['pragmate-ui/image', dependency_13], ['@beyond-js/react-18-widgets/hooks', dependency_14], ['@aimpact/chat/shared/components', dependency_15]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-assignment-view",
        "vspecifier": "@aimpact/ailearn-app@0.0.32/assignment/view.widget",
        "is": "page",
        "route": "/assignments/${id}",
        "layout": "coins-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.32/assignment/view.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 2589136423,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _page = require("@beyond-js/react-18-widgets/page");
          var _store = require("./store");
          var _views = require("./views");
          /*bundle*/
          class Controller extends _page.PageReactWidgetController {
            #store;
            createStore() {
              this.#store = new _store.StoreManager();
              globalThis.store = this.#store;
              return this.#store;
            }
            get Widget() {
              return _views.View;
            }
            show() {
              this.#store.load(this.uri.vars.get('id'));
            }
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 4018084404,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _core = require("@aimpact/ailearn-sdk/core");
          var _core2 = require("@beyond-js/kernel/core");
          var _model = require("@beyond-js/reactive/model");
          var _coinsLayout = require("@aimpact/ailearn-app/coins-layout.widget");
          var _texts = require("@beyond-js/kernel/texts");
          var _beyond_context = require("beyond_context");
          class StoreManager extends _model.ReactiveModel {
            #model;
            get model() {
              return this.#model;
            }
            #texts = new _texts.CurrentTexts(_beyond_context.module.specifier);
            get texts() {
              return this.#texts?.value;
            }
            #accessed;
            get accessed() {
              return this.#accessed;
            }
            get ready() {
              return super.ready && this.#texts.ready;
            }
            /**
             * the id returned in the assignment load method represents the tracking id.
             * we store the assignment id in this property.
             */
            #assignmentId;
            get assignmentId() {
              return this.#assignmentId;
            }
            #found;
            get found() {
              return this.#found;
            }
            constructor() {
              super();
              this.#texts.on('change', this.triggerEvent);
            }
            async load(id) {
              try {
                _coinsLayout.LayoutBroker.clear();
                this.#assignmentId = id;
                this.#model = new _core.Assignment({
                  id
                });
                await this.#model.load({
                  id
                });
                this.#accessed = this.#model.accessed;
                super.ready = true;
                this.#found = true;
                this.triggerEvent();
              } catch (e) {
                super.ready = true;
                this.#found = false;
              }
            }
            async access() {
              try {
                const promise = new _core2.PendingPromise();
                await this.#model.access();
                /**
                 * TODO: Analyze if the setTimeout it's necessary
                 * The original idea is show a loading screen to show
                 * the processing action of the access method.
                 */
                globalThis.setTimeout(() => {
                  this.#accessed = true;
                  this.triggerEvent();
                  promise.resolve(true);
                }, 1500);
                return promise;
              } catch (e) {
                console.error(e);
              }
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 254260041,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useAssignmentContext = exports.AssignmentContext = void 0;
          var _react = require("react");
          const AssignmentContext = exports.AssignmentContext = _react.default.createContext({});
          const useAssignmentContext = () => _react.default.useContext(AssignmentContext);
          exports.useAssignmentContext = useAssignmentContext;
        }
      });

      /******************************
      INTERNAL MODULE: ./views/header
      ******************************/

      ims.set('./views/header', {
        hash: 1178746335,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Header = Header;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _alert = require("pragmate-ui/alert");
          var _components = require("pragmate-ui/components");
          var _react = require("react");
          var _context = require("./context");
          var _image = require("pragmate-ui/image");
          function Header() {
            const {
              store,
              texts,
              access
            } = (0, _context.useAssignmentContext)();
            const [fetching, setFetching] = _react.default.useState(false);
            const [showMessage, setShowMessage] = _react.default.useState(false);
            const {
              title,
              description,
              objective,
              picture
            } = store.model.module;
            const onClick = async () => {
              setFetching(true);
              await store.access();
              setFetching(false);
              setShowMessage(true);
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("header", {
              className: "assigment-header"
            }, _react.default.createElement(_image.Image, {
              src: picture,
              alt: title
            }), _react.default.createElement("h1", null, title), _react.default.createElement("p", {
              className: "p1"
            }, description)), _react.default.createElement(_ui.SubDivider, {
              title: texts.activities.title
            }, !access && !showMessage && _react.default.createElement(_components.Button, {
              variant: "primary",
              fetching: fetching,
              onClick: onClick
            }, texts.access)), showMessage && _react.default.createElement(_alert.Alert, {
              type: "success",
              className: "mt-10"
            }, texts.accessed));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 390390848,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _context = require("./context");
          var _components = require("@aimpact/chat/shared/components");
          var _empty = require("./list/empty");
          var _header = require("./header");
          var _list = require("./list");
          /*bundle*/
          function View({
            store
          }) {
            const [ready, setReady] = _react.default.useState(store.ready);
            const [, setItems] = _react.default.useState(store.model.items);
            const [access, setAccess] = _react.default.useState(store.model.accessed);
            const {
              texts
            } = store;
            (0, _hooks.useBinder)([store], () => {
              setReady(store.ready);
              setItems(store.model.items);
              setAccess(store.accessed);
            });
            if (ready && !store.found) return _react.default.createElement("app-missing", null);
            if (!ready) return _react.default.createElement(_components.PreloadScreen, null);
            const {
              activities
            } = store.model;
            const Control = activities.items ? _list.List : _empty.EmptyList;
            const contextValue = {
              texts,
              fetching: store.fetching,
              store,
              activities,
              access
            };
            return _react.default.createElement(_context.AssignmentContext.Provider, {
              value: contextValue
            }, _react.default.createElement(_ui.PageContainer, null, _react.default.createElement("div", {
              className: "general-container"
            }, _react.default.createElement(_header.Header, null), _react.default.createElement(Control, null))));
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./views/list/empty
      **********************************/

      ims.set('./views/list/empty', {
        hash: 2641747395,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyList = EmptyList;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("../context");
          /*bundle*/
          function EmptyList() {
            const {
              texts
            } = (0, _context.useAssignmentContext)();
            return _react.default.createElement(_ui.EmptyCard, {
              text: texts.empty,
              icon: "info"
            });
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./views/list/index
      **********************************/

      ims.set('./views/list/index', {
        hash: 394293936,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.List = List;
          var _item = require("./item");
          var _react = require("react");
          var _context = require("../context");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          /*bundle*/
          function List() {
            const {
              activities
            } = (0, _context.useAssignmentContext)();
            return _react.default.createElement(_ui.ListContainer, {
              items: activities.items,
              control: _item.Item
            });
          }
        }
      });

      /*********************************
      INTERNAL MODULE: ./views/list/item
      *********************************/

      ims.set('./views/list/item', {
        hash: 1675374334,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Item = Item;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _react = require("react");
          var _context = require("../context");
          /*bundle*/
          function Item({
            data: item,
            index
          }) {
            const {
              store,
              texts,
              access
            } = (0, _context.useAssignmentContext)();
            const type = item.type === 'multiple-choice' ? 'assessment' : item.type;
            let url = `/assignments/${store.assignmentId}/${type}/${item.id}`;
            if (!!access && ['conversation', 'content-theory', 'debate', 'character-talk'].includes(item.type)) {
              url += `/chat/${item.chat.id}`;
            }
            // const data = {
            // 	classroom: 'Classroom',
            // 	image: item.picture
            // };
            const numberingItem = index + 1;
            return _react.default.createElement(_ui.Card, {
              data: item,
              link: url,
              disabled: !access
            }, _react.default.createElement(_ui.CardContent, {
              option: "column"
            }, _react.default.createElement("section", {
              className: "card-footer__container"
            }, _react.default.createElement("div", {
              className: "card__text-content"
            }, _react.default.createElement("span", {
              className: "p2"
            }, texts.textCounter, numberingItem), _react.default.createElement("h4", {
              className: "card__title mt-10"
            }, item.title), _react.default.createElement("span", {
              className: "card__subtitle p2"
            }, item.description)))));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./views/index",
        "from": "View",
        "name": "View"
      }, {
        "im": "./views/list/empty",
        "from": "EmptyList",
        "name": "EmptyList"
      }, {
        "im": "./views/list/index",
        "from": "List",
        "name": "List"
      }, {
        "im": "./views/list/item",
        "from": "Item",
        "name": "Item"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'View') && _export("View", View = require ? require('./views/index').View : value);
        (require || prop === 'EmptyList') && _export("EmptyList", EmptyList = require ? require('./views/list/empty').EmptyList : value);
        (require || prop === 'List') && _export("List", List = require ? require('./views/list/index').List : value);
        (require || prop === 'Item') && _export("Item", Item = require ? require('./views/list/item').Item : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJnbG9iYWxUaGlzIiwiV2lkZ2V0IiwiVmlldyIsInNob3ciLCJsb2FkIiwidXJpIiwidmFycyIsImdldCIsImV4cG9ydHMiLCJfY29yZSIsIl9jb3JlMiIsIl9tb2RlbCIsIl9jb2luc0xheW91dCIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsIlJlYWN0aXZlTW9kZWwiLCJtb2RlbCIsInRleHRzIiwiQ3VycmVudFRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidmFsdWUiLCJhY2Nlc3NlZCIsInJlYWR5IiwiYXNzaWdubWVudElkIiwiZm91bmQiLCJjb25zdHJ1Y3RvciIsIm9uIiwidHJpZ2dlckV2ZW50IiwiaWQiLCJMYXlvdXRCcm9rZXIiLCJjbGVhciIsIkFzc2lnbm1lbnQiLCJlIiwiYWNjZXNzIiwicHJvbWlzZSIsIlBlbmRpbmdQcm9taXNlIiwic2V0VGltZW91dCIsInJlc29sdmUiLCJjb25zb2xlIiwiZXJyb3IiLCJfcmVhY3QiLCJBc3NpZ25tZW50Q29udGV4dCIsImRlZmF1bHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQXNzaWdubWVudENvbnRleHQiLCJ1c2VDb250ZXh0IiwiX3VpIiwiX2FsZXJ0IiwiX2NvbXBvbmVudHMiLCJfY29udGV4dCIsIl9pbWFnZSIsIkhlYWRlciIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJ1c2VTdGF0ZSIsInNob3dNZXNzYWdlIiwic2V0U2hvd01lc3NhZ2UiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwib2JqZWN0aXZlIiwicGljdHVyZSIsIm9uQ2xpY2siLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJjbGFzc05hbWUiLCJJbWFnZSIsInNyYyIsImFsdCIsIlN1YkRpdmlkZXIiLCJhY3Rpdml0aWVzIiwiQnV0dG9uIiwidmFyaWFudCIsIkFsZXJ0IiwidHlwZSIsIl9ob29rcyIsIl9lbXB0eSIsIl9oZWFkZXIiLCJfbGlzdCIsInNldFJlYWR5Iiwic2V0SXRlbXMiLCJpdGVtcyIsInNldEFjY2VzcyIsInVzZUJpbmRlciIsIlByZWxvYWRTY3JlZW4iLCJDb250cm9sIiwiTGlzdCIsIkVtcHR5TGlzdCIsImNvbnRleHRWYWx1ZSIsIlByb3ZpZGVyIiwiUGFnZUNvbnRhaW5lciIsIkVtcHR5Q2FyZCIsInRleHQiLCJlbXB0eSIsImljb24iLCJfaXRlbSIsIkxpc3RDb250YWluZXIiLCJjb250cm9sIiwiSXRlbSIsImRhdGEiLCJpdGVtIiwiaW5kZXgiLCJ1cmwiLCJpbmNsdWRlcyIsImNoYXQiLCJudW1iZXJpbmdJdGVtIiwiQ2FyZCIsImxpbmsiLCJkaXNhYmxlZCIsIkNhcmRDb250ZW50Iiwib3B0aW9uIiwidGV4dENvdW50ZXIiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2hlYWRlci50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xpc3QvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2xpc3QvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xpc3QvaXRlbS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDakQsQ0FB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