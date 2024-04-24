System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.1.12/model", "@aimpact/chat-sdk@1.0.0/session", "react@18.2.0", "@aimpact/ailearn-app@0.0.32/components/navbar-header.code", "@aimpact/ailearn-app@0.0.32/config", "pragmate-ui@0.1.1/form", "pragmate-ui@0.1.1/components", "@aimpact/ailearn-app@0.0.32/components/ui", "pragmate-ui@0.1.1/toast", "@beyond-js/kernel@0.1.9/routing", "@beyond-js/react-18-widgets@1.1.2/hooks"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, bimport, __Bundle, __pkg, ims, Controller, Header, __beyond_pkg, hmr;
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
    }, function (_react) {
      dependency_7 = _react;
    }, function (_aimpactAilearnApp0032ComponentsNavbarHeaderCode) {
      dependency_8 = _aimpactAilearnApp0032ComponentsNavbarHeaderCode;
    }, function (_aimpactAilearnApp0032Config) {
      dependency_9 = _aimpactAilearnApp0032Config;
    }, function (_pragmateUi011Form) {
      dependency_10 = _pragmateUi011Form;
    }, function (_pragmateUi011Components) {
      dependency_11 = _pragmateUi011Components;
    }, function (_aimpactAilearnApp0032ComponentsUi) {
      dependency_12 = _aimpactAilearnApp0032ComponentsUi;
    }, function (_pragmateUi011Toast) {
      dependency_13 = _pragmateUi011Toast;
    }, function (_beyondJsKernel019Routing) {
      dependency_14 = _beyondJsKernel019Routing;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_15 = _beyondJsReact18Widgets112Hooks;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/http-suite", "1.0.3"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/react-18-widgets", "1.1.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["apexcharts", "3.48.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["firebase", "10.9.0"], ["firebase-admin", "11.11.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["@aimpact/ailearn-app", "0.0.32"], ["@aimpact/ailearn-app", "0.0.32"]]);
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['react', dependency_7], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_8], ['@aimpact/ailearn-app/config', dependency_9], ['pragmate-ui/form', dependency_10], ['pragmate-ui/components', dependency_11], ['@aimpact/ailearn-app/components/ui', dependency_12], ['pragmate-ui/toast', dependency_13], ['@beyond-js/kernel/routing', dependency_14], ['@beyond-js/react-18-widgets/hooks', dependency_15]]);
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
        hash: 523044439,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _core = require("@aimpact/ailearn-sdk/core");
          var _model = require("@beyond-js/reactive/model");
          var _session = require("@aimpact/chat-sdk/session");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJxcyIsImdldCIsImhpZGUiLCJjbGVhciIsImV4cG9ydHMiLCJfY29yZSIsIl9tb2RlbCIsIl9zZXNzaW9uIiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwidW5kZWZpbmVkIiwicmVhZHkiLCJPcmdhbml6YXRpb24iLCJlIiwiY29uc29sZSIsImVycm9yIiwiZGVsZXRlIiwiaWQiLCJjbGFzc3Jvb21zIiwicmVtb3ZlIiwidHJpZ2dlciIsInNhdmUiLCJ2YWx1ZXMiLCJmZXRjaGluZyIsInN0YXR1cyIsImRhdGEiLCJFcnJvciIsInB1Ymxpc2giLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJSZWFjdCIsIk1vZHVsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlTW9kdWxlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfbmF2YmFySGVhZGVyIiwiX2NvbmZpZyIsIl9jb250ZXh0IiwiSGVhZGVyIiwidGV4dHMiLCJjcmVhdGVFbGVtZW50IiwiTmF2YmFySGVhZGVyIiwiYnJlYWRjcnVtYiIsImRlZmF1bHQiLCJwYXJhbXMiLCJBUFBfTkFNRSIsIm9yZ2FuaXphdGlvbnMiLCJtYW5hZ2VtZW50IiwiX2Zvcm0iLCJfY29tcG9uZW50cyIsIl91aSIsIl9oZWFkZXIiLCJfdXNlTW9kZWwiLCJfdXNlRm9ybSIsInVzZU1vZGVsIiwib25DaGFuZ2UiLCJvblN1Ym1pdCIsInVzZUZvcm0iLCJkaXNhYmxlZCIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsImNvbnRleHRWYWx1ZSIsIlByb3ZpZGVyIiwidmFsdWUiLCJQYWdlQ29udGFpbmVyIiwiY2xhc3NOYW1lIiwiY3JlYXRlIiwidGl0bGUiLCJGb3JtIiwiSW5wdXQiLCJsYWJlbCIsInBsYWNlaG9sZGVyIiwidHlwZSIsInJlcXVpcmVkIiwiVGV4dGFyZWEiLCJCdXR0b24iLCJ2YXJpYW50IiwiYWN0aW9ucyIsIl90b2FzdCIsIl9yb3V0aW5nIiwiX2hvb2tzIiwiZGVmYXVsdFZhbHVlcyIsInNldFZhbHVlcyIsInVzZVN0YXRlIiwic2V0RmV0Y2hpbmciLCJzZXRFcnJvciIsInVzZUJpbmRlciIsImN1cnJlbnRUYXJnZXQiLCJ0YXJnZXQiLCJjdXJyZW50VmFsdWUiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwidG9hc3QiLCJzdWNjZXNzIiwicm91dGluZyIsInJlcGxhY2VTdGF0ZSIsIm1lc3NhZ2UiLCJfYmV5b25kX2NvbnRleHQiLCJzZXRSZWFkeSIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInVzZUVmZmVjdCIsIm9uIiwiY2xlYW5VcCIsIm9mZiJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvaGVhZGVyLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvdXNlLWZvcm0udHMiLCIvdHMvdmlld3MvdXNlLW1vZGVsLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUNOQyxXQUFX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