System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.1.0-dev.09/main-layout.widget", "@aimpact/chat-sdk@1.0.1/session", "@beyond-js/reactive@1.2.0/model", "@beyond-js/kernel@0.1.9/texts", "@aimpact/ailearn-sdk@1.0.0/learning-modules", "react@18.2.0", "pragmate-ui@1.0.0-beta.1/components", "pragmate-ui@1.0.0-beta.1/list", "@aimpact/ailearn-app@0.1.0-dev.09/components/ui", "@beyond-js/react-18-widgets@1.1.2/hooks", "dayjs@1.11.10", "pragmate-ui@1.0.0-beta.1/modal", "pragmate-ui@1.0.0-beta.1/icons", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@1.0.0-beta.1/image", "@aimpact/ailearn-app@0.1.0-dev.09/modules/assign", "pragmate-ui@1.0.0-beta.1/link", "pragmate-ui@1.0.0-beta.1/swiper"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, bimport, __Bundle, __pkg, ims, Controller, AssignmentItem, View, LibraryItem, UserData, ModuleItem, UserCard, ProfileSection, __beyond_pkg, hmr;
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
    }, function (_aimpactAilearnApp010Dev09MainLayoutWidget) {
      dependency_4 = _aimpactAilearnApp010Dev09MainLayoutWidget;
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
    }, function (_pragmateUi100Beta1Components) {
      dependency_10 = _pragmateUi100Beta1Components;
    }, function (_pragmateUi100Beta1List) {
      dependency_11 = _pragmateUi100Beta1List;
    }, function (_aimpactAilearnApp010Dev09ComponentsUi) {
      dependency_12 = _aimpactAilearnApp010Dev09ComponentsUi;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_13 = _beyondJsReact18Widgets112Hooks;
    }, function (_dayjs2) {
      dependency_14 = _dayjs2;
    }, function (_pragmateUi100Beta1Modal) {
      dependency_15 = _pragmateUi100Beta1Modal;
    }, function (_pragmateUi100Beta1Icons) {
      dependency_16 = _pragmateUi100Beta1Icons;
    }, function (_beyondJsKernel019Routing) {
      dependency_17 = _beyondJsKernel019Routing;
    }, function (_pragmateUi100Beta1Image) {
      dependency_18 = _pragmateUi100Beta1Image;
    }, function (_aimpactAilearnApp010Dev09ModulesAssign) {
      dependency_19 = _aimpactAilearnApp010Dev09ModulesAssign;
    }, function (_pragmateUi100Beta1Link) {
      dependency_20 = _pragmateUi100Beta1Link;
    }, function (_pragmateUi100Beta1Swiper) {
      dependency_21 = _pragmateUi100Beta1Swiper;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.2"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.1"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.1.0-dev.09"], ["@aimpact/ailearn-app", "0.1.0-dev.09"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.0-dev.09/home",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/main-layout.widget', dependency_4], ['@aimpact/chat-sdk/session', dependency_5], ['@beyond-js/reactive/model', dependency_6], ['@beyond-js/kernel/texts', dependency_7], ['@aimpact/ailearn-sdk/learning-modules', dependency_8], ['react', dependency_9], ['pragmate-ui/components', dependency_10], ['pragmate-ui/list', dependency_11], ['@aimpact/ailearn-app/components/ui', dependency_12], ['@beyond-js/react-18-widgets/hooks', dependency_13], ['dayjs', dependency_14], ['pragmate-ui/modal', dependency_15], ['pragmate-ui/icons', dependency_16], ['@beyond-js/kernel/routing', dependency_17], ['pragmate-ui/image', dependency_18], ['@aimpact/ailearn-app/modules/assign', dependency_19], ['pragmate-ui/link', dependency_20], ['pragmate-ui/swiper', dependency_21]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "student-home",
        "vspecifier": "@aimpact/ailearn-app@0.1.0-dev.09/home.widget",
        "is": "page",
        "route": "/",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.0-dev.09/home.widget');
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
        hash: 1484426367,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyAside = EmptyAside;
          var _react = require("react");
          var _context = require("../../context");
          function EmptyAside() {
            const {
              texts: {
                classrooms: texts
              }
            } = (0, _context.useModuleContext)();
            return _react.default.createElement("div", {
              className: "aside-list__empty-container"
            }, _react.default.createElement("span", {
              className: "empty__list"
            }, texts.empty));
          }
        }
      });

      /**********************************************
      INTERNAL MODULE: ./views/aside/classrooms/index
      **********************************************/

      ims.set('./views/aside/classrooms/index', {
        hash: 3198656142,
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
              empty: _empty.EmptyAside
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
        hash: 4014005494,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyAsideDraft = EmptyAsideDraft;
          var _react = require("react");
          var _context = require("../../context");
          var _components = require("pragmate-ui/components");
          function EmptyAsideDraft() {
            const {
              texts: {
                drafts: texts
              }
            } = (0, _context.useModuleContext)();
            return _react.default.createElement("div", {
              className: "aside-list__empty-container drafts-container"
            }, _react.default.createElement("span", {
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
        hash: 3313557509,
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
              control: _empty.EmptyAsideDraft,
              empty: _empty.EmptyAsideDraft
            }));
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./views/aside/drafts/item
      *****************************************/

      ims.set('./views/aside/drafts/item', {
        hash: 1434928967,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyAsideDraft = EmptyAsideDraft;
          var _react = require("react");
          var _context = require("../../context");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _components = require("pragmate-ui/components");
          function EmptyAsideDraft({
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJfbWFpbkxheW91dCIsIl9zZXNzaW9uIiwiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJzdG9yZSIsImhpZGVUaW1lb3V0IiwiV2lkZ2V0IiwiVmlldyIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiY29uc3RydWN0b3IiLCJhcmdzIiwic2Vzc2lvbldyYXBwZXIiLCJvbiIsIm9uTG9nb3V0Iiwib25Mb2dpbiIsImNsZWFyIiwidW5kZWZpbmVkIiwib2ZmIiwic2hvdyIsImNsZWFyVGltZW91dCIsIkxheW91dEJyb2tlciIsIm92ZXJsYXkiLCJsb2FkIiwiaGlkZSIsImV4cG9ydHMiLCJfbW9kZWwiLCJfdGV4dHMiLCJfYmV5b25kX2NvbnRleHQiLCJfbGVhcm5pbmdNb2R1bGVzIiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwiaXRlbXMiLCJhc3NpZ25tZW50cyIsInRleHRzIiwiQ3VycmVudFRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidmFsdWUiLCJkcmFmdHMiLCJjbGFzc3Jvb21zIiwibW9kdWxlcyIsImxpYnJhcnkiLCJ1c2VyIiwiaXNUZWFjaGVyIiwicm9sZXMiLCJpbmNsdWRlcyIsInJlYWR5IiwidHJpZ2dlckV2ZW50Iiwic2V0QnJlYWRjcnVtYiIsIm9uQ2hhbmdlIiwiYmluZCIsImJyZWFkY3J1bWIiLCJnbG9iYWxUaGlzIiwic2V0VGltZW91dCIsInN0YXR1cyIsImRhdGEiLCJnZXRIb21lIiwiY29uc29sZSIsImxvZyIsIm1vZHVsZVByb21pc2VzIiwibWFwIiwiaXRlbSIsImluc3RhbmNlIiwiTGVhcm5pbmdNb2R1bGUiLCJwdXNoIiwiaXNSZWFkeSIsIlByb21pc2UiLCJhbGwiLCJpbmRleCIsInNldCIsImUiLCJlcnJvciIsIl9yZWFjdCIsIl9jb250ZXh0IiwiRW1wdHlBc2lkZSIsInVzZU1vZHVsZUNvbnRleHQiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImVtcHR5IiwiX2NvbXBvbmVudHMiLCJfaXRlbSIsIl9saXN0IiwiX2VtcHR5IiwiQXNpZGVDbGFzc3Jvb21zIiwidG91ciIsIkFycmF5IiwiaXNBcnJheSIsInRvdGFsIiwibGVuZ3RoIiwiY2xzIiwiZGVzY3JpcHRpb24iLCJ0aXRsZSIsIkxpbmsiLCJocmVmIiwiYWN0aW9uIiwiTGlzdCIsImNvbnRyb2wiLCJBc2lkZUNsYXNzcm9vbSIsIl91aSIsImNvbnRlbnQiLCJuYW1lIiwiaWQiLCJrZXkiLCJFbnRpdHlJbWFnZSIsInJhdGlvIiwic3JjIiwicGljdHVyZSIsImVudGl0eSIsIkVtcHR5QXNpZGVEcmFmdCIsIkJ1dHRvbiIsInZhcmlhbnQiLCJBc2lkZURyYWZ0cyIsIl9kcmFmdHMiLCJfY2xhc3Nyb29tcyIsIkFzaWRlIiwiX3NsaWRlciIsIkFzc2lnbm1lbnRzIiwib3V0cHV0IiwiQXNzaWdubWVudEl0ZW0iLCJQYWdlVGl0bGUiLCJhcyIsIlNsaWRlciIsImFsdCIsImFjdGl2aXRpZXMiLCJjb3VudCIsIk1vZHVsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9ob29rcyIsIl9wcm9maWxlU2VjdGlvbiIsIl9hc3NpZ21lbnRzIiwiX2FzaWRlIiwiX21vZHVsZXMiLCJfbGlicmFyeSIsInNldFJlYWR5IiwidXNlU3RhdGUiLCJ1c2VCaW5kZXIiLCJyZWYiLCJtYWluUmVmIiwidXNlRHJpdmVyVG91ciIsImJ1dHRvbnMiLCJQYWdlTG9hZGVyIiwiZmV0Y2hpbmciLCJjb250ZXh0VmFsdWUiLCJQcm92aWRlciIsIlBhZ2VDb250YWluZXIiLCJQcm9maWxlU2VjdGlvbiIsIkxpYnJhcnlNb2R1bGVzIiwiTW9kdWxlcyIsIlJlYWN0IiwiX3VzZXJEYXRhIiwiX2RheWpzIiwiTGVhcm5pbmdNb2R1bGVBY3Rpb25zIiwib3Blbk1vZGFsIiwib25Vc2UiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsIm9wZW4iLCJvd25lckRhdGEiLCJvd25lciIsImNyZWF0b3IiLCJkYXRlIiwidGltZUNyZWF0ZWQiLCJmb3JtYXQiLCJVc2VyRGF0YSIsImJvcmRlcmVkIiwib25DbGljayIsImFjdGlvbnMiLCJ1c2UiLCJfb3JnYW5pemF0aW9uc01vZGFsIiwiX3NlY3Rpb25UaXRsZSIsInNldE9wZW5Nb2RhbCIsInRvZ2dsZU1vZGFsIiwiTGlicmFyeUl0ZW0iLCJTZWN0aW9uVGl0bGUiLCJhY3Rpb25UZXh0IiwibGluayIsIk9yZ2FuaXphdGlvbnNNb2RhbCIsIm9uQ2xvc2UiLCJfYWN0aW9ucyIsIl9tb2RhbCIsIl9pY29ucyIsIl9yb3V0aW5nIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsInNldEVycm9yIiwic2V0RmV0Y2hpbmciLCJjbG9uZSIsInJlc3BvbnNlIiwiZXJyb3JzIiwiZmFpbGVkIiwicm91dGluZyIsInB1c2hTdGF0ZSIsIkl0ZW0iLCJJY29uIiwiaWNvbiIsIk1vZGFsIiwiY2xvc2VCYWNrZHJvcCIsIkVycm9yUmVuZGVyZXIiLCJvcmdhbml6YXRpb25zIiwic3BlY3MiLCJkaXNhYmxlZCIsImNvbnRpbnVlIiwiX2ltYWdlIiwibGFiZWwiLCJwaG90b1VybCIsIkltYWdlIiwic2hhcmUiLCJhc3NpZ24iLCJfYXNzaWduIiwiTW9kdWxlSXRlbSIsIk1vZHVsZUFzc2lnbm1lbnRzIiwiX2xpbmsiLCJ2YWxpZGF0ZSIsImlzQWRtaW4iLCJzaG93QWN0aW9uIiwiY3JlYXRlIiwiVXNlckNhcmQiLCJwaG90b1VSTCIsImRpc3BsYXlOYW1lIiwiZW1haWwiLCJwcm9maWxlIiwiZWRpdCIsInN0ZXAwIiwiX3N3aXBlciIsImNoaWxkcmVuIiwiYnJlYWtwb2ludHMiLCJzbGlkZXNQZXJWaWV3IiwibmF2aWdhdGlvbiIsIm5leHRFbCIsInByZXZFbCIsIlN3aXBlclNsaWRlciIsInNwYWNlQmV0d2VlbiJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2FzaWRlL2NsYXNzcm9vbXMvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2FzaWRlL2NsYXNzcm9vbXMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2FzaWRlL2NsYXNzcm9vbXMvaXRlbS50c3giLCIvdHMvdmlld3MvYXNpZGUvZHJhZnRzL2VtcHR5LnRzeCIsIi90cy92aWV3cy9hc2lkZS9kcmFmdHMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2FzaWRlL2RyYWZ0cy9pdGVtLnRzeCIsIi90cy92aWV3cy9hc2lkZS9pbmRleC50c3giLCIvdHMvdmlld3MvYXNzaWdtZW50cy9pbmRleC50c3giLCIvdHMvdmlld3MvYXNzaWdtZW50cy9pdGVtLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9saWJyYXJ5L2FjdGlvbnMudHN4IiwiL3RzL3ZpZXdzL2xpYnJhcnkvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xpYnJhcnkvaXRlbS50c3giLCIvdHMvdmlld3MvbGlicmFyeS9vcmdhbml6YXRpb25zLW1vZGFsLnRzeCIsIi90cy92aWV3cy9saWJyYXJ5L3VzZXItZGF0YS50c3giLCIvdHMvdmlld3MvbW9kdWxlcy9hY3Rpb25zLnRzeCIsIi90cy92aWV3cy9tb2R1bGVzL2luZGV4LnRzeCIsIi90cy92aWV3cy9tb2R1bGVzL2l0ZW0udHN4IiwiL3RzL3ZpZXdzL3NlY3Rpb24tdGl0bGUudHN4IiwiL3RzL3ZpZXdzL3NlY3Rpb25zL2RyYWZ0cy50c3giLCIvdHMvdmlld3Mvc2VjdGlvbnMvbW9kdWxlcy50c3giLCIvdHMvdmlld3Mvc2VjdGlvbnMvcHJvZmlsZS1zZWN0aW9uLnRzeCIsIi90cy92aWV3cy9zbGlkZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGws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