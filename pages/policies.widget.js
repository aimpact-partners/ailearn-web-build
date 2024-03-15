System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0/jsx-runtime", "@beyond-js/react-18-widgets@1.0.4/page", "@aimpact/ailearn-sdk@1.0.0/application", "@aimpact/chat-sdk@1.0.0/session", "react@18.2.0", "pragmate-ui@0.0.6/form/react-select", "pragmate-ui@0.0.6/form", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@0.0.6/components", "@aimpact/ailearn-app@0.0.27/components/ui", "@aimpact/chat@1.0.1/shared/hooks", "@aimpact/ailearn-app@0.0.27/config", "pragmate-ui@0.0.6/list"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, bimport, __Bundle, __pkg, ims, Controller, BirthdayForm, View, Form, Header, PoliciesView, __beyond_pkg, hmr;
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
    }, function (_beyondJsKernel019Routing) {
      dependency_10 = _beyondJsKernel019Routing;
    }, function (_pragmateUi006Components) {
      dependency_11 = _pragmateUi006Components;
    }, function (_aimpactAilearnApp0027ComponentsUi) {
      dependency_12 = _aimpactAilearnApp0027ComponentsUi;
    }, function (_aimpactChat101SharedHooks) {
      dependency_13 = _aimpactChat101SharedHooks;
    }, function (_aimpactAilearnApp0027Config) {
      dependency_14 = _aimpactAilearnApp0027Config;
    }, function (_pragmateUi006List) {
      dependency_15 = _pragmateUi006List;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.11"], ["pragmate-ui", "0.0.6"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@bgroup/http-suite", "1.0.3"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["framer-motion", "10.17.8"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.27"], ["@aimpact/ailearn-app", "0.0.27"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.27/pages/policies",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['react/jsx-runtime', dependency_3], ['@beyond-js/react-18-widgets/page', dependency_4], ['@aimpact/ailearn-sdk/application', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['react', dependency_7], ['pragmate-ui/form/react-select', dependency_8], ['pragmate-ui/form', dependency_9], ['@beyond-js/kernel/routing', dependency_10], ['pragmate-ui/components', dependency_11], ['@aimpact/ailearn-app/components/ui', dependency_12], ['@aimpact/chat/shared/hooks', dependency_13], ['@aimpact/ailearn-app/config', dependency_14], ['pragmate-ui/list', dependency_15]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-policies-page",
        "vspecifier": "@aimpact/ailearn-app@0.0.27/pages/policies.widget",
        "is": "page",
        "route": "/policies",
        "layout": "general-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.27/pages/policies.widget');
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
        hash: 3387391319,
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
            get user() {
              return _session.sessionWrapper.user;
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
        hash: 1047283947,
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
          var _routing = require("@beyond-js/kernel/routing");
          var _components = require("pragmate-ui/components");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _header = require("../policies/header");
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
            const [checked, setChecked] = _react.default.useState(false);
            const disabled = {
              disabled: !checked || !birthdate
            };
            const onClick = event => setChecked(event.target.checked);
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
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_header.Header, null), _react.default.createElement(_ui.PageContainer, {
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
            })), _react.default.createElement("section", null, _react.default.createElement("label", {
              className: "italic flex-container flex-center"
            }, _react.default.createElement(_form.Checkbox, {
              name: "accept",
              onClick: onClick
            }), _react.default.createElement(_components.HtmlWrapper, null, texts.checkbox))), _react.default.createElement("section", null, _react.default.createElement(_components.Button, {
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
        hash: 468288380,
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
        hash: 3922641677,
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
              setBirthdate,
              store
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
        hash: 1360542857,
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
          var _routing = require("@beyond-js/kernel/routing");
          /*bundle*/
          function Form() {
            const {
              texts,
              setView,
              store,
              birthdate
            } = (0, _context.useModuleContext)();
            const [checked, setChecked] = _react.default.useState(false);
            const [, setFetching] = _react.default.useState(false);
            const disabled = {
              disabled: !checked
            };
            const onClick = event => setChecked(event.target.checked);
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
            return _react.default.createElement("form", {
              className: "form--in-content",
              onSubmit: onSubmit
            }, _react.default.createElement("label", {
              className: "italic flex-container flex-center flex-vertical-center"
            }, _react.default.createElement(_form.Checkbox, {
              name: "accept",
              onClick: onClick
            }), _react.default.createElement(_components.HtmlWrapper, null, texts.checkbox)), _react.default.createElement("section", {
              className: "flex-container flex-vertical-center flex-center mt-30"
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
        hash: 3623225062,
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
          var _form = require("./form");
          /*bundle*/
          function PoliciesView() {
            return React.createElement(React.Fragment, null, React.createElement(_header.Header, null), React.createElement(_ui.PageContainer, {
              size: "sm",
              className: "page-article-container"
            }, React.createElement("main", null, React.createElement(_policies.default, null), React.createElement(_form.Form, null))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImhpZGUiLCJleHBvcnRzIiwiX2FwcGxpY2F0aW9uIiwiX3Nlc3Npb24iLCJhcHBsaWNhdGlvbiIsInNlc3Npb24iLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJjb25zdHJ1Y3RvciIsIkFwcGxpY2F0aW9uIiwiZ2xvYmFsVGhpcyIsInZhbGlkYXRlQWdlIiwiYmlydGhkYXRlIiwidmFsaWRhdGUiLCJlIiwiY29uc29sZSIsImVycm9yIiwiYWNjZXB0IiwiYWNjZXB0VGVybXMiLCJfcmVhY3QiLCJfcmVhY3RTZWxlY3QiLCJfY29udGV4dCIsIl91c2VPcHRpb25zIiwiRGF0ZUZpZWxkcyIsInZhbHVlcyIsInNldFZhbHVlcyIsInRleHRzIiwidXNlTW9kdWxlQ29udGV4dCIsIm9uQ2hhbmdlIiwieWVhcnMiLCJkYXlzIiwibW9udGhzIiwidXNlT3B0aW9ucyIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJSZWFjdFNlbGVjdCIsInBsYWNlaG9sZGVyIiwibGFiZWwiLCJ2YWx1ZSIsInllYXIiLCJuYW1lIiwib3B0aW9ucyIsIm1vbnRoIiwiZGF5IiwiRGF5c0ZpZWxkIiwic2V0VmFsdWUiLCJ1c2VTdGF0ZSIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsIml0ZW1zIiwibWFwIiwiaXRlbSIsImluZGV4IiwiX2Zvcm0iLCJfZGF0ZSIsIl9yb3V0aW5nIiwiX2NvbXBvbmVudHMiLCJfdWkiLCJfaGVhZGVyIiwiQmlydGhkYXlGb3JtIiwic2V0VmlldyIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJjaGVja2VkIiwic2V0Q2hlY2tlZCIsImRpc2FibGVkIiwib25DbGljayIsInRhcmdldCIsIm9uU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJ2YWxpZCIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJjbHMiLCJIZWFkZXIiLCJQYWdlQ29udGFpbmVyIiwic2l6ZSIsImNsYXNzTmFtZSIsImFnZSIsInRpdGxlIiwiQ2hlY2tib3giLCJIdG1sV3JhcHBlciIsImNoZWNrYm94IiwiQnV0dG9uIiwidmFyaWFudCIsImJ1dHRvbiIsInNldEJpcnRoZGF0ZSIsInVzZUVmZmVjdCIsInByZXZTdGF0ZSIsInBhcnNlSW50IiwidXNlTWVtbyIsImN1cnJlbnRZZWFyIiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiQXJyYXkiLCJmcm9tIiwibGVuZ3RoIiwiXyIsImdldFRvdGFsRGF5cyIsImdldERhdGUiLCJ0b3RhbERheXMiLCJjcmVhdGVBcnJheSIsIm51bWJlciIsImkiLCJNb2R1bGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJSZWFjdCIsIl9ob29rcyIsIl9iZXlvbmRfY29udGV4dCIsIl9wb2xpY2llcyIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInZpZXciLCJWaWV3cyIsInBvbGljaWVzIiwiUG9saWNpZXNWaWV3IiwiYmlydGhkYXkiLCJDb250cm9sIiwiUHJvdmlkZXIiLCJGb3JtIiwiYmxvY2siLCJfY29uZmlnIiwiTmF2YmFySGVhZGVyIiwiYnJlYWRjcnVtYiIsInBhcmFtcyIsIkFQUF9OQU1FIiwibW9kdWxlcyIsIm1hbmFnZW1lbnQiLCJfbGlzdCIsIkFzaWRlTWVudSIsIk9iamVjdCIsImtleXMiLCJtZW51Iiwia2V5IiwiSXRlbSIsImxvZyIsIkxpc3QiLCJjb250cm9sIl0sInNvdXJjZXMiOlsiL3RzL3ZpZXdzL3BvbGljaWVzL3ZpZXdzXFxwb2xpY2llc1xccG9saWNpZXMubWR4IiwiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvYWdlL2RhdGUudHN4IiwiL3RzL3ZpZXdzL2FnZS9kYXlzLnRzeCIsIi90cy92aWV3cy9hZ2UvZm9ybS50c3giLCIvdHMvdmlld3MvYWdlL3VzZS1vcHRpb25zLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9wb2xpY2llcy9mb3JtLnRzeCIsIi90cy92aWV3cy9wb2xpY2llcy9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL3BvbGljaWVzL2luZGV4LnRzeCIsIi90cy92aWV3cy9wb2xpY2llcy9tZW51LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBRUU7OzBCQUVDOzswQkFFSDs7MEJBS0c7OzBCQUVIOzswQkFJQTs7MEJBRUc7OzBCQUVIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3JCQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJSixNQUFBLENBQUFNLFlBQVksRUFBRTtjQUNoQyxPQUFPLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ25CO1lBQ0EsSUFBSUcsTUFBTUEsQ0FBQTtjQUNULE9BQU9OLE1BQUEsQ0FBQU8sSUFBSTtZQUNaO1lBRUE7OztZQUdBQyxJQUFJQSxDQUFBLEdBQUk7WUFFUjs7O1lBR0FDLElBQUlBLENBQUEsR0FBSTs7VUFDUkMsT0FBQSxDQUFBVCxVQUFBLEdBQUFB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