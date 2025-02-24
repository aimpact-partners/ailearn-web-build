System.register(["@beyond-js/widgets@1.1.1/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.3/page", "@aimpact/ailearn-app@0.3.8/main-layout.widget", "@aimpact/chat-sdk@1.4.1/session", "@aimpact/ailearn-sdk@1.1.0/core", "@aimpact/ailearn-sdk@1.1.0/entities/learning-modules", "@aimpact/reactive@0.0.1/model", "@beyond-js/kernel@0.1.9/texts", "react@18.2.0", "@aimpact/ailearn-app@0.3.8/components/icons", "pragmate-ui@1.0.0-beta.7/components", "pragmate-ui@1.0.0-beta.7/icons", "pragmate-ui@1.0.0-beta.7/list", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.3.8/components/ui", "@aimpact/ailearn-app@0.3.8/components/module-card", "@aimpact/ailearn-app@0.3.8/modules/owner-assign.code", "@beyond-js/react-18-widgets@1.1.3/hooks", "@aimpact/ailearn-app@0.3.8/modules/assign", "pragmate-ui@1.0.0-beta.7/image", "pragmate-ui@1.0.0-beta.7/swiper"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp038MainLayoutWidget) {
      dependency_4 = _aimpactAilearnApp038MainLayoutWidget;
    }, function (_aimpactChatSdk141Session) {
      dependency_5 = _aimpactChatSdk141Session;
    }, function (_aimpactAilearnSdk110Core) {
      dependency_6 = _aimpactAilearnSdk110Core;
    }, function (_aimpactAilearnSdk110EntitiesLearningModules) {
      dependency_7 = _aimpactAilearnSdk110EntitiesLearningModules;
    }, function (_aimpactReactive001Model) {
      dependency_8 = _aimpactReactive001Model;
    }, function (_beyondJsKernel019Texts) {
      dependency_9 = _beyondJsKernel019Texts;
    }, function (_react2) {
      dependency_10 = _react2;
    }, function (_aimpactAilearnApp038ComponentsIcons) {
      dependency_11 = _aimpactAilearnApp038ComponentsIcons;
    }, function (_pragmateUi100Beta7Components) {
      dependency_12 = _pragmateUi100Beta7Components;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_13 = _pragmateUi100Beta7Icons;
    }, function (_pragmateUi100Beta7List) {
      dependency_14 = _pragmateUi100Beta7List;
    }, function (_framerMotion2) {
      dependency_15 = _framerMotion2;
    }, function (_aimpactAilearnApp038ComponentsUi) {
      dependency_16 = _aimpactAilearnApp038ComponentsUi;
    }, function (_aimpactAilearnApp038ComponentsModuleCard) {
      dependency_17 = _aimpactAilearnApp038ComponentsModuleCard;
    }, function (_aimpactAilearnApp038ModulesOwnerAssignCode) {
      dependency_18 = _aimpactAilearnApp038ModulesOwnerAssignCode;
    }, function (_beyondJsReact18Widgets113Hooks) {
      dependency_19 = _beyondJsReact18Widgets113Hooks;
    }, function (_aimpactAilearnApp038ModulesAssign) {
      dependency_20 = _aimpactAilearnApp038ModulesAssign;
    }, function (_pragmateUi100Beta7Image) {
      dependency_21 = _pragmateUi100Beta7Image;
    }, function (_pragmateUi100Beta7Swiper) {
      dependency_22 = _pragmateUi100Beta7Swiper;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.0"], ["@aimpact/ailearn-sdk", "1.1.0"], ["@aimpact/ailearn-api", null], ["@aimpact/auth", null], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.1"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.3"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["@google-cloud/storage", "7.15.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.24.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.8"], ["@aimpact/ailearn-app", "0.3.8"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.3.8/home",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/main-layout.widget', dependency_4], ['@aimpact/chat-sdk/session', dependency_5], ['@aimpact/ailearn-sdk/core', dependency_6], ['@aimpact/ailearn-sdk/entities/learning-modules', dependency_7], ['@aimpact/reactive/model', dependency_8], ['@beyond-js/kernel/texts', dependency_9], ['react', dependency_10], ['@aimpact/ailearn-app/components/icons', dependency_11], ['pragmate-ui/components', dependency_12], ['pragmate-ui/icons', dependency_13], ['pragmate-ui/list', dependency_14], ['framer-motion', dependency_15], ['@aimpact/ailearn-app/components/ui', dependency_16], ['@aimpact/ailearn-app/components/module-card', dependency_17], ['@aimpact/ailearn-app/modules/owner-assign.code', dependency_18], ['@beyond-js/react-18-widgets/hooks', dependency_19], ['@aimpact/ailearn-app/modules/assign', dependency_20], ['pragmate-ui/image', dependency_21], ['pragmate-ui/swiper', dependency_22]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "student-home",
        "vspecifier": "@aimpact/ailearn-app@0.3.8/home.widget",
        "is": "page",
        "route": "/",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.3.8/home.widget');
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
        hash: 3574797744,
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
              this.#globalTexts.on('change', this.triggerEvent);
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
                modules.map((item, index) => {
                  //@ts-ignore
                  this.#modules[index].set(item);
                });
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
        hash: 780494763,
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
              href: "/modules/list"
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
        hash: 1132436698,
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
            const onAction = event => {
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
              onClick: onAction,
              icon: "share",
              title: globalTexts.actions.assignToClassroom
            }), _react.default.createElement(_icons.AppIconButton, {
              "data-action": "dashboard",
              onClick: onAction,
              icon: "statistic",
              title: globalTexts.actions.dashboard
            })))));
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./views/section-title
      *************************************/

      ims.set('./views/section-title', {
        hash: 142775940,
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
              as: "h3",
              href: href
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJfbWFpbkxheW91dCIsIl9zZXNzaW9uIiwiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJzdG9yZSIsImhpZGVUaW1lb3V0IiwiV2lkZ2V0IiwiVmlldyIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiY29uc3RydWN0b3IiLCJhcmdzIiwic2Vzc2lvbldyYXBwZXIiLCJvbiIsIm9uTG9nb3V0Iiwib25Mb2dpbiIsImNsZWFyIiwidW5kZWZpbmVkIiwib2ZmIiwic2hvdyIsImNsZWFyVGltZW91dCIsIkxheW91dEJyb2tlciIsIm92ZXJsYXkiLCJsb2FkIiwiaGlkZSIsImV4cG9ydHMiLCJfbGVhcm5pbmdNb2R1bGVzIiwiX21vZGVsIiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwiaXNTdG9yZSIsIml0ZW1zIiwiYXNzaWdubWVudHMiLCJ0ZXh0cyIsIkN1cnJlbnRUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInZhbHVlIiwiZHJhZnRzIiwiY2xhc3Nyb29tcyIsIm1vZHVsZXMiLCJjb21tdW5pdHkiLCJ1c2VyIiwiaXNUZWFjaGVyIiwicm9sZXMiLCJpbmNsdWRlcyIsInJlYWR5IiwiZ2xvYmFsVGV4dHMiLCJ0cmlnZ2VyRXZlbnQiLCJmZXRjaCIsInNldCIsImJyZWFkY3J1bWIiLCJyZXNwb25zZSIsImdldEhvbWUiLCJzdGF0dXMiLCJFcnJvciIsImRhdGEiLCJtYXAiLCJpdGVtIiwiaW5zdGFuY2UiLCJMZWFybmluZ01vZHVsZSIsImluZGV4IiwiZ2xvYmFsVGhpcyIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJfcmVhY3QiLCJfY29udGV4dCIsIl9pY29ucyIsIl9jb21wb25lbnRzIiwiRW1wdHlBc2lkZUNsYXNzcm9vbXMiLCJ1c2VNb2R1bGVDb250ZXh0IiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJBcHBJY29uIiwiaWNvbiIsImVtcHR5IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIkxpbmsiLCJocmVmIiwiYWN0aW9uIiwiX2xpc3QiLCJfZW1wdHkiLCJfaXRlbSIsIl9mcmFtZXJNb3Rpb24iLCJBc2lkZUNsYXNzcm9vbXMiLCJ0b3VyIiwiY29udGVudEFuaW1hdGlvbiIsImluaXRpYWwiLCJvcGFjaXR5IiwieSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJlYXN5IiwiQXJyYXkiLCJpc0FycmF5IiwidG90YWwiLCJsZW5ndGgiLCJjbHMiLCJtb3Rpb24iLCJkaXYiLCJJY29uQnV0dG9uIiwiTGlzdCIsImNvbnRyb2wiLCJBc2lkZUNsYXNzcm9vbSIsIl91aSIsImNvbnRlbnQiLCJuYW1lIiwiaWQiLCJrZXkiLCJFbnRpdHlJbWFnZSIsInJhdGlvIiwic3JjIiwicGljdHVyZSIsImVudGl0eSIsIkVtcHR5QXNpZGVEcmFmdCIsIkFzaWRlRHJhZnRzIiwiQXNpZGVEcmFmdEl0ZW0iLCJfZHJhZnRzIiwiX2NsYXNzcm9vbXMiLCJBc2lkZSIsIl9zbGlkZXIiLCJBc3NpZ25tZW50cyIsIm91dHB1dCIsIkFzc2lnbm1lbnRJdGVtIiwiUGFnZVRpdGxlIiwiYXMiLCJTbGlkZXIiLCJfbW9kdWxlQ2FyZCIsIkZyYWdtZW50IiwiQXNzaWdubWVudENhcmQiLCJjbGFzc3Jvb20iLCJfc2VjdGlvblRpdGxlIiwiX293bmVyQXNzaWduIiwiQ29tbXVuaXR5TW9kdWxlcyIsIm9wZW5Nb2RhbCIsInNldE9wZW5Nb2RhbCIsInVzZVN0YXRlIiwib3BlbiIsImNhbnRBY2Nlc3MiLCJ0b2dnbGVNb2RhbCIsIkNvbW11bml0eUl0ZW0iLCJTZWN0aW9uVGl0bGUiLCJhY3Rpb25UZXh0IiwiYWN0aW9ucyIsImxpbmsiLCJPd25lckFzc2lnbkZvcm0iLCJvbkNsb3NlIiwidHlwZSIsIm9uVXNlIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJNb2R1bGVDYXJkIiwicGxheWdyb3VuZCIsImFzc2lnbm1lbnQiLCJNb2R1bGVDYXJkRm9vdGVyIiwiTW9kdWxlQ2FyZEFjdGlvbnNGb290ZXIiLCJBcHBJY29uQnV0dG9uIiwidGVzdCIsIm9uQ2xpY2siLCJ1c2UiLCJNb2R1bGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfaG9va3MiLCJfcHJvZmlsZVNlY3Rpb24iLCJfYXNzaWdtZW50cyIsIl9hc2lkZSIsIl9tb2R1bGVzIiwiX2NvbW11bml0eSIsInNldFJlYWR5IiwidXNlQmluZGVyIiwiUGFnZUxvYWRlciIsImZldGNoaW5nIiwiY29udGV4dFZhbHVlIiwiUHJvdmlkZXIiLCJQYWdlQ29udGFpbmVyIiwiRHJpdmVyVG91ckNvbnRhaW5lciIsImJ1dHRvbnMiLCJQcm9maWxlU2VjdGlvbiIsIk1vZHVsZXMiLCJfYXNzaWduIiwiTW9kdWxlSXRlbSIsIk1vZHVsZUFzc2lnbm1lbnRzIiwiYXNzaWduIiwib25BY3Rpb24iLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsImFzc2lnblRvQ2xhc3Nyb29tIiwiZGFzaGJvYXJkIiwidmFsaWRhdGUiLCJpc0FkbWluIiwic2hvd0FjdGlvbiIsImNyZWF0ZSIsIl9pbWFnZSIsIlVzZXJDYXJkIiwic2VjdGlvbiIsInJvdGF0ZSIsImVhc2UiLCJJbWFnZSIsInBob3RvVVJMIiwiYWx0Iiwid2lkdGgiLCJkZWxheSIsImRpc3BsYXlOYW1lIiwiZW1haWwiLCJwcm9maWxlIiwiZWRpdCIsInN0ZXAwIiwiX3N3aXBlciIsImNoaWxkcmVuIiwiYnJlYWtwb2ludHMiLCJzbGlkZXNQZXJWaWV3Iiwic3BlY3MiLCJuYXZpZ2F0aW9uIiwibmV4dEVsIiwicHJldkVsIiwiU3dpcGVyU2xpZGVyIiwic3BhY2VCZXR3ZWVuIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvYXNpZGUvY2xhc3Nyb29tcy9lbXB0eS50c3giLCIvdHMvdmlld3MvYXNpZGUvY2xhc3Nyb29tcy9pbmRleC50c3giLCIvdHMvdmlld3MvYXNpZGUvY2xhc3Nyb29tcy9pdGVtLnRzeCIsIi90cy92aWV3cy9hc2lkZS9kcmFmdHMvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2FzaWRlL2RyYWZ0cy9pbmRleC50c3giLCIvdHMvdmlld3MvYXNpZGUvZHJhZnRzL2l0ZW0udHN4IiwiL3RzL3ZpZXdzL2FzaWRlL2luZGV4LnRzeCIsIi90cy92aWV3cy9hc3NpZ21lbnRzL2luZGV4LnRzeCIsIi90cy92aWV3cy9hc3NpZ21lbnRzL2l0ZW0udHN4IiwiL3RzL3ZpZXdzL2NvbW11bml0eS9pbmRleC50c3giLCIvdHMvdmlld3MvY29tbXVuaXR5L2l0ZW0udHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL21vZHVsZXMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL21vZHVsZXMvaXRlbS50c3giLCIvdHMvdmlld3Mvc2VjdGlvbi10aXRsZS50c3giLCIvdHMvdmlld3Mvc2VjdGlvbnMvZHJhZnRzLnRzeCIsIi90cy92aWV3cy9zZWN0aW9ucy9tb2R1bGVzLnRzeCIsIi90cy92aWV3cy9zZWN0aW9ucy9wcm9maWxlLXNlY3Rpb24udHN4IiwiL3RzL3ZpZXdzL3NsaWRlci50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUNB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RyxDQUNyRSxFQUViMUksTUFBQSxDQUFBTSxPQUFBLENBQUFDLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQXlELEdBQ3ZFUixNQUFBLENBQUFNLE9BQUEsQ0FBQUMsYUFBQSxDQUFDYSxhQUFBLENBQUFnQixNQUFNLENBQUNDLEdBQUc7Y0FBQSxHQUFLZCxnQkFBZ0I7Y0FBRWYsU0FBUyxFQUFDO1lBQVMsR0FDcERSLE1BQUEsQ0FBQU0sT0FBQSxDQUFBQyxhQUFBLGFBQUsvQixJQUFJLENBQUNxSyxXQUFXLENBQU0sRUFDM0I3SSxNQUFBLENBQUFNLE9BQUEsQ0FBQUMsYUFBQTtjQUFNQyxTQUFTLEVBQUM7WUFBSSxHQUFFaEMsSUFBSSxDQUFDc0ssS0FBSyxDQUFRLENBQzVCLEVBQ2I5SSxNQUFBLENBQUFNLE9BQUEsQ0FBQUMsYUFBQSxDQUFDYSxhQUFBLENBQUFnQixNQUFNLENBQUNDLEdBQUc7Y0FBQzdCLFNBQVMsRUFBQyxlQUFlO2NBQUEsR0FBS2U7WUFBZ0IsR0FDekR2QixNQUFBLENBQUFNLE9BQUEsQ0FBQUMsYUFBQSxDQUFDSixXQUFBLENBQUFXLElBQUk7Y0FBQ0MsSUFBSSxFQUFDO1lBQVcsR0FBRWhELEtBQUssQ0FBQ2dMLE9BQU8sQ0FBQ0MsSUFBSSxDQUFRLENBQ3RDLENBQ1IsQ0FDVTtVQUVuQjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM5Q0EsSUFBQWhKLE1BQUEsR0FBQXZFLE9BQUE7VUFDQSxJQUFBeU4sT0FBQSxHQUFBek4sT0FBQTtVQUNNLFNBQVV1SSxNQUFNQSxDQUFDO1lBQUVtRjtVQUFRLENBQUU7WUFDbEMsTUFBTUMsV0FBVyxHQUFHO2NBQ25CLENBQUMsRUFBRTtnQkFDRkMsYUFBYSxFQUFFO2VBQ2Y7Y0FDRCxHQUFHLEVBQUU7Z0JBQ0pBLGFBQWEsRUFBRTtlQUNmO2NBQ0QsSUFBSSxFQUFFO2dCQUNMQSxhQUFhLEVBQUU7O2FBRWhCO1lBQ0QsTUFBTUMsS0FBSyxHQUFHO2NBQ2I7Y0FDQTtjQUNBRixXQUFXO2NBQ1hHLFVBQVUsRUFBRTtnQkFDWEMsTUFBTSxFQUFFLHFCQUFxQjtnQkFDN0JDLE1BQU0sRUFBRTs7YUFFVDtZQUNELE9BQ0N6SixNQUFBLENBQUFNLE9BQUEsQ0FBQUMsYUFBQSxDQUFDMkksT0FBQSxDQUFBUSxZQUFZO2NBQUEsR0FBS0osS0FBSztjQUFFOUksU0FBUyxFQUFDLDBCQUEwQjtjQUFDbUosWUFBWSxFQUFFO1lBQUUsR0FDNUVSLFFBQVEsQ0FDSztVQUVqQiIsImlnbm9yZUxpc3QiOltdfQ==