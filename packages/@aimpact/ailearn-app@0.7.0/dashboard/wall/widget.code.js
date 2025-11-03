System.register(["@beyond-js/kernel@0.1.14/bundle", "@beyond-js/react-18-widgets@1.1.8/base", "@aimpact/ailearn-app@0.7.0/dashboard-layout.widget", "@aimpact/ailearn-sdk@1.2.0/core", "@aimpact/ailearn-sdk@1.2.0/tracking", "@beyond-js/reactive@2.1.2/model", "@beyond-js/kernel@0.1.14/texts", "react@18.3.1", "pragmate-ui@1.0.8/list", "@aimpact/ailearn-app@0.7.0/components/ui", "@aimpact/chat-sdk@1.5.5/widgets/markdown", "pragmate-ui@1.0.8/collapsible", "@aimpact/ailearn-app@0.7.0/model/wrapper", "pragmate-ui@1.0.8/icons", "@aimpact/ailearn-app@0.7.0/components/icons", "pragmate-ui@1.0.8/image", "@aimpact/ailearn-app@0.7.0/components/navbar-header.code", "@aimpact/ailearn-app@0.7.0/config", "pragmate-ui@1.0.8/components", "@beyond-js/react-18-widgets@1.1.8/hooks", "react@18.3.1/jsx-runtime"], function (_export, _context2) {
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
    setters: [function (_beyondJsKernel0114Bundle) {
      dependency_0 = _beyondJsKernel0114Bundle;
    }, function (_beyondJsReact18Widgets118Base) {
      dependency_1 = _beyondJsReact18Widgets118Base;
    }, function (_aimpactAilearnApp070DashboardLayoutWidget) {
      dependency_2 = _aimpactAilearnApp070DashboardLayoutWidget;
    }, function (_aimpactAilearnSdk120Core) {
      dependency_3 = _aimpactAilearnSdk120Core;
    }, function (_aimpactAilearnSdk120Tracking) {
      dependency_4 = _aimpactAilearnSdk120Tracking;
    }, function (_beyondJsReactive212Model) {
      dependency_5 = _beyondJsReactive212Model;
    }, function (_beyondJsKernel0114Texts) {
      dependency_6 = _beyondJsKernel0114Texts;
    }, function (_react2) {
      dependency_7 = _react2;
    }, function (_pragmateUi108List) {
      dependency_8 = _pragmateUi108List;
    }, function (_aimpactAilearnApp070ComponentsUi) {
      dependency_9 = _aimpactAilearnApp070ComponentsUi;
    }, function (_aimpactChatSdk155WidgetsMarkdown) {
      dependency_10 = _aimpactChatSdk155WidgetsMarkdown;
    }, function (_pragmateUi108Collapsible) {
      dependency_11 = _pragmateUi108Collapsible;
    }, function (_aimpactAilearnApp070ModelWrapper) {
      dependency_12 = _aimpactAilearnApp070ModelWrapper;
    }, function (_pragmateUi108Icons) {
      dependency_13 = _pragmateUi108Icons;
    }, function (_aimpactAilearnApp070ComponentsIcons) {
      dependency_14 = _aimpactAilearnApp070ComponentsIcons;
    }, function (_pragmateUi108Image) {
      dependency_15 = _pragmateUi108Image;
    }, function (_aimpactAilearnApp070ComponentsNavbarHeaderCode) {
      dependency_16 = _aimpactAilearnApp070ComponentsNavbarHeaderCode;
    }, function (_aimpactAilearnApp070Config) {
      dependency_17 = _aimpactAilearnApp070Config;
    }, function (_pragmateUi108Components) {
      dependency_18 = _pragmateUi108Components;
    }, function (_beyondJsReact18Widgets118Hooks) {
      dependency_19 = _beyondJsReact18Widgets118Hooks;
    }, function (_react1831JsxRuntime) {
      dependency_20 = _react1831JsxRuntime;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.9"], ["@beyond-js/reactive", "2.1.2"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.14"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.8"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["@radix-ui/react-accordion", "1.2.12"], ["@radix-ui/react-collapsible", "1.1.12"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-select", "2.2.6"], ["@radix-ui/react-separator", "1.1.7"], ["@tiptap/extension-blockquote", "3.2.0"], ["@tiptap/extension-code-block", "3.2.0"], ["@tiptap/extension-horizontal-rule", "3.2.0"], ["@tiptap/extension-image", "3.6.2"], ["@tiptap/extension-task-item", "3.2.0"], ["@tiptap/extension-task-list", "3.2.0"], ["@tiptap/extension-underline", "3.2.0"], ["@tiptap/pm", "3.6.2"], ["@tiptap/react", "3.2.0"], ["@tiptap/starter-kit", "3.2.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-responsive-masonry", "2.7.1"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.4.0"], ["react-virtuoso", "4.14.0"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "12.0.2"], ["tippy.js", "6.3.7"], ["turndown", "7.2.0"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["yet-another-react-lightbox", "3.25.0"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/node", "20.11.0"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.7.0"], ["@aimpact/rvd", "0.7.2"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.7.0/dashboard/wall/widget",
          "multibundle": true
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/react-18-widgets/base', dependency_1], ['@aimpact/ailearn-app/dashboard-layout.widget', dependency_2], ['@aimpact/ailearn-sdk/core', dependency_3], ['@aimpact/ailearn-sdk/tracking', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@beyond-js/kernel/texts', dependency_6], ['react', dependency_7], ['pragmate-ui/list', dependency_8], ['@aimpact/ailearn-app/components/ui', dependency_9], ['@aimpact/chat-sdk/widgets/markdown', dependency_10], ['pragmate-ui/collapsible', dependency_11], ['@aimpact/ailearn-app/model/wrapper', dependency_12], ['pragmate-ui/icons', dependency_13], ['@aimpact/ailearn-app/components/icons', dependency_14], ['pragmate-ui/image', dependency_15], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_16], ['@aimpact/ailearn-app/config', dependency_17], ['pragmate-ui/components', dependency_18], ['@beyond-js/react-18-widgets/hooks', dependency_19], ['react/jsx-runtime', dependency_20]]);
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
        hash: 1524932969,
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
          var _ui = require("@aimpact/ailearn-app/components/ui");
          /*bundle*/
          const AlertsContent = () => {
            const {
              alerts,
              store
            } = (0, _context.useWallDashboardContext)();
            return _react.default.createElement(_ui.AnimatedContainer, null, _react.default.createElement(_list.List, {
              className: "wall__container",
              items: alerts,
              control: _item.default
            }));
          };
          exports.AlertsContent = AlertsContent;
        }
      });

      /***********************************
      INTERNAL MODULE: ./views/alerts/item
      ***********************************/

      ims.set('./views/alerts/item', {
        hash: 2582502893,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = DrawerAlertItem;
          var React = require("react");
          var _collapsible = require("pragmate-ui/collapsible");
          var _context = require("../context");
          var _profileIcon = require("../components/profile-icon");
          var _message = require("../components/message");
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
            console.log(1, item);
            return React.createElement("article", {
              className: cls,
              ref: ref
            }, React.createElement(_collapsible.CollapsibleContainer, {
              onToggle: onToggle
            }, React.createElement(_collapsible.CollapsibleHeader, null, React.createElement("div", {
              className: "user__data"
            }, React.createElement(_profileIcon.ProfileIcon, {
              role: "user",
              photoUrl: item.user?.photoUrl
            }), React.createElement("h5", null, item.user.name)), React.createElement("span", null, item.text)), React.createElement(_collapsible.CollapsibleContent, null, React.createElement("div", {
              className: "alert-item"
            }, item.iteration.assistant ? React.createElement(React.Fragment, null, React.createElement(_message.Message, {
              role: "system",
              text: item.iteration.assistant
            })) : React.createElement(_message.Message, {
              role: "system",
              text: texts?.noMessages
            }), React.createElement(_message.Message, {
              role: "user",
              text: item.iteration.student,
              user: item.user
            })))));
          }
        }
      });

      /******************************************
      INTERNAL MODULE: ./views/components/message
      ******************************************/

      ims.set('./views/components/message', {
        hash: 2543451066,
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
            user = undefined
          }) {
            const [isExpanded, setIsExpand] = (0, _react.useState)(false);
            const cls = `wall-message ${role}`;
            function toggleText() {
              setIsExpand(!isExpanded);
            }
            if (!text) {
              console.warn('no hay text', role, user);
              return null;
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
        hash: 2825109044,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Item = Item;
          var _react = require("react");
          var _context = require("../context");
          var _message = require("../components/message");
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
        hash: 4171054547,
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
            user = undefined
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
        hash: 793054466,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.WallView = WallView;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _components = require("pragmate-ui/components");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _react = require("react");
          var _content = require("./content");
          var _context = require("./context");
          var _empty = require("./empty");
          var _alerts = require("./alerts");
          /*bundle */
          function WallView({
            store,
            texts
          }) {
            (0, _hooks.useStore)(store);
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
            if (!store.ready) return _react.default.createElement(_ui.PageLoader, {
              fetching: true
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
            }, _react.default.createElement(_ui.AnimatedContainer, {
              className: "wall__container--inner-animation"
            }, _react.default.createElement(_components.ButtonGroup, {
              selected: view === 'wall' ? 0 : 1,
              variant: "primary",
              onChange: onChange
            }, _react.default.createElement(_components.Button, {
              "data-view": "wall"
            }, texts.tabs.wall, " "), _react.default.createElement(_components.Button, {
              "data-view": "alerts"
            }, texts.tabs.alerts, " ")), _react.default.createElement(_components.ConditionalContainer, {
              condition: !!store.items.length && view === 'wall' || !!store.alerts.length && view === 'alerts',
              ternary: true,
              options: {
                false: _react.default.createElement(_empty.EmptyList, null),
                true: view === 'wall' ? _react.default.createElement(_content.Content, null) : _react.default.createElement(_alerts.AlertsContent, null)
                // true: <Content />
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsImF0dHJpYnV0ZXMiLCJXaWRnZXQiLCJXYWxsVmlldyIsImNvbnN0cnVjdG9yIiwiYSIsInNob3ciLCJsb2FkIiwidXJpIiwidmFycyIsImdldCIsImhvbGEiLCJjb25zb2xlIiwibG9nIiwiZXhwb3J0cyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJfY29yZSIsIl9tb2RlbCIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsIlJlYWN0aXZlTW9kZWwiLCJpc1N0b3JlIiwibW9kZWwiLCJpdGVtcyIsImlkIiwiYXNzaWdubWVudCIsInRleHRzIiwiQ3VycmVudFRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwicmVhZHkiLCJvbiIsInRyaWdnZXJFdmVudCIsInJlZnJlc2giLCJmZXRjaGluZyIsIm1lc3NhZ2VzIiwiZSIsImVycm9yIiwiRGFzaGJvYXJkV2FsbCIsIl9yZWFjdCIsIl9jb250ZXh0IiwiX2l0ZW0iLCJfbGlzdCIsIl91aSIsIkFsZXJ0c0NvbnRlbnQiLCJhbGVydHMiLCJ1c2VXYWxsRGFzaGJvYXJkQ29udGV4dCIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiQW5pbWF0ZWRDb250YWluZXIiLCJMaXN0IiwiY2xhc3NOYW1lIiwiY29udHJvbCIsIlJlYWN0IiwiX2NvbGxhcHNpYmxlIiwiX3Byb2ZpbGVJY29uIiwiX21lc3NhZ2UiLCJEcmF3ZXJBbGVydEl0ZW0iLCJpdGVtIiwicmVmIiwidXNlUmVmIiwib3BlbiIsInNldE9wZW4iLCJ1c2VTdGF0ZSIsImNscyIsIm9uVG9nZ2xlIiwiQ29sbGFwc2libGVDb250YWluZXIiLCJDb2xsYXBzaWJsZUhlYWRlciIsIlByb2ZpbGVJY29uIiwicm9sZSIsInBob3RvVXJsIiwidXNlciIsIm5hbWUiLCJ0ZXh0IiwiQ29sbGFwc2libGVDb250ZW50IiwiaXRlcmF0aW9uIiwiYXNzaXN0YW50IiwiRnJhZ21lbnQiLCJNZXNzYWdlIiwibm9NZXNzYWdlcyIsInN0dWRlbnQiLCJfaWNvbnMiLCJfbWFya2Rvd24iLCJ1bmRlZmluZWQiLCJpc0V4cGFuZGVkIiwic2V0SXNFeHBhbmQiLCJ0b2dnbGVUZXh0Iiwid2FybiIsImFwcGx5RWxsaXBzaXMiLCJtYXhMZW5ndGgiLCJsZW5ndGgiLCJzbGljZSIsIm91dHB1dCIsImlzVHJ1bmNhdGVkIiwiTWFya2Rvd24iLCJjb250ZW50IiwiSWNvbkJ1dHRvbiIsIm9uQ2xpY2siLCJpY29uIiwiX2ltYWdlIiwibG9hZEVycm9yIiwic2V0TG9hZEVycm9yIiwiaGFuZGxlTG9hZEVycm9yIiwic3JjIiwiSW1hZ2UiLCJhbHQiLCJvbkVycm9yIiwiQXBwSWNvbiIsIkNvbnRlbnQiLCJJdGVtIiwiZGF0YSIsInRpbWUiLCJhY3Rpdml0eSIsInRpdGxlIiwicHJvbXB0IiwiYW5zd2VyIiwiV2FsbERhc2hib2FyZENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIkVtcHR5TGlzdCIsIkVtcHR5Q2FyZCIsImVtcHR5VGl0bGUiLCJkZXNjcmlwdGlvbiIsImVtcHR5IiwiX25hdmJhckhlYWRlciIsIkhlYWRlciIsIk5hdmJhckhlYWRlciIsImJyZWFkY3J1bWIiLCJfY29tcG9uZW50cyIsIl9ob29rcyIsIl9jb250ZW50IiwiX2VtcHR5IiwiX2FsZXJ0cyIsInVzZVN0b3JlIiwidmlldyIsInNldFZpZXciLCJvbkNoYW5nZSIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJzdGF0ZSIsIlBhZ2VMb2FkZXIiLCJ0b3RhbEl0ZW1zIiwiY29udGV4dFZhbHVlIiwiUHJvdmlkZXIiLCJCdXR0b25Hcm91cCIsInNlbGVjdGVkIiwidmFyaWFudCIsIkJ1dHRvbiIsInRhYnMiLCJ3YWxsIiwiQ29uZGl0aW9uYWxDb250YWluZXIiLCJjb25kaXRpb24iLCJ0ZXJuYXJ5Iiwib3B0aW9ucyIsImZhbHNlIiwidHJ1ZSJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL2ludGVyZmFjZS50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9hbGVydHMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2FsZXJ0cy9pdGVtLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL21lc3NhZ2UudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvcHJvZmlsZS1pY29uLnRzeCIsIi90cy92aWV3cy9jb250ZW50L2luZGV4LnRzeCIsIi90cy92aWV3cy9jb250ZW50L2l0ZW0udHN4IiwiL3RzL3ZpZXdzL2NvbnRlbnQvbWVzc2FnZS50c3giLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9lbXB0eS50c3giLCIvdHMvdmlld3MvaGVhZGVyLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHFCQUFxQjtZQUM3QyxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlKLE1BQUEsQ0FBQU0sWUFBWSxDQUFDLElBQUksQ0FBQ0MsVUFBVSxDQUFDO2NBQy9DLE9BQU8sSUFBSSxDQUFDLENBQUFILEtBQU07WUFDbkI7WUFFQSxJQUFJSSxNQUFN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