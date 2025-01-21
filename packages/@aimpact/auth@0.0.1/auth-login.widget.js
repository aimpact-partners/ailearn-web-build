System.register(["@beyond-js/widgets@1.1.1/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "react@18.2.0", "@beyond-js/kernel@0.1.9/routing", "@aimpact/chat-sdk@1.4.1/session", "pragmate-ui@1.0.0-beta.7/alert", "pragmate-ui@1.0.0-beta.7/components", "pragmate-ui@1.0.0-beta.7/image", "@beyond-js/react-18-widgets@1.1.2/hooks", "framer-motion@10.18.0", "@aimpact/auth@0.0.1/components", "@beyond-js/kernel@0.1.9/core", "pragmate-ui@1.0.0-beta.7/form"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, bimport, __Bundle, __pkg, ims, Controller, View, Languages, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    View: void 0,
    Languages: void 0
  });
  return {
    setters: [function (_beyondJsWidgets111Render) {
      dependency_0 = _beyondJsWidgets111Render;
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
    }, function (_aimpactChatSdk141Session) {
      dependency_6 = _aimpactChatSdk141Session;
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
        const dependencies = new Map([["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/reactive", "0.0.1"], ["pragmate-ui", "1.0.0-beta.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@beyond-js/widgets", "1.1.0"], ["framer-motion", "11.3.21"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["socket.io-client", "4.7.3"], ["wavesurfer.js", "7.8.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.46"], ["@types/react-dom", "18.2.18"], ["@aimpact/auth", "0.0.1"], ["@aimpact/ailearn-app", "0.3.1"]]);
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
        hash: 705037166,
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
        hash: 3442584944,
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
              href: '/terms-and-conditions',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsIldpZGdldCIsIlZpZXciLCJleHBvcnRzIiwiYW5pbWF0aW9ucyIsImRlZmF1bHQiLCJpbml0aWFsIiwieSIsIm9wYWNpdHkiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZXhpdCIsImZhZGUiLCJmYWRlSW5VcGZhZGVPdXRMZWZ0IiwieCIsIl9yZWFjdCIsIl9yb3V0aW5nIiwiX3Nlc3Npb24iLCJfYWxlcnQiLCJfY29tcG9uZW50cyIsIl9pbWFnZSIsIkxvZ2luQ29udGFpbmVyIiwidGV4dHMiLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwidXNlU3RhdGUiLCJlcnJvciIsInNldEVycm9yIiwib25Hb29nbGUiLCJldmVudCIsInJlc3BvbnNlIiwic2Vzc2lvbldyYXBwZXIiLCJhdXRoIiwibG9naW5XaXRoIiwiRXJyb3IiLCJyb3V0aW5nIiwicHVzaFN0YXRlIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIiwiZXJyb3JzIiwidW5rbm93biIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsIkltYWdlIiwiY2xhc3NOYW1lIiwic3JjIiwibG9naW5UaXRsZSIsInN1YnRpdGxlIiwiQWxlcnQiLCJ0eXBlIiwiQnV0dG9uIiwiaWNvbiIsInZhcmlhbnQiLCJvbkNsaWNrIiwibG9hZGluZyIsImxhYmVsIiwiZ29vZ2xlU2lnbkluQnV0dG9uIiwiX2hvb2tzIiwiX2JleW9uZF9jb250ZXh0IiwiX2ZyYW1lck1vdGlvbiIsIl9hbmltYXRpb25zIiwiX2NvbnRhaW5lciIsIl9sYW5ndWFnZXMiLCJfcHJlc2VudGF0aW9uIiwidGV4dFJlYWR5IiwidXNlVGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJTcGlubmVyIiwiYWN0aXZlIiwibW90aW9uIiwiZGl2IiwiUHJlc2VudGF0aW9uIiwicHJlc2VudGF0aW9uIiwiTGFuZ3VhZ2VzIiwiZm9vdGVyIiwiaW50cm8iLCJMaW5rIiwiaHJlZiIsInRhcmdldCIsInRlcm1zIiwiY29ubmVjdG9yIiwicHJpdmFjeSIsIl9jb3JlIiwiY2hhbmdlTGFuZ3VhZ2UiLCJsYW5ndWFnZXMiLCJjdXJyZW50IiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJsYW5ndWFnZSIsImFsdCIsInRpdGxlIiwiVGhlbWVTd2l0Y2giLCJ0ZXh0IiwidGhlbWUiLCJfZm9ybSIsIkxvZ2luRm9ybSIsInZhbHVlcyIsInNldFZhbHVlcyIsImVtYWlsIiwicGFzc3dvcmQiLCJmb3JtRGlzYWJsZWQiLCJkaXNhYmxlZCIsImhhbmRsZUNoYW5nZSIsImN1cnJlbnRWYWx1ZSIsIm5hbWUiLCJ2YWx1ZSIsIm9uU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJsb2dpbiIsInN0YXR1cyIsImVycm9yTG9naW4iLCJGb3JtIiwiSW5wdXQiLCJwbGFjZWhvbGRlciIsImVtYWlsTGFiZWwiLCJvbkNoYW5nZSIsInJlcXVpcmVkIiwicGFzc3dvcmRMYWJlbCIsInNpZ25JbkJ1dHRvbiIsImRhdGEiLCJ3ZWJpbmFyIiwidHV0b3JpYWxzIiwidGVhY2hlciIsInN0dWRlbnQiLCJzb2NpYWxNZWRpYSIsImxpbmtlZGluIiwidGlrdG9rIiwiaW5zdGFncmFtIiwiZmFjZWJvb2siLCJ5b3V0dWJlIiwiZGVzY3JpcHRpb24iLCJIdG1sV3JhcHBlciIsImFzIiwiY29udGVudHMiLCJleHBlcmllbmNlIiwidGVhY2hlcnMiLCJzdHVkZW50cyJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3ZpZXdzL2FuaW1hdGlvbnMudHN4IiwiL3RzL3ZpZXdzL2NvbnRhaW5lci50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xhbmd1YWdlcy50c3giLCIvdHMvdmlld3MvbG9naW4tZm9ybS50c3giLCIvdHMvdmlld3MvcHJlc2VudGF0aW9uLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUVBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUVPO1VBQVUsTUFDWEUsVUFBVyxTQUFRSCxLQUFBLENBQUFJLHlCQUF5QjtZQUNqRCxJQUFJQyxNQUFNQSxDQUFBO2NBQ1QsT0FBT0gsTUFBQSxDQUFBSSxJQUFJO1lBQ1o7O1VBQ0FDLE9BQUEsQ0FBQUosVUFBQSxHQUFBQSxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1RNLE1BQU1LLFVBQVUsR0FBQUQsT0FBQSxDQUFBQyxVQUFBLEdBQUc7WUFDekJDLE9BQU8sRUFBRTtjQUNSQyxPQUFPLEVBQUU7Z0JBQUVDLENBQUMsRUFBRSxNQUFNO2dCQUFFQyxPQUFPLEVBQUU7Y0FBQyxDQUFFO2NBQ2xDQyxPQUFPLEVBQUU7Z0JBQUVGLENBQUMsRUFBRSxDQUFDO2dCQUFFQyxPQUFPLEVBQUUsQ0FBQztnQkFBRUUsVUFBVSxFQUFFO2tCQUFFQyxRQUFRLEVBQUU7Z0JBQUc7Y0FBRSxDQUFFO2NBQzVEQyxJQUFJLEVBQUU7Z0JBQUVMLENBQUMsRUFBRSxLQUFLO2dCQUFFQyxPQUFPLEVBQUUsQ0FBQztnQkFBRUUsVUFBVSxFQUFFO2tCQUFFQyxRQUFRLEVBQUU7Z0JBQUc7Y0FBRTthQUMzRDtZQUNERSxJQUFJLEVBQUU7Y0FDTFAsT0FBTyxFQUFFO2dCQUFFRSxPQUFPLEVBQUU7Y0FBQyxDQUFFO2NBQ3ZCQyxPQUFPLEVBQUU7Z0JBQUVGLENBQUMsRUFBRSxDQUFDO2dCQUFFQyxPQUFPLEVBQUUsQ0FBQztnQkFBRUUsVUFBVSxFQUFFO2tCQUFFQyxRQUFRLEVBQUU7Z0JBQUc7Y0FBRSxDQUFFO2NBQzVEQyxJQUFJLEVBQUU7Z0JBQUVMLENBQUMsRUFBRSxLQUFLO2dCQUFFQyxPQUFPLEVBQUUsQ0FBQztnQkFBRUUsVUFBVSxFQUFFO2tCQUFFQyxRQUFRLEVBQUU7Z0JBQUc7Y0FBRTthQUMzRDtZQUNERyxtQkFBbUIsRUFBRTtjQUNwQlIsT0FBTyxFQUFFO2dCQUFFQyxDQUFDLEVBQUUsTUFBTTtnQkFBRUMsT0FBTyxFQUFFO2NBQUMsQ0FBRTtjQUNsQ0MsT0FBTyxFQUFFO2dCQUFFRixDQUFDLEVBQUUsQ0FBQztnQkFBRUMsT0FBTyxFQUFFLENBQUM7Z0JBQUVFLFVBQVUsRUFBRTtrQkFBRUMsUUFBUSxFQUFFO2dCQUFHO2NBQUUsQ0FBRTtjQUM1REMsSUFBSSxFQUFFO2dCQUFFRyxDQUFDLEVBQUUsS0FBSztnQkFBRVAsT0FBTyxFQUFFLENBQUM7Z0JBQUVFLFVBQVUsRUFBRTtrQkFBRUMsUUFBUSxFQUFFO2dCQUFHO2NBQUU7O1dBRTVEOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2hCRCxJQUFBSyxNQUFBLEdBQUFuQixPQUFBO1VBQ0EsSUFBQW9CLFFBQUEsR0FBQXBCLE9BQUE7VUFDQSxJQUFBcUIsUUFBQSxHQUFBckIsT0FBQTtVQUNBLElBQUFzQixNQUFBLEdBQUF0QixPQUFBO1VBQ0EsSUFBQXVCLFdBQUEsR0FBQXZCLE9BQUE7VUFDQSxJQUFBd0IsTUFBQSxHQUFBeEIsT0FBQTtVQUdNLFNBQVV5QixjQUFjQSxDQUFDO1lBQUVDO1VBQUssQ0FBRTtZQUN2QyxNQUFNLENBQUNDLFFBQVEsRUFBRUMsV0FBVyxDQUFDLEdBQUcsSUFBQVQsTUFBQSxDQUFBVSxRQUFRLEVBQXlDLEVBQUUsQ0FBQztZQUNwRixNQUFNLENBQUNDLEtBQUssRUFBRUMsUUFBUSxDQUFDLEdBQUcsSUFBQVosTUFBQSxDQUFBVSxRQUFRLEVBQUMsRUFBRSxDQUFDO1lBRXRDLE1BQU1HLFFBQVEsR0FBRyxNQUFNQyxLQUFLLElBQUc7Y0FDOUIsSUFBSTtnQkFDSEwsV0FBVyxDQUFDLFFBQVEsQ0FBQztnQkFFckIsTUFBTU0sUUFBUSxHQUFHLE1BQU1iLFFBQUEsQ0FBQWMsY0FBYyxDQUFDQyxJQUFJLENBQUNDLFNBQVMsQ0FBQyxRQUFRLENBQUM7Z0JBRTlELElBQUksQ0FBQ0gsUUFBUSxFQUFFO2tCQUNkLE1BQU0sSUFBSUksS0FBSyxFQUFFOztnQkFHbEJsQixRQUFBLENBQUFtQixPQUFPLENBQUNDLFNBQVMsQ0FBQyxHQUFHLENBQUM7ZUFDdEIsQ0FBQyxPQUFPQyxDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixDQUFDLENBQUM7Z0JBQ2QsSUFBSUEsQ0FBQyxDQUFDRyxPQUFPLEtBQUssc0JBQXNCLEVBQUU7a0JBQ3pDOztnQkFFRGIsUUFBUSxDQUFDTCxLQUFLLENBQUNtQixNQUFNLENBQUNDLE9BQU8sQ0FBQztnQkFDOUJKLE9BQU8sQ0FBQ1osS0FBSyxDQUFDVyxDQUFDLENBQUNHLE9BQU8sQ0FBQztlQUN4QixTQUFTO2dCQUNUaEIsV0FBVyxDQUFDLEVBQUUsQ0FBQzs7WUFFakIsQ0FBQztZQUVELE9BQ0NULE1BQUEsQ0FBQVgsT0FBQSxDQUFBdUMsYUFBQSxDQUFBNUIsTUFBQSxDQUFBWCxPQUFBLENBQUF3QyxRQUFBLFFBQ0M3QixNQUFBLENBQUFYLE9BQUEsQ0FBQXVDLGFBQUEsQ0FBQ3ZCLE1BQUEsQ0FBQXlCLEtBQUs7Y0FBQ0MsU0FBUyxFQUFDLFlBQVk7Y0FBQ0MsR0FBRyxFQUFDO1lBQXNCLEVBQUcsRUFDM0RoQyxNQUFBLENBQUFYLE9BQUEsQ0FBQXVDLGFBQUEsaUJBQ0M1QixNQUFBLENBQUFYLE9BQUEsQ0FBQXVDLGFBQUE7Y0FBSUcsU0FBUyxFQUFDO1lBQWMsR0FBRXhCLEtBQUssQ0FBQzBCLFVBQVUsQ0FBTSxFQUNwRGpDLE1BQUEsQ0FBQVgsT0FBQSxDQUFBdUMsYUFBQSxlQUFPckIsS0FBSyxDQUFDMkIsUUFBUSxDQUFRLENBQ3JCLEVBQ1RsQyxNQUFBLENBQUFYLE9BQUEsQ0FBQXVDLGFBQUEsQ0FBQ3pCLE1BQUEsQ0FBQWdDLEtBQUs7Y0FBQ1YsT0FBTyxFQUFFZCxLQUFLO2NBQUV5QixJQUFJLEVBQUM7WUFBTyxFQUFHLEVBQ3RDcEMsTUFBQSxDQUFBWCxPQUFBLENBQUF1QyxhQUFBO2NBQUtHLFNBQVMsRUFBQztZQUFvQixHQUNsQy9CLE1BQUEsQ0FBQVgsT0FBQSxDQUFBdUMsYUFBQSxDQUFDeEIsV0FBQSxDQUFBaUMsTUFBTTtjQUNOQyxJQUFJLEVBQUMsUUFBUTtjQUNiQyxPQUFPLEVBQUMsU0FBUztjQUNqQkMsT0FBTyxFQUFFM0IsUUFBUTtjQUNqQjRCLE9BQU8sRUFBRWpDLFFBQVEsSUFBSSxRQUFRO2NBQzdCa0MsS0FBSyxFQUFFbkMsS0FBSyxDQUFDb0M7WUFBa0IsRUFDOUIsQ0FDRyxDQUVKO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdkRBLElBQUFDLE1BQUEsR0FBQS9ELE9BQUE7VUFDQSxJQUFBZ0UsZUFBQSxHQUFBaEUsT0FBQTtVQUNBLElBQUFpRSxhQUFBLEdBQUFqRSxPQUFBO1VBQ0EsSUFBQXVCLFdBQUEsR0FBQXZCLE9BQUE7VUFDQSxJQUFBbUIsTUFBQSxHQUFBbkIsT0FBQTtVQUNBLElBQUFrRSxXQUFBLEdBQUFsRSxPQUFBO1VBQ0EsSUFBQW1FLFVBQUEsR0FBQW5FLE9BQUE7VUFDQSxJQUFBb0UsVUFBQSxHQUFBcEUsT0FBQTtVQUNBLElBQUFxRSxhQUFBLEdBQUFyRSxPQUFBO1VBRU87VUFBVSxTQUNSSyxJQUFJQSxDQUFBO1lBQ1osTUFBTSxDQUFDaUUsU0FBUyxFQUFFNUMsS0FBSyxDQUFDLEdBQUcsSUFBQXFDLE1BQUEsQ0FBQVEsUUFBUSxFQUFDUCxlQUFBLENBQUFRLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDO1lBRXJELElBQUksQ0FBQ0gsU0FBUyxFQUFFLE9BQU9uRCxNQUFBLENBQUFYLE9BQUEsQ0FBQXVDLGFBQUEsQ0FBQ3hCLFdBQUEsQ0FBQW1ELE9BQU87Y0FBQ0MsTUFBTTtjQUFDcEIsSUFBSSxFQUFDO1lBQVMsRUFBRztZQUV4RCxPQUNDcEMsTUFBQSxDQUFBWCxPQUFBLENBQUF1QyxhQUFBLENBQUNrQixhQUFBLENBQUFXLE1BQU0sQ0FBQ0MsR0FBRztjQUFBLEdBQUtYLFdBQUEsQ0FBQTNELFVBQVUsQ0FBQ1MsSUFBSTtjQUFFa0MsU0FBUyxFQUFDO1lBQXNCLEdBQ2hFL0IsTUFBQSxDQUFBWCxPQUFBLENBQUF1QyxhQUFBLENBQUNzQixhQUFBLENBQUFTLFlBQVk7Y0FBQ3BELEtBQUssRUFBRUEsS0FBSyxDQUFDcUQ7WUFBWSxFQUFJLEVBRTNDNUQsTUFBQSxDQUFBWCxPQUFBLENBQUF1QyxhQUFBO2NBQVNHLFNBQVMsRUFBQztZQUFjLEdBQ2hDL0IsTUFBQSxDQUFBWCxPQUFBLENBQUF1QyxhQUFBO2NBQUtHLFNBQVMsRUFBQztZQUFpQixHQUMvQi9CLE1BQUEsQ0FBQVgsT0FBQSxDQUFBdUMsYUFBQTtjQUFLRyxTQUFTLEVBQUM7WUFBZSxHQUM3Qi9CLE1BQUEsQ0FBQVgsT0FBQSxDQUFBdUMsYUFBQSxDQUFDcUIsVUFBQSxDQUFBWSxTQUFTO2NBQUN0RCxLQUFLLEVBQUVBO1lBQUssRUFBSSxDQUN0QixFQUNOUCxNQUFBLENBQUFYLE9BQUEsQ0FBQXVDLGFBQUE7Y0FBS0csU0FBUyxFQUFDO1lBQWdCLEdBQzlCL0IsTUFBQSxDQUFBWCxPQUFBLENBQUF1QyxhQUFBO2NBQUtHLFNBQVMsRUFBQztZQUF1QixHQUNyQy9CLE1BQUEsQ0FBQVgsT0FBQSxDQUFBdUMsYUFBQSxDQUFDb0IsVUFBQSxDQUFBMUMsY0FBYztjQUFDQyxLQUFLLEVBQUVBO1lBQUssRUFBSSxDQUMzQixDQUNELENBQ0QsRUFDTlAsTUFBQSxDQUFBWCxPQUFBLENBQUF1QyxhQUFBO2NBQVFHLFNBQVMsRUFBQztZQUFlLEdBQ2hDL0IsTUFBQSxDQUFBWCxPQUFBLENBQUF1QyxhQUFBLGVBQU9yQixLQUFLLENBQUN1RCxNQUFNLENBQUNDLEtBQUssQ0FBUSxFQUNqQy9ELE1BQUEsQ0FBQVgsT0FBQSxDQUFBdUMsYUFBQSxDQUFDeEIsV0FBQSxDQUFBNEQsSUFBSTtjQUFDQyxJQUFJLEVBQUMsdUJBQXVCO2NBQUNDLE1BQU0sRUFBQztZQUFRLEdBQ2hEM0QsS0FBSyxDQUFDdUQsTUFBTSxDQUFDSyxLQUFLLENBQ2IsRUFBQyxHQUFHLEVBQ1Y1RCxLQUFLLENBQUN1RCxNQUFNLENBQUNNLFNBQVMsRUFBRSxHQUFHLEVBQzVCcEUsTUFBQSxDQUFBWCxPQUFBLENBQUF1QyxhQUFBLENBQUN4QixXQUFBLENBQUE0RCxJQUFJO2NBQUNDLElBQUksRUFBQyxVQUFVO2NBQUNDLE1BQU0sRUFBQztZQUFRLEdBQ25DM0QsS0FBSyxDQUFDdUQsTUFBTSxDQUFDTyxPQUFPLENBQ2YsQ0FDQyxDQUNBLENBQ0U7VUFFZjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM1Q0EsSUFBQXJFLE1BQUEsR0FBQW5CLE9BQUE7VUFDQSxJQUFBdUIsV0FBQSxHQUFBdkIsT0FBQTtVQUNBLElBQUF3QixNQUFBLEdBQUF4QixPQUFBO1VBQ0EsSUFBQXlGLEtBQUEsR0FBQXpGLE9BQUE7VUFFTztVQUFVLFNBQ1JnRixTQUFTQSxDQUFDO1lBQUV0RDtVQUFLLENBQUU7WUFDM0IsTUFBTWdFLGNBQWMsR0FBR3pELEtBQUssSUFBRztjQUM5QndELEtBQUEsQ0FBQUUsU0FBUyxDQUFDQyxPQUFPLEdBQUczRCxLQUFLLENBQUM0RCxhQUFhLENBQUNDLE9BQU8sQ0FBQ0MsUUFBUTtZQUN6RCxDQUFDO1lBQ0QsT0FDQzVFLE1BQUEsQ0FBQVgsT0FBQSxDQUFBdUMsYUFBQTtjQUFJRyxTQUFTLEVBQUM7WUFBb0IsR0FDakMvQixNQUFBLENBQUFYLE9BQUEsQ0FBQXVDLGFBQUEsYUFDQzVCLE1BQUEsQ0FBQVgsT0FBQSxDQUFBdUMsYUFBQSxDQUFDdkIsTUFBQSxDQUFBeUIsS0FBSztjQUNMVSxPQUFPLEVBQUUrQixjQUFjO2NBQUEsaUJBQ1QsSUFBSTtjQUNsQnZDLEdBQUcsRUFBQyxxQkFBcUI7Y0FDekI2QyxHQUFHLEVBQUMsa0JBQWtCO2NBQ3RCQyxLQUFLLEVBQUM7WUFBa0IsRUFDdkIsQ0FDRSxFQUNMOUUsTUFBQSxDQUFBWCxPQUFBLENBQUF1QyxhQUFBLGFBQ0M1QixNQUFBLENBQUFYLE9BQUEsQ0FBQXVDLGFBQUEsQ0FBQ3ZCLE1BQUEsQ0FBQXlCLEtBQUs7Y0FDTFUsT0FBTyxFQUFFK0IsY0FBYztjQUFBLGlCQUNULElBQUk7Y0FDbEJ2QyxHQUFHLEVBQUMscUJBQXFCO2NBQ3pCNkMsR0FBRyxFQUFDLGtCQUFrQjtjQUN0QkMsS0FBSyxFQUFDO1lBQWdCLEVBQ3JCLENBQ0UsRUFDTDlFLE1BQUEsQ0FBQVgsT0FBQSxDQUFBdUMsYUFBQSxhQUNDNUIsTUFBQSxDQUFBWCxPQUFBLENBQUF1QyxhQUFBLENBQUN2QixNQUFBLENBQUF5QixLQUFLO2NBQ0xVLE9BQU8sRUFBRStCLGNBQWM7Y0FBQSxpQkFDVCxJQUFJO2NBQ2xCdkMsR0FBRyxFQUFDLG9CQUFvQjtjQUN4QjZDLEdBQUcsRUFBQyxpQkFBaUI7Y0FDckJDLEtBQUssRUFBQztZQUFzQixFQUMzQixDQUNFLEVBQ0w5RSxNQUFBLENBQUFYLE9BQUEsQ0FBQXVDLGFBQUEsYUFDQzVCLE1BQUEsQ0FBQVgsT0FBQSxDQUFBdUMsYUFBQSxDQUFDeEIsV0FBQSxDQUFBMkUsV0FBVztjQUFDQyxJQUFJLEVBQUV6RSxLQUFLLENBQUMwRTtZQUFLLEVBQUksQ0FDOUIsQ0FDRDtVQUVQOzs7Ozs7Ozs7Ozs7Ozs7OztVQzVDQSxJQUFBakYsTUFBQSxHQUFBbkIsT0FBQTtVQUNBLElBQUFxRyxLQUFBLEdBQUFyRyxPQUFBO1VBQ0EsSUFBQW9CLFFBQUEsR0FBQXBCLE9BQUE7VUFDQSxJQUFBcUIsUUFBQSxHQUFBckIsT0FBQTtVQUNBLElBQUFzQixNQUFBLEdBQUF0QixPQUFBO1VBQ0EsSUFBQXVCLFdBQUEsR0FBQXZCLE9BQUE7VUFHTSxTQUFVc0csU0FBU0EsQ0FBQztZQUFFNUUsS0FBSztZQUFFSSxLQUFLO1lBQUVDO1VBQVEsQ0FBRTtZQUNuRCxNQUFNLENBQUN3RSxNQUFNLEVBQUVDLFNBQVMsQ0FBQyxHQUFHLElBQUFyRixNQUFBLENBQUFVLFFBQVEsRUFBQztjQUFFNEUsS0FBSyxFQUFFLEVBQUU7Y0FBRUMsUUFBUSxFQUFFO1lBQUUsQ0FBRSxDQUFDO1lBQ2pFLE1BQU0sQ0FBQy9FLFFBQVEsRUFBRUMsV0FBVyxDQUFDLEdBQUcsSUFBQVQsTUFBQSxDQUFBVSxRQUFRLEVBQXlDLEVBQUUsQ0FBQztZQUVwRixNQUFNOEUsWUFBWSxHQUVkLEVBQUU7WUFFTixNQUFNO2NBQUVGLEtBQUs7Y0FBRUM7WUFBUSxDQUFFLEdBQUdILE1BQU07WUFDbEMsSUFBSSxDQUFDRSxLQUFLLElBQUksQ0FBQ0MsUUFBUSxFQUFFQyxZQUFZLENBQUNDLFFBQVEsR0FBRyxJQUFJO1lBRXJELE1BQU1DLFlBQVksR0FBR0EsQ0FBQztjQUFFaEIsYUFBYSxFQUFFUjtZQUFNLENBQUUsS0FBSTtjQUNsRCxNQUFNeUIsWUFBWSxHQUFHO2dCQUFFLEdBQUdQO2NBQU0sQ0FBRTtjQUNsQ08sWUFBWSxDQUFDekIsTUFBTSxDQUFDMEIsSUFBSSxDQUFDLEdBQUcxQixNQUFNLENBQUMyQixLQUFLO2NBQ3hDUixTQUFTLENBQUNNLFlBQVksQ0FBQztjQUN2Qi9FLFFBQVEsQ0FBQyxFQUFFLENBQUM7WUFDYixDQUFDO1lBRUQsTUFBTWtGLFFBQVEsR0FBRyxNQUFNaEYsS0FBSyxJQUFHO2NBQzlCTCxXQUFXLENBQUMsU0FBUyxDQUFDO2NBQ3RCLE1BQU07Z0JBQUU2RSxLQUFLO2dCQUFFQztjQUFRLENBQUUsR0FBR0gsTUFBTTtjQUVsQyxJQUFJO2dCQUNIdEUsS0FBSyxDQUFDaUYsY0FBYyxFQUFFO2dCQUN0QixNQUFNaEYsUUFBUSxHQUFHLE1BQU1iLFFBQUEsQ0FBQWMsY0FBYyxDQUFDQyxJQUFJLENBQUMrRSxLQUFLLENBQUNWLEtBQUssRUFBRUMsUUFBUSxDQUFDO2dCQUVqRSxJQUFJLENBQUN4RSxRQUFRLENBQUNrRixNQUFNLEVBQUU7a0JBQ3JCLE9BQU9yRixRQUFRLENBQUNHLFFBQVEsQ0FBQ0osS0FBSyxDQUFDOztnQkFFaEMwRSxTQUFTLENBQUM7a0JBQUVDLEtBQUssRUFBRSxFQUFFO2tCQUFFQyxRQUFRLEVBQUU7Z0JBQUUsQ0FBRSxDQUFDO2dCQUN0Q3RGLFFBQUEsQ0FBQW1CLE9BQU8sQ0FBQ0MsU0FBUyxDQUFDLEdBQUcsQ0FBQztnQkFDdEI7ZUFDQSxDQUFDLE9BQU9DLENBQUMsRUFBRTtnQkFDWFYsUUFBUSxDQUFDTCxLQUFLLENBQUMyRixVQUFVLENBQUM7ZUFDMUIsU0FBUztnQkFDVHpGLFdBQVcsQ0FBQyxFQUFFLENBQUM7O1lBRWpCLENBQUM7WUFFRCxPQUNDVCxNQUFBLENBQUFYLE9BQUEsQ0FBQXVDLGFBQUEsQ0FBQTVCLE1BQUEsQ0FBQVgsT0FBQSxDQUFBd0MsUUFBQSxRQUNDN0IsTUFBQSxDQUFBWCxPQUFBLENBQUF1QyxhQUFBLENBQUNzRCxLQUFBLENBQUFpQixJQUFJO2NBQUNMLFFBQVEsRUFBRUEsUUFBUTtjQUFFL0QsU0FBUyxFQUFDO1lBQStCLEdBQ2xFL0IsTUFBQSxDQUFBWCxPQUFBLENBQUF1QyxhQUFBLENBQUN6QixNQUFBLENBQUFnQyxLQUFLO2NBQUNWLE9BQU8sRUFBRWQsS0FBSztjQUFFeUIsSUFBSSxFQUFDO1lBQU8sRUFBRyxFQUN0Q3BDLE1BQUEsQ0FBQVgsT0FBQSxDQUFBdUMsYUFBQSxDQUFDc0QsS0FBQSxDQUFBa0IsS0FBSztjQUNMQyxXQUFXLEVBQUU5RixLQUFLLENBQUMrRixVQUFVO2NBQzdCbEUsSUFBSSxFQUFDLE1BQU07Y0FDWHdELElBQUksRUFBQyxPQUFPO2NBQ1pDLEtBQUssRUFBRVAsS0FBSztjQUNaaUIsUUFBUSxFQUFFYixZQUFZO2NBQ3RCYyxRQUFRO1lBQUEsRUFDUCxFQUNGeEcsTUFBQSxDQUFBWCxPQUFBLENBQUF1QyxhQUFBLENBQUNzRCxLQUFBLENBQUFrQixLQUFLO2NBQ0xDLFdBQVcsRUFBRTlGLEtBQUssQ0FBQ2tHLGFBQWE7Y0FDaENyRSxJQUFJLEVBQUMsVUFBVTtjQUNmd0QsSUFBSSxFQUFDLFVBQVU7Y0FDZkMsS0FBSyxFQUFFTixRQUFRO2NBQ2ZnQixRQUFRLEVBQUViLFlBQVk7Y0FDdEJjLFFBQVE7WUFBQSxFQUNQLEVBQ0Z4RyxNQUFBLENBQUFYLE9BQUEsQ0FBQXVDLGFBQUEsQ0FBQ3hCLFdBQUEsQ0FBQWlDLE1BQU07Y0FDTkQsSUFBSSxFQUFDLFFBQVE7Y0FDYkcsT0FBTyxFQUFDLFNBQVM7Y0FBQSxHQUNiaUQsWUFBWTtjQUNoQmhELE9BQU8sRUFBRXNELFFBQVE7Y0FDakJyRCxPQUFPLEVBQUVqQyxRQUFRLElBQUksU0FBUztjQUM5QmtDLEtBQUssRUFBRW5DLEtBQUssQ0FBQ21HO1lBQVksRUFDeEIsQ0FDSSxDQUNMO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDOUVBLElBQUExRyxNQUFBLEdBQUFuQixPQUFBO1VBQ0EsSUFBQXdCLE1BQUEsR0FBQXhCLE9BQUE7VUFDQSxJQUFBdUIsV0FBQSxHQUFBdkIsT0FBQTtVQUNNLFNBQVU4RSxZQUFZQSxDQUFDO1lBQUVwRDtVQUFLLENBQUU7WUFDckMsTUFBTW9HLElBQUksR0FBRztjQUNaQyxPQUFPLEVBQUUsMkNBQTJDO2NBQ3BEQyxTQUFTLEVBQUU7Z0JBQ1ZDLE9BQU8sRUFDTix5S0FBeUs7Z0JBQzFLQyxPQUFPLEVBQ047ZUFDRDtjQUNEQyxXQUFXLEVBQUU7Z0JBQ1pDLFFBQVEsRUFBRSwwQ0FBMEM7Z0JBQ3BEQyxNQUFNLEVBQUUsb0RBQW9EO2dCQUM1REMsU0FBUyxFQUFFLHNDQUFzQztnQkFDakRDLFFBQVEsRUFBRSx3REFBd0Q7Z0JBQ2xFQyxPQUFPLEVBQUU7O2FBRVY7WUFFRCxPQUNDckgsTUFBQSxDQUFBWCxPQUFBLENBQUF1QyxhQUFBO2NBQUtHLFNBQVMsRUFBQztZQUF3QixHQUN0Qy9CLE1BQUEsQ0FBQVgsT0FBQSxDQUFBdUMsYUFBQTtjQUFLRyxTQUFTLEVBQUM7WUFBMEIsR0FDeEMvQixNQUFBLENBQUFYLE9BQUEsQ0FBQXVDLGFBQUE7Y0FBR3FDLElBQUksRUFBRTBDLElBQUksQ0FBQ0MsT0FBTztjQUFFMUMsTUFBTSxFQUFDLFFBQVE7Y0FBQ25DLFNBQVMsRUFBQztZQUFtQixHQUNuRS9CLE1BQUEsQ0FBQVgsT0FBQSxDQUFBdUMsYUFBQSxDQUFDdkIsTUFBQSxDQUFBeUIsS0FBSztjQUFDRSxHQUFHLEVBQUMsbUNBQW1DO2NBQUM2QyxHQUFHLEVBQUM7WUFBUyxFQUFHLEVBQy9EN0UsTUFBQSxDQUFBWCxPQUFBLENBQUF1QyxhQUFBLGtCQUNDNUIsTUFBQSxDQUFBWCxPQUFBLENBQUF1QyxhQUFBO2NBQUlHLFNBQVMsRUFBQztZQUFjLEdBQUV4QixLQUFLLENBQUNzRyxTQUFTLENBQUNELE9BQU8sRUFBRTlCLEtBQUssQ0FBTSxFQUNsRTlFLE1BQUEsQ0FBQVgsT0FBQSxDQUFBdUMsYUFBQSxlQUFPckIsS0FBSyxDQUFDc0csU0FBUyxDQUFDRCxPQUFPLEVBQUVVLFdBQVcsQ0FBUSxDQUMxQyxDQUNQLEVBQ0p0SCxNQUFBLENBQUFYLE9BQUEsQ0FBQXVDLGFBQUEsaUJBQ0M1QixNQUFBLENBQUFYLE9BQUEsQ0FBQXVDLGFBQUEsYUFBS3JCLEtBQUssQ0FBQ3VFLEtBQUssQ0FBTSxDQUNkLENBQ0osRUFFTjlFLE1BQUEsQ0FBQVgsT0FBQSxDQUFBdUMsYUFBQTtjQUFTRyxTQUFTLEVBQUM7WUFBYyxHQUNoQy9CLE1BQUEsQ0FBQVgsT0FBQSxDQUFBdUMsYUFBQTtjQUFTRyxTQUFTLEVBQUM7WUFBYSxHQUMvQi9CLE1BQUEsQ0FBQVgsT0FBQSxDQUFBdUMsYUFBQSxDQUFDdkIsTUFBQSxDQUFBeUIsS0FBSztjQUFDRSxHQUFHLEVBQUMsZ0NBQWdDO2NBQUM2QyxHQUFHLEVBQUM7WUFBTyxFQUFHLEVBQzFEN0UsTUFBQSxDQUFBWCxPQUFBLENBQUF1QyxhQUFBLENBQUN4QixXQUFBLENBQUFtSCxXQUFXO2NBQUNDLEVBQUUsRUFBQztZQUFHLEdBQUVqSCxLQUFLLENBQUNrSCxRQUFRLENBQWUsQ0FDekMsRUFDVnpILE1BQUEsQ0FBQVgsT0FBQSxDQUFBdUMsYUFBQTtjQUFTRyxTQUFTLEVBQUM7WUFBYSxHQUMvQi9CLE1BQUEsQ0FBQVgsT0FBQSxDQUFBdUMsYUFBQSxDQUFDdkIsTUFBQSxDQUFBeUIsS0FBSztjQUFDRSxHQUFHLEVBQUMsbUNBQW1DO2NBQUM2QyxHQUFHLEVBQUM7WUFBTyxFQUFHLEVBQzdEN0UsTUFBQSxDQUFBWCxPQUFBLENBQUF1QyxhQUFBLENBQUN4QixXQUFBLENBQUFtSCxXQUFXO2NBQUNDLEVBQUUsRUFBQztZQUFHLEdBQUVqSCxLQUFLLENBQUNtSCxVQUFVLENBQWUsQ0FDM0MsQ0FDRCxFQUVWMUgsTUFBQSxDQUFBWCxPQUFBLENBQUF1QyxhQUFBO2NBQVNHLFNBQVMsRUFBQztZQUFxQixHQUN2Qy9CLE1BQUEsQ0FBQVgsT0FBQSxDQUFBdUMsYUFBQTtjQUFHcUMsSUFBSSxFQUFFMEMsSUFBSSxDQUFDRSxTQUFTLENBQUNDLE9BQU87Y0FBRTVDLE1BQU0sRUFBQztZQUFRLEdBQy9DbEUsTUFBQSxDQUFBWCxPQUFBLENBQUF1QyxhQUFBO2NBQUtHLFNBQVMsRUFBQztZQUErQixHQUM3Qy9CLE1BQUEsQ0FBQVgsT0FBQSxDQUFBdUMsYUFBQSxDQUFDdkIsTUFBQSxDQUFBeUIsS0FBSztjQUFDRSxHQUFHLEVBQUMsbUNBQW1DO2NBQUM2QyxHQUFHLEVBQUM7WUFBUyxFQUFHLEVBQy9EN0UsTUFBQSxDQUFBWCxPQUFBLENBQUF1QyxhQUFBLGVBQU9yQixLQUFLLENBQUNzRyxTQUFTLENBQUNjLFFBQVEsQ0FBUSxDQUNsQyxDQUNILEVBQ0ozSCxNQUFBLENBQUFYLE9BQUEsQ0FBQXVDLGFBQUE7Y0FBR3FDLElBQUksRUFBRTBDLElBQUksQ0FBQ0UsU0FBUyxDQUFDRSxPQUFPO2NBQUU3QyxNQUFNLEVBQUM7WUFBUSxHQUMvQ2xFLE1BQUEsQ0FBQVgsT0FBQSxDQUFBdUMsYUFBQTtjQUFLRyxTQUFTLEVBQUM7WUFBZ0MsR0FDOUMvQixNQUFBLENBQUFYLE9BQUEsQ0FBQXVDLGFBQUEsQ0FBQ3ZCLE1BQUEsQ0FBQXlCLEtBQUs7Y0FBQ0UsR0FBRyxFQUFDLG1DQUFtQztjQUFDNkMsR0FBRyxFQUFDO1lBQVMsRUFBRyxFQUMvRDdFLE1BQUEsQ0FBQVgsT0FBQSxDQUFBdUMsYUFBQSxlQUFPckIsS0FBSyxDQUFDc0csU0FBUyxDQUFDZSxRQUFRLENBQVEsQ0FDbEMsQ0FDSCxDQUNLLEVBRVY1SCxNQUFBLENBQUFYLE9BQUEsQ0FBQXVDLGFBQUE7Y0FBU0csU0FBUyxFQUFDO1lBQXlCLEdBQzNDL0IsTUFBQSxDQUFBWCxPQUFBLENBQUF1QyxhQUFBLGFBQUtyQixLQUFLLENBQUN5RyxXQUFXLENBQU0sRUFDNUJoSCxNQUFBLENBQUFYLE9BQUEsQ0FBQXVDLGFBQUE7Y0FBSUcsU0FBUyxFQUFDO1lBQW1CLEdBQ2hDL0IsTUFBQSxDQUFBWCxPQUFBLENBQUF1QyxhQUFBLGFBQ0M1QixNQUFBLENBQUFYLE9BQUEsQ0FBQXVDLGFBQUE7Y0FBR3NDLE1BQU0sRUFBQyxRQUFRO2NBQUNELElBQUksRUFBRTBDLElBQUksQ0FBQ0ssV0FBVyxDQUFDSTtZQUFRLEdBQ2pEcEgsTUFBQSxDQUFBWCxPQUFBLENBQUF1QyxhQUFBLENBQUN2QixNQUFBLENBQUF5QixLQUFLO2NBQUNFLEdBQUcsRUFBQyw2QkFBNkI7Y0FBQzZDLEdBQUcsRUFBQztZQUFpQixFQUFHLENBQzlELENBQ0EsRUFDTDdFLE1BQUEsQ0FBQVgsT0FBQSxDQUFBdUMsYUFBQSxhQUNDNUIsTUFBQSxDQUFBWCxPQUFBLENBQUF1QyxhQUFBO2NBQUdzQyxNQUFNLEVBQUMsUUFBUTtjQUFDRCxJQUFJLEVBQUUwQyxJQUFJLENBQUNLLFdBQVcsQ0FBQ0c7WUFBUyxHQUNsRG5ILE1BQUEsQ0FBQVgsT0FBQSxDQUFBdUMsYUFBQSxDQUFDdkIsTUFBQSxDQUFBeUIsS0FBSztjQUFDRSxHQUFHLEVBQUMsNkJBQTZCO2NBQUM2QyxHQUFHLEVBQUM7WUFBa0IsRUFBRyxDQUMvRCxDQUNBLEVBQ0w3RSxNQUFBLENBQUFYLE9BQUEsQ0FBQXVDLGFBQUEsYUFDQzVCLE1BQUEsQ0FBQVgsT0FBQSxDQUFBdUMsYUFBQTtjQUFHc0MsTUFBTSxFQUFDLFFBQVE7Y0FBQ0QsSUFBSSxFQUFFMEMsSUFBSSxDQUFDSyxXQUFXLENBQUNDO1lBQVEsR0FDakRqSCxNQUFBLENBQUFYLE9BQUEsQ0FBQXVDLGFBQUEsQ0FBQ3ZCLE1BQUEsQ0FBQXlCLEtBQUs7Y0FBQ0UsR0FBRyxFQUFDLG1DQUFtQztjQUFDNkMsR0FBRyxFQUFDO1lBQWlCLEVBQUcsQ0FDcEUsQ0FDQSxFQUNMN0UsTUFBQSxDQUFBWCxPQUFBLENBQUF1QyxhQUFBLGFBQ0M1QixNQUFBLENBQUFYLE9BQUEsQ0FBQXVDLGFBQUE7Y0FBR3NDLE1BQU0sRUFBQyxRQUFRO2NBQUNELElBQUksRUFBRTBDLElBQUksQ0FBQ0ssV0FBVyxDQUFDSztZQUFPLEdBQ2hEckgsTUFBQSxDQUFBWCxPQUFBLENBQUF1QyxhQUFBLENBQUN2QixNQUFBLENBQUF5QixLQUFLO2NBQUNFLEdBQUcsRUFBQyw2QkFBNkI7Y0FBQzZDLEdBQUcsRUFBQztZQUFnQixFQUFHLENBQzdELENBQ0EsQ0FDRCxDQUNJLENBQ0w7VUFFUiIsImlnbm9yZUxpc3QiOltdfQ==