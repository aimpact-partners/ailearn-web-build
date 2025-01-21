System.register(["@beyond-js/widgets@1.1.1/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.3.1/main-layout.widget", "@aimpact/chat-sdk@1.4.1/session", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/ailearn-sdk@1.0.0/entities/learning-modules", "@aimpact/reactive@0.0.1/model", "@beyond-js/kernel@0.1.9/texts", "react@18.2.0", "@aimpact/ailearn-app@0.3.1/components/icons", "pragmate-ui@1.0.0-beta.7/components", "pragmate-ui@1.0.0-beta.7/icons", "pragmate-ui@1.0.0-beta.7/list", "@aimpact/ailearn-app@0.3.1/components/ui", "@aimpact/ailearn-app@0.3.1/components/module-card", "@aimpact/ailearn-app@0.3.1/modules/owner-assign.code", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/ailearn-app@0.3.1/modules/assign", "pragmate-ui@1.0.0-beta.7/image", "pragmate-ui@1.0.0-beta.7/swiper"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp031ComponentsUi) {
      dependency_15 = _aimpactAilearnApp031ComponentsUi;
    }, function (_aimpactAilearnApp031ComponentsModuleCard) {
      dependency_16 = _aimpactAilearnApp031ComponentsModuleCard;
    }, function (_aimpactAilearnApp031ModulesOwnerAssignCode) {
      dependency_17 = _aimpactAilearnApp031ModulesOwnerAssignCode;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_18 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactAilearnApp031ModulesAssign) {
      dependency_19 = _aimpactAilearnApp031ModulesAssign;
    }, function (_pragmateUi100Beta7Image) {
      dependency_20 = _pragmateUi100Beta7Image;
    }, function (_pragmateUi100Beta7Swiper) {
      dependency_21 = _pragmateUi100Beta7Swiper;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", null], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.1"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.24.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.1"], ["@aimpact/ailearn-app", "0.3.1"]]);
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/main-layout.widget', dependency_4], ['@aimpact/chat-sdk/session', dependency_5], ['@aimpact/ailearn-sdk/core', dependency_6], ['@aimpact/ailearn-sdk/entities/learning-modules', dependency_7], ['@aimpact/reactive/model', dependency_8], ['@beyond-js/kernel/texts', dependency_9], ['react', dependency_10], ['@aimpact/ailearn-app/components/icons', dependency_11], ['pragmate-ui/components', dependency_12], ['pragmate-ui/icons', dependency_13], ['pragmate-ui/list', dependency_14], ['@aimpact/ailearn-app/components/ui', dependency_15], ['@aimpact/ailearn-app/components/module-card', dependency_16], ['@aimpact/ailearn-app/modules/owner-assign.code', dependency_17], ['@beyond-js/react-18-widgets/hooks', dependency_18], ['@aimpact/ailearn-app/modules/assign', dependency_19], ['pragmate-ui/image', dependency_20], ['pragmate-ui/swiper', dependency_21]]);
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
        hash: 2670043523,
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
                _mainLayout.LayoutBroker.overlay = false;
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
        hash: 3420404797,
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
        hash: 2094066447,
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
              target: "_blank",
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
        hash: 1980510850,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJfbWFpbkxheW91dCIsIl9zZXNzaW9uIiwiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJzdG9yZSIsImhpZGVUaW1lb3V0IiwiV2lkZ2V0IiwiVmlldyIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiY29uc3RydWN0b3IiLCJhcmdzIiwic2Vzc2lvbldyYXBwZXIiLCJvbiIsIm9uTG9nb3V0Iiwib25Mb2dpbiIsImNsZWFyIiwidW5kZWZpbmVkIiwib2ZmIiwic2hvdyIsImNsZWFyVGltZW91dCIsIkxheW91dEJyb2tlciIsIm92ZXJsYXkiLCJsb2FkIiwiaGlkZSIsImV4cG9ydHMiLCJfbGVhcm5pbmdNb2R1bGVzIiwiX21vZGVsIiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwiaXNTdG9yZSIsIml0ZW1zIiwiYXNzaWdubWVudHMiLCJ0ZXh0cyIsIkN1cnJlbnRUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInZhbHVlIiwiZHJhZnRzIiwiY2xhc3Nyb29tcyIsIm1vZHVsZXMiLCJjb21tdW5pdHkiLCJ1c2VyIiwiaXNUZWFjaGVyIiwicm9sZXMiLCJpbmNsdWRlcyIsInJlYWR5IiwiZ2xvYmFsVGV4dHMiLCJ0cmlnZ2VyRXZlbnQiLCJmZXRjaCIsInJlc3BvbnNlIiwiZ2V0SG9tZSIsInN0YXR1cyIsIkVycm9yIiwiZGF0YSIsIm1hcCIsIml0ZW0iLCJpbnN0YW5jZSIsIkxlYXJuaW5nTW9kdWxlIiwiaW5kZXgiLCJzZXQiLCJnbG9iYWxUaGlzIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsIl9yZWFjdCIsIl9jb250ZXh0IiwiX2ljb25zIiwiX2NvbXBvbmVudHMiLCJFbXB0eUFzaWRlQ2xhc3Nyb29tcyIsInVzZU1vZHVsZUNvbnRleHQiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIkFwcEljb24iLCJpY29uIiwiZW1wdHkiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiTGluayIsImhyZWYiLCJhY3Rpb24iLCJfbGlzdCIsIl9lbXB0eSIsIl9pdGVtIiwiQXNpZGVDbGFzc3Jvb21zIiwidG91ciIsIkFycmF5IiwiaXNBcnJheSIsInRvdGFsIiwibGVuZ3RoIiwiY2xzIiwiSWNvbkJ1dHRvbiIsIkxpc3QiLCJjb250cm9sIiwiQXNpZGVDbGFzc3Jvb20iLCJfdWkiLCJjb250ZW50IiwibmFtZSIsImlkIiwia2V5IiwiRW50aXR5SW1hZ2UiLCJyYXRpbyIsInNyYyIsInBpY3R1cmUiLCJlbnRpdHkiLCJFbXB0eUFzaWRlRHJhZnQiLCJBc2lkZURyYWZ0cyIsIkFzaWRlRHJhZnRJdGVtIiwiX2RyYWZ0cyIsIl9jbGFzc3Jvb21zIiwiQXNpZGUiLCJfc2xpZGVyIiwiQXNzaWdubWVudHMiLCJvdXRwdXQiLCJBc3NpZ25tZW50SXRlbSIsIlBhZ2VUaXRsZSIsImFzIiwiU2xpZGVyIiwiX21vZHVsZUNhcmQiLCJGcmFnbWVudCIsIkFzc2lnbm1lbnRDYXJkIiwiX3NlY3Rpb25UaXRsZSIsIl9vd25lckFzc2lnbiIsIkNvbW11bml0eU1vZHVsZXMiLCJvcGVuTW9kYWwiLCJzZXRPcGVuTW9kYWwiLCJ1c2VTdGF0ZSIsIm9wZW4iLCJjYW50QWNjZXNzIiwidG9nZ2xlTW9kYWwiLCJDb21tdW5pdHlJdGVtIiwiU2VjdGlvblRpdGxlIiwiYWN0aW9uVGV4dCIsImFjdGlvbnMiLCJsaW5rIiwiT3duZXJBc3NpZ25Gb3JtIiwib25DbG9zZSIsInR5cGUiLCJvblVzZSIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwiTW9kdWxlQ2FyZCIsInBsYXlncm91bmQiLCJhc3NpZ25tZW50IiwiTW9kdWxlQ2FyZEZvb3RlciIsIk1vZHVsZUNhcmRBY3Rpb25zRm9vdGVyIiwiQXBwSWNvbkJ1dHRvbiIsInRlc3QiLCJ0YXJnZXQiLCJvbkNsaWNrIiwidXNlIiwiTW9kdWxlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2hvb2tzIiwiX3Byb2ZpbGVTZWN0aW9uIiwiX2Fzc2lnbWVudHMiLCJfYXNpZGUiLCJfbW9kdWxlcyIsIl9jb21tdW5pdHkiLCJzZXRSZWFkeSIsInVzZUJpbmRlciIsIlBhZ2VMb2FkZXIiLCJmZXRjaGluZyIsImNvbnRleHRWYWx1ZSIsIlByb3ZpZGVyIiwiUGFnZUNvbnRhaW5lciIsIkRyaXZlclRvdXJDb250YWluZXIiLCJidXR0b25zIiwiUHJvZmlsZVNlY3Rpb24iLCJNb2R1bGVzIiwiX2Fzc2lnbiIsIk1vZHVsZUl0ZW0iLCJNb2R1bGVBc3NpZ25tZW50cyIsImFzc2lnbiIsInNoYXJlIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJkYXNoYm9hcmQiLCJ3YXRjaEFjdGl2aXR5IiwidmFsaWRhdGUiLCJpc0FkbWluIiwic2hvd0FjdGlvbiIsImNyZWF0ZSIsIl9pbWFnZSIsIlVzZXJDYXJkIiwiSW1hZ2UiLCJwaG90b1VSTCIsImFsdCIsImRpc3BsYXlOYW1lIiwiZW1haWwiLCJwcm9maWxlIiwiZWRpdCIsInN0ZXAwIiwiX3N3aXBlciIsImNoaWxkcmVuIiwiYnJlYWtwb2ludHMiLCJzbGlkZXNQZXJWaWV3Iiwic3BlY3MiLCJuYXZpZ2F0aW9uIiwibmV4dEVsIiwicHJldkVsIiwiU3dpcGVyU2xpZGVyIiwic3BhY2VCZXR3ZWVuIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvYXNpZGUvY2xhc3Nyb29tcy9lbXB0eS50c3giLCIvdHMvdmlld3MvYXNpZGUvY2xhc3Nyb29tcy9pbmRleC50c3giLCIvdHMvdmlld3MvYXNpZGUvY2xhc3Nyb29tcy9pdGVtLnRzeCIsIi90cy92aWV3cy9hc2lkZS9kcmFmdHMvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2FzaWRlL2RyYWZ0cy9pbmRleC50c3giLCIvdHMvdmlld3MvYXNpZGUvZHJhZnRzL2l0ZW0udHN4IiwiL3RzL3ZpZXdzL2FzaWRlL2luZGV4LnRzeCIsIi90cy92aWV3cy9hc3NpZ21lbnRzL2luZGV4LnRzeCIsIi90cy92aWV3cy9hc3NpZ21lbnRzL2l0ZW0udHN4IiwiL3RzL3ZpZXdzL2NvbW11bml0eS9pbmRleC50c3giLCIvdHMvdmlld3MvY29tbXVuaXR5L2l0ZW0udHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL21vZHVsZXMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL21vZHVsZXMvaXRlbS50c3giLCIvdHMvdmlld3Mvc2VjdGlvbi10aXRsZS50c3giLCIvdHMvdmlld3Mvc2VjdGlvbnMvZHJhZnRzLnRzeCIsIi90cy92aWV3cy9zZWN0aW9ucy9tb2R1bGVzLnRzeCIsIi90cy92aWV3cy9zZWN0aW9ucy9wcm9maWxlLXNlY3Rpb24udHN4IiwiL3RzL3ZpZXdzL3NsaWRlci50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBRyxXQUFBLEdBQUFILE9BQUE7VUFDQSxJQUFBSSxRQUFBLEdBQUFKLE9BQUE7VUFDTztVQUFVLE1BQ1hLLFVBQVcsU0FBUU4sS0FBQSxDQUFBTyx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUNFQyxXQUFXLEdBQXlDLElBQUk7WUFDaEUsSUFBSUMsTUFBTUEsQ0FBQTtjQUNULE9BQU9QLE1BQUEsQ0FBQVEsSUFB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