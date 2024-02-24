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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3IiwiZXhwb3J0cyIsIl9tb2RlbCIsIl9jb3JlIiwiX2djbGFzc3Jvb20iLCJfZGF5anMiLCJSZWFjdGl2ZU1vZGVsIiwiaXRlbXMiLCJtb2RlbCIsImdJdGVtcyIsImdjbGFzc3Jvb20iLCJlcnJvciIsImNvZGUiLCJjb25zb2xlIiwibG9nIiwiY2xhc3NlcyIsInZhbHVlcyIsIm1hcCIsIml0ZW0iLCJpbXBvcnRlZCIsImdvb2dsZUNsYXNzcm9vbXNJZHMiLCJoYXMiLCJpZCIsIml0ZW1zU2VsZWN0ZWQiLCJNYXAiLCJjb25zdHJ1Y3RvciIsIkNsYXNzcm9vbXMiLCJnbG9iYWxUaGlzIiwiYyIsIm9uIiwidHJpZ2dlckV2ZW50IiwiaW5pdCIsImxvYWQiLCJmZXRjaGluZyIsInJlYWR5IiwiZSIsImRlbGV0ZSIsImxvYWRDbGFzc2VzIiwiY291cnNlcyIsIiNpbml0IiwiY3VycmVudFRpbWUiLCJkZWZhdWx0IiwibGFzdENsYXNzZXNRdWVyeVRpbWUiLCJzaXplIiwiZGlmZiIsInNhdmVJdGVtVG9JbXBvcnQiLCJnbGNhc3Nyb29tIiwiQ2xhc3Nyb29tIiwiaXNSZWFkeSIsInNldCIsImV4dGVybmFsIiwibmFtZSIsImRlc2NyaXB0aW9uIiwidG9nZ2xlSXRlbSIsInNhdmVJdGVtcyIsImdldFByb3BlcnRpZXMiLCJzdGF0dXMiLCJkYXRhIiwiaW1wb3J0RnJvbUdvb2dsZUNsYXNzcm9vbSIsIkVycm9yIiwiX3JlYWN0IiwiX2l0ZW0iLCJfbGlzdCIsIkNsYXNzcm9vbXNMaXN0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIkxpc3QiLCJjb250cm9sIiwiQ2xhc3Nyb29tQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDbGFzc3Jvb21Db250ZXh0IiwidXNlQ29udGV4dCIsIl9jb21wb25lbnRzIiwiX2NvbnRleHQiLCJfdWkiLCJFbXB0eUxpc3QiLCJ0ZXh0cyIsIkVtcHR5Q2FyZCIsInRleHQiLCJlbXB0eSIsInRpdGxlIiwiaWNvbiIsIkxpbmsiLCJocmVmIiwiYWN0aW9ucyIsImNyZWF0ZSIsIl9zZXNzaW9uIiwiX2FsZXJ0IiwiX2xpbmsiLCJfbW9kYWwiLCJfaW1wb3J0IiwiX2hvb2tzIiwiSGVhZGVyIiwidXNlck5hbWUiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJkaXNwbGF5TmFtZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwidXNlU3RhdGUiLCJzaG93Iiwic2V0U2hvdyIsImRpc2FibGVXaXRob3V0QXV0aCIsImF1dGhvcml6ZWQiLCJ1c2VCaW5kZXIiLCJoYW5kbGVNb2RhbCIsIkZyYWdtZW50IiwiSGVhZGVyQ2FyZCIsIndlbGNvbWUiLCJtZXNzYWdlIiwicmVwbGFjZSIsImFsdCIsImltYWdlIiwiYWN0aW9uSW5mbyIsIkFsZXJ0IiwidHlwZSIsImV4dHJhSW5mbyIsIlN1YkRpdmlkZXIiLCJ0aXRsZVRleHQiLCJCdXR0b24iLCJvbkNsaWNrIiwidmFyaWFudCIsImRpc2FibGVkIiwiaW1wb3J0Iiwiam9pbiIsIk1vZGFsIiwib25DbG9zZSIsIkltcG9ydCIsIl9pY29ucyIsIkVtcHR5RXhwbG9yZXIiLCJJY29uQnV0dG9uIiwidGl0bGVJbXBvcnQiLCJsYWJlbEltcG9ydCIsIl9lbXB0eSIsInNldEZldGNoaW5nIiwic2V0UmVhZHkiLCJTcGlubmVyIiwiYWN0aXZlIiwiQ29udHJvbCIsImxlbmd0aCIsIlByb2Nlc3NDb250YWluZXIiLCJJdGVtIiwiY2hlY2tlZCIsInNldENoZWNrZWQiLCJpdGVtc1NhdmVkIiwic2V0SXRlbXNTYXZlZCIsImFscmVhZHlFeGlzdCIsInNvbWUiLCJvYmoiLCJ1cGRhdGVJbXBvcnRzIiwiaXNTZWxlY3RlZCIsImtleSIsIkljb24iLCJfaXRlbXMiLCJfdG9hc3QiLCJzZXRJdGVtcyIsInNhdmVJdGVtIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsInRvYXN0Iiwic3VjY2VzcyIsInNwZWNzIiwiX2hlYWRlciIsIl9iZXlvbmRfY29udGV4dCIsIl9ob29rczIiLCJfY2xhc3Nyb29tTGlzdCIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInRvdGFsSXRlbXMiLCJzZXRUb3RhbEl0ZW1zIiwiUHJlbG9hZFNjcmVlbiIsIkxpc3RDb250cm9sIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsIlBhZ2VIZWFkZXIiLCJicmVhZGNydW1iIiwiUGFnZUNvbnRhaW5lciIsIkxlYXJuaW5nSXRlbUFjdGlvbnMiLCJvbkRlbGV0ZSIsIkNvbmZpcm1BY3Rpb24iLCJ0ZXh0UG9wVXAiLCJvbkNvbmZpcm0iLCJfdGl0bGUiLCJfYWN0aW9ucyIsIkNhcmQiLCJDYXJkQ29udGVudCIsIkNhcmRGb290ZXIiLCJNb2R1bGVEYXRhIiwiZ1Rvb2x0aXAiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9jbGFzc3Jvb20tbGlzdC50c3giLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9lbXB0eS50c3giLCIvdHMvdmlld3MvaGVhZGVyLnRzeCIsIi90cy92aWV3cy9pbXBvcnQvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2ltcG9ydC9pbmRleC50c3giLCIvdHMvdmlld3MvaW1wb3J0L2l0ZW1zL2luZGV4LnRzeCIsIi90cy92aWV3cy9pbXBvcnQvbGlzdC50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2l0ZW0vYWN0aW9ucy50c3giLCIvdHMvdmlld3MvaXRlbS9pbmRleC50c3giLCIvdHMvdmlld3MvaXRlbS90aXRsZS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxu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