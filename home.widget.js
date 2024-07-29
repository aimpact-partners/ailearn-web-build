System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.1.0-dev.03/main-layout.widget", "@aimpact/chat-sdk@1.0.1/session", "@beyond-js/reactive@1.2.0/model", "@beyond-js/kernel@0.1.9/texts", "react@18.2.0", "@aimpact/ailearn-app@0.1.0-dev.03/components/ui", "pragmate-ui@1.0.0-beta.1/components", "pragmate-ui@1.0.0-beta.1/swiper", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/ailearn-app@0.1.0-dev.03/modules/assign", "pragmate-ui@1.0.0-beta.1/link", "pragmate-ui@1.0.0-beta.1/image"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, bimport, __Bundle, __pkg, ims, Controller, AssignmentItem, View, ModuleItem, UserCard, ProfileSection, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    AssignmentItem: void 0,
    View: void 0,
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
    }, function (_aimpactAilearnApp010Dev03ModulesAssign) {
      dependency_13 = _aimpactAilearnApp010Dev03ModulesAssign;
    }, function (_pragmateUi100Beta1Link) {
      dependency_14 = _pragmateUi100Beta1Link;
    }, function (_pragmateUi100Beta1Image) {
      dependency_15 = _pragmateUi100Beta1Image;
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/main-layout.widget', dependency_4], ['@aimpact/chat-sdk/session', dependency_5], ['@beyond-js/reactive/model', dependency_6], ['@beyond-js/kernel/texts', dependency_7], ['react', dependency_8], ['@aimpact/ailearn-app/components/ui', dependency_9], ['pragmate-ui/components', dependency_10], ['pragmate-ui/swiper', dependency_11], ['@beyond-js/react-18-widgets/hooks', dependency_12], ['@aimpact/ailearn-app/modules/assign', dependency_13], ['pragmate-ui/link', dependency_14], ['pragmate-ui/image', dependency_15]]);
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
        hash: 570333705,
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
        hash: 3096386313,
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
            } = (0, _ui.useDriverTour)(ready);
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
            }, _react.default.createElement(_profileSection.ProfileSection, null), _react.default.createElement(_assigments.Assignments, null), _react.default.createElement(_modules.Modules, null)), _react.default.createElement(_aside.Aside, null))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJfbWFpbkxheW91dCIsIl9zZXNzaW9uIiwiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJzdG9yZSIsImhpZGVUaW1lb3V0IiwiV2lkZ2V0IiwiVmlldyIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiY29uc3RydWN0b3IiLCJhcmdzIiwic2Vzc2lvbldyYXBwZXIiLCJvbiIsIm9uTG9nb3V0Iiwib25Mb2dpbiIsImNsZWFyIiwidW5kZWZpbmVkIiwib2ZmIiwic2hvdyIsImNsZWFyVGltZW91dCIsIkxheW91dEJyb2tlciIsIm92ZXJsYXkiLCJsb2FkIiwiaGlkZSIsInNldFRpbWVvdXQiLCJleHBvcnRzIiwiX21vZGVsIiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwiaXRlbXMiLCJhc3NpZ25tZW50cyIsInRleHRzIiwiQ3VycmVudFRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidmFsdWUiLCJkcmFmdHMiLCJjbGFzc3Jvb21zIiwibW9kdWxlcyIsInVzZXIiLCJpc1RlYWNoZXIiLCJyb2xlcyIsImluY2x1ZGVzIiwicmVhZHkiLCJ0cmlnZ2VyRXZlbnQiLCJzZXRCcmVhZGNydW1iIiwib25DaGFuZ2UiLCJiaW5kIiwiYnJlYWRjcnVtYiIsImdsb2JhbFRoaXMiLCJzdGF0dXMiLCJkYXRhIiwiZ2V0SG9tZSIsImNvbnNvbGUiLCJsb2ciLCJlIiwiZXJyb3IiLCJfcmVhY3QiLCJfY29udGV4dCIsIl91aSIsIl9jb21wb25lbnRzIiwiQXNpZGVDbGFzc3Jvb21zIiwidG91ciIsInVzZU1vZHVsZUNvbnRleHQiLCJBcnJheSIsImlzQXJyYXkiLCJ0b3RhbCIsImxlbmd0aCIsImVtcHR5IiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJvdXRwdXQiLCJtYXAiLCJpdGVtIiwiY29udGVudCIsImRlc2NyaXB0aW9uIiwidGl0bGUiLCJuYW1lIiwiTGluayIsImhyZWYiLCJpZCIsImtleSIsIkVudGl0eUltYWdlIiwicmF0aW8iLCJzcmMiLCJwaWN0dXJlIiwiZW50aXR5IiwiY2xzIiwiYWN0aW9uIiwiQXNpZGVEcmFmdHMiLCJkcmFmdCIsIl9kcmFmdHMiLCJfY2xhc3Nyb29tcyIsIkFzaWRlIiwiX2l0ZW0iLCJfc3dpcGVyIiwiQXNzaWdubWVudHMiLCJBc3NpZ25tZW50SXRlbSIsImJyZWFrcG9pbnRzIiwic2xpZGVzUGVyVmlldyIsIlBhZ2VUaXRsZSIsImFzIiwiU3dpcGVyU2xpZGVyIiwic3BhY2VCZXR3ZWVuIiwiYWx0IiwiYWN0aXZpdGllcyIsImNvdW50IiwiTW9kdWxlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2hvb2tzIiwiX3Byb2ZpbGVTZWN0aW9uIiwiX2Fzc2lnbWVudHMiLCJfYXNpZGUiLCJfbW9kdWxlcyIsInNldFJlYWR5IiwidXNlU3RhdGUiLCJ1c2VCaW5kZXIiLCJyZWYiLCJtYWluUmVmIiwidXNlRHJpdmVyVG91ciIsIlNwaW5uZXIiLCJhY3RpdmUiLCJjb250ZXh0VmFsdWUiLCJmZXRjaGluZyIsIlByb3ZpZGVyIiwiUGFnZUNvbnRhaW5lciIsIlByb2ZpbGVTZWN0aW9uIiwiTW9kdWxlcyIsIlJlYWN0IiwiX2Fzc2lnbiIsIkxlYXJuaW5nTW9kdWxlQWN0aW9ucyIsIm9wZW5Nb2RhbCIsInNldE9wZW5Nb2RhbCIsInNoYXJlIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJ0b2dnbGVNb2RhbCIsIkJ1dHRvbiIsInZhcmlhbnQiLCJib3JkZXJlZCIsIm9uQ2xpY2siLCJhY3Rpb25zIiwiYXNzaWduIiwiTW9kdWxlQXNzaWdubWVudHMiLCJvbkNsb3NlIiwiX2xpbmsiLCJNb2R1bGVJdGVtIiwiaXNBZG1pbiIsImNyZWF0ZSIsIl9hY3Rpb25zIiwib3duZXJEYXRhIiwib3duZXIiLCJjcmVhdG9yIiwiVXNlckRhdGEiLCJfaW1hZ2UiLCJVc2VyQ2FyZCIsIkltYWdlIiwicGhvdG9VUkwiLCJkaXNwbGF5TmFtZSIsImVtYWlsIiwicHJvZmlsZSIsImVkaXQiLCJzdGVwMCJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2FzaWRlL2NsYXNzcm9vbXMudHN4IiwiL3RzL3ZpZXdzL2FzaWRlL2RyYWZ0cy50c3giLCIvdHMvdmlld3MvYXNpZGUvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbWVudHMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbWVudHMvaXRlbS50c3giLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvbW9kdWxlcy9hY3Rpb25zLnRzeCIsIi90cy92aWV3cy9tb2R1bGVzL2luZGV4LnRzeCIsIi90cy92aWV3cy9tb2R1bGVzL2l0ZW0udHN4IiwiL3RzL3ZpZXdzL3NlY3Rpb25zL2RyYWZ0cy50c3giLCIvdHMvdmlld3Mvc2VjdGlvbnMvbW9kdWxlcy50c3giLCIvdHMvdmlld3Mvc2VjdGlvbnMvcHJvZmlsZS1zZWN0aW9uLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFHLFdBQUEsR0FBQUgsT0FBQTtVQUNBLElBQUFJLFFBQUEsR0FBQUosT0FBQTtVQUNPO1VBQVUsTUFDWEssVUFBVyxTQUFRTixLQUFBLENBQUFPLHlCQUF5QjtZQUNq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