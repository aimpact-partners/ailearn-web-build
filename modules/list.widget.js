System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.1.3-test.04/main-layout.widget", "@beyond-js/reactive@1.2.0/model", "@aimpact/ailearn-sdk@1.0.0/learning-modules", "@beyond-js/kernel@0.1.9/texts", "@aimpact/ailearn-app@0.1.3-test.04/config", "react@18.2.0", "pragmate-ui@1.0.0-beta.1/components", "@aimpact/ailearn-app@0.1.3-test.04/components/ui", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.1/icons", "pragmate-ui@1.0.0-beta.1/link", "pragmate-ui@1.0.0-beta.1/modal", "pragmate-ui@1.0.0-beta.1/list", "@aimpact/chat-sdk@1.0.1/session", "@beyond-js/kernel@0.1.9/routing", "@aimpact/ailearn-app@0.1.3-test.04/components/module-card", "@aimpact/ailearn-app@0.1.3-test.04/modules/assign", "pragmate-ui@1.0.0-beta.1/tabs", "pragmate-ui@1.0.0-beta.1/empty"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp013Test04MainLayoutWidget) {
      dependency_4 = _aimpactAilearnApp013Test04MainLayoutWidget;
    }, function (_beyondJsReactive120Model) {
      dependency_5 = _beyondJsReactive120Model;
    }, function (_aimpactAilearnSdk100LearningModules) {
      dependency_6 = _aimpactAilearnSdk100LearningModules;
    }, function (_beyondJsKernel019Texts) {
      dependency_7 = _beyondJsKernel019Texts;
    }, function (_aimpactAilearnApp013Test04Config) {
      dependency_8 = _aimpactAilearnApp013Test04Config;
    }, function (_react2) {
      dependency_9 = _react2;
    }, function (_pragmateUi100Beta1Components) {
      dependency_10 = _pragmateUi100Beta1Components;
    }, function (_aimpactAilearnApp013Test04ComponentsUi) {
      dependency_11 = _aimpactAilearnApp013Test04ComponentsUi;
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
    }, function (_aimpactAilearnApp013Test04ComponentsModuleCard) {
      dependency_19 = _aimpactAilearnApp013Test04ComponentsModuleCard;
    }, function (_aimpactAilearnApp013Test04ModulesAssign) {
      dependency_20 = _aimpactAilearnApp013Test04ModulesAssign;
    }, function (_pragmateUi100Beta1Tabs) {
      dependency_21 = _pragmateUi100Beta1Tabs;
    }, function (_pragmateUi100Beta1Empty) {
      dependency_22 = _pragmateUi100Beta1Empty;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.2"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.1"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.1.3-test.04"], ["@aimpact/ailearn-app", "0.1.3-test.04"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.3-test.04/modules/list",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/main-layout.widget', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/ailearn-sdk/learning-modules', dependency_6], ['@beyond-js/kernel/texts', dependency_7], ['@aimpact/ailearn-app/config', dependency_8], ['react', dependency_9], ['pragmate-ui/components', dependency_10], ['@aimpact/ailearn-app/components/ui', dependency_11], ['@beyond-js/react-18-widgets/hooks', dependency_12], ['pragmate-ui/icons', dependency_13], ['pragmate-ui/link', dependency_14], ['pragmate-ui/modal', dependency_15], ['pragmate-ui/list', dependency_16], ['@aimpact/chat-sdk/session', dependency_17], ['@beyond-js/kernel/routing', dependency_18], ['@aimpact/ailearn-app/components/module-card', dependency_19], ['@aimpact/ailearn-app/modules/assign', dependency_20], ['pragmate-ui/tabs', dependency_21], ['pragmate-ui/empty', dependency_22]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-modules-list",
        "vspecifier": "@aimpact/ailearn-app@0.1.3-test.04/modules/list.widget",
        "is": "page",
        "route": "/modules/list",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.3-test.04/modules/list.widget');
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
        hash: 2928033135,
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
            load(type = 'published') {
              const types = {
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
        hash: 485354692,
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
        hash: 830401827,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ItemDrafts = ItemDrafts;
          var React = require("react");
          var _context = require("../context");
          var _moduleCard = require("@aimpact/ailearn-app/components/module-card");
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
            return React.createElement(React.Fragment, null, React.createElement(_moduleCard.ModuleCard, {
              item: item,
              texts: texts,
              href: `/modules/management?id=${item.id}`
            }));
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
        hash: 1498409386,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Item = Item;
          var React = require("react");
          var _assign = require("@aimpact/ailearn-app/modules/assign");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _context = require("../../context");
          var _moduleCard = require("@aimpact/ailearn-app/components/module-card");
          var _components = require("pragmate-ui/components");
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
            const [openModal, setOpenModal] = React.useState(false);
            (0, _hooks.useBinder)([item], () => {
              globalThis.item = item;
              setUpdated(item.getProperties());
            });
            const share = event => {
              event.stopPropagation();
              setOpenModal(true);
            };
            const toggleModal = () => setOpenModal(!openModal);
            return React.createElement(React.Fragment, null, React.createElement(_moduleCard.ModuleCard, {
              item: item,
              texts: texts
            }, React.createElement(_moduleCard.ModuleCardFooter, {
              item: item
            }, React.createElement(_components.Button, {
              variant: "primary",
              bordered: true,
              onClick: share
            }, texts.actions.assign))), openModal && React.createElement(_assign.ModuleAssignments, {
              module: item,
              onClose: toggleModal,
              texts: texts.assign
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
        hash: 40682162,
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
          function List({}) {
            const {
              texts,
              store
            } = (0, _context.useListContext)();
            const tabs = ['draft', 'published'];
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
            }, _react.default.createElement(_tabs.Tab, null, texts.tabs.drafts), _react.default.createElement(_tabs.Tab, null, texts.tabs.published)), _react.default.createElement(_tabs.Panes, {
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
            }))));
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/list/manage-list
      ****************************************/

      ims.set('./views/list/manage-list', {
        hash: 683784199,
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
              }, React.createElement(_ui.AppLoader, {
                fetching: true
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsInRhYiIsInVyaSIsInFzIiwiZ2V0IiwiaW5pdCIsImxvYWQiLCJoaWRlIiwiY2xlYXIiLCJleHBvcnRzIiwiX21haW5MYXlvdXQiLCJfbW9kZWwiLCJfbGVhcm5pbmdNb2R1bGVzIiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiUmVhY3RpdmVNb2RlbCIsImRyYWZ0cyIsImRyYWZ0IiwibW9kdWxlcyIsInRleHRzIiwiQ3VycmVudFRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidmFsdWUiLCJyZWFkeSIsImNvbnN0cnVjdG9yIiwiTGVhcm5pbmdNb2R1bGVzIiwib24iLCJsaXN0ZW5UZXh0cyIsInNldEJyZWFkY3J1bWIiLCJ0cmlnZ2VyRXZlbnQiLCJvZmYiLCJMYXlvdXRCcm9rZXIiLCJvdmVybGF5IiwiZ2xvYmFsVGhpcyIsInNldFRpbWVvdXQiLCJicmVhZGNydW1iIiwibG9hZE1vZHVsZXMiLCJsb2FkZWQiLCJ0eXBlIiwicm91dGUiLCJtIiwibG9hZERyYWZ0cyIsInR5cGVzIiwiYmluZCIsInB1Ymxpc2hlZCIsIkVycm9yIiwiZGVsZXRlRHJhZnQiLCJpZCIsIml0ZW0iLCJlbGVtZW50cyIsImRlbGV0ZSIsIl9yZWFjdCIsIkxpc3RDb250ZXh0IiwiZGVmYXVsdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VMaXN0Q29udGV4dCIsInVzZUNvbnRleHQiLCJSZWFjdCIsIl9jb21wb25lbnRzIiwiX2NvbnRleHQiLCJfdWkiLCJFbXB0eUxpc3QiLCJjcmVhdGVFbGVtZW50IiwiRW1wdHlDYXJkIiwidGV4dCIsImVtcHR5IiwiZ2VuZXJhbCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpY29uIiwiY2xhc3NOYW1lIiwiTGluayIsImhyZWYiLCJhY3Rpb25zIiwiY3JlYXRlIiwiX2hvb2tzIiwiX2ljb25zIiwiX2xpbmsiLCJfbGlzdCIsInNldFJlYWR5IiwidXNlU3RhdGUiLCJmZXRjaGluZyIsInVzZUJpbmRlciIsIlBhZ2VMb2FkZXIiLCJQcm92aWRlciIsIlBhZ2VDb250YWluZXIiLCJQYWdlVGl0bGUiLCJJY29uIiwiTGlzdCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX29yZ2FuaXphdGlvbnNNb2RhbCIsIkNvbW11bml0eUFjdGlvbnMiLCJvcGVuTW9kYWwiLCJzZXRPcGVuTW9kYWwiLCJvblVzZSIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwidG9nZ2xlTW9kYWwiLCJCdXR0b24iLCJ2YXJpYW50IiwiYm9yZGVyZWQiLCJvbkNsaWNrIiwidXNlIiwiT3JnYW5pemF0aW9uc01vZGFsIiwib25DbG9zZSIsIl9hY3Rpb25zIiwiQ29tbXVuaXR5SXRlbSIsIm9iamVjdGl2ZSIsIm93bmVyRGF0YSIsIm93bmVyIiwiY3JlYXRvciIsIkVudGl0eUltYWdlIiwic3JjIiwicGljdHVyZSIsImVudGl0eSIsImFsdCIsIlVzZXJEYXRhIiwiZGF0YSIsIl9tb2RhbCIsIl9zZXNzaW9uIiwiX3JvdXRpbmciLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwiZXJyb3IiLCJzZXRFcnJvciIsInNldEZldGNoaW5nIiwiY2xvbmUiLCJyZXNwb25zZSIsInN0YXR1cyIsImNvbnNvbGUiLCJsb2ciLCJlcnJvcnMiLCJmYWlsZWQiLCJyb3V0aW5nIiwicHVzaFN0YXRlIiwiSXRlbSIsIm5hbWUiLCJNb2RhbCIsImNsb3NlQmFja2Ryb3AiLCJFcnJvclJlbmRlcmVyIiwiaXRlbXMiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJvcmdhbml6YXRpb25zIiwiY29udHJvbCIsInNwZWNzIiwiZGlzYWJsZWQiLCJjb250aW51ZSIsIl9tb2R1bGVDYXJkIiwiSXRlbURyYWZ0cyIsIm9uRGVsZXRlIiwiRnJhZ21lbnQiLCJNb2R1bGVDYXJkIiwiX2Fzc2lnbiIsIkxlYXJuaW5nTW9kdWxlQWN0aW9ucyIsInNoYXJlIiwiYXNzaWduIiwiTW9kdWxlQXNzaWdubWVudHMiLCJ1cGRhdGVkIiwic2V0VXBkYXRlZCIsImdldFByb3BlcnRpZXMiLCJNb2R1bGVDYXJkRm9vdGVyIiwiU1RBVFVTX0NPTE9SUyIsInByb2Nlc3NpbmciLCJTdGF0dXMiLCJzeW50aGVzaXMiLCJyZWxldmFuY2UiLCJhc3Nlc3NtZW50IiwiZ2V0U3RhdHVzQ29sb3IiLCJjb2xvciIsImNsYXNzZXMiLCJNb2R1bGVEYXRhIiwiX3RhYnMiLCJfbWFuYWdlTGlzdCIsIl9tb2R1bGUiLCJfZHJhZnRzIiwidGFicyIsInRhYkluZGV4IiwiaW5kZXhPZiIsInRhYlNlbGVjdCIsInVzZVRhYlNlbGVjdCIsIm9uQ2hhbmdlIiwiaW5kZXgiLCJ1cmxQYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJsb2NhdGlvbiIsInNlYXJjaCIsInNldCIsInJlcGxhY2VTdGF0ZSIsImRvY3VtZW50IiwidG9TdHJpbmciLCJUYWJzQ29udGFpbmVyIiwiYWN0aXZlIiwiVGFicyIsIlRhYiIsIlBhbmVzIiwiTWFuYWdlTGlzdCIsImNvbGxlY3Rpb24iLCJwcmV2ZW50TWVzc2FnZSIsImxvYWRpbmdNZXNzYWdlIiwibG9hZGluZyIsIl9lbXB0eSIsInNldERhdGEiLCJ0b3RhbCIsImxlbmd0aCIsIkVtcHR5IiwiQXBwTG9hZGVyIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9lbXB0eS50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL2ludGVyZmFjZXMudHMiLCIvdHMvdmlld3MvaXRlbS9jb21tdW5pdHkvYWN0aW9ucy50c3giLCIvdHMvdmlld3MvaXRlbS9jb21tdW5pdHkvY29tbXVuaXR5LnRzeCIsIi90cy92aWV3cy9pdGVtL2NvbW11bml0eS9vcmdhbml6YXRpb25zLW1vZGFsLnRzeCIsIi90cy92aWV3cy9pdGVtL2RyYWZ0cy50c3giLCIvdHMvdmlld3MvaXRlbS9tb2R1bGUvYWN0aW9ucy50c3giLCIvdHMvdmlld3MvaXRlbS9tb2R1bGUvbW9kdWxlLnRzeCIsIi90cy92aWV3cy9pdGVtL3N0YXR1cy50c3giLCIvdHMvdmlld3MvaXRlbS90aXRsZS50c3giLCIvdHMvdmlld3MvbGlzdC9pbmRleC50c3giLCIvdHMvdmlld3MvbGlzdC9tYW5hZ2UtbGlzdC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFHTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJSCxNQUFBLENBQUFLLFlBQVksRUFBRTtjQUNoQyxPQUFxQixJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNqQztZQUNBLElBQUlHLE1BQU1BLENBQUE7Y0FDVCxPQUFPUCxNQUFBLENBQUFRLElBQUk7WUFDWjtZQUVBQyxJQUFJQSxDQUFBO2NBQ0gsTUFBTUMsR0FBRyxHQUFHLElBQUksQ0FBQ0MsR0FBRyxDQUFDQyxFQUFFLENBQUNDLEdBQUcsQ0FBQyxLQUFLLENBQUM7Y0FDbEMsSUFBSSxDQUFDLENBQUFULEtBQU0sQ0FBQ1UsSUFBSSxFQUFFO2NBQ2xCLElBQUksQ0FBQyxDQUFBVixLQUFNLENB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