System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@0.0.6/form", "@bgroup/wise-form@0.0.4/settings", "@beyond-js/reactive@1.1.11/model"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, bimport, __Bundle, __pkg, ims, WrappedForm, IWrappedFormContext, useWiseFormContext, useWrappedWiseFormContext, WiseForm, IWiseFormField, IWiseForm, IFormSettings, IFormTemplate, IWiseFormSpecs, FormModel, WrappedFormModel, __beyond_pkg, hmr;
  _export({
    WrappedForm: void 0,
    IWrappedFormContext: void 0,
    useWiseFormContext: void 0,
    useWrappedWiseFormContext: void 0,
    WiseForm: void 0,
    IWiseFormField: void 0,
    IWiseForm: void 0,
    IFormSettings: void 0,
    IFormTemplate: void 0,
    IWiseFormSpecs: void 0,
    FormModel: void 0,
    WrappedFormModel: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_pragmateUi006Form) {
      dependency_3 = _pragmateUi006Form;
    }, function (_bgroupWiseForm004Settings) {
      dependency_4 = _bgroupWiseForm004Settings;
    }, function (_beyondJsReactive1111Model) {
      dependency_5 = _beyondJsReactive1111Model;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "1.0.3"], ["@beyond-js/reactive", "1.1.9"], ["pragmate-ui", "0.0.6"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.42"], ["@types/react-dom", "18.2.17"], ["@bgroup/wise-form", "0.0.4"], ["@aimpact/ailearn-app", "0.0.24"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@bgroup/wise-form@0.0.4/form"
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/form', dependency_3], ['@bgroup/wise-form/settings', dependency_4], ['@beyond-js/reactive/model', dependency_5]]);
      brequire('@beyond-js/kernel/styles').styles.register('@bgroup/wise-form@0.0.4/form');
      ims = new Map();
      /**********************************
      INTERNAL MODULE: ./components/error
      **********************************/
      ims.set('./components/error', {
        hash: 3445939293,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ErrorRenderer = ErrorRenderer;
          var _react = require("react");
          function ErrorRenderer({
            error
          }) {
            _react.default.useEffect(() => {
              console.error(error);
            }, []);
            return _react.default.createElement("div", {
              className: 'alert alert--error pui-alert'
            }, error);
          }
        }
      });

      /********************************************
      INTERNAL MODULE: ./components/field/container
      ********************************************/

      ims.set('./components/field/container', {
        hash: 2830823145,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.FieldContainer = FieldContainer;
          var _react = require("react");
          function FieldContainer({
            children
          }) {
            return _react.default.createElement("div", {
              className: 'rf-field-container'
            }, children);
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./components/field/index
      ****************************************/

      ims.set('./components/field/index', {
        hash: 2475166397,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Control = Control;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          var _selection = require("./selection");
          var _container = require("./container");
          var _context = require("../../context");
          function Control({
            field,
            index,
            model
          }) {
            const {
              formTypes,
              values
            } = (0, _context.useWiseFormContext)();
            const types = {
              ...{
                checkbox: _selection.SelectionField,
                radio: _selection.SelectionField,
                select: _selection.SelectionField,
                textarea: _form.Textarea,
                text: _form.Input,
                password: _form.Input,
                default: _form.Input
              },
              ...formTypes
            };
            const fieldModel = model.getField(field?.name);
            const Control = types[field.type] ?? types.default;
            const onChange = event => {
              model.setField(field.name, event.target.value);
            };
            const value = fieldModel?.value ?? values[field?.name];
            const attrs = {
              model,
              value,
              ...field,
              onChange
            };
            return _react.default.createElement(_container.FieldContainer, null, _react.default.createElement(Control, {
              ...attrs
            }));
          }
        }
      });

      /********************************************
      INTERNAL MODULE: ./components/field/selection
      ********************************************/

      ims.set('./components/field/selection', {
        hash: 1300190015,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SelectionField = SelectionField;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          var _error = require("../error");
          var _context = require("../../context");
          function SelectionField(props) {
            if (!props.options) return _react.default.createElement(_error.ErrorRenderer, {
              error: "the field does not have options"
            });
            const {
              name
            } = (0, _context.useWiseFormContext)();
            const types = {
              checkbox: _form.Checkbox,
              radio: _form.Radio,
              select: SelectionField
            };
            if (!types.hasOwnProperty(props.type)) return _react.default.createElement(_error.ErrorRenderer, {
              error: "the props type is not supported"
            });
            const Control = types[props.type];
            if (props.type === 'select') return _react.default.createElement(_form.Select, {
              ...props
            });
            if (props.type === 'checkbox') return _react.default.createElement(_form.CheckboxGroup, {
              ...props
            });
            const output = props.options.map((option, key) => {
              const attributes = {
                ...option,
                name: props.name
              };
              return _react.default.createElement(Control, {
                ...attributes,
                key: `${name}.${props.name}.${key}`
              });
            });
            return output;
          }
        }
      });

      /***********************************************
      INTERNAL MODULE: ./components/rows/row-container
      ***********************************************/

      ims.set('./components/rows/row-container', {
        hash: 3652109364,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.FieldContainer = FieldContainer;
          var _react = require("react");
          var _field = require("../field");
          var _wrapper = require("./wrapper");
          function FieldContainer({
            template: [totalFields, gridStyle],
            items,
            styles,
            model
          }) {
            const output = items.map((field, index) => {
              if (field.type === 'wrapper') {
                return _react.default.createElement(_wrapper.FormSectionWrapper, {
                  key: `rf-row__item--${index}`,
                  data: field
                });
              }
              return _react.default.createElement(_field.Control, {
                index: index,
                model: model,
                field: field,
                key: `rf-row__item--${index}`
              });
            });
            const attrs = {
              className: `rf-fields-container`,
              style: {}
            };
            attrs.style = {
              gridTemplateColumns: `${gridStyle}`,
              ...styles
            };
            return _react.default.createElement("div", {
              ...attrs
            }, output);
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./components/rows/wrapper
      *****************************************/

      ims.set('./components/rows/wrapper', {
        hash: 2838809322,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.FormSectionWrapper = FormSectionWrapper;
          var _react = require("react");
          var _context = require("../../context");
          function FormSectionWrapper({
            data
          }) {
            const {
              formTypes
            } = (0, _context.useWiseFormContext)();
            const types = {
              ...formTypes
            };
            if (!data.control) {
              throw new Error('wrapper must have a control');
            }
            const Control = types[data.control];
            return _react.default.createElement(Control, {
              data: data
            });
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./components/wrapped-form
      *****************************************/

      ims.set('./components/wrapped-form', {
        hash: 1766028557,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.WrappedForm = WrappedForm;
          var _react = require("react");
          var _useModel = require("../hooks/use-model");
          var _error = require("./error");
          var _context = require("../context");
          var _rowContainer = require("./rows/row-container");
          var _useTemplate = require("../hooks/use-template");
          /*bundle */
          function WrappedForm({
            children,
            settings,
            types,
            data
          }) {
            const {
              model: parent
            } = (0, _context.useWiseFormContext)();
            const [ready, model, values] = (0, _useModel.useModel)(settings, data);
            const template = (0, _useTemplate.useTemplate)(settings);
            if (!settings.fields) {
              return _react.default.createElement(_error.ErrorRenderer, {
                error: "the form does not have fields"
              });
            }
            if (!settings.name) {
              return _react.default.createElement(_error.ErrorRenderer, {
                error: "the form does not have a name"
              });
            }
            if (!ready) return null;
            const fields = [...settings.fields];
            const Containers = template.items.map((num, index) => {
              const items = fields.splice(0, num[0]);
              return _react.default.createElement(_rowContainer.FieldContainer, {
                template: num,
                model: model,
                items: items,
                key: `rf-row--${index}.${num}`
              });
            });
            const value = {
              model,
              name: settings.name,
              values,
              template,
              formTypes: types ?? {},
              parent
            };
            return _react.default.createElement(_context.WrappedWiseFormContext.Provider, {
              value: value
            }, Containers, children);
          }
        }
      });

      /*************************
      INTERNAL MODULE: ./context
      *************************/

      ims.set('./context', {
        hash: 1229433864,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useWrappedWiseFormContext = exports.useWiseFormContext = exports.WrappedWiseFormContext = exports.WiseFormContext = void 0;
          var _react = require("react");
          const value = {};
          const WiseFormContext = exports.WiseFormContext = _react.default.createContext(value);
          /*bundle*/
          const useWiseFormContext = () => _react.default.useContext(WiseFormContext);
          exports.useWiseFormContext = useWiseFormContext;
          const WrappedWiseFormContext = exports.WrappedWiseFormContext = _react.default.createContext(value);
          /*bundle*/
          const useWrappedWiseFormContext = () => _react.default.useContext(WrappedWiseFormContext);
          exports.useWrappedWiseFormContext = useWrappedWiseFormContext;
        }
      });

      /*********************************
      INTERNAL MODULE: ./hooks/use-model
      *********************************/

      ims.set('./hooks/use-model', {
        hash: 2078751697,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useModel = useModel;
          var _react = require("react");
          var _model = require("../model/model");
          function useModel(settings, form) {
            const [model, setModel] = _react.default.useState(null);
            const [ready, setReady] = _react.default.useState(false);
            const [values, setValues] = _react.default.useState(form?.values || {});
            const startup = () => {
              const properties = settings.fields.map(item => item.name);
              const values = settings.values || {};
              if (!form) form = new _model.FormModel(settings, {
                properties,
                ...values
              });
              setModel(form);
              const onChange = () => {
                setReady(form.ready);
                setValues({
                  ...form.values
                });
              };
              form.on('change', onChange);
              onChange();
              return () => {
                form.off('change', onChange);
              };
            };
            _react.default.useEffect(startup, []);
            return [ready, model, values];
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./hooks/use-template
      ************************************/

      ims.set('./hooks/use-template', {
        hash: 651205496,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useTemplate = useTemplate;
          /**
           * Applies a template to create a structured layout, optionally using a gap between elements.
           *
           * @param template - The template to be applied. Can be an array or an object conforming to the IFormTemplate interface.
           * @param gap - Specifies the gap between elements.
           * The `gap` parameter is deprecated and will be removed in a future version. Use the gap property within the template object instead.
           * @returns An object representing the structured layout with type, styles, and items.
           */
          function useTemplate(settings, gap = undefined) {
            if (!settings?.template) throw new Error(`${settings.name} Doesnt have a template`);
            let template = settings?.template;
            let structure = template;
            let styles = {};
            if (!template) {
              return {
                type: 'grid',
                styles: {},
                items: settings.fields.map(item => [1, '1fr'])
              };
            }
            if (gap) {
              template = {
                structure: template,
                gap: gap
              };
            }
            const isArray = Array.isArray(template);
            if (!isArray) {
              if (typeof template !== 'object' || !template.structure || !Array.isArray(template.structure)) {
                throw new Error('Template must be an array or an object');
              }
              structure = template.structure;
              styles = template.gap ? {
                gap: template.gap
              } : {};
            }
            const processString = str => {
              if (typeof str === 'number') return [1, '1fr'];
              const [num, times] = str.split('x').map(Number);
              const tpl = times ? [times, Array(times).fill(num).reduce((acc, v) => `${acc} 1fr`, '')] : [1, '1fr'];
              return tpl;
            };
            return {
              type: 'grid',
              styles: styles,
              items: structure.map(item => {
                if (!Array.isArray(item)) return processString(item);
                return item;
              })
            };
          }
        }
      });

      /*********************************
      INTERNAL MODULE: ./hooks/use-types
      *********************************/

      ims.set('./hooks/use-types', {
        hash: 2454815993,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useTypes = useTypes;
          var _react = require("react");
          var _settings = require("@bgroup/wise-form/settings");
          var _selection = require("../components/field/selection");
          var _form = require("pragmate-ui/form");
          function useTypes(types) {
            return (0, _react.useMemo)(() => {
              const defaultTypes = {
                checkbox: _selection.SelectionField,
                radio: _selection.SelectionField,
                select: _selection.SelectionField,
                textarea: _form.Textarea,
                text: _form.Input,
                password: _form.Input,
                default: _form.Input
              };
              return {
                ...defaultTypes,
                ..._settings.WFSettings.types,
                ...types
              };
            }, [types]);
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 3204799056,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.WiseForm = WiseForm;
          var _react = require("react");
          var _useModel = require("./hooks/use-model");
          var _context = require("./context");
          var _rowContainer = require("./components/rows/row-container");
          var _useTemplate = require("./hooks/use-template");
          var _useTypes = require("./hooks/use-types");
          /*bundle */
          function WiseForm({
            children,
            settings,
            types,
            model
          }) {
            const [ready, instance] = (0, _useModel.useModel)(settings, model);
            const {
              type,
              styles,
              items
            } = (0, _useTemplate.useTemplate)(settings, settings.gap);
            const formTypes = (0, _useTypes.useTypes)(types);
            if (!settings.fields) {
              console.error('the form does not have fields', settings.name);
            }
            if (!settings.name) {
              console.error('the form does not have a name', settings.fields);
              return null;
            }
            if (!ready) return null;
            const fields = [...settings.fields];
            const Containers = items.map((num, index) => {
              const items = fields.splice(0, num[0]);
              return _react.default.createElement(_rowContainer.FieldContainer, {
                model: model,
                template: num,
                items: items,
                key: `rf-row--${index}.${num}`,
                styles: styles
              });
            });
            const onSubmit = event => {
              event.preventDefault();
              instance.onSubmit();
            };
            const value = {
              model: instance,
              values: instance.values,
              name: settings.name,
              template: {
                type,
                styles,
                items
              },
              formTypes
            };
            return _react.default.createElement(_context.WiseFormContext.Provider, {
              value: value
            }, _react.default.createElement("form", {
              className: "reactive-form-container",
              onSubmit: onSubmit
            }, Containers, children));
          }
        }
      });

      /***************************************
      INTERNAL MODULE: ./interfaces/interfaces
      ***************************************/

      ims.set('./interfaces/interfaces', {
        hash: 778835820,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /*************************************
      INTERNAL MODULE: ./interfaces/settings
      *************************************/

      ims.set('./interfaces/settings', {
        hash: 1189204012,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /*************************************
      INTERNAL MODULE: ./interfaces/template
      *************************************/

      ims.set('./interfaces/template', {
        hash: 691312902,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /********************************************
      INTERNAL MODULE: ./interfaces/wise-form-specs
      ********************************************/

      ims.set('./interfaces/wise-form-specs', {
        hash: 1758527009,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /*****************************
      INTERNAL MODULE: ./model/field
      *****************************/

      ims.set('./model/field', {
        hash: 438949521,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.FormField = void 0;
          var _model = require("@beyond-js/reactive/model");
          class FormField extends _model.ReactiveModel {
            #parent;
            constructor(parent, properties = {}) {
              super({
                ...properties,
                properties: ['name', 'type', 'placeholder', 'required', 'label', 'variant', 'disabled', 'value']
              });
              this.#parent = parent;
              // this.set(properties);
            }

            clear = () => {
              this.set(this.initialValues());
              this.triggerEvent('clear');
            };
          }
          exports.FormField = FormField;
        }
      });

      /*****************************
      INTERNAL MODULE: ./model/model
      *****************************/

      ims.set('./model/model', {
        hash: 2130076425,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.FormModel = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _field = require("./field");
          var _wrappedForm = require("./wrapped-form");
          /*bundle*/
          class FormModel extends _model.ReactiveModel {
            #settings;
            get settings() {
              return this.#settings;
            }
            #initialValues = {};
            get originalValues() {
              return this.#initialValues;
            }
            get values() {
              const data = {};
              this.#fields.forEach((field, key) => {
                data[key] = field.value;
              });
              return data;
            }
            #fields = new Map();
            get fields() {
              return this.#fields;
            }
            clear = () => {
              this.#fields.forEach(field => {
                field.clear();
              });
              this.triggerEvent();
              this.triggerEvent('clear');
            };
            getField(name) {
              if (!name) {
                console.warn('You need to provide a name to get a field in form ', this.#settings.name);
                return;
              }
              if (!name.includes('.')) return this.#fields.get(name);
              const [wrapperName, ...others] = name.split('.');
              const currentWrapper = this.#fields.get(wrapperName);
              const otherWrapper = others.join('.');
              return currentWrapper.getField(otherWrapper);
            }
            constructor(settings, reactiveProps) {
              super(reactiveProps);
              this.#settings = settings;
              this.#startup(settings);
            }
            #startup(settings) {
              const values = settings.values || {};
              this.#settings.fields.map(item => {
                let instance;
                let externalProperties = [];
                let externalValues = {};
                if (Array.isArray(item?.properties)) {
                  externalProperties = item?.properties.map(item => item.name);
                  item?.properties.forEach(item => externalValues[item.name] = item.value);
                }
                if (item.type === 'wrapper') {
                  if (!item.fields) throw new Error(`Wrapper ${item.name} must have fields property`);
                  const fieldsProperties = item.fields.map(item => item.name);
                  const properties = [...fieldsProperties, ...externalProperties];
                  const values = item.values || {};
                  instance = new _wrappedForm.WrappedFormModel(this, item, {
                    properties,
                    ...values
                  });
                } else {
                  instance = new _field.FormField(this, {
                    ...item,
                    value: values[item.name] || '',
                    properties: externalProperties
                  });
                }
                if (externalValues && Object.values(externalValues).length) instance.set(externalValues);
                const onChange = () => {
                  this[item.name] = instance.value;
                  this.triggerEvent();
                };
                instance.on('change', onChange);
                this.#fields.set(item.name, instance);
              });
              this.ready = true;
            }
            setField(name, value) {
              this.#fields.get(name).set({
                value
              });
            }
          }
          exports.FormModel = FormModel;
        }
      });

      /************************************
      INTERNAL MODULE: ./model/wrapped-form
      ************************************/

      ims.set('./model/wrapped-form', {
        hash: 4214801482,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.WrappedFormModel = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _field = require("./field");
          /*bundle*/
          class WrappedFormModel extends _model.ReactiveModel {
            #settings;
            get settings() {
              return this.#settings;
            }
            #initialValues = {};
            get originalValues() {
              return this.#initialValues;
            }
            get values() {
              const data = {};
              this.#fields.forEach((field, key) => {
                data[key] = field.value;
              });
              return data;
            }
            #fields = new Map();
            get fields() {
              return this.#fields;
            }
            getField(name) {
              if (!name) {
                console.warn('You need to provide a name to get a field in form ', this.#settings.name);
                return;
              }
              if (!name.includes('.')) return this.#fields.get(name);
              const [wrapperName, ...others] = name.split('.');
              const currentWrapper = this.#fields.get(wrapperName);
              const otherWrapper = others.join('.');
              return currentWrapper.getField(otherWrapper);
            }
            clear = () => {
              this.#fields.forEach(field => {
                field.clear();
              });
              this.triggerEvent();
              this.triggerEvent('clear');
            };
            #parent;
            constructor(parent, settings, reactiveProps) {
              super(reactiveProps);
              this.#parent = parent;
              this.#settings = settings;
              this.#startup(settings);
            }
            #startup(settings) {
              const values = settings.values || {};
              this.#settings.fields.map(item => {
                let instance;
                let externalProperties = [];
                let externalValues = {};
                if (Array.isArray(item?.properties)) {
                  externalProperties = item?.properties.map(item => item.name);
                  item?.properties.forEach(item => externalValues[item.name] = item.value);
                }
                if (item.type === 'wrapper') {
                  if (!item.fields) throw new Error(`Wrapper ${item.name} must have fields property`);
                  instance = new WrappedFormModel(this, {
                    ...item,
                    value: values[item.name] || ''
                  });
                } else instance = new _field.FormField(this, {
                  ...item,
                  value: values[item.name] || '',
                  properties: externalProperties
                });
                if (externalValues && Object.values(externalValues).length) instance.set(externalValues);
                const onChange = () => {
                  this[item.name] = instance.value;
                  this.triggerEvent();
                };
                instance.on('change', onChange);
                this.#fields.set(item.name, instance);
              });
              this.ready = true;
            }
            setField(name, value) {
              if (!this.getField(name)) {
                console.error('Field not found', name, this.#settings.name, this.#fields.keys());
                return;
              }
              this.getField(name).set({
                value
              });
            }
          }
          exports.WrappedFormModel = WrappedFormModel;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./components/wrapped-form",
        "from": "WrappedForm",
        "name": "WrappedForm"
      }, {
        "im": "./context",
        "from": "IWrappedFormContext",
        "name": "IWrappedFormContext"
      }, {
        "im": "./context",
        "from": "useWiseFormContext",
        "name": "useWiseFormContext"
      }, {
        "im": "./context",
        "from": "useWrappedWiseFormContext",
        "name": "useWrappedWiseFormContext"
      }, {
        "im": "./index",
        "from": "WiseForm",
        "name": "WiseForm"
      }, {
        "im": "./interfaces/interfaces",
        "from": "IWiseFormField",
        "name": "IWiseFormField"
      }, {
        "im": "./interfaces/interfaces",
        "from": "IWiseForm",
        "name": "IWiseForm"
      }, {
        "im": "./interfaces/settings",
        "from": "IFormSettings",
        "name": "IFormSettings"
      }, {
        "im": "./interfaces/template",
        "from": "IFormTemplate",
        "name": "IFormTemplate"
      }, {
        "im": "./interfaces/wise-form-specs",
        "from": "IWiseFormSpecs",
        "name": "IWiseFormSpecs"
      }, {
        "im": "./model/model",
        "from": "FormModel",
        "name": "FormModel"
      }, {
        "im": "./model/wrapped-form",
        "from": "WrappedFormModel",
        "name": "WrappedFormModel"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'WrappedForm') && _export("WrappedForm", WrappedForm = require ? require('./components/wrapped-form').WrappedForm : value);
        (require || prop === 'IWrappedFormContext') && _export("IWrappedFormContext", IWrappedFormContext = require ? require('./context').IWrappedFormContext : value);
        (require || prop === 'useWiseFormContext') && _export("useWiseFormContext", useWiseFormContext = require ? require('./context').useWiseFormContext : value);
        (require || prop === 'useWrappedWiseFormContext') && _export("useWrappedWiseFormContext", useWrappedWiseFormContext = require ? require('./context').useWrappedWiseFormContext : value);
        (require || prop === 'WiseForm') && _export("WiseForm", WiseForm = require ? require('./index').WiseForm : value);
        (require || prop === 'IWiseFormField') && _export("IWiseFormField", IWiseFormField = require ? require('./interfaces/interfaces').IWiseFormField : value);
        (require || prop === 'IWiseForm') && _export("IWiseForm", IWiseForm = require ? require('./interfaces/interfaces').IWiseForm : value);
        (require || prop === 'IFormSettings') && _export("IFormSettings", IFormSettings = require ? require('./interfaces/settings').IFormSettings : value);
        (require || prop === 'IFormTemplate') && _export("IFormTemplate", IFormTemplate = require ? require('./interfaces/template').IFormTemplate : value);
        (require || prop === 'IWiseFormSpecs') && _export("IWiseFormSpecs", IWiseFormSpecs = require ? require('./interfaces/wise-form-specs').IWiseFormSpecs : value);
        (require || prop === 'FormModel') && _export("FormModel", FormModel = require ? require('./model/model').FormModel : value);
        (require || prop === 'WrappedFormModel') && _export("WrappedFormModel", WrappedFormModel = require ? require('./model/wrapped-form').WrappedFormModel : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiRXJyb3JSZW5kZXJlciIsImVycm9yIiwiZGVmYXVsdCIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiRmllbGRDb250YWluZXIiLCJjaGlsZHJlbiIsIl9mb3JtIiwiX3NlbGVjdGlvbiIsIl9jb250YWluZXIiLCJfY29udGV4dCIsIkNvbnRyb2wiLCJmaWVsZCIsImluZGV4IiwibW9kZWwiLCJmb3JtVHlwZXMiLCJ2YWx1ZXMiLCJ1c2VXaXNlRm9ybUNvbnRleHQiLCJ0eXBlcyIsImNoZWNrYm94IiwiU2VsZWN0aW9uRmllbGQiLCJyYWRpbyIsInNlbGVjdCIsInRleHRhcmVhIiwiVGV4dGFyZWEiLCJ0ZXh0IiwiSW5wdXQiLCJwYXNzd29yZCIsImZpZWxkTW9kZWwiLCJnZXRGaWVsZCIsIm5hbWUiLCJ0eXBlIiwib25DaGFuZ2UiLCJldmVudCIsInNldEZpZWxkIiwidGFyZ2V0IiwidmFsdWUiLCJhdHRycyIsIl9lcnJvciIsInByb3BzIiwib3B0aW9ucyIsIkNoZWNrYm94IiwiUmFkaW8iLCJoYXNPd25Qcm9wZXJ0eSIsIlNlbGVjdCIsIkNoZWNrYm94R3JvdXAiLCJvdXRwdXQiLCJtYXAiLCJvcHRpb24iLCJrZXkiLCJhdHRyaWJ1dGVzIiwiX2ZpZWxkIiwiX3dyYXBwZXIiLCJ0ZW1wbGF0ZSIsInRvdGFsRmllbGRzIiwiZ3JpZFN0eWxlIiwiaXRlbXMiLCJzdHlsZXMiLCJGb3JtU2VjdGlvbldyYXBwZXIiLCJkYXRhIiwic3R5bGUiLCJncmlkVGVtcGxhdGVDb2x1bW5zIiwiY29udHJvbCIsIkVycm9yIiwiX3VzZU1vZGVsIiwiX3Jvd0NvbnRhaW5lciIsIl91c2VUZW1wbGF0ZSIsIldyYXBwZWRGb3JtIiwic2V0dGluZ3MiLCJwYXJlbnQiLCJyZWFkeSIsInVzZU1vZGVsIiwidXNlVGVtcGxhdGUiLCJmaWVsZHMiLCJDb250YWluZXJzIiwibnVtIiwic3BsaWNlIiwiV3JhcHBlZFdpc2VGb3JtQ29udGV4dCIsIlByb3ZpZGVyIiwiV2lzZUZvcm1Db250ZXh0IiwiZXhwb3J0cyIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlV3JhcHBlZFdpc2VGb3JtQ29udGV4dCIsIl9tb2RlbCIsImZvcm0iLCJzZXRNb2RlbCIsInVzZVN0YXRlIiwic2V0UmVhZHkiLCJzZXRWYWx1ZXMiLCJzdGFydHVwIiwicHJvcGVydGllcyIsIml0ZW0iLCJGb3JtTW9kZWwiLCJvbiIsIm9mZiIsImdhcCIsInVuZGVmaW5lZCIsInN0cnVjdHVyZSIsImlzQXJyYXkiLCJBcnJheSIsInByb2Nlc3NTdHJpbmciLCJzdHIiLCJ0aW1lcyIsInNwbGl0IiwiTnVtYmVyIiwidHBsIiwiZmlsbCIsInJlZHVjZSIsImFjYyIsInYiLCJfc2V0dGluZ3MiLCJ1c2VUeXBlcyIsInVzZU1lbW8iLCJkZWZhdWx0VHlwZXMiLCJXRlNldHRpbmdzIiwiX3VzZVR5cGVzIiwiV2lzZUZvcm0iLCJpbnN0YW5jZSIsIm9uU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsIkZvcm1GaWVsZCIsIlJlYWN0aXZlTW9kZWwiLCJjb25zdHJ1Y3RvciIsImNsZWFyIiwic2V0IiwiaW5pdGlhbFZhbHVlcyIsInRyaWdnZXJFdmVudCIsIl93cmFwcGVkRm9ybSIsIm9yaWdpbmFsVmFsdWVzIiwiZm9yRWFjaCIsIk1hcCIsIndhcm4iLCJpbmNsdWRlcyIsImdldCIsIndyYXBwZXJOYW1lIiwib3RoZXJzIiwiY3VycmVudFdyYXBwZXIiLCJvdGhlcldyYXBwZXIiLCJqb2luIiwicmVhY3RpdmVQcm9wcyIsIiNzdGFydHVwIiwiZXh0ZXJuYWxQcm9wZXJ0aWVzIiwiZXh0ZXJuYWxWYWx1ZXMiLCJmaWVsZHNQcm9wZXJ0aWVzIiwiV3JhcHBlZEZvcm1Nb2RlbCIsImxlbmd0aCIsImtleXMiXSwic291cmNlcyI6WyIvdHMvY29tcG9uZW50cy9lcnJvci50c3giLCIvdHMvY29tcG9uZW50cy9maWVsZC9jb250YWluZXIudHN4IiwiL3RzL2NvbXBvbmVudHMvZmllbGQvaW5kZXgudHN4IiwiL3RzL2NvbXBvbmVudHMvZmllbGQvc2VsZWN0aW9uLnRzeCIsIi90cy9jb21wb25lbnRzL3Jvd3Mvcm93LWNvbnRhaW5lci50c3giLCIvdHMvY29tcG9uZW50cy9yb3dzL3dyYXBwZXIudHN4IiwiL3RzL2NvbXBvbmVudHMvd3JhcHBlZC1mb3JtLnRzeCIsIi90cy9jb250ZXh0LnRzeCIsIi90cy9ob29rcy91c2UtbW9kZWwudHMiLCIvdHMvaG9va3MvdXNlLXRlbXBsYXRlLnRzeCIsIi90cy9ob29rcy91c2UtdHlwZXMudHMiLCIvdHMvaW5kZXgudHN4IiwiL2ludGVyZmFjZXMudHMiLCIvc2V0dGluZ3MudHMiLCIvdGVtcGxhdGUudHMiLCIvd2lzZS1mb3JtLXNwZWNzLnRzIiwiL3RzL21vZGVsL2ZpZWxkLnRzIiwiL3RzL21vZGVsL21vZGVsLnRzIiwiL3RzL21vZGVsL3dyYXBwZWQtZm9ybS50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFFTSxTQUFVQyxhQUFhQSxDQUFDO1lBQUVDO1VBQUssQ0FBRTtZQUN0Q0gsTUFBQSxDQUFBSSxPQUFLLENBQUNDLFNBQVMsQ0FBQyxNQUFLO2NBQ3BCQyxPQUFPLENBQUNILEtBQUssQ0FBQ0EsS0FBSyxDQUFDO1lBQ3JCLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDTixPQUFPSCxNQUFBLENBQUFJLE9BQUEsQ0FBQUcsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBOEIsR0FBRUwsS0FBSyxDQUFPO1VBQ25FOzs7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