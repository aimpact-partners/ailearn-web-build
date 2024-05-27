System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.1.12/model", "@aimpact/chat-sdk@1.0.0/session", "react@18.2.0", "pragmate-ui@0.1.1/toast", "@beyond-js/kernel@0.1.9/routing", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/ailearn-app@0.0.43/components/navbar-header.code", "@aimpact/ailearn-app@0.0.43/config", "pragmate-ui@0.1.1/form", "pragmate-ui@0.1.1/components", "@aimpact/ailearn-app@0.0.43/components/ui", "pragmate-ui@0.1.1/form/react-select"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp0043ComponentsNavbarHeaderCode) {
      dependency_11 = _aimpactAilearnApp0043ComponentsNavbarHeaderCode;
    }, function (_aimpactAilearnApp0043Config) {
      dependency_12 = _aimpactAilearnApp0043Config;
    }, function (_pragmateUi011Form) {
      dependency_13 = _pragmateUi011Form;
    }, function (_pragmateUi011Components) {
      dependency_14 = _pragmateUi011Components;
    }, function (_aimpactAilearnApp0043ComponentsUi) {
      dependency_15 = _aimpactAilearnApp0043ComponentsUi;
    }, function (_pragmateUi011FormReactSelect) {
      dependency_16 = _pragmateUi011FormReactSelect;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.0.43"], ["@aimpact/ailearn-app", "0.0.43"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.43/classrooms/create",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['react', dependency_7], ['pragmate-ui/toast', dependency_8], ['@beyond-js/kernel/routing', dependency_9], ['@beyond-js/react-18-widgets/hooks', dependency_10], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_11], ['@aimpact/ailearn-app/config', dependency_12], ['pragmate-ui/form', dependency_13], ['pragmate-ui/components', dependency_14], ['@aimpact/ailearn-app/components/ui', dependency_15], ['pragmate-ui/form/react-select', dependency_16]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-classrooms-create",
        "vspecifier": "@aimpact/ailearn-app@0.0.43/classrooms/create.widget",
        "is": "page",
        "route": "/classrooms/create",
        "layout": "general-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.43/classrooms/create.widget');
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
        hash: 2933641159,
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
                _routing.routing.replaceState({}, null, `/classrooms/view/${model.id}`);
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
        hash: 2993569487,
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
              setValues
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
            }, React.createElement(_header.Header, null), React.createElement(_ui.PageContainer, {
              className: "form-page-container",
              fetching: fetching
            }, React.createElement("header", {
              className: "page__header"
            }, React.createElement("h3", null, texts.create.title)), React.createElement(_form.Form, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJxcyIsImdldCIsImhpZGUiLCJjbGVhciIsImV4cG9ydHMiLCJfY29yZSIsIl9tb2RlbCIsIl9zZXNzaW9uIiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwidXNlciIsInNlc3Npb25XcmFwcGVyIiwidW5kZWZpbmVkIiwicmVhZHkiLCJDbGFzc3Jvb20iLCJlIiwiY29uc29sZSIsImVycm9yIiwiZGVsZXRlIiwiaWQiLCJjbGFzc3Jvb21zIiwicmVtb3ZlIiwidHJpZ2dlciIsInNhdmUiLCJ2YWx1ZXMiLCJmZXRjaGluZyIsInN0YXR1cyIsImRhdGEiLCJFcnJvciIsIlJlYWN0IiwiTW9kdWxlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VNb2R1bGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl90b2FzdCIsIl9yb3V0aW5nIiwiX2hvb2tzIiwidXNlRm9ybSIsInRleHRzIiwiZGVmYXVsdFZhbHVlcyIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsInNldFZhbHVlcyIsInVzZVN0YXRlIiwic2V0RmV0Y2hpbmciLCJzZXRFcnJvciIsInVzZUJpbmRlciIsIm9uQ2hhbmdlIiwiY3VycmVudFRhcmdldCIsInRhcmdldCIsImN1cnJlbnRWYWx1ZSIsInZhbHVlIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwicHVibGlzaCIsInRvYXN0Iiwic3VjY2VzcyIsImNyZWF0ZSIsInJvdXRpbmciLCJyZXBsYWNlU3RhdGUiLCJtZXNzYWdlIiwiX25hdmJhckhlYWRlciIsIl9jb250ZXh0IiwiSGVhZGVyIiwiY3JlYXRlRWxlbWVudCIsIk5hdmJhckhlYWRlciIsImJyZWFkY3J1bWIiLCJvcmdhbml6YXRpb25zIiwibWFuYWdlbWVudCIsIl9mb3JtIiwiX2NvbXBvbmVudHMiLCJfdWkiLCJfaGVhZGVyIiwiX3VzZU1vZGVsIiwiX2V2ZW50cyIsIl9vd25lcnNoaXAiLCJ1c2VNb2RlbCIsImRpc2FibGVkIiwiY29udGV4dFZhbHVlIiwiUHJvdmlkZXIiLCJQYWdlQ29udGFpbmVyIiwiY2xhc3NOYW1lIiwidGl0bGUiLCJGb3JtIiwiT3duZXJzaGlwRmllbGQiLCJJbnB1dCIsImxhYmVsIiwicGxhY2Vob2xkZXIiLCJ0eXBlIiwicmVxdWlyZWQiLCJUZXh0YXJlYSIsIkJ1dHRvbiIsInZhcmlhbnQiLCJhY3Rpb25zIiwiX3JlYWN0IiwiX3JlYWN0U2VsZWN0IiwidGVhY2hlciIsIm9yZ3MiLCJkZWZhdWx0T3B0aW9uIiwic2Nob29scyIsInNlbGVjdCIsIm93bmVyIiwib3JnYW5pemF0aW9uSWQiLCJvcHRpb25zIiwibWFwIiwiaXRlbSIsIm93biIsImRlZmF1bHQiLCJodG1sRm9yIiwiUmVhY3RTZWxlY3QiLCJfYmV5b25kX2NvbnRleHQiLCJzZXRSZWFkeSIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInVzZUVmZmVjdCIsIm9uIiwiY2xlYW5VcCIsIm9mZiJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvZXZlbnRzLnRzIiwiL3RzL3ZpZXdzL2hlYWRlci50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL293bmVyc2hpcC50c3giLCIvdHMvdmlld3MvdXNlLW1vZGVsLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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