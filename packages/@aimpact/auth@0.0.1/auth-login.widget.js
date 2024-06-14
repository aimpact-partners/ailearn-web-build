System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "react@18.2.0", "pragmate-ui@0.1.1/form", "@beyond-js/kernel@0.1.9/routing", "@aimpact/chat-sdk@1.0.0/session", "pragmate-ui@0.1.1/alert", "pragmate-ui@0.1.1/components", "pragmate-ui@0.1.1/link", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/auth@0.0.1/components", "pragmate-ui@0.1.1/image", "@beyond-js/kernel@0.1.9/core", "@aimpact/ailearn-app@0.0.46.dev-22/config"], function (_export, _context) {
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
    }, function (_aimpactAilearnApp0046Dev22Config) {
      dependency_15 = _aimpactAilearnApp0046Dev22Config;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-sdk", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@beyond-js/widgets", "1.1.0"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["socket.io-client", "4.7.3"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.46"], ["@types/react-dom", "18.2.18"], ["@aimpact/auth", "0.0.1"], ["@aimpact/ailearn-app", "0.0.46.dev-22"]]);
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
        hash: 4102651431,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _link = require("pragmate-ui/link");
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
            }, texts.termsAndPrivacy, ' ', _react.default.createElement(_link.Link, {
              href: '/terms-and-conditions',
              target: '_blank'
            }, texts.terms), ' ', texts.connector, ' ', _react.default.createElement(_link.Link, {
              href: '/privacy',
              target: '_blank'
            }, texts.policy)), _react.default.createElement("div", null, _react.default.createElement("div", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsIldpZGdldCIsIlZpZXciLCJleHBvcnRzIiwiX3JlYWN0IiwiX2Zvcm0iLCJfcm91dGluZyIsIl9zZXNzaW9uIiwiX2FsZXJ0IiwiX2NvbXBvbmVudHMiLCJMb2dpbkZvcm0iLCJzaG93Rm9ybSIsInNldFNob3dGb3JtIiwidGV4dHMiLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJ1c2VTdGF0ZSIsImVtYWlsIiwicGFzc3dvcmQiLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwiZXJyb3IiLCJzZXRFcnJvciIsImNsb3NpbmdGb3JtIiwic2V0Q2xvc2luZ0Zvcm0iLCJmb3JtRGlzYWJsZWQiLCJkaXNhYmxlZCIsImhhbmRsZUNoYW5nZSIsImN1cnJlbnRUYXJnZXQiLCJ0YXJnZXQiLCJjdXJyZW50VmFsdWUiLCJuYW1lIiwidmFsdWUiLCJjbG9zZUZvcm0iLCJoYW5kbGVUcmFuc2l0aW9uRW5kIiwib25Hb29nbGUiLCJldmVudCIsInJlc3BvbnNlIiwic2Vzc2lvbldyYXBwZXIiLCJzaWduSW5XaXRoR29vZ2xlIiwic3RhdHVzIiwiZXJyb3JMb2dpbkdvb2dsZSIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJlIiwiY29uc29sZSIsIm1lc3NhZ2UiLCJvblN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiYXV0aCIsImxvZ2luIiwiZXJyb3JMb2dpbiIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJjbGFzc05hbWUiLCJsb2dpblRpdGxlIiwiRm9ybSIsIkFsZXJ0IiwibW9kZSIsImlzQ2xvc2UiLCJCdXR0b24iLCJpY29uIiwidmFyaWFudCIsInBlcGl0byIsIm9uQ2xpY2siLCJsb2FkaW5nIiwibGFiZWwiLCJnb29nbGVTaWduSW5CdXR0b24iLCJvblRyYW5zaXRpb25FbmQiLCJJbnB1dCIsInBsYWNlaG9sZGVyIiwiZW1haWxMYWJlbCIsInR5cGUiLCJvbkNoYW5nZSIsInJlcXVpcmVkIiwicGFzc3dvcmRMYWJlbCIsInNpZ25JbkJ1dHRvbiIsImNsb3NlQnV0dG9uIiwiX2xpbmsiLCJfaG9va3MiLCJfYmV5b25kX2NvbnRleHQiLCJfbGFuZ3VhZ2VzIiwiX3ByZXNlbnRhdGlvbiIsInRleHRSZWFkeSIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwiU3Bpbm5lciIsImFjdGl2ZSIsIlByZXNlbnRhdGlvbiIsInByZXNlbnRhdGlvbiIsIkxhbmd1YWdlcyIsInRlcm1zQW5kUHJpdmFjeSIsIkxpbmsiLCJocmVmIiwidGVybXMiLCJjb25uZWN0b3IiLCJwb2xpY3kiLCJfaW1hZ2UiLCJfY29yZSIsImNoYW5nZUxhbmd1YWdlIiwibGFuZ3VhZ2VzIiwiY3VycmVudCIsImRhdGFzZXQiLCJsYW5ndWFnZSIsIkltYWdlIiwic3JjIiwiYWx0IiwidGl0bGUiLCJUaGVtZVN3aXRjaCIsInRleHQiLCJ0aGVtZSIsIl9jb25maWciLCJwYXJhbXMiLCJBUFBfTE9HTyIsImRlc2NyaXB0aW9uIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvdmlld3MvZm9ybS50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xhbmd1YWdlcy50c3giLCIvdHMvdmlld3MvcHJlc2VudGF0aW9uLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFFTztVQUFVLE1BQ1hFLFVBQVcsU0FBUUgsS0FBQSxDQUFBSSx5QkFBeUI7WUFDakQsSUFBSUMsTUFBTUEsQ0FBQTtjQUNULE9BQU9ILE1BQUEsQ0FBQUks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