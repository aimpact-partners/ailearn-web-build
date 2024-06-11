System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.1.12/model", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/ailearn-app@0.0.46.dev-15/main-layout.widget", "@beyond-js/kernel@0.1.9/texts", "react@18.2.0", "pragmate-ui@0.1.1/form", "pragmate-ui@0.1.1/components", "@aimpact/ailearn-app@0.0.46.dev-15/components/ui", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@0.1.1/alert", "pragmate-ui@0.1.1/toast", "@beyond-js/kernel@0.1.9/routing"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, bimport, __Bundle, __pkg, ims, Controller, __beyond_pkg, hmr;
  _export("Controller", void 0);
  return {
    setters: [function (_beyondJsWidgets110Render) {
      dependency_0 = _beyondJsWidgets110Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_beyondJsReact18Widgets112Page) {
      dependency_3 = _beyondJsReact18Widgets112Page;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_4 = _aimpactAilearnSdk100Core;
    }, function (_beyondJsReactive1112Model) {
      dependency_5 = _beyondJsReactive1112Model;
    }, function (_aimpactChatSdk100Session) {
      dependency_6 = _aimpactChatSdk100Session;
    }, function (_aimpactAilearnApp0046Dev15MainLayoutWidget) {
      dependency_7 = _aimpactAilearnApp0046Dev15MainLayoutWidget;
    }, function (_beyondJsKernel019Texts) {
      dependency_8 = _beyondJsKernel019Texts;
    }, function (_react) {
      dependency_9 = _react;
    }, function (_pragmateUi011Form) {
      dependency_10 = _pragmateUi011Form;
    }, function (_pragmateUi011Components) {
      dependency_11 = _pragmateUi011Components;
    }, function (_aimpactAilearnApp0046Dev15ComponentsUi) {
      dependency_12 = _aimpactAilearnApp0046Dev15ComponentsUi;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_13 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi011Alert) {
      dependency_14 = _pragmateUi011Alert;
    }, function (_pragmateUi011Toast) {
      dependency_15 = _pragmateUi011Toast;
    }, function (_beyondJsKernel019Routing) {
      dependency_16 = _beyondJsKernel019Routing;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.0.46.dev-15"], ["@aimpact/ailearn-app", "0.0.46.dev-15"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.46.dev-15/organizations/create",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['@aimpact/ailearn-app/main-layout.widget', dependency_7], ['@beyond-js/kernel/texts', dependency_8], ['react', dependency_9], ['pragmate-ui/form', dependency_10], ['pragmate-ui/components', dependency_11], ['@aimpact/ailearn-app/components/ui', dependency_12], ['@beyond-js/react-18-widgets/hooks', dependency_13], ['pragmate-ui/alert', dependency_14], ['pragmate-ui/toast', dependency_15], ['@beyond-js/kernel/routing', dependency_16]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-organizations-create",
        "vspecifier": "@aimpact/ailearn-app@0.0.46.dev-15/organizations/create.widget",
        "is": "page",
        "route": "/organizations/create",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.46.dev-15/organizations/create.widget');
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
        hash: 3632327376,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _core = require("@aimpact/ailearn-sdk/core");
          var _model = require("@beyond-js/reactive/model");
          var _session = require("@aimpact/chat-sdk/session");
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
          var _texts = require("@beyond-js/kernel/texts");
          var _beyond_context = require("beyond_context");
          class StoreManager extends _model.ReactiveModel {
            #model;
            get model() {
              return this.#model;
            }
            #texts = new _texts.CurrentTexts(_beyond_context.module.specifier);
            get texts() {
              return this.#texts?.value;
            }
            get ready() {
              return super.ready && this.#texts.ready;
            }
            constructor() {
              super();
              this.#texts.on('change', this.triggerEvent);
            }
            clear() {
              this.#model = undefined;
              super.ready = false;
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
                _mainLayout.LayoutBroker.breadcrumb = [[this.texts.breadcrumb.organizations, '/organizations/list'], [this.texts.breadcrumb.management, '']];
              }, 100);
            }
            async load() {
              try {
                this.setBreadcrumb();
                this.#model = new _core.Organization({});
              } catch (e) {
                console.error(e);
              } finally {
                super.ready = true;
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
                _session.sessionWrapper.user.load();
                if (!status) throw new Error('error publishing classroom');
                return data;
              } catch (e) {
                console.error(1, e);
              } finally {
                this.fetching = false;
              }
            }
            async publish(values) {
              try {
                this.fetching = true;
                const {
                  status,
                  data
                } = await this.model.save({
                  ...values
                });
                if (!status) {
                  //todo: validate error codes.
                  throw new Error('error publishing classroom');
                }
                await _session.sessionWrapper.user.load();
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

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 2909740795,
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
          var _useForm = require("./use-form");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _alert = require("pragmate-ui/alert");
          function View({
            store
          }) {
            const [ready, setReady] = React.useState(store.ready);
            (0, _hooks.useBinder)([store], () => setReady(store.ready));
            const {
              texts
            } = store;
            const {
              fetching,
              values,
              onChange,
              onSubmit
            } = (0, _useForm.useForm)(ready, store, texts);
            if (!ready) return null;
            const disabled = {
              disabled: fetching || values.name === ''
            };
            const contextValue = {
              texts,
              store
            };
            return React.createElement(_context.ModuleContext.Provider, {
              value: contextValue
            }, React.createElement(_ui.PageContainer, {
              className: "form-page-container",
              fetching: fetching
            }, React.createElement("header", {
              className: "page__header"
            }, React.createElement("h3", null, texts.create.title)), React.createElement(_alert.Alert, {
              type: "info"
            }, React.createElement("p", null, texts.create.text1), React.createElement("p", null, texts.create.text2), React.createElement("p", null, texts.create.text3)), React.createElement("div", {
              className: "mt-15"
            }), React.createElement(_form.Form, {
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
              onChange: onChange
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
        hash: 1912930700,
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
                await store.publish(values);
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
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJxcyIsImdldCIsImhpZGUiLCJjbGVhciIsImV4cG9ydHMiLCJfY29yZSIsIl9tb2RlbCIsIl9zZXNzaW9uIiwiX21haW5MYXlvdXQiLCJfdGV4dHMiLCJfYmV5b25kX2NvbnRleHQiLCJSZWFjdGl2ZU1vZGVsIiwibW9kZWwiLCJ0ZXh0cyIsIkN1cnJlbnRUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInZhbHVlIiwicmVhZHkiLCJjb25zdHJ1Y3RvciIsIm9uIiwidHJpZ2dlckV2ZW50IiwidW5kZWZpbmVkIiwic2V0QnJlYWRjcnVtYiIsIm9uQ2hhbmdlIiwiYmluZCIsIm9mZiIsIkxheW91dEJyb2tlciIsIm92ZXJsYXkiLCJnbG9iYWxUaGlzIiwic2V0VGltZW91dCIsImJyZWFkY3J1bWIiLCJvcmdhbml6YXRpb25zIiwibWFuYWdlbWVudCIsIk9yZ2FuaXphdGlvbiIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJkZWxldGUiLCJpZCIsImNsYXNzcm9vbXMiLCJyZW1vdmUiLCJ0cmlnZ2VyIiwic2F2ZSIsInZhbHVlcyIsImZldGNoaW5nIiwic3RhdHVzIiwiZGF0YSIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsIkVycm9yIiwicHVibGlzaCIsIlJlYWN0IiwiTW9kdWxlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VNb2R1bGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9mb3JtIiwiX2NvbXBvbmVudHMiLCJfdWkiLCJfY29udGV4dCIsIl91c2VGb3JtIiwiX2hvb2tzIiwiX2FsZXJ0Iiwic2V0UmVhZHkiLCJ1c2VTdGF0ZSIsInVzZUJpbmRlciIsIm9uU3VibWl0IiwidXNlRm9ybSIsImRpc2FibGVkIiwibmFtZSIsImNvbnRleHRWYWx1ZSIsImNyZWF0ZUVsZW1lbnQiLCJQcm92aWRlciIsIlBhZ2VDb250YWluZXIiLCJjbGFzc05hbWUiLCJjcmVhdGUiLCJ0aXRsZSIsIkFsZXJ0IiwidHlwZSIsInRleHQxIiwidGV4dDIiLCJ0ZXh0MyIsIkZvcm0iLCJJbnB1dCIsImxhYmVsIiwicGxhY2Vob2xkZXIiLCJyZXF1aXJlZCIsIlRleHRhcmVhIiwiZGVzY3JpcHRpb24iLCJCdXR0b24iLCJ2YXJpYW50IiwiYWN0aW9ucyIsIl90b2FzdCIsIl9yb3V0aW5nIiwiZGVmYXVsdFZhbHVlcyIsInNldFZhbHVlcyIsInNldEZldGNoaW5nIiwic2V0RXJyb3IiLCJjdXJyZW50VGFyZ2V0IiwidGFyZ2V0IiwiY3VycmVudFZhbHVlIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsInRvYXN0Iiwic3VjY2VzcyIsInJvdXRpbmciLCJyZXBsYWNlU3RhdGUiLCJtZXNzYWdlIiwidXNlTW9kZWwiLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJ1c2VFZmZlY3QiLCJjbGVhblVwIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvdXNlLWZvcm0udHMiLCIvdHMvdmlld3MvdXNlLW1vZGVsLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcs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