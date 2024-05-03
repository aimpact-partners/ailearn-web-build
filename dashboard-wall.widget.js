System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.1.12/model", "react@18.2.0", "pragmate-ui@0.1.1/icons", "@aimpact/chat@1.0.1/components/icons", "pragmate-ui@0.1.1/list", "@aimpact/ailearn-app@0.0.32/components/ui", "@aimpact/ailearn-app@0.0.32/components/navbar-header.code", "@aimpact/ailearn-app@0.0.32/config", "pragmate-ui@0.1.1/components", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@0.1.1/alert", "react@18.2.0/jsx-runtime"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, bimport, __Bundle, __pkg, ims, Controller, Content, Header, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    Content: void 0,
    Header: void 0,
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
    }, function (_aimpactAilearnSdk100Core) {
      dependency_4 = _aimpactAilearnSdk100Core;
    }, function (_beyondJsReactive1112Model) {
      dependency_5 = _beyondJsReactive1112Model;
    }, function (_react2) {
      dependency_6 = _react2;
    }, function (_pragmateUi011Icons) {
      dependency_7 = _pragmateUi011Icons;
    }, function (_aimpactChat101ComponentsIcons) {
      dependency_8 = _aimpactChat101ComponentsIcons;
    }, function (_pragmateUi011List) {
      dependency_9 = _pragmateUi011List;
    }, function (_aimpactAilearnApp0032ComponentsUi) {
      dependency_10 = _aimpactAilearnApp0032ComponentsUi;
    }, function (_aimpactAilearnApp0032ComponentsNavbarHeaderCode) {
      dependency_11 = _aimpactAilearnApp0032ComponentsNavbarHeaderCode;
    }, function (_aimpactAilearnApp0032Config) {
      dependency_12 = _aimpactAilearnApp0032Config;
    }, function (_pragmateUi011Components) {
      dependency_13 = _pragmateUi011Components;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_14 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi011Alert) {
      dependency_15 = _pragmateUi011Alert;
    }, function (_react1820JsxRuntime) {
      dependency_16 = _react1820JsxRuntime;
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
          "vspecifier": "@aimpact/ailearn-app@0.0.32/dashboard-wall",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['react', dependency_6], ['pragmate-ui/icons', dependency_7], ['@aimpact/chat/components/icons', dependency_8], ['pragmate-ui/list', dependency_9], ['@aimpact/ailearn-app/components/ui', dependency_10], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_11], ['@aimpact/ailearn-app/config', dependency_12], ['pragmate-ui/components', dependency_13], ['@beyond-js/react-18-widgets/hooks', dependency_14], ['pragmate-ui/alert', dependency_15], ['react/jsx-runtime', dependency_16]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "dashboard-wall",
        "vspecifier": "@aimpact/ailearn-app@0.0.32/dashboard-wall.widget",
        "is": "page",
        "route": "/assignments/${id}/wall",
        "layout": "general-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.32/dashboard-wall.widget');
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
        hash: 1662272982,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ProfileIcon = ProfileIcon;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _icons2 = require("@aimpact/chat/components/icons");
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
        hash: 2381242925,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Header = Header;
          var _navbarHeader = require("@aimpact/ailearn-app/components/navbar-header.code");
          var _react = require("react");
          var _context = require("./context");
          var _icons = require("pragmate-ui/icons");
          /*bundle*/
          function Header() {
            const {
              store
            } = (0, _context.useWallDashboardContext)();
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_navbarHeader.NavbarHeader, {
              breadcrumb: [['Assignment', `/assignments/${store.id}/dashboard/classroom`], ['Wall', '']]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsImV4cG9ydHMiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiX2NvcmUiLCJfbW9kZWwiLCJSZWFjdGl2ZU1vZGVsIiwibW9kZWwiLCJpdGVtcyIsImlkIiwiYXNzaWdubWVudCIsInJlZnJlc2giLCJmZXRjaGluZyIsIm1lc3NhZ2VzIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsIkFzc2lnbm1lbnQiLCJEYXNoYm9hcmRXYWxsIiwicmVhZHkiLCJ0cmlnZ2VyRXZlbnQiLCJfcmVhY3QiLCJfaWNvbnMiLCJfaWNvbnMyIiwiUHJvZmlsZUljb24iLCJyb2xlIiwicGhvdG9VcmwiLCJsb2FkRXJyb3IiLCJzZXRMb2FkRXJyb3IiLCJ1c2VTdGF0ZSIsImljb24iLCJoYW5kbGVMb2FkRXJyb3IiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiYWx0Iiwic3JjIiwib25FcnJvciIsIkljb24iLCJjbGFzc05hbWUiLCJJQ09OUyIsIl9jb250ZXh0IiwiX2l0ZW0iLCJfbGlzdCIsIkNvbnRlbnQiLCJ1c2VXYWxsRGFzaGJvYXJkQ29udGV4dCIsIkxpc3QiLCJjb250cm9sIiwiSXRlbSIsIl9tZXNzYWdlIiwiZGF0YSIsInRleHRzIiwidGltZSIsImFjdGl2aXR5IiwidGl0bGUiLCJNZXNzYWdlIiwidGV4dCIsInByb21wdCIsImNvbnRlbnQiLCJ1c2VyIiwiYW5zd2VyIiwidW5kZWZpbmVkIiwiX3Byb2ZpbGVJY29uIiwiaXNFeHBhbmRlZCIsInNldElzRXhwYW5kIiwiY2xzIiwidG9nZ2xlVGV4dCIsImFwcGx5RWxsaXBzaXMiLCJtYXhMZW5ndGgiLCJsZW5ndGgiLCJzbGljZSIsIm5hbWUiLCJJY29uQnV0dG9uIiwib25DbGljayIsIldhbGxEYXNoYm9hcmRDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfdWkiLCJFbXB0eUxpc3QiLCJFbXB0eUNhcmQiLCJlbXB0eVRpdGxlIiwiZGVzY3JpcHRpb24iLCJlbXB0eSIsIl9uYXZiYXJIZWFkZXIiLCJIZWFkZXIiLCJOYXZiYXJIZWFkZXIiLCJicmVhZGNydW1iIiwiX2NvbXBvbmVudHMiLCJfaG9va3MiLCJfYmV5b25kX2NvbnRleHQiLCJfaGVhZGVyIiwiX2NvbnRlbnQiLCJfZW1wdHkiLCJfYWxlcnQiLCJzZXRSZWFkeSIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInRvdGFsSXRlbXMiLCJzZXRUb3RhbEl0ZW1zIiwidXNlQmluZGVyIiwiU3Bpbm5lciIsImFjdGl2ZSIsImNvbnRleHRWYWx1ZSIsIkNvbnRyb2wiLCJQcm92aWRlciIsIlBhZ2VDb250YWluZXIiLCJIZWFkZXJDYXJkIiwiaW1hZ2UiLCJBbGVydCIsInR5cGUiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi9pbnRlcmZhY2UudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvY29tcG9uZW50cy9wcm9maWxlLWljb24udHN4IiwiL3RzL3ZpZXdzL2NvbnRlbnQvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2NvbnRlbnQvaXRlbS50c3giLCIvdHMvdmlld3MvY29udGVudC9tZXNzYWdlLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2VtcHR5LnRzeCIsIi90cy92aWV3cy9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7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