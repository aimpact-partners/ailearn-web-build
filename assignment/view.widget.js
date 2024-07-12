System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-sdk@1.0.0/tracking", "@beyond-js/kernel@0.1.9/core", "@beyond-js/reactive@1.1.12/model", "@aimpact/ailearn-app@0.0.57/main-layout.widget", "@beyond-js/kernel@0.1.9/texts", "react@18.2.0", "@aimpact/ailearn-app@0.0.57/components/ui", "pragmate-ui@0.1.1/alert", "pragmate-ui@0.1.1/components", "pragmate-ui@0.1.1/image", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/chat@1.0.2/shared/components"], function (_export, _context2) {
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
    }, function (_aimpactAilearnSdk100Tracking) {
      dependency_4 = _aimpactAilearnSdk100Tracking;
    }, function (_beyondJsKernel019Core) {
      dependency_5 = _beyondJsKernel019Core;
    }, function (_beyondJsReactive1112Model) {
      dependency_6 = _beyondJsReactive1112Model;
    }, function (_aimpactAilearnApp0057MainLayoutWidget) {
      dependency_7 = _aimpactAilearnApp0057MainLayoutWidget;
    }, function (_beyondJsKernel019Texts) {
      dependency_8 = _beyondJsKernel019Texts;
    }, function (_react2) {
      dependency_9 = _react2;
    }, function (_aimpactAilearnApp0057ComponentsUi) {
      dependency_10 = _aimpactAilearnApp0057ComponentsUi;
    }, function (_pragmateUi011Alert) {
      dependency_11 = _pragmateUi011Alert;
    }, function (_pragmateUi011Components) {
      dependency_12 = _pragmateUi011Components;
    }, function (_pragmateUi011Image) {
      dependency_13 = _pragmateUi011Image;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_14 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactChat102SharedComponents) {
      dependency_15 = _aimpactChat102SharedComponents;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.2"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.0.57"], ["@aimpact/ailearn-app", "0.0.57"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.57/assignment/view",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/tracking', dependency_4], ['@beyond-js/kernel/core', dependency_5], ['@beyond-js/reactive/model', dependency_6], ['@aimpact/ailearn-app/main-layout.widget', dependency_7], ['@beyond-js/kernel/texts', dependency_8], ['react', dependency_9], ['@aimpact/ailearn-app/components/ui', dependency_10], ['pragmate-ui/alert', dependency_11], ['pragmate-ui/components', dependency_12], ['pragmate-ui/image', dependency_13], ['@beyond-js/react-18-widgets/hooks', dependency_14], ['@aimpact/chat/shared/components', dependency_15]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-assignment-view",
        "vspecifier": "@aimpact/ailearn-app@0.0.57/assignment/view.widget",
        "is": "page",
        "route": "/assignments/${id}",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.57/assignment/view.widget');
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
        hash: 987937334,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _tracking = require("@aimpact/ailearn-sdk/tracking");
          var _core = require("@beyond-js/kernel/core");
          var _model = require("@beyond-js/reactive/model");
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
          var _texts = require("@beyond-js/kernel/texts");
          var _beyond_context = require("beyond_context");
          // import { Assignment } from '@aimpact/ailearn-sdk/core';

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
                _mainLayout.LayoutBroker.clear();
                this.#assignmentId = id;
                this.#model = _tracking.Tracking.get({
                  assignmentId: id
                });
                await this.#model.load({
                  id
                });
                this.#accessed = this.#model.accessed;
                super.ready = true;
                this.#found = true;
                this.triggerEvent();
              } catch (e) {
                console.error(e);
                super.ready = true;
                this.#found = false;
              }
            }
            async access() {
              try {
                const promise = new _core.PendingPromise();
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
        hash: 2400834756,
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
            }, _react.default.createElement(_ui.EntityImage, {
              entity: "module",
              src: picture,
              alt: title
            }), _react.default.createElement("h1", null, title), _react.default.createElement("p", {
              className: "p1"
            }, description)), _react.default.createElement(_ui.PageTitle, {
              as: "h3",
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
        hash: 2820988512,
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
          var _empty = require("./list/empty");
          var _header = require("./header");
          var _list = require("./list");
          var _preload = require("./preload");
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
            if (!ready) return _react.default.createElement(_preload.Preload, null);
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
        hash: 1960730437,
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
              type: item.type,
              entity: "activity",
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
            }, texts.textCounter, numberingItem), _react.default.createElement("h6", {
              className: "card__title mt-10"
            }, item.title, " "), _react.default.createElement("span", {
              className: "card__subtitle p2"
            }, item.description)))));
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/preload
      *******************************/

      ims.set('./views/preload', {
        hash: 3672949900,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Preload = Preload;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _image = require("pragmate-ui/image");
          var _react = require("react");
          var _context = require("./context");
          function Preload() {
            const {
              store,
              texts,
              access
            } = (0, _context.useAssignmentContext)();
            return _react.default.createElement(_ui.PageContainer, null, _react.default.createElement("header", {
              className: "assigment-header"
            }, _react.default.createElement(_image.Image, {
              className: "entity-image image--preload"
            }), _react.default.createElement(_ui.SkeletonText, {
              height: "5px",
              width: "100px"
            }), _react.default.createElement(_ui.SkeletonText, {
              height: "5px",
              width: "200px"
            })), _react.default.createElement(_ui.PageTitle, {
              preload: true
            }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJnbG9iYWxUaGlzIiwiV2lkZ2V0IiwiVmlldyIsInNob3ciLCJsb2FkIiwidXJpIiwidmFycyIsImdldCIsImV4cG9ydHMiLCJfdHJhY2tpbmciLCJfY29yZSIsIl9tb2RlbCIsIl9tYWluTGF5b3V0IiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ2YWx1ZSIsImFjY2Vzc2VkIiwicmVhZHkiLCJhc3NpZ25tZW50SWQiLCJmb3VuZCIsImNvbnN0cnVjdG9yIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJpZCIsIkxheW91dEJyb2tlciIsImNsZWFyIiwiVHJhY2tpbmciLCJlIiwiY29uc29sZSIsImVycm9yIiwiYWNjZXNzIiwicHJvbWlzZSIsIlBlbmRpbmdQcm9taXNlIiwic2V0VGltZW91dCIsInJlc29sdmUiLCJfcmVhY3QiLCJBc3NpZ25tZW50Q29udGV4dCIsImRlZmF1bHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQXNzaWdubWVudENvbnRleHQiLCJ1c2VDb250ZXh0IiwiX3VpIiwiX2FsZXJ0IiwiX2NvbXBvbmVudHMiLCJfY29udGV4dCIsIkhlYWRlciIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJ1c2VTdGF0ZSIsInNob3dNZXNzYWdlIiwic2V0U2hvd01lc3NhZ2UiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwicGljdHVyZSIsIm9uQ2xpY2siLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJjbGFzc05hbWUiLCJFbnRpdHlJbWFnZSIsImVudGl0eSIsInNyYyIsImFsdCIsIlBhZ2VUaXRsZSIsImFzIiwiYWN0aXZpdGllcyIsIkJ1dHRvbiIsInZhcmlhbnQiLCJBbGVydCIsInR5cGUiLCJfaG9va3MiLCJfZW1wdHkiLCJfaGVhZGVyIiwiX2xpc3QiLCJfcHJlbG9hZCIsInNldFJlYWR5Iiwic2V0SXRlbXMiLCJpdGVtcyIsInNldEFjY2VzcyIsInVzZUJpbmRlciIsIlByZWxvYWQiLCJDb250cm9sIiwiTGlzdCIsIkVtcHR5TGlzdCIsImNvbnRleHRWYWx1ZSIsIlByb3ZpZGVyIiwiUGFnZUNvbnRhaW5lciIsIkVtcHR5Q2FyZCIsInRleHQiLCJlbXB0eSIsImljb24iLCJfaXRlbSIsIkxpc3RDb250YWluZXIiLCJjb250cm9sIiwiSXRlbSIsImRhdGEiLCJpdGVtIiwiaW5kZXgiLCJ1cmwiLCJpbmNsdWRlcyIsImNoYXQiLCJudW1iZXJpbmdJdGVtIiwiQ2FyZCIsImxpbmsiLCJkaXNhYmxlZCIsIkNhcmRDb250ZW50Iiwib3B0aW9uIiwidGV4dENvdW50ZXIiLCJfaW1hZ2UiLCJJbWFnZSIsIlNrZWxldG9uVGV4dCIsImhlaWdodCIsIndpZHRoIiwicHJlbG9hZCJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvaGVhZGVyLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvbGlzdC9lbXB0eS50c3giLCIvdHMvdmlld3MvbGlzdC9pbmRleC50c3giLCIvdHMvdmlld3MvbGlzdC9pdGVtLnRzeCIsIi90cy92aWV3cy9wcmVsb2FkLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxH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