System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.3/base", "@beyond-js/reactive@1.1.6/model", "@aimpact/ailearn-app@0.0.11/model/wrapper", "@aimpact/ailearn-sdk@1.0.0/core", "react@18.2.0", "pragmate-ui@0.0.3/form", "pragmate-ui@0.0.3/components", "@beyond-js/react-18-widgets@1.0.3/hooks", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.0.3/alert"], function (_export, _context) {
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
    }, function (_beyondJsReact18Widgets103Base) {
      dependency_2 = _beyondJsReact18Widgets103Base;
    }, function (_beyondJsReactive116Model) {
      dependency_3 = _beyondJsReactive116Model;
    }, function (_aimpactAilearnApp0011ModelWrapper) {
      dependency_4 = _aimpactAilearnApp0011ModelWrapper;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_5 = _aimpactAilearnSdk100Core;
    }, function (_react2) {
      dependency_6 = _react2;
    }, function (_pragmateUi003Form) {
      dependency_7 = _pragmateUi003Form;
    }, function (_pragmateUi003Components) {
      dependency_8 = _pragmateUi003Components;
    }, function (_beyondJsReact18Widgets103Hooks) {
      dependency_9 = _beyondJsReact18Widgets103Hooks;
    }, function (_aimpactChat101SharedHooks) {
      dependency_10 = _aimpactChat101SharedHooks;
    }, function (_pragmateUi003Alert) {
      dependency_11 = _pragmateUi003Alert;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-api", "0.1.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.1.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.6"], ["pragmate-ui", "0.0.3"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.3"], ["apexcharts", "3.44.0"], ["chart.js", "4.4.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.11"], ["@aimpact/ailearn-app", "0.0.11"]]);
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
          const FormContext = exports.FormContext = _react.default.createContext({});
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsIlNlbGVjdGlvbiIsImV4cG9ydHMiLCJnZXRGb3JtRGF0YSIsImZvcm1FbGVtZW50IiwiZm9ybURhdGEiLCJBcnJheSIsImZyb20iLCJlbGVtZW50cyIsImZvckVhY2giLCJlbGVtZW50IiwibmFtZSIsInR5cGUiLCJjaGVja2VkIiwidmFsdWUiLCJfbW9kZWwiLCJfd3JhcHBlciIsIlJlYWN0aXZlTW9kZWwiLCJhc3Nlc3NtZW50IiwibW9kZWwiLCJBaUxlYXJuV3JhcHBlciIsInNlc3Npb25Nb2RlbCIsInF1ZXN0aW9ucyIsIk1hcCIsImFuc3dlcnMiLCJpc1ZhbGlkIiwic2l6ZSIsImxlbmd0aCIsInNlbGVjdGlvbiIsImNvbnN0cnVjdG9yIiwic2Vzc2lvbkFzc2Vzc21lbnQiLCJvbiIsInRyaWdnZXJFdmVudCIsImxvYWQiLCJyZWFkeSIsInNhdmUiLCJkYXRhIiwicGFyYW1zIiwiaXMiLCJsZXNzb25JZCIsImlkIiwidG9waWNJZCIsInJlc3VsdCIsInNhdmVTZWxlY3Rpb24iLCJzZXRBbnN3ZXIiLCJxdWVzdGlvbiIsInNldCIsInRyaWdnZXIiLCJfcmVhY3QiLCJ1c2VTdG9yZSIsImFzc2Vzc21lbnRzIiwic2V0U3RvcmUiLCJkZWZhdWx0IiwidXNlU3RhdGUiLCJzZXRSZWFkeSIsInNldFNlbGVjdGlvbiIsInZpZXciLCJzZXRWaWV3IiwidXNlRWZmZWN0IiwiaW5zdGFuY2UiLCJvbkNoYW5nZSIsIm9uVmlld0NoYW5nZSIsIm9mZiIsIl9mb3JtIiwiX2Fuc3dlciIsIklucHV0Q29udHJvbCIsImRvbmUiLCJvcHRpb24iLCJpc011bHRpcGxlIiwiQ29udHJvbCIsIkNoZWNrQm94IiwiUmFkaW8iLCJBbnN3ZXIiLCJjcmVhdGVFbGVtZW50IiwibGFiZWwiLCJyZXF1aXJlZCIsIkZvcm1Db250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUZvcm1Db250ZXh0IiwidXNlQ29udGV4dCIsIkZvcm0iLCJwcm9wcyIsIm9uU3VibWl0IiwiZmV0Y2hpbmciLCJyZXN0UHJvcHMiLCJzZXRJc1ZhbGlkIiwicmVmIiwidXNlUmVmIiwidG90YWxBbnN3ZXJlZCIsImRpc2FibGVkIiwiY29uc29sZSIsImxvZyIsImlzRm9ybVJlYWR5IiwiZm9ybSIsImN1cnJlbnQiLCJlcnJvciIsImNoZWNrZWRSYWRpb0dyb3VwcyIsIlNldCIsImhhcyIsInJhZGlvR3JvdXAiLCJxdWVyeVNlbGVjdG9yQWxsIiwic29tZSIsInJhZGlvIiwiYWRkIiwiSFRNTElucHV0RWxlbWVudCIsImluY2x1ZGVzIiwiX2NvbXBvbmVudHMiLCJfaG9va3MiLCJTdWJtaXRCdXR0b24iLCJzZXREaXNhYmxlZCIsInVzZUJpbmRlciIsImNoaWxkcmVuIiwiYXR0cnMiLCJCdXR0b24iLCJfcXVlc3Rpb24iLCJfYmV5b25kX2NvbnRleHQiLCJfc3VibWl0QnV0dG9uIiwiX2dldEZvcm1EYXRhIiwiX2Zvcm1Db250ZXh0IiwiU2VsZWN0aW9uRm9ybSIsInRleHRzUmVhZHkiLCJ0ZXh0cyIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwic2V0RXJyb3IiLCJzZXRGZXRjaGluZyIsIlNwaW5uZXIiLCJhY3RpdmUiLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwidGFyZ2V0IiwiZSIsIm1lc3NhZ2UiLCJvdXRwdXQiLCJtYXAiLCJpbmRleCIsIlF1ZXN0aW9uIiwia2V5IiwiUHJvdmlkZXIiLCJjbGFzc05hbWUiLCJ0aXRsZSIsInZhcmlhbnQiLCJmaW5pc2giLCJfSW5wdXQiLCJpIiwiaW5wdXRzIiwib3B0aW9ucyIsInRleHQiLCJfcmVzdWx0cyIsIl91c2VTdG9yZSIsInN0b3JlUmVhZHkiLCJ2aWV3cyIsInJlc3VsdHMiLCJSZXN1bHRzIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfYWxlcnQiLCJldmFsdWF0aW9uIiwiY291bnRlcnMiLCJjbHMiLCJhbnN3ZXIiLCJjb3JyZWN0X2Fuc3dlciIsImFjY3VyYWN5IiwiQWxlcnQiLCJjb3JyZWN0IiwidG90YWwiLCJ3cm9uZyJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL2hlbHBlcnMvZ2V0LWZvcm0tZGF0YS50cyIsIi90cy9zdG9yZS50cyIsIi90cy91c2Utc3RvcmUudHMiLCIvdHMvdmlld3MvZm9ybS9JbnB1dC50c3giLCIvdHMvdmlld3MvZm9ybS9jb250cm9scy9mb3JtLWNvbnRleHQudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vY29udHJvbHMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vY29udHJvbHMvaXMtcmVhZHktZnVuY3Rpb24udHMiLCIvdHMvdmlld3MvZm9ybS9jb250cm9scy9zdWJtaXQtYnV0dG9uLnRzeCIsIi90cy92aWV3cy9mb3JtL2luZGV4LnRzeCIsIi90cy92aWV3cy9mb3JtL3F1ZXN0aW9uLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvaW50ZXJmYWNlcy9hbnN3ZXIudHN4IiwiL3F1ZXN0aW9ucy50cyIsIi9zZWxlY3Rpb24tcHJvcHMudHMiLCIvdHMvdmlld3MvcmVzdWx0cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxV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