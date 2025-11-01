System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.14/bundle", "@beyond-js/kernel@0.1.14/styles", "@beyond-js/react-18-widgets@1.1.8/page", "@aimpact/ailearn-app@0.7.0/stores/base", "@beyond-js/kernel@0.1.14/core", "react@18.3.1", "@beyond-js/kernel@0.1.14/routing", "@aimpact/chat-sdk@1.5.5/session", "pragmate-ui@1.0.8/alert", "pragmate-ui@1.0.8/components", "pragmate-ui@1.0.8/image", "@aimpact/ailearn-app@0.7.0/model/wrapper", "@beyond-js/react-18-widgets@1.1.8/hooks", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.7.0/components/ui", "@aimpact/ailearn-app@0.7.0/components/icons", "pragmate-ui@1.0.8/form"], function (_export, _context) {
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
    }, function (_beyondJsKernel0114Bundle) {
      dependency_1 = _beyondJsKernel0114Bundle;
    }, function (_beyondJsKernel0114Styles) {
      dependency_2 = _beyondJsKernel0114Styles;
    }, function (_beyondJsReact18Widgets118Page) {
      dependency_3 = _beyondJsReact18Widgets118Page;
    }, function (_aimpactAilearnApp070StoresBase) {
      dependency_4 = _aimpactAilearnApp070StoresBase;
    }, function (_beyondJsKernel0114Core) {
      dependency_5 = _beyondJsKernel0114Core;
    }, function (_react2) {
      dependency_6 = _react2;
    }, function (_beyondJsKernel0114Routing) {
      dependency_7 = _beyondJsKernel0114Routing;
    }, function (_aimpactChatSdk155Session) {
      dependency_8 = _aimpactChatSdk155Session;
    }, function (_pragmateUi108Alert) {
      dependency_9 = _pragmateUi108Alert;
    }, function (_pragmateUi108Components) {
      dependency_10 = _pragmateUi108Components;
    }, function (_pragmateUi108Image) {
      dependency_11 = _pragmateUi108Image;
    }, function (_aimpactAilearnApp070ModelWrapper) {
      dependency_12 = _aimpactAilearnApp070ModelWrapper;
    }, function (_beyondJsReact18Widgets118Hooks) {
      dependency_13 = _beyondJsReact18Widgets118Hooks;
    }, function (_framerMotion2) {
      dependency_14 = _framerMotion2;
    }, function (_aimpactAilearnApp070ComponentsUi) {
      dependency_15 = _aimpactAilearnApp070ComponentsUi;
    }, function (_aimpactAilearnApp070ComponentsIcons) {
      dependency_16 = _aimpactAilearnApp070ComponentsIcons;
    }, function (_pragmateUi108Form) {
      dependency_17 = _pragmateUi108Form;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.9"], ["@beyond-js/reactive", "2.1.2"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.14"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.8"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["@radix-ui/react-accordion", "1.2.12"], ["@radix-ui/react-collapsible", "1.1.12"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-select", "2.2.6"], ["@radix-ui/react-separator", "1.1.7"], ["@tiptap/extension-blockquote", "3.2.0"], ["@tiptap/extension-code-block", "3.2.0"], ["@tiptap/extension-horizontal-rule", "3.2.0"], ["@tiptap/extension-image", "3.6.2"], ["@tiptap/extension-task-item", "3.2.0"], ["@tiptap/extension-task-list", "3.2.0"], ["@tiptap/extension-underline", "3.2.0"], ["@tiptap/pm", "3.6.2"], ["@tiptap/react", "3.2.0"], ["@tiptap/starter-kit", "3.2.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-responsive-masonry", "2.7.1"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.4.0"], ["react-virtuoso", "4.14.0"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "12.0.2"], ["tippy.js", "6.3.7"], ["turndown", "7.2.0"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["yet-another-react-lightbox", "3.25.0"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/node", "20.11.0"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.7.0"], ["@aimpact/rvd", "0.7.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.7.0/auth-login",
          "multibundle": true
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/stores/base', dependency_4], ['@beyond-js/kernel/core', dependency_5], ['react', dependency_6], ['@beyond-js/kernel/routing', dependency_7], ['@aimpact/chat-sdk/session', dependency_8], ['pragmate-ui/alert', dependency_9], ['pragmate-ui/components', dependency_10], ['pragmate-ui/image', dependency_11], ['@aimpact/ailearn-app/model/wrapper', dependency_12], ['@beyond-js/react-18-widgets/hooks', dependency_13], ['framer-motion', dependency_14], ['@aimpact/ailearn-app/components/ui', dependency_15], ['@aimpact/ailearn-app/components/icons', dependency_16], ['pragmate-ui/form', dependency_17]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "auth-login-page",
        "vspecifier": "@aimpact/ailearn-app@0.7.0/auth-login.widget",
        "is": "page",
        "route": "/auth/login",
        "layout": "auth-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.7.0/auth-login.widget');
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
        hash: 3032957809,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _base = require("@aimpact/ailearn-app/stores/base");
          var _beyond_context = require("beyond_context");
          var _core = require("@beyond-js/kernel/core");
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
            async checkLanguage(lang) {
              _core.languages.current = lang;
              //@ts-ignore
              await this.languages().global.fetch();
              //@ts-ignore
              await this.languages().module.fetch();
              this.trigger('change');
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
        hash: 4118178607,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
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
              texts: texts,
              store: store
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
        hash: 3158352143,
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
            texts,
            store
          }) {
            // Get supported languages from the languages object
            const supportedLanguages = [..._core.languages.supported.keys()];
            return _react.default.createElement("ul", {
              className: "language-selection"
            }, supportedLanguages.map(language => _react.default.createElement("li", {
              key: language
            }, _react.default.createElement(_icons.AppIcon, {
              onClick: () => store.checkLanguage(language),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsImNyZWF0ZVN0b3JlIiwibGFuZ3VhZ2UiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImV4cG9ydHMiLCJfYmFzZSIsIl9iZXlvbmRfY29udGV4dCIsIl9jb3JlIiwiQmFzZVN0b3JlTWFuYWdlciIsInNvY2lhbE1lZGlhIiwid2ViaW5hciIsInR1dG9yaWFscyIsInRlYWNoZXIiLCJzdHVkZW50IiwibGlua2VkaW4iLCJ0aWt0b2siLCJpbnN0YWdyYW0iLCJmYWNlYm9vayIsInlvdXR1YmUiLCJjb25zdHJ1Y3RvciIsIm1vZHVsZSIsInNwZWNpZmllciIsImNoZWNrTGFuZ3VhZ2UiLCJsYW5nIiwibGFuZ3VhZ2VzIiwiY3VycmVudCIsImdsb2JhbCIsImZldGNoIiwidHJpZ2dlciIsImFuaW1hdGlvbnMiLCJkZWZhdWx0IiwiaW5pdGlhbCIsInkiLCJvcGFjaXR5IiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImV4aXQiLCJmYWRlIiwiZmFkZUluVXBmYWRlT3V0TGVmdCIsIngiLCJfcmVhY3QiLCJfcm91dGluZyIsIl9zZXNzaW9uIiwiX2FsZXJ0IiwiX2NvbXBvbmVudHMiLCJfaW1hZ2UiLCJfd3JhcHBlciIsIkxvZ2luQ29udGFpbmVyIiwidGV4dHMiLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwidXNlU3RhdGUiLCJlcnJvciIsInNldEVycm9yIiwib25Hb29nbGUiLCJldmVudCIsInJlc3BvbnNlIiwic2Vzc2lvbldyYXBwZXIiLCJhdXRoIiwibG9naW5XaXRoIiwiRXJyb3IiLCJyb3V0aW5nIiwicHVzaFN0YXRlIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIiwiZXJyb3JzIiwidW5rbm93biIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsIkltYWdlIiwiY2xhc3NOYW1lIiwic3JjIiwic2V0dGluZ3MiLCJBUFBfTE9HTyIsImxvZ2luVGl0bGUiLCJzdWJ0aXRsZSIsIkFsZXJ0IiwidHlwZSIsIkJ1dHRvbiIsImljb24iLCJ2YXJpYW50Iiwib25DbGljayIsImxvYWRpbmciLCJsYWJlbCIsImdvb2dsZVNpZ25JbkJ1dHRvbiIsIl9ob29rcyIsIl9mcmFtZXJNb3Rpb24iLCJfYW5pbWF0aW9ucyIsIl9jb250YWluZXIiLCJfbGFuZ3VhZ2VzIiwiX3ByZXNlbnRhdGlvbiIsInN0b3JlIiwidXNlU3RvcmUiLCJyZWFkeSIsIlNwaW5uZXIiLCJhY3RpdmUiLCJtb3Rpb24iLCJkaXYiLCJQcmVzZW50YXRpb24iLCJMYW5ndWFnZXMiLCJmb290ZXIiLCJpbnRybyIsIkxpbmsiLCJocmVmIiwidGFyZ2V0IiwidGVybXMiLCJjb25uZWN0b3IiLCJwcml2YWN5IiwidmVyc2lvbiIsIl9pY29ucyIsInN1cHBvcnRlZExhbmd1YWdlcyIsInN1cHBvcnRlZCIsImtleXMiLCJtYXAiLCJrZXkiLCJBcHBJY29uIiwibmFtZSIsInRpdGxlIiwiX2Zvcm0iLCJMb2dpbkZvcm0iLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJlbWFpbCIsInBhc3N3b3JkIiwiZm9ybURpc2FibGVkIiwiZGlzYWJsZWQiLCJoYW5kbGVDaGFuZ2UiLCJjdXJyZW50VGFyZ2V0IiwiY3VycmVudFZhbHVlIiwidmFsdWUiLCJvblN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwibG9naW4iLCJzdGF0dXMiLCJlcnJvckxvZ2luIiwiRm9ybSIsIklucHV0IiwicGxhY2Vob2xkZXIiLCJlbWFpbExhYmVsIiwib25DaGFuZ2UiLCJyZXF1aXJlZCIsInBhc3N3b3JkTGFiZWwiLCJzaWduSW5CdXR0b24iLCJfcnJzcyIsImRhdGEiLCJwcmVzZW50YXRpb24iLCJhbHQiLCJkZXNjcmlwdGlvbiIsIkh0bWxXcmFwcGVyIiwiYXMiLCJjb250ZW50cyIsImV4cGVyaWVuY2UiLCJ0ZWFjaGVycyIsInN0dWRlbnRzIiwiUlJzcyJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2FuaW1hdGlvbnMudHN4IiwiL3RzL3ZpZXdzL2NvbnRhaW5lci50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xhbmd1YWdlcy50c3giLCIvdHMvdmlld3MvbG9naW4tZm9ybS50c3giLCIvdHMvdmlld3MvcHJlc2VudGF0aW9uL3ByZXNlbnRhdGlvbi50c3giLCIvdHMvdmlld3MvcHJlc2VudGF0aW9uL3Jyc3MudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUVBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqREMsV0FBV0EsQ0FBQ0MsUUFBaUI7Y0FDNUIsT0FBTyxJQUFJSixNQUFBLENBQUFLLFlBQVksRUFBRTtZQUMxQjtZQUNBLElBQUlDLE1BQU1BLENBQUE7Y0FDVCxPQUFPUCxNQUFBLENBQUFRLElBQUk7WUFDWjtZQUVBQyxJQUFJQSxDQUFBO2NBQ0g7Y0FDQTtZQUFBOztVQUVEQyxPQUFBLENBQUFSLFVBQUEsR0FBQUEsVUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNsQkQsSUFBQVMsS0FBQSxHQUFBWixPQUFBO1VBQ0EsSUFBQWEsZUFBQSxHQUFBYixPQUFBO1VBQ0EsSUFBQWMsS0FBQSxHQUFBZCxPQUFBO1VBQ00sTUFBT08sWUFBYSxTQUFRSyxLQUFBLENBQUFHLGdCQUE4QjtZQUMvRCxJQUFJQyxXQUFXQSxDQUFBO2NBQ2QsT0FBTztn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