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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3IiwiZXhwb3J0cyIsIl9tb2RlbCIsIl9jb3JlIiwiX2djbGFzc3Jvb20iLCJfZGF5anMiLCJSZWFjdGl2ZU1vZGVsIiwiaXRlbXMiLCJtb2RlbCIsImdJdGVtcyIsImdjbGFzc3Jvb20iLCJlcnJvciIsImNvZGUiLCJjb25zb2xlIiwibG9nIiwiY2xhc3NlcyIsInZhbHVlcyIsIm1hcCIsIml0ZW0iLCJpbXBvcnRlZCIsImdvb2dsZUNsYXNzcm9vbXNJZHMiLCJoYXMiLCJpZCIsIml0ZW1zU2VsZWN0ZWQiLCJNYXAiLCJjb25zdHJ1Y3RvciIsIkNsYXNzcm9vbXMiLCJnbG9iYWxUaGlzIiwiYyIsIm9uIiwidHJpZ2dlckV2ZW50IiwiaW5pdCIsImxvYWQiLCJmZXRjaGluZyIsInJlYWR5IiwiZSIsImRlbGV0ZSIsImxvYWRDbGFzc2VzIiwiY291cnNlcyIsIiNpbml0IiwiY3VycmVudFRpbWUiLCJkZWZhdWx0IiwibGFzdENsYXNzZXNRdWVyeVRpbWUiLCJzaXplIiwiZGlmZiIsInNhdmVJdGVtVG9JbXBvcnQiLCJnbGNhc3Nyb29tIiwiQ2xhc3Nyb29tIiwiaXNSZWFkeSIsInNldCIsImV4dGVybmFsIiwibmFtZSIsImRlc2NyaXB0aW9uIiwidG9nZ2xlSXRlbSIsInNhdmVJdGVtcyIsImdldFByb3BlcnRpZXMiLCJzdGF0dXMiLCJkYXRhIiwiaW1wb3J0RnJvbUdvb2dsZUNsYXNzcm9vbSIsIkVycm9yIiwiX3JlYWN0IiwiX2l0ZW0iLCJfbGlzdCIsIkNsYXNzcm9vbXNMaXN0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIkxpc3QiLCJjb250cm9sIiwiUmVhY3QiLCJNb2R1bGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZU1vZHVsZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2NvbXBvbmVudHMiLCJfY29udGV4dCIsIl91aSIsIkVtcHR5TGlzdCIsInRleHRzIiwiRW1wdHlDYXJkIiwidGV4dCIsImVtcHR5IiwidGl0bGUiLCJpY29uIiwiTGluayIsImhyZWYiLCJhY3Rpb25zIiwiY3JlYXRlIiwiX3Nlc3Npb24iLCJfYWxlcnQiLCJfbGluayIsIl9tb2RhbCIsIl9pbXBvcnQiLCJfaG9va3MiLCJIZWFkZXIiLCJ1c2VyTmFtZSIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsImRpc3BsYXlOYW1lIiwibG9hZGluZyIsInNldExvYWRpbmciLCJ1c2VTdGF0ZSIsInNob3ciLCJzZXRTaG93IiwiZGlzYWJsZVdpdGhvdXRBdXRoIiwiYXV0aG9yaXplZCIsInVzZUJpbmRlciIsImhhbmRsZU1vZGFsIiwiRnJhZ21lbnQiLCJBbGVydCIsInR5cGUiLCJleHRyYUluZm8iLCJQYWdlVGl0bGUiLCJCdXR0b24iLCJvbkNsaWNrIiwidmFyaWFudCIsImRpc2FibGVkIiwiaW1wb3J0Iiwiam9pbiIsIk1vZGFsIiwib25DbG9zZSIsIkltcG9ydCIsIl9pY29ucyIsIkVtcHR5RXhwbG9yZXIiLCJJY29uQnV0dG9uIiwidGl0bGVJbXBvcnQiLCJsYWJlbEltcG9ydCIsIl9lbXB0eSIsInNldEZldGNoaW5nIiwic2V0UmVhZHkiLCJTcGlubmVyIiwiYWN0aXZlIiwiQ29udHJvbCIsImxlbmd0aCIsIlByb2Nlc3NDb250YWluZXIiLCJJdGVtIiwiY2hlY2tlZCIsInNldENoZWNrZWQiLCJpdGVtc1NhdmVkIiwic2V0SXRlbXNTYXZlZCIsImFscmVhZHlFeGlzdCIsInNvbWUiLCJvYmoiLCJ1cGRhdGVJbXBvcnRzIiwiaXNTZWxlY3RlZCIsImtleSIsIkljb24iLCJfaXRlbXMiLCJfdG9hc3QiLCJzZXRJdGVtcyIsInNhdmVJdGVtIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsInRvYXN0Iiwic3VjY2VzcyIsInNwZWNzIiwiX25hdmJhckhlYWRlciIsIl9oZWFkZXIiLCJfYmV5b25kX2NvbnRleHQiLCJfaG9va3MyIiwiX2NsYXNzcm9vbUxpc3QiLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ0b3RhbEl0ZW1zIiwic2V0VG90YWxJdGVtcyIsIlByZWxvYWRTY3JlZW4iLCJMaXN0Q29udHJvbCIsIlByb3ZpZGVyIiwidmFsdWUiLCJOYXZiYXJIZWFkZXIiLCJicmVhZGNydW1iIiwiY2xhc3Nyb29tcyIsIlBhZ2VDb250YWluZXIiLCJMZWFybmluZ0l0ZW1BY3Rpb25zIiwib25EZWxldGUiLCJDb25maXJtQWN0aW9uIiwidGV4dFBvcFVwIiwib25Db25maXJtIiwiX3RpdGxlIiwiX2FjdGlvbnMiLCJDYXJkIiwiQ2FyZENvbnRlbnQiLCJDYXJkRm9vdGVyIiwiTW9kdWxlRGF0YSIsImdUb29sdGlwIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvY2xhc3Nyb29tLWxpc3QudHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2hlYWRlci50c3giLCIvdHMvdmlld3MvaW1wb3J0L2VtcHR5LnRzeCIsIi90cy92aWV3cy9pbXBvcnQvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2ltcG9ydC9pdGVtcy9pbmRleC50c3giLCIvdHMvdmlld3MvaW1wb3J0L2xpc3QudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9pdGVtL2FjdGlvbnMudHN4IiwiL3RzL3ZpZXdzL2l0ZW0vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2l0ZW0vdGl0bGUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7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QW5CLE9BQUEsQ0FBQXVCLGFBQUEsQ0FBQ1csR0FBQSxDQUFBNEcsV0FBVyxRQUNYM0gsTUFBQSxDQUFBbkIsT0FBQSxDQUFBdUIsYUFBQSxDQUFDb0gsTUFBQSxDQUFBM0ksT0FBVTtjQUFDdkIsSUFBSSxFQUFFdUM7WUFBSSxFQUFJLENBQ2IsRUFDZEcsTUFBQSxDQUFBbkIsT0FBQSxDQUFBdUIsYUFBQSxDQUFDVyxHQUFBLENBQUE2RyxVQUFVLFFBQ1Y1SCxNQUFBLENBQUFuQixPQUFBLENBQUF1QixhQUFBLENBQUNxSCxRQUFBLENBQUE1SSxPQUFtQjtjQUFDdkIsSUFBSSxFQUFFdUM7WUFBSSxFQUFJLENBQ3ZCLENBQ1A7VUFFVDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNoQkEsSUFBQUcsTUFBQSxHQUFBckUsT0FBQTtVQUNBLElBQUFrRixXQUFBLEdBQUFsRixPQUFBO1VBQ0EsSUFBQWtJLE1BQUEsR0FBQWxJLE9BQUE7VUFDQSxJQUFBbUYsUUFBQSxHQUFBbkYsT0FBQTtVQUVjLFNBQVVrTSxVQUFVQSxDQUFDO1lBQUV2SztVQUFJLENBQUU7WUFDMUMsTUFBTTtjQUFFMkQ7WUFBSyxDQUFFLEdBQUcsSUFBQUgsUUFBQSxDQUFBSCxnQkFBZ0IsR0FBRTtZQUVwQyxPQUNDWCxNQUFBLENBQUFuQixPQUFBLENBQUF1QixhQUFBLGtCQUNDSixNQUFBLENBQUFuQixPQUFBLENBQUF1QixhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUF5RCxHQUN2RUwsTUFBQSxDQUFBbkIsT0FBQSxDQUFBdUIsYUFBQSxDQUFDUyxXQUFBLENBQUFVLElBQUk7Y0FBQ0MsSUFBSSxFQUFFLG9CQUFvQmxFLElBQUksQ0FBQ0ksRUFBRTtZQUFFLEdBQ3hDc0MsTUFBQSxDQUFBbkIsT0FBQSxDQUFBdUIsYUFBQSxhQUFLOUMsSUFBSSxDQUFDaUMsSUFBSSxDQUFNLENBQ2QsRUFDTmpDLElBQUksRUFBRWdDLFFBQVEsRUFBRTVCLEVBQUUsSUFBSXNDLE1BQUEsQ0FBQW5CLE9BQUEsQ0FBQXVCLGFBQUEsQ0FBQ3lELE1BQUEsQ0FBQUUsVUFBVTtjQUFDMUMsS0FBSyxFQUFFSixLQUFLLENBQUNRLE9BQU8sQ0FBQ3FHLFFBQVE7Y0FBRXhHLElBQUksRUFBQztZQUFRLEVBQUcsQ0FDN0UsRUFFTnRCLE1BQUEsQ0FBQW5CLE9BQUEsQ0FBQXVCLGFBQUEsZUFBTzlDLElBQUksQ0FBQ2tDLFdBQVcsQ0FBUSxDQUN0QjtVQUVaIiwiaWdub3JlTGlzdCI6W119