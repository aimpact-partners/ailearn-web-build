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
        const dependencies = new Map([["@beyond-js/reactive", "1.1.2"], ["@aimpact/chat-api", "0.2.0"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.2.0"], ["@bgroup/media-manager", "1.0.0"], ["pragmate-ui", "0.0.3"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.4"], ["socket.io-client", "4.7.1"], ["tippy.js", "6.3.7"], ["uuid", "9.0.0"], ["@beyond-js/widgets", "0.1.5"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat", "1.0.1"], ["@aimpact/ailearn-app", "0.0.24"]]);
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
        hash: 2310822034,
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
            const onGoogle = async event => {
              try {
                setFetching('google');
                const response = await _session.sessionWrapper.signInWithGoogle();
                if (!response.status) {
                  if (response.error === 'POPUP_CLOSED_BY_USER') {
                    setFetching('');
                  } else {
                    setError('Error trying to login with Google');
                  }
                  return;
                }
                setFetching('');
                _routing.routing.pushState('/');
              } catch (e) {
                console.error(e.message);
              }
            };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsIldpZGdldCIsIlZpZXciLCJleHBvcnRzIiwiX3JlYWN0IiwiX3JvdXRpbmciLCJfZm9ybSIsIl9saW5rIiwiX2FsZXJ0IiwiX2NvbXBvbmVudHMiLCJfY29tcG9uZW50czIiLCJfc2Vzc2lvbiIsIlJlZ2lzdGVyRm9ybSIsInRleHRzIiwiZGVmYXVsdFZhbHVlcyIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJjb25maXJtUGFzc3dvcmQiLCJlbWFpbCIsImZldGNoaW5nIiwidmFsdWVzIiwic2V0VmFsdWVzIiwidXNlU3RhdGUiLCJlcnJvciIsInNldEVycm9yIiwiZGVmYXVsdCIsInNldEZldGNoaW5nIiwiaGFuZGxlQ2hhbmdlIiwiY3VycmVudFRhcmdldCIsInRhcmdldCIsImN1cnJlbnRWYWx1ZSIsIm5hbWUiLCJ2YWx1ZSIsImZvcm1EaXNhYmxlZCIsImRpc2FibGVkIiwib25Hb29nbGUiLCJldmVudCIsInJlc3BvbnNlIiwic2Vzc2lvbldyYXBwZXIiLCJzaWduSW5XaXRoR29vZ2xlIiwic3RhdHVzIiwicm91dGluZyIsInB1c2hTdGF0ZSIsImUiLCJjb25zb2xlIiwibWVzc2FnZSIsImhhbmRsZUJsdXIiLCJvblN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwicmVnaXN0ZXJXaXRoRW1haWwiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiY3JlYXRlQWNjb3VudCIsIkZvcm0iLCJBbGVydCIsIm1vZGUiLCJzaG93IiwiaXNDbG9zZSIsIklucHV0IiwibGFiZWwiLCJmdWxsTmFtZSIsInR5cGUiLCJvbkNoYW5nZSIsInJlcXVpcmVkIiwib25CbHVyIiwidGVybXNDb25kaXRpb24iLCJwYXNzd29yZENvbmRpdGlvbnMiLCJ0aXRsZSIsIm1pbmltdW1DaGFyYWN0ZXJzIiwibWluaW11bUxldHRlcnMiLCJtaW5pbXVtU3BlY2lhbCIsIkJ1dHRvbiIsIm9uQ2xpY2siLCJsb2FkaW5nIiwic2lnbkluIiwiTGluayIsImhlbHBTaWduSW4iLCJocmVmIiwiYWxyZWFkeUFjY291bnQiLCJfYmV5b25kX2NvbnRleHQiLCJfaG9va3MiLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJUaGVtZVN3aXRjaCIsInRleHQiLCJ0aGVtZSJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3ZpZXdzL2Zvcm0udHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBRU87VUFBVSxNQUNYRSxVQUFXLFNBQVFILEtBQUEsQ0FBQUkseUJBQXlCO1lBQzlDLElBQUlDLE1BQU1BLENBQUE7Y0FDTixPQUFPSCxNQUFBLENBQUFJLElBQUk7WUFDZjs7VUFDSEMsT0FBQSxDQUFBSixVQUFBLEdBQUFBLFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDUkQsSUFBQUssTUFBQSxHQUFBUCxPQUFBO1VBQ0EsSUFBQVEsUUFBQSxHQUFBUixPQUFBO1VBQ0EsSUFBQVMsS0FBQSxHQUFBVCxPQUFBO1VBQ0EsSUFBQVUsS0FBQSxHQUFBVixPQUFBO1VBQ0EsSUFBQVcsTUFBQSxHQUFBWCxPQUFBO1VBQ0EsSUFBQVksV0FBQSxHQUFBWixPQUFBO1VBQ0EsSUFBQWEsWUFBQSxHQUFBYixPQUFBO1VBQ0EsSUFBQWMsUUFBQSxHQUFBZCxPQUFBO1VBR00sU0FBVWUsWUFBWUEsQ0FBQztZQUFFQztVQUFLLENBQUU7WUFDckMsTUFBTUMsYUFBYSxHQUFHO2NBQUVDLFFBQVEsRUFBRSxFQUFFO2NBQUVDLFFBQVEsRUFBRSxFQUFF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