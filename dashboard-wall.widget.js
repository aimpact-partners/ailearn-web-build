System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.3/page", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.1.6/model", "react@18.2.0", "pragmate-ui@0.0.3/icons", "@aimpact/chat@1.0.1/shared/icons", "pragmate-ui@0.0.3/list", "@aimpact/ailearn-app@0.0.24/components/ui", "pragmate-ui@0.0.3/components", "@beyond-js/react-18-widgets@1.0.3/hooks", "pragmate-ui@0.0.3/alert", "react@18.2.0/jsx-runtime"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, bimport, __Bundle, __pkg, ims, Controller, Content, Header, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    Content: void 0,
    Header: void 0,
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
    }, function (_aimpactAilearnSdk100Core) {
      dependency_4 = _aimpactAilearnSdk100Core;
    }, function (_beyondJsReactive116Model) {
      dependency_5 = _beyondJsReactive116Model;
    }, function (_react2) {
      dependency_6 = _react2;
    }, function (_pragmateUi003Icons) {
      dependency_7 = _pragmateUi003Icons;
    }, function (_aimpactChat101SharedIcons) {
      dependency_8 = _aimpactChat101SharedIcons;
    }, function (_pragmateUi003List) {
      dependency_9 = _pragmateUi003List;
    }, function (_aimpactAilearnApp0024ComponentsUi) {
      dependency_10 = _aimpactAilearnApp0024ComponentsUi;
    }, function (_pragmateUi003Components) {
      dependency_11 = _pragmateUi003Components;
    }, function (_beyondJsReact18Widgets103Hooks) {
      dependency_12 = _beyondJsReact18Widgets103Hooks;
    }, function (_pragmateUi003Alert) {
      dependency_13 = _pragmateUi003Alert;
    }, function (_react1820JsxRuntime) {
      dependency_14 = _react1820JsxRuntime;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-api", "0.2.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.2.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.6"], ["pragmate-ui", "0.0.3"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.3"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.24"], ["@aimpact/ailearn-app", "0.0.24"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.24/dashboard-wall",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['react', dependency_6], ['pragmate-ui/icons', dependency_7], ['@aimpact/chat/shared/icons', dependency_8], ['pragmate-ui/list', dependency_9], ['@aimpact/ailearn-app/components/ui', dependency_10], ['pragmate-ui/components', dependency_11], ['@beyond-js/react-18-widgets/hooks', dependency_12], ['pragmate-ui/alert', dependency_13], ['react/jsx-runtime', dependency_14]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "dashboard-wall",
        "vspecifier": "@aimpact/ailearn-app@0.0.24/dashboard-wall.widget",
        "is": "page",
        "route": "/assignments/${id}/wall",
        "layout": "general-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.24/dashboard-wall.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 793997601,
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
             * this method is executed when the widget is show
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

      /***************************
      INTERNAL MODULE: ./interface
      ***************************/

      ims.set('./interface', {
        hash: 3506573663,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 4192789088,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _core = require("@aimpact/ailearn-sdk/core");
          var _model = require("@beyond-js/reactive/model");
          class StoreManager extends _model.ReactiveModel {
            #model;
            get model() {
              return this.#model;
            }
            #items;
            get items() {
              return this.#items;
            }
            #id;
            get id() {
              return this.#id;
            }
            #assignment;
            get assignment() {
              return this.#assignment;
            }
            refresh = async () => {
              try {
                this.fetching = true;
                const {
                  messages
                } = await this.model.load({
                  id: this.#id
                });
                this.#items = messages;
              } catch (e) {
                console.error(e);
              } finally {
                this.fetching = false;
              }
            };
            async load(id) {
              try {
                this.#assignment = new _core.Assignment({
                  id
                });
                this.#model = new _core.DashboardWall();
                this.#id = id;
                const {
                  messages
                } = await this.#model.load({
                  id
                });
                await this.#assignment.load({
                  id
                });
                this.#items = messages;
                this.ready = true;
                this.triggerEvent();
              } catch (e) {
                console.error(e);
              }
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /***********************************************
      INTERNAL MODULE: ./views/components/profile-icon
      ***********************************************/

      ims.set('./views/components/profile-icon', {
        hash: 1872120012,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ProfileIcon = ProfileIcon;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _icons2 = require("@aimpact/chat/shared/icons");
          function ProfileIcon({
            role,
            photoUrl
          }) {
            const [loadError, setLoadError] = (0, _react.useState)(false);
            const icon = role === 'user' ? 'user' : 'ai-profile';
            const handleLoadError = () => setLoadError(true);
            return _react.default.createElement(_react.default.Fragment, null, photoUrl && role === 'user' && !loadError ? _react.default.createElement("img", {
              alt: "user image profile",
              src: photoUrl,
              onError: handleLoadError
            }) : _react.default.createElement(_icons.Icon, {
              className: "lg",
              icon: _icons2.ICONS[icon] ?? icon
            }));
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./views/content/index
      *************************************/

      ims.set('./views/content/index', {
        hash: 2680141398,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Content = void 0;
          var _react = require("react");
          var _context = require("../context");
          var _item = require("./item");
          var _list = require("pragmate-ui/list");
          /*bundle*/
          const Content = () => {
            const {
              items
            } = (0, _context.useWallDashboardContext)();
            return _react.default.createElement(_list.List, {
              className: "wall__container",
              items: items,
              control: _item.Item
            });
          };
          exports.Content = Content;
        }
      });

      /************************************
      INTERNAL MODULE: ./views/content/item
      ************************************/

      ims.set('./views/content/item', {
        hash: 1300636804,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Item = Item;
          var _react = require("react");
          var _context = require("../context");
          var _message = require("./message");
          function Item({
            data
          }) {
            const {
              texts
            } = (0, _context.useWallDashboardContext)();
            return _react.default.createElement("div", {
              className: "wall-container",
              id: data.time
            }, _react.default.createElement("p", {
              className: "title-activity h3"
            }, data.activity.title), _react.default.createElement(_message.Message, {
              role: "user",
              text: data.prompt.content,
              user: data.user
            }), _react.default.createElement(_message.Message, {
              role: "system",
              text: data.answer.content,
              user: undefined
            }));
          }
        }
      });

      /***************************************
      INTERNAL MODULE: ./views/content/message
      ***************************************/

      ims.set('./views/content/message', {
        hash: 2364017378,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Message = Message;
          var _react = require("react");
          var _profileIcon = require("../components/profile-icon");
          var _icons = require("pragmate-ui/icons");
          function Message({
            role,
            text,
            user
          }) {
            const [isExpanded, setIsExpand] = (0, _react.useState)(false);
            const cls = `wall ${role}`;
            function toggleText() {
              setIsExpand(!isExpanded);
            }
            function applyEllipsis(text, maxLength) {
              return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
            }
            return _react.default.createElement("div", {
              className: cls
            }, _react.default.createElement("section", {
              className: "picture__container"
            }, _react.default.createElement(_profileIcon.ProfileIcon, {
              role: role,
              photoUrl: user?.photoUrl
            })), _react.default.createElement("section", {
              className: "wall-message__container"
            }, _react.default.createElement("div", {
              className: `message-text__container expand-${isExpanded}`
            }, user && _react.default.createElement("p", {
              className: "message-user__label-text p2"
            }, user.name), _react.default.createElement("p", {
              className: `message__label-text p2 expand-${isExpanded}`
            }, applyEllipsis(text, isExpanded ? 5000 : 280)))), _react.default.createElement("section", {
              className: "wall-actions__container"
            }, _react.default.createElement(_icons.IconButton, {
              onClick: toggleText,
              className: "md",
              icon: !isExpanded ? 'arrowDropDown' : 'arrowDropUp'
            })));
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 1277739422,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useWallDashboardContext = exports.WallDashboardContext = void 0;
          var _react = require("react");
          const WallDashboardContext = exports.WallDashboardContext = _react.default.createContext({});
          const useWallDashboardContext = () => _react.default.useContext(WallDashboardContext);
          exports.useWallDashboardContext = useWallDashboardContext;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/empty
      *****************************/

      ims.set('./views/empty', {
        hash: 3693986805,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyList = EmptyList;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("./context");
          function EmptyList() {
            const {
              texts
            } = (0, _context.useWallDashboardContext)();
            return _react.default.createElement(_ui.EmptyCard, {
              text: texts.emptyTitle,
              description: texts.empty,
              icon: "info"
            });
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./views/header
      ******************************/

      ims.set('./views/header', {
        hash: 787835034,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Header = Header;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _react = require("react");
          var _context = require("./context");
          var _icons = require("pragmate-ui/icons");
          /*bundle*/
          function Header() {
            const {
              store
            } = (0, _context.useWallDashboardContext)();
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_ui.PageHeader, {
              breadcrumb: [['AI-Learn', '/'], ['Assignment', `/assignments/${store.id}/dashboard/classroom`], ['Wall', '']]
            }, _react.default.createElement(_icons.IconButton, {
              icon: "refresh",
              onClick: store.refresh
            })));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 3242356489,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _beyond_context = require("beyond_context");
          var _context = require("./context");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _header = require("./header");
          var _content = require("./content");
          var _empty = require("./empty");
          var _alert = require("pragmate-ui/alert");
          /*bundle */
          function View({
            store
          }) {
            const [ready, setReady] = _react.default.useState(store.ready);
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            const [totalItems, setTotalItems] = _react.default.useState(store.items?.length ?? 0);
            (0, _hooks.useBinder)([store], () => {
              setReady(store.ready);
              setTotalItems(store.items.length);
            });
            if (!ready || !textsReady) return _react.default.createElement(_components.Spinner, {
              active: true
            });
            const contextValue = {
              texts,
              store,
              items: store.items,
              fetching: store.fetching,
              totalItems
            };
            const Control = store.items.length > 0 ? _content.Content : _empty.EmptyList;
            return _react.default.createElement(_context.WallDashboardContext.Provider, {
              value: contextValue
            }, _react.default.createElement(_header.Header, null), _react.default.createElement(_ui.PageContainer, null, _react.default.createElement(_ui.HeaderCard, {
              className: "header-wall",
              alt: "card-robot",
              image: "/assets/ai-robot.webp"
            }, _react.default.createElement("p", {
              className: "h2"
            }, store.assignment.module.title)), _react.default.createElement(_alert.Alert, {
              type: "info"
            }, texts.description), _react.default.createElement(Control, null)));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./views/content/index",
        "from": "Content",
        "name": "Content"
      }, {
        "im": "./views/header",
        "from": "Header",
        "name": "Header"
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
        (require || prop === 'Content') && _export("Content", Content = require ? require('./views/content/index').Content : value);
        (require || prop === 'Header') && _export("Header", Header = require ? require('./views/header').Header : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsImV4cG9ydHMiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiX2NvcmUiLCJfbW9kZWwiLCJSZWFjdGl2ZU1vZGVsIiwibW9kZWwiLCJpdGVtcyIsImlkIiwiYXNzaWdubWVudCIsInJlZnJlc2giLCJmZXRjaGluZyIsIm1lc3NhZ2VzIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsIkFzc2lnbm1lbnQiLCJEYXNoYm9hcmRXYWxsIiwicmVhZHkiLCJ0cmlnZ2VyRXZlbnQiLCJfcmVhY3QiLCJfaWNvbnMiLCJfaWNvbnMyIiwiUHJvZmlsZUljb24iLCJyb2xlIiwicGhvdG9VcmwiLCJsb2FkRXJyb3IiLCJzZXRMb2FkRXJyb3IiLCJ1c2VTdGF0ZSIsImljb24iLCJoYW5kbGVMb2FkRXJyb3IiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiYWx0Iiwic3JjIiwib25FcnJvciIsIkljb24iLCJjbGFzc05hbWUiLCJJQ09OUyIsIl9jb250ZXh0IiwiX2l0ZW0iLCJfbGlzdCIsIkNvbnRlbnQiLCJ1c2VXYWxsRGFzaGJvYXJkQ29udGV4dCIsIkxpc3QiLCJjb250cm9sIiwiSXRlbSIsIl9tZXNzYWdlIiwiZGF0YSIsInRleHRzIiwidGltZSIsImFjdGl2aXR5IiwidGl0bGUiLCJNZXNzYWdlIiwidGV4dCIsInByb21wdCIsImNvbnRlbnQiLCJ1c2VyIiwiYW5zd2VyIiwidW5kZWZpbmVkIiwiX3Byb2ZpbGVJY29uIiwiaXNFeHBhbmRlZCIsInNldElzRXhwYW5kIiwiY2xzIiwidG9nZ2xlVGV4dCIsImFwcGx5RWxsaXBzaXMiLCJtYXhMZW5ndGgiLCJsZW5ndGgiLCJzbGljZSIsIm5hbWUiLCJJY29uQnV0dG9uIiwib25DbGljayIsIldhbGxEYXNoYm9hcmRDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfdWkiLCJFbXB0eUxpc3QiLCJFbXB0eUNhcmQiLCJlbXB0eVRpdGxlIiwiZGVzY3JpcHRpb24iLCJlbXB0eSIsIkhlYWRlciIsIlBhZ2VIZWFkZXIiLCJicmVhZGNydW1iIiwiX2NvbXBvbmVudHMiLCJfaG9va3MiLCJfYmV5b25kX2NvbnRleHQiLCJfaGVhZGVyIiwiX2NvbnRlbnQiLCJfZW1wdHkiLCJfYWxlcnQiLCJzZXRSZWFkeSIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInRvdGFsSXRlbXMiLCJzZXRUb3RhbEl0ZW1zIiwidXNlQmluZGVyIiwiU3Bpbm5lciIsImFjdGl2ZSIsImNvbnRleHRWYWx1ZSIsIkNvbnRyb2wiLCJQcm92aWRlciIsIlBhZ2VDb250YWluZXIiLCJIZWFkZXJDYXJkIiwiaW1hZ2UiLCJBbGVydCIsInR5cGUiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi9pbnRlcmZhY2UudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvY29tcG9uZW50cy9wcm9maWxlLWljb24udHN4IiwiL3RzL3ZpZXdzL2NvbnRlbnQvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2NvbnRlbnQvaXRlbS50c3giLCIvdHMvdmlld3MvY29udGVudC9tZXNzYWdlLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2VtcHR5LnRzeCIsIi90cy92aWV3cy9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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