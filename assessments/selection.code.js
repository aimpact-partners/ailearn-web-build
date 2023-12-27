System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.3/base", "@beyond-js/reactive@1.1.6/model", "@aimpact/ailearn-app@0.0.24/model/wrapper", "@aimpact/ailearn-sdk@1.0.0/core", "react@18.2.0", "pragmate-ui@0.0.3/form", "pragmate-ui@0.0.3/components", "@beyond-js/react-18-widgets@1.0.3/hooks", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.0.3/alert"], function (_export, _context) {
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
    }, function (_aimpactAilearnApp0024ModelWrapper) {
      dependency_4 = _aimpactAilearnApp0024ModelWrapper;
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
        const dependencies = new Map([["@aimpact/chat-api", "0.2.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.2.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.6"], ["pragmate-ui", "0.0.3"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.3"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.24"], ["@aimpact/ailearn-app", "0.0.24"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.24/assessments/selection",
          "multibundle": true
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['@beyond-js/react-18-widgets/base', dependency_2], ['@beyond-js/reactive/model', dependency_3], ['@aimpact/ailearn-app/model/wrapper', dependency_4], ['@aimpact/ailearn-sdk/core', dependency_5], ['react', dependency_6], ['pragmate-ui/form', dependency_7], ['pragmate-ui/components', dependency_8], ['@beyond-js/react-18-widgets/hooks', dependency_9], ['@aimpact/chat/shared/hooks', dependency_10], ['pragmate-ui/alert', dependency_11]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.24/assessments/selection.code');
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
        hash: 1895905073,
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
        hash: 4065808841,
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
        hash: 2379830802,
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
            }, _react.default.createElement("strong", null, texts.correct, ":"), _react.default.createElement("section", null, _react.default.createElement("span", null, counters.correct), "/", _react.default.createElement("span", null, counters.total)))), output);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsIlNlbGVjdGlvbiIsImV4cG9ydHMiLCJnZXRGb3JtRGF0YSIsImZvcm1FbGVtZW50IiwiZm9ybURhdGEiLCJBcnJheSIsImZyb20iLCJlbGVtZW50cyIsImZvckVhY2giLCJlbGVtZW50IiwibmFtZSIsInR5cGUiLCJjaGVja2VkIiwidmFsdWUiLCJfbW9kZWwiLCJfd3JhcHBlciIsIlJlYWN0aXZlTW9kZWwiLCJhc3Nlc3NtZW50IiwibW9kZWwiLCJBaUxlYXJuV3JhcHBlciIsInNlc3Npb25Nb2RlbCIsInF1ZXN0aW9ucyIsIk1hcCIsImFuc3dlcnMiLCJpc1ZhbGlkIiwic2l6ZSIsImxlbmd0aCIsInNlbGVjdGlvbiIsImNvbnN0cnVjdG9yIiwic2Vzc2lvbkFzc2Vzc21lbnQiLCJvbiIsInRyaWdnZXJFdmVudCIsImxvYWQiLCJyZWFkeSIsInNhdmUiLCJkYXRhIiwicGFyYW1zIiwiaXMiLCJsZXNzb25JZCIsImlkIiwidG9waWNJZCIsInJlc3VsdCIsInNhdmVTZWxlY3Rpb24iLCJzZXRBbnN3ZXIiLCJxdWVzdGlvbiIsInNldCIsInRyaWdnZXIiLCJfcmVhY3QiLCJ1c2VTdG9yZSIsImFzc2Vzc21lbnRzIiwic2V0U3RvcmUiLCJkZWZhdWx0IiwidXNlU3RhdGUiLCJzZXRSZWFkeSIsInNldFNlbGVjdGlvbiIsInZpZXciLCJzZXRWaWV3IiwidXNlRWZmZWN0IiwiaW5zdGFuY2UiLCJvbkNoYW5nZSIsIm9uVmlld0NoYW5nZSIsIm9mZiIsIl9mb3JtIiwiX2Fuc3dlciIsIklucHV0Q29udHJvbCIsImRvbmUiLCJvcHRpb24iLCJpc011bHRpcGxlIiwiQ29udHJvbCIsIkNoZWNrQm94IiwiUmFkaW8iLCJBbnN3ZXIiLCJjcmVhdGVFbGVtZW50IiwibGFiZWwiLCJyZXF1aXJlZCIsIkZvcm1Db250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUZvcm1Db250ZXh0IiwidXNlQ29udGV4dCIsIkZvcm0iLCJwcm9wcyIsIm9uU3VibWl0IiwiZmV0Y2hpbmciLCJyZXN0UHJvcHMiLCJzZXRJc1ZhbGlkIiwicmVmIiwidXNlUmVmIiwidG90YWxBbnN3ZXJlZCIsImRpc2FibGVkIiwiaXNGb3JtUmVhZHkiLCJmb3JtIiwiY3VycmVudCIsImNvbnNvbGUiLCJlcnJvciIsImNoZWNrZWRSYWRpb0dyb3VwcyIsIlNldCIsImhhcyIsInJhZGlvR3JvdXAiLCJxdWVyeVNlbGVjdG9yQWxsIiwic29tZSIsInJhZGlvIiwiYWRkIiwiSFRNTElucHV0RWxlbWVudCIsImluY2x1ZGVzIiwiX2NvbXBvbmVudHMiLCJfaG9va3MiLCJTdWJtaXRCdXR0b24iLCJzZXREaXNhYmxlZCIsInVzZUJpbmRlciIsImNoaWxkcmVuIiwiYXR0cnMiLCJCdXR0b24iLCJfcXVlc3Rpb24iLCJfYmV5b25kX2NvbnRleHQiLCJfc3VibWl0QnV0dG9uIiwiX2dldEZvcm1EYXRhIiwiX2Zvcm1Db250ZXh0IiwiU2VsZWN0aW9uRm9ybSIsInRleHRzUmVhZHkiLCJ0ZXh0cyIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwic2V0RXJyb3IiLCJzZXRGZXRjaGluZyIsIlNwaW5uZXIiLCJhY3RpdmUiLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwidGFyZ2V0IiwiZSIsIm1lc3NhZ2UiLCJvdXRwdXQiLCJtYXAiLCJpbmRleCIsIlF1ZXN0aW9uIiwia2V5IiwiUHJvdmlkZXIiLCJjbGFzc05hbWUiLCJ0aXRsZSIsInZhcmlhbnQiLCJmaW5pc2giLCJfSW5wdXQiLCJpIiwiaW5wdXRzIiwib3B0aW9ucyIsInRleHQiLCJfcmVzdWx0cyIsIl91c2VTdG9yZSIsInN0b3JlUmVhZHkiLCJ2aWV3cyIsInJlc3VsdHMiLCJSZXN1bHRzIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfYWxlcnQiLCJldmFsdWF0aW9uIiwiY291bnRlcnMiLCJjbHMiLCJhbnN3ZXIiLCJjb3JyZWN0X2Fuc3dlciIsImFjY3VyYWN5IiwiQWxlcnQiLCJjb3JyZWN0IiwidG90YWwiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9oZWxwZXJzL2dldC1mb3JtLWRhdGEudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdXNlLXN0b3JlLnRzIiwiL3RzL3ZpZXdzL2Zvcm0vSW5wdXQudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vY29udHJvbHMvZm9ybS1jb250ZXh0LnRzeCIsIi90cy92aWV3cy9mb3JtL2NvbnRyb2xzL2luZGV4LnRzeCIsIi90cy92aWV3cy9mb3JtL2NvbnRyb2xzL2lzLXJlYWR5LWZ1bmN0aW9uLnRzIiwiL3RzL3ZpZXdzL2Zvcm0vY29udHJvbHMvc3VibWl0LWJ1dHRvbi50c3giLCIvdHMvdmlld3MvZm9ybS9pbmRleC50c3giLCIvdHMvdmlld3MvZm9ybS9xdWVzdGlvbi50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2ludGVyZmFjZXMvYW5zd2VyLnRzeCIsIi9xdWVzdGlvbnMudHMiLCIvc2VsZWN0aW9uLXByb3BzLnRzIiwiL3RzL3ZpZXdzL3Jlc3VsdHMvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFB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