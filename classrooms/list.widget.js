System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@beyond-js/reactive@1.1.12/model", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/ailearn-app@0.0.32/model/gclassroom", "dayjs@1.11.10", "react@18.2.0", "pragmate-ui@0.1.1/list", "pragmate-ui@0.1.1/components", "@aimpact/ailearn-app@0.0.32/components/ui", "@aimpact/chat-sdk@1.0.0/session", "pragmate-ui@0.1.1/alert", "pragmate-ui@0.1.1/link", "pragmate-ui@0.1.1/modal", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@0.1.1/icons", "pragmate-ui@0.1.1/toast", "@aimpact/ailearn-app@0.0.32/components/navbar-header.code", "@aimpact/chat@1.0.1/shared/components", "@aimpact/chat@1.0.1/shared/hooks", "@aimpact/ailearn-app@0.0.32/config"], function (_export, _context2) {
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
    }, function (_beyondJsReactive1112Model) {
      dependency_4 = _beyondJsReactive1112Model;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_5 = _aimpactAilearnSdk100Core;
    }, function (_aimpactAilearnApp0032ModelGclassroom) {
      dependency_6 = _aimpactAilearnApp0032ModelGclassroom;
    }, function (_dayjs2) {
      dependency_7 = _dayjs2;
    }, function (_react2) {
      dependency_8 = _react2;
    }, function (_pragmateUi011List) {
      dependency_9 = _pragmateUi011List;
    }, function (_pragmateUi011Components) {
      dependency_10 = _pragmateUi011Components;
    }, function (_aimpactAilearnApp0032ComponentsUi) {
      dependency_11 = _aimpactAilearnApp0032ComponentsUi;
    }, function (_aimpactChatSdk100Session) {
      dependency_12 = _aimpactChatSdk100Session;
    }, function (_pragmateUi011Alert) {
      dependency_13 = _pragmateUi011Alert;
    }, function (_pragmateUi011Link) {
      dependency_14 = _pragmateUi011Link;
    }, function (_pragmateUi011Modal) {
      dependency_15 = _pragmateUi011Modal;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_16 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi011Icons) {
      dependency_17 = _pragmateUi011Icons;
    }, function (_pragmateUi011Toast) {
      dependency_18 = _pragmateUi011Toast;
    }, function (_aimpactAilearnApp0032ComponentsNavbarHeaderCode) {
      dependency_19 = _aimpactAilearnApp0032ComponentsNavbarHeaderCode;
    }, function (_aimpactChat101SharedComponents) {
      dependency_20 = _aimpactChat101SharedComponents;
    }, function (_aimpactChat101SharedHooks) {
      dependency_21 = _aimpactChat101SharedHooks;
    }, function (_aimpactAilearnApp0032Config) {
      dependency_22 = _aimpactAilearnApp0032Config;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/http-suite", "1.0.3"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/react-18-widgets", "1.1.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["apexcharts", "3.48.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["firebase", "10.9.0"], ["firebase-admin", "11.11.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["@aimpact/ailearn-app", "0.0.32"], ["@aimpact/ailearn-app", "0.0.32"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.32/classrooms/list",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@aimpact/ailearn-sdk/core', dependency_5], ['@aimpact/ailearn-app/model/gclassroom', dependency_6], ['dayjs', dependency_7], ['react', dependency_8], ['pragmate-ui/list', dependency_9], ['pragmate-ui/components', dependency_10], ['@aimpact/ailearn-app/components/ui', dependency_11], ['@aimpact/chat-sdk/session', dependency_12], ['pragmate-ui/alert', dependency_13], ['pragmate-ui/link', dependency_14], ['pragmate-ui/modal', dependency_15], ['@beyond-js/react-18-widgets/hooks', dependency_16], ['pragmate-ui/icons', dependency_17], ['pragmate-ui/toast', dependency_18], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_19], ['@aimpact/chat/shared/components', dependency_20], ['@aimpact/chat/shared/hooks', dependency_21], ['@aimpact/ailearn-app/config', dependency_22]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-classroom-list",
        "vspecifier": "@aimpact/ailearn-app@0.0.32/classrooms/list.widget",
        "is": "page",
        "route": "/classrooms/list",
        "layout": "general-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.32/classrooms/list.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 3542939638,
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
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 2716171082,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _core = require("@aimpact/ailearn-sdk/core");
          var _gclassroom = require("@aimpact/ailearn-app/model/gclassroom");
          var _dayjs = require("dayjs");
          class StoreManager extends _model.ReactiveModel {
            #items;
            get items() {
              return this.model.items;
            }
            #model;
            get model() {
              return this.#model;
            }
            get gItems() {
              if (_gclassroom.gclassroom.error.code > 0) {
                console.log(_gclassroom.gclassroom.error);
                return [];
              }
              return _gclassroom.gclassroom.classes.values().map(item => {
                return {
                  ...item,
                  imported: this.model.googleClassroomsIds.has(item.id)
                };
              });
            }
            #itemsSelected = new Map();
            get itemsSelected() {
              return this.#itemsSelected;
            }
            constructor() {
              super();
              this.#model = new _core.Classrooms();
              globalThis.c = this.#model;
              this.model.on('change', this.triggerEvent);
              _gclassroom.gclassroom.on('change', this.triggerEvent);
              this.#init();
              this.load();
            }
            async load() {
              try {
                this.fetching = true;
                await this.model.load();
                this.ready = true;
              } catch (e) {
                console.error(e);
              } finally {
                this.fetching = false;
              }
            }
            async delete(item) {
              await item.delete();
            }
            loadClasses = async () => {
              return await _gclassroom.gclassroom.courses();
            };
            async #init() {
              const currentTime = (0, _dayjs.default)();
              if (_gclassroom.gclassroom.lastClassesQueryTime && _gclassroom.gclassroom.classes.size) {
                this.ready = true;
                if (currentTime.diff(_gclassroom.gclassroom.lastClassesQueryTime, 'minutes') > 5) {
                  this.loadClasses();
                }
                return;
              }
              this.loadClasses();
              this.ready = true;
            }
            async saveItemToImport(glcassroom) {
              const item = new _core.Classroom();
              await item.isReady;
              item.set({
                external: glcassroom.id,
                name: glcassroom.name,
                description: 'It does not have a description'
              });
              this.itemsSelected.set(glcassroom.id, item);
              this.triggerEvent();
            }
            toggleItem(item) {
              if (this.itemsSelected.has(item.id)) {
                this.#itemsSelected.delete(item.id);
                this.triggerEvent();
                return;
              }
              this.saveItemToImport(item);
            }
            async saveItems() {
              try {
                this.fetching = true;
                const items = [...this.#itemsSelected.values()].map(item => {
                  return {
                    ...item.getProperties()
                  };
                });
                const {
                  status,
                  data
                } = await this.model.importFromGoogleClassroom({
                  items
                });
                if (!status) {
                  throw new Error('error publishing classroom');
                }
                this.#itemsSelected = new Map();
                return data;
              } catch (e) {
                console.error(1, e);
              } finally {
                this.fetching = false;
              }
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /**************************************
      INTERNAL MODULE: ./views/classroom-list
      **************************************/

      ims.set('./views/classroom-list', {
        hash: 3520326632,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ClassroomsList = ClassroomsList;
          var _react = require("react");
          var _item = require("./item");
          var _list = require("pragmate-ui/list");
          function ClassroomsList({
            store
          }) {
            return _react.default.createElement("article", {
              className: "classroom-list__container"
            }, _react.default.createElement(_list.List, {
              className: "list-unstyled grid-container g-2-columns mt-15",
              items: store.items,
              control: _item.Classroom
            }));
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 2192064674,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useModuleContext = exports.ModuleContext = void 0;
          var React = require("react");
          const ModuleContext = exports.ModuleContext = React.createContext({});
          const useModuleContext = () => React.useContext(ModuleContext);
          exports.useModuleContext = useModuleContext;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/empty
      *****************************/

      ims.set('./views/empty', {
        hash: 2085668566,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyList = EmptyList;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _context = require("./context");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          function EmptyList() {
            const {
              texts
            } = (0, _context.useModuleContext)();
            return _react.default.createElement(_ui.EmptyCard, {
              text: texts.empty.title,
              description: texts.empty.description,
              icon: "edit"
            }, _react.default.createElement("div", {
              className: "actions flex-container flex-center"
            }, _react.default.createElement(_components.Link, {
              href: "/classrooms/create",
              className: "grow btn btn-primary"
            }, texts.actions.create)));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./views/header
      ******************************/

      ims.set('./views/header', {
        hash: 2242733666,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Header = Header;
          var _react = require("react");
          var _context = require("./context");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _session = require("@aimpact/chat-sdk/session");
          var _alert = require("pragmate-ui/alert");
          var _components = require("pragmate-ui/components");
          var _link = require("pragmate-ui/link");
          var _gclassroom = require("@aimpact/ailearn-app/model/gclassroom");
          var _modal = require("pragmate-ui/modal");
          var _import = require("./import");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          function Header() {
            const {
              texts,
              fetching,
              store
            } = (0, _context.useModuleContext)();
            const userName = _session.sessionWrapper.user.displayName;
            const [loading, setLoading] = _react.default.useState(fetching);
            const [show, setShow] = _react.default.useState(false);
            const disableWithoutAuth = !_gclassroom.gclassroom.authorized;
            (0, _hooks.useBinder)([store], () => setLoading(store.fetching));
            function handleModal() {
              setShow(!show);
            }
            return _react.default.createElement(_react.default.Fragment, null, disableWithoutAuth && _react.default.createElement("div", {
              className: "alert-extra__container"
            }, _react.default.createElement(_alert.Alert, {
              type: "info"
            }, texts.extraInfo)), store.items && _react.default.createElement(_ui.PageTitle, {
              title: texts.title
            }, _react.default.createElement("div", {
              className: "buttons-header__container"
            }, _react.default.createElement(_components.Button, {
              onClick: handleModal,
              icon: "google",
              variant: "primary",
              disabled: disableWithoutAuth
            }, texts.actions.import), _react.default.createElement(_link.Link, {
              className: "add-item",
              href: `/classrooms/join`
            }, _react.default.createElement(_components.Button, {
              icon: "share-link",
              variant: "primary"
            }, texts.actions.join)), _react.default.createElement(_link.Link, {
              className: "add-item",
              href: `/classrooms/create`
            }, _react.default.createElement(_components.Button, {
              icon: "add",
              variant: "primary"
            }, texts.actions.create)))), show && _react.default.createElement(_modal.Modal, {
              show: true,
              className: "modal-import__general",
              onClose: handleModal
            }, _react.default.createElement(_import.Import, null)));
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./views/import/empty
      ************************************/

      ims.set('./views/import/empty', {
        hash: 3044890623,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyExplorer = EmptyExplorer;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _context = require("../context");
          function EmptyExplorer({}) {
            const {
              texts
            } = (0, _context.useModuleContext)();
            return _react.default.createElement("div", {
              className: "items-modal__empty"
            }, _react.default.createElement(_icons.IconButton, {
              icon: "circle-exclamation",
              title: texts.empty.titleImport
            }), _react.default.createElement("span", null, texts.empty.labelImport));
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./views/import/index
      ************************************/

      ims.set('./views/import/index', {
        hash: 947523122,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Import = Import;
          var _react = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _gclassroom = require("@aimpact/ailearn-app/model/gclassroom");
          var _components = require("pragmate-ui/components");
          var _empty = require("./empty");
          var _list = require("./list");
          var _context = require("../context");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          function Import() {
            const {
              store,
              texts
            } = (0, _context.useModuleContext)();
            const [fetching, setFetching] = _react.default.useState(store.fetching);
            const [ready, setReady] = _react.default.useState(store.ready);
            (0, _hooks.useBinder)([store], () => {
              setReady(store.ready);
              setFetching(store.fetching);
            });
            const isReady = _gclassroom.gclassroom.ready && ready;
            if (!isReady) return _react.default.createElement(_components.Spinner, {
              active: true,
              type: "primary"
            });
            const Control = !store.gItems.length ? _empty.EmptyExplorer : _list.List;
            return _react.default.createElement("div", {
              className: "modal-import__container"
            }, _react.default.createElement("h4", null, texts.import.title), _react.default.createElement(Control, null), _react.default.createElement(_ui.ProcessContainer, {
              fetching: fetching
            }));
          }
        }
      });

      /******************************************
      INTERNAL MODULE: ./views/import/items/index
      ******************************************/

      ims.set('./views/import/items/index', {
        hash: 1993213349,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Item = void 0;
          var _react = require("react");
          var _context = require("../../context");
          var _icons = require("pragmate-ui/icons");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          const Item = ({
            item
          }) => {
            const {
              store,
              texts
            } = (0, _context.useModuleContext)();
            const [checked, setChecked] = _react.default.useState(false);
            const [itemsSaved, setItemsSaved] = _react.default.useState(store.items);
            (0, _hooks.useBinder)([store], () => setItemsSaved(store.items));
            const alreadyExist = itemsSaved.some(obj => {
              return obj.external.id === item.id;
            });
            const updateImports = e => {
              if (alreadyExist) return;
              setChecked(!checked);
              store.toggleItem(item);
            };
            const isSelected = store.itemsSelected.has(item.id);
            return _react.default.createElement("li", {
              key: item.id,
              className: `gclassroom-item ${alreadyExist && ' already'}`,
              onClick: updateImports
            }, _react.default.createElement("span", {
              className: "flex-container flex-space-between"
            }, item.name), isSelected && _react.default.createElement(_icons.Icon, {
              icon: "check"
            }), alreadyExist && _react.default.createElement("div", {
              className: "saved__item"
            }, _react.default.createElement("span", null, texts.actions.imported), _react.default.createElement(_icons.Icon, {
              icon: "check",
              className: "disabled-icon"
            })));
          };
          exports.Item = Item;
        }
      });

      /***********************************
      INTERNAL MODULE: ./views/import/list
      ***********************************/

      ims.set('./views/import/list', {
        hash: 913571725,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.List = List;
          var _react = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _items = require("./items");
          var _context = require("../context");
          var _components = require("pragmate-ui/components");
          var _toast = require("pragmate-ui/toast");
          var _list = require("pragmate-ui/list");
          function List() {
            const {
              store,
              texts
            } = (0, _context.useModuleContext)();
            const [items, setItems] = _react.default.useState(store.gItems);
            (0, _hooks.useBinder)([store], () => setItems(store.gItems));
            const saveItem = async event => {
              event.preventDefault();
              event.stopPropagation();
              try {
                const data = await store.saveItems();
                _toast.toast.success('Classroom published successfully');
              } catch (e) {
                _toast.toast.error('Error while publishing classroom');
              }
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_list.List, {
              specs: {},
              items: items,
              control: _items.Item,
              className: "gclassrooms-modal__list"
            }), _react.default.createElement("div", {
              className: "gclassroom-modal__action flex-container flex-end"
            }, _react.default.createElement(_components.Button, {
              icon: "arrowDownloads",
              variant: "primary",
              className: "import-button__action circle",
              onClick: saveItem,
              disabled: store.itemsSelected.size < 1
            }, texts.actions.import)));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 4118986013,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _navbarHeader = require("@aimpact/ailearn-app/components/navbar-header.code");
          var _empty = require("./empty");
          var _header = require("./header");
          var _context = require("./context");
          var _components = require("@aimpact/chat/shared/components");
          var _beyond_context = require("beyond_context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _hooks2 = require("@aimpact/chat/shared/hooks");
          var _classroomList = require("./classroom-list");
          var _gclassroom = require("@aimpact/ailearn-app/model/gclassroom");
          var _config = require("@aimpact/ailearn-app/config");
          /*bundle*/
          function View({
            store
          }) {
            const [textsReady, texts] = (0, _hooks2.useTexts)(_beyond_context.module.specifier);
            const [ready, setReady] = (0, _react.useState)(store.ready);
            const [fetching, setFetching] = (0, _react.useState)(store.fetching);
            const [totalItems, setTotalItems] = (0, _react.useState)(store.items.length);
            (0, _hooks.useBinder)([store], () => {
              setReady(store.ready);
              setFetching(store.fetching);
              setTotalItems(store.items.length);
            });
            if (!ready || !textsReady || !_gclassroom.gclassroom.ready) return _react.default.createElement(_components.PreloadScreen, null);
            const ListControl = totalItems < 1 ? _empty.EmptyList : _classroomList.ClassroomsList;
            return _react.default.createElement(_context.ModuleContext.Provider, {
              value: {
                texts,
                store,
                fetching,
                totalItems
              }
            }, _react.default.createElement(_navbarHeader.NavbarHeader, {
              breadcrumb: [[_config.default.params.APP_NAME, '/'], ['Classrooms', '']]
            }), _react.default.createElement(_ui.PageContainer, null, _react.default.createElement(_header.Header, null), _react.default.createElement(ListControl, {
              store: store
            })));
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./views/item/actions
      ************************************/

      ims.set('./views/item/actions', {
        hash: 1517931771,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = LearningItemActions;
          var _react = require("react");
          var _context = require("../context");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          function LearningItemActions({
            item
          }) {
            const {
              texts,
              store
            } = (0, _context.useModuleContext)();
            const onDelete = async () => {
              await store.delete(item);
            };
            return _react.default.createElement("section", {
              className: "card-footer__actions"
            }, _react.default.createElement(_ui.ConfirmAction, {
              textPopUp: texts?.actions?.delete,
              icon: "delete",
              onConfirm: onDelete
            }));
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./views/item/index
      **********************************/

      ims.set('./views/item/index', {
        hash: 184380642,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Classroom = Classroom;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _title = require("./title");
          var _actions = require("./actions");
          function Classroom({
            data
          }) {
            return _react.default.createElement(_ui.Card, null, _react.default.createElement(_ui.CardContent, null, _react.default.createElement(_title.default, {
              item: data
            })), _react.default.createElement(_ui.CardFooter, null, _react.default.createElement(_actions.default, {
              item: data
            })));
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./views/item/title
      **********************************/

      ims.set('./views/item/title', {
        hash: 3370489448,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = ModuleData;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _icons = require("pragmate-ui/icons");
          var _context = require("../context");
          function ModuleData({
            item
          }) {
            const {
              texts
            } = (0, _context.useModuleContext)();
            return _react.default.createElement("section", null, _react.default.createElement("div", {
              className: "title-card__container flex-container flex-space-between"
            }, _react.default.createElement(_components.Link, {
              href: `/classrooms/view/${item.id}`
            }, _react.default.createElement("h4", null, item.name)), item?.external?.id && _react.default.createElement(_icons.IconButton, {
              title: texts.actions.gTooltip,
              icon: "google"
            })), _react.default.createElement("span", null, item.description));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3IiwiZXhwb3J0cyIsIl9tb2RlbCIsIl9jb3JlIiwiX2djbGFzc3Jvb20iLCJfZGF5anMiLCJSZWFjdGl2ZU1vZGVsIiwiaXRlbXMiLCJtb2RlbCIsImdJdGVtcyIsImdjbGFzc3Jvb20iLCJlcnJvciIsImNvZGUiLCJjb25zb2xlIiwibG9nIiwiY2xhc3NlcyIsInZhbHVlcyIsIm1hcCIsIml0ZW0iLCJpbXBvcnRlZCIsImdvb2dsZUNsYXNzcm9vbXNJZHMiLCJoYXMiLCJpZCIsIml0ZW1zU2VsZWN0ZWQiLCJNYXAiLCJjb25zdHJ1Y3RvciIsIkNsYXNzcm9vbXMiLCJnbG9iYWxUaGlzIiwiYyIsIm9uIiwidHJpZ2dlckV2ZW50IiwiaW5pdCIsImxvYWQiLCJmZXRjaGluZyIsInJlYWR5IiwiZSIsImRlbGV0ZSIsImxvYWRDbGFzc2VzIiwiY291cnNlcyIsIiNpbml0IiwiY3VycmVudFRpbWUiLCJkZWZhdWx0IiwibGFzdENsYXNzZXNRdWVyeVRpbWUiLCJzaXplIiwiZGlmZiIsInNhdmVJdGVtVG9JbXBvcnQiLCJnbGNhc3Nyb29tIiwiQ2xhc3Nyb29tIiwiaXNSZWFkeSIsInNldCIsImV4dGVybmFsIiwibmFtZSIsImRlc2NyaXB0aW9uIiwidG9nZ2xlSXRlbSIsInNhdmVJdGVtcyIsImdldFByb3BlcnRpZXMiLCJzdGF0dXMiLCJkYXRhIiwiaW1wb3J0RnJvbUdvb2dsZUNsYXNzcm9vbSIsIkVycm9yIiwiX3JlYWN0IiwiX2l0ZW0iLCJfbGlzdCIsIkNsYXNzcm9vbXNMaXN0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIkxpc3QiLCJjb250cm9sIiwiUmVhY3QiLCJNb2R1bGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZU1vZHVsZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2NvbXBvbmVudHMiLCJfY29udGV4dCIsIl91aSIsIkVtcHR5TGlzdCIsInRleHRzIiwiRW1wdHlDYXJkIiwidGV4dCIsImVtcHR5IiwidGl0bGUiLCJpY29uIiwiTGluayIsImhyZWYiLCJhY3Rpb25zIiwiY3JlYXRlIiwiX3Nlc3Npb24iLCJfYWxlcnQiLCJfbGluayIsIl9tb2RhbCIsIl9pbXBvcnQiLCJfaG9va3MiLCJIZWFkZXIiLCJ1c2VyTmFtZSIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsImRpc3BsYXlOYW1lIiwibG9hZGluZyIsInNldExvYWRpbmciLCJ1c2VTdGF0ZSIsInNob3ciLCJzZXRTaG93IiwiZGlzYWJsZVdpdGhvdXRBdXRoIiwiYXV0aG9yaXplZCIsInVzZUJpbmRlciIsImhhbmRsZU1vZGFsIiwiRnJhZ21lbnQiLCJBbGVydCIsInR5cGUiLCJleHRyYUluZm8iLCJQYWdlVGl0bGUiLCJCdXR0b24iLCJvbkNsaWNrIiwidmFyaWFudCIsImRpc2FibGVkIiwiaW1wb3J0Iiwiam9pbiIsIk1vZGFsIiwib25DbG9zZSIsIkltcG9ydCIsIl9pY29ucyIsIkVtcHR5RXhwbG9yZXIiLCJJY29uQnV0dG9uIiwidGl0bGVJbXBvcnQiLCJsYWJlbEltcG9ydCIsIl9lbXB0eSIsInNldEZldGNoaW5nIiwic2V0UmVhZHkiLCJTcGlubmVyIiwiYWN0aXZlIiwiQ29udHJvbCIsImxlbmd0aCIsIlByb2Nlc3NDb250YWluZXIiLCJJdGVtIiwiY2hlY2tlZCIsInNldENoZWNrZWQiLCJpdGVtc1NhdmVkIiwic2V0SXRlbXNTYXZlZCIsImFscmVhZHlFeGlzdCIsInNvbWUiLCJvYmoiLCJ1cGRhdGVJbXBvcnRzIiwiaXNTZWxlY3RlZCIsImtleSIsIkljb24iLCJfaXRlbXMiLCJfdG9hc3QiLCJzZXRJdGVtcyIsInNhdmVJdGVtIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsInRvYXN0Iiwic3VjY2VzcyIsInNwZWNzIiwiX25hdmJhckhlYWRlciIsIl9oZWFkZXIiLCJfYmV5b25kX2NvbnRleHQiLCJfaG9va3MyIiwiX2NsYXNzcm9vbUxpc3QiLCJfY29uZmlnIiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidG90YWxJdGVtcyIsInNldFRvdGFsSXRlbXMiLCJQcmVsb2FkU2NyZWVuIiwiTGlzdENvbnRyb2wiLCJQcm92aWRlciIsInZhbHVlIiwiTmF2YmFySGVhZGVyIiwiYnJlYWRjcnVtYiIsInBhcmFtcyIsIkFQUF9OQU1FIiwiUGFnZUNvbnRhaW5lciIsIkxlYXJuaW5nSXRlbUFjdGlvbnMiLCJvbkRlbGV0ZSIsIkNvbmZpcm1BY3Rpb24iLCJ0ZXh0UG9wVXAiLCJvbkNvbmZpcm0iLCJfdGl0bGUiLCJfYWN0aW9ucyIsIkNhcmQiLCJDYXJkQ29udGVudCIsIkNhcmRGb290ZXIiLCJNb2R1bGVEYXRhIiwiZ1Rvb2x0aXAiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9jbGFzc3Jvb20tbGlzdC50c3giLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9lbXB0eS50c3giLCIvdHMvdmlld3MvaGVhZGVyLnRzeCIsIi90cy92aWV3cy9pbXBvcnQvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2ltcG9ydC9pbmRleC50c3giLCIvdHMvdmlld3MvaW1wb3J0L2l0ZW1zL2luZGV4LnRzeCIsIi90cy92aWV3cy9pbXBvcnQvbGlzdC50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2l0ZW0vYWN0aW9ucy50c3giLCIvdHMvdmlld3MvaXRlbS9pbmRleC50c3giLCIvdHMvdmlld3MvaXRlbS90aXRsZS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5n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