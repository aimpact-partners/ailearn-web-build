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
        hash: 2744027217,
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
              console.log(47);
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
        hash: 4012041461,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJfbWFpbkxheW91dCIsIl9zZXNzaW9uIiwiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJzdG9yZSIsImhpZGVUaW1lb3V0IiwiV2lkZ2V0IiwiVmlldyIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiY29uc3RydWN0b3IiLCJhcmdzIiwic2Vzc2lvbldyYXBwZXIiLCJvbiIsIm9uTG9nb3V0Iiwib25Mb2dpbiIsImNsZWFyIiwidW5kZWZpbmVkIiwib2ZmIiwic2hvdyIsImNsZWFyVGltZW91dCIsIkxheW91dEJyb2tlciIsIm92ZXJsYXkiLCJsb2FkIiwiaGlkZSIsImNvbnNvbGUiLCJsb2ciLCJleHBvcnRzIiwiX21vZGVsIiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiX2xlYXJuaW5nTW9kdWxlcyIsIlJlYWN0aXZlTW9kZWwiLCJtb2RlbCIsIml0ZW1zIiwiYXNzaWdubWVudHMiLCJ0ZXh0cyIsIkN1cnJlbnRUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInZhbHVlIiwiZHJhZnRzIiwiY2xhc3Nyb29tcyIsIm1vZHVsZXMiLCJsaWJyYXJ5IiwidXNlciIsImlzVGVhY2hlciIsInJvbGVzIiwiaW5jbHVkZXMiLCJyZWFkeSIsInRyaWdnZXJFdmVudCIsInNldEJyZWFkY3J1bWIiLCJvbkNoYW5nZSIsImJpbmQiLCJicmVhZGNydW1iIiwiZ2xvYmFsVGhpcyIsInNldFRpbWVvdXQiLCJzdGF0dXMiLCJkYXRhIiwiZ2V0SG9tZSIsIm1vZHVsZVByb21pc2VzIiwibWFwIiwiaXRlbSIsImluc3RhbmNlIiwiTGVhcm5pbmdNb2R1bGUiLCJwdXNoIiwiaXNSZWFkeSIsIlByb21pc2UiLCJhbGwiLCJpbmRleCIsInNldCIsImUiLCJlcnJvciIsIl9yZWFjdCIsIl9jb250ZXh0IiwiX3VpIiwiX2NvbXBvbmVudHMiLCJBc2lkZUNsYXNzcm9vbXMiLCJ0b3VyIiwidXNlTW9kdWxlQ29udGV4dCIsIkFycmF5IiwiaXNBcnJheSIsInRvdGFsIiwibGVuZ3RoIiwiZW1wdHkiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIm91dHB1dCIsImNvbnRlbnQiLCJkZXNjcmlwdGlvbiIsInRpdGxlIiwibmFtZSIsIkxpbmsiLCJocmVmIiwiaWQiLCJrZXkiLCJFbnRpdHlJbWFnZSIsInJhdGlvIiwic3JjIiwicGljdHVyZSIsImVudGl0eSIsImNscyIsImFjdGlvbiIsIkFzaWRlRHJhZnRzIiwiQnV0dG9uIiwidmFyaWFudCIsImRyYWZ0IiwiX2RyYWZ0cyIsIl9jbGFzc3Jvb21zIiwiQXNpZGUiLCJfaXRlbSIsIl9zd2lwZXIiLCJBc3NpZ25tZW50cyIsIkFzc2lnbm1lbnRJdGVtIiwiYnJlYWtwb2ludHMiLCJzbGlkZXNQZXJWaWV3IiwiUGFnZVRpdGxlIiwiYXMiLCJTd2lwZXJTbGlkZXIiLCJzcGFjZUJldHdlZW4iLCJhbHQiLCJhY3Rpdml0aWVzIiwiY291bnQiLCJNb2R1bGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfaG9va3MiLCJfcHJvZmlsZVNlY3Rpb24iLCJfYXNzaWdtZW50cyIsIl9hc2lkZSIsIl9tb2R1bGVzIiwiX2xpYnJhcnkiLCJzZXRSZWFkeSIsInVzZVN0YXRlIiwidXNlQmluZGVyIiwicmVmIiwibWFpblJlZiIsInVzZURyaXZlclRvdXIiLCJidXR0b25zIiwiU3Bpbm5lciIsImFjdGl2ZSIsImNvbnRleHRWYWx1ZSIsImZldGNoaW5nIiwiUHJvdmlkZXIiLCJQYWdlQ29udGFpbmVyIiwiUHJvZmlsZVNlY3Rpb24iLCJMaWJyYXJ5TW9kdWxlcyIsIk1vZHVsZXMiLCJSZWFjdCIsIl91c2VyRGF0YSIsIl9kYXlqcyIsIkxlYXJuaW5nTW9kdWxlQWN0aW9ucyIsIm9wZW5Nb2RhbCIsIm9uVXNlIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJvcGVuIiwib3duZXJEYXRhIiwib3duZXIiLCJjcmVhdG9yIiwiZGF0ZSIsInRpbWVDcmVhdGVkIiwiZm9ybWF0IiwiRnJhZ21lbnQiLCJVc2VyRGF0YSIsImJvcmRlcmVkIiwib25DbGljayIsImFjdGlvbnMiLCJ1c2UiLCJfbGluayIsIl9vcmdhbml6YXRpb25zTW9kYWwiLCJpc0FkbWluIiwic2V0T3Blbk1vZGFsIiwidG9nZ2xlTW9kYWwiLCJMaWJyYXJ5SXRlbSIsImxpbmsiLCJPcmdhbml6YXRpb25zTW9kYWwiLCJvbkNsb3NlIiwiX2FjdGlvbnMiLCJfbW9kYWwiLCJfbGlzdCIsIl9pY29ucyIsIl9yb3V0aW5nIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsInNldEVycm9yIiwic2V0RmV0Y2hpbmciLCJjbG9uZSIsInJlc3BvbnNlIiwiZXJyb3JzIiwiZmFpbGVkIiwicm91dGluZyIsInB1c2hTdGF0ZSIsIkl0ZW0iLCJJY29uIiwiaWNvbiIsIk1vZGFsIiwiY2xvc2VCYWNrZHJvcCIsIkVycm9yUmVuZGVyZXIiLCJMaXN0Iiwib3JnYW5pemF0aW9ucyIsImNvbnRyb2wiLCJzcGVjcyIsImRpc2FibGVkIiwiY29udGludWUiLCJfaW1hZ2UiLCJsYWJlbCIsInBob3RvVXJsIiwiSW1hZ2UiLCJzaGFyZSIsImFzc2lnbiIsIl9hc3NpZ24iLCJNb2R1bGVJdGVtIiwiY3JlYXRlIiwiTW9kdWxlQXNzaWdubWVudHMiLCJVc2VyQ2FyZCIsInBob3RvVVJMIiwiZGlzcGxheU5hbWUiLCJlbWFpbCIsInByb2ZpbGUiLCJlZGl0Iiwic3RlcDAiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9hc2lkZS9jbGFzc3Jvb21zLnRzeCIsIi90cy92aWV3cy9hc2lkZS9kcmFmdHMudHN4IiwiL3RzL3ZpZXdzL2FzaWRlL2luZGV4LnRzeCIsIi90cy92aWV3cy9hc3NpZ21lbnRzL2luZGV4LnRzeCIsIi90cy92aWV3cy9hc3NpZ21lbnRzL2l0ZW0udHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xpYnJhcnkvYWN0aW9ucy50c3giLCIvdHMvdmlld3MvbGlicmFyeS9pbmRleC50c3giLCIvdHMvdmlld3MvbGlicmFyeS9pdGVtLnRzeCIsIi90cy92aWV3cy9saWJyYXJ5L29yZ2FuaXphdGlvbnMtbW9kYWwudHN4IiwiL3RzL3ZpZXdzL2xpYnJhcnkvdXNlci1kYXRhLnRzeCIsIi90cy92aWV3cy9tb2R1bGVzL2FjdGlvbnMudHN4IiwiL3RzL3ZpZXdzL21vZHVsZXMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL21vZHVsZXMvaXRlbS50c3giLCIvdHMvdmlld3Mvc2VjdGlvbnMvZHJhZnRzLnRzeCIsIi90cy92aWV3cy9zZWN0aW9ucy9tb2R1bGVzLnRzeCIsIi90cy92aWV3cy9zZWN0aW9ucy9wcm9maWxlLXNlY3Rpb24udHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQUcsV0FBQSxHQUFBSCxPQUFBO1VBQ0EsSUFBQUksUUFBQSxHQUFBSixPQUFBO1VBQ087VUFBVSxNQUNYSyxVQUFXLFNBQVFOLEtBQUEsQ0FBQU8seUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDRUMsV0FBVyxHQUF5QyxJQUFJO1lBQ2hFLElBQUlDLE1BQU1BLENBQUE7Y0FDVCxPQUFPUCxNQUFBLENBQUFRLElBQUk7WUFDWjtZQUVBQyxX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