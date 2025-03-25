System.register(["@beyond-js/widgets@1.1.1/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/react-18-widgets@1.1.3/base", "@aimpact/ailearn-app@0.3.29/dashboard-layout.widget", "@aimpact/ailearn-sdk@1.1.0/core", "@aimpact/ailearn-sdk@1.1.0/tracking", "@aimpact/reactive@0.0.1/model", "@beyond-js/kernel@0.1.9/texts", "@aimpact/ailearn-app@0.3.29/components/icons", "pragmate-ui@1.0.0-beta.7/image", "react@18.2.0", "pragmate-ui@1.0.0-beta.7/list", "pragmate-ui@1.0.0-beta.7/icons", "@aimpact/chat-sdk@1.4.1/widgets/markdown", "@aimpact/ailearn-app@0.3.29/components/ui", "@aimpact/ailearn-app@0.3.29/components/navbar-header.code", "@aimpact/ailearn-app@0.3.29/config", "@beyond-js/react-18-widgets@1.1.3/hooks", "pragmate-ui@1.0.0-beta.7/components", "react@18.2.0/jsx-runtime"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, bimport, __Bundle, __pkg, ims, Controller, Content, Header, WallView, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    Content: void 0,
    Header: void 0,
    WallView: void 0
  });
  return {
    setters: [function (_beyondJsWidgets111Render) {
      dependency_0 = _beyondJsWidgets111Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsReact18Widgets113Base) {
      dependency_2 = _beyondJsReact18Widgets113Base;
    }, function (_aimpactAilearnApp0329DashboardLayoutWidget) {
      dependency_3 = _aimpactAilearnApp0329DashboardLayoutWidget;
    }, function (_aimpactAilearnSdk110Core) {
      dependency_4 = _aimpactAilearnSdk110Core;
    }, function (_aimpactAilearnSdk110Tracking) {
      dependency_5 = _aimpactAilearnSdk110Tracking;
    }, function (_aimpactReactive001Model) {
      dependency_6 = _aimpactReactive001Model;
    }, function (_beyondJsKernel019Texts) {
      dependency_7 = _beyondJsKernel019Texts;
    }, function (_aimpactAilearnApp0329ComponentsIcons) {
      dependency_8 = _aimpactAilearnApp0329ComponentsIcons;
    }, function (_pragmateUi100Beta7Image) {
      dependency_9 = _pragmateUi100Beta7Image;
    }, function (_react2) {
      dependency_10 = _react2;
    }, function (_pragmateUi100Beta7List) {
      dependency_11 = _pragmateUi100Beta7List;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_12 = _pragmateUi100Beta7Icons;
    }, function (_aimpactChatSdk141WidgetsMarkdown) {
      dependency_13 = _aimpactChatSdk141WidgetsMarkdown;
    }, function (_aimpactAilearnApp0329ComponentsUi) {
      dependency_14 = _aimpactAilearnApp0329ComponentsUi;
    }, function (_aimpactAilearnApp0329ComponentsNavbarHeaderCode) {
      dependency_15 = _aimpactAilearnApp0329ComponentsNavbarHeaderCode;
    }, function (_aimpactAilearnApp0329Config) {
      dependency_16 = _aimpactAilearnApp0329Config;
    }, function (_beyondJsReact18Widgets113Hooks) {
      dependency_17 = _beyondJsReact18Widgets113Hooks;
    }, function (_pragmateUi100Beta7Components) {
      dependency_18 = _pragmateUi100Beta7Components;
    }, function (_react1820JsxRuntime) {
      dependency_19 = _react1820JsxRuntime;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.1.0"], ["@aimpact/ailearn-api", null], ["@aimpact/auth", null], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.2.0"], ["@beyond-js/kernel", "0.1.9"], ["pragmate-ui", "1.0.0-beta.7"], ["@beyond-js/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.1"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.3"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["@google-cloud/storage", "7.15.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.24.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.29"], ["@aimpact/ailearn-app", "0.3.29"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.3.29/dashboard/wall/widget",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-18-widgets/base', dependency_2], ['@aimpact/ailearn-app/dashboard-layout.widget', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@aimpact/ailearn-sdk/tracking', dependency_5], ['@aimpact/reactive/model', dependency_6], ['@beyond-js/kernel/texts', dependency_7], ['@aimpact/ailearn-app/components/icons', dependency_8], ['pragmate-ui/image', dependency_9], ['react', dependency_10], ['pragmate-ui/list', dependency_11], ['pragmate-ui/icons', dependency_12], ['@aimpact/chat-sdk/widgets/markdown', dependency_13], ['@aimpact/ailearn-app/components/ui', dependency_14], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_15], ['@aimpact/ailearn-app/config', dependency_16], ['@beyond-js/react-18-widgets/hooks', dependency_17], ['pragmate-ui/components', dependency_18], ['react/jsx-runtime', dependency_19]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-dashboard-wall",
        "attrs": ["id"],
        "vspecifier": "@aimpact/ailearn-app@0.3.29/dashboard/wall/widget.widget"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.3.29/dashboard/wall/widget.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 1485994025,
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
              return _views.WallView;
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
        hash: 77011776,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ProfileIcon = ProfileIcon;
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _image = require("pragmate-ui/image");
          var _react = require("react");
          function ProfileIcon({
            role,
            photoUrl
          }) {
            const [loadError, setLoadError] = (0, _react.useState)(false);
            // the local storage is used to store the user's default profile icon while is defined a better way to handle this.
            const handleLoadError = () => setLoadError(true);
            const src = role === 'user' ? photoUrl : globalThis.localStorage.getItem('chat.app.user.default.profile');
            return _react.default.createElement("picture", {
              className: "picture__container"
            }, photoUrl && !loadError || role !== 'user' ? _react.default.createElement(_image.Image, {
              src: src,
              alt: "user image profile",
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
        hash: 681577480,
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
        hash: 1027115624,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.WallView = WallView;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _react = require("react");
          var _context = require("./context");
          var _components = require("pragmate-ui/components");
          var _content = require("./content");
          var _empty = require("./empty");
          /*bundle */
          function WallView({
            store,
            texts
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
            const contextValue = {
              texts,
              store,
              items: store.items,
              fetching: store.fetching,
              totalItems
            };
            return _react.default.createElement(_context.WallDashboardContext.Provider, {
              value: contextValue
            }, _react.default.createElement(_components.ConditionalContainer, {
              condition: !!store.items.length,
              ternary: true,
              options: {
                false: _react.default.createElement(_empty.EmptyList, null),
                true: _react.default.createElement(_content.Content, null)
              }
            }));
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
        "from": "WallView",
        "name": "WallView"
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
        (require || prop === 'WallView') && _export("WallView", WallView = require ? require('./views/index').WallView : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsImF0dHJpYnV0ZXMiLCJXaWRnZXQiLCJXYWxsVmlldyIsImNvbnN0cnVjdG9yIiwiYSIsInNob3ciLCJsb2FkIiwidXJpIiwidmFycyIsImdldCIsImhvbGEiLCJjb25zb2xlIiwibG9nIiwiZXhwb3J0cyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJfY29yZSIsIl9tb2RlbCIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsIlJlYWN0aXZlTW9kZWwiLCJpc1N0b3JlIiwibW9kZWwiLCJpdGVtcyIsImlkIiwiYXNzaWdubWVudCIsInRleHRzIiwiQ3VycmVudFRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwicmVhZHkiLCJvbiIsInRyaWdnZXJFdmVudCIsInJlZnJlc2giLCJmZXRjaGluZyIsIm1lc3NhZ2VzIiwiZSIsImVycm9yIiwiRGFzaGJvYXJkV2FsbCIsIl9pY29ucyIsIl9pbWFnZSIsIl9yZWFjdCIsIlByb2ZpbGVJY29uIiwicm9sZSIsInBob3RvVXJsIiwibG9hZEVycm9yIiwic2V0TG9hZEVycm9yIiwidXNlU3RhdGUiLCJoYW5kbGVMb2FkRXJyb3IiLCJzcmMiLCJnbG9iYWxUaGlzIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiSW1hZ2UiLCJhbHQiLCJvbkVycm9yIiwiQXBwSWNvbiIsImljb24iLCJfY29udGV4dCIsIl9pdGVtIiwiX2xpc3QiLCJDb250ZW50IiwidXNlV2FsbERhc2hib2FyZENvbnRleHQiLCJMaXN0IiwiY29udHJvbCIsIkl0ZW0iLCJfbWVzc2FnZSIsImRhdGEiLCJ0aW1lIiwiYWN0aXZpdHkiLCJ0aXRsZSIsIk1lc3NhZ2UiLCJ0ZXh0IiwicHJvbXB0IiwiY29udGVudCIsInVzZXIiLCJhbnN3ZXIiLCJ1bmRlZmluZWQiLCJfcHJvZmlsZUljb24iLCJfbWFya2Rvd24iLCJpc0V4cGFuZGVkIiwic2V0SXNFeHBhbmQiLCJjbHMiLCJ0b2dnbGVUZXh0IiwiYXBwbHlFbGxpcHNpcyIsIm1heExlbmd0aCIsImxlbmd0aCIsInNsaWNlIiwib3V0cHV0IiwibmFtZSIsIk1hcmtkb3duIiwiSWNvbkJ1dHRvbiIsIm9uQ2xpY2siLCJXYWxsRGFzaGJvYXJkQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX3VpIiwiRW1wdHlMaXN0IiwiRW1wdHlDYXJkIiwiZW1wdHlUaXRsZSIsImRlc2NyaXB0aW9uIiwiZW1wdHkiLCJfbmF2YmFySGVhZGVyIiwiSGVhZGVyIiwiRnJhZ21lbnQiLCJOYXZiYXJIZWFkZXIiLCJicmVhZGNydW1iIiwiX2hvb2tzIiwiX2NvbXBvbmVudHMiLCJfY29udGVudCIsIl9lbXB0eSIsInN0YXRlIiwic2V0U3RhdGUiLCJ1c2VCaW5kZXIiLCJQYWdlTG9hZGVyIiwidG90YWxJdGVtcyIsImNvbnRleHRWYWx1ZSIsIlByb3ZpZGVyIiwiQ29uZGl0aW9uYWxDb250YWluZXIiLCJjb25kaXRpb24iLCJ0ZXJuYXJ5Iiwib3B0aW9ucyIsImZhbHNlIiwidHJ1ZSJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL2ludGVyZmFjZS50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9jb21wb25lbnRzL3Byb2ZpbGUtaWNvbi50c3giLCIvdHMvdmlld3MvY29udGVudC9pbmRleC50c3giLCIvdHMvdmlld3MvY29udGVudC9pdGVtLnRzeCIsIi90cy92aWV3cy9jb250ZW50L21lc3NhZ2UudHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2hlYWRlci50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50Ijpb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