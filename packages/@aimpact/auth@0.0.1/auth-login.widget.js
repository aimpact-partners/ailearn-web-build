System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "react@18.2.0", "pragmate-ui@1.0.0-beta.1/form", "@beyond-js/kernel@0.1.9/routing", "@aimpact/chat-sdk@1.0.1/session", "pragmate-ui@1.0.0-beta.1/alert", "pragmate-ui@1.0.0-beta.1/components", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.1/image", "@aimpact/auth@0.0.1/components", "@beyond-js/kernel@0.1.9/core"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, bimport, __Bundle, __pkg, ims, Controller, View, Languages, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    View: void 0,
    Languages: void 0
  });
  return {
    setters: [function (_beyondJsWidgets110Render) {
      dependency_0 = _beyondJsWidgets110Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_beyondJsReact18Widgets112Page) {
      dependency_3 = _beyondJsReact18Widgets112Page;
    }, function (_react2) {
      dependency_4 = _react2;
    }, function (_pragmateUi100Beta1Form) {
      dependency_5 = _pragmateUi100Beta1Form;
    }, function (_beyondJsKernel019Routing) {
      dependency_6 = _beyondJsKernel019Routing;
    }, function (_aimpactChatSdk101Session) {
      dependency_7 = _aimpactChatSdk101Session;
    }, function (_pragmateUi100Beta1Alert) {
      dependency_8 = _pragmateUi100Beta1Alert;
    }, function (_pragmateUi100Beta1Components) {
      dependency_9 = _pragmateUi100Beta1Components;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_10 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi100Beta1Image) {
      dependency_11 = _pragmateUi100Beta1Image;
    }, function (_aimpactAuth001Components) {
      dependency_12 = _aimpactAuth001Components;
    }, function (_beyondJsKernel019Core) {
      dependency_13 = _beyondJsKernel019Core;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-sdk", "1.0.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.1"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@beyond-js/widgets", "1.1.0"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["socket.io-client", "4.7.3"], ["wavesurfer.js", "7.8.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.46"], ["@types/react-dom", "18.2.18"], ["@aimpact/auth", "0.0.1"], ["@aimpact/ailearn-app", "0.1.0-dev.02"]]);
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['react', dependency_4], ['pragmate-ui/form', dependency_5], ['@beyond-js/kernel/routing', dependency_6], ['@aimpact/chat-sdk/session', dependency_7], ['pragmate-ui/alert', dependency_8], ['pragmate-ui/components', dependency_9], ['@beyond-js/react-18-widgets/hooks', dependency_10], ['pragmate-ui/image', dependency_11], ['@aimpact/auth/components', dependency_12], ['@beyond-js/kernel/core', dependency_13]]);
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
        hash: 3696807079,
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
            }), _react.default.createElement("div", {
              className: 'buttons__container'
            }, _react.default.createElement(_components.Button, {
              icon: 'google',
              variant: 'primary',
              pepito: 'doce',
              onClick: onGoogle,
              loading: fetching == 'google',
              label: texts.googleSignInButton
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
        hash: 193491183,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _beyond_context = require("beyond_context");
          var _form = require("./form");
          var _image = require("pragmate-ui/image");
          var _languages = require("./languages");
          var _presentation = require("./presentation");
          /*bundle*/
          function View() {
            const [textReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            const [showForm, setShowForm] = (0, _react.useState)(false);
            if (!textReady) return _react.default.createElement(_components.Spinner, {
              active: true,
              type: 'primary'
            });
            return _react.default.createElement("div", {
              className: 'login-page-container'
            }, _react.default.createElement("div", {
              className: `first-panel ${showForm ? 'small' : 'large'}`
            }, _react.default.createElement(_presentation.Presentation, {
              texts: texts.presentation
            })), _react.default.createElement("div", {
              className: 'second-panel'
            }, _react.default.createElement("div", {
              className: 'login-container'
            }, _react.default.createElement("div", {
              className: 'login__header'
            }, _react.default.createElement(_languages.Languages, {
              texts: texts
            })), _react.default.createElement("div", {
              className: 'login__content'
            }, _react.default.createElement("div", {
              className: 'login-form__container'
            }, _react.default.createElement("div", {
              className: 'mb-30'
            }, _react.default.createElement(_image.Image, {
              src: '/assets/eduscrum/logo.png',
              className: 'login-logo'
            })), _react.default.createElement(_form.LoginForm, {
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
            }))))))));
          }
        }
      });

      /*********************************
      INTERNAL MODULE: ./views/languages
      *********************************/

      ims.set('./views/languages', {
        hash: 3591678961,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Languages = Languages;
          var _react = require("react");
          var _components = require("@aimpact/auth/components");
          var _image = require("pragmate-ui/image");
          var _core = require("@beyond-js/kernel/core");
          /*bundle*/
          function Languages({
            texts
          }) {
            const changeLanguage = event => {
              _core.languages.current = event.currentTarget.dataset.language;
            };
            return _react.default.createElement("ul", {
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
            })), _react.default.createElement("li", null, _react.default.createElement(_image.Image, {
              onClick: changeLanguage,
              "data-language": 'de',
              src: '/assets/german.png',
              alt: 'german language',
              title: 'auf Deutsch anzeigen'
            })), _react.default.createElement("li", null, _react.default.createElement(_components.ThemeSwitch, {
              text: texts.theme
            })));
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./views/presentation
      ************************************/

      ims.set('./views/presentation', {
        hash: 1080967209,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Presentation = Presentation;
          var _react = require("react");
          function Presentation({
            texts
          }) {
            return _react.default.createElement("div", {
              className: 'presentation-container '
            }, _react.default.createElement("div", {
              className: 'logo__container'
            }), _react.default.createElement("div", {
              className: 'presentation-content__container'
            }, _react.default.createElement("h1", null, texts.title), _react.default.createElement("p", {
              className: 'p1'
            }, texts.description)));
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
      }, {
        "im": "./views/languages",
        "from": "Languages",
        "name": "Languages"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'View') && _export("View", View = require ? require('./views/index').View : value);
        (require || prop === 'Languages') && _export("Languages", Languages = require ? require('./views/languages').Languages : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsIldpZGdldCIsIlZpZXciLCJleHBvcnRzIiwiX3JlYWN0IiwiX2Zvcm0iLCJfcm91dGluZyIsIl9zZXNzaW9uIiwiX2FsZXJ0IiwiX2NvbXBvbmVudHMiLCJMb2dpbkZvcm0iLCJzaG93Rm9ybSIsInNldFNob3dGb3JtIiwidGV4dHMiLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJ1c2VTdGF0ZSIsImVtYWlsIiwicGFzc3dvcmQiLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwiZXJyb3IiLCJzZXRFcnJvciIsImNsb3NpbmdGb3JtIiwic2V0Q2xvc2luZ0Zvcm0iLCJmb3JtRGlzYWJsZWQiLCJkaXNhYmxlZCIsImhhbmRsZUNoYW5nZSIsImN1cnJlbnRUYXJnZXQiLCJ0YXJnZXQiLCJjdXJyZW50VmFsdWUiLCJuYW1lIiwidmFsdWUiLCJjbG9zZUZvcm0iLCJoYW5kbGVUcmFuc2l0aW9uRW5kIiwib25Hb29nbGUiLCJldmVudCIsInJlc3BvbnNlIiwic2Vzc2lvbldyYXBwZXIiLCJzaWduSW5XaXRoR29vZ2xlIiwic3RhdHVzIiwiZXJyb3JMb2dpbkdvb2dsZSIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJlIiwiY29uc29sZSIsIm1lc3NhZ2UiLCJvblN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiYXV0aCIsImxvZ2luIiwiZXJyb3JMb2dpbiIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJjbGFzc05hbWUiLCJsb2dpblRpdGxlIiwiRm9ybSIsIkFsZXJ0IiwibW9kZSIsImlzQ2xvc2UiLCJCdXR0b24iLCJpY29uIiwidmFyaWFudCIsInBlcGl0byIsIm9uQ2xpY2siLCJsb2FkaW5nIiwibGFiZWwiLCJnb29nbGVTaWduSW5CdXR0b24iLCJvblRyYW5zaXRpb25FbmQiLCJJbnB1dCIsInBsYWNlaG9sZGVyIiwiZW1haWxMYWJlbCIsInR5cGUiLCJvbkNoYW5nZSIsInJlcXVpcmVkIiwicGFzc3dvcmRMYWJlbCIsInNpZ25JbkJ1dHRvbiIsImNsb3NlQnV0dG9uIiwiX2hvb2tzIiwiX2JleW9uZF9jb250ZXh0IiwiX2ltYWdlIiwiX2xhbmd1YWdlcyIsIl9wcmVzZW50YXRpb24iLCJ0ZXh0UmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsIlNwaW5uZXIiLCJhY3RpdmUiLCJQcmVzZW50YXRpb24iLCJwcmVzZW50YXRpb24iLCJMYW5ndWFnZXMiLCJJbWFnZSIsInNyYyIsInRlcm1zQW5kUHJpdmFjeSIsInRlcm1zQ29uZGl0aW9uIiwicGFzc3dvcmRDb25kaXRpb25zIiwidGl0bGUiLCJtaW5pbXVtQ2hhcmFjdGVycyIsIm1pbmltdW1MZXR0ZXJzIiwibWluaW11bVNwZWNpYWwiLCJfY29yZSIsImNoYW5nZUxhbmd1YWdlIiwibGFuZ3VhZ2VzIiwiY3VycmVudCIsImRhdGFzZXQiLCJsYW5ndWFnZSIsImFsdCIsIlRoZW1lU3dpdGNoIiwidGV4dCIsInRoZW1lIiwiZGVzY3JpcHRpb24iXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy92aWV3cy9mb3JtLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvbGFuZ3VhZ2VzLnRzeCIsIi90cy92aWV3cy9wcmVzZW50YXRpb24udHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBRU87VUFBVSxNQUNYRSxVQUFXLFNBQVFILEtBQUEsQ0FBQUkseUJBQXlCO1lBQ2pELElBQUlDLE1BQU1BLENBQUE7Y0FDVCxPQUFPSCxNQUFB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