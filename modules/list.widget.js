System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/react-18-widgets@1.1.2/page", "@beyond-js/reactive@1.1.12/model", "@aimpact/ailearn-sdk@1.0.0/learning-modules", "react@18.2.0", "pragmate-ui@0.1.1/components", "@aimpact/ailearn-app@0.0.32/components/ui", "@aimpact/ailearn-app@0.0.32/components/navbar-header.code", "@aimpact/chat@1.0.1/shared/components", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.1.1/link", "pragmate-ui@0.1.1/icons", "pragmate-ui@0.1.1/modal", "pragmate-ui@0.1.1/list", "@aimpact/chat-sdk@1.0.0/session", "pragmate-ui@0.1.1/image", "@aimpact/ailearn-app@0.0.32/modules/assign", "pragmate-ui@0.1.1/tabs", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@0.1.1/empty"], function (_export, _context2) {
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
    }, function (_beyondJsReact18Widgets112Page) {
      dependency_2 = _beyondJsReact18Widgets112Page;
    }, function (_beyondJsReactive1112Model) {
      dependency_3 = _beyondJsReactive1112Model;
    }, function (_aimpactAilearnSdk100LearningModules) {
      dependency_4 = _aimpactAilearnSdk100LearningModules;
    }, function (_react2) {
      dependency_5 = _react2;
    }, function (_pragmateUi011Components) {
      dependency_6 = _pragmateUi011Components;
    }, function (_aimpactAilearnApp0032ComponentsUi) {
      dependency_7 = _aimpactAilearnApp0032ComponentsUi;
    }, function (_aimpactAilearnApp0032ComponentsNavbarHeaderCode) {
      dependency_8 = _aimpactAilearnApp0032ComponentsNavbarHeaderCode;
    }, function (_aimpactChat101SharedComponents) {
      dependency_9 = _aimpactChat101SharedComponents;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_10 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactChat101SharedHooks) {
      dependency_11 = _aimpactChat101SharedHooks;
    }, function (_pragmateUi011Link) {
      dependency_12 = _pragmateUi011Link;
    }, function (_pragmateUi011Icons) {
      dependency_13 = _pragmateUi011Icons;
    }, function (_pragmateUi011Modal) {
      dependency_14 = _pragmateUi011Modal;
    }, function (_pragmateUi011List) {
      dependency_15 = _pragmateUi011List;
    }, function (_aimpactChatSdk100Session) {
      dependency_16 = _aimpactChatSdk100Session;
    }, function (_pragmateUi011Image) {
      dependency_17 = _pragmateUi011Image;
    }, function (_aimpactAilearnApp0032ModulesAssign) {
      dependency_18 = _aimpactAilearnApp0032ModulesAssign;
    }, function (_pragmateUi011Tabs) {
      dependency_19 = _pragmateUi011Tabs;
    }, function (_beyondJsKernel019Routing) {
      dependency_20 = _beyondJsKernel019Routing;
    }, function (_pragmateUi011Empty) {
      dependency_21 = _pragmateUi011Empty;
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-18-widgets/page', dependency_2], ['@beyond-js/reactive/model', dependency_3], ['@aimpact/ailearn-sdk/learning-modules', dependency_4], ['react', dependency_5], ['pragmate-ui/components', dependency_6], ['@aimpact/ailearn-app/components/ui', dependency_7], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_8], ['@aimpact/chat/shared/components', dependency_9], ['@beyond-js/react-18-widgets/hooks', dependency_10], ['@aimpact/chat/shared/hooks', dependency_11], ['pragmate-ui/link', dependency_12], ['pragmate-ui/icons', dependency_13], ['pragmate-ui/modal', dependency_14], ['pragmate-ui/list', dependency_15], ['@aimpact/chat-sdk/session', dependency_16], ['pragmate-ui/image', dependency_17], ['@aimpact/ailearn-app/modules/assign', dependency_18], ['pragmate-ui/tabs', dependency_19], ['@beyond-js/kernel/routing', dependency_20], ['pragmate-ui/empty', dependency_21]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsInRhYiIsInVyaSIsInFzIiwiZ2V0IiwibG9hZCIsImhpZGUiLCJjbGVhciIsImV4cG9ydHMiLCJfbW9kZWwiLCJfbGVhcm5pbmdNb2R1bGVzIiwiUmVhY3RpdmVNb2RlbCIsImRyYWZ0cyIsImRyYWZ0IiwibW9kdWxlcyIsImNvbW11bml0eSIsImNvbnN0cnVjdG9yIiwiZ2xvYmFsVGhpcyIsImMiLCJMZWFybmluZ01vZHVsZXMiLCJsb2FkTW9kdWxlcyIsImxvYWRlZCIsInR5cGUiLCJyb3V0ZSIsInJlYWR5IiwibG9hZERyYWZ0cyIsImxvYWRDb21tdW5pdHkiLCJ0eXBlcyIsImJpbmQiLCJwdWJsaXNoZWQiLCJjb25zb2xlIiwidHJhY2UiLCJFcnJvciIsImRlbGV0ZURyYWZ0IiwiaWQiLCJpdGVtIiwiZWxlbWVudHMiLCJkZWxldGUiLCJfcmVhY3QiLCJMaXN0Q29udGV4dCIsImRlZmF1bHQiLCJjcmVhdGVDb250ZXh0IiwidXNlTGlzdENvbnRleHQiLCJ1c2VDb250ZXh0IiwiUmVhY3QiLCJfY29tcG9uZW50cyIsIl9jb250ZXh0IiwiX3VpIiwiRW1wdHlMaXN0IiwidGV4dHMiLCJjcmVhdGVFbGVtZW50IiwiRW1wdHlDYXJkIiwidGV4dCIsImVtcHR5IiwiZ2VuZXJhbCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpY29uIiwiY2xhc3NOYW1lIiwiTGluayIsImhyZWYiLCJhY3Rpb25zIiwiY3JlYXRlIiwiX25hdmJhckhlYWRlciIsIl9saXN0IiwiX2JleW9uZF9jb250ZXh0IiwiX2hvb2tzIiwiX2hvb2tzMiIsIl9saW5rIiwiX2ljb25zIiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwic2V0UmVhZHkiLCJ1c2VTdGF0ZSIsImZldGNoaW5nIiwidXNlQmluZGVyIiwiUHJlbG9hZFNjcmVlbiIsInZhbHVlIiwiUHJvdmlkZXIiLCJOYXZiYXJIZWFkZXIiLCJicmVhZGNydW1iIiwiUGFnZUNvbnRhaW5lciIsIlBhZ2VUaXRsZSIsIkljb24iLCJMaXN0IiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfb3JnYW5pemF0aW9uc01vZGFsIiwiQ29tbXVuaXR5QWN0aW9ucyIsIm9wZW5Nb2RhbCIsInNldE9wZW5Nb2RhbCIsIm9uVXNlIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJ0b2dnbGVNb2RhbCIsIkJ1dHRvbiIsInZhcmlhbnQiLCJib3JkZXJlZCIsIm9uQ2xpY2siLCJ1c2UiLCJPcmdhbml6YXRpb25zTW9kYWwiLCJvbkNsb3NlIiwiX2FjdGlvbnMiLCJDb21tdW5pdHlJdGVtIiwib2JqZWN0aXZlIiwiRW50aXR5SW1hZ2UiLCJzcmMiLCJwaWN0dXJlIiwiZW50aXR5IiwiYWx0IiwiX21vZGFsIiwiX3Nlc3Npb24iLCJfcm91dGluZyIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiLCJlcnJvciIsInNldEVycm9yIiwic2V0RmV0Y2hpbmciLCJjbG9uZSIsInJlc3BvbnNlIiwic3RhdHVzIiwibG9nIiwiZXJyb3JzIiwiZmFpbGVkIiwicm91dGluZyIsInB1c2hTdGF0ZSIsImRhdGEiLCJJdGVtIiwibmFtZSIsIk1vZGFsIiwiY2xvc2VCYWNrZHJvcCIsIkVycm9yUmVuZGVyZXIiLCJpdGVtcyIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsIm9yZ2FuaXphdGlvbnMiLCJjb250cm9sIiwic3BlY3MiLCJkaXNhYmxlZCIsImNvbnRpbnVlIiwiSXRlbURyYWZ0cyIsIm9uRGVsZXRlIiwiQ29uZmlybUFjdGlvbiIsInRleHRQb3BVcCIsIm9uQ29uZmlybSIsIl9hc3NpZ24iLCJMZWFybmluZ01vZHVsZUFjdGlvbnMiLCJzaGFyZSIsImFzc2lnbiIsIk1vZHVsZUFzc2lnbm1lbnRzIiwiU1RBVFVTX0NPTE9SUyIsInByb2Nlc3NpbmciLCJTdGF0dXMiLCJzeW50aGVzaXMiLCJyZWxldmFuY2UiLCJhc3Nlc3NtZW50IiwiZ2V0U3RhdHVzQ29sb3IiLCJjb2xvciIsImNsYXNzZXMiLCJNb2R1bGVEYXRhIiwiX3RhYnMiLCJfbWFuYWdlTGlzdCIsIl9tb2R1bGUiLCJfZHJhZnRzIiwiX2NvbW11bml0eSIsInRhYnMiLCJ0YWJJbmRleCIsImluZGV4T2YiLCJ0YWJTZWxlY3QiLCJ1c2VUYWJTZWxlY3QiLCJvbkNoYW5nZSIsImluZGV4IiwidXJsUGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwibG9jYXRpb24iLCJzZWFyY2giLCJzZXQiLCJyZXBsYWNlU3RhdGUiLCJkb2N1bWVudCIsInRvU3RyaW5nIiwiRnJhZ21lbnQiLCJUYWJzQ29udGFpbmVyIiwiYWN0aXZlIiwiVGFicyIsIlRhYiIsIlBhbmVzIiwiTWFuYWdlTGlzdCIsImNvbGxlY3Rpb24iLCJwcmV2ZW50TWVzc2FnZSIsImxvYWRpbmdNZXNzYWdlIiwibG9hZGluZyIsIl9lbXB0eSIsInNldEl0ZW1zIiwibGVuZ3RoIiwiRW1wdHkiLCJTcGlubmVyIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9lbXB0eS50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL2ludGVyZmFjZXMudHMiLCIvdHMvdmlld3MvaXRlbS9jb21tdW5pdHkvYWN0aW9ucy50c3giLCIvdHMvdmlld3MvaXRlbS9jb21tdW5pdHkvY29tbXVuaXR5LnRzeCIsIi90cy92aWV3cy9pdGVtL2NvbW11bml0eS9vcmdhbml6YXRpb25zLW1vZGFsLnRzeCIsIi90cy92aWV3cy9pdGVtL2RyYWZ0cy50c3giLCIvdHMvdmlld3MvaXRlbS9tb2R1bGUvYWN0aW9ucy50c3giLCIvdHMvdmlld3MvaXRlbS9tb2R1bGUvbW9kdWxlLnRzeCIsIi90cy92aWV3cy9pdGVtL3N0YXR1cy50c3giLCIvdHMvdmlld3MvaXRlbS90aXRsZS50c3giLCIvdHMvdmlld3MvbGlzdC9pbmRleC50c3giLCIvdHMvdmlld3MvbGlzdC9tYW5hZ2UtbGlzdC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBR087VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUgsTUFBQSxDQUFBSyxZQUFZLEVBQUU7Y0FDaEMsT0FBcUIsSUFBSSxDQUFDLENBQUFGLEtBQU07WUFDakM7WUFDQSxJQUFJRyxNQUFNQSxDQUFBO2NBQ1QsT0FBT1AsTUFBQSxDQUFBUSxJQUFJO1lBQ1o7WUFFQUMsSUFBSUEsQ0FBQTtjQUNILE1BQU1DLEdBQUcsR0FBRyxJQUFJLENBQUNDLEdBQUcsQ0FBQ0MsRUFBRSxDQUFDQyxHQUFHLENBQUMsS0FBSyxDQUFDO2NBQ2xDLElBQUksQ0FBQyxDQUFBVCxLQUFNLENBQUNVLElBQUksQ0FBQ0osR0FBRyxDQUFDO1lBQ3RCO1lBRUFLLElBQUlBLENBQUE7Y0FDSCxJQUFJLENBQUMsQ0FBQVgsS0FBTSxDQUFDWSxLQUFLLEVBQUU7WUFDcEI7O1VBQ0FDLE9BQUEsQ0FBQWYsVUFBQSxHQUFBQSxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3hCRCxJQUFBZ0IsTUFB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