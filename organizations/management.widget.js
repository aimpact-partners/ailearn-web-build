System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-sdk@1.0.0/entities/organizations", "@beyond-js/reactive@1.2.0/model", "@aimpact/chat-sdk@1.3.0/session", "@aimpact/ailearn-app@0.1.13/main-layout.widget", "@beyond-js/kernel@0.1.9/texts", "react@18.2.0", "pragmate-ui@1.0.0-beta.6/form", "pragmate-ui@1.0.0-beta.6/components", "@aimpact/ailearn-app@0.1.13/components/ui", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.6/toast", "@beyond-js/kernel@0.1.9/routing"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, bimport, __Bundle, __pkg, ims, Controller, __beyond_pkg, hmr;
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
    }, function (_aimpactAilearnSdk100EntitiesOrganizations) {
      dependency_4 = _aimpactAilearnSdk100EntitiesOrganizations;
    }, function (_beyondJsReactive120Model) {
      dependency_5 = _beyondJsReactive120Model;
    }, function (_aimpactChatSdk130Session) {
      dependency_6 = _aimpactChatSdk130Session;
    }, function (_aimpactAilearnApp0113MainLayoutWidget) {
      dependency_7 = _aimpactAilearnApp0113MainLayoutWidget;
    }, function (_beyondJsKernel019Texts) {
      dependency_8 = _beyondJsKernel019Texts;
    }, function (_react) {
      dependency_9 = _react;
    }, function (_pragmateUi100Beta6Form) {
      dependency_10 = _pragmateUi100Beta6Form;
    }, function (_pragmateUi100Beta6Components) {
      dependency_11 = _pragmateUi100Beta6Components;
    }, function (_aimpactAilearnApp0113ComponentsUi) {
      dependency_12 = _aimpactAilearnApp0113ComponentsUi;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_13 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi100Beta6Toast) {
      dependency_14 = _pragmateUi100Beta6Toast;
    }, function (_beyondJsKernel019Routing) {
      dependency_15 = _beyondJsKernel019Routing;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.3.0"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.6"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["wavesurfer.js", "7.8.5"], ["zod", "3.23.8"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.8"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["firebase", "10.13.1"], ["firebase-admin", "12.4.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.1.13"], ["@aimpact/ailearn-app", "0.1.13"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.13/organizations/management",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/entities/organizations', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['@aimpact/ailearn-app/main-layout.widget', dependency_7], ['@beyond-js/kernel/texts', dependency_8], ['react', dependency_9], ['pragmate-ui/form', dependency_10], ['pragmate-ui/components', dependency_11], ['@aimpact/ailearn-app/components/ui', dependency_12], ['@beyond-js/react-18-widgets/hooks', dependency_13], ['pragmate-ui/toast', dependency_14], ['@beyond-js/kernel/routing', dependency_15]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-organizations-management",
        "vspecifier": "@aimpact/ailearn-app@0.1.13/organizations/management.widget",
        "is": "page",
        "route": "/organizations/management",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.13/organizations/management.widget');
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
        hash: 3090235510,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _organizations = require("@aimpact/ailearn-sdk/entities/organizations");
          var _model = require("@beyond-js/reactive/model");
          var _session = require("@aimpact/chat-sdk/session");
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
            async load(id) {
              try {
                if (id && this.#model && this.#model.id === id) return;
                if (this.#model) {
                  this.#model.off('change', this.triggerEvent);
                  this.#model = undefined;
                }
                this.#model = new _organizations.Organization({
                  id
                });
                this.#model.on('change', this.triggerEvent);
                if (id) {
                  await this.#model.load(id);
                  console.log(this.#model.getProperties());
                }
              } catch (e) {
                console.error(e);
              } finally {
                super.ready = true;
              }
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
              this.fetching = true;
              const response = await this.model.publish(values);
              await _session.sessionWrapper.user.load();
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
        hash: 2538735134,
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
            }, React.createElement("h3", null, texts.create.title)), React.createElement("div", {
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
        hash: 3582432434,
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
                //@ts-expect-error
                setValues(store.model?.getProperties() ?? defaultValues);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJxcyIsImdldCIsImhpZGUiLCJjbGVhciIsImV4cG9ydHMiLCJfb3JnYW5pemF0aW9ucyIsIl9tb2RlbCIsIl9zZXNzaW9uIiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ2YWx1ZSIsInJlYWR5IiwiY29uc3RydWN0b3IiLCJvbiIsInRyaWdnZXJFdmVudCIsInVuZGVmaW5lZCIsImlkIiwib2ZmIiwiT3JnYW5pemF0aW9uIiwiY29uc29sZSIsImxvZyIsImdldFByb3BlcnRpZXMiLCJlIiwiZXJyb3IiLCJzYXZlIiwidmFsdWVzIiwiZmV0Y2hpbmciLCJzdGF0dXMiLCJkYXRhIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwiRXJyb3IiLCJwdWJsaXNoIiwicmVzcG9uc2UiLCJSZWFjdCIsIk1vZHVsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlTW9kdWxlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfZm9ybSIsIl9jb21wb25lbnRzIiwiX3VpIiwiX2NvbnRleHQiLCJfdXNlRm9ybSIsIl9ob29rcyIsInNldFJlYWR5IiwidXNlU3RhdGUiLCJ1c2VCaW5kZXIiLCJvbkNoYW5nZSIsIm9uU3VibWl0IiwidXNlRm9ybSIsImRpc2FibGVkIiwibmFtZSIsImNvbnRleHRWYWx1ZSIsImNyZWF0ZUVsZW1lbnQiLCJQcm92aWRlciIsIlBhZ2VDb250YWluZXIiLCJjbGFzc05hbWUiLCJjcmVhdGUiLCJ0aXRsZSIsIkZvcm0iLCJJbnB1dCIsImxhYmVsIiwicGxhY2Vob2xkZXIiLCJ0eXBlIiwicmVxdWlyZWQiLCJUZXh0YXJlYSIsImRlc2NyaXB0aW9uIiwiQnV0dG9uIiwidmFyaWFudCIsImFjdGlvbnMiLCJfdG9hc3QiLCJfcm91dGluZyIsImRlZmF1bHRWYWx1ZXMiLCJzZXRWYWx1ZXMiLCJzZXRGZXRjaGluZyIsInNldEVycm9yIiwiY3VycmVudFRhcmdldCIsInRhcmdldCIsImN1cnJlbnRWYWx1ZSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJ0b2FzdCIsInN1Y2Nlc3MiLCJyb3V0aW5nIiwicmVwbGFjZVN0YXRlIiwibWVzc2FnZSIsInVzZU1vZGVsIiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwidXNlRWZmZWN0IiwiY2xlYW5VcCJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3VzZS1mb3JtLnRzIiwiL3RzL3ZpZXdzL3VzZS1tb2RlbC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlKLE1BQUEsQ0FBQU0sWUFBWSxFQUFFO2NBQ2hDLE9BQU8sSUFBSSxDQUFDLENBQUFGLEtBQU07WUFDbkI7WUFDQSxJQUFJRyxNQUFNQSxD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