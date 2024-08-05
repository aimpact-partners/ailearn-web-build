System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.1.1/main-layout.widget", "@aimpact/chat-sdk@1.0.1/session", "@beyond-js/reactive@1.2.0/model", "@beyond-js/kernel@0.1.9/texts", "@aimpact/ailearn-sdk@1.0.0/learning-modules", "react@18.2.0", "@aimpact/ailearn-app@0.1.1/components/icons", "pragmate-ui@1.0.0-beta.1/components", "pragmate-ui@1.0.0-beta.1/list", "@aimpact/ailearn-app@0.1.1/components/ui", "@beyond-js/react-18-widgets@1.1.2/hooks", "dayjs@1.11.10", "pragmate-ui@1.0.0-beta.1/modal", "pragmate-ui@1.0.0-beta.1/icons", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@1.0.0-beta.1/image", "@aimpact/ailearn-app@0.1.1/modules/assign", "pragmate-ui@1.0.0-beta.1/link", "pragmate-ui@1.0.0-beta.1/swiper"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, bimport, __Bundle, __pkg, ims, Controller, AssignmentItem, View, LibraryItem, UserData, ModuleItem, UserCard, ProfileSection, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    AssignmentItem: void 0,
    View: void 0,
    LibraryItem: void 0,
    UserData: void 0,
    ModuleItem: void 0,
    UserCard: void 0,
    ProfileSection: void 0
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
    }, function (_aimpactAilearnApp011MainLayoutWidget) {
      dependency_4 = _aimpactAilearnApp011MainLayoutWidget;
    }, function (_aimpactChatSdk101Session) {
      dependency_5 = _aimpactChatSdk101Session;
    }, function (_beyondJsReactive120Model) {
      dependency_6 = _beyondJsReactive120Model;
    }, function (_beyondJsKernel019Texts) {
      dependency_7 = _beyondJsKernel019Texts;
    }, function (_aimpactAilearnSdk100LearningModules) {
      dependency_8 = _aimpactAilearnSdk100LearningModules;
    }, function (_react2) {
      dependency_9 = _react2;
    }, function (_aimpactAilearnApp011ComponentsIcons) {
      dependency_10 = _aimpactAilearnApp011ComponentsIcons;
    }, function (_pragmateUi100Beta1Components) {
      dependency_11 = _pragmateUi100Beta1Components;
    }, function (_pragmateUi100Beta1List) {
      dependency_12 = _pragmateUi100Beta1List;
    }, function (_aimpactAilearnApp011ComponentsUi) {
      dependency_13 = _aimpactAilearnApp011ComponentsUi;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_14 = _beyondJsReact18Widgets112Hooks;
    }, function (_dayjs2) {
      dependency_15 = _dayjs2;
    }, function (_pragmateUi100Beta1Modal) {
      dependency_16 = _pragmateUi100Beta1Modal;
    }, function (_pragmateUi100Beta1Icons) {
      dependency_17 = _pragmateUi100Beta1Icons;
    }, function (_beyondJsKernel019Routing) {
      dependency_18 = _beyondJsKernel019Routing;
    }, function (_pragmateUi100Beta1Image) {
      dependency_19 = _pragmateUi100Beta1Image;
    }, function (_aimpactAilearnApp011ModulesAssign) {
      dependency_20 = _aimpactAilearnApp011ModulesAssign;
    }, function (_pragmateUi100Beta1Link) {
      dependency_21 = _pragmateUi100Beta1Link;
    }, function (_pragmateUi100Beta1Swiper) {
      dependency_22 = _pragmateUi100Beta1Swiper;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.2"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.1"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.1.1"], ["@aimpact/ailearn-app", "0.1.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.1/home",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/main-layout.widget', dependency_4], ['@aimpact/chat-sdk/session', dependency_5], ['@beyond-js/reactive/model', dependency_6], ['@beyond-js/kernel/texts', dependency_7], ['@aimpact/ailearn-sdk/learning-modules', dependency_8], ['react', dependency_9], ['@aimpact/ailearn-app/components/icons', dependency_10], ['pragmate-ui/components', dependency_11], ['pragmate-ui/list', dependency_12], ['@aimpact/ailearn-app/components/ui', dependency_13], ['@beyond-js/react-18-widgets/hooks', dependency_14], ['dayjs', dependency_15], ['pragmate-ui/modal', dependency_16], ['pragmate-ui/icons', dependency_17], ['@beyond-js/kernel/routing', dependency_18], ['pragmate-ui/image', dependency_19], ['@aimpact/ailearn-app/modules/assign', dependency_20], ['pragmate-ui/link', dependency_21], ['pragmate-ui/swiper', dependency_22]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "student-home",
        "vspecifier": "@aimpact/ailearn-app@0.1.1/home.widget",
        "is": "page",
        "route": "/",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.1/home.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 1066500691,
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
          var _session = require("@aimpact/chat-sdk/session");
          /*bundle*/
          class Controller extends _page.PageReactWidgetController {
            #store;
            hideTimeout = null;
            get Widget() {
              return _views.View;
            }
            createStore() {
              this.#store = new _store.StoreManager();
              return this.#store;
            }
            constructor(args) {
              super(args);
              _session.sessionWrapper.on('logout', this.onLogout);
              _session.sessionWrapper.on('login', this.onLogin);
            }
            onLogout = () => {
              this.#store.clear();
              this.hideTimeout = undefined;
              _session.sessionWrapper.off('logout', this.onLogout);
            };
            onLogin = () => {
              _session.sessionWrapper.on('logout', this.onLogout);
            };
            /**
             * this method is executed when the widget is showd
             *
             */
            show() {
              if (this.hideTimeout) {
                clearTimeout(this.hideTimeout);
                this.hideTimeout = null;
              }
              _mainLayout.LayoutBroker.overlay = false;
              this.#store.load();
            }
            /**
             * this method is executed when the widget is hidden
             */
            hide() {
              this.#store.clear();
            }
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 233267658,
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
          var _learningModules = require("@aimpact/ailearn-sdk/learning-modules");
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
            #library;
            get library() {
              return this.#library;
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
                const modulePromises = [];
                const modules = data.modules ?? [];
                this.#modules = modules.map(item => {
                  const instance = new _learningModules.LearningModule(item);
                  modulePromises.push(instance.isReady);
                  return instance;
                });
                await Promise.all(modulePromises);
                //@ts-ignore
                modules.map((item, index) => this.#modules[index].set(item));
                this.#library = data.library;
                super.ready = true;
                this.triggerEvent();
                globalThis.store = this;
              } catch (e) {
                console.error(e);
              }
            }
            clear() {
              this.#drafts = [];
              this.#assignments = [];
              this.#classrooms = [];
              this.#modules = [];
              super.ready = false;
              this.triggerEvent();
              this.#model = undefined;
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /**********************************************
      INTERNAL MODULE: ./views/aside/classrooms/empty
      **********************************************/

      ims.set('./views/aside/classrooms/empty', {
        hash: 1928682946,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyAsideClassrooms = EmptyAsideClassrooms;
          var _react = require("react");
          var _context = require("../../context");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          function EmptyAsideClassrooms() {
            const {
              texts: {
                classrooms: texts
              }
            } = (0, _context.useModuleContext)();
            return _react.default.createElement("div", {
              className: "aside-list__empty-container"
            }, _react.default.createElement("figure", {
              className: "aside-list__empty-icon"
            }, _react.default.createElement(_icons.AppIcon, {
              icon: "classroom"
            })), _react.default.createElement("h6", null, texts.empty.title), _react.default.createElement("span", {
              className: "empty__list"
            }, texts.empty.description));
          }
        }
      });

      /**********************************************
      INTERNAL MODULE: ./views/aside/classrooms/index
      **********************************************/

      ims.set('./views/aside/classrooms/index', {
        hash: 707758214,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AsideClassrooms = AsideClassrooms;
          var _react = require("react");
          var _context = require("../../context");
          var _components = require("pragmate-ui/components");
          var _item = require("./item");
          var _list = require("pragmate-ui/list");
          var _empty = require("./empty");
          function AsideClassrooms() {
            const {
              store,
              texts: {
                classrooms: texts,
                tour
              }
            } = (0, _context.useModuleContext)();
            if (!store.isTeacher) return null;
            const classrooms = Array.isArray(store.classrooms) ? store.classrooms : [];
            const total = classrooms.length;
            const cls = `classrooms-container aside-list${total === 0 ? ' aside-list--empty' : ''}`;
            return _react.default.createElement("div", {
              "data-tour": "5",
              "data-description": tour.classrooms.description,
              "data-title": tour.classrooms.title,
              className: cls
            }, _react.default.createElement("header", {
              className: "aside-list__header"
            }, _react.default.createElement(_components.Link, {
              href: "/classrooms/list"
            }, _react.default.createElement("h5", null, texts.title)), _react.default.createElement(_components.Link, {
              href: "/classrooms/create"
            }, texts.action)), _react.default.createElement(_list.List, {
              className: "aside-list__body",
              items: classrooms,
              control: _item.AsideClassroom,
              empty: _empty.EmptyAsideClassrooms
            }));
          }
        }
      });

      /*********************************************
      INTERNAL MODULE: ./views/aside/classrooms/item
      *********************************************/

      ims.set('./views/aside/classrooms/item', {
        hash: 2334343149,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AsideClassroom = AsideClassroom;
          var _react = require("react");
          var _context = require("../../context");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _components = require("pragmate-ui/components");
          function AsideClassroom({
            item
          }) {
            const {
              texts: {
                classrooms: texts
              }
            } = (0, _context.useModuleContext)();
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
          }
        }
      });

      /******************************************
      INTERNAL MODULE: ./views/aside/drafts/empty
      ******************************************/

      ims.set('./views/aside/drafts/empty', {
        hash: 3977961536,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyAsideDraft = EmptyAsideDraft;
          var _react = require("react");
          var _context = require("../../context");
          var _components = require("pragmate-ui/components");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          function EmptyAsideDraft() {
            const {
              texts: {
                drafts: texts
              }
            } = (0, _context.useModuleContext)();
            return _react.default.createElement("div", {
              className: "aside-list__empty-container drafts-container"
            }, _react.default.createElement("figure", {
              className: "aside-list__empty-icon"
            }, _react.default.createElement(_icons.AppIcon, {
              icon: "module"
            })), _react.default.createElement("h6", null, texts.empty.title), _react.default.createElement("span", {
              className: "empty__list"
            }, texts.empty.description), _react.default.createElement("footer", null, _react.default.createElement(_components.Link, {
              href: "/modules/management",
              className: "btn btn-primary"
            }, texts.empty.action)));
          }
        }
      });

      /******************************************
      INTERNAL MODULE: ./views/aside/drafts/index
      ******************************************/

      ims.set('./views/aside/drafts/index', {
        hash: 2584308064,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AsideDrafts = AsideDrafts;
          var _react = require("react");
          var _context = require("../../context");
          var _list = require("pragmate-ui/list");
          var _components = require("pragmate-ui/components");
          var _empty = require("./empty");
          var _item = require("./item");
          function AsideDrafts() {
            const {
              store,
              texts: {
                drafts: texts,
                tour
              }
            } = (0, _context.useModuleContext)();
            if (!store.isTeacher) return null;
            const drafts = Array.isArray(store.drafts) ? store.drafts : [];
            const total = drafts.length;
            const cls = `drafts-container aside-list${total === 0 ? ' aside-list--empty' : ''}`;
            return _react.default.createElement("div", {
              "data-tour": "4",
              "data-description": tour.drafts.description,
              "data-title": tour.drafts.title,
              className: cls
            }, _react.default.createElement("header", {
              className: "aside-list__header"
            }, _react.default.createElement(_components.Link, {
              href: "/modules/list?tab=draft"
            }, _react.default.createElement("h5", null, texts.title))), _react.default.createElement(_list.List, {
              className: "aside-list__body",
              items: drafts,
              control: _item.AsideDraftItem,
              empty: _empty.EmptyAsideDraft
            }));
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./views/aside/drafts/item
      *****************************************/

      ims.set('./views/aside/drafts/item', {
        hash: 2092239822,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AsideDraftItem = AsideDraftItem;
          var _react = require("react");
          var _context = require("../../context");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _components = require("pragmate-ui/components");
          function AsideDraftItem({
            item
          }) {
            const {
              texts: {
                classrooms: texts
              }
            } = (0, _context.useModuleContext)();
            const content = !item.description || item.description === '' ? texts.items.description : item.description;
            const title = !item.title || item.title === '' ? texts.items.title : item.title;
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
        hash: 3433017412,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Assignments = Assignments;
          var _react = require("react");
          var _context = require("../context");
          var _item = require("./item");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _slider = require("../slider");
          function Assignments() {
            const {
              store: {
                assignments,
                texts
              }
            } = (0, _context.useModuleContext)();
            if (!assignments || !Array.isArray(assignments) || !assignments.length) return null;
            const output = [...assignments].map(item => _react.default.createElement(_item.AssignmentItem, {
              item: item,
              key: `assignment-${item.id}`
            }));
            return _react.default.createElement("article", {
              "data-tour": "1",
              "data-description": texts.tour.assignments.description,
              "data-title": texts.tour.assignments.title,
              className: "assigments-list"
            }, _react.default.createElement(_ui.PageTitle, {
              title: texts.assignments.title,
              as: "h3"
            }), _react.default.createElement(_slider.Slider, null, output));
          }
        }
      });

      /***************************************
      INTERNAL MODULE: ./views/assigments/item
      ***************************************/

      ims.set('./views/assigments/item', {
        hash: 372228545,
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
              src: item.module?.picture,
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
        hash: 2312783643,
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
          var _profileSection = require("./sections/profile-section");
          var _assigments = require("./assigments");
          var _aside = require("./aside");
          var _modules = require("./modules");
          var _library = require("./library");
          /*bundle*/
          function View({
            store
          }) {
            const [ready, setReady] = (0, _react.useState)(store.ready);
            const {
              texts
            } = store;
            (0, _hooks.useBinder)([store], () => setReady(store.ready));
            const {
              ref: mainRef
            } = (0, _ui.useDriverTour)('home', ready, texts?.tour?.buttons);
            if (!ready) return _react.default.createElement(_ui.PageLoader, {
              fetching: true
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
              ref: mainRef,
              className: "grid-container columns-8-4"
            }, _react.default.createElement("main", {
              className: "main-panel"
            }, _react.default.createElement(_profileSection.ProfileSection, null), _react.default.createElement(_library.LibraryModules, null), _react.default.createElement(_modules.Modules, null), _react.default.createElement(_assigments.Assignments, null)), _react.default.createElement(_aside.Aside, null))));
          }
        }
      });

      /***************************************
      INTERNAL MODULE: ./views/library/actions
      ***************************************/

      ims.set('./views/library/actions', {
        hash: 1185132931,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = LearningModuleActions;
          var React = require("react");
          var _components = require("pragmate-ui/components");
          var _context = require("../context");
          var _userData = require("./user-data");
          var _dayjs = require("dayjs");
          function LearningModuleActions({
            openModal,
            item
          }) {
            const {
              texts: {
                library: texts
              }
            } = (0, _context.useModuleContext)();
            const onUse = event => {
              event.stopPropagation();
              openModal({
                open: true,
                item
              });
            };
            const ownerData = item.owner ?? item.creator;
            const date = (0, _dayjs.default)(item.timeCreated).format('MM/DD/YYYY');
            return React.createElement("footer", {
              className: "entity__footer"
            }, React.createElement(_userData.UserData, {
              data: ownerData,
              date: date
            }), React.createElement(_components.Button, {
              variant: "primary",
              bordered: true,
              onClick: onUse,
              className: "right-action"
            }, texts.actions.use));
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./views/library/index
      *************************************/

      ims.set('./views/library/index', {
        hash: 2786330662,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LibraryModules = LibraryModules;
          var _react = require("react");
          var _context = require("../context");
          var _item = require("./item");
          var _organizationsModal = require("./organizations-modal");
          var _slider = require("../slider");
          var _sectionTitle = require("../section-title");
          function LibraryModules() {
            const {
              store: {
                library: modules,
                texts
              }
            } = (0, _context.useModuleContext)();
            const [openModal, setOpenModal] = _react.default.useState({
              open: false,
              item: null
            });
            if (!modules || !Array.isArray(modules) || !modules.length) return null;
            const toggleModal = item => setOpenModal(item);
            const output = [...modules].map(item => _react.default.createElement(_item.LibraryItem, {
              openModal: toggleModal,
              item: item,
              key: `module-${item.id}`
            }));
            return _react.default.createElement("article", {
              "data-tour": "2",
              "data-description": texts.tour.library.description,
              "data-title": texts.tour.library.title,
              className: "assigments-list"
            }, _react.default.createElement(_sectionTitle.SectionTitle, {
              title: texts.library.title,
              href: "/community",
              actionText: texts.library.actions.link
            }), _react.default.createElement(_slider.Slider, null, output), openModal.open && _react.default.createElement(_organizationsModal.OrganizationsModal, {
              module: openModal?.item,
              onClose: toggleModal,
              texts: texts
            }));
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./views/library/item
      ************************************/

      ims.set('./views/library/item', {
        hash: 1099852261,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LibraryItem = LibraryItem;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _react = require("react");
          var _actions = require("./actions");
          /*bundle*/
          function LibraryItem({
            item,
            openModal
          }) {
            const {
              title
            } = item;
            return _react.default.createElement("article", {
              className: "entity__item"
            }, _react.default.createElement(_ui.EntityImage, {
              src: item?.picture,
              entity: "module",
              alt: title
            }), _react.default.createElement("section", {
              className: "entity__item-content"
            }, _react.default.createElement("h4", null, item.title), _react.default.createElement("span", null, item.description)), _react.default.createElement("footer", {
              className: "entity__footer"
            }), _react.default.createElement(_actions.default, {
              openModal: openModal,
              item: item
            }));
          }
        }
      });

      /***************************************************
      INTERNAL MODULE: ./views/library/organizations-modal
      ***************************************************/

      ims.set('./views/library/organizations-modal', {
        hash: 2236491519,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.OrganizationsModal = OrganizationsModal;
          var React = require("react");
          var _modal = require("pragmate-ui/modal");
          var _list = require("pragmate-ui/list");
          var _session = require("@aimpact/chat-sdk/session");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _components = require("pragmate-ui/components");
          var _icons = require("pragmate-ui/icons");
          var _routing = require("@beyond-js/kernel/routing");
          var _learningModules = require("@aimpact/ailearn-sdk/learning-modules");
          function OrganizationsModal({
            module,
            onClose,
            texts
          }) {
            const [selected, setSelected] = React.useState();
            const [error, setError] = React.useState();
            const [fetching, setFetching] = React.useState(false);
            const clone = async () => {
              try {
                if (!selected) return;
                setFetching(true);
                const instance = new _learningModules.LearningModule({
                  id: module.id
                });
                await instance.isReady;
                const response = await instance.clone(module.id, selected.id, selected.entity);
                if (!response.status) {
                  console.log(response);
                  setError(texts.errors.failed);
                }
                _routing.routing.pushState(`/modules/management?id=${response.data.id}`);
              } catch (error) {
                setError(texts.errors.failed);
              } finally {
                setFetching(false);
              }
            };
            const Item = ({
              item
            }) => {
              const onClick = () => {
                setSelected(item);
              };
              const className = selected?.id === item.id ? 'list__item item__active' : ' list__item';
              return React.createElement("li", {
                "data-id": item.id,
                "data-entity": item.entity,
                className: className,
                onClick: onClick
              }, React.createElement(_ui.EntityImage, {
                src: item.picture,
                entity: "institution",
                alt: item.name
              }), React.createElement("span", null, item.name), selected?.id === item.id && React.createElement(_icons.Icon, {
                icon: "circle-check",
                className: "item__icon"
              }));
            };
            return React.createElement(_modal.Modal, {
              closeBackdrop: false,
              show: true,
              onClose: onClose,
              closeBackdrop: false,
              className: "modal__assignment"
            }, React.createElement("h3", null, "Organizations"), React.createElement(_ui.ErrorRenderer, {
              error: error
            }), React.createElement(_list.List, {
              items: _session.sessionWrapper.user.organizations,
              control: Item,
              className: "organization-list",
              specs: {}
            }), React.createElement("div", {
              className: "actions__container flex-container flex-end"
            }, React.createElement(_components.Button, {
              variant: "primary",
              disabled: !selected,
              fetching: fetching,
              onClick: clone
            }, texts.actions.continue)));
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./views/library/user-data
      *****************************************/

      ims.set('./views/library/user-data', {
        hash: 3207490455,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.UserData = UserData;
          var React = require("react");
          var _image = require("pragmate-ui/image");
          /*bundle*/
          function UserData({
            label,
            date,
            data
          }) {
            if (!data) return null;
            const {
              photoUrl,
              name
            } = data;
            return React.createElement("div", {
              className: "user-data__section"
            }, label && React.createElement("h6", {
              className: "user-data__label"
            }, label), React.createElement("section", {
              className: "user-data__detail"
            }, React.createElement(_image.Image, {
              className: "user-data__img",
              src: photoUrl
            }), React.createElement("div", null, React.createElement("span", {
              className: "user-data__name"
            }, name), React.createElement("span", {
              className: "user-data__date"
            }, date))));
          }
        }
      });

      /***************************************
      INTERNAL MODULE: ./views/modules/actions
      ***************************************/

      ims.set('./views/modules/actions', {
        hash: 2127081963,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = LearningModuleActions;
          var React = require("react");
          var _components = require("pragmate-ui/components");
          var _context = require("../context");
          function LearningModuleActions({
            item,
            toggleModal
          }) {
            const {
              texts
            } = (0, _context.useModuleContext)();
            const share = event => {
              event.stopPropagation();
              toggleModal({
                open: true,
                item
              });
            };
            return React.createElement("footer", {
              className: "entity__footer entity__footer--right"
            }, React.createElement(_components.Button, {
              variant: "primary",
              bordered: true,
              onClick: share
            }, texts.actions.assign));
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./views/modules/index
      *************************************/

      ims.set('./views/modules/index', {
        hash: 3159387844,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Modules = Modules;
          var _react = require("react");
          var _context = require("../context");
          var _item = require("./item");
          var _assign = require("@aimpact/ailearn-app/modules/assign");
          var _slider = require("../slider");
          var _sectionTitle = require("../section-title");
          function Modules() {
            const {
              store: {
                modules,
                texts
              }
            } = (0, _context.useModuleContext)();
            if (!modules || !Array.isArray(modules) || !modules.length) return null;
            const [openModal, setOpenModal] = _react.default.useState({
              open: false,
              item: null
            });
            const toggleModal = data => setOpenModal(data);
            const output = [...modules].map(item => _react.default.createElement(_item.ModuleItem, {
              toggleModal: toggleModal,
              item: item,
              key: `module-${item.id}`
            }));
            return _react.default.createElement("article", {
              "data-tour": "2",
              "data-description": texts.tour.modules.description,
              "data-title": texts.tour.modules.title,
              className: "assigments-list"
            }, _react.default.createElement(_sectionTitle.SectionTitle, {
              title: texts.modules.title,
              href: "/modules/management"
            }), _react.default.createElement(_slider.Slider, null, output), openModal.open && _react.default.createElement(_assign.ModuleAssignments, {
              module: openModal.item,
              onClose: toggleModal,
              texts: texts.assign
            }));
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./views/modules/item
      ************************************/

      ims.set('./views/modules/item', {
        hash: 4059421781,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleItem = ModuleItem;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _react = require("react");
          var _context = require("../context");
          var _actions = require("./actions");
          /*bundle*/
          function ModuleItem({
            item,
            toggleModal
          }) {
            const {
              store: {
                texts
              }
            } = (0, _context.useModuleContext)();
            const {
              title
            } = item;
            const ownerData = item.owner ?? item.creator;
            return _react.default.createElement("article", {
              className: "entity__item"
            }, _react.default.createElement(_ui.EntityImage, {
              src: item?.picture,
              entity: "module",
              alt: title
            }), _react.default.createElement("section", {
              className: "entity__item-content"
            }, _react.default.createElement(_ui.UserData, {
              data: ownerData
            }), _react.default.createElement("h4", null, item.title), _react.default.createElement("span", null, item.description)), _react.default.createElement("footer", {
              className: "entity__footer"
            }, _react.default.createElement("span", {
              className: "card-number__detail"
            }, texts.modules.activities, ": ", item.activities.count)), _react.default.createElement(_actions.default, {
              toggleModal: toggleModal,
              item: item
            }));
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./views/section-title
      *************************************/

      ims.set('./views/section-title', {
        hash: 2349579646,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SectionTitle = SectionTitle;
          var _react = require("react");
          var _context = require("./context");
          var _session = require("@aimpact/chat-sdk/session");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _link = require("pragmate-ui/link");
          function SectionTitle({
            title,
            actionText,
            href,
            validate = true
          }) {
            const {
              store: {
                texts
              }
            } = (0, _context.useModuleContext)();
            const isAdmin = _session.sessionWrapper?.user?.roles?.includes('teacher');
            const showAction = isAdmin && validate;
            const action = actionText ?? texts.actions.create;
            return _react.default.createElement(_ui.PageTitle, {
              title: title,
              as: "h3"
            }, showAction && _react.default.createElement("div", {
              className: "header__actions"
            }, _react.default.createElement(_link.Link, {
              href: href
            }, action)));
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
        hash: 2211973510,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.UserCard = UserCard;
          var _image = require("pragmate-ui/image");
          var _react = require("react");
          var _context = require("../context");
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

      /************************************************
      INTERNAL MODULE: ./views/sections/profile-section
      ************************************************/

      ims.set('./views/sections/profile-section', {
        hash: 3739530922,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ProfileSection = ProfileSection;
          var _react = require("react");
          var _context = require("../context");
          var _image = require("pragmate-ui/image");
          var _link = require("pragmate-ui/link");
          /*bundle*/
          function ProfileSection() {
            const {
              store: {
                user,
                texts
              }
            } = (0, _context.useModuleContext)();
            return _react.default.createElement("section", {
              className: "user-profile",
              "data-tour": "0",
              "data-description": texts.tour.step0.description,
              "data-title": texts.tour.step0.title
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

      /******************************
      INTERNAL MODULE: ./views/slider
      ******************************/

      ims.set('./views/slider', {
        hash: 2447950413,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Slider = Slider;
          var _react = require("react");
          var _swiper = require("pragmate-ui/swiper");
          function Slider({
            children
          }) {
            const breakpoints = {
              0: {
                slidesPerView: 1.2
              },
              600: {
                slidesPerView: 2.1
              },
              900: {
                slidesPerView: 2.1
              }
            };
            const specs = {
              loop: true,
              navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
              }
            };
            return _react.default.createElement(_swiper.SwiperSlider, {
              ...specs,
              className: "entity__list two-columns",
              breakpoints: breakpoints,
              spaceBetween: 20
            }, children);
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
        "im": "./views/library/item",
        "from": "LibraryItem",
        "name": "LibraryItem"
      }, {
        "im": "./views/library/user-data",
        "from": "UserData",
        "name": "UserData"
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
        "im": "./views/sections/profile-section",
        "from": "ProfileSection",
        "name": "ProfileSection"
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
        (require || prop === 'LibraryItem') && _export("LibraryItem", LibraryItem = require ? require('./views/library/item').LibraryItem : value);
        (require || prop === 'UserData') && _export("UserData", UserData = require ? require('./views/library/user-data').UserData : value);
        (require || prop === 'ModuleItem') && _export("ModuleItem", ModuleItem = require ? require('./views/modules/item').ModuleItem : value);
        (require || prop === 'UserCard') && _export("UserCard", UserCard = require ? require('./views/sections/drafts').UserCard : value);
        (require || prop === 'UserCard') && _export("UserCard", UserCard = require ? require('./views/sections/modules').UserCard : value);
        (require || prop === 'ProfileSection') && _export("ProfileSection", ProfileSection = require ? require('./views/sections/profile-section').ProfileSection : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJfbWFpbkxheW91dCIsIl9zZXNzaW9uIiwiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJzdG9yZSIsImhpZGVUaW1lb3V0IiwiV2lkZ2V0IiwiVmlldyIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiY29uc3RydWN0b3IiLCJhcmdzIiwic2Vzc2lvbldyYXBwZXIiLCJvbiIsIm9uTG9nb3V0Iiwib25Mb2dpbiIsImNsZWFyIiwidW5kZWZpbmVkIiwib2ZmIiwic2hvdyIsImNsZWFyVGltZW91dCIsIkxheW91dEJyb2tlciIsIm92ZXJsYXkiLCJsb2FkIiwiaGlkZSIsImV4cG9ydHMiLCJfbW9kZWwiLCJfdGV4dHMiLCJfYmV5b25kX2NvbnRleHQiLCJfbGVhcm5pbmdNb2R1bGVzIiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwiaXRlbXMiLCJhc3NpZ25tZW50cyIsInRleHRzIiwiQ3VycmVudFRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidmFsdWUiLCJkcmFmdHMiLCJjbGFzc3Jvb21zIiwibW9kdWxlcyIsImxpYnJhcnkiLCJ1c2VyIiwiaXNUZWFjaGVyIiwicm9sZXMiLCJpbmNsdWRlcyIsInJlYWR5IiwidHJpZ2dlckV2ZW50Iiwic2V0QnJlYWRjcnVtYiIsIm9uQ2hhbmdlIiwiYmluZCIsImJyZWFkY3J1bWIiLCJnbG9iYWxUaGlzIiwic2V0VGltZW91dCIsInN0YXR1cyIsImRhdGEiLCJnZXRIb21lIiwiY29uc29sZSIsImxvZyIsIm1vZHVsZVByb21pc2VzIiwibWFwIiwiaXRlbSIsImluc3RhbmNlIiwiTGVhcm5pbmdNb2R1bGUiLCJwdXNoIiwiaXNSZWFkeSIsIlByb21pc2UiLCJhbGwiLCJpbmRleCIsInNldCIsImUiLCJlcnJvciIsIl9yZWFjdCIsIl9jb250ZXh0IiwiX2ljb25zIiwiRW1wdHlBc2lkZUNsYXNzcm9vbXMiLCJ1c2VNb2R1bGVDb250ZXh0IiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJBcHBJY29uIiwiaWNvbiIsImVtcHR5IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIl9jb21wb25lbnRzIiwiX2l0ZW0iLCJfbGlzdCIsIl9lbXB0eSIsIkFzaWRlQ2xhc3Nyb29tcyIsInRvdXIiLCJBcnJheSIsImlzQXJyYXkiLCJ0b3RhbCIsImxlbmd0aCIsImNscyIsIkxpbmsiLCJocmVmIiwiYWN0aW9uIiwiTGlzdCIsImNvbnRyb2wiLCJBc2lkZUNsYXNzcm9vbSIsIl91aSIsImNvbnRlbnQiLCJuYW1lIiwiaWQiLCJrZXkiLCJFbnRpdHlJbWFnZSIsInJhdGlvIiwic3JjIiwicGljdHVyZSIsImVudGl0eSIsIkVtcHR5QXNpZGVEcmFmdCIsIkFzaWRlRHJhZnRzIiwiQXNpZGVEcmFmdEl0ZW0iLCJfZHJhZnRzIiwiX2NsYXNzcm9vbXMiLCJBc2lkZSIsIl9zbGlkZXIiLCJBc3NpZ25tZW50cyIsIm91dHB1dCIsIkFzc2lnbm1lbnRJdGVtIiwiUGFnZVRpdGxlIiwiYXMiLCJTbGlkZXIiLCJhbHQiLCJhY3Rpdml0aWVzIiwiY291bnQiLCJNb2R1bGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfaG9va3MiLCJfcHJvZmlsZVNlY3Rpb24iLCJfYXNzaWdtZW50cyIsIl9hc2lkZSIsIl9tb2R1bGVzIiwiX2xpYnJhcnkiLCJzZXRSZWFkeSIsInVzZVN0YXRlIiwidXNlQmluZGVyIiwicmVmIiwibWFpblJlZiIsInVzZURyaXZlclRvdXIiLCJidXR0b25zIiwiUGFnZUxvYWRlciIsImZldGNoaW5nIiwiY29udGV4dFZhbHVlIiwiUHJvdmlkZXIiLCJQYWdlQ29udGFpbmVyIiwiUHJvZmlsZVNlY3Rpb24iLCJMaWJyYXJ5TW9kdWxlcyIsIk1vZHVsZXMiLCJSZWFjdCIsIl91c2VyRGF0YSIsIl9kYXlqcyIsIkxlYXJuaW5nTW9kdWxlQWN0aW9ucyIsIm9wZW5Nb2RhbCIsIm9uVXNlIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJvcGVuIiwib3duZXJEYXRhIiwib3duZXIiLCJjcmVhdG9yIiwiZGF0ZSIsInRpbWVDcmVhdGVkIiwiZm9ybWF0IiwiVXNlckRhdGEiLCJCdXR0b24iLCJ2YXJpYW50IiwiYm9yZGVyZWQiLCJvbkNsaWNrIiwiYWN0aW9ucyIsInVzZSIsIl9vcmdhbml6YXRpb25zTW9kYWwiLCJfc2VjdGlvblRpdGxlIiwic2V0T3Blbk1vZGFsIiwidG9nZ2xlTW9kYWwiLCJMaWJyYXJ5SXRlbSIsIlNlY3Rpb25UaXRsZSIsImFjdGlvblRleHQiLCJsaW5rIiwiT3JnYW5pemF0aW9uc01vZGFsIiwib25DbG9zZSIsIl9hY3Rpb25zIiwiX21vZGFsIiwiX3JvdXRpbmciLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwic2V0RXJyb3IiLCJzZXRGZXRjaGluZyIsImNsb25lIiwicmVzcG9uc2UiLCJlcnJvcnMiLCJmYWlsZWQiLCJyb3V0aW5nIiwicHVzaFN0YXRlIiwiSXRlbSIsIkljb24iLCJNb2RhbCIsImNsb3NlQmFja2Ryb3AiLCJFcnJvclJlbmRlcmVyIiwib3JnYW5pemF0aW9ucyIsInNwZWNzIiwiZGlzYWJsZWQiLCJjb250aW51ZSIsIl9pbWFnZSIsImxhYmVsIiwicGhvdG9VcmwiLCJJbWFnZSIsInNoYXJlIiwiYXNzaWduIiwiX2Fzc2lnbiIsIk1vZHVsZUl0ZW0iLCJNb2R1bGVBc3NpZ25tZW50cyIsIl9saW5rIiwidmFsaWRhdGUiLCJpc0FkbWluIiwic2hvd0FjdGlvbiIsImNyZWF0ZSIsIlVzZXJDYXJkIiwicGhvdG9VUkwiLCJkaXNwbGF5TmFtZSIsImVtYWlsIiwicHJvZmlsZSIsImVkaXQiLCJzdGVwMCIsIl9zd2lwZXIiLCJjaGlsZHJlbiIsImJyZWFrcG9pbnRzIiwic2xpZGVzUGVyVmlldyIsImxvb3AiLCJuYXZpZ2F0aW9uIiwibmV4dEVsIiwicHJldkVsIiwiU3dpcGVyU2xpZGVyIiwic3BhY2VCZXR3ZWVuIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvYXNpZGUvY2xhc3Nyb29tcy9lbXB0eS50c3giLCIvdHMvdmlld3MvYXNpZGUvY2xhc3Nyb29tcy9pbmRleC50c3giLCIvdHMvdmlld3MvYXNpZGUvY2xhc3Nyb29tcy9pdGVtLnRzeCIsIi90cy92aWV3cy9hc2lkZS9kcmFmdHMvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2FzaWRlL2RyYWZ0cy9pbmRleC50c3giLCIvdHMvdmlld3MvYXNpZGUvZHJhZnRzL2l0ZW0udHN4IiwiL3RzL3ZpZXdzL2FzaWRlL2luZGV4LnRzeCIsIi90cy92aWV3cy9hc3NpZ21lbnRzL2luZGV4LnRzeCIsIi90cy92aWV3cy9hc3NpZ21lbnRzL2l0ZW0udHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xpYnJhcnkvYWN0aW9ucy50c3giLCIvdHMvdmlld3MvbGlicmFyeS9pbmRleC50c3giLCIvdHMvdmlld3MvbGlicmFyeS9pdGVtLnRzeCIsIi90cy92aWV3cy9saWJyYXJ5L29yZ2FuaXphdGlvbnMtbW9kYWwudHN4IiwiL3RzL3ZpZXdzL2xpYnJhcnkvdXNlci1kYXRhLnRzeCIsIi90cy92aWV3cy9tb2R1bGVzL2FjdGlvbnMudHN4IiwiL3RzL3ZpZXdzL21vZHVsZXMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL21vZHVsZXMvaXRlbS50c3giLCIvdHMvdmlld3Mvc2VjdGlvbi10aXRsZS50c3giLCIvdHMvdmlld3Mvc2VjdGlvbnMvZHJhZnRzLnRzeCIsIi90cy92aWV3cy9zZWN0aW9ucy9tb2R1bGVzLnRzeCIsIi90cy92aWV3cy9zZWN0aW9ucy9wcm9maWxlLXNlY3Rpb24udHN4IiwiL3RzL3ZpZXdzL3NsaWRlci50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxu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