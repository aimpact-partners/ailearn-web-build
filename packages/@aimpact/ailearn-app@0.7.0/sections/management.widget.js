System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.14/bundle", "@beyond-js/kernel@0.1.14/styles", "@beyond-js/react-18-widgets@1.1.8/page", "@aimpact/ailearn-app@0.7.0/main-layout.widget", "@aimpact/ailearn-sdk@1.2.0/entities/sections", "@beyond-js/reactive@2.1.2/model", "@aimpact/chat-sdk@1.5.5/session", "@beyond-js/kernel@0.1.14/texts", "@aimpact/ailearn-app@0.7.0/i18n.ts", "react@18.3.1", "pragmate-ui@1.0.8/form", "pragmate-ui@1.0.8/components", "@aimpact/ailearn-app@0.7.0/components/ui", "pragmate-ui@1.0.8/form/react-select", "pragmate-ui@1.0.8/toast", "@beyond-js/kernel@0.1.14/routing", "@beyond-js/react-18-widgets@1.1.8/hooks"], function (_export, _context2) {
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
    }, function (_aimpactAilearnSdk120EntitiesSections) {
      dependency_5 = _aimpactAilearnSdk120EntitiesSections;
    }, function (_beyondJsReactive212Model) {
      dependency_6 = _beyondJsReactive212Model;
    }, function (_aimpactChatSdk155Session) {
      dependency_7 = _aimpactChatSdk155Session;
    }, function (_beyondJsKernel0114Texts) {
      dependency_8 = _beyondJsKernel0114Texts;
    }, function (_aimpactAilearnApp070I18nTs) {
      dependency_9 = _aimpactAilearnApp070I18nTs;
    }, function (_react) {
      dependency_10 = _react;
    }, function (_pragmateUi108Form) {
      dependency_11 = _pragmateUi108Form;
    }, function (_pragmateUi108Components) {
      dependency_12 = _pragmateUi108Components;
    }, function (_aimpactAilearnApp070ComponentsUi) {
      dependency_13 = _aimpactAilearnApp070ComponentsUi;
    }, function (_pragmateUi108FormReactSelect) {
      dependency_14 = _pragmateUi108FormReactSelect;
    }, function (_pragmateUi108Toast) {
      dependency_15 = _pragmateUi108Toast;
    }, function (_beyondJsKernel0114Routing) {
      dependency_16 = _beyondJsKernel0114Routing;
    }, function (_beyondJsReact18Widgets118Hooks) {
      dependency_17 = _beyondJsReact18Widgets118Hooks;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.9"], ["@beyond-js/reactive", "2.1.2"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.14"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.8"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["@radix-ui/react-accordion", "1.2.12"], ["@radix-ui/react-collapsible", "1.1.12"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-select", "2.2.6"], ["@radix-ui/react-separator", "1.1.7"], ["@tiptap/extension-blockquote", "3.2.0"], ["@tiptap/extension-code-block", "3.2.0"], ["@tiptap/extension-horizontal-rule", "3.2.0"], ["@tiptap/extension-image", "3.6.2"], ["@tiptap/extension-task-item", "3.2.0"], ["@tiptap/extension-task-list", "3.2.0"], ["@tiptap/extension-underline", "3.2.0"], ["@tiptap/pm", "3.6.2"], ["@tiptap/react", "3.2.0"], ["@tiptap/starter-kit", "3.2.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-responsive-masonry", "2.7.1"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.4.0"], ["react-virtuoso", "4.14.0"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "12.0.2"], ["tippy.js", "6.3.7"], ["turndown", "7.2.0"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["yet-another-react-lightbox", "3.25.0"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/node", "20.11.0"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.7.0"], ["@aimpact/rvd", "0.7.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.7.0/sections/management",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/main-layout.widget', dependency_4], ['@aimpact/ailearn-sdk/entities/sections', dependency_5], ['@beyond-js/reactive/model', dependency_6], ['@aimpact/chat-sdk/session', dependency_7], ['@beyond-js/kernel/texts', dependency_8], ['@aimpact/ailearn-app/i18n.ts', dependency_9], ['react', dependency_10], ['pragmate-ui/form', dependency_11], ['pragmate-ui/components', dependency_12], ['@aimpact/ailearn-app/components/ui', dependency_13], ['pragmate-ui/form/react-select', dependency_14], ['pragmate-ui/toast', dependency_15], ['@beyond-js/kernel/routing', dependency_16], ['@beyond-js/react-18-widgets/hooks', dependency_17]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-sections-management",
        "vspecifier": "@aimpact/ailearn-app@0.7.0/sections/management.widget",
        "is": "page",
        "route": "/kb/sections/management",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.7.0/sections/management.widget');
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
        hash: 761587967,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
          var _sections = require("@aimpact/ailearn-sdk/entities/sections");
          var _model = require("@beyond-js/reactive/model");
          var _session = require("@aimpact/chat-sdk/session");
          var _texts = require("@beyond-js/kernel/texts");
          var _beyond_context = require("beyond_context");
          var _i18n = require("@aimpact/ailearn-app/i18n.ts");
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
                breadcrumb: [[this.globalTexts.entities.kbSections, '/kb/sections/list'], [this.globalTexts.actions.management]]
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
                this.#model = new _sections.Section({
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
              // GroupItem handles deletion through its own methods
              // The model will be updated automatically through the change event
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

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 1087316893,
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
            } = (0, _useForm.useForm)(ready, store, texts);
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

      /********************************
      INTERNAL MODULE: ./views/use-form
      ********************************/

      ims.set('./views/use-form', {
        hash: 222959980,
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
            const [values, setValues] = React.useState(() => ({
              ...defaultValues,
              ...(store.model?.getProperties() || {})
            }));
            const [fetching, setFetching] = React.useState(false);
            const [error, setError] = React.useState('');
            (0, _hooks.useStore)(store);
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
                _routing.routing.replaceState({}, null, `/kb/sections/view/${model.id}`);
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

      /*********************************
      INTERNAL MODULE: ./views/use-model
      *********************************/

      ims.set('./views/use-model', {
        hash: 2084044009,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJxcyIsImdldCIsImhpZGUiLCJjbGVhciIsImV4cG9ydHMiLCJfbWFpbkxheW91dCIsIl9zZWN0aW9ucyIsIl9tb2RlbCIsIl9zZXNzaW9uIiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiX2kxOG4iLCJSZWFjdGl2ZU1vZGVsIiwibW9kZWwiLCJ1c2VyIiwic2Vzc2lvbldyYXBwZXIiLCJ0ZXh0cyIsIkN1cnJlbnRUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInZhbHVlIiwiZ2xvYmFsVGV4dHMiLCJyZWFkeSIsImNvbnN0cnVjdG9yIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJ2YWxpZGF0ZSIsInVuZGVmaW5lZCIsIkxheW91dEJyb2tlciIsInNldCIsIm92ZXJsYXkiLCJicmVhZGNydW1iIiwiZW50aXRpZXMiLCJrYlNlY3Rpb25zIiwiYWN0aW9ucyIsIm1hbmFnZW1lbnQiLCJpZCIsImxpc3RlbmVyIiwib2ZmIiwiU2VjdGlvbiIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJkZWxldGUiLCJ0cmlnZ2VyIiwiUmVhY3QiLCJNb2R1bGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZU1vZHVsZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2Zvcm0iLCJfY29tcG9uZW50cyIsIl91aSIsIl9jb250ZXh0IiwiX3VzZU1vZGVsIiwiX3VzZUZvcm0iLCJfb3duZXJzaGlwIiwidXNlTW9kZWwiLCJmZXRjaGluZyIsInZhbHVlcyIsIm9uQ2hhbmdlIiwib25TdWJtaXQiLCJzZXRWYWx1ZXMiLCJ1c2VGb3JtIiwiZGlzYWJsZWQiLCJuYW1lIiwiY29udGV4dFZhbHVlIiwiY3JlYXRlRWxlbWVudCIsIlByb3ZpZGVyIiwiUGFnZUNvbnRhaW5lciIsImNsYXNzTmFtZSIsImNyZWF0ZSIsInRpdGxlIiwiRXJyb3JSZW5kZXJlciIsImVycm9ycyIsIkZvcm0iLCJPd25lcnNoaXBGaWVsZCIsIklucHV0IiwibGFiZWwiLCJwbGFjZWhvbGRlciIsInR5cGUiLCJ2YXJpYW50IiwicmVxdWlyZWQiLCJUZXh0YXJlYSIsImRlc2NyaXB0aW9uIiwiQnV0dG9uIiwic2F2ZSIsIl9yZWFjdFNlbGVjdCIsInRlYWNoZXIiLCJvcmdzIiwiZGVmYXVsdE9wdGlvbiIsImluc3RpdHV0aW9uIiwic2VsZWN0IiwiY3VycmVudFRhcmdldCIsIm93bmVyIiwib3JnYW5pemF0aW9uSWQiLCJvcHRpb25zIiwibWFwIiwiaXRlbSIsIm93biIsImh0bWxGb3IiLCJSZWFjdFNlbGVjdCIsIl90b2FzdCIsIl9yb3V0aW5nIiwiX2hvb2tzIiwiZGVmYXVsdFZhbHVlcyIsInVzZVN0YXRlIiwiZ2V0UHJvcGVydGllcyIsInNldEZldGNoaW5nIiwic2V0RXJyb3IiLCJ1c2VTdG9yZSIsInRhcmdldCIsImN1cnJlbnRWYWx1ZSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJyIiwicHVibGlzaCIsInRvYXN0Iiwic3VjY2VzcyIsInJvdXRpbmciLCJyZXBsYWNlU3RhdGUiLCJkZWZhdWx0Iiwic2V0UmVhZHkiLCJ1c2VFZmZlY3QiLCJjbGVhblVwIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3Mvb3duZXJzaGlwLnRzeCIsIi90cy92aWV3cy91c2UtZm9ybS50cyIsIi90cy92aWV3cy91c2UtbW9kZWwudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJSixNQUFBLENBQUFNLFlBQVksRUFBRTtjQUNoQyxPQUFPLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ25CO1lBQ0EsSUFBSUcsTUFBTUEsQ0FBQTtjQUNULE9BQU9OLE1BQUEsQ0FBQU8sSUFBSTtZQUNaO1lBRUFDLElBQUlBLENBQUE7Y0FDSCxJQUFJLENBQUMsQ0FBQUwsS0FBTSxDQUFDTSxJQUFJLENBQUMsSUFBSSxDQUFDQyxHQUFHLENBQUNDLEVBQUUsQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3hDO1lBRUFDLElBQUlBLENBQUE7Y0FDSCxJQUFJLENBQUMsQ0FBQVYsS0FBTSxDQUFDVyxLQUFLLEVBQUU7WUFDcEI7O1VBQ0FDLE9BQUEsQ0FBQWQsVUFBQSxHQUFBQSxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3RCRCxJQUFBZSxXQUFBLEdBQUFsQixPQUFBO1VBQ0EsSUFBQW1CLFNBQUEsR0FBQW5CLE9BQUE7VUFDQSxJQUFBb0IsTUFBQSxHQUFBcEIsT0FBQTtVQUNBLElBQUFxQixRQUFBLEdBQUFyQixPQUFBO1VBQ0EsSUFBQXNCLE1BQUEsR0FBQXRCLE9BQUE7VUFDQSxJQUFBdUIsZUFBQSxHQUFBdkIsT0FBQTtVQUNBLElBQUF3QixLQUFBLEdBQUF4QixPQUFBO1VBRU0sTUFBT08sWUFBYSxTQUFRYSxNQUFBLENBQUFLLGFBQTJCO1lBQzVELENBQUFDLEtBQU07WUFDTixJQUFJQSxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsS0FBTTtZQUNuQjtZQUVBLElBQUlDLElBQUlBLENBQUE7Y0FDUCxPQUFPTixRQUFBLENBQUFPLGNBQWMsQ0FBQ0QsSUFBSTtZQUMzQjtZQUVBLENBQUFFLEtBQU0sR0FBK0IsSUFBSVAsTUFBQSxDQUFBUSxZQUFZLENBQUNQLGVBQUEsQ0FBQVEsTUFBTSxDQUFDQyxTQUFTLENBQUM7WUFDdkUsSUFBSUgsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU0sRUFBRUksS0FBSztZQUMxQjtZQUVBLElBQUlDLFdBQVdBLENBQUE7Y0FDZCxPQUFPVixLQUFBLENBQUFVLFdBQVcsQ0FBQ0wsS0FBSztZQUN6QjtZQUNBLElBQUlNLEtBQUtBLENBQUE7Y0FDUixPQUFPLEtBQUssQ0FBQ0EsS0FBSyxJQUFJLElBQUksQ0FBQyxDQUFBTixLQUFNLENBQUNNLEtBQUs7WUFDeEM7WUFDQUMsWUFBQTtjQUNDLEtBQUssRUFBRTtjQUNQLElBQUksQ0FBQyxDQUFBUCxLQUFNLENBQUNRLEVBQUUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDQyxZQUFZLENBQUM7Y0FDM0MsSUFBSSxDQUFDQyxRQUFRLEVBQUU7WUFDaEI7WUFFQXZCLEtBQUtBLENBQUE7Y0FDSixJQUFJLENBQUMsQ0FBQVUsS0FBTSxHQUFHYyxTQUFTO2NBQ3ZCLEtBQUssQ0FBQ0wsS0FBSyxHQUFHLEtBQUs7WUFDcEI7WUFDQUksUUFBUSxHQUFHQSxDQUFBLEtBQUs7Y0FDZixJQUFJLENBQUNmLEtBQUEsQ0FBQVUsV0FBVyxDQUFDQyxLQUFLLEVBQUU7Z0JBQ3ZCWCxLQUFBLENBQUFVLFdBQVcsQ0FBQ0csRUFBRSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUNFLFFBQVEsQ0FBQztnQkFDdkM7O2NBR0RyQixXQUFBLENBQUF1QixZQUFZLENBQUNDLEdBQUcsQ0FBQztnQkFDaEJDLE9BQU8sRUFBRSxJQUFJO2dCQUNiQyxVQUFVLEVBQUUsQ0FDWCxDQUFDLElBQUksQ0FBQ1YsV0FBVyxDQUFDVyxRQUFRLENBQUNDLFVBQVUsRUFBRSxtQkFBbUIsQ0FBQyxFQUMzRCxDQUFDLElBQUksQ0FBQ1osV0FBVyxDQUFDYSxPQUFPLENBQUNDLFVBQVUsQ0FBQztlQUV0QyxDQUFDO1lBQ0gsQ0FBQztZQUVELE1BQU1yQyxJQUFJQSxDQUFDc0MsRUFBRTtjQUNaLElBQUk7Z0JBQ0gsS0FBSyxDQUFDZCxLQUFLLEdBQUcsS0FBSztnQkFDbkIsSUFBSWMsRUFBRSxJQUFJLElBQUksQ0FBQyxDQUFBdkIsS0FBTSxJQUFJLElBQUksQ0FBQyxDQUFBQSxLQUFNLENBQUN1QixFQUFFLEtBQUtBLEVBQUUsRUFBRTtnQkFDaEQsTUFBTUMsUUFBUSxHQUFHQSxDQUFBLEtBQU0sSUFBSSxDQUFDWixZQUFZLEVBQUU7Z0JBQzFDLElBQUksSUFBSSxDQUFDLENBQUFaLEtBQU0sRUFBRTtrQkFDaEIsSUFBSSxDQUFDLENBQUFBLEtBQU0sQ0FBQ3lCLEdBQUcsQ0FBQyxRQUFRLEVBQUVELFFBQVEsQ0FBQztrQkFDbkMsSUFBSSxDQUFDLENBQUF4QixLQUFNLEdBQUdjLFNBQVM7O2dCQUV4QixJQUFJLENBQUMsQ0FBQWQsS0FBTSxHQUFHLElBQUlQLFNBQUEsQ0FBQWlDLE9BQU8sQ0FBQztrQkFBRUg7Z0JBQUUsQ0FBRSxDQUFDO2dCQUNqQyxJQUFJLENBQUMsQ0FBQXZCLEtBQU0sQ0FBQ1csRUFBRSxDQUFDLFFBQVEsRUFBRWEsUUFBUSxDQUFDO2dCQUNsQyxJQUFJRCxFQUFFLEVBQUUsTUFBTSxJQUFJLENBQUMsQ0FBQXZCLEtBQU0sQ0FBQ2YsSUFBSSxFQUFFO2VBQ2hDLENBQUMsT0FBTzBDLENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDQyxLQUFLLENBQUNGLENBQUMsQ0FBQztlQUNoQixTQUFTO2dCQUNULEtBQUssQ0FBQ2xCLEtBQUssR0FBRyxJQUFJOztZQUVwQjtZQUVBLE1BQU1xQixNQUFNQSxDQUFDUCxFQUFFO2NBQ2Q7Y0FDQTtjQUNBLElBQUksQ0FBQ1EsT0FBTyxDQUFDLFFBQVEsQ0FBQztZQUN2Qjs7VUFDQXhDLE9BQUEsQ0FBQVYsWUFBQSxHQUFBQSxZQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQzlFRCxJQUFBbUQsS0FBQSxHQUFBMUQsT0FBQTtVQVNPLE1BQU0yRCxhQUFhLEdBQUExQyxPQUFBLENBQUEwQyxhQUFBLEdBQUdELEtBQUssQ0FBQ0UsYUFBYSxDQUFDLEVBQXlCLENBQUM7VUFDcEUsTUFBTUMsZ0JBQWdCLEdBQUdBLENBQUEsS0FBTUgsS0FBSyxDQUFDSSxVQUFVLENBQUNILGFBQWEsQ0FBQztVQUFDMUMsT0FBQSxDQUFBNEMsZ0JBQUEsR0FBQUEsZ0JBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDVnRFLElBQUFILEtBQUEsR0FBQTFELE9BQUE7VUFDQSxJQUFBK0QsS0FBQSxHQUFBL0QsT0FBQTtVQUVBLElBQUFnRSxXQUFBLEdBQUFoRSxPQUFBO1VBQ0EsSUFBQWlFLEdBQUEsR0FBQWpFLE9BQUE7VUFDQSxJQUFBa0UsUUFBQSxHQUFBbEUsT0FBQTtVQUVBLElBQUFtRSxTQUFBLEdBQUFuRSxPQUFBO1VBQ0EsSUFBQW9FLFFBQUEsR0FBQXBFLE9BQUE7VUFDQSxJQUFBcUUsVUFBQSxHQUFBckUsT0FBQTtVQUVNLFNBQVVTLElBQUlBLENBQUM7WUFBRUo7VUFBSyxDQUFFO1lBQzdCLE1BQU07Y0FBRThCLEtBQUs7Y0FBRU47WUFBSyxDQUFFLEdBQUcsSUFBQXNDLFNBQUEsQ0FBQUcsUUFBUSxFQUFDakUsS0FBSyxDQUFDO1lBQ3hDLE1BQU07Y0FBRWtFLFFBQVE7Y0FBRUMsTUFBTTtjQUFFQyxRQUFRO2NBQUVDLFFBQVE7Y0FBRUMsU0FBUztjQUFFcEI7WUFBSyxDQUFFLEdBQUcsSUFBQWEsUUFBQSxDQUFBUSxPQUFPLEVBQUN6QyxLQUFLLEVBQUU5QixLQUFLLEVBQUV3QixLQUFLLENBQUM7WUFFL0YsSUFBSSxDQUFDTSxLQUFLLEVBQUUsT0FBTyxJQUFJO1lBRXZCLE1BQU0wQyxRQUFRLEdBQUc7Y0FBRUEsUUFBUSxFQUFFTixRQUFRLElBQUlDLE1BQU0sQ0FBQ00sSUFBSSxLQUFLO1lBQUUsQ0FBRTtZQUM3RCxNQUFNQyxZQUFZLEdBQUc7Y0FBRWxELEtBQUs7Y0FBRXhCO1lBQUssQ0FBRTtZQUVyQyxPQUNDcUQsS0FBQSxDQUFBc0IsYUFBQSxDQUFDZCxRQUFBLENBQUFQLGFBQWEsQ0FBQ3NCLFFBQVE7Y0FBQ2hELEtBQUssRUFBRThDO1lBQVksR0FDMUNyQixLQUFBLENBQUFzQixhQUFBLENBQUNmLEdBQUEsQ0FBQWlCLGFBQWE7Y0FBQ0MsU0FBUyxFQUFDLHFCQUFxQjtjQUFDWixRQUFRLEVBQUVBO1lBQVEsR0FDaEViLEtBQUEsQ0FBQXNCLGFBQUE7Y0FBUUcsU0FBUyxFQUFDO1lBQWMsR0FDL0J6QixLQUFBLENBQUFzQixhQUFBLGFBQUtuRCxLQUFLLENBQUN1RCxNQUFNLENBQUNDLEtBQUssQ0FBTSxDQUNyQixFQUNUM0IsS0FBQSxDQUFBc0IsYUFBQSxDQUFDZixHQUFBLENBQUFxQixhQUFhO2NBQUMvQixLQUFLLEVBQUVBLEtBQUs7Y0FBRTFCLEtBQUssRUFBRUEsS0FBSyxDQUFDMEQ7WUFBTSxFQUFJLEVBQ3BEN0IsS0FBQSxDQUFBc0IsYUFBQSxDQUFDakIsS0FBQSxDQUFBeUIsSUFBSTtjQUFDZCxRQUFRLEVBQUVBLFFBQVE7Y0FBRVMsU0FBUyxFQUFDO1lBQWlCLEdBQ3BEekIsS0FBQSxDQUFBc0IsYUFBQSxDQUFDWCxVQUFBLENBQUFvQixjQUFjO2NBQUNkLFNBQVMsRUFBRUEsU0FBUztjQUFFSCxNQUFNLEVBQUVBO1lBQU0sRUFBSSxFQUN4RGQsS0FBQSxDQUFBc0IsYUFBQSxDQUFDakIsS0FBQSxDQUFBMkIsS0FBSztjQUNMQyxLQUFLLEVBQUU5RCxLQUFLLENBQUN1RCxNQUFNLENBQUNOLElBQUksQ0FBQ2EsS0FBSztjQUM5QkMsV0FBVyxFQUFFL0QsS0FBSyxDQUFDdUQsTUFBTSxDQUFDTixJQUFJLENBQUNjLFdBQVc7Y0FDMUMzRCxLQUFLLEVBQUV1QyxNQUFNLENBQUNNLElBQUk7Y0FDbEJBLElBQUksRUFBQyxNQUFNO2NBQ1hlLElBQUksRUFBQyxNQUFNO2NBQ1hDLE9BQU8sRUFBQyxVQUFVO2NBQ2xCckIsUUFBUSxFQUFFQSxRQUFRO2NBQ2xCc0IsUUFBUTtZQUFBLEVBQ1AsRUFDRnJDLEtBQUEsQ0FBQXNCLGFBQUEsQ0FBQ2pCLEtBQUEsQ0FBQWlDLFFBQVE7Y0FDUkwsS0FBSyxFQUFFOUQsS0FBSyxDQUFDdUQsTUFBTSxDQUFDYSxXQUFXLENBQUNOLEtBQUs7Y0FDckNiLElBQUksRUFBQyxhQUFhO2NBQ2xCZ0IsT0FBTyxFQUFDLFVBQVU7Y0FDbEI3RCxLQUFLLEVBQUV1QyxNQUFNLENBQUN5QixXQUFXO2NBQ3pCTCxXQUFXLEVBQUUvRCxLQUFLLENBQUN1RCxNQUFNLENBQUNhLFdBQVcsQ0FBQ0wsV0FBVztjQUNqRG5CLFFBQVEsRUFBRUE7WUFBUSxFQUNqQixFQUNGZixLQUFBLENBQUFzQixhQUFBO2NBQUtHLFNBQVMsRUFBQztZQUFjLEdBQzVCekIsS0FBQSxDQUFBc0IsYUFBQSxDQUFDaEIsV0FBQSxDQUFBa0MsTUFBTTtjQUFDM0IsUUFBUSxFQUFFQSxRQUFRO2NBQUEsR0FBTU0sUUFBUTtjQUFFaUIsT0FBTyxFQUFDLFNBQVM7Y0FBQ0QsSUFBSSxFQUFDO1lBQVEsR0FDdkVoRSxLQUFLLENBQUN1RCxNQUFNLENBQUNyQyxPQUFPLENBQUNvRCxJQUFJLENBQ2xCLENBQ0osQ0FDQSxDQUNRLENBQ1E7VUFFM0I7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDeERBLElBQUF6QyxLQUFBLEdBQUExRCxPQUFBO1VBQ0EsSUFBQW9HLFlBQUEsR0FBQXBHLE9BQUE7VUFDQSxJQUFBa0UsUUFBQSxHQUFBbEUsT0FBQTtVQUVNLFNBQVV5RixjQUFjQSxDQUFDO1lBQUVkLFNBQVM7WUFBRUg7VUFBTSxDQUFFO1lBQ25ELE1BQU07Y0FBRW5FLEtBQUs7Y0FBRXdCO1lBQUssQ0FBRSxHQUFHLElBQUFxQyxRQUFBLENBQUFMLGdCQUFnQixHQUFFO1lBRTNDLElBQUksQ0FBQ3hELEtBQUssQ0FBQ3NCLElBQUksQ0FBQzBFLE9BQU8sRUFBRUMsSUFBSSxFQUFFLE9BQU8sSUFBSTtZQUUxQyxJQUFJQyxhQUFhLEdBQUc7Y0FBRXRFLEtBQUssRUFBRSxFQUFFO2NBQUUwRCxLQUFLLEVBQUU5RCxLQUFLLENBQUMyRSxXQUFXLENBQUNDO1lBQU0sQ0FBRTtZQUVsRSxNQUFNaEMsUUFBUSxHQUFHQSxDQUFDO2NBQUVpQztZQUFhLENBQUUsS0FBSTtjQUN0QyxJQUFJQSxhQUFhLENBQUN6RSxLQUFLLEtBQUs1QixLQUFLLENBQUNzQixJQUFJLENBQUNzQixFQUFFLEVBQUU7Z0JBQzFDMEIsU0FBUyxDQUFDSCxNQUFNLElBQUc7a0JBQ2xCLE9BQU87b0JBQUUsR0FBR0EsTUFBTTtvQkFBRW1DLEtBQUssRUFBRXRHLEtBQUssQ0FBQ3NCLElBQUksQ0FBQ3NCO2tCQUFFLENBQUU7Z0JBQzNDLENBQUMsQ0FBQztnQkFDRjs7Y0FHRDBCLFNBQVMsQ0FBQ0gsTUFBTSxJQUFHO2dCQUNsQixPQUFPO2tCQUFFLEdBQUdBLE1BQU07a0JBQUVtQyxLQUFLLEVBQUVELGFBQWEsQ0FBQ3pFLEtBQUs7a0JBQUUyRSxjQUFjLEVBQUVGLGFBQWEsQ0FBQ3pFO2dCQUFLLENBQUU7Y0FDdEYsQ0FBQyxDQUFDO1lBQ0gsQ0FBQztZQUVELE1BQU00RSxPQUFPLEdBQUcsQ0FDZixHQUFHeEcsS0FBSyxDQUFDc0IsSUFBSSxDQUFDMEUsT0FBTyxDQUFDQyxJQUFJLENBQUNRLEdBQUcsQ0FBQ0MsSUFBSSxJQUFHO2NBQ3JDLE9BQU87Z0JBQUU5RSxLQUFLLEVBQUU4RSxJQUFJLENBQUM5RCxFQUFFO2dCQUFFMEMsS0FBSyxFQUFFb0IsSUFBSSxDQUFDakM7Y0FBSSxDQUFFO1lBQzVDLENBQUMsQ0FBQyxFQUNGO2NBQUU3QyxLQUFLLEVBQUU1QixLQUFLLENBQUNzQixJQUFJLENBQUNzQixFQUFFO2NBQUUwQyxLQUFLLEVBQUU5RCxLQUFLLENBQUMyRSxXQUFXLENBQUNRO1lBQUcsQ0FBRSxDQUN0RDtZQUNELE9BQ0N0RCxLQUFBLENBQUFzQixhQUFBLGNBQ0N0QixLQUFBLENBQUFzQixhQUFBO2NBQU9pQyxPQUFPLEVBQUM7WUFBRSxHQUFFcEYsS0FBSyxDQUFDMkUsV0FBVyxDQUFDYixLQUFLLEUsS0FBVyxFQUNyRGpDLEtBQUEsQ0FBQXNCLGFBQUEsQ0FBQ29CLFlBQUEsQ0FBQWMsV0FBVztjQUNYakYsS0FBSyxFQUFFdUMsTUFBTSxDQUFDbUMsS0FBSztjQUNuQmYsV0FBVyxFQUFFL0QsS0FBSyxDQUFDMkUsV0FBVyxDQUFDQyxNQUFNO2NBQ3JDM0IsSUFBSSxFQUFDLE9BQU87Y0FDWitCLE9BQU8sRUFBRUEsT0FBTztjQUNoQnBDLFFBQVEsRUFBRUE7WUFBUSxFQUNqQixDQUNHO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDMUNBLElBQUFmLEtBQUEsR0FBQTFELE9BQUE7VUFDQSxJQUFBbUgsTUFBQSxHQUFBbkgsT0FBQTtVQUNBLElBQUFvSCxRQUFBLEdBQUFwSCxPQUFBO1VBRUEsSUFBQXFILE1BQUEsR0FBQXJILE9BQUE7VUFFTSxTQUFVNEUsT0FBT0EsQ0FBQ3pDLEtBQUssRUFBRTlCLEtBQUssRUFBRXdCLEtBQUs7WUFDMUMsTUFBTXlGLGFBQWEsR0FBRztjQUFFeEMsSUFBSSxFQUFFekUsS0FBSyxFQUFFcUIsS0FBSyxFQUFFb0QsSUFBSSxJQUFJLEVBQUU7Y0FBRW1CLFdBQVcsRUFBRTVGLEtBQUssRUFBRXFCLEtBQUssRUFBRXVFLFdBQVcsSUFBSTtZQUFFLENBQUU7WUFDdEcsTUFBTSxDQUFDekIsTUFBTSxFQUFFRyxTQUFTLENBQUMsR0FBR2pCLEtBQUssQ0FBQzZELFFBQVEsQ0FBQyxPQUFPO2NBQUUsR0FBR0QsYUFBYTtjQUFFLElBQUlqSCxLQUFLLENBQUNxQixLQUFLLEVBQUU4RixhQUFhLEVBQUUsSUFBSSxFQUFFO1lBQUMsQ0FBRSxDQUFDLENBQUM7WUFDakgsTUFBTSxDQUFDakQsUUFBUSxFQUFFa0QsV0FBVyxDQUFDLEdBQUcvRCxLQUFLLENBQUM2RCxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3JELE1BQU0sQ0FBQ2hFLEtBQUssRUFBRW1FLFFBQVEsQ0FBQyxHQUFHaEUsS0FBSyxDQUFDNkQsUUFBUSxDQUFDLEVBQUUsQ0FBQztZQUU1QyxJQUFBRixNQUFBLENBQUFNLFFBQVEsRUFBQ3RILEtBQUssQ0FBQztZQUVmLElBQUksQ0FBQzhCLEtBQUssRUFBRSxPQUFPLEVBQUU7WUFDckIsTUFBTTtjQUFFVDtZQUFLLENBQUUsR0FBR3JCLEtBQUs7WUFFdkIsTUFBTW9FLFFBQVEsR0FBR0EsQ0FBQztjQUFFaUMsYUFBYSxFQUFFa0I7WUFBTSxDQUFFLEtBQUk7Y0FDOUMsTUFBTUMsWUFBWSxHQUFHO2dCQUFFLEdBQUdyRDtjQUFNLENBQUU7Y0FDbENxRCxZQUFZLENBQUNELE1BQU0sQ0FBQzlDLElBQUksQ0FBQyxHQUFHOEMsTUFBTSxDQUFDM0YsS0FBSztjQUN4QzBDLFNBQVMsQ0FBQ2tELFlBQVksQ0FBQztjQUN2QkgsUUFBUSxDQUFDLEVBQUUsQ0FBQztZQUNiLENBQUM7WUFFRCxNQUFNaEQsUUFBUSxHQUFHLE1BQU9vRCxLQUFLLElBQW1CO2NBQy9DQSxLQUFLLENBQUNDLGNBQWMsRUFBRTtjQUN0QkQsS0FBSyxDQUFDRSxlQUFlLEVBQUU7Y0FDdkJQLFdBQVcsQ0FBQyxJQUFJLENBQUM7Y0FDakIsSUFBSTtnQkFDSCxNQUFNUSxDQUFDLEdBQUcsTUFBTXZHLEtBQUssQ0FBQ3dHLE9BQU8sQ0FBQzFELE1BQU0sQ0FBQztnQkFDckMyQyxNQUFBLENBQUFnQixLQUFLLENBQUNDLE9BQU8sQ0FBQ3ZHLEtBQUssQ0FBQ3VELE1BQU0sQ0FBQ2dELE9BQU8sQ0FBQztnQkFDbkNoQixRQUFBLENBQUFpQixPQUFPLENBQUNDLFlBQVksQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLHFCQUFxQjVHLEtBQUssQ0FBQ3VCLEVBQUUsRUFBRSxDQUFDO2VBQy9ELENBQUMsT0FBT0ksQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUNDLEtBQUssQ0FBQ0YsQ0FBQyxDQUFDO2dCQUNoQnFFLFFBQVEsQ0FBQzdGLEtBQUssQ0FBQzBELE1BQU0sQ0FBQ2dELE9BQU8sQ0FBQztlQUM5QixTQUFTO2dCQUNUZCxXQUFXLENBQUMsS0FBSyxDQUFDOztZQUVwQixDQUFDO1lBRUQsT0FBTztjQUNOakQsTUFBTTtjQUNORCxRQUFRO2NBQ1JoQixLQUFLO2NBQ0xrRSxXQUFXO2NBQ1hoRCxRQUFRO2NBQ1JDLFFBQVE7Y0FDUkM7YUFDQTtVQUNGOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2pEQSxJQUFBakIsS0FBQSxHQUFBMUQsT0FBQTtVQUNNLFNBQVVzRSxRQUFRQSxDQUFDakUsS0FBSztZQUM3QixNQUFNLENBQUM4QixLQUFLLEVBQUVxRyxRQUFRLENBQUMsR0FBRzlFLEtBQUssQ0FBQzZELFFBQVEsQ0FBQ2xILEtBQUssQ0FBQzhCLEtBQUssQ0FBQztZQUVyRHVCLEtBQUssQ0FBQytFLFNBQVMsQ0FBQyxNQUFLO2NBQ3BCLE1BQU1oRSxRQUFRLEdBQUdBLENBQUEsS0FBSztnQkFDckIrRCxRQUFRLENBQUNuSSxLQUFLLENBQUM4QixLQUFLLENBQUM7Y0FDdEIsQ0FBQztjQUNEOUIsS0FBSyxDQUFDZ0MsRUFBRSxDQUFDLFFBQVEsRUFBRW9DLFFBQVEsQ0FBQztjQUM1QixNQUFNaUUsT0FBTyxHQUFHQSxDQUFBLEtBQU1ySSxLQUFLLENBQUM4QyxHQUFHLENBQUMsUUFBUSxFQUFFc0IsUUFBUSxDQUFDO2NBQ25ELE9BQU9pRSxPQUFPO1lBQ2YsQ0FBQyxDQUFDO1lBQ0YsT0FBTztjQUNOdkcsS0FBSztjQUNMOUIsS0FBSztjQUNMd0IsS0FBSyxFQUFFeEIsS0FBSyxFQUFFd0I7YUFDZDtVQUNGIiwiaWdub3JlTGlzdCI6W119