System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.1.12/model", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/ailearn-app@0.0.46.dev-11/main-layout.widget", "@beyond-js/kernel@0.1.9/texts", "react@18.2.0", "pragmate-ui@0.1.1/form", "pragmate-ui@0.1.1/components", "@aimpact/ailearn-app@0.0.46.dev-11/components/ui", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@0.1.1/toast", "@beyond-js/kernel@0.1.9/routing"], function (_export, _context2) {
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
    }, function (_aimpactAilearnSdk100Core) {
      dependency_4 = _aimpactAilearnSdk100Core;
    }, function (_beyondJsReactive1112Model) {
      dependency_5 = _beyondJsReactive1112Model;
    }, function (_aimpactChatSdk100Session) {
      dependency_6 = _aimpactChatSdk100Session;
    }, function (_aimpactAilearnApp0046Dev11MainLayoutWidget) {
      dependency_7 = _aimpactAilearnApp0046Dev11MainLayoutWidget;
    }, function (_beyondJsKernel019Texts) {
      dependency_8 = _beyondJsKernel019Texts;
    }, function (_react) {
      dependency_9 = _react;
    }, function (_pragmateUi011Form) {
      dependency_10 = _pragmateUi011Form;
    }, function (_pragmateUi011Components) {
      dependency_11 = _pragmateUi011Components;
    }, function (_aimpactAilearnApp0046Dev11ComponentsUi) {
      dependency_12 = _aimpactAilearnApp0046Dev11ComponentsUi;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_13 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi011Toast) {
      dependency_14 = _pragmateUi011Toast;
    }, function (_beyondJsKernel019Routing) {
      dependency_15 = _beyondJsKernel019Routing;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.0.46.dev-11"], ["@aimpact/ailearn-app", "0.0.46.dev-11"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.46.dev-11/organizations/create",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['@aimpact/ailearn-app/main-layout.widget', dependency_7], ['@beyond-js/kernel/texts', dependency_8], ['react', dependency_9], ['pragmate-ui/form', dependency_10], ['pragmate-ui/components', dependency_11], ['@aimpact/ailearn-app/components/ui', dependency_12], ['@beyond-js/react-18-widgets/hooks', dependency_13], ['pragmate-ui/toast', dependency_14], ['@beyond-js/kernel/routing', dependency_15]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-organizations-create",
        "vspecifier": "@aimpact/ailearn-app@0.0.46.dev-11/organizations/create.widget",
        "is": "page",
        "route": "/organizations/create",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.46.dev-11/organizations/create.widget');
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
        hash: 1122212383,
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
        hash: 819676005,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJxcyIsImdldCIsImhpZGUiLCJjbGVhciIsImV4cG9ydHMiLCJfY29yZSIsIl9tb2RlbCIsIl9zZXNzaW9uIiwiX21haW5MYXlvdXQiLCJfdGV4dHMiLCJfYmV5b25kX2NvbnRleHQiLCJSZWFjdGl2ZU1vZGVsIiwibW9kZWwiLCJ0ZXh0cyIsIkN1cnJlbnRUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInZhbHVlIiwicmVhZHkiLCJjb25zdHJ1Y3RvciIsIm9uIiwidHJpZ2dlckV2ZW50IiwidW5kZWZpbmVkIiwic2V0QnJlYWRjcnVtYiIsIm9uQ2hhbmdlIiwiYmluZCIsIm9mZiIsIkxheW91dEJyb2tlciIsIm92ZXJsYXkiLCJnbG9iYWxUaGlzIiwic2V0VGltZW91dCIsImJyZWFkY3J1bWIiLCJvcmdhbml6YXRpb25zIiwibWFuYWdlbWVudCIsIk9yZ2FuaXphdGlvbiIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJkZWxldGUiLCJpZCIsImNsYXNzcm9vbXMiLCJyZW1vdmUiLCJ0cmlnZ2VyIiwic2F2ZSIsInZhbHVlcyIsImZldGNoaW5nIiwic3RhdHVzIiwiZGF0YSIsIkVycm9yIiwicHVibGlzaCIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsIlJlYWN0IiwiTW9kdWxlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VNb2R1bGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9mb3JtIiwiX2NvbXBvbmVudHMiLCJfdWkiLCJfY29udGV4dCIsIl91c2VGb3JtIiwiX2hvb2tzIiwic2V0UmVhZHkiLCJ1c2VTdGF0ZSIsInVzZUJpbmRlciIsIm9uU3VibWl0IiwidXNlRm9ybSIsImRpc2FibGVkIiwibmFtZSIsImNvbnRleHRWYWx1ZSIsImNyZWF0ZUVsZW1lbnQiLCJQcm92aWRlciIsIlBhZ2VDb250YWluZXIiLCJjbGFzc05hbWUiLCJjcmVhdGUiLCJ0aXRsZSIsIkZvcm0iLCJJbnB1dCIsImxhYmVsIiwicGxhY2Vob2xkZXIiLCJ0eXBlIiwicmVxdWlyZWQiLCJUZXh0YXJlYSIsImRlc2NyaXB0aW9uIiwiQnV0dG9uIiwidmFyaWFudCIsImFjdGlvbnMiLCJfdG9hc3QiLCJfcm91dGluZyIsImRlZmF1bHRWYWx1ZXMiLCJzZXRWYWx1ZXMiLCJzZXRGZXRjaGluZyIsInNldEVycm9yIiwiY3VycmVudFRhcmdldCIsInRhcmdldCIsImN1cnJlbnRWYWx1ZSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJ0b2FzdCIsInN1Y2Nlc3MiLCJyb3V0aW5nIiwicmVwbGFjZVN0YXRlIiwibWVzc2FnZSIsInVzZU1vZGVsIiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwidXNlRWZmZWN0IiwiY2xlYW5VcCJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3VzZS1mb3JtLnRzIiwiL3RzL3ZpZXdzL3VzZS1tb2RlbC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lB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