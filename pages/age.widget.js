System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0/jsx-runtime", "@beyond-js/react-18-widgets@1.1.1/page", "@aimpact/ailearn-sdk@1.0.0/application", "@aimpact/chat-sdk@1.0.0/session", "react@18.2.0", "pragmate-ui@0.0.6/form/react-select", "pragmate-ui@0.0.6/form", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@0.0.6/components", "@aimpact/ailearn-app@0.0.27/components/ui", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.0.6/toast", "pragmate-ui@0.0.6/list"], function (_export, _context2) {
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
    }, function (_beyondJsReact18Widgets111Page) {
      dependency_4 = _beyondJsReact18Widgets111Page;
    }, function (_aimpactAilearnSdk100Application) {
      dependency_5 = _aimpactAilearnSdk100Application;
    }, function (_aimpactChatSdk100Session) {
      dependency_6 = _aimpactChatSdk100Session;
    }, function (_react2) {
      dependency_7 = _react2;
    }, function (_pragmateUi006FormReactSelect) {
      dependency_8 = _pragmateUi006FormReactSelect;
    }, function (_pragmateUi006Form) {
      dependency_9 = _pragmateUi006Form;
    }, function (_beyondJsKernel019Routing) {
      dependency_10 = _beyondJsKernel019Routing;
    }, function (_pragmateUi006Components) {
      dependency_11 = _pragmateUi006Components;
    }, function (_aimpactAilearnApp0027ComponentsUi) {
      dependency_12 = _aimpactAilearnApp0027ComponentsUi;
    }, function (_aimpactChat101SharedHooks) {
      dependency_13 = _aimpactChat101SharedHooks;
    }, function (_pragmateUi006Toast) {
      dependency_14 = _pragmateUi006Toast;
    }, function (_pragmateUi006List) {
      dependency_15 = _pragmateUi006List;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/http-suite", "1.0.5"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.11"], ["pragmate-ui", "0.0.6"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.1.1"], ["apexcharts", "3.48.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["firebase", "10.9.0"], ["firebase-admin", "11.11.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["@aimpact/ailearn-app", "0.0.27"], ["@aimpact/ailearn-app", "0.0.27"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.27/pages/age",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['react/jsx-runtime', dependency_3], ['@beyond-js/react-18-widgets/page', dependency_4], ['@aimpact/ailearn-sdk/application', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['react', dependency_7], ['pragmate-ui/form/react-select', dependency_8], ['pragmate-ui/form', dependency_9], ['@beyond-js/kernel/routing', dependency_10], ['pragmate-ui/components', dependency_11], ['@aimpact/ailearn-app/components/ui', dependency_12], ['@aimpact/chat/shared/hooks', dependency_13], ['pragmate-ui/toast', dependency_14], ['pragmate-ui/list', dependency_15]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-policies-page",
        "vspecifier": "@aimpact/ailearn-app@0.0.27/pages/age.widget",
        "is": "page",
        "route": "/user-validation"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.27/pages/age.widget');
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
        hash: 3716725831,
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
              const currentYear = new Date().getFullYear();
              return Array.from({
                length: currentYear - 1900 + 1
              }, (_, index) => ({
                value: 1900 + index,
                label: `${1900 + index}`
              }));
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
        hash: 2798908830,
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
            const [view, setView] = React.useState(store.acceptede ? 'policies' : 'birthday');
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
            // const Control = PoliciesView;
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
        hash: 226849615,
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
                console.log(20, valid);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImhpZGUiLCJleHBvcnRzIiwiX2FwcGxpY2F0aW9uIiwiX3Nlc3Npb24iLCJhcHBsaWNhdGlvbiIsInNlc3Npb24iLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJhY2NlcHRlZCIsInRlcm1zQWNjZXB0ZWQiLCJhZ2VEZWZpbmVkIiwiYWdlIiwidmFsaWRhdGVkIiwiY29uc3RydWN0b3IiLCJBcHBsaWNhdGlvbiIsImdsb2JhbFRoaXMiLCJ2YWxpZGF0ZUFnZSIsImJpcnRoZGF0ZSIsInZhbGlkYXRlIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsImFjY2VwdCIsImFjY2VwdFRlcm1zIiwiX3JlYWN0IiwiX3JlYWN0U2VsZWN0IiwiX2NvbnRleHQiLCJfdXNlT3B0aW9ucyIsIkRhdGVGaWVsZHMiLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJ0ZXh0cyIsInVzZU1vZHVsZUNvbnRleHQiLCJvbkNoYW5nZSIsInllYXJzIiwiZGF5cyIsIm1vbnRocyIsInVzZU9wdGlvbnMiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiUmVhY3RTZWxlY3QiLCJwbGFjZWhvbGRlciIsImxhYmVsIiwidmFsdWUiLCJ5ZWFyIiwibmFtZSIsIm9wdGlvbnMiLCJtb250aCIsImRheSIsIkRheXNGaWVsZCIsInNldFZhbHVlIiwidXNlU3RhdGUiLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJpdGVtcyIsIm1hcCIsIml0ZW0iLCJpbmRleCIsIl9kYXRlIiwiX3JvdXRpbmciLCJfY29tcG9uZW50cyIsIl91aSIsIkJpcnRoZGF5Rm9ybSIsInNldFZpZXciLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwiZGlzYWJsZWQiLCJvblN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwidmFsaWQiLCJyb3V0aW5nIiwicHVzaFN0YXRlIiwiY2xzIiwiUGFnZUNvbnRhaW5lciIsInNpemUiLCJjbGFzc05hbWUiLCJ0aXRsZSIsImNsYWltIiwiQnV0dG9uIiwidHlwZSIsInZhcmlhbnQiLCJvbkNsaWNrIiwiYnV0dG9uIiwic2V0QmlydGhkYXRlIiwidXNlRWZmZWN0IiwicHJldlN0YXRlIiwicGFyc2VJbnQiLCJ1c2VNZW1vIiwiY3VycmVudFllYXIiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJBcnJheSIsImZyb20iLCJsZW5ndGgiLCJfIiwiZ2V0VG90YWxEYXlzIiwiZ2V0RGF0ZSIsInRvdGFsRGF5cyIsImNyZWF0ZUFycmF5IiwibnVtYmVyIiwiaSIsIk1vZHVsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIlJlYWN0IiwiX2hvb2tzIiwiX2JleW9uZF9jb250ZXh0IiwiX3BvbGljaWVzIiwiX2Zvcm0iLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ2aWV3IiwiYWNjZXB0ZWRlIiwiVmlld3MiLCJwb2xpY2llcyIsIlBvbGljaWVzVmlldyIsImJpcnRoZGF5IiwiQ29udHJvbCIsIlByb3ZpZGVyIiwiX3RvYXN0IiwiRm9ybSIsImNoZWNrZWQiLCJzZXRDaGVja2VkIiwidGFyZ2V0IiwibG9nIiwidG9hc3QiLCJFUlJPUiIsInJlcGxhY2VTdGF0ZSIsIkNoZWNrYm94IiwiSHRtbFdyYXBwZXIiLCJjaGVja2JveCIsImJsb2NrIiwidGVybXMiLCJjb25jbHVzaW9uIiwiTGluayIsImhyZWYiLCJsaW5rcyIsInBvc3RDb25jbHVzaW9uIiwicHJpdmFjeSIsIl9saXN0IiwiQXNpZGVNZW51IiwiT2JqZWN0Iiwia2V5cyIsIm1lbnUiLCJrZXkiLCJJdGVtIiwiTGlzdCIsImNvbnRyb2wiXSwic291cmNlcyI6WyIvdHMvdmlld3MvcG9saWNpZXMvdmlld3NcXHBvbGljaWVzXFxwb2xpY2llcy5tZHgiLCIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9hZ2UvZGF0ZS50c3giLCIvdHMvdmlld3MvYWdlL2RheXMudHN4IiwiL3RzL3ZpZXdzL2FnZS9mb3JtLnRzeCIsIi90cy92aWV3cy9hZ2UvdXNlLW9wdGlvbnMudHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3BvbGljaWVzL2Zvcm0udHN4IiwiL3RzL3ZpZXdzL3BvbGljaWVzL2luZGV4LnRzeCIsIi90cy92aWV3cy9wb2xpY2llcy9tZW51LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFFRTs7MEJBRUM7OzBCQUVIOzswQkFLRzs7MEJBRUg7OzBCQUlBOzswQkFFRzs7MEJBRUg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDckJBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUVBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlKLE1BQUEsQ0FBQU0sWUFBWSxFQUFFO2NBQ2hDLE9BQXFCLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ2pDO1lBQ0EsSUFBSUcsTUFBTUEsQ0FBQTtjQUNULE9BQU9OLE1BQUEsQ0FBQU8sSUFBSTtZQUNaO1lBRUE7OztZQUdBQyxJQUFJQSxDQUFBLEdBQUk7WUFFUjs7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