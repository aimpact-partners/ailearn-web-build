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
        hash: 3918803674,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJfZGFzaGJvYXJkTGF5b3V0IiwiQ29udHJvbGxlciIsIlJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJhdHRyaWJ1dGVzIiwiV2lkZ2V0IiwiVmlldyIsInNob3ciLCJsb2FkIiwidXJpIiwidmFycyIsImdldCIsImhpZGUiLCJMYXlvdXRCcm9rZXIiLCJyZW1vdmVPdmVybGF5IiwiZXhwb3J0cyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJfY29yZSIsIl9tb2RlbCIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsIlJlYWN0aXZlTW9kZWwiLCJpc1N0b3JlIiwibW9kZWwiLCJpdGVtcyIsImlkIiwiYXNzaWdubWVudCIsInRleHRzIiwiQ3VycmVudFRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwicmVhZHkiLCJjb25zdHJ1Y3RvciIsIm9uIiwidHJpZ2dlckV2ZW50IiwicmVmcmVzaCIsImZldGNoaW5nIiwibWVzc2FnZXMiLCJlIiwiY29uc29sZSIsImVycm9yIiwiQXNzaWdubWVudCIsIkRhc2hib2FyZFdhbGwiLCJkYXRhIiwic2V0QmFja0xpbmsiLCJfcmVhY3QiLCJfc2Vzc2lvbiIsIl9pY29ucyIsIlByb2ZpbGVJY29uIiwicm9sZSIsImxvYWRFcnJvciIsInNldExvYWRFcnJvciIsInVzZVN0YXRlIiwiaWNvbiIsImdsb2JhbFRoaXMiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwidXNlclByb3BzIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwiZ2V0UHJvcGVydGllcyIsImhhbmRsZUxvYWRFcnJvciIsInNyYyIsInBob3RvVVJMIiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJhbHQiLCJvbkVycm9yIiwiQXBwSWNvbiIsIl9jb250ZXh0IiwiX2l0ZW0iLCJfbGlzdCIsIkNvbnRlbnQiLCJ1c2VXYWxsRGFzaGJvYXJkQ29udGV4dCIsIkxpc3QiLCJjb250cm9sIiwiSXRlbSIsIl9tZXNzYWdlIiwidGltZSIsImFjdGl2aXR5IiwidGl0bGUiLCJNZXNzYWdlIiwidGV4dCIsInByb21wdCIsImNvbnRlbnQiLCJhbnN3ZXIiLCJ1bmRlZmluZWQiLCJfcHJvZmlsZUljb24iLCJpc0V4cGFuZGVkIiwic2V0SXNFeHBhbmQiLCJjbHMiLCJ0b2dnbGVUZXh0IiwiYXBwbHlFbGxpcHNpcyIsIm1heExlbmd0aCIsImxlbmd0aCIsInNsaWNlIiwicGhvdG9VcmwiLCJuYW1lIiwiSWNvbkJ1dHRvbiIsIm9uQ2xpY2siLCJXYWxsRGFzaGJvYXJkQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX3VpIiwiRW1wdHlMaXN0IiwiRW1wdHlDYXJkIiwiZW1wdHlUaXRsZSIsImRlc2NyaXB0aW9uIiwiZW1wdHkiLCJfbmF2YmFySGVhZGVyIiwiSGVhZGVyIiwiRnJhZ21lbnQiLCJOYXZiYXJIZWFkZXIiLCJicmVhZGNydW1iIiwiX2hvb2tzIiwiX2NvbnRlbnQiLCJfZW1wdHkiLCJzdGF0ZSIsInNldFN0YXRlIiwidXNlQmluZGVyIiwiUGFnZUxvYWRlciIsInRvdGFsSXRlbXMiLCJjb250ZXh0VmFsdWUiLCJDb250cm9sIiwiUHJvdmlkZXIiLCJQYWdlQ29udGFpbmVyIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvaW50ZXJmYWNlLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvcHJvZmlsZS1pY29uLnRzeCIsIi90cy92aWV3cy9jb250ZW50L2luZGV4LnRzeCIsIi90cy92aWV3cy9jb250ZW50L2l0ZW0udHN4IiwiL3RzL3ZpZXdzL2NvbnRlbnQvbWVzc2FnZS50c3giLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9lbXB0eS50c3giLCIvdHMvdmlld3MvaGVhZGVyLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQUcsZ0JBQUEsR0FBQUgsT0FBQTtVQUNPO1VBQVUsTUFDWEksVUFBVyxTQUFRTCxLQUFBLENBQUFNLHFCQUFxQjtZQUM3QyxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlMLE1BQUEsQ0FBQU8sWUFBWSxDQUFDLElBQUksQ0FBQ0MsVUFBVSxDQUFDO2NBQy9DLE9BQU8sSUFBSSxDQUFDLENBQUFILEtBQU07WUFDbkI7WUFFQSxJQUFJSSxNQUFNQSxDQUFBO2NBQ1QsT0FBT1IsTUFBQSxDQUFBUyxJQUFJO1lBQ1o7WUFFQTs7O1lBR0FDLElBQUlBLENBQUE7Y0FDSCxJQUFJLENBQUMsQ0FBQU4sS0FBTSxDQUFDTyxJQUFJLENBQUMsSUFBSSxDQUFDQyxHQUFHLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzFDO1lBRUE7OztZQUdBQyxJQUFJQSxDQUFBO2NBQ0hkLGdCQUFBLENBQUFlLFlBQVksQ0FBQ0MsYUFBYSxFQUFFO1lBQzdCOztVQUNBQyxPQUFBLENBQUFoQixVQUFBLEdBQUFBLFVBQUE7Ozs7Ozs7Ozs7O1VDN0JEOztVQUVBaUIsTUFBQSxDQUFBQyxjQUFBLENBQUFGLE9BQUE7WUFDQUcsS0FBQTtVQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ0pBLElBQUFDLEtBQUEsR0FBQXhCLE9BQUE7VUFFQSxJQUFBeUIsTUFBQSxHQUFBekIsT0FBQTtVQUdBLElBQUFHLGdCQUFBLEdBQUFILE9BQUE7VUFDQSxJQUFBMEIsTUFBQSxHQUFBMUIsT0FBQTtVQUNBLElBQUEyQixlQUFBLEdBQUEzQixPQUFBO1VBRU0sTUFBT1EsWUFBYSxTQUFRaUIsTUFBQSxDQUFBRyxhQUEyQjtZQUM1REMsT0FBTyxHQUFHLElBQUk7WUFDZCxDQUFBQyxLQUFNO1lBRU4sSUFBSUEsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU07WUFDbkI7WUFFQSxDQUFBQyxLQUFNO1lBQ04sSUFBSUEsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU07WUFDbkI7WUFFQSxDQUFBQyxFQUFHO1lBQ0gsSUFBSUEsRUFBRUEsQ0FBQTtjQUNMLE9BQU8sSUFBSSxDQUFDLENBQUFBLEVBQUc7WUFDaEI7WUFFQSxDQUFBQyxVQUFXO1lBQ1gsSUFBSUEsVUFBVUEsQ0FBQTtjQUNiLE9BQU8sSUFBSSxDQUFDLENBQUFBLFVBQVc7WUFDeEI7WUFDQSxDQUFBQyxLQUFNLEdBQStCLElBQUlSLE1BQUEsQ0FBQVMsWUFBWSxDQUFDUixlQUFBLENBQUFTLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDO1lBQ3ZFLElBQUlILEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNLEVBQUVYLEtBQUs7WUFDMUI7WUFDQSxJQUFJZSxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxLQUFLLENBQUNBLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQUosS0FBTSxDQUFDSSxLQUFLO1lBQ3hDO1lBQ0FDLFlBQVk5QixVQUFVO2NBQ3JCLEtBQUssRUFBRTtjQUVQLElBQUksQ0FBQyxDQUFBeUIsS0FBTSxDQUFDTSxFQUFFLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQ0MsWUFBWSxDQUFDO2NBQzNDLElBQUksQ0FBQzVCLElBQUksQ0FBQ0osVUFBVSxDQUFDTyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDaEM7WUFFQTBCLE9BQU8sR0FBRyxNQUFBQSxDQUFBLEtBQVc7Y0FDcEIsSUFBSTtnQkFDSCxJQUFJLENBQUNDLFFBQVEsR0FBRyxJQUFJO2dCQUNwQixNQUFNO2tCQUFFQztnQkFBUSxDQUFFLEdBQUcsTUFBTSxJQUFJLENBQUNkLEtBQUssQ0FBQ2pCLElBQUksQ0FBQztrQkFBRW1CLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQUE7Z0JBQUcsQ0FBRSxDQUFDO2dCQUM1RCxJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHYSxRQUFRO2VBQ3RCLENBQUMsT0FBT0MsQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUNDLEtBQUssQ0FBQ0YsQ0FBQyxDQUFDO2VBQ2hCLFNBQVM7Z0JBQ1QsSUFBSSxDQUFDRixRQUFRLEdBQUcsS0FBSzs7WUFFdkIsQ0FBQztZQUVELE1BQU05QixJQUFJQSxDQUFDbUIsRUFBRTtjQUNaLElBQUk7Z0JBQ0gsSUFBSSxDQUFDLENBQUFDLFVBQVcsR0FBRyxJQUFJVCxLQUFBLENBQUF3QixVQUFVLENBQUM7a0JBQUVoQjtnQkFBRSxDQUFFLENBQUM7Z0JBQ3pDLElBQUksQ0FBQyxDQUFBRixLQUFNLEdBQUcsSUFBSU4sS0FBQSxDQUFBeUIsYUFBYSxFQUFFO2dCQUNqQyxJQUFJLENBQUMsQ0FBQWpCLEVBQUcsR0FBR0EsRUFBRTtnQkFDYixNQUFNO2tCQUFFWTtnQkFBUSxDQUFFLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQWQsS0FBTSxDQUFDakIsSUFBSSxDQUFDO2tCQUFFbUI7Z0JBQUUsQ0FBRSxDQUFDO2dCQUNuRCxNQUFNa0IsSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUFqQixVQUFXLENBQUNwQixJQUFJLENBQUM7a0JBQUVtQjtnQkFBRSxDQUFFLENBQUM7Z0JBRWhELElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUdhLFFBQVE7Z0JBQ3RCekMsZ0JBQUEsQ0FBQWUsWUFBWSxDQUFDaUMsV0FBVyxDQUFDLGNBQWNuQixFQUFFLEVBQUUsQ0FBQztnQkFFNUM7Z0JBQ0E7Z0JBQ0E7Z0JBQ0E7Z0JBQ0E7Z0JBQ0E7Z0JBRUEsS0FBSyxDQUFDTSxLQUFLLEdBQUcsSUFBSTtnQkFDbEIsSUFBSSxDQUFDRyxZQUFZLEVBQUU7ZUFDbkIsQ0FBQyxPQUFPSSxDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDRixDQUFDLENBQUM7O1lBRWxCOztVQUNBekIsT0FBQSxDQUFBWixZQUFBLEdBQUFBLFlBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDakZELElBQUE0QyxNQUFBLEdBQUFwRCxPQUFBO1VBQ0EsSUFBQXFELFFBQUEsR0FBQXJELE9BQUE7VUFDQSxJQUFBc0QsTUFBQSxHQUFBdEQsT0FBQTtVQUNNLFNBQVV1RCxXQUFXQSxDQUFDO1lBQUVDO1VBQUksQ0FBRTtZQUNuQyxNQUFNLENBQUNDLFNBQVMsRUFBRUMsWUFBWSxDQUFDLEdBQUcsSUFBQU4sTUFBQSxDQUFBTyxRQUFRLEVBQUMsS0FBSyxDQUFDO1lBQ2pEO1lBQ0EsTUFBTUMsSUFBSSxHQUFHSixJQUFJLEtBQUssTUFBTSxHQUFHLE1BQU0sR0FBR0ssVUFBVSxDQUFDQyxZQUFZLENBQUNDLE9BQU8sQ0FBQywrQkFBK0IsQ0FBQztZQUN4RyxNQUFNQyxTQUFTLEdBQUdYLFFBQUEsQ0FBQVksY0FBYyxDQUFDQyxJQUFJLENBQUNDLGFBQWEsRUFBRTtZQUNyRCxNQUFNQyxlQUFlLEdBQUdBLENBQUEsS0FBTVYsWUFBWSxDQUFDLElBQUksQ0FBQztZQUNoRCxNQUFNVyxHQUFHLEdBQUdiLElBQUksS0FBSyxNQUFNLEdBQUdRLFNBQVMsQ0FBQ00sUUFBUSxHQUFHVCxVQUFVLENBQUNDLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLCtCQUErQixDQUFDO1lBQ25ILE9BQ0NYLE1BQUEsQ0FBQW1CLE9BQUEsQ0FBQUMsYUFBQTtjQUFTQyxTQUFTLEVBQUM7WUFBb0IsR0FDcENULFNBQVMsQ0FBQ00sUUFBUSxJQUFJLENBQUNiLFNBQVMsSUFBS0QsSUFBSSxLQUFLLE1BQU0sR0FDckRKLE1BQUEsQ0FBQW1CLE9BQUEsQ0FBQUMsYUFBQTtjQUFLRSxHQUFHLEVBQUMsb0JBQW9CO2NBQUNMLEdBQUcsRUFBRUEsR0FBRztjQUFFTSxPQUFPLEVBQUVQO1lBQWUsRUFBSSxHQUVwRWhCLE1BQUEsQ0FBQW1CLE9BQUEsQ0FBQUMsYUFBQSxDQUFDbEIsTUFBQSxDQUFBc0IsT0FBTztjQUFDSCxTQUFTLEVBQUMsSUFBSTtjQUFDYixJQUFJLEVBQUM7WUFBTSxFQUNuQyxDQUNRO1VBRVo7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbkJBLElBQUFSLE1BQUEsR0FBQXBELE9BQUE7VUFDQSxJQUFBNkUsUUFBQSxHQUFBN0UsT0FBQTtVQUNBLElBQUE4RSxLQUFBLEdBQUE5RSxPQUFBO1VBQ0EsSUFBQStFLEtBQUEsR0FBQS9FLE9BQUE7VUFFTztVQUFXLE1BQU1nRixPQUFPLEdBQWFBLENBQUEsS0FBSztZQUNoRCxNQUFNO2NBQUVqRDtZQUFLLENBQUUsR0FBRyxJQUFBOEMsUUFBQSxDQUFBSSx1QkFBdUIsR0FBRTtZQUUzQyxPQUFPN0IsTUFBQSxDQUFBbUIsT0FBQSxDQUFBQyxhQUFBLENBQUNPLEtBQUEsQ0FBQUcsSUFBSTtjQUFDVCxTQUFTLEVBQUMsaUJBQWlCO2NBQUMxQyxLQUFLLEVBQUVBLEtBQUs7Y0FBRW9ELE9BQU8sRUFBRUwsS0FBQSxDQUFBTTtZQUFJLEVBQUk7VUFDekUsQ0FBQztVQUFDaEUsT0FBQSxDQUFBNEQsT0FBQSxHQUFBQSxPQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1RGLElBQUE1QixNQUFBLEdBQUFwRCxPQUFBO1VBQ0EsSUFBQTZFLFFBQUEsR0FBQTdFLE9BQUE7VUFDQSxJQUFBcUYsUUFBQSxHQUFBckYsT0FBQTtVQUVNLFNBQVVvRixJQUFJQSxDQUFDO1lBQUVsQztVQUFJLENBQUU7WUFDNUIsTUFBTTtjQUFFaEI7WUFBSyxDQUFFLEdBQUcsSUFBQTJDLFFBQUEsQ0FBQUksdUJBQXVCLEdBQUU7WUFFM0MsT0FDQzdCLE1BQUEsQ0FBQW1CLE9BQUEsQ0FBQUMsYUFBQTtjQUFLQyxTQUFTLEVBQUMsZ0JBQWdCO2NBQUN6QyxFQUFFLEVBQUVrQixJQUFJLENBQUNvQztZQUFJLEdBQzVDbEMsTUFBQSxDQUFBbUIsT0FBQSxDQUFBQyxhQUFBO2NBQUdDLFNBQVMsRUFBQztZQUFtQixHQUFFdkIsSUFBSSxDQUFDcUMsUUFBUSxDQUFDQyxLQUFLLENBQUssRUFDMURwQyxNQUFBLENBQUFtQixPQUFBLENBQUFDLGFBQUEsQ0FBQ2EsUUFBQSxDQUFBSSxPQUFPO2NBQUNqQyxJQUFJLEVBQUMsTUFBTTtjQUFDa0MsSUFBSSxFQUFFeEMsSUFBSSxDQUFDeUMsTUFBTSxDQUFDQyxPQUFPO2NBQUUxQixJQUFJLEVBQUVoQixJQUFJLENBQUNnQjtZQUFJLEVBQUksRUFDbkVkLE1BQUEsQ0FBQW1CLE9BQUEsQ0FBQUMsYUFBQSxDQUFDYSxRQUFBLENBQUFJLE9BQU87Y0FBQ2pDLElBQUksRUFBQyxRQUFRO2NBQUNrQyxJQUFJLEVBQUV4QyxJQUFJLENBQUMyQyxNQUFNLENBQUNELE9BQU87Y0FBRTFCLElBQUksRUFBRTRCO1lBQVMsRUFBSSxDQUNoRTtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2RBLElBQUExQyxNQUFBLEdBQUFwRCxPQUFBO1VBQ0EsSUFBQStGLFlBQUEsR0FBQS9GLE9BQUE7VUFDQSxJQUFBc0QsTUFBQSxHQUFBdEQsT0FBQTtVQUVNLFNBQVV5RixPQUFPQSxDQUFDO1lBQUVqQyxJQUFJO1lBQUVrQyxJQUFJO1lBQUV4QjtVQUFJLENBQUU7WUFDM0MsTUFBTSxDQUFDOEIsVUFBVSxFQUFFQyxXQUFXLENBQUMsR0FBRyxJQUFBN0MsTUFBQSxDQUFBTyxRQUFRLEVBQUMsS0FBSyxDQUFDO1lBQ2pELE1BQU11QyxHQUFHLEdBQUcsUUFBUTFDLElBQUksRUFBRTtZQUUxQixTQUFTMkMsVUFBVUEsQ0FBQTtjQUNsQkYsV0FBVyxDQUFDLENBQUNELFVBQVUsQ0FBQztZQUN6QjtZQUVBLFNBQVNJLGFBQWFBLENBQUNWLElBQVksRUFBRVcsU0FBaUI7Y0FDckQsT0FBT1gsSUFBSSxDQUFDWSxNQUFNLEdBQUdELFNBQVMsR0FBR1gsSUFBSSxDQUFDYSxLQUFLLENBQUMsQ0FBQyxFQUFFRixTQUFTLENBQUMsR0FBRyxLQUFLLEdBQUdYLElBQUk7WUFDekU7WUFFQSxPQUNDdEMsTUFBQSxDQUFBbUIsT0FBQSxDQUFBQyxhQUFBO2NBQUtDLFNBQVMsRUFBRXlCO1lBQUcsR0FDbEI5QyxNQUFBLENBQUFtQixPQUFBLENBQUFDLGFBQUE7Y0FBU0MsU0FBUyxFQUFDO1lBQW9CLEdBQ3RDckIsTUFBQSxDQUFBbUIsT0FBQSxDQUFBQyxhQUFBLENBQUN1QixZQUFBLENBQUF4QyxXQUFXO2NBQUNDLElBQUksRUFBRUEsSUFBSTtjQUFFZ0QsUUFBUSxFQUFFdEMsSUFBSSxFQUFFc0M7WUFBUSxFQUFJLENBQzVDLEVBQ1ZwRCxNQUFBLENBQUFtQixPQUFBLENBQUFDLGFBQUE7Y0FBU0MsU0FBUyxFQUFDO1lBQXlCLEdBQzNDckIsTUFBQSxDQUFBbUIsT0FBQSxDQUFBQyxhQUFBO2NBQUtDLFNBQVMsRUFBRSxrQ0FBa0N1QixVQUFVO1lBQUUsR0FDNUQ5QixJQUFJLElBQUlkLE1BQUEsQ0FBQW1CLE9BQUEsQ0FBQUMsYUFBQTtjQUFHQyxTQUFTLEVBQUM7WUFBNkIsR0FBRVAsSUFBSSxDQUFDdUMsSUFBSSxDQUFLLEVBQ25FckQsTUFBQSxDQUFBbUIsT0FBQSxDQUFBQyxhQUFBO2NBQUdDLFNBQVMsRUFBRSxpQ0FBaUN1QixVQUFVO1lBQUUsR0FDekRJLGFBQWEsQ0FBQ1YsSUFBSSxFQUFFTSxVQUFVLEdBQUcsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUMxQyxDQUNDLENBQ0csRUFFVjVDLE1BQUEsQ0FBQW1CLE9BQUEsQ0FBQUMsYUFBQTtjQUFTQyxTQUFTLEVBQUM7WUFBeUIsR0FDM0NyQixNQUFBLENBQUFtQixPQUFBLENBQUFDLGFBQUEsQ0FBQ2xCLE1BQUEsQ0FBQW9ELFVBQVU7Y0FBQ0MsT0FBTyxFQUFFUixVQUFVO2NBQUUxQixTQUFTLEVBQUMsSUFBSTtjQUFDYixJQUFJLEVBQUUsQ0FBQ29DLFVBQVUsR0FBRyxlQUFlLEdBQUc7WUFBYSxFQUFJLENBQzlGLENBQ0w7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNuQ0EsSUFBQTVDLE1BQUEsR0FBQXBELE9BQUE7VUFXTyxNQUFNNEcsb0JBQW9CLEdBQUF4RixPQUFBLENBQUF3RixvQkFBQSxHQUFHeEQsTUFBQSxDQUFBbUIsT0FBSyxDQUFDc0MsYUFBYSxDQUFXLEVBQWMsQ0FBQztVQUMxRSxNQUFNNUIsdUJBQXVCLEdBQUdBLENBQUEsS0FBTTdCLE1BQUEsQ0FBQW1CLE9BQUssQ0FBQ3VDLFVBQVUsQ0FBQ0Ysb0JBQW9CLENBQUM7VUFBQ3hGLE9BQUEsQ0FBQTZELHVCQUFBLEdBQUFBLHVCQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1pwRixJQUFBN0IsTUFBQSxHQUFBcEQsT0FBQTtVQUNBLElBQUErRyxHQUFBLEdBQUEvRyxPQUFBO1VBQ0EsSUFBQTZFLFFBQUEsR0FBQTdFLE9BQUE7VUFFTSxTQUFVZ0gsU0FBU0EsQ0FBQTtZQUN4QixNQUFNO2NBQUU5RTtZQUFLLENBQUUsR0FBRyxJQUFBMkMsUUFBQSxDQUFBSSx1QkFBdUIsR0FBRTtZQUMzQyxPQUFPN0IsTUFBQSxDQUFBbUIsT0FBQSxDQUFBQyxhQUFBLENBQUN1QyxHQUFBLENBQUFFLFNBQVM7Y0FBQ3ZCLElBQUksRUFBRXhELEtBQUssQ0FBQ2dGLFVBQVU7Y0FBRUMsV0FBVyxFQUFFakYsS0FBSyxDQUFDa0YsS0FBSztjQUFFeEQsSUFBSSxFQUFDO1lBQU0sRUFBRztVQUNuRjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNQQSxJQUFBeUQsYUFBQSxHQUFBckgsT0FBQTtVQUNBLElBQUFvRCxNQUFBLEdBQUFwRCxPQUFBO1VBQ0EsSUFBQTZFLFFBQUEsR0FBQTdFLE9BQUE7VUFDQSxJQUFBc0QsTUFBQSxHQUFBdEQsT0FBQTtVQUVPO1VBQVUsU0FBVXNILE1BQU1BLENBQUE7WUFDaEMsTUFBTTtjQUFFaEg7WUFBSyxDQUFFLEdBQUcsSUFBQXVFLFFBQUEsQ0FBQUksdUJBQXVCLEdBQUU7WUFFM0MsT0FDQzdCLE1BQUEsQ0FBQW1CLE9BQUEsQ0FBQUMsYUFBQSxDQUFBcEIsTUFBQSxDQUFBbUIsT0FBQSxDQUFBZ0QsUUFBQSxRQUNDbkUsTUFBQSxDQUFBbUIsT0FBQSxDQUFBQyxhQUFBLENBQUM2QyxhQUFBLENBQUFHLFlBQVk7Y0FDWkMsVUFBVSxFQUFFLENBQ1gsQ0FBQyxZQUFZLEVBQUUsY0FBY25ILEtBQUssQ0FBQzBCLEVBQUUsRUFBRSxDQUFDLEVBQ3hDLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQztZQUNaLEdBRURvQixNQUFBLENBQUFtQixPQUFBLENBQUFDLGFBQUEsQ0FBQ2xCLE1BQUEsQ0FBQW9ELFVBQVU7Y0FBQzlDLElBQUksRUFBQyxTQUFTO2NBQUMrQyxPQUFPLEVBQUVyRyxLQUFLLENBQUNvQztZQUFPLEVBQUksQ0FDdkMsQ0FDYjtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3BCQSxJQUFBcUUsR0FBQSxHQUFBL0csT0FBQTtVQUNBLElBQUEwSCxNQUFBLEdBQUExSCxPQUFBO1VBQ0EsSUFBQW9ELE1BQUEsR0FBQXBELE9BQUE7VUFFQSxJQUFBNkUsUUFBQSxHQUFBN0UsT0FBQTtVQUVBLElBQUEySCxRQUFBLEdBQUEzSCxPQUFBO1VBQ0EsSUFBQTRILE1BQUEsR0FBQTVILE9BQUE7VUFRTztVQUFXLFNBQVVXLElBQUlBLENBQUM7WUFBRUw7VUFBSyxDQUEyQjtZQUNsRSxNQUFNLENBQUN1SCxLQUFLLEVBQUVDLFFBQVEsQ0FBQyxHQUFHMUUsTUFBQSxDQUFBbUIsT0FBSyxDQUFDWixRQUFRLENBQUMsRUFBeUIsQ0FBQztZQUNuRSxJQUFBK0QsTUFBQSxDQUFBSyxTQUFTLEVBQUMsQ0FBQ3pILEtBQUssQ0FBQyxFQUFFLE1BQUs7Y0FDdkJ3SCxRQUFRLENBQUM7Z0JBQ1J4RixLQUFLLEVBQUVoQyxLQUFLLENBQUNnQyxLQUFLO2dCQUNsQkssUUFBUSxFQUFFckMsS0FBSyxDQUFDcUMsUUFBUTtnQkFDeEJaLEtBQUssRUFBRXpCLEtBQUssQ0FBQ3lCO2VBQ2IsQ0FBQztZQUNILENBQUMsQ0FBQztZQUVGLElBQUksQ0FBQzhGLEtBQUssQ0FBQ3ZGLEtBQUssRUFBRSxPQUFPYyxNQUFBLENBQUFtQixPQUFBLENBQUFDLGFBQUEsQ0FBQ3VDLEdBQUEsQ0FBQWlCLFVBQVU7Y0FBQ3JGLFFBQVEsRUFBRWtGLEtBQUssQ0FBQ2xGO1lBQVEsRUFBSTtZQUVqRSxNQUFNc0YsVUFBVSxHQUFHM0gsS0FBSyxDQUFDeUIsS0FBSyxDQUFDdUUsTUFBTTtZQUNyQyxNQUFNO2NBQUVwRTtZQUFLLENBQUUsR0FBRzVCLEtBQUs7WUFFdkIsTUFBTTRILFlBQVksR0FBRztjQUNwQmhHLEtBQUs7Y0FDTDVCLEtBQUs7Y0FDTHlCLEtBQUssRUFBRXpCLEtBQUssQ0FBQ3lCLEtBQUs7Y0FDbEJZLFFBQVEsRUFBRXJDLEtBQUssQ0FBQ3FDLFFBQVE7Y0FDeEJzRjthQUNBO1lBQ0QsTUFBTUUsT0FBTyxHQUFHN0gsS0FBSyxDQUFDeUIsS0FBSyxDQUFDdUUsTUFBTSxHQUFHLENBQUMsR0FBR3FCLFFBQUEsQ0FBQTNDLE9BQU8sR0FBRzRDLE1BQUEsQ0FBQVosU0FBUztZQUM1RCxPQUNDNUQsTUFBQSxDQUFBbUIsT0FBQSxDQUFBQyxhQUFBLENBQUNLLFFBQUEsQ0FBQStCLG9CQUFvQixDQUFDd0IsUUFBUTtjQUFDN0csS0FBSyxFQUFFMkc7WUFBWSxHQUNqRDlFLE1BQUEsQ0FBQW1CLE9BQUEsQ0FBQUMsYUFBQSxDQUFDdUMsR0FBQSxDQUFBc0IsYUFBYSxRQUNiakYsTUFBQSxDQUFBbUIsT0FBQSxDQUFBQyxhQUFBLENBQUMyRCxPQUFPLE9BQUcsQ0FDSSxDQUNlO1VBRWxDIiwiaWdub3JlTGlzdCI6W119