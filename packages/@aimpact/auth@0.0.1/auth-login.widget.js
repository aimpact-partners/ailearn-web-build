System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "react@18.2.0", "pragmate-ui@0.1.1/form", "@beyond-js/kernel@0.1.9/routing", "@aimpact/chat-sdk@1.0.1/session", "pragmate-ui@0.1.1/alert", "pragmate-ui@0.1.1/components", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/auth@0.0.1/components", "pragmate-ui@0.1.1/image", "@beyond-js/kernel@0.1.9/core", "@aimpact/auth@0.0.1/config"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, bimport, __Bundle, __pkg, ims, Controller, View, Languages, __beyond_pkg, hmr;
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
    }, function (_pragmateUi011Form) {
      dependency_5 = _pragmateUi011Form;
    }, function (_beyondJsKernel019Routing) {
      dependency_6 = _beyondJsKernel019Routing;
    }, function (_aimpactChatSdk101Session) {
      dependency_7 = _aimpactChatSdk101Session;
    }, function (_pragmateUi011Alert) {
      dependency_8 = _pragmateUi011Alert;
    }, function (_pragmateUi011Components) {
      dependency_9 = _pragmateUi011Components;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_10 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactAuth001Components) {
      dependency_11 = _aimpactAuth001Components;
    }, function (_pragmateUi011Image) {
      dependency_12 = _pragmateUi011Image;
    }, function (_beyondJsKernel019Core) {
      dependency_13 = _beyondJsKernel019Core;
    }, function (_aimpactAuth001Config) {
      dependency_14 = _aimpactAuth001Config;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-sdk", "1.0.1"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@beyond-js/widgets", "1.1.0"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.3"], ["@types/react-dom", "18.3.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/ailearn-app", "0.0.57"]]);
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['react', dependency_4], ['pragmate-ui/form', dependency_5], ['@beyond-js/kernel/routing', dependency_6], ['@aimpact/chat-sdk/session', dependency_7], ['pragmate-ui/alert', dependency_8], ['pragmate-ui/components', dependency_9], ['@beyond-js/react-18-widgets/hooks', dependency_10], ['@aimpact/auth/components', dependency_11], ['pragmate-ui/image', dependency_12], ['@beyond-js/kernel/core', dependency_13], ['@aimpact/auth/config', dependency_14]]);
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
        hash: 1994501140,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _beyond_context = require("beyond_context");
          var _components = require("pragmate-ui/components");
          var _react = require("react");
          var _form = require("./form");
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
            }))))))));
          }
        }
      });

      /*********************************
      INTERNAL MODULE: ./views/languages
      *********************************/

      ims.set('./views/languages', {
        hash: 228020318,
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
        hash: 2881900844,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Presentation = Presentation;
          var _react = require("react");
          var _image = require("pragmate-ui/image");
          var _config = require("@aimpact/auth/config");
          function Presentation({
            texts
          }) {
            return _react.default.createElement("div", {
              className: 'presentation-container '
            }, _react.default.createElement("div", {
              className: 'logo__container'
            }, _react.default.createElement(_image.Image, {
              src: _config.default.params.APP_LOGO
            })), _react.default.createElement("div", {
              className: 'presentation-content__container'
            }, _react.default.createElement("h1", null, texts.title), _react.default.createElement("p", {
              className: 'p1'
            }, texts.description)), _react.default.createElement("div", {
              className: 'app-watermark'
            }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsIldpZGdldCIsIlZpZXciLCJleHBvcnRzIiwiX3JlYWN0IiwiX2Zvcm0iLCJfcm91dGluZyIsIl9zZXNzaW9uIiwiX2FsZXJ0IiwiX2NvbXBvbmVudHMiLCJMb2dpbkZvcm0iLCJzaG93Rm9ybSIsInNldFNob3dGb3JtIiwidGV4dHMiLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJ1c2VTdGF0ZSIsImVtYWlsIiwicGFzc3dvcmQiLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwiZXJyb3IiLCJzZXRFcnJvciIsImNsb3NpbmdGb3JtIiwic2V0Q2xvc2luZ0Zvcm0iLCJmb3JtRGlzYWJsZWQiLCJkaXNhYmxlZCIsImhhbmRsZUNoYW5nZSIsImN1cnJlbnRUYXJnZXQiLCJ0YXJnZXQiLCJjdXJyZW50VmFsdWUiLCJuYW1lIiwidmFsdWUiLCJjbG9zZUZvcm0iLCJoYW5kbGVUcmFuc2l0aW9uRW5kIiwib25Hb29nbGUiLCJldmVudCIsInJlc3BvbnNlIiwic2Vzc2lvbldyYXBwZXIiLCJzaWduSW5XaXRoR29vZ2xlIiwic3RhdHVzIiwiZXJyb3JMb2dpbkdvb2dsZSIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJlIiwiY29uc29sZSIsIm1lc3NhZ2UiLCJvblN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiYXV0aCIsImxvZ2luIiwiZXJyb3JMb2dpbiIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJjbGFzc05hbWUiLCJsb2dpblRpdGxlIiwiRm9ybSIsIkFsZXJ0IiwibW9kZSIsImlzQ2xvc2UiLCJCdXR0b24iLCJpY29uIiwidmFyaWFudCIsInBlcGl0byIsIm9uQ2xpY2siLCJsb2FkaW5nIiwibGFiZWwiLCJnb29nbGVTaWduSW5CdXR0b24iLCJvblRyYW5zaXRpb25FbmQiLCJJbnB1dCIsInBsYWNlaG9sZGVyIiwiZW1haWxMYWJlbCIsInR5cGUiLCJvbkNoYW5nZSIsInJlcXVpcmVkIiwicGFzc3dvcmRMYWJlbCIsInNpZ25JbkJ1dHRvbiIsImNsb3NlQnV0dG9uIiwiX2hvb2tzIiwiX2JleW9uZF9jb250ZXh0IiwiX2xhbmd1YWdlcyIsIl9wcmVzZW50YXRpb24iLCJ0ZXh0UmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsIlNwaW5uZXIiLCJhY3RpdmUiLCJQcmVzZW50YXRpb24iLCJwcmVzZW50YXRpb24iLCJMYW5ndWFnZXMiLCJ0ZXJtc0FuZFByaXZhY3kiLCJ0ZXJtc0NvbmRpdGlvbiIsInBhc3N3b3JkQ29uZGl0aW9ucyIsInRpdGxlIiwibWluaW11bUNoYXJhY3RlcnMiLCJtaW5pbXVtTGV0dGVycyIsIm1pbmltdW1TcGVjaWFsIiwiX2ltYWdlIiwiX2NvcmUiLCJjaGFuZ2VMYW5ndWFnZSIsImxhbmd1YWdlcyIsImN1cnJlbnQiLCJkYXRhc2V0IiwibGFuZ3VhZ2UiLCJJbWFnZSIsInNyYyIsImFsdCIsIlRoZW1lU3dpdGNoIiwidGV4dCIsInRoZW1lIiwiX2NvbmZpZyIsInBhcmFtcyIsIkFQUF9MT0dPIiwiZGVzY3JpcHRpb24iXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy92aWV3cy9mb3JtLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvbGFuZ3VhZ2VzLnRzeCIsIi90cy92aWV3cy9wcmVzZW50YXRpb24udHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFFTztVQUFVLE1BQ1hFLFVBQVcsU0FBUUgsS0FBQSxDQUFBSSx5QkFBeUI7WUFDakQs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