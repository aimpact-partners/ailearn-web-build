System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.1.6-dev.04/main-layout.widget", "@beyond-js/reactive@1.2.0/model", "@aimpact/ailearn-sdk@1.0.0/learning-modules", "@beyond-js/kernel@0.1.9/texts", "react@18.2.0", "pragmate-ui@1.0.0-beta.2/components", "@aimpact/ailearn-app@0.1.6-dev.04/components/ui", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/ailearn-app@0.1.6-dev.04/components/module-card", "pragmate-ui@1.0.0-beta.2/modal", "pragmate-ui@1.0.0-beta.2/list", "@aimpact/chat-sdk@1.0.1/session", "pragmate-ui@1.0.0-beta.2/icons", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@1.0.0-beta.2/empty"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
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
    }, function (_aimpactAilearnApp016Dev04MainLayoutWidget) {
      dependency_4 = _aimpactAilearnApp016Dev04MainLayoutWidget;
    }, function (_beyondJsReactive120Model) {
      dependency_5 = _beyondJsReactive120Model;
    }, function (_aimpactAilearnSdk100LearningModules) {
      dependency_6 = _aimpactAilearnSdk100LearningModules;
    }, function (_beyondJsKernel019Texts) {
      dependency_7 = _beyondJsKernel019Texts;
    }, function (_react2) {
      dependency_8 = _react2;
    }, function (_pragmateUi100Beta2Components) {
      dependency_9 = _pragmateUi100Beta2Components;
    }, function (_aimpactAilearnApp016Dev04ComponentsUi) {
      dependency_10 = _aimpactAilearnApp016Dev04ComponentsUi;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_11 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactAilearnApp016Dev04ComponentsModuleCard) {
      dependency_12 = _aimpactAilearnApp016Dev04ComponentsModuleCard;
    }, function (_pragmateUi100Beta2Modal) {
      dependency_13 = _pragmateUi100Beta2Modal;
    }, function (_pragmateUi100Beta2List) {
      dependency_14 = _pragmateUi100Beta2List;
    }, function (_aimpactChatSdk101Session) {
      dependency_15 = _aimpactChatSdk101Session;
    }, function (_pragmateUi100Beta2Icons) {
      dependency_16 = _pragmateUi100Beta2Icons;
    }, function (_beyondJsKernel019Routing) {
      dependency_17 = _beyondJsKernel019Routing;
    }, function (_pragmateUi100Beta2Empty) {
      dependency_18 = _pragmateUi100Beta2Empty;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.2"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.2"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.1.6-dev.04"], ["@aimpact/ailearn-app", "0.1.6-dev.04"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.04/community",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/main-layout.widget', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/ailearn-sdk/learning-modules', dependency_6], ['@beyond-js/kernel/texts', dependency_7], ['react', dependency_8], ['pragmate-ui/components', dependency_9], ['@aimpact/ailearn-app/components/ui', dependency_10], ['@beyond-js/react-18-widgets/hooks', dependency_11], ['@aimpact/ailearn-app/components/module-card', dependency_12], ['pragmate-ui/modal', dependency_13], ['pragmate-ui/list', dependency_14], ['@aimpact/chat-sdk/session', dependency_15], ['pragmate-ui/icons', dependency_16], ['@beyond-js/kernel/routing', dependency_17], ['pragmate-ui/empty', dependency_18]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-community-modules",
        "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.04/community.widget",
        "is": "page",
        "route": "/community",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.6-dev.04/community.widget');
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
        hash: 3374904302,
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
                _mainLayout.LayoutBroker.breadcrumb = [[this.texts.breadcrumb.community]];
              }, 100);
            }
            async loadCommunity() {
              this.#tab = 'community';
              if (this.#drafts.loaded) return;
            }
            async load(type = 'published') {
              await this.#community.load({
                type: 'community',
                route: 'community'
              });
              super.ready = true;
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
        hash: 2597826220,
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
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
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
            if (!ready) return _react.default.createElement(_ui.PageLoader, null);
            const value = {
              texts,
              store,
              fetching
            };
            return _react.default.createElement(_context.ListContext.Provider, {
              value: value
            }, _react.default.createElement(_ui.PageContainer, null, _react.default.createElement(_ui.PageTitle, {
              title: texts.title
            }), _react.default.createElement(_list.List, null)));
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

      /************************************
      INTERNAL MODULE: ./views/item/actions
      ************************************/

      ims.set('./views/item/actions', {
        hash: 1346293279,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = CommunityActions;
          var React = require("react");
          var _context = require("../context");
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

      /**********************************
      INTERNAL MODULE: ./views/item/index
      **********************************/

      ims.set('./views/item/index', {
        hash: 1692187487,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CommunityItem = CommunityItem;
          var React = require("react");
          var _moduleCard = require("@aimpact/ailearn-app/components/module-card");
          var _context = require("../context");
          var _components = require("pragmate-ui/components");
          var _organizationsModal = require("./organizations-modal");
          function CommunityItem({
            item
          }) {
            const {
              texts
            } = (0, _context.useListContext)();
            const [openModal, setOpenModal] = React.useState(false);
            const toggleModal = () => setOpenModal(!openModal);
            const onUse = event => {
              event.stopPropagation();
              setOpenModal({
                open: true,
                item
              });
            };
            return React.createElement(React.Fragment, null, React.createElement(_moduleCard.ModuleCard, {
              item: item,
              texts: texts
            }, React.createElement(_moduleCard.ModuleCardFooter, {
              item: item
            }, item?.playground?.assignment && React.createElement("a", {
              target: "_blank",
              href: item.playground.assignment,
              className: "right-action btn btn-primary outline"
            }, texts.actions.test), React.createElement(_components.Button, {
              variant: "primary",
              onClick: onUse,
              className: "right-action"
            }, texts.actions.use))), openModal && React.createElement(_organizationsModal.OrganizationsModal, {
              module: item,
              onClose: toggleModal,
              texts: texts
            }));
          }
        }
      });

      /************************************************
      INTERNAL MODULE: ./views/item/organizations-modal
      ************************************************/

      ims.set('./views/item/organizations-modal', {
        hash: 2382534846,
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

      /****************************
      INTERNAL MODULE: ./views/list
      ****************************/

      ims.set('./views/list', {
        hash: 1213970019,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.List = List;
          var React = require("react");
          var _context = require("./context");
          var _item = require("./item");
          var _list = require("pragmate-ui/list");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _empty = require("pragmate-ui/empty");
          var _components = require("pragmate-ui/components");
          function List({}) {
            const {
              store,
              texts
            } = (0, _context.useListContext)();
            const preventMessage = texts.empty.community;
            const collection = store.community;
            const [data, setData] = React.useState({
              items: collection.items,
              fetching: collection.fetching,
              total: collection.items?.length
            }); // [1
            (0, _hooks.useBinder)([collection], () => {
              setData({
                ...data,
                items: collection.items,
                fetching: collection.fetching,
                total: collection.items?.length
              });
            });
            if (data.fetching && !data.total) {
              return React.createElement(_empty.Empty, {
                className: "loading-list-page"
              }, React.createElement(_components.Spinner, {
                active: true
              }));
            }
            if (!collection.items?.length && !collection.fetching) {
              return React.createElement(_ui.EmptyCard, {
                text: preventMessage.title,
                description: preventMessage.description,
                icon: "info"
              });
            }
            return React.createElement(React.Fragment, null, React.createElement(_list.List, {
              className: "entity__list mt-1",
              items: collection.items,
              control: _item.CommunityItem
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsInRhYiIsInVyaSIsInFzIiwiZ2V0IiwiaW5pdCIsImxvYWQiLCJoaWRlIiwiY2xlYXIiLCJleHBvcnRzIiwiX21haW5MYXlvdXQiLCJfbW9kZWwiLCJfbGVhcm5pbmdNb2R1bGVzIiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiUmVhY3RpdmVNb2RlbCIsImRyYWZ0cyIsImNvbW11bml0eSIsInRleHRzIiwiQ3VycmVudFRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidmFsdWUiLCJyZWFkeSIsImNvbnN0cnVjdG9yIiwiTGVhcm5pbmdNb2R1bGVzIiwib24iLCJsaXN0ZW5UZXh0cyIsInNldEJyZWFkY3J1bWIiLCJ0cmlnZ2VyRXZlbnQiLCJvZmYiLCJMYXlvdXRCcm9rZXIiLCJvdmVybGF5IiwiZ2xvYmFsVGhpcyIsInNldFRpbWVvdXQiLCJicmVhZGNydW1iIiwibG9hZENvbW11bml0eSIsImxvYWRlZCIsInR5cGUiLCJyb3V0ZSIsIl9yZWFjdCIsIkxpc3RDb250ZXh0IiwiZGVmYXVsdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VMaXN0Q29udGV4dCIsInVzZUNvbnRleHQiLCJSZWFjdCIsIl9jb21wb25lbnRzIiwiX2NvbnRleHQiLCJfdWkiLCJFbXB0eUxpc3QiLCJjcmVhdGVFbGVtZW50IiwiRW1wdHlDYXJkIiwidGV4dCIsImVtcHR5IiwiZ2VuZXJhbCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpY29uIiwiY2xhc3NOYW1lIiwiTGluayIsImhyZWYiLCJhY3Rpb25zIiwiY3JlYXRlIiwiX2xpc3QiLCJfaG9va3MiLCJzZXRSZWFkeSIsInVzZVN0YXRlIiwiZmV0Y2hpbmciLCJ1c2VCaW5kZXIiLCJQYWdlTG9hZGVyIiwiUHJvdmlkZXIiLCJQYWdlQ29udGFpbmVyIiwiUGFnZVRpdGxlIiwiTGlzdCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX29yZ2FuaXphdGlvbnNNb2RhbCIsIkNvbW11bml0eUFjdGlvbnMiLCJvcGVuTW9kYWwiLCJzZXRPcGVuTW9kYWwiLCJvblVzZSIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwidG9nZ2xlTW9kYWwiLCJCdXR0b24iLCJ2YXJpYW50IiwiYm9yZGVyZWQiLCJvbkNsaWNrIiwidXNlIiwiT3JnYW5pemF0aW9uc01vZGFsIiwib25DbG9zZSIsIl9tb2R1bGVDYXJkIiwiQ29tbXVuaXR5SXRlbSIsIml0ZW0iLCJvcGVuIiwiRnJhZ21lbnQiLCJNb2R1bGVDYXJkIiwiTW9kdWxlQ2FyZEZvb3RlciIsInBsYXlncm91bmQiLCJhc3NpZ25tZW50IiwidGFyZ2V0IiwidGVzdCIsIl9tb2RhbCIsIl9zZXNzaW9uIiwiX2ljb25zIiwiX3JvdXRpbmciLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwiZXJyb3IiLCJzZXRFcnJvciIsInNldEZldGNoaW5nIiwiY2xvbmUiLCJyZXNwb25zZSIsImlkIiwiZW50aXR5Iiwic3RhdHVzIiwiY29uc29sZSIsImxvZyIsImVycm9ycyIsImZhaWxlZCIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJkYXRhIiwiSXRlbSIsIkVudGl0eUltYWdlIiwic3JjIiwicGljdHVyZSIsImFsdCIsIm5hbWUiLCJJY29uIiwiTW9kYWwiLCJjbG9zZUJhY2tkcm9wIiwiRXJyb3JSZW5kZXJlciIsIml0ZW1zIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwib3JnYW5pemF0aW9ucyIsImNvbnRyb2wiLCJzcGVjcyIsImRpc2FibGVkIiwiY29udGludWUiLCJfaXRlbSIsIl9lbXB0eSIsInByZXZlbnRNZXNzYWdlIiwiY29sbGVjdGlvbiIsInNldERhdGEiLCJ0b3RhbCIsImxlbmd0aCIsIkVtcHR5IiwiU3Bpbm5lciIsImFjdGl2ZSJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi9pbnRlcmZhY2VzLnRzIiwiL3RzL3ZpZXdzL2l0ZW0vYWN0aW9ucy50c3giLCIvdHMvdmlld3MvaXRlbS9pbmRleC50c3giLCIvdHMvdmlld3MvaXRlbS9vcmdhbml6YXRpb25zLW1vZGFsLnRzeCIsIi90cy92aWV3cy9saXN0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFHTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJSCxNQUFBLENBQUFLLFlBQVksRUFBRTtjQUNoQyxPQUFxQixJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNqQztZQUNBLElBQUlHLE1BQU1BLENBQUE7Y0FDVCxPQUFPUCxNQUFBLENBQUFRLElBQUk7WUFDWjtZQUVBQyxJQUFJQSxDQUFBO2NBQ0gsTUFBTUMsR0FBRyxHQUFHLElBQUksQ0FBQ0MsR0FBRyxDQUFDQyxFQUFFLENBQUNDLEdBQUcsQ0FBQyxLQUFLLENBQUM7Y0FDbEMsSUFBSSxDQUFDLENBQUFULEtBQU0sQ0FBQ1UsSUFBSSxFQUFFO2NBQ2xCLElBQUksQ0FBQyxDQUFBVixLQUFNLENBQUNXLElBQUksQ0FBQ0ws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