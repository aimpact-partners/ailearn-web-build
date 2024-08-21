System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.1.6-dev.04/main-layout.widget", "@aimpact/chat-sdk@1.0.1/session", "@beyond-js/reactive@1.2.0/model", "@beyond-js/kernel@0.1.9/texts", "@aimpact/ailearn-sdk@1.0.0/learning-modules", "@aimpact/ailearn-sdk@1.0.0/core", "react@18.2.0", "@aimpact/ailearn-app@0.1.6-dev.04/components/icons", "pragmate-ui@1.0.0-beta.2/components", "pragmate-ui@1.0.0-beta.2/list", "@aimpact/ailearn-app@0.1.6-dev.04/components/ui", "@aimpact/ailearn-app@0.1.6-dev.04/components/module-card", "pragmate-ui@1.0.0-beta.2/modal", "pragmate-ui@1.0.0-beta.2/icons", "@beyond-js/kernel@0.1.9/routing", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/ailearn-app@0.1.6-dev.04/modules/assign", "pragmate-ui@1.0.0-beta.2/link", "pragmate-ui@1.0.0-beta.2/image", "pragmate-ui@1.0.0-beta.2/swiper"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp016Dev04MainLayoutWidget) {
      dependency_4 = _aimpactAilearnApp016Dev04MainLayoutWidget;
    }, function (_aimpactChatSdk101Session) {
      dependency_5 = _aimpactChatSdk101Session;
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
    }, function (_aimpactAilearnApp016Dev04ComponentsIcons) {
      dependency_11 = _aimpactAilearnApp016Dev04ComponentsIcons;
    }, function (_pragmateUi100Beta2Components) {
      dependency_12 = _pragmateUi100Beta2Components;
    }, function (_pragmateUi100Beta2List) {
      dependency_13 = _pragmateUi100Beta2List;
    }, function (_aimpactAilearnApp016Dev04ComponentsUi) {
      dependency_14 = _aimpactAilearnApp016Dev04ComponentsUi;
    }, function (_aimpactAilearnApp016Dev04ComponentsModuleCard) {
      dependency_15 = _aimpactAilearnApp016Dev04ComponentsModuleCard;
    }, function (_pragmateUi100Beta2Modal) {
      dependency_16 = _pragmateUi100Beta2Modal;
    }, function (_pragmateUi100Beta2Icons) {
      dependency_17 = _pragmateUi100Beta2Icons;
    }, function (_beyondJsKernel019Routing) {
      dependency_18 = _beyondJsKernel019Routing;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_19 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactAilearnApp016Dev04ModulesAssign) {
      dependency_20 = _aimpactAilearnApp016Dev04ModulesAssign;
    }, function (_pragmateUi100Beta2Link) {
      dependency_21 = _pragmateUi100Beta2Link;
    }, function (_pragmateUi100Beta2Image) {
      dependency_22 = _pragmateUi100Beta2Image;
    }, function (_pragmateUi100Beta2Swiper) {
      dependency_23 = _pragmateUi100Beta2Swiper;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.2"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.2"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.1.6-dev.04"], ["@aimpact/ailearn-app", "0.1.6-dev.04"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.04/home",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/main-layout.widget', dependency_4], ['@aimpact/chat-sdk/session', dependency_5], ['@beyond-js/reactive/model', dependency_6], ['@beyond-js/kernel/texts', dependency_7], ['@aimpact/ailearn-sdk/learning-modules', dependency_8], ['@aimpact/ailearn-sdk/core', dependency_9], ['react', dependency_10], ['@aimpact/ailearn-app/components/icons', dependency_11], ['pragmate-ui/components', dependency_12], ['pragmate-ui/list', dependency_13], ['@aimpact/ailearn-app/components/ui', dependency_14], ['@aimpact/ailearn-app/components/module-card', dependency_15], ['pragmate-ui/modal', dependency_16], ['pragmate-ui/icons', dependency_17], ['@beyond-js/kernel/routing', dependency_18], ['@beyond-js/react-18-widgets/hooks', dependency_19], ['@aimpact/ailearn-app/modules/assign', dependency_20], ['pragmate-ui/link', dependency_21], ['pragmate-ui/image', dependency_22], ['pragmate-ui/swiper', dependency_23]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "student-home",
        "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.04/home.widget",
        "is": "page",
        "route": "/",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.6-dev.04/home.widget');
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
        hash: 1811747303,
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
            setBreadcrumb() {
              const onChange = this.setBreadcrumb.bind(this);
              if (!this.#texts.ready) {
                this.#texts.on('change', onChange);
                return;
              }
              this.#texts.off('change', onChange);
              _mainLayout.LayoutBroker.overlay = false;
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
        hash: 749104064,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CommunityModules = CommunityModules;
          var _react = require("react");
          var _context = require("../context");
          var _item = require("./item");
          var _organizationsModal = require("./organizations-modal");
          var _slider = require("../slider");
          var _sectionTitle = require("../section-title");
          function CommunityModules() {
            const {
              store: {
                community: modules,
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
              "data-description": texts.tour.community.description,
              "data-title": texts.tour.community.title,
              className: "assigments-list"
            }, _react.default.createElement(_sectionTitle.SectionTitle, {
              title: texts.community.title,
              href: "/community",
              actionText: texts.community.actions.link
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJfbWFpbkxheW91dCIsIl9zZXNzaW9uIiwiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJzdG9yZSIsImhpZGVUaW1lb3V0IiwiV2lkZ2V0IiwiVmlldyIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiY29uc3RydWN0b3IiLCJhcmdzIiwic2Vzc2lvbldyYXBwZXIiLCJvbiIsIm9uTG9nb3V0Iiwib25Mb2dpbiIsImNsZWFyIiwidW5kZWZpbmVkIiwib2ZmIiwic2hvdyIsImNsZWFyVGltZW91dCIsIkxheW91dEJyb2tlciIsIm92ZXJsYXkiLCJsb2FkIiwiaGlkZSIsImV4cG9ydHMiLCJfbW9kZWwiLCJfdGV4dHMiLCJfYmV5b25kX2NvbnRleHQiLCJfbGVhcm5pbmdNb2R1bGVzIiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwiaXRlbXMiLCJhc3NpZ25tZW50cyIsInRleHRzIiwiQ3VycmVudFRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidmFsdWUiLCJkcmFmdHMiLCJjbGFzc3Jvb21zIiwibW9kdWxlcyIsImNvbW11bml0eSIsInVzZXIiLCJpc1RlYWNoZXIiLCJyb2xlcyIsImluY2x1ZGVzIiwicmVhZHkiLCJ0cmlnZ2VyRXZlbnQiLCJzZXRCcmVhZGNydW1iIiwib25DaGFuZ2UiLCJiaW5kIiwic3RhdHVzIiwiZGF0YSIsImdldEhvbWUiLCJjb25zb2xlIiwibG9nIiwibW9kdWxlUHJvbWlzZXMiLCJtYXAiLCJpdGVtIiwiaW5zdGFuY2UiLCJMZWFybmluZ01vZHVsZSIsInB1c2giLCJpc1JlYWR5IiwiUHJvbWlzZSIsImFsbCIsImluZGV4Iiwic2V0IiwiZ2xvYmFsVGhpcyIsImUiLCJlcnJvciIsIl9yZWFjdCIsIl9jb250ZXh0IiwiX2ljb25zIiwiX2NvbXBvbmVudHMiLCJFbXB0eUFzaWRlQ2xhc3Nyb29tcyIsInVzZU1vZHVsZUNvbnRleHQiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIkFwcEljb24iLCJpY29uIiwiZW1wdHkiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiTGluayIsImhyZWYiLCJhY3Rpb24iLCJfaXRlbSIsIl9saXN0IiwiX2VtcHR5IiwiQXNpZGVDbGFzc3Jvb21zIiwidG91ciIsIkFycmF5IiwiaXNBcnJheSIsInRvdGFsIiwibGVuZ3RoIiwiY2xzIiwiTGlzdCIsImNvbnRyb2wiLCJBc2lkZUNsYXNzcm9vbSIsIl91aSIsImNvbnRlbnQiLCJuYW1lIiwiaWQiLCJrZXkiLCJFbnRpdHlJbWFnZSIsInJhdGlvIiwic3JjIiwicGljdHVyZSIsImVudGl0eSIsIkVtcHR5QXNpZGVEcmFmdCIsIkFzaWRlRHJhZnRzIiwiQXNpZGVEcmFmdEl0ZW0iLCJfZHJhZnRzIiwiX2NsYXNzcm9vbXMiLCJBc2lkZSIsIl9zbGlkZXIiLCJBc3NpZ25tZW50cyIsIm91dHB1dCIsIkFzc2lnbm1lbnRJdGVtIiwiUGFnZVRpdGxlIiwiYXMiLCJTbGlkZXIiLCJfbW9kdWxlQ2FyZCIsIk1vZHVsZUNhcmQiLCJNb2R1bGVDYXJkRm9vdGVyIiwiYWN0aW9ucyIsImxpbmsiLCJfb3JnYW5pemF0aW9uc01vZGFsIiwiX3NlY3Rpb25UaXRsZSIsIkNvbW11bml0eU1vZHVsZXMiLCJvcGVuTW9kYWwiLCJzZXRPcGVuTW9kYWwiLCJ1c2VTdGF0ZSIsIm9wZW4iLCJ0b2dnbGVNb2RhbCIsIkNvbW11bml0eUl0ZW0iLCJTZWN0aW9uVGl0bGUiLCJhY3Rpb25UZXh0IiwiT3JnYW5pemF0aW9uc01vZGFsIiwib25DbG9zZSIsIm9uVXNlIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJGcmFnbWVudCIsInBsYXlncm91bmQiLCJhc3NpZ25tZW50IiwidGFyZ2V0IiwidGVzdCIsIkJ1dHRvbiIsInZhcmlhbnQiLCJvbkNsaWNrIiwidXNlIiwiUmVhY3QiLCJfbW9kYWwiLCJfcm91dGluZyIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiLCJzZXRFcnJvciIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJjbG9uZSIsInJlc3BvbnNlIiwiZXJyb3JzIiwiZmFpbGVkIiwicm91dGluZyIsInB1c2hTdGF0ZSIsIkl0ZW0iLCJhbHQiLCJJY29uIiwiTW9kYWwiLCJjbG9zZUJhY2tkcm9wIiwiRXJyb3JSZW5kZXJlciIsIm9yZ2FuaXphdGlvbnMiLCJzcGVjcyIsImRpc2FibGVkIiwiY29udGludWUiLCJNb2R1bGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfaG9va3MiLCJfcHJvZmlsZVNlY3Rpb24iLCJfYXNzaWdtZW50cyIsIl9hc2lkZSIsIl9tb2R1bGVzIiwiX2NvbW11bml0eSIsInNldFJlYWR5IiwidXNlQmluZGVyIiwicmVmIiwibWFpblJlZiIsInVzZURyaXZlclRvdXIiLCJidXR0b25zIiwiUGFnZUxvYWRlciIsImNvbnRleHRWYWx1ZSIsIlByb3ZpZGVyIiwiUGFnZUNvbnRhaW5lciIsIlByb2ZpbGVTZWN0aW9uIiwiTW9kdWxlcyIsIl9hc3NpZ24iLCJNb2R1bGVJdGVtIiwiTW9kdWxlQXNzaWdubWVudHMiLCJhc3NpZ24iLCJzaGFyZSIsImJvcmRlcmVkIiwiX2xpbmsiLCJ2YWxpZGF0ZSIsImlzQWRtaW4iLCJzaG93QWN0aW9uIiwiY3JlYXRlIiwiX2ltYWdlIiwiVXNlckNhcmQiLCJJbWFnZSIsInBob3RvVVJMIiwiZGlzcGxheU5hbWUiLCJlbWFpbCIsInByb2ZpbGUiLCJlZGl0Iiwic3RlcDAiLCJfc3dpcGVyIiwiY2hpbGRyZW4iLCJicmVha3BvaW50cyIsInNsaWRlc1BlclZpZXciLCJuYXZpZ2F0aW9uIiwibmV4dEVsIiwicHJldkVsIiwiU3dpcGVyU2xpZGVyIiwic3BhY2VCZXR3ZWVuIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvYXNpZGUvY2xhc3Nyb29tcy9lbXB0eS50c3giLCIvdHMvdmlld3MvYXNpZGUvY2xhc3Nyb29tcy9pbmRleC50c3giLCIvdHMvdmlld3MvYXNpZGUvY2xhc3Nyb29tcy9pdGVtLnRzeCIsIi90cy92aWV3cy9hc2lkZS9kcmFmdHMvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2FzaWRlL2RyYWZ0cy9pbmRleC50c3giLCIvdHMvdmlld3MvYXNpZGUvZHJhZnRzL2l0ZW0udHN4IiwiL3RzL3ZpZXdzL2FzaWRlL2luZGV4LnRzeCIsIi90cy92aWV3cy9hc3NpZ21lbnRzL2luZGV4LnRzeCIsIi90cy92aWV3cy9hc3NpZ21lbnRzL2l0ZW0udHN4IiwiL3RzL3ZpZXdzL2NvbW11bml0eS9pbmRleC50c3giLCIvdHMvdmlld3MvY29tbXVuaXR5L2l0ZW0udHN4IiwiL3RzL3ZpZXdzL2NvbW11bml0eS9vcmdhbml6YXRpb25zLW1vZGFsLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9tb2R1bGVzL2luZGV4LnRzeCIsIi90cy92aWV3cy9tb2R1bGVzL2l0ZW0udHN4IiwiL3RzL3ZpZXdzL3NlY3Rpb24tdGl0bGUudHN4IiwiL3RzL3ZpZXdzL3NlY3Rpb25zL2RyYWZ0cy50c3giLCIvdHMvdmlld3Mvc2VjdGlvbnMvbW9kdWxlcy50c3giLCIvdHMvdmlld3Mvc2VjdGlvbnMvcHJvZmlsZS1zZWN0aW9uLnRzeCIsIi90cy92aWV3cy9zbGlkZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0Es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LENBQUFDLGFBQUEsQ0FBQ29JLE1BQUEsQ0FBQUUsS0FBSztjQUFDckksU0FBUyxFQUFDLG1CQUFtQjtjQUFDNkIsR0FBRyxFQUFFakUsSUFBSSxDQUFDMEssUUFBUTtjQUFFNUMsR0FBRyxFQUFDO1lBQWlCLEVBQUcsRUFDakZsRyxNQUFBLENBQUFNLE9BQUEsQ0FBQUMsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBeUQsR0FDdkVSLE1BQUEsQ0FBQU0sT0FBQSxDQUFBQyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUFTLEdBQ3ZCUixNQUFBLENBQUFNLE9BQUEsQ0FBQUMsYUFBQSxhQUFLbkMsSUFBSSxDQUFDMkssV0FBVyxDQUFNLEVBQzNCL0ksTUFBQSxDQUFBTSxPQUFBLENBQUFDLGFBQUE7Y0FBTUMsU0FBUyxFQUFDO1lBQUksR0FBRXBDLElBQUksQ0FBQzRLLEtBQUssQ0FBUSxDQUNuQyxFQUNOaEosTUFBQSxDQUFBTSxPQUFBLENBQUFDLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQWUsR0FDN0JSLE1BQUEsQ0FBQU0sT0FBQSxDQUFBQyxhQUFBLENBQUMrSCxLQUFBLENBQUF4SCxJQUFJO2NBQUNDLElBQUksRUFBQztZQUFXLEdBQUVwRCxLQUFLLENBQUNzTCxPQUFPLENBQUNDLElBQUksQ0FBUSxDQUM3QyxDQUNELENBQ0c7VUFFWjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM3QkEsSUFBQWxKLE1BQUEsR0FBQTFFLE9BQUE7VUFDQSxJQUFBOE4sT0FBQSxHQUFBOU4sT0FBQTtVQUNNLFNBQVU4SCxNQUFNQSxDQUFDO1lBQUVpRztVQUFRLENBQUU7WUFDbEMsTUFBTUMsV0FBVyxHQUFHO2NBQ25CLENBQUMsRUFBRTtnQkFDRkMsYUFBYSxFQUFFO2VBQ2Y7Y0FDRCxHQUFHLEVBQUU7Z0JBQ0pBLGFBQWEsRUFBRTs7YUFFaEI7WUFDRCxNQUFNL0MsS0FBSyxHQUFHO2NBQ2I7Y0FDQStDLGFBQWEsRUFBRSxNQUFNO2NBQ3JCQyxVQUFVLEVBQUU7Z0JBQ1hDLE1BQU0sRUFBRSxxQkFBcUI7Z0JBQzdCQyxNQUFNLEVBQUU7O2FBRVQ7WUFDRCxPQUNDMUosTUFBQSxDQUFBTSxPQUFBLENBQUFDLGFBQUEsQ0FBQzZJLE9BQUEsQ0FBQU8sWUFBWTtjQUFBLEdBQUtuRCxLQUFLO2NBQUVoRyxTQUFTLEVBQUMsMEJBQTBCO2NBQUNvSixZQUFZLEVBQUU7WUFBRSxHQUM1RVAsUUFBUSxDQUNLO1VBRWpCIiwiaWdub3JlTGlzdCI6W119