System.register(["@beyond-js/widgets@1.1.1/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.3/page", "@aimpact/ailearn-sdk@1.0.0/entities/classrooms", "@aimpact/reactive@0.0.1/model", "@aimpact/chat-sdk@1.4.1/session", "@beyond-js/kernel@0.1.9/texts", "react@18.2.0", "pragmate-ui@1.0.0-beta.7/toast", "@beyond-js/kernel@0.1.9/routing", "@beyond-js/react-18-widgets@1.1.3/hooks", "pragmate-ui@1.0.0-beta.7/form", "pragmate-ui@1.0.0-beta.7/components", "@aimpact/ailearn-app@0.3.1/components/ui", "pragmate-ui@1.0.0-beta.7/form/react-select"], function (_export, _context2) {
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
    }, function (_aimpactAilearnSdk100EntitiesClassrooms) {
      dependency_4 = _aimpactAilearnSdk100EntitiesClassrooms;
    }, function (_aimpactReactive001Model) {
      dependency_5 = _aimpactReactive001Model;
    }, function (_aimpactChatSdk141Session) {
      dependency_6 = _aimpactChatSdk141Session;
    }, function (_beyondJsKernel019Texts) {
      dependency_7 = _beyondJsKernel019Texts;
    }, function (_react) {
      dependency_8 = _react;
    }, function (_pragmateUi100Beta7Toast) {
      dependency_9 = _pragmateUi100Beta7Toast;
    }, function (_beyondJsKernel019Routing) {
      dependency_10 = _beyondJsKernel019Routing;
    }, function (_beyondJsReact18Widgets113Hooks) {
      dependency_11 = _beyondJsReact18Widgets113Hooks;
    }, function (_pragmateUi100Beta7Form) {
      dependency_12 = _pragmateUi100Beta7Form;
    }, function (_pragmateUi100Beta7Components) {
      dependency_13 = _pragmateUi100Beta7Components;
    }, function (_aimpactAilearnApp031ComponentsUi) {
      dependency_14 = _aimpactAilearnApp031ComponentsUi;
    }, function (_pragmateUi100Beta7FormReactSelect) {
      dependency_15 = _pragmateUi100Beta7FormReactSelect;
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
          "vspecifier": "@aimpact/ailearn-app@0.3.1/classrooms/management",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/entities/classrooms', dependency_4], ['@aimpact/reactive/model', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['@beyond-js/kernel/texts', dependency_7], ['react', dependency_8], ['pragmate-ui/toast', dependency_9], ['@beyond-js/kernel/routing', dependency_10], ['@beyond-js/react-18-widgets/hooks', dependency_11], ['pragmate-ui/form', dependency_12], ['pragmate-ui/components', dependency_13], ['@aimpact/ailearn-app/components/ui', dependency_14], ['pragmate-ui/form/react-select', dependency_15]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-classrooms-management",
        "vspecifier": "@aimpact/ailearn-app@0.3.1/classrooms/management.widget",
        "is": "page",
        "route": "/classrooms/management",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.3.1/classrooms/management.widget');
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
        hash: 1402015886,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _classrooms = require("@aimpact/ailearn-sdk/entities/classrooms");
          var _model = require("@aimpact/reactive/model");
          var _session = require("@aimpact/chat-sdk/session");
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
            async load(id) {
              try {
                super.ready = false;
                if (id && this.#model && this.#model.id === id) return;
                const listener = () => this.triggerEvent();
                if (this.#model) {
                  this.#model.off('change', listener);
                  this.#model = undefined;
                }
                this.#model = new _classrooms.Classroom({
                  id
                });
                this.#model.on('change', listener);
                if (id) await this.#model.load();
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
        hash: 2413272433,
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
                setValues(store.model?.getProperties() || defaultValues);
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
                const r = await model.publish(values);
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
        hash: 643193622,
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
        hash: 724679060,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.OwnershipField = OwnershipField;
          var React = require("react");
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
            return React.createElement("div", null, React.createElement("label", {
              htmlFor: ""
            }, texts.institution.label, " *"), React.createElement(_reactSelect.ReactSelect, {
              value: values.owner,
              defaultOption: defaultOption,
              placeholder: texts.institution.select,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJxcyIsImdldCIsImhpZGUiLCJjbGVhciIsImV4cG9ydHMiLCJfY2xhc3Nyb29tcyIsIl9tb2RlbCIsIl9zZXNzaW9uIiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwidXNlciIsInNlc3Npb25XcmFwcGVyIiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ2YWx1ZSIsInJlYWR5IiwiY29uc3RydWN0b3IiLCJvbiIsInRyaWdnZXJFdmVudCIsInVuZGVmaW5lZCIsImlkIiwibGlzdGVuZXIiLCJvZmYiLCJDbGFzc3Jvb20iLCJlIiwiY29uc29sZSIsImVycm9yIiwiZGVsZXRlIiwiY2xhc3Nyb29tcyIsInJlbW92ZSIsInRyaWdnZXIiLCJSZWFjdCIsIk1vZHVsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlTW9kdWxlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfdG9hc3QiLCJfcm91dGluZyIsIl9ob29rcyIsInVzZUZvcm0iLCJkZWZhdWx0VmFsdWVzIiwibmFtZSIsImRlc2NyaXB0aW9uIiwidmFsdWVzIiwic2V0VmFsdWVzIiwidXNlU3RhdGUiLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwic2V0RXJyb3IiLCJ1c2VCaW5kZXIiLCJnZXRQcm9wZXJ0aWVzIiwib25DaGFuZ2UiLCJjdXJyZW50VGFyZ2V0IiwidGFyZ2V0IiwiY3VycmVudFZhbHVlIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiciIsInB1Ymxpc2giLCJ0b2FzdCIsInN1Y2Nlc3MiLCJjcmVhdGUiLCJyb3V0aW5nIiwicmVwbGFjZVN0YXRlIiwiZXJyb3JzIiwiZGVmYXVsdCIsIl9mb3JtIiwiX2NvbXBvbmVudHMiLCJfdWkiLCJfY29udGV4dCIsIl91c2VNb2RlbCIsIl9ldmVudHMiLCJfb3duZXJzaGlwIiwidXNlTW9kZWwiLCJkaXNhYmxlZCIsImNvbnRleHRWYWx1ZSIsImNyZWF0ZUVsZW1lbnQiLCJQcm92aWRlciIsIlBhZ2VDb250YWluZXIiLCJjbGFzc05hbWUiLCJ0aXRsZSIsIkVycm9yUmVuZGVyZXIiLCJGb3JtIiwiT3duZXJzaGlwRmllbGQiLCJJbnB1dCIsImxhYmVsIiwicGxhY2Vob2xkZXIiLCJ0eXBlIiwicmVxdWlyZWQiLCJCdXR0b24iLCJ2YXJpYW50IiwiYWN0aW9ucyIsInNhdmUiLCJfcmVhY3RTZWxlY3QiLCJ0ZWFjaGVyIiwib3JncyIsImRlZmF1bHRPcHRpb24iLCJpbnN0aXR1dGlvbiIsInNlbGVjdCIsIm93bmVyIiwib3JnYW5pemF0aW9uSWQiLCJvcHRpb25zIiwibWFwIiwiaXRlbSIsIm93biIsImh0bWxGb3IiLCJSZWFjdFNlbGVjdCIsInNldFJlYWR5IiwidXNlRWZmZWN0IiwiY2xlYW5VcCJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvZXZlbnRzLnRzIiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9vd25lcnNoaXAudHN4IiwiL3RzL3ZpZXdzL3VzZS1tb2RlbC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VB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