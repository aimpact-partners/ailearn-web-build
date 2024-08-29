System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@beyond-js/reactive@1.2.0/model", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/ailearn-app@0.1.6-dev.08/model/gclassroom", "@beyond-js/kernel@0.1.9/texts", "react@18.2.0", "pragmate-ui@1.0.0-beta.2/list", "@aimpact/ailearn-app@0.1.6-dev.08/components/ui", "pragmate-ui@1.0.0-beta.2/icons", "pragmate-ui@1.0.0-beta.2/components", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/ailearn-app@0.1.6-dev.08/components/icons", "@aimpact/chat-sdk@1.1.0/session", "pragmate-ui@1.0.0-beta.2/alert", "pragmate-ui@1.0.0-beta.2/modal", "pragmate-ui@1.0.0-beta.2/toast"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
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
    }, function (_aimpactAilearnApp016Dev08ModelGclassroom) {
      dependency_6 = _aimpactAilearnApp016Dev08ModelGclassroom;
    }, function (_beyondJsKernel019Texts) {
      dependency_7 = _beyondJsKernel019Texts;
    }, function (_react2) {
      dependency_8 = _react2;
    }, function (_pragmateUi100Beta2List) {
      dependency_9 = _pragmateUi100Beta2List;
    }, function (_aimpactAilearnApp016Dev08ComponentsUi) {
      dependency_10 = _aimpactAilearnApp016Dev08ComponentsUi;
    }, function (_pragmateUi100Beta2Icons) {
      dependency_11 = _pragmateUi100Beta2Icons;
    }, function (_pragmateUi100Beta2Components) {
      dependency_12 = _pragmateUi100Beta2Components;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_13 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactAilearnApp016Dev08ComponentsIcons) {
      dependency_14 = _aimpactAilearnApp016Dev08ComponentsIcons;
    }, function (_aimpactChatSdk110Session) {
      dependency_15 = _aimpactChatSdk110Session;
    }, function (_pragmateUi100Beta2Alert) {
      dependency_16 = _pragmateUi100Beta2Alert;
    }, function (_pragmateUi100Beta2Modal) {
      dependency_17 = _pragmateUi100Beta2Modal;
    }, function (_pragmateUi100Beta2Toast) {
      dependency_18 = _pragmateUi100Beta2Toast;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", null], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.1.0"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.2"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["markdown-it", "14.1.0"], ["markdown-it-katex", "2.0.3"], ["markdown-it-math", "4.1.1"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prism-themes", "1.9.0"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["react-katex", "3.0.1"], ["react-syntax-highlighter", "15.5.0"], ["simplebar-react", "3.2.6"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["wavesurfer.js", "7.8.4"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.1.6-dev.08"], ["@aimpact/ailearn-app", "0.1.6-dev.08"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.08/classrooms/list",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@aimpact/ailearn-sdk/core', dependency_5], ['@aimpact/ailearn-app/model/gclassroom', dependency_6], ['@beyond-js/kernel/texts', dependency_7], ['react', dependency_8], ['pragmate-ui/list', dependency_9], ['@aimpact/ailearn-app/components/ui', dependency_10], ['pragmate-ui/icons', dependency_11], ['pragmate-ui/components', dependency_12], ['@beyond-js/react-18-widgets/hooks', dependency_13], ['@aimpact/ailearn-app/components/icons', dependency_14], ['@aimpact/chat-sdk/session', dependency_15], ['pragmate-ui/alert', dependency_16], ['pragmate-ui/modal', dependency_17], ['pragmate-ui/toast', dependency_18]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-classroom-list",
        "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.08/classrooms/list.widget",
        "is": "page",
        "route": "/classrooms/list",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.6-dev.08/classrooms/list.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 483575597,
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
        hash: 1289856046,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _core = require("@aimpact/ailearn-sdk/core");
          var _gclassroom = require("@aimpact/ailearn-app/model/gclassroom");
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
        hash: 2531276144,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _react = require("react");
          var _empty = require("./empty");
          var _context = require("./context");
          var _ui = require("@aimpact/ailearn-app/components/ui");
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
            if (!ready) return _react.default.createElement(_ui.PageLoader, {
              fetching: true
            });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJzaG93IiwibG9hZCIsIldpZGdldCIsIlZpZXciLCJleHBvcnRzIiwiX21vZGVsIiwiX2NvcmUiLCJfZ2NsYXNzcm9vbSIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsIlJlYWN0aXZlTW9kZWwiLCJpdGVtcyIsIm1vZGVsIiwiZ0l0ZW1zIiwiZ2NsYXNzcm9vbSIsImVycm9yIiwiY29kZSIsImNsYXNzZXMiLCJ2YWx1ZXMiLCJtYXAiLCJpdGVtIiwiaW1wb3J0ZWQiLCJnb29nbGVDbGFzc3Jvb21zSWRzIiwiaGFzIiwiaWQiLCJ0ZXh0cyIsIkN1cnJlbnRUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInZhbHVlIiwicmVhZHkiLCJpdGVtc1NlbGVjdGVkIiwiTWFwIiwiY29uc3RydWN0b3IiLCJDbGFzc3Jvb21zIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJmZXRjaGluZyIsImUiLCJjb25zb2xlIiwiZGVsZXRlIiwiZmlsdGVyIiwiZWxlbWVudCIsImxvYWRDbGFzc2VzIiwiY291cnNlcyIsInNhdmVJdGVtVG9JbXBvcnQiLCJnbGNhc3Nyb29tIiwiQ2xhc3Nyb29tIiwiaXNSZWFkeSIsInNldCIsImV4dGVybmFsIiwibmFtZSIsImRlc2NyaXB0aW9uIiwidG9nZ2xlSXRlbSIsInNhdmVJdGVtcyIsImdldFByb3BlcnRpZXMiLCJzdGF0dXMiLCJkYXRhIiwiaW1wb3J0RnJvbUdvb2dsZUNsYXNzcm9vbSIsIkVycm9yIiwiUmVhY3QiLCJfaXRlbSIsIl9saXN0IiwiX3VpIiwiX2ljb25zIiwiX2NvbXBvbmVudHMiLCJfY29udGV4dCIsIl9ob29rcyIsIkNsYXNzcm9vbXNMaXN0IiwidXNlTW9kdWxlQ29udGV4dCIsInNldEl0ZW1zIiwidXNlU3RhdGUiLCJ1c2VCaW5kZXIiLCJjcmVhdGVFbGVtZW50IiwiUGFnZUNvbnRhaW5lciIsImNsYXNzTmFtZSIsIlBhZ2VUaXRsZSIsInRpdGxlIiwiTGluayIsImhyZWYiLCJJY29uIiwiaWNvbiIsImFjdGlvbnMiLCJjcmVhdGUiLCJMaXN0IiwiY29udHJvbCIsIk1vZHVsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIkVtcHR5TGlzdCIsIkFwcEljb24iLCJqb2luIiwiRW1wdHlDYXJkIiwidGV4dCIsImVtcHR5IiwiX3JlYWN0IiwiX3Nlc3Npb24iLCJfYWxlcnQiLCJfbW9kYWwiLCJfaW1wb3J0IiwiSGVhZGVyIiwidXNlck5hbWUiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJkaXNwbGF5TmFtZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZGVmYXVsdCIsInNldFNob3ciLCJkaXNhYmxlV2l0aG91dEF1dGgiLCJhdXRob3JpemVkIiwiaGFuZGxlTW9kYWwiLCJGcmFnbWVudCIsIkFsZXJ0IiwidHlwZSIsImV4dHJhSW5mbyIsIkJ1dHRvbiIsInZhcmlhbnQiLCJNb2RhbCIsIm9uQ2xvc2UiLCJJbXBvcnQiLCJFbXB0eUV4cGxvcmVyIiwiSWNvbkJ1dHRvbiIsInRpdGxlSW1wb3J0IiwibGFiZWxJbXBvcnQiLCJfZW1wdHkiLCJzZXRGZXRjaGluZyIsInNldFJlYWR5IiwiU3Bpbm5lciIsImFjdGl2ZSIsIkNvbnRyb2wiLCJsZW5ndGgiLCJpbXBvcnQiLCJQcm9jZXNzQ29udGFpbmVyIiwiSXRlbSIsImNoZWNrZWQiLCJzZXRDaGVja2VkIiwiaXRlbXNTYXZlZCIsInNldEl0ZW1zU2F2ZWQiLCJhbHJlYWR5RXhpc3QiLCJzb21lIiwib2JqIiwidXBkYXRlSW1wb3J0cyIsImlzU2VsZWN0ZWQiLCJrZXkiLCJvbkNsaWNrIiwiX2l0ZW1zIiwiX3RvYXN0Iiwic2F2ZUl0ZW0iLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwidG9hc3QiLCJzdWNjZXNzIiwic3BlY3MiLCJkaXNhYmxlZCIsInNpemUiLCJfY2xhc3Nyb29tTGlzdCIsIlBhZ2VMb2FkZXIiLCJMaXN0Q29udHJvbCIsIlByb3ZpZGVyIiwidG90YWxJdGVtcyIsIkxlYXJuaW5nSXRlbUFjdGlvbnMiLCJvbkRlbGV0ZSIsIkNvbmZpcm1BY3Rpb24iLCJ0ZXh0UG9wVXAiLCJvbkNvbmZpcm0iLCJfdGl0bGUiLCJfYWN0aW9ucyIsIkNhcmQiLCJDYXJkQ29udGVudCIsIkNhcmRGb290ZXIiLCJNb2R1bGVEYXRhIiwiZ1Rvb2x0aXAiLCJVc2VyRGF0YSIsIm93bmVyIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvY2xhc3Nyb29tLWxpc3QudHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2hlYWRlci50c3giLCIvdHMvdmlld3MvaW1wb3J0L2VtcHR5LnRzeCIsIi90cy92aWV3cy9pbXBvcnQvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2ltcG9ydC9pdGVtcy9pbmRleC50c3giLCIvdHMvdmlld3MvaW1wb3J0L2xpc3QudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9pdGVtL2FjdGlvbnMudHN4IiwiL3RzL3ZpZXdzL2l0ZW0vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2l0ZW0vdGl0bGUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFB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