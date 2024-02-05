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
        hash: 4286873185,
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
        hash: 138741882,
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
              store,
              texts
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3IiwiZXhwb3J0cyIsIl9tb2RlbCIsIl9jb3JlIiwiX2djbGFzc3Jvb20iLCJfZGF5anMiLCJSZWFjdGl2ZU1vZGVsIiwiaXRlbXMiLCJtb2RlbCIsImdJdGVtcyIsImdjbGFzc3Jvb20iLCJjbGFzc2VzIiwidmFsdWVzIiwiaXRlbXNTZWxlY3RlZCIsIk1hcCIsImNvbnN0cnVjdG9yIiwiQ2xhc3Nyb29tcyIsIm9uIiwidHJpZ2dlckV2ZW50IiwiaW5pdCIsImxvYWQiLCJmZXRjaGluZyIsInJlYWR5IiwiZSIsImNvbnNvbGUiLCJlcnJvciIsImRlbGV0ZSIsIml0ZW0iLCJsb2FkQ2xhc3NlcyIsImNvdXJzZXMiLCIjaW5pdCIsImN1cnJlbnRUaW1lIiwiZGVmYXVsdCIsImxhc3RDbGFzc2VzUXVlcnlUaW1lIiwic2l6ZSIsImRpZmYiLCJzYXZlSXRlbVRvSW1wb3J0IiwiZ2xjYXNzcm9vbSIsIkNsYXNzcm9vbSIsImlzUmVhZHkiLCJzZXQiLCJleHRlcm5hbCIsImlkIiwibmFtZSIsImRlc2NyaXB0aW9uIiwidG9nZ2xlSXRlbSIsImhhcyIsInNhdmVJdGVtcyIsIm1hcCIsImdldFByb3BlcnRpZXMiLCJzdGF0dXMiLCJkYXRhIiwiaW1wb3J0RnJvbUdvb2dsZUNsYXNzcm9vbSIsIkVycm9yIiwiX3JlYWN0IiwiX2l0ZW0iLCJfbGlzdCIsIkNsYXNzcm9vbUxpc3QiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiTGlzdCIsImNvbnRyb2wiLCJDbGFzc3Jvb21Db250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNsYXNzcm9vbUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2NvbXBvbmVudHMiLCJfY29udGV4dCIsIl91aSIsIkVtcHR5TGlzdCIsInRleHRzIiwiRW1wdHlDYXJkIiwidGV4dCIsImVtcHR5IiwidGl0bGUiLCJpY29uIiwiTGluayIsImhyZWYiLCJhY3Rpb25zIiwiY3JlYXRlIiwiX3Nlc3Npb24iLCJfYWxlcnQiLCJfbGluayIsIl9tb2RhbCIsIl9pbXBvcnQiLCJIZWFkZXIiLCJ1c2VyTmFtZSIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsImRpc3BsYXlOYW1lIiwic2hvdyIsInNldFNob3ciLCJ1c2VTdGF0ZSIsImRpc2FibGVXaXRob3V0QXV0aCIsImF1dGhvcml6ZWQiLCJoYW5kbGVNb2RhbCIsIkZyYWdtZW50IiwiSGVhZGVyQ2FyZCIsIndlbGNvbWUiLCJtZXNzYWdlIiwicmVwbGFjZSIsImFsdCIsImltYWdlIiwiYWN0aW9uSW5mbyIsIkFsZXJ0IiwidHlwZSIsImV4dHJhSW5mbyIsIlN1YkRpdmlkZXIiLCJ0aXRsZVRleHQiLCJCdXR0b24iLCJvbkNsaWNrIiwidmFyaWFudCIsImRpc2FibGVkIiwiaW1wb3J0IiwiTW9kYWwiLCJvbkNsb3NlIiwiSW1wb3J0IiwiX2ljb25zIiwiRW1wdHlFeHBsb3JlciIsIkljb24iLCJfaG9va3MiLCJfZW1wdHkiLCJzZXRGZXRjaGluZyIsInNldFJlYWR5IiwidXNlQmluZGVyIiwiU3Bpbm5lciIsImFjdGl2ZSIsIkNvbnRyb2wiLCJsZW5ndGgiLCJQcm9jZXNzQ29udGFpbmVyIiwiSXRlbSIsImNoZWNrZWQiLCJzZXRDaGVja2VkIiwiYWxyZWFkeUV4aXN0Iiwic29tZSIsIm9iaiIsInVwZGF0ZUltcG9ydHMiLCJpc1NlbGVjdGVkIiwia2V5IiwiaW1wb3J0ZWQiLCJfaXRlbXMiLCJfdG9hc3QiLCJzZXRJdGVtcyIsInNhdmVJdGVtIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsInRvYXN0Iiwic3VjY2VzcyIsInNwZWNzIiwiX2hlYWRlciIsIl9iZXlvbmRfY29udGV4dCIsIl9ob29rczIiLCJfY2xhc3Nyb29tTGlzdCIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInRvdGFsSXRlbXMiLCJzZXRUb3RhbEl0ZW1zIiwiUHJlbG9hZFNjcmVlbiIsIkxpc3RDb250cm9sIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsIlBhZ2VIZWFkZXIiLCJicmVhZGNydW1iIiwiUGFnZUNvbnRhaW5lciIsIkxlYXJuaW5nSXRlbUFjdGlvbnMiLCJvbkRlbGV0ZSIsIkNvbmZpcm1BY3Rpb24iLCJ0ZXh0UG9wVXAiLCJvbkNvbmZpcm0iLCJfdGl0bGUiLCJfYWN0aW9ucyIsIkNhcmQiLCJzaW1wbGUiLCJDYXJkQ29udGVudCIsIkNhcmRGb290ZXIiLCJNb2R1bGVEYXRhIiwiSWNvbkJ1dHRvbiIsImdUb29sdGlwIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvY2xhc3Nyb29tLWxpc3QudHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2hlYWRlci50c3giLCIvdHMvdmlld3MvaW1wb3J0L2VtcHR5LnRzeCIsIi90cy92aWV3cy9pbXBvcnQvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2ltcG9ydC9pdGVtcy9pbmRleC50c3giLCIvdHMvdmlld3MvaW1wb3J0L2xpc3QudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9pdGVtL2FjdGlvbnMudHN4IiwiL3RzL3ZpZXdzL2l0ZW0vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2l0ZW0vdGl0bGUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFB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