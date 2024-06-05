System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@beyond-js/reactive@1.1.12/model", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/ailearn-app@0.0.46.dev-06/model/gclassroom", "dayjs@1.11.10", "@aimpact/ailearn-app@0.0.46.dev-06/main-layout.widget", "@beyond-js/kernel@0.1.9/texts", "react@18.2.0", "pragmate-ui@0.1.1/list", "@aimpact/ailearn-app@0.0.46.dev-06/components/ui", "pragmate-ui@0.1.1/icons", "pragmate-ui@0.1.1/link", "pragmate-ui@0.1.1/components", "@aimpact/ailearn-app@0.0.46.dev-06/components/icons", "@aimpact/chat-sdk@1.0.0/session", "pragmate-ui@0.1.1/alert", "pragmate-ui@0.1.1/modal", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@0.1.1/toast", "@aimpact/chat@1.0.1/shared/components", "@aimpact/chat@1.0.1/shared/hooks"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp0046Dev06ModelGclassroom) {
      dependency_6 = _aimpactAilearnApp0046Dev06ModelGclassroom;
    }, function (_dayjs2) {
      dependency_7 = _dayjs2;
    }, function (_aimpactAilearnApp0046Dev06MainLayoutWidget) {
      dependency_8 = _aimpactAilearnApp0046Dev06MainLayoutWidget;
    }, function (_beyondJsKernel019Texts) {
      dependency_9 = _beyondJsKernel019Texts;
    }, function (_react2) {
      dependency_10 = _react2;
    }, function (_pragmateUi011List) {
      dependency_11 = _pragmateUi011List;
    }, function (_aimpactAilearnApp0046Dev06ComponentsUi) {
      dependency_12 = _aimpactAilearnApp0046Dev06ComponentsUi;
    }, function (_pragmateUi011Icons) {
      dependency_13 = _pragmateUi011Icons;
    }, function (_pragmateUi011Link) {
      dependency_14 = _pragmateUi011Link;
    }, function (_pragmateUi011Components) {
      dependency_15 = _pragmateUi011Components;
    }, function (_aimpactAilearnApp0046Dev06ComponentsIcons) {
      dependency_16 = _aimpactAilearnApp0046Dev06ComponentsIcons;
    }, function (_aimpactChatSdk100Session) {
      dependency_17 = _aimpactChatSdk100Session;
    }, function (_pragmateUi011Alert) {
      dependency_18 = _pragmateUi011Alert;
    }, function (_pragmateUi011Modal) {
      dependency_19 = _pragmateUi011Modal;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_20 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi011Toast) {
      dependency_21 = _pragmateUi011Toast;
    }, function (_aimpactChat101SharedComponents) {
      dependency_22 = _aimpactChat101SharedComponents;
    }, function (_aimpactChat101SharedHooks) {
      dependency_23 = _aimpactChat101SharedHooks;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.0.46.dev-06"], ["@aimpact/ailearn-app", "0.0.46.dev-06"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.46.dev-06/classrooms/list",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@aimpact/ailearn-sdk/core', dependency_5], ['@aimpact/ailearn-app/model/gclassroom', dependency_6], ['dayjs', dependency_7], ['@aimpact/ailearn-app/main-layout.widget', dependency_8], ['@beyond-js/kernel/texts', dependency_9], ['react', dependency_10], ['pragmate-ui/list', dependency_11], ['@aimpact/ailearn-app/components/ui', dependency_12], ['pragmate-ui/icons', dependency_13], ['pragmate-ui/link', dependency_14], ['pragmate-ui/components', dependency_15], ['@aimpact/ailearn-app/components/icons', dependency_16], ['@aimpact/chat-sdk/session', dependency_17], ['pragmate-ui/alert', dependency_18], ['pragmate-ui/modal', dependency_19], ['@beyond-js/react-18-widgets/hooks', dependency_20], ['pragmate-ui/toast', dependency_21], ['@aimpact/chat/shared/components', dependency_22], ['@aimpact/chat/shared/hooks', dependency_23]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-classroom-list",
        "vspecifier": "@aimpact/ailearn-app@0.0.46.dev-06/classrooms/list.widget",
        "is": "page",
        "route": "/classrooms/list",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.46.dev-06/classrooms/list.widget');
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
        hash: 4005765098,
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
              this.model.on('change', this.triggerEvent);
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
        hash: 2117446524,
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
              href: "/modules/management"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJzaG93Iiwic2V0QnJlYWRjcnVtYiIsIldpZGdldCIsIlZpZXciLCJleHBvcnRzIiwiX21vZGVsIiwiX2NvcmUiLCJfZ2NsYXNzcm9vbSIsIl9kYXlqcyIsIl9tYWluTGF5b3V0IiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiUmVhY3RpdmVNb2RlbCIsIml0ZW1zIiwibW9kZWwiLCJnSXRlbXMiLCJnY2xhc3Nyb29tIiwiZXJyb3IiLCJjb2RlIiwiY2xhc3NlcyIsInZhbHVlcyIsIm1hcCIsIml0ZW0iLCJpbXBvcnRlZCIsImdvb2dsZUNsYXNzcm9vbXNJZHMiLCJoYXMiLCJpZCIsInRleHRzIiwiQ3VycmVudFRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidmFsdWUiLCJyZWFkeSIsIml0ZW1zU2VsZWN0ZWQiLCJNYXAiLCJjb25zdHJ1Y3RvciIsIkNsYXNzcm9vbXMiLCJnbG9iYWxUaGlzIiwiYyIsIm9uIiwidHJpZ2dlckV2ZW50IiwiaW5pdCIsImxvYWQiLCJvbkNoYW5nZSIsImJpbmQiLCJvZmYiLCJMYXlvdXRCcm9rZXIiLCJvdmVybGF5Iiwic2V0VGltZW91dCIsImJyZWFkY3J1bWIiLCJjbGFzc3Jvb21zIiwiZmV0Y2hpbmciLCJlIiwiY29uc29sZSIsImRlbGV0ZSIsImxvYWRDbGFzc2VzIiwiY291cnNlcyIsIiNpbml0IiwiY3VycmVudFRpbWUiLCJkZWZhdWx0IiwibGFzdENsYXNzZXNRdWVyeVRpbWUiLCJzaXplIiwiZGlmZiIsInNhdmVJdGVtVG9JbXBvcnQiLCJnbGNhc3Nyb29tIiwiQ2xhc3Nyb29tIiwiaXNSZWFkeSIsInNldCIsImV4dGVybmFsIiwibmFtZSIsImRlc2NyaXB0aW9uIiwidG9nZ2xlSXRlbSIsInNhdmVJdGVtcyIsImdldFByb3BlcnRpZXMiLCJzdGF0dXMiLCJkYXRhIiwiaW1wb3J0RnJvbUdvb2dsZUNsYXNzcm9vbSIsIkVycm9yIiwiX3JlYWN0IiwiX2l0ZW0iLCJfbGlzdCIsIl91aSIsIl9pY29ucyIsIl9saW5rIiwiX2NvbnRleHQiLCJDbGFzc3Jvb21zTGlzdCIsInVzZU1vZHVsZUNvbnRleHQiLCJjcmVhdGVFbGVtZW50IiwiUGFnZUNvbnRhaW5lciIsImNsYXNzTmFtZSIsIlBhZ2VUaXRsZSIsInRpdGxlIiwiTGluayIsImhyZWYiLCJJY29uIiwiaWNvbiIsImFjdGlvbnMiLCJjcmVhdGUiLCJMaXN0IiwiY29udHJvbCIsIlJlYWN0IiwiTW9kdWxlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2NvbXBvbmVudHMiLCJFbXB0eUxpc3QiLCJBcHBJY29uIiwiam9pbiIsIkVtcHR5Q2FyZCIsInRleHQiLCJlbXB0eSIsIl9zZXNzaW9uIiwiX2FsZXJ0IiwiX21vZGFsIiwiX2ltcG9ydCIsIl9ob29rcyIsIkhlYWRlciIsInVzZXJOYW1lIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwiZGlzcGxheU5hbWUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInVzZVN0YXRlIiwic2V0U2hvdyIsImRpc2FibGVXaXRob3V0QXV0aCIsImF1dGhvcml6ZWQiLCJ1c2VCaW5kZXIiLCJoYW5kbGVNb2RhbCIsIkZyYWdtZW50IiwiQWxlcnQiLCJ0eXBlIiwiZXh0cmFJbmZvIiwiQnV0dG9uIiwidmFyaWFudCIsIk1vZGFsIiwib25DbG9zZSIsIkltcG9ydCIsIkVtcHR5RXhwbG9yZXIiLCJJY29uQnV0dG9uIiwidGl0bGVJbXBvcnQiLCJsYWJlbEltcG9ydCIsIl9lbXB0eSIsInNldEZldGNoaW5nIiwic2V0UmVhZHkiLCJTcGlubmVyIiwiYWN0aXZlIiwiQ29udHJvbCIsImxlbmd0aCIsImltcG9ydCIsIlByb2Nlc3NDb250YWluZXIiLCJJdGVtIiwiY2hlY2tlZCIsInNldENoZWNrZWQiLCJpdGVtc1NhdmVkIiwic2V0SXRlbXNTYXZlZCIsImFscmVhZHlFeGlzdCIsInNvbWUiLCJvYmoiLCJ1cGRhdGVJbXBvcnRzIiwiaXNTZWxlY3RlZCIsImtleSIsIm9uQ2xpY2siLCJfaXRlbXMiLCJfdG9hc3QiLCJzZXRJdGVtcyIsInNhdmVJdGVtIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsInRvYXN0Iiwic3VjY2VzcyIsInNwZWNzIiwiZGlzYWJsZWQiLCJfaG9va3MyIiwiX2NsYXNzcm9vbUxpc3QiLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJ0b3RhbEl0ZW1zIiwic2V0VG90YWxJdGVtcyIsIlByZWxvYWRTY3JlZW4iLCJMaXN0Q29udHJvbCIsIlByb3ZpZGVyIiwiTGVhcm5pbmdJdGVtQWN0aW9ucyIsIm9uRGVsZXRlIiwiQ29uZmlybUFjdGlvbiIsInRleHRQb3BVcCIsIm9uQ29uZmlybSIsIl90aXRsZSIsIl9hY3Rpb25zIiwiQ2FyZCIsIkNhcmRDb250ZW50IiwiQ2FyZEZvb3RlciIsIk1vZHVsZURhdGEiLCJnVG9vbHRpcCJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NsYXNzcm9vbS1saXN0LnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2VtcHR5LnRzeCIsIi90cy92aWV3cy9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2ltcG9ydC9lbXB0eS50c3giLCIvdHMvdmlld3MvaW1wb3J0L2luZGV4LnRzeCIsIi90cy92aWV3cy9pbXBvcnQvaXRlbXMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2ltcG9ydC9saXN0LnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvaXRlbS9hY3Rpb25zLnRzeCIsIi90cy92aWV3cy9pdGVtL2luZGV4LnRzeCIsIi90cy92aWV3cy9pdGVtL3RpdGxlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51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