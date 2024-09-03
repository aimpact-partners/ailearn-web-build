System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@beyond-js/reactive@1.2.0/model", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/ailearn-app@0.1.6-dev.17/model/gclassroom", "@beyond-js/kernel@0.1.9/texts", "react@18.2.0", "pragmate-ui@1.0.0-beta.2/list", "@aimpact/ailearn-app@0.1.6-dev.17/components/ui", "pragmate-ui@1.0.0-beta.2/icons", "pragmate-ui@1.0.0-beta.2/components", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/ailearn-app@0.1.6-dev.17/components/icons", "@aimpact/chat-sdk@1.1.0/session", "pragmate-ui@1.0.0-beta.2/alert", "pragmate-ui@1.0.0-beta.2/modal", "pragmate-ui@1.0.0-beta.2/toast"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp016Dev17ModelGclassroom) {
      dependency_6 = _aimpactAilearnApp016Dev17ModelGclassroom;
    }, function (_beyondJsKernel019Texts) {
      dependency_7 = _beyondJsKernel019Texts;
    }, function (_react2) {
      dependency_8 = _react2;
    }, function (_pragmateUi100Beta2List) {
      dependency_9 = _pragmateUi100Beta2List;
    }, function (_aimpactAilearnApp016Dev17ComponentsUi) {
      dependency_10 = _aimpactAilearnApp016Dev17ComponentsUi;
    }, function (_pragmateUi100Beta2Icons) {
      dependency_11 = _pragmateUi100Beta2Icons;
    }, function (_pragmateUi100Beta2Components) {
      dependency_12 = _pragmateUi100Beta2Components;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_13 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactAilearnApp016Dev17ComponentsIcons) {
      dependency_14 = _aimpactAilearnApp016Dev17ComponentsIcons;
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
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", null], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.1.0"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.2"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.6.0"], ["markdown-it", "14.1.0"], ["markdown-it-katex", "2.0.3"], ["markdown-it-math", "4.1.1"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prism-themes", "1.9.0"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["react-katex", "3.0.1"], ["react-syntax-highlighter", "15.5.0"], ["simplebar-react", "3.2.6"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["wavesurfer.js", "7.8.4"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.1.6-dev.17"], ["@aimpact/ailearn-app", "0.1.6-dev.17"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.17/classrooms/list",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@aimpact/ailearn-sdk/core', dependency_5], ['@aimpact/ailearn-app/model/gclassroom', dependency_6], ['@beyond-js/kernel/texts', dependency_7], ['react', dependency_8], ['pragmate-ui/list', dependency_9], ['@aimpact/ailearn-app/components/ui', dependency_10], ['pragmate-ui/icons', dependency_11], ['pragmate-ui/components', dependency_12], ['@beyond-js/react-18-widgets/hooks', dependency_13], ['@aimpact/ailearn-app/components/icons', dependency_14], ['@aimpact/chat-sdk/session', dependency_15], ['pragmate-ui/alert', dependency_16], ['pragmate-ui/modal', dependency_17], ['pragmate-ui/toast', dependency_18]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-classroom-list",
        "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.17/classrooms/list.widget",
        "is": "page",
        "route": "/classrooms/list",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.6-dev.17/classrooms/list.widget');
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
        hash: 3568241119,
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
              this.#texts.on('change', this.triggerEvent);
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
        hash: 1542119404,
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
            }, React.createElement("div", {
              className: "page-title__actions"
            }, React.createElement(_components.Link, {
              className: "add-item",
              href: `/classrooms/join`
            }, React.createElement(_icons.Icon, {
              icon: "entities/classroom"
            }), texts.actions.join), React.createElement(_components.Link, {
              href: "/classrooms/create"
            }, React.createElement(_icons.Icon, {
              icon: "add-circle"
            }), texts.actions.create))), React.createElement(_list.List, {
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
        hash: 3207084737,
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
            }, texts.actions.join, " 11")), _react.default.createElement(_components.Link, {
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
        hash: 3114054988,
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
            return _react.default.createElement(_context.ModuleContext.Provider, {
              value: {
                texts,
                store,
                fetching,
                totalItems: store.items.length
              }
            }, store.items.length < 1 ? _react.default.createElement(_empty.EmptyList, null) : _react.default.createElement(_classroomList.ClassroomsList, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJzaG93IiwibG9hZCIsIldpZGdldCIsIlZpZXciLCJleHBvcnRzIiwiX21vZGVsIiwiX2NvcmUiLCJfZ2NsYXNzcm9vbSIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsIlJlYWN0aXZlTW9kZWwiLCJpdGVtcyIsIm1vZGVsIiwiZ0l0ZW1zIiwiZ2NsYXNzcm9vbSIsImVycm9yIiwiY29kZSIsImNsYXNzZXMiLCJ2YWx1ZXMiLCJtYXAiLCJpdGVtIiwiaW1wb3J0ZWQiLCJnb29nbGVDbGFzc3Jvb21zSWRzIiwiaGFzIiwiaWQiLCJ0ZXh0cyIsIkN1cnJlbnRUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInZhbHVlIiwicmVhZHkiLCJpdGVtc1NlbGVjdGVkIiwiTWFwIiwiY29uc3RydWN0b3IiLCJDbGFzc3Jvb21zIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJmZXRjaGluZyIsImUiLCJjb25zb2xlIiwiZGVsZXRlIiwiZmlsdGVyIiwiZWxlbWVudCIsImxvYWRDbGFzc2VzIiwiY291cnNlcyIsInNhdmVJdGVtVG9JbXBvcnQiLCJnbGNhc3Nyb29tIiwiQ2xhc3Nyb29tIiwiaXNSZWFkeSIsInNldCIsImV4dGVybmFsIiwibmFtZSIsImRlc2NyaXB0aW9uIiwidG9nZ2xlSXRlbSIsInNhdmVJdGVtcyIsImdldFByb3BlcnRpZXMiLCJzdGF0dXMiLCJkYXRhIiwiaW1wb3J0RnJvbUdvb2dsZUNsYXNzcm9vbSIsIkVycm9yIiwiUmVhY3QiLCJfaXRlbSIsIl9saXN0IiwiX3VpIiwiX2ljb25zIiwiX2NvbXBvbmVudHMiLCJfY29udGV4dCIsIl9ob29rcyIsIkNsYXNzcm9vbXNMaXN0IiwidXNlTW9kdWxlQ29udGV4dCIsInNldEl0ZW1zIiwidXNlU3RhdGUiLCJ1c2VCaW5kZXIiLCJjcmVhdGVFbGVtZW50IiwiUGFnZUNvbnRhaW5lciIsImNsYXNzTmFtZSIsIlBhZ2VUaXRsZSIsInRpdGxlIiwiTGluayIsImhyZWYiLCJJY29uIiwiaWNvbiIsImFjdGlvbnMiLCJqb2luIiwiY3JlYXRlIiwiTGlzdCIsImNvbnRyb2wiLCJNb2R1bGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJFbXB0eUxpc3QiLCJBcHBJY29uIiwiRW1wdHlDYXJkIiwidGV4dCIsImVtcHR5IiwiX3JlYWN0IiwiX3Nlc3Npb24iLCJfYWxlcnQiLCJfbW9kYWwiLCJfaW1wb3J0IiwiSGVhZGVyIiwidXNlck5hbWUiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJkaXNwbGF5TmFtZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZGVmYXVsdCIsInNldFNob3ciLCJkaXNhYmxlV2l0aG91dEF1dGgiLCJhdXRob3JpemVkIiwiaGFuZGxlTW9kYWwiLCJGcmFnbWVudCIsIkFsZXJ0IiwidHlwZSIsImV4dHJhSW5mbyIsIkJ1dHRvbiIsInZhcmlhbnQiLCJNb2RhbCIsIm9uQ2xvc2UiLCJJbXBvcnQiLCJFbXB0eUV4cGxvcmVyIiwiSWNvbkJ1dHRvbiIsInRpdGxlSW1wb3J0IiwibGFiZWxJbXBvcnQiLCJfZW1wdHkiLCJzZXRGZXRjaGluZyIsInNldFJlYWR5IiwiU3Bpbm5lciIsImFjdGl2ZSIsIkNvbnRyb2wiLCJsZW5ndGgiLCJpbXBvcnQiLCJQcm9jZXNzQ29udGFpbmVyIiwiSXRlbSIsImNoZWNrZWQiLCJzZXRDaGVja2VkIiwiaXRlbXNTYXZlZCIsInNldEl0ZW1zU2F2ZWQiLCJhbHJlYWR5RXhpc3QiLCJzb21lIiwib2JqIiwidXBkYXRlSW1wb3J0cyIsImlzU2VsZWN0ZWQiLCJrZXkiLCJvbkNsaWNrIiwiX2l0ZW1zIiwiX3RvYXN0Iiwic2F2ZUl0ZW0iLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwidG9hc3QiLCJzdWNjZXNzIiwic3BlY3MiLCJkaXNhYmxlZCIsInNpemUiLCJfY2xhc3Nyb29tTGlzdCIsIlBhZ2VMb2FkZXIiLCJQcm92aWRlciIsInRvdGFsSXRlbXMiLCJMZWFybmluZ0l0ZW1BY3Rpb25zIiwib25EZWxldGUiLCJDb25maXJtQWN0aW9uIiwidGV4dFBvcFVwIiwib25Db25maXJtIiwiX3RpdGxlIiwiX2FjdGlvbnMiLCJDYXJkIiwiQ2FyZENvbnRlbnQiLCJDYXJkRm9vdGVyIiwiTW9kdWxlRGF0YSIsImdUb29sdGlwIiwiVXNlckRhdGEiLCJvd25lciJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NsYXNzcm9vbS1saXN0LnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2VtcHR5LnRzeCIsIi90cy92aWV3cy9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2ltcG9ydC9lbXB0eS50c3giLCIvdHMvdmlld3MvaW1wb3J0L2luZGV4LnRzeCIsIi90cy92aWV3cy9pbXBvcnQvaXRlbXMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2ltcG9ydC9saXN0LnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvaXRlbS9hY3Rpb25zLnRzeCIsIi90cy92aWV3cy9pdGVtL2luZGV4LnRzeCIsIi90cy92aWV3cy9pdGVtL3RpdGxlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VB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