System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "react@18.2.0", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@1.0.0-beta.2/form", "pragmate-ui@1.0.0-beta.2/link", "pragmate-ui@1.0.0-beta.2/alert", "pragmate-ui@1.0.0-beta.2/components", "@aimpact/auth@0.0.1/components", "@aimpact/chat-sdk@1.0.1/session", "@beyond-js/react-18-widgets@1.1.2/hooks"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    View: void 0
  });
  return {
    setters: [function (_beyondJsWidgets110Render) {
      dependency_0 = _beyondJsWidgets110Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_beyondJsReact18Widgets112Page) {
      dependency_3 = _beyondJsReact18Widgets112Page;
    }, function (_react2) {
      dependency_4 = _react2;
    }, function (_beyondJsKernel019Routing) {
      dependency_5 = _beyondJsKernel019Routing;
    }, function (_pragmateUi100Beta2Form) {
      dependency_6 = _pragmateUi100Beta2Form;
    }, function (_pragmateUi100Beta2Link) {
      dependency_7 = _pragmateUi100Beta2Link;
    }, function (_pragmateUi100Beta2Alert) {
      dependency_8 = _pragmateUi100Beta2Alert;
    }, function (_pragmateUi100Beta2Components) {
      dependency_9 = _pragmateUi100Beta2Components;
    }, function (_aimpactAuth001Components) {
      dependency_10 = _aimpactAuth001Components;
    }, function (_aimpactChatSdk101Session) {
      dependency_11 = _aimpactChatSdk101Session;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_12 = _beyondJsReact18Widgets112Hooks;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-sdk", "1.0.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.2"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@beyond-js/widgets", "1.1.0"], ["framer-motion", "11.3.21"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["socket.io-client", "4.7.3"], ["wavesurfer.js", "7.8.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.46"], ["@types/react-dom", "18.2.18"], ["@aimpact/auth", "0.0.1"], ["@aimpact/ailearn-app", "0.1.6-dev.01"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/auth@0.0.1/auth-register",
          "multibundle": true
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['react', dependency_4], ['@beyond-js/kernel/routing', dependency_5], ['pragmate-ui/form', dependency_6], ['pragmate-ui/link', dependency_7], ['pragmate-ui/alert', dependency_8], ['pragmate-ui/components', dependency_9], ['@aimpact/auth/components', dependency_10], ['@aimpact/chat-sdk/session', dependency_11], ['@beyond-js/react-18-widgets/hooks', dependency_12]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "auth-register-page",
        "vspecifier": "@aimpact/auth@0.0.1/auth-register.widget",
        "is": "page",
        "route": "/auth/register",
        "layout": "auth-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/auth@0.0.1/auth-register.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 1999589969,
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
        hash: 4172421684,
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
          var _components2 = require("@aimpact/auth/components");
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
            const [error, setError] = (0, _react.useState)('');
            const [fetching, setFetching] = (0, _react.useState)('');
            const handleChange = ({
              currentTarget: target
            }) => {
              setValues(prevValues => ({
                ...prevValues,
                [target.name]: target.value
              }));
              setError('');
            };
            const formDisabled = !values.username || !values.password || !values.confirmPassword || !values.email;
            const configError = message => {
              setError(message);
            };
            const validatePassword = () => {
              const regex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[A-Z])(?=.*[a-z]).{8,32}$/;
              if (values.password !== values.confirmPassword) {
                configError(texts.errorMessages.match);
              } else if (!regex.test(values.password)) {
                if (values.password.length < 8 || values.password.length > 32) {
                  configError(texts.errorMessages.minimumCharacters);
                } else if (!/[A-Za-z]/.test(values.password)) {
                  configError(texts.errorMessages.minimumLetters);
                } else if (!/[0-9!@#$%^&*()-_=+{};:,<.>/?]/.test(values.password)) {
                  configError(texts.errorMessages.minimumNumbers);
                } else if (!/(?=.*[A-Z])/.test(values.password)) {
                  configError(texts.errorMessages.minimumUpper);
                } else if (!/(?=.*[a-z])/.test(values.password)) {
                  configError(texts.errorMessages.minimumLower);
                } else if (!/(?=.*[!@#$%^&*(),.?":{}|<>])/.test(values.password)) {
                  configError(texts.errorMessages.minimumSpecial);
                }
              }
            };
            const onSubmit = async event => {
              setFetching('default');
              try {
                event.preventDefault();
                const response = await _session.sessionWrapper.registerWithEmail(values);
                if (!response.status) {
                  if (response.error === 'Firebase: Error (auth/invalid-email).') return setError(texts.errorMessages.email);
                  if (response.error === 'Firebase: Error (auth/email-already-in-use).') return setError(texts.errorMessages.emailExist);
                  if (response.error === 'Firebase: Error (auth/network-request-failed).') return setError(texts.errorMessages.lostConnection);
                  return setError(texts.errorMessages.internalFail);
                }
                setValues(defaultValues);
                _routing.routing.pushState('/');
              } catch (e) {
                setError(texts.errorMessages.internalFail);
              } finally {
                setFetching('');
              }
            };
            return _react.default.createElement("div", {
              className: 'register-form__content'
            }, _react.default.createElement("h3", {
              className: 'register-title__text'
            }, texts.createAccount), _react.default.createElement(_alert.Alert, {
              className: `password-error__alert ${error && ' visible'}`,
              message: error,
              type: 'error',
              show: !!error,
              isClose: true
            }), _react.default.createElement(_form.Form, {
              className: 'form-register',
              onSubmit: onSubmit
            }, _react.default.createElement("div", {
              className: `register-form-content__container ${error && ' visible'}`
            }, _react.default.createElement(_components2.Input, {
              label: texts.fullName,
              type: 'text',
              name: 'username',
              value: values.username,
              onChange: handleChange,
              required: true
            }), _react.default.createElement(_components2.Input, {
              label: texts.password,
              type: 'password',
              name: 'password',
              value: values.password,
              onChange: handleChange,
              required: true
            }), _react.default.createElement(_components2.Input, {
              label: texts.confirmPassword,
              type: 'password',
              name: 'confirmPassword',
              value: values.confirmPassword,
              onChange: handleChange,
              onBlur: validatePassword,
              required: true
            }), _react.default.createElement(_components2.Input, {
              label: texts.email,
              type: 'text',
              name: 'email',
              value: values.email,
              onChange: handleChange,
              required: true
            })), _react.default.createElement("div", {
              className: 'term__container'
            }, _react.default.createElement("span", {
              className: 'tyc p2'
            }, texts.termsCondition), _react.default.createElement("div", {
              className: 'divider-section'
            }), _react.default.createElement("span", {
              className: 'conditions-title__text h6'
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
            }), _react.default.createElement("div", {
              className: 'form-actions'
            }, _react.default.createElement(_components.Button, {
              type: 'submit',
              variant: 'primary',
              disabled: formDisabled,
              onClick: onSubmit,
              loading: fetching === 'default',
              label: texts.submit
            }))), _react.default.createElement("div", {
              className: 'direct-login__container'
            }, _react.default.createElement("div", {
              className: 'form-actions mt-20'
            }, _react.default.createElement(_link.Link, {
              className: 'h6'
            }, texts.helpSignIn), _react.default.createElement(_link.Link, {
              href: `/auth/login`,
              className: 'h6'
            }, texts.alreadyAccount)))));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 1673552028,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _react = require("react");
          var _components = require("@aimpact/auth/components");
          var _beyond_context = require("beyond_context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _form = require("./form");
          /*bundle*/
          function View() {
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            if (!textsReady) return null;
            return _react.default.createElement("div", {
              className: 'auth-page-container'
            }, _react.default.createElement("div", {
              className: 'first-panel'
            }, _react.default.createElement("aimpact-login-presentation", {
              "dynamic-children": true
            })), _react.default.createElement("div", {
              className: 'second-panel'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsIldpZGdldCIsIlZpZXciLCJleHBvcnRzIiwiX3JlYWN0IiwiX3JvdXRpbmciLCJfZm9ybSIsIl9saW5rIiwiX2FsZXJ0IiwiX2NvbXBvbmVudHMiLCJfY29tcG9uZW50czIiLCJfc2Vzc2lvbiIsIlJlZ2lzdGVyRm9ybSIsInRleHRzIiwiZGVmYXVsdFZhbHVlcyIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJjb25maXJtUGFzc3dvcmQiLCJlbWFpbCIsImZldGNoaW5nIiwidmFsdWVzIiwic2V0VmFsdWVzIiwidXNlU3RhdGUiLCJlcnJvciIsInNldEVycm9yIiwic2V0RmV0Y2hpbmciLCJoYW5kbGVDaGFuZ2UiLCJjdXJyZW50VGFyZ2V0IiwidGFyZ2V0IiwicHJldlZhbHVlcyIsIm5hbWUiLCJ2YWx1ZSIsImZvcm1EaXNhYmxlZCIsImNvbmZpZ0Vycm9yIiwibWVzc2FnZSIsInZhbGlkYXRlUGFzc3dvcmQiLCJyZWdleCIsImVycm9yTWVzc2FnZXMiLCJtYXRjaCIsInRlc3QiLCJsZW5ndGgiLCJtaW5pbXVtQ2hhcmFjdGVycyIsIm1pbmltdW1MZXR0ZXJzIiwibWluaW11bU51bWJlcnMiLCJtaW5pbXVtVXBwZXIiLCJtaW5pbXVtTG93ZXIiLCJtaW5pbXVtU3BlY2lhbCIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInJlc3BvbnNlIiwic2Vzc2lvbldyYXBwZXIiLCJyZWdpc3RlcldpdGhFbWFpbCIsInN0YXR1cyIsImVtYWlsRXhpc3QiLCJsb3N0Q29ubmVjdGlvbiIsImludGVybmFsRmFpbCIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJlIiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJjcmVhdGVBY2NvdW50IiwiQWxlcnQiLCJ0eXBlIiwic2hvdyIsImlzQ2xvc2UiLCJGb3JtIiwiSW5wdXQiLCJsYWJlbCIsImZ1bGxOYW1lIiwib25DaGFuZ2UiLCJyZXF1aXJlZCIsIm9uQmx1ciIsInRlcm1zQ29uZGl0aW9uIiwicGFzc3dvcmRDb25kaXRpb25zIiwidGl0bGUiLCJCdXR0b24iLCJ2YXJpYW50IiwiZGlzYWJsZWQiLCJvbkNsaWNrIiwibG9hZGluZyIsInN1Ym1pdCIsIkxpbmsiLCJoZWxwU2lnbkluIiwiaHJlZiIsImFscmVhZHlBY2NvdW50IiwiX2JleW9uZF9jb250ZXh0IiwiX2hvb2tzIiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwiVGhlbWVTd2l0Y2giLCJ0ZXh0IiwidGhlbWUiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy92aWV3cy9mb3JtLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUVPO1VBQVUsTUFDWEUsVUFBVyxTQUFRSCxLQUFBLENBQUFJLHlCQUF5QjtZQUNqRCxJQUFJQyxNQUFNQSxDQUFBO2NBQ1QsT0FBT0gsTUFBQSxDQUFBSSxJQUFJO1lBQ1o7O1VBQ0FDLE9BQUEsQ0FBQUosVUFBQSxHQUFBQSxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1JELElBQUFLLE1BQUEsR0FBQVAsT0FBQTtVQUNBLElBQUFRLFFBQUEsR0FBQVIsT0FBQTtVQUNBLElBQUFTLEtBQUEsR0FBQVQsT0FBQTtVQUNBLElBQUFVLEtBQUEsR0FBQVYsT0FBQTtVQUNBLElBQUFXLE1BQUEsR0FBQVgsT0FBQTtVQUNBLElBQUFZLFdBQUEsR0FBQVosT0FBQTtVQUNBLElBQUFhLFlBQUEsR0FBQWIsT0FBQTtVQUNBLElB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