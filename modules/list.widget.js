System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.1.0-dev.03/main-layout.widget", "@beyond-js/reactive@1.2.0/model", "@aimpact/ailearn-sdk@1.0.0/learning-modules", "@beyond-js/kernel@0.1.9/texts", "@aimpact/ailearn-app@0.1.0-dev.03/config", "react@18.2.0", "pragmate-ui@1.0.0-beta.1/components", "@aimpact/ailearn-app@0.1.0-dev.03/components/ui", "@aimpact/chat@1.0.2/shared/components", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.1/link", "pragmate-ui@1.0.0-beta.1/icons", "pragmate-ui@1.0.0-beta.1/modal", "pragmate-ui@1.0.0-beta.1/list", "@aimpact/chat-sdk@1.0.1/session", "@beyond-js/kernel@0.1.9/routing", "@aimpact/ailearn-app@0.1.0-dev.03/modules/assign", "pragmate-ui@1.0.0-beta.1/tabs", "pragmate-ui@1.0.0-beta.1/empty"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp010Dev03MainLayoutWidget) {
      dependency_4 = _aimpactAilearnApp010Dev03MainLayoutWidget;
    }, function (_beyondJsReactive120Model) {
      dependency_5 = _beyondJsReactive120Model;
    }, function (_aimpactAilearnSdk100LearningModules) {
      dependency_6 = _aimpactAilearnSdk100LearningModules;
    }, function (_beyondJsKernel019Texts) {
      dependency_7 = _beyondJsKernel019Texts;
    }, function (_aimpactAilearnApp010Dev03Config) {
      dependency_8 = _aimpactAilearnApp010Dev03Config;
    }, function (_react2) {
      dependency_9 = _react2;
    }, function (_pragmateUi100Beta1Components) {
      dependency_10 = _pragmateUi100Beta1Components;
    }, function (_aimpactAilearnApp010Dev03ComponentsUi) {
      dependency_11 = _aimpactAilearnApp010Dev03ComponentsUi;
    }, function (_aimpactChat102SharedComponents) {
      dependency_12 = _aimpactChat102SharedComponents;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_13 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi100Beta1Link) {
      dependency_14 = _pragmateUi100Beta1Link;
    }, function (_pragmateUi100Beta1Icons) {
      dependency_15 = _pragmateUi100Beta1Icons;
    }, function (_pragmateUi100Beta1Modal) {
      dependency_16 = _pragmateUi100Beta1Modal;
    }, function (_pragmateUi100Beta1List) {
      dependency_17 = _pragmateUi100Beta1List;
    }, function (_aimpactChatSdk101Session) {
      dependency_18 = _aimpactChatSdk101Session;
    }, function (_beyondJsKernel019Routing) {
      dependency_19 = _beyondJsKernel019Routing;
    }, function (_aimpactAilearnApp010Dev03ModulesAssign) {
      dependency_20 = _aimpactAilearnApp010Dev03ModulesAssign;
    }, function (_pragmateUi100Beta1Tabs) {
      dependency_21 = _pragmateUi100Beta1Tabs;
    }, function (_pragmateUi100Beta1Empty) {
      dependency_22 = _pragmateUi100Beta1Empty;
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
          "vspecifier": "@aimpact/ailearn-app@0.1.0-dev.03/modules/list",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/main-layout.widget', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/ailearn-sdk/learning-modules', dependency_6], ['@beyond-js/kernel/texts', dependency_7], ['@aimpact/ailearn-app/config', dependency_8], ['react', dependency_9], ['pragmate-ui/components', dependency_10], ['@aimpact/ailearn-app/components/ui', dependency_11], ['@aimpact/chat/shared/components', dependency_12], ['@beyond-js/react-18-widgets/hooks', dependency_13], ['pragmate-ui/link', dependency_14], ['pragmate-ui/icons', dependency_15], ['pragmate-ui/modal', dependency_16], ['pragmate-ui/list', dependency_17], ['@aimpact/chat-sdk/session', dependency_18], ['@beyond-js/kernel/routing', dependency_19], ['@aimpact/ailearn-app/modules/assign', dependency_20], ['pragmate-ui/tabs', dependency_21], ['pragmate-ui/empty', dependency_22]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-modules-list",
        "vspecifier": "@aimpact/ailearn-app@0.1.0-dev.03/modules/list.widget",
        "is": "page",
        "route": "/modules/list",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.0-dev.03/modules/list.widget');
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
        hash: 4253326050,
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
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _link = require("pragmate-ui/link");
          var _icons = require("pragmate-ui/icons");
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
            if (!ready) return _react.default.createElement(_components.PreloadScreen, null);
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
        hash: 1438689458,
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
        hash: 2616078455,
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
              console.log('listo', item);
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
        hash: 2808785616,
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
              className: "entity__list mt-15",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsInRhYiIsInVyaSIsInFzIiwiZ2V0IiwiaW5pdCIsImxvYWQiLCJoaWRlIiwiY2xlYXIiLCJleHBvcnRzIiwiX21haW5MYXlvdXQiLCJfbW9kZWwiLCJfbGVhcm5pbmdNb2R1bGVzIiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiUmVhY3RpdmVNb2RlbCIsImRyYWZ0cyIsImRyYWZ0IiwibW9kdWxlcyIsImNvbW11bml0eSIsInRleHRzIiwiQ3VycmVudFRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidmFsdWUiLCJyZWFkeSIsImNvbnN0cnVjdG9yIiwiTGVhcm5pbmdNb2R1bGVzIiwib24iLCJsaXN0ZW5UZXh0cyIsInNldEJyZWFkY3J1bWIiLCJ0cmlnZ2VyRXZlbnQiLCJvZmYiLCJMYXlvdXRCcm9rZXIiLCJvdmVybGF5IiwiZ2xvYmFsVGhpcyIsInNldFRpbWVvdXQiLCJicmVhZGNydW1iIiwibG9hZE1vZHVsZXMiLCJsb2FkZWQiLCJ0eXBlIiwicm91dGUiLCJtIiwibG9hZERyYWZ0cyIsImxvYWRDb21tdW5pdHkiLCJ0eXBlcyIsImJpbmQiLCJwdWJsaXNoZWQiLCJFcnJvciIsImRlbGV0ZURyYWZ0IiwiaWQiLCJpdGVtIiwiZWxlbWVudHMiLCJkZWxldGUiLCJfcmVhY3QiLCJMaXN0Q29udGV4dCIsImRlZmF1bHQiLCJjcmVhdGVDb250ZXh0IiwidXNlTGlzdENvbnRleHQiLCJ1c2VDb250ZXh0IiwiUmVhY3QiLCJfY29tcG9uZW50cyIsIl9jb250ZXh0IiwiX3VpIiwiRW1wdHlMaXN0IiwiY3JlYXRlRWxlbWVudCIsIkVtcHR5Q2FyZCIsInRleHQiLCJlbXB0eSIsImdlbmVyYWwiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaWNvbiIsImNsYXNzTmFtZSIsIkxpbmsiLCJocmVmIiwiYWN0aW9ucyIsImNyZWF0ZSIsIl9saXN0IiwiX2hvb2tzIiwiX2xpbmsiLCJfaWNvbnMiLCJzZXRSZWFkeSIsInVzZVN0YXRlIiwiZmV0Y2hpbmciLCJ1c2VCaW5kZXIiLCJQcmVsb2FkU2NyZWVuIiwiUHJvdmlkZXIiLCJQYWdlQ29udGFpbmVyIiwiUGFnZVRpdGxlIiwiSWNvbiIsIkxpc3QiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsIl9vcmdhbml6YXRpb25zTW9kYWwiLCJDb21tdW5pdHlBY3Rpb25zIiwib3Blbk1vZGFsIiwic2V0T3Blbk1vZGFsIiwib25Vc2UiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsInRvZ2dsZU1vZGFsIiwiQnV0dG9uIiwidmFyaWFudCIsImJvcmRlcmVkIiwib25DbGljayIsInVzZSIsIk9yZ2FuaXphdGlvbnNNb2RhbCIsIm9uQ2xvc2UiLCJfYWN0aW9ucyIsIkNvbW11bml0eUl0ZW0iLCJvYmplY3RpdmUiLCJvd25lckRhdGEiLCJvd25lciIsImNyZWF0b3IiLCJFbnRpdHlJbWFnZSIsInNyYyIsInBpY3R1cmUiLCJlbnRpdHkiLCJhbHQiLCJVc2VyRGF0YSIsImRhdGEiLCJfbW9kYWwiLCJfc2Vzc2lvbiIsIl9yb3V0aW5nIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsImVycm9yIiwic2V0RXJyb3IiLCJzZXRGZXRjaGluZyIsImNsb25lIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJjb25zb2xlIiwibG9nIiwiZXJyb3JzIiwiZmFpbGVkIiwicm91dGluZyIsInB1c2hTdGF0ZSIsIkl0ZW0iLCJuYW1lIiwiTW9kYWwiLCJjbG9zZUJhY2tkcm9wIiwiRXJyb3JSZW5kZXJlciIsIml0ZW1zIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwib3JnYW5pemF0aW9ucyIsImNvbnRyb2wiLCJzcGVjcyIsImRpc2FibGVkIiwiY29udGludWUiLCJJdGVtRHJhZnRzIiwib25EZWxldGUiLCJDb25maXJtQWN0aW9uIiwidGV4dFBvcFVwIiwib25Db25maXJtIiwiX2Fzc2lnbiIsIkxlYXJuaW5nTW9kdWxlQWN0aW9ucyIsInNoYXJlIiwiYXNzaWduIiwiTW9kdWxlQXNzaWdubWVudHMiLCJ1cGRhdGVkIiwic2V0VXBkYXRlZCIsImdldFByb3BlcnRpZXMiLCJTVEFUVVNfQ09MT1JTIiwicHJvY2Vzc2luZyIsIlN0YXR1cyIsInN5bnRoZXNpcyIsInJlbGV2YW5jZSIsImFzc2Vzc21lbnQiLCJnZXRTdGF0dXNDb2xvciIsImNvbG9yIiwiY2xhc3NlcyIsIk1vZHVsZURhdGEiLCJfdGFicyIsIl9tYW5hZ2VMaXN0IiwiX21vZHVsZSIsIl9kcmFmdHMiLCJfY29tbXVuaXR5IiwidGFicyIsInRhYkluZGV4IiwiaW5kZXhPZiIsInRhYlNlbGVjdCIsInVzZVRhYlNlbGVjdCIsIm9uQ2hhbmdlIiwiaW5kZXgiLCJ1cmxQYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJsb2NhdGlvbiIsInNlYXJjaCIsInNldCIsInJlcGxhY2VTdGF0ZSIsImRvY3VtZW50IiwidG9TdHJpbmciLCJGcmFnbWVudCIsIlRhYnNDb250YWluZXIiLCJhY3RpdmUiLCJUYWJzIiwiVGFiIiwiUGFuZXMiLCJNYW5hZ2VMaXN0IiwiY29sbGVjdGlvbiIsInByZXZlbnRNZXNzYWdlIiwibG9hZGluZ01lc3NhZ2UiLCJsb2FkaW5nIiwiX2VtcHR5Iiwic2V0SXRlbXMiLCJsZW5ndGgiLCJFbXB0eSIsIlNwaW5uZXIiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2VtcHR5LnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvaW50ZXJmYWNlcy50cyIsIi90cy92aWV3cy9pdGVtL2NvbW11bml0eS9hY3Rpb25zLnRzeCIsIi90cy92aWV3cy9pdGVtL2NvbW11bml0eS9jb21tdW5pdHkudHN4IiwiL3RzL3ZpZXdzL2l0ZW0vY29tbXVuaXR5L29yZ2FuaXphdGlvbnMtbW9kYWwudHN4IiwiL3RzL3ZpZXdzL2l0ZW0vZHJhZnRzLnRzeCIsIi90cy92aWV3cy9pdGVtL21vZHVsZS9hY3Rpb25zLnRzeCIsIi90cy92aWV3cy9pdGVtL21vZHVsZS9tb2R1bGUudHN4IiwiL3RzL3ZpZXdzL2l0ZW0vc3RhdHVzLnRzeCIsIi90cy92aWV3cy9pdGVtL3RpdGxlLnRzeCIsIi90cy92aWV3cy9saXN0L2luZGV4LnRzeCIsIi90cy92aWV3cy9saXN0L21hbmFnZS1saXN0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUdPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlILE1BQUEsQ0FBQUssWUFBWSxFQUFFO2NBQ2hDLE9BQXFCLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ2pDO1lBQ0EsSUFBSUcsTUFBTUEsQ0FBQTtjQUNULE9BQU9QLE1BQUEsQ0FBQVEsSUFBSTtZQUNaO1lBRUFDLElBQUlBLENBQUE7Y0FDSCxNQUFNQyxHQUFHLEdBQUcsSUFBSSxDQUFDQyxHQUFHLENBQUNDLEVBQUUsQ0FBQ0MsR0FBRyxDQUFDLEtBQUssQ0FBQztjQUNsQyxJQUFJLENBQUMsQ0FBQVQsS0FBTSxDQUFDVSxJQUFJLEVBQUU7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