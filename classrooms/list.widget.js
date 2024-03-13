System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.4/page", "@beyond-js/reactive@1.1.11/model", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/ailearn-app@0.0.24/model/gclassroom", "dayjs@1.11.10", "react@18.2.0", "pragmate-ui@0.0.6/list", "pragmate-ui@0.0.6/components", "@aimpact/ailearn-app@0.0.24/components/ui", "@aimpact/chat-sdk@1.0.0/session", "pragmate-ui@0.0.6/alert", "pragmate-ui@0.0.6/link", "pragmate-ui@0.0.6/modal", "@beyond-js/react-18-widgets@1.0.4/hooks", "pragmate-ui@0.0.6/icons", "pragmate-ui@0.0.6/toast", "@aimpact/chat@1.0.1/shared/components", "@aimpact/chat@1.0.1/shared/hooks", "@aimpact/ailearn-app@0.0.24/config"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    View: void 0
  });
  return {
    setters: [function (_beyondJsWidgets015Render) {
      dependency_0 = _beyondJsWidgets015Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_beyondJsReact18Widgets104Page) {
      dependency_3 = _beyondJsReact18Widgets104Page;
    }, function (_beyondJsReactive1111Model) {
      dependency_4 = _beyondJsReactive1111Model;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_5 = _aimpactAilearnSdk100Core;
    }, function (_aimpactAilearnApp0024ModelGclassroom) {
      dependency_6 = _aimpactAilearnApp0024ModelGclassroom;
    }, function (_dayjs2) {
      dependency_7 = _dayjs2;
    }, function (_react2) {
      dependency_8 = _react2;
    }, function (_pragmateUi006List) {
      dependency_9 = _pragmateUi006List;
    }, function (_pragmateUi006Components) {
      dependency_10 = _pragmateUi006Components;
    }, function (_aimpactAilearnApp0024ComponentsUi) {
      dependency_11 = _aimpactAilearnApp0024ComponentsUi;
    }, function (_aimpactChatSdk100Session) {
      dependency_12 = _aimpactChatSdk100Session;
    }, function (_pragmateUi006Alert) {
      dependency_13 = _pragmateUi006Alert;
    }, function (_pragmateUi006Link) {
      dependency_14 = _pragmateUi006Link;
    }, function (_pragmateUi006Modal) {
      dependency_15 = _pragmateUi006Modal;
    }, function (_beyondJsReact18Widgets104Hooks) {
      dependency_16 = _beyondJsReact18Widgets104Hooks;
    }, function (_pragmateUi006Icons) {
      dependency_17 = _pragmateUi006Icons;
    }, function (_pragmateUi006Toast) {
      dependency_18 = _pragmateUi006Toast;
    }, function (_aimpactChat101SharedComponents) {
      dependency_19 = _aimpactChat101SharedComponents;
    }, function (_aimpactChat101SharedHooks) {
      dependency_20 = _aimpactChat101SharedHooks;
    }, function (_aimpactAilearnApp0024Config) {
      dependency_21 = _aimpactAilearnApp0024Config;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.11"], ["pragmate-ui", "0.0.6"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@bgroup/http-suite", "1.0.3"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["framer-motion", "10.17.8"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.24"], ["@aimpact/ailearn-app", "0.0.24"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.24/classrooms/list",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@aimpact/ailearn-sdk/core', dependency_5], ['@aimpact/ailearn-app/model/gclassroom', dependency_6], ['dayjs', dependency_7], ['react', dependency_8], ['pragmate-ui/list', dependency_9], ['pragmate-ui/components', dependency_10], ['@aimpact/ailearn-app/components/ui', dependency_11], ['@aimpact/chat-sdk/session', dependency_12], ['pragmate-ui/alert', dependency_13], ['pragmate-ui/link', dependency_14], ['pragmate-ui/modal', dependency_15], ['@beyond-js/react-18-widgets/hooks', dependency_16], ['pragmate-ui/icons', dependency_17], ['pragmate-ui/toast', dependency_18], ['@aimpact/chat/shared/components', dependency_19], ['@aimpact/chat/shared/hooks', dependency_20], ['@aimpact/ailearn-app/config', dependency_21]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-classroom-list",
        "vspecifier": "@aimpact/ailearn-app@0.0.24/classrooms/list.widget",
        "is": "page",
        "route": "/classrooms/list",
        "layout": "general-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.24/classrooms/list.widget');
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
        hash: 113171571,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useClassroomContext = exports.ClassroomContext = void 0;
          var _react = require("react");
          const ClassroomContext = exports.ClassroomContext = _react.default.createContext({});
          const useClassroomContext = () => _react.default.useContext(ClassroomContext);
          exports.useClassroomContext = useClassroomContext;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/empty
      *****************************/

      ims.set('./views/empty', {
        hash: 1312521630,
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
            } = (0, _context.useClassroomContext)();
            return _react.default.createElement(_ui.EmptyCard, {
              text: texts.empty.title,
              description: texts.empty.description,
              icon: "edit"
            }, _react.default.createElement("div", {
              className: "actions flex-container flex-center"
            }, _react.default.createElement(_components.Link, {
              href: "/classroom/management/new",
              className: "grow btn btn-primary"
            }, texts.actions.create)));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./views/header
      ******************************/

      ims.set('./views/header', {
        hash: 2096256495,
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
            } = (0, _context.useClassroomContext)();
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
              href: `/classroom/management/new`
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
        hash: 3189501106,
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
            } = (0, _context.useClassroomContext)();
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
        hash: 2996633299,
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
            } = (0, _context.useClassroomContext)();
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
        hash: 1110668035,
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
            } = (0, _context.useClassroomContext)();
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
        hash: 4061994566,
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
            } = (0, _context.useClassroomContext)();
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
        hash: 1452315950,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
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
            return _react.default.createElement(_context.ClassroomContext.Provider, {
              value: {
                texts,
                store,
                fetching,
                totalItems
              }
            }, _react.default.createElement(_ui.NavbarHeader, {
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
        hash: 3990689806,
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
            } = (0, _context.useClassroomContext)();
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
        hash: 531884382,
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
            } = (0, _context.useClassroomContext)();
            return _react.default.createElement("section", null, _react.default.createElement("div", {
              className: "title-card__container flex-container flex-space-between"
            }, _react.default.createElement(_components.Link, {
              href: `/classroom/management/${item.id}`
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3IiwiZXhwb3J0cyIsIl9tb2RlbCIsIl9jb3JlIiwiX2djbGFzc3Jvb20iLCJfZGF5anMiLCJSZWFjdGl2ZU1vZGVsIiwiaXRlbXMiLCJtb2RlbCIsImdJdGVtcyIsImdjbGFzc3Jvb20iLCJlcnJvciIsImNvZGUiLCJjb25zb2xlIiwibG9nIiwiY2xhc3NlcyIsInZhbHVlcyIsIm1hcCIsIml0ZW0iLCJpbXBvcnRlZCIsImdvb2dsZUNsYXNzcm9vbXNJZHMiLCJoYXMiLCJpZCIsIml0ZW1zU2VsZWN0ZWQiLCJNYXAiLCJjb25zdHJ1Y3RvciIsIkNsYXNzcm9vbXMiLCJnbG9iYWxUaGlzIiwiYyIsIm9uIiwidHJpZ2dlckV2ZW50IiwiaW5pdCIsImxvYWQiLCJmZXRjaGluZyIsInJlYWR5IiwiZSIsImRlbGV0ZSIsImxvYWRDbGFzc2VzIiwiY291cnNlcyIsIiNpbml0IiwiY3VycmVudFRpbWUiLCJkZWZhdWx0IiwibGFzdENsYXNzZXNRdWVyeVRpbWUiLCJzaXplIiwiZGlmZiIsInNhdmVJdGVtVG9JbXBvcnQiLCJnbGNhc3Nyb29tIiwiQ2xhc3Nyb29tIiwiaXNSZWFkeSIsInNldCIsImV4dGVybmFsIiwibmFtZSIsImRlc2NyaXB0aW9uIiwidG9nZ2xlSXRlbSIsInNhdmVJdGVtcyIsImdldFByb3BlcnRpZXMiLCJzdGF0dXMiLCJkYXRhIiwiaW1wb3J0RnJvbUdvb2dsZUNsYXNzcm9vbSIsIkVycm9yIiwiX3JlYWN0IiwiX2l0ZW0iLCJfbGlzdCIsIkNsYXNzcm9vbXNMaXN0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIkxpc3QiLCJjb250cm9sIiwiQ2xhc3Nyb29tQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDbGFzc3Jvb21Db250ZXh0IiwidXNlQ29udGV4dCIsIl9jb21wb25lbnRzIiwiX2NvbnRleHQiLCJfdWkiLCJFbXB0eUxpc3QiLCJ0ZXh0cyIsIkVtcHR5Q2FyZCIsInRleHQiLCJlbXB0eSIsInRpdGxlIiwiaWNvbiIsIkxpbmsiLCJocmVmIiwiYWN0aW9ucyIsImNyZWF0ZSIsIl9zZXNzaW9uIiwiX2FsZXJ0IiwiX2xpbmsiLCJfbW9kYWwiLCJfaW1wb3J0IiwiX2hvb2tzIiwiSGVhZGVyIiwidXNlck5hbWUiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJkaXNwbGF5TmFtZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwidXNlU3RhdGUiLCJzaG93Iiwic2V0U2hvdyIsImRpc2FibGVXaXRob3V0QXV0aCIsImF1dGhvcml6ZWQiLCJ1c2VCaW5kZXIiLCJoYW5kbGVNb2RhbCIsIkZyYWdtZW50IiwiSGVhZGVyQ2FyZCIsIndlbGNvbWUiLCJtZXNzYWdlIiwicmVwbGFjZSIsImFsdCIsImltYWdlIiwiYWN0aW9uSW5mbyIsIkFsZXJ0IiwidHlwZSIsImV4dHJhSW5mbyIsIlN1YkRpdmlkZXIiLCJ0aXRsZVRleHQiLCJCdXR0b24iLCJvbkNsaWNrIiwidmFyaWFudCIsImRpc2FibGVkIiwiaW1wb3J0Iiwiam9pbiIsIk1vZGFsIiwib25DbG9zZSIsIkltcG9ydCIsIl9pY29ucyIsIkVtcHR5RXhwbG9yZXIiLCJJY29uQnV0dG9uIiwidGl0bGVJbXBvcnQiLCJsYWJlbEltcG9ydCIsIl9lbXB0eSIsInNldEZldGNoaW5nIiwic2V0UmVhZHkiLCJTcGlubmVyIiwiYWN0aXZlIiwiQ29udHJvbCIsImxlbmd0aCIsIlByb2Nlc3NDb250YWluZXIiLCJJdGVtIiwiY2hlY2tlZCIsInNldENoZWNrZWQiLCJpdGVtc1NhdmVkIiwic2V0SXRlbXNTYXZlZCIsImFscmVhZHlFeGlzdCIsInNvbWUiLCJvYmoiLCJ1cGRhdGVJbXBvcnRzIiwiaXNTZWxlY3RlZCIsImtleSIsIkljb24iLCJfaXRlbXMiLCJfdG9hc3QiLCJzZXRJdGVtcyIsInNhdmVJdGVtIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsInRvYXN0Iiwic3VjY2VzcyIsInNwZWNzIiwiX2hlYWRlciIsIl9iZXlvbmRfY29udGV4dCIsIl9ob29rczIiLCJfY2xhc3Nyb29tTGlzdCIsIl9jb25maWciLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ0b3RhbEl0ZW1zIiwic2V0VG90YWxJdGVtcyIsIlByZWxvYWRTY3JlZW4iLCJMaXN0Q29udHJvbCIsIlByb3ZpZGVyIiwidmFsdWUiLCJOYXZiYXJIZWFkZXIiLCJicmVhZGNydW1iIiwicGFyYW1zIiwiQVBQX05BTUUiLCJQYWdlQ29udGFpbmVyIiwiTGVhcm5pbmdJdGVtQWN0aW9ucyIsIm9uRGVsZXRlIiwiQ29uZmlybUFjdGlvbiIsInRleHRQb3BVcCIsIm9uQ29uZmlybSIsIl90aXRsZSIsIl9hY3Rpb25zIiwiQ2FyZCIsIkNhcmRDb250ZW50IiwiQ2FyZEZvb3RlciIsIk1vZHVsZURhdGEiLCJnVG9vbHRpcCJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NsYXNzcm9vbS1saXN0LnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2VtcHR5LnRzeCIsIi90cy92aWV3cy9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2ltcG9ydC9lbXB0eS50c3giLCIvdHMvdmlld3MvaW1wb3J0L2luZGV4LnRzeCIsIi90cy92aWV3cy9pbXBvcnQvaXRlbXMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2ltcG9ydC9saXN0LnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvaXRlbS9hY3Rpb25zLnRzeCIsIi90cy92aWV3cy9pdGVtL2luZGV4LnRzeCIsIi90cy92aWV3cy9pdGVtL3RpdGxlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxs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