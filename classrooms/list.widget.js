System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@beyond-js/reactive@1.2.0/model", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/ailearn-app@0.1.1/model/gclassroom", "dayjs@1.11.10", "@aimpact/ailearn-app@0.1.1/main-layout.widget", "@beyond-js/kernel@0.1.9/texts", "react@18.2.0", "pragmate-ui@1.0.0-beta.1/list", "@aimpact/ailearn-app@0.1.1/components/ui", "pragmate-ui@1.0.0-beta.1/icons", "pragmate-ui@1.0.0-beta.1/link", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.1/components", "@aimpact/ailearn-app@0.1.1/components/icons", "@aimpact/chat-sdk@1.0.1/session", "pragmate-ui@1.0.0-beta.1/alert", "pragmate-ui@1.0.0-beta.1/modal", "pragmate-ui@1.0.0-beta.1/toast", "@aimpact/chat@1.0.2/shared/components"], function (_export, _context2) {
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
    }, function (_beyondJsReactive120Model) {
      dependency_4 = _beyondJsReactive120Model;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_5 = _aimpactAilearnSdk100Core;
    }, function (_aimpactAilearnApp011ModelGclassroom) {
      dependency_6 = _aimpactAilearnApp011ModelGclassroom;
    }, function (_dayjs2) {
      dependency_7 = _dayjs2;
    }, function (_aimpactAilearnApp011MainLayoutWidget) {
      dependency_8 = _aimpactAilearnApp011MainLayoutWidget;
    }, function (_beyondJsKernel019Texts) {
      dependency_9 = _beyondJsKernel019Texts;
    }, function (_react2) {
      dependency_10 = _react2;
    }, function (_pragmateUi100Beta1List) {
      dependency_11 = _pragmateUi100Beta1List;
    }, function (_aimpactAilearnApp011ComponentsUi) {
      dependency_12 = _aimpactAilearnApp011ComponentsUi;
    }, function (_pragmateUi100Beta1Icons) {
      dependency_13 = _pragmateUi100Beta1Icons;
    }, function (_pragmateUi100Beta1Link) {
      dependency_14 = _pragmateUi100Beta1Link;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_15 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi100Beta1Components) {
      dependency_16 = _pragmateUi100Beta1Components;
    }, function (_aimpactAilearnApp011ComponentsIcons) {
      dependency_17 = _aimpactAilearnApp011ComponentsIcons;
    }, function (_aimpactChatSdk101Session) {
      dependency_18 = _aimpactChatSdk101Session;
    }, function (_pragmateUi100Beta1Alert) {
      dependency_19 = _pragmateUi100Beta1Alert;
    }, function (_pragmateUi100Beta1Modal) {
      dependency_20 = _pragmateUi100Beta1Modal;
    }, function (_pragmateUi100Beta1Toast) {
      dependency_21 = _pragmateUi100Beta1Toast;
    }, function (_aimpactChat102SharedComponents) {
      dependency_22 = _aimpactChat102SharedComponents;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.2"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.1"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.1.1"], ["@aimpact/ailearn-app", "0.1.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.1/classrooms/list",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@aimpact/ailearn-sdk/core', dependency_5], ['@aimpact/ailearn-app/model/gclassroom', dependency_6], ['dayjs', dependency_7], ['@aimpact/ailearn-app/main-layout.widget', dependency_8], ['@beyond-js/kernel/texts', dependency_9], ['react', dependency_10], ['pragmate-ui/list', dependency_11], ['@aimpact/ailearn-app/components/ui', dependency_12], ['pragmate-ui/icons', dependency_13], ['pragmate-ui/link', dependency_14], ['@beyond-js/react-18-widgets/hooks', dependency_15], ['pragmate-ui/components', dependency_16], ['@aimpact/ailearn-app/components/icons', dependency_17], ['@aimpact/chat-sdk/session', dependency_18], ['pragmate-ui/alert', dependency_19], ['pragmate-ui/modal', dependency_20], ['pragmate-ui/toast', dependency_21], ['@aimpact/chat/shared/components', dependency_22]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-classroom-list",
        "vspecifier": "@aimpact/ailearn-app@0.1.1/classrooms/list.widget",
        "is": "page",
        "route": "/classrooms/list",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.1/classrooms/list.widget');
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
        hash: 4192429976,
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
              // this.#init();
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
                this.#items = this.model.items;
                super.ready = true;
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
        hash: 1954707885,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ClassroomsList = ClassroomsList;
          var React = require("react");
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
            const [items, setItems] = React.useState(store.items);
            (0, _hooks.useBinder)([store], () => setItems([...store.items]), 'items.changed');
            return React.createElement(_ui.PageContainer, {
              className: "classroom-list__container"
            }, React.createElement(_ui.PageTitle, {
              title: texts.title
            }, React.createElement(_link.Link, {
              href: "/classrooms/create"
            }, React.createElement(_icons.Icon, {
              icon: "add-circle"
            }), texts.actions.create)), React.createElement(_list.List, {
              className: " list-unstyled grid-container g-2-columns mt-1",
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
        hash: 700439127,
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
            (0, _hooks.useBinder)([store], () => {
              setReady(store.ready);
              setFetching(store.fetching);
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
                totalItems: store.items.length
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJzaG93Iiwic2V0QnJlYWRjcnVtYiIsImxvYWQiLCJXaWRnZXQiLCJWaWV3IiwiZXhwb3J0cyIsIl9tb2RlbCIsIl9jb3JlIiwiX2djbGFzc3Jvb20iLCJfZGF5anMiLCJfbWFpbkxheW91dCIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsIlJlYWN0aXZlTW9kZWwiLCJpdGVtcyIsIm1vZGVsIiwiZ0l0ZW1zIiwiZ2NsYXNzcm9vbSIsImVycm9yIiwiY29kZSIsImNsYXNzZXMiLCJ2YWx1ZXMiLCJtYXAiLCJpdGVtIiwiaW1wb3J0ZWQiLCJnb29nbGVDbGFzc3Jvb21zSWRzIiwiaGFzIiwiaWQiLCJ0ZXh0cyIsIkN1cnJlbnRUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInZhbHVlIiwicmVhZHkiLCJpdGVtc1NlbGVjdGVkIiwiTWFwIiwiY29uc3RydWN0b3IiLCJDbGFzc3Jvb21zIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJvbkNoYW5nZSIsImJpbmQiLCJvZmYiLCJMYXlvdXRCcm9rZXIiLCJvdmVybGF5IiwiZ2xvYmFsVGhpcyIsInNldFRpbWVvdXQiLCJicmVhZGNydW1iIiwiY2xhc3Nyb29tcyIsImZldGNoaW5nIiwiZSIsImNvbnNvbGUiLCJkZWxldGUiLCJmaWx0ZXIiLCJlbGVtZW50IiwibG9hZENsYXNzZXMiLCJjb3Vyc2VzIiwiaW5pdCIsIiNpbml0IiwiY3VycmVudFRpbWUiLCJkZWZhdWx0IiwibGFzdENsYXNzZXNRdWVyeVRpbWUiLCJzaXplIiwiZGlmZiIsInNhdmVJdGVtVG9JbXBvcnQiLCJnbGNhc3Nyb29tIiwiQ2xhc3Nyb29tIiwiaXNSZWFkeSIsInNldCIsImV4dGVybmFsIiwibmFtZSIsImRlc2NyaXB0aW9uIiwidG9nZ2xlSXRlbSIsInNhdmVJdGVtcyIsImdldFByb3BlcnRpZXMiLCJzdGF0dXMiLCJkYXRhIiwiaW1wb3J0RnJvbUdvb2dsZUNsYXNzcm9vbSIsIkVycm9yIiwiUmVhY3QiLCJfaXRlbSIsIl9saXN0IiwiX3VpIiwiX2ljb25zIiwiX2xpbmsiLCJfY29udGV4dCIsIl9ob29rcyIsIkNsYXNzcm9vbXNMaXN0IiwidXNlTW9kdWxlQ29udGV4dCIsInNldEl0ZW1zIiwidXNlU3RhdGUiLCJ1c2VCaW5kZXIiLCJjcmVhdGVFbGVtZW50IiwiUGFnZUNvbnRhaW5lciIsImNsYXNzTmFtZSIsIlBhZ2VUaXRsZSIsInRpdGxlIiwiTGluayIsImhyZWYiLCJJY29uIiwiaWNvbiIsImFjdGlvbnMiLCJjcmVhdGUiLCJMaXN0IiwiY29udHJvbCIsIk1vZHVsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9jb21wb25lbnRzIiwiRW1wdHlMaXN0IiwiQXBwSWNvbiIsImpvaW4iLCJFbXB0eUNhcmQiLCJ0ZXh0IiwiZW1wdHkiLCJfcmVhY3QiLCJfc2Vzc2lvbiIsIl9hbGVydCIsIl9tb2RhbCIsIl9pbXBvcnQiLCJIZWFkZXIiLCJ1c2VyTmFtZSIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsImRpc3BsYXlOYW1lIiwibG9hZGluZyIsInNldExvYWRpbmciLCJzZXRTaG93IiwiZGlzYWJsZVdpdGhvdXRBdXRoIiwiYXV0aG9yaXplZCIsImhhbmRsZU1vZGFsIiwiRnJhZ21lbnQiLCJBbGVydCIsInR5cGUiLCJleHRyYUluZm8iLCJCdXR0b24iLCJ2YXJpYW50IiwiTW9kYWwiLCJvbkNsb3NlIiwiSW1wb3J0IiwiRW1wdHlFeHBsb3JlciIsIkljb25CdXR0b24iLCJ0aXRsZUltcG9ydCIsImxhYmVsSW1wb3J0IiwiX2VtcHR5Iiwic2V0RmV0Y2hpbmciLCJzZXRSZWFkeSIsIlNwaW5uZXIiLCJhY3RpdmUiLCJDb250cm9sIiwibGVuZ3RoIiwiaW1wb3J0IiwiUHJvY2Vzc0NvbnRhaW5lciIsIkl0ZW0iLCJjaGVja2VkIiwic2V0Q2hlY2tlZCIsIml0ZW1zU2F2ZWQiLCJzZXRJdGVtc1NhdmVkIiwiYWxyZWFkeUV4aXN0Iiwic29tZSIsIm9iaiIsInVwZGF0ZUltcG9ydHMiLCJpc1NlbGVjdGVkIiwia2V5Iiwib25DbGljayIsIl9pdGVtcyIsIl90b2FzdCIsInNhdmVJdGVtIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsInRvYXN0Iiwic3VjY2VzcyIsInNwZWNzIiwiZGlzYWJsZWQiLCJfY2xhc3Nyb29tTGlzdCIsIlByZWxvYWRTY3JlZW4iLCJMaXN0Q29udHJvbCIsIlByb3ZpZGVyIiwidG90YWxJdGVtcyIsIkxlYXJuaW5nSXRlbUFjdGlvbnMiLCJvbkRlbGV0ZSIsIkNvbmZpcm1BY3Rpb24iLCJ0ZXh0UG9wVXAiLCJvbkNvbmZpcm0iLCJfdGl0bGUiLCJfYWN0aW9ucyIsIkNhcmQiLCJDYXJkQ29udGVudCIsIkNhcmRGb290ZXIiLCJNb2R1bGVEYXRhIiwiZ1Rvb2x0aXAiLCJVc2VyRGF0YSIsIm93bmVyIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvY2xhc3Nyb29tLWxpc3QudHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2hlYWRlci50c3giLCIvdHMvdmlld3MvaW1wb3J0L2VtcHR5LnRzeCIsIi90cy92aWV3cy9pbXBvcnQvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2ltcG9ydC9pdGVtcy9pbmRleC50c3giLCIvdHMvdmlld3MvaW1wb3J0L2xpc3QudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9pdGVtL2FjdGlvbnMudHN4IiwiL3RzL3ZpZXdzL2l0ZW0vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2l0ZW0vdGl0bGUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVs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