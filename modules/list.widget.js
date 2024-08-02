System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.1.0-dev.09/main-layout.widget", "@beyond-js/reactive@1.2.0/model", "@aimpact/ailearn-sdk@1.0.0/learning-modules", "@beyond-js/kernel@0.1.9/texts", "@aimpact/ailearn-app@0.1.0-dev.09/config", "react@18.2.0", "pragmate-ui@1.0.0-beta.1/components", "@aimpact/ailearn-app@0.1.0-dev.09/components/ui", "@aimpact/chat@1.0.2/shared/components", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.1/link", "pragmate-ui@1.0.0-beta.1/icons", "pragmate-ui@1.0.0-beta.1/modal", "pragmate-ui@1.0.0-beta.1/list", "@aimpact/chat-sdk@1.0.1/session", "@beyond-js/kernel@0.1.9/routing", "@aimpact/ailearn-app@0.1.0-dev.09/modules/assign", "pragmate-ui@1.0.0-beta.1/tabs", "pragmate-ui@1.0.0-beta.1/empty"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp010Dev09MainLayoutWidget) {
      dependency_4 = _aimpactAilearnApp010Dev09MainLayoutWidget;
    }, function (_beyondJsReactive120Model) {
      dependency_5 = _beyondJsReactive120Model;
    }, function (_aimpactAilearnSdk100LearningModules) {
      dependency_6 = _aimpactAilearnSdk100LearningModules;
    }, function (_beyondJsKernel019Texts) {
      dependency_7 = _beyondJsKernel019Texts;
    }, function (_aimpactAilearnApp010Dev09Config) {
      dependency_8 = _aimpactAilearnApp010Dev09Config;
    }, function (_react2) {
      dependency_9 = _react2;
    }, function (_pragmateUi100Beta1Components) {
      dependency_10 = _pragmateUi100Beta1Components;
    }, function (_aimpactAilearnApp010Dev09ComponentsUi) {
      dependency_11 = _aimpactAilearnApp010Dev09ComponentsUi;
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
    }, function (_aimpactAilearnApp010Dev09ModulesAssign) {
      dependency_20 = _aimpactAilearnApp010Dev09ModulesAssign;
    }, function (_pragmateUi100Beta1Tabs) {
      dependency_21 = _pragmateUi100Beta1Tabs;
    }, function (_pragmateUi100Beta1Empty) {
      dependency_22 = _pragmateUi100Beta1Empty;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.2"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.1"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.1.0-dev.09"], ["@aimpact/ailearn-app", "0.1.0-dev.09"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.0-dev.09/modules/list",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/main-layout.widget', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/ailearn-sdk/learning-modules', dependency_6], ['@beyond-js/kernel/texts', dependency_7], ['@aimpact/ailearn-app/config', dependency_8], ['react', dependency_9], ['pragmate-ui/components', dependency_10], ['@aimpact/ailearn-app/components/ui', dependency_11], ['@aimpact/chat/shared/components', dependency_12], ['@beyond-js/react-18-widgets/hooks', dependency_13], ['pragmate-ui/link', dependency_14], ['pragmate-ui/icons', dependency_15], ['pragmate-ui/modal', dependency_16], ['pragmate-ui/list', dependency_17], ['@aimpact/chat-sdk/session', dependency_18], ['@beyond-js/kernel/routing', dependency_19], ['@aimpact/ailearn-app/modules/assign', dependency_20], ['pragmate-ui/tabs', dependency_21], ['pragmate-ui/empty', dependency_22]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-modules-list",
        "vspecifier": "@aimpact/ailearn-app@0.1.0-dev.09/modules/list.widget",
        "is": "page",
        "route": "/modules/list",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.0-dev.09/modules/list.widget');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsInRhYiIsInVyaSIsInFzIiwiZ2V0IiwiaW5pdCIsImxvYWQiLCJoaWRlIiwiY2xlYXIiLCJleHBvcnRzIiwiX21haW5MYXlvdXQiLCJfbW9kZWwiLCJfbGVhcm5pbmdNb2R1bGVzIiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiUmVhY3RpdmVNb2RlbCIsImRyYWZ0cyIsImRyYWZ0IiwibW9kdWxlcyIsImNvbW11bml0eSIsInRleHRzIiwiQ3VycmVudFRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidmFsdWUiLCJyZWFkeSIsImNvbnN0cnVjdG9yIiwiTGVhcm5pbmdNb2R1bGVzIiwib24iLCJsaXN0ZW5UZXh0cyIsInNldEJyZWFkY3J1bWIiLCJ0cmlnZ2VyRXZlbnQiLCJvZmYiLCJMYXlvdXRCcm9rZXIiLCJvdmVybGF5IiwiZ2xvYmFsVGhpcyIsInNldFRpbWVvdXQiLCJicmVhZGNydW1iIiwibG9hZE1vZHVsZXMiLCJsb2FkZWQiLCJ0eXBlIiwicm91dGUiLCJtIiwibG9hZERyYWZ0cyIsImxvYWRDb21tdW5pdHkiLCJ0eXBlcyIsImJpbmQiLCJwdWJsaXNoZWQiLCJFcnJvciIsImRlbGV0ZURyYWZ0IiwiaWQiLCJpdGVtIiwiZWxlbWVudHMiLCJkZWxldGUiLCJfcmVhY3QiLCJMaXN0Q29udGV4dCIsImRlZmF1bHQiLCJjcmVhdGVDb250ZXh0IiwidXNlTGlzdENvbnRleHQiLCJ1c2VDb250ZXh0IiwiUmVhY3QiLCJfY29tcG9uZW50cyIsIl9jb250ZXh0IiwiX3VpIiwiRW1wdHlMaXN0IiwiY3JlYXRlRWxlbWVudCIsIkVtcHR5Q2FyZCIsInRleHQiLCJlbXB0eSIsImdlbmVyYWwiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaWNvbiIsImNsYXNzTmFtZSIsIkxpbmsiLCJocmVmIiwiYWN0aW9ucyIsImNyZWF0ZSIsIl9saXN0IiwiX2hvb2tzIiwiX2xpbmsiLCJfaWNvbnMiLCJzZXRSZWFkeSIsInVzZVN0YXRlIiwiZmV0Y2hpbmciLCJ1c2VCaW5kZXIiLCJQcmVsb2FkU2NyZWVuIiwiUHJvdmlkZXIiLCJQYWdlQ29udGFpbmVyIiwiUGFnZVRpdGxlIiwiSWNvbiIsIkxpc3QiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsIl9vcmdhbml6YXRpb25zTW9kYWwiLCJDb21tdW5pdHlBY3Rpb25zIiwib3Blbk1vZGFsIiwic2V0T3Blbk1vZGFsIiwib25Vc2UiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsInRvZ2dsZU1vZGFsIiwiQnV0dG9uIiwidmFyaWFudCIsImJvcmRlcmVkIiwib25DbGljayIsInVzZSIsIk9yZ2FuaXphdGlvbnNNb2RhbCIsIm9uQ2xvc2UiLCJfYWN0aW9ucyIsIkNvbW11bml0eUl0ZW0iLCJvYmplY3RpdmUiLCJvd25lckRhdGEiLCJvd25lciIsImNyZWF0b3IiLCJFbnRpdHlJbWFnZSIsInNyYyIsInBpY3R1cmUiLCJlbnRpdHkiLCJhbHQiLCJVc2VyRGF0YSIsImRhdGEiLCJfbW9kYWwiLCJfc2Vzc2lvbiIsIl9yb3V0aW5nIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsImVycm9yIiwic2V0RXJyb3IiLCJzZXRGZXRjaGluZyIsImNsb25lIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJjb25zb2xlIiwibG9nIiwiZXJyb3JzIiwiZmFpbGVkIiwicm91dGluZyIsInB1c2hTdGF0ZSIsIkl0ZW0iLCJuYW1lIiwiTW9kYWwiLCJjbG9zZUJhY2tkcm9wIiwiRXJyb3JSZW5kZXJlciIsIml0ZW1zIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwib3JnYW5pemF0aW9ucyIsImNvbnRyb2wiLCJzcGVjcyIsImRpc2FibGVkIiwiY29udGludWUiLCJJdGVtRHJhZnRzIiwib25EZWxldGUiLCJDb25maXJtQWN0aW9uIiwidGV4dFBvcFVwIiwib25Db25maXJtIiwiX2Fzc2lnbiIsIkxlYXJuaW5nTW9kdWxlQWN0aW9ucyIsInNoYXJlIiwiYXNzaWduIiwiTW9kdWxlQXNzaWdubWVudHMiLCJ1cGRhdGVkIiwic2V0VXBkYXRlZCIsImdldFByb3BlcnRpZXMiLCJTVEFUVVNfQ09MT1JTIiwicHJvY2Vzc2luZyIsIlN0YXR1cyIsInN5bnRoZXNpcyIsInJlbGV2YW5jZSIsImFzc2Vzc21lbnQiLCJnZXRTdGF0dXNDb2xvciIsImNvbG9yIiwiY2xhc3NlcyIsIk1vZHVsZURhdGEiLCJfdGFicyIsIl9tYW5hZ2VMaXN0IiwiX21vZHVsZSIsIl9kcmFmdHMiLCJfY29tbXVuaXR5IiwidGFicyIsInRhYkluZGV4IiwiaW5kZXhPZiIsInRhYlNlbGVjdCIsInVzZVRhYlNlbGVjdCIsIm9uQ2hhbmdlIiwiaW5kZXgiLCJ1cmxQYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJsb2NhdGlvbiIsInNlYXJjaCIsInNldCIsInJlcGxhY2VTdGF0ZSIsImRvY3VtZW50IiwidG9TdHJpbmciLCJGcmFnbWVudCIsIlRhYnNDb250YWluZXIiLCJhY3RpdmUiLCJUYWJzIiwiVGFiIiwiUGFuZXMiLCJNYW5hZ2VMaXN0IiwiY29sbGVjdGlvbiIsInByZXZlbnRNZXNzYWdlIiwibG9hZGluZ01lc3NhZ2UiLCJsb2FkaW5nIiwiX2VtcHR5Iiwic2V0RGF0YSIsInRvdGFsIiwibGVuZ3RoIiwiRW1wdHkiLCJTcGlubmVyIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9lbXB0eS50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL2ludGVyZmFjZXMudHMiLCIvdHMvdmlld3MvaXRlbS9jb21tdW5pdHkvYWN0aW9ucy50c3giLCIvdHMvdmlld3MvaXRlbS9jb21tdW5pdHkvY29tbXVuaXR5LnRzeCIsIi90cy92aWV3cy9pdGVtL2NvbW11bml0eS9vcmdhbml6YXRpb25zLW1vZGFsLnRzeCIsIi90cy92aWV3cy9pdGVtL2RyYWZ0cy50c3giLCIvdHMvdmlld3MvaXRlbS9tb2R1bGUvYWN0aW9ucy50c3giLCIvdHMvdmlld3MvaXRlbS9tb2R1bGUvbW9kdWxlLnRzeCIsIi90cy92aWV3cy9pdGVtL3N0YXR1cy50c3giLCIvdHMvdmlld3MvaXRlbS90aXRsZS50c3giLCIvdHMvdmlld3MvbGlzdC9pbmRleC50c3giLCIvdHMvdmlld3MvbGlzdC9tYW5hZ2UtbGlzdC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFHTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJSCxNQUFBLENBQUFLLFlBQVksRUFBRTtjQUNoQyxPQUFxQixJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNqQztZQUNBLElBQUlHLE1BQU1BLENBQUE7Y0FDVCxPQUFPUCxNQUFBLENBQUFRLElBQUk7WUFDWjtZQUVBQyxJQUFJQSxDQUFBO2NBQ0gsTUFBTUMsR0FBRyxHQUFHLElBQUksQ0FBQ0MsR0FBRyxDQUFDQyxFQUFFLENBQUNDLEdBQUcsQ0FBQyxLQUFLLENBQUM7Y0FDbEMsSUFBSSxDQUFDLENBQUFULEtBQU0sQ0FBQ1UsSUFB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W119