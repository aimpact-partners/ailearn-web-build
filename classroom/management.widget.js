System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.4/page", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.1.11/model", "@aimpact/ailearn-app@0.0.24/components/ui", "react@18.2.0", "pragmate-ui@0.0.6/components", "pragmate-ui@0.0.6/form", "@beyond-js/react-18-widgets@1.0.4/hooks", "pragmate-ui@0.0.6/toast", "@beyond-js/kernel@0.1.9/routing", "@aimpact/chat@1.0.1/shared/hooks", "@aimpact/chat@1.0.1/shared/components"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, bimport, __Bundle, __pkg, ims, Controller, Header, ClassroomForm, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    Header: void 0,
    ClassroomForm: void 0,
    View: void 0
  });
  return {
    setters: [function (_beyondJsWidgets015Render) {
      dependency_0 = _beyondJsWidgets015Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_beyondJsReact18Widgets104Page) {
      dependency_3 = _beyondJsReact18Widgets104Page;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_4 = _aimpactAilearnSdk100Core;
    }, function (_beyondJsReactive1111Model) {
      dependency_5 = _beyondJsReactive1111Model;
    }, function (_aimpactAilearnApp0024ComponentsUi) {
      dependency_6 = _aimpactAilearnApp0024ComponentsUi;
    }, function (_react2) {
      dependency_7 = _react2;
    }, function (_pragmateUi006Components) {
      dependency_8 = _pragmateUi006Components;
    }, function (_pragmateUi006Form) {
      dependency_9 = _pragmateUi006Form;
    }, function (_beyondJsReact18Widgets104Hooks) {
      dependency_10 = _beyondJsReact18Widgets104Hooks;
    }, function (_pragmateUi006Toast) {
      dependency_11 = _pragmateUi006Toast;
    }, function (_beyondJsKernel019Routing) {
      dependency_12 = _beyondJsKernel019Routing;
    }, function (_aimpactChat101SharedHooks) {
      dependency_13 = _aimpactChat101SharedHooks;
    }, function (_aimpactChat101SharedComponents) {
      dependency_14 = _aimpactChat101SharedComponents;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.11"], ["pragmate-ui", "0.0.6"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@bgroup/http-suite", "1.0.3"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["framer-motion", "10.17.8"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.24"], ["@aimpact/ailearn-app", "0.0.24"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.24/classroom/management",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/ailearn-app/components/ui', dependency_6], ['react', dependency_7], ['pragmate-ui/components', dependency_8], ['pragmate-ui/form', dependency_9], ['@beyond-js/react-18-widgets/hooks', dependency_10], ['pragmate-ui/toast', dependency_11], ['@beyond-js/kernel/routing', dependency_12], ['@aimpact/chat/shared/hooks', dependency_13], ['@aimpact/chat/shared/components', dependency_14]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-classroom-management",
        "vspecifier": "@aimpact/ailearn-app@0.0.24/classroom/management.widget",
        "is": "page",
        "route": "/classroom/management/${id}",
        "layout": "general-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.24/classroom/management.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 3399872820,
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
              this.#store.load(this.uri.vars.get('id'));
            }
            hide() {
              this.#store.hide();
            }
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 38108346,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _core = require("@aimpact/ailearn-sdk/core");
          var _model = require("@beyond-js/reactive/model");
          class StoreManager extends _model.ReactiveModel {
            #model;
            get model() {
              return this.#model;
            }
            #params;
            get params() {
              return this.#params;
            }
            #objectives = [];
            get objectives() {
              return this.#objectives;
            }
            hide() {
              this.#model = undefined;
              this.ready = false;
            }
            async load(id) {
              try {
                this.ready = false;
                this.#params = id;
                const specs = id === 'new' ? {} : {
                  id
                };
                if (id === 'new' && this.#model) this.hide();
                this.#model = new _core.Classroom(specs);
                if (id !== 'new') {
                  const data = await this.#model.load({
                    id
                  });
                  this.#model = data;
                }
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
                } = await this.model.save(values);
                if (!status) {
                  throw new Error('error publishing classroom');
                }
                this.hide();
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

      /*****************************************
      INTERNAL MODULE: ./views/components/header
      *****************************************/

      ims.set('./views/components/header', {
        hash: 437109824,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Header = Header;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _react = require("react");
          /*bundle*/
          function Header({
            texts
          }) {
            return _react.default.createElement("section", null, _react.default.createElement(_ui.PageHeader, {
              breadcrumb: [['AI-Learn', '/'], ['Classroom', '/classrooms/list'], ['Management', '']]
            }), _react.default.createElement(_ui.PageTitle, {
              title: texts.title
            }, _react.default.createElement(_ui.PageSubtitle, null, texts.postTitle)));
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 1369749925,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useManageClassroomContext = exports.ManageClassroomContext = void 0;
          var _react = require("react");
          const ManageClassroomContext = exports.ManageClassroomContext = _react.default.createContext({});
          const useManageClassroomContext = () => _react.default.useContext(ManageClassroomContext);
          exports.useManageClassroomContext = useManageClassroomContext;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/empty
      *****************************/

      ims.set('./views/empty', {
        hash: 1467902510,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyClassroom = EmptyClassroom;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _context = require("./context");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          function EmptyClassroom() {
            const {
              texts
            } = (0, _context.useManageClassroomContext)();
            return _react.default.createElement(_ui.EmptyCard, {
              text: texts.empty.title,
              description: texts.empty.description,
              icon: "edit"
            }, _react.default.createElement("div", {
              className: "actions flex-container flex-center"
            }, _react.default.createElement(_components.Link, {
              href: "/classroom/management/new",
              className: "grow btn btn-primary"
            }, texts.actions.create)));
          }
        }
      });

      /****************************
      INTERNAL MODULE: ./views/form
      ****************************/

      ims.set('./views/form', {
        hash: 3645545083,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ClassroomForm = ClassroomForm;
          var _react = require("react");
          var _context = require("./context");
          var _form = require("pragmate-ui/form");
          var _components = require("pragmate-ui/components");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _toast = require("pragmate-ui/toast");
          var _routing = require("@beyond-js/kernel/routing");
          /*bundle*/
          function ClassroomForm() {
            const [isValid, setIsValid] = _react.default.useState(false);
            const [error, setError] = _react.default.useState('');
            const {
              texts,
              fetching,
              store
            } = (0, _context.useManageClassroomContext)();
            const defaultValues = {
              name: store.model.name || '',
              description: store.model.description || ''
            };
            const [values, setValues] = _react.default.useState(defaultValues);
            const disabled = {
              disabled: fetching
            };
            (0, _hooks.useBinder)([store.model], () => {
              setValues({
                name: store.model.name || '',
                description: store.model.description || ''
              });
            });
            const handleChange = ({
              currentTarget: target
            }) => {
              const currentValue = {
                ...values
              };
              currentValue[target.name] = target.value;
              setValues(currentValue);
              setError('');
            };
            const handleSubmit = async event => {
              event.preventDefault();
              event.stopPropagation();
              try {
                const formatString = inputString => inputString.trim().replace(/^\s*(.)/, (_, c) => c.toUpperCase());
                const data = await store.save({
                  name: formatString(values.name),
                  description: formatString(values.description)
                });
                _toast.toast.success('Classroom published successfully');
                _routing.routing.pushState(`/classroom/management/${data.id}`);
              } catch (e) {
                setError(e.message);
                _toast.toast.error('Error while publishing classroom');
              }
            };
            return _react.default.createElement("div", null, _react.default.createElement(_form.Form, {
              onSubmit: handleSubmit,
              className: "classroom-form__container"
            }, _react.default.createElement("div", {
              className: "form-input__container"
            }, _react.default.createElement("p", {
              className: "h3"
            }, texts.labels.name), _react.default.createElement(_form.Input, {
              placeholder: texts.labels.name,
              value: values.name,
              name: "name",
              type: "text",
              onChange: handleChange,
              required: true
            })), _react.default.createElement("div", {
              className: "form-input__container"
            }, _react.default.createElement("p", {
              className: "h3"
            }, texts.labels.description), _react.default.createElement(_form.Textarea, {
              rows: 5,
              name: "description",
              value: values.description,
              placeholder: texts.labels.description,
              onChange: handleChange,
              required: true
            })), _react.default.createElement("div", {
              className: "actions-submit__container"
            }, _react.default.createElement(_components.Button, {
              fetching: store.fetching,
              ...disabled,
              variant: "primary",
              type: "submit"
            }, texts.actions.save))));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 3677972896,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("./context");
          var _hooks = require("@aimpact/chat/shared/hooks");
          var _beyond_context = require("beyond_context");
          var _header = require("./components/header");
          var _hooks2 = require("@beyond-js/react-18-widgets/hooks");
          var _components = require("@aimpact/chat/shared/components");
          var _empty = require("./empty");
          var _form = require("./form");
          /*bundle*/
          function View({
            store
          }) {
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            const [fetching, setFetching] = _react.default.useState(store.fetching);
            const [ready, setReady] = _react.default.useState(store.ready);
            (0, _hooks2.useBinder)([store.model], () => {
              setReady(store.ready);
              setFetching(store.model?.fetching);
            });
            if (!textsReady) return _react.default.createElement(_components.PreloadScreen, null);
            const value = {
              store,
              fetching,
              texts
            };
            const cls = ` ${fetching ? 'is-fetching' : ''}`;
            const Control = store.params === 'new' ? _form.ClassroomForm : store.model?.name ? _form.ClassroomForm : _empty.EmptyClassroom;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_context.ManageClassroomContext.Provider, {
              value: value
            }, _react.default.createElement(_header.Header, {
              texts: texts
            }), _react.default.createElement(_ui.PageContainer, {
              className: cls,
              fetching: fetching
            }, _react.default.createElement("div", {
              className: "app-classroom-creation-page"
            }, _react.default.createElement(Control, null)))));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./views/components/header",
        "from": "Header",
        "name": "Header"
      }, {
        "im": "./views/form",
        "from": "ClassroomForm",
        "name": "ClassroomForm"
      }, {
        "im": "./views/index",
        "from": "View",
        "name": "View"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'Header') && _export("Header", Header = require ? require('./views/components/header').Header : value);
        (require || prop === 'ClassroomForm') && _export("ClassroomForm", ClassroomForm = require ? require('./views/form').ClassroomForm : value);
        (require || prop === 'View') && _export("View", View = require ? require('./views/index').View : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsImV4cG9ydHMiLCJfY29yZSIsIl9tb2RlbCIsIlJlYWN0aXZlTW9kZWwiLCJtb2RlbCIsInBhcmFtcyIsIm9iamVjdGl2ZXMiLCJ1bmRlZmluZWQiLCJyZWFkeSIsImlkIiwic3BlY3MiLCJDbGFzc3Jvb20iLCJkYXRhIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsImRlbGV0ZSIsImNsYXNzcm9vbXMiLCJyZW1vdmUiLCJ0cmlnZ2VyIiwic2F2ZSIsInZhbHVlcyIsImZldGNoaW5nIiwic3RhdHVzIiwiRXJyb3IiLCJfdWkiLCJfcmVhY3QiLCJIZWFkZXIiLCJ0ZXh0cyIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiUGFnZUhlYWRlciIsImJyZWFkY3J1bWIiLCJQYWdlVGl0bGUiLCJ0aXRsZSIsIlBhZ2VTdWJ0aXRsZSIsInBvc3RUaXRsZSIsIk1hbmFnZUNsYXNzcm9vbUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlTWFuYWdlQ2xhc3Nyb29tQ29udGV4dCIsInVzZUNvbnRleHQiLCJfY29tcG9uZW50cyIsIl9jb250ZXh0IiwiRW1wdHlDbGFzc3Jvb20iLCJFbXB0eUNhcmQiLCJ0ZXh0IiwiZW1wdHkiLCJkZXNjcmlwdGlvbiIsImljb24iLCJjbGFzc05hbWUiLCJMaW5rIiwiaHJlZiIsImFjdGlvbnMiLCJjcmVhdGUiLCJfZm9ybSIsIl9ob29rcyIsIl90b2FzdCIsIl9yb3V0aW5nIiwiQ2xhc3Nyb29tRm9ybSIsImlzVmFsaWQiLCJzZXRJc1ZhbGlkIiwidXNlU3RhdGUiLCJzZXRFcnJvciIsImRlZmF1bHRWYWx1ZXMiLCJuYW1lIiwic2V0VmFsdWVzIiwiZGlzYWJsZWQiLCJ1c2VCaW5kZXIiLCJoYW5kbGVDaGFuZ2UiLCJjdXJyZW50VGFyZ2V0IiwidGFyZ2V0IiwiY3VycmVudFZhbHVlIiwidmFsdWUiLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiZm9ybWF0U3RyaW5nIiwiaW5wdXRTdHJpbmciLCJ0cmltIiwicmVwbGFjZSIsIl8iLCJjIiwidG9VcHBlckNhc2UiLCJ0b2FzdCIsInN1Y2Nlc3MiLCJyb3V0aW5nIiwicHVzaFN0YXRlIiwibWVzc2FnZSIsIkZvcm0iLCJvblN1Ym1pdCIsImxhYmVscyIsIklucHV0IiwicGxhY2Vob2xkZXIiLCJ0eXBlIiwib25DaGFuZ2UiLCJyZXF1aXJlZCIsIlRleHRhcmVhIiwicm93cyIsIkJ1dHRvbiIsInZhcmlhbnQiLCJfYmV5b25kX2NvbnRleHQiLCJfaGVhZGVyIiwiX2hvb2tzMiIsIl9lbXB0eSIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInNldEZldGNoaW5nIiwic2V0UmVhZHkiLCJQcmVsb2FkU2NyZWVuIiwiY2xzIiwiQ29udHJvbCIsIkZyYWdtZW50IiwiUHJvdmlkZXIiLCJQYWdlQ29udGFpbmVyIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvY29tcG9uZW50cy9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2Zvcm0udHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFB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