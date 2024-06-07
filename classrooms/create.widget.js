System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.1.12/model", "@aimpact/chat-sdk@1.0.0/session", "react@18.2.0", "pragmate-ui@0.1.1/toast", "@beyond-js/kernel@0.1.9/routing", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@0.1.1/form", "pragmate-ui@0.1.1/components", "@aimpact/ailearn-app@0.0.46.dev-10/components/ui", "pragmate-ui@0.1.1/form/react-select"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, bimport, __Bundle, __pkg, ims, Controller, __beyond_pkg, hmr;
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
    }, function (_react2) {
      dependency_7 = _react2;
    }, function (_pragmateUi011Toast) {
      dependency_8 = _pragmateUi011Toast;
    }, function (_beyondJsKernel019Routing) {
      dependency_9 = _beyondJsKernel019Routing;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_10 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi011Form) {
      dependency_11 = _pragmateUi011Form;
    }, function (_pragmateUi011Components) {
      dependency_12 = _pragmateUi011Components;
    }, function (_aimpactAilearnApp0046Dev10ComponentsUi) {
      dependency_13 = _aimpactAilearnApp0046Dev10ComponentsUi;
    }, function (_pragmateUi011FormReactSelect) {
      dependency_14 = _pragmateUi011FormReactSelect;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.0.46.dev-10"], ["@aimpact/ailearn-app", "0.0.46.dev-10"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.46.dev-10/classrooms/create",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['react', dependency_7], ['pragmate-ui/toast', dependency_8], ['@beyond-js/kernel/routing', dependency_9], ['@beyond-js/react-18-widgets/hooks', dependency_10], ['pragmate-ui/form', dependency_11], ['pragmate-ui/components', dependency_12], ['@aimpact/ailearn-app/components/ui', dependency_13], ['pragmate-ui/form/react-select', dependency_14]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-classrooms-create",
        "vspecifier": "@aimpact/ailearn-app@0.0.46.dev-10/classrooms/create.widget",
        "is": "page",
        "route": "/classrooms/create",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.46.dev-10/classrooms/create.widget');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJxcyIsImdldCIsImhpZGUiLCJjbGVhciIsImV4cG9ydHMiLCJfY29yZSIsIl9tb2RlbCIsIl9zZXNzaW9uIiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwidXNlciIsInNlc3Npb25XcmFwcGVyIiwidW5kZWZpbmVkIiwicmVhZHkiLCJDbGFzc3Jvb20iLCJlIiwiY29uc29sZSIsImVycm9yIiwiZGVsZXRlIiwiaWQiLCJjbGFzc3Jvb21zIiwicmVtb3ZlIiwidHJpZ2dlciIsInNhdmUiLCJ2YWx1ZXMiLCJmZXRjaGluZyIsInN0YXR1cyIsImRhdGEiLCJFcnJvciIsIlJlYWN0IiwiTW9kdWxlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VNb2R1bGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl90b2FzdCIsIl9yb3V0aW5nIiwiX2hvb2tzIiwidXNlRm9ybSIsInRleHRzIiwiZGVmYXVsdFZhbHVlcyIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsInNldFZhbHVlcyIsInVzZVN0YXRlIiwic2V0RmV0Y2hpbmciLCJzZXRFcnJvciIsInVzZUJpbmRlciIsIm9uQ2hhbmdlIiwiY3VycmVudFRhcmdldCIsInRhcmdldCIsImN1cnJlbnRWYWx1ZSIsInZhbHVlIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwicHVibGlzaCIsInRvYXN0Iiwic3VjY2VzcyIsImNyZWF0ZSIsInJvdXRpbmciLCJyZXBsYWNlU3RhdGUiLCJlcnJvcnMiLCJkZWZhdWx0IiwiX2Zvcm0iLCJfY29tcG9uZW50cyIsIl91aSIsIl9jb250ZXh0IiwiX3VzZU1vZGVsIiwiX2V2ZW50cyIsIl9vd25lcnNoaXAiLCJ1c2VNb2RlbCIsImRpc2FibGVkIiwiY29udGV4dFZhbHVlIiwiY3JlYXRlRWxlbWVudCIsIlByb3ZpZGVyIiwiUGFnZUNvbnRhaW5lciIsImNsYXNzTmFtZSIsInRpdGxlIiwiRXJyb3JSZW5kZXJlciIsIkZvcm0iLCJPd25lcnNoaXBGaWVsZCIsIklucHV0IiwibGFiZWwiLCJwbGFjZWhvbGRlciIsInR5cGUiLCJyZXF1aXJlZCIsIlRleHRhcmVhIiwiQnV0dG9uIiwidmFyaWFudCIsImFjdGlvbnMiLCJfcmVhY3QiLCJfcmVhY3RTZWxlY3QiLCJ0ZWFjaGVyIiwib3JncyIsImRlZmF1bHRPcHRpb24iLCJzY2hvb2xzIiwic2VsZWN0Iiwib3duZXIiLCJvcmdhbml6YXRpb25JZCIsIm9wdGlvbnMiLCJtYXAiLCJpdGVtIiwib3duIiwiaHRtbEZvciIsIlJlYWN0U2VsZWN0IiwiX2JleW9uZF9jb250ZXh0Iiwic2V0UmVhZHkiLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ1c2VFZmZlY3QiLCJvbiIsImNsZWFuVXAiLCJvZmYiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2V2ZW50cy50cyIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3Mvb3duZXJzaGlwLnRzeCIsIi90cy92aWV3cy91c2UtbW9kZWwudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJSixNQUFBLENBQUFNLFlBQVksRUFBRTtjQUNoQyxPQUFPLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ25CO1lBQ0EsSUFBSUcsTUFBTUEsQ0FBQTtjQUNULE9BQU9OLE1BQUEsQ0FBQU8sSUFBSTtZQUNaO1lBRUFDLElBQUlBLENBQUE7Y0FDSCxJQUFJLENBQUMsQ0FBQUwsS0FBTSxDQUFDTSxJQUFJLENBQUMsSUFBSSxDQUFDQyxHQUFHLENBQUNDLEVBQUUsQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3hDO1lBRUFDLElBQUlBLENBQUE7Y0FDSCxJQUFJLENBQUMsQ0FBQVYsS0FBTSxDQUFDVyxLQUFLLEVBQUU7WUFDcEI7O1VBQ0FDLE9BQUEsQ0FBQWQsVUFBQSxHQUFBQSxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3RCRCxJQUFBZSxLQUFBLEdBQUFsQixPQUFBO1VBQ0EsSUFBQW1CLE1BQUEsR0FBQW5CLE9BQUE7VUFDQSxJQUFBb0IsUUFBQSxHQUFBcEIsT0FBQTtVQVdNLE1BQU9PLFlBQWEsU0FBUVksTUFBQSxDQUFBRSxhQUEyQjtZQUM1RCxDQUFBQyxLQUFNO1lBQ04sSUFBSUEsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU07WUFDbkI7WUFFQSxJQUFJQyxJQUFJQSxDQUFBO2NBQ1AsT0FBT0gsUUFBQSxDQUFBSSxjQUFjLENBQUNELElBQUk7WUFDM0I7WUFDQVAsS0FBS0EsQ0FBQTtjQUNKLElBQUksQ0FBQyxDQUFBTSxLQUFNLEdBQUdHLFNBQVM7Y0FDdkIsSUFBSSxDQUFDQyxLQUFLLEdBQUcsS0FBSztZQUNuQjtZQUVBLE1BQU1mLElBQUlBLENBQUE7Y0FDVCxJQUFJO2dCQUNILElBQUksQ0FBQ2UsS0FBSyxHQUFHLEtBQUs7Z0JBRWxCLElBQUksQ0FBQyxDQUFBSixLQUFNLEdBQUcsSUFBSUosS0FBQSxDQUFBUyxTQUFTLENBQUMsRUFBRSxDQUFDO2VBQy9CLENBQUMsT0FBT0MsQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUNDLEtBQUssQ0FBQ0YsQ0FBQyxDQUFDO2VBQ2hCLFNBQVM7Z0JBQ1QsSUFBSSxDQUFDRixLQUFLLEdBQUcsSUFBSTs7WUFFbkI7WUFFQSxNQUFNSyxNQUFNQSxDQUFDQyxFQUFFO2NBQ2QsSUFBSSxDQUFDLENBQUFWLEtBQU0sQ0FBQ1csVUFBVSxDQUFDQyxNQUFNLENBQUNGLEVBQUUsQ0FBQztjQUNqQyxJQUFJLENBQUNHLE9BQU8sQ0FBQyxRQUFRLENBQUM7WUFDdkI7WUFFQSxNQUFNQyxJQUFJQSxDQUFDQyxNQUFNO2NBQ2hCLElBQUk7Z0JBQ0gsSUFBSSxDQUFDQyxRQUFRLEdBQUcsSUFBSTtnQkFDcEIsTUFBTTtrQkFBRUMsTUFBTTtrQkFBRUM7Z0JBQUksQ0FBRSxHQUFHLE1BQU0sSUFBSSxDQUFDbEIsS0FBSyxDQUFDYyxJQUFJLENBQUM7a0JBQUUsR0FBR0M7Z0JBQU0sQ0FBRSxDQUFDO2dCQUM3RCxJQUFJLENBQUNFLE1BQU0sRUFBRSxNQUFNLElBQUlFLEtBQUssQ0FBQyw0QkFBNEIsQ0FBQztnQkFDMUQsT0FBT0QsSUFBSTtlQUNYLENBQUMsT0FBT1osQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUNDLEtBQUssQ0FBQyxDQUFDLEVBQUVGLENBQUMsQ0FBQztlQUNuQixTQUFTO2dCQUNULElBQUksQ0FBQ1UsUUFBUSxHQUFHLEtBQUs7O1lBRXZCOztVQUNBckIsT0FBQSxDQUFBVixZQUFBLEdBQUFBLFlBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDeERELElBQUFtQyxLQUFBLEdBQUExQyxPQUFBO1VBU08sTUFBTTJDLGFBQWEsR0FBQTFCLE9BQUEsQ0FBQTBCLGFBQUEsR0FBR0QsS0FBSyxDQUFDRSxhQUFhLENBQUMsRUFBeUIsQ0FBQztVQUNwRSxNQUFNQyxnQkFBZ0IsR0FBR0EsQ0FBQSxLQUFNSCxLQUFLLENBQUNJLFVBQVUsQ0FBQ0gsYUFBYSxDQUFDO1VBQUMxQixPQUFBLENBQUE0QixnQkFBQSxHQUFBQSxnQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNWdEUsSUFBQUgsS0FBQSxHQUFBMUMsT0FBQTtVQUNBLElBQUErQyxNQUFBLEdBQUEvQyxPQUFBO1VBQ0EsSUFBQWdELFFBQUEsR0FBQWhELE9BQUE7VUFDQSxJQUFBaUQsTUFBQSxHQUFBakQsT0FBQTtVQUVNLFNBQVVrRCxPQUFPQSxDQUFDeEIsS0FBSyxFQUFFckIsS0FBSyxFQUFFOEMsS0FBSztZQUMxQyxNQUFNQyxhQUFhLEdBQUc7Y0FBRUMsSUFBSSxFQUFFaEQsS0FBSyxFQUFFaUIsS0FBSyxFQUFFK0IsSUFBSSxJQUFJLEVBQUU7Y0FBRUMsV0FBVyxFQUFFakQsS0FBSyxFQUFFaUIsS0FBSyxFQUFFZ0MsV0FBVyxJQUFJO1lBQUUsQ0FBRTtZQUN0RyxNQUFNLENBQUNqQixNQUFNLEVBQUVrQixTQUFTLENBQUMsR0FBR2IsS0FBSyxDQUFDYyxRQUFRLENBQUNKLGFBQWEsQ0FBQztZQUN6RCxNQUFNLENBQUNkLFFBQVEsRUFBRW1CLFdBQVcsQ0FBQyxHQUFHZixLQUFLLENBQUNjLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDckQsTUFBTSxDQUFDMUIsS0FBSyxFQUFFNEIsUUFBUSxDQUFDLEdBQUdoQixLQUFLLENBQUNjLFFBQVEsQ0FBQyxFQUFFLENBQUM7WUFDNUMsSUFBQVAsTUFBQSxDQUFBVSxTQUFTLEVBQUMsQ0FBQ3RELEtBQUssQ0FBQyxFQUFFLE1BQUs7Y0FDdkIsSUFBSSxDQUFDQSxLQUFLLENBQUNxQixLQUFLLEVBQUU7Z0JBQ2pCNkIsU0FBUyxDQUFDSCxhQUFhLENBQUM7O1lBRTFCLENBQUMsQ0FBQztZQUNGLElBQUksQ0FBQzFCLEtBQUssRUFBRSxPQUFPLEVBQUU7WUFDckIsTUFBTTtjQUFFSjtZQUFLLENBQUUsR0FBR2pCLEtBQUs7WUFFdkIsTUFBTXVELFFBQVEsR0FBR0EsQ0FBQztjQUFFQyxhQUFhLEVBQUVDO1lBQU0sQ0FBRSxLQUFJO2NBQzlDLE1BQU1DLFlBQVksR0FBRztnQkFBRSxHQUFHMUI7Y0FBTSxDQUFFO2NBQ2xDMEIsWUFBWSxDQUFDRCxNQUFNLENBQUNULElBQUksQ0FBQyxHQUFHUyxNQUFNLENBQUNFLEtBQUs7Y0FDeENULFNBQVMsQ0FBQ1EsWUFBWSxDQUFDO2NBQ3ZCTCxRQUFRLENBQUMsRUFBRSxDQUFDO1lBQ2IsQ0FBQztZQUVELE1BQU1PLFFBQVEsR0FBRyxNQUFPQyxLQUFLLElBQW1CO2NBQy9DQSxLQUFLLENBQUNDLGNBQWMsRUFBRTtjQUN0QkQsS0FBSyxDQUFDRSxlQUFlLEVBQUU7Y0FDdkJYLFdBQVcsQ0FBQyxJQUFJLENBQUM7Y0FDakIsSUFBSTtnQkFDSCxNQUFNbkMsS0FBSyxDQUFDK0MsT0FBTyxDQUFDaEMsTUFBTSxDQUFDO2dCQUMzQlUsTUFBQSxDQUFBdUIsS0FBSyxDQUFDQyxPQUFPLENBQUNwQixLQUFLLENBQUNxQixNQUFNLENBQUNELE9BQU8sQ0FBQztnQkFDbkN2QixRQUFBLENBQUF5QixPQUFPLENBQUNDLFlBQVksQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLG9CQUFvQnBELEtBQUssQ0FBQ1UsRUFBRSxFQUFFLENBQUM7ZUFDOUQsQ0FBQyxPQUFPSixDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDRixDQUFDLENBQUM7Z0JBQ2hCOEIsUUFBUSxDQUFDUCxLQUFLLENBQUN3QixNQUFNLENBQUNDLE9BQU8sQ0FBQztlQUM5QixTQUFTO2dCQUNUbkIsV0FBVyxDQUFDLEtBQUssQ0FBQzs7WUFFcEIsQ0FBQztZQUVELE9BQU87Y0FDTnBCLE1BQU07Y0FDTkMsUUFBUTtjQUNSUixLQUFLO2NBQ0wyQixXQUFXO2NBQ1hHLFFBQVE7Y0FDUkssUUFBUTtjQUNSVjthQUNBO1VBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbERBLElBQUFiLEtBQUEsR0FBQTFDLE9BQUE7VUFDQSxJQUFBNkUsS0FBQSxHQUFBN0UsT0FBQTtVQUVBLElBQUE4RSxXQUFBLEdBQUE5RSxPQUFBO1VBQ0EsSUFBQStFLEdBQUEsR0FBQS9FLE9BQUE7VUFDQSxJQUFBZ0YsUUFBQSxHQUFBaEYsT0FBQTtVQUVBLElBQUFpRixTQUFBLEdBQUFqRixPQUFBO1VBQ0EsSUFBQWtGLE9BQUEsR0FBQWxGLE9BQUE7VUFDQSxJQUFBbUYsVUFBQSxHQUFBbkYsT0FBQTtVQUVNLFNBQVVTLElBQUlBLENBQUM7WUFBRUo7VUFBSyxDQUFFO1lBQzdCLE1BQU07Y0FBRXFCLEtBQUs7Y0FBRXlCO1lBQUssQ0FBRSxHQUFHLElBQUE4QixTQUFBLENBQUFHLFFBQVEsRUFBQy9FLEtBQUssQ0FBQztZQUN4QyxNQUFNO2NBQUVpQyxRQUFRO2NBQUVELE1BQU07Y0FBRXVCLFFBQVE7Y0FBRUssUUFBUTtjQUFFVixTQUFTO2NBQUV6QjtZQUFLLENBQUUsR0FBRyxJQUFBb0QsT0FBQSxDQUFBaEMsT0FBTyxFQUFDeEIsS0FBSyxFQUFFckIsS0FBSyxFQUFFOEMsS0FBSyxDQUFDO1lBQy9GLElBQUksQ0FBQ3pCLEtBQUssRUFBRSxPQUFPLElBQUk7WUFFdkIsTUFBTTJELFFBQVEsR0FBRztjQUFFQSxRQUFRLEVBQUUvQyxRQUFRLElBQUlELE1BQU0sQ0FBQ2dCLElBQUksS0FBSztZQUFFLENBQUU7WUFDN0QsTUFBTWlDLFlBQVksR0FBRztjQUFFbkMsS0FBSztjQUFFOUM7WUFBSyxDQUFFO1lBRXJDLE9BQ0NxQyxLQUFBLENBQUE2QyxhQUFBLENBQUNQLFFBQUEsQ0FBQXJDLGFBQWEsQ0FBQzZDLFFBQVE7Y0FBQ3hCLEtBQUssRUFBRXNCO1lBQVksR0FDMUM1QyxLQUFBLENBQUE2QyxhQUFBLENBQUNSLEdBQUEsQ0FBQVUsYUFBYTtjQUFDQyxTQUFTLEVBQUMscUJBQXFCO2NBQUNwRCxRQUFRLEVBQUVBO1lBQVEsR0FDaEVJLEtBQUEsQ0FBQTZDLGFBQUE7Y0FBUUcsU0FBUyxFQUFDO1lBQWMsR0FDL0JoRCxLQUFBLENBQUE2QyxhQUFBLGFBQUtwQyxLQUFLLENBQUNxQixNQUFNLENBQUNtQixLQUFLLENBQU0sQ0FDckIsRUFDVGpELEtBQUEsQ0FBQTZDLGFBQUEsQ0FBQ1IsR0FBQSxDQUFBYSxhQUFhO2NBQUM5RCxLQUFLLEVBQUVBLEtBQUs7Y0FBRXFCLEtBQUssRUFBRUEsS0FBSyxDQUFDd0I7WUFBTSxFQUFJLEVBQ3BEakMsS0FBQSxDQUFBNkMsYUFBQSxDQUFDVixLQUFBLENBQUFnQixJQUFJO2NBQUM1QixRQUFRLEVBQUVBLFFBQVE7Y0FBRXlCLFNBQVMsRUFBQztZQUFpQixHQUNwRGhELEtBQUEsQ0FBQTZDLGFBQUEsQ0FBQ0osVUFBQSxDQUFBVyxjQUFjO2NBQUN2QyxTQUFTLEVBQUVBLFNBQVM7Y0FBRWxCLE1BQU0sRUFBRUE7WUFBTSxFQUFJLEVBQ3hESyxLQUFBLENBQUE2QyxhQUFBLENBQUNWLEtBQUEsQ0FBQWtCLEtBQUs7Y0FDTEMsS0FBSyxFQUFFN0MsS0FBSyxDQUFDcUIsTUFBTSxDQUFDbkIsSUFBSSxDQUFDMkMsS0FBSztjQUM5QkMsV0FBVyxFQUFFOUMsS0FBSyxDQUFDcUIsTUFBTSxDQUFDbkIsSUFBSSxDQUFDNEMsV0FBVztjQUMxQ2pDLEtBQUssRUFBRTNCLE1BQU0sQ0FBQ2dCLElBQUk7Y0FDbEJBLElBQUksRUFBQyxNQUFNO2NBQ1g2QyxJQUFJLEVBQUMsTUFBTTtjQUNYdEMsUUFBUSxFQUFFQSxRQUFRO2NBQ2xCdUMsUUFBUTtZQUFBLEVBQ1AsRUFDRnpELEtBQUEsQ0FBQTZDLGFBQUEsQ0FBQ1YsS0FBQSxDQUFBdUIsUUFBUTtjQUNSSixLQUFLLEVBQUU3QyxLQUFLLENBQUNxQixNQUFNLENBQUNsQixXQUFXLENBQUMwQyxLQUFLO2NBQ3JDM0MsSUFBSSxFQUFDLGFBQWE7Y0FDbEJXLEtBQUssRUFBRTNCLE1BQU0sQ0FBQ2lCLFdBQVc7Y0FDekIyQyxXQUFXLEVBQUU5QyxLQUFLLENBQUNxQixNQUFNLENBQUNsQixXQUFXLENBQUMyQyxXQUFXO2NBQ2pEckMsUUFBUSxFQUFFQTtZQUFRLEVBQ2pCLEVBQ0ZsQixLQUFBLENBQUE2QyxhQUFBO2NBQUtHLFNBQVMsRUFBQztZQUFjLEdBQzVCaEQsS0FBQSxDQUFBNkMsYUFBQSxDQUFDVCxXQUFBLENBQUF1QixNQUFNO2NBQUMvRCxRQUFRLEVBQUVBLFFBQVE7Y0FBQSxHQUFNK0MsUUFBUTtjQUFFaUIsT0FBTyxFQUFDLFNBQVM7Y0FBQ0osSUFBSSxFQUFDO1lBQVEsR0FDdkUvQyxLQUFLLENBQUNxQixNQUFNLENBQUMrQixPQUFPLENBQUNuRSxJQUFJLENBQ2xCLENBQ0osQ0FDQSxDQUNRLENBQ1E7VUFFM0I7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDckRBLElBQUFvRSxNQUFBLEdBQUF4RyxPQUFBO1VBQ0EsSUFBQXlHLFlBQUEsR0FBQXpHLE9BQUE7VUFDQSxJQUFBZ0YsUUFBQSxHQUFBaEYsT0FBQTtVQUVNLFNBQVU4RixjQUFjQSxDQUFDO1lBQUV2QyxTQUFTO1lBQUVsQjtVQUFNLENBQUU7WUFDbkQsTUFBTTtjQUFFaEMsS0FBSztjQUFFOEM7WUFBSyxDQUFFLEdBQUcsSUFBQTZCLFFBQUEsQ0FBQW5DLGdCQUFnQixHQUFFO1lBRTNDLElBQUksQ0FBQ3hDLEtBQUssQ0FBQ2tCLElBQUksQ0FBQ21GLE9BQU8sRUFBRUMsSUFBSSxFQUFFLE9BQU8sSUFBSTtZQUUxQyxJQUFJQyxhQUFhLEdBQUc7Y0FBRTVDLEtBQUssRUFBRSxFQUFFO2NBQUVnQyxLQUFLLEVBQUU3QyxLQUFLLENBQUMwRCxPQUFPLENBQUNDO1lBQU0sQ0FBRTtZQUU5RCxNQUFNbEQsUUFBUSxHQUFHQSxDQUFDO2NBQUVDO1lBQWEsQ0FBRSxLQUFJO2NBQ3RDLElBQUlBLGFBQWEsQ0FBQ0csS0FBSyxLQUFLM0QsS0FBSyxDQUFDa0IsSUFBSSxDQUFDUyxFQUFFLEVBQUU7Z0JBQzFDdUIsU0FBUyxDQUFDbEIsTUFBTSxJQUFHO2tCQUNsQixPQUFPO29CQUFFLEdBQUdBLE1BQU07b0JBQUUwRSxLQUFLLEVBQUUxRyxLQUFLLENBQUNrQixJQUFJLENBQUNTO2tCQUFFLENBQUU7Z0JBQzNDLENBQUMsQ0FBQztnQkFDRjs7Y0FHRHVCLFNBQVMsQ0FBQ2xCLE1BQU0sSUFBRztnQkFDbEIsT0FBTztrQkFBRSxHQUFHQSxNQUFNO2tCQUFFMEUsS0FBSyxFQUFFbEQsYUFBYSxDQUFDRyxLQUFLO2tCQUFFZ0QsY0FBYyxFQUFFbkQsYUFBYSxDQUFDRztnQkFBSyxDQUFFO2NBQ3RGLENBQUMsQ0FBQztZQUNILENBQUM7WUFFRCxNQUFNaUQsT0FBTyxHQUFHLENBQ2YsR0FBRzVHLEtBQUssQ0FBQ2tCLElBQUksQ0FBQ21GLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDTyxHQUFHLENBQUNDLElBQUksSUFBRztjQUNyQyxPQUFPO2dCQUFFbkQsS0FBSyxFQUFFbUQsSUFBSSxDQUFDbkYsRUFBRTtnQkFBRWdFLEtBQUssRUFBRW1CLElBQUksQ0FBQzlEO2NBQUksQ0FBRTtZQUM1QyxDQUFDLENBQUMsRUFDRjtjQUFFVyxLQUFLLEVBQUUzRCxLQUFLLENBQUNrQixJQUFJLENBQUNTLEVBQUU7Y0FBRWdFLEtBQUssRUFBRTdDLEtBQUssQ0FBQzBELE9BQU8sQ0FBQ087WUFBRyxDQUFFLENBQ2xEO1lBQ0QsT0FDQ1osTUFBQSxDQUFBNUIsT0FBQSxDQUFBVyxhQUFBLGNBQ0NpQixNQUFBLENBQUE1QixPQUFBLENBQUFXLGFBQUE7Y0FBTzhCLE9BQU8sRUFBQztZQUFFLEdBQUVsRSxLQUFLLENBQUMwRCxPQUFPLENBQUNiLEtBQUssQ0FBUyxFQUMvQ1EsTUFBQSxDQUFBNUIsT0FBQSxDQUFBVyxhQUFBLENBQUNrQixZQUFBLENBQUFhLFdBQVc7Y0FDWHRELEtBQUssRUFBRTNCLE1BQU0sQ0FBQzBFLEtBQUs7Y0FDbkJILGFBQWEsRUFBRUEsYUFBYTtjQUM1QnZELElBQUksRUFBQyxPQUFPO2NBQ1o0RCxPQUFPLEVBQUVBLE9BQU87Y0FDaEJyRCxRQUFRLEVBQUVBO1lBQVEsRUFDakIsQ0FDRztVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQzFDQSxJQUFBWCxNQUFBLEdBQUFqRCxPQUFBO1VBQ0EsSUFBQTBDLEtBQUEsR0FBQTFDLE9BQUE7VUFDQSxJQUFBdUgsZUFBQSxHQUFBdkgsT0FBQTtVQUNNLFNBQVVvRixRQUFRQSxDQUFDL0UsS0FBSztZQUM3QixNQUFNLENBQUNxQixLQUFLLEVBQUU4RixRQUFRLENBQUMsR0FBRzlFLEtBQUssQ0FBQ2MsUUFBUSxDQUFDbkQsS0FBSyxDQUFDcUIsS0FBSyxDQUFDO1lBRXJELE1BQU0sQ0FBQytGLFVBQVUsRUFBRXRFLEtBQUssQ0FBQyxHQUFHLElBQUFGLE1BQUEsQ0FBQXlFLFFBQVEsRUFBQ0gsZUFBQSxDQUFBSSxNQUFNLENBQUNDLFNBQVMsQ0FBQztZQUN0RGxGLEtBQUssQ0FBQ21GLFNBQVMsQ0FBQyxNQUFLO2NBQ3BCLE1BQU1qRSxRQUFRLEdBQUdBLENBQUEsS0FBSyxDQUFFLENBQUM7Y0FDekJ2RCxLQUFLLENBQUN5SCxFQUFFLENBQUMsUUFBUSxFQUFFbEUsUUFBUSxDQUFDO2NBQzVCLE1BQU1tRSxPQUFPLEdBQUdBLENBQUEsS0FBTTFILEtBQUssQ0FBQzJILEdBQUcsQ0FBQyxRQUFRLEVBQUVwRSxRQUFRLENBQUM7Y0FDbkQsT0FBT21FLE9BQU87WUFDZixDQUFDLENBQUM7WUFDRixPQUFPO2NBQ05yRyxLQUFLLEVBQUVBLEtBQUssSUFBSStGLFVBQVU7Y0FDMUJwSCxLQUFLO2NBQ0w4QzthQUNBO1VBQ0YifQ==