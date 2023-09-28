System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/react-18-widgets@1.0.1/page", "react@18.2.0", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@0.0.36/form", "pragmate-ui@0.0.36/icons", "pragmate-ui@0.0.36/link", "pragmate-ui@0.0.36/alert", "@aimpact/chat@1.0.1/shared/icons", "pragmate-ui@0.0.36/components", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/chat@1.0.1/shared/components", "@aimpact/chat@1.0.1/shared/hooks"], function (_export, _context) {
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
    }, function (_pragmateUi0036Components) {
      dependency_10 = _pragmateUi0036Components;
    }, function (_aimpactChatSdk100Session) {
      dependency_11 = _aimpactChatSdk100Session;
    }, function (_aimpactChat101SharedComponents) {
      dependency_12 = _aimpactChat101SharedComponents;
    }, function (_aimpactChat101SharedHooks) {
      dependency_13 = _aimpactChat101SharedHooks;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.1.2"], ["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@bgroup/media-manager", "1.0.0"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@beyond-js/widgets", "0.1.4"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.9.0"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.3"], ["socket.io-client", "4.7.1"], ["tippy.js", "6.3.7"], ["uuid", "9.0.0"], ["@types/react", "18.2.14"], ["@types/react-dom", "18.2.6"], ["@aimpact/chat", "1.0.1"], ["@aimpact/ailearn-app", "1.0.0"]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y0FDZk4sSUFBSSxFQUFDLFVBQVU7Y0FDZkMsS0FBSyxFQUFFbEIsUUFBUTtjQUNmc0QsUUFBUSxFQUFFekMsWUFBWTtjQUN0QjBDLFFBQVE7WUFBQSxFQUNQLEVBRUZwRDtjQUFJc0MsU0FBUyxFQUFDO1lBQUssR0FBRWpDLEtBQUssQ0FBQ2lELGVBQWUsQ0FBTSxFQUNoRHREO2NBQUtzQyxTQUFTLEVBQUM7WUFBYyxHQUM1QnRDLDZCQUFDdUQsa0JBQU07Y0FDTm5DLElBQUksRUFBQyxRQUFRO2NBQUEsR0FDVEosWUFBWTtjQUNoQndDLE9BQU8sRUFBRXZCLFFBQVE7Y0FDakJ3QixPQUFPLEVBQUVqRCxRQUFRLElBQUksU0FBUztjQUM5QnlDLEtBQUssRUFBRTVDLEtBQUssQ0FBQ3FEO1lBQVksRUFDeEIsQ0FDRyxFQUNOMUQ7Y0FBSXNDLFNBQVMsRUFBQztZQUFjLEdBQUVqQyxLQUFLLENBQUNzRCxnQkFBZ0IsQ0FBTSxFQUMxRDNEO2NBQUtzQyxTQUFTLEVBQUM7WUFBYyxHQUM1QnRDLDZCQUFDdUQsa0JBQU07Y0FDTmQsSUFBSSxFQUFDLFFBQVE7Y0FDYmUsT0FBTyxFQUFFbkMsUUFBUTtjQUNqQm9DLE9BQU8sRUFBRWpELFFBQVEsSUFBSSxRQUFRO2NBQzdCeUMsS0FBSyxFQUFFNUMsS0FBSyxDQUFDdUQ7WUFBa0IsRUFDOUIsQ0FDRyxFQUNONUQ7Y0FBS3NDLFNBQVMsRUFBQztZQUFjLEdBQzVCdEMsNkJBQUM2RCxVQUFJLFFBQUV4RCxLQUFLLENBQUN5RCxrQkFBa0IsQ0FBUSxFQUN2QzlELDZCQUFDNkQsVUFBSTtjQUFDRSxJQUFJLEVBQUU7WUFBZ0IsR0FBRzFELEtBQUssQ0FBQzJELGlCQUFpQixDQUFRLENBQ3pELENBQ0EsQ0FDRixDQUNEO1VBRVIiLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsIldpZGdldCIsIlZpZXciLCJleHBvcnRzIiwiZGVmYXVsdFZhbHVlcyIsImVtYWlsIiwicGFzc3dvcmQiLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJSZWFjdCIsInVzZVN0YXRlIiwiZXJyb3IiLCJzZXRFcnJvciIsInRleHRSZWFkeSIsInRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsImhhbmRsZUNoYW5nZSIsImN1cnJlbnRUYXJnZXQiLCJ0YXJnZXQiLCJjdXJyZW50VmFsdWUiLCJuYW1lIiwidmFsdWUiLCJmb3JtRGlzYWJsZWQiLCJkaXNhYmxlZCIsIlNwaW5uZXIiLCJhY3RpdmUiLCJ0eXBlIiwib25Hb29nbGUiLCJldmVudCIsInJlc3BvbnNlIiwic2Vzc2lvbldyYXBwZXIiLCJzaWduSW5XaXRoR29vZ2xlIiwic3RhdHVzIiwiZXJyb3JMb2dpbkdvb2dsZSIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJlIiwiY29uc29sZSIsIm1lc3NhZ2UiLCJvblN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiYXV0aCIsImxvZ2luIiwiZXJyb3JMb2dpbiIsImNsYXNzTmFtZSIsIlRoZW1lU3dpdGNoZXIiLCJJY29uIiwiaWNvbiIsIklDT05TIiwibG9naW5UaXRsZSIsIkZvcm0iLCJBbGVydCIsIm1vZGUiLCJpc0Nsb3NlIiwiSW5wdXQiLCJsYWJlbCIsImVtYWlsTGFiZWwiLCJvbkNoYW5nZSIsInJlcXVpcmVkIiwicGFzc3dvcmRMYWJlbCIsInRlcm1zQW5kUHJpdmFjeSIsIkJ1dHRvbiIsIm9uQ2xpY2siLCJsb2FkaW5nIiwic2lnbkluQnV0dG9uIiwic29jaWFsTG9naW5UaXRsZSIsImdvb2dsZVNpZ25JbkJ1dHRvbiIsIkxpbmsiLCJmb3Jnb3RQYXNzd29yZExpbmsiLCJocmVmIiwiY3JlYXRlQWNjb3VudExpbmsiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbInRzL2NvbnRyb2xsZXIudHMiLCJ0cy92aWV3cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGxdfQ==