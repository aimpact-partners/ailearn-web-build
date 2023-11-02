System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.1/base", "@beyond-js/reactive@1.2.0/model", "@aimpact/ailearn-app@0.0.11/model/wrapper", "@aimpact/ailearn-sdk@1.0.0/core", "react@18.2.0", "pragmate-ui@0.0.37/form", "pragmate-ui@0.0.37/components", "@beyond-js/react-18-widgets@1.0.1/hooks", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.0.37/alert"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, bimport, __Bundle, __pkg, ims, Controller, Form, SelectionForm, Selection, Results, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    Form: void 0,
    SelectionForm: void 0,
    Selection: void 0,
    Results: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_beyondJsReact18Widgets101Base) {
      dependency_2 = _beyondJsReact18Widgets101Base;
    }, function (_beyondJsReactive120Model) {
      dependency_3 = _beyondJsReactive120Model;
    }, function (_aimpactAilearnApp0011ModelWrapper) {
      dependency_4 = _aimpactAilearnApp0011ModelWrapper;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_5 = _aimpactAilearnSdk100Core;
    }, function (_react2) {
      dependency_6 = _react2;
    }, function (_pragmateUi0037Form) {
      dependency_7 = _pragmateUi0037Form;
    }, function (_pragmateUi0037Components) {
      dependency_8 = _pragmateUi0037Components;
    }, function (_beyondJsReact18Widgets101Hooks) {
      dependency_9 = _beyondJsReact18Widgets101Hooks;
    }, function (_aimpactChat101SharedHooks) {
      dependency_10 = _aimpactChat101SharedHooks;
    }, function (_pragmateUi0037Alert) {
      dependency_11 = _pragmateUi0037Alert;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-api", "0.1.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.1.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "0.0.37"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["apexcharts", "3.44.0"], ["chart.js", "4.4.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "10.0.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/ailearn-app", "0.0.11"], ["@aimpact/ailearn-app", "0.0.11"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.11/assessments/selection",
          "multibundle": true
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['@beyond-js/react-18-widgets/base', dependency_2], ['@beyond-js/reactive/model', dependency_3], ['@aimpact/ailearn-app/model/wrapper', dependency_4], ['@aimpact/ailearn-sdk/core', dependency_5], ['react', dependency_6], ['pragmate-ui/form', dependency_7], ['pragmate-ui/components', dependency_8], ['@beyond-js/react-18-widgets/hooks', dependency_9], ['@aimpact/chat/shared/hooks', dependency_10], ['pragmate-ui/alert', dependency_11]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.11/assessments/selection.code');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 4216328566,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _base = require("@beyond-js/react-18-widgets/base");
          var _store = require("./store");
          var _views = require("./views");
          /*bundle*/
          class Controller extends _base.ReactWidgetController {
            #store;
            createStore() {
              this.#store = new _store.StoreManager();
              return this.#store;
            }
            get Widget() {
              return _views.Selection;
            }
          }
          exports.Controller = Controller;
        }
      });

      /***************************************
      INTERNAL MODULE: ./helpers/get-form-data
      ***************************************/

      ims.set('./helpers/get-form-data', {
        hash: 187723676,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.getFormData = void 0;
          const getFormData = formElement => {
            const formData = {};
            Array.from(formElement.elements).forEach(element => {
              if (element.name) {
                if (element.type === 'checkbox') {
                  formData[element.name] = element.checked;
                } else if (element.type === 'radio') {
                  if (element.checked) {
                    formData[element.name] = element.value;
                  }
                } else {
                  formData[element.name] = element.value;
                }
              }
            });
            return formData;
          };
          exports.getFormData = getFormData;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 819040466,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _wrapper = require("@aimpact/ailearn-app/model/wrapper");
          class StoreManager extends _model.ReactiveModel {
            #assessment;
            get assessment() {
              return this.#assessment;
            }
            get model() {
              return _wrapper.AiLearnWrapper.sessionModel;
            }
            #questions = new Map();
            get questions() {
              return this.assessment.questions;
            }
            #answers = new Map();
            get answers() {
              return this.#answers;
            }
            get isValid() {
              return this.#answers.size === this.#assessment.questions.length;
            }
            #selection;
            get selection() {
              return this.#selection;
            }
            constructor(assessment) {
              super();
              this.#assessment = assessment;
              this.#selection = _wrapper.AiLearnWrapper.sessionAssessment.selection;
              _wrapper.AiLearnWrapper.sessionAssessment.on('change', this.triggerEvent);
            }
            load() {
              this.ready = true;
            }
            async save(data) {
              let params = {
                answers: data
              };
              if (this.model.is === 'lesson') params.lessonId = this.model.id;else params.topicId = this.model.id;
              //todo: @jircdev review it.
              const result = await _wrapper.AiLearnWrapper.sessionAssessment.saveSelection(params);
              this.#selection = _wrapper.AiLearnWrapper.sessionAssessment.selection;
              return;
            }
            setAnswer(question, value) {
              this.#answers.set(question, value);
              this.trigger('set.answer');
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /***************************
      INTERNAL MODULE: ./use-store
      ***************************/

      ims.set('./use-store', {
        hash: 317438358,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useStore = useStore;
          var _react = require("react");
          var _store = require("./store");
          function useStore(assessments) {
            const [store, setStore] = _react.default.useState();
            const [ready, setReady] = _react.default.useState(false);
            const [selection, setSelection] = _react.default.useState({});
            const [view, setView] = _react.default.useState('form');
            _react.default.useEffect(() => {
              if (store) return;
              const instance = new _store.StoreManager(assessments);
              const onChange = () => {
                setSelection(instance?.selection);
                setReady(instance.ready);
                onViewChange();
              };
              const onViewChange = () => setView(!!instance?.selection ? 'results' : 'form');
              setStore(instance);
              instance.on('change', onChange);
              instance.load();
              if (instance.ready) setReady(instance.ready);
              return () => {
                instance.off('change', onChange);
              };
            }, []);
            return [ready, store, view, selection];
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./views/form/Input
      **********************************/

      ims.set('./views/form/Input', {
        hash: 2170583926,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.InputControl = void 0;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          var _answer = require("../interfaces/answer");
          const InputControl = ({
            done,
            value,
            option,
            name,
            isMultiple,
            onChange
          }) => {
            let Control = isMultiple ? _form.CheckBox : _form.Radio;
            if (done) Control = _answer.Answer;
            return _react.default.createElement(Control, {
              label: option,
              value: value,
              name: name,
              onChange: onChange,
              required: true
            });
          };
          exports.InputControl = InputControl;
        }
      });

      /**************************************************
      INTERNAL MODULE: ./views/form/controls/form-context
      **************************************************/

      ims.set('./views/form/controls/form-context', {
        hash: 3870665038,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useFormContext = exports.FormContext = void 0;
          var _react = require("react");
          const FormContext = _react.default.createContext({});
          exports.FormContext = FormContext;
          const useFormContext = () => _react.default.useContext(FormContext);
          exports.useFormContext = useFormContext;
        }
      });

      /*******************************************
      INTERNAL MODULE: ./views/form/controls/index
      *******************************************/

      ims.set('./views/form/controls/index', {
        hash: 2396305920,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Form = Form;
          var _react = require("react");
          /*bundle*/
          function Form(props) {
            const {
              onSubmit,
              fetching,
              ...restProps
            } = props;
            const [isValid, setIsValid] = _react.default.useState(false);
            const ref = _react.default.useRef(null);
            const value = {
              isValid,
              totalAnswered: props.store?.answers.size,
              fetching
            };
            const disabled = {
              disabled: !fetching
            };
            console.log(2);
            return null;
          }
        }
      });

      /*******************************************************
      INTERNAL MODULE: ./views/form/controls/is-ready-function
      *******************************************************/

      ims.set('./views/form/controls/is-ready-function', {
        hash: 3877003488,
        creator: function (require, exports) {
          "use strict";

          const isFormReady = ref => {
            const form = ref.current;
            if (!form) {
              console.error('Form reference is null.');
              return false;
            }
            const checkedRadioGroups = new Set();
            for (const element of Array.from(form.elements)) {
              if (element.required) {
                if (element.type === 'radio') {
                  if (checkedRadioGroups.has(element.name)) {
                    continue;
                  }
                  const radioGroup = form.querySelectorAll(`input[name="${element.name}"]`);
                  if (!Array.from(radioGroup).some(radio => radio.checked)) {
                    return false;
                  }
                  checkedRadioGroups.add(element.name);
                }
                if (element instanceof HTMLInputElement && ['checkbox'].includes(element.type) && !element.checked) {
                  return false;
                } else if (element.value === '') {
                  return false;
                }
              }
            }
            return true;
          };
        }
      });

      /***************************************************
      INTERNAL MODULE: ./views/form/controls/submit-button
      ***************************************************/

      ims.set('./views/form/controls/submit-button', {
        hash: 3538008786,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SubmitButton = SubmitButton;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          function SubmitButton(props) {
            const {
              store
            } = props;
            const [disabled, setDisabled] = _react.default.useState(!store.isValid);
            (0, _hooks.useBinder)([store], () => {
              setDisabled(!store.isValid);
            }, 'set.answer');
            const {
              children
            } = props;
            const attrs = {
              ...props
            };
            attrs.disabled = disabled || props.disabled;
            delete attrs.children;
            return _react.default.createElement(_components.Button, {
              ...attrs
            }, children);
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./views/form/index
      **********************************/

      ims.set('./views/form/index', {
        hash: 3825720602,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SelectionForm = SelectionForm;
          var _react = require("react");
          var _question = require("./question");
          var _components = require("pragmate-ui/components");
          var _hooks = require("@aimpact/chat/shared/hooks");
          var _beyond_context = require("beyond_context");
          var _submitButton = require("./controls/submit-button");
          var _getFormData = require("../../helpers/get-form-data");
          var _formContext = require("./controls/form-context");
          /*bundle*/
          function SelectionForm({
            store,
            assessments
          }) {
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            const [error, setError] = _react.default.useState('');
            const [fetching, setFetching] = _react.default.useState(false);
            const ref = _react.default.useRef(null);
            const [isValid, setIsValid] = _react.default.useState(false);
            if (!textsReady || !store.ready) return _react.default.createElement(_components.Spinner, {
              active: true
            });
            const disabled = {
              disabled: fetching
            };
            const handleSubmit = async event => {
              event.preventDefault();
              event.stopPropagation();
              try {
                event.preventDefault();
                setFetching(true);
                const form = event.target;
                const data = (0, _getFormData.getFormData)(form);
                await store.save(data);
              } catch (e) {
                setError(e.message);
              } finally {
                setFetching(false);
              }
            };
            const output = assessments.questions.map((question, index) => _react.default.createElement(_question.Question, {
              key: index,
              index: `${index}`,
              question: question,
              store: store
            }));
            const value = {
              isValid,
              totalAnswered: store?.answers.size,
              fetching
            };
            console.log(2, value.fetching, disabled.disabled);
            return _react.default.createElement(_formContext.FormContext.Provider, {
              value: value
            }, _react.default.createElement("form", {
              onSubmit: handleSubmit,
              className: "assessment__container",
              ref: ref
            }, _react.default.createElement("h3", null, assessments.title), output, _react.default.createElement(_submitButton.SubmitButton, {
              store: store,
              ...disabled,
              variant: "primary",
              type: "submit"
            }, texts?.finish)));
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./views/form/question
      *************************************/

      ims.set('./views/form/question', {
        hash: 624128822,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Question = void 0;
          var _react = require("react");
          var _Input = require("./Input");
          const Question = ({
            question,
            index,
            store
          }) => {
            const onChange = (index, i, event) => {
              event.stopPropagation();
              store.setAnswer(index, i);
            };
            const inputs = question.options.map((option, i) => {
              return _react.default.createElement(_Input.InputControl, {
                key: `${index}.${i}`,
                value: `${i}`,
                option: option,
                name: index,
                isMultiple: question.isMultiple,
                onChange: e => onChange(index, i, e)
              });
            });
            return _react.default.createElement("div", {
              className: "question__container"
            }, _react.default.createElement("h4", null, question.text), inputs);
          };
          exports.Question = Question;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 1606976285,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Selection = void 0;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _hooks = require("@aimpact/chat/shared/hooks");
          var _beyond_context = require("beyond_context");
          var _results = require("./results");
          var _form = require("./form");
          var _useStore = require("../use-store");
          /*bundle*/
          const Selection = ({
            assessments
          }) => {
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            const [storeReady, store, view, selection] = (0, _useStore.useStore)(assessments);
            const views = {
              results: _results.Results,
              form: _form.SelectionForm
            };
            if (!textsReady || !storeReady) return _react.default.createElement(_components.Spinner, {
              active: true
            });
            const Control = views[view];
            return _react.default.createElement(Control, {
              store: store,
              assessments: assessments,
              texts: texts
            });
          };
          exports.Selection = Selection;
        }
      });

      /*****************************************
      INTERNAL MODULE: ./views/interfaces/answer
      *****************************************/

      ims.set('./views/interfaces/answer', {
        hash: 1239399579,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Answer = Answer;
          var _react = require("react");
          function Answer({
            option,
            question
          }) {
            return _react.default.createElement("div", {
              className: "flex-container flex-space-between"
            }, _react.default.createElement("span", null, option));
          }
        }
      });

      /********************************************
      INTERNAL MODULE: ./views/interfaces/questions
      ********************************************/

      ims.set('./views/interfaces/questions', {
        hash: 3781113722,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /**************************************************
      INTERNAL MODULE: ./views/interfaces/selection-props
      **************************************************/

      ims.set('./views/interfaces/selection-props', {
        hash: 3118408654,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /*************************************
      INTERNAL MODULE: ./views/results/index
      *************************************/

      ims.set('./views/results/index', {
        hash: 211215296,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Results = void 0;
          var _react = require("react");
          var _alert = require("pragmate-ui/alert");
          /*bundle*/
          const Results = ({
            store,
            texts,
            assessments
          }) => {
            const {
              selection: {
                evaluation,
                evaluation: {
                  counters
                }
              }
            } = store;
            const output = assessments.questions.map((question, index) => {
              const data = evaluation.answers[index];
              const options = question.options.map((option, i) => {
                let cls = `option-item${data.answer === i ? ' option--selected' : ''} `;
                if (question.correct_answer === i) {
                  cls += `option option--correct `;
                }
                if (data.answer === i) {
                  cls += `option${data.accuracy ? ' option--correct' : ' option--wrong'}`;
                }
                return _react.default.createElement("div", {
                  key: option,
                  className: cls
                }, _react.default.createElement("span", null, option));
              });
              return _react.default.createElement("div", {
                key: question.text,
                className: "question__container question__container--results"
              }, _react.default.createElement("h3", null, question.text), options);
            });
            return _react.default.createElement("div", {
              className: "assessment__container"
            }, _react.default.createElement("h3", null, texts.results), _react.default.createElement(_alert.Alert, {
              type: "info"
            }, _react.default.createElement("div", {
              className: "flex-container flex-100 flex-space-between"
            }, _react.default.createElement("strong", null, texts.correct, ":"), _react.default.createElement("section", null, _react.default.createElement("span", null, counters.correct), "/", _react.default.createElement("span", null, counters.total))), _react.default.createElement("div", {
              className: "flex-container flex-space-between flex-100"
            }, _react.default.createElement("strong", null, texts.wrong, ":"), _react.default.createElement("section", null, _react.default.createElement("span", null, counters.wrong), "/", _react.default.createElement("span", null, counters.total)))), output);
          };
          exports.Results = Results;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./views/form/controls/index",
        "from": "Form",
        "name": "Form"
      }, {
        "im": "./views/form/index",
        "from": "SelectionForm",
        "name": "SelectionForm"
      }, {
        "im": "./views/index",
        "from": "Selection",
        "name": "Selection"
      }, {
        "im": "./views/results/index",
        "from": "Results",
        "name": "Results"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'Form') && _export("Form", Form = require ? require('./views/form/controls/index').Form : value);
        (require || prop === 'SelectionForm') && _export("SelectionForm", SelectionForm = require ? require('./views/form/index').SelectionForm : value);
        (require || prop === 'Selection') && _export("Selection", Selection = require ? require('./views/index').Selection : value);
        (require || prop === 'Results') && _export("Results", Results = require ? require('./views/results/index').Results : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUksQ0FBTSxFQUN2QkQsT0FBTyxDQUNIO1lBRVIsQ0FBQyxDQUFDO1lBRUYsT0FDQ3BGO2NBQUs4RSxTQUFTLEVBQUM7WUFBdUIsR0FDckM5RSx5Q0FBSzBELEtBQUssQ0FBQzhCLE9BQU8sQ0FBTSxFQUN4QnhGLDZCQUFDaUcsWUFBSztjQUFDdkksSUFBSSxFQUFDO1lBQU0sR0FDakJzQztjQUFLOEUsU0FBUyxFQUFDO1lBQTRDLEdBQzFEOUUsNkNBQVMwRCxLQUFLLENBQUN3QyxPQUFPLE1BQVcsRUFDakNsRyw4Q0FDQ0EsMkNBQU80RixRQUFRLENBQUNNLE9BQU8sQ0FBUSxPQUFDbEcsMkNBQU80RixRQUFRLENBQUNPLEtBQUssQ0FBUSxDQUNwRCxDQUNMLEVBQ05uRztjQUFLOEUsU0FBUyxFQUFDO1lBQTRDLEdBQzFEOUUsNkNBQVMwRCxLQUFLLENBQUMwQyxLQUFLLE1BQVcsRUFDL0JwRyw4Q0FDQ0EsMkNBQU80RixRQUFRLENBQUNRLEtBQUssQ0FBUSxPQUFDcEcsMkNBQU80RixRQUFRLENBQUNPLEtBQUssQ0FBUSxDQUNsRCxDQUNMLENBQ0MsRUFDUDNCLE1BQU0sQ0FDRjtVQUVSLENBQUM7VUFBQ3hIIiwibmFtZXMiOlsiQ29udHJvbGxlciIsIlJlYWN0V2lkZ2V0Q29udHJvbGxlciIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiV2lkZ2V0IiwiU2VsZWN0aW9uIiwiZXhwb3J0cyIsImdldEZvcm1EYXRhIiwiZm9ybUVsZW1lbnQiLCJmb3JtRGF0YSIsIkFycmF5IiwiZnJvbSIsImVsZW1lbnRzIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJuYW1lIiwidHlwZSIsImNoZWNrZWQiLCJ2YWx1ZSIsIlJlYWN0aXZlTW9kZWwiLCJhc3Nlc3NtZW50IiwibW9kZWwiLCJBaUxlYXJuV3JhcHBlciIsInNlc3Npb25Nb2RlbCIsIk1hcCIsInF1ZXN0aW9ucyIsImFuc3dlcnMiLCJpc1ZhbGlkIiwic2l6ZSIsImxlbmd0aCIsInNlbGVjdGlvbiIsImNvbnN0cnVjdG9yIiwic2Vzc2lvbkFzc2Vzc21lbnQiLCJvbiIsInRyaWdnZXJFdmVudCIsImxvYWQiLCJyZWFkeSIsInNhdmUiLCJkYXRhIiwicGFyYW1zIiwiaXMiLCJsZXNzb25JZCIsImlkIiwidG9waWNJZCIsInJlc3VsdCIsInNhdmVTZWxlY3Rpb24iLCJzZXRBbnN3ZXIiLCJxdWVzdGlvbiIsInNldCIsInRyaWdnZXIiLCJ1c2VTdG9yZSIsImFzc2Vzc21lbnRzIiwic3RvcmUiLCJzZXRTdG9yZSIsIlJlYWN0IiwidXNlU3RhdGUiLCJzZXRSZWFkeSIsInNldFNlbGVjdGlvbiIsInZpZXciLCJzZXRWaWV3IiwidXNlRWZmZWN0IiwiaW5zdGFuY2UiLCJvbkNoYW5nZSIsIm9uVmlld0NoYW5nZSIsIm9mZiIsIklucHV0Q29udHJvbCIsImRvbmUiLCJvcHRpb24iLCJpc011bHRpcGxlIiwiQ29udHJvbCIsIkNoZWNrQm94IiwiUmFkaW8iLCJBbnN3ZXIiLCJsYWJlbCIsInJlcXVpcmVkIiwiRm9ybUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlRm9ybUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiRm9ybSIsInByb3BzIiwib25TdWJtaXQiLCJmZXRjaGluZyIsInJlc3RQcm9wcyIsInNldElzVmFsaWQiLCJyZWYiLCJ1c2VSZWYiLCJ0b3RhbEFuc3dlcmVkIiwiZGlzYWJsZWQiLCJjb25zb2xlIiwibG9nIiwiaXNGb3JtUmVhZHkiLCJmb3JtIiwiY3VycmVudCIsImVycm9yIiwiY2hlY2tlZFJhZGlvR3JvdXBzIiwiU2V0IiwiaGFzIiwicmFkaW9Hcm91cCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzb21lIiwicmFkaW8iLCJhZGQiLCJIVE1MSW5wdXRFbGVtZW50IiwiaW5jbHVkZXMiLCJTdWJtaXRCdXR0b24iLCJzZXREaXNhYmxlZCIsImNoaWxkcmVuIiwiYXR0cnMiLCJCdXR0b24iLCJTZWxlY3Rpb25Gb3JtIiwidGV4dHNSZWFkeSIsInRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwic2V0RXJyb3IiLCJzZXRGZXRjaGluZyIsIlNwaW5uZXIiLCJhY3RpdmUiLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwidGFyZ2V0IiwiZSIsIm1lc3NhZ2UiLCJvdXRwdXQiLCJtYXAiLCJpbmRleCIsIlF1ZXN0aW9uIiwia2V5IiwiUHJvdmlkZXIiLCJjbGFzc05hbWUiLCJ0aXRsZSIsInZhcmlhbnQiLCJmaW5pc2giLCJpIiwiaW5wdXRzIiwib3B0aW9ucyIsInRleHQiLCJzdG9yZVJlYWR5Iiwidmlld3MiLCJyZXN1bHRzIiwiUmVzdWx0cyIsIk9iamVjdCIsImV2YWx1YXRpb24iLCJjb3VudGVycyIsImNscyIsImFuc3dlciIsImNvcnJlY3RfYW5zd2VyIiwiYWNjdXJhY3kiLCJBbGVydCIsImNvcnJlY3QiLCJ0b3RhbCIsIndyb25nIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJ0cy9jb250cm9sbGVyLnRzIiwidHMvaGVscGVycy9nZXQtZm9ybS1kYXRhLnRzIiwidHMvc3RvcmUudHMiLCJ0cy91c2Utc3RvcmUudHMiLCJ0cy92aWV3cy9mb3JtL0lucHV0LnRzeCIsInRzL3ZpZXdzL2Zvcm0vY29udHJvbHMvZm9ybS1jb250ZXh0LnRzeCIsInRzL3ZpZXdzL2Zvcm0vY29udHJvbHMvaW5kZXgudHN4IiwidHMvdmlld3MvZm9ybS9jb250cm9scy9pcy1yZWFkeS1mdW5jdGlvbi50cyIsInRzL3ZpZXdzL2Zvcm0vY29udHJvbHMvc3VibWl0LWJ1dHRvbi50c3giLCJ0cy92aWV3cy9mb3JtL2luZGV4LnRzeCIsInRzL3ZpZXdzL2Zvcm0vcXVlc3Rpb24udHN4IiwidHMvdmlld3MvaW5kZXgudHN4IiwidHMvdmlld3MvaW50ZXJmYWNlcy9hbnN3ZXIudHN4IiwidHMvdmlld3MvaW50ZXJmYWNlcy9xdWVzdGlvbnMudHMiLCJ0cy92aWV3cy9pbnRlcmZhY2VzL3NlbGVjdGlvbi1wcm9wcy50cyIsInRzL3ZpZXdzL3Jlc3VsdHMvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF19