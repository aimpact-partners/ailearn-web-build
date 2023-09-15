System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.1/base", "@beyond-js/reactive@1.1.5/model", "@aimpact/ailearn-app@1.0.0/model/wrapper", "react@18.2.0", "pragmate-ui@0.0.36/form", "pragmate-ui@0.0.36/components", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.0.36/alert"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, bimport, __Bundle, __pkg, ims, Controller, Form, Selection, Results, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    Form: void 0,
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
    }, function (_beyondJsReactive115Model) {
      dependency_3 = _beyondJsReactive115Model;
    }, function (_aimpactAilearnApp100ModelWrapper) {
      dependency_4 = _aimpactAilearnApp100ModelWrapper;
    }, function (_react2) {
      dependency_5 = _react2;
    }, function (_pragmateUi0036Form) {
      dependency_6 = _pragmateUi0036Form;
    }, function (_pragmateUi0036Components) {
      dependency_7 = _pragmateUi0036Components;
    }, function (_aimpactChat101SharedHooks) {
      dependency_8 = _aimpactChat101SharedHooks;
    }, function (_pragmateUi0036Alert) {
      dependency_9 = _pragmateUi0036Alert;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.2"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "10.1.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.18"], ["@types/react-dom", "18.2.7"], ["@aimpact/ailearn-app", "1.0.0"], ["@aimpact/ailearn-app", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@1.0.0/assessments/selection",
          "multibundle": true
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['@beyond-js/react-18-widgets/base', dependency_2], ['@beyond-js/reactive/model', dependency_3], ['@aimpact/ailearn-app/model/wrapper', dependency_4], ['react', dependency_5], ['pragmate-ui/form', dependency_6], ['pragmate-ui/components', dependency_7], ['@aimpact/chat/shared/hooks', dependency_8], ['pragmate-ui/alert', dependency_9]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@1.0.0/assessments/selection.code');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 1397135606,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _base = require("@beyond-js/react-18-widgets/base");
          var _store = require("./store");
          var _question = require("./views/form/question");
          /*bundle*/
          class Controller extends _base.ReactWidgetController {
            #store;
            createStore() {
              this.#store = new _store.StoreManager();
              return this.#store;
            }
            get Widget() {
              return _question.Widget;
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
        hash: 3533809013,
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
        hash: 675574541,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Selection = void 0;
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
          const Selection = ({
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
          exports.Selection = Selection;
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
        hash: 2909783835,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Selection = void 0;
          var _react = require("react");
          var _form = require("./form");
          var _components = require("pragmate-ui/components");
          var _hooks = require("@aimpact/chat/shared/hooks");
          var _beyond_context = require("beyond_context");
          var _useStore = require("../use-store");
          var _results = require("./results");
          /*bundle*/ // formUtils.ts
          const Selection = ({
            assessments
          }) => {
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            const [error, setError] = _react.default.useState('');
            const [storeReady, store] = (0, _useStore.useStore)();
            if (!textsReady || !storeReady) return _react.default.createElement(_components.Spinner, {
              active: true
            });
            const Control = !!store.assessment.selection ? _results.Results : _form.Form;
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
        hash: 4047692469,
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
        "from": "Selection",
        "name": "Selection"
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
        (require || prop === 'Selection') && _export("Selection", Selection = require ? require('./views/form/index').Selection : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfcXVlc3Rpb24iLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsImV4cG9ydHMiLCJnZXRGb3JtRGF0YSIsImZvcm1FbGVtZW50IiwiZm9ybURhdGEiLCJBcnJheSIsImZyb20iLCJlbGVtZW50cyIsImZvckVhY2giLCJlbGVtZW50IiwibmFtZSIsInR5cGUiLCJjaGVja2VkIiwidmFsdWUiLCJfbW9kZWwiLCJfd3JhcHBlciIsIlJlYWN0aXZlTW9kZWwiLCJhc3Nlc3NtZW50IiwiQWlMZWFybldyYXBwZXIiLCJzZXNzaW9uQXNzZXNzbWVudCIsIm1vZGVsIiwic2Vzc2lvbk1vZGVsIiwibG9hZCIsInJlYWR5Iiwic2F2ZSIsImRhdGEiLCJwYXJhbXMiLCJhbnN3ZXJzIiwiaXMiLCJsZXNzb25JZCIsImlkIiwidG9waWNJZCIsInNhdmVTZWxlY3Rpb24iLCJfcmVhY3QiLCJ1c2VTdG9yZSIsInNldFN0b3JlIiwiZGVmYXVsdCIsInVzZVN0YXRlIiwic2V0UmVhZHkiLCJ1c2VFZmZlY3QiLCJvbkNoYW5nZSIsIm9uIiwiX2Zvcm0iLCJfYW5zd2VyIiwiSW5wdXRDb250cm9sIiwiZG9uZSIsIm9wdGlvbiIsImlzTXVsdGlwbGUiLCJDb250cm9sIiwiQ2hlY2tCb3giLCJSYWRpbyIsIkFuc3dlciIsImNyZWF0ZUVsZW1lbnQiLCJsYWJlbCIsInJlcXVpcmVkIiwiRm9ybUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlRm9ybUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2Zvcm1Db250ZXh0IiwiRm9ybSIsInByb3BzIiwib25TdWJtaXQiLCJyZXN0UHJvcHMiLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiaXNWYWxpZCIsInNldElzVmFsaWQiLCJyZWYiLCJ1c2VSZWYiLCJpc0Zvcm1SZWFkeSIsImZvcm0iLCJjdXJyZW50IiwiY29uc29sZSIsImVycm9yIiwiY2hlY2tlZFJhZGlvR3JvdXBzIiwiU2V0IiwiaGFzIiwicmFkaW9Hcm91cCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzb21lIiwicmFkaW8iLCJhZGQiLCJIVE1MSW5wdXRFbGVtZW50IiwiaW5jbHVkZXMiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIlByb3ZpZGVyIiwiY2hpbGRyZW4iLCJfY29tcG9uZW50cyIsIlN1Ym1pdEJ1dHRvbiIsImF0dHJzIiwiZGlzYWJsZWQiLCJCdXR0b24iLCJfY29udHJvbHMiLCJfaG9va3MiLCJfYmV5b25kX2NvbnRleHQiLCJfc3VibWl0QnV0dG9uIiwiX2dldEZvcm1EYXRhIiwiX3VzZVN0b3JlIiwiU2VsZWN0aW9uIiwiYXNzZXNzbWVudHMiLCJ0ZXh0c1JlYWR5IiwidGV4dHMiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInNldEVycm9yIiwic3RvcmVSZWFkeSIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJTcGlubmVyIiwiYWN0aXZlIiwiZSIsInRhcmdldCIsIkZvcm1EYXRhIiwibWVzc2FnZSIsIm91dHB1dCIsInF1ZXN0aW9ucyIsIm1hcCIsInF1ZXN0aW9uIiwiaW5kZXgiLCJRdWVzdGlvbiIsImtleSIsImNsYXNzTmFtZSIsInRpdGxlIiwidmFyaWFudCIsImZpbmlzaCIsIl9JbnB1dCIsImlucHV0cyIsIm9wdGlvbnMiLCJpIiwidGV4dCIsIl9yZXN1bHRzIiwic2VsZWN0aW9uIiwiUmVzdWx0cyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX2FsZXJ0IiwiZXZhbHVhdGlvbiIsImNvdW50ZXJzIiwiY2xzIiwiYW5zd2VyIiwiYWNjdXJhY3kiLCJyZXN1bHRzIiwiQWxlcnQiLCJjb3JyZWN0IiwidG90YWwiLCJ3cm9uZyJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL2hlbHBlcnMvZ2V0LWZvcm0tZGF0YS50cyIsIi90cy9zdG9yZS50cyIsIi90cy91c2Utc3RvcmUudHMiLCIvdHMvdmlld3MvZm9ybS9JbnB1dC50c3giLCIvdHMvdmlld3MvZm9ybS9jb250cm9scy9mb3JtLWNvbnRleHQudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vY29udHJvbHMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vY29udHJvbHMvc3VibWl0LWJ1dHRvbi50c3giLCIvdHMvdmlld3MvZm9ybS9pbmRleC50c3giLCIvdHMvdmlld3MvZm9ybS9xdWVzdGlvbi50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2ludGVyZmFjZXMvYW5zd2VyLnRzeCIsIi9xdWVzdGlvbnMudHMiLCIvc2VsZWN0aW9uLXByb3BzLnRzIiwiL3RzL3ZpZXdzL3Jlc3VsdHMvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsU0FBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsscUJBQXFCO1lBQzdDLENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUosTUFBQSxDQUFBTSxZQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNuQjtZQUNBLElBQUlHLE1BQU1BLENBQUE7Y0FDVCxPQUFPTixTQUFBLENBQUFNLE1BQU07WUFDZDs7VUFDQUMsT0FBQSxDQUFBTixVQUFBLEdBQUFBLFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDWk0sTUFBTU8sV0FBVyxHQUFJQyxXQUE0QixJQUFvQjtZQUMzRSxNQUFNQyxRQUFRLEdBQW9CLEVBQUU7WUFFcENDLEtBQUssQ0FBQ0MsSUFBSSxDQUFDSCxXQUFXLENBQUNJLFFBQVEsQ0FBQyxDQUFDQyxPQUFPLENBQUVDLE9BQXlCLElBQUk7Y0FDdEUsSUFBSUEsT0FBTyxDQUFDQyxJQUFJLEVBQUU7Z0JBQ2pCLElBQUlELE9BQU8sQ0FBQ0UsSUFBSSxLQUFLLFVBQVUsRUFBRTtrQkFDaENQLFFBQVEsQ0FBQ0ssT0FBTyxDQUFDQyxJQUFJLENBQUMsR0FBR0QsT0FBTyxDQUFDRyxPQUFPO2lCQUN4QyxNQUFNLElBQUlILE9BQU8sQ0FBQ0UsSUFBSSxLQUFLLE9BQU8sRUFBRTtrQkFDcEMsSUFBSUYsT0FBTyxDQUFDRyxPQUFPLEVBQUU7b0JBQ3BCUixRQUFRLENBQUNLLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDLEdBQUdELE9BQU8sQ0FBQ0ksS0FBSzs7aUJBRXZDLE1BQU07a0JBQ05ULFFBQVEsQ0FBQ0ssT0FBTyxDQUFDQyxJQUFJLENBQUMsR0FBR0QsT0FBTyxDQUFDSSxLQUFLOzs7WUFHekMsQ0FBQyxDQUFDO1lBRUYsT0FBT1QsUUFBUTtVQUNoQixDQUFDO1VBQUNILE9BQUEsQ0FBQUMsV0FBQSxHQUFBQSxXQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ25CRixJQUFBWSxNQUFBLEdBQUF0QixPQUFBO1VBQ0EsSUFBQXVCLFFBQUEsR0FBQXZCLE9BQUE7VUFPTSxNQUFPTyxZQUFhLFNBQVFlLE1BQUEsQ0FBQUUsYUFBMkI7WUFDNUQsSUFBSUMsVUFBVUEsQ0FBQTtjQUNiLE9BQU9GLFFBQUEsQ0FBQUcsY0FBYyxDQUFDQyxpQkFBaUI7WUFDeEM7WUFFQSxJQUFJQyxLQUFLQSxDQUFBO2NBQ1IsT0FBT0wsUUFBQSxDQUFBRyxjQUFjLENBQUNHLFlBQVk7WUFDbkM7WUFDQUMsSUFBSUEsQ0FBQTtjQUNILElBQUksQ0FBQ0MsS0FBSyxHQUFHLElBQUk7WUFDbEI7WUFFQUMsSUFBSUEsQ0FBQ0MsSUFBSTtjQUNSLElBQUlDLE1BQU0sR0FBd0I7Z0JBQ2pDQyxPQUFPLEVBQUVGO2VBQ1Q7Y0FDRCxJQUFJLElBQUksQ0FBQ0wsS0FBSyxDQUFDUSxFQUFFLEtBQUssUUFBUSxFQUFFRixNQUFNLENBQUNHLFFBQVEsR0FBRyxJQUFJLENBQUNULEtBQUssQ0FBQ1UsRUFBRSxDQUFDLEtBQzNESixNQUFNLENBQUNLLE9BQU8sR0FBRyxJQUFJLENBQUNYLEtBQUssQ0FBQ1UsRUFBRTtjQUVuQyxPQUFPLElBQUksQ0FBQ2IsVUFBVSxDQUFDZSxhQUFhLENBQUNOLE1BQU0sQ0FBQztZQUM3Qzs7VUFDQXpCLE9BQUEsQ0FBQUYsWUFBQSxHQUFBQSxZQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQzlCRCxJQUFBa0MsTUFBQSxHQUFBekMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUVNLFNBQVUwQyxRQUFRQSxDQUFBO1lBQ3ZCLE1BQU0sQ0FBQ3JDLEtBQUssRUFBRXNDLFFBQVEsQ0FBQyxHQUFHRixNQUFBLENBQUFHLE9BQUssQ0FBQ0MsUUFBUSxDQUFDLElBQUk1QyxNQUFBLENBQUFNLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUM5RCxNQUFNLENBQUN3QixLQUFLLEVBQUVlLFFBQVEsQ0FBQyxHQUFHTCxNQUFBLENBQUFHLE9BQUssQ0FBQ0MsUUFBUSxDQUFDeEMsS0FBSyxDQUFDMEIsS0FBSyxDQUFDO1lBQ3JEVSxNQUFBLENBQUFHLE9BQUssQ0FBQ0csU0FBUyxDQUFDLE1BQUs7Y0FDcEIsTUFBTUMsUUFBUSxHQUFHQSxDQUFBLEtBQUs7Z0JBQ3JCRixRQUFRLENBQUN6QyxLQUFLLENBQUMwQixLQUFLLENBQUM7Y0FDdEIsQ0FBQztjQUNEMUIsS0FBSyxDQUFDNEMsRUFBRSxDQUFDLFFBQVEsRUFBRUQsUUFBUSxDQUFDO2NBQzVCM0MsS0FBSyxDQUFDeUIsSUFBSSxFQUFFO2NBQ1osSUFBSXpCLEtBQUssQ0FBQzBCLEtBQUssRUFBRWUsUUFBUSxDQUFDekMsS0FBSyxDQUFDMEIsS0FBSyxDQUFDO2NBQ3RDLE9BQU8sTUFBSyxDQUFFLENBQUM7WUFDaEIsQ0FBQyxFQUFFLENBQUMxQixLQUFLLENBQUMsQ0FBQztZQUVYLE9BQU8sQ0FBQzBCLEtBQUssRUFBRTFCLEtBQUssQ0FBQztVQUN0Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNqQkEsSUFBQW9DLE1BQUEsR0FBQXpDLE9BQUE7VUFFQSxJQUFBa0QsS0FBQSxHQUFBbEQsT0FBQTtVQUNBLElBQUFtRCxPQUFBLEdBQUFuRCxPQUFBO1VBVU8sTUFBTW9ELFlBQVksR0FBeUJBLENBQUM7WUFBRUMsSUFBSTtZQUFFaEMsS0FBSztZQUFFaUMsTUFBTTtZQUFFcEMsSUFBSTtZQUFFcUM7VUFBVSxDQUFFLEtBQUk7WUFDL0YsSUFBSUMsT0FBTyxHQUFHRCxVQUFVLEdBQUdMLEtBQUEsQ0FBQU8sUUFBUSxHQUFHUCxLQUFBLENBQUFRLEtBQUs7WUFDM0MsSUFBSUwsSUFBSSxFQUFFRyxPQUFPLEdBQUdMLE9BQUEsQ0FBQVEsTUFBTTtZQUMxQixPQUFPbEIsTUFBQSxDQUFBRyxPQUFBLENBQUFnQixhQUFBLENBQUNKLE9BQU87Y0FBQ0ssS0FBSyxFQUFFUCxNQUFNO2NBQUVqQyxLQUFLLEVBQUVBLEtBQUs7Y0FBRUgsSUFBSSxFQUFFQSxJQUFJO2NBQUU0QyxRQUFRO1lBQUEsRUFBRztVQUNyRSxDQUFDO1VBQUNyRCxPQUFBLENBQUEyQyxZQUFBLEdBQUFBLFlBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDakJGLElBQUFYLE1BQUEsR0FBQXpDLE9BQUE7VUFLTyxNQUFNK0QsV0FBVyxHQUFHdEIsTUFBQSxDQUFBRyxPQUFLLENBQUNvQixhQUFhLENBQUMsRUFBa0IsQ0FBQztVQUFDdkQsT0FBQSxDQUFBc0QsV0FBQSxHQUFBQSxXQUFBO1VBQzVELE1BQU1FLGNBQWMsR0FBR0EsQ0FBQSxLQUFNeEIsTUFBQSxDQUFBRyxPQUFLLENBQUNzQixVQUFVLENBQUNILFdBQVcsQ0FBQztVQUFDdEQsT0FBQSxDQUFBd0QsY0FBQSxHQUFBQSxjQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ05sRSxJQUFBeEIsTUFBQSxHQUFBekMsT0FBQTtVQUNBLElBQUFtRSxZQUFBLEdBQUFuRSxPQUFBO1VBSU87VUFBVSxTQUFVb0UsSUFBSUEsQ0FBQ0MsS0FBK0I7WUFDOUQsTUFBTTtjQUFFQyxRQUFRO2NBQUUsR0FBR0M7WUFBUyxDQUFFLEdBQUdGLEtBQUs7WUFDeEMsTUFBTUcsWUFBWSxHQUFJQyxLQUFpQyxJQUFVO2NBQ2hFQSxLQUFLLENBQUNDLGNBQWMsRUFBRTtjQUN0QkQsS0FBSyxDQUFDRSxlQUFlLEVBQUU7Y0FDdkJOLEtBQUssQ0FBQ0MsUUFBUSxDQUFDRyxLQUFLLENBQUM7WUFDdEIsQ0FBQztZQUNELE1BQU0sQ0FBQ0csT0FBTyxFQUFFQyxVQUFVLENBQUMsR0FBR3BDLE1BQUEsQ0FBQUcsT0FBSyxDQUFDQyxRQUFRLENBQVUsS0FBSyxDQUFDO1lBQzVELE1BQU1pQyxHQUFHLEdBQUdyQyxNQUFBLENBQUFHLE9BQUssQ0FBQ21DLE1BQU0sQ0FBa0IsSUFBSSxDQUFDO1lBRS9DO1lBRUEsTUFBTUMsV0FBVyxHQUFHQSxDQUFBLEtBQWM7Y0FDakMsTUFBTUMsSUFBSSxHQUFHSCxHQUFHLENBQUNJLE9BQU87Y0FFeEIsSUFBSSxDQUFDRCxJQUFJLEVBQUU7Z0JBQ1ZFLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDLHlCQUF5QixDQUFDO2dCQUN4QyxPQUFPLEtBQUs7O2NBR2IsTUFBTUMsa0JBQWtCLEdBQUcsSUFBSUMsR0FBRyxFQUFVO2NBQzVDLEtBQUssTUFBTXJFLE9BQU8sSUFBSUosS0FBSyxDQUFDQyxJQUFJLENBQUNtRSxJQUFJLENBQUNsRSxRQUFRLENBQXNCLEVBQUU7Z0JBQ3JFLElBQUlFLE9BQU8sQ0FBQzZDLFFBQVEsRUFBRTtrQkFDckIsSUFBSTdDLE9BQU8sQ0FBQ0UsSUFBSSxLQUFLLE9BQU8sRUFBRTtvQkFDN0IsSUFBSWtFLGtCQUFrQixDQUFDRSxHQUFHLENBQUN0RSxPQUFPLENBQUNDLElBQUksQ0FBQyxFQUFFO3NCQUN6Qzs7b0JBRUQsTUFBTXNFLFVBQVUsR0FBR1AsSUFBSSxDQUFDUSxnQkFBZ0IsQ0FBQyxlQUFleEUsT0FBTyxDQUFDQyxJQUFJLElBQUksQ0FBQztvQkFDekUsSUFBSSxDQUFDTCxLQUFLLENBQUNDLElBQUksQ0FBQzBFLFVBQVUsQ0FBQyxDQUFDRSxJQUFJLENBQUVDLEtBQXVCLElBQUtBLEtBQUssQ0FBQ3ZFLE9BQU8sQ0FBQyxFQUFFO3NCQUM3RSxPQUFPLEtBQUs7O29CQUViaUUsa0JBQWtCLENBQUNPLEdBQUcsQ0FBQzNFLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDOztrQkFFckMsSUFBSUQsT0FBTyxZQUFZNEUsZ0JBQWdCLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQ0MsUUFBUSxDQUFDN0UsT0FBTyxDQUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDRixPQUFPLENBQUNHLE9BQU8sRUFBRTtvQkFDbkcsT0FBTyxLQUFLO21CQUNaLE1BQU0sSUFBSUgsT0FBTyxDQUFDSSxLQUFLLEtBQUssRUFBRSxFQUFFLE9BQU8sS0FBSzs7O2NBSS9DLE9BQU8sSUFBSTtZQUNaLENBQUM7WUFFRG9CLE1BQUEsQ0FBQUcsT0FBSyxDQUFDRyxTQUFTLENBQUMsTUFBSztjQUNwQixNQUFNQyxRQUFRLEdBQUd5QixLQUFLLElBQUc7Z0JBQ3hCSSxVQUFVLENBQUNHLFdBQVcsRUFBRSxDQUFDO2NBQzFCLENBQUM7Y0FDREYsR0FBRyxDQUFDSSxPQUFPLENBQUNhLGdCQUFnQixDQUFDLFFBQVEsRUFBRS9DLFFBQVEsQ0FBQztjQUNoRCxPQUFPLE1BQU04QixHQUFHLENBQUNJLE9BQU8sRUFBRWMsbUJBQW1CLENBQUMsUUFBUSxFQUFFaEQsUUFBUSxDQUFDO1lBQ2xFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFFTixNQUFNM0IsS0FBSyxHQUFHO2NBQUV1RDtZQUFPLENBQUU7WUFDekIsT0FDQ25DLE1BQUEsQ0FBQUcsT0FBQSxDQUFBZ0IsYUFBQSxDQUFDTyxZQUFBLENBQUFKLFdBQVcsQ0FBQ2tDLFFBQVE7Y0FBQzVFLEtBQUssRUFBRUE7WUFBSyxHQUNqQ29CLE1BQUEsQ0FBQUcsT0FBQSxDQUFBZ0IsYUFBQTtjQUFNVSxRQUFRLEVBQUVFLFlBQVk7Y0FBQSxHQUFNRCxTQUFTO2NBQUVPLEdBQUcsRUFBRUE7WUFBRyxHQUNuRFQsS0FBSyxDQUFDNkIsUUFBUSxDQUNULENBQ2U7VUFFekI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDL0RBLElBQUF6RCxNQUFBLEdBQUF6QyxPQUFBO1VBQ0EsSUFBQW1HLFdBQUEsR0FBQW5HLE9BQUE7VUFDQSxJQUFBbUUsWUFBQSxHQUFBbkUsT0FBQTtVQUNNLFNBQVVvRyxZQUFZQSxDQUFDL0IsS0FBSztZQUNqQyxNQUFNO2NBQUVPO1lBQU8sQ0FBRSxHQUFHLElBQUFULFlBQUEsQ0FBQUYsY0FBYyxHQUFFO1lBQ3BDLE1BQU07Y0FBRWlDO1lBQVEsQ0FBRSxHQUFHN0IsS0FBSztZQUMxQixNQUFNZ0MsS0FBSyxHQUFHO2NBQUUsR0FBR2hDO1lBQUssQ0FBRTtZQUMxQmdDLEtBQUssQ0FBQ0MsUUFBUSxHQUFHLENBQUMxQixPQUFPO1lBQ3pCLE9BQU95QixLQUFLLENBQUNILFFBQVE7WUFDckIsT0FBT3pELE1BQUEsQ0FBQUcsT0FBQSxDQUFBZ0IsYUFBQSxDQUFDdUMsV0FBQSxDQUFBSSxNQUFNO2NBQUEsR0FBS0Y7WUFBSyxHQUFHSCxRQUFRLENBQVU7VUFDOUM7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDVkEsSUFBQXpELE1BQUEsR0FBQXpDLE9BQUE7VUFDQSxJQUFBRSxTQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBd0csU0FBQSxHQUFBeEcsT0FBQTtVQUNBLElBQUFtRyxXQUFBLEdBQUFuRyxPQUFBO1VBQ0EsSUFBQXlHLE1BQUEsR0FBQXpHLE9BQUE7VUFDQSxJQUFBMEcsZUFBQSxHQUFBMUcsT0FBQTtVQUNBLElBQUEyRyxhQUFBLEdBQUEzRyxPQUFBO1VBQ0EsSUFBQTRHLFlBQUEsR0FBQTVHLE9BQUE7VUFDQSxJQUFBNkcsU0FBQSxHQUFBN0csT0FBQTtVQUVPO1VBQVcsTUFBTThHLFNBQVMsR0FBOEJBLENBQUM7WUFBRUM7VUFBVyxDQUFFLEtBQUk7WUFDbEYsTUFBTSxDQUFDQyxVQUFVLEVBQUVDLEtBQUssQ0FBQyxHQUFHLElBQUFSLE1BQUEsQ0FBQVMsUUFBUSxFQUFDUixlQUFBLENBQUFTLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDO1lBQ3RELE1BQU0sQ0FBQ2hDLEtBQUssRUFBRWlDLFFBQVEsQ0FBQyxHQUFHNUUsTUFBQSxDQUFBRyxPQUFLLENBQUNDLFFBQVEsQ0FBQyxFQUFFLENBQUM7WUFDNUMsTUFBTSxDQUFDeUUsVUFBVSxFQUFFakgsS0FBSyxDQUFDLEdBQUcsSUFBQXdHLFNBQUEsQ0FBQW5FLFFBQVEsR0FBRTtZQUN0QyxNQUFNLENBQUM2RSxRQUFRLEVBQUVDLFdBQVcsQ0FBQyxHQUFHL0UsTUFBQSxDQUFBRyxPQUFLLENBQUNDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDckQsSUFBSSxDQUFDbUUsVUFBVSxJQUFJLENBQUNNLFVBQVUsRUFBRSxPQUFPN0UsTUFBQSxDQUFBRyxPQUFBLENBQUFnQixhQUFBLENBQUN1QyxXQUFBLENBQUFzQixPQUFPO2NBQUNDLE1BQU07WUFBQSxFQUFHO1lBRXpELE1BQU1sRCxZQUFZLEdBQUltRCxDQUFrQixJQUFJO2NBQzNDLElBQUk7Z0JBQ0hBLENBQUMsQ0FBQ2pELGNBQWMsRUFBRTtnQkFDbEI4QyxXQUFXLENBQUMsSUFBSSxDQUFDO2dCQUNqQixNQUFNdkMsSUFBSSxHQUFHMEMsQ0FBQyxDQUFDQyxNQUF5QjtnQkFDeEMsTUFBTWhILFFBQVEsR0FBRyxJQUFJaUgsUUFBUSxDQUFDNUMsSUFBSSxDQUFDO2dCQUNuQyxNQUFNaEQsSUFBSSxHQUFHLElBQUEyRSxZQUFBLENBQUFsRyxXQUFXLEVBQUN1RSxJQUFJLENBQUM7Z0JBQzlCNUUsS0FBSyxDQUFDMkIsSUFBSSxDQUFDQyxJQUFJLENBQUM7ZUFDaEIsQ0FBQyxPQUFPMEYsQ0FBQyxFQUFFO2dCQUNYTixRQUFRLENBQUNNLENBQUMsQ0FBQ0csT0FBTyxDQUFDO2VBQ25CLFNBQVM7Z0JBQ1ROLFdBQVcsQ0FBQyxLQUFLLENBQUM7O1lBRXBCLENBQUM7WUFDRCxNQUFNbEIsUUFBUSxHQUFHO2NBQUVBLFFBQVEsRUFBRSxDQUFDaUI7WUFBUSxDQUFFO1lBQ3hDLE1BQU1RLE1BQU0sR0FBR2hCLFdBQVcsQ0FBQ2lCLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLENBQUNDLFFBQVEsRUFBRUMsS0FBSyxLQUN4RDFGLE1BQUEsQ0FBQUcsT0FBQSxDQUFBZ0IsYUFBQSxDQUFDMUQsU0FBQSxDQUFBa0ksUUFBUTtjQUFDQyxHQUFHLEVBQUVGLEtBQUs7Y0FBRUEsS0FBSyxFQUFFLEdBQUdBLEtBQUssRUFBRTtjQUFFRCxRQUFRLEVBQUVBO1lBQVEsRUFDM0QsQ0FBQztZQUVGLE9BQ0N6RixNQUFBLENBQUFHLE9BQUEsQ0FBQWdCLGFBQUEsQ0FBQzRDLFNBQUEsQ0FBQXBDLElBQUk7Y0FBQ0UsUUFBUSxFQUFFRSxZQUFZO2NBQUU4RCxTQUFTLEVBQUM7WUFBdUIsR0FDOUQ3RixNQUFBLENBQUFHLE9BQUEsQ0FBQWdCLGFBQUEsYUFBS21ELFdBQVcsQ0FBQ3dCLEtBQUssQ0FBTSxFQUMzQlIsTUFBTSxFQUVQdEYsTUFBQSxDQUFBRyxPQUFBLENBQUFnQixhQUFBLENBQUMrQyxhQUFBLENBQUFQLFlBQVk7Y0FBQSxHQUFLRSxRQUFRO2NBQUVrQyxPQUFPLEVBQUMsU0FBUztjQUFDckgsSUFBSSxFQUFDO1lBQVEsR0FDekQ4RixLQUFLLEVBQUV3QixNQUFNLENBQ0EsQ0FDVDtVQUVULENBQUM7VUFBQ2hJLE9BQUEsQ0FBQXFHLFNBQUEsR0FBQUEsU0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM5Q0YsSUFBQXJFLE1BQUEsR0FBQXpDLE9BQUE7VUFDQSxJQUFBMEksTUFBQSxHQUFBMUksT0FBQTtVQVNPLE1BQU1vSSxRQUFRLEdBQTZCQSxDQUFDO1lBQUVGLFFBQVE7WUFBRUM7VUFBSyxDQUFrQixLQUFJO1lBQ3pGLE1BQU1RLE1BQU0sR0FBR1QsUUFBUSxDQUFDVSxPQUFPLENBQUNYLEdBQUcsQ0FBQyxDQUFDM0UsTUFBTSxFQUFFdUYsQ0FBQyxLQUFJO2NBQ2pELE9BQ0NwRyxNQUFBLENBQUFHLE9BQUEsQ0FBQWdCLGFBQUEsQ0FBQzhFLE1BQUEsQ0FBQXRGLFlBQVk7Z0JBQ1ppRixHQUFHLEVBQUUsR0FBR0YsS0FBSyxJQUFJVSxDQUFDLEVBQUU7Z0JBQ3BCeEgsS0FBSyxFQUFFLEdBQUd3SCxDQUFDLEVBQUU7Z0JBQ2J2RixNQUFNLEVBQUVBLE1BQU07Z0JBQ2RwQyxJQUFJLEVBQUVpSCxLQUFLO2dCQUNYNUUsVUFBVSxFQUFFMkUsUUFBUSxDQUFDM0U7Y0FBVSxFQUM5QjtZQUVKLENBQUMsQ0FBQztZQUVGLE1BQU1lLFFBQVEsR0FBR0csS0FBSyxJQUFHO2NBQ3hCQSxLQUFLLENBQUNDLGNBQWMsRUFBRTtZQUN2QixDQUFDO1lBRUQsT0FDQ2pDLE1BQUEsQ0FBQUcsT0FBQSxDQUFBZ0IsYUFBQTtjQUFLMEUsU0FBUyxFQUFDO1lBQXFCLEdBQ25DN0YsTUFBQSxDQUFBRyxPQUFBLENBQUFnQixhQUFBLGFBQUtzRSxRQUFRLENBQUNZLElBQUksQ0FBTSxFQUN2QkgsTUFBTSxDQUNGO1VBRVIsQ0FBQztVQUFDbEksT0FBQSxDQUFBMkgsUUFBQSxHQUFBQSxRQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2pDRixJQUFBM0YsTUFBQSxHQUFBekMsT0FBQTtVQUVBLElBQUFrRCxLQUFBLEdBQUFsRCxPQUFBO1VBQ0EsSUFBQW1HLFdBQUEsR0FBQW5HLE9BQUE7VUFDQSxJQUFBeUcsTUFBQSxHQUFBekcsT0FBQTtVQUNBLElBQUEwRyxlQUFBLEdBQUExRyxPQUFBO1VBR0EsSUFBQTZHLFNBQUEsR0FBQTdHLE9BQUE7VUFDQSxJQUFBK0ksUUFBQSxHQUFBL0ksT0FBQTtVQVVPLFdBRlA7VUFFa0IsTUFBTThHLFNBQVMsR0FBNkJBLENBQUM7WUFBRUM7VUFBVyxDQUFFLEtBQUk7WUFDakYsTUFBTSxDQUFDQyxVQUFVLEVBQUVDLEtBQUssQ0FBQyxHQUFHLElBQUFSLE1BQUEsQ0FBQVMsUUFBUSxFQUFDUixlQUFBLENBQUFTLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDO1lBQ3RELE1BQU0sQ0FBQ2hDLEtBQUssRUFBRWlDLFFBQVEsQ0FBQyxHQUFHNUUsTUFBQSxDQUFBRyxPQUFLLENBQUNDLFFBQVEsQ0FBQyxFQUFFLENBQUM7WUFDNUMsTUFBTSxDQUFDeUUsVUFBVSxFQUFFakgsS0FBSyxDQUFDLEdBQUcsSUFBQXdHLFNBQUEsQ0FBQW5FLFFBQVEsR0FBRTtZQUV0QyxJQUFJLENBQUNzRSxVQUFVLElBQUksQ0FBQ00sVUFBVSxFQUFFLE9BQU83RSxNQUFBLENBQUFHLE9BQUEsQ0FBQWdCLGFBQUEsQ0FBQ3VDLFdBQUEsQ0FBQXNCLE9BQU87Y0FBQ0MsTUFBTTtZQUFBLEVBQUc7WUFFekQsTUFBTWxFLE9BQU8sR0FBRyxDQUFDLENBQUNuRCxLQUFLLENBQUNvQixVQUFVLENBQUN1SCxTQUFTLEdBQUdELFFBQUEsQ0FBQUUsT0FBTyxHQUFHL0YsS0FBQSxDQUFBa0IsSUFBSTtZQUM3RCxPQUFPM0IsTUFBQSxDQUFBRyxPQUFBLENBQUFnQixhQUFBLENBQUNKLE9BQU87Y0FBQ25ELEtBQUssRUFBRUEsS0FBSztjQUFFMEcsV0FBVyxFQUFFQSxXQUFXO2NBQUVFLEtBQUssRUFBRUE7WUFBSyxFQUFJO1VBQ3pFLENBQUM7VUFBQ3hHLE9BQUEsQ0FBQXFHLFNBQUEsR0FBQUEsU0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM1QkYsSUFBQXJFLE1BQUEsR0FBQXpDLE9BQUE7VUFDTSxTQUFVMkQsTUFBTUEsQ0FBQztZQUFFTCxNQUFNO1lBQUU0RTtVQUFRLENBQUU7WUFDMUMsT0FDQ3pGLE1BQUEsQ0FBQUcsT0FBQSxDQUFBZ0IsYUFBQTtjQUFLMEUsU0FBUyxFQUFDO1lBQW1DLEdBQ2pEN0YsTUFBQSxDQUFBRyxPQUFBLENBQUFnQixhQUFBLGVBQU9OLE1BQU0sQ0FBUSxDQUNoQjtVQUVSOzs7Ozs7Ozs7OztVQ1BBOztVQUVBNEYsTUFBQSxDQUFBQyxjQUFBLENBQUExSSxPQUFBO1lBQ0FZLEtBQUE7VUFDQTs7Ozs7Ozs7Ozs7VUNKQTs7VUFFQTZILE1BQUEsQ0FBQUMsY0FBQSxDQUFBMUksT0FBQTtZQUNBWSxLQUFBO1VBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDSkEsSUFBQW9CLE1BQUEsR0FBQXpDLE9BQUE7VUFFQSxJQUFBb0osTUFBQSxHQUFBcEosT0FBQTtVQUNPO1VBQVcsTUFBTWlKLE9BQU8sR0FBOEJBLENBQUM7WUFBRTVJLEtBQUs7WUFBRTRHLEtBQUs7WUFBRUY7VUFBVyxDQUFFLEtBQUk7WUFDOUYsTUFBTTtjQUNMaUMsU0FBUyxFQUFFO2dCQUNWSyxVQUFVO2dCQUNWQSxVQUFVLEVBQUU7a0JBQUVDO2dCQUFRO2NBQUU7WUFDeEIsQ0FDRCxHQUFHakosS0FBSyxDQUFDb0IsVUFBVTtZQUVwQixNQUFNc0csTUFBTSxHQUFHaEIsV0FBVyxDQUFDaUIsU0FBUyxDQUFDQyxHQUFHLENBQUMsQ0FBQ0MsUUFBUSxFQUFFQyxLQUFLLEtBQUk7Y0FDNUQsTUFBTWxHLElBQUksR0FBR29ILFVBQVUsQ0FBQ2xILE9BQU8sQ0FBQ2dHLEtBQUssQ0FBQztjQUN0QyxNQUFNUyxPQUFPLEdBQUdWLFFBQVEsQ0FBQ1UsT0FBTyxDQUFDWCxHQUFHLENBQUMsQ0FBQzNFLE1BQU0sRUFBRXVGLENBQUMsS0FBSTtnQkFDbEQsSUFBSVUsR0FBRyxHQUFHLGNBQWN0SCxJQUFJLENBQUN1SCxNQUFNLEtBQUtYLENBQUMsR0FBRyxtQkFBbUIsR0FBRyxFQUFFLEdBQUc7Z0JBQ3ZFLElBQUk1RyxJQUFJLENBQUN1SCxNQUFNLEtBQUtYLENBQUMsRUFBRTtrQkFDdEJVLEdBQUcsSUFBSSxTQUFTdEgsSUFBSSxDQUFDd0gsUUFBUSxHQUFHLGtCQUFrQixHQUFHLGdCQUFnQixFQUFFOztnQkFHeEUsT0FDQ2hILE1BQUEsQ0FBQUcsT0FBQSxDQUFBZ0IsYUFBQTtrQkFBS3lFLEdBQUcsRUFBRS9FLE1BQU07a0JBQUVnRixTQUFTLEVBQUVpQjtnQkFBRyxHQUMvQjlHLE1BQUEsQ0FBQUcsT0FBQSxDQUFBZ0IsYUFBQSxlQUFPTixNQUFNLENBQVEsQ0FDaEI7Y0FFUixDQUFDLENBQUM7Y0FDRixPQUNDYixNQUFBLENBQUFHLE9BQUEsQ0FBQWdCLGFBQUE7Z0JBQUswRSxTQUFTLEVBQUM7Y0FBa0QsR0FDaEU3RixNQUFBLENBQUFHLE9BQUEsQ0FBQWdCLGFBQUEsYUFBS3NFLFFBQVEsQ0FBQ1ksSUFBSSxDQUFNLEVBQ3ZCRixPQUFPLENBQ0g7WUFFUixDQUFDLENBQUM7WUFFRixPQUNDbkcsTUFBQSxDQUFBRyxPQUFBLENBQUFnQixhQUFBO2NBQUswRSxTQUFTLEVBQUM7WUFBdUIsR0FDckM3RixNQUFBLENBQUFHLE9BQUEsQ0FBQWdCLGFBQUEsYUFBS3FELEtBQUssQ0FBQ3lDLE9BQU8sQ0FBTSxFQUN4QmpILE1BQUEsQ0FBQUcsT0FBQSxDQUFBZ0IsYUFBQSxDQUFDd0YsTUFBQSxDQUFBTyxLQUFLO2NBQUN4SSxJQUFJLEVBQUM7WUFBTSxHQUNqQnNCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBZ0IsYUFBQTtjQUFLMEUsU0FBUyxFQUFDO1lBQTRDLEdBQzFEN0YsTUFBQSxDQUFBRyxPQUFBLENBQUFnQixhQUFBLGlCQUFTcUQsS0FBSyxDQUFDMkMsT0FBTyxFLElBQVcsRUFDakNuSCxNQUFBLENBQUFHLE9BQUEsQ0FBQWdCLGFBQUEsa0JBQ0NuQixNQUFBLENBQUFHLE9BQUEsQ0FBQWdCLGFBQUEsZUFBTzBGLFFBQVEsQ0FBQ00sT0FBTyxDQUFRLEUsS0FBQ25ILE1BQUEsQ0FBQUcsT0FBQSxDQUFBZ0IsYUFBQSxlQUFPMEYsUUFBUSxDQUFDTyxLQUFLLENBQVEsQ0FDcEQsQ0FDTCxFQUNOcEgsTUFBQSxDQUFBRyxPQUFBLENBQUFnQixhQUFBO2NBQUswRSxTQUFTLEVBQUM7WUFBNEMsR0FDMUQ3RixNQUFBLENBQUFHLE9BQUEsQ0FBQWdCLGFBQUEsaUJBQVNxRCxLQUFLLENBQUM2QyxLQUFLLEUsSUFBVyxFQUMvQnJILE1BQUEsQ0FBQUcsT0FBQSxDQUFBZ0IsYUFBQSxrQkFDQ25CLE1BQUEsQ0FBQUcsT0FBQSxDQUFBZ0IsYUFBQSxlQUFPMEYsUUFBUSxDQUFDUSxLQUFLLENBQVEsRSxLQUFDckgsTUFBQSxDQUFBRyxPQUFBLENBQUFnQixhQUFBLGVBQU8wRixRQUFRLENBQUNPLEtBQUssQ0FBUSxDQUNsRCxDQUNMLENBQ0MsRUFDUDlCLE1BQU0sQ0FDRjtVQUVSLENBQUM7VUFBQ3RILE9BQUEsQ0FBQXdJLE9BQUEsR0FBQUEsT0FBQSJ9