System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@beyond-js/reactive@1.1.12/model", "@aimpact/ailearn-sdk@1.0.0/learning-modules", "react@18.2.0", "pragmate-ui@0.1.1/components", "@aimpact/ailearn-app@0.0.46.dev-04/components/ui", "@aimpact/chat@1.0.1/shared/components", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.1.1/link", "pragmate-ui@0.1.1/icons", "pragmate-ui@0.1.1/modal", "pragmate-ui@0.1.1/list", "@aimpact/chat-sdk@1.0.0/session", "@beyond-js/kernel@0.1.9/routing", "@aimpact/ailearn-app@0.0.46.dev-04/modules/assign", "pragmate-ui@0.1.1/tabs", "pragmate-ui@0.1.1/empty"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
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
    }, function (_aimpactAilearnApp0046Dev04ComponentsUi) {
      dependency_8 = _aimpactAilearnApp0046Dev04ComponentsUi;
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
    }, function (_beyondJsKernel019Routing) {
      dependency_17 = _beyondJsKernel019Routing;
    }, function (_aimpactAilearnApp0046Dev04ModulesAssign) {
      dependency_18 = _aimpactAilearnApp0046Dev04ModulesAssign;
    }, function (_pragmateUi011Tabs) {
      dependency_19 = _pragmateUi011Tabs;
    }, function (_pragmateUi011Empty) {
      dependency_20 = _pragmateUi011Empty;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.0.46.dev-04"], ["@aimpact/ailearn-app", "0.0.46.dev-04"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.46.dev-04/modules/list",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@aimpact/ailearn-sdk/learning-modules', dependency_5], ['react', dependency_6], ['pragmate-ui/components', dependency_7], ['@aimpact/ailearn-app/components/ui', dependency_8], ['@aimpact/chat/shared/components', dependency_9], ['@beyond-js/react-18-widgets/hooks', dependency_10], ['@aimpact/chat/shared/hooks', dependency_11], ['pragmate-ui/link', dependency_12], ['pragmate-ui/icons', dependency_13], ['pragmate-ui/modal', dependency_14], ['pragmate-ui/list', dependency_15], ['@aimpact/chat-sdk/session', dependency_16], ['@beyond-js/kernel/routing', dependency_17], ['@aimpact/ailearn-app/modules/assign', dependency_18], ['pragmate-ui/tabs', dependency_19], ['pragmate-ui/empty', dependency_20]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-modules-list",
        "vspecifier": "@aimpact/ailearn-app@0.0.46.dev-04/modules/list.widget",
        "is": "page",
        "route": "/modules/list",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.46.dev-04/modules/list.widget');
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
        hash: 3407815072,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _react = require("react");
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
            }, _react.default.createElement(_ui.PageContainer, null, _react.default.createElement(_ui.PageTitle, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsInRhYiIsInVyaSIsInFzIiwiZ2V0IiwibG9hZCIsImhpZGUiLCJjbGVhciIsImV4cG9ydHMiLCJfbW9kZWwiLCJfbGVhcm5pbmdNb2R1bGVzIiwiUmVhY3RpdmVNb2RlbCIsImRyYWZ0cyIsImRyYWZ0IiwibW9kdWxlcyIsImNvbW11bml0eSIsImNvbnN0cnVjdG9yIiwiZ2xvYmFsVGhpcyIsImMiLCJMZWFybmluZ01vZHVsZXMiLCJyZWFkeSIsImxvYWRNb2R1bGVzIiwibG9hZGVkIiwidHlwZSIsInJvdXRlIiwib3JkZXJCeSIsImxvYWREcmFmdHMiLCJsb2FkQ29tbXVuaXR5IiwidHlwZXMiLCJiaW5kIiwicHVibGlzaGVkIiwiY29uc29sZSIsInRyYWNlIiwiRXJyb3IiLCJkZWxldGVEcmFmdCIsImlkIiwiaXRlbSIsImVsZW1lbnRzIiwiZGVsZXRlIiwidHJpZ2dlckV2ZW50IiwiX3JlYWN0IiwiTGlzdENvbnRleHQiLCJkZWZhdWx0IiwiY3JlYXRlQ29udGV4dCIsInVzZUxpc3RDb250ZXh0IiwidXNlQ29udGV4dCIsIlJlYWN0IiwiX2NvbXBvbmVudHMiLCJfY29udGV4dCIsIl91aSIsIkVtcHR5TGlzdCIsInRleHRzIiwiY3JlYXRlRWxlbWVudCIsIkVtcHR5Q2FyZCIsInRleHQiLCJlbXB0eSIsImdlbmVyYWwiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaWNvbiIsImNsYXNzTmFtZSIsIkxpbmsiLCJocmVmIiwiYWN0aW9ucyIsImNyZWF0ZSIsIl9saXN0IiwiX2JleW9uZF9jb250ZXh0IiwiX2hvb2tzIiwiX2hvb2tzMiIsIl9saW5rIiwiX2ljb25zIiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwic2V0UmVhZHkiLCJ1c2VTdGF0ZSIsImZldGNoaW5nIiwidXNlQmluZGVyIiwiUHJlbG9hZFNjcmVlbiIsInZhbHVlIiwiUHJvdmlkZXIiLCJQYWdlQ29udGFpbmVyIiwiUGFnZVRpdGxlIiwiSWNvbiIsIkxpc3QiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsIl9vcmdhbml6YXRpb25zTW9kYWwiLCJDb21tdW5pdHlBY3Rpb25zIiwib3Blbk1vZGFsIiwic2V0T3Blbk1vZGFsIiwib25Vc2UiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsInRvZ2dsZU1vZGFsIiwiQnV0dG9uIiwidmFyaWFudCIsImJvcmRlcmVkIiwib25DbGljayIsInVzZSIsIk9yZ2FuaXphdGlvbnNNb2RhbCIsIm9uQ2xvc2UiLCJfYWN0aW9ucyIsIkNvbW11bml0eUl0ZW0iLCJvYmplY3RpdmUiLCJFbnRpdHlJbWFnZSIsInNyYyIsInBpY3R1cmUiLCJlbnRpdHkiLCJhbHQiLCJfbW9kYWwiLCJfc2Vzc2lvbiIsIl9yb3V0aW5nIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsImVycm9yIiwic2V0RXJyb3IiLCJzZXRGZXRjaGluZyIsImNsb25lIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJsb2ciLCJlcnJvcnMiLCJmYWlsZWQiLCJyb3V0aW5nIiwicHVzaFN0YXRlIiwiZGF0YSIsIkl0ZW0iLCJuYW1lIiwiTW9kYWwiLCJjbG9zZUJhY2tkcm9wIiwiRXJyb3JSZW5kZXJlciIsIml0ZW1zIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwib3JnYW5pemF0aW9ucyIsImNvbnRyb2wiLCJzcGVjcyIsImRpc2FibGVkIiwiY29udGludWUiLCJJdGVtRHJhZnRzIiwib25EZWxldGUiLCJDb25maXJtQWN0aW9uIiwidGV4dFBvcFVwIiwib25Db25maXJtIiwiX2Fzc2lnbiIsIkxlYXJuaW5nTW9kdWxlQWN0aW9ucyIsInNoYXJlIiwiYXNzaWduIiwiTW9kdWxlQXNzaWdubWVudHMiLCJTVEFUVVNfQ09MT1JTIiwicHJvY2Vzc2luZyIsIlN0YXR1cyIsInN5bnRoZXNpcyIsInJlbGV2YW5jZSIsImFzc2Vzc21lbnQiLCJnZXRTdGF0dXNDb2xvciIsImNvbG9yIiwiY2xhc3NlcyIsIk1vZHVsZURhdGEiLCJfdGFicyIsIl9tYW5hZ2VMaXN0IiwiX21vZHVsZSIsIl9kcmFmdHMiLCJfY29tbXVuaXR5IiwidGFicyIsInRhYkluZGV4IiwiaW5kZXhPZiIsInRhYlNlbGVjdCIsInVzZVRhYlNlbGVjdCIsIm9uQ2hhbmdlIiwiaW5kZXgiLCJ1cmxQYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJsb2NhdGlvbiIsInNlYXJjaCIsInNldCIsInJlcGxhY2VTdGF0ZSIsImRvY3VtZW50IiwidG9TdHJpbmciLCJGcmFnbWVudCIsIlRhYnNDb250YWluZXIiLCJhY3RpdmUiLCJUYWJzIiwiVGFiIiwiUGFuZXMiLCJNYW5hZ2VMaXN0IiwiY29sbGVjdGlvbiIsInByZXZlbnRNZXNzYWdlIiwibG9hZGluZ01lc3NhZ2UiLCJsb2FkaW5nIiwiX2VtcHR5Iiwic2V0SXRlbXMiLCJsZW5ndGgiLCJFbXB0eSIsIlNwaW5uZXIiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2VtcHR5LnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvaW50ZXJmYWNlcy50cyIsIi90cy92aWV3cy9pdGVtL2NvbW11bml0eS9hY3Rpb25zLnRzeCIsIi90cy92aWV3cy9pdGVtL2NvbW11bml0eS9jb21tdW5pdHkudHN4IiwiL3RzL3ZpZXdzL2l0ZW0vY29tbXVuaXR5L29yZ2FuaXphdGlvbnMtbW9kYWwudHN4IiwiL3RzL3ZpZXdzL2l0ZW0vZHJhZnRzLnRzeCIsIi90cy92aWV3cy9pdGVtL21vZHVsZS9hY3Rpb25zLnRzeCIsIi90cy92aWV3cy9pdGVtL21vZHVsZS9tb2R1bGUudHN4IiwiL3RzL3ZpZXdzL2l0ZW0vc3RhdHVzLnRzeCIsIi90cy92aWV3cy9pdGVtL3RpdGxlLnRzeCIsIi90cy92aWV3cy9saXN0L2luZGV4LnRzeCIsIi90cy92aWV3cy9saXN0L21hbmFnZS1saXN0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBR087VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUgsTUFBQSxDQUFBSyxZQUFZLEVBQUU7Y0FDaEMsT0FBcUIsSUFBSSxDQUFDLENBQUFGLEtBQU07WUFDakM7WUFDQSxJQUFJRyxNQUFNQSxDQUFBO2NBQ1QsT0FBT1AsTUFBQSxDQUFBUSxJQUFJO1lBQ1o7WUFFQUMsSUFBSUEsQ0FBQTtjQUNILE1BQU1DLEdBQUcsR0FBRyxJQUFJLENBQUNDLEdBQUcsQ0FBQ0MsRUFBRSxDQUFDQyxHQUFHLENBQUMsS0FBSyxDQUFDO2NBQ2xDLElBQUksQ0FBQyxDQUFBVCxLQUFNLENBQUNVLElBQUksQ0FBQ0osR0FBRyxDQUFDO1lBQ3RCO1lBRUFLLElBQUlBLENBQUE7Y0FDSCxJQUFJLENBQUMsQ0FBQVgsS0FBTSxDQUFDWSxLQUFLLEVBQUU7WUFDcEI7O1VBQ0FDLE9BQUEsQ0FBQWYsVUFBQSxHQUFBQSxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3hCRCxJQUFBZ0IsTUFBQSxHQUFBbkIsT0FBQTtVQUNBLElB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