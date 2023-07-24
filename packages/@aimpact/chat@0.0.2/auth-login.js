System.register(["@beyond-js/widgets@0.1.4/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@0.0.6/page", "react@18.2.0", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@0.0.36/form", "pragmate-ui@0.0.36/icons", "pragmate-ui@0.0.36/link", "pragmate-ui@0.0.36/alert", "@aimpact/chat@0.0.2/shared/icons", "@aimpact/chat@0.0.2/shared/components", "@aimpact/chat@0.0.2/session"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    View: void 0
  });
  return {
    setters: [function (_beyondJsWidgets014Render) {
      dependency_0 = _beyondJsWidgets014Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_beyondJsReact18Widgets006Page) {
      dependency_3 = _beyondJsReact18Widgets006Page;
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
    }, function (_aimpactChat002SharedIcons) {
      dependency_10 = _aimpactChat002SharedIcons;
    }, function (_aimpactChat002SharedComponents) {
      dependency_11 = _aimpactChat002SharedComponents;
    }, function (_aimpactChat002Session) {
      dependency_12 = _aimpactChat002Session;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.1.2"], ["@aimpact/chat-api", "1.0.0"], ["@aimpact/chat-sdk", "0.0.1"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@beyond-js/widgets", "0.1.4"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.9.0"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.3"], ["socket.io-client", "4.7.1"], ["uuid", "9.0.0"], ["@aimpact/chat", "0.0.2"], ["@aimpact/ailearn-app", "0.0.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat@0.0.2/auth-login"
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['react', dependency_4], ['@beyond-js/kernel/routing', dependency_5], ['pragmate-ui/form', dependency_6], ['pragmate-ui/icons', dependency_7], ['pragmate-ui/link', dependency_8], ['pragmate-ui/alert', dependency_9], ['@aimpact/chat/shared/icons', dependency_10], ['@aimpact/chat/shared/components', dependency_11], ['@aimpact/chat/session', dependency_12]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "auth-login-page",
        "vspecifier": "@aimpact/chat@0.0.2/auth-login",
        "is": "page",
        "route": "/auth/login",
        "layout": "auth-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/chat@0.0.2/auth-login');
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
        hash: 1060697363,
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
          var _session = require("@aimpact/chat/session");
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
                const response = await _session.sessionWrapper.login(email, password);
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
              show: error.length,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFFBQVE7Y0FDakJxQixPQUFPLEVBQUUxQyxRQUFRLElBQUksU0FBUztjQUM5Qm9DLEtBQUssRUFBQztZQUFTLEVBQ2QsQ0FDRyxFQUNOeEM7Y0FBSTRCLFNBQVMsRUFBQztZQUFjLGtDQUFrQyxFQUM5RDVCO2NBQUs0QixTQUFTLEVBQUM7WUFBYyxHQUM1QjVCLG9CQUFDNEMsWUFBTTtjQUNOYixJQUFJLEVBQUMsUUFBUTtjQUNiYyxPQUFPLEVBQUUvQixRQUFRO2NBQ2pCZ0MsT0FBTyxFQUFFMUMsUUFBUSxJQUFJLFFBQVE7Y0FDN0JvQyxLQUFLLEVBQUM7WUFBZ0IsRUFDckIsRUFDRnhDLG9CQUFDNEMsWUFBTTtjQUNOL0IsUUFBUTtjQUNSa0IsSUFBSSxFQUFDLFVBQVU7Y0FDZmMsT0FBTyxFQUFFL0IsUUFBUTtjQUNqQmdDLE9BQU8sRUFBRTFDLFFBQVEsSUFBSSxVQUFVO2NBQy9Cb0MsS0FBSyxFQUFDO1lBQWtCLEVBQ3ZCLENBQ0csRUFDTnhDO2NBQUs0QixTQUFTLEVBQUM7WUFBYyxHQUM1QjVCLG9CQUFDK0MsVUFBSSxnQ0FBNkIsRUFDbEMvQyxvQkFBQytDLFVBQUk7Y0FBQ0MsSUFBSSxFQUFFO1lBQWdCLDJCQUE4QixDQUNyRCxDQUNBLENBQ0YsQ0FDRDtVQUVSIiwibmFtZXMiOlsiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJXaWRnZXQiLCJWaWV3IiwiZXhwb3J0cyIsImRlZmF1bHRWYWx1ZXMiLCJlbWFpbCIsInBhc3N3b3JkIiwidmFsdWVzIiwic2V0VmFsdWVzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImVycm9yIiwic2V0RXJyb3IiLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwiaGFuZGxlQ2hhbmdlIiwiY3VycmVudFRhcmdldCIsInRhcmdldCIsImN1cnJlbnRWYWx1ZSIsIm5hbWUiLCJ2YWx1ZSIsImZvcm1EaXNhYmxlZCIsImRpc2FibGVkIiwib25Hb29nbGUiLCJldmVudCIsInJlc3BvbnNlIiwic2Vzc2lvbldyYXBwZXIiLCJzaWduSW5XaXRoR29vZ2xlIiwic3RhdHVzIiwicm91dGluZyIsInB1c2hTdGF0ZSIsImUiLCJjb25zb2xlIiwibWVzc2FnZSIsIm9uU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJsb2dpbiIsImNsYXNzTmFtZSIsIlRoZW1lU3dpdGNoZXIiLCJJY29uIiwiaWNvbiIsIklDT05TIiwiRm9ybSIsIkFsZXJ0IiwibW9kZSIsInNob3ciLCJsZW5ndGgiLCJpc0Nsb3NlIiwiSW5wdXQiLCJsYWJlbCIsInR5cGUiLCJvbkNoYW5nZSIsInJlcXVpcmVkIiwiQnV0dG9uIiwib25DbGljayIsImxvYWRpbmciLCJMaW5rIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsid2lkZ2V0L3RzL2NvbnRyb2xsZXIudHMiLCJ3aWRnZXQvdHMvdmlld3MvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsXX0=