System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.4/page", "react@18.2.0", "pragmate-ui@0.0.6/form", "@beyond-js/kernel@0.1.9/routing", "@aimpact/chat-sdk@1.0.0/session", "pragmate-ui@0.0.6/alert", "pragmate-ui@0.0.6/components", "pragmate-ui@0.0.6/link", "@aimpact/auth@0.0.1/components", "@beyond-js/react-18-widgets@1.0.4/hooks", "pragmate-ui@0.0.6/image", "@beyond-js/kernel@0.1.9/core"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
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
    }, function (_pragmateUi006Image) {
      dependency_13 = _pragmateUi006Image;
    }, function (_beyondJsKernel019Core) {
      dependency_14 = _beyondJsKernel019Core;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-sdk", "1.0.0"], ["@beyond-js/reactive", "1.1.11"], ["pragmate-ui", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "1.0.4"], ["socket.io-client", "4.7.3"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.46"], ["@types/react-dom", "18.2.18"], ["@aimpact/auth", "0.0.1"], ["@aimpact/ailearn-app", "0.0.25"]]);
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['react', dependency_4], ['pragmate-ui/form', dependency_5], ['@beyond-js/kernel/routing', dependency_6], ['@aimpact/chat-sdk/session', dependency_7], ['pragmate-ui/alert', dependency_8], ['pragmate-ui/components', dependency_9], ['pragmate-ui/link', dependency_10], ['@aimpact/auth/components', dependency_11], ['@beyond-js/react-18-widgets/hooks', dependency_12], ['pragmate-ui/image', dependency_13], ['@beyond-js/kernel/core', dependency_14]]);
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
        hash: 3977090354,
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
          var _image = require("pragmate-ui/image");
          var _core = require("@beyond-js/kernel/core");
          /*bundle*/
          function View() {
            const [textReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            const [showForm, setShowForm] = (0, _react.useState)(false);
            if (!textReady) return _react.default.createElement(_components.Spinner, {
              active: true,
              type: 'primary'
            });
            const changeLanguage = event => {
              _core.languages.current = event.currentTarget.dataset.language;
            };
            return _react.default.createElement("div", {
              className: 'page-container page-auth-container'
            }, _react.default.createElement("div", {
              className: `first-panel ${showForm ? 'small' : 'large'}`
            }, _react.default.createElement("aimpact-login-presentation", null)), _react.default.createElement("div", {
              className: 'second-panel'
            }, _react.default.createElement("div", {
              className: 'login-container'
            }, _react.default.createElement("div", {
              className: 'login__header'
            }, _react.default.createElement("ul", {
              className: 'language-selection'
            }, _react.default.createElement("li", null, _react.default.createElement(_image.Image, {
              onClick: changeLanguage,
              "data-language": 'en',
              src: '/assets/english.png',
              alt: 'english language',
              title: 'english language'
            })), _react.default.createElement("li", null, _react.default.createElement(_image.Image, {
              onClick: changeLanguage,
              "data-language": 'es',
              src: '/assets/spanish.png',
              alt: 'spanish language',
              title: 'ver en Espa\u00F1ol'
            })), _react.default.createElement("li", null, _react.default.createElement(_components2.ThemeSwitch, {
              text: texts.theme
            })))), _react.default.createElement("div", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsIldpZGdldCIsIlZpZXciLCJleHBvcnRzIiwiX3JlYWN0IiwiX2Zvcm0iLCJfcm91dGluZyIsIl9zZXNzaW9uIiwiX2FsZXJ0IiwiX2NvbXBvbmVudHMiLCJMb2dpbkZvcm0iLCJzaG93Rm9ybSIsInNldFNob3dGb3JtIiwidGV4dHMiLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJ1c2VTdGF0ZSIsImVtYWlsIiwicGFzc3dvcmQiLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwiZXJyb3IiLCJzZXRFcnJvciIsImNsb3NpbmdGb3JtIiwic2V0Q2xvc2luZ0Zvcm0iLCJmb3JtRGlzYWJsZWQiLCJkaXNhYmxlZCIsImhhbmRsZUNoYW5nZSIsImN1cnJlbnRUYXJnZXQiLCJ0YXJnZXQiLCJjdXJyZW50VmFsdWUiLCJuYW1lIiwidmFsdWUiLCJoYW5kbGVGb3JtQnV0dG9uQ2xpY2siLCJjbG9zZUZvcm0iLCJoYW5kbGVUcmFuc2l0aW9uRW5kIiwib25Hb29nbGUiLCJldmVudCIsInJlc3BvbnNlIiwic2Vzc2lvbldyYXBwZXIiLCJzaWduSW5XaXRoR29vZ2xlIiwic3RhdHVzIiwiZXJyb3JMb2dpbkdvb2dsZSIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJlIiwiY29uc29sZSIsIm1lc3NhZ2UiLCJvblN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiYXV0aCIsImxvZ2luIiwiZXJyb3JMb2dpbiIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJjbGFzc05hbWUiLCJsb2dpblRpdGxlIiwiRm9ybSIsIkFsZXJ0IiwibW9kZSIsImlzQ2xvc2UiLCJCdXR0b24iLCJpY29uIiwidmFyaWFudCIsInBlcGl0byIsIm9uQ2xpY2siLCJsb2FkaW5nIiwibGFiZWwiLCJnb29nbGVTaWduSW5CdXR0b24iLCJlbWFpbFNpZ25JbkJ1dHRvbiIsIm9uVHJhbnNpdGlvbkVuZCIsIklucHV0IiwicGxhY2Vob2xkZXIiLCJlbWFpbExhYmVsIiwidHlwZSIsIm9uQ2hhbmdlIiwicmVxdWlyZWQiLCJwYXNzd29yZExhYmVsIiwic2lnbkluQnV0dG9uIiwiY2xvc2VCdXR0b24iLCJfbGluayIsIl9jb21wb25lbnRzMiIsIl9ob29rcyIsIl9iZXlvbmRfY29udGV4dCIsIl9pbWFnZSIsIl9jb3JlIiwidGV4dFJlYWR5IiwidXNlVGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJTcGlubmVyIiwiYWN0aXZlIiwiY2hhbmdlTGFuZ3VhZ2UiLCJsYW5ndWFnZXMiLCJjdXJyZW50IiwiZGF0YXNldCIsImxhbmd1YWdlIiwiSW1hZ2UiLCJzcmMiLCJhbHQiLCJ0aXRsZSIsIlRoZW1lU3dpdGNoIiwidGV4dCIsInRoZW1lIiwidGVybXNBbmRQcml2YWN5IiwidGVybXNDb25kaXRpb24iLCJwYXNzd29yZENvbmRpdGlvbnMiLCJtaW5pbXVtQ2hhcmFjdGVycyIsIm1pbmltdW1MZXR0ZXJzIiwibWluaW11bVNwZWNpYWwiLCJMaW5rIiwiaHJlZiIsImZvcmdvdFBhc3N3b3JkTGluayIsImNyZWF0ZUFjY291bnRMaW5rIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvdmlld3MvZm9ybS50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBRU87VUFBVSxNQUNYRSxVQUFXLFNBQVFILEtBQUEsQ0FBQUkseUJBQXlCO1lBQ2pELElBQUlDLE1BQU1BLENBQUE7Y0FDVCxPQUFPSCxNQUFBLENBQUFJLElBQUk7WUFDWjs7VUFDQUMsT0FB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