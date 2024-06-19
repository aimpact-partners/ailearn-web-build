System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.0.50/main-layout.widget", "@beyond-js/reactive@1.1.12/model", "@beyond-js/kernel@0.1.9/texts", "@aimpact/chat-sdk@1.0.1/session", "react@18.2.0", "@aimpact/ailearn-app@0.0.50/components/ui", "pragmate-ui@0.1.1/components", "pragmate-ui@0.1.1/list", "pragmate-ui@0.1.1/link", "swiper@8.4.7", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/ailearn-app@0.0.50/modules/assign", "pragmate-ui@0.1.1/image"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp0050MainLayoutWidget) {
      dependency_4 = _aimpactAilearnApp0050MainLayoutWidget;
    }, function (_beyondJsReactive1112Model) {
      dependency_5 = _beyondJsReactive1112Model;
    }, function (_beyondJsKernel019Texts) {
      dependency_6 = _beyondJsKernel019Texts;
    }, function (_aimpactChatSdk101Session) {
      dependency_7 = _aimpactChatSdk101Session;
    }, function (_react2) {
      dependency_8 = _react2;
    }, function (_aimpactAilearnApp0050ComponentsUi) {
      dependency_9 = _aimpactAilearnApp0050ComponentsUi;
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
    }, function (_aimpactAilearnApp0050ModulesAssign) {
      dependency_15 = _aimpactAilearnApp0050ModulesAssign;
    }, function (_pragmateUi011Image) {
      dependency_16 = _pragmateUi011Image;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.2"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.0.50"], ["@aimpact/ailearn-app", "0.0.50"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.50/home",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/main-layout.widget', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@beyond-js/kernel/texts', dependency_6], ['@aimpact/chat-sdk/session', dependency_7], ['react', dependency_8], ['@aimpact/ailearn-app/components/ui', dependency_9], ['pragmate-ui/components', dependency_10], ['pragmate-ui/list', dependency_11], ['pragmate-ui/link', dependency_12], ['swiper', dependency_13], ['@beyond-js/react-18-widgets/hooks', dependency_14], ['@aimpact/ailearn-app/modules/assign', dependency_15], ['pragmate-ui/image', dependency_16]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "student-home",
        "vspecifier": "@aimpact/ailearn-app@0.0.50/home.widget",
        "is": "page",
        "route": "/",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.50/home.widget');
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
        hash: 3828492023,
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
                href: `/classrooms/view/${item.id}`,
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
              href: "/classrooms/create"
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