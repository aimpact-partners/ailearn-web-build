System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.1.0-test.11/main-layout.widget", "@beyond-js/reactive@1.2.0/model", "@aimpact/ailearn-sdk@1.0.0/learning-modules", "@beyond-js/kernel@0.1.9/texts", "@aimpact/ailearn-app@0.1.0-test.11/config", "react@18.2.0", "pragmate-ui@1.0.0-beta.1/components", "@aimpact/ailearn-app@0.1.0-test.11/components/ui", "@aimpact/chat@1.0.2/shared/components", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.1/link", "pragmate-ui@1.0.0-beta.1/icons", "pragmate-ui@1.0.0-beta.1/modal", "pragmate-ui@1.0.0-beta.1/list", "@aimpact/chat-sdk@1.0.1/session", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@1.0.0-beta.1/empty"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp010Test11MainLayoutWidget) {
      dependency_4 = _aimpactAilearnApp010Test11MainLayoutWidget;
    }, function (_beyondJsReactive120Model) {
      dependency_5 = _beyondJsReactive120Model;
    }, function (_aimpactAilearnSdk100LearningModules) {
      dependency_6 = _aimpactAilearnSdk100LearningModules;
    }, function (_beyondJsKernel019Texts) {
      dependency_7 = _beyondJsKernel019Texts;
    }, function (_aimpactAilearnApp010Test11Config) {
      dependency_8 = _aimpactAilearnApp010Test11Config;
    }, function (_react2) {
      dependency_9 = _react2;
    }, function (_pragmateUi100Beta1Components) {
      dependency_10 = _pragmateUi100Beta1Components;
    }, function (_aimpactAilearnApp010Test11ComponentsUi) {
      dependency_11 = _aimpactAilearnApp010Test11ComponentsUi;
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
    }, function (_pragmateUi100Beta1Empty) {
      dependency_20 = _pragmateUi100Beta1Empty;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.2"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.1"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.1.0-test.11"], ["@aimpact/ailearn-app", "0.1.0-test.11"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.0-test.11/community",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/main-layout.widget', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/ailearn-sdk/learning-modules', dependency_6], ['@beyond-js/kernel/texts', dependency_7], ['@aimpact/ailearn-app/config', dependency_8], ['react', dependency_9], ['pragmate-ui/components', dependency_10], ['@aimpact/ailearn-app/components/ui', dependency_11], ['@aimpact/chat/shared/components', dependency_12], ['@beyond-js/react-18-widgets/hooks', dependency_13], ['pragmate-ui/link', dependency_14], ['pragmate-ui/icons', dependency_15], ['pragmate-ui/modal', dependency_16], ['pragmate-ui/list', dependency_17], ['@aimpact/chat-sdk/session', dependency_18], ['@beyond-js/kernel/routing', dependency_19], ['pragmate-ui/empty', dependency_20]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-community-modules",
        "vspecifier": "@aimpact/ailearn-app@0.1.0-test.11/community.widget",
        "is": "page",
        "route": "/community",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.0-test.11/community.widget');
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
        hash: 802482716,
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
                _mainLayout.LayoutBroker.breadcrumb = [[this.texts.breadcrumb.modules]];
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
        hash: 741720603,
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
        hash: 1106738023,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CommunityItem = CommunityItem;
          var React = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("../context");
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

      /************************************************
      INTERNAL MODULE: ./views/item/organizations-modal
      ************************************************/

      ims.set('./views/item/organizations-modal', {
        hash: 2646912976,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsInRhYiIsInVyaSIsInFzIiwiZ2V0IiwiaW5pdCIsImxvYWQiLCJoaWRlIiwiY2xlYXIiLCJleHBvcnRzIiwiX21haW5MYXlvdXQiLCJfbW9kZWwiLCJfbGVhcm5pbmdNb2R1bGVzIiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiUmVhY3RpdmVNb2RlbCIsImRyYWZ0cyIsImNvbW11bml0eSIsInRleHRzIiwiQ3VycmVudFRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidmFsdWUiLCJyZWFkeSIsImNvbnN0cnVjdG9yIiwiTGVhcm5pbmdNb2R1bGVzIiwib24iLCJsaXN0ZW5UZXh0cyIsInNldEJyZWFkY3J1bWIiLCJ0cmlnZ2VyRXZlbnQiLCJvZmYiLCJMYXlvdXRCcm9rZXIiLCJvdmVybGF5IiwiZ2xvYmFsVGhpcyIsInNldFRpbWVvdXQiLCJicmVhZGNydW1iIiwibW9kdWxlcyIsImxvYWRDb21tdW5pdHkiLCJsb2FkZWQiLCJ0eXBlIiwicm91dGUiLCJfcmVhY3QiLCJMaXN0Q29udGV4dCIsImRlZmF1bHQiLCJjcmVhdGVDb250ZXh0IiwidXNlTGlzdENvbnRleHQiLCJ1c2VDb250ZXh0IiwiUmVhY3QiLCJfY29tcG9uZW50cyIsIl9jb250ZXh0IiwiX3VpIiwiRW1wdHlMaXN0IiwiY3JlYXRlRWxlbWVudCIsIkVtcHR5Q2FyZCIsInRleHQiLCJlbXB0eSIsImdlbmVyYWwiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaWNvbiIsImNsYXNzTmFtZSIsIkxpbmsiLCJocmVmIiwiYWN0aW9ucyIsImNyZWF0ZSIsIl9saXN0IiwiX2hvb2tzIiwic2V0UmVhZHkiLCJ1c2VTdGF0ZSIsImZldGNoaW5nIiwidXNlQmluZGVyIiwiUGFnZUxvYWRlciIsIlByb3ZpZGVyIiwiUGFnZUNvbnRhaW5lciIsIlBhZ2VUaXRsZSIsIkxpc3QiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsIl9vcmdhbml6YXRpb25zTW9kYWwiLCJDb21tdW5pdHlBY3Rpb25zIiwib3Blbk1vZGFsIiwic2V0T3Blbk1vZGFsIiwib25Vc2UiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsInRvZ2dsZU1vZGFsIiwiQnV0dG9uIiwidmFyaWFudCIsImJvcmRlcmVkIiwib25DbGljayIsInVzZSIsIk9yZ2FuaXphdGlvbnNNb2RhbCIsIm9uQ2xvc2UiLCJfYWN0aW9ucyIsIkNvbW11bml0eUl0ZW0iLCJpdGVtIiwib2JqZWN0aXZlIiwib3duZXJEYXRhIiwib3duZXIiLCJjcmVhdG9yIiwiRW50aXR5SW1hZ2UiLCJzcmMiLCJwaWN0dXJlIiwiZW50aXR5IiwiYWx0IiwiVXNlckRhdGEiLCJkYXRhIiwiX21vZGFsIiwiX3Nlc3Npb24iLCJfaWNvbnMiLCJfcm91dGluZyIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiLCJlcnJvciIsInNldEVycm9yIiwic2V0RmV0Y2hpbmciLCJjbG9uZSIsInJlc3BvbnNlIiwiaWQiLCJzdGF0dXMiLCJjb25zb2xlIiwibG9nIiwiZXJyb3JzIiwiZmFpbGVkIiwicm91dGluZyIsInB1c2hTdGF0ZSIsIkl0ZW0iLCJuYW1lIiwiSWNvbiIsIk1vZGFsIiwiY2xvc2VCYWNrZHJvcCIsIkVycm9yUmVuZGVyZXIiLCJpdGVtcyIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsIm9yZ2FuaXphdGlvbnMiLCJjb250cm9sIiwic3BlY3MiLCJkaXNhYmxlZCIsImNvbnRpbnVlIiwiX2l0ZW0iLCJfZW1wdHkiLCJwcmV2ZW50TWVzc2FnZSIsImNvbGxlY3Rpb24iLCJzZXREYXRhIiwidG90YWwiLCJsZW5ndGgiLCJFbXB0eSIsIlNwaW5uZXIiLCJhY3RpdmUiLCJGcmFnbWVudCJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi9pbnRlcmZhY2VzLnRzIiwiL3RzL3ZpZXdzL2l0ZW0vYWN0aW9ucy50c3giLCIvdHMvdmlld3MvaXRlbS9pbmRleC50c3giLCIvdHMvdmlld3MvaXRlbS9vcmdhbml6YXRpb25zLW1vZGFsLnRzeCIsIi90cy92aWV3cy9saXN0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBR087VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUgsTUFBQSxDQUFBSyxZQUFZLEVBQUU7Y0FDaEMsT0FBcUIsSUFBSSxDQUFDLENBQUFGLEtBQU07WUFDakM7WUFDQSxJQUFJRyxNQUFNQSxDQUFBO2NBQ1QsT0FBT1AsTUFBQSxDQUFBUSxJQUFJO1lBQ1o7WUFFQUMsSUFBSUEsQ0FBQTtjQUNILE1BQU1DLEdBQUcsR0FBRyxJQUFJLENBQUNDLEdBQUcsQ0FBQ0MsRUFBRSxDQUFDQyxHQUFHLENBQUMsS0FBSyxDQUFDO2NBQ2xDLElBQUksQ0FBQyxDQUFBVCxLQUFNLENBQUNVLElBQUksRUFBRTtjQUNsQixJQUFJLENBQUMsQ0FBQVYsS0FBTSxDQUFDVyxJQUFJLENBQUNMLEdBQUcsQ0FBQztZQUN0QjtZ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