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
          "vspecifier": "@aimpact/ailearn-app@0.0.27/organizations/create",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['react', dependency_6], ['pragmate-ui/toast', dependency_7], ['@beyond-js/kernel/routing', dependency_8], ['@aimpact/ailearn-app/components/ui', dependency_9], ['@aimpact/ailearn-app/config', dependency_10], ['pragmate-ui/form', dependency_11], ['pragmate-ui/components', dependency_12], ['@beyond-js/react-18-widgets/hooks', dependency_13]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-organizations-create",
        "vspecifier": "@aimpact/ailearn-app@0.0.27/organizations/create.widget",
        "is": "page",
        "route": "/organizations/create",
        "layout": "general-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.27/organizations/create.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 1975430738,
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
              console.log('this.uri.qs.get(id)', this.uri.qs.get('id'));
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
        hash: 3687258705,
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
                this.#model = new _core.Organization({});
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
        hash: 1493442336,
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
                _routing.routing.replaceState({}, null, `/organizations/view/${model.id}`);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImNvbnNvbGUiLCJsb2ciLCJ1cmkiLCJxcyIsImdldCIsImxvYWQiLCJoaWRlIiwiY2xlYXIiLCJleHBvcnRzIiwiX2NvcmUiLCJfbW9kZWwiLCJSZWFjdGl2ZU1vZGVsIiwibW9kZWwiLCJ1bmRlZmluZWQiLCJyZWFkeSIsIk9yZ2FuaXphdGlvbiIsImUiLCJlcnJvciIsImRlbGV0ZSIsImlkIiwiY2xhc3Nyb29tcyIsInJlbW92ZSIsInRyaWdnZXIiLCJzYXZlIiwidmFsdWVzIiwiZmV0Y2hpbmciLCJzdGF0dXMiLCJkYXRhIiwiRXJyb3IiLCJSZWFjdCIsIk1vZHVsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlTW9kdWxlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfdG9hc3QiLCJfcm91dGluZyIsInVzZUZvcm0iLCJ0ZXh0cyIsImRlZmF1bHRWYWx1ZXMiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJzZXRWYWx1ZXMiLCJ1c2VTdGF0ZSIsInNldEZldGNoaW5nIiwic2V0RXJyb3IiLCJvbkNoYW5nZSIsImN1cnJlbnRUYXJnZXQiLCJ0YXJnZXQiLCJjdXJyZW50VmFsdWUiLCJ2YWx1ZSIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsInB1Ymxpc2giLCJ0b2FzdCIsInN1Y2Nlc3MiLCJjcmVhdGUiLCJyb3V0aW5nIiwicmVwbGFjZVN0YXRlIiwibWVzc2FnZSIsIl91aSIsIl9jb25maWciLCJfY29udGV4dCIsIkhlYWRlciIsImNyZWF0ZUVsZW1lbnQiLCJOYXZiYXJIZWFkZXIiLCJicmVhZGNydW1iIiwiZGVmYXVsdCIsInBhcmFtcyIsIkFQUF9OQU1FIiwib3JnYW5pemF0aW9ucyIsIm1hbmFnZW1lbnQiLCJfZm9ybSIsIl9jb21wb25lbnRzIiwiX2hlYWRlciIsIl91c2VNb2RlbCIsIl9ldmVudHMiLCJ1c2VNb2RlbCIsImRpc2FibGVkIiwiY29udGV4dFZhbHVlIiwiUHJvdmlkZXIiLCJQYWdlQ29udGFpbmVyIiwiY2xhc3NOYW1lIiwidGl0bGUiLCJGb3JtIiwiSW5wdXQiLCJsYWJlbCIsInBsYWNlaG9sZGVyIiwidmFyaWFudCIsInR5cGUiLCJyZXF1aXJlZCIsIlRleHRhcmVhIiwiQnV0dG9uIiwiYWN0aW9ucyIsIl9ob29rcyIsIl9iZXlvbmRfY29udGV4dCIsInNldFJlYWR5IiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidXNlRWZmZWN0Iiwib24iLCJjbGVhblVwIiwib2ZmIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9ldmVudHMudHMiLCIvdHMvdmlld3MvaGVhZGVyLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvdXNlLW1vZGVsLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlKLE1BQUEsQ0FBQU0sWUFBWSxFQUFF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