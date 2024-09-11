System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@beyond-js/reactive@1.2.0/model", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/ailearn-app@0.1.6-dev.29/model/gclassroom", "@beyond-js/kernel@0.1.9/texts", "react@18.2.0", "pragmate-ui@1.0.0-beta.6/list", "@aimpact/ailearn-app@0.1.6-dev.29/components/ui", "pragmate-ui@1.0.0-beta.6/icons", "pragmate-ui@1.0.0-beta.6/components", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/ailearn-app@0.1.6-dev.29/components/icons", "@aimpact/chat-sdk@1.1.0/session", "pragmate-ui@1.0.0-beta.6/alert", "pragmate-ui@1.0.0-beta.6/modal", "pragmate-ui@1.0.0-beta.6/toast"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp016Dev29ModelGclassroom) {
      dependency_6 = _aimpactAilearnApp016Dev29ModelGclassroom;
    }, function (_beyondJsKernel019Texts) {
      dependency_7 = _beyondJsKernel019Texts;
    }, function (_react2) {
      dependency_8 = _react2;
    }, function (_pragmateUi100Beta6List) {
      dependency_9 = _pragmateUi100Beta6List;
    }, function (_aimpactAilearnApp016Dev29ComponentsUi) {
      dependency_10 = _aimpactAilearnApp016Dev29ComponentsUi;
    }, function (_pragmateUi100Beta6Icons) {
      dependency_11 = _pragmateUi100Beta6Icons;
    }, function (_pragmateUi100Beta6Components) {
      dependency_12 = _pragmateUi100Beta6Components;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_13 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactAilearnApp016Dev29ComponentsIcons) {
      dependency_14 = _aimpactAilearnApp016Dev29ComponentsIcons;
    }, function (_aimpactChatSdk110Session) {
      dependency_15 = _aimpactChatSdk110Session;
    }, function (_pragmateUi100Beta6Alert) {
      dependency_16 = _pragmateUi100Beta6Alert;
    }, function (_pragmateUi100Beta6Modal) {
      dependency_17 = _pragmateUi100Beta6Modal;
    }, function (_pragmateUi100Beta6Toast) {
      dependency_18 = _pragmateUi100Beta6Toast;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.1.0"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.6"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["wavesurfer.js", "7.8.5"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.8"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["firebase", "10.13.1"], ["firebase-admin", "12.4.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.1.6-dev.29"], ["@aimpact/ailearn-app", "0.1.6-dev.29"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.29/classrooms/list",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@aimpact/ailearn-sdk/core', dependency_5], ['@aimpact/ailearn-app/model/gclassroom', dependency_6], ['@beyond-js/kernel/texts', dependency_7], ['react', dependency_8], ['pragmate-ui/list', dependency_9], ['@aimpact/ailearn-app/components/ui', dependency_10], ['pragmate-ui/icons', dependency_11], ['pragmate-ui/components', dependency_12], ['@beyond-js/react-18-widgets/hooks', dependency_13], ['@aimpact/ailearn-app/components/icons', dependency_14], ['@aimpact/chat-sdk/session', dependency_15], ['pragmate-ui/alert', dependency_16], ['pragmate-ui/modal', dependency_17], ['pragmate-ui/toast', dependency_18]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-classroom-list",
        "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.29/classrooms/list.widget",
        "is": "page",
        "route": "/classrooms/list",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.6-dev.29/classrooms/list.widget');
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