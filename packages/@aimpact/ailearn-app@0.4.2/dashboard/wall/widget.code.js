System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/react-18-widgets@1.1.4/base", "@aimpact/ailearn-app@0.4.2/dashboard-layout.widget", "@aimpact/ailearn-sdk@1.2.0/core", "@aimpact/ailearn-sdk@1.2.0/tracking", "@beyond-js/reactive@2.0.5/model", "@beyond-js/kernel@0.1.12/texts", "@aimpact/ailearn-app@0.4.2/components/icons", "pragmate-ui@1.0.0-beta.7/image", "react@18.3.1", "pragmate-ui@1.0.0-beta.7/list", "pragmate-ui@1.0.0-beta.7/icons", "@aimpact/chat-sdk@1.5.4/widgets/markdown", "@aimpact/ailearn-app@0.4.2/components/ui", "@aimpact/ailearn-app@0.4.2/components/navbar-header.code", "@aimpact/ailearn-app@0.4.2/config", "@beyond-js/react-18-widgets@1.1.4/hooks", "pragmate-ui@1.0.0-beta.7/components", "@aimpact/ailearn-app@0.4.2/components/hooks", "react@18.3.1/jsx-runtime"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, bimport, __Bundle, __pkg, ims, Controller, Content, Header, WallView, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    Content: void 0,
    Header: void 0,
    WallView: void 0
  });
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsReact18Widgets114Base) {
      dependency_1 = _beyondJsReact18Widgets114Base;
    }, function (_aimpactAilearnApp042DashboardLayoutWidget) {
      dependency_2 = _aimpactAilearnApp042DashboardLayoutWidget;
    }, function (_aimpactAilearnSdk120Core) {
      dependency_3 = _aimpactAilearnSdk120Core;
    }, function (_aimpactAilearnSdk120Tracking) {
      dependency_4 = _aimpactAilearnSdk120Tracking;
    }, function (_beyondJsReactive205Model) {
      dependency_5 = _beyondJsReactive205Model;
    }, function (_beyondJsKernel0112Texts) {
      dependency_6 = _beyondJsKernel0112Texts;
    }, function (_aimpactAilearnApp042ComponentsIcons) {
      dependency_7 = _aimpactAilearnApp042ComponentsIcons;
    }, function (_pragmateUi100Beta7Image) {
      dependency_8 = _pragmateUi100Beta7Image;
    }, function (_react2) {
      dependency_9 = _react2;
    }, function (_pragmateUi100Beta7List) {
      dependency_10 = _pragmateUi100Beta7List;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_11 = _pragmateUi100Beta7Icons;
    }, function (_aimpactChatSdk154WidgetsMarkdown) {
      dependency_12 = _aimpactChatSdk154WidgetsMarkdown;
    }, function (_aimpactAilearnApp042ComponentsUi) {
      dependency_13 = _aimpactAilearnApp042ComponentsUi;
    }, function (_aimpactAilearnApp042ComponentsNavbarHeaderCode) {
      dependency_14 = _aimpactAilearnApp042ComponentsNavbarHeaderCode;
    }, function (_aimpactAilearnApp042Config) {
      dependency_15 = _aimpactAilearnApp042Config;
    }, function (_beyondJsReact18Widgets114Hooks) {
      dependency_16 = _beyondJsReact18Widgets114Hooks;
    }, function (_pragmateUi100Beta7Components) {
      dependency_17 = _pragmateUi100Beta7Components;
    }, function (_aimpactAilearnApp042ComponentsHooks) {
      dependency_18 = _aimpactAilearnApp042ComponentsHooks;
    }, function (_react1831JsxRuntime) {
      dependency_19 = _react1831JsxRuntime;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", null], ["@aimpact/chat-sdk", "1.5.4"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@beyond-js/http-suite", "0.1.0"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.0.4"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-select", "5.10.1"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.4.2"], ["@aimpact/rvd", "0.4.13"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.4.2/dashboard/wall/widget",
          "multibundle": true
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/react-18-widgets/base', dependency_1], ['@aimpact/ailearn-app/dashboard-layout.widget', dependency_2], ['@aimpact/ailearn-sdk/core', dependency_3], ['@aimpact/ailearn-sdk/tracking', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@beyond-js/kernel/texts', dependency_6], ['@aimpact/ailearn-app/components/icons', dependency_7], ['pragmate-ui/image', dependency_8], ['react', dependency_9], ['pragmate-ui/list', dependency_10], ['pragmate-ui/icons', dependency_11], ['@aimpact/chat-sdk/widgets/markdown', dependency_12], ['@aimpact/ailearn-app/components/ui', dependency_13], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_14], ['@aimpact/ailearn-app/config', dependency_15], ['@beyond-js/react-18-widgets/hooks', dependency_16], ['pragmate-ui/components', dependency_17], ['@aimpact/ailearn-app/components/hooks', dependency_18], ['react/jsx-runtime', dependency_19]]);
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
        hash: 1423826803,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _core = require("@aimpact/ailearn-sdk/core");
          var _model = require("@beyond-js/reactive/model");
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
        hash: 3417898822,
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
            const src = role === 'user' ? photoUrl : '/assets/images/branding/profile.png';
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
        hash: 2085342536,
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
              className: "wall-user-container",
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
        hash: 1622467192,
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
            const cls = `wall-message ${role}`;
            function toggleText() {
              setIsExpand(!isExpanded);
            }
            function applyEllipsis(text, maxLength) {
              return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
            }
            const output = applyEllipsis(text, isExpanded ? 5000 : 180);
            const isTruncated = text.length > 180;
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
            }, user && _react.default.createElement("h6", {
              className: "message-user__label-text p2"
            }, user.name), _react.default.createElement(_markdown.Markdown, {
              className: `message__label-text p2 expand-${isExpanded}`,
              content: output
            }))), isTruncated && _react.default.createElement("section", {
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
        hash: 2298982355,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.WallView = WallView;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _react = require("react");
          var _context = require("./context");
          var _components = require("pragmate-ui/components");
          var _content = require("./content");
          var _empty = require("./empty");
          var _hooks = require("@aimpact/ailearn-app/components/hooks");
          /*bundle */
          function WallView({
            store,
            texts
          }) {
            (0, _hooks.useStore)(store);
            const state = {
              ready: store.ready,
              fetching: store.fetching,
              items: store.items
            };
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
            }, _react.default.createElement(_ui.AnimatedContainer, null, _react.default.createElement(_components.ConditionalContainer, {
              condition: !!store.items.length,
              ternary: true,
              options: {
                false: _react.default.createElement(_empty.EmptyList, null),
                true: _react.default.createElement(_content.Content, null)
              }
            })));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsImF0dHJpYnV0ZXMiLCJXaWRnZXQiLCJXYWxsVmlldyIsImNvbnN0cnVjdG9yIiwiYSIsInNob3ciLCJsb2FkIiwidXJpIiwidmFycyIsImdldCIsImhvbGEiLCJjb25zb2xlIiwibG9nIiwiZXhwb3J0cyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJfY29yZSIsIl9tb2RlbCIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsIlJlYWN0aXZlTW9kZWwiLCJpc1N0b3JlIiwibW9kZWwiLCJpdGVtcyIsImlkIiwiYXNzaWdubWVudCIsInRleHRzIiwiQ3VycmVudFRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwicmVhZHkiLCJvbiIsInRyaWdnZXJFdmVudCIsInJlZnJlc2giLCJmZXRjaGluZyIsIm1lc3NhZ2VzIiwiZSIsImVycm9yIiwiRGFzaGJvYXJkV2FsbCIsIl9pY29ucyIsIl9pbWFnZSIsIl9yZWFjdCIsIlByb2ZpbGVJY29uIiwicm9sZSIsInBob3RvVXJsIiwibG9hZEVycm9yIiwic2V0TG9hZEVycm9yIiwidXNlU3RhdGUiLCJoYW5kbGVMb2FkRXJyb3IiLCJzcmMiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIkltYWdlIiwiYWx0Iiwib25FcnJvciIsIkFwcEljb24iLCJpY29uIiwiX2NvbnRleHQiLCJfaXRlbSIsIl9saXN0IiwiQ29udGVudCIsInVzZVdhbGxEYXNoYm9hcmRDb250ZXh0IiwiTGlzdCIsImNvbnRyb2wiLCJJdGVtIiwiX21lc3NhZ2UiLCJkYXRhIiwidGltZSIsImFjdGl2aXR5IiwidGl0bGUiLCJNZXNzYWdlIiwidGV4dCIsInByb21wdCIsImNvbnRlbnQiLCJ1c2VyIiwiYW5zd2VyIiwidW5kZWZpbmVkIiwiX3Byb2ZpbGVJY29uIiwiX21hcmtkb3duIiwiaXNFeHBhbmRlZCIsInNldElzRXhwYW5kIiwiY2xzIiwidG9nZ2xlVGV4dCIsImFwcGx5RWxsaXBzaXMiLCJtYXhMZW5ndGgiLCJsZW5ndGgiLCJzbGljZSIsIm91dHB1dCIsImlzVHJ1bmNhdGVkIiwibmFtZSIsIk1hcmtkb3duIiwiSWNvbkJ1dHRvbiIsIm9uQ2xpY2siLCJXYWxsRGFzaGJvYXJkQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX3VpIiwiRW1wdHlMaXN0IiwiRW1wdHlDYXJkIiwiZW1wdHlUaXRsZSIsImRlc2NyaXB0aW9uIiwiZW1wdHkiLCJfbmF2YmFySGVhZGVyIiwiSGVhZGVyIiwiRnJhZ21lbnQiLCJOYXZiYXJIZWFkZXIiLCJicmVhZGNydW1iIiwiX2NvbXBvbmVudHMiLCJfY29udGVudCIsIl9lbXB0eSIsIl9ob29rcyIsInVzZVN0b3JlIiwic3RhdGUiLCJQYWdlTG9hZGVyIiwidG90YWxJdGVtcyIsImNvbnRleHRWYWx1ZSIsIlByb3ZpZGVyIiwiQW5pbWF0ZWRDb250YWluZXIiLCJDb25kaXRpb25hbENvbnRhaW5lciIsImNvbmRpdGlvbiIsInRlcm5hcnkiLCJvcHRpb25zIiwiZmFsc2UiLCJ0cnVlIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvaW50ZXJmYWNlLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvcHJvZmlsZS1pY29uLnRzeCIsIi90cy92aWV3cy9jb250ZW50L2luZGV4LnRzeCIsIi90cy92aWV3cy9jb250ZW50L2l0ZW0udHN4IiwiL3RzL3ZpZXdzL2NvbnRlbnQvbWVzc2FnZS50c3giLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9lbXB0eS50c3giLCIvdHMvdmlld3MvaGVhZGVyLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxu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QUE7VUFDQSxJQUFBcUgsV0FBQSxHQUFBckgsT0FBQTtVQUNBLElBQUFzSCxRQUFBLEdBQUF0SCxPQUFBO1VBQ0EsSUFBQXVILE1BQUEsR0FBQXZILE9BQUE7VUFFQSxJQUFBd0gsTUFBQSxHQUFBeEgsT0FBQTtVQVFPO1VBQVcsU0FBVVUsUUFBUUEsQ0FBQztZQUFFTCxLQUFLO1lBQUU4QjtVQUFLLENBQXdCO1lBQzFFLElBQUFxRixNQUFBLENBQUFDLFFBQVEsRUFBQ3BILEtBQUssQ0FBQztZQUNmLE1BQU1xSCxLQUFLLEdBQUc7Y0FDYm5GLEtBQUssRUFBRWxDLEtBQUssQ0FBQ2tDLEtBQUs7Y0FDbEJJLFFBQVEsRUFBRXRDLEtBQUssQ0FBQ3NDLFFBQVE7Y0FDeEJYLEtBQUssRUFBRTNCLEtBQUssQ0FBQzJCO2FBQ2I7WUFFRCxJQUFJLENBQUMwRixLQUFLLENBQUNuRixLQUFLLEVBQUUsT0FBT1csTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsQ0FBQzhDLEdBQUEsQ0FBQWlCLFVBQVU7Y0FBQ2hGLFFBQVEsRUFBRStFLEtBQUssQ0FBQy9FO1lBQVEsRUFBSTtZQUVqRSxNQUFNaUYsVUFBVSxHQUFHdkgsS0FBSyxDQUFDMkIsS0FBSyxDQUFDK0QsTUFBTTtZQUVyQyxNQUFNOEIsWUFBWSxHQUFHO2NBQ3BCMUYsS0FBSztjQUNMOUIsS0FBSztjQUNMMkIsS0FBSyxFQUFFM0IsS0FBSyxDQUFDMkIsS0FBSztjQUNsQlcsUUFBUSxFQUFFdEMsS0FBSyxDQUFDc0MsUUFBUTtjQUN4QmlGO2FBQ0E7WUFFRCxPQUNDMUUsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsQ0FBQ08sUUFBQSxDQUFBb0Msb0JBQW9CLENBQUN1QixRQUFRO2NBQUN0RyxLQUFLLEVBQUVxRztZQUFZLEdBQ2pEM0UsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsQ0FBQzhDLEdBQUEsQ0FBQXFCLGlCQUFpQixRQUNqQjdFLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLENBQUN5RCxXQUFBLENBQUFXLG9CQUFvQjtjQUNwQkMsU0FBUyxFQUFFLENBQUMsQ0FBQzVILEtBQUssQ0FBQzJCLEtBQUssQ0FBQytELE1BQU07Y0FDL0JtQyxPQUFPO2NBQ1BDLE9BQU8sRUFBRTtnQkFDUkMsS0FBSyxFQUFFbEYsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsQ0FBQzJELE1BQUEsQ0FBQVosU0FBUyxPQUFHO2dCQUNwQjBCLElBQUksRUFBRW5GLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLENBQUMwRCxRQUFBLENBQUFoRCxPQUFPOztZQUNkLEVBQ0EsQ0FDaUIsQ0FDVztVQUVsQyIsImlnbm9yZUxpc3QiOltdfQ==