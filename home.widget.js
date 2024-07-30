System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.1.0-dev.06/main-layout.widget", "@aimpact/chat-sdk@1.0.1/session", "@beyond-js/reactive@1.2.0/model", "@beyond-js/kernel@0.1.9/texts", "@aimpact/ailearn-sdk@1.0.0/learning-modules", "react@18.2.0", "@aimpact/ailearn-app@0.1.0-dev.06/components/ui", "pragmate-ui@1.0.0-beta.1/components", "pragmate-ui@1.0.0-beta.1/swiper", "@beyond-js/react-18-widgets@1.1.2/hooks", "dayjs@1.11.10", "pragmate-ui@1.0.0-beta.1/link", "pragmate-ui@1.0.0-beta.1/modal", "pragmate-ui@1.0.0-beta.1/list", "pragmate-ui@1.0.0-beta.1/icons", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@1.0.0-beta.1/image", "@aimpact/ailearn-app@0.1.0-dev.06/modules/assign"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp010Dev06MainLayoutWidget) {
      dependency_4 = _aimpactAilearnApp010Dev06MainLayoutWidget;
    }, function (_aimpactChatSdk101Session) {
      dependency_5 = _aimpactChatSdk101Session;
    }, function (_beyondJsReactive120Model) {
      dependency_6 = _beyondJsReactive120Model;
    }, function (_beyondJsKernel019Texts) {
      dependency_7 = _beyondJsKernel019Texts;
    }, function (_aimpactAilearnSdk100LearningModules) {
      dependency_8 = _aimpactAilearnSdk100LearningModules;
    }, function (_react2) {
      dependency_9 = _react2;
    }, function (_aimpactAilearnApp010Dev06ComponentsUi) {
      dependency_10 = _aimpactAilearnApp010Dev06ComponentsUi;
    }, function (_pragmateUi100Beta1Components) {
      dependency_11 = _pragmateUi100Beta1Components;
    }, function (_pragmateUi100Beta1Swiper) {
      dependency_12 = _pragmateUi100Beta1Swiper;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_13 = _beyondJsReact18Widgets112Hooks;
    }, function (_dayjs2) {
      dependency_14 = _dayjs2;
    }, function (_pragmateUi100Beta1Link) {
      dependency_15 = _pragmateUi100Beta1Link;
    }, function (_pragmateUi100Beta1Modal) {
      dependency_16 = _pragmateUi100Beta1Modal;
    }, function (_pragmateUi100Beta1List) {
      dependency_17 = _pragmateUi100Beta1List;
    }, function (_pragmateUi100Beta1Icons) {
      dependency_18 = _pragmateUi100Beta1Icons;
    }, function (_beyondJsKernel019Routing) {
      dependency_19 = _beyondJsKernel019Routing;
    }, function (_pragmateUi100Beta1Image) {
      dependency_20 = _pragmateUi100Beta1Image;
    }, function (_aimpactAilearnApp010Dev06ModulesAssign) {
      dependency_21 = _aimpactAilearnApp010Dev06ModulesAssign;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.2"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.1"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.1.0-dev.06"], ["@aimpact/ailearn-app", "0.1.0-dev.06"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.0-dev.06/home",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/main-layout.widget', dependency_4], ['@aimpact/chat-sdk/session', dependency_5], ['@beyond-js/reactive/model', dependency_6], ['@beyond-js/kernel/texts', dependency_7], ['@aimpact/ailearn-sdk/learning-modules', dependency_8], ['react', dependency_9], ['@aimpact/ailearn-app/components/ui', dependency_10], ['pragmate-ui/components', dependency_11], ['pragmate-ui/swiper', dependency_12], ['@beyond-js/react-18-widgets/hooks', dependency_13], ['dayjs', dependency_14], ['pragmate-ui/link', dependency_15], ['pragmate-ui/modal', dependency_16], ['pragmate-ui/list', dependency_17], ['pragmate-ui/icons', dependency_18], ['@beyond-js/kernel/routing', dependency_19], ['pragmate-ui/image', dependency_20], ['@aimpact/ailearn-app/modules/assign', dependency_21]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "student-home",
        "vspecifier": "@aimpact/ailearn-app@0.1.0-dev.06/home.widget",
        "is": "page",
        "route": "/",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.0-dev.06/home.widget');
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
        hash: 3404353240,
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
                const modulePromises = [];
                this.#modules = data.modules.map(item => {
                  const instance = new _learningModules.LearningModule(item);
                  modulePromises.push(instance.isReady);
                  return instance;
                });
                await Promise.all(modulePromises);
                //@ts-ignore
                data.modules.map((item, index) => this.#modules[index].set(item));
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
              console.log(20);
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/aside/classrooms
      ****************************************/

      ims.set('./views/aside/classrooms', {
        hash: 1835015203,
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
            const cls = `classrooms-container aside-list${total === 0 ? ' aside-list--empty' : ''}`;
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
        hash: 1111600608,
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
              className: "aside-list__empty-container drafts-container"
            }, _react.default.createElement("span", {
              className: "empty__list"
            }, texts.empty.description), _react.default.createElement(_components.Button, {
              variant: "primary"
            }, texts.empty.action));
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
            const cls = `drafts-container aside-list${total === 0 ? ' aside-list--empty' : ''}`;
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
        hash: 2312783643,
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
            if (!ready) return _react.default.createElement(_ui.PageLoader, {
              fetching: true
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
        hash: 1004583845,
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
              href: "/modules/list?tab=community"
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
        hash: 2127081963,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = LearningModuleActions;
          var React = require("react");
          var _components = require("pragmate-ui/components");
          var _context = require("../context");
          function LearningModuleActions({
            item,
            toggleModal
          }) {
            const {
              texts
            } = (0, _context.useModuleContext)();
            const share = event => {
              event.stopPropagation();
              toggleModal({
                open: true,
                item
              });
            };
            return React.createElement("footer", {
              className: "entity__footer entity__footer--right"
            }, React.createElement(_components.Button, {
              variant: "primary",
              bordered: true,
              onClick: share
            }, texts.actions.assign));
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./views/modules/index
      *************************************/

      ims.set('./views/modules/index', {
        hash: 3077664673,
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
          var _assign = require("@aimpact/ailearn-app/modules/assign");
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
              item: null
            });
            const toggleModal = data => setOpenModal(data);
            const output = [...modules].map(item => _react.default.createElement(_item.ModuleItem, {
              toggleModal: toggleModal,
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
            }, output), openModal.open && _react.default.createElement(_assign.ModuleAssignments, {
              module: openModal.item,
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
        hash: 4059421781,
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
            item,
            toggleModal
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
              toggleModal: toggleModal,
              item: item
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJfbWFpbkxheW91dCIsIl9zZXNzaW9uIiwiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJzdG9yZSIsImhpZGVUaW1lb3V0IiwiV2lkZ2V0IiwiVmlldyIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiY29uc3RydWN0b3IiLCJhcmdzIiwic2Vzc2lvbldyYXBwZXIiLCJvbiIsIm9uTG9nb3V0Iiwib25Mb2dpbiIsImNsZWFyIiwidW5kZWZpbmVkIiwib2ZmIiwic2hvdyIsImNsZWFyVGltZW91dCIsIkxheW91dEJyb2tlciIsIm92ZXJsYXkiLCJsb2FkIiwiaGlkZSIsImV4cG9ydHMiLCJfbW9kZWwiLCJfdGV4dHMiLCJfYmV5b25kX2NvbnRleHQiLCJfbGVhcm5pbmdNb2R1bGVzIiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwiaXRlbXMiLCJhc3NpZ25tZW50cyIsInRleHRzIiwiQ3VycmVudFRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidmFsdWUiLCJkcmFmdHMiLCJjbGFzc3Jvb21zIiwibW9kdWxlcyIsImxpYnJhcnkiLCJ1c2VyIiwiaXNUZWFjaGVyIiwicm9sZXMiLCJpbmNsdWRlcyIsInJlYWR5IiwidHJpZ2dlckV2ZW50Iiwic2V0QnJlYWRjcnVtYiIsIm9uQ2hhbmdlIiwiYmluZCIsImJyZWFkY3J1bWIiLCJnbG9iYWxUaGlzIiwic2V0VGltZW91dCIsInN0YXR1cyIsImRhdGEiLCJnZXRIb21lIiwiY29uc29sZSIsImxvZyIsIm1vZHVsZVByb21pc2VzIiwibWFwIiwiaXRlbSIsImluc3RhbmNlIiwiTGVhcm5pbmdNb2R1bGUiLCJwdXNoIiwiaXNSZWFkeSIsIlByb21pc2UiLCJhbGwiLCJpbmRleCIsInNldCIsImUiLCJlcnJvciIsIl9yZWFjdCIsIl9jb250ZXh0IiwiX3VpIiwiX2NvbXBvbmVudHMiLCJBc2lkZUNsYXNzcm9vbXMiLCJ0b3VyIiwidXNlTW9kdWxlQ29udGV4dCIsIkFycmF5IiwiaXNBcnJheSIsInRvdGFsIiwibGVuZ3RoIiwiZW1wdHkiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIm91dHB1dCIsImNvbnRlbnQiLCJkZXNjcmlwdGlvbiIsInRpdGxlIiwibmFtZSIsIkxpbmsiLCJocmVmIiwiaWQiLCJrZXkiLCJFbnRpdHlJbWFnZSIsInJhdGlvIiwic3JjIiwicGljdHVyZSIsImVudGl0eSIsImNscyIsImFjdGlvbiIsIkFzaWRlRHJhZnRzIiwiQnV0dG9uIiwidmFyaWFudCIsImRyYWZ0IiwiX2RyYWZ0cyIsIl9jbGFzc3Jvb21zIiwiQXNpZGUiLCJfaXRlbSIsIl9zd2lwZXIiLCJBc3NpZ25tZW50cyIsIkFzc2lnbm1lbnRJdGVtIiwiYnJlYWtwb2ludHMiLCJzbGlkZXNQZXJWaWV3IiwiUGFnZVRpdGxlIiwiYXMiLCJTd2lwZXJTbGlkZXIiLCJzcGFjZUJldHdlZW4iLCJhbHQiLCJhY3Rpdml0aWVzIiwiY291bnQiLCJNb2R1bGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfaG9va3MiLCJfcHJvZmlsZVNlY3Rpb24iLCJfYXNzaWdtZW50cyIsIl9hc2lkZSIsIl9tb2R1bGVzIiwiX2xpYnJhcnkiLCJzZXRSZWFkeSIsInVzZVN0YXRlIiwidXNlQmluZGVyIiwicmVmIiwibWFpblJlZiIsInVzZURyaXZlclRvdXIiLCJidXR0b25zIiwiUGFnZUxvYWRlciIsImZldGNoaW5nIiwiY29udGV4dFZhbHVlIiwiUHJvdmlkZXIiLCJQYWdlQ29udGFpbmVyIiwiUHJvZmlsZVNlY3Rpb24iLCJMaWJyYXJ5TW9kdWxlcyIsIk1vZHVsZXMiLCJSZWFjdCIsIl91c2VyRGF0YSIsIl9kYXlqcyIsIkxlYXJuaW5nTW9kdWxlQWN0aW9ucyIsIm9wZW5Nb2RhbCIsIm9uVXNlIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJvcGVuIiwib3duZXJEYXRhIiwib3duZXIiLCJjcmVhdG9yIiwiZGF0ZSIsInRpbWVDcmVhdGVkIiwiZm9ybWF0IiwiRnJhZ21lbnQiLCJVc2VyRGF0YSIsImJvcmRlcmVkIiwib25DbGljayIsImFjdGlvbnMiLCJ1c2UiLCJfbGluayIsIl9vcmdhbml6YXRpb25zTW9kYWwiLCJpc0FkbWluIiwic2V0T3Blbk1vZGFsIiwidG9nZ2xlTW9kYWwiLCJMaWJyYXJ5SXRlbSIsImxpbmsiLCJPcmdhbml6YXRpb25zTW9kYWwiLCJvbkNsb3NlIiwiX2FjdGlvbnMiLCJfbW9kYWwiLCJfbGlzdCIsIl9pY29ucyIsIl9yb3V0aW5nIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsInNldEVycm9yIiwic2V0RmV0Y2hpbmciLCJjbG9uZSIsInJlc3BvbnNlIiwiZXJyb3JzIiwiZmFpbGVkIiwicm91dGluZyIsInB1c2hTdGF0ZSIsIkl0ZW0iLCJJY29uIiwiaWNvbiIsIk1vZGFsIiwiY2xvc2VCYWNrZHJvcCIsIkVycm9yUmVuZGVyZXIiLCJMaXN0Iiwib3JnYW5pemF0aW9ucyIsImNvbnRyb2wiLCJzcGVjcyIsImRpc2FibGVkIiwiY29udGludWUiLCJfaW1hZ2UiLCJsYWJlbCIsInBob3RvVXJsIiwiSW1hZ2UiLCJzaGFyZSIsImFzc2lnbiIsIl9hc3NpZ24iLCJNb2R1bGVJdGVtIiwiY3JlYXRlIiwiTW9kdWxlQXNzaWdubWVudHMiLCJVc2VyQ2FyZCIsInBob3RvVVJMIiwiZGlzcGxheU5hbWUiLCJlbWFpbCIsInByb2ZpbGUiLCJlZGl0Iiwic3RlcDAiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9hc2lkZS9jbGFzc3Jvb21zLnRzeCIsIi90cy92aWV3cy9hc2lkZS9kcmFmdHMudHN4IiwiL3RzL3ZpZXdzL2FzaWRlL2luZGV4LnRzeCIsIi90cy92aWV3cy9hc3NpZ21lbnRzL2luZGV4LnRzeCIsIi90cy92aWV3cy9hc3NpZ21lbnRzL2l0ZW0udHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xpYnJhcnkvYWN0aW9ucy50c3giLCIvdHMvdmlld3MvbGlicmFyeS9pbmRleC50c3giLCIvdHMvdmlld3MvbGlicmFyeS9pdGVtLnRzeCIsIi90cy92aWV3cy9saWJyYXJ5L29yZ2FuaXphdGlvbnMtbW9kYWwudHN4IiwiL3RzL3ZpZXdzL2xpYnJhcnkvdXNlci1kYXRhLnRzeCIsIi90cy92aWV3cy9tb2R1bGVzL2FjdGlvbnMudHN4IiwiL3RzL3ZpZXdzL21vZHVsZXMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL21vZHVsZXMvaXRlbS50c3giLCIvdHMvdmlld3Mvc2VjdGlvbnMvZHJhZnRzLnRzeCIsIi90cy92aWV3cy9zZWN0aW9ucy9tb2R1bGVzLnRzeCIsIi90cy92aWV3cy9zZWN0aW9ucy9wcm9maWxlLXNlY3Rpb24udHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQUcsV0FBQSxHQUFBSCxPQUFBO1VBQ0EsSUFBQUksUUFBQSxHQUFBSixPQUFBO1VBQ087VUFBVSxNQUNYSyxVQUFXLFNBQVFOLEtBQUEsQ0FBQU8seUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDRUMsV0FBVyxHQUF5QyxJQUFJO1lBQ2hFLElBQUlDLE1BQU1BLENBQUE7Y0FDVCxPQUFPUCxNQUFBLENBQUFRLElBQUk7WUFDWjtZQUVBQyxXQUFXQSxD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