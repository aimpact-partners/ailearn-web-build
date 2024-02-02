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
        hash: 2126084109,
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
            async save(values) {
              try {
                this.fetching = true;
                const items = [...this.#itemsSelected.values()].map(item => {
                  return {
                    ...item.getProperties()
                  };
                });
                console.log(1, items);
                const {
                  status,
                  data
                } = await this.model.importFromGoogleClassroom({
                  items
                });
                if (!status) {
                  throw new Error('error publishing classroom');
                }
                // return data;
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
        hash: 2906960412,
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
            }), alreadyExist && _react.default.createElement(_icons.Icon, {
              icon: "check",
              className: "disabled-icon"
            }));
          };
          exports.Item = Item;
        }
      });

      /***********************************
      INTERNAL MODULE: ./views/import/list
      ***********************************/

      ims.set('./views/import/list', {
        hash: 2129985592,
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
            const [importItems, setImportItems] = _react.default.useState([]);
            (0, _hooks.useBinder)([store], () => setItems(store.gItems));
            const saveItem = async event => {
              event.preventDefault();
              event.stopPropagation();
              try {
                const data = await store.save();
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
              onClick: saveItem
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJleHBvcnRzIiwiX21vZGVsIiwiX2NvcmUiLCJfZ2NsYXNzcm9vbSIsIl9kYXlqcyIsIlJlYWN0aXZlTW9kZWwiLCJpdGVtcyIsIm1vZGVsIiwiZ0l0ZW1zIiwiZ2NsYXNzcm9vbSIsImNsYXNzZXMiLCJ2YWx1ZXMiLCJpdGVtc1NlbGVjdGVkIiwiTWFwIiwiY29uc3RydWN0b3IiLCJDbGFzc3Jvb21zIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJpbml0IiwicmVhZHkiLCJlIiwiY29uc29sZSIsImVycm9yIiwiZGVsZXRlIiwiaXRlbSIsImxvYWRDbGFzc2VzIiwiY291cnNlcyIsIiNpbml0IiwiY3VycmVudFRpbWUiLCJkZWZhdWx0IiwibGFzdENsYXNzZXNRdWVyeVRpbWUiLCJzaXplIiwiZGlmZiIsInNhdmVJdGVtVG9JbXBvcnQiLCJnbGNhc3Nyb29tIiwiQ2xhc3Nyb29tIiwiaXNSZWFkeSIsInNldCIsImV4dGVybmFsIiwiaWQiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJ0b2dnbGVJdGVtIiwiaGFzIiwic2F2ZSIsImZldGNoaW5nIiwibWFwIiwiZ2V0UHJvcGVydGllcyIsImxvZyIsInN0YXR1cyIsImRhdGEiLCJpbXBvcnRGcm9tR29vZ2xlQ2xhc3Nyb29tIiwiRXJyb3IiLCJfcmVhY3QiLCJfaXRlbSIsIl9saXN0IiwiQ2xhc3Nyb29tTGlzdCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJMaXN0IiwiY29udHJvbCIsIkNsYXNzcm9vbUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ2xhc3Nyb29tQ29udGV4dCIsInVzZUNvbnRleHQiLCJfY29tcG9uZW50cyIsIl9jb250ZXh0IiwiX3VpIiwiRW1wdHlMaXN0IiwidGV4dHMiLCJFbXB0eUNhcmQiLCJ0ZXh0IiwiZW1wdHkiLCJ0aXRsZSIsImljb24iLCJMaW5rIiwiaHJlZiIsImFjdGlvbnMiLCJjcmVhdGUiLCJfc2Vzc2lvbiIsIl9hbGVydCIsIl9saW5rIiwiX21vZGFsIiwiX2ltcG9ydCIsIkhlYWRlciIsInVzZXJOYW1lIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwiZGlzcGxheU5hbWUiLCJzZXRTaG93IiwidXNlU3RhdGUiLCJkaXNhYmxlV2l0aG91dEF1dGgiLCJhdXRob3JpemVkIiwiaGFuZGxlTW9kYWwiLCJGcmFnbWVudCIsIkhlYWRlckNhcmQiLCJ3ZWxjb21lIiwibWVzc2FnZSIsInJlcGxhY2UiLCJhbHQiLCJpbWFnZSIsImFjdGlvbkluZm8iLCJBbGVydCIsInR5cGUiLCJleHRyYUluZm8iLCJTdWJEaXZpZGVyIiwidGl0bGVUZXh0IiwiQnV0dG9uIiwib25DbGljayIsInZhcmlhbnQiLCJkaXNhYmxlZCIsImltcG9ydCIsIk1vZGFsIiwib25DbG9zZSIsIkltcG9ydCIsIl9pY29ucyIsIkVtcHR5RXhwbG9yZXIiLCJJY29uIiwiX2hvb2tzIiwiX2VtcHR5Iiwic2V0RmV0Y2hpbmciLCJzZXRSZWFkeSIsInVzZUJpbmRlciIsIlNwaW5uZXIiLCJhY3RpdmUiLCJDb250cm9sIiwibGVuZ3RoIiwiUHJvY2Vzc0NvbnRhaW5lciIsIkl0ZW0iLCJjaGVja2VkIiwic2V0Q2hlY2tlZCIsImFscmVhZHlFeGlzdCIsInNvbWUiLCJvYmoiLCJ1cGRhdGVJbXBvcnRzIiwiaXNTZWxlY3RlZCIsImtleSIsIl9pdGVtcyIsIl90b2FzdCIsInNldEl0ZW1zIiwiaW1wb3J0SXRlbXMiLCJzZXRJbXBvcnRJdGVtcyIsInNhdmVJdGVtIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsInRvYXN0Iiwic3VjY2VzcyIsInNwZWNzIiwiX2hlYWRlciIsIl9iZXlvbmRfY29udGV4dCIsIl9ob29rczIiLCJfY2xhc3Nyb29tTGlzdCIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInRvdGFsSXRlbXMiLCJzZXRUb3RhbEl0ZW1zIiwiUHJlbG9hZFNjcmVlbiIsIkxpc3RDb250cm9sIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsIlBhZ2VIZWFkZXIiLCJicmVhZGNydW1iIiwiUGFnZUNvbnRhaW5lciIsIkxlYXJuaW5nSXRlbUFjdGlvbnMiLCJvbkRlbGV0ZSIsIkNvbmZpcm1BY3Rpb24iLCJ0ZXh0UG9wVXAiLCJvbkNvbmZpcm0iLCJfdGl0bGUiLCJfYWN0aW9ucyIsIkNhcmQiLCJzaW1wbGUiLCJDYXJkQ29udGVudCIsIkNhcmRGb290ZXIiLCJNb2R1bGVEYXRhIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvY2xhc3Nyb29tLWxpc3QudHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2hlYWRlci50c3giLCIvdHMvdmlld3MvaW1wb3J0L2VtcHR5LnRzeCIsIi90cy92aWV3cy9pbXBvcnQvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2ltcG9ydC9pdGVtcy9pbmRleC50c3giLCIvdHMvdmlld3MvaW1wb3J0L2xpc3QudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9pdGVtL2FjdGlvbnMudHN4IiwiL3RzL3ZpZXdzL2l0ZW0vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2l0ZW0vdGl0bGUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElB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