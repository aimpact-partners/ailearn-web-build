System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@beyond-js/reactive@1.1.12/model", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/ailearn-app@0.0.46.dev-16/model/gclassroom", "dayjs@1.11.10", "@aimpact/ailearn-app@0.0.46.dev-16/main-layout.widget", "@beyond-js/kernel@0.1.9/texts", "react@18.2.0", "pragmate-ui@0.1.1/list", "@aimpact/ailearn-app@0.0.46.dev-16/components/ui", "pragmate-ui@0.1.1/icons", "pragmate-ui@0.1.1/link", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@0.1.1/components", "@aimpact/ailearn-app@0.0.46.dev-16/components/icons", "@aimpact/chat-sdk@1.0.0/session", "pragmate-ui@0.1.1/alert", "pragmate-ui@0.1.1/modal", "pragmate-ui@0.1.1/toast", "@aimpact/chat@1.0.1/shared/components", "@aimpact/chat@1.0.1/shared/hooks"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp0046Dev16ModelGclassroom) {
      dependency_6 = _aimpactAilearnApp0046Dev16ModelGclassroom;
    }, function (_dayjs2) {
      dependency_7 = _dayjs2;
    }, function (_aimpactAilearnApp0046Dev16MainLayoutWidget) {
      dependency_8 = _aimpactAilearnApp0046Dev16MainLayoutWidget;
    }, function (_beyondJsKernel019Texts) {
      dependency_9 = _beyondJsKernel019Texts;
    }, function (_react2) {
      dependency_10 = _react2;
    }, function (_pragmateUi011List) {
      dependency_11 = _pragmateUi011List;
    }, function (_aimpactAilearnApp0046Dev16ComponentsUi) {
      dependency_12 = _aimpactAilearnApp0046Dev16ComponentsUi;
    }, function (_pragmateUi011Icons) {
      dependency_13 = _pragmateUi011Icons;
    }, function (_pragmateUi011Link) {
      dependency_14 = _pragmateUi011Link;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_15 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi011Components) {
      dependency_16 = _pragmateUi011Components;
    }, function (_aimpactAilearnApp0046Dev16ComponentsIcons) {
      dependency_17 = _aimpactAilearnApp0046Dev16ComponentsIcons;
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
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.0.46.dev-16"], ["@aimpact/ailearn-app", "0.0.46.dev-16"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.46.dev-16/classrooms/list",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@aimpact/ailearn-sdk/core', dependency_5], ['@aimpact/ailearn-app/model/gclassroom', dependency_6], ['dayjs', dependency_7], ['@aimpact/ailearn-app/main-layout.widget', dependency_8], ['@beyond-js/kernel/texts', dependency_9], ['react', dependency_10], ['pragmate-ui/list', dependency_11], ['@aimpact/ailearn-app/components/ui', dependency_12], ['pragmate-ui/icons', dependency_13], ['pragmate-ui/link', dependency_14], ['@beyond-js/react-18-widgets/hooks', dependency_15], ['pragmate-ui/components', dependency_16], ['@aimpact/ailearn-app/components/icons', dependency_17], ['@aimpact/chat-sdk/session', dependency_18], ['pragmate-ui/alert', dependency_19], ['pragmate-ui/modal', dependency_20], ['pragmate-ui/toast', dependency_21], ['@aimpact/chat/shared/components', dependency_22], ['@aimpact/chat/shared/hooks', dependency_23]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-classroom-list",
        "vspecifier": "@aimpact/ailearn-app@0.0.46.dev-16/classrooms/list.widget",
        "is": "page",
        "route": "/classrooms/list",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.46.dev-16/classrooms/list.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 2025819015,
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
        hash: 1248217842,
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
              globalThis.c = this.#model;
              this.model.on('change', () => {
                this.triggerEvent();
              });
              _gclassroom.gclassroom.on('change', this.triggerEvent);
              this.#init();
              this.load();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJzaG93Iiwic2V0QnJlYWRjcnVtYiIsIldpZGdldCIsIlZpZXciLCJleHBvcnRzIiwiX21vZGVsIiwiX2NvcmUiLCJfZ2NsYXNzcm9vbSIsIl9kYXlqcyIsIl9tYWluTGF5b3V0IiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiUmVhY3RpdmVNb2RlbCIsIml0ZW1zIiwibW9kZWwiLCJnSXRlbXMiLCJnY2xhc3Nyb29tIiwiZXJyb3IiLCJjb2RlIiwiY2xhc3NlcyIsInZhbHVlcyIsIm1hcCIsIml0ZW0iLCJpbXBvcnRlZCIsImdvb2dsZUNsYXNzcm9vbXNJZHMiLCJoYXMiLCJpZCIsInRleHRzIiwiQ3VycmVudFRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidmFsdWUiLCJyZWFkeSIsIml0ZW1zU2VsZWN0ZWQiLCJNYXAiLCJjb25zdHJ1Y3RvciIsIkNsYXNzcm9vbXMiLCJnbG9iYWxUaGlzIiwiYyIsIm9uIiwidHJpZ2dlckV2ZW50IiwiaW5pdCIsImxvYWQiLCJvbkNoYW5nZSIsImJpbmQiLCJvZmYiLCJMYXlvdXRCcm9rZXIiLCJvdmVybGF5Iiwic2V0VGltZW91dCIsImJyZWFkY3J1bWIiLCJjbGFzc3Jvb21zIiwiZmV0Y2hpbmciLCJlIiwiY29uc29sZSIsImRlbGV0ZSIsImZpbHRlciIsImVsZW1lbnQiLCJsb2FkQ2xhc3NlcyIsImNvdXJzZXMiLCIjaW5pdCIsImN1cnJlbnRUaW1lIiwiZGVmYXVsdCIsImxhc3RDbGFzc2VzUXVlcnlUaW1lIiwic2l6ZSIsImRpZmYiLCJzYXZlSXRlbVRvSW1wb3J0IiwiZ2xjYXNzcm9vbSIsIkNsYXNzcm9vbSIsImlzUmVhZHkiLCJzZXQiLCJleHRlcm5hbCIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsInRvZ2dsZUl0ZW0iLCJzYXZlSXRlbXMiLCJnZXRQcm9wZXJ0aWVzIiwic3RhdHVzIiwiZGF0YSIsImltcG9ydEZyb21Hb29nbGVDbGFzc3Jvb20iLCJFcnJvciIsIl9yZWFjdCIsIl9pdGVtIiwiX2xpc3QiLCJfdWkiLCJfaWNvbnMiLCJfbGluayIsIl9jb250ZXh0IiwiX2hvb2tzIiwiQ2xhc3Nyb29tc0xpc3QiLCJ1c2VNb2R1bGVDb250ZXh0Iiwic2V0SXRlbXMiLCJ1c2VTdGF0ZSIsInVzZUJpbmRlciIsImNyZWF0ZUVsZW1lbnQiLCJQYWdlQ29udGFpbmVyIiwiY2xhc3NOYW1lIiwiUGFnZVRpdGxlIiwidGl0bGUiLCJMaW5rIiwiaHJlZiIsIkljb24iLCJpY29uIiwiYWN0aW9ucyIsImNyZWF0ZSIsIkxpc3QiLCJjb250cm9sIiwiUmVhY3QiLCJNb2R1bGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfY29tcG9uZW50cyIsIkVtcHR5TGlzdCIsIkFwcEljb24iLCJqb2luIiwiRW1wdHlDYXJkIiwidGV4dCIsImVtcHR5IiwiX3Nlc3Npb24iLCJfYWxlcnQiLCJfbW9kYWwiLCJfaW1wb3J0IiwiSGVhZGVyIiwidXNlck5hbWUiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJkaXNwbGF5TmFtZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwic2V0U2hvdyIsImRpc2FibGVXaXRob3V0QXV0aCIsImF1dGhvcml6ZWQiLCJoYW5kbGVNb2RhbCIsIkZyYWdtZW50IiwiQWxlcnQiLCJ0eXBlIiwiZXh0cmFJbmZvIiwiQnV0dG9uIiwidmFyaWFudCIsIk1vZGFsIiwib25DbG9zZSIsIkltcG9ydCIsIkVtcHR5RXhwbG9yZXIiLCJJY29uQnV0dG9uIiwidGl0bGVJbXBvcnQiLCJsYWJlbEltcG9ydCIsIl9lbXB0eSIsInNldEZldGNoaW5nIiwic2V0UmVhZHkiLCJTcGlubmVyIiwiYWN0aXZlIiwiQ29udHJvbCIsImxlbmd0aCIsImltcG9ydCIsIlByb2Nlc3NDb250YWluZXIiLCJJdGVtIiwiY2hlY2tlZCIsInNldENoZWNrZWQiLCJpdGVtc1NhdmVkIiwic2V0SXRlbXNTYXZlZCIsImFscmVhZHlFeGlzdCIsInNvbWUiLCJvYmoiLCJ1cGRhdGVJbXBvcnRzIiwiaXNTZWxlY3RlZCIsImtleSIsIm9uQ2xpY2siLCJfaXRlbXMiLCJfdG9hc3QiLCJzYXZlSXRlbSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJ0b2FzdCIsInN1Y2Nlc3MiLCJzcGVjcyIsImRpc2FibGVkIiwiX2hvb2tzMiIsIl9jbGFzc3Jvb21MaXN0IiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwidG90YWxJdGVtcyIsInNldFRvdGFsSXRlbXMiLCJQcmVsb2FkU2NyZWVuIiwiTGlzdENvbnRyb2wiLCJQcm92aWRlciIsIkxlYXJuaW5nSXRlbUFjdGlvbnMiLCJvbkRlbGV0ZSIsIkNvbmZpcm1BY3Rpb24iLCJ0ZXh0UG9wVXAiLCJvbkNvbmZpcm0iLCJfdGl0bGUiLCJfYWN0aW9ucyIsIkNhcmQiLCJDYXJkQ29udGVudCIsIkNhcmRGb290ZXIiLCJNb2R1bGVEYXRhIiwiZ1Rvb2x0aXAiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9jbGFzc3Jvb20tbGlzdC50c3giLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9lbXB0eS50c3giLCIvdHMvdmlld3MvaGVhZGVyLnRzeCIsIi90cy92aWV3cy9pbXBvcnQvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2ltcG9ydC9pbmRleC50c3giLCIvdHMvdmlld3MvaW1wb3J0L2l0ZW1zL2luZGV4LnRzeCIsIi90cy92aWV3cy9pbXBvcnQvbGlzdC50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2l0ZW0vYWN0aW9ucy50c3giLCIvdHMvdmlld3MvaXRlbS9pbmRleC50c3giLCIvdHMvdmlld3MvaXRlbS90aXRsZS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUgsTUFBQSxDQUFBSyxZQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNuQjtZQUVBRyxJQUFJQSxDQUFBO2NBQ0gsSUFBSSxDQUFDLENBQUFILEtBQU0sQ0FBQ0ksYUFBYSxFQUFFO1lBQzVCO1lBRUEsSUFBSUMsTUFBTUEsQ0FBQTtjQUNULE9BQU9ULE1BQUEsQ0FBQVUsSUFBSTtZQUNaOztVQUNBQyxPQUFBLENBQUFULFVBQUEsR0FBQUEsVUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNuQkQsSUFBQVUsTUFBQSxHQUFBYixPQUFBO1VBQ0EsSUFBQWMsS0FBQSxHQUFBZCxPQUFBO1VBQ0EsSUFBQWUsV0FBQSxHQUFBZixPQUFBO1VBQ0EsSUFBQWdCLE1BQUEsR0FBQWhCLE9BQUE7VUFDQSxJQUFBaUIsV0FBQSxHQUFBakIsT0FBQTtVQUNBLElBQUFrQixNQUFBLEdBQUFsQixPQUFBO1VBQ0EsSUFBQW1CLGVBQUEsR0FBQW5CLE9BQUE7VUFFTSxNQUFPTyxZQUFhLFNBQVFNLE1BQUEsQ0FBQU8sYUFBMkI7WUFDNUQsQ0FBQUMsS0FBTSxHQUFHLEVBQUU7WUFDWCxJQUFJQSxLQUFLQSxDQUFBO2NBQ1IsT0FB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