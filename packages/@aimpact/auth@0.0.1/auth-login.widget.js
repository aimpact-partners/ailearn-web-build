System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "react@18.2.0", "pragmate-ui@1.0.0-beta.1/form", "@beyond-js/kernel@0.1.9/routing", "@aimpact/chat-sdk@1.0.1/session", "pragmate-ui@1.0.0-beta.1/alert", "pragmate-ui@1.0.0-beta.1/components", "pragmate-ui@1.0.0-beta.1/image", "@beyond-js/react-18-widgets@1.1.2/hooks", "framer-motion@10.18.0", "@aimpact/auth@0.0.1/components", "@beyond-js/kernel@0.1.9/core"], function (_export, _context) {
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
    }, function (_pragmateUi100Beta1Image) {
      dependency_10 = _pragmateUi100Beta1Image;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_11 = _beyondJsReact18Widgets112Hooks;
    }, function (_framerMotion2) {
      dependency_12 = _framerMotion2;
    }, function (_aimpactAuth001Components) {
      dependency_13 = _aimpactAuth001Components;
    }, function (_beyondJsKernel019Core) {
      dependency_14 = _beyondJsKernel019Core;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-sdk", "1.0.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.1"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@beyond-js/widgets", "1.1.0"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["socket.io-client", "4.7.3"], ["wavesurfer.js", "7.8.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.46"], ["@types/react-dom", "18.2.18"], ["@aimpact/auth", "0.0.1"], ["@aimpact/ailearn-app", "0.1.1"]]);
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['react', dependency_4], ['pragmate-ui/form', dependency_5], ['@beyond-js/kernel/routing', dependency_6], ['@aimpact/chat-sdk/session', dependency_7], ['pragmate-ui/alert', dependency_8], ['pragmate-ui/components', dependency_9], ['pragmate-ui/image', dependency_10], ['@beyond-js/react-18-widgets/hooks', dependency_11], ['framer-motion', dependency_12], ['@aimpact/auth/components', dependency_13], ['@beyond-js/kernel/core', dependency_14]]);
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

      /**********************************
      INTERNAL MODULE: ./views/animations
      **********************************/

      ims.set('./views/animations', {
        hash: 265809797,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.animations = void 0;
          const animations = exports.animations = {
            default: {
              initial: {
                y: '-50%',
                opacity: 0
              },
              animate: {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.3
                }
              },
              exit: {
                y: '50%',
                opacity: 0,
                transition: {
                  duration: 0.3
                }
              }
            },
            fade: {
              initial: {
                opacity: 0
              },
              animate: {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.3
                }
              },
              exit: {
                y: '50%',
                opacity: 0,
                transition: {
                  duration: 0.3
                }
              }
            },
            fadeInUpfadeOutLeft: {
              initial: {
                y: '-90%',
                opacity: 0
              },
              animate: {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.3
                }
              },
              exit: {
                x: '50%',
                opacity: 0,
                transition: {
                  duration: 0.3
                }
              }
            }
          };
        }
      });

      /****************************
      INTERNAL MODULE: ./views/form
      ****************************/

      ims.set('./views/form', {
        hash: 3761942076,
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
          var _image = require("pragmate-ui/image");
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
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_image.Image, {
              className: 'login-logo',
              src: '/assets/rvd/logo.png'
            }), _react.default.createElement("header", null, _react.default.createElement("h3", {
              className: 'form__title '
            }, texts.loginTitle), _react.default.createElement("span", null, texts.subtitle)), _react.default.createElement(_form.Form, {
              onSubmit: onSubmit
            }, _react.default.createElement("div", {
              className: 'login-form-general__container'
            }, _react.default.createElement(_alert.Alert, {
              message: error,
              type: 'error'
            }), _react.default.createElement("div", {
              className: 'buttons__container'
            }, _react.default.createElement(_components.Button, {
              icon: 'google',
              variant: 'primary',
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
        hash: 3962568467,
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
          var _framerMotion = require("framer-motion");
          var _animations = require("./animations");
          /*bundle*/
          function View() {
            const [textReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            const [showForm, setShowForm] = (0, _react.useState)(false);
            if (!textReady) return _react.default.createElement(_components.Spinner, {
              active: true,
              type: 'primary'
            });
            return _react.default.createElement(_framerMotion.motion.div, {
              ..._animations.animations.fade,
              className: 'login-page-container'
            }, _react.default.createElement("div", {
              className: `first-panel ${showForm ? 'small' : 'large'}`
            }, _react.default.createElement(_presentation.Presentation, {
              texts: texts.presentation
            })), _react.default.createElement("section", {
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
            })))), _react.default.createElement("footer", {
              className: 'terms__footer'
            }, _react.default.createElement("span", null, texts.footer.intro), _react.default.createElement(_components.Link, {
              href: '/terms',
              target: '_blank'
            }, texts.footer.terms), ' ', texts.footer.connector, ' ', _react.default.createElement(_components.Link, {
              href: '/privacy',
              target: '_blank'
            }, texts.footer.privacy))));
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
        hash: 3882440194,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Presentation = Presentation;
          var _react = require("react");
          var _image = require("pragmate-ui/image");
          var _components = require("pragmate-ui/components");
          function Presentation({
            texts
          }) {
            const data = {
              webinar: 'https://www.youtube.com/@RVDAIRIVADAVIA24',
              tutorials: {
                teacher: 'https://docs.google.com/presentation/d/e/2PACX-1vTOSXwuswJIIASahbfwxTPkP8XqxwkncfwYGAh0UBwc43olV5x_XIV8itDODn_V4jGZ_A9OLfP8zADF/pub?start=false&loop=false&delayms=3000',
                student: 'https://docs.google.com/presentation/d/e/2PACX-1vT22YxUehxwR7OiGG-gBBcD1cDb6IxjG9RhveRAXTmQ1D2dH140-WWFRyq9w1P83Du-2jtWi8L-YNJ8/pub?start=false&loop=false&delayms=3000'
              },
              socialMedia: {
                linkedin: 'https://www.linkedin.com/company/rvd-ai/',
                tiktok: 'https://www.tiktok.com/@rvd.ai?_t=8fR9cDVO7M5&_r=1',
                instagram: 'https://www.instagram.com/rvd.ai_ok/',
                facebook: 'https://www.facebook.com/profile.php?id=61551072234638',
                youtube: 'https://www.youtube.com/@RVDAIRIVADAVIA24'
              }
            };
            return _react.default.createElement("div", {
              className: 'presentation-container '
            }, _react.default.createElement("a", {
              href: data.webinar,
              target: '_blank',
              className: 'webinar-container'
            }, _react.default.createElement(_image.Image, {
              src: '/assets/images/login/webinar.webp',
              alt: 'teacher'
            }), _react.default.createElement("section", null, _react.default.createElement("h6", {
              className: 'primary-text'
            }, texts.tutorials.webinar?.title), _react.default.createElement("span", null, texts.tutorials.webinar?.description))), _react.default.createElement("header", null, _react.default.createElement("h3", null, texts.title)), _react.default.createElement("section", {
              className: 'under__panel'
            }, _react.default.createElement("section", {
              className: 'app-feature'
            }, _react.default.createElement(_image.Image, {
              src: '/assets/images/login/book.webp',
              alt: 'login'
            }), _react.default.createElement(_components.HtmlWrapper, {
              as: 'p'
            }, texts.contents)), _react.default.createElement("section", {
              className: 'app-feature'
            }, _react.default.createElement(_image.Image, {
              src: '/assets/images/login/control.webp',
              alt: 'login'
            }), _react.default.createElement(_components.HtmlWrapper, {
              as: 'p'
            }, texts.experience))), _react.default.createElement("section", {
              className: 'tutorials-container'
            }, _react.default.createElement("a", {
              href: data.tutorials.teacher,
              target: '_blank'
            }, _react.default.createElement("div", {
              className: 'tutorial tutorial--left-image'
            }, _react.default.createElement(_image.Image, {
              src: '/assets/images/login/teacher.webp',
              alt: 'teacher'
            }), _react.default.createElement("span", null, texts.tutorials.teachers))), _react.default.createElement("a", {
              href: data.tutorials.student,
              target: '_blank'
            }, _react.default.createElement("div", {
              className: 'tutorial tutorial--right-image'
            }, _react.default.createElement(_image.Image, {
              src: '/assets/images/login/student.webp',
              alt: 'teacher'
            }), _react.default.createElement("span", null, texts.tutorials.students)))), _react.default.createElement("section", {
              className: 'social-media__container'
            }, _react.default.createElement("h6", null, texts.socialMedia), _react.default.createElement("ul", {
              className: 'social-media-list'
            }, _react.default.createElement("li", null, _react.default.createElement("a", {
              target: '_blank',
              href: data.socialMedia.facebook
            }, _react.default.createElement(_image.Image, {
              src: '/assets/images/login/fb.png',
              alt: 'RVD in Facebook'
            }))), _react.default.createElement("li", null, _react.default.createElement("a", {
              target: '_blank',
              href: data.socialMedia.instagram
            }, _react.default.createElement(_image.Image, {
              src: '/assets/images/login/ig.png',
              alt: 'RVD in Instagram'
            }))), _react.default.createElement("li", null, _react.default.createElement("a", {
              target: '_blank',
              href: data.socialMedia.linkedin
            }, _react.default.createElement(_image.Image, {
              src: '/assets/images/login/linkedin.png',
              alt: 'RVD in LinkedIn'
            }))), _react.default.createElement("li", null, _react.default.createElement("a", {
              target: '_blank',
              href: data.socialMedia.youtube
            }, _react.default.createElement(_image.Image, {
              src: '/assets/images/login/yt.png',
              alt: 'RVD in Youtube'
            }))))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsIldpZGdldCIsIlZpZXciLCJleHBvcnRzIiwiYW5pbWF0aW9ucyIsImRlZmF1bHQiLCJpbml0aWFsIiwieSIsIm9wYWNpdHkiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZXhpdCIsImZhZGUiLCJmYWRlSW5VcGZhZGVPdXRMZWZ0IiwieCIsIl9yZWFjdCIsIl9mb3JtIiwiX3JvdXRpbmciLCJfc2Vzc2lvbiIsIl9hbGVydCIsIl9jb21wb25lbnRzIiwiX2ltYWdlIiwiTG9naW5Gb3JtIiwic2hvd0Zvcm0iLCJzZXRTaG93Rm9ybSIsInRleHRzIiwidmFsdWVzIiwic2V0VmFsdWVzIiwidXNlU3RhdGUiLCJlbWFpbCIsInBhc3N3b3JkIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsImVycm9yIiwic2V0RXJyb3IiLCJjbG9zaW5nRm9ybSIsInNldENsb3NpbmdGb3JtIiwiZm9ybURpc2FibGVkIiwiZGlzYWJsZWQiLCJoYW5kbGVDaGFuZ2UiLCJjdXJyZW50VGFyZ2V0IiwidGFyZ2V0IiwiY3VycmVudFZhbHVlIiwibmFtZSIsInZhbHVlIiwiY2xvc2VGb3JtIiwiaGFuZGxlVHJhbnNpdGlvbkVuZCIsIm9uR29vZ2xlIiwiZXZlbnQiLCJyZXNwb25zZSIsInNlc3Npb25XcmFwcGVyIiwic2lnbkluV2l0aEdvb2dsZSIsInN0YXR1cyIsImVycm9yTG9naW5Hb29nbGUiLCJyb3V0aW5nIiwicHVzaFN0YXRlIiwiZSIsImNvbnNvbGUiLCJtZXNzYWdlIiwib25TdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImF1dGgiLCJsb2dpbiIsImVycm9yTG9naW4iLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJJbWFnZSIsImNsYXNzTmFtZSIsInNyYyIsImxvZ2luVGl0bGUiLCJzdWJ0aXRsZSIsIkZvcm0iLCJBbGVydCIsInR5cGUiLCJCdXR0b24iLCJpY29uIiwidmFyaWFudCIsIm9uQ2xpY2siLCJsb2FkaW5nIiwibGFiZWwiLCJnb29nbGVTaWduSW5CdXR0b24iLCJvblRyYW5zaXRpb25FbmQiLCJJbnB1dCIsInBsYWNlaG9sZGVyIiwiZW1haWxMYWJlbCIsIm9uQ2hhbmdlIiwicmVxdWlyZWQiLCJwYXNzd29yZExhYmVsIiwic2lnbkluQnV0dG9uIiwiY2xvc2VCdXR0b24iLCJfaG9va3MiLCJfYmV5b25kX2NvbnRleHQiLCJfbGFuZ3VhZ2VzIiwiX3ByZXNlbnRhdGlvbiIsIl9mcmFtZXJNb3Rpb24iLCJfYW5pbWF0aW9ucyIsInRleHRSZWFkeSIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwiU3Bpbm5lciIsImFjdGl2ZSIsIm1vdGlvbiIsImRpdiIsIlByZXNlbnRhdGlvbiIsInByZXNlbnRhdGlvbiIsIkxhbmd1YWdlcyIsImZvb3RlciIsImludHJvIiwiTGluayIsImhyZWYiLCJ0ZXJtcyIsImNvbm5lY3RvciIsInByaXZhY3kiLCJfY29yZSIsImNoYW5nZUxhbmd1YWdlIiwibGFuZ3VhZ2VzIiwiY3VycmVudCIsImRhdGFzZXQiLCJsYW5ndWFnZSIsImFsdCIsInRpdGxlIiwiVGhlbWVTd2l0Y2giLCJ0ZXh0IiwidGhlbWUiLCJkYXRhIiwid2ViaW5hciIsInR1dG9yaWFscyIsInRlYWNoZXIiLCJzdHVkZW50Iiwic29jaWFsTWVkaWEiLCJsaW5rZWRpbiIsInRpa3RvayIsImluc3RhZ3JhbSIsImZhY2Vib29rIiwieW91dHViZSIsImRlc2NyaXB0aW9uIiwiSHRtbFdyYXBwZXIiLCJhcyIsImNvbnRlbnRzIiwiZXhwZXJpZW5jZSIsInRlYWNoZXJzIiwic3R1ZGVudHMiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy92aWV3cy9hbmltYXRpb25zLnRzeCIsIi90cy92aWV3cy9mb3JtLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvbGFuZ3VhZ2VzLnRzeCIsIi90cy92aWV3cy9wcmVzZW50YXRpb24udHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUVPO1VBQVUsTUFDWEUsVUFBVyxTQUFRSCxLQUFBLENBQUFJLHlCQUF5QjtZQUNqRCxJQUFJQyxNQUFNQSxDQUFBO2NBQ1QsT0FBT0gsTUFBQSxDQUFBSSxJQUFJO1lBQ1o7O1VBQ0FDLE9BQUEsQ0FBQUosVUFBQSxHQUFBQSxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1JNLE1BQU1LLFVBQVUsR0FBQUQsT0FBQSxDQUFBQyxVQUFBLEdBQUc7WUFDekJDLE9BQU8sRUFBRTtjQUNSQyxPQUFPLEVBQUU7Z0JBQUVDLENBQUMsRUFBRSxNQUFNO2dCQUFFQyxPQUFPLEVBQUU7Y0FBQyxDQUFFO2NBQ2xDQyxPQUFPLEVBQUU7Z0JBQUVGLENBQUMsRUFBRSxDQUFDO2dCQUFFQyxPQUFPLEVBQUUsQ0FBQztnQkFBRUUsVUFBVSxFQUFFO2tCQUFFQyxRQUFRLEVBQUU7Z0JBQUc7Y0FBRSxDQUFFO2NBQzVEQyxJQUFJLEVBQUU7Z0JBQUVMLENBQUMsRUFBRSxLQUFLO2dCQUFFQyxPQUFPLEVBQUUsQ0FBQztnQkFBRUUsVUFBVSxFQUFFO2tCQUFFQyxRQUFRLEVBQUU7Z0JBQUc7Y0FBRTthQUMzRDtZQUNERSxJQUFJLEVBQUU7Y0FDTFAsT0FBTyxFQUFFO2dCQUFFRSxPQUFPLEVBQUU7Y0FBQyxDQUFFO2NBQ3ZCQyxPQUFPLEVBQUU7Z0JBQUVGLENBQUMsRUFBRSxDQUFDO2dCQUFFQyxPQUFPLEVBQUUsQ0FBQztnQkFBRUUsVUFBVSxFQUFFO2tCQUFFQyxRQUFRLEVBQUU7Z0JBQUc7Y0FBRSxDQUFFO2NBQzVEQyxJ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