System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "react@18.2.0", "pragmate-ui@0.1.1/form", "@beyond-js/kernel@0.1.9/routing", "@aimpact/chat-sdk@1.0.0/session", "pragmate-ui@0.1.1/alert", "pragmate-ui@0.1.1/components", "pragmate-ui@0.1.1/link", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/auth@0.0.1/components", "pragmate-ui@0.1.1/image", "@beyond-js/kernel@0.1.9/core", "@aimpact/auth@0.0.1/config"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, bimport, __Bundle, __pkg, ims, Controller, View, Languages, __beyond_pkg, hmr;
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
    }, function (_aimpactChatSdk100Session) {
      dependency_7 = _aimpactChatSdk100Session;
    }, function (_pragmateUi011Alert) {
      dependency_8 = _pragmateUi011Alert;
    }, function (_pragmateUi011Components) {
      dependency_9 = _pragmateUi011Components;
    }, function (_pragmateUi011Link) {
      dependency_10 = _pragmateUi011Link;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_11 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactAuth001Components) {
      dependency_12 = _aimpactAuth001Components;
    }, function (_pragmateUi011Image) {
      dependency_13 = _pragmateUi011Image;
    }, function (_beyondJsKernel019Core) {
      dependency_14 = _beyondJsKernel019Core;
    }, function (_aimpactAuth001Config) {
      dependency_15 = _aimpactAuth001Config;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-sdk", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@beyond-js/widgets", "1.1.0"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["socket.io-client", "4.7.3"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.46"], ["@types/react-dom", "18.2.18"], ["@aimpact/auth", "0.0.1"], ["@aimpact/ailearn-app", "0.0.42"]]);
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['react', dependency_4], ['pragmate-ui/form', dependency_5], ['@beyond-js/kernel/routing', dependency_6], ['@aimpact/chat-sdk/session', dependency_7], ['pragmate-ui/alert', dependency_8], ['pragmate-ui/components', dependency_9], ['pragmate-ui/link', dependency_10], ['@beyond-js/react-18-widgets/hooks', dependency_11], ['@aimpact/auth/components', dependency_12], ['pragmate-ui/image', dependency_13], ['@beyond-js/kernel/core', dependency_14], ['@aimpact/auth/config', dependency_15]]);
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
        hash: 4100199350,
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
        hash: 979104882,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsIldpZGdldCIsIlZpZXciLCJleHBvcnRzIiwiX3JlYWN0IiwiX2Zvcm0iLCJfcm91dGluZyIsIl9zZXNzaW9uIiwiX2FsZXJ0IiwiX2NvbXBvbmVudHMiLCJMb2dpbkZvcm0iLCJzaG93Rm9ybSIsInNldFNob3dGb3JtIiwidGV4dHMiLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJ1c2VTdGF0ZSIsImVtYWlsIiwicGFzc3dvcmQiLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwiZXJyb3IiLCJzZXRFcnJvciIsImNsb3NpbmdGb3JtIiwic2V0Q2xvc2luZ0Zvcm0iLCJmb3JtRGlzYWJsZWQiLCJkaXNhYmxlZCIsImhhbmRsZUNoYW5nZSIsImN1cnJlbnRUYXJnZXQiLCJ0YXJnZXQiLCJjdXJyZW50VmFsdWUiLCJuYW1lIiwidmFsdWUiLCJoYW5kbGVGb3JtQnV0dG9uQ2xpY2siLCJjbG9zZUZvcm0iLCJoYW5kbGVUcmFuc2l0aW9uRW5kIiwib25Hb29nbGUiLCJldmVudCIsInJlc3BvbnNlIiwic2Vzc2lvbldyYXBwZXIiLCJzaWduSW5XaXRoR29vZ2xlIiwic3RhdHVzIiwiZXJyb3JMb2dpbkdvb2dsZSIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJlIiwiY29uc29sZSIsIm1lc3NhZ2UiLCJvblN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiYXV0aCIsImxvZ2luIiwiZXJyb3JMb2dpbiIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJjbGFzc05hbWUiLCJsb2dpblRpdGxlIiwiRm9ybSIsIkFsZXJ0IiwibW9kZSIsImlzQ2xvc2UiLCJCdXR0b24iLCJpY29uIiwidmFyaWFudCIsInBlcGl0byIsIm9uQ2xpY2siLCJsb2FkaW5nIiwibGFiZWwiLCJnb29nbGVTaWduSW5CdXR0b24iLCJvblRyYW5zaXRpb25FbmQiLCJJbnB1dCIsInBsYWNlaG9sZGVyIiwiZW1haWxMYWJlbCIsInR5cGUiLCJvbkNoYW5nZSIsInJlcXVpcmVkIiwicGFzc3dvcmRMYWJlbCIsInNpZ25JbkJ1dHRvbiIsImNsb3NlQnV0dG9uIiwiX2hvb2tzIiwiX2JleW9uZF9jb250ZXh0IiwiX2xhbmd1YWdlcyIsIl9wcmVzZW50YXRpb24iLCJ0ZXh0UmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsIlNwaW5uZXIiLCJhY3RpdmUiLCJQcmVzZW50YXRpb24iLCJwcmVzZW50YXRpb24iLCJMYW5ndWFnZXMiLCJ0ZXJtc0FuZFByaXZhY3kiLCJ0ZXJtc0NvbmRpdGlvbiIsInBhc3N3b3JkQ29uZGl0aW9ucyIsInRpdGxlIiwibWluaW11bUNoYXJhY3RlcnMiLCJtaW5pbXVtTGV0dGVycyIsIm1pbmltdW1TcGVjaWFsIiwiX2ltYWdlIiwiX2NvcmUiLCJjaGFuZ2VMYW5ndWFnZSIsImxhbmd1YWdlcyIsImN1cnJlbnQiLCJkYXRhc2V0IiwibGFuZ3VhZ2UiLCJJbWFnZSIsInNyYyIsImFsdCIsIlRoZW1lU3dpdGNoIiwidGV4dCIsInRoZW1lIiwiX2NvbmZpZyIsInBhcmFtcyIsIkFQUF9MT0dPIiwiZGVzY3JpcHRpb24iXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy92aWV3cy9mb3JtLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvbGFuZ3VhZ2VzLnRzeCIsIi90cy92aWV3cy9wcmVzZW50YXRpb24udHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUVPO1VBQVUsTUFDWEUsVUFBVyxTQUFR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