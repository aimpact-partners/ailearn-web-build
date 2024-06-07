System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.0.46.dev-13/main-layout.widget", "@beyond-js/reactive@1.1.12/model", "@aimpact/ailearn-sdk@1.0.0/learning-modules", "@beyond-js/kernel@0.1.9/texts", "react@18.2.0", "pragmate-ui@0.1.1/components", "@aimpact/ailearn-app@0.0.46.dev-13/components/ui", "@aimpact/chat@1.0.1/shared/components", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@0.1.1/link", "pragmate-ui@0.1.1/icons", "pragmate-ui@0.1.1/modal", "pragmate-ui@0.1.1/list", "@aimpact/chat-sdk@1.0.0/session", "@beyond-js/kernel@0.1.9/routing", "@aimpact/ailearn-app@0.0.46.dev-13/modules/assign", "pragmate-ui@0.1.1/tabs", "pragmate-ui@0.1.1/empty"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp0046Dev13MainLayoutWidget) {
      dependency_4 = _aimpactAilearnApp0046Dev13MainLayoutWidget;
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
    }, function (_aimpactAilearnApp0046Dev13ComponentsUi) {
      dependency_10 = _aimpactAilearnApp0046Dev13ComponentsUi;
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
    }, function (_aimpactAilearnApp0046Dev13ModulesAssign) {
      dependency_19 = _aimpactAilearnApp0046Dev13ModulesAssign;
    }, function (_pragmateUi011Tabs) {
      dependency_20 = _pragmateUi011Tabs;
    }, function (_pragmateUi011Empty) {
      dependency_21 = _pragmateUi011Empty;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.0.46.dev-13"], ["@aimpact/ailearn-app", "0.0.46.dev-13"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.46.dev-13/modules/list",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/main-layout.widget', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/ailearn-sdk/learning-modules', dependency_6], ['@beyond-js/kernel/texts', dependency_7], ['react', dependency_8], ['pragmate-ui/components', dependency_9], ['@aimpact/ailearn-app/components/ui', dependency_10], ['@aimpact/chat/shared/components', dependency_11], ['@beyond-js/react-18-widgets/hooks', dependency_12], ['pragmate-ui/link', dependency_13], ['pragmate-ui/icons', dependency_14], ['pragmate-ui/modal', dependency_15], ['pragmate-ui/list', dependency_16], ['@aimpact/chat-sdk/session', dependency_17], ['@beyond-js/kernel/routing', dependency_18], ['@aimpact/ailearn-app/modules/assign', dependency_19], ['pragmate-ui/tabs', dependency_20], ['pragmate-ui/empty', dependency_21]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-modules-list",
        "vspecifier": "@aimpact/ailearn-app@0.0.46.dev-13/modules/list.widget",
        "is": "page",
        "route": "/modules/list",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.46.dev-13/modules/list.widget');
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
        hash: 205350045,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsInRhYiIsInVyaSIsInFzIiwiZ2V0IiwibG9hZCIsImhpZGUiLCJjbGVhciIsImV4cG9ydHMiLCJfbWFpbkxheW91dCIsIl9tb2RlbCIsIl9sZWFybmluZ01vZHVsZXMiLCJfdGV4dHMiLCJfYmV5b25kX2NvbnRleHQiLCJSZWFjdGl2ZU1vZGVsIiwiZHJhZnRzIiwiZHJhZnQiLCJtb2R1bGVzIiwiY29tbXVuaXR5IiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ2YWx1ZSIsInJlYWR5IiwiY29uc3RydWN0b3IiLCJMZWFybmluZ01vZHVsZXMiLCJvbiIsInRyaWdnZXJFdmVudCIsInNldEJyZWFkY3J1bWIiLCJvbkNoYW5nZSIsImJpbmQiLCJvZmYiLCJMYXlvdXRCcm9rZXIiLCJvdmVybGF5IiwiZ2xvYmFsVGhpcyIsInNldFRpbWVvdXQiLCJicmVhZGNydW1iIiwibG9hZE1vZHVsZXMiLCJsb2FkZWQiLCJ0eXBlIiwicm91dGUiLCJvcmRlckJ5IiwibG9hZERyYWZ0cyIsImxvYWRDb21tdW5pdHkiLCJ0eXBlcyIsInB1Ymxpc2hlZCIsIkVycm9yIiwiZGVsZXRlRHJhZnQiLCJpZCIsIml0ZW0iLCJlbGVtZW50cyIsImRlbGV0ZSIsIl9yZWFjdCIsIkxpc3RDb250ZXh0IiwiZGVmYXVsdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VMaXN0Q29udGV4dCIsInVzZUNvbnRleHQiLCJSZWFjdCIsIl9jb21wb25lbnRzIiwiX2NvbnRleHQiLCJfdWkiLCJFbXB0eUxpc3QiLCJjcmVhdGVFbGVtZW50IiwiRW1wdHlDYXJkIiwidGV4dCIsImVtcHR5IiwiZ2VuZXJhbCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpY29uIiwiY2xhc3NOYW1lIiwiTGluayIsImhyZWYiLCJhY3Rpb25zIiwiY3JlYXRlIiwiX2xpc3QiLCJfaG9va3MiLCJfbGluayIsIl9pY29ucyIsInNldFJlYWR5IiwidXNlU3RhdGUiLCJmZXRjaGluZyIsInVzZUJpbmRlciIsIlByZWxvYWRTY3JlZW4iLCJQcm92aWRlciIsIlBhZ2VDb250YWluZXIiLCJQYWdlVGl0bGUiLCJJY29uIiwiTGlzdCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX29yZ2FuaXphdGlvbnNNb2RhbCIsIkNvbW11bml0eUFjdGlvbnMiLCJvcGVuTW9kYWwiLCJzZXRPcGVuTW9kYWwiLCJvblVzZSIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwidG9nZ2xlTW9kYWwiLCJCdXR0b24iLCJ2YXJpYW50IiwiYm9yZGVyZWQiLCJvbkNsaWNrIiwidXNlIiwiT3JnYW5pemF0aW9uc01vZGFsIiwib25DbG9zZSIsIl9hY3Rpb25zIiwiQ29tbXVuaXR5SXRlbSIsIm9iamVjdGl2ZSIsIkVudGl0eUltYWdlIiwic3JjIiwicGljdHVyZSIsImVudGl0eSIsImFsdCIsIl9tb2RhbCIsIl9zZXNzaW9uIiwiX3JvdXRpbmciLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwiZXJyb3IiLCJzZXRFcnJvciIsInNldEZldGNoaW5nIiwiY2xvbmUiLCJyZXNwb25zZSIsInN0YXR1cyIsImNvbnNvbGUiLCJsb2ciLCJlcnJvcnMiLCJmYWlsZWQiLCJyb3V0aW5nIiwicHVzaFN0YXRlIiwiZGF0YSIsIkl0ZW0iLCJuYW1lIiwiTW9kYWwiLCJjbG9zZUJhY2tkcm9wIiwiRXJyb3JSZW5kZXJlciIsIml0ZW1zIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwib3JnYW5pemF0aW9ucyIsImNvbnRyb2wiLCJzcGVjcyIsImRpc2FibGVkIiwiY29udGludWUiLCJJdGVtRHJhZnRzIiwib25EZWxldGUiLCJDb25maXJtQWN0aW9uIiwidGV4dFBvcFVwIiwib25Db25maXJtIiwiX2Fzc2lnbiIsIkxlYXJuaW5nTW9kdWxlQWN0aW9ucyIsInNoYXJlIiwiYXNzaWduIiwiTW9kdWxlQXNzaWdubWVudHMiLCJTVEFUVVNfQ09MT1JTIiwicHJvY2Vzc2luZyIsIlN0YXR1cyIsInN5bnRoZXNpcyIsInJlbGV2YW5jZSIsImFzc2Vzc21lbnQiLCJnZXRTdGF0dXNDb2xvciIsImNvbG9yIiwiY2xhc3NlcyIsIk1vZHVsZURhdGEiLCJfdGFicyIsIl9tYW5hZ2VMaXN0IiwiX21vZHVsZSIsIl9kcmFmdHMiLCJfY29tbXVuaXR5IiwidGFicyIsInRhYkluZGV4IiwiaW5kZXhPZiIsInRhYlNlbGVjdCIsInVzZVRhYlNlbGVjdCIsImluZGV4IiwidXJsUGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwibG9jYXRpb24iLCJzZWFyY2giLCJzZXQiLCJyZXBsYWNlU3RhdGUiLCJkb2N1bWVudCIsInRvU3RyaW5nIiwiRnJhZ21lbnQiLCJUYWJzQ29udGFpbmVyIiwiYWN0aXZlIiwiVGFicyIsIlRhYiIsIlBhbmVzIiwiTWFuYWdlTGlzdCIsImNvbGxlY3Rpb24iLCJwcmV2ZW50TWVzc2FnZSIsImxvYWRpbmdNZXNzYWdlIiwibG9hZGluZyIsIl9lbXB0eSIsInNldEl0ZW1zIiwibGVuZ3RoIiwiRW1wdHkiLCJTcGlubmVyIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9lbXB0eS50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL2ludGVyZmFjZXMudHMiLCIvdHMvdmlld3MvaXRlbS9jb21tdW5pdHkvYWN0aW9ucy50c3giLCIvdHMvdmlld3MvaXRlbS9jb21tdW5pdHkvY29tbXVuaXR5LnRzeCIsIi90cy92aWV3cy9pdGVtL2NvbW11bml0eS9vcmdhbml6YXRpb25zLW1vZGFsLnRzeCIsIi90cy92aWV3cy9pdGVtL2RyYWZ0cy50c3giLCIvdHMvdmlld3MvaXRlbS9tb2R1bGUvYWN0aW9ucy50c3giLCIvdHMvdmlld3MvaXRlbS9tb2R1bGUvbW9kdWxlLnRzeCIsIi90cy92aWV3cy9pdGVtL3N0YXR1cy50c3giLCIvdHMvdmlld3MvaXRlbS90aXRsZS50c3giLCIvdHMvdmlld3MvbGlzdC9pbmRleC50c3giLCIvdHMvdmlld3MvbGlzdC9tYW5hZ2UtbGlzdC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBR087VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUgsTUFBQSxDQUFBSyxZQUFZLEVBQUU7Y0FDaEMsT0FBcUIsSUFBSSxDQUFDLENBQUFGLEtBQU07WUFDakM7WUFDQSxJQUFJRyxNQUFNQSxDQUFBO2NBQ1QsT0FBT1AsTUFBQSxDQUFBUSxJQUFJO1lBQ1o7WUFFQUMsSUFBSUEsQ0FBQTtjQUNILE1BQU1DLEdBQUcsR0FBRyxJQUFJLENBQUNDLEdBQUcsQ0FBQ0MsRUFBRSxDQUFDQyxHQUFHLENBQUMsS0FBSyxDQUFDO2NBQ2xDLElBQUksQ0FBQyxDQUFBVCxLQUFNLENBQUNVLElBQUksQ0FBQ0osR0FBRyxDQUFDO1lBQ3RCO1lBRUFLLElBQUlBLENBQUE7Y0FDSCxJQUFJLENBQUMsQ0FBQVgsS0FBTSxDQUFDWSxLQUFLLEVBQUU7WUFDcEI7O1VBQ0FDLE9BQUEsQ0FBQWYsVUFBQSxHQUFBQSxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3hCRCxJQUFBZ0IsV0FBQSxHQUFBbkIsT0FBQTtVQUNBLElBQUFvQixNQUFBLEdBQUFwQixPQUFBO1VBQ0EsSUFBQXFCLGdCQUFBLEdBQUFyQixPQUFBO1VBQ0EsSUFBQXNCLE1BQUEsR0FBQXRCLE9BQUE7VUFDQSxJQUFBdUIsZUFBQSxHQUFBdkIsT0FBQTtVQUVNLE1BQU9PLFlBQWEsU0FBUWEsTUFBQSxDQUFBSSxhQUEyQjtZQUM1RCxDQUFBQyxNQUFPO1lBRVAsSUFBSUMsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFELE1BQU87WUFDcEI7WUFFQSxDQUFBRSxPQUFRO1lBQ1IsSUFBSUEsT0FBT0EsQ0FBQTtjQUNWLE9BQU8sSUFBSSxDQUFDLENBQUFBLE9BQVE7WUFDckI7WUFFQSxDQUFBQyxTQUFVO1lBQ1YsSUFBSUEsU0FBU0EsQ0FBQTtjQUNaLE9BQU8sSUFBSSxDQUFDLENBQUFBLFNBQVU7WUFDdkI7WUFDQSxDQUFBakIsR0FBSTtZQUNKLElBQUlBLEdBQUdBLENBQUE7Y0FDTixPQUFPLElBQUksQ0FBQyxDQUFBQSxHQUFJO1lBQ2pCO1lBQ0EsQ0FBQWtCLEtBQU0sR0FBK0IsSUFBSVAsTUFBQSxDQUFBUSxZQUFZLENBQUNQLGVBQUEsQ0FBQVEsTUFBTSxDQUFDQyxTQUFTLENBQUM7WUFDdkUsSUFBSUgsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU0sRUFBRUksS0FBSztZQUMxQjtZQUVBLElBQUlDLEtBQUtBLENBQUE7Y0FDUixPQUFPLEtBQUssQ0FBQ0EsS0FBSyxJQUFJLElBQUksQ0FBQyxDQUFBTCxLQUFNLENBQUNLLEtBQUs7WUFDeEM7WUFDQUMsWUFBQTtjQUNDLEtBQUssRUFBRTtjQUVQLElBQUksQ0FBQyxDQUFBVixNQUFPLEdBQUcsSUFBSUosZ0JBQUEsQ0FBQWUsZUFBZSxFQUFFO2NBQ3BDLElBQUksQ0FBQyxDQUFBVCxPQUFRLEdBQUcsSUFBSU4sZ0JBQUEsQ0FBQWUsZUFBZSxFQUFFO2NBQ3JDLElBQUksQ0FBQyxDQUFBUixTQUFVLEdBQUcsSUFBSVAsZ0JBQUEsQ0FBQWUsZUFBZSxFQUFFO2NBQ3ZDLElBQUksQ0FBQyxDQUFBUCxLQUFNLENBQUNRLEVBQUUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDQyxZQUFZLENBQUM7WUFDNUM7WUFFQXJCLEtBQUtBLENBQUE7Y0FDSixLQUFLLENBQUNpQixLQUFLLEdBQUcsS0FBSztZQUNwQjtZQUVBSyxhQUFhQSxDQUFBO2NBQ1osTUFBTUMsUUFBUSxHQUFHLElBQUksQ0FBQ0QsYUFBYSxDQUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDO2NBQzlDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQVosS0FBTSxDQUFDSyxLQUFLLEVBQUU7Z0JBQ3ZCLElBQUksQ0FBQyxDQUFBTCxLQUFNLENBQUNRLEVBQUUsQ0FBQyxRQUFRLEVBQUVHLFFBQVEsQ0FBQztnQkFDbEM7O2NBRUQsSUFBSSxDQUFDLENBQUFYLEtBQU0sQ0FBQ2EsR0FBRyxDQUFDLFFBQVEsRUFBRUYsUUFBUSxDQUFDO2NBRW5DckIsV0FBQSxDQUFBd0IsWUFBWSxDQUFDQyxPQUFPLEdBQUcsS0FBSztjQUM1QkMsVUFBVSxDQUFDQyxVQUFVLENBQUMsTUFBSztnQkFDMUIzQixXQUFBLENBQUF3QixZQUFZLENBQUNJLFVBQVUsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDbEIsS0FBSyxDQUFDa0IsVUFBVSxDQUFDcEIsT0FBTyxDQUFDLENBQUM7Y0FDNUQsQ0FBQyxFQUFFLEdBQUcsQ0FBQztZQUNSO1lBRUEsTUFBTXFCLFdBQVdBLENBQUE7Y0FDaEIsSUFBSSxDQUFDLENBQUFyQyxHQUFJLEdBQUcsV0FBVztjQUV2QixJQUFJLElBQUksQ0FBQyxDQUFBZ0IsT0FBUSxDQUFDc0IsTUFBTSxFQUFFO2NBQzFCLE1BQU0sSUFBSSxDQUFDLENBQUF0QixPQUFRLENBQUNaLElBQUksQ0FBQztnQkFBRW1DLElBQUksRUFBRSxRQUFRO2dCQUFFQyxLQUFLLEVBQUUsRUFBRTtnQkFBRUMsT0FBTyxFQUFFO2NBQWEsQ0FBRSxDQUFDO2NBQy9FLEtBQUssQ0FBQ2xCLEtBQUssR0FBRyxJQUFJO1lBQ25CO1lBRUEsTUFBTW1CLFVBQVVBLENBQUE7Y0FDZixJQUFJLENBQUMsQ0FBQTFDLEdBQUksR0FBRyxPQUFPO2NBQ25CLElBQUksSUFBSSxDQUFDLENBQUFjLE1BQU8sQ0FBQ3dCLE1BQU0sRUFBRTtjQUV6QixNQUFNLElBQUksQ0FBQyxDQUFBeEIsTUFBTyxDQUFDVixJQUFJLENBQUM7Z0JBQUVtQyxJQUFJLEVBQUUsT0FBTztnQkFBRUMsS0FBSyxFQUFFLFNBQVM7Z0JBQUVDLE9BQU8sRUFBRTtjQUFhLENBQUUsQ0FBQztjQUNwRixLQUFLLENBQUNsQixLQUFLLEdBQUcsSUFBSTtZQUNuQjtZQUVBLE1BQU1vQixhQUFhQSxDQUFBO2NBQ2xCLElBQUksQ0FBQyxDQUFBM0MsR0FBSSxHQUFHLFdBQVc7Y0FDdkIsSUFBSSxJQUFJLENBQUMsQ0FBQWMsTUFBTyxDQUFDd0IsTUFBTSxFQUFFO2NBQ3pCLE1BQU0sSUFBSSxDQUFDLENBQUFyQixTQUFVLENBQUNiLElBQUksQ0FBQztnQkFBRW1DLElBQUksRUFBRSxXQUFXO2dCQUFFQyxLQUFLLEVBQUUsV0FBVztnQkFBRUMsT0FBTyxFQUFFO2NBQWEsQ0FBRSxDQUFDO2NBQzdGLEtBQUssQ0FBQ2xCLEtBQUssR0FBRyxJQUFJO1lBQ25CO1lBQ0FuQixJQUFJQSxDQUFDbUMsSUFBSSxHQUFHLFdBQVc7Y0FDdEIsSUFBSSxDQUFDWCxhQUFhLEVBQUU7Y0FDcEIsTUFBTWdCLEtBQUssR0FBRztnQkFDYjNCLFNBQVMsRUFBRSxJQUFJLENBQUMwQixhQUFhLENBQUNiLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQ3hDZixLQUFLLEVBQUUsSUFBSSxDQUFDMkIsVUFBVSxDQUFDWixJQUFJLENBQUMsSUFBSSxDQUFDO2dCQUNqQ2UsU0FBUyxFQUFFLElBQUksQ0FBQ1IsV0FBVyxDQUFDUCxJQUFJLENBQUMsSUFBSTtlQUNyQztjQUNELElBQUksQ0FBQ2MsS0FBSyxDQUFDTCxJQUFJLENBQUMsRUFBRTtnQkFDakIsTUFBTSxJQUFJTyxLQUFLLENBQUMsaUJBQWlCUCxJQUFJLEVBQUUsQ0FBQzs7Y0FFekNLLEtBQUssQ0FBQ0wsSUFBSSxDQUFDLEVBQUU7WUFDZDtZQUVBLE1BQU1RLFdBQVdBLENBQUNDLEVBQUU7Y0FDbkIsTUFBTUMsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFBbkMsTUFBTyxDQUFDb0MsUUFBUSxDQUFDL0MsR0FBRyxDQUFDNkMsRUFBRSxDQUFDO2NBQzFDLE1BQU1DLElBQUksQ0FBQ0UsTUFBTSxFQUFFO2NBQ25CLE1BQU0sSUFBSSxDQUFDLENBQUFyQyxNQUFPLENBQUNWLElBQUksQ0FBQztnQkFBRW1DLElBQUksRUFBRSxPQUFPO2dCQUFFQyxLQUFLLEVBQUU7Y0FBUyxDQUFFLENBQUM7Y0FDNUQsSUFBSSxDQUFDYixZQUFZLEVBQUU7WUFDcEI7O1VBQ0FwQixPQUFBLENBQUFYLFlBQUEsR0FBQUEsWUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN0R0QsSUFBQXdELE1BQUEsR0FBQS9ELE9BQUE7VUFXTyxNQUFNZ0UsV0FBVyxHQUFBOUMsT0FBQSxDQUFBOEMsV0FBQSxHQUFHRCxNQUFBLENBQUFFLE9BQUssQ0FBQ0MsYUFBYSxDQUFDLEVBQWtCLENBQUM7VUFDM0QsTUFBTUMsY0FBYyxHQUFHQSxDQUFBLEtBQU1KLE1BQUEsQ0FBQUUsT0FBSyxDQUFDRyxVQUFVLENBQUNKLFdBQVcsQ0FBQztVQUFDOUMsT0FBQSxDQUFBaUQsY0FBQSxHQUFBQSxjQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1psRSxJQUFBRSxLQUFBLEdBQUFyRSxPQUFBO1VBQ0EsSUFBQXNFLFdBQUEsR0FBQXRFLE9BQUE7VUFDQSxJQUFBdUUsUUFBQSxHQUFBdkUsT0FBQTtVQUNBLElBQUF3RSxHQUFBLEdBQUF4RSxPQUFBO1VBRU0sU0FBVXlFLFNBQVNBLENBQUE7WUFDeEIsTUFBTTtjQUFFNUM7WUFBSyxDQUFFLEdBQUcsSUFBQTBDLFFBQUEsQ0FBQUosY0FBYyxHQUFFO1lBQ2xDLE9BQ0NFLEtBQUEsQ0FBQUssYUFBQSxDQUFDRixHQUFBLENBQUFHLFNBQVM7Y0FBQ0MsSUFBSSxFQUFFL0MsS0FBSyxDQUFDZ0QsS0FBSyxDQUFDQyxPQUFPLENBQUNDLEtBQUs7Y0FBRUMsV0FBVyxFQUFFbkQsS0FBSyxDQUFDZ0QsS0FBSyxDQUFDQyxPQUFPLENBQUNFLFdBQVc7Y0FBRUMsSUFBSSxFQUFDO1lBQU0sR0FDcEdaLEtBQUEsQ0FBQUssYUFBQTtjQUFLUSxTQUFTLEVBQUM7WUFBb0MsR0FDbERiLEtBQUEsQ0FBQUssYUFBQSxDQUFDSixXQUFBLENBQUFhLElBQUk7Y0FBQ0MsSUFBSSxFQUFDLHFCQUFxQjtjQUFDRixTQUFTLEVBQUM7WUFBc0IsR0FDL0RyRCxLQUFLLENBQUN3RCxPQUFPLENBQUNDLE1BQU0sQ0FDZixDQUNGLENBQ0s7VUFFZDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNoQkEsSUFBQXZCLE1BQUEsR0FBQS9ELE9BQUE7VUFDQSxJQUFBd0UsR0FBQSxHQUFBeEUsT0FBQTtVQUVBLElBQUF1RixLQUFBLEdBQUF2RixPQUFBO1VBQ0EsSUFBQXVFLFFBQUEsR0FBQXZFLE9BQUE7VUFDQSxJQUFBc0UsV0FBQSxHQUFBdEUsT0FBQTtVQUNBLElBQUF3RixNQUFBLEdBQUF4RixPQUFBO1VBRUEsSUFBQXlGLEtBQUEsR0FBQXpGLE9BQUE7VUFDQSxJQUFBMEYsTUFBQSxHQUFBMUYsT0FBQTtVQUdPO1VBQVUsU0FDUlMsSUFBSUEsQ0FBQztZQUFFSjtVQUFLLENBQTJCO1lBQy9DLE1BQU0sQ0FBQzZCLEtBQUssRUFBRXlELFFBQVEsQ0FBQyxHQUFHLElBQUE1QixNQUFBLENBQUE2QixRQUFRLEVBQVV2RixLQUFLLENBQUM2QixLQUFLLENBQUM7WUFDeEQsTUFBTSxDQUFDMkQsUUFBUSxDQUFDLEdBQUcsSUFBQTlCLE1BQUEsQ0FBQTZCLFFBQVEsRUFBVXZGLEtBQUssQ0FBQ3dGLFFBQVEsQ0FBQztZQUNwRCxNQUFNO2NBQUVoRTtZQUFLLENBQUUsR0FBR3hCLEtBQUs7WUFDdkIsSUFBQW1GLE1BQUEsQ0FBQU0sU0FBUyxFQUFDLENBQUN6RixLQUFLLENBQUMsRUFBRSxNQUFNc0YsUUFBUSxDQUFDdEYsS0FBSyxDQUFDNkIsS0FBSyxDQUFDLENBQUM7WUFFL0MsSUFBSSxDQUFDQSxLQUFLLEVBQUUsT0FBTzZCLE1BQUEsQ0FBQUUsT0FBQSxDQUFBUyxhQUFBLENBQUNKLFdBQUEsQ0FBQXlCLGFBQWEsT0FBRztZQUVwQyxNQUFNOUQsS0FBSyxHQUFHO2NBQUVKLEtBQUs7Y0FBRXhCLEtBQUs7Y0FBRXdGO1lBQVEsQ0FBRTtZQUV4QyxPQUNDOUIsTUFBQSxDQUFBRSxPQUFBLENBQUFTLGFBQUEsQ0FBQ0gsUUFBQSxDQUFBUCxXQUFXLENBQUNnQyxRQUFRO2NBQUMvRCxLQUFLLEVBQUVBO1lBQUssR0FDakM4QixNQUFBLENBQUFFLE9BQUEsQ0FBQVMsYUFBQSxDQUFDRixHQUFBLENBQUF5QixhQUFhLFFBQ2JsQyxNQUFBLENBQUFFLE9BQUEsQ0FBQVMsYUFBQSxDQUFDRixHQUFBLENBQUEwQixTQUFTO2NBQUNuQixLQUFLLEVBQUVsRCxLQUFLLENBQUNrRDtZQUFLLEdBQzVCaEIsTUFBQSxDQUFBRSxPQUFBLENBQUFTLGFBQUE7Y0FBU1EsU0FBUyxFQUFDO1lBQWdCLEdBQ2xDbkIsTUFBQSxDQUFBRSxPQUFBLENBQUFTLGFBQUEsQ0FBQ2UsS0FBQSxDQUFBTixJQUFJO2NBQUNDLElBQUksRUFBQztZQUFxQixHQUMvQnJCLE1BQUEsQ0FBQUUsT0FBQSxDQUFBUyxhQUFBLENBQUNnQixNQUFBLENBQUFTLElBQUk7Y0FBQ2xCLElBQUksRUFBQztZQUFZLEVBQUcsRUFDekJwRCxLQUFLLENBQUN3RCxPQUFPLENBQUNDLE1BQU0sQ0FDZixDQUNFLENBQ0MsRUFDWnZCLE1BQUEsQ0FBQUUsT0FBQSxDQUFBUyxhQUFBLENBQUNhLEtBQUEsQ0FBQWEsSUFBSSxPQUFHLENBQ08sQ0FDTTtVQUV6Qjs7Ozs7Ozs7Ozs7VUN0Q0E7O1VBRUFDLE1BQUEsQ0FBQUMsY0FBQSxDQUFBcEYsT0FBQTtZQUNBZSxLQUFBO1VBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDSkEsSUFBQW9DLEtBQUEsR0FBQXJFLE9BQUE7VUFDQSxJQUFBdUUsUUFBQSxHQUFBdkUsT0FBQTtVQUNBLElBQUFzRSxXQUFBLEdBQUF0RSxPQUFBO1VBQ0EsSUFBQXVHLG1CQUFBLEdBQUF2RyxPQUFBO1VBRWMsU0FBVXdHLGdCQUFnQkEsQ0FBQztZQUFFekU7VUFBTSxDQUFFO1lBQ2xELE1BQU07Y0FBRUY7WUFBSyxDQUFFLEdBQUcsSUFBQTBDLFFBQUEsQ0FBQUosY0FBYyxHQUFFO1lBQ2xDLE1BQU0sQ0FBQ3NDLFNBQVMsRUFBRUMsWUFBWSxDQUFDLEdBQUdyQyxLQUFLLENBQUN1QixRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3ZELE1BQU1lLEtBQUssR0FBR0MsS0FBSyxJQUFHO2NBQ3JCQSxLQUFLLENBQUNDLGVBQWUsRUFBRTtjQUN2QkgsWUFBWSxDQUFDLElBQUksQ0FBQztZQUNuQixDQUFDO1lBQ0QsTUFBTUksV0FBVyxHQUFHQSxDQUFBLEtBQU1KLFlBQVksQ0FBQyxDQUFDRCxTQUFTLENBQUM7WUFDbEQsT0FDQ3BDLEtBQUEsQ0FBQUssYUFBQTtjQUFRUSxTQUFTLEVBQUM7WUFBc0MsR0FDdkRiLEtBQUEsQ0FBQUssYUFBQSxDQUFDSixXQUFBLENBQUF5QyxNQUFNO2NBQUNDLE9BQU8sRUFBQyxTQUFTO2NBQUNDLFFBQVE7Y0FBQ0MsT0FBTyxFQUFFUDtZQUFLLEdBQy9DOUUsS0FBSyxDQUFDd0QsT0FBTyxDQUFDOEIsR0FBRyxDQUNWLEVBQ1JWLFNBQVMsSUFBSXBDLEtBQUEsQ0FBQUssYUFBQSxDQUFDNkIsbUJBQUEsQ0FBQWEsa0JBQWtCO2NBQUNyRixNQUFNLEVBQUVBLE1BQU07Y0FBRXNGLE9BQU8sRUFBRVAsV0FBVztjQUFFakYsS0FBSyxFQUFFQTtZQUFLLEVBQUksQ0FDaEY7VUFFWDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNyQkEsSUFBQXdDLEtBQUEsR0FBQXJFLE9BQUE7VUFFQSxJQUFBd0UsR0FBQSxHQUFBeEUsT0FBQTtVQUVBLElBQUF1RSxRQUFBLEdBQUF2RSxPQUFBO1VBQ0EsSUFBQXNILFFBQUEsR0FBQXRILE9BQUE7VUFFTSxTQUFVdUgsYUFBYUEsQ0FBQztZQUFFM0Q7VUFBSSxDQUFFO1lBQ3JDLE1BQU07Y0FBRS9CO1lBQUssQ0FBRSxHQUFHLElBQUEwQyxRQUFBLENBQUFKLGNBQWMsR0FBRTtZQUNsQyxNQUFNWSxLQUFLLEdBQUduQixJQUFJLENBQUNtQixLQUFLLElBQUluQixJQUFJLENBQUM0RCxTQUFTO1lBQzFDLE1BQU14QyxXQUFXLEdBQUdwQixJQUFJLENBQUNvQixXQUFXLElBQUluRCxLQUFLLENBQUMrQixJQUFJLENBQUNvQixXQUFXO1lBRTlELE9BQ0NYLEtBQUEsQ0FBQUssYUFBQTtjQUFTUSxTQUFTLEVBQUM7WUFBYyxHQUNoQ2IsS0FBQSxDQUFBSyxhQUFBLENBQUNGLEdBQUEsQ0FBQWlELFdBQVc7Y0FBQ0MsR0FBRyxFQUFFOUQsSUFBSSxDQUFDK0QsT0FBTztjQUFFQyxNQUFNLEVBQUMsUUFBUTtjQUFDQyxHQUFHLEVBQUU5QztZQUFLLEVBQUksRUFDOURWLEtBQUEsQ0FBQUssYUFBQTtjQUFTUSxTQUFTLEVBQUM7WUFBc0IsR0FDeENiLEtBQUEsQ0FBQUssYUFBQSxhQUFLSyxLQUFLLENBQU0sRUFDaEJWLEtBQUEsQ0FBQUssYUFBQSxlQUFPTSxXQUFXLENBQVEsQ0FDakIsRUFDVlgsS0FBQSxDQUFBSyxhQUFBLENBQUM0QyxRQUFBLENBQUFyRCxPQUFnQjtjQUFDbEMsTUFBTSxFQUFFNkI7WUFBSSxFQUFJLENBQ3pCO1VBRVo7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdEJBLElBQUFTLEtBQUEsR0FBQXJFLE9BQUE7VUFDQSxJQUFBOEgsTUFBQSxHQUFBOUgsT0FBQTtVQUNBLElBQUF1RixLQUFBLEdBQUF2RixPQUFBO1VBQ0EsSUFBQStILFFBQUEsR0FBQS9ILE9BQUE7VUFDQSxJQUFBd0UsR0FBQSxHQUFBeEUsT0FBQTtVQUNBLElBQUFzRSxXQUFBLEdBQUF0RSxPQUFBO1VBQ0EsSUFBQTBGLE1BQUEsR0FBQTFGLE9BQUE7VUFDQSxJQUFBZ0ksUUFBQSxHQUFBaEksT0FBQTtVQUNNLFNBQVVvSCxrQkFBa0JBLENBQUM7WUFBRXJGLE1BQU07WUFBRXNGLE9BQU87WUFBRXhGO1VBQUssQ0FBRTtZQUM1RCxNQUFNLENBQUNvRyxRQUFRLEVBQUVDLFdBQVcsQ0FBQyxHQUFHN0QsS0FBSyxDQUFDdUIsUUFBUSxFQUFPO1lBQ3JELE1BQU0sQ0FBQ3VDLEtBQUssRUFBRUMsUUFBUSxDQUFDLEdBQUcvRCxLQUFLLENBQUN1QixRQUFRLEVBQUU7WUFDMUMsTUFBTSxDQUFDQyxRQUFRLEVBQUV3QyxXQUFXLENBQUMsR0FBR2hFLEtBQUssQ0FBQ3VCLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDckQsTUFBTTBDLEtBQUssR0FBRyxNQUFBQSxDQUFBLEtBQVc7Y0FDeEIsSUFBSTtnQkFDSCxJQUFJLENBQUNMLFFBQVEsRUFBRTtnQkFDZkksV0FBVyxDQUFDLElBQUksQ0FBQztnQkFFakIsTUFBTUUsUUFBUSxHQUFHLE1BQU14RyxNQUFNLENBQUN1RyxLQUFLLENBQUN2RyxNQUFNLENBQUM0QixFQUFFLEVBQUVzRSxRQUFRLENBQUN0RSxFQUFFLEVBQUVzRSxRQUFRLENBQUNMLE1BQU0sQ0FBQztnQkFDNUUsSUFBSSxDQUFDVyxRQUFRLENBQUNDLE1BQU0sRUFBRTtrQkFDckJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxRQUFRLENBQUM7a0JBQ3JCSCxRQUFRLENBQUN2RyxLQUFLLENBQUM4RyxNQUFNLENBQUNDLE1BQU0sQ0FBQzs7Z0JBRTlCWixRQUFBLENBQUFhLE9BQU8sQ0FBQ0MsU0FBUyxDQUFDLDBCQUEwQlAsUUFBUSxDQUFDUSxJQUFJLENBQUNwRixFQUFFLEVBQUUsQ0FBQztlQUMvRCxDQUFDLE9BQU93RSxLQUFLLEVBQUU7Z0JBQ2ZDLFFBQVEsQ0FBQ3ZHLEtBQUssQ0FBQzhHLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDO2VBQzdCLFNBQVM7Z0JBQ1RQLFdBQVcsQ0FBQyxLQUFLLENBQUM7O1lBRXBCLENBQUM7WUFDRCxNQUFNVyxJQUFJLEdBQUdBLENBQUM7Y0FBRXBGO1lBQUksQ0FBRSxLQUFJO2NBQ3pCLE1BQU1zRCxPQUFPLEdBQUdBLENBQUEsS0FBSztnQkFDcEJnQixXQUFXLENBQUN0RSxJQUFJLENBQUM7Y0FDbEIsQ0FBQztjQUNELE1BQU1zQixTQUFTLEdBQUcrQyxRQUFRLEVBQUV0RSxFQUFFLEtBQUtDLElBQUksQ0FBQ0QsRUFBRSxHQUFHLHlCQUF5QixHQUFHLGFBQWE7Y0FDdEYsT0FDQ1UsS0FBQSxDQUFBSyxhQUFBO2dCQUFBLFdBQWFkLElBQUksQ0FBQ0QsRUFBRTtnQkFBQSxlQUFlQyxJQUFJLENBQUNnRSxNQUFNO2dCQUFFMUMsU0FBUyxFQUFFQSxTQUFTO2dCQUFFZ0MsT0FBTyxFQUFFQTtjQUFPLEdBQ3JGN0MsS0FBQSxDQUFBSyxhQUFBLENBQUNGLEdBQUEsQ0FBQWlELFdBQVc7Z0JBQUNDLEdBQUcsRUFBRTlELElBQUksQ0FBQytELE9BQU87Z0JBQUVDLE1BQU0sRUFBQyxhQUFhO2dCQUFDQyxHQUFHLEVBQUVqRSxJQUFJLENBQUNxRjtjQUFJLEVBQUksRUFDdkU1RSxLQUFBLENBQUFLLGFBQUEsZUFBT2QsSUFBSSxDQUFDcUYsSUFBSSxDQUFRLEVBRXZCaEIsUUFBUSxFQUFFdEUsRUFBRSxLQUFLQyxJQUFJLENBQUNELEVBQUUsSUFBSVUsS0FBQSxDQUFBSyxhQUFBLENBQUNnQixNQUFBLENBQUFTLElBQUk7Z0JBQUNsQixJQUFJLEVBQUMsY0FBYztnQkFBQ0MsU0FBUyxFQUFDO2NBQVksRUFBRyxDQUM1RTtZQUVQLENBQUM7WUFFRCxPQUNDYixLQUFBLENBQUFLLGFBQUEsQ0FBQ29ELE1BQUEsQ0FBQW9CLEtBQUs7Y0FBQ0MsYUFBYSxFQUFFLEtBQUs7Y0FBRXpJLElBQUk7Y0FBQzJHLE9BQU8sRUFBRUEsT0FBTztjQUFFOEIsYUFBYSxFQUFFLEtBQUs7Y0FBRWpFLFNBQVMsRUFBQztZQUFtQixHQUN0R2IsS0FBQSxDQUFBSyxhQUFBLDZCQUFzQixFQUN0QkwsS0FBQSxDQUFBSyxhQUFBLENBQUNGLEdBQUEsQ0FBQTRFLGFBQWE7Y0FBQ2pCLEtBQUssRUFBRUE7WUFBSyxFQUFJLEVBQy9COUQsS0FBQSxDQUFBSyxhQUFBLENBQUNhLEtBQUEsQ0FBQWEsSUFBSTtjQUFDaUQsS0FBSyxFQUFFdEIsUUFBQSxDQUFBdUIsY0FBYyxDQUFDQyxJQUFJLENBQUNDLGFBQWE7Y0FBRUMsT0FBTyxFQUFFVCxJQUFJO2NBQUU5RCxTQUFTLEVBQUMsbUJBQW1CO2NBQUN3RSxLQUFLLEVBQUU7WUFBRSxFQUFJLEVBQzFHckYsS0FBQSxDQUFBSyxhQUFBO2NBQUtRLFNBQVMsRUFBQztZQUE0QyxHQUMxRGIsS0FBQSxDQUFBSyxhQUFBLENBQUNKLFdBQUEsQ0FBQXlDLE1BQU07Y0FBQ0MsT0FBTyxFQUFDLFNBQVM7Y0FBQzJDLFFBQVEsRUFBRSxDQUFDMUIsUUFBUTtjQUFFcEMsUUFBUSxFQUFFQSxRQUFRO2NBQUVxQixPQUFPLEVBQUVvQjtZQUFLLEdBQy9FekcsS0FBSyxDQUFDd0QsT0FBTyxDQUFDdUUsUUFBUSxDQUNmLENBQ0osQ0FDQztVQUVWOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3hEQSxJQUFBdkYsS0FBQSxHQUFBckUsT0FBQTtVQUNBLElBQUFzRSxXQUFBLEdBQUF0RSxPQUFBO1VBQ0EsSUFBQXVFLFFBQUEsR0FBQXZFLE9BQUE7VUFDQSxJQUFBd0UsR0FBQSxHQUFBeEUsT0FBQTtVQUVNLFNBQVU2SixVQUFVQSxDQUFDO1lBQUVqRztVQUFJLENBQUU7WUFDbEMsTUFBTTtjQUFFL0IsS0FBSztjQUFFeEI7WUFBSyxDQUFFLEdBQUcsSUFBQWtFLFFBQUEsQ0FBQUosY0FBYyxHQUFFO1lBQ3pDLE1BQU07Y0FBRVksS0FBSztjQUFFQyxXQUFXO2NBQUV3QztZQUFTLENBQUUsR0FBRzVELElBQUk7WUFDOUMsTUFBTWtHLFFBQVEsR0FBRyxNQUFBQSxDQUFBLEtBQVc7Y0FDM0IsTUFBTXpKLEtBQUssQ0FBQ3FELFdBQVcsQ0FBQ0UsSUFBSSxDQUFDRCxFQUFFLENBQUM7WUFDakMsQ0FBQztZQUVELE9BQ0NVLEtBQUEsQ0FBQUssYUFBQTtjQUFTUSxTQUFTLEVBQUM7WUFBc0MsR0FDeERiLEtBQUEsQ0FBQUssYUFBQSxDQUFDRixHQUFBLENBQUFpRCxXQUFXO2NBQUNDLEdBQUcsRUFBRTlELElBQUksQ0FBQytELE9BQU87Y0FBRUMsTUFBTSxFQUFDLFFBQVE7Y0FBQ0MsR0FBRyxFQUFFOUM7WUFBSyxFQUFJLEVBQzlEVixLQUFBLENBQUFLLGFBQUE7Y0FBU1EsU0FBUyxFQUFDO1lBQXNCLEdBQ3hDYixLQUFBLENBQUFLLGFBQUEsQ0FBQ0osV0FBQSxDQUFBYSxJQUFJO2NBQUNDLElBQUksRUFBRSwwQkFBMEJ4QixJQUFJLENBQUNELEVBQUU7WUFBRSxHQUM5Q1UsS0FBQSxDQUFBSyxhQUFBLGFBQUtLLEtBQUssSUFBSXlDLFNBQVMsQ0FBTSxFQUM3Qm5ELEtBQUEsQ0FBQUssYUFBQSxlQUFPTSxXQUFXLENBQVEsQ0FDcEIsQ0FDRSxFQUVWWCxLQUFBLENBQUFLLGFBQUE7Y0FBUVEsU0FBUyxFQUFDO1lBQXNDLEdBQ3ZEYixLQUFBLENBQUFLLGFBQUEsQ0FBQ0YsR0FBQSxDQUFBdUYsYUFBYTtjQUFDQyxTQUFTLEVBQUVuSSxLQUFLLEVBQUV3RCxPQUFPLEVBQUV2QixNQUFNO2NBQUVtQixJQUFJLEVBQUMsUUFBUTtjQUFDZ0YsU0FBUyxFQUFFSDtZQUFRLEVBQUksQ0FDL0UsQ0FDQTtVQUVaOzs7Ozs7Ozs7Ozs7Ozs7OztVQzNCQSxJQUFBekYsS0FBQSxHQUFBckUsT0FBQTtVQUNBLElBQUF1RSxRQUFBLEdBQUF2RSxPQUFBO1VBRUEsSUFBQXNFLFdBQUEsR0FBQXRFLE9BQUE7VUFDQSxJQUFBa0ssT0FBQSxHQUFBbEssT0FBQTtVQUVjLFNBQVVtSyxxQkFBcUJBLENBQUM7WUFBRXBJO1VBQU0sQ0FBRTtZQUN2RCxNQUFNO2NBQUVGO1lBQUssQ0FBRSxHQUFHLElBQUEwQyxRQUFBLENBQUFKLGNBQWMsR0FBRTtZQUNsQyxNQUFNLENBQUNzQyxTQUFTLEVBQUVDLFlBQVksQ0FBQyxHQUFHckMsS0FBSyxDQUFDdUIsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUN2RCxNQUFNd0UsS0FBSyxHQUFHeEQsS0FBSyxJQUFHO2NBQ3JCQSxLQUFLLENBQUNDLGVBQWUsRUFBRTtjQUN2QkgsWUFBWSxDQUFDLElBQUksQ0FBQztZQUNuQixDQUFDO1lBQ0QsTUFBTUksV0FBVyxHQUFHQSxDQUFBLEtBQU1KLFlBQVksQ0FBQyxDQUFDRCxTQUFTLENBQUM7WUFDbEQsT0FDQ3BDLEtBQUEsQ0FBQUssYUFBQTtjQUFRUSxTQUFTLEVBQUM7WUFBc0MsR0FDdkRiLEtBQUEsQ0FBQUssYUFBQSxDQUFDSixXQUFBLENBQUF5QyxNQUFNO2NBQUNDLE9BQU8sRUFBQyxTQUFTO2NBQUNDLFFBQVE7Y0FBQ0MsT0FBTyxFQUFFa0Q7WUFBSyxHQUMvQ3ZJLEtBQUssQ0FBQ3dELE9BQU8sQ0FBQ2dGLE1BQU0sQ0FDYixFQUVSNUQsU0FBUyxJQUFJcEMsS0FBQSxDQUFBSyxhQUFBLENBQUN3RixPQUFBLENBQUFJLGlCQUFpQjtjQUFDdkksTUFBTSxFQUFFQSxNQUFNO2NBQUVzRixPQUFPLEVBQUVQLFdBQVc7Y0FBRWpGLEtBQUssRUFBRUEsS0FBSyxDQUFDd0k7WUFBTSxFQUFJLENBQ3RGO1VBRVg7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdkJBLElBQUFoRyxLQUFBLEdBQUFyRSxPQUFBO1VBRUEsSUFBQXdFLEdBQUEsR0FBQXhFLE9BQUE7VUFDQSxJQUFBc0gsUUFBQSxHQUFBdEgsT0FBQTtVQUNBLElBQUF1RSxRQUFBLEdBQUF2RSxPQUFBO1VBRU0sU0FBVWdKLElBQUlBLENBQUM7WUFBRXBGO1VBQUksQ0FBRTtZQUM1QixNQUFNO2NBQUUvQjtZQUFLLENBQUUsR0FBRyxJQUFBMEMsUUFBQSxDQUFBSixjQUFjLEdBQUU7WUFDbEMsTUFBTVksS0FBSyxHQUFHbkIsSUFBSSxDQUFDbUIsS0FBSyxJQUFJbkIsSUFBSSxDQUFDNEQsU0FBUztZQUMxQyxNQUFNeEMsV0FBVyxHQUFHcEIsSUFBSSxDQUFDb0IsV0FBVyxJQUFJbkQsS0FBSyxDQUFDK0IsSUFBSSxDQUFDb0IsV0FBVztZQUU5RCxPQUNDWCxLQUFBLENBQUFLLGFBQUE7Y0FBU1EsU0FBUyxFQUFDO1lBQWMsR0FDaENiLEtBQUEsQ0FBQUssYUFBQSxDQUFDRixHQUFBLENBQUFpRCxXQUFXO2NBQUNDLEdBQUcsRUFBRTlELElBQUksQ0FBQytELE9BQU87Y0FBRUMsTUFBTSxFQUFDLFFBQVE7Y0FBQ0MsR0FBRyxFQUFFOUM7WUFBSyxFQUFJLEVBQzlEVixLQUFBLENBQUFLLGFBQUE7Y0FBU1EsU0FBUyxFQUFDO1lBQXNCLEdBQ3hDYixLQUFBLENBQUFLLGFBQUEsYUFBS0ssS0FBSyxDQUFNLEVBQ2hCVixLQUFBLENBQUFLLGFBQUEsZUFBT00sV0FBVyxDQUFRLENBQ2pCLEVBQ1ZYLEtBQUEsQ0FBQUssYUFBQSxDQUFDNEMsUUFBQSxDQUFBckQsT0FBcUI7Y0FBQ2xDLE1BQU0sRUFBRTZCO1lBQUksRUFBSSxDQUM5QjtVQUVaOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3JCQSxJQUFBRyxNQUFBLEdBQUEvRCxPQUFBO1VBQ0EsSUFBQXVFLFFBQUEsR0FBQXZFLE9BQUE7VUFFQSxNQUFNdUssYUFBYSxHQUFHO1lBQ3JCckksS0FBSyxFQUFFLE9BQU87WUFDZHNJLFVBQVUsRUFBRTtXQUNaO1VBQ2EsU0FBVUMsTUFBTUEsQ0FBQztZQUFFQyxTQUFTO1lBQUVDLFNBQVM7WUFBRUM7VUFBVSxDQUFFO1lBQ2xFLE1BQU07Y0FBRS9JO1lBQUssQ0FBRSxHQUFHLElBQUEwQyxRQUFBLENBQUFKLGNBQWMsR0FBRTtZQUNsQyxNQUFNMEcsY0FBYyxHQUFHckMsTUFBTSxJQUFHO2NBQy9CLElBQUlzQyxLQUFLLEdBQUdQLGFBQWEsQ0FBQy9CLE1BQU0sQ0FBQztjQUNqQyxPQUFPc0MsS0FBSyxJQUFJLEtBQUs7WUFDdEIsQ0FBQztZQUNELE9BQ0MvRyxNQUFBLENBQUFFLE9BQUEsQ0FBQVMsYUFBQTtjQUFTUSxTQUFTLEVBQUM7WUFBVSxHQUM1Qm5CLE1BQUEsQ0FBQUUsT0FBQSxDQUFBUyxhQUFBO2NBQUtRLFNBQVMsRUFBQztZQUFRLEdBQ3RCbkIsTUFBQSxDQUFBRSxPQUFBLENBQUFTLGFBQUEsY0FDQ1gsTUFBQSxDQUFBRSxPQUFBLENBQUFTLGFBQUE7Y0FBS1EsU0FBUyxFQUFFLGlCQUFpQjJGLGNBQWMsQ0FBQ0YsU0FBUyxFQUFFbkMsTUFBTSxDQUFDO1lBQUUsRUFBUSxFQUM1RXpFLE1BQUEsQ0FBQUUsT0FBQSxDQUFBUyxhQUFBLGFBQUs3QyxLQUFLLENBQUNrSixPQUFPLENBQUNsSCxRQUFRLENBQUM4RyxTQUFTLENBQU0sQ0FDdEMsRUFDTjVHLE1BQUEsQ0FBQUUsT0FBQSxDQUFBUyxhQUFBLGNBQ0NYLE1BQUEsQ0FBQUUsT0FBQSxDQUFBUyxhQUFBO2NBQUtRLFNBQVMsRUFBRSxpQkFBaUIyRixjQUFjLENBQUNILFNBQVMsRUFBRWxDLE1BQU0sQ0FBQztZQUFFLEVBQVEsRUFDNUV6RSxNQUFBLENBQUFFLE9BQUEsQ0FBQVMsYUFBQSxhQUFLN0MsS0FBSyxDQUFDa0osT0FBTyxDQUFDbEgsUUFBUSxDQUFDNkcsU0FBUyxDQUFNLENBQ3RDLEVBQ04zRyxNQUFBLENBQUFFLE9BQUEsQ0FBQVMsYUFBQSxjQUNDWCxNQUFBLENBQUFFLE9BQUEsQ0FBQVMsYUFBQTtjQUFLUSxTQUFTLEVBQUUsaUJBQWlCMkYsY0FBYyxDQUFDRCxVQUFVLEVBQUVwQyxNQUFNLENBQUM7WUFBRSxFQUFRLEVBQzdFekUsTUFBQSxDQUFBRSxPQUFBLENBQUFTLGFBQUEsYUFBSzdDLEtBQUssQ0FBQ2tKLE9BQU8sQ0FBQ2xILFFBQVEsQ0FBQytHLFVBQVUsQ0FBTSxDQUN2QyxDQUNELENBQ0c7VUFFWjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMvQkEsSUFBQTdHLE1BQUEsR0FBQS9ELE9BQUE7VUFDQSxJQUFBc0UsV0FBQSxHQUFBdEUsT0FBQTtVQUNBLElBQUF1RSxRQUFBLEdBQUF2RSxPQUFBO1VBRWMsU0FBVWdMLFVBQVVBLENBQUM7WUFBRXBIO1VBQUksQ0FBRTtZQUMxQyxNQUFNO2NBQUUvQjtZQUFLLENBQUUsR0FBRyxJQUFBMEMsUUFBQSxDQUFBSixjQUFjLEdBQUU7WUFDbEMsTUFBTVksS0FBSyxHQUFHbkIsSUFBSSxDQUFDbUIsS0FBSyxJQUFJbkIsSUFBSSxDQUFDNEQsU0FBUztZQUMxQyxNQUFNeEMsV0FBVyxHQUFHcEIsSUFBSSxDQUFDb0IsV0FBVyxJQUFJbkQsS0FBSyxDQUFDK0IsSUFBSSxDQUFDb0IsV0FBVztZQUM5RCxPQUNDakIsTUFBQSxDQUFBRSxPQUFBLENBQUFTLGFBQUEsa0JBQ0NYLE1BQUEsQ0FBQUUsT0FBQSxDQUFBUyxhQUFBLENBQUNKLFdBQUEsQ0FBQWEsSUFBSTtjQUFDQyxJQUFJLEVBQUUsMEJBQTBCeEIsSUFBSSxDQUFDRCxFQUFFO1lBQUUsR0FDOUNJLE1BQUEsQ0FBQUUsT0FBQSxDQUFBUyxhQUFBLGFBQUtLLEtBQUssQ0FBTSxDQUNWLEVBQ1BoQixNQUFBLENBQUFFLE9BQUEsQ0FBQVMsYUFBQSxlQUFPTSxXQUFXLENBQVEsQ0FDakI7VUFFWjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNoQkEsSUFBQWpCLE1BQUEsR0FBQS9ELE9BQUE7VUFDQSxJQUFBdUUsUUFBQSxHQUFBdkUsT0FBQTtVQUNBLElBQUFpTCxLQUFBLEdBQUFqTCxPQUFBO1VBQ0EsSUFBQWtMLFdBQUEsR0FBQWxMLE9BQUE7VUFDQSxJQUFBbUwsT0FBQSxHQUFBbkwsT0FBQTtVQUNBLElBQUFnSSxRQUFBLEdBQUFoSSxPQUFBO1VBQ0EsSUFBQW9MLE9BQUEsR0FBQXBMLE9BQUE7VUFDQSxJQUFBcUwsVUFBQSxHQUFBckwsT0FBQTtVQUVNLFNBQVVvRyxJQUFJQSxDQUFDLEVBQUU7WUFDdEIsTUFBTTtjQUFFdkUsS0FBSztjQUFFeEI7WUFBSyxDQUFFLEdBQUcsSUFBQWtFLFFBQUEsQ0FBQUosY0FBYyxHQUFFO1lBQ3pDLE1BQU1tSCxJQUFJLEdBQUcsQ0FBQyxPQUFPLEVBQUUsV0FBVyxFQUFFLFdBQVcsQ0FBQztZQUNoRCxNQUFNQyxRQUFRLEdBQUdELElBQUksQ0FBQ0UsT0FBTyxDQUFDbkwsS0FBSyxDQUFDTSxHQUFHLENBQUM7WUFFeEMsTUFBTSxDQUFDOEssU0FBUyxFQUFFQyxZQUFZLENBQUMsR0FBRzNILE1BQUEsQ0FBQUUsT0FBSyxDQUFDMkIsUUFBUSxDQUFTMkYsUUFBUSxDQUFDO1lBQ2xFLE1BQU0vSSxRQUFRLEdBQUdBLENBQUNvRSxLQUFLLEVBQUUrRSxLQUFLLEtBQUk7Y0FDakMsSUFBSUMsU0FBUyxHQUFHLElBQUlDLGVBQWUsQ0FBQ2hKLFVBQVUsQ0FBQ2lKLFFBQVEsQ0FBQ0MsTUFBTSxDQUFDO2NBRS9ELE1BQU1wTCxHQUFHLEdBQUcySyxJQUFJLENBQUNLLEtBQUssQ0FBQztjQUV2QkMsU0FBUyxDQUFDSSxHQUFHLENBQUMsS0FBSyxFQUFFckwsR0FBRyxDQUFDO2NBQ3pCcUgsUUFBQSxDQUFBYSxPQUFPLENBQUNvRCxZQUFZLENBQUMsRUFBRSxFQUFFQyxRQUFRLENBQUNuSCxLQUFLLEVBQUUsaUJBQWlCNkcsU0FBUyxDQUFDTyxRQUFRLEVBQUUsRUFBRSxDQUFDO2NBQ2pGVCxZQUFZLENBQUNDLEtBQUssQ0FBQztjQUNuQnRMLEtBQUssQ0FBQ1UsSUFBSSxDQUFDSixHQUFHLENBQUM7WUFDaEIsQ0FBQztZQUVELE9BQ0NvRCxNQUFBLENBQUFFLE9BQUEsQ0FBQVMsYUFBQSxDQUFBWCxNQUFBLENBQUFFLE9BQUEsQ0FBQW1JLFFBQUEsUUFDQ3JJLE1BQUEsQ0FBQUUsT0FBQSxDQUFBUyxhQUFBLENBQUN1RyxLQUFBLENBQUFvQixhQUFhO2NBQUM3SixRQUFRLEVBQUVBLFFBQVE7Y0FBRThKLE1BQU0sRUFBRWI7WUFBUyxHQUNuRDFILE1BQUEsQ0FBQUUsT0FBQSxDQUFBUyxhQUFBLENBQUN1RyxLQUFBLENBQUFzQixJQUFJO2NBQUNySCxTQUFTLEVBQUM7WUFBbUIsR0FDbENuQixNQUFBLENBQUFFLE9BQUEsQ0FBQVMsYUFBQSxDQUFDdUcsS0FBQSxDQUFBdUIsR0FBRyxRQUFFM0ssS0FBSyxDQUFDeUosSUFBSSxDQUFDN0osTUFBTSxDQUFPLEVBQzlCc0MsTUFBQSxDQUFBRSxPQUFBLENBQUFTLGFBQUEsQ0FBQ3VHLEtBQUEsQ0FBQXVCLEdBQUcsUUFBRTNLLEtBQUssQ0FBQ3lKLElBQUksQ0FBQzlILFNBQVMsQ0FBTyxFQUNqQ08sTUFBQSxDQUFBRSxPQUFBLENBQUFTLGFBQUEsQ0FBQ3VHLEtBQUEsQ0FBQXVCLEdBQUcsUUFBRTNLLEtBQUssQ0FBQ3lKLElBQUksQ0FBQzFKLFNBQVMsQ0FBTyxDQUMzQixFQUNQbUMsTUFBQSxDQUFBRSxPQUFBLENBQUFTLGFBQUEsQ0FBQ3VHLEtBQUEsQ0FBQXdCLEtBQUs7Y0FBQ3ZILFNBQVMsRUFBQztZQUFvQixHQUNwQ25CLE1BQUEsQ0FBQUUsT0FBQSxDQUFBUyxhQUFBLENBQUN3RyxXQUFBLENBQUF3QixVQUFVO2NBQ1Z4SCxTQUFTLEVBQUMsYUFBYTtjQUN2QnlILFVBQVUsRUFBRXRNLEtBQUssQ0FBQ3FCLEtBQUs7Y0FDdkIrSCxPQUFPLEVBQUUyQixPQUFBLENBQUF2QixVQUFVO2NBQ25CK0MsY0FBYyxFQUFFL0ssS0FBSyxDQUFDZ0QsS0FBSyxDQUFDcEQsTUFBTTtjQUNsQ29MLGNBQWMsRUFBRWhMLEtBQUssQ0FBQ2lMO1lBQU8sRUFDNUIsRUFDRi9JLE1BQUEsQ0FBQUUsT0FBQSxDQUFBUyxhQUFBLENBQUN3RyxXQUFBLENBQUF3QixVQUFVO2NBQ1ZDLFVBQVUsRUFBRXRNLEtBQUssQ0FBQ3NCLE9BQU87Y0FDekI4SCxPQUFPLEVBQUUwQixPQUFBLENBQUFuQyxJQUFJO2NBQ2I5RCxTQUFTLEVBQUMsYUFBYTtjQUN2QjBILGNBQWMsRUFBRS9LLEtBQUssQ0FBQ2dELEtBQUssQ0FBQ3JCLFNBQVM7Y0FDckNxSixjQUFjLEVBQUVoTCxLQUFLLENBQUNpTDtZQUFPLEVBQzVCLEVBQ0YvSSxNQUFBLENBQUFFLE9BQUEsQ0FBQVMsYUFBQSxDQUFDd0csV0FBQSxDQUFBd0IsVUFBVTtjQUNWQyxVQUFVLEVBQUV0TSxLQUFLLENBQUN1QixTQUFTO2NBQzNCNkgsT0FBTyxFQUFFNEIsVUFBQSxDQUFBOUQsYUFBYTtjQUN0QnJDLFNBQVMsRUFBQyxhQUFhO2NBQ3ZCMEgsY0FBYyxFQUFFL0ssS0FBSyxDQUFDZ0QsS0FBSyxDQUFDakQsU0FBUztjQUNyQ2lMLGNBQWMsRUFBRWhMLEtBQUssQ0FBQ2lMO1lBQU8sRUFDNUIsQ0FDSyxDQUNPLENBQ2Q7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM1REEsSUFBQXpJLEtBQUEsR0FBQXJFLE9BQUE7VUFDQSxJQUFBdUYsS0FBQSxHQUFBdkYsT0FBQTtVQUNBLElBQUF3RSxHQUFBLEdBQUF4RSxPQUFBO1VBRUEsSUFBQXdGLE1BQUEsR0FBQXhGLE9BQUE7VUFDQSxJQUFBK00sTUFBQSxHQUFBL00sT0FBQTtVQUNBLElBQUFzRSxXQUFBLEdBQUF0RSxPQUFBO1VBRU0sU0FBVTBNLFVBQVVBLENBQUM7WUFBRXhILFNBQVM7WUFBRXlILFVBQVU7WUFBRWxELE9BQU87WUFBRW1EO1VBQWMsQ0FBb0I7WUFDOUYsTUFBTSxDQUFDdkQsS0FBSyxFQUFFMkQsUUFBUSxDQUFDLEdBQUczSSxLQUFLLENBQUN1QixRQUFRLENBQUMrRyxVQUFVLENBQUN0RCxLQUFLLElBQUksRUFBRSxDQUFDO1lBQ2hFLE1BQU0sQ0FBQ3hELFFBQVEsRUFBRXdDLFdBQVcsQ0FBQyxHQUFHaEUsS0FBSyxDQUFDdUIsUUFBUSxDQUFDK0csVUFBVSxDQUFDOUcsUUFBUSxDQUFDO1lBRW5FLElBQUFMLE1BQUEsQ0FBQU0sU0FBUyxFQUFDLENBQUM2RyxVQUFVLENBQUMsRUFBRSxNQUFLO2NBQzVCSyxRQUFRLENBQUMsQ0FBQyxHQUFHTCxVQUFVLENBQUN0RCxLQUFLLENBQUMsQ0FBQztjQUMvQmhCLFdBQVcsQ0FBQ3NFLFVBQVUsQ0FBQzlHLFFBQVEsQ0FBQztZQUNqQyxDQUFDLENBQUM7WUFFRixJQUFJQSxRQUFRLElBQUksQ0FBQ3dELEtBQUssQ0FBQzRELE1BQU0sRUFBRTtjQUM5QixPQUNDNUksS0FBQSxDQUFBSyxhQUFBLENBQUNxSSxNQUFBLENBQUFHLEtBQUs7Z0JBQUNoSSxTQUFTLEVBQUM7Y0FBbUIsR0FDbkNiLEtBQUEsQ0FBQUssYUFBQSxDQUFDSixXQUFBLENBQUE2SSxPQUFPO2dCQUFDYixNQUFNO2NBQUEsRUFBRyxDQUNYOztZQUlWLElBQUksQ0FBQ2pELEtBQUssQ0FBQzRELE1BQU0sSUFBSSxDQUFDcEgsUUFBUSxFQUFFO2NBQy9CLE9BQU94QixLQUFBLENBQUFLLGFBQUEsQ0FBQ0YsR0FBQSxDQUFBRyxTQUFTO2dCQUFDQyxJQUFJLEVBQUVnSSxjQUFjLENBQUM3SCxLQUFLO2dCQUFFQyxXQUFXLEVBQUU0SCxjQUFjLENBQUM1SCxXQUFXO2dCQUFFQyxJQUFJLEVBQUM7Y0FBTSxFQUFHOztZQUd0RyxPQUNDWixLQUFBLENBQUFLLGFBQUEsQ0FBQUwsS0FBQSxDQUFBK0gsUUFBQSxRQUNDL0gsS0FBQSxDQUFBSyxhQUFBLENBQUNhLEtBQUEsQ0FBQWEsSUFBWTtjQUFDbEIsU0FBUyxFQUFDLGNBQWM7Y0FBQ21FLEtBQUssRUFBRUEsS0FBSztjQUFFSSxPQUFPLEVBQUVBO1lBQU8sRUFBSSxDQUN2RTtVQUVMIn0=