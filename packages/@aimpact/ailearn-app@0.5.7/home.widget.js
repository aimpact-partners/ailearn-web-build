System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "@beyond-js/react-18-widgets@1.1.4/page", "@aimpact/ailearn-app@0.5.7/main-layout.widget", "@aimpact/chat-sdk@1.5.5/session", "@aimpact/ailearn-sdk@1.2.0/tracking", "@aimpact/ailearn-sdk@1.2.0/entities/learning-modules", "@beyond-js/reactive@2.1.1/model", "@beyond-js/kernel@0.1.12/texts", "react@18.3.1", "@aimpact/ailearn-app@0.5.7/components/icons", "pragmate-ui@1.0.6/components", "pragmate-ui@1.0.6/icons", "pragmate-ui@1.0.6/list", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.5.7/components/ui", "@aimpact/ailearn-app@0.5.7/components/module-card", "@aimpact/ailearn-app@0.5.7/modules/owner-assign.code", "@aimpact/ailearn-app@0.5.7/shared/hooks", "@aimpact/ailearn-app@0.5.7/modules/assign", "pragmate-ui@1.0.6/image", "pragmate-ui@1.0.6/swiper"], function (_export, _context2) {
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
    setters: [function (_beyondJsWidgets112Render) {
      dependency_0 = _beyondJsWidgets112Render;
    }, function (_beyondJsKernel0112Bundle) {
      dependency_1 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsKernel0112Styles) {
      dependency_2 = _beyondJsKernel0112Styles;
    }, function (_beyondJsReact18Widgets114Page) {
      dependency_3 = _beyondJsReact18Widgets114Page;
    }, function (_aimpactAilearnApp057MainLayoutWidget) {
      dependency_4 = _aimpactAilearnApp057MainLayoutWidget;
    }, function (_aimpactChatSdk155Session) {
      dependency_5 = _aimpactChatSdk155Session;
    }, function (_aimpactAilearnSdk120Tracking) {
      dependency_6 = _aimpactAilearnSdk120Tracking;
    }, function (_aimpactAilearnSdk120EntitiesLearningModules) {
      dependency_7 = _aimpactAilearnSdk120EntitiesLearningModules;
    }, function (_beyondJsReactive211Model) {
      dependency_8 = _beyondJsReactive211Model;
    }, function (_beyondJsKernel0112Texts) {
      dependency_9 = _beyondJsKernel0112Texts;
    }, function (_react2) {
      dependency_10 = _react2;
    }, function (_aimpactAilearnApp057ComponentsIcons) {
      dependency_11 = _aimpactAilearnApp057ComponentsIcons;
    }, function (_pragmateUi106Components) {
      dependency_12 = _pragmateUi106Components;
    }, function (_pragmateUi106Icons) {
      dependency_13 = _pragmateUi106Icons;
    }, function (_pragmateUi106List) {
      dependency_14 = _pragmateUi106List;
    }, function (_framerMotion2) {
      dependency_15 = _framerMotion2;
    }, function (_aimpactAilearnApp057ComponentsUi) {
      dependency_16 = _aimpactAilearnApp057ComponentsUi;
    }, function (_aimpactAilearnApp057ComponentsModuleCard) {
      dependency_17 = _aimpactAilearnApp057ComponentsModuleCard;
    }, function (_aimpactAilearnApp057ModulesOwnerAssignCode) {
      dependency_18 = _aimpactAilearnApp057ModulesOwnerAssignCode;
    }, function (_aimpactAilearnApp057SharedHooks) {
      dependency_19 = _aimpactAilearnApp057SharedHooks;
    }, function (_aimpactAilearnApp057ModulesAssign) {
      dependency_20 = _aimpactAilearnApp057ModulesAssign;
    }, function (_pragmateUi106Image) {
      dependency_21 = _pragmateUi106Image;
    }, function (_pragmateUi106Swiper) {
      dependency_22 = _pragmateUi106Swiper;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.6"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.1.1"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["@radix-ui/react-accordion", "1.2.12"], ["@radix-ui/react-collapsible", "1.1.12"], ["@radix-ui/react-icons", "1.3.2"], ["@tiptap/extension-blockquote", "3.2.0"], ["@tiptap/extension-code-block", "3.2.0"], ["@tiptap/extension-horizontal-rule", "3.2.0"], ["@tiptap/extension-task-item", "3.2.0"], ["@tiptap/extension-task-list", "3.2.0"], ["@tiptap/extension-underline", "3.2.0"], ["@tiptap/pm", "3.2.0"], ["@tiptap/react", "3.2.0"], ["@tiptap/starter-kit", "3.2.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.4.0"], ["react-virtuoso", "4.14.0"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["turndown", "7.2.0"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.5.7"], ["@aimpact/rvd", "0.5.7"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.5.7/home",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/main-layout.widget', dependency_4], ['@aimpact/chat-sdk/session', dependency_5], ['@aimpact/ailearn-sdk/tracking', dependency_6], ['@aimpact/ailearn-sdk/entities/learning-modules', dependency_7], ['@beyond-js/reactive/model', dependency_8], ['@beyond-js/kernel/texts', dependency_9], ['react', dependency_10], ['@aimpact/ailearn-app/components/icons', dependency_11], ['pragmate-ui/components', dependency_12], ['pragmate-ui/icons', dependency_13], ['pragmate-ui/list', dependency_14], ['framer-motion', dependency_15], ['@aimpact/ailearn-app/components/ui', dependency_16], ['@aimpact/ailearn-app/components/module-card', dependency_17], ['@aimpact/ailearn-app/modules/owner-assign.code', dependency_18], ['@aimpact/ailearn-app/shared/hooks', dependency_19], ['@aimpact/ailearn-app/modules/assign', dependency_20], ['pragmate-ui/image', dependency_21], ['pragmate-ui/swiper', dependency_22]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "student-home",
        "vspecifier": "@aimpact/ailearn-app@0.5.7/home.widget",
        "is": "page",
        "route": "/",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.5.7/home.widget');
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
        hash: 845565254,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
          var _learningModules = require("@aimpact/ailearn-sdk/entities/learning-modules");
          var _session = require("@aimpact/chat-sdk/session");
          var _model = require("@beyond-js/reactive/model");
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
              this.#texts.fetch();
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
        hash: 3741634214,
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
                tour: textsTour
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
            const link = store.user.roles.includes('teacher') ? '/classrooms/management' : '/classrooms/join';
            const actionLabel = store.user.roles.includes('teacher') ? texts.actions.create : texts.actions.join;
            const tour = store.isTeacher ? textsTour.teacher : textsTour.student;
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
              title: actionLabel,
              href: link
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
        hash: 4224464770,
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
                tour: textsTour
              }
            } = (0, _context.useModuleContext)();
            if (!store.isTeacher) return null;
            const drafts = Array.isArray(store.drafts) ? store.drafts : [];
            const total = drafts.length;
            const cls = `drafts-container aside-list${total === 0 ? ' aside-list--empty' : ''}`;
            const tour = store.isTeacher ? textsTour.teacher : textsTour.student;
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
        hash: 2597444730,
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
            const title = !item.title || item.title === '' ? item.objective ? item.objective : texts.items.title : item.title;
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
        hash: 1408889939,
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
              store,
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
            const tour = store.isTeacher ? texts.tour.teacher : texts.tour.student;
            return _react.default.createElement("article", {
              "data-tour": "1",
              "data-description": tour.assignments.description,
              "data-title": tour.assignments.title,
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
        hash: 3884755814,
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
              store,
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
            const tour = store.isTeacher ? texts.tour.teacher : texts.tour.student;
            return _react.default.createElement("article", {
              "data-tour": "2",
              "data-description": tour.community.description,
              "data-title": tour.community.title,
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
        hash: 3951181978,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _hooks = require("@aimpact/ailearn-app/shared/hooks");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _react = require("react");
          var _aside = require("./aside");
          var _assigments = require("./assigments");
          var _community = require("./community");
          var _context = require("./context");
          var _modules = require("./modules");
          var _profileSection = require("./sections/profile-section");
          /*bundle*/
          function View({
            store
          }) {
            const {
              texts
            } = store;
            (0, _hooks.useStore)(store);
            if (!store.ready) return _react.default.createElement(_ui.PageLoader, {
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
              ready: store.ready,
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
        hash: 2781646055,
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
              store,
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
            const tour = store.isTeacher ? texts.tour.teacher : texts.tour.student;
            return _react.default.createElement("article", {
              "data-tour": "2",
              "data-description": tour.modules.description,
              "data-title": tour.modules.title,
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
        hash: 2814746144,
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
              store,
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
            const tour = store.isTeacher ? texts.tour.teacher : texts.tour.student;
            return _react.default.createElement("div", {
              "data-tour": "0",
              "data-description": tour.step0.description,
              "data-title": tour.step0.title,
              className: "user-profile__container"
            }, _react.default.createElement(_framerMotion.motion.section, {
              className: "user-profile",
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
            }, texts.profile.edit)))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJfbWFpbkxheW91dCIsIl9zZXNzaW9uIiwiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJzdG9yZSIsImhpZGVUaW1lb3V0IiwiV2lkZ2V0IiwiVmlldyIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiY29uc3RydWN0b3IiLCJhcmdzIiwic2Vzc2lvbldyYXBwZXIiLCJvbiIsIm9uTG9nb3V0Iiwib25Mb2dpbiIsImNsZWFyIiwidW5kZWZpbmVkIiwib2ZmIiwic2hvdyIsImNsZWFyVGltZW91dCIsIkxheW91dEJyb2tlciIsIm92ZXJsYXkiLCJsb2FkIiwiaGlkZSIsImV4cG9ydHMiLCJfbGVhcm5pbmdNb2R1bGVzIiwiX21vZGVsIiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwiaXNTdG9yZSIsIml0ZW1zIiwiYXNzaWdubWVudHMiLCJ0ZXh0cyIsIkN1cnJlbnRUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInZhbHVlIiwiZHJhZnRzIiwiY2xhc3Nyb29tcyIsIm1vZHVsZXMiLCJjb21tdW5pdHkiLCJ1c2VyIiwiaXNUZWFjaGVyIiwicm9sZXMiLCJpbmNsdWRlcyIsInJlYWR5IiwiZ2xvYmFsVGV4dHMiLCJ0cmlnZ2VyRXZlbnQiLCJmZXRjaCIsInNldCIsImJyZWFkY3J1bWIiLCJyZXNwb25zZSIsImdldEhvbWUiLCJzdGF0dXMiLCJFcnJvciIsImRhdGEiLCJtYXAiLCJpdGVtIiwiaW5zdGFuY2UiLCJMZWFybmluZ01vZHVsZSIsImluZGV4IiwiZ2xvYmFsVGhpcyIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJfcmVhY3QiLCJfY29udGV4dCIsIl9pY29ucyIsIl9jb21wb25lbnRzIiwiRW1wdHlBc2lkZUNsYXNzcm9vbXMiLCJ1c2VNb2R1bGVDb250ZXh0IiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJBcHBJY29uIiwiaWNvbiIsImVtcHR5IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIkxpbmsiLCJocmVmIiwiYWN0aW9uIiwiX2xpc3QiLCJfZW1wdHkiLCJfaXRlbSIsIl9mcmFtZXJNb3Rpb24iLCJBc2lkZUNsYXNzcm9vbXMiLCJ0b3VyIiwidGV4dHNUb3VyIiwiY29udGVudEFuaW1hdGlvbiIsImluaXRpYWwiLCJvcGFjaXR5IiwieSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJlYXN5IiwiQXJyYXkiLCJpc0FycmF5IiwidG90YWwiLCJsZW5ndGgiLCJjbHMiLCJsaW5rIiwiYWN0aW9uTGFiZWwiLCJhY3Rpb25zIiwiY3JlYXRlIiwiam9pbiIsInRlYWNoZXIiLCJzdHVkZW50IiwibW90aW9uIiwiZGl2IiwiSWNvbkJ1dHRvbiIsIkxpc3QiLCJjb250cm9sIiwiQXNpZGVDbGFzc3Jvb20iLCJfdWkiLCJjb250ZW50IiwibmFtZSIsImlkIiwia2V5IiwiRW50aXR5SW1hZ2UiLCJyYXRpbyIsInNyYyIsInBpY3R1cmUiLCJlbnRpdHkiLCJFbXB0eUFzaWRlRHJhZnQiLCJBc2lkZURyYWZ0cyIsIkFzaWRlRHJhZnRJdGVtIiwib2JqZWN0aXZlIiwiX2RyYWZ0cyIsIl9jbGFzc3Jvb21zIiwiQXNpZGUiLCJfc2xpZGVyIiwiQXNzaWdubWVudHMiLCJvdXRwdXQiLCJBc3NpZ25tZW50SXRlbSIsIlBhZ2VUaXRsZSIsImFzIiwiU2xpZGVyIiwiX21vZHVsZUNhcmQiLCJGcmFnbWVudCIsIkFzc2lnbm1lbnRDYXJkIiwiY2xhc3Nyb29tIiwiYWN0aXZpdGllcyIsIl9zZWN0aW9uVGl0bGUiLCJfb3duZXJBc3NpZ24iLCJDb21tdW5pdHlNb2R1bGVzIiwib3Blbk1vZGFsIiwic2V0T3Blbk1vZGFsIiwidXNlU3RhdGUiLCJvcGVuIiwiY2FudEFjY2VzcyIsInRvZ2dsZU1vZGFsIiwiQ29tbXVuaXR5SXRlbSIsIlNlY3Rpb25UaXRsZSIsImFjdGlvblRleHQiLCJPd25lckFzc2lnbkZvcm0iLCJvbkNsb3NlIiwidHlwZSIsIm9uVXNlIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJNb2R1bGVDYXJkIiwicGxheWdyb3VuZCIsImFzc2lnbm1lbnQiLCJNb2R1bGVDYXJkRm9vdGVyIiwiTW9kdWxlQ2FyZEFjdGlvbnNGb290ZXIiLCJBcHBJY29uQnV0dG9uIiwidGVzdCIsIm9uQ2xpY2siLCJ1c2UiLCJNb2R1bGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfaG9va3MiLCJfYXNpZGUiLCJfYXNzaWdtZW50cyIsIl9jb21tdW5pdHkiLCJfbW9kdWxlcyIsIl9wcm9maWxlU2VjdGlvbiIsInVzZVN0b3JlIiwiUGFnZUxvYWRlciIsImZldGNoaW5nIiwiY29udGV4dFZhbHVlIiwiUHJvdmlkZXIiLCJQYWdlQ29udGFpbmVyIiwiRHJpdmVyVG91ckNvbnRhaW5lciIsImJ1dHRvbnMiLCJQcm9maWxlU2VjdGlvbiIsIk1vZHVsZXMiLCJfYXNzaWduIiwiTW9kdWxlSXRlbSIsImFjdGlvbkhyZWYiLCJNb2R1bGVBc3NpZ25tZW50cyIsImFzc2lnbiIsIm9uQWN0aW9uIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJhc3NpZ25Ub0NsYXNzcm9vbSIsImRhc2hib2FyZCIsInZhbGlkYXRlIiwiaXNBZG1pbiIsInNob3dBY3Rpb24iLCJocmVmQWN0aW9uIiwiX2ltYWdlIiwiVXNlckNhcmQiLCJzZWN0aW9uIiwicm90YXRlIiwiZWFzZSIsIkltYWdlIiwicGhvdG9VUkwiLCJhbHQiLCJ3aWR0aCIsImRlbGF5IiwiZGlzcGxheU5hbWUiLCJlbWFpbCIsInByb2ZpbGUiLCJlZGl0Iiwic3RlcDAiLCJfc3dpcGVyIiwiY2hpbGRyZW4iLCJicmVha3BvaW50cyIsInNsaWRlc1BlclZpZXciLCJzcGVjcyIsIm5hdmlnYXRpb24iLCJuZXh0RWwiLCJwcmV2RWwiLCJTd2lwZXJTbGlkZXIiLCJzcGFjZUJldHdlZW4iXSwic291cmNlcyI6WyIvL3RzL2NvbnRyb2xsZXIudHMiLCIvL3RzL3N0b3JlLnRzIiwiLy90cy92aWV3cy9hc2lkZS9jbGFzc3Jvb21zL2VtcHR5LnRzeCIsIi8vdHMvdmlld3MvYXNpZGUvY2xhc3Nyb29tcy9pbmRleC50c3giLCIvL3RzL3ZpZXdzL2FzaWRlL2NsYXNzcm9vbXMvaXRlbS50c3giLCIvL3RzL3ZpZXdzL2FzaWRlL2RyYWZ0cy9lbXB0eS50c3giLCIvL3RzL3ZpZXdzL2FzaWRlL2RyYWZ0cy9pbmRleC50c3giLCIvL3RzL3ZpZXdzL2FzaWRlL2RyYWZ0cy9pdGVtLnRzeCIsIi8vdHMvdmlld3MvYXNpZGUvaW5kZXgudHN4IiwiLy90cy92aWV3cy9hc3NpZ21lbnRzL2luZGV4LnRzeCIsIi8vdHMvdmlld3MvYXNzaWdtZW50cy9pdGVtLnRzeCIsIi8vdHMvdmlld3MvY29tbXVuaXR5L2luZGV4LnRzeCIsIi8vdHMvdmlld3MvY29tbXVuaXR5L2l0ZW0udHN4IiwiLy90cy92aWV3cy9jb250ZXh0LnRzIiwiLy90cy92aWV3cy9pbmRleC50c3giLCIvL3RzL3ZpZXdzL21vZHVsZXMvaW5kZXgudHN4IiwiLy90cy92aWV3cy9tb2R1bGVzL2l0ZW0udHN4IiwiLy90cy92aWV3cy9zZWN0aW9uLXRpdGxlLnRzeCIsIi8vdHMvdmlld3Mvc2VjdGlvbnMvZHJhZnRzLnRzeCIsIi8vdHMvdmlld3Mvc2VjdGlvbnMvbW9kdWxlcy50c3giLCIvL3RzL3ZpZXdzL3NlY3Rpb25zL3Byb2ZpbGUtc2VjdGlvbi50c3giLCIvL3RzL3ZpZXdzL3NsaWRlci50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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