System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.3/page", "react@18.2.0", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@0.0.3/form", "pragmate-ui@0.0.3/link", "pragmate-ui@0.0.3/icons", "pragmate-ui@0.0.3/alert", "@aimpact/chat@1.0.1/shared/icons", "@aimpact/chat@1.0.1/shared/components", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/chat@1.0.1/shared/hooks"], function (_export, _context) {
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
    }, function (_pragmateUi003Icons) {
      dependency_8 = _pragmateUi003Icons;
    }, function (_pragmateUi003Alert) {
      dependency_9 = _pragmateUi003Alert;
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
        const dependencies = new Map([["@beyond-js/reactive", "1.1.2"], ["@aimpact/chat-api", "0.1.0"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.2.0"], ["@bgroup/media-manager", "1.0.0"], ["pragmate-ui", "0.0.3"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@beyond-js/widgets", "0.1.4"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.4"], ["socket.io-client", "4.7.1"], ["tippy.js", "6.3.7"], ["uuid", "9.0.0"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat", "1.0.1"], ["@aimpact/ailearn-app", "0.0.14"]]);
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
        hash: 1391434511,
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
            }, _react.default.createElement(_components.Button, {
              type: 'submit',
              ...formDisabled,
              onClick: onSubmit,
              loading: fetching === 'default',
              label: texts.signIn
            })), _react.default.createElement("h3", {
              className: 'social-login'
            }, texts.socialLogin), _react.default.createElement("div", {
              className: 'form-actions'
            }, _react.default.createElement(_components.Button, {
              icon: 'google',
              onClick: onGoogle,
              loading: fetching === 'google',
              label: texts.googleSignIn
            }), _react.default.createElement(_components.Button, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsIldpZGdldCIsIlZpZXciLCJleHBvcnRzIiwiX3JlYWN0IiwiX3JvdXRpbmciLCJfZm9ybSIsIl9saW5rIiwiX2ljb25zIiwiX2FsZXJ0IiwiX2ljb25zMiIsIl9jb21wb25lbnRzIiwiX3Nlc3Npb24iLCJfYmV5b25kX2NvbnRleHQiLCJfaG9va3MiLCJjcmVkZW50aWFscyIsInVzZXIiLCJwYXNzd29yZCIsInRleHRzUmVhZHkiLCJ0ZXh0cyIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwiZGVmYXVsdFZhbHVlcyIsInVzZXJuYW1lIiwiY29uZmlybVBhc3N3b3JkIiwiZW1haWwiLCJmZXRjaGluZyIsInZhbHVlcyIsInNldFZhbHVlcyIsImRlZmF1bHQiLCJ1c2VTdGF0ZSIsImVycm9yIiwic2V0RXJyb3IiLCJzZXRGZXRjaGluZyIsImhhbmRsZUNoYW5nZSIsImN1cnJlbnRUYXJnZXQiLCJ0YXJnZXQiLCJjdXJyZW50VmFsdWUiLCJuYW1lIiwidmFsdWUiLCJmb3JtRGlzYWJsZWQiLCJkaXNhYmxlZCIsIm9uR29vZ2xlIiwiZXZlbnQiLCJyZXNwb25zZSIsInNlc3Npb25XcmFwcGVyIiwic2lnbkluV2l0aEdvb2dsZSIsInN0YXR1cyIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJlIiwiY29uc29sZSIsIm1lc3NhZ2UiLCJoYW5kbGVCbHVyIiwib25TdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInJlZ2lzdGVyV2l0aEVtYWlsIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIlRoZW1lU3dpdGNoZXIiLCJJY29uIiwiaWNvbiIsIklDT05TIiwiY3JlYXRlQWNjb3VudCIsIkZvcm0iLCJBbGVydCIsIm1vZGUiLCJzaG93IiwibGVuZ3RoIiwiaXNDbG9zZSIsIklucHV0IiwibGFiZWwiLCJmdWxsTmFtZSIsInR5cGUiLCJvbkNoYW5nZSIsInJlcXVpcmVkIiwib25CbHVyIiwidGVybXNDb25kaXRpb24iLCJCdXR0b24iLCJvbkNsaWNrIiwibG9hZGluZyIsInNpZ25JbiIsInNvY2lhbExvZ2luIiwiZ29vZ2xlU2lnbkluIiwiZmFjZWJvb2tTaWduSW4iLCJMaW5rIiwiaGVscFNpZ25JbiIsImhyZWYiLCJhbHJlYWR5QWNjb3VudCJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3ZpZXdzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBRU87VUFBVSxNQUNYRSxVQUFXLFNBQVFILEtBQUEsQ0FBQUkseUJBQXlCO1lBQzlDLElBQUlDLE1BQU1BLENBQUE7Y0FDTixPQUFPSCxNQUFBLENBQUFJLElBQUk7WUFDZjs7VUFDSEMsT0FBQSxDQUFBSixVQUFBLEdBQUFBLFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDUkQsSUFBQUssTUFBQSxHQUFBUCxPQUFBO1VBQ0EsSUFBQVEsUUFBQSxHQUFBUixPQUFBO1VBQ0EsSUFBQVMsS0FBQSxHQUFBVCxPQUFBO1VBQ0EsSUFBQVUsS0FBQSxHQUFBVixPQUFBO1VBQ0EsSUFBQVcsTUFBQSxHQUFBWCxPQUFBO1VBQ0EsSUFBQVksTUFBQSxHQUFBWixPQUFBO1VBQ0EsSUFBQWEsT0FBQSxHQUFBYixPQUFBO1VBQ0EsSUFBQWMsV0FBQSxHQUFBZCxPQUFBO1VBQ0EsSUFBQWUsUUFBQSxHQUFBZixPQUFBO1VBRUEsSUFBQWdCLGVBQUEsR0FBQWhCLE9BQUE7VUFDQSxJQUFBaUIsTUFBQSxHQUFBakIsT0FBQTtVQUtBLE1BQU1rQixXQUFXLEdBQUc7WUFBRUMsSUFBSSxFQUFFLFNBQVM7WUFBRUMs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