System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@beyond-js/reactive@1.1.12/model", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/ailearn-app@0.0.50/model/gclassroom", "dayjs@1.11.10", "@aimpact/ailearn-app@0.0.50/main-layout.widget", "@beyond-js/kernel@0.1.9/texts", "react@18.2.0", "pragmate-ui@0.1.1/list", "@aimpact/ailearn-app@0.0.50/components/ui", "pragmate-ui@0.1.1/icons", "pragmate-ui@0.1.1/link", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@0.1.1/components", "@aimpact/ailearn-app@0.0.50/components/icons", "@aimpact/chat-sdk@1.0.1/session", "pragmate-ui@0.1.1/alert", "pragmate-ui@0.1.1/modal", "pragmate-ui@0.1.1/toast", "@aimpact/chat@1.0.2/shared/components", "@aimpact/chat@1.0.2/shared/hooks"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp0050ModelGclassroom) {
      dependency_6 = _aimpactAilearnApp0050ModelGclassroom;
    }, function (_dayjs2) {
      dependency_7 = _dayjs2;
    }, function (_aimpactAilearnApp0050MainLayoutWidget) {
      dependency_8 = _aimpactAilearnApp0050MainLayoutWidget;
    }, function (_beyondJsKernel019Texts) {
      dependency_9 = _beyondJsKernel019Texts;
    }, function (_react2) {
      dependency_10 = _react2;
    }, function (_pragmateUi011List) {
      dependency_11 = _pragmateUi011List;
    }, function (_aimpactAilearnApp0050ComponentsUi) {
      dependency_12 = _aimpactAilearnApp0050ComponentsUi;
    }, function (_pragmateUi011Icons) {
      dependency_13 = _pragmateUi011Icons;
    }, function (_pragmateUi011Link) {
      dependency_14 = _pragmateUi011Link;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_15 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi011Components) {
      dependency_16 = _pragmateUi011Components;
    }, function (_aimpactAilearnApp0050ComponentsIcons) {
      dependency_17 = _aimpactAilearnApp0050ComponentsIcons;
    }, function (_aimpactChatSdk101Session) {
      dependency_18 = _aimpactChatSdk101Session;
    }, function (_pragmateUi011Alert) {
      dependency_19 = _pragmateUi011Alert;
    }, function (_pragmateUi011Modal) {
      dependency_20 = _pragmateUi011Modal;
    }, function (_pragmateUi011Toast) {
      dependency_21 = _pragmateUi011Toast;
    }, function (_aimpactChat102SharedComponents) {
      dependency_22 = _aimpactChat102SharedComponents;
    }, function (_aimpactChat102SharedHooks) {
      dependency_23 = _aimpactChat102SharedHooks;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.2"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.0.50"], ["@aimpact/ailearn-app", "0.0.50"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.50/classrooms/list",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@aimpact/ailearn-sdk/core', dependency_5], ['@aimpact/ailearn-app/model/gclassroom', dependency_6], ['dayjs', dependency_7], ['@aimpact/ailearn-app/main-layout.widget', dependency_8], ['@beyond-js/kernel/texts', dependency_9], ['react', dependency_10], ['pragmate-ui/list', dependency_11], ['@aimpact/ailearn-app/components/ui', dependency_12], ['pragmate-ui/icons', dependency_13], ['pragmate-ui/link', dependency_14], ['@beyond-js/react-18-widgets/hooks', dependency_15], ['pragmate-ui/components', dependency_16], ['@aimpact/ailearn-app/components/icons', dependency_17], ['@aimpact/chat-sdk/session', dependency_18], ['pragmate-ui/alert', dependency_19], ['pragmate-ui/modal', dependency_20], ['pragmate-ui/toast', dependency_21], ['@aimpact/chat/shared/components', dependency_22], ['@aimpact/chat/shared/hooks', dependency_23]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-classroom-list",
        "vspecifier": "@aimpact/ailearn-app@0.0.50/classrooms/list.widget",
        "is": "page",
        "route": "/classrooms/list",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.50/classrooms/list.widget');
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
        hash: 275598895,
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
        hash: 116408581,
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
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _classroomList = require("./classroom-list");
          /*bundle*/
          function View({
            store
          }) {
            const [ready, setReady] = (0, _react.useState)(store.ready);
            const [fetching, setFetching] = (0, _react.useState)(store.fetching);
            const [totalItems, setTotalItems] = (0, _react.useState)(store.items.length);
            (0, _hooks.useBinder)([store], () => {
              setReady(store.ready);
              setFetching(store.fetching);
              setTotalItems(store.items.length);
            });
            const {
              texts
            } = store;
            if (!ready) return _react.default.createElement(_components.PreloadScreen, null);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJzaG93Iiwic2V0QnJlYWRjcnVtYiIsImxvYWQiLCJXaWRnZXQiLCJWaWV3IiwiZXhwb3J0cyIsIl9tb2RlbCIsIl9jb3JlIiwiX2djbGFzc3Jvb20iLCJfZGF5anMiLCJfbWFpbkxheW91dCIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsIlJlYWN0aXZlTW9kZWwiLCJpdGVtcyIsIm1vZGVsIiwiZ0l0ZW1zIiwiZ2NsYXNzcm9vbSIsImVycm9yIiwiY29kZSIsImNsYXNzZXMiLCJ2YWx1ZXMiLCJtYXAiLCJpdGVtIiwiaW1wb3J0ZWQiLCJnb29nbGVDbGFzc3Jvb21zSWRzIiwiaGFzIiwiaWQiLCJ0ZXh0cyIsIkN1cnJlbnRUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInZhbHVlIiwicmVhZHkiLCJpdGVtc1NlbGVjdGVkIiwiTWFwIiwiY29uc3RydWN0b3IiLCJDbGFzc3Jvb21zIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJpbml0Iiwib25DaGFuZ2UiLCJiaW5kIiwib2ZmIiwiTGF5b3V0QnJva2VyIiwib3ZlcmxheSIsImdsb2JhbFRoaXMiLCJzZXRUaW1lb3V0IiwiYnJlYWRjcnVtYiIsImNsYXNzcm9vbXMiLCJmZXRjaGluZyIsImUiLCJjb25zb2xlIiwiZGVsZXRlIiwiZmlsdGVyIiwiZWxlbWVudCIsImxvYWRDbGFzc2VzIiwiY291cnNlcyIsIiNpbml0IiwiY3VycmVudFRpbWUiLCJkZWZhdWx0IiwibGFzdENsYXNzZXNRdWVyeVRpbWUiLCJzaXplIiwiZGlmZiIsInNhdmVJdGVtVG9JbXBvcnQiLCJnbGNhc3Nyb29tIiwiQ2xhc3Nyb29tIiwiaXNSZWFkeSIsInNldCIsImV4dGVybmFsIiwibmFtZSIsImRlc2NyaXB0aW9uIiwidG9nZ2xlSXRlbSIsInNhdmVJdGVtcyIsImdldFByb3BlcnRpZXMiLCJzdGF0dXMiLCJkYXRhIiwiaW1wb3J0RnJvbUdvb2dsZUNsYXNzcm9vbSIsIkVycm9yIiwiX3JlYWN0IiwiX2l0ZW0iLCJfbGlzdCIsIl91aSIsIl9pY29ucyIsIl9saW5rIiwiX2NvbnRleHQiLCJfaG9va3MiLCJDbGFzc3Jvb21zTGlzdCIsInVzZU1vZHVsZUNvbnRleHQiLCJzZXRJdGVtcyIsInVzZVN0YXRlIiwidXNlQmluZGVyIiwiY3JlYXRlRWxlbWVudCIsIlBhZ2VDb250YWluZXIiLCJjbGFzc05hbWUiLCJQYWdlVGl0bGUiLCJ0aXRsZSIsIkxpbmsiLCJocmVmIiwiSWNvbiIsImljb24iLCJhY3Rpb25zIiwiY3JlYXRlIiwiTGlzdCIsImNvbnRyb2wiLCJSZWFjdCIsIk1vZHVsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9jb21wb25lbnRzIiwiRW1wdHlMaXN0IiwiQXBwSWNvbiIsImpvaW4iLCJFbXB0eUNhcmQiLCJ0ZXh0IiwiZW1wdHkiLCJfc2Vzc2lvbiIsIl9hbGVydCIsIl9tb2RhbCIsIl9pbXBvcnQiLCJIZWFkZXIiLCJ1c2VyTmFtZSIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsImRpc3BsYXlOYW1lIiwibG9hZGluZyIsInNldExvYWRpbmciLCJzZXRTaG93IiwiZGlzYWJsZVdpdGhvdXRBdXRoIiwiYXV0aG9yaXplZCIsImhhbmRsZU1vZGFsIiwiRnJhZ21lbnQiLCJBbGVydCIsInR5cGUiLCJleHRyYUluZm8iLCJCdXR0b24iLCJ2YXJpYW50IiwiTW9kYWwiLCJvbkNsb3NlIiwiSW1wb3J0IiwiRW1wdHlFeHBsb3JlciIsIkljb25CdXR0b24iLCJ0aXRsZUltcG9ydCIsImxhYmVsSW1wb3J0IiwiX2VtcHR5Iiwic2V0RmV0Y2hpbmciLCJzZXRSZWFkeSIsIlNwaW5uZXIiLCJhY3RpdmUiLCJDb250cm9sIiwibGVuZ3RoIiwiaW1wb3J0IiwiUHJvY2Vzc0NvbnRhaW5lciIsIkl0ZW0iLCJjaGVja2VkIiwic2V0Q2hlY2tlZCIsIml0ZW1zU2F2ZWQiLCJzZXRJdGVtc1NhdmVkIiwiYWxyZWFkeUV4aXN0Iiwic29tZSIsIm9iaiIsInVwZGF0ZUltcG9ydHMiLCJpc1NlbGVjdGVkIiwia2V5Iiwib25DbGljayIsIl9pdGVtcyIsIl90b2FzdCIsInNhdmVJdGVtIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsInRvYXN0Iiwic3VjY2VzcyIsInNwZWNzIiwiZGlzYWJsZWQiLCJfY2xhc3Nyb29tTGlzdCIsInRvdGFsSXRlbXMiLCJzZXRUb3RhbEl0ZW1zIiwiUHJlbG9hZFNjcmVlbiIsIkxpc3RDb250cm9sIiwiUHJvdmlkZXIiLCJMZWFybmluZ0l0ZW1BY3Rpb25zIiwib25EZWxldGUiLCJDb25maXJtQWN0aW9uIiwidGV4dFBvcFVwIiwib25Db25maXJtIiwiX3RpdGxlIiwiX2FjdGlvbnMiLCJDYXJkIiwiQ2FyZENvbnRlbnQiLCJDYXJkRm9vdGVyIiwiTW9kdWxlRGF0YSIsImdUb29sdGlwIiwiVXNlckRhdGEiLCJvd25lciJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NsYXNzcm9vbS1saXN0LnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2VtcHR5LnRzeCIsIi90cy92aWV3cy9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2ltcG9ydC9lbXB0eS50c3giLCIvdHMvdmlld3MvaW1wb3J0L2luZGV4LnRzeCIsIi90cy92aWV3cy9pbXBvcnQvaXRlbXMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2ltcG9ydC9saXN0LnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvaXRlbS9hY3Rpb25zLnRzeCIsIi90cy92aWV3cy9pdGVtL2luZGV4LnRzeCIsIi90cy92aWV3cy9pdGVtL3RpdGxlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51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