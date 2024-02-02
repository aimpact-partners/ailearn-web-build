System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.3/page", "@beyond-js/reactive@1.1.9/model", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/ailearn-app@0.0.24/model/gclassroom", "dayjs@1.11.10", "react@18.2.0", "pragmate-ui@0.0.6/list", "pragmate-ui@0.0.6/components", "@aimpact/ailearn-app@0.0.24/components/ui", "@aimpact/chat-sdk@1.0.0/session", "pragmate-ui@0.0.6/alert", "pragmate-ui@0.0.6/link", "pragmate-ui@0.0.6/modal", "pragmate-ui@0.0.6/icons", "@beyond-js/react-18-widgets@1.0.3/hooks", "pragmate-ui@0.0.6/toast", "@aimpact/chat@1.0.1/shared/components", "@aimpact/chat@1.0.1/shared/hooks"], function (_export, _context2) {
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
    }, function (_beyondJsReact18Widgets103Page) {
      dependency_3 = _beyondJsReact18Widgets103Page;
    }, function (_beyondJsReactive119Model) {
      dependency_4 = _beyondJsReactive119Model;
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
    }, function (_pragmateUi006Icons) {
      dependency_16 = _pragmateUi006Icons;
    }, function (_beyondJsReact18Widgets103Hooks) {
      dependency_17 = _beyondJsReact18Widgets103Hooks;
    }, function (_pragmateUi006Toast) {
      dependency_18 = _pragmateUi006Toast;
    }, function (_aimpactChat101SharedComponents) {
      dependency_19 = _aimpactChat101SharedComponents;
    }, function (_aimpactChat101SharedHooks) {
      dependency_20 = _aimpactChat101SharedHooks;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.9"], ["pragmate-ui", "0.0.6"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.3"], ["@bgroup/http-suite", "1.0.3"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["framer-motion", "10.17.8"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.24"], ["@aimpact/ailearn-app", "0.0.24"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.24/classroom/list",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@aimpact/ailearn-sdk/core', dependency_5], ['@aimpact/ailearn-app/model/gclassroom', dependency_6], ['dayjs', dependency_7], ['react', dependency_8], ['pragmate-ui/list', dependency_9], ['pragmate-ui/components', dependency_10], ['@aimpact/ailearn-app/components/ui', dependency_11], ['@aimpact/chat-sdk/session', dependency_12], ['pragmate-ui/alert', dependency_13], ['pragmate-ui/link', dependency_14], ['pragmate-ui/modal', dependency_15], ['pragmate-ui/icons', dependency_16], ['@beyond-js/react-18-widgets/hooks', dependency_17], ['pragmate-ui/toast', dependency_18], ['@aimpact/chat/shared/components', dependency_19], ['@aimpact/chat/shared/hooks', dependency_20]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-classroom-list",
        "vspecifier": "@aimpact/ailearn-app@0.0.24/classroom/list.widget",
        "is": "page",
        "route": "/classroom/list",
        "layout": "general-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.24/classroom/list.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 3389289793,
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
            show() {
              this.#store.load();
            }
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 4164809547,
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
            #gItems;
            get gItems() {
              return [..._gclassroom.gclassroom.classes.values()];
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
              this.load();
            }
            async load() {
              try {
                await this.model.load();
                this.ready = true;
              } catch (e) {
                console.error(e);
              }
            }
            async delete(item) {
              await item.delete();
            }
            loadClasses = async () => {
              await _gclassroom.gclassroom.courses();
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
              await this.loadClasses();
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
                console.log(this, 'this', this.model);
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
        hash: 1240796592,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ClassroomList = ClassroomList;
          var _react = require("react");
          var _item = require("./item");
          var _list = require("pragmate-ui/list");
          function ClassroomList({
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
        hash: 1915941024,
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
        hash: 4267994289,
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
          function Header() {
            const {
              texts,
              fetching,
              store
            } = (0, _context.useClassroomContext)();
            const userName = _session.sessionWrapper.user.displayName;
            const [show, setShow] = _react.default.useState(false);
            const disableWithoutAuth = !_gclassroom.gclassroom.authorized;
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
              fetching: fetching,
              icon: "clip",
              variant: "primary",
              disabled: disableWithoutAuth
            }, texts.actions.import), _react.default.createElement(_link.Link, {
              className: "add-item",
              href: `/classroom/management/new`
            }, _react.default.createElement(_components.Button, {
              fetching: fetching,
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
        hash: 3251256224,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyExplorer = EmptyExplorer;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          function EmptyExplorer({}) {
            return _react.default.createElement("div", {
              className: "items-modal__empty"
            }, _react.default.createElement(_icons.Icon, {
              icon: "circle-exclamation"
            }), _react.default.createElement("span", null, "There are no items to show"));
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./views/import/index
      ************************************/

      ims.set('./views/import/index', {
        hash: 1833391651,
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
        hash: 412127354,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Item = void 0;
          var _react = require("react");
          var _context = require("../../context");
          var _icons = require("pragmate-ui/icons");
          const Item = ({
            item
          }) => {
            const {
              store
            } = (0, _context.useClassroomContext)();
            const [checked, setChecked] = _react.default.useState(false);
            const alreadyExist = store.items.some(obj => {
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
            }, _react.default.createElement("span", null, "Saved"), _react.default.createElement(_icons.Icon, {
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
        hash: 2777336774,
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
              items: store.gItems,
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
        hash: 792623411,
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
            if (!ready || !textsReady) return _react.default.createElement(_components.PreloadScreen, null);
            const ListControl = store.items?.length < 1 ? _empty.EmptyList : _classroomList.ClassroomList;
            return _react.default.createElement(_context.ClassroomContext.Provider, {
              value: {
                texts,
                store,
                fetching,
                totalItems
              }
            }, _react.default.createElement(_ui.PageHeader, {
              breadcrumb: [['AI-Learn', '/'], ['Classroom', '']]
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
        hash: 3091891471,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = LearningItemActions;
          var _react = require("react");
          var _context = require("../context");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _icons = require("pragmate-ui/icons");
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
            }, item?.external && _react.default.createElement(_icons.Icon, {
              icon: "google",
              className: "drag-bullet-point"
            }), _react.default.createElement(_ui.ConfirmAction, {
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
        hash: 852535703,
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
            return _react.default.createElement(_ui.Card, {
              simple: true
            }, _react.default.createElement(_ui.CardContent, null, _react.default.createElement(_title.default, {
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
        hash: 2366313190,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = ModuleData;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          function ModuleData({
            item
          }) {
            return _react.default.createElement("section", null, _react.default.createElement(_components.Link, {
              href: `/classroom/management/${item.id}`
            }, _react.default.createElement("h4", null, item.name)), _react.default.createElement("span", null, item.description));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJleHBvcnRzIiwiX21vZGVsIiwiX2NvcmUiLCJfZ2NsYXNzcm9vbSIsIl9kYXlqcyIsIlJlYWN0aXZlTW9kZWwiLCJpdGVtcyIsIm1vZGVsIiwiZ0l0ZW1zIiwiZ2NsYXNzcm9vbSIsImNsYXNzZXMiLCJ2YWx1ZXMiLCJpdGVtc1NlbGVjdGVkIiwiTWFwIiwiY29uc3RydWN0b3IiLCJDbGFzc3Jvb21zIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJpbml0IiwicmVhZHkiLCJlIiwiY29uc29sZSIsImVycm9yIiwiZGVsZXRlIiwiaXRlbSIsImxvYWRDbGFzc2VzIiwiY291cnNlcyIsIiNpbml0IiwiY3VycmVudFRpbWUiLCJkZWZhdWx0IiwibGFzdENsYXNzZXNRdWVyeVRpbWUiLCJzaXplIiwiZGlmZiIsInNhdmVJdGVtVG9JbXBvcnQiLCJnbGNhc3Nyb29tIiwiQ2xhc3Nyb29tIiwiaXNSZWFkeSIsInNldCIsImV4dGVybmFsIiwiaWQiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJ0b2dnbGVJdGVtIiwiaGFzIiwic2F2ZUl0ZW1zIiwiZmV0Y2hpbmciLCJtYXAiLCJnZXRQcm9wZXJ0aWVzIiwibG9nIiwic3RhdHVzIiwiZGF0YSIsImltcG9ydEZyb21Hb29nbGVDbGFzc3Jvb20iLCJFcnJvciIsIl9yZWFjdCIsIl9pdGVtIiwiX2xpc3QiLCJDbGFzc3Jvb21MaXN0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIkxpc3QiLCJjb250cm9sIiwiQ2xhc3Nyb29tQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDbGFzc3Jvb21Db250ZXh0IiwidXNlQ29udGV4dCIsIl9jb21wb25lbnRzIiwiX2NvbnRleHQiLCJfdWkiLCJFbXB0eUxpc3QiLCJ0ZXh0cyIsIkVtcHR5Q2FyZCIsInRleHQiLCJlbXB0eSIsInRpdGxlIiwiaWNvbiIsIkxpbmsiLCJocmVmIiwiYWN0aW9ucyIsImNyZWF0ZSIsIl9zZXNzaW9uIiwiX2FsZXJ0IiwiX2xpbmsiLCJfbW9kYWwiLCJfaW1wb3J0IiwiSGVhZGVyIiwidXNlck5hbWUiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJkaXNwbGF5TmFtZSIsInNldFNob3ciLCJ1c2VTdGF0ZSIsImRpc2FibGVXaXRob3V0QXV0aCIsImF1dGhvcml6ZWQiLCJoYW5kbGVNb2RhbCIsIkZyYWdtZW50IiwiSGVhZGVyQ2FyZCIsIndlbGNvbWUiLCJtZXNzYWdlIiwicmVwbGFjZSIsImFsdCIsImltYWdlIiwiYWN0aW9uSW5mbyIsIkFsZXJ0IiwidHlwZSIsImV4dHJhSW5mbyIsIlN1YkRpdmlkZXIiLCJ0aXRsZVRleHQiLCJCdXR0b24iLCJvbkNsaWNrIiwidmFyaWFudCIsImRpc2FibGVkIiwiaW1wb3J0IiwiTW9kYWwiLCJvbkNsb3NlIiwiSW1wb3J0IiwiX2ljb25zIiwiRW1wdHlFeHBsb3JlciIsIkljb24iLCJfaG9va3MiLCJfZW1wdHkiLCJzZXRGZXRjaGluZyIsInNldFJlYWR5IiwidXNlQmluZGVyIiwiU3Bpbm5lciIsImFjdGl2ZSIsIkNvbnRyb2wiLCJsZW5ndGgiLCJQcm9jZXNzQ29udGFpbmVyIiwiSXRlbSIsImNoZWNrZWQiLCJzZXRDaGVja2VkIiwiYWxyZWFkeUV4aXN0Iiwic29tZSIsIm9iaiIsInVwZGF0ZUltcG9ydHMiLCJpc1NlbGVjdGVkIiwia2V5IiwiX2l0ZW1zIiwiX3RvYXN0Iiwic2V0SXRlbXMiLCJzYXZlSXRlbSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJ0b2FzdCIsInN1Y2Nlc3MiLCJzcGVjcyIsIl9oZWFkZXIiLCJfYmV5b25kX2NvbnRleHQiLCJfaG9va3MyIiwiX2NsYXNzcm9vbUxpc3QiLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ0b3RhbEl0ZW1zIiwic2V0VG90YWxJdGVtcyIsIlByZWxvYWRTY3JlZW4iLCJMaXN0Q29udHJvbCIsIlByb3ZpZGVyIiwidmFsdWUiLCJQYWdlSGVhZGVyIiwiYnJlYWRjcnVtYiIsIlBhZ2VDb250YWluZXIiLCJMZWFybmluZ0l0ZW1BY3Rpb25zIiwib25EZWxldGUiLCJDb25maXJtQWN0aW9uIiwidGV4dFBvcFVwIiwib25Db25maXJtIiwiX3RpdGxlIiwiX2FjdGlvbnMiLCJDYXJkIiwic2ltcGxlIiwiQ2FyZENvbnRlbnQiLCJDYXJkRm9vdGVyIiwiTW9kdWxlRGF0YSJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NsYXNzcm9vbS1saXN0LnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2VtcHR5LnRzeCIsIi90cy92aWV3cy9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2ltcG9ydC9lbXB0eS50c3giLCIvdHMvdmlld3MvaW1wb3J0L2luZGV4LnRzeCIsIi90cy92aWV3cy9pbXBvcnQvaXRlbXMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2ltcG9ydC9saXN0LnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvaXRlbS9hY3Rpb25zLnRzeCIsIi90cy92aWV3cy9pdGVtL2luZGV4LnRzeCIsIi90cy92aWV3cy9pdGVtL3RpdGxlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJ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