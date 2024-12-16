System.register(["@beyond-js/widgets@1.1.1/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.2.17/main-layout.widget", "@aimpact/chat-sdk@1.4.1/session", "@beyond-js/reactive@1.1.12/model", "@beyond-js/kernel@0.1.9/texts", "@aimpact/ailearn-sdk@1.0.0/learning-modules", "@aimpact/ailearn-sdk@1.0.0/core", "react@18.2.0", "@aimpact/ailearn-app@0.2.17/components/icons", "pragmate-ui@1.0.0-beta.7/components", "pragmate-ui@1.0.0-beta.7/icons", "pragmate-ui@1.0.0-beta.7/list", "@aimpact/ailearn-app@0.2.17/components/ui", "@aimpact/ailearn-app@0.2.17/components/module-card", "@aimpact/ailearn-app@0.2.17/modules/owner-assign.code", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/ailearn-app@0.2.17/modules/assign", "pragmate-ui@1.0.0-beta.7/image", "pragmate-ui@1.0.0-beta.7/swiper"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, bimport, __Bundle, __pkg, ims, Controller, AssignmentItem, CommunityItem, View, ModuleItem, UserCard, ProfileSection, __beyond_pkg, hmr;
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
    setters: [function (_beyondJsWidgets111Render) {
      dependency_0 = _beyondJsWidgets111Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_beyondJsReact18Widgets112Page) {
      dependency_3 = _beyondJsReact18Widgets112Page;
    }, function (_aimpactAilearnApp0217MainLayoutWidget) {
      dependency_4 = _aimpactAilearnApp0217MainLayoutWidget;
    }, function (_aimpactChatSdk141Session) {
      dependency_5 = _aimpactChatSdk141Session;
    }, function (_beyondJsReactive1112Model) {
      dependency_6 = _beyondJsReactive1112Model;
    }, function (_beyondJsKernel019Texts) {
      dependency_7 = _beyondJsKernel019Texts;
    }, function (_aimpactAilearnSdk100LearningModules) {
      dependency_8 = _aimpactAilearnSdk100LearningModules;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_9 = _aimpactAilearnSdk100Core;
    }, function (_react2) {
      dependency_10 = _react2;
    }, function (_aimpactAilearnApp0217ComponentsIcons) {
      dependency_11 = _aimpactAilearnApp0217ComponentsIcons;
    }, function (_pragmateUi100Beta7Components) {
      dependency_12 = _pragmateUi100Beta7Components;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_13 = _pragmateUi100Beta7Icons;
    }, function (_pragmateUi100Beta7List) {
      dependency_14 = _pragmateUi100Beta7List;
    }, function (_aimpactAilearnApp0217ComponentsUi) {
      dependency_15 = _aimpactAilearnApp0217ComponentsUi;
    }, function (_aimpactAilearnApp0217ComponentsModuleCard) {
      dependency_16 = _aimpactAilearnApp0217ComponentsModuleCard;
    }, function (_aimpactAilearnApp0217ModulesOwnerAssignCode) {
      dependency_17 = _aimpactAilearnApp0217ModulesOwnerAssignCode;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_18 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactAilearnApp0217ModulesAssign) {
      dependency_19 = _aimpactAilearnApp0217ModulesAssign;
    }, function (_pragmateUi100Beta7Image) {
      dependency_20 = _pragmateUi100Beta7Image;
    }, function (_pragmateUi100Beta7Swiper) {
      dependency_21 = _pragmateUi100Beta7Swiper;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.1"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.23.8"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.2.17"], ["@aimpact/ailearn-app", "0.2.17"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.2.17/home",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/main-layout.widget', dependency_4], ['@aimpact/chat-sdk/session', dependency_5], ['@beyond-js/reactive/model', dependency_6], ['@beyond-js/kernel/texts', dependency_7], ['@aimpact/ailearn-sdk/learning-modules', dependency_8], ['@aimpact/ailearn-sdk/core', dependency_9], ['react', dependency_10], ['@aimpact/ailearn-app/components/icons', dependency_11], ['pragmate-ui/components', dependency_12], ['pragmate-ui/icons', dependency_13], ['pragmate-ui/list', dependency_14], ['@aimpact/ailearn-app/components/ui', dependency_15], ['@aimpact/ailearn-app/components/module-card', dependency_16], ['@aimpact/ailearn-app/modules/owner-assign.code', dependency_17], ['@beyond-js/react-18-widgets/hooks', dependency_18], ['@aimpact/ailearn-app/modules/assign', dependency_19], ['pragmate-ui/image', dependency_20], ['pragmate-ui/swiper', dependency_21]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "student-home",
        "vspecifier": "@aimpact/ailearn-app@0.2.17/home.widget",
        "is": "page",
        "route": "/",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.2.17/home.widget');
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
        hash: 2773635668,
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
              return super.ready && this.#texts.ready && this.#globalTexts.ready;
            }
            #globalTexts;
            get globalTexts() {
              return this.#globalTexts.value;
            }
            constructor() {
              super();
              this.#texts.on('change', this.triggerEvent);
              this.#globalTexts = new _texts.CurrentTexts('@aimpact/ailearn-app/i18n');
              this.#globalTexts.fetch();
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
        hash: 788103794,
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
              href: "/classrooms/management",
              className: "btn btn-secondary"
            }, texts.empty.action)));
          }
        }
      });

      /**********************************************
      INTERNAL MODULE: ./views/aside/classrooms/index
      **********************************************/

      ims.set('./views/aside/classrooms/index', {
        hash: 3792990056,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AsideClassrooms = AsideClassrooms;
          var _components = require("pragmate-ui/components");
          var _icons = require("pragmate-ui/icons");
          var _list = require("pragmate-ui/list");
          var _react = require("react");
          var _context = require("../../context");
          var _empty = require("./empty");
          var _item = require("./item");
          function AsideClassrooms() {
            const {
              store,
              texts: {
                classrooms: texts,
                tour
              }
            } = (0, _context.useModuleContext)();
            // if (!store.isTeacher) return null;
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
            }, _react.default.createElement("h5", null, texts.title)), _react.default.createElement(_icons.IconButton, {
              icon: "plus",
              title: texts.action,
              href: "/classrooms/management"
            })), _react.default.createElement(_list.List, {
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
        hash: 3463727127,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AsideDrafts = AsideDrafts;
          var _components = require("pragmate-ui/components");
          var _icons = require("pragmate-ui/icons");
          var _list = require("pragmate-ui/list");
          var _react = require("react");
          var _context = require("../../context");
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
            }, _react.default.createElement("h5", null, texts.title)), _react.default.createElement(_icons.IconButton, {
              icon: "plus",
              title: texts.action,
              href: "/modules/management"
            })), _react.default.createElement(_list.List, {
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
        hash: 3014941136,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AssignmentItem = AssignmentItem;
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _moduleCard = require("@aimpact/ailearn-app/components/module-card");
          var _react = require("react");
          var _context = require("../context");
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
              texts: texts,
              href: `/assignments/${item.id}`
            }, _react.default.createElement(_moduleCard.ModuleCardFooter, {
              className: "actions-end entity__footer--right",
              item: item.module
            }, _react.default.createElement(_icons.AppIconButton, {
              icon: "watch",
              title: texts.actions.link,
              href: `/assignments/${item.id}`
            })));
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
        hash: 777159248,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CommunityItem = CommunityItem;
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _moduleCard = require("@aimpact/ailearn-app/components/module-card");
          var _react = require("react");
          var _context = require("../context");
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
            }, item?.playground?.assignment && _react.default.createElement(_icons.AppIconButton, {
              icon: "watch",
              title: texts.actions.test,
              target: "_blank",
              href: item.playground.assignment
            }), _react.default.createElement(_icons.AppIconButton, {
              onClick: onUse,
              icon: "clone",
              title: texts.actions.use
            }))));
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
        hash: 3702194966,
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
            }, _react.default.createElement(_ui.DriverTourContainer, {
              name: "home",
              ready: ready,
              texts: texts?.tour?.buttons,
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
        hash: 778751566,
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
              item: null,
              action: null
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
              action: openModal.action,
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
        hash: 284879008,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleItem = ModuleItem;
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _moduleCard = require("@aimpact/ailearn-app/components/module-card");
          var _react = require("react");
          var _context = require("../context");
          /*bundle*/
          function ModuleItem({
            item,
            toggleModal
          }) {
            const {
              store: {
                texts,
                globalTexts
              }
            } = (0, _context.useModuleContext)();
            const share = event => {
              event.stopPropagation();
              toggleModal({
                open: true,
                item,
                action: event.currentTarget.dataset.action
              });
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_moduleCard.ModuleCard, {
              item: item,
              texts: texts
            }, _react.default.createElement(_moduleCard.ModuleCardFooter, {
              item: item
            }, _react.default.createElement(_icons.AppIconButton, {
              "data-action": "share",
              onClick: share,
              icon: "share",
              title: globalTexts.actions.share
            }), _react.default.createElement(_icons.AppIconButton, {
              "data-action": "dashboard",
              onClick: share,
              icon: "statistic",
              title: globalTexts.actions.dashboard
            }), _react.default.createElement(_icons.AppIconButton, {
              "data-action": "navigate",
              onClick: share,
              icon: "watch",
              title: globalTexts.actions.watchActivity
            }))));
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./views/section-title
      *************************************/

      ims.set('./views/section-title', {
        hash: 2903983344,
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
                globalTexts
              }
            } = (0, _context.useModuleContext)();
            const isAdmin = _session.sessionWrapper?.user?.roles?.includes('teacher');
            const showAction = isAdmin && validate;
            const action = actionText ?? globalTexts.actions.create;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJfbWFpbkxheW91dCIsIl9zZXNzaW9uIiwiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJzdG9yZSIsImhpZGVUaW1lb3V0IiwiV2lkZ2V0IiwiVmlldyIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiY29uc3RydWN0b3IiLCJhcmdzIiwic2Vzc2lvbldyYXBwZXIiLCJvbiIsIm9uTG9nb3V0Iiwib25Mb2dpbiIsImNsZWFyIiwidW5kZWZpbmVkIiwib2ZmIiwic2hvdyIsImNsZWFyVGltZW91dCIsIkxheW91dEJyb2tlciIsIm92ZXJsYXkiLCJsb2FkIiwiaGlkZSIsImV4cG9ydHMiLCJfbW9kZWwiLCJfdGV4dHMiLCJfYmV5b25kX2NvbnRleHQiLCJfbGVhcm5pbmdNb2R1bGVzIiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwiaXRlbXMiLCJhc3NpZ25tZW50cyIsInRleHRzIiwiQ3VycmVudFRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidmFsdWUiLCJkcmFmdHMiLCJjbGFzc3Jvb21zIiwibW9kdWxlcyIsImNvbW11bml0eSIsInVzZXIiLCJpc1RlYWNoZXIiLCJyb2xlcyIsImluY2x1ZGVzIiwicmVhZHkiLCJnbG9iYWxUZXh0cyIsInRyaWdnZXJFdmVudCIsImZldGNoIiwic3RhdHVzIiwiZGF0YSIsImdldEhvbWUiLCJjb25zb2xlIiwibG9nIiwibW9kdWxlUHJvbWlzZXMiLCJtYXAiLCJpdGVtIiwiaW5zdGFuY2UiLCJMZWFybmluZ01vZHVsZSIsInB1c2giLCJpc1JlYWR5IiwiUHJvbWlzZSIsImFsbCIsImluZGV4Iiwic2V0IiwiZ2xvYmFsVGhpcyIsImUiLCJlcnJvciIsIl9yZWFjdCIsIl9jb250ZXh0IiwiX2ljb25zIiwiX2NvbXBvbmVudHMiLCJFbXB0eUFzaWRlQ2xhc3Nyb29tcyIsInVzZU1vZHVsZUNvbnRleHQiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIkFwcEljb24iLCJpY29uIiwiZW1wdHkiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiTGluayIsImhyZWYiLCJhY3Rpb24iLCJfbGlzdCIsIl9lbXB0eSIsIl9pdGVtIiwiQXNpZGVDbGFzc3Jvb21zIiwidG91ciIsIkFycmF5IiwiaXNBcnJheSIsInRvdGFsIiwibGVuZ3RoIiwiY2xzIiwiSWNvbkJ1dHRvbiIsIkxpc3QiLCJjb250cm9sIiwiQXNpZGVDbGFzc3Jvb20iLCJfdWkiLCJjb250ZW50IiwibmFtZSIsImlkIiwia2V5IiwiRW50aXR5SW1hZ2UiLCJyYXRpbyIsInNyYyIsInBpY3R1cmUiLCJlbnRpdHkiLCJFbXB0eUFzaWRlRHJhZnQiLCJBc2lkZURyYWZ0cyIsIkFzaWRlRHJhZnRJdGVtIiwiX2RyYWZ0cyIsIl9jbGFzc3Jvb21zIiwiQXNpZGUiLCJfc2xpZGVyIiwiQXNzaWdubWVudHMiLCJvdXRwdXQiLCJBc3NpZ25tZW50SXRlbSIsIlBhZ2VUaXRsZSIsImFzIiwiU2xpZGVyIiwiX21vZHVsZUNhcmQiLCJNb2R1bGVDYXJkIiwiTW9kdWxlQ2FyZEZvb3RlciIsIkFwcEljb25CdXR0b24iLCJhY3Rpb25zIiwibGluayIsIl9zZWN0aW9uVGl0bGUiLCJfb3duZXJBc3NpZ24iLCJDb21tdW5pdHlNb2R1bGVzIiwib3Blbk1vZGFsIiwic2V0T3Blbk1vZGFsIiwidXNlU3RhdGUiLCJvcGVuIiwiY2FudEFjY2VzcyIsInRvZ2dsZU1vZGFsIiwiQ29tbXVuaXR5SXRlbSIsIlNlY3Rpb25UaXRsZSIsImFjdGlvblRleHQiLCJPd25lckFzc2lnbkZvcm0iLCJvbkNsb3NlIiwidHlwZSIsIm9uVXNlIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJGcmFnbWVudCIsInNob3dEYXRlIiwicGxheWdyb3VuZCIsImFzc2lnbm1lbnQiLCJ0ZXN0IiwidGFyZ2V0Iiwib25DbGljayIsInVzZSIsIk1vZHVsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9ob29rcyIsIl9wcm9maWxlU2VjdGlvbiIsIl9hc3NpZ21lbnRzIiwiX2FzaWRlIiwiX21vZHVsZXMiLCJfY29tbXVuaXR5Iiwic2V0UmVhZHkiLCJ1c2VCaW5kZXIiLCJQYWdlTG9hZGVyIiwiZmV0Y2hpbmciLCJjb250ZXh0VmFsdWUiLCJQcm92aWRlciIsIlBhZ2VDb250YWluZXIiLCJEcml2ZXJUb3VyQ29udGFpbmVyIiwiYnV0dG9ucyIsIlByb2ZpbGVTZWN0aW9uIiwiTW9kdWxlcyIsIl9hc3NpZ24iLCJNb2R1bGVJdGVtIiwiTW9kdWxlQXNzaWdubWVudHMiLCJhc3NpZ24iLCJzaGFyZSIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiZGFzaGJvYXJkIiwid2F0Y2hBY3Rpdml0eSIsInZhbGlkYXRlIiwiaXNBZG1pbiIsInNob3dBY3Rpb24iLCJjcmVhdGUiLCJfaW1hZ2UiLCJVc2VyQ2FyZCIsIkltYWdlIiwicGhvdG9VUkwiLCJhbHQiLCJkaXNwbGF5TmFtZSIsImVtYWlsIiwicHJvZmlsZSIsImVkaXQiLCJzdGVwMCIsIl9zd2lwZXIiLCJjaGlsZHJlbiIsImJyZWFrcG9pbnRzIiwic2xpZGVzUGVyVmlldyIsInNwZWNzIiwibmF2aWdhdGlvbiIsIm5leHRFbCIsInByZXZFbCIsIlN3aXBlclNsaWRlciIsInNwYWNlQmV0d2VlbiJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2FzaWRlL2NsYXNzcm9vbXMvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2FzaWRlL2NsYXNzcm9vbXMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2FzaWRlL2NsYXNzcm9vbXMvaXRlbS50c3giLCIvdHMvdmlld3MvYXNpZGUvZHJhZnRzL2VtcHR5LnRzeCIsIi90cy92aWV3cy9hc2lkZS9kcmFmdHMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2FzaWRlL2RyYWZ0cy9pdGVtLnRzeCIsIi90cy92aWV3cy9hc2lkZS9pbmRleC50c3giLCIvdHMvdmlld3MvYXNzaWdtZW50cy9pbmRleC50c3giLCIvdHMvdmlld3MvYXNzaWdtZW50cy9pdGVtLnRzeCIsIi90cy92aWV3cy9jb21tdW5pdHkvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2NvbW11bml0eS9pdGVtLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9tb2R1bGVzL2luZGV4LnRzeCIsIi90cy92aWV3cy9tb2R1bGVzL2l0ZW0udHN4IiwiL3RzL3ZpZXdzL3NlY3Rpb24tdGl0bGUudHN4IiwiL3RzL3ZpZXdzL3NlY3Rpb25zL2RyYWZ0cy50c3giLCIvdHMvdmlld3Mvc2VjdGlvbnMvbW9kdWxlcy50c3giLCIvdHMvdmlld3Mvc2VjdGlvbnMvcHJvZmlsZS1zZWN0aW9uLnRzeCIsIi90cy92aWV3cy9zbGlkZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQUcsV0FBQSxHQUFBSCxPQUFBO1VBQ0EsSUFBQUksUUFBQSxHQUFBSixPQUFBO1VBQ087VUFBVSxNQUNYSyxVQUFXLFNBQVFOLEtBQUEsQ0FBQU8seUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDRUMsV0FBVyxHQUF5QyxJQUFJO1lBQ2hFLElBQUlDLE1BQU1BLENBQUE7Y0FDVCxPQUFPUCxNQUFBLENBQUFRLElBQUk7WUFDWjtZQUVBQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFKLEtBQU0sR0FBRyxJQUFJTixNQUFBLENBQUFXLFlBQVksRUFBRTtjQUNoQyxPQUFPLElBQUksQ0FBQyxDQUFBTCxLQUFNO1lBQ25CO1lBRUFNLFlBQVlDLElBQUk7Y0FDZixLQUFLLENBQUNBLElBQUksQ0FBQztjQUVYVixRQUFBLENBQUFXLGNBQWMsQ0FBQ0MsRUFBRSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUNDLFFBQVEsQ0FBQztjQUMxQ2IsUUFBQSxDQUFBVyxjQUFjLENBQUNDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDRSxPQUFPLENBQUM7WUFDekM7WUFFQUQsUUFBUSxHQUFHQSxDQUFBLEtBQUs7Y0FDZixJQUFJLENBQUMsQ0FBQVYsS0FBTSxDQUFDWSxLQUFLLEVBQUU7Y0FDbkIsSUFBSSxDQUFDWCxXQUFXLEdBQUdZLFNBQVM7Y0FDNUJoQixRQUFBLENBQUFXLGNBQWMsQ0FBQ00sR0FBRyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUNKLFFBQVEsQ0FBQztZQUM1QyxDQUFDO1lBRURDLE9BQU8sR0FBR0EsQ0FBQSxLQUFLO2NBQ2RkLFFBQUEsQ0FBQVcsY0FBYyxDQUFDQyxFQUFFLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQ0MsUUFBUSxDQUFDO1lBQzNDLENBQUM7WUFFRDs7OztZQUlBSyxJQUFJQSxDQUFBO2NBQ0gsSUFBSSxJQUFJLENBQUNkLFdBQVcsRUFBRTtnQkFDckJlLFlBQVksQ0FBQyxJQUFJLENBQUNmLFdBQVcsQ0FBQztnQkFDOUIsSUFBSSxDQUFDQSxXQUFXLEdBQUcsSUFBSTs7Y0FFeEJMLFdBQUEsQ0FBQXFCLFlBQVksQ0FBQ0MsT0FBTyxHQUFHLEtBQUs7Y0FDNUIsSUFBSSxDQUFDLENBQUFsQixLQUFNLENBQUNtQixJQUFJLEVBQUU7WUFDbkI7WUFFQTs7O1lBR0FDLElBQUlBLENBQUE7Y0FDSCxJQUFJLENBQUMsQ0FBQXBCLEtBQU0sQ0FBQ1ksS0FBSyxFQUFFO1lBQ3BCOztVQUNBUyxPQUFBLENBQUF2QixVQUFBLEdBQUFBLFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDckRELElBQUF3QixNQUFBLEdBQUE3QixPQUFBO1VBQ0EsSUFBQThCLE1BQUEsR0FBQTlCLE9BQUE7VUFDQSxJQUFBK0IsZUFBQSxHQUFBL0IsT0FBQTtVQUNBLElBQUFJLFFBQUEsR0FBQUosT0FBQTtVQUNBLElBQUFHLFdBQUEsR0FBQUgsT0FBQTtVQUNBLElBQUFnQyxnQkFBQSxHQUFBaEMsT0FBQTtVQUVNLE1BQU9ZLFlBQWEsU0FBUWlCLE1BQUEsQ0FBQUksYUFBMkI7WUFDNUQsQ0FBQUMsS0FBTTtZQUVOLElBQUlBLEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNO1lBQ25CO1lBRUEsSUFBSUMsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFELEtBQU0sQ0FBQ0UsV0FBVztZQUMvQjtZQUNBLENBQUFDLEtBQU0sR0FBK0IsSUFBSVAsTUFBQSxDQUFBUSxZQUFZLENBQUNQLGVBQUEsQ0FBQVEsTUFBTSxDQUFDQyxTQUFTLENBQUM7WUFDdkUsSUFBSUgsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU0sRUFBRUksS0FBSztZQUMxQjtZQUNBLENBQUFMLFdBQVk7WUFDWixJQUFJQSxXQUFXQSxDQUFBO2NBQ2QsT0FBTyxJQUFJLENBQUMsQ0FBQUEsV0FBWTtZQUN6QjtZQUVBLENBQUFNLE1BQU87WUFDUCxJQUFJQSxNQUFNQSxDQUFBO2NBQ1QsT0FBTyxJQUFJLENBQUMsQ0FBQUEsTUFBTztZQUNwQjtZQUVBLENBQUFDLFVBQVc7WUFDWCxJQUFJQSxVQUFVQSxDQUFBO2NBQ2IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsVUFBVztZQUN4QjtZQUVBLENBQUFDLE9BQVE7WUFDUixJQUFJQSxPQUFPQSxDQUFBO2NBQ1YsT0FBTyxJQUFJLENBQUMsQ0FBQUEsT0FBUTtZQUNyQjtZQUVBLENBQUFDLFNBQVU7WUFDVixJQUFJQSxTQUFTQSxDQUFBO2NBQ1osT0FBTyxJQUFJLENBQUMsQ0FBQUEsU0FBVTtZQUN2QjtZQUNBLElBQUlDLElBQUlBLENBQUE7Y0FDUCxPQUFPMUMsUUFBQSxDQUFBVyxjQUFjLENBQUMrQixJQUFJO1lBQzNCO1lBRUEsSUFBSUMsU0FBU0EsQ0FBQTtjQUNaLE9BQU8sSUFBSSxDQUFDRCxJQUFJLEVBQUVFLEtBQUssQ0FBQ0MsUUFBUSxDQUFDLFNBQVMsQ0FBQztZQUM1QztZQUNBLElBQUlDLEtBQUtBLENBQUE7Y0FDUixPQUFPLEtBQUssQ0FBQ0EsS0FBSyxJQUFJLElBQUksQ0FBQyxDQUFBYixLQUFNLENBQUNhLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQUMsV0FBWSxDQUFDRCxLQUFLO1lBQ25FO1lBQ0EsQ0FBQUMsV0FBWTtZQUNaLElBQUlBLFdBQVdBLENBQUE7Y0FDZCxPQUFPLElBQUksQ0FBQyxDQUFBQSxXQUFZLENBQUNWLEtBQUs7WUFDL0I7WUFDQTVCLFlBQUE7Y0FDQyxLQUFLLEVBQUU7Y0FDUCxJQUFJLENBQUMsQ0FBQXdCLEtBQU0sQ0FBQ3JCLEVBQUUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDb0MsWUFBWSxDQUFDO2NBQzNDLElBQUksQ0FBQyxDQUFBRCxXQUFZLEdBQUcsSUFBSXJCLE1BQUEsQ0FBQVEsWUFBWSxDQUFDLDJCQUEyQixDQUFDO2NBQ2pFLElBQUksQ0FBQyxDQUFBYSxXQUFZLENBQUNFLEtBQUssRUFBRTtZQUMxQjtZQUVBLE1BQU0zQixJQUFJQSxDQUFBO2NBQ1QsSUFBSTtnQkFDSCxJQUFJLENBQUMsQ0FBQVEsS0FBTSxHQUFHOUIsUUFBQSxDQUFBVyxjQUFjO2dCQUU1QlosV0FBQSxDQUFBcUIsWUFBWSxDQUFDQyxPQUFPLEdBQUcsS0FBSztnQkFFNUIsTUFBTTtrQkFBRTZCLE1BQU07a0JBQUVDO2dCQUFJLENBQUUsR0FBRyxNQUFNLElBQUksQ0FBQyxDQUFBckIsS0FBTSxDQUFDWSxJQUFJLENBQUNVLE9BQU8sRUFBRTtnQkFDekQsSUFBSSxDQUFDRixNQUFNLEVBQUU7a0JBQ1pHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLE9BQU8sQ0FBQzs7Z0JBR3JCLElBQUksQ0FBQyxDQUFBaEIsTUFBTyxHQUFHYSxJQUFJLENBQUNiLE1BQU07Z0JBQzFCLElBQUksQ0FBQyxDQUFBTixXQUFZLEdBQUdtQixJQUFJLENBQUNuQixXQUFXO2dCQUNwQyxJQUFJLENBQUMsQ0FBQU8sVUFBVyxHQUFHWSxJQUFJLENBQUNaLFVBQVU7Z0JBQ2xDLE1BQU1nQixjQUFjLEdBQUcsRUFBRTtnQkFDekIsTUFBTWYsT0FBTyxHQUFHVyxJQUFJLENBQUNYLE9BQU8sSUFBSSxFQUFFO2dCQUNsQyxJQUFJLENBQUMsQ0FBQUEsT0FBUSxHQUFHQSxPQUFPLENBQUNnQixHQUFHLENBQUNDLElBQUksSUFBRztrQkFDbEMsTUFBTUMsUUFBUSxHQUFHLElBQUk5QixnQkFBQSxDQUFBK0IsY0FBYyxDQUFDRixJQUFJLENBQUM7a0JBQ3pDRixjQUFjLENBQUNLLElBQUksQ0FBQ0YsUUFBUSxDQUFDRyxPQUFPLENBQUM7a0JBQ3JDLE9BQU9ILFFBQVE7Z0JBQ2hCLENBQUMsQ0FBQztnQkFDRixNQUFNSSxPQUFPLENBQUNDLEdBQUcsQ0FBQ1IsY0FBYyxDQUFDO2dCQUNqQztnQkFDQWYsT0FBTyxDQUFDZ0IsR0FBRyxDQUFDLENBQUNDLElBQUksRUFBRU8sS0FBSyxLQUFLLElBQUksQ0FBQyxDQUFBeEIsT0FBUSxDQUFDd0IsS0FBSyxDQUFDLENBQUNDLEdBQUcsQ0FBQ1IsSUFBSSxDQUFDLENBQUM7Z0JBQzVELElBQUksQ0FBQyxDQUFBaEIsU0FBVSxHQUFHVSxJQUFJLENBQUNWLFNBQVM7Z0JBRWhDLEtBQUssQ0FBQ0ssS0FBSyxHQUFHLElBQUk7Z0JBQ2xCLElBQUksQ0FBQ0UsWUFBWSxFQUFFO2dCQUNuQmtCLFVBQVUsQ0FBQy9ELEtBQUssR0FBRyxJQUFJO2VBQ3ZCLENBQUMsT0FBT2dFLENBQUMsRUFBRTtnQkFDWGQsT0FBTyxDQUFDZSxLQUFLLENBQUNELENBQUMsQ0FBQzs7WUFFbEI7WUFDQXBELEtBQUtBLENBQUE7Y0FDSixJQUFJLENBQUMsQ0FBQXVCLE1BQU8sR0FBRyxFQUFFO2NBQ2pCLElBQUksQ0FBQyxDQUFBTixXQUFZLEdBQUcsRUFBRTtjQUN0QixJQUFJLENBQUMsQ0FBQU8sVUFBVyxHQUFHLEVBQUU7Y0FDckIsSUFBSSxDQUFDLENBQUFDLE9BQVEsR0FBRyxFQUFFO2NBQ2xCLEtBQUssQ0FBQ00sS0FBSyxHQUFHLEtBQUs7Y0FDbkIsSUFBSSxDQUFDRSxZQUFZLEVBQUU7Y0FDbkIsSUFBSSxDQUFDLENBQUFsQixLQUFNLEdBQUdkLFNBQVM7WUFDeEI7O1VBQ0FRLE9BQUEsQ0FBQWhCLFlBQUEsR0FBQUEsWUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM3R0QsSUFBQTZELE1BQUEsR0FBQXpFLE9BQUE7VUFDQSxJQUFBMEUsUUFBQSxHQUFBMUUsT0FBQTtVQUNBLElBQUEyRSxNQUFBLEdBQUEzRSxPQUFBO1VBQ0EsSUFBQTRFLFdBQUEsR0FBQTVFLE9BQUE7VUFFTSxTQUFVNkUsb0JBQW9CQSxDQUFBO1lBQ25DLE1BQU07Y0FDTHhDLEtBQUssRUFBRTtnQkFBRU0sVUFBVSxFQUFFTjtjQUFLO1lBQUUsQ0FDNUIsR0FBRyxJQUFBcUMsUUFBQSxDQUFBSSxnQkFBZ0IsR0FBRTtZQUV0QixPQUNDTCxNQUFBLENBQUFNLE9BQUEsQ0FBQUMsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBNkIsR0FDM0NSLE1BQUEsQ0FBQU0sT0FBQSxDQUFBQyxhQUFBO2NBQVFDLFNBQVMsRUFBQztZQUF3QixHQUN6Q1IsTUFBQSxDQUFBTSxPQUFBLENBQUFDLGFBQUEsQ0FBQ0wsTUFBQSxDQUFBTyxPQUFPO2NBQUNDLElBQUksRUFBQztZQUFXLEVBQUcsQ0FDcEIsRUFDVFYsTUFBQSxDQUFBTSxPQUFBLENBQUFDLGFBQUEsYUFBSzNDLEtBQUssQ0FBQytDLEtBQUssQ0FBQ0MsS0FBSyxDQUFNLEVBQzVCWixNQUFBLENBQUFNLE9BQUEsQ0FBQUMsYUFBQTtjQUFNQyxTQUFTLEVBQUM7WUFBYSxHQUFFNUMsS0FBSyxDQUFDK0MsS0FBSyxDQUFDRSxXQUFXLENBQVEsRUFDOURiLE1BQUEsQ0FBQU0sT0FBQSxDQUFBQyxhQUFBO2NBQVFDLFNBQVMsRUFBQztZQUEwQixHQUMzQ1IsTUFBQSxDQUFBTSxPQUFBLENBQUFDLGFBQUEsQ0FBQ0osV0FBQSxDQUFBVyxJQUFJO2NBQUNDLElBQUksRUFBQyx3QkFBd0I7Y0FBQ1AsU0FBUyxFQUFDO1lBQW1CLEdBQy9ENUMsS0FBSyxDQUFDK0MsS0FBSyxDQUFDSyxNQUFNLENBQ2IsQ0FDQyxDQUNKO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDeEJBLElBQUFiLFdBQUEsR0FBQTVFLE9BQUE7VUFDQSxJQUFBMkUsTUFBQSxHQUFBM0UsT0FBQTtVQUNBLElBQUEwRixLQUFBLEdBQUExRixPQUFBO1VBQ0EsSUFBQXlFLE1BQUEsR0FBQXpFLE9BQUE7VUFDQSxJQUFBMEUsUUFBQSxHQUFBMUUsT0FBQTtVQUNBLElBQUEyRixNQUFBLEdBQUEzRixPQUFBO1VBQ0EsSUFBQTRGLEtBQUEsR0FBQTVGLE9BQUE7VUFFTSxTQUFVNkYsZUFBZUEsQ0FBQTtZQUM5QixNQUFNO2NBQ0x0RixLQUFLO2NBQ0w4QixLQUFLLEVBQUU7Z0JBQUVNLFVBQVUsRUFBRU4sS0FBSztnQkFBRXlEO2NBQUk7WUFBRSxDQUNsQyxHQUFHLElBQUFwQixRQUFBLENBQUFJLGdCQUFnQixHQUFFO1lBRXRCO1lBRUEsTUFBTW5DLFVBQVUsR0FBR29ELEtBQUssQ0FBQ0MsT0FBTyxDQUFDekYsS0FBSyxDQUFDb0MsVUFBVSxDQUFDLEdBQUdwQyxLQUFLLENBQUNvQyxVQUFVLEdBQUcsRUFBRTtZQUMxRSxNQUFNc0QsS0FBSyxHQUFHdEQsVUFBVSxDQUFDdUQsTUFBTTtZQUMvQixNQUFNQyxHQUFHLEdBQUcsa0NBQWtDRixLQUFLLEtBQUssQ0FBQyxHQUFHLG9CQUFvQixHQUFHLEVBQUUsRUFBRTtZQUV2RixPQUNDeEIsTUFBQSxDQUFBTSxPQUFBLENBQUFDLGFBQUE7Y0FBQSxhQUNXLEdBQUc7Y0FBQSxvQkFDS2MsSUFBSSxDQUFDbkQsVUFBVSxDQUFDMkMsV0FBVztjQUFBLGNBQ2pDUSxJQUFJLENBQUNuRCxVQUFVLENBQUMwQyxLQUFLO2NBQ2pDSixTQUFTLEVBQUVrQjtZQUFHLEdBRWQxQixNQUFBLENBQUFNLE9BQUEsQ0FBQUMsYUFBQTtjQUFRQyxTQUFTLEVBQUM7WUFBb0IsR0FDckNSLE1BQUEsQ0FBQU0sT0FBQSxDQUFBQyxhQUFBLENBQUNKLFdBQUEsQ0FBQVcsSUFBSTtjQUFDQyxJQUFJLEVBQUM7WUFBa0IsR0FDNUJmLE1BQUEsQ0FBQU0sT0FBQSxDQUFBQyxhQUFBLGFBQUszQyxLQUFLLENBQUNnRCxLQUFLLENBQU0sQ0FDaEIsRUFDUFosTUFBQSxDQUFBTSxPQUFBLENBQUFDLGFBQUEsQ0FBQ0wsTUFBQSxDQUFBeUIsVUFBVTtjQUFDakIsSUFBSSxFQUFDLE1BQU07Y0FBQ0UsS0FBSyxFQUFFaEQsS0FBSyxDQUFDb0QsTUFBTTtjQUFFRCxJQUFJLEVBQUM7WUFBd0IsRUFBRyxDQUNyRSxFQUVUZixNQUFBLENBQUFNLE9BQUEsQ0FBQUMsYUFBQSxDQUFDVSxLQUFBLENBQUFXLElBQUk7Y0FDSnBCLFNBQVMsRUFBQyxrQkFBa0I7Y0FDNUI5QyxLQUFLLEVBQUVRLFVBQVU7Y0FDakIyRCxPQUFPLEVBQUVWLEtBQUEsQ0FBQVcsY0FBYztjQUN2Qm5CLEtBQUssRUFBRU8sTUFBQSxDQUFBZDtZQUFvQixFQUMxQixDQUNHO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDMUNBLElBQUFKLE1BQUEsR0FBQXpFLE9BQUE7VUFDQSxJQUFBMEUsUUFBQSxHQUFBMUUsT0FBQTtVQUNBLElBQUF3RyxHQUFBLEdBQUF4RyxPQUFBO1VBQ0EsSUFBQTRFLFdBQUEsR0FBQTVFLE9BQUE7VUFFTSxTQUFVdUcsY0FBY0EsQ0FBQztZQUFFMUM7VUFBSSxDQUFFO1lBQ3RDLE1BQU07Y0FDTHhCLEtBQUssRUFBRTtnQkFBRU0sVUFBVSxFQUFFTjtjQUFLO1lBQUUsQ0FDNUIsR0FBRyxJQUFBcUMsUUFBQSxDQUFBSSxnQkFBZ0IsR0FBRTtZQUV0QixNQUFNMkIsT0FBTyxHQUFHLENBQUM1QyxJQUFJLENBQUN5QixXQUFXLElBQUl6QixJQUFJLENBQUN5QixXQUFXLEtBQUssRUFBRSxHQUFHakQsS0FBSyxDQUFDRixLQUFLLENBQUNtRCxXQUFXLEdBQUd6QixJQUFJLENBQUN5QixXQUFXO1lBQ3pHLE1BQU1ELEtBQUssR0FBRyxDQUFDeEIsSUFBSSxDQUFDNkMsSUFBSSxJQUFJN0MsSUFBSSxDQUFDNkMsSUFBSSxLQUFLLEVBQUUsR0FBR3JFLEtBQUssQ0FBQ0YsS0FBSyxDQUFDdUUsSUFBSSxHQUFHN0MsSUFBSSxDQUFDNkMsSUFBSTtZQUUzRSxPQUNDakMsTUFBQSxDQUFBTSxPQUFBLENBQUFDLGFBQUEsQ0FBQ0osV0FBQSxDQUFBVyxJQUFJO2NBQUNDLElBQUksRUFBRSxvQkFBb0IzQixJQUFJLENBQUM4QyxFQUFFLEVBQUU7Y0FBRTFCLFNBQVMsRUFBQyw0QkFBNEI7Y0FBQzJCLEdBQUcsRUFBRS9DLElBQUksQ0FBQzhDO1lBQUUsR0FDN0ZsQyxNQUFBLENBQUFNLE9BQUEsQ0FBQUMsYUFBQTtjQUFTQyxTQUFTLEVBQUMsa0JBQWtCO2NBQUMyQixHQUFHLEVBQUUvQyxJQUFJLENBQUM4QztZQUFFLEdBQ2pEbEMsTUFBQSxDQUFBTSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3dCLEdBQUEsQ0FBQUssV0FBVztjQUFDQyxLQUFLLEVBQUMsUUFBUTtjQUFDQyxHQUFHLEVBQUVsRCxJQUFJLENBQUNtRCxPQUFPO2NBQUVDLE1BQU0sRUFBQztZQUFRLEVBQUcsRUFDakV4QyxNQUFBLENBQUFNLE9BQUEsQ0FBQUMsYUFBQTtjQUFTQyxTQUFTLEVBQUM7WUFBZSxHQUNqQ1IsTUFBQSxDQUFBTSxPQUFBLENBQUFDLGFBQUEsYUFBS0ssS0FBSyxDQUFNLEVBQ2hCWixNQUFBLENBQUFNLE9BQUEsQ0FBQUMsYUFBQTtjQUFHQyxTQUFTLEVBQUM7WUFBYSxHQUFFd0IsT0FBTyxDQUFLLENBQy9CLENBQ0QsQ0FDSjtVQUVUOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3hCQSxJQUFBaEMsTUFBQSxHQUFBekUsT0FBQTtVQUNBLElBQUEwRSxRQUFBLEdBQUExRSxPQUFBO1VBQ0EsSUFBQTRFLFdBQUEsR0FBQTVFLE9BQUE7VUFDQSxJQUFBMkUsTUFBQSxHQUFBM0UsT0FBQTtVQUVNLFNBQVVrSCxlQUFlQSxDQUFBO1lBQzlCLE1BQU07Y0FDTDdFLEtBQUssRUFBRTtnQkFBRUssTUFBTSxFQUFFTDtjQUFLO1lBQUUsQ0FDeEIsR0FBRyxJQUFBcUMsUUFBQSxDQUFBSSxnQkFBZ0IsR0FBRTtZQUV0QixPQUNDTCxNQUFBLENBQUFNLE9BQUEsQ0FBQUMsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBOEMsR0FDNURSLE1BQUEsQ0FBQU0sT0FBQSxDQUFBQyxhQUFBO2NBQVFDLFNBQVMsRUFBQztZQUF3QixHQUN6Q1IsTUFBQSxDQUFBTSxPQUFBLENBQUFDLGFBQUEsQ0FBQ0wsTUFBQSxDQUFBTyxPQUFPO2NBQUNDLElBQUksRUFBQztZQUFRLEVBQUcsQ0FDakIsRUFDVFYsTUFBQSxDQUFBTSxPQUFBLENBQUFDLGFBQUEsYUFBSzNDLEtBQUssQ0FBQytDLEtBQUssQ0FBQ0MsS0FBSyxDQUFNLEVBQzVCWixNQUFBLENBQUFNLE9BQUEsQ0FBQUMsYUFBQTtjQUFNQyxTQUFTLEVBQUM7WUFBYSxHQUFFNUMsS0FBSyxDQUFDK0MsS0FBSyxDQUFDRSxXQUFXLENBQVEsRUFDOURiLE1BQUEsQ0FBQU0sT0FBQSxDQUFBQyxhQUFBLGlCQUNDUCxNQUFBLENBQUFNLE9BQUEsQ0FBQUMsYUFBQSxDQUFDSixXQUFBLENBQUFXLElBQUk7Y0FBQ0MsSUFBSSxFQUFDLHFCQUFxQjtjQUFDUCxTQUFTLEVBQUM7WUFBaUIsR0FDMUQ1QyxLQUFLLENBQUMrQyxLQUFLLENBQUNLLE1BQU0sQ0FDYixDQUNDLENBQ0o7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN4QkEsSUFBQWIsV0FBQSxHQUFBNUUsT0FBQTtVQUNBLElBQUEyRSxNQUFBLEdBQUEzRSxPQUFBO1VBQ0EsSUFBQTBGLEtBQUEsR0FBQTFGLE9BQUE7VUFDQSxJQUFBeUUsTUFBQSxHQUFBekUsT0FBQTtVQUNBLElBQUEwRSxRQUFBLEdBQUExRSxPQUFBO1VBQ0EsSUFBQTJGLE1BQUEsR0FBQTNGLE9BQUE7VUFDQSxJQUFBNEYsS0FBQSxHQUFBNUYsT0FBQTtVQUVNLFNBQVVtSCxXQUFXQSxDQUFBO1lBQzFCLE1BQU07Y0FDTDVHLEtBQUs7Y0FDTDhCLEtBQUssRUFBRTtnQkFBRUssTUFBTSxFQUFFTCxLQUFLO2dCQUFFeUQ7Y0FBSTtZQUFFLENBQzlCLEdBQUcsSUFBQXBCLFFBQUEsQ0FBQUksZ0JBQWdCLEdBQUU7WUFFdEIsSUFBSSxDQUFDdkUsS0FBSyxDQUFDd0MsU0FBUyxFQUFFLE9BQU8sSUFBSTtZQUVqQyxNQUFNTCxNQUFNLEdBQUdxRCxLQUFLLENBQUNDLE9BQU8sQ0FBQ3pGLEtBQUssQ0FBQ21DLE1BQU0sQ0FBQyxHQUFHbkMsS0FBSyxDQUFDbUMsTUFBTSxHQUFHLEVBQUU7WUFDOUQsTUFBTXVELEtBQUssR0FBR3ZELE1BQU0sQ0FBQ3dELE1BQU07WUFDM0IsTUFBTUMsR0FBRyxHQUFHLDhCQUE4QkYsS0FBSyxLQUFLLENBQUMsR0FBRyxvQkFBb0IsR0FBRyxFQUFFLEVBQUU7WUFFbkYsT0FDQ3hCLE1BQUEsQ0FBQU0sT0FBQSxDQUFBQyxhQUFBO2NBQUEsYUFBZSxHQUFHO2NBQUEsb0JBQW1CYyxJQUFJLENBQUNwRCxNQUFNLENBQUM0QyxXQUFXO2NBQUEsY0FBY1EsSUFBSSxDQUFDcEQsTUFBTSxDQUFDMkMsS0FBSztjQUFFSixTQUFTLEVBQUVrQjtZQUFHLEdBQzFHMUIsTUFBQSxDQUFBTSxPQUFBLENBQUFDLGFBQUE7Y0FBUUMsU0FBUyxFQUFDO1lBQW9CLEdBQ3JDUixNQUFBLENBQUFNLE9BQUEsQ0FBQUMsYUFBQSxDQUFDSixXQUFBLENBQUFXLElBQUk7Y0FBQ0MsSUFBSSxFQUFDO1lBQXlCLEdBQ25DZixNQUFBLENBQUFNLE9BQUEsQ0FBQUMsYUFBQSxhQUFLM0MsS0FBSyxDQUFDZ0QsS0FBSyxDQUFNLENBQ2hCLEVBQ1BaLE1BQUEsQ0FBQU0sT0FBQSxDQUFBQyxhQUFBLENBQUNMLE1BQUEsQ0FBQXlCLFVBQVU7Y0FBQ2pCLElBQUksRUFBQyxNQUFNO2NBQUNFLEtBQUssRUFBRWhELEtBQUssQ0FBQ29ELE1BQU07Y0FBRUQsSUFBSSxFQUFDO1lBQXFCLEVBQUcsQ0FDbEUsRUFDVGYsTUFBQSxDQUFBTSxPQUFBLENBQUFDLGFBQUEsQ0FBQ1UsS0FBQSxDQUFBVyxJQUFJO2NBQUNwQixTQUFTLEVBQUMsa0JBQWtCO2NBQUM5QyxLQUFLLEVBQUVPLE1BQU07Y0FBRTRELE9BQU8sRUFBRVYsS0FBQSxDQUFBd0IsY0FBYztjQUFFaEMsS0FBSyxFQUFFTyxNQUFBLENBQUF1QjtZQUFlLEVBQUksQ0FDaEc7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMvQkEsSUFBQXpDLE1BQUEsR0FBQXpFLE9BQUE7VUFDQSxJQUFBMEUsUUFBQSxHQUFBMUUsT0FBQTtVQUNBLElBQUF3RyxHQUFBLEdBQUF4RyxPQUFBO1VBQ0EsSUFBQTRFLFdBQUEsR0FBQTVFLE9BQUE7VUFFTSxTQUFVb0gsY0FBY0EsQ0FBQztZQUFFdkQ7VUFBSSxDQUFFO1lBQ3RDLE1BQU07Y0FDTHhCLEtBQUssRUFBRTtnQkFBRUssTUFBTSxFQUFFTDtjQUFLO1lBQUUsQ0FDeEIsR0FBRyxJQUFBcUMsUUFBQSxDQUFBSSxnQkFBZ0IsR0FBRTtZQUV0QixNQUFNMkIsT0FBTyxHQUFHLENBQUM1QyxJQUFJLENBQUN5QixXQUFXLElBQUl6QixJQUFJLENBQUN5QixXQUFXLEtBQUssRUFBRSxHQUFHakQsS0FBSyxDQUFDRixLQUFLLENBQUNtRCxXQUFXLEdBQUd6QixJQUFJLENBQUN5QixXQUFXO1lBQ3pHLE1BQU1ELEtBQUssR0FBRyxDQUFDeEIsSUFBSSxDQUFDd0IsS0FBSyxJQUFJeEIsSUFBSSxDQUFDd0IsS0FBSyxLQUFLLEVBQUUsR0FBR2hELEtBQUssQ0FBQ0YsS0FBSyxDQUFDa0QsS0FBSyxHQUFHeEIsSUFBSSxDQUFDd0IsS0FBSztZQUUvRSxPQUNDWixNQUFBLENBQUFNLE9BQUEsQ0FBQUMsYUFBQSxDQUFDSixXQUFBLENBQUFXLElBQUk7Y0FBQ0MsSUFBSSxFQUFFLDBCQUEwQjNCLElBQUksQ0FBQzhDLEVBQUUsRUFBRTtjQUFFMUIsU0FBUyxFQUFDLDRCQUE0QjtjQUFDMkIsR0FBRyxFQUFFL0MsSUFBSSxDQUFDOEM7WUFBRSxHQUNuR2xDLE1BQUEsQ0FBQU0sT0FBQSxDQUFBQyxhQUFBO2NBQVNDLFNBQVMsRUFBQyxrQkFBa0I7Y0FBQzJCLEdBQUcsRUFBRS9DLElBQUksQ0FBQzhDO1lBQUUsR0FDakRsQyxNQUFBLENBQUFNLE9BQUEsQ0FBQUMsYUFBQSxDQUFDd0IsR0FBQSxDQUFBSyxXQUFXO2NBQUNDLEtBQUssRUFBQyxRQUFRO2NBQUNDLEdBQUcsRUFBRWxELElBQUksQ0FBQ21ELE9BQU87Y0FBRUMsTUFBTSxFQUFDO1lBQVEsRUFBRyxFQUNqRXhDLE1BQUEsQ0FBQU0sT0FBQSxDQUFBQyxhQUFBO2NBQVNDLFNBQVMsRUFBQztZQUFlLEdBQ2pDUixNQUFBLENBQUFNLE9BQUEsQ0FBQUMsYUFBQSxhQUFLSyxLQUFLLENBQU0sRUFDaEJaLE1BQUEsQ0FBQU0sT0FBQSxDQUFBQyxhQUFBO2NBQUdDLFNBQVMsRUFBQztZQUFhLEdBQUV3QixPQUFPLENBQUssQ0FDL0IsQ0FDRCxDQUNKO1VBRVQ7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDeEJBLElBQUFoQyxNQUFBLEdBQUF6RSxPQUFBO1VBQ0EsSUFBQXFILE9BQUEsR0FBQXJILE9BQUE7VUFDQSxJQUFBc0gsV0FBQSxHQUFBdEgsT0FBQTtVQUNNLFNBQVV1SCxLQUFLQSxDQUFBO1lBQ3BCLE9BQ0M5QyxNQUFBLENBQUFNLE9BQUEsQ0FBQUMsYUFBQTtjQUFPQyxTQUFTLEVBQUM7WUFBYSxHQUM3QlIsTUFBQSxDQUFBTSxPQUFBLENBQUFDLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQWtCLEdBQ2hDUixNQUFBLENBQUFNLE9BQUEsQ0FBQUMsYUFBQSxDQUFDcUMsT0FBQSxDQUFBRixXQUFXLE9BQUcsRUFDZjFDLE1BQUEsQ0FBQU0sT0FBQSxDQUFBQyxhQUFBLENBQUNzQyxXQUFBLENBQUF6QixlQUFlLE9BQUcsQ0FDZCxDQUNDO1VBRVY7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDWkEsSUFBQXBCLE1BQUEsR0FBQXpFLE9BQUE7VUFDQSxJQUFBMEUsUUFBQSxHQUFBMUUsT0FBQTtVQUNBLElBQUE0RixLQUFBLEdBQUE1RixPQUFBO1VBQ0EsSUFBQXdHLEdBQUEsR0FBQXhHLE9BQUE7VUFDQSxJQUFBd0gsT0FBQSxHQUFBeEgsT0FBQTtVQUVNLFNBQVV5SCxXQUFXQSxDQUFBO1lBQzFCLE1BQU07Y0FDTGxILEtBQUssRUFBRTtnQkFBRTZCLFdBQVc7Z0JBQUVDO2NBQUs7WUFBRSxDQUM3QixHQUFHLElBQUFxQyxRQUFBLENBQUFJLGdCQUFnQixHQUFFO1lBRXRCLElBQUksQ0FBQzFDLFdBQVcsSUFBSSxDQUFDMkQsS0FBSyxDQUFDQyxPQUFPLENBQUM1RCxXQUFXLENBQUMsSUFBSSxDQUFDQSxXQUFXLENBQUM4RCxNQUFNLEVBQUUsT0FBTyxJQUFJO1lBQ25GLE1BQU13QixNQUFNLEdBQUcsQ0FBQyxHQUFHdEYsV0FBVyxDQUFDLENBQUN3QixHQUFHLENBQUNDLElBQUksSUFBSVksTUFBQSxDQUFBTSxPQUFBLENBQUFDLGFBQUEsQ0FBQ1ksS0FBQSxDQUFBK0IsY0FBYztjQUFDOUQsSUFBSSxFQUFFQSxJQUFJO2NBQUUrQyxHQUFHLEVBQUUsY0FBYy9DLElBQUksQ0FBQzhDLEVBQUU7WUFBRSxFQUFJLENBQUM7WUFFekcsT0FDQ2xDLE1BQUEsQ0FBQU0sT0FBQSxDQUFBQyxhQUFBO2NBQUEsYUFDVyxHQUFHO2NBQUEsb0JBQ0szQyxLQUFLLENBQUN5RCxJQUFJLENBQUMxRCxXQUFXLENBQUNrRCxXQUFXO2NBQUEsY0FDeENqRCxLQUFLLENBQUN5RCxJQUFJLENBQUMxRCxXQUFXLENBQUNpRCxLQUFLO2NBQ3hDSixTQUFTLEVBQUM7WUFBaUIsR0FFM0JSLE1BQUEsQ0FBQU0sT0FBQSxDQUFBQyxhQUFBLENBQUN3QixHQUFBLENBQUFvQixTQUFTO2NBQUN2QyxLQUFLLEVBQUVoRCxLQUFLLENBQUNELFdBQVcsQ0FBQ2lELEtBQUs7Y0FBRXdDLEVBQUUsRUFBQztZQUFJLEVBQUcsRUFDckRwRCxNQUFBLENBQUFNLE9BQUEsQ0FBQUMsYUFBQSxDQUFDd0MsT0FBQSxDQUFBTSxNQUFNLFFBQUVKLE1BQU0sQ0FBVSxDQUNoQjtVQUVaOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3pCQSxJQUFBL0MsTUFBQSxHQUFBM0UsT0FBQTtVQUNBLElBQUErSCxXQUFBLEdBQUEvSCxPQUFBO1VBQ0EsSUFBQXlFLE1BQUEsR0FBQXpFLE9BQUE7VUFDQSxJQUFBMEUsUUFBQSxHQUFBMUUsT0FBQTtVQUVPO1VBQVUsU0FDUjJILGNBQWNBLENBQUM7WUFBRTlEO1VBQUksQ0FBRTtZQUMvQixNQUFNO2NBQ0x0RCxLQUFLLEVBQUU7Z0JBQ044QixLQUFLLEVBQUU7a0JBQUVELFdBQVcsRUFBRUM7Z0JBQUs7Y0FBRTtZQUM3QixDQUNELEdBQUcsSUFBQXFDLFFBQUEsQ0FBQUksZ0JBQWdCLEdBQUU7WUFFdEIsT0FDQ0wsTUFBQSxDQUFBTSxPQUFBLENBQUFDLGFBQUEsQ0FBQytDLFdBQUEsQ0FBQUMsVUFBVTtjQUFDbkUsSUFBSSxFQUFFQSxJQUFJLENBQUN0QixNQUFNO2NBQUVGLEtBQUssRUFBRUEsS0FBSztjQUFFbUQsSUFBSSxFQUFFLGdCQUFnQjNCLElBQUksQ0FBQzhDLEVBQUU7WUFBRSxHQUMzRWxDLE1BQUEsQ0FBQU0sT0FBQSxDQUFBQyxhQUFBLENBQUMrQyxXQUFBLENBQUFFLGdCQUFnQjtjQUFDaEQsU0FBUyxFQUFDLG1DQUFtQztjQUFDcEIsSUFBSSxFQUFFQSxJQUFJLENBQUN0QjtZQUFNLEdBQ2hGa0MsTUFBQSxDQUFBTSxPQUFBLENBQUFDLGFBQUEsQ0FBQ0wsTUFBQSxDQUFBdUQsYUFBYTtjQUFDL0MsSUFBSSxFQUFDLE9BQU87Y0FBQ0UsS0FBSyxFQUFFaEQsS0FBSyxDQUFDOEYsT0FBTyxDQUFDQyxJQUFJO2NBQUU1QyxJQUFJLEVBQUUsZ0JBQWdCM0IsSUFBSSxDQUFDOEMsRUFBRTtZQUFFLEVBQUksQ0FDeEUsQ0FDUDtVQUVmOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3BCQSxJQUFBbEMsTUFBQSxHQUFBekUsT0FBQTtVQUNBLElBQUEwRSxRQUFBLEdBQUExRSxPQUFBO1VBQ0EsSUFBQTRGLEtBQUEsR0FBQTVGLE9BQUE7VUFDQSxJQUFBd0gsT0FBQSxHQUFBeEgsT0FBQTtVQUNBLElBQUFxSSxhQUFBLEdBQUFySSxPQUFBO1VBQ0EsSUFBQXNJLFlBQUEsR0FBQXRJLE9BQUE7VUFDTSxTQUFVdUksZ0JBQWdCQSxDQUFBO1lBQy9CLE1BQU07Y0FDTGhJLEtBQUssRUFBRTtnQkFBRXNDLFNBQVMsRUFBRUQsT0FBTztnQkFBRVAsS0FBSztnQkFBRVM7Y0FBSTtZQUFFLENBQzFDLEdBQUcsSUFBQTRCLFFBQUEsQ0FBQUksZ0JBQWdCLEdBQUU7WUFDdEIsTUFBTSxDQUFDMEQsU0FBUyxFQUFFQyxZQUFZLENBQUMsR0FBR2hFLE1BQUEsQ0FBQU0sT0FBSyxDQUFDMkQsUUFBUSxDQUFDO2NBQUVDLElBQUksRUFBRSxLQUFLO2NBQUU5RSxJQUFJLEVBQUU7WUFBSSxDQUFFLENBQUM7WUFFN0UsTUFBTStFLFVBQVUsR0FBRyxDQUFDOUYsSUFBSSxDQUFDRSxLQUFLLEVBQUVrRCxNQUFNLElBQUtwRCxJQUFJLENBQUNFLEtBQUssQ0FBQ2tELE1BQU0sS0FBSyxDQUFDLElBQUlwRCxJQUFJLENBQUNFLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxTQUFVO1lBRWxHLElBQUk0RixVQUFVLElBQUksQ0FBQ2hHLE9BQU8sSUFBSSxDQUFDbUQsS0FBSyxDQUFDQyxPQUFPLENBQUNwRCxPQUFPLENBQUMsSUFBSSxDQUFDQSxPQUFPLENBQUNzRCxNQUFNLEVBQUUsT0FBTyxJQUFJO1lBRXJGLE1BQU0yQyxXQUFXLEdBQUdoRixJQUFJLElBQUk0RSxZQUFZLENBQUM1RSxJQUFJLENBQUM7WUFDOUMsTUFBTTZELE1BQU0sR0FBRyxDQUFDLEdBQUc5RSxPQUFPLENBQUMsQ0FBQ2dCLEdBQUcsQ0FBQ0MsSUFBSSxJQUNuQ1ksTUFBQSxDQUFBTSxPQUFBLENBQUFDLGFBQUEsQ0FBQ1ksS0FBQSxDQUFBa0QsYUFBYTtjQUFDTixTQUFTLEVBQUVLLFdBQVc7Y0FBRWhGLElBQUksRUFBRUEsSUFBSTtjQUFFK0MsR0FBRyxFQUFFLFVBQVUvQyxJQUFJLENBQUM4QyxFQUFFO1lBQUUsRUFDM0UsQ0FBQztZQUVGLE9BQ0NsQyxNQUFBLENBQUFNLE9BQUEsQ0FBQUMsYUFBQTtjQUFBLGFBQ1csR0FBRztjQUFBLG9CQUNLM0MsS0FBSyxDQUFDeUQsSUFBSSxDQUFDakQsU0FBUyxDQUFDeUMsV0FBVztjQUFBLGNBQ3RDakQsS0FBSyxDQUFDeUQsSUFBSSxDQUFDakQsU0FBUyxDQUFDd0MsS0FBSztjQUN0Q0osU0FBUyxFQUFDO1lBQWlCLEdBRTNCUixNQUFBLENBQUFNLE9BQUEsQ0FBQUMsYUFBQSxDQUFDcUQsYUFBQSxDQUFBVSxZQUFZO2NBQUMxRCxLQUFLLEVBQUVoRCxLQUFLLENBQUNRLFNBQVMsQ0FBQ3dDLEtBQUs7Y0FBRUcsSUFBSSxFQUFDLFlBQVk7Y0FBQ3dELFVBQVUsRUFBRTNHLEtBQUssQ0FBQ1EsU0FBUyxDQUFDc0YsT0FBTyxDQUFDQztZQUFJLEVBQUksRUFDMUczRCxNQUFBLENBQUFNLE9BQUEsQ0FBQUMsYUFBQSxDQUFDd0MsT0FBQSxDQUFBTSxNQUFNLFFBQUVKLE1BQU0sQ0FBVSxFQUV4QmMsU0FBUyxDQUFDRyxJQUFJLElBQ2RsRSxNQUFBLENBQUFNLE9BQUEsQ0FBQUMsYUFBQSxDQUFDc0QsWUFBQSxDQUFBVyxlQUFlO2NBQUNwRixJQUFJLEVBQUUyRSxTQUFTLEVBQUUzRSxJQUFJO2NBQUVxRixPQUFPLEVBQUVMLFdBQVc7Y0FBRXhHLEtBQUssRUFBRUEsS0FBSztjQUFFOEcsSUFBSSxFQUFDO1lBQVcsRUFDNUYsQ0FFUTtVQUVaOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3JDQSxJQUFBeEUsTUFBQSxHQUFBM0UsT0FBQTtVQUNBLElBQUErSCxXQUFBLEdBQUEvSCxPQUFBO1VBQ0EsSUFBQXlFLE1BQUEsR0FBQXpFLE9BQUE7VUFDQSxJQUFBMEUsUUFBQSxHQUFBMUUsT0FBQTtVQUVPO1VBQVUsU0FDUjhJLGFBQWFBLENBQUM7WUFBRWpGLElBQUk7WUFBRTJFO1VBQVMsQ0FBRTtZQUN6QyxNQUFNO2NBQ0xuRyxLQUFLLEVBQUU7Z0JBQUVRLFNBQVMsRUFBRVI7Y0FBSztZQUFFLENBQzNCLEdBQUcsSUFBQXFDLFFBQUEsQ0FBQUksZ0JBQWdCLEdBQUU7WUFDdEIsTUFBTXNFLEtBQUssR0FBR0MsS0FBSyxJQUFHO2NBQ3JCQSxLQUFLLENBQUNDLGVBQWUsRUFBRTtjQUN2QmQsU0FBUyxDQUFDO2dCQUFFRyxJQUFJLEVBQUUsSUFBSTtnQkFBRTlFO2NBQUksQ0FBRSxDQUFDO1lBQ2hDLENBQUM7WUFFRCxPQUNDWSxNQUFBLENBQUFNLE9BQUEsQ0FBQUMsYUFBQSxDQUFBUCxNQUFBLENBQUFNLE9BQUEsQ0FBQXdFLFFBQUEsUUFDQzlFLE1BQUEsQ0FBQU0sT0FBQSxDQUFBQyxhQUFBLENBQUMrQyxXQUFBLENBQUFDLFVBQVU7Y0FBQ25FLElBQUksRUFBRUEsSUFBSTtjQUFFeEIsS0FBSyxFQUFFQSxLQUFLO2NBQUVtSCxRQUFRO1lBQUEsR0FDN0MvRSxNQUFBLENBQUFNLE9BQUEsQ0FBQUMsYUFBQSxDQUFDK0MsV0FBQSxDQUFBRSxnQkFBZ0I7Y0FBQ3BFLElBQUksRUFBRUE7WUFBSSxHQUMxQkEsSUFBSSxFQUFFNEYsVUFBVSxFQUFFQyxVQUFVLElBQzVCakYsTUFBQSxDQUFBTSxPQUFBLENBQUFDLGFBQUEsQ0FBQ0wsTUFBQSxDQUFBdUQsYUFBYTtjQUNiL0MsSUFBSSxFQUFDLE9BQU87Y0FDWkUsS0FBSyxFQUFFaEQsS0FBSyxDQUFDOEYsT0FBTyxDQUFDd0IsSUFBSTtjQUN6QkMsTUFBTSxFQUFDLFFBQVE7Y0FDZnBFLElBQUksRUFBRTNCLElBQUksQ0FBQzRGLFVBQVUsQ0FBQ0M7WUFBVSxFQUVqQyxFQUVEakYsTUFBQSxDQUFBTSxPQUFBLENBQUFDLGFBQUEsQ0FBQ0wsTUFBQSxDQUFBdUQsYUFBYTtjQUFDMkIsT0FBTyxFQUFFVCxLQUFLO2NBQUVqRSxJQUFJLEVBQUMsT0FBTztjQUFDRSxLQUFLLEVBQUVoRCxLQUFLLENBQUM4RixPQUFPLENBQUMyQjtZQUFHLEVBQUksQ0FDdEQsQ0FDUCxDQUNYO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDakNBLElBQUFyRixNQUFBLEdBQUF6RSxPQUFBO1VBU08sTUFBTStKLGFBQWEsR0FBQW5JLE9BQUEsQ0FBQW1JLGFBQUEsR0FBR3RGLE1BQUEsQ0FBQU0sT0FBSyxDQUFDaUYsYUFBYSxDQUFpQixFQUFvQixDQUFDO1VBQy9FLE1BQU1sRixnQkFBZ0IsR0FBR0EsQ0FBQSxLQUFNTCxNQUFBLENBQUFNLE9BQUssQ0FBQ2tGLFVBQVUsQ0FBQ0YsYUFBYSxDQUFDO1VBQUNuSSxPQUFBLENBQUFrRCxnQkFBQSxHQUFBQSxnQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNWdEUsSUFBQTBCLEdBQUEsR0FBQXhHLE9BQUE7VUFDQSxJQUFBeUUsTUFBQSxHQUFBekUsT0FBQTtVQUNBLElBQUFrSyxNQUFBLEdBQUFsSyxPQUFBO1VBQ0EsSUFBQTBFLFFBQUEsR0FBQTFFLE9BQUE7VUFHQSxJQUFBbUssZUFBQSxHQUFBbkssT0FBQTtVQUNBLElBQUFvSyxXQUFBLEdBQUFwSyxPQUFBO1VBQ0EsSUFBQXFLLE1BQUEsR0FBQXJLLE9BQUE7VUFDQSxJQUFBc0ssUUFBQSxHQUFBdEssT0FBQTtVQUNBLElBQUF1SyxVQUFBLEdBQUF2SyxPQUFBO1VBRU87VUFBVSxTQUNSVSxJQUFJQSxDQUFDO1lBQUVIO1VBQUssQ0FBMkI7WUFDL0MsTUFBTSxDQUFDMkMsS0FBSyxFQUFFc0gsUUFBUSxDQUFDLEdBQUcsSUFBQS9GLE1BQUEsQ0FBQWlFLFFBQVEsRUFBVW5JLEtBQUssQ0FBQzJDLEtBQUssQ0FBQztZQUN4RCxNQUFNO2NBQUViO1lBQUssQ0FBRSxHQUFHOUIsS0FBSztZQUN2QixJQUFBMkosTUFBQSxDQUFBTyxTQUFTLEVBQUMsQ0FBQ2xLLEtBQUssQ0FBQyxFQUFFLE1BQU1pSyxRQUFRLENBQUNqSyxLQUFLLENBQUMyQyxLQUFLLENBQUMsQ0FBQztZQUUvQyxJQUFJLENBQUNBLEtBQUssRUFBRSxPQUFPdUIsTUFBQSxDQUFBTSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3dCLEdBQUEsQ0FBQWtFLFVBQVU7Y0FBQ0MsUUFBUSxFQUFFO1lBQUksRUFBSTtZQUVqRCxNQUFNO2NBQUV2STtZQUFXLENBQUUsR0FBRzdCLEtBQUs7WUFDN0IsTUFBTXFLLFlBQVksR0FBRztjQUNwQnJLLEtBQUs7Y0FDTG9LLFFBQVEsRUFBRXBLLEtBQUssQ0FBQ29LLFFBQVE7Y0FDeEJ0SSxLQUFLO2NBQ0xGLEtBQUssRUFBRUM7YUFDUDtZQUVELE9BQ0NxQyxNQUFBLENBQUFNLE9BQUEsQ0FBQUMsYUFBQSxDQUFDTixRQUFBLENBQUFxRixhQUFhLENBQUNjLFFBQVE7Y0FBQ3BJLEtBQUssRUFBRW1JO1lBQVksR0FDMUNuRyxNQUFBLENBQUFNLE9BQUEsQ0FBQUMsYUFBQSxDQUFDd0IsR0FBQSxDQUFBc0UsYUFBYTtjQUFDN0YsU0FBUyxFQUFDO1lBQVksR0FDcENSLE1BQUEsQ0FBQU0sT0FBQSxDQUFBQyxhQUFBLENBQUN3QixHQUFBLENBQUF1RSxtQkFBbUI7Y0FDbkJyRSxJQUFJLEVBQUMsTUFBTTtjQUNYeEQsS0FBSyxFQUFFQSxLQUFLO2NBQ1piLEtBQUssRUFBRUEsS0FBSyxFQUFFeUQsSUFBSSxFQUFFa0YsT0FBTztjQUMzQi9GLFNBQVMsRUFBQztZQUE0QixHQUV0Q1IsTUFBQSxDQUFBTSxPQUFBLENBQUFDLGFBQUE7Y0FBTUMsU0FBUyxFQUFDO1lBQVksR0FDM0JSLE1BQUEsQ0FBQU0sT0FBQSxDQUFBQyxhQUFBLENBQUNtRixlQUFBLENBQUFjLGNBQWMsT0FBRyxFQUNsQnhHLE1BQUEsQ0FBQU0sT0FBQSxDQUFBQyxhQUFBLENBQUN1RixVQUFBLENBQUFoQyxnQkFBZ0IsT0FBRyxFQUNwQjlELE1BQUEsQ0FBQU0sT0FBQSxDQUFBQyxhQUFBLENBQUNzRixRQUFBLENBQUFZLE9BQU8sT0FBRyxFQUNYekcsTUFBQSxDQUFBTSxPQUFBLENBQUFDLGFBQUEsQ0FBQ29GLFdBQUEsQ0FBQTNDLFdBQVcsT0FBRyxDQUNULEVBQ1BoRCxNQUFBLENBQUFNLE9BQUEsQ0FBQUMsYUFBQSxDQUFDcUYsTUFBQSxDQUFBOUMsS0FBSyxPQUFHLENBQ1ksQ0FDUCxDQUNRO1VBRTNCOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2hEQSxJQUFBOUMsTUFBQSxHQUFBekUsT0FBQTtVQUNBLElBQUEwRSxRQUFBLEdBQUExRSxPQUFBO1VBQ0EsSUFBQTRGLEtBQUEsR0FBQTVGLE9BQUE7VUFDQSxJQUFBbUwsT0FBQSxHQUFBbkwsT0FBQTtVQUNBLElBQUF3SCxPQUFBLEdBQUF4SCxPQUFBO1VBQ0EsSUFBQXFJLGFBQUEsR0FBQXJJLE9BQUE7VUFFTSxTQUFVa0wsT0FBT0EsQ0FBQTtZQUN0QixNQUFNO2NBQ0wzSyxLQUFLLEVBQUU7Z0JBQUVxQyxPQUFPO2dCQUFFUDtjQUFLO1lBQUUsQ0FDekIsR0FBRyxJQUFBcUMsUUFBQSxDQUFBSSxnQkFBZ0IsR0FBRTtZQUV0QixJQUFJLENBQUNsQyxPQUFPLElBQUksQ0FBQ21ELEtBQUssQ0FBQ0MsT0FBTyxDQUFDcEQsT0FBTyxDQUFDLElBQUksQ0FBQ0EsT0FBTyxDQUFDc0QsTUFBTSxFQUFFLE9BQU8sSUFBSTtZQUN2RSxNQUFNLENBQUNzQyxTQUFTLEVBQUVDLFlBQVksQ0FBQyxHQUFHaEUsTUFBQSxDQUFBTSxPQUFLLENBQUMyRCxRQUFRLENBQUM7Y0FBRUMsSUFBSSxFQUFFLEtBQUs7Y0FBRTlFLElBQUksRUFBRSxJQUFJO2NBQUU0QixNQUFNLEVBQUU7WUFBSSxDQUFFLENBQUM7WUFDM0YsTUFBTW9ELFdBQVcsR0FBR3RGLElBQUksSUFBSWtGLFlBQVksQ0FBQ2xGLElBQUksQ0FBQztZQUU5QyxNQUFNbUUsTUFBTSxHQUFHLENBQUMsR0FBRzlFLE9BQU8sQ0FBQyxDQUFDZ0IsR0FBRyxDQUFDQyxJQUFJLElBQ25DWSxNQUFBLENBQUFNLE9BQUEsQ0FBQUMsYUFBQSxDQUFDWSxLQUFBLENBQUF3RixVQUFVO2NBQUN2QyxXQUFXLEVBQUVBLFdBQVc7Y0FBRWhGLElBQUksRUFBRUEsSUFBSTtjQUFFK0MsR0FBRyxFQUFFLFVBQVUvQyxJQUFJLENBQUM4QyxFQUFFO1lBQUUsRUFDMUUsQ0FBQztZQUVGLE9BQ0NsQyxNQUFBLENBQUFNLE9BQUEsQ0FBQUMsYUFBQTtjQUFBLGFBQ1csR0FBRztjQUFBLG9CQUNLM0MsS0FBSyxDQUFDeUQsSUFBSSxDQUFDbEQsT0FBTyxDQUFDMEMsV0FBVztjQUFBLGNBQ3BDakQsS0FBSyxDQUFDeUQsSUFBSSxDQUFDbEQsT0FBTyxDQUFDeUMsS0FBSztjQUNwQ0osU0FBUyxFQUFDO1lBQWlCLEdBRTNCUixNQUFBLENBQUFNLE9BQUEsQ0FBQUMsYUFBQSxDQUFDcUQsYUFBQSxDQUFBVSxZQUFZO2NBQUMxRCxLQUFLLEVBQUVoRCxLQUFLLENBQUNPLE9BQU8sQ0FBQ3lDLEtBQUs7Y0FBRUcsSUFBSSxFQUFDO1lBQXFCLEVBQUcsRUFDdkVmLE1BQUEsQ0FBQU0sT0FBQSxDQUFBQyxhQUFBLENBQUN3QyxPQUFBLENBQUFNLE1BQU0sUUFBRUosTUFBTSxDQUFVLEVBRXhCYyxTQUFTLENBQUNHLElBQUksSUFDZGxFLE1BQUEsQ0FBQU0sT0FBQSxDQUFBQyxhQUFBLENBQUNtRyxPQUFBLENBQUFFLGlCQUFpQjtjQUNqQjVGLE1BQU0sRUFBRStDLFNBQVMsQ0FBQy9DLE1BQU07Y0FDeEI1QixJQUFJLEVBQUUyRSxTQUFTLENBQUMzRSxJQUFJO2NBQ3BCcUYsT0FBTyxFQUFFTCxXQUFXO2NBQ3BCeEcsS0FBSyxFQUFFQSxLQUFLLENBQUNpSjtZQUFNLEVBRXBCLENBQ1E7VUFFWjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN4Q0EsSUFBQTNHLE1BQUEsR0FBQTNFLE9BQUE7VUFDQSxJQUFBK0gsV0FBQSxHQUFBL0gsT0FBQTtVQUNBLElBQUF5RSxNQUFBLEdBQUF6RSxPQUFBO1VBQ0EsSUFBQTBFLFFBQUEsR0FBQTFFLE9BQUE7VUFFTztVQUFVLFNBQ1JvTCxVQUFVQSxDQUFDO1lBQUV2SCxJQUFJO1lBQUVnRjtVQUFXLENBQUU7WUFDeEMsTUFBTTtjQUNMdEksS0FBSyxFQUFFO2dCQUFFOEIsS0FBSztnQkFBRWM7Y0FBVztZQUFFLENBQzdCLEdBQUcsSUFBQXVCLFFBQUEsQ0FBQUksZ0JBQWdCLEdBQUU7WUFFdEIsTUFBTXlHLEtBQUssR0FBR2xDLEtBQUssSUFBRztjQUNyQkEsS0FBSyxDQUFDQyxlQUFlLEVBQUU7Y0FFdkJULFdBQVcsQ0FBQztnQkFBRUYsSUFBSSxFQUFFLElBQUk7Z0JBQUU5RSxJQUFJO2dCQUFFNEIsTUFBTSxFQUFFNEQsS0FBSyxDQUFDbUMsYUFBYSxDQUFDQyxPQUFPLENBQUNoRztjQUFNLENBQUUsQ0FBQztZQUM5RSxDQUFDO1lBQ0QsT0FDQ2hCLE1BQUEsQ0FBQU0sT0FBQSxDQUFBQyxhQUFBLENBQUFQLE1BQUEsQ0FBQU0sT0FBQSxDQUFBd0UsUUFBQSxRQUNDOUUsTUFBQSxDQUFBTSxPQUFBLENBQUFDLGFBQUEsQ0FBQytDLFdBQUEsQ0FBQUMsVUFBVTtjQUFDbkUsSUFBSSxFQUFFQSxJQUFJO2NBQUV4QixLQUFLLEVBQUVBO1lBQUssR0FDbkNvQyxNQUFBLENBQUFNLE9BQUEsQ0FBQUMsYUFBQSxDQUFDK0MsV0FBQSxDQUFBRSxnQkFBZ0I7Y0FBQ3BFLElBQUksRUFBRUE7WUFBSSxHQUMzQlksTUFBQSxDQUFBTSxPQUFBLENBQUFDLGFBQUEsQ0FBQ0wsTUFBQSxDQUFBdUQsYUFBYTtjQUFBLGVBQWEsT0FBTztjQUFDMkIsT0FBTyxFQUFFMEIsS0FBSztjQUFFcEcsSUFBSSxFQUFDLE9BQU87Y0FBQ0UsS0FBSyxFQUFFbEMsV0FBVyxDQUFDZ0YsT0FBTyxDQUFDb0Q7WUFBSyxFQUFJLEVBQ3BHOUcsTUFBQSxDQUFBTSxPQUFBLENBQUFDLGFBQUEsQ0FBQ0wsTUFBQSxDQUFBdUQsYUFBYTtjQUFBLGVBQ0QsV0FBVztjQUN2QjJCLE9BQU8sRUFBRTBCLEtBQUs7Y0FDZHBHLElBQUksRUFBQyxXQUFXO2NBQ2hCRSxLQUFLLEVBQUVsQyxXQUFXLENBQUNnRixPQUFPLENBQUN1RDtZQUFTLEVBQ25DLEVBQ0ZqSCxNQUFBLENBQUFNLE9BQUEsQ0FBQUMsYUFBQSxDQUFDTCxNQUFBLENBQUF1RCxhQUFhO2NBQUEsZUFDRCxVQUFVO2NBQ3RCMkIsT0FBTyxFQUFFMEIsS0FBSztjQUNkcEcsSUFBSSxFQUFDLE9BQU87Y0FDWkUsS0FBSyxFQUFFbEMsV0FBVyxDQUFDZ0YsT0FBTyxDQUFDd0Q7WUFBYSxFQUN2QyxDQUNnQixDQUNQLENBQ1g7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNyQ0EsSUFBQWxILE1BQUEsR0FBQXpFLE9BQUE7VUFDQSxJQUFBMEUsUUFBQSxHQUFBMUUsT0FBQTtVQUNBLElBQUFJLFFBQUEsR0FBQUosT0FBQTtVQUNBLElBQUF3RyxHQUFBLEdBQUF4RyxPQUFBO1VBQ0EsSUFBQTRFLFdBQUEsR0FBQTVFLE9BQUE7VUFFTSxTQUFVK0ksWUFBWUEsQ0FBQztZQUM1QjFELEtBQUs7WUFDTDJELFVBQVU7WUFDVnhELElBQUk7WUFDSm9HLFFBQVEsR0FBRztVQUFJLENBTWY7WUFDQSxNQUFNO2NBQ0xyTCxLQUFLLEVBQUU7Z0JBQUU0QztjQUFXO1lBQUUsQ0FDdEIsR0FBRyxJQUFBdUIsUUFBQSxDQUFBSSxnQkFBZ0IsR0FBRTtZQUN0QixNQUFNK0csT0FBTyxHQUFHekwsUUFBQSxDQUFBVyxjQUFjLEVBQUUrQixJQUFJLEVBQUVFLEtBQUssRUFBRUMsUUFBUSxDQUFDLFNBQVMsQ0FBQztZQUNoRSxNQUFNNkksVUFBVSxHQUFHRCxPQUFPLElBQUlELFFBQVE7WUFDdEMsTUFBTW5HLE1BQU0sR0FBR3VELFVBQVUsSUFBSTdGLFdBQVcsQ0FBQ2dGLE9BQU8sQ0FBQzRELE1BQU07WUFDdkQsT0FDQ3RILE1BQUEsQ0FBQU0sT0FBQSxDQUFBQyxhQUFBLENBQUN3QixHQUFBLENBQUFvQixTQUFTO2NBQUN2QyxLQUFLLEVBQUVBLEtBQUs7Y0FBRXdDLEVBQUUsRUFBQztZQUFJLEdBQzlCaUUsVUFBVSxJQUNWckgsTUFBQSxDQUFBTSxPQUFBLENBQUFDLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQWlCLEdBQy9CUixNQUFBLENBQUFNLE9BQUEsQ0FBQUMsYUFBQSxDQUFDSixXQUFBLENBQUFXLElBQUk7Y0FBQ0MsSUFBSSxFQUFFQTtZQUFJLEdBQUdDLE1BQU0sQ0FBUSxDQUVsQyxDQUNVO1VBRWQ7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDL0JBLElBQUFoQixNQUFBLEdBQUF6RSxPQUFBO1VBRUEsSUFBQTBFLFFBQUEsR0FBQTFFLE9BQUE7VUFHQSxJQUFBZ00sTUFBQSxHQUFBaE0sT0FBQTtVQUVPO1VBQVUsU0FDUmlNLFFBQVFBLENBQUE7WUFDaEIsTUFBTTtjQUNMMUwsS0FBSyxFQUFFO2dCQUFFdUMsSUFBSTtnQkFBRVQ7Y0FBSztZQUFFLENBQ3RCLEdBQUcsSUFBQXFDLFFBQUEsQ0FBQUksZ0JBQWdCLEdBQUU7WUFFdEIsT0FDQ0wsTUFBQSxDQUFBTSxPQUFBLENBQUFDLGFBQUE7Y0FBU0MsU0FBUyxFQUFDO1lBQWMsR0FDaENSLE1BQUEsQ0FBQU0sT0FBQSxDQUFBQyxhQUFBLENBQUNnSCxNQUFBLENBQUFFLEtBQUs7Y0FBQ2pILFNBQVMsRUFBQyxtQkFBbUI7Y0FBQzhCLEdBQUcsRUFBRWpFLElBQUksQ0FBQ3FKLFFBQVE7Y0FBRUMsR0FBRyxFQUFDO1lBQWlCLEVBQUcsRUFDakYzSCxNQUFBLENBQUFNLE9BQUEsQ0FBQUMsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBdUIsR0FDckNSLE1BQUEsQ0FBQU0sT0FBQSxDQUFBQyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUFTLEdBQ3ZCUixNQUFBLENBQUFNLE9BQUEsQ0FBQUMsYUFBQSxhQUFLbEMsSUFBSSxDQUFDdUosV0FBVyxDQUFNLEVBQzNCNUgsTUFBQSxDQUFBTSxPQUFBLENBQUFDLGFBQUE7Y0FBTUMsU0FBUyxFQUFDO1lBQUksR0FBRW5DLElBQUksQ0FBQ3dKLEtBQUssQ0FBUSxDQUNuQyxFQUNON0gsTUFBQSxDQUFBTSxPQUFBLENBQUFDLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQWUsR0FDN0JSLE1BQUEsQ0FBQU0sT0FBQSxDQUFBQyxhQUFBO2NBQU1RLElBQUksRUFBQztZQUFLLEdBQUVuRCxLQUFLLENBQUNrSyxPQUFPLENBQUNDLElBQUksQ0FBUSxDQUN2QyxDQUNELENBQ0c7VUFFWjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM1QkEsSUFBQVIsTUFBQSxHQUFBaE0sT0FBQTtVQUNBLElBQUF5RSxNQUFBLEdBQUF6RSxPQUFBO1VBQ0EsSUFBQTBFLFFBQUEsR0FBQTFFLE9BQUE7VUFFTztVQUFVLFNBQ1JpTSxRQUFRQSxDQUFBO1lBQ2hCLE1BQU07Y0FDTDFMLEtBQUssRUFBRTtnQkFBRXVDLElBQUk7Z0JBQUVUO2NBQUs7WUFBRSxDQUN0QixHQUFHLElBQUFxQyxRQUFBLENBQUFJLGdCQUFnQixHQUFFO1lBRXRCLE9BQ0NMLE1BQUEsQ0FBQU0sT0FBQSxDQUFBQyxhQUFBO2NBQVNDLFNBQVMsRUFBQztZQUFjLEdBQ2hDUixNQUFBLENBQUFNLE9BQUEsQ0FBQUMsYUFBQSxDQUFDZ0gsTUFBQSxDQUFBRSxLQUFLO2NBQUNqSCxTQUFTLEVBQUMsbUJBQW1CO2NBQUM4QixHQUFHLEVBQUVqRSxJQUFJLENBQUNxSixRQUFRO2NBQUVDLEdBQUcsRUFBQztZQUFpQixFQUFHLEVBQ2pGM0gsTUFBQSxDQUFBTSxPQUFBLENBQUFDLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQXVCLEdBQ3JDUixNQUFBLENBQUFNLE9BQUEsQ0FBQUMsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBUyxHQUN2QlIsTUFBQSxDQUFBTSxPQUFBLENBQUFDLGFBQUEsYUFBS2xDLElBQUksQ0FBQ3VKLFdBQVcsQ0FBTSxFQUMzQjVILE1BQUEsQ0FBQU0sT0FBQSxDQUFBQyxhQUFBO2NBQU1DLFNBQVMsRUFBQztZQUFJLEdBQUVuQyxJQUFJLENBQUN3SixLQUFLLENBQVEsQ0FDbkMsRUFDTjdILE1BQUEsQ0FBQU0sT0FBQSxDQUFBQyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUFlLEdBQzdCUixNQUFBLENBQUFNLE9BQUEsQ0FBQUMsYUFBQTtjQUFNUSxJQUFJLEVBQUM7WUFBSyxHQUFFbkQsS0FBSyxDQUFDa0ssT0FBTyxDQUFDQyxJQUFJLENBQVEsQ0FDdkMsQ0FDRCxDQUNHO1VBRVo7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDeEJBLElBQUEvSCxNQUFBLEdBQUF6RSxPQUFBO1VBQ0EsSUFBQTBFLFFBQUEsR0FBQTFFLE9BQUE7VUFDQSxJQUFBZ00sTUFBQSxHQUFBaE0sT0FBQTtVQUNBLElBQUE0RSxXQUFBLEdBQUE1RSxPQUFBO1VBQ087VUFBVSxTQUNSaUwsY0FBY0EsQ0FBQTtZQUN0QixNQUFNO2NBQ0wxSyxLQUFLLEVBQUU7Z0JBQUV1QyxJQUFJO2dCQUFFVDtjQUFLO1lBQUUsQ0FDdEIsR0FBRyxJQUFBcUMsUUFBQSxDQUFBSSxnQkFBZ0IsR0FBRTtZQUV0QixPQUNDTCxNQUFBLENBQUFNLE9BQUEsQ0FBQUMsYUFBQTtjQUNDQyxTQUFTLEVBQUMsY0FBYztjQUFBLGFBQ2QsR0FBRztjQUFBLG9CQUNLNUMsS0FBSyxDQUFDeUQsSUFBSSxDQUFDMkcsS0FBSyxDQUFDbkgsV0FBVztjQUFBLGNBQ2xDakQsS0FBSyxDQUFDeUQsSUFBSSxDQUFDMkcsS0FBSyxDQUFDcEg7WUFBSyxHQUVsQ1osTUFBQSxDQUFBTSxPQUFBLENBQUFDLGFBQUEsQ0FBQ2dILE1BQUEsQ0FBQUUsS0FBSztjQUFDakgsU0FBUyxFQUFDLG1CQUFtQjtjQUFDOEIsR0FBRyxFQUFFakUsSUFBSSxDQUFDcUosUUFBUTtjQUFFQyxHQUFHLEVBQUM7WUFBaUIsRUFBRyxFQUNqRjNILE1BQUEsQ0FBQU0sT0FBQSxDQUFBQyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUF5RCxHQUN2RVIsTUFBQSxDQUFBTSxPQUFBLENBQUFDLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQVMsR0FDdkJSLE1BQUEsQ0FBQU0sT0FBQSxDQUFBQyxhQUFBLGFBQUtsQyxJQUFJLENBQUN1SixXQUFXLENBQU0sRUFDM0I1SCxNQUFBLENBQUFNLE9BQUEsQ0FBQUMsYUFBQTtjQUFNQyxTQUFTLEVBQUM7WUFBSSxHQUFFbkMsSUFBSSxDQUFDd0osS0FBSyxDQUFRLENBQ25DLEVBQ043SCxNQUFBLENBQUFNLE9BQUEsQ0FBQUMsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBZSxHQUM3QlIsTUFBQSxDQUFBTSxPQUFBLENBQUFDLGFBQUEsQ0FBQ0osV0FBQSxDQUFBVyxJQUFJO2NBQUNDLElBQUksRUFBQztZQUFXLEdBQUVuRCxLQUFLLENBQUNrSyxPQUFPLENBQUNDLElBQUksQ0FBUSxDQUM3QyxDQUNELENBQ0c7VUFFWjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM3QkEsSUFBQS9ILE1BQUEsR0FBQXpFLE9BQUE7VUFDQSxJQUFBME0sT0FBQSxHQUFBMU0sT0FBQTtVQUNNLFNBQVU4SCxNQUFNQSxDQUFDO1lBQUU2RTtVQUFRLENBQUU7WUFDbEMsTUFBTUMsV0FBVyxHQUFHO2NBQ25CLENBQUMsRUFBRTtnQkFDRkMsYUFBYSxFQUFFO2VBQ2Y7Y0FDRCxHQUFHLEVBQUU7Z0JBQ0pBLGFBQWEsRUFBRTs7YUFFaEI7WUFDRCxNQUFNQyxLQUFLLEdBQUc7Y0FDYjtjQUNBRCxhQUFhLEVBQUUsTUFBTTtjQUNyQkUsVUFBVSxFQUFFO2dCQUNYQyxNQUFNLEVBQUUscUJBQXFCO2dCQUM3QkMsTUFBTSxFQUFFOzthQUVUO1lBQ0QsT0FDQ3hJLE1BQUEsQ0FBQU0sT0FBQSxDQUFBQyxhQUFBLENBQUMwSCxPQUFBLENBQUFRLFlBQVk7Y0FBQSxHQUFLSixLQUFLO2NBQUU3SCxTQUFTLEVBQUMsMEJBQTBCO2NBQUNrSSxZQUFZLEVBQUU7WUFBRSxHQUM1RVIsUUFBUSxDQUNLO1VBRWpCIiwiaWdub3JlTGlzdCI6W119