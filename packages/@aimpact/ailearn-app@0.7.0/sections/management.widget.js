System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.14/bundle", "@beyond-js/kernel@0.1.14/styles", "@beyond-js/react-18-widgets@1.1.8/page", "@aimpact/ailearn-app@0.7.0/main-layout.widget", "@aimpact/ailearn-sdk@1.2.0/entities/sections", "@beyond-js/reactive@2.1.1/model", "@aimpact/chat-sdk@1.5.5/session", "@beyond-js/kernel@0.1.14/texts", "@aimpact/ailearn-app@0.7.0/i18n.ts", "react@18.3.1", "pragmate-ui@1.0.8/form", "pragmate-ui@1.0.8/components", "@aimpact/ailearn-app@0.7.0/components/ui", "pragmate-ui@1.0.8/form/react-select", "pragmate-ui@1.0.8/toast", "@beyond-js/kernel@0.1.14/routing", "@beyond-js/react-18-widgets@1.1.8/hooks"], function (_export, _context2) {
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
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.9"], ["@beyond-js/reactive", "2.1.1"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.14"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.8"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["@radix-ui/react-accordion", "1.2.12"], ["@radix-ui/react-collapsible", "1.1.12"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-select", "2.2.6"], ["@radix-ui/react-separator", "1.1.7"], ["@tiptap/extension-blockquote", "3.2.0"], ["@tiptap/extension-code-block", "3.2.0"], ["@tiptap/extension-horizontal-rule", "3.2.0"], ["@tiptap/extension-image", "3.6.2"], ["@tiptap/extension-task-item", "3.2.0"], ["@tiptap/extension-task-list", "3.2.0"], ["@tiptap/extension-underline", "3.2.0"], ["@tiptap/pm", "3.6.2"], ["@tiptap/react", "3.2.0"], ["@tiptap/starter-kit", "3.2.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-responsive-masonry", "2.7.1"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.4.0"], ["react-virtuoso", "4.14.0"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "12.0.2"], ["tippy.js", "6.3.7"], ["turndown", "7.2.0"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["yet-another-react-lightbox", "3.25.0"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/node", "20.11.0"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.7.0"], ["@aimpact/rvd", "0.7.0"]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJxcyIsImdldCIsImhpZGUiLCJjbGVhciIsImV4cG9ydHMiLCJfbWFpbkxheW91dCIsIl9zZWN0aW9ucyIsIl9tb2RlbCIsIl9zZXNzaW9uIiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiX2kxOG4iLCJSZWFjdGl2ZU1vZGVsIiwibW9kZWwiLCJ1c2VyIiwic2Vzc2lvbldyYXBwZXIiLCJ0ZXh0cyIsIkN1cnJlbnRUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInZhbHVlIiwiZ2xvYmFsVGV4dHMiLCJyZWFkeSIsImNvbnN0cnVjdG9yIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJ2YWxpZGF0ZSIsInVuZGVmaW5lZCIsIkxheW91dEJyb2tlciIsInNldCIsIm92ZXJsYXkiLCJicmVhZGNydW1iIiwiZW50aXRpZXMiLCJrYlNlY3Rpb25zIiwiYWN0aW9ucyIsIm1hbmFnZW1lbnQiLCJpZCIsImxpc3RlbmVyIiwib2ZmIiwiU2VjdGlvbiIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJkZWxldGUiLCJ0cmlnZ2VyIiwiUmVhY3QiLCJNb2R1bGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZU1vZHVsZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2Zvcm0iLCJfY29tcG9uZW50cyIsIl91aSIsIl9jb250ZXh0IiwiX3VzZU1vZGVsIiwiX3VzZUZvcm0iLCJfb3duZXJzaGlwIiwidXNlTW9kZWwiLCJmZXRjaGluZyIsInZhbHVlcyIsIm9uQ2hhbmdlIiwib25TdWJtaXQiLCJzZXRWYWx1ZXMiLCJ1c2VGb3JtIiwiZGlzYWJsZWQiLCJuYW1lIiwiY29udGV4dFZhbHVlIiwiY3JlYXRlRWxlbWVudCIsIlByb3ZpZGVyIiwiUGFnZUNvbnRhaW5lciIsImNsYXNzTmFtZSIsImNyZWF0ZSIsInRpdGxlIiwiRXJyb3JSZW5kZXJlciIsImVycm9ycyIsIkZvcm0iLCJPd25lcnNoaXBGaWVsZCIsIklucHV0IiwibGFiZWwiLCJwbGFjZWhvbGRlciIsInR5cGUiLCJ2YXJpYW50IiwicmVxdWlyZWQiLCJUZXh0YXJlYSIsImRlc2NyaXB0aW9uIiwiQnV0dG9uIiwic2F2ZSIsIl9yZWFjdFNlbGVjdCIsInRlYWNoZXIiLCJvcmdzIiwiZGVmYXVsdE9wdGlvbiIsImluc3RpdHV0aW9uIiwic2VsZWN0IiwiY3VycmVudFRhcmdldCIsIm93bmVyIiwib3JnYW5pemF0aW9uSWQiLCJvcHRpb25zIiwibWFwIiwiaXRlbSIsIm93biIsImh0bWxGb3IiLCJSZWFjdFNlbGVjdCIsIl90b2FzdCIsIl9yb3V0aW5nIiwiX2hvb2tzIiwiZGVmYXVsdFZhbHVlcyIsInVzZVN0YXRlIiwiZ2V0UHJvcGVydGllcyIsInNldEZldGNoaW5nIiwic2V0RXJyb3IiLCJ1c2VTdG9yZSIsInRhcmdldCIsImN1cnJlbnRWYWx1ZSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJyIiwicHVibGlzaCIsInRvYXN0Iiwic3VjY2VzcyIsInJvdXRpbmciLCJyZXBsYWNlU3RhdGUiLCJkZWZhdWx0Iiwic2V0UmVhZHkiLCJ1c2VFZmZlY3QiLCJjbGVhblVwIl0sInNvdXJjZXMiOlsiLy90cy9jb250cm9sbGVyLnRzIiwiLy90cy9zdG9yZS50cyIsIi8vdHMvdmlld3MvY29udGV4dC50cyIsIi8vdHMvdmlld3MvaW5kZXgudHN4IiwiLy90cy92aWV3cy9vd25lcnNoaXAudHN4IiwiLy90cy92aWV3cy91c2UtZm9ybS50cyIsIi8vdHMvdmlld3MvdXNlLW1vZGVsLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7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