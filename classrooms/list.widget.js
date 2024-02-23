System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.4/page", "@beyond-js/reactive@1.1.11/model", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/ailearn-app@0.0.24/model/gclassroom", "dayjs@1.11.10", "react@18.2.0", "pragmate-ui@0.0.6/list", "pragmate-ui@0.0.6/components", "@aimpact/ailearn-app@0.0.24/components/ui", "@aimpact/chat-sdk@1.0.0/session", "pragmate-ui@0.0.6/alert", "pragmate-ui@0.0.6/link", "pragmate-ui@0.0.6/modal", "@beyond-js/react-18-widgets@1.0.4/hooks", "pragmate-ui@0.0.6/icons", "pragmate-ui@0.0.6/toast", "@aimpact/chat@1.0.1/shared/components", "@aimpact/chat@1.0.1/shared/hooks"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
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
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/media-manager", "1.0.0"], ["@bgroup/wise-form", "0.0.4"], ["@beyond-js/reactive", "1.1.11"], ["pragmate-ui", "0.0.6"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@bgroup/http-suite", "1.0.3"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["framer-motion", "10.17.8"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.24"], ["@aimpact/ailearn-app", "0.0.24"]]);
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@aimpact/ailearn-sdk/core', dependency_5], ['@aimpact/ailearn-app/model/gclassroom', dependency_6], ['dayjs', dependency_7], ['react', dependency_8], ['pragmate-ui/list', dependency_9], ['pragmate-ui/components', dependency_10], ['@aimpact/ailearn-app/components/ui', dependency_11], ['@aimpact/chat-sdk/session', dependency_12], ['pragmate-ui/alert', dependency_13], ['pragmate-ui/link', dependency_14], ['pragmate-ui/modal', dependency_15], ['@beyond-js/react-18-widgets/hooks', dependency_16], ['pragmate-ui/icons', dependency_17], ['pragmate-ui/toast', dependency_18], ['@aimpact/chat/shared/components', dependency_19], ['@aimpact/chat/shared/hooks', dependency_20]]);
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
        hash: 4202934757,
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
              // fetching={loading}
              icon: "google",
              variant: "primary",
              disabled: disableWithoutAuth
            }, texts.actions.import), _react.default.createElement(_link.Link, {
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
        hash: 1244370061,
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
            }, _react.default.createElement(_ui.PageHeader, {
              breadcrumb: [['AI-Learn', '/'], ['Classrooms', '']]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3IiwiZXhwb3J0cyIsIl9tb2RlbCIsIl9jb3JlIiwiX2djbGFzc3Jvb20iLCJfZGF5anMiLCJSZWFjdGl2ZU1vZGVsIiwiaXRlbXMiLCJtb2RlbCIsImdJdGVtcyIsImdjbGFzc3Jvb20iLCJlcnJvciIsImNvZGUiLCJjb25zb2xlIiwibG9nIiwiY2xhc3NlcyIsInZhbHVlcyIsIm1hcCIsIml0ZW0iLCJpbXBvcnRlZCIsImdvb2dsZUNsYXNzcm9vbXNJZHMiLCJoYXMiLCJpZCIsIml0ZW1zU2VsZWN0ZWQiLCJNYXAiLCJjb25zdHJ1Y3RvciIsIkNsYXNzcm9vbXMiLCJnbG9iYWxUaGlzIiwiYyIsIm9uIiwidHJpZ2dlckV2ZW50IiwiaW5pdCIsImxvYWQiLCJmZXRjaGluZyIsInJlYWR5IiwiZSIsImRlbGV0ZSIsImxvYWRDbGFzc2VzIiwiY291cnNlcyIsIiNpbml0IiwiY3VycmVudFRpbWUiLCJkZWZhdWx0IiwibGFzdENsYXNzZXNRdWVyeVRpbWUiLCJzaXplIiwiZGlmZiIsInNhdmVJdGVtVG9JbXBvcnQiLCJnbGNhc3Nyb29tIiwiQ2xhc3Nyb29tIiwiaXNSZWFkeSIsInNldCIsImV4dGVybmFsIiwibmFtZSIsImRlc2NyaXB0aW9uIiwidG9nZ2xlSXRlbSIsInNhdmVJdGVtcyIsImdldFByb3BlcnRpZXMiLCJzdGF0dXMiLCJkYXRhIiwiaW1wb3J0RnJvbUdvb2dsZUNsYXNzcm9vbSIsIkVycm9yIiwiX3JlYWN0IiwiX2l0ZW0iLCJfbGlzdCIsIkNsYXNzcm9vbXNMaXN0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIkxpc3QiLCJjb250cm9sIiwiQ2xhc3Nyb29tQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDbGFzc3Jvb21Db250ZXh0IiwidXNlQ29udGV4dCIsIl9jb21wb25lbnRzIiwiX2NvbnRleHQiLCJfdWkiLCJFbXB0eUxpc3QiLCJ0ZXh0cyIsIkVtcHR5Q2FyZCIsInRleHQiLCJlbXB0eSIsInRpdGxlIiwiaWNvbiIsIkxpbmsiLCJocmVmIiwiYWN0aW9ucyIsImNyZWF0ZSIsIl9zZXNzaW9uIiwiX2FsZXJ0IiwiX2xpbmsiLCJfbW9kYWwiLCJfaW1wb3J0IiwiX2hvb2tzIiwiSGVhZGVyIiwidXNlck5hbWUiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJkaXNwbGF5TmFtZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwidXNlU3RhdGUiLCJzaG93Iiwic2V0U2hvdyIsImRpc2FibGVXaXRob3V0QXV0aCIsImF1dGhvcml6ZWQiLCJ1c2VCaW5kZXIiLCJoYW5kbGVNb2RhbCIsIkZyYWdtZW50IiwiSGVhZGVyQ2FyZCIsIndlbGNvbWUiLCJtZXNzYWdlIiwicmVwbGFjZSIsImFsdCIsImltYWdlIiwiYWN0aW9uSW5mbyIsIkFsZXJ0IiwidHlwZSIsImV4dHJhSW5mbyIsIlN1YkRpdmlkZXIiLCJ0aXRsZVRleHQiLCJCdXR0b24iLCJvbkNsaWNrIiwidmFyaWFudCIsImRpc2FibGVkIiwiaW1wb3J0IiwiTW9kYWwiLCJvbkNsb3NlIiwiSW1wb3J0IiwiX2ljb25zIiwiRW1wdHlFeHBsb3JlciIsIkljb25CdXR0b24iLCJ0aXRsZUltcG9ydCIsImxhYmVsSW1wb3J0IiwiX2VtcHR5Iiwic2V0RmV0Y2hpbmciLCJzZXRSZWFkeSIsIlNwaW5uZXIiLCJhY3RpdmUiLCJDb250cm9sIiwibGVuZ3RoIiwiUHJvY2Vzc0NvbnRhaW5lciIsIkl0ZW0iLCJjaGVja2VkIiwic2V0Q2hlY2tlZCIsIml0ZW1zU2F2ZWQiLCJzZXRJdGVtc1NhdmVkIiwiYWxyZWFkeUV4aXN0Iiwic29tZSIsIm9iaiIsInVwZGF0ZUltcG9ydHMiLCJpc1NlbGVjdGVkIiwia2V5IiwiSWNvbiIsIl9pdGVtcyIsIl90b2FzdCIsInNldEl0ZW1zIiwic2F2ZUl0ZW0iLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwidG9hc3QiLCJzdWNjZXNzIiwic3BlY3MiLCJfaGVhZGVyIiwiX2JleW9uZF9jb250ZXh0IiwiX2hvb2tzMiIsIl9jbGFzc3Jvb21MaXN0IiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidG90YWxJdGVtcyIsInNldFRvdGFsSXRlbXMiLCJQcmVsb2FkU2NyZWVuIiwiTGlzdENvbnRyb2wiLCJQcm92aWRlciIsInZhbHVlIiwiUGFnZUhlYWRlciIsImJyZWFkY3J1bWIiLCJQYWdlQ29udGFpbmVyIiwiTGVhcm5pbmdJdGVtQWN0aW9ucyIsIm9uRGVsZXRlIiwiQ29uZmlybUFjdGlvbiIsInRleHRQb3BVcCIsIm9uQ29uZmlybSIsIl90aXRsZSIsIl9hY3Rpb25zIiwiQ2FyZCIsIkNhcmRDb250ZW50IiwiQ2FyZEZvb3RlciIsIk1vZHVsZURhdGEiLCJnVG9vbHRpcCJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NsYXNzcm9vbS1saXN0LnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2VtcHR5LnRzeCIsIi90cy92aWV3cy9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2ltcG9ydC9lbXB0eS50c3giLCIvdHMvdmlld3MvaW1wb3J0L2luZGV4LnRzeCIsIi90cy92aWV3cy9pbXBvcnQvaXRlbXMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2ltcG9ydC9saXN0LnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvaXRlbS9hY3Rpb25zLnRzeCIsIi90cy92aWV3cy9pdGVtL2luZGV4LnRzeCIsIi90cy92aWV3cy9pdGVtL3RpdGxlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVs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