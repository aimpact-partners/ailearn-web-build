System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.3/page", "react@18.2.0", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@0.0.3/form", "pragmate-ui@0.0.3/link", "pragmate-ui@0.0.3/alert", "pragmate-ui@0.0.3/components", "@aimpact/chat@1.0.1/shared/components", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/chat@1.0.1/shared/hooks"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    View: void 0
  });
  return {
    setters: [function (_beyondJsWidgets015Render) {
      dependency_0 = _beyondJsWidgets015Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_beyondJsReact18Widgets103Page) {
      dependency_3 = _beyondJsReact18Widgets103Page;
    }, function (_react2) {
      dependency_4 = _react2;
    }, function (_beyondJsKernel019Routing) {
      dependency_5 = _beyondJsKernel019Routing;
    }, function (_pragmateUi003Form) {
      dependency_6 = _pragmateUi003Form;
    }, function (_pragmateUi003Link) {
      dependency_7 = _pragmateUi003Link;
    }, function (_pragmateUi003Alert) {
      dependency_8 = _pragmateUi003Alert;
    }, function (_pragmateUi003Components) {
      dependency_9 = _pragmateUi003Components;
    }, function (_aimpactChat101SharedComponents) {
      dependency_10 = _aimpactChat101SharedComponents;
    }, function (_aimpactChatSdk100Session) {
      dependency_11 = _aimpactChatSdk100Session;
    }, function (_aimpactChat101SharedHooks) {
      dependency_12 = _aimpactChat101SharedHooks;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.1.2"], ["@aimpact/chat-api", "0.2.0"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.2.0"], ["@bgroup/media-manager", "1.0.0"], ["pragmate-ui", "0.0.3"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.4"], ["socket.io-client", "4.7.1"], ["tippy.js", "6.3.7"], ["uuid", "9.0.0"], ["@beyond-js/widgets", "0.1.5"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat", "1.0.1"], ["@aimpact/ailearn-app", "0.0.23"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat@1.0.1/auth-register",
          "multibundle": true
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['react', dependency_4], ['@beyond-js/kernel/routing', dependency_5], ['pragmate-ui/form', dependency_6], ['pragmate-ui/link', dependency_7], ['pragmate-ui/alert', dependency_8], ['pragmate-ui/components', dependency_9], ['@aimpact/chat/shared/components', dependency_10], ['@aimpact/chat-sdk/session', dependency_11], ['@aimpact/chat/shared/hooks', dependency_12]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "auth-register-page",
        "vspecifier": "@aimpact/chat@1.0.1/auth-register.widget",
        "is": "page",
        "route": "/auth/register",
        "layout": "auth-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/chat@1.0.1/auth-register.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 3303386583,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _page = require("@beyond-js/react-18-widgets/page");
          var _views = require("./views");
          /*bundle*/
          class Controller extends _page.PageReactWidgetController {
            get Widget() {
              return _views.View;
            }
          }
          exports.Controller = Controller;
        }
      });

      /****************************
      INTERNAL MODULE: ./views/form
      ****************************/

      ims.set('./views/form', {
        hash: 3500352383,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RegisterForm = RegisterForm;
          var _react = require("react");
          var _routing = require("@beyond-js/kernel/routing");
          var _form = require("pragmate-ui/form");
          var _link = require("pragmate-ui/link");
          var _alert = require("pragmate-ui/alert");
          var _components = require("pragmate-ui/components");
          var _components2 = require("@aimpact/chat/shared/components");
          var _session = require("@aimpact/chat-sdk/session");
          function RegisterForm({
            texts
          }) {
            const defaultValues = {
              username: '',
              password: '',
              confirmPassword: '',
              email: '',
              fetching: false
            };
            const [values, setValues] = (0, _react.useState)(defaultValues);
            const [error, setError] = _react.default.useState('');
            const [fetching, setFetching] = _react.default.useState('');
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
            const formDisabled = {};
            const {
              username,
              password,
              confirmPassword,
              email
            } = values;
            if (!username || !password || !confirmPassword || !email) formDisabled.disabled = true;
            const handleBlur = () => {
              const currentValue = {
                ...values
              };
              if (currentValue.password !== currentValue.confirmPassword) {
                setError("Password don't match");
              }
            };
            const onSubmit = async event => {
              setFetching('default');
              const {
                confirmPassword,
                email,
                password,
                username
              } = values;
              if (password !== confirmPassword) return setError("Password don't match");
              try {
                event.preventDefault();
                const response = await _session.sessionWrapper.registerWithEmail({
                  email,
                  password,
                  username
                });
                if (!response.status) {
                  return setError(response.error);
                }
                setValues(defaultValues);
                _routing.routing.pushState('/');
              } catch (e) {
                setError("User / Password don't match");
              } finally {
                setFetching('');
              }
            };
            return _react.default.createElement("div", {
              className: 'register-form__content'
            }, _react.default.createElement("h5", {
              className: 'h2 pb-20'
            }, texts.createAccount), _react.default.createElement(_form.Form, {
              onSubmit: onSubmit
            }, _react.default.createElement(_alert.Alert, {
              message: error,
              mode: 'error',
              show: !!error,
              isClose: true
            }), _react.default.createElement("div", {
              className: 'register-form-content__container'
            }, _react.default.createElement(_components2.Input, {
              label: texts.fullName,
              type: 'text',
              name: 'username',
              value: username,
              onChange: handleChange,
              required: true
            }), _react.default.createElement(_components2.Input, {
              label: texts.password,
              type: 'password',
              name: 'password',
              value: password,
              onChange: handleChange,
              required: true
            }), _react.default.createElement(_components2.Input, {
              label: texts.confirmPassword,
              type: 'password',
              name: 'confirmPassword',
              value: confirmPassword,
              onChange: handleChange,
              onBlur: handleBlur,
              required: true
            }), _react.default.createElement(_components2.Input, {
              label: texts.email,
              type: 'text',
              name: 'email',
              value: email,
              onChange: handleChange,
              required: true
            })), _react.default.createElement("div", {
              className: 'term__container'
            }, _react.default.createElement("span", {
              className: 'tyc p2'
            }, texts.termsCondition), _react.default.createElement("div", {
              className: 'divider-section'
            }), _react.default.createElement("span", {
              className: 'conditions-title__text h5'
            }, texts.passwordConditions?.title), _react.default.createElement("ul", {
              className: 'conditions-pass__container'
            }, _react.default.createElement("li", {
              className: 'p2'
            }, texts.passwordConditions?.minimumCharacters), _react.default.createElement("li", {
              className: 'p2'
            }, texts.passwordConditions?.minimumLetters), _react.default.createElement("li", {
              className: 'p2'
            }, texts.passwordConditions?.minimumSpecial)), _react.default.createElement("div", {
              className: 'divider-section'
            })), _react.default.createElement("div", {
              className: 'form-actions'
            }, _react.default.createElement(_components.Button, {
              type: 'submit',
              ...formDisabled,
              onClick: onSubmit,
              loading: fetching === 'default',
              label: texts.signIn
            })), _react.default.createElement("div", {
              className: 'direct-login__container'
            }, _react.default.createElement("div", {
              className: 'form-actions mt-20'
            }, _react.default.createElement(_link.Link, null, texts.helpSignIn), _react.default.createElement(_link.Link, {
              href: `/auth/login`
            }, texts.alreadyAccount)))));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 86513991,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _react = require("react");
          var _components = require("@aimpact/chat/shared/components");
          var _beyond_context = require("beyond_context");
          var _hooks = require("@aimpact/chat/shared/hooks");
          var _form = require("./form");
          /*bundle*/
          function View() {
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            if (!textsReady) return null;
            return _react.default.createElement("div", {
              className: 'page-container'
            }, _react.default.createElement("div", {
              className: 'panel'
            }, _react.default.createElement("aimpact-login-presentation", null)), _react.default.createElement("div", {
              className: 'panel'
            }, _react.default.createElement("div", {
              className: 'register-container'
            }, _react.default.createElement("div", {
              className: 'register__header'
            }, _react.default.createElement(_components.ThemeSwitch, {
              text: texts.theme
            })), _react.default.createElement(_form.RegisterForm, {
              texts: texts
            }))));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsIldpZGdldCIsIlZpZXciLCJleHBvcnRzIiwiX3JlYWN0IiwiX3JvdXRpbmciLCJfZm9ybSIsIl9saW5rIiwiX2FsZXJ0IiwiX2NvbXBvbmVudHMiLCJfY29tcG9uZW50czIiLCJfc2Vzc2lvbiIsIlJlZ2lzdGVyRm9ybSIsInRleHRzIiwiZGVmYXVsdFZhbHVlcyIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJjb25maXJtUGFzc3dvcmQiLCJlbWFpbCIsImZldGNoaW5nIiwidmFsdWVzIiwic2V0VmFsdWVzIiwidXNlU3RhdGUiLCJlcnJvciIsInNldEVycm9yIiwiZGVmYXVsdCIsInNldEZldGNoaW5nIiwiaGFuZGxlQ2hhbmdlIiwiY3VycmVudFRhcmdldCIsInRhcmdldCIsImN1cnJlbnRWYWx1ZSIsIm5hbWUiLCJ2YWx1ZSIsImZvcm1EaXNhYmxlZCIsImRpc2FibGVkIiwiaGFuZGxlQmx1ciIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInJlc3BvbnNlIiwic2Vzc2lvbldyYXBwZXIiLCJyZWdpc3RlcldpdGhFbWFpbCIsInN0YXR1cyIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJlIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImNyZWF0ZUFjY291bnQiLCJGb3JtIiwiQWxlcnQiLCJtZXNzYWdlIiwibW9kZSIsInNob3ciLCJpc0Nsb3NlIiwiSW5wdXQiLCJsYWJlbCIsImZ1bGxOYW1lIiwidHlwZSIsIm9uQ2hhbmdlIiwicmVxdWlyZWQiLCJvbkJsdXIiLCJ0ZXJtc0NvbmRpdGlvbiIsInBhc3N3b3JkQ29uZGl0aW9ucyIsInRpdGxlIiwibWluaW11bUNoYXJhY3RlcnMiLCJtaW5pbXVtTGV0dGVycyIsIm1pbmltdW1TcGVjaWFsIiwiQnV0dG9uIiwib25DbGljayIsImxvYWRpbmciLCJzaWduSW4iLCJMaW5rIiwiaGVscFNpZ25JbiIsImhyZWYiLCJhbHJlYWR5QWNjb3VudCIsIl9iZXlvbmRfY29udGV4dCIsIl9ob29rcyIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsIlRoZW1lU3dpdGNoIiwidGV4dCIsInRoZW1lIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvdmlld3MvZm9ybS50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFFTztVQUFVLE1BQ1hFLFVBQVcsU0FBUUgsS0FBQSxDQUFBSSx5QkFBeUI7WUFDOUMsSUFBSUMsTUFBTUEsQ0FBQTtjQUNOLE9BQU9ILE1BQUEsQ0FBQUksSUFBSTtZQUNmOztVQUNIQyxPQUFBLENBQUFKLFVBQUEsR0FBQUEsVUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNSRCxJQUFBSyxNQUFBLEdBQUFQLE9BQUE7VUFDQSxJQUFBUSxRQUFBLEdBQUFSLE9BQUE7VUFDQSxJQUFBUyxLQUFBLEdBQUFULE9BQUE7VUFDQSxJQUFBVSxLQUFBLEdBQUFWLE9BQUE7VUFDQSxJQUFBVyxNQUFBLEdBQUFYLE9BQUE7VUFDQSxJQUFBWSxXQUFBLEdBQUFaLE9BQUE7VUFDQSxJQUFBYSxZQUFBLEdBQUFiLE9BQUE7VUFDQSxJQUFBYyxRQUFBLEdBQUFkLE9BQUE7VUFHTSxTQUFVZSxZQUFZQSxDQUFDO1lBQUVDO1VBQUssQ0FBRTtZQUNyQyxNQUFNQyxhQUFhLEdBQUc7Y0FBRUMsUUFBUSxFQUFFLEVBQUU7Y0FBRUMsUUFBUSxFQUFFLEVBQUU7Y0FBRUMsZUFBZSxFQUFFLEVBQUU7Y0FBRUMsS0FBSyxFQUFFLEVBQUU7Y0FBRUMsUUFBUSxFQUFFO1lBQUssQ0FBRTtZQUNyRyxNQUFNLENBQUNDLE1BQU0sRUFBRUMsU0FBUyxDQUFDLEdBQUcsSUFBQWpCLE1BQUEsQ0FBQWtCLFFBQVEsRUFBQ1IsYUFBYSxDQUFDO1lBQ25ELE1BQU0sQ0FBQ1MsS0FBSyxFQUFFQyxRQUFRLENBQUMsR0FBR3BCLE1BQUEsQ0FBQXFCLE9BQUssQ0FBQ0gsUUFBUSxDQUFDLEVBQUUsQ0FBQztZQUM1QyxNQUFNLENBQUNILFFBQVEsRUFBRU8sV0FBVyxDQUFDLEdBQUd0QixNQUFBLENBQUFxQixPQUFLLENBQUNILFFBQVEsQ0FBeUMsRUFBRSxDQUFDO1lBRTFGLE1BQU1LLFlBQVksR0FBR0EsQ0FBQztjQUFFQyxhQUFhLEVBQUVDO1lBQU0sQ0FBRSxLQUFJO2NBQ2xELE1BQU1DLFlBQVksR0FBRztnQkFBRSxHQUFHVjtjQUFNLENBQUU7Y0FDbENVLFlBQVksQ0FBQ0QsTUFBTSxDQUFDRSxJQUFJLENBQUMsR0FBR0YsTUFBTSxDQUFDRyxLQUFLO2NBQ3hDWCxTQUFTLENBQUNTLFlBQVksQ0FBQztjQUN2Qk4sUUFBUSxDQUFDLEVBQUUsQ0FBQztZQUNiLENBQUM7WUFFRCxNQUFNUyxZQUFZLEdBQVUsRUFBRTtZQUM5QixNQUFNO2NBQUVsQixRQUFRO2NBQUVDLFFBQVE7Y0FBRUMsZUFBZTtjQUFFQztZQUFLLENBQUUsR0FBR0UsTUFBTTtZQUM3RCxJQUFJLENBQUNMLFFBQVEsSUFBSSxDQUFDQyxRQUFRLElBQUksQ0FBQ0MsZUFBZSxJQUFJLENBQUNDLEtBQUssRUFBRWUsWUFBWSxDQUFDQyxRQUFRLEdBQUcsSUFBSTtZQUV0RixNQUFNQyxVQUFVLEdBQUdBLENBQUEsS0FBSztjQUN2QixNQUFNTCxZQUFZLEdBQUc7Z0JBQUUsR0FBR1Y7Y0FBTSxDQUFFO2NBQ2xDLElBQUlVLFlBQVksQ0FBQ2QsUUFBUSxLQUFLYyxZQUFZLENBQUNiLGVBQWUsRUFBRTtnQkFDM0RPLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQzs7WUFFbEMsQ0FBQztZQUVELE1BQU1ZLFFBQVEsR0FBRyxNQUFNQyxLQUFLLElBQUc7Y0FDOUJYLFdBQVcsQ0FBQyxTQUFTLENBQUM7Y0FDdEIsTUFBTTtnQkFBRVQsZUFBZTtnQkFBRUMsS0FBSztnQkFBRUYsUUFBUTtnQkFBRUQ7Y0FBUSxDQUFFLEdBQUdLLE1BQU07Y0FDN0QsSUFBSUosUUFBUSxLQUFLQyxlQUFlLEVBQUUsT0FBT08sUUFBUSxDQUFDLHNCQUFzQixDQUFDO2NBRXpFLElBQUk7Z0JBQ0hhLEtBQUssQ0FBQ0MsY0FBYyxFQUFFO2dCQUN0QixNQUFNQyxRQUFRLEdBQUcsTUFBTTVCLFFBQUEsQ0FBQTZCLGNBQWMsQ0FBQ0MsaUJBQWlCLENBQUM7a0JBQUV2QixLQUFLO2tCQUFFRixRQUFRO2tCQUFFRDtnQkFBUSxDQUFFLENBQUM7Z0JBRXRGLElBQUksQ0FBQ3dCLFFBQVEsQ0FBQ0csTUFBTSxFQUFFO2tCQUNyQixPQUFPbEIsUUFBUSxDQUFDZSxRQUFRLENBQUNoQixLQUFLLENBQUM7O2dCQUVoQ0YsU0FBUyxDQUFDUCxhQUFhLENBQUM7Z0JBQ3hCVCxRQUFBLENBQUFzQyxPQUFPLENBQUNDLFNBQVMsQ0FBQyxHQUFHLENBQUM7ZUFDdEIsQ0FBQyxPQUFPQyxDQUFDLEVBQUU7Z0JBQ1hyQixRQUFRLENBQUMsNkJBQTZCLENBQUM7ZUFDdkMsU0FBUztnQkFDVEUsV0FBVyxDQUFDLEVBQUUsQ0FBQzs7WUFFakIsQ0FBQztZQUVELE9BQ0N0QixNQUFBLENBQUFxQixPQUFBLENBQUFxQixhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUF3QixHQUN0QzNDLE1BQUEsQ0FBQXFCLE9BQUEsQ0FBQXFCLGFBQUE7Y0FBSUMsU0FBUyxFQUFDO1lBQVUsR0FBRWxDLEtBQUssQ0FBQ21DLGFBQWEsQ0FBTSxFQUNuRDVDLE1BQUEsQ0FBQXFCLE9BQUEsQ0FBQXFCLGFBQUEsQ0FBQ3hDLEtBQUEsQ0FBQTJDLElBQUk7Y0FBQ2IsUUFBUSxFQUFFQTtZQUFRLEdBQ3ZCaEMsTUFBQSxDQUFBcUIsT0FBQSxDQUFBcUIsYUFBQSxDQUFDdEMsTUFBQSxDQUFBMEMsS0FBSztjQUFDQyxPQUFPLEVBQUU1QixLQUFLO2NBQUU2QixJQUFJLEVBQUMsT0FBTztjQUFDQyxJQUFJLEVBQUUsQ0FBQyxDQUFDOUIsS0FBSztjQUFFK0IsT0FBTyxFQUFFO1lBQUksRUFBSSxFQUNwRWxELE1BQUEsQ0FBQXFCLE9BQUEsQ0FBQXFCLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQWtDLEdBQ2hEM0MsTUFBQSxDQUFBcUIsT0FBQSxDQUFBcUIsYUFBQSxDQUFDcEMsWUFBQSxDQUFBNkMsS0FBSztjQUNMQyxLQUFLLEVBQUUzQyxLQUFLLENBQUM0QyxRQUFRO2NBQ3JCQyxJQUFJLEVBQUMsTUFBTTtjQUNYM0IsSUFBSSxFQUFDLFVBQVU7Y0FDZkMsS0FBSyxFQUFFakIsUUFBUTtjQUNmNEMsUUFBUSxFQUFFaEMsWUFBWTtjQUN0QmlDLFFBQVE7WUFBQSxFQUNQLEVBQ0Z4RCxNQUFBLENBQUFxQixPQUFBLENBQUFxQixhQUFBLENBQUNwQyxZQUFBLENBQUE2QyxLQUFLO2NBQ0xDLEtBQUssRUFBRTNDLEtBQUssQ0FBQ0csUUFBUTtjQUNyQjBDLElBQUksRUFBQyxVQUFVO2NBQ2YzQixJQUFJLEVBQUMsVUFBVTtjQUNmQyxLQUFLLEVBQUVoQixRQUFRO2NBQ2YyQyxRQUFRLEVBQUVoQyxZQUFZO2NBQ3RCaUMsUUFBUTtZQUFBLEVBQ1AsRUFDRnhELE1BQUEsQ0FBQXFCLE9BQUEsQ0FBQXFCLGFBQUEsQ0FBQ3BDLFlBQUEsQ0FBQTZDLEtBQUs7Y0FDTEMsS0FBSyxFQUFFM0MsS0FBSyxDQUFDSSxlQUFlO2NBQzVCeUMsSUFBSSxFQUFDLFVBQVU7Y0FDZjNCLElBQUksRUFBQyxpQkFBaUI7Y0FDdEJDLEtBQUssRUFBRWYsZUFBZTtjQUN0QjBDLFFBQVEsRUFBRWhDLFlBQVk7Y0FDdEJrQyxNQUFNLEVBQUUxQixVQUFVO2NBQ2xCeUIsUUFBUTtZQUFBLEVBQ1AsRUFDRnhELE1BQUEsQ0FBQXFCLE9BQUEsQ0FBQXFCLGFBQUEsQ0FBQ3BDLFlBQUEsQ0FBQTZDLEtBQUs7Y0FDTEMsS0FBSyxFQUFFM0MsS0FBSyxDQUFDSyxLQUFLO2NBQ2xCd0MsSUFBSSxFQUFDLE1BQU07Y0FDWDNCLElBQUksRUFBQyxPQUFPO2NBQ1pDLEtBQUssRUFBRWQsS0FBSztjQUNaeUMsUUFBUSxFQUFFaEMsWUFBWTtjQUN0QmlDLFFBQVE7WUFBQSxFQUNQLENBQ0csRUFFTnhELE1BQUEsQ0FBQXFCLE9BQUEsQ0FBQXFCLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQWlCLEdBQy9CM0MsTUFBQSxDQUFBcUIsT0FBQSxDQUFBcUIsYUFBQTtjQUFNQyxTQUFTLEVBQUM7WUFBUSxHQUFFbEMsS0FBSyxDQUFDaUQsY0FBYyxDQUFRLEVBQ3REMUQsTUFBQSxDQUFBcUIsT0FBQSxDQUFBcUIsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBaUIsRUFBRyxFQUNuQzNDLE1BQUEsQ0FBQXFCLE9BQUEsQ0FBQXFCLGFBQUE7Y0FBTUMsU0FBUyxFQUFDO1lBQTJCLEdBQUVsQyxLQUFLLENBQUNrRCxrQkFBa0IsRUFBRUMsS0FBSyxDQUFRLEVBQ3BGNUQsTUFBQSxDQUFBcUIsT0FBQSxDQUFBcUIsYUFBQTtjQUFJQyxTQUFTLEVBQUM7WUFBNEIsR0FDekMzQyxNQUFBLENBQUFxQixPQUFBLENBQUFxQixhQUFBO2NBQUlDLFNBQVMsRUFBQztZQUFJLEdBQUVsQyxLQUFLLENBQUNrRCxrQkFBa0IsRUFBRUUsaUJBQWlCLENBQU0sRUFDckU3RCxNQUFBLENBQUFxQixPQUFBLENBQUFxQixhQUFBO2NBQUlDLFNBQVMsRUFBQztZQUFJLEdBQUVsQyxLQUFLLENBQUNrRCxrQkFBa0IsRUFBRUcsY0FBYyxDQUFNLEVBQ2xFOUQsTUFBQSxDQUFBcUIsT0FBQSxDQUFBcUIsYUFBQTtjQUFJQyxTQUFTLEVBQUM7WUFBSSxHQUFFbEMsS0FBSyxDQUFDa0Qsa0JBQWtCLEVBQUVJLGNBQWMsQ0FBTSxDQUM5RCxFQUNML0QsTUFBQSxDQUFBcUIsT0FBQSxDQUFBcUIsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBaUIsRUFBRyxDQUM5QixFQUVOM0MsTUFBQSxDQUFBcUIsT0FBQSxDQUFBcUIsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBYyxHQUM1QjNDLE1BQUEsQ0FBQXFCLE9BQUEsQ0FBQXFCLGFBQUEsQ0FBQ3JDLFdBQUEsQ0FBQTJELE1BQU07Y0FDTlYsSUFBSSxFQUFDLFFBQVE7Y0FBQSxHQUNUekIsWUFBWTtjQUNoQm9DLE9BQU8sRUFBRWpDLFFBQVE7Y0FDakJrQyxPQUFPLEVBQUVuRCxRQUFRLEtBQUssU0FBUztjQUMvQnFDLEtBQUssRUFBRTNDLEtBQUssQ0FBQzBEO1lBQU0sRUFDbEIsQ0FDRyxFQUVObkUsTUFBQSxDQUFBcUIsT0FBQSxDQUFBcUIsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBeUIsR0FDdkMzQyxNQUFBLENBQUFxQixPQUFBLENBQUFxQixhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUFvQixHQUNsQzNDLE1BQUEsQ0FBQXFCLE9BQUEsQ0FBQXFCLGFBQUEsQ0FBQ3ZDLEtBQUEsQ0FBQWlFLElBQUksUUFBRTNELEtBQUssQ0FBQzRELFVBQVUsQ0FBUSxFQUMvQnJFLE1BQUEsQ0FBQXFCLE9BQUEsQ0FBQXFCLGFBQUEsQ0FBQ3ZDLEtBQUEsQ0FBQWlFLElBQUk7Y0FBQ0UsSUFBSSxFQUFFO1lBQWEsR0FBRzdELEtBQUssQ0FBQzhELGNBQWMsQ0FBUSxDQUNuRCxDQUNELENBQ0EsQ0FDRjtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQy9IQSxJQUFBdkUsTUFBQSxHQUFBUCxPQUFBO1VBRUEsSUFBQVksV0FBQSxHQUFBWixPQUFBO1VBQ0EsSUFBQStFLGVBQUEsR0FBQS9FLE9BQUE7VUFDQSxJQUFBZ0YsTUFBQSxHQUFBaEYsT0FBQTtVQUNBLElBQUFTLEtBQUEsR0FBQVQsT0FBQTtVQUVPO1VBQVUsU0FDUkssSUFBSUEsQ0FBQTtZQUNaLE1BQU0sQ0FBQzRFLFVBQVUsRUFBRWpFLEtBQUssQ0FBQyxHQUFHLElBQUFnRSxNQUFBLENBQUFFLFFBQVEsRUFBQ0gsZUFBQSxDQUFBSSxNQUFNLENBQUNDLFNBQVMsQ0FBQztZQUV0RCxJQUFJLENBQUNILFVBQVUsRUFBRSxPQUFPLElBQUk7WUFFNUIsT0FDQzFFLE1BQUEsQ0FBQXFCLE9BQUEsQ0FBQXFCLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQWdCLEdBQzlCM0MsTUFBQSxDQUFBcUIsT0FBQSxDQUFBcUIsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBTyxHQUNyQjNDLE1BQUEsQ0FBQXFCLE9BQUEsQ0FBQXFCLGFBQUEsb0NBQThCLENBQ3pCLEVBQ04xQyxNQUFBLENBQUFxQixPQUFBLENBQUFxQixhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUFPLEdBQ3JCM0MsTUFBQSxDQUFBcUIsT0FBQSxDQUFBcUIsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBb0IsR0FDbEMzQyxNQUFBLENBQUFxQixPQUFBLENBQUFxQixhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUFrQixHQUNoQzNDLE1BQUEsQ0FBQXFCLE9BQUEsQ0FBQXFCLGFBQUEsQ0FBQ3JDLFdBQUEsQ0FBQXlFLFdBQVc7Y0FBQ0MsSUFBSSxFQUFFdEUsS0FBSyxDQUFDdUU7WUFBSyxFQUFJLENBQzdCLEVBRU5oRixNQUFBLENBQUFxQixPQUFBLENBQUFxQixhQUFBLENBQUN4QyxLQUFBLENBQUFNLFlBQVk7Y0FBQ0MsS0FBSyxFQUFFQTtZQUFLLEVBQUksQ0FDekIsQ0FDRCxDQUNEO1VBRVIifQ==