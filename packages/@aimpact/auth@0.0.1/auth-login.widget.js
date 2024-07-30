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
        const dependencies = new Map([["@aimpact/chat-sdk", "1.0.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.1"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@beyond-js/widgets", "1.1.0"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["socket.io-client", "4.7.3"], ["wavesurfer.js", "7.8.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.46"], ["@types/react-dom", "18.2.18"], ["@aimpact/auth", "0.0.1"], ["@aimpact/ailearn-app", "0.1.0-dev.03"]]);
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
        hash: 486644616,
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
            }), _react.default.createElement("h3", {
              className: 'form__title h3 pb-20'
            }, texts.loginTitle), _react.default.createElement(_form.Form, {
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
        hash: 2255905743,
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
            }))))));
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
        hash: 3307405710,
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
            }, _react.default.createElement("div", {
              className: 'presentation-content__container'
            }, _react.default.createElement("h1", null, texts.title), _react.default.createElement("div", {
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
            }, texts.experience)))), _react.default.createElement("div", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsIldpZGdldCIsIlZpZXciLCJleHBvcnRzIiwiYW5pbWF0aW9ucyIsImRlZmF1bHQiLCJpbml0aWFsIiwieSIsIm9wYWNpdHkiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZXhpdCIsImZhZGUiLCJmYWRlSW5VcGZhZGVPdXRMZWZ0IiwieCIsIl9yZWFjdCIsIl9mb3JtIiwiX3JvdXRpbmciLCJfc2Vzc2lvbiIsIl9hbGVydCIsIl9jb21wb25lbnRzIiwiX2ltYWdlIiwiTG9naW5Gb3JtIiwic2hvd0Zvcm0iLCJzZXRTaG93Rm9ybSIsInRleHRzIiwidmFsdWVzIiwic2V0VmFsdWVzIiwidXNlU3RhdGUiLCJlbWFpbCIsInBhc3N3b3JkIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsImVycm9yIiwic2V0RXJyb3IiLCJjbG9zaW5nRm9ybSIsInNldENsb3NpbmdGb3JtIiwiZm9ybURpc2FibGVkIiwiZGlzYWJsZWQiLCJoYW5kbGVDaGFuZ2UiLCJjdXJyZW50VGFyZ2V0IiwidGFyZ2V0IiwiY3VycmVudFZhbHVlIiwibmFtZSIsInZhbHVlIiwiY2xvc2VGb3JtIiwiaGFuZGxlVHJhbnNpdGlvbkVuZCIsIm9uR29vZ2xlIiwiZXZlbnQiLCJyZXNwb25zZSIsInNlc3Npb25XcmFwcGVyIiwic2lnbkluV2l0aEdvb2dsZSIsInN0YXR1cyIsImVycm9yTG9naW5Hb29nbGUiLCJyb3V0aW5nIiwicHVzaFN0YXRlIiwiZSIsImNvbnNvbGUiLCJtZXNzYWdlIiwib25TdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImF1dGgiLCJsb2dpbiIsImVycm9yTG9naW4iLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJJbWFnZSIsImNsYXNzTmFtZSIsInNyYyIsImxvZ2luVGl0bGUiLCJGb3JtIiwiQWxlcnQiLCJ0eXBlIiwiQnV0dG9uIiwiaWNvbiIsInZhcmlhbnQiLCJwZXBpdG8iLCJvbkNsaWNrIiwibG9hZGluZyIsImxhYmVsIiwiZ29vZ2xlU2lnbkluQnV0dG9uIiwib25UcmFuc2l0aW9uRW5kIiwiSW5wdXQiLCJwbGFjZWhvbGRlciIsImVtYWlsTGFiZWwiLCJvbkNoYW5nZSIsInJlcXVpcmVkIiwicGFzc3dvcmRMYWJlbCIsInNpZ25JbkJ1dHRvbiIsImNsb3NlQnV0dG9uIiwiX2hvb2tzIiwiX2JleW9uZF9jb250ZXh0IiwiX2xhbmd1YWdlcyIsIl9wcmVzZW50YXRpb24iLCJfZnJhbWVyTW90aW9uIiwiX2FuaW1hdGlvbnMiLCJ0ZXh0UmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsIlNwaW5uZXIiLCJhY3RpdmUiLCJtb3Rpb24iLCJkaXYiLCJQcmVzZW50YXRpb24iLCJwcmVzZW50YXRpb24iLCJMYW5ndWFnZXMiLCJfY29yZSIsImNoYW5nZUxhbmd1YWdlIiwibGFuZ3VhZ2VzIiwiY3VycmVudCIsImRhdGFzZXQiLCJsYW5ndWFnZSIsImFsdCIsInRpdGxlIiwiVGhlbWVTd2l0Y2giLCJ0ZXh0IiwidGhlbWUiLCJkYXRhIiwid2ViaW5hciIsInR1dG9yaWFscyIsInRlYWNoZXIiLCJzdHVkZW50Iiwic29jaWFsTWVkaWEiLCJsaW5rZWRpbiIsInRpa3RvayIsImluc3RhZ3JhbSIsImZhY2Vib29rIiwieW91dHViZSIsIkh0bWxXcmFwcGVyIiwiYXMiLCJjb250ZW50cyIsImV4cGVyaWVuY2UiLCJocmVmIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvdmlld3MvYW5pbWF0aW9ucy50c3giLCIvdHMvdmlld3MvZm9ybS50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xhbmd1YWdlcy50c3giLCIvdHMvdmlld3MvcHJlc2VudGF0aW9uLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7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