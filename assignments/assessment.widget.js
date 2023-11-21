System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.1/page", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.1.6/model", "react@18.2.0", "@aimpact/ailearn-app@0.0.14/components/ui", "@aimpact/chat@1.0.1/shared/components", "@beyond-js/react-18-widgets@1.0.1/hooks", "pragmate-ui@0.0.3/form", "pragmate-ui@0.0.3/components", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.0.3/alert"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, bimport, __Bundle, __pkg, ims, Controller, Header, View, Form, SelectionForm, Selection, Results, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    Header: void 0,
    View: void 0,
    Form: void 0,
    SelectionForm: void 0,
    Selection: void 0,
    Results: void 0
  });
  return {
    setters: [function (_beyondJsWidgets015Render) {
      dependency_0 = _beyondJsWidgets015Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_beyondJsReact18Widgets101Page) {
      dependency_3 = _beyondJsReact18Widgets101Page;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_4 = _aimpactAilearnSdk100Core;
    }, function (_beyondJsReactive116Model) {
      dependency_5 = _beyondJsReactive116Model;
    }, function (_react2) {
      dependency_6 = _react2;
    }, function (_aimpactAilearnApp0014ComponentsUi) {
      dependency_7 = _aimpactAilearnApp0014ComponentsUi;
    }, function (_aimpactChat101SharedComponents) {
      dependency_8 = _aimpactChat101SharedComponents;
    }, function (_beyondJsReact18Widgets101Hooks) {
      dependency_9 = _beyondJsReact18Widgets101Hooks;
    }, function (_pragmateUi003Form) {
      dependency_10 = _pragmateUi003Form;
    }, function (_pragmateUi003Components) {
      dependency_11 = _pragmateUi003Components;
    }, function (_aimpactChat101SharedHooks) {
      dependency_12 = _aimpactChat101SharedHooks;
    }, function (_pragmateUi003Alert) {
      dependency_13 = _pragmateUi003Alert;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-api", "0.1.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.2.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.6"], ["pragmate-ui", "0.0.3"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "10.0.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/ailearn-app", "0.0.14"], ["@aimpact/ailearn-app", "0.0.14"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.14/assignments/assessment",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['react', dependency_6], ['@aimpact/ailearn-app/components/ui', dependency_7], ['@aimpact/chat/shared/components', dependency_8], ['@beyond-js/react-18-widgets/hooks', dependency_9], ['pragmate-ui/form', dependency_10], ['pragmate-ui/components', dependency_11], ['@aimpact/chat/shared/hooks', dependency_12], ['pragmate-ui/alert', dependency_13]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-assignments-assessment",
        "vspecifier": "@aimpact/ailearn-app@0.0.14/assignments/assessment.widget",
        "is": "page",
        "route": "/assignments/${assignmentId}/assessment/${id}",
        "layout": "chat-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.14/assignments/assessment.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 3286864425,
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
            show() {
              this.#store.load(this.uri.vars.get('assignmentId'), this.uri.vars.get('id'));
            }
            /**
             * this method is executed when the widget is hidden
             */
            hide() {}
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
        hash: 3291813330,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _core = require("@aimpact/ailearn-sdk/core");
          var _model = require("@beyond-js/reactive/model");
          class StoreManager extends _model.ReactiveModel {
            #model;
            get model() {
              return this.#model;
            }
            #items;
            get items() {
              return this.#items;
            }
            #assessment;
            get assessment() {
              return this.#assessment;
            }
            #assignmentId;
            get assignmentId() {
              return this.#assignmentId;
            }
            #paramsUri;
            get paramsUri() {
              return this.#paramsUri;
            }
            #answers = new Map();
            get answers() {
              return this.#answers;
            }
            constructor() {
              super();
              if (!this.assignmentId) this.#assignmentId = this.sessionId;
            }
            async load(assignmentId, activityId) {
              try {
                const activity = new _core.Activity({
                  id: activityId,
                  assignmentId
                });
                this.#paramsUri = {
                  assignmentId,
                  activityId
                };
                this.#model = activity;
                await activity.isReady;
                await activity.load({
                  id: activityId,
                  assignmentId
                });
                this.ready = true;
                this.triggerEvent();
              } catch (e) {
                console.error(e);
              }
            }
            setAnswer(question, value) {
              this.#answers.set(question, value);
              this.trigger('set.answer');
            }
            async save(data) {
              let params = {
                answers: data
              };
              // todo: @carlos review with felix
              if (this.model.is === 'lesson') params.lessonId = this.model.id;else params.topicId = this.model.id;
              //todo: @jircdev review it.
              this.model.publish();
              return;
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 4165182190,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useAssessmentContext = exports.AssessmentContext = void 0;
          var _react = require("react");
          const AssessmentContext = exports.AssessmentContext = _react.default.createContext({});
          const useAssessmentContext = () => _react.default.useContext(AssessmentContext);
          exports.useAssessmentContext = useAssessmentContext;
        }
      });

      /******************************
      INTERNAL MODULE: ./views/header
      ******************************/

      ims.set('./views/header', {
        hash: 2761411302,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Header = Header;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _react = require("react");
          var _context = require("./context");
          /*bundle*/
          function Header() {
            const {
              texts,
              store
            } = (0, _context.useAssessmentContext)();
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_ui.PageHeader, {
              breadcrumb: [['AI-Learn', '/'], ['Assignment', `/assignment/${store.paramsUri.assignmentId}`], ['Class', `/assignment/${store.paramsUri.assignmentId}`], ['Assessment', '/']]
            }), _react.default.createElement("h4", {
              className: "h2 assessment__title"
            }, texts.title));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 1780353663,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _react = require("react");
          var _context = require("./context");
          var _header = require("./header");
          var _components = require("@aimpact/chat/shared/components");
          var _beyond_context = require("beyond_context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _selection = require("./selection");
          /*bundle*/
          function View({
            store
          }) {
            const [ready, setReady] = (0, _react.useState)(store.ready);
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            (0, _hooks.useBinder)([store], () => {
              setReady(store.ready);
            });
            if (!ready || !textsReady) return _react.default.createElement(_components.PreloadScreen, null);
            const contextValue = {
              texts,
              fetching: store.fetching,
              store
            };
            const {
              model: {
                assessment
              }
            } = store;
            return _react.default.createElement(_context.AssessmentContext.Provider, {
              value: contextValue
            }, _react.default.createElement(_header.Header, null), _react.default.createElement(_ui.PageContainer, null, _react.default.createElement(_ui.HeaderCard, {
              option: "light"
            }, _react.default.createElement("p", null, "Cuanto sab\u00E9s del inspector calls ?")), _react.default.createElement("div", {
              className: "my-20"
            }, _react.default.createElement(_selection.Selection, {
              assessments: assessment
            }))));
          }
        }
      });

      /********************************************
      INTERNAL MODULE: ./views/selection/form/Input
      ********************************************/

      ims.set('./views/selection/form/Input', {
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

      /************************************************************
      INTERNAL MODULE: ./views/selection/form/controls/form-context
      ************************************************************/

      ims.set('./views/selection/form/controls/form-context', {
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

      /*****************************************************
      INTERNAL MODULE: ./views/selection/form/controls/index
      *****************************************************/

      ims.set('./views/selection/form/controls/index', {
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

      /*****************************************************************
      INTERNAL MODULE: ./views/selection/form/controls/is-ready-function
      *****************************************************************/

      ims.set('./views/selection/form/controls/is-ready-function', {
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

      /*************************************************************
      INTERNAL MODULE: ./views/selection/form/controls/submit-button
      *************************************************************/

      ims.set('./views/selection/form/controls/submit-button', {
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

      /********************************************
      INTERNAL MODULE: ./views/selection/form/index
      ********************************************/

      ims.set('./views/selection/form/index', {
        hash: 2228990622,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SelectionForm = SelectionForm;
          var _react = require("react");
          var _question = require("./question");
          var _submitButton = require("./controls/submit-button");
          var _getFormData = require("../../../helpers/get-form-data");
          var _formContext = require("./controls/form-context");
          var _context = require("../../context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          /*bundle*/
          function SelectionForm({
            assessments
          }) {
            const {
              store,
              texts
            } = (0, _context.useAssessmentContext)();
            const [error, setError] = _react.default.useState('');
            const [totalAnswers, setAnswers] = _react.default.useState(store.answers.size);
            (0, _hooks.useBinder)([store], () => {
              setAnswers(store.answers.size);
              console.log(23, store.answers);
            }, 'set.answer');
            const [fetching, setFetching] = _react.default.useState(false);
            const ref = _react.default.useRef(null);
            const [isValid, setIsValid] = _react.default.useState(false);
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
              totalAnswered: totalAnswers,
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

      /***********************************************
      INTERNAL MODULE: ./views/selection/form/question
      ***********************************************/

      ims.set('./views/selection/form/question', {
        hash: 2986252008,
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

      /***************************************
      INTERNAL MODULE: ./views/selection/index
      ***************************************/

      ims.set('./views/selection/index', {
        hash: 3060074581,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Selection = void 0;
          var _react = require("react");
          var _hooks = require("@aimpact/chat/shared/hooks");
          var _beyond_context = require("beyond_context");
          var _results = require("./results");
          var _form = require("./form");
          /*bundle*/
          const Selection = ({
            assessments
          }) => {
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            const view = assessments?.selection ? 'results' : 'form';
            const views = {
              results: _results.Results,
              form: _form.SelectionForm
            };
            const Control = views[view];
            return _react.default.createElement(Control, {
              assessments: assessments,
              texts: texts
            });
          };
          exports.Selection = Selection;
        }
      });

      /***************************************************
      INTERNAL MODULE: ./views/selection/interfaces/answer
      ***************************************************/

      ims.set('./views/selection/interfaces/answer', {
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

      /******************************************************
      INTERNAL MODULE: ./views/selection/interfaces/questions
      ******************************************************/

      ims.set('./views/selection/interfaces/questions', {
        hash: 3781113722,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /************************************************************
      INTERNAL MODULE: ./views/selection/interfaces/selection-props
      ************************************************************/

      ims.set('./views/selection/interfaces/selection-props', {
        hash: 3118408654,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /***********************************************
      INTERNAL MODULE: ./views/selection/results/index
      ***********************************************/

      ims.set('./views/selection/results/index', {
        hash: 3374614139,
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
        "im": "./views/header",
        "from": "Header",
        "name": "Header"
      }, {
        "im": "./views/index",
        "from": "View",
        "name": "View"
      }, {
        "im": "./views/selection/form/controls/index",
        "from": "Form",
        "name": "Form"
      }, {
        "im": "./views/selection/form/index",
        "from": "SelectionForm",
        "name": "SelectionForm"
      }, {
        "im": "./views/selection/index",
        "from": "Selection",
        "name": "Selection"
      }, {
        "im": "./views/selection/results/index",
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
        (require || prop === 'Header') && _export("Header", Header = require ? require('./views/header').Header : value);
        (require || prop === 'View') && _export("View", View = require ? require('./views/index').View : value);
        (require || prop === 'Form') && _export("Form", Form = require ? require('./views/selection/form/controls/index').Form : value);
        (require || prop === 'SelectionForm') && _export("SelectionForm", SelectionForm = require ? require('./views/selection/form/index').SelectionForm : value);
        (require || prop === 'Selection') && _export("Selection", Selection = require ? require('./views/selection/index').Selection : value);
        (require || prop === 'Results') && _export("Results", Results = require ? require('./views/selection/results/index').Results : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsImV4cG9ydHMiLCJnZXRGb3JtRGF0YSIsImZvcm1FbGVtZW50IiwiZm9ybURhdGEiLCJBcnJheSIsImZyb20iLCJlbGVtZW50cyIsImZvckVhY2giLCJlbGVtZW50IiwibmFtZSIsInR5cGUiLCJjaGVja2VkIiwidmFsdWUiLCJfY29yZSIsIl9tb2RlbCIsIlJlYWN0aXZlTW9kZWwiLCJtb2RlbCIsIml0ZW1zIiwiYXNzZXNzbWVudCIsImFzc2lnbm1lbnRJZCIsInBhcmFtc1VyaSIsImFuc3dlcnMiLCJNYXAiLCJjb25zdHJ1Y3RvciIsInNlc3Npb25JZCIsImFjdGl2aXR5SWQiLCJhY3Rpdml0eSIsIkFjdGl2aXR5IiwiaWQiLCJpc1JlYWR5IiwicmVhZHkiLCJ0cmlnZ2VyRXZlbnQiLCJlIiwiY29uc29sZSIsImVycm9yIiwic2V0QW5zd2VyIiwicXVlc3Rpb24iLCJzZXQiLCJ0cmlnZ2VyIiwic2F2ZSIsImRhdGEiLCJwYXJhbXMiLCJpcyIsImxlc3NvbklkIiwidG9waWNJZCIsInB1Ymxpc2giLCJfcmVhY3QiLCJBc3Nlc3NtZW50Q29udGV4dCIsImRlZmF1bHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQXNzZXNzbWVudENvbnRleHQiLCJ1c2VDb250ZXh0IiwiX3VpIiwiX2NvbnRleHQiLCJIZWFkZXIiLCJ0ZXh0cyIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsIlBhZ2VIZWFkZXIiLCJicmVhZGNydW1iIiwiY2xhc3NOYW1lIiwidGl0bGUiLCJfaGVhZGVyIiwiX2NvbXBvbmVudHMiLCJfYmV5b25kX2NvbnRleHQiLCJfaG9va3MiLCJfc2VsZWN0aW9uIiwic2V0UmVhZHkiLCJ1c2VTdGF0ZSIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInVzZUJpbmRlciIsIlByZWxvYWRTY3JlZW4iLCJjb250ZXh0VmFsdWUiLCJmZXRjaGluZyIsIlByb3ZpZGVyIiwiUGFnZUNvbnRhaW5lciIsIkhlYWRlckNhcmQiLCJvcHRpb24iLCJTZWxlY3Rpb24iLCJhc3Nlc3NtZW50cyIsIl9mb3JtIiwiX2Fuc3dlciIsIklucHV0Q29udHJvbCIsImRvbmUiLCJpc011bHRpcGxlIiwib25DaGFuZ2UiLCJDb250cm9sIiwiQ2hlY2tCb3giLCJSYWRpbyIsIkFuc3dlciIsImxhYmVsIiwicmVxdWlyZWQiLCJGb3JtQ29udGV4dCIsInVzZUZvcm1Db250ZXh0IiwiRm9ybSIsInByb3BzIiwib25TdWJtaXQiLCJyZXN0UHJvcHMiLCJpc1ZhbGlkIiwic2V0SXNWYWxpZCIsInJlZiIsInVzZVJlZiIsInRvdGFsQW5zd2VyZWQiLCJzaXplIiwiZGlzYWJsZWQiLCJpc0Zvcm1SZWFkeSIsImZvcm0iLCJjdXJyZW50IiwiY2hlY2tlZFJhZGlvR3JvdXBzIiwiU2V0IiwiaGFzIiwicmFkaW9Hcm91cCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzb21lIiwicmFkaW8iLCJhZGQiLCJIVE1MSW5wdXRFbGVtZW50IiwiaW5jbHVkZXMiLCJTdWJtaXRCdXR0b24iLCJzZXREaXNhYmxlZCIsImNoaWxkcmVuIiwiYXR0cnMiLCJCdXR0b24iLCJfcXVlc3Rpb24iLCJfc3VibWl0QnV0dG9uIiwiX2dldEZvcm1EYXRhIiwiX2Zvcm1Db250ZXh0IiwiU2VsZWN0aW9uRm9ybSIsInNldEVycm9yIiwidG90YWxBbnN3ZXJzIiwic2V0QW5zd2VycyIsImxvZyIsInNldEZldGNoaW5nIiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsInRhcmdldCIsIm1lc3NhZ2UiLCJvdXRwdXQiLCJxdWVzdGlvbnMiLCJtYXAiLCJpbmRleCIsIlF1ZXN0aW9uIiwia2V5IiwidmFyaWFudCIsImZpbmlzaCIsIl9JbnB1dCIsImkiLCJpbnB1dHMiLCJvcHRpb25zIiwidGV4dCIsIl9yZXN1bHRzIiwidmlldyIsInNlbGVjdGlvbiIsInZpZXdzIiwicmVzdWx0cyIsIlJlc3VsdHMiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsIl9hbGVydCIsImV2YWx1YXRpb24iLCJjb3VudGVycyIsImNscyIsImFuc3dlciIsImNvcnJlY3RfYW5zd2VyIiwiYWNjdXJhY3kiLCJBbGVydCIsImNvcnJlY3QiLCJ0b3RhbCJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL2hlbHBlcnMvZ2V0LWZvcm0tZGF0YS50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2hlYWRlci50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3NlbGVjdGlvbi9mb3JtL0lucHV0LnRzeCIsIi90cy92aWV3cy9zZWxlY3Rpb24vZm9ybS9jb250cm9scy9mb3JtLWNvbnRleHQudHN4IiwiL3RzL3ZpZXdzL3NlbGVjdGlvbi9mb3JtL2NvbnRyb2xzL2luZGV4LnRzeCIsIi90cy92aWV3cy9zZWxlY3Rpb24vZm9ybS9jb250cm9scy9pcy1yZWFkeS1mdW5jdGlvbi50cyIsIi90cy92aWV3cy9zZWxlY3Rpb24vZm9ybS9jb250cm9scy9zdWJtaXQtYnV0dG9uLnRzeCIsIi90cy92aWV3cy9zZWxlY3Rpb24vZm9ybS9pbmRleC50c3giLCIvdHMvdmlld3Mvc2VsZWN0aW9uL2Zvcm0vcXVlc3Rpb24udHN4IiwiL3RzL3ZpZXdzL3NlbGVjdGlvbi9pbmRleC50c3giLCIvdHMvdmlld3Mvc2VsZWN0aW9uL2ludGVyZmFjZXMvYW5zd2VyLnRzeCIsIi9xdWVzdGlvbnMudHMiLCIvc2VsZWN0aW9uLXByb3BzLnRzIiwiL3RzL3ZpZXdzL3NlbGVjdGlvbi9yZXN1bHRzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlKLE1BQUEsQ0FBQU0sWUFBWSxFQUFFO2NBQ2hDLE9BQU8sSUFBSSxDQUFDLENBQUFGLEtBQU07WUFDbkI7WUFDQSxJQUFJRyxNQUFNQSxDQUFBO2NBQ1QsT0FBT04sTUFBQSxDQUFBTyxJQUFJO1lBQ1o7WUFFQTs7O1lBR0FDLElBQUlBLENBQUE7Y0FDSCxJQUFJLENBQUMsQ0FBQUwsS0FBTSxDQUFDTSxJQUFJLENBQUMsSUFBSSxDQUFDQyxHQUFHLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLGNBQWMsQ0FBQyxFQUFFLElBQUksQ0FBQ0YsR0FBRyxDQUFDQyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM3RTtZQUVBOzs7WUFHQUMsSUFBSUEsQ0FBQSxHQUFJOztVQUNSQyxPQUFBLENBQUFiLFVBQUEsR0FBQUEsVUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN4Qk0sTUFBTWMsV0FBVyxHQUFJQyxXQUE0QixJQUFvQjtZQUMzRSxNQUFNQyxRQUFRLEdBQW9CLEVBQUU7WUFFcENDLEtBQUssQ0FBQ0MsSUFBSSxDQUFDSCxXQUFXLENBQUNJLFFBQVEsQ0FBQyxDQUFDQyxPQUFP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