System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@beyond-js/reactive@1.1.12/model", "@aimpact/ailearn-sdk@1.0.0/learning-modules", "react@18.2.0", "pragmate-ui@0.1.1/components", "@aimpact/ailearn-app@0.0.32/components/ui", "@aimpact/ailearn-app@0.0.32/components/navbar-header.code", "@aimpact/chat@1.0.1/shared/components", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.1.1/link", "pragmate-ui@0.1.1/icons", "pragmate-ui@0.1.1/modal", "pragmate-ui@0.1.1/list", "@aimpact/chat-sdk@1.0.0/session", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@0.1.1/image", "@aimpact/ailearn-app@0.0.32/modules/assign", "pragmate-ui@0.1.1/tabs", "pragmate-ui@0.1.1/empty"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp0032ComponentsUi) {
      dependency_8 = _aimpactAilearnApp0032ComponentsUi;
    }, function (_aimpactAilearnApp0032ComponentsNavbarHeaderCode) {
      dependency_9 = _aimpactAilearnApp0032ComponentsNavbarHeaderCode;
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
    }, function (_aimpactAilearnApp0032ModulesAssign) {
      dependency_20 = _aimpactAilearnApp0032ModulesAssign;
    }, function (_pragmateUi011Tabs) {
      dependency_21 = _pragmateUi011Tabs;
    }, function (_pragmateUi011Empty) {
      dependency_22 = _pragmateUi011Empty;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/http-suite", "1.0.3"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/react-18-widgets", "1.1.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["apexcharts", "3.48.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["firebase", "10.9.0"], ["firebase-admin", "11.11.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["@aimpact/ailearn-app", "0.0.32"], ["@aimpact/ailearn-app", "0.0.32"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.32/modules/list",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@aimpact/ailearn-sdk/learning-modules', dependency_5], ['react', dependency_6], ['pragmate-ui/components', dependency_7], ['@aimpact/ailearn-app/components/ui', dependency_8], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_9], ['@aimpact/chat/shared/components', dependency_10], ['@beyond-js/react-18-widgets/hooks', dependency_11], ['@aimpact/chat/shared/hooks', dependency_12], ['pragmate-ui/link', dependency_13], ['pragmate-ui/icons', dependency_14], ['pragmate-ui/modal', dependency_15], ['pragmate-ui/list', dependency_16], ['@aimpact/chat-sdk/session', dependency_17], ['@beyond-js/kernel/routing', dependency_18], ['pragmate-ui/image', dependency_19], ['@aimpact/ailearn-app/modules/assign', dependency_20], ['pragmate-ui/tabs', dependency_21], ['pragmate-ui/empty', dependency_22]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-modules-list",
        "vspecifier": "@aimpact/ailearn-app@0.0.32/modules/list.widget",
        "is": "page",
        "route": "/modules/list",
        "layout": "general-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.32/modules/list.widget');
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
        hash: 1403127114,
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
                route: ''
              });
              this.ready = true;
            }
            async loadDrafts() {
              this.#tab = 'draft';
              if (this.#drafts.loaded) return;
              await this.#drafts.load({
                type: 'draft',
                route: '/drafts'
              });
              this.ready = true;
            }
            async loadCommunity() {
              this.#tab = 'community';
              if (this.#drafts.loaded) return;
              await this.#community.load({
                type: 'community',
                route: 'community'
              });
              this.ready = true;
            }
            load(type = 'module') {
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
              // this.#drafts.load({ type: 'draft' });
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
        hash: 2066384351,
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
              console.log(tab);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsInRhYiIsInVyaSIsInFzIiwiZ2V0IiwibG9hZCIsImhpZGUiLCJjbGVhciIsImV4cG9ydHMiLCJfbW9kZWwiLCJfbGVhcm5pbmdNb2R1bGVzIiwiUmVhY3RpdmVNb2RlbCIsImRyYWZ0cyIsImRyYWZ0IiwibW9kdWxlcyIsImNvbW11bml0eSIsImNvbnN0cnVjdG9yIiwiZ2xvYmFsVGhpcyIsImMiLCJMZWFybmluZ01vZHVsZXMiLCJsb2FkTW9kdWxlcyIsImxvYWRlZCIsInR5cGUiLCJyb3V0ZSIsInJlYWR5IiwibG9hZERyYWZ0cyIsImxvYWRDb21tdW5pdHkiLCJ0eXBlcyIsImJpbmQiLCJwdWJsaXNoZWQiLCJjb25zb2xlIiwidHJhY2UiLCJFcnJvciIsImRlbGV0ZURyYWZ0IiwiaWQiLCJpdGVtIiwiZWxlbWVudHMiLCJkZWxldGUiLCJfcmVhY3QiLCJMaXN0Q29udGV4dCIsImRlZmF1bHQiLCJjcmVhdGVDb250ZXh0IiwidXNlTGlzdENvbnRleHQiLCJ1c2VDb250ZXh0IiwiUmVhY3QiLCJfY29tcG9uZW50cyIsIl9jb250ZXh0IiwiX3VpIiwiRW1wdHlMaXN0IiwidGV4dHMiLCJjcmVhdGVFbGVtZW50IiwiRW1wdHlDYXJkIiwidGV4dCIsImVtcHR5IiwiZ2VuZXJhbCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpY29uIiwiY2xhc3NOYW1lIiwiTGluayIsImhyZWYiLCJhY3Rpb25zIiwiY3JlYXRlIiwiX25hdmJhckhlYWRlciIsIl9saXN0IiwiX2JleW9uZF9jb250ZXh0IiwiX2hvb2tzIiwiX2hvb2tzMiIsIl9saW5rIiwiX2ljb25zIiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwic2V0UmVhZHkiLCJ1c2VTdGF0ZSIsImZldGNoaW5nIiwidXNlQmluZGVyIiwiUHJlbG9hZFNjcmVlbiIsInZhbHVlIiwiUHJvdmlkZXIiLCJOYXZiYXJIZWFkZXIiLCJicmVhZGNydW1iIiwiUGFnZUNvbnRhaW5lciIsIlBhZ2VUaXRsZSIsIkljb24iLCJMaXN0IiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfb3JnYW5pemF0aW9uc01vZGFsIiwiQ29tbXVuaXR5QWN0aW9ucyIsIm9wZW5Nb2RhbCIsInNldE9wZW5Nb2RhbCIsIm9uVXNlIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJ0b2dnbGVNb2RhbCIsIkJ1dHRvbiIsInZhcmlhbnQiLCJib3JkZXJlZCIsIm9uQ2xpY2siLCJ1c2UiLCJPcmdhbml6YXRpb25zTW9kYWwiLCJvbkNsb3NlIiwiX2FjdGlvbnMiLCJDb21tdW5pdHlJdGVtIiwib2JqZWN0aXZlIiwiRW50aXR5SW1hZ2UiLCJzcmMiLCJwaWN0dXJlIiwiZW50aXR5IiwiYWx0IiwiX21vZGFsIiwiX3Nlc3Npb24iLCJfcm91dGluZyIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiLCJlcnJvciIsInNldEVycm9yIiwic2V0RmV0Y2hpbmciLCJjbG9uZSIsInJlc3BvbnNlIiwic3RhdHVzIiwibG9nIiwiZXJyb3JzIiwiZmFpbGVkIiwicm91dGluZyIsInB1c2hTdGF0ZSIsImRhdGEiLCJJdGVtIiwibmFtZSIsIk1vZGFsIiwiY2xvc2VCYWNrZHJvcCIsIkVycm9yUmVuZGVyZXIiLCJpdGVtcyIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsIm9yZ2FuaXphdGlvbnMiLCJjb250cm9sIiwic3BlY3MiLCJkaXNhYmxlZCIsImNvbnRpbnVlIiwiSXRlbURyYWZ0cyIsIm9uRGVsZXRlIiwiQ29uZmlybUFjdGlvbiIsInRleHRQb3BVcCIsIm9uQ29uZmlybSIsIl9hc3NpZ24iLCJMZWFybmluZ01vZHVsZUFjdGlvbnMiLCJzaGFyZSIsImFzc2lnbiIsIk1vZHVsZUFzc2lnbm1lbnRzIiwiU1RBVFVTX0NPTE9SUyIsInByb2Nlc3NpbmciLCJTdGF0dXMiLCJzeW50aGVzaXMiLCJyZWxldmFuY2UiLCJhc3Nlc3NtZW50IiwiZ2V0U3RhdHVzQ29sb3IiLCJjb2xvciIsImNsYXNzZXMiLCJNb2R1bGVEYXRhIiwiX3RhYnMiLCJfbWFuYWdlTGlzdCIsIl9tb2R1bGUiLCJfZHJhZnRzIiwiX2NvbW11bml0eSIsInRhYnMiLCJ0YWJJbmRleCIsImluZGV4T2YiLCJ0YWJTZWxlY3QiLCJ1c2VUYWJTZWxlY3QiLCJvbkNoYW5nZSIsImluZGV4IiwidXJsUGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwibG9jYXRpb24iLCJzZWFyY2giLCJzZXQiLCJyZXBsYWNlU3RhdGUiLCJkb2N1bWVudCIsInRvU3RyaW5nIiwiRnJhZ21lbnQiLCJUYWJzQ29udGFpbmVyIiwiYWN0aXZlIiwiVGFicyIsIlRhYiIsIlBhbmVzIiwiTWFuYWdlTGlzdCIsImNvbGxlY3Rpb24iLCJwcmV2ZW50TWVzc2FnZSIsImxvYWRpbmdNZXNzYWdlIiwibG9hZGluZyIsIl9lbXB0eSIsInNldEl0ZW1zIiwibGVuZ3RoIiwiRW1wdHkiLCJTcGlubmVyIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9lbXB0eS50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL2ludGVyZmFjZXMudHMiLCIvdHMvdmlld3MvaXRlbS9jb21tdW5pdHkvYWN0aW9ucy50c3giLCIvdHMvdmlld3MvaXRlbS9jb21tdW5pdHkvY29tbXVuaXR5LnRzeCIsIi90cy92aWV3cy9pdGVtL2NvbW11bml0eS9vcmdhbml6YXRpb25zLW1vZGFsLnRzeCIsIi90cy92aWV3cy9pdGVtL2RyYWZ0cy50c3giLCIvdHMvdmlld3MvaXRlbS9tb2R1bGUvYWN0aW9ucy50c3giLCIvdHMvdmlld3MvaXRlbS9tb2R1bGUvbW9kdWxlLnRzeCIsIi90cy92aWV3cy9pdGVtL3N0YXR1cy50c3giLCIvdHMvdmlld3MvaXRlbS90aXRsZS50c3giLCIvdHMvdmlld3MvbGlzdC9pbmRleC50c3giLCIvdHMvdmlld3MvbGlzdC9tYW5hZ2UtbGlzdC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFHTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJSCxNQUFBLENBQUFLLFlBQVksRUFBRTtjQUNoQyxPQUFxQixJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNqQztZQUNBLElBQUlHLE1BQU1BLENBQUE7Y0FDVCxPQUFPUCxNQUFBLENBQUFRLElBQUk7WUFDWjtZQUVBQyxJQUFJQSxDQUFBO2NBQ0gsTUFBTUMsR0FBRyxHQUFHLElBQUksQ0FBQ0MsR0FBRyxDQUFDQyxFQUFFLENBQUNDLEdBQUcsQ0FBQyxLQUFLLENBQUM7Y0FDbEMsSUFBSSxDQUFDLENBQUFULEtBQU0sQ0FBQ1UsSUFBSSxDQUFDSixHQUFHLENBQUM7WUFDdEI7WUFFQUssSUFBSUEsQ0FBQTtjQUNILElBQUksQ0FBQyxDQUFBWCxLQUFNLENBQUNZLEtBQUssRUFBRTtZQUNwQjs7VUFDQUMsT0FBQSxDQUFBZixVQUFBLEdBQUFBLFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDeEJELElBQUFnQixN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