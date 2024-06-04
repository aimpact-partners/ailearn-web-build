System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.1.12/model", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/ailearn-app@0.0.45/main-layout.widget", "@beyond-js/kernel@0.1.9/texts", "react@18.2.0", "@aimpact/ailearn-app@0.0.45/components/navbar-header.code", "@aimpact/ailearn-app@0.0.45/config", "pragmate-ui@0.1.1/form", "pragmate-ui@0.1.1/components", "@aimpact/ailearn-app@0.0.45/components/ui", "pragmate-ui@0.1.1/toast", "@beyond-js/kernel@0.1.9/routing", "@beyond-js/react-18-widgets@1.1.2/hooks"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp0045MainLayoutWidget) {
      dependency_7 = _aimpactAilearnApp0045MainLayoutWidget;
    }, function (_beyondJsKernel019Texts) {
      dependency_8 = _beyondJsKernel019Texts;
    }, function (_react) {
      dependency_9 = _react;
    }, function (_aimpactAilearnApp0045ComponentsNavbarHeaderCode) {
      dependency_10 = _aimpactAilearnApp0045ComponentsNavbarHeaderCode;
    }, function (_aimpactAilearnApp0045Config) {
      dependency_11 = _aimpactAilearnApp0045Config;
    }, function (_pragmateUi011Form) {
      dependency_12 = _pragmateUi011Form;
    }, function (_pragmateUi011Components) {
      dependency_13 = _pragmateUi011Components;
    }, function (_aimpactAilearnApp0045ComponentsUi) {
      dependency_14 = _aimpactAilearnApp0045ComponentsUi;
    }, function (_pragmateUi011Toast) {
      dependency_15 = _pragmateUi011Toast;
    }, function (_beyondJsKernel019Routing) {
      dependency_16 = _beyondJsKernel019Routing;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_17 = _beyondJsReact18Widgets112Hooks;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.0.45"], ["@aimpact/ailearn-app", "0.0.45"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.45/organizations/create",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['@aimpact/ailearn-app/main-layout.widget', dependency_7], ['@beyond-js/kernel/texts', dependency_8], ['react', dependency_9], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_10], ['@aimpact/ailearn-app/config', dependency_11], ['pragmate-ui/form', dependency_12], ['pragmate-ui/components', dependency_13], ['@aimpact/ailearn-app/components/ui', dependency_14], ['pragmate-ui/toast', dependency_15], ['@beyond-js/kernel/routing', dependency_16], ['@beyond-js/react-18-widgets/hooks', dependency_17]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-organizations-create",
        "vspecifier": "@aimpact/ailearn-app@0.0.45/organizations/create.widget",
        "is": "page",
        "route": "/organizations/create",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.45/organizations/create.widget');
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
        hash: 450210756,
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
              _mainLayout.LayoutBroker.breadcrumb = [[this.texts.breadcrumb.organizations, '/organizations/list'], [this.texts.breadcrumb.management, '']];
            }
            async load() {
              try {
                const onChange = this.setBreadcrumb.bind(this);
                if (!this.#texts.ready) {
                  this.#texts.on('change', onChange);
                } else this.setBreadcrumb();
                super.ready = false;
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
        hash: 2901797210,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJxcyIsImdldCIsImhpZGUiLCJjbGVhciIsImV4cG9ydHMiLCJfY29yZSIsIl9tb2RlbCIsIl9zZXNzaW9uIiwiX21haW5MYXlvdXQiLCJfdGV4dHMiLCJfYmV5b25kX2NvbnRleHQiLCJSZWFjdGl2ZU1vZGVsIiwibW9kZWwiLCJ0ZXh0cyIsIkN1cnJlbnRUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInZhbHVlIiwicmVhZHkiLCJjb25zdHJ1Y3RvciIsIm9uIiwidHJpZ2dlckV2ZW50IiwidW5kZWZpbmVkIiwic2V0QnJlYWRjcnVtYiIsIm9uQ2hhbmdlIiwiYmluZCIsIm9mZiIsIkxheW91dEJyb2tlciIsImJyZWFkY3J1bWIiLCJvcmdhbml6YXRpb25zIiwibWFuYWdlbWVudCIsIk9yZ2FuaXphdGlvbiIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJkZWxldGUiLCJpZCIsImNsYXNzcm9vbXMiLCJyZW1vdmUiLCJ0cmlnZ2VyIiwic2F2ZSIsInZhbHVlcyIsImZldGNoaW5nIiwic3RhdHVzIiwiZGF0YSIsIkVycm9yIiwicHVibGlzaCIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsIlJlYWN0IiwiTW9kdWxlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VNb2R1bGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9uYXZiYXJIZWFkZXIiLCJfY29udGV4dCIsIkhlYWRlciIsImNyZWF0ZUVsZW1lbnQiLCJOYXZiYXJIZWFkZXIiLCJfZm9ybSIsIl9jb21wb25lbnRzIiwiX3VpIiwiX3VzZU1vZGVsIiwiX3VzZUZvcm0iLCJ1c2VNb2RlbCIsIm9uU3VibWl0IiwidXNlRm9ybSIsImRpc2FibGVkIiwibmFtZSIsImRlc2NyaXB0aW9uIiwiY29udGV4dFZhbHVlIiwiUHJvdmlkZXIiLCJQYWdlQ29udGFpbmVyIiwiY2xhc3NOYW1lIiwiY3JlYXRlIiwidGl0bGUiLCJGb3JtIiwiSW5wdXQiLCJsYWJlbCIsInBsYWNlaG9sZGVyIiwidHlwZSIsInJlcXVpcmVkIiwiVGV4dGFyZWEiLCJCdXR0b24iLCJ2YXJpYW50IiwiYWN0aW9ucyIsIl90b2FzdCIsIl9yb3V0aW5nIiwiX2hvb2tzIiwiZGVmYXVsdFZhbHVlcyIsInNldFZhbHVlcyIsInVzZVN0YXRlIiwic2V0RmV0Y2hpbmciLCJzZXRFcnJvciIsInVzZUJpbmRlciIsImN1cnJlbnRUYXJnZXQiLCJ0YXJnZXQiLCJjdXJyZW50VmFsdWUiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwidG9hc3QiLCJzdWNjZXNzIiwicm91dGluZyIsInJlcGxhY2VTdGF0ZSIsIm1lc3NhZ2UiLCJzZXRSZWFkeSIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsInVzZUVmZmVjdCIsImNsZWFuVXAiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2hlYWRlci50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3VzZS1mb3JtLnRzIiwiL3RzL3ZpZXdzL3VzZS1tb2RlbC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFD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