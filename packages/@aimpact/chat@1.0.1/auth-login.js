System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.1/page", "react@18.2.0", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@0.0.36/form", "pragmate-ui@0.0.36/icons", "pragmate-ui@0.0.36/link", "pragmate-ui@0.0.36/alert", "@aimpact/chat@1.0.1/shared/icons", "@aimpact/chat@1.0.1/shared/components", "@aimpact/chat-sdk@1.0.0/session"], function (_export, _context) {
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
    }, function (_pragmateUi0036Icons) {
      dependency_7 = _pragmateUi0036Icons;
    }, function (_pragmateUi0036Link) {
      dependency_8 = _pragmateUi0036Link;
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
          "vspecifier": "@aimpact/chat@1.0.1/auth-login"
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['react', dependency_4], ['@beyond-js/kernel/routing', dependency_5], ['pragmate-ui/form', dependency_6], ['pragmate-ui/icons', dependency_7], ['pragmate-ui/link', dependency_8], ['pragmate-ui/alert', dependency_9], ['@aimpact/chat/shared/icons', dependency_10], ['@aimpact/chat/shared/components', dependency_11], ['@aimpact/chat-sdk/session', dependency_12]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "auth-login-page",
        "vspecifier": "@aimpact/chat@1.0.1/auth-login",
        "is": "page",
        "route": "/auth/login",
        "layout": "auth-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/chat@1.0.1/auth-login');
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

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 1892880093,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var React = require("react");
          var _routing = require("@beyond-js/kernel/routing");
          var _form = require("pragmate-ui/form");
          var _icons = require("pragmate-ui/icons");
          var _link = require("pragmate-ui/link");
          var _alert = require("pragmate-ui/alert");
          var _icons2 = require("@aimpact/chat/shared/icons");
          var _components = require("@aimpact/chat/shared/components");
          var _session = require("@aimpact/chat-sdk/session");
          /*bundle*/
          function View() {
            const defaultValues = {
              email: '',
              password: ''
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
              email,
              password
            } = values;
            if (!email || !password) formDisabled.disabled = true;
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
            const onSubmit = async event => {
              setFetching('default');
              const {
                email,
                password
              } = values;
              try {
                event.preventDefault();
                const response = await _session.sessionWrapper.auth.login(email, password);
                if (!response.status) {
                  return setError(response.error);
                }
                setValues(defaultValues);
                _routing.routing.pushState('/');
                return;
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
            }), React.createElement("h1", null, "Login in AILearn"), React.createElement(_form.Form, {
              onSubmit: onSubmit
            }, React.createElement(_alert.Alert, {
              message: error,
              mode: 'error',
              isClose: true
            }), React.createElement(_components.Input, {
              label: 'Email',
              type: 'text',
              name: 'email',
              value: email,
              onChange: handleChange,
              required: true
            }), React.createElement(_components.Input, {
              label: 'Password',
              type: 'password',
              name: 'password',
              value: password,
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
            }, React.createElement(_link.Link, null, "Forgot your password?"), React.createElement(_link.Link, {
              href: `/auth/register`
            }, "Create a new account?")))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsIldpZGdldCIsIlZpZXciLCJleHBvcnRzIiwiUmVhY3QiLCJfcm91dGluZyIsIl9mb3JtIiwiX2ljb25zIiwiX2xpbmsiLCJfYWxlcnQiLCJfaWNvbnMyIiwiX2NvbXBvbmVudHMiLCJfc2Vzc2lvbiIsImRlZmF1bHRWYWx1ZXMiLCJlbWFpbCIsInBhc3N3b3JkIiwidmFsdWVzIiwic2V0VmFsdWVzIiwidXNlU3RhdGUiLCJlcnJvciIsInNldEVycm9yIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsImhhbmRsZUNoYW5nZSIsImN1cnJlbnRUYXJnZXQiLCJ0YXJnZXQiLCJjdXJyZW50VmFsdWUiLCJuYW1lIiwidmFsdWUiLCJmb3JtRGlzYWJsZWQiLCJkaXNhYmxlZCIsIm9uR29vZ2xlIiwiZXZlbnQiLCJyZXNwb25zZSIsInNlc3Npb25XcmFwcGVyIiwic2lnbkluV2l0aEdvb2dsZSIsInN0YXR1cyIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJlIiwiY29uc29sZSIsIm1lc3NhZ2UiLCJvblN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiYXV0aCIsImxvZ2luIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIlRoZW1lU3dpdGNoZXIiLCJJY29uIiwiaWNvbiIsIklDT05TIiwiRm9ybSIsIkFsZXJ0IiwibW9kZSIsImlzQ2xvc2UiLCJJbnB1dCIsImxhYmVsIiwidHlwZSIsIm9uQ2hhbmdlIiwicmVxdWlyZWQiLCJCdXR0b24iLCJvbkNsaWNrIiwibG9hZGluZyIsIkxpbmsiLCJocmVmIl0sInNvdXJjZXMiOlsiL3dpZGdldC90cy9jb250cm9sbGVyLnRzIiwiL3dpZGdldC90cy92aWV3cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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