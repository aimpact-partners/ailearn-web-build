System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0/jsx-runtime", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-sdk@1.0.0/application", "@aimpact/chat-sdk@1.1.0/session", "react@18.2.0", "pragmate-ui@1.0.0-beta.2/form/react-select", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@1.0.0-beta.2/components", "@aimpact/ailearn-app@0.1.6-dev.14/components/ui", "@aimpact/ailearn-app/start", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.2/form", "pragmate-ui@1.0.0-beta.2/toast", "pragmate-ui@1.0.0-beta.2/list"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, bimport, __Bundle, __pkg, ims, Controller, BirthdayForm, View, Form, PoliciesView, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    BirthdayForm: void 0,
    View: void 0,
    Form: void 0,
    PoliciesView: void 0
  });
  return {
    setters: [function (_beyondJsWidgets110Render) {
      dependency_0 = _beyondJsWidgets110Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_react1820JsxRuntime) {
      dependency_3 = _react1820JsxRuntime;
    }, function (_beyondJsReact18Widgets112Page) {
      dependency_4 = _beyondJsReact18Widgets112Page;
    }, function (_aimpactAilearnSdk100Application) {
      dependency_5 = _aimpactAilearnSdk100Application;
    }, function (_aimpactChatSdk110Session) {
      dependency_6 = _aimpactChatSdk110Session;
    }, function (_react2) {
      dependency_7 = _react2;
    }, function (_pragmateUi100Beta2FormReactSelect) {
      dependency_8 = _pragmateUi100Beta2FormReactSelect;
    }, function (_beyondJsKernel019Routing) {
      dependency_9 = _beyondJsKernel019Routing;
    }, function (_pragmateUi100Beta2Components) {
      dependency_10 = _pragmateUi100Beta2Components;
    }, function (_aimpactAilearnApp016Dev14ComponentsUi) {
      dependency_11 = _aimpactAilearnApp016Dev14ComponentsUi;
    }, function (_aimpactAilearnAppStart) {
      dependency_12 = _aimpactAilearnAppStart;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_13 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi100Beta2Form) {
      dependency_14 = _pragmateUi100Beta2Form;
    }, function (_pragmateUi100Beta2Toast) {
      dependency_15 = _pragmateUi100Beta2Toast;
    }, function (_pragmateUi100Beta2List) {
      dependency_16 = _pragmateUi100Beta2List;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", null], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.1.0"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.2"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.6.0"], ["markdown-it", "14.1.0"], ["markdown-it-katex", "2.0.3"], ["markdown-it-math", "4.1.1"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prism-themes", "1.9.0"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["react-katex", "3.0.1"], ["react-syntax-highlighter", "15.5.0"], ["simplebar-react", "3.2.6"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["wavesurfer.js", "7.8.4"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.1.6-dev.14"], ["@aimpact/ailearn-app", "0.1.6-dev.14"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.14/pages/age",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['react/jsx-runtime', dependency_3], ['@beyond-js/react-18-widgets/page', dependency_4], ['@aimpact/ailearn-sdk/application', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['react', dependency_7], ['pragmate-ui/form/react-select', dependency_8], ['@beyond-js/kernel/routing', dependency_9], ['pragmate-ui/components', dependency_10], ['@aimpact/ailearn-app/components/ui', dependency_11], ['@aimpact/ailearn-app/routing', dependency_12], ['@beyond-js/react-18-widgets/hooks', dependency_13], ['pragmate-ui/form', dependency_14], ['pragmate-ui/toast', dependency_15], ['pragmate-ui/list', dependency_16]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-policies-page",
        "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.14/pages/age.widget",
        "is": "page",
        "route": "/user-validation"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.6-dev.14/pages/age.widget');
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
        hash: 990578470,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _page = require("@beyond-js/react-18-widgets/page");
          var _store = require("./store");
          var _views = require("./views");
          /*bundle*/
          class Controller extends _page.PageReactWidgetController {
            #store;
            createStore() {
              this.#store = new _store.StoreManager();
              return this.#store;
            }
            get Widget() {
              return _views.View;
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
        hash: 2770161993,
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
              globalThis.store = this;
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
        hash: 3764882451,
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
          var _routing2 = require("@aimpact/ailearn-app/routing");
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
                const previous = _routing2.Router.getAndCleanPreviousUrl();
                _routing.routing.pushState(previous?.uri ?? '/');
              } catch (e) {
                console.error(e);
              } finally {
                setFetching(false);
              }
            };
            const cls = `form-age__container${fetching ? ' is-fetching' : ''}`;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_ui.PageContainer, {
              size: "sm",
              className: cls
            }, _react.default.createElement("div", {
              className: "form-age__container"
            }, _react.default.createElement("h1", null, texts.age.title), _react.default.createElement("form", {
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
        hash: 122770884,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var React = require("react");
          var _context = require("./context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _beyond_context = require("beyond_context");
          var _policies = require("./policies");
          var _form = require("./age/form");
          /*bundle*/
          function View({
            store
          }) {
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            const [view, setView] = React.useState(store.accepted ? 'policies' : 'birthday');
            const [birthdate, setBirthdate] = React.useState(store.user?.birthdate);
            if (!textsReady) return null;
            const Views = {
              policies: _policies.PoliciesView,
              birthday: _form.BirthdayForm
            };
            const value = {
              texts,
              setView,
              birthdate,
              setBirthdate,
              store
            };
            const Control = Views[view];
            // const Control = BirthdayForm;
            return React.createElement(_context.ModuleContext.Provider, {
              value: value
            }, React.createElement(Control, null));
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./views/policies/form
      *************************************/

      ims.set('./views/policies/form', {
        hash: 1147934487,
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
          var _routing2 = require("@aimpact/ailearn-app/routing");
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
                _routing2.Router.getAndCleanPreviousUrl();
                _routing.routing.replaceState({}, null, '/');
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
        hash: 631824728,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PoliciesView = PoliciesView;
          var React = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _form = require("./form");
          var _components = require("pragmate-ui/components");
          var _context = require("../context");
          /*bundle*/
          function PoliciesView() {
            const {
              texts
            } = (0, _context.useModuleContext)();
            return React.createElement(React.Fragment, null, React.createElement(_ui.PageContainer, {
              size: "sm",
              className: "page-article-container"
            }, React.createElement("main", null, React.createElement("h1", null, texts.terms.title), React.createElement("p", null, React.createElement(_components.HtmlWrapper, null, texts.terms.claim)), React.createElement("p", null, texts.terms.conclusion, ' ', React.createElement(_components.Link, {
              target: "_blank",
              href: "/terms-and-conditions"
            }, texts.terms.links.terms), ' ', texts.terms.postConclusion, ' ', React.createElement(_components.Link, {
              target: "_blank",
              href: "/privacy"
            }, texts.terms.links.privacy)), React.createElement(_form.Form, null))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImhpZGUiLCJleHBvcnRzIiwiX2FwcGxpY2F0aW9uIiwiX3Nlc3Npb24iLCJhcHBsaWNhdGlvbiIsInNlc3Npb24iLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJhY2NlcHRlZCIsInRlcm1zQWNjZXB0ZWQiLCJhZ2VEZWZpbmVkIiwiYWdlIiwidmFsaWRhdGVkIiwiY29uc3RydWN0b3IiLCJBcHBsaWNhdGlvbiIsImdsb2JhbFRoaXMiLCJ2YWxpZGF0ZUFnZSIsImJpcnRoZGF0ZSIsInZhbGlkYXRlIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsImFjY2VwdCIsImFjY2VwdFRlcm1zIiwiX3JlYWN0IiwiX3JlYWN0U2VsZWN0IiwiX2NvbnRleHQiLCJfdXNlT3B0aW9ucyIsIkRhdGVGaWVsZHMiLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJ0ZXh0cyIsInVzZU1vZHVsZUNvbnRleHQiLCJvbkNoYW5nZSIsInllYXJzIiwiZGF5cyIsIm1vbnRocyIsInVzZU9wdGlvbnMiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiUmVhY3RTZWxlY3QiLCJwbGFjZWhvbGRlciIsImxhYmVsIiwidmFsdWUiLCJ5ZWFyIiwibmFtZSIsIm9wdGlvbnMiLCJtb250aCIsImRheSIsIkRheXNGaWVsZCIsInNldFZhbHVlIiwidXNlU3RhdGUiLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJpdGVtcyIsIm1hcCIsIml0ZW0iLCJpbmRleCIsIl9kYXRlIiwiX3JvdXRpbmciLCJfY29tcG9uZW50cyIsIl91aSIsIl9yb3V0aW5nMiIsIkJpcnRoZGF5Rm9ybSIsInNldFZpZXciLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwiZGlzYWJsZWQiLCJvblN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwidmFsaWQiLCJwcmV2aW91cyIsIlJvdXRlciIsImdldEFuZENsZWFuUHJldmlvdXNVcmwiLCJyb3V0aW5nIiwicHVzaFN0YXRlIiwidXJpIiwiY2xzIiwiUGFnZUNvbnRhaW5lciIsInNpemUiLCJjbGFzc05hbWUiLCJ0aXRsZSIsImNsYWltIiwiQnV0dG9uIiwidHlwZSIsInZhcmlhbnQiLCJvbkNsaWNrIiwiYnV0dG9uIiwic2V0QmlydGhkYXRlIiwidXNlRWZmZWN0IiwicHJldlN0YXRlIiwicGFyc2VJbnQiLCJ1c2VNZW1vIiwiY3VycmVudFllYXIiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJBcnJheSIsImZyb20iLCJsZW5ndGgiLCJfIiwicmV2ZXJzZSIsImdldFRvdGFsRGF5cyIsImdldERhdGUiLCJ0b3RhbERheXMiLCJjcmVhdGVBcnJheSIsIm51bWJlciIsImkiLCJNb2R1bGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJSZWFjdCIsIl9ob29rcyIsIl9iZXlvbmRfY29udGV4dCIsIl9wb2xpY2llcyIsIl9mb3JtIiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidmlldyIsIlZpZXdzIiwicG9saWNpZXMiLCJQb2xpY2llc1ZpZXciLCJiaXJ0aGRheSIsIkNvbnRyb2wiLCJQcm92aWRlciIsIl90b2FzdCIsIkZvcm0iLCJjaGVja2VkIiwic2V0Q2hlY2tlZCIsInRhcmdldCIsInRvYXN0IiwiRVJST1IiLCJyZXBsYWNlU3RhdGUiLCJDaGVja2JveCIsIkh0bWxXcmFwcGVyIiwiY2hlY2tib3giLCJibG9jayIsInRlcm1zIiwiY29uY2x1c2lvbiIsIkxpbmsiLCJocmVmIiwibGlua3MiLCJwb3N0Q29uY2x1c2lvbiIsInByaXZhY3kiLCJfbGlzdCIsIkFzaWRlTWVudSIsIk9iamVjdCIsImtleXMiLCJtZW51Iiwia2V5IiwiSXRlbSIsImxvZyIsIkxpc3QiLCJjb250cm9sIl0sInNvdXJjZXMiOlsiL3RzL3ZpZXdzL3BvbGljaWVzL3ZpZXdzXFxwb2xpY2llc1xccG9saWNpZXMubWR4IiwiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvYWdlL2RhdGUudHN4IiwiL3RzL3ZpZXdzL2FnZS9kYXlzLnRzeCIsIi90cy92aWV3cy9hZ2UvZm9ybS50c3giLCIvdHMvdmlld3MvYWdlL3VzZS1vcHRpb25zLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9wb2xpY2llcy9mb3JtLnRzeCIsIi90cy92aWV3cy9wb2xpY2llcy9pbmRleC50c3giLCIvdHMvdmlld3MvcG9saWNpZXMvbWVudS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFFRTs7MEJBRUM7OzBCQUVIOzswQkFLRzs7MEJBRUg7OzBCQUlBOzswQkFFRzs7MEJBRUg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDckJBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUVBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlKLE1BQUEsQ0FBQU0sWUFBWSxFQUFFO2NBQ2hDLE9BQXFCLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ2pDO1lBQ0EsSUFBSUcsTUFBTUEsQ0FBQTtjQUNU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