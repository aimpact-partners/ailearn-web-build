System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0/jsx-runtime", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-sdk@1.0.0/application", "@aimpact/chat-sdk@1.0.0/session", "react@18.2.0", "pragmate-ui@0.1.1/form/react-select", "pragmate-ui@0.1.1/form", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@0.1.1/components", "@aimpact/ailearn-app@0.0.32-dev.44/components/ui", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.1.1/toast", "pragmate-ui@0.1.1/list"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, bimport, __Bundle, __pkg, ims, Controller, BirthdayForm, View, Form, PoliciesView, __beyond_pkg, hmr;
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
    }, function (_aimpactChatSdk100Session) {
      dependency_6 = _aimpactChatSdk100Session;
    }, function (_react2) {
      dependency_7 = _react2;
    }, function (_pragmateUi011FormReactSelect) {
      dependency_8 = _pragmateUi011FormReactSelect;
    }, function (_pragmateUi011Form) {
      dependency_9 = _pragmateUi011Form;
    }, function (_beyondJsKernel019Routing) {
      dependency_10 = _beyondJsKernel019Routing;
    }, function (_pragmateUi011Components) {
      dependency_11 = _pragmateUi011Components;
    }, function (_aimpactAilearnApp0032Dev44ComponentsUi) {
      dependency_12 = _aimpactAilearnApp0032Dev44ComponentsUi;
    }, function (_aimpactChat101SharedHooks) {
      dependency_13 = _aimpactChat101SharedHooks;
    }, function (_pragmateUi011Toast) {
      dependency_14 = _pragmateUi011Toast;
    }, function (_pragmateUi011List) {
      dependency_15 = _pragmateUi011List;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/http-suite", "1.0.3"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/react-18-widgets", "1.1.2"], ["pragmate-ui", "0.1.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["apexcharts", "3.48.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["react-select", "5.8.0"], ["react-is", "16.13.1"], ["swiper", "8.4.7"], ["@firebase/auth", "1.6.2"], ["firebase", "10.9.0"], ["firebase-admin", "11.11.1"], ["@aimpact/ailearn-app", "0.0.32-dev.44"], ["@aimpact/ailearn-app", "0.0.32-dev.44"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.32-dev.44/pages/age",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['react/jsx-runtime', dependency_3], ['@beyond-js/react-18-widgets/page', dependency_4], ['@aimpact/ailearn-sdk/application', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['react', dependency_7], ['pragmate-ui/form/react-select', dependency_8], ['pragmate-ui/form', dependency_9], ['@beyond-js/kernel/routing', dependency_10], ['pragmate-ui/components', dependency_11], ['@aimpact/ailearn-app/components/ui', dependency_12], ['@aimpact/chat/shared/hooks', dependency_13], ['pragmate-ui/toast', dependency_14], ['pragmate-ui/list', dependency_15]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-policies-page",
        "vspecifier": "@aimpact/ailearn-app@0.0.32-dev.44/pages/age.widget",
        "is": "page",
        "route": "/user-validation"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.32-dev.44/pages/age.widget');
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
        hash: 3861743364,
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
                return await _session.sessionWrapper.user.validate(birthdate);
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
        hash: 1137860335,
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
                _routing.routing.pushState('/');
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
        hash: 3251310977,
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
        hash: 1594483876,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var React = require("react");
          var _context = require("./context");
          var _hooks = require("@aimpact/chat/shared/hooks");
          var _beyond_context = require("beyond_context");
          var _policies = require("./policies");
          var _form = require("./age/form");
          /*bundle*/
          function View({
            store
          }) {
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            const [view, setView] = React.useState(store.accepted ? 'policies' : 'birthday');
            const [birthdate, setBirthdate] = React.useState(null);
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
        hash: 719735052,
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
        hash: 628096821,
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
              href: "/app/terms"
            }, texts.terms.links.terms), ' ', texts.terms.postConclusion, ' ', React.createElement(_components.Link, {
              target: "_blank",
              href: "/app/privacy"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImhpZGUiLCJleHBvcnRzIiwiX2FwcGxpY2F0aW9uIiwiX3Nlc3Npb24iLCJhcHBsaWNhdGlvbiIsInNlc3Npb24iLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJhY2NlcHRlZCIsInRlcm1zQWNjZXB0ZWQiLCJhZ2VEZWZpbmVkIiwiYWdlIiwidmFsaWRhdGVkIiwiY29uc3RydWN0b3IiLCJBcHBsaWNhdGlvbiIsImdsb2JhbFRoaXMiLCJ2YWxpZGF0ZUFnZSIsImJpcnRoZGF0ZSIsInZhbGlkYXRlIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsImFjY2VwdCIsImFjY2VwdFRlcm1zIiwiX3JlYWN0IiwiX3JlYWN0U2VsZWN0IiwiX2NvbnRleHQiLCJfdXNlT3B0aW9ucyIsIkRhdGVGaWVsZHMiLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJ0ZXh0cyIsInVzZU1vZHVsZUNvbnRleHQiLCJvbkNoYW5nZSIsInllYXJzIiwiZGF5cyIsIm1vbnRocyIsInVzZU9wdGlvbnMiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiUmVhY3RTZWxlY3QiLCJwbGFjZWhvbGRlciIsImxhYmVsIiwidmFsdWUiLCJ5ZWFyIiwibmFtZSIsIm9wdGlvbnMiLCJtb250aCIsImRheSIsIkRheXNGaWVsZCIsInNldFZhbHVlIiwidXNlU3RhdGUiLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJpdGVtcyIsIm1hcCIsIml0ZW0iLCJpbmRleCIsIl9kYXRlIiwiX3JvdXRpbmciLCJfY29tcG9uZW50cyIsIl91aSIsIkJpcnRoZGF5Rm9ybSIsInNldFZpZXciLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwiZGlzYWJsZWQiLCJvblN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwidmFsaWQiLCJyb3V0aW5nIiwicHVzaFN0YXRlIiwiY2xzIiwiUGFnZUNvbnRhaW5lciIsInNpemUiLCJjbGFzc05hbWUiLCJ0aXRsZSIsImNsYWltIiwiQnV0dG9uIiwidHlwZSIsInZhcmlhbnQiLCJvbkNsaWNrIiwiYnV0dG9uIiwic2V0QmlydGhkYXRlIiwidXNlRWZmZWN0IiwicHJldlN0YXRlIiwicGFyc2VJbnQiLCJ1c2VNZW1vIiwiY3VycmVudFllYXIiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJBcnJheSIsImZyb20iLCJsZW5ndGgiLCJfIiwicmV2ZXJzZSIsImdldFRvdGFsRGF5cyIsImdldERhdGUiLCJ0b3RhbERheXMiLCJjcmVhdGVBcnJheSIsIm51bWJlciIsImkiLCJNb2R1bGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJSZWFjdCIsIl9ob29rcyIsIl9iZXlvbmRfY29udGV4dCIsIl9wb2xpY2llcyIsIl9mb3JtIiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidmlldyIsIlZpZXdzIiwicG9saWNpZXMiLCJQb2xpY2llc1ZpZXciLCJiaXJ0aGRheSIsIkNvbnRyb2wiLCJQcm92aWRlciIsIl90b2FzdCIsIkZvcm0iLCJjaGVja2VkIiwic2V0Q2hlY2tlZCIsInRhcmdldCIsInRvYXN0IiwiRVJST1IiLCJyZXBsYWNlU3RhdGUiLCJDaGVja2JveCIsIkh0bWxXcmFwcGVyIiwiY2hlY2tib3giLCJibG9jayIsInRlcm1zIiwiY29uY2x1c2lvbiIsIkxpbmsiLCJocmVmIiwibGlua3MiLCJwb3N0Q29uY2x1c2lvbiIsInByaXZhY3kiLCJfbGlzdCIsIkFzaWRlTWVudSIsIk9iamVjdCIsImtleXMiLCJtZW51Iiwia2V5IiwiSXRlbSIsImxvZyIsIkxpc3QiLCJjb250cm9sIl0sInNvdXJjZXMiOlsiL3RzL3ZpZXdzL3BvbGljaWVzL3ZpZXdzXFxwb2xpY2llc1xccG9saWNpZXMubWR4IiwiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvYWdlL2RhdGUudHN4IiwiL3RzL3ZpZXdzL2FnZS9kYXlzLnRzeCIsIi90cy92aWV3cy9hZ2UvZm9ybS50c3giLCIvdHMvdmlld3MvYWdlL3VzZS1vcHRpb25zLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9wb2xpY2llcy9mb3JtLnRzeCIsIi90cy92aWV3cy9wb2xpY2llcy9pbmRleC50c3giLCIvdHMvdmlld3MvcG9saWNpZXMvbWVudS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBRUU7OzBCQUVDOzswQkFFSDs7MEJBS0c7OzBCQUVIOzswQkFJQTs7MEJBRUc7OzBCQUVIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3JCQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFFQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJSixNQUFBLENBQUFNLFlBQVksRUFBRTtjQUNoQyxPQUFxQixJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNqQztZQUNBLElBQUlHLE1BQU1BLENBQUE7Y0FDVCxPQUFPTixNQUFBLENBQUFPLElBQUk7WUFDWjtZQUVBOzs7WUFHQUMsSUFBSUEsQ0FBQSxHQUFJO1lBRVI7OztZ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QUMzQyxFQUNKNEIsS0FBQSxDQUFBbkUsYUFBQSxZQUNFUixLQUFLLENBQUN1RyxLQUFLLENBQUNDLFVBQVUsRUFBRSxHQUFHLEVBQzVCN0IsS0FBQSxDQUFBbkUsYUFBQSxDQUFDc0IsV0FBQSxDQUFBMkUsSUFBSTtjQUFDVixNQUFNLEVBQUMsUUFBUTtjQUFDVyxJQUFJLEVBQUM7WUFBWSxHQUNyQzFHLEtBQUssQ0FBQ3VHLEtBQUssQ0FBQ0ksS0FBSyxDQUFDSixLQUFLLENBQ2xCLEVBQUMsR0FBRyxFQUNWdkcsS0FBSyxDQUFDdUcsS0FBSyxDQUFDSyxjQUFjLEVBQUUsR0FBRyxFQUNoQ2pDLEtBQUEsQ0FBQW5FLGFBQUEsQ0FBQ3NCLFdBQUEsQ0FBQTJFLElBQUk7Y0FBQ1YsTUFBTSxFQUFDLFFBQVE7Y0FBQ1csSUFBSSxFQUFDO1lBQWMsR0FDdkMxRyxLQUFLLENBQUN1RyxLQUFLLENBQUNJLEtBQUssQ0FBQ0UsT0FBTyxDQUNwQixDQUNKLEVBQ0psQyxLQUFBLENBQUFuRSxhQUFBLENBQUN1RSxLQUFBLENBQUFhLElBQUksT0FBRyxDQUNGLENBQ1EsQ0FDZDtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3JDQSxJQUFBbkcsTUFBQSxHQUFBbkMsT0FBQTtVQUNBLElBQUF3SixLQUFBLEdBQUF4SixPQUFBO1VBQ0EsSUFBQXFDLFFBQUEsR0FBQXJDLE9BQUE7VUFDTSxTQUFVeUosU0FBU0EsQ0FBQTtZQUN4QixNQUFNO2NBQUUvRztZQUFLLENBQUUsR0FBRyxJQUFBTCxRQUFBLENBQUFNLGdCQUFnQixHQUFFO1lBQ3BDLE1BQU11QixLQUFLLEdBQUd3RixNQUFNLENBQUNDLElBQUksQ0FBQ2pILEtBQUssQ0FBQ2tILElBQUksQ0FBQyxDQUFDekYsR0FBRyxDQUFDMEYsR0FBRyxJQUFJbkgsS0FBSyxDQUFDa0gsSUFBSSxDQUFDQyxHQUFHLENBQUMsQ0FBQztZQUNqRSxNQUFNQyxJQUFJLEdBQUdBLENBQUM7Y0FBRTFGO1lBQUksQ0FBRSxLQUFLakMsTUFBQSxDQUFBYyxPQUFBLENBQUFDLGFBQUEsYUFBS2tCLElBQUksQ0FBTTtZQUMxQ3JDLE9BQU8sQ0FBQ2dJLEdBQUcsQ0FBQzdGLEtBQUssRUFBRXhCLEtBQUssQ0FBQztZQUN6QixPQUNDUCxNQUFBLENBQUFjLE9BQUEsQ0FBQUMsYUFBQSxnQkFFQ2YsTUFBQSxDQUFBYyxPQUFBLENBQUFDLGFBQUEsQ0FBQ3NHLEtBQUEsQ0FBQVEsSUFBSTtjQUFDOUYsS0FBSyxFQUFFQSxLQUFLO2NBQUUrRixPQUFPLEVBQUVIO1lBQUksRUFBSSxDQUM5QjtVQUVWIiwiaWdub3JlTGlzdCI6W119