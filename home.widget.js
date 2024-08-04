System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.1.0-test.11/main-layout.widget", "@aimpact/chat-sdk@1.0.1/session", "@beyond-js/reactive@1.2.0/model", "@beyond-js/kernel@0.1.9/texts", "@aimpact/ailearn-sdk@1.0.0/learning-modules", "react@18.2.0", "@aimpact/ailearn-app@0.1.0-test.11/components/icons", "pragmate-ui@1.0.0-beta.1/components", "pragmate-ui@1.0.0-beta.1/list", "@aimpact/ailearn-app@0.1.0-test.11/components/ui", "@beyond-js/react-18-widgets@1.1.2/hooks", "dayjs@1.11.10", "pragmate-ui@1.0.0-beta.1/modal", "pragmate-ui@1.0.0-beta.1/icons", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@1.0.0-beta.1/image", "@aimpact/ailearn-app@0.1.0-test.11/modules/assign", "pragmate-ui@1.0.0-beta.1/link", "pragmate-ui@1.0.0-beta.1/swiper"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp010Test11MainLayoutWidget) {
      dependency_4 = _aimpactAilearnApp010Test11MainLayoutWidget;
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
    }, function (_aimpactAilearnApp010Test11ComponentsIcons) {
      dependency_10 = _aimpactAilearnApp010Test11ComponentsIcons;
    }, function (_pragmateUi100Beta1Components) {
      dependency_11 = _pragmateUi100Beta1Components;
    }, function (_pragmateUi100Beta1List) {
      dependency_12 = _pragmateUi100Beta1List;
    }, function (_aimpactAilearnApp010Test11ComponentsUi) {
      dependency_13 = _aimpactAilearnApp010Test11ComponentsUi;
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
    }, function (_aimpactAilearnApp010Test11ModulesAssign) {
      dependency_20 = _aimpactAilearnApp010Test11ModulesAssign;
    }, function (_pragmateUi100Beta1Link) {
      dependency_21 = _pragmateUi100Beta1Link;
    }, function (_pragmateUi100Beta1Swiper) {
      dependency_22 = _pragmateUi100Beta1Swiper;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.2"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.1"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.1.0-test.11"], ["@aimpact/ailearn-app", "0.1.0-test.11"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.0-test.11/home",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/main-layout.widget', dependency_4], ['@aimpact/chat-sdk/session', dependency_5], ['@beyond-js/reactive/model', dependency_6], ['@beyond-js/kernel/texts', dependency_7], ['@aimpact/ailearn-sdk/learning-modules', dependency_8], ['react', dependency_9], ['@aimpact/ailearn-app/components/icons', dependency_10], ['pragmate-ui/components', dependency_11], ['pragmate-ui/list', dependency_12], ['@aimpact/ailearn-app/components/ui', dependency_13], ['@beyond-js/react-18-widgets/hooks', dependency_14], ['dayjs', dependency_15], ['pragmate-ui/modal', dependency_16], ['pragmate-ui/icons', dependency_17], ['@beyond-js/kernel/routing', dependency_18], ['pragmate-ui/image', dependency_19], ['@aimpact/ailearn-app/modules/assign', dependency_20], ['pragmate-ui/link', dependency_21], ['pragmate-ui/swiper', dependency_22]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "student-home",
        "vspecifier": "@aimpact/ailearn-app@0.1.0-test.11/home.widget",
        "is": "page",
        "route": "/",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.0-test.11/home.widget');
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
        hash: 251135000,
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
            }, texts.empty.description), _react.default.createElement(_components.Button, {
              variant: "primary"
            }, texts.empty.action));
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
        hash: 909644286,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJfbWFpbkxheW91dCIsIl9zZXNzaW9uIiwiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJzdG9yZSIsImhpZGVUaW1lb3V0IiwiV2lkZ2V0IiwiVmlldyIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiY29uc3RydWN0b3IiLCJhcmdzIiwic2Vzc2lvbldyYXBwZXIiLCJvbiIsIm9uTG9nb3V0Iiwib25Mb2dpbiIsImNsZWFyIiwidW5kZWZpbmVkIiwib2ZmIiwic2hvdyIsImNsZWFyVGltZW91dCIsIkxheW91dEJyb2tlciIsIm92ZXJsYXkiLCJsb2FkIiwiaGlkZSIsImV4cG9ydHMiLCJfbW9kZWwiLCJfdGV4dHMiLCJfYmV5b25kX2NvbnRleHQiLCJfbGVhcm5pbmdNb2R1bGVzIiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwiaXRlbXMiLCJhc3NpZ25tZW50cyIsInRleHRzIiwiQ3VycmVudFRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidmFsdWUiLCJkcmFmdHMiLCJjbGFzc3Jvb21zIiwibW9kdWxlcyIsImxpYnJhcnkiLCJ1c2VyIiwiaXNUZWFjaGVyIiwicm9sZXMiLCJpbmNsdWRlcyIsInJlYWR5IiwidHJpZ2dlckV2ZW50Iiwic2V0QnJlYWRjcnVtYiIsIm9uQ2hhbmdlIiwiYmluZCIsImJyZWFkY3J1bWIiLCJnbG9iYWxUaGlzIiwic2V0VGltZW91dCIsInN0YXR1cyIsImRhdGEiLCJnZXRIb21lIiwiY29uc29sZSIsImxvZyIsIm1vZHVsZVByb21pc2VzIiwibWFwIiwiaXRlbSIsImluc3RhbmNlIiwiTGVhcm5pbmdNb2R1bGUiLCJwdXNoIiwiaXNSZWFkeSIsIlByb21pc2UiLCJhbGwiLCJpbmRleCIsInNldCIsImUiLCJlcnJvciIsIl9yZWFjdCIsIl9jb250ZXh0IiwiX2ljb25zIiwiRW1wdHlBc2lkZUNsYXNzcm9vbXMiLCJ1c2VNb2R1bGVDb250ZXh0IiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJBcHBJY29uIiwiaWNvbiIsImVtcHR5IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIl9jb21wb25lbnRzIiwiX2l0ZW0iLCJfbGlzdCIsIl9lbXB0eSIsIkFzaWRlQ2xhc3Nyb29tcyIsInRvdXIiLCJBcnJheSIsImlzQXJyYXkiLCJ0b3RhbCIsImxlbmd0aCIsImNscyIsIkxpbmsiLCJocmVmIiwiYWN0aW9uIiwiTGlzdCIsImNvbnRyb2wiLCJBc2lkZUNsYXNzcm9vbSIsIl91aSIsImNvbnRlbnQiLCJuYW1lIiwiaWQiLCJrZXkiLCJFbnRpdHlJbWFnZSIsInJhdGlvIiwic3JjIiwicGljdHVyZSIsImVudGl0eSIsIkVtcHR5QXNpZGVEcmFmdCIsIkJ1dHRvbiIsInZhcmlhbnQiLCJBc2lkZURyYWZ0cyIsIkFzaWRlRHJhZnRJdGVtIiwiX2RyYWZ0cyIsIl9jbGFzc3Jvb21zIiwiQXNpZGUiLCJfc2xpZGVyIiwiQXNzaWdubWVudHMiLCJvdXRwdXQiLCJBc3NpZ25tZW50SXRlbSIsIlBhZ2VUaXRsZSIsImFzIiwiU2xpZGVyIiwiYWx0IiwiYWN0aXZpdGllcyIsImNvdW50IiwiTW9kdWxlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2hvb2tzIiwiX3Byb2ZpbGVTZWN0aW9uIiwiX2Fzc2lnbWVudHMiLCJfYXNpZGUiLCJfbW9kdWxlcyIsIl9saWJyYXJ5Iiwic2V0UmVhZHkiLCJ1c2VTdGF0ZSIsInVzZUJpbmRlciIsInJlZiIsIm1haW5SZWYiLCJ1c2VEcml2ZXJUb3VyIiwiYnV0dG9ucyIsIlBhZ2VMb2FkZXIiLCJmZXRjaGluZyIsImNvbnRleHRWYWx1ZSIsIlByb3ZpZGVyIiwiUGFnZUNvbnRhaW5lciIsIlByb2ZpbGVTZWN0aW9uIiwiTGlicmFyeU1vZHVsZXMiLCJNb2R1bGVzIiwiUmVhY3QiLCJfdXNlckRhdGEiLCJfZGF5anMiLCJMZWFybmluZ01vZHVsZUFjdGlvbnMiLCJvcGVuTW9kYWwiLCJvblVzZSIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwib3BlbiIsIm93bmVyRGF0YSIsIm93bmVyIiwiY3JlYXRvciIsImRhdGUiLCJ0aW1lQ3JlYXRlZCIsImZvcm1hdCIsIlVzZXJEYXRhIiwiYm9yZGVyZWQiLCJvbkNsaWNrIiwiYWN0aW9ucyIsInVzZSIsIl9vcmdhbml6YXRpb25zTW9kYWwiLCJfc2VjdGlvblRpdGxlIiwic2V0T3Blbk1vZGFsIiwidG9nZ2xlTW9kYWwiLCJMaWJyYXJ5SXRlbSIsIlNlY3Rpb25UaXRsZSIsImFjdGlvblRleHQiLCJsaW5rIiwiT3JnYW5pemF0aW9uc01vZGFsIiwib25DbG9zZSIsIl9hY3Rpb25zIiwiX21vZGFsIiwiX3JvdXRpbmciLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwic2V0RXJyb3IiLCJzZXRGZXRjaGluZyIsImNsb25lIiwicmVzcG9uc2UiLCJlcnJvcnMiLCJmYWlsZWQiLCJyb3V0aW5nIiwicHVzaFN0YXRlIiwiSXRlbSIsIkljb24iLCJNb2RhbCIsImNsb3NlQmFja2Ryb3AiLCJFcnJvclJlbmRlcmVyIiwib3JnYW5pemF0aW9ucyIsInNwZWNzIiwiZGlzYWJsZWQiLCJjb250aW51ZSIsIl9pbWFnZSIsImxhYmVsIiwicGhvdG9VcmwiLCJJbWFnZSIsInNoYXJlIiwiYXNzaWduIiwiX2Fzc2lnbiIsIk1vZHVsZUl0ZW0iLCJNb2R1bGVBc3NpZ25tZW50cyIsIl9saW5rIiwidmFsaWRhdGUiLCJpc0FkbWluIiwic2hvd0FjdGlvbiIsImNyZWF0ZSIsIlVzZXJDYXJkIiwicGhvdG9VUkwiLCJkaXNwbGF5TmFtZSIsImVtYWlsIiwicHJvZmlsZSIsImVkaXQiLCJzdGVwMCIsIl9zd2lwZXIiLCJjaGlsZHJlbiIsImJyZWFrcG9pbnRzIiwic2xpZGVzUGVyVmlldyIsIm5hdmlnYXRpb24iLCJuZXh0RWwiLCJwcmV2RWwiLCJTd2lwZXJTbGlkZXIiLCJzcGFjZUJldHdlZW4iXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9hc2lkZS9jbGFzc3Jvb21zL2VtcHR5LnRzeCIsIi90cy92aWV3cy9hc2lkZS9jbGFzc3Jvb21zL2luZGV4LnRzeCIsIi90cy92aWV3cy9hc2lkZS9jbGFzc3Jvb21zL2l0ZW0udHN4IiwiL3RzL3ZpZXdzL2FzaWRlL2RyYWZ0cy9lbXB0eS50c3giLCIvdHMvdmlld3MvYXNpZGUvZHJhZnRzL2luZGV4LnRzeCIsIi90cy92aWV3cy9hc2lkZS9kcmFmdHMvaXRlbS50c3giLCIvdHMvdmlld3MvYXNpZGUvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbWVudHMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbWVudHMvaXRlbS50c3giLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvbGlicmFyeS9hY3Rpb25zLnRzeCIsIi90cy92aWV3cy9saWJyYXJ5L2luZGV4LnRzeCIsIi90cy92aWV3cy9saWJyYXJ5L2l0ZW0udHN4IiwiL3RzL3ZpZXdzL2xpYnJhcnkvb3JnYW5pemF0aW9ucy1tb2RhbC50c3giLCIvdHMvdmlld3MvbGlicmFyeS91c2VyLWRhdGEudHN4IiwiL3RzL3ZpZXdzL21vZHVsZXMvYWN0aW9ucy50c3giLCIvdHMvdmlld3MvbW9kdWxlcy9pbmRleC50c3giLCIvdHMvdmlld3MvbW9kdWxlcy9pdGVtLnRzeCIsIi90cy92aWV3cy9zZWN0aW9uLXRpdGxlLnRzeCIsIi90cy92aWV3cy9zZWN0aW9ucy9kcmFmdHMudHN4IiwiL3RzL3ZpZXdzL3NlY3Rpb25zL21vZHVsZXMudHN4IiwiL3RzL3ZpZXdzL3NlY3Rpb25zL3Byb2ZpbGUtc2VjdGlvbi50c3giLCIvdHMvdmlld3Mvc2xpZGVyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVs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