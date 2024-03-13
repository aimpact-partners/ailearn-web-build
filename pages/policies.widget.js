System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0/jsx-runtime", "@beyond-js/react-18-widgets@1.0.4/page", "@aimpact/ailearn-sdk@1.0.0/application", "@aimpact/chat-sdk@1.0.0/session", "react@18.2.0", "pragmate-ui@0.0.6/form/react-select", "pragmate-ui@0.0.6/form", "pragmate-ui@0.0.6/components", "@aimpact/ailearn-app@0.0.25/components/ui", "@aimpact/chat@1.0.1/shared/hooks", "@aimpact/ailearn-app@0.0.25/config", "pragmate-ui@0.0.6/list"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, bimport, __Bundle, __pkg, ims, Controller, BirthdayForm, View, Form, Header, PoliciesView, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    BirthdayForm: void 0,
    View: void 0,
    Form: void 0,
    Header: void 0,
    PoliciesView: void 0
  });
  return {
    setters: [function (_beyondJsWidgets015Render) {
      dependency_0 = _beyondJsWidgets015Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_react1820JsxRuntime) {
      dependency_3 = _react1820JsxRuntime;
    }, function (_beyondJsReact18Widgets104Page) {
      dependency_4 = _beyondJsReact18Widgets104Page;
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
    }, function (_pragmateUi006Components) {
      dependency_10 = _pragmateUi006Components;
    }, function (_aimpactAilearnApp0025ComponentsUi) {
      dependency_11 = _aimpactAilearnApp0025ComponentsUi;
    }, function (_aimpactChat101SharedHooks) {
      dependency_12 = _aimpactChat101SharedHooks;
    }, function (_aimpactAilearnApp0025Config) {
      dependency_13 = _aimpactAilearnApp0025Config;
    }, function (_pragmateUi006List) {
      dependency_14 = _pragmateUi006List;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.11"], ["pragmate-ui", "0.0.6"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@bgroup/http-suite", "1.0.3"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["framer-motion", "10.17.8"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.25"], ["@aimpact/ailearn-app", "0.0.25"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.25/pages/policies",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['react/jsx-runtime', dependency_3], ['@beyond-js/react-18-widgets/page', dependency_4], ['@aimpact/ailearn-sdk/application', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['react', dependency_7], ['pragmate-ui/form/react-select', dependency_8], ['pragmate-ui/form', dependency_9], ['pragmate-ui/components', dependency_10], ['@aimpact/ailearn-app/components/ui', dependency_11], ['@aimpact/chat/shared/hooks', dependency_12], ['@aimpact/ailearn-app/config', dependency_13], ['pragmate-ui/list', dependency_14]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-policies-page",
        "vspecifier": "@aimpact/ailearn-app@0.0.25/pages/policies.widget",
        "is": "page",
        "route": "/policies",
        "layout": "general-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.25/pages/policies.widget');
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
        hash: 1927493790,
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
        hash: 301758612,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _application = require("@aimpact/ailearn-sdk/application");
          var _session = require("@aimpact/chat-sdk/session");
          class StoreManager {
            application;
            get session() {
              return _session.sessionWrapper;
            }
            constructor() {
              this.application = new _application.Application();
              globalThis.store = this;
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /********************************
      INTERNAL MODULE: ./views/age/date
      ********************************/

      ims.set('./views/age/date', {
        hash: 368835073,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DateFields = DateFields;
          var _react = require("react");
          var _reactSelect = require("pragmate-ui/form/react-select");
          var _context = require("../context");
          function DateFields({
            values,
            setValues
          }) {
            const {
              texts
            } = (0, _context.useModuleContext)();
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
            console.log(10, values);
            const options = texts.months.items.map((item, index) => ({
              value: index + 1,
              label: item
            }));
            function getTotalDays(month, year) {
              // Months in JavaScript are 0-indexed: 0 for January, 11 for December
              // Adjust the month number down by 1
              month--;
              // Create a date object for the following month, day 0 will give us the last day of the requested month
              return new Date(year, month + 1, 0).getDate();
            }
            const years = _react.default.useMemo(() => {
              const currentYear = new Date().getFullYear();
              return Array.from({
                length: currentYear - 1900 + 1
              }, (_, index) => ({
                value: 1900 + index,
                label: `${1900 + index}`
              }));
            }, []); // Dependency array is empty, so this runs once
            const createArray = number => Array.from({
              length: number
            }, (_, i) => i + 1);
            // Example usage:
            const totalDays = getTotalDays(values.month, values.year); // 2 is for February
            console.log('month', values.month, totalDays);
            const dayOptions = createArray(totalDays).map((item, index) => ({
              value: index + 1,
              label: item
            }));
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
              options: options,
              onChange: onChange
            }), _react.default.createElement(_reactSelect.ReactSelect, {
              placeholder: texts.days.label,
              value: values.day,
              onChange: onChange,
              name: "day",
              options: dayOptions,
              onChange: onChange
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
        hash: 650210301,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BirthdayForm = BirthdayForm;
          var _react = require("react");
          var _context = require("../context");
          var _form = require("pragmate-ui/form");
          var _date = require("./date");
          var _components = require("pragmate-ui/components");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _header = require("../policies/header");
          /*bundle*/
          function BirthdayForm() {
            const {
              texts
            } = (0, _context.useModuleContext)();
            const [values, setValues] = _react.default.useState({
              year: 2024,
              month: 1,
              day: ''
            });
            const [checked, setChecked] = _react.default.useState(false);
            const disabled = {
              disabled: !checked
            };
            const onClick = event => setChecked(event.target.checked);
            const onSubmit = event => {
              event.preventDefault();
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_header.Header, null), _react.default.createElement(_ui.PageContainer, {
              size: "sm"
            }, _react.default.createElement("div", {
              className: "form-age__container"
            }, _react.default.createElement("h1", null, texts.age.title), _react.default.createElement("form", {
              onSubmit: onSubmit
            }, _react.default.createElement("div", {
              className: "age-fields__container"
            }, _react.default.createElement(_date.DateFields, {
              values: values,
              setValues: setValues
            })), _react.default.createElement("section", null, _react.default.createElement("label", {
              className: "italic flex-container flex-center"
            }, _react.default.createElement(_form.Checkbox, {
              name: "accept",
              onClick: onClick
            }), _react.default.createElement(_components.HtmlWrapper, null, texts.checkbox))), _react.default.createElement("section", null, _react.default.createElement(_components.Button, {
              variant: "primary",
              ...disabled,
              onClick: onSubmit
            }, texts.button))))));
          }
        }
      });

      /*********************************
      INTERNAL MODULE: ./views/age/years
      *********************************/

      ims.set('./views/age/years', {
        hash: 1417625527,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.YearsField = YearsField;
          var _react = require("react");
          var _context = require("../context");
          function YearsField() {
            const {
              texts,
              store
            } = (0, _context.useModuleContext)();
            const [value, setValue] = _react.default.useState('');
            const onChange = event => {
              setValue(event.currentTarget.value);
            };
            return _react.default.createElement("div", null);
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
        hash: 634157700,
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
          function View() {
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            const [view, setView] = React.useState('birthday');
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
              setBirthdate
            };
            const Control = Views[view];
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
        hash: 2698789905,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Form = Form;
          var _react = require("react");
          var _context = require("../context");
          var _form = require("pragmate-ui/form");
          var _components = require("pragmate-ui/components");
          /*bundle*/
          function Form() {
            const {
              texts
            } = (0, _context.useModuleContext)();
            const [checked, setChecked] = _react.default.useState(false);
            const disabled = {
              disabled: !checked
            };
            const onClick = event => setChecked(event.target.checked);
            return _react.default.createElement("form", {
              className: "form--in-content"
            }, _react.default.createElement("label", {
              className: "italic flex-container flex-vertical-center"
            }, _react.default.createElement(_form.Checkbox, {
              name: "accept",
              onClick: onClick
            }), _react.default.createElement(_components.HtmlWrapper, null, texts.checkbox)), _react.default.createElement("section", {
              className: "flex-container flex-vertical-center mt-30"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              block: true,
              ...disabled
            }, texts.button)));
          }
        }
      });

      /***************************************
      INTERNAL MODULE: ./views/policies/header
      ***************************************/

      ims.set('./views/policies/header', {
        hash: 749434497,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Header = Header;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _react = require("react");
          var _context = require("../context");
          var _config = require("@aimpact/ailearn-app/config");
          /*bundle*/
          function Header() {
            const {
              texts
            } = (0, _context.useModuleContext)();
            return _react.default.createElement("section", null, _react.default.createElement(_ui.NavbarHeader, {
              breadcrumb: [[_config.default.params.APP_NAME, '/'], [texts.breadcrumb.modules, '/modules/list'], [texts.breadcrumb.management, '']]
            }));
          }
        }
      });

      /**************************************
      INTERNAL MODULE: ./views/policies/index
      **************************************/

      ims.set('./views/policies/index', {
        hash: 1662719786,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PoliciesView = PoliciesView;
          var React = require("react");
          var _header = require("./header");
          var _policies = require("./policies.mdx");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _menu = require("./menu");
          var _form = require("./form");
          /*bundle*/
          function PoliciesView() {
            return React.createElement(React.Fragment, null, React.createElement(_header.Header, null), React.createElement(_ui.PageContainer, {
              size: "sm",
              className: "page-article-container"
            }, React.createElement(_menu.AsideMenu, null), React.createElement("main", null, React.createElement(_policies.default, null), React.createElement(_form.Form, null))));
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
        "im": "./views/policies/header",
        "from": "Header",
        "name": "Header"
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
        (require || prop === 'Header') && _export("Header", Header = require ? require('./views/policies/header').Header : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImhpZGUiLCJleHBvcnRzIiwiX2FwcGxpY2F0aW9uIiwiX3Nlc3Npb24iLCJhcHBsaWNhdGlvbiIsInNlc3Npb24iLCJzZXNzaW9uV3JhcHBlciIsImNvbnN0cnVjdG9yIiwiQXBwbGljYXRpb24iLCJnbG9iYWxUaGlzIiwiX3JlYWN0IiwiX3JlYWN0U2VsZWN0IiwiX2NvbnRleHQiLCJEYXRlRmllbGRzIiwidmFsdWVzIiwic2V0VmFsdWVzIiwidGV4dHMiLCJ1c2VNb2R1bGVDb250ZXh0Iiwib25DaGFuZ2UiLCJldmVudCIsIm5hbWUiLCJ2YWx1ZSIsImN1cnJlbnRUYXJnZXQiLCJwcmV2U3RhdGUiLCJwYXJzZUludCIsImNvbnNvbGUiLCJsb2ciLCJvcHRpb25zIiwibW9udGhzIiwiaXRlbXMiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJsYWJlbCIsImdldFRvdGFsRGF5cyIsIm1vbnRoIiwieWVhciIsIkRhdGUiLCJnZXREYXRlIiwieWVhcnMiLCJkZWZhdWx0IiwidXNlTWVtbyIsImN1cnJlbnRZZWFyIiwiZ2V0RnVsbFllYXIiLCJBcnJheSIsImZyb20iLCJsZW5ndGgiLCJfIiwiY3JlYXRlQXJyYXkiLCJudW1iZXIiLCJpIiwidG90YWxEYXlzIiwiZGF5T3B0aW9ucyIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsIlJlYWN0U2VsZWN0IiwicGxhY2Vob2xkZXIiLCJkYXlzIiwiZGF5IiwiRGF5c0ZpZWxkIiwic2V0VmFsdWUiLCJ1c2VTdGF0ZSIsIl9mb3JtIiwiX2RhdGUiLCJfY29tcG9uZW50cyIsIl91aSIsIl9oZWFkZXIiLCJCaXJ0aGRheUZvcm0iLCJjaGVja2VkIiwic2V0Q2hlY2tlZCIsImRpc2FibGVkIiwib25DbGljayIsInRhcmdldCIsIm9uU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJIZWFkZXIiLCJQYWdlQ29udGFpbmVyIiwic2l6ZSIsImNsYXNzTmFtZSIsImFnZSIsInRpdGxlIiwiQ2hlY2tib3giLCJIdG1sV3JhcHBlciIsImNoZWNrYm94IiwiQnV0dG9uIiwidmFyaWFudCIsImJ1dHRvbiIsIlllYXJzRmllbGQiLCJNb2R1bGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJSZWFjdCIsIl9ob29rcyIsIl9iZXlvbmRfY29udGV4dCIsIl9wb2xpY2llcyIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInZpZXciLCJzZXRWaWV3IiwiYmlydGhkYXRlIiwic2V0QmlydGhkYXRlIiwiVmlld3MiLCJwb2xpY2llcyIsIlBvbGljaWVzVmlldyIsImJpcnRoZGF5IiwiQ29udHJvbCIsIlByb3ZpZGVyIiwiRm9ybSIsImJsb2NrIiwiX2NvbmZpZyIsIk5hdmJhckhlYWRlciIsImJyZWFkY3J1bWIiLCJwYXJhbXMiLCJBUFBfTkFNRSIsIm1vZHVsZXMiLCJtYW5hZ2VtZW50IiwiX21lbnUiLCJBc2lkZU1lbnUiLCJfbGlzdCIsIk9iamVjdCIsImtleXMiLCJtZW51Iiwia2V5IiwiSXRlbSIsIkxpc3QiLCJjb250cm9sIl0sInNvdXJjZXMiOlsiL3RzL3ZpZXdzL3BvbGljaWVzL3ZpZXdzXFxwb2xpY2llc1xccG9saWNpZXMubWR4IiwiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvYWdlL2RhdGUudHN4IiwiL3RzL3ZpZXdzL2FnZS9kYXlzLnRzeCIsIi90cy92aWV3cy9hZ2UvZm9ybS50c3giLCIvdHMvdmlld3MvYWdlL3llYXJzLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9wb2xpY2llcy9mb3JtLnRzeCIsIi90cy92aWV3cy9wb2xpY2llcy9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL3BvbGljaWVzL2luZGV4LnRzeCIsIi90cy92aWV3cy9wb2xpY2llcy9tZW51LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUVFOzswQkFFQzs7MEJBRUg7OzBCQUtHOzswQkFFSDs7MEJBSUE7OzBCQUVHOzswQkFFSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNyQkEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUosTUFBQSxDQUFBTSxZQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNuQjtZQUNBLElBQUlHLE1BQU1BLENBQUE7Y0FDVCxPQUFPTixNQUFBLENBQUFPLElBQUk7WUFDWjtZQUVBOzs7WUFHQUMsSUFBSUEsQ0FBQSxHQUFJO1lBRVI7OztZQUdBQyxJQUFJQSxDQUFBLEdBQUk7O1VBQ1JDLE9BQUEsQ0FBQVQsVUFBQSxHQUFBQSxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3hCRCxJQUFBVSxZQUFBLEdBQUFiLE9BQUE7VUFFQSxJQUFBYyxRQUFBLEdBQUFkLE9BQUE7VUFDTSxNQUFPTyxZQUFZO1lBQ3hCUSxXQUFXO1lBRVgsSUFBSUMsT0FBT0EsQ0FBQTtjQUNWLE9BQU9GLFFBQUEsQ0FBQUcsY0FB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