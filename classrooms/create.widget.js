System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.1.12/model", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/ailearn-app@0.0.46.dev-13/main-layout.widget", "@beyond-js/kernel@0.1.9/texts", "react@18.2.0", "pragmate-ui@0.1.1/toast", "@beyond-js/kernel@0.1.9/routing", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@0.1.1/form", "pragmate-ui@0.1.1/components", "@aimpact/ailearn-app@0.0.46.dev-13/components/ui", "pragmate-ui@0.1.1/form/react-select"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp0046Dev13MainLayoutWidget) {
      dependency_7 = _aimpactAilearnApp0046Dev13MainLayoutWidget;
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
    }, function (_aimpactAilearnApp0046Dev13ComponentsUi) {
      dependency_15 = _aimpactAilearnApp0046Dev13ComponentsUi;
    }, function (_pragmateUi011FormReactSelect) {
      dependency_16 = _pragmateUi011FormReactSelect;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.0.46.dev-13"], ["@aimpact/ailearn-app", "0.0.46.dev-13"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.46.dev-13/classrooms/create",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['@aimpact/ailearn-app/main-layout.widget', dependency_7], ['@beyond-js/kernel/texts', dependency_8], ['react', dependency_9], ['pragmate-ui/toast', dependency_10], ['@beyond-js/kernel/routing', dependency_11], ['@beyond-js/react-18-widgets/hooks', dependency_12], ['pragmate-ui/form', dependency_13], ['pragmate-ui/components', dependency_14], ['@aimpact/ailearn-app/components/ui', dependency_15], ['pragmate-ui/form/react-select', dependency_16]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-classrooms-create",
        "vspecifier": "@aimpact/ailearn-app@0.0.46.dev-13/classrooms/create.widget",
        "is": "page",
        "route": "/classrooms/create",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.46.dev-13/classrooms/create.widget');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJxcyIsImdldCIsImhpZGUiLCJjbGVhciIsImV4cG9ydHMiLCJfY29yZSIsIl9tb2RlbCIsIl9zZXNzaW9uIiwiX21haW5MYXlvdXQiLCJfdGV4dHMiLCJfYmV5b25kX2NvbnRleHQiLCJSZWFjdGl2ZU1vZGVsIiwibW9kZWwiLCJ1c2VyIiwic2Vzc2lvbldyYXBwZXIiLCJ0ZXh0cyIsIkN1cnJlbnRUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInZhbHVlIiwicmVhZHkiLCJjb25zdHJ1Y3RvciIsIm9uIiwidHJpZ2dlckV2ZW50IiwidW5kZWZpbmVkIiwic2V0QnJlYWRjcnVtYiIsIm9uQ2hhbmdlIiwiYmluZCIsIm9mZiIsIkxheW91dEJyb2tlciIsIm92ZXJsYXkiLCJnbG9iYWxUaGlzIiwic2V0VGltZW91dCIsImJyZWFkY3J1bWIiLCJjbGFzc3Jvb21zIiwibWFuYWdlbWVudCIsIkNsYXNzcm9vbSIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJkZWxldGUiLCJpZCIsInJlbW92ZSIsInRyaWdnZXIiLCJzYXZlIiwidmFsdWVzIiwiZmV0Y2hpbmciLCJzdGF0dXMiLCJkYXRhIiwiRXJyb3IiLCJSZWFjdCIsIk1vZHVsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlTW9kdWxlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfdG9hc3QiLCJfcm91dGluZyIsIl9ob29rcyIsInVzZUZvcm0iLCJkZWZhdWx0VmFsdWVzIiwibmFtZSIsImRlc2NyaXB0aW9uIiwic2V0VmFsdWVzIiwidXNlU3RhdGUiLCJzZXRGZXRjaGluZyIsInNldEVycm9yIiwidXNlQmluZGVyIiwiY3VycmVudFRhcmdldCIsInRhcmdldCIsImN1cnJlbnRWYWx1ZSIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsInB1Ymxpc2giLCJ0b2FzdCIsInN1Y2Nlc3MiLCJjcmVhdGUiLCJyb3V0aW5nIiwicmVwbGFjZVN0YXRlIiwiZXJyb3JzIiwiZGVmYXVsdCIsIl9mb3JtIiwiX2NvbXBvbmVudHMiLCJfdWkiLCJfY29udGV4dCIsIl91c2VNb2RlbCIsIl9ldmVudHMiLCJfb3duZXJzaGlwIiwidXNlTW9kZWwiLCJkaXNhYmxlZCIsImNvbnRleHRWYWx1ZSIsImNyZWF0ZUVsZW1lbnQiLCJQcm92aWRlciIsIlBhZ2VDb250YWluZXIiLCJjbGFzc05hbWUiLCJ0aXRsZSIsIkVycm9yUmVuZGVyZXIiLCJGb3JtIiwiT3duZXJzaGlwRmllbGQiLCJJbnB1dCIsImxhYmVsIiwicGxhY2Vob2xkZXIiLCJ0eXBlIiwicmVxdWlyZWQiLCJUZXh0YXJlYSIsIkJ1dHRvbiIsInZhcmlhbnQiLCJhY3Rpb25zIiwiX3JlYWN0IiwiX3JlYWN0U2VsZWN0IiwidGVhY2hlciIsIm9yZ3MiLCJkZWZhdWx0T3B0aW9uIiwic2Nob29scyIsInNlbGVjdCIsIm93bmVyIiwib3JnYW5pemF0aW9uSWQiLCJvcHRpb25zIiwibWFwIiwiaXRlbSIsIm93biIsImh0bWxGb3IiLCJSZWFjdFNlbGVjdCIsInNldFJlYWR5IiwidXNlRWZmZWN0IiwiY2xlYW5VcCJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvZXZlbnRzLnRzIiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9vd25lcnNoaXAudHN4IiwiL3RzL3ZpZXdzL3VzZS1tb2RlbC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7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