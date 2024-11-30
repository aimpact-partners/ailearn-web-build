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
        const dependencies = new Map([["@aimpact/chat-sdk", "1.3.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "1.0.0-beta.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@beyond-js/widgets", "1.1.0"], ["framer-motion", "11.3.21"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["socket.io-client", "4.7.3"], ["wavesurfer.js", "7.8.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.46"], ["@types/react-dom", "18.2.18"], ["@aimpact/auth", "0.0.1"], ["@aimpact/ailearn-app", "0.2.11"]]);
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
        hash: 2942671027,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsIldpZGdldCIsIlZpZXciLCJleHBvcnRzIiwiYW5pbWF0aW9ucyIsImRlZmF1bHQiLCJpbml0aWFsIiwieSIsIm9wYWNpdHkiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZXhpdCIsImZhZGUiLCJmYWRlSW5VcGZhZGVPdXRMZWZ0IiwieCIsIl9yZWFjdCIsIl9yb3V0aW5nIiwiX3Nlc3Npb24iLCJfYWxlcnQiLCJfY29tcG9uZW50cyIsIl9pbWFnZSIsIkxvZ2luQ29udGFpbmVyIiwidGV4dHMiLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwidXNlU3RhdGUiLCJlcnJvciIsInNldEVycm9yIiwib25Hb29nbGUiLCJldmVudCIsInJlc3BvbnNlIiwic2Vzc2lvbldyYXBwZXIiLCJzaWduSW5XaXRoR29vZ2xlIiwiRXJyb3IiLCJyb3V0aW5nIiwicHVzaFN0YXRlIiwiZSIsIm1lc3NhZ2UiLCJlcnJvcnMiLCJ1bmtub3duIiwiY29uc29sZSIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsIkltYWdlIiwiY2xhc3NOYW1lIiwic3JjIiwibG9naW5UaXRsZSIsInN1YnRpdGxlIiwiQWxlcnQiLCJ0eXBlIiwiQnV0dG9uIiwiaWNvbiIsInZhcmlhbnQiLCJvbkNsaWNrIiwibG9hZGluZyIsImxhYmVsIiwiZ29vZ2xlU2lnbkluQnV0dG9uIiwiX2hvb2tzIiwiX2JleW9uZF9jb250ZXh0IiwiX2NvbnRhaW5lciIsIl9sYW5ndWFnZXMiLCJfcHJlc2VudGF0aW9uIiwiX2ZyYW1lck1vdGlvbiIsIl9hbmltYXRpb25zIiwidGV4dFJlYWR5IiwidXNlVGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJTcGlubmVyIiwiYWN0aXZlIiwibW90aW9uIiwiZGl2IiwiUHJlc2VudGF0aW9uIiwicHJlc2VudGF0aW9uIiwiTGFuZ3VhZ2VzIiwiZm9vdGVyIiwiaW50cm8iLCJMaW5rIiwiaHJlZiIsInRhcmdldCIsInRlcm1zIiwiY29ubmVjdG9yIiwicHJpdmFjeSIsIl9jb3JlIiwiY2hhbmdlTGFuZ3VhZ2UiLCJsYW5ndWFnZXMiLCJjdXJyZW50IiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJsYW5ndWFnZSIsImFsdCIsInRpdGxlIiwiVGhlbWVTd2l0Y2giLCJ0ZXh0IiwidGhlbWUiLCJfZm9ybSIsIkxvZ2luRm9ybSIsInZhbHVlcyIsInNldFZhbHVlcyIsImVtYWlsIiwicGFzc3dvcmQiLCJmb3JtRGlzYWJsZWQiLCJkaXNhYmxlZCIsImhhbmRsZUNoYW5nZSIsImN1cnJlbnRWYWx1ZSIsIm5hbWUiLCJ2YWx1ZSIsIm9uU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJhdXRoIiwibG9naW4iLCJzdGF0dXMiLCJlcnJvckxvZ2luIiwiRm9ybSIsIklucHV0IiwicGxhY2Vob2xkZXIiLCJlbWFpbExhYmVsIiwib25DaGFuZ2UiLCJyZXF1aXJlZCIsInBhc3N3b3JkTGFiZWwiLCJzaWduSW5CdXR0b24iLCJkYXRhIiwid2ViaW5hciIsInR1dG9yaWFscyIsInRlYWNoZXIiLCJzdHVkZW50Iiwic29jaWFsTWVkaWEiLCJsaW5rZWRpbiIsInRpa3RvayIsImluc3RhZ3JhbSIsImZhY2Vib29rIiwieW91dHViZSIsImRlc2NyaXB0aW9uIiwiSHRtbFdyYXBwZXIiLCJhcyIsImNvbnRlbnRzIiwiZXhwZXJpZW5jZSIsInRlYWNoZXJzIiwic3R1ZGVudHMiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy92aWV3cy9hbmltYXRpb25zLnRzeCIsIi90cy92aWV3cy9jb250YWluZXIudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9sYW5ndWFnZXMudHN4IiwiL3RzL3ZpZXdzL2xvZ2luLWZvcm0udHN4IiwiL3RzL3ZpZXdzL3ByZXNlbnRhdGlvbi50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxs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QzVCL0csTUFBQSxDQUFBWCxPQUFBLENBQUFxQyxhQUFBO2NBQUlHLFNBQVMsRUFBQztZQUFtQixHQUNoQzdCLE1BQUEsQ0FBQVgsT0FBQSxDQUFBcUMsYUFBQSxhQUNDMUIsTUFBQSxDQUFBWCxPQUFBLENBQUFxQyxhQUFBO2NBQUdzQyxNQUFNLEVBQUMsUUFBUTtjQUFDRCxJQUFJLEVBQUUyQyxJQUFJLENBQUNLLFdBQVcsQ0FBQ0k7WUFBUSxHQUNqRG5ILE1BQUEsQ0FBQVgsT0FBQSxDQUFBcUMsYUFBQSxDQUFDckIsTUFBQSxDQUFBdUIsS0FBSztjQUFDRSxHQUFHLEVBQUMsNkJBQTZCO2NBQUM2QyxHQUFHLEVBQUM7WUFBaUIsRUFBRyxDQUM5RCxDQUNBLEVBQ0wzRSxNQUFBLENBQUFYLE9BQUEsQ0FBQXFDLGFBQUEsYUFDQzFCLE1BQUEsQ0FBQVgsT0FBQSxDQUFBcUMsYUFBQTtjQUFHc0MsTUFBTSxFQUFDLFFBQVE7Y0FBQ0QsSUFBSSxFQUFFMkMsSUFBSSxDQUFDSyxXQUFXLENBQUNHO1lBQVMsR0FDbERsSCxNQUFBLENBQUFYLE9BQUEsQ0FBQXFDLGFBQUEsQ0FBQ3JCLE1BQUEsQ0FBQXVCLEtBQUs7Y0FBQ0UsR0FBRyxFQUFDLDZCQUE2QjtjQUFDNkMsR0FBRyxFQUFDO1lBQWtCLEVBQUcsQ0FDL0QsQ0FDQSxFQUNMM0UsTUFBQSxDQUFBWCxPQUFBLENBQUFxQyxhQUFBLGFBQ0MxQixNQUFBLENBQUFYLE9BQUEsQ0FBQXFDLGFBQUE7Y0FBR3NDLE1BQU0sRUFBQyxRQUFRO2NBQUNELElBQUksRUFBRTJDLElBQUksQ0FBQ0ssV0FBVyxDQUFDQztZQUFRLEdBQ2pEaEgsTUFBQSxDQUFBWCxPQUFBLENBQUFxQyxhQUFBLENBQUNyQixNQUFBLENBQUF1QixLQUFLO2NBQUNFLEdBQUcsRUFBQyxtQ0FBbUM7Y0FBQzZDLEdBQUcsRUFBQztZQUFpQixFQUFHLENBQ3BFLENBQ0EsRUFDTDNFLE1BQUEsQ0FBQVgsT0FBQSxDQUFBcUMsYUFBQSxhQUNDMUIsTUFBQSxDQUFBWCxPQUFBLENBQUFxQyxhQUFBO2NBQUdzQyxNQUFNLEVBQUMsUUFBUTtjQUFDRCxJQUFJLEVBQUUyQyxJQUFJLENBQUNLLFdBQVcsQ0FBQ0s7WUFBTyxHQUNoRHBILE1BQUEsQ0FBQVgsT0FBQSxDQUFBcUMsYUFBQSxDQUFDckIsTUFBQSxDQUFBdUIsS0FBSztjQUFDRSxHQUFHLEVBQUMsNkJBQTZCO2NBQUM2QyxHQUFHLEVBQUM7WUFBZ0IsRUFBRyxDQUM3RCxDQUNBLENBQ0QsQ0FDSSxDQUNMO1VBRVIiLCJpZ25vcmVMaXN0IjpbXX0=