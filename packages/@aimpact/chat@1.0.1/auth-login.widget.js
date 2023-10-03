System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/react-18-widgets@1.0.1/page", "react@18.2.0", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@0.0.37/form", "pragmate-ui@0.0.37/icons", "pragmate-ui@0.0.37/link", "pragmate-ui@0.0.37/alert", "@aimpact/chat@1.0.1/shared/icons", "pragmate-ui@0.0.37/components", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/chat@1.0.1/shared/components", "@aimpact/chat@1.0.1/shared/hooks"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    View: void 0
  });
  return {
    setters: [function (_beyondJsWidgets015Render) {
      dependency_0 = _beyondJsWidgets015Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsReact18Widgets101Page) {
      dependency_2 = _beyondJsReact18Widgets101Page;
    }, function (_react2) {
      dependency_3 = _react2;
    }, function (_beyondJsKernel019Routing) {
      dependency_4 = _beyondJsKernel019Routing;
    }, function (_pragmateUi0037Form) {
      dependency_5 = _pragmateUi0037Form;
    }, function (_pragmateUi0037Icons) {
      dependency_6 = _pragmateUi0037Icons;
    }, function (_pragmateUi0037Link) {
      dependency_7 = _pragmateUi0037Link;
    }, function (_pragmateUi0037Alert) {
      dependency_8 = _pragmateUi0037Alert;
    }, function (_aimpactChat101SharedIcons) {
      dependency_9 = _aimpactChat101SharedIcons;
    }, function (_pragmateUi0037Components) {
      dependency_10 = _pragmateUi0037Components;
    }, function (_aimpactChatSdk100Session) {
      dependency_11 = _aimpactChatSdk100Session;
    }, function (_aimpactChat101SharedComponents) {
      dependency_12 = _aimpactChat101SharedComponents;
    }, function (_aimpactChat101SharedHooks) {
      dependency_13 = _aimpactChat101SharedHooks;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.1.2"], ["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@bgroup/media-manager", "1.0.0"], ["pragmate-ui", "0.0.37"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@beyond-js/widgets", "0.1.4"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.4"], ["socket.io-client", "4.7.1"], ["tippy.js", "6.3.7"], ["uuid", "9.0.0"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat", "1.0.1"], ["@aimpact/ailearn-app", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat@1.0.1/auth-login",
          "multibundle": true
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-18-widgets/page', dependency_2], ['react', dependency_3], ['@beyond-js/kernel/routing', dependency_4], ['pragmate-ui/form', dependency_5], ['pragmate-ui/icons', dependency_6], ['pragmate-ui/link', dependency_7], ['pragmate-ui/alert', dependency_8], ['@aimpact/chat/shared/icons', dependency_9], ['pragmate-ui/components', dependency_10], ['@aimpact/chat-sdk/session', dependency_11], ['@aimpact/chat/shared/components', dependency_12], ['@aimpact/chat/shared/hooks', dependency_13]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "auth-login-page",
        "vspecifier": "@aimpact/chat@1.0.1/auth-login.widget",
        "is": "page",
        "route": "/auth/login",
        "layout": "auth-layout"
      }]);
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
        hash: 1818557016,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _react = require("react");
          var _routing = require("@beyond-js/kernel/routing");
          var _form = require("pragmate-ui/form");
          var _icons = require("pragmate-ui/icons");
          var _link = require("pragmate-ui/link");
          var _alert = require("pragmate-ui/alert");
          var _icons2 = require("@aimpact/chat/shared/icons");
          var _components = require("pragmate-ui/components");
          var _session = require("@aimpact/chat-sdk/session");
          var _components2 = require("@aimpact/chat/shared/components");
          var _beyond_context = require("beyond_context");
          var _hooks = require("@aimpact/chat/shared/hooks");
          /*bundle*/
          function View() {
            const defaultValues = {
              email: '',
              password: ''
            };
            const [values, setValues] = _react.default.useState(defaultValues);
            const [error, setError] = _react.default.useState('');
            const [textReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier); // Add this line
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
              email,
              password
            } = values;
            if (!email || !password) formDisabled.disabled = true;
            if (!textReady) return _react.default.createElement(_components.Spinner, {
              active: true,
              type: 'primary'
            });
            const onGoogle = async event => {
              try {
                setFetching('google');
                const response = await _session.sessionWrapper.signInWithGoogle();
                if (!response.status) {
                  if (response.error === 'POPUP_CLOSED_BY_USER') {
                    setFetching('');
                  } else {
                    setError(texts.errorLoginGoogle); // Replace with the semantic name
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
                // routing.pushState('/');
                return;
              } catch (e) {
                setError(texts.errorLogin); // Replace with the semantic name
              } finally {
                setFetching('');
              }
            };
            return _react.default.createElement("div", {
              className: 'page-container'
            }, _react.default.createElement("div", {
              className: 'form-container'
            }, _react.default.createElement(_components2.ThemeSwitcher, null), _react.default.createElement(_icons.Icon, {
              icon: _icons2.ICONS['aip-chat-logo'],
              className: 'aip-chat-logo'
            }), _react.default.createElement("h1", null, texts.loginTitle), _react.default.createElement(_form.Form, {
              onSubmit: onSubmit
            }, _react.default.createElement(_alert.Alert, {
              message: error,
              mode: 'error',
              isClose: true
            }), _react.default.createElement(_form.Input, {
              label: texts.emailLabel,
              type: 'text',
              name: 'email',
              value: email,
              onChange: handleChange,
              required: true
            }), _react.default.createElement(_form.Input, {
              label: texts.passwordLabel,
              type: 'password',
              name: 'password',
              value: password,
              onChange: handleChange,
              required: true
            }), _react.default.createElement("h5", {
              className: 'tyc'
            }, texts.termsAndPrivacy), _react.default.createElement("div", {
              className: 'form-actions'
            }, _react.default.createElement(_components.Button, {
              type: 'submit',
              ...formDisabled,
              onClick: onSubmit,
              loading: fetching == 'default',
              label: texts.signInButton
            })), _react.default.createElement("h3", {
              className: 'social-login'
            }, texts.socialLoginTitle), _react.default.createElement("div", {
              className: 'form-actions'
            }, _react.default.createElement(_components.Button, {
              icon: 'google',
              onClick: onGoogle,
              loading: fetching == 'google',
              label: texts.googleSignInButton
            })), _react.default.createElement("div", {
              className: 'form-actions'
            }, _react.default.createElement(_link.Link, null, texts.forgotPasswordLink), _react.default.createElement(_link.Link, {
              href: `/auth/register`
            }, texts.createAccountLink)))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsIldpZGdldCIsIlZpZXciLCJleHBvcnRzIiwiX3JlYWN0IiwiX3JvdXRpbmciLCJfZm9ybSIsIl9pY29ucyIsIl9saW5rIiwiX2FsZXJ0IiwiX2ljb25zMiIsIl9jb21wb25lbnRzIiwiX3Nlc3Npb24iLCJfY29tcG9uZW50czIiLCJfYmV5b25kX2NvbnRleHQiLCJfaG9va3MiLCJkZWZhdWx0VmFsdWVzIiwiZW1haWwiLCJwYXNzd29yZCIsInZhbHVlcyIsInNldFZhbHVlcyIsImRlZmF1bHQiLCJ1c2VTdGF0ZSIsImVycm9yIiwic2V0RXJyb3IiLCJ0ZXh0UmVhZHkiLCJ0ZXh0cyIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsImhhbmRsZUNoYW5nZSIsImN1cnJlbnRUYXJnZXQiLCJ0YXJnZXQiLCJjdXJyZW50VmFsdWUiLCJuYW1lIiwidmFsdWUiLCJmb3JtRGlzYWJsZWQiLCJkaXNhYmxlZCIsImNyZWF0ZUVsZW1lbnQiLCJTcGlubmVyIiwiYWN0aXZlIiwidHlwZSIsIm9uR29vZ2xlIiwiZXZlbnQiLCJyZXNwb25zZSIsInNlc3Npb25XcmFwcGVyIiwic2lnbkluV2l0aEdvb2dsZSIsInN0YXR1cyIsImVycm9yTG9naW5Hb29nbGUiLCJyb3V0aW5nIiwicHVzaFN0YXRlIiwiZSIsImNvbnNvbGUiLCJtZXNzYWdlIiwib25TdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImF1dGgiLCJsb2dpbiIsImVycm9yTG9naW4iLCJjbGFzc05hbWUiLCJUaGVtZVN3aXRjaGVyIiwiSWNvbiIsImljb24iLCJJQ09OUyIsImxvZ2luVGl0bGUiLCJGb3JtIiwiQWxlcnQiLCJtb2RlIiwiaXNDbG9zZSIsIklucHV0IiwibGFiZWwiLCJlbWFpbExhYmVsIiwib25DaGFuZ2UiLCJyZXF1aXJlZCIsInBhc3N3b3JkTGFiZWwiLCJ0ZXJtc0FuZFByaXZhY3kiLCJCdXR0b24iLCJvbkNsaWNrIiwibG9hZGluZyIsInNpZ25JbkJ1dHRvbiIsInNvY2lhbExvZ2luVGl0bGUiLCJnb29nbGVTaWduSW5CdXR0b24iLCJMaW5rIiwiZm9yZ290UGFzc3dvcmRMaW5rIiwiaHJlZiIsImNyZWF0ZUFjY291bnRMaW5rIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvdmlld3MvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUVPO1VBQVUsTUFDWEUsVUFBVyxTQUFRSCxLQUFBLENBQUFJLHlCQUF5QjtZQUNqRCxJQUFJQyxNQUFNQSxDQUFBO2NBQ1QsT0FBT0gsTUFBQSxDQUFBSSxJQUFJO1lBQ1o7O1VBQ0FDLE9BQUEsQ0FBQUosVUFBQSxHQUFBQSxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1JELElBQUFLLE1BQUEsR0FBQVAsT0FBQTtVQUNBLElBQUFRLFFBQUEsR0FBQVIsT0FBQTtVQUNBLElBQUFTLEtBQUEsR0FBQVQsT0FBQTtVQUNBLElBQUFVLE1BQUEsR0FBQVYsT0FBQTtVQUNBLElBQUFXLEtBQUEsR0FBQVgsT0FBQTtVQUNBLElBQUFZLE1BQUEsR0FBQVosT0FBQTtVQUNBLElBQUFhLE9BQUEsR0FBQWIsT0FBQTtVQUNBLElBQUFjLFdBQUEsR0FBQWQsT0FBQTtVQUNBLElBQUFlLFFBQUEsR0FBQWYsT0FBQTtVQUNBLElBQUFnQixZQUFBLEdBQUFoQixPQUFBO1VBQ0EsSUFBQWlCLGVBQUEsR0FBQWpCLE9BQUE7VUFDQSxJQUFBa0IsTUFBQSxHQUFBbEIsT0FBQTtVQU1PO1VBQVUsU0FDUkssSUFBSUEs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