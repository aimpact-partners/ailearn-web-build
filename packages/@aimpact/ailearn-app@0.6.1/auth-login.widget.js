System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "@beyond-js/react-18-widgets@1.1.4/page", "@aimpact/ailearn-app@0.6.1/stores/base", "react@18.3.1", "@beyond-js/kernel@0.1.12/routing", "@aimpact/chat-sdk@1.5.5/session", "pragmate-ui@1.0.8/alert", "pragmate-ui@1.0.8/components", "pragmate-ui@1.0.8/image", "@aimpact/ailearn-app@0.6.1/model/wrapper", "@aimpact/ailearn-app@0.6.1/shared/hooks", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.6.1/components/ui", "@aimpact/ailearn-app@0.6.1/components/icons", "@beyond-js/kernel@0.1.12/core", "pragmate-ui@1.0.8/form"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, bimport, __Bundle, __pkg, ims, Controller, View, Languages, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    View: void 0,
    Languages: void 0
  });
  return {
    setters: [function (_beyondJsWidgets112Render) {
      dependency_0 = _beyondJsWidgets112Render;
    }, function (_beyondJsKernel0112Bundle) {
      dependency_1 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsKernel0112Styles) {
      dependency_2 = _beyondJsKernel0112Styles;
    }, function (_beyondJsReact18Widgets114Page) {
      dependency_3 = _beyondJsReact18Widgets114Page;
    }, function (_aimpactAilearnApp061StoresBase) {
      dependency_4 = _aimpactAilearnApp061StoresBase;
    }, function (_react2) {
      dependency_5 = _react2;
    }, function (_beyondJsKernel0112Routing) {
      dependency_6 = _beyondJsKernel0112Routing;
    }, function (_aimpactChatSdk155Session) {
      dependency_7 = _aimpactChatSdk155Session;
    }, function (_pragmateUi108Alert) {
      dependency_8 = _pragmateUi108Alert;
    }, function (_pragmateUi108Components) {
      dependency_9 = _pragmateUi108Components;
    }, function (_pragmateUi108Image) {
      dependency_10 = _pragmateUi108Image;
    }, function (_aimpactAilearnApp061ModelWrapper) {
      dependency_11 = _aimpactAilearnApp061ModelWrapper;
    }, function (_aimpactAilearnApp061SharedHooks) {
      dependency_12 = _aimpactAilearnApp061SharedHooks;
    }, function (_framerMotion2) {
      dependency_13 = _framerMotion2;
    }, function (_aimpactAilearnApp061ComponentsUi) {
      dependency_14 = _aimpactAilearnApp061ComponentsUi;
    }, function (_aimpactAilearnApp061ComponentsIcons) {
      dependency_15 = _aimpactAilearnApp061ComponentsIcons;
    }, function (_beyondJsKernel0112Core) {
      dependency_16 = _beyondJsKernel0112Core;
    }, function (_pragmateUi108Form) {
      dependency_17 = _pragmateUi108Form;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.9"], ["@beyond-js/reactive", "2.1.1"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["@radix-ui/react-accordion", "1.2.12"], ["@radix-ui/react-collapsible", "1.1.12"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-select", "2.2.6"], ["@radix-ui/react-separator", "1.1.7"], ["@tiptap/extension-blockquote", "3.2.0"], ["@tiptap/extension-code-block", "3.2.0"], ["@tiptap/extension-horizontal-rule", "3.2.0"], ["@tiptap/extension-task-item", "3.2.0"], ["@tiptap/extension-task-list", "3.2.0"], ["@tiptap/extension-underline", "3.2.0"], ["@tiptap/pm", "3.2.0"], ["@tiptap/react", "3.2.0"], ["@tiptap/starter-kit", "3.2.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.4.0"], ["react-virtuoso", "4.14.0"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["turndown", "7.2.0"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/node", "22.13.16"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.6.1"], ["@aimpact/rvd", "0.6.2"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.6.1/auth-login",
          "multibundle": true
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/stores/base', dependency_4], ['react', dependency_5], ['@beyond-js/kernel/routing', dependency_6], ['@aimpact/chat-sdk/session', dependency_7], ['pragmate-ui/alert', dependency_8], ['pragmate-ui/components', dependency_9], ['pragmate-ui/image', dependency_10], ['@aimpact/ailearn-app/model/wrapper', dependency_11], ['@aimpact/ailearn-app/shared/hooks', dependency_12], ['framer-motion', dependency_13], ['@aimpact/ailearn-app/components/ui', dependency_14], ['@aimpact/ailearn-app/components/icons', dependency_15], ['@beyond-js/kernel/core', dependency_16], ['pragmate-ui/form', dependency_17]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "auth-login-page",
        "vspecifier": "@aimpact/ailearn-app@0.6.1/auth-login.widget",
        "is": "page",
        "route": "/auth/login",
        "layout": "auth-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.6.1/auth-login.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 3496937295,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _page = require("@beyond-js/react-18-widgets/page");
          var _views = require("./views");
          var _store = require("./store");
          /*bundle*/
          class Controller extends _page.PageReactWidgetController {
            createStore(language) {
              return new _store.StoreManager();
            }
            get Widget() {
              return _views.View;
            }
            show() {
              // console.log('show login page');
              // console.log('show login page');
            }
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 2348684177,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _base = require("@aimpact/ailearn-app/stores/base");
          var _beyond_context = require("beyond_context");
          class StoreManager extends _base.BaseStoreManager {
            get socialMedia() {
              return {
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
            }
            constructor() {
              super(_beyond_context.module.specifier);
            }
          }
          exports.StoreManager = StoreManager;
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
        hash: 2791689863,
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
          var _wrapper = require("@aimpact/ailearn-app/model/wrapper");
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
              className: "login-logo",
              src: _wrapper.settings.APP_LOGO
            }), _react.default.createElement("header", null, _react.default.createElement("h3", {
              className: "form__title "
            }, texts.loginTitle), _react.default.createElement("span", null, texts.subtitle)), _react.default.createElement(_alert.Alert, {
              message: error,
              type: "error"
            }), _react.default.createElement("div", {
              className: "buttons__container flex flex-center"
            }, _react.default.createElement(_components.Button, {
              icon: "google",
              variant: "primary",
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
        hash: 2768214096,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _hooks = require("@aimpact/ailearn-app/shared/hooks");
          var _wrapper = require("@aimpact/ailearn-app/model/wrapper");
          var _framerMotion = require("framer-motion");
          var _components = require("pragmate-ui/components");
          var _react = require("react");
          var _animations = require("./animations");
          var _container = require("./container");
          var _languages = require("./languages");
          var _presentation = require("./presentation/presentation");
          /*bundle*/
          function View({
            store
          }) {
            (0, _hooks.useStore)(store);
            if (!store.ready) return _react.default.createElement(_components.Spinner, {
              active: true,
              type: "primary"
            });
            const texts = store.texts;
            return _react.default.createElement(_framerMotion.motion.div, {
              ..._animations.animations.fade,
              className: "login-page-container"
            }, _react.default.createElement(_presentation.Presentation, {
              store: store
            }), _react.default.createElement("section", {
              className: "second-panel"
            }, _react.default.createElement("div", {
              className: "login-container"
            }, _react.default.createElement("div", {
              className: "login__header"
            }, _react.default.createElement(_languages.Languages, {
              texts: texts
            })), _react.default.createElement("div", {
              className: "login__content"
            }, _react.default.createElement("div", {
              className: "login-form__container"
            }, _react.default.createElement(_container.LoginContainer, {
              texts: texts
            })))), _react.default.createElement("footer", {
              className: "terms__footer"
            }, _react.default.createElement("span", null, texts.footer.intro), _react.default.createElement(_components.Link, {
              href: "/terms-and-conditions",
              target: "_blank"
            }, texts.footer.terms), ' ', texts.footer.connector, ' ', _react.default.createElement(_components.Link, {
              href: "/privacy",
              target: "_blank"
            }, texts.footer.privacy)), _react.default.createElement("div", {
              className: "app__version"
            }, texts.version, ": ", _wrapper.settings.version)));
          }
        }
      });

      /*********************************
      INTERNAL MODULE: ./views/languages
      *********************************/

      ims.set('./views/languages', {
        hash: 1567082454,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Languages = Languages;
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _core = require("@beyond-js/kernel/core");
          var _react = require("react");
          /*bundle*/
          function Languages({
            texts
          }) {
            const changeLanguage = event => {
              _core.languages.current = event.currentTarget.dataset.language;
            };
            // Get supported languages from the languages object
            const supportedLanguages = [..._core.languages.supported.keys()];
            return _react.default.createElement("ul", {
              className: "language-selection"
            }, supportedLanguages.map(language => _react.default.createElement("li", {
              key: language
            }, _react.default.createElement(_icons.AppIcon, {
              onClick: changeLanguage,
              "data-language": language,
              name: `languages-${language}`,
              title: `${language} language`,
              className: "language-icon icon-circle"
            }))));
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./views/login-form
      **********************************/

      ims.set('./views/login-form', {
        hash: 3550054510,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LoginForm = LoginForm;
          var _session = require("@aimpact/chat-sdk/session");
          var _routing = require("@beyond-js/kernel/routing");
          var _alert = require("pragmate-ui/alert");
          var _components = require("pragmate-ui/components");
          var _form = require("pragmate-ui/form");
          var _react = require("react");
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
              className: "login-form-general__container"
            }, _react.default.createElement(_alert.Alert, {
              message: error,
              type: "error"
            }), _react.default.createElement(_form.Input, {
              placeholder: texts.emailLabel,
              type: "text",
              name: "email",
              value: email,
              onChange: handleChange,
              required: true
            }), _react.default.createElement(_form.Input, {
              placeholder: texts.passwordLabel,
              type: "password",
              name: "password",
              value: password,
              onChange: handleChange,
              required: true
            }), _react.default.createElement(_components.Button, {
              type: "submit",
              variant: "primary",
              ...formDisabled,
              onClick: onSubmit,
              loading: fetching == 'default',
              label: texts.signInButton
            })));
          }
        }
      });

      /*************************************************
      INTERNAL MODULE: ./views/presentation/presentation
      *************************************************/

      ims.set('./views/presentation/presentation', {
        hash: 2210359568,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Presentation = Presentation;
          var _react = require("react");
          var _image = require("pragmate-ui/image");
          var _components = require("pragmate-ui/components");
          var _rrss = require("./rrss");
          var _wrapper = require("@aimpact/ailearn-app/model/wrapper");
          function Presentation({
            store
          }) {
            const data = store.socialMedia;
            const texts = store.texts.presentation;
            return _react.default.createElement("div", {
              className: "presentation-container"
            }, _react.default.createElement("div", {
              className: "presentation-header__top"
            }, _wrapper.settings.tutorials ? _react.default.createElement("a", {
              href: data.webinar,
              target: "_blank",
              className: "webinar-container"
            }, _react.default.createElement(_image.Image, {
              src: "/assets/images/login/webinar.webp",
              alt: "teacher"
            }), _react.default.createElement("section", null, _react.default.createElement("h6", {
              className: "primary-text"
            }, texts.tutorials.webinar?.title), _react.default.createElement("span", null, texts.tutorials.webinar?.description))) : null, _react.default.createElement("header", null, _react.default.createElement("h3", null, texts.title))), _react.default.createElement("section", {
              className: "under__panel"
            }, _react.default.createElement("section", {
              className: "app-feature"
            }, _react.default.createElement(_image.Image, {
              src: "/assets/images/login/book.webp",
              alt: "login"
            }), _react.default.createElement(_components.HtmlWrapper, {
              as: "p"
            }, texts.contents)), _react.default.createElement("section", {
              className: "app-feature"
            }, _react.default.createElement(_image.Image, {
              src: "/assets/images/login/control.webp",
              alt: "login"
            }), _react.default.createElement(_components.HtmlWrapper, {
              as: "p"
            }, texts.experience))), _wrapper.settings.tutorials ? _react.default.createElement("section", {
              className: "tutorials-container"
            }, _react.default.createElement("a", {
              href: data.tutorials.teacher,
              target: "_blank"
            }, _react.default.createElement("div", {
              className: "tutorial tutorial--left-image"
            }, _react.default.createElement(_image.Image, {
              src: "/assets/images/login/teacher.webp",
              alt: "teacher"
            }), _react.default.createElement("span", null, texts.tutorials.teachers))), _react.default.createElement("a", {
              href: data.tutorials.student,
              target: "_blank"
            }, _react.default.createElement("div", {
              className: "tutorial tutorial--right-image"
            }, _react.default.createElement(_image.Image, {
              src: "/assets/images/login/student.webp",
              alt: "teacher"
            }), _react.default.createElement("span", null, texts.tutorials.students)))) : null, _react.default.createElement(_rrss.RRss, {
              store: store
            }));
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./views/presentation/rrss
      *****************************************/

      ims.set('./views/presentation/rrss', {
        hash: 2081365898,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RRss = RRss;
          var _react = require("react");
          var _image = require("pragmate-ui/image");
          function RRss({
            store
          }) {
            const data = store.socialMedia;
            const texts = store.texts.presentation;
            return _react.default.createElement("section", {
              className: "social-media__container"
            }, _react.default.createElement("span", {
              className: "p3"
            }, texts.socialMedia), _react.default.createElement("ul", {
              className: "social-media-list"
            }, _react.default.createElement("li", null, _react.default.createElement("a", {
              target: "_blank",
              href: data.socialMedia.facebook
            }, _react.default.createElement(_image.Image, {
              src: "/assets/images/rrss/fb.webp",
              alt: "RVD in Facebook"
            }))), _react.default.createElement("li", null, _react.default.createElement("a", {
              target: "_blank",
              href: data.socialMedia.instagram
            }, _react.default.createElement(_image.Image, {
              src: "/assets/images/rrss/ig.webp",
              alt: "RVD in Instagram"
            }))), _react.default.createElement("li", null, _react.default.createElement("a", {
              target: "_blank",
              href: data.socialMedia.linkedin
            }, _react.default.createElement(_image.Image, {
              src: "/assets/images/rrss/linkedin.webp",
              alt: "RVD in LinkedIn"
            }))), _react.default.createElement("li", null, _react.default.createElement("a", {
              target: "_blank",
              href: data.socialMedia.youtube
            }, _react.default.createElement(_image.Image, {
              src: "/assets/images/rrss/yt.webp",
              alt: "RVD in Youtube"
            })))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsImNyZWF0ZVN0b3JlIiwibGFuZ3VhZ2UiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImV4cG9ydHMiLCJfYmFzZSIsIl9iZXlvbmRfY29udGV4dCIsIkJhc2VTdG9yZU1hbmFnZXIiLCJzb2NpYWxNZWRpYSIsIndlYmluYXIiLCJ0dXRvcmlhbHMiLCJ0ZWFjaGVyIiwic3R1ZGVudCIsImxpbmtlZGluIiwidGlrdG9rIiwiaW5zdGFncmFtIiwiZmFjZWJvb2siLCJ5b3V0dWJlIiwiY29uc3RydWN0b3IiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJhbmltYXRpb25zIiwiZGVmYXVsdCIsImluaXRpYWwiLCJ5Iiwib3BhY2l0eSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJleGl0IiwiZmFkZSIsImZhZGVJblVwZmFkZU91dExlZnQiLCJ4IiwiX3JlYWN0IiwiX3JvdXRpbmciLCJfc2Vzc2lvbiIsIl9hbGVydCIsIl9jb21wb25lbnRzIiwiX2ltYWdlIiwiX3dyYXBwZXIiLCJMb2dpbkNvbnRhaW5lciIsInRleHRzIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsInVzZVN0YXRlIiwiZXJyb3IiLCJzZXRFcnJvciIsIm9uR29vZ2xlIiwiZXZlbnQiLCJyZXNwb25zZSIsInNlc3Npb25XcmFwcGVyIiwiYXV0aCIsImxvZ2luV2l0aCIsIkVycm9yIiwicm91dGluZyIsInB1c2hTdGF0ZSIsImUiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSIsImVycm9ycyIsInVua25vd24iLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJJbWFnZSIsImNsYXNzTmFtZSIsInNyYyIsInNldHRpbmdzIiwiQVBQX0xPR08iLCJsb2dpblRpdGxlIiwic3VidGl0bGUiLCJBbGVydCIsInR5cGUiLCJCdXR0b24iLCJpY29uIiwidmFyaWFudCIsIm9uQ2xpY2siLCJsb2FkaW5nIiwibGFiZWwiLCJnb29nbGVTaWduSW5CdXR0b24iLCJfaG9va3MiLCJfZnJhbWVyTW90aW9uIiwiX2FuaW1hdGlvbnMiLCJfY29udGFpbmVyIiwiX2xhbmd1YWdlcyIsIl9wcmVzZW50YXRpb24iLCJzdG9yZSIsInVzZVN0b3JlIiwicmVhZHkiLCJTcGlubmVyIiwiYWN0aXZlIiwibW90aW9uIiwiZGl2IiwiUHJlc2VudGF0aW9uIiwiTGFuZ3VhZ2VzIiwiZm9vdGVyIiwiaW50cm8iLCJMaW5rIiwiaHJlZiIsInRhcmdldCIsInRlcm1zIiwiY29ubmVjdG9yIiwicHJpdmFjeSIsInZlcnNpb24iLCJfaWNvbnMiLCJfY29yZSIsImNoYW5nZUxhbmd1YWdlIiwibGFuZ3VhZ2VzIiwiY3VycmVudCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0Iiwic3VwcG9ydGVkTGFuZ3VhZ2VzIiwic3VwcG9ydGVkIiwia2V5cyIsIm1hcCIsImtleSIsIkFwcEljb24iLCJuYW1lIiwidGl0bGUiLCJfZm9ybSIsIkxvZ2luRm9ybSIsInZhbHVlcyIsInNldFZhbHVlcyIsImVtYWlsIiwicGFzc3dvcmQiLCJmb3JtRGlzYWJsZWQiLCJkaXNhYmxlZCIsImhhbmRsZUNoYW5nZSIsImN1cnJlbnRWYWx1ZSIsInZhbHVlIiwib25TdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImxvZ2luIiwic3RhdHVzIiwiZXJyb3JMb2dpbiIsIkZvcm0iLCJJbnB1dCIsInBsYWNlaG9sZGVyIiwiZW1haWxMYWJlbCIsIm9uQ2hhbmdlIiwicmVxdWlyZWQiLCJwYXNzd29yZExhYmVsIiwic2lnbkluQnV0dG9uIiwiX3Jyc3MiLCJkYXRhIiwicHJlc2VudGF0aW9uIiwiYWx0IiwiZGVzY3JpcHRpb24iLCJIdG1sV3JhcHBlciIsImFzIiwiY29udGVudHMiLCJleHBlcmllbmNlIiwidGVhY2hlcnMiLCJzdHVkZW50cyIsIlJSc3MiXSwic291cmNlcyI6WyIvL3RzL2NvbnRyb2xsZXIudHMiLCIvL3RzL3N0b3JlLnRzIiwiLy90cy92aWV3cy9hbmltYXRpb25zLnRzeCIsIi8vdHMvdmlld3MvY29udGFpbmVyLnRzeCIsIi8vdHMvdmlld3MvaW5kZXgudHN4IiwiLy90cy92aWV3cy9sYW5ndWFnZXMudHN4IiwiLy90cy92aWV3cy9sb2dpbi1mb3JtLnRzeCIsIi8vdHMvdmlld3MvcHJlc2VudGF0aW9uL3ByZXNlbnRhdGlvbi50c3giLCIvL3RzL3ZpZXdzL3ByZXNlbnRhdGlvbi9ycnNzLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFFQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDakRDLFdBQVdBLENBQUNDLFFBQWlCO2NBQzVCLE9BQU8sSUFBSUosTUFBQSxDQUFBSyxZQUFZLEVBQUU7WUFDMUI7WUFDQSxJQUFJQyxNQUFNQSxDQUFBO2NBQ1QsT0FBT1AsTUFBQSxDQUFBUSxJQUFJO1lBQ1o7WUFFQUMsSUFBSUEsQ0FBQTtjQUNIO2NBQ0E7WUFBQTs7VUFFREMsT0FBQSxDQUFBUixVQUFBLEdBQUFBLFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbEJELElBQUFTLEtBQUEsR0FBQVosT0FBQTtVQUNBLElBQUFhLGVBQUEsR0FBQWIsT0FBQTtVQUVNLE1BQU9PLFlBQWEsU0FBUUssS0FBQSxDQUFBRSxnQkFBOEI7WUFDL0QsSUFBSUMsV0FBV0EsQ0FBQTtjQUNkLE9BQU87Z0JBQ05DLE9BQU8sRUFBRSwyQ0FBMkM7Z0JBQ3BEQyxTQUFTLEVBQUU7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