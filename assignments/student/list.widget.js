System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/chat-sdk@1.1.0/wrapper", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.2.0/model", "react@18.2.0", "@aimpact/ailearn-app@0.1.6-dev.17/components/navbar-header.code", "@aimpact/ailearn-app@0.1.6-dev.17/config", "@aimpact/ailearn-app@0.1.6-dev.17/components/ui", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.6/components", "pragmate-ui@1.0.0-beta.6/list"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    View: void 0
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
    }, function (_aimpactChatSdk110Wrapper) {
      dependency_4 = _aimpactChatSdk110Wrapper;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_5 = _aimpactAilearnSdk100Core;
    }, function (_beyondJsReactive120Model) {
      dependency_6 = _beyondJsReactive120Model;
    }, function (_react2) {
      dependency_7 = _react2;
    }, function (_aimpactAilearnApp016Dev17ComponentsNavbarHeaderCode) {
      dependency_8 = _aimpactAilearnApp016Dev17ComponentsNavbarHeaderCode;
    }, function (_aimpactAilearnApp016Dev17Config) {
      dependency_9 = _aimpactAilearnApp016Dev17Config;
    }, function (_aimpactAilearnApp016Dev17ComponentsUi) {
      dependency_10 = _aimpactAilearnApp016Dev17ComponentsUi;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_11 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi100Beta6Components) {
      dependency_12 = _pragmateUi100Beta6Components;
    }, function (_pragmateUi100Beta6List) {
      dependency_13 = _pragmateUi100Beta6List;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", null], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.1.0"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.6"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.6.0"], ["markdown-it", "14.1.0"], ["markdown-it-katex", "2.0.3"], ["markdown-it-math", "4.1.1"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prism-themes", "1.9.0"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["react-katex", "3.0.1"], ["react-syntax-highlighter", "15.5.0"], ["simplebar-react", "3.2.6"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["wavesurfer.js", "7.8.4"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.1.6-dev.17"], ["@aimpact/ailearn-app", "0.1.6-dev.17"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.17/assignments/student/list",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/chat-sdk/wrapper', dependency_4], ['@aimpact/ailearn-sdk/core', dependency_5], ['@beyond-js/reactive/model', dependency_6], ['react', dependency_7], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_8], ['@aimpact/ailearn-app/config', dependency_9], ['@aimpact/ailearn-app/components/ui', dependency_10], ['@beyond-js/react-18-widgets/hooks', dependency_11], ['pragmate-ui/components', dependency_12], ['pragmate-ui/list', dependency_13]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-assignments-student-list",
        "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.17/assignments/student/list.widget",
        "is": "page",
        "route": "/assignments/${id}/student/list",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.6-dev.17/assignments/student/list.widget');
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
        hash: 3790138872,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _wrapper = require("@aimpact/chat-sdk/wrapper");
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
        hash: 2410908791,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Header = Header;
          var _navbarHeader = require("@aimpact/ailearn-app/components/navbar-header.code");
          var _react = require("react");
          var _context = require("./context");
          function Header() {
            const {
              texts
            } = (0, _context.useListContext)();
            return _react.default.createElement(_navbarHeader.NavbarHeader, {
              breadcrumb: [['Assignment List']]
            });
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 3893191733,
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
          var _react = require("react");
          var _beyond_context = require("beyond_context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          /*bundle*/
          function View({
            store
          }) {
            const [ready, setReady] = _react.default.useState(store.ready);
            const [error, setError] = _react.default.useState(store.error);
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            const [items, setItems] = _react.default.useState(store?.model?.assignments);
            (0, _hooks.useBinder)([store], () => {
              setReady(store.ready);
              setError(store.error);
              setItems(store.model?.assignments);
            });
            if (!ready || !textsReady) return _react.default.createElement(_ui.PageLoader, {
              fetching: true
            });
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
              title: texts.dividerTitle
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
        hash: 253696287,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.List = List;
          var _react = require("react");
          var _item = require("./item");
          var _list = require("pragmate-ui/list");
          function List() {
            const {
              items
            } = useListContext();
            return _react.default.createElement(_list.List, {
              className: "list__container",
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
        hash: 2807436029,
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
            let id = ['conversation', 'debate', 'character-talk', 'content-theory'].includes(item.id) ? item.id : item.id === 'multiple-choice' ? 'assessment' : item.id;
            const url = `/assignments/${id}`;
            const data = {
              image: item.module.picture
            };
            return _react.default.createElement(_ui.Card, {
              data: data,
              link: url
            }, _react.default.createElement(_ui.CardContent, {
              option: "column",
              className: "theme-0"
            }, _react.default.createElement("h3", null, "hola"), _react.default.createElement("section", {
              className: "card-footer__container"
            }, _react.default.createElement("div", {
              className: "card__text-content"
            }, _react.default.createElement("h4", {
              className: "card__title"
            }, item.module.title), _react.default.createElement("span", {
              className: "card__subtitle p2"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsImV4cG9ydHMiLCJfd3JhcHBlciIsIl9jb3JlIiwiX21vZGVsIiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwiaWQiLCJvZmYiLCJ0cmlnZ2VyRXZlbnQiLCJ1bmRlZmluZWQiLCJDbGFzc3Jvb20iLCJvbiIsInJlYWR5IiwiZXJyb3IiLCJnZXRMZXNzb25EYXRhIiwibGVzc29uIiwiaXRlbXMiLCJjaGF0cyIsIkFwcFdyYXBwZXIiLCJmaWx0ZXIiLCJpdGVtIiwibWV0YWRhdGEiLCJfcmVhY3QiLCJMaXN0Q29udGV4dCIsImRlZmF1bHQiLCJjcmVhdGVDb250ZXh0IiwidXNlTGlzdENvbnRleHQiLCJ1c2VDb250ZXh0IiwiX25hdmJhckhlYWRlciIsIl9jb250ZXh0IiwiSGVhZGVyIiwidGV4dHMiLCJjcmVhdGVFbGVtZW50IiwiTmF2YmFySGVhZGVyIiwiYnJlYWRjcnVtYiIsIl91aSIsIl9lbXB0eSIsIl9oZWFkZXIiLCJfbGlzdCIsIl9iZXlvbmRfY29udGV4dCIsIl9ob29rcyIsInNldFJlYWR5IiwidXNlU3RhdGUiLCJzZXRFcnJvciIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInNldEl0ZW1zIiwiYXNzaWdubWVudHMiLCJ1c2VCaW5kZXIiLCJQYWdlTG9hZGVyIiwiZmV0Y2hpbmciLCJOb3RGb3VuZCIsIkNvbnRyb2wiLCJsZW5ndGgiLCJMaXN0IiwiRW1wdHlMaXN0IiwiUHJvdmlkZXIiLCJ2YWx1ZSIsImNsYXNzTmFtZSIsIkhlYWRlckNhcmQiLCJvcHRpb24iLCJ0aXRsZSIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsIlN1YkRpdmlkZXIiLCJkaXZpZGVyVGl0bGUiLCJfY29tcG9uZW50cyIsIkxlc3NvbkluZm8iLCJhc3NpZ25tZW50SWQiLCJ0b3BpY3MiLCJtYXAiLCJ0b3BpYyIsInVybCIsIkxpbmsiLCJrZXkiLCJocmVmIiwiRW1wdHlDYXJkIiwidGV4dCIsImVtcHR5IiwiaWNvbiIsIl9pdGVtIiwiY29udHJvbCIsIkl0ZW0iLCJkYXRhIiwiaW5jbHVkZXMiLCJpbWFnZSIsInBpY3R1cmUiLCJDYXJkIiwibGluayIsIkNhcmRDb250ZW50IiwibW9kdWxlQWNjZXNzIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9saXN0L0xlc3NvbkluZm8udHN4IiwiL3RzL3ZpZXdzL2xpc3QvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2xpc3QvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xpc3QvaXRlbS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUosTUFBQSxDQUFBTSxZQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNuQjtZQUNB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