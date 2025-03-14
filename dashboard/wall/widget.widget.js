System.register(["@beyond-js/widgets@1.1.1/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.3/base", "@aimpact/ailearn-app@0.3.24/dashboard-layout.widget", "@aimpact/ailearn-sdk@1.1.0/core", "@aimpact/ailearn-sdk@1.1.0/tracking", "@aimpact/reactive@0.0.1/model", "@beyond-js/kernel@0.1.9/texts", "react@18.2.0", "@aimpact/chat-sdk@1.4.1/session", "@aimpact/ailearn-app@0.3.24/components/icons", "pragmate-ui@1.0.0-beta.7/list", "pragmate-ui@1.0.0-beta.7/icons", "@aimpact/chat-sdk@1.4.1/widgets/markdown", "@aimpact/ailearn-app@0.3.24/components/ui", "@aimpact/ailearn-app@0.3.24/components/navbar-header.code", "@aimpact/ailearn-app@0.3.24/config", "@beyond-js/react-18-widgets@1.1.3/hooks", "react@18.2.0/jsx-runtime"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, bimport, __Bundle, __pkg, ims, Controller, Content, Header, View, __beyond_pkg, hmr;
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
    }, function (_beyondJsReact18Widgets113Base) {
      dependency_3 = _beyondJsReact18Widgets113Base;
    }, function (_aimpactAilearnApp0324DashboardLayoutWidget) {
      dependency_4 = _aimpactAilearnApp0324DashboardLayoutWidget;
    }, function (_aimpactAilearnSdk110Core) {
      dependency_5 = _aimpactAilearnSdk110Core;
    }, function (_aimpactAilearnSdk110Tracking) {
      dependency_6 = _aimpactAilearnSdk110Tracking;
    }, function (_aimpactReactive001Model) {
      dependency_7 = _aimpactReactive001Model;
    }, function (_beyondJsKernel019Texts) {
      dependency_8 = _beyondJsKernel019Texts;
    }, function (_react2) {
      dependency_9 = _react2;
    }, function (_aimpactChatSdk141Session) {
      dependency_10 = _aimpactChatSdk141Session;
    }, function (_aimpactAilearnApp0324ComponentsIcons) {
      dependency_11 = _aimpactAilearnApp0324ComponentsIcons;
    }, function (_pragmateUi100Beta7List) {
      dependency_12 = _pragmateUi100Beta7List;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_13 = _pragmateUi100Beta7Icons;
    }, function (_aimpactChatSdk141WidgetsMarkdown) {
      dependency_14 = _aimpactChatSdk141WidgetsMarkdown;
    }, function (_aimpactAilearnApp0324ComponentsUi) {
      dependency_15 = _aimpactAilearnApp0324ComponentsUi;
    }, function (_aimpactAilearnApp0324ComponentsNavbarHeaderCode) {
      dependency_16 = _aimpactAilearnApp0324ComponentsNavbarHeaderCode;
    }, function (_aimpactAilearnApp0324Config) {
      dependency_17 = _aimpactAilearnApp0324Config;
    }, function (_beyondJsReact18Widgets113Hooks) {
      dependency_18 = _beyondJsReact18Widgets113Hooks;
    }, function (_react1820JsxRuntime) {
      dependency_19 = _react1820JsxRuntime;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.1.0"], ["@aimpact/ailearn-api", null], ["@aimpact/auth", null], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.1"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.3"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["@google-cloud/storage", "7.15.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.24.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.24"], ["@aimpact/ailearn-app", "0.3.24"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.3.24/dashboard/wall/widget",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/base', dependency_3], ['@aimpact/ailearn-app/dashboard-layout.widget', dependency_4], ['@aimpact/ailearn-sdk/core', dependency_5], ['@aimpact/ailearn-sdk/tracking', dependency_6], ['@aimpact/reactive/model', dependency_7], ['@beyond-js/kernel/texts', dependency_8], ['react', dependency_9], ['@aimpact/chat-sdk/session', dependency_10], ['@aimpact/ailearn-app/components/icons', dependency_11], ['pragmate-ui/list', dependency_12], ['pragmate-ui/icons', dependency_13], ['@aimpact/chat-sdk/widgets/markdown', dependency_14], ['@aimpact/ailearn-app/components/ui', dependency_15], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_16], ['@aimpact/ailearn-app/config', dependency_17], ['@beyond-js/react-18-widgets/hooks', dependency_18], ['react/jsx-runtime', dependency_19]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-dashboard-wall",
        "attrs": ["id"],
        "vspecifier": "@aimpact/ailearn-app@0.3.24/dashboard/wall/widget.widget"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.3.24/dashboard/wall/widget.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 2272135519,
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
            constructor(a) {
              super(a);
            }
            /**
             * this method is executed when the widget is show
             */
            show() {
              this.#store.load(this.uri.vars.get('id'));
            }
            hola() {
              console.log('hola');
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
        hash: 2200817210,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _core = require("@aimpact/ailearn-sdk/core");
          var _model = require("@aimpact/reactive/model");
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
                this.#model = new _core.DashboardWall();
                this.#id = id;
                const {
                  messages
                } = await this.#model.load({
                  id
                });
                this.#items = messages;
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
        hash: 3177202354,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Message = Message;
          var _react = require("react");
          var _profileIcon = require("../components/profile-icon");
          var _icons = require("pragmate-ui/icons");
          var _markdown = require("@aimpact/chat-sdk/widgets/markdown");
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
            0;
            const output = applyEllipsis(text, isExpanded ? 5000 : 280);
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
            }, user.name), _react.default.createElement(_markdown.Markdown, {
              className: `message__label-text p2 expand-${isExpanded}`,
              content: output
            }))), _react.default.createElement("section", {
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
        hash: 1283588790,
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
            }, _react.default.createElement(Control, null));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsImF0dHJpYnV0ZXMiLCJXaWRnZXQiLCJWaWV3IiwiY29uc3RydWN0b3IiLCJhIiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaG9sYSIsImNvbnNvbGUiLCJsb2ciLCJleHBvcnRzIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsIl9jb3JlIiwiX21vZGVsIiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiUmVhY3RpdmVNb2RlbCIsImlzU3RvcmUiLCJtb2RlbCIsIml0ZW1zIiwiaWQiLCJhc3NpZ25tZW50IiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJyZWFkeSIsIm9uIiwidHJpZ2dlckV2ZW50IiwicmVmcmVzaCIsImZldGNoaW5nIiwibWVzc2FnZXMiLCJlIiwiZXJyb3IiLCJEYXNoYm9hcmRXYWxsIiwiX3JlYWN0IiwiX3Nlc3Npb24iLCJfaWNvbnMiLCJQcm9maWxlSWNvbiIsInJvbGUiLCJsb2FkRXJyb3IiLCJzZXRMb2FkRXJyb3IiLCJ1c2VTdGF0ZSIsImljb24iLCJnbG9iYWxUaGlzIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInVzZXJQcm9wcyIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsImdldFByb3BlcnRpZXMiLCJoYW5kbGVMb2FkRXJyb3IiLCJzcmMiLCJwaG90b1VSTCIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiYWx0Iiwib25FcnJvciIsIkFwcEljb24iLCJfY29udGV4dCIsIl9pdGVtIiwiX2xpc3QiLCJDb250ZW50IiwidXNlV2FsbERhc2hib2FyZENvbnRleHQiLCJMaXN0IiwiY29udHJvbCIsIkl0ZW0iLCJfbWVzc2FnZSIsImRhdGEiLCJ0aW1lIiwiYWN0aXZpdHkiLCJ0aXRsZSIsIk1lc3NhZ2UiLCJ0ZXh0IiwicHJvbXB0IiwiY29udGVudCIsImFuc3dlciIsInVuZGVmaW5lZCIsIl9wcm9maWxlSWNvbiIsIl9tYXJrZG93biIsImlzRXhwYW5kZWQiLCJzZXRJc0V4cGFuZCIsImNscyIsInRvZ2dsZVRleHQiLCJhcHBseUVsbGlwc2lzIiwibWF4TGVuZ3RoIiwibGVuZ3RoIiwic2xpY2UiLCJvdXRwdXQiLCJwaG90b1VybCIsIm5hbWUiLCJNYXJrZG93biIsIkljb25CdXR0b24iLCJvbkNsaWNrIiwiV2FsbERhc2hib2FyZENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl91aSIsIkVtcHR5TGlzdCIsIkVtcHR5Q2FyZCIsImVtcHR5VGl0bGUiLCJkZXNjcmlwdGlvbiIsImVtcHR5IiwiX25hdmJhckhlYWRlciIsIkhlYWRlciIsIkZyYWdtZW50IiwiTmF2YmFySGVhZGVyIiwiYnJlYWRjcnVtYiIsIl9ob29rcyIsIl9jb250ZW50IiwiX2VtcHR5Iiwic3RhdGUiLCJzZXRTdGF0ZSIsInVzZUJpbmRlciIsIlBhZ2VMb2FkZXIiLCJ0b3RhbEl0ZW1zIiwiY29udGV4dFZhbHVlIiwiQ29udHJvbCIsIlByb3ZpZGVyIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvaW50ZXJmYWNlLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvcHJvZmlsZS1pY29uLnRzeCIsIi90cy92aWV3cy9jb250ZW50L2luZGV4LnRzeCIsIi90cy92aWV3cy9jb250ZW50L2l0ZW0udHN4IiwiL3RzL3ZpZXdzL2NvbnRlbnQvbWVzc2FnZS50c3giLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9lbXB0eS50c3giLCIvdHMvdmlld3MvaGVhZGVyLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVs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