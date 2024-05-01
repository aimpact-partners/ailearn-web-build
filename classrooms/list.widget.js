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
        hash: 3233327053,
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
        hash: 2094042495,
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
            }, _react.default.createElement(_link.Link, {
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
        hash: 1976729040,
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
              breadcrumb: [[texts.breadcrumb.classrooms, '']]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3IiwiZXhwb3J0cyIsIl9tb2RlbCIsIl9jb3JlIiwiX2djbGFzc3Jvb20iLCJfZGF5anMiLCJSZWFjdGl2ZU1vZGVsIiwiaXRlbXMiLCJtb2RlbCIsImdJdGVtcyIsImdjbGFzc3Jvb20iLCJlcnJvciIsImNvZGUiLCJjbGFzc2VzIiwidmFsdWVzIiwibWFwIiwiaXRlbSIsImltcG9ydGVkIiwiZ29vZ2xlQ2xhc3Nyb29tc0lkcyIsImhhcyIsImlkIiwiaXRlbXNTZWxlY3RlZCIsIk1hcCIsImNvbnN0cnVjdG9yIiwiQ2xhc3Nyb29tcyIsImdsb2JhbFRoaXMiLCJjIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJpbml0IiwibG9hZCIsImZldGNoaW5nIiwicmVhZHkiLCJlIiwiY29uc29sZSIsImRlbGV0ZSIsImxvYWRDbGFzc2VzIiwiY291cnNlcyIsIiNpbml0IiwiY3VycmVudFRpbWUiLCJkZWZhdWx0IiwibGFzdENsYXNzZXNRdWVyeVRpbWUiLCJzaXplIiwiZGlmZiIsInNhdmVJdGVtVG9JbXBvcnQiLCJnbGNhc3Nyb29tIiwiQ2xhc3Nyb29tIiwiaXNSZWFkeSIsInNldCIsImV4dGVybmFsIiwibmFtZSIsImRlc2NyaXB0aW9uIiwidG9nZ2xlSXRlbSIsInNhdmVJdGVtcyIsImdldFByb3BlcnRpZXMiLCJzdGF0dXMiLCJkYXRhIiwiaW1wb3J0RnJvbUdvb2dsZUNsYXNzcm9vbSIsIkVycm9yIiwiX3JlYWN0IiwiX2l0ZW0iLCJfbGlzdCIsIkNsYXNzcm9vbXNMaXN0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIkxpc3QiLCJjb250cm9sIiwiUmVhY3QiLCJNb2R1bGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZU1vZHVsZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2NvbXBvbmVudHMiLCJfY29udGV4dCIsIl91aSIsIkVtcHR5TGlzdCIsInRleHRzIiwiRW1wdHlDYXJkIiwidGV4dCIsImVtcHR5IiwidGl0bGUiLCJpY29uIiwiTGluayIsImhyZWYiLCJhY3Rpb25zIiwiY3JlYXRlIiwiX3Nlc3Npb24iLCJfYWxlcnQiLCJfbGluayIsIl9tb2RhbCIsIl9pbXBvcnQiLCJfaG9va3MiLCJIZWFkZXIiLCJ1c2VyTmFtZSIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsImRpc3BsYXlOYW1lIiwibG9hZGluZyIsInNldExvYWRpbmciLCJ1c2VTdGF0ZSIsInNob3ciLCJzZXRTaG93IiwiZGlzYWJsZVdpdGhvdXRBdXRoIiwiYXV0aG9yaXplZCIsInVzZUJpbmRlciIsImhhbmRsZU1vZGFsIiwiRnJhZ21lbnQiLCJBbGVydCIsInR5cGUiLCJleHRyYUluZm8iLCJQYWdlVGl0bGUiLCJCdXR0b24iLCJ2YXJpYW50Iiwiam9pbiIsIk1vZGFsIiwib25DbG9zZSIsIkltcG9ydCIsIl9pY29ucyIsIkVtcHR5RXhwbG9yZXIiLCJJY29uQnV0dG9uIiwidGl0bGVJbXBvcnQiLCJsYWJlbEltcG9ydCIsIl9lbXB0eSIsInNldEZldGNoaW5nIiwic2V0UmVhZHkiLCJTcGlubmVyIiwiYWN0aXZlIiwiQ29udHJvbCIsImxlbmd0aCIsImltcG9ydCIsIlByb2Nlc3NDb250YWluZXIiLCJJdGVtIiwiY2hlY2tlZCIsInNldENoZWNrZWQiLCJpdGVtc1NhdmVkIiwic2V0SXRlbXNTYXZlZCIsImFscmVhZHlFeGlzdCIsInNvbWUiLCJvYmoiLCJ1cGRhdGVJbXBvcnRzIiwiaXNTZWxlY3RlZCIsImtleSIsIm9uQ2xpY2siLCJJY29uIiwiX2l0ZW1zIiwiX3RvYXN0Iiwic2V0SXRlbXMiLCJzYXZlSXRlbSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJ0b2FzdCIsInN1Y2Nlc3MiLCJzcGVjcyIsImRpc2FibGVkIiwiX25hdmJhckhlYWRlciIsIl9oZWFkZXIiLCJfYmV5b25kX2NvbnRleHQiLCJfaG9va3MyIiwiX2NsYXNzcm9vbUxpc3QiLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ0b3RhbEl0ZW1zIiwic2V0VG90YWxJdGVtcyIsIlByZWxvYWRTY3JlZW4iLCJMaXN0Q29udHJvbCIsIlByb3ZpZGVyIiwidmFsdWUiLCJOYXZiYXJIZWFkZXIiLCJicmVhZGNydW1iIiwiY2xhc3Nyb29tcyIsIlBhZ2VDb250YWluZXIiLCJMZWFybmluZ0l0ZW1BY3Rpb25zIiwib25EZWxldGUiLCJDb25maXJtQWN0aW9uIiwidGV4dFBvcFVwIiwib25Db25maXJtIiwiX3RpdGxlIiwiX2FjdGlvbnMiLCJDYXJkIiwiQ2FyZENvbnRlbnQiLCJDYXJkRm9vdGVyIiwiTW9kdWxlRGF0YSIsImdUb29sdGlwIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvY2xhc3Nyb29tLWxpc3QudHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2hlYWRlci50c3giLCIvdHMvdmlld3MvaW1wb3J0L2VtcHR5LnRzeCIsIi90cy92aWV3cy9pbXBvcnQvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2ltcG9ydC9pdGVtcy9pbmRleC50c3giLCIvdHMvdmlld3MvaW1wb3J0L2xpc3QudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9pdGVtL2FjdGlvbnMudHN4IiwiL3RzL3ZpZXdzL2l0ZW0vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2l0ZW0vdGl0bGUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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