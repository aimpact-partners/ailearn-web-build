System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "react@18.2.0", "@beyond-js/kernel@0.1.9/routing", "@aimpact/chat-sdk@1.3.0/session", "pragmate-ui@1.0.0-beta.6/alert", "pragmate-ui@1.0.0-beta.6/components", "pragmate-ui@1.0.0-beta.6/image", "@beyond-js/react-18-widgets@1.1.2/hooks", "framer-motion@10.18.0", "@aimpact/auth@0.0.1/components", "@beyond-js/kernel@0.1.9/core", "pragmate-ui@1.0.0-beta.6/form"], function (_export, _context) {
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
    }, function (_aimpactChatSdk130Session) {
      dependency_6 = _aimpactChatSdk130Session;
    }, function (_pragmateUi100Beta6Alert) {
      dependency_7 = _pragmateUi100Beta6Alert;
    }, function (_pragmateUi100Beta6Components) {
      dependency_8 = _pragmateUi100Beta6Components;
    }, function (_pragmateUi100Beta6Image) {
      dependency_9 = _pragmateUi100Beta6Image;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_10 = _beyondJsReact18Widgets112Hooks;
    }, function (_framerMotion2) {
      dependency_11 = _framerMotion2;
    }, function (_aimpactAuth001Components) {
      dependency_12 = _aimpactAuth001Components;
    }, function (_beyondJsKernel019Core) {
      dependency_13 = _beyondJsKernel019Core;
    }, function (_pragmateUi100Beta6Form) {
      dependency_14 = _pragmateUi100Beta6Form;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-sdk", "1.3.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "1.0.0-beta.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@beyond-js/widgets", "1.1.0"], ["framer-motion", "11.3.21"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["socket.io-client", "4.7.3"], ["wavesurfer.js", "7.8.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.46"], ["@types/react-dom", "18.2.18"], ["@aimpact/auth", "0.0.1"], ["@aimpact/ailearn-app", "0.2.10"]]);
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
        hash: 2999765554,
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
                console.log(20, response);
                if (!response) {
                  throw new Error();
                }
                _routing.routing.pushState('/');
              } catch (e) {
                if (e.message === 'POPUP_CLOSED_BY_USER') {
                  return;
                }
                setError(texts.errors.unknown);
                console.error(e.message);
              } finally {
                setFetching('');
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
        hash: 2520797776,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsIldpZGdldCIsIlZpZXciLCJleHBvcnRzIiwiYW5pbWF0aW9ucyIsImRlZmF1bHQiLCJpbml0aWFsIiwieSIsIm9wYWNpdHkiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZXhpdCIsImZhZGUiLCJmYWRlSW5VcGZhZGVPdXRMZWZ0IiwieCIsIl9yZWFjdCIsIl9yb3V0aW5nIiwiX3Nlc3Npb24iLCJfYWxlcnQiLCJfY29tcG9uZW50cyIsIl9pbWFnZSIsIkxvZ2luQ29udGFpbmVyIiwidGV4dHMiLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwidXNlU3RhdGUiLCJlcnJvciIsInNldEVycm9yIiwib25Hb29nbGUiLCJldmVudCIsInJlc3BvbnNlIiwic2Vzc2lvbldyYXBwZXIiLCJzaWduSW5XaXRoR29vZ2xlIiwiY29uc29sZSIsImxvZyIsIkVycm9yIiwicm91dGluZyIsInB1c2hTdGF0ZSIsImUiLCJtZXNzYWdlIiwiZXJyb3JzIiwidW5rbm93biIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsIkltYWdlIiwiY2xhc3NOYW1lIiwic3JjIiwibG9naW5UaXRsZSIsInN1YnRpdGxlIiwiQWxlcnQiLCJ0eXBlIiwiQnV0dG9uIiwiaWNvbiIsInZhcmlhbnQiLCJvbkNsaWNrIiwibG9hZGluZyIsImxhYmVsIiwiZ29vZ2xlU2lnbkluQnV0dG9uIiwiX2hvb2tzIiwiX2JleW9uZF9jb250ZXh0IiwiX2NvbnRhaW5lciIsIl9sYW5ndWFnZXMiLCJfcHJlc2VudGF0aW9uIiwiX2ZyYW1lck1vdGlvbiIsIl9hbmltYXRpb25zIiwidGV4dFJlYWR5IiwidXNlVGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJTcGlubmVyIiwiYWN0aXZlIiwibW90aW9uIiwiZGl2IiwiUHJlc2VudGF0aW9uIiwicHJlc2VudGF0aW9uIiwiTGFuZ3VhZ2VzIiwiZm9vdGVyIiwiaW50cm8iLCJMaW5rIiwiaHJlZiIsInRhcmdldCIsInRlcm1zIiwiY29ubmVjdG9yIiwicHJpdmFjeSIsIl9jb3JlIiwiY2hhbmdlTGFuZ3VhZ2UiLCJsYW5ndWFnZXMiLCJjdXJyZW50IiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJsYW5ndWFnZSIsImFsdCIsInRpdGxlIiwiVGhlbWVTd2l0Y2giLCJ0ZXh0IiwidGhlbWUiLCJfZm9ybSIsIkxvZ2luRm9ybSIsInZhbHVlcyIsInNldFZhbHVlcyIsImVtYWlsIiwicGFzc3dvcmQiLCJmb3JtRGlzYWJsZWQiLCJkaXNhYmxlZCIsImhhbmRsZUNoYW5nZSIsImN1cnJlbnRWYWx1ZSIsIm5hbWUiLCJ2YWx1ZSIsIm9uU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJhdXRoIiwibG9naW4iLCJzdGF0dXMiLCJlcnJvckxvZ2luIiwiRm9ybSIsIklucHV0IiwicGxhY2Vob2xkZXIiLCJlbWFpbExhYmVsIiwib25DaGFuZ2UiLCJyZXF1aXJlZCIsInBhc3N3b3JkTGFiZWwiLCJzaWduSW5CdXR0b24iLCJkYXRhIiwid2ViaW5hciIsInR1dG9yaWFscyIsInRlYWNoZXIiLCJzdHVkZW50Iiwic29jaWFsTWVkaWEiLCJsaW5rZWRpbiIsInRpa3RvayIsImluc3RhZ3JhbSIsImZhY2Vib29rIiwieW91dHViZSIsImRlc2NyaXB0aW9uIiwiSHRtbFdyYXBwZXIiLCJhcyIsImNvbnRlbnRzIiwiZXhwZXJpZW5jZSIsInRlYWNoZXJzIiwic3R1ZGVudHMiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy92aWV3cy9hbmltYXRpb25zLnRzeCIsIi90cy92aWV3cy9jb250YWluZXIudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9sYW5ndWFnZXMudHN4IiwiL3RzL3ZpZXdzL2xvZ2luLWZvcm0udHN4IiwiL3RzL3ZpZXdzL3ByZXNlbnRhdGlvbi50c3giXSwic291cmNlc0NvbnRlbnQi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