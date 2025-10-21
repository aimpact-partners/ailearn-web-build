System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.14/bundle", "@beyond-js/react-18-widgets@1.1.8/page", "@aimpact/ailearn-app@0.7.0/stores/base", "@beyond-js/reactive@2.1.1/model", "react@18.3.1", "@aimpact/ailearn-app@0.7.0/components/ui", "@beyond-js/react-18-widgets@1.1.8/hooks", "pragmate-ui@1.0.8/components", "@beyond-js/kernel@0.1.14/styles"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    View: void 0
  });
  return {
    setters: [function (_beyondJsWidgets112Render) {
      dependency_0 = _beyondJsWidgets112Render;
    }, function (_beyondJsKernel0114Bundle) {
      dependency_1 = _beyondJsKernel0114Bundle;
    }, function (_beyondJsReact18Widgets118Page) {
      dependency_2 = _beyondJsReact18Widgets118Page;
    }, function (_aimpactAilearnApp070StoresBase) {
      dependency_3 = _aimpactAilearnApp070StoresBase;
    }, function (_beyondJsReactive211Model) {
      dependency_4 = _beyondJsReactive211Model;
    }, function (_react) {
      dependency_5 = _react;
    }, function (_aimpactAilearnApp070ComponentsUi) {
      dependency_6 = _aimpactAilearnApp070ComponentsUi;
    }, function (_beyondJsReact18Widgets118Hooks) {
      dependency_7 = _beyondJsReact18Widgets118Hooks;
    }, function (_pragmateUi108Components) {
      dependency_8 = _pragmateUi108Components;
    }, function (_beyondJsKernel0114Styles) {
      dependency_9 = _beyondJsKernel0114Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.9"], ["@beyond-js/reactive", "2.1.1"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.14"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.8"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["@radix-ui/react-accordion", "1.2.12"], ["@radix-ui/react-collapsible", "1.1.12"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-select", "2.2.6"], ["@radix-ui/react-separator", "1.1.7"], ["@tiptap/extension-blockquote", "3.2.0"], ["@tiptap/extension-code-block", "3.2.0"], ["@tiptap/extension-horizontal-rule", "3.2.0"], ["@tiptap/extension-image", "3.6.2"], ["@tiptap/extension-task-item", "3.2.0"], ["@tiptap/extension-task-list", "3.2.0"], ["@tiptap/extension-underline", "3.2.0"], ["@tiptap/pm", "3.6.2"], ["@tiptap/react", "3.2.0"], ["@tiptap/starter-kit", "3.2.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-responsive-masonry", "2.7.1"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.4.0"], ["react-virtuoso", "4.14.0"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "12.0.2"], ["tippy.js", "6.3.7"], ["turndown", "7.2.0"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["yet-another-react-lightbox", "3.25.0"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/node", "20.11.0"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.7.0"], ["@aimpact/rvd", "0.7.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.7.0/pages/test-dynamic",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-18-widgets/page', dependency_2], ['@aimpact/ailearn-app/stores/base', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['react', dependency_5], ['@aimpact/ailearn-app/components/ui', dependency_6], ['@beyond-js/react-18-widgets/hooks', dependency_7], ['pragmate-ui/components', dependency_8], ['@beyond-js/kernel/styles', dependency_9]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-test-dynamic",
        "vspecifier": "@aimpact/ailearn-app@0.7.0/pages/test-dynamic.widget",
        "is": "page",
        "route": "/test/dynamic"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.7.0/pages/test-dynamic.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 573912239,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _page = require("@beyond-js/react-18-widgets/page");
          var _store = require("./store");
          var _views = require("./views");
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
        hash: 634683772,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _base = require("@aimpact/ailearn-app/stores/base");
          var _locations = require("./store/locations");
          var _beyond_context = require("beyond_context");
          class StoreManager extends _base.BaseStoreManager {
            #locations;
            get locations() {
              return this.#locations;
            }
            #ready = false;
            get ready() {
              return this.#ready && super.ready;
            }
            constructor() {
              super(_beyond_context.module.specifier);
              this.#locations = new _locations.LocationsStore();
              this.#ready = true;
            }
            async load() {
              this.#ready = true;
              this.trigger('change');
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /*********************************
      INTERNAL MODULE: ./store/locations
      *********************************/

      ims.set('./store/locations', {
        hash: 3504817177,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LocationsStore = void 0;
          var _model = require("@beyond-js/reactive/model");
          class LocationItem extends _model.ReactiveModel {
            constructor(data) {
              super({
                ...data,
                properties: ['id', 'estado', 'ciudad', 'codigo']
              });
            }
          }
          class LocationsStore extends _model.ReactiveModel {
            #locations = new Map();
            get locations() {
              return Array.from(this.#locations.values());
            }
            constructor() {
              super();
              this.#loadInitialData();
              this.ready = true;
            }
            #loadInitialData() {
              this.add({
                id: '1',
                estado: 'California',
                ciudad: 'Los Angeles',
                codigo: '90001'
              });
              this.add({
                id: '2',
                estado: 'Texas',
                ciudad: 'Houston',
                codigo: '77001'
              });
            }
            add(data) {
              const id = data.id || Date.now().toString();
              const location = new LocationItem({
                ...data,
                id
              });
              this.#locations.set(id, location);
              this.triggerEvent();
            }
            update(id, data) {
              const location = this.#locations.get(id);
              if (location) {
                location.set(data);
                this.triggerEvent();
              }
            }
            delete(id) {
              this.#locations.delete(id);
              this.triggerEvent();
            }
            get(id) {
              return this.#locations.get(id);
            }
          }
          exports.LocationsStore = LocationsStore;
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 1394739192,
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
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 3786907741,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var React = require("react");
          var _context = require("./context");
          var _locationList = require("./location-list");
          var _locationForm = require("./location-form");
          /*bundle*/
          function View({
            store
          }) {
            const [editingId, setEditingId] = React.useState(null);
            (0, _hooks.useStore)(store);
            if (!store.ready) return React.createElement(_ui.PageLoader, {
              fetching: true
            });
            const {
              texts
            } = store;
            const value = {
              texts,
              store
            };
            const onEdit = id => {
              setEditingId(id);
            };
            const onCancel = () => {
              setEditingId(null);
            };
            const onSave = data => {
              if (editingId) {
                store.locations.update(editingId, data);
              } else {
                store.locations.add(data);
              }
              setEditingId(null);
            };
            const onDelete = id => {
              store.locations.delete(id);
            };
            const editingLocation = editingId ? store.locations.get(editingId) : null;
            return React.createElement(_context.ModuleContext.Provider, {
              value: value
            }, React.createElement(_ui.PageContainer, null, React.createElement(_ui.PageTitle, {
              title: texts.title
            }), React.createElement("div", {
              className: "dynamic-list-container"
            }, React.createElement(_locationForm.LocationForm, {
              location: editingLocation,
              onSave: onSave,
              onCancel: onCancel,
              texts: texts
            }), React.createElement(_locationList.LocationList, {
              locations: store.locations.locations,
              onEdit: onEdit,
              onDelete: onDelete,
              texts: texts
            }))));
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./views/location-form
      *************************************/

      ims.set('./views/location-form', {
        hash: 406123409,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LocationForm = LocationForm;
          var React = require("react");
          var _components = require("pragmate-ui/components");
          function LocationForm({
            location,
            onSave,
            onCancel,
            texts
          }) {
            const [estado, setEstado] = React.useState('');
            const [ciudad, setCiudad] = React.useState('');
            const [codigo, setCodigo] = React.useState('');
            React.useEffect(() => {
              if (location) {
                setEstado(location.estado || '');
                setCiudad(location.ciudad || '');
                setCodigo(location.codigo || '');
              } else {
                setEstado('');
                setCiudad('');
                setCodigo('');
              }
            }, [location]);
            const handleSubmit = e => {
              e.preventDefault();
              onSave({
                estado,
                ciudad,
                codigo
              });
              setEstado('');
              setCiudad('');
              setCodigo('');
            };
            const handleCancel = () => {
              setEstado('');
              setCiudad('');
              setCodigo('');
              onCancel();
            };
            const isDisabled = !estado || !ciudad || !codigo;
            return React.createElement("form", {
              className: "location-form",
              onSubmit: handleSubmit
            }, React.createElement("h2", null, location ? texts.form.titleEdit : texts.form.titleNew), React.createElement("div", {
              className: "form-group"
            }, React.createElement("label", {
              htmlFor: "estado"
            }, texts.form.estado), React.createElement("input", {
              id: "estado",
              type: "text",
              value: estado,
              onChange: e => setEstado(e.target.value),
              placeholder: texts.form.estadoPlaceholder
            })), React.createElement("div", {
              className: "form-group"
            }, React.createElement("label", {
              htmlFor: "ciudad"
            }, texts.form.ciudad), React.createElement("input", {
              id: "ciudad",
              type: "text",
              value: ciudad,
              onChange: e => setCiudad(e.target.value),
              placeholder: texts.form.ciudadPlaceholder
            })), React.createElement("div", {
              className: "form-group"
            }, React.createElement("label", {
              htmlFor: "codigo"
            }, texts.form.codigo), React.createElement("input", {
              id: "codigo",
              type: "text",
              value: codigo,
              onChange: e => setCodigo(e.target.value),
              placeholder: texts.form.codigoPlaceholder
            })), React.createElement("div", {
              className: "form-actions"
            }, React.createElement(_components.Button, {
              type: "submit",
              variant: "primary",
              disabled: isDisabled
            }, location ? texts.form.update : texts.form.save), location && React.createElement(_components.Button, {
              type: "button",
              variant: "secondary",
              onClick: handleCancel
            }, texts.form.cancel)));
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./views/location-list
      *************************************/

      ims.set('./views/location-list', {
        hash: 315339402,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LocationList = LocationList;
          var React = require("react");
          var _components = require("pragmate-ui/components");
          function LocationList({
            locations,
            onEdit,
            onDelete,
            texts
          }) {
            if (locations.length === 0) {
              return React.createElement("div", {
                className: "location-list empty"
              }, React.createElement("p", null, texts.list.empty));
            }
            return React.createElement("div", {
              className: "location-list"
            }, React.createElement("h2", null, texts.list.title), React.createElement("table", {
              className: "location-table"
            }, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null, texts.form.estado), React.createElement("th", null, texts.form.ciudad), React.createElement("th", null, texts.form.codigo), React.createElement("th", null, texts.list.actions))), React.createElement("tbody", null, locations.map(location => React.createElement("tr", {
              key: location.id
            }, React.createElement("td", null, location.estado), React.createElement("td", null, location.ciudad), React.createElement("td", null, location.codigo), React.createElement("td", {
              className: "actions"
            }, React.createElement(_components.Button, {
              variant: "secondary",
              onClick: () => onEdit(location.id)
            }, texts.list.edit), React.createElement(_components.Button, {
              variant: "danger",
              onClick: () => onDelete(location.id)
            }, texts.list.delete)))))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3IiwiZXhwb3J0cyIsIl9iYXNlIiwiX2xvY2F0aW9ucyIsIl9iZXlvbmRfY29udGV4dCIsIkJhc2VTdG9yZU1hbmFnZXIiLCJsb2NhdGlvbnMiLCJyZWFkeSIsImNvbnN0cnVjdG9yIiwibW9kdWxlIiwic3BlY2lmaWVyIiwiTG9jYXRpb25zU3RvcmUiLCJsb2FkIiwidHJpZ2dlciIsIl9tb2RlbCIsIkxvY2F0aW9uSXRlbSIsIlJlYWN0aXZlTW9kZWwiLCJkYXRhIiwicHJvcGVydGllcyIsIk1hcCIsIkFycmF5IiwiZnJvbSIsInZhbHVlcyIsImxvYWRJbml0aWFsRGF0YSIsIiNsb2FkSW5pdGlhbERhdGEiLCJhZGQiLCJpZCIsImVzdGFkbyIsImNpdWRhZCIsImNvZGlnbyIsIkRhdGUiLCJub3ciLCJ0b1N0cmluZyIsImxvY2F0aW9uIiwic2V0IiwidHJpZ2dlckV2ZW50IiwidXBkYXRlIiwiZ2V0IiwiZGVsZXRlIiwiUmVhY3QiLCJNb2R1bGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZU1vZHVsZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX3VpIiwiX2hvb2tzIiwiX2NvbnRleHQiLCJfbG9jYXRpb25MaXN0IiwiX2xvY2F0aW9uRm9ybSIsImVkaXRpbmdJZCIsInNldEVkaXRpbmdJZCIsInVzZVN0YXRlIiwidXNlU3RvcmUiLCJjcmVhdGVFbGVtZW50IiwiUGFnZUxvYWRlciIsImZldGNoaW5nIiwidGV4dHMiLCJ2YWx1ZSIsIm9uRWRpdCIsIm9uQ2FuY2VsIiwib25TYXZlIiwib25EZWxldGUiLCJlZGl0aW5nTG9jYXRpb24iLCJQcm92aWRlciIsIlBhZ2VDb250YWluZXIiLCJQYWdlVGl0bGUiLCJ0aXRsZSIsImNsYXNzTmFtZSIsIkxvY2F0aW9uRm9ybSIsIkxvY2F0aW9uTGlzdCIsIl9jb21wb25lbnRzIiwic2V0RXN0YWRvIiwic2V0Q2l1ZGFkIiwic2V0Q29kaWdvIiwidXNlRWZmZWN0IiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiaGFuZGxlQ2FuY2VsIiwiaXNEaXNhYmxlZCIsIm9uU3VibWl0IiwiZm9ybSIsInRpdGxlRWRpdCIsInRpdGxlTmV3IiwiaHRtbEZvciIsInR5cGUiLCJvbkNoYW5nZSIsInRhcmdldCIsInBsYWNlaG9sZGVyIiwiZXN0YWRvUGxhY2Vob2xkZXIiLCJjaXVkYWRQbGFjZWhvbGRlciIsImNvZGlnb1BsYWNlaG9sZGVyIiwiQnV0dG9uIiwidmFyaWFudCIsImRpc2FibGVkIiwic2F2ZSIsIm9uQ2xpY2siLCJjYW5jZWwiLCJsZW5ndGgiLCJsaXN0IiwiZW1wdHkiLCJhY3Rpb25zIiwibWFwIiwia2V5IiwiZWRpdCJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3N0b3JlL2xvY2F0aW9ucy50cyIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9sb2NhdGlvbi1mb3JtLnRzeCIsIi90cy92aWV3cy9sb2NhdGlvbi1saXN0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFBT0csVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNuRSxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJ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