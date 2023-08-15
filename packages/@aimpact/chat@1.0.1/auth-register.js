System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.1/page", "react@18.2.0", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@0.0.36/form", "pragmate-ui@0.0.36/link", "pragmate-ui@0.0.36/icons", "pragmate-ui@0.0.36/alert", "@aimpact/chat@1.0.1/shared/icons", "@aimpact/chat@1.0.1/shared/components", "@aimpact/chat-sdk@1.0.0/session"], function (_export, _context) {
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
    }, function (_beyondJsReact18Widgets101Page) {
      dependency_3 = _beyondJsReact18Widgets101Page;
    }, function (_react) {
      dependency_4 = _react;
    }, function (_beyondJsKernel019Routing) {
      dependency_5 = _beyondJsKernel019Routing;
    }, function (_pragmateUi0036Form) {
      dependency_6 = _pragmateUi0036Form;
    }, function (_pragmateUi0036Link) {
      dependency_7 = _pragmateUi0036Link;
    }, function (_pragmateUi0036Icons) {
      dependency_8 = _pragmateUi0036Icons;
    }, function (_pragmateUi0036Alert) {
      dependency_9 = _pragmateUi0036Alert;
    }, function (_aimpactChat101SharedIcons) {
      dependency_10 = _aimpactChat101SharedIcons;
    }, function (_aimpactChat101SharedComponents) {
      dependency_11 = _aimpactChat101SharedComponents;
    }, function (_aimpactChatSdk100Session) {
      dependency_12 = _aimpactChatSdk100Session;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.1.2"], ["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["@beyond-js/widgets", "0.1.5"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.4"], ["socket.io-client", "4.7.2"], ["uuid", "9.0.0"], ["@types/react", "18.2.18"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat", "1.0.1"], ["@aimpact/ailearn-app", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat@1.0.1/auth-register"
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['react', dependency_4], ['@beyond-js/kernel/routing', dependency_5], ['pragmate-ui/form', dependency_6], ['pragmate-ui/link', dependency_7], ['pragmate-ui/icons', dependency_8], ['pragmate-ui/alert', dependency_9], ['@aimpact/chat/shared/icons', dependency_10], ['@aimpact/chat/shared/components', dependency_11], ['@aimpact/chat-sdk/session', dependency_12]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "auth-register-page",
        "vspecifier": "@aimpact/chat@1.0.1/auth-register",
        "is": "page",
        "route": "/auth/register",
        "layout": "auth-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/chat@1.0.1/auth-register');
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

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 2466926025,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var React = require("react");
          var _routing = require("@beyond-js/kernel/routing");
          var _form = require("pragmate-ui/form");
          var _link = require("pragmate-ui/link");
          var _icons = require("pragmate-ui/icons");
          var _alert = require("pragmate-ui/alert");
          var _icons2 = require("@aimpact/chat/shared/icons");
          var _components = require("@aimpact/chat/shared/components");
          var _session = require("@aimpact/chat-sdk/session");
          const credentials = {
            user: 'ailearn',
            password: 'ailearn01'
          };
          /*bundle*/
          function View() {
            const defaultValues = {
              username: '',
              password: '',
              confirmPassword: '',
              email: '',
              fetching: false
            };
            const [values, setValues] = React.useState(defaultValues);
            const [error, setError] = React.useState('');
            const [fetching, setFetching] = React.useState('');
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
                const response = await _session.sessionWrapper.registerWithEmail(email, password, username);
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
            return React.createElement("div", {
              className: 'page-container'
            }, React.createElement("div", {
              className: 'form-container'
            }, React.createElement(_components.ThemeSwitcher, null), React.createElement(_icons.Icon, {
              icon: _icons2.ICONS['aip-chat-logo'],
              className: 'aip-chat-logo'
            }), React.createElement("h1", null, "Create a new account"), React.createElement(_form.Form, {
              onSubmit: onSubmit
            }, React.createElement(_alert.Alert, {
              message: error,
              mode: 'error',
              show: error.length,
              isClose: true
            }), React.createElement(_components.Input, {
              label: 'Full Name',
              type: 'text',
              name: 'username',
              value: username,
              onChange: handleChange,
              required: true
            }), React.createElement(_components.Input, {
              label: 'Password',
              type: 'password',
              name: 'password',
              value: password,
              onChange: handleChange,
              required: true
            }), React.createElement(_components.Input, {
              label: 'Confirm Password',
              type: 'password',
              name: 'confirmPassword',
              value: confirmPassword,
              onChange: handleChange,
              onBlur: handleBlur,
              required: true
            }), React.createElement(_components.Input, {
              label: 'Email',
              type: 'text',
              name: 'email',
              value: email,
              onChange: handleChange,
              required: true
            }), React.createElement("h5", {
              className: 'tyc'
            }, "By creating an account you agree to our Terms of Service and Privacy Policy"), React.createElement("div", {
              className: 'form-actions'
            }, React.createElement(_form.Button, {
              type: 'submit',
              ...formDisabled,
              onClick: onSubmit,
              loading: fetching == 'default',
              label: 'Sign in'
            })), React.createElement("h3", {
              className: 'social-login'
            }, "Or sign in with social login"), React.createElement("div", {
              className: 'form-actions'
            }, React.createElement(_form.Button, {
              icon: 'google',
              onClick: onGoogle,
              loading: fetching == 'google',
              label: 'Google Sign In'
            }), React.createElement(_form.Button, {
              disabled: true,
              icon: 'facebook',
              onClick: onGoogle,
              loading: fetching == 'facebook',
              label: 'Facebook Sign In'
            })), React.createElement("div", {
              className: 'form-actions'
            }, React.createElement(_link.Link, null, "Do you need help to Sign In?"), React.createElement(_link.Link, {
              href: `/auth/login`
            }, "Already have an account?")))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsIldpZGdldCIsIlZpZXciLCJleHBvcnRzIiwiUmVhY3QiLCJfcm91dGluZyIsIl9mb3JtIiwiX2xpbmsiLCJfaWNvbnMiLCJfYWxlcnQiLCJfaWNvbnMyIiwiX2NvbXBvbmVudHMiLCJfc2Vzc2lvbiIsImNyZWRlbnRpYWxzIiwidXNlciIsInBhc3N3b3JkIiwiZGVmYXVsdFZhbHVlcyIsInVzZXJuYW1lIiwiY29uZmlybVBhc3N3b3JkIiwiZW1haWwiLCJmZXRjaGluZyIsInZhbHVlcyIsInNldFZhbHVlcyIsInVzZVN0YXRlIiwiZXJyb3IiLCJzZXRFcnJvciIsInNldEZldGNoaW5nIiwiaGFuZGxlQ2hhbmdlIiwiY3VycmVudFRhcmdldCIsInRhcmdldCIsImN1cnJlbnRWYWx1ZSIsIm5hbWUiLCJ2YWx1ZSIsImZvcm1EaXNhYmxlZCIsImRpc2FibGVkIiwib25Hb29nbGUiLCJldmVudCIsInJlc3BvbnNlIiwic2Vzc2lvbldyYXBwZXIiLCJzaWduSW5XaXRoR29vZ2xlIiwic3RhdHVzIiwicm91dGluZyIsInB1c2hTdGF0ZSIsImUiLCJjb25zb2xlIiwibWVzc2FnZSIsImhhbmRsZUJsdXIiLCJvblN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwicmVnaXN0ZXJXaXRoRW1haWwiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiVGhlbWVTd2l0Y2hlciIsIkljb24iLCJpY29uIiwiSUNPTlMiLCJGb3JtIiwiQWxlcnQiLCJtb2RlIiwic2hvdyIsImxlbmd0aCIsImlzQ2xvc2UiLCJJbnB1dCIsImxhYmVsIiwidHlwZSIsIm9uQ2hhbmdlIiwicmVxdWlyZWQiLCJvbkJsdXIiLCJCdXR0b24iLCJvbkNsaWNrIiwibG9hZGluZyIsIkxpbmsiLCJocmVmIl0sInNvdXJjZXMiOlsiL3dpZGdldC90cy9jb250cm9sbGVyLnRzIiwiL3dpZGdl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