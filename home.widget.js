System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.0.46.dev-10/main-layout.widget", "@beyond-js/reactive@1.1.12/model", "@beyond-js/kernel@0.1.9/texts", "@aimpact/chat-sdk@1.0.0/session", "react@18.2.0", "@aimpact/ailearn-app@0.0.46.dev-10/components/ui", "pragmate-ui@0.1.1/components", "pragmate-ui@0.1.1/list", "pragmate-ui@0.1.1/link", "swiper@8.4.7", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@0.1.1/image"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, bimport, __Bundle, __pkg, ims, Controller, AssignmentItem, View, ModuleItem, UserCard, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    AssignmentItem: void 0,
    View: void 0,
    ModuleItem: void 0,
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
    }, function (_aimpactAilearnApp0046Dev10MainLayoutWidget) {
      dependency_4 = _aimpactAilearnApp0046Dev10MainLayoutWidget;
    }, function (_beyondJsReactive1112Model) {
      dependency_5 = _beyondJsReactive1112Model;
    }, function (_beyondJsKernel019Texts) {
      dependency_6 = _beyondJsKernel019Texts;
    }, function (_aimpactChatSdk100Session) {
      dependency_7 = _aimpactChatSdk100Session;
    }, function (_react2) {
      dependency_8 = _react2;
    }, function (_aimpactAilearnApp0046Dev10ComponentsUi) {
      dependency_9 = _aimpactAilearnApp0046Dev10ComponentsUi;
    }, function (_pragmateUi011Components) {
      dependency_10 = _pragmateUi011Components;
    }, function (_pragmateUi011List) {
      dependency_11 = _pragmateUi011List;
    }, function (_pragmateUi011Link) {
      dependency_12 = _pragmateUi011Link;
    }, function (_swiper) {
      dependency_13 = _swiper;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_14 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi011Image) {
      dependency_15 = _pragmateUi011Image;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.0.46.dev-10"], ["@aimpact/ailearn-app", "0.0.46.dev-10"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.46.dev-10/home",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/main-layout.widget', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@beyond-js/kernel/texts', dependency_6], ['@aimpact/chat-sdk/session', dependency_7], ['react', dependency_8], ['@aimpact/ailearn-app/components/ui', dependency_9], ['pragmate-ui/components', dependency_10], ['pragmate-ui/list', dependency_11], ['pragmate-ui/link', dependency_12], ['swiper', dependency_13], ['@beyond-js/react-18-widgets/hooks', dependency_14], ['pragmate-ui/image', dependency_15]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "student-home",
        "vspecifier": "@aimpact/ailearn-app@0.0.46.dev-10/home.widget",
        "is": "page",
        "route": "/",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.46.dev-10/home.widget');
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
        hash: 472067735,
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
            #classrooms;
            get classrooms() {
              return this.#classrooms;
            }
            #modules;
            get modules() {
              return this.#modules;
            }
            get user() {
              return _session.sessionWrapper.user;
            }
            get isTeacher() {
              return this.user?.roles.includes('teacher');
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
                this.#classrooms = data.classrooms;
                this.#modules = data.modules;
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

      /****************************************
      INTERNAL MODULE: ./views/aside/classrooms
      ****************************************/

      ims.set('./views/aside/classrooms', {
        hash: 367953573,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AsideClassrooms = AsideClassrooms;
          var _react = require("react");
          var _context = require("../context");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _components = require("pragmate-ui/components");
          function AsideClassrooms() {
            const {
              store,
              texts: {
                classrooms: texts
              }
            } = (0, _context.useModuleContext)();
            if (!store.isTeacher) return null;
            const classrooms = Array.isArray(store.classrooms) ? store.classrooms : [];
            const total = classrooms.length;
            const empty = () => _react.default.createElement("div", {
              className: "aside-list__empty-container"
            }, _react.default.createElement("span", {
              className: "empty__list"
            }, texts.empty));
            const output = !total ? empty() : classrooms.map(item => {
              const content = !item.description || item.description === '' ? texts.items.description : item.description;
              const title = !item.name || item.name === '' ? texts.items.name : item.name;
              return _react.default.createElement(_components.Link, {
                href: `/modules/management?id=${item.id}`,
                className: "aside-list__item-container",
                key: item.id
              }, _react.default.createElement("article", {
                className: "aside-list__item",
                key: item.id
              }, _react.default.createElement(_ui.EntityImage, {
                ratio: "square",
                src: item.picture,
                entity: "module"
              }), _react.default.createElement("section", {
                className: "item__content"
              }, _react.default.createElement("h6", null, title), _react.default.createElement("p", {
                className: "description"
              }, content))));
            });
            const cls = `aside-list${total === 0 ? ' aside-list--empty' : ''}`;
            return _react.default.createElement("div", {
              className: cls
            }, _react.default.createElement("header", {
              className: "aside-list__header"
            }, _react.default.createElement("h5", null, texts.title), _react.default.createElement(_components.Link, {
              href: "/modules/management"
            }, texts.action)), _react.default.createElement("section", {
              className: "aside-list__body"
            }, output));
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./views/aside/drafts
      ************************************/

      ims.set('./views/aside/drafts', {
        hash: 248115082,
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
            if (!store.isTeacher) return null;
            const drafts = Array.isArray(store.drafts) ? store.drafts : [];
            const total = drafts.length;
            const empty = () => _react.default.createElement("div", {
              className: "aside-list__empty-container"
            }, _react.default.createElement("span", {
              className: "empty__list"
            }, texts.empty));
            const output = !total ? empty() : drafts.map(draft => {
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
            return _react.default.createElement("div", {
              className: cls
            }, _react.default.createElement("header", {
              className: "aside-list__header"
            }, _react.default.createElement("h5", null, texts.title), _react.default.createElement(_components.Link, {
              href: "/modules/management"
            }, texts.action)), _react.default.createElement("section", {
              className: "aside-list__body"
            }, output));
          }
        }
      });

      /***********************************
      INTERNAL MODULE: ./views/aside/index
      ***********************************/

      ims.set('./views/aside/index', {
        hash: 488478691,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Aside = Aside;
          var _react = require("react");
          var _drafts = require("./drafts");
          var _classrooms = require("./classrooms");
          function Aside() {
            return _react.default.createElement("aside", {
              className: "home__aside"
            }, _react.default.createElement("div", {
              className: "sticky-container"
            }, _react.default.createElement(_drafts.AsideDrafts, null), _react.default.createElement(_classrooms.AsideClassrooms, null)));
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/assigments/index
      ****************************************/

      ims.set('./views/assigments/index', {
        hash: 3754274549,
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
            // const ref = React.useRef(null);
            // React.useEffect(() => {
            // 	new Swiper(ref.current, {
            // 		// Optional parameters
            // 		loop: true,
            // 		grid: {
            // 			fill: 'row'
            // 		},
            // 		// If we need pagination
            // 		pagination: {
            // 			el: '.swiper-pagination'
            // 		},
            // 		// Navigation arrows
            // 		navigation: {
            // 			nextEl: '.swiper-button-next',
            // 			prevEl: '.swiper-button-prev'
            // 		},
            // 		// And if we need scrollbar
            // 		scrollbar: {
            // 			el: '.swiper-scrollbar'
            // 		}
            // 	});
            // }, []);
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
        hash: 29682655,
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
              href: `/assignments/${item.id}`
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
        hash: 3925577069,
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
          var _modules = require("./modules");
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
            }, _react.default.createElement("main", null, _react.default.createElement(_userCard.UserCard, null), _react.default.createElement(_assigments.Assignments, null), _react.default.createElement(_modules.Modules, null)), _react.default.createElement(_aside.Aside, null))));
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./views/modules/index
      *************************************/

      ims.set('./views/modules/index', {
        hash: 1915269594,
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
              control: _item.ModuleItem
            }));
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./views/modules/item
      ************************************/

      ims.set('./views/modules/item', {
        hash: 3362509668,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleItem = ModuleItem;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _components = require("pragmate-ui/components");
          var _react = require("react");
          var _context = require("../context");
          /*bundle*/
          function ModuleItem({
            item
          }) {
            const {
              store: {
                texts
              }
            } = (0, _context.useModuleContext)();
            const {
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
            }, _react.default.createElement("h4", null, item.title), _react.default.createElement("span", null, item.description))), _react.default.createElement("footer", {
              className: "entity__footer"
            }, _react.default.createElement("span", {
              className: "card-number__detail"
            }, texts.modules.activities, ": ", item.activities.count)));
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
        "im": "./views/assigments/item",
        "from": "AssignmentItem",
        "name": "AssignmentItem"
      }, {
        "im": "./views/index",
        "from": "View",
        "name": "View"
      }, {
        "im": "./views/modules/item",
        "from": "ModuleItem",
        "name": "ModuleItem"
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
        (require || prop === 'AssignmentItem') && _export("AssignmentItem", AssignmentItem = require ? require('./views/assigments/item').AssignmentItem : value);
        (require || prop === 'View') && _export("View", View = require ? require('./views/index').View : value);
        (require || prop === 'ModuleItem') && _export("ModuleItem", ModuleItem = require ? require('./views/modules/item').ModuleItem : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJfbWFpbkxheW91dCIsIkNvbnRyb2xsZXIiLCJQYWdlUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsIlZpZXciLCJzaG93IiwiTGF5b3V0QnJva2VyIiwib3ZlcmxheSIsImxvYWQiLCJoaWRlIiwiZXhwb3J0cyIsIl9tb2RlbCIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsIl9zZXNzaW9uIiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwiaXRlbXMiLCJhc3NpZ25tZW50cyIsInRleHRzIiwiQ3VycmVudFRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidmFsdWUiLCJkcmFmdHMiLCJjbGFzc3Jvb21zIiwibW9kdWxlcyIsInVzZXIiLCJzZXNzaW9uV3JhcHBlciIsImlzVGVhY2hlciIsInJvbGVzIiwiaW5jbHVkZXMiLCJyZWFkeSIsImNvbnN0cnVjdG9yIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJzZXRCcmVhZGNydW1iIiwib25DaGFuZ2UiLCJiaW5kIiwib2ZmIiwiYnJlYWRjcnVtYiIsImdsb2JhbFRoaXMiLCJzZXRUaW1lb3V0Iiwic3RhdHVzIiwiZGF0YSIsImdldEhvbWUiLCJjb25zb2xlIiwibG9nIiwiZSIsImVycm9yIiwiX3JlYWN0IiwiX2NvbnRleHQiLCJfdWkiLCJfY29tcG9uZW50cyIsIkFzaWRlQ2xhc3Nyb29tcyIsInVzZU1vZHVsZUNvbnRleHQiLCJBcnJheSIsImlzQXJyYXkiLCJ0b3RhbCIsImxlbmd0aCIsImVtcHR5IiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJvdXRwdXQiLCJtYXAiLCJpdGVtIiwiY29udGVudCIsImRlc2NyaXB0aW9uIiwidGl0bGUiLCJuYW1lIiwiTGluayIsImhyZWYiLCJpZCIsImtleSIsIkVudGl0eUltYWdlIiwicmF0aW8iLCJzcmMiLCJwaWN0dXJlIiwiZW50aXR5IiwiY2xzIiwiYWN0aW9uIiwiQXNpZGVEcmFmdHMiLCJkcmFmdCIsIl9kcmFmdHMiLCJfY2xhc3Nyb29tcyIsIkFzaWRlIiwiX2xpc3QiLCJfaXRlbSIsIl9saW5rIiwiQXNzaWdubWVudHMiLCJpc0FkbWluIiwiUGFnZVRpdGxlIiwiYXMiLCJhY3Rpb25zIiwiY3JlYXRlIiwiTGlzdCIsImNvbnRyb2wiLCJBc3NpZ25tZW50SXRlbSIsImFsdCIsImFjdGl2aXRpZXMiLCJjb3VudCIsIk1vZHVsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9ob29rcyIsIl91c2VyQ2FyZCIsIl9hc3NpZ21lbnRzIiwiX2FzaWRlIiwiX21vZHVsZXMiLCJzZXRSZWFkeSIsInVzZVN0YXRlIiwidXNlQmluZGVyIiwiU3Bpbm5lciIsImFjdGl2ZSIsImNvbnRleHRWYWx1ZSIsImZldGNoaW5nIiwiUHJvdmlkZXIiLCJQYWdlQ29udGFpbmVyIiwiVXNlckNhcmQiLCJNb2R1bGVzIiwiTW9kdWxlSXRlbSIsIl9pbWFnZSIsIkltYWdlIiwicGhvdG9VUkwiLCJkaXNwbGF5TmFtZSIsImVtYWlsIiwicHJvZmlsZSIsImVkaXQiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9hc2lkZS9jbGFzc3Jvb21zLnRzeCIsIi90cy92aWV3cy9hc2lkZS9kcmFmdHMudHN4IiwiL3RzL3ZpZXdzL2FzaWRlL2luZGV4LnRzeCIsIi90cy92aWV3cy9hc3NpZ21lbnRzL2luZGV4LnRzeCIsIi90cy92aWV3cy9hc3NpZ21lbnRzL2l0ZW0udHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL21vZHVsZXMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL21vZHVsZXMvaXRlbS50c3giLCIvdHMvdmlld3Mvc2VjdGlvbnMvZHJhZnRzLnRzeCIsIi90cy92aWV3cy9zZWN0aW9ucy9tb2R1bGVzLnRzeCIsIi90cy92aWV3cy9zZWN0aW9ucy91c2VyLWNhcmQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQUcsV0FBQSxHQUFBSCxPQUFBO1VBRU87VUFBVSxNQUNYSSxVQUFXLFNBQVFMLEtBQUEsQ0FBQU0seUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUwsTUFBQSxDQUFBTyxZQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNuQjtZQUNBLElBQUlHLE1BQU1BLENBQUE7Y0FDVCxPQUFPUCxNQUFBLENBQUFRLElBQUk7WUFDWjtZQUVBOzs7O1lBSUFDLElBQUlBLENBQUE7Y0FDSFIsV0FBQSxDQUFBUyxZQUFZLENBQUNDLE9BQU8sR0FBRyxLQUFLO2NBQzVCLElBQUksQ0FBQyxDQUFBUCxLQUFNLENBQUNRLElBQUksRUFBRTtZQUNuQjtZQUVBOzs7WUFHQUMsSUFBSUEsQ0FBQSxHQUFJOztVQUNSQyxPQUFBLENBQUFaLFVBQUEsR0FBQUEsVUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM1QkQsSUFBQWEsTUFBQSxHQUFBakIsT0FBQTtVQUNBLElBQUFrQixNQUFBLEdBQUFsQixPQUFBO1VBQ0EsSUFBQW1CLGVBQUEsR0FBQW5CLE9BQUE7VUFDQSxJQUFBb0IsUUFBQSxHQUFBcEIsT0FBQTtVQUNBLElBQUFHLFdBQUEsR0FB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