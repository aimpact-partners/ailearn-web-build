System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.1.1/main-layout.widget", "@beyond-js/reactive@1.2.0/model", "@aimpact/ailearn-sdk@1.0.0/learning-modules", "@beyond-js/kernel@0.1.9/texts", "@aimpact/ailearn-app@0.1.1/config", "react@18.2.0", "pragmate-ui@1.0.0-beta.1/components", "@aimpact/ailearn-app@0.1.1/components/ui", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.1/icons", "pragmate-ui@1.0.0-beta.1/link", "pragmate-ui@1.0.0-beta.1/modal", "pragmate-ui@1.0.0-beta.1/list", "@aimpact/chat-sdk@1.0.1/session", "@beyond-js/kernel@0.1.9/routing", "@aimpact/ailearn-app@0.1.1/modules/assign", "pragmate-ui@1.0.0-beta.1/tabs", "pragmate-ui@1.0.0-beta.1/empty"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp011MainLayoutWidget) {
      dependency_4 = _aimpactAilearnApp011MainLayoutWidget;
    }, function (_beyondJsReactive120Model) {
      dependency_5 = _beyondJsReactive120Model;
    }, function (_aimpactAilearnSdk100LearningModules) {
      dependency_6 = _aimpactAilearnSdk100LearningModules;
    }, function (_beyondJsKernel019Texts) {
      dependency_7 = _beyondJsKernel019Texts;
    }, function (_aimpactAilearnApp011Config) {
      dependency_8 = _aimpactAilearnApp011Config;
    }, function (_react2) {
      dependency_9 = _react2;
    }, function (_pragmateUi100Beta1Components) {
      dependency_10 = _pragmateUi100Beta1Components;
    }, function (_aimpactAilearnApp011ComponentsUi) {
      dependency_11 = _aimpactAilearnApp011ComponentsUi;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_12 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi100Beta1Icons) {
      dependency_13 = _pragmateUi100Beta1Icons;
    }, function (_pragmateUi100Beta1Link) {
      dependency_14 = _pragmateUi100Beta1Link;
    }, function (_pragmateUi100Beta1Modal) {
      dependency_15 = _pragmateUi100Beta1Modal;
    }, function (_pragmateUi100Beta1List) {
      dependency_16 = _pragmateUi100Beta1List;
    }, function (_aimpactChatSdk101Session) {
      dependency_17 = _aimpactChatSdk101Session;
    }, function (_beyondJsKernel019Routing) {
      dependency_18 = _beyondJsKernel019Routing;
    }, function (_aimpactAilearnApp011ModulesAssign) {
      dependency_19 = _aimpactAilearnApp011ModulesAssign;
    }, function (_pragmateUi100Beta1Tabs) {
      dependency_20 = _pragmateUi100Beta1Tabs;
    }, function (_pragmateUi100Beta1Empty) {
      dependency_21 = _pragmateUi100Beta1Empty;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.2"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.1"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.1.1"], ["@aimpact/ailearn-app", "0.1.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.1/modules/list",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/main-layout.widget', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/ailearn-sdk/learning-modules', dependency_6], ['@beyond-js/kernel/texts', dependency_7], ['@aimpact/ailearn-app/config', dependency_8], ['react', dependency_9], ['pragmate-ui/components', dependency_10], ['@aimpact/ailearn-app/components/ui', dependency_11], ['@beyond-js/react-18-widgets/hooks', dependency_12], ['pragmate-ui/icons', dependency_13], ['pragmate-ui/link', dependency_14], ['pragmate-ui/modal', dependency_15], ['pragmate-ui/list', dependency_16], ['@aimpact/chat-sdk/session', dependency_17], ['@beyond-js/kernel/routing', dependency_18], ['@aimpact/ailearn-app/modules/assign', dependency_19], ['pragmate-ui/tabs', dependency_20], ['pragmate-ui/empty', dependency_21]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-modules-list",
        "vspecifier": "@aimpact/ailearn-app@0.1.1/modules/list.widget",
        "is": "page",
        "route": "/modules/list",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.1/modules/list.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 2233299519,
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
              this.#store.init();
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
        hash: 2709789408,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
          var _model = require("@beyond-js/reactive/model");
          var _learningModules = require("@aimpact/ailearn-sdk/learning-modules");
          var _texts = require("@beyond-js/kernel/texts");
          var _beyond_context = require("beyond_context");
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
            #texts = new _texts.CurrentTexts(_beyond_context.module.specifier);
            get texts() {
              return this.#texts?.value;
            }
            get ready() {
              return super.ready && this.#texts.ready;
            }
            constructor() {
              super();
              this.#drafts = new _learningModules.LearningModules();
              this.#modules = new _learningModules.LearningModules();
              this.#community = new _learningModules.LearningModules();
            }
            init() {
              this.#texts.on('change', this.listenTexts);
              this.listenTexts();
            }
            listenTexts = () => {
              if (!this.#texts.ready) return;
              this.setBreadcrumb();
              this.triggerEvent();
            };
            clear() {
              super.ready = false;
              this.#texts.off('change', this.listenTexts);
            }
            setBreadcrumb() {
              _mainLayout.LayoutBroker.overlay = false;
              globalThis.setTimeout(() => {
                _mainLayout.LayoutBroker.breadcrumb = [[this.texts.breadcrumb.modules]];
              }, 100);
            }
            async loadModules() {
              this.#tab = 'published';
              if (this.#modules.loaded) return;
              await this.#modules.load({
                type: 'module',
                route: ''
              });
              globalThis.m = this.#modules;
              super.ready = true;
            }
            async loadDrafts() {
              this.#tab = 'draft';
              if (this.#drafts.loaded) return;
              await this.#drafts.load({
                type: 'draft',
                route: '/drafts'
              });
              super.ready = true;
            }
            async loadCommunity() {
              this.#tab = 'community';
              if (this.#drafts.loaded) return;
              await this.#community.load({
                type: 'community',
                route: 'community'
              });
              super.ready = true;
            }
            load(type = 'published') {
              const types = {
                community: this.loadCommunity.bind(this),
                draft: this.loadDrafts.bind(this),
                published: this.loadModules.bind(this)
              };
              if (!types[type]) {
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
        hash: 3363034584,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _react = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _icons = require("pragmate-ui/icons");
          var _link = require("pragmate-ui/link");
          var _context = require("./context");
          var _list = require("./list");
          /*bundle*/
          function View({
            store
          }) {
            const [ready, setReady] = (0, _react.useState)(store.ready);
            const [fetching] = (0, _react.useState)(store.fetching);
            const {
              texts
            } = store;
            (0, _hooks.useBinder)([store], () => setReady(store.ready));
            if (!ready) return _react.default.createElement(_ui.PageLoader, {
              fetching: true
            });
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
        hash: 1566956740,
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
        hash: 2763903222,
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
            const ownerData = item.owner ?? item.creator;
            return React.createElement("article", {
              className: "entity__item"
            }, React.createElement(_ui.EntityImage, {
              src: item.picture,
              entity: "module",
              alt: title
            }), React.createElement("section", {
              className: "entity__item-content"
            }, React.createElement(_ui.UserData, {
              data: ownerData
            }), React.createElement("h4", null, title), React.createElement("span", null, description)), React.createElement(_actions.default, {
              module: item
            }));
          }
        }
      });

      /**********************************************************
      INTERNAL MODULE: ./views/item/community/organizations-modal
      **********************************************************/

      ims.set('./views/item/community/organizations-modal', {
        hash: 3363988201,
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

      /***********************************
      INTERNAL MODULE: ./views/item/drafts
      ***********************************/

      ims.set('./views/item/drafts', {
        hash: 4252064745,
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
            const ownerData = item.owner ?? item.creator;
            return React.createElement("article", {
              className: "entity__item entity__item--clickable"
            }, React.createElement(_ui.EntityImage, {
              src: item.picture,
              entity: "module",
              alt: title
            }), React.createElement("section", {
              className: "entity__item-content"
            }, React.createElement(_ui.UserData, {
              data: ownerData
            }), React.createElement(_components.Link, {
              href: `/modules/management?id=${item.id}`
            }, React.createElement("h6", null, title ?? objective), React.createElement("span", null, description))), React.createElement("footer", {
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
        hash: 58890432,
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
        hash: 2749250769,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Item = Item;
          var React = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
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
            const ownerData = item.owner ?? item.creator;
            const [updated, setUpdated] = React.useState(item.getProperties());
            (0, _hooks.useBinder)([item], () => {
              globalThis.item = item;
              setUpdated(item.getProperties());
            });
            return React.createElement("article", {
              className: "entity__item"
            }, React.createElement(_ui.EntityImage, {
              src: item.picture,
              entity: "module",
              alt: title
            }), React.createElement("section", {
              className: "entity__item-content"
            }, React.createElement(_ui.UserData, {
              data: ownerData
            }), React.createElement("h4", null, title), React.createElement("span", null, description)), React.createElement(_actions.default, {
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
        hash: 556067692,
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
              name: "draft",
              collection: store.draft,
              control: _drafts.ItemDrafts,
              preventMessage: texts.empty.drafts,
              loadingMessage: texts.loading
            }), _react.default.createElement(_manageList.ManageList, {
              collection: store.modules,
              name: "modules",
              control: _module.Item,
              className: "module-list",
              preventMessage: texts.empty.published,
              loadingMessage: texts.loading
            }), _react.default.createElement(_manageList.ManageList, {
              collection: store.community,
              name: "community",
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
        hash: 3872716135,
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
          var _context = require("../context");
          function ManageList({
            name,
            className,
            control,
            preventMessage
          }) {
            const {
              store
            } = (0, _context.useListContext)();
            if (!store[name]) {
              throw new Error(`The store ${name} is not defined`);
            }
            const collection = store[name];
            const [data, setData] = React.useState({
              items: collection.items,
              fetching: collection.fetching,
              total: collection.items?.length
            }); // [1
            (0, _hooks.useBinder)([store[name]], () => {
              setData({
                ...data,
                items: store[name].items,
                fetching: store[name].fetching,
                total: store[name].items?.length
              });
            });
            if (data.fetching && !data.total) {
              return React.createElement(_empty.Empty, {
                className: "loading-list-page"
              }, React.createElement(_components.Spinner, {
                active: true
              }));
            }
            if (!store[name].items?.length && !store[name].fetching) {
              return React.createElement(_ui.EmptyCard, {
                text: preventMessage.title,
                description: preventMessage.description,
                icon: "info"
              });
            }
            return React.createElement(React.Fragment, null, React.createElement(_list.List, {
              className: "entity__list mt-15",
              items: store[name].items,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsInRhYiIsInVyaSIsInFzIiwiZ2V0IiwiaW5pdCIsImxvYWQiLCJoaWRlIiwiY2xlYXIiLCJleHBvcnRzIiwiX21haW5MYXlvdXQiLCJfbW9kZWwiLCJfbGVhcm5pbmdNb2R1bGVzIiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiUmVhY3RpdmVNb2RlbCIsImRyYWZ0cyIsImRyYWZ0IiwibW9kdWxlcyIsImNvbW11bml0eSIsInRleHRzIiwiQ3VycmVudFRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidmFsdWUiLCJyZWFkeSIsImNvbnN0cnVjdG9yIiwiTGVhcm5pbmdNb2R1bGVzIiwib24iLCJsaXN0ZW5UZXh0cyIsInNldEJyZWFkY3J1bWIiLCJ0cmlnZ2VyRXZlbnQiLCJvZmYiLCJMYXlvdXRCcm9rZXIiLCJvdmVybGF5IiwiZ2xvYmFsVGhpcyIsInNldFRpbWVvdXQiLCJicmVhZGNydW1iIiwibG9hZE1vZHVsZXMiLCJsb2FkZWQiLCJ0eXBlIiwicm91dGUiLCJtIiwibG9hZERyYWZ0cyIsImxvYWRDb21tdW5pdHkiLCJ0eXBlcyIsImJpbmQiLCJwdWJsaXNoZWQiLCJFcnJvciIsImRlbGV0ZURyYWZ0IiwiaWQiLCJpdGVtIiwiZWxlbWVudHMiLCJkZWxldGUiLCJfcmVhY3QiLCJMaXN0Q29udGV4dCIsImRlZmF1bHQiLCJjcmVhdGVDb250ZXh0IiwidXNlTGlzdENvbnRleHQiLCJ1c2VDb250ZXh0IiwiUmVhY3QiLCJfY29tcG9uZW50cyIsIl9jb250ZXh0IiwiX3VpIiwiRW1wdHlMaXN0IiwiY3JlYXRlRWxlbWVudCIsIkVtcHR5Q2FyZCIsInRleHQiLCJlbXB0eSIsImdlbmVyYWwiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaWNvbiIsImNsYXNzTmFtZSIsIkxpbmsiLCJocmVmIiwiYWN0aW9ucyIsImNyZWF0ZSIsIl9ob29rcyIsIl9pY29ucyIsIl9saW5rIiwiX2xpc3QiLCJzZXRSZWFkeSIsInVzZVN0YXRlIiwiZmV0Y2hpbmciLCJ1c2VCaW5kZXIiLCJQYWdlTG9hZGVyIiwiUHJvdmlkZXIiLCJQYWdlQ29udGFpbmVyIiwiUGFnZVRpdGxlIiwiSWNvbiIsIkxpc3QiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsIl9vcmdhbml6YXRpb25zTW9kYWwiLCJDb21tdW5pdHlBY3Rpb25zIiwib3Blbk1vZGFsIiwic2V0T3Blbk1vZGFsIiwib25Vc2UiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsInRvZ2dsZU1vZGFsIiwiQnV0dG9uIiwidmFyaWFudCIsImJvcmRlcmVkIiwib25DbGljayIsInVzZSIsIk9yZ2FuaXphdGlvbnNNb2RhbCIsIm9uQ2xvc2UiLCJfYWN0aW9ucyIsIkNvbW11bml0eUl0ZW0iLCJvYmplY3RpdmUiLCJvd25lckRhdGEiLCJvd25lciIsImNyZWF0b3IiLCJFbnRpdHlJbWFnZSIsInNyYyIsInBpY3R1cmUiLCJlbnRpdHkiLCJhbHQiLCJVc2VyRGF0YSIsImRhdGEiLCJfbW9kYWwiLCJfc2Vzc2lvbiIsIl9yb3V0aW5nIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsImVycm9yIiwic2V0RXJyb3IiLCJzZXRGZXRjaGluZyIsImNsb25lIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJjb25zb2xlIiwibG9nIiwiZXJyb3JzIiwiZmFpbGVkIiwicm91dGluZyIsInB1c2hTdGF0ZSIsIkl0ZW0iLCJuYW1lIiwiTW9kYWwiLCJjbG9zZUJhY2tkcm9wIiwiRXJyb3JSZW5kZXJlciIsIml0ZW1zIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwib3JnYW5pemF0aW9ucyIsImNvbnRyb2wiLCJzcGVjcyIsImRpc2FibGVkIiwiY29udGludWUiLCJJdGVtRHJhZnRzIiwib25EZWxldGUiLCJDb25maXJtQWN0aW9uIiwidGV4dFBvcFVwIiwib25Db25maXJtIiwiX2Fzc2lnbiIsIkxlYXJuaW5nTW9kdWxlQWN0aW9ucyIsInNoYXJlIiwiYXNzaWduIiwiTW9kdWxlQXNzaWdubWVudHMiLCJ1cGRhdGVkIiwic2V0VXBkYXRlZCIsImdldFByb3BlcnRpZXMiLCJTVEFUVVNfQ09MT1JTIiwicHJvY2Vzc2luZyIsIlN0YXR1cyIsInN5bnRoZXNpcyIsInJlbGV2YW5jZSIsImFzc2Vzc21lbnQiLCJnZXRTdGF0dXNDb2xvciIsImNvbG9yIiwiY2xhc3NlcyIsIk1vZHVsZURhdGEiLCJfdGFicyIsIl9tYW5hZ2VMaXN0IiwiX21vZHVsZSIsIl9kcmFmdHMiLCJfY29tbXVuaXR5IiwidGFicyIsInRhYkluZGV4IiwiaW5kZXhPZiIsInRhYlNlbGVjdCIsInVzZVRhYlNlbGVjdCIsIm9uQ2hhbmdlIiwiaW5kZXgiLCJ1cmxQYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJsb2NhdGlvbiIsInNlYXJjaCIsInNldCIsInJlcGxhY2VTdGF0ZSIsImRvY3VtZW50IiwidG9TdHJpbmciLCJGcmFnbWVudCIsIlRhYnNDb250YWluZXIiLCJhY3RpdmUiLCJUYWJzIiwiVGFiIiwiUGFuZXMiLCJNYW5hZ2VMaXN0IiwiY29sbGVjdGlvbiIsInByZXZlbnRNZXNzYWdlIiwibG9hZGluZ01lc3NhZ2UiLCJsb2FkaW5nIiwiX2VtcHR5Iiwic2V0RGF0YSIsInRvdGFsIiwibGVuZ3RoIiwiRW1wdHkiLCJTcGlubmVyIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9lbXB0eS50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL2ludGVyZmFjZXMudHMiLCIvdHMvdmlld3MvaXRlbS9jb21tdW5pdHkvYWN0aW9ucy50c3giLCIvdHMvdmlld3MvaXRlbS9jb21tdW5pdHkvY29tbXVuaXR5LnRzeCIsIi90cy92aWV3cy9pdGVtL2NvbW11bml0eS9vcmdhbml6YXRpb25zLW1vZGFsLnRzeCIsIi90cy92aWV3cy9pdGVtL2RyYWZ0cy50c3giLCIvdHMvdmlld3MvaXRlbS9tb2R1bGUvYWN0aW9ucy50c3giLCIvdHMvdmlld3MvaXRlbS9tb2R1bGUvbW9kdWxlLnRzeCIsIi90cy92aWV3cy9pdGVtL3N0YXR1cy50c3giLCIvdHMvdmlld3MvaXRlbS90aXRsZS50c3giLCIvdHMvdmlld3MvbGlzdC9pbmRleC50c3giLCIvdHMvdmlld3MvbGlzdC9tYW5hZ2UtbGlzdC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBR087VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUgsTUFBQSxDQUFBSyxZQUFZLEVBQUU7Y0FDaEMsT0FBcUIsSUFBSSxDQUFDLENBQUFGLEtBQU07WUFDakM7WUFDQSxJQUFJRyxNQUFNQSxDQUFBO2NBQ1QsT0FBT1AsTUFBQSxDQUFBUSxJQUFJO1lBQ1o7WUFFQUMsSUFBSUEsQ0FBQTtjQUNILE1BQU1DLEdBQUcsR0FBRyxJQUFJLENBQUNDLEdBQUcsQ0FBQ0MsRUFBRSxDQUFDQyxHQUFHLENBQUMsS0FBSyxDQUFDO2NBQ2xDLElBQUksQ0FBQyxDQUFBVCxLQUFNLENBQUNVLElBQUksRUFB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