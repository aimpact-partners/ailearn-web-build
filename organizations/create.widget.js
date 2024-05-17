System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.1.12/model", "@aimpact/chat-sdk@1.0.0/session", "react@18.2.0", "@aimpact/ailearn-app@0.0.32-beta.5/components/navbar-header.code", "@aimpact/ailearn-app@0.0.32-beta.5/config", "pragmate-ui@0.1.1/form", "pragmate-ui@0.1.1/components", "@aimpact/ailearn-app@0.0.32-beta.5/components/ui", "pragmate-ui@0.1.1/toast", "@beyond-js/kernel@0.1.9/routing", "@beyond-js/react-18-widgets@1.1.2/hooks"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp0032Beta5ComponentsNavbarHeaderCode) {
      dependency_8 = _aimpactAilearnApp0032Beta5ComponentsNavbarHeaderCode;
    }, function (_aimpactAilearnApp0032Beta5Config) {
      dependency_9 = _aimpactAilearnApp0032Beta5Config;
    }, function (_pragmateUi011Form) {
      dependency_10 = _pragmateUi011Form;
    }, function (_pragmateUi011Components) {
      dependency_11 = _pragmateUi011Components;
    }, function (_aimpactAilearnApp0032Beta5ComponentsUi) {
      dependency_12 = _aimpactAilearnApp0032Beta5ComponentsUi;
    }, function (_pragmateUi011Toast) {
      dependency_13 = _pragmateUi011Toast;
    }, function (_beyondJsKernel019Routing) {
      dependency_14 = _beyondJsKernel019Routing;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_15 = _beyondJsReact18Widgets112Hooks;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/http-suite", "1.0.3"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/react-18-widgets", "1.1.2"], ["pragmate-ui", "0.1.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["apexcharts", "3.48.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["react-select", "5.8.0"], ["react-is", "16.13.1"], ["swiper", "8.4.7"], ["@firebase/auth", "1.6.2"], ["firebase", "10.9.0"], ["firebase-admin", "11.11.1"], ["@aimpact/ailearn-app", "0.0.32-beta.5"], ["@aimpact/ailearn-app", "0.0.32-beta.5"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.32-beta.5/organizations/create",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['react', dependency_7], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_8], ['@aimpact/ailearn-app/config', dependency_9], ['pragmate-ui/form', dependency_10], ['pragmate-ui/components', dependency_11], ['@aimpact/ailearn-app/components/ui', dependency_12], ['pragmate-ui/toast', dependency_13], ['@beyond-js/kernel/routing', dependency_14], ['@beyond-js/react-18-widgets/hooks', dependency_15]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-organizations-create",
        "vspecifier": "@aimpact/ailearn-app@0.0.32-beta.5/organizations/create.widget",
        "is": "page",
        "route": "/organizations/create",
        "layout": "general-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.32-beta.5/organizations/create.widget');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJxcyIsImdldCIsImhpZGUiLCJjbGVhciIsImV4cG9ydHMiLCJfY29yZSIsIl9tb2RlbCIsIl9zZXNzaW9uIiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwidW5kZWZpbmVkIiwicmVhZHkiLCJPcmdhbml6YXRpb24iLCJlIiwiY29uc29sZSIsImVycm9yIiwiZGVsZXRlIiwiaWQiLCJjbGFzc3Jvb21zIiwicmVtb3ZlIiwidHJpZ2dlciIsInNhdmUiLCJ2YWx1ZXMiLCJmZXRjaGluZyIsInN0YXR1cyIsImRhdGEiLCJFcnJvciIsInB1Ymxpc2giLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJSZWFjdCIsIk1vZHVsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlTW9kdWxlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfbmF2YmFySGVhZGVyIiwiX2NvbnRleHQiLCJIZWFkZXIiLCJ0ZXh0cyIsImNyZWF0ZUVsZW1lbnQiLCJOYXZiYXJIZWFkZXIiLCJicmVhZGNydW1iIiwib3JnYW5pemF0aW9ucyIsIm1hbmFnZW1lbnQiLCJfZm9ybSIsIl9jb21wb25lbnRzIiwiX3VpIiwiX2hlYWRlciIsIl91c2VNb2RlbCIsIl91c2VGb3JtIiwidXNlTW9kZWwiLCJvbkNoYW5nZSIsIm9uU3VibWl0IiwidXNlRm9ybSIsImRpc2FibGVkIiwibmFtZSIsImRlc2NyaXB0aW9uIiwiY29udGV4dFZhbHVlIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsIlBhZ2VDb250YWluZXIiLCJjbGFzc05hbWUiLCJjcmVhdGUiLCJ0aXRsZSIsIkZvcm0iLCJJbnB1dCIsImxhYmVsIiwicGxhY2Vob2xkZXIiLCJ0eXBlIiwicmVxdWlyZWQiLCJUZXh0YXJlYSIsIkJ1dHRvbiIsInZhcmlhbnQiLCJhY3Rpb25zIiwiX3RvYXN0IiwiX3JvdXRpbmciLCJfaG9va3MiLCJkZWZhdWx0VmFsdWVzIiwic2V0VmFsdWVzIiwidXNlU3RhdGUiLCJzZXRGZXRjaGluZyIsInNldEVycm9yIiwidXNlQmluZGVyIiwiY3VycmVudFRhcmdldCIsInRhcmdldCIsImN1cnJlbnRWYWx1ZSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJ0b2FzdCIsInN1Y2Nlc3MiLCJyb3V0aW5nIiwicmVwbGFjZVN0YXRlIiwibWVzc2FnZSIsIl9iZXlvbmRfY29udGV4dCIsInNldFJlYWR5IiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidXNlRWZmZWN0Iiwib24iLCJjbGVhblVwIiwib2ZmIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy91c2UtZm9ybS50cyIsIi90cy92aWV3cy91c2UtbW9kZWwudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElB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