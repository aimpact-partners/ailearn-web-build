System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@beyond-js/reactive@1.1.12/model", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/ailearn-app@0.0.46.dev-04/model/gclassroom", "dayjs@1.11.10", "react@18.2.0", "pragmate-ui@0.1.1/list", "@aimpact/ailearn-app@0.0.46.dev-04/components/ui", "pragmate-ui@0.1.1/icons", "pragmate-ui@0.1.1/link", "pragmate-ui@0.1.1/components", "@aimpact/chat-sdk@1.0.0/session", "pragmate-ui@0.1.1/alert", "pragmate-ui@0.1.1/modal", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@0.1.1/toast", "@aimpact/chat@1.0.1/shared/components", "@aimpact/chat@1.0.1/shared/hooks"], function (_export, _context2) {
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
    }, function (_beyondJsReactive1112Model) {
      dependency_4 = _beyondJsReactive1112Model;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_5 = _aimpactAilearnSdk100Core;
    }, function (_aimpactAilearnApp0046Dev04ModelGclassroom) {
      dependency_6 = _aimpactAilearnApp0046Dev04ModelGclassroom;
    }, function (_dayjs2) {
      dependency_7 = _dayjs2;
    }, function (_react2) {
      dependency_8 = _react2;
    }, function (_pragmateUi011List) {
      dependency_9 = _pragmateUi011List;
    }, function (_aimpactAilearnApp0046Dev04ComponentsUi) {
      dependency_10 = _aimpactAilearnApp0046Dev04ComponentsUi;
    }, function (_pragmateUi011Icons) {
      dependency_11 = _pragmateUi011Icons;
    }, function (_pragmateUi011Link) {
      dependency_12 = _pragmateUi011Link;
    }, function (_pragmateUi011Components) {
      dependency_13 = _pragmateUi011Components;
    }, function (_aimpactChatSdk100Session) {
      dependency_14 = _aimpactChatSdk100Session;
    }, function (_pragmateUi011Alert) {
      dependency_15 = _pragmateUi011Alert;
    }, function (_pragmateUi011Modal) {
      dependency_16 = _pragmateUi011Modal;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_17 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi011Toast) {
      dependency_18 = _pragmateUi011Toast;
    }, function (_aimpactChat101SharedComponents) {
      dependency_19 = _aimpactChat101SharedComponents;
    }, function (_aimpactChat101SharedHooks) {
      dependency_20 = _aimpactChat101SharedHooks;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.0.46.dev-04"], ["@aimpact/ailearn-app", "0.0.46.dev-04"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.46.dev-04/classrooms/list",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@aimpact/ailearn-sdk/core', dependency_5], ['@aimpact/ailearn-app/model/gclassroom', dependency_6], ['dayjs', dependency_7], ['react', dependency_8], ['pragmate-ui/list', dependency_9], ['@aimpact/ailearn-app/components/ui', dependency_10], ['pragmate-ui/icons', dependency_11], ['pragmate-ui/link', dependency_12], ['pragmate-ui/components', dependency_13], ['@aimpact/chat-sdk/session', dependency_14], ['pragmate-ui/alert', dependency_15], ['pragmate-ui/modal', dependency_16], ['@beyond-js/react-18-widgets/hooks', dependency_17], ['pragmate-ui/toast', dependency_18], ['@aimpact/chat/shared/components', dependency_19], ['@aimpact/chat/shared/hooks', dependency_20]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-classroom-list",
        "vspecifier": "@aimpact/ailearn-app@0.0.46.dev-04/classrooms/list.widget",
        "is": "page",
        "route": "/classrooms/list",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.46.dev-04/classrooms/list.widget');
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
        hash: 3884708191,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ClassroomsList = ClassroomsList;
          var _react = require("react");
          var _item = require("./item");
          var _list = require("pragmate-ui/list");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _icons = require("pragmate-ui/icons");
          var _link = require("pragmate-ui/link");
          var _context = require("./context");
          function ClassroomsList({
            store
          }) {
            const {
              texts
            } = (0, _context.useModuleContext)();
            return _react.default.createElement(_ui.PageContainer, {
              className: "classroom-list__container"
            }, _react.default.createElement(_ui.PageTitle, {
              title: texts.title
            }, _react.default.createElement(_link.Link, {
              href: "/classrooms/create"
            }, _react.default.createElement(_icons.Icon, {
              icon: "add-circle"
            }), texts.actions.create)), _react.default.createElement(_list.List, {
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
        hash: 2838943168,
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
          var _icons = require("pragmate-ui/icons");
          function EmptyList() {
            const {
              texts
            } = (0, _context.useModuleContext)();
            return React.createElement(_ui.PageContainer, null, React.createElement(_ui.PageTitle, {
              title: texts.title
            }, React.createElement(_components.Link, {
              href: "/modules/management"
            }, React.createElement(_icons.Icon, {
              icon: "add-circle"
            }), texts.actions.create)), React.createElement(_ui.EmptyCard, {
              text: texts.empty.title,
              description: texts.empty.description,
              icon: "edit"
            }, React.createElement("div", {
              className: "empty__actions"
            }, React.createElement(_components.Link, {
              href: "/classrooms/create",
              className: "grow btn btn-primary"
            }, texts.actions.create))));
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
        hash: 1610111849,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _react = require("react");
          var _empty = require("./empty");
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
            }, _react.default.createElement(ListControl, {
              store: store
            }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3IiwiZXhwb3J0cyIsIl9tb2RlbCIsIl9jb3JlIiwiX2djbGFzc3Jvb20iLCJfZGF5anMiLCJSZWFjdGl2ZU1vZGVsIiwiaXRlbXMiLCJtb2RlbCIsImdJdGVtcyIsImdjbGFzc3Jvb20iLCJlcnJvciIsImNvZGUiLCJjbGFzc2VzIiwidmFsdWVzIiwibWFwIiwiaXRlbSIsImltcG9ydGVkIiwiZ29vZ2xlQ2xhc3Nyb29tc0lkcyIsImhhcyIsImlkIiwiaXRlbXNTZWxlY3RlZCIsIk1hcCIsImNvbnN0cnVjdG9yIiwiQ2xhc3Nyb29tcyIsImdsb2JhbFRoaXMiLCJjIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJpbml0IiwibG9hZCIsImZldGNoaW5nIiwicmVhZHkiLCJlIiwiY29uc29sZSIsImRlbGV0ZSIsImxvYWRDbGFzc2VzIiwiY291cnNlcyIsIiNpbml0IiwiY3VycmVudFRpbWUiLCJkZWZhdWx0IiwibGFzdENsYXNzZXNRdWVyeVRpbWUiLCJzaXplIiwiZGlmZiIsInNhdmVJdGVtVG9JbXBvcnQiLCJnbGNhc3Nyb29tIiwiQ2xhc3Nyb29tIiwiaXNSZWFkeSIsInNldCIsImV4dGVybmFsIiwibmFtZSIsImRlc2NyaXB0aW9uIiwidG9nZ2xlSXRlbSIsInNhdmVJdGVtcyIsImdldFByb3BlcnRpZXMiLCJzdGF0dXMiLCJkYXRhIiwiaW1wb3J0RnJvbUdvb2dsZUNsYXNzcm9vbSIsIkVycm9yIiwiX3JlYWN0IiwiX2l0ZW0iLCJfbGlzdCIsIl91aSIsIl9pY29ucyIsIl9saW5rIiwiX2NvbnRleHQiLCJDbGFzc3Jvb21zTGlzdCIsInRleHRzIiwidXNlTW9kdWxlQ29udGV4dCIsImNyZWF0ZUVsZW1lbnQiLCJQYWdlQ29udGFpbmVyIiwiY2xhc3NOYW1lIiwiUGFnZVRpdGxlIiwidGl0bGUiLCJMaW5rIiwiaHJlZiIsIkljb24iLCJpY29uIiwiYWN0aW9ucyIsImNyZWF0ZSIsIkxpc3QiLCJjb250cm9sIiwiUmVhY3QiLCJNb2R1bGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfY29tcG9uZW50cyIsIkVtcHR5TGlzdCIsIkVtcHR5Q2FyZCIsInRleHQiLCJlbXB0eSIsIl9zZXNzaW9uIiwiX2FsZXJ0IiwiX21vZGFsIiwiX2ltcG9ydCIsIl9ob29rcyIsIkhlYWRlciIsInVzZXJOYW1lIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwiZGlzcGxheU5hbWUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInVzZVN0YXRlIiwic2hvdyIsInNldFNob3ciLCJkaXNhYmxlV2l0aG91dEF1dGgiLCJhdXRob3JpemVkIiwidXNlQmluZGVyIiwiaGFuZGxlTW9kYWwiLCJGcmFnbWVudCIsIkFsZXJ0IiwidHlwZSIsImV4dHJhSW5mbyIsIkJ1dHRvbiIsInZhcmlhbnQiLCJqb2luIiwiTW9kYWwiLCJvbkNsb3NlIiwiSW1wb3J0IiwiRW1wdHlFeHBsb3JlciIsIkljb25CdXR0b24iLCJ0aXRsZUltcG9ydCIsImxhYmVsSW1wb3J0IiwiX2VtcHR5Iiwic2V0RmV0Y2hpbmciLCJzZXRSZWFkeSIsIlNwaW5uZXIiLCJhY3RpdmUiLCJDb250cm9sIiwibGVuZ3RoIiwiaW1wb3J0IiwiUHJvY2Vzc0NvbnRhaW5lciIsIkl0ZW0iLCJjaGVja2VkIiwic2V0Q2hlY2tlZCIsIml0ZW1zU2F2ZWQiLCJzZXRJdGVtc1NhdmVkIiwiYWxyZWFkeUV4aXN0Iiwic29tZSIsIm9iaiIsInVwZGF0ZUltcG9ydHMiLCJpc1NlbGVjdGVkIiwia2V5Iiwib25DbGljayIsIl9pdGVtcyIsIl90b2FzdCIsInNldEl0ZW1zIiwic2F2ZUl0ZW0iLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwidG9hc3QiLCJzdWNjZXNzIiwic3BlY3MiLCJkaXNhYmxlZCIsIl9iZXlvbmRfY29udGV4dCIsIl9ob29rczIiLCJfY2xhc3Nyb29tTGlzdCIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInRvdGFsSXRlbXMiLCJzZXRUb3RhbEl0ZW1zIiwiUHJlbG9hZFNjcmVlbiIsIkxpc3RDb250cm9sIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsIkxlYXJuaW5nSXRlbUFjdGlvbnMiLCJvbkRlbGV0ZSIsIkNvbmZpcm1BY3Rpb24iLCJ0ZXh0UG9wVXAiLCJvbkNvbmZpcm0iLCJfdGl0bGUiLCJfYWN0aW9ucyIsIkNhcmQiLCJDYXJkQ29udGVudCIsIkNhcmRGb290ZXIiLCJNb2R1bGVEYXRhIiwiZ1Rvb2x0aXAiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9jbGFzc3Jvb20tbGlzdC50c3giLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9lbXB0eS50c3giLCIvdHMvdmlld3MvaGVhZGVyLnRzeCIsIi90cy92aWV3cy9pbXBvcnQvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2ltcG9ydC9pbmRleC50c3giLCIvdHMvdmlld3MvaW1wb3J0L2l0ZW1zL2luZGV4LnRzeCIsIi90cy92aWV3cy9pbXBvcnQvbGlzdC50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2l0ZW0vYWN0aW9ucy50c3giLCIvdHMvdmlld3MvaXRlbS9pbmRleC50c3giLCIvdHMvdmlld3MvaXRlbS90aXRsZS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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