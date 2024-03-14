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
        hash: 3149427250,
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
                console.log(10, store.user.data.age);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImhpZGUiLCJleHBvcnRzIiwiX2FwcGxpY2F0aW9uIiwiX3Nlc3Npb24iLCJhcHBsaWNhdGlvbiIsInNlc3Npb24iLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJjb25zdHJ1Y3RvciIsIkFwcGxpY2F0aW9uIiwiZ2xvYmFsVGhpcyIsInZhbGlkYXRlQWdlIiwiYmlydGhkYXRlIiwidmFsaWRhdGUiLCJlIiwiY29uc29sZSIsImVycm9yIiwiYWNjZXB0IiwiYWNjZXB0VGVybXMiLCJfcmVhY3QiLCJfcmVhY3RTZWxlY3QiLCJfY29udGV4dCIsIl91c2VPcHRpb25zIiwiRGF0ZUZpZWxkcyIsInZhbHVlcyIsInNldFZhbHVlcyIsInRleHRzIiwidXNlTW9kdWxlQ29udGV4dCIsIm9uQ2hhbmdlIiwieWVhcnMiLCJkYXlzIiwibW9udGhzIiwidXNlT3B0aW9ucyIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJSZWFjdFNlbGVjdCIsInBsYWNlaG9sZGVyIiwibGFiZWwiLCJ2YWx1ZSIsInllYXIiLCJuYW1lIiwib3B0aW9ucyIsIm1vbnRoIiwiZGF5IiwiRGF5c0ZpZWxkIiwic2V0VmFsdWUiLCJ1c2VTdGF0ZSIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsIml0ZW1zIiwibWFwIiwiaXRlbSIsImluZGV4IiwiX2Zvcm0iLCJfZGF0ZSIsIl9yb3V0aW5nIiwiX2NvbXBvbmVudHMiLCJfdWkiLCJfaGVhZGVyIiwiQmlydGhkYXlGb3JtIiwic2V0VmlldyIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJjaGVja2VkIiwic2V0Q2hlY2tlZCIsImRpc2FibGVkIiwib25DbGljayIsInRhcmdldCIsIm9uU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJ2YWxpZCIsImxvZyIsImRhdGEiLCJhZ2UiLCJyb3V0aW5nIiwicHVzaFN0YXRlIiwiY2xzIiwiSGVhZGVyIiwiUGFnZUNvbnRhaW5lciIsInNpemUiLCJjbGFzc05hbWUiLCJ0aXRsZSIsIkNoZWNrYm94IiwiSHRtbFdyYXBwZXIiLCJjaGVja2JveCIsIkJ1dHRvbiIsInZhcmlhbnQiLCJidXR0b24iLCJzZXRCaXJ0aGRhdGUiLCJ1c2VFZmZlY3QiLCJwcmV2U3RhdGUiLCJwYXJzZUludCIsInVzZU1lbW8iLCJjdXJyZW50WWVhciIsIkRhdGUiLCJnZXRGdWxsWWVhciIsIkFycmF5IiwiZnJvbSIsImxlbmd0aCIsIl8iLCJnZXRUb3RhbERheXMiLCJnZXREYXRlIiwidG90YWxEYXlzIiwiY3JlYXRlQXJyYXkiLCJudW1iZXIiLCJpIiwiTW9kdWxlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiUmVhY3QiLCJfaG9va3MiLCJfYmV5b25kX2NvbnRleHQiLCJfcG9saWNpZXMiLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ2aWV3IiwiVmlld3MiLCJwb2xpY2llcyIsIlBvbGljaWVzVmlldyIsImJpcnRoZGF5IiwiQ29udHJvbCIsIlByb3ZpZGVyIiwiRm9ybSIsImJsb2NrIiwiX2NvbmZpZyIsIk5hdmJhckhlYWRlciIsImJyZWFkY3J1bWIiLCJwYXJhbXMiLCJBUFBfTkFNRSIsIm1vZHVsZXMiLCJtYW5hZ2VtZW50IiwiX2xpc3QiLCJBc2lkZU1lbnUiLCJPYmplY3QiLCJrZXlzIiwibWVudSIsImtleSIsIkl0ZW0iLCJMaXN0IiwiY29udHJvbCJdLCJzb3VyY2VzIjpbIi90cy92aWV3cy9wb2xpY2llcy92aWV3c1xccG9saWNpZXNcXHBvbGljaWVzLm1keCIsIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2FnZS9kYXRlLnRzeCIsIi90cy92aWV3cy9hZ2UvZGF5cy50c3giLCIvdHMvdmlld3MvYWdlL2Zvcm0udHN4IiwiL3RzL3ZpZXdzL2FnZS91c2Utb3B0aW9ucy50c3giLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvcG9saWNpZXMvZm9ybS50c3giLCIvdHMvdmlld3MvcG9saWNpZXMvaGVhZGVyLnRzeCIsIi90cy92aWV3cy9wb2xpY2llcy9pbmRleC50c3giLCIvdHMvdmlld3MvcG9saWNpZXMvbWVudS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUVFOzswQkFFQzs7MEJBRUg7OzBCQUtHOzswQkFFSDs7MEJBSUE7OzBCQUVHOzswQkFFSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNyQkEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUosTUFBQSxDQUFBTSxZQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNuQjtZQUNBLElBQUlHLE1BQU1BLENBQUE7Y0FDVCxPQUFPTixNQUFBLENBQUFPLElBQUk7WUFDWjtZQUVBOzs7WUFHQUMsSUFBSUEsQ0FBQSxHQUFJO1lBRVI7OztZQUdBQyxJQUFJQSxDQUFBLEdBQUk7O1VBQ1JDLE9BQUEsQ0FBQVQsVUFB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