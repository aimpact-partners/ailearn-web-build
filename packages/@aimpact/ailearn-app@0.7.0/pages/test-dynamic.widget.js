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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3IiwiZXhwb3J0cyIsIl9iYXNlIiwiX2xvY2F0aW9ucyIsIl9iZXlvbmRfY29udGV4dCIsIkJhc2VTdG9yZU1hbmFnZXIiLCJsb2NhdGlvbnMiLCJyZWFkeSIsImNvbnN0cnVjdG9yIiwibW9kdWxlIiwic3BlY2lmaWVyIiwiTG9jYXRpb25zU3RvcmUiLCJsb2FkIiwidHJpZ2dlciIsIl9tb2RlbCIsIkxvY2F0aW9uSXRlbSIsIlJlYWN0aXZlTW9kZWwiLCJkYXRhIiwicHJvcGVydGllcyIsIk1hcCIsIkFycmF5IiwiZnJvbSIsInZhbHVlcyIsImxvYWRJbml0aWFsRGF0YSIsIiNsb2FkSW5pdGlhbERhdGEiLCJhZGQiLCJpZCIsImVzdGFkbyIsImNpdWRhZCIsImNvZGlnbyIsIkRhdGUiLCJub3ciLCJ0b1N0cmluZyIsImxvY2F0aW9uIiwic2V0IiwidHJpZ2dlckV2ZW50IiwidXBkYXRlIiwiZ2V0IiwiZGVsZXRlIiwiUmVhY3QiLCJNb2R1bGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZU1vZHVsZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX3VpIiwiX2hvb2tzIiwiX2NvbnRleHQiLCJfbG9jYXRpb25MaXN0IiwiX2xvY2F0aW9uRm9ybSIsImVkaXRpbmdJZCIsInNldEVkaXRpbmdJZCIsInVzZVN0YXRlIiwidXNlU3RvcmUiLCJjcmVhdGVFbGVtZW50IiwiUGFnZUxvYWRlciIsImZldGNoaW5nIiwidGV4dHMiLCJ2YWx1ZSIsIm9uRWRpdCIsIm9uQ2FuY2VsIiwib25TYXZlIiwib25EZWxldGUiLCJlZGl0aW5nTG9jYXRpb24iLCJQcm92aWRlciIsIlBhZ2VDb250YWluZXIiLCJQYWdlVGl0bGUiLCJ0aXRsZSIsImNsYXNzTmFtZSIsIkxvY2F0aW9uRm9ybSIsIkxvY2F0aW9uTGlzdCIsIl9jb21wb25lbnRzIiwic2V0RXN0YWRvIiwic2V0Q2l1ZGFkIiwic2V0Q29kaWdvIiwidXNlRWZmZWN0IiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiaGFuZGxlQ2FuY2VsIiwiaXNEaXNhYmxlZCIsIm9uU3VibWl0IiwiZm9ybSIsInRpdGxlRWRpdCIsInRpdGxlTmV3IiwiaHRtbEZvciIsInR5cGUiLCJvbkNoYW5nZSIsInRhcmdldCIsInBsYWNlaG9sZGVyIiwiZXN0YWRvUGxhY2Vob2xkZXIiLCJjaXVkYWRQbGFjZWhvbGRlciIsImNvZGlnb1BsYWNlaG9sZGVyIiwiQnV0dG9uIiwidmFyaWFudCIsImRpc2FibGVkIiwic2F2ZSIsIm9uQ2xpY2siLCJjYW5jZWwiLCJsZW5ndGgiLCJsaXN0IiwiZW1wdHkiLCJhY3Rpb25zIiwibWFwIiwia2V5IiwiZWRpdCJdLCJzb3VyY2VzIjpbIi8vdHMvY29udHJvbGxlci50cyIsIi8vdHMvc3RvcmUudHMiLCIvL3RzL3N0b3JlL2xvY2F0aW9ucy50cyIsIi8vdHMvdmlld3MvY29udGV4dC50cyIsIi8vdHMvdmlld3MvaW5kZXgudHN4IiwiLy90cy92aWV3cy9sb2NhdGlvbi1mb3JtLnRzeCIsIi8vdHMvdmlld3MvbG9jYXRpb24tbGlzdC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQU9HLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDbkUsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFB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