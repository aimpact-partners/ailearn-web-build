System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.4/page", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.1.11/model", "react@18.2.0", "pragmate-ui@0.0.6/icons", "@aimpact/chat@1.0.1/shared/icons", "pragmate-ui@0.0.6/list", "@aimpact/ailearn-app@0.0.24/components/ui", "@aimpact/ailearn-app@0.0.24/config", "pragmate-ui@0.0.6/components", "@beyond-js/react-18-widgets@1.0.4/hooks", "pragmate-ui@0.0.6/alert", "react@18.2.0/jsx-runtime"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, bimport, __Bundle, __pkg, ims, Controller, Content, Header, View, __beyond_pkg, hmr;
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
    }, function (_beyondJsReact18Widgets104Page) {
      dependency_3 = _beyondJsReact18Widgets104Page;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_4 = _aimpactAilearnSdk100Core;
    }, function (_beyondJsReactive1111Model) {
      dependency_5 = _beyondJsReactive1111Model;
    }, function (_react2) {
      dependency_6 = _react2;
    }, function (_pragmateUi006Icons) {
      dependency_7 = _pragmateUi006Icons;
    }, function (_aimpactChat101SharedIcons) {
      dependency_8 = _aimpactChat101SharedIcons;
    }, function (_pragmateUi006List) {
      dependency_9 = _pragmateUi006List;
    }, function (_aimpactAilearnApp0024ComponentsUi) {
      dependency_10 = _aimpactAilearnApp0024ComponentsUi;
    }, function (_aimpactAilearnApp0024Config) {
      dependency_11 = _aimpactAilearnApp0024Config;
    }, function (_pragmateUi006Components) {
      dependency_12 = _pragmateUi006Components;
    }, function (_beyondJsReact18Widgets104Hooks) {
      dependency_13 = _beyondJsReact18Widgets104Hooks;
    }, function (_pragmateUi006Alert) {
      dependency_14 = _pragmateUi006Alert;
    }, function (_react1820JsxRuntime) {
      dependency_15 = _react1820JsxRuntime;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/media-manager", "1.0.0"], ["@bgroup/wise-form", "0.0.4"], ["@beyond-js/reactive", "1.1.11"], ["pragmate-ui", "0.0.6"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@bgroup/http-suite", "1.0.3"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["framer-motion", "10.17.8"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.24"], ["@aimpact/ailearn-app", "0.0.24"]]);
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['react', dependency_6], ['pragmate-ui/icons', dependency_7], ['@aimpact/chat/shared/icons', dependency_8], ['pragmate-ui/list', dependency_9], ['@aimpact/ailearn-app/components/ui', dependency_10], ['@aimpact/ailearn-app/config', dependency_11], ['pragmate-ui/components', dependency_12], ['@beyond-js/react-18-widgets/hooks', dependency_13], ['pragmate-ui/alert', dependency_14], ['react/jsx-runtime', dependency_15]]);
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
        hash: 3701184540,
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
          var _config = require("@aimpact/ailearn-app/config");
          /*bundle*/
          function Header() {
            const {
              store
            } = (0, _context.useWallDashboardContext)();
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_ui.PageHeader, {
              breadcrumb: [[_config.default.params.APP_NAME, '/'], ['Assignment', `/assignments/${store.id}/dashboard/classroom`], ['Wall', '']]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsImV4cG9ydHMiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiX2NvcmUiLCJfbW9kZWwiLCJSZWFjdGl2ZU1vZGVsIiwibW9kZWwiLCJpdGVtcyIsImlkIiwiYXNzaWdubWVudCIsInJlZnJlc2giLCJmZXRjaGluZyIsIm1lc3NhZ2VzIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsIkFzc2lnbm1lbnQiLCJEYXNoYm9hcmRXYWxsIiwicmVhZHkiLCJ0cmlnZ2VyRXZlbnQiLCJfcmVhY3QiLCJfaWNvbnMiLCJfaWNvbnMyIiwiUHJvZmlsZUljb24iLCJyb2xlIiwicGhvdG9VcmwiLCJsb2FkRXJyb3IiLCJzZXRMb2FkRXJyb3IiLCJ1c2VTdGF0ZSIsImljb24iLCJoYW5kbGVMb2FkRXJyb3IiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiYWx0Iiwic3JjIiwib25FcnJvciIsIkljb24iLCJjbGFzc05hbWUiLCJJQ09OUyIsIl9jb250ZXh0IiwiX2l0ZW0iLCJfbGlzdCIsIkNvbnRlbnQiLCJ1c2VXYWxsRGFzaGJvYXJkQ29udGV4dCIsIkxpc3QiLCJjb250cm9sIiwiSXRlbSIsIl9tZXNzYWdlIiwiZGF0YSIsInRleHRzIiwidGltZSIsImFjdGl2aXR5IiwidGl0bGUiLCJNZXNzYWdlIiwidGV4dCIsInByb21wdCIsImNvbnRlbnQiLCJ1c2VyIiwiYW5zd2VyIiwidW5kZWZpbmVkIiwiX3Byb2ZpbGVJY29uIiwiaXNFeHBhbmRlZCIsInNldElzRXhwYW5kIiwiY2xzIiwidG9nZ2xlVGV4dCIsImFwcGx5RWxsaXBzaXMiLCJtYXhMZW5ndGgiLCJsZW5ndGgiLCJzbGljZSIsIm5hbWUiLCJJY29uQnV0dG9uIiwib25DbGljayIsIldhbGxEYXNoYm9hcmRDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfdWkiLCJFbXB0eUxpc3QiLCJFbXB0eUNhcmQiLCJlbXB0eVRpdGxlIiwiZGVzY3JpcHRpb24iLCJlbXB0eSIsIl9jb25maWciLCJIZWFkZXIiLCJQYWdlSGVhZGVyIiwiYnJlYWRjcnVtYiIsInBhcmFtcyIsIkFQUF9OQU1FIiwiX2NvbXBvbmVudHMiLCJfaG9va3MiLCJfYmV5b25kX2NvbnRleHQiLCJfaGVhZGVyIiwiX2NvbnRlbnQiLCJfZW1wdHkiLCJfYWxlcnQiLCJzZXRSZWFkeSIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInRvdGFsSXRlbXMiLCJzZXRUb3RhbEl0ZW1zIiwidXNlQmluZGVyIiwiU3Bpbm5lciIsImFjdGl2ZSIsImNvbnRleHRWYWx1ZSIsIkNvbnRyb2wiLCJQcm92aWRlciIsIlBhZ2VDb250YWluZXIiLCJIZWFkZXJDYXJkIiwiaW1hZ2UiLCJBbGVydCIsInR5cGUiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi9pbnRlcmZhY2UudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvY29tcG9uZW50cy9wcm9maWxlLWljb24udHN4IiwiL3RzL3ZpZXdzL2NvbnRlbnQvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2NvbnRlbnQvaXRlbS50c3giLCIvdHMvdmlld3MvY29udGVudC9tZXNzYWdlLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2VtcHR5LnRzeCIsIi90cy92aWV3cy9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUosTUFBQSxDQUFBTSxZQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNuQjtZQUVBLElBQUlHLE1BQU1BLENBQUE7Y0FDVCxPQUFPTixNQUFBLENBQUFPLElBQUk7WUFDWjtZQUVBOzs7WUFHQUMsSUFBSUEsQ0FBQTtjQUNILElBQUksQ0FBQyxDQUFBTCxLQUFNLENBQUNNLElBQUksQ0FBQyxJQUFJLENBQUNDLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDMUM7WUFFQTs7O1lBR0FDLElBQUlBLENBQUEsR0FBSTs7VUFDUkMsT0FBQSxDQUFBYixVQUFBLEdBQUFBLFVBQUE7Ozs7Ozs7Ozs7O1VDM0JEOztVQUVBYyxNQUFBLENBQUFDLGNBQUEsQ0FBQUYsT0FBQTtZQUNBRyxLQUFBO1VBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDSkEsSUFBQUMsS0FBQSxHQUFBcEIsT0FBQTtVQUVBLElBQUFxQixNQUFBLEdBQUFyQixPQUFBO1VBSU0sTUFBT08sWUFBYSxTQUFRYyxNQUFBLENBQUFDLGFBQTJCO1lBQzVELENBQUFDLEtBQU07WUFFTixJQUFJQSxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsS0FBTTtZQUNuQjtZQUVBLENBQUFDLEtBQU07WUFDTixJQUFJQSxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsS0FBTTtZQUNuQjtZQUVBLENBQUFDLEVBQUc7WUFDSCxJQUFJQSxFQUFFQSxDQUFBO2NBQ0wsT0FBTyxJQUFJLENBQUMsQ0FBQUEsRUFBRztZQUNoQjtZQUVBLENBQUFDLFVBQVc7WUFDWCxJQUFJQSxVQUFVQSxDQUFBO2NBQ2IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsVUFBVztZQUN4QjtZQUVBQyxPQUFPLEdBQUcsTUFBQUEsQ0FBQSxLQUFXO2NBQ3BCLElBQUk7Z0JBQ0gsSUFBSSxDQUFDQyxRQUFRLEdBQUcsSUFBSTtnQkFDcEIsTUFBTTtrQkFBRUM7Z0JBQVEsQ0FBRSxHQUFHLE1BQU0sSUFBSSxDQUFDTixLQUFLLENBQUNaLElBQUksQ0FBQztrQkFBRWMsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFBQTtnQkFBRyxDQUFFLENBQUM7Z0JBQzVELElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUdLLFFBQVE7ZUFDdEIsQ0FBQyxPQUFPQyxDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDRixDQUFDLENBQUM7ZUFDaEIsU0FBUztnQkFDVCxJQUFJLENBQUNGLFFBQVEsR0FBRyxLQUFLOztZQUV2QixDQUFDO1lBRUQsTUFBTWpCLElBQUlBLENBQUNjLEVBQUU7Y0FDWixJQUFJO2dCQUNILElBQUksQ0FBQyxDQUFBQyxVQUFXLEdBQUcsSUFBSU4sS0FBQSxDQUFBYSxVQUFVLENBQUM7a0JBQUVSO2dCQUFFLENBQUUsQ0FBQztnQkFDekMsSUFBSSxDQUFDLENBQUFGLEtBQU0sR0FBRyxJQUFJSCxLQUFBLENBQUFjLGFBQWEsRUFBRTtnQkFDakMsSUFBSSxDQUFDLENBQUFULEVBQUcsR0FBR0EsRUFBRTtnQkFDYixNQUFNO2tCQUFFSTtnQkFBUSxDQUFFLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQU4sS0FBTSxDQUFDWixJQUFJLENBQUM7a0JBQUVjO2dCQUFFLENBQUUsQ0FBQztnQkFDbkQsTUFBTSxJQUFJLENBQUMsQ0FBQUMsVUFBVyxDQUFDZixJQUFJLENBQUM7a0JBQUVjO2dCQUFFLENBQUUsQ0FBQztnQkFFbkMsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBR0ssUUFBUTtnQkFFdEIsSUFBSSxDQUFDTSxLQUFLLEdBQUcsSUFBSTtnQkFDakIsSUFBSSxDQUFDQyxZQUFZLEVBQUU7ZUFDbkIsQ0FBQyxPQUFPTixDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDRixDQUFDLENBQUM7O1lBRWxCOztVQUNBZCxPQUFBLENBQUFULFlBQUEsR0FBQUEsWUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN4REQsSUFBQThCLE1BQUEsR0FBQXJDLE9BQUE7VUFDQSxJQUFBc0MsTUFBQSxHQUFBdEMsT0FBQTtVQUNBLElBQUF1QyxPQUFBLEdBQUF2QyxPQUFBO1VBRU0sU0FBVXdDLFdBQVdBLENBQUM7WUFBRUMsSUFBSTtZQUFFQztVQUFRLENBQUU7WUFDN0MsTUFBTSxDQUFDQyxTQUFTLEVBQUVDLFlBQVksQ0FBQyxHQUFHLElBQUFQLE1BQUEsQ0FBQVEsUUFBUSxFQUFDLEtBQUssQ0FBQztZQUNqRCxNQUFNQyxJQUFJLEdBQUdMLElBQUksS0FBSyxNQUFNLEdBQUcsTUFBTSxHQUFHLFlBQVk7WUFDcEQsTUFBTU0sZUFBZSxHQUFHQSxDQUFBLEtBQU1ILFlBQVksQ0FBQyxJQUFJLENBQUM7WUFFaEQsT0FDQ1AsTUFBQSxDQUFBVyxPQUFBLENBQUFDLGFBQUEsQ0FBQVosTUFBQSxDQUFBVyxPQUFBLENBQUFFLFFBQUEsUUFDRVIsUUFBUSxJQUFJRCxJQUFJLEtBQUssTUFBTSxJQUFJLENBQUNFLFNBQVMsR0FDekNOLE1BQUEsQ0FBQVcsT0FBQSxDQUFBQyxhQUFBO2NBQUtFLEdBQUcsRUFBQyxvQkFBb0I7Y0FBQ0MsR0FBRyxFQUFFVixRQUFRO2NBQUVXLE9BQU8sRUFBRU47WUFBZSxFQUFJLEdBRXpFVixNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQSxDQUFDWCxNQUFBLENBQUFnQixJQUFJO2NBQUNDLFNBQVMsRUFBQyxJQUFJO2NBQUNULElBQUksRUFBRVAsT0FBQSxDQUFBaUIsS0FBSyxDQUFDVixJQUFJLENBQUMsSUFBSUE7WUFBSSxFQUM5QyxDQUNDO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbEJBLElBQUFULE1BQUEsR0FBQXJDLE9BQUE7VUFDQSxJQUFBeUQsUUFBQSxHQUFBekQsT0FBQTtVQUNBLElBQUEwRCxLQUFBLEdBQUExRCxPQUFBO1VBQ0EsSUFBQTJELEtBQUEsR0FBQTNELE9BQUE7VUFFTztVQUFXLE1BQU00RCxPQUFPLEdBQWFBLENBQUEsS0FBSztZQUNoRCxNQUFNO2NBQUVwQztZQUFLLENBQUUsR0FBRyxJQUFBaUMsUUFBQSxDQUFBSSx1QkFBdUIsR0FBRTtZQUUzQyxPQUFPeEIsTUFBQSxDQUFBVyxPQUFBLENBQUFDLGFBQUEsQ0FBQ1UsS0FBQSxDQUFBRyxJQUFJO2NBQUNQLFNBQVMsRUFBQyxpQkFBaUI7Y0FBQy9CLEtBQUssRUFBRUEsS0FBSztjQUFFdUMsT0FBTyxFQUFFTCxLQUFBLENBQUFNO1lBQUksRUFBSTtVQUN6RSxDQUFDO1VBQUNoRCxPQUFBLENBQUE0QyxPQUFBLEdBQUFBLE9BQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDVEYsSUFBQXZCLE1BQUEsR0FBQXJDLE9BQUE7VUFDQSxJQUFBeUQsUUFBQSxHQUFBekQsT0FBQTtVQUNBLElBQUFpRSxRQUFBLEdBQUFqRSxPQUFBO1VBRU0sU0FBVWdFLElBQUlBLENBQUM7WUFBRUU7VUFBSSxDQUFFO1lBQzVCLE1BQU07Y0FBRUM7WUFBSyxDQUFFLEdBQUcsSUFBQVYsUUFBQSxDQUFBSSx1QkFBdUIsR0FBRTtZQUUzQyxPQUNDeEIsTUFBQSxDQUFBVyxPQUFBLENBQUFDLGFBQUE7Y0FBS00sU0FBUyxFQUFDLGdCQUFnQjtjQUFDOUIsRUFBRSxFQUFFeUMsSUFBSSxDQUFDRTtZQUFJLEdBQzVDL0IsTUFBQSxDQUFBVyxPQUFBLENBQUFDLGFBQUE7Y0FBR00sU0FBUyxFQUFDO1lBQW1CLEdBQUVXLElBQUksQ0FBQ0csUUFBUSxDQUFDQyxLQUFLLENBQUssRUFDMURqQyxNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQSxDQUFDZ0IsUUFBQSxDQUFBTSxPQUFPO2NBQUM5QixJQUFJLEVBQUMsTUFBTTtjQUFDK0IsSUFBSSxFQUFFTixJQUFJLENBQUNPLE1BQU0sQ0FBQ0MsT0FBTztjQUFFQyxJQUFJLEVBQUVULElBQUksQ0FBQ1M7WUFBSSxFQUFJLEVBQ25FdEMsTUFBQSxDQUFBVyxPQUFBLENBQUFDLGFBQUEsQ0FBQ2dCLFFBQUEsQ0FBQU0sT0FBTztjQUFDOUIsSUFBSSxFQUFDLFFBQVE7Y0FBQytCLElBQUksRUFBRU4sSUFBSSxDQUFDVSxNQUFNLENBQUNGLE9BQU87Y0FBRUMsSUFBSSxFQUFFRTtZQUFTLEVBQUksQ0FDaEU7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNkQSxJQUFBeEMsTUFBQSxHQUFBckMsT0FBQTtVQUNBLElBQUE4RSxZQUFBLEdBQUE5RSxPQUFBO1VBQ0EsSUFBQXNDLE1BQUEsR0FBQXRDLE9BQUE7VUFFTSxTQUFVdUUsT0FBT0EsQ0FBQztZQUFFOUIsSUFBSTtZQUFFK0IsSUFBSTtZQUFFRztVQUFJLENBQUU7WUFDM0MsTUFBTSxDQUFDSSxVQUFVLEVBQUVDLFdBQVcsQ0FBQyxHQUFHLElBQUEzQyxNQUFBLENBQUFRLFFBQVEsRUFBQyxLQUFLLENBQUM7WUFDakQsTUFBTW9DLEdBQUcsR0FBRyxRQUFReEMsSUFBSSxFQUFFO1lBRTFCLFNBQVN5QyxVQUFVQSxDQUFBO2NBQ2xCRixXQUFXLENBQUMsQ0FBQ0QsVUFBVSxDQUFDO1lBQ3pCO1lBRUEsU0FBU0ksYUFBYUEsQ0FBQ1gsSUFBWSxFQUFFWSxTQUFpQjtjQUNyRCxPQUFPWixJQUFJLENBQUNhLE1BQU0sR0FBR0QsU0FBUyxHQUFHWixJQUFJLENBQUNjLEtBQUssQ0FBQyxDQUFDLEVBQUVGLFNBQVMsQ0FBQyxHQUFHLEtBQUssR0FBR1osSUFBSTtZQUN6RTtZQUVBLE9BQ0NuQyxNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQTtjQUFLTSxTQUFTLEVBQUUwQjtZQUFHLEdBQ2xCNUMsTUFBQSxDQUFBVyxPQUFBLENBQUFDLGFBQUE7Y0FBU00sU0FBUyxFQUFDO1lBQW9CLEdBQ3RDbEIsTUFBQSxDQUFBVyxPQUFBLENBQUFDLGFBQUEsQ0FBQzZCLFlBQUEsQ0FBQXRDLFdBQVc7Y0FBQ0MsSUFBSSxFQUFFQSxJQUFJO2NBQUVDLFFBQVEsRUFBRWlDLElBQUksRUFBRWpDO1lBQVEsRUFBSSxDQUM1QyxFQUNWTCxNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQTtjQUFTTSxTQUFTLEVBQUM7WUFBeUIsR0FDM0NsQixNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQTtjQUFLTSxTQUFTLEVBQUUsa0NBQWtDd0IsVUFBVTtZQUFFLEdBQzVESixJQUFJLElBQUl0QyxNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQTtjQUFHTSxTQUFTLEVBQUM7WUFBNkIsR0FBRW9CLElBQUksQ0FBQ1ksSUFBSSxDQUFLLEVBQ25FbEQsTUFBQSxDQUFBVyxPQUFBLENBQUFDLGFBQUE7Y0FBR00sU0FBUyxFQUFFLGlDQUFpQ3dCLFVBQVU7WUFBRSxHQUN6REksYUFBYSxDQUFDWCxJQUFJLEVBQUVPLFVBQVUsR0FBRyxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQzFDLENBQ0MsQ0FDRyxFQUVWMUMsTUFBQSxDQUFBVyxPQUFBLENBQUFDLGFBQUE7Y0FBU00sU0FBUyxFQUFDO1lBQXlCLEdBQzNDbEIsTUFBQSxDQUFBVyxPQUFBLENBQUFDLGFBQUEsQ0FBQ1gsTUFBQSxDQUFBa0QsVUFBVTtjQUFDQyxPQUFPLEVBQUVQLFVBQVU7Y0FBRTNCLFNBQVMsRUFBQyxJQUFJO2NBQUNULElBQUksRUFBRSxDQUFDaUMsVUFBVSxHQUFHLGVBQWUsR0FBRztZQUFhLEVBQUksQ0FDOUYsQ0FDTDtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ25DQSxJQUFBMUMsTUFBQSxHQUFBckMsT0FBQTtVQVdPLE1BQU0wRixvQkFBb0IsR0FBQTFFLE9BQUEsQ0FBQTBFLG9CQUFBLEdBQUdyRCxNQUFBLENBQUFXLE9BQUssQ0FBQzJDLGFBQWEsQ0FBVyxFQUFjLENBQUM7VUFDMUUsTUFBTTlCLHVCQUF1QixHQUFHQSxDQUFBLEtBQU14QixNQUFBLENBQUFXLE9BQUssQ0FBQzRDLFVBQVUsQ0FBQ0Ysb0JBQW9CLENBQUM7VUFBQzFFLE9BQUEsQ0FBQTZDLHVCQUFBLEdBQUFBLHVCQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1pwRixJQUFBeEIsTUFBQSxHQUFBckMsT0FBQTtVQUNBLElBQUE2RixHQUFBLEdBQUE3RixPQUFBO1VBQ0EsSUFBQXlELFFBQUEsR0FBQXpELE9BQUE7VUFFTSxTQUFVOEYsU0FBU0EsQ0FBQTtZQUN4QixNQUFNO2NBQUUzQjtZQUFLLENBQUUsR0FBRyxJQUFBVixRQUFBLENBQUFJLHVCQUF1QixHQUFFO1lBQzNDLE9BQU94QixNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQSxDQUFDNEMsR0FBQSxDQUFBRSxTQUFTO2NBQUN2QixJQUFJLEVBQUVMLEtBQUssQ0FBQzZCLFVBQVU7Y0FBRUMsV0FBVyxFQUFFOUIsS0FBSyxDQUFDK0IsS0FBSztjQUFFcEQsSUFBSSxFQUFDO1lBQU0sRUFBRztVQUNuRjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNQQSxJQUFBK0MsR0FBQSxHQUFBN0YsT0FBQTtVQUNBLElBQUFxQyxNQUFBLEdBQUFyQyxPQUFBO1VBQ0EsSUFBQXlELFFBQUEsR0FBQXpELE9BQUE7VUFDQSxJQUFBc0MsTUFBQSxHQUFBdEMsT0FBQTtVQUNBLElBQUFtRyxPQUFBLEdBQUFuRyxPQUFBO1VBQ087VUFBVSxTQUFVb0csTUFBTUEsQ0FBQTtZQUNoQyxNQUFNO2NBQUUvRjtZQUFLLENBQUUsR0FBRyxJQUFBb0QsUUFBQSxDQUFBSSx1QkFBdUIsR0FBRTtZQUUzQyxPQUNDeEIsTUFBQSxDQUFBVyxPQUFBLENBQUFDLGFBQUEsQ0FBQVosTUFBQSxDQUFBVyxPQUFBLENBQUFFLFFBQUEsUUFDQ2IsTUFBQSxDQUFBVyxPQUFBLENBQUFDLGFBQUEsQ0FBQzRDLEdBQUEsQ0FBQVEsVUFBVTtjQUNWQyxVQUFVLEVBQUUsQ0FDWCxDQUFDSCxPQUFBLENBQUFuRCxPQUFNLENBQUN1RCxNQUFNLENBQUNDLFFBQVEsRUFBRSxHQUFHLENBQUMsRUFDN0IsQ0FBQyxZQUFZLEVBQUUsZ0JBQWdCbkcsS0FBSyxDQUFDb0IsRUFBRSxzQkFBc0IsQ0FBQyxFQUM5RCxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUM7WUFDWixHQUVEWSxNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQSxDQUFDWCxNQUFBLENBQUFrRCxVQUFVO2NBQUMxQyxJQUFJLEVBQUMsU0FBUztjQUFDMkMsT0FBTyxFQUFFcEYsS0FBSyxDQUFDc0I7WUFBTyxFQUFJLENBQ3pDLENBQ1g7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNyQkEsSUFBQVUsTUFBQSxHQUFBckMsT0FBQTtVQUVBLElBQUF5RyxXQUFBLEdBQUF6RyxPQUFBO1VBQ0EsSUFBQTBHLE1BQUEsR0FBQTFHLE9BQUE7VUFDQSxJQUFBMkcsZUFBQSxHQUFBM0csT0FBQTtVQUNBLElBQUF5RCxRQUFBLEdBQUF6RCxPQUFBO1VBQ0EsSUFBQTZGLEdBQUEsR0FBQTdGLE9BQUE7VUFDQSxJQUFBNEcsT0FBQSxHQUFBNUcsT0FBQTtVQUNBLElBQUE2RyxRQUFBLEdBQUE3RyxPQUFBO1VBQ0EsSUFBQThHLE1BQUEsR0FBQTlHLE9BQUE7VUFDQSxJQUFBK0csTUFBQSxHQUFBL0csT0FBQTtVQUVPO1VBQVcsU0FBVVMsSUFBSUEsQ0FBQztZQUFFSjtVQUFLLENBQTJCO1lBQ2xFLE1BQU0sQ0FBQzhCLEtBQUssRUFBRTZFLFFBQVEsQ0FBQyxHQUFHM0UsTUFBQSxDQUFBVyxPQUFLLENBQUNILFFBQVEsQ0FBQ3hDLEtBQUssQ0FBQzhCLEtBQUssQ0FBQztZQUNyRCxNQUFNLENBQUM4RSxVQUFVLEVBQUU5QyxLQUFLLENBQUMsR0FBRyxJQUFBdUMsTUFBQSxDQUFBUSxRQUFRLEVBQUNQLGVBQUEsQ0FBQVEsTUFBTSxDQUFDQyxTQUFTLENBQUM7WUFDdEQsTUFBTSxDQUFDQyxVQUFVLEVBQUVDLGFBQWEsQ0FBQyxHQUFHakYsTUFBQSxDQUFBVyxPQUFLLENBQUNILFFBQVEsQ0FBQ3hDLEtBQUssQ0FBQ21CLEtBQUssRUFBRTZELE1BQU0sSUFBSSxDQUFDLENBQUM7WUFDNUUsSUFBQXFCLE1BQUEsQ0FBQWEsU0FBUyxFQUFDLENBQUNsSCxLQUFLLENBQUMsRUFBRSxNQUFLO2NBQ3ZCMkcsUUFBUSxDQUFDM0csS0FBSyxDQUFDOEIsS0FBSyxDQUFDO2NBQ3JCbUYsYUFBYSxDQUFDakgsS0FBSyxDQUFDbUIsS0FBSyxDQUFDNkQsTUFBTSxDQUFDO1lBQ2xDLENBQUMsQ0FBQztZQUVGLElBQUksQ0FBQ2xELEtBQUssSUFBSSxDQUFDOEUsVUFBVSxFQUFFLE9BQU81RSxNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQSxDQUFDd0QsV0FBQSxDQUFBZSxPQUFPO2NBQUNDLE1BQU0sRUFBRTtZQUFJLEVBQUk7WUFFM0QsTUFBTUMsWUFBWSxHQUFHO2NBQ3BCdkQsS0FBSztjQUNMOUQsS0FBSztjQUNMbUIsS0FBSyxFQUFFbkIsS0FBSyxDQUFDbUIsS0FBSztjQUNsQkksUUFBUSxFQUFFdkIsS0FBSyxDQUFDdUIsUUFBUTtjQUN4QnlGO2FBQ0E7WUFFRCxNQUFNTSxPQUFPLEdBQUd0SCxLQUFLLENBQUNtQixLQUFLLENBQUM2RCxNQUFNLEdBQUcsQ0FBQyxHQUFHd0IsUUFBQSxDQUFBakQsT0FBTyxHQUFHa0QsTUFBQSxDQUFBaEIsU0FBUztZQUU1RCxPQUNDekQsTUFBQSxDQUFBVyxPQUFBLENBQUFDLGFBQUEsQ0FBQ1EsUUFBQSxDQUFBaUMsb0JBQW9CLENBQUNrQyxRQUFRO2NBQUN6RyxLQUFLLEVBQUV1RztZQUFZLEdBQ2pEckYsTUFBQSxDQUFBVyxPQUFBLENBQUFDLGFBQUEsQ0FBQzJELE9BQUEsQ0FBQVIsTUFBTSxPQUFHLEVBQ1YvRCxNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQSxDQUFDNEMsR0FBQSxDQUFBZ0MsYUFBYSxRQUNieEYsTUFBQSxDQUFBVyxPQUFBLENBQUFDLGFBQUEsQ0FBQzRDLEdBQUEsQ0FBQWlDLFVBQVU7Y0FBQ3ZFLFNBQVMsRUFBQyxhQUFhO2NBQUNKLEdBQUcsRUFBQyxZQUFZO2NBQUM0RSxLQUFLLEVBQUM7WUFBdUIsR0FDakYxRixNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQTtjQUFHTSxTQUFTLEVBQUM7WUFBSSxHQUFFbEQsS0FBSyxDQUFDcUIsVUFBVSxDQUFDeUYsTUFBTSxDQUFDN0MsS0FBSyxDQUFLLENBQ3pDLEVBQ2JqQyxNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQSxDQUFDOEQsTUFBQSxDQUFBaUIsS0FBSztjQUFDQyxJQUFJLEVBQUM7WUFBTSxHQUFFOUQsS0FBSyxDQUFDOEIsV0FBVyxDQUFTLEVBQzlDNUQsTUFBQSxDQUFBVyxPQUFBLENBQUFDLGFBQUEsQ0FBQzBFLE9BQU8sT0FBRyxDQUNJLENBQ2U7VUFFbEMifQ==