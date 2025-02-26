System.register(["@beyond-js/widgets@1.1.1/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.3/base", "@aimpact/ailearn-app@0.3.16/dashboard-layout.widget", "@aimpact/ailearn-sdk@1.1.0/core", "@aimpact/reactive@0.0.1/model", "@beyond-js/kernel@0.1.9/texts", "react@18.2.0", "@aimpact/chat-sdk@1.4.1/session", "@aimpact/ailearn-app@0.3.16/components/icons", "pragmate-ui@1.0.0-beta.7/list", "pragmate-ui@1.0.0-beta.7/icons", "@aimpact/ailearn-app@0.3.16/components/ui", "@aimpact/ailearn-app@0.3.16/components/navbar-header.code", "@aimpact/ailearn-app@0.3.16/config", "@beyond-js/react-18-widgets@1.1.3/hooks", "react@18.2.0/jsx-runtime"], function (_export, _context2) {
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
    }, function (_beyondJsReact18Widgets113Base) {
      dependency_3 = _beyondJsReact18Widgets113Base;
    }, function (_aimpactAilearnApp0316DashboardLayoutWidget) {
      dependency_4 = _aimpactAilearnApp0316DashboardLayoutWidget;
    }, function (_aimpactAilearnSdk110Core) {
      dependency_5 = _aimpactAilearnSdk110Core;
    }, function (_aimpactReactive001Model) {
      dependency_6 = _aimpactReactive001Model;
    }, function (_beyondJsKernel019Texts) {
      dependency_7 = _beyondJsKernel019Texts;
    }, function (_react2) {
      dependency_8 = _react2;
    }, function (_aimpactChatSdk141Session) {
      dependency_9 = _aimpactChatSdk141Session;
    }, function (_aimpactAilearnApp0316ComponentsIcons) {
      dependency_10 = _aimpactAilearnApp0316ComponentsIcons;
    }, function (_pragmateUi100Beta7List) {
      dependency_11 = _pragmateUi100Beta7List;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_12 = _pragmateUi100Beta7Icons;
    }, function (_aimpactAilearnApp0316ComponentsUi) {
      dependency_13 = _aimpactAilearnApp0316ComponentsUi;
    }, function (_aimpactAilearnApp0316ComponentsNavbarHeaderCode) {
      dependency_14 = _aimpactAilearnApp0316ComponentsNavbarHeaderCode;
    }, function (_aimpactAilearnApp0316Config) {
      dependency_15 = _aimpactAilearnApp0316Config;
    }, function (_beyondJsReact18Widgets113Hooks) {
      dependency_16 = _beyondJsReact18Widgets113Hooks;
    }, function (_react1820JsxRuntime) {
      dependency_17 = _react1820JsxRuntime;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.1.0"], ["@aimpact/ailearn-api", null], ["@aimpact/auth", null], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.1"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.3"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["@google-cloud/storage", "7.15.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.24.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.16"], ["@aimpact/ailearn-app", "0.3.16"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.3.16/dashboard/wall/widget",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/base', dependency_3], ['@aimpact/ailearn-app/dashboard-layout.widget', dependency_4], ['@aimpact/ailearn-sdk/core', dependency_5], ['@aimpact/reactive/model', dependency_6], ['@beyond-js/kernel/texts', dependency_7], ['react', dependency_8], ['@aimpact/chat-sdk/session', dependency_9], ['@aimpact/ailearn-app/components/icons', dependency_10], ['pragmate-ui/list', dependency_11], ['pragmate-ui/icons', dependency_12], ['@aimpact/ailearn-app/components/ui', dependency_13], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_14], ['@aimpact/ailearn-app/config', dependency_15], ['@beyond-js/react-18-widgets/hooks', dependency_16], ['react/jsx-runtime', dependency_17]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-dashboard-wall",
        "attrs": ["id"],
        "vspecifier": "@aimpact/ailearn-app@0.3.16/dashboard/wall/widget.widget"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.3.16/dashboard/wall/widget.widget');
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
        hash: 1080689323,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsImF0dHJpYnV0ZXMiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiZXhwb3J0cyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJfY29yZSIsIl9tb2RlbCIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsIlJlYWN0aXZlTW9kZWwiLCJpc1N0b3JlIiwibW9kZWwiLCJpdGVtcyIsImlkIiwiYXNzaWdubWVudCIsInRleHRzIiwiQ3VycmVudFRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwicmVhZHkiLCJjb25zdHJ1Y3RvciIsIm9uIiwidHJpZ2dlckV2ZW50IiwicmVmcmVzaCIsImZldGNoaW5nIiwibWVzc2FnZXMiLCJlIiwiY29uc29sZSIsImVycm9yIiwiRGFzaGJvYXJkV2FsbCIsIl9yZWFjdCIsIl9zZXNzaW9uIiwiX2ljb25zIiwiUHJvZmlsZUljb24iLCJyb2xlIiwibG9hZEVycm9yIiwic2V0TG9hZEVycm9yIiwidXNlU3RhdGUiLCJpY29uIiwiZ2xvYmFsVGhpcyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ1c2VyUHJvcHMiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJnZXRQcm9wZXJ0aWVzIiwiaGFuZGxlTG9hZEVycm9yIiwic3JjIiwicGhvdG9VUkwiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImFsdCIsIm9uRXJyb3IiLCJBcHBJY29uIiwiX2NvbnRleHQiLCJfaXRlbSIsIl9saXN0IiwiQ29udGVudCIsInVzZVdhbGxEYXNoYm9hcmRDb250ZXh0IiwiTGlzdCIsImNvbnRyb2wiLCJJdGVtIiwiX21lc3NhZ2UiLCJkYXRhIiwidGltZSIsImFjdGl2aXR5IiwidGl0bGUiLCJNZXNzYWdlIiwidGV4dCIsInByb21wdCIsImNvbnRlbnQiLCJhbnN3ZXIiLCJ1bmRlZmluZWQiLCJfcHJvZmlsZUljb24iLCJpc0V4cGFuZGVkIiwic2V0SXNFeHBhbmQiLCJjbHMiLCJ0b2dnbGVUZXh0IiwiYXBwbHlFbGxpcHNpcyIsIm1heExlbmd0aCIsImxlbmd0aCIsInNsaWNlIiwicGhvdG9VcmwiLCJuYW1lIiwiSWNvbkJ1dHRvbiIsIm9uQ2xpY2siLCJXYWxsRGFzaGJvYXJkQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX3VpIiwiRW1wdHlMaXN0IiwiRW1wdHlDYXJkIiwiZW1wdHlUaXRsZSIsImRlc2NyaXB0aW9uIiwiZW1wdHkiLCJfbmF2YmFySGVhZGVyIiwiSGVhZGVyIiwiRnJhZ21lbnQiLCJOYXZiYXJIZWFkZXIiLCJicmVhZGNydW1iIiwiX2hvb2tzIiwiX2NvbnRlbnQiLCJfZW1wdHkiLCJzdGF0ZSIsInNldFN0YXRlIiwidXNlQmluZGVyIiwiUGFnZUxvYWRlciIsInRvdGFsSXRlbXMiLCJjb250ZXh0VmFsdWUiLCJDb250cm9sIiwiUHJvdmlkZXIiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi9pbnRlcmZhY2UudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvY29tcG9uZW50cy9wcm9maWxlLWljb24udHN4IiwiL3RzL3ZpZXdzL2NvbnRlbnQvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2NvbnRlbnQvaXRlbS50c3giLCIvdHMvdmlld3MvY29udGVudC9tZXNzYWdlLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2VtcHR5LnRzeCIsIi90cy92aWV3cy9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7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