System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-sdk@1.0.0/tracking", "@beyond-js/kernel@0.1.9/core", "@beyond-js/reactive@1.1.12/model", "@aimpact/ailearn-app@0.0.46.dev-06/main-layout.widget", "@beyond-js/kernel@0.1.9/texts", "react@18.2.0", "@aimpact/ailearn-app@0.0.46.dev-06/components/ui", "pragmate-ui@0.1.1/alert", "pragmate-ui@0.1.1/components", "pragmate-ui@0.1.1/image", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/chat@1.0.1/shared/components"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp0046Dev06MainLayoutWidget) {
      dependency_7 = _aimpactAilearnApp0046Dev06MainLayoutWidget;
    }, function (_beyondJsKernel019Texts) {
      dependency_8 = _beyondJsKernel019Texts;
    }, function (_react2) {
      dependency_9 = _react2;
    }, function (_aimpactAilearnApp0046Dev06ComponentsUi) {
      dependency_10 = _aimpactAilearnApp0046Dev06ComponentsUi;
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
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.0.46.dev-06"], ["@aimpact/ailearn-app", "0.0.46.dev-06"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.46.dev-06/assignment/view",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/tracking', dependency_4], ['@beyond-js/kernel/core', dependency_5], ['@beyond-js/reactive/model', dependency_6], ['@aimpact/ailearn-app/main-layout.widget', dependency_7], ['@beyond-js/kernel/texts', dependency_8], ['react', dependency_9], ['@aimpact/ailearn-app/components/ui', dependency_10], ['pragmate-ui/alert', dependency_11], ['pragmate-ui/components', dependency_12], ['pragmate-ui/image', dependency_13], ['@beyond-js/react-18-widgets/hooks', dependency_14], ['@aimpact/chat/shared/components', dependency_15]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-assignment-view",
        "vspecifier": "@aimpact/ailearn-app@0.0.46.dev-06/assignment/view.widget",
        "is": "page",
        "route": "/assignments/${id}",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.46.dev-06/assignment/view.widget');
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
        hash: 3496669586,
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
                this.#model = new _tracking.Tracking({
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