System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@beyond-js/reactive@1.2.0/model", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/ailearn-app@0.1.6-dev.07/model/gclassroom", "dayjs@1.11.10", "@aimpact/ailearn-app@0.1.6-dev.07/main-layout.widget", "@beyond-js/kernel@0.1.9/texts", "react@18.2.0", "pragmate-ui@1.0.0-beta.2/list", "@aimpact/ailearn-app@0.1.6-dev.07/components/ui", "pragmate-ui@1.0.0-beta.2/icons", "pragmate-ui@1.0.0-beta.2/components", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/ailearn-app@0.1.6-dev.07/components/icons", "@aimpact/chat-sdk@1.1.0/session", "pragmate-ui@1.0.0-beta.2/alert", "pragmate-ui@1.0.0-beta.2/modal", "pragmate-ui@1.0.0-beta.2/toast"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
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
    }, function (_aimpactAilearnApp016Dev07ModelGclassroom) {
      dependency_6 = _aimpactAilearnApp016Dev07ModelGclassroom;
    }, function (_dayjs2) {
      dependency_7 = _dayjs2;
    }, function (_aimpactAilearnApp016Dev07MainLayoutWidget) {
      dependency_8 = _aimpactAilearnApp016Dev07MainLayoutWidget;
    }, function (_beyondJsKernel019Texts) {
      dependency_9 = _beyondJsKernel019Texts;
    }, function (_react2) {
      dependency_10 = _react2;
    }, function (_pragmateUi100Beta2List) {
      dependency_11 = _pragmateUi100Beta2List;
    }, function (_aimpactAilearnApp016Dev07ComponentsUi) {
      dependency_12 = _aimpactAilearnApp016Dev07ComponentsUi;
    }, function (_pragmateUi100Beta2Icons) {
      dependency_13 = _pragmateUi100Beta2Icons;
    }, function (_pragmateUi100Beta2Components) {
      dependency_14 = _pragmateUi100Beta2Components;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_15 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactAilearnApp016Dev07ComponentsIcons) {
      dependency_16 = _aimpactAilearnApp016Dev07ComponentsIcons;
    }, function (_aimpactChatSdk110Session) {
      dependency_17 = _aimpactChatSdk110Session;
    }, function (_pragmateUi100Beta2Alert) {
      dependency_18 = _pragmateUi100Beta2Alert;
    }, function (_pragmateUi100Beta2Modal) {
      dependency_19 = _pragmateUi100Beta2Modal;
    }, function (_pragmateUi100Beta2Toast) {
      dependency_20 = _pragmateUi100Beta2Toast;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", null], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.1.0"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.2"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["markdown-it", "14.1.0"], ["markdown-it-katex", "2.0.3"], ["markdown-it-math", "4.1.1"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prism-themes", "1.9.0"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["react-katex", "3.0.1"], ["react-syntax-highlighter", "15.5.0"], ["simplebar-react", "3.2.6"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["wavesurfer.js", "7.8.4"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.1.6-dev.07"], ["@aimpact/ailearn-app", "0.1.6-dev.07"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.07/classrooms/list",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@aimpact/ailearn-sdk/core', dependency_5], ['@aimpact/ailearn-app/model/gclassroom', dependency_6], ['dayjs', dependency_7], ['@aimpact/ailearn-app/main-layout.widget', dependency_8], ['@beyond-js/kernel/texts', dependency_9], ['react', dependency_10], ['pragmate-ui/list', dependency_11], ['@aimpact/ailearn-app/components/ui', dependency_12], ['pragmate-ui/icons', dependency_13], ['pragmate-ui/components', dependency_14], ['@beyond-js/react-18-widgets/hooks', dependency_15], ['@aimpact/ailearn-app/components/icons', dependency_16], ['@aimpact/chat-sdk/session', dependency_17], ['pragmate-ui/alert', dependency_18], ['pragmate-ui/modal', dependency_19], ['pragmate-ui/toast', dependency_20]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-classroom-list",
        "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.07/classrooms/list.widget",
        "is": "page",
        "route": "/classrooms/list",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.6-dev.07/classrooms/list.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 3574521443,
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
              this.#store.setBreadcrumb();
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
        hash: 4192429976,
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
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
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
            setBreadcrumb() {
              const onChange = this.setBreadcrumb.bind(this);
              if (!this.#texts.ready) {
                this.#texts.on('change', onChange);
                return;
              }
              this.#texts.off('change', onChange);
              _mainLayout.LayoutBroker.overlay = false;
              globalThis.setTimeout(() => {
                _mainLayout.LayoutBroker.breadcrumb = [[this.texts.breadcrumb.classrooms]];
              }, 100);
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
            async #init() {
              const currentTime = (0, _dayjs.default)();
              if (_gclassroom.gclassroom.lastClassesQueryTime && _gclassroom.gclassroom.classes.size) {
                super.ready = true;
                if (currentTime.diff(_gclassroom.gclassroom.lastClassesQueryTime, 'minutes') > 5) {
                  this.loadClasses();
                }
                return;
              }
              this.loadClasses();
              super.ready = true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJzaG93Iiwic2V0QnJlYWRjcnVtYiIsImxvYWQiLCJXaWRnZXQiLCJWaWV3IiwiZXhwb3J0cyIsIl9tb2RlbCIsIl9jb3JlIiwiX2djbGFzc3Jvb20iLCJfZGF5anMiLCJfbWFpbkxheW91dCIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsIlJlYWN0aXZlTW9kZWwiLCJpdGVtcyIsIm1vZGVsIiwiZ0l0ZW1zIiwiZ2NsYXNzcm9vbSIsImVycm9yIiwiY29kZSIsImNsYXNzZXMiLCJ2YWx1ZXMiLCJtYXAiLCJpdGVtIiwiaW1wb3J0ZWQiLCJnb29nbGVDbGFzc3Jvb21zSWRzIiwiaGFzIiwiaWQiLCJ0ZXh0cyIsIkN1cnJlbnRUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInZhbHVlIiwicmVhZHkiLCJpdGVtc1NlbGVjdGVkIiwiTWFwIiwiY29uc3RydWN0b3IiLCJDbGFzc3Jvb21zIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJvbkNoYW5nZSIsImJpbmQiLCJvZmYiLCJMYXlvdXRCcm9rZXIiLCJvdmVybGF5IiwiZ2xvYmFsVGhpcyIsInNldFRpbWVvdXQiLCJicmVhZGNydW1iIiwiY2xhc3Nyb29tcyIsImZldGNoaW5nIiwiZSIsImNvbnNvbGUiLCJkZWxldGUiLCJmaWx0ZXIiLCJlbGVtZW50IiwibG9hZENsYXNzZXMiLCJjb3Vyc2VzIiwiaW5pdCIsIiNpbml0IiwiY3VycmVudFRpbWUiLCJkZWZhdWx0IiwibGFzdENsYXNzZXNRdWVyeVRpbWUiLCJzaXplIiwiZGlmZiIsInNhdmVJdGVtVG9JbXBvcnQiLCJnbGNhc3Nyb29tIiwiQ2xhc3Nyb29tIiwiaXNSZWFkeSIsInNldCIsImV4dGVybmFsIiwibmFtZSIsImRlc2NyaXB0aW9uIiwidG9nZ2xlSXRlbSIsInNhdmVJdGVtcyIsImdldFByb3BlcnRpZXMiLCJzdGF0dXMiLCJkYXRhIiwiaW1wb3J0RnJvbUdvb2dsZUNsYXNzcm9vbSIsIkVycm9yIiwiUmVhY3QiLCJfaXRlbSIsIl9saXN0IiwiX3VpIiwiX2ljb25zIiwiX2NvbXBvbmVudHMiLCJfY29udGV4dCIsIl9ob29rcyIsIkNsYXNzcm9vbXNMaXN0IiwidXNlTW9kdWxlQ29udGV4dCIsInNldEl0ZW1zIiwidXNlU3RhdGUiLCJ1c2VCaW5kZXIiLCJjcmVhdGVFbGVtZW50IiwiUGFnZUNvbnRhaW5lciIsImNsYXNzTmFtZSIsIlBhZ2VUaXRsZSIsInRpdGxlIiwiTGluayIsImhyZWYiLCJJY29uIiwiaWNvbiIsImFjdGlvbnMiLCJjcmVhdGUiLCJMaXN0IiwiY29udHJvbCIsIk1vZHVsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIkVtcHR5TGlzdCIsIkFwcEljb24iLCJqb2luIiwiRW1wdHlDYXJkIiwidGV4dCIsImVtcHR5IiwiX3JlYWN0IiwiX3Nlc3Npb24iLCJfYWxlcnQiLCJfbW9kYWwiLCJfaW1wb3J0IiwiSGVhZGVyIiwidXNlck5hbWUiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJkaXNwbGF5TmFtZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwic2V0U2hvdyIsImRpc2FibGVXaXRob3V0QXV0aCIsImF1dGhvcml6ZWQiLCJoYW5kbGVNb2RhbCIsIkZyYWdtZW50IiwiQWxlcnQiLCJ0eXBlIiwiZXh0cmFJbmZvIiwiQnV0dG9uIiwidmFyaWFudCIsIk1vZGFsIiwib25DbG9zZSIsIkltcG9ydCIsIkVtcHR5RXhwbG9yZXIiLCJJY29uQnV0dG9uIiwidGl0bGVJbXBvcnQiLCJsYWJlbEltcG9ydCIsIl9lbXB0eSIsInNldEZldGNoaW5nIiwic2V0UmVhZHkiLCJTcGlubmVyIiwiYWN0aXZlIiwiQ29udHJvbCIsImxlbmd0aCIsImltcG9ydCIsIlByb2Nlc3NDb250YWluZXIiLCJJdGVtIiwiY2hlY2tlZCIsInNldENoZWNrZWQiLCJpdGVtc1NhdmVkIiwic2V0SXRlbXNTYXZlZCIsImFscmVhZHlFeGlzdCIsInNvbWUiLCJvYmoiLCJ1cGRhdGVJbXBvcnRzIiwiaXNTZWxlY3RlZCIsImtleSIsIm9uQ2xpY2siLCJfaXRlbXMiLCJfdG9hc3QiLCJzYXZlSXRlbSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJ0b2FzdCIsInN1Y2Nlc3MiLCJzcGVjcyIsImRpc2FibGVkIiwiX2NsYXNzcm9vbUxpc3QiLCJQYWdlTG9hZGVyIiwiTGlzdENvbnRyb2wiLCJQcm92aWRlciIsInRvdGFsSXRlbXMiLCJMZWFybmluZ0l0ZW1BY3Rpb25zIiwib25EZWxldGUiLCJDb25maXJtQWN0aW9uIiwidGV4dFBvcFVwIiwib25Db25maXJtIiwiX3RpdGxlIiwiX2FjdGlvbnMiLCJDYXJkIiwiQ2FyZENvbnRlbnQiLCJDYXJkRm9vdGVyIiwiTW9kdWxlRGF0YSIsImdUb29sdGlwIiwiVXNlckRhdGEiLCJvd25lciJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NsYXNzcm9vbS1saXN0LnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2VtcHR5LnRzeCIsIi90cy92aWV3cy9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2ltcG9ydC9lbXB0eS50c3giLCIvdHMvdmlld3MvaW1wb3J0L2luZGV4LnRzeCIsIi90cy92aWV3cy9pbXBvcnQvaXRlbXMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2ltcG9ydC9saXN0LnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvaXRlbS9hY3Rpb25zLnRzeCIsIi90cy92aWV3cy9pdGVtL2luZGV4LnRzeCIsIi90cy92aWV3cy9pdGVtL3RpdGxlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxs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