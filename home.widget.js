System.register(["@beyond-js/widgets@1.1.1/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.3/page", "@aimpact/ailearn-app@0.3.24/main-layout.widget", "@aimpact/chat-sdk@1.4.1/session", "@aimpact/ailearn-sdk@1.1.0/tracking", "@aimpact/ailearn-sdk@1.1.0/entities/learning-modules", "@aimpact/reactive@0.0.1/model", "@beyond-js/kernel@0.1.9/texts", "react@18.2.0", "@aimpact/ailearn-app@0.3.24/components/icons", "pragmate-ui@1.0.0-beta.7/components", "pragmate-ui@1.0.0-beta.7/icons", "pragmate-ui@1.0.0-beta.7/list", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.3.24/components/ui", "@aimpact/ailearn-app@0.3.24/components/module-card", "@aimpact/ailearn-app@0.3.24/modules/owner-assign.code", "@beyond-js/react-18-widgets@1.1.3/hooks", "@aimpact/ailearn-app@0.3.24/modules/assign", "pragmate-ui@1.0.0-beta.7/image", "pragmate-ui@1.0.0-beta.7/swiper"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp0324MainLayoutWidget) {
      dependency_4 = _aimpactAilearnApp0324MainLayoutWidget;
    }, function (_aimpactChatSdk141Session) {
      dependency_5 = _aimpactChatSdk141Session;
    }, function (_aimpactAilearnSdk110Tracking) {
      dependency_6 = _aimpactAilearnSdk110Tracking;
    }, function (_aimpactAilearnSdk110EntitiesLearningModules) {
      dependency_7 = _aimpactAilearnSdk110EntitiesLearningModules;
    }, function (_aimpactReactive001Model) {
      dependency_8 = _aimpactReactive001Model;
    }, function (_beyondJsKernel019Texts) {
      dependency_9 = _beyondJsKernel019Texts;
    }, function (_react2) {
      dependency_10 = _react2;
    }, function (_aimpactAilearnApp0324ComponentsIcons) {
      dependency_11 = _aimpactAilearnApp0324ComponentsIcons;
    }, function (_pragmateUi100Beta7Components) {
      dependency_12 = _pragmateUi100Beta7Components;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_13 = _pragmateUi100Beta7Icons;
    }, function (_pragmateUi100Beta7List) {
      dependency_14 = _pragmateUi100Beta7List;
    }, function (_framerMotion2) {
      dependency_15 = _framerMotion2;
    }, function (_aimpactAilearnApp0324ComponentsUi) {
      dependency_16 = _aimpactAilearnApp0324ComponentsUi;
    }, function (_aimpactAilearnApp0324ComponentsModuleCard) {
      dependency_17 = _aimpactAilearnApp0324ComponentsModuleCard;
    }, function (_aimpactAilearnApp0324ModulesOwnerAssignCode) {
      dependency_18 = _aimpactAilearnApp0324ModulesOwnerAssignCode;
    }, function (_beyondJsReact18Widgets113Hooks) {
      dependency_19 = _beyondJsReact18Widgets113Hooks;
    }, function (_aimpactAilearnApp0324ModulesAssign) {
      dependency_20 = _aimpactAilearnApp0324ModulesAssign;
    }, function (_pragmateUi100Beta7Image) {
      dependency_21 = _pragmateUi100Beta7Image;
    }, function (_pragmateUi100Beta7Swiper) {
      dependency_22 = _pragmateUi100Beta7Swiper;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.1.0"], ["@aimpact/ailearn-api", null], ["@aimpact/auth", null], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.1"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.3"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["@google-cloud/storage", "7.15.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.24.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.24"], ["@aimpact/ailearn-app", "0.3.24"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.3.24/home",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/main-layout.widget', dependency_4], ['@aimpact/chat-sdk/session', dependency_5], ['@aimpact/ailearn-sdk/tracking', dependency_6], ['@aimpact/ailearn-sdk/entities/learning-modules', dependency_7], ['@aimpact/reactive/model', dependency_8], ['@beyond-js/kernel/texts', dependency_9], ['react', dependency_10], ['@aimpact/ailearn-app/components/icons', dependency_11], ['pragmate-ui/components', dependency_12], ['pragmate-ui/icons', dependency_13], ['pragmate-ui/list', dependency_14], ['framer-motion', dependency_15], ['@aimpact/ailearn-app/components/ui', dependency_16], ['@aimpact/ailearn-app/components/module-card', dependency_17], ['@aimpact/ailearn-app/modules/owner-assign.code', dependency_18], ['@beyond-js/react-18-widgets/hooks', dependency_19], ['@aimpact/ailearn-app/modules/assign', dependency_20], ['pragmate-ui/image', dependency_21], ['pragmate-ui/swiper', dependency_22]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "student-home",
        "vspecifier": "@aimpact/ailearn-app@0.3.24/home.widget",
        "is": "page",
        "route": "/",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.3.24/home.widget');
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
        hash: 2989173566,
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
        hash: 2089448788,
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
                globalTexts,
                texts: {
                  assignments: texts
                }
              }
            } = (0, _context.useModuleContext)();
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_moduleCard.AssignmentCard, {
              entity: "assignment",
              id: item.id,
              classroom: item.classroom,
              item: item.module,
              texts: {
                ...texts,
                activities: globalTexts.activities
              },
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
        hash: 1393301102,
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
              store: {
                globalTexts
              },
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
              texts: {
                ...texts,
                activities: globalTexts.activities
              },
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
        hash: 3313986028,
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
        hash: 3739923532,
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
              href: "/modules/list",
              actionHref: "/modules/management"
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
        hash: 4073235609,
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
              texts: {
                ...texts,
                activities: globalTexts.activities
              }
            }, _react.default.createElement(_moduleCard.ModuleCardFooter, {
              item: item
            }, _react.default.createElement(_moduleCard.ModuleCardActionsFooter, {
              item: item
            }, _react.default.createElement(_icons.AppIconButton, {
              "data-action": "share",
              onClick: onAction,
              icon: "assign",
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
        hash: 769531017,
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
            actionHref,
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
            const hrefAction = actionHref ?? href;
            return _react.default.createElement(_ui.PageTitle, {
              title: title,
              as: "h3",
              href: href
            }, showAction && _react.default.createElement("div", {
              className: "header__actions"
            }, _react.default.createElement(_components.Link, {
              href: hrefAction
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
        hash: 4145472816,
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
              className: "user-profile__content"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJfbWFpbkxheW91dCIsIl9zZXNzaW9uIiwiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJzdG9yZSIsImhpZGVUaW1lb3V0IiwiV2lkZ2V0IiwiVmlldyIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiY29uc3RydWN0b3IiLCJhcmdzIiwic2Vzc2lvbldyYXBwZXIiLCJvbiIsIm9uTG9nb3V0Iiwib25Mb2dpbiIsImNsZWFyIiwidW5kZWZpbmVkIiwib2ZmIiwic2hvdyIsImNsZWFyVGltZW91dCIsIkxheW91dEJyb2tlciIsIm92ZXJsYXkiLCJsb2FkIiwiaGlkZSIsImV4cG9ydHMiLCJfbGVhcm5pbmdNb2R1bGVzIiwiX21vZGVsIiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwiaXNTdG9yZSIsIml0ZW1zIiwiYXNzaWdubWVudHMiLCJ0ZXh0cyIsIkN1cnJlbnRUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInZhbHVlIiwiZHJhZnRzIiwiY2xhc3Nyb29tcyIsIm1vZHVsZXMiLCJjb21tdW5pdHkiLCJ1c2VyIiwiaXNUZWFjaGVyIiwicm9sZXMiLCJpbmNsdWRlcyIsInJlYWR5IiwiZ2xvYmFsVGV4dHMiLCJ0cmlnZ2VyRXZlbnQiLCJmZXRjaCIsInNldCIsImJyZWFkY3J1bWIiLCJyZXNwb25zZSIsImdldEhvbWUiLCJzdGF0dXMiLCJFcnJvciIsImRhdGEiLCJtYXAiLCJpdGVtIiwiaW5zdGFuY2UiLCJMZWFybmluZ01vZHVsZSIsImluZGV4IiwiZ2xvYmFsVGhpcyIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJfcmVhY3QiLCJfY29udGV4dCIsIl9pY29ucyIsIl9jb21wb25lbnRzIiwiRW1wdHlBc2lkZUNsYXNzcm9vbXMiLCJ1c2VNb2R1bGVDb250ZXh0IiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJBcHBJY29uIiwiaWNvbiIsImVtcHR5IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIkxpbmsiLCJocmVmIiwiYWN0aW9uIiwiX2xpc3QiLCJfZW1wdHkiLCJfaXRlbSIsIl9mcmFtZXJNb3Rpb24iLCJBc2lkZUNsYXNzcm9vbXMiLCJ0b3VyIiwiY29udGVudEFuaW1hdGlvbiIsImluaXRpYWwiLCJvcGFjaXR5IiwieSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJlYXN5IiwiQXJyYXkiLCJpc0FycmF5IiwidG90YWwiLCJsZW5ndGgiLCJjbHMiLCJtb3Rpb24iLCJkaXYiLCJJY29uQnV0dG9uIiwiTGlzdCIsImNvbnRyb2wiLCJBc2lkZUNsYXNzcm9vbSIsIl91aSIsImNvbnRlbnQiLCJuYW1lIiwiaWQiLCJrZXkiLCJFbnRpdHlJbWFnZSIsInJhdGlvIiwic3JjIiwicGljdHVyZSIsImVudGl0eSIsIkVtcHR5QXNpZGVEcmFmdCIsIkFzaWRlRHJhZnRzIiwiQXNpZGVEcmFmdEl0ZW0iLCJfZHJhZnRzIiwiX2NsYXNzcm9vbXMiLCJBc2lkZSIsIl9zbGlkZXIiLCJBc3NpZ25tZW50cyIsIm91dHB1dCIsIkFzc2lnbm1lbnRJdGVtIiwiUGFnZVRpdGxlIiwiYXMiLCJTbGlkZXIiLCJfbW9kdWxlQ2FyZCIsIkZyYWdtZW50IiwiQXNzaWdubWVudENhcmQiLCJjbGFzc3Jvb20iLCJhY3Rpdml0aWVzIiwiX3NlY3Rpb25UaXRsZSIsIl9vd25lckFzc2lnbiIsIkNvbW11bml0eU1vZHVsZXMiLCJvcGVuTW9kYWwiLCJzZXRPcGVuTW9kYWwiLCJ1c2VTdGF0ZSIsIm9wZW4iLCJjYW50QWNjZXNzIiwidG9nZ2xlTW9kYWwiLCJDb21tdW5pdHlJdGVtIiwiU2VjdGlvblRpdGxlIiwiYWN0aW9uVGV4dCIsImFjdGlvbnMiLCJsaW5rIiwiT3duZXJBc3NpZ25Gb3JtIiwib25DbG9zZSIsInR5cGUiLCJvblVzZSIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwiTW9kdWxlQ2FyZCIsInBsYXlncm91bmQiLCJhc3NpZ25tZW50IiwiTW9kdWxlQ2FyZEZvb3RlciIsIk1vZHVsZUNhcmRBY3Rpb25zRm9vdGVyIiwiQXBwSWNvbkJ1dHRvbiIsInRlc3QiLCJvbkNsaWNrIiwidXNlIiwiTW9kdWxlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2hvb2tzIiwiX3Byb2ZpbGVTZWN0aW9uIiwiX2Fzc2lnbWVudHMiLCJfYXNpZGUiLCJfbW9kdWxlcyIsIl9jb21tdW5pdHkiLCJzZXRSZWFkeSIsInVzZUJpbmRlciIsIlBhZ2VMb2FkZXIiLCJmZXRjaGluZyIsImNvbnRleHRWYWx1ZSIsIlByb3ZpZGVyIiwiUGFnZUNvbnRhaW5lciIsIkRyaXZlclRvdXJDb250YWluZXIiLCJidXR0b25zIiwiUHJvZmlsZVNlY3Rpb24iLCJNb2R1bGVzIiwiX2Fzc2lnbiIsIk1vZHVsZUl0ZW0iLCJhY3Rpb25IcmVmIiwiTW9kdWxlQXNzaWdubWVudHMiLCJhc3NpZ24iLCJvbkFjdGlvbiIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiYXNzaWduVG9DbGFzc3Jvb20iLCJkYXNoYm9hcmQiLCJ2YWxpZGF0ZSIsImlzQWRtaW4iLCJzaG93QWN0aW9uIiwiY3JlYXRlIiwiaHJlZkFjdGlvbiIsIl9pbWFnZSIsIlVzZXJDYXJkIiwic2VjdGlvbiIsInJvdGF0ZSIsImVhc2UiLCJJbWFnZSIsInBob3RvVVJMIiwiYWx0Iiwid2lkdGgiLCJkZWxheSIsImRpc3BsYXlOYW1lIiwiZW1haWwiLCJwcm9maWxlIiwiZWRpdCIsInN0ZXAwIiwiX3N3aXBlciIsImNoaWxkcmVuIiwiYnJlYWtwb2ludHMiLCJzbGlkZXNQZXJWaWV3Iiwic3BlY3MiLCJuYXZpZ2F0aW9uIiwibmV4dEVsIiwicHJldkVsIiwiU3dpcGVyU2xpZGVyIiwic3BhY2VCZXR3ZWVuIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvYXNpZGUvY2xhc3Nyb29tcy9lbXB0eS50c3giLCIvdHMvdmlld3MvYXNpZGUvY2xhc3Nyb29tcy9pbmRleC50c3giLCIvdHMvdmlld3MvYXNpZGUvY2xhc3Nyb29tcy9pdGVtLnRzeCIsIi90cy92aWV3cy9hc2lkZS9kcmFmdHMvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2FzaWRlL2RyYWZ0cy9pbmRleC50c3giLCIvdHMvdmlld3MvYXNpZGUvZHJhZnRzL2l0ZW0udHN4IiwiL3RzL3ZpZXdzL2FzaWRlL2luZGV4LnRzeCIsIi90cy92aWV3cy9hc3NpZ21lbnRzL2luZGV4LnRzeCIsIi90cy92aWV3cy9hc3NpZ21lbnRzL2l0ZW0udHN4IiwiL3RzL3ZpZXdzL2NvbW11bml0eS9pbmRleC50c3giLCIvdHMvdmlld3MvY29tbXVuaXR5L2l0ZW0udHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL21vZHVsZXMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL21vZHVsZXMvaXRlbS50c3giLCIvdHMvdmlld3Mvc2VjdGlvbi10aXRsZS50c3giLCIvdHMvdmlld3Mvc2VjdGlvbnMvZHJhZnRzLnRzeCIsIi90cy92aWV3cy9zZWN0aW9ucy9tb2R1bGVzLnRzeCIsIi90cy92aWV3cy9zZWN0aW9ucy9wcm9maWxlLXNlY3Rpb24udHN4IiwiL3RzL3ZpZXdzL3NsaWRlci50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FB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