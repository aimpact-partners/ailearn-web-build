System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "react@18.2.0", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@1.0.0-beta.2/form", "pragmate-ui@1.0.0-beta.2/components", "pragmate-ui@1.0.0-beta.2/alert", "@aimpact/auth@0.0.1/components", "@aimpact/chat-sdk@1.1.0/session", "@beyond-js/react-18-widgets@1.1.2/hooks"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
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
    }, function (_pragmateUi100Beta2Components) {
      dependency_7 = _pragmateUi100Beta2Components;
    }, function (_pragmateUi100Beta2Alert) {
      dependency_8 = _pragmateUi100Beta2Alert;
    }, function (_aimpactAuth001Components) {
      dependency_9 = _aimpactAuth001Components;
    }, function (_aimpactChatSdk110Session) {
      dependency_10 = _aimpactChatSdk110Session;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_11 = _beyondJsReact18Widgets112Hooks;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-sdk", "1.1.0"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.2"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@beyond-js/widgets", "1.1.0"], ["framer-motion", "11.3.21"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["socket.io-client", "4.7.3"], ["wavesurfer.js", "7.8.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.46"], ["@types/react-dom", "18.2.18"], ["@aimpact/auth", "0.0.1"], ["@aimpact/ailearn-app", "0.1.6-dev.11"]]);
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['react', dependency_4], ['@beyond-js/kernel/routing', dependency_5], ['pragmate-ui/form', dependency_6], ['pragmate-ui/components', dependency_7], ['pragmate-ui/alert', dependency_8], ['@aimpact/auth/components', dependency_9], ['@aimpact/chat-sdk/session', dependency_10], ['@beyond-js/react-18-widgets/hooks', dependency_11]]);
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
        hash: 74514831,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RegisterForm = RegisterForm;
          var _react = require("react");
          var _routing = require("@beyond-js/kernel/routing");
          var _form = require("pragmate-ui/form");
          var _components = require("pragmate-ui/components");
          var _alert = require("pragmate-ui/alert");
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
            }, _react.default.createElement(_components.Link, {
              className: 'h6'
            }, texts.helpSignIn), _react.default.createElement(_components.Link, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsIldpZGdldCIsIlZpZXciLCJleHBvcnRzIiwiX3JlYWN0IiwiX3JvdXRpbmciLCJfZm9ybSIsIl9jb21wb25lbnRzIiwiX2FsZXJ0IiwiX2NvbXBvbmVudHMyIiwiX3Nlc3Npb24iLCJSZWdpc3RlckZvcm0iLCJ0ZXh0cyIsImRlZmF1bHRWYWx1ZXMiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiY29uZmlybVBhc3N3b3JkIiwiZW1haWwiLCJmZXRjaGluZyIsInZhbHVlcyIsInNldFZhbHVlcyIsInVzZVN0YXRlIiwiZXJyb3IiLCJzZXRFcnJvciIsInNldEZldGNoaW5nIiwiaGFuZGxlQ2hhbmdlIiwiY3VycmVudFRhcmdldCIsInRhcmdldCIsInByZXZWYWx1ZXMiLCJuYW1lIiwidmFsdWUiLCJmb3JtRGlzYWJsZWQiLCJjb25maWdFcnJvciIsIm1lc3NhZ2UiLCJ2YWxpZGF0ZVBhc3N3b3JkIiwicmVnZXgiLCJlcnJvck1lc3NhZ2VzIiwibWF0Y2giLCJ0ZXN0IiwibGVuZ3RoIiwibWluaW11bUNoYXJhY3RlcnMiLCJtaW5pbXVtTGV0dGVycyIsIm1pbmltdW1OdW1iZXJzIiwibWluaW11bVVwcGVyIiwibWluaW11bUxvd2VyIiwibWluaW11bVNwZWNpYWwiLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJyZXNwb25zZSIsInNlc3Npb25XcmFwcGVyIiwicmVnaXN0ZXJXaXRoRW1haWwiLCJzdGF0dXMiLCJlbWFpbEV4aXN0IiwibG9zdENvbm5lY3Rpb24iLCJpbnRlcm5hbEZhaWwiLCJyb3V0aW5nIiwicHVzaFN0YXRlIiwiZSIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiY3JlYXRlQWNjb3VudCIsIkFsZXJ0IiwidHlwZSIsInNob3ciLCJpc0Nsb3NlIiwiRm9ybSIsIklucHV0IiwibGFiZWwiLCJmdWxsTmFtZSIsIm9uQ2hhbmdlIiwicmVxdWlyZWQiLCJvbkJsdXIiLCJ0ZXJtc0NvbmRpdGlvbiIsInBhc3N3b3JkQ29uZGl0aW9ucyIsInRpdGxlIiwiQnV0dG9uIiwidmFyaWFudCIsImRpc2FibGVkIiwib25DbGljayIsImxvYWRpbmciLCJzdWJtaXQiLCJMaW5rIiwiaGVscFNpZ25JbiIsImhyZWYiLCJhbHJlYWR5QWNjb3VudCIsIl9iZXlvbmRfY29udGV4dCIsIl9ob29rcyIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsIlRoZW1lU3dpdGNoIiwidGV4dCIsInRoZW1lIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvdmlld3MvZm9ybS50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBRU87VUFBVSxNQUNYRSxVQUFXLFNBQVFILEtBQUEsQ0FBQUkseUJBQXlCO1lBQ2pELElBQUlDLE1BQU1BLENBQUE7Y0FDVCxPQUFPSCxNQUFBLENBQUFJLElBQUk7WUFDWjs7VUFDQUMsT0FBQSxDQUFBSixVQUFBLEdBQUFBLFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDUkQsSUFBQUssTUFBQSxHQUFBUCxPQUFBO1VBQ0EsSUFBQVEsUUFBQSxHQUFBUixPQUFBO1VBQ0EsSUFBQVMsS0FBQSxHQUFBVCxPQUFBO1VBQ0EsSUFBQVUsV0FBQSxHQUFBVixPQUFBO1VBQ0EsSUFBQVcsTUFBQSxHQUFBWCxPQUFBO1VBRUEsSUFBQVksWUFBQSxHQUFBWixPQUFBO1VBQ0EsSUFBQWEsUUFBQSxHQUFBYixPQUFBO1VBRU0sU0FBVWMsWUFBWUEs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