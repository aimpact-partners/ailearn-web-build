System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.0.46.dev-05/main-layout.widget", "@beyond-js/reactive@1.1.12/model", "@aimpact/ailearn-sdk@1.0.0/learning-modules", "@beyond-js/kernel@0.1.9/texts", "react@18.2.0", "pragmate-ui@0.1.1/components", "@aimpact/ailearn-app@0.0.46.dev-05/components/ui", "@aimpact/chat@1.0.1/shared/components", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@0.1.1/link", "pragmate-ui@0.1.1/icons", "pragmate-ui@0.1.1/modal", "pragmate-ui@0.1.1/list", "@aimpact/chat-sdk@1.0.0/session", "@beyond-js/kernel@0.1.9/routing", "@aimpact/ailearn-app@0.0.46.dev-05/modules/assign", "pragmate-ui@0.1.1/tabs", "pragmate-ui@0.1.1/empty"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp0046Dev05MainLayoutWidget) {
      dependency_4 = _aimpactAilearnApp0046Dev05MainLayoutWidget;
    }, function (_beyondJsReactive1112Model) {
      dependency_5 = _beyondJsReactive1112Model;
    }, function (_aimpactAilearnSdk100LearningModules) {
      dependency_6 = _aimpactAilearnSdk100LearningModules;
    }, function (_beyondJsKernel019Texts) {
      dependency_7 = _beyondJsKernel019Texts;
    }, function (_react2) {
      dependency_8 = _react2;
    }, function (_pragmateUi011Components) {
      dependency_9 = _pragmateUi011Components;
    }, function (_aimpactAilearnApp0046Dev05ComponentsUi) {
      dependency_10 = _aimpactAilearnApp0046Dev05ComponentsUi;
    }, function (_aimpactChat101SharedComponents) {
      dependency_11 = _aimpactChat101SharedComponents;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_12 = _beyondJsReact18Widgets112Hooks;
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
    }, function (_aimpactAilearnApp0046Dev05ModulesAssign) {
      dependency_19 = _aimpactAilearnApp0046Dev05ModulesAssign;
    }, function (_pragmateUi011Tabs) {
      dependency_20 = _pragmateUi011Tabs;
    }, function (_pragmateUi011Empty) {
      dependency_21 = _pragmateUi011Empty;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.0.46.dev-05"], ["@aimpact/ailearn-app", "0.0.46.dev-05"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.46.dev-05/modules/list",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/main-layout.widget', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/ailearn-sdk/learning-modules', dependency_6], ['@beyond-js/kernel/texts', dependency_7], ['react', dependency_8], ['pragmate-ui/components', dependency_9], ['@aimpact/ailearn-app/components/ui', dependency_10], ['@aimpact/chat/shared/components', dependency_11], ['@beyond-js/react-18-widgets/hooks', dependency_12], ['pragmate-ui/link', dependency_13], ['pragmate-ui/icons', dependency_14], ['pragmate-ui/modal', dependency_15], ['pragmate-ui/list', dependency_16], ['@aimpact/chat-sdk/session', dependency_17], ['@beyond-js/kernel/routing', dependency_18], ['@aimpact/ailearn-app/modules/assign', dependency_19], ['pragmate-ui/tabs', dependency_20], ['pragmate-ui/empty', dependency_21]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-modules-list",
        "vspecifier": "@aimpact/ailearn-app@0.0.46.dev-05/modules/list.widget",
        "is": "page",
        "route": "/modules/list",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.46.dev-05/modules/list.widget');
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
        hash: 2114020337,
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
              globalThis.c = this;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsInRhYiIsInVyaSIsInFzIiwiZ2V0IiwibG9hZCIsImhpZGUiLCJjbGVhciIsImV4cG9ydHMiLCJfbWFpbkxheW91dCIsIl9tb2RlbCIsIl9sZWFybmluZ01vZHVsZXMiLCJfdGV4dHMiLCJfYmV5b25kX2NvbnRleHQiLCJSZWFjdGl2ZU1vZGVsIiwiZHJhZnRzIiwiZHJhZnQiLCJtb2R1bGVzIiwiY29tbXVuaXR5IiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ2YWx1ZSIsInJlYWR5IiwiY29uc3RydWN0b3IiLCJnbG9iYWxUaGlzIiwiYyIsIkxlYXJuaW5nTW9kdWxlcyIsIm9uIiwidHJpZ2dlckV2ZW50Iiwic2V0QnJlYWRjcnVtYiIsIm9uQ2hhbmdlIiwiYmluZCIsIm9mZiIsIkxheW91dEJyb2tlciIsIm92ZXJsYXkiLCJzZXRUaW1lb3V0IiwiYnJlYWRjcnVtYiIsImxvYWRNb2R1bGVzIiwibG9hZGVkIiwidHlwZSIsInJvdXRlIiwib3JkZXJCeSIsImxvYWREcmFmdHMiLCJsb2FkQ29tbXVuaXR5IiwidHlwZXMiLCJwdWJsaXNoZWQiLCJFcnJvciIsImRlbGV0ZURyYWZ0IiwiaWQiLCJpdGVtIiwiZWxlbWVudHMiLCJkZWxldGUiLCJfcmVhY3QiLCJMaXN0Q29udGV4dCIsImRlZmF1bHQiLCJjcmVhdGVDb250ZXh0IiwidXNlTGlzdENvbnRleHQiLCJ1c2VDb250ZXh0IiwiUmVhY3QiLCJfY29tcG9uZW50cyIsIl9jb250ZXh0IiwiX3VpIiwiRW1wdHlMaXN0IiwiY3JlYXRlRWxlbWVudCIsIkVtcHR5Q2FyZCIsInRleHQiLCJlbXB0eSIsImdlbmVyYWwiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaWNvbiIsImNsYXNzTmFtZSIsIkxpbmsiLCJocmVmIiwiYWN0aW9ucyIsImNyZWF0ZSIsIl9saXN0IiwiX2hvb2tzIiwiX2xpbmsiLCJfaWNvbnMiLCJzZXRSZWFkeSIsInVzZVN0YXRlIiwiZmV0Y2hpbmciLCJ1c2VCaW5kZXIiLCJQcmVsb2FkU2NyZWVuIiwiUHJvdmlkZXIiLCJQYWdlQ29udGFpbmVyIiwiUGFnZVRpdGxlIiwiSWNvbiIsIkxpc3QiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsIl9vcmdhbml6YXRpb25zTW9kYWwiLCJDb21tdW5pdHlBY3Rpb25zIiwib3Blbk1vZGFsIiwic2V0T3Blbk1vZGFsIiwib25Vc2UiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsInRvZ2dsZU1vZGFsIiwiQnV0dG9uIiwidmFyaWFudCIsImJvcmRlcmVkIiwib25DbGljayIsInVzZSIsIk9yZ2FuaXphdGlvbnNNb2RhbCIsIm9uQ2xvc2UiLCJfYWN0aW9ucyIsIkNvbW11bml0eUl0ZW0iLCJvYmplY3RpdmUiLCJFbnRpdHlJbWFnZSIsInNyYyIsInBpY3R1cmUiLCJlbnRpdHkiLCJhbHQiLCJfbW9kYWwiLCJfc2Vzc2lvbiIsIl9yb3V0aW5nIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsImVycm9yIiwic2V0RXJyb3IiLCJzZXRGZXRjaGluZyIsImNsb25lIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJjb25zb2xlIiwibG9nIiwiZXJyb3JzIiwiZmFpbGVkIiwicm91dGluZyIsInB1c2hTdGF0ZSIsImRhdGEiLCJJdGVtIiwibmFtZSIsIk1vZGFsIiwiY2xvc2VCYWNrZHJvcCIsIkVycm9yUmVuZGVyZXIiLCJpdGVtcyIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsIm9yZ2FuaXphdGlvbnMiLCJjb250cm9sIiwic3BlY3MiLCJkaXNhYmxlZCIsImNvbnRpbnVlIiwiSXRlbURyYWZ0cyIsIm9uRGVsZXRlIiwiQ29uZmlybUFjdGlvbiIsInRleHRQb3BVcCIsIm9uQ29uZmlybSIsIl9hc3NpZ24iLCJMZWFybmluZ01vZHVsZUFjdGlvbnMiLCJzaGFyZSIsImFzc2lnbiIsIk1vZHVsZUFzc2lnbm1lbnRzIiwiU1RBVFVTX0NPTE9SUyIsInByb2Nlc3NpbmciLCJTdGF0dXMiLCJzeW50aGVzaXMiLCJyZWxldmFuY2UiLCJhc3Nlc3NtZW50IiwiZ2V0U3RhdHVzQ29sb3IiLCJjb2xvciIsImNsYXNzZXMiLCJNb2R1bGVEYXRhIiwiX3RhYnMiLCJfbWFuYWdlTGlzdCIsIl9tb2R1bGUiLCJfZHJhZnRzIiwiX2NvbW11bml0eSIsInRhYnMiLCJ0YWJJbmRleCIsImluZGV4T2YiLCJ0YWJTZWxlY3QiLCJ1c2VUYWJTZWxlY3QiLCJpbmRleCIsInVybFBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsImxvY2F0aW9uIiwic2VhcmNoIiwic2V0IiwicmVwbGFjZVN0YXRlIiwiZG9jdW1lbnQiLCJ0b1N0cmluZyIsIkZyYWdtZW50IiwiVGFic0NvbnRhaW5lciIsImFjdGl2ZSIsIlRhYnMiLCJUYWIiLCJQYW5lcyIsIk1hbmFnZUxpc3QiLCJjb2xsZWN0aW9uIiwicHJldmVudE1lc3NhZ2UiLCJsb2FkaW5nTWVzc2FnZSIsImxvYWRpbmciLCJfZW1wdHkiLCJzZXRJdGVtcyIsImxlbmd0aCIsIkVtcHR5IiwiU3Bpbm5lciJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi9pbnRlcmZhY2VzLnRzIiwiL3RzL3ZpZXdzL2l0ZW0vY29tbXVuaXR5L2FjdGlvbnMudHN4IiwiL3RzL3ZpZXdzL2l0ZW0vY29tbXVuaXR5L2NvbW11bml0eS50c3giLCIvdHMvdmlld3MvaXRlbS9jb21tdW5pdHkvb3JnYW5pemF0aW9ucy1tb2RhbC50c3giLCIvdHMvdmlld3MvaXRlbS9kcmFmdHMudHN4IiwiL3RzL3ZpZXdzL2l0ZW0vbW9kdWxlL2FjdGlvbnMudHN4IiwiL3RzL3ZpZXdzL2l0ZW0vbW9kdWxlL21vZHVsZS50c3giLCIvdHMvdmlld3MvaXRlbS9zdGF0dXMudHN4IiwiL3RzL3ZpZXdzL2l0ZW0vdGl0bGUudHN4IiwiL3RzL3ZpZXdzL2xpc3QvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xpc3QvbWFuYWdlLWxpc3QudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUdPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlILE1BQUEsQ0FBQUssWUFBWSxFQUFFO2NBQ2hDLE9BQXFCLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ2pDO1lBQ0EsSUFBSUcsTUFBTUEsQ0FBQTtjQUNULE9BQU9QLE1BQUEsQ0FBQVEsSUFBSTtZQUNaO1lBRUFDLElBQUlBLENBQUE7Y0FDSCxNQUFNQyxHQUFHLEdBQUcsSUFBSSxDQUFDQyxHQUFHLENBQUNDLEVBQUUsQ0FBQ0MsR0FBRyxDQUFDLEtBQUssQ0FBQztjQUNsQyxJQUFJLENBQUMsQ0FBQVQsS0FBTSxDQUFDVSxJQUFJLENBQUNKLEdBQUcsQ0FBQztZQUN0QjtZQUVBSyxJQUFJQSxDQUFBO2NBQ0gsSUFBSSxDQUFDLENBQUFYLEtBQU0sQ0FBQ1ksS0FBSyxFQUFFO1lBQ3BCOztVQUNBQyxPQUFB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