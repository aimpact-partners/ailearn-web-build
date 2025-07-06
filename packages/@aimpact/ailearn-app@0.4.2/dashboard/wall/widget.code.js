System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/react-18-widgets@1.1.4/base", "@aimpact/ailearn-app@0.4.2/dashboard-layout.widget", "@aimpact/ailearn-sdk@1.2.0/core", "@aimpact/ailearn-sdk@1.2.0/tracking", "@beyond-js/reactive@2.1.0/model", "@beyond-js/kernel@0.1.12/texts", "react@18.3.1", "pragmate-ui@1.0.2/list", "@aimpact/chat-sdk@1.5.4/widgets/markdown", "pragmate-ui@1.0.2/collapsible", "@aimpact/ailearn-app@0.4.2/model/wrapper", "pragmate-ui@1.0.2/icons", "@aimpact/ailearn-app@0.4.2/components/icons", "pragmate-ui@1.0.2/image", "@aimpact/ailearn-app@0.4.2/components/ui", "@aimpact/ailearn-app@0.4.2/components/navbar-header.code", "@aimpact/ailearn-app@0.4.2/config", "@aimpact/ailearn-app@0.4.2/components/hooks", "pragmate-ui@1.0.2/components", "react@18.3.1/jsx-runtime"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, bimport, __Bundle, __pkg, ims, Controller, AlertsContent, Content, Header, WallView, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    AlertsContent: void 0,
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
    }, function (_beyondJsReactive210Model) {
      dependency_5 = _beyondJsReactive210Model;
    }, function (_beyondJsKernel0112Texts) {
      dependency_6 = _beyondJsKernel0112Texts;
    }, function (_react2) {
      dependency_7 = _react2;
    }, function (_pragmateUi102List) {
      dependency_8 = _pragmateUi102List;
    }, function (_aimpactChatSdk154WidgetsMarkdown) {
      dependency_9 = _aimpactChatSdk154WidgetsMarkdown;
    }, function (_pragmateUi102Collapsible) {
      dependency_10 = _pragmateUi102Collapsible;
    }, function (_aimpactAilearnApp042ModelWrapper) {
      dependency_11 = _aimpactAilearnApp042ModelWrapper;
    }, function (_pragmateUi102Icons) {
      dependency_12 = _pragmateUi102Icons;
    }, function (_aimpactAilearnApp042ComponentsIcons) {
      dependency_13 = _aimpactAilearnApp042ComponentsIcons;
    }, function (_pragmateUi102Image) {
      dependency_14 = _pragmateUi102Image;
    }, function (_aimpactAilearnApp042ComponentsUi) {
      dependency_15 = _aimpactAilearnApp042ComponentsUi;
    }, function (_aimpactAilearnApp042ComponentsNavbarHeaderCode) {
      dependency_16 = _aimpactAilearnApp042ComponentsNavbarHeaderCode;
    }, function (_aimpactAilearnApp042Config) {
      dependency_17 = _aimpactAilearnApp042Config;
    }, function (_aimpactAilearnApp042ComponentsHooks) {
      dependency_18 = _aimpactAilearnApp042ComponentsHooks;
    }, function (_pragmateUi102Components) {
      dependency_19 = _pragmateUi102Components;
    }, function (_react1831JsxRuntime) {
      dependency_20 = _react1831JsxRuntime;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", null], ["@aimpact/chat-sdk", "1.5.4"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.2"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.1.0"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.1"], ["@firebase/auth", "1.10.7"], ["@google-cloud/storage", "7.16.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.6"], ["driver.js", "1.3.6"], ["firebase", "11.9.1"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.22"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.2"], ["marked-mangle", "1.1.11"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.2.2"], ["simplebar-react", "3.3.1"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.9"], ["zod", "3.25.67"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.23"], ["@types/react-dom", "18.3.7"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.4.2"], ["@aimpact/rvd", "0.5.3"]]);
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
      __pkg.dependencies.update([['@beyond-js/react-18-widgets/base', dependency_1], ['@aimpact/ailearn-app/dashboard-layout.widget', dependency_2], ['@aimpact/ailearn-sdk/core', dependency_3], ['@aimpact/ailearn-sdk/tracking', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@beyond-js/kernel/texts', dependency_6], ['react', dependency_7], ['pragmate-ui/list', dependency_8], ['@aimpact/chat-sdk/widgets/markdown', dependency_9], ['pragmate-ui/collapsible', dependency_10], ['@aimpact/ailearn-app/model/wrapper', dependency_11], ['pragmate-ui/icons', dependency_12], ['@aimpact/ailearn-app/components/icons', dependency_13], ['pragmate-ui/image', dependency_14], ['@aimpact/ailearn-app/components/ui', dependency_15], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_16], ['@aimpact/ailearn-app/config', dependency_17], ['@aimpact/ailearn-app/components/hooks', dependency_18], ['pragmate-ui/components', dependency_19], ['react/jsx-runtime', dependency_20]]);
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

      /************************************
      INTERNAL MODULE: ./views/alerts/index
      ************************************/

      ims.set('./views/alerts/index', {
        hash: 4053263254,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AlertsContent = void 0;
          var _react = require("react");
          var _context = require("../context");
          var _item = require("./item");
          var _list = require("pragmate-ui/list");
          /*bundle*/
          const AlertsContent = () => {
            const {
              alerts,
              store
            } = (0, _context.useWallDashboardContext)();
            console.log(2, alerts, store);
            return _react.default.createElement(_list.List, {
              className: "wall__container",
              items: alerts,
              control: _item.default
            });
          };
          exports.AlertsContent = AlertsContent;
        }
      });

      /***********************************
      INTERNAL MODULE: ./views/alerts/item
      ***********************************/

      ims.set('./views/alerts/item', {
        hash: 3124527141,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = DrawerAlertItem;
          var React = require("react");
          var _markdown = require("@aimpact/chat-sdk/widgets/markdown");
          var _collapsible = require("pragmate-ui/collapsible");
          var _wrapper = require("@aimpact/ailearn-app/model/wrapper");
          var _context = require("../context");
          function DrawerAlertItem({
            item
          }) {
            const ref = React.useRef(null);
            const {
              texts
            } = (0, _context.useWallDashboardContext)();
            const [open, setOpen] = React.useState(false);
            const cls = `ds-drawer__activity-item ${open ? 'is-open' : ''}`;
            const onToggle = () => {
              setOpen(!open);
              return true;
            };
            return React.createElement("article", {
              className: cls,
              ref: ref
            }, React.createElement(_collapsible.CollapsibleContainer, {
              onToggle: onToggle
            }, React.createElement(_collapsible.CollapsibleHeader, null, React.createElement("span", null, item.text)), React.createElement(_collapsible.CollapsibleContent, null, React.createElement("div", {
              className: "alert-item"
            }, item.iteration.assistant ? React.createElement(React.Fragment, null, React.createElement("h6", null, _wrapper.settings.APP_NAME), React.createElement(_markdown.Markdown, {
              content: item.iteration.assistant
            })) : React.createElement(React.Fragment, null, texts?.noMessages), React.createElement(_markdown.Markdown, {
              content: item.iteration.student
            })))));
          }
        }
      });

      /**************************************
      INTERNAL MODULE: ./views/alerts/message
      **************************************/

      ims.set('./views/alerts/message', {
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
        hash: 2598352291,
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
        hash: 2437049318,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.WallView = WallView;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _hooks = require("@aimpact/ailearn-app/components/hooks");
          var _components = require("pragmate-ui/components");
          var _react = require("react");
          var _content = require("./content");
          var _context = require("./context");
          var _empty = require("./empty");
          /*bundle */
          function WallView({
            store,
            texts
          }) {
            (0, _hooks.useStore)(store);
            console.log(1, texts);
            const [view, setView] = _react.default.useState('wall');
            const onChange = event => {
              const view = event.currentTarget.dataset.view;
              setView(view);
            };
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
              ready: store.ready,
              fetching: store.fetching,
              items: store.items,
              alerts: store.alerts,
              texts,
              store,
              totalItems
            };
            return _react.default.createElement(_context.WallDashboardContext.Provider, {
              value: contextValue
            }, _react.default.createElement(_ui.AnimatedContainer, null, _react.default.createElement(_components.ConditionalContainer, {
              condition: !!store.items.length,
              ternary: true,
              options: {
                false: _react.default.createElement(_empty.EmptyList, null),
                // true: view === 'wall' ? <Content /> : <AlertsContent />
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
        "im": "./views/alerts/index",
        "from": "AlertsContent",
        "name": "AlertsContent"
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
        (require || prop === 'AlertsContent') && _export("AlertsContent", AlertsContent = require ? require('./views/alerts/index').AlertsContent : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsImF0dHJpYnV0ZXMiLCJXaWRnZXQiLCJXYWxsVmlldyIsImNvbnN0cnVjdG9yIiwiYSIsInNob3ciLCJsb2FkIiwidXJpIiwidmFycyIsImdldCIsImhvbGEiLCJjb25zb2xlIiwibG9nIiwiZXhwb3J0cyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJfY29yZSIsIl9tb2RlbCIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsIlJlYWN0aXZlTW9kZWwiLCJpc1N0b3JlIiwibW9kZWwiLCJpdGVtcyIsImlkIiwiYXNzaWdubWVudCIsInRleHRzIiwiQ3VycmVudFRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwicmVhZHkiLCJvbiIsInRyaWdnZXJFdmVudCIsInJlZnJlc2giLCJmZXRjaGluZyIsIm1lc3NhZ2VzIiwiZSIsImVycm9yIiwiRGFzaGJvYXJkV2FsbCIsIl9yZWFjdCIsIl9jb250ZXh0IiwiX2l0ZW0iLCJfbGlzdCIsIkFsZXJ0c0NvbnRlbnQiLCJhbGVydHMiLCJ1c2VXYWxsRGFzaGJvYXJkQ29udGV4dCIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiTGlzdCIsImNsYXNzTmFtZSIsImNvbnRyb2wiLCJSZWFjdCIsIl9tYXJrZG93biIsIl9jb2xsYXBzaWJsZSIsIl93cmFwcGVyIiwiRHJhd2VyQWxlcnRJdGVtIiwiaXRlbSIsInJlZiIsInVzZVJlZiIsIm9wZW4iLCJzZXRPcGVuIiwidXNlU3RhdGUiLCJjbHMiLCJvblRvZ2dsZSIsIkNvbGxhcHNpYmxlQ29udGFpbmVyIiwiQ29sbGFwc2libGVIZWFkZXIiLCJ0ZXh0IiwiQ29sbGFwc2libGVDb250ZW50IiwiaXRlcmF0aW9uIiwiYXNzaXN0YW50IiwiRnJhZ21lbnQiLCJzZXR0aW5ncyIsIkFQUF9OQU1FIiwiTWFya2Rvd24iLCJjb250ZW50Iiwibm9NZXNzYWdlcyIsInN0dWRlbnQiLCJfcHJvZmlsZUljb24iLCJfaWNvbnMiLCJNZXNzYWdlIiwicm9sZSIsInVzZXIiLCJpc0V4cGFuZGVkIiwic2V0SXNFeHBhbmQiLCJ0b2dnbGVUZXh0IiwiYXBwbHlFbGxpcHNpcyIsIm1heExlbmd0aCIsImxlbmd0aCIsInNsaWNlIiwib3V0cHV0IiwiaXNUcnVuY2F0ZWQiLCJQcm9maWxlSWNvbiIsInBob3RvVXJsIiwibmFtZSIsIkljb25CdXR0b24iLCJvbkNsaWNrIiwiaWNvbiIsIl9pbWFnZSIsImxvYWRFcnJvciIsInNldExvYWRFcnJvciIsImhhbmRsZUxvYWRFcnJvciIsInNyYyIsIkltYWdlIiwiYWx0Iiwib25FcnJvciIsIkFwcEljb24iLCJDb250ZW50IiwiSXRlbSIsIl9tZXNzYWdlIiwiZGF0YSIsInRpbWUiLCJhY3Rpdml0eSIsInRpdGxlIiwicHJvbXB0IiwiYW5zd2VyIiwidW5kZWZpbmVkIiwiV2FsbERhc2hib2FyZENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl91aSIsIkVtcHR5TGlzdCIsIkVtcHR5Q2FyZCIsImVtcHR5VGl0bGUiLCJkZXNjcmlwdGlvbiIsImVtcHR5IiwiX25hdmJhckhlYWRlciIsIkhlYWRlciIsIk5hdmJhckhlYWRlciIsImJyZWFkY3J1bWIiLCJfaG9va3MiLCJfY29tcG9uZW50cyIsIl9jb250ZW50IiwiX2VtcHR5IiwidXNlU3RvcmUiLCJ2aWV3Iiwic2V0VmlldyIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsInN0YXRlIiwiUGFnZUxvYWRlciIsInRvdGFsSXRlbXMiLCJjb250ZXh0VmFsdWUiLCJQcm92aWRlciIsIkFuaW1hdGVkQ29udGFpbmVyIiwiQ29uZGl0aW9uYWxDb250YWluZXIiLCJjb25kaXRpb24iLCJ0ZXJuYXJ5Iiwib3B0aW9ucyIsImZhbHNlIiwidHJ1ZSJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL2ludGVyZmFjZS50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9hbGVydHMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2FsZXJ0cy9pdGVtLnRzeCIsIi90cy92aWV3cy9hbGVydHMvbWVzc2FnZS50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9wcm9maWxlLWljb24udHN4IiwiL3RzL3ZpZXdzL2NvbnRlbnQvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2NvbnRlbnQvaXRlbS50c3giLCIvdHMvdmlld3MvY29udGVudC9tZXNzYWdlLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2VtcHR5LnRzeCIsIi90cy92aWV3cy9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsscUJBQXFCO1lBQzdDLENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUosTUFBQSxDQUFBTSxZQUFZLENBQUMsSUFBSSxDQUFDQyxVQUFVLENBQUM7Y0FDL0MsT0FBTyxJQUFJLENBQUMsQ0FBQUgsS0FBTTtZQUNuQjtZQUVBLElBQUlJLE1BQU1BLENBQUE7Y0FDVCxPQUFPUCxNQUFBLENBQUFRLFFBQVE7WUFDaEI7WUFFQUMs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