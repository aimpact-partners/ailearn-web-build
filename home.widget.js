System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.1.6-dev.08/main-layout.widget", "@aimpact/chat-sdk@1.1.0/session", "@beyond-js/reactive@1.2.0/model", "@beyond-js/kernel@0.1.9/texts", "@aimpact/ailearn-sdk@1.0.0/learning-modules", "@aimpact/ailearn-sdk@1.0.0/core", "react@18.2.0", "@aimpact/ailearn-app@0.1.6-dev.08/components/icons", "pragmate-ui@1.0.0-beta.2/components", "pragmate-ui@1.0.0-beta.2/list", "@aimpact/ailearn-app@0.1.6-dev.08/components/ui", "@aimpact/ailearn-app@0.1.6-dev.08/components/module-card", "@aimpact/ailearn-app@0.1.6-dev.08/modules/owner-assign.code", "pragmate-ui@1.0.0-beta.2/modal", "pragmate-ui@1.0.0-beta.2/icons", "@beyond-js/kernel@0.1.9/routing", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/ailearn-app@0.1.6-dev.08/modules/assign", "pragmate-ui@1.0.0-beta.2/image", "pragmate-ui@1.0.0-beta.2/swiper"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp016Dev08MainLayoutWidget) {
      dependency_4 = _aimpactAilearnApp016Dev08MainLayoutWidget;
    }, function (_aimpactChatSdk110Session) {
      dependency_5 = _aimpactChatSdk110Session;
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
    }, function (_aimpactAilearnApp016Dev08ComponentsIcons) {
      dependency_11 = _aimpactAilearnApp016Dev08ComponentsIcons;
    }, function (_pragmateUi100Beta2Components) {
      dependency_12 = _pragmateUi100Beta2Components;
    }, function (_pragmateUi100Beta2List) {
      dependency_13 = _pragmateUi100Beta2List;
    }, function (_aimpactAilearnApp016Dev08ComponentsUi) {
      dependency_14 = _aimpactAilearnApp016Dev08ComponentsUi;
    }, function (_aimpactAilearnApp016Dev08ComponentsModuleCard) {
      dependency_15 = _aimpactAilearnApp016Dev08ComponentsModuleCard;
    }, function (_aimpactAilearnApp016Dev08ModulesOwnerAssignCode) {
      dependency_16 = _aimpactAilearnApp016Dev08ModulesOwnerAssignCode;
    }, function (_pragmateUi100Beta2Modal) {
      dependency_17 = _pragmateUi100Beta2Modal;
    }, function (_pragmateUi100Beta2Icons) {
      dependency_18 = _pragmateUi100Beta2Icons;
    }, function (_beyondJsKernel019Routing) {
      dependency_19 = _beyondJsKernel019Routing;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_20 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactAilearnApp016Dev08ModulesAssign) {
      dependency_21 = _aimpactAilearnApp016Dev08ModulesAssign;
    }, function (_pragmateUi100Beta2Image) {
      dependency_22 = _pragmateUi100Beta2Image;
    }, function (_pragmateUi100Beta2Swiper) {
      dependency_23 = _pragmateUi100Beta2Swiper;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", null], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.1.0"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.2"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["markdown-it", "14.1.0"], ["markdown-it-katex", "2.0.3"], ["markdown-it-math", "4.1.1"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prism-themes", "1.9.0"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["react-katex", "3.0.1"], ["react-syntax-highlighter", "15.5.0"], ["simplebar-react", "3.2.6"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["wavesurfer.js", "7.8.4"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.1.6-dev.08"], ["@aimpact/ailearn-app", "0.1.6-dev.08"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.08/home",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/main-layout.widget', dependency_4], ['@aimpact/chat-sdk/session', dependency_5], ['@beyond-js/reactive/model', dependency_6], ['@beyond-js/kernel/texts', dependency_7], ['@aimpact/ailearn-sdk/learning-modules', dependency_8], ['@aimpact/ailearn-sdk/core', dependency_9], ['react', dependency_10], ['@aimpact/ailearn-app/components/icons', dependency_11], ['pragmate-ui/components', dependency_12], ['pragmate-ui/list', dependency_13], ['@aimpact/ailearn-app/components/ui', dependency_14], ['@aimpact/ailearn-app/components/module-card', dependency_15], ['@aimpact/ailearn-app/modules/owner-assign.code', dependency_16], ['pragmate-ui/modal', dependency_17], ['pragmate-ui/icons', dependency_18], ['@beyond-js/kernel/routing', dependency_19], ['@beyond-js/react-18-widgets/hooks', dependency_20], ['@aimpact/ailearn-app/modules/assign', dependency_21], ['pragmate-ui/image', dependency_22], ['pragmate-ui/swiper', dependency_23]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "student-home",
        "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.08/home.widget",
        "is": "page",
        "route": "/",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.6-dev.08/home.widget');
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
        hash: 1651852022,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJfbWFpbkxheW91dCIsIl9zZXNzaW9uIiwiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJzdG9yZSIsImhpZGVUaW1lb3V0IiwiV2lkZ2V0IiwiVmlldyIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiY29uc3RydWN0b3IiLCJhcmdzIiwic2Vzc2lvbldyYXBwZXIiLCJvbiIsIm9uTG9nb3V0Iiwib25Mb2dpbiIsImNsZWFyIiwidW5kZWZpbmVkIiwib2ZmIiwic2hvdyIsImNsZWFyVGltZW91dCIsIkxheW91dEJyb2tlciIsIm92ZXJsYXkiLCJsb2FkIiwiaGlkZSIsImV4cG9ydHMiLCJfbW9kZWwiLCJfdGV4dHMiLCJfYmV5b25kX2NvbnRleHQiLCJfbGVhcm5pbmdNb2R1bGVzIiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwiaXRlbXMiLCJhc3NpZ25tZW50cyIsInRleHRzIiwiQ3VycmVudFRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidmFsdWUiLCJkcmFmdHMiLCJjbGFzc3Jvb21zIiwibW9kdWxlcyIsImNvbW11bml0eSIsInVzZXIiLCJpc1RlYWNoZXIiLCJyb2xlcyIsImluY2x1ZGVzIiwicmVhZHkiLCJ0cmlnZ2VyRXZlbnQiLCJzdGF0dXMiLCJkYXRhIiwiZ2V0SG9tZSIsImNvbnNvbGUiLCJsb2ciLCJtb2R1bGVQcm9taXNlcyIsIm1hcCIsIml0ZW0iLCJpbnN0YW5jZSIsIkxlYXJuaW5nTW9kdWxlIiwicHVzaCIsImlzUmVhZHkiLCJQcm9taXNlIiwiYWxsIiwiaW5kZXgiLCJzZXQiLCJnbG9iYWxUaGlzIiwiZSIsImVycm9yIiwiX3JlYWN0IiwiX2NvbnRleHQiLCJfaWNvbnMiLCJfY29tcG9uZW50cyIsIkVtcHR5QXNpZGVDbGFzc3Jvb21zIiwidXNlTW9kdWxlQ29udGV4dCIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiQXBwSWNvbiIsImljb24iLCJlbXB0eSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJMaW5rIiwiaHJlZiIsImFjdGlvbiIsIl9pdGVtIiwiX2xpc3QiLCJfZW1wdHkiLCJBc2lkZUNsYXNzcm9vbXMiLCJ0b3VyIiwiQXJyYXkiLCJpc0FycmF5IiwidG90YWwiLCJsZW5ndGgiLCJjbHMiLCJMaXN0IiwiY29udHJvbCIsIkFzaWRlQ2xhc3Nyb29tIiwiX3VpIiwiY29udGVudCIsIm5hbWUiLCJpZCIsImtleSIsIkVudGl0eUltYWdlIiwicmF0aW8iLCJzcmMiLCJwaWN0dXJlIiwiZW50aXR5IiwiRW1wdHlBc2lkZURyYWZ0IiwiQXNpZGVEcmFmdHMiLCJBc2lkZURyYWZ0SXRlbSIsIl9kcmFmdHMiLCJfY2xhc3Nyb29tcyIsIkFzaWRlIiwiX3NsaWRlciIsIkFzc2lnbm1lbnRzIiwib3V0cHV0IiwiQXNzaWdubWVudEl0ZW0iLCJQYWdlVGl0bGUiLCJhcyIsIlNsaWRlciIsIl9tb2R1bGVDYXJkIiwiTW9kdWxlQ2FyZCIsIk1vZHVsZUNhcmRGb290ZXIiLCJhY3Rpb25zIiwibGluayIsIl9zZWN0aW9uVGl0bGUiLCJfb3duZXJBc3NpZ24iLCJDb21tdW5pdHlNb2R1bGVzIiwib3Blbk1vZGFsIiwic2V0T3Blbk1vZGFsIiwidXNlU3RhdGUiLCJvcGVuIiwidG9nZ2xlTW9kYWwiLCJDb21tdW5pdHlJdGVtIiwiU2VjdGlvblRpdGxlIiwiYWN0aW9uVGV4dCIsIk93bmVyQXNzaWduRm9ybSIsIm9uQ2xvc2UiLCJ0eXBlIiwib25Vc2UiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsIkZyYWdtZW50IiwicGxheWdyb3VuZCIsImFzc2lnbm1lbnQiLCJ0YXJnZXQiLCJ0ZXN0IiwiQnV0dG9uIiwidmFyaWFudCIsIm9uQ2xpY2siLCJ1c2UiLCJSZWFjdCIsIl9tb2RhbCIsIl9yb3V0aW5nIiwiT3JnYW5pemF0aW9uc01vZGFsIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsInNldEVycm9yIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsImNsb25lIiwicmVzcG9uc2UiLCJlcnJvcnMiLCJmYWlsZWQiLCJyb3V0aW5nIiwicHVzaFN0YXRlIiwiSXRlbSIsImFsdCIsIkljb24iLCJNb2RhbCIsImNsb3NlQmFja2Ryb3AiLCJFcnJvclJlbmRlcmVyIiwib3JnYW5pemF0aW9ucyIsInNwZWNzIiwiZGlzYWJsZWQiLCJjb250aW51ZSIsIk1vZHVsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9ob29rcyIsIl9wcm9maWxlU2VjdGlvbiIsIl9hc3NpZ21lbnRzIiwiX2FzaWRlIiwiX21vZHVsZXMiLCJfY29tbXVuaXR5Iiwic2V0UmVhZHkiLCJ1c2VCaW5kZXIiLCJyZWYiLCJtYWluUmVmIiwidXNlRHJpdmVyVG91ciIsImJ1dHRvbnMiLCJQYWdlTG9hZGVyIiwiY29udGV4dFZhbHVlIiwiUHJvdmlkZXIiLCJQYWdlQ29udGFpbmVyIiwiUHJvZmlsZVNlY3Rpb24iLCJNb2R1bGVzIiwiX2Fzc2lnbiIsIk1vZHVsZUl0ZW0iLCJNb2R1bGVBc3NpZ25tZW50cyIsImFzc2lnbiIsInNoYXJlIiwiYm9yZGVyZWQiLCJ2YWxpZGF0ZSIsImlzQWRtaW4iLCJzaG93QWN0aW9uIiwiY3JlYXRlIiwiX2ltYWdlIiwiVXNlckNhcmQiLCJJbWFnZSIsInBob3RvVVJMIiwiZGlzcGxheU5hbWUiLCJlbWFpbCIsInByb2ZpbGUiLCJlZGl0Iiwic3RlcDAiLCJfc3dpcGVyIiwiY2hpbGRyZW4iLCJicmVha3BvaW50cyIsInNsaWRlc1BlclZpZXciLCJuYXZpZ2F0aW9uIiwibmV4dEVsIiwicHJldkVsIiwiU3dpcGVyU2xpZGVyIiwic3BhY2VCZXR3ZWVuIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvYXNpZGUvY2xhc3Nyb29tcy9lbXB0eS50c3giLCIvdHMvdmlld3MvYXNpZGUvY2xhc3Nyb29tcy9pbmRleC50c3giLCIvdHMvdmlld3MvYXNpZGUvY2xhc3Nyb29tcy9pdGVtLnRzeCIsIi90cy92aWV3cy9hc2lkZS9kcmFmdHMvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2FzaWRlL2RyYWZ0cy9pbmRleC50c3giLCIvdHMvdmlld3MvYXNpZGUvZHJhZnRzL2l0ZW0udHN4IiwiL3RzL3ZpZXdzL2FzaWRlL2luZGV4LnRzeCIsIi90cy92aWV3cy9hc3NpZ21lbnRzL2luZGV4LnRzeCIsIi90cy92aWV3cy9hc3NpZ21lbnRzL2l0ZW0udHN4IiwiL3RzL3ZpZXdzL2NvbW11bml0eS9pbmRleC50c3giLCIvdHMvdmlld3MvY29tbXVuaXR5L2l0ZW0udHN4IiwiL3RzL3ZpZXdzL2NvbW11bml0eS9vcmdhbml6YXRpb25zLW1vZGFsLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9tb2R1bGVzL2luZGV4LnRzeCIsIi90cy92aWV3cy9tb2R1bGVzL2l0ZW0udHN4IiwiL3RzL3ZpZXdzL3NlY3Rpb24tdGl0bGUudHN4IiwiL3RzL3ZpZXdzL3NlY3Rpb25zL2RyYWZ0cy50c3giLCIvdHMvdmlld3Mvc2VjdGlvbnMvbW9kdWxlcy50c3giLCIvdHMvdmlld3Mvc2VjdGlvbnMvcHJvZmlsZS1zZWN0aW9uLnRzeCIsIi90cy92aWV3cy9zbGlkZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VB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