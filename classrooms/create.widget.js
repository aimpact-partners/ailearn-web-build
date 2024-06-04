System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.1.12/model", "@aimpact/chat-sdk@1.0.0/session", "react@18.2.0", "pragmate-ui@0.1.1/toast", "@beyond-js/kernel@0.1.9/routing", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/ailearn-app@0.0.45/components/navbar-header.code", "@aimpact/ailearn-app@0.0.45/config", "pragmate-ui@0.1.1/form", "pragmate-ui@0.1.1/components", "@aimpact/ailearn-app@0.0.45/components/ui", "pragmate-ui@0.1.1/form/react-select"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, bimport, __Bundle, __pkg, ims, Controller, Header, __beyond_pkg, hmr;
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
    }, function (_react2) {
      dependency_7 = _react2;
    }, function (_pragmateUi011Toast) {
      dependency_8 = _pragmateUi011Toast;
    }, function (_beyondJsKernel019Routing) {
      dependency_9 = _beyondJsKernel019Routing;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_10 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactAilearnApp0045ComponentsNavbarHeaderCode) {
      dependency_11 = _aimpactAilearnApp0045ComponentsNavbarHeaderCode;
    }, function (_aimpactAilearnApp0045Config) {
      dependency_12 = _aimpactAilearnApp0045Config;
    }, function (_pragmateUi011Form) {
      dependency_13 = _pragmateUi011Form;
    }, function (_pragmateUi011Components) {
      dependency_14 = _pragmateUi011Components;
    }, function (_aimpactAilearnApp0045ComponentsUi) {
      dependency_15 = _aimpactAilearnApp0045ComponentsUi;
    }, function (_pragmateUi011FormReactSelect) {
      dependency_16 = _pragmateUi011FormReactSelect;
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
          "vspecifier": "@aimpact/ailearn-app@0.0.45/classrooms/create",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['react', dependency_7], ['pragmate-ui/toast', dependency_8], ['@beyond-js/kernel/routing', dependency_9], ['@beyond-js/react-18-widgets/hooks', dependency_10], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_11], ['@aimpact/ailearn-app/config', dependency_12], ['pragmate-ui/form', dependency_13], ['pragmate-ui/components', dependency_14], ['@aimpact/ailearn-app/components/ui', dependency_15], ['pragmate-ui/form/react-select', dependency_16]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-classrooms-create",
        "vspecifier": "@aimpact/ailearn-app@0.0.45/classrooms/create.widget",
        "is": "page",
        "route": "/classrooms/create",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.45/classrooms/create.widget');
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
        hash: 1870079049,
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
            get user() {
              return _session.sessionWrapper.user;
            }
            clear() {
              this.#model = undefined;
              this.ready = false;
            }
            async load() {
              try {
                this.ready = false;
                this.#model = new _core.Classroom({});
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
      INTERNAL MODULE: ./views/events
      ******************************/

      ims.set('./views/events', {
        hash: 906590573,
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
                const response = await model.publish(values);
                _toast.toast.success(texts.create.success);
                _routing.routing.replaceState({}, null, `/classrooms/view/${model.id}`);
              } catch (e) {
                setError(texts.errors.default);
              } finally {
                setFetching(false);
              }
            };
            return {
              values,
              fetching,
              error,
              setFetching,
              onChange,
              onSubmit,
              setValues
            };
          }
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
        hash: 2510433367,
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
          var _events = require("./events");
          var _ownership = require("./ownership");
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
              onSubmit,
              setValues,
              error
            } = (0, _events.useForm)(ready, store, texts);
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
            }, React.createElement("h3", null, texts.create.title)), React.createElement(_ui.ErrorRenderer, {
              error: error,
              texts: texts.errors
            }), React.createElement(_form.Form, {
              onSubmit: onSubmit,
              className: "form__container"
            }, React.createElement(_ownership.OwnershipField, {
              setValues: setValues,
              values: values
            }), React.createElement(_form.Input, {
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

      /*********************************
      INTERNAL MODULE: ./views/ownership
      *********************************/

      ims.set('./views/ownership', {
        hash: 2337657386,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.OwnershipField = OwnershipField;
          var _react = require("react");
          var _reactSelect = require("pragmate-ui/form/react-select");
          var _context = require("./context");
          function OwnershipField({
            setValues,
            values
          }) {
            const {
              store,
              texts
            } = (0, _context.useModuleContext)();
            if (!store.user.teacher?.orgs) return null;
            let defaultOption = {
              value: '',
              label: texts.schools.select
            };
            const onChange = ({
              currentTarget
            }) => {
              if (currentTarget.value === store.user.id) {
                setValues(values => {
                  return {
                    ...values,
                    owner: store.user.id
                  };
                });
                return;
              }
              setValues(values => {
                return {
                  ...values,
                  owner: currentTarget.value,
                  organizationId: currentTarget.value
                };
              });
            };
            const options = [...store.user.teacher.orgs.map(item => {
              return {
                value: item.id,
                label: item.name
              };
            }), {
              value: store.user.id,
              label: texts.schools.own
            }];
            return _react.default.createElement("div", null, _react.default.createElement("label", {
              htmlFor: ""
            }, texts.schools.label), _react.default.createElement(_reactSelect.ReactSelect, {
              value: values.owner,
              defaultOption: defaultOption,
              name: "owner",
              options: options,
              onChange: onChange
            }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJxcyIsImdldCIsImhpZGUiLCJjbGVhciIsImV4cG9ydHMiLCJfY29yZSIsIl9tb2RlbCIsIl9zZXNzaW9uIiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwidXNlciIsInNlc3Npb25XcmFwcGVyIiwidW5kZWZpbmVkIiwicmVhZHkiLCJDbGFzc3Jvb20iLCJlIiwiY29uc29sZSIsImVycm9yIiwiZGVsZXRlIiwiaWQiLCJjbGFzc3Jvb21zIiwicmVtb3ZlIiwidHJpZ2dlciIsInNhdmUiLCJ2YWx1ZXMiLCJmZXRjaGluZyIsInN0YXR1cyIsImRhdGEiLCJFcnJvciIsIlJlYWN0IiwiTW9kdWxlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VNb2R1bGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl90b2FzdCIsIl9yb3V0aW5nIiwiX2hvb2tzIiwidXNlRm9ybSIsInRleHRzIiwiZGVmYXVsdFZhbHVlcyIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsInNldFZhbHVlcyIsInVzZVN0YXRlIiwic2V0RmV0Y2hpbmciLCJzZXRFcnJvciIsInVzZUJpbmRlciIsIm9uQ2hhbmdlIiwiY3VycmVudFRhcmdldCIsInRhcmdldCIsImN1cnJlbnRWYWx1ZSIsInZhbHVlIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwicmVzcG9uc2UiLCJwdWJsaXNoIiwidG9hc3QiLCJzdWNjZXNzIiwiY3JlYXRlIiwicm91dGluZyIsInJlcGxhY2VTdGF0ZSIsImVycm9ycyIsImRlZmF1bHQiLCJfbmF2YmFySGVhZGVyIiwiX2NvbnRleHQiLCJIZWFkZXIiLCJjcmVhdGVFbGVtZW50IiwiTmF2YmFySGVhZGVyIiwiYnJlYWRjcnVtYiIsIm9yZ2FuaXphdGlvbnMiLCJtYW5hZ2VtZW50IiwiX2Zvcm0iLCJfY29tcG9uZW50cyIsIl91aSIsIl91c2VNb2RlbCIsIl9ldmVudHMiLCJfb3duZXJzaGlwIiwidXNlTW9kZWwiLCJkaXNhYmxlZCIsImNvbnRleHRWYWx1ZSIsIlByb3ZpZGVyIiwiUGFnZUNvbnRhaW5lciIsImNsYXNzTmFtZSIsInRpdGxlIiwiRXJyb3JSZW5kZXJlciIsIkZvcm0iLCJPd25lcnNoaXBGaWVsZCIsIklucHV0IiwibGFiZWwiLCJwbGFjZWhvbGRlciIsInR5cGUiLCJyZXF1aXJlZCIsIlRleHRhcmVhIiwiQnV0dG9uIiwidmFyaWFudCIsImFjdGlvbnMiLCJfcmVhY3QiLCJfcmVhY3RTZWxlY3QiLCJ0ZWFjaGVyIiwib3JncyIsImRlZmF1bHRPcHRpb24iLCJzY2hvb2xzIiwic2VsZWN0Iiwib3duZXIiLCJvcmdhbml6YXRpb25JZCIsIm9wdGlvbnMiLCJtYXAiLCJpdGVtIiwib3duIiwiaHRtbEZvciIsIlJlYWN0U2VsZWN0IiwiX2JleW9uZF9jb250ZXh0Iiwic2V0UmVhZHkiLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ1c2VFZmZlY3QiLCJvbiIsImNsZWFuVXAiLCJvZmYiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2V2ZW50cy50cyIsIi90cy92aWV3cy9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9vd25lcnNoaXAudHN4IiwiL3RzL3ZpZXdzL3VzZS1tb2RlbC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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