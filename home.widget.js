System.register(["@beyond-js/widgets@1.1.1/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/react-18-widgets@1.1.3/page", "@aimpact/ailearn-app@0.3.29/main-layout.widget", "@aimpact/chat-sdk@1.4.1/session", "@aimpact/ailearn-sdk@1.1.0/tracking", "@aimpact/ailearn-sdk@1.1.0/entities/learning-modules", "@aimpact/reactive@0.0.1/model", "@beyond-js/kernel@0.1.9/texts", "react@18.2.0", "@aimpact/ailearn-app@0.3.29/components/icons", "pragmate-ui@1.0.0-beta.7/components", "pragmate-ui@1.0.0-beta.7/icons", "pragmate-ui@1.0.0-beta.7/list", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.3.29/components/ui", "@aimpact/ailearn-app@0.3.29/components/module-card", "@aimpact/ailearn-app@0.3.29/modules/owner-assign.code", "@beyond-js/react-18-widgets@1.1.3/hooks", "@aimpact/ailearn-app@0.3.29/modules/assign", "pragmate-ui@1.0.0-beta.7/image", "pragmate-ui@1.0.0-beta.7/swiper"], function (_export, _context2) {
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
    }, function (_beyondJsReact18Widgets113Page) {
      dependency_2 = _beyondJsReact18Widgets113Page;
    }, function (_aimpactAilearnApp0329MainLayoutWidget) {
      dependency_3 = _aimpactAilearnApp0329MainLayoutWidget;
    }, function (_aimpactChatSdk141Session) {
      dependency_4 = _aimpactChatSdk141Session;
    }, function (_aimpactAilearnSdk110Tracking) {
      dependency_5 = _aimpactAilearnSdk110Tracking;
    }, function (_aimpactAilearnSdk110EntitiesLearningModules) {
      dependency_6 = _aimpactAilearnSdk110EntitiesLearningModules;
    }, function (_aimpactReactive001Model) {
      dependency_7 = _aimpactReactive001Model;
    }, function (_beyondJsKernel019Texts) {
      dependency_8 = _beyondJsKernel019Texts;
    }, function (_react2) {
      dependency_9 = _react2;
    }, function (_aimpactAilearnApp0329ComponentsIcons) {
      dependency_10 = _aimpactAilearnApp0329ComponentsIcons;
    }, function (_pragmateUi100Beta7Components) {
      dependency_11 = _pragmateUi100Beta7Components;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_12 = _pragmateUi100Beta7Icons;
    }, function (_pragmateUi100Beta7List) {
      dependency_13 = _pragmateUi100Beta7List;
    }, function (_framerMotion2) {
      dependency_14 = _framerMotion2;
    }, function (_aimpactAilearnApp0329ComponentsUi) {
      dependency_15 = _aimpactAilearnApp0329ComponentsUi;
    }, function (_aimpactAilearnApp0329ComponentsModuleCard) {
      dependency_16 = _aimpactAilearnApp0329ComponentsModuleCard;
    }, function (_aimpactAilearnApp0329ModulesOwnerAssignCode) {
      dependency_17 = _aimpactAilearnApp0329ModulesOwnerAssignCode;
    }, function (_beyondJsReact18Widgets113Hooks) {
      dependency_18 = _beyondJsReact18Widgets113Hooks;
    }, function (_aimpactAilearnApp0329ModulesAssign) {
      dependency_19 = _aimpactAilearnApp0329ModulesAssign;
    }, function (_pragmateUi100Beta7Image) {
      dependency_20 = _pragmateUi100Beta7Image;
    }, function (_pragmateUi100Beta7Swiper) {
      dependency_21 = _pragmateUi100Beta7Swiper;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.1.0"], ["@aimpact/ailearn-api", null], ["@aimpact/auth", null], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.2.0"], ["@beyond-js/kernel", "0.1.9"], ["pragmate-ui", "1.0.0-beta.7"], ["@beyond-js/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.1"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.3"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["@google-cloud/storage", "7.15.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.24.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.29"], ["@aimpact/ailearn-app", "0.3.29"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.3.29/home",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-18-widgets/page', dependency_2], ['@aimpact/ailearn-app/main-layout.widget', dependency_3], ['@aimpact/chat-sdk/session', dependency_4], ['@aimpact/ailearn-sdk/tracking', dependency_5], ['@aimpact/ailearn-sdk/entities/learning-modules', dependency_6], ['@aimpact/reactive/model', dependency_7], ['@beyond-js/kernel/texts', dependency_8], ['react', dependency_9], ['@aimpact/ailearn-app/components/icons', dependency_10], ['pragmate-ui/components', dependency_11], ['pragmate-ui/icons', dependency_12], ['pragmate-ui/list', dependency_13], ['framer-motion', dependency_14], ['@aimpact/ailearn-app/components/ui', dependency_15], ['@aimpact/ailearn-app/components/module-card', dependency_16], ['@aimpact/ailearn-app/modules/owner-assign.code', dependency_17], ['@beyond-js/react-18-widgets/hooks', dependency_18], ['@aimpact/ailearn-app/modules/assign', dependency_19], ['pragmate-ui/image', dependency_20], ['pragmate-ui/swiper', dependency_21]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "student-home",
        "vspecifier": "@aimpact/ailearn-app@0.3.29/home.widget",
        "is": "page",
        "route": "/",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.3.29/home.widget');
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
        hash: 4245246482,
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
            const link = store.user.roles.includes('teacher') ? '/classrooms/management' : '/classrooms/join';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJfbWFpbkxheW91dCIsIl9zZXNzaW9uIiwiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJzdG9yZSIsImhpZGVUaW1lb3V0IiwiV2lkZ2V0IiwiVmlldyIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiY29uc3RydWN0b3IiLCJhcmdzIiwic2Vzc2lvbldyYXBwZXIiLCJvbiIsIm9uTG9nb3V0Iiwib25Mb2dpbiIsImNsZWFyIiwidW5kZWZpbmVkIiwib2ZmIiwic2hvdyIsImNsZWFyVGltZW91dCIsIkxheW91dEJyb2tlciIsIm92ZXJsYXkiLCJsb2FkIiwiaGlkZSIsImV4cG9ydHMiLCJfbGVhcm5pbmdNb2R1bGVzIiwiX21vZGVsIiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwiaXNTdG9yZSIsIml0ZW1zIiwiYXNzaWdubWVudHMiLCJ0ZXh0cyIsIkN1cnJlbnRUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInZhbHVlIiwiZHJhZnRzIiwiY2xhc3Nyb29tcyIsIm1vZHVsZXMiLCJjb21tdW5pdHkiLCJ1c2VyIiwiaXNUZWFjaGVyIiwicm9sZXMiLCJpbmNsdWRlcyIsInJlYWR5IiwiZ2xvYmFsVGV4dHMiLCJ0cmlnZ2VyRXZlbnQiLCJmZXRjaCIsInNldCIsImJyZWFkY3J1bWIiLCJyZXNwb25zZSIsImdldEhvbWUiLCJzdGF0dXMiLCJFcnJvciIsImRhdGEiLCJtYXAiLCJpdGVtIiwiaW5zdGFuY2UiLCJMZWFybmluZ01vZHVsZSIsImluZGV4IiwiZ2xvYmFsVGhpcyIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJfcmVhY3QiLCJfY29udGV4dCIsIl9pY29ucyIsIl9jb21wb25lbnRzIiwiRW1wdHlBc2lkZUNsYXNzcm9vbXMiLCJ1c2VNb2R1bGVDb250ZXh0IiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJBcHBJY29uIiwiaWNvbiIsImVtcHR5IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIkxpbmsiLCJocmVmIiwiYWN0aW9uIiwiX2xpc3QiLCJfZW1wdHkiLCJfaXRlbSIsIl9mcmFtZXJNb3Rpb24iLCJBc2lkZUNsYXNzcm9vbXMiLCJ0b3VyIiwiY29udGVudEFuaW1hdGlvbiIsImluaXRpYWwiLCJvcGFjaXR5IiwieSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJlYXN5IiwiQXJyYXkiLCJpc0FycmF5IiwidG90YWwiLCJsZW5ndGgiLCJjbHMiLCJsaW5rIiwibW90aW9uIiwiZGl2IiwiSWNvbkJ1dHRvbiIsIkxpc3QiLCJjb250cm9sIiwiQXNpZGVDbGFzc3Jvb20iLCJfdWkiLCJjb250ZW50IiwibmFtZSIsImlkIiwia2V5IiwiRW50aXR5SW1hZ2UiLCJyYXRpbyIsInNyYyIsInBpY3R1cmUiLCJlbnRpdHkiLCJFbXB0eUFzaWRlRHJhZnQiLCJBc2lkZURyYWZ0cyIsIkFzaWRlRHJhZnRJdGVtIiwiX2RyYWZ0cyIsIl9jbGFzc3Jvb21zIiwiQXNpZGUiLCJfc2xpZGVyIiwiQXNzaWdubWVudHMiLCJvdXRwdXQiLCJBc3NpZ25tZW50SXRlbSIsIlBhZ2VUaXRsZSIsImFzIiwiU2xpZGVyIiwiX21vZHVsZUNhcmQiLCJGcmFnbWVudCIsIkFzc2lnbm1lbnRDYXJkIiwiY2xhc3Nyb29tIiwiYWN0aXZpdGllcyIsIl9zZWN0aW9uVGl0bGUiLCJfb3duZXJBc3NpZ24iLCJDb21tdW5pdHlNb2R1bGVzIiwib3Blbk1vZGFsIiwic2V0T3Blbk1vZGFsIiwidXNlU3RhdGUiLCJvcGVuIiwiY2FudEFjY2VzcyIsInRvZ2dsZU1vZGFsIiwiQ29tbXVuaXR5SXRlbSIsIlNlY3Rpb25UaXRsZSIsImFjdGlvblRleHQiLCJhY3Rpb25zIiwiT3duZXJBc3NpZ25Gb3JtIiwib25DbG9zZSIsInR5cGUiLCJvblVzZSIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwiTW9kdWxlQ2FyZCIsInBsYXlncm91bmQiLCJhc3NpZ25tZW50IiwiTW9kdWxlQ2FyZEZvb3RlciIsIk1vZHVsZUNhcmRBY3Rpb25zRm9vdGVyIiwiQXBwSWNvbkJ1dHRvbiIsInRlc3QiLCJvbkNsaWNrIiwidXNlIiwiTW9kdWxlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2hvb2tzIiwiX3Byb2ZpbGVTZWN0aW9uIiwiX2Fzc2lnbWVudHMiLCJfYXNpZGUiLCJfbW9kdWxlcyIsIl9jb21tdW5pdHkiLCJzZXRSZWFkeSIsInVzZUJpbmRlciIsIlBhZ2VMb2FkZXIiLCJmZXRjaGluZyIsImNvbnRleHRWYWx1ZSIsIlByb3ZpZGVyIiwiUGFnZUNvbnRhaW5lciIsIkRyaXZlclRvdXJDb250YWluZXIiLCJidXR0b25zIiwiUHJvZmlsZVNlY3Rpb24iLCJNb2R1bGVzIiwiX2Fzc2lnbiIsIk1vZHVsZUl0ZW0iLCJhY3Rpb25IcmVmIiwiTW9kdWxlQXNzaWdubWVudHMiLCJhc3NpZ24iLCJvbkFjdGlvbiIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiYXNzaWduVG9DbGFzc3Jvb20iLCJkYXNoYm9hcmQiLCJ2YWxpZGF0ZSIsImlzQWRtaW4iLCJzaG93QWN0aW9uIiwiY3JlYXRlIiwiaHJlZkFjdGlvbiIsIl9pbWFnZSIsIlVzZXJDYXJkIiwic2VjdGlvbiIsInJvdGF0ZSIsImVhc2UiLCJJbWFnZSIsInBob3RvVVJMIiwiYWx0Iiwid2lkdGgiLCJkZWxheSIsImRpc3BsYXlOYW1lIiwiZW1haWwiLCJwcm9maWxlIiwiZWRpdCIsInN0ZXAwIiwiX3N3aXBlciIsImNoaWxkcmVuIiwiYnJlYWtwb2ludHMiLCJzbGlkZXNQZXJWaWV3Iiwic3BlY3MiLCJuYXZpZ2F0aW9uIiwibmV4dEVsIiwicHJldkVsIiwiU3dpcGVyU2xpZGVyIiwic3BhY2VCZXR3ZWVuIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvYXNpZGUvY2xhc3Nyb29tcy9lbXB0eS50c3giLCIvdHMvdmlld3MvYXNpZGUvY2xhc3Nyb29tcy9pbmRleC50c3giLCIvdHMvdmlld3MvYXNpZGUvY2xhc3Nyb29tcy9pdGVtLnRzeCIsIi90cy92aWV3cy9hc2lkZS9kcmFmdHMvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2FzaWRlL2RyYWZ0cy9pbmRleC50c3giLCIvdHMvdmlld3MvYXNpZGUvZHJhZnRzL2l0ZW0udHN4IiwiL3RzL3ZpZXdzL2FzaWRlL2luZGV4LnRzeCIsIi90cy92aWV3cy9hc3NpZ21lbnRzL2luZGV4LnRzeCIsIi90cy92aWV3cy9hc3NpZ21lbnRzL2l0ZW0udHN4IiwiL3RzL3ZpZXdzL2NvbW11bml0eS9pbmRleC50c3giLCIvdHMvdmlld3MvY29tbXVuaXR5L2l0ZW0udHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL21vZHVsZXMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL21vZHVsZXMvaXRlbS50c3giLCIvdHMvdmlld3Mvc2VjdGlvbi10aXRsZS50c3giLCIvdHMvdmlld3Mvc2VjdGlvbnMvZHJhZnRzLnRzeCIsIi90cy92aWV3cy9zZWN0aW9ucy9tb2R1bGVzLnRzeCIsIi90cy92aWV3cy9zZWN0aW9ucy9wcm9maWxlLXNlY3Rpb24udHN4IiwiL3RzL3ZpZXdzL3NsaWRlci50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFE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