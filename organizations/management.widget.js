System.register(["@beyond-js/widgets@1.1.1/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.3/page", "@aimpact/ailearn-sdk@1.0.0/entities/organizations", "@aimpact/reactive@0.0.1/model", "@aimpact/chat-sdk@1.4.1/session", "@aimpact/ailearn-app@0.3.1/main-layout.widget", "@beyond-js/kernel@0.1.9/texts", "react@18.2.0", "pragmate-ui@1.0.0-beta.7/form", "pragmate-ui@1.0.0-beta.7/components", "@aimpact/ailearn-app@0.3.1/components/ui", "@beyond-js/react-18-widgets@1.1.3/hooks", "pragmate-ui@1.0.0-beta.7/toast", "@beyond-js/kernel@0.1.9/routing"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, bimport, __Bundle, __pkg, ims, Controller, __beyond_pkg, hmr;
  _export("Controller", void 0);
  return {
    setters: [function (_beyondJsWidgets111Render) {
      dependency_0 = _beyondJsWidgets111Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_beyondJsReact18Widgets113Page) {
      dependency_3 = _beyondJsReact18Widgets113Page;
    }, function (_aimpactAilearnSdk100EntitiesOrganizations) {
      dependency_4 = _aimpactAilearnSdk100EntitiesOrganizations;
    }, function (_aimpactReactive001Model) {
      dependency_5 = _aimpactReactive001Model;
    }, function (_aimpactChatSdk141Session) {
      dependency_6 = _aimpactChatSdk141Session;
    }, function (_aimpactAilearnApp031MainLayoutWidget) {
      dependency_7 = _aimpactAilearnApp031MainLayoutWidget;
    }, function (_beyondJsKernel019Texts) {
      dependency_8 = _beyondJsKernel019Texts;
    }, function (_react) {
      dependency_9 = _react;
    }, function (_pragmateUi100Beta7Form) {
      dependency_10 = _pragmateUi100Beta7Form;
    }, function (_pragmateUi100Beta7Components) {
      dependency_11 = _pragmateUi100Beta7Components;
    }, function (_aimpactAilearnApp031ComponentsUi) {
      dependency_12 = _aimpactAilearnApp031ComponentsUi;
    }, function (_beyondJsReact18Widgets113Hooks) {
      dependency_13 = _beyondJsReact18Widgets113Hooks;
    }, function (_pragmateUi100Beta7Toast) {
      dependency_14 = _pragmateUi100Beta7Toast;
    }, function (_beyondJsKernel019Routing) {
      dependency_15 = _beyondJsKernel019Routing;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", null], ["@aimpact/auth", null], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.1"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.3"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["@google-cloud/storage", "7.15.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.24.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.1"], ["@aimpact/ailearn-app", "0.3.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.3.1/organizations/management",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/entities/organizations', dependency_4], ['@aimpact/reactive/model', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['@aimpact/ailearn-app/main-layout.widget', dependency_7], ['@beyond-js/kernel/texts', dependency_8], ['react', dependency_9], ['pragmate-ui/form', dependency_10], ['pragmate-ui/components', dependency_11], ['@aimpact/ailearn-app/components/ui', dependency_12], ['@beyond-js/react-18-widgets/hooks', dependency_13], ['pragmate-ui/toast', dependency_14], ['@beyond-js/kernel/routing', dependency_15]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-organizations-management",
        "vspecifier": "@aimpact/ailearn-app@0.3.1/organizations/management.widget",
        "is": "page",
        "route": "/organizations/management",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.3.1/organizations/management.widget');
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
        hash: 4268063770,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _organizations = require("@aimpact/ailearn-sdk/entities/organizations");
          var _model = require("@aimpact/reactive/model");
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
        hash: 1191457425,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJxcyIsImdldCIsImhpZGUiLCJjbGVhciIsImV4cG9ydHMiLCJfb3JnYW5pemF0aW9ucyIsIl9tb2RlbCIsIl9zZXNzaW9uIiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ2YWx1ZSIsInJlYWR5IiwiY29uc3RydWN0b3IiLCJvbiIsInRyaWdnZXJFdmVudCIsInVuZGVmaW5lZCIsImlkIiwib2ZmIiwiT3JnYW5pemF0aW9uIiwiY29uc29sZSIsImxvZyIsImdldFByb3BlcnRpZXMiLCJlIiwiZXJyb3IiLCJzYXZlIiwidmFsdWVzIiwiZmV0Y2hpbmciLCJzdGF0dXMiLCJkYXRhIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwiRXJyb3IiLCJwdWJsaXNoIiwicmVzcG9uc2UiLCJSZWFjdCIsIk1vZHVsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlTW9kdWxlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfZm9ybSIsIl9jb21wb25lbnRzIiwiX3VpIiwiX2NvbnRleHQiLCJfdXNlRm9ybSIsIl9ob29rcyIsInNldFJlYWR5IiwidXNlU3RhdGUiLCJ1c2VCaW5kZXIiLCJvbkNoYW5nZSIsIm9uU3VibWl0IiwidXNlRm9ybSIsImRpc2FibGVkIiwibmFtZSIsImNvbnRleHRWYWx1ZSIsImNyZWF0ZUVsZW1lbnQiLCJQcm92aWRlciIsIlBhZ2VDb250YWluZXIiLCJjbGFzc05hbWUiLCJjcmVhdGUiLCJ0aXRsZSIsIkZvcm0iLCJJbnB1dCIsImxhYmVsIiwicGxhY2Vob2xkZXIiLCJ0eXBlIiwicmVxdWlyZWQiLCJCdXR0b24iLCJ2YXJpYW50IiwiYWN0aW9ucyIsIl90b2FzdCIsIl9yb3V0aW5nIiwiZGVmYXVsdFZhbHVlcyIsImRlc2NyaXB0aW9uIiwic2V0VmFsdWVzIiwic2V0RmV0Y2hpbmciLCJzZXRFcnJvciIsImN1cnJlbnRUYXJnZXQiLCJ0YXJnZXQiLCJjdXJyZW50VmFsdWUiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwidG9hc3QiLCJzdWNjZXNzIiwicm91dGluZyIsInJlcGxhY2VTdGF0ZSIsIm1lc3NhZ2UiLCJ1c2VNb2RlbCIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsInVzZUVmZmVjdCIsImNsZWFuVXAiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy91c2UtZm9ybS50cyIsIi90cy92aWV3cy91c2UtbW9kZWwudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJSixNQUFBLENBQUFNLFlBQVksRUFBRTtjQUNoQyxPQUFPLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ25CO1lBQ0EsSUFBSUcsTUFBTUEsQ0FBQTtjQUNULE9BQU9OLE1BQUEsQ0FBQU8sSUFBSTtZQUNaO1lBRUFDLElBQUlBLENBQUE7Y0FDSCxJQUFJLENBQUMsQ0FBQUwsS0FBTSxDQUFDTSxJQUFJLENBQUMsSUFBSSxDQUFDQyxHQUFHLENBQUNDLEVBQUUsQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3hDO1lBRUFDLElBQUlBLENBQUE7Y0FDSCxJQUFJLENBQUMsQ0FBQVYsS0FBTSxDQUFDVyxLQUFLLEVBQUU7WUFDcEI7O1VBQ0FDLE9BQUEsQ0FBQWQsVUFBQSxHQUFBQSxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3RCRCxJQUFBZSxjQUFBLEdBQUFsQixPQUFBO1VBQ0EsSUFBQW1CLE1BQUEsR0FBQW5CLE9BQUE7VUFDQSxJQUFBb0IsUUFBQSxHQUFBcEIsT0FBQTtVQUVBLElBQUFxQixNQUFBLEdBQUFyQixPQUFBO1VBQ0EsSUFBQXNCLGVBQUEsR0FBQXRCLE9BQUE7VUFFTSxNQUFPTyxZQUFhLFNBQVFZLE1BQUEsQ0FBQUksYUFBMkI7WUFDNUQsQ0FBQUMsS0FBTTtZQUNOLElBQUlBLEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNO1lBQ25CO1lBQ0EsQ0FBQUMsS0FBTSxHQUErQixJQUFJSixNQUFBLENBQUFLLFlBQVksQ0FBQ0osZUFBQSxDQUFBSyxNQUFNLENBQUNDLFNBQVMsQ0FBQztZQUN2RSxJQUFJSCxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsS0FBTSxFQUFFSSxLQUFLO1lBQzFCO1lBRUEsSUFBSUMsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sS0FBSyxDQUFDQSxLQUFLLElBQUksSUFBSSxDQUFDLENBQUFMLEtBQU0sQ0FBQ0ssS0FBSztZQUN4QztZQUNBQyxZQUFBO2NBQ0MsS0FBSyxFQUFFO2NBQ1AsSUFBSSxDQUFDLENBQUFOLEtBQU0sQ0FBQ08sRUFBRSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUNDLFlBQVksQ0FBQztZQUM1QztZQUVBakIsS0FBS0EsQ0FBQTtjQUNKLElBQUksQ0FBQyxDQUFBUSxLQUFNLEdBQUdVLFNBQVM7Y0FDdkIsS0FBSyxDQUFDSixLQUFLLEdBQUcsS0FBSztZQUNwQjtZQUVBLE1BQU1uQixJQUFJQSxDQUFDd0IsRUFBRztjQUNiLElBQUk7Z0JBQ0gsSUFBSUEsRUFBRSxJQUFJLElBQUksQ0FBQyxDQUFBWCxLQUFNLElBQUksSUFBSSxDQUFDLENBQUFBLEtBQU0sQ0FBQ1csRUFBRSxLQUFLQSxFQUFFLEVBQUU7Z0JBQ2hELElBQUksSUFBSSxDQUFDLENBQUFYLEtBQU0sRUFBRTtrQkFDaEIsSUFBSSxDQUFDLENBQUFBLEtBQU0sQ0FBQ1ksR0FBRyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUNILFlBQVksQ0FBQztrQkFDNUMsSUFBSSxDQUFDLENBQUFULEtBQU0sR0FBR1UsU0FBUzs7Z0JBRXhCLElBQUksQ0FBQyxDQUFBVixLQUFNLEdBQUcsSUFBSU4sY0FBQSxDQUFBbUIsWUFBWSxDQUFDO2tCQUFFRjtnQkFBRSxDQUFFLENBQUM7Z0JBQ3RDLElBQUksQ0FBQyxDQUFBWCxLQUFNLENBQUNRLEVBQUUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDQyxZQUFZLENBQUM7Z0JBQzNDLElBQUlFLEVBQUUsRUFBRTtrQkFDUCxNQUFNLElBQUksQ0FBQyxDQUFBWCxLQUFNLENBQUNiLElBQUksQ0FBQ3dCLEVBQUUsQ0FBQztrQkFDMUJHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBZixLQUFNLENBQUNnQixhQUFhLEVBQUUsQ0FBQzs7ZUFFekMsQ0FBQyxPQUFPQyxDQUFDLEVBQUU7Z0JBQ1hILE9BQU8sQ0FBQ0ksS0FBSyxDQUFDRCxDQUFDLENBQUM7ZUFDaEIsU0FBUztnQkFDVCxLQUFLLENBQUNYLEtBQUssR0FBRyxJQUFJOztZQUVwQjtZQUVBLE1BQU1hLElBQUlBLENBQUNDLE1BQU07Y0FDaEIsSUFBSTtnQkFDSCxJQUFJLENBQUNDLFFBQVEsR0FBRyxJQUFJO2dCQUNwQixNQUFNO2tCQUFFQyxNQUFNO2tCQUFFQztnQkFBSSxDQUFFLEdBQUcsTUFBTSxJQUFJLENBQUN2QixLQUFLLENBQUNtQixJQUFJLENBQUM7a0JBQUUsR0FBR0M7Z0JBQU0sQ0FBRSxDQUFDO2dCQUM3RHhCLFFBQUEsQ0FBQTRCLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDdEMsSUFBSSxFQUFFO2dCQUMxQixJQUFJLENBQUNtQyxNQUFNLEVBQUUsTUFBTSxJQUFJSSxLQUFLLENBQUMsNEJBQTRCLENBQUM7Z0JBQzFELE9BQU9ILElBQUk7ZUFDWCxDQUFDLE9BQU9OLENBQUMsRUFBRTtnQkFDWEgsT0FBTyxDQUFDSSxLQUFLLENBQUMsQ0FBQyxFQUFFRCxDQUFDLENBQUM7ZUFDbkIsU0FBUztnQkFDVCxJQUFJLENBQUNJLFFBQVEsR0FBRyxLQUFLOztZQUV2QjtZQUVBLE1BQU1NLE9BQU9BLENBQUNQLE1BQU07Y0FDbkIsSUFBSSxDQUFDQyxRQUFRLEdBQUcsSUFBSTtjQUVwQixNQUFNTyxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUM1QixLQUFLLENBQUMyQixPQUFPLENBQUNQLE1BQU0sQ0FBQztjQUVqRCxNQUFNeEIsUUFBQSxDQUFBNEIsY0FBYyxDQUFDQyxJQUFJLENBQUN0QyxJQUFJLEVBQUU7WUFDakM7O1VBQ0FNLE9BQUEsQ0FBQVYsWUFBQSxHQUFBQSxZQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3ZFRCxJQUFBOEMsS0FBQSxHQUFBckQsT0FBQTtVQVNPLE1BQU1zRCxhQUFhLEdBQUFyQyxPQUFBLENBQUFxQyxhQUFBLEdBQUdELEtBQUssQ0FBQ0UsYUFBYSxDQUFDLEVBQXlCLENBQUM7VUFDcEUsTUFBTUMsZ0JBQWdCLEdBQUdBLENBQUEsS0FBTUgsS0FBSyxDQUFDSSxVQUFVLENBQUNILGFBQWEsQ0FBQztVQUFDckMsT0FBQSxDQUFBdUMsZ0JBQUEsR0FBQUEsZ0JBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDVnRFLElBQUFILEtBQUEsR0FBQXJELE9BQUE7VUFDQSxJQUFBMEQsS0FBQSxHQUFBMUQsT0FBQTtVQUVBLElBQUEyRCxXQUFBLEdBQUEzRCxPQUFBO1VBQ0EsSUFBQTRELEdBQUEsR0FBQTVELE9BQUE7VUFDQSxJQUFBNkQsUUFBQSxHQUFBN0QsT0FBQTtVQUNBLElBQUE4RCxRQUFBLEdBQUE5RCxPQUFBO1VBQ0EsSUFBQStELE1BQUEsR0FBQS9ELE9BQUE7VUFFTSxTQUFVUyxJQUFJQSxDQUFDO1lBQUVKO1VBQUssQ0FBRTtZQUM3QixNQUFNLENBQUN5QixLQUFLLEVBQUVrQyxRQUFRLENBQUMsR0FBR1gsS0FBSyxDQUFDWSxRQUFRLENBQUM1RCxLQUFLLENBQUN5QixLQUFLLENBQUM7WUFFckQsSUFBQWlDLE1BQUEsQ0FBQUcsU0FBUyxFQUFDLENBQUM3RCxLQUFLLENBQUMsRUFBRSxNQUFNMkQsUUFBUSxDQUFDM0QsS0FBSyxDQUFDeUIsS0FBSyxDQUFDLENBQUM7WUFDL0MsTUFBTTtjQUFFTDtZQUFLLENBQUUsR0FBR3BCLEtBQUs7WUFDdkIsTUFBTTtjQUFFd0MsUUFBUTtjQUFFRCxNQUFNO2NBQUV1QixRQUFRO2NBQUVDO1lBQVEsQ0FBRSxHQUFHLElBQUFOLFFBQUEsQ0FBQU8sT0FBTyxFQUFDdkMsS0FBSyxFQUFFekIsS0FBSyxFQUFFb0IsS0FBSyxDQUFDO1lBQzdFLElBQUksQ0FBQ0ssS0FBSyxFQUFFLE9BQU8sSUFBSTtZQUV2QixNQUFNd0MsUUFBUSxHQUFHO2NBQUVBLFFBQVEsRUFBRXpCLFFBQVEsSUFBSUQsTUFBTSxDQUFDMkIsSUFBSSxLQUFLO1lBQUUsQ0FBRTtZQUM3RCxNQUFNQyxZQUFZLEdBQUc7Y0FBRS9DLEtBQUs7Y0FBRXBCO1lBQUssQ0FBRTtZQUVyQyxPQUNDZ0QsS0FBQSxDQUFBb0IsYUFBQSxDQUFDWixRQUFBLENBQUFQLGFBQWEsQ0FBQ29CLFFBQVE7Y0FBQzdDLEtBQUssRUFBRTJDO1lBQVksR0FDMUNuQixLQUFBLENBQUFvQixhQUFBLENBQUNiLEdBQUEsQ0FBQWUsYUFBYTtjQUFDQyxTQUFTLEVBQUMscUJBQXFCO2NBQUMvQixRQUFRLEVBQUVBO1lBQVEsR0FDaEVRLEtBQUEsQ0FBQW9CLGFBQUE7Y0FBUUcsU0FBUyxFQUFDO1lBQWMsR0FDL0J2QixLQUFBLENBQUFvQixhQUFBLGFBQUtoRCxLQUFLLENBQUNvRCxNQUFNLENBQUNDLEtBQUssQ0FBTSxDQUNyQixFQUVUekIsS0FBQSxDQUFBb0IsYUFBQTtjQUFLRyxTQUFTLEVBQUM7WUFBTyxFQUFPLEVBQzdCdkIsS0FBQSxDQUFBb0IsYUFBQSxDQUFDZixLQUFBLENBQUFxQixJQUFJO2NBQUNYLFFBQVEsRUFBRUEsUUFBUTtjQUFFUSxTQUFTLEVBQUM7WUFBaUIsR0FDcER2QixLQUFBLENBQUFvQixhQUFBLENBQUNmLEtBQUEsQ0FBQXNCLEtBQUs7Y0FDTEMsS0FBSyxFQUFFeEQsS0FBSyxDQUFDb0QsTUFBTSxDQUFDTixJQUFJLENBQUNVLEtBQUs7Y0FDOUJDLFdBQVcsRUFBRXpELEtBQUssQ0FBQ29ELE1BQU0sQ0FBQ04sSUFBSSxDQUFDVyxXQUFXO2NBQzFDckQsS0FBSyxFQUFFZSxNQUFNLENBQUMyQixJQUFJO2NBQ2xCQSxJQUFJLEVBQUMsTUFBTTtjQUNYWSxJQUFJLEVBQUMsTUFBTTtjQUNYaEIsUUFBUSxFQUFFQSxRQUFRO2NBQ2xCaUIsUUFBUTtZQUFBLEVBQ1AsRUFRRi9CLEtBQUEsQ0FBQW9CLGFBQUE7Y0FBS0csU0FBUyxFQUFDO1lBQWMsR0FDNUJ2QixLQUFBLENBQUFvQixhQUFBLENBQUNkLFdBQUEsQ0FBQTBCLE1BQU07Y0FBQ3hDLFFBQVEsRUFBRUEsUUFBUTtjQUFBLEdBQU15QixRQUFRO2NBQUVnQixPQUFPLEVBQUMsU0FBUztjQUFDSCxJQUFJLEVBQUM7WUFBUSxHQUN2RTFELEtBQUssQ0FBQ29ELE1BQU0sQ0FBQ1UsT0FBTyxDQUFDNUMsSUFBSSxDQUNsQixDQUNKLENBQ0EsQ0FDUSxDQUNRO1VBRTNCOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3REQSxJQUFBVSxLQUFBLEdBQUFyRCxPQUFBO1VBQ0EsSUFBQXdGLE1BQUEsR0FBQXhGLE9BQUE7VUFDQSxJQUFBeUYsUUFBQSxHQUFBekYsT0FBQTtVQUNBLElBQUErRCxNQUFBLEdBQUEvRCxPQUFBO1VBR00sU0FBVXFFLE9BQU9BLENBQUN2QyxLQUFLLEVBQUV6QixLQUFtQixFQUFFb0IsS0FBSztZQUN4RCxNQUFNaUUsYUFBYSxHQUFHO2NBQUVuQixJQUFJLEVBQUVsRSxLQUFLLEVBQUVtQixLQUFLLEVBQUUrQyxJQUFJLElBQUksRUFBRTtjQUFFb0IsV0FBVyxFQUFFdEYsS0FBSyxFQUFFbUIsS0FBSyxFQUFFbUUsV0FBVyxJQUFJO1lBQUUsQ0FBRTtZQUN0RyxNQUFNLENBQUMvQyxNQUFNLEVBQUVnRCxTQUFTLENBQUMsR0FBR3ZDLEtBQUssQ0FBQ1ksUUFBUSxDQUFDeUIsYUFBYSxDQUFDO1lBQ3pELE1BQU0sQ0FBQzdDLFFBQVEsRUFBRWdELFdBQVcsQ0FBQyxHQUFHeEMsS0FBSyxDQUFDWSxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3JELE1BQU0sQ0FBQ3ZCLEtBQUssRUFBRW9ELFFBQVEsQ0FBQyxHQUFHekMsS0FBSyxDQUFDWSxRQUFRLENBQUMsRUFBRSxDQUFDO1lBRTVDLElBQUFGLE1BQUEsQ0FBQUcsU0FBUyxFQUFDLENBQUM3RCxLQUFLLENBQUMsRUFBRSxNQUFLO2NBQ3ZCLElBQUksQ0FBQ0EsS0FBSyxDQUFDeUIsS0FBSyxFQUFFO2dCQUNqQjtnQkFDQThELFNBQVMsQ0FBQ3ZGLEtBQUssQ0FBQ21CLEtBQUssRUFBRWdCLGFBQWEsRUFBRSxJQUFJa0QsYUFBYSxDQUFDOztZQUUxRCxDQUFDLENBQUM7WUFDRixJQUFJLENBQUM1RCxLQUFLLEVBQUUsT0FBTyxFQUFFO1lBQ3JCLE1BQU07Y0FBRU47WUFBSyxDQUFFLEdBQUduQixLQUFLO1lBQ3ZCLE1BQU04RCxRQUFRLEdBQUdBLENBQUM7Y0FBRTRCLGFBQWEsRUFBRUM7WUFBTSxDQUFFLEtBQUk7Y0FDOUMsTUFBTUMsWUFBWSxHQUFHO2dCQUFFLEdBQUdyRDtjQUFNLENBQUU7Y0FDbENxRCxZQUFZLENBQUNELE1BQU0sQ0FBQ3pCLElBQUksQ0FBQyxHQUFHeUIsTUFBTSxDQUFDbkUsS0FBSztjQUN4QytELFNBQVMsQ0FBQ0ssWUFBWSxDQUFDO2NBQ3ZCSCxRQUFRLENBQUMsRUFBRSxDQUFDO1lBQ2IsQ0FBQztZQUVELE1BQU0xQixRQUFRLEdBQUcsTUFBTzhCLEtBQUssSUFBbUI7Y0FDL0NBLEtBQUssQ0FBQ0MsY0FBYyxFQUFFO2NBQ3RCRCxLQUFLLENBQUNFLGVBQWUsRUFBRTtjQUN2QlAsV0FBVyxDQUFDLElBQUksQ0FBQztjQUNqQixJQUFJO2dCQUNILE1BQU14RixLQUFLLENBQUM4QyxPQUFPLENBQUNQLE1BQU0sQ0FBQztnQkFDM0I0QyxNQUFBLENBQUFhLEtBQUssQ0FBQ0MsT0FBTyxDQUFDN0UsS0FBSyxDQUFDb0QsTUFBTSxDQUFDeUIsT0FBTyxDQUFDO2dCQUNuQ2IsUUFBQSxDQUFBYyxPQUFPLENBQUNDLFlBQVksQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLHVCQUF1QmhGLEtBQUssQ0FBQ1csRUFBRSxFQUFFLENBQUM7ZUFDakUsQ0FBQyxPQUFPTSxDQUFDLEVBQUU7Z0JBQ1hxRCxRQUFRLENBQUNyRCxDQUFDLENBQUNnRSxPQUFPLENBQUM7Z0JBQ25CakIsTUFBQSxDQUFBYSxLQUFLLENBQUMzRCxLQUFLLENBQUNqQixLQUFLLENBQUNvRCxNQUFNLENBQUNuQyxLQUFLLENBQUM7ZUFDL0IsU0FBUztnQkFDVG1ELFdBQVcsQ0FBQyxLQUFLLENBQUM7O1lBRXBCLENBQUM7WUFFRCxPQUFPO2NBQ05qRCxNQUFNO2NBQ05DLFFBQVE7Y0FDUmdELFdBQVc7Y0FDWDFCLFFBQVE7Y0FDUkM7YUFDQTtVQUNGOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2xEQSxJQUFBTCxNQUFBLEdBQUEvRCxPQUFBO1VBQ0EsSUFBQXFELEtBQUEsR0FBQXJELE9BQUE7VUFDQSxJQUFBc0IsZUFBQSxHQUFBdEIsT0FBQTtVQUNNLFNBQVUwRyxRQUFRQSxDQUFDckcsS0FBSztZQUM3QixNQUFNLENBQUN5QixLQUFLLEVBQUVrQyxRQUFRLENBQUMsR0FBR1gsS0FBSyxDQUFDWSxRQUFRLENBQUM1RCxLQUFLLENBQUN5QixLQUFLLENBQUM7WUFFckQsTUFBTSxDQUFDNkUsVUFBVSxFQUFFbEYsS0FBSyxDQUFDLEdBQUcsSUFBQXNDLE1BQUEsQ0FBQTZDLFFBQVEsRUFBQ3RGLGVBQUEsQ0FBQUssTUFBTSxDQUFDQyxTQUFTLENBQUM7WUFDdER5QixLQUFLLENBQUN3RCxTQUFTLENBQUMsTUFBSztjQUNwQixNQUFNMUMsUUFBUSxHQUFHQSxDQUFBLEtBQUssQ0FBRSxDQUFDO2NBQ3pCOUQsS0FBSyxDQUFDMkIsRUFBRSxDQUFDLFFBQVEsRUFBRW1DLFFBQVEsQ0FBQztjQUM1QixNQUFNMkMsT0FBTyxHQUFHQSxDQUFBLEtBQU16RyxLQUFLLENBQUMrQixHQUFHLENBQUMsUUFBUSxFQUFFK0IsUUFBUSxDQUFDO2NBQ25ELE9BQU8yQyxPQUFPO1lBQ2YsQ0FBQyxDQUFDO1lBQ0YsT0FBTztjQUNOaEYsS0FBSyxFQUFFQSxLQUFLLElBQUk2RSxVQUFVO2NBQzFCdEcsS0FBSztjQUNMb0I7YUFDQTtVQUNGIiwiaWdub3JlTGlzdCI6W119