System.register(["@beyond-js/widgets@1.1.1/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.3.1/main-layout.widget", "@aimpact/chat-sdk@1.4.1/session", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/ailearn-sdk@1.0.0/entities/learning-modules", "@aimpact/reactive@0.0.1/model", "@beyond-js/kernel@0.1.9/texts", "react@18.2.0", "@aimpact/ailearn-app@0.3.1/components/icons", "pragmate-ui@1.0.0-beta.7/components", "pragmate-ui@1.0.0-beta.7/icons", "pragmate-ui@1.0.0-beta.7/list", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.3.1/components/ui", "@aimpact/ailearn-app@0.3.1/components/module-card", "@aimpact/ailearn-app@0.3.1/modules/owner-assign.code", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/ailearn-app@0.3.1/modules/assign", "pragmate-ui@1.0.0-beta.7/image", "pragmate-ui@1.0.0-beta.7/swiper"], function (_export, _context2) {
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
    setters: [function (_beyondJsWidgets111Render) {
      dependency_0 = _beyondJsWidgets111Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_beyondJsReact18Widgets112Page) {
      dependency_3 = _beyondJsReact18Widgets112Page;
    }, function (_aimpactAilearnApp031MainLayoutWidget) {
      dependency_4 = _aimpactAilearnApp031MainLayoutWidget;
    }, function (_aimpactChatSdk141Session) {
      dependency_5 = _aimpactChatSdk141Session;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_6 = _aimpactAilearnSdk100Core;
    }, function (_aimpactAilearnSdk100EntitiesLearningModules) {
      dependency_7 = _aimpactAilearnSdk100EntitiesLearningModules;
    }, function (_aimpactReactive001Model) {
      dependency_8 = _aimpactReactive001Model;
    }, function (_beyondJsKernel019Texts) {
      dependency_9 = _beyondJsKernel019Texts;
    }, function (_react2) {
      dependency_10 = _react2;
    }, function (_aimpactAilearnApp031ComponentsIcons) {
      dependency_11 = _aimpactAilearnApp031ComponentsIcons;
    }, function (_pragmateUi100Beta7Components) {
      dependency_12 = _pragmateUi100Beta7Components;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_13 = _pragmateUi100Beta7Icons;
    }, function (_pragmateUi100Beta7List) {
      dependency_14 = _pragmateUi100Beta7List;
    }, function (_framerMotion2) {
      dependency_15 = _framerMotion2;
    }, function (_aimpactAilearnApp031ComponentsUi) {
      dependency_16 = _aimpactAilearnApp031ComponentsUi;
    }, function (_aimpactAilearnApp031ComponentsModuleCard) {
      dependency_17 = _aimpactAilearnApp031ComponentsModuleCard;
    }, function (_aimpactAilearnApp031ModulesOwnerAssignCode) {
      dependency_18 = _aimpactAilearnApp031ModulesOwnerAssignCode;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_19 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactAilearnApp031ModulesAssign) {
      dependency_20 = _aimpactAilearnApp031ModulesAssign;
    }, function (_pragmateUi100Beta7Image) {
      dependency_21 = _pragmateUi100Beta7Image;
    }, function (_pragmateUi100Beta7Swiper) {
      dependency_22 = _pragmateUi100Beta7Swiper;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", null], ["@aimpact/auth", null], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.1"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["@google-cloud/storage", "7.15.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.24.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.1"], ["@aimpact/ailearn-app", "0.3.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.3.1/home",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/main-layout.widget', dependency_4], ['@aimpact/chat-sdk/session', dependency_5], ['@aimpact/ailearn-sdk/core', dependency_6], ['@aimpact/ailearn-sdk/entities/learning-modules', dependency_7], ['@aimpact/reactive/model', dependency_8], ['@beyond-js/kernel/texts', dependency_9], ['react', dependency_10], ['@aimpact/ailearn-app/components/icons', dependency_11], ['pragmate-ui/components', dependency_12], ['pragmate-ui/icons', dependency_13], ['pragmate-ui/list', dependency_14], ['framer-motion', dependency_15], ['@aimpact/ailearn-app/components/ui', dependency_16], ['@aimpact/ailearn-app/components/module-card', dependency_17], ['@aimpact/ailearn-app/modules/owner-assign.code', dependency_18], ['@beyond-js/react-18-widgets/hooks', dependency_19], ['@aimpact/ailearn-app/modules/assign', dependency_20], ['pragmate-ui/image', dependency_21], ['pragmate-ui/swiper', dependency_22]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "student-home",
        "vspecifier": "@aimpact/ailearn-app@0.3.1/home.widget",
        "is": "page",
        "route": "/",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.3.1/home.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 2380942364,
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
              console.log('show in home page');
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
        hash: 1938706115,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
          var _learningModules = require("@aimpact/ailearn-sdk/entities/learning-modules");
          var _session = require("@aimpact/chat-sdk/session");
          var _model = require("@aimpact/reactive/model");
          var _texts = require("@beyond-js/kernel/texts");
          var _beyond_context = require("beyond_context");
          class StoreManager extends _model.ReactiveModel {
            #model;
            isStore;
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
                _mainLayout.LayoutBroker.set({
                  overlay: false,
                  breadcrumb: []
                });
                const response = await this.#model.user.getHome();
                if (!response.status) {
                  throw new Error('Error fetching home data');
                }
                const data = response.data;
                this.#drafts = data.drafts;
                this.#assignments = data.assignments;
                this.#classrooms = data.classrooms;
                const modules = data.modules ?? [];
                this.#modules = modules.map(item => {
                  const instance = new _learningModules.LearningModule(item);
                  return instance;
                });
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
        hash: 3436125694,
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
          var _framerMotion = require("framer-motion");
          function AsideClassrooms() {
            const {
              store,
              texts: {
                classrooms: texts,
                tour
              }
            } = (0, _context.useModuleContext)();
            const contentAnimation = {
              initial: {
                opacity: 0,
                y: 15
              },
              animate: {
                opacity: 1,
                y: 0
              },
              transition: {
                duration: 0.3,
                easy: 'linear'
              }
            };
            const classrooms = Array.isArray(store.classrooms) ? store.classrooms : [];
            const total = classrooms.length;
            const cls = `classrooms-container aside-list${total === 0 ? ' aside-list--empty' : ''}`;
            return _react.default.createElement(_framerMotion.motion.div, {
              ...contentAnimation,
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
        hash: 2547250167,
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
          var _framerMotion = require("framer-motion");
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
            const contentAnimation = {
              initial: {
                opacity: 0,
                y: 15
              },
              animate: {
                opacity: 1,
                y: 0
              },
              transition: {
                duration: 0.3,
                easy: 'linear'
              }
            };
            return _react.default.createElement(_framerMotion.motion.div, {
              "data-tour": "4",
              ...contentAnimation,
              "data-description": tour.drafts.description,
              "data-title": tour.drafts.title,
              className: cls
            }, _react.default.createElement("header", {
              className: "aside-list__header"
            }, _react.default.createElement(_components.Link, {
              href: "/modules/list?tab=drafts"
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
        hash: 2303256113,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AssignmentItem = AssignmentItem;
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
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_moduleCard.AssignmentCard, {
              entity: "assignment",
              classroom: item.classroom,
              item: item.module,
              texts: texts,
              href: `/assignments/${item.id}`
            }));
          }
        }
      });

      /***************************************
      INTERNAL MODULE: ./views/community/index
      ***************************************/

      ims.set('./views/community/index', {
        hash: 1885777091,
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
        hash: 763452246,
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
              className: "community-card",
              item: item,
              texts: texts,
              entity: "assignment",
              href: item.playground.assignment
            }, _react.default.createElement(_moduleCard.ModuleCardFooter, {
              item: item
            }, _react.default.createElement(_moduleCard.ModuleCardActionsFooter, null, item?.playground?.assignment && _react.default.createElement(_icons.AppIconButton, {
              icon: "watch",
              title: texts.actions.test,
              href: item.playground.assignment
            }), _react.default.createElement(_icons.AppIconButton, {
              onClick: onUse,
              icon: "clone",
              title: texts.actions.use
            })))));
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
        hash: 1585394572,
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
            }, _react.default.createElement(_profileSection.ProfileSection, null), _react.default.createElement(_modules.Modules, null), _react.default.createElement(_community.CommunityModules, null), _react.default.createElement(_assigments.Assignments, null)), _react.default.createElement(_aside.Aside, null))));
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
        hash: 1525792471,
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
              className: "module-card",
              item: item,
              texts: texts
            }, _react.default.createElement(_moduleCard.ModuleCardFooter, {
              item: item
            }, _react.default.createElement(_moduleCard.ModuleCardActionsFooter, {
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
            })))));
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
        hash: 148903941,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.UserCard = UserCard;
          var _react = require("react");
          var _image = require("pragmate-ui/image");
          var _context = require("../context");
          var _framerMotion = require("framer-motion");
          /*bundle*/
          function UserCard() {
            const {
              store: {
                user,
                texts
              }
            } = (0, _context.useModuleContext)();
            return _react.default.createElement(_framerMotion.motion.section, {
              className: "user-profile"
            }, _react.default.createElement(_framerMotion.motion.div, {
              initial: {
                rotate: 0
              },
              animate: {
                rotate: 360
              },
              transition: {
                duration: 0.5,
                ease: 'linear'
              }
            }, _react.default.createElement(_image.Image, {
              className: "user-profile__img",
              src: user.photoURL,
              alt: "Profile Picture"
            })), _react.default.createElement(_framerMotion.motion.div, {
              className: "user-profile__content",
              initial: {
                width: 0,
                opacity: 0
              },
              animate: {
                width: 'auto',
                opacity: 1
              },
              transition: {
                duration: 0.4,
                ease: 'easeOut',
                delay: 0.5
              }
            }, _react.default.createElement("div", {
              className: "content"
            }, _react.default.createElement("h6", null, user.displayName), _react.default.createElement("span", {
              className: "p2"
            }, user.email)), _react.default.createElement("div", {
              className: "card__actions"
            }, _react.default.createElement("a", {
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
        hash: 1396647919,
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
          var _framerMotion = require("framer-motion");
          /*bundle*/
          function ProfileSection() {
            const {
              store: {
                user,
                texts
              }
            } = (0, _context.useModuleContext)();
            const contentAnimation = {
              initial: {
                opacity: 0
              },
              animate: {
                opacity: 1
              },
              transition: {
                duration: 0.3,
                delay: 0.4,
                easy: 'linear'
              }
            };
            return _react.default.createElement(_framerMotion.motion.section, {
              className: "user-profile",
              "data-tour": "0",
              "data-description": texts.tour.step0.description,
              "data-title": texts.tour.step0.title,
              initial: {
                width: '50px',
                opacity: 0
              },
              animate: {
                width: '100%',
                opacity: 1
              },
              transition: {
                duration: 0.3,
                delay: 0.2,
                ease: 'easeOut'
              }
            }, _react.default.createElement(_framerMotion.motion.div, {
              className: "user-profile__img-container",
              initial: {
                rotate: -180
              },
              animate: {
                rotate: 0
              },
              transition: {
                duration: 0.4,
                ease: 'linear'
              }
            }, _react.default.createElement(_image.Image, {
              className: "user-profile__img",
              src: user.photoURL,
              alt: "Profile Picture"
            })), _react.default.createElement("div", {
              className: "user-profile__content flex-container flex-space-between"
            }, _react.default.createElement(_framerMotion.motion.div, {
              ...contentAnimation,
              className: "content"
            }, _react.default.createElement("h3", null, user.displayName), _react.default.createElement("span", {
              className: "p2"
            }, user.email)), _react.default.createElement(_framerMotion.motion.div, {
              className: "card__actions",
              ...contentAnimation
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
        hash: 255151109,
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
              1024: {
                slidesPerView: 3.1
              }
            };
            const specs = {
              // loop: true,
              // slidesPerView: 'auto',
              breakpoints,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJfbWFpbkxheW91dCIsIl9zZXNzaW9uIiwiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJzdG9yZSIsImhpZGVUaW1lb3V0IiwiV2lkZ2V0IiwiVmlldyIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiY29uc3RydWN0b3IiLCJhcmdzIiwic2Vzc2lvbldyYXBwZXIiLCJvbiIsIm9uTG9nb3V0Iiwib25Mb2dpbiIsImNsZWFyIiwidW5kZWZpbmVkIiwib2ZmIiwic2hvdyIsImNvbnNvbGUiLCJsb2ciLCJjbGVhclRpbWVvdXQiLCJMYXlvdXRCcm9rZXIiLCJvdmVybGF5IiwibG9hZCIsImhpZGUiLCJleHBvcnRzIiwiX2xlYXJuaW5nTW9kdWxlcyIsIl9tb2RlbCIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsIlJlYWN0aXZlTW9kZWwiLCJtb2RlbCIsImlzU3RvcmUiLCJpdGVtcyIsImFzc2lnbm1lbnRzIiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ2YWx1ZSIsImRyYWZ0cyIsImNsYXNzcm9vbXMiLCJtb2R1bGVzIiwiY29tbXVuaXR5IiwidXNlciIsImlzVGVhY2hlciIsInJvbGVzIiwiaW5jbHVkZXMiLCJyZWFkeSIsImdsb2JhbFRleHRzIiwidHJpZ2dlckV2ZW50IiwiZmV0Y2giLCJzZXQiLCJicmVhZGNydW1iIiwicmVzcG9uc2UiLCJnZXRIb21lIiwic3RhdHVzIiwiRXJyb3IiLCJkYXRhIiwibWFwIiwiaXRlbSIsImluc3RhbmNlIiwiTGVhcm5pbmdNb2R1bGUiLCJpbmRleCIsImdsb2JhbFRoaXMiLCJlIiwiZXJyb3IiLCJfcmVhY3QiLCJfY29udGV4dCIsIl9pY29ucyIsIl9jb21wb25lbnRzIiwiRW1wdHlBc2lkZUNsYXNzcm9vbXMiLCJ1c2VNb2R1bGVDb250ZXh0IiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJBcHBJY29uIiwiaWNvbiIsImVtcHR5IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIkxpbmsiLCJocmVmIiwiYWN0aW9uIiwiX2xpc3QiLCJfZW1wdHkiLCJfaXRlbSIsIl9mcmFtZXJNb3Rpb24iLCJBc2lkZUNsYXNzcm9vbXMiLCJ0b3VyIiwiY29udGVudEFuaW1hdGlvbiIsImluaXRpYWwiLCJvcGFjaXR5IiwieSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJlYXN5IiwiQXJyYXkiLCJpc0FycmF5IiwidG90YWwiLCJsZW5ndGgiLCJjbHMiLCJtb3Rpb24iLCJkaXYiLCJJY29uQnV0dG9uIiwiTGlzdCIsImNvbnRyb2wiLCJBc2lkZUNsYXNzcm9vbSIsIl91aSIsImNvbnRlbnQiLCJuYW1lIiwiaWQiLCJrZXkiLCJFbnRpdHlJbWFnZSIsInJhdGlvIiwic3JjIiwicGljdHVyZSIsImVudGl0eSIsIkVtcHR5QXNpZGVEcmFmdCIsIkFzaWRlRHJhZnRzIiwiQXNpZGVEcmFmdEl0ZW0iLCJfZHJhZnRzIiwiX2NsYXNzcm9vbXMiLCJBc2lkZSIsIl9zbGlkZXIiLCJBc3NpZ25tZW50cyIsIm91dHB1dCIsIkFzc2lnbm1lbnRJdGVtIiwiUGFnZVRpdGxlIiwiYXMiLCJTbGlkZXIiLCJfbW9kdWxlQ2FyZCIsIkZyYWdtZW50IiwiQXNzaWdubWVudENhcmQiLCJjbGFzc3Jvb20iLCJfc2VjdGlvblRpdGxlIiwiX293bmVyQXNzaWduIiwiQ29tbXVuaXR5TW9kdWxlcyIsIm9wZW5Nb2RhbCIsInNldE9wZW5Nb2RhbCIsInVzZVN0YXRlIiwib3BlbiIsImNhbnRBY2Nlc3MiLCJ0b2dnbGVNb2RhbCIsIkNvbW11bml0eUl0ZW0iLCJTZWN0aW9uVGl0bGUiLCJhY3Rpb25UZXh0IiwiYWN0aW9ucyIsImxpbmsiLCJPd25lckFzc2lnbkZvcm0iLCJvbkNsb3NlIiwidHlwZSIsIm9uVXNlIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJNb2R1bGVDYXJkIiwicGxheWdyb3VuZCIsImFzc2lnbm1lbnQiLCJNb2R1bGVDYXJkRm9vdGVyIiwiTW9kdWxlQ2FyZEFjdGlvbnNGb290ZXIiLCJBcHBJY29uQnV0dG9uIiwidGVzdCIsIm9uQ2xpY2siLCJ1c2UiLCJNb2R1bGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfaG9va3MiLCJfcHJvZmlsZVNlY3Rpb24iLCJfYXNzaWdtZW50cyIsIl9hc2lkZSIsIl9tb2R1bGVzIiwiX2NvbW11bml0eSIsInNldFJlYWR5IiwidXNlQmluZGVyIiwiUGFnZUxvYWRlciIsImZldGNoaW5nIiwiY29udGV4dFZhbHVlIiwiUHJvdmlkZXIiLCJQYWdlQ29udGFpbmVyIiwiRHJpdmVyVG91ckNvbnRhaW5lciIsImJ1dHRvbnMiLCJQcm9maWxlU2VjdGlvbiIsIk1vZHVsZXMiLCJfYXNzaWduIiwiTW9kdWxlSXRlbSIsIk1vZHVsZUFzc2lnbm1lbnRzIiwiYXNzaWduIiwic2hhcmUiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsImRhc2hib2FyZCIsIndhdGNoQWN0aXZpdHkiLCJ2YWxpZGF0ZSIsImlzQWRtaW4iLCJzaG93QWN0aW9uIiwiY3JlYXRlIiwiX2ltYWdlIiwiVXNlckNhcmQiLCJzZWN0aW9uIiwicm90YXRlIiwiZWFzZSIsIkltYWdlIiwicGhvdG9VUkwiLCJhbHQiLCJ3aWR0aCIsImRlbGF5IiwiZGlzcGxheU5hbWUiLCJlbWFpbCIsInByb2ZpbGUiLCJlZGl0Iiwic3RlcDAiLCJfc3dpcGVyIiwiY2hpbGRyZW4iLCJicmVha3BvaW50cyIsInNsaWRlc1BlclZpZXciLCJzcGVjcyIsIm5hdmlnYXRpb24iLCJuZXh0RWwiLCJwcmV2RWwiLCJTd2lwZXJTbGlkZXIiLCJzcGFjZUJldHdlZW4iXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9hc2lkZS9jbGFzc3Jvb21zL2VtcHR5LnRzeCIsIi90cy92aWV3cy9hc2lkZS9jbGFzc3Jvb21zL2luZGV4LnRzeCIsIi90cy92aWV3cy9hc2lkZS9jbGFzc3Jvb21zL2l0ZW0udHN4IiwiL3RzL3ZpZXdzL2FzaWRlL2RyYWZ0cy9lbXB0eS50c3giLCIvdHMvdmlld3MvYXNpZGUvZHJhZnRzL2luZGV4LnRzeCIsIi90cy92aWV3cy9hc2lkZS9kcmFmdHMvaXRlbS50c3giLCIvdHMvdmlld3MvYXNpZGUvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbWVudHMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbWVudHMvaXRlbS50c3giLCIvdHMvdmlld3MvY29tbXVuaXR5L2luZGV4LnRzeCIsIi90cy92aWV3cy9jb21tdW5pdHkvaXRlbS50c3giLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvbW9kdWxlcy9pbmRleC50c3giLCIvdHMvdmlld3MvbW9kdWxlcy9pdGVtLnRzeCIsIi90cy92aWV3cy9zZWN0aW9uLXRpdGxlLnRzeCIsIi90cy92aWV3cy9zZWN0aW9ucy9kcmFmdHMudHN4IiwiL3RzL3ZpZXdzL3NlY3Rpb25zL21vZHVsZXMudHN4IiwiL3RzL3ZpZXdzL3NlY3Rpb25zL3Byb2ZpbGUtc2VjdGlvbi50c3giLCIvdHMvdmlld3Mvc2xpZGVyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBQ0Es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