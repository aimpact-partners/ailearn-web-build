System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.1.12/model", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/ailearn-app@0.0.46.dev-09/main-layout.widget", "@beyond-js/kernel@0.1.9/texts", "react@18.2.0", "@aimpact/ailearn-app@0.0.46.dev-09/components/navbar-header.code", "@aimpact/ailearn-app@0.0.46.dev-09/config", "pragmate-ui@0.1.1/form", "pragmate-ui@0.1.1/components", "@aimpact/ailearn-app@0.0.46.dev-09/components/ui", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@0.1.1/toast", "@beyond-js/kernel@0.1.9/routing"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, bimport, __Bundle, __pkg, ims, Controller, Header, __beyond_pkg, hmr;
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
    }, function (_beyondJsReact18Widgets112Page) {
      dependency_3 = _beyondJsReact18Widgets112Page;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_4 = _aimpactAilearnSdk100Core;
    }, function (_beyondJsReactive1112Model) {
      dependency_5 = _beyondJsReactive1112Model;
    }, function (_aimpactChatSdk100Session) {
      dependency_6 = _aimpactChatSdk100Session;
    }, function (_aimpactAilearnApp0046Dev09MainLayoutWidget) {
      dependency_7 = _aimpactAilearnApp0046Dev09MainLayoutWidget;
    }, function (_beyondJsKernel019Texts) {
      dependency_8 = _beyondJsKernel019Texts;
    }, function (_react) {
      dependency_9 = _react;
    }, function (_aimpactAilearnApp0046Dev09ComponentsNavbarHeaderCode) {
      dependency_10 = _aimpactAilearnApp0046Dev09ComponentsNavbarHeaderCode;
    }, function (_aimpactAilearnApp0046Dev09Config) {
      dependency_11 = _aimpactAilearnApp0046Dev09Config;
    }, function (_pragmateUi011Form) {
      dependency_12 = _pragmateUi011Form;
    }, function (_pragmateUi011Components) {
      dependency_13 = _pragmateUi011Components;
    }, function (_aimpactAilearnApp0046Dev09ComponentsUi) {
      dependency_14 = _aimpactAilearnApp0046Dev09ComponentsUi;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_15 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi011Toast) {
      dependency_16 = _pragmateUi011Toast;
    }, function (_beyondJsKernel019Routing) {
      dependency_17 = _beyondJsKernel019Routing;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.0.46.dev-09"], ["@aimpact/ailearn-app", "0.0.46.dev-09"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.46.dev-09/organizations/create",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['@aimpact/ailearn-app/main-layout.widget', dependency_7], ['@beyond-js/kernel/texts', dependency_8], ['react', dependency_9], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_10], ['@aimpact/ailearn-app/config', dependency_11], ['pragmate-ui/form', dependency_12], ['pragmate-ui/components', dependency_13], ['@aimpact/ailearn-app/components/ui', dependency_14], ['@beyond-js/react-18-widgets/hooks', dependency_15], ['pragmate-ui/toast', dependency_16], ['@beyond-js/kernel/routing', dependency_17]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-organizations-create",
        "vspecifier": "@aimpact/ailearn-app@0.0.46.dev-09/organizations/create.widget",
        "is": "page",
        "route": "/organizations/create",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.46.dev-09/organizations/create.widget');
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

      /******************************
      INTERNAL MODULE: ./views/header
      ******************************/

      ims.set('./views/header', {
        hash: 3746281293,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Header = Header;
          var _navbarHeader = require("@aimpact/ailearn-app/components/navbar-header.code");
          var React = require("react");
          var _context = require("./context");
          /*bundle*/
          function Header() {
            const {
              texts
            } = (0, _context.useModuleContext)();
            return React.createElement("section", null, React.createElement(_navbarHeader.NavbarHeader, {
              breadcrumb: [[texts.breadcrumb.organizations, '/organizations/list'], [texts.breadcrumb.management, '']]
            }));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 1208068529,
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
              disabled: fetching || values.name === '' || values.description === ''
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJxcyIsImdldCIsImhpZGUiLCJjbGVhciIsImV4cG9ydHMiLCJfY29yZSIsIl9tb2RlbCIsIl9zZXNzaW9uIiwiX21haW5MYXlvdXQiLCJfdGV4dHMiLCJfYmV5b25kX2NvbnRleHQiLCJSZWFjdGl2ZU1vZGVsIiwibW9kZWwiLCJ0ZXh0cyIsIkN1cnJlbnRUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInZhbHVlIiwicmVhZHkiLCJjb25zdHJ1Y3RvciIsIm9uIiwidHJpZ2dlckV2ZW50IiwidW5kZWZpbmVkIiwic2V0QnJlYWRjcnVtYiIsIm9uQ2hhbmdlIiwiYmluZCIsIm9mZiIsIkxheW91dEJyb2tlciIsIm92ZXJsYXkiLCJnbG9iYWxUaGlzIiwic2V0VGltZW91dCIsImJyZWFkY3J1bWIiLCJvcmdhbml6YXRpb25zIiwibWFuYWdlbWVudCIsIk9yZ2FuaXphdGlvbiIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJkZWxldGUiLCJpZCIsImNsYXNzcm9vbXMiLCJyZW1vdmUiLCJ0cmlnZ2VyIiwic2F2ZSIsInZhbHVlcyIsImZldGNoaW5nIiwic3RhdHVzIiwiZGF0YSIsIkVycm9yIiwicHVibGlzaCIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsIlJlYWN0IiwiTW9kdWxlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VNb2R1bGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9uYXZiYXJIZWFkZXIiLCJfY29udGV4dCIsIkhlYWRlciIsImNyZWF0ZUVsZW1lbnQiLCJOYXZiYXJIZWFkZXIiLCJfZm9ybSIsIl9jb21wb25lbnRzIiwiX3VpIiwiX3VzZUZvcm0iLCJfaG9va3MiLCJzZXRSZWFkeSIsInVzZVN0YXRlIiwidXNlQmluZGVyIiwib25TdWJtaXQiLCJ1c2VGb3JtIiwiZGlzYWJsZWQiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJjb250ZXh0VmFsdWUiLCJQcm92aWRlciIsIlBhZ2VDb250YWluZXIiLCJjbGFzc05hbWUiLCJjcmVhdGUiLCJ0aXRsZSIsIkZvcm0iLCJJbnB1dCIsImxhYmVsIiwicGxhY2Vob2xkZXIiLCJ0eXBlIiwicmVxdWlyZWQiLCJUZXh0YXJlYSIsIkJ1dHRvbiIsInZhcmlhbnQiLCJhY3Rpb25zIiwiX3RvYXN0IiwiX3JvdXRpbmciLCJkZWZhdWx0VmFsdWVzIiwic2V0VmFsdWVzIiwic2V0RmV0Y2hpbmciLCJzZXRFcnJvciIsImN1cnJlbnRUYXJnZXQiLCJ0YXJnZXQiLCJjdXJyZW50VmFsdWUiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwidG9hc3QiLCJzdWNjZXNzIiwicm91dGluZyIsInJlcGxhY2VTdGF0ZSIsIm1lc3NhZ2UiLCJ1c2VNb2RlbCIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsInVzZUVmZmVjdCIsImNsZWFuVXAiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2hlYWRlci50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3VzZS1mb3JtLnRzIiwiL3RzL3ZpZXdzL3VzZS1tb2RlbC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEs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