System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/react-18-widgets@1.0.1/page", "react@18.2.0", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@0.0.36/form", "pragmate-ui@0.0.36/icons", "pragmate-ui@0.0.36/link", "pragmate-ui@0.0.36/alert", "@aimpact/chat@1.0.1/shared/icons", "@aimpact/chat@1.0.1/shared/components", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.0.36/components"], function (_export, _context) {
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
    }, function (_pragmateUi0036Form) {
      dependency_5 = _pragmateUi0036Form;
    }, function (_pragmateUi0036Icons) {
      dependency_6 = _pragmateUi0036Icons;
    }, function (_pragmateUi0036Link) {
      dependency_7 = _pragmateUi0036Link;
    }, function (_pragmateUi0036Alert) {
      dependency_8 = _pragmateUi0036Alert;
    }, function (_aimpactChat101SharedIcons) {
      dependency_9 = _aimpactChat101SharedIcons;
    }, function (_aimpactChat101SharedComponents) {
      dependency_10 = _aimpactChat101SharedComponents;
    }, function (_aimpactChatSdk100Session) {
      dependency_11 = _aimpactChatSdk100Session;
    }, function (_aimpactChat101SharedHooks) {
      dependency_12 = _aimpactChat101SharedHooks;
    }, function (_pragmateUi0036Components) {
      dependency_13 = _pragmateUi0036Components;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.1.2"], ["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@aimpact/media-manager", null], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@beyond-js/widgets", "0.1.4"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.9.0"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.3"], ["socket.io-client", "4.7.1"], ["tippy.js", "6.3.7"], ["uuid", "9.0.0"], ["@types/react", "18.2.14"], ["@types/react-dom", "18.2.6"], ["@aimpact/chat", "1.0.1"], ["@aimpact/ailearn-app", "1.0.0"]]);
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-18-widgets/page', dependency_2], ['react', dependency_3], ['@beyond-js/kernel/routing', dependency_4], ['pragmate-ui/form', dependency_5], ['pragmate-ui/icons', dependency_6], ['pragmate-ui/link', dependency_7], ['pragmate-ui/alert', dependency_8], ['@aimpact/chat/shared/icons', dependency_9], ['@aimpact/chat/shared/components', dependency_10], ['@aimpact/chat-sdk/session', dependency_11], ['@aimpact/chat/shared/hooks', dependency_12], ['pragmate-ui/components', dependency_13]]);
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
        hash: 1759496494,
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
          var _components = require("@aimpact/chat/shared/components");
          var _session = require("@aimpact/chat-sdk/session");
          var _beyond_context = require("beyond_context");
          var _hooks = require("@aimpact/chat/shared/hooks");
          var _components2 = require("pragmate-ui/components");
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
            if (!textReady) return _react.default.createElement(_components2.Spinner, {
              active: true,
              type: 'primary'
            });
            const onGoogle = async event => {
              try {
                setFetching('google');
                const response = await _session.sessionWrapper.signInWithGoogle();
                console.log(22, response);
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
                _routing.routing.pushState('/');
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
            }, _react.default.createElement(_components.ThemeSwitcher, null), _react.default.createElement(_icons.Icon, {
              icon: _icons2.ICONS['aip-chat-logo'],
              className: 'aip-chat-logo'
            }), _react.default.createElement("h1", null, texts.loginTitle), _react.default.createElement(_form.Form, {
              onSubmit: onSubmit
            }, _react.default.createElement(_alert.Alert, {
              message: error,
              mode: 'error',
              isClose: true
            }), _react.default.createElement(_components.Input, {
              label: texts.emailLabel,
              type: 'text',
              name: 'email',
              value: email,
              onChange: handleChange,
              required: true
            }), _react.default.createElement(_components.Input, {
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
            }, _react.default.createElement(_form.Button, {
              type: 'submit',
              ...formDisabled,
              onClick: onSubmit,
              loading: fetching == 'default',
              label: texts.signInButton
            })), _react.default.createElement("h3", {
              className: 'social-login'
            }, texts.socialLoginTitle), _react.default.createElement("div", {
              className: 'form-actions'
            }, _react.default.createElement(_form.Button, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ciIsIldpZGdldCIsIlZpZXciLCJleHBvcnRzIiwiZGVmYXVsdFZhbHVlcyIsImVtYWlsIiwicGFzc3dvcmQiLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJSZWFjdCIsInVzZVN0YXRlIiwiZXJyb3IiLCJzZXRFcnJvciIsInRleHRSZWFkeSIsInRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsImhhbmRsZUNoYW5nZSIsImN1cnJlbnRUYXJnZXQiLCJ0YXJnZXQiLCJjdXJyZW50VmFsdWUiLCJuYW1lIiwidmFsdWUiLCJmb3JtRGlzYWJsZWQiLCJkaXNhYmxlZCIsIlNwaW5uZXIiLCJhY3RpdmUiLCJ0eXBlIiwib25Hb29nbGUiLCJldmVudCIsInJlc3BvbnNlIiwic2Vzc2lvbldyYXBwZXIiLCJzaWduSW5XaXRoR29vZ2xlIiwiY29uc29sZSIsImxvZyIsInN0YXR1cyIsImVycm9yTG9naW5Hb29nbGUiLCJyb3V0aW5nIiwicHVzaFN0YXRlIiwiZSIsIm1lc3NhZ2UiLCJvblN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiYXV0aCIsImxvZ2luIiwiZXJyb3JMb2dpbiIsImNsYXNzTmFtZSIsIlRoZW1lU3dpdGNoZXIiLCJJY29uIiwiaWNvbiIsIklDT05TIiwibG9naW5UaXRsZSIsIkZvcm0iLCJBbGVydCIsIm1vZGUiLCJpc0Nsb3NlIiwiSW5wdXQiLCJsYWJlbCIsImVtYWlsTGFiZWwiLCJvbkNoYW5nZSIsInJlcXVpcmVkIiwicGFzc3dvcmRMYWJlbCIsInRlcm1zQW5kUHJpdmFjeSIsIkJ1dHRvbiIsIm9uQ2xpY2siLCJsb2FkaW5nIiwic2lnbkluQnV0dG9uIiwic29jaWFsTG9naW5UaXRsZSIsImdvb2dsZVNpZ25JbkJ1dHRvbiIsIkxpbmsiLCJmb3Jnb3RQYXNzd29yZExpbmsiLCJocmVmIiwiY3JlYXRlQWNjb3VudExpbmsiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbInRzL2NvbnRyb2xsZXIudHMiLCJ0cy92aWV3cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGxdfQ==