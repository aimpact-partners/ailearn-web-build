System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.1.3-test.06/main-layout.widget", "@beyond-js/reactive@1.2.0/model", "@aimpact/ailearn-sdk@1.0.0/learning-modules", "@beyond-js/kernel@0.1.9/texts", "@aimpact/ailearn-app@0.1.3-test.06/config", "react@18.2.0", "pragmate-ui@1.0.0-beta.1/components", "@aimpact/ailearn-app@0.1.3-test.06/components/ui", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/ailearn-app@0.1.3-test.06/components/module-card", "pragmate-ui@1.0.0-beta.1/modal", "pragmate-ui@1.0.0-beta.1/list", "@aimpact/chat-sdk@1.0.1/session", "pragmate-ui@1.0.0-beta.1/icons", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@1.0.0-beta.1/empty"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
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
    }, function (_aimpactAilearnApp013Test06MainLayoutWidget) {
      dependency_4 = _aimpactAilearnApp013Test06MainLayoutWidget;
    }, function (_beyondJsReactive120Model) {
      dependency_5 = _beyondJsReactive120Model;
    }, function (_aimpactAilearnSdk100LearningModules) {
      dependency_6 = _aimpactAilearnSdk100LearningModules;
    }, function (_beyondJsKernel019Texts) {
      dependency_7 = _beyondJsKernel019Texts;
    }, function (_aimpactAilearnApp013Test06Config) {
      dependency_8 = _aimpactAilearnApp013Test06Config;
    }, function (_react2) {
      dependency_9 = _react2;
    }, function (_pragmateUi100Beta1Components) {
      dependency_10 = _pragmateUi100Beta1Components;
    }, function (_aimpactAilearnApp013Test06ComponentsUi) {
      dependency_11 = _aimpactAilearnApp013Test06ComponentsUi;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_12 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactAilearnApp013Test06ComponentsModuleCard) {
      dependency_13 = _aimpactAilearnApp013Test06ComponentsModuleCard;
    }, function (_pragmateUi100Beta1Modal) {
      dependency_14 = _pragmateUi100Beta1Modal;
    }, function (_pragmateUi100Beta1List) {
      dependency_15 = _pragmateUi100Beta1List;
    }, function (_aimpactChatSdk101Session) {
      dependency_16 = _aimpactChatSdk101Session;
    }, function (_pragmateUi100Beta1Icons) {
      dependency_17 = _pragmateUi100Beta1Icons;
    }, function (_beyondJsKernel019Routing) {
      dependency_18 = _beyondJsKernel019Routing;
    }, function (_pragmateUi100Beta1Empty) {
      dependency_19 = _pragmateUi100Beta1Empty;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.2"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.1"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.1.3-test.06"], ["@aimpact/ailearn-app", "0.1.3-test.06"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.3-test.06/community",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/main-layout.widget', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/ailearn-sdk/learning-modules', dependency_6], ['@beyond-js/kernel/texts', dependency_7], ['@aimpact/ailearn-app/config', dependency_8], ['react', dependency_9], ['pragmate-ui/components', dependency_10], ['@aimpact/ailearn-app/components/ui', dependency_11], ['@beyond-js/react-18-widgets/hooks', dependency_12], ['@aimpact/ailearn-app/components/module-card', dependency_13], ['pragmate-ui/modal', dependency_14], ['pragmate-ui/list', dependency_15], ['@aimpact/chat-sdk/session', dependency_16], ['pragmate-ui/icons', dependency_17], ['@beyond-js/kernel/routing', dependency_18], ['pragmate-ui/empty', dependency_19]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-community-modules",
        "vspecifier": "@aimpact/ailearn-app@0.1.3-test.06/community.widget",
        "is": "page",
        "route": "/community",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.3-test.06/community.widget');
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
        hash: 3867656699,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsInRhYiIsInVyaSIsInFzIiwiZ2V0IiwiaW5pdCIsImxvYWQiLCJoaWRlIiwiY2xlYXIiLCJleHBvcnRzIiwiX21haW5MYXlvdXQiLCJfbW9kZWwiLCJfbGVhcm5pbmdNb2R1bGVzIiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiUmVhY3RpdmVNb2RlbCIsImRyYWZ0cyIsImNvbW11bml0eSIsInRleHRzIiwiQ3VycmVudFRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidmFsdWUiLCJyZWFkeSIsImNvbnN0cnVjdG9yIiwiTGVhcm5pbmdNb2R1bGVzIiwib24iLCJsaXN0ZW5UZXh0cyIsInNldEJyZWFkY3J1bWIiLCJ0cmlnZ2VyRXZlbnQiLCJvZmYiLCJMYXlvdXRCcm9rZXIiLCJvdmVybGF5IiwiZ2xvYmFsVGhpcyIsInNldFRpbWVvdXQiLCJicmVhZGNydW1iIiwibG9hZENvbW11bml0eSIsImxvYWRlZCIsInR5cGUiLCJyb3V0ZSIsIl9yZWFjdCIsIkxpc3RDb250ZXh0IiwiZGVmYXVsdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VMaXN0Q29udGV4dCIsInVzZUNvbnRleHQiLCJSZWFjdCIsIl9jb21wb25lbnRzIiwiX2NvbnRleHQiLCJfdWkiLCJFbXB0eUxpc3QiLCJjcmVhdGVFbGVtZW50IiwiRW1wdHlDYXJkIiwidGV4dCIsImVtcHR5IiwiZ2VuZXJhbCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpY29uIiwiY2xhc3NOYW1lIiwiTGluayIsImhyZWYiLCJhY3Rpb25zIiwiY3JlYXRlIiwiX2xpc3QiLCJfaG9va3MiLCJzZXRSZWFkeSIsInVzZVN0YXRlIiwiZmV0Y2hpbmciLCJ1c2VCaW5kZXIiLCJQYWdlTG9hZGVyIiwiUHJvdmlkZXIiLCJQYWdlQ29udGFpbmVyIiwiUGFnZVRpdGxlIiwiTGlzdCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX29yZ2FuaXphdGlvbnNNb2RhbCIsIkNvbW11bml0eUFjdGlvbnMiLCJvcGVuTW9kYWwiLCJzZXRPcGVuTW9kYWwiLCJvblVzZSIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwidG9nZ2xlTW9kYWwiLCJCdXR0b24iLCJ2YXJpYW50IiwiYm9yZGVyZWQiLCJvbkNsaWNrIiwidXNlIiwiT3JnYW5pemF0aW9uc01vZGFsIiwib25DbG9zZSIsIl9tb2R1bGVDYXJkIiwiQ29tbXVuaXR5SXRlbSIsIml0ZW0iLCJvcGVuIiwiRnJhZ21lbnQiLCJNb2R1bGVDYXJkIiwiTW9kdWxlQ2FyZEZvb3RlciIsInBsYXlncm91bmQiLCJhc3NpZ25tZW50IiwidGFyZ2V0IiwidGVzdCIsIl9tb2RhbCIsIl9zZXNzaW9uIiwiX2ljb25zIiwiX3JvdXRpbmciLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwiZXJyb3IiLCJzZXRFcnJvciIsInNldEZldGNoaW5nIiwiY2xvbmUiLCJyZXNwb25zZSIsImlkIiwiZW50aXR5Iiwic3RhdHVzIiwiY29uc29sZSIsImxvZyIsImVycm9ycyIsImZhaWxlZCIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJkYXRhIiwiSXRlbSIsIkVudGl0eUltYWdlIiwic3JjIiwicGljdHVyZSIsImFsdCIsIm5hbWUiLCJJY29uIiwiTW9kYWwiLCJjbG9zZUJhY2tkcm9wIiwiRXJyb3JSZW5kZXJlciIsIml0ZW1zIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwib3JnYW5pemF0aW9ucyIsImNvbnRyb2wiLCJzcGVjcyIsImRpc2FibGVkIiwiY29udGludWUiLCJfaXRlbSIsIl9lbXB0eSIsInByZXZlbnRNZXNzYWdlIiwiY29sbGVjdGlvbiIsInNldERhdGEiLCJ0b3RhbCIsImxlbmd0aCIsIkVtcHR5IiwiU3Bpbm5lciIsImFjdGl2ZSJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi9pbnRlcmZhY2VzLnRzIiwiL3RzL3ZpZXdzL2l0ZW0vYWN0aW9ucy50c3giLCIvdHMvdmlld3MvaXRlbS9pbmRleC50c3giLCIvdHMvdmlld3MvaXRlbS9vcmdhbml6YXRpb25zLW1vZGFsLnRzeCIsIi90cy92aWV3cy9saXN0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUdPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlILE1BQUEsQ0FBQUssWUFBWSxFQUFFO2NBQ2hDLE9BQXFCLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ2pDO1lBQ0EsSUFBSUcsTUFBTUEsQ0FBQTtjQUNULE9BQU9QLE1BQUEsQ0FBQVEsSUFBSTtZQUNaO1lBRUFDLElBQUlBLENBQUE7Y0FDSCxNQUFNQyxHQUFHLEdBQUcsSUFBSSxDQUFDQyxHQUFHLENBQUNDLEVBQUUsQ0FBQ0MsR0FBRyxDQUFDLEtBQUssQ0FBQztjQUNsQyxJQUFJLENBQUMsQ0FBQVQsS0FBTSxDQUFDVSxJQUFJLEVBQUU7Y0FDbEIsSUFBSSxDQUFDLENBQUFWLEtBQU0sQ0FBQ1csSUFBSSxDQUFD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