System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "react@18.2.0", "@beyond-js/kernel@0.1.9/routing", "@aimpact/chat-sdk@1.0.1/session", "pragmate-ui@1.0.0-beta.1/alert", "pragmate-ui@1.0.0-beta.1/components", "pragmate-ui@1.0.0-beta.1/image", "@beyond-js/react-18-widgets@1.1.2/hooks", "framer-motion@10.18.0", "@aimpact/auth@0.0.1/components", "@beyond-js/kernel@0.1.9/core", "pragmate-ui@1.0.0-beta.1/form"], function (_export, _context) {
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
    }, function (_beyondJsKernel019Routing) {
      dependency_5 = _beyondJsKernel019Routing;
    }, function (_aimpactChatSdk101Session) {
      dependency_6 = _aimpactChatSdk101Session;
    }, function (_pragmateUi100Beta1Alert) {
      dependency_7 = _pragmateUi100Beta1Alert;
    }, function (_pragmateUi100Beta1Components) {
      dependency_8 = _pragmateUi100Beta1Components;
    }, function (_pragmateUi100Beta1Image) {
      dependency_9 = _pragmateUi100Beta1Image;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_10 = _beyondJsReact18Widgets112Hooks;
    }, function (_framerMotion2) {
      dependency_11 = _framerMotion2;
    }, function (_aimpactAuth001Components) {
      dependency_12 = _aimpactAuth001Components;
    }, function (_beyondJsKernel019Core) {
      dependency_13 = _beyondJsKernel019Core;
    }, function (_pragmateUi100Beta1Form) {
      dependency_14 = _pragmateUi100Beta1Form;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-sdk", "1.0.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.1"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@beyond-js/widgets", "1.1.0"], ["framer-motion", "11.3.21"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["socket.io-client", "4.7.3"], ["wavesurfer.js", "7.8.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.46"], ["@types/react-dom", "18.2.18"], ["@aimpact/auth", "0.0.1"], ["@aimpact/ailearn-app", "0.1.3-test.08"]]);
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['react', dependency_4], ['@beyond-js/kernel/routing', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['pragmate-ui/alert', dependency_7], ['pragmate-ui/components', dependency_8], ['pragmate-ui/image', dependency_9], ['@beyond-js/react-18-widgets/hooks', dependency_10], ['framer-motion', dependency_11], ['@aimpact/auth/components', dependency_12], ['@beyond-js/kernel/core', dependency_13], ['pragmate-ui/form', dependency_14]]);
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

      /*********************************
      INTERNAL MODULE: ./views/container
      *********************************/

      ims.set('./views/container', {
        hash: 2995770648,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LoginContainer = LoginContainer;
          var _react = require("react");
          var _routing = require("@beyond-js/kernel/routing");
          var _session = require("@aimpact/chat-sdk/session");
          var _alert = require("pragmate-ui/alert");
          var _components = require("pragmate-ui/components");
          var _image = require("pragmate-ui/image");
          function LoginContainer({
            texts
          }) {
            const [fetching, setFetching] = (0, _react.useState)('');
            const [error, setError] = (0, _react.useState)('');
            const onGoogle = async event => {
              try {
                setFetching('google');
                const response = await _session.sessionWrapper.signInWithGoogle();
                if (!response) {
                  throw new Error();
                }
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
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_image.Image, {
              className: 'login-logo',
              src: '/assets/rvd/logo.png'
            }), _react.default.createElement("header", null, _react.default.createElement("h3", {
              className: 'form__title '
            }, texts.loginTitle), _react.default.createElement("span", null, texts.subtitle)), _react.default.createElement(_alert.Alert, {
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
            })));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 357212123,
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
          var _container = require("./container");
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
            }, _react.default.createElement(_presentation.Presentation, {
              texts: texts.presentation
            }), _react.default.createElement("section", {
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
            }, _react.default.createElement(_container.LoginContainer, {
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

      /**********************************
      INTERNAL MODULE: ./views/login-form
      **********************************/

      ims.set('./views/login-form', {
        hash: 1749363032,
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
            texts,
            error,
            setError
          }) {
            const [values, setValues] = (0, _react.useState)({
              email: '',
              password: ''
            });
            const [fetching, setFetching] = (0, _react.useState)('');
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
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_form.Form, {
              onSubmit: onSubmit,
              className: 'login-form-general__container'
            }, _react.default.createElement(_alert.Alert, {
              message: error,
              type: 'error'
            }), _react.default.createElement(_form.Input, {
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
            })));
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./views/presentation
      ************************************/

      ims.set('./views/presentation', {
        hash: 2406120310,
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
              className: 'presentation-container'
            }, _react.default.createElement("div", {
              className: 'presentation-header__top'
            }, _react.default.createElement("a", {
              href: data.webinar,
              target: '_blank',
              className: 'webinar-container'
            }, _react.default.createElement(_image.Image, {
              src: '/assets/images/login/webinar.webp',
              alt: 'teacher'
            }), _react.default.createElement("section", null, _react.default.createElement("h6", {
              className: 'primary-text'
            }, texts.tutorials.webinar?.title), _react.default.createElement("span", null, texts.tutorials.webinar?.description))), _react.default.createElement("header", null, _react.default.createElement("h3", null, texts.title))), _react.default.createElement("section", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsIldpZGdldCIsIlZpZXciLCJleHBvcnRzIiwiYW5pbWF0aW9ucyIsImRlZmF1bHQiLCJpbml0aWFsIiwieSIsIm9wYWNpdHkiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZXhpdCIsImZhZGUiLCJmYWRlSW5VcGZhZGVPdXRMZWZ0IiwieCIsIl9yZWFjdCIsIl9yb3V0aW5nIiwiX3Nlc3Npb24iLCJfYWxlcnQiLCJfY29tcG9uZW50cyIsIl9pbWFnZSIsIkxvZ2luQ29udGFpbmVyIiwidGV4dHMiLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwidXNlU3RhdGUiLCJlcnJvciIsInNldEVycm9yIiwib25Hb29nbGUiLCJldmVudCIsInJlc3BvbnNlIiwic2Vzc2lvbldyYXBwZXIiLCJzaWduSW5XaXRoR29vZ2xlIiwiRXJyb3IiLCJzdGF0dXMiLCJlcnJvckxvZ2luR29vZ2xlIiwicm91dGluZyIsInB1c2hTdGF0ZSIsImUiLCJjb25zb2xlIiwibWVzc2FnZSIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsIkltYWdlIiwiY2xhc3NOYW1lIiwic3JjIiwibG9naW5UaXRsZSIsInN1YnRpdGxlIiwiQWxlcnQiLCJ0eXBlIiwiQnV0dG9uIiwiaWNvbiIsInZhcmlhbnQiLCJvbkNsaWNrIiwibG9hZGluZyIsImxhYmVsIiwiZ29vZ2xlU2lnbkluQnV0dG9uIiwiX2hvb2tzIiwiX2JleW9uZF9jb250ZXh0IiwiX2NvbnRhaW5lciIsIl9sYW5ndWFnZXMiLCJfcHJlc2VudGF0aW9uIiwiX2ZyYW1lck1vdGlvbiIsIl9hbmltYXRpb25zIiwidGV4dFJlYWR5IiwidXNlVGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJzaG93Rm9ybSIsInNldFNob3dGb3JtIiwiU3Bpbm5lciIsImFjdGl2ZSIsIm1vdGlvbiIsImRpdiIsIlByZXNlbnRhdGlvbiIsInByZXNlbnRhdGlvbiIsIkxhbmd1YWdlcyIsImZvb3RlciIsImludHJvIiwiTGluayIsImhyZWYiLCJ0YXJnZXQiLCJ0ZXJtcyIsImNvbm5lY3RvciIsInByaXZhY3kiLCJfY29yZSIsImNoYW5nZUxhbmd1YWdlIiwibGFuZ3VhZ2VzIiwiY3VycmVudCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwibGFuZ3VhZ2UiLCJhbHQiLCJ0aXRsZSIsIlRoZW1lU3dpdGNoIiwidGV4dCIsInRoZW1lIiwiX2Zvcm0iLCJMb2dpbkZvcm0iLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJlbWFpbCIsInBhc3N3b3JkIiwiZm9ybURpc2FibGVkIiwiZGlzYWJsZWQiLCJoYW5kbGVDaGFuZ2UiLCJjdXJyZW50VmFsdWUiLCJuYW1lIiwidmFsdWUiLCJvblN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiYXV0aCIsImxvZ2luIiwiZXJyb3JMb2dpbiIsIkZvcm0iLCJJbnB1dCIsInBsYWNlaG9sZGVyIiwiZW1haWxMYWJlbCIsIm9uQ2hhbmdlIiwicmVxdWlyZWQiLCJwYXNzd29yZExhYmVsIiwic2lnbkluQnV0dG9uIiwiZGF0YSIsIndlYmluYXIiLCJ0dXRvcmlhbHMiLCJ0ZWFjaGVyIiwic3R1ZGVudCIsInNvY2lhbE1lZGlhIiwibGlua2VkaW4iLCJ0aWt0b2siLCJpbnN0YWdyYW0iLCJmYWNlYm9vayIsInlvdXR1YmUiLCJkZXNjcmlwdGlvbiIsIkh0bWxXcmFwcGVyIiwiYXMiLCJjb250ZW50cyIsImV4cGVyaWVuY2UiLCJ0ZWFjaGVycyIsInN0dWRlbnRzIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvdmlld3MvYW5pbWF0aW9ucy50c3giLCIvdHMvdmlld3MvY29udGFpbmVyLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvbGFuZ3VhZ2VzLnRzeCIsIi90cy92aWV3cy9sb2dpbi1mb3JtLnRzeCIsIi90cy92aWV3cy9wcmVzZW50YXRpb24udHN4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