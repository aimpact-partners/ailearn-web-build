System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.3/page", "@aimpact/chat@1.0.1/wrapper", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.1.6/model", "react@18.2.0", "@aimpact/ailearn-app@0.0.23/components/ui", "@aimpact/chat@1.0.1/shared/components", "@beyond-js/react-18-widgets@1.0.3/hooks", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.0.3/components", "@aimpact/ailearn-app@0.0.23/config"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    View: void 0
  });
  return {
    setters: [function (_beyondJsWidgets015Render) {
      dependency_0 = _beyondJsWidgets015Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_beyondJsReact18Widgets103Page) {
      dependency_3 = _beyondJsReact18Widgets103Page;
    }, function (_aimpactChat101Wrapper) {
      dependency_4 = _aimpactChat101Wrapper;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_5 = _aimpactAilearnSdk100Core;
    }, function (_beyondJsReactive116Model) {
      dependency_6 = _beyondJsReactive116Model;
    }, function (_react2) {
      dependency_7 = _react2;
    }, function (_aimpactAilearnApp0023ComponentsUi) {
      dependency_8 = _aimpactAilearnApp0023ComponentsUi;
    }, function (_aimpactChat101SharedComponents) {
      dependency_9 = _aimpactChat101SharedComponents;
    }, function (_beyondJsReact18Widgets103Hooks) {
      dependency_10 = _beyondJsReact18Widgets103Hooks;
    }, function (_aimpactChat101SharedHooks) {
      dependency_11 = _aimpactChat101SharedHooks;
    }, function (_pragmateUi003Components) {
      dependency_12 = _pragmateUi003Components;
    }, function (_aimpactAilearnApp0023Config) {
      dependency_13 = _aimpactAilearnApp0023Config;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-api", "0.2.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.2.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.6"], ["pragmate-ui", "0.0.3"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.3"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.23"], ["@aimpact/ailearn-app", "0.0.23"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.24/assignments/student/list",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/chat/wrapper', dependency_4], ['@aimpact/ailearn-sdk/core', dependency_5], ['@beyond-js/reactive/model', dependency_6], ['react', dependency_7], ['@aimpact/ailearn-app/components/ui', dependency_8], ['@aimpact/chat/shared/components', dependency_9], ['@beyond-js/react-18-widgets/hooks', dependency_10], ['@aimpact/chat/shared/hooks', dependency_11], ['pragmate-ui/components', dependency_12], ['@aimpact/ailearn-app/config', dependency_13]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-assignments-student-list",
        "vspecifier": "@aimpact/ailearn-app@0.0.24/assignments/student/list.widget",
        "is": "page",
        "route": "/assignments/${id}/student/list",
        "layout": "general-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.24/assignments/student/list.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 2972444672,
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
              return this.#store;
            }
            get Widget() {
              return _views.View;
            }
            /**
             * this method is executed when the widget is showd
             */
            show() {
              this.#store.load(this.uri.vars.get('id'));
            }
            /**
             * this method is executed when the widget is hidden
             */
            hide() {}
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 2980597350,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _wrapper = require("@aimpact/chat/wrapper");
          var _core = require("@aimpact/ailearn-sdk/core");
          var _model = require("@beyond-js/reactive/model");
          class StoreManager extends _model.ReactiveModel {
            #model;
            get model() {
              return this.#model;
            }
            /**
             *
             * @param id Google Classroom id
             */
            load = async id => {
              try {
                if (this.#model && this.#model.id !== id) {
                  this.#model.off('change', this.triggerEvent);
                  this.#model = undefined;
                }
                this.#model = new _core.Classroom({
                  id
                });
                this.#model.on('change', this.triggerEvent);
                await this.#model.load({
                  id
                });
                this.ready = true;
              } catch (error) {
                if (error === 'ERROR_DATA_QUERY') {
                  this.error = true;
                  this.ready = true;
                }
              }
            };
            async getLessonData(lesson) {
              await lesson.load();
              const {
                items: chats
              } = _wrapper.AppWrapper.chats;
              const items = chats.filter(item => {
                if (!item.metadata) return;
                if (item.metadata.lesson?.id !== lesson.id) return;
                return true;
              });
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 3962165658,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useListContext = exports.ListContext = void 0;
          var _react = require("react");
          const ListContext = exports.ListContext = _react.default.createContext({});
          const useListContext = () => _react.default.useContext(ListContext);
          exports.useListContext = useListContext;
        }
      });

      /******************************
      INTERNAL MODULE: ./views/header
      ******************************/

      ims.set('./views/header', {
        hash: 3128837205,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Header = Header;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _react = require("react");
          var _context = require("./context");
          function Header() {
            const {
              texts
            } = (0, _context.useListContext)();
            return _react.default.createElement(_ui.PageHeader, {
              breadcrumb: [['AI-Learn', '/'], ['Assignment List']]
            });
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 1074378071,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _empty = require("./list/empty");
          var _header = require("./header");
          var _list = require("./list");
          var _context = require("./context");
          var _components = require("@aimpact/chat/shared/components");
          var _react = require("react");
          var _beyond_context = require("beyond_context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _hooks2 = require("@aimpact/chat/shared/hooks");
          /*bundle*/
          function View({
            store
          }) {
            const [ready, setReady] = _react.default.useState(store.ready);
            const [error, setError] = _react.default.useState(store.error);
            const [textsReady, texts] = (0, _hooks2.useTexts)(_beyond_context.module.specifier);
            const [items, setItems] = _react.default.useState(store?.model?.assignments);
            (0, _hooks.useBinder)([store], () => {
              setReady(store.ready);
              setError(store.error);
              setItems(store.model?.assignments);
            });
            if (!ready || !textsReady) return _react.default.createElement(_components.PreloadScreen, null);
            if (error) return _react.default.createElement(_ui.NotFound, {
              texts: texts,
              textsReady: textsReady
            });
            const {
              assignments
            } = store.model;
            const Control = assignments?.length ? _list.List : _empty.EmptyList;
            return _react.default.createElement(_context.ListContext.Provider, {
              value: {
                store,
                items: assignments,
                texts,
                fetching: store.fetching
              }
            }, _react.default.createElement(_header.Header, null), _react.default.createElement("main", {
              className: "page__container"
            }, _react.default.createElement(_ui.HeaderCard, {
              option: "light",
              title: store.model.name
            }, _react.default.createElement("p", {
              className: "header-container__subtitle"
            }, " ", texts.description, " ")), _react.default.createElement(_ui.SubDivider, {
              titleText: texts.dividerTitle
            }), _react.default.createElement(Control, null)));
          }
        }
      });

      /***************************************
      INTERNAL MODULE: ./views/list/LessonInfo
      ***************************************/

      ims.set('./views/list/LessonInfo', {
        hash: 1155994592,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LessonInfo = LessonInfo;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          function LessonInfo({
            assignmentId,
            topics
          }) {
            //todo: set correct url @everyone
            if (!assignmentId || !topics) return null;
            return _react.default.createElement("section", {
              className: "item__actions"
            }, topics.map(topic => {
              let url = `/assignments/dashboard/${assignmentId}.${topic.id}/classwork`;
              return _react.default.createElement(_components.Link, {
                key: url,
                href: url
              }, topic.title);
            }));
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./views/list/empty
      **********************************/

      ims.set('./views/list/empty', {
        hash: 1244498565,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyList = EmptyList;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("../context");
          function EmptyList() {
            const {
              texts
            } = (0, _context.useListContext)();
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
        hash: 207350619,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.List = List;
          var _react = require("react");
          var _item = require("./item");
          var _context = require("../context");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          function List() {
            const {
              items
            } = (0, _context.useListContext)();
            return _react.default.createElement(_ui.ListContainer, {
              items: items,
              control: _item.Item
            });
          }
        }
      });

      /*********************************
      INTERNAL MODULE: ./views/list/item
      *********************************/

      ims.set('./views/list/item', {
        hash: 585377256,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Item = Item;
          var _react = require("react");
          var _context = require("../context");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          function Item({
            data: item
          }) {
            const {
              texts
            } = (0, _context.useListContext)();
            const url = `/assignments/${item.id}`;
            const data = {
              image: item.module.picture
            };
            return _react.default.createElement(_ui.Card, {
              data: data,
              link: url
            }, _react.default.createElement(_ui.CardContent, {
              option: "column"
            }, _react.default.createElement("section", {
              className: "card-footer__container"
            }, _react.default.createElement("div", {
              className: "card__text-content"
            }, _react.default.createElement("h3", {
              className: "card__title"
            }, item.module.title), _react.default.createElement("span", {
              className: "card__subtitle disabled-text p2"
            }, item.module.description))), _react.default.createElement("div", {
              className: "card__footer-actions"
            }, _react.default.createElement("hr", {
              className: "card__divider"
            }), _react.default.createElement("div", {
              className: "card__details"
            }, _react.default.createElement("span", {
              className: "card__text-hover p2"
            }, texts.moduleAccess)))));
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
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'View') && _export("View", View = require ? require('./views/index').View : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsImV4cG9ydHMiLCJfd3JhcHBlciIsIl9jb3JlIiwiX21vZGVsIiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwiaWQiLCJvZmYiLCJ0cmlnZ2VyRXZlbnQiLCJ1bmRlZmluZWQiLCJDbGFzc3Jvb20iLCJvbiIsInJlYWR5IiwiZXJyb3IiLCJnZXRMZXNzb25EYXRhIiwibGVzc29uIiwiaXRlbXMiLCJjaGF0cyIsIkFwcFdyYXBwZXIiLCJmaWx0ZXIiLCJpdGVtIiwibWV0YWRhdGEiLCJfcmVhY3QiLCJMaXN0Q29udGV4dCIsImRlZmF1bHQiLCJjcmVhdGVDb250ZXh0IiwidXNlTGlzdENvbnRleHQiLCJ1c2VDb250ZXh0IiwiX3VpIiwiX2NvbnRleHQiLCJIZWFkZXIiLCJ0ZXh0cyIsImNyZWF0ZUVsZW1lbnQiLCJQYWdlSGVhZGVyIiwiYnJlYWRjcnVtYiIsIl9lbXB0eSIsIl9oZWFkZXIiLCJfbGlzdCIsIl9jb21wb25lbnRzIiwiX2JleW9uZF9jb250ZXh0IiwiX2hvb2tzIiwiX2hvb2tzMiIsInNldFJlYWR5IiwidXNlU3RhdGUiLCJzZXRFcnJvciIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInNldEl0ZW1zIiwiYXNzaWdubWVudHMiLCJ1c2VCaW5kZXIiLCJQcmVsb2FkU2NyZWVuIiwiTm90Rm91bmQiLCJDb250cm9sIiwibGVuZ3RoIiwiTGlzdCIsIkVtcHR5TGlzdCIsIlByb3ZpZGVyIiwidmFsdWUiLCJmZXRjaGluZyIsImNsYXNzTmFtZSIsIkhlYWRlckNhcmQiLCJvcHRpb24iLCJ0aXRsZSIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsIlN1YkRpdmlkZXIiLCJ0aXRsZVRleHQiLCJkaXZpZGVyVGl0bGUiLCJMZXNzb25JbmZvIiwiYXNzaWdubWVudElkIiwidG9waWNzIiwibWFwIiwidG9waWMiLCJ1cmwiLCJMaW5rIiwia2V5IiwiaHJlZiIsIkVtcHR5Q2FyZCIsInRleHQiLCJlbXB0eSIsImljb24iLCJfaXRlbSIsIkxpc3RDb250YWluZXIiLCJjb250cm9sIiwiSXRlbSIsImRhdGEiLCJpbWFnZSIsInBpY3R1cmUiLCJDYXJkIiwibGluayIsIkNhcmRDb250ZW50IiwibW9kdWxlQWNjZXNzIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9saXN0L0xlc3NvbkluZm8udHN4IiwiL3RzL3ZpZXdzL2xpc3QvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2xpc3QvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xpc3QvaXRlbS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUosTUFBQSxDQUFBTSxZQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNuQjtZQUNBLElBQUlHLE1BQU1BLENBQUE7Y0FDVCxPQUFPTixNQUFBLENBQUFPLElBQUk7WUFDWjtZQUVBOzs7WUFHQUMsSUFBSUEsQ0FBQTtjQUNILElBQUksQ0FBQyxDQUFBTCxLQUFNLENBQUNNLElBQUksQ0FBQyxJQUFJLENBQUNDLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDMUM7WUFFQTs7O1lBR0FDLElBQUlBLENBQUEsR0FBSTs7VUFDUkMsT0FBQSxDQUFBYixVQUFBLEdBQUFBLFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDMUJELElBQUFjLFFBQUEsR0FBQWpCLE9BQUE7VUFDQSxJQUFBa0IsS0FBQSxHQUFBbEIsT0FBQTtVQUNBLElBQUFtQixNQUFBLEdBQUFuQixPQUFBO1VBRU0sTUFBT08sWUFBYSxTQUFRWSxNQUFBLENBQUFDLGFBQXFCO1lBQ3RELENBQUFDLEtBQU07WUFDTixJQUFJQSxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsS0FBTTtZQUNuQjtZQUlBOzs7O1lBSUFWLElBQUksR0FBRyxNQUFPVyxFQUFVLElBQUk7Y0FDM0IsSUFBSTtnQkFDSCxJQUFJLElBQUksQ0FBQyxDQUFBRCxLQUFNLElBQUksSUFBSSxDQUFDLENBQUFBLEtBQU0sQ0FBQ0MsRUFBRSxLQUFLQSxFQUFFLEVBQUU7a0JBQ3pDLElBQUksQ0FBQyxDQUFBRCxLQUFNLENBQUNFLEdBQUcsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDQyxZQUFZLENBQUM7a0JBQzVDLElBQUksQ0FBQyxDQUFBSCxLQUFNLEdBQUdJLFNBQVM7O2dCQUd4QixJQUFJLENBQUMsQ0FBQUosS0FBTSxHQUFHLElBQUlILEtBQUEsQ0FBQVEsU0FBUyxDQUFDO2tCQUFFSjtnQkFBRSxDQUFFLENBQUM7Z0JBQ25DLElBQUksQ0FBQyxDQUFBRCxLQUFNLENBQUNNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDSCxZQUFZLENBQUM7Z0JBQzNDLE1BQU0sSUFBSSxDQUFDLENBQUFILEtBQU0sQ0FBQ1YsSUFBSSxDQUFDO2tCQUFFVztnQkFBRSxDQUFFLENBQUM7Z0JBQzlCLElBQUksQ0FBQ00sS0FBSyxHQUFHLElBQUk7ZUFFakIsQ0FBQyxPQUFPQyxLQUFLLEVBQUM7Z0JBQ2QsSUFBR0EsS0FBSyxLQUFLLGtCQUFrQixFQUFDO2tCQUMvQixJQUFJLENBQUNBLEtBQUssR0FBRyxJQUFJO2tCQUNqQixJQUFJLENBQUNELEtBQUssR0FBRyxJQUFJOzs7WUFHcEIsQ0FBQztZQUVELE1BQU1FLGFBQWFBLENBQUNDLE1BQU07Y0FDekIsTUFBTUEsTUFBTSxDQUFDcEIsSUFBSSxFQUFFO2NBQ25CLE1BQU07Z0JBQUVxQixLQUFLLEVBQUVDO2NBQUssQ0FBRSxHQUFHaEIsUUFBQSxDQUFBaUIsVUFBVSxDQUFDRCxLQUFLO2NBRXpDLE1BQU1ELEtBQUssR0FBR0MsS0FBSyxDQUFDRSxNQUFNLENBQUNDLElBQUksSUFBRztnQkFDakMsSUFBSSxDQUFDQSxJQUFJLENBQUNDLFFBQVEsRUFBRTtnQkFFcEIsSUFBSUQsSUFBSSxDQUFDQyxRQUFRLENBQUNOLE1BQU0sRUFBRVQsRUFBRSxLQUFLUyxNQUFNLENBQUNULEVBQUUsRUFBRTtnQkFDNUMsT0FBTyxJQUFJO2NBQ1osQ0FBQyxDQUFDO1lBQ0g7O1VBQ0FOLE9BQUEsQ0FBQVQsWUFBQSxHQUFBQSxZQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQy9DRCxJQUFBK0IsTUFBQSxHQUFBdEMsT0FBQTtVQVNPLE1BQU11QyxXQUFXLEdBQUF2QixPQUFBLENBQUF1QixXQUFBLEdBQUdELE1BQUEsQ0FBQUUsT0FBSyxDQUFDQyxhQUFhLENBQUMsRUFBa0IsQ0FBQztVQUMzRCxNQUFNQyxjQUFjLEdBQUdBLENBQUEsS0FBTUosTUFBQSxDQUFBRSxPQUFLLENBQUNHLFVBQVUsQ0FBQ0osV0FBVyxDQUFDO1VBQUN2QixPQUFBLENBQUEwQixjQUFBLEdBQUFBLGNBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDVmxFLElBQUFFLEdBQUEsR0FBQTVDLE9BQUE7VUFDQSxJQUFBc0MsTUFBQSxHQUFBdEMsT0FBQTtVQUNBLElBQUE2QyxRQUFBLEdBQUE3QyxPQUFBO1VBRU0sU0FBVThDLE1BQU1BLENBQUE7WUFDckIsTUFBTTtjQUFFQztZQUFLLENBQUUsR0FBRyxJQUFBRixRQUFBLENBQUFILGNBQWMsR0FBRTtZQUNsQyxPQUFPSixNQUFBLENBQUFFLE9BQUEsQ0FBQVEsYUFBQSxDQUFDSixHQUFBLENBQUFLLFVBQVU7Y0FBQ0MsVUFBVSxFQUFFLENBQUMsQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztZQUFDLEVBQUk7VUFDNUU7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDUEEsSUFBQU4sR0FBQSxHQUFBNUMsT0FBQTtVQUVBLElBQUFtRCxNQUFBLEdBQUFuRCxPQUFBO1VBQ0EsSUFBQW9ELE9BQUEsR0FBQXBELE9BQUE7VUFDQSxJQUFBcUQsS0FBQSxHQUFBckQsT0FBQTtVQUNBLElBQUE2QyxRQUFBLEdBQUE3QyxPQUFBO1VBQ0EsSUFBQXNELFdBQUEsR0FBQXRELE9BQUE7VUFDQSxJQUFBc0MsTUFBQSxHQUFBdEMsT0FBQTtVQUVBLElBQUF1RCxlQUFBLEdBQUF2RCxPQUFBO1VBQ0EsSUFBQXdELE1BQUEsR0FBQXhELE9BQUE7VUFDQSxJQUFBeUQsT0FBQSxHQUFBekQsT0FBQTtVQUVPO1VBQVUsU0FDUlMsSUFBSUEsQ0FBQztZQUFFSjtVQUFLLENBQTJCO1lBQy9DLE1BQU0sQ0FBQ3VCLEtBQUssRUFBRThCLFFBQVEsQ0FBQyxHQUFHcEIsTUFBQSxDQUFBRSxPQUFLLENBQUNtQixRQUFRLENBQUN0RCxLQUFLLENBQUN1QixLQUFLLENBQUM7WUFDckQsTUFBTSxDQUFDQyxLQUFLLEVBQUUrQixRQUFRLENBQUMsR0FBR3RCLE1BQUEsQ0FBQUUsT0FBSyxDQUFDbUIsUUFBUSxDQUFDdEQsS0FBSyxDQUFDd0IsS0FBSyxDQUFDO1lBQ3JELE1BQU0sQ0FBQ2dDLFVBQVUsRUFBRWQsS0FBSyxDQUFDLEdBQW1DLElBQUFVLE9BQUEsQ0FBQUssUUFBUSxFQUFDUCxlQUFBLENBQUFRLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDO1lBQ3RGLE1BQU0sQ0FBQ2hDLEtBQUssRUFBRWlDLFFBQVEsQ0FBQyxHQUFHM0IsTUFBQSxDQUFBRSxPQUFLLENBQUNtQixRQUFRLENBQUN0RCxLQUFLLEVBQUVnQixLQUFLLEVBQUU2QyxXQUFXLENBQUM7WUFFbkUsSUFBQVYsTUFBQSxDQUFBVyxTQUFTLEVBQUMsQ0FBQzlELEtBQUssQ0FBQyxFQUFFLE1BQUs7Y0FDdkJxRCxRQUFRLENBQUNyRCxLQUFLLENBQUN1QixLQUFLLENBQUM7Y0FDckJnQyxRQUFRLENBQUN2RCxLQUFLLENBQUN3QixLQUFLLENBQUM7Y0FDckJvQyxRQUFRLENBQUM1RCxLQUFLLENBQUNnQixLQUFLLEVBQUU2QyxXQUFXLENBQUM7WUFDbkMsQ0FBQyxDQUFDO1lBRUYsSUFBSSxDQUFDdEMsS0FBSyxJQUFJLENBQUNpQyxVQUFVLEVBQUUsT0FBT3ZCLE1BQUEsQ0FBQUUsT0FBQSxDQUFBUSxhQUFBLENBQUNNLFdBQUEsQ0FBQWMsYUFBYSxPQUFHO1lBQ25ELElBQUl2QyxLQUFLLEVBQUUsT0FBT1MsTUFBQSxDQUFBRSxPQUFBLENBQUFRLGFBQUEsQ0FBQ0osR0FBQSxDQUFBeUIsUUFBUTtjQUFDdEIsS0FBSyxFQUFFQSxLQUFLO2NBQUVjLFVBQVUsRUFBRUE7WUFBVSxFQUFJO1lBRXBFLE1BQU07Y0FBRUs7WUFBVyxDQUFFLEdBQUc3RCxLQUFLLENBQUNnQixLQUFLO1lBQ25DLE1BQU1pRCxPQUFPLEdBQUdKLFdBQVcsRUFBRUssTUFBTSxHQUFHbEIsS0FBQSxDQUFBbUIsSUFBSSxHQUFHckIsTUFBQSxDQUFBc0IsU0FBUztZQUV0RCxPQUNDbkMsTUFBQSxDQUFBRSxPQUFBLENBQUFRLGFBQUEsQ0FBQ0gsUUFBQSxDQUFBTixXQUFXLENBQUNtQyxRQUFRO2NBQ3BCQyxLQUFLLEVBQUU7Z0JBQ050RSxLQUFLO2dCQUNMMkIsS0FBSyxFQUFFa0MsV0FBVztnQkFDbEJuQixLQUFLO2dCQUNMNkIsUUFBUSxFQUFFdkUsS0FBSyxDQUFDdUU7O1lBQ2hCLEdBRUR0QyxNQUFBLENBQUFFLE9BQUEsQ0FBQVEsYUFBQSxDQUFDSSxPQUFBLENBQUFOLE1BQU0sT0FBRyxFQUNWUixNQUFBLENBQUFFLE9BQUEsQ0FBQVEsYUFBQTtjQUFNNkIsU0FBUyxFQUFDO1lBQWlCLEdBQ2hDdkMsTUFBQSxDQUFBRSxPQUFBLENBQUFRLGFBQUEsQ0FBQ0osR0FBQSxDQUFBa0MsVUFBVTtjQUFDQyxNQUFNLEVBQUMsT0FBTztjQUFDQyxLQUFLLEVBQUUzRSxLQUFLLENBQUNnQixLQUFLLENBQUM0RDtZQUFJLEdBQ2pEM0MsTUFBQSxDQUFBRSxPQUFBLENBQUFRLGFBQUE7Y0FBRzZCLFNBQVMsRUFBQztZQUE0QixHLEtBQUc5QixLQUFLLENBQUNtQyxXQUFXLEUsSUFBTSxDQUN2RCxFQUNiNUMsTUFBQSxDQUFBRSxPQUFBLENBQUFRLGFBQUEsQ0FBQ0osR0FBQSxDQUFBdUMsVUFBVTtjQUFDQyxTQUFTLEVBQUVyQyxLQUFLLENBQUNzQztZQUFZLEVBQUksRUFDN0MvQyxNQUFBLENBQUFFLE9BQUEsQ0FBQVEsYUFBQSxDQUFDc0IsT0FBTyxPQUFHLENBQ0wsQ0FDZTtVQUV6Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNuREEsSUFBQWhDLE1BQUEsR0FBQXRDLE9BQUE7VUFDQSxJQUFBc0QsV0FBQSxHQUFBdEQsT0FBQTtVQUVNLFNBQVVzRixVQUFVQSxDQUFDO1lBQUVDLFlBQVk7WUFBRUM7VUFBTSxDQUFFO1lBQ2xEO1lBQ0EsSUFBSSxDQUFDRCxZQUFZLElBQUksQ0FBQ0MsTUFBTSxFQUFFLE9BQU8sSUFBSTtZQUV6QyxPQUNDbEQsTUFBQSxDQUFBRSxPQUFBLENBQUFRLGFBQUE7Y0FBUzZCLFNBQVMsRUFBQztZQUFlLEdBQ2hDVyxNQUFNLENBQUNDLEdBQUcsQ0FBQ0MsS0FBSyxJQUFHO2NBQ25CLElBQUlDLEdBQUcsR0FBRywwQkFBMEJKLFlBQVksSUFBSUcsS0FBSyxDQUFDcEUsRUFBRSxZQUFZO2NBRXhFLE9BQ0NnQixNQUFBLENBQUFFLE9BQUEsQ0FBQVEsYUFBQSxDQUFDTSxXQUFBLENBQUFzQyxJQUFJO2dCQUFDQyxHQUFHLEVBQUVGLEdBQUc7Z0JBQUVHLElBQUksRUFBRUg7Y0FBRyxHQUN2QkQsS0FBSyxDQUFDVixLQUFLLENBQ047WUFFVCxDQUFDLENBQUMsQ0FDTztVQUVaOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3BCQSxJQUFBMUMsTUFBQSxHQUFBdEMsT0FBQTtVQUNBLElBQUE0QyxHQUFBLEdBQUE1QyxPQUFBO1VBQ0EsSUFBQTZDLFFBQUEsR0FBQTdDLE9BQUE7VUFFTSxTQUFVeUUsU0FBU0EsQ0FBQTtZQUN4QixNQUFNO2NBQUUxQjtZQUFLLENBQUUsR0FBRyxJQUFBRixRQUFBLENBQUFILGNBQWMsR0FBRTtZQUNsQyxPQUFPSixNQUFBLENBQUFFLE9BQUEsQ0FBQVEsYUFBQSxDQUFDSixHQUFBLENBQUFtRCxTQUFTO2NBQUNDLElBQUksRUFBRWpELEtBQUssQ0FBQ2tELEtBQUs7Y0FBRUMsSUFBSSxFQUFDO1lBQU0sRUFBRztVQUNwRDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNQQSxJQUFBNUQsTUFBQSxHQUFBdEMsT0FBQTtVQUNBLElBQUFtRyxLQUFBLEdBQUFuRyxPQUFBO1VBQ0EsSUFBQTZDLFFBQUEsR0FBQTdDLE9BQUE7VUFDQSxJQUFBNEMsR0FBQSxHQUFBNUMsT0FBQTtVQUVNLFNBQVV3RSxJQUFJQSxDQUFBO1lBQ25CLE1BQU07Y0FBRXhDO1lBQUssQ0FBRSxHQUFHLElBQUFhLFFBQUEsQ0FBQUgsY0FBYyxHQUFFO1lBQ2xDLE9BQU9KLE1BQUEsQ0FBQUUsT0FBQSxDQUFBUSxhQUFBLENBQUNKLEdBQUEsQ0FBQXdELGFBQWE7Y0FBQ3BFLEtBQUssRUFBRUEsS0FBSztjQUFFcUUsT0FBTyxFQUFFRixLQUFBLENBQUFHO1lBQUksRUFBSTtVQUN0RDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNSQSxJQUFBaEUsTUFBQSxHQUFBdEMsT0FBQTtVQUNBLElBQUE2QyxRQUFBLEdBQUE3QyxPQUFBO1VBQ0EsSUFBQTRDLEdBQUEsR0FBQTVDLE9BQUE7VUFFTSxTQUFVc0csSUFBSUEsQ0FBQztZQUFFQyxJQUFJLEVBQUVuRTtVQUFJLENBQUU7WUFDbEMsTUFBTTtjQUFFVztZQUFLLENBQUUsR0FBRyxJQUFBRixRQUFBLENBQUFILGNBQWMsR0FBRTtZQUVsQyxNQUFNaUQsR0FBRyxHQUFHLGdCQUFnQnZELElBQUksQ0FBQ2QsRUFBRSxFQUFFO1lBQ3JDLE1BQU1pRixJQUFJLEdBQUc7Y0FBRUMsS0FBSyxFQUFFcEUsSUFBSSxDQUFDMkIsTUFBTSxDQUFDMEM7WUFBTyxDQUFFO1lBRTNDLE9BQ0NuRSxNQUFBLENBQUFFLE9BQUEsQ0FBQVEsYUFBQSxDQUFDSixHQUFBLENBQUE4RCxJQUFJO2NBQUNILElBQUksRUFBRUEsSUFBSTtjQUFFSSxJQUFJLEVBQUVoQjtZQUFHLEdBQzFCckQsTUFBQSxDQUFBRSxPQUFBLENBQUFRLGFBQUEsQ0FBQ0osR0FBQSxDQUFBZ0UsV0FBVztjQUFDN0IsTUFBTSxFQUFDO1lBQVEsR0FDM0J6QyxNQUFBLENBQUFFLE9BQUEsQ0FBQVEsYUFBQTtjQUFTNkIsU0FBUyxFQUFDO1lBQXdCLEdBQzFDdkMsTUFBQSxDQUFBRSxPQUFBLENBQUFRLGFBQUE7Y0FBSzZCLFNBQVMsRUFBQztZQUFvQixHQUNsQ3ZDLE1BQUEsQ0FBQUUsT0FBQSxDQUFBUSxhQUFBO2NBQUk2QixTQUFTLEVBQUM7WUFBYSxHQUFFekMsSUFBSSxDQUFDMkIsTUFBTSxDQUFDaUIsS0FBSyxDQUFNLEVBQ3BEMUMsTUFBQSxDQUFBRSxPQUFBLENBQUFRLGFBQUE7Y0FBTTZCLFNBQVMsRUFBQztZQUFpQyxHQUFFekMsSUFBSSxDQUFDMkIsTUFBTSxDQUFDbUIsV0FBVyxDQUFRLENBQzdFLENBQ0csRUFDVjVDLE1BQUEsQ0FBQUUsT0FBQSxDQUFBUSxhQUFBO2NBQUs2QixTQUFTLEVBQUM7WUFBc0IsR0FDcEN2QyxNQUFBLENBQUFFLE9BQUEsQ0FBQVEsYUFBQTtjQUFJNkIsU0FBUyxFQUFDO1lBQWUsRUFBRyxFQUNoQ3ZDLE1BQUEsQ0FBQUUsT0FBQSxDQUFBUSxhQUFBO2NBQUs2QixTQUFTLEVBQUM7WUFBZSxHQUM3QnZDLE1BQUEsQ0FBQUUsT0FBQSxDQUFBUSxhQUFBO2NBQU02QixTQUFTLEVBQUM7WUFBcUIsR0FBRTlCLEtBQUssQ0FBQzhELFlBQVksQ0FBUSxDQUM1RCxDQUNELENBQ08sQ0FDUjtVQUVUIn0=