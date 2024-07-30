System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.1.0-dev.03/main-layout.widget", "@aimpact/chat-sdk@1.0.1/session", "@beyond-js/reactive@1.2.0/model", "@beyond-js/kernel@0.1.9/texts", "react@18.2.0", "@aimpact/ailearn-app@0.1.0-dev.03/components/ui", "pragmate-ui@1.0.0-beta.1/components", "pragmate-ui@1.0.0-beta.1/swiper", "@beyond-js/react-18-widgets@1.1.2/hooks", "dayjs@1.11.10", "pragmate-ui@1.0.0-beta.1/link", "pragmate-ui@1.0.0-beta.1/modal", "pragmate-ui@1.0.0-beta.1/list", "pragmate-ui@1.0.0-beta.1/icons", "@beyond-js/kernel@0.1.9/routing", "@aimpact/ailearn-sdk@1.0.0/learning-modules", "pragmate-ui@1.0.0-beta.1/image", "@aimpact/ailearn-app@0.1.0-dev.03/modules/assign"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, bimport, __Bundle, __pkg, ims, Controller, AssignmentItem, View, LibraryItem, UserData, ModuleItem, UserCard, ProfileSection, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    AssignmentItem: void 0,
    View: void 0,
    LibraryItem: void 0,
    UserData: void 0,
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
    }, function (_aimpactAilearnApp010Dev03MainLayoutWidget) {
      dependency_4 = _aimpactAilearnApp010Dev03MainLayoutWidget;
    }, function (_aimpactChatSdk101Session) {
      dependency_5 = _aimpactChatSdk101Session;
    }, function (_beyondJsReactive120Model) {
      dependency_6 = _beyondJsReactive120Model;
    }, function (_beyondJsKernel019Texts) {
      dependency_7 = _beyondJsKernel019Texts;
    }, function (_react2) {
      dependency_8 = _react2;
    }, function (_aimpactAilearnApp010Dev03ComponentsUi) {
      dependency_9 = _aimpactAilearnApp010Dev03ComponentsUi;
    }, function (_pragmateUi100Beta1Components) {
      dependency_10 = _pragmateUi100Beta1Components;
    }, function (_pragmateUi100Beta1Swiper) {
      dependency_11 = _pragmateUi100Beta1Swiper;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_12 = _beyondJsReact18Widgets112Hooks;
    }, function (_dayjs2) {
      dependency_13 = _dayjs2;
    }, function (_pragmateUi100Beta1Link) {
      dependency_14 = _pragmateUi100Beta1Link;
    }, function (_pragmateUi100Beta1Modal) {
      dependency_15 = _pragmateUi100Beta1Modal;
    }, function (_pragmateUi100Beta1List) {
      dependency_16 = _pragmateUi100Beta1List;
    }, function (_pragmateUi100Beta1Icons) {
      dependency_17 = _pragmateUi100Beta1Icons;
    }, function (_beyondJsKernel019Routing) {
      dependency_18 = _beyondJsKernel019Routing;
    }, function (_aimpactAilearnSdk100LearningModules) {
      dependency_19 = _aimpactAilearnSdk100LearningModules;
    }, function (_pragmateUi100Beta1Image) {
      dependency_20 = _pragmateUi100Beta1Image;
    }, function (_aimpactAilearnApp010Dev03ModulesAssign) {
      dependency_21 = _aimpactAilearnApp010Dev03ModulesAssign;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.2"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.1"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.1.0-dev.03"], ["@aimpact/ailearn-app", "0.1.0-dev.03"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.0-dev.03/home",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/main-layout.widget', dependency_4], ['@aimpact/chat-sdk/session', dependency_5], ['@beyond-js/reactive/model', dependency_6], ['@beyond-js/kernel/texts', dependency_7], ['react', dependency_8], ['@aimpact/ailearn-app/components/ui', dependency_9], ['pragmate-ui/components', dependency_10], ['pragmate-ui/swiper', dependency_11], ['@beyond-js/react-18-widgets/hooks', dependency_12], ['dayjs', dependency_13], ['pragmate-ui/link', dependency_14], ['pragmate-ui/modal', dependency_15], ['pragmate-ui/list', dependency_16], ['pragmate-ui/icons', dependency_17], ['@beyond-js/kernel/routing', dependency_18], ['@aimpact/ailearn-sdk/learning-modules', dependency_19], ['pragmate-ui/image', dependency_20], ['@aimpact/ailearn-app/modules/assign', dependency_21]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "student-home",
        "vspecifier": "@aimpact/ailearn-app@0.1.0-dev.03/home.widget",
        "is": "page",
        "route": "/",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.0-dev.03/home.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 1283270141,
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
              this.hideTimeout = setTimeout(() => {
                this.#store.clear();
              }, 60000);
            }
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 333658238,
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
            #library;
            get library() {
              return this.#library;
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
            setBreadcrumb() {
              const onChange = this.setBreadcrumb.bind(this);
              if (!this.#texts.ready) {
                this.#texts.on('change', onChange);
                return;
              }
              this.#texts.off('change', onChange);
              _mainLayout.LayoutBroker.breadcrumb = [];
              _mainLayout.LayoutBroker.overlay = false;
              globalThis.setTimeout(() => _mainLayout.LayoutBroker.breadcrumb = [], 100);
            }
            async load() {
              try {
                this.#model = _session.sessionWrapper;
                this.setBreadcrumb();
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
                this.#modules = data.modules;
                this.#library = data.library;
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

      /****************************************
      INTERNAL MODULE: ./views/aside/classrooms
      ****************************************/

      ims.set('./views/aside/classrooms', {
        hash: 2689121651,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AsideClassrooms = AsideClassrooms;
          var _react = require("react");
          var _context = require("../context");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _components = require("pragmate-ui/components");
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
            const empty = () => _react.default.createElement("div", {
              className: "aside-list__empty-container"
            }, _react.default.createElement("span", {
              className: "empty__list"
            }, texts.empty));
            const output = !total ? empty() : classrooms.map(item => {
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
            });
            const cls = `aside-list${total === 0 ? ' aside-list--empty' : ''}`;
            return _react.default.createElement("div", {
              "data-tour": "5",
              "data-description": tour.classrooms.description,
              "data-title": tour.classrooms.title,
              className: cls
            }, _react.default.createElement("header", {
              className: "aside-list__header"
            }, _react.default.createElement("h5", null, texts.title), _react.default.createElement(_components.Link, {
              href: "/classrooms/create"
            }, texts.action)), _react.default.createElement("section", {
              className: "aside-list__body"
            }, output));
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./views/aside/drafts
      ************************************/

      ims.set('./views/aside/drafts', {
        hash: 1934088492,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AsideDrafts = AsideDrafts;
          var _react = require("react");
          var _context = require("../context");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _components = require("pragmate-ui/components");
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
            const empty = () => _react.default.createElement("div", {
              className: "aside-list__empty-container"
            }, _react.default.createElement("span", {
              className: "empty__list"
            }, texts.empty));
            const output = !total ? empty() : drafts.map(draft => {
              const content = !draft.description || draft.description === '' ? texts.items.description : draft.description;
              const title = !draft.title || draft.title === '' ? texts.items.title : draft.title;
              return _react.default.createElement(_components.Link, {
                href: `/modules/management?id=${draft.id}`,
                className: "aside-list__item-container",
                key: draft.id
              }, _react.default.createElement("article", {
                className: "aside-list__item",
                key: draft.id
              }, _react.default.createElement(_ui.EntityImage, {
                ratio: "square",
                src: draft.picture,
                entity: "module"
              }), _react.default.createElement("section", {
                className: "item__content"
              }, _react.default.createElement("h6", null, title), _react.default.createElement("p", {
                className: "description"
              }, content))));
            });
            const cls = `aside-list${total === 0 ? ' aside-list--empty' : ''}`;
            console.log(3);
            return _react.default.createElement("div", {
              "data-tour": "4",
              "data-description": tour.drafts.description,
              "data-title": tour.drafts.title,
              className: cls
            }, _react.default.createElement("header", {
              className: "aside-list__header"
            }, _react.default.createElement("h5", null, texts.title)), _react.default.createElement("section", {
              className: "aside-list__body"
            }, output));
          }
        }
      });

      /***********************************
      INTERNAL MODULE: ./views/aside/index
      ***********************************/

      ims.set('./views/aside/index', {
        hash: 2776279483,
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
            console.log(0.2);
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
        hash: 2309915295,
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
          var _swiper = require("pragmate-ui/swiper");
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
            const breakpoints = {
              0: {
                slidesPerView: 1.1
              },
              600: {
                slidesPerView: 2.1
              },
              900: {
                slidesPerView: 2.1
              }
            };
            return _react.default.createElement("article", {
              "data-tour": "1",
              "data-description": texts.tour.assignments.description,
              "data-title": texts.tour.assignments.title,
              className: "assigments-list"
            }, _react.default.createElement(_ui.PageTitle, {
              title: texts.assignments.title,
              as: "h3"
            }), _react.default.createElement(_swiper.SwiperSlider, {
              className: "entity__list two-columns",
              breakpoints: breakpoints,
              spaceBetween: 20
            }, output));
          }
        }
      });

      /***************************************
      INTERNAL MODULE: ./views/assigments/item
      ***************************************/

      ims.set('./views/assigments/item', {
        hash: 372228545,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AssignmentItem = AssignmentItem;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _components = require("pragmate-ui/components");
          var _react = require("react");
          var _context = require("../context");
          /*bundle*/
          function AssignmentItem({
            item
          }) {
            const {
              store: {
                texts
              }
            } = (0, _context.useModuleContext)();
            const {
              module,
              title
            } = item;
            return _react.default.createElement("article", {
              className: "entity__item"
            }, _react.default.createElement(_ui.EntityImage, {
              src: item.module?.picture,
              entity: "module",
              alt: title
            }), _react.default.createElement("section", {
              className: "entity__item-content"
            }, _react.default.createElement(_components.Link, {
              href: `/assignments/${item.id}`
            }, _react.default.createElement("h4", null, module.title), _react.default.createElement("span", null, module.description))), _react.default.createElement("footer", {
              className: "entity__footer"
            }, _react.default.createElement("span", {
              className: "card-number__detail"
            }, texts.assignments.activities, ": ", module.activities.count)));
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 2793963965,
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
        hash: 2648204214,
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
          var _components = require("pragmate-ui/components");
          var _profileSection = require("./sections/profile-section");
          var _assigments = require("./assigments");
          var _aside = require("./aside");
          var _modules = require("./modules");
          var _library = require("./library");
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
            if (!ready) return _react.default.createElement(_components.Spinner, {
              active: true
            });
            const {
              assignments
            } = store.model;
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
            }, _react.default.createElement(_profileSection.ProfileSection, null), _react.default.createElement(_library.LibraryModules, null), _react.default.createElement(_modules.Modules, null), _react.default.createElement(_assigments.Assignments, null)), _react.default.createElement(_aside.Aside, null))));
          }
        }
      });

      /***************************************
      INTERNAL MODULE: ./views/library/actions
      ***************************************/

      ims.set('./views/library/actions', {
        hash: 213389674,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = LearningModuleActions;
          var React = require("react");
          var _components = require("pragmate-ui/components");
          var _context = require("../context");
          var _userData = require("./user-data");
          var _dayjs = require("dayjs");
          function LearningModuleActions({
            openModal,
            item
          }) {
            const {
              texts: {
                library: texts
              }
            } = (0, _context.useModuleContext)();
            const onUse = event => {
              event.stopPropagation();
              openModal({
                open: true,
                item
              });
            };
            const ownerData = item.owner ?? item.creator;
            const date = (0, _dayjs.default)(item.timeCreated).format('MM/DD/YYYY');
            return React.createElement("footer", {
              className: "entity__footer"
            }, React.createElement(React.Fragment, null), React.createElement(_userData.UserData, {
              data: ownerData,
              date: date
            }), React.createElement(_components.Button, {
              variant: "primary",
              bordered: true,
              onClick: onUse,
              className: "right-action"
            }, texts.actions.use));
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./views/library/index
      *************************************/

      ims.set('./views/library/index', {
        hash: 3334477328,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LibraryModules = LibraryModules;
          var _react = require("react");
          var _context = require("../context");
          var _item = require("./item");
          var _link = require("pragmate-ui/link");
          var _session = require("@aimpact/chat-sdk/session");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _swiper = require("pragmate-ui/swiper");
          var _organizationsModal = require("./organizations-modal");
          function LibraryModules() {
            const {
              store: {
                library: modules,
                texts
              }
            } = (0, _context.useModuleContext)();
            if (!modules || !Array.isArray(modules) || !modules.length) return null;
            const isAdmin = _session.sessionWrapper?.user?.roles?.includes('teacher');
            const [openModal, setOpenModal] = _react.default.useState({
              open: false,
              item: null
            });
            const toggleModal = item => setOpenModal(item);
            const output = [...modules].map(item => _react.default.createElement(_item.LibraryItem, {
              openModal: toggleModal,
              item: item,
              key: `module-${item.id}`
            }));
            const breakpoints = {
              0: {
                slidesPerView: 1.1
              },
              600: {
                slidesPerView: 2.1
              },
              900: {
                slidesPerView: 2.1
              }
            };
            return _react.default.createElement("article", {
              "data-tour": "2",
              "data-description": texts.tour.library.description,
              "data-title": texts.tour.library.title,
              className: "assigments-list"
            }, _react.default.createElement(_ui.PageTitle, {
              title: texts.library.title,
              as: "h3"
            }, isAdmin && _react.default.createElement("div", {
              className: "header__actions"
            }, _react.default.createElement(_link.Link, {
              href: "/modules/management"
            }, texts.library.actions.link))), _react.default.createElement(_swiper.SwiperSlider, {
              className: "entity__list two-columns",
              breakpoints: breakpoints,
              spaceBetween: 20
            }, output), openModal.open && _react.default.createElement(_organizationsModal.OrganizationsModal, {
              module: openModal?.item,
              onClose: toggleModal,
              texts: texts
            }));
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./views/library/item
      ************************************/

      ims.set('./views/library/item', {
        hash: 1099852261,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LibraryItem = LibraryItem;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _react = require("react");
          var _actions = require("./actions");
          /*bundle*/
          function LibraryItem({
            item,
            openModal
          }) {
            const {
              title
            } = item;
            return _react.default.createElement("article", {
              className: "entity__item"
            }, _react.default.createElement(_ui.EntityImage, {
              src: item?.picture,
              entity: "module",
              alt: title
            }), _react.default.createElement("section", {
              className: "entity__item-content"
            }, _react.default.createElement("h4", null, item.title), _react.default.createElement("span", null, item.description)), _react.default.createElement("footer", {
              className: "entity__footer"
            }), _react.default.createElement(_actions.default, {
              openModal: openModal,
              item: item
            }));
          }
        }
      });

      /***************************************************
      INTERNAL MODULE: ./views/library/organizations-modal
      ***************************************************/

      ims.set('./views/library/organizations-modal', {
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

      /*****************************************
      INTERNAL MODULE: ./views/library/user-data
      *****************************************/

      ims.set('./views/library/user-data', {
        hash: 3207490455,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.UserData = UserData;
          var React = require("react");
          var _image = require("pragmate-ui/image");
          /*bundle*/
          function UserData({
            label,
            date,
            data
          }) {
            if (!data) return null;
            const {
              photoUrl,
              name
            } = data;
            return React.createElement("div", {
              className: "user-data__section"
            }, label && React.createElement("h6", {
              className: "user-data__label"
            }, label), React.createElement("section", {
              className: "user-data__detail"
            }, React.createElement(_image.Image, {
              className: "user-data__img",
              src: photoUrl
            }), React.createElement("div", null, React.createElement("span", {
              className: "user-data__name"
            }, name), React.createElement("span", {
              className: "user-data__date"
            }, date))));
          }
        }
      });

      /***************************************
      INTERNAL MODULE: ./views/modules/actions
      ***************************************/

      ims.set('./views/modules/actions', {
        hash: 3747442826,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = LearningModuleActions;
          var React = require("react");
          var _components = require("pragmate-ui/components");
          var _assign = require("@aimpact/ailearn-app/modules/assign");
          var _context = require("../context");
          function LearningModuleActions({
            module
          }) {
            const {
              texts
            } = (0, _context.useModuleContext)();
            const [openModal, setOpenModal] = React.useState(false);
            const share = event => {
              event.stopPropagation();
              setOpenModal(true);
            };
            const toggleModal = () => setOpenModal(!openModal);
            return React.createElement("footer", {
              className: "entity__footer entity__footer--right"
            }, React.createElement(_components.Button, {
              variant: "primary",
              bordered: true,
              onClick: share
            }, texts.actions.assign), openModal && React.createElement(_assign.ModuleAssignments, {
              module: module,
              onClose: toggleModal,
              texts: texts.assign
            }));
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./views/modules/index
      *************************************/

      ims.set('./views/modules/index', {
        hash: 2730145638,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Modules = Modules;
          var _react = require("react");
          var _context = require("../context");
          var _item = require("./item");
          var _link = require("pragmate-ui/link");
          var _session = require("@aimpact/chat-sdk/session");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _swiper = require("pragmate-ui/swiper");
          function Modules() {
            const {
              store: {
                modules,
                texts
              }
            } = (0, _context.useModuleContext)();
            if (!modules || !Array.isArray(modules) || !modules.length) return null;
            const output = [...modules].map(item => _react.default.createElement(_item.ModuleItem, {
              item: item,
              key: `module-${item.id}`
            }));
            const isAdmin = _session.sessionWrapper?.user?.roles?.includes('teacher');
            const breakpoints = {
              0: {
                slidesPerView: 1.1
              },
              600: {
                slidesPerView: 2.1
              },
              900: {
                slidesPerView: 2.1
              }
            };
            /*
            Módulos en borrador
            Trabaja en tus módulos de aprendizaje en estado de borrador hasta que estén listos para ser publicados y asignados a un aula. Aquí quedarán guardados para que puedas editarlos según tus necesidades. ¡Comienza creando tu primer módulo!
            */
            return _react.default.createElement("article", {
              "data-tour": "2",
              "data-description": texts.tour.modules.description,
              "data-title": texts.tour.modules.title,
              className: "assigments-list"
            }, _react.default.createElement(_ui.PageTitle, {
              title: texts.modules.title,
              as: "h3"
            }, isAdmin && _react.default.createElement("div", {
              className: "header__actions"
            }, _react.default.createElement(_link.Link, {
              href: "/modules/management"
            }, texts.actions.create))), _react.default.createElement(_swiper.SwiperSlider, {
              className: "entity__list two-columns",
              breakpoints: breakpoints,
              spaceBetween: 20
            }, output));
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./views/modules/item
      ************************************/

      ims.set('./views/modules/item', {
        hash: 1776590008,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleItem = ModuleItem;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _react = require("react");
          var _context = require("../context");
          var _actions = require("./actions");
          /*bundle*/
          function ModuleItem({
            item
          }) {
            const {
              store: {
                texts
              }
            } = (0, _context.useModuleContext)();
            const {
              title
            } = item;
            const ownerData = item.owner ?? item.creator;
            return _react.default.createElement("article", {
              className: "entity__item"
            }, _react.default.createElement(_ui.EntityImage, {
              src: item?.picture,
              entity: "module",
              alt: title
            }), _react.default.createElement("section", {
              className: "entity__item-content"
            }, _react.default.createElement(_ui.UserData, {
              data: ownerData
            }), _react.default.createElement("h4", null, item.title), _react.default.createElement("span", null, item.description)), _react.default.createElement("footer", {
              className: "entity__footer"
            }, _react.default.createElement("span", {
              className: "card-number__detail"
            }, texts.modules.activities, ": ", item.activities.count)), _react.default.createElement(_actions.default, {
              module: item
            }));
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
        hash: 3739530922,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ProfileSection = ProfileSection;
          var _react = require("react");
          var _context = require("../context");
          var _image = require("pragmate-ui/image");
          var _link = require("pragmate-ui/link");
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
            }, _react.default.createElement(_link.Link, {
              href: "/users/me"
            }, texts.profile.edit))));
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
        "im": "./views/index",
        "from": "View",
        "name": "View"
      }, {
        "im": "./views/library/item",
        "from": "LibraryItem",
        "name": "LibraryItem"
      }, {
        "im": "./views/library/user-data",
        "from": "UserData",
        "name": "UserData"
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
        (require || prop === 'View') && _export("View", View = require ? require('./views/index').View : value);
        (require || prop === 'LibraryItem') && _export("LibraryItem", LibraryItem = require ? require('./views/library/item').LibraryItem : value);
        (require || prop === 'UserData') && _export("UserData", UserData = require ? require('./views/library/user-data').UserData : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJfbWFpbkxheW91dCIsIl9zZXNzaW9uIiwiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJzdG9yZSIsImhpZGVUaW1lb3V0IiwiV2lkZ2V0IiwiVmlldyIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiY29uc3RydWN0b3IiLCJhcmdzIiwic2Vzc2lvbldyYXBwZXIiLCJvbiIsIm9uTG9nb3V0Iiwib25Mb2dpbiIsImNsZWFyIiwidW5kZWZpbmVkIiwib2ZmIiwic2hvdyIsImNsZWFyVGltZW91dCIsIkxheW91dEJyb2tlciIsIm92ZXJsYXkiLCJsb2FkIiwiaGlkZSIsInNldFRpbWVvdXQiLCJleHBvcnRzIiwiX21vZGVsIiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwiaXRlbXMiLCJhc3NpZ25tZW50cyIsInRleHRzIiwiQ3VycmVudFRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidmFsdWUiLCJkcmFmdHMiLCJjbGFzc3Jvb21zIiwibW9kdWxlcyIsImxpYnJhcnkiLCJ1c2VyIiwiaXNUZWFjaGVyIiwicm9sZXMiLCJpbmNsdWRlcyIsInJlYWR5IiwidHJpZ2dlckV2ZW50Iiwic2V0QnJlYWRjcnVtYiIsIm9uQ2hhbmdlIiwiYmluZCIsImJyZWFkY3J1bWIiLCJnbG9iYWxUaGlzIiwic3RhdHVzIiwiZGF0YSIsImdldEhvbWUiLCJjb25zb2xlIiwibG9nIiwiZSIsImVycm9yIiwiX3JlYWN0IiwiX2NvbnRleHQiLCJfdWkiLCJfY29tcG9uZW50cyIsIkFzaWRlQ2xhc3Nyb29tcyIsInRvdXIiLCJ1c2VNb2R1bGVDb250ZXh0IiwiQXJyYXkiLCJpc0FycmF5IiwidG90YWwiLCJsZW5ndGgiLCJlbXB0eSIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwib3V0cHV0IiwibWFwIiwiaXRlbSIsImNvbnRlbnQiLCJkZXNjcmlwdGlvbiIsInRpdGxlIiwibmFtZSIsIkxpbmsiLCJocmVmIiwiaWQiLCJrZXkiLCJFbnRpdHlJbWFnZSIsInJhdGlvIiwic3JjIiwicGljdHVyZSIsImVudGl0eSIsImNscyIsImFjdGlvbiIsIkFzaWRlRHJhZnRzIiwiZHJhZnQiLCJfZHJhZnRzIiwiX2NsYXNzcm9vbXMiLCJBc2lkZSIsIl9pdGVtIiwiX3N3aXBlciIsIkFzc2lnbm1lbnRzIiwiQXNzaWdubWVudEl0ZW0iLCJicmVha3BvaW50cyIsInNsaWRlc1BlclZpZXciLCJQYWdlVGl0bGUiLCJhcyIsIlN3aXBlclNsaWRlciIsInNwYWNlQmV0d2VlbiIsImFsdCIsImFjdGl2aXRpZXMiLCJjb3VudCIsIk1vZHVsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9ob29rcyIsIl9wcm9maWxlU2VjdGlvbiIsIl9hc3NpZ21lbnRzIiwiX2FzaWRlIiwiX21vZHVsZXMiLCJfbGlicmFyeSIsInNldFJlYWR5IiwidXNlU3RhdGUiLCJ1c2VCaW5kZXIiLCJyZWYiLCJtYWluUmVmIiwidXNlRHJpdmVyVG91ciIsImJ1dHRvbnMiLCJTcGlubmVyIiwiYWN0aXZlIiwiY29udGV4dFZhbHVlIiwiZmV0Y2hpbmciLCJQcm92aWRlciIsIlBhZ2VDb250YWluZXIiLCJQcm9maWxlU2VjdGlvbiIsIkxpYnJhcnlNb2R1bGVzIiwiTW9kdWxlcyIsIlJlYWN0IiwiX3VzZXJEYXRhIiwiX2RheWpzIiwiTGVhcm5pbmdNb2R1bGVBY3Rpb25zIiwib3Blbk1vZGFsIiwib25Vc2UiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsIm9wZW4iLCJvd25lckRhdGEiLCJvd25lciIsImNyZWF0b3IiLCJkYXRlIiwidGltZUNyZWF0ZWQiLCJmb3JtYXQiLCJGcmFnbWVudCIsIlVzZXJEYXRhIiwiQnV0dG9uIiwidmFyaWFudCIsImJvcmRlcmVkIiwib25DbGljayIsImFjdGlvbnMiLCJ1c2UiLCJfbGluayIsIl9vcmdhbml6YXRpb25zTW9kYWwiLCJpc0FkbWluIiwic2V0T3Blbk1vZGFsIiwidG9nZ2xlTW9kYWwiLCJMaWJyYXJ5SXRlbSIsImxpbmsiLCJPcmdhbml6YXRpb25zTW9kYWwiLCJvbkNsb3NlIiwiX2FjdGlvbnMiLCJfbW9kYWwiLCJfbGlzdCIsIl9pY29ucyIsIl9yb3V0aW5nIiwiX2xlYXJuaW5nTW9kdWxlcyIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiLCJzZXRFcnJvciIsInNldEZldGNoaW5nIiwiY2xvbmUiLCJpbnN0YW5jZSIsIkxlYXJuaW5nTW9kdWxlIiwiaXNSZWFkeSIsInJlc3BvbnNlIiwiZXJyb3JzIiwiZmFpbGVkIiwicm91dGluZyIsInB1c2hTdGF0ZSIsIkl0ZW0iLCJJY29uIiwiaWNvbiIsIk1vZGFsIiwiY2xvc2VCYWNrZHJvcCIsIkVycm9yUmVuZGVyZXIiLCJMaXN0Iiwib3JnYW5pemF0aW9ucyIsImNvbnRyb2wiLCJzcGVjcyIsImRpc2FibGVkIiwiY29udGludWUiLCJfaW1hZ2UiLCJsYWJlbCIsInBob3RvVXJsIiwiSW1hZ2UiLCJfYXNzaWduIiwic2hhcmUiLCJhc3NpZ24iLCJNb2R1bGVBc3NpZ25tZW50cyIsIk1vZHVsZUl0ZW0iLCJjcmVhdGUiLCJVc2VyQ2FyZCIsInBob3RvVVJMIiwiZGlzcGxheU5hbWUiLCJlbWFpbCIsInByb2ZpbGUiLCJlZGl0Iiwic3RlcDAiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9hc2lkZS9jbGFzc3Jvb21zLnRzeCIsIi90cy92aWV3cy9hc2lkZS9kcmFmdHMudHN4IiwiL3RzL3ZpZXdzL2FzaWRlL2luZGV4LnRzeCIsIi90cy92aWV3cy9hc3NpZ21lbnRzL2luZGV4LnRzeCIsIi90cy92aWV3cy9hc3NpZ21lbnRzL2l0ZW0udHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xpYnJhcnkvYWN0aW9ucy50c3giLCIvdHMvdmlld3MvbGlicmFyeS9pbmRleC50c3giLCIvdHMvdmlld3MvbGlicmFyeS9pdGVtLnRzeCIsIi90cy92aWV3cy9saWJyYXJ5L29yZ2FuaXphdGlvbnMtbW9kYWwudHN4IiwiL3RzL3ZpZXdzL2xpYnJhcnkvdXNlci1kYXRhLnRzeCIsIi90cy92aWV3cy9tb2R1bGVzL2FjdGlvbnMudHN4IiwiL3RzL3ZpZXdzL21vZHVsZXMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL21vZHVsZXMvaXRlbS50c3giLCIvdHMvdmlld3Mvc2VjdGlvbnMvZHJhZnRzLnRzeCIsIi90cy92aWV3cy9zZWN0aW9ucy9tb2R1bGVzLnRzeCIsIi90cy92aWV3cy9zZWN0aW9ucy9wcm9maWxlLXNlY3Rpb24udHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQUcsV0FBQSxHQUFBSCxPQUFBO1VBQ0EsSUFBQUksUUFBQSxHQUFBSixPQUFBO1VBQ087VUFBVSxNQUNYSyxVQUFXLFNBQVFOLEtBQUEsQ0FBQU8seUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDRUMsV0FBVyxHQUF5QyxJQUFJO1lBQ2hFLElBQUlDLE1BQU1BLENBQUE7Y0FDVCxPQUFPUCxNQUFBLENBQUFRLElBQUk7WUFDWjtZQUVBQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFKLEtBQU0sR0FBRyxJQUFJTixNQUFBLENB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