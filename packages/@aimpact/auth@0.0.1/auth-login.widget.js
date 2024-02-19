System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.4/page", "react@18.2.0", "pragmate-ui@0.0.6/form", "@beyond-js/kernel@0.1.9/routing", "@aimpact/chat-sdk@1.0.0/session", "pragmate-ui@0.0.6/alert", "pragmate-ui@0.0.6/components", "pragmate-ui@0.0.6/link", "@aimpact/auth@0.0.1/components", "@beyond-js/react-18-widgets@1.0.4/hooks"], function (_export, _context) {
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
    }, function (_beyondJsReact18Widgets104Page) {
      dependency_3 = _beyondJsReact18Widgets104Page;
    }, function (_react2) {
      dependency_4 = _react2;
    }, function (_pragmateUi006Form) {
      dependency_5 = _pragmateUi006Form;
    }, function (_beyondJsKernel019Routing) {
      dependency_6 = _beyondJsKernel019Routing;
    }, function (_aimpactChatSdk100Session) {
      dependency_7 = _aimpactChatSdk100Session;
    }, function (_pragmateUi006Alert) {
      dependency_8 = _pragmateUi006Alert;
    }, function (_pragmateUi006Components) {
      dependency_9 = _pragmateUi006Components;
    }, function (_pragmateUi006Link) {
      dependency_10 = _pragmateUi006Link;
    }, function (_aimpactAuth001Components) {
      dependency_11 = _aimpactAuth001Components;
    }, function (_beyondJsReact18Widgets104Hooks) {
      dependency_12 = _beyondJsReact18Widgets104Hooks;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-sdk", "1.0.0"], ["@beyond-js/reactive", "1.1.11"], ["pragmate-ui", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "1.0.4"], ["socket.io-client", "4.7.3"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.46"], ["@types/react-dom", "18.2.18"], ["@aimpact/auth", "0.0.1"], ["@aimpact/ailearn-app", "0.0.24"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/auth@0.0.1/auth-login",
          "multibundle": true
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['react', dependency_4], ['pragmate-ui/form', dependency_5], ['@beyond-js/kernel/routing', dependency_6], ['@aimpact/chat-sdk/session', dependency_7], ['pragmate-ui/alert', dependency_8], ['pragmate-ui/components', dependency_9], ['pragmate-ui/link', dependency_10], ['@aimpact/auth/components', dependency_11], ['@beyond-js/react-18-widgets/hooks', dependency_12]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "auth-login-page",
        "vspecifier": "@aimpact/auth@0.0.1/auth-login.widget",
        "is": "page",
        "route": "/auth/login",
        "layout": "auth-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/auth@0.0.1/auth-login.widget');
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

      /****************************
      INTERNAL MODULE: ./views/form
      ****************************/

      ims.set('./views/form', {
        hash: 4251291802,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LoginForm = LoginForm;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          var _routing = require("@beyond-js/kernel/routing");
          var _session = require("@aimpact/chat-sdk/session");
          var _alert = require("pragmate-ui/alert");
          var _components = require("pragmate-ui/components");
          function LoginForm({
            showForm,
            setShowForm,
            texts
          }) {
            const [values, setValues] = (0, _react.useState)({
              email: '',
              password: ''
            });
            const [fetching, setFetching] = (0, _react.useState)('');
            const [error, setError] = (0, _react.useState)('');
            const [closingForm, setClosingForm] = (0, _react.useState)(false);
            const formDisabled = {};
            const {
              email,
              password
            } = values;
            if (!email || !password) formDisabled.disabled = true;
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
                    setError(texts.errorLoginGoogle);
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
                setValues({
                  email: '',
                  password: ''
                });
                _routing.routing.pushState('/');
                return;
              } catch (e) {
                setError(texts.errorLogin);
              } finally {
                setFetching('');
              }
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("h3", {
              className: 'form__title h3 pb-20'
            }, texts.loginTitle), _react.default.createElement(_form.Form, {
              onSubmit: onSubmit
            }, _react.default.createElement("div", {
              className: 'login-form-general__container'
            }, _react.default.createElement(_alert.Alert, {
              message: error,
              mode: 'error',
              isClose: true
            }), !showForm && _react.default.createElement("div", {
              className: 'form-actions'
            }, _react.default.createElement(_components.Button, {
              icon: 'google',
              variant: 'primary',
              pepito: 'doce',
              onClick: onGoogle,
              loading: fetching == 'google',
              label: texts.googleSignInButton
            })), !showForm && _react.default.createElement("div", {
              className: `form-button-by-email ${closingForm ? 'closing' : ''}`
            }, _react.default.createElement(_components.Button, {
              icon: 'email',
              variant: 'secondary',
              onClick: handleFormButtonClick,
              label: texts.emailSignInButton
            })), _react.default.createElement("div", {
              className: `form-action-by-mail ${showForm ? 'show mb-10' : ''}`,
              onTransitionEnd: handleTransitionEnd
            }, _react.default.createElement("div", {
              className: 'login-form-content__container'
            }, _react.default.createElement(_form.Input, {
              placeholder: texts.emailLabel,
              type: 'text',
              name: 'email',
              value: email,
              onChange: handleChange,
              required: true
            }), _react.default.createElement(_form.Input, {
              placeholder: texts.passwordLabel,
              type: 'password',
              name: 'password',
              value: password,
              onChange: handleChange,
              required: true
            }), _react.default.createElement(_components.Button, {
              type: 'submit',
              variant: 'primary',
              ...formDisabled,
              onClick: onSubmit,
              loading: fetching == 'default',
              label: texts.signInButton
            }), _react.default.createElement(_components.Button, {
              onClick: closeForm,
              variant: 'primary',
              label: texts.closeButton
            }))))));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 1965419975,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _link = require("pragmate-ui/link");
          var _components2 = require("@aimpact/auth/components");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _beyond_context = require("beyond_context");
          var _form = require("./form");
          /*bundle*/
          function View() {
            const [textReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            const [showForm, setShowForm] = (0, _react.useState)(false);
            if (!textReady) return _react.default.createElement(_components.Spinner, {
              active: true,
              type: 'primary'
            });
            return _react.default.createElement("div", {
              className: 'page-container'
            }, _react.default.createElement("div", {
              className: `first-panel ${showForm ? 'small' : 'large'}`
            }, _react.default.createElement("aimpact-login-presentation", null)), _react.default.createElement("div", {
              className: 'second-panel'
            }, _react.default.createElement("div", {
              className: 'login-container'
            }, _react.default.createElement("div", {
              className: 'login__header'
            }, _react.default.createElement(_components2.ThemeSwitch, {
              text: texts.theme
            })), _react.default.createElement("div", {
              className: 'login__content'
            }, _react.default.createElement("div", {
              className: 'login-form__container'
            }, _react.default.createElement(_form.LoginForm, {
              showForm: showForm,
              setShowForm: setShowForm,
              texts: texts
            }), _react.default.createElement("div", {
              className: 'term-general__container'
            }, _react.default.createElement("p", {
              className: 'term-and-privacy__description tyc p2'
            }, texts.termsAndPrivacy), _react.default.createElement("div", null, _react.default.createElement("span", {
              className: 'tyc p2'
            }, texts.termsCondition), _react.default.createElement("div", {
              className: `term-login__container ${showForm ? 'show mb-20' : ''}`
            }, _react.default.createElement("div", {
              className: 'divider-section'
            }), _react.default.createElement("span", {
              className: 'conditions-title__text h6'
            }, texts.passwordConditions?.title), _react.default.createElement("ul", {
              className: 'conditions-pass__container'
            }, _react.default.createElement("li", {
              className: 'p2'
            }, texts.passwordConditions?.minimumCharacters), _react.default.createElement("li", {
              className: 'p2'
            }, texts.passwordConditions?.minimumLetters), _react.default.createElement("li", {
              className: 'p2'
            }, texts.passwordConditions?.minimumSpecial))), _react.default.createElement("div", {
              className: 'divider-section'
            }), _react.default.createElement("div", {
              className: 'form__actions'
            }, _react.default.createElement(_link.Link, {
              href: `/auth/recovery`,
              className: 'forgot-password__text h6'
            }, texts.forgotPasswordLink), _react.default.createElement(_link.Link, {
              href: `/auth/register`,
              className: 'h6'
            }, texts.createAccountLink)))))))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsIldpZGdldCIsIlZpZXciLCJleHBvcnRzIiwiX3JlYWN0IiwiX2Zvcm0iLCJfcm91dGluZyIsIl9zZXNzaW9uIiwiX2FsZXJ0IiwiX2NvbXBvbmVudHMiLCJMb2dpbkZvcm0iLCJzaG93Rm9ybSIsInNldFNob3dGb3JtIiwidGV4dHMiLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJ1c2VTdGF0ZSIsImVtYWlsIiwicGFzc3dvcmQiLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwiZXJyb3IiLCJzZXRFcnJvciIsImNsb3NpbmdGb3JtIiwic2V0Q2xvc2luZ0Zvcm0iLCJmb3JtRGlzYWJsZWQiLCJkaXNhYmxlZCIsImhhbmRsZUNoYW5nZSIsImN1cnJlbnRUYXJnZXQiLCJ0YXJnZXQiLCJjdXJyZW50VmFsdWUiLCJuYW1lIiwidmFsdWUiLCJoYW5kbGVGb3JtQnV0dG9uQ2xpY2siLCJjbG9zZUZvcm0iLCJoYW5kbGVUcmFuc2l0aW9uRW5kIiwib25Hb29nbGUiLCJldmVudCIsInJlc3BvbnNlIiwic2Vzc2lvbldyYXBwZXIiLCJzaWduSW5XaXRoR29vZ2xlIiwic3RhdHVzIiwiZXJyb3JMb2dpbkdvb2dsZSIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJlIiwiY29uc29sZSIsIm1lc3NhZ2UiLCJvblN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiYXV0aCIsImxvZ2luIiwiZXJyb3JMb2dpbiIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJjbGFzc05hbWUiLCJsb2dpblRpdGxlIiwiRm9ybSIsIkFsZXJ0IiwibW9kZSIsImlzQ2xvc2UiLCJCdXR0b24iLCJpY29uIiwidmFyaWFudCIsInBlcGl0byIsIm9uQ2xpY2siLCJsb2FkaW5nIiwibGFiZWwiLCJnb29nbGVTaWduSW5CdXR0b24iLCJlbWFpbFNpZ25JbkJ1dHRvbiIsIm9uVHJhbnNpdGlvbkVuZCIsIklucHV0IiwicGxhY2Vob2xkZXIiLCJlbWFpbExhYmVsIiwidHlwZSIsIm9uQ2hhbmdlIiwicmVxdWlyZWQiLCJwYXNzd29yZExhYmVsIiwic2lnbkluQnV0dG9uIiwiY2xvc2VCdXR0b24iLCJfbGluayIsIl9jb21wb25lbnRzMiIsIl9ob29rcyIsIl9iZXlvbmRfY29udGV4dCIsInRleHRSZWFkeSIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwiU3Bpbm5lciIsImFjdGl2ZSIsIlRoZW1lU3dpdGNoIiwidGV4dCIsInRoZW1lIiwidGVybXNBbmRQcml2YWN5IiwidGVybXNDb25kaXRpb24iLCJwYXNzd29yZENvbmRpdGlvbnMiLCJ0aXRsZSIsIm1pbmltdW1DaGFyYWN0ZXJzIiwibWluaW11bUxldHRlcnMiLCJtaW5pbXVtU3BlY2lhbCIsIkxpbmsiLCJocmVmIiwiZm9yZ290UGFzc3dvcmRMaW5rIiwiY3JlYXRlQWNjb3VudExpbmsiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy92aWV3cy9mb3JtLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUVPO1VBQVUsTUFDWEUsVUFBVyxTQUFRSCxLQUFBLENBQUFJLHlCQUF5QjtZQUNqRCxJQUFJQyxNQUFNQSxDQUFBO2NBQ1QsT0FBT0gsTUFBQSxDQUFBSSxJQUFJO1lBQ1o7O1VBQ0FDLE9BQUEsQ0FBQUosVUFBQSxHQUFBQSxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1JELElBQUFLLE1BQUEsR0FBQVAsT0FBQTtVQUNBLElBQUFRLEtBQUEsR0FBQVIsT0FBQTtVQUNBLElB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