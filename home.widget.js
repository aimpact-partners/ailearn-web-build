System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.0.46.dev-09/main-layout.widget", "@beyond-js/reactive@1.1.12/model", "@beyond-js/kernel@0.1.9/texts", "@aimpact/chat-sdk@1.0.0/session", "react@18.2.0", "@aimpact/ailearn-app@0.0.46.dev-09/components/ui", "pragmate-ui@0.1.1/components", "pragmate-ui@0.1.1/list", "pragmate-ui@0.1.1/link", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@0.1.1/image"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, bimport, __Bundle, __pkg, ims, Controller, AssignmentItem, View, UserCard, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    AssignmentItem: void 0,
    View: void 0,
    UserCard: void 0
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
    }, function (_aimpactAilearnApp0046Dev09MainLayoutWidget) {
      dependency_4 = _aimpactAilearnApp0046Dev09MainLayoutWidget;
    }, function (_beyondJsReactive1112Model) {
      dependency_5 = _beyondJsReactive1112Model;
    }, function (_beyondJsKernel019Texts) {
      dependency_6 = _beyondJsKernel019Texts;
    }, function (_aimpactChatSdk100Session) {
      dependency_7 = _aimpactChatSdk100Session;
    }, function (_react2) {
      dependency_8 = _react2;
    }, function (_aimpactAilearnApp0046Dev09ComponentsUi) {
      dependency_9 = _aimpactAilearnApp0046Dev09ComponentsUi;
    }, function (_pragmateUi011Components) {
      dependency_10 = _pragmateUi011Components;
    }, function (_pragmateUi011List) {
      dependency_11 = _pragmateUi011List;
    }, function (_pragmateUi011Link) {
      dependency_12 = _pragmateUi011Link;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_13 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi011Image) {
      dependency_14 = _pragmateUi011Image;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.0.46.dev-09"], ["@aimpact/ailearn-app", "0.0.46.dev-09"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.46.dev-09/home",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/main-layout.widget', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@beyond-js/kernel/texts', dependency_6], ['@aimpact/chat-sdk/session', dependency_7], ['react', dependency_8], ['@aimpact/ailearn-app/components/ui', dependency_9], ['pragmate-ui/components', dependency_10], ['pragmate-ui/list', dependency_11], ['pragmate-ui/link', dependency_12], ['@beyond-js/react-18-widgets/hooks', dependency_13], ['pragmate-ui/image', dependency_14]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "student-home",
        "vspecifier": "@aimpact/ailearn-app@0.0.46.dev-09/home.widget",
        "is": "page",
        "route": "/",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.46.dev-09/home.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 3431377508,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _page = require("@beyond-js/react-18-widgets/page");
          var _store = require("./store");
          var _views = require("./views");
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
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
             * this method is executed when the widget is showd
             *
             */
            show() {
              _mainLayout.LayoutBroker.overlay = false;
              this.#store.load();
            }
            /**
             * this method is executed when the widget is hidden
             */
            hide() {}
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 2898159972,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _texts = require("@beyond-js/kernel/texts");
          var _beyond_context = require("beyond_context");
          var _session = require("@aimpact/chat-sdk/session");
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
          class StoreManager extends _model.ReactiveModel {
            #model;
            get model() {
              return this.#model;
            }
            get items() {
              return this.#model.assignments;
            }
            #texts = new _texts.CurrentTexts(_beyond_context.module.specifier);
            get texts() {
              return this.#texts?.value;
            }
            #assignments;
            get assignments() {
              return this.#assignments;
            }
            #drafts;
            get drafts() {
              return this.#drafts;
            }
            get user() {
              return _session.sessionWrapper.user;
            }
            get ready() {
              return super.ready && this.#texts.ready;
            }
            constructor() {
              super();
              this.#texts.on('change', this.triggerEvent);
            }
            setBreadcrumb() {
              const onChange = this.setBreadcrumb.bind(this);
              if (!this.#texts.ready) {
                this.#texts.on('change', onChange);
                return;
              }
              this.#texts.off('change', onChange);
              _mainLayout.LayoutBroker.breadcrumb = [];
              _mainLayout.LayoutBroker.overlay = false;
              globalThis.setTimeout(() => _mainLayout.LayoutBroker.breadcrumb = [], 100);
            }
            async load() {
              try {
                this.#model = _session.sessionWrapper;
                this.setBreadcrumb();
                const {
                  status,
                  data
                } = await this.#model.user.getHome();
                if (!status) {
                  console.log('error');
                }
                this.#drafts = data.drafts;
                this.#assignments = data.assignments;
                super.ready = true;
                this.triggerEvent();
                globalThis.store = this;
              } catch (e) {
                console.error(e);
              }
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /************************************
      INTERNAL MODULE: ./views/aside/drafts
      ************************************/

      ims.set('./views/aside/drafts', {
        hash: 3938353665,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AsideDrafts = AsideDrafts;
          var _react = require("react");
          var _context = require("../context");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _components = require("pragmate-ui/components");
          function AsideDrafts() {
            const {
              store,
              texts: {
                drafts: texts
              }
            } = (0, _context.useModuleContext)();
            if (!store.drafts || !Array.isArray(store.drafts) || !store.drafts.length) return null;
            const total = store.drafts.length;
            const empty = () => _react.default.createElement("div", {
              className: "aside-list__empty-container"
            }, _react.default.createElement("span", {
              className: "empty__list"
            }, texts.empty));
            const output = !total ? empty() : store.drafts.map(draft => {
              const content = !draft.description || draft.description === '' ? texts.items.description : draft.description;
              const title = !draft.title || draft.title === '' ? texts.items.title : draft.title;
              return _react.default.createElement(_components.Link, {
                href: `/modules/management?id=${draft.id}`,
                className: "aside-list__item-container",
                key: draft.id
              }, _react.default.createElement("article", {
                className: "aside-list__item",
                key: draft.id
              }, _react.default.createElement(_ui.EntityImage, {
                ratio: "square",
                src: draft.picture,
                entity: "module"
              }), _react.default.createElement("section", {
                className: "item__content"
              }, _react.default.createElement("h6", null, title), _react.default.createElement("p", {
                className: "description"
              }, content))));
            });
            const cls = `aside-list${total === 0 ? ' aside-list--empty' : ''}`;
            return _react.default.createElement("aside", null, _react.default.createElement("div", {
              className: cls
            }, _react.default.createElement("header", {
              className: "aside-list__header"
            }, _react.default.createElement("h5", null, texts.title), _react.default.createElement(_components.Link, {
              href: "/modules/management"
            }, texts.action)), _react.default.createElement("section", {
              className: "aside-list__body"
            }, output)));
          }
        }
      });

      /***********************************
      INTERNAL MODULE: ./views/aside/index
      ***********************************/

      ims.set('./views/aside/index', {
        hash: 572624765,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Aside = Aside;
          var _react = require("react");
          var _drafts = require("./drafts");
          function Aside() {
            return _react.default.createElement("aside", null, _react.default.createElement(_drafts.AsideDrafts, null));
          }
        }
      });

      /*********************************************
      INTERNAL MODULE: ./views/assigments copy/index
      *********************************************/

      ims.set('./views/assigments copy/index', {
        hash: 1077025586,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Modules = Modules;
          var _react = require("react");
          var _context = require("../context");
          var _list = require("pragmate-ui/list");
          var _item = require("./item");
          var _link = require("pragmate-ui/link");
          var _session = require("@aimpact/chat-sdk/session");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          function Modules() {
            const {
              store: {
                modules,
                texts
              }
            } = (0, _context.useModuleContext)();
            if (!modules || !Array.isArray(modules) || !modules.length) return null;
            const output = [...modules];
            const isAdmin = _session.sessionWrapper?.user?.roles?.includes('teacher');
            return _react.default.createElement("article", {
              className: "assigments-list"
            }, _react.default.createElement(_ui.PageTitle, {
              title: texts.modules.title,
              as: "h3"
            }, isAdmin && _react.default.createElement("div", {
              className: "header__actions"
            }, _react.default.createElement(_link.Link, {
              href: "/modules/management"
            }, texts.actions.create))), _react.default.createElement(_list.List, {
              className: "entity__list two-columns",
              items: output,
              control: _item.AssignmentItem
            }));
          }
        }
      });

      /********************************************
      INTERNAL MODULE: ./views/assigments copy/item
      ********************************************/

      ims.set('./views/assigments copy/item', {
        hash: 3984010261,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AssignmentItem = AssignmentItem;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _components = require("pragmate-ui/components");
          var _react = require("react");
          var _context = require("../context");
          /*bundle*/
          function AssignmentItem({
            item
          }) {
            const {
              store: {
                texts
              }
            } = (0, _context.useModuleContext)();
            const {
              module,
              title
            } = item;
            return _react.default.createElement("article", {
              className: "entity__item"
            }, _react.default.createElement(_ui.EntityImage, {
              src: item.picture,
              entity: "module",
              alt: title
            }), _react.default.createElement("section", {
              className: "entity__item-content"
            }, _react.default.createElement(_components.Link, {
              href: `/assigments/management?id=${item.id}`
            }, _react.default.createElement("h4", null, module.title), _react.default.createElement("span", null, module.description))), _react.default.createElement("footer", {
              className: "entity__footer"
            }, _react.default.createElement("span", {
              className: "card-number__detail"
            }, texts.assignments.activities, ": ", module.activities.count)));
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/assigments/index
      ****************************************/

      ims.set('./views/assigments/index', {
        hash: 2953712077,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Assignments = Assignments;
          var _react = require("react");
          var _context = require("../context");
          var _list = require("pragmate-ui/list");
          var _item = require("./item");
          var _link = require("pragmate-ui/link");
          var _session = require("@aimpact/chat-sdk/session");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          function Assignments() {
            const {
              store: {
                assignments,
                texts
              }
            } = (0, _context.useModuleContext)();
            if (!assignments || !Array.isArray(assignments) || !assignments.length) return null;
            const output = [...assignments];
            const isAdmin = _session.sessionWrapper?.user?.roles?.includes('teacher');
            return _react.default.createElement("article", {
              className: "assigments-list"
            }, _react.default.createElement(_ui.PageTitle, {
              title: texts.assignments.title,
              as: "h3"
            }, isAdmin && _react.default.createElement("div", {
              className: "header__actions"
            }, _react.default.createElement(_link.Link, {
              href: "/assignments"
            }, texts.actions.create))), _react.default.createElement(_list.List, {
              className: "entity__list two-columns",
              items: output,
              control: _item.AssignmentItem
            }));
          }
        }
      });

      /***************************************
      INTERNAL MODULE: ./views/assigments/item
      ***************************************/

      ims.set('./views/assigments/item', {
        hash: 3984010261,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AssignmentItem = AssignmentItem;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _components = require("pragmate-ui/components");
          var _react = require("react");
          var _context = require("../context");
          /*bundle*/
          function AssignmentItem({
            item
          }) {
            const {
              store: {
                texts
              }
            } = (0, _context.useModuleContext)();
            const {
              module,
              title
            } = item;
            return _react.default.createElement("article", {
              className: "entity__item"
            }, _react.default.createElement(_ui.EntityImage, {
              src: item.picture,
              entity: "module",
              alt: title
            }), _react.default.createElement("section", {
              className: "entity__item-content"
            }, _react.default.createElement(_components.Link, {
              href: `/assigments/management?id=${item.id}`
            }, _react.default.createElement("h4", null, module.title), _react.default.createElement("span", null, module.description))), _react.default.createElement("footer", {
              className: "entity__footer"
            }, _react.default.createElement("span", {
              className: "card-number__detail"
            }, texts.assignments.activities, ": ", module.activities.count)));
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 2793963965,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useModuleContext = exports.ModuleContext = void 0;
          var _react = require("react");
          const ModuleContext = exports.ModuleContext = _react.default.createContext({});
          const useModuleContext = () => _react.default.useContext(ModuleContext);
          exports.useModuleContext = useModuleContext;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 4260109520,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _react = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _context = require("./context");
          var _components = require("pragmate-ui/components");
          var _userCard = require("./sections/user-card");
          var _assigments = require("./assigments");
          var _aside = require("./aside");
          /*bundle*/
          function View({
            store
          }) {
            const [ready, setReady] = (0, _react.useState)(store.ready);
            const {
              texts
            } = store;
            (0, _hooks.useBinder)([store], () => setReady(store.ready));
            if (!ready) return _react.default.createElement(_components.Spinner, {
              active: true
            });
            const {
              assignments
            } = store.model;
            const contextValue = {
              store,
              fetching: store.fetching,
              texts,
              items: assignments
            };
            return _react.default.createElement(_context.ModuleContext.Provider, {
              value: contextValue
            }, _react.default.createElement(_ui.PageContainer, {
              className: "top-header"
            }, _react.default.createElement("div", {
              className: "grid-container columns-8-4"
            }, _react.default.createElement("main", null, _react.default.createElement(_userCard.UserCard, null), _react.default.createElement(_assigments.Assignments, null)), _react.default.createElement(_aside.Aside, null))));
          }
        }
      });

      /***************************************
      INTERNAL MODULE: ./views/sections/drafts
      ***************************************/

      ims.set('./views/sections/drafts', {
        hash: 1845378313,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.UserCard = UserCard;
          var _react = require("react");
          var _context = require("../context");
          var _image = require("pragmate-ui/image");
          /*bundle*/
          function UserCard() {
            const {
              store: {
                user,
                texts
              }
            } = (0, _context.useModuleContext)();
            return _react.default.createElement("section", {
              className: "user-profile"
            }, _react.default.createElement(_image.Image, {
              className: "user-profile__img",
              src: user.photoURL,
              alt: "Profile Picture"
            }), _react.default.createElement("div", {
              className: "user-profile__content"
            }, _react.default.createElement("div", {
              className: "content"
            }, _react.default.createElement("h6", null, user.displayName), _react.default.createElement("span", {
              className: "p2"
            }, user.email)), _react.default.createElement("div", {
              className: "card__actions"
            }, _react.default.createElement("link", {
              href: "/me"
            }, texts.profile.edit))));
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/sections/modules
      ****************************************/

      ims.set('./views/sections/modules', {
        hash: 2808383044,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.UserCard = UserCard;
          var _react = require("react");
          var _context = require("../context");
          var _image = require("pragmate-ui/image");
          /*bundle*/
          function UserCard() {
            const {
              store: {
                user,
                texts
              }
            } = (0, _context.useModuleContext)();
            return _react.default.createElement("section", {
              className: "user-profile"
            }, _react.default.createElement(_image.Image, {
              className: "user-profile__img",
              src: user.photoURL,
              alt: "Profile Picture"
            }), _react.default.createElement("div", {
              className: "user-profile__content"
            }, _react.default.createElement("div", {
              className: "content"
            }, _react.default.createElement("h3", null, user.displayName), _react.default.createElement("span", {
              className: "p2"
            }, user.email)), _react.default.createElement("div", {
              className: "card__actions"
            }, _react.default.createElement("link", {
              href: "/me"
            }, texts.profile.edit))));
          }
        }
      });

      /******************************************
      INTERNAL MODULE: ./views/sections/user-card
      ******************************************/

      ims.set('./views/sections/user-card', {
        hash: 3346926153,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.UserCard = UserCard;
          var _react = require("react");
          var _context = require("../context");
          var _image = require("pragmate-ui/image");
          var _link = require("pragmate-ui/link");
          /*bundle*/
          function UserCard() {
            const {
              store: {
                user,
                texts
              }
            } = (0, _context.useModuleContext)();
            return _react.default.createElement("section", {
              className: "user-profile"
            }, _react.default.createElement(_image.Image, {
              className: "user-profile__img",
              src: user.photoURL,
              alt: "Profile Picture"
            }), _react.default.createElement("div", {
              className: "user-profile__content flex-container flex-space-between"
            }, _react.default.createElement("div", {
              className: "content"
            }, _react.default.createElement("h3", null, user.displayName), _react.default.createElement("span", {
              className: "p2"
            }, user.email)), _react.default.createElement("div", {
              className: "card__actions"
            }, _react.default.createElement(_link.Link, {
              href: "/users/me"
            }, texts.profile.edit))));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./views/assigments copy/item",
        "from": "AssignmentItem",
        "name": "AssignmentItem"
      }, {
        "im": "./views/assigments/item",
        "from": "AssignmentItem",
        "name": "AssignmentItem"
      }, {
        "im": "./views/index",
        "from": "View",
        "name": "View"
      }, {
        "im": "./views/sections/drafts",
        "from": "UserCard",
        "name": "UserCard"
      }, {
        "im": "./views/sections/modules",
        "from": "UserCard",
        "name": "UserCard"
      }, {
        "im": "./views/sections/user-card",
        "from": "UserCard",
        "name": "UserCard"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'AssignmentItem') && _export("AssignmentItem", AssignmentItem = require ? require('./views/assigments copy/item').AssignmentItem : value);
        (require || prop === 'AssignmentItem') && _export("AssignmentItem", AssignmentItem = require ? require('./views/assigments/item').AssignmentItem : value);
        (require || prop === 'View') && _export("View", View = require ? require('./views/index').View : value);
        (require || prop === 'UserCard') && _export("UserCard", UserCard = require ? require('./views/sections/drafts').UserCard : value);
        (require || prop === 'UserCard') && _export("UserCard", UserCard = require ? require('./views/sections/modules').UserCard : value);
        (require || prop === 'UserCard') && _export("UserCard", UserCard = require ? require('./views/sections/user-card').UserCard : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJfbWFpbkxheW91dCIsIkNvbnRyb2xsZXIiLCJQYWdlUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsIlZpZXciLCJzaG93IiwiTGF5b3V0QnJva2VyIiwib3ZlcmxheSIsImxvYWQiLCJoaWRlIiwiZXhwb3J0cyIsIl9tb2RlbCIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsIl9zZXNzaW9uIiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwiaXRlbXMiLCJhc3NpZ25tZW50cyIsInRleHRzIiwiQ3VycmVudFRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidmFsdWUiLCJkcmFmdHMiLCJ1c2VyIiwic2Vzc2lvbldyYXBwZXIiLCJyZWFkeSIsImNvbnN0cnVjdG9yIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJzZXRCcmVhZGNydW1iIiwib25DaGFuZ2UiLCJiaW5kIiwib2ZmIiwiYnJlYWRjcnVtYiIsImdsb2JhbFRoaXMiLCJzZXRUaW1lb3V0Iiwic3RhdHVzIiwiZGF0YSIsImdldEhvbWUiLCJjb25zb2xlIiwibG9nIiwiZSIsImVycm9yIiwiX3JlYWN0IiwiX2NvbnRleHQiLCJfdWkiLCJfY29tcG9uZW50cyIsIkFzaWRlRHJhZnRzIiwidXNlTW9kdWxlQ29udGV4dCIsIkFycmF5IiwiaXNBcnJheSIsImxlbmd0aCIsInRvdGFsIiwiZW1wdHkiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIm91dHB1dCIsIm1hcCIsImRyYWZ0IiwiY29udGVudCIsImRlc2NyaXB0aW9uIiwidGl0bGUiLCJMaW5rIiwiaHJlZiIsImlkIiwia2V5IiwiRW50aXR5SW1hZ2UiLCJyYXRpbyIsInNyYyIsInBpY3R1cmUiLCJlbnRpdHkiLCJjbHMiLCJhY3Rpb24iLCJfZHJhZnRzIiwiQXNpZGUiLCJfbGlzdCIsIl9pdGVtIiwiX2xpbmsiLCJNb2R1bGVzIiwibW9kdWxlcyIsImlzQWRtaW4iLCJyb2xlcyIsImluY2x1ZGVzIiwiUGFnZVRpdGxlIiwiYXMiLCJhY3Rpb25zIiwiY3JlYXRlIiwiTGlzdCIsImNvbnRyb2wiLCJBc3NpZ25tZW50SXRlbSIsIml0ZW0iLCJhbHQiLCJhY3Rpdml0aWVzIiwiY291bnQiLCJBc3NpZ25tZW50cyIsIk1vZHVsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9ob29rcyIsIl91c2VyQ2FyZCIsIl9hc3NpZ21lbnRzIiwiX2FzaWRlIiwic2V0UmVhZHkiLCJ1c2VTdGF0ZSIsInVzZUJpbmRlciIsIlNwaW5uZXIiLCJhY3RpdmUiLCJjb250ZXh0VmFsdWUiLCJmZXRjaGluZyIsIlByb3ZpZGVyIiwiUGFnZUNvbnRhaW5lciIsIlVzZXJDYXJkIiwiX2ltYWdlIiwiSW1hZ2UiLCJwaG90b1VSTCIsImRpc3BsYXlOYW1lIiwiZW1haWwiLCJwcm9maWxlIiwiZWRpdCJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2FzaWRlL2RyYWZ0cy50c3giLCIvdHMvdmlld3MvYXNpZGUvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbWVudHMgY29weS9pbmRleC50c3giLCIvdHMvdmlld3MvYXNzaWdtZW50cyBjb3B5L2l0ZW0udHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbWVudHMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbWVudHMvaXRlbS50c3giLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3Mvc2VjdGlvbnMvZHJhZnRzLnRzeCIsIi90cy92aWV3cy9zZWN0aW9ucy9tb2R1bGVzLnRzeCIsIi90cy92aWV3cy9zZWN0aW9ucy91c2VyLWNhcmQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFHLFdBQUEsR0FBQUgsT0FBQTtVQUVPO1VBQVUsTUFDWEksVUFBVyxTQUFRTCxLQUFBLENBQUFNLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlMLE1BQUEsQ0FBQU8sWUFBWSxFQUFFO2NBQ2hDLE9BQU8sSUFBSSxDQUFDLENBQUFGLEtBQU07WUFDbkI7WUFDQSxJQUFJRyxNQUFNQSxDQUFBO2NBQ1QsT0FBT1AsTUFBQSxDQUFBUSxJQUFJO1lBQ1o7WUFFQTs7OztZQUlBQyxJQUFJQSxDQUFBO2NBQ0hSLFdBQUEsQ0FBQVMsWUFBWSxDQUFDQyxPQUFPLEdBQUcsS0FBSztjQUM1QixJQUFJLENBQUMsQ0FBQVAsS0FBTSxDQUFDUSxJQUFJLEVBQUU7WUFDbkI7WUFFQTs7O1lBR0FDLElBQUlBLENBQUEsR0FBSTs7VUFDUkMsT0FBQSxDQUFBWixVQUFBLEdBQUFBLFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDNUJELElBQUFhLE1BQUEsR0FBQWpCLE9BQUE7VUFDQSxJQUFBa0IsTUFBQSxHQUFBbEIsT0FBQTtVQUNBLElBQUFtQixlQUFBLEdBQUFuQixPQUFBO1VBQ0EsSUFBQW9CLFFBQUEsR0FBQXBCLE9BQUE7VUFDQSxJQUFBRyxXQUFBLEdBQUFILE9BQUE7VUFDTSxNQUFPUSxZQUFhLFNBQVFTLE1BQUEsQ0FBQUksYUFBMkI7WUFDNUQsQ0FBQUMsS0FBTTtZQUVOLElBQUlBLEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNO1lBQ25CO1lBRUEsSUFBSUMsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFELEtBQU0sQ0FBQ0UsV0FBVztZQUMvQjtZQUNBLENBQUFDLEtBQU0sR0FBK0IsSUFBSVAsTUFBQSxDQUFBUSxZQUFZLENBQUNQLGVBQUEsQ0FBQVEsTUFBTSxDQUFDQyxTQUFTLENBQUM7WUFDdkUsSUFBSUgsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU0sRUFBRUksS0FBSztZQUMxQjtZQUNBLENBQUFMLFdBQVk7WUFDWixJQUFJQSxXQUFXQSxDQUFBO2NBQ2QsT0FBTyxJQUFJLENBQUMsQ0FBQUEsV0FBWTtZQUN6QjtZQUVBLENBQUFNLE1BQU87WUFDUCxJQUFJQSxNQUFNQSxDQUFBO2NBQ1QsT0FBTyxJQUFJLENBQUMsQ0FBQUEsTUFBTztZQUNwQjtZQUVBLElBQUlDLElBQUlBLENBQUE7Y0FDUCxPQUFPWCxRQUFBLENBQUFZLGNBQWMsQ0FBQ0QsSUFBSTtZQUMzQjtZQUNBLElBQUlFLEtBQUtBLENBQUE7Y0FDUixPQUFPLEtBQUssQ0FBQ0EsS0FBSyxJQUFJLElBQUksQ0FBQyxDQUFBUixLQUFNLENBQUNRLEtBQUs7WUFDeEM7WUFDQUMsWUFBQTtjQUNDLEtBQUssRUFBRTtjQUNQLElBQUksQ0FBQyxDQUFBVCxLQUFNLENBQUNVLEVBQUUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDQyxZQUFZLENBQUM7WUFDNUM7WUFFQUMsYUFBYUEsQ0FBQTtjQUNaLE1BQU1DLFFBQVEsR0FBRyxJQUFJLENBQUNELGFBQWEsQ0FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQztjQUM5QyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUFkLEtBQU0sQ0FBQ1EsS0FBSyxFQUFFO2dCQUN2QixJQUFJLENBQUMsQ0FBQVIsS0FBTSxDQUFDVSxFQUFFLENBQUMsUUFBUSxFQUFFRyxRQUFRLENBQUM7Z0JBQ2xDOztjQUdELElBQUksQ0FBQyxDQUFBYixLQUFNLENBQUNlLEdBQUcsQ0FBQyxRQUFRLEVBQUVGLFFBQVEsQ0FBQztjQUNuQ25DLFdBQUEsQ0FBQVMsWUFBWSxDQUFDNkIsVUFBVSxHQUFHLEVBQUU7Y0FDNUJ0QyxXQUFBLENBQUFTLFlBQVksQ0FBQ0MsT0FBTyxHQUFHLEtBQUs7Y0FDNUI2QixVQUFVLENBQUNDLFVBQVUsQ0FBQyxNQUFPeEMsV0FBQSxDQUFBUyxZQUFZLENBQUM2QixVQUFVLEdBQUcsRUFBRyxFQUFFLEdBQUcsQ0FBQztZQUNqRTtZQUVBLE1BQU0zQixJQUFJQSxDQUFBO2NBQ1QsSUFBSTtnQkFDSCxJQUFJLENBQUMsQ0FBQVEsS0FBTSxHQUFHRixRQUFBLENBQUFZLGNBQWM7Z0JBQzVCLElBQUksQ0FBQ0ssYUFBYSxFQUFFO2dCQUNwQixNQUFNO2tCQUFFTyxNQUFNO2tCQUFFQztnQkFBSSxDQUFFLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQXZCLEtBQU0sQ0FBQ1MsSUFBSSxDQUFDZSxPQUFPLEVBQUU7Z0JBQ3pELElBQUksQ0FBQ0YsTUFBTSxFQUFFO2tCQUNaRyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxPQUFPLENBQUM7O2dCQUdyQixJQUFJLENBQUMsQ0FBQWxCLE1BQU8sR0FBR2UsSUFBSSxDQUFDZixNQUFNO2dCQUMxQixJQUFJLENBQUMsQ0FBQU4sV0FBWSxHQUFHcUIsSUFBSSxDQUFDckIsV0FBVztnQkFDcEMsS0FBSyxDQUFDUyxLQUFLLEdBQUcsSUFBSTtnQkFDbEIsSUFBSSxDQUFDRyxZQUFZLEVBQUU7Z0JBQ25CTSxVQUFVLENBQUNwQyxLQUFLLEdBQUcsSUFBSTtlQUN2QixDQUFDLE9BQU8yQyxDQUFDLEVBQUU7Z0JBQ1hGLE9BQU8sQ0FBQ0csS0FBSyxDQUFDRCxDQUFDLENBQUM7O1lBRWxCOztVQUNBakMsT0FBQSxDQUFBUixZQUFBLEdBQUFBLFlBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDeEVELElBQUEyQyxNQUFBLEdBQUFuRCxPQUFBO1VBQ0EsSUFBQW9ELFFBQUEsR0FBQXBELE9BQUE7VUFDQSxJQUFBcUQsR0FBQSxHQUFBckQsT0FBQTtVQUNBLElBQUFzRCxXQUFBLEdBQUF0RCxPQUFBO1VBQ00sU0FBVXVELFdBQVdBLENBQUE7WUFDMUIsTUFBTTtjQUNMakQsS0FBSztjQUNMbUIsS0FBSyxFQUFFO2dCQUFFSyxNQUFNLEVBQUVMO2NBQUs7WUFBRSxDQUN4QixHQUFHLElBQUEyQixRQUFBLENBQUFJLGdCQUFnQixHQUFFO1lBRXRCLElBQUksQ0FBQ2xELEtBQUssQ0FBQ3dCLE1BQU0sSUFBSSxDQUFDMkIsS0FBSyxDQUFDQyxPQUFPLENBQUNwRCxLQUFLLENBQUN3QixNQUFNLENBQUMsSUFBSSxDQUFDeEIsS0FBSyxDQUFDd0IsTUFBTSxDQUFDNkIsTUFBTSxFQUFFLE9BQU8sSUFBSTtZQUN0RixNQUFNQyxLQUFLLEdBQUd0RCxLQUFLLENBQUN3QixNQUFNLENBQUM2QixNQUFNO1lBQ2pDLE1BQU1FLEtBQUssR0FBR0EsQ0FBQSxLQUNiVixNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBNkIsR0FDM0NiLE1BQUEsQ0FBQVcsT0FBQSxDQUFBQyxhQUFBO2NBQU1DLFNBQVMsRUFBQztZQUFhLEdBQUV2QyxLQUFLLENBQUNvQyxLQUFLLENBQVEsQ0FFbkQ7WUFDRCxNQUFNSSxNQUFNLEdBQUcsQ0FBQ0wsS0FBSyxHQUNsQkMsS0FBSyxFQUFFLEdBQ1B2RCxLQUFLLENBQUN3QixNQUFNLENBQUNvQyxHQUFHLENBQUVDLEtBQVUsSUFBSTtjQUNoQyxNQUFNQyxPQUFPLEdBQ1osQ0FBQ0QsS0FBSyxDQUFDRSxXQUFXLElBQUlGLEtBQUssQ0FBQ0UsV0FBVyxLQUFLLEVBQUUsR0FBRzVDLEtBQUssQ0FBQ0YsS0FBSyxDQUFDOEMsV0FBVyxHQUFHRixLQUFLLENBQUNFLFdBQVc7Y0FDN0YsTUFBTUMsS0FBSyxHQUFHLENBQUNILEtBQUssQ0FBQ0csS0FBSyxJQUFJSCxLQUFLLENBQUNHLEtBQUssS0FBSyxFQUFFLEdBQUc3QyxLQUFLLENBQUNGLEtBQUssQ0FBQytDLEtBQUssR0FBR0gsS0FBSyxDQUFDRyxLQUFLO2NBRWxGLE9BQ0NuQixNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQSxDQUFDVCxXQUFBLENBQUFpQixJQUFJO2dCQUNKQyxJQUFJLEVBQUUsMEJBQTBCTCxLQUFLLENBQUNNLEVBQUUsRUFBRTtnQkFDMUNULFNBQVMsRUFBQyw0QkFBNEI7Z0JBQ3RDVSxHQUFHLEVBQUVQLEtBQUssQ0FBQ007Y0FBRSxHQUVidEIsTUFBQSxDQUFBVyxPQUFBLENBQUFDLGFBQUE7Z0JBQVNDLFNBQVMsRUFBQyxrQkFBa0I7Z0JBQUNVLEdBQUcsRUFBRVAsS0FBSyxDQUFDTTtjQUFFLEdBQ2xEdEIsTUFBQSxDQUFBVyxPQUFBLENBQUFDLGFBQUEsQ0FBQ1YsR0FBQSxDQUFBc0IsV0FBVztnQkFBQ0MsS0FBSyxFQUFDLFFBQVE7Z0JBQUNDLEdBQUcsRUFBRVYsS0FBSyxDQUFDVyxPQUFPO2dCQUFFQyxNQUFNLEVBQUM7Y0FBUSxFQUFHLEVBQ2xFNUIsTUFBQSxDQUFBVyxPQUFBLENBQUFDLGFBQUE7Z0JBQVNDLFNBQVMsRUFBQztjQUFlLEdBQ2pDYixNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQSxhQUFLTyxLQUFLLENBQU0sRUFDaEJuQixNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQTtnQkFBR0MsU0FBUyxFQUFDO2NBQWEsR0FBRUksT0FBTyxDQUFLLENBQy9CLENBQ0QsQ0FDSjtZQUVSLENBQUMsQ0FBQztZQUVMLE1BQU1ZLEdBQUcsR0FBRyxhQUFhcEIsS0FBSyxLQUFLLENBQUMsR0FBRyxvQkFBb0IsR0FBRyxFQUFFLEVBQUU7WUFFbEUsT0FDQ1QsTUFBQSxDQUFBVyxPQUFBLENBQUFDLGFBQUEsZ0JBQ0NaLE1BQUEsQ0FBQVcsT0FBQSxDQUFBQyxhQUFBO2NBQUtDLFNBQVMsRUFBRWdCO1lBQUcsR0FDbEI3QixNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQTtjQUFRQyxTQUFTLEVBQUM7WUFBb0IsR0FDckNiLE1BQUEsQ0FBQVcsT0FBQSxDQUFBQyxhQUFBLGFBQUt0QyxLQUFLLENBQUM2QyxLQUFLLENBQU0sRUFDdEJuQixNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQSxDQUFDVCxXQUFBLENBQUFpQixJQUFJO2NBQUNDLElBQUksRUFBQztZQUFxQixHQUFFL0MsS0FBSyxDQUFDd0QsTUFBTSxDQUFRLENBQzlDLEVBQ1Q5QixNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQTtjQUFTQyxTQUFTLEVBQUM7WUFBa0IsR0FBRUMsTUFBTSxDQUFXLENBQ25ELENBQ0M7VUFFVjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN0REEsSUFBQWQsTUFBQSxHQUFBbkQsT0FBQTtVQUNBLElBQUFrRixPQUFBLEdBQUFsRixPQUFBO1VBQ00sU0FBVW1GLEtBQUtBLENBQUE7WUFDcEIsT0FDQ2hDLE1BQUEsQ0FBQVcsT0FBQSxDQUFBQyxhQUFBLGdCQUNDWixNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQSxDQUFDbUIsT0FBQSxDQUFBM0IsV0FBVyxPQUFHLENBQ1I7VUFFVjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNSQSxJQUFBSixNQUFBLEdBQUFuRCxPQUFBO1VBQ0EsSUFBQW9ELFFBQUEsR0FBQXBELE9BQUE7VUFDQSxJQUFBb0YsS0FBQSxHQUFBcEYsT0FBQTtVQUNBLElBQUFxRixLQUFBLEdBQUFyRixPQUFBO1VBQ0EsSUFBQXNGLEtBQUEsR0FBQXRGLE9BQUE7VUFDQSxJQUFBb0IsUUFBQSxHQUFBcEIsT0FBQTtVQUNBLElBQUFxRCxHQUFBLEdBQUFyRCxPQUFBO1VBRU0sU0FBVXVGLE9BQU9BLENBQUE7WUFDdEIsTUFBTTtjQUNMakYsS0FBSyxFQUFFO2dCQUFFa0YsT0FBTztnQkFBRS9EO2NBQUs7WUFBRSxDQUN6QixHQUFHLElBQUEyQixRQUFBLENBQUFJLGdCQUFnQixHQUFFO1lBRXRCLElBQUksQ0FBQ2dDLE9BQU8sSUFBSSxDQUFDL0IsS0FBSyxDQUFDQyxPQUFPLENBQUM4QixPQUFPLENBQUMsSUFBSSxDQUFDQSxPQUFPLENBQUM3QixNQUFNLEVBQUUsT0FBTyxJQUFJO1lBQ3ZFLE1BQU1NLE1BQU0sR0FBRyxDQUFDLEdBQUd1QixPQUFPLENBQUM7WUFDM0IsTUFBTUMsT0FBTyxHQUFHckUsUUFBQSxDQUFBWSxjQUFjLEVBQUVELElBQUksRUFBRTJELEtBQUssRUFBRUMsUUFBUSxDQUFDLFNBQVMsQ0FBQztZQUVoRSxPQUNDeEMsTUFBQSxDQUFBVyxPQUFBLENBQUFDLGFBQUE7Y0FBU0MsU0FBUyxFQUFDO1lBQWlCLEdBQ25DYixNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQSxDQUFDVixHQUFBLENBQUF1QyxTQUFTO2NBQUN0QixLQUFLLEVBQUU3QyxLQUFLLENBQUMrRCxPQUFPLENBQUNsQixLQUFLO2NBQUV1QixFQUFFLEVBQUM7WUFBSSxHQUM1Q0osT0FBTyxJQUNQdEMsTUFBQSxDQUFBVyxPQUFBLENBQUFDLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQWlCLEdBQy9CYixNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQSxDQUFDdUIsS0FBQSxDQUFBZixJQUFJO2NBQUNDLElBQUksRUFBQztZQUFxQixHQUFFL0MsS0FBSyxDQUFDcUUsT0FBTyxDQUFDQyxNQUFNLENBQVEsQ0FFL0QsQ0FDVSxFQUVaNUMsTUFBQSxDQUFBVyxPQUFBLENBQUFDLGFBQUEsQ0FBQ3FCLEtBQUEsQ0FBQVksSUFBWTtjQUFDaEMsU0FBUyxFQUFDLDBCQUEwQjtjQUFDekMsS0FBSyxFQUFFMEMsTUFBTTtjQUFFZ0MsT0FBTyxFQUFFWixLQUFBLENBQUFhO1lBQWMsRUFBSSxDQUNwRjtVQUVaOzs7Ozs7Ozs7Ozs7Ozs7OztVQzlCQSxJQUFBN0MsR0FBQSxHQUFBckQsT0FBQTtVQUNBLElBQUFzRCxXQUFBLEdBQUF0RCxPQUFBO1VBQ0EsSUFBQW1ELE1BQUEsR0FBQW5ELE9BQUE7VUFDQSxJQUFBb0QsUUFBQSxHQUFBcEQsT0FBQTtVQUVPO1VBQVUsU0FDUmtHLGNBQWNBLENBQUM7WUFBRUM7VUFBSSxDQUFFO1lBQy9CLE1BQU07Y0FDTDdGLEtBQUssRUFBRTtnQkFBRW1CO2NBQUs7WUFBRSxDQUNoQixHQUFHLElBQUEyQixRQUFBLENBQUFJLGdCQUFnQixHQUFFO1lBRXRCLE1BQU07Y0FBRTdCLE1BQU07Y0FBRTJDO1lBQUssQ0FBRSxHQUFHNkIsSUFBSTtZQUU5QixPQUNDaEQsTUFBQSxDQUFBVyxPQUFBLENBQUFDLGFBQUE7Y0FBU0MsU0FBUyxFQUFDO1lBQWMsR0FDaENiLE1BQUEsQ0FBQVcsT0FBQSxDQUFBQyxhQUFBLENBQUNWLEdBQUEsQ0FBQXNCLFdBQVc7Y0FBQ0UsR0FBRyxFQUFFc0IsSUFBSSxDQUFDckIsT0FBTztjQUFFQyxNQUFNLEVBQUMsUUFBUTtjQUFDcUIsR0FBRyxFQUFFOUI7WUFBSyxFQUFJLEVBQzlEbkIsTUFBQSxDQUFBVyxPQUFBLENBQUFDLGFBQUE7Y0FBU0MsU0FBUyxFQUFDO1lBQXNCLEdBQ3hDYixNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQSxDQUFDVCxXQUFBLENBQUFpQixJQUFJO2NBQUNDLElBQUksRUFBRSw2QkFBNkIyQixJQUFJLENBQUMxQixFQUFFO1lBQUUsR0FDakR0QixNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQSxhQUFLcEMsTUFBTSxDQUFDMkMsS0FBSyxDQUFNLEVBQ3ZCbkIsTUFBQSxDQUFBVyxPQUFBLENBQUFDLGFBQUEsZUFBT3BDLE1BQU0sQ0FBQzBDLFdBQVcsQ0FBUSxDQUMzQixDQUNFLEVBQ1ZsQixNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQTtjQUFRQyxTQUFTLEVBQUM7WUFBZ0IsR0FDakNiLE1BQUEsQ0FBQVcsT0FBQSxDQUFBQyxhQUFBO2NBQU1DLFNBQVMsRUFBQztZQUFxQixHQUNuQ3ZDLEtBQUssQ0FBQ0QsV0FBVyxDQUFDNkUsVUFBVSxFLE1BQUkxRSxNQUFNLENBQUMwRSxVQUFVLENBQUNDLEtBQUssQ0FDbEQsQ0FDQyxDQUNBO1VBRVo7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDN0JBLElBQUFuRCxNQUFBLEdBQUFuRCxPQUFBO1VBQ0EsSUFBQW9ELFFBQUEsR0FBQXBELE9BQUE7VUFDQSxJQUFBb0YsS0FBQSxHQUFBcEYsT0FBQTtVQUNBLElBQUFxRixLQUFBLEdBQUFyRixPQUFBO1VBQ0EsSUFBQXNGLEtBQUEsR0FBQXRGLE9BQUE7VUFDQSxJQUFBb0IsUUFBQSxHQUFBcEIsT0FBQTtVQUNBLElBQUFxRCxHQUFBLEdBQUFyRCxPQUFBO1VBRU0sU0FBVXVHLFdBQVdBLENBQUE7WUFDMUIsTUFBTTtjQUNMakcsS0FBSyxFQUFFO2dCQUFFa0IsV0FBVztnQkFBRUM7Y0FBSztZQUFFLENBQzdCLEdBQUcsSUFBQTJCLFFBQUEsQ0FBQUksZ0JBQWdCLEdBQUU7WUFFdEIsSUFBSSxDQUFDaEMsV0FBVyxJQUFJLENBQUNpQyxLQUFLLENBQUNDLE9BQU8sQ0FBQ2xDLFdBQVcsQ0FBQyxJQUFJLENBQUNBLFdBQVcsQ0FBQ21DLE1BQU0sRUFBRSxPQUFPLElBQUk7WUFDbkYsTUFBTU0sTUFBTSxHQUFHLENBQUMsR0FBR3pDLFdBQVcsQ0FBQztZQUMvQixNQUFNaUUsT0FBTyxHQUFHckUsUUFBQSxDQUFBWSxjQUFjLEVBQUVELElBQUksRUFBRTJELEtBQUssRUFBRUMsUUFBUSxDQUFDLFNBQVMsQ0FBQztZQUVoRSxPQUNDeEMsTUFBQSxDQUFBVyxPQUFBLENBQUFDLGFBQUE7Y0FBU0MsU0FBUyxFQUFDO1lBQWlCLEdBQ25DYixNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQSxDQUFDVixHQUFBLENBQUF1QyxTQUFTO2NBQUN0QixLQUFLLEVBQUU3QyxLQUFLLENBQUNELFdBQVcsQ0FBQzhDLEtBQUs7Y0FBRXVCLEVBQUUsRUFBQztZQUFJLEdBQ2hESixPQUFPLElBQ1B0QyxNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBaUIsR0FDL0JiLE1BQUEsQ0FBQVcsT0FBQSxDQUFBQyxhQUFBLENBQUN1QixLQUFBLENBQUFmLElBQUk7Y0FBQ0MsSUFBSSxFQUFDO1lBQWMsR0FBRS9DLEtBQUssQ0FBQ3FFLE9BQU8sQ0FBQ0MsTUFBTSxDQUFRLENBRXhELENBQ1UsRUFFWjVDLE1BQUEsQ0FBQVcsT0FBQSxDQUFBQyxhQUFBLENBQUNxQixLQUFBLENBQUFZLElBQVk7Y0FBQ2hDLFNBQVMsRUFBQywwQkFBMEI7Y0FBQ3pDLEtBQUssRUFBRTBDLE1BQU07Y0FBRWdDLE9BQU8sRUFBRVosS0FBQSxDQUFBYTtZQUFjLEVBQUksQ0FDcEY7VUFFWjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM5QkEsSUFBQTdDLEdBQUEsR0FBQXJELE9BQUE7VUFDQSxJQUFBc0QsV0FBQSxHQUFBdEQsT0FBQTtVQUNBLElBQUFtRCxNQUFBLEdBQUFuRCxPQUFBO1VBQ0EsSUFBQW9ELFFBQUEsR0FBQXBELE9BQUE7VUFFTztVQUFVLFNBQ1JrRyxjQUFjQSxDQUFDO1lBQUVDO1VBQUksQ0FBRTtZQUMvQixNQUFNO2NBQ0w3RixLQUFLLEVBQUU7Z0JBQUVtQjtjQUFLO1lBQUUsQ0FDaEIsR0FBRyxJQUFBMkIsUUFBQSxDQUFBSSxnQkFBZ0IsR0FBRTtZQUV0QixNQUFNO2NBQUU3QixNQUFNO2NBQUUyQztZQUFLLENBQUUsR0FBRzZCLElBQUk7WUFFOUIsT0FDQ2hELE1BQUEsQ0FBQVcsT0FBQSxDQUFBQyxhQUFBO2NBQVNDLFNBQVMsRUFBQztZQUFjLEdBQ2hDYixNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQSxDQUFDVixHQUFBLENBQUFzQixXQUFXO2NBQUNFLEdBQUcsRUFBRXNCLElBQUksQ0FBQ3JCLE9BQU87Y0FBRUMsTUFBTSxFQUFDLFFBQVE7Y0FBQ3FCLEdBQUcsRUFBRTlCO1lBQUssRUFBSSxFQUM5RG5CLE1BQUEsQ0FBQVcsT0FBQSxDQUFBQyxhQUFBO2NBQVNDLFNBQVMsRUFBQztZQUFzQixHQUN4Q2IsTUFBQSxDQUFBVyxPQUFBLENBQUFDLGFBQUEsQ0FBQ1QsV0FBQSxDQUFBaUIsSUFBSTtjQUFDQyxJQUFJLEVBQUUsNkJBQTZCMkIsSUFBSSxDQUFDMUIsRUFBRTtZQUFFLEdBQ2pEdEIsTUFBQSxDQUFBVyxPQUFBLENBQUFDLGFBQUEsYUFBS3BDLE1BQU0sQ0FBQzJDLEtBQUssQ0FBTSxFQUN2Qm5CLE1BQUEsQ0FBQVcsT0FBQSxDQUFBQyxhQUFBLGVBQU9wQyxNQUFNLENBQUMwQyxXQUFXLENBQVEsQ0FDM0IsQ0FDRSxFQUNWbEIsTUFBQSxDQUFBVyxPQUFBLENBQUFDLGFBQUE7Y0FBUUMsU0FBUyxFQUFDO1lBQWdCLEdBQ2pDYixNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQTtjQUFNQyxTQUFTLEVBQUM7WUFBcUIsR0FDbkN2QyxLQUFLLENBQUNELFdBQVcsQ0FBQzZFLFVBQVUsRSxNQUFJMUUsTUFBTSxDQUFDMEUsVUFBVSxDQUFDQyxLQUFLLENBQ2xELENBQ0MsQ0FDQTtVQUVaOzs7Ozs7Ozs7Ozs7Ozs7OztVQzdCQSxJQUFBbkQsTUFBQSxHQUFBbkQsT0FBQTtVQVFPLE1BQU13RyxhQUFhLEdBQUF4RixPQUFBLENBQUF3RixhQUFBLEdBQUdyRCxNQUFBLENBQUFXLE9BQUssQ0FBQzJDLGFBQWEsQ0FBaUIsRUFBb0IsQ0FBQztVQUMvRSxNQUFNakQsZ0JBQWdCLEdBQUdBLENBQUEsS0FBTUwsTUFBQSxDQUFBVyxPQUFLLENBQUM0QyxVQUFVLENBQUNGLGFBQWEsQ0FBQztVQUFDeEYsT0FBQSxDQUFBd0MsZ0JBQUEsR0FBQUEsZ0JBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDVHRFLElBQUFILEdBQUEsR0FBQXJELE9BQUE7VUFDQSxJQUFBbUQsTUFBQSxHQUFBbkQsT0FBQTtVQUNBLElBQUEyRyxNQUFBLEdBQUEzRyxPQUFBO1VBQ0EsSUFBQW9ELFFBQUEsR0FBQXBELE9BQUE7VUFDQSxJQUFBc0QsV0FBQSxHQUFBdEQsT0FBQTtVQUVBLElBQUE0RyxTQUFBLEdBQUE1RyxPQUFBO1VBQ0EsSUFBQTZHLFdBQUEsR0FBQTdHLE9BQUE7VUFDQSxJQUFBOEcsTUFBQSxHQUFBOUcsT0FBQTtVQUVPO1VBQVUsU0FDUlUsSUFBSUEsQ0FBQztZQUFFSjtVQUFLLENBQTJCO1lBQy9DLE1BQU0sQ0FBQzJCLEtBQUssRUFBRThFLFFBQVEsQ0FBQyxHQUFHLElBQUE1RCxNQUFBLENBQUE2RCxRQUFRLEVBQVUxRyxLQUFLLENBQUMyQixLQUFLLENBQUM7WUFFeEQsTUFBTTtjQUFFUjtZQUFLLENBQUUsR0FBR25CLEtBQUs7WUFDdkIsSUFBQXFHLE1BQUEsQ0FBQU0sU0FBUyxFQUFDLENBQUMzRyxLQUFLLENBQUMsRUFBRSxNQUFNeUcsUUFBUSxDQUFDekcsS0FBSyxDQUFDMkIsS0FBSyxDQUFDLENBQUM7WUFFL0MsSUFBSSxDQUFDQSxLQUFLLEVBQUUsT0FBT2tCLE1BQUEsQ0FBQVcsT0FBQSxDQUFBQyxhQUFBLENBQUNULFdBQUEsQ0FBQTRELE9BQU87Y0FBQ0MsTUFBTTtZQUFBLEVBQUc7WUFFckMsTUFBTTtjQUFFM0Y7WUFBVyxDQUFFLEdBQUdsQixLQUFLLENBQUNnQixLQUFLO1lBQ25DLE1BQU04RixZQUFZLEdBQUc7Y0FDcEI5RyxLQUFLO2NBQ0wrRyxRQUFRLEVBQUUvRyxLQUFLLENBQUMrRyxRQUFRO2NBQ3hCNUYsS0FBSztjQUNMRixLQUFLLEVBQUVDO2FBQ1A7WUFFRCxPQUNDMkIsTUFBQSxDQUFBVyxPQUFBLENBQUFDLGFBQUEsQ0FBQ1gsUUFBQSxDQUFBb0QsYUFBYSxDQUFDYyxRQUFRO2NBQUN6RixLQUFLLEVBQUV1RjtZQUFZLEdBQzFDakUsTUFBQSxDQUFBVyxPQUFBLENBQUFDLGFBQUEsQ0FBQ1YsR0FBQSxDQUFBa0UsYUFBYTtjQUFDdkQsU0FBUyxFQUFDO1lBQVksR0FDcENiLE1BQUEsQ0FBQVcsT0FBQSxDQUFBQyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUE0QixHQUMxQ2IsTUFBQSxDQUFBVyxPQUFBLENBQUFDLGFBQUEsZUFDQ1osTUFBQSxDQUFBVyxPQUFBLENBQUFDLGFBQUEsQ0FBQzZDLFNBQUEsQ0FBQVksUUFBUSxPQUFHLEVBQ1pyRSxNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQSxDQUFDOEMsV0FBQSxDQUFBTixXQUFXLE9BQUcsQ0FDVCxFQUNQcEQsTUFBQSxDQUFBVyxPQUFBLENBQUFDLGFBQUEsQ0FBQytDLE1BQUEsQ0FBQTNCLEtBQUssT0FBRyxDQUNKLENBQ1MsQ0FDUTtVQUUzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN2Q0EsSUFBQWhDLE1BQUEsR0FBQW5ELE9BQUE7VUFFQSxJQUFBb0QsUUFBQSxHQUFBcEQsT0FBQTtVQUdBLElBQUF5SCxNQUFBLEdBQUF6SCxPQUFBO1VBRU87VUFBVSxTQUNSd0gsUUFBUUEsQ0FBQTtZQUNoQixNQUFNO2NBQ0xsSCxLQUFLLEVBQUU7Z0JBQUV5QixJQUFJO2dCQUFFTjtjQUFLO1lBQUUsQ0FDdEIsR0FBRyxJQUFBMkIsUUFBQSxDQUFBSSxnQkFBZ0IsR0FBRTtZQUV0QixPQUNDTCxNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQTtjQUFTQyxTQUFTLEVBQUM7WUFBYyxHQUNoQ2IsTUFBQSxDQUFBVyxPQUFBLENBQUFDLGFBQUEsQ0FBQzBELE1BQUEsQ0FBQUMsS0FBSztjQUFDMUQsU0FBUyxFQUFDLG1CQUFtQjtjQUFDYSxHQUFHLEVBQUU5QyxJQUFJLENBQUM0RixRQUFRO2NBQUV2QixHQUFHLEVBQUM7WUFBaUIsRUFBRyxFQUNqRmpELE1BQUEsQ0FBQVcsT0FBQSxDQUFBQyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUF1QixHQUNyQ2IsTUFBQSxDQUFBVyxPQUFBLENBQUFDLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQVMsR0FDdkJiLE1BQUEsQ0FBQVcsT0FBQSxDQUFBQyxhQUFBLGFBQUtoQyxJQUFJLENBQUM2RixXQUFXLENBQU0sRUFDM0J6RSxNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQTtjQUFNQyxTQUFTLEVBQUM7WUFBSSxHQUFFakMsSUFBSSxDQUFDOEYsS0FBSyxDQUFRLENBQ25DLEVBQ04xRSxNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBZSxHQUM3QmIsTUFBQSxDQUFBVyxPQUFBLENBQUFDLGFBQUE7Y0FBTVMsSUFBSSxFQUFDO1lBQUssR0FBRS9DLEtBQUssQ0FBQ3FHLE9BQU8sQ0FBQ0MsSUFBSSxDQUFRLENBQ3ZDLENBQ0QsQ0FDRztVQUVaOzs7Ozs7Ozs7Ozs7Ozs7OztVQzNCQSxJQUFBNUUsTUFBQSxHQUFBbkQsT0FBQTtVQUVBLElBQUFvRCxRQUFBLEdBQUFwRCxPQUFBO1VBR0EsSUFBQXlILE1BQUEsR0FBQXpILE9BQUE7VUFFTztVQUFVLFNBQ1J3SCxRQUFRQSxDQUFBO1lBQ2hCLE1BQU07Y0FDTGxILEtBQUssRUFBRTtnQkFBRXlCLElBQUk7Z0JBQUVOO2NBQUs7WUFBRSxDQUN0QixHQUFHLElBQUEyQixRQUFBLENBQUFJLGdCQUFnQixHQUFFO1lBRXRCLE9BQ0NMLE1BQUEsQ0FBQVcsT0FBQSxDQUFBQyxhQUFBO2NBQVNDLFNBQVMsRUFBQztZQUFjLEdBQ2hDYixNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQSxDQUFDMEQsTUFBQSxDQUFBQyxLQUFLO2NBQUMxRCxTQUFTLEVBQUMsbUJBQW1CO2NBQUNhLEdBQUcsRUFBRTlDLElBQUksQ0FBQzRGLFFBQVE7Y0FBRXZCLEdBQUcsRUFBQztZQUFpQixFQUFHLEVBQ2pGakQsTUFBQSxDQUFBVyxPQUFBLENBQUFDLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQXVCLEdBQ3JDYixNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBUyxHQUN2QmIsTUFBQSxDQUFBVyxPQUFBLENBQUFDLGFBQUEsYUFBS2hDLElBQUksQ0FBQzZGLFdBQVcsQ0FBTSxFQUMzQnpFLE1BQUEsQ0FBQVcsT0FBQSxDQUFBQyxhQUFBO2NBQU1DLFNBQVMsRUFBQztZQUFJLEdBQUVqQyxJQUFJLENBQUM4RixLQUFLLENBQVEsQ0FDbkMsRUFDTjFFLE1BQUEsQ0FBQVcsT0FBQSxDQUFBQyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUFlLEdBQzdCYixNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQTtjQUFNUyxJQUFJLEVBQUM7WUFBSyxHQUFFL0MsS0FBSyxDQUFDcUcsT0FBTyxDQUFDQyxJQUFJLENBQVEsQ0FDdkMsQ0FDRCxDQUNHO1VBRVo7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDNUJBLElBQUE1RSxNQUFBLEdBQUFuRCxPQUFBO1VBQ0EsSUFBQW9ELFFBQUEsR0FBQXBELE9BQUE7VUFDQSxJQUFBeUgsTUFBQSxHQUFBekgsT0FBQTtVQUNBLElBQUFzRixLQUFBLEdBQUF0RixPQUFBO1VBQ087VUFBVSxTQUNSd0gsUUFBUUEsQ0FBQTtZQUNoQixNQUFNO2NBQ0xsSCxLQUFLLEVBQUU7Z0JBQUV5QixJQUFJO2dCQUFFTjtjQUFLO1lBQUUsQ0FDdEIsR0FBRyxJQUFBMkIsUUFBQSxDQUFBSSxnQkFBZ0IsR0FBRTtZQUV0QixPQUNDTCxNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQTtjQUFTQyxTQUFTLEVBQUM7WUFBYyxHQUNoQ2IsTUFBQSxDQUFBVyxPQUFBLENBQUFDLGFBQUEsQ0FBQzBELE1BQUEsQ0FBQUMsS0FBSztjQUFDMUQsU0FBUyxFQUFDLG1CQUFtQjtjQUFDYSxHQUFHLEVBQUU5QyxJQUFJLENBQUM0RixRQUFRO2NBQUV2QixHQUFHLEVBQUM7WUFBaUIsRUFBRyxFQUNqRmpELE1BQUEsQ0FBQVcsT0FBQSxDQUFBQyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUF5RCxHQUN2RWIsTUFBQSxDQUFBVyxPQUFBLENBQUFDLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQVMsR0FDdkJiLE1BQUEsQ0FBQVcsT0FBQSxDQUFBQyxhQUFBLGFBQUtoQyxJQUFJLENBQUM2RixXQUFXLENBQU0sRUFDM0J6RSxNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQTtjQUFNQyxTQUFTLEVBQUM7WUFBSSxHQUFFakMsSUFBSSxDQUFDOEYsS0FBSyxDQUFRLENBQ25DLEVBQ04xRSxNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBZSxHQUM3QmIsTUFBQSxDQUFBVyxPQUFBLENBQUFDLGFBQUEsQ0FBQ3VCLEtBQUEsQ0FBQWYsSUFBSTtjQUFDQyxJQUFJLEVBQUM7WUFBVyxHQUFFL0MsS0FBSyxDQUFDcUcsT0FBTyxDQUFDQyxJQUFJLENBQVEsQ0FDN0MsQ0FDRCxDQUNHO1VBRVoiLCJpZ25vcmVMaXN0IjpbXX0=