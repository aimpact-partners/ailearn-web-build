System.register(["@beyond-js/widgets@1.1.1/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.3/page", "react@18.2.0", "@beyond-js/kernel@0.1.9/routing", "@aimpact/chat-sdk@1.4.1/session", "pragmate-ui@1.0.0-beta.7/alert", "pragmate-ui@1.0.0-beta.7/components", "pragmate-ui@1.0.0-beta.7/image", "@beyond-js/react-18-widgets@1.1.3/hooks", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.3.26/components/ui", "@beyond-js/kernel@0.1.9/core", "pragmate-ui@1.0.0-beta.7/form"], function (_export, _context) {
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
    }, function (_beyondJsReact18Widgets113Page) {
      dependency_3 = _beyondJsReact18Widgets113Page;
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
    }, function (_beyondJsReact18Widgets113Hooks) {
      dependency_10 = _beyondJsReact18Widgets113Hooks;
    }, function (_framerMotion2) {
      dependency_11 = _framerMotion2;
    }, function (_aimpactAilearnApp0326ComponentsUi) {
      dependency_12 = _aimpactAilearnApp0326ComponentsUi;
    }, function (_beyondJsKernel019Core) {
      dependency_13 = _beyondJsKernel019Core;
    }, function (_pragmateUi100Beta7Form) {
      dependency_14 = _pragmateUi100Beta7Form;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.1.0"], ["@aimpact/ailearn-api", null], ["@aimpact/auth", null], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.1"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.3"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["@google-cloud/storage", "7.15.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.24.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.26"], ["@aimpact/ailearn-app", "0.3.26"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.3.26/auth-login",
          "multibundle": true
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['react', dependency_4], ['@beyond-js/kernel/routing', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['pragmate-ui/alert', dependency_7], ['pragmate-ui/components', dependency_8], ['pragmate-ui/image', dependency_9], ['@beyond-js/react-18-widgets/hooks', dependency_10], ['framer-motion', dependency_11], ['@aimpact/ailearn-app/components/ui', dependency_12], ['@beyond-js/kernel/core', dependency_13], ['pragmate-ui/form', dependency_14]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "auth-login-page",
        "vspecifier": "@aimpact/ailearn-app@0.3.26/auth-login.widget",
        "is": "page",
        "route": "/auth/login",
        "layout": "auth-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.3.26/auth-login.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 2754496141,
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
            show() {
              // console.log('show login page');
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
        hash: 2298648499,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Languages = Languages;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _core = require("@beyond-js/kernel/core");
          var _image = require("pragmate-ui/image");
          var _react = require("react");
          /*bundle*/
          function Languages({
            texts
          }) {
            const changeLanguage = event => {
              _core.languages.current = event.currentTarget.dataset.language;
            };
            return _react.default.createElement("ul", {
              className: "language-selection"
            }, _react.default.createElement("li", null, _react.default.createElement(_image.Image, {
              onClick: changeLanguage,
              "data-language": "en",
              src: "/assets/english.png",
              alt: "english language",
              title: "english language"
            })), _react.default.createElement("li", null, _react.default.createElement(_image.Image, {
              onClick: changeLanguage,
              "data-language": "es",
              src: "/assets/spanish.png",
              alt: "spanish language",
              title: "ver en Espa\u00F1ol"
            })), _react.default.createElement("li", null, _react.default.createElement(_image.Image, {
              onClick: changeLanguage,
              "data-language": "de",
              src: "/assets/german.png",
              alt: "german language",
              title: "auf Deutsch anzeigen"
            })), _react.default.createElement("li", null, _react.default.createElement(_ui.ThemeSwitch, null)));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsIldpZGdldCIsIlZpZXciLCJzaG93IiwiZXhwb3J0cyIsImFuaW1hdGlvbnMiLCJkZWZhdWx0IiwiaW5pdGlhbCIsInkiLCJvcGFjaXR5IiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImV4aXQiLCJmYWRlIiwiZmFkZUluVXBmYWRlT3V0TGVmdCIsIngiLCJfcmVhY3QiLCJfcm91dGluZyIsIl9zZXNzaW9uIiwiX2FsZXJ0IiwiX2NvbXBvbmVudHMiLCJfaW1hZ2UiLCJMb2dpbkNvbnRhaW5lciIsInRleHRzIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsInVzZVN0YXRlIiwiZXJyb3IiLCJzZXRFcnJvciIsIm9uR29vZ2xlIiwiZXZlbnQiLCJyZXNwb25zZSIsInNlc3Npb25XcmFwcGVyIiwiYXV0aCIsImxvZ2luV2l0aCIsIkVycm9yIiwicm91dGluZyIsInB1c2hTdGF0ZSIsImUiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSIsImVycm9ycyIsInVua25vd24iLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJJbWFnZSIsImNsYXNzTmFtZSIsInNyYyIsImxvZ2luVGl0bGUiLCJzdWJ0aXRsZSIsIkFsZXJ0IiwidHlwZSIsIkJ1dHRvbiIsImljb24iLCJ2YXJpYW50Iiwib25DbGljayIsImxvYWRpbmciLCJsYWJlbCIsImdvb2dsZVNpZ25JbkJ1dHRvbiIsIl9ob29rcyIsIl9iZXlvbmRfY29udGV4dCIsIl9mcmFtZXJNb3Rpb24iLCJfYW5pbWF0aW9ucyIsIl9jb250YWluZXIiLCJfbGFuZ3VhZ2VzIiwiX3ByZXNlbnRhdGlvbiIsInRleHRSZWFkeSIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwiU3Bpbm5lciIsImFjdGl2ZSIsIm1vdGlvbiIsImRpdiIsIlByZXNlbnRhdGlvbiIsInByZXNlbnRhdGlvbiIsIkxhbmd1YWdlcyIsImZvb3RlciIsImludHJvIiwiTGluayIsImhyZWYiLCJ0YXJnZXQiLCJ0ZXJtcyIsImNvbm5lY3RvciIsInByaXZhY3kiLCJfdWkiLCJfY29yZSIsImNoYW5nZUxhbmd1YWdlIiwibGFuZ3VhZ2VzIiwiY3VycmVudCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwibGFuZ3VhZ2UiLCJhbHQiLCJ0aXRsZSIsIlRoZW1lU3dpdGNoIiwiX2Zvcm0iLCJMb2dpbkZvcm0iLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJlbWFpbCIsInBhc3N3b3JkIiwiZm9ybURpc2FibGVkIiwiZGlzYWJsZWQiLCJoYW5kbGVDaGFuZ2UiLCJjdXJyZW50VmFsdWUiLCJuYW1lIiwidmFsdWUiLCJvblN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwibG9naW4iLCJzdGF0dXMiLCJlcnJvckxvZ2luIiwiRm9ybSIsIklucHV0IiwicGxhY2Vob2xkZXIiLCJlbWFpbExhYmVsIiwib25DaGFuZ2UiLCJyZXF1aXJlZCIsInBhc3N3b3JkTGFiZWwiLCJzaWduSW5CdXR0b24iLCJkYXRhIiwid2ViaW5hciIsInR1dG9yaWFscyIsInRlYWNoZXIiLCJzdHVkZW50Iiwic29jaWFsTWVkaWEiLCJsaW5rZWRpbiIsInRpa3RvayIsImluc3RhZ3JhbSIsImZhY2Vib29rIiwieW91dHViZSIsImRlc2NyaXB0aW9uIiwiSHRtbFdyYXBwZXIiLCJhcyIsImNvbnRlbnRzIiwiZXhwZXJpZW5jZSIsInRlYWNoZXJzIiwic3R1ZGVudHMiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy92aWV3cy9hbmltYXRpb25zLnRzeCIsIi90cy92aWV3cy9jb250YWluZXIudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9sYW5ndWFnZXMudHN4IiwiL3RzL3ZpZXdzL2xvZ2luLWZvcm0udHN4IiwiL3RzL3ZpZXdzL3ByZXNlbnRhdGlvbi50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51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