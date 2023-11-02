System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/react-18-widgets@1.0.3/base", "@beyond-js/reactive@1.1.6/model", "@aimpact/ailearn-app@0.0.10/model/wrapper", "@aimpact/ailearn-sdk@1.0.0/core", "react@18.2.0", "pragmate-ui@0.0.3/form", "pragmate-ui@0.0.3/components", "@beyond-js/react-18-widgets@1.0.3/hooks", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.0.3/alert"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, bimport, __Bundle, __pkg, ims, Controller, Form, SelectionForm, Selection, Results, __beyond_pkg, hmr;
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
    }, function (_beyondJsReact18Widgets103Base) {
      dependency_1 = _beyondJsReact18Widgets103Base;
    }, function (_beyondJsReactive116Model) {
      dependency_2 = _beyondJsReactive116Model;
    }, function (_aimpactAilearnApp0010ModelWrapper) {
      dependency_3 = _aimpactAilearnApp0010ModelWrapper;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_4 = _aimpactAilearnSdk100Core;
    }, function (_react2) {
      dependency_5 = _react2;
    }, function (_pragmateUi003Form) {
      dependency_6 = _pragmateUi003Form;
    }, function (_pragmateUi003Components) {
      dependency_7 = _pragmateUi003Components;
    }, function (_beyondJsReact18Widgets103Hooks) {
      dependency_8 = _beyondJsReact18Widgets103Hooks;
    }, function (_aimpactChat101SharedHooks) {
      dependency_9 = _aimpactChat101SharedHooks;
    }, function (_pragmateUi003Alert) {
      dependency_10 = _pragmateUi003Alert;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-api", "0.1.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.1.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.6"], ["pragmate-ui", "0.0.3"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.3"], ["apexcharts", "3.44.0"], ["chart.js", "4.4.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.10"], ["@aimpact/ailearn-app", "0.0.10"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.10/assessments/selection",
          "multibundle": true
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/react-18-widgets/base', dependency_1], ['@beyond-js/reactive/model', dependency_2], ['@aimpact/ailearn-app/model/wrapper', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['react', dependency_5], ['pragmate-ui/form', dependency_6], ['pragmate-ui/components', dependency_7], ['@beyond-js/react-18-widgets/hooks', dependency_8], ['@aimpact/chat/shared/hooks', dependency_9], ['pragmate-ui/alert', dependency_10]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.10/assessments/selection.code');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsIlNlbGVjdGlvbiIsImV4cG9ydHMiLCJnZXRGb3JtRGF0YSIsImZvcm1FbGVtZW50IiwiZm9ybURhdGEiLCJBcnJheSIsImZyb20iLCJlbGVtZW50cyIsImZvckVhY2giLCJlbGVtZW50IiwibmFtZSIsInR5cGUiLCJjaGVja2VkIiwidmFsdWUiLCJfbW9kZWwiLCJfd3JhcHBlciIsIlJlYWN0aXZlTW9kZWwiLCJhc3Nlc3NtZW50IiwibW9kZWwiLCJBaUxlYXJuV3JhcHBlciIsInNlc3Npb25Nb2RlbCIsInF1ZXN0aW9ucyIsIk1hcCIsImFuc3dlcnMiLCJpc1ZhbGlkIiwic2l6ZSIsImxlbmd0aCIsInNlbGVjdGlvbiIsImNvbnN0cnVjdG9yIiwic2Vzc2lvbkFzc2Vzc21lbnQiLCJvbiIsInRyaWdnZXJFdmVudCIsImxvYWQiLCJyZWFkeSIsInNhdmUiLCJkYXRhIiwicGFyYW1zIiwiaXMiLCJsZXNzb25JZCIsImlkIiwidG9waWNJZCIsInJlc3VsdCIsInNhdmVTZWxlY3Rpb24iLCJzZXRBbnN3ZXIiLCJxdWVzdGlvbiIsInNldCIsInRyaWdnZXIiLCJfcmVhY3QiLCJ1c2VTdG9yZSIsImFzc2Vzc21lbnRzIiwic2V0U3RvcmUiLCJkZWZhdWx0IiwidXNlU3RhdGUiLCJzZXRSZWFkeSIsInNldFNlbGVjdGlvbiIsInZpZXciLCJzZXRWaWV3IiwidXNlRWZmZWN0IiwiaW5zdGFuY2UiLCJvbkNoYW5nZSIsIm9uVmlld0NoYW5nZSIsIm9mZiIsIl9mb3JtIiwiX2Fuc3dlciIsIklucHV0Q29udHJvbCIsImRvbmUiLCJvcHRpb24iLCJpc011bHRpcGxlIiwiQ29udHJvbCIsIkNoZWNrQm94IiwiUmFkaW8iLCJBbnN3ZXIiLCJjcmVhdGVFbGVtZW50IiwibGFiZWwiLCJyZXF1aXJlZCIsIkZvcm1Db250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUZvcm1Db250ZXh0IiwidXNlQ29udGV4dCIsIkZvcm0iLCJwcm9wcyIsIm9uU3VibWl0IiwiZmV0Y2hpbmciLCJyZXN0UHJvcHMiLCJzZXRJc1ZhbGlkIiwicmVmIiwidXNlUmVmIiwidG90YWxBbnN3ZXJlZCIsImRpc2FibGVkIiwiY29uc29sZSIsImxvZyIsImlzRm9ybVJlYWR5IiwiZm9ybSIsImN1cnJlbnQiLCJlcnJvciIsImNoZWNrZWRSYWRpb0dyb3VwcyIsIlNldCIsImhhcyIsInJhZGlvR3JvdXAiLCJxdWVyeVNlbGVjdG9yQWxsIiwic29tZSIsInJhZGlvIiwiYWRkIiwiSFRNTElucHV0RWxlbWVudCIsImluY2x1ZGVzIiwiX2NvbXBvbmVudHMiLCJfaG9va3MiLCJTdWJtaXRCdXR0b24iLCJzZXREaXNhYmxlZCIsInVzZUJpbmRlciIsImNoaWxkcmVuIiwiYXR0cnMiLCJCdXR0b24iLCJfcXVlc3Rpb24iLCJfYmV5b25kX2NvbnRleHQiLCJfc3VibWl0QnV0dG9uIiwiX2dldEZvcm1EYXRhIiwiX2Zvcm1Db250ZXh0IiwiU2VsZWN0aW9uRm9ybSIsInRleHRzUmVhZHkiLCJ0ZXh0cyIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwic2V0RXJyb3IiLCJzZXRGZXRjaGluZyIsIlNwaW5uZXIiLCJhY3RpdmUiLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwidGFyZ2V0IiwiZSIsIm1lc3NhZ2UiLCJvdXRwdXQiLCJtYXAiLCJpbmRleCIsIlF1ZXN0aW9uIiwia2V5IiwiUHJvdmlkZXIiLCJjbGFzc05hbWUiLCJ0aXRsZSIsInZhcmlhbnQiLCJmaW5pc2giLCJfSW5wdXQiLCJpIiwiaW5wdXRzIiwib3B0aW9ucyIsInRleHQiLCJfcmVzdWx0cyIsIl91c2VTdG9yZSIsInN0b3JlUmVhZHkiLCJ2aWV3cyIsInJlc3VsdHMiLCJSZXN1bHRzIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfYWxlcnQiLCJldmFsdWF0aW9uIiwiY291bnRlcnMiLCJjbHMiLCJhbnN3ZXIiLCJjb3JyZWN0X2Fuc3dlciIsImFjY3VyYWN5IiwiQWxlcnQiLCJjb3JyZWN0IiwidG90YWwiLCJ3cm9uZyJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL2hlbHBlcnMvZ2V0LWZvcm0tZGF0YS50cyIsIi90cy9zdG9yZS50cyIsIi90cy91c2Utc3RvcmUudHMiLCIvdHMvdmlld3MvZm9ybS9JbnB1dC50c3giLCIvdHMvdmlld3MvZm9ybS9jb250cm9scy9mb3JtLWNvbnRleHQudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vY29udHJvbHMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vY29udHJvbHMvaXMtcmVhZHktZnVuY3Rpb24udHMiLCIvdHMvdmlld3MvZm9ybS9jb250cm9scy9zdWJtaXQtYnV0dG9uLnRzeCIsIi90cy92aWV3cy9mb3JtL2luZGV4LnRzeCIsIi90cy92aWV3cy9mb3JtL3F1ZXN0aW9uLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvaW50ZXJmYWNlcy9hbnN3ZXIudHN4IiwiL3F1ZXN0aW9ucy50cyIsIi9zZWxlY3Rpb24tcHJvcHMudHMiLCIvdHMvdmlld3MvcmVzdWx0cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFB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