System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.14/bundle", "@beyond-js/kernel@0.1.14/styles", "react@18.3.1/jsx-runtime", "@beyond-js/react-18-widgets@1.1.8/page", "@aimpact/ailearn-sdk@1.2.0/application", "@aimpact/chat-sdk@1.5.5/session", "react@18.3.1", "pragmate-ui@1.0.8/form/react-select", "@beyond-js/kernel@0.1.14/routing", "pragmate-ui@1.0.8/components", "@aimpact/ailearn-app@0.7.0/components/ui", "@aimpact/ailearn-app@0.7.0/model/wrapper", "@beyond-js/react-18-widgets@1.1.8/hooks", "pragmate-ui@1.0.8/image", "@aimpact/ailearn-app@0.7.0/components/icons", "pragmate-ui@1.0.8/form", "pragmate-ui@1.0.8/toast", "pragmate-ui@1.0.8/list"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, bimport, __Bundle, __pkg, ims, Controller, BirthdayForm, View, NavbarHeader, Form, PoliciesView, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    BirthdayForm: void 0,
    View: void 0,
    NavbarHeader: void 0,
    Form: void 0,
    PoliciesView: void 0
  });
  return {
    setters: [function (_beyondJsWidgets112Render) {
      dependency_0 = _beyondJsWidgets112Render;
    }, function (_beyondJsKernel0114Bundle) {
      dependency_1 = _beyondJsKernel0114Bundle;
    }, function (_beyondJsKernel0114Styles) {
      dependency_2 = _beyondJsKernel0114Styles;
    }, function (_react1831JsxRuntime) {
      dependency_3 = _react1831JsxRuntime;
    }, function (_beyondJsReact18Widgets118Page) {
      dependency_4 = _beyondJsReact18Widgets118Page;
    }, function (_aimpactAilearnSdk120Application) {
      dependency_5 = _aimpactAilearnSdk120Application;
    }, function (_aimpactChatSdk155Session) {
      dependency_6 = _aimpactChatSdk155Session;
    }, function (_react2) {
      dependency_7 = _react2;
    }, function (_pragmateUi108FormReactSelect) {
      dependency_8 = _pragmateUi108FormReactSelect;
    }, function (_beyondJsKernel0114Routing) {
      dependency_9 = _beyondJsKernel0114Routing;
    }, function (_pragmateUi108Components) {
      dependency_10 = _pragmateUi108Components;
    }, function (_aimpactAilearnApp070ComponentsUi) {
      dependency_11 = _aimpactAilearnApp070ComponentsUi;
    }, function (_aimpactAilearnApp070ModelWrapper) {
      dependency_12 = _aimpactAilearnApp070ModelWrapper;
    }, function (_beyondJsReact18Widgets118Hooks) {
      dependency_13 = _beyondJsReact18Widgets118Hooks;
    }, function (_pragmateUi108Image) {
      dependency_14 = _pragmateUi108Image;
    }, function (_aimpactAilearnApp070ComponentsIcons) {
      dependency_15 = _aimpactAilearnApp070ComponentsIcons;
    }, function (_pragmateUi108Form) {
      dependency_16 = _pragmateUi108Form;
    }, function (_pragmateUi108Toast) {
      dependency_17 = _pragmateUi108Toast;
    }, function (_pragmateUi108List) {
      dependency_18 = _pragmateUi108List;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.9"], ["@beyond-js/reactive", "2.1.1"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.14"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.8"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["@radix-ui/react-accordion", "1.2.12"], ["@radix-ui/react-collapsible", "1.1.12"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-select", "2.2.6"], ["@radix-ui/react-separator", "1.1.7"], ["@tiptap/extension-blockquote", "3.2.0"], ["@tiptap/extension-code-block", "3.2.0"], ["@tiptap/extension-horizontal-rule", "3.2.0"], ["@tiptap/extension-image", "3.6.2"], ["@tiptap/extension-task-item", "3.2.0"], ["@tiptap/extension-task-list", "3.2.0"], ["@tiptap/extension-underline", "3.2.0"], ["@tiptap/pm", "3.6.2"], ["@tiptap/react", "3.2.0"], ["@tiptap/starter-kit", "3.2.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-responsive-masonry", "2.7.1"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.4.0"], ["react-virtuoso", "4.14.0"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "12.0.2"], ["tippy.js", "6.3.7"], ["turndown", "7.2.0"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["yet-another-react-lightbox", "3.25.0"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/node", "20.11.0"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.7.0"], ["@aimpact/rvd", "0.7.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.7.0/pages/age",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['react/jsx-runtime', dependency_3], ['@beyond-js/react-18-widgets/page', dependency_4], ['@aimpact/ailearn-sdk/application', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['react', dependency_7], ['pragmate-ui/form/react-select', dependency_8], ['@beyond-js/kernel/routing', dependency_9], ['pragmate-ui/components', dependency_10], ['@aimpact/ailearn-app/components/ui', dependency_11], ['@aimpact/ailearn-app/model/wrapper', dependency_12], ['@beyond-js/react-18-widgets/hooks', dependency_13], ['pragmate-ui/image', dependency_14], ['@aimpact/ailearn-app/components/icons', dependency_15], ['pragmate-ui/form', dependency_16], ['pragmate-ui/toast', dependency_17], ['pragmate-ui/list', dependency_18]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-policies-page",
        "vspecifier": "@aimpact/ailearn-app@0.7.0/pages/age.widget",
        "is": "page",
        "route": "/user-validation"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.7.0/pages/age.widget');
      ims = new Map();
      /*********************************************
      INTERNAL MODULE: ./views/policies/policies.mdx
      *********************************************/
      ims.set('./views/policies/policies.mdx', {
        hash: 3258189032,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _jsxRuntime = require("react/jsx-runtime");
          /*@jsxRuntime automatic @jsxImportSource react*/

          function _createMdxContent(props) {
            const _components = Object.assign({
              h1: "h1",
              h2: "h2",
              p: "p"
            }, props.components);
            return (0, _jsxRuntime.jsxs)("main", {
              children: [(0, _jsxRuntime.jsx)(_components.h1, {
                children: "Términos y condiciones de uso"
              }), (0, _jsxRuntime.jsx)(_components.h2, {
                children: "Políticas de privacidad"
              }), (0, _jsxRuntime.jsx)(_components.p, {
                children: "Estas condiciones han sido actualizadas el 09/09/2022. Estas son las Condiciones Generales para que los usuarios de\r\nInternet accedan a los contenidos y servicios que RVD.AI (en adelante, \"RVD.AI\") pone a su disposición a través de los\r\nsitios, en adelante los “Sitios”. El usuario al dar al botón \"Leí y acepto los términos y condiciones\" en el proceso de\r\nacceso a los contenidos de los Sitios, admite haber leído las presentes"
              }), (0, _jsxRuntime.jsx)(_components.h2, {
                children: "Condiciones Generales"
              }), (0, _jsxRuntime.jsx)(_components.p, {
                children: "Expresa su adhesión plena y sin reservas a todas y cada una de ellas. Asimismo, debido a que ciertos servicios y\r\ncontenidos ofrecidos través de los Sitios pueden contener se recomienda a los usuarios tomar conocimiento específico de\r\nellas. Además de las presentes"
              }), (0, _jsxRuntime.jsx)(_components.p, {
                children: "Condiciones Generales y las normas que los complementan, existen unas condiciones de uso los sitios detalladas."
              }), (0, _jsxRuntime.jsx)(_components.h2, {
                children: "Verificación de mayoría de edad"
              }), (0, _jsxRuntime.jsx)(_components.p, {
                children: "Condiciones detalladas y las normas que los complementan, existen unas condiciones de uso los sitios detalladas en el\r\nReglamento general de lanacion.com.ar que todo usuario debe respetar y que se entenderá conocido por todos los usuarios\r\nde los Sitios."
              })]
            });
          }
          function MDXContent(props = {}) {
            const {
              wrapper: MDXLayout
            } = props.components || {};
            return MDXLayout ? (0, _jsxRuntime.jsx)(MDXLayout, Object.assign({}, props, {
              children: (0, _jsxRuntime.jsx)(_createMdxContent, props)
            })) : _createMdxContent(props);
          }
          var _default = exports.default = MDXContent;
        }
      });

      /****************************
      INTERNAL MODULE: ./controller
      ****************************/

      ims.set('./controller', {
        hash: 868967430,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _page = require("@beyond-js/react-18-widgets/page");
          var _store = require("./store");
          /*bundle*/ // import { View } from './views';
          class Controller extends _page.PageReactWidgetController {
            #store;
            createStore() {
              this.#store = new _store.StoreManager();
              return this.#store;
            }
            get Widget() {
              return View;
            }
            /**
             * this method is executed when the widget is showd
             */
            show() {}
            /**
             * this method is executed when the widget is hidden
             */
            hide() {}
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 211661893,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _application = require("@aimpact/ailearn-sdk/application");
          var _session = require("@aimpact/chat-sdk/session");
          //@ts-ignore
          class StoreManager {
            application;
            get session() {
              return _session.sessionWrapper;
            }
            get user() {
              return _session.sessionWrapper.user;
            }
            get accepted() {
              return _session.sessionWrapper.user.termsAccepted;
            }
            get ageDefined() {
              return _session.sessionWrapper.user.age > 0;
            }
            get validated() {
              return this.accepted && this.ageDefined;
            }
            constructor() {
              this.application = new _application.Application();
            }
            async validateAge(birthdate) {
              try {
                return _session.sessionWrapper.user.validate(birthdate);
              } catch (e) {
                console.error(e);
              }
            }
            async accept(birthdate) {
              try {
                return await _session.sessionWrapper.user.acceptTerms(birthdate);
              } catch (e) {
                console.error(e);
              }
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /********************************
      INTERNAL MODULE: ./views/age/date
      ********************************/

      ims.set('./views/age/date', {
        hash: 3672129423,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DateFields = DateFields;
          var _react = require("react");
          var _reactSelect = require("pragmate-ui/form/react-select");
          var _context = require("../context");
          var _useOptions = require("./use-options");
          function DateFields({
            values,
            setValues
          }) {
            const {
              texts
            } = (0, _context.useModuleContext)();
            const {
              onChange,
              years,
              days,
              months
            } = (0, _useOptions.useOptions)(values, setValues);
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_reactSelect.ReactSelect, {
              placeholder: texts.years.label,
              value: values.year,
              name: "year",
              options: years,
              onChange: onChange
            }), _react.default.createElement(_reactSelect.ReactSelect, {
              placeholder: texts.months.label,
              value: values.month,
              name: "month",
              onChange: onChange,
              options: months
            }), _react.default.createElement(_reactSelect.ReactSelect, {
              placeholder: texts.days.label,
              value: values.day,
              onChange: onChange,
              name: "day",
              options: days
            }));
          }
        }
      });

      /********************************
      INTERNAL MODULE: ./views/age/days
      ********************************/

      ims.set('./views/age/days', {
        hash: 253935214,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DaysField = DaysField;
          var _react = require("react");
          var _context = require("../context");
          function DaysField() {
            const {
              texts,
              store
            } = (0, _context.useModuleContext)();
            const [value, setValue] = _react.default.useState('');
            const onChange = event => {
              setValue(event.currentTarget.value);
            };
            const options = texts.days.items.map((item, index) => ({
              value: index + 1,
              label: item
            }));
            return _react.default.createElement(_react.default.Fragment, null);
          }
        }
      });

      /********************************
      INTERNAL MODULE: ./views/age/form
      ********************************/

      ims.set('./views/age/form', {
        hash: 2346265759,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BirthdayForm = BirthdayForm;
          var _react = require("react");
          var _context = require("../context");
          var _date = require("./date");
          var _routing = require("@beyond-js/kernel/routing");
          var _components = require("pragmate-ui/components");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _wrapper = require("@aimpact/ailearn-app/model/wrapper");
          const {
            Router
          } = _wrapper.settings;
          /*bundle*/
          function BirthdayForm() {
            const {
              texts,
              birthdate,
              store,
              setView
            } = (0, _context.useModuleContext)();
            const [values, setValues] = _react.default.useState({
              year: 2024,
              month: 1,
              day: ''
            });
            const [fetching, setFetching] = _react.default.useState(false);
            const disabled = {
              disabled: !birthdate
            };
            const onSubmit = async event => {
              try {
                setFetching(true);
                event.preventDefault();
                const valid = await store.validateAge(birthdate);
                if (valid) {
                  setView('policies');
                  return;
                }
                const previous = Router.getAndCleanPreviousUrl();
                _routing.routing.replaceState({}, null, previous?.uri ?? '/');
              } catch (e) {
                console.error(e);
              } finally {
                setFetching(false);
              }
            };
            const cls = `form-age__container vertical-center${fetching ? ' is-fetching' : ''}`;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_ui.PageContainer, {
              size: "sm",
              className: cls
            }, _react.default.createElement("div", {
              className: "form-age__container"
            }, _react.default.createElement("h1", {
              className: "text-center mb-15"
            }, texts.age.title), _react.default.createElement("form", {
              onSubmit: onSubmit
            }, _react.default.createElement("div", {
              className: "age-fields__container"
            }, _react.default.createElement(_date.DateFields, {
              values: values,
              setValues: setValues
            })), _react.default.createElement("span", null, texts.claim), _react.default.createElement("section", null, _react.default.createElement(_components.Button, {
              type: "submit",
              fetching: fetching,
              variant: "primary",
              ...disabled,
              onClick: onSubmit
            }, texts.button))))));
          }
        }
      });

      /***************************************
      INTERNAL MODULE: ./views/age/use-options
      ***************************************/

      ims.set('./views/age/use-options', {
        hash: 3946564185,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useOptions = useOptions;
          var _react = require("react");
          var _context = require("../context");
          function useOptions(values, setValues) {
            const {
              texts,
              setBirthdate
            } = (0, _context.useModuleContext)();
            _react.default.useEffect(() => {
              if (values.year && values.month && values.day) {
                setBirthdate(`${values.year}-${values.month}-${values.day}`);
              }
            }, [values]);
            const onChange = event => {
              const {
                name,
                value
              } = event.currentTarget;
              setValues(prevState => ({
                ...prevState,
                [name]: parseInt(value)
              }));
            };
            const years = _react.default.useMemo(() => {
              const currentYear = new Date().getFullYear() - 13;
              return Array.from({
                length: currentYear - 1926 + 1
              }, (_, index) => ({
                value: 1930 + index,
                label: `${1930 + index}`
              })).reverse();
            }, []); // Dependency array is empty, so this runs once
            function getTotalDays(month, year) {
              // Months in JavaScript are 0-indexed: 0 for January, 11 for December
              // Adjust the month number down by 1
              month--;
              // Create a date object for the following month, day 0 will give us the last day of the requested month
              return new Date(year, month + 1, 0).getDate();
            }
            const totalDays = getTotalDays(values.month, values.year); // 2 is for February
            const createArray = number => Array.from({
              length: number
            }, (_, i) => i + 1);
            const days = createArray(totalDays).map((item, index) => ({
              value: index + 1,
              label: item
            }));
            const months = texts.months.items.map((item, index) => ({
              value: index + 1,
              label: item
            }));
            return {
              onChange,
              years,
              months,
              days
            };
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 2862825259,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useModuleContext = exports.ModuleContext = void 0;
          var _react = require("react");
          const ModuleContext = exports.ModuleContext = _react.default.createContext({});
          const useModuleContext = () => _react.default.useContext(ModuleContext);
          exports.useModuleContext = useModuleContext;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 4120839587,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _beyond_context = require("beyond_context");
          var _components = require("pragmate-ui/components");
          var React = require("react");
          var _form = require("./age/form");
          var _context = require("./context");
          var _navbar = require("./navbar");
          var _policies = require("./policies");
          /*bundle*/
          function View({
            store
          }) {
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            const [view, setView] = React.useState(store.accepted ? 'policies' : 'birthday');
            const [birthdate, setBirthdate] = React.useState(store.user?.birthdate);
            if (!textsReady) return null;
            const value = {
              texts,
              setView,
              birthdate,
              setBirthdate,
              store
            };
            return React.createElement("div", {
              className: "logo-layout-page"
            }, React.createElement(_navbar.NavbarHeader, {
              texts: texts
            }), React.createElement(_context.ModuleContext.Provider, {
              value: value
            }, React.createElement(_components.ConditionalContainer, {
              condition: view,
              options: {
                policies: React.createElement(_policies.PoliciesView, null),
                birthday: React.createElement(_form.BirthdayForm, null)
              },
              placeholder: React.createElement(_form.BirthdayForm, null)
            })));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./views/navbar
      ******************************/

      ims.set('./views/navbar', {
        hash: 3254841974,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.NavbarHeader = NavbarHeader;
          var _image = require("pragmate-ui/image");
          var _react = require("react");
          var _session = require("@aimpact/chat-sdk/session");
          var _routing = require("@beyond-js/kernel/routing");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _wrapper = require("@aimpact/ailearn-app/model/wrapper");
          /*bundle*/
          function NavbarHeader({
            texts
          }) {
            const cls = `navbar-header`;
            const ref = _react.default.useRef();
            // const Control = BirthdayForm;
            const logout = async event => {
              event.stopPropagation();
              await _session.sessionWrapper.logout();
              _routing.routing.pushState('/');
            };
            return _react.default.createElement("header", {
              className: cls,
              ref: ref
            }, _react.default.createElement("section", {
              className: "left-section"
            }, _react.default.createElement(_image.Image, {
              src: _wrapper.settings.APP_LOGO,
              alt: _wrapper.settings.APP_NAME,
              className: "navbar-logo"
            })), _react.default.createElement("div", {
              className: "right-section"
            }, _react.default.createElement(_icons.AppIconButton, {
              icon: "exit",
              className: "circle",
              onClick: logout
            })));
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./views/policies/form
      *************************************/

      ims.set('./views/policies/form', {
        hash: 2106791470,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Form = Form;
          var _react = require("react");
          var _context = require("../context");
          var _form = require("pragmate-ui/form");
          var _toast = require("pragmate-ui/toast");
          var _components = require("pragmate-ui/components");
          var _routing = require("@beyond-js/kernel/routing");
          var _wrapper = require("@aimpact/ailearn-app/model/wrapper");
          const {
            Router
          } = _wrapper.settings;
          /*bundle*/
          function Form() {
            const {
              texts,
              store,
              birthdate
            } = (0, _context.useModuleContext)();
            const [checked, setChecked] = _react.default.useState(false);
            const [fetching, setFetching] = _react.default.useState(false);
            const disabled = {
              disabled: !checked || fetching
            };
            const onClick = event => setChecked(event.target.checked);
            // if (store.validated) return null;
            const onSubmit = async event => {
              try {
                setFetching(true);
                event.preventDefault();
                const valid = await store.user.acceptTerms(birthdate);
                if (!valid) {
                  _toast.toast.error(texts.ERROR);
                  return;
                }
                const previous = Router.getAndCleanPreviousUrl();
                _routing.routing.replaceState({}, null, previous?.uri ?? '/');
              } catch (e) {
                console.error(e);
              } finally {
                setFetching(false);
              }
            };
            return _react.default.createElement("form", {
              className: "form--in-content",
              onSubmit: onSubmit
            }, _react.default.createElement("label", {
              className: "italic flex-container flex-center flex-vertical-center"
            }, _react.default.createElement(_form.Checkbox, {
              name: "accept",
              onClick: onClick
            }), _react.default.createElement(_components.HtmlWrapper, null, texts.checkbox)), _react.default.createElement("section", {
              className: "flex-container flex-vertical-center  mt-30"
            }, _react.default.createElement(_components.Button, {
              type: "submit",
              variant: "primary",
              block: true,
              ...disabled
            }, texts.button)));
          }
        }
      });

      /**************************************
      INTERNAL MODULE: ./views/policies/index
      **************************************/

      ims.set('./views/policies/index', {
        hash: 1130267200,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PoliciesView = PoliciesView;
          var React = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _components = require("pragmate-ui/components");
          var _context = require("../context");
          var _form = require("./form");
          /*bundle*/
          function PoliciesView() {
            const {
              texts
            } = (0, _context.useModuleContext)();
            return React.createElement(React.Fragment, null, React.createElement(_ui.PageContainer, {
              size: "sm",
              className: "page-article-container vertical-center text-center"
            }, React.createElement("h1", null, texts.terms.title), React.createElement("p", null, React.createElement(_components.HtmlWrapper, null, texts.terms.claim)), React.createElement("p", null, texts.terms.conclusion, ' ', React.createElement(_components.Link, {
              target: "_blank",
              href: "/terms-and-conditions"
            }, texts.terms.links.terms), ' ', texts.terms.postConclusion, ' ', React.createElement(_components.Link, {
              target: "_blank",
              href: "/privacy"
            }, texts.terms.links.privacy)), React.createElement(_form.Form, null)));
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./views/policies/menu
      *************************************/

      ims.set('./views/policies/menu', {
        hash: 1571562254,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AsideMenu = AsideMenu;
          var _react = require("react");
          var _list = require("pragmate-ui/list");
          var _context = require("../context");
          function AsideMenu() {
            const {
              texts
            } = (0, _context.useModuleContext)();
            const items = Object.keys(texts.menu).map(key => texts.menu[key]);
            const Item = ({
              item
            }) => _react.default.createElement("li", null, item);
            console.log(items, texts);
            return _react.default.createElement("aside", null, _react.default.createElement(_list.List, {
              items: items,
              control: Item
            }));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./views/age/form",
        "from": "BirthdayForm",
        "name": "BirthdayForm"
      }, {
        "im": "./views/index",
        "from": "View",
        "name": "View"
      }, {
        "im": "./views/navbar",
        "from": "NavbarHeader",
        "name": "NavbarHeader"
      }, {
        "im": "./views/policies/form",
        "from": "Form",
        "name": "Form"
      }, {
        "im": "./views/policies/index",
        "from": "PoliciesView",
        "name": "PoliciesView"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'BirthdayForm') && _export("BirthdayForm", BirthdayForm = require ? require('./views/age/form').BirthdayForm : value);
        (require || prop === 'View') && _export("View", View = require ? require('./views/index').View : value);
        (require || prop === 'NavbarHeader') && _export("NavbarHeader", NavbarHeader = require ? require('./views/navbar').NavbarHeader : value);
        (require || prop === 'Form') && _export("Form", Form = require ? require('./views/policies/form').Form : value);
        (require || prop === 'PoliciesView') && _export("PoliciesView", PoliciesView = require ? require('./views/policies/index').PoliciesView : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImhpZGUiLCJleHBvcnRzIiwiX2FwcGxpY2F0aW9uIiwiX3Nlc3Npb24iLCJhcHBsaWNhdGlvbiIsInNlc3Npb24iLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJhY2NlcHRlZCIsInRlcm1zQWNjZXB0ZWQiLCJhZ2VEZWZpbmVkIiwiYWdlIiwidmFsaWRhdGVkIiwiY29uc3RydWN0b3IiLCJBcHBsaWNhdGlvbiIsInZhbGlkYXRlQWdlIiwiYmlydGhkYXRlIiwidmFsaWRhdGUiLCJlIiwiY29uc29sZSIsImVycm9yIiwiYWNjZXB0IiwiYWNjZXB0VGVybXMiLCJfcmVhY3QiLCJfcmVhY3RTZWxlY3QiLCJfY29udGV4dCIsIl91c2VPcHRpb25zIiwiRGF0ZUZpZWxkcyIsInZhbHVlcyIsInNldFZhbHVlcyIsInRleHRzIiwidXNlTW9kdWxlQ29udGV4dCIsIm9uQ2hhbmdlIiwieWVhcnMiLCJkYXlzIiwibW9udGhzIiwidXNlT3B0aW9ucyIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJSZWFjdFNlbGVjdCIsInBsYWNlaG9sZGVyIiwibGFiZWwiLCJ2YWx1ZSIsInllYXIiLCJuYW1lIiwib3B0aW9ucyIsIm1vbnRoIiwiZGF5IiwiRGF5c0ZpZWxkIiwic2V0VmFsdWUiLCJ1c2VTdGF0ZSIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsIml0ZW1zIiwibWFwIiwiaXRlbSIsImluZGV4IiwiX2RhdGUiLCJfcm91dGluZyIsIl9jb21wb25lbnRzIiwiX3VpIiwiX3dyYXBwZXIiLCJSb3V0ZXIiLCJzZXR0aW5ncyIsIkJpcnRoZGF5Rm9ybSIsInNldFZpZXciLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwiZGlzYWJsZWQiLCJvblN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwidmFsaWQiLCJwcmV2aW91cyIsImdldEFuZENsZWFuUHJldmlvdXNVcmwiLCJyb3V0aW5nIiwicmVwbGFjZVN0YXRlIiwidXJpIiwiY2xzIiwiUGFnZUNvbnRhaW5lciIsInNpemUiLCJjbGFzc05hbWUiLCJ0aXRsZSIsImNsYWltIiwiQnV0dG9uIiwidHlwZSIsInZhcmlhbnQiLCJvbkNsaWNrIiwiYnV0dG9uIiwic2V0QmlydGhkYXRlIiwidXNlRWZmZWN0IiwicHJldlN0YXRlIiwicGFyc2VJbnQiLCJ1c2VNZW1vIiwiY3VycmVudFllYXIiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJBcnJheSIsImZyb20iLCJsZW5ndGgiLCJfIiwicmV2ZXJzZSIsImdldFRvdGFsRGF5cyIsImdldERhdGUiLCJ0b3RhbERheXMiLCJjcmVhdGVBcnJheSIsIm51bWJlciIsImkiLCJNb2R1bGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfaG9va3MiLCJfYmV5b25kX2NvbnRleHQiLCJSZWFjdCIsIl9mb3JtIiwiX25hdmJhciIsIl9wb2xpY2llcyIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInZpZXciLCJOYXZiYXJIZWFkZXIiLCJQcm92aWRlciIsIkNvbmRpdGlvbmFsQ29udGFpbmVyIiwiY29uZGl0aW9uIiwicG9saWNpZXMiLCJQb2xpY2llc1ZpZXciLCJiaXJ0aGRheSIsIl9pbWFnZSIsIl9pY29ucyIsInJlZiIsInVzZVJlZiIsImxvZ291dCIsInN0b3BQcm9wYWdhdGlvbiIsInB1c2hTdGF0ZSIsIkltYWdlIiwic3JjIiwiQVBQX0xPR08iLCJhbHQiLCJBUFBfTkFNRSIsIkFwcEljb25CdXR0b24iLCJpY29uIiwiX3RvYXN0IiwiRm9ybSIsImNoZWNrZWQiLCJzZXRDaGVja2VkIiwidGFyZ2V0IiwidG9hc3QiLCJFUlJPUiIsIkNoZWNrYm94IiwiSHRtbFdyYXBwZXIiLCJjaGVja2JveCIsImJsb2NrIiwidGVybXMiLCJjb25jbHVzaW9uIiwiTGluayIsImhyZWYiLCJsaW5rcyIsInBvc3RDb25jbHVzaW9uIiwicHJpdmFjeSIsIl9saXN0IiwiQXNpZGVNZW51IiwiT2JqZWN0Iiwia2V5cyIsIm1lbnUiLCJrZXkiLCJJdGVtIiwibG9nIiwiTGlzdCIsImNvbnRyb2wiXSwic291cmNlcyI6WyIvdHMvdmlld3MvcG9saWNpZXMvdmlld3NcXHBvbGljaWVzXFxwb2xpY2llcy5tZHgiLCIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9hZ2UvZGF0ZS50c3giLCIvdHMvdmlld3MvYWdlL2RheXMudHN4IiwiL3RzL3ZpZXdzL2FnZS9mb3JtLnRzeCIsIi90cy92aWV3cy9hZ2UvdXNlLW9wdGlvbnMudHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL25hdmJhci50c3giLCIvdHMvdmlld3MvcG9saWNpZXMvZm9ybS50c3giLCIvdHMvdmlld3MvcG9saWNpZXMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3BvbGljaWVzL21lbnUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUVFOzswQkFFQzs7MEJBRUg7OzBCQUtHOzswQkFFSDs7MEJBSUE7OzBCQUVHOzswQkFFSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNyQkEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBSU8sV0FGUDtVQUVpQixNQUNYRSxVQUFXLFNBQVFILEtBQUEsQ0FB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System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.14/bundle", "@beyond-js/kernel@0.1.14/styles", "react@18.3.1/jsx-runtime", "@beyond-js/react-18-widgets@1.1.8/page", "@aimpact/ailearn-sdk@1.2.0/application", "@aimpact/chat-sdk@1.5.5/session", "react@18.3.1", "pragmate-ui@1.0.8/form/react-select", "@beyond-js/kernel@0.1.14/routing", "pragmate-ui@1.0.8/components", "@aimpact/ailearn-app@0.7.0/components/ui", "@aimpact/ailearn-app@0.7.0/model/wrapper", "@beyond-js/react-18-widgets@1.1.8/hooks", "pragmate-ui@1.0.8/image", "@aimpact/ailearn-app@0.7.0/components/icons", "pragmate-ui@1.0.8/form", "pragmate-ui@1.0.8/toast", "pragmate-ui@1.0.8/list"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, bimport, __Bundle, __pkg, ims, Controller, BirthdayForm, View, NavbarHeader, Form, PoliciesView, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    BirthdayForm: void 0,
    View: void 0,
    NavbarHeader: void 0,
    Form: void 0,
    PoliciesView: void 0
  });
  return {
    setters: [function (_beyondJsWidgets112Render) {
      dependency_0 = _beyondJsWidgets112Render;
    }, function (_beyondJsKernel0114Bundle) {
      dependency_1 = _beyondJsKernel0114Bundle;
    }, function (_beyondJsKernel0114Styles) {
      dependency_2 = _beyondJsKernel0114Styles;
    }, function (_react1831JsxRuntime) {
      dependency_3 = _react1831JsxRuntime;
    }, function (_beyondJsReact18Widgets118Page) {
      dependency_4 = _beyondJsReact18Widgets118Page;
    }, function (_aimpactAilearnSdk120Application) {
      dependency_5 = _aimpactAilearnSdk120Application;
    }, function (_aimpactChatSdk155Session) {
      dependency_6 = _aimpactChatSdk155Session;
    }, function (_react2) {
      dependency_7 = _react2;
    }, function (_pragmateUi108FormReactSelect) {
      dependency_8 = _pragmateUi108FormReactSelect;
    }, function (_beyondJsKernel0114Routing) {
      dependency_9 = _beyondJsKernel0114Routing;
    }, function (_pragmateUi108Components) {
      dependency_10 = _pragmateUi108Components;
    }, function (_aimpactAilearnApp070ComponentsUi) {
      dependency_11 = _aimpactAilearnApp070ComponentsUi;
    }, function (_aimpactAilearnApp070ModelWrapper) {
      dependency_12 = _aimpactAilearnApp070ModelWrapper;
    }, function (_beyondJsReact18Widgets118Hooks) {
      dependency_13 = _beyondJsReact18Widgets118Hooks;
    }, function (_pragmateUi108Image) {
      dependency_14 = _pragmateUi108Image;
    }, function (_aimpactAilearnApp070ComponentsIcons) {
      dependency_15 = _aimpactAilearnApp070ComponentsIcons;
    }, function (_pragmateUi108Form) {
      dependency_16 = _pragmateUi108Form;
    }, function (_pragmateUi108Toast) {
      dependency_17 = _pragmateUi108Toast;
    }, function (_pragmateUi108List) {
      dependency_18 = _pragmateUi108List;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.9"], ["@beyond-js/reactive", "2.1.1"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.14"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.8"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["@radix-ui/react-accordion", "1.2.12"], ["@radix-ui/react-collapsible", "1.1.12"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-select", "2.2.6"], ["@radix-ui/react-separator", "1.1.7"], ["@tiptap/extension-blockquote", "3.2.0"], ["@tiptap/extension-code-block", "3.2.0"], ["@tiptap/extension-horizontal-rule", "3.2.0"], ["@tiptap/extension-image", "3.6.2"], ["@tiptap/extension-task-item", "3.2.0"], ["@tiptap/extension-task-list", "3.2.0"], ["@tiptap/extension-underline", "3.2.0"], ["@tiptap/pm", "3.6.2"], ["@tiptap/react", "3.2.0"], ["@tiptap/starter-kit", "3.2.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-responsive-masonry", "2.7.1"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.4.0"], ["react-virtuoso", "4.14.0"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "12.0.2"], ["tippy.js", "6.3.7"], ["turndown", "7.2.0"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["yet-another-react-lightbox", "3.25.0"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/node", "20.11.0"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.7.0"], ["@aimpact/rvd", "0.7.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.7.0/pages/age",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['react/jsx-runtime', dependency_3], ['@beyond-js/react-18-widgets/page', dependency_4], ['@aimpact/ailearn-sdk/application', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['react', dependency_7], ['pragmate-ui/form/react-select', dependency_8], ['@beyond-js/kernel/routing', dependency_9], ['pragmate-ui/components', dependency_10], ['@aimpact/ailearn-app/components/ui', dependency_11], ['@aimpact/ailearn-app/model/wrapper', dependency_12], ['@beyond-js/react-18-widgets/hooks', dependency_13], ['pragmate-ui/image', dependency_14], ['@aimpact/ailearn-app/components/icons', dependency_15], ['pragmate-ui/form', dependency_16], ['pragmate-ui/toast', dependency_17], ['pragmate-ui/list', dependency_18]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-policies-page",
        "vspecifier": "@aimpact/ailearn-app@0.7.0/pages/age.widget",
        "is": "page",
        "route": "/user-validation"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.7.0/pages/age.widget');
      ims = new Map();
      /*********************************************
      INTERNAL MODULE: ./views/policies/policies.mdx
      *********************************************/
      ims.set('./views/policies/policies.mdx', {
        hash: 3258189032,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _jsxRuntime = require("react/jsx-runtime");
          /*@jsxRuntime automatic @jsxImportSource react*/

          function _createMdxContent(props) {
            const _components = Object.assign({
              h1: "h1",
              h2: "h2",
              p: "p"
            }, props.components);
            return (0, _jsxRuntime.jsxs)("main", {
              children: [(0, _jsxRuntime.jsx)(_components.h1, {
                children: "Términos y condiciones de uso"
              }), (0, _jsxRuntime.jsx)(_components.h2, {
                children: "Políticas de privacidad"
              }), (0, _jsxRuntime.jsx)(_components.p, {
                children: "Estas condiciones han sido actualizadas el 09/09/2022. Estas son las Condiciones Generales para que los usuarios de\r\nInternet accedan a los contenidos y servicios que RVD.AI (en adelante, \"RVD.AI\") pone a su disposición a través de los\r\nsitios, en adelante los “Sitios”. El usuario al dar al botón \"Leí y acepto los términos y condiciones\" en el proceso de\r\nacceso a los contenidos de los Sitios, admite haber leído las presentes"
              }), (0, _jsxRuntime.jsx)(_components.h2, {
                children: "Condiciones Generales"
              }), (0, _jsxRuntime.jsx)(_components.p, {
                children: "Expresa su adhesión plena y sin reservas a todas y cada una de ellas. Asimismo, debido a que ciertos servicios y\r\ncontenidos ofrecidos través de los Sitios pueden contener se recomienda a los usuarios tomar conocimiento específico de\r\nellas. Además de las presentes"
              }), (0, _jsxRuntime.jsx)(_components.p, {
                children: "Condiciones Generales y las normas que los complementan, existen unas condiciones de uso los sitios detalladas."
              }), (0, _jsxRuntime.jsx)(_components.h2, {
                children: "Verificación de mayoría de edad"
              }), (0, _jsxRuntime.jsx)(_components.p, {
                children: "Condiciones detalladas y las normas que los complementan, existen unas condiciones de uso los sitios detalladas en el\r\nReglamento general de lanacion.com.ar que todo usuario debe respetar y que se entenderá conocido por todos los usuarios\r\nde los Sitios."
              })]
            });
          }
          function MDXContent(props = {}) {
            const {
              wrapper: MDXLayout
            } = props.components || {};
            return MDXLayout ? (0, _jsxRuntime.jsx)(MDXLayout, Object.assign({}, props, {
              children: (0, _jsxRuntime.jsx)(_createMdxContent, props)
            })) : _createMdxContent(props);
          }
          var _default = exports.default = MDXContent;
        }
      });

      /****************************
      INTERNAL MODULE: ./controller
      ****************************/

      ims.set('./controller', {
        hash: 868967430,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _page = require("@beyond-js/react-18-widgets/page");
          var _store = require("./store");
          /*bundle*/ // import { View } from './views';
          class Controller extends _page.PageReactWidgetController {
            #store;
            createStore() {
              this.#store = new _store.StoreManager();
              return this.#store;
            }
            get Widget() {
              return View;
            }
            /**
             * this method is executed when the widget is showd
             */
            show() {}
            /**
             * this method is executed when the widget is hidden
             */
            hide() {}
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 211661893,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _application = require("@aimpact/ailearn-sdk/application");
          var _session = require("@aimpact/chat-sdk/session");
          //@ts-ignore
          class StoreManager {
            application;
            get session() {
              return _session.sessionWrapper;
            }
            get user() {
              return _session.sessionWrapper.user;
            }
            get accepted() {
              return _session.sessionWrapper.user.termsAccepted;
            }
            get ageDefined() {
              return _session.sessionWrapper.user.age > 0;
            }
            get validated() {
              return this.accepted && this.ageDefined;
            }
            constructor() {
              this.application = new _application.Application();
            }
            async validateAge(birthdate) {
              try {
                return _session.sessionWrapper.user.validate(birthdate);
              } catch (e) {
                console.error(e);
              }
            }
            async accept(birthdate) {
              try {
                return await _session.sessionWrapper.user.acceptTerms(birthdate);
              } catch (e) {
                console.error(e);
              }
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /********************************
      INTERNAL MODULE: ./views/age/date
      ********************************/

      ims.set('./views/age/date', {
        hash: 3672129423,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DateFields = DateFields;
          var _react = require("react");
          var _reactSelect = require("pragmate-ui/form/react-select");
          var _context = require("../context");
          var _useOptions = require("./use-options");
          function DateFields({
            values,
            setValues
          }) {
            const {
              texts
            } = (0, _context.useModuleContext)();
            const {
              onChange,
              years,
              days,
              months
            } = (0, _useOptions.useOptions)(values, setValues);
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_reactSelect.ReactSelect, {
              placeholder: texts.years.label,
              value: values.year,
              name: "year",
              options: years,
              onChange: onChange
            }), _react.default.createElement(_reactSelect.ReactSelect, {
              placeholder: texts.months.label,
              value: values.month,
              name: "month",
              onChange: onChange,
              options: months
            }), _react.default.createElement(_reactSelect.ReactSelect, {
              placeholder: texts.days.label,
              value: values.day,
              onChange: onChange,
              name: "day",
              options: days
            }));
          }
        }
      });

      /********************************
      INTERNAL MODULE: ./views/age/days
      ********************************/

      ims.set('./views/age/days', {
        hash: 253935214,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DaysField = DaysField;
          var _react = require("react");
          var _context = require("../context");
          function DaysField() {
            const {
              texts,
              store
            } = (0, _context.useModuleContext)();
            const [value, setValue] = _react.default.useState('');
            const onChange = event => {
              setValue(event.currentTarget.value);
            };
            const options = texts.days.items.map((item, index) => ({
              value: index + 1,
              label: item
            }));
            return _react.default.createElement(_react.default.Fragment, null);
          }
        }
      });

      /********************************
      INTERNAL MODULE: ./views/age/form
      ********************************/

      ims.set('./views/age/form', {
        hash: 2346265759,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BirthdayForm = BirthdayForm;
          var _react = require("react");
          var _context = require("../context");
          var _date = require("./date");
          var _routing = require("@beyond-js/kernel/routing");
          var _components = require("pragmate-ui/components");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _wrapper = require("@aimpact/ailearn-app/model/wrapper");
          const {
            Router
          } = _wrapper.settings;
          /*bundle*/
          function BirthdayForm() {
            const {
              texts,
              birthdate,
              store,
              setView
            } = (0, _context.useModuleContext)();
            const [values, setValues] = _react.default.useState({
              year: 2024,
              month: 1,
              day: ''
            });
            const [fetching, setFetching] = _react.default.useState(false);
            const disabled = {
              disabled: !birthdate
            };
            const onSubmit = async event => {
              try {
                setFetching(true);
                event.preventDefault();
                const valid = await store.validateAge(birthdate);
                if (valid) {
                  setView('policies');
                  return;
                }
                const previous = Router.getAndCleanPreviousUrl();
                _routing.routing.replaceState({}, null, previous?.uri ?? '/');
              } catch (e) {
                console.error(e);
              } finally {
                setFetching(false);
              }
            };
            const cls = `form-age__container vertical-center${fetching ? ' is-fetching' : ''}`;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_ui.PageContainer, {
              size: "sm",
              className: cls
            }, _react.default.createElement("div", {
              className: "form-age__container"
            }, _react.default.createElement("h1", {
              className: "text-center mb-15"
            }, texts.age.title), _react.default.createElement("form", {
              onSubmit: onSubmit
            }, _react.default.createElement("div", {
              className: "age-fields__container"
            }, _react.default.createElement(_date.DateFields, {
              values: values,
              setValues: setValues
            })), _react.default.createElement("span", null, texts.claim), _react.default.createElement("section", null, _react.default.createElement(_components.Button, {
              type: "submit",
              fetching: fetching,
              variant: "primary",
              ...disabled,
              onClick: onSubmit
            }, texts.button))))));
          }
        }
      });

      /***************************************
      INTERNAL MODULE: ./views/age/use-options
      ***************************************/

      ims.set('./views/age/use-options', {
        hash: 3946564185,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useOptions = useOptions;
          var _react = require("react");
          var _context = require("../context");
          function useOptions(values, setValues) {
            const {
              texts,
              setBirthdate
            } = (0, _context.useModuleContext)();
            _react.default.useEffect(() => {
              if (values.year && values.month && values.day) {
                setBirthdate(`${values.year}-${values.month}-${values.day}`);
              }
            }, [values]);
            const onChange = event => {
              const {
                name,
                value
              } = event.currentTarget;
              setValues(prevState => ({
                ...prevState,
                [name]: parseInt(value)
              }));
            };
            const years = _react.default.useMemo(() => {
              const currentYear = new Date().getFullYear() - 13;
              return Array.from({
                length: currentYear - 1926 + 1
              }, (_, index) => ({
                value: 1930 + index,
                label: `${1930 + index}`
              })).reverse();
            }, []); // Dependency array is empty, so this runs once
            function getTotalDays(month, year) {
              // Months in JavaScript are 0-indexed: 0 for January, 11 for December
              // Adjust the month number down by 1
              month--;
              // Create a date object for the following month, day 0 will give us the last day of the requested month
              return new Date(year, month + 1, 0).getDate();
            }
            const totalDays = getTotalDays(values.month, values.year); // 2 is for February
            const createArray = number => Array.from({
              length: number
            }, (_, i) => i + 1);
            const days = createArray(totalDays).map((item, index) => ({
              value: index + 1,
              label: item
            }));
            const months = texts.months.items.map((item, index) => ({
              value: index + 1,
              label: item
            }));
            return {
              onChange,
              years,
              months,
              days
            };
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 2862825259,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useModuleContext = exports.ModuleContext = void 0;
          var _react = require("react");
          const ModuleContext = exports.ModuleContext = _react.default.createContext({});
          const useModuleContext = () => _react.default.useContext(ModuleContext);
          exports.useModuleContext = useModuleContext;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 4120839587,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _beyond_context = require("beyond_context");
          var _components = require("pragmate-ui/components");
          var React = require("react");
          var _form = require("./age/form");
          var _context = require("./context");
          var _navbar = require("./navbar");
          var _policies = require("./policies");
          /*bundle*/
          function View({
            store
          }) {
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            const [view, setView] = React.useState(store.accepted ? 'policies' : 'birthday');
            const [birthdate, setBirthdate] = React.useState(store.user?.birthdate);
            if (!textsReady) return null;
            const value = {
              texts,
              setView,
              birthdate,
              setBirthdate,
              store
            };
            return React.createElement("div", {
              className: "logo-layout-page"
            }, React.createElement(_navbar.NavbarHeader, {
              texts: texts
            }), React.createElement(_context.ModuleContext.Provider, {
              value: value
            }, React.createElement(_components.ConditionalContainer, {
              condition: view,
              options: {
                policies: React.createElement(_policies.PoliciesView, null),
                birthday: React.createElement(_form.BirthdayForm, null)
              },
              placeholder: React.createElement(_form.BirthdayForm, null)
            })));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./views/navbar
      ******************************/

      ims.set('./views/navbar', {
        hash: 3254841974,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.NavbarHeader = NavbarHeader;
          var _image = require("pragmate-ui/image");
          var _react = require("react");
          var _session = require("@aimpact/chat-sdk/session");
          var _routing = require("@beyond-js/kernel/routing");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _wrapper = require("@aimpact/ailearn-app/model/wrapper");
          /*bundle*/
          function NavbarHeader({
            texts
          }) {
            const cls = `navbar-header`;
            const ref = _react.default.useRef();
            // const Control = BirthdayForm;
            const logout = async event => {
              event.stopPropagation();
              await _session.sessionWrapper.logout();
              _routing.routing.pushState('/');
            };
            return _react.default.createElement("header", {
              className: cls,
              ref: ref
            }, _react.default.createElement("section", {
              className: "left-section"
            }, _react.default.createElement(_image.Image, {
              src: _wrapper.settings.APP_LOGO,
              alt: _wrapper.settings.APP_NAME,
              className: "navbar-logo"
            })), _react.default.createElement("div", {
              className: "right-section"
            }, _react.default.createElement(_icons.AppIconButton, {
              icon: "exit",
              className: "circle",
              onClick: logout
            })));
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./views/policies/form
      *************************************/

      ims.set('./views/policies/form', {
        hash: 2106791470,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Form = Form;
          var _react = require("react");
          var _context = require("../context");
          var _form = require("pragmate-ui/form");
          var _toast = require("pragmate-ui/toast");
          var _components = require("pragmate-ui/components");
          var _routing = require("@beyond-js/kernel/routing");
          var _wrapper = require("@aimpact/ailearn-app/model/wrapper");
          const {
            Router
          } = _wrapper.settings;
          /*bundle*/
          function Form() {
            const {
              texts,
              store,
              birthdate
            } = (0, _context.useModuleContext)();
            const [checked, setChecked] = _react.default.useState(false);
            const [fetching, setFetching] = _react.default.useState(false);
            const disabled = {
              disabled: !checked || fetching
            };
            const onClick = event => setChecked(event.target.checked);
            // if (store.validated) return null;
            const onSubmit = async event => {
              try {
                setFetching(true);
                event.preventDefault();
                const valid = await store.user.acceptTerms(birthdate);
                if (!valid) {
                  _toast.toast.error(texts.ERROR);
                  return;
                }
                const previous = Router.getAndCleanPreviousUrl();
                _routing.routing.replaceState({}, null, previous?.uri ?? '/');
              } catch (e) {
                console.error(e);
              } finally {
                setFetching(false);
              }
            };
            return _react.default.createElement("form", {
              className: "form--in-content",
              onSubmit: onSubmit
            }, _react.default.createElement("label", {
              className: "italic flex-container flex-center flex-vertical-center"
            }, _react.default.createElement(_form.Checkbox, {
              name: "accept",
              onClick: onClick
            }), _react.default.createElement(_components.HtmlWrapper, null, texts.checkbox)), _react.default.createElement("section", {
              className: "flex-container flex-vertical-center  mt-30"
            }, _react.default.createElement(_components.Button, {
              type: "submit",
              variant: "primary",
              block: true,
              ...disabled
            }, texts.button)));
          }
        }
      });

      /**************************************
      INTERNAL MODULE: ./views/policies/index
      **************************************/

      ims.set('./views/policies/index', {
        hash: 1130267200,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PoliciesView = PoliciesView;
          var React = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _components = require("pragmate-ui/components");
          var _context = require("../context");
          var _form = require("./form");
          /*bundle*/
          function PoliciesView() {
            const {
              texts
            } = (0, _context.useModuleContext)();
            return React.createElement(React.Fragment, null, React.createElement(_ui.PageContainer, {
              size: "sm",
              className: "page-article-container vertical-center text-center"
            }, React.createElement("h1", null, texts.terms.title), React.createElement("p", null, React.createElement(_components.HtmlWrapper, null, texts.terms.claim)), React.createElement("p", null, texts.terms.conclusion, ' ', React.createElement(_components.Link, {
              target: "_blank",
              href: "/terms-and-conditions"
            }, texts.terms.links.terms), ' ', texts.terms.postConclusion, ' ', React.createElement(_components.Link, {
              target: "_blank",
              href: "/privacy"
            }, texts.terms.links.privacy)), React.createElement(_form.Form, null)));
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./views/policies/menu
      *************************************/

      ims.set('./views/policies/menu', {
        hash: 1571562254,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AsideMenu = AsideMenu;
          var _react = require("react");
          var _list = require("pragmate-ui/list");
          var _context = require("../context");
          function AsideMenu() {
            const {
              texts
            } = (0, _context.useModuleContext)();
            const items = Object.keys(texts.menu).map(key => texts.menu[key]);
            const Item = ({
              item
            }) => _react.default.createElement("li", null, item);
            console.log(items, texts);
            return _react.default.createElement("aside", null, _react.default.createElement(_list.List, {
              items: items,
              control: Item
            }));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./views/age/form",
        "from": "BirthdayForm",
        "name": "BirthdayForm"
      }, {
        "im": "./views/index",
        "from": "View",
        "name": "View"
      }, {
        "im": "./views/navbar",
        "from": "NavbarHeader",
        "name": "NavbarHeader"
      }, {
        "im": "./views/policies/form",
        "from": "Form",
        "name": "Form"
      }, {
        "im": "./views/policies/index",
        "from": "PoliciesView",
        "name": "PoliciesView"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'BirthdayForm') && _export("BirthdayForm", BirthdayForm = require ? require('./views/age/form').BirthdayForm : value);
        (require || prop === 'View') && _export("View", View = require ? require('./views/index').View : value);
        (require || prop === 'NavbarHeader') && _export("NavbarHeader", NavbarHeader = require ? require('./views/navbar').NavbarHeader : value);
        (require || prop === 'Form') && _export("Form", Form = require ? require('./views/policies/form').Form : value);
        (require || prop === 'PoliciesView') && _export("PoliciesView", PoliciesView = require ? require('./views/policies/index').PoliciesView : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImhpZGUiLCJleHBvcnRzIiwiX2FwcGxpY2F0aW9uIiwiX3Nlc3Npb24iLCJhcHBsaWNhdGlvbiIsInNlc3Npb24iLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJhY2NlcHRlZCIsInRlcm1zQWNjZXB0ZWQiLCJhZ2VEZWZpbmVkIiwiYWdlIiwidmFsaWRhdGVkIiwiY29uc3RydWN0b3IiLCJBcHBsaWNhdGlvbiIsInZhbGlkYXRlQWdlIiwiYmlydGhkYXRlIiwidmFsaWRhdGUiLCJlIiwiY29uc29sZSIsImVycm9yIiwiYWNjZXB0IiwiYWNjZXB0VGVybXMiLCJfcmVhY3QiLCJfcmVhY3RTZWxlY3QiLCJfY29udGV4dCIsIl91c2VPcHRpb25zIiwiRGF0ZUZpZWxkcyIsInZhbHVlcyIsInNldFZhbHVlcyIsInRleHRzIiwidXNlTW9kdWxlQ29udGV4dCIsIm9uQ2hhbmdlIiwieWVhcnMiLCJkYXlzIiwibW9udGhzIiwidXNlT3B0aW9ucyIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJSZWFjdFNlbGVjdCIsInBsYWNlaG9sZGVyIiwibGFiZWwiLCJ2YWx1ZSIsInllYXIiLCJuYW1lIiwib3B0aW9ucyIsIm1vbnRoIiwiZGF5IiwiRGF5c0ZpZWxkIiwic2V0VmFsdWUiLCJ1c2VTdGF0ZSIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsIml0ZW1zIiwibWFwIiwiaXRlbSIsImluZGV4IiwiX2RhdGUiLCJfcm91dGluZyIsIl9jb21wb25lbnRzIiwiX3VpIiwiX3dyYXBwZXIiLCJSb3V0ZXIiLCJzZXR0aW5ncyIsIkJpcnRoZGF5Rm9ybSIsInNldFZpZXciLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwiZGlzYWJsZWQiLCJvblN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwidmFsaWQiLCJwcmV2aW91cyIsImdldEFuZENsZWFuUHJldmlvdXNVcmwiLCJyb3V0aW5nIiwicmVwbGFjZVN0YXRlIiwidXJpIiwiY2xzIiwiUGFnZUNvbnRhaW5lciIsInNpemUiLCJjbGFzc05hbWUiLCJ0aXRsZSIsImNsYWltIiwiQnV0dG9uIiwidHlwZSIsInZhcmlhbnQiLCJvbkNsaWNrIiwiYnV0dG9uIiwic2V0QmlydGhkYXRlIiwidXNlRWZmZWN0IiwicHJldlN0YXRlIiwicGFyc2VJbnQiLCJ1c2VNZW1vIiwiY3VycmVudFllYXIiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJBcnJheSIsImZyb20iLCJsZW5ndGgiLCJfIiwicmV2ZXJzZSIsImdldFRvdGFsRGF5cyIsImdldERhdGUiLCJ0b3RhbERheXMiLCJjcmVhdGVBcnJheSIsIm51bWJlciIsImkiLCJNb2R1bGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfaG9va3MiLCJfYmV5b25kX2NvbnRleHQiLCJSZWFjdCIsIl9mb3JtIiwiX25hdmJhciIsIl9wb2xpY2llcyIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInZpZXciLCJOYXZiYXJIZWFkZXIiLCJQcm92aWRlciIsIkNvbmRpdGlvbmFsQ29udGFpbmVyIiwiY29uZGl0aW9uIiwicG9saWNpZXMiLCJQb2xpY2llc1ZpZXciLCJiaXJ0aGRheSIsIl9pbWFnZSIsIl9pY29ucyIsInJlZiIsInVzZVJlZiIsImxvZ291dCIsInN0b3BQcm9wYWdhdGlvbiIsInB1c2hTdGF0ZSIsIkltYWdlIiwic3JjIiwiQVBQX0xPR08iLCJhbHQiLCJBUFBfTkFNRSIsIkFwcEljb25CdXR0b24iLCJpY29uIiwiX3RvYXN0IiwiRm9ybSIsImNoZWNrZWQiLCJzZXRDaGVja2VkIiwidGFyZ2V0IiwidG9hc3QiLCJFUlJPUiIsIkNoZWNrYm94IiwiSHRtbFdyYXBwZXIiLCJjaGVja2JveCIsImJsb2NrIiwidGVybXMiLCJjb25jbHVzaW9uIiwiTGluayIsImhyZWYiLCJsaW5rcyIsInBvc3RDb25jbHVzaW9uIiwicHJpdmFjeSIsIl9saXN0IiwiQXNpZGVNZW51IiwiT2JqZWN0Iiwia2V5cyIsIm1lbnUiLCJrZXkiLCJJdGVtIiwibG9nIiwiTGlzdCIsImNvbnRyb2wiXSwic291cmNlcyI6WyIvdHMvdmlld3MvcG9saWNpZXMvdmlld3NcXHBvbGljaWVzXFxwb2xpY2llcy5tZHgiLCIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9hZ2UvZGF0ZS50c3giLCIvdHMvdmlld3MvYWdlL2RheXMudHN4IiwiL3RzL3ZpZXdzL2FnZS9mb3JtLnRzeCIsIi90cy92aWV3cy9hZ2UvdXNlLW9wdGlvbnMudHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL25hdmJhci50c3giLCIvdHMvdmlld3MvcG9saWNpZXMvZm9ybS50c3giLCIvdHMvdmlld3MvcG9saWNpZXMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3BvbGljaWVzL21lbnUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUVFOzswQkFFQzs7MEJBRUg7OzBCQUtHOzswQkFFSDs7MEJBSUE7OzBCQUVHOzswQkFFSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNyQkEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBSU8sV0FGUDtVQUVpQixNQUNYRSxVQUFXLFNBQVFILEtBQUEsQ0FB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