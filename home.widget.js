System.register(["@beyond-js/widgets@1.1.1/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.3/page", "@aimpact/ailearn-app@0.3.1/main-layout.widget", "@aimpact/chat-sdk@1.4.1/session", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/ailearn-sdk@1.0.0/entities/learning-modules", "@aimpact/reactive@0.0.1/model", "@beyond-js/kernel@0.1.9/texts", "react@18.2.0", "@aimpact/ailearn-app@0.3.1/components/icons", "pragmate-ui@1.0.0-beta.7/components", "pragmate-ui@1.0.0-beta.7/icons", "pragmate-ui@1.0.0-beta.7/list", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.3.1/components/ui", "@aimpact/ailearn-app@0.3.1/components/module-card", "@aimpact/ailearn-app@0.3.1/modules/owner-assign.code", "@beyond-js/react-18-widgets@1.1.3/hooks", "@aimpact/ailearn-app@0.3.1/modules/assign", "pragmate-ui@1.0.0-beta.7/image", "pragmate-ui@1.0.0-beta.7/swiper"], function (_export, _context2) {
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
    }, function (_beyondJsReact18Widgets113Page) {
      dependency_3 = _beyondJsReact18Widgets113Page;
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
    }, function (_beyondJsReact18Widgets113Hooks) {
      dependency_19 = _beyondJsReact18Widgets113Hooks;
    }, function (_aimpactAilearnApp031ModulesAssign) {
      dependency_20 = _aimpactAilearnApp031ModulesAssign;
    }, function (_pragmateUi100Beta7Image) {
      dependency_21 = _pragmateUi100Beta7Image;
    }, function (_pragmateUi100Beta7Swiper) {
      dependency_22 = _pragmateUi100Beta7Swiper;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", null], ["@aimpact/auth", null], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.1"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.3"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["@google-cloud/storage", "7.15.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.24.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.1"], ["@aimpact/ailearn-app", "0.3.1"]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJfbWFpbkxheW91dCIsIl9zZXNzaW9uIiwiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJzdG9yZSIsImhpZGVUaW1lb3V0IiwiV2lkZ2V0IiwiVmlldyIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiY29uc3RydWN0b3IiLCJhcmdzIiwic2Vzc2lvbldyYXBwZXIiLCJvbiIsIm9uTG9nb3V0Iiwib25Mb2dpbiIsImNsZWFyIiwidW5kZWZpbmVkIiwib2ZmIiwic2hvdyIsImNsZWFyVGltZW91dCIsIkxheW91dEJyb2tlciIsIm92ZXJsYXkiLCJsb2FkIiwiaGlkZSIsImV4cG9ydHMiLCJfbGVhcm5pbmdNb2R1bGVzIiwiX21vZGVsIiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwiaXNTdG9yZSIsIml0ZW1zIiwiYXNzaWdubWVudHMiLCJ0ZXh0cyIsIkN1cnJlbnRUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInZhbHVlIiwiZHJhZnRzIiwiY2xhc3Nyb29tcyIsIm1vZHVsZXMiLCJjb21tdW5pdHkiLCJ1c2VyIiwiaXNUZWFjaGVyIiwicm9sZXMiLCJpbmNsdWRlcyIsInJlYWR5IiwiZ2xvYmFsVGV4dHMiLCJ0cmlnZ2VyRXZlbnQiLCJmZXRjaCIsInNldCIsImJyZWFkY3J1bWIiLCJyZXNwb25zZSIsImdldEhvbWUiLCJzdGF0dXMiLCJFcnJvciIsImRhdGEiLCJtYXAiLCJpdGVtIiwiaW5zdGFuY2UiLCJMZWFybmluZ01vZHVsZSIsImluZGV4IiwiZ2xvYmFsVGhpcyIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJfcmVhY3QiLCJfY29udGV4dCIsIl9pY29ucyIsIl9jb21wb25lbnRzIiwiRW1wdHlBc2lkZUNsYXNzcm9vbXMiLCJ1c2VNb2R1bGVDb250ZXh0IiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJBcHBJY29uIiwiaWNvbiIsImVtcHR5IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIkxpbmsiLCJocmVmIiwiYWN0aW9uIiwiX2xpc3QiLCJfZW1wdHkiLCJfaXRlbSIsIl9mcmFtZXJNb3Rpb24iLCJBc2lkZUNsYXNzcm9vbXMiLCJ0b3VyIiwiY29udGVudEFuaW1hdGlvbiIsImluaXRpYWwiLCJvcGFjaXR5IiwieSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJlYXN5IiwiQXJyYXkiLCJpc0FycmF5IiwidG90YWwiLCJsZW5ndGgiLCJjbHMiLCJtb3Rpb24iLCJkaXYiLCJJY29uQnV0dG9uIiwiTGlzdCIsImNvbnRyb2wiLCJBc2lkZUNsYXNzcm9vbSIsIl91aSIsImNvbnRlbnQiLCJuYW1lIiwiaWQiLCJrZXkiLCJFbnRpdHlJbWFnZSIsInJhdGlvIiwic3JjIiwicGljdHVyZSIsImVudGl0eSIsIkVtcHR5QXNpZGVEcmFmdCIsIkFzaWRlRHJhZnRzIiwiQXNpZGVEcmFmdEl0ZW0iLCJfZHJhZnRzIiwiX2NsYXNzcm9vbXMiLCJBc2lkZSIsIl9zbGlkZXIiLCJBc3NpZ25tZW50cyIsIm91dHB1dCIsIkFzc2lnbm1lbnRJdGVtIiwiUGFnZVRpdGxlIiwiYXMiLCJTbGlkZXIiLCJfbW9kdWxlQ2FyZCIsIkZyYWdtZW50IiwiQXNzaWdubWVudENhcmQiLCJjbGFzc3Jvb20iLCJfc2VjdGlvblRpdGxlIiwiX293bmVyQXNzaWduIiwiQ29tbXVuaXR5TW9kdWxlcyIsIm9wZW5Nb2RhbCIsInNldE9wZW5Nb2RhbCIsInVzZVN0YXRlIiwib3BlbiIsImNhbnRBY2Nlc3MiLCJ0b2dnbGVNb2RhbCIsIkNvbW11bml0eUl0ZW0iLCJTZWN0aW9uVGl0bGUiLCJhY3Rpb25UZXh0IiwiYWN0aW9ucyIsImxpbmsiLCJPd25lckFzc2lnbkZvcm0iLCJvbkNsb3NlIiwidHlwZSIsIm9uVXNlIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJNb2R1bGVDYXJkIiwicGxheWdyb3VuZCIsImFzc2lnbm1lbnQiLCJNb2R1bGVDYXJkRm9vdGVyIiwiTW9kdWxlQ2FyZEFjdGlvbnNGb290ZXIiLCJBcHBJY29uQnV0dG9uIiwidGVzdCIsIm9uQ2xpY2siLCJ1c2UiLCJNb2R1bGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfaG9va3MiLCJfcHJvZmlsZVNlY3Rpb24iLCJfYXNzaWdtZW50cyIsIl9hc2lkZSIsIl9tb2R1bGVzIiwiX2NvbW11bml0eSIsInNldFJlYWR5IiwidXNlQmluZGVyIiwiUGFnZUxvYWRlciIsImZldGNoaW5nIiwiY29udGV4dFZhbHVlIiwiUHJvdmlkZXIiLCJQYWdlQ29udGFpbmVyIiwiRHJpdmVyVG91ckNvbnRhaW5lciIsImJ1dHRvbnMiLCJQcm9maWxlU2VjdGlvbiIsIk1vZHVsZXMiLCJfYXNzaWduIiwiTW9kdWxlSXRlbSIsIk1vZHVsZUFzc2lnbm1lbnRzIiwiYXNzaWduIiwic2hhcmUiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsImRhc2hib2FyZCIsIndhdGNoQWN0aXZpdHkiLCJ2YWxpZGF0ZSIsImlzQWRtaW4iLCJzaG93QWN0aW9uIiwiY3JlYXRlIiwiX2ltYWdlIiwiVXNlckNhcmQiLCJzZWN0aW9uIiwicm90YXRlIiwiZWFzZSIsIkltYWdlIiwicGhvdG9VUkwiLCJhbHQiLCJ3aWR0aCIsImRlbGF5IiwiZGlzcGxheU5hbWUiLCJlbWFpbCIsInByb2ZpbGUiLCJlZGl0Iiwic3RlcDAiLCJfc3dpcGVyIiwiY2hpbGRyZW4iLCJicmVha3BvaW50cyIsInNsaWRlc1BlclZpZXciLCJzcGVjcyIsIm5hdmlnYXRpb24iLCJuZXh0RWwiLCJwcmV2RWwiLCJTd2lwZXJTbGlkZXIiLCJzcGFjZUJldHdlZW4iXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9hc2lkZS9jbGFzc3Jvb21zL2VtcHR5LnRzeCIsIi90cy92aWV3cy9hc2lkZS9jbGFzc3Jvb21zL2luZGV4LnRzeCIsIi90cy92aWV3cy9hc2lkZS9jbGFzc3Jvb21zL2l0ZW0udHN4IiwiL3RzL3ZpZXdzL2FzaWRlL2RyYWZ0cy9lbXB0eS50c3giLCIvdHMvdmlld3MvYXNpZGUvZHJhZnRzL2luZGV4LnRzeCIsIi90cy92aWV3cy9hc2lkZS9kcmFmdHMvaXRlbS50c3giLCIvdHMvdmlld3MvYXNpZGUvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbWVudHMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbWVudHMvaXRlbS50c3giLCIvdHMvdmlld3MvY29tbXVuaXR5L2luZGV4LnRzeCIsIi90cy92aWV3cy9jb21tdW5pdHkvaXRlbS50c3giLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvbW9kdWxlcy9pbmRleC50c3giLCIvdHMvdmlld3MvbW9kdWxlcy9pdGVtLnRzeCIsIi90cy92aWV3cy9zZWN0aW9uLXRpdGxlLnRzeCIsIi90cy92aWV3cy9zZWN0aW9ucy9kcmFmdHMudHN4IiwiL3RzL3ZpZXdzL3NlY3Rpb25zL21vZHVsZXMudHN4IiwiL3RzL3ZpZXdzL3NlY3Rpb25zL3Byb2ZpbGUtc2VjdGlvbi50c3giLCIvdHMvdmlld3Mvc2xpZGVyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQUcs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ekUsSUFBSSxDQUFDaUssUUFBUTtjQUFFQyxHQUFHLEVBQUM7WUFBaUIsRUFBRyxDQUNyRSxFQUViMUksTUFBQSxDQUFBTSxPQUFBLENBQUFDLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQXlELEdBQ3ZFUixNQUFBLENBQUFNLE9BQUEsQ0FBQUMsYUFBQSxDQUFDYSxhQUFBLENBQUFnQixNQUFNLENBQUNDLEdBQUc7Y0FBQSxHQUFLZCxnQkFBZ0I7Y0FBRWYsU0FBUyxFQUFDO1lBQVMsR0FDcERSLE1BQUEsQ0FBQU0sT0FBQSxDQUFBQyxhQUFBLGFBQUsvQixJQUFJLENBQUNxSyxXQUFXLENBQU0sRUFDM0I3SSxNQUFBLENBQUFNLE9BQUEsQ0FBQUMsYUFBQTtjQUFNQyxTQUFTLEVBQUM7WUFBSSxHQUFFaEMsSUFBSSxDQUFDc0ssS0FBSyxDQUFRLENBQzVCLEVBQ2I5SSxNQUFBLENBQUFNLE9BQUEsQ0FBQUMsYUFBQSxDQUFDYSxhQUFBLENBQUFnQixNQUFNLENBQUNDLEdBQUc7Y0FBQzdCLFNBQVMsRUFBQyxlQUFlO2NBQUEsR0FBS2U7WUFBZ0IsR0FDekR2QixNQUFBLENBQUFNLE9BQUEsQ0FBQUMsYUFBQSxDQUFDSixXQUFBLENBQUFXLElBQUk7Y0FBQ0MsSUFBSSxFQUFDO1lBQVcsR0FBRWhELEtBQUssQ0FBQ2dMLE9BQU8sQ0FBQ0MsSUFBSSxDQUFRLENBQ3RDLENBQ1IsQ0FDVTtVQUVuQjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM5Q0EsSUFBQWhKLE1BQUEsR0FBQXZFLE9BQUE7VUFDQSxJQUFBeU4sT0FBQSxHQUFBek4sT0FBQTtVQUNNLFNBQVV1SSxNQUFNQSxDQUFDO1lBQUVtRjtVQUFRLENBQUU7WUFDbEMsTUFBTUMsV0FBVyxHQUFHO2NBQ25CLENBQUMsRUFBRTtnQkFDRkMsYUFBYSxFQUFFO2VBQ2Y7Y0FDRCxHQUFHLEVBQUU7Z0JBQ0pBLGFBQWEsRUFBRTtlQUNmO2NBQ0QsSUFBSSxFQUFFO2dCQUNMQSxhQUFhLEVBQUU7O2FBRWhCO1lBQ0QsTUFBTUMsS0FBSyxHQUFHO2NBQ2I7Y0FDQTtjQUNBRixXQUFXO2NBQ1hHLFVBQVUsRUFBRTtnQkFDWEMsTUFBTSxFQUFFLHFCQUFxQjtnQkFDN0JDLE1BQU0sRUFBRTs7YUFFVDtZQUNELE9BQ0N6SixNQUFBLENBQUFNLE9BQUEsQ0FBQUMsYUFBQSxDQUFDMkksT0FBQSxDQUFBUSxZQUFZO2NBQUEsR0FBS0osS0FBSztjQUFFOUksU0FBUyxFQUFDLDBCQUEwQjtjQUFDbUosWUFBWSxFQUFFO1lBQUUsR0FDNUVSLFFBQVEsQ0FDSztVQUVqQiIsImlnbm9yZUxpc3QiOltdfQ==