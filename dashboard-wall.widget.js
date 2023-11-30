System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.3/page", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.1.6/model", "react@18.2.0", "pragmate-ui@0.0.3/icons", "@aimpact/chat@1.0.1/shared/icons", "pragmate-ui@0.0.3/list", "@aimpact/ailearn-app@0.0.18/components/ui", "pragmate-ui@0.0.3/components", "@beyond-js/react-18-widgets@1.0.3/hooks", "pragmate-ui@0.0.3/alert", "react@18.2.0/jsx-runtime"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp0018ComponentsUi) {
      dependency_10 = _aimpactAilearnApp0018ComponentsUi;
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
        const dependencies = new Map([["@aimpact/chat-api", "0.1.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.2.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.6"], ["pragmate-ui", "0.0.3"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.3"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.18"], ["@aimpact/ailearn-app", "0.0.18"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.18/dashboard-wall",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['react', dependency_6], ['pragmate-ui/icons', dependency_7], ['@aimpact/chat/shared/icons', dependency_8], ['pragmate-ui/list', dependency_9], ['@aimpact/ailearn-app/components/ui', dependency_10], ['pragmate-ui/components', dependency_11], ['@beyond-js/react-18-widgets/hooks', dependency_12], ['pragmate-ui/alert', dependency_13], ['react/jsx-runtime', dependency_14]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "dashboard-wall",
        "vspecifier": "@aimpact/ailearn-app@0.0.18/dashboard-wall.widget",
        "is": "page",
        "route": "/assignments/${id}/wall",
        "layout": "general-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.18/dashboard-wall.widget');
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
        hash: 4136151385,
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
            async refresh() {
              try {
                this.fetching = true;
                await this.model.load({
                  id: this.#id
                });
              } catch (e) {
                console.error(e);
              } finally {
                this.fetching = false;
              }
            }
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
        hash: 3400693376,
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
        hash: 3267230800,
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
              breadcrumb: [['AI-Learn', '/'], ['Assignment', `/assignments/${store.id}`], ['Wall', '']]
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
        hash: 2264155724,
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
            (0, _hooks.useBinder)([store], () => {
              setReady(store.ready);
            });
            if (!ready || !textsReady) return _react.default.createElement(_components.Spinner, {
              active: true
            });
            const contextValue = {
              texts,
              store,
              items: store.items,
              fetching: store.fetching
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsImV4cG9ydHMiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiX2NvcmUiLCJfbW9kZWwiLCJSZWFjdGl2ZU1vZGVsIiwibW9kZWwiLCJpdGVtcyIsImlkIiwiYXNzaWdubWVudCIsInJlZnJlc2giLCJmZXRjaGluZyIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJBc3NpZ25tZW50IiwiRGFzaGJvYXJkV2FsbCIsIm1lc3NhZ2VzIiwicmVhZHkiLCJ0cmlnZ2VyRXZlbnQiLCJfcmVhY3QiLCJfaWNvbnMiLCJfaWNvbnMyIiwiUHJvZmlsZUljb24iLCJyb2xlIiwicGhvdG9VcmwiLCJsb2FkRXJyb3IiLCJzZXRMb2FkRXJyb3IiLCJ1c2VTdGF0ZSIsImljb24iLCJoYW5kbGVMb2FkRXJyb3IiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiYWx0Iiwic3JjIiwib25FcnJvciIsIkljb24iLCJjbGFzc05hbWUiLCJJQ09OUyIsIl9jb250ZXh0IiwiX2l0ZW0iLCJfbGlzdCIsIkNvbnRlbnQiLCJ1c2VXYWxsRGFzaGJvYXJkQ29udGV4dCIsIkxpc3QiLCJjb250cm9sIiwiSXRlbSIsIl9tZXNzYWdlIiwiZGF0YSIsInRleHRzIiwidGltZSIsImFjdGl2aXR5IiwidGl0bGUiLCJNZXNzYWdlIiwidGV4dCIsInByb21wdCIsImNvbnRlbnQiLCJ1c2VyIiwiYW5zd2VyIiwidW5kZWZpbmVkIiwiX3Byb2ZpbGVJY29uIiwiaXNFeHBhbmRlZCIsInNldElzRXhwYW5kIiwiY2xzIiwidG9nZ2xlVGV4dCIsImFwcGx5RWxsaXBzaXMiLCJtYXhMZW5ndGgiLCJsZW5ndGgiLCJzbGljZSIsIm5hbWUiLCJJY29uQnV0dG9uIiwib25DbGljayIsIldhbGxEYXNoYm9hcmRDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfdWkiLCJFbXB0eUxpc3QiLCJFbXB0eUNhcmQiLCJlbXB0eVRpdGxlIiwiZGVzY3JpcHRpb24iLCJlbXB0eSIsIkhlYWRlciIsIlBhZ2VIZWFkZXIiLCJicmVhZGNydW1iIiwiX2NvbXBvbmVudHMiLCJfaG9va3MiLCJfYmV5b25kX2NvbnRleHQiLCJfaGVhZGVyIiwiX2NvbnRlbnQiLCJfZW1wdHkiLCJfYWxlcnQiLCJzZXRSZWFkeSIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInVzZUJpbmRlciIsIlNwaW5uZXIiLCJhY3RpdmUiLCJjb250ZXh0VmFsdWUiLCJDb250cm9sIiwiUHJvdmlkZXIiLCJQYWdlQ29udGFpbmVyIiwiSGVhZGVyQ2FyZCIsImltYWdlIiwiQWxlcnQiLCJ0eXBlIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvaW50ZXJmYWNlLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvcHJvZmlsZS1pY29uLnRzeCIsIi90cy92aWV3cy9jb250ZW50L2luZGV4LnRzeCIsIi90cy92aWV3cy9jb250ZW50L2l0ZW0udHN4IiwiL3RzL3ZpZXdzL2NvbnRlbnQvbWVzc2FnZS50c3giLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9lbXB0eS50c3giLCIvdHMvdmlld3MvaGVhZGVyLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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