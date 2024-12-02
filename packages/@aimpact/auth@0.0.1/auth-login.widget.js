System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "react@18.2.0", "@beyond-js/kernel@0.1.9/routing", "@aimpact/chat-sdk@1.3.0/session", "pragmate-ui@1.0.0-beta.7/alert", "pragmate-ui@1.0.0-beta.7/components", "pragmate-ui@1.0.0-beta.7/image", "@beyond-js/react-18-widgets@1.1.2/hooks", "framer-motion@10.18.0", "@aimpact/auth@0.0.1/components", "@beyond-js/kernel@0.1.9/core", "pragmate-ui@1.0.0-beta.7/form"], function (_export, _context) {
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
    }, function (_pragmateUi100Beta7Alert) {
      dependency_7 = _pragmateUi100Beta7Alert;
    }, function (_pragmateUi100Beta7Components) {
      dependency_8 = _pragmateUi100Beta7Components;
    }, function (_pragmateUi100Beta7Image) {
      dependency_9 = _pragmateUi100Beta7Image;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_10 = _beyondJsReact18Widgets112Hooks;
    }, function (_framerMotion2) {
      dependency_11 = _framerMotion2;
    }, function (_aimpactAuth001Components) {
      dependency_12 = _aimpactAuth001Components;
    }, function (_beyondJsKernel019Core) {
      dependency_13 = _beyondJsKernel019Core;
    }, function (_pragmateUi100Beta7Form) {
      dependency_14 = _pragmateUi100Beta7Form;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-sdk", "1.3.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "1.0.0-beta.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@beyond-js/widgets", "1.1.0"], ["framer-motion", "11.3.21"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["socket.io-client", "4.7.3"], ["wavesurfer.js", "7.8.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.46"], ["@types/react-dom", "18.2.18"], ["@aimpact/auth", "0.0.1"], ["@aimpact/ailearn-app", "0.2.14"]]);
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
        hash: 743666097,
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
                const response = await _session.sessionWrapper.auth.loginWith('google');
                if (!response) {
                  throw new Error();
                }
                _routing.routing.pushState('/');
              } catch (e) {
                console.log(e);
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
        hash: 1668998299,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _beyond_context = require("beyond_context");
          var _framerMotion = require("framer-motion");
          var _components = require("pragmate-ui/components");
          var _react = require("react");
          var _animations = require("./animations");
          var _container = require("./container");
          var _languages = require("./languages");
          var _presentation = require("./presentation");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsIldpZGdldCIsIlZpZXciLCJleHBvcnRzIiwiYW5pbWF0aW9ucyIsImRlZmF1bHQiLCJpbml0aWFsIiwieSIsIm9wYWNpdHkiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZXhpdCIsImZhZGUiLCJmYWRlSW5VcGZhZGVPdXRMZWZ0IiwieCIsIl9yZWFjdCIsIl9yb3V0aW5nIiwiX3Nlc3Npb24iLCJfYWxlcnQiLCJfY29tcG9uZW50cyIsIl9pbWFnZSIsIkxvZ2luQ29udGFpbmVyIiwidGV4dHMiLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwidXNlU3RhdGUiLCJlcnJvciIsInNldEVycm9yIiwib25Hb29nbGUiLCJldmVudCIsInJlc3BvbnNlIiwic2Vzc2lvbldyYXBwZXIiLCJhdXRoIiwibG9naW5XaXRoIiwiRXJyb3IiLCJyb3V0aW5nIiwicHVzaFN0YXRlIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIiwiZXJyb3JzIiwidW5rbm93biIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsIkltYWdlIiwiY2xhc3NOYW1lIiwic3JjIiwibG9naW5UaXRsZSIsInN1YnRpdGxlIiwiQWxlcnQiLCJ0eXBlIiwiQnV0dG9uIiwiaWNvbiIsInZhcmlhbnQiLCJvbkNsaWNrIiwibG9hZGluZyIsImxhYmVsIiwiZ29vZ2xlU2lnbkluQnV0dG9uIiwiX2hvb2tzIiwiX2JleW9uZF9jb250ZXh0IiwiX2ZyYW1lck1vdGlvbiIsIl9hbmltYXRpb25zIiwiX2NvbnRhaW5lciIsIl9sYW5ndWFnZXMiLCJfcHJlc2VudGF0aW9uIiwidGV4dFJlYWR5IiwidXNlVGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJTcGlubmVyIiwiYWN0aXZlIiwibW90aW9uIiwiZGl2IiwiUHJlc2VudGF0aW9uIiwicHJlc2VudGF0aW9uIiwiTGFuZ3VhZ2VzIiwiZm9vdGVyIiwiaW50cm8iLCJMaW5rIiwiaHJlZiIsInRhcmdldCIsInRlcm1zIiwiY29ubmVjdG9yIiwicHJpdmFjeSIsIl9jb3JlIiwiY2hhbmdlTGFuZ3VhZ2UiLCJsYW5ndWFnZXMiLCJjdXJyZW50IiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJsYW5ndWFnZSIsImFsdCIsInRpdGxlIiwiVGhlbWVTd2l0Y2giLCJ0ZXh0IiwidGhlbWUiLCJfZm9ybSIsIkxvZ2luRm9ybSIsInZhbHVlcyIsInNldFZhbHVlcyIsImVtYWlsIiwicGFzc3dvcmQiLCJmb3JtRGlzYWJsZWQiLCJkaXNhYmxlZCIsImhhbmRsZUNoYW5nZSIsImN1cnJlbnRWYWx1ZSIsIm5hbWUiLCJ2YWx1ZSIsIm9uU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJsb2dpbiIsInN0YXR1cyIsImVycm9yTG9naW4iLCJGb3JtIiwiSW5wdXQiLCJwbGFjZWhvbGRlciIsImVtYWlsTGFiZWwiLCJvbkNoYW5nZSIsInJlcXVpcmVkIiwicGFzc3dvcmRMYWJlbCIsInNpZ25JbkJ1dHRvbiIsImRhdGEiLCJ3ZWJpbmFyIiwidHV0b3JpYWxzIiwidGVhY2hlciIsInN0dWRlbnQiLCJzb2NpYWxNZWRpYSIsImxpbmtlZGluIiwidGlrdG9rIiwiaW5zdGFncmFtIiwiZmFjZWJvb2siLCJ5b3V0dWJlIiwiZGVzY3JpcHRpb24iLCJIdG1sV3JhcHBlciIsImFzIiwiY29udGVudHMiLCJleHBlcmllbmNlIiwidGVhY2hlcnMiLCJzdHVkZW50cyJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3ZpZXdzL2FuaW1hdGlvbnMudHN4IiwiL3RzL3ZpZXdzL2NvbnRhaW5lci50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xhbmd1YWdlcy50c3giLCIvdHMvdmlld3MvbG9naW4tZm9ybS50c3giLCIvdHMvdmlld3MvcHJlc2VudGF0aW9uLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUVPO1VBQVUsTUFDWEUsVUFBVyxTQUFRSCxLQUFBLENBQUFJLHlCQUF5QjtZQUNqRCxJQUFJQyxNQUFNQSxDQUFBO2NBQ1QsT0FBT0gsTUFBQSxDQUFBSSxJQUFJO1lBQ1o7O1VBQ0FDLE9BQUEsQ0FBQUosVUFBQSxHQUFBQSxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1JNLE1BQU1LLFVBQVUsR0FBQUQsT0FBQSxDQUFBQyxVQUFBLEdBQUc7WUFDekJDLE9BQU8sRUFBRTtjQUNSQyxPQUFPLEVBQUU7Z0JBQUVDLENBQUMsRUFBRSxNQUFNO2dCQUFFQyxPQUFPLEVBQUU7Y0FBQyxDQUFFO2NBQ2xDQyxPQUFPLEVBQUU7Z0JBQUVGLENBQUMsRUFBRSxDQUFDO2dCQUFFQyxPQUFPLEVBQUUsQ0FBQztnQkFBRUUsVUFBVSxFQUFFO2tCQUFFQyxRQUFRLEVBQUU7Z0JBQUc7Y0FBRSxDQUFFO2NBQzVEQyxJQUFJLEVBQUU7Z0JBQUVMLENBQUMsRUFBRSxLQUFLO2dCQUFFQyxPQUFPLEVBQUUsQ0FBQztnQkFBRUUsVUFBVSxFQUFFO2tCQUFFQyxRQUFRLEVBQUU7Z0JBQUc7Y0FBRTthQUMzRDtZQUNERSxJQUFJLEVBQUU7Y0FDTFAsT0FBTyxFQUFFO2dCQUFFRSxPQUFPLEVBQUU7Y0FBQyxDQUFFO2NBQ3ZCQyxPQUFPLEVBQUU7Z0JBQUVGLENBQUMsRUFBRSxDQUFDO2dCQUFFQyxPQUFPLEVBQUUsQ0FBQztnQkFBRUUsVUFBVSxFQUFFO2tCQUFFQyxRQUFRLEVBQUU7Z0JBQUc7Y0FBRSxDQUFFO2NBQzVEQyxJQUFJLEVBQUU7Z0JBQUVMLENBQUMsRUFBRSxLQUFLO2dCQUFFQyxPQUFPLEVBQUUsQ0FBQztnQkFBRUUsVUFBVSxFQUFFO2tCQUFFQyxRQUFRLEVBQUU7Z0JBQUc7Y0FBRTthQUMzRDtZQUNERyxtQkFBbUIsRUFBRTtjQUNwQlIsT0FBTyxFQUFFO2dCQUFFQyxDQUFDLEVBQUUsTUFBTTtnQkFBRUMsT0FBTyxFQUFFO2NBQUMsQ0FBRTtjQUNsQ0MsT0FBTyxFQUFFO2dCQUFFRixDQUFDLEVBQUUsQ0FBQztnQkFBRUMsT0FBTyxFQUFFLENBQUM7Z0JBQUVFLFVBQVUsRUFBRTtrQkFBRUMsUUFBUSxFQUFFO2dCQUFHO2NBQUUsQ0FBRTtjQUM1REMsSUFBSSxFQUFFO2dCQUFFRyxDQUFDLEVBQUUsS0FBSztnQkFBRVAsT0FBTyxFQUFFLENBQUM7Z0JBQUVFLFVBQVUsRUFBRTtrQkFBRUMsUUFBUSxFQUFFO2dCQUFHO2NBQUU7O1dBRTVEOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2hCRCxJQUFBSyxNQUFBLEdBQUFuQixPQUFBO1VBQ0EsSUFBQW9CLFFBQUEsR0FBQXBCLE9BQUE7VUFDQSxJQUFBcUIsUUFBQSxHQUFBckIsT0FBQTtVQUNBLElBQUFzQixNQUFBLEdBQUF0QixPQUFBO1VBQ0EsSUFBQXVCLFdBQUEsR0FBQXZCLE9BQUE7VUFDQSxJQUFBd0IsTUFBQSxHQUFBeEIsT0FBQTtVQUdNLFNBQVV5QixjQUFjQSxDQUFDO1lBQUVDO1VBQUssQ0FBRTtZQUN2QyxNQUFNLENBQUNDLFFBQVEsRUFBRUMsV0FBVyxDQUFDLEdBQUcsSUFBQVQsTUFBQSxDQUFBVSxRQUFRLEVBQXlDLEVBQUUsQ0FBQztZQUNwRixNQUFNLENBQUNDLEtBQUssRUFBRUMsUUFBUSxDQUFDLEdBQUcsSUFBQVosTUFBQSxDQUFBVSxRQUFRLEVBQUMsRUFBRSxDQUFDO1lBRXRDLE1BQU1HLFFBQVEsR0FBRyxNQUFNQyxLQUFLLElBQUc7Y0FDOUIsSUFBSTtnQkFDSEwsV0FBVyxDQUFDLFFBQVEsQ0FBQztnQkFFckIsTUFBTU0sUUFBUSxHQUFHLE1BQU1iLFFBQUEsQ0FBQWMsY0FBYyxDQUFDQyxJQUFJLENBQUNDLFNBQVMsQ0FBQyxRQUFRLENBQUM7Z0JBRTlELElBQUksQ0FBQ0gsUUFBUSxFQUFFO2tCQUNkLE1BQU0sSUFBSUksS0FBSyxFQUFFOztnQkFHbEJsQixRQUFBLENBQUFtQixPQUFPLENBQUNDLFNBQVMsQ0FBQyxHQUFHLENBQUM7ZUFDdEIsQ0FBQyxPQUFPQyxDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixDQUFDLENBQUM7Z0JBQ2QsSUFBSUEsQ0FBQyxDQUFDRyxPQUFPLEtBQUssc0JBQXNCLEVBQUU7a0JBQ3pDOztnQkFFRGIsUUFBUSxDQUFDTCxLQUFLLENBQUNtQixNQUFNLENBQUNDLE9BQU8sQ0FBQztnQkFDOUJKLE9BQU8sQ0FBQ1osS0FBSyxDQUFDVyxDQUFDLENBQUNHLE9BQU8sQ0FBQztlQUN4QixTQUFTO2dCQUNUaEIsV0FBVyxDQUFDLEVBQUUsQ0FBQzs7WUFFakIsQ0FBQztZQUVELE9BQ0NULE1BQUEsQ0FBQVgsT0FBQSxDQUFBdUMsYUFBQSxDQUFBNUIsTUFBQSxDQUFBWCxPQUFBLENBQUF3QyxRQUFBLFFBQ0M3QixNQUFBLENBQUFYLE9BQUEsQ0FBQXVDLGFBQUEsQ0FBQ3ZCLE1BQUEsQ0FBQXlCLEtBQUs7Y0FBQ0MsU0FBUyxFQUFDLFlBQVk7Y0FBQ0MsR0FBRyxFQUFDO1lBQXNCLEVBQUcsRUFDM0RoQyxNQUFBLENBQUFYLE9BQUEsQ0FBQXVDLGFBQUEsaUJBQ0M1QixNQUFBLENBQUFYLE9BQUEsQ0FBQXVDLGFBQUE7Y0FBSUcsU0FBUyxFQUFDO1lBQWMsR0FBRXhCLEtBQUssQ0FBQzBCLFVBQVUsQ0FBTSxFQUNwRGpDLE1BQUEsQ0FBQVgsT0FBQSxDQUFBdUMsYUFBQSxlQUFPckIsS0FBSyxDQUFDMkIsUUFBUSxDQUFRLENBQ3JCLEVBQ1RsQyxNQUFBLENBQUFYLE9BQUEsQ0FBQXVDLGFBQUEsQ0FBQ3pCLE1BQUEsQ0FBQWdDLEtBQUs7Y0FBQ1YsT0FBTyxFQUFFZCxLQUFLO2NBQUV5QixJQUFJLEVBQUM7WUFBTyxFQUFHLEVBQ3RDcEMsTUFBQSxDQUFBWCxPQUFBLENBQUF1QyxhQUFBO2NBQUtHLFNBQVMsRUFBQztZQUFvQixHQUNsQy9CLE1BQUEsQ0FBQVgsT0FBQSxDQUFBdUMsYUFBQSxDQUFDeEIsV0FBQSxDQUFBaUMsTUFBTTtjQUNOQyxJQUFJLEVBQUMsUUFBUTtjQUNiQyxPQUFPLEVBQUMsU0FBUztjQUNqQkMsT0FBTyxFQUFFM0IsUUFBUTtjQUNqQjRCLE9BQU8sRUFBRWpDLFFBQVEsSUFBSSxRQUFRO2NBQzdCa0MsS0FBSyxFQUFFbkMsS0FBSyxDQUFDb0M7WUFBa0IsRUFDOUIsQ0FDRyxDQUVKO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdkRBLElBQUFDLE1BQUEsR0FBQS9ELE9BQUE7VUFDQSxJQUFBZ0UsZUFBQSxHQUFBaEUsT0FBQTtVQUNBLElBQUFpRSxhQUFBLEdBQUFqRSxPQUFBO1VBQ0EsSUFBQXVCLFdBQUEsR0FBQXZCLE9BQUE7VUFDQSxJQUFBbUIsTUFBQSxHQUFBbkIsT0FBQTtVQUNBLElBQUFrRSxXQUFBLEdBQUFsRSxPQUFBO1VBQ0EsSUFBQW1FLFVBQUEsR0FBQW5FLE9BQUE7VUFDQSxJQUFBb0UsVUFBQSxHQUFBcEUsT0FBQTtVQUNBLElBQUFxRSxhQUFBLEdBQUFyRSxPQUFBO1VBRU87VUFBVSxTQUNSSyxJQUFJQSxDQUFBO1lBQ1osTUFBTSxDQUFDaUUsU0FBUyxFQUFFNUMsS0FBSyxDQUFDLEdBQUcsSUFBQXFDLE1BQUEsQ0FBQVEsUUFBUSxFQUFDUCxlQUFBLENBQUFRLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDO1lBRXJELElBQUksQ0FBQ0gsU0FBUyxFQUFFLE9BQU9uRCxNQUFBLENBQUFYLE9BQUEsQ0FBQXVDLGFBQUEsQ0FBQ3hCLFdBQUEsQ0FBQW1ELE9BQU87Y0FBQ0MsTUFBTTtjQUFDcEIsSUFBSSxFQUFDO1lBQVMsRUFBRztZQUV4RCxPQUNDcEMsTUFBQSxDQUFBWCxPQUFBLENBQUF1QyxhQUFBLENBQUNrQixhQUFBLENBQUFXLE1BQU0sQ0FBQ0MsR0FBRztjQUFBLEdBQUtYLFdBQUEsQ0FBQTNELFVBQVUsQ0FBQ1MsSUFBSTtjQUFFa0MsU0FBUyxFQUFDO1lBQXNCLEdBQ2hFL0IsTUFBQSxDQUFBWCxPQUFBLENBQUF1QyxhQUFBLENBQUNzQixhQUFBLENBQUFTLFlBQVk7Y0FBQ3BELEtBQUssRUFBRUEsS0FBSyxDQUFDcUQ7WUFBWSxFQUFJLEVBRTNDNUQsTUFBQSxDQUFBWCxPQUFBLENBQUF1QyxhQUFBO2NBQVNHLFNBQVMsRUFBQztZQUFjLEdBQ2hDL0IsTUFBQSxDQUFBWCxPQUFBLENBQUF1QyxhQUFBO2NBQUtHLFNBQVMsRUFBQztZQUFpQixHQUMvQi9CLE1BQUEsQ0FBQVgsT0FBQSxDQUFBdUMsYUFBQTtjQUFLRyxTQUFTLEVBQUM7WUFBZSxHQUM3Qi9CLE1BQUEsQ0FBQVgsT0FBQSxDQUFBdUMsYUFBQSxDQUFDcUIsVUFBQSxDQUFBWSxTQUFTO2NBQUN0RCxLQUFLLEVBQUVBO1lBQUssRUFBSSxDQUN0QixFQUNOUCxNQUFBLENBQUFYLE9BQUEsQ0FBQXVDLGFBQUE7Y0FBS0csU0FBUyxFQUFDO1lBQWdCLEdBQzlCL0IsTUFBQSxDQUFBWCxPQUFBLENBQUF1QyxhQUFBO2NBQUtHLFNBQVMsRUFBQztZQUF1QixHQUNyQy9CLE1BQUEsQ0FBQVgsT0FBQSxDQUFBdUMsYUFBQSxDQUFDb0IsVUFBQSxDQUFBMUMsY0FBYztjQUFDQyxLQUFLLEVBQUVBO1lBQUssRUFBSSxDQUMzQixDQUNELENBQ0QsRUFDTlAsTUFBQSxDQUFBWCxPQUFBLENBQUF1QyxhQUFBO2NBQVFHLFNBQVMsRUFBQztZQUFlLEdBQ2hDL0IsTUFBQSxDQUFBWCxPQUFBLENBQUF1QyxhQUFBLGVBQU9yQixLQUFLLENBQUN1RCxNQUFNLENBQUNDLEtBQUssQ0FBUSxFQUNqQy9ELE1BQUEsQ0FBQVgsT0FBQSxDQUFBdUMsYUFBQSxDQUFDeEIsV0FBQSxDQUFBNEQsSUFBSTtjQUFDQyxJQUFJLEVBQUMsUUFBUTtjQUFDQyxNQUFNLEVBQUM7WUFBUSxHQUNqQzNELEtBQUssQ0FBQ3VELE1BQU0sQ0FBQ0ssS0FBSyxDQUNiLEVBQUMsR0FBRyxFQUNWNUQsS0FBSyxDQUFDdUQsTUFBTSxDQUFDTSxTQUFTLEVBQUUsR0FBRyxFQUM1QnBFLE1BQUEsQ0FBQVgsT0FBQSxDQUFBdUMsYUFBQSxDQUFDeEIsV0FBQSxDQUFBNEQsSUFBSTtjQUFDQyxJQUFJLEVBQUMsVUFBVTtjQUFDQyxNQUFNLEVBQUM7WUFBUSxHQUNuQzNELEtBQUssQ0FBQ3VELE1BQU0sQ0FBQ08sT0FBTyxDQUNmLENBQ0MsQ0FDQSxDQUNFO1VBRWY7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDNUNBLElBQUFyRSxNQUFBLEdBQUFuQixPQUFBO1VBQ0EsSUFBQXVCLFdBQUEsR0FBQXZCLE9BQUE7VUFDQSxJQUFBd0IsTUFBQSxHQUFBeEIsT0FBQTtVQUNBLElBQUF5RixLQUFBLEdBQUF6RixPQUFBO1VBRU87VUFBVSxTQUNSZ0YsU0FBU0EsQ0FBQztZQUFFdEQ7VUFBSyxDQUFFO1lBQzNCLE1BQU1nRSxjQUFjLEdBQUd6RCxLQUFLLElBQUc7Y0FDOUJ3RCxLQUFBLENBQUFFLFNBQVMsQ0FBQ0MsT0FBTyxHQUFHM0QsS0FBSyxDQUFDNEQsYUFBYSxDQUFDQyxPQUFPLENBQUNDLFFBQVE7WUFDekQsQ0FBQztZQUNELE9BQ0M1RSxNQUFBLENBQUFYLE9BQUEsQ0FBQXVDLGFBQUE7Y0FBSUcsU0FBUyxFQUFDO1lBQW9CLEdBQ2pDL0IsTUFBQSxDQUFBWCxPQUFBLENBQUF1QyxhQUFBLGFBQ0M1QixNQUFBLENBQUFYLE9BQUEsQ0FBQXVDLGFBQUEsQ0FBQ3ZCLE1BQUEsQ0FBQXlCLEtBQUs7Y0FDTFUsT0FBTyxFQUFFK0IsY0FBYztjQUFBLGlCQUNULElBQUk7Y0FDbEJ2QyxHQUFHLEVBQUMscUJBQXFCO2NBQ3pCNkMsR0FBRyxFQUFDLGtCQUFrQjtjQUN0QkMsS0FBSyxFQUFDO1lBQWtCLEVBQ3ZCLENBQ0UsRUFDTDlFLE1BQUEsQ0FBQVgsT0FBQSxDQUFBdUMsYUFBQSxhQUNDNUIsTUFBQSxDQUFBWCxPQUFBLENBQUF1QyxhQUFBLENBQUN2QixNQUFBLENBQUF5QixLQUFLO2NBQ0xVLE9BQU8sRUFBRStCLGNBQWM7Y0FBQSxpQkFDVCxJQUFJO2NBQ2xCdkMsR0FBRyxFQUFDLHFCQUFxQjtjQUN6QjZDLEdBQUcsRUFBQyxrQkFBa0I7Y0FDdEJDLEtBQUssRUFBQztZQUFnQixFQUNyQixDQUNFLEVBQ0w5RSxNQUFBLENBQUFYLE9BQUEsQ0FBQXVDLGFBQUEsYUFDQzVCLE1BQUEsQ0FBQVgsT0FBQSxDQUFBdUMsYUFBQSxDQUFDdkIsTUFBQSxDQUFBeUIsS0FBSztjQUNMVSxPQUFPLEVBQUUrQixjQUFjO2NBQUEsaUJBQ1QsSUFBSTtjQUNsQnZDLEdBQUcsRUFBQyxvQkFBb0I7Y0FDeEI2QyxHQUFHLEVBQUMsaUJBQWlCO2NBQ3JCQyxLQUFLLEVBQUM7WUFBc0IsRUFDM0IsQ0FDRSxFQUNMOUUsTUFBQSxDQUFBWCxPQUFBLENBQUF1QyxhQUFBLGFBQ0M1QixNQUFBLENBQUFYLE9BQUEsQ0FBQXVDLGFBQUEsQ0FBQ3hCLFdBQUEsQ0FBQTJFLFdBQVc7Y0FBQ0MsSUFBSSxFQUFFekUsS0FBSyxDQUFDMEU7WUFBSyxFQUFJLENBQzlCLENBQ0Q7VUFFUDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM1Q0EsSUFBQWpGLE1BQUEsR0FBQW5CLE9BQUE7VUFDQSxJQUFBcUcsS0FBQSxHQUFBckcsT0FBQTtVQUNBLElBQUFvQixRQUFBLEdBQUFwQixPQUFBO1VBQ0EsSUFBQXFCLFFBQUEsR0FBQXJCLE9BQUE7VUFDQSxJQUFBc0IsTUFBQSxHQUFBdEIsT0FBQTtVQUNBLElBQUF1QixXQUFBLEdBQUF2QixPQUFBO1VBR00sU0FBVXNHLFNBQVNBLENBQUM7WUFBRTVFLEtBQUs7WUFBRUksS0FBSztZQUFFQztVQUFRLENBQUU7WUFDbkQsTUFBTSxDQUFDd0UsTUFBTSxFQUFFQyxTQUFTLENBQUMsR0FBRyxJQUFBckYsTUFBQSxDQUFBVSxRQUFRLEVBQUM7Y0FBRTRFLEtBQUssRUFBRSxFQUFFO2NBQUVDLFFBQVEsRUFBRTtZQUFFLENBQUUsQ0FBQztZQUNqRSxNQUFNLENBQUMvRSxRQUFRLEVBQUVDLFdBQVcsQ0FBQyxHQUFHLElBQUFULE1BQUEsQ0FBQVUsUUFBUSxFQUF5QyxFQUFFLENBQUM7WUFFcEYsTUFBTThFLFlBQVksR0FFZCxFQUFFO1lBRU4sTUFBTTtjQUFFRixLQUFLO2NBQUVDO1lBQVEsQ0FBRSxHQUFHSCxNQUFNO1lBQ2xDLElBQUksQ0FBQ0UsS0FBSyxJQUFJLENBQUNDLFFBQVEsRUFBRUMsWUFBWSxDQUFDQyxRQUFRLEdBQUcsSUFBSTtZQUVyRCxNQUFNQyxZQUFZLEdBQUdBLENBQUM7Y0FBRWhCLGFBQWEsRUFBRVI7WUFBTSxDQUFFLEtBQUk7Y0FDbEQsTUFBTXlCLFlBQVksR0FBRztnQkFBRSxHQUFHUDtjQUFNLENBQUU7Y0FDbENPLFlBQVksQ0FBQ3pCLE1BQU0sQ0FBQzBCLElBQUksQ0FBQyxHQUFHMUIsTUFBTSxDQUFDMkIsS0FBSztjQUN4Q1IsU0FBUyxDQUFDTSxZQUFZLENBQUM7Y0FDdkIvRSxRQUFRLENBQUMsRUFBRSxDQUFDO1lBQ2IsQ0FBQztZQUVELE1BQU1rRixRQUFRLEdBQUcsTUFBTWhGLEtBQUssSUFBRztjQUM5QkwsV0FBVyxDQUFDLFNBQVMsQ0FBQztjQUN0QixNQUFNO2dCQUFFNkUsS0FBSztnQkFBRUM7Y0FBUSxDQUFFLEdBQUdILE1BQU07Y0FFbEMsSUFBSTtnQkFDSHRFLEtBQUssQ0FBQ2lGLGNBQWMsRUFBRTtnQkFDdEIsTUFBTWhGLFFBQVEsR0FBRyxNQUFNYixRQUFBLENBQUFjLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDK0UsS0FBSyxDQUFDVixLQUFLLEVBQUVDLFFBQVEsQ0FBQztnQkFFakUsSUFBSSxDQUFDeEUsUUFBUSxDQUFDa0YsTUFBTSxFQUFFO2tCQUNyQixPQUFPckYsUUFBUSxDQUFDRyxRQUFRLENBQUNKLEtBQUssQ0FBQzs7Z0JBRWhDMEUsU0FBUyxDQUFDO2tCQUFFQyxLQUFLLEVBQUUsRUFBRTtrQkFBRUMsUUFBUSxFQUFFO2dCQUFFLENBQUUsQ0FBQztnQkFDdEN0RixRQUFBLENBQUFtQixPQUFPLENBQUNDLFNBQVMsQ0FBQyxHQUFHLENBQUM7Z0JBQ3RCO2VBQ0EsQ0FBQyxPQUFPQyxDQUFDLEVBQUU7Z0JBQ1hWLFFBQVEsQ0FBQ0wsS0FBSyxDQUFDMkYsVUFBVSxDQUFDO2VBQzFCLFNBQVM7Z0JBQ1R6RixXQUFXLENBQUMsRUFBRSxDQUFDOztZQUVqQixDQUFDO1lBRUQsT0FDQ1QsTUFBQSxDQUFBWCxPQUFBLENBQUF1QyxhQUFBLENBQUE1QixNQUFBLENBQUFYLE9BQUEsQ0FBQXdDLFFBQUEsUUFDQzdCLE1BQUEsQ0FBQVgsT0FBQSxDQUFBdUMsYUFBQSxDQUFDc0QsS0FBQSxDQUFBaUIsSUFBSTtjQUFDTCxRQUFRLEVBQUVBLFFBQVE7Y0FBRS9ELFNBQVMsRUFBQztZQUErQixHQUNsRS9CLE1BQUEsQ0FBQVgsT0FBQSxDQUFBdUMsYUFBQSxDQUFDekIsTUFBQSxDQUFBZ0MsS0FBSztjQUFDVixPQUFPLEVBQUVkLEtBQUs7Y0FBRXlCLElBQUksRUFBQztZQUFPLEVBQUcsRUFDdENwQyxNQUFBLENBQUFYLE9BQUEsQ0FBQXVDLGFBQUEsQ0FBQ3NELEtBQUEsQ0FBQWtCLEtBQUs7Y0FDTEMsV0FBVyxFQUFFOUYsS0FBSyxDQUFDK0YsVUFBVTtjQUM3QmxFLElBQUksRUFBQyxNQUFNO2NBQ1h3RCxJQUFJLEVBQUMsT0FBTztjQUNaQyxLQUFLLEVBQUVQLEtBQUs7Y0FDWmlCLFFBQVEsRUFBRWIsWUFBWTtjQUN0QmMsUUFBUTtZQUFBLEVBQ1AsRUFDRnhHLE1BQUEsQ0FBQVgsT0FBQSxDQUFBdUMsYUFBQSxDQUFDc0QsS0FBQSxDQUFBa0IsS0FBSztjQUNMQyxXQUFXLEVBQUU5RixLQUFLLENBQUNrRyxhQUFhO2NBQ2hDckUsSUFBSSxFQUFDLFVBQVU7Y0FDZndELElBQUksRUFBQyxVQUFVO2NBQ2ZDLEtBQUssRUFBRU4sUUFBUTtjQUNmZ0IsUUFBUSxFQUFFYixZQUFZO2NBQ3RCYyxRQUFRO1lBQUEsRUFDUCxFQUNGeEcsTUFBQSxDQUFBWCxPQUFBLENBQUF1QyxhQUFBLENBQUN4QixXQUFBLENBQUFpQyxNQUFNO2NBQ05ELElBQUksRUFBQyxRQUFRO2NBQ2JHLE9BQU8sRUFBQyxTQUFTO2NBQUEsR0FDYmlELFlBQVk7Y0FDaEJoRCxPQUFPLEVBQUVzRCxRQUFRO2NBQ2pCckQsT0FBTyxFQUFFakMsUUFBUSxJQUFJLFNBQVM7Y0FDOUJrQyxLQUFLLEVBQUVuQyxLQUFLLENBQUNtRztZQUFZLEVBQ3hCLENBQ0ksQ0FDTDtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQzlFQSxJQUFBMUcsTUFBQSxHQUFBbkIsT0FBQTtVQUNBLElBQUF3QixNQUFBLEdBQUF4QixPQUFBO1VBQ0EsSUFBQXVCLFdBQUEsR0FBQXZCLE9BQUE7VUFDTSxTQUFVOEUsWUFBWUEsQ0FBQztZQUFFcEQ7VUFBSyxDQUFFO1lBQ3JDLE1BQU1vRyxJQUFJLEdBQUc7Y0FDWkMsT0FBTyxFQUFFLDJDQUEyQztjQUNwREMsU0FBUyxFQUFFO2dCQUNWQyxPQUFPLEVBQ04seUtBQXlLO2dCQUMxS0MsT0FBTyxFQUNOO2VBQ0Q7Y0FDREMsV0FBVyxFQUFFO2dCQUNaQyxRQUFRLEVBQUUsMENBQTBDO2dCQUNwREMsTUFBTSxFQUFFLG9EQUFvRDtnQkFDNURDLFNBQVMsRUFBRSxzQ0FBc0M7Z0JBQ2pEQyxRQUFRLEVBQUUsd0RBQXdEO2dCQUNsRUMsT0FBTyxFQUFFOzthQUVWO1lBRUQsT0FDQ3JILE1BQUEsQ0FBQVgsT0FBQSxDQUFBdUMsYUFBQTtjQUFLRyxTQUFTLEVBQUM7WUFBd0IsR0FDdEMvQixNQUFBLENBQUFYLE9BQUEsQ0FBQXVDLGFBQUE7Y0FBS0csU0FBUyxFQUFDO1lBQTBCLEdBQ3hDL0IsTUFBQSxDQUFBWCxPQUFBLENBQUF1QyxhQUFBO2NBQUdxQyxJQUFJLEVBQUUwQyxJQUFJLENBQUNDLE9BQU87Y0FBRTFDLE1BQU0sRUFBQyxRQUFRO2NBQUNuQyxTQUFTLEVBQUM7WUFBbUIsR0FDbkUvQixNQUFBLENBQUFYLE9BQUEsQ0FBQXVDLGFBQUEsQ0FBQ3ZCLE1BQUEsQ0FBQXlCLEtBQUs7Y0FBQ0UsR0FBRyxFQUFDLG1DQUFtQztjQUFDNkMsR0FBRyxFQUFDO1lBQVMsRUFBRyxFQUMvRDdFLE1BQUEsQ0FBQVgsT0FBQSxDQUFBdUMsYUFBQSxrQkFDQzVCLE1BQUEsQ0FBQVgsT0FBQSxDQUFBdUMsYUFBQTtjQUFJRyxTQUFTLEVBQUM7WUFBYyxHQUFFeEIsS0FBSyxDQUFDc0csU0FBUyxDQUFDRCxPQUFPLEVBQUU5QixLQUFLLENBQU0sRUFDbEU5RSxNQUFBLENBQUFYLE9BQUEsQ0FBQXVDLGFBQUEsZUFBT3JCLEtBQUssQ0FBQ3NHLFNBQVMsQ0FBQ0QsT0FBTyxFQUFFVSxXQUFXLENBQVEsQ0FDMUMsQ0FDUCxFQUNKdEgsTUFBQSxDQUFBWCxPQUFBLENBQUF1QyxhQUFBLGlCQUNDNUIsTUFBQSxDQUFBWCxPQUFBLENBQUF1QyxhQUFBLGFBQUtyQixLQUFLLENBQUN1RSxLQUFLLENBQU0sQ0FDZCxDQUNKLEVBRU45RSxNQUFBLENBQUFYLE9BQUEsQ0FBQXVDLGFBQUE7Y0FBU0csU0FBUyxFQUFDO1lBQWMsR0FDaEMvQixNQUFBLENBQUFYLE9BQUEsQ0FBQXVDLGFBQUE7Y0FBU0csU0FBUyxFQUFDO1lBQWEsR0FDL0IvQixNQUFBLENBQUFYLE9BQUEsQ0FBQXVDLGFBQUEsQ0FBQ3ZCLE1BQUEsQ0FBQXlCLEtBQUs7Y0FBQ0UsR0FBRyxFQUFDLGdDQUFnQztjQUFDNkMsR0FBRyxFQUFDO1lBQU8sRUFBRyxFQUMxRDdFLE1BQUEsQ0FBQVgsT0FBQSxDQUFBdUMsYUFBQSxDQUFDeEIsV0FBQSxDQUFBbUgsV0FBVztjQUFDQyxFQUFFLEVBQUM7WUFBRyxHQUFFakgsS0FBSyxDQUFDa0gsUUFBUSxDQUFlLENBQ3pDLEVBQ1Z6SCxNQUFBLENBQUFYLE9BQUEsQ0FBQXVDLGFBQUE7Y0FBU0csU0FBUyxFQUFDO1lBQWEsR0FDL0IvQixNQUFBLENBQUFYLE9BQUEsQ0FBQXVDLGFBQUEsQ0FBQ3ZCLE1BQUEsQ0FBQXlCLEtBQUs7Y0FBQ0UsR0FBRyxFQUFDLG1DQUFtQztjQUFDNkMsR0FBRyxFQUFDO1lBQU8sRUFBRyxFQUM3RDdFLE1BQUEsQ0FBQVgsT0FBQSxDQUFBdUMsYUFBQSxDQUFDeEIsV0FBQSxDQUFBbUgsV0FBVztjQUFDQyxFQUFFLEVBQUM7WUFBRyxHQUFFakgsS0FBSyxDQUFDbUgsVUFBVSxDQUFlLENBQzNDLENBQ0QsRUFFVjFILE1BQUEsQ0FBQVgsT0FBQSxDQUFBdUMsYUFBQTtjQUFTRyxTQUFTLEVBQUM7WUFBcUIsR0FDdkMvQixNQUFBLENBQUFYLE9BQUEsQ0FBQXVDLGFBQUE7Y0FBR3FDLElBQUksRUFBRTBDLElBQUksQ0FBQ0UsU0FBUyxDQUFDQyxPQUFPO2NBQUU1QyxNQUFNLEVBQUM7WUFBUSxHQUMvQ2xFLE1BQUEsQ0FBQVgsT0FBQSxDQUFBdUMsYUFBQTtjQUFLRyxTQUFTLEVBQUM7WUFBK0IsR0FDN0MvQixNQUFBLENBQUFYLE9BQUEsQ0FBQXVDLGFBQUEsQ0FBQ3ZCLE1BQUEsQ0FBQXlCLEtBQUs7Y0FBQ0UsR0FBRyxFQUFDLG1DQUFtQztjQUFDNkMsR0FBRyxFQUFDO1lBQVMsRUFBRyxFQUMvRDdFLE1BQUEsQ0FBQVgsT0FBQSxDQUFBdUMsYUFBQSxlQUFPckIsS0FBSyxDQUFDc0csU0FBUyxDQUFDYyxRQUFRLENBQVEsQ0FDbEMsQ0FDSCxFQUNKM0gsTUFBQSxDQUFBWCxPQUFBLENBQUF1QyxhQUFBO2NBQUdxQyxJQUFJLEVBQUUwQyxJQUFJLENBQUNFLFNBQVMsQ0FBQ0UsT0FBTztjQUFFN0MsTUFBTSxFQUFDO1lBQVEsR0FDL0NsRSxNQUFBLENBQUFYLE9BQUEsQ0FBQXVDLGFBQUE7Y0FBS0csU0FBUyxFQUFDO1lBQWdDLEdBQzlDL0IsTUFBQSxDQUFBWCxPQUFBLENBQUF1QyxhQUFBLENBQUN2QixNQUFBLENBQUF5QixLQUFLO2NBQUNFLEdBQUcsRUFBQyxtQ0FBbUM7Y0FBQzZDLEdBQUcsRUFBQztZQUFTLEVBQUcsRUFDL0Q3RSxNQUFBLENBQUFYLE9BQUEsQ0FBQXVDLGFBQUEsZUFBT3JCLEtBQUssQ0FBQ3NHLFNBQVMsQ0FBQ2UsUUFBUSxDQUFRLENBQ2xDLENBQ0gsQ0FDSyxFQUVWNUgsTUFBQSxDQUFBWCxPQUFBLENBQUF1QyxhQUFBO2NBQVNHLFNBQVMsRUFBQztZQUF5QixHQUMzQy9CLE1BQUEsQ0FBQVgsT0FBQSxDQUFBdUMsYUFBQSxhQUFLckIsS0FBSyxDQUFDeUcsV0FBVyxDQUFNLEVBQzVCaEgsTUFBQSxDQUFBWCxPQUFBLENBQUF1QyxhQUFBO2NBQUlHLFNBQVMsRUFBQztZQUFtQixHQUNoQy9CLE1BQUEsQ0FBQVgsT0FBQSxDQUFBdUMsYUFBQSxhQUNDNUIsTUFBQSxDQUFBWCxPQUFBLENBQUF1QyxhQUFBO2NBQUdzQyxNQUFNLEVBQUMsUUFBUTtjQUFDRCxJQUFJLEVBQUUwQyxJQUFJLENBQUNLLFdBQVcsQ0FBQ0k7WUFBUSxHQUNqRHBILE1BQUEsQ0FBQVgsT0FBQSxDQUFBdUMsYUFBQSxDQUFDdkIsTUFBQSxDQUFBeUIsS0FBSztjQUFDRSxHQUFHLEVBQUMsNkJBQTZCO2NBQUM2QyxHQUFHLEVBQUM7WUFBaUIsRUFBRyxDQUM5RCxDQUNBLEVBQ0w3RSxNQUFBLENBQUFYLE9BQUEsQ0FBQXVDLGFBQUEsYUFDQzVCLE1BQUEsQ0FBQVgsT0FBQSxDQUFBdUMsYUFBQTtjQUFHc0MsTUFBTSxFQUFDLFFBQVE7Y0FBQ0QsSUFBSSxFQUFFMEMsSUFBSSxDQUFDSyxXQUFXLENBQUNHO1lBQVMsR0FDbERuSCxNQUFBLENBQUFYLE9BQUEsQ0FBQXVDLGFBQUEsQ0FBQ3ZCLE1BQUEsQ0FBQXlCLEtBQUs7Y0FBQ0UsR0FBRyxFQUFDLDZCQUE2QjtjQUFDNkMsR0FBRyxFQUFDO1lBQWtCLEVBQUcsQ0FDL0QsQ0FDQSxFQUNMN0UsTUFBQSxDQUFBWCxPQUFBLENBQUF1QyxhQUFBLGFBQ0M1QixNQUFBLENBQUFYLE9BQUEsQ0FBQXVDLGFBQUE7Y0FBR3NDLE1BQU0sRUFBQyxRQUFRO2NBQUNELElBQUksRUFBRTBDLElBQUksQ0FBQ0ssV0FBVyxDQUFDQztZQUFRLEdBQ2pEakgsTUFBQSxDQUFBWCxPQUFBLENBQUF1QyxhQUFBLENBQUN2QixNQUFBLENBQUF5QixLQUFLO2NBQUNFLEdBQUcsRUFBQyxtQ0FBbUM7Y0FBQzZDLEdBQUcsRUFBQztZQUFpQixFQUFHLENBQ3BFLENBQ0EsRUFDTDdFLE1BQUEsQ0FBQVgsT0FBQSxDQUFBdUMsYUFBQSxhQUNDNUIsTUFBQSxDQUFBWCxPQUFBLENBQUF1QyxhQUFBO2NBQUdzQyxNQUFNLEVBQUMsUUFBUTtjQUFDRCxJQUFJLEVBQUUwQyxJQUFJLENBQUNLLFdBQVcsQ0FBQ0s7WUFBTyxHQUNoRHJILE1BQUEsQ0FBQVgsT0FBQSxDQUFBdUMsYUFBQSxDQUFDdkIsTUFBQSxDQUFBeUIsS0FBSztjQUFDRSxHQUFHLEVBQUMsNkJBQTZCO2NBQUM2QyxHQUFHLEVBQUM7WUFBZ0IsRUFBRyxDQUM3RCxDQUNBLENBQ0QsQ0FDSSxDQUNMO1VBRVIiLCJpZ25vcmVMaXN0IjpbXX0=