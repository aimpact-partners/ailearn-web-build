System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.2.0/model", "@aimpact/chat-sdk@1.1.0/session", "@aimpact/ailearn-app@0.1.6-dev.29/main-layout.widget", "@beyond-js/kernel@0.1.9/texts", "react@18.2.0", "pragmate-ui@1.0.0-beta.6/toast", "@beyond-js/kernel@0.1.9/routing", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.6/form", "pragmate-ui@1.0.0-beta.6/components", "@aimpact/ailearn-app@0.1.6-dev.29/components/ui", "pragmate-ui@1.0.0-beta.6/form/react-select"], function (_export, _context2) {
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
    }, function (_beyondJsReactive120Model) {
      dependency_5 = _beyondJsReactive120Model;
    }, function (_aimpactChatSdk110Session) {
      dependency_6 = _aimpactChatSdk110Session;
    }, function (_aimpactAilearnApp016Dev29MainLayoutWidget) {
      dependency_7 = _aimpactAilearnApp016Dev29MainLayoutWidget;
    }, function (_beyondJsKernel019Texts) {
      dependency_8 = _beyondJsKernel019Texts;
    }, function (_react2) {
      dependency_9 = _react2;
    }, function (_pragmateUi100Beta6Toast) {
      dependency_10 = _pragmateUi100Beta6Toast;
    }, function (_beyondJsKernel019Routing) {
      dependency_11 = _beyondJsKernel019Routing;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_12 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi100Beta6Form) {
      dependency_13 = _pragmateUi100Beta6Form;
    }, function (_pragmateUi100Beta6Components) {
      dependency_14 = _pragmateUi100Beta6Components;
    }, function (_aimpactAilearnApp016Dev29ComponentsUi) {
      dependency_15 = _aimpactAilearnApp016Dev29ComponentsUi;
    }, function (_pragmateUi100Beta6FormReactSelect) {
      dependency_16 = _pragmateUi100Beta6FormReactSelect;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.1.0"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.6"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["wavesurfer.js", "7.8.5"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.8"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["firebase", "10.13.1"], ["firebase-admin", "12.4.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.1.6-dev.29"], ["@aimpact/ailearn-app", "0.1.6-dev.29"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.29/classrooms/create",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['@aimpact/ailearn-app/main-layout.widget', dependency_7], ['@beyond-js/kernel/texts', dependency_8], ['react', dependency_9], ['pragmate-ui/toast', dependency_10], ['@beyond-js/kernel/routing', dependency_11], ['@beyond-js/react-18-widgets/hooks', dependency_12], ['pragmate-ui/form', dependency_13], ['pragmate-ui/components', dependency_14], ['@aimpact/ailearn-app/components/ui', dependency_15], ['pragmate-ui/form/react-select', dependency_16]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-classrooms-create",
        "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.29/classrooms/create.widget",
        "is": "page",
        "route": "/classrooms/create",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.6-dev.29/classrooms/create.widget');
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
        hash: 2242666799,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _core = require("@aimpact/ailearn-sdk/core");
          var _model = require("@beyond-js/reactive/model");
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
            setBreadcrumb() {
              const onChange = this.setBreadcrumb.bind(this);
              if (!this.#texts.ready) {
                this.#texts.on('change', onChange);
                return;
              }
              this.#texts.off('change', onChange);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJxcyIsImdldCIsImhpZGUiLCJjbGVhciIsImV4cG9ydHMiLCJfY29yZSIsIl9tb2RlbCIsIl9zZXNzaW9uIiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwidXNlciIsInNlc3Npb25XcmFwcGVyIiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ2YWx1ZSIsInJlYWR5IiwiY29uc3RydWN0b3IiLCJvbiIsInRyaWdnZXJFdmVudCIsInVuZGVmaW5lZCIsInNldEJyZWFkY3J1bWIiLCJvbkNoYW5nZSIsImJpbmQiLCJvZmYiLCJDbGFzc3Jvb20iLCJlIiwiY29uc29sZSIsImVycm9yIiwiZGVsZXRlIiwiaWQiLCJjbGFzc3Jvb21zIiwicmVtb3ZlIiwidHJpZ2dlciIsInNhdmUiLCJ2YWx1ZXMiLCJmZXRjaGluZyIsInN0YXR1cyIsImRhdGEiLCJFcnJvciIsIlJlYWN0IiwiTW9kdWxlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VNb2R1bGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl90b2FzdCIsIl9yb3V0aW5nIiwiX2hvb2tzIiwidXNlRm9ybSIsImRlZmF1bHRWYWx1ZXMiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJzZXRWYWx1ZXMiLCJ1c2VTdGF0ZSIsInNldEZldGNoaW5nIiwic2V0RXJyb3IiLCJ1c2VCaW5kZXIiLCJjdXJyZW50VGFyZ2V0IiwidGFyZ2V0IiwiY3VycmVudFZhbHVlIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwicHVibGlzaCIsInRvYXN0Iiwic3VjY2VzcyIsImNyZWF0ZSIsInJvdXRpbmciLCJyZXBsYWNlU3RhdGUiLCJlcnJvcnMiLCJkZWZhdWx0IiwiX2Zvcm0iLCJfY29tcG9uZW50cyIsIl91aSIsIl9jb250ZXh0IiwiX3VzZU1vZGVsIiwiX2V2ZW50cyIsIl9vd25lcnNoaXAiLCJ1c2VNb2RlbCIsImRpc2FibGVkIiwiY29udGV4dFZhbHVlIiwiY3JlYXRlRWxlbWVudCIsIlByb3ZpZGVyIiwiUGFnZUNvbnRhaW5lciIsImNsYXNzTmFtZSIsInRpdGxlIiwiRXJyb3JSZW5kZXJlciIsIkZvcm0iLCJPd25lcnNoaXBGaWVsZCIsIklucHV0IiwibGFiZWwiLCJwbGFjZWhvbGRlciIsInR5cGUiLCJyZXF1aXJlZCIsIlRleHRhcmVhIiwiQnV0dG9uIiwidmFyaWFudCIsImFjdGlvbnMiLCJfcmVhY3QiLCJfcmVhY3RTZWxlY3QiLCJ0ZWFjaGVyIiwib3JncyIsImRlZmF1bHRPcHRpb24iLCJpbnN0aXR1dGlvbiIsInNlbGVjdCIsIm93bmVyIiwib3JnYW5pemF0aW9uSWQiLCJvcHRpb25zIiwibWFwIiwiaXRlbSIsIm93biIsImh0bWxGb3IiLCJSZWFjdFNlbGVjdCIsInNldFJlYWR5IiwidXNlRWZmZWN0IiwiY2xlYW5VcCJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvZXZlbnRzLnRzIiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9vd25lcnNoaXAudHN4IiwiL3RzL3ZpZXdzL3VzZS1tb2RlbC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9B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