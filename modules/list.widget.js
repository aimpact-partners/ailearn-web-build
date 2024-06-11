System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.0.46.dev-15/main-layout.widget", "@beyond-js/reactive@1.1.12/model", "@aimpact/ailearn-sdk@1.0.0/learning-modules", "@beyond-js/kernel@0.1.9/texts", "@aimpact/ailearn-app@0.0.46.dev-15/config", "react@18.2.0", "pragmate-ui@0.1.1/components", "@aimpact/ailearn-app@0.0.46.dev-15/components/ui", "@aimpact/chat@1.0.1/shared/components", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@0.1.1/link", "pragmate-ui@0.1.1/icons", "pragmate-ui@0.1.1/modal", "pragmate-ui@0.1.1/list", "@aimpact/chat-sdk@1.0.0/session", "@beyond-js/kernel@0.1.9/routing", "@aimpact/ailearn-app@0.0.46.dev-15/modules/assign", "pragmate-ui@0.1.1/tabs", "pragmate-ui@0.1.1/empty"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp0046Dev15MainLayoutWidget) {
      dependency_4 = _aimpactAilearnApp0046Dev15MainLayoutWidget;
    }, function (_beyondJsReactive1112Model) {
      dependency_5 = _beyondJsReactive1112Model;
    }, function (_aimpactAilearnSdk100LearningModules) {
      dependency_6 = _aimpactAilearnSdk100LearningModules;
    }, function (_beyondJsKernel019Texts) {
      dependency_7 = _beyondJsKernel019Texts;
    }, function (_aimpactAilearnApp0046Dev15Config) {
      dependency_8 = _aimpactAilearnApp0046Dev15Config;
    }, function (_react2) {
      dependency_9 = _react2;
    }, function (_pragmateUi011Components) {
      dependency_10 = _pragmateUi011Components;
    }, function (_aimpactAilearnApp0046Dev15ComponentsUi) {
      dependency_11 = _aimpactAilearnApp0046Dev15ComponentsUi;
    }, function (_aimpactChat101SharedComponents) {
      dependency_12 = _aimpactChat101SharedComponents;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_13 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi011Link) {
      dependency_14 = _pragmateUi011Link;
    }, function (_pragmateUi011Icons) {
      dependency_15 = _pragmateUi011Icons;
    }, function (_pragmateUi011Modal) {
      dependency_16 = _pragmateUi011Modal;
    }, function (_pragmateUi011List) {
      dependency_17 = _pragmateUi011List;
    }, function (_aimpactChatSdk100Session) {
      dependency_18 = _aimpactChatSdk100Session;
    }, function (_beyondJsKernel019Routing) {
      dependency_19 = _beyondJsKernel019Routing;
    }, function (_aimpactAilearnApp0046Dev15ModulesAssign) {
      dependency_20 = _aimpactAilearnApp0046Dev15ModulesAssign;
    }, function (_pragmateUi011Tabs) {
      dependency_21 = _pragmateUi011Tabs;
    }, function (_pragmateUi011Empty) {
      dependency_22 = _pragmateUi011Empty;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.0.46.dev-15"], ["@aimpact/ailearn-app", "0.0.46.dev-15"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.46.dev-15/modules/list",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/main-layout.widget', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/ailearn-sdk/learning-modules', dependency_6], ['@beyond-js/kernel/texts', dependency_7], ['@aimpact/ailearn-app/config', dependency_8], ['react', dependency_9], ['pragmate-ui/components', dependency_10], ['@aimpact/ailearn-app/components/ui', dependency_11], ['@aimpact/chat/shared/components', dependency_12], ['@beyond-js/react-18-widgets/hooks', dependency_13], ['pragmate-ui/link', dependency_14], ['pragmate-ui/icons', dependency_15], ['pragmate-ui/modal', dependency_16], ['pragmate-ui/list', dependency_17], ['@aimpact/chat-sdk/session', dependency_18], ['@beyond-js/kernel/routing', dependency_19], ['@aimpact/ailearn-app/modules/assign', dependency_20], ['pragmate-ui/tabs', dependency_21], ['pragmate-ui/empty', dependency_22]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-modules-list",
        "vspecifier": "@aimpact/ailearn-app@0.0.46.dev-15/modules/list.widget",
        "is": "page",
        "route": "/modules/list",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.46.dev-15/modules/list.widget');
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
        hash: 1859461227,
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
              this.#texts.on('change', this.triggerEvent);
            }
            clear() {
              super.ready = false;
            }
            setBreadcrumb() {
              const onChange = this.setBreadcrumb.bind(this);
              if (!this.#texts.ready) {
                this.#texts.on('change', onChange);
                return;
              }
              this.#texts.off('change', onChange);
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
                route: '',
                orderBy: 'timeCreated'
              });
              super.ready = true;
            }
            async loadDrafts() {
              this.#tab = 'draft';
              if (this.#drafts.loaded) return;
              await this.#drafts.load({
                type: 'draft',
                route: '/drafts',
                orderBy: 'timeCreated'
              });
              super.ready = true;
            }
            async loadCommunity() {
              this.#tab = 'community';
              if (this.#drafts.loaded) return;
              await this.#community.load({
                type: 'community',
                route: 'community',
                orderBy: 'timeCreated'
              });
              super.ready = true;
            }
            load(type = 'published') {
              this.setBreadcrumb();
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
        hash: 677686741,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsInRhYiIsInVyaSIsInFzIiwiZ2V0IiwibG9hZCIsImhpZGUiLCJjbGVhciIsImV4cG9ydHMiLCJfbWFpbkxheW91dCIsIl9tb2RlbCIsIl9sZWFybmluZ01vZHVsZXMiLCJfdGV4dHMiLCJfYmV5b25kX2NvbnRleHQiLCJSZWFjdGl2ZU1vZGVsIiwiZHJhZnRzIiwiZHJhZnQiLCJtb2R1bGVzIiwiY29tbXVuaXR5IiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ2YWx1ZSIsInJlYWR5IiwiY29uc3RydWN0b3IiLCJMZWFybmluZ01vZHVsZXMiLCJvbiIsInRyaWdnZXJFdmVudCIsInNldEJyZWFkY3J1bWIiLCJvbkNoYW5nZSIsImJpbmQiLCJvZmYiLCJMYXlvdXRCcm9rZXIiLCJvdmVybGF5IiwiZ2xvYmFsVGhpcyIsInNldFRpbWVvdXQiLCJicmVhZGNydW1iIiwibG9hZE1vZHVsZXMiLCJsb2FkZWQiLCJ0eXBlIiwicm91dGUiLCJvcmRlckJ5IiwibG9hZERyYWZ0cyIsImxvYWRDb21tdW5pdHkiLCJ0eXBlcyIsInB1Ymxpc2hlZCIsIkVycm9yIiwiZGVsZXRlRHJhZnQiLCJpZCIsIml0ZW0iLCJlbGVtZW50cyIsImRlbGV0ZSIsIl9yZWFjdCIsIkxpc3RDb250ZXh0IiwiZGVmYXVsdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VMaXN0Q29udGV4dCIsInVzZUNvbnRleHQiLCJSZWFjdCIsIl9jb21wb25lbnRzIiwiX2NvbnRleHQiLCJfdWkiLCJFbXB0eUxpc3QiLCJjcmVhdGVFbGVtZW50IiwiRW1wdHlDYXJkIiwidGV4dCIsImVtcHR5IiwiZ2VuZXJhbCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpY29uIiwiY2xhc3NOYW1lIiwiTGluayIsImhyZWYiLCJhY3Rpb25zIiwiY3JlYXRlIiwiX2xpc3QiLCJfaG9va3MiLCJfbGluayIsIl9pY29ucyIsInNldFJlYWR5IiwidXNlU3RhdGUiLCJmZXRjaGluZyIsInVzZUJpbmRlciIsIlByZWxvYWRTY3JlZW4iLCJQcm92aWRlciIsIlBhZ2VDb250YWluZXIiLCJQYWdlVGl0bGUiLCJJY29uIiwiTGlzdCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX29yZ2FuaXphdGlvbnNNb2RhbCIsIkNvbW11bml0eUFjdGlvbnMiLCJvcGVuTW9kYWwiLCJzZXRPcGVuTW9kYWwiLCJvblVzZSIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwidG9nZ2xlTW9kYWwiLCJCdXR0b24iLCJ2YXJpYW50IiwiYm9yZGVyZWQiLCJvbkNsaWNrIiwidXNlIiwiT3JnYW5pemF0aW9uc01vZGFsIiwib25DbG9zZSIsIl9hY3Rpb25zIiwiQ29tbXVuaXR5SXRlbSIsIm9iamVjdGl2ZSIsIkVudGl0eUltYWdlIiwic3JjIiwicGljdHVyZSIsImVudGl0eSIsImFsdCIsIl9tb2RhbCIsIl9zZXNzaW9uIiwiX3JvdXRpbmciLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwiZXJyb3IiLCJzZXRFcnJvciIsInNldEZldGNoaW5nIiwiY2xvbmUiLCJyZXNwb25zZSIsInN0YXR1cyIsImNvbnNvbGUiLCJsb2ciLCJlcnJvcnMiLCJmYWlsZWQiLCJyb3V0aW5nIiwicHVzaFN0YXRlIiwiZGF0YSIsIkl0ZW0iLCJuYW1lIiwiTW9kYWwiLCJjbG9zZUJhY2tkcm9wIiwiRXJyb3JSZW5kZXJlciIsIml0ZW1zIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwib3JnYW5pemF0aW9ucyIsImNvbnRyb2wiLCJzcGVjcyIsImRpc2FibGVkIiwiY29udGludWUiLCJJdGVtRHJhZnRzIiwib25EZWxldGUiLCJDb25maXJtQWN0aW9uIiwidGV4dFBvcFVwIiwib25Db25maXJtIiwiX2Fzc2lnbiIsIkxlYXJuaW5nTW9kdWxlQWN0aW9ucyIsInNoYXJlIiwiYXNzaWduIiwiTW9kdWxlQXNzaWdubWVudHMiLCJTVEFUVVNfQ09MT1JTIiwicHJvY2Vzc2luZyIsIlN0YXR1cyIsInN5bnRoZXNpcyIsInJlbGV2YW5jZSIsImFzc2Vzc21lbnQiLCJnZXRTdGF0dXNDb2xvciIsImNvbG9yIiwiY2xhc3NlcyIsIk1vZHVsZURhdGEiLCJfdGFicyIsIl9tYW5hZ2VMaXN0IiwiX21vZHVsZSIsIl9kcmFmdHMiLCJfY29tbXVuaXR5IiwidGFicyIsInRhYkluZGV4IiwiaW5kZXhPZiIsInRhYlNlbGVjdCIsInVzZVRhYlNlbGVjdCIsImluZGV4IiwidXJsUGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwibG9jYXRpb24iLCJzZWFyY2giLCJzZXQiLCJyZXBsYWNlU3RhdGUiLCJkb2N1bWVudCIsInRvU3RyaW5nIiwiRnJhZ21lbnQiLCJUYWJzQ29udGFpbmVyIiwiYWN0aXZlIiwiVGFicyIsIlRhYiIsIlBhbmVzIiwiTWFuYWdlTGlzdCIsImNvbGxlY3Rpb24iLCJwcmV2ZW50TWVzc2FnZSIsImxvYWRpbmdNZXNzYWdlIiwibG9hZGluZyIsIl9lbXB0eSIsInNldEl0ZW1zIiwibGVuZ3RoIiwiRW1wdHkiLCJTcGlubmVyIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9lbXB0eS50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL2ludGVyZmFjZXMudHMiLCIvdHMvdmlld3MvaXRlbS9jb21tdW5pdHkvYWN0aW9ucy50c3giLCIvdHMvdmlld3MvaXRlbS9jb21tdW5pdHkvY29tbXVuaXR5LnRzeCIsIi90cy92aWV3cy9pdGVtL2NvbW11bml0eS9vcmdhbml6YXRpb25zLW1vZGFsLnRzeCIsIi90cy92aWV3cy9pdGVtL2RyYWZ0cy50c3giLCIvdHMvdmlld3MvaXRlbS9tb2R1bGUvYWN0aW9ucy50c3giLCIvdHMvdmlld3MvaXRlbS9tb2R1bGUvbW9kdWxlLnRzeCIsIi90cy92aWV3cy9pdGVtL3N0YXR1cy50c3giLCIvdHMvdmlld3MvaXRlbS90aXRsZS50c3giLCIvdHMvdmlld3MvbGlzdC9pbmRleC50c3giLCIvdHMvdmlld3MvbGlzdC9tYW5hZ2UtbGlzdC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFHTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJSCxNQUFBLENBQUFLLFlBQVksRUFBRTtjQUNoQyxPQUFxQixJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNqQztZQUNBLElBQUlHLE1BQU1BLENBQUE7Y0FDVCxPQUFPUCxNQUFBLENBQUFRLElBQUk7WUFDWjtZQUVBQyxJQUFJQSxDQUFBO2NBQ0gsTUFBTUMsR0FBRyxHQUFHLElBQUksQ0FBQ0MsR0FBRyxDQUFDQyxFQUFFLENBQUNDLEdBQUcsQ0FBQyxLQUFLLENBQUM7Y0FDbEMsSUFBSSxDQUFDLENBQUFULEtBQU0sQ0FBQ1UsSUFBSSxDQUFDSixHQUFHLENBQUM7WUFDdEI7WUFFQUssSUFBSUEsQ0FBQTtjQUNILElBQUksQ0FBQyxDQUFBWCxLQUFNLENBQUNZLEtBQUssRUFBRTtZQUNwQjs7VUFDQUMsT0FBQSxD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