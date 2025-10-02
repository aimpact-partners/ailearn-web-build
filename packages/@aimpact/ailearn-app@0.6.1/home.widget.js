System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.14/bundle", "@beyond-js/kernel@0.1.14/styles", "@beyond-js/react-18-widgets@1.1.8/page", "@aimpact/ailearn-app@0.6.1/main-layout.widget", "@aimpact/chat-sdk@1.5.5/session", "@aimpact/ailearn-sdk@1.2.0/tracking", "@aimpact/ailearn-sdk@1.2.0/entities/learning-modules", "@beyond-js/reactive@2.1.1/model", "@beyond-js/kernel@0.1.14/texts", "react@18.3.1", "@aimpact/ailearn-app@0.6.1/components/icons", "pragmate-ui@1.0.8/components", "pragmate-ui@1.0.8/icons", "pragmate-ui@1.0.8/list", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.6.1/components/ui", "@aimpact/ailearn-app@0.6.1/components/module-card", "@aimpact/ailearn-app@0.6.1/modules/owner-assign.code", "@beyond-js/react-18-widgets@1.1.8/hooks", "@aimpact/ailearn-app@0.6.1/modules/assign", "pragmate-ui@1.0.8/image", "pragmate-ui@1.0.8/swiper"], function (_export, _context2) {
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
    }, function (_beyondJsKernel0114Bundle) {
      dependency_1 = _beyondJsKernel0114Bundle;
    }, function (_beyondJsKernel0114Styles) {
      dependency_2 = _beyondJsKernel0114Styles;
    }, function (_beyondJsReact18Widgets118Page) {
      dependency_3 = _beyondJsReact18Widgets118Page;
    }, function (_aimpactAilearnApp061MainLayoutWidget) {
      dependency_4 = _aimpactAilearnApp061MainLayoutWidget;
    }, function (_aimpactChatSdk155Session) {
      dependency_5 = _aimpactChatSdk155Session;
    }, function (_aimpactAilearnSdk120Tracking) {
      dependency_6 = _aimpactAilearnSdk120Tracking;
    }, function (_aimpactAilearnSdk120EntitiesLearningModules) {
      dependency_7 = _aimpactAilearnSdk120EntitiesLearningModules;
    }, function (_beyondJsReactive211Model) {
      dependency_8 = _beyondJsReactive211Model;
    }, function (_beyondJsKernel0114Texts) {
      dependency_9 = _beyondJsKernel0114Texts;
    }, function (_react2) {
      dependency_10 = _react2;
    }, function (_aimpactAilearnApp061ComponentsIcons) {
      dependency_11 = _aimpactAilearnApp061ComponentsIcons;
    }, function (_pragmateUi108Components) {
      dependency_12 = _pragmateUi108Components;
    }, function (_pragmateUi108Icons) {
      dependency_13 = _pragmateUi108Icons;
    }, function (_pragmateUi108List) {
      dependency_14 = _pragmateUi108List;
    }, function (_framerMotion2) {
      dependency_15 = _framerMotion2;
    }, function (_aimpactAilearnApp061ComponentsUi) {
      dependency_16 = _aimpactAilearnApp061ComponentsUi;
    }, function (_aimpactAilearnApp061ComponentsModuleCard) {
      dependency_17 = _aimpactAilearnApp061ComponentsModuleCard;
    }, function (_aimpactAilearnApp061ModulesOwnerAssignCode) {
      dependency_18 = _aimpactAilearnApp061ModulesOwnerAssignCode;
    }, function (_beyondJsReact18Widgets118Hooks) {
      dependency_19 = _beyondJsReact18Widgets118Hooks;
    }, function (_aimpactAilearnApp061ModulesAssign) {
      dependency_20 = _aimpactAilearnApp061ModulesAssign;
    }, function (_pragmateUi108Image) {
      dependency_21 = _pragmateUi108Image;
    }, function (_pragmateUi108Swiper) {
      dependency_22 = _pragmateUi108Swiper;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.9"], ["@beyond-js/reactive", "2.1.1"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.14"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.8"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["@radix-ui/react-accordion", "1.2.12"], ["@radix-ui/react-collapsible", "1.1.12"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-select", "2.2.6"], ["@radix-ui/react-separator", "1.1.7"], ["@tiptap/extension-blockquote", "3.2.0"], ["@tiptap/extension-code-block", "3.2.0"], ["@tiptap/extension-horizontal-rule", "3.2.0"], ["@tiptap/extension-image", "3.6.2"], ["@tiptap/extension-task-item", "3.2.0"], ["@tiptap/extension-task-list", "3.2.0"], ["@tiptap/extension-underline", "3.2.0"], ["@tiptap/pm", "3.6.2"], ["@tiptap/react", "3.2.0"], ["@tiptap/starter-kit", "3.2.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.4.0"], ["react-virtuoso", "4.14.0"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["turndown", "7.2.0"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/node", "20.11.0"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.6.1"], ["@aimpact/rvd", "0.6.3"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.6.1/home",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/main-layout.widget', dependency_4], ['@aimpact/chat-sdk/session', dependency_5], ['@aimpact/ailearn-sdk/tracking', dependency_6], ['@aimpact/ailearn-sdk/entities/learning-modules', dependency_7], ['@beyond-js/reactive/model', dependency_8], ['@beyond-js/kernel/texts', dependency_9], ['react', dependency_10], ['@aimpact/ailearn-app/components/icons', dependency_11], ['pragmate-ui/components', dependency_12], ['pragmate-ui/icons', dependency_13], ['pragmate-ui/list', dependency_14], ['framer-motion', dependency_15], ['@aimpact/ailearn-app/components/ui', dependency_16], ['@aimpact/ailearn-app/components/module-card', dependency_17], ['@aimpact/ailearn-app/modules/owner-assign.code', dependency_18], ['@beyond-js/react-18-widgets/hooks', dependency_19], ['@aimpact/ailearn-app/modules/assign', dependency_20], ['pragmate-ui/image', dependency_21], ['pragmate-ui/swiper', dependency_22]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "student-home",
        "vspecifier": "@aimpact/ailearn-app@0.6.1/home.widget",
        "is": "page",
        "route": "/",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.6.1/home.widget');
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
        hash: 1460266483,
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
              entity: "module",
              size: "xs"
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
        hash: 186797824,
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
              entity: "module",
              size: "xs"
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
        hash: 2925191313,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJfbWFpbkxheW91dCIsIl9zZXNzaW9uIiwiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJzdG9yZSIsImhpZGVUaW1lb3V0IiwiV2lkZ2V0IiwiVmlldyIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiY29uc3RydWN0b3IiLCJhcmdzIiwic2Vzc2lvbldyYXBwZXIiLCJvbiIsIm9uTG9nb3V0Iiwib25Mb2dpbiIsImNsZWFyIiwidW5kZWZpbmVkIiwib2ZmIiwic2hvdyIsImNsZWFyVGltZW91dCIsIkxheW91dEJyb2tlciIsIm92ZXJsYXkiLCJsb2FkIiwiaGlkZSIsImV4cG9ydHMiLCJfbGVhcm5pbmdNb2R1bGVzIiwiX21vZGVsIiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwiaXNTdG9yZSIsIml0ZW1zIiwiYXNzaWdubWVudHMiLCJ0ZXh0cyIsIkN1cnJlbnRUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInZhbHVlIiwiZHJhZnRzIiwiY2xhc3Nyb29tcyIsIm1vZHVsZXMiLCJjb21tdW5pdHkiLCJ1c2VyIiwiaXNUZWFjaGVyIiwicm9sZXMiLCJpbmNsdWRlcyIsInJlYWR5IiwiZ2xvYmFsVGV4dHMiLCJ0cmlnZ2VyRXZlbnQiLCJmZXRjaCIsInNldCIsImJyZWFkY3J1bWIiLCJyZXNwb25zZSIsImdldEhvbWUiLCJzdGF0dXMiLCJFcnJvciIsImRhdGEiLCJtYXAiLCJpdGVtIiwiaW5zdGFuY2UiLCJMZWFybmluZ01vZHVsZSIsImluZGV4IiwiZ2xvYmFsVGhpcyIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJfcmVhY3QiLCJfY29udGV4dCIsIl9pY29ucyIsIl9jb21wb25lbnRzIiwiRW1wdHlBc2lkZUNsYXNzcm9vbXMiLCJ1c2VNb2R1bGVDb250ZXh0IiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJBcHBJY29uIiwiaWNvbiIsImVtcHR5IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIkxpbmsiLCJocmVmIiwiYWN0aW9uIiwiX2xpc3QiLCJfZW1wdHkiLCJfaXRlbSIsIl9mcmFtZXJNb3Rpb24iLCJBc2lkZUNsYXNzcm9vbXMiLCJ0b3VyIiwidGV4dHNUb3VyIiwiY29udGVudEFuaW1hdGlvbiIsImluaXRpYWwiLCJvcGFjaXR5IiwieSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJlYXN5IiwiQXJyYXkiLCJpc0FycmF5IiwidG90YWwiLCJsZW5ndGgiLCJjbHMiLCJsaW5rIiwiYWN0aW9uTGFiZWwiLCJhY3Rpb25zIiwiY3JlYXRlIiwiam9pbiIsInRlYWNoZXIiLCJzdHVkZW50IiwibW90aW9uIiwiZGl2IiwiSWNvbkJ1dHRvbiIsIkxpc3QiLCJjb250cm9sIiwiQXNpZGVDbGFzc3Jvb20iLCJfdWkiLCJjb250ZW50IiwibmFtZSIsImlkIiwia2V5IiwiRW50aXR5SW1hZ2UiLCJyYXRpbyIsInNyYyIsInBpY3R1cmUiLCJlbnRpdHkiLCJzaXplIiwiRW1wdHlBc2lkZURyYWZ0IiwiQXNpZGVEcmFmdHMiLCJBc2lkZURyYWZ0SXRlbSIsIm9iamVjdGl2ZSIsIl9kcmFmdHMiLCJfY2xhc3Nyb29tcyIsIkFzaWRlIiwiX3NsaWRlciIsIkFzc2lnbm1lbnRzIiwib3V0cHV0IiwiQXNzaWdubWVudEl0ZW0iLCJQYWdlVGl0bGUiLCJhcyIsIlNsaWRlciIsIl9tb2R1bGVDYXJkIiwiRnJhZ21lbnQiLCJBc3NpZ25tZW50Q2FyZCIsImNsYXNzcm9vbSIsImFjdGl2aXRpZXMiLCJfc2VjdGlvblRpdGxlIiwiX293bmVyQXNzaWduIiwiQ29tbXVuaXR5TW9kdWxlcyIsIm9wZW5Nb2RhbCIsInNldE9wZW5Nb2RhbCIsInVzZVN0YXRlIiwib3BlbiIsImNhbnRBY2Nlc3MiLCJ0b2dnbGVNb2RhbCIsIkNvbW11bml0eUl0ZW0iLCJTZWN0aW9uVGl0bGUiLCJhY3Rpb25UZXh0IiwiT3duZXJBc3NpZ25Gb3JtIiwib25DbG9zZSIsInR5cGUiLCJvblVzZSIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwiTW9kdWxlQ2FyZCIsInBsYXlncm91bmQiLCJhc3NpZ25tZW50IiwiTW9kdWxlQ2FyZEZvb3RlciIsIk1vZHVsZUNhcmRBY3Rpb25zRm9vdGVyIiwiQXBwSWNvbkJ1dHRvbiIsInRlc3QiLCJvbkNsaWNrIiwidXNlIiwiTW9kdWxlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2hvb2tzIiwiX2FzaWRlIiwiX2Fzc2lnbWVudHMiLCJfY29tbXVuaXR5IiwiX21vZHVsZXMiLCJfcHJvZmlsZVNlY3Rpb24iLCJ1c2VTdG9yZSIsIlBhZ2VMb2FkZXIiLCJmZXRjaGluZyIsImNvbnRleHRWYWx1ZSIsIlByb3ZpZGVyIiwiUGFnZUNvbnRhaW5lciIsIkRyaXZlclRvdXJDb250YWluZXIiLCJidXR0b25zIiwiUHJvZmlsZVNlY3Rpb24iLCJNb2R1bGVzIiwiX2Fzc2lnbiIsIk1vZHVsZUl0ZW0iLCJhY3Rpb25IcmVmIiwiTW9kdWxlQXNzaWdubWVudHMiLCJhc3NpZ24iLCJvbkFjdGlvbiIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiYXNzaWduVG9DbGFzc3Jvb20iLCJkYXNoYm9hcmQiLCJ2YWxpZGF0ZSIsImlzQWRtaW4iLCJzaG93QWN0aW9uIiwiaHJlZkFjdGlvbiIsIl9pbWFnZSIsIlVzZXJDYXJkIiwic2VjdGlvbiIsInJvdGF0ZSIsImVhc2UiLCJJbWFnZSIsInBob3RvVVJMIiwiYWx0Iiwid2lkdGgiLCJkZWxheSIsImRpc3BsYXlOYW1lIiwiZW1haWwiLCJwcm9maWxlIiwiZWRpdCIsInN0ZXAwIiwiX3N3aXBlciIsImNoaWxkcmVuIiwiYnJlYWtwb2ludHMiLCJzbGlkZXNQZXJWaWV3Iiwic3BlY3MiLCJuYXZpZ2F0aW9uIiwibmV4dEVsIiwicHJldkVsIiwiU3dpcGVyU2xpZGVyIiwic3BhY2VCZXR3ZWVuIl0sInNvdXJjZXMiOlsiLy90cy9jb250cm9sbGVyLnRzIiwiLy90cy9zdG9yZS50cyIsIi8vdHMvdmlld3MvYXNpZGUvY2xhc3Nyb29tcy9lbXB0eS50c3giLCIvL3RzL3ZpZXdzL2FzaWRlL2NsYXNzcm9vbXMvaW5kZXgudHN4IiwiLy90cy92aWV3cy9hc2lkZS9jbGFzc3Jvb21zL2l0ZW0udHN4IiwiLy90cy92aWV3cy9hc2lkZS9kcmFmdHMvZW1wdHkudHN4IiwiLy90cy92aWV3cy9hc2lkZS9kcmFmdHMvaW5kZXgudHN4IiwiLy90cy92aWV3cy9hc2lkZS9kcmFmdHMvaXRlbS50c3giLCIvL3RzL3ZpZXdzL2FzaWRlL2luZGV4LnRzeCIsIi8vdHMvdmlld3MvYXNzaWdtZW50cy9pbmRleC50c3giLCIvL3RzL3ZpZXdzL2Fzc2lnbWVudHMvaXRlbS50c3giLCIvL3RzL3ZpZXdzL2NvbW11bml0eS9pbmRleC50c3giLCIvL3RzL3ZpZXdzL2NvbW11bml0eS9pdGVtLnRzeCIsIi8vdHMvdmlld3MvY29udGV4dC50cyIsIi8vdHMvdmlld3MvaW5kZXgudHN4IiwiLy90cy92aWV3cy9tb2R1bGVzL2luZGV4LnRzeCIsIi8vdHMvdmlld3MvbW9kdWxlcy9pdGVtLnRzeCIsIi8vdHMvdmlld3Mvc2VjdGlvbi10aXRsZS50c3giLCIvL3RzL3ZpZXdzL3NlY3Rpb25zL2RyYWZ0cy50c3giLCIvL3RzL3ZpZXdzL3NlY3Rpb25zL21vZHVsZXMudHN4IiwiLy90cy92aWV3cy9zZWN0aW9ucy9wcm9maWxlLXNlY3Rpb24udHN4IiwiLy90cy92aWV3cy9zbGlkZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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