System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.1.13/main-layout.widget", "@aimpact/chat-sdk@1.3.0/session", "@beyond-js/reactive@1.2.0/model", "@beyond-js/kernel@0.1.9/texts", "@aimpact/ailearn-sdk@1.0.0/learning-modules", "@aimpact/ailearn-sdk@1.0.0/core", "react@18.2.0", "@aimpact/ailearn-app@0.1.13/components/icons", "pragmate-ui@1.0.0-beta.6/components", "pragmate-ui@1.0.0-beta.6/list", "@aimpact/ailearn-app@0.1.13/components/ui", "@aimpact/ailearn-app@0.1.13/components/module-card", "@aimpact/ailearn-app@0.1.13/modules/owner-assign.code", "pragmate-ui@1.0.0-beta.6/modal", "pragmate-ui@1.0.0-beta.6/icons", "@beyond-js/kernel@0.1.9/routing", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/ailearn-app@0.1.13/modules/assign", "pragmate-ui@1.0.0-beta.6/image", "pragmate-ui@1.0.0-beta.6/swiper"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, bimport, __Bundle, __pkg, ims, Controller, AssignmentItem, CommunityItem, View, ModuleItem, UserCard, ProfileSection, __beyond_pkg, hmr;
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
    }, function (_aimpactAilearnApp0113MainLayoutWidget) {
      dependency_4 = _aimpactAilearnApp0113MainLayoutWidget;
    }, function (_aimpactChatSdk130Session) {
      dependency_5 = _aimpactChatSdk130Session;
    }, function (_beyondJsReactive120Model) {
      dependency_6 = _beyondJsReactive120Model;
    }, function (_beyondJsKernel019Texts) {
      dependency_7 = _beyondJsKernel019Texts;
    }, function (_aimpactAilearnSdk100LearningModules) {
      dependency_8 = _aimpactAilearnSdk100LearningModules;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_9 = _aimpactAilearnSdk100Core;
    }, function (_react2) {
      dependency_10 = _react2;
    }, function (_aimpactAilearnApp0113ComponentsIcons) {
      dependency_11 = _aimpactAilearnApp0113ComponentsIcons;
    }, function (_pragmateUi100Beta6Components) {
      dependency_12 = _pragmateUi100Beta6Components;
    }, function (_pragmateUi100Beta6List) {
      dependency_13 = _pragmateUi100Beta6List;
    }, function (_aimpactAilearnApp0113ComponentsUi) {
      dependency_14 = _aimpactAilearnApp0113ComponentsUi;
    }, function (_aimpactAilearnApp0113ComponentsModuleCard) {
      dependency_15 = _aimpactAilearnApp0113ComponentsModuleCard;
    }, function (_aimpactAilearnApp0113ModulesOwnerAssignCode) {
      dependency_16 = _aimpactAilearnApp0113ModulesOwnerAssignCode;
    }, function (_pragmateUi100Beta6Modal) {
      dependency_17 = _pragmateUi100Beta6Modal;
    }, function (_pragmateUi100Beta6Icons) {
      dependency_18 = _pragmateUi100Beta6Icons;
    }, function (_beyondJsKernel019Routing) {
      dependency_19 = _beyondJsKernel019Routing;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_20 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactAilearnApp0113ModulesAssign) {
      dependency_21 = _aimpactAilearnApp0113ModulesAssign;
    }, function (_pragmateUi100Beta6Image) {
      dependency_22 = _pragmateUi100Beta6Image;
    }, function (_pragmateUi100Beta6Swiper) {
      dependency_23 = _pragmateUi100Beta6Swiper;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.3.0"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.6"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["wavesurfer.js", "7.8.5"], ["zod", "3.23.8"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.8"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["firebase", "10.13.1"], ["firebase-admin", "12.4.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.1.13"], ["@aimpact/ailearn-app", "0.1.13"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.13/home",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/main-layout.widget', dependency_4], ['@aimpact/chat-sdk/session', dependency_5], ['@beyond-js/reactive/model', dependency_6], ['@beyond-js/kernel/texts', dependency_7], ['@aimpact/ailearn-sdk/learning-modules', dependency_8], ['@aimpact/ailearn-sdk/core', dependency_9], ['react', dependency_10], ['@aimpact/ailearn-app/components/icons', dependency_11], ['pragmate-ui/components', dependency_12], ['pragmate-ui/list', dependency_13], ['@aimpact/ailearn-app/components/ui', dependency_14], ['@aimpact/ailearn-app/components/module-card', dependency_15], ['@aimpact/ailearn-app/modules/owner-assign.code', dependency_16], ['pragmate-ui/modal', dependency_17], ['pragmate-ui/icons', dependency_18], ['@beyond-js/kernel/routing', dependency_19], ['@beyond-js/react-18-widgets/hooks', dependency_20], ['@aimpact/ailearn-app/modules/assign', dependency_21], ['pragmate-ui/image', dependency_22], ['pragmate-ui/swiper', dependency_23]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "student-home",
        "vspecifier": "@aimpact/ailearn-app@0.1.13/home.widget",
        "is": "page",
        "route": "/",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.13/home.widget');
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
        hash: 1877522955,
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
            #community;
            get community() {
              return this.#community;
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
            async load() {
              try {
                this.#model = _session.sessionWrapper;
                _mainLayout.LayoutBroker.overlay = false;
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
                this.#community = data.community;
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
        hash: 3964528968,
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
              href: "/classrooms/create",
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
        hash: 3290853220,
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
                drafts: texts
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
        hash: 3979452434,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CommunityModules = CommunityModules;
          var _react = require("react");
          var _context = require("../context");
          var _item = require("./item");
          var _slider = require("../slider");
          var _sectionTitle = require("../section-title");
          var _ownerAssign = require("@aimpact/ailearn-app/modules/owner-assign.code");
          function CommunityModules() {
            const {
              store: {
                community: modules,
                texts,
                user
              }
            } = (0, _context.useModuleContext)();
            const [openModal, setOpenModal] = _react.default.useState({
              open: false,
              item: null
            });
            const cantAccess = !user.roles?.length || user.roles.length === 1 && user.roles[0] === 'student';
            if (cantAccess || !modules || !Array.isArray(modules) || !modules.length) return null;
            const toggleModal = item => setOpenModal(item);
            const output = [...modules].map(item => _react.default.createElement(_item.CommunityItem, {
              openModal: toggleModal,
              item: item,
              key: `module-${item.id}`
            }));
            return _react.default.createElement("article", {
              "data-tour": "2",
              "data-description": texts.tour.community.description,
              "data-title": texts.tour.community.title,
              className: "assigments-list"
            }, _react.default.createElement(_sectionTitle.SectionTitle, {
              title: texts.community.title,
              href: "/community",
              actionText: texts.community.actions.link
            }), _react.default.createElement(_slider.Slider, null, output), openModal.open && _react.default.createElement(_ownerAssign.OwnerAssignForm, {
              item: openModal?.item,
              onClose: toggleModal,
              texts: texts,
              type: "community"
            }));
          }
        }
      });

      /**************************************
      INTERNAL MODULE: ./views/community/item
      **************************************/

      ims.set('./views/community/item', {
        hash: 2064179533,
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
                community: texts
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
        hash: 3298816763,
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
        hash: 2380819415,
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
            } = store;
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
            }, _react.default.createElement(_profileSection.ProfileSection, null), _react.default.createElement(_community.CommunityModules, null), _react.default.createElement(_modules.Modules, null), _react.default.createElement(_assigments.Assignments, null)), _react.default.createElement(_aside.Aside, null))));
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./views/modules/index
      *************************************/

      ims.set('./views/modules/index', {
        hash: 898520914,
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
              item: openModal.item,
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
        hash: 3311047845,
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
          var _components = require("pragmate-ui/components");
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
            }, _react.default.createElement(_components.Link, {
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
        hash: 3203937922,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ProfileSection = ProfileSection;
          var _react = require("react");
          var _context = require("../context");
          var _image = require("pragmate-ui/image");
          var _components = require("pragmate-ui/components");
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
            }, _react.default.createElement(_components.Link, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJfbWFpbkxheW91dCIsIl9zZXNzaW9uIiwiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJzdG9yZSIsImhpZGVUaW1lb3V0IiwiV2lkZ2V0IiwiVmlldyIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiY29uc3RydWN0b3IiLCJhcmdzIiwic2Vzc2lvbldyYXBwZXIiLCJvbiIsIm9uTG9nb3V0Iiwib25Mb2dpbiIsImNsZWFyIiwidW5kZWZpbmVkIiwib2ZmIiwic2hvdyIsImNsZWFyVGltZW91dCIsIkxheW91dEJyb2tlciIsIm92ZXJsYXkiLCJsb2FkIiwiaGlkZSIsImV4cG9ydHMiLCJfbW9kZWwiLCJfdGV4dHMiLCJfYmV5b25kX2NvbnRleHQiLCJfbGVhcm5pbmdNb2R1bGVzIiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwiaXRlbXMiLCJhc3NpZ25tZW50cyIsInRleHRzIiwiQ3VycmVudFRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidmFsdWUiLCJkcmFmdHMiLCJjbGFzc3Jvb21zIiwibW9kdWxlcyIsImNvbW11bml0eSIsInVzZXIiLCJpc1RlYWNoZXIiLCJyb2xlcyIsImluY2x1ZGVzIiwicmVhZHkiLCJ0cmlnZ2VyRXZlbnQiLCJzdGF0dXMiLCJkYXRhIiwiZ2V0SG9tZSIsImNvbnNvbGUiLCJsb2ciLCJtb2R1bGVQcm9taXNlcyIsIm1hcCIsIml0ZW0iLCJpbnN0YW5jZSIsIkxlYXJuaW5nTW9kdWxlIiwicHVzaCIsImlzUmVhZHkiLCJQcm9taXNlIiwiYWxsIiwiaW5kZXgiLCJzZXQiLCJnbG9iYWxUaGlzIiwiZSIsImVycm9yIiwiX3JlYWN0IiwiX2NvbnRleHQiLCJfaWNvbnMiLCJfY29tcG9uZW50cyIsIkVtcHR5QXNpZGVDbGFzc3Jvb21zIiwidXNlTW9kdWxlQ29udGV4dCIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiQXBwSWNvbiIsImljb24iLCJlbXB0eSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJMaW5rIiwiaHJlZiIsImFjdGlvbiIsIl9pdGVtIiwiX2xpc3QiLCJfZW1wdHkiLCJBc2lkZUNsYXNzcm9vbXMiLCJ0b3VyIiwiQXJyYXkiLCJpc0FycmF5IiwidG90YWwiLCJsZW5ndGgiLCJjbHMiLCJMaXN0IiwiY29udHJvbCIsIkFzaWRlQ2xhc3Nyb29tIiwiX3VpIiwiY29udGVudCIsIm5hbWUiLCJpZCIsImtleSIsIkVudGl0eUltYWdlIiwicmF0aW8iLCJzcmMiLCJwaWN0dXJlIiwiZW50aXR5IiwiRW1wdHlBc2lkZURyYWZ0IiwiQXNpZGVEcmFmdHMiLCJBc2lkZURyYWZ0SXRlbSIsIl9kcmFmdHMiLCJfY2xhc3Nyb29tcyIsIkFzaWRlIiwiX3NsaWRlciIsIkFzc2lnbm1lbnRzIiwib3V0cHV0IiwiQXNzaWdubWVudEl0ZW0iLCJQYWdlVGl0bGUiLCJhcyIsIlNsaWRlciIsIl9tb2R1bGVDYXJkIiwiTW9kdWxlQ2FyZCIsIk1vZHVsZUNhcmRGb290ZXIiLCJhY3Rpb25zIiwibGluayIsIl9zZWN0aW9uVGl0bGUiLCJfb3duZXJBc3NpZ24iLCJDb21tdW5pdHlNb2R1bGVzIiwib3Blbk1vZGFsIiwic2V0T3Blbk1vZGFsIiwidXNlU3RhdGUiLCJvcGVuIiwiY2FudEFjY2VzcyIsInRvZ2dsZU1vZGFsIiwiQ29tbXVuaXR5SXRlbSIsIlNlY3Rpb25UaXRsZSIsImFjdGlvblRleHQiLCJPd25lckFzc2lnbkZvcm0iLCJvbkNsb3NlIiwidHlwZSIsIm9uVXNlIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJGcmFnbWVudCIsInBsYXlncm91bmQiLCJhc3NpZ25tZW50IiwidGFyZ2V0IiwidGVzdCIsIkJ1dHRvbiIsInZhcmlhbnQiLCJvbkNsaWNrIiwidXNlIiwiUmVhY3QiLCJfbW9kYWwiLCJfcm91dGluZyIsIk9yZ2FuaXphdGlvbnNNb2RhbCIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiLCJzZXRFcnJvciIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJjbG9uZSIsInJlc3BvbnNlIiwiZXJyb3JzIiwiZmFpbGVkIiwicm91dGluZyIsInB1c2hTdGF0ZSIsIkl0ZW0iLCJhbHQiLCJJY29uIiwiTW9kYWwiLCJjbG9zZUJhY2tkcm9wIiwiRXJyb3JSZW5kZXJlciIsIm9yZ2FuaXphdGlvbnMiLCJzcGVjcyIsImRpc2FibGVkIiwiY29udGludWUiLCJNb2R1bGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfaG9va3MiLCJfcHJvZmlsZVNlY3Rpb24iLCJfYXNzaWdtZW50cyIsIl9hc2lkZSIsIl9tb2R1bGVzIiwiX2NvbW11bml0eSIsInNldFJlYWR5IiwidXNlQmluZGVyIiwicmVmIiwibWFpblJlZiIsInVzZURyaXZlclRvdXIiLCJidXR0b25zIiwiUGFnZUxvYWRlciIsImNvbnRleHRWYWx1ZSIsIlByb3ZpZGVyIiwiUGFnZUNvbnRhaW5lciIsIlByb2ZpbGVTZWN0aW9uIiwiTW9kdWxlcyIsIl9hc3NpZ24iLCJNb2R1bGVJdGVtIiwiTW9kdWxlQXNzaWdubWVudHMiLCJhc3NpZ24iLCJzaGFyZSIsImJvcmRlcmVkIiwidmFsaWRhdGUiLCJpc0FkbWluIiwic2hvd0FjdGlvbiIsImNyZWF0ZSIsIl9pbWFnZSIsIlVzZXJDYXJkIiwiSW1hZ2UiLCJwaG90b1VSTCIsImRpc3BsYXlOYW1lIiwiZW1haWwiLCJwcm9maWxlIiwiZWRpdCIsInN0ZXAwIiwiX3N3aXBlciIsImNoaWxkcmVuIiwiYnJlYWtwb2ludHMiLCJzbGlkZXNQZXJWaWV3IiwibmF2aWdhdGlvbiIsIm5leHRFbCIsInByZXZFbCIsIlN3aXBlclNsaWRlciIsInNwYWNlQmV0d2VlbiJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2FzaWRlL2NsYXNzcm9vbXMvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2FzaWRlL2NsYXNzcm9vbXMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2FzaWRlL2NsYXNzcm9vbXMvaXRlbS50c3giLCIvdHMvdmlld3MvYXNpZGUvZHJhZnRzL2VtcHR5LnRzeCIsIi90cy92aWV3cy9hc2lkZS9kcmFmdHMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2FzaWRlL2RyYWZ0cy9pdGVtLnRzeCIsIi90cy92aWV3cy9hc2lkZS9pbmRleC50c3giLCIvdHMvdmlld3MvYXNzaWdtZW50cy9pbmRleC50c3giLCIvdHMvdmlld3MvYXNzaWdtZW50cy9pdGVtLnRzeCIsIi90cy92aWV3cy9jb21tdW5pdHkvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2NvbW11bml0eS9pdGVtLnRzeCIsIi90cy92aWV3cy9jb21tdW5pdHkvb3JnYW5pemF0aW9ucy1tb2RhbC50c3giLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvbW9kdWxlcy9pbmRleC50c3giLCIvdHMvdmlld3MvbW9kdWxlcy9pdGVtLnRzeCIsIi90cy92aWV3cy9zZWN0aW9uLXRpdGxlLnRzeCIsIi90cy92aWV3cy9zZWN0aW9ucy9kcmFmdHMudHN4IiwiL3RzL3ZpZXdzL3NlY3Rpb25zL21vZHVsZXMudHN4IiwiL3RzL3ZpZXdzL3NlY3Rpb25zL3Byb2ZpbGUtc2VjdGlvbi50c3giLCIvdHMvdmlld3Mvc2xpZGVyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEs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