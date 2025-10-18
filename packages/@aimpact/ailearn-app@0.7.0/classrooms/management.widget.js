System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.14/bundle", "@beyond-js/kernel@0.1.14/styles", "@beyond-js/react-18-widgets@1.1.8/page", "@aimpact/ailearn-app@0.7.0/main-layout.widget", "@aimpact/ailearn-sdk@1.2.0/entities/classrooms", "@beyond-js/reactive@2.1.1/model", "@aimpact/chat-sdk@1.5.5/session", "@beyond-js/kernel@0.1.14/texts", "@aimpact/ailearn-app@0.7.0/i18n.ts", "react@18.3.1", "pragmate-ui@1.0.8/toast", "@beyond-js/kernel@0.1.14/routing", "@beyond-js/react-18-widgets@1.1.8/hooks", "pragmate-ui@1.0.8/form", "pragmate-ui@1.0.8/components", "@aimpact/ailearn-app@0.7.0/components/ui", "pragmate-ui@1.0.8/form/react-select"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, bimport, __Bundle, __pkg, ims, Controller, __beyond_pkg, hmr;
  _export("Controller", void 0);
  return {
    setters: [function (_beyondJsWidgets112Render) {
      dependency_0 = _beyondJsWidgets112Render;
    }, function (_beyondJsKernel0114Bundle) {
      dependency_1 = _beyondJsKernel0114Bundle;
    }, function (_beyondJsKernel0114Styles) {
      dependency_2 = _beyondJsKernel0114Styles;
    }, function (_beyondJsReact18Widgets118Page) {
      dependency_3 = _beyondJsReact18Widgets118Page;
    }, function (_aimpactAilearnApp070MainLayoutWidget) {
      dependency_4 = _aimpactAilearnApp070MainLayoutWidget;
    }, function (_aimpactAilearnSdk120EntitiesClassrooms) {
      dependency_5 = _aimpactAilearnSdk120EntitiesClassrooms;
    }, function (_beyondJsReactive211Model) {
      dependency_6 = _beyondJsReactive211Model;
    }, function (_aimpactChatSdk155Session) {
      dependency_7 = _aimpactChatSdk155Session;
    }, function (_beyondJsKernel0114Texts) {
      dependency_8 = _beyondJsKernel0114Texts;
    }, function (_aimpactAilearnApp070I18nTs) {
      dependency_9 = _aimpactAilearnApp070I18nTs;
    }, function (_react) {
      dependency_10 = _react;
    }, function (_pragmateUi108Toast) {
      dependency_11 = _pragmateUi108Toast;
    }, function (_beyondJsKernel0114Routing) {
      dependency_12 = _beyondJsKernel0114Routing;
    }, function (_beyondJsReact18Widgets118Hooks) {
      dependency_13 = _beyondJsReact18Widgets118Hooks;
    }, function (_pragmateUi108Form) {
      dependency_14 = _pragmateUi108Form;
    }, function (_pragmateUi108Components) {
      dependency_15 = _pragmateUi108Components;
    }, function (_aimpactAilearnApp070ComponentsUi) {
      dependency_16 = _aimpactAilearnApp070ComponentsUi;
    }, function (_pragmateUi108FormReactSelect) {
      dependency_17 = _pragmateUi108FormReactSelect;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.9"], ["@beyond-js/reactive", "2.1.1"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.14"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.8"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["@radix-ui/react-accordion", "1.2.12"], ["@radix-ui/react-collapsible", "1.1.12"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-select", "2.2.6"], ["@radix-ui/react-separator", "1.1.7"], ["@tiptap/extension-blockquote", "3.2.0"], ["@tiptap/extension-code-block", "3.2.0"], ["@tiptap/extension-horizontal-rule", "3.2.0"], ["@tiptap/extension-image", "3.6.2"], ["@tiptap/extension-task-item", "3.2.0"], ["@tiptap/extension-task-list", "3.2.0"], ["@tiptap/extension-underline", "3.2.0"], ["@tiptap/pm", "3.6.2"], ["@tiptap/react", "3.2.0"], ["@tiptap/starter-kit", "3.2.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-responsive-masonry", "2.7.1"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.4.0"], ["react-virtuoso", "4.14.0"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "12.0.2"], ["tippy.js", "6.3.7"], ["turndown", "7.2.0"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["yet-another-react-lightbox", "3.25.0"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/node", "20.11.0"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.7.0"], ["@aimpact/rvd", "0.7.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.7.0/classrooms/management",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/main-layout.widget', dependency_4], ['@aimpact/ailearn-sdk/entities/classrooms', dependency_5], ['@beyond-js/reactive/model', dependency_6], ['@aimpact/chat-sdk/session', dependency_7], ['@beyond-js/kernel/texts', dependency_8], ['@aimpact/ailearn-app/i18n.ts', dependency_9], ['react', dependency_10], ['pragmate-ui/toast', dependency_11], ['@beyond-js/kernel/routing', dependency_12], ['@beyond-js/react-18-widgets/hooks', dependency_13], ['pragmate-ui/form', dependency_14], ['pragmate-ui/components', dependency_15], ['@aimpact/ailearn-app/components/ui', dependency_16], ['pragmate-ui/form/react-select', dependency_17]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-classrooms-management",
        "vspecifier": "@aimpact/ailearn-app@0.7.0/classrooms/management.widget",
        "is": "page",
        "route": "/classrooms/management",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.7.0/classrooms/management.widget');
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
        hash: 4032340498,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
          var _classrooms = require("@aimpact/ailearn-sdk/entities/classrooms");
          var _model = require("@beyond-js/reactive/model");
          var _session = require("@aimpact/chat-sdk/session");
          var _texts = require("@beyond-js/kernel/texts");
          var _beyond_context = require("beyond_context");
          var _i18n = require("@aimpact/ailearn-app/i18n.ts");
          class StoreManager extends _model.ReactiveModel {
            #model;
            isStore = true;
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
            get globalTexts() {
              return _i18n.globalTexts.texts;
            }
            get ready() {
              return super.ready && this.#texts.ready;
            }
            constructor() {
              super();
              this.#texts.on('change', this.triggerEvent);
              this.validate();
            }
            clear() {
              this.#model = undefined;
              super.ready = false;
            }
            validate = () => {
              if (!_i18n.globalTexts.ready) {
                _i18n.globalTexts.on('change', this.validate);
                return;
              }
              _mainLayout.LayoutBroker.set({
                overlay: true,
                breadcrumb: [[this.globalTexts.entities.classrooms, '/classrooms/list'], [this.globalTexts.actions.management]]
              });
            };
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
        hash: 1322859304,
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
              variant: "floating",
              onChange: onChange,
              required: true
            }), React.createElement(_form.Textarea, {
              label: texts.create.description.label,
              name: "description",
              variant: "floating",
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
        hash: 312609125,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJxcyIsImdldCIsImhpZGUiLCJjbGVhciIsImV4cG9ydHMiLCJfbWFpbkxheW91dCIsIl9jbGFzc3Jvb21zIiwiX21vZGVsIiwiX3Nlc3Npb24iLCJfdGV4dHMiLCJfYmV5b25kX2NvbnRleHQiLCJfaTE4biIsIlJlYWN0aXZlTW9kZWwiLCJtb2RlbCIsImlzU3RvcmUiLCJ1c2VyIiwic2Vzc2lvbldyYXBwZXIiLCJ0ZXh0cyIsIkN1cnJlbnRUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInZhbHVlIiwiZ2xvYmFsVGV4dHMiLCJyZWFkeSIsImNvbnN0cnVjdG9yIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJ2YWxpZGF0ZSIsInVuZGVmaW5lZCIsIkxheW91dEJyb2tlciIsInNldCIsIm92ZXJsYXkiLCJicmVhZGNydW1iIiwiZW50aXRpZXMiLCJjbGFzc3Jvb21zIiwiYWN0aW9ucyIsIm1hbmFnZW1lbnQiLCJpZCIsImxpc3RlbmVyIiwib2ZmIiwiQ2xhc3Nyb29tIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsImRlbGV0ZSIsInJlbW92ZSIsInRyaWdnZXIiLCJSZWFjdCIsIk1vZHVsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlTW9kdWxlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfdG9hc3QiLCJfcm91dGluZyIsIl9ob29rcyIsInVzZUZvcm0iLCJkZWZhdWx0VmFsdWVzIiwibmFtZSIsImRlc2NyaXB0aW9uIiwidmFsdWVzIiwic2V0VmFsdWVzIiwidXNlU3RhdGUiLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwic2V0RXJyb3IiLCJ1c2VCaW5kZXIiLCJnZXRQcm9wZXJ0aWVzIiwib25DaGFuZ2UiLCJjdXJyZW50VGFyZ2V0IiwidGFyZ2V0IiwiY3VycmVudFZhbHVlIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiciIsInB1Ymxpc2giLCJ0b2FzdCIsInN1Y2Nlc3MiLCJjcmVhdGUiLCJyb3V0aW5nIiwicmVwbGFjZVN0YXRlIiwiZXJyb3JzIiwiZGVmYXVsdCIsIl9mb3JtIiwiX2NvbXBvbmVudHMiLCJfdWkiLCJfY29udGV4dCIsIl91c2VNb2RlbCIsIl9ldmVudHMiLCJfb3duZXJzaGlwIiwidXNlTW9kZWwiLCJkaXNhYmxlZCIsImNvbnRleHRWYWx1ZSIsImNyZWF0ZUVsZW1lbnQiLCJQcm92aWRlciIsIlBhZ2VDb250YWluZXIiLCJjbGFzc05hbWUiLCJ0aXRsZSIsIkVycm9yUmVuZGVyZXIiLCJGb3JtIiwiT3duZXJzaGlwRmllbGQiLCJJbnB1dCIsImxhYmVsIiwicGxhY2Vob2xkZXIiLCJ0eXBlIiwidmFyaWFudCIsInJlcXVpcmVkIiwiVGV4dGFyZWEiLCJCdXR0b24iLCJzYXZlIiwiX3JlYWN0U2VsZWN0IiwidGVhY2hlciIsIm9yZ3MiLCJkZWZhdWx0T3B0aW9uIiwiaW5zdGl0dXRpb24iLCJzZWxlY3QiLCJvd25lciIsIm9yZ2FuaXphdGlvbklkIiwib3B0aW9ucyIsIm1hcCIsIml0ZW0iLCJvd24iLCJodG1sRm9yIiwiUmVhY3RTZWxlY3QiLCJzZXRSZWFkeSIsInVzZUVmZmVjdCIsImNsZWFuVXAiXSwic291cmNlcyI6WyIvL3RzL2NvbnRyb2xsZXIudHMiLCIvL3RzL3N0b3JlLnRzIiwiLy90cy92aWV3cy9jb250ZXh0LnRzIiwiLy90cy92aWV3cy9ldmVudHMudHMiLCIvL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi8vdHMvdmlld3Mvb3duZXJzaGlwLnRzeCIsIi8vdHMvdmlld3MvdXNlLW1vZGVsLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJt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