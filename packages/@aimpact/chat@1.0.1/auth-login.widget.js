System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.3/page", "react@18.2.0", "pragmate-ui@0.0.3/components", "pragmate-ui@0.0.3/form", "pragmate-ui@0.0.3/alert", "pragmate-ui@0.0.3/link", "@aimpact/chat@1.0.1/shared/components", "@beyond-js/kernel@0.1.9/routing", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/chat@1.0.1/shared/hooks"], function (_export, _context) {
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
    }, function (_pragmateUi003Components) {
      dependency_5 = _pragmateUi003Components;
    }, function (_pragmateUi003Form) {
      dependency_6 = _pragmateUi003Form;
    }, function (_pragmateUi003Alert) {
      dependency_7 = _pragmateUi003Alert;
    }, function (_pragmateUi003Link) {
      dependency_8 = _pragmateUi003Link;
    }, function (_aimpactChat101SharedComponents) {
      dependency_9 = _aimpactChat101SharedComponents;
    }, function (_beyondJsKernel019Routing) {
      dependency_10 = _beyondJsKernel019Routing;
    }, function (_aimpactChatSdk100Session) {
      dependency_11 = _aimpactChatSdk100Session;
    }, function (_aimpactChat101SharedHooks) {
      dependency_12 = _aimpactChat101SharedHooks;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.1.2"], ["@aimpact/chat-api", "0.1.0"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.2.0"], ["@bgroup/media-manager", "1.0.0"], ["pragmate-ui", "0.0.3"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.4"], ["socket.io-client", "4.7.1"], ["tippy.js", "6.3.7"], ["uuid", "9.0.0"], ["@beyond-js/widgets", "0.1.5"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat", "1.0.1"], ["@aimpact/ailearn-app", "0.0.23"]]);
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['react', dependency_4], ['pragmate-ui/components', dependency_5], ['pragmate-ui/form', dependency_6], ['pragmate-ui/alert', dependency_7], ['pragmate-ui/link', dependency_8], ['@aimpact/chat/shared/components', dependency_9], ['@beyond-js/kernel/routing', dependency_10], ['@aimpact/chat-sdk/session', dependency_11], ['@aimpact/chat/shared/hooks', dependency_12]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "auth-login-page",
        "vspecifier": "@aimpact/chat@1.0.1/auth-login.widget",
        "is": "page",
        "route": "/auth/login",
        "layout": "auth-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/chat@1.0.1/auth-login.widget');
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
        hash: 1546630378,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _form = require("pragmate-ui/form");
          var _alert = require("pragmate-ui/alert");
          var _link = require("pragmate-ui/link");
          var _components2 = require("@aimpact/chat/shared/components");
          var _beyond_context = require("beyond_context");
          var _routing = require("@beyond-js/kernel/routing");
          var _session = require("@aimpact/chat-sdk/session");
          var _hooks = require("@aimpact/chat/shared/hooks");
          /*bundle*/
          function View() {
            const defaultValues = {
              email: '',
              password: ''
            };
            const [values, setValues] = (0, _react.useState)(defaultValues);
            const [error, setError] = (0, _react.useState)('');
            const [textReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            const [fetching, setFetching] = (0, _react.useState)('');
            const [closingForm, setClosingForm] = (0, _react.useState)(false);
            const [showForm, setShowForm] = (0, _react.useState)(false);
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
              type: "primary"
            });
            const handleFormButtonClick = () => {
              setShowForm(true);
            };
            const closeForm = () => {
              setClosingForm(true);
            };
            const handleTransitionEnd = () => {
              if (closingForm) {
                setClosingForm(false);
                setShowForm(false);
              }
            };
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
              className: "page-container"
            }, _react.default.createElement("div", {
              className: "panel"
            }, _react.default.createElement("aimpact-login-presentation", null)), _react.default.createElement("div", {
              className: "panel"
            }, _react.default.createElement("div", {
              className: "login-container"
            }, _react.default.createElement("div", {
              className: "login__header"
            }, _react.default.createElement(_components2.ThemeSwitch, {
              text: texts.theme
            })), _react.default.createElement("div", {
              className: "login__content"
            }, _react.default.createElement("div", {
              className: "login-form__container"
            }, _react.default.createElement("h5", {
              className: "form__title h3 pb-20"
            }, texts.loginTitle), _react.default.createElement(_form.Form, {
              onSubmit: onSubmit
            }, _react.default.createElement(_alert.Alert, {
              message: error,
              mode: "error",
              isClose: true
            }), _react.default.createElement("div", {
              className: "form-actions"
            }, _react.default.createElement(_components.Button, {
              icon: "google",
              onClick: onGoogle,
              loading: fetching == 'google',
              label: texts.googleSignInButton
            })), !showForm && _react.default.createElement("div", {
              className: `form-button-by-email ${closingForm ? 'closing' : ''}`
            }, _react.default.createElement(_components.Button, {
              icon: "email",
              variant: "secondary",
              onClick: handleFormButtonClick,
              label: texts.emailSignInButton
            })), _react.default.createElement("div", {
              className: `form-action-by-mail ${showForm ? 'show' : ''}`,
              onTransitionEnd: handleTransitionEnd
            }, _react.default.createElement(_form.Input, {
              label: texts.emailLabel,
              type: "text",
              name: "email",
              value: email,
              onChange: handleChange,
              required: true
            }), _react.default.createElement(_form.Input, {
              label: texts.passwordLabel,
              type: "password",
              name: "password",
              value: password,
              onChange: handleChange,
              required: true
            }), _react.default.createElement("div", {
              className: "form-actions"
            }, _react.default.createElement(_components.Button, {
              type: "submit",
              ...formDisabled,
              onClick: onSubmit,
              loading: fetching == 'default',
              label: texts.signInButton
            }), _react.default.createElement(_components.Button, {
              onClick: closeForm,
              label: texts.closeButton
            }))), _react.default.createElement("h5", {
              className: "form__description pt-10 tyc"
            }, texts.termsAndPrivacy), _react.default.createElement("div", {
              className: "divider-section"
            }), _react.default.createElement("div", {
              className: "form__actions"
            }, showForm && _react.default.createElement(_link.Link, null, texts.forgotPasswordLink), _react.default.createElement(_link.Link, {
              href: `/auth/register`,
              className: showForm && 'mt-10'
            }, texts.createAccountLink))))))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsIldpZGdldCIsIlZpZXciLCJleHBvcnRzIiwiX3JlYWN0IiwiX2NvbXBvbmVudHMiLCJfZm9ybSIsIl9hbGVydCIsIl9saW5rIiwiX2NvbXBvbmVudHMyIiwiX2JleW9uZF9jb250ZXh0IiwiX3JvdXRpbmciLCJfc2Vzc2lvbiIsIl9ob29rcyIsImRlZmF1bHRWYWx1ZXMiLCJlbWFpbCIsInBhc3N3b3JkIiwidmFsdWVzIiwic2V0VmFsdWVzIiwidXNlU3RhdGUiLCJlcnJvciIsInNldEVycm9yIiwidGV4dFJlYWR5IiwidGV4dHMiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJjbG9zaW5nRm9ybSIsInNldENsb3NpbmdGb3JtIiwic2hvd0Zvcm0iLCJzZXRTaG93Rm9ybSIsImhhbmRsZUNoYW5nZSIsImN1cnJlbnRUYXJnZXQiLCJ0YXJnZXQiLCJjdXJyZW50VmFsdWUiLCJuYW1lIiwidmFsdWUiLCJmb3JtRGlzYWJsZWQiLCJkaXNhYmxlZCIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiU3Bpbm5lciIsImFjdGl2ZSIsInR5cGUiLCJoYW5kbGVGb3JtQnV0dG9uQ2xpY2siLCJjbG9zZUZvcm0iLCJoYW5kbGVUcmFuc2l0aW9uRW5kIiwib25Hb29nbGUiLCJldmVudCIsInJlc3BvbnNlIiwic2Vzc2lvbldyYXBwZXIiLCJzaWduSW5XaXRoR29vZ2xlIiwic3RhdHVzIiwiZXJyb3JMb2dpbkdvb2dsZSIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJlIiwiY29uc29sZSIsIm1lc3NhZ2UiLCJvblN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiYXV0aCIsImxvZ2luIiwiZXJyb3JMb2dpbiIsImNsYXNzTmFtZSIsIlRoZW1lU3dpdGNoIiwidGV4dCIsInRoZW1lIiwibG9naW5UaXRsZSIsIkZvcm0iLCJBbGVydCIsIm1vZGUiLCJpc0Nsb3NlIiwiQnV0dG9uIiwiaWNvbiIsIm9uQ2xpY2siLCJsb2FkaW5nIiwibGFiZWwiLCJnb29nbGVTaWduSW5CdXR0b24iLCJ2YXJpYW50IiwiZW1haWxTaWduSW5CdXR0b24iLCJvblRyYW5zaXRpb25FbmQiLCJJbnB1dCIsImVtYWlsTGFiZWwiLCJvbkNoYW5nZSIsInJlcXVpcmVkIiwicGFzc3dvcmRMYWJlbCIsInNpZ25JbkJ1dHRvbiIsImNsb3NlQnV0dG9uIiwidGVybXNBbmRQcml2YWN5IiwiTGluayIsImZvcmdvdFBhc3N3b3JkTGluayIsImhyZWYiLCJjcmVhdGVBY2NvdW50TGluayJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3ZpZXdzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUVPO1VBQVUsTUFDWEUsVUFBVyxTQUFRSCxLQUFBLENBQUFJLHlCQUF5QjtZQUNqRCxJQUFJQyxNQUFNQSxDQUFBO2NBQ1QsT0FBT0gsTUFBQSxDQUFBSSxJQUFJO1lBQ1o7O1VBQ0FDLE9BQUEsQ0FBQUosVUFBQSxHQUFBQSxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1JELElBQUFLLE1BQUEsR0FBQVAsT0FBQTtVQUNBLElBQUFRLFdBQUEsR0FBQVIsT0FBQTtVQUNBLElBQUFTLEtBQUEsR0FBQVQsT0FBQTtVQUNBLElBQUFVLE1BQUEsR0FBQVYsT0FBQTtVQUNBLElBQUFXLEtBQUEsR0FBQVgsT0FBQTtVQUNBLElBQUFZLFlBQUEsR0FBQVosT0FBQTtVQUNBLElBQUFhLGVBQUEsR0FBQWIsT0FBQTtVQUNBLElBQUFjLFFBQUEsR0FBQWQsT0FBQTtV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