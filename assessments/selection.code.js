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
        const dependencies = new Map([["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.6"], ["pragmate-ui", "0.0.37"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["chart.js", "4.4.0"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "10.0.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/ailearn-app", "0.0.2"], ["@aimpact/ailearn-app", "0.0.2"]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU0sRUFDdkJGLE9BQU8sQ0FDSDtZQUVSLENBQUMsQ0FBQztZQUVGLE9BQ0NuRjtjQUFLOEUsU0FBUyxFQUFDO1lBQXVCLEdBQ3JDOUUseUNBQUswRCxLQUFLLENBQUNvQyxPQUFPLENBQU0sRUFDeEI5Riw2QkFBQytGLFlBQUs7Y0FBQ3RILElBQUksRUFBQztZQUFNLEdBQ2pCdUI7Y0FBSzhFLFNBQVMsRUFBQztZQUE0QyxHQUMxRDlFLDZDQUFTMEQsS0FBSyxDQUFDc0MsT0FBTyxNQUFXLEVBQ2pDaEcsOENBQ0NBLDJDQUFPMEYsUUFBUSxDQUFDTSxPQUFPLENBQVEsT0FBQ2hHLDJDQUFPMEYsUUFBUSxDQUFDTyxLQUFLLENBQVEsQ0FDcEQsQ0FDTCxFQUNOakc7Y0FBSzhFLFNBQVMsRUFBQztZQUE0QyxHQUMxRDlFLDZDQUFTMEQsS0FBSyxDQUFDd0MsS0FBSyxNQUFXLEVBQy9CbEcsOENBQ0NBLDJDQUFPMEYsUUFBUSxDQUFDUSxLQUFLLENBQVEsT0FBQ2xHLDJDQUFPMEYsUUFBUSxDQUFDTyxLQUFLLENBQVEsQ0FDbEQsQ0FDTCxDQUNDLEVBQ1AxQixNQUFNLENBQ0Y7VUFFUixDQUFDO1VBQUN4RyIsIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsIlNlbGVjdGlvbiIsImV4cG9ydHMiLCJnZXRGb3JtRGF0YSIsImZvcm1FbGVtZW50IiwiZm9ybURhdGEiLCJBcnJheSIsImZyb20iLCJlbGVtZW50cyIsImZvckVhY2giLCJlbGVtZW50IiwibmFtZSIsInR5cGUiLCJjaGVja2VkIiwidmFsdWUiLCJSZWFjdGl2ZU1vZGVsIiwiYXNzZXNzbWVudCIsIkFpTGVhcm5XcmFwcGVyIiwic2Vzc2lvbkFzc2Vzc21lbnQiLCJtb2RlbCIsInNlc3Npb25Nb2RlbCIsImxvYWQiLCJyZWFkeSIsInNhdmUiLCJkYXRhIiwicGFyYW1zIiwiYW5zd2VycyIsImlzIiwibGVzc29uSWQiLCJpZCIsInRvcGljSWQiLCJzYXZlU2VsZWN0aW9uIiwidXNlU3RvcmUiLCJzdG9yZSIsInNldFN0b3JlIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInNldFJlYWR5IiwidXNlRWZmZWN0Iiwib25DaGFuZ2UiLCJvbiIsIklucHV0Q29udHJvbCIsImRvbmUiLCJvcHRpb24iLCJpc011bHRpcGxlIiwiQ29udHJvbCIsIkNoZWNrQm94IiwiUmFkaW8iLCJBbnN3ZXIiLCJsYWJlbCIsInJlcXVpcmVkIiwiRm9ybUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlRm9ybUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiRm9ybSIsInByb3BzIiwib25TdWJtaXQiLCJyZXN0UHJvcHMiLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiaXNWYWxpZCIsInNldElzVmFsaWQiLCJyZWYiLCJ1c2VSZWYiLCJpc0Zvcm1SZWFkeSIsImZvcm0iLCJjdXJyZW50IiwiY29uc29sZSIsImVycm9yIiwiY2hlY2tlZFJhZGlvR3JvdXBzIiwiU2V0IiwiaGFzIiwicmFkaW9Hcm91cCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzb21lIiwicmFkaW8iLCJhZGQiLCJIVE1MSW5wdXRFbGVtZW50IiwiaW5jbHVkZXMiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIlByb3ZpZGVyIiwiY2hpbGRyZW4iLCJTdWJtaXRCdXR0b24iLCJhdHRycyIsImRpc2FibGVkIiwiQnV0dG9uIiwiU2VsZWN0aW9uRm9ybSIsImFzc2Vzc21lbnRzIiwidGV4dHNSZWFkeSIsInRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwic2V0RXJyb3IiLCJzdG9yZVJlYWR5IiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsIlNwaW5uZXIiLCJhY3RpdmUiLCJlIiwidGFyZ2V0IiwiRm9ybURhdGEiLCJtZXNzYWdlIiwib3V0cHV0IiwicXVlc3Rpb25zIiwibWFwIiwicXVlc3Rpb24iLCJpbmRleCIsIlF1ZXN0aW9uIiwia2V5IiwiY2xhc3NOYW1lIiwidGl0bGUiLCJ2YXJpYW50IiwiZmluaXNoIiwiaW5wdXRzIiwib3B0aW9ucyIsImkiLCJ0ZXh0Iiwic2VsZWN0aW9uIiwiUmVzdWx0cyIsIk9iamVjdCIsImV2YWx1YXRpb24iLCJjb3VudGVycyIsImNscyIsImFuc3dlciIsImFjY3VyYWN5IiwicmVzdWx0cyIsIkFsZXJ0IiwiY29ycmVjdCIsInRvdGFsIiwid3JvbmciXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbInRzL2NvbnRyb2xsZXIudHMiLCJ0cy9oZWxwZXJzL2dldC1mb3JtLWRhdGEudHMiLCJ0cy9zdG9yZS50cyIsInRzL3VzZS1zdG9yZS50cyIsInRzL3ZpZXdzL2Zvcm0vSW5wdXQudHN4IiwidHMvdmlld3MvZm9ybS9jb250cm9scy9mb3JtLWNvbnRleHQudHN4IiwidHMvdmlld3MvZm9ybS9jb250cm9scy9pbmRleC50c3giLCJ0cy92aWV3cy9mb3JtL2NvbnRyb2xzL3N1Ym1pdC1idXR0b24udHN4IiwidHMvdmlld3MvZm9ybS9pbmRleC50c3giLCJ0cy92aWV3cy9mb3JtL3F1ZXN0aW9uLnRzeCIsInRzL3ZpZXdzL2luZGV4LnRzeCIsInRzL3ZpZXdzL2ludGVyZmFjZXMvYW5zd2VyLnRzeCIsInRzL3ZpZXdzL2ludGVyZmFjZXMvcXVlc3Rpb25zLnRzIiwidHMvdmlld3MvaW50ZXJmYWNlcy9zZWxlY3Rpb24tcHJvcHMudHMiLCJ0cy92aWV3cy9yZXN1bHRzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXX0=