System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.1.12/model", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/ailearn-app@0.0.46.dev-22/main-layout.widget", "@beyond-js/kernel@0.1.9/texts", "react@18.2.0", "pragmate-ui@0.1.1/toast", "@beyond-js/kernel@0.1.9/routing", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@0.1.1/form", "pragmate-ui@0.1.1/components", "@aimpact/ailearn-app@0.0.46.dev-22/components/ui", "pragmate-ui@0.1.1/form/react-select"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp0046Dev22MainLayoutWidget) {
      dependency_7 = _aimpactAilearnApp0046Dev22MainLayoutWidget;
    }, function (_beyondJsKernel019Texts) {
      dependency_8 = _beyondJsKernel019Texts;
    }, function (_react2) {
      dependency_9 = _react2;
    }, function (_pragmateUi011Toast) {
      dependency_10 = _pragmateUi011Toast;
    }, function (_beyondJsKernel019Routing) {
      dependency_11 = _beyondJsKernel019Routing;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_12 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi011Form) {
      dependency_13 = _pragmateUi011Form;
    }, function (_pragmateUi011Components) {
      dependency_14 = _pragmateUi011Components;
    }, function (_aimpactAilearnApp0046Dev22ComponentsUi) {
      dependency_15 = _aimpactAilearnApp0046Dev22ComponentsUi;
    }, function (_pragmateUi011FormReactSelect) {
      dependency_16 = _pragmateUi011FormReactSelect;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.0.46.dev-22"], ["@aimpact/ailearn-app", "0.0.46.dev-22"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.46.dev-22/classrooms/create",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['@aimpact/ailearn-app/main-layout.widget', dependency_7], ['@beyond-js/kernel/texts', dependency_8], ['react', dependency_9], ['pragmate-ui/toast', dependency_10], ['@beyond-js/kernel/routing', dependency_11], ['@beyond-js/react-18-widgets/hooks', dependency_12], ['pragmate-ui/form', dependency_13], ['pragmate-ui/components', dependency_14], ['@aimpact/ailearn-app/components/ui', dependency_15], ['pragmate-ui/form/react-select', dependency_16]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-classrooms-create",
        "vspecifier": "@aimpact/ailearn-app@0.0.46.dev-22/classrooms/create.widget",
        "is": "page",
        "route": "/classrooms/create",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.46.dev-22/classrooms/create.widget');
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
        hash: 1563252501,
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
            get user() {
              return _session.sessionWrapper.user;
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
                _mainLayout.LayoutBroker.breadcrumb = [[this.texts.breadcrumb.classrooms, '/classrooms/list'], [this.texts.breadcrumb.management, '']];
              }, 100);
            }
            async load() {
              try {
                this.setBreadcrumb();
                super.ready = false;
                this.#model = new _core.Classroom({});
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
        hash: 2581073038,
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
                console.error(e);
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

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 3215304630,
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
        hash: 2753087712,
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
              label: texts.institution.select
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
              label: texts.institution.own
            }];
            return _react.default.createElement("div", null, _react.default.createElement("label", {
              htmlFor: ""
            }, texts.institution.label, " *"), _react.default.createElement(_reactSelect.ReactSelect, {
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
        hash: 347815426,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useModel = useModel;
          var React = require("react");
          function useModel(store) {
            const [ready, setReady] = React.useState(store.ready);
            React.useEffect(() => {
              const onChange = () => {
                setReady(store.ready);
              };
              store.on('change', onChange);
              const cleanUp = () => store.off('change', onChange);
              return cleanUp;
            });
            return {
              ready,
              store,
              texts: store?.texts
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJxcyIsImdldCIsImhpZGUiLCJjbGVhciIsImV4cG9ydHMiLCJfY29yZSIsIl9tb2RlbCIsIl9zZXNzaW9uIiwiX21haW5MYXlvdXQiLCJfdGV4dHMiLCJfYmV5b25kX2NvbnRleHQiLCJSZWFjdGl2ZU1vZGVsIiwibW9kZWwiLCJ1c2VyIiwic2Vzc2lvbldyYXBwZXIiLCJ0ZXh0cyIsIkN1cnJlbnRUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInZhbHVlIiwicmVhZHkiLCJjb25zdHJ1Y3RvciIsIm9uIiwidHJpZ2dlckV2ZW50IiwidW5kZWZpbmVkIiwic2V0QnJlYWRjcnVtYiIsIm9uQ2hhbmdlIiwiYmluZCIsIm9mZiIsIkxheW91dEJyb2tlciIsIm92ZXJsYXkiLCJnbG9iYWxUaGlzIiwic2V0VGltZW91dCIsImJyZWFkY3J1bWIiLCJjbGFzc3Jvb21zIiwibWFuYWdlbWVudCIsIkNsYXNzcm9vbSIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJkZWxldGUiLCJpZCIsInJlbW92ZSIsInRyaWdnZXIiLCJzYXZlIiwidmFsdWVzIiwiZmV0Y2hpbmciLCJzdGF0dXMiLCJkYXRhIiwiRXJyb3IiLCJSZWFjdCIsIk1vZHVsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlTW9kdWxlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfdG9hc3QiLCJfcm91dGluZyIsIl9ob29rcyIsInVzZUZvcm0iLCJkZWZhdWx0VmFsdWVzIiwibmFtZSIsImRlc2NyaXB0aW9uIiwic2V0VmFsdWVzIiwidXNlU3RhdGUiLCJzZXRGZXRjaGluZyIsInNldEVycm9yIiwidXNlQmluZGVyIiwiY3VycmVudFRhcmdldCIsInRhcmdldCIsImN1cnJlbnRWYWx1ZSIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsInB1Ymxpc2giLCJ0b2FzdCIsInN1Y2Nlc3MiLCJjcmVhdGUiLCJyb3V0aW5nIiwicmVwbGFjZVN0YXRlIiwiZXJyb3JzIiwiZGVmYXVsdCIsIl9mb3JtIiwiX2NvbXBvbmVudHMiLCJfdWkiLCJfY29udGV4dCIsIl91c2VNb2RlbCIsIl9ldmVudHMiLCJfb3duZXJzaGlwIiwidXNlTW9kZWwiLCJkaXNhYmxlZCIsImNvbnRleHRWYWx1ZSIsImNyZWF0ZUVsZW1lbnQiLCJQcm92aWRlciIsIlBhZ2VDb250YWluZXIiLCJjbGFzc05hbWUiLCJ0aXRsZSIsIkVycm9yUmVuZGVyZXIiLCJGb3JtIiwiT3duZXJzaGlwRmllbGQiLCJJbnB1dCIsImxhYmVsIiwicGxhY2Vob2xkZXIiLCJ0eXBlIiwicmVxdWlyZWQiLCJUZXh0YXJlYSIsIkJ1dHRvbiIsInZhcmlhbnQiLCJhY3Rpb25zIiwiX3JlYWN0IiwiX3JlYWN0U2VsZWN0IiwidGVhY2hlciIsIm9yZ3MiLCJkZWZhdWx0T3B0aW9uIiwiaW5zdGl0dXRpb24iLCJzZWxlY3QiLCJvd25lciIsIm9yZ2FuaXphdGlvbklkIiwib3B0aW9ucyIsIm1hcCIsIml0ZW0iLCJvd24iLCJodG1sRm9yIiwiUmVhY3RTZWxlY3QiLCJzZXRSZWFkeSIsInVzZUVmZmVjdCIsImNsZWFuVXAiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2V2ZW50cy50cyIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3Mvb3duZXJzaGlwLnRzeCIsIi90cy92aWV3cy91c2UtbW9kZWwudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUosTUFBQSxDQUFBTSxZQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNuQjtZQUNBLElBQUlHLE1BQU1BLENBQUE7Y0FDVCxPQUFPTixNQUFBLENBQUFPLElBQUk7WUFDWjtZQUVBQyxJQUFJQSxDQUFBO2NBQ0gsSUFBSSxDQUFDLENBQUFMLEtBQU0sQ0FBQ00sSUFBSSxDQUFDLElBQUksQ0FBQ0MsR0FBRyxDQUFDQyxFQUFFLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN4QztZQUVBQyxJQUFJQSxDQUFBO2NBQ0gsSUFBSSxDQUFDLENBQUFWLEtBQU0sQ0FBQ1csS0FBSyxFQUFFO1lBQ3BCOztVQUNBQyxPQUFBLENBQUFkLFVBQUEsR0FBQUEsVUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN0QkQsSUFBQWUsS0FBQSxHQUFBbEIsT0FBQTtVQUNBLElBQUFtQixNQUFBLEdBQUFuQixPQUFBO1VBQ0EsSUFBQW9CLFFBQUEsR0FBQXBCLE9BQUE7VUFDQSxJQUFBcUIsV0FBQSxHQUFBckIsT0FBQTtVQUNBLElBQUFzQixNQUFBLEdBQUF0QixPQUFBO1VBQ0EsSUFBQXVCLGVBQUEsR0FBQXZCLE9BQUE7VUFVTSxNQUFPTyxZQUFhLFNBQVFZLE1BQUEsQ0FBQUssYUFBMkI7WUFDNUQsQ0FBQUMsS0FBTTtZQUNOLElBQUlBLEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNO1lBQ25CO1lBRUEsSUFBSUMsSUFBSUEsQ0FBQTtjQUNQLE9BQU9OLFFBQUEsQ0FBQU8sY0FBYyxDQUFDRCxJQUFJO1lBQzNCO1lBRUEsQ0FBQUUsS0FBTSxHQUErQixJQUFJTixNQUFBLENBQUFPLFlBQVksQ0FBQ04sZUFBQSxDQUFBTyxNQUFNLENBQUNDLFNBQVMsQ0FBQztZQUN2RSxJQUFJSCxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsS0FBTSxFQUFFSSxLQUFLO1lBQzFCO1lBRUEsSUFBSUMsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sS0FBSyxDQUFDQSxLQUFLLElBQUksSUFBSSxDQUFDLENBQUFMLEtBQU0sQ0FBQ0ssS0FBSztZQUN4QztZQUNBQyxZQUFBO2NBQ0MsS0FBSyxFQUFFO2NBQ1AsSUFBSSxDQUFDLENBQUFOLEtBQU0sQ0FBQ08sRUFBRSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUNDLFlBQVksQ0FBQztZQUM1QztZQUVBcEIsS0FBS0EsQ0FBQTtjQUNKLElBQUksQ0FBQyxDQUFBUyxLQUFNLEdBQUdZLFNBQVM7Y0FDdkIsS0FBSyxDQUFDSixLQUFLLEdBQUcsS0FBSztZQUNwQjtZQUVBSyxhQUFhQSxDQUFBO2NBQ1osTUFBTUMsUUFBUSxHQUFHLElBQUksQ0FBQ0QsYUFBYSxDQUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDO2NBQzlDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQVosS0FBTSxDQUFDSyxLQUFLLEVBQUU7Z0JBQ3ZCLElBQUksQ0FBQyxDQUFBTCxLQUFNLENBQUNPLEVBQUUsQ0FBQyxRQUFRLEVBQUVJLFFBQVEsQ0FBQztnQkFDbEM7O2NBRUQsSUFBSSxDQUFDLENBQUFYLEtBQU0sQ0FBQ2EsR0FBRyxDQUFDLFFBQVEsRUFBRUYsUUFBUSxDQUFDO2NBQ25DbEIsV0FBQSxDQUFBcUIsWUFBWSxDQUFDQyxPQUFPLEdBQUcsS0FBSztjQUM1QkMsVUFBVSxDQUFDQyxVQUFVLENBQUMsTUFBSztnQkFDMUJ4QixXQUFBLENBQUFxQixZQUFZLENBQUNJLFVBQVUsR0FBRyxDQUN6QixDQUFDLElBQUksQ0FBQ2xCLEtBQUssQ0FBQ2tCLFVBQVUsQ0FBQ0MsVUFBVSxFQUFFLGtCQUFrQixDQUFDLEVBQ3RELENBQUMsSUFBSSxDQUFDbkIsS0FBSyxDQUFDa0IsVUFBVSxDQUFDRSxVQUFVLEVBQUUsRUFBRSxDQUFDLENBQ3RDO2NBQ0YsQ0FBQyxFQUFFLEdBQUcsQ0FBQztZQUNSO1lBRUEsTUFBTXJDLElBQUlBLENBQUE7Y0FDVCxJQUFJO2dCQUNILElBQUksQ0FBQzJCLGFBQWEsRUFBRTtnQkFDcEIsS0FBSyxDQUFDTCxLQUFLLEdBQUcsS0FBSztnQkFFbkIsSUFBSSxDQUFDLENBQUFSLEtBQU0sR0FBRyxJQUFJUCxLQUFBLENBQUErQixTQUFTLENBQUMsRUFBRSxDQUFDO2VBQy9CLENBQUMsT0FBT0MsQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUNDLEtBQUssQ0FBQ0YsQ0FBQyxDQUFDO2VBQ2hCLFNBQVM7Z0JBQ1QsS0FBSyxDQUFDakIsS0FBSyxHQUFHLElBQUk7O1lBRXBCO1lBRUEsTUFBTW9CLE1BQU1BLENBQUNDLEVBQUU7Y0FDZCxJQUFJLENBQUMsQ0FBQTdCLEtBQU0sQ0FBQ3NCLFVBQVUsQ0FBQ1EsTUFBTSxDQUFDRCxFQUFFLENBQUM7Y0FDakMsSUFBSSxDQUFDRSxPQUFPLENBQUMsUUFBUSxDQUFDO1lBQ3ZCO1lBRUEsTUFBTUMsSUFBSUEsQ0FBQ0MsTUFBTTtjQUNoQixJQUFJO2dCQUNILElBQUksQ0FBQ0MsUUFBUSxHQUFHLElBQUk7Z0JBQ3BCLE1BQU07a0JBQUVDLE1BQU07a0JBQUVDO2dCQUFJLENBQUUsR0FBRyxNQUFNLElBQUksQ0FBQ3BDLEtBQUssQ0FBQ2dDLElBQUksQ0FBQztrQkFBRSxHQUFHQztnQkFBTSxDQUFFLENBQUM7Z0JBQzdELElBQUksQ0FBQ0UsTUFBTSxFQUFFLE1BQU0sSUFBSUUsS0FBSyxDQUFDLDRCQUE0QixDQUFDO2dCQUMxRCxPQUFPRCxJQUFJO2VBQ1gsQ0FBQyxPQUFPWCxDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDLENBQUMsRUFBRUYsQ0FBQyxDQUFDO2VBQ25CLFNBQVM7Z0JBQ1QsSUFBSSxDQUFDUyxRQUFRLEdBQUcsS0FBSzs7WUFFdkI7O1VBQ0ExQyxPQUFBLENBQUFWLFlBQUEsR0FBQUEsWUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN6RkQsSUFBQXdELEtBQUEsR0FBQS9ELE9BQUE7VUFTTyxNQUFNZ0UsYUFBYSxHQUFBL0MsT0FBQSxDQUFBK0MsYUFBQSxHQUFHRCxLQUFLLENBQUNFLGFBQWEsQ0FBQyxFQUF5QixDQUFDO1VBQ3BFLE1BQU1DLGdCQUFnQixHQUFHQSxDQUFBLEtBQU1ILEtBQUssQ0FBQ0ksVUFBVSxDQUFDSCxhQUFhLENBQUM7VUFBQy9DLE9BQUEsQ0FBQWlELGdCQUFBLEdBQUFBLGdCQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1Z0RSxJQUFBSCxLQUFBLEdBQUEvRCxPQUFBO1VBQ0EsSUFBQW9FLE1BQUEsR0FBQXBFLE9BQUE7VUFDQSxJQUFBcUUsUUFBQSxHQUFBckUsT0FBQTtVQUNBLElBQUFzRSxNQUFBLEdBQUF0RSxPQUFBO1VBRU0sU0FBVXVFLE9BQU9BLENBQUN0QyxLQUFLLEVBQUU1QixLQUFLLEVBQUV1QixLQUFLO1lBQzFDLE1BQU00QyxhQUFhLEdBQUc7Y0FBRUMsSUFBSSxFQUFFcEUsS0FBSyxFQUFFb0IsS0FBSyxFQUFFZ0QsSUFBSSxJQUFJLEVBQUU7Y0FBRUMsV0FBVyxFQUFFckUsS0FBSyxFQUFFb0IsS0FBSyxFQUFFaUQsV0FBVyxJQUFJO1lBQUUsQ0FBRTtZQUN0RyxNQUFNLENBQUNoQixNQUFNLEVBQUVpQixTQUFTLENBQUMsR0FBR1osS0FBSyxDQUFDYSxRQUFRLENBQUNKLGFBQWEsQ0FBQztZQUN6RCxNQUFNLENBQUNiLFFBQVEsRUFBRWtCLFdBQVcsQ0FBQyxHQUFHZCxLQUFLLENBQUNhLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDckQsTUFBTSxDQUFDeEIsS0FBSyxFQUFFMEIsUUFBUSxDQUFDLEdBQUdmLEtBQUssQ0FBQ2EsUUFBUSxDQUFDLEVBQUUsQ0FBQztZQUM1QyxJQUFBTixNQUFBLENBQUFTLFNBQVMsRUFBQyxDQUFDMUUsS0FBSyxDQUFDLEVBQUUsTUFBSztjQUN2QixJQUFJLENBQUNBLEtBQUssQ0FBQzRCLEtBQUssRUFBRTtnQkFDakIwQyxTQUFTLENBQUNILGFBQWEsQ0FBQzs7WUFFMUIsQ0FBQyxDQUFDO1lBQ0YsSUFBSSxDQUFDdkMsS0FBSyxFQUFFLE9BQU8sRUFBRTtZQUNyQixNQUFNO2NBQUVSO1lBQUssQ0FBRSxHQUFHcEIsS0FBSztZQUV2QixNQUFNa0MsUUFBUSxHQUFHQSxDQUFDO2NBQUV5QyxhQUFhLEVBQUVDO1lBQU0sQ0FBRSxLQUFJO2NBQzlDLE1BQU1DLFlBQVksR0FBRztnQkFBRSxHQUFHeEI7Y0FBTSxDQUFFO2NBQ2xDd0IsWUFBWSxDQUFDRCxNQUFNLENBQUNSLElBQUksQ0FBQyxHQUFHUSxNQUFNLENBQUNqRCxLQUFLO2NBQ3hDMkMsU0FBUyxDQUFDTyxZQUFZLENBQUM7Y0FDdkJKLFFBQVEsQ0FBQyxFQUFFLENBQUM7WUFDYixDQUFDO1lBRUQsTUFBTUssUUFBUSxHQUFHLE1BQU9DLEtBQUssSUFBbUI7Y0FDL0NBLEtBQUssQ0FBQ0MsY0FBYyxFQUFFO2NBQ3RCRCxLQUFLLENBQUNFLGVBQWUsRUFBRTtjQUN2QlQsV0FBVyxDQUFDLElBQUksQ0FBQztjQUNqQixJQUFJO2dCQUNILE1BQU1wRCxLQUFLLENBQUM4RCxPQUFPLENBQUM3QixNQUFNLENBQUM7Z0JBQzNCVSxNQUFBLENBQUFvQixLQUFLLENBQUNDLE9BQU8sQ0FBQzdELEtBQUssQ0FBQzhELE1BQU0sQ0FBQ0QsT0FBTyxDQUFDO2dCQUNuQ3BCLFFBQUEsQ0FBQXNCLE9BQU8sQ0FBQ0MsWUFBWSxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsb0JBQW9CbkUsS0FBSyxDQUFDNkIsRUFBRSxFQUFFLENBQUM7ZUFDOUQsQ0FBQyxPQUFPSixDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDRixDQUFDLENBQUM7Z0JBQ2hCNEIsUUFBUSxDQUFDbEQsS0FBSyxDQUFDaUUsTUFBTSxDQUFDQyxPQUFPLENBQUM7ZUFDOUIsU0FBUztnQkFDVGpCLFdBQVcsQ0FBQyxLQUFLLENBQUM7O1lBRXBCLENBQUM7WUFFRCxPQUFPO2NBQ05uQixNQUFNO2NBQ05DLFFBQVE7Y0FDUlAsS0FBSztjQUNMeUIsV0FBVztjQUNYdEMsUUFBUTtjQUNSNEMsUUFBUTtjQUNSUjthQUNBO1VBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbERBLElBQUFaLEtBQUEsR0FBQS9ELE9BQUE7VUFDQSxJQUFBK0YsS0FBQSxHQUFBL0YsT0FBQTtVQUVBLElBQUFnRyxXQUFBLEdBQUFoRyxPQUFBO1VBQ0EsSUFBQWlHLEdBQUEsR0FBQWpHLE9BQUE7VUFDQSxJQUFBa0csUUFBQSxHQUFBbEcsT0FBQTtVQUVBLElBQUFtRyxTQUFBLEdBQUFuRyxPQUFBO1VBQ0EsSUFBQW9HLE9BQUEsR0FBQXBHLE9BQUE7VUFDQSxJQUFBcUcsVUFBQSxHQUFBckcsT0FBQTtVQUVNLFNBQVVTLElBQUlBLENBQUM7WUFBRUo7VUFBSyxDQUFFO1lBQzdCLE1BQU07Y0FBRTRCLEtBQUs7Y0FBRUw7WUFBSyxDQUFFLEdBQUcsSUFBQXVFLFNBQUEsQ0FBQUcsUUFBUSxFQUFDakcsS0FBSyxDQUFDO1lBQ3hDLE1BQU07Y0FBRXNELFFBQVE7Y0FBRUQsTUFBTTtjQUFFbkIsUUFBUTtjQUFFNEMsUUFBUTtjQUFFUixTQUFTO2NBQUV2QjtZQUFLLENBQUUsR0FBRyxJQUFBZ0QsT0FBQSxDQUFBN0IsT0FBTyxFQUFDdEMsS0FBSyxFQUFFNUIsS0FBSyxFQUFFdUIsS0FBSyxDQUFDO1lBRS9GLElBQUksQ0FBQ0ssS0FBSyxFQUFFLE9BQU8sSUFBSTtZQUV2QixNQUFNc0UsUUFBUSxHQUFHO2NBQUVBLFFBQVEsRUFBRTVDLFFBQVEsSUFBSUQsTUFBTSxDQUFDZSxJQUFJLEtBQUs7WUFBRSxDQUFFO1lBQzdELE1BQU0rQixZQUFZLEdBQUc7Y0FBRTVFLEtBQUs7Y0FBRXZCO1lBQUssQ0FBRTtZQUVyQyxPQUNDMEQsS0FBQSxDQUFBMEMsYUFBQSxDQUFDUCxRQUFBLENBQUFsQyxhQUFhLENBQUMwQyxRQUFRO2NBQUMxRSxLQUFLLEVBQUV3RTtZQUFZLEdBQzFDekMsS0FBQSxDQUFBMEMsYUFBQSxDQUFDUixHQUFBLENBQUFVLGFBQWE7Y0FBQ0MsU0FBUyxFQUFDLHFCQUFxQjtjQUFDakQsUUFBUSxFQUFFQTtZQUFRLEdBQ2hFSSxLQUFBLENBQUEwQyxhQUFBO2NBQVFHLFNBQVMsRUFBQztZQUFjLEdBQy9CN0MsS0FBQSxDQUFBMEMsYUFBQSxhQUFLN0UsS0FBSyxDQUFDOEQsTUFBTSxDQUFDbUIsS0FBSyxDQUFNLENBQ3JCLEVBQ1Q5QyxLQUFBLENBQUEwQyxhQUFBLENBQUNSLEdBQUEsQ0FBQWEsYUFBYTtjQUFDMUQsS0FBSyxFQUFFQSxLQUFLO2NBQUV4QixLQUFLLEVBQUVBLEtBQUssQ0FBQ2lFO1lBQU0sRUFBSSxFQUNwRDlCLEtBQUEsQ0FBQTBDLGFBQUEsQ0FBQ1YsS0FBQSxDQUFBZ0IsSUFBSTtjQUFDNUIsUUFBUSxFQUFFQSxRQUFRO2NBQUV5QixTQUFTLEVBQUM7WUFBaUIsR0FDcEQ3QyxLQUFBLENBQUEwQyxhQUFBLENBQUNKLFVBQUEsQ0FBQVcsY0FBYztjQUFDckMsU0FBUyxFQUFFQSxTQUFTO2NBQUVqQixNQUFNLEVBQUVBO1lBQU0sRUFBSSxFQUN4REssS0FBQSxDQUFBMEMsYUFBQSxDQUFDVixLQUFBLENBQUFrQixLQUFLO2NBQ0xDLEtBQUssRUFBRXRGLEtBQUssQ0FBQzhELE1BQU0sQ0FBQ2pCLElBQUksQ0FBQ3lDLEtBQUs7Y0FDOUJDLFdBQVcsRUFBRXZGLEtBQUssQ0FBQzhELE1BQU0sQ0FBQ2pCLElBQUksQ0FBQzBDLFdBQVc7Y0FDMUNuRixLQUFLLEVBQUUwQixNQUFNLENBQUNlLElBQUk7Y0FDbEJBLElBQUksRUFBQyxNQUFNO2NBQ1gyQyxJQUFJLEVBQUMsTUFBTTtjQUNYN0UsUUFBUSxFQUFFQSxRQUFRO2NBQ2xCOEUsUUFBUTtZQUFBLEVBQ1AsRUFDRnRELEtBQUEsQ0FBQTBDLGFBQUEsQ0FBQ1YsS0FBQSxDQUFBdUIsUUFBUTtjQUNSSixLQUFLLEVBQUV0RixLQUFLLENBQUM4RCxNQUFNLENBQUNoQixXQUFXLENBQUN3QyxLQUFLO2NBQ3JDekMsSUFBSSxFQUFDLGFBQWE7Y0FDbEJ6QyxLQUFLLEVBQUUwQixNQUFNLENBQUNnQixXQUFXO2NBQ3pCeUMsV0FBVyxFQUFFdkYsS0FBSyxDQUFDOEQsTUFBTSxDQUFDaEIsV0FBVyxDQUFDeUMsV0FBVztjQUNqRDVFLFFBQVEsRUFBRUE7WUFBUSxFQUNqQixFQUNGd0IsS0FBQSxDQUFBMEMsYUFBQTtjQUFLRyxTQUFTLEVBQUM7WUFBYyxHQUM1QjdDLEtBQUEsQ0FBQTBDLGFBQUEsQ0FBQ1QsV0FBQSxDQUFBdUIsTUFBTTtjQUFDNUQsUUFBUSxFQUFFQSxRQUFRO2NBQUEsR0FBTTRDLFFBQVE7Y0FBRWlCLE9BQU8sRUFBQyxTQUFTO2NBQUNKLElBQUksRUFBQztZQUFRLEdBQ3ZFeEYsS0FBSyxDQUFDOEQsTUFBTSxDQUFDK0IsT0FBTyxDQUFDaEUsSUFBSSxDQUNsQixDQUNKLENBQ0EsQ0FDUSxDQUNRO1VBRTNCOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3REQSxJQUFBaUUsTUFBQSxHQUFBMUgsT0FBQTtVQUNBLElBQUEySCxZQUFBLEdBQUEzSCxPQUFBO1VBQ0EsSUFBQWtHLFFBQUEsR0FBQWxHLE9BQUE7VUFFTSxTQUFVZ0gsY0FBY0EsQ0FBQztZQUFFckMsU0FBUztZQUFFakI7VUFBTSxDQUFFO1lBQ25ELE1BQU07Y0FBRXJELEtBQUs7Y0FBRXVCO1lBQUssQ0FBRSxHQUFHLElBQUFzRSxRQUFBLENBQUFoQyxnQkFBZ0IsR0FBRTtZQUUzQyxJQUFJLENBQUM3RCxLQUFLLENBQUNxQixJQUFJLENBQUNrRyxPQUFPLEVBQUVDLElBQUksRUFBRSxPQUFPLElBQUk7WUFFMUMsSUFBSUMsYUFBYSxHQUFHO2NBQUU5RixLQUFLLEVBQUUsRUFBRTtjQUFFa0YsS0FBSyxFQUFFdEYsS0FBSyxDQUFDbUcsV0FBVyxDQUFDQztZQUFNLENBQUU7WUFFbEUsTUFBTXpGLFFBQVEsR0FBR0EsQ0FBQztjQUFFeUM7WUFBYSxDQUFFLEtBQUk7Y0FDdEMsSUFBSUEsYUFBYSxDQUFDaEQsS0FBSyxLQUFLM0IsS0FBSyxDQUFDcUIsSUFBSSxDQUFDNEIsRUFBRSxFQUFFO2dCQUMxQ3FCLFNBQVMsQ0FBQ2pCLE1BQU0sSUFBRztrQkFDbEIsT0FBTztvQkFBRSxHQUFHQSxNQUFNO29CQUFFdUUsS0FBSyxFQUFFNUgsS0FBSyxDQUFDcUIsSUFBSSxDQUFDNEI7a0JBQUUsQ0FBRTtnQkFDM0MsQ0FBQyxDQUFDO2dCQUNGOztjQUdEcUIsU0FBUyxDQUFDakIsTUFBTSxJQUFHO2dCQUNsQixPQUFPO2tCQUFFLEdBQUdBLE1BQU07a0JBQUV1RSxLQUFLLEVBQUVqRCxhQUFhLENBQUNoRCxLQUFLO2tCQUFFa0csY0FBYyxFQUFFbEQsYUFBYSxDQUFDaEQ7Z0JBQUssQ0FBRTtjQUN0RixDQUFDLENBQUM7WUFDSCxDQUFDO1lBRUQsTUFBTW1HLE9BQU8sR0FBRyxDQUNmLEdBQUc5SCxLQUFLLENBQUNxQixJQUFJLENBQUNrRyxPQUFPLENBQUNDLElBQUksQ0FBQ08sR0FBRyxDQUFDQyxJQUFJLElBQUc7Y0FDckMsT0FBTztnQkFBRXJHLEtBQUssRUFBRXFHLElBQUksQ0FBQy9FLEVBQUU7Z0JBQUU0RCxLQUFLLEVBQUVtQixJQUFJLENBQUM1RDtjQUFJLENBQUU7WUFDNUMsQ0FBQyxDQUFDLEVBQ0Y7Y0FBRXpDLEtBQUssRUFBRTNCLEtBQUssQ0FBQ3FCLElBQUksQ0FBQzRCLEVBQUU7Y0FBRTRELEtBQUssRUFBRXRGLEtBQUssQ0FBQ21HLFdBQVcsQ0FBQ087WUFBRyxDQUFFLENBQ3REO1lBQ0QsT0FDQ1osTUFBQSxDQUFBNUIsT0FBQSxDQUFBVyxhQUFBLGNBQ0NpQixNQUFBLENBQUE1QixPQUFBLENBQUFXLGFBQUE7Y0FBTzhCLE9BQU8sRUFBQztZQUFFLEdBQUUzRyxLQUFLLENBQUNtRyxXQUFXLENBQUNiLEtBQUssRSxLQUFXLEVBQ3JEUSxNQUFBLENBQUE1QixPQUFBLENBQUFXLGFBQUEsQ0FBQ2tCLFlBQUEsQ0FBQWEsV0FBVztjQUNYeEcsS0FBSyxFQUFFMEIsTUFBTSxDQUFDdUUsS0FBSztjQUNuQkgsYUFBYSxFQUFFQSxhQUFhO2NBQzVCckQsSUFBSSxFQUFDLE9BQU87Y0FDWjBELE9BQU8sRUFBRUEsT0FBTztjQUNoQjVGLFFBQVEsRUFBRUE7WUFBUSxFQUNqQixDQUNHO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDekNBLElBQUF3QixLQUFBLEdBQUEvRCxPQUFBO1VBRU0sU0FBVXNHLFFBQVFBLENBQUNqRyxLQUFLO1lBQzdCLE1BQU0sQ0FBQzRCLEtBQUssRUFBRXdHLFFBQVEsQ0FBQyxHQUFHMUUsS0FBSyxDQUFDYSxRQUFRLENBQUN2RSxLQUFLLENBQUM0QixLQUFLLENBQUM7WUFFckQ4QixLQUFLLENBQUMyRSxTQUFTLENBQUMsTUFBSztjQUNwQixNQUFNbkcsUUFBUSxHQUFHQSxDQUFBLEtBQUs7Z0JBQ3JCa0csUUFBUSxDQUFDcEksS0FBSyxDQUFDNEIsS0FBSyxDQUFDO2NBQ3RCLENBQUM7Y0FDRDVCLEtBQUssQ0FBQzhCLEVBQUUsQ0FBQyxRQUFRLEVBQUVJLFFBQVEsQ0FBQztjQUM1QixNQUFNb0csT0FBTyxHQUFHQSxDQUFBLEtBQU10SSxLQUFLLENBQUNvQyxHQUFHLENBQUMsUUFBUSxFQUFFRixRQUFRLENBQUM7Y0FDbkQsT0FBT29HLE9BQU87WUFDZixDQUFDLENBQUM7WUFDRixPQUFPO2NBQ04xRyxLQUFLO2NBQ0w1QixLQUFLO2NBQ0x1QixLQUFLLEVBQUV2QixLQUFLLEVBQUV1QjthQUNkO1VBQ0YifQ==