System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.1/page", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.1.12/model", "react@18.2.0", "@aimpact/ailearn-app@0.0.32/components/navbar-header.code", "@aimpact/ailearn-app@0.0.32/config", "pragmate-ui@0.1.1/form", "pragmate-ui@0.1.1/components", "@aimpact/ailearn-app@0.0.32/components/ui", "pragmate-ui@0.1.1/toast", "@beyond-js/kernel@0.1.9/routing", "@beyond-js/react-18-widgets@1.1.1/hooks"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, bimport, __Bundle, __pkg, ims, Controller, Header, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    Header: void 0
  });
  return {
    setters: [function (_beyondJsWidgets110Render) {
      dependency_0 = _beyondJsWidgets110Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_beyondJsReact18Widgets111Page) {
      dependency_3 = _beyondJsReact18Widgets111Page;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_4 = _aimpactAilearnSdk100Core;
    }, function (_beyondJsReactive1112Model) {
      dependency_5 = _beyondJsReactive1112Model;
    }, function (_react) {
      dependency_6 = _react;
    }, function (_aimpactAilearnApp0032ComponentsNavbarHeaderCode) {
      dependency_7 = _aimpactAilearnApp0032ComponentsNavbarHeaderCode;
    }, function (_aimpactAilearnApp0032Config) {
      dependency_8 = _aimpactAilearnApp0032Config;
    }, function (_pragmateUi011Form) {
      dependency_9 = _pragmateUi011Form;
    }, function (_pragmateUi011Components) {
      dependency_10 = _pragmateUi011Components;
    }, function (_aimpactAilearnApp0032ComponentsUi) {
      dependency_11 = _aimpactAilearnApp0032ComponentsUi;
    }, function (_pragmateUi011Toast) {
      dependency_12 = _pragmateUi011Toast;
    }, function (_beyondJsKernel019Routing) {
      dependency_13 = _beyondJsKernel019Routing;
    }, function (_beyondJsReact18Widgets111Hooks) {
      dependency_14 = _beyondJsReact18Widgets111Hooks;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/http-suite", "1.0.3"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.1.1"], ["apexcharts", "3.48.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["firebase", "10.9.0"], ["firebase-admin", "11.11.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["@aimpact/ailearn-app", "0.0.32"], ["@aimpact/ailearn-app", "0.0.32"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.32/organizations/create",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['react', dependency_6], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_7], ['@aimpact/ailearn-app/config', dependency_8], ['pragmate-ui/form', dependency_9], ['pragmate-ui/components', dependency_10], ['@aimpact/ailearn-app/components/ui', dependency_11], ['pragmate-ui/toast', dependency_12], ['@beyond-js/kernel/routing', dependency_13], ['@beyond-js/react-18-widgets/hooks', dependency_14]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-organizations-create",
        "vspecifier": "@aimpact/ailearn-app@0.0.32/organizations/create.widget",
        "is": "page",
        "route": "/organizations/create",
        "layout": "general-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.32/organizations/create.widget');
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
      INTERNAL MODULE: ./views/header
      ******************************/

      ims.set('./views/header', {
        hash: 890798125,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Header = Header;
          var _navbarHeader = require("@aimpact/ailearn-app/components/navbar-header.code");
          var React = require("react");
          var _config = require("@aimpact/ailearn-app/config");
          var _context = require("./context");
          /*bundle*/
          function Header() {
            const {
              texts
            } = (0, _context.useModuleContext)();
            return React.createElement("section", null, React.createElement(_navbarHeader.NavbarHeader, {
              breadcrumb: [[_config.default.params.APP_NAME, '/'], [texts.breadcrumb.organizations, '/organizations/list'], [texts.breadcrumb.management, '']]
            }));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 1305740004,
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
          var _useForm = require("./use-form");
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
            } = (0, _useForm.useForm)(ready, store, texts);
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
              type: "text",
              onChange: onChange,
              required: true
            }), React.createElement(_form.Textarea, {
              label: texts.create.description.label,
              name: "description",
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

      /********************************
      INTERNAL MODULE: ./views/use-form
      ********************************/

      ims.set('./views/use-form', {
        hash: 3357955599,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useForm = useForm;
          var React = require("react");
          var _toast = require("pragmate-ui/toast");
          var _routing = require("@beyond-js/kernel/routing");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          function useForm(ready, store, texts) {
            const defaultValues = {
              name: store?.model?.name || '',
              description: store?.model?.description || ''
            };
            const [values, setValues] = React.useState(defaultValues);
            const [fetching, setFetching] = React.useState(false);
            const [error, setError] = React.useState('');
            (0, _hooks.useBinder)([store], () => {
              if (!store.ready) {
                setValues(defaultValues);
              }
            });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJxcyIsImdldCIsImhpZGUiLCJjbGVhciIsImV4cG9ydHMiLCJfY29yZSIsIl9tb2RlbCIsIlJlYWN0aXZlTW9kZWwiLCJtb2RlbCIsInVuZGVmaW5lZCIsInJlYWR5IiwiT3JnYW5pemF0aW9uIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsImRlbGV0ZSIsImlkIiwiY2xhc3Nyb29tcyIsInJlbW92ZSIsInRyaWdnZXIiLCJzYXZlIiwidmFsdWVzIiwiZmV0Y2hpbmciLCJzdGF0dXMiLCJkYXRhIiwiRXJyb3IiLCJSZWFjdCIsIk1vZHVsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlTW9kdWxlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfbmF2YmFySGVhZGVyIiwiX2NvbmZpZyIsIl9jb250ZXh0IiwiSGVhZGVyIiwidGV4dHMiLCJjcmVhdGVFbGVtZW50IiwiTmF2YmFySGVhZGVyIiwiYnJlYWRjcnVtYiIsImRlZmF1bHQiLCJwYXJhbXMiLCJBUFBfTkFNRSIsIm9yZ2FuaXphdGlvbnMiLCJtYW5hZ2VtZW50IiwiX2Zvcm0iLCJfY29tcG9uZW50cyIsIl91aSIsIl9oZWFkZXIiLCJfdXNlTW9kZWwiLCJfdXNlRm9ybSIsInVzZU1vZGVsIiwib25DaGFuZ2UiLCJvblN1Ym1pdCIsInVzZUZvcm0iLCJkaXNhYmxlZCIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsImNvbnRleHRWYWx1ZSIsIlByb3ZpZGVyIiwidmFsdWUiLCJQYWdlQ29udGFpbmVyIiwiY2xhc3NOYW1lIiwiY3JlYXRlIiwidGl0bGUiLCJGb3JtIiwiSW5wdXQiLCJsYWJlbCIsInBsYWNlaG9sZGVyIiwidHlwZSIsInJlcXVpcmVkIiwiVGV4dGFyZWEiLCJCdXR0b24iLCJ2YXJpYW50IiwiYWN0aW9ucyIsIl90b2FzdCIsIl9yb3V0aW5nIiwiX2hvb2tzIiwiZGVmYXVsdFZhbHVlcyIsInNldFZhbHVlcyIsInVzZVN0YXRlIiwic2V0RmV0Y2hpbmciLCJzZXRFcnJvciIsInVzZUJpbmRlciIsImN1cnJlbnRUYXJnZXQiLCJ0YXJnZXQiLCJjdXJyZW50VmFsdWUiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwicHVibGlzaCIsInRvYXN0Iiwic3VjY2VzcyIsInJvdXRpbmciLCJyZXBsYWNlU3RhdGUiLCJtZXNzYWdlIiwiX2JleW9uZF9jb250ZXh0Iiwic2V0UmVhZHkiLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ1c2VFZmZlY3QiLCJvbiIsImNsZWFuVXAiLCJvZmYiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2hlYWRlci50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3VzZS1mb3JtLnRzIiwiL3RzL3ZpZXdzL3VzZS1tb2RlbC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlKLE1BQUEsQ0FBQU0sWUFBWSxFQUFFO2NBQ2hDLE9BQU8sSUFBSSxDQUFDLENBQUFGLEtBQU07WUFDbkI7WUFDQSxJQUFJRyxNQUFNQSxDQUFBO2NBQ1QsT0FBT04sTUFBQSxDQUFBTyxJQUFJO1lBQ1o7WUFFQUMsSUFBSUEsQ0FBQTtjQUNILElBQUksQ0FBQyxDQUFBTCxLQUFNLENBQUNNLElBQUksQ0FBQyxJQUFJLENBQUNDLEdBQUcsQ0FBQ0MsRUFBRSxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDeEM7WUFFQUMsSUFBSUEsQ0FBQTtjQUNILElBQUksQ0FBQyxDQUFBVixLQUFNLENBQUNXLEtBQUssRUFBRTtZQUNwQjs7VUFDQUMsT0FBQSxDQUFBZCxVQUFBLEdBQUFBLFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdEJELElBQUFlLEtBQUEsR0FBQWxCLE9BQUE7VUFDQSxJQUFBbUIsTUFBQSxHQUFBbkIsT0FBQTtVQVdNLE1BQU9PLFlBQWEsU0FBUVksTUFBQSxDQUFBQyxhQUEyQjtZQUM1RCxDQUFBQyxLQUFNO1lBQ04sSUFBSUEsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU07WUFDbkI7WUFFQUwsS0FBS0EsQ0FBQTtjQUNKLElBQUksQ0FBQyxDQUFBSyxLQUFNLEdBQUdDLFNBQVM7Y0FDdkIsSUFBSSxDQUFDQyxLQUFLLEdBQUcsS0FBSztZQUNuQjtZQUVBLE1BQU1aLElBQUlBLENBQUE7Y0FDVCxJQUFJO2dCQUNILElBQUksQ0FBQ1ksS0FBSyxHQUFHLEtBQUs7Z0JBQ2xCLElBQUksQ0FBQyxDQUFBRixLQUFNLEdBQUcsSUFBSUgsS0FBQSxDQUFBTSxZQUFZLENBQUMsRUFBRSxDQUFDO2VBQ2xDLENBQUMsT0FBT0MsQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUNDLEtBQUssQ0FBQ0YsQ0FBQyxDQUFDO2VBQ2hCLFNBQVM7Z0JBQ1QsSUFBSSxDQUFDRixLQUFLLEdBQUcsSUFBSTs7WUFFbkI7WUFFQSxNQUFNSyxNQUFNQSxDQUFDQyxFQUFFO2NBQ2QsSUFBSSxDQUFDLENBQUFSLEtBQU0sQ0FBQ1MsVUFBVSxDQUFDQyxNQUFNLENBQUNGLEVBQUUsQ0FBQztjQUNqQyxJQUFJLENBQUNHLE9BQU8sQ0FBQyxRQUFRLENBQUM7WUFDdkI7WUFFQSxNQUFNQyxJQUFJQSxDQUFDQyxNQUFNO2NBQ2hCLElBQUk7Z0JBQ0gsSUFBSSxDQUFDQyxRQUFRLEdBQUcsSUFBSTtnQkFDcEIsTUFBTTtrQkFBRUMsTUFBTTtrQkFBRUM7Z0JBQUksQ0FBRSxHQUFHLE1BQU0sSUFBSSxDQUFDaEIsS0FBSyxDQUFDWSxJQUFJLENBQUM7a0JBQUUsR0FBR0M7Z0JBQU0sQ0FBRSxDQUFDO2dCQUM3RCxJQUFJLENBQUNFLE1BQU0sRUFBRSxNQUFNLElBQUlFLEtBQUssQ0FBQyw0QkFBNEIsQ0FBQztnQkFDMUQsT0FBT0QsSUFBSTtlQUNYLENBQUMsT0FBT1osQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUNDLEtBQUssQ0FBQyxDQUFDLEVBQUVGLENBQUMsQ0FBQztlQUNuQixTQUFTO2dCQUNULElBQUksQ0FBQ1UsUUFBUSxHQUFHLEtBQUs7O1lBRXZCOztVQUNBbEIsT0FBQSxDQUFBVixZQUFBLEdBQUFBLFlBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbkRELElBQUFnQyxLQUFBLEdBQUF2QyxPQUFBO1VBU08sTUFBTXdDLGFBQWEsR0FBQXZCLE9BQUEsQ0FBQXVCLGFBQUEsR0FBR0QsS0FBSyxDQUFDRSxhQUFhLENBQUMsRUFBeUIsQ0FBQztVQUNwRSxNQUFNQyxnQkFBZ0IsR0FBR0EsQ0FBQSxLQUFNSCxLQUFLLENBQUNJLFVBQVUsQ0FBQ0gsYUFBYSxDQUFDO1VBQUN2QixPQUFBLENBQUF5QixnQkFBQSxHQUFBQSxnQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNWdEUsSUFBQUUsYUFBQSxHQUFBNUMsT0FBQTtVQUNBLElBQUF1QyxLQUFBLEdBQUF2QyxPQUFBO1VBQ0EsSUFBQTZDLE9BQUEsR0FBQTdDLE9BQUE7VUFDQSxJQUFBOEMsUUFBQSxHQUFBOUMsT0FBQTtVQUNPO1VBQVUsU0FBVStDLE1BQU1BLENBQUE7WUFDaEMsTUFBTTtjQUFFQztZQUFLLENBQUUsR0FBRyxJQUFBRixRQUFBLENBQUFKLGdCQUFnQixHQUFFO1lBQ3BDLE9BQ0NILEtBQUEsQ0FBQVUsYUFBQSxrQkFDQ1YsS0FBQSxDQUFBVSxhQUFBLENBQUNMLGFBQUEsQ0FBQU0sWUFBWTtjQUNaQyxVQUFVLEVBQUUsQ0FDWCxDQUFDTixPQUFBLENBQUFPLE9BQU0sQ0FBQ0MsTUFBTSxDQUFDQyxRQUFRLEVBQUUsR0FBRyxDQUFDLEVBQzdCLENBQUNOLEtBQUssQ0FBQ0csVUFBVSxDQUFDSSxhQUFhLEVBQUUscUJBQXFCLENBQUMsRUFDdkQsQ0FBQ1AsS0FBSyxDQUFDRyxVQUFVLENBQUNLLFVBQVUsRUFBRSxFQUFFLENBQUM7WUFDakMsRUFDQSxDQUNPO1VBRVo7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDakJBLElBQUFqQixLQUFBLEdBQUF2QyxPQUFBO1VBQ0EsSUFBQXlELEtBQUEsR0FBQXpELE9BQUE7VUFFQSxJQUFBMEQsV0FBQSxHQUFBMUQsT0FBQTtVQUNBLElBQUEyRCxHQUFBLEdBQUEzRCxPQUFBO1VBQ0EsSUFBQThDLFFBQUEsR0FBQTlDLE9BQUE7VUFDQSxJQUFBNEQsT0FBQSxHQUFBNUQsT0FBQTtVQUNBLElBQUE2RCxTQUFBLEdBQUE3RCxPQUFBO1VBQ0EsSUFBQThELFFBQUEsR0FBQTlELE9BQUE7VUFFTSxTQUFVUyxJQUFJQSxDQUFDO1lBQUVKO1VBQUssQ0FBRTtZQUM3QixNQUFNO2NBQUVrQixLQUFLO2NBQUV5QjtZQUFLLENBQUUsR0FBRyxJQUFBYSxTQUFBLENBQUFFLFFBQVEsRUFBQzFELEtBQUssQ0FBQztZQUN4QyxNQUFNO2NBQUU4QixRQUFRO2NBQUVELE1BQU07Y0FBRThCLFFBQVE7Y0FBRUM7WUFBUSxDQUFFLEdBQUcsSUFBQUgsUUFBQSxDQUFBSSxPQUFPLEVBQUMzQyxLQUFLLEVBQUVsQixLQUFLLEVBQUUyQyxLQUFLLENBQUM7WUFDN0UsSUFBSSxDQUFDekIsS0FBSyxFQUFFLE9BQU8sSUFBSTtZQUV2QixNQUFNNEMsUUFBUSxHQUFHO2NBQUVBLFFBQVEsRUFBRWhDLFFBQVEsSUFBSUQsTUFBTSxDQUFDa0MsSUFBSSxLQUFLLEVBQUUsSUFBSWxDLE1BQU0sQ0FBQ21DLFdBQVcsS0FBSztZQUFFLENBQUU7WUFDMUYsTUFBTUMsWUFBWSxHQUFHO2NBQUV0QixLQUFLO2NBQUUzQztZQUFLLENBQUU7WUFFckMsT0FDQ2tDLEtBQUEsQ0FBQVUsYUFBQSxDQUFDSCxRQUFBLENBQUFOLGFBQWEsQ0FBQytCLFFBQVE7Y0FBQ0MsS0FBSyxFQUFFRjtZQUFZLEdBQzFDL0IsS0FBQSxDQUFBVSxhQUFBLENBQUNXLE9BQUEsQ0FBQWIsTUFBTSxPQUFHLEVBQ1ZSLEtBQUEsQ0FBQVUsYUFBQSxDQUFDVSxHQUFBLENBQUFjLGFBQWE7Y0FBQ0MsU0FBUyxFQUFDLHFCQUFxQjtjQUFDdkMsUUFBUSxFQUFFQTtZQUFRLEdBQ2hFSSxLQUFBLENBQUFVLGFBQUE7Y0FBUXlCLFNBQVMsRUFBQztZQUFjLEdBQy9CbkMsS0FBQSxDQUFBVSxhQUFBLGFBQUtELEtBQUssQ0FBQzJCLE1BQU0sQ0FBQ0MsS0FBSyxDQUFNLENBQ3JCLEVBQ1RyQyxLQUFBLENBQUFVLGFBQUEsQ0FBQ1EsS0FBQSxDQUFBb0IsSUFBSTtjQUFDWixRQUFRLEVBQUVBLFFBQVE7Y0FBRVMsU0FBUyxFQUFDO1lBQWlCLEdBQ3BEbkMsS0FBQSxDQUFBVSxhQUFBLENBQUNRLEtBQUEsQ0FBQXFCLEtBQUs7Y0FDTEMsS0FBSyxFQUFFL0IsS0FBSyxDQUFDMkIsTUFBTSxDQUFDUCxJQUFJLENBQUNXLEtBQUs7Y0FDOUJDLFdBQVcsRUFBRWhDLEtBQUssQ0FBQzJCLE1BQU0sQ0FBQ1AsSUFBSSxDQUFDWSxXQUFXO2NBQzFDUixLQUFLLEVBQUV0QyxNQUFNLENBQUNrQyxJQUFJO2NBQ2xCQSxJQUFJLEVBQUMsTUFBTTtjQUNYYSxJQUFJLEVBQUMsTUFBTTtjQUNYakIsUUFBUSxFQUFFQSxRQUFRO2NBQ2xCa0IsUUFBUTtZQUFBLEVBQ1AsRUFDRjNDLEtBQUEsQ0FBQVUsYUFBQSxDQUFDUSxLQUFBLENBQUEwQixRQUFRO2NBQ1JKLEtBQUssRUFBRS9CLEtBQUssQ0FBQzJCLE1BQU0sQ0FBQ04sV0FBVyxDQUFDVSxLQUFLO2NBQ3JDWCxJQUFJLEVBQUMsYUFBYTtjQUNsQkksS0FBSyxFQUFFdEMsTUFBTSxDQUFDbUMsV0FBVztjQUN6QlcsV0FBVyxFQUFFaEMsS0FBSyxDQUFDMkIsTUFBTSxDQUFDTixXQUFXLENBQUNXLFdBQVc7Y0FDakRoQixRQUFRLEVBQUVBLFFBQVE7Y0FDbEJrQixRQUFRO1lBQUEsRUFDUCxFQUNGM0MsS0FBQSxDQUFBVSxhQUFBO2NBQUt5QixTQUFTLEVBQUM7WUFBYyxHQUM1Qm5DLEtBQUEsQ0FBQVUsYUFBQSxDQUFDUyxXQUFBLENBQUEwQixNQUFNO2NBQUNqRCxRQUFRLEVBQUVBLFFBQVE7Y0FBQSxHQUFNZ0MsUUFBUTtjQUFFa0IsT0FBTyxFQUFDLFNBQVM7Y0FBQ0osSUFBSSxFQUFDO1lBQVEsR0FDdkVqQyxLQUFLLENBQUMyQixNQUFNLENBQUNXLE9BQU8sQ0FBQ3JELElBQUksQ0FDbEIsQ0FDSixDQUNBLENBQ1EsQ0FDUTtVQUUzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNwREEsSUFBQU0sS0FBQSxHQUFBdkMsT0FBQTtVQUNBLElBQUF1RixNQUFBLEdBQUF2RixPQUFBO1VBQ0EsSUFBQXdGLFFBQUEsR0FBQXhGLE9BQUE7VUFDQSxJQUFBeUYsTUFBQSxHQUFBekYsT0FBQTtVQUVNLFNBQVVrRSxPQUFPQSxDQUFDM0MsS0FBSyxFQUFFbEIsS0FBSyxFQUFFMkMsS0FBSztZQUMxQyxNQUFNMEMsYUFBYSxHQUFHO2NBQUV0QixJQUFJLEVBQUUvRCxLQUFLLEVBQUVnQixLQUFLLEVBQUUrQyxJQUFJLElBQUksRUFBRTtjQUFFQyxXQUFXLEVBQUVoRSxLQUFLLEVBQUVnQixLQUFLLEVBQUVnRCxXQUFXLElBQUk7WUFBRSxDQUFFO1lBQ3RHLE1BQU0sQ0FBQ25DLE1BQU0sRUFBRXlELFNBQVMsQ0FBQyxHQUFHcEQsS0FBSyxDQUFDcUQsUUFBUSxDQUFDRixhQUFhLENBQUM7WUFDekQsTUFBTSxDQUFDdkQsUUFBUSxFQUFFMEQsV0FBVyxDQUFDLEdBQUd0RCxLQUFLLENBQUNxRCxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3JELE1BQU0sQ0FBQ2pFLEtBQUssRUFBRW1FLFFBQVEsQ0FBQyxHQUFHdkQsS0FBSyxDQUFDcUQsUUFBUSxDQUFDLEVBQUUsQ0FBQztZQUU1QyxJQUFBSCxNQUFBLENBQUFNLFNBQVMsRUFBQyxDQUFDMUYsS0FBSyxDQUFDLEVBQUUsTUFBSztjQUN2QixJQUFJLENBQUNBLEtBQUssQ0FBQ2tCLEtBQUssRUFBRTtnQkFDakJvRSxTQUFTLENBQUNELGFBQWEsQ0FBQzs7WUFFMUIsQ0FBQyxDQUFDO1lBQ0YsSUFBSSxDQUFDbkUsS0FBSyxFQUFFLE9BQU8sRUFBRTtZQUNyQixNQUFNO2NBQUVGO1lBQUssQ0FBRSxHQUFHaEIsS0FBSztZQUN2QixNQUFNMkQsUUFBUSxHQUFHQSxDQUFDO2NBQUVnQyxhQUFhLEVBQUVDO1lBQU0sQ0FBRSxLQUFJO2NBQzlDLE1BQU1DLFlBQVksR0FBRztnQkFBRSxHQUFHaEU7Y0FBTSxDQUFFO2NBQ2xDZ0UsWUFBWSxDQUFDRCxNQUFNLENBQUM3QixJQUFJLENBQUMsR0FBRzZCLE1BQU0sQ0FBQ3pCLEtBQUs7Y0FDeENtQixTQUFTLENBQUNPLFlBQVksQ0FBQztjQUN2QkosUUFBUSxDQUFDLEVBQUUsQ0FBQztZQUNiLENBQUM7WUFFRCxNQUFNN0IsUUFBUSxHQUFHLE1BQU9rQyxLQUFLLElBQW1CO2NBQy9DQSxLQUFLLENBQUNDLGNBQWMsRUFBRTtjQUN0QkQsS0FBSyxDQUFDRSxlQUFlLEVBQUU7Y0FDdkJSLFdBQVcsQ0FBQyxJQUFJLENBQUM7Y0FDakIsSUFBSTtnQkFDSCxNQUFNeEUsS0FBSyxDQUFDaUYsT0FBTyxDQUFDcEUsTUFBTSxDQUFDO2dCQUMzQnFELE1BQUEsQ0FBQWdCLEtBQUssQ0FBQ0MsT0FBTyxDQUFDeEQsS0FBSyxDQUFDMkIsTUFBTSxDQUFDNkIsT0FBTyxDQUFDO2dCQUNuQ2hCLFFBQUEsQ0FBQWlCLE9BQU8sQ0FBQ0MsWUFBWSxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsdUJBQXVCckYsS0FBSyxDQUFDUSxFQUFFLEVBQUUsQ0FBQztlQUNqRSxDQUFDLE9BQU9KLENBQUMsRUFBRTtnQkFDWHFFLFFBQVEsQ0FBQ3JFLENBQUMsQ0FBQ2tGLE9BQU8sQ0FBQztnQkFDbkJwQixNQUFBLENBQUFnQixLQUFLLENBQUM1RSxLQUFLLENBQUNxQixLQUFLLENBQUMyQixNQUFNLENBQUNoRCxLQUFLLENBQUM7ZUFDL0IsU0FBUztnQkFDVGtFLFdBQVcsQ0FBQyxLQUFLLENBQUM7O1lBRXBCLENBQUM7WUFFRCxPQUFPO2NBQ04zRCxNQUFNO2NBQ05DLFFBQVE7Y0FDUjBELFdBQVc7Y0FDWDdCLFFBQVE7Y0FDUkM7YUFDQTtVQUNGOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2hEQSxJQUFBd0IsTUFBQSxHQUFBekYsT0FBQTtVQUNBLElBQUF1QyxLQUFBLEdBQUF2QyxPQUFBO1VBQ0EsSUFBQTRHLGVBQUEsR0FBQTVHLE9BQUE7VUFDTSxTQUFVK0QsUUFBUUEsQ0FBQzFELEtBQUs7WUFDN0IsTUFBTSxDQUFDa0IsS0FBSyxFQUFFc0YsUUFBUSxDQUFDLEdBQUd0RSxLQUFLLENBQUNxRCxRQUFRLENBQUN2RixLQUFLLENBQUNrQixLQUFLLENBQUM7WUFFckQsTUFBTSxDQUFDdUYsVUFBVSxFQUFFOUQsS0FBSyxDQUFDLEdBQUcsSUFBQXlDLE1BQUEsQ0FBQXNCLFFBQVEsRUFBQ0gsZUFBQSxDQUFBSSxNQUFNLENBQUNDLFNBQVMsQ0FBQztZQUN0RDFFLEtBQUssQ0FBQzJFLFNBQVMsQ0FBQyxNQUFLO2NBQ3BCLE1BQU1sRCxRQUFRLEdBQUdBLENBQUEsS0FBSyxDQUFFLENBQUM7Y0FDekIzRCxLQUFLLENBQUM4RyxFQUFFLENBQUMsUUFBUSxFQUFFbkQsUUFBUSxDQUFDO2NBQzVCLE1BQU1vRCxPQUFPLEdBQUdBLENBQUEsS0FBTS9HLEtBQUssQ0FBQ2dILEdBQUcsQ0FBQyxRQUFRLEVBQUVyRCxRQUFRLENBQUM7Y0FDbkQsT0FBT29ELE9BQU87WUFDZixDQUFDLENBQUM7WUFDRixPQUFPO2NBQ043RixLQUFLLEVBQUVBLEtBQUssSUFBSXVGLFVBQVU7Y0FDMUJ6RyxLQUFLO2NBQ0wyQzthQUNBO1VBQ0YiLCJpZ25vcmVMaXN0IjpbXX0=