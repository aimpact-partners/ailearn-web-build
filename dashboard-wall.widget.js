System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.1.3-test.07/dashboard-layout.widget", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.2.0/model", "@beyond-js/kernel@0.1.9/texts", "react@18.2.0", "pragmate-ui@1.0.0-beta.1/icons", "@aimpact/chat-sdk@1.0.1/session", "@aimpact/chat@1.0.2/shared/icons", "pragmate-ui@1.0.0-beta.1/list", "@aimpact/ailearn-app@0.1.3-test.07/components/ui", "@aimpact/ailearn-app@0.1.3-test.07/components/navbar-header.code", "@aimpact/ailearn-app@0.1.3-test.07/config", "@beyond-js/react-18-widgets@1.1.2/hooks", "react@18.2.0/jsx-runtime"], function (_export, _context2) {
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
    }, function (_beyondJsReact18Widgets112Page) {
      dependency_3 = _beyondJsReact18Widgets112Page;
    }, function (_aimpactAilearnApp013Test07DashboardLayoutWidget) {
      dependency_4 = _aimpactAilearnApp013Test07DashboardLayoutWidget;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_5 = _aimpactAilearnSdk100Core;
    }, function (_beyondJsReactive120Model) {
      dependency_6 = _beyondJsReactive120Model;
    }, function (_beyondJsKernel019Texts) {
      dependency_7 = _beyondJsKernel019Texts;
    }, function (_react2) {
      dependency_8 = _react2;
    }, function (_pragmateUi100Beta1Icons) {
      dependency_9 = _pragmateUi100Beta1Icons;
    }, function (_aimpactChatSdk101Session) {
      dependency_10 = _aimpactChatSdk101Session;
    }, function (_aimpactChat102SharedIcons) {
      dependency_11 = _aimpactChat102SharedIcons;
    }, function (_pragmateUi100Beta1List) {
      dependency_12 = _pragmateUi100Beta1List;
    }, function (_aimpactAilearnApp013Test07ComponentsUi) {
      dependency_13 = _aimpactAilearnApp013Test07ComponentsUi;
    }, function (_aimpactAilearnApp013Test07ComponentsNavbarHeaderCode) {
      dependency_14 = _aimpactAilearnApp013Test07ComponentsNavbarHeaderCode;
    }, function (_aimpactAilearnApp013Test07Config) {
      dependency_15 = _aimpactAilearnApp013Test07Config;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_16 = _beyondJsReact18Widgets112Hooks;
    }, function (_react1820JsxRuntime) {
      dependency_17 = _react1820JsxRuntime;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.2"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.1"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.1.3-test.07"], ["@aimpact/ailearn-app", "0.1.3-test.07"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.3-test.07/dashboard-wall",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/dashboard-layout.widget', dependency_4], ['@aimpact/ailearn-sdk/core', dependency_5], ['@beyond-js/reactive/model', dependency_6], ['@beyond-js/kernel/texts', dependency_7], ['react', dependency_8], ['pragmate-ui/icons', dependency_9], ['@aimpact/chat-sdk/session', dependency_10], ['@aimpact/chat/shared/icons', dependency_11], ['pragmate-ui/list', dependency_12], ['@aimpact/ailearn-app/components/ui', dependency_13], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_14], ['@aimpact/ailearn-app/config', dependency_15], ['@beyond-js/react-18-widgets/hooks', dependency_16], ['react/jsx-runtime', dependency_17]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "dashboard-wall",
        "vspecifier": "@aimpact/ailearn-app@0.1.3-test.07/dashboard-wall.widget",
        "is": "page",
        "route": "/assignments/${id}/wall",
        "layout": "dashboard-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.3-test.07/dashboard-wall.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 1571202678,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _page = require("@beyond-js/react-18-widgets/page");
          var _store = require("./store");
          var _views = require("./views");
          var _dashboardLayout = require("@aimpact/ailearn-app/dashboard-layout.widget");
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
              _dashboardLayout.LayoutBroker.setBackLink(`/assignments/${this.uri.vars.get('id')}/dashboard/classroom`); // set the back link
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
        hash: 538185621,
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
            constructor() {
              super();
              this.#texts.on('change', this.triggerEvent);
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
                const setOverlay = () => {
                  if (!this.#texts.ready) return;
                  _dashboardLayout.LayoutBroker.setOverlay(`${this.texts?.header} ${data.module.title}`);
                  this.#texts.off('change', setOverlay);
                };
                this.ready ? setOverlay() : this.#texts.on('change', setOverlay);
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
        hash: 1205210088,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ProfileIcon = ProfileIcon;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _session = require("@aimpact/chat-sdk/session");
          var _icons2 = require("@aimpact/chat/shared/icons");
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
        hash: 31841301,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _beyond_context = require("beyond_context");
          var _react = require("react");
          var _context = require("./context");
          var _content = require("./content");
          var _empty = require("./empty");
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
            if (!ready || !textsReady) return _react.default.createElement(_ui.PageLoader, {
              fetching: true
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJfZGFzaGJvYXJkTGF5b3V0IiwiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiV2lkZ2V0IiwiVmlldyIsInNob3ciLCJMYXlvdXRCcm9rZXIiLCJzZXRCYWNrTGluayIsInVyaSIsInZhcnMiLCJnZXQiLCJsb2FkIiwiaGlkZSIsInJlbW92ZU92ZXJsYXkiLCJleHBvcnRzIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsIl9jb3JlIiwiX21vZGVsIiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwiaXRlbXMiLCJpZCIsImFzc2lnbm1lbnQiLCJ0ZXh0cyIsIkN1cnJlbnRUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInJlYWR5IiwiY29uc3RydWN0b3IiLCJvbiIsInRyaWdnZXJFdmVudCIsInJlZnJlc2giLCJmZXRjaGluZyIsIm1lc3NhZ2VzIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsIkFzc2lnbm1lbnQiLCJEYXNoYm9hcmRXYWxsIiwiZGF0YSIsInNldE92ZXJsYXkiLCJoZWFkZXIiLCJ0aXRsZSIsIm9mZiIsIl9yZWFjdCIsIl9pY29ucyIsIl9zZXNzaW9uIiwiX2ljb25zMiIsIlByb2ZpbGVJY29uIiwicm9sZSIsImxvYWRFcnJvciIsInNldExvYWRFcnJvciIsInVzZVN0YXRlIiwiaWNvbiIsImdsb2JhbFRoaXMiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwidXNlclByb3BzIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwiZ2V0UHJvcGVydGllcyIsImhhbmRsZUxvYWRFcnJvciIsInNyYyIsInBob3RvVVJMIiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJhbHQiLCJvbkVycm9yIiwiSWNvbiIsIklDT05TIiwiX2NvbnRleHQiLCJfaXRlbSIsIl9saXN0IiwiQ29udGVudCIsInVzZVdhbGxEYXNoYm9hcmRDb250ZXh0IiwiTGlzdCIsImNvbnRyb2wiLCJJdGVtIiwiX21lc3NhZ2UiLCJ0aW1lIiwiYWN0aXZpdHkiLCJNZXNzYWdlIiwidGV4dCIsInByb21wdCIsImNvbnRlbnQiLCJhbnN3ZXIiLCJ1bmRlZmluZWQiLCJfcHJvZmlsZUljb24iLCJpc0V4cGFuZGVkIiwic2V0SXNFeHBhbmQiLCJjbHMiLCJ0b2dnbGVUZXh0IiwiYXBwbHlFbGxpcHNpcyIsIm1heExlbmd0aCIsImxlbmd0aCIsInNsaWNlIiwicGhvdG9VcmwiLCJuYW1lIiwiSWNvbkJ1dHRvbiIsIm9uQ2xpY2siLCJXYWxsRGFzaGJvYXJkQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX3VpIiwiRW1wdHlMaXN0IiwiRW1wdHlDYXJkIiwiZW1wdHlUaXRsZSIsImRlc2NyaXB0aW9uIiwiZW1wdHkiLCJfbmF2YmFySGVhZGVyIiwiSGVhZGVyIiwiRnJhZ21lbnQiLCJOYXZiYXJIZWFkZXIiLCJicmVhZGNydW1iIiwiX2hvb2tzIiwiX2NvbnRlbnQiLCJfZW1wdHkiLCJzZXRSZWFkeSIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsInRvdGFsSXRlbXMiLCJzZXRUb3RhbEl0ZW1zIiwidXNlQmluZGVyIiwiUGFnZUxvYWRlciIsImNvbnRleHRWYWx1ZSIsIkNvbnRyb2wiLCJQcm92aWRlciIsIlBhZ2VDb250YWluZXIiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi9pbnRlcmZhY2UudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvY29tcG9uZW50cy9wcm9maWxlLWljb24udHN4IiwiL3RzL3ZpZXdzL2NvbnRlbnQvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2NvbnRlbnQvaXRlbS50c3giLCIvdHMvdmlld3MvY29udGVudC9tZXNzYWdlLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2VtcHR5LnRzeCIsIi90cy92aWV3cy9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFHLGdCQUFBLEdBQUFILE9BQUE7VUFDTztVQUFVLE1BQ1hJLFVBQVcsU0FBUUwsS0FBQSxDQUFBTSx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJTCxNQUFBLENBQUFPLFlBQVksRUFBRTtjQUNoQyxPQUFPLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ25CO1lBRUEsSUFBSUcsTUFBTUEsQ0FBQTtjQUNULE9BQU9QLE1BQUEsQ0FBQVEsSUFBSTtZQUNaO1lBRUE7OztZQUdBQyxJQUFJQSxDQUFBO2NBQ0hSLGdCQUFBLENBQUFTLFlBQVksQ0FBQ0MsV0FBVyxDQUFDLGdCQUFnQixJQUFJLENBQUNDLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQztjQUN6RixJQUFJLENBQUMsQ0FBQVYsS0FBTSxDQUFDVyxJQUFJLENBQUMsSUFBSSxDQUFDSCxHQUFHLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzFDO1lBRUE7OztZQUdBRSxJQUFJQSxDQUFBO2NBQ0hmLGdCQUFBLENBQUFTLFlBQVksQ0FBQ08sYUFBYSxFQUFFO1lBQzdCOztVQUNBQyxPQUFBLENBQUFoQixVQUFBLEdBQUFBLFVBQUE7Ozs7Ozs7Ozs7O1VDOUJEOztVQUVBaUIsTUFBQSxDQUFBQyxjQUFBLENBQUFGLE9BQUE7WUFDQUcsS0FBQTtVQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ0pBLElBQUFDLEtBQUEsR0FBQXhCLE9BQUE7VUFFQSxJQUFBeUIsTUFBQSxHQUFBekIsT0FBQTtVQUdBLElBQUFHLGdCQUFBLEdBQUFILE9BQUE7VUFDQSxJQUFBMEIsTUFBQSxHQUFBMUIsT0FBQTtVQUNBLElBQUEyQixlQUFBLEdBQUEzQixPQUFBO1VBQ00sTUFBT1EsWUFBYSxTQUFRaUIsTUFBQSxDQUFBRyxhQUEyQjtZQUM1RCxDQUFBQyxLQUFNO1lBRU4sSUFBSUEsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU07WUFDbkI7WUFFQSxDQUFBQyxLQUFNO1lBQ04sSUFBSUEsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU07WUFDbkI7WUFFQSxDQUFBQyxFQUFHO1lBQ0gsSUFBSUEsRUFBRUEsQ0FBQTtjQUNMLE9BQU8sSUFBSSxDQUFDLENBQUFBLEVBQUc7WUFDaEI7WUFFQSxDQUFBQyxVQUFXO1lBQ1gsSUFBSUEsVUFBVUEsQ0FBQTtjQUNiLE9BQU8sSUFBSSxDQUFDLENBQUFBLFVBQVc7WUFDeEI7WUFDQSxDQUFBQyxLQUFNLEdBQStCLElBQUlQLE1BQUEsQ0FBQVEsWUFBWSxDQUFDUCxlQUFBLENBQUFRLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDO1lBQ3ZFLElBQUlILEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNLEVBQUVWLEtBQUs7WUFDMUI7WUFDQSxJQUFJYyxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxLQUFLLENBQUNBLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQUosS0FBTSxDQUFDSSxLQUFLO1lBQ3hDO1lBQ0FDLFlBQUE7Y0FDQyxLQUFLLEVBQUU7Y0FDUCxJQUFJLENBQUMsQ0FBQUwsS0FBTSxDQUFDTSxFQUFFLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQ0MsWUFBWSxDQUFDO1lBQzVDO1lBRUFDLE9BQU8sR0FBRyxNQUFBQSxDQUFBLEtBQVc7Y0FDcEIsSUFBSTtnQkFDSCxJQUFJLENBQUNDLFFBQVEsR0FBRyxJQUFJO2dCQUNwQixNQUFNO2tCQUFFQztnQkFBUSxDQUFFLEdBQUcsTUFBTSxJQUFJLENBQUNkLEtBQUssQ0FBQ1osSUFBSSxDQUFDO2tCQUFFYyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUFBO2dCQUFHLENBQUUsQ0FBQztnQkFDNUQsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBR2EsUUFBUTtlQUN0QixDQUFDLE9BQU9DLENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDQyxLQUFLLENBQUNGLENBQUMsQ0FBQztlQUNoQixTQUFTO2dCQUNULElBQUksQ0FBQ0YsUUFBUSxHQUFHLEtBQUs7O1lBRXZCLENBQUM7WUFFRCxNQUFNekIsSUFBSUEsQ0FBQ2MsRUFBRTtjQUNaLElBQUk7Z0JBQ0gsSUFBSSxDQUFDLENBQUFDLFVBQVcsR0FBRyxJQUFJUixLQUFBLENBQUF1QixVQUFVLENBQUM7a0JBQUVoQjtnQkFBRSxDQUFFLENBQUM7Z0JBQ3pDLElBQUksQ0FBQyxDQUFBRixLQUFNLEdBQUcsSUFBSUwsS0FBQSxDQUFBd0IsYUFBYSxFQUFFO2dCQUNqQyxJQUFJLENBQUMsQ0FBQWpCLEVBQUcsR0FBR0EsRUFBRTtnQkFDYixNQUFNO2tCQUFFWTtnQkFBUSxDQUFFLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQWQsS0FBTSxDQUFDWixJQUFJLENBQUM7a0JBQUVjO2dCQUFFLENBQUUsQ0FBQztnQkFDbkQsTUFBTWtCLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxDQUFBakIsVUFBVyxDQUFDZixJQUFJLENBQUM7a0JBQUVjO2dCQUFFLENBQUUsQ0FBQztnQkFFaEQsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBR2EsUUFBUTtnQkFDdEJ4QyxnQkFBQSxDQUFBUyxZQUFZLENBQUNDLFdBQVcsQ0FBQyxnQkFBZ0JrQixFQUFFLHNCQUFzQixDQUFDO2dCQUVsRSxNQUFNbUIsVUFBVSxHQUFHQSxDQUFBLEtBQUs7a0JBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQWpCLEtBQU0sQ0FBQ0ksS0FBSyxFQUFFO2tCQUN4QmxDLGdCQUFBLENBQUFTLFlBQVksQ0FBQ3NDLFVBQVUsQ0FBQyxHQUFHLElBQUksQ0FBQ2pCLEtBQUssRUFBRWtCLE1BQU0sSUFBSUYsSUFBSSxDQUFDZCxNQUFNLENBQUNpQixLQUFLLEVBQUUsQ0FBQztrQkFDckUsSUFBSSxDQUFDLENBQUFuQixLQUFNLENBQUNvQixHQUFHLENBQUMsUUFBUSxFQUFFSCxVQUFVLENBQUM7Z0JBQ3RDLENBQUM7Z0JBQ0QsSUFBSSxDQUFDYixLQUFLLEdBQUdhLFVBQVUsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFBakIsS0FBTSxDQUFDTSxFQUFFLENBQUMsUUFBUSxFQUFFVyxVQUFVLENBQUM7Z0JBRWhFLEtBQUssQ0FBQ2IsS0FBSyxHQUFHLElBQUk7Z0JBQ2xCLElBQUksQ0FBQ0csWUFBWSxFQUFFO2VBQ25CLENBQUMsT0FBT0ksQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUNDLEtBQUssQ0FBQ0YsQ0FBQyxDQUFDOztZQUVsQjs7VUFDQXhCLE9BQUEsQ0FBQVosWUFBQSxHQUFBQSxZQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQzdFRCxJQUFBOEMsTUFBQSxHQUFBdEQsT0FBQTtVQUNBLElBQUF1RCxNQUFBLEdBQUF2RCxPQUFBO1VBQ0EsSUFBQXdELFFBQUEsR0FBQXhELE9BQUE7VUFDQSxJQUFBeUQsT0FBQSxHQUFBekQsT0FBQTtVQUVNLFNBQVUwRCxXQUFXQSxDQUFDO1lBQUVDO1VBQUksQ0FBRTtZQUNuQyxNQUFNLENBQUNDLFNBQVMsRUFBRUMsWUFBWSxDQUFDLEdBQUcsSUFBQVAsTUFBQSxDQUFBUSxRQUFRLEVBQUMsS0FBSyxDQUFDO1lBQ2pEO1lBQ0EsTUFBTUMsSUFBSSxHQUFHSixJQUFJLEtBQUssTUFBTSxHQUFHLE1BQU0sR0FBR0ssVUFBVSxDQUFDQyxZQUFZLENBQUNDLE9BQU8sQ0FBQywrQkFBK0IsQ0FBQztZQUN4RyxNQUFNQyxTQUFTLEdBQUdYLFFBQUEsQ0FBQVksY0FBYyxDQUFDQyxJQUFJLENBQUNDLGFBQWEsRUFBRTtZQUNyRCxNQUFNQyxlQUFlLEdBQUdBLENBQUEsS0FBTVYsWUFBWSxDQUFDLElBQUksQ0FBQztZQUNoRCxNQUFNVyxHQUFHLEdBQUdiLElBQUksS0FBSyxNQUFNLEdBQUdRLFNBQVMsQ0FBQ00sUUFBUSxHQUFHVCxVQUFVLENBQUNDLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLCtCQUErQixDQUFDO1lBQ25ILE9BQ0NaLE1BQUEsQ0FBQW9CLE9BQUEsQ0FBQUMsYUFBQTtjQUFTQyxTQUFTLEVBQUM7WUFBb0IsR0FDcENULFNBQVMsQ0FBQ00sUUFBUSxJQUFJLENBQUNiLFNBQVMsSUFBS0QsSUFBSSxLQUFLLE1BQU0sR0FDckRMLE1BQUEsQ0FBQW9CLE9BQUEsQ0FBQUMsYUFBQTtjQUFLRSxHQUFHLEVBQUMsb0JBQW9CO2NBQUNMLEdBQUcsRUFBRUEsR0FBRztjQUFFTSxPQUFPLEVBQUVQO1lBQWUsRUFBSSxHQUVwRWpCLE1BQUEsQ0FBQW9CLE9BQUEsQ0FBQUMsYUFBQSxDQUFDcEIsTUFBQSxDQUFBd0IsSUFBSTtjQUFDSCxTQUFTLEVBQUMsSUFBSTtjQUFDYixJQUFJLEVBQUVOLE9BQUEsQ0FBQXVCLEtBQUssQ0FBQ2pCLElBQUksQ0FBQyxJQUFJQTtZQUFJLEVBQzlDLENBQ1E7VUFFWjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNyQkEsSUFBQVQsTUFBQSxHQUFBdEQsT0FBQTtVQUNBLElBQUFpRixRQUFBLEdBQUFqRixPQUFBO1VBQ0EsSUFBQWtGLEtBQUEsR0FBQWxGLE9BQUE7VUFDQSxJQUFBbUYsS0FBQSxHQUFBbkYsT0FBQTtVQUVPO1VBQVcsTUFBTW9GLE9BQU8sR0FBYUEsQ0FBQSxLQUFLO1lBQ2hELE1BQU07Y0FBRXREO1lBQUssQ0FBRSxHQUFHLElBQUFtRCxRQUFBLENBQUFJLHVCQUF1QixHQUFFO1lBRTNDLE9BQU8vQixNQUFBLENBQUFvQixPQUFBLENBQUFDLGFBQUEsQ0FBQ1EsS0FBQSxDQUFBRyxJQUFJO2NBQUNWLFNBQVMsRUFBQyxpQkFBaUI7Y0FBQzlDLEtBQUssRUFBRUEsS0FBSztjQUFFeUQsT0FBTyxFQUFFTCxLQUFBLENBQUFNO1lBQUksRUFBSTtVQUN6RSxDQUFDO1VBQUNwRSxPQUFBLENBQUFnRSxPQUFBLEdBQUFBLE9BQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDVEYsSUFBQTlCLE1BQUEsR0FBQXRELE9BQUE7VUFDQSxJQUFBaUYsUUFBQSxHQUFBakYsT0FBQTtVQUNBLElBQUF5RixRQUFBLEdBQUF6RixPQUFBO1VBRU0sU0FBVXdGLElBQUlBLENBQUM7WUFBRXZDO1VBQUksQ0FBRTtZQUM1QixNQUFNO2NBQUVoQjtZQUFLLENBQUUsR0FBRyxJQUFBZ0QsUUFBQSxDQUFBSSx1QkFBdUIsR0FBRTtZQUUzQyxPQUNDL0IsTUFBQSxDQUFBb0IsT0FBQSxDQUFBQyxhQUFBO2NBQUtDLFNBQVMsRUFBQyxnQkFBZ0I7Y0FBQzdDLEVBQUUsRUFBRWtCLElBQUksQ0FBQ3lDO1lBQUksR0FDNUNwQyxNQUFBLENBQUFvQixPQUFBLENBQUFDLGFBQUE7Y0FBR0MsU0FBUyxFQUFDO1lBQW1CLEdBQUUzQixJQUFJLENBQUMwQyxRQUFRLENBQUN2QyxLQUFLLENBQUssRUFDMURFLE1BQUEsQ0FBQW9CLE9BQUEsQ0FBQUMsYUFBQSxDQUFDYyxRQUFBLENBQUFHLE9BQU87Y0FBQ2pDLElBQUksRUFBQyxNQUFNO2NBQUNrQyxJQUFJLEVBQUU1QyxJQUFJLENBQUM2QyxNQUFNLENBQUNDLE9BQU87Y0FBRTFCLElBQUksRUFBRXBCLElBQUksQ0FBQ29CO1lBQUksRUFBSSxFQUNuRWYsTUFBQSxDQUFBb0IsT0FBQSxDQUFBQyxhQUFBLENBQUNjLFFBQUEsQ0FBQUcsT0FBTztjQUFDakMsSUFBSSxFQUFDLFFBQVE7Y0FBQ2tDLElBQUksRUFBRTVDLElBQUksQ0FBQytDLE1BQU0sQ0FBQ0QsT0FBTztjQUFFMUIsSUFBSSxFQUFFNEI7WUFBUyxFQUFJLENBQ2hFO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDZEEsSUFBQTNDLE1BQUEsR0FBQXRELE9BQUE7VUFDQSxJQUFBa0csWUFBQSxHQUFBbEcsT0FBQTtVQUNBLElBQUF1RCxNQUFBLEdBQUF2RCxPQUFBO1VBRU0sU0FBVTRGLE9BQU9BLENBQUM7WUFBRWpDLElBQUk7WUFBRWtDLElBQUk7WUFBRXhCO1VBQUksQ0FBRTtZQUMzQyxNQUFNLENBQUM4QixVQUFVLEVBQUVDLFdBQVcsQ0FBQyxHQUFHLElBQUE5QyxNQUFBLENBQUFRLFFBQVEsRUFBQyxLQUFLLENBQUM7WUFDakQsTUFBTXVDLEdBQUcsR0FBRyxRQUFRMUMsSUFBSSxFQUFFO1lBRTFCLFNBQVMyQyxVQUFVQSxDQUFBO2NBQ2xCRixXQUFXLENBQUMsQ0FBQ0QsVUFBVSxDQUFDO1lBQ3pCO1lBRUEsU0FBU0ksYUFBYUEsQ0FBQ1YsSUFBWSxFQUFFVyxTQUFpQjtjQUNyRCxPQUFPWCxJQUFJLENBQUNZLE1BQU0sR0FBR0QsU0FBUyxHQUFHWCxJQUFJLENBQUNhLEtBQUssQ0FBQyxDQUFDLEVBQUVGLFNBQVMsQ0FBQyxHQUFHLEtBQUssR0FBR1gsSUFBSTtZQUN6RTtZQUVBLE9BQ0N2QyxNQUFBLENBQUFvQixPQUFBLENBQUFDLGFBQUE7Y0FBS0MsU0FBUyxFQUFFeUI7WUFBRyxHQUNsQi9DLE1BQUEsQ0FBQW9CLE9BQUEsQ0FBQUMsYUFBQTtjQUFTQyxTQUFTLEVBQUM7WUFBb0IsR0FDdEN0QixNQUFBLENBQUFvQixPQUFBLENBQUFDLGFBQUEsQ0FBQ3VCLFlBQUEsQ0FBQXhDLFdBQVc7Y0FBQ0MsSUFBSSxFQUFFQSxJQUFJO2NBQUVnRCxRQUFRLEVBQUV0QyxJQUFJLEVBQUVzQztZQUFRLEVBQUksQ0FDNUMsRUFDVnJELE1BQUEsQ0FBQW9CLE9BQUEsQ0FBQUMsYUFBQTtjQUFTQyxTQUFTLEVBQUM7WUFBeUIsR0FDM0N0QixNQUFBLENBQUFvQixPQUFBLENBQUFDLGFBQUE7Y0FBS0MsU0FBUyxFQUFFLGtDQUFrQ3VCLFVBQVU7WUFBRSxHQUM1RDlCLElBQUksSUFBSWYsTUFBQSxDQUFBb0IsT0FBQSxDQUFBQyxhQUFBO2NBQUdDLFNBQVMsRUFBQztZQUE2QixHQUFFUCxJQUFJLENBQUN1QyxJQUFJLENBQUssRUFDbkV0RCxNQUFBLENBQUFvQixPQUFBLENBQUFDLGFBQUE7Y0FBR0MsU0FBUyxFQUFFLGlDQUFpQ3VCLFVBQVU7WUFBRSxHQUN6REksYUFBYSxDQUFDVixJQUFJLEVBQUVNLFVBQVUsR0FBRyxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQzFDLENBQ0MsQ0FDRyxFQUVWN0MsTUFBQSxDQUFBb0IsT0FBQSxDQUFBQyxhQUFBO2NBQVNDLFNBQVMsRUFBQztZQUF5QixHQUMzQ3RCLE1BQUEsQ0FBQW9CLE9BQUEsQ0FBQUMsYUFBQSxDQUFDcEIsTUFBQSxDQUFBc0QsVUFBVTtjQUFDQyxPQUFPLEVBQUVSLFVBQVU7Y0FBRTFCLFNBQVMsRUFBQyxJQUFJO2NBQUNiLElBQUksRUFBRSxDQUFDb0MsVUFBVSxHQUFHLGVBQWUsR0FBRztZQUFhLEVBQUksQ0FDOUYsQ0FDTDtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ25DQSxJQUFBN0MsTUFBQSxHQUFBdEQsT0FBQTtVQVdPLE1BQU0rRyxvQkFBb0IsR0FBQTNGLE9BQUEsQ0FBQTJGLG9CQUFBLEdBQUd6RCxNQUFBLENBQUFvQixPQUFLLENBQUNzQyxhQUFhLENBQVcsRUFBYyxDQUFDO1VBQzFFLE1BQU0zQix1QkFBdUIsR0FBR0EsQ0FBQSxLQUFNL0IsTUFBQSxDQUFBb0IsT0FBSyxDQUFDdUMsVUFBVSxDQUFDRixvQkFBb0IsQ0FBQztVQUFDM0YsT0FBQSxDQUFBaUUsdUJBQUEsR0FBQUEsdUJBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDWnBGLElBQUEvQixNQUFBLEdBQUF0RCxPQUFBO1VBQ0EsSUFBQWtILEdBQUEsR0FBQWxILE9BQUE7VUFDQSxJQUFBaUYsUUFBQSxHQUFBakYsT0FBQTtVQUVNLFNBQVVtSCxTQUFTQSxDQUFBO1lBQ3hCLE1BQU07Y0FBRWxGO1lBQUssQ0FBRSxHQUFHLElBQUFnRCxRQUFBLENBQUFJLHVCQUF1QixHQUFFO1lBQzNDLE9BQU8vQixNQUFBLENBQUFvQixPQUFBLENBQUFDLGFBQUEsQ0FBQ3VDLEdBQUEsQ0FBQUUsU0FBUztjQUFDdkIsSUFBSSxFQUFFNUQsS0FBSyxDQUFDb0YsVUFBVTtjQUFFQyxXQUFXLEVBQUVyRixLQUFLLENBQUNzRixLQUFLO2NBQUV4RCxJQUFJLEVBQUM7WUFBTSxFQUFHO1VBQ25GOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1BBLElBQUF5RCxhQUFBLEdBQUF4SCxPQUFBO1VBQ0EsSUFBQXNELE1BQUEsR0FBQXRELE9BQUE7VUFDQSxJQUFBaUYsUUFBQSxHQUFBakYsT0FBQTtVQUNBLElBQUF1RCxNQUFBLEdBQUF2RCxPQUFBO1VBRU87VUFBVSxTQUFVeUgsTUFBTUEsQ0FBQTtZQUNoQyxNQUFNO2NBQUVuSDtZQUFLLENBQUUsR0FBRyxJQUFBMkUsUUFBQSxDQUFBSSx1QkFBdUIsR0FBRTtZQUUzQyxPQUNDL0IsTUFBQSxDQUFBb0IsT0FBQSxDQUFBQyxhQUFBLENBQUFyQixNQUFBLENBQUFvQixPQUFBLENBQUFnRCxRQUFBLFFBQ0NwRSxNQUFBLENBQUFvQixPQUFBLENBQUFDLGFBQUEsQ0FBQzZDLGFBQUEsQ0FBQUcsWUFBWTtjQUNaQyxVQUFVLEVBQUUsQ0FDWCxDQUFDLFlBQVksRUFBRSxnQkFBZ0J0SCxLQUFLLENBQUN5QixFQUFFLHNCQUFzQixDQUFDLEVBQzlELENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQztZQUNaLEdBRUR1QixNQUFBLENBQUFvQixPQUFBLENBQUFDLGFBQUEsQ0FBQ3BCLE1BQUEsQ0FBQXNELFVBQVU7Y0FBQzlDLElBQUksRUFBQyxTQUFTO2NBQUMrQyxPQUFPLEVBQUV4RyxLQUFLLENBQUNtQztZQUFPLEVBQUksQ0FDdkMsQ0FDYjtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3BCQSxJQUFBeUUsR0FBQSxHQUFBbEgsT0FBQTtVQUNBLElBQUE2SCxNQUFBLEdBQUE3SCxPQUFBO1VBQ0EsSUFBQTJCLGVBQUEsR0FBQTNCLE9BQUE7VUFDQSxJQUFBc0QsTUFBQSxHQUFBdEQsT0FBQTtVQUVBLElBQUFpRixRQUFBLEdBQUFqRixPQUFBO1VBRUEsSUFBQThILFFBQUEsR0FBQTlILE9BQUE7VUFDQSxJQUFBK0gsTUFBQSxHQUFBL0gsT0FBQTtVQUVPO1VBQVcsU0FBVVUsSUFBSUEsQ0FBQztZQUFFSjtVQUFLLENBQTJCO1lBQ2xFLE1BQU0sQ0FBQytCLEtBQUssRUFBRTJGLFFBQVEsQ0FBQyxHQUFHMUUsTUFBQSxDQUFBb0IsT0FBSyxDQUFDWixRQUFRLENBQUN4RCxLQUFLLENBQUMrQixLQUFLLENBQUM7WUFDckQsTUFBTSxDQUFDNEYsVUFBVSxFQUFFaEcsS0FBSyxDQUFDLEdBQUcsSUFBQTRGLE1BQUEsQ0FBQUssUUFBUSxFQUFDdkcsZUFBQSxDQUFBUSxNQUFNLENBQUNDLFNBQVMsQ0FBQztZQUN0RCxNQUFNLENBQUMrRixVQUFVLEVBQUVDLGFBQWEsQ0FBQyxHQUFHOUUsTUFBQSxDQUFBb0IsT0FBSyxDQUFDWixRQUFRLENBQUN4RCxLQUFLLENBQUN3QixLQUFLLEVBQUUyRSxNQUFNLElBQUksQ0FBQyxDQUFDO1lBQzVFLElBQUFvQixNQUFBLENBQUFRLFNBQVMsRUFBQyxDQUFDL0gsS0FBSyxDQUFDLEVBQUUsTUFBSztjQUN2QjBILFFBQVEsQ0FBQzFILEtBQUssQ0FBQytCLEtBQUssQ0FBQztjQUNyQitGLGFBQWEsQ0FBQzlILEtBQUssQ0FBQ3dCLEtBQUssQ0FBQzJFLE1BQU0sQ0FBQztZQUNsQyxDQUFDLENBQUM7WUFFRixJQUFJLENBQUNwRSxLQUFLLElBQUksQ0FBQzRGLFVBQVUsRUFBRSxPQUFPM0UsTUFBQSxDQUFBb0IsT0FBQSxDQUFBQyxhQUFBLENBQUN1QyxHQUFBLENBQUFvQixVQUFVO2NBQUM1RixRQUFRLEVBQUU7WUFBSSxFQUFJO1lBRWhFLE1BQU02RixZQUFZLEdBQUc7Y0FDcEJ0RyxLQUFLO2NBQ0wzQixLQUFLO2NBQ0x3QixLQUFLLEVBQUV4QixLQUFLLENBQUN3QixLQUFLO2NBQ2xCWSxRQUFRLEVBQUVwQyxLQUFLLENBQUNvQyxRQUFRO2NBQ3hCeUY7YUFDQTtZQUVELE1BQU1LLE9BQU8sR0FBR2xJLEtBQUssQ0FBQ3dCLEtBQUssQ0FBQzJFLE1BQU0sR0FBRyxDQUFDLEdBQUdxQixRQUFBLENBQUExQyxPQUFPLEdBQUcyQyxNQUFBLENBQUFaLFNBQVM7WUFFNUQsT0FDQzdELE1BQUEsQ0FBQW9CLE9BQUEsQ0FBQUMsYUFBQSxDQUFDTSxRQUFBLENBQUE4QixvQkFBb0IsQ0FBQzBCLFFBQVE7Y0FBQ2xILEtBQUssRUFBRWdIO1lBQVksR0FDakRqRixNQUFBLENBQUFvQixPQUFBLENBQUFDLGFBQUEsQ0FBQ3VDLEdBQUEsQ0FBQXdCLGFBQWEsUUFDYnBGLE1BQUEsQ0FBQW9CLE9BQUEsQ0FBQUMsYUFBQSxDQUFDNkQsT0FBTyxPQUFHLENBQ0ksQ0FDZTtVQUVsQyIsImlnbm9yZUxpc3QiOltdfQ==