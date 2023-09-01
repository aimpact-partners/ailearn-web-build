System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.1/page", "react@18.2.0", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@0.0.36/form", "pragmate-ui@0.0.36/link", "pragmate-ui@0.0.36/icons", "pragmate-ui@0.0.36/alert", "@aimpact/chat@1.0.1/shared/icons", "@aimpact/chat@1.0.1/shared/components", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/chat@1.0.1/shared/hooks"], function (_export, _context) {
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
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_beyondJsReact18Widgets101Page) {
      dependency_3 = _beyondJsReact18Widgets101Page;
    }, function (_react2) {
      dependency_4 = _react2;
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
    }, function (_aimpactChat101SharedHooks) {
      dependency_13 = _aimpactChat101SharedHooks;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.1.2"], ["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@beyond-js/widgets", "0.1.4"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.9.0"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.3"], ["socket.io-client", "4.7.1"], ["tippy.js", "6.3.7"], ["uuid", "9.0.0"], ["@types/react", "18.2.14"], ["@types/react-dom", "18.2.6"], ["@aimpact/chat", "1.0.1"], ["@aimpact/ailearn-app", "1.0.0"]]);
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['react', dependency_4], ['@beyond-js/kernel/routing', dependency_5], ['pragmate-ui/form', dependency_6], ['pragmate-ui/link', dependency_7], ['pragmate-ui/icons', dependency_8], ['pragmate-ui/alert', dependency_9], ['@aimpact/chat/shared/icons', dependency_10], ['@aimpact/chat/shared/components', dependency_11], ['@aimpact/chat-sdk/session', dependency_12], ['@aimpact/chat/shared/hooks', dependency_13]]);
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

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 1269089593,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _react = require("react");
          var _routing = require("@beyond-js/kernel/routing");
          var _form = require("pragmate-ui/form");
          var _link = require("pragmate-ui/link");
          var _icons = require("pragmate-ui/icons");
          var _alert = require("pragmate-ui/alert");
          var _icons2 = require("@aimpact/chat/shared/icons");
          var _components = require("@aimpact/chat/shared/components");
          var _session = require("@aimpact/chat-sdk/session");
          var _beyond_context = require("beyond_context");
          var _hooks = require("@aimpact/chat/shared/hooks");
          const credentials = {
            user: 'ailearn',
            password: 'ailearn01'
          };
          /*bundle*/
          function View() {
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            const defaultValues = {
              username: '',
              password: '',
              confirmPassword: '',
              email: '',
              fetching: false
            };
            const [values, setValues] = _react.default.useState(defaultValues);
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
            if (!textsReady) return null;
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
            return _react.default.createElement("div", {
              className: 'page-container'
            }, _react.default.createElement("div", {
              className: 'form-container'
            }, _react.default.createElement(_components.ThemeSwitcher, null), _react.default.createElement(_icons.Icon, {
              icon: _icons2.ICONS['aip-chat-logo'],
              className: 'aip-chat-logo'
            }), _react.default.createElement("h1", null, texts.createAccount), _react.default.createElement(_form.Form, {
              onSubmit: onSubmit
            }, _react.default.createElement(_alert.Alert, {
              message: error,
              mode: 'error',
              show: error.length,
              isClose: true
            }), _react.default.createElement(_components.Input, {
              label: texts.fullName,
              type: 'text',
              name: 'username',
              value: username,
              onChange: handleChange,
              required: true
            }), _react.default.createElement(_components.Input, {
              label: texts.password,
              type: 'password',
              name: 'password',
              value: password,
              onChange: handleChange,
              required: true
            }), _react.default.createElement(_components.Input, {
              label: texts.confirmPassword,
              type: 'password',
              name: 'confirmPassword',
              value: confirmPassword,
              onChange: handleChange,
              onBlur: handleBlur,
              required: true
            }), _react.default.createElement(_components.Input, {
              label: texts.email,
              type: 'text',
              name: 'email',
              value: email,
              onChange: handleChange,
              required: true
            }), _react.default.createElement("h5", {
              className: 'tyc'
            }, texts.termsCondition), _react.default.createElement("div", {
              className: 'form-actions'
            }, _react.default.createElement(_form.Button, {
              type: 'submit',
              ...formDisabled,
              onClick: onSubmit,
              loading: fetching === 'default',
              label: texts.signIn
            })), _react.default.createElement("h3", {
              className: 'social-login'
            }, texts.socialLogin), _react.default.createElement("div", {
              className: 'form-actions'
            }, _react.default.createElement(_form.Button, {
              icon: 'google',
              onClick: onGoogle,
              loading: fetching === 'google',
              label: texts.googleSignIn
            }), _react.default.createElement(_form.Button, {
              disabled: true,
              icon: 'facebook',
              onClick: onGoogle,
              loading: fetching === 'facebook',
              label: texts.facebookSignIn
            })), _react.default.createElement("div", {
              className: 'form-actions'
            }, _react.default.createElement(_link.Link, null, texts.helpSignIn), _react.default.createElement(_link.Link, {
              href: `/auth/login`
            }, texts.alreadyAccount)))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGNBQWMsQ0FBTSxFQUMvQy9DO2NBQUs0QixTQUFTLEVBQUM7WUFBYyxHQUM1QjVCLDZCQUFDZ0QsWUFBTTtjQUNOTCxJQUFJLEVBQUMsUUFBUTtjQUFBLEdBQ1RoQyxZQUFZO2NBQ2hCc0MsT0FBTyxFQUFFeEIsUUFBUTtjQUNqQnlCLE9BQU8sRUFBRXJELFFBQVEsS0FBSyxTQUFTO2NBQy9CNEMsS0FBSyxFQUFFbkQsS0FBSyxDQUFDNkQ7WUFBTSxFQUNsQixDQUNHLEVBQ05uRDtjQUFJNEIsU0FBUyxFQUFDO1lBQWMsR0FBRXRDLEtBQUssQ0FBQzhELFdBQVcsQ0FBTSxFQUNyRHBEO2NBQUs0QixTQUFTLEVBQUM7WUFBYyxHQUM1QjVCLDZCQUFDZ0QsWUFBTTtjQUNOakIsSUFBSSxFQUFDLFFBQVE7Y0FDYmtCLE9BQU8sRUFBRXBDLFFBQVE7Y0FDakJxQyxPQUFPLEVBQUVyRCxRQUFRLEtBQUssUUFBUTtjQUM5QjRDLEtBQUssRUFBRW5ELEtBQUssQ0FBQytEO1lBQVksRUFDeEIsRUFDRnJELDZCQUFDZ0QsWUFBTTtjQUNOcEMsUUFBUTtjQUNSbUIsSUFBSSxFQUFDLFVBQVU7Y0FDZmtCLE9BQU8sRUFBRXBDLFFBQVE7Y0FDakJxQyxPQUFPLEVBQUVyRCxRQUFRLEtBQUssVUFBVTtjQUNoQzRDLEtBQUssRUFBRW5ELEtBQUssQ0FBQ2dFO1lBQWMsRUFDMUIsQ0FDRyxFQUNOdEQ7Y0FBSzRCLFNBQVMsRUFBQztZQUFjLEdBQzVCNUIsNkJBQUN1RCxVQUFJLFFBQUVqRSxLQUFLLENBQUNrRSxVQUFVLENBQVEsRUFDL0J4RCw2QkFBQ3VELFVBQUk7Y0FBQ0UsSUFBSSxFQUFFO1lBQWEsR0FBR25FLEtBQUssQ0FBQ29FLGNBQWMsQ0FBUSxDQUNuRCxDQUNBLENBQ0YsQ0FDRDtVQUVSIiwibmFtZXMiOlsiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJXaWRnZXQiLCJWaWV3IiwiZXhwb3J0cyIsImNyZWRlbnRpYWxzIiwidXNlciIsInBhc3N3b3JkIiwidGV4dHNSZWFkeSIsInRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwiZGVmYXVsdFZhbHVlcyIsInVzZXJuYW1lIiwiY29uZmlybVBhc3N3b3JkIiwiZW1haWwiLCJmZXRjaGluZyIsInZhbHVlcyIsInNldFZhbHVlcyIsIlJlYWN0IiwidXNlU3RhdGUiLCJlcnJvciIsInNldEVycm9yIiwic2V0RmV0Y2hpbmciLCJoYW5kbGVDaGFuZ2UiLCJjdXJyZW50VGFyZ2V0IiwidGFyZ2V0IiwiY3VycmVudFZhbHVlIiwibmFtZSIsInZhbHVlIiwiZm9ybURpc2FibGVkIiwiZGlzYWJsZWQiLCJvbkdvb2dsZSIsImV2ZW50IiwicmVzcG9uc2UiLCJzZXNzaW9uV3JhcHBlciIsInNpZ25JbldpdGhHb29nbGUiLCJzdGF0dXMiLCJyb3V0aW5nIiwicHVzaFN0YXRlIiwiZSIsImNvbnNvbGUiLCJtZXNzYWdlIiwiaGFuZGxlQmx1ciIsIm9uU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJyZWdpc3RlcldpdGhFbWFpbCIsImNsYXNzTmFtZSIsIlRoZW1lU3dpdGNoZXIiLCJJY29uIiwiaWNvbiIsIklDT05TIiwiY3JlYXRlQWNjb3VudCIsIkZvcm0iLCJBbGVydCIsIm1vZGUiLCJzaG93IiwibGVuZ3RoIiwiaXNDbG9zZSIsIklucHV0IiwibGFiZWwiLCJmdWxsTmFtZSIsInR5cGUiLCJvbkNoYW5nZSIsInJlcXVpcmVkIiwib25CbHVyIiwidGVybXNDb25kaXRpb24iLCJCdXR0b24iLCJvbkNsaWNrIiwibG9hZGluZyIsInNpZ25JbiIsInNvY2lhbExvZ2luIiwiZ29vZ2xlU2lnbkluIiwiZmFjZWJvb2tTaWduSW4iLCJMaW5rIiwiaGVscFNpZ25JbiIsImhyZWYiLCJhbHJlYWR5QWNjb3VudCJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsidHMvY29udHJvbGxlci50cyIsInRzL3ZpZXdzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbF19