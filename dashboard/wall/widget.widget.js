System.register(["@beyond-js/widgets@1.1.1/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/base", "@aimpact/ailearn-app@0.3.1/dashboard-layout.widget", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/reactive@0.0.1/model", "@beyond-js/kernel@0.1.9/texts", "react@18.2.0", "@aimpact/chat-sdk@1.4.1/session", "@aimpact/ailearn-app@0.3.1/components/icons", "pragmate-ui@1.0.0-beta.7/list", "pragmate-ui@1.0.0-beta.7/icons", "@aimpact/ailearn-app@0.3.1/components/ui", "@aimpact/ailearn-app@0.3.1/components/navbar-header.code", "@aimpact/ailearn-app@0.3.1/config", "@beyond-js/react-18-widgets@1.1.2/hooks", "react@18.2.0/jsx-runtime"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, bimport, __Bundle, __pkg, ims, Controller, Content, Header, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    Content: void 0,
    Header: void 0,
    View: void 0
  });
  return {
    setters: [function (_beyondJsWidgets111Render) {
      dependency_0 = _beyondJsWidgets111Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_beyondJsReact18Widgets112Base) {
      dependency_3 = _beyondJsReact18Widgets112Base;
    }, function (_aimpactAilearnApp031DashboardLayoutWidget) {
      dependency_4 = _aimpactAilearnApp031DashboardLayoutWidget;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_5 = _aimpactAilearnSdk100Core;
    }, function (_aimpactReactive001Model) {
      dependency_6 = _aimpactReactive001Model;
    }, function (_beyondJsKernel019Texts) {
      dependency_7 = _beyondJsKernel019Texts;
    }, function (_react2) {
      dependency_8 = _react2;
    }, function (_aimpactChatSdk141Session) {
      dependency_9 = _aimpactChatSdk141Session;
    }, function (_aimpactAilearnApp031ComponentsIcons) {
      dependency_10 = _aimpactAilearnApp031ComponentsIcons;
    }, function (_pragmateUi100Beta7List) {
      dependency_11 = _pragmateUi100Beta7List;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_12 = _pragmateUi100Beta7Icons;
    }, function (_aimpactAilearnApp031ComponentsUi) {
      dependency_13 = _aimpactAilearnApp031ComponentsUi;
    }, function (_aimpactAilearnApp031ComponentsNavbarHeaderCode) {
      dependency_14 = _aimpactAilearnApp031ComponentsNavbarHeaderCode;
    }, function (_aimpactAilearnApp031Config) {
      dependency_15 = _aimpactAilearnApp031Config;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_16 = _beyondJsReact18Widgets112Hooks;
    }, function (_react1820JsxRuntime) {
      dependency_17 = _react1820JsxRuntime;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", null], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.1"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.24.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.1"], ["@aimpact/ailearn-app", "0.3.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.3.1/dashboard/wall/widget",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/base', dependency_3], ['@aimpact/ailearn-app/dashboard-layout.widget', dependency_4], ['@aimpact/ailearn-sdk/core', dependency_5], ['@aimpact/reactive/model', dependency_6], ['@beyond-js/kernel/texts', dependency_7], ['react', dependency_8], ['@aimpact/chat-sdk/session', dependency_9], ['@aimpact/ailearn-app/components/icons', dependency_10], ['pragmate-ui/list', dependency_11], ['pragmate-ui/icons', dependency_12], ['@aimpact/ailearn-app/components/ui', dependency_13], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_14], ['@aimpact/ailearn-app/config', dependency_15], ['@beyond-js/react-18-widgets/hooks', dependency_16], ['react/jsx-runtime', dependency_17]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-dashboard-wall",
        "attrs": ["id"],
        "vspecifier": "@aimpact/ailearn-app@0.3.1/dashboard/wall/widget.widget"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.3.1/dashboard/wall/widget.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 3083676962,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _base = require("@beyond-js/react-18-widgets/base");
          var _store = require("./store");
          var _views = require("./views");
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
        hash: 1448294370,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _core = require("@aimpact/ailearn-sdk/core");
          var _model = require("@aimpact/reactive/model");
          var _dashboardLayout = require("@aimpact/ailearn-app/dashboard-layout.widget");
          var _texts = require("@beyond-js/kernel/texts");
          var _beyond_context = require("beyond_context");
          class StoreManager extends _model.ReactiveModel {
            isStore = true;
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
                _dashboardLayout.LayoutBroker.setBackLink(`/dashboard/${id}`);
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
        hash: 1059998280,
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
        hash: 3262600120,
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
              breadcrumb: [['Assignment', `/dashboard/${store.id}`], ['Wall', '']]
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
        hash: 2844736795,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsImF0dHJpYnV0ZXMiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiZXhwb3J0cyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJfY29yZSIsIl9tb2RlbCIsIl9kYXNoYm9hcmRMYXlvdXQiLCJfdGV4dHMiLCJfYmV5b25kX2NvbnRleHQiLCJSZWFjdGl2ZU1vZGVsIiwiaXNTdG9yZSIsIm1vZGVsIiwiaXRlbXMiLCJpZCIsImFzc2lnbm1lbnQiLCJ0ZXh0cyIsIkN1cnJlbnRUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInJlYWR5IiwiY29uc3RydWN0b3IiLCJvbiIsInRyaWdnZXJFdmVudCIsInJlZnJlc2giLCJmZXRjaGluZyIsIm1lc3NhZ2VzIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsIkFzc2lnbm1lbnQiLCJEYXNoYm9hcmRXYWxsIiwiZGF0YSIsIkxheW91dEJyb2tlciIsInNldEJhY2tMaW5rIiwiX3JlYWN0IiwiX3Nlc3Npb24iLCJfaWNvbnMiLCJQcm9maWxlSWNvbiIsInJvbGUiLCJsb2FkRXJyb3IiLCJzZXRMb2FkRXJyb3IiLCJ1c2VTdGF0ZSIsImljb24iLCJnbG9iYWxUaGlzIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInVzZXJQcm9wcyIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsImdldFByb3BlcnRpZXMiLCJoYW5kbGVMb2FkRXJyb3IiLCJzcmMiLCJwaG90b1VSTCIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiYWx0Iiwib25FcnJvciIsIkFwcEljb24iLCJfY29udGV4dCIsIl9pdGVtIiwiX2xpc3QiLCJDb250ZW50IiwidXNlV2FsbERhc2hib2FyZENvbnRleHQiLCJMaXN0IiwiY29udHJvbCIsIkl0ZW0iLCJfbWVzc2FnZSIsInRpbWUiLCJhY3Rpdml0eSIsInRpdGxlIiwiTWVzc2FnZSIsInRleHQiLCJwcm9tcHQiLCJjb250ZW50IiwiYW5zd2VyIiwidW5kZWZpbmVkIiwiX3Byb2ZpbGVJY29uIiwiaXNFeHBhbmRlZCIsInNldElzRXhwYW5kIiwiY2xzIiwidG9nZ2xlVGV4dCIsImFwcGx5RWxsaXBzaXMiLCJtYXhMZW5ndGgiLCJsZW5ndGgiLCJzbGljZSIsInBob3RvVXJsIiwibmFtZSIsIkljb25CdXR0b24iLCJvbkNsaWNrIiwiV2FsbERhc2hib2FyZENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl91aSIsIkVtcHR5TGlzdCIsIkVtcHR5Q2FyZCIsImVtcHR5VGl0bGUiLCJkZXNjcmlwdGlvbiIsImVtcHR5IiwiX25hdmJhckhlYWRlciIsIkhlYWRlciIsIkZyYWdtZW50IiwiTmF2YmFySGVhZGVyIiwiYnJlYWRjcnVtYiIsIl9ob29rcyIsIl9jb250ZW50IiwiX2VtcHR5Iiwic3RhdGUiLCJzZXRTdGF0ZSIsInVzZUJpbmRlciIsIlBhZ2VMb2FkZXIiLCJ0b3RhbEl0ZW1zIiwiY29udGV4dFZhbHVlIiwiQ29udHJvbCIsIlByb3ZpZGVyIiwiUGFnZUNvbnRhaW5lciJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL2ludGVyZmFjZS50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9jb21wb25lbnRzL3Byb2ZpbGUtaWNvbi50c3giLCIvdHMvdmlld3MvY29udGVudC9pbmRleC50c3giLCIvdHMvdmlld3MvY29udGVudC9pdGVtLnRzeCIsIi90cy92aWV3cy9jb250ZW50L21lc3NhZ2UudHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2hlYWRlci50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50Ijpb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