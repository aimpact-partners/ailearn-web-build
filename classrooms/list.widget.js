System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@beyond-js/reactive@1.2.0/model", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/ailearn-app@0.1.6-dev.04/model/gclassroom", "dayjs@1.11.10", "@aimpact/ailearn-app@0.1.6-dev.04/main-layout.widget", "@beyond-js/kernel@0.1.9/texts", "react@18.2.0", "pragmate-ui@1.0.0-beta.2/list", "@aimpact/ailearn-app@0.1.6-dev.04/components/ui", "pragmate-ui@1.0.0-beta.2/icons", "pragmate-ui@1.0.0-beta.2/components", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/ailearn-app@0.1.6-dev.04/components/icons", "@aimpact/chat-sdk@1.0.1/session", "pragmate-ui@1.0.0-beta.2/alert", "pragmate-ui@1.0.0-beta.2/modal", "pragmate-ui@1.0.0-beta.2/toast", "@aimpact/chat@1.0.2/shared/components"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
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
    }, function (_aimpactAilearnApp016Dev04ModelGclassroom) {
      dependency_6 = _aimpactAilearnApp016Dev04ModelGclassroom;
    }, function (_dayjs2) {
      dependency_7 = _dayjs2;
    }, function (_aimpactAilearnApp016Dev04MainLayoutWidget) {
      dependency_8 = _aimpactAilearnApp016Dev04MainLayoutWidget;
    }, function (_beyondJsKernel019Texts) {
      dependency_9 = _beyondJsKernel019Texts;
    }, function (_react2) {
      dependency_10 = _react2;
    }, function (_pragmateUi100Beta2List) {
      dependency_11 = _pragmateUi100Beta2List;
    }, function (_aimpactAilearnApp016Dev04ComponentsUi) {
      dependency_12 = _aimpactAilearnApp016Dev04ComponentsUi;
    }, function (_pragmateUi100Beta2Icons) {
      dependency_13 = _pragmateUi100Beta2Icons;
    }, function (_pragmateUi100Beta2Components) {
      dependency_14 = _pragmateUi100Beta2Components;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_15 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactAilearnApp016Dev04ComponentsIcons) {
      dependency_16 = _aimpactAilearnApp016Dev04ComponentsIcons;
    }, function (_aimpactChatSdk101Session) {
      dependency_17 = _aimpactChatSdk101Session;
    }, function (_pragmateUi100Beta2Alert) {
      dependency_18 = _pragmateUi100Beta2Alert;
    }, function (_pragmateUi100Beta2Modal) {
      dependency_19 = _pragmateUi100Beta2Modal;
    }, function (_pragmateUi100Beta2Toast) {
      dependency_20 = _pragmateUi100Beta2Toast;
    }, function (_aimpactChat102SharedComponents) {
      dependency_21 = _aimpactChat102SharedComponents;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.2"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.2"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.1.6-dev.04"], ["@aimpact/ailearn-app", "0.1.6-dev.04"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.04/classrooms/list",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@aimpact/ailearn-sdk/core', dependency_5], ['@aimpact/ailearn-app/model/gclassroom', dependency_6], ['dayjs', dependency_7], ['@aimpact/ailearn-app/main-layout.widget', dependency_8], ['@beyond-js/kernel/texts', dependency_9], ['react', dependency_10], ['pragmate-ui/list', dependency_11], ['@aimpact/ailearn-app/components/ui', dependency_12], ['pragmate-ui/icons', dependency_13], ['pragmate-ui/components', dependency_14], ['@beyond-js/react-18-widgets/hooks', dependency_15], ['@aimpact/ailearn-app/components/icons', dependency_16], ['@aimpact/chat-sdk/session', dependency_17], ['pragmate-ui/alert', dependency_18], ['pragmate-ui/modal', dependency_19], ['pragmate-ui/toast', dependency_20], ['@aimpact/chat/shared/components', dependency_21]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-classroom-list",
        "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.04/classrooms/list.widget",
        "is": "page",
        "route": "/classrooms/list",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.6-dev.04/classrooms/list.widget');
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
        hash: 3106778576,
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
          var _components = require("pragmate-ui/components");
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
            }, React.createElement(_components.Link, {
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
        hash: 3337268897,
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
            }, _react.default.createElement(_components.Link, {
              className: "add-item",
              href: `/classrooms/join`
            }, _react.default.createElement(_components.Button, {
              icon: "share-link",
              variant: "primary"
            }, texts.actions.join)), _react.default.createElement(_components.Link, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJzaG93Iiwic2V0QnJlYWRjcnVtYiIsImxvYWQiLCJXaWRnZXQiLCJWaWV3IiwiZXhwb3J0cyIsIl9tb2RlbCIsIl9jb3JlIiwiX2djbGFzc3Jvb20iLCJfZGF5anMiLCJfbWFpbkxheW91dCIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsIlJlYWN0aXZlTW9kZWwiLCJpdGVtcyIsIm1vZGVsIiwiZ0l0ZW1zIiwiZ2NsYXNzcm9vbSIsImVycm9yIiwiY29kZSIsImNsYXNzZXMiLCJ2YWx1ZXMiLCJtYXAiLCJpdGVtIiwiaW1wb3J0ZWQiLCJnb29nbGVDbGFzc3Jvb21zSWRzIiwiaGFzIiwiaWQiLCJ0ZXh0cyIsIkN1cnJlbnRUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInZhbHVlIiwicmVhZHkiLCJpdGVtc1NlbGVjdGVkIiwiTWFwIiwiY29uc3RydWN0b3IiLCJDbGFzc3Jvb21zIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJvbkNoYW5nZSIsImJpbmQiLCJvZmYiLCJMYXlvdXRCcm9rZXIiLCJvdmVybGF5IiwiZ2xvYmFsVGhpcyIsInNldFRpbWVvdXQiLCJicmVhZGNydW1iIiwiY2xhc3Nyb29tcyIsImZldGNoaW5nIiwiZSIsImNvbnNvbGUiLCJkZWxldGUiLCJmaWx0ZXIiLCJlbGVtZW50IiwibG9hZENsYXNzZXMiLCJjb3Vyc2VzIiwiaW5pdCIsIiNpbml0IiwiY3VycmVudFRpbWUiLCJkZWZhdWx0IiwibGFzdENsYXNzZXNRdWVyeVRpbWUiLCJzaXplIiwiZGlmZiIsInNhdmVJdGVtVG9JbXBvcnQiLCJnbGNhc3Nyb29tIiwiQ2xhc3Nyb29tIiwiaXNSZWFkeSIsInNldCIsImV4dGVybmFsIiwibmFtZSIsImRlc2NyaXB0aW9uIiwidG9nZ2xlSXRlbSIsInNhdmVJdGVtcyIsImdldFByb3BlcnRpZXMiLCJzdGF0dXMiLCJkYXRhIiwiaW1wb3J0RnJvbUdvb2dsZUNsYXNzcm9vbSIsIkVycm9yIiwiUmVhY3QiLCJfaXRlbSIsIl9saXN0IiwiX3VpIiwiX2ljb25zIiwiX2NvbXBvbmVudHMiLCJfY29udGV4dCIsIl9ob29rcyIsIkNsYXNzcm9vbXNMaXN0IiwidXNlTW9kdWxlQ29udGV4dCIsInNldEl0ZW1zIiwidXNlU3RhdGUiLCJ1c2VCaW5kZXIiLCJjcmVhdGVFbGVtZW50IiwiUGFnZUNvbnRhaW5lciIsImNsYXNzTmFtZSIsIlBhZ2VUaXRsZSIsInRpdGxlIiwiTGluayIsImhyZWYiLCJJY29uIiwiaWNvbiIsImFjdGlvbnMiLCJjcmVhdGUiLCJMaXN0IiwiY29udHJvbCIsIk1vZHVsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIkVtcHR5TGlzdCIsIkFwcEljb24iLCJqb2luIiwiRW1wdHlDYXJkIiwidGV4dCIsImVtcHR5IiwiX3JlYWN0IiwiX3Nlc3Npb24iLCJfYWxlcnQiLCJfbW9kYWwiLCJfaW1wb3J0IiwiSGVhZGVyIiwidXNlck5hbWUiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJkaXNwbGF5TmFtZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwic2V0U2hvdyIsImRpc2FibGVXaXRob3V0QXV0aCIsImF1dGhvcml6ZWQiLCJoYW5kbGVNb2RhbCIsIkZyYWdtZW50IiwiQWxlcnQiLCJ0eXBlIiwiZXh0cmFJbmZvIiwiQnV0dG9uIiwidmFyaWFudCIsIk1vZGFsIiwib25DbG9zZSIsIkltcG9ydCIsIkVtcHR5RXhwbG9yZXIiLCJJY29uQnV0dG9uIiwidGl0bGVJbXBvcnQiLCJsYWJlbEltcG9ydCIsIl9lbXB0eSIsInNldEZldGNoaW5nIiwic2V0UmVhZHkiLCJTcGlubmVyIiwiYWN0aXZlIiwiQ29udHJvbCIsImxlbmd0aCIsImltcG9ydCIsIlByb2Nlc3NDb250YWluZXIiLCJJdGVtIiwiY2hlY2tlZCIsInNldENoZWNrZWQiLCJpdGVtc1NhdmVkIiwic2V0SXRlbXNTYXZlZCIsImFscmVhZHlFeGlzdCIsInNvbWUiLCJvYmoiLCJ1cGRhdGVJbXBvcnRzIiwiaXNTZWxlY3RlZCIsImtleSIsIm9uQ2xpY2siLCJfaXRlbXMiLCJfdG9hc3QiLCJzYXZlSXRlbSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJ0b2FzdCIsInN1Y2Nlc3MiLCJzcGVjcyIsImRpc2FibGVkIiwiX2NsYXNzcm9vbUxpc3QiLCJQcmVsb2FkU2NyZWVuIiwiTGlzdENvbnRyb2wiLCJQcm92aWRlciIsInRvdGFsSXRlbXMiLCJMZWFybmluZ0l0ZW1BY3Rpb25zIiwib25EZWxldGUiLCJDb25maXJtQWN0aW9uIiwidGV4dFBvcFVwIiwib25Db25maXJtIiwiX3RpdGxlIiwiX2FjdGlvbnMiLCJDYXJkIiwiQ2FyZENvbnRlbnQiLCJDYXJkRm9vdGVyIiwiTW9kdWxlRGF0YSIsImdUb29sdGlwIiwiVXNlckRhdGEiLCJvd25lciJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NsYXNzcm9vbS1saXN0LnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2VtcHR5LnRzeCIsIi90cy92aWV3cy9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2ltcG9ydC9lbXB0eS50c3giLCIvdHMvdmlld3MvaW1wb3J0L2luZGV4LnRzeCIsIi90cy92aWV3cy9pbXBvcnQvaXRlbXMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2ltcG9ydC9saXN0LnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvaXRlbS9hY3Rpb25zLnRzeCIsIi90cy92aWV3cy9pdGVtL2luZGV4LnRzeCIsIi90cy92aWV3cy9pdGVtL3RpdGxlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxu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