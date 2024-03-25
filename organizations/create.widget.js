System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.1/page", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.1.11/model", "react@18.2.0", "@aimpact/ailearn-app@0.0.31/components/ui", "@aimpact/ailearn-app@0.0.31/config", "pragmate-ui@0.0.6/form", "pragmate-ui@0.0.6/components", "pragmate-ui@0.0.6/toast", "@beyond-js/kernel@0.1.9/routing", "@beyond-js/react-18-widgets@1.1.1/hooks"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, bimport, __Bundle, __pkg, ims, Controller, Header, __beyond_pkg, hmr;
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
    }, function (_beyondJsReactive1111Model) {
      dependency_5 = _beyondJsReactive1111Model;
    }, function (_react) {
      dependency_6 = _react;
    }, function (_aimpactAilearnApp0031ComponentsUi) {
      dependency_7 = _aimpactAilearnApp0031ComponentsUi;
    }, function (_aimpactAilearnApp0031Config) {
      dependency_8 = _aimpactAilearnApp0031Config;
    }, function (_pragmateUi006Form) {
      dependency_9 = _pragmateUi006Form;
    }, function (_pragmateUi006Components) {
      dependency_10 = _pragmateUi006Components;
    }, function (_pragmateUi006Toast) {
      dependency_11 = _pragmateUi006Toast;
    }, function (_beyondJsKernel019Routing) {
      dependency_12 = _beyondJsKernel019Routing;
    }, function (_beyondJsReact18Widgets111Hooks) {
      dependency_13 = _beyondJsReact18Widgets111Hooks;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/http-suite", "1.0.5"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.11"], ["pragmate-ui", "0.0.6"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.1.1"], ["apexcharts", "3.48.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["firebase", "10.9.0"], ["firebase-admin", "11.11.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["@aimpact/ailearn-app", "0.0.31"], ["@aimpact/ailearn-app", "0.0.31"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.31/organizations/create",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['react', dependency_6], ['@aimpact/ailearn-app/components/ui', dependency_7], ['@aimpact/ailearn-app/config', dependency_8], ['pragmate-ui/form', dependency_9], ['pragmate-ui/components', dependency_10], ['pragmate-ui/toast', dependency_11], ['@beyond-js/kernel/routing', dependency_12], ['@beyond-js/react-18-widgets/hooks', dependency_13]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-organizations-create",
        "vspecifier": "@aimpact/ailearn-app@0.0.31/organizations/create.widget",
        "is": "page",
        "route": "/organizations/create",
        "layout": "general-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.31/organizations/create.widget');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJxcyIsImdldCIsImhpZGUiLCJjbGVhciIsImV4cG9ydHMiLCJfY29yZSIsIl9tb2RlbCIsIlJlYWN0aXZlTW9kZWwiLCJtb2RlbCIsInVuZGVmaW5lZCIsInJlYWR5IiwiT3JnYW5pemF0aW9uIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsImRlbGV0ZSIsImlkIiwiY2xhc3Nyb29tcyIsInJlbW92ZSIsInRyaWdnZXIiLCJzYXZlIiwidmFsdWVzIiwiZmV0Y2hpbmciLCJzdGF0dXMiLCJkYXRhIiwiRXJyb3IiLCJSZWFjdCIsIk1vZHVsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlTW9kdWxlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfdWkiLCJfY29uZmlnIiwiX2NvbnRleHQiLCJIZWFkZXIiLCJ0ZXh0cyIsImNyZWF0ZUVsZW1lbnQiLCJOYXZiYXJIZWFkZXIiLCJicmVhZGNydW1iIiwiZGVmYXVsdCIsInBhcmFtcyIsIkFQUF9OQU1FIiwib3JnYW5pemF0aW9ucyIsIm1hbmFnZW1lbnQiLCJfZm9ybSIsIl9jb21wb25lbnRzIiwiX2hlYWRlciIsIl91c2VNb2RlbCIsIl91c2VGb3JtIiwidXNlTW9kZWwiLCJvbkNoYW5nZSIsIm9uU3VibWl0IiwidXNlRm9ybSIsImRpc2FibGVkIiwibmFtZSIsImRlc2NyaXB0aW9uIiwiY29udGV4dFZhbHVlIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsIlBhZ2VDb250YWluZXIiLCJjbGFzc05hbWUiLCJjcmVhdGUiLCJ0aXRsZSIsIkZvcm0iLCJJbnB1dCIsImxhYmVsIiwicGxhY2Vob2xkZXIiLCJ0eXBlIiwicmVxdWlyZWQiLCJUZXh0YXJlYSIsIkJ1dHRvbiIsInZhcmlhbnQiLCJhY3Rpb25zIiwiX3RvYXN0IiwiX3JvdXRpbmciLCJfaG9va3MiLCJkZWZhdWx0VmFsdWVzIiwic2V0VmFsdWVzIiwidXNlU3RhdGUiLCJzZXRGZXRjaGluZyIsInNldEVycm9yIiwidXNlQmluZGVyIiwiY3VycmVudFRhcmdldCIsInRhcmdldCIsImN1cnJlbnRWYWx1ZSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJwdWJsaXNoIiwidG9hc3QiLCJzdWNjZXNzIiwicm91dGluZyIsInJlcGxhY2VTdGF0ZSIsIm1lc3NhZ2UiLCJfYmV5b25kX2NvbnRleHQiLCJzZXRSZWFkeSIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInVzZUVmZmVjdCIsIm9uIiwiY2xlYW5VcCIsIm9mZiJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvaGVhZGVyLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvdXNlLWZvcm0udHMiLCIvdHMvdmlld3MvdXNlLW1vZGVsLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlKLE1BQUEsQ0FBQU0s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