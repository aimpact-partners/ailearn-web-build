System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.1/base", "@beyond-js/reactive@1.1.6/model", "@aimpact/ailearn-app@0.0.2/model/wrapper", "react@18.2.0", "pragmate-ui@0.0.37/form", "pragmate-ui@0.0.37/components", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.0.37/alert"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, bimport, __Bundle, __pkg, ims, Controller, Form, SelectionForm, Selection, Results, __beyond_pkg, hmr;
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
    }, function (_beyondJsReactive116Model) {
      dependency_3 = _beyondJsReactive116Model;
    }, function (_aimpactAilearnApp002ModelWrapper) {
      dependency_4 = _aimpactAilearnApp002ModelWrapper;
    }, function (_react2) {
      dependency_5 = _react2;
    }, function (_pragmateUi0037Form) {
      dependency_6 = _pragmateUi0037Form;
    }, function (_pragmateUi0037Components) {
      dependency_7 = _pragmateUi0037Components;
    }, function (_aimpactChat101SharedHooks) {
      dependency_8 = _aimpactChat101SharedHooks;
    }, function (_pragmateUi0037Alert) {
      dependency_9 = _pragmateUi0037Alert;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.6"], ["pragmate-ui", "0.0.37"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["chart.js", "4.4.0"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "10.1.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.18"], ["@types/react-dom", "18.2.7"], ["@aimpact/ailearn-app", "0.0.2"], ["@aimpact/ailearn-app", "0.0.2"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.2/assessments/selection",
          "multibundle": true
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['@beyond-js/react-18-widgets/base', dependency_2], ['@beyond-js/reactive/model', dependency_3], ['@aimpact/ailearn-app/model/wrapper', dependency_4], ['react', dependency_5], ['pragmate-ui/form', dependency_6], ['pragmate-ui/components', dependency_7], ['@aimpact/chat/shared/hooks', dependency_8], ['pragmate-ui/alert', dependency_9]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.2/assessments/selection.code');
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
        hash: 2704850444,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _wrapper = require("@aimpact/ailearn-app/model/wrapper");
          class StoreManager extends _model.ReactiveModel {
            get assessment() {
              return _wrapper.AiLearnWrapper.sessionAssessment;
            }
            get model() {
              return _wrapper.AiLearnWrapper.sessionModel;
            }
            load() {
              this.ready = true;
            }
            save(data) {
              let params = {
                answers: data
              };
              if (this.model.is === 'lesson') params.lessonId = this.model.id;else params.topicId = this.model.id;
              return this.assessment.saveSelection(params);
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /***************************
      INTERNAL MODULE: ./use-store
      ***************************/

      ims.set('./use-store', {
        hash: 281091508,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useStore = useStore;
          var _react = require("react");
          var _store = require("./store");
          function useStore() {
            const [store, setStore] = _react.default.useState(new _store.StoreManager({}));
            const [ready, setReady] = _react.default.useState(store.ready);
            _react.default.useEffect(() => {
              const onChange = () => {
                setReady(store.ready);
              };
              store.on('change', onChange);
              store.load();
              if (store.ready) setReady(store.ready);
              return () => {};
            }, [store]);
            return [ready, store];
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./views/form/Input
      **********************************/

      ims.set('./views/form/Input', {
        hash: 3913941275,
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
            isMultiple
          }) => {
            let Control = isMultiple ? _form.CheckBox : _form.Radio;
            if (done) Control = _answer.Answer;
            return _react.default.createElement(Control, {
              label: option,
              value: value,
              name: name,
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
        hash: 995210617,
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
        hash: 3406935444,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Form = Form;
          var _react = require("react");
          var _formContext = require("./form-context");
          /*bundle*/
          function Form(props) {
            const {
              onSubmit,
              ...restProps
            } = props;
            const handleSubmit = event => {
              event.preventDefault();
              event.stopPropagation();
              props.onSubmit(event);
            };
            const [isValid, setIsValid] = _react.default.useState(false);
            const ref = _react.default.useRef(null);
            // formChecker.ts
            const isFormReady = () => {
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
                  } else if (element.value === '') return false;
                }
              }
              return true;
            };
            _react.default.useEffect(() => {
              const onChange = event => {
                setIsValid(isFormReady());
              };
              ref.current.addEventListener('change', onChange);
              return () => ref.current?.removeEventListener('change', onChange);
            }, []);
            const value = {
              isValid
            };
            return _react.default.createElement(_formContext.FormContext.Provider, {
              value: value
            }, _react.default.createElement("form", {
              onSubmit: handleSubmit,
              ...restProps,
              ref: ref
            }, props.children));
          }
        }
      });

      /***************************************************
      INTERNAL MODULE: ./views/form/controls/submit-button
      ***************************************************/

      ims.set('./views/form/controls/submit-button', {
        hash: 4047964628,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SubmitButton = SubmitButton;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _formContext = require("./form-context");
          function SubmitButton(props) {
            const {
              isValid
            } = (0, _formContext.useFormContext)();
            const {
              children
            } = props;
            const attrs = {
              ...props
            };
            attrs.disabled = !isValid;
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
        hash: 3101177695,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SelectionForm = void 0;
          var _react = require("react");
          var _question = require("./question");
          var _controls = require("./controls");
          var _components = require("pragmate-ui/components");
          var _hooks = require("@aimpact/chat/shared/hooks");
          var _beyond_context = require("beyond_context");
          var _submitButton = require("./controls/submit-button");
          var _getFormData = require("../../helpers/get-form-data");
          var _useStore = require("../../use-store");
          /*bundle*/
          const SelectionForm = ({
            assessments
          }) => {
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            const [error, setError] = _react.default.useState('');
            const [storeReady, store] = (0, _useStore.useStore)();
            const [fetching, setFetching] = _react.default.useState(false);
            if (!textsReady || !storeReady) return _react.default.createElement(_components.Spinner, {
              active: true
            });
            const handleSubmit = e => {
              try {
                e.preventDefault();
                setFetching(true);
                const form = e.target;
                const formData = new FormData(form);
                const data = (0, _getFormData.getFormData)(form);
                store.save(data);
              } catch (e) {
                setError(e.message);
              } finally {
                setFetching(false);
              }
            };
            const disabled = {
              disabled: !fetching
            };
            const output = assessments.questions.map((question, index) => _react.default.createElement(_question.Question, {
              key: index,
              index: `${index}`,
              question: question
            }));
            return _react.default.createElement(_controls.Form, {
              onSubmit: handleSubmit,
              className: "assessment__container"
            }, _react.default.createElement("h3", null, assessments.title), output, _react.default.createElement(_submitButton.SubmitButton, {
              ...disabled,
              variant: "primary",
              type: "submit"
            }, texts?.finish));
          };
          exports.SelectionForm = SelectionForm;
        }
      });

      /*************************************
      INTERNAL MODULE: ./views/form/question
      *************************************/

      ims.set('./views/form/question', {
        hash: 3796771557,
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
            index
          }) => {
            const inputs = question.options.map((option, i) => {
              return _react.default.createElement(_Input.InputControl, {
                key: `${index}.${i}`,
                value: `${i}`,
                option: option,
                name: index,
                isMultiple: question.isMultiple
              });
            });
            const onSubmit = event => {
              event.preventDefault();
            };
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
        hash: 3993934189,
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
            const [storeReady, store] = (0, _useStore.useStore)();
            if (!textsReady || !storeReady) return _react.default.createElement(_components.Spinner, {
              active: true
            });
            const Control = !!store.assessment.selection ? _results.Results : _form.SelectionForm;
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
        hash: 1346757715,
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
            } = store.assessment;
            const output = assessments.questions.map((question, index) => {
              const data = evaluation.answers[index];
              const options = question.options.map((option, i) => {
                let cls = `option-item${data.answer === i ? ' option--selected' : ''} `;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsIlNlbGVjdGlvbiIsImV4cG9ydHMiLCJnZXRGb3JtRGF0YSIsImZvcm1FbGVtZW50IiwiZm9ybURhdGEiLCJBcnJheSIsImZyb20iLCJlbGVtZW50cyIsImZvckVhY2giLCJlbGVtZW50IiwibmFtZSIsInR5cGUiLCJjaGVja2VkIiwidmFsdWUiLCJfbW9kZWwiLCJfd3JhcHBlciIsIlJlYWN0aXZlTW9kZWwiLCJhc3Nlc3NtZW50IiwiQWlMZWFybldyYXBwZXIiLCJzZXNzaW9uQXNzZXNzbWVudCIsIm1vZGVsIiwic2Vzc2lvbk1vZGVsIiwibG9hZCIsInJlYWR5Iiwic2F2ZSIsImRhdGEiLCJwYXJhbXMiLCJhbnN3ZXJzIiwiaXMiLCJsZXNzb25JZCIsImlkIiwidG9waWNJZCIsInNhdmVTZWxlY3Rpb24iLCJfcmVhY3QiLCJ1c2VTdG9yZSIsInNldFN0b3JlIiwiZGVmYXVsdCIsInVzZVN0YXRlIiwic2V0UmVhZHkiLCJ1c2VFZmZlY3QiLCJvbkNoYW5nZSIsIm9uIiwiX2Zvcm0iLCJfYW5zd2VyIiwiSW5wdXRDb250cm9sIiwiZG9uZSIsIm9wdGlvbiIsImlzTXVsdGlwbGUiLCJDb250cm9sIiwiQ2hlY2tCb3giLCJSYWRpbyIsIkFuc3dlciIsImNyZWF0ZUVsZW1lbnQiLCJsYWJlbCIsInJlcXVpcmVkIiwiRm9ybUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlRm9ybUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2Zvcm1Db250ZXh0IiwiRm9ybSIsInByb3BzIiwib25TdWJtaXQiLCJyZXN0UHJvcHMiLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiaXNWYWxpZCIsInNldElzVmFsaWQiLCJyZWYiLCJ1c2VSZWYiLCJpc0Zvcm1SZWFkeSIsImZvcm0iLCJjdXJyZW50IiwiY29uc29sZSIsImVycm9yIiwiY2hlY2tlZFJhZGlvR3JvdXBzIiwiU2V0IiwiaGFzIiwicmFkaW9Hcm91cCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzb21lIiwicmFkaW8iLCJhZGQiLCJIVE1MSW5wdXRFbGVtZW50IiwiaW5jbHVkZXMiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIlByb3ZpZGVyIiwiY2hpbGRyZW4iLCJfY29tcG9uZW50cyIsIlN1Ym1pdEJ1dHRvbiIsImF0dHJzIiwiZGlzYWJsZWQiLCJCdXR0b24iLCJfcXVlc3Rpb24iLCJfY29udHJvbHMiLCJfaG9va3MiLCJfYmV5b25kX2NvbnRleHQiLCJfc3VibWl0QnV0dG9uIiwiX2dldEZvcm1EYXRhIiwiX3VzZVN0b3JlIiwiU2VsZWN0aW9uRm9ybSIsImFzc2Vzc21lbnRzIiwidGV4dHNSZWFkeSIsInRleHRzIiwidXNlVGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJzZXRFcnJvciIsInN0b3JlUmVhZHkiLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwiU3Bpbm5lciIsImFjdGl2ZSIsImUiLCJ0YXJnZXQiLCJGb3JtRGF0YSIsIm1lc3NhZ2UiLCJvdXRwdXQiLCJxdWVzdGlvbnMiLCJtYXAiLCJxdWVzdGlvbiIsImluZGV4IiwiUXVlc3Rpb24iLCJrZXkiLCJjbGFzc05hbWUiLCJ0aXRsZSIsInZhcmlhbnQiLCJmaW5pc2giLCJfSW5wdXQiLCJpbnB1dHMiLCJvcHRpb25zIiwiaSIsInRleHQiLCJfcmVzdWx0cyIsInNlbGVjdGlvbiIsIlJlc3VsdHMiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsIl9hbGVydCIsImV2YWx1YXRpb24iLCJjb3VudGVycyIsImNscyIsImFuc3dlciIsImFjY3VyYWN5IiwicmVzdWx0cyIsIkFsZXJ0IiwiY29ycmVjdCIsInRvdGFsIiwid3JvbmciXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9oZWxwZXJzL2dldC1mb3JtLWRhdGEudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdXNlLXN0b3JlLnRzIiwiL3RzL3ZpZXdzL2Zvcm0vSW5wdXQudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vY29udHJvbHMvZm9ybS1jb250ZXh0LnRzeCIsIi90cy92aWV3cy9mb3JtL2NvbnRyb2xzL2luZGV4LnRzeCIsIi90cy92aWV3cy9mb3JtL2NvbnRyb2xzL3N1Ym1pdC1idXR0b24udHN4IiwiL3RzL3ZpZXdzL2Zvcm0vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vcXVlc3Rpb24udHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9pbnRlcmZhY2VzL2Fuc3dlci50c3giLCIvcXVlc3Rpb25zLnRzIiwiL3NlbGVjdGlvbi1wcm9wcy50cyIsIi90cy92aWV3cy9yZXN1bHRzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyxxQkFBcUI7WUFDN0MsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJSixNQUFBLENBQUFNLFlBQVksRUFBRTtjQUNoQyxPQUFPLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ25CO1lBQ0EsSUFBSUcsTUFBTUEsQ0FBQTtjQUNULE9BQU9OLE1BQUEsQ0FBQU8sU0FBUztZQUNqQjs7VUFD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