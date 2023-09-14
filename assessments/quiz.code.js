System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.1/base", "@beyond-js/reactive@1.1.4/model", "@aimpact/ailearn-app@1.0.0/model/wrapper", "react@18.2.0", "pragmate-ui@0.0.36/form", "pragmate-ui@0.0.36/components", "@aimpact/chat@1.0.1/shared/hooks"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, bimport, __Bundle, __pkg, ims, Controller, Form, Quiz, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    Form: void 0,
    Quiz: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_beyondJsReact18Widgets101Base) {
      dependency_2 = _beyondJsReact18Widgets101Base;
    }, function (_beyondJsReactive114Model) {
      dependency_3 = _beyondJsReactive114Model;
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
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.2"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "10.0.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/ailearn-app", "1.0.0"], ["@aimpact/ailearn-app", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@1.0.0/assessments/quiz",
          "multibundle": true
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['@beyond-js/react-18-widgets/base', dependency_2], ['@beyond-js/reactive/model', dependency_3], ['@aimpact/ailearn-app/model/wrapper', dependency_4], ['react', dependency_5], ['pragmate-ui/form', dependency_6], ['pragmate-ui/components', dependency_7], ['@aimpact/chat/shared/hooks', dependency_8]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@1.0.0/assessments/quiz.code');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 4151893867,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _base = require("@beyond-js/react-18-widgets/base");
          var _store = require("./store");
          var _question = require("./views/question");
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
        hash: 884409596,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _wrapper = require("@aimpact/ailearn-app/model/wrapper");
          class StoreManager extends _model.ReactiveModel {
            load() {
              console.log(0.1, 'ready', _wrapper.AiLearnWrapper);
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /***************************
      INTERNAL MODULE: ./use-store
      ***************************/

      ims.set('./use-store', {
        hash: 269935359,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useStore = useStore;
          var _react = require("react");
          var _store = require("./store");
          function useStore() {
            const [store, setStore] = _react.default.useState(new _store.StoreManager());
            const [ready, setReady] = _react.default.useState(false);
            _react.default.useEffect(() => {
              const onChange = () => {
                setReady(store.ready);
              };
              store.on('change', onChange);
              store.load();
              if (store.ready) setReady(store.ready);
              return () => {};
            }, [store]);
            return [store, ready];
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/Input
      *****************************/

      ims.set('./views/Input', {
        hash: 2142169306,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.InputControl = void 0;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          const InputControl = ({
            option,
            name,
            isMultiple
          }) => {
            const Control = isMultiple ? _form.CheckBox : _form.Radio;
            return _react.default.createElement(Control, {
              label: option,
              value: option,
              name: name,
              required: true
            });
          };
          exports.InputControl = InputControl;
        }
      });

      /*****************************************
      INTERNAL MODULE: ./views/form/form-context
      *****************************************/

      ims.set('./views/form/form-context', {
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

      /**********************************
      INTERNAL MODULE: ./views/form/index
      **********************************/

      ims.set('./views/form/index', {
        hash: 2914741331,
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
              return () => ref.current.removeEventListener('change', onChange);
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

      /******************************************
      INTERNAL MODULE: ./views/form/submit-button
      ******************************************/

      ims.set('./views/form/submit-button', {
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

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 2183711285,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Quiz = void 0;
          var _react = require("react");
          var _question = require("./question");
          var _form = require("./form");
          var _components = require("pragmate-ui/components");
          var _hooks = require("@aimpact/chat/shared/hooks");
          var _beyond_context = require("beyond_context");
          var _submitButton = require("./form/submit-button");
          var _getFormData = require("../helpers/get-form-data");
          /*bundle*/ // formUtils.ts
          const Quiz = ({
            assessments
          }) => {
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            const handleSubmit = e => {
              e.preventDefault();
              const form = e.target;
              const formData = new FormData(form);
              const data = (0, _getFormData.getFormData)(form);
              console.log(formData, data); // Aquí puedes manejar los resultados
            };
            // const [ready, store] = useStore();
            if (!textsReady) return _react.default.createElement(_components.Spinner, {
              active: true
            });
            const output = assessments.questions.map((question, index) => _react.default.createElement(_question.Question, {
              key: index,
              index: `${index}`,
              question: question
            }));
            return _react.default.createElement(_form.Form, {
              onSubmit: handleSubmit,
              className: "assessment__container"
            }, _react.default.createElement("h3", null, assessments.title), output, _react.default.createElement(_submitButton.SubmitButton, {
              variant: "primary",
              type: "submit"
            }, texts?.finish));
          };
          exports.Quiz = Quiz;
        }
      });

      /********************************
      INTERNAL MODULE: ./views/question
      ********************************/

      ims.set('./views/question', {
        hash: 1563500389,
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
              const name = question.text.replace(/[^a-zA-Z0-9]/g, '');
              return _react.default.createElement(_Input.InputControl, {
                key: `${index}.${i}`,
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
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./views/form/index",
        "from": "Form",
        "name": "Form"
      }, {
        "im": "./views/index",
        "from": "Quiz",
        "name": "Quiz"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'Form') && _export("Form", Form = require ? require('./views/form/index').Form : value);
        (require || prop === 'Quiz') && _export("Quiz", Quiz = require ? require('./views/index').Quiz : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFcEIsSUFBSSxFQUFFaUYsS0FBSztnQkFBRTVELFVBQVUsRUFBRTJELFFBQVEsQ0FBQzNEO2NBQVUsRUFBSTtZQUM1RyxDQUFDLENBQUM7WUFFRixNQUFNWSxRQUFRLEdBQUdHLEtBQUssSUFBRztjQUN4QkEsS0FBSyxDQUFDQyxjQUFjLEVBQUU7WUFDdkIsQ0FBQztZQUVELE9BQ0N6QjtjQUFLd0UsU0FBUyxFQUFDO1lBQXFCLEdBQ25DeEUseUNBQUtvRSxRQUFRLENBQUNXLElBQUksQ0FBTSxFQUN2QkgsTUFBTSxDQUNGO1VBRVIsQ0FBQztVQUFDakciLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJleHBvcnRzIiwiZ2V0Rm9ybURhdGEiLCJmb3JtRWxlbWVudCIsImZvcm1EYXRhIiwiQXJyYXkiLCJmcm9tIiwiZWxlbWVudHMiLCJmb3JFYWNoIiwiZWxlbWVudCIsIm5hbWUiLCJ0eXBlIiwiY2hlY2tlZCIsInZhbHVlIiwiUmVhY3RpdmVNb2RlbCIsImxvYWQiLCJjb25zb2xlIiwibG9nIiwiQWlMZWFybldyYXBwZXIiLCJ1c2VTdG9yZSIsInN0b3JlIiwic2V0U3RvcmUiLCJSZWFjdCIsInVzZVN0YXRlIiwicmVhZHkiLCJzZXRSZWFkeSIsInVzZUVmZmVjdCIsIm9uQ2hhbmdlIiwib24iLCJJbnB1dENvbnRyb2wiLCJvcHRpb24iLCJpc011bHRpcGxlIiwiQ29udHJvbCIsIkNoZWNrQm94IiwiUmFkaW8iLCJsYWJlbCIsInJlcXVpcmVkIiwiRm9ybUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlRm9ybUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiRm9ybSIsInByb3BzIiwib25TdWJtaXQiLCJyZXN0UHJvcHMiLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiaXNWYWxpZCIsInNldElzVmFsaWQiLCJyZWYiLCJ1c2VSZWYiLCJpc0Zvcm1SZWFkeSIsImZvcm0iLCJjdXJyZW50IiwiZXJyb3IiLCJjaGVja2VkUmFkaW9Hcm91cHMiLCJTZXQiLCJoYXMiLCJyYWRpb0dyb3VwIiwicXVlcnlTZWxlY3RvckFsbCIsInNvbWUiLCJyYWRpbyIsImFkZCIsIkhUTUxJbnB1dEVsZW1lbnQiLCJpbmNsdWRlcyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiUHJvdmlkZXIiLCJjaGlsZHJlbiIsIlN1Ym1pdEJ1dHRvbiIsImF0dHJzIiwiZGlzYWJsZWQiLCJCdXR0b24iLCJRdWl6IiwiYXNzZXNzbWVudHMiLCJ0ZXh0c1JlYWR5IiwidGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJlIiwidGFyZ2V0IiwiRm9ybURhdGEiLCJkYXRhIiwiU3Bpbm5lciIsImFjdGl2ZSIsIm91dHB1dCIsInF1ZXN0aW9ucyIsIm1hcCIsInF1ZXN0aW9uIiwiaW5kZXgiLCJRdWVzdGlvbiIsImtleSIsImNsYXNzTmFtZSIsInRpdGxlIiwidmFyaWFudCIsImZpbmlzaCIsImlucHV0cyIsIm9wdGlvbnMiLCJpIiwidGV4dCIsInJlcGxhY2UiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbInRzL2NvbnRyb2xsZXIudHMiLCJ0cy9oZWxwZXJzL2dldC1mb3JtLWRhdGEudHMiLCJ0cy9zdG9yZS50cyIsInRzL3VzZS1zdG9yZS50cyIsInRzL3ZpZXdzL0lucHV0LnRzeCIsInRzL3ZpZXdzL2Zvcm0vZm9ybS1jb250ZXh0LnRzeCIsInRzL3ZpZXdzL2Zvcm0vaW5kZXgudHN4IiwidHMvdmlld3MvZm9ybS9zdWJtaXQtYnV0dG9uLnRzeCIsInRzL3ZpZXdzL2luZGV4LnRzeCIsInRzL3ZpZXdzL3F1ZXN0aW9uLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdfQ==