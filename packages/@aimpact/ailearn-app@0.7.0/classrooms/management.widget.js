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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJxcyIsImdldCIsImhpZGUiLCJjbGVhciIsImV4cG9ydHMiLCJfbWFpbkxheW91dCIsIl9jbGFzc3Jvb21zIiwiX21vZGVsIiwiX3Nlc3Npb24iLCJfdGV4dHMiLCJfYmV5b25kX2NvbnRleHQiLCJfaTE4biIsIlJlYWN0aXZlTW9kZWwiLCJtb2RlbCIsImlzU3RvcmUiLCJ1c2VyIiwic2Vzc2lvbldyYXBwZXIiLCJ0ZXh0cyIsIkN1cnJlbnRUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInZhbHVlIiwiZ2xvYmFsVGV4dHMiLCJyZWFkeSIsImNvbnN0cnVjdG9yIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJ2YWxpZGF0ZSIsInVuZGVmaW5lZCIsIkxheW91dEJyb2tlciIsInNldCIsIm92ZXJsYXkiLCJicmVhZGNydW1iIiwiZW50aXRpZXMiLCJjbGFzc3Jvb21zIiwiYWN0aW9ucyIsIm1hbmFnZW1lbnQiLCJpZCIsImxpc3RlbmVyIiwib2ZmIiwiQ2xhc3Nyb29tIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsImRlbGV0ZSIsInJlbW92ZSIsInRyaWdnZXIiLCJSZWFjdCIsIk1vZHVsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlTW9kdWxlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfdG9hc3QiLCJfcm91dGluZyIsIl9ob29rcyIsInVzZUZvcm0iLCJkZWZhdWx0VmFsdWVzIiwibmFtZSIsImRlc2NyaXB0aW9uIiwidmFsdWVzIiwic2V0VmFsdWVzIiwidXNlU3RhdGUiLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwic2V0RXJyb3IiLCJ1c2VCaW5kZXIiLCJnZXRQcm9wZXJ0aWVzIiwib25DaGFuZ2UiLCJjdXJyZW50VGFyZ2V0IiwidGFyZ2V0IiwiY3VycmVudFZhbHVlIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiciIsInB1Ymxpc2giLCJ0b2FzdCIsInN1Y2Nlc3MiLCJjcmVhdGUiLCJyb3V0aW5nIiwicmVwbGFjZVN0YXRlIiwiZXJyb3JzIiwiZGVmYXVsdCIsIl9mb3JtIiwiX2NvbXBvbmVudHMiLCJfdWkiLCJfY29udGV4dCIsIl91c2VNb2RlbCIsIl9ldmVudHMiLCJfb3duZXJzaGlwIiwidXNlTW9kZWwiLCJkaXNhYmxlZCIsImNvbnRleHRWYWx1ZSIsImNyZWF0ZUVsZW1lbnQiLCJQcm92aWRlciIsIlBhZ2VDb250YWluZXIiLCJjbGFzc05hbWUiLCJ0aXRsZSIsIkVycm9yUmVuZGVyZXIiLCJGb3JtIiwiT3duZXJzaGlwRmllbGQiLCJJbnB1dCIsImxhYmVsIiwicGxhY2Vob2xkZXIiLCJ0eXBlIiwidmFyaWFudCIsInJlcXVpcmVkIiwiVGV4dGFyZWEiLCJCdXR0b24iLCJzYXZlIiwiX3JlYWN0U2VsZWN0IiwidGVhY2hlciIsIm9yZ3MiLCJkZWZhdWx0T3B0aW9uIiwiaW5zdGl0dXRpb24iLCJzZWxlY3QiLCJvd25lciIsIm9yZ2FuaXphdGlvbklkIiwib3B0aW9ucyIsIm1hcCIsIml0ZW0iLCJvd24iLCJodG1sRm9yIiwiUmVhY3RTZWxlY3QiLCJzZXRSZWFkeSIsInVzZUVmZmVjdCIsImNsZWFuVXAiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2V2ZW50cy50cyIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3Mvb3duZXJzaGlwLnRzeCIsIi90cy92aWV3cy91c2UtbW9kZWwudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdz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.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.14/bundle", "@beyond-js/kernel@0.1.14/styles", "@beyond-js/react-18-widgets@1.1.8/page", "@aimpact/ailearn-app@0.7.0/main-layout.widget", "@aimpact/ailearn-sdk@1.2.0/entities/classrooms", "@beyond-js/reactive@2.1.1/model", "@aimpact/chat-sdk@1.5.5/session", "@beyond-js/kernel@0.1.14/texts", "@aimpact/ailearn-app@0.7.0/i18n.ts", "react@18.3.1", "pragmate-ui@1.0.8/toast", "@beyond-js/kernel@0.1.14/routing", "@beyond-js/react-18-widgets@1.1.8/hooks", "pragmate-ui@1.0.8/form", "pragmate-ui@1.0.8/components", "@aimpact/ailearn-app@0.7.0/components/ui", "pragmate-ui@1.0.8/form/react-select"], function (_export, _context2) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJxcyIsImdldCIsImhpZGUiLCJjbGVhciIsImV4cG9ydHMiLCJfbWFpbkxheW91dCIsIl9jbGFzc3Jvb21zIiwiX21vZGVsIiwiX3Nlc3Npb24iLCJfdGV4dHMiLCJfYmV5b25kX2NvbnRleHQiLCJfaTE4biIsIlJlYWN0aXZlTW9kZWwiLCJtb2RlbCIsImlzU3RvcmUiLCJ1c2VyIiwic2Vzc2lvbldyYXBwZXIiLCJ0ZXh0cyIsIkN1cnJlbnRUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInZhbHVlIiwiZ2xvYmFsVGV4dHMiLCJyZWFkeSIsImNvbnN0cnVjdG9yIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJ2YWxpZGF0ZSIsInVuZGVmaW5lZCIsIkxheW91dEJyb2tlciIsInNldCIsIm92ZXJsYXkiLCJicmVhZGNydW1iIiwiZW50aXRpZXMiLCJjbGFzc3Jvb21zIiwiYWN0aW9ucyIsIm1hbmFnZW1lbnQiLCJpZCIsImxpc3RlbmVyIiwib2ZmIiwiQ2xhc3Nyb29tIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsImRlbGV0ZSIsInJlbW92ZSIsInRyaWdnZXIiLCJSZWFjdCIsIk1vZHVsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlTW9kdWxlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfdG9hc3QiLCJfcm91dGluZyIsIl9ob29rcyIsInVzZUZvcm0iLCJkZWZhdWx0VmFsdWVzIiwibmFtZSIsImRlc2NyaXB0aW9uIiwidmFsdWVzIiwic2V0VmFsdWVzIiwidXNlU3RhdGUiLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwic2V0RXJyb3IiLCJ1c2VCaW5kZXIiLCJnZXRQcm9wZXJ0aWVzIiwib25DaGFuZ2UiLCJjdXJyZW50VGFyZ2V0IiwidGFyZ2V0IiwiY3VycmVudFZhbHVlIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiciIsInB1Ymxpc2giLCJ0b2FzdCIsInN1Y2Nlc3MiLCJjcmVhdGUiLCJyb3V0aW5nIiwicmVwbGFjZVN0YXRlIiwiZXJyb3JzIiwiZGVmYXVsdCIsIl9mb3JtIiwiX2NvbXBvbmVudHMiLCJfdWkiLCJfY29udGV4dCIsIl91c2VNb2RlbCIsIl9ldmVudHMiLCJfb3duZXJzaGlwIiwidXNlTW9kZWwiLCJkaXNhYmxlZCIsImNvbnRleHRWYWx1ZSIsImNyZWF0ZUVsZW1lbnQiLCJQcm92aWRlciIsIlBhZ2VDb250YWluZXIiLCJjbGFzc05hbWUiLCJ0aXRsZSIsIkVycm9yUmVuZGVyZXIiLCJGb3JtIiwiT3duZXJzaGlwRmllbGQiLCJJbnB1dCIsImxhYmVsIiwicGxhY2Vob2xkZXIiLCJ0eXBlIiwidmFyaWFudCIsInJlcXVpcmVkIiwiVGV4dGFyZWEiLCJCdXR0b24iLCJzYXZlIiwiX3JlYWN0U2VsZWN0IiwidGVhY2hlciIsIm9yZ3MiLCJkZWZhdWx0T3B0aW9uIiwiaW5zdGl0dXRpb24iLCJzZWxlY3QiLCJvd25lciIsIm9yZ2FuaXphdGlvbklkIiwib3B0aW9ucyIsIm1hcCIsIml0ZW0iLCJvd24iLCJodG1sRm9yIiwiUmVhY3RTZWxlY3QiLCJzZXRSZWFkeSIsInVzZUVmZmVjdCIsImNsZWFuVXAiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2V2ZW50cy50cyIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3Mvb3duZXJzaGlwLnRzeCIsIi90cy92aWV3cy91c2UtbW9kZWwudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdz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