System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.0.46.dev-11/main-layout.widget", "@beyond-js/reactive@1.1.12/model", "@beyond-js/kernel@0.1.9/texts", "@aimpact/chat-sdk@1.0.0/session", "react@18.2.0", "@aimpact/ailearn-app@0.0.46.dev-11/components/ui", "pragmate-ui@0.1.1/components", "pragmate-ui@0.1.1/list", "pragmate-ui@0.1.1/link", "swiper@8.4.7", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/ailearn-app@0.0.46.dev-11/modules/assign", "pragmate-ui@0.1.1/image"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, bimport, __Bundle, __pkg, ims, Controller, AssignmentItem, View, ModuleItem, UserCard, __beyond_pkg, hmr;
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
    }, function (_aimpactAilearnApp0046Dev11MainLayoutWidget) {
      dependency_4 = _aimpactAilearnApp0046Dev11MainLayoutWidget;
    }, function (_beyondJsReactive1112Model) {
      dependency_5 = _beyondJsReactive1112Model;
    }, function (_beyondJsKernel019Texts) {
      dependency_6 = _beyondJsKernel019Texts;
    }, function (_aimpactChatSdk100Session) {
      dependency_7 = _aimpactChatSdk100Session;
    }, function (_react2) {
      dependency_8 = _react2;
    }, function (_aimpactAilearnApp0046Dev11ComponentsUi) {
      dependency_9 = _aimpactAilearnApp0046Dev11ComponentsUi;
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
    }, function (_aimpactAilearnApp0046Dev11ModulesAssign) {
      dependency_15 = _aimpactAilearnApp0046Dev11ModulesAssign;
    }, function (_pragmateUi011Image) {
      dependency_16 = _pragmateUi011Image;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.0.46.dev-11"], ["@aimpact/ailearn-app", "0.0.46.dev-11"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.46.dev-11/home",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/main-layout.widget', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@beyond-js/kernel/texts', dependency_6], ['@aimpact/chat-sdk/session', dependency_7], ['react', dependency_8], ['@aimpact/ailearn-app/components/ui', dependency_9], ['pragmate-ui/components', dependency_10], ['pragmate-ui/list', dependency_11], ['pragmate-ui/link', dependency_12], ['swiper', dependency_13], ['@beyond-js/react-18-widgets/hooks', dependency_14], ['@aimpact/ailearn-app/modules/assign', dependency_15], ['pragmate-ui/image', dependency_16]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "student-home",
        "vspecifier": "@aimpact/ailearn-app@0.0.46.dev-11/home.widget",
        "is": "page",
        "route": "/",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.46.dev-11/home.widget');
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
        hash: 975421195,
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
            }, _react.default.createElement("h5", null, texts.title)), _react.default.createElement("section", {
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
        hash: 3813091238,
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

      /***************************************
      INTERNAL MODULE: ./views/modules/actions
      ***************************************/

      ims.set('./views/modules/actions', {
        hash: 101297598,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = LearningModuleActions;
          var React = require("react");
          var _components = require("pragmate-ui/components");
          var _assign = require("@aimpact/ailearn-app/modules/assign");
          var _context = require("../context");
          function LearningModuleActions({
            module
          }) {
            const {
              texts
            } = (0, _context.useModuleContext)();
            const [openModal, setOpenModal] = React.useState(false);
            const share = event => {
              event.stopPropagation();
              setOpenModal(true);
            };
            const toggleModal = () => setOpenModal(!openModal);
            return React.createElement("footer", {
              className: "entity__footer entity__footer--right"
            }, React.createElement(_components.Button, {
              variant: "primary",
              bordered: true,
              onClick: share
            }, texts.actions.assign), openModal && React.createElement(_assign.ModuleAssignments, {
              module: module,
              onClose: toggleModal,
              texts: texts.assign
            }));
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
        hash: 1399006149,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleItem = ModuleItem;
          var _ui = require("@aimpact/ailearn-app/components/ui");
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
            }, _react.default.createElement("h4", null, item.title), _react.default.createElement("span", null, item.description)), _react.default.createElement("footer", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJfbWFpbkxheW91dCIsIkNvbnRyb2xsZXIiLCJQYWdlUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsIlZpZXciLCJzaG93IiwiTGF5b3V0QnJva2VyIiwib3ZlcmxheSIsImxvYWQiLCJoaWRlIiwiZXhwb3J0cyIsIl9tb2RlbCIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsIl9zZXNzaW9uIiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwiaXRlbXMiLCJhc3NpZ25tZW50cyIsInRleHRzIiwiQ3VycmVudFRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidmFsdWUiLCJkcmFmdHMiLCJjbGFzc3Jvb21zIiwibW9kdWxlcyIsInVzZXIiLCJzZXNzaW9uV3JhcHBlciIsImlzVGVhY2hlciIsInJvbGVzIiwiaW5jbHVkZXMiLCJyZWFkeSIsImNvbnN0cnVjdG9yIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJzZXRCcmVhZGNydW1iIiwib25DaGFuZ2UiLCJiaW5kIiwib2ZmIiwiYnJlYWRjcnVtYiIsImdsb2JhbFRoaXMiLCJzZXRUaW1lb3V0Iiwic3RhdHVzIiwiZGF0YSIsImdldEhvbWUiLCJjb25zb2xlIiwibG9nIiwiZSIsImVycm9yIiwiX3JlYWN0IiwiX2NvbnRleHQiLCJfdWkiLCJfY29tcG9uZW50cyIsIkFzaWRlQ2xhc3Nyb29tcyIsInVzZU1vZHVsZUNvbnRleHQiLCJBcnJheSIsImlzQXJyYXkiLCJ0b3RhbCIsImxlbmd0aCIsImVtcHR5IiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJvdXRwdXQiLCJtYXAiLCJpdGVtIiwiY29udGVudCIsImRlc2NyaXB0aW9uIiwidGl0bGUiLCJuYW1lIiwiTGluayIsImhyZWYiLCJpZCIsImtleSIsIkVudGl0eUltYWdlIiwicmF0aW8iLCJzcmMiLCJwaWN0dXJlIiwiZW50aXR5IiwiY2xzIiwiYWN0aW9uIiwiQXNpZGVEcmFmdHMiLCJkcmFmdCIsIl9kcmFmdHMiLCJfY2xhc3Nyb29tcyIsIkFzaWRlIiwiX2xpc3QiLCJfaXRlbSIsIl9saW5rIiwiQXNzaWdubWVudHMiLCJpc0FkbWluIiwiUGFnZVRpdGxlIiwiYXMiLCJhY3Rpb25zIiwiY3JlYXRlIiwiTGlzdCIsImNvbnRyb2wiLCJBc3NpZ25tZW50SXRlbSIsImFsdCIsImFjdGl2aXRpZXMiLCJjb3VudCIsIk1vZHVsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9ob29rcyIsIl91c2VyQ2FyZCIsIl9hc3NpZ21lbnRzIiwiX2FzaWRlIiwiX21vZHVsZXMiLCJzZXRSZWFkeSIsInVzZVN0YXRlIiwidXNlQmluZGVyIiwiU3Bpbm5lciIsImFjdGl2ZSIsImNvbnRleHRWYWx1ZSIsImZldGNoaW5nIiwiUHJvdmlkZXIiLCJQYWdlQ29udGFpbmVyIiwiVXNlckNhcmQiLCJNb2R1bGVzIiwiUmVhY3QiLCJfYXNzaWduIiwiTGVhcm5pbmdNb2R1bGVBY3Rpb25zIiwib3Blbk1vZGFsIiwic2V0T3Blbk1vZGFsIiwic2hhcmUiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsInRvZ2dsZU1vZGFsIiwiQnV0dG9uIiwidmFyaWFudCIsImJvcmRlcmVkIiwib25DbGljayIsImFzc2lnbiIsIk1vZHVsZUFzc2lnbm1lbnRzIiwib25DbG9zZSIsIk1vZHVsZUl0ZW0iLCJfaW1hZ2UiLCJJbWFnZSIsInBob3RvVVJMIiwiZGlzcGxheU5hbWUiLCJlbWFpbCIsInByb2ZpbGUiLCJlZGl0Il0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvYXNpZGUvY2xhc3Nyb29tcy50c3giLCIvdHMvdmlld3MvYXNpZGUvZHJhZnRzLnRzeCIsIi90cy92aWV3cy9hc2lkZS9pbmRleC50c3giLCIvdHMvdmlld3MvYXNzaWdtZW50cy9pbmRleC50c3giLCIvdHMvdmlld3MvYXNzaWdtZW50cy9pdGVtLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9tb2R1bGVzL2FjdGlvbnMudHN4IiwiL3RzL3ZpZXdzL21vZHVsZXMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL21vZHVsZXMvaXRlbS50c3giLCIvdHMvdmlld3Mvc2VjdGlvbnMvZHJhZnRzLnRzeCIsIi90cy92aWV3cy9zZWN0aW9ucy9tb2R1bGVzLnRzeCIsIi90cy92aWV3cy9zZWN0aW9ucy91c2VyLWNhcmQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFHLFdBQUEsR0FBQUgsT0FBQTtVQUVPO1VBQVUsTUFDWEksVUFBVyxTQUFRTCxLQUFBLENBQUFNLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlMLE1BQUEsQ0FBQU8sWUFBWSxFQUFFO2NBQ2hDLE9BQU8sSUFBSSxDQUFDLENBQUFGLEtBQU07WUFDbkI7WUFDQSxJQUFJRyxNQUFNQSxDQUFBO2NBQ1QsT0FBT1AsTUFBQSxDQUFBUSxJQUFJO1lBQ1o7WUFFQTs7OztZQUlBQyxJQUFJQSxDQUFBO2NBQ0hSLFdBQUEsQ0FBQVMsWUFBWSxDQUFDQyxPQUFPLEdBQUcsS0FBSztjQUM1QixJQUFJLENBQUMsQ0FBQVAsS0FBTSxD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