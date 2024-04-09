System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.1/page", "@beyond-js/reactive@1.1.12/model", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/ailearn-app@0.0.32/model/gclassroom", "dayjs@1.11.10", "react@18.2.0", "pragmate-ui@0.1.0/list", "pragmate-ui@0.1.0/components", "@aimpact/ailearn-app@0.0.32/components/ui", "@aimpact/chat-sdk@1.0.0/session", "pragmate-ui@0.1.0/alert", "pragmate-ui@0.1.0/link", "pragmate-ui@0.1.0/modal", "@beyond-js/react-18-widgets@1.1.1/hooks", "pragmate-ui@0.1.0/icons", "pragmate-ui@0.1.0/toast", "@aimpact/ailearn-app@0.0.32/components/navbar-header.code", "@aimpact/chat@1.0.1/shared/components", "@aimpact/chat@1.0.1/shared/hooks", "@aimpact/ailearn-app@0.0.32/config"], function (_export, _context2) {
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
    }, function (_beyondJsReact18Widgets111Page) {
      dependency_3 = _beyondJsReact18Widgets111Page;
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
    }, function (_pragmateUi010List) {
      dependency_9 = _pragmateUi010List;
    }, function (_pragmateUi010Components) {
      dependency_10 = _pragmateUi010Components;
    }, function (_aimpactAilearnApp0032ComponentsUi) {
      dependency_11 = _aimpactAilearnApp0032ComponentsUi;
    }, function (_aimpactChatSdk100Session) {
      dependency_12 = _aimpactChatSdk100Session;
    }, function (_pragmateUi010Alert) {
      dependency_13 = _pragmateUi010Alert;
    }, function (_pragmateUi010Link) {
      dependency_14 = _pragmateUi010Link;
    }, function (_pragmateUi010Modal) {
      dependency_15 = _pragmateUi010Modal;
    }, function (_beyondJsReact18Widgets111Hooks) {
      dependency_16 = _beyondJsReact18Widgets111Hooks;
    }, function (_pragmateUi010Icons) {
      dependency_17 = _pragmateUi010Icons;
    }, function (_pragmateUi010Toast) {
      dependency_18 = _pragmateUi010Toast;
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
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/http-suite", "1.0.3"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.0"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.1.1"], ["apexcharts", "3.48.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["firebase", "10.9.0"], ["firebase-admin", "11.11.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["@aimpact/ailearn-app", "0.0.32"], ["@aimpact/ailearn-app", "0.0.32"]]);
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
        hash: 2204375267,
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
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_ui.HeaderCard, {
              title: texts.welcome.message.replace('%name', userName),
              alt: 'card-robot',
              image: "/assets/ai-robot.webp"
            }, _react.default.createElement("p", null, texts.welcome.actionInfo)), disableWithoutAuth && _react.default.createElement("div", {
              className: "alert-extra__container"
            }, _react.default.createElement(_alert.Alert, {
              type: "info"
            }, texts.extraInfo)), store.items && _react.default.createElement(_ui.SubDivider, {
              titleText: texts.title
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
        hash: 4118986013,
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
          var _config = require("@aimpact/ailearn-app/config");
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
              breadcrumb: [[_config.default.params.APP_NAME, '/'], ['Classrooms', '']]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3IiwiZXhwb3J0cyIsIl9tb2RlbCIsIl9jb3JlIiwiX2djbGFzc3Jvb20iLCJfZGF5anMiLCJSZWFjdGl2ZU1vZGVsIiwiaXRlbXMiLCJtb2RlbCIsImdJdGVtcyIsImdjbGFzc3Jvb20iLCJlcnJvciIsImNvZGUiLCJjb25zb2xlIiwibG9nIiwiY2xhc3NlcyIsInZhbHVlcyIsIm1hcCIsIml0ZW0iLCJpbXBvcnRlZCIsImdvb2dsZUNsYXNzcm9vbXNJZHMiLCJoYXMiLCJpZCIsIml0ZW1zU2VsZWN0ZWQiLCJNYXAiLCJjb25zdHJ1Y3RvciIsIkNsYXNzcm9vbXMiLCJnbG9iYWxUaGlzIiwiYyIsIm9uIiwidHJpZ2dlckV2ZW50IiwiaW5pdCIsImxvYWQiLCJmZXRjaGluZyIsInJlYWR5IiwiZSIsImRlbGV0ZSIsImxvYWRDbGFzc2VzIiwiY291cnNlcyIsIiNpbml0IiwiY3VycmVudFRpbWUiLCJkZWZhdWx0IiwibGFzdENsYXNzZXNRdWVyeVRpbWUiLCJzaXplIiwiZGlmZiIsInNhdmVJdGVtVG9JbXBvcnQiLCJnbGNhc3Nyb29tIiwiQ2xhc3Nyb29tIiwiaXNSZWFkeSIsInNldCIsImV4dGVybmFsIiwibmFtZSIsImRlc2NyaXB0aW9uIiwidG9nZ2xlSXRlbSIsInNhdmVJdGVtcyIsImdldFByb3BlcnRpZXMiLCJzdGF0dXMiLCJkYXRhIiwiaW1wb3J0RnJvbUdvb2dsZUNsYXNzcm9vbSIsIkVycm9yIiwiX3JlYWN0IiwiX2l0ZW0iLCJfbGlzdCIsIkNsYXNzcm9vbXNMaXN0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIkxpc3QiLCJjb250cm9sIiwiUmVhY3QiLCJNb2R1bGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZU1vZHVsZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2NvbXBvbmVudHMiLCJfY29udGV4dCIsIl91aSIsIkVtcHR5TGlzdCIsInRleHRzIiwiRW1wdHlDYXJkIiwidGV4dCIsImVtcHR5IiwidGl0bGUiLCJpY29uIiwiTGluayIsImhyZWYiLCJhY3Rpb25zIiwiY3JlYXRlIiwiX3Nlc3Npb24iLCJfYWxlcnQiLCJfbGluayIsIl9tb2RhbCIsIl9pbXBvcnQiLCJfaG9va3MiLCJIZWFkZXIiLCJ1c2VyTmFtZSIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsImRpc3BsYXlOYW1lIiwibG9hZGluZyIsInNldExvYWRpbmciLCJ1c2VTdGF0ZSIsInNob3ciLCJzZXRTaG93IiwiZGlzYWJsZVdpdGhvdXRBdXRoIiwiYXV0aG9yaXplZCIsInVzZUJpbmRlciIsImhhbmRsZU1vZGFsIiwiRnJhZ21lbnQiLCJIZWFkZXJDYXJkIiwid2VsY29tZSIsIm1lc3NhZ2UiLCJyZXBsYWNlIiwiYWx0IiwiaW1hZ2UiLCJhY3Rpb25JbmZvIiwiQWxlcnQiLCJ0eXBlIiwiZXh0cmFJbmZvIiwiU3ViRGl2aWRlciIsInRpdGxlVGV4dCIsIkJ1dHRvbiIsIm9uQ2xpY2siLCJ2YXJpYW50IiwiZGlzYWJsZWQiLCJpbXBvcnQiLCJqb2luIiwiTW9kYWwiLCJvbkNsb3NlIiwiSW1wb3J0IiwiX2ljb25zIiwiRW1wdHlFeHBsb3JlciIsIkljb25CdXR0b24iLCJ0aXRsZUltcG9ydCIsImxhYmVsSW1wb3J0IiwiX2VtcHR5Iiwic2V0RmV0Y2hpbmciLCJzZXRSZWFkeSIsIlNwaW5uZXIiLCJhY3RpdmUiLCJDb250cm9sIiwibGVuZ3RoIiwiUHJvY2Vzc0NvbnRhaW5lciIsIkl0ZW0iLCJjaGVja2VkIiwic2V0Q2hlY2tlZCIsIml0ZW1zU2F2ZWQiLCJzZXRJdGVtc1NhdmVkIiwiYWxyZWFkeUV4aXN0Iiwic29tZSIsIm9iaiIsInVwZGF0ZUltcG9ydHMiLCJpc1NlbGVjdGVkIiwia2V5IiwiSWNvbiIsIl9pdGVtcyIsIl90b2FzdCIsInNldEl0ZW1zIiwic2F2ZUl0ZW0iLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwidG9hc3QiLCJzdWNjZXNzIiwic3BlY3MiLCJfbmF2YmFySGVhZGVyIiwiX2hlYWRlciIsIl9iZXlvbmRfY29udGV4dCIsIl9ob29rczIiLCJfY2xhc3Nyb29tTGlzdCIsIl9jb25maWciLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ0b3RhbEl0ZW1zIiwic2V0VG90YWxJdGVtcyIsIlByZWxvYWRTY3JlZW4iLCJMaXN0Q29udHJvbCIsIlByb3ZpZGVyIiwidmFsdWUiLCJOYXZiYXJIZWFkZXIiLCJicmVhZGNydW1iIiwicGFyYW1zIiwiQVBQX05BTUUiLCJQYWdlQ29udGFpbmVyIiwiTGVhcm5pbmdJdGVtQWN0aW9ucyIsIm9uRGVsZXRlIiwiQ29uZmlybUFjdGlvbiIsInRleHRQb3BVcCIsIm9uQ29uZmlybSIsIl90aXRsZSIsIl9hY3Rpb25zIiwiQ2FyZCIsIkNhcmRDb250ZW50IiwiQ2FyZEZvb3RlciIsIk1vZHVsZURhdGEiLCJnVG9vbHRpcCJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NsYXNzcm9vbS1saXN0LnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2VtcHR5LnRzeCIsIi90cy92aWV3cy9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2ltcG9ydC9lbXB0eS50c3giLCIvdHMvdmlld3MvaW1wb3J0L2luZGV4LnRzeCIsIi90cy92aWV3cy9pbXBvcnQvaXRlbXMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2ltcG9ydC9saXN0LnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvaXRlbS9hY3Rpb25zLnRzeCIsIi90cy92aWV3cy9pdGVtL2luZGV4LnRzeCIsIi90cy92aWV3cy9pdGVtL3RpdGxlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUgsTUFBQSxDQUFBSyxZQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNuQjtZQUNBLElBQUlHLE1BQU1BLENBQUE7Y0FDVCxPQUFPUCxNQUFBLENBQUFRLElBQUk7WUFDWjs7VUFDQUMsT0FBQSxDQUFBUCxVQUFBLEdBQUFBLFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDZEQsSUFBQVEsTUFBQSxHQUFBWCxPQUFBO1VBQ0EsSUFBQVksS0FBQSxHQUFBWixPQUFBO1VBQ0EsSUFBQWEsV0FBQSxHQUFBYixPQUFBO1VBQ0EsSUFBQWMsTUFBQSxHQUFBZCxPQUFBO1VBRU0sTUFBT08sWUFBYSxTQUFRSSxNQUFBLENBQUFJLGFBQTJCO1lBRzVELENBQUFDLEtBQU07WUFDTixJQUFJQSxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUNDLEtBQUssQ0FBQ0QsS0FBSztZQUN4QjtZQUVBLENBQUFDLEtBQU07WUFDTixJQUFJQSxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsS0FBTTtZQUNuQjtZQUVBLElBQUlDLE1BQU1BLENBQUE7Y0FDVCxJQUFJTCxXQUFBLENBQUFNLFVBQVUsQ0FBQ0MsS0FBSyxDQUFDQyxJQUFJLEdBQUcsQ0FBQyxFQUFFO2dCQUM5QkMsT0FBTyxDQUFDQyxHQUFHLENBQUNWLFdBQUEsQ0FBQU0sVUFBVSxDQUFDQyxLQUFLLENBQUM7Z0JBQzdCLE9BQU8sRUFBRTs7Y0FHVixPQUFPUCxXQUFBLENBQUFNLFVBQVUsQ0FBQ0ssT0FBTyxDQUFDQyxNQUFNLEVBQUUsQ0FBQ0MsR0FBRyxDQUFDQyxJQUFJLElBQUc7Z0JBQzdDLE9BQU87a0JBQ04sR0FBR0EsSUFBSTtrQkFDUEMsUUFBUSxFQUFFLElBQUksQ0FBQ1gsS0FBSyxDQUFDWSxtQkFBbUIsQ0FBQ0MsR0FBRyxDQUFDSCxJQUFJLENBQUNJLEVBQUU7aUJBQ3BEO2NBQ0YsQ0FBQyxDQUFDO1lBQ0g7WUFFQSxDQUFBQyxhQUFjLEdBQUcsSUFBSUMsR0FBRyxFQUFFO1lBQzFCLElBQUlELGFBQWFBLENBQUE7Y0FDaEIsT0FBTyxJQUFJLENBQUMsQ0FBQUEsYUFBYztZQUMzQjtZQUNBRSxZQUFBO2NBQ0MsS0FBSyxFQUFFO2NBQ1AsSUFBSSxDQUFDLENBQUFqQixLQUFNLEdBQUcsSUFBSUwsS0FBQSxDQUFBdUIsVUFBVSxFQUFFO2NBQzlCQyxVQUFVLENBQUNDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQXBCLEtBQU07Y0FDMUIsSUFBSSxDQUFDQSxLQUFLLENBQUNxQixFQUFFLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQ0MsWUFBWSxDQUFDO2NBQzFDMUIsV0FBQSxDQUFBTSxVQUFVLENBQUNtQixFQUFFLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQ0MsWUFBWSxDQUFDO2NBQzFDLElBQUksQ0FBQyxDQUFBQyxJQUFLLEVBQUU7Y0FDWixJQUFJLENBQUNDLElBQUksRUFBRTtZQUNaO1lBRUEsTUFBTUEsSUFBSUEsQ0FBQTtjQUNULElBQUk7Z0JBQ0gsSUFBSSxDQUFDQyxRQUFRLEdBQUcsSUFBSTtnQkFDcEIsTUFBTSxJQUFJLENBQUN6QixLQUFLLENBQUN3QixJQUFJLEVBQUU7Z0JBQ3ZCLElBQUksQ0FBQ0UsS0FBSyxHQUFHLElBQUk7ZUFDakIsQ0FBQyxPQUFPQyxDQUFDLEVBQUU7Z0JBQ1h0QixPQUFPLENBQUNGLEtBQUssQ0FBQ3dCLENBQUMsQ0FBQztlQUNoQixTQUFTO2dCQUNULElBQUksQ0FBQ0YsUUFBUSxHQUFHLEtBQUs7O1lBRXZCO1lBRUEsTUFBTUcsTUFBTUEsQ0FBQ2xCLElBQUk7Y0FDaEIsTUFBTUEsSUFBSSxDQUFDa0IsTUFBTSxFQUFFO1lBQ3BCO1lBRUFDLFdBQVcsR0FBRyxNQUFBQSxDQUFBLEtBQVc7Y0FDeEIsT0FBTyxNQUFNakMsV0FBQSxDQUFBTSxVQUFVLENBQUM0QixPQUFPLEVBQUU7WUFDbEMsQ0FBQztZQUVELE1BQU0sQ0FBQVAsSUFBS1EsQ0FBQTtjQUNWLE1BQU1DLFdBQVcsR0FBRyxJQUFBbkMsTUFBQSxDQUFBb0MsT0FBSyxHQUFFO2NBQzNCLElBQUlyQyxXQUFBLENBQUFNLFVBQVUsQ0FBQ2dDLG9CQUFvQixJQUFJdEMsV0FBQSxDQUFBTSxVQUFVLENBQUNLLE9BQU8sQ0FBQzRCLElBQUksRUFBRTtnQkFDL0QsSUFBSSxDQUFDVCxLQUFLLEdBQUcsSUFBSTtnQkFFakIsSUFBSU0sV0FBVyxDQUFDSSxJQUFJLENBQUN4QyxXQUFBLENBQUFNLFVBQVUsQ0FBQ2dDLG9CQUFvQixFQUFFLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRTtrQkFDckUsSUFBSSxDQUFDTCxXQUFXLEVBQUU7O2dCQUVuQjs7Y0FHRCxJQUFJLENBQUNBLFdBQVcsRUFBRTtjQUNsQixJQUFJLENBQUNILEtBQUssR0FBRyxJQUFJO1lBQ2xCO1lBRUEsTUFBTVcsZ0JBQWdCQSxDQUFDQyxVQUFVO2NBQ2hDLE1BQU01QixJQUFJLEdBQUcsSUFBSWYsS0FBQSxDQUFBNEMsU0FBUyxFQUFFO2NBQzVCLE1BQU03QixJQUFJLENBQUM4QixPQUFPO2NBRWxCOUIsSUFBSSxDQUFDK0IsR0FBRyxDQUFDO2dCQUNSQyxRQUFRLEVBQUVKLFVBQVUsQ0FBQ3hCLEVBQUU7Z0JBQ3ZCNkIsSUFBSSxFQUFFTCxVQUFVLENBQUNLLElBQUk7Z0JBQ3JCQyxXQUFXLEVBQUU7ZUFDYixDQUFDO2NBRUYsSUFBSSxDQUFDN0IsYUFBYSxDQUFDMEIsR0FBRyxDQUFDSCxVQUFVLENBQUN4QixFQUFFLEVBQUVKLElBQUksQ0FBQztjQUMzQyxJQUFJLENBQUNZLFlBQVksRUFBRTtZQUNwQjtZQUVBdUIsVUFBVUEsQ0FBQ25DLElBQUk7Y0FDZCxJQUFJLElBQUksQ0FBQ0ssYUFBYSxDQUFDRixHQUFHLENBQUNILElBQUksQ0FBQ0ksRUFBRSxDQUFDLEVBQUU7Z0JBQ3BDLElBQUksQ0FBQyxDQUFBQyxhQUFjLENBQUNhLE1BQU0sQ0FBQ2xCLElBQUksQ0FBQ0ksRUFBRSxDQUFDO2dCQUNuQyxJQUFJLENBQUNRLFlBQVksRUFBRTtnQkFDbkI7O2NBR0QsSUFBSSxDQUFDZSxnQkFBZ0IsQ0FBQzNCLElBQUksQ0FBQztZQUM1QjtZQUVBLE1BQU1vQyxTQUFTQSxDQUFBO2NBQ2QsSUFBSTtnQkFDSCxJQUFJLENBQUNyQixRQUFRLEdBQUcsSUFBSTtnQkFFcEIsTUFBTTFCLEtBQUssR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUFnQixhQUFjLENBQUNQLE1BQU0sRUFBRSxDQUFDLENBQUNDLEdBQUcsQ0FBQ0MsSUFBSSxJQUFHO2tCQUMxRCxPQUFPO29CQUNOLEdBQUdBLElBQUksQ0FBQ3FDLGFBQWE7bUJBQ3JCO2dCQUNGLENBQUMsQ0FBQztnQkFFRixNQUFNO2tCQUFFQyxNQUFNO2tCQUFFQztnQkFBSSxDQUFFLEdBQUcsTUFBTSxJQUFJLENBQUNqRCxLQUFLLENBQUNrRCx5QkFBeUIsQ0FBQztrQkFBRW5EO2dCQUFLLENBQUUsQ0FBQztnQkFFOUUsSUFBSSxDQUFDaUQsTUFBTSxFQUFFO2tCQUNaLE1BQU0sSUFBSUcsS0FBSyxDQUFDLDRCQUE0QixDQUFDOztnQkFHOUMsSUFBSSxDQUFDLENBQUFwQyxhQUFjLEdBQUcsSUFBSUMsR0FBRyxFQUFFO2dCQUUvQixPQUFPaUMsSUFBSTtlQUNYLENBQUMsT0FBT3RCLENBQUMsRUFBRTtnQkFDWHRCLE9BQU8sQ0FBQ0YsS0FBSyxDQUFDLENBQUMsRUFBRXdCLENBQUMsQ0FBQztlQUNuQixTQUFTO2dCQUNULElBQUksQ0FBQ0YsUUFBUSxHQUFHLEtBQUs7O1lBRXZCOztVQUNBaEMsT0FBQSxDQUFBSCxZQUFBLEdBQUFBLFlBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbElELElBQUE4RCxNQUFBLEdBQUFyRSxPQUFBO1VBQ0EsSUFBQXNFLEtBQUEsR0FBQXRFLE9BQUE7VUFDQSxJQUFBdUUsS0FBQSxHQUFBdkUsT0FBQTtVQUdNLFNBQVV3RSxjQUFjQSxDQUFDO1lBQUVuRTtVQUFLLENBQTJCO1lBQ2hFLE9BQ0NnRSxNQUFBLENBQUFuQixPQUFBLENBQUF1QixhQUFBO2NBQVNDLFNBQVMsRUFBQztZQUEyQixHQUM3Q0wsTUFBQSxDQUFBbkIsT0FBQSxDQUFBdUIsYUFBQSxDQUFDRixLQUFBLENBQUFJLElBQUk7Y0FBQ0QsU0FBUyxFQUFDLGdEQUFnRDtjQUFDMUQsS0FBSyxFQUFFWCxLQUFLLENBQUNXLEtBQUs7Y0FBRTRELE9BQU8sRUFBRU4sS0FBQSxDQUFBZDtZQUFTLEVBQUksQ0FDbEc7VUFFWjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNYQSxJQUFBcUIsS0FBQSxHQUFBN0UsT0FBQTtVQVNPLE1BQU04RSxhQUFhLEdBQUFwRSxPQUFBLENBQUFvRSxhQUFBLEdBQUdELEtBQUssQ0FBQ0UsYUFBYSxDQUFpQixFQUFvQixDQUFDO1VBQy9FLE1BQU1DLGdCQUFnQixHQUFHQSxDQUFBLEtBQU1ILEtBQUssQ0FBQ0ksVUFBVSxDQUFDSCxhQUFhLENBQUM7VUFBQ3BFLE9BQUEsQ0FBQXNFLGdCQUFBLEdBQUFBLGdCQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1Z0RSxJQUFBWCxNQUFBLEdBQUFyRSxPQUFBO1VBQ0EsSUFBQWtGLFdBQUEsR0FBQWxGLE9BQUE7VUFDQSxJQUFBbUYsUUFBQSxHQUFBbkYsT0FBQTtVQUNBLElBQUFvRixHQUFBLEdBQUFwRixPQUFBO1VBRU0sU0FBVXFGLFNBQVNBLENBQUE7WUFDeEIsTUFBTTtjQUFFQztZQUFLLENBQUUsR0FBRyxJQUFBSCxRQUFBLENBQUFILGdCQUFnQixHQUFFO1lBQ3BDLE9BQ0NYLE1BQUEsQ0FBQW5CLE9BQUEsQ0FBQXVCLGFBQUEsQ0FBQ1csR0FBQSxDQUFBRyxTQUFTO2NBQUNDLElBQUksRUFBRUYsS0FBSyxDQUFDRyxLQUFLLENBQUNDLEtBQUs7Y0FBRTdCLFdBQVcsRUFBRXlCLEtBQUssQ0FBQ0csS0FBSyxDQUFDNUIsV0FBVztjQUFFOEIsSUFBSSxFQUFDO1lBQU0sR0FDcEZ0QixNQUFBLENBQUFuQixPQUFBLENBQUF1QixhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUFvQyxHQUNsREwsTUFBQSxDQUFBbkIsT0FBQSxDQUFBdUIsYUFBQSxDQUFDUyxXQUFBLENBQUFVLElBQUk7Y0FBQ0MsSUFBSSxFQUFDLG9CQUFvQjtjQUFDbkIsU0FBUyxFQUFDO1lBQXNCLEdBQzlEWSxLQUFLLENBQUNRLE9BQU8sQ0FBQ0MsTUFBTSxDQUNmLENBQ0YsQ0FDSztVQUVkOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2hCQSxJQUFBMUIsTUFBQSxHQUFBckUsT0FBQTtVQUNBLElBQUFtRixRQUFBLEdBQUFuRixPQUFBO1VBQ0EsSUFBQW9GLEdBQUEsR0FBQXBGLE9BQUE7VUFDQSxJQUFBZ0csUUFBQSxHQUFBaEcsT0FBQTtVQUNBLElBQUFpRyxNQUFBLEdBQUFqRyxPQUFBO1VBQ0EsSUFBQWtGLFdBQUEsR0FBQWxGLE9BQUE7VUFDQSxJQUFBa0csS0FBQSxHQUFBbEcsT0FBQTtVQUNBLElBQUFhLFdBQUEsR0FBQWIsT0FBQTtVQUNBLElBQUFtRyxNQUFBLEdBQUFuRyxPQUFBO1VBQ0EsSUFBQW9HLE9BQUEsR0FBQXBHLE9BQUE7VUFDQSxJQUFBcUcsTUFBQSxHQUFBckcsT0FBQTtVQUVNLFNBQVVzRyxNQUFNQSxDQUFBO1lBQ3JCLE1BQU07Y0FBRWhCLEtBQUs7Y0FBRTVDLFFBQVE7Y0FBRXJDO1lBQUssQ0FBRSxHQUFHLElBQUE4RSxRQUFBLENBQUFILGdCQUFnQixHQUFFO1lBQ3JELE1BQU11QixRQUFRLEdBQUdQLFFBQUEsQ0FBQVEsY0FBYyxDQUFDQyxJQUFJLENBQUNDLFdBQVc7WUFDaEQsTUFBTSxDQUFDQyxPQUFPLEVBQUVDLFVBQVUsQ0FBQyxHQUFHdkMsTUFBQSxDQUFBbkIsT0FBSyxDQUFDMkQsUUFBUSxDQUFDbkUsUUFBUSxDQUFDO1lBQ3RELE1BQU0sQ0FBQ29FLElBQUksRUFBRUMsT0FBTyxDQUFDLEdBQUcxQyxNQUFBLENBQUFuQixPQUFLLENBQUMyRCxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQzdDLE1BQU1HLGtCQUFrQixHQUFHLENBQUNuRyxXQUFBLENBQUFNLFVBQVUsQ0FBQzhGLFVBQVU7WUFFakQsSUFBQVosTUFBQSxDQUFBYSxTQUFTLEVBQUMsQ0FBQzdHLEtBQUssQ0FBQyxFQUFFLE1BQU11RyxVQUFVLENBQUN2RyxLQUFLLENBQUNxQyxRQUFRLENBQUMsQ0FBQztZQUVwRCxTQUFTeUUsV0FBV0EsQ0FBQTtjQUNuQkosT0FBTyxDQUFDLENBQUNELElBQUksQ0FBQztZQUNmO1lBRUEsT0FDQ3pDLE1BQUEsQ0FBQW5CLE9BQUEsQ0FBQXVCLGFBQUEsQ0FBQUosTUFBQSxDQUFBbkIsT0FBQSxDQUFBa0UsUUFBQSxRQUNDL0MsTUFBQSxDQUFBbkIsT0FBQSxDQUFBdUIsYUFBQSxDQUFDVyxHQUFBLENBQUFpQyxVQUFVO2NBQ1YzQixLQUFLLEVBQUVKLEtBQUssQ0FBQ2dDLE9BQU8sQ0FBQ0MsT0FBTyxDQUFDQyxPQUFPLENBQUMsT0FBTyxFQUFFakIsUUFBUSxDQUFDO2NBQ3ZEa0IsR0FBRyxFQUFFLFlBQVk7Y0FDakJDLEtBQUssRUFBQztZQUF1QixHQUU3QnJELE1BQUEsQ0FBQW5CLE9BQUEsQ0FBQXVCLGFBQUEsWUFBSWEsS0FBSyxDQUFDZ0MsT0FBTyxDQUFDSyxVQUFVLENBQUssQ0FDckIsRUFDWlgsa0JBQWtCLElBQ2xCM0MsTUFBQSxDQUFBbkIsT0FBQSxDQUFBdUIsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBd0IsR0FDdENMLE1BQUEsQ0FBQW5CLE9BQUEsQ0FBQXVCLGFBQUEsQ0FBQ3dCLE1BQUEsQ0FBQTJCLEtBQUs7Y0FBQ0MsSUFBSSxFQUFDO1lBQU0sR0FBRXZDLEtBQUssQ0FBQ3dDLFNBQVMsQ0FBUyxDQUU3QyxFQUNBekgsS0FBSyxDQUFDVyxLQUFLLElBQ1hxRCxNQUFBLENBQUFuQixPQUFBLENBQUF1QixhQUFBLENBQUNXLEdBQUEsQ0FBQTJDLFVBQVU7Y0FBQ0MsU0FBUyxFQUFFMUMsS0FBSyxDQUFDSTtZQUFLLEdBQ2pDckIsTUFBQSxDQUFBbkIsT0FBQSxDQUFBdUIsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBMkIsR0FDekNMLE1BQUEsQ0FBQW5CLE9BQUEsQ0FBQXVCLGFBQUEsQ0FBQ1MsV0FBQSxDQUFBK0MsTUFBTTtjQUFDQyxPQUFPLEVBQUVmLFdBQVc7Y0FBRXhCLElBQUksRUFBQyxRQUFRO2NBQUN3QyxPQUFPLEVBQUMsU0FBUztjQUFDQyxRQUFRLEVBQUVwQjtZQUFrQixHQUN4RjFCLEtBQUssQ0FBQ1EsT0FBTyxDQUFDdUMsTUFBTSxDQUNiLEVBQ1RoRSxNQUFBLENBQUFuQixPQUFBLENBQUF1QixhQUFBLENBQUN5QixLQUFBLENBQUFOLElBQUk7Y0FBQ2xCLFNBQVMsRUFBQyxVQUFVO2NBQUNtQixJQUFJLEVBQUU7WUFBa0IsR0FDbER4QixNQUFBLENBQUFuQixPQUFBLENBQUF1QixhQUFBLENBQUNTLFdBQUEsQ0FBQStDLE1BQU07Y0FBQ3RDLElBQUksRUFBQyxZQUFZO2NBQUN3QyxPQUFPLEVBQUM7WUFBUyxHQUN6QzdDLEtBQUssQ0FBQ1EsT0FBTyxDQUFDd0MsSUFBSSxDQUNYLENBQ0gsRUFDUGpFLE1BQUEsQ0FBQW5CLE9BQUEsQ0FBQXVCLGFBQUEsQ0FBQ3lCLEtBQUEsQ0FBQU4sSUFBSTtjQUFDbEIsU0FBUyxFQUFDLFVBQVU7Y0FBQ21CLElBQUksRUFBRTtZQUFvQixHQUNwRHhCLE1BQUEsQ0FBQW5CLE9BQUEsQ0FBQXVCLGFBQUEsQ0FBQ1MsV0FBQSxDQUFBK0MsTUFBTTtjQUFDdEMsSUFBSSxFQUFDLEtBQUs7Y0FBQ3dDLE9BQU8sRUFBQztZQUFTLEdBQ2xDN0MsS0FBSyxDQUFDUSxPQUFPLENBQUNDLE1BQU0sQ0FDYixDQUNILENBQ0YsQ0FFUCxFQUNBZSxJQUFJLElBQ0p6QyxNQUFBLENBQUFuQixPQUFBLENBQUF1QixhQUFBLENBQUMwQixNQUFBLENBQUFvQyxLQUFLO2NBQUN6QixJQUFJO2NBQUNwQyxTQUFTLEVBQUMsdUJBQXVCO2NBQUM4RCxPQUFPLEVBQUVyQjtZQUFXLEdBQ2pFOUMsTUFBQSxDQUFBbkIsT0FBQSxDQUFBdUIsYUFBQSxDQUFDMkIsT0FBQSxDQUFBcUMsTUFBTSxPQUFHLENBRVgsQ0FDQztVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2pFQSxJQUFBcEUsTUFBQSxHQUFBckUsT0FBQTtVQUNBLElBQUEwSSxNQUFBLEdBQUExSSxPQUFBO1VBQ0EsSUFBQW1GLFFBQUEsR0FBQW5GLE9BQUE7VUFDTSxTQUFVMkksYUFBYUEsQ0FBQyxFQUFFO1lBQy9CLE1BQU07Y0FBRXJEO1lBQUssQ0FBRSxHQUFHLElBQUFILFFBQUEsQ0FBQUgsZ0JBQWdCLEdBQUU7WUFFcEMsT0FDQ1gsTUFBQSxDQUFBbkIsT0FBQSxDQUFBdUIsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBb0IsR0FDbENMLE1BQUEsQ0FBQW5CLE9BQUEsQ0FBQXVCLGFBQUEsQ0FBQ2lFLE1BQUEsQ0FBQUUsVUFBVTtjQUFDakQsSUFBSSxFQUFDLG9CQUFvQjtjQUFDRCxLQUFLLEVBQUVKLEtBQUssQ0FBQ0csS0FBSyxDQUFDb0Q7WUFBVyxFQUFJLEVBQ3hFeEUsTUFBQSxDQUFBbkIsT0FBQSxDQUFBdUIsYUFBQSxlQUFPYSxLQUFLLENBQUNHLEtBQUssQ0FBQ3FELFdBQVcsQ0FBUSxDQUNqQztVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1pBLElBQUF6RSxNQUFBLEdBQUFyRSxPQUFBO1VBQ0EsSUFBQXFHLE1BQUEsR0FBQXJHLE9BQUE7VUFDQSxJQUFBYSxXQUFBLEdBQUFiLE9BQUE7VUFDQSxJQUFBa0YsV0FBQSxHQUFBbEYsT0FBQTtVQUNBLElBQUErSSxNQUFBLEdBQUEvSSxPQUFBO1VBQ0EsSUFBQXVFLEtBQUEsR0FBQXZFLE9BQUE7VUFDQSxJQUFBbUYsUUFBQSxHQUFBbkYsT0FBQTtVQUNBLElBQUFvRixHQUFBLEdBQUFwRixPQUFBO1VBQ00sU0FBVXlJLE1BQU1BLENBQUE7WUFDckIsTUFBTTtjQUFFcEksS0FBSztjQUFFaUY7WUFBSyxDQUFFLEdBQUcsSUFBQUgsUUFBQSxDQUFBSCxnQkFBZ0IsR0FBRTtZQUMzQyxNQUFNLENBQUN0QyxRQUFRLEVBQUVzRyxXQUFXLENBQUMsR0FBRzNFLE1BQUEsQ0FBQW5CLE9BQUssQ0FBQzJELFFBQVEsQ0FBQ3hHLEtBQUssQ0FBQ3FDLFFBQVEsQ0FBQztZQUM5RCxNQUFNLENBQUNDLEtBQUssRUFBRXNHLFFBQVEsQ0FBQyxHQUFHNUUsTUFBQSxDQUFBbkIsT0FBSyxDQUFDMkQsUUFBUSxDQUFDeEcsS0FBSyxDQUFDc0MsS0FBSyxDQUFDO1lBRXJELElBQUEwRCxNQUFBLENBQUFhLFNBQVMsRUFBQyxDQUFDN0csS0FBSyxDQUFDLEVBQUUsTUFBSztjQUN2QjRJLFFBQVEsQ0FBQzVJLEtBQUssQ0FBQ3NDLEtBQUssQ0FBQztjQUNyQnFHLFdBQVcsQ0FBQzNJLEtBQUssQ0FBQ3FDLFFBQVEsQ0FBQztZQUM1QixDQUFDLENBQUM7WUFFRixNQUFNZSxPQUFPLEdBQUc1QyxXQUFBLENBQUFNLFVBQVUsQ0FBQ3dCLEtBQUssSUFBSUEsS0FBSztZQUN6QyxJQUFJLENBQUNjLE9BQU8sRUFBRSxPQUFPWSxNQUFBLENBQUFuQixPQUFBLENBQUF1QixhQUFBLENBQUNTLFdBQUEsQ0FBQWdFLE9BQU87Y0FBQ0MsTUFBTSxFQUFFLElBQUk7Y0FBRXRCLElBQUksRUFBQztZQUFTLEVBQUc7WUFFN0QsTUFBTXVCLE9BQU8sR0FBRyxDQUFDL0ksS0FBSyxDQUFDYSxNQUFNLENBQUNtSSxNQUFNLEdBQUdOLE1BQUEsQ0FBQUosYUFBYSxHQUFHcEUsS0FBQSxDQUFBSSxJQUFJO1lBRTNELE9BQ0NOLE1BQUEsQ0FBQW5CLE9BQUEsQ0FBQXVCLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQXlCLEdBQ3ZDTCxNQUFBLENBQUFuQixPQUFBLENBQUF1QixhQUFBLGFBQUthLEtBQUssQ0FBQytDLE1BQU0sQ0FBQzNDLEtBQUssQ0FBTSxFQUM3QnJCLE1BQUEsQ0FBQW5CLE9BQUEsQ0FBQXVCLGFBQUEsQ0FBQzJFLE9BQU8sT0FBRyxFQUNYL0UsTUFBQSxDQUFBbkIsT0FBQSxDQUFBdUIsYUFBQSxDQUFDVyxHQUFBLENBQUFrRSxnQkFBZ0I7Y0FBQzVHLFFBQVEsRUFBRUE7WUFBUSxFQUFJLENBQ25DO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDOUJBLElBQUEyQixNQUFBLEdBQUFyRSxPQUFBO1VBQ0EsSUFBQW1GLFFBQUEsR0FBQW5GLE9BQUE7VUFDQSxJQUFBMEksTUFBQSxHQUFBMUksT0FBQTtVQUNBLElBQUFxRyxNQUFBLEdBQUFyRyxPQUFBO1VBRU8sTUFBTXVKLElBQUksR0FBR0EsQ0FBQztZQUFFNUg7VUFBSSxDQUFFLEtBQUk7WUFDaEMsTUFBTTtjQUFFdEIsS0FBSztjQUFFaUY7WUFBSyxDQUFFLEdBQUcsSUFBQUgsUUFBQSxDQUFBSCxnQkFBZ0IsR0FBRTtZQUMzQyxNQUFNLENBQUN3RSxPQUFPLEVBQUVDLFVBQVUsQ0FBQyxHQUFHcEYsTUFBQSxDQUFBbkIsT0FBSyxDQUFDMkQsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNuRCxNQUFNLENBQUM2QyxVQUFVLEVBQUVDLGFBQWEsQ0FBQyxHQUFHdEYsTUFBQSxDQUFBbkIsT0FBSyxDQUFDMkQsUUFBUSxDQUFDeEcsS0FBSyxDQUFDVyxLQUFLLENBQUM7WUFFL0QsSUFBQXFGLE1BQUEsQ0FBQWEsU0FBUyxFQUFDLENBQUM3RyxLQUFLLENBQUMsRUFBRSxNQUFNc0osYUFBYSxDQUFDdEosS0FBSyxDQUFDVyxLQUFLLENBQUMsQ0FBQztZQUVwRCxNQUFNNEksWUFBWSxHQUFHRixVQUFVLENBQUNHLElBQUksQ0FBQ0MsR0FBRyxJQUFHO2NBQzFDLE9BQU9BLEdBQUcsQ0FBQ25HLFFBQVEsQ0FBQzVCLEVBQUUsS0FBS0osSUFBSSxDQUFDSSxFQUFFO1lBQ25DLENBQUMsQ0FBQztZQUVGLE1BQU1nSSxhQUFhLEdBQUduSCxDQUFDLElBQUc7Y0FDekIsSUFBSWdILFlBQVksRUFBRTtjQUNsQkgsVUFBVSxDQUFDLENBQUNELE9BQU8sQ0FBQztjQUNwQm5KLEtBQUssQ0FBQ3lELFVBQVUsQ0FBQ25DLElBQUksQ0FBQztZQUN2QixDQUFDO1lBRUQsTUFBTXFJLFVBQVUsR0FBRzNKLEtBQUssQ0FBQzJCLGFBQWEsQ0FBQ0YsR0FBRyxDQUFDSCxJQUFJLENBQUNJLEVBQUUsQ0FBQztZQUVuRCxPQUNDc0MsTUFBQSxDQUFBbkIsT0FBQSxDQUFBdUIsYUFBQTtjQUFJd0YsR0FBRyxFQUFFdEksSUFBSSxDQUFDSSxFQUFFO2NBQUUyQyxTQUFTLEVBQUUsbUJBQW1Ca0YsWUFBWSxJQUFJLFVBQVUsRUFBRTtjQUFFMUIsT0FBTyxFQUFFNkI7WUFBYSxHQUNuRzFGLE1BQUEsQ0FBQW5CLE9BQUEsQ0FBQXVCLGFBQUE7Y0FBTUMsU0FBUyxFQUFDO1lBQW1DLEdBQUUvQyxJQUFJLENBQUNpQyxJQUFJLENBQVEsRUFDckVvRyxVQUFVLElBQUkzRixNQUFBLENBQUFuQixPQUFBLENBQUF1QixhQUFBLENBQUNpRSxNQUFBLENBQUF3QixJQUFJO2NBQUN2RSxJQUFJLEVBQUM7WUFBTyxFQUFHLEVBQ25DaUUsWUFBWSxJQUNadkYsTUFBQSxDQUFBbkIsT0FBQSxDQUFBdUIsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBYSxHQUMzQkwsTUFBQSxDQUFBbkIsT0FBQSxDQUFBdUIsYUFBQSxlQUFPYSxLQUFLLENBQUNRLE9BQU8sQ0FBQ2xFLFFBQVEsQ0FBUSxFQUNyQ3lDLE1BQUEsQ0FBQW5CLE9BQUEsQ0FBQXVCLGFBQUEsQ0FBQ2lFLE1BQUEsQ0FBQXdCLElBQUk7Y0FBQ3ZFLElBQUksRUFBQyxPQUFPO2NBQUNqQixTQUFTLEVBQUM7WUFBZSxFQUFHLENBRWhELENBQ0c7VUFFUCxDQUFDO1VBQUNoRSxPQUFBLENBQUE2SSxJQUFBLEdBQUFBLElBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDcENGLElBQUFsRixNQUFBLEdBQUFyRSxPQUFBO1VBQ0EsSUFBQXFHLE1BQUEsR0FBQXJHLE9BQUE7VUFDQSxJQUFBbUssTUFBQSxHQUFBbkssT0FBQTtVQUNBLElBQUFtRixRQUFBLEdBQUFuRixPQUFBO1VBQ0EsSUFBQWtGLFdBQUEsR0FBQWxGLE9BQUE7VUFDQSxJQUFBb0ssTUFBQSxHQUFBcEssT0FBQTtVQUNBLElBQUF1RSxLQUFBLEdBQUF2RSxPQUFBO1VBQ00sU0FBVTJFLElBQUlBLENBQUE7WUFDbkIsTUFBTTtjQUFFdEUsS0FBSztjQUFFaUY7WUFBSyxDQUFFLEdBQUcsSUFBQUgsUUFBQSxDQUFBSCxnQkFBZ0IsR0FBRTtZQUMzQyxNQUFNLENBQUNoRSxLQUFLLEVBQUVxSixRQUFRLENBQUMsR0FBR2hHLE1BQUEsQ0FBQW5CLE9BQUssQ0FBQzJELFFBQVEsQ0FBQ3hHLEtBQUssQ0FBQ2EsTUFBTSxDQUFDO1lBRXRELElBQUFtRixNQUFBLENBQUFhLFNBQVMsRUFBQyxDQUFDN0csS0FBSyxDQUFDLEVBQUUsTUFBTWdLLFFBQVEsQ0FBQ2hLLEtBQUssQ0FBQ2EsTUFBTSxDQUFDLENBQUM7WUFFaEQsTUFBTW9KLFFBQVEsR0FBRyxNQUFNQyxLQUFLLElBQUc7Y0FDOUJBLEtBQUssQ0FBQ0MsY0FBYyxFQUFFO2NBQ3RCRCxLQUFLLENBQUNFLGVBQWUsRUFBRTtjQUN2QixJQUFJO2dCQUNILE1BQU12RyxJQUFJLEdBQUcsTUFBTTdELEtBQUssQ0FBQzBELFNBQVMsRUFBRTtnQkFDcENxRyxNQUFBLENBQUFNLEtBQUssQ0FBQ0MsT0FBTyxDQUFDLGtDQUFrQyxDQUFDO2VBQ2pELENBQUMsT0FBTy9ILENBQUMsRUFBRTtnQkFDWHdILE1BQUEsQ0FBQU0sS0FBSyxDQUFDdEosS0FBSyxDQUFDLGtDQUFrQyxDQUFDOztZQUVqRCxDQUFDO1lBRUQsT0FDQ2lELE1BQUEsQ0FBQW5CLE9BQUEsQ0FBQXVCLGFBQUEsQ0FBQUosTUFBQSxDQUFBbkIsT0FBQSxDQUFBa0UsUUFBQSxRQUNDL0MsTUFBQSxDQUFBbkIsT0FBQSxDQUFBdUIsYUFBQSxDQUFDRixLQUFBLENBQUFJLElBQU87Y0FBQ2lHLEtBQUssRUFBRSxFQUFFO2NBQUU1SixLQUFLLEVBQUVBLEtBQUs7Y0FBRTRELE9BQU8sRUFBRXVGLE1BQUEsQ0FBQVosSUFBSTtjQUFFN0UsU0FBUyxFQUFDO1lBQXlCLEVBQUcsRUFFdkZMLE1BQUEsQ0FBQW5CLE9BQUEsQ0FBQXVCLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQWtELEdBQ2hFTCxNQUFBLENBQUFuQixPQUFBLENBQUF1QixhQUFBLENBQUNTLFdBQUEsQ0FBQStDLE1BQU07Y0FDTnRDLElBQUksRUFBQyxnQkFBZ0I7Y0FDckJ3QyxPQUFPLEVBQUMsU0FBUztjQUNqQnpELFNBQVMsRUFBQyw4QkFBOEI7Y0FDeEN3RCxPQUFPLEVBQUVvQyxRQUFRO2NBQ2pCbEMsUUFBUSxFQUFFL0gsS0FBSyxDQUFDMkIsYUFBYSxDQUFDb0IsSUFBSSxHQUFHO1lBQUMsR0FFckNrQyxLQUFLLENBQUNRLE9BQU8sQ0FBQ3VDLE1BQU0sQ0FDYixDQUNKLENBQ0o7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN6Q0EsSUFBQWhFLE1BQUEsR0FBQXJFLE9BQUE7VUFDQSxJQUFBb0YsR0FBQSxHQUFBcEYsT0FBQTtVQUNBLElBQUE2SyxhQUFBLEdBQUE3SyxPQUFBO1VBQ0EsSUFBQStJLE1BQUEsR0FBQS9JLE9BQUE7VUFDQSxJQUFBOEssT0FBQSxHQUFBOUssT0FBQTtVQUNBLElBQUFtRixRQUFBLEdBQUFuRixPQUFBO1VBQ0EsSUFBQWtGLFdBQUEsR0FBQWxGLE9BQUE7VUFDQSxJQUFBK0ssZUFBQSxHQUFBL0ssT0FBQTtVQUNBLElBQUFxRyxNQUFBLEdBQUFyRyxPQUFBO1VBQ0EsSUFBQWdMLE9BQUEsR0FBQWhMLE9BQUE7VUFFQSxJQUFBaUwsY0FBQSxHQUFBakwsT0FBQTtVQUNBLElBQUFhLFdBQUEsR0FBQWIsT0FBQTtVQUNBLElBQUFrTCxPQUFBLEdBQUFsTCxPQUFBO1VBRU87VUFBVSxTQUNSUyxJQUFJQSxDQUFDO1lBQUVKO1VBQUssQ0FBMkI7WUFDL0MsTUFBTSxDQUFDOEssVUFBVSxFQUFFN0YsS0FBSyxDQUFDLEdBQUcsSUFBQTBGLE9BQUEsQ0FBQUksUUFBUSxFQUFDTCxlQUFBLENBQUFNLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDO1lBQ3RELE1BQU0sQ0FBQzNJLEtBQUssRUFBRXNHLFFBQVEsQ0FBQyxHQUFHLElBQUE1RSxNQUFBLENBQUF3QyxRQUFRLEVBQVV4RyxLQUFLLENBQUNzQyxLQUFLLENBQUM7WUFDeEQsTUFBTSxDQUFDRCxRQUFRLEVBQUVzRyxXQUFXLENBQUMsR0FBRyxJQUFBM0UsTUFBQSxDQUFBd0MsUUFBUSxFQUFVeEcsS0FBSyxDQUFDcUMsUUFBUSxDQUFDO1lBQ2pFLE1BQU0sQ0FBQzZJLFVBQVUsRUFBRUMsYUFBYSxDQUFDLEdBQUcsSUFBQW5ILE1BQUEsQ0FBQXdDLFFBQVEsRUFBU3hHLEtBQUssQ0FBQ1csS0FBSyxDQUFDcUksTUFBTSxDQUFDO1lBRXhFLElBQUFoRCxNQUFBLENBQUFhLFNBQVMsRUFBQyxDQUFDN0csS0FBSyxDQUFDLEVBQUUsTUFBSztjQUN2QjRJLFFBQVEsQ0FBQzVJLEtBQUssQ0FBQ3NDLEtBQUssQ0FBQztjQUNyQnFHLFdBQVcsQ0FBQzNJLEtBQUssQ0FBQ3FDLFFBQVEsQ0FBQztjQUMzQjhJLGFBQWEsQ0FBQ25MLEtBQUssQ0FBQ1csS0FBSyxDQUFDcUksTUFBTSxDQUFDO1lBQ2xDLENBQUMsQ0FBQztZQUVGLElBQUksQ0FBQzFHLEtBQUssSUFBSSxDQUFDd0ksVUFBVSxJQUFJLENBQUN0SyxXQUFBLENBQUFNLFVBQVUsQ0FBQ3dCLEtBQUssRUFBRSxPQUFPMEIsTUFBQSxDQUFBbkIsT0FBQSxDQUFBdUIsYUFBQSxDQUFDUyxXQUFBLENBQUF1RyxhQUFhLE9BQUc7WUFFeEUsTUFBTUMsV0FBVyxHQUFHSCxVQUFVLEdBQUcsQ0FBQyxHQUFHeEMsTUFBQSxDQUFBMUQsU0FBUyxHQUFHNEYsY0FBQSxDQUFBekcsY0FBYztZQUUvRCxPQUNDSCxNQUFBLENBQUFuQixPQUFBLENBQUF1QixhQUFBLENBQUNVLFFBQUEsQ0FBQUwsYUFBYSxDQUFDNkcsUUFBUTtjQUN0QkMsS0FBSyxFQUFFO2dCQUNOdEcsS0FBSztnQkFDTGpGLEtBQUs7Z0JBQ0xxQyxRQUFRO2dCQUNSNkk7O1lBQ0EsR0FFRGxILE1BQUEsQ0FBQW5CLE9BQUEsQ0FBQXVCLGFBQUEsQ0FBQ29HLGFBQUEsQ0FBQWdCLFlBQVk7Y0FDWkMsVUFBVSxFQUFFLENBQ1gsQ0FBQ1osT0FBQSxDQUFBaEksT0FBTSxDQUFDNkksTUFBTSxDQUFDQyxRQUFRLEVBQUUsR0FBRyxDQUFDLEVBQzdCLENBQUMsWUFBWSxFQUFFLEVBQUUsQ0FBQztZQUNsQixFQUNBLEVBQ0YzSCxNQUFBLENBQUFuQixPQUFBLENBQUF1QixhQUFBLENBQUNXLEdBQUEsQ0FBQTZHLGFBQWEsUUFDYjVILE1BQUEsQ0FBQW5CLE9BQUEsQ0FBQXVCLGFBQUEsQ0FBQ3FHLE9BQUEsQ0FBQXhFLE1BQU0sT0FBRyxFQUNWakMsTUFBQSxDQUFBbkIsT0FBQSxDQUFBdUIsYUFBQSxDQUFDaUgsV0FBVztjQUFDckwsS0FBSyxFQUFFQTtZQUFLLEVBQUksQ0FDZCxDQUNRO1VBRTNCOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3JEQSxJQUFBZ0UsTUFBQSxHQUFBckUsT0FBQTtVQUNBLElBQUFtRixRQUFBLEdBQUFuRixPQUFBO1VBQ0EsSUFBQW9GLEdBQUEsR0FBQXBGLE9BQUE7VUFFYyxTQUFVa00sbUJBQW1CQSxDQUFDO1lBQUV2SztVQUFJLENBQUU7WUFDbkQsTUFBTTtjQUFFMkQsS0FBSztjQUFFakY7WUFBSyxDQUFFLEdBQUcsSUFBQThFLFFBQUEsQ0FBQUgsZ0JBQWdCLEdBQUU7WUFFM0MsTUFBTW1ILFFBQVEsR0FBRyxNQUFBQSxDQUFBLEtBQVc7Y0FDM0IsTUFBTTlMLEtBQUssQ0FBQ3dDLE1BQU0sQ0FBQ2xCLElBQUksQ0FBQztZQUN6QixDQUFDO1lBRUQsT0FDQzBDLE1BQUEsQ0FBQW5CLE9BQUEsQ0FBQXVCLGFBQUE7Y0FBU0MsU0FBUyxFQUFDO1lBQXNCLEdBQ3hDTCxNQUFBLENBQUFuQixPQUFBLENBQUF1QixhQUFBLENBQUNXLEdBQUEsQ0FBQWdILGFBQWE7Y0FBQ0MsU0FBUyxFQUFFL0csS0FBSyxFQUFFUSxPQUFPLEVBQUVqRCxNQUFNO2NBQUU4QyxJQUFJLEVBQUMsUUFBUTtjQUFDMkcsU0FBUyxFQUFFSDtZQUFRLEVBQUksQ0FDOUU7VUFFWjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNoQkEsSUFBQTlILE1BQUEsR0FBQXJFLE9BQUE7VUFDQSxJQUFBb0YsR0FBQSxHQUFBcEYsT0FBQTtVQUNBLElBQUF1TSxNQUFBLEdBQUF2TSxPQUFBO1VBQ0EsSUFBQXdNLFFBQUEsR0FBQXhNLE9BQUE7VUFFTSxTQUFVd0QsU0FBU0EsQ0FBQztZQUFFVTtVQUFJLENBQUU7WUFDakMsT0FDQ0csTUFBQSxDQUFBbkIsT0FBQSxDQUFBdUIsYUFBQSxDQUFDVyxHQUFBLENBQUFxSCxJQUFJLFFBQ0pwSSxNQUFBLENBQUFuQixPQUFBLENBQUF1QixhQUFBLENBQUNXLEdBQUEsQ0FBQXNILFdBQVcsUUFDWHJJLE1BQUEsQ0FBQW5CLE9BQUEsQ0FBQXVCLGFBQUEsQ0FBQzhILE1BQUEsQ0FBQXJKLE9BQVU7Y0FBQ3ZCLElBQUksRUFBRXVDO1lBQUksRUFBSSxDQUNiLEVBQ2RHLE1BQUEsQ0FBQW5CLE9BQUEsQ0FBQXVCLGFBQUEsQ0FBQ1csR0FBQSxDQUFBdUgsVUFBVSxRQUNWdEksTUFBQSxDQUFBbkIsT0FBQSxDQUFBdUIsYUFBQSxDQUFDK0gsUUFBQSxDQUFBdEosT0FBbUI7Y0FBQ3ZCLElBQUksRUFBRXVDO1lBQUksRUFBSSxDQUN2QixDQUNQO1VBRVQ7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDaEJBLElBQUFHLE1BQUEsR0FBQXJFLE9BQUE7VUFDQSxJQUFBa0YsV0FBQSxHQUFBbEYsT0FBQTtVQUNBLElBQUEwSSxNQUFBLEdBQUExSSxPQUFBO1VBQ0EsSUFBQW1GLFFBQUEsR0FBQW5GLE9BQUE7VUFFYyxTQUFVNE0sVUFBVUEsQ0FBQztZQUFFakw7VUFBSSxDQUFFO1lBQzFDLE1BQU07Y0FBRTJEO1lBQUssQ0FBRSxHQUFHLElBQUFILFFBQUEsQ0FBQUgsZ0JBQWdCLEdBQUU7WUFFcEMsT0FDQ1gsTUFBQSxDQUFBbkIsT0FBQSxDQUFBdUIsYUFBQSxrQkFDQ0osTUFBQSxDQUFBbkIsT0FBQSxDQUFBdUIsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBeUQsR0FDdkVMLE1BQUEsQ0FBQW5CLE9BQUEsQ0FBQXVCLGFBQUEsQ0FBQ1MsV0FBQSxDQUFBVSxJQUFJO2NBQUNDLElBQUksRUFBRSxvQkFBb0JsRSxJQUFJLENBQUNJLEVBQUU7WUFBRSxHQUN4Q3NDLE1BQUEsQ0FBQW5CLE9BQUEsQ0FBQXVCLGFBQUEsYUFBSzlDLElBQUksQ0FBQ2lDLElBQUksQ0FBTSxDQUNkLEVBQ05qQyxJQUFJLEVBQUVnQyxRQUFRLEVBQUU1QixFQUFFLElBQUlzQyxNQUFBLENBQUFuQixPQUFBLENBQUF1QixhQUFBLENBQUNpRSxNQUFBLENBQUFFLFVBQVU7Y0FBQ2xELEtBQUssRUFBRUosS0FBSyxDQUFDUSxPQUFPLENBQUMrRyxRQUFRO2NBQUVsSCxJQUFJLEVBQUM7WUFBUSxFQUFHLENBQzdFLEVBRU50QixNQUFBLENBQUFuQixPQUFBLENBQUF1QixhQUFBLGVBQU85QyxJQUFJLENBQUNrQyxXQUFXLENBQVEsQ0FDdEI7VUFFWiIsImlnbm9yZUxpc3QiOltdfQ==