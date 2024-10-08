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
        hash: 1868043002,
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
        hash: 1569361456,
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
              texts: texts,
              showDate: true
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJfbWFpbkxheW91dCIsIl9zZXNzaW9uIiwiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJzdG9yZSIsImhpZGVUaW1lb3V0IiwiV2lkZ2V0IiwiVmlldyIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiY29uc3RydWN0b3IiLCJhcmdzIiwic2Vzc2lvbldyYXBwZXIiLCJvbiIsIm9uTG9nb3V0Iiwib25Mb2dpbiIsImNsZWFyIiwidW5kZWZpbmVkIiwib2ZmIiwic2hvdyIsImNsZWFyVGltZW91dCIsIkxheW91dEJyb2tlciIsIm92ZXJsYXkiLCJsb2FkIiwiaGlkZSIsImV4cG9ydHMiLCJfbW9kZWwiLCJfdGV4dHMiLCJfYmV5b25kX2NvbnRleHQiLCJfbGVhcm5pbmdNb2R1bGVzIiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwiaXRlbXMiLCJhc3NpZ25tZW50cyIsInRleHRzIiwiQ3VycmVudFRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidmFsdWUiLCJkcmFmdHMiLCJjbGFzc3Jvb21zIiwibW9kdWxlcyIsImNvbW11bml0eSIsInVzZXIiLCJpc1RlYWNoZXIiLCJyb2xlcyIsImluY2x1ZGVzIiwicmVhZHkiLCJ0cmlnZ2VyRXZlbnQiLCJzdGF0dXMiLCJkYXRhIiwiZ2V0SG9tZSIsImNvbnNvbGUiLCJsb2ciLCJtb2R1bGVQcm9taXNlcyIsIm1hcCIsIml0ZW0iLCJpbnN0YW5jZSIsIkxlYXJuaW5nTW9kdWxlIiwicHVzaCIsImlzUmVhZHkiLCJQcm9taXNlIiwiYWxsIiwiaW5kZXgiLCJzZXQiLCJnbG9iYWxUaGlzIiwiZSIsImVycm9yIiwiX3JlYWN0IiwiX2NvbnRleHQiLCJfaWNvbnMiLCJfY29tcG9uZW50cyIsIkVtcHR5QXNpZGVDbGFzc3Jvb21zIiwidXNlTW9kdWxlQ29udGV4dCIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiQXBwSWNvbiIsImljb24iLCJlbXB0eSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJMaW5rIiwiaHJlZiIsImFjdGlvbiIsIl9pdGVtIiwiX2xpc3QiLCJfZW1wdHkiLCJBc2lkZUNsYXNzcm9vbXMiLCJ0b3VyIiwiQXJyYXkiLCJpc0FycmF5IiwidG90YWwiLCJsZW5ndGgiLCJjbHMiLCJMaXN0IiwiY29udHJvbCIsIkFzaWRlQ2xhc3Nyb29tIiwiX3VpIiwiY29udGVudCIsIm5hbWUiLCJpZCIsImtleSIsIkVudGl0eUltYWdlIiwicmF0aW8iLCJzcmMiLCJwaWN0dXJlIiwiZW50aXR5IiwiRW1wdHlBc2lkZURyYWZ0IiwiQXNpZGVEcmFmdHMiLCJBc2lkZURyYWZ0SXRlbSIsIl9kcmFmdHMiLCJfY2xhc3Nyb29tcyIsIkFzaWRlIiwiX3NsaWRlciIsIkFzc2lnbm1lbnRzIiwib3V0cHV0IiwiQXNzaWdubWVudEl0ZW0iLCJQYWdlVGl0bGUiLCJhcyIsIlNsaWRlciIsIl9tb2R1bGVDYXJkIiwiTW9kdWxlQ2FyZCIsIk1vZHVsZUNhcmRGb290ZXIiLCJhY3Rpb25zIiwibGluayIsIl9zZWN0aW9uVGl0bGUiLCJfb3duZXJBc3NpZ24iLCJDb21tdW5pdHlNb2R1bGVzIiwib3Blbk1vZGFsIiwic2V0T3Blbk1vZGFsIiwidXNlU3RhdGUiLCJvcGVuIiwiY2FudEFjY2VzcyIsInRvZ2dsZU1vZGFsIiwiQ29tbXVuaXR5SXRlbSIsIlNlY3Rpb25UaXRsZSIsImFjdGlvblRleHQiLCJPd25lckFzc2lnbkZvcm0iLCJvbkNsb3NlIiwidHlwZSIsIm9uVXNlIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJGcmFnbWVudCIsInNob3dEYXRlIiwicGxheWdyb3VuZCIsImFzc2lnbm1lbnQiLCJ0YXJnZXQiLCJ0ZXN0IiwiQnV0dG9uIiwidmFyaWFudCIsIm9uQ2xpY2siLCJ1c2UiLCJSZWFjdCIsIl9tb2RhbCIsIl9yb3V0aW5nIiwiT3JnYW5pemF0aW9uc01vZGFsIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsInNldEVycm9yIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsImNsb25lIiwicmVzcG9uc2UiLCJlcnJvcnMiLCJmYWlsZWQiLCJyb3V0aW5nIiwicHVzaFN0YXRlIiwiSXRlbSIsImFsdCIsIkljb24iLCJNb2RhbCIsImNsb3NlQmFja2Ryb3AiLCJFcnJvclJlbmRlcmVyIiwib3JnYW5pemF0aW9ucyIsInNwZWNzIiwiZGlzYWJsZWQiLCJjb250aW51ZSIsIk1vZHVsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9ob29rcyIsIl9wcm9maWxlU2VjdGlvbiIsIl9hc3NpZ21lbnRzIiwiX2FzaWRlIiwiX21vZHVsZXMiLCJfY29tbXVuaXR5Iiwic2V0UmVhZHkiLCJ1c2VCaW5kZXIiLCJyZWYiLCJtYWluUmVmIiwidXNlRHJpdmVyVG91ciIsImJ1dHRvbnMiLCJQYWdlTG9hZGVyIiwiY29udGV4dFZhbHVlIiwiUHJvdmlkZXIiLCJQYWdlQ29udGFpbmVyIiwiUHJvZmlsZVNlY3Rpb24iLCJNb2R1bGVzIiwiX2Fzc2lnbiIsIk1vZHVsZUl0ZW0iLCJNb2R1bGVBc3NpZ25tZW50cyIsImFzc2lnbiIsInNoYXJlIiwiYm9yZGVyZWQiLCJ2YWxpZGF0ZSIsImlzQWRtaW4iLCJzaG93QWN0aW9uIiwiY3JlYXRlIiwiX2ltYWdlIiwiVXNlckNhcmQiLCJJbWFnZSIsInBob3RvVVJMIiwiZGlzcGxheU5hbWUiLCJlbWFpbCIsInByb2ZpbGUiLCJlZGl0Iiwic3RlcDAiLCJfc3dpcGVyIiwiY2hpbGRyZW4iLCJicmVha3BvaW50cyIsInNsaWRlc1BlclZpZXciLCJuYXZpZ2F0aW9uIiwibmV4dEVsIiwicHJldkVsIiwiU3dpcGVyU2xpZGVyIiwic3BhY2VCZXR3ZWVuIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvYXNpZGUvY2xhc3Nyb29tcy9lbXB0eS50c3giLCIvdHMvdmlld3MvYXNpZGUvY2xhc3Nyb29tcy9pbmRleC50c3giLCIvdHMvdmlld3MvYXNpZGUvY2xhc3Nyb29tcy9pdGVtLnRzeCIsIi90cy92aWV3cy9hc2lkZS9kcmFmdHMvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2FzaWRlL2RyYWZ0cy9pbmRleC50c3giLCIvdHMvdmlld3MvYXNpZGUvZHJhZnRzL2l0ZW0udHN4IiwiL3RzL3ZpZXdzL2FzaWRlL2luZGV4LnRzeCIsIi90cy92aWV3cy9hc3NpZ21lbnRzL2luZGV4LnRzeCIsIi90cy92aWV3cy9hc3NpZ21lbnRzL2l0ZW0udHN4IiwiL3RzL3ZpZXdzL2NvbW11bml0eS9pbmRleC50c3giLCIvdHMvdmlld3MvY29tbXVuaXR5L2l0ZW0udHN4IiwiL3RzL3ZpZXdzL2NvbW11bml0eS9vcmdhbml6YXRpb25zLW1vZGFsLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9tb2R1bGVzL2luZGV4LnRzeCIsIi90cy92aWV3cy9tb2R1bGVzL2l0ZW0udHN4IiwiL3RzL3ZpZXdzL3NlY3Rpb24tdGl0bGUudHN4IiwiL3RzL3ZpZXdzL3NlY3Rpb25zL2RyYWZ0cy50c3giLCIvdHMvdmlld3Mvc2VjdGlvbnMvbW9kdWxlcy50c3giLCIvdHMvdmlld3Mvc2VjdGlvbnMvcHJvZmlsZS1zZWN0aW9uLnRzeCIsIi90cy92aWV3cy9zbGlkZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0Es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