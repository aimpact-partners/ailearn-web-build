System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@beyond-js/reactive@1.1.12/model", "@aimpact/ailearn-sdk@1.0.0/learning-modules", "react@18.2.0", "pragmate-ui@0.1.1/components", "@aimpact/ailearn-app@0.0.45/components/ui", "@aimpact/ailearn-app@0.0.45/components/navbar-header.code", "@aimpact/chat@1.0.1/shared/components", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.1.1/link", "pragmate-ui@0.1.1/icons", "pragmate-ui@0.1.1/modal", "pragmate-ui@0.1.1/list", "@aimpact/chat-sdk@1.0.0/session", "@beyond-js/kernel@0.1.9/routing", "@aimpact/ailearn-app@0.0.45/modules/assign", "pragmate-ui@0.1.1/tabs", "pragmate-ui@0.1.1/empty"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
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
    }, function (_aimpactAilearnApp0045ComponentsUi) {
      dependency_8 = _aimpactAilearnApp0045ComponentsUi;
    }, function (_aimpactAilearnApp0045ComponentsNavbarHeaderCode) {
      dependency_9 = _aimpactAilearnApp0045ComponentsNavbarHeaderCode;
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
    }, function (_aimpactAilearnApp0045ModulesAssign) {
      dependency_19 = _aimpactAilearnApp0045ModulesAssign;
    }, function (_pragmateUi011Tabs) {
      dependency_20 = _pragmateUi011Tabs;
    }, function (_pragmateUi011Empty) {
      dependency_21 = _pragmateUi011Empty;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.0.45"], ["@aimpact/ailearn-app", "0.0.45"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.45/modules/list",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@aimpact/ailearn-sdk/learning-modules', dependency_5], ['react', dependency_6], ['pragmate-ui/components', dependency_7], ['@aimpact/ailearn-app/components/ui', dependency_8], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_9], ['@aimpact/chat/shared/components', dependency_10], ['@beyond-js/react-18-widgets/hooks', dependency_11], ['@aimpact/chat/shared/hooks', dependency_12], ['pragmate-ui/link', dependency_13], ['pragmate-ui/icons', dependency_14], ['pragmate-ui/modal', dependency_15], ['pragmate-ui/list', dependency_16], ['@aimpact/chat-sdk/session', dependency_17], ['@beyond-js/kernel/routing', dependency_18], ['@aimpact/ailearn-app/modules/assign', dependency_19], ['pragmate-ui/tabs', dependency_20], ['pragmate-ui/empty', dependency_21]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-modules-list",
        "vspecifier": "@aimpact/ailearn-app@0.0.45/modules/list.widget",
        "is": "page",
        "route": "/modules/list",
        "layout": "general-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.45/modules/list.widget');
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
        hash: 1955364880,
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
            clear() {
              super.ready = false;
            }
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
        hash: 3549003928,
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
              className: "entity__item entity__item--clickable"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsInRhYiIsInVyaSIsInFzIiwiZ2V0IiwibG9hZCIsImhpZGUiLCJjbGVhciIsImV4cG9ydHMiLCJfbW9kZWwiLCJfbGVhcm5pbmdNb2R1bGVzIiwiUmVhY3RpdmVNb2RlbCIsImRyYWZ0cyIsImRyYWZ0IiwibW9kdWxlcyIsImNvbW11bml0eSIsImNvbnN0cnVjdG9yIiwiZ2xvYmFsVGhpcyIsImMiLCJMZWFybmluZ01vZHVsZXMiLCJyZWFkeSIsImxvYWRNb2R1bGVzIiwibG9hZGVkIiwidHlwZSIsInJvdXRlIiwib3JkZXJCeSIsImxvYWREcmFmdHMiLCJsb2FkQ29tbXVuaXR5IiwidHlwZXMiLCJiaW5kIiwicHVibGlzaGVkIiwiY29uc29sZSIsInRyYWNlIiwiRXJyb3IiLCJkZWxldGVEcmFmdCIsImlkIiwiaXRlbSIsImVsZW1lbnRzIiwiZGVsZXRlIiwidHJpZ2dlckV2ZW50IiwiX3JlYWN0IiwiTGlzdENvbnRleHQiLCJkZWZhdWx0IiwiY3JlYXRlQ29udGV4dCIsInVzZUxpc3RDb250ZXh0IiwidXNlQ29udGV4dCIsIlJlYWN0IiwiX2NvbXBvbmVudHMiLCJfY29udGV4dCIsIl91aSIsIkVtcHR5TGlzdCIsInRleHRzIiwiY3JlYXRlRWxlbWVudCIsIkVtcHR5Q2FyZCIsInRleHQiLCJlbXB0eSIsImdlbmVyYWwiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaWNvbiIsImNsYXNzTmFtZSIsIkxpbmsiLCJocmVmIiwiYWN0aW9ucyIsImNyZWF0ZSIsIl9uYXZiYXJIZWFkZXIiLCJfbGlzdCIsIl9iZXlvbmRfY29udGV4dCIsIl9ob29rcyIsIl9ob29rczIiLCJfbGluayIsIl9pY29ucyIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInNldFJlYWR5IiwidXNlU3RhdGUiLCJmZXRjaGluZyIsInVzZUJpbmRlciIsIlByZWxvYWRTY3JlZW4iLCJ2YWx1ZSIsIlByb3ZpZGVyIiwiTmF2YmFySGVhZGVyIiwiYnJlYWRjcnVtYiIsIlBhZ2VDb250YWluZXIiLCJQYWdlVGl0bGUiLCJJY29uIiwiTGlzdCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX29yZ2FuaXphdGlvbnNNb2RhbCIsIkNvbW11bml0eUFjdGlvbnMiLCJvcGVuTW9kYWwiLCJzZXRPcGVuTW9kYWwiLCJvblVzZSIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwidG9nZ2xlTW9kYWwiLCJCdXR0b24iLCJ2YXJpYW50IiwiYm9yZGVyZWQiLCJvbkNsaWNrIiwidXNlIiwiT3JnYW5pemF0aW9uc01vZGFsIiwib25DbG9zZSIsIl9hY3Rpb25zIiwiQ29tbXVuaXR5SXRlbSIsIm9iamVjdGl2ZSIsIkVudGl0eUltYWdlIiwic3JjIiwicGljdHVyZSIsImVudGl0eSIsImFsdCIsIl9tb2RhbCIsIl9zZXNzaW9uIiwiX3JvdXRpbmciLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwiZXJyb3IiLCJzZXRFcnJvciIsInNldEZldGNoaW5nIiwiY2xvbmUiLCJyZXNwb25zZSIsInN0YXR1cyIsImxvZyIsImVycm9ycyIsImZhaWxlZCIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJkYXRhIiwiSXRlbSIsIm5hbWUiLCJNb2RhbCIsImNsb3NlQmFja2Ryb3AiLCJFcnJvclJlbmRlcmVyIiwiaXRlbXMiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJvcmdhbml6YXRpb25zIiwiY29udHJvbCIsInNwZWNzIiwiZGlzYWJsZWQiLCJjb250aW51ZSIsIkl0ZW1EcmFmdHMiLCJvbkRlbGV0ZSIsIkNvbmZpcm1BY3Rpb24iLCJ0ZXh0UG9wVXAiLCJvbkNvbmZpcm0iLCJfYXNzaWduIiwiTGVhcm5pbmdNb2R1bGVBY3Rpb25zIiwic2hhcmUiLCJhc3NpZ24iLCJNb2R1bGVBc3NpZ25tZW50cyIsIlNUQVRVU19DT0xPUlMiLCJwcm9jZXNzaW5nIiwiU3RhdHVzIiwic3ludGhlc2lzIiwicmVsZXZhbmNlIiwiYXNzZXNzbWVudCIsImdldFN0YXR1c0NvbG9yIiwiY29sb3IiLCJjbGFzc2VzIiwiTW9kdWxlRGF0YSIsIl90YWJzIiwiX21hbmFnZUxpc3QiLCJfbW9kdWxlIiwiX2RyYWZ0cyIsIl9jb21tdW5pdHkiLCJ0YWJzIiwidGFiSW5kZXgiLCJpbmRleE9mIiwidGFiU2VsZWN0IiwidXNlVGFiU2VsZWN0Iiwib25DaGFuZ2UiLCJpbmRleCIsInVybFBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsImxvY2F0aW9uIiwic2VhcmNoIiwic2V0IiwicmVwbGFjZVN0YXRlIiwiZG9jdW1lbnQiLCJ0b1N0cmluZyIsIkZyYWdtZW50IiwiVGFic0NvbnRhaW5lciIsImFjdGl2ZSIsIlRhYnMiLCJUYWIiLCJQYW5lcyIsIk1hbmFnZUxpc3QiLCJjb2xsZWN0aW9uIiwicHJldmVudE1lc3NhZ2UiLCJsb2FkaW5nTWVzc2FnZSIsImxvYWRpbmciLCJfZW1wdHkiLCJzZXRJdGVtcyIsImxlbmd0aCIsIkVtcHR5IiwiU3Bpbm5lciJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi9pbnRlcmZhY2VzLnRzIiwiL3RzL3ZpZXdzL2l0ZW0vY29tbXVuaXR5L2FjdGlvbnMudHN4IiwiL3RzL3ZpZXdzL2l0ZW0vY29tbXVuaXR5L2NvbW11bml0eS50c3giLCIvdHMvdmlld3MvaXRlbS9jb21tdW5pdHkvb3JnYW5pemF0aW9ucy1tb2RhbC50c3giLCIvdHMvdmlld3MvaXRlbS9kcmFmdHMudHN4IiwiL3RzL3ZpZXdzL2l0ZW0vbW9kdWxlL2FjdGlvbnMudHN4IiwiL3RzL3ZpZXdzL2l0ZW0vbW9kdWxlL21vZHVsZS50c3giLCIvdHMvdmlld3MvaXRlbS9zdGF0dXMudHN4IiwiL3RzL3ZpZXdzL2l0ZW0vdGl0bGUudHN4IiwiL3RzL3ZpZXdzL2xpc3QvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xpc3QvbWFuYWdlLWxpc3QudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUdPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlILE1BQUEsQ0FBQUssWUFBWSxFQUFFO2NBQ2hDLE9BQXFCLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ2pDO1lBQ0EsSUFBSUcsTUFBTUEsQ0FBQTtjQUNULE9BQU9QLE1BQUEsQ0FBQVEsSUFBSTtZQUNaO1lBRUFDLElBQUlBLENBQUE7Y0FDSCxNQUFNQyxHQUFHLEdBQUcsSUFBSSxDQUFDQyxHQUFHLENBQUNDLEVBQUUsQ0FBQ0MsR0FBRyxDQUFDLEtBQUssQ0FBQztjQUNsQyxJQUFJLENBQUMsQ0FBQVQsS0FBTSxDQUFDVSxJQUFJLENBQUNKLEdBQUcsQ0FBQztZQUN0QjtZQUVBSyxJQUFJQSxDQUFBO2NBQ0gsSUFBSSxDQUFDLENBQUFYLEtBQU0sQ0FBQ1ksS0FBSyxFQUFFO1lBQ3BCOztVQUNBQyxPQUFBLENBQUFmLFVBQUEsR0FBQUEsVUFBQTs7Ozs7Ozs7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