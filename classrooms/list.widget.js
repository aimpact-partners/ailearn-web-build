System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@beyond-js/reactive@1.1.12/model", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/ailearn-app@0.0.46.dev-22/model/gclassroom", "dayjs@1.11.10", "@aimpact/ailearn-app@0.0.46.dev-22/main-layout.widget", "@beyond-js/kernel@0.1.9/texts", "react@18.2.0", "pragmate-ui@0.1.1/list", "@aimpact/ailearn-app@0.0.46.dev-22/components/ui", "pragmate-ui@0.1.1/icons", "pragmate-ui@0.1.1/link", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@0.1.1/components", "@aimpact/ailearn-app@0.0.46.dev-22/components/icons", "@aimpact/chat-sdk@1.0.0/session", "pragmate-ui@0.1.1/alert", "pragmate-ui@0.1.1/modal", "pragmate-ui@0.1.1/toast", "@aimpact/chat@1.0.1/shared/components", "@aimpact/chat@1.0.1/shared/hooks"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
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
    }, function (_aimpactAilearnApp0046Dev22ModelGclassroom) {
      dependency_6 = _aimpactAilearnApp0046Dev22ModelGclassroom;
    }, function (_dayjs2) {
      dependency_7 = _dayjs2;
    }, function (_aimpactAilearnApp0046Dev22MainLayoutWidget) {
      dependency_8 = _aimpactAilearnApp0046Dev22MainLayoutWidget;
    }, function (_beyondJsKernel019Texts) {
      dependency_9 = _beyondJsKernel019Texts;
    }, function (_react2) {
      dependency_10 = _react2;
    }, function (_pragmateUi011List) {
      dependency_11 = _pragmateUi011List;
    }, function (_aimpactAilearnApp0046Dev22ComponentsUi) {
      dependency_12 = _aimpactAilearnApp0046Dev22ComponentsUi;
    }, function (_pragmateUi011Icons) {
      dependency_13 = _pragmateUi011Icons;
    }, function (_pragmateUi011Link) {
      dependency_14 = _pragmateUi011Link;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_15 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi011Components) {
      dependency_16 = _pragmateUi011Components;
    }, function (_aimpactAilearnApp0046Dev22ComponentsIcons) {
      dependency_17 = _aimpactAilearnApp0046Dev22ComponentsIcons;
    }, function (_aimpactChatSdk100Session) {
      dependency_18 = _aimpactChatSdk100Session;
    }, function (_pragmateUi011Alert) {
      dependency_19 = _pragmateUi011Alert;
    }, function (_pragmateUi011Modal) {
      dependency_20 = _pragmateUi011Modal;
    }, function (_pragmateUi011Toast) {
      dependency_21 = _pragmateUi011Toast;
    }, function (_aimpactChat101SharedComponents) {
      dependency_22 = _aimpactChat101SharedComponents;
    }, function (_aimpactChat101SharedHooks) {
      dependency_23 = _aimpactChat101SharedHooks;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.0.46.dev-22"], ["@aimpact/ailearn-app", "0.0.46.dev-22"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.46.dev-22/classrooms/list",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@aimpact/ailearn-sdk/core', dependency_5], ['@aimpact/ailearn-app/model/gclassroom', dependency_6], ['dayjs', dependency_7], ['@aimpact/ailearn-app/main-layout.widget', dependency_8], ['@beyond-js/kernel/texts', dependency_9], ['react', dependency_10], ['pragmate-ui/list', dependency_11], ['@aimpact/ailearn-app/components/ui', dependency_12], ['pragmate-ui/icons', dependency_13], ['pragmate-ui/link', dependency_14], ['@beyond-js/react-18-widgets/hooks', dependency_15], ['pragmate-ui/components', dependency_16], ['@aimpact/ailearn-app/components/icons', dependency_17], ['@aimpact/chat-sdk/session', dependency_18], ['pragmate-ui/alert', dependency_19], ['pragmate-ui/modal', dependency_20], ['pragmate-ui/toast', dependency_21], ['@aimpact/chat/shared/components', dependency_22], ['@aimpact/chat/shared/hooks', dependency_23]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-classroom-list",
        "vspecifier": "@aimpact/ailearn-app@0.0.46.dev-22/classrooms/list.widget",
        "is": "page",
        "route": "/classrooms/list",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.46.dev-22/classrooms/list.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 3574521443,
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
            show() {
              this.#store.setBreadcrumb();
              this.#store.load();
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
        hash: 3756927790,
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
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
          var _texts = require("@beyond-js/kernel/texts");
          var _beyond_context = require("beyond_context");
          class StoreManager extends _model.ReactiveModel {
            #items = [];
            get items() {
              return this.#items;
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
            #texts = new _texts.CurrentTexts(_beyond_context.module.specifier);
            get texts() {
              return this.#texts?.value;
            }
            get ready() {
              return super.ready && this.#texts.ready;
            }
            #itemsSelected = new Map();
            get itemsSelected() {
              return this.#itemsSelected;
            }
            constructor() {
              super();
              this.#model = new _core.Classrooms();
              this.model.on('change', this.triggerEvent);
              _gclassroom.gclassroom.on('change', this.triggerEvent);
              this.#init();
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
                _mainLayout.LayoutBroker.breadcrumb = [[this.texts.breadcrumb.classrooms]];
              }, 100);
            }
            async load() {
              try {
                this.setBreadcrumb();
                this.fetching = true;
                await this.model.load();
                super.ready = true;
                this.#items = this.model.items;
              } catch (e) {
                console.error(e);
              } finally {
                this.fetching = false;
              }
            }
            async delete(item) {
              this.#items = this.#items.filter(element => element.id !== item.id);
              await item.delete();
              this.triggerEvent('items.changed');
            }
            loadClasses = async () => {
              return await _gclassroom.gclassroom.courses();
            };
            async #init() {
              const currentTime = (0, _dayjs.default)();
              if (_gclassroom.gclassroom.lastClassesQueryTime && _gclassroom.gclassroom.classes.size) {
                super.ready = true;
                if (currentTime.diff(_gclassroom.gclassroom.lastClassesQueryTime, 'minutes') > 5) {
                  this.loadClasses();
                }
                return;
              }
              this.loadClasses();
              super.ready = true;
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
        hash: 3154700905,
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
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          function ClassroomsList({
            store
          }) {
            const {
              texts
            } = (0, _context.useModuleContext)();
            const [items, setItems] = _react.default.useState(store.items);
            (0, _hooks.useBinder)([store], () => setItems([...store.items]), 'items.changed');
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
              items: items,
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
        hash: 755154019,
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
          var _icons = require("@aimpact/ailearn-app/components/icons");
          function EmptyList() {
            const {
              texts
            } = (0, _context.useModuleContext)();
            return React.createElement(_ui.PageContainer, null, React.createElement(_ui.PageTitle, {
              title: texts.title
            }, React.createElement("div", {
              className: "page-title__actions"
            }, React.createElement(_components.Link, {
              className: "add-item",
              href: `/classrooms/join`
            }, React.createElement(_icons.AppIcon, {
              icon: "entities/classroom"
            }), texts.actions.join), React.createElement(_components.Link, {
              href: "/classrooms/create"
            }, React.createElement(_icons.AppIcon, {
              icon: "add-circle"
            }), texts.actions.create))), React.createElement(_ui.EmptyCard, {
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
        hash: 156270815,
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
              className: "page-title__actions"
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
        hash: 120950818,
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
            const ListControl = store.items.length < 1 ? _empty.EmptyList : _classroomList.ClassroomsList;
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
        hash: 3773496731,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = ModuleData;
          var React = require("react");
          var _components = require("pragmate-ui/components");
          var _icons = require("pragmate-ui/icons");
          var _context = require("../context");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          function ModuleData({
            item
          }) {
            const {
              texts
            } = (0, _context.useModuleContext)();
            return React.createElement("section", null, React.createElement("div", {
              className: "title-card__container flex-container flex-space-between"
            }, React.createElement(_components.Link, {
              href: `/classrooms/view/${item.id}`
            }, React.createElement("h4", null, item.name)), item?.external?.id && React.createElement(_icons.IconButton, {
              title: texts.actions.gTooltip,
              icon: "google"
            })), React.createElement(_ui.UserData, {
              data: item.owner
            }), React.createElement("span", null, item.description));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJzaG93Iiwic2V0QnJlYWRjcnVtYiIsImxvYWQiLCJXaWRnZXQiLCJWaWV3IiwiZXhwb3J0cyIsIl9tb2RlbCIsIl9jb3JlIiwiX2djbGFzc3Jvb20iLCJfZGF5anMiLCJfbWFpbkxheW91dCIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsIlJlYWN0aXZlTW9kZWwiLCJpdGVtcyIsIm1vZGVsIiwiZ0l0ZW1zIiwiZ2NsYXNzcm9vbSIsImVycm9yIiwiY29kZSIsImNsYXNzZXMiLCJ2YWx1ZXMiLCJtYXAiLCJpdGVtIiwiaW1wb3J0ZWQiLCJnb29nbGVDbGFzc3Jvb21zSWRzIiwiaGFzIiwiaWQiLCJ0ZXh0cyIsIkN1cnJlbnRUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInZhbHVlIiwicmVhZHkiLCJpdGVtc1NlbGVjdGVkIiwiTWFwIiwiY29uc3RydWN0b3IiLCJDbGFzc3Jvb21zIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJpbml0Iiwib25DaGFuZ2UiLCJiaW5kIiwib2ZmIiwiTGF5b3V0QnJva2VyIiwib3ZlcmxheSIsImdsb2JhbFRoaXMiLCJzZXRUaW1lb3V0IiwiYnJlYWRjcnVtYiIsImNsYXNzcm9vbXMiLCJmZXRjaGluZyIsImUiLCJjb25zb2xlIiwiZGVsZXRlIiwiZmlsdGVyIiwiZWxlbWVudCIsImxvYWRDbGFzc2VzIiwiY291cnNlcyIsIiNpbml0IiwiY3VycmVudFRpbWUiLCJkZWZhdWx0IiwibGFzdENsYXNzZXNRdWVyeVRpbWUiLCJzaXplIiwiZGlmZiIsInNhdmVJdGVtVG9JbXBvcnQiLCJnbGNhc3Nyb29tIiwiQ2xhc3Nyb29tIiwiaXNSZWFkeSIsInNldCIsImV4dGVybmFsIiwibmFtZSIsImRlc2NyaXB0aW9uIiwidG9nZ2xlSXRlbSIsInNhdmVJdGVtcyIsImdldFByb3BlcnRpZXMiLCJzdGF0dXMiLCJkYXRhIiwiaW1wb3J0RnJvbUdvb2dsZUNsYXNzcm9vbSIsIkVycm9yIiwiX3JlYWN0IiwiX2l0ZW0iLCJfbGlzdCIsIl91aSIsIl9pY29ucyIsIl9saW5rIiwiX2NvbnRleHQiLCJfaG9va3MiLCJDbGFzc3Jvb21zTGlzdCIsInVzZU1vZHVsZUNvbnRleHQiLCJzZXRJdGVtcyIsInVzZVN0YXRlIiwidXNlQmluZGVyIiwiY3JlYXRlRWxlbWVudCIsIlBhZ2VDb250YWluZXIiLCJjbGFzc05hbWUiLCJQYWdlVGl0bGUiLCJ0aXRsZSIsIkxpbmsiLCJocmVmIiwiSWNvbiIsImljb24iLCJhY3Rpb25zIiwiY3JlYXRlIiwiTGlzdCIsImNvbnRyb2wiLCJSZWFjdCIsIk1vZHVsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9jb21wb25lbnRzIiwiRW1wdHlMaXN0IiwiQXBwSWNvbiIsImpvaW4iLCJFbXB0eUNhcmQiLCJ0ZXh0IiwiZW1wdHkiLCJfc2Vzc2lvbiIsIl9hbGVydCIsIl9tb2RhbCIsIl9pbXBvcnQiLCJIZWFkZXIiLCJ1c2VyTmFtZSIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsImRpc3BsYXlOYW1lIiwibG9hZGluZyIsInNldExvYWRpbmciLCJzZXRTaG93IiwiZGlzYWJsZVdpdGhvdXRBdXRoIiwiYXV0aG9yaXplZCIsImhhbmRsZU1vZGFsIiwiRnJhZ21lbnQiLCJBbGVydCIsInR5cGUiLCJleHRyYUluZm8iLCJCdXR0b24iLCJ2YXJpYW50IiwiTW9kYWwiLCJvbkNsb3NlIiwiSW1wb3J0IiwiRW1wdHlFeHBsb3JlciIsIkljb25CdXR0b24iLCJ0aXRsZUltcG9ydCIsImxhYmVsSW1wb3J0IiwiX2VtcHR5Iiwic2V0RmV0Y2hpbmciLCJzZXRSZWFkeSIsIlNwaW5uZXIiLCJhY3RpdmUiLCJDb250cm9sIiwibGVuZ3RoIiwiaW1wb3J0IiwiUHJvY2Vzc0NvbnRhaW5lciIsIkl0ZW0iLCJjaGVja2VkIiwic2V0Q2hlY2tlZCIsIml0ZW1zU2F2ZWQiLCJzZXRJdGVtc1NhdmVkIiwiYWxyZWFkeUV4aXN0Iiwic29tZSIsIm9iaiIsInVwZGF0ZUltcG9ydHMiLCJpc1NlbGVjdGVkIiwia2V5Iiwib25DbGljayIsIl9pdGVtcyIsIl90b2FzdCIsInNhdmVJdGVtIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsInRvYXN0Iiwic3VjY2VzcyIsInNwZWNzIiwiZGlzYWJsZWQiLCJfaG9va3MyIiwiX2NsYXNzcm9vbUxpc3QiLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJ0b3RhbEl0ZW1zIiwic2V0VG90YWxJdGVtcyIsIlByZWxvYWRTY3JlZW4iLCJMaXN0Q29udHJvbCIsIlByb3ZpZGVyIiwiTGVhcm5pbmdJdGVtQWN0aW9ucyIsIm9uRGVsZXRlIiwiQ29uZmlybUFjdGlvbiIsInRleHRQb3BVcCIsIm9uQ29uZmlybSIsIl90aXRsZSIsIl9hY3Rpb25zIiwiQ2FyZCIsIkNhcmRDb250ZW50IiwiQ2FyZEZvb3RlciIsIk1vZHVsZURhdGEiLCJnVG9vbHRpcCIsIlVzZXJEYXRhIiwib3duZXIiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9jbGFzc3Jvb20tbGlzdC50c3giLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9lbXB0eS50c3giLCIvdHMvdmlld3MvaGVhZGVyLnRzeCIsIi90cy92aWV3cy9pbXBvcnQvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2ltcG9ydC9pbmRleC50c3giLCIvdHMvdmlld3MvaW1wb3J0L2l0ZW1zL2luZGV4LnRzeCIsIi90cy92aWV3cy9pbXBvcnQvbGlzdC50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2l0ZW0vYWN0aW9ucy50c3giLCIvdHMvdmlld3MvaXRlbS9pbmRleC50c3giLCIvdHMvdmlld3MvaXRlbS90aXRsZS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUgsTUFBQSxDQUFBSyxZQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNuQjtZQUVBRyxJQUFJQSxDQUFBO2NBQ0gsSUFBSSxDQUFDLENBQUFILEtBQU0sQ0FBQ0ksYUFBYSxFQUFFO2NBQzNCLElBQUksQ0FBQyxDQUFBSixLQUFNLENBQUNLLElBQUksRUFBRTtZQUNuQjtZQUVBLElBQUlDLE1BQU1BLENBQUE7Y0FDVCxPQUFPVixNQUFBLENBQUFXLElBQUk7WUFDWjs7VUFDQUMsT0FBQSxDQUFBVixVQUFBLEdBQUFBLFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDcEJELElBQUFXLE1BQUEsR0FBQWQsT0FBQTtVQUNBLElBQUFlLEtBQUEsR0FBQWYsT0FBQTtVQUNBLElBQUFnQixXQUFBLEdBQUFoQixPQUFBO1VBQ0EsSUFBQWlCLE1BQUEsR0FBQWpCLE9BQUE7VUFDQSxJQUFBa0IsV0FBQSxHQUFBbEIsT0FBQTtVQUNBLElBQUFtQixNQUFBLEdBQUFuQixPQUFBO1VBQ0EsSUFBQW9CLGVBQUEsR0FBQXBCLE9BQUE7VUFFTSxNQUFPTyxZQUFhLFNBQVFPLE1BQUEsQ0FBQU8sYUFB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