System.register(["@beyond-js/widgets@1.1.1/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "react@18.2.0", "@beyond-js/kernel@0.1.9/routing", "@aimpact/chat-sdk@1.4.1/session", "pragmate-ui@1.0.0-beta.7/alert", "pragmate-ui@1.0.0-beta.7/components", "pragmate-ui@1.0.0-beta.7/image", "@beyond-js/react-18-widgets@1.1.2/hooks", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.3.1/components/ui", "@beyond-js/kernel@0.1.9/core", "pragmate-ui@1.0.0-beta.7/form"], function (_export, _context) {
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
    }, function (_aimpactAilearnApp031ComponentsUi) {
      dependency_12 = _aimpactAilearnApp031ComponentsUi;
    }, function (_beyondJsKernel019Core) {
      dependency_13 = _beyondJsKernel019Core;
    }, function (_pragmateUi100Beta7Form) {
      dependency_14 = _pragmateUi100Beta7Form;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", null], ["@aimpact/auth", null], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.1"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["@google-cloud/storage", "7.15.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.24.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.1"], ["@aimpact/ailearn-app", "0.3.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.3.1/auth-login",
          "multibundle": true
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['react', dependency_4], ['@beyond-js/kernel/routing', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['pragmate-ui/alert', dependency_7], ['pragmate-ui/components', dependency_8], ['pragmate-ui/image', dependency_9], ['@beyond-js/react-18-widgets/hooks', dependency_10], ['framer-motion', dependency_11], ['@aimpact/ailearn-app/components/ui', dependency_12], ['@beyond-js/kernel/core', dependency_13], ['pragmate-ui/form', dependency_14]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "auth-login-page",
        "vspecifier": "@aimpact/ailearn-app@0.3.1/auth-login.widget",
        "is": "page",
        "route": "/auth/login",
        "layout": "auth-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.3.1/auth-login.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 2241576019,
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
              console.log('show login page');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsIldpZGdldCIsIlZpZXciLCJzaG93IiwiY29uc29sZSIsImxvZyIsImV4cG9ydHMiLCJhbmltYXRpb25zIiwiZGVmYXVsdCIsImluaXRpYWwiLCJ5Iiwib3BhY2l0eSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJleGl0IiwiZmFkZSIsImZhZGVJblVwZmFkZU91dExlZnQiLCJ4IiwiX3JlYWN0IiwiX3JvdXRpbmciLCJfc2Vzc2lvbiIsIl9hbGVydCIsIl9jb21wb25lbnRzIiwiX2ltYWdlIiwiTG9naW5Db250YWluZXIiLCJ0ZXh0cyIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJ1c2VTdGF0ZSIsImVycm9yIiwic2V0RXJyb3IiLCJvbkdvb2dsZSIsImV2ZW50IiwicmVzcG9uc2UiLCJzZXNzaW9uV3JhcHBlciIsImF1dGgiLCJsb2dpbldpdGgiLCJFcnJvciIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJlIiwibWVzc2FnZSIsImVycm9ycyIsInVua25vd24iLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJJbWFnZSIsImNsYXNzTmFtZSIsInNyYyIsImxvZ2luVGl0bGUiLCJzdWJ0aXRsZSIsIkFsZXJ0IiwidHlwZSIsIkJ1dHRvbiIsImljb24iLCJ2YXJpYW50Iiwib25DbGljayIsImxvYWRpbmciLCJsYWJlbCIsImdvb2dsZVNpZ25JbkJ1dHRvbiIsIl9ob29rcyIsIl9iZXlvbmRfY29udGV4dCIsIl9mcmFtZXJNb3Rpb24iLCJfYW5pbWF0aW9ucyIsIl9jb250YWluZXIiLCJfbGFuZ3VhZ2VzIiwiX3ByZXNlbnRhdGlvbiIsInRleHRSZWFkeSIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwiU3Bpbm5lciIsImFjdGl2ZSIsIm1vdGlvbiIsImRpdiIsIlByZXNlbnRhdGlvbiIsInByZXNlbnRhdGlvbiIsIkxhbmd1YWdlcyIsImZvb3RlciIsImludHJvIiwiTGluayIsImhyZWYiLCJ0YXJnZXQiLCJ0ZXJtcyIsImNvbm5lY3RvciIsInByaXZhY3kiLCJfdWkiLCJfY29yZSIsImNoYW5nZUxhbmd1YWdlIiwibGFuZ3VhZ2VzIiwiY3VycmVudCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwibGFuZ3VhZ2UiLCJhbHQiLCJ0aXRsZSIsIlRoZW1lU3dpdGNoIiwiX2Zvcm0iLCJMb2dpbkZvcm0iLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJlbWFpbCIsInBhc3N3b3JkIiwiZm9ybURpc2FibGVkIiwiZGlzYWJsZWQiLCJoYW5kbGVDaGFuZ2UiLCJjdXJyZW50VmFsdWUiLCJuYW1lIiwidmFsdWUiLCJvblN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwibG9naW4iLCJzdGF0dXMiLCJlcnJvckxvZ2luIiwiRm9ybSIsIklucHV0IiwicGxhY2Vob2xkZXIiLCJlbWFpbExhYmVsIiwib25DaGFuZ2UiLCJyZXF1aXJlZCIsInBhc3N3b3JkTGFiZWwiLCJzaWduSW5CdXR0b24iLCJkYXRhIiwid2ViaW5hciIsInR1dG9yaWFscyIsInRlYWNoZXIiLCJzdHVkZW50Iiwic29jaWFsTWVkaWEiLCJsaW5rZWRpbiIsInRpa3RvayIsImluc3RhZ3JhbSIsImZhY2Vib29rIiwieW91dHViZSIsImRlc2NyaXB0aW9uIiwiSHRtbFdyYXBwZXIiLCJhcyIsImNvbnRlbnRzIiwiZXhwZXJpZW5jZSIsInRlYWNoZXJzIiwic3R1ZGVudHMiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy92aWV3cy9hbmltYXRpb25zLnRzeCIsIi90cy92aWV3cy9jb250YWluZXIudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9sYW5ndWFnZXMudHN4IiwiL3RzL3ZpZXdzL2xvZ2luLWZvcm0udHN4IiwiL3RzL3ZpZXdzL3ByZXNlbnRhdGlvbi50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51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