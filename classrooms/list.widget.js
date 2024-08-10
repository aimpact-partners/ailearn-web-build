System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@beyond-js/reactive@1.2.0/model", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/ailearn-app@0.1.4-test.02/model/gclassroom", "dayjs@1.11.10", "@aimpact/ailearn-app@0.1.4-test.02/main-layout.widget", "@beyond-js/kernel@0.1.9/texts", "react@18.2.0", "pragmate-ui@1.0.0-beta.1/list", "@aimpact/ailearn-app@0.1.4-test.02/components/ui", "pragmate-ui@1.0.0-beta.1/icons", "pragmate-ui@1.0.0-beta.1/link", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.1/components", "@aimpact/ailearn-app@0.1.4-test.02/components/icons", "@aimpact/chat-sdk@1.0.1/session", "pragmate-ui@1.0.0-beta.1/alert", "pragmate-ui@1.0.0-beta.1/modal", "pragmate-ui@1.0.0-beta.1/toast", "@aimpact/chat@1.0.2/shared/components"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp014Test02ModelGclassroom) {
      dependency_6 = _aimpactAilearnApp014Test02ModelGclassroom;
    }, function (_dayjs2) {
      dependency_7 = _dayjs2;
    }, function (_aimpactAilearnApp014Test02MainLayoutWidget) {
      dependency_8 = _aimpactAilearnApp014Test02MainLayoutWidget;
    }, function (_beyondJsKernel019Texts) {
      dependency_9 = _beyondJsKernel019Texts;
    }, function (_react2) {
      dependency_10 = _react2;
    }, function (_pragmateUi100Beta1List) {
      dependency_11 = _pragmateUi100Beta1List;
    }, function (_aimpactAilearnApp014Test02ComponentsUi) {
      dependency_12 = _aimpactAilearnApp014Test02ComponentsUi;
    }, function (_pragmateUi100Beta1Icons) {
      dependency_13 = _pragmateUi100Beta1Icons;
    }, function (_pragmateUi100Beta1Link) {
      dependency_14 = _pragmateUi100Beta1Link;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_15 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi100Beta1Components) {
      dependency_16 = _pragmateUi100Beta1Components;
    }, function (_aimpactAilearnApp014Test02ComponentsIcons) {
      dependency_17 = _aimpactAilearnApp014Test02ComponentsIcons;
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
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.2"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.1"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.1.4-test.02"], ["@aimpact/ailearn-app", "0.1.4-test.02"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.4-test.02/classrooms/list",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@aimpact/ailearn-sdk/core', dependency_5], ['@aimpact/ailearn-app/model/gclassroom', dependency_6], ['dayjs', dependency_7], ['@aimpact/ailearn-app/main-layout.widget', dependency_8], ['@beyond-js/kernel/texts', dependency_9], ['react', dependency_10], ['pragmate-ui/list', dependency_11], ['@aimpact/ailearn-app/components/ui', dependency_12], ['pragmate-ui/icons', dependency_13], ['pragmate-ui/link', dependency_14], ['@beyond-js/react-18-widgets/hooks', dependency_15], ['pragmate-ui/components', dependency_16], ['@aimpact/ailearn-app/components/icons', dependency_17], ['@aimpact/chat-sdk/session', dependency_18], ['pragmate-ui/alert', dependency_19], ['pragmate-ui/modal', dependency_20], ['pragmate-ui/toast', dependency_21], ['@aimpact/chat/shared/components', dependency_22]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-classroom-list",
        "vspecifier": "@aimpact/ailearn-app@0.1.4-test.02/classrooms/list.widget",
        "is": "page",
        "route": "/classrooms/list",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.4-test.02/classrooms/list.widget');
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