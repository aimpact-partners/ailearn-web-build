System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.1.3-dev.11/main-layout.widget", "@aimpact/chat-sdk@1.0.1/session", "@beyond-js/reactive@1.2.0/model", "@beyond-js/kernel@0.1.9/texts", "@aimpact/ailearn-sdk@1.0.0/learning-modules", "react@18.2.0", "@aimpact/ailearn-app@0.1.3-dev.11/components/icons", "pragmate-ui@1.0.0-beta.1/components", "pragmate-ui@1.0.0-beta.1/list", "@aimpact/ailearn-app@0.1.3-dev.11/components/ui", "@aimpact/ailearn-app@0.1.3-dev.11/components/module-card", "pragmate-ui@1.0.0-beta.1/modal", "pragmate-ui@1.0.0-beta.1/icons", "@beyond-js/kernel@0.1.9/routing", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/ailearn-app@0.1.3-dev.11/modules/assign", "pragmate-ui@1.0.0-beta.1/link", "pragmate-ui@1.0.0-beta.1/image", "pragmate-ui@1.0.0-beta.1/swiper"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, bimport, __Bundle, __pkg, ims, Controller, AssignmentItem, CommunityItem, View, ModuleItem, UserCard, ProfileSection, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    AssignmentItem: void 0,
    CommunityItem: void 0,
    View: void 0,
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
    }, function (_aimpactAilearnApp013Dev11MainLayoutWidget) {
      dependency_4 = _aimpactAilearnApp013Dev11MainLayoutWidget;
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
    }, function (_aimpactAilearnApp013Dev11ComponentsIcons) {
      dependency_10 = _aimpactAilearnApp013Dev11ComponentsIcons;
    }, function (_pragmateUi100Beta1Components) {
      dependency_11 = _pragmateUi100Beta1Components;
    }, function (_pragmateUi100Beta1List) {
      dependency_12 = _pragmateUi100Beta1List;
    }, function (_aimpactAilearnApp013Dev11ComponentsUi) {
      dependency_13 = _aimpactAilearnApp013Dev11ComponentsUi;
    }, function (_aimpactAilearnApp013Dev11ComponentsModuleCard) {
      dependency_14 = _aimpactAilearnApp013Dev11ComponentsModuleCard;
    }, function (_pragmateUi100Beta1Modal) {
      dependency_15 = _pragmateUi100Beta1Modal;
    }, function (_pragmateUi100Beta1Icons) {
      dependency_16 = _pragmateUi100Beta1Icons;
    }, function (_beyondJsKernel019Routing) {
      dependency_17 = _beyondJsKernel019Routing;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_18 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactAilearnApp013Dev11ModulesAssign) {
      dependency_19 = _aimpactAilearnApp013Dev11ModulesAssign;
    }, function (_pragmateUi100Beta1Link) {
      dependency_20 = _pragmateUi100Beta1Link;
    }, function (_pragmateUi100Beta1Image) {
      dependency_21 = _pragmateUi100Beta1Image;
    }, function (_pragmateUi100Beta1Swiper) {
      dependency_22 = _pragmateUi100Beta1Swiper;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.2"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.1"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.1.3-dev.11"], ["@aimpact/ailearn-app", "0.1.3-dev.11"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.3-dev.11/home",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/main-layout.widget', dependency_4], ['@aimpact/chat-sdk/session', dependency_5], ['@beyond-js/reactive/model', dependency_6], ['@beyond-js/kernel/texts', dependency_7], ['@aimpact/ailearn-sdk/learning-modules', dependency_8], ['react', dependency_9], ['@aimpact/ailearn-app/components/icons', dependency_10], ['pragmate-ui/components', dependency_11], ['pragmate-ui/list', dependency_12], ['@aimpact/ailearn-app/components/ui', dependency_13], ['@aimpact/ailearn-app/components/module-card', dependency_14], ['pragmate-ui/modal', dependency_15], ['pragmate-ui/icons', dependency_16], ['@beyond-js/kernel/routing', dependency_17], ['@beyond-js/react-18-widgets/hooks', dependency_18], ['@aimpact/ailearn-app/modules/assign', dependency_19], ['pragmate-ui/link', dependency_20], ['pragmate-ui/image', dependency_21], ['pragmate-ui/swiper', dependency_22]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "student-home",
        "vspecifier": "@aimpact/ailearn-app@0.1.3-dev.11/home.widget",
        "is": "page",
        "route": "/",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.3-dev.11/home.widget');
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
        hash: 243992115,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyAsideClassrooms = EmptyAsideClassrooms;
          var _react = require("react");
          var _context = require("../../context");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _components = require("pragmate-ui/components");
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
            }, texts.empty.description), _react.default.createElement("footer", {
              className: "aside-list__empty-footer"
            }, _react.default.createElement(_components.Link, {
              href: "/modules/management",
              className: "btn btn-secondary"
            }, texts.empty.action)));
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
        hash: 2122782462,
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
            }, _react.default.createElement("h5", null, texts.title)), _react.default.createElement(_components.Link, {
              href: "/modules/management"
            }, texts.action)), _react.default.createElement(_list.List, {
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
        hash: 1415722812,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AssignmentItem = AssignmentItem;
          var _react = require("react");
          var _context = require("../context");
          var _moduleCard = require("@aimpact/ailearn-app/components/module-card");
          var _components = require("pragmate-ui/components");
          /*bundle*/
          function AssignmentItem({
            item
          }) {
            const {
              store: {
                texts: {
                  assignments: texts
                }
              }
            } = (0, _context.useModuleContext)();
            return _react.default.createElement(_moduleCard.ModuleCard, {
              item: item.module,
              texts: texts
            }, _react.default.createElement(_moduleCard.ModuleCardFooter, {
              className: "actions-end entity__footer--right",
              item: item.module
            }, _react.default.createElement(_components.Link, {
              className: "btn btn-primary",
              href: `/assignments/${item.id}`
            }, texts.actions.link)));
          }
          /*
              <article className="entity__item">
                      <EntityImage src={item.module?.picture} entity="module" alt={title} />
                      <section className="entity__item-content">
                          <Link href={`/assignments/${item.id}`}>
                              <h4>{module.title}</h4>
                              <span>{module.description}</span>
                          </Link>
                      </section>
                      <footer className="entity__footer">
                          <span className="card-number__detail">
                              {texts.assignments.activities}: {module.activities.count}
                          </span>
                      </footer>
                  </article>
                  */
        }
      });

      /***************************************
      INTERNAL MODULE: ./views/community/index
      ***************************************/

      ims.set('./views/community/index', {
        hash: 820429570,
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
            const output = [...modules].map(item => _react.default.createElement(_item.CommunityItem, {
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

      /**************************************
      INTERNAL MODULE: ./views/community/item
      **************************************/

      ims.set('./views/community/item', {
        hash: 3863389452,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CommunityItem = CommunityItem;
          var _react = require("react");
          var _moduleCard = require("@aimpact/ailearn-app/components/module-card");
          var _context = require("../context");
          var _components = require("pragmate-ui/components");
          /*bundle*/
          function CommunityItem({
            item,
            openModal
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
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_moduleCard.ModuleCard, {
              item: item,
              texts: texts
            }, _react.default.createElement(_moduleCard.ModuleCardFooter, {
              item: item
            }, item?.playground?.assignment && _react.default.createElement("a", {
              target: "_blank",
              href: item.playground.assignment,
              className: "right-action btn btn-primary outline"
            }, texts.actions.test), _react.default.createElement(_components.Button, {
              variant: "primary",
              onClick: onUse,
              className: "right-action"
            }, texts.actions.use))));
          }
        }
      });

      /*****************************************************
      INTERNAL MODULE: ./views/community/organizations-modal
      *****************************************************/

      ims.set('./views/community/organizations-modal', {
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
        hash: 1746335960,
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
          var _community = require("./community");
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
            }, _react.default.createElement(_profileSection.ProfileSection, null), _react.default.createElement(_community.LibraryModules, null), _react.default.createElement(_modules.Modules, null), _react.default.createElement(_assigments.Assignments, null)), _react.default.createElement(_aside.Aside, null))));
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./views/modules/index
      *************************************/

      ims.set('./views/modules/index', {
        hash: 1391316203,
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
        hash: 3742203390,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleItem = ModuleItem;
          var _react = require("react");
          var _context = require("../context");
          var _moduleCard = require("@aimpact/ailearn-app/components/module-card");
          var _components = require("pragmate-ui/components");
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
            const share = event => {
              event.stopPropagation();
              toggleModal({
                open: true,
                item
              });
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_moduleCard.ModuleCard, {
              item: item,
              texts: texts
            }, _react.default.createElement(_moduleCard.ModuleCardFooter, {
              item: item
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              bordered: true,
              onClick: share
            }, texts.actions.assign))));
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
        hash: 3832737510,
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
              }
            };
            const specs = {
              // loop: true,
              slidesPerView: 'auto',
              navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
              }
            };
            return _react.default.createElement(_swiper.SwiperSlider, {
              ...specs,
              className: "entity__list two-columns",
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
        "im": "./views/community/item",
        "from": "CommunityItem",
        "name": "CommunityItem"
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
        (require || prop === 'CommunityItem') && _export("CommunityItem", CommunityItem = require ? require('./views/community/item').CommunityItem : value);
        (require || prop === 'View') && _export("View", View = require ? require('./views/index').View : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJfbWFpbkxheW91dCIsIl9zZXNzaW9uIiwiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJzdG9yZSIsImhpZGVUaW1lb3V0IiwiV2lkZ2V0IiwiVmlldyIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiY29uc3RydWN0b3IiLCJhcmdzIiwic2Vzc2lvbldyYXBwZXIiLCJvbiIsIm9uTG9nb3V0Iiwib25Mb2dpbiIsImNsZWFyIiwidW5kZWZpbmVkIiwib2ZmIiwic2hvdyIsImNsZWFyVGltZW91dCIsIkxheW91dEJyb2tlciIsIm92ZXJsYXkiLCJsb2FkIiwiaGlkZSIsImV4cG9ydHMiLCJfbW9kZWwiLCJfdGV4dHMiLCJfYmV5b25kX2NvbnRleHQiLCJfbGVhcm5pbmdNb2R1bGVzIiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwiaXRlbXMiLCJhc3NpZ25tZW50cyIsInRleHRzIiwiQ3VycmVudFRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidmFsdWUiLCJkcmFmdHMiLCJjbGFzc3Jvb21zIiwibW9kdWxlcyIsImxpYnJhcnkiLCJ1c2VyIiwiaXNUZWFjaGVyIiwicm9sZXMiLCJpbmNsdWRlcyIsInJlYWR5IiwidHJpZ2dlckV2ZW50Iiwic2V0QnJlYWRjcnVtYiIsIm9uQ2hhbmdlIiwiYmluZCIsImJyZWFkY3J1bWIiLCJnbG9iYWxUaGlzIiwic2V0VGltZW91dCIsInN0YXR1cyIsImRhdGEiLCJnZXRIb21lIiwiY29uc29sZSIsImxvZyIsIm1vZHVsZVByb21pc2VzIiwibWFwIiwiaXRlbSIsImluc3RhbmNlIiwiTGVhcm5pbmdNb2R1bGUiLCJwdXNoIiwiaXNSZWFkeSIsIlByb21pc2UiLCJhbGwiLCJpbmRleCIsInNldCIsImUiLCJlcnJvciIsIl9yZWFjdCIsIl9jb250ZXh0IiwiX2ljb25zIiwiX2NvbXBvbmVudHMiLCJFbXB0eUFzaWRlQ2xhc3Nyb29tcyIsInVzZU1vZHVsZUNvbnRleHQiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIkFwcEljb24iLCJpY29uIiwiZW1wdHkiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiTGluayIsImhyZWYiLCJhY3Rpb24iLCJfaXRlbSIsIl9saXN0IiwiX2VtcHR5IiwiQXNpZGVDbGFzc3Jvb21zIiwidG91ciIsIkFycmF5IiwiaXNBcnJheSIsInRvdGFsIiwibGVuZ3RoIiwiY2xzIiwiTGlzdCIsImNvbnRyb2wiLCJBc2lkZUNsYXNzcm9vbSIsIl91aSIsImNvbnRlbnQiLCJuYW1lIiwiaWQiLCJrZXkiLCJFbnRpdHlJbWFnZSIsInJhdGlvIiwic3JjIiwicGljdHVyZSIsImVudGl0eSIsIkVtcHR5QXNpZGVEcmFmdCIsIkFzaWRlRHJhZnRzIiwiQXNpZGVEcmFmdEl0ZW0iLCJfZHJhZnRzIiwiX2NsYXNzcm9vbXMiLCJBc2lkZSIsIl9zbGlkZXIiLCJBc3NpZ25tZW50cyIsIm91dHB1dCIsIkFzc2lnbm1lbnRJdGVtIiwiUGFnZVRpdGxlIiwiYXMiLCJTbGlkZXIiLCJfbW9kdWxlQ2FyZCIsIk1vZHVsZUNhcmQiLCJNb2R1bGVDYXJkRm9vdGVyIiwiYWN0aW9ucyIsImxpbmsiLCJfb3JnYW5pemF0aW9uc01vZGFsIiwiX3NlY3Rpb25UaXRsZSIsIkxpYnJhcnlNb2R1bGVzIiwib3Blbk1vZGFsIiwic2V0T3Blbk1vZGFsIiwidXNlU3RhdGUiLCJvcGVuIiwidG9nZ2xlTW9kYWwiLCJDb21tdW5pdHlJdGVtIiwiU2VjdGlvblRpdGxlIiwiYWN0aW9uVGV4dCIsIk9yZ2FuaXphdGlvbnNNb2RhbCIsIm9uQ2xvc2UiLCJvblVzZSIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwiRnJhZ21lbnQiLCJwbGF5Z3JvdW5kIiwiYXNzaWdubWVudCIsInRhcmdldCIsInRlc3QiLCJCdXR0b24iLCJ2YXJpYW50Iiwib25DbGljayIsInVzZSIsIlJlYWN0IiwiX21vZGFsIiwiX3JvdXRpbmciLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwic2V0RXJyb3IiLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwiY2xvbmUiLCJyZXNwb25zZSIsImVycm9ycyIsImZhaWxlZCIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJJdGVtIiwiYWx0IiwiSWNvbiIsIk1vZGFsIiwiY2xvc2VCYWNrZHJvcCIsIkVycm9yUmVuZGVyZXIiLCJvcmdhbml6YXRpb25zIiwic3BlY3MiLCJkaXNhYmxlZCIsImNvbnRpbnVlIiwiTW9kdWxlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2hvb2tzIiwiX3Byb2ZpbGVTZWN0aW9uIiwiX2Fzc2lnbWVudHMiLCJfYXNpZGUiLCJfbW9kdWxlcyIsIl9jb21tdW5pdHkiLCJzZXRSZWFkeSIsInVzZUJpbmRlciIsInJlZiIsIm1haW5SZWYiLCJ1c2VEcml2ZXJUb3VyIiwiYnV0dG9ucyIsIlBhZ2VMb2FkZXIiLCJjb250ZXh0VmFsdWUiLCJQcm92aWRlciIsIlBhZ2VDb250YWluZXIiLCJQcm9maWxlU2VjdGlvbiIsIk1vZHVsZXMiLCJfYXNzaWduIiwiTW9kdWxlSXRlbSIsIk1vZHVsZUFzc2lnbm1lbnRzIiwiYXNzaWduIiwic2hhcmUiLCJib3JkZXJlZCIsIl9saW5rIiwidmFsaWRhdGUiLCJpc0FkbWluIiwic2hvd0FjdGlvbiIsImNyZWF0ZSIsIl9pbWFnZSIsIlVzZXJDYXJkIiwiSW1hZ2UiLCJwaG90b1VSTCIsImRpc3BsYXlOYW1lIiwiZW1haWwiLCJwcm9maWxlIiwiZWRpdCIsInN0ZXAwIiwiX3N3aXBlciIsImNoaWxkcmVuIiwiYnJlYWtwb2ludHMiLCJzbGlkZXNQZXJWaWV3IiwibmF2aWdhdGlvbiIsIm5leHRFbCIsInByZXZFbCIsIlN3aXBlclNsaWRlciIsInNwYWNlQmV0d2VlbiJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2FzaWRlL2NsYXNzcm9vbXMvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2FzaWRlL2NsYXNzcm9vbXMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2FzaWRlL2NsYXNzcm9vbXMvaXRlbS50c3giLCIvdHMvdmlld3MvYXNpZGUvZHJhZnRzL2VtcHR5LnRzeCIsIi90cy92aWV3cy9hc2lkZS9kcmFmdHMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2FzaWRlL2RyYWZ0cy9pdGVtLnRzeCIsIi90cy92aWV3cy9hc2lkZS9pbmRleC50c3giLCIvdHMvdmlld3MvYXNzaWdtZW50cy9pbmRleC50c3giLCIvdHMvdmlld3MvYXNzaWdtZW50cy9pdGVtLnRzeCIsIi90cy92aWV3cy9jb21tdW5pdHkvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2NvbW11bml0eS9pdGVtLnRzeCIsIi90cy92aWV3cy9jb21tdW5pdHkvb3JnYW5pemF0aW9ucy1tb2RhbC50c3giLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvbW9kdWxlcy9pbmRleC50c3giLCIvdHMvdmlld3MvbW9kdWxlcy9pdGVtLnRzeCIsIi90cy92aWV3cy9zZWN0aW9uLXRpdGxlLnRzeCIsIi90cy92aWV3cy9zZWN0aW9ucy9kcmFmdHMudHN4IiwiL3RzL3ZpZXdzL3NlY3Rpb25zL21vZHVsZXMudHN4IiwiL3RzL3ZpZXdzL3NlY3Rpb25zL3Byb2ZpbGUtc2VjdGlvbi50c3giLCIvdHMvdmlld3Mvc2xpZGVyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxL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