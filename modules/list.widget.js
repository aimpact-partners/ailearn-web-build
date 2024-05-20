System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@beyond-js/reactive@1.1.12/model", "@aimpact/ailearn-sdk@1.0.0/learning-modules", "react@18.2.0", "pragmate-ui@0.1.1/components", "@aimpact/ailearn-app@0.0.32-dev.48/components/ui", "@aimpact/ailearn-app@0.0.32-dev.48/components/navbar-header.code", "@aimpact/chat@1.0.1/shared/components", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.1.1/link", "pragmate-ui@0.1.1/icons", "pragmate-ui@0.1.1/modal", "pragmate-ui@0.1.1/list", "@aimpact/chat-sdk@1.0.0/session", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@0.1.1/image", "@aimpact/ailearn-app@0.0.32-dev.48/modules/assign", "pragmate-ui@0.1.1/tabs", "pragmate-ui@0.1.1/empty"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    View: void 0
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
    }, function (_beyondJsReactive1112Model) {
      dependency_4 = _beyondJsReactive1112Model;
    }, function (_aimpactAilearnSdk100LearningModules) {
      dependency_5 = _aimpactAilearnSdk100LearningModules;
    }, function (_react2) {
      dependency_6 = _react2;
    }, function (_pragmateUi011Components) {
      dependency_7 = _pragmateUi011Components;
    }, function (_aimpactAilearnApp0032Dev48ComponentsUi) {
      dependency_8 = _aimpactAilearnApp0032Dev48ComponentsUi;
    }, function (_aimpactAilearnApp0032Dev48ComponentsNavbarHeaderCode) {
      dependency_9 = _aimpactAilearnApp0032Dev48ComponentsNavbarHeaderCode;
    }, function (_aimpactChat101SharedComponents) {
      dependency_10 = _aimpactChat101SharedComponents;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_11 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactChat101SharedHooks) {
      dependency_12 = _aimpactChat101SharedHooks;
    }, function (_pragmateUi011Link) {
      dependency_13 = _pragmateUi011Link;
    }, function (_pragmateUi011Icons) {
      dependency_14 = _pragmateUi011Icons;
    }, function (_pragmateUi011Modal) {
      dependency_15 = _pragmateUi011Modal;
    }, function (_pragmateUi011List) {
      dependency_16 = _pragmateUi011List;
    }, function (_aimpactChatSdk100Session) {
      dependency_17 = _aimpactChatSdk100Session;
    }, function (_beyondJsKernel019Routing) {
      dependency_18 = _beyondJsKernel019Routing;
    }, function (_pragmateUi011Image) {
      dependency_19 = _pragmateUi011Image;
    }, function (_aimpactAilearnApp0032Dev48ModulesAssign) {
      dependency_20 = _aimpactAilearnApp0032Dev48ModulesAssign;
    }, function (_pragmateUi011Tabs) {
      dependency_21 = _pragmateUi011Tabs;
    }, function (_pragmateUi011Empty) {
      dependency_22 = _pragmateUi011Empty;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.0.32-dev.48"], ["@aimpact/ailearn-app", "0.0.32-dev.48"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.32-dev.48/modules/list",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@aimpact/ailearn-sdk/learning-modules', dependency_5], ['react', dependency_6], ['pragmate-ui/components', dependency_7], ['@aimpact/ailearn-app/components/ui', dependency_8], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_9], ['@aimpact/chat/shared/components', dependency_10], ['@beyond-js/react-18-widgets/hooks', dependency_11], ['@aimpact/chat/shared/hooks', dependency_12], ['pragmate-ui/link', dependency_13], ['pragmate-ui/icons', dependency_14], ['pragmate-ui/modal', dependency_15], ['pragmate-ui/list', dependency_16], ['@aimpact/chat-sdk/session', dependency_17], ['@beyond-js/kernel/routing', dependency_18], ['pragmate-ui/image', dependency_19], ['@aimpact/ailearn-app/modules/assign', dependency_20], ['pragmate-ui/tabs', dependency_21], ['pragmate-ui/empty', dependency_22]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-modules-list",
        "vspecifier": "@aimpact/ailearn-app@0.0.32-dev.48/modules/list.widget",
        "is": "page",
        "route": "/modules/list",
        "layout": "general-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.32-dev.48/modules/list.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 4171271325,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _page = require("@beyond-js/react-18-widgets/page");
          var _views = require("./views");
          var _store = require("./store");
          /*bundle*/
          class Controller extends _page.PageReactWidgetController {
            #store;
            createStore() {
              this.#store = new _store.StoreManager();
              return this.#store;
            }
            get Widget() {
              return _views.View;
            }
            show() {
              const tab = this.uri.qs.get('tab');
              this.#store.load(tab);
            }
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
        hash: 3459237334,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _learningModules = require("@aimpact/ailearn-sdk/learning-modules");
          class StoreManager extends _model.ReactiveModel {
            #drafts;
            get draft() {
              return this.#drafts;
            }
            #modules;
            get modules() {
              return this.#modules;
            }
            #community;
            get community() {
              return this.#community;
            }
            #tab;
            get tab() {
              return this.#tab;
            }
            constructor() {
              super();
              globalThis.c = this;
              this.#drafts = new _learningModules.LearningModules();
              this.#modules = new _learningModules.LearningModules();
              this.#community = new _learningModules.LearningModules();
              globalThis.drafts = this.#drafts;
            }
            clear() {}
            async loadModules() {
              this.#tab = 'published';
              if (this.#modules.loaded) return;
              await this.#modules.load({
                type: 'module',
                route: '',
                orderBy: 'timeCreated'
              });
              this.ready = true;
            }
            async loadDrafts() {
              this.#tab = 'draft';
              if (this.#drafts.loaded) return;
              await this.#drafts.load({
                type: 'draft',
                route: '/drafts',
                orderBy: 'timeCreated'
              });
              this.ready = true;
            }
            async loadCommunity() {
              this.#tab = 'community';
              if (this.#drafts.loaded) return;
              await this.#community.load({
                type: 'community',
                route: 'community',
                orderBy: 'timeCreated'
              });
              this.ready = true;
            }
            load(type = 'published') {
              const types = {
                community: this.loadCommunity.bind(this),
                draft: this.loadDrafts.bind(this),
                published: this.loadModules.bind(this)
              };
              if (!types[type]) {
                console.trace();
                throw new Error(`Invalid type: ${type}`);
              }
              types[type]();
            }
            async deleteDraft(id) {
              const item = this.#drafts.elements.get(id);
              await item.delete();
              await this.#drafts.load({
                type: 'draft',
                route: '/drafts'
              });
              this.triggerEvent();
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 515844683,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useListContext = exports.ListContext = void 0;
          var _react = require("react");
          const ListContext = exports.ListContext = _react.default.createContext({});
          const useListContext = () => _react.default.useContext(ListContext);
          exports.useListContext = useListContext;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/empty
      *****************************/

      ims.set('./views/empty', {
        hash: 1830535700,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyList = EmptyList;
          var React = require("react");
          var _components = require("pragmate-ui/components");
          var _context = require("./context");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          function EmptyList() {
            const {
              texts
            } = (0, _context.useListContext)();
            return React.createElement(_ui.EmptyCard, {
              text: texts.empty.general.title,
              description: texts.empty.general.description,
              icon: "edit"
            }, React.createElement("div", {
              className: "actions flex-container flex-center"
            }, React.createElement(_components.Link, {
              href: "/modules/management",
              className: "grow btn btn-primary"
            }, texts.actions.create)));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 2765993987,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _react = require("react");
          var _navbarHeader = require("@aimpact/ailearn-app/components/navbar-header.code");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _list = require("./list");
          var _context = require("./context");
          var _components = require("@aimpact/chat/shared/components");
          var _beyond_context = require("beyond_context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _hooks2 = require("@aimpact/chat/shared/hooks");
          var _link = require("pragmate-ui/link");
          var _icons = require("pragmate-ui/icons");
          /*bundle*/
          function View({
            store
          }) {
            const [textsReady, texts] = (0, _hooks2.useTexts)(_beyond_context.module.specifier);
            const [ready, setReady] = (0, _react.useState)(store.ready);
            const [fetching] = (0, _react.useState)(store.fetching);
            (0, _hooks.useBinder)([store], () => setReady(store.ready));
            if (!ready || !textsReady) return _react.default.createElement(_components.PreloadScreen, null);
            const value = {
              texts,
              store,
              fetching
            };
            return _react.default.createElement(_context.ListContext.Provider, {
              value: value
            }, _react.default.createElement(_navbarHeader.NavbarHeader, {
              breadcrumb: [[texts.breadcrumb.modules, '']]
            }), _react.default.createElement(_ui.PageContainer, null, _react.default.createElement(_ui.PageTitle, {
              title: texts.title
            }, _react.default.createElement("section", {
              className: "title__actions"
            }, _react.default.createElement(_link.Link, {
              href: "/modules/management"
            }, _react.default.createElement(_icons.Icon, {
              icon: "add-circle"
            }), texts.actions.create))), _react.default.createElement(_list.List, null)));
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./views/interfaces
      **********************************/

      ims.set('./views/interfaces', {
        hash: 2122662873,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /**********************************************
      INTERNAL MODULE: ./views/item/community/actions
      **********************************************/

      ims.set('./views/item/community/actions', {
        hash: 1952710345,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = CommunityActions;
          var React = require("react");
          var _context = require("../../context");
          var _components = require("pragmate-ui/components");
          var _organizationsModal = require("./organizations-modal");
          function CommunityActions({
            module
          }) {
            const {
              texts
            } = (0, _context.useListContext)();
            const [openModal, setOpenModal] = React.useState(false);
            const onUse = event => {
              event.stopPropagation();
              setOpenModal(true);
            };
            const toggleModal = () => setOpenModal(!openModal);
            return React.createElement("footer", {
              className: "entity__footer entity__footer--right"
            }, React.createElement(_components.Button, {
              variant: "primary",
              bordered: true,
              onClick: onUse
            }, texts.actions.use), openModal && React.createElement(_organizationsModal.OrganizationsModal, {
              module: module,
              onClose: toggleModal,
              texts: texts
            }));
          }
        }
      });

      /************************************************
      INTERNAL MODULE: ./views/item/community/community
      ************************************************/

      ims.set('./views/item/community/community', {
        hash: 2927527635,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CommunityItem = CommunityItem;
          var React = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("../../context");
          var _actions = require("./actions");
          function CommunityItem({
            item
          }) {
            const {
              texts
            } = (0, _context.useListContext)();
            const title = item.title ?? item.objective;
            const description = item.description ?? texts.item.description;
            return React.createElement("article", {
              className: "entity__item"
            }, React.createElement(_ui.EntityImage, {
              src: item.picture,
              entity: "module",
              alt: title
            }), React.createElement("section", {
              className: "entity__item-content"
            }, React.createElement("h4", null, title), React.createElement("span", null, description)), React.createElement(_actions.default, {
              module: item
            }));
          }
        }
      });

      /**********************************************************
      INTERNAL MODULE: ./views/item/community/organizations-modal
      **********************************************************/

      ims.set('./views/item/community/organizations-modal', {
        hash: 3310523566,
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
                const response = await module.clone(module.id, selected.id, selected.entity);
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

      /***********************************
      INTERNAL MODULE: ./views/item/drafts
      ***********************************/

      ims.set('./views/item/drafts', {
        hash: 747643815,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ItemDrafts = ItemDrafts;
          var React = require("react");
          var _components = require("pragmate-ui/components");
          var _context = require("../context");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          function ItemDrafts({
            item
          }) {
            const {
              texts,
              store
            } = (0, _context.useListContext)();
            const {
              title,
              description,
              objective
            } = item;
            const onDelete = async () => {
              await store.deleteDraft(item.id);
            };
            return React.createElement("article", {
              className: "entity__item"
            }, React.createElement(_ui.EntityImage, {
              src: item.picture,
              entity: "module",
              alt: title
            }), React.createElement("section", {
              className: "entity__item-content"
            }, React.createElement(_components.Link, {
              href: `/modules/management?id=${item.id}`
            }, React.createElement("h4", null, title ?? objective), React.createElement("span", null, description))), React.createElement("footer", {
              className: "entity__footer entity__footer--right"
            }, React.createElement(_ui.ConfirmAction, {
              textPopUp: texts?.actions?.delete,
              icon: "delete",
              onConfirm: onDelete
            })));
          }
        }
      });

      /*******************************************
      INTERNAL MODULE: ./views/item/module/actions
      *******************************************/

      ims.set('./views/item/module/actions', {
        hash: 3459488891,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = LearningModuleActions;
          var React = require("react");
          var _context = require("../../context");
          var _components = require("pragmate-ui/components");
          var _assign = require("@aimpact/ailearn-app/modules/assign");
          function LearningModuleActions({
            module
          }) {
            const {
              texts
            } = (0, _context.useListContext)();
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

      /******************************************
      INTERNAL MODULE: ./views/item/module/module
      ******************************************/

      ims.set('./views/item/module/module', {
        hash: 2747425906,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Item = Item;
          var React = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _actions = require("./actions");
          var _context = require("../../context");
          function Item({
            item
          }) {
            const {
              texts
            } = (0, _context.useListContext)();
            const title = item.title ?? item.objective;
            const description = item.description ?? texts.item.description;
            return React.createElement("article", {
              className: "entity__item"
            }, React.createElement(_ui.EntityImage, {
              src: item.picture,
              entity: "module",
              alt: title
            }), React.createElement("section", {
              className: "entity__item-content"
            }, React.createElement("h4", null, title), React.createElement("span", null, description)), React.createElement(_actions.default, {
              module: item
            }));
          }
        }
      });

      /***********************************
      INTERNAL MODULE: ./views/item/status
      ***********************************/

      ims.set('./views/item/status', {
        hash: 3172238619,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = Status;
          var _react = require("react");
          var _context = require("../context");
          const STATUS_COLORS = {
            ready: 'green',
            processing: 'yellow'
          };
          function Status({
            synthesis,
            relevance,
            assessment
          }) {
            const {
              texts
            } = (0, _context.useListContext)();
            const getStatusColor = status => {
              let color = STATUS_COLORS[status];
              return color ?? 'red';
            };
            return _react.default.createElement("section", {
              className: 'statuses'
            }, _react.default.createElement("div", {
              className: 'status'
            }, _react.default.createElement("div", null, _react.default.createElement("div", {
              className: `status-circle ${getStatusColor(relevance?.status)}`
            }), _react.default.createElement("h5", null, texts.classes.elements.relevance)), _react.default.createElement("div", null, _react.default.createElement("div", {
              className: `status-circle ${getStatusColor(synthesis?.status)}`
            }), _react.default.createElement("h5", null, texts.classes.elements.synthesis)), _react.default.createElement("div", null, _react.default.createElement("div", {
              className: `status-circle ${getStatusColor(assessment?.status)}`
            }), _react.default.createElement("h5", null, texts.classes.elements.assessment))));
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./views/item/title
      **********************************/

      ims.set('./views/item/title', {
        hash: 2842038646,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = ModuleData;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _context = require("../context");
          function ModuleData({
            item
          }) {
            const {
              texts
            } = (0, _context.useListContext)();
            const title = item.title ?? item.objective;
            const description = item.description ?? texts.item.description;
            return _react.default.createElement("section", null, _react.default.createElement(_components.Link, {
              href: `/modules/management?id=${item.id}`
            }, _react.default.createElement("h4", null, title)), _react.default.createElement("span", null, description));
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./views/list/index
      **********************************/

      ims.set('./views/list/index', {
        hash: 1766665070,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.List = List;
          var _react = require("react");
          var _context = require("../context");
          var _tabs = require("pragmate-ui/tabs");
          var _manageList = require("./manage-list");
          var _module = require("../item/module/module");
          var _routing = require("@beyond-js/kernel/routing");
          var _drafts = require("../item/drafts");
          var _community = require("../item/community/community");
          function List({}) {
            const {
              texts,
              store
            } = (0, _context.useListContext)();
            const tabs = ['draft', 'published', 'community'];
            const tabIndex = tabs.indexOf(store.tab);
            const [tabSelect, useTabSelect] = _react.default.useState(tabIndex);
            const onChange = (event, index) => {
              let urlParams = new URLSearchParams(globalThis.location.search);
              const tab = tabs[index];
              urlParams.set('tab', tab);
              _routing.routing.replaceState({}, document.title, `/modules/list?${urlParams.toString()}`);
              useTabSelect(index);
              store.load(tab);
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_tabs.TabsContainer, {
              onChange: onChange,
              active: tabSelect
            }, _react.default.createElement(_tabs.Tabs, {
              className: "module-list__tabs"
            }, _react.default.createElement(_tabs.Tab, null, texts.tabs.drafts), _react.default.createElement(_tabs.Tab, null, texts.tabs.published), _react.default.createElement(_tabs.Tab, null, texts.tabs.community)), _react.default.createElement(_tabs.Panes, {
              className: "module-list__panes"
            }, _react.default.createElement(_manageList.ManageList, {
              className: "module-list",
              collection: store.draft,
              control: _drafts.ItemDrafts,
              preventMessage: texts.empty.drafts,
              loadingMessage: texts.loading
            }), _react.default.createElement(_manageList.ManageList, {
              collection: store.modules,
              control: _module.Item,
              className: "module-list",
              preventMessage: texts.empty.published,
              loadingMessage: texts.loading
            }), _react.default.createElement(_manageList.ManageList, {
              collection: store.community,
              control: _community.CommunityItem,
              className: "module-list",
              preventMessage: texts.empty.community,
              loadingMessage: texts.loading
            }))));
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/list/manage-list
      ****************************************/

      ims.set('./views/list/manage-list', {
        hash: 603720868,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ManageList = ManageList;
          var React = require("react");
          var _list = require("pragmate-ui/list");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _empty = require("pragmate-ui/empty");
          var _components = require("pragmate-ui/components");
          function ManageList({
            className,
            collection,
            control,
            preventMessage
          }) {
            const [items, setItems] = React.useState(collection.items ?? []);
            const [fetching, setFetching] = React.useState(collection.fetching);
            (0, _hooks.useBinder)([collection], () => {
              setItems([...collection.items]);
              setFetching(collection.fetching);
            });
            if (fetching && !items.length) {
              return React.createElement(_empty.Empty, {
                className: "loading-list-page"
              }, React.createElement(_components.Spinner, {
                active: true
              }));
            }
            if (!items.length && !fetching) {
              return React.createElement(_ui.EmptyCard, {
                text: preventMessage.title,
                description: preventMessage.description,
                icon: "info"
              });
            }
            return React.createElement(React.Fragment, null, React.createElement(_list.List, {
              className: "entity__list",
              items: items,
              control: control
            }));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./views/index",
        "from": "View",
        "name": "View"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'View') && _export("View", View = require ? require('./views/index').View : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsInRhYiIsInVyaSIsInFzIiwiZ2V0IiwibG9hZCIsImhpZGUiLCJjbGVhciIsImV4cG9ydHMiLCJfbW9kZWwiLCJfbGVhcm5pbmdNb2R1bGVzIiwiUmVhY3RpdmVNb2RlbCIsImRyYWZ0cyIsImRyYWZ0IiwibW9kdWxlcyIsImNvbW11bml0eSIsImNvbnN0cnVjdG9yIiwiZ2xvYmFsVGhpcyIsImMiLCJMZWFybmluZ01vZHVsZXMiLCJsb2FkTW9kdWxlcyIsImxvYWRlZCIsInR5cGUiLCJyb3V0ZSIsIm9yZGVyQnkiLCJyZWFkeSIsImxvYWREcmFmdHMiLCJsb2FkQ29tbXVuaXR5IiwidHlwZXMiLCJiaW5kIiwicHVibGlzaGVkIiwiY29uc29sZSIsInRyYWNlIiwiRXJyb3IiLCJkZWxldGVEcmFmdCIsImlkIiwiaXRlbSIsImVsZW1lbnRzIiwiZGVsZXRlIiwidHJpZ2dlckV2ZW50IiwiX3JlYWN0IiwiTGlzdENvbnRleHQiLCJkZWZhdWx0IiwiY3JlYXRlQ29udGV4dCIsInVzZUxpc3RDb250ZXh0IiwidXNlQ29udGV4dCIsIlJlYWN0IiwiX2NvbXBvbmVudHMiLCJfY29udGV4dCIsIl91aSIsIkVtcHR5TGlzdCIsInRleHRzIiwiY3JlYXRlRWxlbWVudCIsIkVtcHR5Q2FyZCIsInRleHQiLCJlbXB0eSIsImdlbmVyYWwiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaWNvbiIsImNsYXNzTmFtZSIsIkxpbmsiLCJocmVmIiwiYWN0aW9ucyIsImNyZWF0ZSIsIl9uYXZiYXJIZWFkZXIiLCJfbGlzdCIsIl9iZXlvbmRfY29udGV4dCIsIl9ob29rcyIsIl9ob29rczIiLCJfbGluayIsIl9pY29ucyIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInNldFJlYWR5IiwidXNlU3RhdGUiLCJmZXRjaGluZyIsInVzZUJpbmRlciIsIlByZWxvYWRTY3JlZW4iLCJ2YWx1ZSIsIlByb3ZpZGVyIiwiTmF2YmFySGVhZGVyIiwiYnJlYWRjcnVtYiIsIlBhZ2VDb250YWluZXIiLCJQYWdlVGl0bGUiLCJJY29uIiwiTGlzdCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX29yZ2FuaXphdGlvbnNNb2RhbCIsIkNvbW11bml0eUFjdGlvbnMiLCJvcGVuTW9kYWwiLCJzZXRPcGVuTW9kYWwiLCJvblVzZSIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwidG9nZ2xlTW9kYWwiLCJCdXR0b24iLCJ2YXJpYW50IiwiYm9yZGVyZWQiLCJvbkNsaWNrIiwidXNlIiwiT3JnYW5pemF0aW9uc01vZGFsIiwib25DbG9zZSIsIl9hY3Rpb25zIiwiQ29tbXVuaXR5SXRlbSIsIm9iamVjdGl2ZSIsIkVudGl0eUltYWdlIiwic3JjIiwicGljdHVyZSIsImVudGl0eSIsImFsdCIsIl9tb2RhbCIsIl9zZXNzaW9uIiwiX3JvdXRpbmciLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwiZXJyb3IiLCJzZXRFcnJvciIsInNldEZldGNoaW5nIiwiY2xvbmUiLCJyZXNwb25zZSIsInN0YXR1cyIsImxvZyIsImVycm9ycyIsImZhaWxlZCIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJkYXRhIiwiSXRlbSIsIm5hbWUiLCJNb2RhbCIsImNsb3NlQmFja2Ryb3AiLCJFcnJvclJlbmRlcmVyIiwiaXRlbXMiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJvcmdhbml6YXRpb25zIiwiY29udHJvbCIsInNwZWNzIiwiZGlzYWJsZWQiLCJjb250aW51ZSIsIkl0ZW1EcmFmdHMiLCJvbkRlbGV0ZSIsIkNvbmZpcm1BY3Rpb24iLCJ0ZXh0UG9wVXAiLCJvbkNvbmZpcm0iLCJfYXNzaWduIiwiTGVhcm5pbmdNb2R1bGVBY3Rpb25zIiwic2hhcmUiLCJhc3NpZ24iLCJNb2R1bGVBc3NpZ25tZW50cyIsIlNUQVRVU19DT0xPUlMiLCJwcm9jZXNzaW5nIiwiU3RhdHVzIiwic3ludGhlc2lzIiwicmVsZXZhbmNlIiwiYXNzZXNzbWVudCIsImdldFN0YXR1c0NvbG9yIiwiY29sb3IiLCJjbGFzc2VzIiwiTW9kdWxlRGF0YSIsIl90YWJzIiwiX21hbmFnZUxpc3QiLCJfbW9kdWxlIiwiX2RyYWZ0cyIsIl9jb21tdW5pdHkiLCJ0YWJzIiwidGFiSW5kZXgiLCJpbmRleE9mIiwidGFiU2VsZWN0IiwidXNlVGFiU2VsZWN0Iiwib25DaGFuZ2UiLCJpbmRleCIsInVybFBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsImxvY2F0aW9uIiwic2VhcmNoIiwic2V0IiwicmVwbGFjZVN0YXRlIiwiZG9jdW1lbnQiLCJ0b1N0cmluZyIsIkZyYWdtZW50IiwiVGFic0NvbnRhaW5lciIsImFjdGl2ZSIsIlRhYnMiLCJUYWIiLCJQYW5lcyIsIk1hbmFnZUxpc3QiLCJjb2xsZWN0aW9uIiwicHJldmVudE1lc3NhZ2UiLCJsb2FkaW5nTWVzc2FnZSIsImxvYWRpbmciLCJfZW1wdHkiLCJzZXRJdGVtcyIsImxlbmd0aCIsIkVtcHR5IiwiU3Bpbm5lciJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi9pbnRlcmZhY2VzLnRzIiwiL3RzL3ZpZXdzL2l0ZW0vY29tbXVuaXR5L2FjdGlvbnMudHN4IiwiL3RzL3ZpZXdzL2l0ZW0vY29tbXVuaXR5L2NvbW11bml0eS50c3giLCIvdHMvdmlld3MvaXRlbS9jb21tdW5pdHkvb3JnYW5pemF0aW9ucy1tb2RhbC50c3giLCIvdHMvdmlld3MvaXRlbS9kcmFmdHMudHN4IiwiL3RzL3ZpZXdzL2l0ZW0vbW9kdWxlL2FjdGlvbnMudHN4IiwiL3RzL3ZpZXdzL2l0ZW0vbW9kdWxlL21vZHVsZS50c3giLCIvdHMvdmlld3MvaXRlbS9zdGF0dXMudHN4IiwiL3RzL3ZpZXdzL2l0ZW0vdGl0bGUudHN4IiwiL3RzL3ZpZXdzL2xpc3QvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xpc3QvbWFuYWdlLWxpc3QudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBR087VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUgsTUFBQSxDQUFBSyxZQUFZLEVBQUU7Y0FDaEMsT0FBcUIsSUFBSSxDQUFDLENBQUFGLEtBQU07WUFDakM7WUFDQSxJQUFJRyxNQUFNQSxDQUFBO2NBQ1QsT0FBT1AsTUFBQSxDQUFBUSxJQUFJO1lBQ1o7WUFFQUMsSUFBSUEsQ0FBQTtjQUNILE1BQU1DLEdBQUcsR0FBRyxJQUFJLENBQUNDLEdBQUcsQ0FBQ0MsRUFBRSxDQUFDQyxHQUFHLENBQUMsS0FBSyxDQUFDO2NBQ2xDLElBQUksQ0FBQyxDQUFBVCxLQUFNLENBQUNVLElBQUksQ0FBQ0osR0FBRyxDQUFDO1lBQ3RCO1lBRUFLLElBQUlBLENBQUE7Y0FDSCxJQUFJLENBQUMsQ0FBQVgsS0FBTSxDQUFDWSxLQUFLLEVBQUU7WUFDcEI7O1VBQ0FDLE9BQUEsQ0FBQWYsVUFBQSxHQUFBQSxVQUFBOzs7Ozs7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