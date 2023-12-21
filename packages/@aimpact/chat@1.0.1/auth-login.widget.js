System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.3/page", "react@18.2.0", "pragmate-ui@0.0.3/form", "@beyond-js/kernel@0.1.9/routing", "@aimpact/chat-sdk@1.0.0/session", "pragmate-ui@0.0.3/alert", "pragmate-ui@0.0.3/components", "pragmate-ui@0.0.3/link", "@aimpact/chat@1.0.1/shared/components", "@aimpact/chat@1.0.1/shared/hooks"], function (_export, _context) {
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
    }, function (_pragmateUi003Form) {
      dependency_5 = _pragmateUi003Form;
    }, function (_beyondJsKernel019Routing) {
      dependency_6 = _beyondJsKernel019Routing;
    }, function (_aimpactChatSdk100Session) {
      dependency_7 = _aimpactChatSdk100Session;
    }, function (_pragmateUi003Alert) {
      dependency_8 = _pragmateUi003Alert;
    }, function (_pragmateUi003Components) {
      dependency_9 = _pragmateUi003Components;
    }, function (_pragmateUi003Link) {
      dependency_10 = _pragmateUi003Link;
    }, function (_aimpactChat101SharedComponents) {
      dependency_11 = _aimpactChat101SharedComponents;
    }, function (_aimpactChat101SharedHooks) {
      dependency_12 = _aimpactChat101SharedHooks;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.1.2"], ["@aimpact/chat-api", "0.2.0"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.2.0"], ["@bgroup/media-manager", "1.0.0"], ["pragmate-ui", "0.0.3"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.4"], ["socket.io-client", "4.7.1"], ["tippy.js", "6.3.7"], ["uuid", "9.0.0"], ["@beyond-js/widgets", "0.1.5"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat", "1.0.1"], ["@aimpact/ailearn-app", "0.0.23"]]);
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['react', dependency_4], ['pragmate-ui/form', dependency_5], ['@beyond-js/kernel/routing', dependency_6], ['@aimpact/chat-sdk/session', dependency_7], ['pragmate-ui/alert', dependency_8], ['pragmate-ui/components', dependency_9], ['pragmate-ui/link', dependency_10], ['@aimpact/chat/shared/components', dependency_11], ['@aimpact/chat/shared/hooks', dependency_12]]);
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

      /****************************
      INTERNAL MODULE: ./views/form
      ****************************/

      ims.set('./views/form', {
        hash: 536122622,
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
                setValues({
                  email: '',
                  password: ''
                });
                return;
              } catch (e) {
                setError(texts.errorLogin); // Replace with the semantic name
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
              className: `form-action-by-mail ${showForm ? 'show mb-20' : ''}`,
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
              ...formDisabled,
              onClick: onSubmit,
              loading: fetching == 'default',
              label: texts.signInButton
            }), _react.default.createElement(_components.Button, {
              onClick: closeForm,
              label: texts.closeButton
            }))))));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 2646172296,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _link = require("pragmate-ui/link");
          var _components2 = require("@aimpact/chat/shared/components");
          var _hooks = require("@aimpact/chat/shared/hooks");
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
              className: 'panel'
            }, _react.default.createElement("aimpact-login-presentation", null)), _react.default.createElement("div", {
              className: 'panel'
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
            }, _react.default.createElement("span", {
              className: 'term-and-privacy__description h5 tyc'
            }, texts.termsAndPrivacy), _react.default.createElement("div", null, _react.default.createElement("span", {
              className: 'tyc p2'
            }, texts.termsCondition), _react.default.createElement("div", {
              className: `term-login__container ${showForm ? 'show mb-20' : ''}`
            }, _react.default.createElement("div", {
              className: 'divider-section'
            }), _react.default.createElement("span", {
              className: 'conditions-title__text h5'
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
            }, showForm && _react.default.createElement(_link.Link, {
              href: `/auth/recovery`,
              className: 'mb-10'
            }, texts.forgotPasswordLink), _react.default.createElement(_link.Link, {
              href: `/auth/register`
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsIldpZGdldCIsIlZpZXciLCJleHBvcnRzIiwiX3JlYWN0IiwiX2Zvcm0iLCJfcm91dGluZyIsIl9zZXNzaW9uIiwiX2FsZXJ0IiwiX2NvbXBvbmVudHMiLCJMb2dpbkZvcm0iLCJzaG93Rm9ybSIsInNldFNob3dGb3JtIiwidGV4dHMiLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJ1c2VTdGF0ZSIsImVtYWlsIiwicGFzc3dvcmQiLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwiZXJyb3IiLCJzZXRFcnJvciIsImNsb3NpbmdGb3JtIiwic2V0Q2xvc2luZ0Zvcm0iLCJmb3JtRGlzYWJsZWQiLCJkaXNhYmxlZCIsImhhbmRsZUNoYW5nZSIsImN1cnJlbnRUYXJnZXQiLCJ0YXJnZXQiLCJjdXJyZW50VmFsdWUiLCJuYW1lIiwidmFsdWUiLCJoYW5kbGVGb3JtQnV0dG9uQ2xpY2siLCJjbG9zZUZvcm0iLCJoYW5kbGVUcmFuc2l0aW9uRW5kIiwib25Hb29nbGUiLCJldmVudCIsInJlc3BvbnNlIiwic2Vzc2lvbldyYXBwZXIiLCJzaWduSW5XaXRoR29vZ2xlIiwic3RhdHVzIiwiZXJyb3JMb2dpbkdvb2dsZSIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJlIiwiY29uc29sZSIsIm1lc3NhZ2UiLCJvblN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiYXV0aCIsImxvZ2luIiwiZXJyb3JMb2dpbiIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJjbGFzc05hbWUiLCJsb2dpblRpdGxlIiwiRm9ybSIsIkFsZXJ0IiwibW9kZSIsImlzQ2xvc2UiLCJCdXR0b24iLCJpY29uIiwib25DbGljayIsImxvYWRpbmciLCJsYWJlbCIsImdvb2dsZVNpZ25JbkJ1dHRvbiIsInZhcmlhbnQiLCJlbWFpbFNpZ25JbkJ1dHRvbiIsIm9uVHJhbnNpdGlvbkVuZCIsIklucHV0IiwicGxhY2Vob2xkZXIiLCJlbWFpbExhYmVsIiwidHlwZSIsIm9uQ2hhbmdlIiwicmVxdWlyZWQiLCJwYXNzd29yZExhYmVsIiwic2lnbkluQnV0dG9uIiwiY2xvc2VCdXR0b24iLCJfbGluayIsIl9jb21wb25lbnRzMiIsIl9ob29rcyIsIl9iZXlvbmRfY29udGV4dCIsInRleHRSZWFkeSIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwiU3Bpbm5lciIsImFjdGl2ZSIsIlRoZW1lU3dpdGNoIiwidGV4dCIsInRoZW1lIiwidGVybXNBbmRQcml2YWN5IiwidGVybXNDb25kaXRpb24iLCJwYXNzd29yZENvbmRpdGlvbnMiLCJ0aXRsZSIsIm1pbmltdW1DaGFyYWN0ZXJzIiwibWluaW11bUxldHRlcnMiLCJtaW5pbXVtU3BlY2lhbCIsIkxpbmsiLCJocmVmIiwiZm9yZ290UGFzc3dvcmRMaW5rIiwiY3JlYXRlQWNjb3VudExpbmsiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy92aWV3cy9mb3JtLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUVPO1VBQVUsTUFDWEUsVUFBVyxTQUFRSCxLQUFBLENBQUFJLHlCQUF5QjtZQUNqRCxJQUFJQyxNQUFNQSxDQUFBO2NBQ1QsT0FBT0gsTUFBQSxDQUFBSSxJQUFJO1lBQ1o7O1VBQ0FDLE9BQUEsQ0FBQUosVUFBQSxHQUFBQSxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1JELElBQUFLLE1BQUEsR0FBQVAsT0FBQTtVQUNBLElBQUFRLEtBQUEsR0FBQVIsT0FBQTtVQUNBLElBQUFTLFFBQUEsR0FBQVQsT0FBQTtVQUNBLElBQUFVLFFBQUEsR0FBQVYsT0FBQTtVQUNBLElBQUFXLE1BQUEsR0FBQVgsT0FBQTtVQUNBLElBQUFZLFdBQUEsR0FBQVosT0FBQTtVQUdNLFNBQVVhLFNBQVNBLENBQUM7WUFBRUMsUUFBUTtZQUFFQyxXQUFXO1lBQUVDO1VBQUssQ0FBRTtZQUN6RCxNQUFNLENBQUNDLE1BQU0sRUFBRUMsU0FBUyxDQUFDLEdBQUcsSUFBQVgsTUFBQSxDQUFBWSxRQUFRLEVBQUM7Y0FBRUMsS0FBSyxFQUFFLEVBQUU7Y0FBRUMsUUFBUSxFQUFFO1lBQUUsQ0FBRSxDQUFDO1lBQ2pFLE1BQU0sQ0FBQ0MsUUFBUSxFQUFFQyxXQUFXLENBQUMsR0FBRyxJQUFBaEIsTUFBQSxDQUFBWSxRQUFRLEVBQXlDLEVBQUUsQ0FBQztZQUNwRixNQUFNLENBQUNLLEtBQUssRUFBRUMsUUFBUSxDQUFDLEdBQUcsSUFBQWxCLE1BQUEsQ0FBQVksUUFBUSxFQUFDLEVBQUUsQ0FBQztZQUN0QyxNQUFNLENBQUNPLFdBQVcsRUFBRUMsY0FBYyxDQUFDLEdBQUcsSUFBQXBCLE1BQUEsQ0FBQVksUUFBUSxFQUFDLEtBQUssQ0FBQztZQUVyRCxNQUFNUyxZQUFZLEdBQVUsRUFBRTtZQUM5QixNQUFNO2NBQUVSLEtBQUs7Y0FBRUM7WUFBUSxDQUFFLEdBQUdKLE1BQU07WUFDbEMsSUFBSSxDQUFDRyxLQUFLLElBQUksQ0FBQ0MsUUFBUSxFQUFFTyxZQUFZLENBQUNDLFFBQVEsR0FBRyxJQUFJO1lBRXJELE1BQU1DLFlBQVksR0FBR0EsQ0FBQztjQUFFQyxhQUFhLEVBQUVDO1lBQU0sQ0FBRSxLQUFJO2NBQ2xELE1BQU1DLFlBQVksR0FBRztnQkFBRSxHQUFHaEI7Y0FBTSxDQUFFO2NBQ2xDZ0IsWUFBWSxDQUFDRCxNQUFNLENBQUNFLElBQUksQ0FBQyxHQUFHRixNQUFNLENBQUNHLEtBQUs7Y0FDeENqQixTQUFTLENBQUNlLFlBQVksQ0FBQztjQUN2QlIsUUFBUSxDQUFDLEVBQUUsQ0FBQztZQUNiLENBQUM7WUFFRCxNQUFNVyxxQkFBcUIsR0FBR0EsQ0FBQSxLQUFLO2NBQ2xDckIsV0FBVyxDQUFDLElBQUksQ0FBQztZQUNsQixDQUFDO1lBRUQsTUFBTXNCLFNBQVMsR0FBR0EsQ0FBQSxLQUFLO2NBQ3RCVixjQUFjLENBQUMsSUFBSSxDQUFDO1lBQ3JCLENBQUM7WUFFRCxNQUFNVyxtQkFBbUIsR0FBR0EsQ0FBQSxLQUFLO2NBQ2hDLElBQUlaLFdBQVcsRUFBRTtnQkFDaEJDLGNBQWMsQ0FBQyxLQUFLLENBQUM7Z0JBQ3JCWixXQUFXLENBQUMsS0FBSyxDQUFDOztZQUVwQixDQUFDO1lBRUQsTUFBTXdCLFFBQVEsR0FBRyxNQUFNQyxLQUFLLElBQUc7Y0FDOUIsSUFBSTtnQkFDSGpCLFdBQVcsQ0FBQyxRQUFRLENBQUM7Z0JBRXJCLE1BQU1rQixRQUFRLEdBQUcsTUFBTS9CLFFBQUEsQ0FBQWdDLGNBQWMsQ0FBQ0MsZ0JBQWdCLEVBQUU7Z0JBRXhELElBQUksQ0FBQ0YsUUFBUSxDQUFDRyxNQUFNLEVBQUU7a0JBQ3JCLElBQUlILFFBQVEsQ0FBQ2pCLEtBQUssS0FBSyxzQkFBc0IsRUFBRTtvQkFDOUNELFdBQVcsQ0FBQyxFQUFFLENBQUM7bUJBQ2YsTUFBTTtvQkFDTkUsUUFBUSxDQUFDVCxLQUFLLENBQUM2QixnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7OztrQkFFbkM7O2dCQUdEdEIsV0FBVyxDQUFDLEVBQUUsQ0FBQztnQkFDZmQsUUFBQSxDQUFBcUMsT0FBTyxDQUFDQyxTQUFTLENBQUMsR0FBRyxDQUFDO2VBQ3RCLENBQUMsT0FBT0MsQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUN6QixLQUFLLENBQUN3QixDQUFDLENBQUNFLE9BQU8sQ0FBQzs7WUFFMUIsQ0FBQztZQUVELE1BQU1DLFFBQVEsR0FBRyxNQUFNWCxLQUFLLElBQUc7Y0FDOUJqQixXQUFXLENBQUMsU0FBUyxDQUFDO2NBQ3RCLE1BQU07Z0JBQUVILEtBQUs7Z0JBQUVDO2NBQVEsQ0FBRSxHQUFHSixNQUFNO2NBRWxDLElBQUk7Z0JBQ0h1QixLQUFLLENBQUNZLGNBQWMsRUFBRTtnQkFDdEIsTUFBTVgsUUFBUSxHQUFHLE1BQU0vQixRQUFBLENBQUFnQyxjQUFjLENBQUNXLElBQUksQ0FBQ0MsS0FBSyxDQUFDbEMsS0FBSyxFQUFFQyxRQUFRLENBQUM7Z0JBRWpFLElBQUksQ0FBQ29CLFFBQVEsQ0FBQ0csTUFBTSxFQUFFO2tCQUNyQixPQUFPbkIsUUFBUSxDQUFDZ0IsUUFBUSxDQUFDakIsS0FBSyxDQUFDOztnQkFFaENOLFNBQVMsQ0FBQztrQkFBRUUsS0FBSyxFQUFFLEVBQUU7a0JBQUVDLFFBQVEsRUFBRTtnQkFBRSxDQUFFLENBQUM7Z0JBQ3RDO2VBQ0EsQ0FBQyxPQUFPMkIsQ0FBQyxFQUFFO2dCQUNYdkIsUUFBUSxDQUFDVCxLQUFLLENBQUN1QyxVQUFVLENBQUMsQ0FBQyxDQUFDO2VBQzVCLFNBQVM7Z0JBQ1RoQyxXQUFXLENBQUMsRUFBRSxDQUFDOztZQUVqQixDQUFDO1lBRUQsT0FDQ2hCLE1BQUEsQ0FBQWlELE9BQUEsQ0FBQUMsYUFBQSxDQUFBbEQsTUFBQSxDQUFBaUQsT0FBQSxDQUFBRSxRQUFBLFFBQ0NuRCxNQUFBLENBQUFpRCxPQUFBLENBQUFDLGFBQUE7Y0FBSUUsU0FBUyxFQUFDO1lBQXNCLEdBQUUzQyxLQUFLLENBQUM0QyxVQUFVLENBQU0sRUFDNURyRCxNQUFBLENBQUFpRCxPQUFBLENBQUFDLGFBQUEsQ0FBQ2pELEtBQUEsQ0FBQXFELElBQUk7Y0FBQ1YsUUFBUSxFQUFFQTtZQUFRLEdBQ3ZCNUMsTUFBQSxDQUFBaUQsT0FBQSxDQUFBQyxhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUErQixHQUM3Q3BELE1BQUEsQ0FBQWlELE9BQUEsQ0FBQUMsYUFBQSxDQUFDOUMsTUFBQSxDQUFBbUQsS0FBSztjQUFDWixPQUFPLEVBQUUxQixLQUFLO2NBQUV1QyxJQUFJLEVBQUMsT0FBTztjQUFDQyxPQUFPLEVBQUU7WUFBSSxFQUFJLEVBQ3BELENBQUNsRCxRQUFRLElBQ1RQLE1BQUEsQ0FBQWlELE9BQUEsQ0FBQUMsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBYyxHQUM1QnBELE1BQUEsQ0FBQWlELE9BQUEsQ0FBQUMsYUFBQSxDQUFDN0MsV0FBQSxDQUFBcUQsTUFBTTtjQUNOQyxJQUFJLEVBQUMsUUFBUTtjQUNiQyxPQUFPLEVBQUU1QixRQUFRO2NBQ2pCNkIsT0FBTyxFQUFFOUMsUUFBUSxJQUFJLFFBQVE7Y0FDN0IrQyxLQUFLLEVBQUVyRCxLQUFLLENBQUNzRDtZQUFrQixFQUM5QixDQUVILEVBQ0EsQ0FBQ3hELFFBQVEsSUFDVFAsTUFBQSxDQUFBaUQsT0FBQSxDQUFBQyxhQUFBO2NBQUtFLFNBQVMsRUFBRSx3QkFBd0JqQyxXQUFXLEdBQUcsU0FBUyxHQUFHLEVBQUU7WUFBRSxHQUNyRW5CLE1BQUEsQ0FBQWlELE9BQUEsQ0FBQUMsYUFBQSxDQUFDN0MsV0FBQSxDQUFBcUQsTUFBTTtjQUNOQyxJQUFJLEVBQUMsT0FBTztjQUNaSyxPQUFPLEVBQUMsV0FBVztjQUNuQkosT0FBTyxFQUFFL0IscUJBQXFCO2NBQzlCaUMsS0FBSyxFQUFFckQsS0FBSyxDQUFDd0Q7WUFBaUIsRUFDN0IsQ0FFSCxFQUNEakUsTUFBQSxDQUFBaUQsT0FBQSxDQUFBQyxhQUFBO2NBQ0NFLFNBQVMsRUFBRSx1QkFBdUI3QyxRQUFRLEdBQUcsWUFBWSxHQUFHLEVBQUUsRUFBRTtjQUNoRTJELGVBQWUsRUFBRW5DO1lBQW1CLEdBRXBDL0IsTUFBQSxDQUFBaUQsT0FBQSxDQUFBQyxhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUErQixHQUM3Q3BELE1BQUEsQ0FBQWlELE9BQUEsQ0FBQUMsYUFBQSxDQUFDakQsS0FBQSxDQUFBa0UsS0FBSztjQUNMQyxXQUFXLEVBQUUzRCxLQUFLLENBQUM0RCxVQUFVO2NBQzdCQyxJQUFJLEVBQUMsTUFBTTtjQUNYM0MsSUFBSSxFQUFDLE9BQU87Y0FDWkMsS0FBSyxFQUFFZixLQUFLO2NBQ1owRCxRQUFRLEVBQUVoRCxZQUFZO2NBQ3RCaUQsUUFBUTtZQUFBLEVBQ1AsRUFDRnhFLE1BQUEsQ0FBQWlELE9BQUEsQ0FBQUMsYUFBQSxDQUFDakQsS0FBQSxDQUFBa0UsS0FBSztjQUNMQyxXQUFXLEVBQUUzRCxLQUFLLENBQUNnRSxhQUFhO2NBQ2hDSCxJQUFJLEVBQUMsVUFBVTtjQUNmM0MsSUFBSSxFQUFDLFVBQVU7Y0FDZkMsS0FBSyxFQUFFZCxRQUFRO2NBQ2Z5RCxRQUFRLEVBQUVoRCxZQUFZO2NBQ3RCaUQsUUFBUTtZQUFBLEVBQ1AsRUFDRnhFLE1BQUEsQ0FBQWlELE9BQUEsQ0FBQUMsYUFBQSxDQUFDN0MsV0FBQSxDQUFBcUQsTUFBTTtjQUNOWSxJQUFJLEVBQUMsUUFBUTtjQUFBLEdBQ1RqRCxZQUFZO2NBQ2hCdUMsT0FBTyxFQUFFaEIsUUFBUTtjQUNqQmlCLE9BQU8sRUFBRTlDLFFBQVEsSUFBSSxTQUFTO2NBQzlCK0MsS0FBSyxFQUFFckQsS0FBSyxDQUFDaUU7WUFBWSxFQUN4QixFQUNGMUUsTUFBQSxDQUFBaUQsT0FBQSxDQUFBQyxhQUFBLENBQUM3QyxXQUFBLENBQUFxRCxNQUFNO2NBQUNFLE9BQU8sRUFBRTlCLFNBQVM7Y0FBRWdDLEtBQUssRUFBRXJELEtBQUssQ0FBQ2tFO1lBQVcsRUFBSSxDQUNuRCxDQUNELENBQ0QsQ0FDQSxDQUNMO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDL0lBLElBQUEzRSxNQUFBLEdBQUFQLE9BQUE7VUFDQSxJQUFBWSxXQUFBLEdBQUFaLE9BQUE7VUFDQSxJQUFBbUYsS0FBQSxHQUFBbkYsT0FBQTtVQUNBLElBQUFvRixZQUFBLEdBQUFwRixPQUFBO1VBQ0EsSUFBQXFGLE1BQUEsR0FBQXJGLE9BQUE7VUFDQSxJQUFBc0YsZUFBQSxHQUFBdEYsT0FBQTtVQUNBLElBQUFRLEtBQUEsR0FBQVIsT0FBQTtVQUVPO1VBQVUsU0FDUkssSUFBSUEsQ0FBQTtZQUNaLE1BQU0sQ0FBQ2tGLFNBQVMsRUFBRXZFLEtBQUssQ0FBQyxHQUFHLElBQUFxRSxNQUFBLENBQUFHLFFBQVEsRUFBQ0YsZUFBQSxDQUFBRyxNQUFNLENBQUNDLFNBQVMsQ0FBQztZQUNyRCxNQUFNLENBQUM1RSxRQUFRLEVBQUVDLFdBQVcsQ0FBQyxHQUFHLElBQUFSLE1BQUEsQ0FBQVksUUFBUSxFQUFDLEtBQUssQ0FBQztZQUUvQyxJQUFJLENBQUNvRSxTQUFTLEVBQUUsT0FBT2hGLE1BQUEsQ0FBQWlELE9BQUEsQ0FBQUMsYUFBQSxDQUFDN0MsV0FBQSxDQUFBK0UsT0FBTztjQUFDQyxNQUFNO2NBQUNmLElBQUksRUFBQztZQUFTLEVBQUc7WUFFeEQsT0FDQ3RFLE1BQUEsQ0FBQWlELE9BQUEsQ0FBQUMsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBZ0IsR0FDOUJwRCxNQUFBLENBQUFpRCxPQUFBLENBQUFDLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQU8sR0FDckJwRCxNQUFBLENBQUFpRCxPQUFBLENBQUFDLGFBQUEsb0NBQThCLENBQ3pCLEVBQ05sRCxNQUFBLENBQUFpRCxPQUFBLENBQUFDLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQU8sR0FDckJwRCxNQUFBLENBQUFpRCxPQUFBLENBQUFDLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQWlCLEdBQy9CcEQsTUFBQSxDQUFBaUQsT0FBQSxDQUFBQyxhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFlLEdBQzdCcEQsTUFBQSxDQUFBaUQsT0FBQSxDQUFBQyxhQUFBLENBQUMyQixZQUFBLENBQUFTLFdBQVc7Y0FBQ0MsSUFBSSxFQUFFOUUsS0FBSyxDQUFDK0U7WUFBSyxFQUFJLENBQzdCLEVBQ054RixNQUFBLENBQUFpRCxPQUFBLENBQUFDLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQWdCLEdBQzlCcEQsTUFBQSxDQUFBaUQsT0FBQSxDQUFBQyxhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUF1QixHQUNyQ3BELE1BQUEsQ0FBQWlELE9BQUEsQ0FBQUMsYUFBQSxDQUFDakQsS0FBQSxDQUFBSyxTQUFTO2NBQUNDLFFBQVEsRUFBRUEsUUFBUTtjQUFFQyxXQUFXLEVBQUVBLFdBQVc7Y0FBRUMsS0FBSyxFQUFFQTtZQUFLLEVBQUksRUFFekVULE1BQUEsQ0FBQWlELE9BQUEsQ0FBQUMsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBeUIsR0FDdkNwRCxNQUFBLENBQUFpRCxPQUFBLENBQUFDLGFBQUE7Y0FBTUUsU0FBUyxFQUFDO1lBQXNDLEdBQUUzQyxLQUFLLENBQUNnRixlQUFlLENBQVEsRUFDckZ6RixNQUFBLENBQUFpRCxPQUFBLENBQUFDLGFBQUEsY0FDQ2xELE1BQUEsQ0FBQWlELE9BQUEsQ0FBQUMsYUFBQTtjQUFNRSxTQUFTLEVBQUM7WUFBUSxHQUFFM0MsS0FBSyxDQUFDaUYsY0FBYyxDQUFRLEVBQ3REMUYsTUFBQSxDQUFBaUQsT0FBQSxDQUFBQyxhQUFBO2NBQUtFLFNBQVMsRUFBRSx5QkFBeUI3QyxRQUFRLEdBQUcsWUFBWSxHQUFHLEVBQUU7WUFBRSxHQUN0RVAsTUFBQSxDQUFBaUQsT0FBQSxDQUFBQyxhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFpQixFQUFHLEVBQ25DcEQsTUFBQSxDQUFBaUQsT0FBQSxDQUFBQyxhQUFBO2NBQU1FLFNBQVMsRUFBQztZQUEyQixHQUN6QzNDLEtBQUssQ0FBQ2tGLGtCQUFrQixFQUFFQyxLQUFLLENBQzFCLEVBQ1A1RixNQUFBLENBQUFpRCxPQUFBLENBQUFDLGFBQUE7Y0FBSUUsU0FBUyxFQUFDO1lBQTRCLEdBQ3pDcEQsTUFBQSxDQUFBaUQsT0FBQSxDQUFBQyxhQUFBO2NBQUlFLFNBQVMsRUFBQztZQUFJLEdBQUUzQyxLQUFLLENBQUNrRixrQkFBa0IsRUFBRUUsaUJBQWlCLENBQU0sRUFDckU3RixNQUFBLENBQUFpRCxPQUFBLENBQUFDLGFBQUE7Y0FBSUUsU0FBUyxFQUFDO1lBQUksR0FBRTNDLEtBQUssQ0FBQ2tGLGtCQUFrQixFQUFFRyxjQUFjLENBQU0sRUFDbEU5RixNQUFBLENBQUFpRCxPQUFBLENBQUFDLGFBQUE7Y0FBSUUsU0FBUyxFQUFDO1lBQUksR0FBRTNDLEtBQUssQ0FBQ2tGLGtCQUFrQixFQUFFSSxjQUFjLENBQU0sQ0FDOUQsQ0FDQSxFQUNOL0YsTUFBQSxDQUFBaUQsT0FBQSxDQUFBQyxhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFpQixFQUFHLEVBQ25DcEQsTUFBQSxDQUFBaUQsT0FBQSxDQUFBQyxhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFlLEdBQzVCN0MsUUFBUSxJQUNSUCxNQUFBLENBQUFpRCxPQUFBLENBQUFDLGFBQUEsQ0FBQzBCLEtBQUEsQ0FBQW9CLElBQUk7Y0FBQ0MsSUFBSSxFQUFFLGdCQUFnQjtjQUFFN0MsU0FBUyxFQUFDO1lBQU8sR0FDN0MzQyxLQUFLLENBQUN5RixrQkFBa0IsQ0FFMUIsRUFDRGxHLE1BQUEsQ0FBQWlELE9BQUEsQ0FBQUMsYUFBQSxDQUFDMEIsS0FBQSxDQUFBb0IsSUFBSTtjQUFDQyxJQUFJLEVBQUU7WUFBZ0IsR0FBR3hGLEtBQUssQ0FBQzBGLGlCQUFpQixDQUFRLENBQ3pELENBQ0QsQ0FDRCxDQUNELENBQ0QsQ0FDRCxDQUNELENBQ0Q7VUFFUiJ9