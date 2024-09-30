System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/base", "@aimpact/ailearn-app@0.1.13/dashboard-layout.widget", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.2.0/model", "@beyond-js/kernel@0.1.9/texts", "react@18.2.0", "@aimpact/chat-sdk@1.3.0/session", "@aimpact/ailearn-app@0.1.13/components/icons", "pragmate-ui@1.0.0-beta.6/list", "pragmate-ui@1.0.0-beta.6/icons", "@aimpact/ailearn-app@0.1.13/components/ui", "@aimpact/ailearn-app@0.1.13/components/navbar-header.code", "@aimpact/ailearn-app@0.1.13/config", "@beyond-js/react-18-widgets@1.1.2/hooks", "react@18.2.0/jsx-runtime"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, bimport, __Bundle, __pkg, ims, Controller, Content, Header, View, __beyond_pkg, hmr;
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
    }, function (_beyondJsReact18Widgets112Base) {
      dependency_3 = _beyondJsReact18Widgets112Base;
    }, function (_aimpactAilearnApp0113DashboardLayoutWidget) {
      dependency_4 = _aimpactAilearnApp0113DashboardLayoutWidget;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_5 = _aimpactAilearnSdk100Core;
    }, function (_beyondJsReactive120Model) {
      dependency_6 = _beyondJsReactive120Model;
    }, function (_beyondJsKernel019Texts) {
      dependency_7 = _beyondJsKernel019Texts;
    }, function (_react2) {
      dependency_8 = _react2;
    }, function (_aimpactChatSdk130Session) {
      dependency_9 = _aimpactChatSdk130Session;
    }, function (_aimpactAilearnApp0113ComponentsIcons) {
      dependency_10 = _aimpactAilearnApp0113ComponentsIcons;
    }, function (_pragmateUi100Beta6List) {
      dependency_11 = _pragmateUi100Beta6List;
    }, function (_pragmateUi100Beta6Icons) {
      dependency_12 = _pragmateUi100Beta6Icons;
    }, function (_aimpactAilearnApp0113ComponentsUi) {
      dependency_13 = _aimpactAilearnApp0113ComponentsUi;
    }, function (_aimpactAilearnApp0113ComponentsNavbarHeaderCode) {
      dependency_14 = _aimpactAilearnApp0113ComponentsNavbarHeaderCode;
    }, function (_aimpactAilearnApp0113Config) {
      dependency_15 = _aimpactAilearnApp0113Config;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_16 = _beyondJsReact18Widgets112Hooks;
    }, function (_react1820JsxRuntime) {
      dependency_17 = _react1820JsxRuntime;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.3.0"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.6"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["wavesurfer.js", "7.8.5"], ["zod", "3.23.8"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.8"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["firebase", "10.13.1"], ["firebase-admin", "12.4.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.1.13"], ["@aimpact/ailearn-app", "0.1.13"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.13/dashboard/wall/widget",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/base', dependency_3], ['@aimpact/ailearn-app/dashboard-layout.widget', dependency_4], ['@aimpact/ailearn-sdk/core', dependency_5], ['@beyond-js/reactive/model', dependency_6], ['@beyond-js/kernel/texts', dependency_7], ['react', dependency_8], ['@aimpact/chat-sdk/session', dependency_9], ['@aimpact/ailearn-app/components/icons', dependency_10], ['pragmate-ui/list', dependency_11], ['pragmate-ui/icons', dependency_12], ['@aimpact/ailearn-app/components/ui', dependency_13], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_14], ['@aimpact/ailearn-app/config', dependency_15], ['@beyond-js/react-18-widgets/hooks', dependency_16], ['react/jsx-runtime', dependency_17]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-dashboard-wall",
        "attrs": ["id"],
        "vspecifier": "@aimpact/ailearn-app@0.1.13/dashboard/wall/widget.widget"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.13/dashboard/wall/widget.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 1186926415,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _base = require("@beyond-js/react-18-widgets/base");
          var _store = require("./store");
          var _views = require("./views");
          var _dashboardLayout = require("@aimpact/ailearn-app/dashboard-layout.widget");
          /*bundle*/
          class Controller extends _base.ReactWidgetController {
            #store;
            createStore() {
              this.#store = new _store.StoreManager(this.attributes);
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
            hide() {
              _dashboardLayout.LayoutBroker.removeOverlay();
            }
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
        hash: 2284213546,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _core = require("@aimpact/ailearn-sdk/core");
          var _model = require("@beyond-js/reactive/model");
          var _dashboardLayout = require("@aimpact/ailearn-app/dashboard-layout.widget");
          var _texts = require("@beyond-js/kernel/texts");
          var _beyond_context = require("beyond_context");
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
            #texts = new _texts.CurrentTexts(_beyond_context.module.specifier);
            get texts() {
              return this.#texts?.value;
            }
            get ready() {
              return super.ready && this.#texts.ready;
            }
            constructor(attributes) {
              super();
              this.#texts.on('change', this.triggerEvent);
              this.load(attributes.get('id'));
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
                const data = await this.#assignment.load({
                  id
                });
                this.#items = messages;
                _dashboardLayout.LayoutBroker.setBackLink(`/assignments/${id}/dashboard/classroom`);
                // const setOverlay = () => {
                // 	if (!this.#texts.ready) return;
                // 	LayoutBroker.setOverlay(`${this.texts?.header} ${data.module.title}`);
                // 	this.#texts.off('change', setOverlay);
                // };
                // this.ready ? setOverlay() : this.#texts.on('change', setOverlay);
                super.ready = true;
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
        hash: 1084605189,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ProfileIcon = ProfileIcon;
          var _react = require("react");
          var _session = require("@aimpact/chat-sdk/session");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          function ProfileIcon({
            role
          }) {
            const [loadError, setLoadError] = (0, _react.useState)(false);
            // the local storage is used to store the user's default profile icon while is defined a better way to handle this.
            const icon = role === 'user' ? 'user' : globalThis.localStorage.getItem('chat.app.user.default.profile');
            const userProps = _session.sessionWrapper.user.getProperties();
            const handleLoadError = () => setLoadError(true);
            const src = role === 'user' ? userProps.photoURL : globalThis.localStorage.getItem('chat.app.user.default.profile');
            return _react.default.createElement("picture", {
              className: "picture__container"
            }, userProps.photoURL && !loadError || role !== 'user' ? _react.default.createElement("img", {
              alt: "user image profile",
              src: src,
              onError: handleLoadError
            }) : _react.default.createElement(_icons.AppIcon, {
              className: "lg",
              icon: "user"
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
        hash: 2905070165,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _react = require("react");
          var _context = require("./context");
          var _content = require("./content");
          var _empty = require("./empty");
          /*bundle */
          function View({
            store
          }) {
            console.log(10, store);
            const [state, setState] = _react.default.useState({});
            (0, _hooks.useBinder)([store], () => {
              setState({
                ready: store.ready,
                fetching: store.fetching,
                items: store.items
              });
            });
            if (!state.ready) return _react.default.createElement(_ui.PageLoader, {
              fetching: state.fetching
            });
            const totalItems = store.items.length;
            const {
              texts
            } = store;
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
            }, _react.default.createElement(_ui.PageContainer, null, _react.default.createElement(Control, null)));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJfZGFzaGJvYXJkTGF5b3V0IiwiQ29udHJvbGxlciIsIlJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJhdHRyaWJ1dGVzIiwiV2lkZ2V0IiwiVmlldyIsInNob3ciLCJsb2FkIiwidXJpIiwidmFycyIsImdldCIsImhpZGUiLCJMYXlvdXRCcm9rZXIiLCJyZW1vdmVPdmVybGF5IiwiZXhwb3J0cyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJfY29yZSIsIl9tb2RlbCIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsIlJlYWN0aXZlTW9kZWwiLCJtb2RlbCIsIml0ZW1zIiwiaWQiLCJhc3NpZ25tZW50IiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJyZWFkeSIsImNvbnN0cnVjdG9yIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJyZWZyZXNoIiwiZmV0Y2hpbmciLCJtZXNzYWdlcyIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJBc3NpZ25tZW50IiwiRGFzaGJvYXJkV2FsbCIsImRhdGEiLCJzZXRCYWNrTGluayIsIl9yZWFjdCIsIl9zZXNzaW9uIiwiX2ljb25zIiwiUHJvZmlsZUljb24iLCJyb2xlIiwibG9hZEVycm9yIiwic2V0TG9hZEVycm9yIiwidXNlU3RhdGUiLCJpY29uIiwiZ2xvYmFsVGhpcyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ1c2VyUHJvcHMiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJnZXRQcm9wZXJ0aWVzIiwiaGFuZGxlTG9hZEVycm9yIiwic3JjIiwicGhvdG9VUkwiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImFsdCIsIm9uRXJyb3IiLCJBcHBJY29uIiwiX2NvbnRleHQiLCJfaXRlbSIsIl9saXN0IiwiQ29udGVudCIsInVzZVdhbGxEYXNoYm9hcmRDb250ZXh0IiwiTGlzdCIsImNvbnRyb2wiLCJJdGVtIiwiX21lc3NhZ2UiLCJ0aW1lIiwiYWN0aXZpdHkiLCJ0aXRsZSIsIk1lc3NhZ2UiLCJ0ZXh0IiwicHJvbXB0IiwiY29udGVudCIsImFuc3dlciIsInVuZGVmaW5lZCIsIl9wcm9maWxlSWNvbiIsImlzRXhwYW5kZWQiLCJzZXRJc0V4cGFuZCIsImNscyIsInRvZ2dsZVRleHQiLCJhcHBseUVsbGlwc2lzIiwibWF4TGVuZ3RoIiwibGVuZ3RoIiwic2xpY2UiLCJwaG90b1VybCIsIm5hbWUiLCJJY29uQnV0dG9uIiwib25DbGljayIsIldhbGxEYXNoYm9hcmRDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfdWkiLCJFbXB0eUxpc3QiLCJFbXB0eUNhcmQiLCJlbXB0eVRpdGxlIiwiZGVzY3JpcHRpb24iLCJlbXB0eSIsIl9uYXZiYXJIZWFkZXIiLCJIZWFkZXIiLCJGcmFnbWVudCIsIk5hdmJhckhlYWRlciIsImJyZWFkY3J1bWIiLCJfaG9va3MiLCJfY29udGVudCIsIl9lbXB0eSIsImxvZyIsInN0YXRlIiwic2V0U3RhdGUiLCJ1c2VCaW5kZXIiLCJQYWdlTG9hZGVyIiwidG90YWxJdGVtcyIsImNvbnRleHRWYWx1ZSIsIkNvbnRyb2wiLCJQcm92aWRlciIsIlBhZ2VDb250YWluZXIiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi9pbnRlcmZhY2UudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvY29tcG9uZW50cy9wcm9maWxlLWljb24udHN4IiwiL3RzL3ZpZXdzL2NvbnRlbnQvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2NvbnRlbnQvaXRlbS50c3giLCIvdHMvdmlld3MvY29udGVudC9tZXNzYWdlLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2VtcHR5LnRzeCIsIi90cy92aWV3cy9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBRyxnQkFBQSxHQUFBSCxPQUFBO1VBQ087VUFBVSxNQUNYSSxVQUFXLFNBQVFMLEtBQUEsQ0FBQU0scUJBQXFCO1lBQzdDLENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUwsTUFBQSxDQUFBTyxZQUFZLENBQUMsSUFBSSxDQUFDQyxVQUFVLENBQUM7Y0FDL0MsT0FBTyxJQUFJLENBQUMsQ0FBQUgsS0FBTTtZQUNuQjtZQUVBLElBQUlJLE1BQU1BLENBQUE7Y0FDVCxPQUFPUixNQUFBLENBQUFTLElBQUk7WUFDWjtZQUVBOzs7WUFHQUMsSUFBSUEsQ0FBQTtjQUNILElBQUksQ0FBQyxDQUFBTixLQUFNLENBQUNPLElBQUksQ0FBQyxJQUFJLENBQUNDLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDMUM7WUFFQTs7O1lBR0FDLElBQUlBLENBQUE7Y0FDSGQsZ0JBQUEsQ0FBQWUsWUFBWSxDQUFDQyxhQUFhLEVBQUU7WUFDN0I7O1VBQ0FDLE9BQUEsQ0FBQWhCLFVBQUEsR0FBQUEsVUFBQTs7Ozs7Ozs7Ozs7VUM3QkQ7O1VBRUFpQixNQUFBLENBQUFDLGNBQUEsQ0FBQUYsT0FBQTtZQUNBRyxLQUFBO1VBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDSkEsSUFBQUMsS0FBQSxHQUFBeEIsT0FBQTtVQUVBLElBQUF5QixNQUFBLEdBQUF6QixP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