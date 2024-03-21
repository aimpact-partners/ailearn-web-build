System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.4/page", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.1.11/model", "react@18.2.0", "pragmate-ui@0.0.6/toast", "@beyond-js/kernel@0.1.9/routing", "@aimpact/ailearn-app@0.0.27/components/ui", "@aimpact/ailearn-app@0.0.27/config", "pragmate-ui@0.0.6/form", "pragmate-ui@0.0.6/components", "@beyond-js/react-18-widgets@1.0.4/hooks"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, bimport, __Bundle, __pkg, ims, Controller, Header, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    Header: void 0
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
    }, function (_aimpactAilearnSdk100Core) {
      dependency_4 = _aimpactAilearnSdk100Core;
    }, function (_beyondJsReactive1111Model) {
      dependency_5 = _beyondJsReactive1111Model;
    }, function (_react) {
      dependency_6 = _react;
    }, function (_pragmateUi006Toast) {
      dependency_7 = _pragmateUi006Toast;
    }, function (_beyondJsKernel019Routing) {
      dependency_8 = _beyondJsKernel019Routing;
    }, function (_aimpactAilearnApp0027ComponentsUi) {
      dependency_9 = _aimpactAilearnApp0027ComponentsUi;
    }, function (_aimpactAilearnApp0027Config) {
      dependency_10 = _aimpactAilearnApp0027Config;
    }, function (_pragmateUi006Form) {
      dependency_11 = _pragmateUi006Form;
    }, function (_pragmateUi006Components) {
      dependency_12 = _pragmateUi006Components;
    }, function (_beyondJsReact18Widgets104Hooks) {
      dependency_13 = _beyondJsReact18Widgets104Hooks;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.11"], ["pragmate-ui", "0.0.6"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@bgroup/http-suite", "1.0.3"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["framer-motion", "10.17.8"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.27"], ["@aimpact/ailearn-app", "0.0.27"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.27/classrooms/create",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['react', dependency_6], ['pragmate-ui/toast', dependency_7], ['@beyond-js/kernel/routing', dependency_8], ['@aimpact/ailearn-app/components/ui', dependency_9], ['@aimpact/ailearn-app/config', dependency_10], ['pragmate-ui/form', dependency_11], ['pragmate-ui/components', dependency_12], ['@beyond-js/react-18-widgets/hooks', dependency_13]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-classrooms-create",
        "vspecifier": "@aimpact/ailearn-app@0.0.27/classrooms/create.widget",
        "is": "page",
        "route": "/classrooms/create",
        "layout": "general-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.27/classrooms/create.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 940274451,
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
            show() {
              this.#store.load(this.uri.qs.get('id'));
            }
            hide() {
              this.#store.clear();
            }
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 224328658,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _core = require("@aimpact/ailearn-sdk/core");
          var _model = require("@beyond-js/reactive/model");
          class StoreManager extends _model.ReactiveModel {
            #model;
            get model() {
              return this.#model;
            }
            clear() {
              this.#model = undefined;
              this.ready = false;
            }
            async load() {
              try {
                this.ready = false;
                this.#model = new _core.Classroom({});
              } catch (e) {
                console.error(e);
              } finally {
                this.ready = true;
              }
            }
            async delete(id) {
              this.#model.classrooms.remove(id);
              this.trigger('change');
            }
            async save(values) {
              try {
                this.fetching = true;
                const {
                  status,
                  data
                } = await this.model.save({
                  ...values
                });
                if (!status) throw new Error('error publishing classroom');
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

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 952274567,
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

      /******************************
      INTERNAL MODULE: ./views/events
      ******************************/

      ims.set('./views/events', {
        hash: 1376994030,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useForm = useForm;
          var React = require("react");
          var _toast = require("pragmate-ui/toast");
          var _routing = require("@beyond-js/kernel/routing");
          function useForm(ready, store, texts) {
            const defaultValues = {
              name: store?.model?.name || '',
              description: store?.model?.description || ''
            };
            const [values, setValues] = React.useState(defaultValues);
            const [fetching, setFetching] = React.useState(false);
            const [error, setError] = React.useState('');
            if (!ready) return {};
            const {
              model
            } = store;
            const onChange = ({
              currentTarget: target
            }) => {
              const currentValue = {
                ...values
              };
              currentValue[target.name] = target.value;
              setValues(currentValue);
              setError('');
            };
            const onSubmit = async event => {
              event.preventDefault();
              event.stopPropagation();
              setFetching(true);
              try {
                await model.publish(values);
                _toast.toast.success(texts.create.success);
                _routing.routing.replaceState({}, null, `/classrooms/view/${model.id}`);
              } catch (e) {
                setError(e.message);
                _toast.toast.error(texts.create.error);
              } finally {
                setFetching(false);
              }
            };
            return {
              values,
              fetching,
              setFetching,
              onChange,
              onSubmit
            };
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./views/header
      ******************************/

      ims.set('./views/header', {
        hash: 2772189580,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Header = Header;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var React = require("react");
          var _config = require("@aimpact/ailearn-app/config");
          var _context = require("./context");
          /*bundle*/
          function Header() {
            const {
              texts
            } = (0, _context.useModuleContext)();
            return React.createElement("section", null, React.createElement(_ui.NavbarHeader, {
              breadcrumb: [[_config.default.params.APP_NAME, '/'], [texts.breadcrumb.organizations, '/organizations/list'], [texts.breadcrumb.management, '']]
            }));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 1327922586,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var React = require("react");
          var _form = require("pragmate-ui/form");
          var _components = require("pragmate-ui/components");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("./context");
          var _header = require("./header");
          var _useModel = require("./use-model");
          var _events = require("./events");
          function View({
            store
          }) {
            const {
              ready,
              texts
            } = (0, _useModel.useModel)(store);
            const {
              fetching,
              values,
              onChange,
              onSubmit
            } = (0, _events.useForm)(ready, store, texts);
            if (!ready) return null;
            const disabled = {
              disabled: fetching || values.name === '' || values.description === ''
            };
            const contextValue = {
              texts,
              store
            };
            return React.createElement(_context.ModuleContext.Provider, {
              value: contextValue
            }, React.createElement(_header.Header, null), React.createElement(_ui.PageContainer, {
              className: "form-page-container",
              fetching: fetching
            }, React.createElement("header", {
              className: "page__header"
            }, React.createElement("h3", null, texts.create.title)), React.createElement(_form.Form, {
              onSubmit: onSubmit,
              className: "form__container"
            }, React.createElement(_form.Input, {
              label: texts.create.name.label,
              placeholder: texts.create.name.placeholder,
              value: values.name,
              name: "name",
              variant: "floating",
              type: "text",
              onChange: onChange,
              required: true
            }), React.createElement(_form.Textarea, {
              label: texts.create.description.label,
              name: "description",
              variant: "floating",
              value: values.description,
              placeholder: texts.create.description.placeholder,
              onChange: onChange,
              required: true
            }), React.createElement("div", {
              className: "form__footer"
            }, React.createElement(_components.Button, {
              fetching: fetching,
              ...disabled,
              variant: "primary",
              type: "submit"
            }, texts.create.actions.save)))));
          }
        }
      });

      /*********************************
      INTERNAL MODULE: ./views/use-model
      *********************************/

      ims.set('./views/use-model', {
        hash: 1182693627,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useModel = useModel;
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var React = require("react");
          var _beyond_context = require("beyond_context");
          function useModel(store) {
            const [ready, setReady] = React.useState(store.ready);
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            React.useEffect(() => {
              const onChange = () => {};
              store.on('change', onChange);
              const cleanUp = () => store.off('change', onChange);
              return cleanUp;
            });
            return {
              ready: ready && textsReady,
              store,
              texts
            };
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./views/header",
        "from": "Header",
        "name": "Header"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'Header') && _export("Header", Header = require ? require('./views/header').Header : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJxcyIsImdldCIsImhpZGUiLCJjbGVhciIsImV4cG9ydHMiLCJfY29yZSIsIl9tb2RlbCIsIlJlYWN0aXZlTW9kZWwiLCJtb2RlbCIsInVuZGVmaW5lZCIsInJlYWR5IiwiQ2xhc3Nyb29tIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsImRlbGV0ZSIsImlkIiwiY2xhc3Nyb29tcyIsInJlbW92ZSIsInRyaWdnZXIiLCJzYXZlIiwidmFsdWVzIiwiZmV0Y2hpbmciLCJzdGF0dXMiLCJkYXRhIiwiRXJyb3IiLCJSZWFjdCIsIk1vZHVsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlTW9kdWxlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfdG9hc3QiLCJfcm91dGluZyIsInVzZUZvcm0iLCJ0ZXh0cyIsImRlZmF1bHRWYWx1ZXMiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJzZXRWYWx1ZXMiLCJ1c2VTdGF0ZSIsInNldEZldGNoaW5nIiwic2V0RXJyb3IiLCJvbkNoYW5nZSIsImN1cnJlbnRUYXJnZXQiLCJ0YXJnZXQiLCJjdXJyZW50VmFsdWUiLCJ2YWx1ZSIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsInB1Ymxpc2giLCJ0b2FzdCIsInN1Y2Nlc3MiLCJjcmVhdGUiLCJyb3V0aW5nIiwicmVwbGFjZVN0YXRlIiwibWVzc2FnZSIsIl91aSIsIl9jb25maWciLCJfY29udGV4dCIsIkhlYWRlciIsImNyZWF0ZUVsZW1lbnQiLCJOYXZiYXJIZWFkZXIiLCJicmVhZGNydW1iIiwiZGVmYXVsdCIsInBhcmFtcyIsIkFQUF9OQU1FIiwib3JnYW5pemF0aW9ucyIsIm1hbmFnZW1lbnQiLCJfZm9ybSIsIl9jb21wb25lbnRzIiwiX2hlYWRlciIsIl91c2VNb2RlbCIsIl9ldmVudHMiLCJ1c2VNb2RlbCIsImRpc2FibGVkIiwiY29udGV4dFZhbHVlIiwiUHJvdmlkZXIiLCJQYWdlQ29udGFpbmVyIiwiY2xhc3NOYW1lIiwidGl0bGUiLCJGb3JtIiwiSW5wdXQiLCJsYWJlbCIsInBsYWNlaG9sZGVyIiwidmFyaWFudCIsInR5cGUiLCJyZXF1aXJlZCIsIlRleHRhcmVhIiwiQnV0dG9uIiwiYWN0aW9ucyIsIl9ob29rcyIsIl9iZXlvbmRfY29udGV4dCIsInNldFJlYWR5IiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidXNlRWZmZWN0Iiwib24iLCJjbGVhblVwIiwib2ZmIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9ldmVudHMudHMiLCIvdHMvdmlld3MvaGVhZGVyLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvdXNlLW1vZGVsLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlKLE1BQUEsQ0FBQU0sWUFBWSxFQUFFO2NBQ2hDLE9B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