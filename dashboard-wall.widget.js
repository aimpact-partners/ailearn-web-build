System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.3/page", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.1.6/model", "react@18.2.0", "pragmate-ui@0.0.3/icons", "@aimpact/chat@1.0.1/shared/icons", "pragmate-ui@0.0.3/list", "@aimpact/ailearn-app@0.0.15/components/ui", "pragmate-ui@0.0.3/components", "@beyond-js/react-18-widgets@1.0.3/hooks", "react@18.2.0/jsx-runtime"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, bimport, __Bundle, __pkg, ims, Controller, Content, Header, View, __beyond_pkg, hmr;
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
    }, function (_aimpactAilearnApp0015ComponentsUi) {
      dependency_10 = _aimpactAilearnApp0015ComponentsUi;
    }, function (_pragmateUi003Components) {
      dependency_11 = _pragmateUi003Components;
    }, function (_beyondJsReact18Widgets103Hooks) {
      dependency_12 = _beyondJsReact18Widgets103Hooks;
    }, function (_react1820JsxRuntime) {
      dependency_13 = _react1820JsxRuntime;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-api", "0.1.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.2.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.6"], ["pragmate-ui", "0.0.3"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.3"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.15"], ["@aimpact/ailearn-app", "0.0.15"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.15/dashboard-wall",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['react', dependency_6], ['pragmate-ui/icons', dependency_7], ['@aimpact/chat/shared/icons', dependency_8], ['pragmate-ui/list', dependency_9], ['@aimpact/ailearn-app/components/ui', dependency_10], ['pragmate-ui/components', dependency_11], ['@beyond-js/react-18-widgets/hooks', dependency_12], ['react/jsx-runtime', dependency_13]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "dashboard-wall",
        "vspecifier": "@aimpact/ailearn-app@0.0.15/dashboard-wall.widget",
        "is": "page",
        "route": "/assignments/${id}/wall",
        "layout": "general-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.15/dashboard-wall.widget');
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
        hash: 3968921070,
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
            async load(id) {
              try {
                this.#model = new _core.DashboardWall();
                const {
                  messages
                } = await this.#model.load({
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
        hash: 1087032943,
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
            console.log(data);
            return _react.default.createElement("div", {
              className: "wall-container",
              id: data.time
            }, _react.default.createElement("p", {
              className: "title-activity h3"
            }, data.activity.title), _react.default.createElement(_message.Message, {
              role: "user",
              text: data.prompt,
              user: data.user
            }), _react.default.createElement(_message.Message, {
              role: "system",
              text: data.answer,
              user: undefined
            }));
          }
        }
      });

      /***************************************
      INTERNAL MODULE: ./views/content/message
      ***************************************/

      ims.set('./views/content/message', {
        hash: 1744756125,
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
            return _react.default.createElement("div", {
              className: cls
            }, _react.default.createElement("section", {
              className: "picture__container"
            }, _react.default.createElement(_profileIcon.ProfileIcon, {
              role: role,
              photoUrl: user.photoUrl
            })), _react.default.createElement("section", {
              className: "wall-message__container"
            }, _react.default.createElement("div", {
              className: `message-text__container expand-${isExpanded}`
            }, user && _react.default.createElement("p", {
              className: "message-user__label-text "
            }, user.name), _react.default.createElement("p", {
              className: `message__label-text p2 expand-${isExpanded}`
            }, text))), _react.default.createElement("section", {
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
        hash: 3393714611,
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

      /******************************
      INTERNAL MODULE: ./views/header
      ******************************/

      ims.set('./views/header', {
        hash: 353747596,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Header = Header;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _react = require("react");
          var _context = require("./context");
          /*bundle*/
          function Header() {
            const {
              texts,
              store
            } = (0, _context.useWallDashboardContext)();
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_ui.PageHeader, {
              breadcrumb: [['AI-Learn', '/'], ['Assignment', '/'], ['Wall', '']]
            }));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 1613726913,
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
              items: store.items
            };
            return _react.default.createElement(_context.WallDashboardContext.Provider, {
              value: contextValue
            }, _react.default.createElement(_header.Header, null), _react.default.createElement(_ui.PageContainer, null, _react.default.createElement(_ui.HeaderCard, {
              className: "header-wall",
              title: "Wall"
            }), _react.default.createElement("div", {
              className: "my-20"
            }, _react.default.createElement(_content.Content, null))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsImV4cG9ydHMiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiX2NvcmUiLCJfbW9kZWwiLCJSZWFjdGl2ZU1vZGVsIiwibW9kZWwiLCJpdGVtcyIsImlkIiwiRGFzaGJvYXJkV2FsbCIsIm1lc3NhZ2VzIiwicmVhZHkiLCJ0cmlnZ2VyRXZlbnQiLCJlIiwiY29uc29sZSIsImVycm9yIiwiX3JlYWN0IiwiX2ljb25zIiwiX2ljb25zMiIsIlByb2ZpbGVJY29uIiwicm9sZSIsInBob3RvVXJsIiwibG9hZEVycm9yIiwic2V0TG9hZEVycm9yIiwidXNlU3RhdGUiLCJpY29uIiwiaGFuZGxlTG9hZEVycm9yIiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsImFsdCIsInNyYyIsIm9uRXJyb3IiLCJJY29uIiwiY2xhc3NOYW1lIiwiSUNPTlMiLCJfY29udGV4dCIsIl9pdGVtIiwiX2xpc3QiLCJDb250ZW50IiwidXNlV2FsbERhc2hib2FyZENvbnRleHQiLCJMaXN0IiwiY29udHJvbCIsIkl0ZW0iLCJfbWVzc2FnZSIsImRhdGEiLCJ0ZXh0cyIsImxvZyIsInRpbWUiLCJhY3Rpdml0eSIsInRpdGxlIiwiTWVzc2FnZSIsInRleHQiLCJwcm9tcHQiLCJ1c2VyIiwiYW5zd2VyIiwidW5kZWZpbmVkIiwiX3Byb2ZpbGVJY29uIiwiaXNFeHBhbmRlZCIsInNldElzRXhwYW5kIiwiY2xzIiwidG9nZ2xlVGV4dCIsIm5hbWUiLCJJY29uQnV0dG9uIiwib25DbGljayIsIldhbGxEYXNoYm9hcmRDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfdWkiLCJIZWFkZXIiLCJQYWdlSGVhZGVyIiwiYnJlYWRjcnVtYiIsIl9jb21wb25lbnRzIiwiX2hvb2tzIiwiX2JleW9uZF9jb250ZXh0IiwiX2hlYWRlciIsIl9jb250ZW50Iiwic2V0UmVhZHkiLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ1c2VCaW5kZXIiLCJTcGlubmVyIiwiYWN0aXZlIiwiY29udGV4dFZhbHVlIiwiUHJvdmlkZXIiLCJQYWdlQ29udGFpbmVyIiwiSGVhZGVyQ2FyZCJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL2ludGVyZmFjZS50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9jb21wb25lbnRzL3Byb2ZpbGUtaWNvbi50c3giLCIvdHMvdmlld3MvY29udGVudC9pbmRleC50c3giLCIvdHMvdmlld3MvY29udGVudC9pdGVtLnRzeCIsIi90cy92aWV3cy9jb250ZW50L21lc3NhZ2UudHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvaGVhZGVyLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlKLE1BQUEsQ0FBQU0sWUFBWSxFQUFFO2NB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